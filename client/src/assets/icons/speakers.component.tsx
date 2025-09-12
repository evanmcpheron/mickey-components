import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SpeakersIcon: React.FC<
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
                  d="M64 0h216.4C265.2 17 256 39.4 256 64v193.6c-20.3-20.7-48.7-33.6-80-33.6-61.9 0-112 50.1-112 112s50.1 112 112 112c31.3 0 59.7-12.9 80-33.6V448c0 24.6 9.2 47 24.4 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0m256 503.4c-19.1-11.1-32-31.7-32-55.4V64c0-23.7 12.9-44.4 32-55.4 9.4-5.5 20.3-8.6 32-8.6h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H352c-11.7 0-22.6-3.1-32-8.6M352 336a112 112 0 1 0 224 0 112 112 0 1 0-224 0m-176-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0-112a48 48 0 1 0 0-96 48 48 0 1 0 0 96m224 176a64 64 0 1 1 128 0 64 64 0 1 1-128 0m112-224a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M264.4 0c-11.8 13.2-20.1 29.7-23.1 48H64c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h177.3a96 96 0 0 0 23.1 48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0zM224 232v56.8c-10.2-10.4-24.3-16.8-40-16.8-30.9 0-56 25.1-56 56s25.1 56 56 56c15.7 0 29.8-6.4 40-16.8V424c-12.3 5.1-25.8 8-40 8-57.4 0-104-46.6-104-104s46.6-104 104-104c14.2 0 27.7 2.8 40 8M184 80a40 40 0 1 1 0 80 40 40 0 1 1 0-80m152-32c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h240c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zm-64 16c0-35.3 28.7-64 64-64h240c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H336c-35.3 0-64-28.7-64-64zm184 16a40 40 0 1 1 0 80 40 40 0 1 1 0-80M352 328a104 104 0 1 1 208 0 104 104 0 1 1-208 0m104 56a56 56 0 1 0 0-112 56 56 0 1 0 0 112"
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
                  d="M256 256.8v63.6c-7.5-36.4-40.7-64.4-80-64.4-44.2 0-80 35.8-80 80s35.8 80 80 80c39.3 0 72.5-28 80-64.4v63.6c-20.7 20.3-49.1 32.8-80 32.8-61.9 0-112-50.1-112-112s50.1-112 112-112c30.9 0 59.3 12.5 80 32.8m5.5 223.2c4.2 11.9 10.7 22.8 19 32H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h216.4c-8.3 9.2-14.8 20.1-19 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32zM176 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m-24 272a24 24 0 1 1 48 0 24 24 0 1 1-48 0M352 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-64 32c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H352c-35.3 0-64-28.7-64-64zm176 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 352a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224m-24 112a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h216.4c-4.4-4.9-8.3-10.3-11.6-16H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h204.8c3.3-5.7 7.2-11.1 11.6-16zm112 224c-61.9 0-112 50.1-112 112s50.1 112 112 112c31.3 0 59.7-12.9 80-33.6v-25.3C238.8 415 209.4 432 176 432c-53 0-96-43-96-96s43-96 96-96c33.4 0 62.8 17 80 42.9v-25.3c-20.3-20.7-48.7-33.6-80-33.6m-32 112a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0M176 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128M576 16c26.5 0 48 21.5 48 48v384c0 26.5-21.5 48-48 48H352c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM352 0c-35.3 0-64 28.7-64 64v384c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm112 240a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 208a112 112 0 1 0 0-224 112 112 0 1 0 0 224m-32-112a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0M464 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M256 64c0-24.6 9.2-47 24.4-64H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h216.4c-15.2-17-24.4-39.4-24.4-64v-33.6c-20.3 20.7-48.7 33.6-80 33.6-61.9 0-112-50.1-112-112s50.1-112 112-112c31.3 0 59.7 12.9 80 33.6zm-128 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0M352 0c-35.3 0-64 28.7-64 64v384c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm112 224a112 112 0 1 1 0 224 112 112 0 1 1 0-224m-48-112a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176 224c31.3 0 59.7 12.9 80 33.6v156.8c-20.3 20.7-48.7 33.6-80 33.6-61.9 0-112-50.1-112-112s50.1-112 112-112m0-160a48 48 0 1 1 0 96 48 48 0 1 1 0-96m64 272a64 64 0 1 0-128 0 64 64 0 1 0 128 0m176-224a48 48 0 1 1 96 0 48 48 0 1 1-96 0m-64 224a112 112 0 1 1 224 0 112 112 0 1 1-224 0m112 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
