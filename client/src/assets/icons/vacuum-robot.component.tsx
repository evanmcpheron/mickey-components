import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VacuumRobotIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m100.7-155.3c55.6-55.6 55.6-145.8 0-201.4s-145.8-55.6-201.4 0c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6c68.1-68.1 178.5-68.1 246.6 0s68.1 178.5 0 246.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6m-144-144c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6m-80 16c6.2-6.2 16.4-6.2 22.6 0l128 128c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-128-128c-6.2-6.2-6.2-16.4 0-22.6m-16 102.6c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0z"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m335-79c-43.6-43.6-114.4-43.6-158.1 0-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c62.4-62.4 163.5-62.4 225.9 0s62.4 163.5 0 225.9c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c43.6-43.6 43.6-114.4 0-158.1m-122.3 35.7c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6m-80 16c6.2-6.2 16.4-6.2 22.6 0l128 128c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-128-128c-6.2-6.2-6.2-16.4 0-22.6m-16 102.6c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0z"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m356.7-100.7c-55.6-55.6-145.8-55.6-201.4 0-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6c68.1-68.1 178.5-68.1 246.6 0s68.1 178.5 0 246.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6c55.6-55.6 55.6-145.8 0-201.4m-144 57.4c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6m-80 16c6.2-6.2 16.4-6.2 22.6 0l128 128c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-128-128c-6.2-6.2-6.2-16.4 0-22.6m-16 102.6c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-53.7-277.7c-3.1 3.1-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-64-64c-3.1-3.1-8.2-3.1-11.3 0m-72 8c-3.1 3.1-3.1 8.2 0 11.3l128 128c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-128-128c-3.1-3.1-8.2-3.1-11.3 0m-8 83.3 64 64c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-64-64c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3m29-177.6c28.2-28.2 66.5-44 106.3-44 83.1 0 150.4 67.3 150.4 150.4 0 39.9-15.8 78.1-44 106.3l-9.6 9.6c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l9.6-9.6c31.2-31.2 48.7-73.5 48.7-117.7C424 162.5 349.5 88 257.6 88c-44.1 0-86.5 17.5-117.7 48.7l-9.6 9.6c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l9.6-9.6z"
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
                  d="M212.7 212.7c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6m-80 16c6.2-6.2 16.4-6.2 22.6 0l128 128c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-128-128c-6.2-6.2-6.2-16.4 0-22.6m-16 102.6c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m155.3-100.7c55.6-55.6 145.8-55.6 201.4 0s55.6 145.8 0 201.4c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0c68.1-68.1 68.1-178.5 0-246.6s-178.5-68.1-246.6 0c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0m80 57.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zm-80 16c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l128 128c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zm-38.6 80c-6.2 6.2-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0"
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
