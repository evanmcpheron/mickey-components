import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoltAutoIcon: React.FC<
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
                  d="M317.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.5 22.9-8.9 35.4S18.7 288 32 288h111.5L66.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H240.5zM464 288c-12.1 0-23.2 6.8-28.6 17.7l-80 160c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-80-160c-5.4-10.9-16.5-17.7-28.6-17.7m-16.2 136 16.2-32.4 16.2 32.4z"
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
                  d="M317.4 36.6C322.6 18.3 308.8 0 289.7 0c-6.8 0-13.5 2.4-18.7 6.9L11.8 228.6C4.3 235 0 244.4 0 254.3 0 272.9 15.1 288 33.7 288h86.4L66.6 475.4c-5.2 18.3 8.6 36.6 27.7 36.6 6.8 0 13.4-2.4 18.6-6.8l258.8-219.6c7.8-6.6 12.3-16.4 12.3-26.6 0-19.3-15.6-34.9-34.9-34.9h-85.3zM72.4 240 253.6 85l-44.7 156.4c-2.1 7.2-.6 15 3.9 21s11.6 9.5 19.2 9.5h81.5L130.3 427.5l44.8-156.9c2.1-7.2.6-15-3.9-21s-11.6-9.5-19.2-9.5H72.4zM464 288c-9.1 0-17.4 5.1-21.5 13.3l-88 176c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7l13.4-26.8h106.4l13.4 26.7c5.9 11.9 20.3 16.7 32.2 10.7s16.7-20.3 10.7-32.2l-88-176c-4.1-8.1-12.4-13.3-21.5-13.3zm0 77.7 29.2 58.3h-58.4z"
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
                  d="M291.4 0c-6.1 0-12 2.2-16.5 6.3L8.7 242.9C3.2 247.8 0 254.8 0 262.2 0 276.4 11.6 288 25.8 288h111.5L69.2 478.7c-5.8 16.2 6.2 33.3 23.4 33.3 6.1 0 11.9-2.2 16.5-6.2l265.8-234.5c5.8-5.1 9.1-12.5 9.1-20.3 0-14.9-12.1-27-27-27H246.7l68.1-190.7C320.6 17.1 308.6 0 291.4 0M42.1 256 275.3 48.7l-66.4 186c-1.8 4.9-1 10.3 2 14.6s7.9 6.8 13.1 6.8h119.8L108.6 463.6l66.5-186.2c1.8-4.9 1-10.3-2-14.6s-7.9-6.8-13.1-6.8zM464 288c-6.1 0-11.6 3.4-14.3 8.8l-96 192c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2l19.5-39.1h124.2l19.6 39.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5l-96-192c-2.7-5.4-8.2-8.8-14.3-8.8zm0 51.8 46.1 92.2h-92.2z"
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
                  d="M294.4 0c-6.1 0-12 2.2-16.6 6.3L7.8 247.2C2.8 251.7 0 258 0 264.7 0 277.5 10.5 288 23.3 288h124.6L66.7 477.3c-7 16.4 5 34.7 22.9 34.7 6.1 0 11.9-2.2 16.5-6.3l269.6-238.8c5.3-4.7 8.3-11.4 8.3-18.4 0-13.6-11-24.6-24.6-24.6H236.1l81.2-189.2c7-16.4-5-34.7-22.9-34.7m-5.9 18.2c1.6-1.4 3.7-2.2 5.9-2.2 6.4 0 10.7 6.5 8.1 12.4l-85.9 200.4c-1.1 2.5-.8 5.3.7 7.6s4 3.6 6.7 3.6h135.4c4.7 0 8.6 3.8 8.6 8.6 0 2.4-1 4.8-2.9 6.4L95.5 493.8c-1.6 1.4-3.7 2.2-5.9 2.2-6.4 0-10.7-6.5-8.2-12.4l85.9-200.5c1.1-2.5.8-5.3-.7-7.6s-4-3.6-6.7-3.6H23.3c-4.1 0-7.3-3.3-7.3-7.3 0-2.1.9-4.1 2.5-5.5zM464 288c-3 0-5.8 1.7-7.2 4.4l-104 208c-2 4-.4 8.8 3.6 10.7s8.8.4 10.7-3.6l21.8-43.5h150.2l21.8 43.6c2 4 6.8 5.6 10.7 3.6s5.6-6.8 3.6-10.7l-104-208c-1.4-2.7-4.1-4.4-7.2-4.4zm0 25.9L531.1 448H396.9z"
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
                  d="M317.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.5 22.9-8.9 35.4S18.7 288 32 288h111.5L66.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H240.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M492.6 305.7c-5.4-10.9-16.5-17.7-28.6-17.7s-23.2 6.8-28.6 17.7l-80 160c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9zM480.2 424h-32.4l16.2-32.4z"
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
