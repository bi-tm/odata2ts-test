export interface HandlingUnit {
  ident: string;
  hutyp: string;
  qty: number;
  unit: string;
}

export type HandlingUnitId = string | { ident: string };

export interface EditableHandlingUnit
  extends Pick<HandlingUnit, "hutyp" | "qty" | "unit"> {}
