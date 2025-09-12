import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceSmilePlusIcon: React.FC<
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
                  d="M544 0c-13.3 0-24 10.7-24 24v48h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48V24c0-13.3-10.7-24-24-24M224 512a224 224 0 1 0 0-448 224 224 0 1 0 0 448m-79.6-304a32 32 0 1 1 0 64 32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0M140 346.1c20.5 23.3 50.6 37.9 84 37.9s63.5-14.6 84-37.9c5.8-6.6 16-7.3 22.6-1.4s7.3 16 1.4 22.6c-26.4 29.8-65 48.7-108 48.7s-81.6-18.9-108-48.7c-5.8-6.6-5.2-16.7 1.4-22.6s16.7-5.2 22.6 1.4"
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
                  d="M544 0c13.3 0 24 10.7 24 24v48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48V24c0-13.3 10.7-24 24-24M400 288a176 176 0 1 0-352 0 176 176 0 1 0 352 0M0 288a224 224 0 1 1 448 0 224 224 0 1 1-448 0m144.4-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0M146 332.8c19.1 21.6 46.9 35.2 78 35.2s58.9-13.6 78-35.2c8.8-9.9 23.9-10.9 33.9-2.1s10.9 23.9 2.1 33.9c-27.8 31.5-68.6 51.4-114 51.4s-86.2-19.9-114-51.5c-8.8-9.9-7.8-25.1 2.1-33.9s25.1-7.8 33.9 2.1z"
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
                  d="M560 16v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V16c0-8.8 7.2-16 16-16s16 7.2 16 16M416 288a192 192 0 1 0-384 0 192 192 0 1 0 384 0M0 288a224 224 0 1 1 448 0 224 224 0 1 1-448 0m144.4-72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m136 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-153.5 90.1c4.5 11.2 15.1 29.1 31.8 44 16.4 14.6 38.1 25.9 65.3 25.9s48.9-11.3 65.3-25.9c16.7-14.9 27.3-32.8 31.8-44 3.3-8.2 12.6-12.2 20.8-8.9s12.2 12.6 8.9 20.8c-6.2 15.4-19.5 37.5-40.2 56-20.8 18.6-49.8 34-86.6 34s-65.8-15.4-86.7-34.1c-20.7-18.5-34-40.6-40.2-56-3.3-8.2.7-17.5 8.9-20.8s17.5.7 20.8 8.9z"
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
                  d="M552 8v80h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8h80V8c0-4.4 3.6-8 8-8s8 3.6 8 8M432 288a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 288a224 224 0 1 1 448 0 224 224 0 1 1-448 0m144.4-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32m144 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-169 101c4.9 12.3 16.2 31.2 33.9 47 17.6 15.7 41.1 28 70.7 28s53.1-12.3 70.7-28c17.7-15.8 29-34.7 33.9-47 1.6-4.1 6.3-6.1 10.4-4.5s6.1 6.3 4.5 10.4c-5.8 14.4-18.4 35.4-38.1 53-19.8 17.7-46.9 32-81.3 32s-61.6-14.4-81.3-32-32.3-38.6-38.1-53c-1.6-4.1.4-8.8 4.5-10.4s8.8.4 10.4 4.5z"
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
                  d="M224 512a224 224 0 1 0 0-448 224 224 0 1 0 0 448m-79.6-304a32 32 0 1 1 0 64 32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0M140 346.1c20.5 23.3 50.6 37.9 84 37.9s63.5-14.6 84-37.9c5.8-6.6 16-7.3 22.6-1.4s7.3 16 1.4 22.6c-26.4 29.8-65 48.7-108 48.7s-81.6-18.9-108-48.7c-5.8-6.6-5.2-16.7 1.4-22.6s16.7-5.2 22.6 1.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M544 0c13.3 0 24 10.7 24 24v48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48V24c0-13.3 10.7-24 24-24M144.4 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64m160 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
