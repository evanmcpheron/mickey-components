import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookBibleIcon: React.FC<
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
                  d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H96m0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32M208 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
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
                  d="M0 88C0 39.4 39.4 0 88 0h304c30.9 0 56 25.1 56 56v288c0 22.3-13.1 41.6-32 50.6V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80 0-2.7.1-5.4.4-8H0zm48 344c0 17.7 14.3 32 32 32h288v-64H80c-17.7 0-32 14.3-32 32m0-73.3c9.8-4.3 20.6-6.7 32-6.7h312c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8H88c-22.1 0-40 17.9-40 40zM208 96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v96c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-96h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h336c26.5 0 48 21.5 48 48v320c0 20.9-13.4 38.7-32 45.3V480h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.3 0-64-28.7-64-64zm64 352c-17.7 0-32 14.3-32 32s14.3 32 32 32h320v-64zm-32-23.4c9.4-5.4 20.3-8.6 32-8.6h336c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H64c-17.7 0-32 14.3-32 32zM224 72h32c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32v80c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-80h-32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h32v-32c0-17.7 14.3-32 32-32m0 32v48c0 8.8-7.2 16-16 16h-48v32h48c8.8 0 16 7.2 16 16v96h32v-96c0-8.8 7.2-16 16-16h48v-32h-48c-8.8 0-16-7.2-16-16v-48z"
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
                  d="M0 56C0 25.1 25.1 0 56 0h352c22.1 0 40 17.9 40 40v336c0 19.4-13.7 35.5-32 39.2V496h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-30.9 0-56-25.1-56-56zm56 360c-22.1 0-40 17.9-40 40s17.9 40 40 40h344v-80zm-40 .8C26.2 406.4 40.3 400 56 400h352c13.3 0 24-10.7 24-24V40c0-13.3-10.7-24-24-24H56c-22.1 0-40 17.9-40 40zM224 80h32c13.3 0 24 10.7 24 24v40h40c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-40v88c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-88h-40c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h40v-40c0-13.3 10.7-24 24-24m-8 24v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h48c4.4 0 8 3.6 8 8v96c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-96c0-4.4 3.6-8 8-8h48c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8"
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
                  d="M64 416c0-17.7 14.3-32 32-32h320v64H96c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 96C0 43 43 0 96 0h320c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-53 0-96-43-96-96zm208-16v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V192h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48V80c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
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
