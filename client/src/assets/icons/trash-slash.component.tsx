import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrashSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L497.2 364.4 512 128H195.6l-40.8-32H512c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-7.2-14.3C403.4 6.8 392.3 0 380.2 0H259.8c-12.1 0-23.2 6.8-28.6 17.7L224 32h-96c-13.4 0-24.8 8.2-29.6 19.8zM488 480.5 132.5 200.4 149.2 467c1.6 25.3 22.6 45 47.9 45h245.8c20.6 0 38.3-13 45.1-31.5"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L491.3 359.8 508.4 128H520c13.3 0 24-10.7 24-24s-10.7-24-24-24h-69.8l-36.7-55.1C403.1 9.4 385.6 0 366.9 0h-93.8c-18.7 0-36.2 9.4-46.6 24.9L189.8 80h-55.4zM195.6 128h264.7l-14.5 196.1zm283.6 345.6-42.1-33.1-.6 8.7c-.6 8.4-7.6 14.8-16 14.8H219.4c-8.4 0-15.3-6.5-16-14.8l-15.1-204.8-51.1-40.3 18.4 248.6c2.5 33.4 30.3 59.3 63.8 59.3h201.2c26.1 0 48.8-15.7 58.7-38.4zM273.1 48h93.7c2.7 0 5.2 1.3 6.7 3.6l19 28.4h-145l19-28.4c1.5-2.2 4-3.6 6.7-3.6z"
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
                  d="M509.7 96H528c8.8 0 16-7.2 16-16s-7.2-16-16-16h-95.1L407 22.6A47.98 47.98 0 0 0 366.3 0h-92.6c-16.5 0-31.9 8.5-40.7 22.6L207.1 64h-27l40.5 32h257l-13.7 192.1 30.4 24zm-56.8 346.5-.6 7.8c-1.2 16.7-15.1 29.7-31.9 29.7H219.6c-16.8 0-30.7-13-31.9-29.7l-16.5-230.2-34-26.8 18.5 259.3c2.4 33.5 30.3 59.4 63.8 59.4h200.9c29.1 0 54-19.5 61.6-46.6l-29.1-23zM273.7 32h92.5c5.5 0 10.6 2.8 13.6 7.5L395.1 64H244.9l15.3-24.5c2.9-4.7 8.1-7.5 13.6-7.5zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M512 120.7c.4-4.4-2.9-8.3-7.3-8.6s-8.3 2.9-8.6 7.3l-14.5 172.5 15.1 11.9zm-44.9 343.1c-3.7 18.5-20 32.2-39.2 32.2H212.2c-20.8 0-38.1-15.9-39.9-36.7l-20.4-244.2-17.2-13.6 21.6 259.2c2.4 29 26.7 51.4 55.8 51.4h215.7c24.3 0 45.1-15.5 52.8-37.4L467 464zM211.6 64H193l20.3 16H536c4.4 0 8-3.6 8-8s-3.6-8-8-8H428.4l-28.2-45.2C392.9 7.1 380.1 0 366.3 0h-92.6c-13.8 0-26.6 7.1-33.9 18.8zm62.2-48h92.5c8.3 0 16 4.3 20.4 11.3L409.6 64H230.4l23-36.7c4.4-7 12.1-11.3 20.4-11.3M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M132.5 200.4 488 480.5c-6.8 18.5-24.5 31.5-45.1 31.5H197.1c-25.3 0-46.3-19.7-47.9-45zM512 128l-14.8 236.4L195.6 128zm0-32H154.8L98.4 51.8C103.2 40.2 114.6 32 128 32h96l7.2-14.3C236.6 6.8 247.7 0 259.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L416 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32"
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
