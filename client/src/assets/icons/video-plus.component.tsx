import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VideoPlusIcon: React.FC<
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
                  d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm512 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64-14.2 9.5v162.2l14.2 9.5 96 64c9.8 6.5 22.4 7.2 32.9 1.6S576 395.8 576 384zm-360 56v48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-48c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M320 112c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm464 84.6v214.8L416 313v52.6l104.3 46.9c5.1 2.3 10.6 3.5 16.2 3.5 21.8 0 39.5-17.7 39.5-39.5v-241c0-21.8-17.7-39.5-39.5-39.5-5.6 0-11.1 1.2-16.2 3.5L416 146.4V199zM216 184c0-13.3-10.7-24-24-24s-24 10.7-24 24v48h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48z"
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
                  d="M320 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm352 290.4 103.4 56.9c5.6 3.1 12 4.7 18.4 4.7 21.1 0 38.2-17.1 38.2-38.2V134.2c0-21.1-17.1-38.2-38.2-38.2-6.4 0-12.8 1.6-18.4 4.7L416 157.6v36.5l118.8-65.4c.9-.5 1.9-.8 3-.8 3.4 0 6.2 2.8 6.2 6.2v243.7c0 3.4-2.8 6.2-6.2 6.2-1 0-2.1-.3-3-.8L416 317.9zM208 176c0-8.8-7.2-16-16-16s-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64z"
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
                  d="M320 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zm64 304V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64m32-29.6 103.4 56.9c5.6 3.1 12 4.7 18.4 4.7 21.1 0 38.2-17.1 38.2-38.2V134.2c0-21.1-17.1-38.2-38.2-38.2-6.4 0-12.8 1.6-18.4 4.7L416 157.6v18.3l111.1-61.1c3.3-1.8 7-2.7 10.7-2.7 12.3 0 22.2 9.9 22.2 22.2v243.5c0 12.3-9.9 22.2-22.2 22.2-3.7 0-7.4-.9-10.7-2.7L416 336.1zM200 168c0-4.4-3.6-8-8-8s-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v80c0 4.4 3.6 8 8 8s8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80z"
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
                  d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm152 120v48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-48c0-13.3 10.7-24 24-24s24 10.7 24 24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2v256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6L384 315.8V196.2l142.2-94.8c9.8-6.5 22.4-7.2 32.9-1.6M216 184v48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-48c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
