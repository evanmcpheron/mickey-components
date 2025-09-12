import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SeedlingIcon: React.FC<
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
                  d="M512 32c0 113.6-84.6 207.5-194.2 222-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32M0 96c0-17.7 14.3-32 32-32h32c123.7 0 224 100.3 224 224v192c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96"
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
                  d="M307.3 207c82.9-9.1 148.4-75.6 156-159H456c-76.7 0-142 49.1-166.1 117.5-8.8-16.8-19.4-32.6-31.6-47.1C296.1 48 370.5 0 456 0h24c17.7 0 32 14.3 32 32 0 113.6-84.6 207.4-194.2 222q-3.15-24.3-10.5-47.1zM48 112v16c0 97.2 78.8 176 176 176h8v-16c0-97.2-78.8-176-176-176zm232 176v200c0 13.3-10.7 24-24 24s-24-10.7-24-24V352h-8C100.3 352 0 251.7 0 128V96c0-17.7 14.3-32 32-32h24c123.7 0 224 100.3 224 224"
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
                  d="M480 32c0 95.3-69.4 174.4-160.5 189.4 2.7 10.2 4.7 20.7 6.1 31.4C431.4 234.9 512 142.9 512 32c0-17.7-14.3-32-32-32h-32c-81 0-152 43-191.4 107.5 7.8 8.3 15.1 17.2 21.8 26.4C310.7 73.3 374.5 32 448 32zM64 96c106 0 192 86 192 192h-32C118 288 32 202 32 96zM32 64C14.3 64 0 78.3 0 96c0 123.7 100.3 224 224 224h32v176c0 8.8 7.2 16 16 16s16-7.2 16-16V288C288 164.3 187.7 64 64 64z"
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
                  d="M480 16c8.8 0 16 7.2 16 16 0 102.9-74.7 188.4-172.9 205.1 1 5.2 1.9 10.5 2.6 15.8C431.4 234.9 512 142.9 512 32c0-17.7-14.3-32-32-32h-32c-81 0-152 43-191.4 107.5q5.7 6.15 11.1 12.6C303.7 57.9 371 16 448 16zM64 80c114.9 0 208 93.1 208 208v16h-48C109.1 304 16 210.9 16 96c0-8.8 7.2-16 16-16zM32 64C14.3 64 0 78.3 0 96c0 123.7 100.3 224 224 224h48v184c0 4.4 3.6 8 8 8s8-3.6 8-8V288C288 164.3 187.7 64 64 64z"
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
                  d="M480 0c17.7 0 32 14.3 32 32 0 123.7-100.3 224-224 224h-2.3c-5.9-41.1-22.9-78.7-48-109.4C269.2 61 351.5 0 448 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 64C14.3 64 0 78.3 0 96c0 123.7 100.3 224 224 224v160c0 17.7 14.3 32 32 32s32-14.3 32-32V288C288 164.3 187.7 64 64 64z"
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
