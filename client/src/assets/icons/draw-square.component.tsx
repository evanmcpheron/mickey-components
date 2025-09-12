import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DrawSquareIcon: React.FC<
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
                  d="M96 151.4v209.2c9.7 5.6 17.8 13.7 23.4 23.4h209.2c5.6-9.7 13.7-17.8 23.4-23.4V151.4c-9.7-5.6-17.8-13.7-23.4-23.4H119.4c-5.6 9.7-13.7 17.8-23.4 23.4M119.4 448c-11.1 19.1-31.7 32-55.4 32-35.3 0-64-28.7-64-64 0-23.7 12.9-44.4 32-55.4V151.4C12.9 140.4 0 119.7 0 96c0-35.3 28.7-64 64-64 23.7 0 44.4 12.9 55.4 32h209.2c11.1-19.1 31.7-32 55.4-32 35.3 0 64 28.7 64 64 0 23.7-12.9 44.4-32 55.4v209.2c19.1 11.1 32 31.7 32 55.4 0 35.3-28.7 64-64 64-23.7 0-44.4-12.9-55.4-32z"
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
                  d="M64 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32m24 43.3v201.4c16 6.5 28.9 19.3 35.3 35.3h201.4c6.5-16 19.3-28.9 35.3-35.3V155.3c-16-6.5-28.9-19.3-35.3-35.3H123.3c-6.5 16-19.3 28.9-35.3 35.3M123.3 440c-9.5 23.5-32.5 40-59.3 40-35.3 0-64-28.7-64-64 0-26.9 16.5-49.9 40-59.3V155.3C16.5 145.9 0 122.9 0 96c0-35.3 28.7-64 64-64 26.9 0 49.9 16.5 59.3 40h201.4c9.5-23.5 32.5-40 59.3-40 35.3 0 64 28.7 64 64 0 26.9-16.5 49.9-40 59.3v201.4c23.5 9.5 40 32.5 40 59.3 0 35.3-28.7 64-64 64-26.9 0-49.9-16.5-59.3-40zM80 416a16 16 0 1 0-32 0 16 16 0 1 0 32 0m320 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m0-320a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M64 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96c29.8 0 54.9 20.4 62 48h196c7.1-27.6 32.2-48 62-48 35.3 0 64 28.7 64 64 0 29.8-20.4 54.9-48 62v196c27.6 7.1 48 32.2 48 62 0 35.3-28.7 64-64 64-29.8 0-54.9-20.4-62-48H126c-7.1 27.6-32.2 48-62 48-35.3 0-64-28.7-64-64 0-29.8 20.4-54.9 48-62V158c-27.6-7.1-48-32.2-48-62 0-35.3 28.7-64 64-64m62 368h196c5.8-22.5 23.5-40.2 46-46V158c-22.5-5.8-40.2-23.5-46-46H126c-5.8 22.5-23.5 40.2-46 46v196c22.5 5.8 40.2 23.5 46 46m-30 16a32 32 0 1 0-64 0 32 32 0 1 0 64 0m256 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0m32-288a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M48 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64m8 15.3v257.4c20.1 3.3 36 19.2 39.3 39.3h257.4c3.4-20.1 19.2-36 39.3-39.3V127.3c-20.1-3.4-36-19.2-39.3-39.3H95.3C92 108.1 76.1 124 56 127.3M95.3 440c-3.8 22.7-23.6 40-47.3 40-26.5 0-48-21.5-48-48 0-23.8 17.3-43.5 40-47.3V127.3C17.3 123.5 0 103.8 0 80c0-26.5 21.5-48 48-48 23.8 0 43.5 17.3 47.3 40h257.4c3.8-22.7 23.6-40 47.3-40 26.5 0 48 21.5 48 48 0 23.8-17.3 43.5-40 47.3v257.4c22.7 3.8 40 23.6 40 47.3 0 26.5-21.5 48-48 48-23.8 0-43.5-17.3-47.3-40zM80 432a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-352a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M328.6 64H119.4c5.4 9.4 8.6 20.3 8.6 32s-3.1 22.6-8.6 32h209.2c-5.4-9.4-8.6-20.3-8.6-32s3.1-22.6 8.6-32m23.4 87.4v209.2c9.4-5.4 20.3-8.6 32-8.6s22.6 3.1 32 8.6V151.4c-9.4 5.4-20.3 8.6-32 8.6s-22.6-3.1-32-8.6M64 160c-11.7 0-22.6-3.1-32-8.6v209.2c9.4-5.4 20.3-8.6 32-8.6s22.6 3.1 32 8.6V151.4c-9.4 5.4-20.3 8.6-32 8.6m264.6 288c-5.4-9.4-8.6-20.3-8.6-32s3.1-22.6 8.6-32H119.4c5.4 9.4 8.6 20.3 8.6 32s-3.1 22.6-8.6 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 96a64 64 0 1 1 128 0A64 64 0 1 1 0 96m64 256a64 64 0 1 1 0 128 64 64 0 1 1 0-128m320 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0-320a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
