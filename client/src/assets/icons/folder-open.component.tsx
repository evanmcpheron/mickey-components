import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FolderOpenIcon: React.FC<
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
                  d="M88.7 223.8 0 375.8V96c0-35.3 28.7-64 64-64h117.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1c5.8-9.9 16.3-15.9 27.7-15.9h400c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2.1-32.1l112-192z"
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
                  d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1.1-32.1s-16.2-16-27.7-16H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16h117.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48v-32c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7l-26.5-26.6c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320"
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
                  d="M448 160v32h32v-32c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7l-26.5-26.6c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h400c19.6 0 37.3-11.9 44.6-30.2l64-160c5.9-14.8 4.1-31.5-4.8-44.7S543.9 224 528 224H128c-19.6 0-37.3 11.9-44.6 30.2L32 382.8V96c0-17.7 14.3-32 32-32h117.5c8.5 0 16.6 3.4 22.6 9.4l22.6-22.6-22.6 22.6 26.5 26.5c18 18 42.4 28.1 67.9 28.1H416c17.7 0 32 14.3 32 32m-64 288H64c-5.3 0-10.3-2.6-13.2-7s-3.6-10-1.6-14.9l64-160c2.4-6.1 8.3-10.1 14.9-10.1H528c5.3 0 10.3 2.6 13.2 7s3.6 10 1.6 14.9l-64 160c-2.4 6.1-8.3 10.1-14.8 10.1z"
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
                  d="M64 464c-10.6 0-20.5-5.3-26.5-14.1s-7.2-20-3.2-29.8l64-160C103.1 248 114.9 240 128 240h400c10.6 0 20.5 5.3 26.5 14.1s7.2 20 3.2 29.8l-64 160C488.9 456 477.1 464 464 464H64m320 16h80c19.6 0 37.3-11.9 44.6-30.2l64-160c5.9-14.8 4.1-31.5-4.8-44.7S543.9 224 528 224H128c-19.6 0-37.3 11.9-44.6 30.2l-64 160c-1.3 3.2-2.2 6.5-2.8 9.8-.4-2.6-.7-5.3-.7-8V96c0-26.5 21.5-48 48-48h117.6c12.7 0 24.9 5.1 33.9 14.1l26.5 26.5c15 15 35.4 23.4 56.6 23.4H416c26.5 0 48 21.5 48 48v32h16v-32c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7l-26.5-26.6c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64z"
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
                  d="m461.4 461.1 16.2-27.9c-3 10.7-8.7 20.2-16.2 27.9M480 224H144c-11.4 0-21.9 6-27.6 15.9l-112 192c-5.8 9.9-5.8 22.1-.1 32.1 1 1.7 2 3.2 3.2 4.6C2.8 463 0 455.8 0 448V96c0-35.3 28.7-64 64-64h117.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v64zM11.1 472.2c5.7 4.9 13.1 7.8 20.9 7.8-8 0-15.3-2.9-20.9-7.8"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 224c-11.4 0-21.9 6-27.6 15.9l-112 192c-5.8 9.9-5.8 22.1-.1 32.1s16.2 16 27.7 16h400c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1.1-32.1s-16.2-16-27.7-16z"
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
