import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookOpenCoverIcon: React.FC<
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
                  d="M304 32v376L96 368V34.7c0-19.8 17.8-34.9 37.3-31.6zM89.7 405.1 320 451.2l230.3-46.1c15-3 25.7-16.1 25.7-31.4V28.8l25.7-5.1c19.8-4 38.3 11.1 38.3 31.3v366.8c0 15.3-10.8 28.4-25.7 31.4L320 512 25.7 453.1C10.8 450.2 0 437 0 421.8V55c0-20.2 18.5-35.3 38.3-31.3L64 28.8v345c0 15.3 10.8 28.4 25.7 31.4zM336 408V32L506.7 3.1C526.2-.2 544 14.9 544 34.7V368z"
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
                  d="M512 337.2V52.4L344 77v296zM296 373V77L128 52.4v284.8zM523.4 2.2C542.7-.7 560 14.3 560 33.8v316.3c0 15.1-10.6 28.1-25.3 31.3l-201.3 43c-8.8 1.9-17.9 1.9-26.7 0l-201.3-43C90.6 378.3 80 365.2 80 350.1V33.8C80 14.3 97.3-.7 116.6 2.2L320 32zM38.3 23.7l10.2 2c-.3 2.7-.5 5.4-.5 8.1v375l265.8 54.5c2 .4 4.1.6 6.2.6s4.2-.2 6.2-.6L592 408.8v-375c0-2.8-.2-5.5-.5-8.1l10.2-2c19.8-4 38.3 11.1 38.3 31.3v366.9c0 15.2-10.7 28.3-25.6 31.3l-278.6 57.2c-5.2 1.1-10.5 1.6-15.8 1.6s-10.6-.5-15.8-1.6L25.6 453.2C10.7 450.2 0 437.1 0 421.9V55c0-20.2 18.5-35.3 38.3-31.3"
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
                  d="M544 373.8V33.5L336 62.1v353.3zm-240 41.6V62.1L96 33.5v340.3zM539.6 1.8C558.9-.8 576 14.1 576 33.5v340.3c0 15.3-10.8 28.4-25.7 31.4l-217.7 43.5c-8.3 1.7-16.8 1.7-25.1 0L89.7 405.1c-15-3-25.7-16.1-25.7-31.4V33.5C64 14.1 81.1-.8 100.4 1.8L320 32zM0 65.5c0-17.9 14.6-32 32-32v385.1l281.7 56.3c4.1.8 8.4.8 12.6 0L608 418.6V33.5c17.4 0 32 14.1 32 32v353.1c0 15.3-10.8 28.4-25.7 31.4l-281.7 56.3c-8.3 1.7-16.8 1.7-25.1 0L25.7 449.9C10.8 447 0 433.8 0 418.6z"
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
                  d="m329.4 433 217.7-43.5c7.5-1.5 12.9-8.1 12.9-15.7V33.5c0-9.7-8.6-17.2-18.2-15.9L328 47.1v386.2c.5-.1.9-.2 1.4-.3m-17.4.3V47.1L98.2 17.7C88.6 16.3 80 23.8 80 33.5v340.3c0 7.6 5.4 14.2 12.9 15.7L310.6 433c.5.1.9.2 1.4.3M539.6 1.8C558.9-.8 576 14.1 576 33.5v340.3c0 15.3-10.8 28.4-25.7 31.4l-217.7 43.5c-8.3 1.7-16.8 1.7-25.1 0L89.7 405.1c-15-3-25.7-16.1-25.7-31.4V33.5C64 14.1 81.1-.8 100.4 1.8L320 32zM0 65.5c0-17.9 14.6-32 32-32v16c-8.7 0-16 7-16 16v353.1c0 7.6 5.4 14.2 12.9 15.7l281.7 56.3c6.2 1.2 12.6 1.2 18.8 0l281.7-56.3c7.5-1.5 12.9-8.1 12.9-15.7V65.5c0-9-7.3-16-16-16v-16c17.4 0 32 14.1 32 32v353.1c0 15.3-10.8 28.4-25.7 31.4l-281.7 56.3c-8.3 1.7-16.8 1.7-25.1 0L25.7 449.9C10.8 447 0 433.8 0 418.6z"
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
                  d="M64 373.8c0 15.3 10.8 28.4 25.7 31.4L304 448V32L100.6 2.2C81.3-.7 64 14.3 64 33.8zm512-340c0-19.5-17.3-34.5-36.6-31.7L336 32v416l214.3-42.9c15-3 25.7-16.1 25.7-31.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M89.7 405.1 320 451.2l230.3-46.1c15-3 25.7-16.1 25.7-31.4V28.8l25.7-5.1c19.8-4 38.3 11.1 38.3 31.3v366.8c0 15.3-10.8 28.4-25.7 31.4L320 512 25.7 453.1C10.8 450.2 0 437 0 421.8V55c0-20.2 18.5-35.3 38.3-31.3L64 28.8v345c0 15.3 10.8 28.4 25.7 31.4z"
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
