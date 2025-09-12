import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FolderMusicIcon: React.FC<
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
                  d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h128c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8h160c35.3 0 64 28.7 64 64zM352 192c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v113.8c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V283.1l96-36v74.7c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V192"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H289.9L247 53.1A71.98 71.98 0 0 0 196.1 32zM48 96c0-8.8 7.2-16 16-16h132.1c6.4 0 12.5 2.5 17 7l45.3 45.3c7.5 7.5 17.7 11.7 28.3 11.7H448c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm304 96c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v113.8c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V283.1l96-36v74.7c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V192"
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
                  d="M32 96c0-17.7 14.3-32 32-32h124.1c8.5 0 16.6 3.4 22.6 9.4l35.9 35.9c12 12 28.3 18.7 45.3 18.7H448c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm32-64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H291.9c-8.5 0-16.6-3.4-22.6-9.4l-35.9-35.9c-12-12-28.3-18.7-45.3-18.7zm281.1 146.8c-4.3-3-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v90.5c-5-1.6-10.4-2.5-16-2.5-26.5 0-48 19.7-48 44s21.5 44 48 44 48-19.7 48-44c0-.8 0-1.6-.1-2.5 0-.5.1-1 .1-1.5V251.1l96-36v83.4c-5-1.6-10.4-2.5-16-2.5-26.5 0-48 19.7-48 44s21.5 44 48 44 48-19.7 48-44c0-.8 0-1.6-.1-2.5 0-.5.1-1 .1-1.5V192c0-5.2-2.6-10.2-6.9-13.2M320 340c0 4.1-4.5 12-16 12s-16-7.9-16-12 4.5-12 16-12 16 7.9 16 12m-128 32c0 4.1-4.5 12-16 12s-16-7.9-16-12 4.5-12 16-12 16 7.9 16 12"
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
                  d="M496 416c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h133.5c12.7 0 24.9 5.1 33.9 14.1L267.3 98c9 9 21.2 14.1 33.9 14.1H448c26.5 0 48 21.5 48 48zM64 480h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H301.3c-8.5 0-16.6-3.4-22.6-9.4l-36-35.9c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64m284.6-294.6c-2.2-1.5-4.9-1.8-7.4-.9l-128 48c-3.1 1.2-5.2 4.2-5.2 7.5v106.2c-8.5-6.3-19.7-10.2-32-10.2-26.5 0-48 17.9-48 40s21.5 40 48 40 48-17.9 48-40V245.5l112-42v110.7c-8.5-6.3-19.7-10.2-32-10.2-26.5 0-48 17.9-48 40s21.5 40 48 40 48-17.9 48-40V192c0-2.6-1.3-5.1-3.4-6.6M304 320c20.5 0 32 13.4 32 24s-11.5 24-32 24-32-13.4-32-24 11.5-24 32-24m-128 32c20.5 0 32 13.4 32 24s-11.5 24-32 24-32-13.4-32-24 11.5-24 32-24"
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
                  d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h128c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8h160c35.3 0 64 28.7 64 64zM352 192c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v113.8c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V283.1l96-36v74.7c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M345.1 178.8c4.3 3 6.9 7.9 6.9 13.2v160c0 17.7-21.5 32-48 32s-48-14.3-48-32 21.5-32 48-32c5.6 0 11 .6 16 1.8v-74.7l-96 36V384c0 17.7-21.5 32-48 32s-48-14.3-48-32 21.5-32 48-32c5.6 0 11 .6 16 1.8V240c0-6.7 4.1-12.6 10.4-15l128-48c4.9-1.8 10.4-1.2 14.7 1.8"
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
