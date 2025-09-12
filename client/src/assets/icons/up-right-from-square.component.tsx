import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UpRightFromSquareIcon: React.FC<
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
                  d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M304 41c0 10.9 4.3 21.3 12 29l46.1 46L207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l155-155 46.2 46.1c7.7 7.7 18.1 12 29 12 22.6 0 41-18.3 41-41V40c0-22.1-17.9-40-40-40H345c-22.6 0-41 18.3-41 41m57.9 7H464v102.1zM72 32C32.2 32 0 64.2 0 104v336c0 39.8 32.2 72 72 72h336c39.8 0 72-32.2 72-72V312c0-13.3-10.7-24-24-24s-24 10.7-24 24v128c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h128c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M320 33c0-18.2 14.8-33 33-33h127c17.7 0 32 14.3 32 32v127c0 18.2-14.8 33-33 33-8.7 0-17.1-3.5-23.3-9.7L404 130.6 235.3 299.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L381.4 108l-51.7-51.7c-6.2-6.2-9.7-14.6-9.7-23.3m33-1c-.5 0-1 .4-1 1 0 .3.1.5.3.7l126 126c.2.2.4.3.7.3.5 0 1-.4 1-1V32zM0 96c0-35.3 28.7-64 64-64h144c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V304c0-8.8 7.2-16 16-16s16 7.2 16 16v144c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
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
                  d="M345 16h127c13.3 0 24 10.7 24 24v127c0 13.8-11.2 25-25 25-6.6 0-13-2.6-17.7-7.3L396 127.3 213.7 309.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L384.7 116l-57.4-57.4c-4.7-4.7-7.3-11-7.3-17.7 0-13.8 11.2-25 25-25zm-9 25c0 2.4.9 4.7 2.6 6.3l126.1 126.1c1.7 1.7 4 2.6 6.3 2.6 5 0 9-4 9-9V40c0-4.4-3.6-8-8-8H345c-5 0-9 4-9 9M0 88c0-30.9 25.1-56 56-56h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-22.1 0-40 17.9-40 40v368c0 22.1 17.9 40 40 40h368c22.1 0 40-17.9 40-40V312c0-4.4 3.6-8 8-8s8 3.6 8 8v144c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56z"
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
                  d="M0 112c0-44.2 35.8-80 80-80h112c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V320c0-17.7 14.3-32 32-32s32 14.3 32 32v112c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M322.4 19.8C327.4 7.8 339.1 0 352 0h128c17.7 0 32 14.3 32 32v128c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9L416 141.3 246.6 310.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L370.7 96l-41.3-41.4c-9.2-9.2-11.9-22.9-6.9-34.9z"
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
