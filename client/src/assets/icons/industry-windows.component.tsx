import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const IndustryWindowsIcon: React.FC<
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
                  d="M32 64c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v151.4L316.6 131c16-8.6 35.4 3 35.4 21.1v63.2L508.6 131c16-8.6 35.4 3 35.4 21.1V432c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V64m232 248c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm-144 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16m272-16c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16z"
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
                  d="M80 88c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v126.7c0 8.6 4.6 16.5 12 20.8s16.6 4.2 24-.1l140-81.6v70.9c0 8.8 4.8 16.8 12.5 21.1s17.1 3.9 24.5-.8l139.1-89-.1 148v104c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V88m8-56c-30.9 0-56 25.1-56 56v320c0 39.8 32.2 72 72 72h368c39.8 0 72-32.2 72-72V155.9c0-37.9-41.9-60.9-73.9-40.4L368 180.8v-27c0-37-40.2-60.1-72.2-41.5L192 172.9V88c0-30.9-25.1-56-56-56zm56 264c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm104 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16m136-16c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16z"
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
                  d="M64 80c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v149.3c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8l138.7-92.5c5.3-3.5 12.4.3 12.4 6.7v81.9c0 6 3.4 11.5 8.7 14.2s11.8 2.3 16.6-1.3l138-99.3c5.3-3.8 12.7 0 12.7 6.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V80m16-48c-26.5 0-48 21.5-48 48v336c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V158.9c0-32.6-36.9-51.5-63.4-32.5L368 207.5v-50.7c0-31.9-35.6-51-62.2-33.3L192 199.4V80c0-26.5-21.5-48-48-48zm56 272c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm104 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24m32 40v-32h32v32zm120-64c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm40 64h-32v-32h32zm-288 0v-32h32v32z"
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
                  d="M48 72c0-13.3 10.7-24 24-24h64c13.3 0 24 10.7 24 24v139.6c0 2.8 1.5 5.4 3.8 6.8s5.4 1.6 7.8.3l157-81.4c10.7-5.5 23.4 2.2 23.4 14.2v59.1c0 2.8 1.5 5.5 4 6.9s5.5 1.5 8 .1L504.2 139c10.7-6 23.8 1.7 23.8 14v271c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V72m24-40c-22.1 0-40 17.9-40 40v352c0 30.9 25.1 56 56 56h400c30.9 0 56-25.1 56-56V152.9c0-24.4-26.3-39.9-47.6-27.9L368 196.9v-45.4c0-24-25.4-39.5-46.7-28.4L176 198.4V72c0-22.1-17.9-40-40-40zm72 272c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24zm-8 24c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8zm112 0v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24m24-8h32c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8m128-16c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24zm-8 24c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8z"
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
                  d="M32 64c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v201.4l192-109.8v109.7l192-109.7V432c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V64m104 248c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm128 0c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm112 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M363.9 148.8c11.5-6.6 15.5-21.2 8.9-32.7s-21.2-15.5-32.7-8.9L160 210.1v55.3zm192 0c11.5-6.6 15.5-21.2 8.9-32.7s-21.2-15.5-32.7-8.9L352 210.1v55.3zM136 312c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm128 0c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm112 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16"
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
