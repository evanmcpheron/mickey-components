import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BusSimpleIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 0c124.8 0 224 35.2 224 80v336c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-32c-17.7 0-32-14.3-32-32V80C0 35.2 99.2 0 224 0M64 128v128c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m16 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64m288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M51.5 96h345.7c-15.8-17.1-62-48-173.2-48C121.8 48 69.8 78.3 51.5 96M400 144H48v80h352zm0 128H48v104c0 13.3 10.7 24 24 24h304c13.3 0 24-10.7 24-24zM10.2 70C35.9 38.7 103.8 0 224 0c128.6 0 190 38.6 214.4 70.6 7.5 9.8 9.6 20.9 9.6 29.9V376c0 25-12.7 47-32 59.9V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H80v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-52.1C12.7 423 0 401 0 376V100.4C0 91.6 2 80 10.2 70M112 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64m224 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M33.2 90c16-19.8 72.9-58 190.8-58 126.8 0 175.9 38.1 190.7 57.5.6.8 1.3 2.5 1.3 5.6v.9H32v-.8c0-3.2.8-4.6 1.2-5.1zM32 128h384v128H32zm384 160v96c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-96zM224 0C100.2 0 32.5 40.1 8.3 69.9 1.8 77.9 0 87.4 0 95.2V384c0 23.7 12.9 44.4 32 55.4V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h320v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-56.6c19.1-11.1 32-31.7 32-55.4V95.2c0-7.8-1.8-17-7.8-25C417.2 40 356.6 0 224 0M96 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48m280-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M18.9 79.7C37.6 56.5 99.5 16 224 16c133.7 0 187.7 40.4 205 63.4 1.9 2.6 3 6.2 3 10.5V96H16v-6.1c0-4.3 1-7.8 2.9-10.2M16 112h416v144H16zm0 160h416v120c0 22.1-17.9 40-39.9 40H56c-22.1 0-40-17.9-40-40zm400 170.6c18.9-9 32-28.3 32-50.6V89.9c0-6.6-1.5-13.9-6.2-20.1C420.4 41.3 360.6 0 224 0 96.6 0 29.2 41.4 6.5 69.7 1.5 75.8 0 83.3 0 89.9V392c0 22.3 13.1 41.6 32 50.6V480c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32h192v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-37.4m-23.9 5.4h7.9v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32h56.1M48 448h64v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm48-56a40 40 0 1 0 0-80 40 40 0 1 0 0 80m-24-40a24 24 0 1 1 48 0 24 24 0 1 1-48 0m320 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-40-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 128c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM32 448h96v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm384 0v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 0c124.8 0 224 35.2 224 80v336c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V80C0 35.2 99.2 0 224 0M64 128v128c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m16 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64m288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
