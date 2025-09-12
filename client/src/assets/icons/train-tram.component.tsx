import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrainTramIcon: React.FC<
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
                  d="M86.8 48c-12.2 0-23.6 5.5-31.2 15L42.7 79C34.5 89.3 19.4 91 9 82.7S-3 59.4 5.3 49L18 33C34.7 12.2 60 0 86.8 0h274.4c26.7 0 52 12.2 68.7 33l12.8 16c8.3 10.4 6.6 25.5-3.8 33.7s-25.5 6.6-33.7-3.7l-12.7-16c-7.6-9.5-19.1-15-31.2-15H248v48h40c53 0 96 43 96 96v160c0 30.6-14.3 57.8-36.6 75.4l65.5 65.5C420 500 415 512 405 512h-39.7c-8.5 0-16.6-3.4-22.6-9.4L288 448H160l-54.6 54.6c-6 6-14.1 9.4-22.6 9.4H43c-10 0-15-12.1-7.9-19.1l65.5-65.5C78.3 409.8 64 382.6 64 352V192c0-53 43-96 96-96h40V48zM160 160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm32 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M55.5 63c7.6-9.5 19.1-15 31.2-15H200v48h-40c-53 0-96 43-96 96v160c0 26 10.3 49.6 27.2 66.9L39 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l60.6-60.6c8.4 2.4 17.2 3.7 26.4 3.7H288c9.2 0 18-1.3 26.4-3.7L375 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L356.8 419c16.9-17.4 27.2-41 27.2-67V192c0-53-43-96-96-96h-40V48h113.2c12.2 0 23.6 5.5 31.2 15l12.8 16c8.3 10.4 23.4 12 33.7 3.7s12-23.4 3.8-33.7L430 33c-16.7-20.8-42-33-68.8-33H86.8C60 0 34.7 12.2 18 33L5.3 49C-3 59.4-1.3 74.5 9 82.7s25.5 6.6 33.7-3.7zM160 144h128c26.5 0 48 21.5 48 48v48H112v-48c0-26.5 21.5-48 48-48m-48 144h224v64c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48zm72 64a24 24 0 1 0-48 0 24 24 0 1 0 48 0m104 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M41.3 50c9.1-11.4 22.9-18 37.5-18H208v64h-48c-53 0-96 43-96 96v160c0 28.9 12.8 54.8 33 72.4l-60.3 60.3c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l65.8-65.8c10.8 4.2 22.6 6.5 34.9 6.5h128c12.3 0 24-2.3 34.9-6.5l65.8 65.8c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L351 424.4c20.2-17.6 33-43.5 33-72.4V192c0-53-43-96-96-96h-48V32h129.2c14.6 0 28.4 6.6 37.5 18l12.8 16c5.5 6.9 15.6 8 22.5 2.5s8-15.6 2.5-22.5l-12.8-16c-15.2-19-38.2-30-62.5-30H78.8C54.5 0 31.5 11 16.3 30L3.5 46C-2 52.9-.9 63 6 68.5s17 4.4 22.5-2.5zM160 128h128c35.3 0 64 28.7 64 64v64H96v-64c0-35.3 28.7-64 64-64M96 288h256v64c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm96 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M78.8 16c-17 0-33.1 7.7-43.7 21L22.2 53c-2.8 3.5-7.8 4-11.2 1.2S7 46.5 9.8 43l12.7-16C36.2 9.9 56.9 0 78.8 0h290.4c21.9 0 42.6 9.9 56.2 27l12.8 16c2.8 3.4 2.2 8.5-1.2 11.2s-8.5 2.2-11.2-1.2L413 37c-10.6-13.3-26.7-21-43.7-21H232v80h56c53 0 96 43 96 96v160c0 31.8-15.4 60-39.2 77.4l68.9 68.9c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L330.7 438c-12.9 6.4-27.4 10-42.7 10H160c-15.3 0-29.8-3.6-42.7-10l-71.6 71.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l68.9-68.9C79.4 412 64 383.8 64 352V192c0-53 43-96 96-96h56V16zM216 112h-56c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h128c44.2 0 80-35.8 80-80V192c0-44.2-35.8-80-80-80h-72m-40 240a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m160 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64M160 176c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32z"
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
                  d="M86.8 48c-12.2 0-23.6 5.5-31.2 15L42.7 79C34.5 89.3 19.4 91 9 82.7S-3 59.4 5.3 49L18 33C34.7 12.2 60 0 86.8 0h274.4c26.7 0 52 12.2 68.7 33l12.8 16c8.3 10.4 6.6 25.5-3.8 33.7s-25.5 6.6-33.7-3.7l-12.7-16c-7.6-9.5-19.1-15-31.2-15H248v48h-48V48zM35.1 492.9l65.5-65.5c16.3 12.9 37 20.6 59.4 20.6l-54.6 54.6c-6 6-14.1 9.4-22.6 9.4H43c-10 0-15-12.1-7.9-19.1m307.5 9.7L288 448c22.4 0 43.1-7.7 59.4-20.6l65.5 65.5C420 500 415 512 405 512h-39.7c-8.5 0-16.6-3.4-22.6-9.4zM160 160h128c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 96c-53 0-96 43-96 96v160c0 53 43 96 96 96h128c53 0 96-43 96-96V192c0-53-43-96-96-96zm0 64h128c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32m-32 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
