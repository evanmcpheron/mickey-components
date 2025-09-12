import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PasteIcon: React.FC<
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
                  d="M160 0c-23.7 0-44.4 12.9-55.4 32H48C21.5 32 0 53.5 0 80v320c0 26.5 21.5 48 48 48h144V176c0-44.2 35.8-80 80-80h48V80c0-26.5-21.5-48-48-48h-56.6c-11-19.1-31.7-32-55.4-32m112 128c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V243.9c0-12.7-5.1-24.9-14.1-33.9L430 142.1c-9-9-21.2-14.1-33.9-14.1H272M160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M104.6 48H64C28.7 48 0 76.7 0 112v272c0 35.3 28.7 64 64 64h96v-48H64c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h16c0 17.7 14.3 32 32 32h72.4c17.6-19.6 43.2-32 71.6-32h62c-7.1-27.6-32.2-48-62-48h-40.6C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48m39.4 8a16 16 0 1 1 32 0 16 16 0 1 1-32 0m304 408H256c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16h140.1l67.9 67.9V448c0 8.8-7.2 16-16 16m-192 48h192c35.3 0 64-28.7 64-64V243.9c0-12.7-5.1-24.9-14.1-33.9L430 142.1c-9-9-21.2-14.1-33.9-14.1H256c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64"
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
                  d="M136.5 51.2c2.2-11 11.9-19.2 23.5-19.2s21.3 8.2 23.5 19.2c1.5 7.4 8.1 12.8 15.7 12.8h8.8c8.8 0 16 7.2 16 16v16H96V80c0-8.8 7.2-16 16-16h8.8c7.6 0 14.2-5.4 15.7-12.8M160 0c-22.3 0-41.6 13.1-50.6 32H64C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64h128v-32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h2.7C65 69 64 74.4 64 80v16c0 17.7 14.3 32 32 32h112c11.5-15.4 28.5-26.4 48-30.4V80c0-5.6-1-11-2.7-16h2.7c17.7 0 32 14.3 32 32h32c0-35.3-28.7-64-64-64h-45.4c-9-18.9-28.3-32-50.6-32m288 480H288c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h108.1c4.2 0 8.3 1.7 11.3 4.7l67.9 67.9c3 3 4.7 7.1 4.7 11.3V448c0 17.7-14.3 32-32 32m49.9-270.1L430 142c-9-9-21.2-14.1-33.9-14.1H288c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V243.9c0-12.7-5.1-24.9-14.1-33.9z"
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
                  d="M128.6 41.6C131.6 27 144.5 16 160 16s28.4 11 31.4 25.6c.8 3.7 4 6.4 7.8 6.4H216c13.3 0 24 10.7 24 24v16c0 4.4-3.6 8-8 8H88c-4.4 0-8-3.6-8-8V72c0-13.3 10.7-24 24-24h16.8c3.8 0 7.1-2.7 7.8-6.4M160 0c-20.9 0-38.7 13.4-45.3 32H104c-13.1 0-24.7 6.3-32 16h-8C28.7 48 0 76.7 0 112v272c0 35.3 28.7 64 64 64h128v-16H64c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h.8c-.5 2.6-.8 5.3-.8 8v16c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24V72c0-2.7-.3-5.4-.8-8h.8c20.9 0 38.7 13.4 45.3 32H318c-7.1-27.6-32.2-48-62-48h-8c-7.3-9.7-18.9-16-32-16h-10.7C198.7 13.4 180.9 0 160 0m288 496H288c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48h108.1c8.5 0 16.6 3.4 22.6 9.4l67.9 67.9c6 6 9.4 14.1 9.4 22.6V448c0 26.5-21.5 48-48 48m-160 16h160c35.3 0 64-28.7 64-64V243.9c0-12.7-5.1-24.9-14.1-33.9L430 142.1c-9-9-21.2-14.1-33.9-14.1H288c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64"
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
                  d="M224 176c0-26.5 21.5-48 48-48h124.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V464c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 0c-23.7 0-44.4 12.9-55.4 32H48C21.5 32 0 53.5 0 80v320c0 26.5 21.5 48 48 48h144V176c0-44.2 35.8-80 80-80h48V80c0-26.5-21.5-48-48-48h-56.6c-11-19.1-31.7-32-55.4-32m0 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
