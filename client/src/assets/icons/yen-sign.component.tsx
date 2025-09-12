import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const YenSignIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M58.6 46.2C48.8 31.5 29 27.6 14.3 37.4S-4.4 67 5.4 81.7L100.2 224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h80v32H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h80v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80v-32h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-52.2l94.8-142.3c9.8-14.7 5.8-34.6-8.9-44.4s-34.6-5.8-44.4 8.9L160 198.3z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M43.8 42.5c-7.5-11-22.4-13.8-33.3-6.4S-3.3 58.5 4.2 69.5l105 154.5H40c-13.3 0-24 10.7-24 24s10.7 24 24 24h96v48H40c-13.3 0-24 10.7-24 24s10.7 24 24 24h96v88c0 13.3 10.7 24 24 24s24-10.7 24-24v-88h96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96v-48h96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-69.2l105-154.5c7.5-11 4.6-25.9-6.4-33.3s-25.9-4.6-33.3 6.4L160 213.3z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M29 38.7c-5.2-7.2-15.2-8.8-22.3-3.7S-2.1 50.2 3 57.4L123 224H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h96v64H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h96v112c0 8.8 7.2 16 16 16s16-7.2 16-16V352h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96v-64h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-75L317 57.4c5.2-7.2 3.5-17.2-3.6-22.3s-17.2-3.5-22.3 3.6l-131 182z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M14.5 35.3c-2.6-3.6-7.6-4.3-11.2-1.7S-1 41.2 1.6 44.8L144.2 240H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h112v80H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h112v120c0 4.4 3.6 8 8 8s8-3.6 8-8V352h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H168v-80h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H175.8L318.5 44.7c2.6-3.6 1.8-8.6-1.7-11.2s-8.6-1.8-11.2 1.7L160 234.4z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M100.2 224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h80v-22.3zm91.8 64h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-52.2L192 265.7zm-64 32H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h80zm64 64h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M58.6 46.2C48.8 31.5 29 27.6 14.3 37.4S-4.4 67 5.4 81.7l122.6 184V448c0 17.7 14.3 32 32 32s32-14.3 32-32V265.7l122.6-184c9.8-14.7 5.8-34.6-8.9-44.4s-34.6-5.8-44.4 8.9L160 198.3z"
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
