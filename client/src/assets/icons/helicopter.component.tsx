import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HelicopterIcon: React.FC<
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
                  d="M128 32c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H384v64h32c88.4 0 160 71.6 160 160v64c0 17.7-14.3 32-32 32H320c-20.1 0-39.1-9.5-51.2-25.6l-71.4-95.2c-3.5-4.7-8.3-8.3-13.7-10.5L47.2 198.1c-9.5-3.8-16.7-12-19.2-22L5 83.9C2.4 73.8 10.1 64 20.5 64H48c10.1 0 19.6 4.7 25.6 12.8L112 128h208V64H160c-17.7 0-32-14.3-32-32m256 288h128v-32c0-53-43-96-96-96h-32zm246.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-3.9 3.9c-24 24-56.6 37.5-90.5 37.5H256c-17.7 0-32-14.3-32-32s14.3-32 32-32h280.2c17 0 33.3-6.7 45.3-18.7l3.9-3.9c12.5-12.5 32.8-12.5 45.3 0z"
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
                  d="M152 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h184v80H137.9L86.7 76.8C78.5 68.6 67.4 64 55.9 64c-27.5 0-48.1 25.2-42.7 52.1l16.1 80.3c3.6 17.8 15.6 32.8 32.2 40.2l124.8 55.5 77.4 77.4c19.5 19.5 46 30.5 73.5 30.5H504c39.8 0 72-32.2 72-72v-48c0-83.9-68.1-152-152-152h-40V48h168c13.3 0 24-10.7 24-24S565.3 0 552 0zm-24 176h208v176c-14.4-.3-28.2-6.2-38.5-16.4L217 255c-2.1-2.1-4.5-3.8-7.2-5L80.9 192.8c-2.4-1.1-4.1-3.2-4.6-5.7L63.1 121l47.9 48c4.5 4.5 10.6 7 17 7m376 176H384V176h40c57.4 0 104 46.6 104 104v48c0 13.3-10.7 24-24 24m127 122.7c10.4-8.3 12-23.4 3.7-33.7s-23.4-12-33.7-3.8l-26.9 21.5c-4.3 3.4-9.5 5.3-15 5.3H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h311.2c16.3 0 32.2-5.6 45-15.8z"
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
                  d="M160 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h192v96H144l-33.6-44.8C101.3 71.1 87.1 64 72 64H44.8c-21 0-36.3 19.9-30.9 40.2l22.7 85.1c3.7 14 13.6 25.6 26.9 31.5l124.6 55.4q2.7 1.2 4.8 3.3l90.4 90.4c9 9 21.3 14.1 34 14.1h205.3c30.9 0 56-25.1 56-56v-56c0-79.5-64.5-144-144-144H384V32h192c8.8 0 16-7.2 16-16s-7.2-16-16-16zM72 96c5 0 9.8 2.4 12.8 6.4l38.4 51.2c3 4 7.8 6.4 12.8 6.4h216v192h-34.8c-4.3 0-8.3-1.7-11.3-4.7l-90.4-90.4c-4.2-4.2-9.1-7.5-14.4-9.9L76.5 191.6c-4.4-2-7.7-5.8-9-10.5L44.8 96zm312.4 256h-.4V160h48c61.9 0 112 50.1 112 112v56c0 13.2-10.8 24-24 24H384.2zm250.9 123.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-8.6 8.6c-12 12-28.3 18.7-45.3 18.7H240c-8.8 0-16 7.2-16 16s7.2 16 16 16h318.9c25.5 0 49.9-10.1 67.9-28.1l8.6-8.6z"
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
                  d="M136 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h216v128H132.5L96.2 83.4C89 71.4 75.9 64 61.9 64H36.5C20.9 64 9.4 78.7 13.2 93.8l23.2 93c3 11.9 11.3 21.9 22.6 26.9l123.3 54.8c3.2 1.4 6 3.5 8.3 6.1l97.8 111.8C296 395 307 400 318.5 400h210.6c22.1 0 40-17.9 40-40v-80c0-75.1-60.9-136-136-136H368V16h200c4.4 0 8-3.6 8-8s-3.6-8-8-8zM36.5 80h25.4c8.4 0 16.2 4.4 20.6 11.7l38.7 64.5c1.4 2.4 4 3.9 6.9 3.9H352V384h-33.5c-6.9 0-13.5-3-18.1-8.2L202.7 264c-3.8-4.4-8.6-7.9-13.9-10.2L65.5 199c-6.8-3-11.7-8.9-13.5-16.1l-23.2-93c-1.3-5 2.6-9.9 7.8-9.9zm331.7 304h-.2V160h72c66.3 0 120 53.7 120 120v80c0 13.2-10.8 24-24 24H368.6zm269.9 77.1c2.8-3.4 2.4-8.4-1-11.3s-8.4-2.4-11.3 1l-20.8 25c-10.6 12.8-26.4 20.2-43 20.2H232c-4.4 0-8 3.6-8 8s3.6 8 8 8h330c21.4 0 41.6-9.5 55.3-25.9z"
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
                  d="M128 32c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H384v64h-64V64H160c-17.7 0-32-14.3-32-32m502.6 393.4c12.5 12.5 12.5 32.8 0 45.3l-3.9 3.9c-24 24-56.6 37.5-90.5 37.5H256c-17.7 0-32-14.3-32-32s14.3-32 32-32h280.2c17 0 33.3-6.7 45.3-18.7l3.9-3.9c12.5-12.5 32.8-12.5 45.3 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 384h-64c-20.1 0-39.1-9.5-51.2-25.6l-71.4-95.2c-3.5-4.7-8.3-8.3-13.7-10.5L47.2 198.1c-9.5-3.8-16.7-12-19.2-22L5 83.9C2.4 73.8 10.1 64 20.5 64H48c10.1 0 19.6 4.7 25.6 12.8L112 128h304c88.4 0 160 71.6 160 160v64c0 17.7-14.3 32-32 32zm0-64h128v-32c0-53-43-96-96-96h-32z"
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
