import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleWIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M150.9 168.7 192 297.3l41.1-128.6c3.2-9.9 12.4-16.7 22.9-16.7s19.7 6.7 22.9 16.7L320 297.3l41.1-128.6c4-12.6 17.5-19.6 30.2-15.5s19.6 17.5 15.5 30.2l-64 200c-3.2 9.9-12.4 16.7-22.9 16.7s-19.7-6.7-22.9-16.7l-41-128.7-41.1 128.6c-3.2 9.9-12.4 16.7-22.9 16.7s-19.7-6.7-22.9-16.7l-64-200c-4-12.6 2.9-26.1 15.5-30.2s26.1 2.9 30.2 15.5z"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512M150.9 168.7c-4-12.6-17.5-19.6-30.2-15.5s-19.6 17.5-15.5 30.2l64 200c3.2 9.9 12.4 16.7 22.9 16.7s19.7-6.7 22.9-16.7l41-128.7 41.1 128.6c3.2 9.9 12.4 16.7 22.9 16.7s19.7-6.7 22.9-16.7l64-200c4-12.6-2.9-26.1-15.5-30.2s-26.1 2.9-30.2 15.5L320 297.3l-41.1-128.6c-3.2-9.9-12.4-16.7-22.9-16.7s-19.7 6.7-22.9 16.7L192 297.3z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512M135.1 170.8c-2.9-8.4-12-12.8-20.4-9.9s-12.8 12-9.9 20.4l72 208c2.3 6.5 8.4 10.8 15.3 10.8s13-4.6 15.1-11.1L256 236.5l48.8 152.4c2.1 6.6 8.2 11 15.1 11.1s13.1-4.3 15.3-10.8l72-208c2.9-8.4-1.5-17.5-9.9-20.4s-17.5 1.5-20.4 9.9l-56.3 162.7-49.4-154.3c-2.1-6.6-8.2-11.1-15.2-11.1s-13.1 4.5-15.2 11.1l-49.4 154.3z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M127.7 149.7c-1.3-4.2-5.7-6.6-10-5.4s-6.6 5.7-5.4 10l72 240c1 3.4 4.1 5.7 7.7 5.7s6.7-2.3 7.7-5.7L256 204.2l56.3 190.1c1 3.4 4.1 5.7 7.7 5.7s6.7-2.3 7.7-5.7l72-240c1.3-4.2-1.1-8.7-5.4-10s-8.7 1.1-10 5.4L320 364l-56.3-190.3c-1-3.4-4.1-5.7-7.7-5.7s-6.7 2.3-7.7 5.7L192 364z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M150.9 168.7 192 297.3l41.1-128.6c3.2-9.9 12.4-16.7 22.9-16.7s19.7 6.7 22.9 16.7L320 297.3l41.1-128.6c4-12.6 17.5-19.6 30.2-15.5s19.6 17.5 15.5 30.2l-64 200c-3.2 9.9-12.4 16.7-22.9 16.7s-19.7-6.7-22.9-16.7l-41-128.7-41.1 128.6c-3.2 9.9-12.4 16.7-22.9 16.7s-19.7-6.7-22.9-16.7l-64-200c-4-12.6 2.9-26.1 15.5-30.2s26.1 2.9 30.2 15.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M120.7 153.1c12.6-4 26.1 2.9 30.2 15.5L192 297.3l41.1-128.6c3.2-9.9 12.4-16.7 22.9-16.7s19.7 6.7 22.9 16.7L320 297.3l41.1-128.6c4-12.6 17.5-19.6 30.2-15.5s19.6 17.5 15.5 30.2l-64 200c-3.2 9.9-12.4 16.7-22.9 16.7s-19.7-6.7-22.9-16.7l-41-128.7-41.1 128.6c-3.2 9.9-12.4 16.7-22.9 16.7s-19.7-6.7-22.9-16.7l-64-200c-4-12.6 2.9-26.1 15.5-30.2z"
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
