import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleYIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-85.9-359.7 85.9 99.1 85.9-99.1c8.7-10 23.8-11.1 33.9-2.4s11.1 23.8 2.4 33.9L280 297v79c0 13.3-10.7 24-24 24s-24-10.7-24-24v-79l-98.1-113.3c-8.7-10-7.6-25.2 2.4-33.9s25.2-7.6 33.9 2.4z"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-85.9-359.7c-8.7-10-23.8-11.1-33.9-2.4s-11.1 23.8-2.4 33.9L232 297v79c0 13.3 10.7 24 24 24s24-10.7 24-24v-79l98.1-113.2c8.7-10 7.6-25.2-2.4-33.9s-25.2-7.6-33.9 2.4L256 251.4z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512M156 149.5c-5.8-6.7-15.9-7.3-22.6-1.5s-7.3 15.9-1.5 22.6L240 294v90c0 8.8 7.2 16 16 16s16-7.2 16-16v-90l108-123.5c5.8-6.7 5.1-16.8-1.5-22.6s-16.8-5.1-22.6 1.5L256 263.7z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M142 130.7c-2.9-3.3-8-3.6-11.3-.7s-3.6 8-.7 11.3L248 275v101c0 4.4 3.6 8 8 8s8-3.6 8-8V275l118-133.7c2.9-3.3 2.6-8.4-.7-11.3s-8.4-2.6-11.3.7L256 259.9z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-85.9-359.7 85.9 99.1 85.9-99.1c8.7-10 23.8-11.1 33.9-2.4s11.1 23.8 2.4 33.9L280 297v79c0 13.3-10.7 24-24 24s-24-10.7-24-24v-79l-98.1-113.3c-8.7-10-7.6-25.2 2.4-33.9s25.2-7.6 33.9 2.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M136.3 149.9c10-8.7 25.2-7.6 33.9 2.4l85.8 99.1 85.9-99.1c8.7-10 23.8-11.1 33.9-2.4s11.1 23.8 2.4 33.9L280 297v79c0 13.3-10.7 24-24 24s-24-10.7-24-24v-79l-98.1-113.3c-8.7-10-7.6-25.2 2.4-33.9z"
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
