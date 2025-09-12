import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChargingStationIcon: React.FC<
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
                  d="M96 0C60.7 0 32 28.7 32 64v384c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32V304h16c22.1 0 40 17.9 40 40v32c0 39.8 32.2 72 72 72s72-32.2 72-72V252.3c32.5-10.2 56-40.5 56-76.3v-32c0-8.8-7.2-16-16-16h-16V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-32V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-16c-8.8 0-16 7.2-16 16v32c0 35.8 23.5 66.1 56 76.3V376c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32c0-48.6-39.4-88-88-88h-16V64c0-35.3-28.7-64-64-64zm120.9 82.7c6 4 8.5 11.5 6.3 18.3l-25 74.9H256c6.7 0 12.7 4.2 15 10.4s.5 13.3-4.6 17.7l-112 96c-5.5 4.7-13.4 5.1-19.3 1.1s-8.5-11.5-6.3-18.3l25-74.9H96c-6.7 0-12.7-4.2-15-10.4s-.5-13.3 4.6-17.7l112-96c5.5-4.7 13.4-5.1 19.3-1.1"
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
                  d="M96 48c-8.8 0-16 7.2-16 16v400h192V64c0-8.8-7.2-16-16-16zM32 464V64C32 28.7 60.7 0 96 0h160c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v28c0 15.5 12.5 28 28 28s28-12.5 28-28V268.3c-32.5-10.2-56-40.5-56-76.3v-40c0-13.3 10.7-24 24-24h8V80c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32V80c0-8.8 7.2-16 16-16s16 7.2 16 16v48h8c13.3 0 24 10.7 24 24v40c0 35.8-23.5 66.1-56 76.3V372c0 42-34 76-76 76s-76-34-76-76v-28c0-22.1-17.9-40-40-40h-8v160h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm432-272c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h-64zm-241.1-74.1L199.6 176H240c6.7 0 12.8 4.2 15 10.6s.4 13.4-4.8 17.7l-96 80c-5.6 4.7-13.7 5-19.6.7s-8.2-12.1-5.5-18.9l23.3-58.1H112c-6.7 0-12.8-4.2-15-10.6s-.4-13.4 4.8-17.7l96-80c5.6-4.7 13.7-5 19.6-.7s8.2 12.1 5.5 18.9"
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
                  d="M256 32c17.7 0 32 14.3 32 32v416H64V64c0-17.7 14.3-32 32-32zM32 64v416H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V288h16c26.5 0 48 21.5 48 48v48c0 35.3 28.7 64 64 64s64-28.7 64-64V270.4c36.5-7.4 64-39.7 64-78.4v-48c0-8.8-7.2-16-16-16h-16V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-32V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-16c-8.8 0-16 7.2-16 16v48c0 38.7 27.5 71 64 78.4V384c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48c0-44.2-35.8-80-80-80h-16V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64m432 96h80v32c0 26.5-21.5 48-48 48s-48-21.5-48-48v-32zm-259.2-38.4c5.3-7.1 3.9-17.1-3.2-22.4s-17.1-3.9-22.4 3.2l-72 96c-3.6 4.8-4.2 11.3-1.5 16.8S114 224 120 224h80l-52.8 70.4c-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2l72-96c3.6-4.8 4.2-11.3 1.5-16.8S238 192 232 192h-80z"
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
                  d="M96 16c-26.5 0-48 21.5-48 48v352h256V64c0-26.5-21.5-48-48-48zM48 432v64h256v-64zm-16 64V64C32 28.7 60.7 0 96 0h160c35.3 0 64 28.7 64 64v208h8c39.8 0 72 32.2 72 72v44c0 24.3 19.7 44 44 44s44-19.7 44-44V255.6c-40.4-4-72-38.1-72-79.6v-24c0-13.3 10.7-24 24-24h8V72c0-4.4 3.6-8 8-8s8 3.6 8 8v56h64V72c0-4.4 3.6-8 8-8s8 3.6 8 8v56h8c13.3 0 24 10.7 24 24v24c0 41.5-31.6 75.6-72 79.6V388c0 33.1-26.9 60-60 60s-60-26.9-60-60v-44c0-30.9-25.1-56-56-56h-8v208h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zm504-352h-96c-4.4 0-8 3.6-8 8v24c0 35.3 28.7 64 64 64s64-28.7 64-64v-24c0-4.4-3.6-8-8-8zm-339.2-38.4c3.5 2.7 4.3 7.7 1.6 11.2L136 200h96c3 0 5.8 1.7 7.2 4.4s1.1 6-.8 8.4l-72 96c-2.7 3.5-7.7 4.3-11.2 1.6s-4.3-7.7-1.6-11.2L216 216h-96c-3 0-5.8-1.7-7.2-4.4s-1.1-6 .8-8.4l72-96c2.7-3.5 7.7-4.3 11.2-1.6"
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
                  d="M32 64C32 28.7 60.7 0 96 0h160c35.3 0 64 28.7 64 64v384H32zm191.2 37.1c2.3-6.8-.3-14.3-6.3-18.3s-13.9-3.6-19.3 1.1l-112 96c-5.1 4.4-6.9 11.4-4.6 17.7S89.3 208 96 208h57.8l-25 74.9c-2.3 6.8.3 14.3 6.3 18.3s13.9 3.6 19.3-1.1l112-96c5.1-4.4 6.9-11.4 4.6-17.7s-8.3-10.4-15-10.4h-57.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M480 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-16c-8.8 0-16 7.2-16 16v32c0 35.8 23.5 66.1 56 76.3V376c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32c0-48.6-39.4-88-88-88h-16v48h16c22.1 0 40 17.9 40 40v32c0 39.8 32.2 72 72 72s72-32.2 72-72V252.3c32.5-10.2 56-40.5 56-76.3v-32c0-8.8-7.2-16-16-16h-16V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-32zM0 480c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32"
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
