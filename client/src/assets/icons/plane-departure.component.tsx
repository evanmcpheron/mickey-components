import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PlaneDepartureIcon: React.FC<
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
                  d="M381 114.9 186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240l-58.2-25.9c-8.7-3.9-18.8-3.7-27.3.6l-32.2 16.1c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2h137.7c5 0 9.9-1.2 14.3-3.4l272.9-136.4c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48h-57.4c-20.2 0-40.2 4.8-58.2 14zM0 480c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32"
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
                  d="M154.5 87.6c9.2-3.8 19.4-4.1 28.8-.8l185.7 66c6.3 2.2 13.2 1.7 19.2-1.4l83.1-43.5c14.9-7.8 31.4-11.9 48.3-11.9h50.8c11.2 0 18.6 11.6 13.9 21.8-17.2 36.8-46 67-81.9 85.8L251.8 335.1c-1.1.6-2.4.9-3.7.9H126.7c-2.3 0-4.6-1-6.1-2.8l-66.4-77.5 23-11.5c2.1-1.1 4.6-1.1 6.8-.2l58.2 25.9c6.7 3 14.4 2.7 20.9-.7l88.1-46.2c7.6-4 12.5-11.7 12.8-20.3s-3.9-16.7-11.2-21.3l-128.8-81 30.5-12.7zm44.8-46a88.05 88.05 0 0 0-63.3 1.7L91.3 62c-29.9 12.5-33.4 53.5-5.9 70.8L192 199.9l-40.9 21.4-47.6-21.2c-15.3-6.8-32.8-6.4-47.8 1.1L66.1 222l-10.3-20.7-32.2 16.1C.3 229-5.8 259.4 11.1 279.2l73.1 85.3 17.6-15.1-17.6 15c10.6 12.4 26.2 19.6 42.5 19.6h121.4c9.1 0 18-2.2 26-6.4l250.4-131.5c45.3-23.8 81.5-61.7 103.1-108 19.6-42-11-90.1-57.4-90.1h-50.7c-24.6 0-48.8 6-70.5 17.4L375.1 104zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h592c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M158.7 105.4c11.5-5.2 24.5-5.7 36.4-1.4L375 170c4.2 1.5 8.8 1.3 12.8-.8l88-45c15.8-8.1 33.3-12.3 51-12.3h61c12.7 0 21.1 13.1 15.8 24.6-15.4 33.4-41.7 60.5-74.6 77L255.6 350.3c-2.2 1.1-4.7 1.7-7.2 1.7H109.3c-4.2 0-8.3-1.7-11.3-4.7l-63.9-63.8 23.7-13.6c4.4-2.5 9.8-2.8 14.4-.7l57.2 25.4c4.4 2 9.5 1.8 13.8-.4l115-58.8c5.1-2.6 8.5-7.8 8.7-13.6s-2.6-11.2-7.5-14.3l-137.5-85.3-6.6-14.6 6.6 14.6 36.9-16.8zM206.1 74c-19.7-7.2-41.5-6.4-60.6 2.3l-36.9 16.8c-23.3 10.6-25.4 42.8-3.6 56.3l113.5 70.5-83 42.4L85.3 240l-6.1 13.7 6.1-13.7c-14-6.2-30-5.4-43.3 2.2l-23.8 13.5c-18.3 10.5-21.7 35.5-6.8 50.4l63.8 63.8c9 9 21.2 14.1 33.9 14.1h139.3c7.5 0 14.8-1.7 21.5-5.1l273.4-136.7c39.4-19.7 70.9-52.2 89.3-92.2 15.1-32.7-8.8-70-44.8-70h-61c-22.8 0-45.2 5.4-65.5 15.8l-81.8 41.8zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16h608c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="m387.5 134.4-207-77.6c-12.5-4.7-26.4-4-38.3 2L96.3 81.7l154.9 99.6c4.8 3.1 7.6 8.6 7.3 14.3s-3.7 10.9-8.8 13.4l-106.5 53.3c-4.7 2.4-10.3 2.2-14.9-.3L71 230.2c-4.6-2.6-10.2-2.7-14.9-.3l-30.6 15.2 73.1 85.3c3 3.5 7.5 5.6 12.1 5.6h137.7c2.5 0 4.9-.6 7.2-1.7l274.7-137.4c41.7-20.9 74-56.7 90.4-100.4 5.5-14.7-5.9-30.1-21.5-29.2l-52 3.1c-15.1.9-29.9 4.8-43.5 11.6l-103.4 51.7c-4 2-8.6 2.2-12.8.7M136 248l89.9-44.9 16.6-8.3-15.7-10.1L87.6 95.2C77.2 88.5 78 73 89.1 67.4L135 44.5c15.9-8 34.4-8.9 51.1-2.7l207 77.6 103.4-51.7c15.5-7.7 32.4-12.2 49.7-13.2l52-3.1c27.2-1.6 47 25.3 37.5 50.8-17.8 47.4-52.9 86.4-98.2 109.1L262.8 348.6c-4.4 2.2-9.3 3.4-14.3 3.4H110.7c-9.3 0-18.2-4.1-24.3-11.2l-73.1-85.2c-6.8-7.9-4.3-20.1 5-24.7l30.6-15.3c9.4-4.7 20.6-4.5 29.9.6zM8 496h624c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M0 480c0-17.7 14.3-32 32-32h576c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M381 114.9 186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240l-58.2-25.9c-8.7-3.9-18.8-3.7-27.3.6l-32.2 16.1c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2h137.7c5 0 9.9-1.2 14.3-3.4l272.9-136.4c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48h-57.4c-20.2 0-40.2 4.8-58.2 14z"
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
