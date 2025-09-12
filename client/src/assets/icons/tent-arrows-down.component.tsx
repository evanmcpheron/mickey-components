import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TentArrowsDownIcon: React.FC<
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
                  d="M209.8 111.9c-8.9-9.9-24-10.7-33.9-1.8l-39.9 36V24c0-13.3-10.7-24-24-24S88 10.7 88 24v122.1l-39.9-36c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9l80 72c9.1 8.2 23 8.2 32.1 0l80-72c9.9-8.9 10.7-24 1.8-33.9zm352 0c-8.9-9.9-24-10.7-33.9-1.8l-39.9 36V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v122.1l-39.9-36c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9l80 72c9.1 8.2 23 8.2 32.1 0l80-72c9.9-8.9 10.7-24 1.8-33.9zm-254.4 54.6c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S86.7 512 96 512h160c17.7 0 32-14.3 32-32V361.9c0-5.5 4.4-9.9 9.9-9.9 3.7 0 7.2 2.1 8.8 5.5l68.4 136.8c5.4 10.8 16.5 17.7 28.6 17.7H480c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"
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
                  d="M209.8 111.9c-8.9-9.9-24-10.7-33.9-1.8l-39.9 36V24c0-13.3-10.7-24-24-24S88 10.7 88 24v122.1l-39.9-36c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9l80 72c9.1 8.2 23 8.2 32.1 0l80-72c9.9-8.9 10.7-24 1.8-33.9zm352 0c-8.9-9.9-24-10.7-33.9-1.8l-39.9 36V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v122.1l-39.9-36c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9l80 72c9.1 8.2 23 8.2 32.1 0l80-72c9.9-8.9 10.7-24 1.8-33.9zM302.7 165c-8.6-6.7-20.7-6.7-29.3 0L107.6 293.1c-11.5 8.9-19.1 22-21.2 36.4L69.5 448.1c-4.9 33.7 21.3 63.9 55.4 63.9h326.2c34.1 0 60.3-30.2 55.4-63.9l-16.9-118.6c-2.1-14.4-9.7-27.5-21.2-36.4zM137 331l127-98.2V464H124.9c-4.9 0-8.6-4.3-7.9-9.1l16.9-118.6c.3-2.1 1.4-3.9 3-5.2zm175 29V232.9L439 331c1.6 1.3 2.7 3.1 3 5.2l17 118.7c.7 4.8-3.1 9.1-7.9 9.1h-76.7z"
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
                  d="M203.9 117.3c-5.9-6.6-16-7.1-22.6-1.2l-53.3 48V16c0-8.8-7.2-16-16-16S96 7.2 96 16v148.1l-53.3-48c-6.6-5.9-16.7-5.4-22.6 1.2s-5.4 16.7 1.2 22.6l80 72c6.1 5.5 15.3 5.5 21.4 0l80-72c6.6-5.9 7.1-16 1.2-22.6m352 0c-5.9-6.6-16-7.1-22.6-1.2l-53.3 48V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v148.1l-53.3-48c-6.6-5.9-16.7-5.4-22.6 1.2s-5.4 16.7 1.2 22.6l80 72c6.1 5.5 15.3 5.5 21.4 0l80-72c6.6-5.9 7.1-16 1.2-22.6m-258.4 45.8c-5.7-4.2-13.4-4.2-19 0L105.4 291c-10.5 7.8-17.4 19.5-19.1 32.4L68.8 457.8c-3.7 28.7 18.7 54.2 47.6 54.2h343.2c29 0 51.3-25.5 47.6-54.2l-17.6-134.4c-1.7-12.9-8.6-24.6-19.1-32.4zm-173 153.7L272 207.7V480H116.4c-9.7 0-17.1-8.5-15.9-18.1L118 327.5c.6-4.3 2.9-8.2 6.4-10.8zm179.5-1.4V207.7l147.5 109.1c3.5 2.6 5.8 6.5 6.4 10.8L475.4 462c1.2 9.6-6.2 18.1-15.9 18.1h-53.6l-.3-.4zm0 164.6V376.2L368.2 480z"
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
                  d="M197.9 122.6c3 3.3 2.7 8.3-.6 11.3l-80 72c-3 2.7-7.7 2.7-10.7 0l-80-72c-3.3-3-3.6-8-.6-11.3s8-3.6 11.3-.6l66.7 60V8c0-4.4 3.6-8 8-8s8 3.6 8 8v174l66.6-60c3.3-3 8.3-2.7 11.3.6m85.4 38.8c2.8-2 6.5-2 9.2 0L473 289.3c9.2 6.5 15.2 16.7 16.6 27.9l18 150.1c2.9 23.8-15.7 44.8-39.7 44.8H108.1c-24 0-42.6-21-39.7-44.8l18-150.1c1.3-11.2 7.4-21.3 16.6-27.9l180.4-127.8zM467.9 496c14.4 0 25.5-12.6 23.8-26.9l-18-150.1c-.8-6.7-4.4-12.8-10-16.7L296 183.5v134.3L404.5 496zM280 183.5 112.2 302.3c-5.5 3.9-9.1 10-10 16.7l-18 150.1C82.5 483.4 93.6 496 108 496h172V183.5m16 165.1V496h89.8L296 348.5zm253.4-214.7-80 72c-3 2.7-7.7 2.7-10.7 0l-80-72c-3.3-3-3.6-8-.6-11.3s8-3.6 11.3-.6l66.6 60V8c0-4.4 3.6-8 8-8s8 3.6 8 8v174l66.6-60c3.3-3 8.3-2.7 11.3.6s2.7 8.3-.6 11.3z"
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
                  d="M268.6 166.5c11.5-8.7 27.3-8.7 38.8 0l168 128c6.6 5 11 12.5 12.3 20.7l24 160c1.4 9.2-1.3 18.6-7.4 25.6s-14.9 11.1-24.2 11.1h-76.3c-12.1 0-23.2-6.8-28.6-17.7l-68.5-136.7c-1.7-3.4-5.1-5.5-8.8-5.5-5.5 0-9.9 4.4-9.9 9.9V480c0 17.7-14.3 32-32 32H96c-9.3 0-18.2-4.1-24.2-11.1s-8.8-16.4-7.4-25.6l24-160c1.2-8.2 5.6-15.7 12.3-20.7l168-128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M208.1 145.8c9.9-8.9 10.7-24 1.8-33.9s-24-10.7-33.9-1.8l-39.9 36L136 24c0-13.3-10.7-24-24-24S88 10.7 88 24v122.1l-39.9-36c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9l80 72c9.1 8.2 23 8.2 32.1 0zm352 0c9.9-8.9 10.7-24 1.8-33.9s-24-10.7-33.9-1.8l-39.9 36V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v122.1l-39.9-36c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9l80 72c9.1 8.2 23 8.2 32.1 0l80-72z"
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
