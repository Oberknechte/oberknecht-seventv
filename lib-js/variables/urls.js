"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urls = void 0;
const __1 = require("..");
class urls {
    static seventv = class {
        static gql = class {
            static _base = "https://7tv.io/v3/gql";
            static _headers = (sym, customtoken) => {
                let r = {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${customtoken ?? __1.i.clientData[sym]?._options?.token}`,
                };
                return r;
            };
        };
    };
    static _ = (...args) => {
        let o = this[args[0]];
        [...args].slice(1).forEach((a) => {
            o = o[a];
        });
        return o;
    };
    static _url = (...args2) => {
        let args = [...(!Array.isArray(args2) ? [args2] : args2)];
        if (!this[args[0]])
            args.unshift("seventv", "gql");
        return ((!/^https:\/{2}/g.test(args[0]) ? this[args[0]]._base : args[0]) +
            (this._(...args)?.endpoint ?? args2.join("/")));
    };
}
exports.urls = urls;
