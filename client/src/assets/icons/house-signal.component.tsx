import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HouseSignalIcon: React.FC<
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
                  d="M357.7 8.5c-12.3-11.3-31.2-11.3-43.4 0l-208 192c-9.4 8.6-12.7 22-8.5 34 87.1 25.3 155.6 94.2 180.3 181.6H464c26.5 0 48-21.5 48-48V256h32c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8.1-35.2zM288 208c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16zM24 256c-13.3 0-24 10.7-24 24s10.7 24 24 24c101.6 0 184 82.4 184 184 0 13.3 10.7 24 24 24s24-10.7 24-24c0-128.1-103.9-232-232-232m8 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64M0 376c0 13.3 10.7 24 24 24 48.6 0 88 39.4 88 88 0 13.3 10.7 24 24 24s24-10.7 24-24c0-75.1-60.9-136-136-136-13.3 0-24 10.7-24 24"
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
                  d="M320.8 5.4c8.8-7.2 21.5-7.2 30.3 0l216 176c10.3 8.4 11.8 23.5 3.4 33.8s-23.5 11.8-33.8 3.4L512 198.4V360c0 30.9-25.1 56-56 56H278.1c-4.7-16.7-11.1-32.8-18.8-48H456c4.4 0 8-3.6 8-8V159.3L336 55 208 159.3v139.4c-14.5-14.1-30.6-26.5-48-37v-63.3l-24.8 20.2c-10.3 8.4-25.4 6.8-33.8-3.4s-6.8-25.4 3.4-33.8zM312 192h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24M24 256c128.1 0 232 103.9 232 232 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184-13.3 0-24-10.7-24-24s10.7-24 24-24m8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64M0 376c0-13.3 10.7-24 24-24 75.1 0 136 60.9 136 136 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88-13.3 0-24-10.7-24-24"
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
                  d="M325.6 3.9c6-5.1 14.8-5.1 20.8 0l224 192c6.7 5.8 7.5 15.9 1.7 22.6s-15.8 7.5-22.6 1.7L512 187.9V352c0 35.3-28.7 64-64 64H278.1c-3.1-11-6.9-21.7-11.3-32H448c17.7 0 32-14.3 32-32V160.5L336 37.1 192 160.5v123.8c-10.1-8.3-20.8-15.9-32-22.7v-73.7l-37.6 32.2c-6.7 5.8-16.8 5-22.6-1.7s-5-16.8 1.7-22.6l224-192zM304 176h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m0 32v64h64v-64zM16 256c132.5 0 240 107.5 240 240 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-114.9-93.1-208-208-208-8.8 0-16-7.2-16-16s7.2-16 16-16m16 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64M0 368c0-8.8 7.2-16 16-16 79.5 0 144 64.5 144 144 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9-50.1-112-112-112-8.8 0-16-7.2-16-16"
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
                  d="M330.8 1.9c3-2.6 7.4-2.6 10.4 0l232 200c3.3 2.9 3.7 7.9.8 11.3s-7.9 3.7-11.3.8L512 170.3V360c0 30.9-25.1 56-56 56H278.1c-1.5-5.4-3.2-10.7-5.1-16h183c22.1 0 40-17.9 40-40V156.5L336 18.6 176 156.5v115.6c-5.2-3.7-10.5-7.2-16-10.4v-91.4l-50.8 43.8c-3.3 2.9-8.4 2.5-11.3-.8s-2.5-8.4.8-11.3l232-200zM296 176h80c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24m-8 24v80c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8M8 256c137 0 248 111 248 248 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-128.1-103.9-232-232-232-4.4 0-8-3.6-8-8s3.6-8 8-8m40 224a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m0-120c0-4.4 3.6-8 8-8 83.9 0 152 68.1 152 152 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-75.1-60.9-136-136-136-4.4 0-8-3.6-8-8"
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
                  d="M357.7 8.5c-12.3-11.3-31.2-11.3-43.4 0l-208 192c-9.4 8.6-12.7 22-8.5 34 18.3 5.3 35.9 12.6 52.3 21.6h9.9v5.7c56.8 34.2 99.6 89.1 118.1 154.3H464c26.5 0 48-21.5 48-48V256h32c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8.1-35.2zM288 208c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 280c0-13.3 10.7-24 24-24 128.1 0 232 103.9 232 232 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184-13.3 0-24-10.7-24-24m0 200a32 32 0 1 1 64 0 32 32 0 1 1-64 0m24-128c75.1 0 136 60.9 136 136 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
