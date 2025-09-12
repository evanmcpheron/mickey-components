import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StarSharpHalfStrokeIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m56 230.4-14.7-11.5c-8.1-6.3-11.3-17-8-26.7S45.7 176 56 176h158.5l44.1-138.8.1-.3 1.3-4 5.2-16.2C268.3 6.8 277.6 0 288 0s19.7 6.8 22.9 16.7l5.1 16.2 1.3 4 .1.3L361.6 176H520c10.3 0 19.4 6.5 22.7 16.2s.1 20.4-8 26.7L520 230.4l-2 1.5-.1.1-114 88.7 44.4 139.5.1.4 1.4 4.5 5 15.7c3.2 10-.5 21-9.1 27s-20.2 5.7-28.5-.7l-13-10.1-3.7-2.9-.3-.3L288 406.4l-112.2 87.3-.3.3-3.7 2.9-13 10.1c-8.3 6.5-19.8 6.8-28.5.7s-12.3-16.9-9.1-27l5-15.7 1.4-4.5.1-.4 44.4-139.5-114-88.6-.1-.1zm232 105.1 34.4 26.7 47.9 37.2-19.7-61.8-11.8-37.2 30.8-24 57.1-44.4H320.6l-12.4-39-20.2-63.5z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M310.9 16.7C307.7 6.8 298.5 0 288 0s-19.7 6.8-22.9 16.7L214.5 176H56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7l130.8 101.8-51 160c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L288 406.4l129.3 100.5c8.3 6.5 19.8 6.8 28.5.7s12.3-16.9 9.1-27l-51-159.9 130.8-101.8c8.1-6.3 11.3-17 8-26.7S530.3 176 520 176H361.6zM288 103.2l33.1 104.1c3.2 10 12.4 16.7 22.9 16.7h106.1l-88.8 69.1c-7.9 6.2-11.2 16.6-8.1 26.2l32.5 102.3-82.9-64.5c-4.3-3.4-9.5-5.1-14.7-5.1V103.2z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M272 93.9v282.3l-108.5 84.4 43.8-143.9c2-6.5-.4-13.6-5.9-17.6l-126-91H224c7 0 13.1-4.5 15.2-11.1zm32 282.3V93.9l32.8 102.9c2.1 6.6 8.3 11.1 15.2 11.1h148.7l-126 91c-5.5 4-7.9 11.1-5.9 17.6l43.8 143.9zM288 0c-11.7 0-22.1 7.6-25.7 18.8l-50 157.2H58.6C43.9 176 32 187.9 32 202.6c0 8.5 4.1 16.6 11 21.6l130.3 94.1-50.8 167c-4.1 13.3 5.9 26.8 19.8 26.8 4.6 0 9.1-1.5 12.7-4.4l133-103.4 132.9 103.3c3.6 2.8 8.1 4.4 12.7 4.4 13.9 0 23.9-13.4 19.8-26.8l-50.8-167L533 224.1c6.9-5 11-13 11-21.6 0-14.7-11.9-26.6-26.6-26.6H363.7l-50-157.2C310.1 7.6 299.7 0 288 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M280 34.4v353.7L141.6 495.7q-.45.3-.9.3c-1 0-1.7-.9-1.4-1.9l52.3-171.8c.9-3.1-.1-6.4-2.5-8.5L49 197.1c-.7-.6-1-1.4-1-2.2 0-1.6 1.3-2.9 2.9-2.9H224c3.5 0 6.6-2.3 7.6-5.6zm16 353.7V34.4l48.4 152c1.1 3.3 4.1 5.6 7.6 5.6h173.1c1.6 0 2.9 1.3 2.9 2.9 0 .9-.4 1.7-1 2.2L386.9 313.9c-2.5 2.1-3.5 5.4-2.5 8.5l52.3 171.8c.3.9-.4 1.9-1.4 1.9q-.45 0-.9-.3zM288 0c-8.2 0-15.5 5.3-18 13.2L218.2 176H50.9c-10.4 0-18.9 8.5-18.9 18.9 0 5.6 2.5 10.9 6.8 14.5l136 113.3-50.7 166.8c-3.4 11.2 5 22.5 16.7 22.5 3.9 0 7.7-1.3 10.7-3.7L288 402.1l136.5 106.2c3.1 2.4 6.8 3.7 10.7 3.7 11.7 0 20.1-11.3 16.7-22.5l-50.7-166.8 136-113.3c4.3-3.6 6.8-8.9 6.8-14.5 0-10.4-8.5-18.9-18.9-18.9H357.8L306 13.2C303.5 5.3 296.2 0 288 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m288 406.4 112.2 87.3.3.3 3.7 2.9 13 10.1c8.3 6.5 19.8 6.8 28.5.7s12.3-16.9 9.1-27l-5-15.7-1.4-4.5-.1-.4-44.4-139.4 114-88.7.1-.1 2-1.5 14.7-11.5c8.1-6.3 11.3-17 8-26.7S530.3 176 520 176H361.6L317.4 37.2l-.1-.3-1.3-4-5.2-16.2C307.7 6.8 298.5 0 288 0v129.5l20.2 63.5 12.4 39h106.2l-57.2 44.5-30.8 24 11.8 37.2 19.7 61.8-47.9-37.2-34.4-26.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M254.4 50.4 214.5 176H56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L56 230.4l10.5 8.2 1.8 1.4L172 320.7l-40 126-1.1 3.5-4.8 14.8-5 15.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7l13-10.1 12.3-9.5 2.9-2.3L288 406.4V0c-10.5 0-19.7 6.8-22.9 16.7L260 32.9l-4.6 14.3z"
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
