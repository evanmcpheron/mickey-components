import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChfSignIcon: React.FC<
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
                  d="M0 113.4C0 68.5 36.5 32 81.4 32c30.8 0 59 17.4 72.8 45l2.3 4.7c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3l-2.3-4.7c-3-5.9-9-9.6-15.6-9.6-9.6 0-17.4 7.8-17.4 17.4v285.2c0 9.6 7.8 17.4 17.4 17.4 6.6 0 12.6-3.7 15.6-9.6l2.3-4.7c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.3 4.7c-13.8 27.6-42 45-72.8 45C36.5 480 0 443.5 0 398.6zM224 32c17.7 0 32 14.3 32 32v160h96V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V288h-96v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.7 14.3-32 32-32m224 32c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v128h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64v160c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
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
                  d="M0 115.3C0 69 38.2 32 83.9 32c30.9 0 59.6 17.4 73.6 45.3 5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7C108.9 87.4 96.9 80 83.9 80 64.1 80 48 96.1 48 115.3v281.4c0 19.2 16.1 35.3 35.9 35.3 13 0 25-7.4 30.6-18.7 5.9-11.9 20.3-16.7 32.2-10.7s16.7 20.3 10.7 32.2c-13.9 27.8-42.7 45.2-73.5 45.2C38.2 480 0 443 0 396.7zM216 32c13.3 0 24 10.7 24 24v168h128V56c0-13.3 10.7-24 24-24s24 10.7 24 24v400c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H240v184c0 13.3-10.7 24-24 24s-24-10.7-24-24V56c0-13.3 10.7-24 24-24m232 24c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H496v144h88c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88v184c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
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
                  d="M0 112c0-44.2 35.8-80 80-80h4.2c28 0 53.6 15.8 66.1 40.8 4 7.9.7 17.5-7.2 21.5s-17.5.7-21.5-7.2C114.6 73 100.1 64 84.2 64H80c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h4.2c15.9 0 30.4-9 37.5-23.2 4-7.9 13.6-11.1 21.5-7.2s11.1 13.6 7.2 21.5c-12.5 25-38.1 40.8-66.1 40.8H80c-44.2 0-80-35.8-80-80zm208-80c8.8 0 16 7.2 16 16v176h160V48c0-8.8 7.2-16 16-16s16 7.2 16 16v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V256H224v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.8 7.2-16 16-16m240 16c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H480v160h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H480v208c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
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
                  d="M0 114.4C0 68.9 36.9 32 82.4 32h3c33.7 0 63.5 21.5 74.2 53.5 1.4 4.2-.9 8.7-5.1 10.1s-8.7-.9-10.1-5.1c-8.5-25.4-32.2-42.5-59-42.5h-3C45.7 48 16 77.7 16 114.4v283.2c0 36.7 29.7 66.4 66.4 66.4h3c26.8 0 50.5-17.1 59-42.5 1.4-4.2 5.9-6.5 10.1-5.1s6.5 5.9 5.1 10.1c-10.7 32-40.5 53.5-74.2 53.5h-3C36.9 480 0 443.1 0 397.6zM216 32c4.4 0 8 3.6 8 8v200h160V40c0-4.4 3.6-8 8-8s8 3.6 8 8v432c0 4.4-3.6 8-8 8s-8-3.6-8-8V256H224v216c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-4.4 3.6-8 8-8m232 8c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8s-3.6 8-8 8H464v192h136c4.4 0 8 3.6 8 8s-3.6 8-8 8H464v216c0 4.4-3.6 8-8 8s-8-3.6-8-8z"
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
                  d="M224 32c17.7 0 32 14.3 32 32v160h96V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V288h-96v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 113.4C0 68.5 36.5 32 81.4 32c30.8 0 59 17.4 72.8 45l2.3 4.7c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3l-2.3-4.7c-3-5.9-9-9.6-15.6-9.6-9.6 0-17.4 7.8-17.4 17.4v285.2c0 9.6 7.8 17.4 17.4 17.4 6.6 0 12.6-3.7 15.6-9.6l2.3-4.7c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.3 4.7c-13.8 27.6-42 45-72.8 45C36.5 480 0 443.5 0 398.6zM448 64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v128h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64v160c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
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
