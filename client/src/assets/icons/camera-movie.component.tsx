import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CameraMovieIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m224 192H128C57.3 256 0 198.7 0 128S57.3 0 128 0c48.2 0 90.2 26.6 112 66 21.8-39.4 63.8-66 112-66 70.7 0 128 57.3 128 128s-57.3 128-128 128m0-192a64 64 0 1 0 0 128 64 64 0 1 0 0-128m206.3 195.4c10.8 5.4 17.7 16.5 17.7 28.6v192c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48L448 448V320l12.8-9.6 64-48c9.7-7.3 22.7-8.4 33.5-3M64 288h288c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64v-96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 120a72 72 0 1 0-144 0 72 72 0 1 0 144 0m120 120H152c-66.3 0-120-53.7-120-120S85.7 0 152 0c39.3 0 74.1 18.8 96 48 21.9-29.1 56.7-48 96-48 66.3 0 120 53.7 120 120s-53.7 120-120 120m-72-120a72 72 0 1 0 144 0 72 72 0 1 0-144 0M112 336v112c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16H128c-8.8 0-16 7.2-16 16m32-64h208c35.3 0 64 28.7 64 64v112c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V336c0-5.5.7-10.9 2-16H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h120m384 36.6-80 36V292l75.6-34c2.9-1.3 6-2.2 9.1-2.8 22.6-3.8 43.3 13.7 43.3 36.6v180.7c0 21.8-17.7 39.5-39.5 39.5-5.6 0-11.1-1.2-16.2-3.5L448 476v-52.6l80 36z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 0c40.8 0 76.4 21.8 96 54.3C259.6 21.8 295.2 0 336 0c61.9 0 112 50.1 112 112s-50.1 112-112 112H144c-61.9 0-112-50.1-112-112S82.1 0 144 0M64 112c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80s-35.8-80-80-80c-39.6 0-72.5 28.8-78.9 66.6-1.3 7.7-8 13.4-15.8 13.4h-2.7c-7.8 0-14.5-5.6-15.8-13.4C216.5 60.8 183.6 32 144 32c-44.2 0-80 35.8-80 80m80-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m168 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M136 288h-8c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32zm0-32h216c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V320c0-11.7 3.1-22.6 8.6-32H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h120m312 184.9 85.4 38.4c1 .4 2 .7 3.1.7 4.2 0 7.5-3.4 7.5-7.5V291.9c0-3.2-2.9-5.6-6-5.1-.4.1-.9.2-1.3.4L448 327.1V292l75.6-34c2.9-1.3 6-2.2 9.1-2.8 22.6-3.8 43.3 13.7 43.3 36.6v180.7c0 21.8-17.7 39.5-39.5 39.5-5.6 0-11.1-1.2-16.2-3.5L448 476z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 128C16 66.1 66.1 16 128 16c47.6 0 88.4 29.7 104.5 71.7 1.2 3.1 4.2 5.1 7.5 5.1s6.3-2 7.5-5.1C263.6 45.7 304.4 16 352 16c61.9 0 112 50.1 112 112s-50.1 112-112 112H128c-61.9 0-112-50.1-112-112M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128h224c70.7 0 128-57.3 128-128S422.7 0 352 0c-48.2 0-90.2 26.6-112 66-21.8-39.4-63.8-66-112-66m408.5 512c21.8 0 39.5-17.7 39.5-39.5V291.9c0-23-20.6-40.4-43.3-36.6-3.2.5-6.2 1.5-9.1 2.8L448 292v17.5l82.2-37c1.7-.7 3.4-1.3 5.2-1.6 12.9-2.1 24.6 7.8 24.6 20.9v180.7c0 13-10.5 23.5-23.5 23.5-3.3 0-6.6-.7-9.7-2.1L448 458.5V476l72.3 32.5c5.1 2.3 10.6 3.5 16.2 3.5M64 336H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h320c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H128c-26.5 0-48-21.5-48-48v-96c0-8.8-7.2-16-16-16m-16 16h16v96c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32zm80-272a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m176-64a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v128c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m224 192H128C57.3 256 0 198.7 0 128S57.3 0 128 0c48.2 0 90.2 26.6 112 66 21.8-39.4 63.8-66 112-66 70.7 0 128 57.3 128 128s-57.3 128-128 128m0-192a64 64 0 1 0 0 128 64 64 0 1 0 0-128m206.3 195.4c10.8 5.4 17.7 16.5 17.7 28.6v192c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48L448 448V320l12.8-9.6 64-48c9.7-7.3 22.7-8.4 33.5-3"
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
