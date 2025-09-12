import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SkiBootSkiIcon: React.FC<
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
                  d="M390.3.6c17.3 3.5 28.6 20.3 25.1 37.7l-6.4 32-11.6 57.7H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h55l-9.6 48H320c-8.8 0-16 7.2-16 16s7.2 16 16 16h62.2l78.7 34.7c11.6 5.1 19.1 16.6 19.1 29.3v80c0 17.7-14.3 32-32 32H120c-9.6 0-18.7-4.3-24.7-11.7s-8.5-17.2-6.6-26.6l24.7-123.6c2.9-.5 6.1-1.2 9.5-2.1 15.6-3.9 36.4-11.6 58.3-26.9 42.4-29.7 86.4-86.4 104.5-193.1h65.7l1.3-6.3C356.1 8.4 372.9-2.8 390.3.6M162.8 198.9c-15.8 11-30.8 17.2-42.6 20.7l32.4-161.9c3-15 16.1-25.7 31.4-25.7h69.2c-17.4 96-56.7 143.3-90.4 166.9M640 416c0 53-43 96-96 96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h512c17.7 0 32-14.3 32-32s14.3-32 32-32 32 14.3 32 32"
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
                  d="M415.6 28.5c2.5-13-6-25.6-19-28.1s-25.6 6-28.1 19L366 32H176c-11.3 0-21.1 7.9-23.5 19L88.8 348.3c-7.5 34.9 19.1 67.7 54.8 67.7H424c30.9 0 56-25.1 56-56v-52.9c0-20.6-11.3-39.5-29.4-49.3l-71.7-38.6zM275 80h81.8l-15.4 80H304c-8.8 0-16 7.2-16 16s7.2 16 16 16h31.3l-6.2 32H288c-8.8 0-16 7.2-16 16s7.2 16 16 16h57.9l81.8 44.1c2.6 1.4 4.2 4.1 4.2 7V360c0 4.4-3.6 8-8 8H143.6c-5.1 0-8.9-4.7-7.8-9.7l26-121.3C202 215.7 249.2 171.2 275 80m-33.4 0c-17.9 57.7-44.8 92-70.3 112.5L195.4 80zM640 408c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 30.9-25.1 56-56 56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h512c57.4 0 104-46.6 104-104"
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
                  d="M415.6 19.4c1.9-8.6-3.7-17.1-12.3-19s-17.1 3.7-19 12.3L380.2 32H168c-7.6 0-14.2 5.3-15.7 12.8L88.2 358.4c-6.1 29.8 16.7 57.6 47 57.6H432c26.5 0 48-21.5 48-48v-52.2c0-18.2-10.3-34.8-26.5-42.9l-83.2-41.6zM279.2 64h94.2l-20.6 96H304c-8.8 0-16 7.2-16 16s7.2 16 16 16h41.9l-6.9 32h-51c-8.8 0-16 7.2-16 16s7.2 16 16 16h60.2l90.9 45.5c5.4 2.7 8.8 8.3 8.8 14.3V368c0 8.8-7.2 16-16 16H135.2c-10.1 0-17.7-9.3-15.7-19.2l25.2-123.3c43.6-20 107.6-67.2 134.4-177.5zm-33 0c-20.3 76-60 115.7-93 136.6L181.1 64zM640 416c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 35.3-28.7 64-64 64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h528c53 0 96-43 96-96"
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
                  d="M407.8 9.7c.9-4.3-1.8-8.6-6.1-9.5s-8.6 1.8-9.5 6.1L386.7 32H179.8c-15.3 0-28.5 10.8-31.4 25.9l-57 291.4c-6.8 34.6 19.7 66.8 55 66.8H440c22.1 0 40-17.9 40-40v-67.7c0-15.5-9-29.7-23.1-36.2l-95.8-44.7zM279 48h104.2l-24 112H296c-4.4 0-8 3.6-8 8s3.6 8 8 8h59.8l-10.3 48H280c-4.4 0-8 3.6-8 8s3.6 8 8 8h70.2l99.9 46.6c8.4 3.9 13.8 12.4 13.8 21.7V376c0 13.3-10.7 24-24 24H146.3c-25.2 0-44.1-23-39.3-47.7l20.6-105.5c1.2 0 2.4-.2 3.6-.7 46.9-20.8 119.1-72.1 147.6-197.5 0-.2.1-.4.1-.6zm-16.4 0C236.3 159.8 174 207.8 131.3 228.5l32.8-167.6c1.5-7.5 8.1-12.9 15.7-12.9zM640 424c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 39.8-32.2 72-72 72H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h544c48.6 0 88-39.4 88-88"
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
                  d="M269.5 32H184c-15.3 0-28.4 10.8-31.4 25.7L116.8 237c39.8-9.3 125.1-47.4 152.7-205M640 416c0-17.7-14.3-32-32-32s-32 14.3-32 32-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c53 0 96-43 96-96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M415.4 38.3C418.9 21 407.6 4.1 390.3.6s-34.2 7.8-37.7 25.1l-1.2 6.3h-81.9c-27.6 157.6-113 195.8-152.7 205L88.6 377.7c-1.9 9.4.6 19.1 6.6 26.6s15.2 11.7 24.7 11.7H448c17.7 0 32-14.3 32-32v-80c0-12.7-7.5-24.2-19.1-29.3L382.2 240H320c-8.8 0-16-7.2-16-16s7.2-16 16-16h61.4l9.6-48h-55c-8.8 0-16-7.2-16-16s7.2-16 16-16h61.4L409 70.3z"
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
