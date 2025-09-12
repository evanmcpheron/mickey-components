import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BooksIcon: React.FC<
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
                  d="M0 32C0 14.3 14.3 0 32 0h64c17.7 0 32 14.3 32 32v64H0zm0 96h128v256H0zm0 288h128v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM160 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64H160zm0 96h128v256H160zm0 288h128v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm203.6-19.9L320 232.6v-89.8l100.4-26.9 66 247.4zM412.2 85 320 109.6V11l36.9-9.9c16.9-4.6 34.4 5.5 38.9 22.6zm-40.4 342 122.8-32.9 16.3 61.1c4.5 17-5.5 34.5-22.5 39.1L427 510.8c-16.9 4.6-34.4-5.5-38.9-22.6z"
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
                  d="M48 416v48h64v-48zm88 89.6c-7.1 4.1-15.3 6.4-24 6.4H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h64c8.7 0 16.9 2.3 24 6.4 7.1-4.1 15.3-6.4 24-6.4h64c20.6 0 38.1 12.9 45 31.1 5.6-6.1 12.9-10.7 21.4-13l59.5-16.5c24.7-6.8 50.1 8.3 56.7 33.8l18 69.2 6 23.2 61.8 238.3 6 23.2 11.9 46c6.6 25.5-8 51.7-32.7 58.5L418 510.3c-24.7 6.8-50.1-8.3-56.7-33.8l-18-69.2-6-23.2-61.7-238.2-3.6-13.7V464c0 26.5-21.5 48-48 48h-64c-8.7 0-16.9-2.3-24-6.4m24-41.6h64v-48h-64zM112 48H48v48h64zm0 96H48v224h64zm48-48h64V48h-64zm64 272V144h-64v224zm216.1-12.3-55.8-215-56.5 15.6 55.8 215zm-44.4 62.1 11.9 45.7 56.4-15.6v-.4l-11.7-45.2-56.5 15.6zm-79.9-308 56.5-15.6-11.9-45.7L304 64.1v.4l11.7 45.2z"
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
                  d="M128 416v48c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-48zm-16 96c12.3 0 23.5-4.6 32-12.2 8.5 7.6 19.7 12.2 32 12.2h64c26.5 0 48-21.5 48-48V193.8l51.4 198.1 4 15.5 18 69.2c6.6 25.5 32 40.6 56.7 33.8l59.6-16.5c24.7-6.8 39.3-33 32.7-58.5l-13.9-53.7-4-15.5-63.9-246-4-15.5-18-69.2c-6.6-25.6-32-40.7-56.7-33.9l-59.6 16.5c-3.5 1-6.8 2.3-9.9 4C271.9 8.8 257 0 240 0h-64c-12.3 0-23.5 4.6-32 12.2C135.5 4.6 124.3 0 112 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48zM288 64.8v-1.3c.3-7.2 5.1-13 10.8-14.6l59.6-16.5c6.6-1.8 14.8 2 17.2 11l14.1 54.2-87.3 24.2-13.8-53.2c-.3-1.3-.5-2.6-.6-3.8m-32-.6V96h-96V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16zM176 480c-8.8 0-16-7.2-16-16v-48h96v48c0 8.8-7.2 16-16 16zm-48-352v256H32V128zm0-80v48H32V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16m128 336h-96V128h96zm141.7-255.3 59.8 230.5-87.3 24.2-59.8-230.6 87.3-24.2zm67.9 261.5 13.8 53.2c2.4 9.4-3.2 17.7-10.3 19.6l-59.6 16.5c-6.6 1.8-14.8-2-17.2-11l-14.1-54.2 87.3-24.2z"
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
                  d="M128 416v48c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32v-48zm-32 96c16.7 0 31.4-8.5 40-21.5 8.6 12.9 23.3 21.5 40 21.5h48c26.5 0 48-21.5 48-48V132.2l1.5 6 2 7.7 65.9 253.8 2 7.7 18 69.2c6.6 25.5 32 40.6 56.7 33.8l59.6-16.5c24.7-6.8 39.3-33 32.7-58.5l-16-61.5-2-7.7-65.8-253.8-2-7.7-18-69.2c-6.6-25.6-32-40.7-56.7-33.9l-59.6 16.5c-8.4 2.3-15.7 6.9-21.4 13C262.1 12.9 244.6 0 224 0h-48c-16.7 0-31.4 8.5-40 21.5C127.4 8.5 112.7 0 96 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48zM272 64.8v-1.2c.3-14 9.5-26.4 22.6-30l59.6-16.5c15.7-4.3 32.5 5.1 36.9 22.4l16 61.7L289 133.8l-15.9-61.2c-.7-2.6-1-5.2-1.1-7.8m-16-.6V96H144V48c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32zM176 496c-17.7 0-32-14.3-32-32v-48h112v48c0 17.7-14.3 32-32 32zm-48-384v288H16V112zm0-64v48H16V48c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32m128 352H144V112h112zm155.2-283.3 63.9 246-118.3 32.6-63.8-246 118.2-32.7zM479 378.2l15.9 61.2c4.5 17.4-5.6 34.7-21.5 39.1L413.8 495c-15.7 4.3-32.5-5.1-36.9-22.4l-16-61.7z"
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
                  d="M0 32C0 14.3 14.3 0 32 0h64c17.7 0 32 14.3 32 32v64H0zm0 96h128v256H0zm0 288h128v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM160 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64H160zm0 96h128v256H160zm0 288h128v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm129.4-298.2L412.2 85l8.2 30.9-122.8 32.9-8.2-30.9zm74.2 278.3 122.8-32.9 8.2 30.9L371.8 427z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m288 112.6 1.4 5.2L412.2 85l-16.4-61.3c-4.5-17-22-27.1-38.9-22.6l-61.4 16.5c-2.7.7-5.2 1.8-7.5 3.1V96H160v32h128zm132.4 3.2-122.8 33 66 247.4 122.8-32.9-66-247.4zm-32.2 372.5c4.5 17 22 27.1 38.9 22.6l61.4-16.5c16.9-4.6 27-22.1 22.5-39.1l-16.3-61.1L371.8 427l16.3 61.3zM0 96v32h128V96zm128 288H0v32h128zm160 0H160v32h128z"
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
