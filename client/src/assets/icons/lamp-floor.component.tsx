import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LampFloorIcon: React.FC<
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
                  d="M194.3 20.1C199.1 8 210.9 0 224 0h192c13.1 0 24.9 8 29.7 20.1l64 160c3.9 9.9 2.7 21-3.2 29.8S490.6 224 480 224H160c-10.6 0-20.5-5.3-26.5-14.1s-7.2-20-3.2-29.8zM288 256h64v192h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h64z"
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
                  d="M183.6 176h272.8L405.2 48H234.8zm10.7-155.9C199.1 8 210.9 0 224 0h192c13.1 0 24.9 8 29.7 20.1l64 160c3.9 9.9 2.7 21-3.2 29.8S490.6 224 480 224H160c-10.6 0-20.5-5.3-26.5-14.1s-7.2-20-3.2-29.8zM216 464h80V256h48v208h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="m224 32-64 160h320L416 32zm-29.7-11.9C199.1 8 210.9 0 224 0h192c13.1 0 24.9 8 29.7 20.1l64 160c3.9 9.9 2.7 21-3.2 29.8S490.6 224 480 224H160c-10.6 0-20.5-5.3-26.5-14.1s-7.2-20-3.2-29.8zM208 480h96V256h32v224h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="m209.1 26.1-64 160c-2 4.9-1.4 10.5 1.6 14.9s7.9 7 13.2 7H480c5.3 0 10.3-2.6 13.2-7s3.6-10 1.6-14.9l-64-160C428.4 20 422.5 16 416 16H224c-6.5 0-12.4 4-14.9 10.1m-14.9-5.9C199.1 8 210.9 0 224 0h192c13.1 0 24.9 8 29.7 20.1l64 160c3.9 9.9 2.7 21-3.2 29.8S490.6 224 480 224H160c-10.6 0-20.5-5.3-26.5-14.1s-7.2-20-3.2-29.8l64-160zM200 496h112V256h16v240h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H200c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M352 224h-64v224h64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M194.3 20.1C199.1 8 210.9 0 224 0h192c13.1 0 24.9 8 29.7 20.1l64 160c3.9 9.9 2.7 21-3.2 29.8S490.6 224 480 224H160c-10.6 0-20.5-5.3-26.5-14.1s-7.2-20-3.2-29.8zM224 448h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
