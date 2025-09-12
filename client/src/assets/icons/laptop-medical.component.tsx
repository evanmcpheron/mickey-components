import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LaptopMedicalIcon: React.FC<
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
                  d="M64 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256h-64V96H128v256H64zM0 403.2C0 392.6 8.6 384 19.2 384h601.6c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2M288 160c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
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
                  d="M128 80h384c8.8 0 16 7.2 16 16v224h48V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v224h48V96c0-8.8 7.2-16 16-16M50.7 400h538.6c-6.6 18.6-24.4 32-45.3 32H96c-20.9 0-38.7-13.4-45.3-32M32 352c-17.7 0-32 14.3-32 32 0 53 43 96 96 96h448c53 0 96-43 96-96 0-17.7-14.3-32-32-32zm256-208v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
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
                  d="M128 64h384c17.7 0 32 14.3 32 32v256h32V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v256h32V96c0-17.7 14.3-32 32-32M33.9 416h572.2c-5.5 18.5-22.6 32-42.9 32H76.8c-20.3 0-37.4-13.5-42.9-32m-14.7-32C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480h486.4c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2zM304 112c-17.7 0-32 14.3-32 32v32h-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32v-32c0-17.7-14.3-32-32-32zm0 32h32v48c0 8.8 7.2 16 16 16h48v32h-48c-8.8 0-16 7.2-16 16v48h-32v-48c0-8.8-7.2-16-16-16h-48v-32h48c4.2 0 8.3-1.7 11.3-4.7s4.7-7.1 4.7-11.3z"
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
                  d="M128 48h384c26.5 0 48 21.5 48 48v256h16V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v256h16V96c0-26.5 21.5-48 48-48m492.8 352c1.8 0 3.2 1.4 3.2 3.2 0 33.6-27.2 60.8-60.8 60.8H76.8C43.2 464 16 436.8 16 403.2c0-1.8 1.4-3.2 3.2-3.2zM19.2 384C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480h486.4c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2zM296 128c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-56c-4.4 0-8 3.6-8 8v56c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h56c4.4 0 8-3.6 8-8zm8-24c-13.3 0-24 10.7-24 24v48h-48c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h48v48c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24h-48v-48c0-13.3-10.7-24-24-24z"
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
                  d="M128 32c-35.3 0-64 28.7-64 64v256h64V96h384v256h64V96c0-35.3-28.7-64-64-64zM19.2 384C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480h486.4c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M512 96H128v256h384zm-224 48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
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
