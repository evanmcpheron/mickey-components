import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleEnvelopeIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M128 192c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v9.3l-119.3 54.3c-2.7 1.2-5.7 1.9-8.7 1.9s-5.9-.6-8.7-1.9L128 201.3zm149.9 92.7L384 236.5V320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-83.5l106.1 48.3c6.9 3.1 14.3 4.8 21.9 4.8s15-1.6 21.9-4.8z"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-7.3-256.4c2.2 1.2 4.7 1.9 7.3 1.9s5.1-.6 7.3-1.9l120.6-66.4c-1.4-16.3-15.2-29.2-31.9-29.2H160c-16.7 0-30.5 12.9-31.9 29.3l120.6 66.4zm30 28c-7 3.8-14.8 5.8-22.7 5.8s-15.8-2-22.7-5.8L128 225.7V320c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-94.3z"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m160-96h192c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32m192 48.5V192H160v16.5l88.5 47.1c2.3 1.2 4.9 1.9 7.5 1.9s5.2-.6 7.5-1.9zm0 36.2-73.4 39.1c-7 3.7-14.7 5.6-22.6 5.6s-15.6-1.9-22.6-5.6l-73.4-39V320h192v-75.2z"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m160-80c-8.8 0-16 7.2-16 16v7.3l4.2 2.5 97.1 59.2c3.2 2 6.9 3 10.7 3s7.5-1 10.7-3l97.2-59.2 4.2-2.5V192c0-8.8-7.2-16-16-16zm208 42-93 56.6c-5.7 3.5-12.3 5.3-19 5.3s-13.3-1.8-19-5.3L144 218v102c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16zm-208-58h192c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M128 192c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v9.3l-119.3 54.3c-2.7 1.2-5.7 1.9-8.7 1.9s-5.9-.6-8.7-1.9L128 201.3zm149.9 92.7L384 236.5V320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-83.5l106.1 48.3c6.9 3.1 14.3 4.8 21.9 4.8s15-1.6 21.9-4.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 160c-17.7 0-32 14.3-32 32v9.3l119.3 54.3c2.7 1.2 5.7 1.9 8.7 1.9s5.9-.6 8.7-1.9L384 201.3V192c0-17.7-14.3-32-32-32zm224 76.5-106.1 48.2c-6.9 3.1-14.3 4.8-21.9 4.8s-15-1.6-21.9-4.8L128 236.5V320c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32z"
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
