import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RssIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 64c0-17.7 14.3-32 32-32 229.8 0 416 186.2 416 416 0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96 14.3 96 0 81.7 0 64m0 352a64 64 0 1 1 128 0 64 64 0 1 1-128 0m32-256c159.1 0 288 128.9 288 288 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224-17.7 0-32-14.3-32-32s14.3-32 32-32"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 56c0-13.3 10.7-24 24-24 234.2 0 424 189.8 424 424 0 13.3-10.7 24-24 24s-24-10.7-24-24C400 248.3 231.7 80 24 80 10.7 80 0 69.3 0 56m64 376a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128M24 176c154.6 0 280 125.4 280 280 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1-103.9-232-232-232-13.3 0-24-10.7-24-24s10.7-24 24-24"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16c220.9 0 400 179.1 400 400 0 8.8 7.2 16 16 16s16-7.2 16-16C448 225.4 254.6 32 16 32m0 144c-8.8 0-16 7.2-16 16s7.2 16 16 16c141.4 0 256 114.6 256 256 0 8.8 7.2 16 16 16s16-7.2 16-16c0-159.1-128.9-288-288-288m16 240a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8c234.2 0 424 189.8 424 424 0 4.4 3.6 8 8 8s8-3.6 8-8C448 229 251 32 8 32m0 144c-4.4 0-8 3.6-8 8s3.6 8 8 8c154.6 0 280 125.4 280 280 0 4.4 3.6 8 8 8s8-3.6 8-8c0-163.5-132.5-296-296-296m8 240a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32c194.4 0 352 157.6 352 352 0 17.7 14.3 32 32 32s32-14.3 32-32C448 218.2 261.8 32 32 32m0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32c123.7 0 224 100.3 224 224 0 17.7 14.3 32 32 32s32-14.3 32-32c0-159.1-128.9-288-288-288"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 416a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
