import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonPinballIcon: React.FC<
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
                  d="M32 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m64 193.7v65.1l49.9 49.9c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-82.7L18.7 320C6.7 308 0 291.7 0 274.7v-88.1C0 154.2 26.2 128 58.6 128c24.1 0 46.5 12 59.9 32l42.6 64H224c12.9 0 24.1 7.7 29.1 18.7l295-49.2L515.3 95c-2.2-6.5-3.3-13.4-3.3-20.2V32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96H256v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V288h-39.4c-16 0-31-8-39.9-21.4zM0 480V346.5l64 64V480c0 17.7-14.3 32-32 32S0 497.7 0 480m280-144a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M80 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-32 90.2c0-5.6 4.6-10.2 10.2-10.2 4.9 0 9.7 1.3 13.8 3.7v120.1l-21.4-19.9c-1.6-1.5-2.6-3.6-2.6-5.9zm72 158.2v-88l6.5 11.5c7.1 12.5 20.4 20.2 34.7 20.2H192V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-88h352v88c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H504c-13.3 0-24 10.7-24 24v42c0 6.9 1.3 13.8 3.8 20.3l44 113.2L251 249.3c-4.4-5.7-11.3-9.3-19-9.3h-66.1l-42.3-74c-13.4-23.5-38.4-38-65.4-38C26.1 128 0 154.1 0 186.2V274c0 15.6 6.5 30.4 17.9 41l94.1 87.5V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-89c0-11.1-4.6-21.7-12.8-29.3zm472 7.6H240v-51.9l32.1-5.8c0 .6-.1 1.1-.1 1.7 0 13.3 10.7 24 24 24s24-10.7 24-24c0-3.5-.8-6.9-2.2-9.9L592 236.7zM48 386.7 0 342.1V488c0 13.3 10.7 24 24 24s24-10.7 24-24zM528 66V48h64v139.2l-16.5 2.4-47-120.7c-.4-.9-.5-1.9-.5-2.9"
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
                  d="M104 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m8 168v55.7c.2 5.1 2.7 9.7 6.9 12.6L80 320.6V180.2c-6.2-2.7-13-4.2-20-4.2-15.5 0-28 12.5-28 28v20m96 168.4-96-66V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V204c0-33.1 26.9-60 60-60 27.9 0 53.9 14.2 69 37.6l47.7 74.4h29.7l316.4-60.8-41.2-123.7c-1.1-3.3-1.6-6.7-1.6-10.1V32c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v464c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H224v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V288h-15.3c-10.9 0-21-5.5-26.9-14.7L112 214.5v128.1l34.1 23.4c8.7 6 13.9 15.8 13.9 26.4V496c0 8.8-7.2 16-16 16s-16-7.2-16-16zm480-213.6V32h-96v29.4l42.6 127.7zm0 205.2V211.4l-384 73.8V384zm-320-80a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M91.4 226.4c-6.7 2-11.4 8.3-11.4 15.3v65.1c0 4.2 1.7 8.3 4.7 11.3l49.9 49.9c6 6 9.4 14.1 9.4 22.6V480c0 8.8-7.2 16-16 16s-16-7.2-16-16v-82.7c0-4.2-1.7-8.3-4.7-11.3l-77.2-77.3c-9-9-14.1-21.2-14.1-33.9v-88.2c0-23.5 19.1-42.6 42.6-42.6 18.7 0 36.2 9.3 46.5 24.9l42.6 64c3 4.5 8 7.1 13.3 7.1h47c8.8 0 16 7.2 16 16s-7.2 16-16 16h-55.4c-10.7 0-20.7-5.3-26.6-14.3l-16.6-24.9c-3.9-5.9-11.2-8.5-17.9-6.4zm20.6 39.3.6.9c8.9 13.4 23.9 21.4 39.9 21.4H208v216c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h400v88c0 4.4 3.6 8 8 8s8-3.6 8-8V24c0-13.3-10.7-24-24-24H504c-13.3 0-24 10.7-24 24v37.5c0 2.5.4 4.9 1.1 7.2l45.3 143.4-288.6 55.6c1.4-3.6 2.2-7.5 2.2-11.7 0-17.7-14.3-32-32-32h-46.9l-42.6-64c-13.3-20-35.8-32-59.9-32C26.2 128 0 154.2 0 186.6v88.1c0 17 6.7 33.3 18.7 45.3L96 397.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-89.4c0-12.7-5.1-24.9-14.1-33.9l-49.9-50v-65zM80 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64m48 32a48 48 0 1 0-96 0 48 48 0 1 0 96 0m496 145.4-81.8 15.7-45.8-145.2c-.2-.8-.4-1.6-.4-2.4V24c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8zM224 400V286.6l400-76.9V400zm96-80a16 16 0 1 0-32 0 16 16 0 1 0 32 0M0 480c0 17.7 14.3 32 32 32s32-14.3 32-32v-69.5l-16-16V480c0 8.8-7.2 16-16 16s-16-7.2-16-16V362.5l-16-16z"
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
                  d="M544 0c-17.7 0-32 14.3-32 32v42.8c0 6.9 1.1 13.7 3.3 20.2l32.8 98.5-295 49.2c1.9 4 2.9 8.6 2.9 13.3 0 17.7-14.3 32-32 32h-32v192c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h320v96c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zM256 312a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m64 193.7v65.1l49.9 49.9c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-82.7L18.7 320C6.7 308 0 291.7 0 274.7v-88.1C0 154.2 26.2 128 58.6 128c24.1 0 46.5 12 59.9 32l42.6 64H224c17.7 0 32 14.3 32 32s-14.3 32-32 32h-71.4c-16 0-31-8-39.9-21.4zM0 480V346.5l64 64V480c0 17.7-14.3 32-32 32S0 497.7 0 480"
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
