import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MoneyFromBracketIcon: React.FC<
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
                  d="M64 96v64c0 17.7-14.3 32-32 32S0 177.7 0 160V96C0 43 43 0 96 0h448c53 0 96 43 96 96v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m64 0h384v352c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64zm128 352c0-35.3-28.7-64-64-64v64zm192-64c-35.3 0-64 28.7-64 64h64zm-128-32c53 0 96-35.8 96-80s-43-80-96-80-96 35.8-96 80 43 80 96 80"
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
                  d="M48 88v80c0 13.3-10.7 24-24 24S0 181.3 0 168V88C0 39.4 39.4 0 88 0h464c48.6 0 88 39.4 88 88v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-22.1-17.9-40-40-40H88c-22.1 0-40 17.9-40 40m416 8h48v352c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V96h48v304c35.3 0 64 28.7 64 64h160c0-35.3 28.7-64 64-64zM320 352c-53 0-96-35.8-96-80s43-80 96-80 96 35.8 96 80-43 80-96 80"
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
                  d="M80 32c-26.5 0-48 21.5-48 48v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V80C0 35.8 35.8 0 80 0h480c44.2 0 80 35.8 80 80v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-26.5-21.5-48-48-48zm416 64c8.8 0 16 7.2 16 16v344c0 30.9-25.1 56-56 56H184c-30.9 0-56-25.1-56-56V112c0-8.8 7.2-16 16-16s16 7.2 16 16v272c53 0 96 43 96 96h128c0-53 43-96 96-96V112c0-8.8 7.2-16 16-16M224 480c0-35.3-28.7-64-64-64v40c0 13.3 10.7 24 24 24zm232 0c13.3 0 24-10.7 24-24v-40c-35.3 0-64 28.7-64 64zM320 208c-47 0-80 31.3-80 64s33 64 80 64 80-31.3 80-64-33-64-80-64m112 64c0 55.6-53 96-112 96s-112-40.4-112-96 53-96 112-96 112 40.4 112 96"
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
                  d="M72 16c-30.9 0-56 25.1-56 56v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V72C0 32.2 32.2 0 72 0h496c39.8 0 72 32.2 72 72v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-30.9-25.1-56-56-56zm432 64c4.4 0 8 3.6 8 8v376c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V88c0-4.4 3.6-8 8-8s8 3.6 8 8v376c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V88c0-4.4 3.6-8 8-8M320 200c-50 0-88 33.5-88 72s38 72 88 72 88-33.5 88-72-38-72-88-72m104 72c0 49.9-48 88-104 88s-104-38.1-104-88 48-88 104-88 104 38.1 104 88m48 120c0 4.4-3.6 8-8 8h-8c-30.9 0-56 25.1-56 56v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-39.8 32.2-72 72-72h8c4.4 0 8 3.6 8 8m-296-8h8c39.8 0 72 32.2 72 72v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-30.9-25.1-56-56-56h-8c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M512 448V96H128v352c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64m-320-64c35.3 0 64 28.7 64 64h-64zm192 64c0-35.3 28.7-64 64-64v64zM224 272c0-44.2 43-80 96-80s96 35.8 96 80-43 80-96 80-96-35.8-96-80"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 64c-17.7 0-32 14.3-32 32v64c0 17.7-14.3 32-32 32S0 177.7 0 160V96C0 43 43 0 96 0h448c53 0 96 43 96 96v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7-14.3-32-32-32z"
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
