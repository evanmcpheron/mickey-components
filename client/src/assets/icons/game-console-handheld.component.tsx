import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GameConsoleHandheldIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v352c0 53-43 96-96 96H96c-53 0-96-43-96-96zm96 16v112c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16m136 304a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88-72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-224-8v16H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16"
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
                  d="M64 48c-8.8 0-16 7.2-16 16v352c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V64c0-8.8-7.2-16-16-16zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v352c0 53-43 96-96 96H96c-53 0-96-43-96-96zm232 272a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24-24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-128-24c8.8 0 16 7.2 16 16v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-16c0-8.8 7.2-16 16-16M112 96h160c8.8 0 16 7.2 16 16v112c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V112c0-8.8 7.2-16 16-16"
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
                  d="M64 32c-17.7 0-32 14.3-32 32v352c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V64c0-17.7-14.3-32-32-32zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v352c0 53-43 96-96 96H96c-53 0-96-43-96-96zm96 160h192V96H96zM64 80c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v144c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm144 280a24 24 0 1 1 48 0 24 24 0 1 1-48 0m88-72a24 24 0 1 1 0 48 24 24 0 1 1 0-48M96 304c0-8.8 7.2-16 16-16s16 7.2 16 16v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h16z"
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
                  d="M64 16c-26.5 0-48 21.5-48 48v352c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80V64c0-26.5-21.5-48-48-48zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v352c0 53-43 96-96 96H96c-53 0-96-43-96-96zm80 16v144c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V80zm-16 0c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v144c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm168 264a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m16-48a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-192-48c0-4.4 3.6-8 8-8s8 3.6 8 8v32h32c4.4 0 8 3.6 8 8s-3.6 8-8 8h-32v32c0 4.4-3.6 8-8 8s-8-3.6-8-8v-32H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h32z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v352c0 53-43 96-96 96H96c-53 0-96-43-96-96zm96 16v112c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16m136 304a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88-72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-224-8v16H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 80c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v112c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32z"
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
