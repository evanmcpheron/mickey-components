import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FileChartPieIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zm40 320h-88c-8.8 0-16-7.2-16-16v-88c0-8.8 7.2-16.1 16-14.9 53.5 7.1 95.9 49.5 103 103 1.2 8.8-6.1 16-14.9 16zm-136-90v106c0 8.8 7.2 16 16 16h106c10.1 0 17.7 9.3 14.1 18.8C278.9 415.9 235.2 448 184 448c-66.3 0-120-53.7-120-120 0-51.2 32.1-94.9 77.2-112.2 9.5-3.6 18.8 4 18.8 14.1z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M320 464c8.8 0 16-7.2 16-16V160h-80c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16zM0 64C0 28.7 28.7 0 64 0h165.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 176.1c8.7-1.5 16 5.8 16 14.7V320c0 8.8 7.2 16 16 16h64c8.9 0 16.3 7.4 14.6 16.1-.5 2.5-1 5-1.7 7.4-13.7 51.2-66.4 81.6-117.6 67.9S69.7 361 83.4 309.8c10-37.4 40.8-63.7 76.5-69.8zm63.9-30.8c40.3 6.7 72 38.5 78.8 78.8 1.5 8.7-5.8 15.9-14.7 15.9h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16.1 15.9-14.7"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M320 480H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256c0 17.7-14.3 32-32 32m-80-320c-8.8 0-16-7.2-16-16V32.5c2.8.7 5.4 2.1 7.4 4.2l115.9 115.9c2.1 2.1 3.5 4.6 4.2 7.4zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1zm112 224v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16 0-61.9-50.1-112-112-112-8.8 0-16 7.2-16 16m32 17.6c31.3 6.4 56 31.1 62.4 62.4H208zm-56-21c-46.3 13.8-80 56.7-80 107.4 0 61.9 50.1 112 112 112 50.7 0 93.6-33.7 107.4-80h-34c-12.3 28.3-40.5 48-73.3 48-44.2 0-80-35.8-80-80 0-32.8 19.7-61 48-73.3v-34z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 448V64c0-26.5 21.5-48 48-48h140.1c1.3 0 2.6.1 3.9.2V136c0 22.1 17.9 40 40 40h119.8c.2 1.3.2 2.6.2 3.9V448c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48m342.6-290.7q1.35 1.35 2.4 2.7H248c-13.3 0-24-10.7-24-24V22.9q1.5 1.2 2.7 2.4zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V179.9c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1zm128 216v96c0 4.4 3.6 8 8 8h96c4.4 0 8-3.6 8-8 0-57.4-46.6-104-104-104-4.4 0-8 3.6-8 8m16 8.4c42.2 3.8 75.8 37.4 79.6 79.6H208zm-48 8.9C110.2 240.9 72 284 72 336c0 57.4 46.6 104 104 104 52 0 95.1-38.2 102.8-88h-16.2c-7.5 41-43.4 72-86.6 72-48.6 0-88-39.4-88-88 0-43.1 31-79 72-86.5v-16.3z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm296 256c8.8 0 16.1-7.2 14.9-16-7.1-53.5-49.5-95.9-103-103-8.8-1.2-16 6.1-16 14.9v88c0 8.8 7.2 16 16 16h88zm-136-90c0-10.1-9.3-17.7-18.8-14.1C96.1 233.1 64 276.8 64 328c0 66.3 53.7 120 120 120 51.2 0 94.9-32.1 112.1-77.2 3.6-9.5-4-18.8-14.1-18.8H176c-8.8 0-16-7.2-16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160H256c-17.7 0-32-14.3-32-32V0zm-242.8 55.9c9.5-3.6 18.8 4 18.8 14.1v106c0 8.8 7.2 16 16 16h106c10.1 0 17.7 9.3 14.1 18.8C278.9 415.9 235.2 448 184 448c-66.3 0-120-53.7-120-120 0-51.2 32.1-94.9 77.2-112.1"
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
