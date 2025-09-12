import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FilterSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L406.6 293.4 567 97.3c9.8-12 11.8-28.5 5.2-42.5S551.5 32 536 32H104c-8.1 0-15.8 2.5-22.3 6.8zM256 400c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3S384 460.1 384 448v-49.5L256 297.7z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L408.1 294.6 566.6 100c6.1-7.4 9.4-16.7 9.4-26.3 0-23-18.7-41.7-41.7-41.7h-429c-8.6 0-16.5 2.6-23.1 7.1zM134.4 80H521L370.3 265zM288 364.4v-41.5l-48-37.8v83.2c0 12.2 5.6 23.7 15.1 31.3l92.5 73.4c5.7 4.5 12.8 7 20.1 7 17.8 0 32.3-14.5 32.3-32.3v-36.5l-48-37.8v41.9l-64-50.8z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zm541 93.3c5.9-7.1 9.1-16 9.1-25.2 0-21.8-17.7-39.5-39.5-39.5H139.6l40.5 32h356.4c4.2 0 7.5 3.4 7.5 7.5 0 1.8-.6 3.4-1.7 4.8l-137 165.5 25.1 19.8zM352 362.8v83.3c0 1-.8 1.9-1.9 1.9-.4 0-.8-.1-1.1-.4l-61-47.4v-87.9L256 287v113.2c0 9.9 4.6 19.2 12.4 25.3l61 47.4c5.9 4.6 13.3 7.1 20.8 7.1 18.7 0 33.9-15.2 33.9-33.9v-58l-32-25.3z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zm554.8 91.4c5.3-6.7 8.2-15 8.2-23.5 0-20.8-16.8-37.6-37.6-37.6H152.5l20.3 16h365.6c11.9 0 21.6 9.7 21.6 21.6 0 4.9-1.7 9.7-4.7 13.5L424.4 246.7l12.6 9.9zM368 385.6v68.3c0 5.6-4.5 10.1-10.1 10.1-2.1 0-4.2-.7-5.9-1.9l-70.1-51c-6.2-4.5-9.9-11.7-9.9-19.4v-81.9l-16-12.6v94.5c0 12.8 6.1 24.8 16.5 32.3l70.1 51c4.5 3.2 9.8 5 15.4 5 14.4 0 26.1-11.7 26.1-26.1v-55.6l-16-12.6z"
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
                  d="m202.5 255.5 181.5 143V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6v-79.1zM567 97.3l-160.4 196L81.7 38.8C88.2 34.4 95.9 32 104 32h432c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5z"
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
