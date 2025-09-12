import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrashCanListIcon: React.FC<
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
                  d="M147.8 0c-12.1 0-23.2 6.8-28.6 17.7L112 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h352c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80l-7.2-14.3C291.4 6.8 280.3 0 268.2 0zM384 128H32v336c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48zm-224 80v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-8.8 7.2-16 16-16s16 7.2 16 16m128 0v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-8.8 7.2-16 16-16s16 7.2 16 16m192-80c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32zm-32 160c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32"
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
                  d="M161.1 48h93.7c2.7 0 5.2 1.3 6.7 3.6l19 28.4h-145l19-28.4c1.5-2.2 4-3.6 6.7-3.6zm177.1 32-36.7-55.1C291.1 9.4 273.6 0 254.9 0h-93.8c-18.7 0-36.2 9.4-46.6 24.9L77.8 80H24C10.7 80 0 90.7 0 104s10.7 24 24 24h8v304c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80V128h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-53.8m-2.2 48v304c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32V128zm-176 48c-8.8 0-16 7.2-16 16v208c0 8.8 7.2 16 16 16s16-7.2 16-16V192c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v208c0 8.8 7.2 16 16 16s16-7.2 16-16V192c0-8.8-7.2-16-16-16m216-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 128c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-24 152c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24"
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
                  d="M169.7 32h76.5c5.5 0 10.6 2.8 13.6 7.5L275.1 64H140.9l15.3-24.5c2.9-4.7 8.1-7.5 13.6-7.5zm143.2 32L287 22.6A47.98 47.98 0 0 0 246.3 0h-76.6c-16.5 0-31.9 8.5-40.7 22.6L103.1 64H16C7.2 64 0 71.2 0 80s7.2 16 16 16h16v336c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80V96h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-87.1M352 96v336c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V96zm-192 64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16m208-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 128c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-16 144c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16"
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
                  d="M169.7 16h76.5c8.3 0 16 4.3 20.4 11.3l23 36.7H126.4l23-36.7c4.4-7 12.1-11.3 20.4-11.3zm-33.9 2.8L107.6 64H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h400c4.4 0 8-3.6 8-8s-3.6-8-8-8h-99.6l-28.2-45.2C272.9 7.1 260.1 0 246.3 0h-76.6c-13.8 0-26.6 7.1-33.9 18.8M48 120c0-4.4-3.6-8-8-8s-8 3.6-8 8v320c0 39.8 32.2 72 72 72h208c39.8 0 72-32.2 72-72V120c0-4.4-3.6-8-8-8s-8 3.6-8 8v320c0 30.9-25.1 56-56 56H104c-30.9 0-56-25.1-56-56zm112 32c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8s8-3.6 8-8V160c0-4.4-3.6-8-8-8m96 0c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8s8-3.6 8-8V160c0-4.4-3.6-8-8-8m200-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 128c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-8 136c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8"
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
                  d="M384 96H32v368c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48zm-224 96v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16m128 0v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M119.2 17.7C124.6 6.8 135.7 0 147.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L304 32h80c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h80zM480 128h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 128h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32m-32 160c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32"
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
