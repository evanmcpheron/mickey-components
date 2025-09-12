import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BracketsRoundIcon: React.FC<
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
                  d="M145.8 90.6c14.7-9.8 18.7-29.7 8.9-44.4s-29.7-18.7-44.4-8.9C71.9 62.9 0 140.2 0 256s71.9 193 110.2 218.6c14.7 9.8 34.6 5.8 44.4-8.9s5.8-34.6-8.9-44.4C120.1 404.3 64 345 64 256s56.1-148.3 81.8-165.4m220.5 0C391.9 107.7 448 167 448 256s-56.1 148.3-81.8 165.4c-14.7 9.8-18.7 29.7-8.9 44.4s29.7 18.7 44.4 8.9C440.1 449.1 512 371.8 512 256S440.1 62.9 401.8 37.4c-14.7-9.8-34.6-5.8-44.4 8.9s-5.8 34.6 8.9 44.4z"
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
                  d="M148.3 76.6c11.4-6.8 15.1-21.5 8.3-32.9s-21.5-15.1-32.9-8.3C82 60.2 0 137.9 0 256s82 195.8 123.7 220.6c11.4 6.8 26.1 3 32.9-8.3s3-26.1-8.3-32.9C115.3 415.7 48 351.3 48 256S115.3 96.3 148.3 76.6m215.4 0C396.7 96.3 464 160.7 464 256s-67.3 159.7-100.3 179.4c-11.4 6.8-15.1 21.5-8.3 32.9s21.5 15.1 32.9 8.3C430 451.8 512 374.1 512 256S430 60.2 388.3 35.4c-11.4-6.8-26.1-3-32.9 8.3s-3 26.1 8.3 32.9"
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
                  d="M151.6 62.1C111.5 83.8 32 153.4 32 256s79.5 172.2 119.6 193.9c7.8 4.2 10.7 13.9 6.4 21.7s-13.9 10.7-21.7 6.4C91.2 453.6 0 375.3 0 256S91.2 58.4 136.4 33.9c7.8-4.2 17.5-1.3 21.7 6.4s1.3 17.5-6.4 21.7zm208.8 0c-7.8-4.2-10.7-13.9-6.4-21.7s13.9-10.7 21.7-6.4C420.8 58.4 512 136.7 512 256s-91.2 197.6-136.4 222.1c-7.8 4.2-17.5 1.3-21.7-6.4s-1.3-17.5 6.4-21.7C400.5 428.2 480 358.6 480 256S400.5 83.8 360.4 62.1"
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
                  d="M356.4 47.2c-4-2-5.6-6.8-3.6-10.7s6.8-5.6 10.7-3.6c24.9 12.5 61.8 38.3 92.6 75.9C487 146.3 512 196.1 512 256s-25 109.7-55.8 147.3c-30.8 37.5-67.7 63.4-92.6 75.9-4 2-8.8.4-10.7-3.6s-.4-8.8 3.6-10.7c23.1-11.5 58.2-36.1 87.4-71.7C473 357.5 496 311.3 496 256s-23-101.5-52.2-137.1c-29.2-35.7-64.3-60.2-87.4-71.7m-200.8 0c-23.1 11.5-58.2 36.1-87.4 71.7S16 200.7 16 256s23 101.5 52.2 137.1c29.2 35.7 64.3 60.2 87.4 71.7 4 2 5.6 6.8 3.6 10.7s-6.8 5.6-10.7 3.6c-24.9-12.5-61.8-38.3-92.6-75.9C25 365.7 0 315.9 0 256s25-109.7 55.8-147.3c30.8-37.5 67.7-63.4 92.6-75.9 4-2 8.8-.4 10.7 3.6s.4 8.8-3.6 10.7z"
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
                  d="M357.4 46.2c-9.8 14.7-5.8 34.6 8.9 44.4C391.9 107.7 448 167 448 256s-56.1 148.3-81.8 165.4c-14.7 9.8-18.7 29.7-8.9 44.4s29.7 18.7 44.4 8.9C440.1 449 512 371.8 512 256S440.1 62.9 401.8 37.4c-14.7-9.8-34.6-5.8-44.4 8.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M154.6 46.2c9.8 14.7 5.8 34.6-8.9 44.4C120.1 107.7 64 167 64 256s56.1 148.3 81.8 165.4c14.7 9.8 18.7 29.7 8.9 44.4s-29.7 18.7-44.4 8.9C71.9 449 0 371.8 0 256S71.9 62.9 110.2 37.4c14.7-9.8 34.6-5.8 44.4 8.9z"
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
