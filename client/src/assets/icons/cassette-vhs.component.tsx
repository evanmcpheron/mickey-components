import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CassetteVhsIcon: React.FC<
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
                  d="M0 96v32h576V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96m0 64v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V160zm467.9 224H416v-34.7c18.6-6.6 32-24.4 32-45.3s-13.4-38.7-32-45.3V224h51.9c17.6 21.9 28.1 49.7 28.1 80s-10.5 58.1-28.1 80M160 349.3V384h-51.9C90.5 362.1 80 334.3 80 304s10.5-58.1 28.1-80H160v34.7c-18.6 6.6-32 24.4-32 45.3s13.4 38.7 32 45.3M256 224h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32"
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
                  d="M48 416V160h480v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm288 304H224v-80h128zm-208-40c0-19.4 13.7-35.5 32-39.2v78.4c-18.3-3.7-32-19.8-32-39.2m288 0c0 19.4-13.7 35.5-32 39.2v-78.4c18.3 3.7 32 19.8 32 39.2m-336 0c0 48.6 39.4 88 88 88h208c48.6 0 88-39.4 88-88s-39.4-88-88-88H184c-48.6 0-88 39.4-88 88"
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
                  d="M32 160v256c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V160zm0-32h512V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32zm544-32v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64M136 208h304c3.5 0 6.9 1.1 9.7 3.3L440 224l9.7-12.7h.1l.2.1.5.4c.4.3 1 .8 1.6 1.3 1.3 1.1 3.2 2.7 5.3 4.8 4.3 4.1 9.9 10.2 15.6 18 11.3 15.5 23 38.8 23 68s-11.8 52.5-23 68c-5.7 7.8-11.3 13.8-15.6 18-2.1 2.1-4 3.7-5.3 4.8-.7.6-1.2 1-1.6 1.3l-.5.4-.2.1h-.1l-9.7-12.7 9.7 12.7c-2.8 2.1-6.2 3.3-9.7 3.3H136c-3.5 0-6.9-1.1-9.7-3.3L136 384l-9.7 12.7h-.1l-.2-.1-.5-.4c-.4-.3-1-.8-1.6-1.3-1.3-1.1-3.2-2.7-5.3-4.8-4.3-4.1-9.9-10.2-15.6-18-11.3-15.5-23-38.8-23-68s11.8-52.5 23-68c5.7-7.8 11.3-13.8 15.6-18 2.1-2.1 4-3.7 5.3-4.8.7-.6 1.2-1 1.6-1.3l.5-.4.2-.1h.1l9.7 12.7-9.7-12.7c2.8-2.1 6.2-3.3 9.7-3.3zm4.9 33c-3.2 3.1-7.6 7.8-11.9 13.7-8.7 12.1-17 28.8-17 49.2s8.2 37.2 17 49.2c4.3 6 8.7 10.6 11.9 13.7.4.4.7.7 1.1 1h50V336c-17.7 0-32-14.3-32-32s14.3-32 32-32v-32h-50.1c-.3.3-.7.7-1.1 1zM352 368V240H224v128zm82.1 0 .6-.5.5-.5c3.2-3.1 7.6-7.8 11.9-13.7 8.7-12.1 17-28.8 17-49.2s-8.2-37.2-17-49.2c-4.3-6-8.7-10.6-11.9-13.7-.4-.4-.7-.7-1.1-1H384v32c17.7 0 32 14.3 32 32s-14.3 32-32 32v32h50.1z"
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
                  d="M16 160v256c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V160zm0-16h544V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48zm560-48v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64M109.9 228.8C99.1 240.2 80 265.6 80 304s19.1 63.8 29.9 75.2c3 3.1 7.5 4.8 12.9 4.8H208V224h-85.2c-5.3 0-9.9 1.7-12.9 4.8M352 384V224H224v160zm103.7 0c4.2 0 7.6-1.1 9.9-3 10-8.4 30.5-31.2 30.5-77s-20.5-68.6-30.5-77c-2.3-1.9-5.6-3-9.9-3H368v160zM122.8 208h332.9c6.7 0 14.2 1.7 20.2 6.8 12.8 10.9 36.1 37.8 36.1 89.2s-23.3 78.3-36.1 89.2c-6 5.1-13.5 6.8-20.2 6.8H122.8c-8.6 0-17.8-2.8-24.4-9.8C85.9 377.2 64 348 64 304s21.9-73.2 34.3-86.2c6.7-7 15.8-9.8 24.4-9.8zm53.2 56c-22.1 0-40 17.9-40 40s17.9 40 40 40c4.4 0 8 3.6 8 8s-3.6 8-8 8c-30.9 0-56-25.1-56-56s25.1-56 56-56c4.4 0 8 3.6 8 8s-3.6 8-8 8m264 40c0-22.1-17.9-40-40-40-4.4 0-8-3.6-8-8s3.6-8 8-8c30.9 0 56 25.1 56 56s-25.1 56-56 56c-4.4 0-8-3.6-8-8s3.6-8 8-8c22.1 0 40-17.9 40-40"
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
                  d="M576 128H0v288c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64zM108.1 384C90.5 362.1 80 334.3 80 304s10.5-58.1 28.1-80H160v160zm359.9 0h-52V224h51.9c17.6 21.9 28.1 49.7 28.1 80s-10.5 58.1-28.1 80zM256 224h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v32H0zm160 288h-51.9C90.5 362.1 80 334.3 80 304s10.5-58.1 28.1-80H160v34.7c-18.6 6.6-32 24.4-32 45.3s13.4 38.7 32 45.3zm307.9 0H416v-34.7c18.6-6.6 32-24.4 32-45.3s-13.4-38.7-32-45.3V224h51.9c17.6 21.9 28.1 49.7 28.1 80s-10.5 58.1-28.1 80"
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
