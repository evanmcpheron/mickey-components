import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AirConditionerIcon: React.FC<
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
                  d="M64 0C28.7 0 0 28.7 0 64v96c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 128h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16m176 128h-64v160c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-11.8 6.4-22.2 16-27.7 15.3-8.9 20.5-28.4 11.7-43.7s-28.4-20.5-43.7-11.7c-28.6 16.5-48 47.5-48 83.1 0 53 43 96 96 96s96-43 96-96zm64 128c0 53 43 96 96 96s96-43 96-96c0-35.6-19.4-66.6-48-83.1-15.3-8.8-34.9-3.6-43.7 11.7s-3.6 34.9 11.7 43.7c9.6 5.6 16 15.9 16 27.7 0 17.7-14.3 32-32 32s-32-14.3-32-32V256h-64z"
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
                  d="M64 48c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM0 64C0 28.7 28.7 0 64 0h448c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120 64h336c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24m248 160v104c0 22.1 17.9 40 40 40s40-17.9 40-40c0-14.8-8-27.7-20-34.7-11.5-6.6-15.4-21.3-8.7-32.8s21.3-15.4 32.8-8.7C478.3 331 496 359.4 496 392c0 48.6-39.4 88-88 88s-88-39.4-88-88V288zM208 424V288h48v136c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-32.6 17.7-61 43.9-76.2 11.5-6.6 26.2-2.7 32.8 8.7s2.7 26.2-8.7 32.8c-12 7-20 19.9-20 34.7 0 22.1 17.9 40 40 40s40-17.9 40-40"
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
                  d="M64 32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM0 64C0 28.7 28.7 0 64 0h448c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 64h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m144 160v144c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-29.6 16.1-55.5 40-69.3 7.6-4.4 17.4-1.8 21.9 5.8s1.8 17.4-5.8 21.9c-14.4 8.3-24 23.8-24 41.6 0 26.5 21.5 48 48 48s48-21.5 48-48V288h32zm64 112V288h32v112c0 26.5 21.5 48 48 48s48-21.5 48-48c0-17.7-9.6-33.3-24-41.6-7.6-4.4-10.3-14.2-5.8-21.9s14.2-10.3 21.9-5.8c23.9 13.8 40 39.7 40 69.3 0 44.2-35.8 80-80 80s-80-35.8-80-80z"
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
                  d="M64 16c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zM0 64C0 28.7 28.7 0 64 0h448c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 360c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-28.8 13.9-54.4 35.3-70.4 3.5-2.7 8.5-1.9 11.2 1.6s1.9 8.6-1.6 11.2C107.3 379.5 96 400.4 96 424c0 39.8 32.2 72 72 72s72-32.2 72-72V256h16zm64-168h16v136c0 39.8 32.2 72 72 72s72-32.2 72-72c0-23.6-11.3-44.5-28.8-57.6-3.5-2.7-4.3-7.7-1.6-11.2s7.7-4.3 11.2-1.6c21.4 16 35.2 41.6 35.2 70.4 0 48.6-39.4 88-88 88s-88-39.4-88-88zM104 128h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M80 128h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16m176 96v192c0 53-43 96-96 96s-96-43-96-96c0-35.6 19.4-66.6 48-83.1 15.3-8.9 34.9-3.6 43.7 11.7s3.6 34.9-11.7 43.7c-9.6 5.6-16 15.9-16 27.7 0 17.7 14.3 32 32 32s32-14.3 32-32V224zm64 0h64v160c0 17.7 14.3 32 32 32s32-14.3 32-32c0-11.8-6.4-22.2-16-27.7-15.3-8.9-20.5-28.4-11.7-43.7s28.4-20.5 43.7-11.7c28.6 16.6 48 47.6 48 83.1 0 53-43 96-96 96s-96-43-96-96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 0C28.7 0 0 28.7 0 64v96c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 128h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
