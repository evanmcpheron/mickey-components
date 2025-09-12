import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FileHeartIcon: React.FC<
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
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM80 301.3c0-33.8 27.4-61.3 61.3-61.3 16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.9-82.7C86.5 333.1 80 317.5 80 301.3"
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
                  d="M48 448V64c0-8.8 7.2-16 16-16h160v80c0 17.7 14.3 32 32 32h80v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C262.7 6.7 246.5 0 229.5 0zm29.7 306.8c0 14.4 5.8 28.3 16.2 38.4l70.9 69c6.2 6 16.1 6 22.3 0l70.9-69c10.4-10.1 16.2-23.9 16.2-38.4 0-29.5-23.9-53.5-53.5-53.5h-1.5c-14.3 0-28.1 5.6-38.4 15.6l-4.9 4.8-4.9-4.8c-10.3-10-24-15.6-38.4-15.6h-1.5c-29.5 0-53.5 23.9-53.5 53.5z"
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
                  d="M320 480H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256c0 17.7-14.3 32-32 32m-80-320c-8.8 0-16-7.2-16-16V32.5c2.8.7 5.4 2.1 7.4 4.2l115.9 115.9c2.1 2.1 3.5 4.6 4.2 7.4zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1zm61.7 306.8c0-11.9 9.6-21.5 21.5-21.5h1.5c6 0 11.7 2.3 16 6.5l16.1 15.6c6.2 6 16.1 6 22.3 0l16.1-15.6c4.3-4.2 10.1-6.5 16-6.5h1.5c11.9 0 21.5 9.6 21.5 21.5 0 5.8-2.3 11.4-6.5 15.4L192 380.4l-59.8-58.1c-4.2-4-6.5-9.6-6.5-15.4zm21.5-53.5c-29.5 0-53.5 23.9-53.5 53.5 0 14.4 5.8 28.3 16.2 38.4l70.9 69c6.2 6 16.1 6 22.3 0l70.9-69c10.4-10.1 16.2-23.9 16.2-38.4 0-29.5-23.9-53.5-53.5-53.5h-1.5c-14.3 0-28.1 5.6-38.4 15.6l-4.9 4.8-4.9-4.8c-10.3-10-24-15.6-38.4-15.6h-1.5z"
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
                  d="M16 448V64c0-26.5 21.5-48 48-48h140.1c1.3 0 2.6.1 3.9.2V136c0 22.1 17.9 40 40 40h119.8c.2 1.3.2 2.6.2 3.9V448c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48m342.6-290.7q1.35 1.35 2.4 2.7H248c-13.3 0-24-10.7-24-24V22.9q1.5 1.2 2.7 2.4zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V179.9c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1zm44.6 304.6c0-20.2 16.4-36.6 36.6-36.6h.6c9.7 0 19 3.8 26 10.5l14.6 14.2c3.1 3 8 3 11.2 0l14.6-14.2c7-6.8 16.3-10.5 26-10.5h.6c20.2 0 36.6 16.4 36.6 36.6 0 9.3-3.6 18.3-10 25.1l-67.6 71.7c-1.5 1.6-3.6 2.5-5.8 2.5s-4.3-.9-5.8-2.5l-67.6-71.7c-6.4-6.8-10-15.8-10-25.1m36.6-52.6c-29.1 0-52.6 23.6-52.6 52.6 0 13.4 5.1 26.3 14.3 36.1l67.6 71.7c4.5 4.8 10.9 7.5 17.5 7.5s12.9-2.7 17.5-7.5l67.6-71.7c9.2-9.8 14.3-22.7 14.3-36.1 0-29.1-23.6-52.6-52.6-52.6h-.6c-13.9 0-27.2 5.4-37.1 15.1l-9 8.8-9-8.8c-9.9-9.7-23.3-15.1-37.1-15.1h-.6z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm80 237.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3 0-33.8-27.4-61.3-61.3-61.3-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9-33.7 0-61.1 27.4-61.1 61.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160H256c-17.7 0-32-14.3-32-32V0zM80 301.3c0-33.8 27.4-61.3 61.3-61.3 16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.9-82.7C86.5 333.1 80 317.5 80 301.3"
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
