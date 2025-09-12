import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TreeIcon: React.FC<
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
                  d="M210.6 5.9 62 169.4c-3.9 4.2-6 9.8-6 15.5 0 12.8 10.3 23.1 23.1 23.1H104l-73.4 73.4c-4.2 4.2-6.6 10-6.6 16 0 12.5 10.1 22.6 22.6 22.6H80L5.4 409.5c-3.5 4.2-5.4 9.5-5.4 15 0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h168.5c13 0 23.5-10.5 23.5-23.5 0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1 0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9"
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
                  d="M241.8 7.9c-4.5-5-11-7.9-17.8-7.9s-13.3 2.9-17.8 7.9l-144 160c-6.3 7-7.9 17.2-4.1 25.8S70.5 208 80 208h11.8l-62 72.4c-6.1 7.1-7.5 17.1-3.6 25.6s12.4 14 21.8 14h24L4.8 409.6c-5.5 7.3-6.3 17-2.3 25.1S14.9 448 24 448h176v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h176c9.1 0 17.4-5.1 21.5-13.3s3.2-17.9-2.3-25.1L376 320h24c9.4 0 17.9-5.5 21.8-14s2.5-18.5-3.6-25.6l-62-72.4H368c9.5 0 18.1-5.6 21.9-14.2s2.3-18.8-4.1-25.8L241.8 8zM248 400V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v184H72l67.2-89.6c5.5-7.3 6.3-17 2.3-25.1S129.1 272 120 272h-19.8l62-72.4c6.1-7.1 7.5-17.1 3.6-25.6s-12.4-14-21.8-14h-10.1L224 59.9 314.1 160H304c-9.4 0-17.9 5.5-21.8 14s-2.5 18.5 3.6 25.6l62 72.4H328c-9.1 0-17.4 5.1-21.5 13.3s-3.2 17.9 2.3 25.1L376 400H248"
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
                  d="M235.3 4.7c-6.2-6.2-16.4-6.2-22.6 0L72 145.4c-5.1 5.1-8 12.1-8 19.3 0 15.1 12.2 27.3 27.3 27.3h17.9l-70.5 82.3c-4.3 5-6.7 11.4-6.7 18 0 15.3 12.4 27.7 27.7 27.7h17.5L6.7 402.3c-4.3 5-6.7 11.4-6.7 18C0 435.6 12.4 448 27.7 448H208v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h180.3c15.3 0 27.7-12.4 27.7-27.7 0-6.6-2.4-13-6.7-18L370.8 320h17.5c15.3 0 27.7-12.4 27.7-27.7 0-6.6-2.4-13-6.7-18L338.8 192h17.9c15.1 0 27.3-12.2 27.3-27.3 0-7.2-2.9-14.2-8-19.3zM240 416V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v208H37.1l87.1-101.6c4.1-4.7 5-11.4 2.4-17.1s-8.3-9.3-14.5-9.3h-43l87.1-101.6c4.1-4.7 5-11.4 2.4-17.1s-8.3-9.3-14.5-9.3h-41.5L224 38.6 345.4 160H304c-6.2 0-11.9 3.6-14.5 9.3s-1.7 12.4 2.4 17.1l87 101.6H336c-6.2 0-11.9 3.6-14.5 9.3s-1.7 12.4 2.4 17.1l87 101.6H240"
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
                  d="M229.7 2.3c-3.1-3.1-8.2-3.1-11.3 0l-147 147c-4.7 4.7-7.3 11-7.3 17.7 0 13.8 11.2 25 25 25h35.7l-85.5 85.4c-4.7 4.7-7.3 11-7.3 17.7 0 13.8 11.2 25 25 25h35.7L7.3 405.4C2.6 410.1 0 416.4 0 423c0 13.8 11.2 25 25 25h191v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h191c13.8 0 25-11.2 25-25 0-6.6-2.6-13-7.3-17.7L355.3 320H391c13.8 0 25-11.2 25-25 0-6.6-2.6-13-7.3-17.7L323.3 192H359c13.8 0 25-11.2 25-25 0-6.6-2.6-13-7.3-17.7zM232 432V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v232H25c-5 0-9-4-9-9 0-2.4.9-4.7 2.6-6.3l99-99c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9H57c-5 0-9-4-9-9 0-2.4.9-4.7 2.6-6.3l99-99c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9H89c-5 0-9-4-9-9 0-2.4.9-4.7 2.6-6.3L224 19.3l141.4 141.4c1.7 1.7 2.6 4 2.6 6.3 0 5-4 9-9 9h-55c-3.2 0-6.2 1.9-7.4 4.9s-.6 6.4 1.7 8.7l99 99c1.7 1.7 2.6 4 2.6 6.3 0 5-4 9-9 9H336c-3.2 0-6.2 1.9-7.4 4.9s-.6 6.4 1.7 8.7l99 99c1.7 1.7 2.6 4 2.6 6.3 0 5-4 9-9 9H232z"
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
                  d="M210.6 5.9 62 169.4c-3.9 4.2-6 9.8-6 15.5 0 12.8 10.3 23.1 23.1 23.1H104l-73.4 73.4c-4.2 4.2-6.6 10-6.6 16 0 12.5 10.1 22.6 22.6 22.6H80L5.4 409.5c-3.5 4.2-5.4 9.5-5.4 15 0 13 10.5 23.5 23.5 23.5H192V224c0-17.7 14.3-32 32-32s32 14.3 32 32v224h168.5c13 0 23.5-10.5 23.5-23.5 0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1 0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 192c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32"
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
