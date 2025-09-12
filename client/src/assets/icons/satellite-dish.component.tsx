import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SatelliteDishIcon: React.FC<
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
                  d="M192 32c0-17.7 14.3-32 32-32 159.1 0 288 128.9 288 288 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224-17.7 0-32-14.3-32-32M60.6 220.6l104.1 104.1 28.4-28.4c-.7-2.6-1.1-5.4-1.1-8.3 0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-28.4 28.4 104.1 104.1c14.5 14.5 11.8 38.8-7.3 46.3-23.6 9.2-49.2 14.3-76.1 14.3C93.1 512 0 418.9 0 304c0-26.9 5.1-52.5 14.4-76.1 7.5-19 31.8-21.8 46.3-7.3zM224 96c106 0 192 86 192 192 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-70.7-57.3-128-128-128-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
                  d="M192 24c0 13.3 10.7 24 24 24 137 0 248 111 248 248 0 13.3 10.7 24 24 24s24-10.7 24-24C512 132.5 379.5 0 216 0c-13.3 0-24 10.7-24 24m24 80c-13.3 0-24 10.7-24 24s10.7 24 24 24c79.5 0 144 64.5 144 144 0 13.3 10.7 24 24 24s24-10.7 24-24c0-106-86-192-192-192m-7 233 40-40c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-40 40L71 199c-13.5-13.5-35.9-12.3-45.1 4.4C9.4 233.2 0 267.5 0 304c0 114.9 93.1 208 208 208 36.5 0 70.8-9.4 100.6-25.9 16.7-9.2 17.8-31.6 4.4-45.1zM48 304c0-18.1 3-35.5 8.5-51.6l203.1 203.1c-16.1 5.5-33.5 8.5-51.6 8.5-88.4 0-160-71.6-160-160"
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
                  d="M208 0c-8.8 0-16 7.2-16 16s7.2 16 16 16c150.2 0 272 121.8 272 272 0 8.8 7.2 16 16 16s16-7.2 16-16C512 136.1 375.9 0 208 0m0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16c97.2 0 176 78.8 176 176 0 8.8 7.2 16 16 16s16-7.2 16-16c0-114.9-93.1-208-208-208M32 304c0-24.5 5-47.7 13.9-68.8l230.9 230.9C255.7 475 232.5 480 208 480c-97.2 0-176-78.8-176-176m33.5-94.5c-14-14-37.3-12.1-45.7 5.8C7.1 242.2 0 272.3 0 304c0 114.9 93.1 208 208 208 31.7 0 61.8-7.1 88.7-19.8 17.9-8.4 19.8-31.8 5.8-45.7L195.3 339.3l24-24c6.3 3 13.3 4.7 20.7 4.7 26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48c0 7.4 1.7 14.4 4.7 20.7l-24 24zM224 272a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
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
                  d="M200 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c163.5 0 296 132.5 296 296 0 4.4 3.6 8 8 8s8-3.6 8-8C512 139.7 372.3 0 200 0m0 96c-4.4 0-8 3.6-8 8s3.6 8 8 8c110.5 0 200 89.5 200 200 0 4.4 3.6 8 8 8s8-3.6 8-8c0-119.3-96.7-216-216-216M16 304c0-29.3 6.6-57 18.3-81.8 1.7-3.5 4.5-5.4 8.1-5.8 3.8-.4 8.3.9 11.9 4.4l236.9 237c3.6 3.6 4.9 8.1 4.4 11.9-.4 3.6-2.2 6.4-5.8 8.1C265 489.4 237.3 496 208 496c-106 0-192-86-192-192m49.5-94.5c-14-14-37.3-12.1-45.7 5.8C7.1 242.2 0 272.3 0 304c0 114.9 93.1 208 208 208 31.7 0 61.8-7.1 88.7-19.8 17.9-8.4 19.8-31.8 5.8-45.7L189.7 333.7l20.3-20.3c6.3 4.2 13.9 6.6 22.1 6.6 22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40c0 8.2 2.4 15.7 6.6 22.1l-20.3 20.3zM208 280a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M224 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c123.7 0 224 100.3 224 224 0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0m0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32c70.7 0 128 57.3 128 128 0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M60.6 220.6c-14.5-14.5-38.8-11.8-46.3 7.3C5.1 251.5 0 277.1 0 304c0 114.9 93.1 208 208 208 26.9 0 52.5-5.1 76.1-14.4 19-7.5 21.8-31.8 7.3-46.3l-104.1-104 28.4-28.4c2.6.7 5.4 1.1 8.3 1.1 17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32c0 2.9.4 5.6 1.1 8.3l-28.4 28.4z"
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
