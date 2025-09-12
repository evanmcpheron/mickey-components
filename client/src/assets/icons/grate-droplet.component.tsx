import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GrateDropletIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v66.2c-15.1 4.3-28.2 14.6-35.8 28.8l-75.3 141.2A144.6 144.6 0 0 0 320 400c0 29.6 8.9 57.1 24.2 80H64c-35.3 0-64-28.7-64-64V96m96 0H64v128h32zM64 416h32V288H64zm128 0V288h-32v128zm96 0V288h-32v128zm96-320h-32v128h32zm-128 0v128h32V96zm-96 0v128h32V96zm280.5 110.1c4.6-8.7 13.7-14.1 23.5-14.1s18.9 5.4 23.5 14.1l75.3 141.2c8.7 16.2 13.2 34.3 13.2 52.7 0 61.9-50.1 112-112 112s-112-50.1-112-112c0-18.4 4.5-36.5 13.2-52.7z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 88c0-30.9 25.1-56 56-56h336c30.9 0 56 25.1 56 56v74.2c-15.1 4.3-28.2 14.6-35.8 28.8L400 214V88c0-4.4-3.6-8-8-8h-48v152h46.4l-53.5 100.2A144.6 144.6 0 0 0 320 400c0 29.6 8.9 57.1 24.2 80H56c-30.9 0-56-25.1-56-56V88m56-8c-4.4 0-8 3.6-8 8v144h56V80zm-8 344c0 4.4 3.6 8 8 8h48V280H48zm152 8V280h-48v152zm96 0V280h-48v152zM248 80v152h48V80zm-48 152V80h-48v152zm240.5-25.9c4.6-8.7 13.7-14.1 23.5-14.1s18.9 5.4 23.5 14.1l75.3 141.2c8.7 16.2 13.2 34.3 13.2 52.7 0 61.9-50.1 112-112 112s-112-50.1-112-112c0-18.4 4.5-36.5 13.2-52.7z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 64h320c17.7 0 32 14.3 32 32v88.9c7.8-11.1 19.1-19.1 32-22.7V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h280.2c-6.6-9.9-12-20.6-16.1-32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m320 64c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h224.9c-.6-5.3-.9-10.6-.9-16s.3-10.7.9-16H312V272h40v32l32-60zm-288 0h40v112H96zm72 112V128h40v112zm72 0V128h40v112zm72 0V128h40v112zm-32 32v112h-40V272zm-72 0v112h-40V272zm-72 0v112H96V272zm257.4 90.4L464 230l70.6 132.4c6.2 11.6 9.4 24.5 9.4 37.6 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-13.1 3.2-26.1 9.4-37.6m-28.2-15.1c-8.7 16.2-13.2 34.3-13.2 52.7 0 61.9 50.1 112 112 112s112-50.1 112-112c0-18.4-4.5-36.5-13.2-52.7l-75.3-141.2c-4.6-8.7-13.7-14.1-23.5-14.1s-18.9 5.4-23.5 14.1z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 48h320c26.5 0 48 21.5 48 48v73.5c4.9-3.2 10.3-5.7 16-7.3V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h280.2c-3.4-5.1-6.5-10.5-9.3-16H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48m320 72c0-13.3-10.7-24-24-24H88c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h232.9c-.6-5.3-.9-10.6-.9-16h-16V264h64v10l16-30zm-304 0c0-4.4 3.6-8 8-8h56v136H80zm80 128V112h56v136zm72 0V112h56v136zm72 0V112h56c4.4 0 8 3.6 8 8v128zm-16 16v136h-56V264zm-72 0v136h-56V264zm-72 0v136H88c-4.4 0-8-3.6-8-8V264zm208 136c0 61.9 50.1 112 112 112s112-50.1 112-112c0-18.4-4.5-36.5-13.2-52.7l-75.3-141.2c-4.6-8.7-13.7-14.1-23.5-14.1s-18.9 5.4-23.5 14.1l-75.3 141.2c-8.7 16.2-13.2 34.3-13.2 52.7m27.3-45.2 75.3-141.2c1.9-3.5 5.5-5.6 9.4-5.6s7.6 2.2 9.4 5.6l75.3 141.2c7.4 13.9 11.3 29.4 11.3 45.2 0 53-43 96-96 96s-96-43-96-96c0-15.8 3.9-31.3 11.3-45.2"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h280.2c-15.3-22.9-24.2-50.4-24.2-80 0-23.6 5.8-46.9 16.9-67.8L412.2 191c7.6-14.3 20.6-24.5 35.8-28.8V96c0-35.3-28.7-64-64-64H64m0 64h32v128H64zm0 192h32v128H64zm96 128V288h32v128zm96 0V288h32v128zm128-192h-32V96h32zM288 96v128h-32V96zm-96 0v128h-32V96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m365.2 347.3 75.3-141.2c4.6-8.7 13.7-14.1 23.5-14.1s18.9 5.4 23.5 14.1l75.3 141.2c8.7 16.2 13.2 34.3 13.2 52.7 0 61.9-50.1 112-112 112s-112-50.1-112-112c0-18.4 4.5-36.5 13.2-52.7"
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
