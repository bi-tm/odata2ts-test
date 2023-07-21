export interface HandlingUnit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Ident` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ident: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hutyp` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  hutyp: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Qty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  qty: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Unit` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  unit: string;
}

export type HandlingUnitId = string | { ident: string };

export interface EditableHandlingUnit
  extends Pick<HandlingUnit, "hutyp" | "qty" | "unit"> {}
