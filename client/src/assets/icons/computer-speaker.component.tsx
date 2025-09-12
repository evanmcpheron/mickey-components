import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ComputerSpeakerIcon: React.FC<
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
                  d="M288 432v-16H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h176c-10-13.4-16-30-16-48M64 32C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h224v-64H64V96h224V80c0-18 6-34.6 16-48zm304 0c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm176 288a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m64-192a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M312.4 480c-11.8-13.2-20.1-29.7-23.1-48H120c-13.3 0-24 10.7-24 24s10.7 24 24 24zM64 32C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h224v-48H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h225.3a96 96 0 0 1 23.1-48zm512 48c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H384c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM384 32c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm96 144a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-32 144a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
                  d="M64 384c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h229.5c4.2-11.9 10.7-22.8 19-32H64C28.7 32 0 60.7 0 96v256c0 35.3 28.7 64 64 64h224v-32zm48 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h200.4c-8.3-9.2-14.8-20.1-19-32zM576 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM384 32c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm96 352a64 64 0 1 1 0-128 64 64 0 1 1 0 128m-96-64a96 96 0 1 0 192 0 96 96 0 1 0-192 0m112-176a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-48a48 48 0 1 0 0 96 48 48 0 1 0 0-96m24 224a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M288 96H80c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h208v-16H80V112h208zm0 304H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h236.8c3.3-5.7 7.2-11.1 11.6-16H64C28.7 32 0 60.7 0 96v256c0 35.3 28.7 64 64 64h224zm12.8 64H104c-4.4 0-8 3.6-8 8s3.6 8 8 8h208.4c-4.4-4.9-8.3-10.3-11.6-16M576 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H384c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM384 32c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm96 368a80 80 0 1 1 0-160 80 80 0 1 1 0 160m-96-80a96 96 0 1 0 192 0 96 96 0 1 0-192 0m112-192a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 240a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
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
                  d="M288 432v-16H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h176c-10-13.4-16-30-16-48M64 32C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h224v-64H64V96h224V80c0-18 6-34.6 16-48zm304 0c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm112 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192m-32-96a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 96h224v224H64zm384 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 192a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-144 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"
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
