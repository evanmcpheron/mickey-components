import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleDIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384h72c70.7 0 128 57.3 128 128s-57.3 128-128 128h-72c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24m72 208c44.2 0 80-35.8 80-80s-35.8-80-80-80h-48v160z"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384c-13.3 0-24 10.7-24 24v208c0 13.3 10.7 24 24 24h72c70.7 0 128-57.3 128-128s-57.3-128-128-128zm72 208h-48V176h48c44.2 0 80 35.8 80 80s-35.8 80-80 80"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-160h-64V160h64c53 0 96 43 96 96s-43 96-96 96m-65.2-224c-17 0-30.8 13.8-30.8 30.8v194.4c0 17 13.8 30.8 30.8 30.8H256c70.7 0 128-57.3 128-128s-57.3-128-128-128z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-361.1c0-3.8 3.1-6.9 6.9-6.9H256c61.9 0 112 50.1 112 112s-50.1 112-112 112h-73.1c-3.8 0-6.9-3.1-6.9-6.9zm6.9-22.9c-12.6 0-22.9 10.2-22.9 22.9v210.2c0 12.6 10.2 22.9 22.9 22.9H256c70.7 0 128-57.3 128-128s-57.3-128-128-128z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384h72c70.7 0 128 57.3 128 128s-57.3 128-128 128h-72c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24m72 208c44.2 0 80-35.8 80-80s-35.8-80-80-80h-48v160z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 152c0-13.3 10.7-24 24-24h72c70.7 0 128 57.3 128 128s-57.3 128-128 128h-72c-13.3 0-24-10.7-24-24zm48 24v160h48c44.2 0 80-35.8 80-80s-35.8-80-80-80z"
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
