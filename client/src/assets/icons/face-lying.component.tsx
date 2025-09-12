import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceLyingIcon: React.FC<
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
                  d="M494 350.5c-4.5 1-9.2 1.5-14 1.5H352c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-8.8 0-16-7.2-16-16s7.2-16 16-16h192c11.2 0 21.7 2.9 30.9 7.9C498.8 101.8 389.3 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c108 0 200.4-66.9 238-161.5M144.4 176a32 32 0 1 1 64 0 32 32 0 1 1-64 0m160 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0M188.8 393.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c17.5-23.3 45.4-38.4 76.8-38.4 13.6 0 26.6 2.8 38.4 8 8.1 3.5 11.8 13 8.3 21.1s-13 11.8-21.1 8.3c-7.8-3.4-16.5-5.3-25.6-5.3-20.9 0-39.5 10-51.2 25.6z"
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
                  d="M431.3 368H352c-13.3 0-24-10.7-24-24s10.7-24 24-24h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H288c-13.3 0-24-10.7-24-24s10.7-24 24-24h152c7.7 0 15.1 1.2 22.1 3.4C448.1 126.1 361.2 48 256 48 141.1 48 48 141.1 48 256s93.1 208 208 208c73.6 0 138.3-38.3 175.3-96m67.4-30.3C464.6 439 368.8 512 256 512 114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256c0 8.8-.4 17.6-1.3 26.2.9 4.5 1.3 9.1 1.3 13.8 0 15.6-4.9 30-13.3 41.7M144.4 176a32 32 0 1 1 64 0 32 32 0 1 1-64 0m160 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0M195.2 390.4c-8 10.6-23 12.7-33.6 4.8s-12.7-23-4.8-33.6C175.7 336.4 206 320 240 320c14.7 0 28.8 3.1 41.6 8.7 12.1 5.3 17.7 19.5 12.4 31.6s-19.5 17.7-31.6 12.4c-6.8-3-14.4-4.6-22.4-4.6-18.3 0-34.6 8.8-44.8 22.4z"
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
                  d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c79.8 0 149.8-41.7 189.5-104.5 4.7-7.5 14.6-9.7 22.1-5s9.7 14.6 5 22.1C427.3 464.3 347.2 512 256 512 114.6 512 0 397.4 0 256S114.6 0 256 0c117.8 0 216.9 79.5 246.8 187.7 2.3 8.5-2.6 17.3-11.2 19.7s-17.3-2.6-19.7-11.2C445.8 101.5 359 32 256 32M152.4 176a24 24 0 1 1 48 0 24 24 0 1 1-48 0m160 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0M188.8 393.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c17.5-23.3 45.4-38.4 76.8-38.4 13.6 0 26.6 2.8 38.4 8 8.1 3.5 11.8 13 8.3 21.1s-13 11.8-21.1 8.3c-7.8-3.4-16.5-5.3-25.6-5.3-20.9 0-39.5 10-51.2 25.6zM288 224h160c35.3 0 64 28.7 64 64s-28.7 64-64 64h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M256 16C123.5 16 16 123.5 16 256s107.5 240 240 240c85.5 0 160.5-44.7 203.1-112 2.4-3.7 7.3-4.9 11-2.5s4.9 7.3 2.5 11C427.3 464.3 347.2 512 256 512 114.6 512 0 397.4 0 256S114.6 0 256 0c117.8 0 216.9 79.5 246.8 187.7 1.2 4.3-1.3 8.7-5.6 9.8s-8.7-1.3-9.8-5.6C459.4 90.5 366.4 16 256 16m-95.6 160a16 16 0 1 1 32 0 16 16 0 1 1-32 0m160 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-154 220.8c-2.7 3.5-7.7 4.2-11.2 1.6s-4.2-7.7-1.6-11.2C173.3 361 204.7 344 240 344c15.3 0 30 3.2 43.2 9 4 1.8 5.9 6.5 4.1 10.5s-6.5 5.9-10.5 4.1c-11.3-4.9-23.7-7.7-36.8-7.7-30.1 0-56.8 14.4-73.6 36.8zM288 232h160c30.9 0 56 25.1 56 56s-25.1 56-56 56h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8h96c22.1 0 40-17.9 40-40s-17.9-40-40-40H288c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M494 350.5c-4.5 1-9.2 1.5-14 1.5H352c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-8.8 0-16-7.2-16-16s7.2-16 16-16h192c11.2 0 21.7 2.9 30.9 7.9C498.8 101.8 389.3 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c108 0 200.4-66.9 238-161.5M144.4 176a32 32 0 1 1 64 0 32 32 0 1 1-64 0m160 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0M188.8 393.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c17.5-23.3 45.4-38.4 76.8-38.4 13.6 0 26.6 2.8 38.4 8 8.1 3.5 11.8 13 8.3 21.1s-13 11.8-21.1 8.3c-7.8-3.4-16.5-5.3-25.6-5.3-20.9 0-39.5 10-51.2 25.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176.4 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
