import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CowbellIcon: React.FC<
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
                  d="M112 96h16V40c0-22.1 17.9-40 40-40h112c22.1 0 40 17.9 40 40v56h16c21.4 0 40.3 14.2 46.2 34.8l64 224c4.1 14.5 1.2 30.1-7.8 42.1S415.1 416 400.1 416H48c-15.1 0-29.3-7.1-38.3-19.1s-12-27.6-7.8-42.1l64-224C71.7 110.2 90.6 96 112 96m160 0V48h-96v48zm16 352c0 35.3-28.7 64-64 64s-64-28.7-64-64z"
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
                  d="M176 48h96v48h-96zm-48-8v56h-16c-21.4 0-40.3 14.2-46.2 34.8l-64 224c-4.1 14.5-1.2 30.1 7.8 42.1S32.9 416 48 416h352c15.1 0 29.3-7.1 38.3-19.1s12-27.6 7.8-42.1l-64-224C376.3 110.2 357.4 96 336 96h-16V40c0-22.1-17.9-40-40-40H168c-22.1 0-40 17.9-40 40m-16 104h224l64 224H48zm176 304H160c0 35.3 28.7 64 64 64s64-28.7 64-64"
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
                  d="M176 32h96c8.8 0 16 7.2 16 16v48H160V48c0-8.8 7.2-16 16-16m-48 16v48h-16c-21.4 0-40.3 14.2-46.2 34.8l-64 224c-4.1 14.5-1.2 30.1 7.8 42.1S32.9 416 48 416h352c15.1 0 29.3-7.1 38.3-19.1s12-27.6 7.8-42.1l-64-224C376.3 110.2 357.4 96 336 96h-16V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48m16 80h192c7.1 0 13.4 4.7 15.4 11.6l64 224c1.4 4.8.4 10-2.6 14S405 384 400 384H48c-5 0-9.8-2.4-12.8-6.4s-4-9.2-2.6-14l64-224c2-6.9 8.2-11.6 15.4-11.6zm80 384c35.3 0 64-28.7 64-64h-32c0 17.7-14.3 32-32 32s-32-14.3-32-32h-32c0 35.3 28.7 64 64 64"
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
                  d="M168 16h112c13.3 0 24 10.7 24 24v56H144V40c0-13.3 10.7-24 24-24m-40 24v56h-16c-21.4 0-40.3 14.2-46.2 34.8l-64 224c-4.1 14.5-1.2 30.1 7.8 42.1S32.9 416 48 416h352c15.1 0 29.3-7.1 38.3-19.1s12-27.6 7.8-42.1l-64-224C376.3 110.2 357.4 96 336 96h-16V40c0-22.1-17.9-40-40-40H168c-22.1 0-40 17.9-40 40m8 72h200c14.3 0 26.8 9.5 30.8 23.2l64 224c2.8 9.7.8 20-5.2 28.1S410.1 400 400.1 400H48c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1l64-224C85.2 121.5 97.7 112 112 112zm40 336c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 17 6.7 33.3 18.7 45.3S207 512 224 512s33.3-6.7 45.3-18.7S288 465 288 448c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 12.7-5.1 24.9-14.1 33.9S236.7 496 224 496s-24.9-5.1-33.9-14.1S176 460.7 176 448"
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
                  d="M112 96c-22 0-41.2 15-46.6 36.4l-64 256c-3.6 14.3-.4 29.5 8.7 41.2S33.2 448 48 448h352c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-64-256C377.2 111 358 96 336 96V40c0-22.1-17.9-40-40-40H152c-22.1 0-40 17.9-40 40zm48 0V48h128v48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 512c35.3 0 64-28.7 64-64H160c0 35.3 28.7 64 64 64"
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
