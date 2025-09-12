import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PaletteIcon: React.FC<
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
                  d="M512 256v2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48 0 3.4.4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5.1-7 .2-10.6.2C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256m-384 32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160-96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M464 258.2c0 2.7-1 5.2-4.2 8-3.8 3.1-10.1 5.8-17.8 5.8h-98c-53 0-96 43-96 96q0 10.2 2.1 19.8c3.3 15.7 10.2 31.1 14.4 40.6.7 1.6 1.4 3 1.9 4.3 5 11.5 5.6 15.4 5.6 17.1 0 5.3-1.9 9.5-3.8 11.8-.9 1.1-1.6 1.6-2 1.8-.3.2-.8.3-1.6.4-2.9.1-5.7.2-8.6.2-114.9 0-208-93.1-208-208S141.1 48 256 48s208 93.1 208 208zm48 .5V256C512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256c3.5 0 7.1-.1 10.6-.2 31.8-1.3 53.4-30.1 53.4-62 0-14.5-6.1-28.3-12.1-42-4.3-9.8-8.7-19.7-10.8-29.9-.7-3.2-1-6.5-1-9.9 0-26.5 21.5-48 48-48H442c36.5 0 69.7-24.8 70.1-61.3zM160 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128-64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M480 258.3c-.1 14.1-13.8 29.7-38.1 29.7H344c-44.2 0-80 35.8-80 80 0 5.6.6 11.2 1.7 16.6 2.9 13.8 8.9 27.3 13.2 37q1.2 2.55 2.1 4.8c5 11.6 6.9 18.2 6.9 23.5 0 19.2-12.3 29.6-22.7 30-3.1.1-6.2.2-9.3.2C132.3 480 32 379.7 32 256S132.3 32 256 32s224 100.3 224 224zm32 .3v-2.7C512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256c3.5 0 7.1-.1 10.6-.2 31.8-1.3 53.4-30.1 53.4-62 0-14.5-6.1-28.3-12.1-42-4.3-9.8-8.7-19.7-10.8-29.9-.7-3.2-1-6.5-1-9.9 0-26.5 21.5-48 48-48H442c36.5 0 69.7-24.8 70.1-61.3zM152 256a24 24 0 1 0-48 0 24 24 0 1 0 48 0m8-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M496 258.5c-.3 25.3-23.7 45.5-54.1 45.5H344c-35.3 0-64 28.7-64 64 0 4.5.5 9 1.4 13.2 2.5 12 7.7 23.6 12 33.4.8 1.8 1.6 3.6 2.3 5.3 5.1 11.7 8.2 20.9 8.2 29.8 0 25.5-16.9 45.1-38.1 46-3.3.1-6.6.2-9.9.2C123.5 496 16 388.5 16 256S123.5 16 256 16s240 107.5 240 240zm16 .2V256C512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256c3.5 0 7.1-.1 10.6-.2 31.8-1.3 53.4-30.1 53.4-62 0-14.5-6.1-28.3-12.1-42-4.3-9.8-8.7-19.7-10.8-29.9-.7-3.2-1-6.5-1-9.9 0-26.5 21.5-48 48-48H442c36.5 0 69.7-24.8 70.1-61.3zM104 272a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 64a40 40 0 1 0 0-80 40 40 0 1 0 0 80m8-168a24 24 0 1 1 48 0 24 24 0 1 1-48 0m64 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0m88-88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 64a40 40 0 1 0 0-80 40 40 0 1 0 0 80m104 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m64 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0"
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
                  d="M512 256v2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48 0 3.4.4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5.1-7 .2-10.6.2C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256m-384 32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160-96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-96 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M96 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m288-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
