import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonSeatReclinedIcon: React.FC<
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
                  d="M176 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96m89 160-8-32h63c17.7 0 32-14.3 32-32s-14.3-32-32-32h-79.2c-6.6-19-24.5-32-44.9-32-30.9 0-53.6 29.1-46.1 59l21.1 84.5C178 332 203.6 352 233 352h85.8c6.7 0 12.6 4.1 15 10.4l36.2 96.8c6 16.1 23.8 24.6 40.1 19.1l48-16c16.8-5.6 25.8-23.7 20.2-40.5s-23.7-25.8-40.5-20.2l-18.7 6.2-25.5-68c-11.7-31.2-41.6-51.9-74.9-51.9H265zM95.5 154.1c-3.3-17.4-20-28.8-37.3-25.6s-28.8 20-25.6 37.3l33.3 177.8C77.2 404.1 130.1 448 191.7 448H272c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80.3c-30.8 0-57.2-21.9-62.9-52.2z"
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
                  d="M176 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96m16.9 189.6 16.9 76.2c.8 3.7 4.1 6.3 7.8 6.3H234l-19.4-87.3c-1.1-5.1-5.7-8.7-10.9-8.7-7.1 0-12.4 6.6-10.9 13.6zm68.6-15.2.4 1.7H328c13.3 0 24 10.7 24 24s-10.7 24-24 24h-55.4l10.7 48h35.5c30 0 56.9 18.6 67.4 46.7l28.5 76.1 34.7-9.9c12.7-3.6 26 3.7 29.7 16.5s-3.7 26-16.5 29.7l-56 16c-12 3.4-24.7-2.9-29.1-14.6l-36.3-96.9c-3.5-9.4-12.5-15.6-22.5-15.6h-101c-26.2 0-49-18.2-54.7-43.9L146.1 232c-8.2-36.9 19.9-72 57.7-72 27.7 0 51.7 19.3 57.7 46.3zM79.6 147.8l34 192.7c6.1 34.4 36 59.5 70.9 59.5H280c13.3 0 24 10.7 24 24s-10.7 24-24 24h-95.5c-58.2 0-108.1-41.8-118.2-99.1l-34-192.7c-2.3-13.1 6.4-25.5 19.5-27.8s25.5 6.4 27.8 19.5z"
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
                  d="M160 88a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 56a56 56 0 1 1 0-112 56 56 0 1 1 0 112m-120.2-2.6 34.6 207.8c6.4 38.6 39.8 66.8 78.9 66.8H288c8.8 0 16 7.2 16 16s-7.2 16-16 16H177.3c-54.8 0-101.5-39.6-110.5-93.6L32.2 146.6c-1.5-8.7 4.4-17 13.2-18.4s17 4.4 18.4 13.2m120.4 98.5 11.1 66.7c1.3 7.7 8 13.4 15.8 13.4h42l-12.9-77.2-.1-.4-1.9-11.6c-2.2-13.2-13.6-22.9-27-22.9-16.9 0-29.8 15.2-27 31.9zm27-63.9c28.5 0 52.9 20.2 58.3 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16h-61.1l10.7 64h33.2c26.7 0 50.6 16.5 59.9 41.5L410 445l50.2-12.5c8.6-2.1 17.3 3.1 19.4 11.6s-3.1 17.3-11.6 19.4l-64 16c-7.9 2-16-2.3-18.9-9.9l-36.3-96.9c-4.7-12.5-16.6-20.8-30-20.8H211.1c-23.5 0-43.5-17-47.3-40.1l-11.1-66.7c-6-36.2 21.9-69.2 58.6-69.2z"
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
                  d="M241 240c-4.9 0-9.6 2.3-12.6 6.2s-4.1 8.9-2.9 13.7l8 32c1.8 7.1 8.2 12.1 15.5 12.1h69.8c26.7 0 50.6 16.5 59.9 41.5l25.5 68c3 8.1 11.9 12.3 20 9.6l18.7-6.2c8.4-2.8 17.4 1.7 20.2 10.1s-1.7 17.4-10.1 20.2l-48 16c-8.2 2.7-17-1.5-20-9.6l-36.3-96.9c-4.7-12.5-16.6-20.8-30-20.8H217c-22 0-41.2-15-46.6-36.4L149.3 215c-5-19.9 10.1-39.2 30.6-39.2 13.5 0 25.4 8.6 29.8 21.2 2.2 6.5 8.3 10.8 15.1 10.8H320c8.8 0 16 7.2 16 16s-7.2 16-16 16h-79zM128 80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m121 208-4-16-4-16h79c17.7 0 32-14.3 32-32s-14.3-32-32-32h-95.2c-6.6-19-24.5-32-44.9-32-30.9 0-53.6 29.1-46.1 59l21.1 84.5C162 332 187.6 352 217 352h101.8c6.7 0 12.6 4.1 15 10.4l36.2 96.8c6 16.1 23.8 24.6 40.1 19.1l48-16c16.8-5.6 25.8-23.7 20.2-40.5s-23.7-25.8-40.5-20.2l-18.7 6.2-25.5-68c-11.7-31.2-41.6-51.9-74.9-51.9H249zM208 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0M47.8 134.4c-.9-4.3-5.1-7.1-9.4-6.2s-7.1 5.1-6.2 9.4L72.4 333c10 48.3 52.5 83 101.9 83H296c4.4 0 8-3.6 8-8s-3.6-8-8-8H174.2c-41.8 0-77.8-29.4-86.2-70.3z"
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
                  d="M58.1 128.5c17.4-3.3 34.1 8.2 37.3 25.6l33.3 177.7c5.7 30.3 32.1 52.2 62.9 52.2H272c17.7 0 32 14.3 32 32s-14.3 32-32 32h-80.3c-61.6 0-114.5-43.9-125.8-104.4L32.5 165.9c-3.3-17.4 8.2-34.1 25.6-37.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m129 176 8 32h53.8c33.3 0 63.2 20.7 74.9 51.9l25.5 68 18.7-6.2c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5l-48 16c-16.3 5.4-34-3-40.1-19.1l-36.3-96.9c-2.3-6.2-8.3-10.4-15-10.4H233c-29.4 0-55-20-62.1-48.5L149.8 219c-7.5-30 15.2-59 46.1-59 20.4 0 38.4 13 44.9 32H320c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
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
