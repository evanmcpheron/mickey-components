import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SeatAirlineIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v111.6c0 15.2 3.1 30.2 9.1 44.1L82 357.8c15.1 35.3 49.8 58.2 88.2 58.2H216v48h-96c-13.3 0-24 10.7-24 24s10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96v-48h96c15.1 0 29.3-7.1 38.4-19.2l43.2-57.6c7.3-9.7 8.4-22.7 3-33.5S428.1 288 416 288H121.7L108 256h212c17.7 0 32-14.3 32-32s-14.3-32-32-32H80.5l-12.6-29.5c-2.6-6-3.9-12.4-3.9-18.9z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24v118.9c0 14.7 3.1 29.2 9.1 42.5l80 178.6c14.2 31.6 45.6 52 80.3 52H216v48h-96c-13.3 0-24 10.7-24 24s10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96v-48h88c29.1 0 55.3-17.5 66.5-44.3l27.7-66.5c3.1-7.4 2.3-15.9-2.2-22.5S432 272 424 272H100.5l-14.3-32H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H64.6l-11.7-26.2c-3.2-7.2-4.9-15-4.9-22.9zm84.9 320.4L122 320h266l-13.8 33.2c-3.7 8.9-12.5 14.8-22.2 14.8H169.4c-15.8 0-30.1-9.3-36.5-23.6"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 16c0-8.8-7.2-16-16-16S0 7.2 0 16v126.3c0 14 3.1 27.9 9 40.6l87.3 187c13.1 28.1 41.4 46.1 72.5 46.1H224v64H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16-7.2 16-16s-7.2-16-16-16H256v-64h102.2c27 0 51.2-17 60.3-42.5l28.6-80.1c1.8-4.9 1-10.3-2-14.6s-7.9-6.8-13.1-6.8H85.9l-22.4-48H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H48.6L38 169.3c-4-8.5-6-17.7-6-27.1zm208 368h-71.2c-18.6 0-35.6-10.8-43.5-27.7L100.9 304h308.4l-21 58.8c-4.6 12.7-16.6 21.2-30.1 21.2z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8v134.8c0 12.5 2.7 24.8 7.8 36.2l87.9 194.6c11.6 25.8 37.3 42.4 65.6 42.4H232v80H104c-4.4 0-8 3.6-8 8s3.6 8 8 8h272c4.4 0 8-3.6 8-8s-3.6-8-8-8H248v-80h116.7c24.5 0 46.1-15.9 53.5-39.3l29.5-94.3c.8-2.4.3-5.1-1.2-7.1s-3.9-3.3-6.4-3.3H72c-1.5 0-2.9.4-4.1 1.1L38.5 208H344c4.4 0 8-3.6 8-8s-3.6-8-8-8H31.2l-8.9-19.6c-4.1-9.3-6.3-19.4-6.3-29.6zm94.3 359-35.7-79h354.5l-26.2 83.9c-5.2 16.7-20.7 28.1-38.2 28.1H161.3c-22 0-42-12.9-51-33"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M216 416v48h-96c-13.3 0-24 10.7-24 24s10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96v-48zM108 256h212c17.7 0 32-14.3 32-32s-14.3-32-32-32H80.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 0c17.7 0 32 14.3 32 32v111.6c0 6.5 1.3 12.9 3.9 18.9L121.7 288H416c12.1 0 23.2 6.8 28.6 17.7s4.3 23.8-3 33.5l-43.2 57.6c-9.1 12.1-23.3 19.2-38.4 19.2H170.2c-38.4 0-73.1-22.9-88.2-58.2L9.1 187.7c-6-13.9-9.1-29-9.1-44.1V32C0 14.3 14.3 0 32 0"
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
