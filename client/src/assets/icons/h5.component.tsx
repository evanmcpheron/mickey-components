import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const H5Icon: React.FC<
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
                  d="M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V288h192v128c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H64zm368-32c-15.1 0-28.2 10.6-31.3 25.4l-32 152c-2 9.4.4 19.3 6.5 26.8S390.4 280 400 280h124c28.7 0 52 23.3 52 52s-23.3 52-52 52h-67.6c-10.3 0-19.5-6.6-22.8-16.4l-3.2-9.7c-5.6-16.8-23.7-25.8-40.5-20.2s-25.8 23.7-20.2 40.5l3.2 9.7c12 35.9 45.6 60.2 83.5 60.2H524c64.1 0 116-51.9 116-116s-51.9-116-116-116h-84.6L458 128h118c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24V272h224v152c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24s-24 10.7-24 24v136H48zm392-24c-11.4 0-21.3 8.1-23.5 19.3l-32 160c-1.4 7.1.4 14.4 5 19.9s11.4 8.8 18.6 8.8H528c35.3 0 64 28.7 64 64s-28.7 64-64 64h-63.6c-13.8 0-26-8.8-30.4-21.9l-3.2-9.7c-4.2-12.6-17.8-19.4-30.4-15.2S381 371 385.2 383.6l3.2 9.7c11 32.7 41.5 54.7 76 54.7H528c61.9 0 112-50.1 112-112s-50.1-112-112-112h-90.7l22.4-112H584c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M32 80c0-8.8-7.2-16-16-16S0 71.2 0 80v352c0 8.8 7.2 16 16 16s16-7.2 16-16V272h256v160c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v160H32zm400-16c-7.6 0-14.2 5.4-15.7 12.9l-32 160c-.9 4.7.3 9.6 3.3 13.3s7.6 5.9 12.4 5.9h128c44.2 0 80 35.8 80 80s-35.8 80-80 80h-71.6c-17.2 0-32.5-11-37.9-27.4l-3.2-9.7c-2.8-8.4-11.9-12.9-20.2-10.1s-12.9 11.9-10.1 20.2l3.2 9.7c9.8 29.4 37.3 49.2 68.3 49.2H528c61.9 0 112-50.1 112-112s-50.1-112-112-112H419.5l25.6-128H592c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M16 72c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 4.4 3.6 8 8 8s8-3.6 8-8V256h288v184c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H16zm416-8c-3.7 0-7 2.6-7.8 6.2l-40 176c-.5 2.4 0 4.9 1.5 6.8s3.8 3 6.3 3h144c48.6 0 88 39.4 88 88s-39.4 88-88 88h-87.6c-20.7 0-39-13.2-45.5-32.8l-3.2-9.7c-1.4-4.2-5.9-6.5-10.1-5.1s-6.5 5.9-5.1 10.1l3.2 9.7c8.7 26.1 33.2 43.8 60.7 43.8H536c57.4 0 104-46.6 104-104s-46.6-104-104-104H402l36.4-160H600c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M400.7 89.4C403.8 74.6 416.9 64 432 64h144c17.7 0 32 14.3 32 32s-14.3 32-32 32H458l-18.5 88H524c64.1 0 116 51.9 116 116s-51.9 116-116 116h-67.6c-37.9 0-71.5-24.2-83.5-60.2l-3.2-9.7c-5.6-16.8 3.5-34.9 20.2-40.5s34.9 3.5 40.5 20.2l3.2 9.7c3.3 9.8 12.4 16.4 22.8 16.4H524c28.7 0 52-23.3 52-52s-23.3-52-52-52H400c-9.6 0-18.8-4.3-24.8-11.8s-8.5-17.3-6.5-26.8l32-152z"
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
