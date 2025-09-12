import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HockeySticksIcon: React.FC<
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
                  d="m220.6 17.7 82.3 164.6-35.8 71.6L163.4 46.3c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3m152.2 304.4 15 29.9H544v160H435.8c-24.2 0-46.4-13.7-57.2-35.4l-41.5-83 35.8-71.6zM576 352h32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-32zM462.3 3.4c15.8 7.9 22.2 27.1 14.3 42.9L261.5 476.6c-10.8 21.7-33 35.4-57.2 35.4H96V352h156.2L419.4 17.7c7.9-15.8 27.1-22.2 42.9-14.3M0 384c0-17.7 14.3-32 32-32h32v160H32c-17.7 0-32-14.3-32-32z"
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
                  d="M173.3 13 302 261.7 288.4 288h-26.9L130.7 35c-6.1-11.7-1.5-26.2 10.3-32.3s26.3-1.5 32.3 10.3m199.8 355 24.8-48H576c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H421.2c-26.9 0-51.6-15-64-38.9L338 435.9l27-52.2 34.9 67.3c4.1 8 12.3 13 21.3 13H496v-96zm170.9 0v96h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zM499 2.7c11.8 6.1 16.4 20.6 10.3 32.3L282.7 473.1c-12.4 23.9-37 38.9-64 38.9H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h240c1.3 0 2.5.1 3.7.3L466.7 13C472.8 1.2 487.3-3.4 499 2.7M283 368H144v96h74.8c9 0 17.2-5 21.3-13zm-219 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32v-96z"
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
                  d="M301.4 288h-34.9L129.8 23.3c-4.1-7.9-1-17.5 6.9-21.6s17.5-1 21.6 6.9L302 286.9zm75 64 16.6-32h191c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56H421.2c-23.9 0-45.9-13.4-56.9-34.6l-26.4-51 18-34.9 36.8 71.2c5.5 10.6 16.5 17.3 28.4 17.3H512V352zm167.6 0v128h40c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24zM503.3 1.8c7.8 4.1 10.9 13.7 6.9 21.6l-234.6 454c-11 21.3-32.9 34.6-56.9 34.6H56c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h264.9L481.8 8.7c4.1-7.9 13.7-10.9 21.6-6.9zM304.4 352H128v128h90.8c12 0 22.9-6.7 28.4-17.3zM56 352c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h40V352z"
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
                  d="M511.1 11.7c2-3.9.5-8.8-3.4-10.8s-8.8-.5-10.8 3.4L328.3 330.7H48c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48h170.5c20.9 0 40.1-11.7 49.8-30.3l242.9-470zM112 346.7h208l-66 127.7c-6.9 13.3-20.6 21.6-35.5 21.6H112zm-16 0V496H48c-17.7 0-32-14.3-32-32v-85.3c0-17.7 14.3-32 32-32zm199.2-48L143.1 4.3c-2-3.9-6.9-5.5-10.8-3.4s-5.5 6.9-3.4 10.8l148.3 287zM338 416.4l33.7 65.3c9.6 18.6 28.8 30.3 49.8 30.3H592c26.5 0 48-21.5 48-48v-85.3c0-26.5-21.5-48-48-48H382.3l-8.3 16h154V496H421.5c-15 0-28.7-8.3-35.5-21.6L347 399zm254-69.7c17.7 0 32 14.3 32 32V464c0 17.7-14.3 32-32 32h-48V346.7z"
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
                  d="M462.3 3.4c15.8 7.9 22.2 27.1 14.3 42.9L261.5 476.6c-10.8 21.7-33 35.4-57.2 35.4H96V352h156.2L419.4 17.7c7.9-15.8 27.1-22.2 42.9-14.3M0 384c0-17.7 14.3-32 32-32h32v160H32c-17.7 0-32-14.3-32-32zm576-32v160h-32V352z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m220.6 17.7 81.5 163-35.8 71.6-102.9-206c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3m117.3 377.6 35.8-71.6 14.1 28.3H544v160H435.8c-24.2 0-46.4-13.7-57.2-35.4L338 395.3zM608 352c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-32V352zm-512 0v160H64V352z"
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
