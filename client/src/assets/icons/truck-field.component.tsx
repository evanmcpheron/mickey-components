import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckFieldIcon: React.FC<
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
                  d="M32 96c0-35.3 28.7-64 64-64h224c23.7 0 44.4 12.9 55.4 32h51.8c25.3 0 48.2 14.9 58.5 38l52.8 118.8c.5 1.1.9 2.1 1.3 3.2h4.2c35.3 0 64 28.7 64 64v32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32v-32c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32zm352 128h85.9l-42.7-96H384zM160 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96m368-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M336 80c8.8 0 16 7.2 16 16v240H243.2c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48H64V96c0-8.8 7.2-16 16-16zM16 283.7v53.7C6.7 340.7 0 349.5 0 360s6.7 19.3 16 22.6v1.4h48c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-48c0-35.3-28.7-64-64-64h-5l-.3-.7-52.3-111.1c-9.2-19.6-29-32.2-50.7-32.2H398c-7.1-27.6-32.2-48-62-48H80c-35.3 0-64 28.7-64 64v36.3C6.4 137.8 0 148.2 0 160v96c0 11.8 6.4 22.2 16 27.7M160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96m325.9-112H400v-96h35.7c3.1 0 5.9 1.8 7.2 4.6zM528 384a48 48 0 1 1-96 0 48 48 0 1 1 96 0"
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
                  d="M320 64c17.7 0 32 14.3 32 32v256H250.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64H64V96c0-17.7 14.3-32 32-32zM32 128c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-96c0-35.3-28.7-64-64-64h-22.4l-42.4-78.8C470.8 97.7 454.5 88 436.9 88h-53.4c-3.9-31.6-30.9-56-63.5-56H96c-35.3 0-64 28.7-64 64zm352 64v-72h52.9c5.9 0 11.3 3.2 14.1 8.4l34.2 63.6zm5.5 160H384V224h160c17.7 0 32 14.3 32 32v96h-5.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64M96 384a64 64 0 1 1 128 0 64 64 0 1 1-128 0m384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M320 48c26.5 0 48 21.5 48 48v272H244.7c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64H48V96c0-26.5 21.5-48 48-48zM32 288v80H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h64.4c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8h144.8c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8H632c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-96c0-35.3-28.7-64-64-64h-27.1L472 118.1c-6.8-13.5-20.6-22.1-35.8-22.1H384c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64v32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32m0-16c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16zm467.1-64H384v-96h52.2c9.1 0 17.4 5.1 21.5 13.3zM384 368V224h160c26.5 0 48 21.5 48 48v96h-27.3c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64zM88 392a72 72 0 1 1 144 0 72 72 0 1 1-144 0m392-72a72 72 0 1 1 0 144 72 72 0 1 1 0-144"
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
                  d="M176 480a80 80 0 1 0 0-160 80 80 0 1 0 0 160m288 0a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 96c0-35.3 28.7-64 64-64h224c23.7 0 44.4 12.9 55.4 32h51.8c25.3 0 48.2 14.9 58.5 38l52.8 118.8c.5 1.1.9 2.1 1.3 3.2h4.2c35.3 0 64 28.7 64 64v32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-33.1c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96h-66.2c-7.8-54.3-54.4-96-110.9-96S72.9 329.7 65.1 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32v-32c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32zm352 128h85.9l-42.7-96H384z"
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
