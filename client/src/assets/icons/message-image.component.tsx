import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MessageImageIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64zm176 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m120 0c-8 0-15.5 4-20 10.7l-56 84-17.3-21.7c-4.6-5.7-11.4-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S110.8 320 120 320h272c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144c-4.5-6.7-12-10.7-20-10.7"
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
                  d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16zm48 124-.2.2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3zm88-348c5.3 0 10.2 2.6 13.2 6.9l88 128c3.4 4.9 3.7 11.3 1 16.5S390 304 384 304H160c-6.1 0-11.6-3.4-14.3-8.8s-2.1-11.9 1.5-16.8l48-64c3-4 7.8-6.4 12.8-6.4s9.8 2.4 12.8 6.4l9.6 12.8 52.4-76.3c3-4.3 7.9-6.9 13.2-6.9m-120-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M192 416c0-17.7-14.3-32-32-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H309.3c-6.9 0-13.7 2.2-19.2 6.4L192 464zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm88 128a24 24 0 1 0-48 0 24 24 0 1 0 48 0m135.9 32.1L380.3 288H131.5l44.6-63.8 19 25.4c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4l67.1-89.5zm-25.5-19.4L208 213.3l-6.5-8.7c-6-8-15.4-12.7-25.3-12.7-10.3 0-20 5-26 13.5l-49.1 70.2c-3.3 4.7-5.1 10.4-5.1 16.2 0 15.6 12.6 28.2 28.2 28.2h263.7c15.5 0 28.1-12.6 28.1-28.1 0-5.9-1.9-11.7-5.3-16.4l-97-134.3c-6-8.3-15.6-13.2-25.8-13.2-10 0-19.4 4.7-25.5 12.7"
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
                  d="M176 416c0-8.8-7.2-16-16-16H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H309.3c-3.5 0-6.8 1.1-9.6 3.2L176 496zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm104 128a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-40-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m167.7 40c2.6 0 5 1.3 6.5 3.4l105 150c.5.7.8 1.5.8 2.4 0 2.3-1.9 4.2-4.2 4.2h-296c-2.1 0-3.8-1.7-3.8-3.8 0-.9.3-1.7.8-2.4l56.5-70.6c1.6-2 4-3.1 6.5-3.1 2.6 0 5.1 1.2 6.7 3.3l19.1 25.5c1.5 2 3.8 3.2 6.3 3.2s4.8-1.1 6.4-3.1l83.2-106c1.5-1.9 3.8-3 6.2-3m-18.8-6.9-76.8 97.7-12.9-17.1c-4.6-6.1-11.8-9.7-19.5-9.7-7.4 0-14.4 3.4-19 9.1l-56.4 70.7c-2.8 3.5-4.3 7.9-4.3 12.4 0 11 8.9 19.8 19.8 19.8h296c11.1 0 20.2-9 20.2-20.2 0-4.1-1.3-8.2-3.6-11.6l-105.1-150a23.95 23.95 0 0 0-19.6-10.2c-7.3 0-14.3 3.4-18.8 9.1"
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
                  d="M0 64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64zm176 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m120 0c-8 0-15.5 4-20 10.7l-56 84-17.3-21.7c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S110.8 320 120 320h272c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144c-4.5-6.7-12-10.7-20-10.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64m172-21.3c-4.5-6.7-12-10.7-20-10.7s-15.5 4-20 10.7l-56 84-17.3-21.7c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S110.8 320 120 320h272c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6z"
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
