import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FlaskVialIcon: React.FC<
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
                  d="M175 389.4c-9.8 16-15 34.3-15 53.1-10 3.5-20.8 5.5-32 5.5-53 0-96-43-96-96V64C14.3 64 0 49.7 0 32S14.3 0 32 0h192c17.7 0 32 14.3 32 32s-14.3 32-32 32v245.9l-49 79.6zM96 64v96h64V64zM352 0h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v150.9l117.7 191.3a69.54 69.54 0 0 1 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H261.4c-38.3 0-69.4-31.1-69.4-69.4 0-12.8 3.6-25.4 10.3-36.4L320 214.9V64c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32 64v160c0 5.9-1.6 11.7-4.7 16.8L330.5 320h171l-48.8-79.2c-3.1-5-4.7-10.8-4.7-16.8V64z"
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
                  d="m175 389.4 49-79.6V48h8c13.3 0 24-10.7 24-24S245.3 0 232 0H24C10.7 0 0 10.7 0 24s10.7 24 24 24h8v304c0 53 43 96 96 96 11.2 0 22-1.9 32-5.5 0-18.7 5.2-37.1 15-53.1M80 48h96v112H80zm0 160h96v144c0 26.5-21.5 48-48 48s-48-21.5-48-48zM312 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v169.2L202 408.9c-6.6 10.7-10 22.9-10 35.5 0 37.4 30.3 67.6 67.6 67.6h312.8c37.4 0 67.6-30.3 67.6-67.6 0-12.5-3.5-24.8-10-35.5L512 217.2V48h8c13.3 0 24-10.7 24-24S533.3 0 520 0zm152 48v176c0 4.4 1.2 8.8 3.6 12.6l51.3 83.4H313.1l51.3-83.4c2.3-3.8 3.6-8.1 3.6-12.6V48zM242.9 434.1l40.7-66.1h264.8l40.6 66.1c1.9 3.1 2.9 6.7 2.9 10.3 0 10.8-8.8 19.6-19.6 19.6H259.6c-10.9 0-19.6-8.8-19.6-19.6 0-3.6 1-7.2 2.9-10.3"
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
                  d="M224 32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16C7.2 0 0 7.2 0 16s7.2 16 16 16h16v320c0 53 43 96 96 96 11.2 0 22-1.9 32-5.5 0-14.2 3-28.3 8.8-41.2-11.1 9.2-25.3 14.7-40.8 14.7-35.3 0-64-28.7-64-64V192h128v160c0 4-.4 7.8-1 11.6l33-53.7zM64 32h128v128H64zM304 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v187.5L201.8 411.6c-6.4 10.4-9.8 22.3-9.8 34.5 0 36.4 29.5 65.9 65.9 65.9h316.2c36.4 0 65.9-29.5 65.9-65.9 0-12.2-3.4-24.1-9.8-34.5L512 219.5V32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16zm176 32v192c0 3 .8 5.9 2.4 8.4l53.9 87.6H295.7l53.9-87.6c1.6-2.5 2.4-5.4 2.4-8.4V32zM229 428.4l47-76.4h280l47 76.4c3.3 5.3 5 11.5 5 17.8 0 18.7-15.2 33.9-33.9 33.9H257.9c-18.7 0-33.9-15.2-33.9-33.9 0-6.3 1.7-12.4 5-17.8"
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
                  d="M224 16v311.1l-16 23.1V176H48v176c0 44.2 35.8 80 80 80 12.7 0 24.8-3 35.5-8.3-1.7 6.1-2.8 12.4-3.2 18.7-10.1 3.6-21 5.6-32.3 5.6-53 0-96-43-96-96V16H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h240c4.4 0 8 3.6 8 8s-3.6 8-8 8zM48 160h160V16H48zM344 0h176c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v205.5l132.8 191.9c7.3 10.5 11.2 23 11.2 35.8 0 34.7-28.1 62.9-62.9 62.9H254.9c-34.7 0-62.9-28.1-62.9-62.9 0-12.8 3.9-25.3 11.2-35.8L336 221.5V16h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8zm8 16v208c0 1.6-.5 3.2-1.4 4.6L287.3 320h257.4l-63.3-91.4c-.9-1.3-1.4-2.9-1.4-4.6V16zM216.3 422.5c-5.4 7.8-8.3 17.1-8.3 26.7 0 25.9 21 46.9 46.9 46.9h322.2c25.9 0 46.9-21 46.9-46.9 0-9.5-2.9-18.8-8.3-26.7L555.8 336H276.2z"
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
                  d="m175 389.4 49-79.6V64c17.7 0 32-14.3 32-32S241.7 0 224 0H32C14.3 0 0 14.3 0 32s14.3 32 32 32v288c0 53 43 96 96 96 11.2 0 22-1.9 32-5.5 0-18.7 5.2-37.1 15-53.1M96 64h64v96H96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M480 0H320c-17.7 0-32 14.3-32 32s14.3 32 32 32v150.9L202.3 406.2a69.54 69.54 0 0 0-10.3 36.4c0 38.3 31.1 69.4 69.4 69.4h309.2c38.3 0 69.4-31.1 69.4-69.4 0-12.8-3.6-25.4-10.3-36.4L512 214.9V64c17.7 0 32-14.3 32-32S529.7 0 512 0zm-96 224V64h64v160c0 5.9 1.6 11.7 4.7 16.8l48.8 79.2h-171l48.8-79.2c3.1-5 4.7-10.8 4.7-16.8"
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
