import { useEffect, useState, useRef } from "react";
import type { MickeyObject } from "../types/base.types";
import { subscribeToChannel, disposeChannel } from "../dom.events";

export type MutableSubscriber = <T>(
  channelName: string,
  fn?: (data: MickeyObject) => T | Promise<T>
) => T | undefined;

export const useSubscriber: MutableSubscriber = <T,>(
  channelName: string,
  fn?: (data: MickeyObject) => T | Promise<T>
) => {
  const [channelData, setChannelData] = useState<T | undefined>(undefined);
  const fnPointer = useRef(fn);
  const listenerIdRef = useRef<symbol | null>(null);

  useEffect(() => {
    fnPointer.current = fn;

    const subscribe = async () => {
      if (listenerIdRef.current === null) {
        const subscriptionListener = async (ev: MickeyObject) => {
          if (ev) {
            if (fnPointer.current) {
              const result = await fnPointer.current(ev);
              setChannelData(result as T);
            } else {
              setChannelData(ev as T);
            }
          }
        };

        listenerIdRef.current = await subscribeToChannel(
          channelName,
          subscriptionListener
        );
      }
    };

    subscribe();

    return () => {
      if (listenerIdRef.current !== null) {
        disposeChannel(channelName, listenerIdRef.current);
        listenerIdRef.current = null;
      }
    };
  }, [channelName]);

  return channelData;
};
