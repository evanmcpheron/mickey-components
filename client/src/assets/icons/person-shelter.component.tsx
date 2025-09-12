import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonShelterIcon: React.FC<
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
                  d="M271.9 4.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128C6.2 137.9 0 148.5 0 160v320c0 17.7 14.3 32 32 32s32-14.3 32-32V178.6L256 68.9l192 109.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-11.5-6.2-22.1-16.1-27.8zM256 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80m-8 280v-88h16v88c0 13.3 10.7 24 24 24s24-10.7 24-24V313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3h-19.6c-32.4 0-62.1 17.8-77.5 46.3l-37.9 70.3c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8l26.9-49.9V488c0 13.3 10.7 24 24 24s24-10.7 24-24"
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
                  d="M268.1 3.3c-7.5-4.4-16.8-4.4-24.3 0l-232 136C4.5 143.6 0 151.5 0 160v328c0 13.3 10.7 24 24 24s24-10.7 24-24V173.8l208-122 208 122V488c0 13.3 10.7 24 24 24s24-10.7 24-24V160c0-8.5-4.5-16.4-11.9-20.7zM256 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80m-16 64.5c2-.3 4.1-.5 6.2-.5h19.5c2.1 0 4.2.2 6.2.5V368H240zm0 143.5h32v72c0 13.3 10.7 24 24 24s24-10.7 24-24V328.3l18.9 35c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3C328 241.8 298.2 224 265.8 224h-19.6c-32.4 0-62.1 17.8-77.5 46.3l-37.9 70.3c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8l18.9-35V488c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
                  d="M264.2 2.3c-5.1-3-11.4-3-16.5 0l-240 144C2.9 149.2 0 154.4 0 160v336c0 8.8 7.2 16 16 16s16-7.2 16-16V169.1L256 34.7l224 134.4V496c0 8.8 7.2 16 16 16s16-7.2 16-16V160c0-5.6-2.9-10.8-7.8-13.7zM240 168a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-72 97.5c3.8-1 7.7-1.5 11.8-1.5h24.5c4 0 8 .5 11.8 1.5V368H232zm0 134.5h48v96c0 8.8 7.2 16 16 16s16-7.2 16-16V291.5l42.4 68.9c4.6 7.5 14.5 9.9 22 5.2s9.9-14.5 5.2-22l-45.3-73.5C321.8 246.4 296 232 268.2 232h-24.4c-27.8 0-53.6 14.4-68.1 38.1l-45.3 73.5c-4.6 7.5-2.3 17.4 5.2 22s17.4 2.3 22-5.2l42.4-68.9V496c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
                  d="M260.2 1.2a7.95 7.95 0 0 0-8.4 0l-248 152c-2.4 1.5-3.8 4-3.8 6.8v344c0 4.4 3.6 8 8 8s8-3.6 8-8V164.5L256 17.4l240 147.1V504c0 4.4 3.6 8 8 8s8-3.6 8-8V160c0-2.8-1.4-5.4-3.8-6.8zM232 168a24 24 0 1 1 48 0 24 24 0 1 1-48 0m64 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-80 128c0-4.4-3.6-8-8-8s-8 3.6-8 8v184c0 17.7 14.3 32 32 32 9.6 0 18.1-4.2 24-10.8 5.9 6.6 14.4 10.8 24 10.8 17.7 0 32-14.3 32-32V296c0-4.4-3.6-8-8-8s-8 3.6-8 8v184c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-4.4-3.6-8-8-8s-8 3.6-8 8v96c0 8.8-7.2 16-16 16s-16-7.2-16-16zm-21.7-25.4c9.5-18.8 28.8-30.6 49.9-30.6h23.6c21.1 0 40.4 11.8 49.9 30.6l43.1 85c2 3.9 6.8 5.5 10.8 3.5s5.5-6.8 3.5-10.8l-43.1-85a71.99 71.99 0 0 0-64.2-39.4h-23.6c-27.1 0-51.9 15.2-64.2 39.4l-43.1 85c-2 3.9-.4 8.8 3.5 10.8s8.8.4 10.8-3.5z"
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
                  d="M296 168a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-48 320v-88h16v88c0 13.3 10.7 24 24 24s24-10.7 24-24V313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3h-19.6c-32.4 0-62.1 17.8-77.5 46.3l-37.9 70.3c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8l26.9-49.9V488c0 13.3 10.7 24 24 24s24-10.7 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l224 128c10 5.7 16.1 16.3 16.1 27.8v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V178.6L256 68.9 64 178.6V480c0 17.7-14.3 32-32 32S0 497.7 0 480V160c0-11.5 6.2-22.1 16.1-27.8z"
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
