import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GaugeSimpleLowIcon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m320 96c0-35.3-28.7-64-64-64-2.1 0-4.1.1-6.1.3l-76.6-147.4c-6.1-11.8-20.6-16.3-32.4-10.2s-16.3 20.6-10.2 32.4l76.6 147.4c-9.5 11.1-15.3 25.6-15.3 41.5 0 35.3 28.7 64 64 64s64-28.7 64-64"
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
                  d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416m0-464a256 256 0 1 1 0 512 256 256 0 1 1 0-512m-56 352c0-14 5.1-26.8 13.7-36.6L146 161.7c-5.3-12.1.2-26.3 12.3-31.6s26.3.2 31.6 12.3L257.6 296c30.2.8 54.4 25.6 54.4 56 0 30.9-25.1 56-56 56s-56-25.1-56-56"
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
                  d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448m0-480a256 256 0 1 1 0 512 256 256 0 1 1 0-512m0 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 32c-35.3 0-64-28.7-64-64 0-18.6 7.9-35.3 20.5-47l-82.6-153.4c-4.2-7.8-1.3-17.5 6.5-21.7s17.5-1.3 21.7 6.5l82.6 153.4q7.35-1.8 15.3-1.8c35.3 0 64 28.7 64 64s-28.7 64-64 64"
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
                  d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480m0-496a256 256 0 1 1 0 512 256 256 0 1 1 0-512m0 400a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0 16c-35.3 0-64-28.7-64-64 0-22.2 11.3-41.7 28.4-53.2l-83.6-167.2c-2-4-.4-8.8 3.6-10.7s8.8-.4 10.7 3.6l83.6 167.2c6.6-2.3 13.8-3.6 21.2-3.6 35.3 0 64 28.7 64 64s-28.7 64-64 64z"
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m320 96c0-35.3-28.7-64-64-64-2.1 0-4.1.1-6.1.3l-76.6-147.4c-6.1-11.8-20.6-16.3-32.4-10.2s-16.3 20.6-10.2 32.4l76.6 147.4c-9.5 11.1-15.3 25.6-15.3 41.5 0 35.3 28.7 64 64 64s64-28.7 64-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M173.3 140.9c-6.1-11.8-20.6-16.3-32.4-10.2s-16.3 20.6-10.2 32.4l76.6 147.4c-9.5 11.1-15.3 25.6-15.3 41.5 0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64c-2.1 0-4.1.1-6.1.3z"
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
