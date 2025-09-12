import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonWalkingWithCaneIcon: React.FC<
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
                  d="M176 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-8.4 32c-36.4 0-69.6 20.5-85.9 53.1l-46.3 92.6c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l35.4-70.7v43.2c0 17 6.7 33.3 18.7 45.3l77.3 77.2V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-89.4c0-12.7-5.1-24.9-14.1-33.9l-49.9-50v-93.4l70.4 93.9c10.6 14.1 30.7 17 44.8 6.4s17-30.7 6.4-44.8l-76.8-102.4C250.7 142.2 222.2 128 192 128zm-39.3 218.8L97 472.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l22-88.2-52.8-52.8zm322.5 158.3c5 7.3 15 9.1 22.3 4s9.1-15 4-22.3L358.9 316.1c-2.8 3.8-6.1 7.3-10.1 10.3-5 3.8-10.5 6.4-16.2 7.9z"
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
                  d="M176 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-14.4 32c-34.8 0-66.3 20.5-80.4 52.3l-47.1 106c-5.4 12.1.1 26.3 12.2 31.7s26.3-.1 31.7-12.2l42-94.7v68.7c0 17.8 8.5 34.6 22.9 45.2l97.1 71.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-95.9c0-12.7-6.1-24.7-16.3-32.3L240 336.6V207.3l68 102c7.4 11 22.3 14 33.3 6.7s14-22.3 6.7-33.3l-77-115.5c-16.3-24.5-43.8-39.2-73.2-39.2zm6.4 151.8V176h24v125.4l-20.7-15.2c-2.1-1.5-3.3-3.9-3.3-6.5zm175.4 70.1 107.4 155.2c5 7.3 15 9.1 22.3 4s9.1-15 4-22.3L370.4 332.6c-3.2 3.7-7 7.1-11.3 10-5 3.3-10.3 5.7-15.7 7.3M96.7 482.4c-3.1 12.9 4.8 25.8 17.7 28.9s25.8-4.8 28.9-17.7l26.3-109.4-42-30.8-31 129z"
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
                  d="M184 32a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112m-30.4 32c-31.6 0-60.3 18.6-73.1 47.5l-47.1 106c-3.6 8.1 0 17.5 8.1 21.1s17.5 0 21.1-8.1l47.1-106c2.5-5.6 6-10.6 10.3-14.8v96c0 17 9 32.7 23.7 41.4L256 393.2V496c0 8.8 7.2 16 16 16s16-7.2 16-16V393.2c0-11.3-6-21.8-15.8-27.6l-32.2-19V190.4c2.1 2.1 4 4.5 5.7 7l77 115.5c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-77-115.5c-14.8-22.3-39.8-35.6-66.6-35.6zM152 285.7V176h53.8c.8 0 1.5 0 2.3.1v151.7L160 299.5c-4.9-2.9-7.9-8.1-7.9-13.8zM96.6 491.8c-2.3 8.5 2.7 17.3 11.2 19.6s17.3-2.7 19.6-11.2l34.2-125.4-28.5-16.8zm354.3 13.3c5 7.3 15 9.1 22.3 4s9.1-15 4-22.3L372.3 335.4c-2.8 3.2-6 6.1-9.7 8.5-5.7 3.8-11.9 6.2-18.3 7.3l106.5 153.9z"
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
                  d="M131.7 216c-7.2-1.7-14.7 1.8-18 8.4l-35.4 70.8c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5L96 188.2c13.6-27.1 41.3-44.2 71.6-44.2H192c25.2 0 48.9 11.9 64 32l76.8 102.4c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2l-70.4-93.9c-4.1-5.5-11.3-7.8-17.9-5.6s-10.9 8.3-10.9 15.2v93.4c0 4.2 1.7 8.3 4.7 11.3l49.9 50c6 6 9.4 14.1 9.4 22.6V480c0 8.8-7.2 16-16 16s-16-7.2-16-16v-82.7c0-4.2-1.7-8.3-4.7-11.3L158 308.7c-9-9-14.1-21.2-14.1-33.9v-43.2c0-7.4-5.1-13.9-12.3-15.6zM176 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 218.7 54.4 72.5c10.6 14.1 30.7 17 44.8 6.4s17-30.7 6.4-44.8l-76.8-102.4C250.7 142.2 222.2 128 192 128h-24.4c-36.4 0-69.6 20.5-85.9 53.1l-46.3 92.6c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l19.4-38.7 16-32v43.2c0 17 6.7 33.3 18.7 45.3l77.3 77.2V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-89.4c0-12.7-5.1-24.9-14.1-33.9l-49.9-50v-93.4l16 21.3zM224 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-95.7 298.8L97 472.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l22-88.2-13.2-13.2-24.4 97.5c-2.1 8.6-10.8 13.8-19.4 11.6s-13.8-10.8-11.6-19.4l29-116.1-13.2-13.2zm337.2 161.8c2.5 3.6 7.5 4.5 11.1 1.9s4.5-7.5 1.9-11.1L363.1 335.3c-1.5 1.4-3 2.6-4.7 3.9-2.7 2-5.5 3.8-8.4 5.3z"
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
                  d="m332.6 334.3 118.2 170.8c5 7.3 15 9.1 22.3 4s9.1-15 4-22.3L358.9 316.1c-2.8 3.8-6.1 7.3-10.1 10.3-5 3.8-10.5 6.4-16.2 7.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0M81.7 181.1C98 148.5 131.2 128 167.6 128H192c30.2 0 58.7 14.2 76.8 38.4l76.8 102.4c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4L224 213.3v93.4l49.9 49.9c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-82.7L146.7 320c-12-12-18.7-28.3-18.7-45.3v-43.1l-35.4 70.7c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9zM97 472.2l31.4-125.4 52.8 52.8-22 88.2c-4.3 17.1-21.7 27.6-38.8 23.3s-27.6-21.7-23.3-38.8z"
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
