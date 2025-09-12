import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FilterListIcon: React.FC<
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
                  d="M40 64C24.2 64 9.9 73.3 3.5 87.7s-3.8 31.3 6.8 43L112 243.8V368c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3S240 428.1 240 416V243.8l101.7-113c10.6-11.7 13.2-28.6 6.8-43S327.8 64 312 64zm312 320c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32zm-32-128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H352c-17.7 0-32 14.3-32 32m96-192c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M41.2 64C18.5 64 0 82.5 0 105.2c0 10.4 3.9 20.4 11 28.1l93 100.1v126c0 13.4 6.7 26 18 33.4l75.5 49.8c5.3 3.5 11.6 5.4 18 5.4 18 0 32.6-14.6 32.6-32.6v-182l93-100.1c7.1-7.6 11-17.6 11-28.1C352 82.5 333.5 64 310.8 64zm104.4 143.7L56.8 112h238.4l-88.8 95.7c-4.1 4.4-6.4 10.3-6.4 16.3v162.8l-48-31.7V224c0-6.1-2.3-11.9-6.4-16.3M344 392c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-24-136c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H344c-13.3 0-24 10.7-24 24m88-184c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M27.6 64C12.4 64 0 76.4 0 91.6c0 6.7 2.4 13.2 6.8 18.2L112 230v130c0 10 4.7 19.5 12.7 25.5l76.2 57.5c4.2 3.2 9.4 4.9 14.7 4.9 13.5 0 24.4-10.9 24.4-24.4V230l105.2-120.2c4.4-5 6.8-11.5 6.8-18.2 0-15.2-12.4-27.6-27.6-27.6zM140 213.5 37.3 96h277.4L212 213.5c-2.6 2.9-4 6.7-4 10.5v184.3L144 360V224c0-3.9-1.4-7.6-4-10.5M336 400c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-16-144c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H336c-8.8 0-16 7.2-16 16m80-176c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M25.4 64C11.4 64 0 75.4 0 89.4c0 6.2 2.2 12.1 6.3 16.8L112 227v141c0 7.5 3.5 14.6 9.5 19.2l73 55.1c4.9 3.7 10.9 5.7 17.1 5.7 15.7 0 28.4-12.7 28.4-28.4V227l105.7-120.8c4.1-4.6 6.3-10.6 6.3-16.8 0-14-11.4-25.4-25.4-25.4zM16 89.4c0-5.2 4.2-9.4 9.4-9.4h301.2c5.2 0 9.4 4.2 9.4 9.4 0 2.3-.8 4.5-2.3 6.2L226 218.7c-1.3 1.5-2 3.3-2 5.3v195.6c0 6.8-5.5 12.4-12.4 12.4-2.7 0-5.3-.9-7.5-2.5l-73-55.1c-2-1.5-3.2-3.9-3.2-6.4V224c0-1.9-.7-3.8-2-5.3L18.3 95.7C16.8 94 16 91.8 16 89.5zM328 400c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-8-152c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H328c-4.4 0-8 3.6-8 8m72-168c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M3.5 87.7C9.9 73.3 24.2 64 40 64h272c15.8 0 30.1 9.3 36.5 23.7s3.8 31.3-6.8 43L240 243.8V416c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V243.8l-101.7-113C-.3 119-3 102.2 3.5 87.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M416 64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32m-96 192c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-17.7 0-32-14.3-32-32"
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
