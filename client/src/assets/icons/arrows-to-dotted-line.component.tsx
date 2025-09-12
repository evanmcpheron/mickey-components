import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowsToDottedLineIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32h-32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9S300.9 64 287.9 64H256zm-54.6 297.4-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0zM32 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-64a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m241 185 72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31L248 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v86.1L169 79c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0zM0 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m96 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0m128-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0m128-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64M313 399l-72-72c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-86.1l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 192c-4.2 0-8.3-1.7-11.3-4.7l-80-80c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l52.7 52.7V16c0-8.8 7.2-16 16-16s16 7.2 16 16v121.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-80 80c-3 3-7.1 4.7-11.3 4.7M56 256a24 24 0 1 1-48 0 24 24 0 1 1 48 0m384 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-120 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-72-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-120 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48m107.3 44.7 80 80c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L240 374.6V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V374.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l80-80c3-3 7.1-4.7 11.3-4.7s8.3 1.7 11.3 4.7"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m317.7 101.7-88 88c-3.1 3.1-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l74.3 74.3V8c0-4.4 3.6-8 8-8s8 3.6 8 8v156.7l74.3-74.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM32 240a16 16 0 1 1 0 32 16 16 0 1 1 0-32m80 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m96 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m96 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-186.3 82.3 88 88c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L232 347.3V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V347.3l-74.3 74.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l88-88c3.1-3.1 8.2-3.1 11.3 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 256a32 32 0 1 1-64 0 32 32 0 1 1 64 0m96 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128-32a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 0c17.7 0 32 14.3 32 32v32h32c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-9.2-9.2-11.9-22.9-6.9-34.9S147.1 64 160.1 64h32V32c0-17.7 14.3-32 32-32zm-86.6 393.4 64-64c12.5-12.5 32.8-12.5 45.3 0l64 64c9.2 9.2 11.9 22.9 6.9 34.9S301 448.1 288 448.1h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448h-32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9z"
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
