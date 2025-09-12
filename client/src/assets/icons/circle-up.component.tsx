import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleUpIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M135.1 217.4l107.1-99.9c3.8-3.5 8.7-5.5 13.8-5.5s10.1 2 13.8 5.5l107.1 99.9c4.5 4.2 7.1 10.1 7.1 16.3 0 12.3-10 22.3-22.3 22.3H304v96c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-96h-57.7c-12.3 0-22.3-10-22.3-22.3 0-6.2 2.6-12.1 7.1-16.3"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512M135.1 217.4c-4.5 4.2-7.1 10.1-7.1 16.3 0 12.3 10 22.3 22.3 22.3H208v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-96h57.7c12.3 0 22.3-10 22.3-22.3 0-6.2-2.6-12.1-7.1-16.3l-107.1-99.9c-3.8-3.5-8.7-5.5-13.8-5.5s-10.1 2-13.8 5.5z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-400c-9.2 0-18 3.5-24.7 9.7l-91 84a38.3 38.3 0 0 0-12.3 28.1c0 21.1 17.1 38.3 38.3 38.3H192v80c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V272h25.7c21.1 0 38.3-17.1 38.3-38.3 0-10.7-4.5-20.9-12.3-28.1l-91-84c-6.7-6.2-15.6-9.7-24.7-9.7zm-3 33.2c.8-.8 1.9-1.2 3-1.2s2.2.4 3 1.2l91 84c1.3 1.2 2 2.9 2 4.6 0 3.5-2.8 6.3-6.3 6.3H304c-8.8 0-16 7.2-16 16v96c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V256c0-8.8-7.2-16-16-16h-41.7c-3.5 0-6.3-2.8-6.3-6.3 0-1.7.7-3.4 2-4.6l91-84z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-400c-7.2 0-14.2 2.9-19.3 8L137 219.7c-5.7 5.7-9 13.5-9 21.7 0 16.9 13.7 30.6 30.6 30.6H208v88c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40v-88h49.4c16.9 0 30.6-13.7 30.6-30.6 0-8.1-3.2-15.9-9-21.7L275.3 120c-5.1-5.1-12.1-8-19.3-8m-8 19.3c2.1-2.1 5-3.3 8-3.3s5.9 1.2 8 3.3l99.7 99.7c2.7 2.7 4.3 6.5 4.3 10.3 0 8.1-6.6 14.6-14.6 14.6H296c-4.4 0-8 3.6-8 8v96c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24V264c0-4.4-3.6-8-8-8h-57.4c-8.1 0-14.6-6.5-14.6-14.6 0-3.9 1.5-7.6 4.3-10.3z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M135.1 217.4l107.1-99.9c3.8-3.5 8.7-5.5 13.8-5.5s10.1 2 13.8 5.5l107.1 99.9c4.5 4.2 7.1 10.1 7.1 16.3 0 12.3-10 22.3-22.3 22.3H304v96c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-96h-57.7c-12.3 0-22.3-10-22.3-22.3 0-6.2 2.6-12.1 7.1-16.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="m242.2 117.5-107.1 99.9c-4.5 4.2-7.1 10.1-7.1 16.3 0 12.3 10 22.3 22.3 22.3H208v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-96h57.7c12.3 0 22.3-10 22.3-22.3 0-6.2-2.6-12.1-7.1-16.3l-107.1-99.9c-3.8-3.5-8.7-5.5-13.8-5.5s-10.1 2-13.8 5.5"
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
