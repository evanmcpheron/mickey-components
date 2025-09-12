import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CartFlatbedSuitcaseIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 32C0 14.3 14.3 0 32 0h16c44.2 0 80 35.8 80 80v288c0 8.8 7.2 16 16 16h464c17.7 0 32 14.3 32 32s-14.3 32-32 32h-66.7c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H253.3c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H144c-44.2 0-80-35.8-80-80V80c0-8.8-7.2-16-16-16H32C14.3 64 0 49.7 0 32m432 64V56c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v40zm-144 0V56c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56v264H288zm224 224V96h16c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48zM240 96h16v224h-16c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 24C0 10.7 10.7 0 24 0h48c30.9 0 56 25.1 56 56v352c0 4.4 3.6 8 8 8h480c13.3 0 24 10.7 24 24s-10.7 24-24 24h-72c0 26.5-21.5 48-48 48s-48-21.5-48-48H256c0 26.5-21.5 48-48 48s-48-21.5-48-48h-24c-30.9 0-56-25.1-56-56V56c0-4.4-3.6-8-8-8H24C10.7 48 0 37.3 0 24m360 24c-4.4 0-8 3.6-8 8v40h96V56c0-4.4-3.6-8-8-8zm136 48h48c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h48V56c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56zm-240 48c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h32V144zm80 0v160h128V144zm208 160c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16h-32v160z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 16C0 7.2 7.2 0 16 0h64c26.5 0 48 21.5 48 48v320c0 8.8 7.2 16 16 16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16h-56.6c5.4 9.4 8.6 20.3 8.6 32 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-11.7 3.1-22.6 8.6-32H279.4c5.4 9.4 8.6 20.3 8.6 32 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-11.7 3.1-22.6 8.6-32H144c-26.5 0-48-21.5-48-48V48c0-8.8-7.2-16-16-16H16C7.2 32 0 24.8 0 16m512 400a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-320 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0M336 32c-8.8 0-16 7.2-16 16v32h128V48c0-8.8-7.2-16-16-16zm144 48h32c35.3 0 64 28.7 64 64v112c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V144c0-35.3 28.7-64 64-64h32V48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48zm-208 32h-16c-17.7 0-32 14.3-32 32v112c0 17.7 14.3 32 32 32h16zm32 176h160V112H304zm192 0h16c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32h-16z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 8c0-4.4 3.6-8 8-8h80c22.1 0 40 17.9 40 40v352c0 13.3 10.7 24 24 24h480c4.4 0 8 3.6 8 8s-3.6 8-8 8h-84.2c7.6 8.5 12.2 19.7 12.2 32 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-12.3 4.6-23.5 12.2-32H259.8c7.6 8.5 12.2 19.7 12.2 32 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-12.3 4.6-23.5 12.2-32H152c-22.1 0-40-17.9-40-40V40c0-13.3-10.7-24-24-24H8c-4.4 0-8-3.6-8-8m512 424a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-320 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0M344 16c-13.3 0-24 10.7-24 24v40h128V40c0-13.3-10.7-24-24-24zm120 64h48c35.3 0 64 28.7 64 64v144c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V144c0-35.3 28.7-64 64-64h48V40c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40zm0 16H288v240h192V96zm-192 0h-16c-26.5 0-48 21.5-48 48v144c0 26.5 21.5 48 48 48h16zm224 240h16c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-16z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M344 48h80c4.4 0 8 3.6 8 8v40h-96V56c0-4.4 3.6-8 8-8m-56 8v264h192V56c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56m224 264h16c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-16zM240 96c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h16V96zm-80 368c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16h-90.6c-1.8 5-2.7 10.4-2.7 16m288 0c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16h-90.6c-1.8 5-2.7 10.4-2.7 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32h16c8.8 0 16 7.2 16 16v288c0 44.2 35.8 80 80 80h464c17.7 0 32-14.3 32-32s-14.3-32-32-32H144c-8.8 0-16-7.2-16-16V80c0-44.2-35.8-80-80-80zm224 96v224h32V96zm224 0v224h32V96z"
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
