import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VenusMarsIcon: React.FC<
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
                  d="M176 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224m176-112c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-34.9C62.1 334.1 0 262.3 0 176 0 78.8 78.8 0 176 0s176 78.8 176 176m-80.1 184.6c19.3-10.1 36.9-23.1 52.1-38.4 20 18.5 46.7 29.8 76.1 29.8 61.9 0 112-50.1 112-112s-50.1-112-112-112c-7.2 0-14.3.7-21.1 2-4.9-21.5-13-41.7-24-60.2 14.3-3.8 29.4-5.8 45-5.8 37 0 71.4 11.4 99.8 31l20.6-20.6L487 41c-6.9-6.9-8.9-17.2-5.2-26.2S494.3 0 504 0h112c13.3 0 24 10.7 24 24v112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4-20.6 20.6c19.5 28.4 31 62.7 31 99.8 0 97.2-78.8 176-176 176-50.5 0-96-21.3-128.1-55.4"
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
                  d="M176 304a128 128 0 1 0 0-256 128 128 0 1 0 0 256m176-128c0 89.1-66.2 162.7-152 174.4V400h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-49.6C66.2 338.7 0 265.1 0 176 0 78.8 78.8 0 176 0s176 78.8 176 176m-80.1 184.6c14.6-7.6 28.1-16.8 40.4-27.5C335.2 354.8 366 368 400 368c70.7 0 128-57.3 128-128s-57.3-128-128-128c-8.6 0-17.1.9-25.2 2.5-4.9-15.8-11.6-30.7-19.9-44.7C369.3 66 384.4 64 400 64c39.9 0 76.8 13.3 106.3 35.7L558.1 48H504c-13.3 0-24-10.7-24-24s10.7-24 24-24h112c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V81.9l-51.7 51.7C562.7 163.2 576 200.1 576 240c0 97.2-78.8 176-176 176-50.5 0-96-21.3-128.1-55.4"
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
                  d="M176 320a144 144 0 1 0 0-288 144 144 0 1 0 0 288m176-144c0 91.8-70.3 167.2-160 175.3V416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64.7C70.3 343.2 0 267.8 0 176 0 78.8 78.8 0 176 0s176 78.8 176 176m-80.1 184.6c9.7-5.1 19-10.9 27.8-17.4C325.6 368.5 361 384 400 384c79.5 0 144-64.5 144-144S479.5 96 400 96q-15.75 0-30.6 3.3c-4.1-10.2-8.9-20.1-14.5-29.4C369.3 66 384.4 64 400 64c42.8 0 82.1 15.3 112.6 40.7L585.4 32H496c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V54.6l-72.7 72.7C560.7 157.9 576 197.2 576 240c0 97.2-78.8 176-176 176-50.5 0-96-21.3-128.1-55.4"
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
                  d="M176 336a160 160 0 1 0 0-320 160 160 0 1 0 0 320m176-160c0 94.5-74.5 171.6-168 175.8V416h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72H88c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-64.2C74.5 347.6 0 270.5 0 176 0 78.8 78.8 0 176 0s176 78.8 176 176m-65.8 176.5c29 29.4 69.3 47.5 113.8 47.5 88.4 0 160-71.6 160-160S488.4 80 400 80c-12.8 0-25.3 1.5-37.2 4.4-2.4-5-5.1-9.8-7.9-14.5C369.3 66 384.4 64 400 64c45.7 0 87.4 17.4 118.7 46l94-94H488c-4.4 0-8-3.6-8-8s3.6-8 8-8h144c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V27.3l-94 94c28.6 31.3 46 72.9 46 118.7 0 97.2-78.8 176-176 176-50.5 0-96-21.3-128.1-55.4 4.9-2.5 9.7-5.3 14.3-8.2z"
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
                  d="M271.9 360.6c19.3-10.1 36.9-23.1 52.1-38.4 20 18.5 46.7 29.8 76.1 29.8 61.9 0 112-50.1 112-112s-50.1-112-112-112c-7.2 0-14.3.7-21.1 2-4.9-21.5-13-41.7-24-60.2 14.3-3.8 29.4-5.8 45-5.8 37 0 71.4 11.4 99.8 31l20.6-20.6L487 41c-6.9-6.9-8.9-17.2-5.2-26.2S494.3 0 504 0h112c13.3 0 24 10.7 24 24v112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4-20.6 20.6c19.5 28.4 31 62.7 31 99.8 0 97.2-78.8 176-176 176-50.5 0-96-21.3-128.1-55.4M176 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224m176-112c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-34.9C62.1 334.1 0 262.3 0 176 0 78.8 78.8 0 176 0s176 78.8 176 176m32 0c0-4.8-.2-9.6-.5-14.3 5.3-1.1 10.8-1.7 16.5-1.7 44.2 0 80 35.8 80 80s-35.8 80-80 80c-21.5 0-41-8.5-55.3-22.2C369.4 263.5 384 221.5 384 176"
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
