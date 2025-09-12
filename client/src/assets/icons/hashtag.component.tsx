import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HashtagIcon: React.FC<
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
                  d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8l-9.8 58.8h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8l-9.7 58.8H416c17.7 0 32 14.3 32 32s-14.3 32-32 32h-68.9l-21.3 128H384c17.7 0 32 14.3 32 32s-14.3 32-32 32h-68.9l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7h-95.2l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.7-58.9H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zm5.8 159.6-21.3 128h95.1l21.3-128z"
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
                  d="M188.7 32.5c13 2.6 21.4 15.2 18.8 28.2l-15 75.3h111l16.9-84.7c2.6-13 15.2-21.4 28.2-18.8s21.4 15.2 18.8 28.2L352.5 136H424c13.3 0 24 10.7 24 24s-10.7 24-24 24h-81.1l-28.8 144H392c13.3 0 24 10.7 24 24s-10.7 24-24 24h-87.5l-16.9 84.7c-2.6 13-15.2 21.4-28.2 18.8s-21.4-15.2-18.8-28.2l14.9-75.3h-111l-16.9 84.7c-2.6 13-15.2 21.4-28.2 18.8S78 464.3 80.6 451.3L95.5 376H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h81.1l28.8-144H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h87.5l16.9-84.7c2.6-13 15.2-21.4 28.2-18.8zM182.9 184l-28.8 144h111l28.8-144z"
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
                  d="M207.6 51.6c2-8.6-3.4-17.2-12-19.2s-17.2 3.4-19.2 12l-23 99.6H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h98l-36.9 160H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h85.7l-21.3 92.4c-2 8.6 3.4 17.2 12 19.2s17.2-3.4 19.2-12l23-99.6h127.1l-21.3 92.4c-2 8.6 3.4 17.2 12 19.2s17.2-3.4 19.2-12l23-99.6H400c8.8 0 16-7.2 16-16s-7.2-16-16-16h-98l36.9-160H432c8.8 0 16-7.2 16-16s-7.2-16-16-16h-85.7l21.3-92.4c2-8.6-3.4-17.2-12-19.2s-17.2 3.4-19.2 12l-23 99.6H186.3zM178.9 176H306l-36.9 160H142z"
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
                  d="M169.7 32.2c4.3 1 7 5.2 6.1 9.5L153.1 144h175.6l23.5-105.7c1-4.3 5.2-7 9.5-6.1s7 5.2 6.1 9.5L345.1 144H440c4.4 0 8 3.6 8 8s-3.6 8-8 8h-98.5l-42.6 192H408c4.4 0 8 3.6 8 8s-3.6 8-8 8H295.3l-23.5 105.7c-1 4.3-5.2 7-9.5 6.1s-7-5.2-6.1-9.5L278.9 368H103.3L79.8 473.7c-1 4.3-5.2 7-9.5 6.1s-7-5.2-6.1-9.5L86.9 368H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h82.5l42.7-192H40c-4.4 0-8-3.6-8-8s3.6-8 8-8h96.7l23.5-105.7c1-4.3 5.2-7 9.5-6.1M149.5 160l-42.6 192h175.6l42.7-192z"
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
                  d="M207.6 69.3c2.9-17.4-8.9-33.9-26.3-36.8s-33.9 8.9-36.8 26.3L132.9 128h64.9zM187.1 192h-64.9L80.4 442.7c-2.9 17.4 8.9 33.9 26.3 36.8s33.9-8.9 36.8-26.3zM367.6 69.3c2.9-17.4-8.9-33.9-26.3-36.8s-33.9 8.9-36.8 26.3L260.9 320h64.9zM315.1 384h-64.9l-9.8 58.7c-2.9 17.4 8.9 33.9 26.3 36.8s33.9-8.9 36.8-26.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M292.9 128H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h218.2zm54.2 64H416c17.7 0 32-14.3 32-32s-14.3-32-32-32h-58.2zm-192 192H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H165.8zm-54.2-64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h58.2z"
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
