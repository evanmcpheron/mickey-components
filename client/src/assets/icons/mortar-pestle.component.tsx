import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MortarPestleIcon: React.FC<
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
                  d="M504.3 11.1c-11-12.7-29.8-14.8-43.3-4.9L252.3 160h145L502.6 54.6c11.8-11.8 12.6-30.8 1.6-43.5zM32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 82.5 43.4 147.7 123.9 176.2-11.1 13.9-19.4 30.3-23.9 48.1-4.4 17.1 10.3 31.7 28 31.7h192c17.7 0 32.4-14.6 28.1-31.7-4.5-17.8-12.8-34.1-23.9-48.1C436.6 403.7 480 338.5 480 256c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M504.3 11.1c10.9 12.7 10.2 31.7-1.6 43.5L397.3 160h-145L461 6.2c13.5-9.9 32.3-7.8 43.2 4.9zM80 240v16c0 62.9 31.3 109.5 91.9 131 14.6 5.2 25.8 17.1 30.1 32.1s1 31-8.6 43.1c-.5.6-1 1.2-1.4 1.8h128c-.5-.6-.9-1.2-1.4-1.8-9.7-12.1-12.9-28.2-8.6-43.1s15.5-26.9 30.1-32.1c60.7-21.6 91.9-68.1 91.9-131v-16zm432-24c0 13.3-10.7 24-24 24h-8v16c0 66-27.8 120.8-80 154.8-13.1 8.5-27.7 15.7-43.9 21.5 10 12.6 17.7 27.1 22.5 42.9.5 1.7 1 3.5 1.4 5.2 4.4 17.1-10.4 31.7-28.1 31.7H160c-17.7 0-32.4-14.6-28.1-31.7.4-1.8.9-3.5 1.4-5.2 4.7-15.8 12.5-30.3 22.5-42.9-16.1-5.7-30.8-12.9-43.9-21.5C59.8 376.8 32 322 32 256v-16h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h464c13.3 0 24 10.7 24 24"
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
                  d="M478.2 35c-1.3-1.7-3.2-2.7-5.4-2.9L476.3.3 472.8 32c-2-.2-4 .3-5.6 1.5l-.3.2L292.6 160h-54.5L448.2 7.9c8.3-6.2 18.4-8.7 28.1-7.6 10.2 1.1 20 6.1 26.9 14.7 2.9 3.6 5.1 7.6 6.6 11.8 2 5.7 2.7 11.7 2.1 17.6-1 9.7-5.6 19-13.4 25.8L398.1 160h-48L477 46.3l.3-.3c1.5-1.3 2.4-3.1 2.7-5.2.1-1.2 0-2.4-.4-3.5-.3-.8-.7-1.6-1.3-2.3zM64 224v32c0 69.4 35.3 122.2 102.6 146.1 9.7 3.5 17.2 11.4 20.1 21.4s.7 20.7-5.8 28.7c-6.6 8.3-11.9 17.7-15.4 27.8h181c-3.6-10.1-8.8-19.5-15.4-27.8-6.4-8.1-8.6-18.8-5.8-28.7s10.3-17.9 20.1-21.4C412.7 378.2 448 325.4 448 256v-32zm288 256q.15 0 0 0m-192 0q-.15 0 0 0m352-272c0 8.8-7.2 16-16 16h-16v32c0 71.6-32.7 130.1-93.8 163-9.4 5-19.4 9.5-30.1 13.3 6.8 8.5 12.5 17.8 16.9 27.9 2.9 6.5 5.2 13.2 7 20.2 4.4 17.1-10.4 31.7-28.1 31.7H160c-17.7 0-32.4-14.6-28.1-31.7 1.8-7 4.1-13.7 7-20.2 4.5-10 10.2-19.4 16.9-27.9-10.7-3.8-20.7-8.2-30.1-13.3-61-32.9-93.7-91.4-93.7-163v-32H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h480c8.8 0 16 7.2 16 16"
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
                  d="M464 208v48c0 76-39.4 134.9-113.2 161.2-4.9 1.7-8.6 5.7-10 10.7s-.3 10.3 2.9 14.4c9.7 12.2 17 26.5 20.9 42.1.7 2.8 0 5.3-2 7.4-2.2 2.4-6 4.3-10.5 4.3H160c-4.5 0-8.3-1.9-10.5-4.3-2-2.2-2.7-4.6-2-7.4 4-15.6 11.2-29.8 20.9-42.1 3.2-4 4.3-9.4 2.9-14.4s-5.2-9-10-10.7C87.4 390.9 48 332 48 256v-48zm-92.4 218.1C442.1 395 480 333.1 480 256v-48h24c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v48c0 77.1 37.9 139 108.4 170.1 5 2.2 10.1 4.2 15.5 6.1-3.4 4.3-6.6 8.8-9.5 13.6-6.4 10.6-11.3 22.2-14.5 34.5-4.3 17.1 10.4 31.7 28.1 31.7h192c17.7 0 32.4-14.6 28.1-31.7-3.1-12.3-8.1-23.9-14.5-34.5-2.9-4.7-6-9.3-9.5-13.6 5.3-1.9 10.5-3.9 15.5-6.1"
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
                  d="M502.6 54.6c11.8-11.8 12.6-30.8 1.6-43.5S474.5-3.7 461 6.2L213.7 188.5c-1.5 1.1-3 2.3-4.4 3.5h156z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 224c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32c0 82.5-43.4 147.7-123.9 176.2 11.1 13.9 19.4 30.3 23.9 48.1 4.4 17.1-10.4 31.7-28.1 31.7H160c-17.7 0-32.4-14.6-28.1-31.7 4.5-17.8 12.8-34.1 23.9-48.1C75.4 403.7 32 338.5 32 256c-17.7 0-32-14.3-32-32"
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
