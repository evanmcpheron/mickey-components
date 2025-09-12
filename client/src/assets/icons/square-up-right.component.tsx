import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareUpRightIcon: React.FC<
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
                  d="M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm-64 281.4V176c0-8.8-7.2-16-16-16H166.6c-12.5 0-22.6 10.1-22.6 22.6 0 6 2.4 11.8 6.6 16L184 232l-66.3 66.3c-3.7 3.7-5.7 8.6-5.7 13.7s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7L248 296l33.4 33.4c4.2 4.2 10 6.6 16 6.6 12.5 0 22.6-10.1 22.6-22.6"
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
                  d="M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zm64 16c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zM320 313.4V176c0-8.8-7.2-16-16-16H166.6c-12.5 0-22.6 10.1-22.6 22.6 0 6 2.4 11.8 6.6 16L184 232l-66.3 66.3c-3.7 3.7-5.7 8.6-5.7 13.7s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7L248 296l33.4 33.4c4.2 4.2 10 6.6 16 6.6 12.5 0 22.6-10.1 22.6-22.6"
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
                  d="M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm64 32c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zm-144 88v113.4c0 3.7-3 6.6-6.6 6.6-1.8 0-3.4-.7-4.7-1.9l-25.4-25.4c-6.2-6.2-16.4-6.2-22.6 0l-59.1 59.1c-3.6 3.6-9 4.9-13.9 3.3-2-.7-3.8-1.8-5.3-3.3l-22.1-22.1c-1.5-1.5-2.6-3.3-3.3-5.3-1.6-4.9-.4-10.3 3.3-13.9l59.1-59.1c6.2-6.2 6.2-16.4 0-22.6L178 187.4c-1.2-1.2-1.9-2.9-1.9-4.7 0-3.7 3-6.6 6.6-6.6H296c4.4 0 8 3.6 8 8zm-8-40H182.6c-21.3 0-38.6 17.3-38.6 38.6 0 10.2 4.1 20.1 11.3 27.3l14.1 14.1-47.7 47.7c-12.2 12.2-16.5 30.3-11 46.7 2.2 6.7 6 12.8 11 17.8l22.1 22.1c5 5 11.1 8.8 17.8 11 16.4 5.5 34.5 1.2 46.7-11l47.7-47.7 14.1 14.1c7.2 7.2 17.1 11.3 27.3 11.3 21.3 0 38.6-17.3 38.6-38.6V184c0-22.1-17.9-40-40-40"
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
                  d="M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zm64 48c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zm-128 72v127c0 5-4 9-9 9-2.4 0-4.7-.9-6.3-2.6l-35-35c-3.1-3.1-8.2-3.1-11.3 0L176 348.7c-2.1 2.1-5 3.3-8 3.3s-5.9-1.2-8-3.3L131.3 320c-2.1-2.1-3.3-5-3.3-8s1.2-5.9 3.3-8l82.3-82.3c3.1-3.1 3.1-8.2 0-11.3l-35-35c-1.7-1.7-2.6-4-2.6-6.3 0-5 4-9 9-9h127c4.4 0 8 3.6 8 8zm-8-24H185c-13.8 0-25 11.2-25 25 0 6.6 2.6 13 7.3 17.7l29.4 29.3-76.7 76.7c-5.1 5.1-8 12.1-8 19.3s2.9 14.2 8 19.3l28.7 28.7c5.1 5.1 12.1 8 19.3 8s14.2-2.9 19.3-8l76.7-76.7 29.4 29.4c4.7 4.7 11 7.3 17.7 7.3 13.8 0 25-11.2 25-25V168c0-13.3-10.7-24-24-24z"
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
                  d="M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm-64 281.4V176c0-8.8-7.2-16-16-16H166.6c-12.5 0-22.6 10.1-22.6 22.6 0 6 2.4 11.8 6.6 16L184 232l-66.3 66.3c-3.7 3.7-5.7 8.6-5.7 13.7s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7L248 296l33.4 33.4c4.2 4.2 10 6.6 16 6.6 12.5 0 22.6-10.1 22.6-22.6"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 176v137.4c0 12.5-10.1 22.6-22.6 22.6-6 0-11.8-2.4-16-6.6L248 296l-66.3 66.3c-3.7 3.7-8.6 5.7-13.7 5.7s-10-2-13.7-5.7l-36.7-36.7c-3.6-3.6-5.6-8.5-5.6-13.6s2-10 5.7-13.7L184 232l-33.4-33.4c-4.2-4.2-6.6-10-6.6-16 0-12.5 10.1-22.6 22.6-22.6H304c8.8 0 16 7.2 16 16"
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
