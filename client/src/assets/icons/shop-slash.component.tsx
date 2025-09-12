import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShopSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-54.8-43V224h-64v152L384 275.7V224h-64v1.5L277.2 192h326c20.3 0 36.8-16.5 36.8-36.8 0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4l-7.7 11.4zm-2 186.9h85L21 112.5 6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192M320 384H128V224H64v240c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-65.5l-64-50.4zm224 128h-.3.6z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-54.8-43V224h25.8c21.1 0 38.2-17.1 38.2-38.2 0-6.4-1.6-12.7-4.7-18.3L557.6 25c-8.4-15.4-24.5-25-42.1-25h-391c-17.6 0-33.7 9.6-42.1 25l-5.5 10zM115.2 65l9.3-17h391l69.8 128H256.8zm202.9 159H528v164.5zM0 185.8C0 206.9 17.1 224 38.2 224H64v248c0 22.1 17.9 40 40 40h240c22.1 0 40-17.9 40-40v-73.5L284.3 320H112v-96h50.5l-60.9-48H54.7l14.1-25.8L30.5 120 4.7 167.4c-3.1 5.7-4.7 12-4.7 18.4M552 512h-.2.5-.2zm-440-48v-96h224v96z"
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
                  d="M0 185.8C0 206.9 17.1 224 38.2 224H64v240c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-75.9L338.3 352H96V224h80.2l-40.5-32H38.2c-3.4 0-6.2-2.8-6.2-6.2 0-1 .3-2.1.8-3l27.4-50.3-25.5-20.2-30 55.1c-3.1 5.7-4.7 12-4.7 18.4M139.6 32h376c5.9 0 11.2 3.2 14 8.3l77.7 142.4c.5.9.8 1.9.8 3 0 3.4-2.8 6.2-6.2 6.2H342.2l40.5 32H544v127.4l32 25.3V224h25.8c21.1 0 38.2-17.1 38.2-38.2 0-6.4-1.6-12.7-4.7-18.3L557.6 25c-8.4-15.4-24.5-25-42.1-25h-391c-7 0-13.8 1.5-20 4.3l35 27.7zM96 464v-80h256v80c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M4.7 167.4c-3.1 5.7-4.7 12-4.7 18.4C0 206.9 17.1 224 38.2 224H64v240c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-65.7l-16-12.6V464c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32V224h83.3L143 208H38.2C26 208 16 198 16 185.8c0-3.7.9-7.4 2.7-10.7l24.9-45.6-12.8-10-26.2 48zM113.5 1.3 132.2 16h383.3c11.7 0 22.5 6.4 28.1 16.7l77.7 142.4c1.8 3.3 2.7 6.9 2.7 10.7 0 12.3-10 22.2-22.2 22.2H375.4l20.3 16H560v129.7l16 12.6V224h25.8c21.1 0 38.2-17.1 38.2-38.2 0-6.4-1.6-12.7-4.7-18.3L557.6 25c-8.4-15.4-24.5-25-42.1-25h-391c-3.7 0-7.4.4-11 1.3M512 315.8V256c0-4.4-3.6-8-8-8s-8 3.6-8 8v47.2zm-208 19.3V360c0 4.4-3.6 8-8 8H152c-4.4 0-8-3.6-8-8V256c0-4.4-3.6-8-8-8s-8 3.6-8 8v104c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24v-12.3zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M121.8 192 21 112.5 6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM384 398.5l-64-50.4V384H128V224H64v240c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48zM543.7 512h.6zM320 225.5l64 50.2V224h-64zM512 376l64 50.2V224h-64zM74.1 32.8 277.2 192h326c20.3 0 36.8-16.5 36.8-36.8 0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4z"
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
