import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Pool8BallIcon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m384-64a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-80-48c0 11.5-4 22-10.7 30.2 11.5 10.3 18.7 25.2 18.7 41.8 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-16.6 7.2-31.5 18.7-41.8C212 166 208 155.5 208 144c0-26.5 21.5-48 48-48s48 21.5 48 48m-48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m120-56a136 136 0 1 1 272 0 136 136 0 1 1-272 0m173.3-25.8C300 166 304 155.5 304 144c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 11.5 4 22 10.7 30.2-11.5 10.3-18.7 25.2-18.7 41.8 0 30.9 25.1 56 56 56s56-25.1 56-56c0-16.6-7.2-31.5-18.7-41.8M240 144a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m368-64a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-32a16 16 0 1 0 0-32 16 16 0 1 0 0 32m37.3 14.2c11.5 10.3 18.7 25.2 18.7 41.8 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-16.6 7.2-31.5 18.7-41.8C212 166 208 155.5 208 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 11.5-4 22-10.7 30.2M256 192a24 24 0 1 0 0 48 24 24 0 1 0 0-48"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m384-64a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-32a24 24 0 1 0 0-48 24 24 0 1 0 0 48m26 6.4c17.8 9.4 30 28.1 30 49.6 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-21.5 12.2-40.2 30-49.6-8.6-7.3-14-18.2-14-30.4 0-22.1 17.9-40 40-40s40 17.9 40 40c0 12.2-5.4 23.1-14 30.4m-26 9.6a40 40 0 1 0 0 80 40 40 0 1 0 0-80"
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
                  d="M293.3 174.2C300 166 304 155.5 304 144c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 11.5 4 22 10.7 30.2-11.5 10.3-18.7 25.2-18.7 41.8 0 30.9 25.1 56 56 56s56-25.1 56-56c0-16.6-7.2-31.5-18.7-41.8M240 144a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-448a128 128 0 1 1 0 256 128 128 0 1 1 0-256"
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
