import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FloppyDiskPenIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h194.5l14-55.9c2.8-11.3 8.6-21.5 16.8-29.7L448 235.6v-62.3c0-17-6.7-33.3-18.7-45.3L352 50.7c-12-12-28.3-18.7-45.3-18.7zm0 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm160 160a64 64 0 1 1 0 128 64 64 0 1 1 0-128m325.8-52.2c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6zM311.9 417.1c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3-71-71z"
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
                  d="M48 96v320c0 8.8 7.2 16 16 16h206.5l-12 48H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h245.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9-74.6-74.4-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16m381.3 29.3c12 12 18.7 28.3 18.7 45.3v65.1l-48 48V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9zM128 80v80h144V80zm32 240a64 64 0 1 1 128 0 64 64 0 1 1-128 0m389.8-84.2 14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0M311.9 417.1l129.2-129.2 71 71-129.2 129.2c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9"
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
                  d="M32 96v320c0 17.7 14.3 32 32 32h202.3l-8 32H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h245.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3v49.7l-32 32v-81.7c0-8.5-3.4-16.6-9.4-22.6l-74.5-74.5c-3.4-3.4-7.6-6-12.1-7.6V160c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V64c-17.7 0-32 14.3-32 32m64-32v96h192V64zm80 256a48 48 0 1 0 96 0 48 48 0 1 0-96 0m48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160m294.8-135.9c-6.2-6.2-16.4-6.2-22.6 0L471.3 289l40 40 24.8-24.8c6.2-6.2 6.2-16.4 0-22.6l-17.4-17.4zM342.5 417.8c-2.1 2.1-3.5 4.6-4.2 7.4l-12.3 49 49-12.2c2.8-.7 5.4-2.2 7.4-4.2l106.3-106.2-40-40zm131-176.3c18.7-18.7 49.1-18.7 67.9 0l17.4 17.4c18.7 18.7 18.7 49.1 0 67.9L405.1 480.5c-6.2 6.2-13.9 10.5-22.3 12.6l-74.9 18.7c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l18.7-74.9c2.1-8.4 6.5-16.1 12.6-22.3z"
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
                  d="M16 96v320c0 26.5 21.5 48 48 48h198.2l-4 16H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h245.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3v64.8l-16 16v-80.8c0-12.7-5.1-24.9-14.1-33.9l-74.5-74.5c-6.4-6.5-14.6-11-23.4-12.9V160c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V48c-26.5 0-48 21.5-48 48m64-48v112c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V48zm72 280a72 72 0 1 0 144 0 72 72 0 1 0-144 0m72 88a88 88 0 1 1 0-176 88 88 0 1 1 0 176m68.7 91.3c-4-4-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9l181.3-181.3c15.6-15.6 40.9-15.6 56.6 0l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6L382.9 488.1c-4.1 4.1-9.2 7-14.9 8.4l-3.4-13.6 3.4 13.6-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2m15.7-28.9L304 496l17.6-4.4 42.5-10.6c2.8-.7 5.4-2.2 7.4-4.2l142.9-142.9-48.3-48.3-142.9 142.8c-2 2-3.5 4.6-4.2 7.4l-10.6 42.5zm244.4-182.9c9.4-9.4 9.4-24.6 0-33.9l-14.4-14.4c-9.4-9.4-24.6-9.4-33.9 0l-27.1 27.1 48.3 48.3z"
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
                  d="M0 96c0-35.3 28.7-64 64-64h242.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3v62.4L289.3 394.3c-8.2 8.2-14 18.5-16.8 29.7l-14 55.9H64c-35.3 0-64-28.7-64-64zm96 0c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm192 256a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="m493.2 235.8-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4c-15.6-15.6-40.9-15.6-56.6 0m-52 52L311.9 417.1c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3-71-71z"
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
