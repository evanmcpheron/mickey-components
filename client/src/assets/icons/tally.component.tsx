import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TallyIcon: React.FC<
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
                  d="M128 32c17.7 0 32 14.3 32 32v211.6l64-21.3V64c0-17.7 14.3-32 32-32s32 14.3 32 32v168.9l64-21.3V64c0-17.7 14.3-32 32-32s32 14.3 32 32v126.3l64-21.3V64c0-17.7 14.3-32 32-32s32 14.3 32 32v83.6l53.9-18c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5L544 215.1V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V236.4l-64 21.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V279.1l-64 21.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V321.7L160 343v105c0 17.7-14.3 32-32 32s-32-14.3-32-32v-83.6l-53.9 18c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5L96 296.9V64c0-17.7 14.3-32 32-32"
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
                  d="M128 40c13.3 0 24 10.7 24 24v222.7l80-26.7V64c0-13.3 10.7-24 24-24s24 10.7 24 24v180l80-26.7V64c0-13.3 10.7-24 24-24s24 10.7 24 24v137.4l80-26.7V64c0-13.3 10.7-24 24-24s24 10.7 24 24v94.7l64.4-21.5c12.6-4.2 26.2 2.6 30.4 15.2s-2.6 26.2-15.2 30.4L536 209.3V448c0 13.3-10.7 24-24 24s-24-10.7-24-24V225.3L408 252v196c0 13.3-10.7 24-24 24s-24-10.7-24-24V268l-80 26.7V448c0 13.3-10.7 24-24 24s-24-10.7-24-24V310.6l-80 26.7V448c0 13.3-10.7 24-24 24s-24-10.7-24-24v-94.7l-64.4 21.5C27 379 13.4 372.2 9.2 359.6s2.6-26.2 15.2-30.4l79.6-26.5V64c0-13.3 10.7-24 24-24"
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
                  d="M128 32c8.8 0 16 7.2 16 16v249.8l96-32V48c0-8.8 7.2-16 16-16s16 7.2 16 16v207.1l96-32V48c0-8.8 7.2-16 16-16s16 7.2 16 16v164.5l96-32V48c0-8.8 7.2-16 16-16s16 7.2 16 16v121.8l74.9-25c8.4-2.8 17.4 1.7 20.2 10.1s-1.7 17.4-10.1 20.2l-85 28.4V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V214.2l-96 32V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V256.9l-96 32V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V299.5l-96 32V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V342.2l-74.9 25c-8.4 2.8-17.4-1.7-20.2-10.1s1.7-17.4 10.1-20.2l85-28.4V48c0-8.8 7.2-16 16-16"
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
                  d="M128 32c4.4 0 8 3.6 8 8v268.9l112-37.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v226.2l112-37.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v183.6l112-37.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v140.9l85.5-28.5c4.2-1.4 8.7.9 10.1 5.1s-.9 8.7-5.1 10.1L520 197.8V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V203.1l-112 37.3V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V245.8l-112 37.3V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V288.4l-112 37.4V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V331.1l-85.5 28.5c-4.2 1.4-8.7-.9-10.1-5.1s.9-8.7 5.1-10.1l90.5-30.2V40c0-4.4 3.6-8 8-8"
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
                  d="M128 32c-17.7 0-32 14.3-32 32v232.9l64-21.3V64c0-17.7-14.3-32-32-32M96 364.4V448c0 17.7 14.3 32 32 32s32-14.3 32-32V343.1zm128-42.7V448c0 17.7 14.3 32 32 32s32-14.3 32-32V300.4zM352 279v169c0 17.7 14.3 32 32 32s32-14.3 32-32V257.7zm64-88.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v147.6l64-21.3zm64 46.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V215.1l-64 21.3zm64-88.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v104.9l64-21.3zm-256 85.4V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v190.3l64-21.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M638.4 149.9c5.6 16.8-3.5 34.9-20.2 40.5l-576 192c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l576-192c16.8-5.6 34.9 3.5 40.5 20.2"
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
