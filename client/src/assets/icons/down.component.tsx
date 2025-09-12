import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DownIcon: React.FC<
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
                  d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-9.2-9.2-11.9-22.9-6.9-34.9S19 255.9 32 255.9h96v-184c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v184h96c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-160 160z"
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
                  d="M192 429.6 49.3 279.7c-.8-.8-1.3-2-1.3-3.2 0-2.5 2-4.6 4.6-4.6H136c13.3 0 24-10.7 24-24v-168h64v168c0 13.3 10.7 24 24 24h83.4c2.5 0 4.6 2 4.6 4.6 0 1.2-.5 2.3-1.3 3.2zM0 276.6c0 13.5 5.2 26.5 14.5 36.3l146.6 153.9c8.1 8.5 19.2 13.2 30.9 13.2s22.8-4.8 30.9-13.2l146.6-154c9.3-9.8 14.5-22.8 14.5-36.3 0-29-23.5-52.6-52.6-52.6l-59.4.1V80c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v144H52.6C23.5 224 0 247.5 0 276.6"
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
                  d="M189.7 448h4.6c4.4 0 8.6-1.8 11.6-5l142.6-149.8c2.2-2.3 3.5-5.4 3.5-8.7 0-6.9-5.6-12.6-12.6-12.6H256c-8.8 0-16-7.2-16-16V80c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v176c0 8.8-7.2 16-16 16H44.6c-6.9 0-12.6 5.6-12.6 12.6 0 3.2 1.2 6.3 3.5 8.7L178.1 443c3 3.2 7.2 5 11.6 5M384 284.6c0 11.4-4.4 22.5-12.3 30.7L229 465.1c-9.1 9.5-21.6 14.9-34.8 14.9h-4.6c-13.1 0-25.7-5.4-34.8-14.9L12.3 315.3C4.4 307 0 296 0 284.6 0 260 20 240 44.6 240H112V80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v160h67.4c24.6 0 44.6 20 44.6 44.6"
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
                  d="M192 464c8.1 0 15.9-3.2 21.7-9l148.4-148.4c3.8-3.8 5.9-9 5.9-14.3 0-11.2-9.1-20.3-20.3-20.3H248c-4.4 0-8-3.6-8-8V72c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v192c0 4.4-3.6 8-8 8H36.3c-11.2 0-20.3 9.1-20.3 20.3 0 5.4 2.1 10.5 5.9 14.3L170.3 455c5.7 5.7 13.5 9 21.7 9m192-171.7c0 9.6-3.8 18.9-10.6 25.7L225 466.4c-8.7 8.7-20.6 13.7-33 13.7s-24.2-4.9-33-13.7L10.6 317.9C3.8 311.1 0 301.9 0 292.3c0-20 16.2-36.3 36.3-36.3H128V72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v184h91.7c20 0 36.3 16.2 36.3 36.3"
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
                  d="M256 256H128V72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 256H32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l160 160c12.5 12.5 32.8 12.5 45.3 0l160-160c9.2-9.2 11.9-22.9 6.9-34.9S364.9 256 351.9 256H128"
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
