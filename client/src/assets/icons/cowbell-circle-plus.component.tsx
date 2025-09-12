import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CowbellCirclePlusIcon: React.FC<
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
                  d="M112 96h16V40c0-22.1 17.9-40 40-40h112c22.1 0 40 17.9 40 40v56h16c21.4 0 40.3 14.2 46.2 34.8l18.3 64C318.3 209.7 256 281.6 256 368c0 16.6 2.3 32.7 6.6 48H48c-15.1 0-29.3-7.1-38.3-19.1s-12-27.6-7.8-42.1l64-224C71.7 110.2 90.6 96 112 96m173.5 369.6c-7.6 26.8-32.3 46.4-61.5 46.4-35.3 0-64-28.7-64-64h115.2c3.1 6.1 6.6 12 10.3 17.6M272 96V48h-96v48zm160 128a144 144 0 1 1 0 288 144 144 0 1 1 0-288m16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48z"
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
                  d="M176 48h96v48h-96zm-48-8v56h-16c-21.4 0-40.3 14.2-46.2 34.8l-64 224c-4.1 14.5-1.2 30.1 7.8 42.1S32.9 416 48 416h214.6c-4.3-15.3-6.6-31.4-6.6-48H48l64-224h224l18.8 65.8c14.2-7 29.6-12.1 45.6-15l-18.3-64C376.3 110.2 357.4 96 336 96h-16V40c0-22.1-17.9-40-40-40H168c-22.1 0-40 17.9-40 40m32 408c0 35.3 28.7 64 64 64 29.2 0 53.9-19.6 61.5-46.4-3.8-5.7-7.2-11.5-10.3-17.6zm272 64a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M176 32h96c8.8 0 16 7.2 16 16v48H160V48c0-8.8 7.2-16 16-16m-48 16v48h-16c-21.4 0-40.3 14.2-46.2 34.8l-64 224c-4.1 14.5-1.2 30.1 7.8 42.1S32.9 416 48 416h214.6c-2.9-10.3-4.9-21-5.9-32H48c-5 0-9.8-2.4-12.8-6.4s-4-9.2-2.6-14l64-224c2-6.9 8.2-11.6 15.4-11.6h224c7.1 0 13.4 4.7 15.4 11.6l18.2 63.8c9.9-3.7 20.2-6.6 30.8-8.6l-18.3-64C376.3 110.2 357.4 96 336 96h-16V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48m128 400c0 17.7-14.3 32-32 32s-32-14.3-32-32h-32c0 35.3 28.7 64 64 64 29.2 0 53.9-19.6 61.5-46.4-3.8-5.7-7.2-11.5-10.3-17.6zm64-80a112 112 0 1 1 224 0 112 112 0 1 1-224 0m256 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-128-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48z"
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
                  d="M168 16h112c13.3 0 24 10.7 24 24v56H144V40c0-13.3 10.7-24 24-24m-40 24v56h-16c-21.4 0-40.3 14.2-46.2 34.8l-64 224c-4.1 14.5-1.2 30.1 7.8 42.1S32.9 416 48 416h214.6c-1.5-5.2-2.7-10.6-3.7-16H48c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1l64-224C85.1 121.5 97.7 112 112 112h224c14.3 0 26.8 9.5 30.8 23.2l18.1 63.2q7.65-2.1 15.6-3.6l-18.3-64C376.3 110.2 357.4 96 336 96h-16V40c0-22.1-17.9-40-40-40H168c-22.1 0-40 17.9-40 40m144 408c0 12.7-5.1 24.9-14.1 33.9S236.7 496 224 496s-24.9-5.1-33.9-14.1S176 460.7 176 448c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 17 6.7 33.3 18.7 45.3S207 512 224 512s33.3-6.7 45.3-18.7c7.8-7.8 13.3-17.3 16.3-27.6-4.6-6.9-8.8-14.2-12.4-21.7-.7 1.2-1.2 2.6-1.2 4.1zm32-80a128 128 0 1 1 256 0 128 128 0 1 1-256 0m272 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-136-72c0-4.4-3.6-8-8-8s-8 3.6-8 8v64h-64c-4.4 0-8 3.6-8 8s3.6 8 8 8h64v64c0 4.4 3.6 8 8 8s8-3.6 8-8v-64h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64z"
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
                  d="M128 96h-16c-21.4 0-40.3 14.2-46.2 34.8l-64 224c-4.1 14.5-1.2 30.1 7.8 42.1S32.9 416 48 416h214.6c-4.3-15.3-6.6-31.4-6.6-48 0-86.4 62.3-158.3 144.4-173.2l-18.3-64C376.3 110.2 357.4 96 336 96h-16V40c0-22.1-17.9-40-40-40H168c-22.1 0-40 17.9-40 40zm147.2 352H160c0 35.3 28.7 64 64 64 29.2 0 53.9-19.6 61.5-46.4-3.8-5.7-7.2-11.5-10.3-17.6M176 96V48h96v48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16"
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
