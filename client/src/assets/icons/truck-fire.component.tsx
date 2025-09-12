import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckFireIcon: React.FC<
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
                  d="M0 24c0 13.3 10.7 24 24 24h8v50.7C13.4 105.3 0 123.1 0 144v80h384V48h232c13.3 0 24-10.7 24-24S629.3 0 616 0H24C10.7 0 0 10.7 0 24m0 232v112c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h16c26.5 0 48-21.5 48-48V160c0-35.3-28.7-64-64-64h-16c0-17.7-14.3-32-32-32s-32 14.3-32 32h-80v160H0M280 48h56v48h-56zm-48 48h-48V48h48zM80 48h56v48H80zm496 112v96h-96v-96zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96m272 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h8v50.7C13.4 105.3 0 123.1 0 144v224c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h16c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-48c0-17.7-14.3-32-32-32s-32 14.3-32 32h-96V48h232c13.3 0 24-10.7 24-24S629.3 0 616 0zm312 48v48h-56V48zm0 96h48v80H48v-80zM48 368v-96h352c17.7 0 32-14.3 32-32v-96h160v224h-28.8c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48H243.2c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48zM232 48v48h-48V48zm-96 0v48H80V48zm-24 368a48 48 0 1 1 96 0 48 48 0 1 1-96 0m368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m8-192c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24z"
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
                  d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16h48v64H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h16c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-48c0-17.7-14.3-32-32-32s-32 14.3-32 32h-96V32h240c8.8 0 16-7.2 16-16s-7.2-16-16-16zm336 32v64h-64V32zm0 96h32v128H32V144c0-8.8 7.2-16 16-16h304m64 0h176c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16h-21.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64h-139c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64H48c-8.8 0-16-7.2-16-16v-80h360c13.3 0 24-10.7 24-24zM256 32v64h-64V32zm-96 0v64H96V32zm320 160h64v64h-64zm-8-32c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24zM160 352a64 64 0 1 1 0 128 64 64 0 1 1 0-128m256 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h72v80H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h16.4c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8h160.8c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-32v-8c0-22.1-17.9-40-40-40s-40 17.9-40 40v8h-96V16h248c4.4 0 8-3.6 8-8s-3.6-8-8-8zm360 16v80h-80V16zm-96 0v80h-80V16zm-96 0v80H96V16zm368 80h-48v-8c0-13.3 10.7-24 24-24s24 10.7 24 24zm0 16h48c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32h-19.3c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64H236.7c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64H48c-17.7 0-32-14.3-32-32v-96h384c17.7 0 32-14.3 32-32V112h112m-128 0v128c0 8.8-7.2 16-16 16H16V144c0-17.7 14.3-32 32-32zm152 48c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8zm-80-16c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24zM152 352a72 72 0 1 1 0 144 72 72 0 1 1 0-144m264 72a72 72 0 1 1 144 0 72 72 0 1 1-144 0"
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
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h8v50.7C37 97 42.4 96 48 96h32V48h56v48h48V48h48v48h48V48h56v48h48V48h232c13.3 0 24-10.7 24-24S629.3 0 616 0zm216 432a80 80 0 1 0-160 0 80 80 0 1 0 160 0m240 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 96c0-17.7 14.3-32 32-32s32 14.3 32 32h16c35.3 0 64 28.7 64 64v208c0 26.5-21.5 48-48 48h-1.1c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96h-98.2c-7.8-54.3-54.4-96-110.9-96S56.9 361.7 49.1 416H48c-26.5 0-48-21.5-48-48V256h416V96h80m-112 0v128H0v-80c0-26.5 21.5-48 48-48zm192 160v-96h-96v96z"
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
