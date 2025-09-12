import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CrosshairsIcon: React.FC<
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
                  d="M256 0c17.7 0 32 14.3 32 32v10.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32h-10.4c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-10.4C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h10.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32M107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6c-12.5-58.3-58.3-104.1-116.6-116.6V128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-20.6c-58.3 12.5-104.1 58.3-116.6 116.6H128c17.7 0 32 14.3 32 32s-14.3 32-32 32zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M256 0c13.3 0 24 10.7 24 24v17.3C380.1 52.4 459.6 131.9 470.7 232H488c13.3 0 24 10.7 24 24s-10.7 24-24 24h-17.3C459.6 380.1 380.1 459.6 280 470.7V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-17.3C131.9 459.6 52.4 380.1 41.3 280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h17.3C52.4 131.9 131.9 52.4 232 41.3V24c0-13.3 10.7-24 24-24M89.7 280c10.5 73.6 68.7 131.8 142.3 142.3V392c0-13.3 10.7-24 24-24s24 10.7 24 24v30.3c73.6-10.5 131.8-68.7 142.3-142.3H392c-13.3 0-24-10.7-24-24s10.7-24 24-24h30.3C411.8 158.4 353.6 100.2 280 89.7V120c0 13.3-10.7 24-24 24s-24-10.7-24-24V89.7C158.4 100.2 100.2 158.4 89.7 232H120c13.3 0 24 10.7 24 24s-10.7 24-24 24zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M256 0c8.8 0 16 7.2 16 16v32.6c102.1 7.8 183.6 89.3 191.4 191.4H496c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32.6c-7.8 102.1-89.3 183.6-191.4 191.4V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32.6C137.9 455.6 56.4 374.1 48.6 272H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h32.6C56.4 137.9 137.9 56.4 240 48.6V16c0-8.8 7.2-16 16-16M80.7 272c7.6 84.4 74.8 151.7 159.3 159.3V384c0-8.8 7.2-16 16-16s16 7.2 16 16v47.3c84.4-7.6 151.7-74.8 159.3-159.3H384c-8.8 0-16-7.2-16-16s7.2-16 16-16h47.3C423.7 155.6 356.4 88.3 272 80.7V128c0 8.8-7.2 16-16 16s-16-7.2-16-16V80.7C155.6 88.3 88.3 155.6 80.7 240H128c8.8 0 16 7.2 16 16s-7.2 16-16 16zM256 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v40.2C139.5 52.3 52.3 139.5 48.2 248H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h40.2c4.1 108.5 91.3 195.7 199.8 199.8V504c0 4.4 3.6 8 8 8s8-3.6 8-8v-40.2c108.5-4.1 195.7-91.3 199.8-199.8H504c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40.2C459.7 139.5 372.5 52.3 264 48.2zM120 264c4.4 0 8-3.6 8-8s-3.6-8-8-8H64.2c4-99.7 84.1-179.8 183.8-183.8V120c0 4.4 3.6 8 8 8s8-3.6 8-8V64.2c99.7 4.1 179.8 84.2 183.8 183.8H392c-4.4 0-8 3.6-8 8s3.6 8 8 8h55.8c-4.1 99.7-84.2 179.8-183.8 183.8V392c0-4.4-3.6-8-8-8s-8 3.6-8 8v55.8c-99.7-4-179.8-84.1-183.8-183.8zm112-8a24 24 0 1 1 48 0 24 24 0 1 1-48 0m64 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0"
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
                  d="M42.4 224C56.3 130.3 130.3 56.3 224 42.4v65c-58.3 12.5-104.1 58.3-116.6 116.6zm0 64h65c12.5 58.3 58.4 104.1 116.6 116.6v65C130.3 455.7 56.3 381.7 42.4 288M288 469.6v-65c58.3-12.5 104.1-58.4 116.6-116.6h65c-13.9 93.7-88 167.7-181.6 181.6M469.6 224h-65c-12.5-58.3-58.3-104.1-116.6-116.6v-65c93.7 13.9 167.7 88 181.6 181.6"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 0c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32m-32 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32m-224 64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32m-128-64H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32"
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
