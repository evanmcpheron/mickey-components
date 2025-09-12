import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DiceD8Icon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M240 16c0-6.5-4-12.4-10-14.8s-13-1-17.5 3.7l-208 216c-3.7 3.9-5.3 9.3-4.1 14.6s4.9 9.5 9.9 11.5l208 80c4.9 1.9 10.5 1.2 14.8-1.7s6.9-7.9 6.9-13.2zM34.6 307.5c-4.1 6.3-3.3 14.6 1.9 20l176 179.7c4.5 4.6 11.5 6.1 17.5 3.6s10-8.3 10-14.8V384c0-6.6-4.1-12.6-10.3-14.9l-176-67.7c-7-2.7-15-.1-19.1 6.1m442.7 0c-4.1-6.3-12.1-8.8-19.1-6.1l-176 67.7c-6.2 2.4-10.3 8.3-10.3 14.9v112c0 6.5 3.9 12.4 10 14.8s12.9 1 17.5-3.6l176-179.7c5.3-5.4 6.1-13.7 1.9-20M282 1.2c-6 2.4-10 8.3-10 14.8v296c0 5.3 2.6 10.2 6.9 13.2s9.9 3.6 14.8 1.7l208-80c5-1.9 8.7-6.2 9.9-11.5s-.4-10.7-4.1-14.6l-208-216C295 .2 288.1-1.3 282 1.2"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M239 7c9.4-9.4 24.6-9.4 33.9 0L505 239c9.4 9.4 9.4 24.6 0 33.9L273 505c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9zM126.2 324.3 232 430.1V368zM280 368v62l105.8-105.7zm165.6-120.4L280 81.9v234.2zM232 81.9 66.4 247.6 232 316.1z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M240 51.3 44.3 247.1l195.7 81zM72.8 293.5 240 460.7v-98zM272 460.7l167.2-167.2L272 362.7zm195.8-213.6L272 51.3v276.8zM239 7c9.4-9.4 24.6-9.4 33.9 0L505 239c9.4 9.4 9.4 24.6 0 33.9L273 505c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M248 20.7 19.8 248.9 248 332.5zM24.2 267.5 248 491.3V349.6zM264 491.3l223.8-223.8L264 349.6zm228.2-242.4L264 20.7v311.8l228.2-83.7zM239 7c9.4-9.4 24.6-9.4 33.9 0L505 239c9.4 9.4 9.4 24.6 0 33.9L273 505c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M230 1.2c6 2.4 10 8.3 10 14.8v296c0 5.3-2.6 10.2-6.9 13.2s-9.9 3.6-14.8 1.7l-208-80c-5-1.9-8.7-6.2-9.9-11.5s.4-10.7 4.1-14.6l208-216C217 .2 223.9-1.3 230 1.2m52 0c6.1-2.4 13-1 17.5 3.7l208 216c3.7 3.9 5.3 9.3 4.1 14.6s-4.9 9.5-9.9 11.5l-208 80c-4.9 1.9-10.5 1.2-14.8-1.7s-6.9-7.9-6.9-13.2V16c0-6.5 4-12.4 10-14.8"
                />
                <path
                  className="aps-icon-foreground"
                  d="M34.6 307.5c-4.1 6.3-3.3 14.6 1.9 20l176 179.7c4.5 4.6 11.5 6.1 17.5 3.6s10-8.3 10-14.8V384c0-6.6-4.1-12.6-10.3-14.9l-176-67.7c-7-2.7-15-.1-19.1 6.1m442.7 0c-4.1-6.3-12.1-8.8-19.1-6.1l-176 67.7c-6.2 2.4-10.3 8.3-10.3 14.9v112c0 6.5 3.9 12.4 10 14.8s12.9 1 17.5-3.6l176-179.7c5.3-5.4 6.1-13.7 1.9-20"
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
