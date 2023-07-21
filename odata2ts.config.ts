import { ConfigFileOptions, EmitModes, Modes } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
    mode: Modes.service,
    emitMode: EmitModes.ts,
    allowRenaming: true,
    services: {
        ZPP_BDE_SRV: {
            source: "resources/metadata.xml",
            output: "odata",
            prettier: true,
        }
    },
    converters: [
        "@odata2ts/converter-v2-to-v4",
        "@odata2ts/converter-luxon"
    ]
}

export default config;