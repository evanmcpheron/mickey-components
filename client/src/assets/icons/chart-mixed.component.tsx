import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartMixedIcon: React.FC<
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
                  d="M500 89c13.8-11 16-31.2 5-45s-31.2-16-45-5L319.4 151.5 211.2 70.4c-11.7-8.8-27.8-8.5-39.2.6L12 199c-13.8 11-16 31.2-5 45s31.2 16 45 5l140.6-112.5 108.2 81.1c11.7 8.8 27.8 8.5 39.2-.6zM160 256v192c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-17.7-14.3-32-32-32s-32 14.3-32 32M32 352v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32s-32 14.3-32 32m288-64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32s32-14.3 32-32V320c0-17.7-14.3-32-32-32m96-32v192c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-17.7-14.3-32-32-32s-32 14.3-32 32"
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
                  d="M503.6 74.2c10.1-8.6 11.2-23.8 2.6-33.8s-23.8-11.2-33.8-2.6L320.2 168.3 207.8 69.9c-8.2-7.1-20.1-7.9-29.1-1.9l-168 112c-11 7.4-14 22.3-6.7 33.3s22.3 14 33.3 6.7L190 118.2l114.2 99.9c9 7.9 22.4 7.9 31.4.2l168-144zM200 432c0 4.4-3.6 8-8 8s-8-3.6-8-8V272c0-4.4 3.6-8 8-8s8 3.6 8 8zm-8-208c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48s48-21.5 48-48V272c0-26.5-21.5-48-48-48M72 432c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64c0-4.4 3.6-8 8-8s8 3.6 8 8zm-8-112c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48s48-21.5 48-48v-64c0-26.5-21.5-48-48-48m264 16v96c0 4.4-3.6 8-8 8s-8-3.6-8-8v-96c0-4.4 3.6-8 8-8s8 3.6 8 8m-56 0v96c0 26.5 21.5 48 48 48s48-21.5 48-48v-96c0-26.5-21.5-48-48-48s-48 21.5-48 48m184 96c0 4.4-3.6 8-8 8s-8-3.6-8-8V272c0-4.4 3.6-8 8-8s8 3.6 8 8zm-8-208c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48s48-21.5 48-48V272c0-26.5-21.5-48-48-48"
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
                  d="M507.8 37.2c5.9 6.5 5.5 16.7-1.1 22.6l-176 160c-6.3 5.7-16 5.5-22.1-.5L190.4 101l-165 119.9c-7.1 5.2-17.2 3.6-22.4-3.5S-.6 200.2 6.5 195l176-128c6.4-4.6 15.2-3.9 20.7 1.6l117.3 117.3L485.2 36.2c6.5-5.9 16.7-5.5 22.6 1.1zM80 432v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16M64 320c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48s-48-21.5-48-48v-64c0-26.5 21.5-48 48-48m144-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16zm-64 0c0-26.5 21.5-48 48-48s48 21.5 48 48v160c0 26.5-21.5 48-48 48s-48-21.5-48-48zm192 160v-96c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16m-16-144c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48s-48-21.5-48-48v-96c0-26.5 21.5-48 48-48m144-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16zm-64 0c0-26.5 21.5-48 48-48s48 21.5 48 48v160c0 26.5-21.5 48-48 48s-48-21.5-48-48z"
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
                  d="M510 34.8c2.9 3.3 2.5 8.4-.8 11.3l-184 160c-3.2 2.8-7.9 2.6-10.9-.4l-123-123L12.9 222.3c-3.5 2.7-8.5 2.1-11.2-1.4s-2.1-8.5 1.4-11.2l184-144c3.2-2.5 7.7-2.2 10.6.6l122.7 122.8L498.8 34c3.3-2.9 8.4-2.5 11.3.8zM80 448v-96c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16M64 320c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32m128-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16V256c0-8.8-7.2-16-16-16m-32 16c0-17.7 14.3-32 32-32s32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32zm176 192V320c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16m-16-160c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32m128-48c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16V256c0-8.8-7.2-16-16-16m-32 16c0-17.7 14.3-32 32-32s32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
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
                  d="M192 224c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-17.7-14.3-32-32-32M64 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32m224 0v128c0 17.7 14.3 32 32 32s32-14.3 32-32V320c0-17.7-14.3-32-32-32s-32 14.3-32 32m160-96c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-17.7-14.3-32-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M505 44c11 13.8 8.8 33.9-5 45L340 217c-11.4 9.1-27.5 9.4-39.2.6l-108.2-81.1L52 249c-13.8 11-33.9 8.8-45-5s-8.8-33.9 5-45L172 71c11.4-9.1 27.5-9.4 39.2-.6l108.2 81.1L460 39c13.8-11 33.9-8.8 45 5"
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
