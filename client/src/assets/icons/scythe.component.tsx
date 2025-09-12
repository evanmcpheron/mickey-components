import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ScytheIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M614.7.7c5.6 1.2 10.5 3.8 14.5 7.3 8.4 7.4 12.6 19 10.1 30.7l-4.8 22.6-56.9 265.4-34.3 160c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l26-121.3H416c-17.7 0-32-14.3-32-32s14.3-32 32-32h104.4L569 61.3l7.7-36L582.1 0H608c2.2 0 4.5.2 6.7.7M352 0h197.4l-4 18.6L508.3 192H12.7c-7 0-12.7-5.7-12.7-12.7 0-2.1.5-4.1 1.6-6C15 151.1 114.8 0 352 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M639.5 28.9c2.7-13-5.7-25.7-18.6-28.4s-25.7 5.7-28.4 18.6L536.9 288H408c-13.3 0-24 10.7-24 24s10.7 24 24 24h118.9l-30.4 147.1c-2.7 13 5.7 25.7 18.6 28.4s25.7-5.7 28.4-18.6zM352 0C121.4 0 20.6 155.8 2.9 186.7c-2 3.5-2.9 7.4-2.9 11.4C0 212.4 11.6 224 25.9 224h491.5l9.9-48H68.7C108.6 126.8 196.8 48 352 48h201.8l7.3-35.3c.9-4.5 2.4-8.7 4.2-12.7z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M639.7 19.1c1.7-8.7-3.9-17.1-12.6-18.8S610 4.2 608.3 12.9L550.1 304H400c-8.8 0-16 7.2-16 16s7.2 16 16 16h143.7l-31.4 156.9c-1.7 8.7 3.9 17.1 12.6 18.8s17.1-3.9 18.8-12.6zM352 0C121.4 0 20.6 155.8 2.9 186.7c-2 3.5-2.9 7.4-2.9 11.4C0 212.4 11.6 224 25.9 224h507.5l6.4-32H37.2C64.7 149.7 158.7 32 352 32h219.8l5.1-25.4q.75-3.45 1.8-6.6z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m522.3 355.4-26 121.3c-1.9 8.6 3.7 17.1 12.3 19s17.1-3.7 19-12.3l34.3-160 61.7-288c1.9-8.6-3.7-17.1-12.3-19s-17.1 3.7-19 12.3l-56.2 262.7c-1.6 7.4-8.1 12.6-15.6 12.6H416c-8.8 0-16 7.2-16 16s7.2 16 16 16h90.7c4.8 0 9.4 2.2 12.4 5.9s4.2 8.7 3.2 13.4zM416 288h104.4l56.3-262.7C580.4 8 597.4-3 614.7.7s28.3 20.7 24.6 38l-61.7 288-34.3 160c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38L503.3 368l3.4-16H416c-17.7 0-32-14.3-32-32s14.3-32 32-32M352 0h200.6c-2.8 4.9-5 10.3-6.5 16H352C110.2 16 27 179.3 16 203.2v.6c0 2.3 1.8 4.1 4.1 4.1h484.7l-3.4 16H20.1C9 224 0 215 0 203.9c0-2.6.4-5 1.5-7.3C13.6 170.2 101.1 0 352 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M582.1 0H352C114.8 0 15 151.1 1.6 173.3c-1.1 1.8-1.6 3.8-1.6 6 0 7 5.7 12.7 12.7 12.7H541l35.7-166.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M639 24.1C636.1 12.7 627 3.3 614.7.7c-2.2-.5-4.5-.7-6.7-.7h-25.9l-5.4 25.3-7.7 36L520.4 288H416c-17.7 0-32 14.3-32 32s14.3 32 32 32h90.7l-26 121.3c-3.7 17.3 7.3 34.3 24.6 38s34.3-7.3 38-24.6l34.3-160 56.8-265.4 4.8-22.6c1.1-5 .9-10-.3-14.6z"
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
