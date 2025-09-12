import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MugTeaIcon: React.FC<
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
                  d="M144 64v50.7c0 8.5-3.4 16.6-9.4 22.6l-29.3 29.3c-6 6-9.4 14.1-9.4 22.6V256c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-66.7c0-8.5-3.4-16.6-9.4-22.6l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6V64H448c70.7 0 128 57.3 128 128s-57.3 128-128 128h-32v32c0 53-43 96-96 96H128c-53 0-96-43-96-96V96c0-17.7 14.3-32 32-32zm272 192h32c35.3 0 64-28.7 64-64s-28.7-64-64-64h-32z"
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
                  d="M80 112h72v10.7c0 8.5-3.4 16.6-9.4 22.6l-21.3 21.3c-6 6-9.4 14.1-9.4 22.6V256c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32v-66.7c0-8.5-3.4-16.6-9.4-22.6l-21.3-21.3c-6-6-9.4-14.1-9.4-22.6V112H368v240c0 26.5-21.5 48-48 48H128c-26.5 0-48-21.5-48-48zM64 64c-17.7 0-32 14.3-32 32v256c0 53 43 96 96 96h192c53 0 96-43 96-96v-32h32c70.7 0 128-57.3 128-128S518.7 64 448 64H64m384 208h-32V112h32c44.2 0 80 35.8 80 80s-35.8 80-80 80"
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
                  d="M144 96H64v256c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V96H176v40.5l36.5 30.4c7.3 6.1 11.5 15.1 11.5 24.6V256c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64.5c0-9.5 4.2-18.5 11.5-24.6l36.5-30.4zm16-32h304c61.9 0 112 50.1 112 112s-50.1 112-112 112h-48v64c0 53-43 96-96 96H128c-53 0-96-43-96-96V96c0-17.7 14.3-32 32-32zm304 32h-48v160h48c44.2 0 80-35.8 80-80s-35.8-80-80-80M128 256h64v-64.5l-32-26.7-32 26.7z"
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
                  d="M152 80v37l-46.1 52.7C99.5 177 96 186.3 96 196v52c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-52c0-9.7-3.5-19-9.9-26.3L168 117V80h200v272c0 44.2-35.8 80-80 80H96c-44.2 0-80-35.8-80-80V96c0-8.8 7.2-16 16-16zm232 272v-64h48c61.9 0 112-50.1 112-112S493.9 64 432 64H32C14.3 64 0 78.3 0 96v256c0 53 43 96 96 96h192c53 0 96-43 96-96m48-80h-48V80h48c53 0 96 43 96 96s-43 96-96 96m-314.1-91.8 42.1-48.1 42.1 48.1c3.8 4.4 5.9 10 5.9 15.8v52c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-52c0-5.8 2.1-11.4 5.9-15.8"
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
                  d="M144 114.7V64h32v50.7c0 8.5 3.4 16.6 9.4 22.6l29.3 29.3c6 6 9.4 14.1 9.4 22.6V256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-66.7c0-8.5 3.4-16.6 9.4-22.6l29.3-29.3c6-6 9.4-14.1 9.4-22.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 64v50.7c0 8.5-3.4 16.6-9.4 22.6l-29.3 29.3c-6 6-9.4 14.1-9.4 22.6V256c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-66.7c0-8.5-3.4-16.6-9.4-22.6l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6V64H448c70.7 0 128 57.3 128 128s-57.3 128-128 128h-32v32c0 53-43 96-96 96H128c-53 0-96-43-96-96V96c0-17.7 14.3-32 32-32zm272 192h32c35.3 0 64-28.7 64-64s-28.7-64-64-64h-32z"
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
