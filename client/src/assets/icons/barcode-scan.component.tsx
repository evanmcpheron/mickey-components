import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BarcodeScanIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M88 32c-13.3 0-24 10.7-24 24v136h64V56c0-13.3-10.7-24-24-24zM64 456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V320H64zm96 8c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm64-8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V320h-64zm0-264h64V56c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24zm96 264c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V320h-64zm0-264h64V56c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24zm128 272c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m64 408c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V320h-64zm0-264h64V56c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24zm-352 0h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zM24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24h592c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M88 32c-13.3 0-24 10.7-24 24v136h48V56c0-13.3-10.7-24-24-24M64 456c0 13.3 10.7 24 24 24s24-10.7 24-24V320H64zm96 8c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm64-8c0 13.3 10.7 24 24 24s24-10.7 24-24V320h-48zm0-400v136h48V56c0-13.3-10.7-24-24-24s-24 10.7-24 24m112 400c0 13.3 10.7 24 24 24s24-10.7 24-24V320h-48zm0-400v136h48V56c0-13.3-10.7-24-24-24s-24 10.7-24 24m128 408c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m64 408c0 13.3 10.7 24 24 24s24-10.7 24-24V320h-48zm0-400v136h48V56c0-13.3-10.7-24-24-24s-24 10.7-24 24M160 192h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zM0 256c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 48v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m0 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320H64zm96 0V320h-32v144c0 8.8 7.2 16 16 16s16-7.2 16-16M128 48v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m64 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m96 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m64 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m96 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m96 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16M0 256c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 40v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m0 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320H64zm64 0V320h-16v152c0 4.4 3.6 8 8 8s8-3.6 8-8M112 40v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m64 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m72 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m72 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m48 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m80 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m64 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m48 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8M0 256c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 256c0-13.3 10.7-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v136H64zm0 264h64v136c0 13.3-10.7 24-24 24H88c-13.3 0-24-10.7-24-24zm96 0h32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm64 0h64v136c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm64-128h-64V56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24zm32 128h64v136c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm64-128h-64V56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24zm64 128h32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm32-128h-32V48c0-8.8 7.2-16 16-16s16 7.2 16 16zm32 128h64v136c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm64-128h-64V56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24zm-384 0h-32V48c0-8.8 7.2-16 16-16s16 7.2 16 16z"
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
