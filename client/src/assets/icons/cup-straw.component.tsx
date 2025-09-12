import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CupStrawIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M249.3 0H280c13.3 0 24 10.7 24 24s-10.7 24-24 24h-30.7c-3.7 0-6.9 2.6-7.8 6.2L224.2 128H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h142.9l20-84.8C200.8 17.9 223.4 0 249.3 0m-189 468L40 224h304l-20.3 244c-2.1 24.9-22.9 44-47.8 44H108.2c-25 0-45.8-19.1-47.8-44z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m194.8 43.2-20 84.8H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24H224.2l17.4-73.8c.9-3.6 4.1-6.2 7.8-6.2H280c13.3 0 24-10.7 24-24S293.3 0 280 0h-30.7c-26 0-48.6 17.9-54.5 43.2M38.7 208l21.6 260c2.1 24.9 22.9 44 47.8 44h167.7c25 0 45.8-19.1 47.8-44l21.7-260h-48.1l-21.4 256H108.2L86.8 208z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M249 0c-22 0-41.2 15-46.6 36.4L179.5 128H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16H212.5l21-83.9C235.2 37 241.6 32 249 32h23c8.8 0 16-7.2 16-16s-7.2-16-16-16zM37.3 192l23 276c2.1 24.9 22.9 44 47.8 44h167.7c25 0 45.8-19.1 47.8-44l23-276h-32l-22.8 273.3c-.7 8.3-7.6 14.7-15.9 14.7H108.2c-8.3 0-15.3-6.4-15.9-14.7L69.4 192z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M249 0c-18.4 0-34.4 12.5-38.8 30.3L185.8 128H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h368c4.4 0 8-3.6 8-8s-3.6-8-8-8H202.2l23.5-93.8C228.4 23.5 238 16 249 16h31c4.4 0 8-3.6 8-8s-3.6-8-8-8zM36 176l24.3 292c2.1 24.9 22.9 44 47.8 44h167.7c25 0 45.8-19.1 47.8-44L348 176h-16.1l-24.2 290.7c-1.4 16.6-15.2 29.3-31.9 29.3H108.2c-16.6 0-30.5-12.8-31.9-29.3L52.1 176z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M59.7 468.8 32 192h320l-27.7 276.8c-2.5 24.5-23.1 43.2-47.8 43.2H107.4c-24.7 0-45.3-18.7-47.8-43.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M249.3 0c-26 0-48.6 17.9-54.5 43.2l-20 84.8H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32H224.2l17.4-73.8c.9-3.6 4.1-6.2 7.8-6.2H280c13.3 0 24-10.7 24-24S293.3 0 280 0z"
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
