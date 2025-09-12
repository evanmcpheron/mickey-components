import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HockeyPuckIcon: React.FC<
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
                  d="M256 256C114.6 256 0 213 0 160s114.6-96 256-96 256 43 256 96-114.6 96-256 96m192.3 1.8c24.7-9.3 46.9-21 63.7-35.6V352c0 53-114.6 96-256 96S0 405 0 352V222.3c16.8 14.6 39 26.3 63.7 35.6 50.8 19 118.8 30.1 192.3 30.1s141.5-11.1 192.3-30.2"
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
                  d="M48 184c0 4.8 2.3 11.7 11 20.2 8.8 8.6 22.8 17.5 42.1 25.5C139.6 245.6 194.3 256 256 256s116.4-10.4 154.9-26.3c19.3-8 33.3-16.9 42.1-25.5 8.7-8.6 11-15.4 11-20.2s-2.3-11.7-11-20.2c-8.8-8.6-22.8-17.5-42.1-25.5C372.4 122.4 317.7 112 256 112s-116.4 10.4-154.9 26.3c-19.3 8-33.3 16.9-42.1 25.5-8.7 8.6-11 15.4-11 20.2m-48 0c0-21.7 10.7-40.1 25.4-54.5C40.1 115.2 60 103.4 82.7 94 128.3 75.1 189.6 64 256 64s127.7 11.1 173.2 29.9c22.7 9.4 42.7 21.2 57.3 35.5 14.8 14.5 25.5 32.9 25.5 54.6v144c0 21.7-10.7 40.1-25.4 54.5-14.6 14.3-34.6 26.1-57.3 35.5-45.6 18.9-106.9 30-173.3 30s-127.7-11.1-173.2-29.9c-22.7-9.4-42.7-21.2-57.3-35.5C10.7 368.1 0 349.7 0 328zm464 72.2c-10.5 6.7-22.2 12.6-34.8 17.9C383.7 292.9 322.4 304 256 304s-127.7-11.1-173.2-29.9C70.2 268.9 58.5 263 48 256.2V328c0 4.8 2.3 11.7 11 20.2 8.8 8.6 22.8 17.5 42.1 25.5C139.6 389.6 194.3 400 256 400s116.4-10.4 154.9-26.3c19.3-8 33.3-16.9 42.1-25.5 8.7-8.6 11-15.4 11-20.2z"
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
                  d="M32 184c0 9 4.1 18.9 14.3 29.3 10.2 10.5 25.8 20.7 46.3 29.6 41 17.8 98.7 29.1 163.3 29.1s122.4-11.4 163.3-29.1c20.5-8.9 36.1-19.1 46.3-29.6C475.9 202.9 480 193 480 184s-4.1-18.9-14.3-29.3c-10.2-10.5-25.8-20.7-46.3-29.6C378.4 107.4 320.6 96 256 96s-122.4 11.4-163.3 29.1c-20.5 8.9-36.1 19.1-46.3 29.6C36.1 165.1 32 175 32 184m-32 0c0-19.7 9.3-37.2 23.4-51.7 14.1-14.4 33.6-26.6 56.5-36.5C125.8 75.9 188.1 64 256 64s130.2 11.9 176.1 31.8c22.9 9.9 42.5 22.2 56.5 36.6 14.1 14.5 23.4 32 23.4 51.7V328c0 19.7-9.3 37.2-23.4 51.7-14.1 14.4-33.6 26.6-56.5 36.6C386.2 436.1 323.9 448 256 448s-130.2-11.9-176.1-31.8C57 406.3 37.4 394 23.4 379.6 9.3 365.2 0 347.7 0 328zm480 59.6c-13 11-29.4 20.6-47.9 28.6C386.2 292.1 323.9 304 256 304s-130.2-11.9-176.1-31.8c-18.6-8-34.9-17.6-47.9-28.6V328c0 9 4.1 18.9 14.3 29.3 10.2 10.5 25.8 20.7 46.3 29.6 41 17.8 98.7 29.1 163.3 29.1s122.4-11.4 163.3-29.1c20.5-8.9 36.1-19.1 46.3-29.6C475.9 346.9 480 337 480 328z"
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
                  d="M16 179.5c0 12.2 5.7 24.4 17.2 36.2 11.6 11.9 28.8 22.9 50.6 32.4 43.7 18.9 104.5 30.8 172.2 30.8s128.5-11.9 172.2-30.8c21.8-9.5 39-20.5 50.6-32.4 9.5-9.8 15.1-19.8 16.7-29.9V184h.3q.3-2.25.3-4.5c0-12.2-5.7-24.4-17.2-36.2-11.6-11.9-28.8-22.9-50.6-32.4C384.5 91.9 323.7 80 256 80S127.5 91.9 83.8 110.8c-21.8 9.5-39 20.5-50.6 32.4C21.7 155.1 16 167.3 16 179.5m479.5 41.6c-1.6 2-3.4 3.9-5.2 5.8-13.5 13.8-32.7 25.9-55.7 35.9-46.1 20-109.2 32.1-178.5 32.1s-132.4-12.2-178.5-32.1c-23-10-42.2-22.1-55.7-35.9-2-2.1-4-4.2-5.8-6.4v112.1c0 12.1 5.6 24.4 17.2 36.2 11.6 11.9 28.7 22.9 50.5 32.4 43.6 18.9 104.4 30.8 172 30.8s128.4-11.9 172-30.8c21.8-9.5 39-20.5 50.6-32.4 11.5-11.8 17.2-24.1 17.2-36.2V221.1zM.2 184c-.1-1.5-.2-3-.2-4.5C0 162 8.2 145.9 21.8 132c13.5-13.8 32.7-25.9 55.7-35.9C123.6 76.2 186.7 64 256 64s132.4 12.2 178.5 32.1c23 10 42.2 22.1 55.7 35.9 13.6 13.9 21.8 30 21.8 47.5 0 2.6-.2 5.1-.5 7.6v145.5c0 17.5-8.2 33.5-21.7 47.4-13.5 13.8-32.6 25.9-55.6 35.9C388 435.9 325 448 255.7 448s-132.3-12.1-178.4-32.1c-23-10-42.1-22.1-55.6-35.9S0 350.1 0 332.6V184z"
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
                  d="M512 160c0 53-114.6 96-256 96S0 213 0 160s114.6-96 256-96 256 43 256 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 256c141.4 0 256-43 256-96v192c0 53-114.6 96-256 96S0 405 0 352V160c0 53 114.6 96 256 96"
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
