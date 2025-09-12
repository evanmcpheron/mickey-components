import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VectorPolygonIcon: React.FC<
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
                  d="M0 64c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32h192c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-31.7l-4.5 7.9-28.4 49.7c.4 2.1.6 4.2.6 6.4v64c0 2.2-.2 4.3-.6 6.4l28.4 49.7 4.5 7.9H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32H128c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32V160c-17.7 0-32-14.3-32-32zm322.2 308.3L292.3 320H256c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h36.3l29.9-52.3c-1.4-3.6-2.2-7.5-2.2-11.7H128c0 17.7-14.3 32-32 32v192c17.7 0 32 14.3 32 32h192c0-4.1.8-8.1 2.2-11.7M48 80v32h32V80zm320 0v32h32V80zM80 400H48v32h32zm288 0v32h32v-32zm-64-160h-32v32h32z"
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
                  d="M360 72h48v48h-48zm-8-40c-17.7 0-32 14.3-32 32v8H128v-8c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32h8v192h-8c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-8h192v8c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-42.4l-27.4-45.6c3.7-5.2 5.8-11.5 5.8-18.4v-64c0-6.8-2.1-13.2-5.8-18.4l27.4-45.6H416c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-53.6 288 27.4 45.6c-3.7 5.2-5.8 11.5-5.8 18.4v8H128v-8c0-17.7-14.3-32-32-32h-8V160h8c17.7 0 32-14.3 32-32v-8h192v8c0 6.8 2.1 13.2 5.8 18.4L298.4 192H256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32zM40 440v-48h48v48zm320 0v-48h48v48zM40 120V72h48v48zm224 112h48v48h-48z"
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
                  d="M408 64c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8zm-48-32c-22.1 0-40 17.9-40 40v8H128v-8c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72v48c0 22.1 17.9 40 40 40h8v192h-8c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-8h192v8c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40h-43.7l-25.4-42.3c8.1-7.3 13.2-17.9 13.2-29.7v-48c0-11.8-5.1-22.3-13.2-29.7l25.4-42.3H408c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40zm-52.3 288 25.4 42.3c-8.1 7.3-13.2 17.9-13.2 29.7v8H128v-8c0-22.1-17.9-40-40-40h-8V160h8c22.1 0 40-17.9 40-40v-8h192v8c0 11.8 5.1 22.3 13.2 29.7L307.7 192H264c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40zM40 384h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H40c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8m320 0h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8m-96-160h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8M88 64c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H40c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8z"
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
                  d="M416 48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zm-32-16c-17.7 0-32 14.3-32 32v8H96v-8c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v32c0 17.7 14.3 32 32 32h8v256h-8c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-8h256v8c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32c-3.2 0-6.2.5-9.1 1.3l-52.3-87.2c8.1-5.8 13.4-15.3 13.4-26.1v-32c0-10.8-5.3-20.3-13.4-26.1l52.3-87.2c2.9.9 5.9 1.3 9.1 1.3h32c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-76.6 271.8 53.8 89.7c-5.7 5.8-9.2 13.7-9.2 22.5v8H96v-8c0-17.7-14.3-32-32-32h-8V128h8c17.7 0 32-14.3 32-32v-8h256v8c0 8.7 3.5 16.7 9.2 22.5l-53.8 89.7c-1.1-.1-2.2-.2-3.4-.2h-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c1.1 0 2.3-.1 3.4-.2M32 400h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m352 0h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16M32 48h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m272 176c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16z"
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
                  d="M128 64v64h192V64zm194.2 75.7L292.3 192H320c15.5 0 28.4 11 31.4 25.6l28.4-49.7 4.5-7.9H352c-13.6 0-25.1-8.4-29.8-20.3M292.3 320l29.9 52.3c4.7-11.9 16.2-20.3 29.8-20.3h32.3l-4.5-7.9-28.4-49.7c-3 14.6-15.9 25.6-31.4 25.6zM320 448v-64H128v64zM96 352V160H32v192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm48 48v32H48V80zm272-48c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm48 48v32h-32V80zM0 384v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m48 16h32v32H48zm304-48c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm48 48v32h-32v-32zM224 224v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m48 16h32v32h-32z"
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
