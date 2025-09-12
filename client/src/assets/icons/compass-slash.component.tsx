import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CompassSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-95.4-74.8C561.1 354.5 576 307 576 256 576 114.6 461.4 0 320 0c-73.2 0-139.1 30.7-185.8 79.9zm231.5 181.4 143.3-55.1c19.4-7.5 38.5 11.6 31 31l-47.5 123.5zm197.8 278.3L317 345.8l-90.6 34.8c-19.4 7.5-38.5-11.6-31-31l29.4-76.5L82.3 160.8C70.5 190.2 64 222.4 64 256c0 141.4 114.6 256 256 256 55.2 0 106.3-17.5 148.1-47.2"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-95.4-74.8C561.1 354.5 576 307 576 256 576 114.6 461.4 0 320 0c-73.2 0-139.1 30.7-185.8 79.9zm133.4 104.6C209.9 71.6 262.2 48 320 48c114.9 0 208 93.1 208 208 0 39.8-11.2 77-30.6 108.6l-100.3-78.7 47.5-123.5c7.5-19.4-11.6-38.5-31-31l-143.3 55.1-98.1-76.9zm295.9 355.1-39.7-31.3C396.8 452.9 359.7 464 320 464c-114.9 0-208-93.1-208-208 0-22.3 3.5-43.8 10-63.9l-39.7-31.3C70.5 190.2 64 222.4 64 256c0 141.4 114.6 256 256 256 55.2 0 106.3-17.5 148.1-47.2M317 345.8l-92.2-72.6-29.4 76.5c-7.5 19.4 11.6 38.5 31 31z"
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
                  d="M448.8 439.3C412.4 464.9 368 480 320 480 196.3 480 96 379.7 96 256c0-29.3 5.6-57.2 15.8-82.8l-26.1-20.6C71.8 184.2 64 219.2 64 256c0 141.4 114.6 256 256 256 58.2 0 111.9-19.4 154.9-52.2l-26.1-20.6zM320 0c-58.2 0-111.9 19.4-154.9 52.2l26.1 20.6C227.6 47.1 272 32 320 32c123.7 0 224 100.3 224 224 0 29.3-5.6 57.2-15.8 82.8l26.1 20.6c14-31.6 21.7-66.6 21.7-103.4C576 114.6 461.4 0 320 0M186.9 348.6c-8.3 25 15.5 48.8 40.5 40.5l111-37-30-23.7-91.1 30.4 27-80.9-26.7-21.1-30.6 91.9zm114.7-188.7 30 23.7 91.1-30.4-27 80.9 26.7 21.1 30.6-91.9c8.3-25-15.5-48.8-40.5-40.5l-111 37zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M455.1 454.4c-38.5 26.2-85 41.6-135.1 41.6-132.5 0-240-107.5-240-240 0-30.1 5.5-58.9 15.6-85.4l-13.1-10.4C70.6 189.8 64 222.1 64 256c0 141.4 114.6 256 256 256 55.2 0 106.4-17.5 148.2-47.2zM320 0c-55.2 0-106.4 17.5-148.2 47.2l13.1 10.4C223.4 31.4 269.9 16 320 16c132.5 0 240 107.5 240 240 0 30.1-5.5 58.9-15.6 85.4l13.1 10.4c11.9-29.6 18.5-61.9 18.5-95.8C576 114.6 461.4 0 320 0M194.5 351.1c-6.3 18.8 11.6 36.6 30.4 30.4l96.9-32.3-15-11.9-87 29c-6.3 2.1-12.2-3.9-10.1-10.1l25.2-75.6-13.3-10.6-27 81.1zm123.7-188.3 15 11.9 87-29c6.3-2.1 12.2 3.9 10.1 10.1l-25.2 75.6 13.3 10.6 27-81.1c6.3-18.8-11.6-36.6-30.4-30.4l-96.9 32.3zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M535.4 394.4C561.1 354.5 576 307 576 256 576 114.6 461.4 0 320 0c-73.2 0-139.1 30.7-185.8 79.9l136 106.6 143.3-55.1c19.4-7.5 38.5 11.6 31 31l-47.4 123.5zm-67.3 70.5L317 345.8l-90.6 34.8c-19.4 7.5-38.5-11.6-31-31l29.4-76.5L82.3 160.8C70.5 190.2 64 222.4 64 256c0 141.4 114.6 256 256 256 55.2 0 106.3-17.5 148.1-47.2z"
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
