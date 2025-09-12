import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GavelIcon: React.FC<
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
                  d="M318.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-120 120c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l4-4 106.8 106.7-4 4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l120-120c12.5-12.5 12.5-32.8 0-45.3l-16-16c-12.5-12.5-32.8-12.5-45.3 0l-4 4L330.6 74.6l4-4c12.5-12.5 12.5-32.8 0-45.3l-16-16zm-152 288c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l48 48c12.5 12.5 32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-1.4-1.4 58.8-58.7-45.3-45.3-58.7 58.7-1.4-1.4z"
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
                  d="M313 7c9.3 9.3 9.4 24.3.2 33.7l158.1 158.1c9.4-9.2 24.4-9.1 33.7.2 9.4 9.4 9.4 24.6 0 33.9l-16.7 16.8L393 345l-16 16c-9.4 9.4-24.6 9.4-33.9 0-9-9-9.4-23.5-.9-32.9L184 169.9c-9.4 8.4-23.9 8.1-32.9-.9-9.4-9.4-9.4-24.6 0-33.9l16-16 95.2-95.3L279 7c9.4-9.4 24.6-9.4 33.9 0zm-33.8 67.7L217.9 136 376 294.1l61.3-61.3zm-55.8 179.9 33.9 33.9-49.8 49.8 7 7c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0l-48-48c-12.5-12.5-12.5-32.8 0-45.3l112-112c12.5-12.5 32.8-12.5 45.3 0l7 7 49.8-49.8zm-79.4 88L54.6 432 80 457.4l89.4-89.4z"
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
                  d="M315.3 4.7c6.2 6.2 6.2 16.4 0 22.6L302.6 40 472 209.4l12.7-12.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-24 24-96 96-24 24c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l12.7-12.7L184 158.6l-12.7 12.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24-24 96-96 24-24c6.2-6.2 16.4-6.2 22.6 0M206.6 136 376 305.4l73.4-73.4L280 62.6zM144 320 32 432l48 48 112-112zm-22.6-22.6c12.5-12.5 32.8-12.5 45.3 0l12.7 12.7 49.8-49.8 22.6 22.6-49.8 49.8 12.7 12.7c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0l-48-48c-12.5-12.5-12.5-32.8 0-45.3z"
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
                  d="M301.7 2.3c3.1 3.1 3.1 8.2 0 11.3L291.3 24 488 220.7l10.3-10.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-16 16-112 112-16 16c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l10.4-10.4L168 147.3l-10.3 10.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l16-16 112-112 16-16c3.1-3.1 8.2-3.1 11.3 0M179.3 136 376 332.7 476.7 232 280 35.3zm-24 172.7c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6l48 48c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6zm-33.9-11.3c12.5-12.5 32.8-12.5 45.3 0l18.3 18.3 53.1-53.1 11.3 11.3-53.1 53.1 18.3 18.3c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0l-48-48c-12.5-12.5-12.5-32.8 0-45.3l112-112z"
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
                  d="M249.4 217.4 168 298.7l-1.4-1.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l48 48c12.5 12.5 32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-1.4-1.4 81.4-81.4-45.3-45.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M273.4 9.4c12.5-12.5 32.8-12.5 45.3 0l16 16c12.5 12.5 12.5 32.8 0 45.3l-4 4 106.7 106.7 4-4c12.5-12.5 32.8-12.5 45.3 0l16 16c12.5 12.5 12.5 32.8 0 45.3l-120 120c-12.5 12.5-32.8 12.5-45.3 0l-16-16c-12.5-12.5-12.5-32.8 0-45.3l4-4-106.8-106.8-4 4c-12.5 12.5-32.8 12.5-45.3 0l-16-16c-12.5-12.5-12.5-32.8 0-45.3l120-120z"
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
