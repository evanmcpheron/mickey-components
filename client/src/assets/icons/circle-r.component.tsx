import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleRIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384h104c44.2 0 80 35.8 80 80 0 36.6-24.6 67.5-58.2 77l45.4 60.6c8 10.6 5.8 25.6-4.8 33.6s-25.6 5.8-33.6-4.8L252 288h-44v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24m80 112h24c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80v64z"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384c-13.3 0-24 10.7-24 24v208c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h44l64.8 86.4c8 10.6 23 12.8 33.6 4.8s12.8-23 4.8-33.6L309.8 285c33.6-9.5 58.2-40.4 58.2-77 0-44.2-35.8-80-80-80zm80 112h-56v-64h80c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-384c-17.7 0-32 14.3-32 32v208c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h71.4l59.3 88.9c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-50.5-75.7c31-11 53.2-40.6 53.2-75.4 0-44.2-35.8-80-80-80zm80 128h-80v-96h80c26.5 0 48 21.5 48 48s-21.5 48-48 48"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384c-13.3 0-24 10.7-24 24v224c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h92.3l77.6 93.1c2.8 3.4 7.9 3.9 11.3 1s3.9-7.9 1-11.3l-70.4-84.4c36.6-7.3 64.2-39.7 64.2-78.4 0-44.2-35.8-80-80-80zm88 144h-96V152c0-4.4 3.6-8 8-8h88c35.3 0 64 28.7 64 64s-28.7 64-64 64"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384h104c44.2 0 80 35.8 80 80 0 36.6-24.6 67.5-58.2 77l45.4 60.6c8 10.6 5.8 25.6-4.8 33.6s-25.6 5.8-33.6-4.8L252 288h-44v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24m80 112h24c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80v64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 152c0-13.3 10.7-24 24-24h104c44.2 0 80 35.8 80 80 0 36.6-24.6 67.5-58.2 77l45.4 60.6c8 10.6 5.8 25.6-4.8 33.6s-25.6 5.8-33.6-4.8L252 288h-44v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152m48 88h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80z"
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
