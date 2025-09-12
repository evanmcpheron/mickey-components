import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserRobotIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 0c8.8 0 16 7.2 16 16v48h64c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H144c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h64V16c0-8.8 7.2-16 16-16M16 144c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16zm400-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16m-256 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-160 80a16 16 0 1 0 0 32 16 16 0 1 0 0-32m48 16a16 16 0 1 0 32 0 16 16 0 1 0-32 0m80-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32M96 352h256c53 0 96 43 96 96v32c0 17.7-14.3 32-32 32h-64v-64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v64H32c-17.7 0-32-14.3-32-32v-32c0-53 43-96 96-96m80 112v48h-32v-48c0-8.8 7.2-16 16-16s16 7.2 16 16m48-16c8.8 0 16 7.2 16 16v48h-32v-48c0-8.8 7.2-16 16-16m80 16v48h-32v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M240 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64c-44.2 0-80 35.8-80 80v96c0 44.2 35.8 80 80 80h160c44.2 0 80-35.8 80-80v-96c0-44.2-35.8-80-80-80h-64zm96 128v96c0 17.7-14.3 32-32 32v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-32v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-32v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32m64 304v16h-96v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-32v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-32v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32H48v-16c0-26.5 21.5-48 48-48h256c26.5 0 48 21.5 48 48m-240 64h240c26.5 0 48-21.5 48-48v-16c0-53-43-96-96-96H96c-53 0-96 43-96 96v16c0 26.5 21.5 48 48 48zM16 128c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16m432 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16zm-240 32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M240 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64c-44.2 0-80 35.8-80 80v96c0 44.2 35.8 80 80 80h160c44.2 0 80-35.8 80-80v-96c0-44.2-35.8-80-80-80h-64zM96 144c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-32v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-32v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32c-26.5 0-48-21.5-48-48zm-80-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16m432 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16zm-288 32a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-48-16a48 48 0 1 0 96 0 48 48 0 1 0-96 0m192 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-48a48 48 0 1 0 0 96 48 48 0 1 0 0-96M96 384h256c35.3 0 64 28.7 64 64v16c0 8.8-7.2 16-16 16h-32v-32c0-17.7-14.3-32-32-32H112c-17.7 0-32 14.3-32 32v32H48c-8.8 0-16-7.2-16-16v-16c0-35.3 28.7-64 64-64m112 64v32h-32v-32zm-96 0h32v32h-32zm112 64h176c26.5 0 48-21.5 48-48v-16c0-53-43-96-96-96H96c-53 0-96 43-96 96v16c0 26.5 21.5 48 48 48h176m16-64h32v32h-32zm96 0v32h-32v-32z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M232 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-72c-44.2 0-80 35.8-80 80v96c0 44.2 35.8 80 80 80h160c44.2 0 80-35.8 80-80v-96c0-44.2-35.8-80-80-80h-72zM80 144c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64H144c-35.3 0-64-28.7-64-64zm-56-16c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8V136c0-4.4-3.6-8-8-8m408 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8zm-272 48a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-40-24a40 40 0 1 0 80 0 40 40 0 1 0-80 0m192 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80M96 368h256c44.2 0 80 35.8 80 80v16c0 17.7-14.3 32-32 32h-32v-48c0-17.7-14.3-32-32-32H112c-17.7 0-32 14.3-32 32v48H48c-17.7 0-32-14.3-32-32v-16c0-44.2 35.8-80 80-80m272 144h32c26.5 0 48-21.5 48-48v-16c0-53-43-96-96-96H96c-53 0-96 43-96 96v16c0 26.5 21.5 48 48 48h320m-16-16h-56v-64h40c8.8 0 16 7.2 16 16zm-72 0h-48v-64h48zm-64 0h-48v-64h48zm-64 0H96v-48c0-8.8 7.2-16 16-16h40zm8-264c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8s8-3.6 8-8v-32c0-4.4-3.6-8-8-8m56 8v32c0 4.4 3.6 8 8 8s8-3.6 8-8v-32c0-4.4-3.6-8-8-8s-8 3.6-8 8m72-8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8s8-3.6 8-8v-32c0-4.4-3.6-8-8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M240 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h32zM64 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h16V128zm112 336c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h32zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h32zm48-16c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16m128-288c0-17.7-14.3-32-32-32h-16v128h16c17.7 0 32-14.3 32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 128c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H144c-35.3 0-64-28.7-64-64zm112 32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-144 64a16 16 0 1 0 32 0 16 16 0 1 0-32 0m80-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32m48 16a16 16 0 1 0 32 0 16 16 0 1 0-32 0M0 448c0-53 43-96 96-96h256c53 0 96 43 96 96v32c0 17.7-14.3 32-32 32h-64v-64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v64H32c-17.7 0-32-14.3-32-32z"
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
