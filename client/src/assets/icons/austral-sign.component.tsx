import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AustralSignIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M253.5 51.7C248.6 39.8 236.9 32 224 32s-24.6 7.8-29.5 19.7L122.7 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64l-13.3 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h24l-21.5 51.7c-6.8 16.3.9 35 17.2 41.8s35-.9 41.8-17.2l31.8-76.3h197.4l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8L392 384h24c17.7 0 32-14.3 32-32s-14.3-32-32-32h-50.7L352 288h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-90.7zM256 224h-64l32-76.8zm-90.7 64h117.4l13.3 32H152z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M246.1 46.7C242.4 37.8 233.7 32 224 32s-18.4 5.8-22.1 14.7L127.4 224H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h83.2l-20.1 48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h42.9l-33 78.7c-5.1 12.2.6 26.3 12.8 31.4s26.3-.6 31.4-12.8L119 368h210l40.9 97.3c5.1 12.2 19.2 18 31.4 12.8s18-19.2 12.8-31.4l-33-78.7H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-63.1l-20.2-48H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H320.6zM268.5 224h-89L224 118zm-109.2 48h129.4l20.2 48H139.2l20.2-48z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M238.7 41.8c-2.5-5.9-8.3-9.8-14.7-9.8s-12.2 3.8-14.7 9.8L132.2 224H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h102.6l-27 64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h62L33.3 457.8c-3.4 8.1.4 17.5 8.5 21s17.5-.4 21-8.5l50-118.2h222.4l50 118.2c3.4 8.1 12.8 11.9 21 8.5s11.9-12.8 8.5-21L370 352h62c8.8 0 16-7.2 16-16s-7.2-16-16-16h-75.5l-27.1-64H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H315.8zM281.1 224H166.9L224 89.1zm-127.7 32h141.2l27.1 64H126.3z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M231.4 36.9c-1.3-3-4.2-4.9-7.4-4.9s-6.1 1.9-7.4 4.9L130.1 240H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h115.3l-34.1 80H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h74.4L32.6 468.9c-1.7 4.1.2 8.8 4.2 10.5s8.8-.2 10.5-4.2L99.8 352h248.4l52.4 123.1c1.7 4.1 6.4 6 10.5 4.2s6-6.4 4.2-10.5L365.6 352H440c4.4 0 8-3.6 8-8s-3.6-8-8-8h-81.2l-34.1-80H440c4.4 0 8-3.6 8-8s-3.6-8-8-8H317.9zM300.5 240h-153L224 60.4zm-159.8 16h166.6l34.1 80H106.6z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M122.7 224 96 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm-40 96L56 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm42.7 64 26.6-64h144l26.7 64H125.3zm266.6 0-26.7-64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32zm-40-96-26.7-64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32zm-160-64h64l26.7 64H165.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 32c12.9 0 24.6 7.8 29.5 19.7l160 384c6.8 16.3-.9 35-17.2 41.8s-35-.9-41.8-17.2L224 147.2 93.5 460.3c-6.8 16.3-25.5 24-41.8 17.2s-24-25.5-17.2-41.8l160-384C199.4 39.8 211.1 32 224 32"
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
