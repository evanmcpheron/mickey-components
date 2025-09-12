import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EnvelopeOpenTextIcon: React.FC<
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
                  d="M215.4 96H96v177.4L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11l49.9 37H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4V96H215.4M0 448V242.1l217.6 161.2c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m176-288h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M392 48H120c-4.4 0-8 3.6-8 8v169.2l-42.8-35.1c-1.7-1.4-3.4-2.6-5.2-3.8V56c0-30.9 25.1-56 56-56h272c30.9 0 56 25.1 56 56v130.2c-1.8 1.2-3.5 2.5-5.2 3.8L400 225.2V56c0-4.4-3.6-8-8-8m-232 72c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24m0 80c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24M48 276.2V456c0 4.4 3.6 8 8 8h400c4.4 0 8-3.6 8-8V276.2L322 392.8c-38.4 31.5-93.7 31.5-132 0zM0 237.9C0 221.4 13.4 208 29.9 208c6.9 0 13.6 2.4 19 6.8l171.6 141c20.7 17 50.4 17 71.1 0l171.6-141c5.3-4.4 12.1-6.8 19-6.8 16.5 0 29.9 13.4 29.9 29.9V456c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56z"
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
                  d="M392 32H120c-13.3 0-24 10.7-24 24v166.5l-18.5-15.3c-4.2-3.4-8.7-6.3-13.5-8.6V56c0-30.9 25.1-56 56-56h272c30.9 0 56 25.1 56 56v142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5V56c0-13.3-10.7-24-24-24M35 256c-1.6 0-3 1.3-3 3v189c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V259c0-1.6-1.3-3-3-3-.7 0-1.3.2-1.9.7L294.5 405.1c-10.8 8.9-24.5 13.8-38.5 13.8s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zm-35 3c0-19.3 15.6-35 35-35 8.1 0 15.9 2.8 22.2 7.9l180.6 148.4c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5l180.7-148.4c6.3-5.1 14.1-7.9 22.2-7.9 19.3 0 35 15.6 35 35v189c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176-131h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 96h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M256 16c-8.6 0-17 2.8-24 7.9L177.9 64h156.2L280 23.9c-7-5.1-15.4-7.9-24-7.9M120 64h31l71.5-53c9.7-7.1 21.4-11 33.5-11s23.8 3.9 33.5 11L361 64h31c30.9 0 56 25.1 56 56v8.5l38.1 28.2c16.3 12.1 25.9 31.1 25.9 51.4V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V208.1c0-20.3 9.6-39.4 25.9-51.4L64 128.5V120c0-30.9 25.1-56 56-56m328 150.5-16 13.1V120c0-22.1-17.9-40-40-40H120c-22.1 0-40 17.9-40 40v107.7l-16-13.2v-66.1l-28.6 21.1C23.2 178.6 16 192.9 16 208.1v8.4l1.6 1.3 215.1 176.7c6.6 5.4 14.8 8.3 23.3 8.3s16.7-2.9 23.3-8.3l215.1-176.7 1.6-1.3v-8.4c0-15.2-7.2-29.5-19.4-38.6L448 148.4zM16 448c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V237.2L289.4 406.9c-9.4 7.7-21.2 12-33.4 12s-24-4.2-33.4-12L16 237.2zm152-288h176c4.4 0 8 3.6 8 8s-3.6 8-8 8H168c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 80h176c4.4 0 8 3.6 8 8s-3.6 8-8 8H168c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M96 32c-17.7 0-32 14.3-32 32v185.7l172.7 127.9c5.6 4.1 12.4 6.4 19.3 6.4s13.7-2.2 19.3-6.4L448 249.7V64c0-17.7-14.3-32-32-32zm80 96h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M511.8 202.5c-1.6-18.1-10.9-34.9-25.7-45.8L448 128.5v121.2zM512 448V242.1L294.4 403.3c-11.1 8.3-24.6 12.7-38.4 12.7s-27.3-4.4-38.4-12.7L0 242.1V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64M64 249.7V128.5l-38.1 28.2C11.1 167.6 1.8 184.4.2 202.5zM289.5 11.1C279.8 3.9 268.1 0 256 0s-23.8 3.9-33.5 11l-28.3 21h123.6zM176 128c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
