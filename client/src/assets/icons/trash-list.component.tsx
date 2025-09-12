import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrashListIcon: React.FC<
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
                  d="M147.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L304 32h80c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h80l7.2-14.3C124.6 6.8 135.7 0 147.8 0M32 128h352l-21.2 339c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45zm448 0h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 128h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32m-32 160c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32"
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
                  d="m170.5 51.6-19 28.4h113l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6h-61.7c-2.7 0-5.2 1.3-6.7 3.6zm115-26.6 36.7 55H392c13.3 0 24 10.7 24 24s-10.7 24-24 24h-11.6l-24 324.7c-2.5 33.4-30.3 59.3-63.8 59.3H123.4c-33.5 0-61.3-25.9-63.8-59.3L35.6 128H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h69.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h61.7c18.7 0 36.2 9.4 46.6 24.9zM83.7 128l23.8 321.2c.6 8.4 7.6 14.8 16 14.8h169.1c8.4 0 15.3-6.5 16-14.8L332.3 128zm388.3 0h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H472c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 128h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H472c-13.3 0-24-10.7-24-24s10.7-24 24-24m-24 152c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24"
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
                  d="M164.2 39.5 148.9 64h118.2l-15.3-24.5c-2.9-4.7-8.1-7.5-13.6-7.5h-60.5c-5.5 0-10.6 2.8-13.6 7.5zM279 22.6 304.9 64H400c8.8 0 16 7.2 16 16s-7.2 16-16 16h-18.3l-25.5 356.6c-2.3 33.5-30.2 59.4-63.8 59.4H123.6c-33.6 0-61.4-25.9-63.8-59.4L34.3 96H16C7.2 96 0 88.8 0 80s7.2-16 16-16h95.2L137 22.6A47.98 47.98 0 0 1 177.7 0h60.5c16.6 0 31.9 8.5 40.7 22.6zM66.4 96l25.3 354.3c1.2 16.7 15.1 29.7 31.9 29.7h168.8c16.8 0 30.7-13 31.9-29.7L349.6 96zM464 128h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H464c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 128h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H464c-8.8 0-16-7.2-16-16s7.2-16 16-16m-16 144c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16"
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
                  d="m157.4 27.3-23 36.7h147.2l-23-36.7c-4.4-7-12.1-11.3-20.4-11.3h-60.5c-8.3 0-16 4.3-20.4 11.3zM115.6 64l28.2-45.2C151.1 7.1 163.9 0 177.7 0h60.5c13.8 0 26.6 7.1 33.9 18.8L300.4 64H408c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zm-76.3 48c4.4-.4 8.3 2.9 8.6 7.3l28.3 340c1.8 20.8 19.2 36.7 40 36.7h183.6c20.8 0 38.1-15.9 39.9-36.7l28.3-340c.4-4.4 4.2-7.7 8.6-7.3s7.7 4.2 7.3 8.6l-28.3 340c-2.4 29-26.7 51.4-55.8 51.4H116.2c-29.1 0-53.4-22.3-55.8-51.4L32 120.7c-.4-4.4 2.9-8.3 7.3-8.6zM456 128h176c4.4 0 8 3.6 8 8s-3.6 8-8 8H456c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 128h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H456c-4.4 0-8-3.6-8-8s3.6-8 8-8m-8 136c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8"
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
                  d="M362.6 466.8 384 96H32l21.4 370.8c1.5 25.4 22.5 45.2 47.9 45.2h213.4c25.4 0 46.5-19.8 47.9-45.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="M147.8 0c-12.1 0-23.2 6.8-28.6 17.7L112 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h352c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80l-7.2-14.3C291.4 6.8 280.3 0 268.2 0zM448 160c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H480c-17.7 0-32 14.3-32 32m0 128c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32m32 96c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
