import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ForwardStepIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone" | Dimensions;
  }
> = ({ type, size, color, active, className, style, ...more }) => {
  const domRef: MickeyObject = useRef(null);

  const { onPress, onOut, onMove, onUp, onDown, onOver, groupId } = more;
  const pointerEvents = {
    onPress,
    onOut,
    onMove,
    onUp,
    onDown,
    onOver,
    groupId,
  };

  usePointerEvent({ element: domRef, active: active, ...pointerEvents });

  const internalProperties = removeUndefined({
    className,
    style: { ...(style || {}) },
    active,
    size,
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M240 88c0-13.3 10.7-24 24-24s24 10.7 24 24v336c0 13.3-10.7 24-24 24s-24-10.7-24-24V318.9L63.3 442.6c-5.1 3.5-11.1 5.4-17.3 5.4-16.5 0-30-13.5-30-30.1V94.1C16 77.5 29.5 64 46.1 64c6.2 0 12.2 1.9 17.3 5.4L240 193.1zm0 172.3v-8.6L64 128.5v255z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M256 80c0-8.8 7.2-16 16-16s16 7.2 16 16v352c0 8.8-7.2 16-16 16s-16-7.2-16-16V296.2L77.4 441.8c-5 4-11.2 6.2-17.6 6.2-15.4 0-27.8-12.4-27.8-27.8V91.8C32 76.4 44.4 64 59.8 64c6.4 0 12.6 2.2 17.6 6.2L256 215.8zM64 100.6v310.8L254.7 256z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M272 72c0-4.4 3.6-8 8-8s8 3.6 8 8v368c0 4.4-3.6 8-8 8s-8-3.6-8-8V277.6L80.2 441c-5.3 4.5-12 7-19 7-16.1 0-29.2-13.1-29.2-29.2V93.2C32 77.1 45.1 64 61.2 64c6.9 0 13.7 2.5 19 7L272 234.4zm0 184c0-.4-.2-.8-.5-1L69.8 83.2c-2.4-2-5.4-3.2-8.6-3.2C53.9 80 48 85.9 48 93.2v325.6c0 7.3 5.9 13.2 13.2 13.2 3.1 0 6.2-1.1 8.6-3.2L271.5 257c.3-.3.5-.6.5-1"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M288 448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v320c0 17.7 14.3 32 32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4l192-160L256 271v-30l-11.5-9.6-192-160C43 63.5 29.7 61.7 18.4 67S0 83.6 0 96v320c0 12.4 7.2 23.7 18.4 29"
                />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
