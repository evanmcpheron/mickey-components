import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NotEqualIcon: React.FC<
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
                  d="M369.8 37.4c14.7 9.8 18.7 29.7 8.9 44.4L337.1 144H400c17.7 0 32 14.3 32 32s-14.3 32-32 32H294.5l-64 96H400c17.7 0 32 14.3 32 32s-14.3 32-32 32H187.8l-65.2 97.7c-9.8 14.7-29.7 18.7-44.4 8.9s-18.7-29.7-8.9-44.4l41.6-62.2H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h105.5l64-96H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h212.2l65.2-97.7c9.8-14.7 29.7-18.7 44.4-8.9"
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
                  d="M373.5 36.2c11 7.5 13.8 22.4 6.3 33.3L329.2 144H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H296.5l-87 128H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H176.9l-69 101.5c-7.5 11-22.4 13.8-33.3 6.3s-13.8-22.4-6.4-33.3l50.6-74.5H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h111.5l87-128H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h231.1l69-101.5c7.5-11 22.4-13.8 33.3-6.4z"
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
                  d="M377.1 34.8c7.3 5 9.1 15 4 22.3L321 144h95c8.8 0 16 7.2 16 16s-7.2 16-16 16H298.8L188.1 336H416c8.8 0 16 7.2 16 16s-7.2 16-16 16H165.9L93.2 473.1c-5 7.3-15 9.1-22.3 4s-9.1-15-4-22.3L127 368H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h117.2l110.7-160H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h250.1l72.7-105.1c5-7.3 15-9.1 22.3-4z"
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
                  d="M380.6 33.5c3.6 2.5 4.5 7.5 1.9 11.1L301.3 160H424c4.4 0 8 3.6 8 8s-3.6 8-8 8H290.1L177.5 336H424c4.4 0 8 3.6 8 8s-3.6 8-8 8H166.2L78.5 476.6c-2.5 3.6-7.5 4.5-11.1 1.9s-4.5-7.5-1.9-11.1L146.7 352H24c-4.4 0-8-3.6-8-8s3.6-8 8-8h133.9l112.6-160H24c-4.4 0-8-3.6-8-8s3.6-8 8-8h257.8l87.7-124.6c2.5-3.6 7.5-4.5 11.1-1.9"
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
                  d="m260.2 144-42.7 64H48c-17.7 0-32-14.3-32-32s14.3-32 32-32zM153.5 304l-42.7 64H48c-17.7 0-32-14.3-32-32s14.3-32 32-32zm34.3 64 42.7-64H400c17.7 0 32 14.3 32 32s-14.3 32-32 32zm106.7-160 42.7-64H400c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M369.8 37.4c14.7 9.8 18.7 29.7 8.9 44.4l-256 384c-9.8 14.7-29.7 18.7-44.4 8.9s-18.7-29.7-8.9-44.4l256-384c9.8-14.7 29.7-18.7 44.4-8.9"
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
