import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleZIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384h144c8.9 0 17.1 5 21.3 12.9s3.6 17.5-1.5 24.8L229.8 336H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-8.9 0-17.1-5-21.3-12.9s-3.6-17.5 1.5-24.8l118-170.3H184c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384c-13.3 0-24 10.7-24 24s10.7 24 24 24h98.2L164.3 346.3c-5.1 7.3-5.7 16.9-1.5 24.8S175.1 384 184 384h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-98.2l117.9-170.3c5.1-7.3 5.7-16.9 1.5-24.8S336.9 128 328 128z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-384c-8.8 0-16 7.2-16 16s7.2 16 16 16h128.9L163 358.7c-3.5 4.9-3.9 11.3-1.2 16.6S170 384 176 384h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H207.1L349 153.3c3.5-4.9 3.9-11.3 1.2-16.6S342 128 336 128z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-384c-4.4 0-8 3.6-8 8s3.6 8 8 8h175.4L153.8 371c-1.9 2.4-2.3 5.7-1 8.5s4.1 4.5 7.2 4.5h192c4.4 0 8-3.6 8-8s-3.6-8-8-8H176.6l181.6-227c1.9-2.4 2.3-5.7 1-8.5s-4.1-4.5-7.2-4.5z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384h144c8.9 0 17.1 5 21.3 12.9s3.6 17.5-1.5 24.8L229.8 336H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-8.9 0-17.1-5-21.3-12.9s-3.6-17.5 1.5-24.8l118-170.3H184c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 152c0-13.3 10.7-24 24-24h144c8.9 0 17.1 5 21.3 12.9s3.6 17.5-1.5 24.8L229.8 336H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-8.9 0-17.1-5-21.3-12.9s-3.6-17.5 1.5-24.8l118-170.3H184c-13.3 0-24-10.7-24-24"
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
