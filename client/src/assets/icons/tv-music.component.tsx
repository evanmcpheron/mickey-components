import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TvMusicIcon: React.FC<
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
                  d="M576 64v288H64V64zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 480c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m320-368c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v97.8c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32v-68.9l96-36v42.7c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V112"
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
                  d="M576 48c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 488c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24M416 96c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v113.8c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V187.1l96-36v74.7c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V96"
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
                  d="M576 32c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 0C28.7 0 0 28.7 0 64v320c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 496c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16M409.1 98.8c-4.3-3-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v90.5c-5-1.6-10.4-2.5-16-2.5-26.5 0-48 19.7-48 44s21.5 44 48 44 48-19.7 48-44c0-.8 0-1.6-.1-2.5 0-.5.1-1 .1-1.5V171.1l96-36v83.4c-5-1.6-10.4-2.5-16-2.5-26.5 0-48 19.7-48 44s21.5 44 48 44 48-19.7 48-44c0-.8 0-1.6-.1-2.5 0-.5.1-1 .1-1.5V112c0-5.2-2.6-10.2-6.9-13.2M384 260c0 4.1-4.5 12-16 12s-16-7.9-16-12 4.5-12 16-12 16 7.9 16 12m-128 32c0 4.1-4.5 12-16 12s-16-7.9-16-12 4.5-12 16-12 16 7.9 16 12"
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
                  d="M64 16c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h512c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zM0 64C0 28.7 28.7 0 64 0h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm104 432h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8M560 80H80v288h480zM80 64h480c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16m332.6 41.4c2.2 1.5 3.4 4 3.4 6.6v152c0 22.1-21.5 40-48 40s-48-17.9-48-40 21.5-40 48-40c12.3 0 23.5 3.9 32 10.2V123.5l-112 42V296c0 22.1-21.5 40-48 40s-48-17.9-48-40 21.5-40 48-40c12.3 0 23.5 3.9 32 10.2V160c0-3.3 2.1-6.3 5.2-7.5l128-48c2.5-.9 5.2-.6 7.4.9M368 240c-20.5 0-32 13.4-32 24s11.5 24 32 24 32-13.4 32-24-11.5-24-32-24m-128 32c-20.5 0-32 13.4-32 24s11.5 24 32 24 32-13.4 32-24-11.5-24-32-24"
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
                  d="M64 64v288h512V64zM0 64C0 28.7 28.7 0 64 0h512c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 384h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M576 64H64v288h512zm-160 48v144c0 17.7-21.5 32-48 32s-48-14.3-48-32 21.5-32 48-32c5.6 0 11 .6 16 1.8v-50.7l-96 36V288c0 17.7-21.5 32-48 32s-48-14.3-48-32 21.5-32 48-32c5.6 0 11 .6 16 1.8V160c0-6.7 4.1-12.6 10.4-15l128-48c4.9-1.8 10.4-1.2 14.7 1.8s6.9 7.9 6.9 13.2"
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
