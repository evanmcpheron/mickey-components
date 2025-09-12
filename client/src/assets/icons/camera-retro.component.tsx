import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CameraRetroIcon: React.FC<
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
                  d="M220.6 121.2 271.1 96H448v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64v-64h128c9.9 0 19.7-2.3 28.6-6.8M0 128v288c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64h-32V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16v16C28.7 64 0 92.7 0 128m168 176a88 88 0 1 1 176 0 88 88 0 1 1-176 0"
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
                  d="M192 112H64c-8.8 0-16 7.2-16 16v64h108.1c23.5-29.3 59.5-48 99.9-48s76.5 18.7 99.9 48H464V96c0-8.8-7.2-16-16-16H271.1c-2.5 0-4.9.6-7.2 1.7l-50.5 25.2c-6.7 3.3-14 5.1-21.5 5.1zM48 240v176c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V240h-84c2.6 10.2 4 21 4 32 0 70.7-57.3 128-128 128s-128-57.3-128-128c0-11 1.4-21.8 4-32zM0 416V128c0-35.3 28.7-64 64-64V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v16h32l50.5-25.2c8.9-4.4 18.7-6.8 28.6-6.8H448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m336-144a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
                  d="M192 112H64c-17.7 0-32 14.3-32 32v80h113.1c22.1-38.3 63.5-64 110.9-64s88.7 25.7 110.9 64H480V96c0-17.7-14.3-32-32-32H277.3c-6.9 0-13.7 2.2-19.2 6.4l-46.9 35.2c-5.5 4.2-12.3 6.4-19.2 6.4M32 256v160c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V256H380c2.6 10.2 4 21 4 32 0 70.7-57.3 128-128 128s-128-57.3-128-128c0-11 1.4-21.8 4-32zM0 416V144c0-35.3 28.7-64 64-64h128l46.9-35.2C250 36.5 263.5 32 277.3 32H448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m352-128a96 96 0 1 0-192 0 96 96 0 1 0 192 0M64 48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16"
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
                  d="M192 96H64c-26.5 0-48 21.5-48 48v88h130c18.5-42.4 60.8-72 110-72s91.5 29.6 110 72h130V96c0-26.5-21.5-48-48-48H277.3c-10.4 0-20.5 3.4-28.8 9.6l-46.9 35.2c-2.8 2.1-6.1 3.2-9.6 3.2M16 248v168c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V248H371.7c2.8 10.2 4.3 20.9 4.3 32 0 66.3-53.7 120-120 120s-120-53.7-120-120c0-11.1 1.5-21.8 4.3-32zM0 416V144c0-35.3 28.7-64 64-64h128l46.9-35.2C250 36.5 263.5 32 277.3 32H448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m360-136a104 104 0 1 0-208 0 104 104 0 1 0 208 0M64 40c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8"
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
                  d="M0 128v32h512V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H64C28.7 64 0 92.7 0 128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v16H64zM0 416V160h512v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m256-16a96 96 0 1 0 0-192 96 96 0 1 0 0 192"
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
