import type { MickeyObject } from "./types/base.types";

export interface PublishOptions {
  bubbles?: boolean;
  cancelable?: boolean;
}

const listenerMap: Record<string, Map<symbol, EventListener>> = {};

export const isChannelActive = (eventName: string) => {
  return !!listenerMap[eventName];
};

export const subscribeToChannel = async <T = MickeyObject>(
  channelName: string,
  onMessage: ((data: T) => void) | null
): Promise<symbol> => {
  const uniqueListenerId = Symbol();
  const _callBack = onMessage;

  const _internalCallback = (event: Event) => {
    if (event instanceof CustomEvent) {
      const _detailData: T = event.detail;
      if (_callBack) {
        _callBack(_detailData);
      }
    }
  };

  window.addEventListener(
    channelName as keyof WindowEventMap,
    _internalCallback
  );

  if (!listenerMap[channelName]) {
    listenerMap[channelName] = new Map();
  }

  listenerMap[channelName].set(uniqueListenerId, _internalCallback);

  return uniqueListenerId;
};

export const disposeChannel = async (
  channelName: string,
  listenerId: symbol
) => {
  const channelListeners = listenerMap[channelName];

  if (channelListeners && channelListeners.has(listenerId)) {
    try {
      const listener = channelListeners.get(listenerId);
      if (listener) {
        window.removeEventListener(channelName, listener);
        channelListeners.delete(listenerId);
      }

      if (channelListeners.size === 0) {
        delete listenerMap[channelName];
      }
    } catch {
      /** */
    }
  }
};

export const publishOnChannel = async <T = MickeyObject>(
  channelName: string,
  data: T,
  options?: PublishOptions
) => {
  window.dispatchEvent(
    new CustomEvent(channelName, {
      bubbles: options?.bubbles ?? true,
      cancelable: options?.cancelable ?? false,
      detail: data,
    })
  );
};
