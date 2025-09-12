import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LandmarkDomeIcon: React.FC<
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
                  d="M248 0h16c13.3 0 24 10.7 24 24v10.7c80.4 13.4 143.9 76.9 157.3 157.3h2.7c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h2.7C80.1 111.6 143.6 48.1 224 34.7V24c0-13.3 10.7-24 24-24M64 288h64v128h40V288h64v128h48V288h64v128h40V288h64v132.3c.6.3 1.2.7 1.7 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V288z"
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
                  d="M256 0c13.3 0 24 10.7 24 24v9.5c89.5 11.1 159.9 83.9 167.3 174.5h8.7c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h8.7C72.1 117.4 142.5 44.6 232 33.5V24c0-13.3 10.7-24 24-24M112.9 208h286.2c-8-72-69-128-143.1-128s-135.2 56-143.1 128m-.9 80v96h64v-96h48v96h64v-96h48v96h64v-96h48v96h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-13.3 0-24-10.7-24-24s10.7-24 24-24v-96zM8 488c0-13.3 10.7-24 24-24h456c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-13.3 0-24-10.7-24-24"
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
                  d="M256 0c8.8 0 16 7.2 16 16v16.7c87.9 7.2 159 73.7 173.3 159.3H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h18.7C81 106.3 152.1 39.9 240 32.7V16c0-8.8 7.2-16 16-16M99.2 192h313.6C398 119 333.4 64 256 64S114 119 99.2 192M64 352v-96h32v96h80v-96h32v96h96v-96h32v96h80v-96h32v96c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-8.8 0-16-7.2-16-16s7.2-16 16-16m-40 80c0-8.8 7.2-16 16-16h432c8.8 0 16 7.2 16 16s-7.2 16-16 16H40c-8.8 0-16-7.2-16-16M0 496c0-8.8 7.2-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16"
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
                  d="M256 0c4.4 0 8 3.6 8 8v8.2c97 4 175.4 79.9 183.3 175.8H464c4.4 0 8 3.6 8 8s-3.6 8-8 8H48c-4.4 0-8-3.6-8-8s3.6-8 8-8h16.7C72.6 96.1 151 20.1 248 16.2V8c0-4.4 3.6-8 8-8M80.7 192h350.6C423.2 102.3 347.8 32 256 32S88.8 102.3 80.7 192m-.7 56v120h104V248c0-4.4 3.6-8 8-8s8 3.6 8 8v120h112V248c0-4.4 3.6-8 8-8s8 3.6 8 8v120h104V248c0-4.4 3.6-8 8-8s8 3.6 8 8v128c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8V248c0-4.4 3.6-8 8-8s8 3.6 8 8M40 432h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.4 0-8-3.6-8-8s3.6-8 8-8M8 496h496c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M128 256H64v164.3c-.6.3-1.2.7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512h448c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V256H384v160h-40V256h-64v160h-48V256h-64v160h-40z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M248 0c-13.3 0-24 10.7-24 24v10.7C143.6 48.1 80.1 111.6 66.7 192H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-2.7C431.9 111.6 368.4 48.1 288 34.7V24c0-13.3-10.7-24-24-24z"
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
