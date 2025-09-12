import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CourtSportIcon: React.FC<
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
                  d="M576 480H336V366.9c54.3-7.8 96-54.4 96-110.9s-41.7-103.1-96-110.9V32h240c35.3 0 64 28.7 64 64v32h-64c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h64v32c0 35.3-28.7 64-64 64M304 145.1c-54.3 7.8-96 54.4-96 110.9s41.7 103.1 96 110.9V480H64c-35.3 0-64-28.7-64-64v-32h64c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H0V96c0-35.3 28.7-64 64-64h240zm0 189.3c-36.5-7.4-64-39.7-64-78.4s27.5-71 64-78.4zm32 0V177.6c36.5 7.4 64 39.7 64 78.4s-27.5 71-64 78.4M576 160h64v192h-64c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32M64 352H0V160h64c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v32h16c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H48v32c0 8.8 7.2 16 16 16h232v-66.6c-50.3-11-88-55.8-88-109.4s37.7-98.4 88-109.4V80zm280 285.4V432h232c8.8 0 16-7.2 16-16v-32h-16c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h16V96c0-8.8-7.2-16-16-16H344v66.6c50.3 11 88 55.8 88 109.4s-37.7 98.4-88 109.4m0-168.8v118.7c23.5-9.5 40-32.5 40-59.3s-16.5-49.9-40-59.3zm-48 0c-23.5 9.5-40 32.5-40 59.3s16.5 49.9 40 59.3V196.7zM48 176v160h16c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16zm528 160h16V176h-16c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16M0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v32h32c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H32v32c0 17.7 14.3 32 32 32h240v-97.3c-45.4-7.6-80-47.1-80-94.7s34.6-87.1 80-94.7V64zm272 286.7V448h240c17.7 0 32-14.3 32-32v-32h-32c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h32V96c0-17.7-14.3-32-32-32H336v97.3c45.4 7.6 80 47.1 80 94.7s-34.6 87.1-80 94.7m0-156.7v124c27.6-7.1 48-32.2 48-62s-20.4-54.9-48-62m-32 0c-27.6 7.1-48 32.2-48 62s20.4 54.9 48 62zM32 160v192h32c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm544 192h32V160h-32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32M0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v32h48c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H16v32c0 26.5 21.5 48 48 48h248V351.7c-49.3-4.1-88-45.3-88-95.7s38.7-91.6 88-95.7V48zm264 303.7V464h248c26.5 0 48-21.5 48-48v-32h-48c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h48V96c0-26.5-21.5-48-48-48H328v112.3c49.3 4.1 88 45.3 88 95.7s-38.7 91.6-88 95.7m0-175.3v159.2c40.4-4 72-38.1 72-79.6s-31.6-75.6-72-79.6m-16 0c-40.4 4-72 38.1-72 79.6s31.6 75.6 72 79.6zM16 144v224h48c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48zm560 224h48V144h-48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48M0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
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
                  d="M304 145.1V32h32v113.1c54.3 7.8 96 54.4 96 110.9s-41.7 103.1-96 110.9V480h-32V366.9c-54.3-7.8-96-54.4-96-110.9s41.7-103.1 96-110.9m0 32.5c-36.5 7.4-64 39.7-64 78.4s27.5 71 64 78.4zm32 156.8c36.5-7.4 64-39.7 64-78.4s-27.5-71-64-78.4zM0 384v-32h64c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H0v-32h64c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64zm640-256v32h-64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h64v32h-64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M576 480H336V366.9c54.3-7.8 96-54.4 96-110.9s-41.7-103.1-96-110.9V32h240c35.3 0 64 28.7 64 64v32h-64c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h64v32c0 35.3-28.7 64-64 64M304 145.1c-54.3 7.8-96 54.4-96 110.9s41.7 103.1 96 110.9V480H64c-35.3 0-64-28.7-64-64v-32h64c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H0V96c0-35.3 28.7-64 64-64h240zm0 189.3c-36.5-7.4-64-39.7-64-78.4s27.5-71 64-78.4zm32 0V177.6c36.5 7.4 64 39.7 64 78.4s-27.5 71-64 78.4M576 160h64v192h-64c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32M64 352H0V160h64c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32"
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
