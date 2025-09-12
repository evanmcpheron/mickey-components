import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AudioDescriptionSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-30-23.5c4.6-8.8 7.2-18.9 7.2-29.6V96c0-35.3-28.7-64-64-64H96c-6.7 0-13.1 1-19.2 2.9zM336 238v-54c0-13.3 10.7-24 24-24h56c53 0 96 43 96 96 0 35.3-19 66.1-47.4 82.8l-44.6-35c24.7-2 44.1-22.7 44.1-47.8 0-26.5-21.5-48-48-48H384v67.7zm151.4 242L314.3 343.6c-2 2.4-4.6 4.4-7.5 5.9-11.9 5.9-26.3 1.1-32.2-10.7l-9.4-18.9h-82.3l-9.4 18.9c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l42.5-85L32 121.2V416c0 35.3 28.7 64 64 64zm-254-200.2-21.8-17.2-8.6 17.2z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-30-23.5c4.6-8.8 7.2-18.9 7.2-29.6V96c0-35.3-28.7-64-64-64H96c-6.7 0-13.1 1-19.2 2.9zM134.4 80H544c8.8 0 16 7.2 16 16v317.6l-95.4-74.8C493 322.1 512 291.3 512 256c0-53-43-96-96-96h-56c-13.3 0-24 10.7-24 24v54zm285.5 223.8L384 275.7V208h32c26.5 0 48 21.5 48 48 0 25.2-19.4 45.8-44.1 47.8M487.4 480l-60.9-48H96c-8.8 0-16-7.2-16-16V159l-48-37.8V416c0 35.3 28.7 64 64 64zM130.5 317.3c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7l9.4-18.9H265l9.4 18.9c5.9 11.9 20.3 16.7 32.2 10.7 3-1.5 5.5-3.5 7.5-5.9l-80.9-63.8h-30.3l8.6-17.2-38.5-30.3z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zm434 444.6H96c-17.7 0-32-14.3-32-32V135.4l-32-25.2V416c0 35.3 28.7 64 64 64h404.4zM544 32H139.6l40.5 32H544c17.7 0 32 14.3 32 32v280.6l32 25.3V96c0-35.3-28.7-64-64-64m-32 224c0-53-43-96-96-96h-64c-8.8 0-16 7.2-16 16v11.1l32 25.3V192h48c35.3 0 64 28.7 64 64 0 13.4-4.1 25.8-11.1 36l25.2 19.9c11.3-15.7 17.9-35 17.9-55.9m-382.3 72.8c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2l19.5-39.1h92.2l19.6 39.2c4 7.9 13.6 11.1 21.5 7.2 5.1-2.6 8.3-7.5 8.8-12.8L237 272h-43.1l12.2-24.4-25.7-20.3z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zM487.5 480l-20.3-16H96c-26.5 0-48-21.5-48-48V133l-16-12.6V416c0 35.3 28.7 64 64 64zm-335-448 20.3 16H544c26.5 0 48 21.5 48 48v283l16 12.6V96c0-35.3-28.7-64-64-64zM344 183.2l16 12.6V176h56c44.2 0 80 35.8 80 80 0 14.2-3.7 27.6-10.2 39.1l12.7 10C507.1 290.8 512 274 512 256c0-53-43-96-96-96h-64c-4.4 0-8 3.6-8 8zm-163.7 54.3-19.4 38.8-.1.3-31.9 63.8c-2 4-.4 8.8 3.6 10.7s8.8.4 10.7-3.6l29.7-59.5h71.4L224 272h-43.1l12.2-24.4z"
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
                  d="M314.3 343.6 487.4 480H96c-35.3 0-64-28.7-64-64V121.2l141 111.1-42.5 85c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7l9.4-18.9H265l9.4 18.9c5.9 11.9 20.3 16.7 32.2 10.7 3-1.5 5.5-3.5 7.5-5.9zm-102.8-81 21.8 17.2h-30.4zM608 416c0 10.7-2.6 20.7-7.2 29.6L464.6 338.8C493 322.1 512 291.3 512 256c0-53-43-96-96-96h-56c-13.3 0-24 10.7-24 24v54L76.8 34.9C82.9 33 89.3 32 96 32h448c35.3 0 64 28.7 64 64zM464 256c0 25.2-19.4 45.8-44.1 47.8L384 275.7V208h32c26.5 0 48 21.5 48 48"
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
