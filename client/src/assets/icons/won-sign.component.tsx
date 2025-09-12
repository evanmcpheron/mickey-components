import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WonSignIcon: React.FC<
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
                  d="M62.4 53.9c-5.6-16.8-23.8-25.8-40.5-20.3S-3.9 57.4 1.6 74.1l50 149.9H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h40.9l56.7 170.1c4.5 13.5 17.4 22.4 31.6 21.9s26.4-10.4 29.8-24.2L233 288h46l42 167.8c3.4 13.8 15.6 23.7 29.8 24.2s27.1-8.4 31.6-21.9L439.1 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32h-19.6l50-149.9c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2L392.9 224H329L287 56.2C283.5 42 270.7 32 256 32s-27.5 10-31 24.2L183 224h-64zm78 234.1H167l-11.4 45.6zM249 224l7-28.1 7 28.1zm96 64h26.6l-15.2 45.6z"
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
                  d="M71.1 49.5c-3.6-12.7-16.8-20.2-29.6-16.6S21.3 49.7 24.9 62.5L79.1 256H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h68.5l44.4 158.5c2.9 10.5 12.6 17.7 23.6 17.5s20.3-7.8 22.9-18.4L221.2 304h69.7l37.8 157.6c2.6 10.6 12 18.2 22.9 18.4s20.6-7 23.6-17.5L419.5 304H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-55.1l54.2-193.5c3.6-12.8-3.9-26-16.6-29.6s-26 3.9-29.6 16.6L383.1 256h-54.4L279.3 50.4C276.7 39.6 267.1 32 256 32s-20.7 7.6-23.3 18.4L183.3 256h-54.4zM142.4 304h29.4l-13.6 56.6zm90.3-48 23.3-97.2 23.3 97.2zm107.5 48h29.4l-15.9 56.6z"
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
                  d="M31.3 43.3c-2.6-8.4-11.6-13.2-20-10.6S-1.9 44.3.7 52.7L63.3 256H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h57.1l55.6 180.7c2.1 6.8 8.4 11.4 15.6 11.3s13.3-5 15.2-11.8L208 288h96l48.5 180.2c1.9 6.9 8 11.7 15.2 11.8s13.5-4.5 15.6-11.3L438.9 288H496c8.8 0 16-7.2 16-16s-7.2-16-16-16h-47.3l62.6-203.3c2.6-8.4-2.1-17.4-10.6-20s-17.4 2.1-20 10.6L415.3 256h-86.7L271.5 43.8c-1.9-7-8.2-11.8-15.4-11.8s-13.6 4.9-15.4 11.8L183.4 256H96.7zM106.6 288h68.2L143 406.3zm110-32L256 109.5 295.4 256zm120.6 32h68.2L369 406.3z"
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
                  d="M39.7 38c-1.1-4.3-5.5-6.8-9.8-5.7s-6.8 5.5-5.7 9.8L83.9 272H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h80l48.2 186c.9 3.5 4.1 6 7.7 6s6.8-2.5 7.7-6L200 288h112l48.2 186c.9 3.5 4.1 6 7.7 6s6.8-2.5 7.7-6L424 288h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-75.9l59.6-230c1.1-4.3-1.5-8.6-5.7-9.8s-8.6 1.5-9.8 5.7L411.6 272h-87.2L263.7 38c-.9-3.5-4.1-6-7.7-6s-6.8 2.5-7.7 6l-60.7 234h-87.2zm64.8 250h78.9L144 440.1 104.6 288zm99.6-16L256 71.9 307.9 272zm124.4 16h78.9L368 440.1 328.6 288z"
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
                  d="M51.6 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h40.9zM167 288l16-64h-64l21.3 64zm66 0h46l-16-64h-14zm96-64 16 64h26.6l21.3-64zm131.4 0-21.3 64H480c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M21.9 33.6c16.8-5.6 34.9 3.5 40.5 20.2l93.2 279.7L225 56.2C228.5 42 241.3 32 256 32s27.5 10 31 24.2l69.3 277.4 93.3-279.7c5.6-16.8 23.7-25.8 40.5-20.2s25.8 23.7 20.2 40.5l-128 384c-4.5 13.5-17.4 22.4-31.6 21.9s-26.4-10.4-29.8-24.2l-64.9-260-65 259.9c-3.5 13.8-15.6 23.7-29.8 24.2s-27.1-8.4-31.6-21.9l-128-384c-5.5-16.7 3.5-34.9 20.3-40.5"
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
