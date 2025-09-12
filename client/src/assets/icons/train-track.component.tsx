import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrainTrackIcon: React.FC<
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
                  d="M222.4 74.1c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2L147.6 96H112c-17.7 0-32 14.3-32 32s14.3 32 32 32h14.3L105 224H72c-17.7 0-32 14.3-32 32s14.3 32 32 32h11.6l-21.3 64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h8.9l-7.3 21.9c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l14-42.1h359.3l14 42.1c5.6 16.8 23.7 25.8 40.5 20.2s25.8-23.7 20.2-40.5l-7.2-21.9h8.9c17.7 0 32-14.3 32-32s-14.3-32-32-32h-30.3l-21.3-64H504c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32.9l-21.3-64H464c17.7 0 32-14.3 32-32s-14.3-32-32-32h-35.6l-14-42.1c-5.6-16.8-23.7-25.8-40.5-20.2s-25.8 23.7-20.2 40.5l7.2 21.8H215.1zM193.7 160h188.6l21.3 64H172.4zm252.6 192H129.7l21.3-64h273.9l21.3 64z"
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
                  d="M222.6 64.1c4.5-12.5-2-26.2-14.5-30.7s-26.2 2-30.7 14.5L160.1 96H112c-13.3 0-24 10.7-24 24s10.7 24 24 24h30.8L114 224H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h24.7l-28.8 80H32c-13.3 0-24 10.7-24 24s10.7 24 24 24h18.7l-17.3 47.9c-4.5 12.5 2 26.2 14.5 30.7s26.2-2 30.7-14.5l23.1-64.1h372.6l23.1 64.1c4.5 12.5 18.2 18.9 30.7 14.5s18.9-18.2 14.5-30.7L525.3 400H544c13.3 0 24-10.7 24-24s-10.7-24-24-24h-35.9l-28.8-80H504c13.3 0 24-10.7 24-24s-10.7-24-24-24h-42l-28.8-80H464c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48.1l-17.3-48.1c-4.5-12.5-18.2-18.9-30.7-14.5S349 51.6 353.4 64.1L364.9 96H211.1zM193.8 144h188.4l28.8 80H165zm263.3 208H118.9l28.8-80h280.6z"
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
                  d="M207.1 53.2c2.9-8.4-1.5-17.5-9.9-20.4s-17.5 1.5-20.4 9.9L158.5 96H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h35.4l-33.2 96H72c-8.8 0-16 7.2-16 16s7.2 16 16 16h31.1l-33.3 96H32c-8.8 0-16 7.2-16 16s7.2 16 16 16h26.8l-25.9 74.8c-2.9 8.3 1.5 17.5 9.9 20.4s17.5-1.5 20.4-9.9L92.6 384h390.8l29.5 85.2c2.9 8.4 12 12.8 20.4 9.9s12.8-12 9.9-20.4l-26-74.7H544c8.8 0 16-7.2 16-16s-7.2-16-16-16h-37.8L473 256h31c8.8 0 16-7.2 16-16s-7.2-16-16-16h-42.1l-33.2-96H464c8.8 0 16-7.2 16-16s-7.2-16-16-16h-46.5l-18.4-53.2c-2.9-8.4-12-12.8-20.4-9.9s-12.8 12-9.9 20.4L383.7 96H192.3zM181.2 128h213.6l33.2 96H148zm291.1 224H103.7l33.2-96h302.2z"
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
                  d="M191.6 42.5c1.4-4.2-.9-8.7-5.1-10.1s-8.7.9-10.1 5.1L156.9 96H112c-4.4 0-8 3.6-8 8s3.6 8 8 8h39.6l-37.4 112H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h36.9L71.6 352H32c-4.4 0-8 3.6-8 8s3.6 8 8 8h34.2L32.4 469.5c-1.4 4.2.9 8.7 5.1 10.1s8.7-.9 10.1-5.1L83.1 368h409.8l35.5 106.5c1.4 4.2 5.9 6.5 10.1 5.1s6.5-5.9 5.1-10.1L509.8 368H544c4.4 0 8-3.6 8-8s-3.6-8-8-8h-39.6l-37.3-112H504c4.4 0 8-3.6 8-8s-3.6-8-8-8h-42.2l-37.4-112H464c4.4 0 8-3.6 8-8s-3.6-8-8-8h-44.9l-19.5-58.5c-1.4-4.2-5.9-6.5-10.1-5.1s-6.5 5.9-5.1 10.1L402.2 96H173.8zM168.4 112h239.2l37.3 112H131.1zm319.2 240H88.4l37.3-112h324.5l37.3 112z"
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
                  d="m147.6 96-21.3 64H112c-17.7 0-32-14.3-32-32s14.3-32 32-32zm-42.7 128-21.3 64H72c-17.7 0-32-14.3-32-32s14.3-32 32-32zm46.1 64 21.3-64h231.3l21.3 64H151.1zm-88.7 64-21.4 64H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm46.1 64 21.3-64h316.6l21.3 64zm426.7 0-21.3-64H544c17.7 0 32 14.3 32 32s-14.3 32-32 32zm-42.7-128-21.3-64H504c17.7 0 32 14.3 32 32s-14.3 32-32 32zm-42.7-128-21.3-64H464c17.7 0 32 14.3 32 32s-14.3 32-32 32zm-88.8-64 21.3 64H193.7L215 96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M202.1 33.6c16.8 5.6 25.8 23.7 20.2 40.5l-128 384c-5.6 16.8-23.7 25.8-40.5 20.2S28 454.6 33.6 437.8l128-384c5.6-16.8 23.7-25.8 40.5-20.2m171.8 0c16.8-5.6 34.9 3.5 40.5 20.2l128 384c5.6 16.8-3.5 34.9-20.2 40.5s-34.9-3.5-40.5-20.2l-128-384c-5.6-16.8 3.5-34.9 20.2-40.5"
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
