import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonThroughWindowIcon: React.FC<
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
                  d="M64 64h224v9.8c0 39-23.7 74-59.9 88.4C167.6 186.5 128 245 128 310.2V384H64zm288 0h224v320h-67.7l-3.7-4.5-75.2-90.2c-9.1-10.9-22.6-17.3-36.9-17.3h-71.1l-41-63.1c-.3-.5-.6-1-1-1.4 44.7-29 72.5-79 72.5-133.6v-9.8zm73 320h-45.8l42.7 64H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v352c0 26.5 21.5 48 48 48h260.2l33.2 49.8c9.8 14.7 29.7 18.7 44.4 8.9s18.7-29.7 8.9-44.4L310.5 336h74.6l40 48zm-159.5 0H192v-73.8c0-10.2 1.6-20.1 4.7-29.5zM192 128a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M304 48v18.4c0 46.1-28.9 87.3-72.2 103.1C169.5 192.1 128 251.3 128 317.6V400H48V48zm48 0h240v352h-81.7L499 385.4l-75.2-97.8c-7.6-9.8-19.3-15.6-31.7-15.6H333l-49.4-75.7c42.1-28.9 68.4-77.2 68.4-130zm97.7 352h-83.8l32 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v352c0 26.5 21.5 48 48 48h255.9l36.2 53.5c7.4 11 22.4 13.8 33.3 6.4s13.8-22.4 6.4-33.3l-82.6-122.1 46.4-32.5h44.6zm-178.3 0H176v-82.4c0-15.7 3.3-30.8 9.4-44.5zm-1.1-87.3-54.1-79.9c7.3-6 15.4-11 24.2-15l51.9 79.6-22 15.4zM192 128a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M48 32c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h80v-70.4c0-70.6 41.2-134.7 105.3-164.1 52.8-24.2 86.7-77 86.7-135.1V32zm304 14.4c0 63.8-33.6 122.3-87.4 154.7l63.5 86.9h64.5c9.3 0 18.2 4.1 24.3 11.2l91.2 106.4L517 416h75c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H352zM367 416h107.9l-82.3-96h-51.3l-54 40.5 93.5 126c5.3 7.1 3.8 17.1-3.3 22.4s-17.1 3.8-22.4-3.3L312.5 448H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h544c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H390.5zm-98.7-81.2 35.1-26.3-67.6-92.4c-13.2 7.4-25.1 16.7-35.2 27.5zm-87.8-64.6c-13.2 22.4-20.6 48.3-20.6 75.4V416h128.8L180.6 270.2zM168 136a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0"
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
                  d="M48 16h544c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32H411.2l10.7 16H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v352c0 26.5 21.5 48 48 48h260.2l33.2 49.8c9.8 14.7 29.7 18.7 44.4 8.9s18.7-29.7 8.9-44.4L321.1 352l-10.7-16h74.5l40 48h-45.7l10.7 16H568c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24v304c0 13.3 10.7 24 24 24h24v-16H72c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8h216v9.8c0 39-23.7 74-59.9 88.4-10.9 4.4-21.1 9.8-30.5 16.3-5.8 3.9-11.3 8.2-16.4 12.8C148 221 128 264 128 310.2V384c0 17.7 14.3 32 32 32s32-14.3 32-32v-73.8q0-3.6.3-7.2c.6-7.7 2.1-15.1 4.4-22.3l12.1 18.2 56.7 85.1H224v16h52.2l21.3 32H48c-17.7 0-32-14.3-32-32V48c0-17.7 14.3-32 32-32m256 48h32v9.8c0 49.1-25.1 94.1-65.3 120.2-3.7 2.4-6.2 6.2-7 10.5s.2 8.8 2.8 12.3c.2.2.3.5.5.7l41 63.1c2.9 4.5 8 7.3 13.4 7.3h71.1c9.5 0 18.5 4.2 24.6 11.5l70.4 84.6h-41.7l-48.5-58.2c-3-3.6-7.5-5.8-12.3-5.8h-74.6c-5.9 0-11.3 3.2-14.1 8.4s-2.5 11.5.8 16.4L381.3 471c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4L210 271.8c-3.4-5.1-9.4-7.8-15.5-7s-11.1 5.1-13 10.9c-3.6 10.9-5.5 22.5-5.5 34.4v73.8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-73.8c0-58.6 35.7-111.3 90.1-133 42.2-16.9 69.9-57.8 69.9-103.3zm48 0h216c4.4 0 8 3.6 8 8v304c0 4.4-3.6 8-8 8h-59.7l-3.7-4.5-75.2-90.2c-9.1-10.9-22.6-17.3-36.9-17.3h-71.1l-33.2-51.2-7.8-12c-.3-.5-.6-1-1-1.4 4.5-2.9 8.8-6 13-9.4 37-29.7 59.6-75 59.6-124.2zM171.9 178.2A52 52 0 1 0 124 85.8a52 52 0 1 0 47.9 92.4M148 96a36 36 0 1 1 0 72 36 36 0 1 1 0-72"
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
                  d="M352 73.8V64h-64v9.8c0 39-23.7 74-59.9 88.4C167.6 186.5 128 245 128 310.2V384c0 17.7 14.3 32 32 32s32-14.3 32-32v-73.8c0-10.2 1.6-20.1 4.7-29.5l144.7 217.1c9.8 14.7 29.7 18.7 44.4 8.9s18.7-29.7 8.9-44.4L310.5 336h74.6l40 48h83.3l-3.7-4.5-75.2-90.2c-9.1-10.9-22.6-17.3-36.9-17.3h-71.1l-41-63.1c-.3-.5-.6-1-1-1.4 44.7-29 72.5-79 72.5-133.6zM192 128a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 64v320h64c0 17.7 14.3 32 32 32s32-14.3 32-32h73.5l42.7 64H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h544c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H385.1l-42.7-64H576V64H64"
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
