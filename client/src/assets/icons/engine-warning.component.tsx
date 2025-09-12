import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EngineWarningIcon: React.FC<
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
                  d="M400 112c13.3 0 24-10.7 24-24s-10.7-24-24-24H208c-13.3 0-24 10.7-24 24s10.7 24 24 24h72v32H128c-17.7 0-32 14.3-32 32v56H48v-72c0-13.3-10.7-24-24-24S0 146.7 0 160v192c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h48v72c0 17.7 14.3 32 32 32h44.8l32 40c12.1 15.2 30.5 24 50 24H448c35.3 0 64-28.7 64-64V238.8c0-19.4-8.8-37.8-24-50L449.5 158c-11.3-9.1-25.4-14-40-14H328v-32zm144 112v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32m-240-36c11 0 20 9 20 20v88c0 11-9 20-20 20s-20-9-20-20v-88c0-11 9-20 20-20m-24 180a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M424 88c0 13.3-10.7 24-24 24h-72v32h68.6c12.6 0 25 3.7 35.5 10.7l51.4 34.3c17.8 11.9 28.5 31.9 28.5 53.3V384c0 35.3-28.7 64-64 64H254.8c-19.4 0-37.8-8.8-50-24l-32-40H144c-35.3 0-64-28.7-64-64v-40H48v72c0 13.3-10.7 24-24 24S0 365.3 0 352V160c0-13.3 10.7-24 24-24s24 10.7 24 24v72h32v-24c0-35.3 28.7-64 64-64h136v-32h-72c-13.3 0-24-10.7-24-24s10.7-24 24-24h192c13.3 0 24 10.7 24 24M210.3 354l32 40c3 3.8 7.6 6 12.5 6H448c8.8 0 16-7.2 16-16V242.3c0-5.3-2.7-10.3-7.1-13.3l-51.4-34.3c-2.6-1.8-5.7-2.7-8.9-2.7H144c-8.8 0-16 7.2-16 16v112c0 8.8 7.2 16 16 16h28.8c14.6 0 28.4 6.6 37.5 18M544 224c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32zm-240-12c11 0 20 9 20 20v56c0 11-9 20-20 20s-20-9-20-20v-56c0-11 9-20 20-20m-24 140a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M416 80c0 8.8-7.2 16-16 16h-80v32h76.6c12.6 0 25 3.7 35.5 10.7l51.4 34.3c17.8 11.9 28.5 31.9 28.5 53.3V384c0 35.3-28.7 64-64 64H254.8c-19.4 0-37.8-8.8-50-24l-32-40H144c-26.5 0-48-21.5-48-48v-64H32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V160c0-8.8 7.2-16 16-16s16 7.2 16 16v80h64v-64c0-26.5 21.5-48 48-48h144V96h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h192c8.8 0 16 7.2 16 16m-112 80H144c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h28.8c9.7 0 18.9 4.4 25 12l32 40c6.1 7.6 15.3 12 25 12H448c17.7 0 32-14.3 32-32V226.3c0-10.7-5.3-20.7-14.2-26.6l-51.4-34.3c-5.3-3.5-11.4-5.4-17.8-5.4H304m304 64h-32v192h32zm-32-32h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32m-272 0c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16m-24 160a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M408 80c4.4 0 8-3.6 8-8s-3.6-8-8-8H200c-4.4 0-8 3.6-8 8s3.6 8 8 8h96v48H112c-26.5 0-48 21.5-48 48v72H16v-80c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8v-80h48v72c0 26.5 21.5 48 48 48h67.2l59 49.2c11.5 9.6 26 14.8 41 14.8H448c35.3 0 64-28.7 64-64V226.3c0-21.4-10.7-41.4-28.5-53.3l-51.4-34.3c-10.5-7-22.9-10.7-35.5-10.7H312V80zM80 264v-88c0-17.7 14.3-32 32-32h284.6c9.5 0 18.7 2.8 26.6 8.1l51.4 34.3c13.4 8.9 21.4 23.9 21.4 39.9V384c0 26.5-21.5 48-48 48H279.2c-11.2 0-22.1-3.9-30.7-11.1l-59-49.2c-2.9-2.4-6.5-3.7-10.2-3.7H112c-17.7 0-32-14.3-32-32zm496-56h32c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16m-32 16v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32M320 352a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-8-168c0-4.4-3.6-8-8-8s-8 3.6-8 8v120c0 4.4 3.6 8 8 8s8-3.6 8-8z"
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
                  d="M424 88c0-13.3-10.7-24-24-24H208c-13.3 0-24 10.7-24 24s10.7 24 24 24h72v32h48v-32h72c13.3 0 24-10.7 24-24M24 136c-13.3 0-24 10.7-24 24v192c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h48v-48H48v-72c0-13.3-10.7-24-24-24m552 56c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 144c-17.7 0-32 14.3-32 32v176c0 17.7 14.3 32 32 32h44.8l32 40c12.1 15.2 30.5 24 50 24H448c35.3 0 64-28.7 64-64V238.8c0-19.4-8.8-37.8-24-50L449.5 158c-11.3-9.1-25.4-14-40-14H128m196 64v88c0 11-9 20-20 20s-20-9-20-20v-88c0-11 9-20 20-20s20 9 20 20m-20 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
