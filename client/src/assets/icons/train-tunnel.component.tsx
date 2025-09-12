import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrainTunnelIcon: React.FC<
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
                  d="M256 0C114.6 0 0 114.6 0 256v192c0 35.3 28.7 64 64 64h41.4l64.3-64.3c-32.4-3.2-57.7-30.5-57.7-63.7V192c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v192c0 33.2-25.3 60.5-57.7 63.7l64.3 64.3H448c35.3 0 64-28.7 64-64V256C512 114.6 397.4 0 256 0m105.4 512-64-64h-82.8l-64 64zM184 192c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24zm104 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M48 256c0-114.9 93.1-208 208-208s208 93.1 208 208v232c0 13.3 10.7 24 24 24s24-10.7 24-24V256C512 114.6 397.4 0 256 0S0 114.6 0 256v232c0 13.3 10.7 24 24 24s24-10.7 24-24zm304-48v48H160v-48c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32M160 368v-64h192v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32m32-240c-44.2 0-80 35.8-80 80v160c0 27.7 14.1 52.2 35.5 66.5L111 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h108.2l57 57c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-36.5-36.5c21.4-14.3 35.5-38.8 35.5-66.5V208c0-44.2-35.8-80-80-80zm96 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224v240c0 8.8 7.2 16 16 16s16-7.2 16-16V256C512 114.6 397.4 0 256 0S0 114.6 0 256v240c0 8.8 7.2 16 16 16s16-7.2 16-16zm336-48v48H144v-48c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48M144 368v-80h224v80c0 26.5-21.5 48-48 48H192c-26.5 0-48-21.5-48-48m16 73.4-43.3 43.3c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l59.3-59.3h114.8l59.3 59.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L352 441.4c28.3-12.3 48-40.5 48-73.4V208c0-44.2-35.8-80-80-80H192c-44.2 0-80 35.8-80 80v160c0 32.8 19.8 61 48 73.4M280 352a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M256 16C123.5 16 16 123.5 16 256v248c0 4.4-3.6 8-8 8s-8-3.6-8-8V256C0 114.6 114.6 0 256 0s256 114.6 256 256v248c0 4.4-3.6 8-8 8s-8-3.6-8-8V256c0-132.5-107.5-240-240-240m-64 128c-35.3 0-64 28.7-64 64v160c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V208c0-35.3-28.7-64-64-64zm0-16h128c44.2 0 80 35.8 80 80v160c0 38.2-26.8 70.2-62.6 78.1l52.2 52.2c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L316.7 448H195.3l-61.7 61.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l52.2-52.2c-35.7-8-62.5-40-62.5-78.2V208c0-44.2 35.8-80 80-80m80 248a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-32-168c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32z"
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
                  d="M256 0C114.6 0 0 114.6 0 256v192c0 35.3 28.7 64 64 64h41.4l64.3-64.3c-32.4-3.2-57.7-30.5-57.7-63.7V192c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v192c0 33.2-25.3 60.5-57.7 63.7l64.3 64.3H448c35.3 0 64-28.7 64-64V256C512 114.6 397.4 0 256 0m105.4 512-64-64h-82.8l-64 64zM160 216v80c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112 192c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H176c-35.3 0-64-28.7-64-64zm48 24v80c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24m96 200a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
