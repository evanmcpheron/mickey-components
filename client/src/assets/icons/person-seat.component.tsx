import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonSeatIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96m48 160v-32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-66.7c-6.6-18.6-24.4-32-45.3-32-26.5 0-48 21.5-48 48v80c0 35.3 28.7 64 64 64h85.6c8.1 0 14.9 6 15.9 14l10.7 86c2 16 15.6 28 31.8 28h48c17.7 0 32-14.3 32-32s-14.3-32-32-32h-19.8l-7.2-57.9c-5-40-39-70.1-79.4-70.1zM64 160c0-17.7-14.3-32-32-32S0 142.3 0 160v160c0 70.7 57.3 128 128 128h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-35.3 0-64-28.7-64-64z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-8 92c0-6.6 5.4-12 12-12s12 5.4 12 12v92h-16c-4.4 0-8-3.6-8-8zm72 92v-56h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-57.2c-5.6-27.4-29.8-48-58.8-48-33.1 0-60 26.9-60 60v84c0 30.9 25.1 56 56 56h94c12 0 22.2 8.9 23.8 20.8l10.4 78.3c1.6 12 11.8 20.9 23.8 20.9h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-43l-7.7-57.5c-4.7-35.8-35.2-62.5-71.3-62.5zM48 152c0-13.3-10.7-24-24-24S0 138.7 0 152v176c0 66.3 53.7 120 120 120h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-39.8 0-72-32.2-72-72z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M176 88a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-56a56 56 0 1 0 0 112 56 56 0 1 0 0-112M32 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v192c0 61.9 50.1 112 112 112h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-44.2 0-80-35.8-80-80zm116 64c15.5 0 28 12.5 28 28v92h-40c-8.8 0-16-7.2-16-16v-76c0-15.5 12.5-28 28-28m58.8 16c-5.6-27.4-29.8-48-58.8-48-33.1 0-60 26.9-60 60v76c0 26.5 21.5 48 48 48h96.6c15.3 0 28.4 10.8 31.4 25.7l16.3 81.4c1.5 7.5 8.1 12.9 15.7 12.9h72c8.8 0 16-7.2 16-16s-7.2-16-16-16h-58.9l-13.7-68.6c-6-29.9-32.2-51.4-62.8-51.4H208v-72h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 240h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-66.7c-6.8 0-12.8-4.3-15.1-10.7-4.4-12.4-16.3-21.3-30.2-21.3-17.7 0-32 14.3-32 32v96c0 26.5 21.5 48 48 48h86.4c15.9 0 29.4 11.7 31.7 27.5l10.1 70.8c1.1 7.9 7.9 13.7 15.8 13.7h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-20.2c-8 0-14.7-5.9-15.8-13.7l-6.3-43.3c-4.5-31.5-31.5-55-63.4-55H192c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16M176 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0m16 224h54.4c39.8 0 73.6 29.3 79.2 68.7l6.2 43.3H352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-48c-15.9 0-29.4-11.7-31.7-27.5l-10.1-70.8c-1.1-7.9-7.9-13.7-15.8-13.7H160c-35.3 0-64-28.7-64-64v-96c0-26.5 21.5-48 48-48 20.9 0 38.7 13.4 45.3 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64v48M96 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m-80 56v208c0 48.6 39.4 88 88 88h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H104C46.6 448 0 401.4 0 344V136c0-4.4 3.6-8 8-8s8 3.6 8 8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M32 128c17.7 0 32 14.3 32 32v160c0 35.3 28.7 64 64 64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64C57.3 448 0 390.7 0 320V160c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m96 176v32h53.6c40.3 0 74.4 30 79.4 70.1l7.2 57.9H352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-48c-16.1 0-29.8-12-31.8-28l-10.7-86c-1-8-7.8-14-15.9-14H160c-35.3 0-64-28.7-64-64v-80c0-26.5 21.5-48 48-48 20.9 0 38.7 13.4 45.3 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
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
