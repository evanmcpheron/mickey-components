import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoltLightningIcon: React.FC<
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
                  d="M0 256 28.5 28c2-16 15.6-28 31.8-28h168.6c15 0 27.1 12.1 27.1 27.1 0 3.2-.6 6.5-1.7 9.5L208 160h139.3c20.2 0 36.7 16.4 36.7 36.7 0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5q0-3.45.9-6.9L176 288H32c-17.7 0-32-14.3-32-32"
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
                  d="M77 48 51.4 240H208c7.4 0 14.4 3.4 18.9 9.2s6.2 13.4 4.4 20.6l-23 91.8L322.8 192H176c-7.9 0-15.3-3.9-19.8-10.4s-5.4-14.9-2.6-22.2L196.9 48zM30.4 34.7C33 14.8 50 0 70 0h138.6c28.1 0 47.5 28.3 37.3 54.5L211.1 144h126.8c32.1 0 51.1 35.8 33.2 62.4l-199.2 295c-6.5 9.7-19 13.2-29.7 8.5s-16.3-16.4-13.5-27.7L177.3 288h-135c-24.2 0-42.9-21.3-39.7-45.3l27.7-208z"
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
                  d="M32 30.9C32 13.8 45.9 0 62.9 0h163.3C242.7 0 256 13.3 256 29.8c0 3.2-.5 6.4-1.5 9.4L214.2 160h141.6c15.6 0 28.2 12.6 28.2 28.2 0 5.7-1.7 11.2-4.9 15.9l-203.2 297c-4.6 6.8-12.3 10.8-20.5 10.8-16.2 0-28-15.2-24.1-30.9l48.2-193H30.9C13.9 288 0 274.1 0 257.1c0-1.5.1-2.9.3-4.4zM64 32q0 1.65-.3 3.3L32.2 256H200c4.9 0 9.6 2.3 12.6 6.2s4.1 8.9 2.9 13.7l-43.6 174.3L348.6 192H192c-5.1 0-10-2.5-13-6.6s-3.8-9.5-2.2-14.4l46.3-139z"
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
                  d="M28.3 34.5C31 14.7 47.9 0 67.9 0h153C240.3 0 256 15.7 256 35.1c0 4.2-.8 8.4-2.2 12.3L211.5 160h146.2c14.5 0 26.3 11.8 26.3 26.3 0 5.3-1.6 10.6-4.7 15L170.4 503c-3.9 5.7-10.4 9-17.2 9-13.9 0-24-13.3-20.2-26.7L189.4 288H40c-22.1 0-40-17.9-40-40v-8c0-.4 0-.7.1-1.1zM67.9 16c-12 0-22.1 8.8-23.8 20.7L16 240.5v7.5c0 13.3 10.7 24 24 24h160c2.5 0 4.9 1.2 6.4 3.2s2 4.6 1.3 7l-59.3 207.5c-.9 3.2 1.5 6.3 4.8 6.3 1.6 0 3.2-.8 4.1-2.1l208.9-301.8c1.2-1.7 1.8-3.8 1.8-5.9 0-5.7-4.6-10.3-10.3-10.3H200c-2.6 0-5.1-1.3-6.6-3.4s-1.8-4.9-.9-7.4l46.3-123.3c.8-2.1 1.2-4.4 1.2-6.7 0-10.5-8.5-19.1-19.1-19.1z"
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
                  d="M0 256 28.5 28c2-16 15.6-28 31.8-28h168.6c15 0 27.1 12.1 27.1 27.1 0 3.2-.6 6.5-1.7 9.5L208 160h139.3c20.2 0 36.7 16.4 36.7 36.7 0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5q0-3.45.9-6.9L176 288H32c-17.7 0-32-14.3-32-32"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
