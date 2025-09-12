import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceFrownOpenIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-79.6-336a32 32 0 1 1 0 64 32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-122 174.5c-12.4 5.2-26.5-4.1-21.1-16.4 16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m182.4 126.5c-12.4 5.2-26.5-4.1-21.1-16.4 16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8m-38-174.5a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176.4-72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m136 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m22 192.1c-22.4-9.5-47.7-14.8-74.5-14.8s-52 5.3-74.4 14.8c-11.2 4.7-23.8 3.1-32.8-3.6-9.7-7.2-14.9-20.4-9-33.9 19.2-44.1 64.2-74.7 116.2-74.7s97 30.6 116.2 74.7c5.9 13.6.8 26.7-9 33.9-9 6.6-21.5 8.3-32.8 3.5zM260 319.9c-36.9 0-68.5 20.3-83.9 49.5 25.6-10.4 54-16.1 83.9-16.1s58.4 5.8 84 16.1c-15.4-29.2-47.1-49.5-84-49.5"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176.4-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32m144 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m17.1 184.7c-23.4-9.9-49.7-15.5-77.6-15.5-27.8 0-54.1 5.6-77.5 15.4-8.7 3.7-18.2 2.3-24.9-2.6-7-5.2-10.7-14.5-6.4-24.3 17.9-41.2 60-69.9 108.8-69.9s90.9 28.7 108.8 69.9c4.3 9.9.6 19.1-6.4 24.3-6.7 4.9-16.2 6.3-24.9 2.6zm16.6-20.5c-15.4-35.3-51.7-60.3-94.2-60.3s-78.8 25-94.2 60.3c-.6 1.5-.5 2.4-.4 3 .2.6.7 1.4 1.6 2.1 2 1.5 5.6 2.2 9.1.7 25.4-10.7 53.8-16.7 83.7-16.7 30 0 58.4 6 83.8 16.7 3.6 1.5 7.1.8 9.1-.7 1-.7 1.4-1.5 1.6-2.1s.3-1.5-.4-3z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-79.6-336a32 32 0 1 1 0 64 32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0M179.3 385.4c-12.3 5.2-26.1-4.2-20.8-16.4 16.7-38.2 55.8-65.1 101.5-65.1s84.9 26.9 101.5 65.1c5.3 12.2-8.6 21.5-20.8 16.4-24.4-10.3-51.8-16.1-80.7-16.1s-56.2 5.8-80.6 16.1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
