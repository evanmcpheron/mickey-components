import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ConveyorBeltIcon: React.FC<
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
                  d="M176 0h80v112c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8L320 99.2l39.1 26.1c4.9 3.3 11.2 3.6 16.4.8s8.5-8.2 8.5-14.1V0h80c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48M0 416c0-53 43-96 96-96h448c53 0 96 43 96 96s-43 96-96 96H96c-53 0-96-43-96-96m160 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m224-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M384 48h80v160H176V48h80v80c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8l39.1-26.1 39.1 26.1c4.9 3.3 11.2 3.6 16.4.8s8.5-8.2 8.5-14.1zm-256 0v160c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48m464 352c0 35.3-28.7 64-64 64H112c-35.3 0-64-28.7-64-64s28.7-64 64-64h416c35.3 0 64 28.7 64 64M112 288C50.1 288 0 338.1 0 400s50.1 112 112 112h416c61.9 0 112-50.1 112-112s-50.1-112-112-112zm48 112a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m224-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M464 32c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h64v112c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L320 116l54.4 40.8c4.8 3.6 11.3 4.2 16.8 1.5S400 150 400 144V32zm-192 0h96v80l-38.4-28.8a15.9 15.9 0 0 0-19.2 0L272 112zM176 0c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm432 416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64s28.7-64 64-64h448c35.3 0 64 28.7 64 64M96 320c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm56 96a24 24 0 1 0-48 0 24 24 0 1 0 48 0m168 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m216-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M464 16c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32V48c0-17.7 14.3-32 32-32h80v120c0 3.1 1.8 6 4.7 7.3s6.2.8 8.5-1.2L320 98.5l50.8 43.5c2.4 2 5.7 2.5 8.6 1.2s4.7-4.1 4.7-7.3V16h80zm-192 0h96v102.6l-42.8-36.7c-3-2.6-7.4-2.6-10.4 0L272 118.6zM176 0c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm448 416c0 44.2-35.8 80-80 80H96c-44.2 0-80-35.8-80-80s35.8-80 80-80h448c44.2 0 80 35.8 80 80M96 320c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm16 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m176-48a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M256 0h128v112c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L320 99.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4.8s-8.5-8.2-8.5-14.1V0M0 416c0-53 43-96 96-96h448c53 0 96 43 96 96s-43 96-96 96H96c-53 0-96-43-96-96m160 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m224-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 0h-80c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48h-80v112c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L320 99.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4.8s-8.5-8.2-8.5-14.1z"
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
