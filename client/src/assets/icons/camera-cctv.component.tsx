import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CameraCctvIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M140.3 2.5c-14.9-6.2-32.1-.3-40.1 13.7l-96 168c-4.6 8-5.5 17.5-2.5 26.2s9.5 15.7 18 19.2l158.1 65.9L137.9 400H64v-16c0-17.7-14.3-32-32-32S0 366.3 0 384v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h96c13.3 0 25.2-8.2 29.9-20.6l47-123.4 70.8 29.5c9.9 4.1 21.2 3 30.1-2.9l192-128c9.8-6.5 15.2-18 14.1-29.7s-8.6-21.9-19.5-26.5l-384-160zm373.1 396.1c3.9 1.8 8.4 1.9 12.5.3s7.2-4.7 8.9-8.7l40-96c3.3-8-.3-17.2-8.3-20.8l-36.7-16.3-132.9 88.5 116.5 52.9z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m54.9 192.2 169.3 70.5c.1 0 .2.1.2.1.6.2 1.1.4 1.6.7l92.2 38.4 160-106.7-343.3-143zm130.3 106.3-165.5-69c-8.5-3.5-15-10.5-18-19.2s-2-18.2 2.5-26.2l96-168c8-14 25.2-19.9 40.1-13.7l384 160c10.9 4.5 18.4 14.7 19.5 26.5s-4.3 23.2-14.1 29.7l-192 128c-8.9 5.9-20.2 7-30.1 2.9L229.5 317l-47.1 123.5C178.9 449.8 170 456 160 456H48v32c0 13.3-10.7 24-24 24S0 501.3 0 488V376c0-13.3 10.7-24 24-24s24 10.7 24 24v32h95.5zM397 345.6 529.9 257l36.7 16.3c7.9 3.5 11.6 12.8 8.3 20.8l-40 96c-1.7 4-4.9 7.2-8.9 8.7s-8.5 1.5-12.5-.3l-116.6-52.9z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 32 32 200l288 120 192-128zm-27.8-15.9c8-14 25.2-19.9 40.1-13.7l384 160c10.9 4.5 18.4 14.7 19.5 26.5s-4.3 23.2-14.1 29.7l-192 128c-8.9 5.9-20.2 7-30.1 2.9L222 313.8l-47 123.9c-2.4 6.2-8.3 10.3-15 10.3H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16s16 7.2 16 16v48h117l43.6-114.4-172.9-72c-8.5-3.5-15-10.5-18-19.2s-2-18.2 2.5-26.2l96-168zm296.7 329.5 31.4-20.9 83.3 37.9 27.6-66.3-41-18.2 31.5-21 36.7 16.3c7.9 3.5 11.6 12.8 8.3 20.8l-40 96c-3.3 8-13.5 12-21.4 8.4z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m134.2 17.2 384 160c5.4 2.3 9.2 7.4 9.8 13.2s-2.1 11.6-7 14.9l-192 128c-4.5 3-10.1 3.5-15 1.5l-288-120c-4.2-1.8-7.5-5.3-9-9.6s-1-9.1 1.3-13.1l96-168c4-7 12.6-9.9 20-6.8zm6.2-14.8c-14.9-6.2-32.1-.3-40.1 13.7l-96 168c-4.6 8-5.5 17.5-2.5 26.2s9.5 15.7 18 19.2L200 304.6 154.5 424H16v-64c0-4.4-3.6-8-8-8s-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8v-64h144c3.3 0 6.3-2.1 7.5-5.2l47.3-124 93 38.7c9.9 4.1 21.2 3 30.1-2.9l192-128c9.8-6.5 15.2-18 14.1-29.7s-8.6-21.9-19.5-26.5l-384-160zm373 396.2c7.9 3.6 18.1-.4 21.4-8.4l40-96c3.3-8-.3-17.2-8.3-20.8l-36.7-16.3-15.4 10.3 45.8 20.4c.1 0 .1.1.1.1s0 .1.1.1 0 .1 0 .1v.1L520.5 384c-.1.1-.2.1-.3.2s-.3.1-.4.1l-107.5-48.9-15.4 10.2 116.5 52.9z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m362.6 330 150.8 68.5c3.9 1.8 8.4 1.9 12.5.3s7.2-4.7 8.9-8.7l40-96c3.3-8-.3-17.2-8.3-20.8l-71.3-31.7zm-125.7-10-59.1-24.6L137.9 400H64v-16c0-17.7-14.3-32-32-32S0 366.3 0 384v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h96c13.3 0 25.2-8.2 29.9-20.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M140.3 2.5c-14.9-6.2-32.1-.3-40.1 13.7l-96 168c-4.6 8-5.5 17.5-2.5 26.2s9.5 15.7 18 19.2l288 120c9.9 4.1 21.2 3 30.1-2.9l192-128c9.8-6.5 15.2-18 14.1-29.7s-8.6-21.9-19.5-26.5l-384-160z"
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
