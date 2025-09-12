import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FilePenIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v139.6l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19 1.4 27.8H64c-35.3 0-64-28.7-64-64zm384 64H256V0zm165.8 107.7 14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0M311.9 417l129.2-129.2 71 71-129.2 129.1c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"
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
                  d="M64 464h198.5l-5.1 20.2c-2.3 9.4-1.8 19 1.4 27.8H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h165.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3v145.1l-48 48V160h-80c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16m485.8-228.3 14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0M311.9 417l129.2-129.2 71 71-129.2 129.1c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"
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
                  d="M64 480h194.3l-1 3.8c-2.4 9.5-1.8 19.3 1.4 28.2H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h156.1C232.8 0 245 5.1 254 14.1l115.9 115.8c9 9 14.1 21.2 14.1 33.9v120.4l-32 32V192H240c-26.5 0-48-21.5-48-48V32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32m287.5-320c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16zm167 104c-6.2-6.2-16.4-6.2-22.6 0l-24.8 24.8 39.9 39.9 24.8-24.8c6.2-6.2 6.2-16.4 0-22.6L518.6 264zM342.4 417.5c-2.1 2.1-3.5 4.6-4.2 7.4l-12.2 49 48.9-12.2c2.8-.7 5.4-2.2 7.4-4.2l106.2-106.2-39.9-39.9zm130.9-176.1c18.7-18.7 49.1-18.7 67.9 0l17.3 17.3c18.7 18.7 18.7 49.1 0 67.9L405 480.1c-6.2 6.2-13.9 10.5-22.3 12.6l-74.8 18.7c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l18.7-74.8c2.1-8.4 6.5-16.2 12.6-22.3z"
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
                  d="M64 496h191.7c0 5.5 1 10.9 2.8 16H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h140.1C216.8 0 229 5.1 238 14.1l131.9 131.8c9 9 14.1 21.2 14.1 33.9v119.5l-16 16V179.9c0-1.3-.1-2.6-.2-3.9H248c-22.1 0-40-17.9-40-40V16.2c-1.3-.2-2.6-.2-3.9-.2H64c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48m297.1-336q-1.2-1.5-2.4-2.7l-132-131.9q-1.35-1.35-2.7-2.4v113c0 13.3 10.7 24 24 24zm-68.4 347.2c-4-4-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9l181.3-181.3c15.6-15.6 40.9-15.6 56.6 0l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-3.4-13.6 3.4 13.6-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2zm15.7-28.9-4.4 17.5 17.6-4.4 42.5-10.6c2.8-.7 5.4-2.2 7.4-4.2l142.9-142.9-48.3-48.3-142.9 142.9c-2 2.1-3.5 4.6-4.2 7.4l-10.6 42.5zm244.4-182.9c9.4-9.4 9.4-24.6 0-33.9L538.4 247c-9.4-9.4-24.6-9.4-33.9 0l-27.1 27.1 48.3 48.3 27.1-27.1z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v139.5l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19.1 1.4 27.9H64c-35.3 0-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160H256c-17.7 0-32-14.3-32-32V0zm165.9 75.7 14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.5-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zm-238 181.4 129.3-129.3 71 71-129.3 129.3c-4.1 4.1-9.2 7-14.9 8.4l-60.2 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.2c1.4-5.6 4.3-10.8 8.4-14.9z"
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
