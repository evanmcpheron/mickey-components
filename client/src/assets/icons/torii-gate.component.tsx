import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ToriiGateIcon: React.FC<
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
                  d="M0 80c0 26.5 21.5 48 48 48h16v64h64v-64h96v64h64v-64h96v64h64v-64h16c26.5 0 48-21.5 48-48V13.4C512 6 506 0 498.6 0c-1.7 0-3.4.3-5 1l-49 19.6C425.7 28.1 405.5 32 385.2 32H126.8c-20.4 0-40.5-3.9-59.4-11.4L18.4 1c-1.6-.6-3.3-1-5-1C6 0 0 6 0 13.4zm64 208v192c0 17.7 14.3 32 32 32s32-14.3 32-32V288h256v192c0 17.7 14.3 32 32 32s32-14.3 32-32V288h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
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
                  d="M48 112c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V64.5l-1.6.6C437.9 75 411.6 80 385.2 80H126.8c-26.5 0-52.7-5-77.2-14.9l-1.6-.6zm-48 0V13.4C0 6 6 0 13.4 0c1.7 0 3.4.3 5 1l49 19.6C86.3 28.1 106.5 32 126.8 32h258.4c20.4 0 40.5-3.9 59.4-11.4l49-19.6c1.6-.6 3.3-1 5-1C506 0 512 6 512 13.4V112c0 35.3-28.7 64-64 64v64h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v200c0 13.3-10.7 24-24 24s-24-10.7-24-24V288H112v200c0 13.3-10.7 24-24 24s-24-10.7-24-24V288H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40v-64c-35.3 0-64-28.7-64-64m112 128h120v-64H112zm168-64v64h120v-64z"
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
                  d="M32 112c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V40.9l-23.5 9.4c-22.7 9-46.9 13.7-71.3 13.7H126.8c-24.4 0-48.6-4.7-71.3-13.7L32 40.9zm208 64H96v80h144zm-176 0c-35.3 0-64-28.7-64-64V13.4C0 6 6 0 13.4 0c1.7 0 3.4.3 5 1l49 19.6C86.3 28.1 106.5 32 126.8 32h258.4c20.4 0 40.5-3.9 59.4-11.4l49-19.6c1.6-.6 3.3-1 5-1C506 0 512 6 512 13.4V112c0 35.3-28.7 64-64 64v80h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V288H96v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V288H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h48zm352 0H272v80h144z"
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
                  d="M16 96c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V17.2l-45.4 18.2c-20.8 8.3-43 12.6-65.4 12.6H126.8c-22.4 0-44.6-4.3-65.4-12.6L16 17.2zm64 64H64c-35.3 0-64-28.7-64-64V13.4C0 6 6 0 13.4 0c1.7 0 3.4.3 5 1l49 19.6C86.3 28.1 106.5 32 126.8 32h258.4c20.4 0 40.5-3.9 59.4-11.4l49-19.6c1.6-.6 3.3-1 5-1C506 0 512 6 512 13.4V96c0 35.3-28.7 64-64 64h-16v80h72c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v248c0 4.4-3.6 8-8 8s-8-3.6-8-8V256H96v248c0 4.4-3.6 8-8 8s-8-3.6-8-8V256H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h72zm336 0H264v80h152zm-168 0H96v80h152z"
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
                  d="M64 128h64v96H64zm160 0h64v96h-64zm160 0h64v96h-64zM64 480V256h64v224c0 17.7-14.3 32-32 32s-32-14.3-32-32m320 0V256h64v224c0 17.7-14.3 32-32 32s-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 13.4V80c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V13.4C512 6 506 0 498.6 0c-1.7 0-3.4.3-5 1l-49 19.6C425.7 28.1 405.5 32 385.2 32H126.8c-20.4 0-40.5-3.9-59.4-11.4L18.4 1c-1.6-.6-3.3-1-5-1C6 0 0 6 0 13.4M32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
