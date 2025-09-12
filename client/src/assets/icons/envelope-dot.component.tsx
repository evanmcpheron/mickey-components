import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EnvelopeDotIcon: React.FC<
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
                  d="M496 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160M48 64h337.1c-.7 5.2-1.1 10.6-1.1 16 0 45.6 27.2 84.8 66.3 102.3L275.2 313.6a32.1 32.1 0 0 1-38.4 0L19.2 150.4C7.1 141.3 0 127.1 0 112c0-26.5 21.5-48 48-48m246.4 275.2 196.4-147.3c1.7.1 3.4.1 5.2.1 5.4 0 10.8-.4 16-1.1V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V176l217.6 163.2a63.9 63.9 0 0 0 76.8 0"
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
                  d="M496 160a80 80 0 1 0 0-160 80 80 0 1 0 0 160m16 224V190.9c-5.2.7-10.6 1.1-16 1.1-22.5 0-43.5-6.6-61-18.1L291.5 291.7c-20.7 17-50.4 17-71.1 0L48 150.1V128c0-8.8 7.2-16 16-16h324.6c-3-10.1-4.6-20.9-4.6-32 0-5.4.4-10.8 1.1-16H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64M48 212.2l142 116.6c38.4 31.5 93.7 31.5 132 0l142-116.6V384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16z"
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
                  d="M448 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-64 304V190.9c-5.2.7-10.6 1.1-16 1.1-13.8 0-27-2.5-39.2-7.1L284.4 311.3c-16.9 12.4-39.9 12.4-56.8 0L32 167.9V128c0-17.7 14.3-32 32-32h321.1c-.7-5.2-1.1-10.6-1.1-16s.4-10.8 1.1-16H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64M32 207.6l176.7 129.5c28.2 20.6 66.5 20.6 94.6 0L480 207.6V384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32z"
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
                  d="M464 64a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-64 320V160c-6.3 0-12.5-.6-18.5-1.8L291.2 321.4c-20.5 16.5-49.8 16.5-70.3 0L16 156.2V128c0-26.5 21.5-48 48-48h353.3c-.9-5.2-1.3-10.5-1.3-16H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64M16 176.7l194.8 157.1c26.4 21.3 64 21.3 90.4 0L496 176.7V384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48z"
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
                  d="M417.6 64c-1 5.2-1.6 10.5-1.6 16 0 39.3 28.3 72 65.7 78.7L275.2 313.6a32.1 32.1 0 0 1-38.4 0L19.2 150.4C7.1 141.3 0 127.1 0 112c0-26.5 21.5-48 48-48zM0 384V176l217.6 163.2a63.9 63.9 0 0 0 76.8 0L512 176v208c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M416 80a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
