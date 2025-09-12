import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UtensilsIcon: React.FC<
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
                  d="M416 0c-16 0-128 32-128 176v112c0 35.3 28.7 64 64 64h32v128c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32M64 16C64 7.8 57.9 1 49.7.1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7 0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16v134.2c0 5.4-4.4 9.8-9.8 9.8-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0S96.8 6.3 96.1 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152h-.6l.3-.7z"
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
                  d="M71.9 26.7c1.5-13.2-8-25-21.2-26.5s-25 8-26.5 21.2l-16 144-.2 1.3V184c0 48.6 39.4 88 88 88h8v216c0 13.3 10.7 24 24 24s24-10.7 24-24V272h8c48.6 0 88-39.4 88-88v-17.3l-.1-1.3-16-144C230.4 8.2 218.5-1.3 205.3.1s-22.7 13.3-21.2 26.5L200 169.3V184c0 22.1-17.9 40-40 40H96c-22.1 0-40-17.9-40-40v-14.7zM152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24zm184 152c0-57.7 21.7-88.6 41.4-105.7 7.7-6.6 15.5-11.6 22.6-15.2V304h-48c-8.8 0-16-7.2-16-16zm64 176v136c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32-16 0-128 32-128 176v112c0 35.3 28.7 64 64 64z"
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
                  d="M42.6.2c8.7 1.5 14.6 9.7 13.2 18.4L32.7 157.4c-.4 2.6-.7 5.2-.7 7.9V176c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-10.7c0-2.6-.2-5.3-.7-7.9L168.2 18.6c-1.5-8.7 4.4-17 13.2-18.4s17 4.4 18.4 13.2l23.1 138.8c.7 4.3 1.1 8.7 1.1 13.2V176c0 44.2-35.8 80-80 80h-16v240c0 8.8-7.2 16-16 16s-16-7.2-16-16V256H80c-44.2 0-80-35.8-80-80v-10.7c0-4.4.4-8.8 1.1-13.2L24.2 13.4C25.7 4.7 33.9-1.2 42.6.2M88.8 0c8.8.4 15.6 8 15.2 16.8l-8 160c-.4 8.8-8 15.6-16.8 15.2s-15.6-8-15.2-16.8l8-160C72.5 6.4 80-.4 88.8 0m46.4 0c8.8-.4 16.3 6.4 16.8 15.2l8 160c.4 8.8-6.4 16.3-15.2 16.8s-16.3-6.4-16.8-15.2l-8-160C119.6 8 126.4.5 135.2 0M320 176v112c0 17.7 14.3 32 32 32h64V32.2l-.2.1c-1.7.4-6.7 1.5-14.3 4.6C391.4 41 379 47.8 367 58.2c-23.2 20.1-47 55.3-47 117.8M416 0c17.7 0 32 14.3 32 32v464c0 8.8-7.2 16-16 16s-16-7.2-16-16V352h-64c-35.3 0-64-28.7-64-64V176C288 32 400 0 416 0"
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
                  d="M41.3.1c4.4.7 7.3 4.8 6.6 9.2L24.8 148.1c-.5 3-.8 6.1-.8 9.2V168c0 30.9 25.1 56 56 56h64c30.9 0 56-25.1 56-56v-10.7c0-3.1-.3-6.2-.8-9.2L176.1 9.3c-.7-4.4 2.2-8.5 6.6-9.2s8.5 2.2 9.2 6.6L215 145.5c.7 3.9 1 7.9 1 11.8V168c0 39.8-32.2 72-72 72h-24v264c0 4.4-3.6 8-8 8s-8-3.6-8-8V240H80c-39.8 0-72-32.2-72-72v-10.7c0-4 .3-7.9 1-11.8L32.1 6.7C32.8 2.3 37-.6 41.3.1M88.4 0c4.4.2 7.8 4 7.6 8.4l-8 160c-.2 4.4-4 7.8-8.4 7.6s-7.8-4-7.6-8.4l8-160c.2-4.4 4-7.8 8.4-7.6m47.2 0c4.4-.2 8.2 3.2 8.4 7.6l8 160c.2 4.4-3.2 8.2-7.6 8.4s-8.2-3.2-8.4-7.6l-8-160c-.2-4.4 3.2-8.2 7.6-8.4M304 176v128c0 17.7 14.3 32 32 32h80V24c0-4.4-3.6-8-8-8-.1 0-1.9.1-5.7 1.1-3.5.9-8.1 2.5-13.4 4.8-10.6 4.6-23.5 12.2-36 23.8C328.2 68.6 304 108.3 304 176M408 0c13.3 0 24 10.7 24 24v480c0 4.4-3.6 8-8 8s-8-3.6-8-8V352h-80c-26.5 0-48-21.5-48-48V176C288 32 392 0 408 0"
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
                  d="M288 176C288 32 400 0 416 0c17.7 0 32 14.3 32 32v320h-96c-35.3 0-64-28.7-64-64zM49.7.1C57.9 1 64 7.8 64 16v134.2c0 5.4 4.4 9.8 9.8 9.8 5.1 0 9.3-3.9 9.8-9L96.1 14.6C96.8 6.3 103.7 0 112 0s15.2 6.3 15.9 14.6L140.3 151c.5 5.1 4.7 9 9.8 9 5.4 0 9.8-4.4 9.8-9.8V16c0-8.2 6.1-15 14.3-15.9s15.6 4.5 17.4 12.4l30.3 136.3c1.4 6.3 2.1 12.7 2.1 19.1 0 48.6-39.4 88.1-88.1 88.1H88.1C39.4 256 0 216.6 0 167.9c0-6.4.7-12.8 2.1-19.1L32.4 12.5C34.2 4.6 41.6-.8 49.7.1M112 167.4l-.3.7h.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 480V256H80v224c0 17.7 14.3 32 32 32s32-14.3 32-32m304 0V352h-64v128c0 17.7 14.3 32 32 32s32-14.3 32-32"
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
