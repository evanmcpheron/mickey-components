import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MoneyCheckPenIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h266.5l6-23.9c2.8-11.3 8.6-21.5 16.8-29.7l181.3-181.3c11.6-11.6 26.3-18.5 41.4-20.5V128c0-35.3-28.7-64-64-64zm48 224h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m-16-80c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16m517.8 27.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3-71-71z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 112h448c8.8 0 16 7.2 16 16v91.6l6.6-6.6c11.6-11.6 26.3-18.5 41.4-20.5V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h266.5l6-23.9c2.2-8.8 6.2-17 11.8-24.1H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16m56 160c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-24-72c0 13.3 10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24m517.8 35.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3-71-71z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 96h448c17.7 0 32 14.3 32 32v69.6c10.2-4 21.1-5.9 32-5.6v-64c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h266.2l8-32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32m48 192c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-16-80c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16m486.8 56 17.4 17.4c6.2 6.2 6.2 16.4 0 22.6l-24.8 24.8-40-40 24.8-24.8c6.2-6.2 16.4-6.2 22.6 0M406.5 417.7l106.2-106.2 40 40-106.3 106.2c-2.1 2.1-4.6 3.5-7.4 4.2l-49 12.3 12.3-49c.7-2.8 2.2-5.4 4.2-7.4zm131-176.3L383.8 395.1c-6.2 6.2-10.5 13.9-12.6 22.3l-18.7 74.9c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l74.9-18.7c8.4-2.1 16.1-6.5 22.3-12.6l153.7-153.8c18.7-18.7 18.7-49.1 0-67.9l-17.4-17.4c-18.7-18.7-49.1-18.7-67.9 0z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 80h448c26.5 0 48 21.5 48 48v68.6c5.2-2 10.6-3.3 16-4V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h266.5l4-16H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48m40 224c-4.4 0-8 3.6-8 8s3.6 8 8 8h272c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-8-88c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-4.4 0-8 3.6-8 8m260.7 291.2c4 4 9.7 5.6 15.2 4.2l60.1-15-3.4-13.6 3.4 13.6c5.6-1.4 10.8-4.3 14.9-8.4l181.2-181.3c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4c-15.6-15.6-40.9-15.6-56.6 0L375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2m15.7-28.9 10.6-42.6c.7-2.8 2.2-5.4 4.2-7.4l142.9-142.9 48.3 48.3-142.8 142.9c-2.1 2.1-4.6 3.5-7.4 4.2l-42.5 10.6-17.7 4.4 4.4-17.6zm244.4-182.9-27.1 27.1-48.3-48.3 27.1-27.2c9.4-9.4 24.6-9.4 33.9 0l14.4 14.4c9.4 9.4 9.4 24.6 0 33.9z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v64.6c-15.2 2-29.8 8.8-41.4 20.5L353.3 394.3c-8.2 8.2-14 18.5-16.8 29.7l-6 23.9H64c-35.3 0-64-28.7-64-64zm96 176c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16m16-112c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m557.2 235.7-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4c-15.6-15.6-40.9-15.6-56.6 0m-52 52L375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3-71-71z"
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
