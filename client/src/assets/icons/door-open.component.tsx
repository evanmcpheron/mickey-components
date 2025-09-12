import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DoorOpenIcon: React.FC<
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
                  d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1L100.3 46C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h288V32m-64 224c0 17.7-10.7 32-24 32s-24-14.3-24-32 10.7-32 24-32 24 14.3 24 32m96-128h96v352c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V128c0-35.3-28.7-64-64-64h-96z"
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
                  d="M272 49.7V464H112V92.8zM320 464V42.4C320 19 301 0 277.6 0c-3.7 0-7.4.5-11 1.5L99.5 46.4C78.6 52.1 64 71.1 64 92.8V464H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h296zm-96-176c13.2 0 24-14.4 24-32s-10.8-32-24-32-24 14.4-24 32 10.7 32 24 32m128-176h104c4.4 0 8 3.6 8 8v368c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40V120c0-30.9-25.1-56-56-56H352z"
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
                  d="M288 480H96V86.2c0-7.5 5.1-13.9 12.4-15.6l166-38.3c.8-.2 1.7-.3 2.5-.3 6.1 0 11.1 5 11.1 11.1zm32 0V43.1C320 19.3 300.7 0 276.9 0c-3.3 0-6.5.4-9.7 1.1l-166 38.3C79.4 44.4 64 63.8 64 86.2V480H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h304zm-88-192c13.2 0 24-14.4 24-32s-10.8-32-24-32-24 14.4-24 32 10.7 32 24 32M464 64H352v32h112c8.8 0 16 7.2 16 16v384c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V112c0-26.5-21.5-48-48-48"
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
                  d="M304 496H80V86.2c0-14.9 10.3-27.8 24.8-31.2l166-38.3c2-.5 4-.7 6.1-.7 15 0 27.1 12.1 27.1 27.1zM64 86.2V496H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h312V43.1C320 19.3 300.7 0 276.9 0c-3.3 0-6.5.4-9.7 1.1l-166 38.3C79.4 44.4 64 63.8 64 86.2M472 80c13.3 0 24 10.7 24 24v400c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56V104c0-22.1-17.9-40-40-40H352v16zM232 216c-9.7 0-17.9 5.3-23.4 12.6s-8.6 17-8.6 27.4 3.2 20.1 8.6 27.4S222.3 296 232 296s17.9-5.3 23.4-12.6 8.6-17 8.6-27.4-3.2-20.1-8.6-27.4S241.7 216 232 216m-16 40c0-7.2 2.2-13.5 5.4-17.8s7-6.2 10.6-6.2 7.4 1.9 10.6 6.2 5.4 10.6 5.4 17.8-2.2 13.5-5.4 17.8-7 6.2-10.6 6.2-7.4-1.9-10.6-6.2-5.4-10.6-5.4-17.8"
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
                  d="M307.7 6.8c7.8 6 12.3 15.3 12.3 25.2v480H64V92.5c0-22 15-41.2 36.4-46.6L280.2 1c9.6-2.4 19.7-.2 27.5 5.8M232 288c13.3 0 24-14.3 24-32s-10.7-32-24-32-24 14.3-24 32 10.7 32 24 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 128h128v352c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V128c0-35.3-28.7-64-64-64H320zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v-64zm200-160c13.3 0 24-14.3 24-32s-10.7-32-24-32-24 14.3-24 32 10.7 32 24 32"
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
