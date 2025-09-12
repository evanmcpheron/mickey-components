import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FileZipIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H240c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64zm384 64H256V0zM240 352h64c5.5 0 10.7 2.9 13.6 7.6s3.2 10.6.7 15.6L265.9 480H304c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-5.5 0-10.7-2.9-13.6-7.6s-3.2-10.6-.7-15.6L278.1 384H240c-8.8 0-16-7.2-16-16s7.2-16 16-16m144 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16s16 7.2 16 16m32 0c0-8.8 7.2-16 16-16h24c30.9 0 56 25.1 56 56s-25.1 56-56 56h-8v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368m32 64h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8z"
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
                  d="M64 464h96v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h165.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288h-48V160h-80c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16m176-112h64c5.5 0 10.7 2.9 13.6 7.6s3.2 10.6.7 15.6L265.9 480H304c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-5.5 0-10.7-2.9-13.6-7.6s-3.2-10.6-.7-15.6L278.1 384H240c-8.8 0-16-7.2-16-16s7.2-16 16-16m144 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16s16 7.2 16 16m32 0c0-8.8 7.2-16 16-16h24c30.9 0 56 25.1 56 56s-25.1 56-56 56h-8v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368m32 64h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8z"
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
                  d="M64 480h96v32H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h156.1C232.8 0 245 5.1 254 14.1l115.9 115.8c9 9 14.1 21.2 14.1 33.9V288h-32v-96H240c-26.5 0-48-21.5-48-48V32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32m287.5-320c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16zM240 352h64c5.5 0 10.7 2.9 13.6 7.6s3.2 10.6.7 15.6L265.9 480H304c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-5.5 0-10.7-2.9-13.6-7.6s-3.2-10.6-.7-15.6L278.1 384H240c-8.8 0-16-7.2-16-16s7.2-16 16-16m144 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16s16 7.2 16 16m32 0c0-8.8 7.2-16 16-16h24c30.9 0 56 25.1 56 56s-25.1 56-56 56h-8v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368m32 64h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8z"
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
                  d="M176 496H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h140.1c1.3 0 2.6.1 3.9.2V136c0 22.1 17.9 40 40 40h119.8c.2 1.3.2 2.6.2 3.9V304h16V179.9c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h112zm185.1-336H248c-13.3 0-24-10.7-24-24V22.9q1.5 1.2 2.7 2.4l131.9 132q1.35 1.35 2.4 2.7zM240 368c-4.4 0-8 3.6-8 8s3.6 8 8 8h51.1l-58.3 116.4c-1.2 2.5-1.1 5.4.4 7.8s4 3.8 6.8 3.8h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-51.1l58.2-116.4c1.2-2.5 1.1-5.4-.4-7.8s-4-3.8-6.8-3.8zm136 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v128c0 4.4 3.6 8 8 8s8-3.6 8-8zm48 0v128c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h16c26.5 0 48-21.5 48-48s-21.5-48-48-48h-24c-4.4 0-8 3.6-8 8m16 72v-64h16c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H240c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160 224 0v128c0 17.7 14.3 32 32 32zM240 352c-8.8 0-16 7.2-16 16s7.2 16 16 16h38.1l-52.4 104.8c-2.5 5-2.2 10.9.7 15.6s8.1 7.6 13.6 7.6h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-38.1l52.4-104.8c2.5-5 2.2-10.9-.7-15.6s-8.1-7.6-13.6-7.6zm144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16zm32 0v128c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h8c30.9 0 56-25.1 56-56s-25.1-56-56-56h-24c-8.8 0-16 7.2-16 16m32 64v-48h8c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
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
