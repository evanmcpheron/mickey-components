import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FortIcon: React.FC<
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
                  d="M0 16C0 7.2 7.2 0 16 0h32c8.8 0 16 7.2 16 16v48h32V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h32V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v144h128V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h32V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h32V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v160c0 20.9-13.4 38.7-32 45.3V464c0 26.5-21.5 48-48 48H384V384c0-35.3-28.7-64-64-64s-64 28.7-64 64v128H80c-26.5 0-48-21.5-48-48V221.3C13.4 214.7 0 196.9 0 176V16"
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
                  d="M48 112v48c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-48H48m176 48c0 5.5-.7 10.9-2 16h196c-1.3-5.1-2-10.5-2-16V24c0-13.3 10.7-24 24-24 7.1 0 13.4 3.1 17.8 7.9 3.8 4.3 6.2 9.9 6.2 16.1v40h40V24c0-6.2 2.3-11.8 6.2-16.1C514.6 3.1 520.9 0 528 0s13.4 3.1 17.8 7.9c3.8 4.3 6.2 9.9 6.2 16.1v40h40V24c0-6.2 2.3-11.8 6.2-16.1C602.6 3.1 608.9 0 616 0c13.3 0 24 10.7 24 24v136c0 23.7-12.9 44.4-32 55.4V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V215.4c-19.1-11-32-31.7-32-55.4V24C0 10.7 10.7 0 24 0c7.1 0 13.4 3.1 17.8 7.9C45.7 12.2 48 17.8 48 24v40h40V24c0-6.2 2.3-11.8 6.2-16.1C98.6 3.1 104.9 0 112 0s13.4 3.1 17.8 7.9c3.9 4.3 6.2 9.9 6.2 16.1v40h40V24c0-6.2 2.3-11.8 6.2-16.1C186.6 3.1 192.9 0 200 0c13.3 0 24 10.7 24 24v136m160 304h64V224H192v240h64v-80c0-35.3 28.7-64 64-64s64 28.7 64 64zm112 0h48c8.8 0 16-7.2 16-16V224h-64zm-400 0h48V224H80v224c0 8.8 7.2 16 16 16m464-288h16c8.8 0 16-7.2 16-16v-48H464v48c0 8.8 7.2 16 16 16z"
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
                  d="M32 96h160v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96M0 160c0 23.7 12.9 44.4 32 55.4V448c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V215.4c19.1-11.1 32-31.7 32-55.4V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v144c0 11.7 3.1 22.6 8.6 32H215.4c5.4-9.4 8.6-20.3 8.6-32V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64V16c0-8.8-7.2-16-16-16S96 7.2 96 16v48H32V16c0-8.8-7.2-16-16-16S0 7.2 0 16v144m400 320v-80c0-44.2-35.8-80-80-80s-80 35.8-80 80v80h-48V224h256v256zm80-256h96v224c0 17.7-14.3 32-32 32h-64zM64 448V224h96v256H96c-17.7 0-32-14.3-32-32m304 32h-96v-80c0-26.5 21.5-48 48-48s48 21.5 48 48zm240-320c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V96h160v64"
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
                  d="M176 72h-48V24c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v48H48V24c0-4.4-3.6-8-8-8H24c-4.4 0-8 3.6-8 8v120c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V24c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v48m-16-48c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v120c0 20.9-13.4 38.7-32 45.3V208h256v-18.7c-18.6-6.6-32-24.4-32-45.3V24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v32h16V24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v32h16V24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v120c0 20.9-13.4 38.7-32 45.3V456c0 30.9-25.1 56-56 56H88c-30.9 0-56-25.1-56-56V189.3C13.4 182.7 0 164.9 0 144V24C0 10.7 10.7 0 24 0h16c13.3 0 24 10.7 24 24v32h16V24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v32h16V24m288 200H192v272h48V392c0-44.2 35.8-80 80-80s80 35.8 80 80v104h48zm-272-32H48v264c0 22.1 17.9 40 40 40h88zm96 304h112V392c0-35.3-28.7-64-64-64s-64 28.7-64 64v104zm280 0c22.1 0 40-17.9 40-40V192H464v304zM464 72V24c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v120c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V24c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v48h-48V24c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v48h-48"
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
                  d="M16 0C7.2 0 0 7.2 0 16v160c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-32V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H64V16c0-8.8-7.2-16-16-16zm432 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v160c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-32V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160H256v16c0 26.5-21.5 48-48 48H48c-5.6 0-11-1-16-2.7V464c0 26.5 21.5 48 48 48h176V384c0-35.3 28.7-64 64-64s64 28.7 64 64v128h176c26.5 0 48-21.5 48-48V221.3c-5 1.8-10.4 2.7-16 2.7H432c-26.5 0-48-21.5-48-48z"
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
