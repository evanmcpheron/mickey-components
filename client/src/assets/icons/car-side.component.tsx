import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CarSideIcon: React.FC<
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
                  d="M171.3 96H224v96H111.3l30.4-75.9C146.5 104 158.2 96 171.3 96M272 192V96h81.2c9.7 0 18.9 4.4 25 12l67.2 84zm256.2 1-100-125c-18.2-22.8-45.8-36-75-36H171.3C132 32 96.7 55.9 82.2 92.3L40.6 196.4C16.8 205.8 0 228.9 0 256v112c0 17.7 14.3 32 32 32h33.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80h130.6c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32v-48c0-65.2-48.8-119-111.8-127m-93.5 175a48 48 0 1 1 90.5 32 48 48 0 1 1-90.5-32M160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M171.3 80H224v112H99.4l34.7-86.9C140.3 90 155 80 171.3 80M272 192V80h81.2c12.2 0 23.6 5.5 31.2 15l77.6 97zm252 .6L422 65c-16.7-20.9-42-33-68.7-33h-182c-36 0-68.3 21.9-81.7 55.3l-42.8 107C19.8 201.8 0 226.6 0 256v112c0 17.7 14.3 32 32 32h33.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80h130.6c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32v-48c0-66.7-50.9-121.4-116-127.4M434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1-90.5-32m135.8-16c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64h-139c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64H48v-96c0-8.8 7.2-16 16-16h448c44.2 0 80 35.8 80 80v32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M171.3 64H224v128H87.6l39.1-97.8c7.4-18.3 25-30.2 44.6-30.2M256 192V64h97.2c14.6 0 28.4 6.6 37.5 18l88 110zm263.9.2L415.7 62c-15.2-19-38.2-30-62.5-30H171.3c-32.7 0-62.1 19.9-74.3 50.3L52.8 193C22.8 198.3 0 224.5 0 256v112c0 17.7 14.3 32 32 32h33.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80h130.6c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32v-48c0-68-53.1-123.7-120.1-127.8M542 400c-7.1 27.6-32.2 48-62 48s-54.9-20.4-62-48c-1.3-5.1-2-10.5-2-16s.7-10.9 2-16c7.1-27.6 32.2-48 62-48s54.9 20.4 62 48c1.3 5.1 2 10.5 2 16s-.7 10.9-2 16m-156.7-32H254.7c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80H32V256c0-17.7 14.3-32 32-32h448c53 0 96 43 96 96v48h-33.3c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80M160 448c-29.8 0-54.9-20.4-62-48-1.3-5.1-2-10.5-2-16s.7-10.9 2-16c7.1-27.6 32.2-48 62-48s54.9 20.4 62 48c1.3 5.1 2 10.5 2 16s-.7 10.9-2 16c-7.1 27.6-32.2 48-62 48"
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
                  d="M171.3 48H240v144H75.8l43.5-108.8c8.5-21.3 29.1-35.2 52-35.2M256 208h256c61.9 0 112 50.1 112 112v48c0 8.8-7.2 16-16 16h-32c0-53-43-96-96-96s-96 43-96 96H256c0-53-43-96-96-96s-96 43-96 96H32c-8.8 0-16-7.2-16-16V256c0-26.5 21.5-48 48-48h192m318.7 192H608c17.7 0 32-14.3 32-32v-48c0-69.4-55.2-125.9-124.1-127.9L409.5 59c-13.7-17.1-34.3-27-56.2-27h-182c-29.4 0-55.9 17.9-66.9 45.3l-46 115C25.7 195 0 222.5 0 256v112c0 17.7 14.3 32 32 32h33.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80h130.6c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80m-79.3-208H256V48h97.2c17 0 33.1 7.7 43.7 21l98.4 123zM160 304a80 80 0 1 1 0 160 80 80 0 1 1 0-160m240 80a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M171.3 128H224v96H111.3l30.4-75.9c4.9-12.1 16.6-20.1 29.7-20.1zM272 224v-96h81.2c9.7 0 18.9 4.4 25 12l67.2 84zM64 432a80 80 0 1 1 160 0 80 80 0 1 1-160 0m432-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M171.3 128H224v96H111.3l30.4-75.9c4.9-12.1 16.6-20.1 29.7-20.1zM272 224v-96h81.2c9.7 0 18.9 4.4 25 12l67.2 84zm256.2 1-100-125c-18.2-22.8-45.8-36-75-36H171.3c-39.3 0-74.6 23.9-89.1 60.3L40.6 228.4C16.8 237.8 0 260.9 0 288v112c0 17.7 14.3 32 32 32 0-61.9 50.1-112 112-112s112 50.1 112 112h128c0-61.9 50.1-112 112-112s112 50.1 112 112c17.7 0 32-14.3 32-32v-48c0-65.2-48.8-119-111.8-127"
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
