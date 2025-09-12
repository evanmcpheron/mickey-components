import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MillSignIcon: React.FC<
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
                  d="M302.1 42.8c5.9-16.6-2.7-35-19.4-40.9s-35 2.7-40.9 19.4L208 116.1c-5.7 4-11.1 8.5-16 13.5-20.3-20.7-48.7-33.6-80-33.6-19.5 0-37.8 5-53.7 13.7C52.5 101.4 42.9 96 32 96c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32s32-14.3 32-32V208c0-26.5 21.5-48 48-48s48 21.5 48 48v42.5L81.9 469.2c-5.9 16.6 2.7 35 19.4 40.9s35-2.7 40.9-19.4l21.4-60c5.3 10.3 16 17.3 28.4 17.3 17.7 0 32-14.3 32-32V261.5l35.7-100c3.9-1 8.1-1.6 12.3-1.6 26.5 0 48 21.5 48 48V416c0 17.7 14.3 32 32 32s32-14.3 32-32V208c0-58.2-44.3-106-101.1-111.5l19.2-53.8z"
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
                  d="M302.4 32.5c4.7-12.4-1.5-26.3-13.9-31s-26.3 1.5-31 13.9l-36.1 95.3c-11.3 6.6-21.2 15.2-29.4 25.3-19.8-24.4-50.1-40-84-40-22.5 0-43.3 6.9-60.6 18.6C44.9 103.9 35.4 96 24 96c-13.3 0-24 10.7-24 24v80h.1c0 1.3-.1 2.7-.1 4v220c0 13.3 10.7 24 24 24s24-10.7 24-24V204c0-33.1 26.9-60 60-60s60 26.9 60 60v47.6L81.6 479.5c-4.7 12.4 1.5 26.3 13.9 31s26.3-1.5 31-13.9L168 386.9V424c0 13.3 10.7 24 24 24s24-10.7 24-24V260.4l43.3-114c5.3-1.5 10.9-2.4 16.7-2.4 33.1 0 60 26.9 60 60v220c0 13.3 10.7 24 24 24s24-10.7 24-24V204c0-58.9-47.1-106.7-105.7-108z"
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
                  d="M287.2 21.1c2.8-8.4-1.7-17.4-10.1-20.2S259.7 2.6 256.9 11l-34.2 102.2c-12.3 8.2-22.8 18.9-30.7 31.4-18.4-29.2-50.9-48.6-88-48.6-27.9 0-53.3 11-72 29v-13c0-8.8-7.2-16-16-16s-16 7.2-16 16v80h.3c-.2 2.6-.3 5.3-.3 8v232c0 8.8 7.2 16 16 16s16-7.2 16-16V200c0-39.8 32.2-72 72-72s72 32.2 72 72v53.4L96.8 490.9c-2.8 8.4 1.7 17.4 10.1 20.2s17.4-1.7 20.2-10.1L176 354.6V432c0 8.8 7.2 16 16 16s16-7.2 16-16V258.6l41.2-123.7c9.3-4.4 19.8-6.9 30.8-6.9 39.8 0 72 32.2 72 72v232c0 8.8 7.2 16 16 16s16-7.2 16-16V200c0-57.4-46.6-104-104-104-6.3 0-12.4.6-18.3 1.6L287.2 21z"
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
                  d="M287.5 10.7c1.5-4.2-.7-8.7-4.9-10.2s-8.7.7-10.2 4.9l-43.7 123.3c-16.1 10.7-29 26-36.7 44.1-15.3-35.8-50.7-60.8-92-60.8-35.2 0-66.2 18.2-84 45.7V120c0-4.4-3.6-8-8-8s-8 3.6-8 8v320c0 4.4 3.6 8 8 8s8-3.6 8-8V212c0-46.4 37.6-84 84-84s84 37.6 84 84v42.6L96.5 501.3c-1.5 4.2.7 8.7 4.9 10.2s8.7-.7 10.2-4.9L184 302.5V440c0 4.4 3.6 8 8 8s8-3.6 8-8V257.4l41.9-118.1c12.4-7.2 26.8-11.3 42.1-11.3 46.4 0 84 37.6 84 84v228c0 4.4 3.6 8 8 8s8-3.6 8-8V212c0-55.2-44.8-100-100-100-12.2 0-23.8 2.2-34.6 6.1zM200 209.4l17.2-48.4c-10.3 13.5-16.6 30.2-17.2 48.4"
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
                  d="M302.1 42.8c5.9-16.6-2.7-35-19.4-40.9s-35 2.7-40.9 19.4L208 116.1c18.1-12.7 40.2-20.1 64-20.1 3.7 0 7.3.2 10.9.5l19.2-53.8zm-42.4 118.8C239.1 167 224 185.7 224 208v53.5l35.7-100zm-96.1 269.1c-2.3-4.4-3.6-9.4-3.6-14.7V250.5L81.9 469.2c-5.9 16.6 2.7 35 19.4 40.9s35-2.7 40.9-19.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112 160c-26.5 0-48 21.5-48 48v208c0 17.7-14.3 32-32 32S0 433.7 0 416V128c0-17.7 14.3-32 32-32 10.9 0 20.5 5.4 26.3 13.7C74.2 101 92.5 96 112 96c31.3 0 59.7 12.9 80 33.6 20.3-20.7 48.7-33.6 80-33.6 61.9 0 112 50.1 112 112v208c0 17.7-14.3 32-32 32s-32-14.3-32-32V208c0-26.5-21.5-48-48-48s-48 21.5-48 48v208c0 17.7-14.3 32-32 32s-32-14.3-32-32V208c0-26.5-21.5-48-48-48"
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
