import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RainbowIcon: React.FC<
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
                  d="M320 96C178.6 96 64 210.6 64 352v96c0 17.7-14.3 32-32 32S0 465.7 0 448v-96C0 175.3 143.3 32 320 32s320 143.3 320 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-141.4-114.6-256-256-256m0 192c-35.3 0-64 28.7-64 64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-70.7 57.3-128 128-128s128 57.3 128 128v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-35.3-28.7-64-64-64m-160 64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-123.7 100.3-224 224-224s224 100.3 224 224v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-88.4-71.6-160-160-160s-160 71.6-160 160"
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
                  d="M320 88C169.8 88 48 209.8 48 360v96c0 13.3-10.7 24-24 24S0 469.3 0 456v-96C0 183.3 143.3 40 320 40s320 143.3 320 320v96c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96c0-150.2-121.8-272-272-272m0 224c-26.5 0-48 21.5-48 48v96c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96c0-53 43-96 96-96s96 43 96 96v96c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96c0-26.5-21.5-48-48-48m-160 48v96c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96c0-114.9 93.1-208 208-208s208 93.1 208 208v96c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96c0-88.4-71.6-160-160-160s-160 71.6-160 160"
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
                  d="M320 64C160.9 64 32 192.9 32 352v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V352C0 175.3 143.3 32 320 32s320 143.3 320 320v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V352c0-159.1-128.9-288-288-288m0 192c-53 0-96 43-96 96v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V352c0-70.7 57.3-128 128-128s128 57.3 128 128v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V352c0-53-43-96-96-96m-192 96v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V352c0-123.7 100.3-224 224-224s224 100.3 224 224v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V352c0-106-86-192-192-192s-192 86-192 192"
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
                  d="M320 48C152.1 48 16 184.1 16 352v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V352C0 175.3 143.3 32 320 32s320 143.3 320 320v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V352c0-167.9-136.1-304-304-304m0 192c-61.9 0-112 50.1-112 112v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V352c0-70.7 57.3-128 128-128s128 57.3 128 128v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V352c0-61.9-50.1-112-112-112M104 360v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V360c0-128.1 103.9-232 232-232s232 103.9 232 232v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V360c0-119.3-96.7-216-216-216s-216 96.7-216 216"
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
                  d="M320 192c-88.4 0-160 71.6-160 160v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-123.7 100.3-224 224-224s224 100.3 224 224v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-88.4-71.6-160-160-160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 352C64 210.6 178.6 96 320 96s256 114.6 256 256v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-176.7-143.3-320-320-320S0 175.3 0 352v96c0 17.7 14.3 32 32 32s32-14.3 32-32zm192 0c0-35.3 28.7-64 64-64s64 28.7 64 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-70.7-57.3-128-128-128s-128 57.3-128 128v96c0 17.7 14.3 32 32 32s32-14.3 32-32z"
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
