import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleArrowDownRightIcon: React.FC<
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
                  d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-64 368c-13.3 0-24-10.7-24-24s10.7-24 24-24h94.1L151 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l135 135V184c0-13.3 10.7-24 24-24s24 10.7 24 24v160c0 13.3-10.7 24-24 24z"
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
                  d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416m0-464a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-64 368h152c13.3 0 24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v102.1L185 151c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l135 135H192c-13.3 0-24 10.7-24 24s10.7 24 24 24z"
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
                  d="M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448m0-480a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-56 352h136c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16s-16 7.2-16 16v105.4L187.3 164.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L297.4 320H200c-8.8 0-16 7.2-16 16s7.2 16 16 16"
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
                  d="M256 496a240 240 0 1 1 0-480 240 240 0 1 1 0 480m0-496a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-56 352h144c4.4 0 8-3.6 8-8V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v124.7L173.7 162.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L324.7 336H200c-4.4 0-8 3.6-8 8s3.6 8 8 8"
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
                  d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-64 368c-13.3 0-24-10.7-24-24s10.7-24 24-24h94.1L151 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l135 135V184c0-13.3 10.7-24 24-24s24 10.7 24 24v160c0 13.3-10.7 24-24 24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M344 368H192c-13.3 0-24-10.7-24-24s10.7-24 24-24h94.1L151 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l135 135V184c0-13.3 10.7-24 24-24s24 10.7 24 24v160c0 13.3-10.7 24-24 24z"
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
