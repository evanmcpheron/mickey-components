import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceRaisedEyebrowIcon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m208.4-16a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M144 352c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16m184.8-210.2c10.7-10.7 28.5-8.9 36.9 3.7l4.9 7.4c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-4.9-7.4c-19.6-29.4-61.2-33.5-86.2-8.5l-29.5 29.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l29.5-29.5zM128 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416m256 208a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-367.6-16a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M160 352c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24m168.8-210.2-29.5 29.5c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l29.5-29.5c25-25 66.6-20.9 86.2 8.5l4.9 7.4c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-4.9-7.4c-8.4-12.6-26.2-14.4-36.9-3.7zM128 144h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-55.6-272a24 24 0 1 0-48 0 24 24 0 1 0 48 0m136 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m29.4-118.5 4.9 7.4c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-4.9-7.4c-19.6-29.4-61.2-33.5-86.2-8.5l-29.5 29.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l29.5-29.5c10.7-10.7 28.5-8.9 36.9 3.7zM112 160c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m64 176c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-63.6-272a16 16 0 1 0-32 0 16 16 0 1 0 32 0m144 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m36-115 4.9 7.4c2.5 3.7 7.4 4.7 11.1 2.2s4.7-7.4 2.2-11.1l-4.9-7.4c-16.8-25.2-52.5-28.7-73.9-7.3l-29.5 29.5c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l29.5-29.5c14.3-14.3 38.1-11.9 49.3 4.9M120 160c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8m48 184c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m208.4-16a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M144 352c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16m184.8-210.2c10.7-10.7 28.5-8.9 36.9 3.7l4.9 7.4c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-4.9-7.4c-19.6-29.4-61.2-33.5-86.2-8.5l-29.5 29.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l29.5-29.5zM128 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M328.8 141.8c10.7-10.7 28.5-8.9 36.9 3.7l4.9 7.4c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-4.9-7.4c-19.6-29.4-61.2-33.5-86.2-8.5l-29.5 29.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l29.5-29.5zM128 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm80.4 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
