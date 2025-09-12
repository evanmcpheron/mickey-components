import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VanShuttleIcon: React.FC<
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
                  d="M64 104v88h96V96H72c-4.4 0-8 3.6-8 8m482 88-80.9-96H384v96zm-226 0V96h-96v96zm272 192h-16c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V104c0-39.8 32.2-72 72-72h393.1c18.9 0 36.8 8.3 49 22.8L625 186.5c9.7 11.5 15 26.1 15 41.2V336c0 26.5-21.5 48-48 48m-64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-368 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M48 96v96h128V80H64c-8.8 0-16 7.2-16 16m0 144v80c0 8.8 7.2 16 16 16h12.8c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48h153.6c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48H576c8.8 0 16-7.2 16-16v-80H48m176-48h112V80H224zm160 0h180.1L471.3 82.8c-1.5-1.8-3.7-2.8-6.1-2.8H384zm256 128c0 35.3-28.7 64-64 64 0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h401.2c16.4 0 32 7.2 42.7 19.7l118.8 139.8c8.6 10.1 13.3 23 13.3 36.3zm-112 64a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-368 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M32 88v104h128V64H56c-13.3 0-24 10.7-24 24m0 136v104c0 13.3 10.7 24 24 24h13.5c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64h139c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H584c13.3 0 24-10.7 24-24V224H32m160-32h160V64H192zm192 0h204.1L477.6 69.3c-3-3.4-7.4-5.3-11.9-5.3H384zm200 192h-8c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96h-8c-30.9 0-56-25.1-56-56V88c0-30.9 25.1-56 56-56h409.7c13.6 0 26.6 5.8 35.7 15.9l126.3 140.3c7.9 8.8 12.3 20.3 12.3 32.1V328c0 30.9-25.1 56-56 56m-40 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-384 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M16 80v112h144V48H48c-17.7 0-32 14.3-32 32m0 128v128c0 17.7 14.3 32 32 32h17.3c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80h130.6c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80H592c17.7 0 32-14.3 32-32V212.8c0-1.6-.2-3.2-.5-4.8H16m160-16h192V48H176zm208 0h229.4L483.7 55.5c-4.5-4.8-10.8-7.5-17.4-7.5H384zm208 192h-16c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h418.3c11 0 21.4 4.5 29 12.4L629 185.2c7.1 7.4 11 17.3 11 27.6V336c0 26.5-21.5 48-48 48m-32 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-400 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
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
                  d="M160 480a80 80 0 1 0 0-160 80 80 0 1 0 0 160m320 0a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 104c0-4.4 3.6-8 8-8h88v96H64zm482 88H384V96h81.1zm-226 0h-96V96h96zM72 32C32.2 32 0 64.2 0 104v232c0 26.5 21.5 48 48 48h1.1c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96h98.3c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96h1c26.5 0 48-21.5 48-48V227.7c0-15.1-5.3-29.7-15-41.2L514.1 54.8a63.95 63.95 0 0 0-49-22.8H72"
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
