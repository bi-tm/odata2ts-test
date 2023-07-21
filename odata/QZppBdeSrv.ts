import {
  QStringV2Path,
  QStringNumberV2Path,
  QId,
  QStringParam,
  QueryObject,
} from "@odata2ts/odata-query-objects";
import { HandlingUnitId } from "./ZppBdeSrvModel";

export class QHandlingUnit extends QueryObject {
  public readonly ident = new QStringV2Path(this.withPrefix("Ident"));
  public readonly hutyp = new QStringV2Path(this.withPrefix("Hutyp"));
  public readonly qty = new QStringNumberV2Path(this.withPrefix("Qty"));
  public readonly unit = new QStringV2Path(this.withPrefix("Unit"));
}

export const qHandlingUnit = new QHandlingUnit();

export class QHandlingUnitId extends QId<HandlingUnitId> {
  private readonly params = [new QStringParam("Ident", "ident")];

  getParams() {
    return this.params;
  }
}
