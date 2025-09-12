import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BusIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M288 0c134.4 0 224 35.2 224 80v48c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H192v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32c-17.7 0-32-14.3-32-32V256c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32V80c0-44.8 89.6-80 224-80M128 160v96c0 17.7 14.3 32 32 32h112V128H160c-17.7 0-32 14.3-32 32m176 128h112c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H304zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64m288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64M384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M363.7 96h97.5c-15.8-17.1-62-48-173.2-48-102.2 0-154.2 30.3-172.5 48h96.8c5.5-9.6 15.9-16 27.7-16h96c11.8 0 22.2 6.4 27.7 16M464 144H312v80h152zm-352 0v80h152v-80zm0 128v104c0 13.3 10.7 24 24 24h304c13.3 0 24-10.7 24-24V272zM74.2 70C99.9 38.7 167.8 0 288 0c128.6 0 190 38.6 214.4 70.6 7.5 9.8 9.6 20.9 9.6 29.9V128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v120c0 25-12.7 47-32 59.9V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H144v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-52.1C76.7 423 64 401 64 376V256c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32v-27.6C64 91.6 66 80 74.2 70M176 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64m224 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M288 32C170.1 32 113.2 70.2 97.2 90c-.4.5-1.2 1.9-1.2 5.1V128h384V95.2c0-3.1-.8-4.9-1.3-5.6C463.9 70.1 414.8 32 288 32M96 256h176v-96H96zm208 0h176v-96H304zM96 384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-96H96zM72.3 69.9C96.5 40.1 164.2 0 288 0c132.6 0 193.2 40 216.2 70.2 6 7.9 7.8 17.2 7.8 25V384c0 23.7-12.9 44.4-32 55.4V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H128v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-56.6c-19.1-11-32-31.7-32-55.4V95.2c0-7.7 1.8-17.2 8.3-25.3M136 352a24 24 0 1 1 48 0 24 24 0 1 1-48 0m280-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48M240 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16M32 144v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16m544 0v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M288 16C163.5 16 101.6 56.5 82.9 79.7 81 82.1 80 85.5 80 89.9V96h416v-6.1c0-4.3-1-7.9-3-10.5-17.3-23-71.3-63.4-205-63.4M80 256h200V112H80zm216 0h200V112H296zM80 392c0 22.1 17.9 40 40 40h336.1c22.1 0 39.9-17.9 39.9-40V272H80zm304 56H192v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-37.4c-18.9-9-32-28.3-32-50.6V89.9c0-6.6 1.5-14.1 6.5-20.2C93.2 41.4 160.6 0 288 0c136.6 0 196.4 41.3 217.8 69.8 4.6 6.2 6.2 13.5 6.2 20.1V392c0 22.3-13.1 41.6-32 50.6V480c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32zm72.1 0H400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32zM120 448h-8v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32zm0-96a40 40 0 1 1 80 0 40 40 0 1 1-80 0m40 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m256-64a40 40 0 1 1 0 80 40 40 0 1 1 0-80m24 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0M224 48h128c4.4 0 8 3.6 8 8s-3.6 8-8 8H224c-4.4 0-8-3.6-8-8s3.6-8 8-8M0 136c0-13.3 10.7-24 24-24h8c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h8c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8c-13.3 0-24-10.7-24-24zm552-24c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24h-8c-4.4 0-8-3.6-8-8s3.6-8 8-8h8c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-8c-4.4 0-8-3.6-8-8s3.6-8 8-8z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M128 160c0-17.7 14.3-32 32-32h112v160H160c-17.7 0-32-14.3-32-32zm176 128V128h112c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32zM96 448h96v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32zm288 0h96v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 0c134.4 0 224 35.2 224 80v48c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v160c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32V80c0-44.8 89.6-80 224-80M128 160v96c0 17.7 14.3 32 32 32h112V128H160c-17.7 0-32 14.3-32 32m176 128h112c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H304zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64m288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64M384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16"
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
