import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareDownIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm39.1-185.4 107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9c4.5-4.2 7.1-10.1 7.1-16.3 0-12.3-10-22.3-22.3-22.3H272v-96c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v96h-57.7C106 256 96 266 96 278.3c0 6.2 2.6 12.1 7.1 16.3"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M400 416V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16m48 0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zM328.8 294.6l-91 84c-3.8 3.5-8.7 5.4-13.9 5.4s-10.1-1.9-13.9-5.4l-91-84c-4.6-4.2-7.2-10.1-7.2-16.4 0-12.3 10-22.3 22.3-22.3H176V160c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v96h41.7c12.3 0 22.3 10 22.3 22.3 0 6.2-2.6 12.1-7.2 16.4z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32zm64-32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-224-16c-9.2 0-18-3.5-24.7-9.7l-91-84A38.3 38.3 0 0 1 96 278.2c0-21.1 17.1-38.3 38.3-38.3H160v-80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v80h25.7c21.1 0 38.3 17.1 38.3 38.3 0 10.7-4.5 20.9-12.3 28.1l-91 84c-6.7 6.2-15.6 9.7-24.7 9.7m3-33.2 91-84c1.3-1.2 2-2.9 2-4.6 0-3.5-2.8-6.3-6.3-6.3l-41.7.1c-8.8 0-16-7.2-16-16v-96c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v96c0 8.8-7.2 16-16 16h-41.7c-3.5 0-6.3 2.8-6.3 6.3 0 1.7.7 3.4 2 4.6l91 84c.8.8 1.9 1.2 3 1.2s2.2-.4 3-1.2z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 464c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm224-16c7.2 0 14.2-2.9 19.3-8l99.7-99.7c5.7-5.7 9-13.5 9-21.7 0-16.9-13.7-30.6-30.6-30.6H272v-88c0-22.1-17.9-40-40-40h-16c-22.1 0-40 17.9-40 40v88h-49.4c-16.9 0-30.6 13.7-30.6 30.6 0 8.1 3.2 15.9 9 21.7l99.7 99.7c5.1 5.1 12.1 8 19.3 8m-8-19.3L116.3 281c-2.7-2.7-4.3-6.5-4.3-10.3 0-8.1 6.5-14.6 14.6-14.6H184c4.4 0 8-3.6 8-8V152c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v96c0 4.4 3.6 8 8 8h57.4c8.1 0 14.6 6.5 14.6 14.6 0 3.9-1.5 7.6-4.3 10.3L232 380.7c-2.1 2.1-5 3.3-8 3.3s-5.9-1.2-8-3.3"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm39.1-185.4 107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9c4.5-4.2 7.1-10.1 7.1-16.3 0-12.3-10-22.3-22.3-22.3H272v-96c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v96h-57.7C106 256 96 266 96 278.3c0 6.2 2.6 12.1 7.1 16.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="m210.2 394.5-107.1-99.9c-4.5-4.2-7.1-10.1-7.1-16.3 0-12.3 10-22.3 22.3-22.3H176v-96c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v96h57.7c12.3 0 22.3 10 22.3 22.3 0 6.2-2.6 12.1-7.1 16.3l-107.1 99.9c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5"
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
