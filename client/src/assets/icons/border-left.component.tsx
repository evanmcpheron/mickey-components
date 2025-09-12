import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BorderLeftIcon: React.FC<
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
                  d="M32 480c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 17.7-14.3 32-32 32m96-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-320a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-448a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-96 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-320a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-448a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-192 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M24 480c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v400c0 13.3-10.7 24-24 24m104-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-320a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-448a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-96 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-320a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-448a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-192 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M16 480c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16s16 7.2 16 16v416c0 8.8-7.2 16-16 16m112-56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-336a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0 144a24 24 0 1 1 0 48 24 24 0 1 1 0-48m192 240a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-432a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 240a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-96 144a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-336a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0 144a24 24 0 1 1 0 48 24 24 0 1 1 0-48m192 240a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-432a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 240a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-192 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48m192 48a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-240a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-192 48a24 24 0 1 1 0-48 24 24 0 1 1 0 48"
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
                  d="M8 480c-4.4 0-8-3.6-8-8V40c0-4.4 3.6-8 8-8s8 3.6 8 8v432c0 4.4-3.6 8-8 8m120-48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0-352a16 16 0 1 1 0-32 16 16 0 1 1 0 32m0 160a16 16 0 1 1 0 32 16 16 0 1 1 0-32m192 224a16 16 0 1 1 0-32 16 16 0 1 1 0 32m0-416a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 224a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-96 160a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0-352a16 16 0 1 1 0-32 16 16 0 1 1 0 32m0 160a16 16 0 1 1 0 32 16 16 0 1 1 0-32m192 224a16 16 0 1 1 0-32 16 16 0 1 1 0 32m0-416a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 224a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-192 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32m192 32a16 16 0 1 1 0-32 16 16 0 1 1 0 32m0-224a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-192 32a16 16 0 1 1 0-32 16 16 0 1 1 0 32"
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
                  d="M128 416a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-384a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-96 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-448a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64M224 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192-64a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-192-64a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 480c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 17.7-14.3 32-32 32"
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
