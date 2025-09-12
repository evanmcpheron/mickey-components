import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HeatIcon: React.FC<
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
                  d="M176 32c17.7 0 32 14.3 32 32v80c0 34.6 11.2 68.3 32 96l19.2 25.6C288.3 304.4 304 351.5 304 400v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48c0-34.6-11.2-68.3-32-96l-19.2-25.6C159.7 239.6 144 192.5 144 144V64c0-17.7 14.3-32 32-32M32 96c17.7 0 32 14.3 32 32v32c0 34.6 11.2 68.3 32 96l19.2 25.6C144.3 320.4 160 367.5 160 416v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32c0-34.6-11.2-68.3-32-96l-19.2-25.6C15.7 255.6 0 208.5 0 160v-32c0-17.7 14.3-32 32-32m320 32v32c0 34.6 11.2 68.3 32 96l19.2 25.6C432.3 320.4 448 367.5 448 416v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32c0-34.6-11.2-68.3-32-96l-19.2-25.6C303.7 255.6 288 208.5 288 160v-32c0-17.7 14.3-32 32-32s32 14.3 32 32"
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
                  d="M176 32c13.3 0 24 10.7 24 24v88c0 36.4 11.8 71.7 33.6 100.8l19.2 25.6c28 37.4 43.2 82.9 43.2 129.6v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56c0-36.3-11.8-71.7-33.6-100.8l-19.2-25.6c-28-37.4-43.2-82.9-43.2-129.6V56c0-13.3 10.7-24 24-24M24 96c13.3 0 24 10.7 24 24v37.9c0 33.2 9.8 65.6 28.2 93.2l31.5 47.3c23.7 35.5 36.3 77.2 36.3 119.8V456c0 13.3-10.7 24-24 24s-24-10.7-24-24v-37.9c0-33.2-9.8-65.6-28.2-93.2l-31.5-47.2A215.76 215.76 0 0 1 0 157.9V120c0-13.3 10.7-24 24-24m328 24v37.9c0 33.2 9.8 65.6 28.2 93.2l31.5 47.3c23.7 35.5 36.3 77.2 36.3 119.8V456c0 13.3-10.7 24-24 24s-24-10.7-24-24v-37.9c0-33.2-9.8-65.6-28.2-93.2l-31.5-47.3c-23.7-35.4-36.3-77.1-36.3-119.7V120c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M176 32c8.8 0 16 7.2 16 16v96c0 38.1 12.4 75.1 35.2 105.6l19.2 25.6c27 36 41.6 79.8 41.6 124.8v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-38.1-12.4-75.1-35.2-105.6l-19.2-25.6c-27-36-41.6-79.8-41.6-124.8V48c0-8.8 7.2-16 16-16M16 96c8.8 0 16 7.2 16 16v45.9c0 34.7 10.3 68.7 29.6 97.6l31.5 47.3C115.9 337 128 377.1 128 418.2V464c0 8.8-7.2 16-16 16s-16-7.2-16-16v-45.9c0-34.7-10.3-68.7-29.6-97.6l-31.5-47.3C12.2 239.1 0 198.9 0 157.9V112c0-8.8 7.2-16 16-16m336 16v45.9c0 34.7 10.3 68.7 29.6 97.6l31.5 47.3C435.9 337 448 377.1 448 418.2V464c0 8.8-7.2 16-16 16s-16-7.2-16-16v-45.9c0-34.7-10.3-68.7-29.6-97.6l-31.5-47.3c-22.7-34.1-34.9-74.3-34.9-115.3V112c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M176 32c4.4 0 8 3.6 8 8v104c0 39.8 12.9 78.6 36.8 110.4L240 280c26 34.6 40 76.7 40 120v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72c0-39.8-12.9-78.6-36.8-110.4L208 264c-26-34.6-40-76.7-40-120V40c0-4.4 3.6-8 8-8M8 96c4.4 0 8 3.6 8 8v53.9c0 36.3 10.8 71.8 30.9 102.1l31.5 47.3C100.3 340 112 378.6 112 418.1V472c0 4.4-3.6 8-8 8s-8-3.6-8-8v-53.9c0-36.3-10.8-71.8-30.9-102.1l-31.5-47.2C11.7 236 0 197.4 0 157.9V104c0-4.4 3.6-8 8-8m344 8v53.9c0 36.3 10.8 71.8 30.9 102.1l31.5 47.3C436.3 340 448 378.6 448 418.1V472c0 4.4-3.6 8-8 8s-8-3.6-8-8v-53.9c0-36.3-10.8-71.8-30.9-102.1l-31.5-47.3C347.7 236 336 197.4 336 157.9V104c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M176 32c17.7 0 32 14.3 32 32v80c0 34.6 11.2 68.3 32 96l19.2 25.6C288.3 304.4 304 351.5 304 400v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48c0-34.6-11.2-68.3-32-96l-19.2-25.6C159.7 239.6 144 192.5 144 144V64c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 128c0-17.7-14.3-32-32-32S0 110.3 0 128v32c0 48.5 15.7 95.6 44.8 134.4L64 320c20.8 27.7 32 61.4 32 96v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-48.5-15.7-95.6-44.8-134.4L96 256c-20.8-27.7-32-61.4-32-96zm288 0c0-17.7-14.3-32-32-32s-32 14.3-32 32v32c0 48.5 15.7 95.6 44.8 134.4L352 320c20.8 27.7 32 61.4 32 96v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-48.5-15.7-95.6-44.8-134.4L384 256c-20.8-27.7-32-61.4-32-96z"
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
