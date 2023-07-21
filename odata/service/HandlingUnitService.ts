import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV2,
  EntitySetServiceV2,
} from "@odata2ts/odata-service";
import {
  HandlingUnit,
  EditableHandlingUnit,
  HandlingUnitId,
} from "../ZppBdeSrvModel";
import { QHandlingUnit, qHandlingUnit, QHandlingUnitId } from "../QZppBdeSrv";

export class HandlingUnitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV2<
  ClientType,
  HandlingUnit,
  EditableHandlingUnit,
  QHandlingUnit
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qHandlingUnit);
  }
}

export class HandlingUnitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV2<
  ClientType,
  HandlingUnit,
  EditableHandlingUnit,
  QHandlingUnit,
  HandlingUnitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qHandlingUnit, new QHandlingUnitId(name));
  }
}
