import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SwatchbookIcon: React.FC<
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
                  d="M0 32C0 14.3 14.3 0 32 0h128c17.7 0 32 14.3 32 32v384c0 53-43 96-96 96S0 469 0 416zm223.6 393.9c.3-3.3.4-6.6.4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3zM182.8 512l192-192H480c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32zM128 64H64v64h64zM64 192v64h64v-64zm32 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M0 400c0 61.9 50.1 112 112 112h336c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64h-62.1l50.7-50.7c25-25 25-65.5 0-90.5l-71.3-71.5c-25-25-65.5-25-90.5 0L224 126.1V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zm448 64H209.9l128-128H448c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16m-45.3-260.7L224 382.1V193.9l84.7-84.7c6.2-6.2 16.4-6.2 22.6 0l71.4 71.4c6.2 6.2 6.2 16.4 0 22.6zM112 464c-35.3 0-64-28.7-64-64v-96h128v96c0 35.3-28.7 64-64 64M48 256v-80h128v80zm0-128V64c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v64zm64 296a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M0 416c0 53 43 96 96 96h360c30.9 0 56-25.1 56-56v-80c0-30.9-25.1-56-56-56H331.7l87.3-87.3c21.9-21.9 21.9-57.3 0-79.2L362.4 97c-21.9-21.9-57.3-21.9-79.2 0L192 188.2V56c0-30.9-25.1-56-56-56H56C25.1 0 0 25.1 0 56zm456 64H171.7l128-128H456c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24m-59.6-269.9L192 414.5v-181l113.9-113.9c9.4-9.4 24.6-9.4 33.9 0l56.6 56.6c9.4 9.4 9.4 24.6 0 33.9M96 480c-35.3 0-64-28.7-64-64V288h128v128c0 35.3-28.7 64-64 64M32 256v-96h128v96zm0-128V56c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v72zm64 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M0 416c0 53 43 96 96 96s96-43 96-96V40c0-22.1-17.9-40-40-40H40C17.9 0 0 17.9 0 40zm96 80c-44.2 0-80-35.8-80-80V40c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v376c0 44.2-35.8 80-80 80m376 16c22.1 0 40-17.9 40-40V360c0-22.1-17.9-40-40-40H357.9l-16 16H472c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24H195.9c-4.6 5.8-9.7 11.1-15.3 16zm-248.2-88.7 206.5-206.6c15.6-15.6 15.6-40.9 0-56.6L351.1 81c-15.6-15.6-40.9-15.6-56.6 0L224 151.5v22.6l81.9-81.9c9.4-9.4 24.6-9.4 33.9 0l79.2 79.3c9.4 9.4 9.4 24.6 0 33.9l-195 195V416c0 2.4-.1 4.9-.2 7.3M120 48H72c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24M64 72c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8zm8 104c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm0 16h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8m40 224a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
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
                  d="M64 64v64h64V64zm109.1 409.1q8.85-5.55 16.5-13.2l245.6-245.5c12.5-12.5 12.5-32.8 0-45.3l-90.5-90.5c-12.5-12.5-32.8-12.5-45.3 0L192 186v230c0 19.9-6 38.4-16.4 53.7-.8 1.2-1.6 2.3-2.5 3.5zM480 512c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H374.8l-192 192zM128 192H64v64h64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 0C14.3 0 0 14.3 0 32v384c0 53 43 96 96 96s96-43 96-96V32c0-17.7-14.3-32-32-32zm96 64v64H64V64zM64 192h64v64H64zm32 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
