import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ThetaIcon: React.FC<
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
                  d="M64 256c0-51 15.9-96 40.2-127.6C128.5 96.9 159.8 80 192 80s63.5 16.9 87.8 48.4C304.1 160 320 205 320 256s-15.9 96-40.2 127.6C255.5 415.1 224.2 432 192 432s-63.5-16.9-87.8-48.4C79.9 352 64 307 64 256M192 16C135.8 16 87.1 45.7 53.5 89.4S0 192.1 0 256s19.9 122.9 53.5 166.6S135.8 496 192 496s104.9-29.7 138.5-73.4S384 319.9 384 256s-19.9-122.9-53.5-166.6S248.2 16 192 16m-64 208c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M56 256c0-55 16.6-103.9 42.1-138.4S157.2 64 192 64s68.3 19 93.9 53.6S328 201 328 256s-16.6 103.9-42.1 138.5S226.8 448 192 448s-68.3-19-93.9-53.5S56 311 56 256M192 16C138.4 16 91.9 45.4 59.6 89S8 191.7 8 256s19.3 123.4 51.6 167 78.9 73 132.4 73 100.1-29.4 132.4-73S376 320.3 376 256s-19.3-123.4-51.6-167S245.6 16 192 16m-72 216c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M48 256c0-58.9 17.1-111.6 43.9-149.1S154.3 48 192 48s73.3 21.4 100.1 58.9S336 197.1 336 256s-17.1 111.6-43.9 149.1S229.7 464 192 464s-73.3-21.4-100.1-58.9S48 314.9 48 256M192 16c-50.7 0-95.1 28.8-126.2 72.3C34.7 131.9 16 191.2 16 256s18.7 124.1 49.8 167.7C96.9 467.2 141.3 496 192 496s95.1-28.8 126.2-72.3C349.3 380.1 368 320.8 368 256s-18.7-124.1-49.8-167.7C287.1 44.8 242.7 16 192 16m-80 224c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M40 256c0-62.7 17.5-119 45.4-159.5C113.4 56 151.2 32 192 32s78.6 24 106.6 64.5C326.5 137 344 193.3 344 256s-17.5 119-45.4 159.5C270.6 456 232.8 480 192 480s-78.6-24-106.6-64.5C57.5 375 40 318.7 40 256M192 16c-47.6 0-89.8 28-119.7 71.4C42.3 130.9 24 190.5 24 256s18.3 125.1 48.3 168.6C102.2 468 144.4 496 192 496s89.8-28 119.7-71.4c30-43.5 48.3-103.1 48.3-168.6s-18.3-125.1-48.3-168.6C281.8 44 239.6 16 192 16M96 248c-4.4 0-8 3.6-8 8s3.6 8 8 8h192c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M96 256c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M104.2 128.4C79.9 160 64 205 64 256s15.9 96 40.2 127.6c24.3 31.5 55.6 48.4 87.8 48.4s63.5-16.9 87.8-48.4C304.1 352 320 307 320 256s-15.9-96-40.2-127.6C255.5 96.9 224.2 80 192 80s-63.5 16.9-87.8 48.4m-50.7-39C87.1 45.7 135.8 16 192 16s104.9 29.7 138.5 73.4S384 192.1 384 256s-19.9 122.9-53.5 166.6S248.2 496 192 496 87.1 466.3 53.5 422.6 0 319.9 0 256 19.9 133.1 53.5 89.4"
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
