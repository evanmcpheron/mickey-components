import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HexagonImageIcon: React.FC<
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
                  d="M17.1 220a71.81 71.81 0 0 0 0 72l88.3 152.9c12.9 22.3 36.6 36 62.4 36h176.5a72.1 72.1 0 0 0 62.4-36L494.9 292c12.9-22.3 12.9-49.7 0-72L406.6 67.1c-12.9-22.3-36.6-36-62.4-36H167.7a72.1 72.1 0 0 0-62.4 36zm141.2 59.8c4.5-4.9 10.8-7.7 17.4-7.8s13 2.6 17.6 7.4l38.9 40.6 71.6-86.2c4.6-5.5 11.3-8.7 18.5-8.7s13.9 3.2 18.5 8.7l72.6 87.4-55.2 95.7c-2.9 5-8.1 8-13.9 8H167.7c-5.7 0-11-3-13.9-8l-46.8-81 51.2-56.1zM192 120a40 40 0 1 1 0 80 40 40 0 1 1 0-80"
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
                  d="M17.1 220a71.81 71.81 0 0 0 0 72l88.3 152.9c12.9 22.3 36.6 36 62.4 36h176.5a72.1 72.1 0 0 0 62.4-36L494.9 292c12.9-22.3 12.9-49.7 0-72L406.6 67.1c-12.9-22.3-36.6-36-62.4-36H167.7a72.1 72.1 0 0 0-62.4 36zm41.6 48c-4.3-7.4-4.3-16.6 0-24l88.2-152.9c4.3-7.4 12.2-12 20.8-12h176.6c8.6 0 16.5 4.6 20.8 12L453.4 244c4.3 7.4 4.3 16.6 0 24l-34.5 59.8-78.1-94c-4.6-5.5-11.3-8.7-18.5-8.7s-13.9 3.2-18.5 8.7L232.2 320l-38.9-40.6c-4.6-4.8-11-7.5-17.6-7.4s-13 2.9-17.4 7.8l-56.9 62.3L58.6 268zM232 160a40 40 0 1 0-80 0 40 40 0 1 0 80 0"
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
                  d="M16 288a64.16 64.16 0 0 1 0-64l92.3-159.8c11.4-19.8 32.6-32 55.4-32h184.6c22.9 0 44 12.2 55.4 32L496 224c11.4 19.8 11.4 44.2 0 64l-92.3 159.8c-11.4 19.8-32.6 32-55.4 32H163.7c-22.9 0-44-12.2-55.4-32zm27.7-48c-5.7 9.9-5.7 22.1 0 32l29.6 51.3 42.7-42.7c15.4-15.4 40.4-15.6 56.1-.5l55.3 53.4 95.4-101.8c15.8-16.9 42.6-16.9 58.4 0l68.3 72.8 18.8-32.5c5.7-9.9 5.7-22.1 0-32L376 80.2c-5.7-9.9-16.3-16-27.7-16H163.7c-11.4 0-22 6.1-27.7 16zm92 191.3 69.8-74.4-55.6-53.8c-3.1-3-8.1-3-11.2.1L89.9 352l45.8 79.4zm297.1-97.8-74.9-79.9c-3.2-3.4-8.5-3.4-11.7 0L164.1 447.8h184.2c11.4 0 22-6.1 27.7-16zM208 160a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-64 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
                  d="M400.8 450.8 497.1 284c2.5-4.3 4.4-8.9 5.6-13.6 2-7.7 2.4-15.7 1.1-23.6-1.1-6.5-3.3-12.9-6.7-18.8L400.8 61.2c-10-17.3-28.5-28-48.5-28H159.7c-20 0-38.5 10.7-48.5 28L14.9 228c-3.9 6.7-6.3 14.1-7.1 21.6-1.4 11.8 1 23.9 7.1 34.4l96.3 166.8c10 17.3 28.5 28 48.5 28h192.6c20 0 38.5-10.7 48.5-28M483.2 236c2.7 4.6 4.4 9.7 5 14.8l-2.7 20.4c-.7 1.6-1.5 3.2-2.3 4.8L462 312.6l-70.7-75.4c-12.6-13.5-34-13.5-46.7 0l-101 107.7-61.1-59.1c-12.6-12.1-32.5-12-44.9.4l-65.2 65.3L28.8 276c-3.6-6.2-5.4-13.1-5.4-20 0-3.4.4-6.8 1.3-10.1.9-3.4 2.2-6.8 4.1-9.9l96.3-166.8c7.1-12.4 20.4-20 34.6-20h192.6c14.3 0 27.5 7.6 34.6 20zM80.7 365.9l68.3-68.4c6.2-6.2 16.2-6.3 22.4-.2l61.3 59.3-94 100.2c-5.6-3.4-10.3-8.2-13.7-14.1zM387 442.8c-7.1 12.4-20.4 20-34.6 20H159.7c-1.5 0-2.9-.1-4.4-.2l201-214.4c6.3-6.7 17-6.7 23.3 0l74 79-66.7 115.6zM192 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-32-48a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M17.1 220a71.81 71.81 0 0 0 0 72l88.3 152.9c12.9 22.3 36.6 36 62.4 36h176.5a72.1 72.1 0 0 0 62.4-36L494.9 292c12.9-22.3 12.9-49.7 0-72L406.6 67.1c-12.9-22.3-36.6-36-62.4-36H167.7a72.1 72.1 0 0 0-62.4 36zm141.2 59.8c4.5-4.9 10.8-7.7 17.4-7.8s13 2.6 17.6 7.4l38.9 40.6 71.6-86.2c4.6-5.5 11.3-8.7 18.5-8.7s13.9 3.2 18.5 8.7l72.6 87.4-55.2 95.7c-2.9 5-8.1 8-13.9 8H167.7c-5.7 0-11-3-13.9-8l-46.8-81 51.2-56.1zM192 120a40 40 0 1 1 0 80 40 40 0 1 1 0-80"
                />
                <path
                  className="aps-icon-foreground"
                  d="m158.3 279.8-51.2 56.1 46.8 81c2.9 5 8.1 8 13.9 8h176.6c5.7 0 11-3 13.9-8l55.2-95.7-72.6-87.4c-4.6-5.5-11.3-8.7-18.5-8.7s-13.9 3.2-18.5 8.7L232.2 320l-38.9-40.6c-4.6-4.8-11-7.5-17.6-7.4s-13 2.9-17.4 7.8"
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
