import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareALockIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h256v-96c-9.1 0-17.7-5.2-21.8-13.9l-12-26.1H161.8l-12 26.1c-5.6 12-19.8 17.3-31.8 11.7S100.7 362 106.3 350l96-208c3.9-8.5 12.4-13.9 21.8-13.9s17.9 5.4 21.8 13.9l82.4 178.6c5.6-10 13.9-18.3 23.8-24V272c0-56.4 41.7-103.1 96-110.9V96c0-35.3-28.7-64-64-64zm160 177.3L184 296h80zM464 240c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="M64 80h320c8.8 0 16 7.2 16 16v84.1c14-9.8 30.3-16.4 48-18.9V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h256v-48H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16m181.8 61.9c-3.9-8.5-12.4-13.9-21.8-13.9s-17.9 5.4-21.8 13.9l-96 208c-5.6 12-.3 26.3 11.7 31.8s26.3.3 31.8-11.7l12-26.1h124.5l12 26.1c4 8.8 12.7 13.9 21.8 13.9V352c0-11.4 3-22.1 8.2-31.4zM224 209.3l40 86.7h-80zM464 240c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="M64 64h320c17.7 0 32 14.3 32 32v74.8c9.9-4.7 20.7-8 32-9.6V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.6 0 96v320c0 35.3 28.7 64 64 64h256v-32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m174.3 72.8c-2.7-5.4-8.3-8.8-14.3-8.8s-11.6 3.4-14.3 8.8l-112 224c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2l19.5-39.1h156.2l17.9 35.8V352c0-12.2 3.4-23.5 9.3-33.2l-91-181.9zm-14.3 43L286.1 304H161.9zM464 224c26.5 0 48 21.5 48 48v48h-96v-48c0-26.5 21.5-48 48-48m-80 48v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80m0 80h160v128H384z"
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
                  d="M64 48h320c26.5 0 48 21.5 48 48v68.6c5.2-1.5 10.5-2.7 16-3.5V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h256v-16H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48m167.2 84.4c-1.4-2.7-4.1-4.4-7.2-4.4s-5.8 1.7-7.2 4.4l-120 240c-2 4-.4 8.8 3.6 10.7s8.8.4 10.7-3.6l25.8-51.5h174.2l9.2 18.4c.7-8.2 3-15.9 6.4-22.9zm-7.2 21.5L303.1 312H144.9zM464 208c26.5 0 48 21.5 48 48v64h-96v-64c0-26.5 21.5-48 48-48m-64 48v64h-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32h-16v-64c0-35.3-28.7-64-64-64s-64 28.7-64 64m-16 80h160c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H384c-8.8 0-16-7.2-16-16V352c0-8.8 7.2-16 16-16"
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v65.1c-54.3 7.8-96 54.4-96 110.9v24.6c-9.9 5.7-18.1 14-23.8 24l-82.4-178.7c-3.9-8.5-12.4-13.9-21.8-13.9s-17.9 5.4-21.8 13.9l-96 208c-5.6 12-.3 26.3 11.7 31.8s26.3.3 31.8-11.7l12-26.1h124.5l12 26.1c4 8.8 12.7 13.9 21.8 13.9v96H64c-35.3 0-64-28.7-64-64zm264 200h-80l40-86.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M432 272v48h64v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32m-48 48v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32"
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
