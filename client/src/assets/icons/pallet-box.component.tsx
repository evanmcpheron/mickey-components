import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PalletBoxIcon: React.FC<
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
                  d="M176 0h80v112c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8L320 99.2l39.1 26.1c4.9 3.3 11.2 3.6 16.4.8s8.5-8.2 8.5-14.1V0h80c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48M0 352c0-17.7 14.3-32 32-32h576c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-64H32c-17.7 0-32-14.3-32-32m128 96h160v-64H128zm224 0h160v-64H352z"
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
                  d="M384 48v80c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L320 115.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4.8s-8.5-8.2-8.5-14.1V48h-80v192h288V48zm-256 0c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48zM0 344c0-13.3 10.7-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v96h40c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40v-96H24c-13.3 0-24-10.7-24-24m112 120h184v-96H112zm232 0h184v-96H344z"
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
                  d="M464 32c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h64v112c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L320 116l54.4 40.8c4.8 3.6 11.3 4.2 16.8 1.5S400 150 400 144V32zm-192 0h96v80l-38.4-28.8a15.9 15.9 0 0 0-19.2 0L272 112zM176 0c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM0 368c0 8.8 7.2 16 16 16h48v96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h608c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-96h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16m96 112v-96h208v96zm240 0v-96h208v96z"
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
                  d="M464 16c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32V48c0-17.7 14.3-32 32-32h80v120c0 3.1 1.8 6 4.7 7.3s6.2.8 8.5-1.2L320 98.5l50.8 43.5c2.4 2 5.7 2.5 8.6 1.2s4.7-4.1 4.7-7.3V16h80zm-192 0h96v102.6l-42.8-36.7c-3-2.6-7.4-2.6-10.4 0L272 118.6zM176 0c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM0 360c0 4.4 3.6 8 8 8h72v128H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h624c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72V368h72c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8m96 136V368h216v128zm232 0V368h216v128z"
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
                  d="M256 0v112c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8L320 99.2l39.1 26.1c4.9 3.3 11.2 3.6 16.4.8s8.5-8.2 8.5-14.1V0H256M32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-64h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H32m96 128v-64h160v64zm224 0v-64h160v64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 0h-80c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48h-80v112c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L320 99.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4.8s-8.5-8.2-8.5-14.1z"
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
