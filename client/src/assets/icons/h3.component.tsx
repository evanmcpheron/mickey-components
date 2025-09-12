import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const H3Icon: React.FC<
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
                  d="M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V288h192v128c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H64zm336-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h114.7l-89.4 89.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h72c30.9 0 56 25.1 56 56s-25.1 56-56 56h-64.6c-11.7 0-21.7-8.5-23.7-20.1l-.2-1.2c-2.9-17.4-19.4-29.2-36.8-26.3s-29.2 19.4-26.3 36.8l.2 1.2c7.1 42.4 43.8 73.5 86.8 73.5H520c66.3 0 120-53.7 120-120 0-64.6-51-117.2-114.9-119.9l89.5-89.5c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H400z"
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
                  d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24V272h224v152c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24s-24 10.7-24 24v136H48zm352-24c-13.3 0-24 10.7-24 24s10.7 24 24 24h142.1L423 231c-6.9 6.9-8.9 17.2-5.2 26.2S430.3 272 440 272h88c35.3 0 64 28.7 64 64s-28.7 64-64 64h-72.6c-15.6 0-29-11.3-31.6-26.7l-.2-1.2c-2.2-13.1-14.5-21.9-27.6-19.7s-21.9 14.5-19.7 27.6l.2 1.2c6.4 38.6 39.8 66.8 78.9 66.8H528c61.9 0 112-50.1 112-112s-50.1-112-112-112h-30.1L617 105c6.9-6.9 8.9-17.2 5.2-26.2S609.7 64 600 64z"
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
                  d="M32 80c0-8.8-7.2-16-16-16S0 71.2 0 80v352c0 8.8 7.2 16 16 16s16-7.2 16-16V272h256v160c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v160H32zm368-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h160L421 228.4c-4.7 4.5-6.3 11.5-3.8 17.5s8.3 10.1 14.9 10.1h96c44.2 0 80 35.8 80 80s-35.8 80-80 80h-72.7c-19.6 0-36.2-14.1-39.5-33.4l-.2-1.2c-1.5-8.7-9.7-14.6-18.4-13.2s-14.6 9.7-13.2 18.4l.2 1.2c5.8 34.7 35.8 60.2 71 60.2H528c61.9 0 112-50.1 112-112s-50.1-112-112-112h-56L611 91.6c4.7-4.5 6.3-11.5 3.8-17.5S606.5 64 600 64z"
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
                  d="M16 72c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 4.4 3.6 8 8 8s8-3.6 8-8V256h288v184c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H16zm376-8c-4.4 0-8 3.6-8 8s3.6 8 8 8h188.7L418.3 242.3c-2.3 2.3-3 5.7-1.7 8.7s4.2 4.9 7.4 4.9h96c48.6 0 88 39.4 88 88s-39.4 88-88 88h-72.6c-23.5 0-43.5-17-47.3-40.1l-.2-1.2c-.7-4.4-4.8-7.3-9.2-6.6s-7.3 4.8-6.6 9.2l.2 1.2c5.1 30.9 31.8 53.5 63.1 53.5H520c57.4 0 104-46.6 104-104s-46.6-104-104-104h-76.7L605.7 77.7c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9H392z"
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
                  d="M32 64c17.7 0 32 14.3 32 32v128h192V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H64v128c0 17.7-14.3 32-32 32S0 433.7 0 416V96c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M368 96c0-17.7 14.3-32 32-32h192c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-89.5 89.5C589 210.8 640 263.4 640 328c0 66.3-53.7 120-120 120h-64.6c-43 0-79.7-31.1-86.8-73.5l-.2-1.2c-2.9-17.4 8.9-33.9 26.3-36.8s33.9 8.9 36.8 26.3l.2 1.2c1.9 11.6 11.9 20.1 23.7 20.1H520c30.9 0 56-25.1 56-56s-25.1-56-56-56h-72c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l89.4-89.4H400c-17.7 0-32-14.3-32-32"
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
