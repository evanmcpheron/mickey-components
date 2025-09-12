import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PizzaSliceIcon: React.FC<
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
                  d="M169.7.9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80h1.6c176.7 0 320 143.3 320 320v1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7.9m230.1 409.3c.1-3.4.2-6.8.2-10.2 0-159.1-128.9-288-288-288-3.4 0-6.8.1-10.2.2L.5 491.9c-1.5 5.5.1 11.4 4.1 15.4s9.9 5.6 15.4 4.1zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0M96 384a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M122.2 35.6.5 491.9c-1.5 5.5.1 11.4 4.1 15.4s9.9 5.6 15.4 4.1l456.4-121.6c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7.9c-22.8-1.6-41.9 14-47.5 34.7M144.6 138C264.3 152.7 359.3 247.7 374 367.4L61.2 450.8zm12.5-46.8 11.3-42.3c157.2 11.8 282.9 137.5 294.7 294.8L420.8 355C401.1 218.8 293.3 111 157.1 91.3zM192 352a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-64-128a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M167.5 32.8c-6.1-.4-12.4 3.7-14.4 11.1l-10 37.6C295 96.1 415.9 217 430.5 368.9l37.6-10c7.4-2 11.5-8.3 11.1-14.4C467.7 177.7 334.3 44.3 167.5 32.8M38.6 473.4l360.5-96.1c-11-140.9-123.5-253.4-264.4-264.4zM4.7 507.3c-4-4-5.6-9.9-4.1-15.4L122.2 35.6C127.7 14.9 146.9-.7 169.7.9c182.8 12.6 328.8 158.6 341.4 341.4 1.6 22.8-14 41.9-34.7 47.5L20.1 511.5c-5.5 1.5-11.4-.1-15.4-4.1zM176 216a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 120a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-104 8a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M168.6 16.8c-14.4-1-27.2 8.9-30.9 22.9l-13 48.6c162.2 6.5 292.5 136.8 299 299l48.5-12.9c14.1-3.7 23.9-16.5 22.9-30.9-12-174.9-151.7-314.6-326.5-326.7M16 496l391.9-104.5c-4.4-156.7-130.7-283-287.4-287.4zM122.2 35.6C127.7 14.9 146.9-.7 169.7.9c182.8 12.6 328.8 158.6 341.4 341.4 1.6 22.8-14 41.9-34.7 47.5L20.1 511.5c-5.5 1.5-11.4-.1-15.4-4.1S-.9 497.5.6 492zM176 200a40 40 0 1 1 0 80 40 40 0 1 1 0-80m24 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0m32 96a40 40 0 1 1 80 0 40 40 0 1 1-80 0m40 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-128-32a40 40 0 1 1 0 80 40 40 0 1 1 0-80m24 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M432 400v1.6L20.1 511.5c-5.5 1.5-11.4-.1-15.4-4.1S-.9 497.5.6 492L110.4 80h1.6c176.7 0 320 143.3 320 320M208 240a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-144 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M169.7.9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80h1.6c176.7 0 320 143.3 320 320v1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7.9M208 240a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-144 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
