import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GunSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L412.3 297.8l20.6-57.8H464c8.5 0 16.6-3.4 22.6-9.4l22.7-22.6H576c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32h-16v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H113.9zM195.6 128H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H236.4zm142.9 112h43.4l-9.5 26.6zm-13.6 112L264 304h-3l.5-2L32 121.2V208c0 17.7 14.3 32 32 32h10c20.8 0 36.1 19.6 31 39.8L65 440.2c-2.4 9.6-.2 19.7 5.8 27.5S86.1 480 96 480h96c14.7 0 27.5-10 31-24.2L249 352z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L412.3 297.8l20.6-57.8h32.5c10.6 0 20.8-4.2 28.3-11.7l20.2-20.3H568c22.1 0 40-17.9 40-40v-64c0-22.1-17.9-40-40-40h-8v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H113.9zM175.2 112H560v48h-49.4c-10.6 0-20.8 4.2-28.3 11.7L462.1 192H277.2zm163.3 128h43.4l-9.5 26.6zM80 192v-33l-48-37.8V200c0 22.1 17.9 40 40 40h2c20.8 0 36.1 19.6 31 39.8L65 440.2c-2.4 9.6-.2 19.7 5.8 27.5S86.1 480 96 480h112c14.7 0 27.5-10 31-24.2L265 352h59.9l-91.4-72-38 152h-79l35.1-140.6c4.5-18.1 2.5-35.9-4.3-51.4h35.4l-60.9-48H80"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM473.4 240c8.5 0 16.6-3.4 22.6-9.4l22.6-22.6H576c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32h-32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H180.1l40.5 32H576v80h-57.4c-8.5 0-16.6 3.4-22.6 9.4L473.4 208H362.5l40.5 32zm-223.9 41.9L208 448H96l40.1-160.5c4.3-17 1.3-33.8-6.7-47.5h67l-40.5-32H64v-72.6l-32-25.2V208c0 17.7 14.3 32 32 32h10c20.8 0 36.1 19.6 31 39.8L65 440.2c-2.4 9.6-.2 19.7 5.8 27.5S86.1 480 96 480h112c14.7 0 27.5-10 31-24.2l38-152.1-27.5-21.7z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zM473.4 240c6.4 0 12.5-2.5 17-7l22.6-22.7c1.5-1.5 3.5-2.3 5.7-2.3H568c22.1 0 40-17.9 40-40v-64c0-22.1-17.9-40-40-40h-24V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v24H193l20.3 16H568c13.3 0 24 10.7 24 24v64c0 13.3-10.7 24-24 24h-49.4c-6.4 0-12.5 2.5-17 7L479 221.7c-1.5 1.5-3.5 2.3-5.7 2.3h-77.6l20.3 16zM48 200v-67l-16-12.6V200c0 22.1 17.9 40 40 40h2c20.8 0 36.1 19.6 31 39.8L65 440.2c-2.4 9.6-.2 19.7 5.8 27.5S86.1 480 96 480h112c14.7 0 27.5-10 31-24.2l35.9-143.6-13.8-10.9-37.6 150.6c-1.8 7.1-8.2 12.1-15.5 12.1H96c-4.9 0-9.6-2.3-12.6-6.2s-4.1-8.9-2.9-13.7l40.1-160.5c4.1-16.3-.7-32.3-10.8-43.6h73.7l-20.3-16H72c-13.3 0-24-10.7-24-24m488-56c4.4 0 8-3.6 8-8s-3.6-8-8-8H274.1l20.3 16z"
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
                  d="m412.3 297.8 20.6-57.8H464c8.5 0 16.6-3.4 22.6-9.4l22.7-22.6H576c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32h-16v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H113.9l81.7 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H236.4l102.1 80h43.4l-9.5 26.6 39.8 31.2zM324.9 352 32 121.2V208c0 17.7 14.3 32 32 32h10c20.8 0 36.1 19.6 31 39.8L65 440.2c-2.4 9.6-.2 19.7 5.8 27.5S86.1 480 96 480h96c14.7 0 27.5-10 31-24.2L249 352z"
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
