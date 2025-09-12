import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoldIcon: React.FC<
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
                  d="M0 64c0-17.7 14.3-32 32-32h192c70.7 0 128 57.3 128 128 0 31.3-11.3 60.1-30 82.3 37.1 22.4 62 63.1 62 109.7 0 70.7-57.3 128-128 128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V96H32C14.3 96 0 81.7 0 64m224 160c35.3 0 64-28.7 64-64s-28.7-64-64-64H112v128zm-112 64v128h144c35.3 0 64-28.7 64-64s-28.7-64-64-64H112"
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
                  d="M0 56c0-13.3 10.7-24 24-24h188c68.5 0 124 55.5 124 124 0 34.7-14.3 66.2-37.3 88.7 41 20.2 69.3 62.4 69.3 111.3 0 68.5-55.5 124-124 124H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24V80H24C10.7 80 0 69.3 0 56m212 176c42 0 76-34 76-76s-34-76-76-76H96v152zM96 280v152h148c42 0 76-34 76-76s-34-76-76-76H96"
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
                  d="M0 48c0-8.8 7.2-16 16-16h216c66.3 0 120 53.7 120 120 0 38.8-18.4 73.3-46.9 95.2C351.1 264 384 308.1 384 360c0 66.3-53.7 120-120 120H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V64H16C7.2 64 0 56.8 0 48m64 400h200c48.6 0 88-39.4 88-88s-39.4-88-88-88H64zm0-208h168c48.6 0 88-39.4 88-88s-39.4-88-88-88H64z"
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
                  d="M0 40c0-4.4 3.6-8 8-8h216c61.9 0 112 50.1 112 112 0 43.1-24.4 80.5-60.1 99.3 52.8 12.5 92.1 60 92.1 116.7 0 66.3-53.7 120-120 120H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V48H8c-4.4 0-8-3.6-8-8m48 424h200c57.4 0 104-46.6 104-104s-46.6-104-104-104H48zm0-224h176c53 0 96-43 96-96s-43-96-96-96H48z"
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
                  d="M0 64c0-17.7 14.3-32 32-32h192c70.7 0 128 57.3 128 128 0 31.3-11.3 60.1-30 82.3 37.1 22.4 62 63.1 62 109.7 0 70.7-57.3 128-128 128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V96H32C14.3 96 0 81.7 0 64m224 160c35.3 0 64-28.7 64-64s-28.7-64-64-64H112v128zm-112 64v128h144c35.3 0 64-28.7 64-64s-28.7-64-64-64H112"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
