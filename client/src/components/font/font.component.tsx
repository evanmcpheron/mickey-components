import React, { useRef } from "react";
import type { FontProperties } from "./font.types";

import {
  BodyContainer,
  H1Container,
  H2Container,
  H3Container,
  H4Container,
  H5Container,
  H6Container,
  LeadContainer,
  NormalizeLabels,
  SmallContainer,
} from "./font.styled";
import type { MickeyObject } from "@/helpers/types/base.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { Switch } from "../misc";
import { styles } from "@/helpers";

const Font: React.FC<FontProperties> = ({
  children,
  style,
  className,
  active,
  font,
  fontType,
  color,
  size,
  weight,
  display,
  lineHeight,
  ...more
}) => {
  const domRef: MickeyObject = useRef(null);
  const extraProps: MickeyObject = more;

  const { onPress, onOut, onMove, onUp, onDown, onOver, groupId } = extraProps;
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
    className: `mickey-font ${className ? className : ""}`,
    style: { ...(style || {}) },
    active,
    font,
    fontType,
    color: color ? color : styles.text.primary,
    size,
    weight,
    lineHeight,
    display,
  });

  return (
    <NormalizeLabels>
      <Switch>
        <Switch.Case condition={!fontType}>
          <BodyContainer ref={domRef} {...internalProperties}>
            {children}
          </BodyContainer>
        </Switch.Case>
        <Switch.Case condition={fontType === "h1"}>
          <H1Container ref={domRef} {...internalProperties}>
            {children}
          </H1Container>
        </Switch.Case>
        <Switch.Case condition={fontType === "h2"}>
          <H2Container ref={domRef} {...internalProperties}>
            {children}
          </H2Container>
        </Switch.Case>
        <Switch.Case condition={fontType === "h3"}>
          <H3Container ref={domRef} {...internalProperties}>
            {children}
          </H3Container>
        </Switch.Case>
        <Switch.Case condition={fontType === "h4"}>
          <H4Container ref={domRef} {...internalProperties}>
            {children}
          </H4Container>
        </Switch.Case>
        <Switch.Case condition={fontType === "h5"}>
          <H5Container ref={domRef} {...internalProperties}>
            {children}
          </H5Container>
        </Switch.Case>
        <Switch.Case condition={fontType === "h6"}>
          <H6Container ref={domRef} {...internalProperties}>
            {children}
          </H6Container>
        </Switch.Case>
        <Switch.Case condition={fontType === "lead"}>
          <LeadContainer ref={domRef} {...internalProperties}>
            {children}
          </LeadContainer>
        </Switch.Case>
        <Switch.Case condition={fontType === "body"}>
          <BodyContainer ref={domRef} {...internalProperties}>
            {children}
          </BodyContainer>
        </Switch.Case>
        <Switch.Case condition={fontType === "small"}>
          <SmallContainer ref={domRef} {...internalProperties}>
            {children}
          </SmallContainer>
        </Switch.Case>
        <Switch.Default>
          <BodyContainer ref={domRef} {...internalProperties}>
            {children}
          </BodyContainer>
        </Switch.Default>
      </Switch>
    </NormalizeLabels>
  );
};

export { Font as Label };
