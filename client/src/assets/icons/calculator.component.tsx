import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CalculatorIcon: React.FC<
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
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 64h192c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m32 160a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-32 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32m128-160a32 32 0 1 1 0-64 32 32 0 1 1 0 64m32 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64m32 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M336 176v272c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V176zm0-48H48V64c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16zm48 0V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128M80 232a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 64a24 24 0 1 0 0 48 24 24 0 1 0 0-48M80 408c0 13.3 10.7 24 24 24h88c13.3 0 24-10.7 24-24s-10.7-24-24-24h-88c-13.3 0-24 10.7-24 24m112-200a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-24 112a24 24 0 1 0 48 0 24 24 0 1 0-48 0m112-112a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-24 112a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 64a24 24 0 1 0 0 48 24 24 0 1 0 0-48"
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
                  d="M352 160v288c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V160zm0-32H32V64c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32zm32 0V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128M72 224a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48m72-72a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48m72-72a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-24 120a24 24 0 1 0 48 0 24 24 0 1 0-48 0M80 400c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M64 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM64 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm16 128a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m32-16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64 80H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16m-96-16h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32m96-144a16 16 0 1 0 0-32 16 16 0 1 0 0 32m32-16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-48 96a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m96-112a16 16 0 1 0 0-32 16 16 0 1 0 0 32m32-16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-48 96a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m32-16a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
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
                  d="M96 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-32 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32m128-160a32 32 0 1 1 0-64 32 32 0 1 1 0 64m32 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64m32 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 64h192c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m32 160a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-32 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32m128-160a32 32 0 1 1 0-64 32 32 0 1 1 0 64m32 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64m32 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
