import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GIcon: React.FC<
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
                  d="M224 96c-88.4 0-160 71.6-160 160s71.6 160 160 160c77.4 0 142-55 156.8-128H256c-17.7 0-32-14.3-32-32s14.3-32 32-32h144c25.8 0 49.6 21.4 47.2 50.6C437.8 389.6 341.4 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57 13.2 11.8 14.3 32 2.5 45.2s-32 14.3-45.2 2.5C302.3 111.4 265 96 224 96"
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
                  d="M224 80c-97.2 0-176 78.8-176 176s78.8 176 176 176c89.1 0 162.7-66.2 174.4-152h-149c-13.3 0-24-10.7-24-24s10.7-24 24-24H408c21.6 0 41.2 17.9 39.3 41.9C438.2 389.3 341.7 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57 9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9C310.2 96.9 269.1 80 224 80"
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
                  d="M224 64C118 64 32 150 32 256s86 192 192 192c98.5 0 179.8-74.3 190.7-169.9.2-1.5-.3-2.8-1.4-4-1.2-1.2-3.1-2.2-5.3-2.2H242.3c-8.8 0-16-7.2-16-16s7.2-16 16-16H408c21.5 0 41.3 17.9 38.5 41.8C433.7 393.4 339 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57 6.6 5.9 7.1 16 1.3 22.6s-16 7.1-22.6 1.3C318 82.5 273.2 64 224 64"
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
                  d="M224 48C109.1 48 16 141.1 16 256s93.1 208 208 208c109.7 0 199.6-84.9 207.4-192.6.3-3.8-2.9-7.4-7.4-7.4H232c-4.4 0-8-3.6-8-8s3.6-8 8-8h192c13.1 0 24.4 10.8 23.4 24.6C438.9 388.6 342.1 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57 3.3 2.9 3.6 8 .6 11.3s-8 3.6-11.3.6C325.9 68 277.3 48 224 48"
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
                  d="M224 96c-88.4 0-160 71.6-160 160s71.6 160 160 160c77.4 0 142-55 156.8-128H256c-17.7 0-32-14.3-32-32s14.3-32 32-32h144c25.8 0 49.6 21.4 47.2 50.6C437.8 389.6 341.4 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57 13.2 11.8 14.3 32 2.5 45.2s-32 14.3-45.2 2.5C302.3 111.4 265 96 224 96"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
