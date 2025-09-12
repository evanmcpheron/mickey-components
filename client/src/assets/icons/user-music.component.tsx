import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserMusicIcon: React.FC<
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
                  d="M224 0a128 128 0 1 1 0 256 128 128 0 1 1 0-256m-45.7 304h91.4c36.3 0 70.1 10.9 98.3 29.5v51.6c-18 2.5-34.8 9.1-48.5 19.4-17.6 13.2-31.5 34-31.5 59.5 0 19.1 7.7 35.4 18.9 48H29.7C13.3 512 0 498.7 0 482.3 0 383.8 79.8 304 178.3 304M630 164.5c6.3 4.5 10 11.8 10 19.5v208q0 1.8-.3 3.6c.2 1.5.3 2.9.3 4.4 0 26.5-28.7 48-64 48s-64-21.5-64-48 28.7-48 64-48c5.5 0 10.9.5 16 1.5v-88.2l-144 48V464c0 26.5-28.7 48-64 48s-64-21.5-64-48 28.7-48 64-48c5.5 0 10.9.5 16 1.5V248c0-10.3 6.6-19.5 16.4-22.8l192-64c7.3-2.4 15.4-1.2 21.6 3.3"
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
                  d="M304 128a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-208 0a128 128 0 1 1 256 0 128 128 0 1 1-256 0M49.3 464H288c0 19.1 7.7 35.4 18.9 48H29.7C13.3 512 0 498.7 0 482.3 0 383.8 79.8 304 178.3 304h91.4c36.3 0 70.1 10.9 98.3 29.5v51.6c-3.2.4-6.5 1-9.6 1.7-23.3-21.6-54.4-34.8-88.7-34.8h-91.4c-65.7 0-120.1 48.7-129 112M630 164.5c6.3 4.5 10 11.8 10 19.5v208q0 1.8-.3 3.6c.2 1.5.3 2.9.3 4.4 0 26.5-28.7 48-64 48s-64-21.5-64-48 28.7-48 64-48c5.5 0 10.9.5 16 1.5v-88.2l-144 48V464c0 26.5-28.7 48-64 48s-64-21.5-64-48 28.7-48 64-48c5.5 0 10.9.5 16 1.5V248c0-10.3 6.6-19.5 16.4-22.8l192-64c7.3-2.4 15.4-1.2 21.6 3.3"
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
                  d="M320 128a96 96 0 1 0-192 0 96 96 0 1 0 192 0m-224 0a128 128 0 1 1 256 0 128 128 0 1 1-256 0M32 480h257.4c2.5 12.2 8.2 23 16.1 32H29.7C13.3 512 0 498.7 0 482.3 0 383.8 79.8 304 178.3 304h91.4c43.5 0 83.3 15.6 114.3 41.4v40.2c-1.5 0-2.9 0-4.4.1-26.8-30.4-66.1-49.7-109.9-49.7h-91.4c-80 0-145 64.3-146.3 144m565.9-312.2c20.7-6.9 42.1 8.5 42.1 30.4V392c0 1.1-.1 2.2-.3 3.2q.3 2.4.3 4.8c0 26.5-28.7 48-64 48s-64-21.5-64-48 28.7-48 64-48c11.7 0 22.6 2.3 32 6.4v-88.2l-160 53.3V464c0 26.5-28.7 48-64 48s-64-21.5-64-48 28.7-48 64-48c11.7 0 22.6 2.3 32 6.4V251.5c0-13.8 8.8-26 21.9-30.4zM448 289.8l160-53.3v-38.3l-160 53.3zM608 400c0-.9-.4-4.2-5.9-8.3S587.5 384 576 384s-20.5 3.5-26.1 7.7c-5.5 4.1-5.9 7.4-5.9 8.3s.4 4.2 5.9 8.3 14.6 7.7 26.1 7.7 20.5-3.5 26.1-7.7c5.5-4.1 5.9-7.4 5.9-8.3m-192 64c0-.9-.4-4.2-5.9-8.3S395.5 448 384 448s-20.5 3.5-26.1 7.7c-5.5 4.1-5.9 7.4-5.9 8.3s.4 4.2 5.9 8.3 14.6 7.7 26.1 7.7 20.5-3.5 26.1-7.7c5.5-4.1 5.9-7.4 5.9-8.3"
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
                  d="M112 128a112 112 0 1 1 224 0 112 112 0 1 1-224 0m240 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M16 482.3C16 392.7 88.7 320 178.3 320h91.4c53 0 100.1 25.4 129.7 64.8l.6.1v-24.3c-32.5-34.8-78.9-56.6-130.3-56.6h-91.4C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h277.5c-4.3-4.8-8.1-10.2-11.2-16H29.7c-7.6 0-13.7-6.1-13.7-13.7m608-292.1v44l-176 58.7v-49.4c0-3.4 2.2-6.5 5.5-7.6l160-53.3c5.2-1.7 10.5 2.1 10.5 7.6m0 60.9v117.1c-11.7-10-28.9-16.2-48-16.2-35.3 0-64 21.5-64 48s28.7 48 64 48 64-21.5 64-48c0-1.8-.1-3.7-.4-5.5.3-.8.4-1.6.4-2.5V190.2c0-16.4-16-27.9-31.6-22.8l-160 53.3c-9.8 3.3-16.4 12.4-16.4 22.8v188.7c-11.7-10-28.9-16.2-48-16.2-35.3 0-64 21.5-64 48s28.7 48 64 48 64-21.5 64-48V309.8zm0 148.9c0 7.1-3.8 14.7-12.3 21.1S590.6 432 576 432s-27.1-4.4-35.7-10.9S528 407 528 400s3.8-14.7 12.3-21.1S561.4 368 576 368s27.1 4.4 35.7 10.9S624 393 624 400m-192 64c0 7.1-3.8 14.7-12.3 21.1S398.6 496 384 496s-27.1-4.4-35.7-10.9S336 471 336 464s3.8-14.7 12.3-21.1S369.4 432 384 432s27.1 4.4 35.7 10.9S432 457 432 464"
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
                  d="M96 128a128 128 0 1 1 256 0 128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c36.3 0 70.1 10.9 98.3 29.5v51.6c-18 2.5-34.8 9.1-48.5 19.4-17.6 13.2-31.5 34-31.5 59.5 0 19.1 7.7 35.4 18.9 48H29.7C13.3 512 0 498.7 0 482.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M640 184c0-7.7-3.7-15-10-19.5s-14.3-5.7-21.6-3.3l-192 64c-9.8 3.3-16.4 12.4-16.4 22.8v169.5c-5.1-1-10.5-1.5-16-1.5-35.3 0-64 21.5-64 48s28.7 48 64 48 64-21.5 64-48V313.3l144-48v88.2c-5.1-1-10.5-1.5-16-1.5-35.3 0-64 21.5-64 48s28.7 48 64 48 64-21.5 64-48c0-1.5-.1-3-.3-4.4q.3-1.8.3-3.6V184"
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
