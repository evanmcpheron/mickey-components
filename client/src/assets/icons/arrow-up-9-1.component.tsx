import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowUp91Icon: React.FC<
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
                  d="M160 32c9 0 17.5 3.8 23.6 10.4l88 96c11.9 13 11.1 33.3-2 45.2s-33.3 11.1-45.2-2L192 146.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V146.3l-32.4 35.3c-11.9 13-32.2 13.9-45.2 2s-13.9-32.2-2-45.2l88-96C142.5 35.8 151 32 160 32m290.7 262c8.3 6 13.3 15.7 13.3 26v96h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h16v-51.6l-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.5-1.6 28.8 4.4zm-5-145.1A32 32 0 1 0 418.3 91a32 32 0 1 0 27.4 57.9M405 203.8c-35.4-11.4-61-44.6-61-83.8 0-48.6 39.4-88 88-88s88 39.4 88 88c0 23.5-7.5 46.3-21.5 65.2L449.7 251c-10.5 14.2-30.6 17.2-44.8 6.7s-17.2-30.6-6.7-44.8l6.8-9.2z"
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
                  d="M424 80a40 40 0 1 0 0 80 40 40 0 1 0 0-80m88 40v2.5c-.6 20.2-7.9 39.7-20.9 55.3l-64.6 77.6c-8.5 10.2-23.6 11.6-33.8 3.1s-11.6-23.6-3.1-33.8l15.5-18.7c-39.5-8.6-69.1-43.8-69.1-86 0-48.6 39.4-88 88-88s88 39.4 88 88M143 39c9.4-9.4 24.6-9.4 33.9 0l96 96c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V113.9L81 169c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l96-96zm313 273v120h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-86.7l-16.4 5.5c-12.6 4.2-26.2-2.6-30.4-15.2s2.6-26.2 15.2-30.4l48-16c7.3-2.4 15.4-1.2 21.6 3.3s10 11.8 10 19.5"
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
                  d="M428 168a52 52 0 1 1 0-104 52 52 0 1 1 0 104m-84-52c0 46.4 37.6 84 84 84h1.3l-25.4 29.6c-5.8 6.7-5 16.8 1.7 22.6s16.8 5 22.6-1.7l62.4-72.5c13.8-16.2 21.4-36.8 21.4-58h-.1c.1-1.3.1-2.7.1-4 0-46.4-37.6-84-84-84s-84 37.6-84 84M171.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L144 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM448 304c0-5.1-2.5-10-6.6-13s-9.5-3.8-14.4-2.2l-48 16c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l26.9-9V448h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32z"
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
                  d="M428 48a68 68 0 1 0-.1 136.1A68 68 0 1 0 428 48m0 152c-46.4 0-84-37.6-84-84s37.6-84 84-84c45 0 81.8 35.5 83.9 80h.1v4c0 13.9-3.4 27.1-9.4 38.7-4 8.6-9.2 16.7-15.6 24l-65 74.6c-2.9 3.3-8 3.7-11.3.8s-3.7-8-.8-11.3l39.7-45.6c-6.9 1.8-14.2 2.8-21.7 2.8zM154.3 34.3c3.1-3.1 8.2-3.1 11.3 0l112 112c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L168 59.3V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V59.3l-98.3 98.4c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l112-112zm282.1 255c2.2 1.5 3.6 4 3.6 6.7v168h48c4.4 0 8 3.6 8 8s-3.6 8-8 8H376c-4.4 0-8-3.6-8-8s3.6-8 8-8h48V308.1l-44.8 19.2c-4.1 1.7-8.8-.1-10.5-4.2s.1-8.8 4.2-10.5l56-24c2.5-1.1 5.3-.8 7.6.7z"
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
                  d="M445.7 148.9A32 32 0 1 0 418.3 91a32 32 0 1 0 27.4 57.9M405 203.8c-35.4-11.4-61-44.6-61-83.8 0-48.6 39.4-88 88-88s88 39.4 88 88c0 23.5-7.5 46.3-21.5 65.2L449.7 251c-10.5 14.2-30.6 17.2-44.8 6.7s-17.2-30.6-6.7-44.8l6.8-9.2zM464 320v96h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h16v-51.6l-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.5-1.6 28.8 4.4s13.3 15.7 13.3 26z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 32c9 0 17.5 3.8 23.6 10.4l88 96c11.9 13 11.1 33.3-2 45.2s-33.3 11.1-45.2-2L192 146.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V146.3l-32.4 35.3c-11.9 13-32.2 13.9-45.2 2s-13.9-32.2-2-45.2l88-96C142.5 35.8 151 32 160 32"
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
