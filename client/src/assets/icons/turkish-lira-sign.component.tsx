import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TurkishLiraSignIcon: React.FC<
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
                  d="M96 32c17.7 0 32 14.3 32 32v35.3l119.2-34.1c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6L128 165.9v29.4l119.2-34.1c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6L128 261.9V416h63.8c68.2 0 124.4-53.5 127.8-121.6l.4-8c.9-17.7 15.9-31.2 33.6-30.4s31.2 15.9 30.4 33.6l-.4 8C378.5 399.8 294.1 480 191.8 480H96c-17.7 0-32-14.3-32-32V280.1l-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6L64 213.6v-29.5l-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6L64 117.6V64c0-17.7 14.3-32 32-32"
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
                  d="M88 32c13.3 0 24 10.7 24 24v56.2l137.4-39.3c12.7-3.6 26 3.7 29.7 16.5s-3.7 26-16.5 29.7l-150.6 43v46.1l137.4-39.3c12.7-3.6 26 3.7 29.7 16.5s-3.7 26-16.5 29.7l-150.6 43V432h71.8c81.3 0 148.2-63.9 151.8-145.1l.4-8c.6-13.2 11.8-23.5 25.1-22.9s23.5 11.8 22.9 25.1l-.4 8C378.8 395.9 290.7 480 183.8 480H88c-13.3 0-24-10.7-24-24V271.8l-25.4 7.3c-12.7 3.6-26-3.7-29.7-16.5s3.7-26 16.5-29.7l38.6-11v-46.1l-25.4 7.3c-12.7 3.6-26-3.7-29.7-16.5s3.7-26 16.5-29.7l38.6-11V56c0-13.3 10.7-24 24-24"
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
                  d="M80 32c8.8 0 16 7.2 16 16v77.1l155.6-44.5c8.5-2.4 17.4 2.5 19.8 11s-2.5 17.4-11 19.8L96 158.4v62.7l155.6-44.5c8.5-2.4 17.4 2.5 19.8 11s-2.5 17.4-11 19.8L96 254.4V448h95.2c85.8 0 156.3-67.6 159.8-153.3l1-23.3c.4-8.8 7.8-15.7 16.7-15.3s15.7 7.8 15.3 16.7l-1 23.2c-4.3 102.8-88.9 184-191.8 184H80c-8.8 0-16-7.2-16-16V263.5l-27.6 7.9c-8.5 2.4-17.4-2.5-19.8-11s2.5-17.4 11-19.8L64 230.2v-62.7l-27.6 7.9c-8.5 2.4-17.4-2.5-19.8-11s2.5-17.4 11-19.8L64 134.2V48c0-8.8 7.2-16 16-16"
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
                  d="M88 32c4.4 0 8 3.6 8 8v91.1l182.2-42.9c4.3-1 8.6 1.7 9.6 6s-1.7 8.6-6 9.6L96 147.5v79.6l182.2-42.9c4.3-1 8.6 1.7 9.6 6s-1.7 8.6-6 9.6L96 243.5V440c0 13.3 10.7 24 24 24h78.6c90.3 0 164.4-71.3 167.9-161.5l1.5-38.8c.2-4.4 3.9-7.9 8.3-7.7s7.9 3.9 7.7 8.3l-1.5 38.8c-3.8 98.8-85 176.9-183.9 176.9H120c-22.1 0-40-17.9-40-40V247.3L9.8 263.8c-4.3 1-8.6-1.7-9.6-6s1.7-8.6 6-9.6L80 230.8v-79.5L9.8 167.8c-4.3 1-8.6-1.7-9.6-6s1.7-8.6 6-9.6L80 134.8V40c0-4.4 3.6-8 8-8"
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
                  d="M64 117.6v66.6l-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6zm0 96v66.6l-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6zm64 48.3v-66.6l119.2-34.1c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6zm0-96V99.3l119.2-34.1c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 32c17.7 0 32 14.3 32 32v352h63.8c68.2 0 124.4-53.5 127.8-121.6l.4-8c.9-17.7 15.9-31.2 33.6-30.4s31.2 15.9 30.4 33.6l-.4 8C378.5 399.8 294.1 480 191.8 480H96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32"
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
