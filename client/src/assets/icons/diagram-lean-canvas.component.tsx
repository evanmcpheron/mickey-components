import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DiagramLeanCanvasIcon: React.FC<
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
                  d="M512 96v208h64V96zm-48 0h-64v80h64zm-112 0h-64v208h64zm-112 0h-64v80h64zm-112 0H64v208h64zM64 352v64h232v-64zm280 64h232v-64H344zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm240 208v-80h-64v80zm224-80h-64v80h64z"
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
                  d="M512 80v216h80V96c0-8.8-7.2-16-16-16zm-48 0h-64v88h64zm-112 0h-64v216h64zm-112 0h-64v88h64zm-112 0H64c-8.8 0-16 7.2-16 16v200h80zM48 344v72c0 8.8 7.2 16 16 16h232v-88zm296 88h232c8.8 0 16-7.2 16-16v-72H344zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm240 200v-80h-64v80zm224-80h-64v80h64z"
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
                  d="M512 64v256h96V96c0-17.7-14.3-32-32-32zm-32 0h-96v128h96zm-128 0h-64v256h64zm-96 0h-96v128h96zm-128 0H64c-17.7 0-32 14.3-32 32v224h96zM32 352v64c0 17.7 14.3 32 32 32h240v-96zm304 96h240c17.7 0 32-14.3 32-32v-64H336zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 224v-96h-96v96zm224-96h-96v96h96z"
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
                  d="M512 48v288h112V96c0-26.5-21.5-48-48-48zm-16 0H384v144h112zm-128 0h-96v288h96zm-112 0H144v144h112zm-128 0H64c-26.5 0-48 21.5-48 48v240h112zM16 352v64c0 26.5 21.5 48 48 48h248V352zm312 112h248c26.5 0 48-21.5 48-48v-64H328zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 240V208H144v128zm240-128H384v128h112z"
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
                  d="M128 96H64v208h64zm448 0h-64v208h64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M512 96v208h64V96zm-48 0h-64v80h64zm-112 0h-64v208h64zm-112 0h-64v80h64zm-112 0H64v208h64zM64 352v64h232v-64zm280 64h232v-64H344zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm240 208v-80h-64v80zm224-80h-64v80h64z"
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
