# Typisierte Daten bei cds.ql.SELECT (cds-typer)

Frage: Gibt es bei `cds.ql.SELECT` eine Lösung, um TypeScript-typisierte Daten zu erhalten?

Antwort: Ja, mit `@cap-js/cds-typer`. Es erzeugt TypeScript-Typen aus CDS-Modellen, auch aus importierten externen Services.

## Einrichtung
```bash
npm i -D @cap-js/cds-typer typescript @types/node
cds-typer "*" --outputDirectory @cds-models
```
Oder automatisch beim Start (`package.json`):
```json
"cds": { "typer": { "outputDirectory": "@cds-models" } }
```
`cds watch` erzeugt die Typen bei neueren cds-Versionen (ab 8) automatisch neu, wenn `@cap-js/cds-typer` installiert ist. Sonst: `cds-typer "*" --watch`.

Zusätzlich in `package.json`:
```json
"imports": { "#cds-models/*": "./@cds-models/*/index.js" }
```
In `tsconfig.json` ggf. `"allowJs": true`, wenn JS und TS gemischt werden.

## Verwendung
```ts
import cds from "@sap/cds";
import { WhsePhysicalInventoryItem } from "#cds-models/api_whse_physinvtryitem_2";

const ext = await cds.connect.to("api_whse_physinvtryitem_2");

const docs = await ext.run(
  SELECT.from(WhsePhysicalInventoryItem)
    .columns("EWMWarehouse", "PhysicalInventoryDocNumber", "EWMStorageBin")
    .limit(50)
);
```
- Das Entity-Objekt ersetzt den String-Namen, Spaltennamen werden gegen die Typen geprüft.
- Die Plural-Variante für Listen heißt je nach Modell z. B. `WhsePhysicalInventoryItem_`; siehe `@cds-models/.../index.d.ts`.
- Der Rückgabetyp von `ext.run(...)` ist oft `any`; selbst typisieren: `const docs: WhsePhysicalInventoryItem[] = await ext.run(...)`.

## Einschränkungen
- Voll typgeprüfte Spalten gibt es mit der Lambda-Syntax: `SELECT.from(Entity).columns(e => { e.EWMWarehouse, e.EWMStorageBin })`.
- Typen entstehen aus dem CDS-Modell (importierte EDMX), nicht aus der Live-API.
- Typisierung gilt nur zur Compile-Zeit.

## Vergleich mit odata2ts
Mit `cds-typer` bleibt man bei CAP, braucht keinen eigenen HTTP-Client, und die Destination läuft weiter über `cds.connect.to`. odata2ts bietet zusätzlich einen typisierten Query-Builder, verlangt aber einen selbst geschriebenen Client, der Requests an den CAP-Remote-Service weiterleitet.
