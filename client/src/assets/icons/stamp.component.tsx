import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StampIcon: React.FC<
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
                  d="M312 201.8c0-17.4 9.2-33.2 19.9-47C344.5 138.5 352 118.1 352 96c0-53-43-96-96-96s-96 43-96 96c0 22.1 7.5 42.5 20.1 58.8 10.7 13.8 19.9 29.6 19.9 47 0 29.9-24.3 54.2-54.2 54.2H112C50.1 256 0 306.1 0 368c0 20.9 13.4 38.7 32 45.3V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-50.7c18.6-6.6 32-24.4 32-45.3 0-61.9-50.1-112-112-112h-33.8c-29.9 0-54.2-24.3-54.2-54.2M416 416v32H96v-32z"
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
                  d="M299.3 116.7c3-6.2 4.7-13.2 4.7-20.7 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 7.5 1.7 14.5 4.7 20.7l.3.6c7 14.6 19 39.6 19 68.7 0 65.2-52.8 118-118 118H96c-26.5 0-48 21.5-48 48v8c0 4.4 3.6 8 8 8h400c4.4 0 8-3.6 8-8v-8c0-26.5-21.5-48-48-48h-18c-65.2 0-118-52.8-118-118 0-29 12-54.1 19-68.6l.3-.6zm43.3 20.8c-7.4 15.4-14.6 31.4-14.6 48.5 0 38.7 31.4 70 70 70h18c53 0 96 43 96 96v8c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56v-8c0-53 43-96 96-96h18c38.7 0 70-31.3 70-70 0-17.1-7.2-33.1-14.6-48.5-6-12.6-9.4-26.6-9.4-41.5 0-53 43-96 96-96s96 43 96 96c0 14.9-3.4 28.9-9.4 41.5M32 480c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32"
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
                  d="M310.4 129.8c6.1-9.8 9.6-21.3 9.6-33.8 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 12.5 3.5 24 9.6 33.8 9.5 15.2 22.4 37.9 22.4 65.1 0 51.4-41.7 93.1-93.1 93.1H112c-44.2 0-80 35.8-80 80 0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16 0-44.2-35.8-80-80-80h-18.9c-51.4 0-93.1-41.7-93.1-93.1 0-27.1 12.9-49.9 22.4-65.1m27.2 16.9c-9.2 14.8-17.5 30.8-17.5 48.2 0 33.8 27.4 61.1 61.1 61.1H400c61.9 0 112 50.1 112 112 0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48 0-61.9 50.1-112 112-112h18.9c33.8 0 61.1-27.4 61.1-61.1 0-17.4-8.3-33.4-17.5-48.2C165.3 132 160 114.6 160 96c0-53 43-96 96-96s96 43 96 96c0 18.6-5.3 36-14.5 50.7zM64 456v8c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48v-8c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M336 96c0 14.1-3.6 27.2-10 38.7-9.6 17.4-22 39.8-22 65.1 0 48.7 39.5 88.2 88.2 88.2h7.8c53 0 96 43 96 96 0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16 0-53 43-96 96-96h7.8c48.7 0 88.2-39.5 88.2-88.2 0-25.3-12.4-47.7-22-65.1-6.3-11.5-10-24.6-10-38.7 0-44.2 35.8-80 80-80s80 35.8 80 80m-16 103.8c0-20.5 10.1-39.4 20-57.4 7.6-13.8 12-29.6 12-46.5 0-53-43-96-96-96s-96 43-96 96c0 16.9 4.3 32.7 12 46.5 9.9 18 20 36.8 20 57.4 0 39.9-32.3 72.2-72.2 72.2H112C50.1 272 0 322.1 0 384c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32 0-61.9-50.1-112-112-112h-7.8c-39.9 0-72.2-32.3-72.2-72.2M48 456c0-4.4-3.6-8-8-8s-8 3.6-8 8v16c0 22.1 17.9 40 40 40h368c22.1 0 40-17.9 40-40v-16c0-4.4-3.6-8-8-8s-8 3.6-8 8v16c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24z"
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
                  d="M32 416v48c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-48h-64v32H96v-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M312 201.8c0-17.4 9.2-33.2 19.9-47C344.5 138.5 352 118.1 352 96c0-53-43-96-96-96s-96 43-96 96c0 22.1 7.5 42.5 20.1 58.8 10.7 13.8 19.9 29.6 19.9 47 0 29.9-24.3 54.2-54.2 54.2H112C50.1 256 0 306.1 0 368v8c0 22.1 17.9 40 40 40h432c22.1 0 40-17.9 40-40v-8c0-61.9-50.1-112-112-112h-33.8c-29.9 0-54.2-24.3-54.2-54.2"
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
