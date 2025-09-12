import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HouseMedicalIcon: React.FC<
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
                  d="M543.8 287.6c17 0 32-14 32-32.1 1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24 0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64h320.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32zM256 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
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
                  d="M272.5 5.7c9-7.6 22.1-7.6 31.1 0l264 224c10.1 8.6 11.4 23.7 2.8 33.8s-23.7 11.3-33.8 2.8L512 245.5V432c0 44.2-35.8 80-80 80H144c-44.2 0-80-35.8-80-80V245.5l-24.5 20.8c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8zM288 55.5 112 204.8V432c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V204.8zM256 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
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
                  d="M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235v197c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80V235l37.4 33c6.6 5.8 16.7 5.2 22.6-1.4s5.2-16.7-1.4-22.6zM96 432V206.7L288 37.3l192 169.4V432c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48m176-256c-17.7 0-32 14.3-32 32v32h-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32v-32c0-17.7-14.3-32-32-32zm0 32h32v48c0 8.8 7.2 16 16 16h48v32h-48c-8.8 0-16 7.2-16 16v48h-32v-48c0-8.8-7.2-16-16-16h-48v-32h48c4.2 0 8.3-1.7 11.3-4.7s4.7-7.1 4.7-11.3z"
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
                  d="M293.3 2c-3-2.7-7.6-2.7-10.6 0L2.7 250c-3.3 2.9-3.6 8-.7 11.3s8 3.6 11.3.7L64 217.1V448c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V217.1l50.7 44.9c3.3 2.9 8.4 2.6 11.3-.7s2.6-8.4-.7-11.3zM80 448V202.9L288 18.7l208 184.2V448c0 26.5-21.5 48-48 48H128c-26.5 0-48-21.5-48-48m184-248c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-56c-4.4 0-8 3.6-8 8v56c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h56c4.4 0 8-3.6 8-8zm8-24c-13.3 0-24 10.7-24 24v48h-48c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h48v48c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24h-48v-48c0-13.3-10.7-24-24-24z"
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
                  d="m64 270.5.1 177.5c0 35.3 28.7 64 64 64h320.4c35.4 0 64.1-28.7 64-64.1l-.4-177.3L288 74.5zM272 224h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M309.1 7.9C297-2.6 279-2.6 266.9 7.9l-256 224c-13.3 11.6-14.6 31.9-3 45.2s31.9 14.6 45.2 3L288 74.5l234.9 205.6c13.3 11.6 33.5 10.3 45.2-3s10.3-33.5-3-45.2zM256 240v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
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
