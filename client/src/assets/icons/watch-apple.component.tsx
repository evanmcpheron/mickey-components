import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WatchAppleIcon: React.FC<
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
                  d="M64 48h256c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48m16 32c-44.2 0-80 35.8-80 80v192c0 44.2 35.8 80 80 80h224c44.2 0 80-35.8 80-80V160c0-44.2-35.8-80-80-80zm112 133.3a42.7 42.7 0 1 1 0 85.3 42.7 42.7 0 1 1 0-85.3M213.3 352a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-74.7-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m74.7-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-74.7-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M112 512h160c26.5 0 48-21.5 48-48H64c0 26.5 21.5 48 48 48"
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
                  d="M112.3 0C85.6 0 64 21.6 64 48.3v17.3C27.5 73 0 105.3 0 144v224c0 38.7 27.5 71 64 78.4V464c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-17.6c36.5-7.4 64-39.7 64-78.4V144c0-38.7-27.5-71-64-78.4V48.3C320 21.6 298.4 0 271.7 0zM304 112c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zM192 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m64 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-104 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m104-168a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-104 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-8 48a24 24 0 1 0-48 0 24 24 0 1 0 48 0m120 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M96 48v16h192V48c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16M64 65.6V48c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v17.6c36.5 7.4 64 39.7 64 78.4v224c0 38.7-27.5 71-64 78.4V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48v-17.6C27.5 439 0 406.7 0 368V144c0-38.7 27.5-71 64-78.4M96 464c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-16H96zM80 96c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm112 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48m16 96a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-56-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m56-120a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-56-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-56 96a24 24 0 1 1 48 0 24 24 0 1 1-48 0m168-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M80 40v24h224V40c0-13.3-10.7-24-24-24H104c-13.3 0-24 10.7-24 24M64 65.6V40c0-22.1 17.9-40 40-40h176c22.1 0 40 17.9 40 40v25.6c36.5 7.4 64 39.7 64 78.4v224c0 38.7-27.5 71-64 78.4V472c0 22.1-17.9 40-40 40H104c-22.1 0-40-17.9-40-40v-25.6C27.5 439 0 406.7 0 368V144c0-38.7 27.5-71 64-78.4M304 448H80v24c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24zm64-80V144c0-35.3-28.7-64-64-64H80c-35.3 0-64 28.7-64 64v224c0 35.3 28.6 64 63.9 64H304c35.3 0 64-28.7 64-64M112 256a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m16-160a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128 208a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m16-160a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-16 120a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-64a40 40 0 1 1 0 80 40 40 0 1 1 0-80m112 40a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M80 64C35.8 64 0 99.8 0 144v224c0 44.2 35.8 80 80 80h224c44.2 0 80-35.8 80-80V144c0-44.2-35.8-80-80-80zm112 149.3a42.7 42.7 0 1 1 0 85.3 42.7 42.7 0 1 1 0-85.3M213.3 352a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-74.7-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m74.7-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-74.7-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112.3 0C85.6 0 64 21.6 64 48.3v17.3c5.2-1 10.5-1.6 16-1.6h224c5.5 0 10.8.6 16 1.6V48.3C320 21.6 298.4 0 271.7 0zM64 464c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-17.6c-5.2 1-10.5 1.6-16 1.6H80c-5.5 0-10.8-.6-16-1.6zm181.3-80a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
