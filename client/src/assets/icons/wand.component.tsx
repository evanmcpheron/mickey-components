import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WandIcon: React.FC<
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
                  d="M497 7c-9-9-23.5-9.4-33-.9L189.3 251.9c-2.9 2.6-6.7 4.1-10.7 4.1H144c-8.8 0-16 7.2-16 16v27.6c0 4.6-1.9 8.9-5.3 11.9L11.1 411.3C4 417.7 0 426.7 0 436.2c0 8.8 3.5 17.3 9.7 23.5l42.6 42.6c6.2 6.2 14.7 9.8 23.5 9.8 9.5 0 18.5-4 24.8-11.1l271.7-303.7c3-3.4 7.4-5.3 11.9-5.3H400c8.8 0 16-7.2 16-16v-21.4c0-3.9 1.5-7.7 4.1-10.7L505.9 48c8.5-9.5 8.1-24-.9-33z"
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
                  d="M459.1 48c-1.2 0-2.4.4-3.3 1.3L52.4 414.7c-2.8 2.5-4.4 6.1-4.4 9.9 0 3.5 1.4 6.9 3.9 9.4L78 460.1c2.5 2.5 5.9 3.9 9.4 3.9 3.8 0 7.3-1.6 9.9-4.4L462.7 56.1c.8-.9 1.3-2.1 1.3-3.3 0-2.7-2.2-4.9-4.9-4.9zm-35.5-34.3C433.4 4.9 446 0 459.1 0 488.3 0 512 23.7 512 52.9c0 13.1-4.9 25.8-13.7 35.5l-46.2 51c-2.7 2.9-4.1 6.8-4.1 10.7V176c0 8.8-7.2 16-16 16h-20.4c-4.5 0-8.8 1.9-11.9 5.3L132.9 491.8c-11.6 12.9-28.1 20.2-45.4 20.2-16.3 0-31.9-6.5-43.4-18L18 467.9C6.5 456.4 0 440.8 0 424.5c0-17.3 7.3-33.8 20.2-45.4l70.6-63.9c3.3-3 5.3-7.3 5.3-11.9V272c0-8.8 7.2-16 16-16H150c4 0 7.8-1.5 10.7-4.1l263-238.2z"
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
                  d="M446.8 9.9c7.2-6.4 16.4-9.9 26-9.9C494.5 0 512 17.5 512 39.2v.5c0 9-3.1 17.8-8.7 24.8L448 133.6V160c0 17.7-14.3 32-32 32h-24.9L119 494.4A53.34 53.34 0 0 1 79.4 512c-14.1 0-27.7-5.6-37.6-15.6l-26.2-26.2C5.6 460.2 0 446.7 0 432.6c0-15.1 6.5-29.5 17.7-39.6L96 323.1V296c0-22.1 17.9-40 40-40h33.9zm26 22.1c-1.8 0-3.5.6-4.8 1.8L186.6 284c-2.9 2.6-6.7 4-10.6 4h-40c-4.4 0-8 3.6-8 8v34.3c0 4.6-1.9 8.9-5.3 11.9l-83.6 74.7c-4.5 4-7.1 9.7-7.1 15.8 0 5.6 2.2 11 6.2 14.9l26.2 26.2c4 4 9.4 6.2 15 6.2 6 0 11.8-2.6 15.8-7l276.9-307.7c3-3.4 7.4-5.3 11.9-5.3h32v-32c0-3.6 1.2-7.2 3.5-10l58.8-73.5c1.1-1.4 1.7-3.1 1.7-4.8v-.5c0-4-3.2-7.2-7.2-7.2"
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
                  d="M469.8 6.2c4.6-4 10.6-6.2 16.7-6.2C500.6 0 512 11.4 512 25.5v.4c0 5.7-1.9 11.3-5.4 15.8l-74.6 97V168c0 13.3-10.7 24-24 24h-28.4L105 497c-8.6 9.5-20.8 15-33.6 15-12 0-23.5-4.8-32-13.2l-26.1-26.2C4.8 464.1 0 452.6 0 440.5c0-12.8 5.4-25 14.9-33.6l97.1-88.2V280c0-13.3 10.7-24 24-24h45zm16.7 9.8c-2.3 0-4.5.8-6.2 2.3L189.2 270.1c-1.5 1.3-3.3 1.9-5.2 1.9h-48c-4.4 0-8 3.6-8 8v42.3c0 2.3-1 4.4-2.6 5.9l-99.8 90.6c-6.1 5.6-9.6 13.4-9.6 21.7 0 7.8 3.1 15.2 8.6 20.7l26.2 26.2c5.5 5.5 12.9 8.6 20.7 8.6 8.3 0 16.2-3.5 21.7-9.7l276.9-307.7c1.5-1.7 3.7-2.6 5.9-2.6h32c4.4 0 8-3.6 8-8v-32c0-1.8.6-3.5 1.7-4.9L493.9 32c1.3-1.7 2.1-3.9 2.1-6v-.4c0-5.2-4.2-9.5-9.5-9.5z"
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
                <path className="aps-icon-background" d="" />
                <path
                  className="aps-icon-foreground"
                  d="M497 7c-9-9-23.5-9.4-33-.9L189.3 251.9c-2.9 2.6-6.7 4.1-10.7 4.1H144c-8.8 0-16 7.2-16 16v27.6c0 4.6-1.9 8.9-5.3 11.9L11.1 411.3C4 417.7 0 426.7 0 436.2c0 8.8 3.5 17.3 9.7 23.5l42.6 42.6c6.2 6.2 14.7 9.8 23.5 9.8 9.5 0 18.5-4 24.8-11.1l271.7-303.7c3-3.4 7.4-5.3 11.9-5.3H400c8.8 0 16-7.2 16-16v-21.4c0-3.9 1.5-7.7 4.1-10.7L505.9 48c8.5-9.5 8.1-24-.9-33z"
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
