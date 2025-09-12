import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DropletSlashIcon: React.FC<
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
                  d="M320 512c53.2 0 101.4-21.6 136.1-56.6l-298.3-235C140 257.1 128 292.3 128 320c0 106 86 192 192 192m185.2-141.3c4.4-16.1 6.8-33.1 6.8-50.7 0-91.2-130.2-262.3-166.6-308.3-6-7.5-14.9-11.7-24.5-11.7h-1.8c-9.6 0-18.5 4.2-24.5 11.7C277.8 33 240.7 81.3 205.8 136L38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7zM224 336c0 44.2 35.8 80 80 80 8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112 0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M320 464c37.9 0 72.4-14.6 98.1-38.6l38 30C421.4 490.3 373.2 512 320 512c-106 0-192-86-192-192 0-27.7 12-62.9 29.8-99.6l38.7 30.5c-1.2 2.7-2.4 5.4-3.6 8-11.9 27.6-17 48.2-17 61.1 0 79.5 64.5 144 144 144zm185.2-93.3 125.6 98.4c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2S28.4-3.1 38.8 5.1l167 130.9c34.9-54.7 72-103 88.9-124.3C300.6 4.2 309.5 0 319.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C381.8 57.7 512 228.8 512 320c0 17.5-2.4 34.6-6.8 50.7m-42.3-33.1c.7-5.8 1.1-11.6 1.1-17.6 0-13-5.1-33.5-17-61.1-11.5-26.6-27.6-55.8-45.5-84.7-29-46.8-61-90.2-81.5-117-19.3 25.1-48.7 65-76.3 108.5l219.2 171.8zM224 312c0-11.9 8.7-21.8 20.1-23.7l27.9 21.9c0 .6.1 1.2.1 1.7 0 30.9 25.1 56 56 56 13.3 0 24 10.7 24 24s-10.7 24-24 24c-57.4 0-104-46.6-104-104z"
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
                  d="M320 480c-88.4 0-160-71.6-160-160 0-16.2 6.1-39.2 18.3-67.5 2.8-6.4 5.8-13 9.1-19.7l-25.7-20.3C141.8 252.1 128 290.3 128 320c0 106 86 192 192 192 56.1 0 106.7-24.1 141.8-62.5l-25.2-19.9C407.4 460.6 366 480 320 480m141.7-227.5c7.6 17.6 12.8 33.1 15.7 46.2l34.5 27.3c.1-2 .1-4 .1-6 0-91.2-130.2-262.3-166.6-308.3-6-7.5-14.9-11.7-24.5-11.7h-1.8c-9.6 0-18.5 4.2-24.5 11.7-13.3 16.8-39 50.2-66.4 90.3l25.2 19.9c27-39.7 52.6-73 66-89.9h1.3c18.1 22.9 58.6 75.7 94.5 133.7 18.1 29.2 34.6 59.1 46.6 86.8zM240 320c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112 8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M320 496c-97.2 0-176-78.8-176-176 0-19.5 7.1-44.9 19.6-73.8 2.3-5.3 4.7-10.7 7.3-16.1L158 219.9c-17.8 36.9-30 72.2-30 100.1 0 106 86 192 192 192 53.3 0 101.5-21.7 136.2-56.7l-12.6-10C411.8 476.7 368.2 496 320 496m25.4-484.3C339.4 4.2 330.5 0 320.9 0h-1.8c-9.6 0-18.5 4.2-24.5 11.7-12.5 15.9-36.2 46.6-61.9 83.7l12.6 9.9c25.6-37.1 49.3-67.9 61.8-83.7 2.8-3.5 7-5.6 11.9-5.6h1.8c4.9 0 9.1 2.1 11.9 5.6 18.1 22.8 59.3 76.6 95.9 135.7 18.3 29.6 35.3 60.2 47.7 88.8 8.9 20.7 15.1 39.5 17.9 55.7l17.6 13.9c-3.7-92.1-130.6-258.7-166.4-304M232 320c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 57.4 46.6 104 104 104 4.4 0 8-3.6 8-8s-3.6-8-8-8c-48.6 0-88-39.4-88-88M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M320 512c53.2 0 101.4-21.6 136.1-56.6l-298.3-235C140 257.1 128 292.3 128 320c0 106 86 192 192 192M205.8 136l299.4 234.7c4.4-16.1 6.8-33.1 6.8-50.7 0-91.2-130.2-262.3-166.6-308.3-6-7.5-14.9-11.7-24.5-11.7h-1.8c-9.6 0-18.5 4.2-24.5 11.7C277.8 33 240.7 81.3 205.8 136M224 336c0 44.2 35.8 80 80 80 8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112 0-8.8 7.2-16 16-16s16 7.2 16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
