import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Circle5Icon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-384h104c13.3 0 24 10.7 24 24s-10.7 24-24 24h-84l-7.8 43 61.4 6.9c40.1 4.5 70.4 38.4 70.4 78.8 0 43.8-35.5 79.3-79.3 79.3h-36c-27.5 0-53.3-13.7-68.6-36.6l-4.1-6.1c-7.4-11-4.5-25.9 6.5-33.3s25.9-4.5 33.3 6.5l4.1 6.1c6.4 9.6 17.2 15.3 28.8 15.3h36c17.3 0 31.3-14 31.3-31.3 0-15.9-12-29.3-27.8-31.1l-86.9-9.8c-6.6-.7-12.6-4.2-16.6-9.5s-5.5-12.1-4.4-18.6l16-88c2.1-11.4 12-19.7 23.6-19.7z"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-384c-11.6 0-21.5 8.3-23.6 19.7l-16 88c-1.2 6.5.4 13.3 4.4 18.6s10 8.8 16.6 9.5l86.9 9.8c15.8 1.8 27.8 15.2 27.8 31.1 0 17.3-14 31.3-31.3 31.3h-36c-11.5 0-22.3-5.7-28.8-15.3l-4.1-6.1c-7.4-11-22.3-13.9-33.3-6.5s-13.9 22.3-6.5 33.3l4.1 6.1c15.4 22.9 41.1 36.6 68.6 36.6h36c43.8 0 79.3-35.5 79.3-79.3 0-40.3-30.3-74.3-70.4-78.8l-61.5-7 7.8-43h84c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-384c-7.3 0-13.7 5-15.5 12.1l-24 96c-1.1 4.5-.2 9.3 2.4 13.1s6.9 6.3 11.5 6.7l98.8 10c22.1 2.2 38.8 20.8 38.8 42.9 0 23.8-19.3 43.2-43.2 43.2h-44c-16.8 0-32.4-8.3-41.8-22.3l-1.8-2.7c-4.9-7.3-14.9-9.3-22.2-4.4s-9.3 14.9-4.4 22.2l1.8 2.7c15.3 22.8 40.9 36.4 68.3 36.4h44c41.5 0 75.2-33.7 75.2-75.2 0-38.6-29.2-70.9-67.6-74.8l-80.3-8 16.5-65.9H320c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-384c-3.7 0-7 2.6-7.8 6.2l-24 104c-.5 2.3 0 4.6 1.3 6.5s3.5 3.1 5.8 3.3L286 258.1c28.4 2.6 50.1 26.4 50.1 54.9 0 30.4-24.7 55.1-55.1 55.1h-53.1c-21.3 0-41.3-10.7-53.2-28.5l-13.3 8.9c14.8 22.1 39.8 35.5 66.5 35.5H281c39.3 0 71.1-31.8 71.1-71.1 0-36.8-28-67.4-64.6-70.8L186 232.8l20.4-88.8H328c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-384h104c13.3 0 24 10.7 24 24s-10.7 24-24 24h-84l-7.8 43 61.4 6.9c40.1 4.5 70.4 38.4 70.4 78.8 0 43.8-35.5 79.3-79.3 79.3h-36c-27.5 0-53.3-13.7-68.6-36.6l-4.1-6.1c-7.4-11-4.5-25.9 6.5-33.3s25.9-4.5 33.3 6.5l4.1 6.1c6.4 9.6 17.2 15.3 28.8 15.3h36c17.3 0 31.3-14 31.3-31.3 0-15.9-12-29.3-27.8-31.1l-86.9-9.8c-6.6-.7-12.6-4.2-16.6-9.5s-5.5-12.1-4.4-18.6l16-88c2.1-11.4 12-19.7 23.6-19.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M184.4 147.7c2.1-11.4 12-19.7 23.6-19.7h104c13.3 0 24 10.7 24 24s-10.7 24-24 24h-84l-7.8 43 61.4 6.9c40.1 4.5 70.4 38.4 70.4 78.8 0 43.8-35.5 79.3-79.3 79.3h-36c-27.5 0-53.3-13.7-68.6-36.6l-4.1-6.1c-7.4-11-4.5-25.9 6.5-33.3s25.9-4.5 33.3 6.5l4.1 6.1c6.4 9.6 17.2 15.3 28.8 15.3h36c17.3 0 31.3-14 31.3-31.3 0-15.9-12-29.3-27.8-31.1l-86.9-9.8c-6.6-.7-12.6-4.2-16.6-9.5s-5.5-12.1-4.4-18.6l16-88z"
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
