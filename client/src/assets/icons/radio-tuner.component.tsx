import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RadioTunerIcon: React.FC<
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
                  d="M494.8 47c12.7-3.7 20-17.1 16.3-29.8S494-2.8 481.2 1L51.7 126.9c-9.4 2.7-17.9 7.3-25.1 13.2C10.5 151.7 0 170.6 0 192v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H218.5zM320 384a64 64 0 1 1 128 0 64 64 0 1 1-128 0M80 336h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16m16 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16M64 224c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32"
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
                  d="M511.1 17.6c3.5 12.8-4 26-16.8 29.5L201.2 128H448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V188.6c0-32.4 21.6-60.8 52.9-69.4L481.6.9c12.8-3.5 26 4 29.5 16.8zM48 272v176c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V272zm256 96a64 64 0 1 1 128 0 64 64 0 1 1-128 0M96 320h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16m16 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M500.1 31.5c8.5-2.3 13.6-11 11.3-19.6S500.4-1.7 491.8.6L59.4 115.9c-31.3 8.4-54.1 34.6-58.6 66-.5 3.3-.8 6.6-.8 10.1v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H138.1zM32 193.2c0-2.2.1-4.3.4-6.4C34.9 171.6 48.1 160 64 160h384c17.7 0 32 14.3 32 32v32H32zM32 448V256h448v192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32m48-128c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16zm16 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16zm272 32a48 48 0 1 1 0-96 48 48 0 1 1 0 96m-80-48a80 80 0 1 0 160 0 80 80 0 1 0-160 0"
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
                  d="M506.1 15.7c4.3-1.2 6.8-5.6 5.6-9.8s-5.6-6.8-9.8-5.6L53 123.4c-26.4 7.2-46 28.7-51.4 54.7C.5 182.6 0 187.2 0 192v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H96.6zM16 192.8c0-3.8.4-7.6 1.1-11.2 4.8-21.5 24-37.6 46.9-37.6h384c26.5 0 48 21.5 48 48v48H16zm0 63.2h480v192c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm408 120a56 56 0 1 1-112 0 56 56 0 1 1 112 0m-128 0a72 72 0 1 0 144 0 72 72 0 1 0-144 0M64 344c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H72c-4.4 0-8 3.6-8 8m16 64c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H88c-4.4 0-8 3.6-8 8"
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
                  d="M64 128c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zm320 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128M64 352c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m16 64c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16m16-224h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M511 17.3c3.7 12.7-3.6 26.1-16.3 29.8L218.5 128H64c-13.9 0-26.9 4.5-37.4 12 7.3-5.9 15.7-10.4 25.1-13.2L481.3 1c12.7-3.8 26 3.5 29.7 16.3M64 224c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32m256 160a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
