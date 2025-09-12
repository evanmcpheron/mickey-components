import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HatCowboySideIcon: React.FC<
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
                  d="m152.7 135.9-10.4 57.2c6.8-.7 13.6-1.1 20.5-1.1h10.7c39.4 0 77.8 12.1 110.1 34.7l278.8 195.1 35.1 24.6c24.4-6 42.5-28.1 42.5-54.4 0-75.8-94.7-126.6-134.6-144.7L474 83.9C468.2 53.8 441.8 32 411.1 32h-2.7c-5.6 0-11.1.7-16.5 2.2L199.2 85.5c-23.9 6.4-42 26-46.5 50.4M0 384c0 35.3 28.7 64 64 64h480L265.3 252.9c-26.9-18.8-58.9-28.9-91.8-28.9h-10.6c-60.6 0-116 34.2-143.1 88.4L13.5 325C4.6 342.7 0 362.3 0 382.2z"
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
                  d="M444.8 256H311.3l-31.5-25.6c-25-20.3-55-33-86.6-37.1l4.9-63.4c.3-3.6 2.9-6.5 6.4-7.2l207.8-41.5zM560 400h-40c0-1.4-.1-2.9-.4-4.4l-26-139.6c10.2 5.4 21.6 12 32.8 19.8 37.2 25.4 65.6 57.1 65.6 92.2 0 17.7-14.3 32-32 32m-62-195.4c-5.9-2.8-11.1-5.1-15.3-6.9l-24.6-132C454.6 46.2 437.6 32 417.7 32c-2.7 0-5.4.3-8.1.8L195.1 75.7c-24.6 4.9-42.9 25.6-44.9 50.6L145 194C62.9 206.8 0 277.9 0 363.6v18.8C0 418.6 29.4 448 65.6 448H560c44.2 0 80-35.8 80-80 0-60.9-47.6-105.2-86.4-131.8-20.3-13.9-40.5-24.5-55.5-31.6zm-450 159C48 295.3 103.3 240 171.6 240c28.4 0 55.9 9.8 77.9 27.7L412.4 400H65.6c-9.7 0-17.6-7.9-17.6-17.6z"
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
                  d="M416.6 64.2 195.1 107c-7.1 1.4-12.4 7.3-12.9 14.6l-5 70.6c36.3 1.7 71.2 15.2 99.4 38.4l30.9 25.4h155.2L428.2 72.1c-.9-4.7-5-8.1-9.8-8.1-.6 0-1.3.1-1.9.2zM145 193.7l5.3-74.4c1.5-21.7 17.4-39.6 38.8-43.7l221.4-42.8c2.6-.5 5.3-.8 8-.8 20.2 0 37.5 14.4 41.2 34.2l25 133.5c3.4 1.6 7.2 3.4 11.4 5.5 15.5 7.7 36.2 19.1 57 33.7 20.7 14.5 42.2 32.6 58.5 53.9C628.1 314 640 339.4 640 368c0 44.2-35.8 80-80 80H60.8C27.2 448 0 420.8 0 387.2v-26.1c0-85.2 63-155.7 145-167.4M525.3 416H560c26.5 0 48-21.5 48-48 0-19.4-8.1-38-21.7-55.7-13.7-17.7-32.2-33.7-51.5-47.1-14.9-10.5-29.9-19.2-42.7-26zm-34.2-8.8L468.7 288H346.3zM32 361.1v26.1c0 15.9 12.9 28.8 28.8 28.8h390.6L256.2 255.3c-24.5-20.2-55.3-31.3-87.1-31.3C93.4 224 32 285.4 32 361.1"
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
                  d="m388.4 49-200 46.7c-17.1 4-29.7 18.7-30.8 36.3l-5.1 76.4c3.7-.2 7.4-.4 11.2-.4 35.7 0 70.4 11.6 98.8 33.2l40.8 30.8h170.2L439.2 80.9c-3.4-19.1-20-32.9-39.4-32.9h-2.3c-3.1 0-6.1.4-9.1 1m-252 161.3 5.3-79.3c1.6-24.6 19.2-45.2 43.2-50.8l200-46.7c4.2-1 8.4-1.5 12.7-1.5h2.3c27.1 0 50.3 19.4 55.1 46.1l23.7 132c1 .4 2.1.9 3.5 1.5 4.5 2 10.8 4.9 18.5 8.7 15.2 7.6 35.6 18.8 56 33.1s41.1 31.8 56.8 52.2C629 326 640 349.7 640 376c0 39.8-32.2 72-72 72H52.8C23.6 448 0 424.4 0 395.2v-23.5c0-81.1 59-148.4 136.4-161.4m345.7 18.9 21.8 121.4c.8 4.3-2.1 8.5-6.5 9.3s-8.5-2.1-9.3-6.5L476.4 288h-152l190.3 144H568c30.9 0 56-25.1 56-56 0-21.7-9-42-23.3-60.6s-33.6-35.1-53.2-48.8-39.2-24.5-54-31.9c-4.2-2.1-8-3.9-11.3-5.5zM16 371.7v23.5c0 20.3 16.5 36.8 36.8 36.8h435.4L297.9 288H296v-1.4L252.9 254c-25.7-19.4-57-29.9-89.1-29.9C82.1 224 16 290.1 16 371.7"
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
                  d="m502.7 233.2 6.7 34.7 17.7 4.4c33.8 8.4 61.7 32 75.9 63.8 3.3 7.5 5.1 15.6 5.1 23.8v8.1c0 26.5-21.5 48-48 48h-.9c-6.6 0-13-2-18.3-5.8L273 222.8c-28.6-20-62.7-30.8-97.7-30.8-64.4 0-123.4 36.4-152.3 94.1l-9.2 18.4C4.7 322.7 0 342.8 0 363.2c0 33.4 14 63.5 36.5 84.8h80.3C70 448 32 410 32 363.2c0-15.4 3.6-30.6 10.5-44.4l9.2-18.4C75.1 253.6 123 224 175.4 224c28.4 0 56.1 8.7 79.3 25l267.7 187.4C533.2 444 546 448 559.1 448h.9c44.2 0 80-35.8 80-80v-8.1c0-12.7-2.7-25.2-7.8-36.8-18.1-40.8-54-71-97.4-81.8l-32.1-8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m141.9 195.3 10.8-59.4c4.4-24.4 22.5-44 46.5-50.4l192.7-51.3c5.4-1.4 10.9-2.2 16.5-2.2h2.7c30.7 0 57.1 21.8 62.8 51.9l28.7 149.3 2.9 15.2 3.7 19.5 17.7 4.4c33.8 8.4 61.7 32 75.9 63.8 3.3 7.5 5.1 15.6 5.1 23.8v8.1c0 26.5-21.5 48-48 48h-.9c-6.6 0-13-2-18.3-5.8L273 222.8c-28.6-20-62.7-30.8-97.7-30.8-11.4 0-22.5 1.1-33.4 3.3M116.8 448C70 448 32 410 32 363.2c0-15.4 3.6-30.6 10.5-44.4l9.2-18.4C75.1 253.6 123 224 175.4 224c28.4 0 56.1 8.7 79.3 25l267.7 187.4C533.2 444 546 448 559.1 448H116.8m443.2 0q3.75 0 7.5-.3l.5.3z"
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
