import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CarMirrorsIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M167.2 117.4c4.5-12.8 16.6-21.4 30.2-21.4h181.2c13.6 0 25.7 8.6 30.2 21.4l26.1 74.6H141.1zM32 224h8.6c-5.4 9.4-8.6 20.3-8.6 32v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-48h320v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V256c0-11.7-3.1-22.6-8.6-32h8.6c17.7 0 32-14.3 32-32s-14.3-32-32-32h-52.5l-22.3-63.7C455.7 57.8 419.4 32 378.6 32H197.4c-40.8 0-77.1 25.8-90.6 64.3L84.5 160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32m64 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M197.4 80c-17 0-32.1 10.7-37.8 26.8L135.4 176h305.2l-24.2-69.2c-5.6-16-20.8-26.8-37.8-26.8zM44.8 224H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h44.6l29.8-85.1C126.7 55.6 160 32 197.4 32h181.2c37.4 0 70.7 23.6 83.1 58.9l29.7 85.1H536c13.3 0 24 10.7 24 24s-10.7 24-24 24h-4.8c8.2 14.1 12.8 30.5 12.8 48v184c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56H80v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V272c0-17.5 4.7-33.9 12.8-48m83.2 0c-26.5 0-48 21.5-48 48v80h416v-80c0-26.5-21.5-48-48-48zm-16 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m320-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M191.6 64c-21.2 0-39.9 13.9-46 34.2l-28.3 94.4c3.5-.4 7.1-.6 10.7-.6h320c3.6 0 7.2.2 10.7.6l-28.3-94.4c-6.1-20.3-24.8-34.2-46-34.2zm-84.9 163.9-.5-.1C81.6 236.7 64 260.3 64 288v96h448v-96c0-27.7-17.6-51.3-42.3-60.2l-.5.1-.1-.3c-6.6-2.3-13.8-3.6-21.2-3.6H128c-7.4 0-14.5 1.3-21.2 3.6zM56.4 224H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h52.1L115 89c10.2-33.8 41.3-57 76.6-57h192.8c35.3 0 66.5 23.2 76.6 57l30.9 103H544c8.8 0 16 7.2 16 16s-7.2 16-16 16h-24.4c15.2 17 24.4 39.4 24.4 64v176c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V288c0-24.6 9.2-47 24.4-64m55.6 72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m328-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M138.4 88.6c6.9-24 28.8-40.6 53.8-40.6h191.5c25 0 47 16.6 53.8 40.6L467.7 194c-6.4-1.3-12.9-2-19.7-2H128c-6.7 0-13.3.7-19.7 2zM88 200v.7c-4.6 2.1-8.9 4.5-13.1 7.3H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c13.3 0 24 10.7 24 24m35-115.8-26.4 92.6C89.3 166.6 77.4 160 64 160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h24.4C41.2 241 32 263.4 32 288v160c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-48h320v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V288c0-24.6-9.2-47-24.4-64H544c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-13.4 0-25.3 6.6-32.6 16.8L453 84.2C444.1 53.3 415.9 32 383.7 32H192.3c-32.1 0-60.4 21.3-69.2 52.2zM528 384H48v-96c0-26.2 12.6-49.4 32-64 13.4-10 30-16 48-16h320c18 0 34.6 6 48 16 19.4 14.6 32 37.8 32 64zm-64 16h64v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zM48 448v-48h64v48c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16m440-247.3v-.7c0-13.3 10.7-24 24-24h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-42.9c-4.1-2.8-8.5-5.2-13.1-7.3M112 288a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m288-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M197.4 96c-13.6 0-25.7 8.6-30.2 21.4L141.1 192h293.8l-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4zM32 400v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-48zm512 0h-96v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M167.2 117.4c4.5-12.8 16.6-21.4 30.2-21.4h181.2c13.6 0 25.7 8.6 30.2 21.4l26.1 74.6H141.1zM32 224h8.6c-5.4 9.4-8.6 20.3-8.6 32v144h512V256c0-11.7-3.1-22.6-8.6-32h8.6c17.7 0 32-14.3 32-32s-14.3-32-32-32h-52.5l-22.3-63.7C455.7 57.8 419.4 32 378.6 32H197.4c-40.8 0-77.1 25.8-90.6 64.3L84.5 160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32m64 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
