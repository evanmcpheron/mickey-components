import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WatchIcon: React.FC<
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
                  d="M112 0h160c26.5 0 48 21.5 48 48v24.2C283.7 46.8 239.6 32 192 32S100.3 46.8 64 72.2V48c0-26.5 21.5-48 48-48M64 464v-24.2c36.3 25.3 80.4 40.2 128 40.2s91.7-14.8 128-40.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48M0 256a192 192 0 1 1 384 0 192 192 0 1 1-384 0m192-104c-13.3 0-24 10.7-24 24v80c0 8 4 15.5 10.7 20l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L216 243.2V176c0-13.3-10.7-24-24-24"
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
                  d="M112 0C85.5 0 64 21.5 64 48v64h1C25.1 147.2 0 198.7 0 256s25.1 108.8 65 144h-1v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-64h-1c39.9-35.2 65-86.7 65-144s-25.1-108.8-65-144h1V48c0-26.5-21.5-48-48-48zM48 256a144 144 0 1 1 288 0 144 144 0 1 1-288 0m168-80c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 8 4 15.5 10.7 20l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L216 243.2z"
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
                  d="M128 32h128c17.7 0 32 14.3 32 32v25.7C259.8 73.3 227 64 192 64s-67.8 9.3-96 25.7V64c0-17.7 14.3-32 32-32m-64 80h1C25.1 147.2 0 198.7 0 256s25.1 108.8 65 144h-1v48c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64v-48h-1c39.9-35.2 65-86.7 65-144s-25.1-108.8-65-144h1V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64zm224 310.3V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-25.7c28.2 16.3 61 25.7 96 25.7s67.8-9.4 96-25.7M32 256a160 160 0 1 1 320 0 160 160 0 1 1-320 0m176-80c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 5.3 2.7 10.3 7.1 13.3l48 32c7.4 4.9 17.3 2.9 22.2-4.4s2.9-17.3-4.4-22.2L208 247.4z"
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
                  d="M120 16h144c22.1 0 40 17.9 40 40v44c-31.5-22.7-70.2-36-112-36s-80.5 13.4-112 36V56c0-22.1 17.9-40 40-40m-56 96h1C25.1 147.2 0 198.7 0 256c0 56.9 24.7 108 64 143.1V456c0 30.9 25.1 56 56 56h144c30.9 0 56-25.1 56-56v-56.9c39.3-35.2 64-86.2 64-143.1 0-57.3-25.1-108.8-65-144h1V56c0-30.9-25.1-56-56-56H120C89.1 0 64 25.1 64 56zm240 300v44c0 22.1-17.9 40-40 40H120c-22.1 0-40-17.9-40-40v-44c31.5 22.7 70.2 36 112 36s80.5-13.4 112-36M16 256a176 176 0 1 1 352 0 176 176 0 1 1-352 0m184-96c0-4.4-3.6-8-8-8s-8 3.6-8 8v96c0 2.5 1.2 4.9 3.2 6.4l64 48c3.5 2.7 8.5 1.9 11.2-1.6s1.9-8.5-1.6-11.2L200 252z"
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
                  d="M192 448a192 192 0 1 0 0-384 192 192 0 1 0 0 384m24-272v67.2l37.3 24.8c11 7.4 14 22.3 6.7 33.3s-22.3 14-33.3 6.7l-48-32c-6.7-4.5-10.7-12-10.7-20v-80c0-13.3 10.7-24 24-24s24 10.7 24 24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 48c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v64.9C286 82.5 241.2 64 192 64S98 82.5 64 112.9zm128 400c49.2 0 94-18.5 128-48.9V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48v-64.9c34 30.4 78.8 48.9 128 48.9m24-272v67.2l37.3 24.8c11 7.4 14 22.3 6.7 33.3s-22.3 14-33.3 6.7l-48-32c-6.7-4.5-10.7-12-10.7-20v-80c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
