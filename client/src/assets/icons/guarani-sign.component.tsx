import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GuaraniSignIcon: React.FC<
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
                  d="M192 0c-17.7 0-32 14.3-32 32v34.7C69.2 81.9 0 160.9 0 256s69.2 174.1 160 189.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-34.7c90.8-15.2 160-94.2 160-189.3 0-17.7-14.3-32-32-32H224v-92c22.1 5.7 41.8 17.1 57.6 32.6 12.6 12.4 32.9 12.2 45.3-.4s12.2-32.9-.5-45.3C299 92 263.5 73.3 224 66.7V32c0-17.7-14.3-32-32-32m-32 132v248c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124m64 248v-92h92c-11.6 45-47 80.4-92 92"
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
                  d="M192 0c-13.3 0-24 10.7-24 24v41.5C73.3 77.3 0 158.1 0 256s73.3 178.7 168 190.5V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-41.5c94.7-11.8 168-92.6 168-190.5 0-13.3-10.7-24-24-24H216V114c29.7 5 56.2 19 76.8 39.2 9.5 9.3 24.7 9.1 33.9-.3s9.1-24.7-.3-33.9C297.2 90.2 258.8 70.8 216 65.5V24c0-13.3-10.7-24-24-24m-24 114v284C99.9 386.6 48 327.4 48 256s51.9-130.6 120-142m48 284V280h118c-10.1 60.3-57.7 107.9-118 118"
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
                  d="M176 0c-8.8 0-16 7.2-16 16v50.7C69.2 81.9 0 160.9 0 256s69.2 174.1 160 189.3V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c106 0 192-86 192-192 0-8.8-7.2-16-16-16H192V96c43.6 0 83.1 17.4 112 45.7 6.3 6.2 16.4 6.1 22.6-.2s6.1-16.4-.2-22.6C291.8 85 244.3 64 192 64V16c0-8.8-7.2-16-16-16m-16 99.2v313.6C87 398 32 333.4 32 256S87 114 160 99.2M192 416V272h159.2c-8 80.9-76.2 144-159.2 144"
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
                  d="M184 0c-4.4 0-8 3.6-8 8v56.7C77.4 72.8 0 155.3 0 256s77.4 183.2 176 191.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8v-56c106 0 192-86 192-192 0-4.4-3.6-8-8-8H192V80c48 0 91.4 19.2 123.2 50.3 3.2 3.1 8.2 3 11.3-.1s3-8.2-.1-11.3C291.8 84.9 244.3 64 192 64V8c0-4.4-3.6-8-8-8m-8 80.7v350.6C86.3 423.2 16 347.8 16 256S86.3 88.8 176 80.7M192 432V264h175.8c-4.2 93.5-81.3 168-175.8 168"
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
                  d="M192 0c-17.7 0-32 14.3-32 32v34.7c10.4-1.7 21.1-2.7 32-2.7s21.6.9 32 2.7V32c0-17.7-14.3-32-32-32m32 132c-10.2-2.6-20.9-4-32-4s-21.8 1.4-32 4v248c10.2 2.6 21 4 32 4s21.8-1.4 32-4V132m0 313.3c-10.4 1.7-21.1 2.7-32 2.7s-21.6-.9-32-2.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c59.6 0 109.8-40.8 124-96h-92v-64h128c17.7 0 32 14.3 32 32 0 106-86 192-192 192S0 362 0 256 86 64 192 64c52.3 0 99.8 21 134.4 54.9 12.6 12.4 12.8 32.6.5 45.3s-32.6 12.8-45.3.4C258.5 141.9 226.9 128 192 128"
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
