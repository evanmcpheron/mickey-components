import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LeafIcon: React.FC<
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
                  d="M272 96c-78.6 0-145.1 51.5-167.7 122.5 33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16h-88c-16.6 0-32.7 1.9-48.3 5.4-25.9 5.9-49.9 16.4-71.4 30.7C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448h1c132.1-.7 239-130.9 239-291.4 0-42.6-7.5-83.1-21.1-119.6-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96z"
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
                  d="M149.6 234.4c20.9-6.7 43.2-10.4 66.4-10.4h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-25.4 0-49.5 5.6-71 15.7C152.7 351 206.6 400 271.9 400h1c97.3-.5 191.1-100.3 191.1-243.4 0-12.8-.8-25.3-2.3-37.5C437 134.9 407.6 144 376 144H272c-57.6 0-106.3 38.1-122.4 90.4m-53.2 25.7C102.5 168.5 178.8 96 272 96h104c28.7 0 54.8-10.8 74.6-28.5.7-.6 1.4-1.3 2.1-1.9 6.6-6.2 12.5-13.2 17.4-20.9 1.6-2.5 3.2-5.1 4.6-7.8 3.5-6.5 13.6-6.8 16.2.1 1.3 3.5 2.5 7 3.7 10.6 2.9 8.9 5.5 17.9 7.8 27.2.5 1.9.9 3.8 1.3 5.6 5.4 24.3 8.3 49.8 8.3 76.2 0 160.5-106.9 290.7-239 291.4h-1c-81.7 0-150.4-55.7-170.2-131.2C68.7 347.5 48 391.3 48 440v16c0 13.3-10.7 24-24 24S0 469.3 0 456v-16c0-75.1 38.3-141.2 96.4-179.9"
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
                  d="M132 238.3c23.6-9.3 49.2-14.3 76-14.3h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-28.8 0-56 6.9-80 19.2 1.7 78 65.5 140.8 144 140.8h.8c109-.5 207.2-110.5 207.2-259.4 0-23-2.4-45.2-6.9-66.3-25.6 23.4-59.7 37.7-97.1 37.7H272c-67.9 0-124.9 47-140 110.3m-35.3 18C104.7 166.4 180.1 96 272 96h104c35.2 0 66.6-16.2 87.2-41.7l.6-.8c2.3-2.9 4.4-5.8 6.4-8.9 1.6-2.5 3.2-5.1 4.6-7.8 3.5-6.5 13.6-6.8 16.2.1 1.3 3.5 2.5 7 3.7 10.6s2.3 7.1 3.4 10.8l.4 1.5c8.8 30.3 13.5 62.8 13.5 96.8 0 160.5-106.9 290.7-239 291.4h-1c-89.4 0-163.2-66.7-174.5-153-40 32.3-65.5 81.7-65.5 137v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-73.9 38.6-138.9 96.7-175.7"
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
                  d="M114.6 243.1c25.9-12.3 54.9-19.1 85.4-19.1h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H200c-31.8 0-61.6 8-87.7 22.2-.2 3.2-.3 6.5-.3 9.8 0 88.4 71.6 160 160 160h.9C393.5 431.4 496 311.3 496 156.6c0-35.1-5.3-68.5-15-99.3-23.2 33-61.5 54.7-105 54.7H272c-78.5 0-143.8 56.5-157.4 131.1m-17.5 9.4C106.8 164.5 181.4 96 272 96h104c42.7 0 79.9-23.9 98.8-59.1 3.5-6.5 13.6-6.8 16.2.1 13.5 36.5 21.1 77 21.1 119.6C512 317.1 405.1 447.3 273 448h-1c-97.1 0-175.9-78.7-176-175.8C47.7 305.4 16 361 16 424v48c0 4.4-3.6 8-8 8s-8-3.6-8-8v-48c0-72.8 38.9-136.5 97.1-171.5"
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
                  d="M96.4 260.1C102.5 168.5 178.8 96 272 96h104c42.7 0 79.9-23.9 98.8-59.1 3.5-6.5 13.6-6.8 16.2.1 13.5 36.5 21.1 77 21.1 119.6C512 317.1 405.1 447.3 273 448h-1c-81.7 0-150.4-55.7-170.2-131.2C131.7 289 171.9 272 216 272h72c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72c-44.2 0-85.4 13.3-119.6 36.1"
                />
                <path
                  className="aps-icon-foreground"
                  d="M216 272c-92.8 0-168 75.2-168 168v16c0 13.3-10.7 24-24 24S0 469.3 0 456v-16c0-119.3 96.7-216 216-216h72c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
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
