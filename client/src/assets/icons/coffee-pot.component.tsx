import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CoffeePotIcon: React.FC<
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
                  d="M64 128c0-17.7 14.3-32 32-32h12.8l34 84.9C95 215.9 64 272.3 64 336v8c0 55.5 34.6 99.4 55.9 121.2 9.9 10.2 23.9 14.8 38.1 14.8h260c14.2 0 28.1-4.7 38.1-14.8C477.4 443.4 512 399.5 512 344v-8c0-63.7-31-120.1-78.8-155.1l44.9-112.1c1.3-3.2 1.9-6.6 1.9-10C480 44 468 32 453.2 32H96C43 32 0 75 0 128v64c0 17.7 14.3 32 32 32s32-14.3 32-32zm65 192c5.2-41.4 30.1-76.6 65-96h188c34.9 19.4 59.8 54.6 65 96z"
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
                  d="M88 80c-22.1 0-40 17.9-40 40v80c0 13.3-10.7 24-24 24S0 213.3 0 200v-80c0-48.6 39.4-88 88-88h365.6c14.6 0 26.4 11.8 26.4 26.4 0 3.7-.8 7.3-2.3 10.7l-48.4 109c50 34.7 82.7 92.5 82.7 157.9v8c0 55.5-34.6 99.4-55.9 121.2-9.9 10.1-23.8 14.8-38.1 14.8H158c-14.2 0-28.1-4.7-38.1-14.8C98.6 443.4 64 399.5 64 344v-8c0-65.4 32.7-123.2 82.7-157.9L103.1 80zm296.8 80 35.6-80H155.6l35.6 80zm1.2 48H190c-41.8 21.6-71.7 63.1-77.1 112h350.2c-5.4-48.9-35.3-90.4-77.1-112m32.2 224H157.7h260.5"
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
                  d="M80 64c-26.5 0-48 21.5-48 48v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-44.2 35.8-80 80-80h373.6c14.6 0 26.4 11.8 26.4 26.4 0 3.7-.8 7.3-2.3 10.7l-48.4 109c50 34.7 82.7 92.5 82.7 157.9v8c0 55.5-34.6 99.4-55.9 121.2-9.9 10.1-23.8 14.8-38.1 14.8H158c-14.2 0-28.1-4.7-38.1-14.8C98.6 443.4 64 399.5 64 344v-8c0-65.4 32.7-123.2 82.7-157.9l-48.4-109c-.7-1.6-1.3-3.4-1.7-5.1zm365 0H131l49.8 112h214.4zm-29 144H160c-26.4 19.9-46.5 47.7-56.7 80h369.4c-10.1-32.3-30.2-60.1-56.7-80m63.2 112H96.8c-.5 5.3-.8 10.6-.8 16v8c0 42.6 27.2 78.8 46.8 98.8 2.7 2.8 7.7 5.2 15.2 5.2h260c7.5 0 12.5-2.4 15.2-5.2 19.6-20 46.8-56.2 46.8-98.8v-8c0-5.4-.3-10.7-.8-16"
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
                  d="M72 48c-30.9 0-56 25.1-56 56v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-39.8 32.2-72 72-72h382.1c14.3 0 25.9 11.6 25.9 25.9 0 4-.9 8-2.7 11.6L421.5 181c54.3 33.9 90.5 94.2 90.5 163 0 55.5-34.6 99.4-55.9 121.2-9.9 10.1-23.8 14.8-38.1 14.8H158c-14.2 0-28.1-4.7-38.1-14.8C98.6 443.4 64 399.5 64 344c0-69 36.4-129.5 91-163.3L97.1 50.6c-.4-.8-.6-1.7-.8-2.6zm98.4 128h235.7L463 62.3c.7-1.4 1-2.9 1-4.4 0-5.5-4.4-9.9-9.9-9.9H113.5zM416 192H160h7.2c-41.1 24.1-71.6 64.3-82.7 112h406.9c-11.1-47.7-41.6-87.9-82.7-112zm78.4 128H81.6c-1.1 7.8-1.6 15.9-1.6 24 0 49.1 30.9 89.1 51.3 110 6.3 6.5 15.8 10 26.6 10H418c10.9 0 20.3-3.6 26.6-10 20.4-20.9 51.3-60.9 51.3-110 0-8.1-.6-16.2-1.6-24z"
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
                  d="M160.4 176c-57 26.9-96.4 84.8-96.4 152v16c0 55.5 34.6 99.4 55.9 121.2 9.9 10.2 23.9 14.8 38.1 14.8h260c14.2 0 28.1-4.7 38.1-14.8C477.4 443.4 512 399.5 512 344v-16c0-67.2-39.4-125.1-96.4-152zM448 328v16c0 27.4-16.8 53.7-33.5 72h-253c-16.7-18.3-33.5-44.6-33.5-72v-16c0-57.4 46.6-104 104-104h112c57.4 0 104 46.6 104 104"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 96c-17.7 0-32 14.3-32 32v64c0 17.7-14.3 32-32 32S0 209.7 0 192v-64c0-53 43-96 96-96h358.7c14 0 25.3 11.3 25.3 25.3 0 4.4-1.1 8.7-3.3 12.5L416 176H160l-45.7-80zm352 248c0 27.4-16.8 53.7-33.5 72h-253c-16.7-18.3-33.5-44.6-33.5-72v-16c0-2.7.1-5.4.3-8h319.4c.2 2.6.3 5.3.3 8z"
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
