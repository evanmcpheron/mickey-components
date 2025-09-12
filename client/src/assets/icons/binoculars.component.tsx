import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BinocularsIcon: React.FC<
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
                  d="M128 32h32c17.7 0 32 14.3 32 32v32H96V64c0-17.7 14.3-32 32-32m64 96v320c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-59.1c0-34.6 9.4-68.6 27.2-98.3C40.9 267.8 49.7 242.4 53 216l7.5-60c2-16 15.6-28 31.8-28zm227.8 0c16.1 0 29.8 12 31.8 28l7.4 60c3.3 26.4 12.1 51.8 25.8 74.6 17.8 29.7 27.2 63.7 27.2 98.3V448c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V128zM320 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v32h-96zm-32 64v160h-64V128z"
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
                  d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v16H96zm-36.4 94c4.8-26.6 28-46 55.1-46H200c13.3 0 24 10.7 24 24v24h64v-24c0-13.3 10.7-24 24-24h85.3c27.1 0 50.3 19.4 55.1 46l5 27.3c3.6 19.9 10.8 39 21.2 56.4l2.6 4.4c20.1 33.6 30.8 72 30.8 111.1V424c0 30.9-25.1 56-56 56H344c-30.9 0-56-25.1-56-56V288h-64v136c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56v-66.8C0 318 10.6 279.6 30.8 246l2.6-4.4c10.4-17.4 17.6-36.5 21.2-56.4l5-27.3zm55.1 2c-3.9 0-7.2 2.8-7.9 6.6l-5 27.3C97.2 219.5 88 244 74.6 266.4l-2.6 4.4c-15.7 26.1-24 55.9-24 86.4V424c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8V160zm282.6 0H336v264c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-66.8c0-30.4-8.3-60.3-23.9-86.4l-2.6-4.4c-13.4-22.3-22.6-46.9-27.3-72.5l-5-27.3c-.7-3.8-4-6.6-7.9-6.6M352 32h32c17.7 0 32 14.3 32 32v16h-96V64c0-17.7 14.3-32 32-32"
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
                  d="M112 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm224 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zM192 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-75.1c0-28.8 7.8-57.1 22.7-81.9 16-26.6 26.2-56.3 30.1-87.1l5.7-45.9c1-8 7.8-14 15.9-14H192v304m32 0V288h64v144c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-75.1c0-34.6-9.4-68.6-27.2-98.3-13.7-22.8-22.5-48.2-25.8-74.6l-5.7-46c-3-24-23.4-42-47.6-42H312c-13.3 0-24 10.7-24 24v8h-64v-8c0-13.3-10.7-24-24-24h-93.6c-24.2 0-44.6 18-47.6 42L53 184c-3.3 26.4-12.1 51.8-25.8 74.6C9.4 288.3 0 322.3 0 356.9V432c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48m0-176v-96h64v96zm96 16V128h85.6c8.1 0 14.9 6 15.9 14l5.7 45.9c3.9 30.8 14.1 60.5 30.1 87.1 14.8 24.7 22.7 53 22.7 81.9V432c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16z"
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
                  d="M128 48c-8.8 0-16 7.2-16 16v32h80V64c0-8.8-7.2-16-16-16zM96 97.1V64c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v33.4c9.3 3.3 16 12.2 16 22.6v8h64v-8c0-10.4 6.7-19.3 16-22.6V64c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v33.1c19.5 4.3 34.7 20.4 37.3 40.9l5.7 46c3.3 26.4 12.1 51.8 25.8 74.6 17.8 29.7 27.2 63.7 27.2 98.3V432c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V288h-64v144c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-75.1c0-34.6 9.4-68.6 27.2-98.3C40.9 235.8 49.7 210.4 53 184l5.7-46c2.6-20.5 17.8-36.6 37.3-40.9m10.4 14.9c-16.1 0-29.8 12-31.8 28l-5.7 45.9c-3.6 28.6-13.1 56.2-27.9 80.9-16.3 27.2-25 58.4-25 90.1V432c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V120c0-4.4-3.6-8-8-8h-93.6m299.3 0H312c-4.4 0-8 3.6-8 8v312c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-75.1c0-31.7-8.6-62.9-25-90.1-14.8-24.7-24.3-52.3-27.9-80.9l-5.7-45.9c-2-16-15.6-28-31.8-28zM320 96h80V64c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16zm-96 176h64V144h-64z"
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
                  d="M96 64v32h96V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32m224 0v32h96V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32m-32 32h-64v160h64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 448V256h32V96H93c-16.4 0-30.2 12.5-31.8 28.8l-9 89.7c-2.7 27.3-11.5 53.7-25.6 77.3C9.2 320.7 0 353.8 0 387.6V448c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32m128 0c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-60.4c0-33.8-9.2-66.9-26.5-95.8-14.1-23.6-22.9-49.9-25.6-77.3l-9-89.7C449.2 108.5 435.5 96 419 96H288v160h32z"
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
