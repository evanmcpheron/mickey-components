import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BootHeeledIcon: React.FC<
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
                  d="M128 0H63.3C46 0 32 14 32 31.3c0 1.8.1 3.9.6 6.2C34.6 47.1 56 154.3 56 232c0 33.2-12.8 93.5-19.7 123.2-2.7 11.8-4.3 24.1-4.3 36.6V488c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-15.1l125 34.7c10.5 2.9 21.3 4.4 32.1 4.4H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-34.3c0-27.3-15.4-52.2-39.8-64.4l-112.4-56.2a71.96 71.96 0 0 1-39.8-64.4V24c0-13.3-10.7-24-24-24H160v240c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
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
                  d="M31.3 0C14 0 0 14 0 31.3c0 1.8.1 3.9.6 6.2C2.6 47.1 24 154.3 24 232c0 33.2-12.8 93.5-19.7 123.2C1.6 367 0 379.3 0 391.8V488c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-22.7l121.6 40.5c12.2 4.1 25 6.2 37.9 6.2H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-33.3c0-28.1-16.3-53.6-41.8-65.4l-124.4-57.4a72.03 72.03 0 0 1-41.8-65.4V24c0-13.3-10.7-24-24-24zM432 430.7V464H287.6c-7.7 0-15.4-1.2-22.8-3.7l-129.2-43.1c-2.4-.8-5-1.2-7.6-1.2H48v-24.2c0-8.5 1.1-17.2 3.1-25.8C57.6 337.7 72 271.8 72 232c0-64.6-13.5-146.3-20.5-184H96v184c0 13.3 10.7 24 24 24s24-10.7 24-24V48h80v194.6c0 46.8 27.2 89.3 69.7 109L418 409c8.5 3.9 13.9 12.4 13.9 21.8z"
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
                  d="M37 0C16.5 0 0 16.5 0 37c0 3.5.5 7 1.5 10.3C6.5 65.1 32 158.5 32 232c0 15.4-3.7 37.3-9 60-5.1 22.4-11.4 44.3-16 59.5-4.4 14.5-7 29.8-7 45.4V496c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-46.5l118.9 52.8c14.3 6.4 29.8 9.7 45.5 9.7H496c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-34.3c0-24.2-13.7-46.4-35.4-57.2l-144.4-72.3C273.1 302.7 256 275 256 244.7V40c0-22.1-17.9-40-40-40H37m59 32v208c0 8.8 7.2 16 16 16s16-7.2 16-16V32h88c4.4 0 8 3.6 8 8v204.7c0 42.4 24 81.2 61.9 100.2L430.3 417c10.8 5.4 17.7 16.5 17.7 28.6V480H292.4c-11.2 0-22.3-2.3-32.5-6.9l-125.4-55.7c-2-.9-4.3-1.4-6.5-1.4H32v-19.1c0-12.1 2-24.2 5.6-36.1 4.7-15.5 11.3-38.2 16.6-61.6 5.3-23 9.8-47.9 9.8-67.2 0-78.5-26.8-175.8-31.8-193.5-.2-.6-.2-1.1-.2-1.6 0-2.7 2.2-5 5-5h59zm0 448H32v-32h64z"
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
                  d="M29.1 0C13 0 0 13 0 29.1c0 2.6.3 5.2 1 7.7C5.8 54.9 32 156.6 32 232c0 16.9-4.2 41.6-9.7 66.4-5.4 24.7-12 48.9-16.6 64.9-3.7 13-5.8 26.4-5.8 40V488c0 13.3 10.7 24 24 24H96c13.3 0 24-10.7 24-24v-40h7c9.9 0 19.7 2.3 28.6 6.8l92.6 46.2c14.4 7.2 30.4 11 46.5 11H504c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-37.2c0-19.4-10.1-37.5-26.6-47.7l-139.5-85.8c-26-16-41.9-44.4-41.9-74.9V24c0-13.3-10.7-24-24-24zM16 448h88v40c0 4.4-3.6 8-8 8H24c-4.4 0-8-3.6-8-8zm96-16H16v-28.7c0-12 1.8-24 5.1-35.6 4.6-16.1 11.3-40.7 16.9-65.8 5.5-24.9 10-51.1 10-69.9 0-77.7-26.8-181.4-31.5-199.3-.3-1.2-.5-2.4-.5-3.5C16 21.9 21.9 16 29.1 16H112v232c0 4.4 3.6 8 8 8s8-3.6 8-8V16h120c4.4 0 8 3.6 8 8v226.4c0 36.1 18.7 69.6 49.5 88.6L445 424.8c11.8 7.3 19 20.2 19 34.1V496H294.7c-13.7 0-27.1-3.2-39.4-9.3l-92.5-46.3c-11.1-5.6-23.4-8.4-35.8-8.4z"
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
                  d="M480 464H320l-160-48H32v72c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-15.1l125 34.7c10.5 2.9 21.3 4.4 32.1 4.4H488c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M63.3 0H128v240c0 8.8 7.2 16 16 16s16-7.2 16-16V0h104c13.3 0 24 10.7 24 24v220.7c0 27.3 15.4 52.2 39.8 64.4l112.4 56.2a71.96 71.96 0 0 1 39.8 64.4V464H320l-160-48H32v-24.2c0-12.5 1.6-24.8 4.3-36.6C43.2 325.5 56 265.2 56 232c0-77.7-21.4-184.9-23.4-194.6-.5-2.3-.6-4.3-.6-6.2C32 14 46 0 63.3 0"
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
