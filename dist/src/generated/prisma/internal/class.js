"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.8.0",
    "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id       Int       @id @default(autoincrement())\n  username String\n  email    String    @unique\n  contacts Contact[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Contact {\n  id           Int    @id @default(autoincrement())\n  name         String\n  phone_number String\n\n  userId Int\n  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contacts\",\"kind\":\"object\",\"type\":\"Contact\",\"relationName\":\"ContactToUser\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Contact\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ContactToUser\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"user\",\"contacts\",\"_count\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Contact.findUnique\",\"Contact.findUniqueOrThrow\",\"Contact.findFirst\",\"Contact.findFirstOrThrow\",\"Contact.findMany\",\"Contact.createOne\",\"Contact.createMany\",\"Contact.createManyAndReturn\",\"Contact.updateOne\",\"Contact.updateMany\",\"Contact.updateManyAndReturn\",\"Contact.upsertOne\",\"Contact.deleteOne\",\"Contact.deleteMany\",\"Contact.groupBy\",\"Contact.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"name\",\"phone_number\",\"userId\",\"createdAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"username\",\"email\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "bBYgCQQAAEUAIC4AAEEAMC8AAAkAEDAAAEEAMDECAAAAATVAAEQAITZAAEQAIUIBAEMAIUMBAAAAAQEAAAABACAKAwAARwAgLgAARgAwLwAAAwAQMAAARgAwMQIAQgAhMgEAQwAhMwEAQwAhNAIAQgAhNUAARAAhNkAARAAhAQMAAGYAIAoDAABHACAuAABGADAvAAADABAwAABGADAxAgAAAAEyAQBDACEzAQBDACE0AgBCACE1QABEACE2QABEACEDAAAAAwAgAQAABAAwAgAABQAgAQAAAAMAIAEAAAABACAJBAAARQAgLgAAQQAwLwAACQAQMAAAQQAwMQIAQgAhNUAARAAhNkAARAAhQgEAQwAhQwEAQwAhAQQAAGUAIAMAAAAJACABAAAKADACAAABACADAAAACQAgAQAACgAwAgAAAQAgAwAAAAkAIAEAAAoAMAIAAAEAIAYEAABkACAxAgAAAAE1QAAAAAE2QAAAAAFCAQAAAAFDAQAAAAEBCwAADgAgBTECAAAAATVAAAAAATZAAAAAAUIBAAAAAUMBAAAAAQELAAAQADABCwAAEAAwBgQAAFcAIDECAE8AITVAAE4AITZAAE4AIUIBAE0AIUMBAE0AIQIAAAABACALAAATACAFMQIATwAhNUAATgAhNkAATgAhQgEATQAhQwEATQAhAgAAAAkAIAsAABUAIAIAAAAJACALAAAVACADAAAAAQAgEgAADgAgEwAAEwAgAQAAAAEAIAEAAAAJACAFBQAAUgAgGAAAUwAgGQAAVgAgGgAAVQAgGwAAVAAgCC4AAEAAMC8AABwAEDAAAEAAMDECADYAITVAADgAITZAADgAIUIBADcAIUMBADcAIQMAAAAJACABAAAbADAXAAAcACADAAAACQAgAQAACgAwAgAAAQAgAQAAAAUAIAEAAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACAHAwAAUQAgMQIAAAABMgEAAAABMwEAAAABNAIAAAABNUAAAAABNkAAAAABAQsAACQAIAYxAgAAAAEyAQAAAAEzAQAAAAE0AgAAAAE1QAAAAAE2QAAAAAEBCwAAJgAwAQsAACYAMAcDAABQACAxAgBPACEyAQBNACEzAQBNACE0AgBPACE1QABOACE2QABOACECAAAABQAgCwAAKQAgBjECAE8AITIBAE0AITMBAE0AITQCAE8AITVAAE4AITZAAE4AIQIAAAADACALAAArACACAAAAAwAgCwAAKwAgAwAAAAUAIBIAACQAIBMAACkAIAEAAAAFACABAAAAAwAgBQUAAEgAIBgAAEkAIBkAAEwAIBoAAEsAIBsAAEoAIAkuAAA1ADAvAAAyABAwAAA1ADAxAgA2ACEyAQA3ACEzAQA3ACE0AgA2ACE1QAA4ACE2QAA4ACEDAAAAAwAgAQAAMQAwFwAAMgAgAwAAAAMAIAEAAAQAMAIAAAUAIAkuAAA1ADAvAAAyABAwAAA1ADAxAgA2ACEyAQA3ACEzAQA3ACE0AgA2ACE1QAA4ACE2QAA4ACENBQAAOgAgGAAAPwAgGQAAOgAgGgAAOgAgGwAAOgAgNwIAAAABOAIAAAAEOQIAAAAEOgIAAAABOwIAAAABPAIAAAABPQIAAAABPgIAPgAhDgUAADoAIBoAAD0AIBsAAD0AIDcBAAAAATgBAAAABDkBAAAABDoBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BADwAIT8BAAAAAUABAAAAAUEBAAAAAQsFAAA6ACAaAAA7ACAbAAA7ACA3QAAAAAE4QAAAAAQ5QAAAAAQ6QAAAAAE7QAAAAAE8QAAAAAE9QAAAAAE-QAA5ACELBQAAOgAgGgAAOwAgGwAAOwAgN0AAAAABOEAAAAAEOUAAAAAEOkAAAAABO0AAAAABPEAAAAABPUAAAAABPkAAOQAhCDcCAAAAATgCAAAABDkCAAAABDoCAAAAATsCAAAAATwCAAAAAT0CAAAAAT4CADoAIQg3QAAAAAE4QAAAAAQ5QAAAAAQ6QAAAAAE7QAAAAAE8QAAAAAE9QAAAAAE-QAA7ACEOBQAAOgAgGgAAPQAgGwAAPQAgNwEAAAABOAEAAAAEOQEAAAAEOgEAAAABOwEAAAABPAEAAAABPQEAAAABPgEAPAAhPwEAAAABQAEAAAABQQEAAAABCzcBAAAAATgBAAAABDkBAAAABDoBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAD0AIT8BAAAAAUABAAAAAUEBAAAAAQ0FAAA6ACAYAAA_ACAZAAA6ACAaAAA6ACAbAAA6ACA3AgAAAAE4AgAAAAQ5AgAAAAQ6AgAAAAE7AgAAAAE8AgAAAAE9AgAAAAE-AgA-ACEINwgAAAABOAgAAAAEOQgAAAAEOggAAAABOwgAAAABPAgAAAABPQgAAAABPggAPwAhCC4AAEAAMC8AABwAEDAAAEAAMDECADYAITVAADgAITZAADgAIUIBADcAIUMBADcAIQkEAABFACAuAABBADAvAAAJABAwAABBADAxAgBCACE1QABEACE2QABEACFCAQBDACFDAQBDACEINwIAAAABOAIAAAAEOQIAAAAEOgIAAAABOwIAAAABPAIAAAABPQIAAAABPgIAOgAhCzcBAAAAATgBAAAABDkBAAAABDoBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAD0AIT8BAAAAAUABAAAAAUEBAAAAAQg3QAAAAAE4QAAAAAQ5QAAAAAQ6QAAAAAE7QAAAAAE8QAAAAAE9QAAAAAE-QAA7ACEDRAAAAwAgRQAAAwAgRgAAAwAgCgMAAEcAIC4AAEYAMC8AAAMAEDAAAEYAMDECAEIAITIBAEMAITMBAEMAITQCAEIAITVAAEQAITZAAEQAIQsEAABFACAuAABBADAvAAAJABAwAABBADAxAgBCACE1QABEACE2QABEACFCAQBDACFDAQBDACFHAAAJACBIAAAJACAAAAAAAAFMAQAAAAEBTEAAAAABBUwCAAAAAVICAAAAAVMCAAAAAVQCAAAAAVUCAAAAAQUSAABoACATAABrACBJAABpACBKAABqACBPAAABACADEgAAaAAgSQAAaQAgTwAAAQAgAAAAAAALEgAAWAAwEwAAXQAwSQAAWQAwSgAAWgAwSwAAWwAgTAAAXAAwTQAAXAAwTgAAXAAwTwAAXAAwUAAAXgAwUQAAXwAwBTECAAAAATIBAAAAATMBAAAAATVAAAAAATZAAAAAAQIAAAAFACASAABjACADAAAABQAgEgAAYwAgEwAAYgAgAQsAAGcAMAoDAABHACAuAABGADAvAAADABAwAABGADAxAgAAAAEyAQBDACEzAQBDACE0AgBCACE1QABEACE2QABEACECAAAABQAgCwAAYgAgAgAAAGAAIAsAAGEAIAkuAABfADAvAABgABAwAABfADAxAgBCACEyAQBDACEzAQBDACE0AgBCACE1QABEACE2QABEACEJLgAAXwAwLwAAYAAQMAAAXwAwMQIAQgAhMgEAQwAhMwEAQwAhNAIAQgAhNUAARAAhNkAARAAhBTECAE8AITIBAE0AITMBAE0AITVAAE4AITZAAE4AIQUxAgBPACEyAQBNACEzAQBNACE1QABOACE2QABOACEFMQIAAAABMgEAAAABMwEAAAABNUAAAAABNkAAAAABBBIAAFgAMEkAAFkAMEsAAFsAIE8AAFwAMAABBAAAZQAgBTECAAAAATIBAAAAATMBAAAAATVAAAAAATZAAAAAAQUxAgAAAAE1QAAAAAE2QAAAAAFCAQAAAAFDAQAAAAECAAAAAQAgEgAAaAAgAwAAAAkAIBIAAGgAIBMAAGwAIAcAAAAJACALAABsACAxAgBPACE1QABOACE2QABOACFCAQBNACFDAQBNACEFMQIATwAhNUAATgAhNkAATgAhQgEATQAhQwEATQAhAgQGAgUAAwEDAAEBBAcAAAAABQUACBgACRkAChoACxsADAAAAAAABQUACBgACRkAChoACxsADAEDAAEBAwABBQUAERgAEhkAExoAFBsAFQAAAAAABQUAERgAEhkAExoAFBsAFQYCAQcIAQgLAQkMAQoNAQwPAQ0RBA4SBQ8UARAWBBEXBhQYARUZARYaBBwdBx0eDR4fAh8gAiAhAiEiAiIjAiMlAiQnBCUoDiYqAicsBCgtDykuAiovAiswBCwzEC00Fg"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map