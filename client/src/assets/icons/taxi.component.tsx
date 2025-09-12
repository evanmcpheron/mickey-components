import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TaxiIcon: React.FC<
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
                  d="M192 0c-17.7 0-32 14.3-32 32v32.2c-38.6 2.2-72.3 27.3-85.2 64.1L39.6 228.8C16.4 238.4 0 261.3 0 288v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-48h320v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V288c0-26.7-16.4-49.6-39.6-59.2l-35.2-100.5c-12.9-36.8-46.6-62-85.2-64.1V32c0-17.7-14.3-32-32-32zm-26.6 128h181.2c13.6 0 25.7 8.6 30.2 21.4l26.1 74.6H109.1l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4M96 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64m288 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M192 0c-17.7 0-32 14.3-32 32v32.2c-35.2 2.2-65.9 25.2-77.7 58.8l-34.2 97.8C19.3 237.4 0 268.4 0 304v184c0 13.3 10.7 24 24 24s24-10.7 24-24v-56h416v56c0 13.3 10.7 24 24 24s24-10.7 24-24V304c0-35.6-19.4-66.6-48.1-83.2l-34.3-97.9c-11.7-33.6-42.4-56.6-77.6-58.7V32c0-17.7-14.3-32-32-32zm-26.6 112h181.2c17 0 32.1 10.7 37.8 26.8l24.2 69.2H103.4l24.2-69.2c5.6-16 20.8-26.8 37.8-26.8M96 256h320c26.5 0 48 21.5 48 48v80H48v-80c0-26.5 21.5-48 48-48m48 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m256 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M192 48v16h128V48c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16m-32 16V48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v16h.4c35.3 0 66.5 23.2 76.6 57l34.3 114.4.4 1.3c28.9 16.5 48.3 47.6 48.3 83.3v176c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V320c0-35.7 19.4-66.8 48.3-83.3l.4-1.3L83 121c10.2-33.8 41.3-57 76.6-57zm-.4 32c-21.2 0-39.9 13.9-46 34.2l-28.3 94.4c3.5-.4 7.1-.6 10.7-.6h320c3.6 0 7.2.2 10.7.6l-28.3-94.4c-6.1-20.3-24.8-34.2-46-34.2zM74.7 259.9l-.5-.1C49.6 268.7 32 292.3 32 320v96h448v-96c0-27.7-17.6-51.3-42.3-60.2l-.5.1-.1-.3c-6.6-2.3-13.8-3.6-21.2-3.6H96c-7.4 0-14.5 1.3-21.2 3.6zM80 328a24 24 0 1 1 48 0 24 24 0 1 1-48 0m328-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M176 40v24h160V40c0-13.3-10.7-24-24-24H200c-13.3 0-24 10.7-24 24m-16 24V40c0-22.1 17.9-40 40-40h112c22.1 0 40 17.9 40 40v24c32 .1 60.1 21.4 69 52.2l33 115.6c34.1 14.7 58 48.7 58 88.2v160c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-48H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V320c0-39.5 23.9-73.5 58-88.2l33-115.6c8.9-30.8 37-52.1 69-52.2m256 352h80v-96c0-44.2-35.8-80-80-80H96c-44.2 0-80 35.8-80 80v96h400m16 16v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48zm-416 0v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48zM160.3 80c-25 0-47 16.6-53.8 40.6L76.3 226c6.4-1.3 12.9-2 19.7-2h320c6.7 0 13.3.7 19.7 2l-30.1-105.4c-6.9-24-28.8-40.6-53.8-40.6zM96 336a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m336 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M192 0h128c17.7 0 32 14.3 32 32v32H160V32c0-17.7 14.3-32 32-32m-56.8 149.4c4.5-12.8 16.6-21.4 30.2-21.4h181.2c13.6 0 25.7 8.6 30.2 21.4l26.1 74.6H109.1zM96 432v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-48zm320 0h96v48c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M135.2 149.4 109.1 224h293.8l-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4H165.4c-13.6 0-25.7 8.6-30.2 21.4m-95.6 79.4 35.2-100.5C88.3 89.8 124.6 64 165.4 64h181.2c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2v144H0V288c0-26.7 16.4-49.6 39.6-59.2M128 320a32 32 0 1 0-64 0 32 32 0 1 0 64 0m288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
