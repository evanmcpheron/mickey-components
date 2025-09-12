import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PaperPlaneIcon: React.FC<
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
                  d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480v-83.6c0-4 1.5-7.8 4.2-10.7l167.6-182.9c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8l-88.3-44.2C7.1 311.3.3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4"
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
                  d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376v103.3c0 18.1 14.6 32.7 32.7 32.7 9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4zm52.1 25.5L409.7 90.6 190.1 336l1.2 1zm335.1 139.7-166.6-69.5 214.1-239.3z"
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
                  d="M511.6 36.9c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256C5.5 266.3-.7 277.8.1 290s8.4 22.9 19.6 27.6L160 376v93c0 23.8 19.3 43 43 43 13.1 0 25.4-5.9 33.6-16.1l52.8-66h.1l114.2 47.6c9.1 3.8 19.4 3.2 28-1.6s14.5-13.3 16-23l64-416zm-253 380.2-47 58.8c-2.1 2.6-5.3 4.1-8.6 4.1-6.1 0-11-4.9-11-11v-79.7zm43.1-16.7-96.6-40.3 269-289.6L416 448l-114.2-47.6zM450.5 48.8 173.6 347 32 288z"
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
                  d="m403.7 477.5-114.2-47.6-37.7 65.9c-7.2 12.6-22 18.8-36 15.1S192 494.5 192 480v-90.7L19.7 317.5C8.4 312.8.8 302.2.1 290s5.5-23.7 16.1-29.8l7.9 13.9c-5.3 3-8.4 8.8-8 14.9s4.2 11.4 9.8 13.8l168.9 70.4L479.6 16c-2.6.1-5.2.8-7.6 2.1l-448 256-7.9-13.9 448-256c8.3-4.7 18-5.5 26.7-2.3 2.5.9 5 2.2 7.3 3.7 1.3.9 2.5 1.8 3.6 2.8.9.8 1.7 1.6 2.4 2.5 6.1 7 9 16.5 7.5 25.9l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6zm-193.6-98 85.5 35.6h.1l114.2 47.6c4.5 1.9 9.7 1.6 14-.8s7.2-6.7 8-11.5l64-416c.6-3.7-.2-7.4-2-10.5zM208 396v84c0 7.3 4.9 13.6 11.9 15.5s14.4-1.2 18-7.5l36.7-64.2z"
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
                  d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L224 402.7v-13.3l156.7-203.6c5.2-6.7 4.2-16.4-2.3-21.9s-16.1-5.1-22 1.1L178.8 350.6l-14.1 14.1c-3 3-4.7 7.1-4.7 11.3l-28.3-11.8-112-46.7C8.4 312.8.8 302.2.1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M380.7 185.8c5.1-6.7 4.2-16.2-2.1-21.8s-15.9-5.3-21.9.7l-179 179-13 13c-3 3-4.7 7.1-4.7 11.3v112c0 13.2 8.1 25 20.3 29.8s26.2 1.6 35.2-8.1l68.5-74-60-25v-13.3z"
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
