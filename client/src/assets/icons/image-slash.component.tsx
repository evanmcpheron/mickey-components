import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ImageSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-55.5-43.5c.5-3.1.7-6.3.7-9.6V96c0-35.3-28.7-64-64-64H128c-14.4 0-27.8 4.8-38.5 12.9zm120 94.1c5.3-2 11.1-3.2 17.2-3.2 26.5 0 48 21.5 48 48 0 2-.1 4-.4 6zm169.3 132.7 20-29.4c4.5-6.6 11.9-10.5 19.8-10.5s15.4 3.9 19.8 10.5l111.7 163.6zM487.4 480l-81.2-64H152c-9.3 0-17.8-5.4-21.8-13.9s-2.6-18.5 3.5-25.6l88-104c.3-.4.6-.7 1-1.1L64 146.4V416c0 35.3 28.7 64 64 64z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-55.5-43.5c.5-3.1.7-6.3.7-9.6V96c0-35.3-28.7-64-64-64H128c-14.4 0-27.8 4.8-38.5 12.9zM134.4 80H512c8.8 0 16 7.2 16 16v292.5l-53.4-41.9L387 233.3c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3l-7.2 9.3-85.8-67.3c-.4-26.2-21.7-47.3-48-47.3-3.7 0-7.4.4-10.8 1.2zm353 400L282.9 318.9 266 340.7 235.5 298c-4.5-6.3-11.7-10-19.5-10s-15 3.7-19.5 10.1l-80 112-4.5 6.3V184.2l-48-37.8V416c0 35.3 28.7 64 64 64z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM576 96c0-35.3-28.7-64-64-64H139.6l40.5 32H512c17.7 0 32 14.3 32 32v169.4l-67.7-67.7c-15.6-15.6-40.9-15.6-56.6 0l-31 31 25.3 20 28.4-28.4c3.1-3.1 8.2-3.1 11.3 0l90.3 90.3v40.7l32 25.3zM297.6 319.8l-9.6 9.6-67.7-67.7c-15.6-15.6-40.9-15.6-56.6 0L96 329.4V160.7l-32-25.3V416c0 35.3 28.7 64 64 64h372.4l-40.5-32H214.6l108.2-108.2-25.3-20zM265.4 352l-96 96H128c-17.7 0-32-14.3-32-32v-41.4l90.3-90.3c3.1-3.1 8.2-3.1 11.3 0z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zM467.3 464h-280l123.5-123.5-12.6-10-10.2 10.2-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0L80 356.7V158.3l-16-12.7V416c0 35.3 28.7 64 64 64h359.5l-20.3-16zM512 32H152.5l20.3 16H512c26.5 0 48 21.5 48 48v196.7l-89.4-89.4c-12.5-12.5-32.8-12.5-45.3 0L400.7 228l12.6 10 23.3-23.3c6.2-6.2 16.4-6.2 22.6 0L560 315.3v38.4l16 12.6V96c0-35.3-28.7-64-64-64M80 379.3l100.7-100.7c6.2-6.2 16.4-6.2 22.6 0l73.4 73.4-112 112H128c-26.5 0-48-21.5-48-48z"
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
                  d="m64.7 86.4 63.9 50.1q-.6 3.75-.6 7.5c0 26.5 21.5 48 48 48 6.6 0 12.9-1.3 18.6-3.8L301 271.6l-20.4 29.9-21.6-28.1c-4.4-5.8-11.2-9.2-18.5-9.4s-14.2 3-18.9 8.5l-88 104c-6 7.1-7.4 17.1-3.5 25.6s12.4 13.9 21.8 13.9h333.3l65.3 51.1c-10.7 8.1-24 12.9-38.5 12.9H128c-35.3 0-64-28.7-64-64V96c0-3.3.2-6.5.7-9.6M223.6 150c.2-2 .4-4 .4-6 0-26.5-21.5-48-48-48-6.1 0-11.9 1.1-17.2 3.2L89.5 44.9C100.2 36.8 113.6 32 128 32h384c35.3 0 64 28.7 64 64v320c0 3.3-.2 6.5-.7 9.6l-75.9-59.5-111.6-163.6c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-20 29.4z"
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
