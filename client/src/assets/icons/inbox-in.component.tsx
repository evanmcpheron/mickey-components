import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const InboxInIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M288 32v178.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l41.3 41.4V32c0-17.7 14.3-32 32-32s32 14.3 32 32M48 320h76.2c12.1 0 23.2 6.8 28.6 17.7l14.3 28.6c5.4 10.8 16.5 17.7 28.6 17.7h120.5c12.1 0 23.2-6.8 28.6-17.7l14.3-28.6c5.4-10.8 16.5-17.7 28.6-17.7H464c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M280 24v206.1l63-63c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 305c-9.4 9.4-24.6 9.4-33.9 0L135 201c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l63 63V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM149.1 405.5 130.3 368H48v96h416v-96h-82.3L363 405.5c-8.2 16.2-24.8 26.5-43 26.5H192c-18.2 0-34.8-10.3-42.9-26.5m24.2-58.9L192 384h128l18.7-37.5c8.1-16.3 24.8-26.5 42.9-26.5H464c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h82.3c18.2 0 34.8 10.3 42.9 26.5z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v249.4l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L272 265.4zM48 352h66.3c6.1 0 11.6 3.4 14.3 8.8l14.4 28.7c8.1 16.3 24.8 26.5 42.9 26.5h140.2c18.2 0 34.8-10.3 42.9-26.5l-28.6-14.3 28.6 14.3 14.3-28.6c2.7-5.4 8.3-8.8 14.3-8.8H464c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16m306.7-5.5-14.3 28.6c-2.7 5.4-8.2 8.8-14.3 8.8H185.9c-6.1 0-11.6-3.4-14.3-8.8l-14.3-28.6c-8.1-16.3-24.8-26.5-42.9-26.5H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-66.3c-18.2 0-34.8 10.3-42.9 26.5z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v284.7L141.7 186.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l120 120c3.1 3.1 8.2 3.1 11.3 0l120-120c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L264 292.7zM48 336h74.3c12.1 0 23.2 6.8 28.6 17.7l9.9 19.8c8.1 16.3 24.8 26.5 42.9 26.5h104.5c18.2 0 34.8-10.3 42.9-26.5l9.9-19.8c5.4-10.8 16.5-17.7 28.6-17.7H464c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32m298.7 10.5-9.9 19.8c-5.4 10.8-16.5 17.7-28.6 17.7H203.8c-12.1 0-23.2-6.8-28.6-17.7l-9.9-19.8c-8.1-16.3-24.8-26.5-42.9-26.5H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-74.3c-18.2 0-34.8 10.3-42.9 26.5z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M124.2 320H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-76.2c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 0c17.7 0 32 14.3 32 32v178.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l41.3 41.4V32c0-17.7 14.3-32 32-32"
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
