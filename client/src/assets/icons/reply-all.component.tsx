import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ReplyAllIcon: React.FC<
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
                  d="M209.4 39.5c-9.1-9.6-24.3-10-33.9-.9L33.8 173.2c-19.9 18.9-19.9 50.7 0 69.6l141.7 134.6c9.6 9.1 24.8 8.7 33.9-.9s8.7-24.8-.9-33.9L66.8 208 208.5 73.4c9.6-9.1 10-24.3.9-33.9M352 64c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144c-6.7 6.1-10.6 14.7-10.6 23.8s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2v-64h32c53 0 96 43 96 96 0 30.4-12.8 47.9-22.2 56.7-5.5 5.1-9.8 12-9.8 19.5 0 10.9 8.8 19.7 19.7 19.7 2.8 0 5.6-.6 8.1-1.9C494.5 467.9 576 417.3 576 304c0-97.2-78.8-176-176-176h-48z"
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
                  d="M208.5 73.4c9.6-9.1 10-24.3.9-33.9s-24.3-10-33.9-.9L33.8 173.2c-19.9 18.9-19.9 50.7 0 69.6l141.7 134.6c9.6 9.1 24.8 8.7 33.9-.9s8.7-24.8-.9-33.9L66.8 208zM352 240h-24c-13.3 0-24 10.7-24 24v52.1L183.9 208 304 99.9V152c0 13.3 10.7 24 24 24h72c70.7 0 128 57.3 128 128 0 15.3-1.9 29.1-5.2 41.5C506 284.7 450.2 240 384 240zm0 96v-48h32c5.4 0 10.8.5 16 1.3 45.4 7.6 80 47.1 80 94.7 0 17.3-4.2 30.5-9.5 40.2-1.6 2.9-3.3 5.5-5 7.9-2.6 3.5-5.3 6.4-7.7 8.6-.5.5-1 .9-1.4 1.4-4.8 4.9-8.3 11.3-8.3 18.1 0 10.9 8.8 19.7 19.7 19.7 2.8 0 5.6-.6 8.1-1.9 2.6-1.4 6.3-3.5 10.8-6.5 2.7-1.8 5.7-3.8 8.9-6.2q5.55-4.05 11.7-9.3c30.1-25.8 68.7-74 68.7-152 0-97.2-78.8-176-176-176h-48V64c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144c-6.7 6.1-10.6 14.7-10.6 23.8s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2z"
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
                  d="M202.8 59.8c6.5-5.9 7-16.1 1.1-22.6s-16.1-7-22.6-1.1L24.8 178.4c-17.5 15.9-17.5 43.3 0 59.2l156.4 142.2c6.5 5.9 16.7 5.5 22.6-1.1s5.5-16.7-1.1-22.6L46.3 213.9c-3.5-3.2-3.5-8.7 0-11.8zM320 160h80c79.5 0 144 64.5 144 144 0 46.1-15.9 79.7-34 103.2 1.3-7.1 2-14.8 2-23.2 0-70.7-57.3-128-128-128h-72c-13.3 0-24 10.7-24 24v72L128 208 288 64v72c0 13.3 10.7 24 24 24zm0 160v-32h64c53 0 96 43 96 96 0 30.4-12.8 47.9-22.2 56.7-5.5 5.1-9.8 12-9.8 19.5 0 10.9 8.8 19.7 19.7 19.7 2.8 0 5.6-.6 8.1-1.9C494.5 467.9 576 417.3 576 304c0-97.2-78.8-176-176-176h-80V64c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144C99.9 190.3 96 198.9 96 208s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2z"
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
                  d="M304 128c0 8.8 7.2 16 16 16h80c88.4 0 160 71.6 160 160 0 104.2-74.6 150.7-91.8 160h-.6c-2 0-3.7-1.6-3.7-3.7 0-1.4 1-4.4 4.7-7.8 12.2-11.4 27.4-33 27.4-68.5 0-61.9-50.1-112-112-112h-64c-8.8 0-16 7.2-16 16v64c0 6.3-3.7 12-9.5 14.6s-12.5 1.5-17.2-2.7l-160-144c-3.4-3-5.3-7.4-5.3-11.9s1.9-8.9 5.3-11.9l160-144c4.7-4.2 11.4-5.3 17.2-2.7S304 57.7 304 64zm16 224v-64h64c53 0 96 43 96 96 0 30.4-12.8 47.9-22.2 56.7-5.5 5.1-9.8 12-9.8 19.5 0 10.9 8.8 19.7 19.7 19.7 2.8 0 5.6-.6 8.1-1.9C494.5 467.9 576 417.3 576 304c0-97.2-78.8-176-176-176h-80V64c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144C99.9 190.3 96 198.9 96 208s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2M197.4 53.9c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5L30.2 184.3c-14 12.7-14 34.7 0 47.4l156.4 142.2c3.3 3 8.3 2.7 11.3-.5s2.7-8.3-.5-11.3L40.9 219.8c-7-6.3-7-17.3 0-23.7z"
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
                  d="M205 34.8c11.5 5.1 19 16.6 19 29.2v43.3l-85.4 76.9c-6.7 6.1-10.6 14.7-10.6 23.8s3.9 17.7 10.6 23.8l85.4 76.9V352c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M333 34.8c11.5 5.1 19 16.6 19 29.2v64h48c97.2 0 176 78.8 176 176 0 113.3-81.5 163.9-100.2 174.1-2.5 1.4-5.3 1.9-8.1 1.9-10.9 0-19.7-8.9-19.7-19.7 0-7.5 4.3-14.4 9.8-19.5 9.4-8.8 22.2-26.4 22.2-56.7 0-53-43-96-96-96h-32v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144c-6.7-6.1-10.6-14.7-10.6-23.8s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"
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
