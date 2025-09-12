import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PrescriptionBottleMedicalIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 32C0 14.3 14.3 0 32 0h320c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64zm32 96h320v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm128 112v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 48h288v32H48zM32 0C14.3 0 0 14.3 0 32v64c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm0 160v288c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160h-48v288c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V160zm133.3 80v37.3H128c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V368c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16v-37.3H256c8.8 0 16-7.2 16-16v-21.4c0-8.8-7.2-16-16-16h-37.3V240c0-8.8-7.2-16-16-16h-21.4c-8.8 0-16 7.2-16 16"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M336 32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16zM48 0C21.5 0 0 21.5 0 48v32c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM32 160v288c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160h-32v288c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160zm149.3 32c-17.7 0-32 14.3-32 32v21.3H128c-17.7 0-32 14.3-32 32v21.3c0 17.7 14.3 32 32 32h21.3V352c0 17.7 14.3 32 32 32h21.3c17.7 0 32-14.3 32-32v-21.3H256c17.7 0 32-14.3 32-32v-21.4c0-17.7-14.3-32-32-32h-21.3V224c0-17.7-14.3-32-32-32zm0 32h21.3v37.3c0 8.8 7.2 16 16 16H256v21.3h-37.3c-8.8 0-16 7.2-16 16V352h-21.4v-37.3c0-8.8-7.2-16-16-16H128v-21.4h37.3c4.2 0 8.3-1.7 11.3-4.7s4.7-7.1 4.7-11.3z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M344 16c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H40c-13.3 0-24-10.7-24-24V40c0-13.3 10.7-24 24-24zM40 0C17.9 0 0 17.9 0 40v48c0 22.1 17.9 40 40 40h304c22.1 0 40-17.9 40-40V40c0-22.1-17.9-40-40-40zm-8 160v288c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160h-16v288c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V160zm141.3 57.3c0-4.4 3.6-8 8-8h21.3c4.4 0 8 3.6 8 8v44c0 4.4 3.6 8 8 8h44c4.4 0 8 3.6 8 8v21.3c0 4.4-3.6 8-8 8h-44c-4.4 0-8 3.6-8 8v44c0 4.4-3.6 8-8 8h-21.3c-4.4 0-8-3.6-8-8v-44c0-4.4-3.6-8-8-8h-44c-4.4 0-8-3.6-8-8v-21.3c0-4.4 3.6-8 8-8h44c2.1 0 4.2-.8 5.7-2.3s2.3-3.5 2.3-5.7zm8-24c-13.3 0-24 10.7-24 24v36h-36c-13.3 0-24 10.7-24 24v21.3c0 13.3 10.7 24 24 24h36v36c0 13.3 10.7 24 24 24h21.3c13.3 0 24-10.7 24-24v-36h36c13.3 0 24-10.7 24-24v-21.3c0-13.3-10.7-24-24-24h-36v-36c0-13.3-10.7-24-24-24z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M352 96H32v352c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64zM160 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 0C14.3 0 0 14.3 0 32v32c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm128 208v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
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
