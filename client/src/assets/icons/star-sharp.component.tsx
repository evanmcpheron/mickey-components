import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StarSharpIcon: React.FC<
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
                  d="M310.9 16.7C307.7 6.8 298.5 0 288 0s-19.7 6.8-22.9 16.7L214.5 176H56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7l130.8 101.8-51 160c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L288 406.4l129.3 100.5c8.3 6.5 19.8 6.8 28.5.7s12.3-16.9 9.1-27l-51-159.9 130.8-101.8c8.1-6.3 11.3-17 8-26.7S530.3 176 520 176H361.5z"
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
                  d="M288 0c10.5 0 19.7 6.8 22.9 16.7L361.5 176H520c10.3 0 19.4 6.5 22.7 16.2s.1 20.4-8 26.7L403.9 320.7l50.9 160.1c3.2 10-.5 21-9.1 27s-20.2 5.7-28.5-.7L288 406.4 158.7 506.9c-8.3 6.5-19.8 6.8-28.5.7s-12.3-16.9-9.1-27L172 320.5 41.3 218.9c-8.1-6.3-11.3-17-8-26.7S45.7 176 56 176h158.5l50.6-159.3C268.3 6.8 277.5 0 288 0m0 103.2-33.1 104.1c-3.2 10-12.4 16.7-22.9 16.7H125.9l88.8 69.1c7.9 6.2 11.2 16.6 8.1 26.2l-32.5 102.3 82.9-64.5c8.7-6.7 20.8-6.7 29.5 0l82.9 64.5-32.5-102.3c-3-9.6.2-20 8.1-26.2l88.9-69.1H344c-10.5 0-19.7-6.8-22.9-16.7z"
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
                  d="m288 43.6-48.8 153.3c-2.1 6.6-8.2 11.1-15.2 11.1H75.3l126 91c5.5 4 7.9 11.1 5.9 17.6l-43.7 144 114.7-89.2c5.8-4.5 13.9-4.5 19.6 0l114.7 89.2-43.8-143.9c-2-6.5.4-13.6 5.9-17.6l126-91H352c-7 0-13.1-4.5-15.2-11.1zm-25.7-24.8C265.9 7.6 276.3 0 288 0s22.1 7.6 25.7 18.8l50 157.2h153.7c14.7 0 26.6 11.9 26.6 26.6 0 8.5-4.1 16.6-11 21.6l-130.4 94.1 50.8 167c4.1 13.3-5.9 26.8-19.8 26.8-4.6 0-9.1-1.5-12.7-4.4L288 404.3 155.1 507.6c-3.6 2.8-8.1 4.4-12.7 4.4-13.9 0-23.9-13.4-19.8-26.8l50.8-167L43 224.1c-6.9-5-11-13-11-21.6 0-14.6 11.9-26.5 26.6-26.5h153.7z"
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
                  d="M288 16c-1.3 0-2.4.8-2.8 2l-53.6 168.4c-1.1 3.3-4.1 5.6-7.6 5.6H50.9c-1.6 0-2.9 1.3-2.9 2.9 0 .9.4 1.7 1 2.2l140.1 116.8c2.5 2.1 3.5 5.4 2.5 8.5l-52.2 171.7c-.3.9.4 1.9 1.4 1.9q.45 0 .9-.3l141.4-110a8.1 8.1 0 0 1 9.8 0l141.4 110q.45.3.9.3c1 0 1.7-.9 1.4-1.9l-52.3-171.8c-.9-3.1.1-6.4 2.5-8.5L527 197.1c.7-.6 1-1.4 1-2.2 0-1.6-1.3-2.9-2.9-2.9H352c-3.5 0-6.6-2.3-7.6-5.6L290.8 18c-.4-1.2-1.5-2-2.8-2m-18-2.8C272.5 5.3 279.8 0 288 0s15.5 5.3 18 13.2L357.8 176h167.3c10.4 0 18.9 8.5 18.9 18.9 0 5.6-2.5 10.9-6.8 14.5l-136 113.3 50.7 166.7c3.4 11.2-5 22.5-16.7 22.5-3.9 0-7.7-1.3-10.7-3.7L288 402.1 151.5 508.3c-3.1 2.4-6.8 3.7-10.7 3.7-11.7 0-20.1-11.3-16.7-22.5l50.7-166.7-136-113.4c-4.3-3.6-6.8-8.9-6.8-14.5 0-10.4 8.5-18.9 18.9-18.9h167.3z"
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
                  d="M310.9 16.7C307.7 6.8 298.5 0 288 0s-19.7 6.8-22.9 16.7L214.5 176H56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7l130.8 101.8-51 160c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L288 406.4l129.3 100.5c8.3 6.5 19.8 6.8 28.5.7s12.3-16.9 9.1-27l-51-159.9 130.8-101.8c8.1-6.3 11.3-17 8-26.7S530.3 176 520 176H361.6z"
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
