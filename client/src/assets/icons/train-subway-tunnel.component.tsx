import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrainSubwayTunnelIcon: React.FC<
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
                  d="M256 0C114.6 0 0 114.6 0 256v192c0 35.3 28.7 64 64 64h41.4l64.3-64.3c-32.4-3.2-57.7-30.5-57.7-63.7V192c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v192c0 33.2-25.3 60.5-57.7 63.7l64.3 64.3H448c35.3 0 64-28.7 64-64V256C512 114.6 397.4 0 256 0m105.4 512-64-64h-82.8l-64 64zM184 192c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-32m88 24v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24m-88 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48m168-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M256 48C141.1 48 48 141.1 48 256v232c0 13.3-10.7 24-24 24S0 501.3 0 488V256C0 114.6 114.6 0 256 0s256 114.6 256 256v232c0 13.3-10.7 24-24 24s-24-10.7-24-24V256c0-114.9-93.1-208-208-208m24 128v80h72v-48c0-17.7-14.3-32-32-32zm-48 0h-40c-17.7 0-32 14.3-32 32v48h72zm-72 128v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64zm-48-96c0-44.2 35.8-80 80-80h128c44.2 0 80 35.8 80 80v160c0 27.7-14.1 52.2-35.5 66.5L401 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-57-57H201.9l-57 57c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l36.5-36.5C126.1 420.2 112 395.7 112 368zm64 144a24 24 0 1 1 48 0 24 24 0 1 1-48 0m136-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224v240c0 8.8 7.2 16 16 16s16-7.2 16-16V256C512 114.6 397.4 0 256 0S0 114.6 0 256v240c0 8.8 7.2 16 16 16s16-7.2 16-16zm336-48v48h-96v-96h48c26.5 0 48 21.5 48 48m-128 80h128v80c0 26.5-21.5 48-48 48H192c-26.5 0-48-21.5-48-48v-80zm0-128v96h-96v-48c0-26.5 21.5-48 48-48zm-48-32c-44.2 0-80 35.8-80 80v160c0 32.8 19.8 61 48 73.4l-43.3 43.3c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l59.3-59.3h114.8l59.3 59.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L352 441.4c28.3-12.3 48-40.5 48-73.4V208c0-44.2-35.8-80-80-80zm8 256a24 24 0 1 0 0-48 24 24 0 1 0 0 48m136-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M16 256C16 123.5 123.5 16 256 16s240 107.5 240 240v248c0 4.4 3.6 8 8 8s8-3.6 8-8V256C512 114.6 397.4 0 256 0S0 114.6 0 256v248c0 4.4 3.6 8 8 8s8-3.6 8-8zm176-112h128c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V208c0-35.3 28.7-64 64-64m-80 64v160c0 38.2 26.8 70.2 62.6 78.1l-52.2 52.2c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l61.6-61.6h121.4l61.7 61.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-52.2-52.2c35.8-7.9 62.6-39.9 62.6-78.1V208c0-44.2-35.8-80-80-80H192c-44.2 0-80 35.8-80 80m64 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m176-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0M248 208v96h-56c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zm16 0h56c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-56zm-72-16c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"
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
                  d="M256 0C114.6 0 0 114.6 0 256v192c0 35.3 28.7 64 64 64h41.4l64.3-64.3c-32.4-3.2-57.7-30.5-57.7-63.7V192c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v192c0 33.2-25.3 60.5-57.7 63.7l64.3 64.3H448c35.3 0 64-28.7 64-64V256C512 114.6 397.4 0 256 0m105.4 512-64-64h-82.8l-64 64zM184 192c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-32m88 24v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112 192c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H176c-35.3 0-64-28.7-64-64zm48 24v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24m136-24c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-32m-88 184a24 24 0 1 0-48 0 24 24 0 1 0 48 0m120 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
