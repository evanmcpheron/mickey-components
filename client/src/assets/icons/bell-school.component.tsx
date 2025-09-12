import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BellSchoolIcon: React.FC<
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
                  d="M208 128a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 288a208 208 0 1 0 0-416 208 208 0 1 0 0 416m48-208a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 240c-54 0-103.9-17.9-144-48v64c0 26.5 21.5 48 48 48h280c43.4 0 80.1-28.8 92-68.3 16.6-7.6 28-24.3 28-43.7 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15.5 7.3 29.2 18.7 38-8 15.4-24.1 26-42.7 26h-40v-64c-40.1 30.1-90 48-144 48"
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
                  d="M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320m144 310.1c39.4-37.9 64-91.1 64-150.1C416 93.1 322.9 0 208 0S0 93.1 0 208c0 59 24.6 112.2 64 150.1V448c0 35.3 28.7 64 64 64h288c39.2 0 71.1-31.4 72-70.4 14.4-8.3 24-23.8 24-41.6 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 17.7 9.6 33.2 24 41.5-.8 12.5-11.2 22.5-24 22.5h-66c1.3-5.1 2-10.5 2-16zM288 464H128c-8.8 0-16-7.2-16-16v-55.4c28.7 15 61.4 23.4 96 23.4s67.3-8.5 96-23.4V448c0 8.8-7.2 16-16 16m-80-304a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192"
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
                  d="M208 384a176 176 0 1 0 0-352 176 176 0 1 0 0 352m0 32c-41.2 0-79.7-12-112-32.7V448c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-64.7C287.7 404 249.2 416 208 416m64 96H128c-35.3 0-64-28.7-64-64v-89.9C24.6 320.2 0 267 0 208 0 93.1 93.1 0 208 0s208 93.1 208 208c0 59-24.6 112.2-64 150.1V448c0 11.7-3.1 22.6-8.6 32H416c17.7 0 32-14.3 32-32v-2.7c-18.6-6.6-32-24.4-32-45.3 0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3v2.7c0 35.3-28.7 64-64 64H272m-16-304a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-128 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0m336 208a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M208 400a192 192 0 1 0 0-384 192 192 0 1 0 0 384m0 16c-48.3 0-92.7-16.4-128-44v92c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-92c-35.3 27.6-79.7 44-128 44m64 96H112c-26.5 0-48-21.5-48-48V358.1C24.6 320.2 0 267 0 208 0 93.1 93.1 0 208 0s208 93.1 208 208c0 59-24.6 112.2-64 150.1V464c0 12.3-4.6 23.5-12.2 32H432c13.3 0 24-10.7 24-24v-24.7c-22.7-3.8-40-23.6-40-47.3 0-26.5 21.5-48 48-48s48 21.5 48 48c0 23.8-17.3 43.5-40 47.3V472c0 22.1-17.9 40-40 40H272m-64-240a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160m288 272a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M288 208a80 80 0 1 0-160 0 80 80 0 1 0 160 0M0 208a208 208 0 1 1 416 0 208 208 0 1 1-416 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M208 160a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 256c55.9 0 106.6-22 144-57.9V464h40c18.6 0 34.7-10.6 42.7-26-11.4-8.8-18.7-22.5-18.7-38 0-26.5 21.5-48 48-48s48 21.5 48 48c0 19.4-11.5 36.1-28 43.7-11.9 39.5-48.6 68.3-92 68.3H112c-26.5 0-48-21.5-48-48V358.1C101.4 394 152.1 416 208 416"
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
