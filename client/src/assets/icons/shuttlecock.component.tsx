import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShuttlecockIcon: React.FC<
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
                  d="M320 32c0 8.8-7.2 16-16 16-24.4 0-46 15.8-53.4 39.1l-29.3 92.8c-1.3 4.1-4.2 7.6-8.1 9.5l-32.4 16.2c-3.1 1.5-5.6 4.1-7.2 7.2l-32.5 64.9c-3.1 6.2-1.9 13.6 3 18.5L163 315l71.9-71.9 46.2-146.3c3.2-10 12.4-16.8 22.9-16.8h104c13.3 0 24 10.7 24 24v104c0 10.5-6.8 19.7-16.8 22.9l-146.4 46.2L197 349l18.9 18.9c4.9 4.9 12.3 6.1 18.5 3l64.9-32.5c3.1-1.5 5.6-4.1 7.2-7.2l16.2-32.4c1.9-3.9 5.4-6.8 9.5-8.1l92.8-29.3c23.3-7.4 39.1-29 39.1-53.4 0-8.8 7.2-16 16-16h8c13.3 0 24 10.7 24 24v51.7c0 12.4-7.2 23.7-18.4 29L250.1 411.2c-6.7 3.1-12.8 7.4-18 12.7l-28.8 28.8-144-144 28.8-28.8a65.2 65.2 0 0 0 12.7-18L215.4 18.4C220.6 7.2 231.9 0 244.3 0H296c13.3 0 24 10.7 24 24zM36.7 331.3l144 144-6.9 6.9a101.8 101.8 0 0 1-72 29.8C45.6 512 0 466.4 0 410.2c0-27 10.7-52.9 29.8-72z"
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
                  d="m247 48-43.3 89.2L280 97.4V48zm-78.5 161.6-38.9 80L159 319l75.9-75.9 25.7-81.5zM328 40v40h72c17.7 0 32 14.3 32 32v72h40c22.1 0 40 17.9 40 40v46c0 15.3-8.7 29.3-22.5 36l-242 117.5c-.7 1.4-1.7 2.7-2.8 3.8l-51.5 51.5c-21.2 21.2-50 33.1-80 33.1C50.7 512 0 461.3 0 398.9c0-30 11.9-58.8 33.1-80l51.5-51.5c1.2-1.2 2.5-2.1 3.8-2.8L206 22.5C212.7 8.7 226.7 0 242 0h46c22.1 0 40 17.9 40 40M222.3 382.3l80-38.9 48-92.1-81.5 25.7-75.8 76 29.4 29.4zm70.4-163.1 91.3-28.8V128h-62.4l-28.8 91.2zM188.1 416 96 323.9l-22.7 22.7 92.1 92.1zm-48.4 42.3-86-86c-3.7 8.3-5.7 17.3-5.7 26.6 0 36 29.2 65.1 65.1 65.1 9.2 0 18.3-2 26.6-5.7m235.1-150L464 265v-33h-49.4l-39.7 76.3z"
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
                  d="M241.9 0c-12.1 0-23.2 6.8-28.6 17.7L92.2 259.8l-18.8 18.8-40.3 40.3c-21.2 21.2-33.1 50-33.1 80C0 461.3 50.7 512 113.1 512c30 0 58.8-11.9 80-33.1l40.2-40.2 18.9-18.9 242.1-121c10.8-5.4 17.7-16.5 17.7-28.6V224c0-17.7-14.3-32-32-32h-56v-72c0-17.7-14.3-32-32-32h-72V32c0-17.7-14.3-32-32-32zm67.2 355.6-75.7 37.8-46.1-46.1 77.2-77.2 103-32.5zm47.5-23.7 53.3-107.6.6-.2H480v46.1l-123.5 61.6zM288 101.5l-.2.6-107.6 53.4L241.9 32H288zm-13.6 43-32.5 103-77.2 77.2-46.1-46.1 37.8-75.7zm6.1 87L315.7 120H392v76.3zM61.9 335.3l34.1-34L210.7 416l-34.1 34.1zm89.7 135c-11.7 6.3-24.9 9.7-38.5 9.7-44.8 0-81.1-36.3-81.1-81.1 0-13.6 3.4-26.8 9.7-38.5z"
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
                  d="M226.8 20.5c1.3-2.8 4.1-4.5 7.2-4.5h46c4.4 0 8 3.6 8 8v69.8c0 3.1-1.8 5.9-4.6 7.2l-123.8 58.2zm63.4 95.1c.7-.3 1.4-.7 2.1-1.1L249 251.7l-78.6 78.6-63-63-.1-.1 41.2-85.2 141.7-66.5zM303.9 96c.1-.7.1-1.4.1-2.2V24c0-13.3-10.7-24-24-24h-46c-9.2 0-17.6 5.3-21.6 13.5L93.8 258.2l-9.1 9.1-51.6 51.6c-21.2 21.2-33.1 50-33.1 80C0 461.3 50.7 512 113.1 512c30 0 58.8-11.9 80-33.1l51.5-51.5 9.1-9.1 244.8-118.7c8.3-4 13.5-12.4 13.5-21.6v-46c0-13.3-10.7-24-24-24h-69.8c-.7 0-1.4 0-2.2.1V120c0-13.3-10.7-24-24-24h-88.1M330 363.5l-85.2 41.3-.1-.1-63-63 78.6-78.7 137.3-43.4c-.4.7-.8 1.4-1.1 2.1zm-61.7-119.8L309.9 112H392c4.4 0 8 3.6 8 8v82.1zM53 321.7l43-43L233.4 416l-43 43zm126 148.6a97.12 97.12 0 0 1-65.8 25.7C59.5 496 16 452.5 16 398.9c0-24.4 9.2-47.9 25.7-65.8zM496 278c0 3.1-1.8 5.9-4.5 7.2l-138.7 67.2 58.1-123.8c1.3-2.8 4.1-4.6 7.2-4.6H488c4.4 0 8 3.6 8 8z"
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
                  d="M192 464 48 320l-18.2 18.2a101.8 101.8 0 0 0-29.8 72C0 466.4 45.6 512 101.8 512c27 0 52.9-10.7 72-29.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 32c0 8.8-7.2 16-16 16-24.4 0-46 15.8-53.4 39.1l-29.3 92.8c-1.3 4.1-4.2 7.6-8.1 9.5l-32.4 16.2c-3.1 1.5-5.6 4.1-7.2 7.2l-32.5 64.9c-3.1 6.2-1.9 13.6 3 18.5L163 315l71.9-71.9 46.2-146.3c3.2-10 12.4-16.8 22.9-16.8h104c13.3 0 24 10.7 24 24v104c0 10.5-6.8 19.7-16.8 22.9l-146.4 46.2L197 349l18.9 18.9c4.9 4.9 12.3 6.1 18.5 3l64.9-32.5c3.1-1.5 5.6-4.1 7.2-7.2l16.2-32.4c1.9-3.9 5.4-6.8 9.5-8.1l92.8-29.3c23.3-7.4 39.1-29 39.1-53.4 0-8.8 7.2-16 16-16h8c13.3 0 24 10.7 24 24v51.7c0 12.4-7.2 23.7-18.4 29L250.1 411.2c-6.7 3.1-12.8 7.4-18 12.7L192 464 48 320l40.1-40.1a65.2 65.2 0 0 0 12.7-18L215.4 18.4C220.6 7.2 231.9 0 244.3 0H296c13.3 0 24 10.7 24 24z"
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
