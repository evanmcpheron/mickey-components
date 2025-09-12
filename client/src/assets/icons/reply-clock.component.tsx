import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ReplyClockIcon: React.FC<
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
                  d="M352 144a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32V80c0-8.8-7.2-16-16-16m0 256c5.1 0 10.2-.2 15.2-.6.5 5.5.8 11 .8 16.6 0 113.3-81.5 163.9-100.2 174.1-2.5 1.4-5.3 1.9-8.1 1.9-10.9 0-19.7-8.9-19.7-19.7 0-7.5 4.3-14.4 9.8-19.5 9.4-8.8 22.2-26.4 22.2-56.7 0-53-43-96-96-96h-96v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 257.7 0 249.1 0 240s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4s19 16.6 19 29.2v64h96.7c8.1 89.7 83.5 160 175.3 160"
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
                  d="M640 144a144 144 0 1 0-288 0 144 144 0 1 0 288 0M496 64c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16m16 272c0-5.6-.3-11.2-.8-16.6-5 .4-10.1.6-15.2.6-11.4 0-22.6-1.1-33.4-3.2.9 6.2 1.4 12.6 1.4 19.2 0 15.3-1.9 29.1-5.2 41.5C442 316.7 386.2 272 320 272H200c-13.3 0-24 10.7-24 24v52.1L55.9 240 176 131.9V184c0 13.3 10.7 24 24 24h132c-5.9-15.1-9.8-31.2-11.3-48H224V96c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144C3.9 222.3 0 230.9 0 240s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2v-64h96c53 0 96 43 96 96 0 17.3-4.2 30.5-9.5 40.2-1.6 2.9-3.3 5.5-5 7.9-2.6 3.5-5.3 6.4-7.7 8.6-.5.5-1 .9-1.4 1.4-4.8 4.9-8.3 11.3-8.3 18.1 0 10.9 8.8 19.7 19.7 19.7 2.8 0 5.6-.6 8.1-1.9 2.6-1.4 6.3-3.5 10.8-6.5 2.7-1.8 5.7-3.8 8.9-6.2q5.55-4.05 11.7-9.3c30.1-25.8 68.7-74.1 68.7-152"
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
                  d="M496 32a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-224c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32V80c0-8.8-7.2-16-16-16m16 272c0-5.6-.3-11.2-.8-16.6-5 .4-10.1.6-15.2.6-5.7 0-11.4-.3-17-.8.6 5.5 1 11.1 1 16.8 0 46.1-15.9 79.7-34 103.2 1.3-7.1 2-14.8 2-23.2 0-70.7-57.3-128-128-128H216c-13.3 0-24 10.7-24 24v72L32 240 192 96v72c0 13.3 10.7 24 24 24h110.6c-2.9-10.3-4.9-21-5.9-32H224V96c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144C3.9 222.3 0 230.9 0 240s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2v-64h96c53 0 96 43 96 96 0 30.4-12.8 47.9-22.2 56.7-5.5 5.1-9.8 12-9.8 19.5 0 10.9 8.8 19.7 19.7 19.7 2.8 0 5.6-.6 8.1-1.9C430.5 499.9 512 449.3 512 336"
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
                  d="M496 16a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-224c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48V72c0-4.4-3.6-8-8-8m16 272c0-5.6-.3-11.2-.8-16.6-5 .4-10.1.6-15.2.6h-.8c.5 5.3.8 10.6.8 16 0 104.2-74.6 150.7-91.8 160h-.6c-2 0-3.7-1.6-3.7-3.7 0-1.4 1-4.4 4.7-7.8 12.2-11.4 27.4-33 27.4-68.5 0-61.9-50.1-112-112-112h-96c-8.8 0-16 7.2-16 16v64c0 6.3-3.7 12-9.5 14.6s-12.5 1.5-17.2-2.7l-160-144c-3.4-3-5.3-7.4-5.3-11.9s1.9-8.9 5.3-11.9l160-144c4.7-4.2 11.4-5.3 17.2-2.7S208 89.7 208 96v64c0 8.8 7.2 16 16 16h98.9c-1-5.3-1.7-10.6-2.2-16H224V96c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144C3.9 222.3 0 230.9 0 240s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2v-64h96c53 0 96 43 96 96 0 30.4-12.8 47.9-22.2 56.7-5.5 5.1-9.8 12-9.8 19.5 0 10.9 8.8 19.7 19.7 19.7 2.8 0 5.6-.6 8.1-1.9C430.5 499.9 512 449.3 512 336"
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
                  d="M511.2 319.4c-5 .4-10.1.6-15.2.6-91.8 0-167.2-70.3-175.3-160H224V96c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144C3.9 222.3 0 230.9 0 240s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2v-64h96c53 0 96 43 96 96 0 30.4-12.8 47.9-22.2 56.7-5.5 5.1-9.8 12-9.8 19.5 0 10.9 8.8 19.7 19.7 19.7 2.8 0 5.6-.6 8.1-1.9C430.5 499.9 512 449.3 512 336c0-5.6-.3-11.2-.8-16.6"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 288a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
