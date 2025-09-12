import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FillIcon: React.FC<
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
                  d="M86.6 9.4C74.1-3.1 53.9-3.1 41.4 9.4s-12.5 32.8 0 45.3l81.3 81.3-92.1 92.1c-37.5 37.5-37.5 98.3 0 135.8l117.5 117.5c37.5 37.5 98.3 37.5 135.8 0l190.4-190.5c28.1-28.1 28.1-73.7 0-101.8L322.9 37.7c-28.1-28.1-73.7-28.1-101.8 0l-53.1 53zM168 181.3l49.4 49.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L213.3 136l53.1-53.1c3.1-3.1 8.2-3.1 11.3 0l151.4 151.4c3.1 3.1 3.1 8.2 0 11.3L386.7 288H67.5c1.4-5.4 4.2-10.4 8.4-14.6z"
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
                  d="M73 7c-9.4-9.3-24.6-9.3-34 0s-9.4 24.6 0 33.9l89.4 89.4-97.8 97.8c-37.5 37.5-37.5 98.3 0 135.8l117.5 117.5c37.5 37.5 98.3 37.5 135.8 0l190.4-190.5c28.1-28.1 28.1-73.7 0-101.8L322.9 37.7c-28.1-28.1-73.7-28.1-101.8 0l-58.8 58.7zm89.4 157.3L231 233c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-68.7-68.7L255 71.6c9.4-9.4 24.6-9.4 33.9 0L440.4 223c9.4 9.4 9.4 24.6 0 33.9l-31 31H51.2c1.6-9.5 6.1-18.6 13.4-25.9l97.8-97.8z"
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
                  d="M59.3 4.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l97.4 97.4L30.6 228.1c-37.5 37.5-37.5 98.3 0 135.8l117.5 117.5c37.5 37.5 98.3 37.5 135.8 0l190.4-190.5c28.1-28.1 28.1-73.7 0-101.8L322.9 37.7c-28.1-28.1-73.7-28.1-101.8 0l-64.4 64.4zm97.4 142.6 88 88c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-88-88 64.4-64.4c15.6-15.6 40.9-15.6 56.6 0l151.4 151.4c15.6 15.6 15.6 40.9 0 56.6L432 288H35c1.7-13.6 7.8-26.8 18.2-37.3zm-103.4 194c-6.3-6.3-11-13.6-14.1-21.3H400L261.3 458.7c-25 25-65.5 25-90.5 0z"
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
                  d="M45.7 2.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L139.7 119 30.6 228.1c-37.5 37.5-37.5 98.3 0 135.8l117.5 117.5c37.5 37.5 98.3 37.5 135.8 0l201.8-201.8c21.9-21.9 21.9-57.3 0-79.2L311.6 26.3c-21.9-21.9-57.3-21.9-79.2 0L151 107.7zm105.3 128 91.3 91.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L162.3 119l81.4-81.4c15.6-15.6 40.9-15.6 56.6 0l174 174.1c15.6 15.6 15.6 40.9 0 56.6L454.6 288H18.9c1.8-17.7 9.4-35 23-48.6zM41.9 352.6a80.45 80.45 0 0 1-23-48.6h419.7l-166 166.1c-31.2 31.2-81.9 31.2-113.1 0z"
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
                  d="M386.7 288H67.5c-2.7 10.6.1 22.3 8.4 30.6l117.5 117.5c12.5 12.5 32.8 12.5 45.3 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M86.6 9.4C74.1-3.1 53.9-3.1 41.4 9.4s-12.5 32.8 0 45.3l81.3 81.3-92.1 92.1c-37.5 37.5-37.5 98.3 0 135.8l117.5 117.5c37.5 37.5 98.3 37.5 135.8 0l190.4-190.5c28.1-28.1 28.1-73.7 0-101.8L322.9 37.7c-28.1-28.1-73.7-28.1-101.8 0l-53.1 53zM168 181.3l49.4 49.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L213.3 136l53.1-53.1c3.1-3.1 8.2-3.1 11.3 0l151.4 151.4c3.1 3.1 3.1 8.2 0 11.3L238.6 436.1c-12.5 12.5-32.8 12.5-45.3 0L75.9 318.6c-12.5-12.5-12.5-32.8 0-45.3z"
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
