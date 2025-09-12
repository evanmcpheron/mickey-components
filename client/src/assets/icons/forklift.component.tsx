import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ForkliftIcon: React.FC<
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
                  d="M48 160h48V48c0-26.5 21.5-48 48-48h148.7c20.3 0 38.4 12.8 45.2 31.9l75.3 210.8c1.8 5.2 2.8 10.6 2.8 16.1v85.7c19.6 17.6 32 43.1 32 71.6 0 53-43 96-96 96s-96-43-96-96h-64c0 53-43 96-96 96s-96-43-96-96V208c0-26.5 21.5-48 48-48m208 96h94L281.4 64H160v96zM96 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96m256 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96M544 32v352h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V32c0-17.7 14.3-32 32-32s32 14.3 32 32"
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
                  d="M80 160h16V40c0-22.1 17.9-40 40-40h157c16.6 0 31.5 10.3 37.4 25.8l83 218.9c1.7 4.5 2.6 9.3 2.6 14.2v85.5c19.6 17.6 32 43.1 32 71.6 0 53-43 96-96 96s-96-43-96-96h-64c0 53-43 96-96 96S0 469 0 416V240c0-44.2 35.8-80 80-80m160 80h120.3L287.4 48H144v123.4zm0 48c-10 0-19.8-3.1-27.9-8.9L112.6 208H80c-17.7 0-32 14.3-32 32v92.8c14.1-8.1 30.5-12.8 48-12.8 35.5 0 66.6 19.3 83.2 48h89.7c16.6-28.7 47.6-48 83.2-48 5.5 0 10.8.5 16 1.3V288zM96 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96m256 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96M528 24v376h88c13.3 0 24 10.7 24 24s-10.7 24-24 24H504c-13.3 0-24-10.7-24-24V24c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M160 0c-17.7 0-32 14.3-32 32v128H80c-44.2 0-80 35.8-80 80v176c0 53 43 96 96 96s96-43 96-96h64c0 53 43 96 96 96s96-43 96-96c0-28.4-12.4-54-32-71.6v-84.9c0-4.7-1-9.3-3-13.5L306.8 18.5C301.6 7.2 290.2 0 277.8 0zm-32 192h19.5l94.8 87.5c5.9 5.5 13.7 8.5 21.7 8.5h120v37.5c-10-3.5-20.8-5.5-32-5.5-41.8 0-77.4 26.7-90.5 64h-75c-13.2-37.3-48.7-64-90.5-64-24.6 0-47 9.2-64 24.4V240c0-26.5 21.5-48 48-48zm136 64-104-96V32h117.8l104.5 224zm88 224a64 64 0 1 1 0-128 64 64 0 1 1 0 128m-256 0a64 64 0 1 1 0-128 64 64 0 1 1 0 128M512 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v416c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H512z"
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
                  d="M144 40c0-13.3 10.7-24 24-24h100.5c9 0 17.2 5 21.3 13l103 198.7c2 3.9 6.9 5.5 10.8 3.4s5.5-6.9 3.4-10.8L304.1 21.6C297.2 8.3 283.5 0 268.5 0H168c-22.1 0-40 17.9-40 40v88c0 4.4 3.6 8 8 8s8-3.6 8-8zM96 336a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 176c53 0 96-43 96-96h64c0 53 43 96 96 96s96-43 96-96c0-28.4-12.4-54-32-71.6V296c0-22.1-17.9-40-40-40H264l-104.7-83.7c-9.9-7.9-22.3-12.3-35-12.3H64c-35.3 0-64 28.7-64 64v192c0 53 43 96 96 96m0-192c-33.4 0-62.8 17-80 42.9V224c0-26.5 21.5-48 48-48h60.4c9.1 0 17.9 3.1 25 8.8L254 268.5c2.8 2.3 6.4 3.5 10 3.5h112c13.3 0 24 10.7 24 24v36.8c-14.1-8.2-30.5-12.8-48-12.8-47.6 0-87.1 34.6-94.7 80h-66.6c-7.6-45.4-47.1-80-94.7-80m256 16a80 80 0 1 1 0 160 80 80 0 1 1 0-160M496 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v432c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H496z"
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
                  d="M544 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v384c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64zM160 432a80 80 0 1 0-160 0 80 80 0 1 0 160 0m256 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="m160 160 96 96h94L281.4 64H160zm-64 0V48c0-26.5 21.5-48 48-48h148.7c20.3 0 38.4 12.8 45.2 31.9l75.3 210.8c1.8 5.2 2.8 10.6 2.8 16.1v94.8c-20.3-20.7-48.7-33.6-80-33.6-56.4 0-103.1 41.7-110.9 96h-34.2c-7.8-54.3-54.4-96-110.9-96-31.3 0-59.7 12.9-80 33.6V208c0-26.5 21.5-48 48-48z"
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
