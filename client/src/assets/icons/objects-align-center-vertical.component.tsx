import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ObjectsAlignCenterVerticalIcon: React.FC<
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
                  d="M64 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v152h64v-88c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v88h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v88c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48v-88h-64v152c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40z"
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
                  d="M112 80v352h64V80zm-48 0c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v152h64v-88c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v88h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v88c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48v-88h-64v152c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40zm272 64v224h64V144z"
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
                  d="M176 64c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zm48 176V80c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v160H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v160c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V272h64v96c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-96h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-96c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v96zm96 16V144c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16z"
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
                  d="M176 48c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zm48 200V80c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v168H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v168c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V264h64v104c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V264h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56V144c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v104zm80 8V144c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32z"
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
                  d="M64 432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48zm224-64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M24 280c-13.3 0-24-10.7-24-24s10.7-24 24-24h40v48zm264 0h-64v-48h64zm160 0v-48h40c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
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
