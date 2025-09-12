import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SubtitlesSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-30-23.5c4.6-8.8 7.2-18.9 7.2-29.6V96c0-35.3-28.7-64-64-64H96c-6.7 0-13.1 1-19.2 2.9zm355 278.2-1.2-.9c-5.3-4.4-8.6-11-8.6-18.4 0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-5.3 0-10.2-1.7-14.2-4.6zM461 336h27c13.3 0 24 10.7 24 24 0 4.8-1.4 9.3-3.8 13zm26.4 144-121.9-96H312c-13.3 0-24-10.7-24-24 0-11.1 7.5-20.4 17.7-23.2l-62-48.8H152c-13.3 0-24-10.7-24-24s10.7-24 24-24h30.8L32 121.2V416c0 35.3 28.7 64 64 64zM152 336h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-30-23.5c4.6-8.8 7.2-18.9 7.2-29.6V96c0-35.3-28.7-64-64-64H96c-6.7 0-13.1 1-19.2 2.9zM134.4 80H544c8.8 0 16 7.2 16 16v317.6L508.2 373c2.4-3.7 3.8-8.2 3.8-13 0-13.3-10.7-24-24-24h-27l-67.2-52.6c4 2.9 8.9 4.6 14.2 4.6h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24 0 7.4 3.4 14 8.6 18.4zm353 400-60.9-48H96c-8.8 0-16-7.2-16-16V159l-48-37.8V416c0 35.3 28.7 64 64 64zm-121.9-96-59.9-47.2c-10.1 2.8-17.6 12.1-17.6 23.2 0 13.3 10.7 24 24 24zm-121.8-96-60.9-48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24zM152 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zm434 444.6H96c-17.7 0-32-14.3-32-32V135.4l-32-25.2V416c0 35.3 28.7 64 64 64h404.4zM544 32H139.6l40.5 32H544c17.7 0 32 14.3 32 32v280.6l32 25.3V96c0-35.3-28.7-64-64-64M423.3 256l40.5 32H496c8.8 0 16-7.2 16-16s-7.2-16-16-16zM144 256c-8.8 0-16 7.2-16 16s7.2 16 16 16h113.2l-40.5-32zm160 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h74.8l-40.5-32zm-160 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zM467.3 464H96c-26.5 0-48-21.5-48-48V133l-16-12.6V416c0 35.3 28.7 64 64 64h391.5l-20.3-16zM544 32H152.5l20.3 16H544c26.5 0 48 21.5 48 48v283l16 12.6V96c0-35.3-28.7-64-64-64m-87.5 240 20.3 16H496c4.4 0 8-3.6 8-8s-3.6-8-8-8zM144 272c-4.4 0-8 3.6-8 8s3.6 8 8 8h100.3L224 272zm160 96c-4.4 0-8 3.6-8 8s3.6 8 8 8h61.9l-20.3-16zm-160 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h96c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M600.8 445.6c4.6-8.8 7.2-18.9 7.2-29.6V96c0-35.3-28.7-64-64-64H96c-6.7 0-13.1 1-19.2 2.9l315.8 247.5c-5.3-4.4-8.6-11-8.6-18.4 0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-5.3 0-10.2-1.7-14.2-4.6L461 336h27c13.3 0 24 10.7 24 24 0 4.8-1.4 9.3-3.8 13zM487.4 480l-121.9-96H312c-13.3 0-24-10.7-24-24 0-11.1 7.5-20.4 17.7-23.2l-62-48.8H152c-13.3 0-24-10.7-24-24s10.7-24 24-24h30.8L32 121.2V416c0 35.3 28.7 64 64 64zM152 336h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
