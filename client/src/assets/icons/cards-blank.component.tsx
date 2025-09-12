import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CardsBlankIcon: React.FC<
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
                  d="M27.8 118.8C1.2 134.2-7.9 168.2 7.5 194.9l167 289.3c15.4 26.6 49.4 35.8 76.1 20.4l192.8-111.4c26.6-15.4 35.8-49.4 20.4-76.1l-167-289.3C281.4 1.2 247.3-7.9 220.7 7.5zm431.6 302.1L324.1 499c9.7 8.1 22.2 13 35.9 13h224c30.9 0 56-25.1 56-56V120c0-30.9-25.1-56-56-56H360c-1.8 0-3.5.1-5.3.2l136.8 236.9c24.2 41.9 9.8 95.6-32.1 119.8"
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
                  d="M51.8 160.4c-3.7 2.1-4.9 6.8-2.8 10.5l167 289.3c2.1 3.7 6.8 4.9 10.5 2.8l192.9-111.4c3.7-2.1 4.9-6.8 2.8-10.5l-167-289.3c-2.1-3.7-6.8-4.9-10.5-2.8zM7.5 194.9c-15.4-26.6-6.3-60.7 20.4-76.1L220.7 7.5c26.6-15.4 60.7-6.3 76.1 20.4l167 289.3c15.4 26.6 6.2 60.7-20.4 76.1L250.5 504.5c-26.6 15.4-60.7 6.2-76.1-20.4zm451.9 226c41.9-24.2 56.3-77.8 32.1-119.8L354.7 64.2c1.7-.2 3.5-.2 5.3-.2h224c30.9 0 56 25.1 56 56v336c0 30.9-25.1 56-56 56H360c-13.7 0-26.2-4.9-35.9-13z"
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
                  d="M202.3 468.3c6.7 11 20.9 14.8 32.1 8.6 0 0 .1 0 .1-.1l192.9-111.3s.1 0 .1-.1c11.2-6.7 15-21.2 8.4-32.6L269.2 44.1c-6.6-11.5-21.3-15.4-32.8-8.8L44.1 146.4c-11.3 6.5-15.3 20.9-9 32.3 0 .1.1.1.1.2l167 289.3c0 .1.1.1.1.2zm-27.5 16.4c-.2-.3-.3-.6-.5-.9L7.6 195.2c-.2-.3-.3-.6-.5-.9-14.9-26.5-5.7-60.2 20.7-75.5L220.7 7.5c26.6-15.4 60.7-6.3 76.1 20.4l167 289.3c15.3 26.5 6.3 60.3-20 75.8-.2.1-.5.3-.7.4l-192.3 111c-.2.1-.5.3-.7.4-26.4 14.9-59.8 6-75.3-20zM324.1 499l33.2-19.1c.9.1 1.8.2 2.7.2h224c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H373l-18.3-31.8c1.7-.2 3.5-.2 5.3-.2h224c30.9 0 56 25.1 56 56v336c0 30.9-25.1 56-56 56H360c-13.7 0-26.2-4.9-35.9-13"
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
                  d="M36.1 132.5C17 143.6 10.4 168 21.5 187.2l166.7 288.7c11 19.1 35.5 25.7 54.6 14.6l192.3-111c19.1-11 25.7-35.5 14.6-54.6L283.1 36.1C272 17 247.6 10.4 228.4 21.5zM7.6 195.2c-15.5-26.8-6.3-61 20.5-76.5L220.4 7.6c26.8-15.5 61-6.3 76.5 20.5l166.7 288.8c15.5 26.8 6.3 61-20.5 76.5l-192.3 111c-26.8 15.5-61 6.3-76.5-20.5zM360 512c-13.6 0-26.2-4.9-35.9-13l15.2-8.8c6 3.7 13.1 5.8 20.7 5.8h224c22.1 0 40-17.9 40-40V120c0-22.1-17.9-40-40-40H363.8l-9.1-15.8c1.7-.2 3.5-.2 5.3-.2h224c30.9 0 56 25.1 56 56v336c0 30.9-25.1 56-56 56z"
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
                  d="m306.4 472.3 137-79.1c3.3-1.9 6.4-4.1 9.2-6.6 19.4-17.2 24.7-46.2 11.2-69.5l-139-240.7C334.4 68.7 346.7 64 360 64h224c30.9 0 56 25.1 56 56v336c0 30.9-25.1 56-56 56H360c-25.3 0-46.6-16.7-53.6-39.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M7.5 194.9c-15.4-26.6-6.3-60.7 20.4-76.1L220.7 7.5c26.6-15.4 60.7-6.3 76.1 20.4l167 289.3c15.4 26.6 6.2 60.7-20.4 76.1L250.5 504.5c-26.6 15.4-60.7 6.2-76.1-20.4z"
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
