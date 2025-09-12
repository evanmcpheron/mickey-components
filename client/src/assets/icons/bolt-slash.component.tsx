import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoltSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-182.4-143 52.7-46.1c10-8.8 13.6-22.9 8.9-35.3S493.4 224 480 224H368.5l76.9-179.4c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8L228.4 153.7zm100.1 226.8c-10 8.8-13.6 22.9-8.9 35.3s16.6 20.7 30 20.7h83.7l-88.9-70-15.9 13.9zm55.7 235.5c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8L374.4 391l-109.9-86.6z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L450.2 327.6l49.5-42c7.8-6.6 12.3-16.4 12.3-26.6 0-19.3-15.6-34.9-34.9-34.9h-85.3l53.6-187.5C450.6 18.3 436.8 0 417.7 0c-6.8 0-13.5 2.4-18.7 6.9L227.9 153.3zm227.6 178.4L381.6 85l-44.1 154.3-71.1-55.7zM379.3 272h62.2l-29.8 25.3zm-4.4 119.4-38.5-30.3-78.2 66.4L288.1 323l-40.7-32.1-52.8 184.5c-5.2 18.4 8.5 36.6 27.6 36.6 6.8 0 13.4-2.4 18.6-6.8zM153.5 216.9l-13.7 11.7a33.71 33.71 0 0 0-11.8 25.6c0 18.6 15.1 33.7 33.7 33.7h82l-90.2-71.1z"
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
                  d="M351.4 362.3 236.6 463.6 290 313.9 263.5 293l-66.3 185.7c-5.8 16.2 6.2 33.3 23.5 33.3 6.1 0 11.9-2.2 16.5-6.2l139.7-123.4-25.5-20.2zM216.7 256h-46.6l21.9-19.5-25.5-20.1-29.8 26.5c-5.5 4.9-8.7 11.9-8.7 19.3 0 14.3 11.6 25.8 25.8 25.8h103.4zm72.5-105.9L403.3 48.7 350 198.1l26.5 20.9 66.3-185.7C448.6 17.1 436.6 0 419.4 0c-6.1 0-12 2.2-16.5 6.3L263.7 130zM485 224H382.8l40.5 32h48.5l-22.9 20.2 25.5 20.2 28.4-25.1c5.8-5.1 9.1-12.5 9.1-20.3 0-14.9-12.1-27-27-27zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M356.1 376.3 223.5 493.8c-1.6 1.4-3.7 2.2-5.9 2.2-6.4 0-10.7-6.5-8.2-12.4l71.5-166.8-13-10.3-73.2 170.8c-7 16.4 5 34.7 22.9 34.7 6.1 0 11.9-2.2 16.5-6.3l134.8-119.4-12.8-10.1zM224.1 272h-72.8c-4.1 0-7.3-3.3-7.3-7.3 0-2.1.9-4.1 2.5-5.5l28.8-25.7-12.8-10.1-26.7 23.8c-5 4.4-7.8 10.8-7.8 17.4 0 12.9 10.5 23.3 23.3 23.3h93l-20.3-16zm60.3-135.9L416.5 18.2c1.6-1.4 3.7-2.2 5.9-2.2 6.4 0 10.6 6.5 8.1 12.4l-71.4 166.7 13 10.3 73.2-170.7c7-16.4-5-34.7-22.9-34.7-6.1 0-12 2.2-16.6 6.3L271.6 126.1l12.8 10.1zm203 87.9h-91.7l20.3 16h71.5c4.7 0 8.6 3.8 8.6 8.6 0 2.4-1 4.8-2.9 6.4l-27.5 24.3 12.8 10.1 25.3-22.4c5.3-4.7 8.3-11.4 8.3-18.4 0-13.6-11-24.6-24.6-24.6zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="m154.8 218 88.9 70H160c-13.3 0-25.3-8.3-30-20.7s-1.1-26.6 8.9-35.3zm109.6 86.4 110 86.6-129.3 113.1c-11.2 9.8-27.8 10.6-39.9 1.8s-16.5-24.8-10.6-38.5l69.9-163zM501 280.1l-52.7 46.1-219.9-172.5L394.9 7.9c11.2-9.8 27.8-10.6 39.9-1.8s16.5 24.8 10.6 38.5L368.5 224H480c13.3 0 25.3 8.3 30 20.7s1.2 26.6-8.9 35.3z"
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
