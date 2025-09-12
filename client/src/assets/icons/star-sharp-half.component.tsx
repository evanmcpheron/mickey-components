import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StarSharpHalfIcon: React.FC<
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
                  d="M254.4 50.4 214.5 176H56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L56 230.4l10.5 8.2 1.8 1.4L172 320.7l-40 126-1.1 3.5-4.8 14.8-5 15.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7l13-10.1 12.3-9.5 2.9-2.3L288 406.4V0c-10.5 0-19.7 6.8-22.9 16.7L260 32.9l-4.6 14.3z"
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
                  d="M291.7.3C303.4 2.1 312 12.2 312 24v352c0 7.4-3.4 14.4-9.3 18.9l-144 112c-8.3 6.5-19.8 6.8-28.5.7s-12.3-16.9-9.1-27L172 320.5 41.3 218.9c-8.1-6.3-11.3-17-8-26.7S45.7 176 56 176h158.5l50.6-159.3C268.7 5.4 280-1.5 291.7.3M264 178.6l-9.1 28.7c-3.2 10-12.4 16.7-22.9 16.7H126l88.8 69.1c7.9 6.2 11.2 16.6 8.1 26.2l-32.6 102.3 73.7-57.3z"
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
                  d="m272 93.9-32.8 103c-2.1 6.6-8.2 11.1-15.2 11.1H75.3l126 91c5.5 4 7.9 11.1 5.9 17.6l-43.7 144L272 376.2zm-8.3-79.5C266.5 5.8 274.4 0 283.4 0 294.8 0 304 9.2 304 20.6V384c0 4.9-2.3 9.6-6.2 12.6l-142.7 111c-3.6 2.8-8.1 4.4-12.7 4.4-13.9 0-23.9-13.4-19.8-26.8l50.8-167L43 224.1c-6.9-5-11-13-11-21.6 0-14.6 11.9-26.5 26.6-26.5h153.7z"
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
                  d="m280 34.4-48.4 152c-1.1 3.3-4.1 5.6-7.6 5.6H50.9c-1.6 0-2.9 1.3-2.9 2.9 0 .9.4 1.7 1 2.2l140.1 116.8c2.5 2.1 3.5 5.4 2.5 8.5l-52.2 171.7c-.3.9.4 1.9 1.4 1.9q.45 0 .9-.3L280 388.1zm-8.6-25.6c1.7-5.2 6.5-8.8 12-8.8 7 0 12.6 5.7 12.6 12.6V392c0 2.5-1.1 4.8-3.1 6.3l-141.4 110c-3.1 2.4-6.8 3.7-10.7 3.7-11.7 0-20.1-11.3-16.7-22.5l50.7-166.7-136-113.4c-4.3-3.6-6.8-8.9-6.8-14.5 0-10.4 8.5-18.9 18.9-18.9h167.3z"
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
                  d="m321.6 50.4 40 125.6H520c10.3 0 19.4 6.5 22.7 16.2s.1 20.4-8 26.7L520 230.4l-10.5 8.2-1.8 1.4-103.8 80.7 40.1 126 1.1 3.5 4.7 14.8 5 15.7c3.2 10-.5 21-9.1 27s-20.2 5.7-28.5-.7l-13-10.1-12.2-9.6-2.9-2.3L288 406.4V0c10.5 0 19.7 6.8 22.9 16.7l5.1 16.2 4.6 14.3z"
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
