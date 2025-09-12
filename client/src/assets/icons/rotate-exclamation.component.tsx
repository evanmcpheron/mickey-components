import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RotateExclamationIcon: React.FC<
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
                  d="m74.9 192-28.8-13.8c-7.6 15.9-.9 35 15 42.7s35 .9 42.7-15v-.1l.2-.3.7-1.5c.6-1.3 1.6-3.2 2.8-5.6 2.5-4.8 5.9-11.4 10-18.5 8.7-15.3 18.2-29.8 25.3-36.9 62.5-62.5 163.8-62.5 226.3 0l17.2 17H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h112c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2l-17.6-17.6c-87.5-87.5-229.3-87.5-316.8 0-13.8 13.8-27 35.2-35.7 50.6-4.6 8.2-8.6 15.6-11.3 21-1.4 2.7-2.5 4.9-3.3 6.5l-.9 1.8-.2.5-.1.2L75 192zM280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm-24 232a32 32 0 1 0 0-64 32 32 0 1 0 0 64M48 464c17.7 0 32-14.3 32-32v-35.2l17.6 17.6c87.5 87.5 229.3 87.5 316.8 0 24.4-24.4 42.1-53.1 52.9-83.7 5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8-62.5 62.5-163.8 62.5-226.3 0L125.7 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48c-17.7 0-32 14.3-32 32v112c0 17.7 14.3 32 32 32"
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
                  d="M256 80c-72.7 0-135.2 44.1-162 107.1-5.2 12.2-19.3 17.9-31.5 12.7s-17.9-19.3-12.7-31.5C83.9 88.2 163.4 32 256 32c52.5 0 102.8 20.8 139.9 57.9l52.1 52.2V88c0-13.3 10.7-24 24-24s24 10.7 24 24v112c0 13.3-10.7 24-24 24H360c-13.3 0-24-10.7-24-24s10.7-24 24-24h54.1L362 123.9C333.8 95.8 295.7 80 256 80m193.4 232.6c12.2 5.2 17.8 19.3 12.6 31.5C427.8 424 348.5 480 256 480c-52.5 0-102.8-20.8-139.9-57.9L64 369.9V424c0 13.3-10.7 24-24 24s-24-10.7-24-24V312c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H97.9l52.1 52.1c28.2 28.1 66.3 43.9 106 43.9 72.6 0 135-43.9 161.9-106.8 5.2-12.2 19.3-17.8 31.5-12.6M256 128c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24m-32 224a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M403.5 133.1C368.3 90.9 315.3 64 256 64c-90.8 0-166.9 63-186.9 147.7-2 8.6-10.6 13.9-19.2 11.9S36 213 38 204.4C61.3 105.5 150.1 32 256 32c69.2 0 131 31.4 172.1 80.6l35.9 42.3V96c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h55.9l-36.3-42.8zM272 144v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16m-16 184a24 24 0 1 1 0 48 24 24 0 1 1 0-48M32 432c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H72.1l36.3 42.8.1.1C143.7 421.1 196.7 448 256 448c90.8 0 166.9-63 186.9-147.7 2-8.6 10.7-13.9 19.3-11.9s13.9 10.6 11.9 19.2C450.7 406.5 361.9 480 256 480c-69.2 0-131-31.4-172.1-80.6L48 357.1V416c0 8.8-7.2 16-16 16"
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
                  d="M256 48c65.3 0 123.6 30.1 161.7 77.2L456 176h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h96c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8s-8 3.6-8 8v72.1l-33.6-44.6-.2-.2C389.2 64.5 326.4 32 256 32 155.4 32 70.3 98.3 42 189.6c-1.3 4.2 1.1 8.7 5.3 10s8.7-1.1 10-5.3C83.5 109.6 162.6 48 256 48m8 88c0-4.4-3.6-8-8-8s-8 3.6-8 8v160c0 4.4 3.6 8 8 8s8-3.6 8-8zm-8 232a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 424c0 4.4 3.6 8 8 8s8-3.6 8-8v-74.2l35.2 46.8.2.2c41 50.7 103.8 83.2 174.2 83.2 100.6 0 185.7-66.3 214-157.6 1.3-4.2-1.1-8.7-5.3-10s-8.7 1.1-10 5.3C430.1 402.4 351 464 257.6 464c-65.3 0-123.6-30.1-161.7-77.2L57.7 336H136c4.4 0 8-3.6 8-8s-3.6-8-8-8H40c-4.4 0-8 3.6-8 8z"
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
                  d="M432 117.4C391 65.4 327.4 32 256 32 158.4 32 75.5 94.4 44.8 181.3c-5.9 16.7 2.8 34.9 19.5 40.8s34.9-2.8 40.8-19.5C127.1 140.5 186.4 96 256 96c52.3 0 98.8 25.1 128 64h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h112c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32zm35.2 213.2c5.9-16.7-2.8-34.9-19.5-40.8s-34.9 2.8-40.8 19.5C384.9 371.5 325.6 416 256 416c-52.3 0-98.8-25.1-128-64h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H48c-17.7 0-32 14.3-32 32v112c0 17.7 14.3 32 32 32s32-14.3 32-32v-37.4c41 52 104.6 85.4 176 85.4 97.6 0 180.5-62.4 211.2-149.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm-24 232a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
