import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ImagePolaroidIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 64h256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32m152 64c-5.3 0-10.2 2.6-13.2 6.9l-52.4 76.3-9.6-12.8c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4l-48 64c-3.6 4.8-4.2 11.3-1.5 16.8S106 320 112 320h224c5.9 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-88-128c-3-4.3-7.9-6.9-13.2-6.9m-120 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M400 368v48c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-48zM75.3 320H48V96c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v224h-23.6l-92.3-141.1c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-56 85.6-16.6-22.6c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8zm372.7 0V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-96M144 144a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M416 384v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-32zm-310.6-32H32v-9.4l96-96 41.4 41.4-60.7 60.7zm45.3 0 52.7-52.7 84.6-84.7 128 128v9.4H150.6zM416 297.4 310.6 192c-12.5-12.5-32.8-12.5-45.3 0L192 265.4 150.6 224c-12.5-12.5-32.8-12.5-45.3 0L32 297.4V96c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32zm32 38.6V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-80M128 136a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M432 352v64c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-64zm-11.3-16H155.3l42.3-42.3 84.7-84.7c3.1-3.1 8.2-3.1 11.3 0l127 127zm-282.3-5.7-5.7 5.7H27.3l95-95c3.1-3.1 8.2-3.1 11.3 0l47 47-42.3 42.3zM16 96c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v228.7l-127-127c-9.4-9.4-24.6-9.4-33.9 0l-79 79-47-47c-9.4-9.4-24.6-9.4-33.9 0l-95 95V96zm432 240V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-80M136 144a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 64h256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 128c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm184 32c-5.3 0-10.2 2.6-13.2 6.9l-52.4 76.3-9.6-12.8c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4l-48 64c-3.6 4.8-4.2 11.3-1.5 16.8S106 320 112 320h224c5.9 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-88-128c-3-4.3-7.9-6.9-13.2-6.9m-120 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
