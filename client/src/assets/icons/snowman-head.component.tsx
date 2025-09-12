import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SnowmanHeadIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 64c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v96H64zm266.2 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32h-25.7c16.3 28.2 25.7 61 25.7 96 0 59.8-27.4 113.3-70.3 148.5-9.7 8-22.3 11.5-34.9 11.5H137.2c-12.6 0-25.1-3.5-34.9-11.5C59.4 465.3 32 411.8 32 352c0-35 9.3-67.8 25.7-96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h298.2M152 336a24 24 0 1 0 0-48 24 24 0 1 0 0 48m168-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0M219.3 445.2c.9 1.7 2.7 2.8 4.7 2.8s3.8-1.1 4.7-2.8l23.8-46.3c2.3-4.5 3.5-9.6 3.5-14.7 0-17.7-14.3-32.2-32-32.2s-32 14.5-32 32.2c0 5.1 1.2 10.2 3.5 14.7z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M336 144v48H112v-48zM64 64v128H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h24.7C28 272.3 16 310.8 16 352c0 56 22.1 106.9 58.2 144.3 10.3 10.7 25.1 15.7 40 15.7h219.6c15 0 29.7-5 40.1-15.7C409.9 458.9 432 408 432 352c0-41.2-12-79.7-32.7-112H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64m0 288c0-43.6 17.4-83.1 45.7-112h228.6c28.3 28.9 45.7 68.4 45.7 112 0 43.1-17 82.1-44.7 110.9-.1.1-.3.2-.8.4-.9.4-2.5.7-4.8.7H114.2c-2.2 0-3.8-.4-4.8-.7-.4-.2-.7-.3-.8-.4C81 434.1 64 395.1 64 352m88-16a24 24 0 1 0 0-48 24 24 0 1 0 0 48m168-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0M219.3 445.2c.9 1.7 2.7 2.8 4.7 2.8s3.8-1.1 4.7-2.8l23.8-46.3c2.3-4.5 3.5-9.6 3.5-14.7 0-17.7-14.3-32.2-32-32.2s-32 14.5-32 32.2c0 5.1 1.2 10.2 3.5 14.7z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 32h192c17.7 0 32 14.3 32 32v96h32V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v96h32V64c0-17.7 14.3-32 32-32m224 192h.7C382 255.4 400 297.6 400 344c0 52-22.5 98.8-58.5 131-3 2.7-8.3 5-15.8 5H122.2c-7.5 0-12.7-2.2-15.8-5C70.5 442.8 48 396 48 344c0-46.4 17.9-88.6 47.3-120H352M16 192c-8.8 0-16 7.2-16 16s7.2 16 16 16h38.1C30.1 257.9 16 299.3 16 344c0 61.5 26.7 116.8 69.1 154.8 10.1 9.1 23.6 13.2 37.1 13.2h203.6c13.6 0 27-4.1 37.1-13.2 42.4-38 69.1-93.3 69.1-154.8 0-44.7-14.1-86.1-38.1-120H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H16m128 136a24 24 0 1 0 0-48 24 24 0 1 0 0 48m184-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-104 16c-26.5 0-48 21.5-48 48v1c0 6.9 1.4 13.6 4.2 19.9l29.2 65.6c2.6 5.8 8.3 9.5 14.6 9.5s12.1-3.7 14.6-9.5l29.2-65.6c2.8-6.3 4.2-13 4.2-19.9v-1c0-26.5-21.5-48-48-48m-16 48c0-8.8 7.2-16 16-16s16 7.2 16 16v1q0 3.6-1.5 6.9L224 408.6l-14.5-32.7q-1.5-3.3-1.5-6.9z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 16h192c26.5 0 48 21.5 48 48v112h16V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v112h16V64c0-26.5 21.5-48 48-48m240 208h5.9c26.4 32.9 42.1 74.6 42.1 120 0 56.8-24.6 107.8-63.8 142.9-6.6 5.9-15.9 9.1-26.4 9.1H122.2c-10.5 0-19.9-3.2-26.4-9.1C56.6 451.8 32 400.8 32 344c0-45.4 15.8-87.1 42.1-120H368M8 208c-4.4 0-8 3.6-8 8s3.6 8 8 8h46.1C30.1 257.9 16 299.3 16 344c0 61.5 26.7 116.8 69.1 154.8 10.1 9.1 23.6 13.2 37.1 13.2h203.6c13.6 0 27-4.1 37.1-13.2 42.4-38 69.1-93.3 69.1-154.8 0-44.7-14.1-86.1-38.1-120H440c4.4 0 8-3.6 8-8s-3.6-8-8-8H8m136 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32m176-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-97.2 16c-25.8 0-46.8 21-46.8 46.8 0 7.3 1.7 14.4 4.9 20.9l35.9 71.8c1.4 2.7 4.1 4.4 7.2 4.4s5.8-1.7 7.2-4.4l35.9-71.8c3.3-6.5 4.9-13.7 4.9-20.9 0-25.9-21-46.8-46.8-46.8h-2.3zM192 366.8c0-17 13.8-30.8 30.8-30.8h2.3c17 0 30.8 13.8 30.8 30.8 0 4.8-1.1 9.5-3.3 13.8L224 438.1l-28.7-57.5c-2.1-4.3-3.3-9-3.3-13.8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M310.8 512c12.6 0 25.1-3.5 34.9-11.5C388.6 465.3 416 411.8 416 352c0-35-9.4-67.8-25.7-96H57.7C41.3 284.2 32 317 32 352c0 59.8 27.4 113.3 70.3 148.5 9.7 8 22.3 11.5 34.9 11.5zM195.5 398.9c-2.3-4.5-3.5-9.6-3.5-14.7 0-17.7 14.3-32.2 32-32.2s32 14.5 32 32.2c0 5.1-1.2 10.2-3.5 14.7l-23.8 46.3c-.9 1.7-2.7 2.8-4.7 2.8s-3.8-1.1-4.7-2.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 64c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v96H64zm88 224a24 24 0 1 1 0 48 24 24 0 1 1 0-48m144 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48M32 192h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
