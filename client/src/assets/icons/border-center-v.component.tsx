import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BorderCenterVIcon: React.FC<
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
                  d="M448 448a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-384 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320-192a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-320 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320 96a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-320 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M384 64a32 32 0 1 0 64 0 32 32 0 1 0-64 0M0 64a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0m224-192a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-64 384a32 32 0 1 0 64 0 32 32 0 1 0-64 0M160 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 448a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m32 192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32z"
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
                  d="M448 448a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-384 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320-192a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-320 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320 96a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-320 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M384 64a32 32 0 1 0 64 0 32 32 0 1 0-64 0M0 64a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0m224-192a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-64 384a32 32 0 1 0 64 0 32 32 0 1 0-64 0M160 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 448a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m40 200c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
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
                  d="M208 464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zM56 448a24 24 0 1 0-48 0 24 24 0 1 0 48 0m384 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0M56 352a24 24 0 1 0-48 0 24 24 0 1 0 48 0m384 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-48-192a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-336 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m336 96a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-336 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0M392 64a24 24 0 1 0 48 0 24 24 0 1 0-48 0M8 64a24 24 0 1 0 48 0 24 24 0 1 0-48 0m288 192a24 24 0 1 0 48 0 24 24 0 1 0-48 0m48-192a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-48 384a24 24 0 1 0 48 0 24 24 0 1 0-48 0M152 64a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-48 384a24 24 0 1 0 48 0 24 24 0 1 0-48 0m48-192a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M216 472c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8s-8 3.6-8 8zM48 448a16 16 0 1 0-32 0 16 16 0 1 0 32 0m384 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0M48 352a16 16 0 1 0-32 0 16 16 0 1 0 32 0m384 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-32-192a16 16 0 1 0 32 0 16 16 0 1 0-32 0m-352 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m352 96a16 16 0 1 0 32 0 16 16 0 1 0-32 0m-352 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0M400 64a16 16 0 1 0 32 0 16 16 0 1 0-32 0M16 64a16 16 0 1 0 32 0 16 16 0 1 0-32 0m288 192a16 16 0 1 0 32 0 16 16 0 1 0-32 0m32-192a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-32 384a16 16 0 1 0 32 0 16 16 0 1 0-32 0M144 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-32 384a16 16 0 1 0 32 0 16 16 0 1 0-32 0m32-192a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M448 448a32 32 0 1 1-64 0 32 32 0 1 1 64 0m0-96a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-384 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320-192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0M384 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0M0 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64 384a32 32 0 1 1-64 0 32 32 0 1 1 64 0m224-192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64-192a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-64 384a32 32 0 1 1 64 0 32 32 0 1 1-64 0M160 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 448a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64-192a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 480c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 17.7-14.3 32-32 32"
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
