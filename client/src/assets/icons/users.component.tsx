import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UsersIcon: React.FC<
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
                  d="M144 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160m368 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160M0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7-1.3 7.2-1.9 14.7-1.9 22.3 0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7M405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96 0-7.6-.7-15-1.9-22.3 13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7 0 11.8-9.6 21.3-21.3 21.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1-192 0m-96 261.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3 0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7"
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
                  d="M144 160a80 80 0 1 0 0-160 80 80 0 1 0 0 160m368 0a80 80 0 1 0 0-160 80 80 0 1 0 0 160M0 298.7C0 310.4 9.6 320 21.3 320h214.1c-26.6-23.5-43.3-57.8-43.3-96 0-7.6.7-15 1.9-22.3-13.6-6.3-28.7-9.7-44.6-9.7h-42.7C47.8 192 0 239.8 0 298.7M405.3 320h213.4c11.8 0 21.3-9.6 21.3-21.3 0-58.9-47.8-106.7-106.7-106.7h-42.6c-15.9 0-31 3.5-44.6 9.7 1.3 7.2 1.9 14.7 1.9 22.3 0 38.2-16.8 72.5-43.3 96h.7zM320 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192m-58.7 80h117.4c39.8 0 73.2 27.2 82.6 64H178.7c9.5-36.8 42.9-64 82.6-64m0-48C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7h330.6c14.7 0 26.7-11.9 26.7-26.7 0-73.6-59.7-133.3-133.3-133.3z"
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
                  d="M96 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m96 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192m-58.7 64h117.4c54.2 0 98.4 42.5 101.2 96H160.1c2.8-53.5 47-96 101.2-96m0-32C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7h330.6c14.7 0 26.7-11.9 26.7-26.7 0-73.6-59.7-133.3-133.3-133.3zM512 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160m16 64c44.2 0 80 35.8 80 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-61.9-50.1-112-112-112h-84c2.6 10.2 4 21 4 32zm-336 0c0-11 1.4-21.8 4-32h-84C50.1 192 0 242.1 0 304c0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2 35.8-80 80-80z"
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
                  d="M80 80a64 64 0 1 1 128 0 64 64 0 1 1-128 0m144 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m96 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192m-58.7 48h117.4c64.8 0 117.3 52.5 117.3 117.3 0 5.9-4.8 10.7-10.7 10.7H154.7c-5.9 0-10.7-4.8-10.7-10.7 0-64.8 52.5-117.3 117.3-117.3m0-16C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7h330.6c14.7 0 26.7-11.9 26.7-26.7 0-73.6-59.7-133.3-133.3-133.3zM512 16a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 144a80 80 0 1 0 0-160 80 80 0 1 0 0 160m24 48c48.6 0 88 39.4 88 88 0 4.4 3.6 8 8 8s8-3.6 8-8c0-57.4-46.6-104-104-104h-92c1.3 5.2 2.4 10.6 3 16zm-343 0c.7-5.4 1.7-10.8 3-16h-92C46.6 192 0 238.6 0 296c0 4.4 3.6 8 8 8s8-3.6 8-8c0-48.6 39.4-88 88-88z"
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
                  d="M224 80a80 80 0 1 0-160 0 80 80 0 1 0 160 0m368 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0M106.7 192C47.8 192 0 239.8 0 298.7 0 310.4 9.6 320 21.3 320h214.1c-26.6-23.5-43.3-57.8-43.3-96 0-7.6.7-15 1.9-22.3-13.6-6.3-28.7-9.7-44.6-9.7zm298 128h214c11.8 0 21.3-9.6 21.3-21.3 0-58.9-47.8-106.7-106.7-106.7h-42.6c-15.9 0-31 3.5-44.6 9.7 1.3 7.2 1.9 14.7 1.9 22.3 0 38.2-16.8 72.5-43.3 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 320a96 96 0 1 0 0-192 96 96 0 1 0 0 192m-58.7 32C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7h330.6c14.7 0 26.7-11.9 26.7-26.7 0-73.6-59.7-133.3-133.3-133.3z"
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
