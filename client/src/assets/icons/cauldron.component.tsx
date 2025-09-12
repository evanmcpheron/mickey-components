import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CauldronIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m112 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96M35.1 224C16.5 257 0 297.1 0 334.4c0 37.4 11.9 69.4 32 95.5V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-15c40.4 25.5 91.8 39 144 39s103.6-13.5 144-39v15c0 13.3 10.7 24 24 24s24-10.7 24-24v-58.1c20.1-26.1 32-58.1 32-95.5 0-37.3-16.5-77.4-35.1-110.4h3.1c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m112 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96M74.2 252.5c9.6-17.7 20.1-33.2 28.6-44.5h242.4c8.5 11.4 19 26.9 28.6 44.5 15.9 29.2 26.2 58.5 26.2 81.9 0 39.2-18.3 70-49.4 92.5-32.3 23.3-78 37.1-126.6 37.1s-94.3-13.8-126.6-37.1C66.3 404.4 48 373.6 48 334.4c0-23.3 10.3-52.6 26.2-81.9M44.6 208C22.5 243.4 0 290.8 0 334.4c0 37.4 11.9 69.4 32 95.5V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-15c40.4 25.5 91.8 39 144 39s103.6-13.5 144-39v15c0 13.3 10.7 24 24 24s24-10.7 24-24v-58.1c20.1-26.1 32-58.1 32-95.5 0-43.6-22.5-91-44.6-126.4H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m96 24a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0M60.1 244.9C72 223 85.2 204.3 94.9 192h258.2c9.7 12.3 22.9 31 34.8 52.9 16.4 30.1 28.1 62.2 28.1 89.5 0 45.1-21.4 80.4-56.1 105.5C324.5 465.5 275.4 480 224 480s-100.5-14.5-135.9-40.1C53.4 414.8 32 379.5 32 334.4c0-27.3 11.7-59.4 28.1-89.5M55.2 192C30.2 228.1 0 283.9 0 334.4c0 37.4 11.9 69.4 32 95.5V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-34.2c42.3 32.8 100.6 50.2 160 50.2s117.7-17.4 160-50.2V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-66.1c20.1-26.1 32-58.1 32-95.5 0-50.5-30.2-106.3-55.2-142.4H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m48 48a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0M46.1 237.2c14.4-26.5 30.7-48.7 41.2-61.2h273.4c10.5 12.5 26.8 34.7 41.2 61.2 16.9 31 30.1 65.9 30.1 97.2 0 50.9-24.5 90.8-62.7 118.4C330.7 480.7 278.1 496 224 496s-106.7-15.3-145.3-43.2c-18.3-13.2-33.4-29.2-44.2-47.9L32 400v.5c-10.3-19.3-16-41.4-16-66.1 0-31.2 13.2-66.2 30.1-97.2M0 334.4c0 37.4 11.9 69.4 32 95.5V504c0 4.4 3.6 8 8 8s8-3.6 8-8v-56.1C90.7 489.6 156.7 512 224 512s133.3-22.4 176-64.1V504c0 4.4 3.6 8 8 8s8-3.6 8-8v-74.1c20.1-26.1 32-58.1 32-95.5 0-58.8-40.9-124.6-66.8-158.4H440c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h58.8C40.9 209.8 0 275.6 0 334.4"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 128v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM272 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M35.1 224C16.5 257 0 297.1 0 334.4c0 37.4 11.9 69.4 32 95.5V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-15c40.4 25.5 91.8 39 144 39s103.6-13.5 144-39v15c0 13.3 10.7 24 24 24s24-10.7 24-24v-58.1c20.1-26.1 32-58.1 32-95.5 0-37.3-16.5-77.4-35.1-110.4h3.1c17.7 0 32-14.3 32-32s-14.3-32-32-32H160v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
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
