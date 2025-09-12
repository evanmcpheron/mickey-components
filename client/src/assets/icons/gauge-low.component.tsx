import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GaugeLowIcon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M288 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 320c35.3 0 64-28.7 64-64s-28.7-64-64-64h-1.9L190 142.3c-5.3-12.1-19.5-17.6-31.6-12.3s-17.6 19.5-12.3 31.6l64.1 145.7C198.9 318.9 192 334.6 192 352c0 35.3 28.7 64 64 64M128 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-16-144a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416m0-464a256 256 0 1 1 0 512 256 256 0 1 1 0-512m32 112a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32 296c-30.9 0-56-25.1-56-56 0-14 5.1-26.8 13.7-36.6L146 161.7c-5.3-12.1.2-26.3 12.3-31.6s26.3.2 31.6 12.3L257.6 296c30.2.8 54.4 25.6 54.4 56 0 30.9-25.1 56-56 56m128-248a32 32 0 1 1-64 0 32 32 0 1 1 64 0m16 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-256 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
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
                  d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448m0-480a256 256 0 1 1 0 512 256 256 0 1 1 0-512m24 96a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-56 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-32 0c0-18.6 7.9-35.3 20.5-47l-82.6-153.4c-4.2-7.8-1.3-17.5 6.5-21.7s17.5-1.3 21.7 6.5l82.6 153.4q7.35-1.8 15.3-1.8c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64m200-208a24 24 0 1 1-48 0 24 24 0 1 1 48 0m24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-296 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0"
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
                  d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480m0-496a256 256 0 1 1 0 512 256 256 0 1 1 0-512m16 80a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-64 272a48 48 0 1 0 96 0 48 48 0 1 0-96 0m-16 0c0-22.2 11.3-41.7 28.4-53.2l-83.6-167.2c-2-4-.4-8.8 3.6-10.7s8.8-.4 10.7 3.6l83.6 167.2c6.6-2.3 13.8-3.6 21.2-3.6 35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64zm192-224a16 16 0 1 1-32 0 16 16 0 1 1 32 0m32 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-304 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0"
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M288 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 320c35.3 0 64-28.7 64-64s-28.7-64-64-64h-1.9L190 142.3c-5.3-12.1-19.5-17.6-31.6-12.3s-17.6 19.5-12.3 31.6l64.1 145.7C198.9 318.9 192 334.6 192 352c0 35.3 28.7 64 64 64M128 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-16-144a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M190 142.3c-5.3-12.1-19.5-17.6-31.6-12.3s-17.6 19.5-12.3 31.6l64.1 145.7C198.9 318.9 192 334.6 192 352c0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64h-1.9z"
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
