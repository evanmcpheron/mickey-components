import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FileShieldIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v47l-92.8 37.1c-21.3 8.5-35.2 29.1-35.2 52 0 56.6 18.9 148 94.2 208.3-9 4.8-19.3 7.6-30.2 7.6H64c-35.3 0-64-28.7-64-64zm384 64H256V0zm39.1 97.7c5.7-2.3 12.1-2.3 17.8 0l120 48c9.1 3.7 15.1 12.5 15.1 22.3 0 63.3-25.9 168.8-134.8 214.2-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3zM527.4 312 432 273.8v187.9c68.2-33 91.5-99 95.4-149.7"
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
                  d="M64 464h246.7c11 14.4 24.1 28.1 39.5 40.4-9 4.8-19.3 7.6-30.2 7.6H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h165.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V207l-48 19.2V160h-80c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16m359.1-238.3c5.7-2.3 12.1-2.3 17.8 0l120 48c9.1 3.7 15.1 12.5 15.1 22.3 0 63.3-25.9 168.8-134.8 214.2-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3zM527.4 312 432 273.8v187.9c68.2-33 91.5-99 95.4-149.7"
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
                  d="M320 480c1.3 0 2.6-.1 3.9-.2 7.9 8.6 16.6 16.9 26.3 24.7-9 4.8-19.3 7.6-30.2 7.6H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h156.1C232.8 0 245 5.1 254 14.1l115.9 115.8c9 9 14.1 21.2 14.1 33.9V207l-32 12.8V192H240c-26.5 0-48-21.5-48-48V32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32zm31.5-320c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16zm-31.4 141.4c1.3 53 22.6 129.5 95.9 170V263zm223.9 0L448 263v208.4c73.4-40.5 94.6-117.1 95.9-170zm-103-75.7 120 48c9 3.7 15 12.5 15 22.3 0 63.3-25.9 168.8-134.8 214.2-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48c5.7-2.3 12.1-2.3 17.8 0z"
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
                  d="M320 496H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h140.1c1.3 0 2.6.1 3.9.2V136c0 22.1 17.9 40 40 40h119.8c.2 1.3.2 2.6.2 3.9v33.6l16-6.4v-27.2c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c10.9 0 21.2-2.7 30.2-7.6-4.6-3.7-9.1-7.6-13.3-11.5-5.3 2-11 3.1-16.9 3.1m41.1-336H248c-13.3 0-24-10.7-24-24V22.9q1.5 1.2 2.7 2.4l131.9 132q1.35 1.35 2.4 2.7zM309 288.6l115-46v250.7c-96.1-42.9-120-138-120-197.3 0-3.3 2-6.2 5-7.4m251 7.4c0 59.3-23.9 154.4-120 197.3V242.6l115 46c3 1.2 5 4.2 5 7.4m-119.1-70.3c-5.7-2.3-12.1-2.3-17.8 0l-120 48C294 277.4 288 286.2 288 296c0 63.3 25.9 168.8 134.8 214.2 5.9 2.5 12.6 2.5 18.5 0C550.1 464.8 576 359.3 576 296c0-9.8-6-18.6-15.1-22.3z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v47l-92.8 37.1c-21.3 8.5-35.2 29.1-35.2 52 0 56.6 18.9 148 94.2 208.3-9 4.8-19.3 7.6-30.2 7.6H64c-35.3 0-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160H256c-17.7 0-32-14.3-32-32V0zm39.1 65.7c5.7-2.3 12.1-2.3 17.8 0l120 48c9.1 3.7 15.1 12.5 15.1 22.3 0 63.3-25.9 168.8-134.8 214.2-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3zM527.4 312 432 273.8v187.9c68.2-33 91.5-99 95.4-149.7"
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
