import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BlenderIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h406.1c21.1 0 36.4 20.1 30.9 40.4L494.5 64H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h149.8l-17.5 64H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h123.6l-17.5 64H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h97.5L416 352H160l-8.7-96H64c-35.3 0-64-28.7-64-64zm145.5 128L133.8 64H64v128zM144 384h288c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48m144 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M0 80C0 35.8 35.8 0 80 0h391c20.8 0 36.1 19.6 31 39.8l-76.4 305.7C457.8 361 480 393.9 480 432v16c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64v-16c0-40.5 25.1-75.1 60.6-89.2l-7.3-86.8H80c-44.2 0-80-35.8-80-80zm144 352v16c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16v-16c0-26.5-21.5-48-48-48H192c-26.5 0-48 21.5-48 48m262.5-208H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h110.5l16-64H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h134.5l12-48H180.2l24 288h174.3zM80 48c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h65.3L132 48zm208 352a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M0 72C0 32.2 32.2 0 72 0h399c20.8 0 36.1 19.6 31 39.8l-78.9 315.6C456 365.3 480 395.9 480 432v32c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-32c0-37.8 26.2-69.5 61.5-77.9L148 240H72c-39.8 0-72-32.2-72-72zm128 360v32c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-32c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48m295-208H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h127l16-64H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h151l16-64H162.8l26.7 320H391zM72 32c-22.1 0-40 17.9-40 40v96c0 22.1 17.9 40 40 40h73.3L130.7 32zm216 376a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M64 0C28.7 0 0 28.7 0 64v112c0 35.3 28.7 64 64 64h84l9.5 114.1C122.2 362.5 96 394.2 96 432v32c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-32c0-36.1-24-66.7-56.9-76.6l79-315.6C507.1 19.6 491.8 0 471 0H64m65.4 16c0 .4 0 .9.1 1.3L146.7 224H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zm278 336.3c-2.4-.2-4.9-.3-7.4-.3H173.4l-28-336H471c10.4 0 18 9.8 15.5 19.9l-15 60.1H296c-4.4 0-8 3.6-8 8s3.6 8 8 8h171.5l-20 80H296c-4.4 0-8 3.6-8 8s3.6 8 8 8h147.5zM176 368h224c35.3 0 64 28.7 64 64v32c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32v-32c0-35.3 28.7-64 64-64m112 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M64 0C28.7 0 0 28.7 0 64v128c0 35.3 28.7 64 64 64h85.3L160 384h256l24-96H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h112l16-64H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h136l16-64H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h160l6.1-24.2C507.1 19.6 491.8 0 471 0H64m69.3 64L144 192H64V64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M336 64h160l-8 32H336c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 96h136l-8 32H336c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 96h112l-8 32H336c-8.8 0-16-7.2-16-16s7.2-16 16-16M96 432c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48zm224 16a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
