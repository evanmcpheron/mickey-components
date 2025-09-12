import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckDropletIcon: React.FC<
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
                  d="M0 48C0 21.5 21.5 0 48 0h320c26.5 0 48 21.5 48 48v48h50.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48zm416 208h128v-18.7L466.7 160H416zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96m368-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M208 272c39.8 0 72-29.6 72-66 0-27-39.4-82.9-59.9-110.3-6.1-8.2-18.1-8.2-24.2 0C175.4 123 136 179 136 206c0 36.5 32.2 66 72 66"
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
                  d="M64 48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h12.8c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48H352c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zm416 464c-53 0-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h288c35.3 0 64 28.7 64 64v32h42.7c14.9 0 29.1 5.9 39.6 16.4l93.3 93.3c10.5 10.5 16.4 24.7 16.4 39.6V368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40c0 53-43 96-96 96m78-272c-.1-.1-.2-.3-.4-.4l-93.3-93.3c-1.5-1.5-3.5-2.3-5.7-2.3H416v96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96m368-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M208 272c-39.8 0-72-29.6-72-66 0-27 39.4-82.9 59.9-110.3 6.1-8.2 18.1-8.2 24.2 0C240.6 123 280 179 280 206c0 36.5-32.2 66-72 66"
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
                  d="M352 32c17.7 0 32 14.3 32 32v320H250.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM0 352c0 35.3 28.7 64 64 64 0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V235.8c0-11.5-4.1-22.5-11.6-31.2l-78.7-91.8c-9.1-10.7-22.4-16.8-36.4-16.8H416V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zm416-224h65.3c4.7 0 9.1 2 12.1 5.6l77.5 90.4H416zm0 216.4V256h160v128h-5.5c-13.2-37.3-48.7-64-90.5-64-24.6 0-47 9.2-64 24.4M160 352a64 64 0 1 1 0 128 64 64 0 1 1 0-128m256 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0M256 211c0 23.7-20.3 45-48 45s-48-21.3-48-45c0-1.7.9-7.2 5-17.4 3.9-9.5 9.5-20.4 16.1-32.1 8.5-14.8 18.1-29.7 26.8-42.6 8.7 12.8 18.4 27.8 26.8 42.6 6.7 11.6 12.3 22.6 16.1 32.1 4.1 10.2 5 15.7 5 17.4zm32 0c0-32-45.2-98.9-67.6-130.2-6.1-8.6-18.6-8.6-24.8 0C173.2 112.1 128 179 128 211c0 42.5 35.8 77 80 77s80-34.5 80-77"
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
                  d="M352 16c26.5 0 48 21.5 48 48v336H236.7c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 416h.4c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8h160.8c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8H632c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V229.3c0-10.6-4.2-20.8-11.7-28.3L503 107.7c-7.5-7.5-17.7-11.7-28.3-11.7H416V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64m352-304h58.7c6.4 0 12.5 2.5 17 7l93.3 93.3c1.1 1.1 2.2 2.4 3 3.7H416zm0 261.4V232h176v168h-19.3c-10.4-36.9-44.4-64-84.7-64-29.8 0-56.1 14.8-72 37.4M152 352a72 72 0 1 1 0 144 72 72 0 1 1 0-144m264 72a72 72 0 1 1 144 0 72 72 0 1 1-144 0M272 211c0 33.1-28.1 61-64 61s-64-27.9-64-61c0-4.8 1.9-12.7 6.2-23.4 4.2-10.4 10.2-22 17.1-34 13.4-23.5 29.6-47.1 40.7-62.6 11.1 15.5 27.3 39.1 40.7 62.6 6.9 12 12.8 23.6 17.1 34 4.4 10.7 6.2 18.6 6.2 23.4m16 0c0-32-45.2-98.9-67.6-130.2-6.1-8.6-18.6-8.6-24.8 0C173.2 112.1 128 179 128 211c0 42.5 35.8 77 80 77s80-34.5 80-77"
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
                  d="M280 190c0 36.5-32.2 66-72 66s-72-29.6-72-66c0-27 39.4-82.9 59.9-110.3 6.1-8.2 18.1-8.2 24.2 0C240.6 107 280 163 280 190M96 432a80 80 0 1 1 160 0 80 80 0 1 1-160 0m368-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 48C0 21.5 21.5 0 48 0h320c26.5 0 48 21.5 48 48v48h50.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-33.1c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96h-66.2c-7.8-54.3-54.4-96-110.9-96S72.9 361.7 65.1 416H48c-26.5 0-48-21.5-48-48zm416 208h128v-18.7L466.7 160H416zm-208 0c39.8 0 72-29.6 72-66 0-27-39.4-82.9-59.9-110.3-6.1-8.2-18.1-8.2-24.2 0C175.4 107 136 163 136 190c0 36.5 32.2 66 72 66"
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
