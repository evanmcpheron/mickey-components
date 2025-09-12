import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WindsockIcon: React.FC<
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
                  d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V320h64v8.6c0 20.3 18.7 35.5 38.5 31.3l41.5-8.6V64.7L166.5 56C146.6 51.9 128 67 128 87.3V96H64zm64 112v128H64V144zm144-66v260l96-20V98zm214.5 215.3c14.8-3.1 25.5-16.2 25.5-31.3V154c0-15.2-10.6-28.2-25.5-31.3L432 111.3v193.4z"
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
                  d="M24 0c13.3 0 24 10.7 24 24v72h80v-8.6c0-20.3 18.7-35.5 38.5-31.3l320 66.7c14.8 3.1 25.5 16.2 25.5 31.3V262c0 15.2-10.6 28.2-25.5 31.3l-320 66.7c-19.9 4.1-38.5-11-38.5-31.3V320H48v168c0 13.3-10.7 24-24 24S0 501.3 0 488V24C0 10.7 10.7 0 24 0m24 144v128h80V144zm368 115 48-10v-82l-48-10zm-48 10V147l-80-16.7v155.3zm-128 26.6V120.4L176 107v202l64-13.3z"
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
                  d="M16 0c8.8 0 16 7.2 16 16v112h64V86.7c0-20.1 18.3-35.2 38-31.4L486 123c15.1 2.9 26 16.1 26 31.4v107.2c0 15.3-10.9 28.5-26 31.4l-352 67.7c-19.7 3.8-38-11.3-38-31.4V288H32v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V16C0 7.2 7.2 0 16 0m16 160v96h64v-96zm96-73.3v242.6l96-18.5V105.2zm128 24.6v193.3L384 280V136l-128-24.6zm160 30.8v131.8l64-12.3V154.5l-64-12.3z"
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
                  d="M8 0c4.4 0 8 3.6 8 8v120h80V86.7c0-20.1 18.3-35.2 38-31.4L486 123c15.1 2.9 26 16.1 26 31.4v107.2c0 15.3-10.9 28.5-26 31.4l-352 67.7c-19.7 3.8-38-11.3-38-31.4V288H16v216c0 4.4-3.6 8-8 8s-8-3.6-8-8V8c0-4.4 3.6-8 8-8m8 144v128h80V144zm96 185.3c0 10 9.2 17.6 19 15.7l85-16.3V87.4L131 71c-9.9-1.9-19 5.7-19 15.7v242.6m120-3.7 144-27.7V118.1L232 90.4zm160-204.4v173.6l91-17.5c7.5-1.4 13-8 13-15.7V154.4c0-7.7-5.4-14.3-13-15.7z"
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
                  d="M272 78v260l96-20V98zm214.5 215.3c14.8-3.1 25.5-16.2 25.5-31.3V154c0-15.2-10.6-28.2-25.5-31.3L432 111.3v193.4zM208 64.7 166.5 56C146.6 51.9 128 67 128 87.3V96H64v48h64v128H64v48h64v8.6c0 20.3 18.7 35.5 38.5 31.3l41.5-8.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32zm144 32.7v286.6l64-13.3V78zM368 318l64-13.3V111.3L368 98z"
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
