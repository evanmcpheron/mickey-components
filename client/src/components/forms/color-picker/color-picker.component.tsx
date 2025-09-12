import React, { useEffect, useRef, useState } from "react";
import {
  Circle as CirclePicker,
  Colorful,
  type ColorResult,
  hexToHsva,
  hsvaToRgba,
  hsvaToHsla,
  hsvaToHexa,
} from "@uiw/react-color";
import {
  ColorDiv,
  Popover,
  Container,
  Circle,
  Controls,
  ButtonGroups,
} from "./color-picker.styled";
import {
  colorOptionsDefault,
  type ColorPickerProps,
} from "./color-picker.types";
import ReactDOM from "react-dom";
import { Button, OnPress } from "../../actions";
import { useFormName } from "../form/form.context";
import type { MickeyObject } from "@/helpers/types/base.types";
import { Label } from "@/components/font";
import { Row } from "@/components/layout";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { getClassName, styles } from "@/helpers/style/style.helpers";
import { useForm } from "../form";

export const ColorPicker: React.FC<ColorPickerProps> = ({
  name,
  type = "square",
  picker = "Custom",
  style,
  className,
  label,
  labelPosition = "left",
  value,
  defaultValue,
  colors = colorOptionsDefault,
  disabled,
  onChange,
  ...more
}) => {
  const domRef = useRef(null);
  const { onPress, onOut, onMove, onUp, onDown, onOver, groupId } = more;

  const formName = useFormName();
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const swatchRef = useRef<HTMLDivElement>(null);
  const tempColorRef = useRef<ColorResult | null>(null);

  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const [showDetailedPicker, setShowDetailedPicker] = useState<boolean>(false);
  const [color, setColor] = useState<ColorResult | undefined>(undefined);
  const [tempColor, setTempColor] = useState<ColorResult | undefined>(
    undefined
  );

  const [popoverPosition, setPopoverPosition] = useState<{
    top: string;
    bottom: string;
    left: string;
    maxHeight: string;
  }>({ top: "auto", bottom: "auto", left: "0", maxHeight: "auto" });

  const pointerEvents = {
    onPress,
    onOut,
    onMove,
    onUp,
    onDown,
    onOver,
    groupId,
  };

  usePointerEvent({ element: domRef, active: false, ...pointerEvents });

  const { setValue, registerField, deregisterField, subscribe, unsubscribe } =
    useForm({ formName });

  const setHiddenInputValue = (value: string) => {
    if (hiddenInputRef && hiddenInputRef.current) {
      hiddenInputRef.current.value = value;
    }
  };

  // Convert hex string to ColorResult
  const hexToColorResult: (hex: string) => ColorResult | undefined = (
    hex: string
  ): ColorResult | undefined => {
    if (!hex) return undefined;

    try {
      const hsva = hexToHsva(hex);
      const rgba = hsvaToRgba(hsva);
      const hsla = hsvaToHsla(hsva);
      const hexa = hsvaToHexa(hsva);

      return {
        hex,
        rgb: { r: rgba.r, g: rgba.g, b: rgba.b },
        hsl: { h: hsla.h, s: hsla.s, l: hsla.l },
        hsv: { h: hsva.h, s: hsva.s, v: hsva.v },
        rgba: { r: rgba.r, g: rgba.g, b: rgba.b, a: rgba.a },
        hsla: { h: hsla.h, s: hsla.s, l: hsla.l, a: hsla.a },
        hsva: { h: hsva.h, s: hsva.s, v: hsva.v, a: hsva.a },
        hexa,
        xy: { x: hsva.h / 360, y: hsva.s / 100, bri: hsva.v / 100 },
      } as ColorResult;
    } catch (e) {
      console.error("Error converting hex to ColorResult:", e);
      return undefined;
    }
  };

  // Initialize color state based on props
  useEffect(() => {
    const initialColor = value ?? defaultValue;
    if (initialColor) {
      const colorResult =
        typeof initialColor === "string"
          ? hexToColorResult(initialColor)
          : initialColor;

      setColor(colorResult);
      setTempColor(colorResult);
      setHiddenInputValue(colorResult?.hex || "");
    }
  }, []); // Empty dependency array to run only once on mount

  // Handle external value changes
  useEffect(() => {
    if (value !== undefined) {
      const colorResult =
        typeof value === "string" ? hexToColorResult(value) : value;

      setColor(colorResult);
      setTempColor(colorResult);
      setHiddenInputValue(colorResult?.hex || "");
    }
  }, [value]);

  useEffect(() => {
    registerField(name, "");

    const handleValueChange = (newValue: MickeyObject) => {
      if (newValue === "") {
        setColor(undefined);
        setTempColor(undefined);
      } else {
        const colorResult =
          typeof newValue === "string" ? hexToColorResult(newValue) : newValue;
        setColor(colorResult);
        setTempColor(colorResult);
        setHiddenInputValue(newValue.toString());
      }
    };

    if (formName) {
      subscribe(name, handleValueChange);
    }

    return () => {
      deregisterField(name);
      if (formName) {
        unsubscribe(name, handleValueChange);
      }
    };
  }, [formName, name, registerField, deregisterField, subscribe, unsubscribe]);

  useEffect(() => {
    tempColorRef.current = tempColor || null;
  }, [tempColor]);

  const handleAccept = () => {
    if (tempColorRef.current) {
      setColor(tempColorRef.current);
      onChange?.(tempColorRef.current);
      setValue(name, tempColorRef.current.hex);
    }
    setShowDetailedPicker(false);
    setDisplayColorPicker(false);
  };

  const handleCancel = () => {
    setTempColor(color); // Reset tempColor to current color
    setShowDetailedPicker(false);
    setDisplayColorPicker(false);
  };

  useEffect(() => {
    if (displayColorPicker && popoverRef.current && swatchRef.current) {
      const popoverRect = popoverRef.current.getBoundingClientRect();
      const swatchRect = swatchRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const spaceBelow = windowHeight - swatchRect.bottom;
      const spaceAbove = swatchRect.top;

      let top = "auto";
      let bottom = "auto";
      let maxHeight = "auto";

      if (spaceBelow > popoverRect.height) {
        top = `${swatchRect.bottom + 4}px`;
      } else if (spaceAbove > popoverRect.height) {
        bottom = `${windowHeight - swatchRect.top + 4}px`;
      } else if (spaceBelow > spaceAbove) {
        top = `${swatchRect.bottom + 4}px`;
        maxHeight = `${spaceBelow - 10}px`;
      } else {
        bottom = `${windowHeight - swatchRect.top + 4}px`;
        maxHeight = `${spaceAbove - 10}px`;
      }

      setPopoverPosition({
        top,
        bottom,
        left: `${swatchRect.left}px`,
        maxHeight,
      });
    }
  }, [displayColorPicker]);

  const renderPicker = () =>
    ReactDOM.createPortal(
      <Popover
        ref={popoverRef}
        className="color-picker-popover"
        style={{
          ...(picker === "Custom"
            ? {
                maxHeight: popoverPosition.maxHeight,
                overflowY: "auto",
                overflowX: "hidden",
              }
            : {}),
          ...(picker === "Slider"
            ? {
                width: "250px",
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "10px",
              }
            : {}),
          ...(picker === "Circle"
            ? {
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "10px",
              }
            : {}),
          position: "absolute",
          zIndex: 99999,
          top: popoverPosition.top,
          bottom: popoverPosition.bottom,
          left: popoverPosition.left,
        }}
      >
        <OnPress
          onPress={handleCancel}
          style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0 }}
        />
        <>
          {!showDetailedPicker ? (
            <Row
              justifyContent="space-between"
              alignItems="center"
              gap="10px"
              rowDirection="column"
            >
              <Row>
                <Button
                  dimensions={{ width: "100%" }}
                  type="button"
                  role="action"
                  onPress={() => setShowDetailedPicker(true)}
                >
                  Show Picker
                </Button>
              </Row>
              <CirclePicker
                style={{ display: "flex", justifyContent: "center" }}
                color={tempColor?.hex ?? color?.hex ?? defaultValue ?? value}
                colors={colors}
                onChange={(color: ColorResult) => {
                  const newColor =
                    typeof color === "string" ? hexToColorResult(color) : color;
                  setTempColor(newColor);
                  onChange?.(newColor);
                }}
                rectProps={{
                  style: {
                    borderRadius: 2,
                    width: 18,
                    height: 18,
                  },
                }}
                pointProps={{
                  style: {
                    width: 26,
                    height: 26,
                    borderRadius: 5,
                    border: styles.surface.border.default.solidDarkThin,
                  },
                }}
              />
              <ButtonGroups>
                <Button
                  type="button"
                  role="action"
                  onPress={handleCancel}
                  style={{ cursor: "pointer" }}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  role="action"
                  onPress={handleAccept}
                  style={{ cursor: "pointer" }}
                >
                  Accept
                </Button>
              </ButtonGroups>
            </Row>
          ) : (
            <Row rowDirection="column">
              <Controls>
                <Button
                  dimensions={{ width: "100%" }}
                  type="button"
                  role="action"
                  onPress={() => setShowDetailedPicker(false)}
                >
                  Show Swatches
                </Button>
              </Controls>
              <Colorful
                style={{
                  width: "calc(100% - 30px)",
                  padding: "15px",
                  paddingTop: "0",
                  paddingBottom: "0",
                }}
                disableAlpha={true}
                color={tempColor?.hex ?? color?.hex}
                onChange={(color: ColorResult) => {
                  onChange?.(color);
                  setTempColor(color);
                }}
              />

              <ButtonGroups>
                <Button
                  type="button"
                  role="cancel"
                  onPress={handleCancel}
                  style={{ cursor: "pointer" }}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onPress={handleAccept}
                  style={{ cursor: "pointer" }}
                >
                  Accept
                </Button>
              </ButtonGroups>
            </Row>
          )}
        </>
      </Popover>,
      document.body
    );

  const internalProperties = removeUndefined({
    className: getClassName("aps-color-picker", className),
    style: { ...(style || {}) },
    labelPosition,
    disabled,
  });

  return (
    <Container ref={domRef} {...internalProperties}>
      <input ref={hiddenInputRef} type="hidden" name={name} />
      {label && labelPosition === "left" && <Label>{label}</Label>}
      <OnPress
        onPress={() => {
          setDisplayColorPicker((prev) => !prev);
        }}
        disabled={disabled}
        style={{
          cursor: "pointer",
        }}
      >
        {type === "circle" ? (
          <Circle
            color={color?.hex ?? defaultValue ?? value}
            disabled={disabled}
            ref={swatchRef}
          />
        ) : (
          <ColorDiv
            color={color?.hex ?? defaultValue ?? value}
            disabled={disabled}
            ref={swatchRef}
          />
        )}
      </OnPress>
      {label && labelPosition === "right" && <Label>{label}</Label>}
      {displayColorPicker && renderPicker()}
    </Container>
  );
};
