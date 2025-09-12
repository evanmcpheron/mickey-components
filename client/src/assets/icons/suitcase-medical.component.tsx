import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SuitcaseMedicalIcon: React.FC<
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
                  d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8m-56 8v424h256V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56M96 96H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h32zm320 384h32c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-32zM224 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
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
                  d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8m-56 8v40H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56m240 88v288H144V144h224m-272 0v288H64c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16zm320 288V144h32c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16zM229.3 224v37.3H192c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V352c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16v-37.3H320c8.8 0 16-7.2 16-16v-21.4c0-8.8-7.2-16-16-16h-37.3V224c0-8.8-7.2-16-16-16h-21.4c-8.8 0-16 7.2-16 16"
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
                  d="M176 32h160c8.8 0 16 7.2 16 16v48H160V48c0-8.8 7.2-16 16-16m-48 16v48H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-64V48c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48m256 80v320H128V128h256m-288 0v320H64c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm320 320V128h32c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32zM240 176c-17.7 0-32 14.3-32 32v32h-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32v-32c0-17.7-14.3-32-32-32zm0 32h32v48c0 8.8 7.2 16 16 16h48v32h-48c-8.8 0-16 7.2-16 16v48h-32v-48c0-8.8-7.2-16-16-16h-48v-32h48c4.2 0 8.3-1.7 11.3-4.7s4.7-7.1 4.7-11.3z"
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
                  d="M168 16h176c13.3 0 24 10.7 24 24v56H144V40c0-13.3 10.7-24 24-24m-40 24v56H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-64V40c0-22.1-17.9-40-40-40H168c-22.1 0-40 17.9-40 40m8 72h272v352H104V112zM88 464H64c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48h24zm336-352h24c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48h-24zm-192 88c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-56c-4.4 0-8 3.6-8 8v56c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h56c4.4 0 8-3.6 8-8zm8-24c-13.3 0-24 10.7-24 24v48h-48c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h48v48c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24h-48v-48c0-13.3-10.7-24-24-24z"
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
                  d="M96 480h32V96H96zM384 96v384h32V96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8m-56 8v424h256V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56M96 96H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h32zm320 384h32c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-32zM224 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
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
