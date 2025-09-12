import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FileSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512 376V160H384c-17.7 0-32-14.3-32-32V0H192c-35.3 0-64 28.7-64 64v11zm459 483.1L128 196.8V448c0 35.3 28.7 64 64 64h256c20.1 0 38.1-9.3 49.8-23.8M512 128 384 0v128z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512 376V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C390.7 6.7 374.5 0 357.5 0H192c-35.3 0-64 28.7-64 64v11zM176 112.6V64c0-8.8 7.2-16 16-16h160v80c0 17.7 14.3 32 32 32h80v178.4zm321.8 375.6-37.7-29.7c-2.9 3.4-7.3 5.5-12.1 5.5H192c-8.8 0-16-7.2-16-16V234.7l-48-37.8V448c0 35.3 28.7 64 64 64h256c20.1 0 38.1-9.3 49.8-23.8"
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
                  d="M512 163.9c0-12.7-5.1-24.9-14.1-33.9L382.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-23 0-43.2 12.2-54.5 30.4L163 50.5c5.1-10.9 16.2-18.5 29-18.5h128v112c0 26.5 21.5 48 48 48h112v108.8l32 25.2zM160 448V211.2L128 186v262c0 35.3 28.7 64 64 64h256c23 0 43.2-12.2 54.5-30.4L477 461.5c-5.1 10.9-16.2 18.5-29 18.5H192c-17.7 0-32-14.3-32-32m319.5-288H368c-8.8 0-16-7.2-16-16V32.5c2.8.7 5.4 2.1 7.4 4.2l115.9 115.9c2.1 2.1 3.5 4.6 4.2 7.4M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M512 179.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-20.1 0-38.1 9.3-49.8 23.9l12.6 9.9C163.5 22.9 176.9 16 192 16h140.1c1.3 0 2.6.1 3.9.2V136c0 22.1 17.9 40 40 40h119.8c.2 1.3.2 2.6.2 3.9v123.3l16 12.6v-136zM144 448V208.8l-16-12.6V448c0 35.3 28.7 64 64 64h256c20.1 0 38.1-9.3 49.8-23.9l-12.6-9.9c-8.7 10.9-22.1 17.8-37.2 17.8H192c-26.5 0-48-21.5-48-48m345.1-288H376c-13.3 0-24-10.7-24-24V22.9q1.5 1.2 2.7 2.4l131.9 132q1.35 1.35 2.4 2.7zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M0 448V96l384 302.5V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m384-172.3L38.8 5.1C46.6 1.8 55.1 0 64 0h160v128c0 17.7 14.3 32 32 32h128zM256 0l128 128H256z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
