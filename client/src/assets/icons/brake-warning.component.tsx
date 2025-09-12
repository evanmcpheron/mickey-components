import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BrakeWarningIcon: React.FC<
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
                  d="M96 256a224 224 0 1 1 448 0 224 224 0 1 1-448 0m248-104c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm-24 232a32 32 0 1 0 0-64 32 32 0 1 0 0 64M91.1 109C63.8 151.4 48 201.8 48 256s15.8 104.6 43.1 147c7.2 11.1 4 26-7.2 33.2s-26 4-33.2-7.2C18.6 379.1 0 319.7 0 256S18.6 132.9 50.7 83c7.2-11.1 22-14.4 33.2-7.2s14.4 22 7.2 33.2m498.2-26c32.1 49.9 50.7 109.3 50.7 173s-18.6 123.1-50.7 173c-7.2 11.1-22 14.4-33.2 7.2s-14.4-22-7.2-33.2c27.3-42.4 43.1-92.8 43.1-147s-15.8-104.6-43.1-147c-7.2-11.1-4-26 7.2-33.2s26-4 33.2 7.2"
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
                  d="M320 80a176 176 0 1 1 0 352 176 176 0 1 1 0-352m0 400a224 224 0 1 0 0-448 224 224 0 1 0 0 448M83.9 75.8c-11.1-7.2-26-4-33.2 7.2C18.6 132.9 0 192.3 0 256s18.6 123.1 50.7 173c7.2 11.1 22 14.4 33.2 7.2s14.4-22 7.2-33.2C63.8 360.6 48 310.2 48 256s15.8-104.6 43.1-147c7.2-11.1 4-26-7.2-33.2m472.2 0c-11.1 7.2-14.4 22-7.2 33.2 27.3 42.4 43.1 92.8 43.1 147s-15.8 104.6-43.1 147c-7.2 11.1-4 26 7.2 33.2s26 4 33.2-7.2c32.1-49.9 50.7-109.3 50.7-173s-18.6-123.1-50.7-173c-7.2-11.1-22-14.4-33.2-7.2M320 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24m32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M320 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 416a224 224 0 1 0 0-448 224 224 0 1 0 0 448m16-336c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16zm-16 232a24 24 0 1 0 0-48 24 24 0 1 0 0 48M77.5 100.6c4.8-7.4 2.6-17.3-4.8-22.1s-17.3-2.6-22.1 4.8C18.5 133.2 0 192.4 0 256s18.5 122.8 50.5 172.7c4.8 7.4 14.7 9.6 22.1 4.8s9.6-14.7 4.8-22.1C48.7 366.6 32 313.3 32 256s16.7-110.6 45.5-155.4m512-17.3c-4.8-7.4-14.7-9.6-22.1-4.8s-9.6 14.7-4.8 22.1C591.3 145.4 608 198.7 608 256s-16.7 110.6-45.5 155.4c-4.8 7.4-2.6 17.3 4.8 22.1s17.3 2.6 22.1-4.8c32-49.9 50.6-109.1 50.6-172.7s-18.6-122.8-50.5-172.7"
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
                  d="M320 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 432a224 224 0 1 0 0-448 224 224 0 1 0 0 448m8-344c0-4.4-3.6-8-8-8s-8 3.6-8 8v160c0 4.4 3.6 8 8 8s8-3.6 8-8zm-8 232a16 16 0 1 0 0-32 16 16 0 1 0 0 32M62.7 96.3c2.4-3.7 1.3-8.7-2.4-11.1s-8.7-1.3-11.1 2.4C18.1 136.2 0 194 0 256s18.1 119.8 49.3 168.3c2.4 3.7 7.3 4.8 11.1 2.4s4.8-7.3 2.4-11.1C33.2 369.6 16 314.8 16 256S33.2 142.4 62.7 96.3m528-8.6c-2.4-3.7-7.3-4.8-11.1-2.4s-4.8 7.3-2.4 11.1c29.6 46 46.8 100.8 46.8 159.6s-17.2 113.6-46.7 159.7c-2.4 3.7-1.3 8.7 2.4 11.1s8.7 1.3 11.1-2.4C621.9 375.8 640 318 640 256s-18.1-119.8-49.3-168.3"
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
                  d="M320 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448m0-352c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24m-32 224a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M91.1 109c7.2-11.1 4-26-7.2-33.2s-26-4-33.2 7.2C18.6 132.9 0 192.3 0 256s18.6 123.1 50.7 173c7.2 11.1 22 14.4 33.2 7.2s14.4-22 7.2-33.2C63.8 360.6 48 310.2 48 256s15.8-104.6 43.1-147m498.2-26c-7.2-11.1-22-14.4-33.2-7.2s-14.4 22-7.2 33.2c27.3 42.4 43.1 92.8 43.1 147s-15.8 104.6-43.1 147c-7.2 11.1-4 26 7.2 33.2s26 4 33.2-7.2c32.1-49.9 50.7-109.3 50.7-173s-18.6-123.1-50.7-173M320 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24m32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
