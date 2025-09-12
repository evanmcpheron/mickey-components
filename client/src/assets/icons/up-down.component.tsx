import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UpDownIcon: React.FC<
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
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M145.6 7.7C141 2.8 134.7 0 128 0s-13 2.8-17.6 7.7l-104 112c-6.5 7-8.2 17.2-4.4 25.9S14.5 160 24 160h56v192H24c-9.5 0-18.2 5.7-22 14.4s-2.1 18.9 4.4 25.9l104 112c4.5 4.9 10.9 7.7 17.6 7.7s13-2.8 17.6-7.7l104-112c6.5-7 8.2-17.2 4.4-25.9S241.5 352 232 352h-56V160h56c9.5 0 18.2-5.7 22-14.4s2.1-18.9-4.4-25.9z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M111.7 6.4c9.2-8.5 23.4-8.5 32.6 0l96.8 89.4c9.5 8.8 14.9 21.1 14.9 34 0 25.5-20.7 46.3-46.3 46.3H200V336h9.7c25.5 0 46.3 20.7 46.3 46.3 0 12.9-5.4 25.2-14.9 34l-96.8 89.4c-9.2 8.5-23.4 8.5-32.6 0l-96.8-89.5C5.4 407.5 0 395.2 0 382.3 0 356.7 20.7 336 46.3 336H56V176h-9.7C20.7 176 0 155.3 0 129.7c0-12.9 5.4-25.2 14.9-34zM50.7 128H80c13.3 0 24 10.7 24 24v208c0 13.3-10.7 24-24 24H50.7l77.3 71.3 77.3-71.3H176c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24h29.3L128 56.7zm-3.3 253-1.2 1.3z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M103.3 9.7C110 3.5 118.8 0 128 0s18 3.5 24.7 9.7l91 84c7.8 7.2 12.3 17.4 12.3 28.1 0 21.1-17.1 38.3-38.3 38.3H192V352h25.7c21.1 0 38.3 17.1 38.3 38.3 0 10.7-4.5 20.9-12.3 28.1l-91 84c-6.7 6.2-15.6 9.7-24.7 9.7s-18-3.5-24.7-9.7l-91-84C4.5 411.1 0 400.9 0 390.3 0 369.1 17.1 352 38.3 352H64V160H38.3C17.1 160 0 142.9 0 121.7c0-10.7 4.5-20.9 12.3-28.1l91-84zM128 32c-1.1 0-2.2.4-3 1.2l-91 84c-1.3 1.2-2 2.9-2 4.6 0 3.5 2.8 6.3 6.3 6.3H80c8.8 0 16 7.2 16 16V368c0 8.8-7.2 16-16 16H38.3c-3.5 0-6.3 2.8-6.3 6.3 0 1.7.7 3.4 2 4.6l91 84c.8.8 1.9 1.2 3 1.2s2.2-.4 3-1.2l91-84c1.3-1.2 2-2.8 2-4.6 0-3.5-2.8-6.3-6.3-6.3H176c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h41.7c3.5 0 6.3-2.8 6.3-6.3 0-1.7-.7-3.4-2-4.6l-91-84c-.8-.8-1.9-1.2-3-1.2z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M108.7 8c5.1-5.1 12.1-8 19.3-8s14.2 2.9 19.3 8l99.7 99.7c5.7 5.7 9 13.5 9 21.7 0 16.9-13.7 30.6-30.6 30.6H176v192h49.4c16.9 0 30.6 13.7 30.6 30.6 0 8.1-3.2 15.9-9 21.7L147.3 504c-5.1 5.1-12.1 8-19.3 8s-14.2-2.9-19.3-8L9 404.3c-5.7-5.7-9-13.5-9-21.7C0 365.7 13.7 352 30.6 352H80V160H30.6C13.7 160 0 146.3 0 129.4c0-8.1 3.2-15.9 9-21.7zm19.3 8c-3 0-5.9 1.2-8 3.3L20.3 119c-2.7 2.7-4.3 6.5-4.3 10.3 0 8.1 6.5 14.6 14.6 14.6H88c4.4 0 8 3.6 8 8V360c0 4.4-3.6 8-8 8H30.6c-8.1 0-14.6 6.6-14.6 14.6 0 3.9 1.5 7.6 4.3 10.3l99.7 99.8-5.7 5.7 5.7-5.7c2.1 2.1 5 3.3 8 3.3s5.9-1.2 8-3.3l5.7 5.7-5.7-5.7 99.7-99.7c2.7-2.7 4.3-6.5 4.3-10.3 0-8.1-6.5-14.6-14.6-14.6H168c-4.4 0-8-3.6-8-8V152c0-4.4 3.6-8 8-8h57.4c8.1 0 14.6-6.5 14.6-14.6 0-3.9-1.5-7.6-4.3-10.3L136 19.3c-2.1-2.1-5-3.3-8-3.3"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M128 512c6.7 0 13-2.8 17.6-7.7l104-112c6.5-7 8.2-17.2 4.4-25.9S241.5 352 232 352h-56v-96H80v96H24c-9.5 0-18.2 5.7-22 14.4s-2.1 18.9 4.4 25.9l104 112c4.5 4.9 10.9 7.7 17.6 7.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 0c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9S241.5 160 232 160h-56v96H80v-96H24c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112C115 2.8 121.3 0 128 0"
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
