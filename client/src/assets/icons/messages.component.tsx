import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MessagesIcon: React.FC<
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
                  d="M64 0C28.7 0 0 28.7 0 64v192c0 35.3 28.7 64 64 64h32v48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5l81.1-60.8H352c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm288 352h-96v32c0 35.3 28.7 64 64 64h117.3l81.1 60.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.2 8.8-14.3v-48h32c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H448v128c0 53-43 96-96 96"
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
                  d="M48 72c0-13.3 10.7-24 24-24h272c13.3 0 24 10.7 24 24v176c0 13.3-10.7 24-24 24H216c-4.7 0-9.4 1.4-13.3 4L144 315.2V296c0-13.3-10.7-24-24-24H72c-13.3 0-24-10.7-24-24zM72 0C32.2 0 0 32.2 0 72v176c0 39.8 32.2 72 72 72h24v40c0 8.9 4.9 17 12.7 21.2s17.3 3.7 24.6-1.2l90-60H344c39.8 0 72-32.2 72-72V72c0-39.8-32.2-72-72-72zm184 376c0 39.8 32.2 72 72 72h88.7l90 60c7.4 4.9 16.8 5.4 24.6 1.2S544 496.9 544 488v-40h24c39.8 0 72-32.2 72-72V200c0-39.8-32.2-72-72-72H448v48h120c13.3 0 24 10.7 24 24v176c0 13.3-10.7 24-24 24h-48c-13.3 0-24 10.7-24 24v19.2L437.3 404c-3.9-2.6-8.6-4-13.3-4h-96c-13.3 0-24-10.7-24-24v-24h-48z"
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
                  d="M202.7 288H352c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32v16l55.5-41.6c5.5-4.2 12.3-6.4 19.2-6.4M352 320H202.7l-81.1 60.8c-4.8 3.6-11.3 4.2-16.8 1.5S96 374.1 96 368v-48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h288c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64m-32 128c-35.3 0-64-28.7-64-64v-32h32v32c0 17.7 14.3 32 32 32h117.3c6.9 0 13.7 2.2 19.2 6.4L512 464v-16c0-17.7 14.3-32 32-32h32c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H448v-32h128c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64h-32v48c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L437.3 448z"
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
                  d="M202.7 304H352c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16v48l81.1-60.8c2.8-2.1 6.1-3.2 9.6-3.2M352 320H202.7l-81.1 60.8c-4.8 3.6-11.3 4.2-16.8 1.5S96 374.1 96 368v-48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h288c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64m-32 128c-35.3 0-64-28.7-64-64v-32h16v32c0 26.5 21.5 48 48 48h117.3c3.5 0 6.8 1.1 9.6 3.2L528 496v-48c0-8.8 7.2-16 16-16h32c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48H448v-16h128c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64h-32v48c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L437.3 448z"
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
                  d="M256 352v32c0 35.3 28.7 64 64 64h117.3l81.1 60.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.2 8.8-14.3v-48h32c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H448v128c0 53-43 96-96 96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 64C0 28.7 28.7 0 64 0h288c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H202.7l-81.1 60.8c-4.8 3.6-11.3 4.2-16.8 1.5S96 374.1 96 368v-48H64c-35.3 0-64-28.7-64-64z"
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
