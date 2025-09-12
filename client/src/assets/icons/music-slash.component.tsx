import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MusicSlashIcon: React.FC<
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
                  d="M563.1 6.3c8.1 6 12.9 15.6 12.9 25.7v336c0 16.7-6.2 32.2-16.7 45.1l71.5 56c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2S28.4-3.1 38.8 5.1l153.3 120.2c1.1-13 10-24.1 22.7-27.9l320-96c9.7-2.9 20.2-1.1 28.3 5zM300.7 210.4l120.4 94.4c16.3-10.5 36.7-16.8 58.9-16.8 11.2 0 22 1.6 32 4.6V147zM192 247.3l64 50.4V432c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6z"
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
                  d="M545 0c17.1 0 31 13.9 31 31v337c0 16.7-6.2 32.2-16.7 45.1l71.5 56c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2S28.4-3.1 38.8 5.1L208 137.7V120c0-10.5 6.9-19.8 16.9-22.9l311-95.7c3-.9 6-1.4 9.1-1.4M256 175.3l31.7 24.9L528 126.3V54l-272 83.7zm77.7 60.9 87.4 68.5c16.3-10.4 36.7-16.7 58.9-16.7 17.5 0 33.9 3.9 48 10.7V176.5l-194.3 59.8zm129.7 101.7 58 45.4c4.6-5.6 6.6-11.4 6.6-15.3 0-9.8-12.9-32-48-32-6.2 0-11.7.7-16.6 1.9m-255.4-78 48 37.8V432c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c17.5 0 33.9 3.9 48 10.7zM160 400c-35.1 0-48 22.2-48 32s12.9 32 48 32 48-22.2 48-32-12.9-32-48-32"
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
                  d="M575.5 376.2c.3-2.7.5-5.4.5-8.2V23c0-12.7-10.3-23-23-23-2.3 0-4.6.3-6.8 1l-311 95.7c-3 .9-5.6 2.7-7.5 5l28.3 22.2v-.1l288-88.6v89l-207 63.7 30.5 24.1L544 157.7v150.7c-17-12.7-39.4-20.4-64-20.4-5.1 0-10.1.3-15 1l48 37.9c9.6 4.5 17.2 10.7 22.4 17.7l40.1 31.7zM256 287l-32-25.3v110.7c-17-12.7-39.4-20.4-64-20.4-53 0-96 35.8-96 80s43 80 96 80 96-35.8 96-80zm-96 97c41.1 0 64 26.7 64 48s-22.9 48-64 48-64-26.7-64-48 22.9-48 64-48M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M364.1 199.1 560 138.8v185c-17.2-21.6-46.6-35.8-80-35.8h-3.2l22.5 17.8c29.2 5.7 50.6 24.2 57.9 45.7l18.8 14.9V15c0-8.3-6.7-15-15-15-1.5 0-3 .2-4.4.7L256.9 92.9c-5.9 1.8-10.7 5.8-13.7 10.8l12.9 10.2c.7-2.7 2.7-4.9 5.4-5.7L560 16.4v105.7l-211.1 65 15.3 12zM240 284.6v103.2c-17.2-21.6-46.6-35.8-80-35.8-53 0-96 35.8-96 80s43 80 96 80 96-35.8 96-80V297.2zM160 368c47 0 80 31.3 80 64s-33 64-80 64-80-31.3-80-64 33-64 80-64M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M563.1 6.3c8.1 6 12.9 15.6 12.9 25.7v336c0 16.7-6.2 32.2-16.7 45.1L421.2 304.8c16.2-10.5 36.6-16.8 58.8-16.8 11.2 0 22 1.6 32 4.6V147l-211.3 63.4-108.6-85.1c1.1-13 10-24.1 22.7-27.9l320-96c9.7-2.9 20.2-1.1 28.3 5zM192 247.3l64 50.4V432c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
