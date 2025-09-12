import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MapIcon: React.FC<
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
                  d="m384 476.1-192-54.9V35.9l192 54.9zm32-1.2V88.4l127.1-50.9c15.8-6.3 32.9 5.3 32.9 22.3v334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1 160 37.2v386.4L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3"
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
                  d="M565.6 36.2C572.1 40.7 576 48.1 576 56v336c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1.3l-183.9-61.2-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3l183.9 61.2 160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5v284.7l120-45.7V90.8zm312 286.2V137.3l-144-48v285.4zm48-1.5 120-45.7V90.8l-120 45.7z"
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
                  d="M170.1 33.1c3.3-1.3 6.9-1.5 10.3-.5l218.7 62.5 144-57.6c15.8-6.3 32.9 5.3 32.9 22.3v334.8c0 9.8-6 18.6-15.1 22.3l-155 62c-3.3 1.3-6.9 1.5-10.3.5l-218.7-62.5-144 57.6C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3zM32 122.8v317.6l128-51.2V71.6zm352 320V124.1L192 69.2v318.7zm32-2.4 128-51.2V71.6l-128 51.2z"
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
                  d="M181.3 32.5c1.6-.6 3.4-.6 5.1-.1l205.4 63.2 141.3-51.4C554 36.6 576 52.1 576 74.3v316.9c0 13.5-8.4 25.5-21.1 30.1l-160.2 58.2c-1.6.6-3.4.6-5.1.1l-205.4-63.2-141.3 51.4C22.1 475.4 0 459.9 0 437.7V120.8c0-13.5 8.4-25.5 21.1-30.1zM26.5 105.8c-6.3 2.3-10.5 8.3-10.5 15v316.9c0 11.1 11 18.8 21.5 15L176 402.4v-351zM384 461.2V109.9L192 50.8v351.3zm16-.6 149.5-54.4c6.3-2.3 10.5-8.3 10.5-15V74.3c0-11.1-11-18.8-21.5-15L400 109.6z"
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
                  d="M192.1 416 384 480V96L192 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 114.5V464c0 11.3 11.5 19 22 14.8L192 416l-.1-384L10.1 99.6C4 102 0 107.9 0 114.5m554-81.3L384 96v384l181.9-67.6c6.1-2.4 10.1-8.3 10.1-14.9V48c0-11.3-11.4-19.1-22-14.9z"
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
