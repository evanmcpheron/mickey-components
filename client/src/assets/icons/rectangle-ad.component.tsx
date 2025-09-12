import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RectangleAdIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm165.5 141.3 72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7l-5.4-10.8h-90.4l-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7 186.8 280h42.3zM392 256a24 24 0 1 0 0 48 24 24 0 1 0 0-48m24-43.9V184c0-13.3 10.7-24 24-24s24 10.7 24 24v144c0 13.3-10.7 24-24 24-6.6 0-12.6-2.7-17-7-9.4 4.5-19.9 7-31 7-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm229.5 77.3 72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7l-5.4-10.8h-90.4l-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7 186.8 280h42.3zM392 256a24 24 0 1 0 0 48 24 24 0 1 0 0-48m24-43.9V184c0-13.3 10.7-24 24-24s24 10.7 24 24v144c0 13.3-10.7 24-24 24-6.6 0-12.6-2.7-17-7-9.4 4.5-19.9 7-31 7-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm214.6 73.4 72 160c3.6 8.1 0 17.5-8 21.2s-17.5 0-21.2-8L247.3 320h-94.6l-10.2 22.6c-3.6 8.1-13.1 11.7-21.2 8s-11.7-13.1-8-21.2l72-160c2.6-5.7 8.3-9.4 14.6-9.4s12 3.7 14.6 9.4zM200 215l-32.9 73h65.7zm176 25a40 40 0 1 0 0 80 40 40 0 1 0 0-80m40-19.9V176c0-8.8 7.2-16 16-16s16 7.2 16 16v160c0 8.8-7.2 16-16 16-7.6 0-14-5.3-15.6-12.4C404.9 347.4 391 352 376 352c-39.8 0-72-32.2-72-72s32.2-72 72-72c14.8 0 28.6 4.5 40 12.1"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm199.3 68.7 80 176c1.8 4 0 8.8-4 10.6s-8.8 0-10.6-4L245 304H139l-19.7 43.3c-1.8 4-6.6 5.8-10.6 4s-5.8-6.6-4-10.6l80-176c1.3-2.9 4.1-4.7 7.3-4.7s6 1.8 7.3 4.7m-7.3 22.6L146.2 288h91.5zM376 224a56 56 0 1 0 0 112 56 56 0 1 0 0-112m56 10.7V168c0-4.4 3.6-8 8-8s8 3.6 8 8v176c0 4.4-3.6 8-8 8s-8-3.6-8-8v-18.7c-13.2 16.3-33.4 26.7-56 26.7-39.8 0-72-32.2-72-72s32.2-72 72-72c22.6 0 42.8 10.4 56 26.7"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm165.5 141.3 72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7l-5.4-10.8h-90.4l-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7 186.8 280h42.3zM392 256a24 24 0 1 0 0 48 24 24 0 1 0 0-48m24-43.9V184c0-13.3 10.7-24 24-24s24 10.7 24 24v144c0 13.3-10.7 24-24 24-6.6 0-12.6-2.7-17-7-9.4 4.5-19.9 7-31 7-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1"
                />
                <path
                  className="aps-icon-foreground"
                  d="M208 160c9.1 0 17.4 5.1 21.5 13.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7l-5.4-10.8h-90.4l-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3zm21.2 120L208 237.7 186.8 280h42.3zM392 256a24 24 0 1 0 0 48 24 24 0 1 0 0-48m24-43.9V184c0-13.3 10.7-24 24-24s24 10.7 24 24v144c0 13.3-10.7 24-24 24-6.6 0-12.6-2.7-17-7-9.4 4.5-19.9 7-31 7-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1"
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
