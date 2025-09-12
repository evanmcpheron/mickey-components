import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FilmSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-55.5-43.5c.5-3.1.7-6.3.7-9.6V96c0-35.3-28.7-64-64-64H128c-14.4 0-27.8 4.8-38.5 12.9zM224 150.3V128c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-65.9zM487.4 480l-87-68.5c-4.8 2.9-10.4 4.5-16.4 4.5H256c-17.7 0-32-14.3-32-32v-64c0-14.1 9.1-26.1 21.8-30.3l-71.1-56c.8 2 1.3 4.1 1.3 6.4v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16h32c.9 0 1.9.1 2.8.2L64 146.4V416c0 35.3 28.7 64 64 64zM112 368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm352-128c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm16-144h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16"
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
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l50.7 39.8C100.2 36.8 113.6 32 128 32h384c35.3 0 64 28.7 64 64v320c0 3.3-.2 6.5-.7 9.6l55.5 43.5c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2M176 112.6V80h-41.6zM328.3 232H416V80H224v70.3zM528 388.5V344h-56.8zm-112 35.3 71.4 56.2H128c-35.3 0-64-28.7-64-64V146.4l88.3 69.6H112v80h64v-61.3l57.5 45.3H224v152h192zM176 344h-64v72c0 8.8 7.2 16 16 16h48zM464 80v88h64V96c0-8.8-7.2-16-16-16zm64 136h-64v80h64z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM500.4 480 448 438.6v9.4H192V240H96v-79.3l-32-25.3V416c0 35.3 28.7 64 64 64zM139.6 32 192 73.4V64h256v208h96v79.3l32 25.3V96c0-35.3-28.7-64-64-64zM160 448h-32c-17.7 0-32-14.3-32-32v-48h64zM96 272h64v64H96zm384-96h64v64h-64zm0-32V64h32c17.7 0 32 14.3 32 32v48z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zM467.3 464H464v-2.6l-16-12.6V464H192V246.7L176 234v62H80v-80h73.1l-20.3-16H80v-41.7l-16-12.7V416c0 35.3 28.7 64 64 64h359.5l-20.3-16zM176 32h-23.5l20.3 16h3.2v2.6l16 12.6V48h256v217.3l16 12.7v-62h96v80h-73.1l20.3 16H560v41.7l16 12.6V96c0-35.3-28.7-64-64-64H176M80 312h96v80H80zm0 96h96v56h-48c-26.5 0-48-21.5-48-48zM464 48h48c26.5 0 48 21.5 48 48v8h-96zm96 72v80h-96v-80z"
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
                  d="m400.4 411.5 87 68.5H128c-35.3 0-64-28.7-64-64V146.4l98.8 77.8c-.9-.2-1.8-.2-2.8-.2h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-2.3-.5-4.4-1.3-6.4l71.1 56c-12.7 4.3-21.8 16.3-21.8 30.4v64c0 17.7 14.3 32 32 32h128c6 0 11.6-1.7 16.4-4.5M576 416c0 3.3-.2 6.5-.7 9.6L318.1 224H384c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v22.3L89.5 44.9C100.2 36.8 113.6 32 128 32h384c35.3 0 64 28.7 64 64zm-464-48v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m352-128v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m16-144c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
