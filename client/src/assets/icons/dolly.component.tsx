import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DollyIcon: React.FC<
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
                  d="M0 32C0 14.3 14.3 0 32 0h72.9c27.5 0 52 17.6 60.7 43.8L257.7 320c30.1.5 56.8 14.9 74 37l202.1-67.4c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5L352 417.7c-.9 52.2-43.5 94.3-96 94.3-53 0-96-43-96-96 0-30.8 14.5-58.2 37-75.8L104.9 64H32C14.3 64 0 49.7 0 32m244.8 102.5c-5.5-16.8 3.7-34.9 20.5-40.3L311 79.4l19.8 60.9 60.9-19.8-19.9-60.9 45.7-14.8c16.8-5.5 34.9 3.7 40.3 20.5l49.4 152.2c5.5 16.8-3.7 34.9-20.5 40.3l-152.2 49.4c-16.8 5.5-34.9-3.7-40.3-20.5z"
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
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h80.8c3.5 0 6.5 2.2 7.6 5.5l91.9 281.6C177.7 352.1 160 382 160 416c0 53 43 96 96 96s96-43 96-96c0-2.8-.1-5.5-.3-8.2L560 334.6c12.5-4.4 19.1-18.1 14.7-30.6s-18.1-19.1-30.6-14.7l-208.3 73.2C318.5 336.9 289.2 320 256 320c-2 0-4 .1-6 .2L158 38.6C150.5 15.6 129 0 104.8 0zm232 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96m201.4-250.7c-10.6-28.7-42.2-43.7-71.1-33.5l-161.4 56.7 14.9 45.6 57.5-20.2 24.1 66.3c4.5 12.5 18.3 18.9 30.8 14.4s18.9-18.3 14.4-30.8l-24-65.8 59.6-20.9c4.1-1.4 8.7.7 10.2 4.8L467 282.5l45.3-15.9z"
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
                  d="M24 0C15.2 0 8 7.2 8 16s7.2 16 16 16h64.9c6.9 0 13 4.4 15.2 10.9l107.5 322.5C190.1 379.8 176 404.2 176 432c0 44.2 35.8 80 80 80 43 0 78-33.9 79.9-76.4L565.5 351c8.3-3.1 12.5-12.3 9.5-20.5s-12.3-12.5-20.5-9.5l-223.8 82.4C319.2 373.3 290.1 352 256 352c-5 0-9.9.5-14.7 1.3L134.5 32.8C127.9 13.2 109.6 0 88.9 0zm232 384a48 48 0 1 1 0 96 48 48 0 1 1 0-96m96.8-201.1c3 8.3 12.2 12.6 20.5 9.6s12.6-12.2 9.6-20.5l-19.2-52.6 60.1-21.9 54.7 150.4-150.3 54.6-54.7-150.3 60.1-21.9zm-109.4-19.8 54.7 150.4c6 16.6 24.4 25.2 41 19.1l150.4-54.7c16.6-6 25.2-24.4 19.1-41L453.9 86.5c-6-16.6-24.4-25.2-41-19.1l-150.4 54.7c-16.6 6-25.2 24.4-19.1 41"
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
                  d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h88.5c10.5 0 19.7 6.8 22.9 16.8l112.1 356.1c-23.2 9.6-39.5 32.4-39.5 59.1 0 35.3 28.7 64 64 64s64-28.7 64-64c0-6.4-.9-12.6-2.7-18.5l253.1-77.9c4.2-1.3 6.6-5.8 5.3-10s-5.8-6.6-10-5.3l-255 78.5C299.5 396.3 279.2 384 256 384q-4.65 0-9 .6L134.7 28C129.4 11.3 114 0 96.5 0zm248 400a48 48 0 1 1 0 96 48 48 0 1 1 0-96m100.7-235.9c1.3 4.2 5.8 6.6 10 5.3s6.6-5.8 5.3-10l-16.4-53.5 68.9-21.1c8.5-2.6 17.4 2.2 20 10.6l46.8 153c2.6 8.5-2.2 17.4-10.6 20l-153 46.8c-8.5 2.6-17.4-2.2-20-10.6l-46.8-153c-2.6-8.5 2.2-17.4 10.6-20l68.9-21 16.4 53.5zm-111.1-7.8 46.8 153c5.2 16.9 23.1 26.4 40 21.2l153-46.8c16.9-5.2 26.4-23.1 21.2-40l-46.8-153c-5.2-16.9-23.1-26.4-40-21.2l-153 46.8c-16.9 5.2-26.4 23.1-21.2 40"
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
                  d="M244.8 134.5c-5.5-16.8 3.7-34.9 20.5-40.3L311 79.4l19.8 60.9 60.9-19.8-19.9-60.9 45.7-14.8c16.8-5.5 34.9 3.7 40.3 20.5l49.4 152.2c5.5 16.8-3.7 34.9-20.5 40.3l-152.2 49.4c-16.8 5.5-34.9-3.7-40.3-20.5zM256 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 32C0 14.3 14.3 0 32 0h72.9c27.5 0 52 17.6 60.7 43.8L257.7 320H256c-22.2 0-42.7 7.6-59 20.2L104.9 64H32C14.3 64 0 49.7 0 32m352 384c0-22.2-7.6-42.7-20.2-59l202.1-67.4c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5L352 417.7zm19.8-356.4 19.8 60.9-60.9 19.8L311 79.4l60.9-19.8z"
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
