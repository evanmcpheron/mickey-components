import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EnvelopesIcon: React.FC<
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
                  d="M316.7 249.6c5.6 4.1 12.4 6.4 19.3 6.4s13.7-2.2 19.3-6.4l220-163C570.8 55.7 544.2 32 512 32H160c-32.2 0-58.8 23.7-63.3 54.7l220 163zm57.7 25.7c-11.1 8.3-24.6 12.7-38.4 12.7s-27.3-4.4-38.4-12.7L96 126v194c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V126zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v224c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
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
                  d="M512 80H160c-8.8 0-16 7.2-16 16v7.8l177.4 131.4c4.2 3.1 9.3 4.8 14.6 4.8s10.4-1.7 14.6-4.8L528 103.8V96c0-8.8-7.2-16-16-16m16 83.5L379.1 273.8C366.7 283 351.5 288 336 288s-30.7-5-43.1-14.2L144 163.5V320c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16zM160 32h352c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64M24 96c13.3 0 24 10.7 24 24v224c0 48.6 39.4 88 88 88h320c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 480 0 419.1 0 344V120c0-13.3 10.7-24 24-24"
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
                  d="M512 64c17.7 0 32 14.3 32 32v19.6L364.4 247.3c-16.9 12.4-39.9 12.4-56.8 0L128 115.6V96c0-17.7 14.3-32 32-32zM128 320V155.3l160.7 117.8c28.2 20.7 66.5 20.7 94.6 0L544 155.3V320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32m32-288c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v240c0 70.7 57.3 128 128 128h336c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-53 0-96-43-96-96z"
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
                  d="M512 48c26.5 0 48 21.5 48 48v17.8l-4.7 3.5-186.2 136.5c-19.7 14.5-46.5 14.5-66.2 0L116.7 117.3l-4.7-3.5V96c0-26.5 21.5-48 48-48zM112 320V133.7l181.4 133c25.3 18.6 59.8 18.6 85.2 0l181.4-133V320c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48m48-288c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM0 192v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64h-16c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48v-16c-35.3 0-64 28.7-64 64"
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
                  d="m96.7 86.7 220 163c5.6 4.1 12.4 6.4 19.3 6.4s13.7-2.2 19.3-6.4l220-163C570.8 55.7 544.2 32 512 32H160c-32.2 0-58.8 23.7-63.3 54.7M576 126 374.4 275.3c-11.1 8.3-24.6 12.7-38.4 12.7s-27.3-4.4-38.4-12.7L96 126v194c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 96v30l201.6 149.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L576 126V96c0-3.2-.2-6.3-.7-9.3l-220 163c-5.6 4.1-12.4 6.4-19.3 6.4s-13.7-2.2-19.3-6.4l-220-163c-.4 3-.7 6.2-.7 9.3m-48 24c0-13.3-10.7-24-24-24S0 106.7 0 120v224c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
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
