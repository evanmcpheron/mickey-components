import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EuroSignIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48.1 240c-.1 2.7-.1 5.3-.1 8v16c0 2.7 0 5.3.1 8H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h28.3C89.9 419.9 170 480 264 480h24c17.7 0 32-14.3 32-32s-14.3-32-32-32h-24c-57.9 0-108.2-32.4-133.9-80H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H112.2c-.1-2.6-.2-5.3-.2-8v-16c0-2.7.1-5.4.2-8H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H130.1c25.7-47.6 76-80 133.9-80h24c17.7 0 32-14.3 32-32s-14.3-32-32-32h-24C170 32 89.9 92.1 60.3 176H32c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48.6 240c-.4 5.3-.6 10.6-.6 16s.2 10.7.6 16H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h33.3C84.8 412.5 170.5 480 272 480h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24c-74.6 0-138.4-46.4-164-112h156c13.3 0 24-10.7 24-24s-10.7-24-24-24H96.7c-.5-5.3-.7-10.6-.7-16s.2-10.7.7-16H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H108c25.6-65.6 89.4-112 164-112h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24C170.5 32 84.8 99.5 57.3 192H24c-13.3 0-24 10.7-24 24s10.7 24 24 24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M34.3 224c-1.5 10.5-2.3 21.1-2.3 32s.8 21.5 2.3 32H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h25.3C68.8 412.5 154.5 480 256 480h49c8.8 0 16-7.2 16-16s-7.2-16-16-16h-49c-83.6 0-154.7-53.4-181.1-128H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H66.7C65 277.6 64 266.9 64 256s.9-21.6 2.7-32H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H74.9C101.3 117.4 172.4 64 256 64h49c8.8 0 16-7.2 16-16s-7.2-16-16-16h-49C154.5 32 68.8 99.5 41.3 192H16c-8.8 0-16 7.2-16 16s7.2 16 16 16z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M35.7 208c-2.4 13-3.7 26.3-3.7 40v16c0 13.7 1.3 27 3.7 40H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h31.3C64 412.1 148.1 480 248 480h65c4.4 0 8-3.6 8-8s-3.6-8-8-8h-65c-91 0-167.8-60.8-192.1-144H280c4.4 0 8-3.6 8-8s-3.6-8-8-8H52c-2.6-12.9-4-26.3-4-40v-16c0-13.7 1.4-27.1 4-40h228c4.4 0 8-3.6 8-8s-3.6-8-8-8H55.9C80.2 108.8 157 48 248 48h65c4.4 0 8-3.6 8-8s-3.6-8-8-8h-65C148.1 32 64 99.9 39.3 192H8c-4.4 0-8 3.6-8 8s3.6 8 8 8z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M48.1 272H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h28.3c-7.1-20.1-11.3-41.6-12.1-64zm82 64H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H112.2c1.2 23.1 7.5 44.8 17.9 64m-17.9-96H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H130.1c-10.4 19.2-16.7 40.9-17.9 64m-51.9-64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h16.1c.8-22.4 5-43.9 12.1-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 248c0-119.3 96.7-216 216-216h24c17.7 0 32 14.3 32 32s-14.3 32-32 32h-24c-83.9 0-152 68.1-152 152v16c0 83.9 68.1 152 152 152h24c17.7 0 32 14.3 32 32s-14.3 32-32 32h-24c-119.3 0-216-96.7-216-216z"
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
