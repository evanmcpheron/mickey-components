import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FileSpreadsheetIcon: React.FC<
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
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM88 224h208c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H88c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32m0 112h48v-48H88zm80 0h48v-48h-48zm80 0h48v-48h-48zm0 32v48h48v-48zm-32 0h-48v48h48zm-80 0H88v48h48z"
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
                  d="M48 448V64c0-8.8 7.2-16 16-16h160v80c0 17.7 14.3 32 32 32h80v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C262.7 6.7 246.5 0 229.5 0zm112 256v48h-64v-48zm-64 80h64v48h-64zm96 0h64v48h-64zm-16 80h80c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32H112c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h80m16-112v-48h64v48z"
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
                  d="M320 480H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256c0 17.7-14.3 32-32 32m-80-320c-8.8 0-16-7.2-16-16V32.5c2.8.7 5.4 2.1 7.4 4.2l115.9 115.9c2.1 2.1 3.5 4.6 4.2 7.4zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1zm32 384h80v32H96zm0-32v-32h80v32zm112 64v-32h80v32zm0-64v-32h80v32zm112 16V256c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-48m-32-112v32H96v-32h192"
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
                  d="M16 448V64c0-26.5 21.5-48 48-48h140.1c1.3 0 2.6.1 3.9.2V136c0 22.1 17.9 40 40 40h119.8c.2 1.3.2 2.6.2 3.9V448c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48m342.6-290.7q1.35 1.35 2.4 2.7H248c-13.3 0-24-10.7-24-24V22.9q1.5 1.2 2.7 2.4zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V179.9c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1zm16 384h40v48H96c-8.8 0-16-7.2-16-16zm0-16v-48h40v48zm56 64v-48h48v48zm0-64v-48h48v48zm64 64v-48h48v48zm0-112h48v48h-48zm64 112v-48h40v32c0 8.8-7.2 16-16 16zm0-64v-48h40v48zm56 8V256c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-40m-16-120v48H80v-48c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16"
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm88 160c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h208c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160 224 0v128c0 17.7 14.3 32 32 32zM88 224c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h208c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm0 112v-48h48v48zm80 0v-48h48v48zm80 0v-48h48v48zm0 32h48v48h-48zm-32 0v48h-48v-48zm-80 0v48H88v-48z"
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
