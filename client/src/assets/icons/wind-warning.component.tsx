import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WindWarningIcon: React.FC<
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
                  d="M418 368c-38.7 67-111.1 112-194 112C100.3 480 0 379.7 0 256S100.3 32 224 32c118.3 0 215.2 91.8 223.4 208H384c-35.3 0-64 28.7-64 64s28.7 64 64 64zM248 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm-24 232a32 32 0 1 0 0-64 32 32 0 1 0 0 64m248 48c0-17.7 14.3-32 32-32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h152c53 0 96 43 96 96s-43 96-96 96h-32c-17.7 0-32-14.3-32-32m72-192h-64.5c-1.4-22.2-5.6-43.7-12.3-64H544c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c53 0 96 43 96 96s-43 96-96 96"
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
                  d="M224 432c61.8 0 116.1-31.8 147.5-80h54.9c-36 75.7-113.1 128-202.4 128C100.3 480 0 379.7 0 256S100.3 32 224 32c118.3 0 215.2 91.8 223.4 208h-48.1C391.2 150.3 315.8 80 224 80c-97.2 0-176 78.8-176 176s78.8 176 176 176m0-304c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24m-32 224a32 32 0 1 1 64 0 32 32 0 1 1-64 0m286-128c-2.1-16.5-5.7-32.6-10.8-48H544c26.5 0 48-21.5 48-48s-21.5-48-48-48h-40c-13.3 0-24-10.7-24-24s10.7-24 24-24h40c53 0 96 43 96 96s-43 96-96 96zm-6 256c-13.3 0-24-10.7-24-24s10.7-24 24-24h64c30.9 0 56-25.1 56-56s-25.1-56-56-56H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h192c57.4 0 104 46.6 104 104s-46.6 104-104 104z"
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
                  d="M390.3 352c-33.2 57.4-95.2 96-166.3 96-106 0-192-86-192-192S118 64 224 64s192 86 192 192h32c0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224c89.4 0 166.5-52.3 202.4-128zM224 128c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16m24 224a24 24 0 1 0-48 0 24 24 0 1 0 48 0m248 128h48c53 0 96-43 96-96s-43-96-96-96H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h208c35.3 0 64 28.7 64 64s-28.7 64-64 64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16m48-256c53 0 96-43 96-96s-43-96-96-96h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c35.3 0 64 28.7 64 64s-28.7 64-64 64h-72.1c2.7 10.4 4.7 21.1 6.1 32z"
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
                  d="M224 464c86.5 0 160.7-52.8 192.1-128h17.2C401.1 420.2 319.5 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224h-16c0-114.9-93.1-208-208-208S16 141.1 16 256s93.1 208 208 208m0-336c4.4 0 8 3.6 8 8v160c0 4.4-3.6 8-8 8s-8-3.6-8-8V136c0-4.4 3.6-8 8-8m-16 224a16 16 0 1 1 32 0 16 16 0 1 1-32 0m272 120c0-4.4 3.6-8 8-8h56c44.2 0 80-35.8 80-80s-35.8-80-80-80H328c-4.4 0-8-3.6-8-8s3.6-8 8-8h216c53 0 96 43 96 96s-43 96-96 96h-56c-4.4 0-8-3.6-8-8m64-248h-66c-.7-5.4-1.5-10.7-2.5-16H544c44.2 0 80-35.8 80-80s-35.8-80-80-80h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56c53 0 96 43 96 96s-43 96-96 96"
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
                  d="M433.3 336C401.1 420.2 319.5 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 5.4-.2 10.7-.6 16H384c-17.7 0-32 14.3-32 32s14.3 32 32 32zM248 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm-24 232a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M433.3 176c7.7 20.1 12.6 41.6 14.1 64H544c53 0 96-43 96-96s-43-96-96-96h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32zM472 432c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h152c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32 14.3-32 32M224 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24m32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
