"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunCmd = void 0;
var fs_1 = __importDefault(require("fs"));
var wasi_1 = require("wasi");
var runCmdUsage = "asb run\nRun a WASI binary\n\nUSAGE:\n    $0 run [options] [binary path] -- [binary options]";
exports.RunCmd = {
    command: "run <binary>",
    describe: "Run a WASI binary",
    builder: function (y) {
        return y
            .usage(runCmdUsage)
            .positional("binary", {
            describe: "path to Wasm binary",
            type: "string",
        })
            .option("preopen", {
            alias: ["p"],
            default: process.cwd(),
            boolean: false,
            description: "comma separated list of directories to open.",
        });
    },
    handler: function (args) { return __awaiter(void 0, void 0, void 0, function () {
        var wasiArgs, wasi, importObject, wasm, instance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wasiArgs = args["_"].slice(1);
                    console.log(wasiArgs);
                    process.exit(1);
                    wasi = new wasi_1.WASI({
                        args: wasiArgs,
                        env: process.env,
                        preopens: {
                            "/": args.preopen,
                        },
                    });
                    importObject = { wasi_snapshot_preview1: wasi.wasiImport };
                    return [4 /*yield*/, WebAssembly.compile(fs_1.default.readFileSync(args.binary))];
                case 1:
                    wasm = _a.sent();
                    return [4 /*yield*/, WebAssembly.instantiate(wasm, importObject)];
                case 2:
                    instance = _a.sent();
                    wasi.start(instance);
                    return [2 /*return*/];
            }
        });
    }); },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3J1bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwQ0FBb0I7QUFDcEIsNkJBQTRCO0FBRTVCLElBQU0sV0FBVyxHQUFHLDhGQUltQyxDQUFDO0FBRTNDLFFBQUEsTUFBTSxHQUF3QjtJQUN6QyxPQUFPLEVBQUUsY0FBYztJQUN2QixRQUFRLEVBQUUsbUJBQW1CO0lBQzdCLE9BQU8sRUFBRSxVQUFDLENBQUM7UUFDVCxPQUFBLENBQUM7YUFDRSxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2xCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDcEIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUM7YUFDRCxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNaLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ3RCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsV0FBVyxFQUFFLDhDQUE4QztTQUM1RCxDQUFDO0lBWEosQ0FXSTtJQUNOLE9BQU8sRUFBRSxVQUFPLElBQUk7Ozs7O29CQUNaLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUVULElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQzt3QkFDcEIsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO3dCQUNoQixRQUFRLEVBQUU7NEJBQ1IsR0FBRyxFQUFVLElBQUksQ0FBQyxPQUFPO3lCQUMxQjtxQkFDRixDQUFDLENBQUM7b0JBQ0csWUFBWSxHQUFHLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUVwRCxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUNwQyxZQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFnQixDQUFDLENBQ3ZDLEVBQUE7O29CQUZLLElBQUksR0FBRyxTQUVaO29CQUNnQixxQkFBTSxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsRUFBQTs7b0JBQTVELFFBQVEsR0FBRyxTQUFpRDtvQkFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztTQUN0QjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB5YXJncyBmcm9tIFwieWFyZ3NcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IFdBU0kgfSBmcm9tIFwid2FzaVwiO1xuXG5jb25zdCBydW5DbWRVc2FnZSA9IGBhc2IgcnVuXG5SdW4gYSBXQVNJIGJpbmFyeVxuXG5VU0FHRTpcbiAgICAkMCBydW4gW29wdGlvbnNdIFtiaW5hcnkgcGF0aF0gLS0gW2JpbmFyeSBvcHRpb25zXWA7XG5cbmV4cG9ydCBjb25zdCBSdW5DbWQ6IHlhcmdzLkNvbW1hbmRNb2R1bGUgPSB7XG4gIGNvbW1hbmQ6IFwicnVuIDxiaW5hcnk+XCIsXG4gIGRlc2NyaWJlOiBcIlJ1biBhIFdBU0kgYmluYXJ5XCIsXG4gIGJ1aWxkZXI6ICh5KSA9PlxuICAgIHlcbiAgICAgIC51c2FnZShydW5DbWRVc2FnZSlcbiAgICAgIC5wb3NpdGlvbmFsKFwiYmluYXJ5XCIsIHtcbiAgICAgICAgZGVzY3JpYmU6IFwicGF0aCB0byBXYXNtIGJpbmFyeVwiLFxuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSlcbiAgICAgIC5vcHRpb24oXCJwcmVvcGVuXCIsIHtcbiAgICAgICAgYWxpYXM6IFtcInBcIl0sXG4gICAgICAgIGRlZmF1bHQ6IHByb2Nlc3MuY3dkKCksXG4gICAgICAgIGJvb2xlYW46IGZhbHNlLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBkaXJlY3RvcmllcyB0byBvcGVuLlwiLFxuICAgICAgfSksXG4gIGhhbmRsZXI6IGFzeW5jIChhcmdzKSA9PiB7XG4gICAgY29uc3Qgd2FzaUFyZ3MgPSBhcmdzW1wiX1wiXS5zbGljZSgxKTtcbiAgICBjb25zb2xlLmxvZyh3YXNpQXJncyk7XG4gICAgcHJvY2Vzcy5leGl0KDEpXG5cbiAgICBjb25zdCB3YXNpID0gbmV3IFdBU0koe1xuICAgICAgYXJnczogd2FzaUFyZ3MsXG4gICAgICBlbnY6IHByb2Nlc3MuZW52LFxuICAgICAgcHJlb3BlbnM6IHtcbiAgICAgICAgXCIvXCI6IDxzdHJpbmc+YXJncy5wcmVvcGVuLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBpbXBvcnRPYmplY3QgPSB7IHdhc2lfc25hcHNob3RfcHJldmlldzE6IHdhc2kud2FzaUltcG9ydCB9O1xuXG4gICAgY29uc3Qgd2FzbSA9IGF3YWl0IFdlYkFzc2VtYmx5LmNvbXBpbGUoXG4gICAgICBmcy5yZWFkRmlsZVN5bmMoYXJncy5iaW5hcnkgYXMgc3RyaW5nKVxuICAgICk7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZSh3YXNtLCBpbXBvcnRPYmplY3QpO1xuICAgIHdhc2kuc3RhcnQoaW5zdGFuY2UpO1xuICB9LFxufTtcbiJdfQ==