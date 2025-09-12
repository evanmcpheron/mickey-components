import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VacuumIcon: React.FC<
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
                  d="M301.6 64H512c35.3 0 64 28.7 64 64 0 21.9-11 41.2-27.8 52.8-34.4-32.7-81-52.8-132.2-52.8-35.3 0-64 28.7-64 64v100c10.2-2.6 21-4 32-4 70.7 0 128 57.3 128 128 0 38.2-16.8 72.5-43.3 96H544c35.3 0 64-28.7 64-64V320c0-31.7-7.7-61.7-21.3-88C619 208.7 640 170.8 640 128 640 57.3 582.7 0 512 0H301.6c-60.3 0-112.5 42.2-125.2 101.2L150.1 224h65.5L239 114.6c6.4-29.5 32.4-50.6 62.6-50.6m-92.9 192h-65.4L109 416H83.8c-33.8 0-64.7 18.9-80 49-2.4 4.5-3.8 9.6-3.8 15 0 17.7 14.3 32 32 32h144c26.5 0 48-21.5 48-48s-21.5-48-48-48h-1.6zM480 416a96 96 0 1 0-192 0 96 96 0 1 0 192 0m-128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M290 48c-27.1 0-50.6 19-56.2 45.5L206 224h-49.1l29.9-140.5C197.2 34.8 240.2 0 290 0h238c61.9 0 112 50.1 112 112 0 44.8-26.3 83.5-64.3 101.4C596.1 243.9 608 280.5 608 320v128c0 35.3-28.7 64-64 64h-75.3c14.8-13 26.5-29.4 34-48H544c8.8 0 16-7.2 16-16V320c0-79.5-64.5-144-144-144-8.8 0-16 7.2-16 16v97c-5.2-.7-10.6-1-16-1-11 0-21.8 1.4-32 4V192c0-35.3 28.7-64 64-64 47.9 0 91.8 17.6 125.4 46.6 28.9-6.1 50.6-31.9 50.6-62.6 0-35.3-28.7-64-64-64zM150.1 256h49.1l-27.5 129.1c29.8 5.5 52.3 31.6 52.3 62.9 0 35.3-28.7 64-64 64H32c-17.7 0-32-14.3-32-32 0-53 43-96 96-96h26.9zM432 416a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-144 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m-112 32c0-8.8-7.2-16-16-16H96c-20.9 0-38.7 13.4-45.3 32H160c8.8 0 16-7.2 16-16m208-48a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M192.4 89.2C203.2 37.2 249 0 302.1 0H528c61.9 0 112 50.1 112 112 0 44.8-26.3 83.5-64.3 101.4C596.1 243.9 608 280.5 608 320v128c0 35.3-28.7 64-64 64h-75.3c10.4-9.2 19.2-20 26.2-32H544c17.7 0 32-14.3 32-32V320c0-88.4-71.6-160-160-160-17.7 0-32 14.3-32 32v96c-11 0-21.8 1.4-32 4V192c0-35.3 28.7-64 64-64 54.6 0 103.9 22.8 138.8 59.4 31-11 53.2-40.6 53.2-75.4 0-44.2-35.8-80-80-80H302.1c-37.9 0-70.6 26.6-78.3 63.7L197 224h-32.7zM157.7 256h32.7l-26.7 128.1C197.3 386 224 413.9 224 448c0 35.3-28.7 64-64 64H24.2C10.8 512 0 501.2 0 487.8c0-5.2.8-10.4 2.5-15.3l7.6-22.9c13.1-39.2 49.8-65.6 91.1-65.6H131zm-13.4 160h-43.1c-27.5 0-52 17.6-60.7 43.8L33.7 480H160c17.7 0 32-14.3 32-32s-14.3-32-32-32zm303.7 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m96-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M207 80.6C217.9 33.4 259.9 0 308.4 0H528c61.9 0 112 50.1 112 112 0 44.8-26.3 83.5-64.3 101.4C596.1 243.9 608 280.5 608 320v128c0 35.3-28.7 64-64 64h-75.3c5.5-4.9 10.6-10.2 15.3-16h60c26.5 0 48-21.5 48-48V320c0-97.2-78.8-176-176-176-26.5 0-48 21.5-48 48v97c-5.4.7-10.8 1.7-16 3V192c0-35.3 28.7-64 64-64 60.7 0 114.8 28.2 150 72.2 34.1-14.7 58-48.7 58-88.2 0-53-43-96-96-96H308.4c-41 0-76.5 28.3-85.7 68.2L190.4 224h-16.5zM166.6 256H183l-36.9 160H176c26.5 0 48 21.5 48 48s-21.5 48-48 48H21.7C9.7 512 0 502.3 0 490.3c0-6.7 1.6-13.4 4.6-19.4l1.9-3.9c15.6-31.3 47.6-51 82.5-51h40.6l36.9-160zm-30.4 176H89c-28.9 0-55.3 16.3-68.2 42.2l-1.9 3.8c-1.9 3.8-2.9 8-2.9 12.3 0 3.2 2.6 5.7 5.7 5.7H176c17.7 0 32-14.3 32-32s-14.3-32-32-32zM464 416a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m96 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M416 128c-35.3 0-64 28.7-64 64v133.5c10-3.5 20.8-5.5 32-5.5 53 0 96 43 96 96s-43 96-96 96h160c35.3 0 64-28.7 64-64V320c0-106-86-192-192-192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M301.6 64H512c35.3 0 64 28.7 64 64 0 21.9-11 41.2-27.8 52.8 15.5 14.7 28.6 32 38.5 51.2C619 208.7 640 170.8 640 128 640 57.3 582.7 0 512 0H301.6c-60.3 0-112.5 42.2-125.2 101.2L150.1 224h65.5L239 114.6c6.4-29.5 32.4-50.6 62.6-50.6m-92.9 192h-65.4L109 416H83.8c-33.8 0-64.7 18.9-80 49-2.4 4.5-3.8 9.6-3.8 15 0 17.7 14.3 32 32 32h144c26.5 0 48-21.5 48-48s-21.5-48-48-48h-1.6zM384 512a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
