import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const OctagonXmarkIcon: React.FC<
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
                  d="M140.6 21.2C154.1 7.7 172.4.1 191.5.1h129c19.1 0 37.4 7.6 50.9 21.1l119.4 119.4c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.98 71.98 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4A71.98 71.98 0 0 1 .1 320.5v-129c0-19.1 7.6-37.4 21.1-50.9zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0"
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
                  d="M191.5 48.1c-6.4 0-12.5 2.5-17 7L55.1 174.5c-4.5 4.5-7 10.6-7 17v129c0 6.4 2.5 12.5 7 17l-33.9 33.9A71.98 71.98 0 0 1 .1 320.5v-129c0-19.1 7.6-37.4 21.1-50.9L140.6 21.2C154.1 7.7 172.4.1 191.5.1h129c19.1 0 37.4 7.6 50.9 21.1l119.4 119.4c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.98 71.98 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4l33.9-33.9 119.4 119.4c4.5 4.5 10.6 7 17 7h129c6.4 0 12.5-2.5 17-7l119.4-119.4c4.5-4.5 7-10.6 7-17v-129c0-6.4-2.5-12.5-7-17L337.5 55.1c-4.5-4.5-10.6-7-17-7zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9"
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
                  d="M191.5 32.1c-10.6 0-20.8 4.2-28.3 11.7L43.8 163.2c-7.5 7.5-11.7 17.7-11.7 28.3v129c0 10.6 4.2 20.8 11.7 28.3l-22.6 22.6A71.98 71.98 0 0 1 .1 320.5v-129c0-19.1 7.6-37.4 21.1-50.9L140.6 21.2C154.1 7.7 172.4.1 191.5.1h129c19.1 0 37.4 7.6 50.9 21.1l119.4 119.4c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.98 71.98 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4l22.6-22.6 119.4 119.4c7.5 7.5 17.7 11.7 28.3 11.7h129c10.6 0 20.8-4.2 28.3-11.7l119.4-119.4c7.5-7.5 11.7-17.7 11.7-28.3v-129c0-10.6-4.2-20.8-11.7-28.3L348.8 43.8c-7.5-7.5-17.7-11.7-28.3-11.7zm-10.8 148.6c6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l52.7-52.7-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6"
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
                  d="M191.5 16.1c-14.9 0-29.1 5.9-39.6 16.4L32.5 151.9a56.1 56.1 0 0 0-16.4 39.6v129c0 14.9 5.9 29.1 16.4 39.6l119.4 119.4c10.5 10.5 24.7 16.4 39.6 16.4h129c14.9 0 29.1-5.9 39.6-16.4l119.4-119.4c10.5-10.5 16.4-24.7 16.4-39.6v-129c0-14.9-5.9-29.1-16.4-39.6L360.1 32.5a56.1 56.1 0 0 0-39.6-16.4zm-50.9 5.1C154.1 7.7 172.4.1 191.5.1h129c19.1 0 37.4 7.6 50.9 21.1l119.4 119.4c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.98 71.98 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4A71.98 71.98 0 0 1 .1 320.5v-129c0-19.1 7.6-37.4 21.1-50.9zm37.7 157.2c3.1-3.1 8.2-3.1 11.3 0l66.4 66.3 66.3-66.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L267.3 256l66.3 66.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L256 267.3l-66.3 66.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l66.3-66.3-66.3-66.3c-3.1-3.1-3.1-8.2 0-11.3z"
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
                  d="M140.6 21.2C154.1 7.7 172.4.1 191.5.1h129c19.1 0 37.4 7.6 50.9 21.1l119.4 119.4c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.98 71.98 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4A71.98 71.98 0 0 1 .1 320.5v-129c0-19.1 7.6-37.4 21.1-50.9zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M209 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47z"
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
