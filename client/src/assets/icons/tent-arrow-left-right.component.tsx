import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TentArrowLeftRightIcon: React.FC<
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
                  d="M488.1 6.2c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9L489.5 72h-403L120 41.8c9.9-8.9 10.7-24 1.8-33.9s-24-10.6-33.9-1.7l-80 72C2.9 82.7 0 89.2 0 96s2.9 13.3 7.9 17.8l80 72c9.9 8.9 25 8.1 33.9-1.8s8.1-25-1.8-33.9L86.5 120h402.9l-33.5 30.2c-9.9 8.9-10.7 24-1.8 33.9s24 10.7 33.9 1.8l80-72c5.1-4.6 7.9-11 7.9-17.8S573 82.8 568 78.3l-80-72zM307.4 166.5c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S86.7 512 96 512h160c17.7 0 32-14.3 32-32V361.9c0-5.5 4.4-9.9 9.9-9.9 3.7 0 7.2 2.1 8.8 5.5l68.4 136.8c5.4 10.8 16.5 17.7 28.6 17.7H480c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"
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
                  d="M488.1 6.2c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9L489.5 72h-403L120 41.8c9.9-8.9 10.7-24 1.8-33.9s-24-10.6-33.9-1.7l-80 72C2.9 82.7 0 89.2 0 96s2.9 13.3 7.9 17.8l80 72c9.9 8.9 25 8.1 33.9-1.8s8.1-25-1.8-33.9L86.5 120h402.9l-33.5 30.2c-9.9 8.9-10.7 24-1.8 33.9s24 10.7 33.9 1.8l80-72c5.1-4.6 7.9-11 7.9-17.8S573 82.8 568 78.3l-80-72zM302.7 165c-8.6-6.7-20.7-6.7-29.3 0L107.6 293.1c-11.5 8.9-19.1 22-21.2 36.4L69.5 448.1c-4.9 33.7 21.3 63.9 55.4 63.9h326.2c34.1 0 60.3-30.2 55.4-63.9l-16.9-118.6c-2.1-14.4-9.7-27.5-21.2-36.4zM137 331l127-98.2V464H124.9c-4.9 0-8.6-4.3-7.9-9.1l16.9-118.6c.3-2.1 1.4-3.9 3-5.2zm175 29V232.9L439 331c1.6 1.3 2.7 3.1 3 5.2l17 118.7c.7 4.8-3.1 9.1-7.9 9.1h-76.7z"
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
                  d="M482.8 4.2c-6.5-5.9-16.7-5.5-22.6 1.1s-5.5 16.7 1.1 22.6L518.6 80H57.4l57.4-52.2c6.5-5.9 7-16.1 1.1-22.6s-16.1-7-22.6-1.1l-88 80C1.9 87.2 0 91.5 0 96s1.9 8.8 5.2 11.8l88 80c6.5 5.9 16.7 5.5 22.6-1.1s5.5-16.7-1.1-22.6L57.4 112h461.2l-57.4 52.2c-6.5 5.9-7 16.1-1.1 22.6s16.1 7 22.6 1.1l88-80c3.3-3 5.2-7.3 5.2-11.8s-1.9-8.8-5.2-11.8l-88-80zm-185.3 159c-5.7-4.2-13.4-4.2-19 0L105.4 291c-10.5 7.8-17.4 19.5-19.1 32.4L68.8 457.8c-3.7 28.7 18.7 54.2 47.6 54.2h343.2c29 0 51.3-25.5 47.6-54.2l-17.6-134.4c-1.7-12.9-8.6-24.6-19.1-32.4l-173-127.9zM272 207.7V480H116.4c-9.7 0-17.1-8.5-15.9-18.1L118 327.5c.6-4.3 2.9-8.2 6.4-10.8zm32 168.5L368.2 480H304zm0-60.8V207.7l147.5 109.1c3.5 2.6 5.8 6.5 6.4 10.8L475.4 462c1.2 9.6-6.2 18.1-15.9 18.1h-53.6l-.3-.4z"
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
                  d="M477.4 2.1c-3.3-3-8.3-2.8-11.3.5s-2.8 8.3.5 11.3L547.4 88H28.6l80.8-74.1c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5l-96 88C.9 91.6 0 93.8 0 96s.9 4.4 2.6 5.9l96 88c3.3 3 8.3 2.8 11.3-.5s2.8-8.3-.5-11.3L28.6 104h518.9l-80.8 74.1c-3.3 3-3.5 8-.5 11.3s8 3.5 11.3.5l96-88c1.7-1.5 2.6-3.7 2.6-5.9s-.9-4.4-2.6-5.9l-96-88zM292.6 161.5c-2.8-2-6.5-2-9.2 0L103 289.3c-9.2 6.5-15.2 16.7-16.6 27.9l-18 150.1C65.5 491 84.1 512 108.1 512H468c24 0 42.6-21 39.7-44.8l-18-150.1c-1.3-11.2-7.4-21.3-16.6-27.9zm3.4 156.3V183.5l167.8 118.8c5.5 3.9 9.1 10 10 16.7l18 150.1c1.7 14.3-9.4 26.9-23.8 26.9h-63.5zm0 30.8L385.8 496H296V348.5zm-16-28.4V496H108.1c-14.4 0-25.5-12.6-23.8-26.9l18-150.1c.8-6.7 4.4-12.8 10-16.7L280 183.5v136.7"
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
                  d="M454.2 7.9c8.9-9.9 24-10.7 33.9-1.8l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-9.9 8.9-25 8.1-33.9-1.8s-8.1-25 1.8-33.9l33.5-30h-403l33.5 30.2c9.9 8.9 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-80-72C2.9 109.3 0 102.8 0 96s2.9-13.3 7.9-17.8l80-72c9.9-8.9 25-8.1 33.9 1.8s8.1 25-1.8 33.9L86.5 72h402.9l-33.5-30.2c-9.9-8.9-10.7-24-1.8-33.9z"
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
