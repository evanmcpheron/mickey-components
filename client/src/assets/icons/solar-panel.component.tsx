import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SolarPanelIcon: React.FC<
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
                  d="M122.2 0C91.7 0 65.5 21.5 59.5 51.4l-51.2 256C.4 347 30.6 384 71 384h217v64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64v-64h217c40.4 0 70.7-36.9 62.8-76.6l-51.2-256C574.5 21.5 548.3 0 517.8 0zm138.7 64h118.2l10.4 104h-139zm-58.6 104H101.4l20.8-104h90.4zM91.8 216h105.7l-10.4 104H71zm153.9 0h148.6l10.4 104H235.3zm196.8 0h105.7L569 320H453zm96-48H437.7L427.3 64h90.4l31.4-6.3-31.3 6.3 20.8 104z"
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
                  d="M114.5 48c-3.8 0-7.1 2.7-7.9 6.5L86.5 160h116.6l11.2-112zm83.8 160H77.4L54.8 326.5c-.9 4.9 2.8 9.5 7.9 9.5h122.8zm48.2 0-12.8 128h172.6l-12.8-128zm142.2-48L377.5 48h-115l-11.2 112zm53 48 12.8 128h122.8c5 0 8.8-4.6 7.9-9.5L562.6 208zm111.8-48L533.4 54.5c-.7-3.8-4-6.5-7.9-6.5h-99.8l11.2 112zM59.5 45.5c5-26.4 28.1-45.5 55-45.5h411c26.9 0 50 19.1 55 45.5l51.8 272c6.6 34.5-19.9 66.5-55 66.5H344v80h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h80v-80H62.7c-35.1 0-61.6-32-55-66.5z"
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
                  d="M221.2 0h312.3c26.9 0 50 19.1 55 45.6L613.2 176l3 16L639 312.6c1 5.1 1 10.2 1 15.4 0 30.9-25.1 56-56 56H336v96h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h96v-96H56c-30.9 0-56-25.1-56-56 0-5.2 0-10.3 1-15.4L23.8 192l3-16L51.5 45.6c5-26.5 28.1-45.6 55-45.6zM304 352h113.2l-12.5-144H235.3l-12.5 144zM250.5 32l-12.4 144h163.8L389.5 32zm186.3 176 12.5 144H584c13.3 0 24-10.7 24-24 0-5.6-.1-7.8-.4-9.5L586.7 208zm-2.8-32h146.6L557.1 51.5C554.9 40.2 545 32 533.5 32H421.6zm-230.8 32H53.3L32.4 318.5c-.3 1.7-.4 3.9-.4 9.5 0 13.3 10.7 24 24 24h134.7zm2.8-32 12.4-144H106.5C95 32 85.1 40.2 82.9 51.5L59.4 176z"
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
                  d="m67.2 48.6-50.5 267c-.5 2.5-.7 4.9-.7 7.4v5c0 22.1 17.9 40 40 40h528c22.1 0 40-17.9 40-40v-5c0-2.5-.2-5-.7-7.4l-50.5-267C569.2 29.7 552.7 16 533.5 16h-427c-19.2 0-35.7 13.7-39.3 32.6m-15.7-3c5-26.5 28.1-45.6 55-45.6h427c26.9 0 50 19.1 55 45.6l50.5 267c.6 3.4 1 6.9 1 10.4v5c0 30.9-25.1 56-56 56H328v112h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H200c-4.4 0-8-3.6-8-8s3.6-8 8-8h112V384H56c-30.9 0-56-25.1-56-56v-5c0-3.5.3-7 1-10.4zM103.7 200 84 304h142.9l9-104zm3-16h130.6l9-104H126.4zM262.4 80l-9 104h133.2l-9-104zm131.3 0 9 104h130.6L513.6 80zm142.6 120H404.1l9 104H556zM397 304l-9-104H252l-9 104zM110.7 77c1.4-7.6 8-13 15.7-13h387.2c7.7 0 14.3 5.5 15.7 13l42.4 224c1.9 9.9-5.7 19-15.7 19H84c-10 0-17.6-9.1-15.7-19z"
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
                  d="M59.5 51.4C65.5 21.5 91.7 0 122.2 0h395.6c30.5 0 56.8 21.5 62.8 51.4l51.2 256C639.7 347 609.4 384 569 384H71c-40.4 0-70.6-37-62.7-76.6zM517.8 64H122.2L71 320h498zl31.4-6.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M379.1 64H260.9l-10.4 104h139zm-166.4 0h-90.5l-20.8 104h100.9zm-15.2 152H91.8L71 320h116l10.4-104zm196.8 0H245.7l-10.4 104h169.4zm58.6 104H569l-20.8-104H442.5zm64.9-256h-90.5l10.4 104h100.9zM416 448h-64v-64h-64v64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32"
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
