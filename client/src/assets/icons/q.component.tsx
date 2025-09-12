import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const QIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 256c0 88.4 71.6 160 160 160 28.9 0 56-7.7 79.4-21.1l-72-86.4c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l70.9 85.1c20.4-26.8 32.5-60.3 32.5-96.6 0-88.4-71.6-160-160-160S64 167.6 64 256m280.9 188.6C310 467 268.5 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 56.1-20.6 107.4-54.7 146.7l47.3 56.8c11.3 13.6 9.5 33.8-4.1 45.1s-33.8 9.5-45.1-4.1l-46.6-55.9z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 256c0 97.2 78.8 176 176 176 35.7 0 69-10.6 96.7-28.9l-91-107.6c-8.6-10.1-7.3-25.3 2.8-33.8s25.3-7.3 33.8 2.8l90.5 107C383.7 340.6 400 300.2 400 256c0-97.2-78.8-176-176-176S48 158.8 48 256m303.9 183.9C315.6 465.2 271.5 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 58.9-22.7 112.5-59.9 152.4l54.2 64.1c8.6 10.1 7.3 25.3-2.8 33.8s-25.3 7.3-33.8-2.8z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 256c0 106 86 192 192 192 42.6 0 81.9-13.9 113.8-37.3L227.9 282.4c-5.8-6.7-5-16.8 1.7-22.6s16.8-5 22.6 1.7l109.7 128C395.4 355 416 307.9 416 256c0-106-86-192-192-192S32 150 32 256m326.7 179c-37.5 28.2-84.1 45-134.7 45C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 61.7-24.9 117.5-65.2 158l61.4 71.6c5.8 6.7 5 16.8-1.7 22.6s-16.8 5-22.6-1.7z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 256c0 114.9 93.1 208 208 208 49.5 0 95-17.3 130.7-46.2L226 269.2c-2.9-3.3-2.5-8.4.8-11.3s8.4-2.5 11.3.8l128.7 148.6C406.9 369.4 432 315.6 432 256c0-114.9-93.1-208-208-208S16 141.1 16 256m349.2 173.9C326.7 461.2 277.5 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 64.4-27.2 122.5-70.8 163.4l68.8 79.4c2.9 3.3 2.5 8.4-.8 11.3s-8.4 2.5-11.3-.8L365.1 430z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 256c0 88.4 71.6 160 160 160 28.9 0 56-7.7 79.4-21.1l-72-86.4c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l70.9 85.1c20.4-26.8 32.5-60.3 32.5-96.6 0-88.4-71.6-160-160-160S64 167.6 64 256m280.9 188.6C310 467 268.5 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 56.1-20.6 107.4-54.7 146.7l47.3 56.8c11.3 13.6 9.5 33.8-4.1 45.1s-33.8 9.5-45.1-4.1l-46.6-55.9z"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
