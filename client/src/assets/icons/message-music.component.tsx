import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MessageMusicIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64zm352 32c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v113.8c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V187.1l96-36v74.7c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V96"
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
                  d="M208 416c0-26.5-21.5-48-48-48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H309.3c-10.4 0-20.5 3.4-28.8 9.6L208 432zm-.2 76.2.2-.2 101.3-76H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5l17.1-12.8zM352 96c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v113.8c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V187.1l96-36v74.7c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V96"
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
                  d="M192 416c0-17.7-14.3-32-32-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H309.3c-6.9 0-13.7 2.2-19.2 6.4L192 464zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm281.1 82.8c-4.3-3-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v90.5c-5-1.6-10.4-2.5-16-2.5-26.5 0-48 19.7-48 44s21.5 44 48 44 48-19.7 48-44c0-.8 0-1.6-.1-2.5 0-.5.1-1 .1-1.5V155.1l96-36v83.4c-5-1.6-10.4-2.5-16-2.5-26.5 0-48 19.7-48 44s21.5 44 48 44 48-19.7 48-44c0-.8 0-1.6-.1-2.5 0-.5.1-1 .1-1.5V96c0-5.2-2.6-10.2-6.9-13.2M320 244c0 4.1-4.5 12-16 12s-16-7.9-16-12 4.5-12 16-12 16 7.9 16 12m-128 32c0 4.1-4.5 12-16 12s-16-7.9-16-12 4.5-12 16-12 16 7.9 16 12"
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
                  d="M176 416c0-8.8-7.2-16-16-16H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H309.3c-3.5 0-6.8 1.1-9.6 3.2L176 496zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm284.6 89.4c-2.2-1.5-4.9-1.8-7.4-.9l-128 48c-3.1 1.2-5.2 4.2-5.2 7.5v106.2c-8.5-6.3-19.7-10.2-32-10.2-26.5 0-48 17.9-48 40s21.5 40 48 40 48-17.9 48-40V149.5l112-42v110.7c-8.5-6.3-19.7-10.2-32-10.2-26.5 0-48 17.9-48 40s21.5 40 48 40 48-17.9 48-40V96c0-2.6-1.3-5.1-3.4-6.6M304 224c20.5 0 32 13.4 32 24s-11.5 24-32 24-32-13.4-32-24 11.5-24 32-24m-128 32c20.5 0 32 13.4 32 24s-11.5 24-32 24-32-13.4-32-24 11.5-24 32-24"
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
                  d="M0 64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64zm352 32c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v113.8c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V187.1l96-36v74.7c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M345.1 82.8c4.3 3 6.9 7.9 6.9 13.2v160c0 17.7-21.5 32-48 32s-48-14.3-48-32 21.5-32 48-32c5.6 0 11 .6 16 1.8v-74.7l-96 36V288c0 17.7-21.5 32-48 32s-48-14.3-48-32 21.5-32 48-32c5.6 0 11 .6 16 1.8V144c0-6.7 4.1-12.6 10.4-15l128-48c4.9-1.8 10.4-1.2 14.7 1.8"
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
