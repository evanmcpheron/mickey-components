import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BedBunkIcon: React.FC<
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
                  d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h448v32c0 17.7 14.3 32 32 32s32-14.3 32-32V112C576 50.1 525.9 0 464 0H256c-17.7 0-32 14.3-32 32v96H64zm448 224H256c-17.7 0-32 14.3-32 32v96H64V192h448zm-320 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M144 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M24 0c13.3 0 24 10.7 24 24v136h208V40c0-22.1 17.9-40 40-40h160c66.3 0 120 53.7 120 120v368c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24.3H48V488c0 13.3-10.7 24-24 24S0 501.3 0 488V24C0 10.7 10.7 0 24 0m232 415.7V296c0-22.1 17.9-40 40-40h232v-48H48v207.7zM528 160v-40c0-39.8-32.2-72-72-72H304v112zm0 144H304v111.7h224zM96 328a56 56 0 1 1 112 0 56 56 0 1 1-112 0m56-312a56 56 0 1 1 0 112 56 56 0 1 1 0-112"
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
                  d="M32 16c0-8.8-7.2-16-16-16S0 7.2 0 16v480c0 8.8 7.2 16 16 16s16-7.2 16-16v-48.3h512V496c0 8.8 7.2 16 16 16s16-7.2 16-16V112C576 50.1 525.9 0 464 0H256c-17.7 0-32 14.3-32 32v128H32zm192 272v127.7H32V192h512v64H256c-17.7 0-32 14.3-32 32m320-176v48H256V32h208c44.2 0 80 35.8 80 80M256 288h288v127.7H256zM128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8v496c0 4.4 3.6 8 8 8s8-3.6 8-8v-56.3h544V504c0 4.4 3.6 8 8 8s8-3.6 8-8V136c0-57.4-46.6-104-104-104H232c-13.3 0-24 10.7-24 24v136H16zm192 288v135.7H16V208h544v64H232c-13.3 0-24 10.7-24 24m352-160v56H224V56c0-4.4 3.6-8 8-8h240c48.6 0 88 39.4 88 88M232 288h328v143.7H224V296c0-4.4 3.6-8 8-8M112 48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0 128a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M192 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0m0 256a48 48 0 1 0-96 0 48 48 0 1 0 96 0M256 0c-17.7 0-32 14.3-32 32v96h352C576 57.3 518.7 0 448 0zm-16 256c-8.8 0-16 7.2-16 16v112h288V256z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h448v32c0 17.7 14.3 32 32 32s32-14.3 32-32V128H64zm448 256v96H64V192h448z"
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
