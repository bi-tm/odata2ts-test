import { ODataHttpClient } from "@odata2ts/http-client-api";
import { ODataService } from "@odata2ts/odata-service";
import { HandlingUnitId } from "./ZppBdeSrvModel";
import { QHandlingUnitId } from "./QZppBdeSrv";
import {
  HandlingUnitCollectionService,
  HandlingUnitService,
} from "./service/HandlingUnitService";

export class ZppBdeSrvService<
  ClientType extends ODataHttpClient
> extends ODataService<ClientType> {
  public handlingUnits(): HandlingUnitCollectionService<ClientType>;
  public handlingUnits(id: HandlingUnitId): HandlingUnitService<ClientType>;
  public handlingUnits(id?: HandlingUnitId | undefined) {
    const fieldName = "HandlingUnits";
    return typeof id === "undefined" || id === null
      ? new HandlingUnitCollectionService(
          this.client,
          this.getPath(),
          fieldName
        )
      : new HandlingUnitService(
          this.client,
          this.getPath(),
          new QHandlingUnitId(fieldName).buildUrl(id)
        );
  }
}
