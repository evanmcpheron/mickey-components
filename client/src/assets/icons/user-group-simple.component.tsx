import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserGroupSimpleIcon: React.FC<
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
                  d="M160 32a104 104 0 1 1 0 208 104 104 0 1 1 0-208m320 0a104 104 0 1 1 0 208 104 104 0 1 1 0-208M0 416c0-70.7 57.3-128 128-128h64c70.7 0 128 57.3 128 128v16c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm448 64c-38.3 0-72.7-16.8-96.1-43.5.1-1.5.1-3 .1-4.5v-16c0-34.9-11.2-67.1-30.1-93.4 5.8-20 24.2-34.6 46.1-34.6h224c26.5 0 48 21.5 48 48v16c0 70.7-57.3 128-128 128z"
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
                  d="M104 136a56 56 0 1 1 112 0 56 56 0 1 1-112 0m160 0a104 104 0 1 0-208 0 104 104 0 1 0 208 0m216 88a96 96 0 1 0 0-192 96 96 0 1 0 0 192M128 336h64c44.2 0 80 35.8 80 80v16H48v-16c0-44.2 35.8-80 80-80m0-48C57.3 288 0 345.3 0 416v16c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128zm320 192h64c70.7 0 128-57.3 128-128v-16c0-26.5-21.5-48-48-48H368c-21.8 0-40.3 14.6-46.1 34.6 18.9 26.3 30.1 58.5 30.1 93.4v16c0 1.5 0 3-.1 4.5 23.4 26.7 57.8 43.5 96.1 43.5"
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
                  d="M88 136a72 72 0 1 1 144 0 72 72 0 1 1-144 0m176 0a104 104 0 1 0-208 0 104 104 0 1 0 208 0m144 0a72 72 0 1 1 144 0 72 72 0 1 1-144 0m176 0a104 104 0 1 0-208 0 104 104 0 1 0 208 0M208 320c53 0 96 43 96 96v16c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-16c0-53 43-96 96-96zm-80-32C57.3 288 0 345.3 0 416v16c0 26.5 21.5 48 48 48h240c26.5 0 48-21.5 48-48v-16c0-32.4-12-61.9-31.8-84.4-23.5-26.7-57.9-43.6-96.2-43.6zm304 192h80c70.7 0 128-57.3 128-128v-16c0-26.5-21.5-48-48-48H352c-12.7 0-24.2 4.9-32.8 13 7.7 7.4 14.7 15.7 20.8 24.5 2.9-3.4 7.2-5.5 12.1-5.5H592c8.8 0 16 7.2 16 16v16c0 53-43 96-96 96h-80c-24.6 0-47-9.2-64-24.4v8.4c0 9.8-1.8 19.2-5 27.8 19.9 12.8 43.6 20.2 69 20.2"
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
                  d="M248 136a88 88 0 1 0-176 0 88 88 0 1 0 176 0m-192 0a104 104 0 1 1 208 0 104 104 0 1 1-208 0m512 0a88 88 0 1 0-176 0 88 88 0 1 0 176 0m-192 0a104 104 0 1 1 208 0 104 104 0 1 1-208 0M128 304c-61.9 0-112 50.1-112 112v16c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32v-16c0-61.9-50.1-112-112-112zm0-16h64c48.2 0 90.2 26.6 112 66 9.2 16.6 14.8 35.4 15.8 55.4.1 1.5.1 3 .2 4.6v18c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-16c0-70.7 57.3-128 128-128m304 192c-31.2 0-59.9-11.2-82.1-29.8 1.4-5.8 2.1-11.9 2.1-18.2v-1.6c20.3 20.7 48.7 33.6 80 33.6h80c61.9 0 112-50.1 112-112v-16c0-17.7-14.3-32-32-32H352c-13.2 0-24.6 8-29.5 19.5-3.4-4.7-7-9.3-10.8-13.6 8.6-13.2 23.4-21.9 40.3-21.9h240c26.5 0 48 21.5 48 48v16c0 70.7-57.3 128-128 128z"
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
                  d="M480 32a104 104 0 1 1 0 208 104 104 0 1 1 0-208m-32 448c-38.3 0-72.7-16.8-96.1-43.5.1-1.5.1-3 .1-4.5v-16c0-34.9-11.2-67.1-30.1-93.4 5.8-20 24.2-34.6 46.1-34.6h224c26.5 0 48 21.5 48 48v16c0 70.7-57.3 128-128 128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 240a104 104 0 1 0 0-208 104 104 0 1 0 0 208m-32 48C57.3 288 0 345.3 0 416v16c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
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
