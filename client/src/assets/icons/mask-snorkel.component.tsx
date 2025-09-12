import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MaskSnorkelIcon: React.FC<
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
                  d="M544 32c-17.7 0-32 14.3-32 32v96h64V64c0-17.7-14.3-32-32-32m-32 335.4c0 44.5-36.1 80.6-80.6 80.6-39.4 0-73-28.5-79.5-67.4l-.3-1.9c-2.9-17.4-19.4-29.2-36.8-26.3s-29.2 19.4-26.3 36.8l.3 1.9C300.4 460.9 360.7 512 431.4 512c79.9 0 144.6-64.7 144.6-144.6V192h-64zM64 64C28.7 64 0 92.7 0 128v96c0 35.3 28.7 64 64 64h79.7c28.6 0 53.7-18.9 61.5-46.4l3.4-11.7c4.4-15.5 26.3-15.5 30.8 0l3.4 11.7c7.8 27.5 33 46.4 61.5 46.4H384c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64z"
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
                  d="M552 32c13.3 0 24 10.7 24 24v104h-48V56c0-13.3 10.7-24 24-24m-24 344.6V192h48v184.6c0 74.8-60.6 135.4-135.4 135.4-67.4 0-124.5-49.5-134-116.2l-2.3-16.4c-1.9-13.1 7.2-25.3 20.4-27.2s25.3 7.2 27.2 20.4l2.3 16.4c6.2 43.1 43 75 86.5 75 48.3 0 87.4-39.1 87.4-87.4zM64 112c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h79.7c7.1 0 13.4-4.7 15.4-11.6l3.4-11.7c17.7-61.9 105.4-61.9 123.1 0l3.4 11.7c2 6.9 8.2 11.6 15.4 11.6H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16zm240.3 176c-22.3 0-42.4-11.5-54-29.6-.7-1-1.3-2.1-1.9-3.2-.3-.5-.6-1-.8-1.5-2-3.8-3.6-7.8-4.8-12.1l-.6-2.2-2.7-9.6c-4.4-15.5-26.3-15.5-30.8 0l-2.7 9.6-.6 2.2c-1.2 4.2-2.8 8.3-4.8 12.1-.3.5-.5 1-.8 1.5-.6 1.1-1.2 2.2-1.9 3.2-11.5 18.1-31.7 29.6-54 29.6H64c-35.3 0-64-28.7-64-64v-96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64z"
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
                  d="M560 32c8.8 0 16 7.2 16 16v112h-32V48c0-8.8 7.2-16 16-16M448 480c53 0 96-43 96-96V192h32v192c0 70.7-57.3 128-128 128s-128-57.3-128-128v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 53 43 96 96 96M64 96c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h79.7c14.3 0 26.8-9.5 30.8-23.2l3.4-11.7c13.3-46.4 79-46.4 92.3 0l3.4 11.7c3.9 13.7 16.5 23.2 30.8 23.2H384c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zM0 128c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64h-79.7c-28.6 0-53.7-18.9-61.5-46.4l-3.4-11.7c-4.4-15.5-26.3-15.5-30.8 0l-3.4 11.7c-7.9 27.5-33 46.4-61.5 46.4H64c-35.3 0-64-28.7-64-64z"
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
                  d="M536 48c-13.3 0-24 10.7-24 24v72h48V72c0-13.3-10.7-24-24-24m-24 112v32h48v-32zm0 207.3c0 44.5-36.1 80.7-80.7 80.7-39 0-72.4-27.9-79.4-66.2l-.4-2.1c-2.4-13-14.9-21.7-27.9-19.3s-21.7 14.9-19.3 27.9l.4 2.1C315.9 451.5 369.2 496 431.3 496c71.1 0 128.7-57.6 128.7-128.7V208h-48zM536 32c22.1 0 40 17.9 40 40v295.3c0 79.9-64.8 144.7-144.7 144.7-69.9 0-129.8-50-142.3-118.8l-.4-2.1c-4-21.7 10.5-42.6 32.2-46.5s42.6 10.5 46.5 32.2l.4 2.1c5.6 30.7 32.4 53.1 63.6 53.1 35.7 0 64.7-28.9 64.7-64.7V72c0-22.1 17.9-40 40-40M64 80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h79.7c21.4 0 40.3-14.2 46.2-34.8l3.4-11.7c8.8-30.9 52.7-30.9 61.5 0l3.4 11.7c5.9 20.6 24.7 34.8 46.2 34.8H384c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48zM0 128c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64h-79.7c-28.6 0-53.7-18.9-61.5-46.4l-3.4-11.7c-4.4-15.5-26.3-15.5-30.8 0l-3.4 11.7c-7.9 27.5-33 46.4-61.5 46.4H64c-35.3 0-64-28.7-64-64z"
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
                  d="M576 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96h64zm0 128h-64v175.4c0 44.5-36.1 80.6-80.6 80.6-39.4 0-73-28.5-79.5-67.4l-.3-1.9c-2.9-17.4-19.4-29.2-36.8-26.3s-29.2 19.4-26.3 36.8l.3 1.9c11.6 69.7 72 120.8 142.6 120.8 79.9.1 144.6-64.6 144.6-144.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 64C28.7 64 0 92.7 0 128v96c0 35.3 28.7 64 64 64h79.7c28.6 0 53.7-18.9 61.5-46.4l3.4-11.7c4.4-15.5 26.3-15.5 30.8 0l3.4 11.7c7.8 27.5 33 46.4 61.5 46.4H384c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64zm512 96h-64v32h64z"
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
