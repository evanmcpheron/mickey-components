import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BalloonIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 192C0 86 86 0 192 0s192 86 192 192c0 102.6-102.8 194.9-143.6 227.5-9.3 7.4-12.5 20.4-7.1 31l21.4 42.7c.9 1.8 1.4 3.8 1.4 5.8 0 7.1-5.8 12.9-12.9 12.9H140.9c-7.1 0-12.9-5.8-12.9-12.9 0-2 .5-4 1.4-5.8l21.4-42.7c5.3-10.6 2.1-23.6-7.1-31C102.8 386.9 0 294.6 0 192m96-16c0-44.2 35.8-80 80-80 8.8 0 16-7.2 16-16s-7.2-16-16-16c-61.9 0-112 50.1-112 112 0 8.8 7.2 16 16 16s16-7.2 16-16"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 192c0-79.5 64.5-144 144-144s144 64.5 144 144c0 35.8-18.4 74.2-46.5 110.7-27.5 35.7-60.2 64.2-79 79.3-7.6 6.1-13.8 13.5-18.4 21.8-4.6-8.3-10.9-15.8-18.4-21.8-18.9-15.1-51.5-43.6-79-79.3C66.4 266.2 48 227.8 48 192m102.7 258.5L144 464l-.1.1-3 6-11.6 23.2c-.9 1.8-1.4 3.8-1.4 5.8 0 7.1 5.8 12.9 12.9 12.9h102.1c7.1 0 12.9-5.8 12.9-12.9 0-2-.5-4-1.4-5.8l-11.6-23.2-3-6-.1-.1-6.7-13.5c-5.3-10.6-2.1-23.6 7.1-31C281.2 386.9 384 294.6 384 192 384 86 298 0 192 0S0 86 0 192c0 102.6 102.8 194.9 143.6 227.5 9.3 7.4 12.5 20.4 7.1 31M128 184c0-30.9 25.1-56 56-56 13.3 0 24-10.7 24-24s-10.7-24-24-24c-57.4 0-104 46.6-104 104 0 13.3 10.7 24 24 24s24-10.7 24-24"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m205.6 405.8-13.6 9.5-13.6-9.5-.2-.2-1.1-.8c-1-.7-2.6-1.9-4.6-3.4-4-3-9.9-7.6-17-13.5-14.2-11.8-33.1-28.8-51.8-49.4C65 295.9 32 243.6 32 192c0-88.4 71.6-160 160-160s160 71.6 160 160c0 51.6-33 103.9-71.7 146.5-18.8 20.6-37.6 37.6-51.8 49.4-7.1 5.9-12.9 10.5-17 13.5-2 1.5-3.6 2.7-4.6 3.4l-1.1.8zM192 439.6l3.4 6.8 16.8 33.6h-40.4l16.8-33.7 3.4-6.8zM0 192c0 128 160 240 160 240l-30.6 61.3c-.9 1.8-1.4 3.8-1.4 5.8 0 7.1 5.8 12.9 12.9 12.9h102.2c7.1 0 12.9-5.8 12.9-12.9 0-2-.5-4-1.4-5.8L224 432s160-112 160-240C384 86 298 0 192 0S0 86 0 192m112-16c0-35.3 28.7-64 64-64 8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96 0 8.8 7.2 16 16 16s16-7.2 16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M214.4 427.2 208 432h-32l-6.4-4.8h-.1l-.3-.2-1.2-1c-1.1-.9-2.7-2.1-4.8-3.8-4.2-3.4-10.3-8.4-17.6-14.9-14.6-12.9-34.1-31.4-53.5-53.8C52.6 308.1 16 249.9 16 192 16 94.8 94.8 16 192 16s176 78.8 176 176c0 57.9-36.6 116.1-76.1 161.5-19.4 22.3-38.9 40.8-53.5 53.8-7.3 6.5-13.4 11.5-17.6 14.9-2.1 1.7-3.7 3-4.8 3.8l-1.2.9-.3.2h-.1zm-4.3 20.8 27.4 48h-91.1l27.4-48zm13.9-8s160-120 160-248C384 86 298 0 192 0S0 86 0 192c0 128 160 248 160 248l-30.3 53.1c-1.1 1.9-1.7 4.1-1.7 6.3 0 7 5.7 12.6 12.6 12.6h102.8c7 0 12.6-5.7 12.6-12.6 0-2.2-.6-4.4-1.7-6.3zM168 96c4.4 0 8-3.6 8-8s-3.6-8-8-8c-48.6 0-88 39.4-88 88 0 4.4 3.6 8 8 8s8-3.6 8-8c0-39.8 32.2-72 72-72"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M176 96c-44.2 0-80 35.8-80 80 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112 8.8 0 16 7.2 16 16s-7.2 16-16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 192C0 86 86 0 192 0s192 86 192 192c0 102.6-102.8 194.9-143.6 227.5-9.3 7.4-12.5 20.4-7.1 31l21.4 42.7c.9 1.8 1.4 3.8 1.4 5.8 0 7.1-5.8 12.9-12.9 12.9H140.9c-7.1 0-12.9-5.8-12.9-12.9 0-2 .5-4 1.4-5.8l21.4-42.7c5.3-10.6 2.1-23.6-7.1-31C102.8 386.9 0 294.6 0 192m96-16c0-44.2 35.8-80 80-80 8.8 0 16-7.2 16-16s-7.2-16-16-16c-61.9 0-112 50.1-112 112 0 8.8 7.2 16 16 16s16-7.2 16-16"
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
