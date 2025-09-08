import { type CSSProperties } from "react";

export type GenericMickeyObject = Record<string, any> | any | undefined;
export type MickeyObject<T = GenericMickeyObject> =
  | Record<string, T>
  | T
  | undefined;

export interface DomProperties {
  style?: CSSProperties;
  className?: string;
}

export interface ClickActions {
  onPress?: (ev: MickeyObject) => void;
  onOut?: (ev: MickeyObject) => void;
  onMove?: (ev: MickeyObject) => void;
  onUp?: (ev: MickeyObject) => void;
  onDown?: (ev: MickeyObject) => void;
  onOver?: (ev: MickeyObject) => void;
  groupId?: string;
  active?: boolean;
  selected?: boolean;
}
