import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NfcSymbolIcon: React.FC<
  IconProps & {
    type:
      | "solid"
      | "regular"
      | "light"
      | "thin"
      | "duotone"
      | "brands"
      | Dimensions;
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
                  d="M348.9 471.8c10.3 9.3 25.4 10.8 37.4 3.9C461.6 432.1 512 348.8 512 256S461.7 79.9 386.3 36.3c-15.3-8.8-34.9-3.6-43.7 11.7s-3.6 34.9 11.7 43.7C410.1 124 448 186.4 448 256c0 61.4-29.5 117.2-74.8 151.7L213.4 264.2c-13.2-11.8-33.4-10.7-45.2 2.4s-10.7 33.4 2.4 45.2zM163.1 40.2c-10.3-9.3-25.4-10.8-37.4-3.9C50.3 79.9 0 163.2 0 256s50.3 176.1 125.7 219.7c15.3 8.8 34.9 3.6 43.7-11.7s3.6-34.9-11.7-43.7C101.9 388 64 325.7 64 256c0-61.4 29.5-117.2 74.8-151.7l159.8 143.5c13.2 11.8 33.4 10.7 45.2-2.4s10.7-33.4-2.4-45.2z"
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
                  d="M357.4 473.6c7.7 7.2 19.2 8.5 28.3 3.2C461.4 433 512 349.3 512 256S461.4 79 385.7 35.2c-11.5-6.6-26.2-2.7-32.8 8.8s-2.7 26.2 8.8 32.8C422.7 112.1 464 180.1 464 256c0 69.6-34.7 132.6-87.6 169.8L200.3 262.4c-9.7-9-24.9-8.4-33.9 1.3s-8.4 24.9 1.3 33.9zM154.6 38.4c-7.7-7.2-19.2-8.5-28.3-3.2C50.6 79 0 162.7 0 256s50.6 177 126.3 220.8c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8C89.3 399.9 48 331.9 48 256c0-69.6 34.7-132.6 87.6-169.8l176.1 163.4c9.7 9 24.9 8.4 33.9-1.3s8.4-24.9-1.3-33.9z"
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
                  d="M367.2 475.6c5.1 4.9 12.9 5.8 19 2.2 76-43.9 126.9-128 126.9-221.8S462.2 78.1 386.3 34.2c-7.6-4.4-17.4-1.8-21.9 5.8s-1.8 17.4 5.8 21.9c66.2 38.2 110.9 111.9 110.9 194.1 0 78-40.2 148.2-100.8 187.9L203 276.4c-6.4-6.1-16.5-5.8-22.6.6s-5.8 16.5.6 22.6zM145.9 36.4c-5.1-4.9-12.9-5.8-19-2.3C50.9 78.1 0 162.2 0 256s50.9 177.9 126.8 221.8c7.6 4.4 17.4 1.8 21.9-5.8s1.8-17.4-5.8-21.9C76.7 411.9 32 338.2 32 256c0-77.9 40.2-148.2 100.8-187.9L309 235.6c6.4 6.1 16.5 5.8 22.6-.6s5.8-16.5-.6-22.6z"
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
                  d="M137.8 34.3c-2.6-2.5-6.5-3-9.6-1.2C51.5 77.1 0 161.7 0 256s51.5 178.9 128.3 222.9c3.8 2.2 8.7.9 10.9-3s.9-8.7-3-10.9C64.4 423.8 16 344.5 16 256c0-86.3 46.1-163.9 115-206l183.4 179.7c3.2 3.1 8.2 3 11.3-.1s3-8.2-.1-11.3zm239 443.5c2.6 2.5 6.5 3 9.6 1.2 75.5-44.2 126.1-128.8 126.1-223S461.9 77.2 386.4 33.1c-3.8-2.2-8.7-.9-10.9 2.9s-.9 8.7 2.9 10.9C448.9 88.2 496.5 167.5 496.5 256c0 86.3-45.3 163.9-113 206l-186-179.7c-3.2-3.1-8.2-3-11.3.2s-3 8.2.2 11.3z"
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
                  d="M386.3 475.7c-12 6.9-27.1 5.4-37.4-3.9l-178.3-160c-13.2-11.8-14.2-32-2.4-45.2s32-14.2 45.2-2.4l159.8 143.5C418.5 373.2 448 317.4 448 256c0-69.6-37.9-132-93.7-164.3-15.3-8.8-20.6-28.4-11.7-43.7s28.4-20.5 43.7-11.7C461.6 79.9 512 163.2 512 256s-50.3 176.1-125.7 219.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M125.7 36.3c12-6.9 27.1-5.4 37.4 3.9l178.3 160c13.2 11.8 14.2 32 2.4 45.2s-32 14.2-45.2 2.4L138.8 104.4C93.5 138.8 64 194.6 64 256c0 69.6 37.9 132 93.7 164.3 15.3 8.8 20.5 28.4 11.7 43.7s-28.4 20.5-43.7 11.7C50.3 432.1 0 348.8 0 256S50.3 79.9 125.7 36.3"
                />
              </svg>
            );

          case "brands":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M392.9 32.43c7.7-1.33 15.7.46 21.2 4.98C498.2 96.14 544 173.7 544 255.1c0 83.1-45.8 160.8-129.9 219.5-4.8 4-11.7 5.9-18.6 5.3-7-.6-13.5-3.6-18.4-8.5L193.7 288.7c-5.6-5.5-8.7-13-9.6-20.9 0-7.8 4-15.3 9.5-20.9 5.6-5.5 13.1-8.7 20.9-8.7 7.9 0 15.4 3.1 20.9 8.6l165.1 164.4c54.6-44.7 84.3-99.2 84.3-156.1 0-61.6-36.9-122.2-103.9-169.34-6.4-4.52-10.8-11.41-12.1-19.14-1.4-7.73.4-15.68 5-22.09 4.5-6.41 11.4-10.76 19.1-12.1m-206 447.17c-7.7 1.3-15.6-.5-22.1-5C81.67 415.9 35.84 338.2 35.84 255.1c0-81.4 45.83-158.96 128.96-217.69 5.7-4.01 12.6-5.88 19.6-5.29 6.9.59 13.4 3.6 18.3 8.51L386.1 223.3c5.6 5.5 8.7 13 8.7 20.9.1 6.9-3 15.3-8.6 20.9-5.5 5.5-13 8.7-20.9 8.7-7.8 0-16.2-3.1-20.9-8.6L179.3 100.7c-54.6 45.2-84.27 99.2-84.27 154.4 0 63.4 36.87 124 103.07 171.1 7.3 4.6 11.6 11.4 13 19.2 1.3 7.7-.5 15.7-5 22.1s-11.4 10.7-19.2 12.1"
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
