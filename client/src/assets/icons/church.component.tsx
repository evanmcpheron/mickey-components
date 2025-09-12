import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChurchIcon: React.FC<
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
                  d="M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v24h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2V512h96v-96c0-35.3 28.7-64 64-64s64 28.7 64 64v96h96V251.2c0-16.9-8.8-32.5-23.3-41.2L344 142.4V96h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32zM24.9 330.3C9.5 338.8 0 354.9 0 372.4V464c0 26.5 21.5 48 48 48h80V273.6zM592 512c26.5 0 48-21.5 48-48v-91.6c0-17.5-9.5-33.6-24.9-42.1L512 273.6V512z"
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
                  d="M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v24h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v26.9l-103.1 66.8c-20.5 13.3-32.9 36-32.9 60.4V464H72c-13.3 0-24-10.7-24-24v-69.9c0-8.1 4.1-15.7 11-20.2l69-44.7v-57.1l-95.1 61.6C12.4 322.9 0 345.7 0 370.1V440c0 39.8 32.2 72 72 72h496c39.8 0 72-32.2 72-72v-69.9c0-24.4-12.4-47.2-32.9-60.4L512 248.1v57.2l69 44.7c6.8 4.4 11 12 11 20.1V440c0 13.3-10.7 24-24 24h-88V250.1c0-24.4-12.4-47.2-32.9-60.4L344 122.9V96h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32zm-24 140.6L421 230c6.8 4.4 11 12 11 20.1V464h-64v-96c0-26.5-21.5-48-48-48s-48 21.5-48 48v96h-64V250.1c0-8.1 4.1-15.7 11-20.1z"
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
                  d="M336 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-40c-8.8 0-16 7.2-16 16s7.2 16 16 16h40v39.4l-115.5 77c-17.8 11.9-28.5 31.9-28.5 53.3V480H64c-17.7 0-32-14.3-32-32v-69.9c0-10.9 5.5-21 14.6-26.9l81.4-52.6v-38.1l-98.8 63.9C11 336.2 0 356.4 0 378.1V448c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64v-69.9c0-21.7-11-41.9-29.2-53.7L512 260.5v38.1l81.4 52.7c9.1 5.9 14.6 16 14.6 26.9V448c0 17.7-14.3 32-32 32h-96V249.7c0-21.4-10.7-41.4-28.5-53.3l-115.5-77V80h40c8.8 0 16-7.2 16-16s-7.2-16-16-16h-40zm112 464h-64v-96c0-35.3-28.7-64-64-64s-64 28.7-64 64v96h-64V249.7c0-10.7 5.3-20.7 14.2-26.6L320 147.2 433.8 223c8.9 6 14.2 16 14.2 26.7zm-96-96v96h-64v-96c0-17.7 14.3-32 32-32s32 14.3 32 32"
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
                  d="M328 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v40h-48c-4.4 0-8 3.6-8 8s3.6 8 8 8h48v59.6l-125.9 79.5c-16.2 10.3-26.1 28.1-26.1 47.3V496H56c-22.1 0-40-17.9-40-40v-70.3c0-13.4 6.7-25.9 17.8-33.3l98.6-65.7c3.7-2.5 4.7-7.4 2.2-11.1s-7.4-4.7-11.1-2.2l-98.6 65.7C9.4 349.5 0 367 0 385.7V456c0 30.9 25.1 56 56 56h528c30.9 0 56-25.1 56-56v-70.3c0-18.7-9.4-36.2-24.9-46.6l-98.6-65.7c-3.7-2.5-8.6-1.5-11.1 2.2s-1.5 8.6 2.2 11.1l98.6 65.8c11.1 7.4 17.8 19.9 17.8 33.3V456c0 22.1-17.9 40-40 40H480V250.5c0-19.2-9.8-37.1-26.1-47.3L328 123.6V64h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48zm136 488h-80V384c0-35.3-28.7-64-64-64s-64 28.7-64 64v112h-80V250.5c0-13.7 7-26.5 18.6-33.8L320 137.5l125.4 79.2c11.6 7.3 18.6 20 18.6 33.8zm-96-112v112h-96V384c0-26.5 21.5-48 48-48s48 21.5 48 48"
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
                  d="M160 256 24.9 330.3C9.5 338.8 0 354.9 0 372.4V464c0 26.5 21.5 48 48 48h112zm320 256h112c26.5 0 48-21.5 48-48v-91.6c0-17.5-9.5-33.6-24.9-42.1L480 256z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 0c13.3 0 24 10.7 24 24v24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v46.4L456.7 210c14.5 8.7 23.3 24.3 23.3 41.2V512h-96v-96c0-35.3-28.7-64-64-64s-64 28.7-64 64v96h-96V251.2c0-16.9 8.8-32.5 23.3-41.2L296 142.4V96h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V24c0-13.3 10.7-24 24-24"
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
