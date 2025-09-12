import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BatterySlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-87.5-68.6c19.8-14.5 32.7-38 32.7-64.5v-16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-16c0-44.2-35.8-80-80-80H154.8zM236.4 160H496c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16h-14.6zm88.5 192H112c-8.8 0-16-7.2-16-16V176c0-1.4.2-2.7.5-4l-51.1-40.3C36.9 144.4 32 159.6 32 176v160c0 44.2 35.8 80 80 80h294.2L325 352z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-87.5-68.6c19.8-14.5 32.7-38 32.7-64.5v-16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-16c0-44.2-35.8-80-80-80H154.8zM216 144h280c17.7 0 32 14.3 32 32v160c0 15.9-11.6 29.1-26.7 31.6zm129.2 224H112c-17.7 0-32-14.3-32-32V176c0-5.1 1.2-10 3.4-14.3l-38-30C36.9 144.4 32 159.6 32 176v160c0 44.2 35.8 80 80 80h294.2l-60.9-48z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM378.8 384H112c-26.5 0-48-21.5-48-48V176c0-12 4.4-22.9 11.7-31.4l-25.2-19.8C39 138.7 32 156.5 32 176v160c0 44.2 35.8 80 80 80h307.4l-40.5-32zM464 96H220.6l40.5 32H464c26.5 0 48 21.5 48 48v150l30.7 24.3c.8-4.6 1.3-9.4 1.3-14.3V176c0-44.2-35.8-80-80-80m128 96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zM386.2 400H112c-35.3 0-64-28.7-64-64V176c0-12.9 3.8-24.8 10.3-34.9l-12.6-9.9C37.1 144 32 159.4 32 176v160c0 44.2 35.8 80 80 80h294.5zM480 96H233.5l20.3 16H480c35.3 0 64 28.7 64 64v160c0 1.7-.1 3.3-.2 5l14.5 11.4c1.1-5.3 1.7-10.8 1.7-16.4v-16h16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-16v-16c0-44.2-35.8-80-80-80m80 112h16c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-16z"
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
                  d="M324.9 352H112c-8.8 0-16-7.2-16-16V176c0-1.4.2-2.7.5-4l-51.1-40.3C36.9 144.4 32 159.6 32 176v160c0 44.2 35.8 80 80 80h294.2L325 352zm171.1 0h-14.6l61.9 48.5c19.8-14.5 32.7-38 32.7-64.5v-16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-16c0-44.2-35.8-80-80-80H154.8l81.7 64H496c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16"
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
