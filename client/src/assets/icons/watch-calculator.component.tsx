import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WatchCalculatorIcon: React.FC<
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
                  d="M64 48h256c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48m16 32c-44.2 0-80 35.8-80 80v192c0 44.2 35.8 80 80 80h224c44.2 0 80-35.8 80-80V160c0-44.2-35.8-80-80-80zm0 64h224c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m32 128a24 24 0 1 1-48 0 24 24 0 1 1 48 0m80 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0M88 384a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m80 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48M112 512h160c26.5 0 48-21.5 48-48H64c0 26.5 21.5 48 48 48"
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
                  d="M112.3 0C85.6 0 64 21.6 64 48.3v17.3C27.5 73 0 105.3 0 144v224c0 38.7 27.5 71 64 78.4V464c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-17.6c36.5-7.4 64-39.7 64-78.4V144c0-38.7-27.5-71-64-78.4V48.3C320 21.6 298.4 0 271.7 0zM304 112c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zm-200 48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h176c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM88 272a24 24 0 1 0 48 0 24 24 0 1 0-48 0m104-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48m56 24a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-136 40a24 24 0 1 0 0 48 24 24 0 1 0 0-48m56 24a24 24 0 1 0 48 0 24 24 0 1 0-48 0m104-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48"
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
                  d="M96 48v16h192V48c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16M64 65.6V48c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v17.6c36.5 7.4 64 39.7 64 78.4v224c0 38.7-27.5 71-64 78.4V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48v-17.6C27.5 439 0 406.7 0 368V144c0-38.7 27.5-71 64-78.4M96 464c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-16H96zM80 96c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm16 96h192v-32H96zm-32-48c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm64 136a24 24 0 1 1-48 0 24 24 0 1 1 48 0m64 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48m112-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0M104 384a24 24 0 1 1 0-48 24 24 0 1 1 0 48m112-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m64 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48"
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
                  d="M80 40v24h224V40c0-13.3-10.7-24-24-24H104c-13.3 0-24 10.7-24 24M64 65.6V40c0-22.1 17.9-40 40-40h176c22.1 0 40 17.9 40 40v25.6c36.5 7.4 64 39.7 64 78.4v224c0 38.7-27.5 71-64 78.4V472c0 22.1-17.9 40-40 40H104c-22.1 0-40-17.9-40-40v-25.6C27.5 439 0 406.7 0 368V144c0-38.7 27.5-71 64-78.4M80 472c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24v-24H80zm0-40h224c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H80c-35.3 0-64 28.7-64 64v224c0 35.3 28.6 64 63.9 64zm0-288v64h224v-64zm-16 0c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm72 136a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32m88 48a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-16-32a16 16 0 1 0 32 0 16 16 0 1 0-32 0m136 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32M104 392a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-16-32a16 16 0 1 0 32 0 16 16 0 1 0-32 0m136 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32m88 48a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-16-32a16 16 0 1 0 32 0 16 16 0 1 0-32 0"
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
                  d="M80 64C35.8 64 0 99.8 0 144v224c0 44.2 35.8 80 80 80h224c44.2 0 80-35.8 80-80V144c0-44.2-35.8-80-80-80zm0 64h224c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m32 144a24 24 0 1 1-48 0 24 24 0 1 1 48 0m80 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0M88 384a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m80 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112.3 0C85.6 0 64 21.6 64 48.3v17.3c5.2-1 10.5-1.6 16-1.6h224c5.5 0 10.8.6 16 1.6V48.3C320 21.6 298.4 0 271.7 0zM64 464c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-17.6c-5.2 1-10.5 1.6-16 1.6H80c-5.5 0-10.8-.6-16-1.6zm0-192a24 24 0 1 0 48 0 24 24 0 1 0-48 0m104 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0m128-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48M64 360a24 24 0 1 0 48 0 24 24 0 1 0-48 0m128-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48m80 24a24 24 0 1 0 48 0 24 24 0 1 0-48 0"
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
