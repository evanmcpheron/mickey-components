import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckIcon: React.FC<
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
                  d="M48 0C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48zm368 160h50.7l77.3 77.3V256H416zM112 416a48 48 0 1 1 96 0 48 48 0 1 1-96 0m368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M352 48c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H243.2c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zm32 368c0 53 43 96 96 96s96-43 96-96h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V245.3c0-14.9-5.9-29.1-16.4-39.6l-93.3-93.3A55.92 55.92 0 0 0 458.7 96H416V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64 0 53 43 96 96 96s96-43 96-96h128m173.7-176.4.4.4H416v-96h42.7c2.1 0 4.2.8 5.7 2.3zM112 416a48 48 0 1 1 96 0 48 48 0 1 1-96 0m368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M64 32c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h5.5c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H384V64c0-17.7-14.3-32-32-32zm0 384c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h288c35.3 0 64 28.7 64 64v32h65.3c14 0 27.3 6.1 36.4 16.8l78.7 91.8c7.5 8.7 11.6 19.8 11.6 31.2V384h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96m352-192h154.9l-77.5-90.4c-3-3.5-7.5-5.6-12.1-5.6H416zm0 32v88.4c17-15.2 39.4-24.4 64-24.4 41.8 0 77.4 26.7 90.5 64h5.5V256zM224 416a64 64 0 1 0-128 0 64 64 0 1 0 128 0m256 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M64 16c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h3.3c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64H400V64c0-26.5-21.5-48-48-48zm.4 400H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h288c35.3 0 64 28.7 64 64v32h58.7c10.6 0 20.8 4.2 28.3 11.7l93.3 93.3c7.5 7.5 11.7 17.7 11.7 28.3V400h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56.4c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8H239.6c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8M416 216h172c-.9-1.3-1.9-2.6-3-3.7L491.7 119c-4.5-4.5-10.6-7-17-7H416zm0 16v141.4c15.9-22.6 42.2-37.4 72-37.4 40.3 0 74.2 27.1 84.7 64H592V232zM224 424a72 72 0 1 0-144 0 72 72 0 1 0 144 0m264 72a72 72 0 1 0 0-144 72 72 0 1 0 0 144"
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
                  d="M176 512a80 80 0 1 0 0-160 80 80 0 1 0 0 160m288 0a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 0C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h17.1c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96h66.3c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96h33c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48zm368 160h50.7l77.3 77.3V256H416z"
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
