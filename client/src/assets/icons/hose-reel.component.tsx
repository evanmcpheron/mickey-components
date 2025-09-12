import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HoseReelIcon: React.FC<
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
                  d="M320 64c-106 0-192 86-192 192s86 192 192 192c40.8 0 78.6-12.7 109.7-34.4 14.5-10.1 34.4-6.6 44.6 7.9s6.6 34.4-7.9 44.6C424.8 495 374.3 512 320 512 178.6 512 64 397.4 64 256S178.6 0 320 0s256 114.6 256 256v96h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-2.3l-11.5 80.2c7.8 1.1 13.7 7.8 13.7 15.8 0 8.8-7.2 16-16 16H520c-8.8 0-16-7.2-16-16 0-8.1 6-14.7 13.7-15.8L506.3 400H504c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-96c0-106-86-192-192-192m-96 192a96 96 0 1 0 192 0 96 96 0 1 0-192 0m96 160a160 160 0 1 1 0-320 160 160 0 1 1 0 320m-64-160a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M320 48c-114.9 0-208 93.1-208 208s93.1 208 208 208c45.6 0 87.7-14.6 122-39.5 10.7-7.8 25.7-5.4 33.5 5.3s5.4 25.7-5.3 33.5C428 494 376.1 512 320 512 178.6 512 64 397.4 64 256S178.6 0 320 0s256 114.6 256 256v96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-2.3l-11.5 80.2c7.8 1.1 13.7 7.8 13.7 15.8 0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16 0-8.1 6-14.7 13.7-15.8L514.3 400H512c-13.3 0-24-10.7-24-24s10.7-24 24-24h16v-96c0-114.9-93.1-208-208-208M208 256a112 112 0 1 0 224 0 112 112 0 1 0-224 0m112 160a160 160 0 1 1 0-320 160 160 0 1 1 0 320m-64-160a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M96 256C96 132.3 196.3 32 320 32s224 100.3 224 224v96h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h1.9l12 96.1c-7.8 1-13.9 7.7-13.9 15.9 0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16 0-8.1-6.1-14.8-13.9-15.9l12-96.1h1.9c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-96C576 114.6 461.4 0 320 0S64 114.6 64 256s114.6 256 256 256c57.6 0 110.8-19 153.6-51.2 7.1-5.3 8.5-15.3 3.2-22.4s-15.3-8.5-22.4-3.2C417 463.3 370.4 480 320 480 196.3 480 96 379.7 96 256m477.9 128-12 96h-3.8l-12-96h27.8M464 256a144 144 0 1 1-288 0 144 144 0 1 1 288 0M320 80a176 176 0 1 0 0 352 176 176 0 1 0 0-352m0 240a64 64 0 1 1 0-128 64 64 0 1 1 0 128m-96-64a96 96 0 1 0 192 0 96 96 0 1 0-192 0"
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
                  d="M80 256C80 123.5 187.5 16 320 16s240 107.5 240 240v96h-40c-4.4 0-8 3.6-8 8s3.6 8 8 8h8.8L543 496.1c-4 .5-7.1 3.8-7.1 7.9 0 4.4 3.6 8 8 8H592c4.4 0 8-3.6 8-8 0-4.1-3.1-7.5-7.1-7.9L607.2 368h8.8c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40v-96C576 114.6 461.4 0 320 0S64 114.6 64 256s114.6 256 256 256c59.2 0 113.7-20.1 157.1-53.8 3.5-2.7 4.1-7.7 1.4-11.2s-7.7-4.1-11.2-1.4C426.6 477.2 375.5 496 320 496 187.5 496 80 388.5 80 256m511.1 112-14.3 128h-17.6l-14.3-128h46.2M320 408a152 152 0 1 1 0-304 152 152 0 1 1 0 304M152 256a168 168 0 1 0 336 0 168 168 0 1 0-336 0m232 0a64 64 0 1 1-128 0 64 64 0 1 1 128 0m-64-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160"
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
                  d="M128 256c0-106 86-192 192-192s192 86 192 192v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96C576 114.6 461.4 0 320 0S64 114.6 64 256s114.6 256 256 256c54.3 0 104.8-17 146.3-45.9 14.5-10.1 18-30.1 7.9-44.6s-30.1-18-44.6-7.9c-31 21.7-68.8 34.4-109.6 34.4-106 0-192-86-192-192m192 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m-160-96a160 160 0 1 0 320 0 160 160 0 1 0-320 0m224 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M480 376c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-2.3l-11.5 80.2c7.8 1.1 13.7 7.8 13.7 15.8 0 8.8-7.2 16-16 16H520c-8.8 0-16-7.2-16-16 0-8.1 6-14.7 13.7-15.8L506.3 400H504c-13.3 0-24-10.7-24-24"
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
