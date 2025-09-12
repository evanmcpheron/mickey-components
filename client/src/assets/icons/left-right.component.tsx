import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LeftRightIcon: React.FC<
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
                  d="M504.3 273.6c4.9-4.5 7.7-10.9 7.7-17.6s-2.8-13-7.7-17.6l-112-104c-7-6.5-17.2-8.2-25.9-4.4S352 142.5 352 152v56H160v-56c0-9.5-5.7-18.2-14.4-22s-18.9-2.1-25.9 4.4l-112 104C2.8 243 0 249.3 0 256s2.8 13 7.7 17.6l112 104c7 6.5 17.2 8.2 25.9 4.4s14.4-12.5 14.4-22v-56h192v56c0 9.5 5.7 18.2 14.4 22s18.9 2.1 25.9-4.4z"
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
                  d="M505.6 239.7c8.5 9.2 8.5 23.4 0 32.6l-89.4 96.8c-8.8 9.5-21.1 14.9-34 14.9-25.5 0-46.3-20.7-46.3-46.3V328h-160v9.7c0 25.5-20.7 46.3-46.3 46.3-12.9 0-25.2-5.4-34-14.9L6.4 272.3c-8.5-9.2-8.5-23.4 0-32.6l89.4-96.8c8.8-9.5 21.1-14.9 34-14.9 25.5 0 46.3 20.7 46.3 46.3v9.7h160v-9.7c0-25.5 20.7-46.3 46.3-46.3 12.9 0 25.2 5.4 34 14.9l89.4 96.8zm-121.6-61V208c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24v-29.3L56.7 256l71.3 77.3V304c0-13.3 10.7-24 24-24h208c13.3 0 24 10.7 24 24v29.3l71.3-77.3zm-253-3.3-1.3-1.2z"
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
                  d="M502.3 231.3c6.2 6.7 9.7 15.6 9.7 24.7s-3.5 18-9.7 24.7l-84 91a38.3 38.3 0 0 1-28.1 12.3c-21.1 0-38.3-17.1-38.3-38.3V320h-192v25.7c0 21.1-17.1 38.3-38.3 38.3-10.7 0-20.9-4.5-28.1-12.3l-84-91C3.5 274 0 265.2 0 256s3.5-18 9.7-24.7l84-91c7.2-7.8 17.4-12.3 28.1-12.3 21.1 0 38.3 17.1 38.3 38.3V192h192v-25.7c0-21.1 17.1-38.3 38.3-38.3 10.7 0 20.9 4.5 28.1 12.3l84 91zM480 256c0-1.1-.4-2.2-1.2-3l-84-91c-1.2-1.3-2.8-2-4.6-2-3.5 0-6.3 2.8-6.3 6.3V208c0 8.8-7.2 16-16 16h-224c-8.8 0-16-7.2-16-16v-41.7c0-3.5-2.8-6.3-6.3-6.3-1.7 0-3.4.7-4.6 2l-84 91c-.8.8-1.2 1.9-1.2 3s.4 2.2 1.2 3l84 91c1.2 1.3 2.9 2 4.6 2 3.5 0 6.3-2.8 6.3-6.3V304c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v41.7c0 3.5 2.8 6.3 6.3 6.3 1.7 0 3.4-.7 4.6-2l84-91c.8-.8 1.2-1.9 1.2-3"
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
                  d="M504 236.7c5.1 5.1 8 12.1 8 19.3s-2.9 14.2-8 19.3L404.3 375c-5.7 5.7-13.5 9-21.7 9-16.9 0-30.6-13.7-30.6-30.6V304H160v49.4c0 16.9-13.7 30.6-30.6 30.6-8.1 0-15.9-3.2-21.7-9L8 275.3c-5.1-5.1-8-12.1-8-19.3s2.9-14.2 8-19.3l99.7-99.7c5.7-5.7 13.5-9 21.7-9 16.9 0 30.6 13.7 30.6 30.6V208h192v-49.4c0-16.9 13.7-30.6 30.6-30.6 8.1 0 15.9 3.2 21.7 9zm-8 19.3c0-3-1.2-5.9-3.3-8L393 148.3c-2.7-2.7-6.5-4.3-10.3-4.3-8.1 0-14.6 6.5-14.6 14.6V216c0 4.4-3.6 8-8 8h-208c-4.4 0-8-3.6-8-8v-57.4c0-8.1-6.5-14.6-14.6-14.6-3.9 0-7.6 1.5-10.3 4.3L19.3 248l-5.7-5.7 5.7 5.7c-2.1 2.1-3.3 5-3.3 8s1.2 5.9 3.3 8l-5.7 5.7 5.7-5.7 99.7 99.7c2.7 2.7 6.5 4.3 10.3 4.3 8.1 0 14.6-6.6 14.6-14.6V296c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8v57.4c0 8.1 6.6 14.6 14.6 14.6 3.9 0 7.6-1.5 10.3-4.3l99.9-99.7c2.1-2.1 3.3-5 3.3-8"
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
                  d="M512 256c0-6.7-2.8-13-7.7-17.6l-112-104c-7-6.5-17.2-8.2-25.9-4.4S352 142.5 352 152v56h-96v96h96v56c0 9.5 5.7 18.2 14.4 22s18.9 2.1 25.9-4.4l112-104c4.9-4.5 7.7-10.9 7.7-17.6"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22v56h96v96h-96v56c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104C2.8 269 0 262.7 0 256"
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
