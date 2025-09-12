import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GasPumpSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-72.2-56.6c10.9-14.6 17.4-32.8 17.4-52.5V154.5c0-17-6.7-33.3-18.7-45.3L480 32c-8.8-8.8-23.2-8.8-32 0s-8.8 23.2 0 32l32 32v64c0 29.8 20.4 54.9 48 62v138c0 8.5-2.7 16.4-7.2 22.9L384 275.7V64c0-35.3-28.7-64-64-64H160c-30.9 0-56.7 21.9-62.7 51zM96 171.6V448c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32v-49.5z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-67.2-52.7C571.4 404.9 576 391 576 376V155.9c0-19.1-7.6-37.4-21.1-50.9L481 31c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l33 33V160c0 29.8 20.4 54.9 48 62v154c0 3.8-.9 7.4-2.5 10.6L384 275.7V64c0-35.3-28.7-64-64-64H160c-30.9 0-56.7 21.9-62.7 51zM144 87.6V64c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v174zm240 311-48-37.8V464H144V209.5l-48-37.9V464h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-65.5z"
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
                  d="M352 362.8V480H128V186l-32-25.3V480H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-91.9zM144.6 36c4.6-2.5 9.8-4 15.4-4h160c17.7 0 32 14.3 32 32v135.7l32 25.3V64c0-35.3-28.7-64-64-64H160c-15.9 0-30.4 5.8-41.6 15.3zM576 157.1c0-17.9-7.5-35.1-20.8-47.2l-80.4-73.7c-6.5-6-16.6-5.5-22.6 1s-5.5 16.6 1 22.6L480 84.4V160c0 35.3 28.7 64 64 64v127.3l32 25.3zm-64-43.4 21.6 19.8c6.6 6.1 10.4 14.6 10.4 23.6V192c-17.7 0-32-14.3-32-32zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M368 375.4V416H112V173.3l-16-12.6V496H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h336c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V388.1l-16-12.6zM131.3 25.5c8-6 17.9-9.5 28.7-9.5h160c26.5 0 48 21.5 48 48v148.4l16 12.6V64c0-35.3-28.7-64-64-64H160c-15.9 0-30.4 5.8-41.6 15.3zM576 149.1c0-15.7-6.6-30.7-18.2-41.3l-80.4-73.7c-3.3-3-8.3-2.8-11.3.5s-2.8 8.3.5 11.3l29.4 27V168c0 30.9 25.1 56 56 56h8v139.9l16 12.6zM368 432v64H112v-64zm192-224h-8c-22.1 0-40-17.9-40-40V87.5l35 32.1c8.3 7.6 13 18.3 13 29.5zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M558.6 412.5c10.9-14.6 17.4-32.8 17.4-52.5V154.5c0-17-6.7-33.3-18.7-45.3L480 32c-8.8-8.8-23.2-8.8-32 0s-8.8 23.2 0 32l32 32v64c0 29.8 20.4 54.9 48 62v138c0 8.5-2.7 16.4-7.2 22.9zM384 275.7V64c0-35.3-28.7-64-64-64H160c-30.9 0-56.7 21.9-62.7 51zM96 171.6V416h288v-17.5zM64 480c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
