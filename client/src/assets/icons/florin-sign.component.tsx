import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FlorinSignIcon: React.FC<
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
                  d="M314.7 32c-38.8 0-73.7 23.3-88.6 59.1L170.7 224H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h80L98.9 396.3c-5 11.9-16.6 19.7-29.5 19.7H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h37.3c38.8 0 73.7-23.3 88.6-59.1L213.3 288H320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80l45.1-108.3c5-11.9 16.6-19.7 29.5-19.7H352c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M315.3 32c-36 0-68.3 21.9-81.7 55.3L179 224H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h103.8l-54 134.9C99.7 422 85 432 68.7 432H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h44.7c36 0 68.3-21.9 81.7-55.3l61-152.7H328c13.3 0 24-10.7 24-24s-10.7-24-24-24h-97.4l47.5-118.9C284.3 90 299 80 315.3 80H360c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M322.4 32c-32.1 0-61.2 19.2-73.7 48.8L188.2 224H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h126.6l-68.8 162.7C98.3 436.5 80.9 448 61.6 448H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h45.6c32.1 0 61.2-19.2 73.7-48.8L209.4 256H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H222.9l55.3-130.7c7.5-17.8 24.9-29.3 44.2-29.3H368c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M323 32c-29.3 0-55.6 17.7-66.7 44.8L189.9 240H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h143.4l-70.6 173.1C104.2 450.2 83.7 464 61 464H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h53c29.3 0 55.6-17.7 66.7-44.8l73-179.2H344c4.4 0 8-3.6 8-8s-3.6-8-8-8H207.2l64-157.1C279.8 61.8 300.3 48 323 48h53c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M170.7 224H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h80zm42.7 64H320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80l-26.7 64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M226.1 91.1C241 55.3 275.9 32 314.7 32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-37.3c-12.9 0-24.6 7.8-29.5 19.7L157.9 420.9C143 456.7 108.1 480 69.3 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h37.3c12.9 0 24.6-7.8 29.5-19.7z"
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
