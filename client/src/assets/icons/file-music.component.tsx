import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FileMusicIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zm32 224v160c0 17.7-21.5 32-48 32s-48-14.3-48-32 21.5-32 48-32c5.6 0 11 .6 16 1.8v-74.7l-96 36V416c0 17.7-21.5 32-48 32s-48-14.3-48-32 21.5-32 48-32c5.6 0 11 .6 16 1.8V272c0-6.7 4.1-12.6 10.4-15l128-48c4.9-1.8 10.4-1.2 14.7 1.8s6.9 7.9 6.9 13.2"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h160v80c0 17.7 14.3 32 32 32h80v288c0 8.8-7.2 16-16 16zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C262.7 6.7 246.5 0 229.5 0zm240 208c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v113.8c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V299.1l96-36v74.7c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V208"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M352 448V192H240c-26.5 0-48-21.5-48-48V32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32m-.5-288c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16zM0 64C0 28.7 28.7 0 64 0h156.1C232.8 0 245 5.1 254 14.1l115.9 115.8c9 9 14.1 21.2 14.1 33.9V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm304 168c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v90.5c-5-1.6-10.4-2.5-16-2.5-26.5 0-48 19.7-48 44s21.5 44 48 44 48-19.7 48-44c0-.8 0-1.6-.1-2.5 0-.5.1-1 .1-1.5V291.1l96-36v83.4c-5-1.6-10.4-2.5-16-2.5-26.5 0-48 19.7-48 44s21.5 44 48 44 48-19.7 48-44c0-.8 0-1.6-.1-2.5 0-.5.1-1 .1-1.5zm-48 160c-11.5 0-16-7.9-16-12s4.5-12 16-12 16 7.9 16 12-4.5 12-16 12m-128 32c-11.5 0-16-7.9-16-12s4.5-12 16-12 16 7.9 16 12-4.5 12-16 12"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 496c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h140.1c1.3 0 2.6.1 3.9.2V136c0 22.1 17.9 40 40 40h119.8c.2 1.3.2 2.6.2 3.9V448c0 26.5-21.5 48-48 48zm294.6-338.7q1.35 1.35 2.4 2.7H248c-13.3 0-24-10.7-24-24V22.9q1.5 1.2 2.7 2.4zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V179.9c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1zm236.6 225.4c-2.2-1.5-4.9-1.8-7.4-.9l-128 48c-3.1 1.2-5.2 4.2-5.2 7.5v106.2c-8.5-6.3-19.7-10.2-32-10.2-26.5 0-48 17.9-48 40s21.5 40 48 40 48-17.9 48-40V285.5l112-42v110.7c-8.5-6.3-19.7-10.2-32-10.2-26.5 0-48 17.9-48 40s21.5 40 48 40 48-17.9 48-40V232c0-2.6-1.3-5.1-3.4-6.6M256 360c20.5 0 32 13.4 32 24s-11.5 24-32 24-32-13.4-32-24 11.5-24 32-24m-128 32c20.5 0 32 13.4 32 24s-11.5 24-32 24-32-13.4-32-24 11.5-24 32-24"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm288 160c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v113.8c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V315.1l96-36v74.7c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V224"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160 224 0v128c0 17.7 14.3 32 32 32zm-96 64c0-5.2-2.6-10.2-6.9-13.2s-9.8-3.7-14.7-1.8l-128 48c-6.2 2.3-10.4 8.3-10.4 15v113.8c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V315.1l96-36v74.7c-5-1.2-10.4-1.8-16-1.8-26.5 0-48 14.3-48 32s21.5 32 48 32 48-14.3 48-32V224"
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
