import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserDoctorIcon: React.FC<
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
                  d="M224 256a128 128 0 1 0 0-256 128 128 0 1 0 0 256m-96 55.2C54 332.9 0 401.3 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-40c0-29.8 20.4-54.9 48-62v-57.1q-9-.9-18.3-.9h-91.4q-9.3 0-18.3.9v65.4c23.1 6.9 40 28.3 40 53.7 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M224 48a80 80 0 1 1 0 160 80 80 0 1 1 0-160M96 128a128 128 0 1 0 256 0 128 128 0 1 0-256 0m64 225c5.2-.7 10.6-1 16-1h96c5.4 0 10.8.3 16 1v49c-27.6 7.1-48 32.2-48 62v32c0 8.8 7.2 16 16 16h24c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8v-16c0-17.7 14.3-32 32-32s32 14.3 32 32v16h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h24c8.8 0 16-7.2 16-16v-32c0-29.8-20.4-54.9-48-62v-40.7c46.9 19 80 65 80 118.7v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-97.2-78.8-176-176-176h-96C78.8 304 0 382.8 0 480v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-53.7 33.1-99.7 80-118.7v41c-23.1 6.9-40 28.3-40 53.7 0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7zm-16 79a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192M96 128a128 128 0 1 0 256 0 128 128 0 1 0-256 0m48 288a16 16 0 1 1 32 0 16 16 0 1 1-32 0m32-45.3V336h94.8c5.8 0 11.5.3 17.2 1v33.3c-23.1 6.9-40 28.3-40 53.7v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c-8.8 0-16 7.2-16 16s7.2 16 16 16h16c8.8 0 16-7.2 16-16v-24c0-25.4-16.9-46.8-40-53.7v-25.8c55.6 20 95.5 73 96 135.5H32c.5-68.2 48.2-125.3 112-140.2v30.9c-18.6 6.6-32 24.4-32 45.3 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3m1.2-66.7C79.3 304 0 383.3 0 481.2c0 17 13.8 30.8 30.8 30.8h386.4c17 0 30.8-13.8 30.8-30.8 0-97.9-79.3-177.2-177.2-177.2z"
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
                  d="M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224m128-112a128 128 0 1 1-256 0 128 128 0 1 1 256 0M152 322v46.7c22.7 3.8 40 23.6 40 47.3 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-23.8 17.3-43.5 40-47.3v-43.4C66.9 343.5 16 406.4 16 481.2c0 8.2 6.6 14.8 14.8 14.8h386.4c8.2 0 14.8-6.6 14.8-14.8 0-74.8-50.9-137.7-120-155.9v43.4c22.7 3.8 40 23.6 40 47.3v40c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8s3.6-8 8-8h8v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32h8c4.4 0 8 3.6 8 8s-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-40c0-23.8 17.3-43.5 40-47.3V322c-8.2-1.3-16.6-2-25.2-2h-93.6c-8.6 0-17 .7-25.2 2m-8 62a32 32 0 1 0 0 64 32 32 0 1 0 0-64M0 481.2C0 383.3 79.3 304 177.2 304h93.6c97.9 0 177.2 79.3 177.2 177.2 0 17-13.8 30.8-30.8 30.8H30.8C13.8 512 0 498.2 0 481.2"
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
                  d="M352 128a128 128 0 1 1-256 0 128 128 0 1 1 256 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M280 304c2.7 0 5.3.1 8 .2V362c-27.6 7.1-48 32.2-48 62v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16v-24c0-17.7 14.3-32 32-32s32 14.3 32 32v24c-8.8 0-16 7.2-16 16s7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40c0-29.8-20.4-54.9-48-62v-53.2C393.5 326.7 448 393 448 472v8c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-8c0-79 54.5-145.3 128-163.2v61.5c-23.1 6.9-40 28.3-40 53.7 0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7v-66.1c2.7-.1 5.3-.2 8-.2zm-136 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
