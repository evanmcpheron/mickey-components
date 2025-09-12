import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const KnifeKitchenIcon: React.FC<
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
                  d="M488 0c9.4 0 18.3 3.7 25 10.3L557.7 55c6.6 6.6 10.3 15.6 10.3 25s-3.7 18.3-10.3 25l-97 97c-3 3-4.7 7.1-4.7 11.3v31.9c0 17.4-9.4 33.5-24.7 42l-31 17.2-104.4-104.3-11.3-11.3L463 10.3C469.7 3.7 478.6 0 488 0m-56 160a16 16 0 1 0 0-32 16 16 0 1 0 0 32m80-80a16 16 0 1 0-32 0 16 16 0 1 0 32 0M262 211.4l11.3 11.3 126 126c6.2 6.2 6.2 16.4 0 22.6C321.4 449.2 235.3 512 112 512c-25.6 0-50.9-4.2-69.5-8.4-9.4-2.1-17.2-4.2-22.7-5.7-2.8-.8-4.9-1.4-6.5-1.9q-1.2-.3-1.8-.6l-.5-.2h-.1L16 480l-5.1 15.2c-5.3-1.8-9.2-6.1-10.5-11.5s.3-11.1 4.3-15l246-246z"
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
                  d="M488 0c-9.4 0-18.3 3.7-25 10.3L284.6 188.7l11.3 11.3 104.4 104.4 31-17.2c15.2-8.5 24.7-24.5 24.7-42v-31.9c0-4.2 1.7-8.3 4.7-11.3l97-97c6.6-6.6 10.3-15.6 10.3-25s-3.7-18.3-10.3-25L513 10.3C506.3 3.7 497.4 0 488 0m-56 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48-48a16 16 0 1 1 32 0 16 16 0 1 1-32 0M4.7 468.7c-8.4 8.4-4.7 22.9 6.5 26.6C43.4 505.7 78.1 512 112 512c123.3 0 209.4-62.8 287.3-140.7 6.2-6.2 6.2-16.4 0-22.6l-23-23-33.9 33.9C275 422.2 205.5 464 112 464c-10.7 0-21.6-.8-32.6-2.2L262 279.3l33.9-33.9-33.9-34-33.9 33.9z"
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
                  d="m485.7 33-175 175 76.2 76.2 45-25c5.1-2.8 8.2-8.2 8.2-14v-31.9c0-12.7 5.1-24.9 14.1-33.9l89-89c.6-.6 1-1.5 1-2.3s-.3-1.7-1-2.3L490.3 33c-.6-.6-1.5-1-2.3-1s-1.7.3-2.3 1M488 0c9.4 0 18.3 3.7 25 10.3L565.7 63c6.6 6.6 10.3 15.6 10.3 25s-3.7 18.3-10.3 25l-89 89c-3 3-4.7 7.1-4.7 11.3v31.9c0 17.4-9.4 33.5-24.7 42l-45 25c-12.5 6.9-28.1 4.8-38.2-5.3L288 230.6c-12.5-12.5-12.5-32.8 0-45.3l175-175C469.7 3.7 478.6 0 488 0M4.7 468.7l238-238.1 22.6 22.6L46.6 472c21.7 5.1 43.9 8 65.4 8 99.8 0 165.6-39.9 232.5-102.4l-9-9c-12.5-12.5-12.5-32.7 0-45.2l33 33c11.5 12.6 11.3 32.2-1.3 43.9-70.6 66-144 111.7-255.2 111.7-33.9 0-68.6-6.3-100.8-16.8-11.2-3.7-14.9-18.1-6.5-26.5M416 144a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M479.8 19.6 313 186.3c-3.1 3.1-3.1 8.2 0 11.3l85 85c2.3 2.3 5.8 3 8.8 1.7l26.7-11.3c8.8-3.8 14.5-12.5 14.5-22.1v-30.3c0-10.1 3.8-19.9 10.8-27.3L557 88c1.9-2 3-4.7 3-7.5 0-3.1-1.3-6.1-3.7-8.2l-59.9-53.2c-2.2-2-5.1-3.1-8.1-3.1-3.2 0-6.3 1.3-8.6 3.6zM488.3 0c6.9 0 13.5 2.5 18.7 7.1l59.9 53.3c5.8 5.1 9.1 12.5 9.1 20.2 0 6.8-2.6 13.4-7.3 18.4l-98.2 105.2c-4.1 4.4-6.5 10.3-6.5 16.4v30.3c0 16-9.5 30.5-24.2 36.8l-26.6 11.4c-9 3.9-19.5 1.9-26.4-5.1l-85-85c-9.4-9.4-9.4-24.6 0-33.9L468.4 8.2C473.7 3 480.9 0 488.3 0M4.7 468.7l238-238.1 11.3 11.3-237.9 238c0 .1.1.2.1.2 30.9 10 63.9 15.9 95.8 15.9 105.7 0 175.4-42.9 244.2-107.5 6-5.7 6.3-15.6 0-21.9l-9.4-9.4c-6.2-6.2-6.2-16.4 0-22.6l21.7 21.7c11.5 12.6 11.3 32.2-1.3 43.9C296.6 466.3 223.2 512 112 512c-33.9 0-68.6-6.3-100.8-16.8-11.2-3.7-14.9-18.1-6.5-26.5M416 144a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M273.3 222.7 262 211.4l-11.3 11.3-246 246c-3.9 3.9-5.5 9.6-4.3 15s5.3 9.8 10.5 11.5L16 480l-5.1 15.2h.1l.5.2q.6.15 1.8.6c1.5.5 3.7 1.1 6.5 1.9 5.5 1.6 13.3 3.7 22.7 5.7 18.6 4.1 43.9 8.4 69.5 8.4 123.3 0 209.4-62.8 287.3-140.7 6.2-6.2 6.2-16.4 0-22.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M463 10.3C469.7 3.7 478.6 0 488 0s18.3 3.7 25 10.3L557.7 55c6.6 6.6 10.3 15.6 10.3 25s-3.7 18.3-10.3 25l-97 97c-3 3-4.7 7.1-4.7 11.3v31.9c0 17.4-9.4 33.5-24.7 42L375.8 318l-4.6 2.6-97.9-97.9-11.3-11.3 6.7-6.7zM448 144a16 16 0 1 0-32 0 16 16 0 1 0 32 0m48-48a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
