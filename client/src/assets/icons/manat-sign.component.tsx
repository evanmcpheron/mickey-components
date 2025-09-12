import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ManatSignIcon: React.FC<
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
                  d="M192 32c-17.7 0-32 14.3-32 32v34.7C69.2 113.9 0 192.9 0 288v160c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-59.6 40.8-109.8 96-124v284c0 17.7 14.3 32 32 32s32-14.3 32-32V164c55.2 14.2 96 64.3 96 124v160c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-95.1-69.2-174.1-160-189.3V64c0-17.7-14.3-32-32-32"
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
                  d="M192 32c-13.3 0-24 10.7-24 24v41.5C73.3 109.3 0 190.1 0 288v168c0 13.3 10.7 24 24 24s24-10.7 24-24V288c0-71.4 51.9-130.6 120-142v310c0 13.3 10.7 24 24 24s24-10.7 24-24V146c68.1 11.4 120 70.7 120 142v168c0 13.3 10.7 24 24 24s24-10.7 24-24V288c0-97.9-73.3-178.7-168-190.5V56c0-13.3-10.7-24-24-24"
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
                  d="M192 32c-8.8 0-16 7.2-16 16v48.7C77.4 104.8 0 187.3 0 288v176c0 8.8 7.2 16 16 16s16-7.2 16-16V288c0-83 63.1-151.2 144-159.2V464c0 8.8 7.2 16 16 16s16-7.2 16-16V128.8c80.9 8 144 76.2 144 159.2v176c0 8.8 7.2 16 16 16s16-7.2 16-16V288c0-100.7-77.4-183.2-176-191.3V48c0-8.8-7.2-16-16-16"
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
                  d="M192 32c-4.4 0-8 3.6-8 8v56.2C81.7 100.4 0 184.6 0 288v184c0 4.4 3.6 8 8 8s8-3.6 8-8V288c0-94.5 74.5-171.6 168-175.8V472c0 4.4 3.6 8 8 8s8-3.6 8-8V112.2c93.5 4.2 168 81.3 168 175.8v184c0 4.4 3.6 8 8 8s8-3.6 8-8V288c0-103.4-81.7-187.6-184-191.8V40c0-4.4-3.6-8-8-8"
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
                  d="M192 32c-17.7 0-32 14.3-32 32v34.7c10.4-1.7 21.1-2.7 32-2.7s21.6.9 32 2.7V64c0-17.7-14.3-32-32-32m32 132c-10.2-2.6-21-4-32-4s-21.8 1.4-32 4v284c0 17.7 14.3 32 32 32s32-14.3 32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 288C0 182 86 96 192 96s192 86 192 192v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V288c0-70.7-57.3-128-128-128S64 217.3 64 288v160c0 17.7-14.3 32-32 32S0 465.7 0 448z"
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
