!function (modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {i: moduleId, l: !1, exports: {}};
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports
    }

    var installedModules = {};
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        })
    }, __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function () {
            return module.default
        } : function () {
            return module
        };
        return __webpack_require__.d(getter, "a", getter), getter
    }, __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 111)
}([function (module, exports) {
    var core = module.exports = {version: "2.5.7"};
    "number" == typeof __e && (__e = core)
}, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function __extends(d, b) {
        function __() {
            this.constructor = d
        }

        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __)
    }

    function __rest(s, e) {
        var t = {};
        for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
        if (null != s && "function" == typeof Object.getOwnPropertySymbols) for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) e.indexOf(p[i]) < 0 && (t[p[i]] = s[p[i]]);
        return t
    }

    function __decorate(decorators, target, key, desc) {
        var d, c = arguments.length,
            r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r
    }

    function __param(paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex)
        }
    }

    function __metadata(metadataKey, metadataValue) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(metadataKey, metadataValue)
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value))
                } catch (e) {
                    reject(e)
                }
            }

            function rejected(value) {
                try {
                    step(generator.throw(value))
                } catch (e) {
                    reject(e)
                }
            }

            function step(result) {
                result.done ? resolve(result.value) : new P(function (resolve) {
                    resolve(result.value)
                }).then(fulfilled, rejected)
            }

            step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
    }

    function __generator(thisArg, body) {
        function verb(n) {
            return function (v) {
                return step([n, v])
            }
        }

        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            for (; _;) try {
                if (f = 1, y && (t = y[2 & op[0] ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                switch (y = 0, t && (op = [0, t.value]), op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        return _.label++, {value: op[1], done: !1};
                    case 5:
                        _.label++, y = op[1], op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop(), _.trys.pop();
                        continue;
                    default:
                        if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                            _ = 0;
                            continue
                        }
                        if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break
                        }
                        if (6 === op[0] && _.label < t[1]) {
                            _.label = t[1], t = op;
                            break
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2], _.ops.push(op);
                            break
                        }
                        t[2] && _.ops.pop(), _.trys.pop();
                        continue
                }
                op = body.call(thisArg, _)
            } catch (e) {
                op = [6, e], y = 0
            } finally {
                f = t = 0
            }
            if (5 & op[0]) throw op[1];
            return {value: op[0] ? op[1] : void 0, done: !0}
        }

        var f, y, t, g, _ = {
            label: 0, sent: function () {
                if (1 & t[0]) throw t[1];
                return t[1]
            }, trys: [], ops: []
        };
        return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, "function" == typeof Symbol && (g[Symbol.iterator] = function () {
            return this
        }), g
    }

    function __exportStar(m, exports) {
        for (var p in m) exports.hasOwnProperty(p) || (exports[p] = m[p])
    }

    function __values(o) {
        var m = "function" == typeof Symbol && o[Symbol.iterator], i = 0;
        return m ? m.call(o) : {
            next: function () {
                return o && i >= o.length && (o = void 0), {value: o && o[i++], done: !o}
            }
        }
    }

    function __read(o, n) {
        var m = "function" == typeof Symbol && o[Symbol.iterator];
        if (!m) return o;
        var r, e, i = m.call(o), ar = [];
        try {
            for (; (void 0 === n || n-- > 0) && !(r = i.next()).done;) ar.push(r.value)
        } catch (error) {
            e = {error: error}
        } finally {
            try {
                r && !r.done && (m = i.return) && m.call(i)
            } finally {
                if (e) throw e.error
            }
        }
        return ar
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v)
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        function verb(n) {
            g[n] && (i[n] = function (v) {
                return new Promise(function (a, b) {
                    q.push([n, v, a, b]) > 1 || resume(n, v)
                })
            })
        }

        function resume(n, v) {
            try {
                step(g[n](v))
            } catch (e) {
                settle(q[0][3], e)
            }
        }

        function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r)
        }

        function fulfill(value) {
            resume("next", value)
        }

        function reject(value) {
            resume("throw", value)
        }

        function settle(f, v) {
            f(v), q.shift(), q.length && resume(q[0][0], q[0][1])
        }

        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var i, g = generator.apply(thisArg, _arguments || []), q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
            return this
        }, i
    }

    function __asyncDelegator(o) {
        function verb(n, f) {
            o[n] && (i[n] = function (v) {
                return (p = !p) ? {value: __await(o[n](v)), done: "return" === n} : f ? f(v) : v
            })
        }

        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
            throw e
        }), verb("return"), i[Symbol.iterator] = function () {
            return this
        }, i
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator];
        return m ? m.call(o) : "function" == typeof __values ? __values(o) : o[Symbol.iterator]()
    }

    function __makeTemplateObject(cooked, raw) {
        return Object.defineProperty ? Object.defineProperty(cooked, "raw", {value: raw}) : cooked.raw = raw, cooked
    }

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && (result[k] = mod[k]);
        return result.default = mod, result
    }

    function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {default: mod}
    }

    Object.defineProperty(__webpack_exports__, "__esModule", {value: !0}), __webpack_exports__.__extends = __extends, __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return __assign
    }), __webpack_exports__.__rest = __rest, __webpack_exports__.__decorate = __decorate, __webpack_exports__.__param = __param, __webpack_exports__.__metadata = __metadata, __webpack_exports__.__awaiter = __awaiter, __webpack_exports__.__generator = __generator, __webpack_exports__.__exportStar = __exportStar, __webpack_exports__.__values = __values, __webpack_exports__.__read = __read, __webpack_exports__.__spread = __spread, __webpack_exports__.__await = __await, __webpack_exports__.__asyncGenerator = __asyncGenerator, __webpack_exports__.__asyncDelegator = __asyncDelegator, __webpack_exports__.__asyncValues = __asyncValues, __webpack_exports__.__makeTemplateObject = __makeTemplateObject, __webpack_exports__.__importStar = __importStar, __webpack_exports__.__importDefault = __importDefault;
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (d, b) {
        d.__proto__ = b
    } || function (d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p])
    }, __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p])
        }
        return t
    }
}, function (module, exports, __webpack_require__) {
    var global = __webpack_require__(3), core = __webpack_require__(0), ctx = __webpack_require__(12),
        hide = __webpack_require__(13), has = __webpack_require__(15), $export = function (type, name, source) {
            var key, own, out, IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S,
                IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W,
                exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), expProto = exports.prototype,
                target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {}).prototype;
            IS_GLOBAL && (source = name);
            for (key in source) (own = !IS_FORCED && target && void 0 !== target[key]) && has(exports, key) || (out = own ? target[key] : source[key], exports[key] = IS_GLOBAL && "function" != typeof target[key] ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
                var F = function (a, b, c) {
                    if (this instanceof C) {
                        switch (arguments.length) {
                            case 0:
                                return new C;
                            case 1:
                                return new C(a);
                            case 2:
                                return new C(a, b)
                        }
                        return new C(a, b, c)
                    }
                    return C.apply(this, arguments)
                };
                return F.prototype = C.prototype, F
            }(out) : IS_PROTO && "function" == typeof out ? ctx(Function.call, out) : out, IS_PROTO && ((exports.virtual || (exports.virtual = {}))[key] = out, type & $export.R && expProto && !expProto[key] && hide(expProto, key, out)))
        };
    $export.F = 1, $export.G = 2, $export.S = 4, $export.P = 8, $export.B = 16, $export.W = 32, $export.U = 64, $export.R = 128, module.exports = $export
}, function (module, exports) {
    var global = module.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = global)
}, function (module, exports, __webpack_require__) {
    var store = __webpack_require__(57)("wks"), uid = __webpack_require__(39), Symbol = __webpack_require__(3).Symbol,
        USE_SYMBOL = "function" == typeof Symbol;
    (module.exports = function (name) {
        return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name))
    }).store = store
}, function (module, exports) {
    module.exports = function (it) {
        return "object" == typeof it ? null !== it : "function" == typeof it
    }
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(116), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    var anObject = __webpack_require__(8), IE8_DOM_DEFINE = __webpack_require__(75),
        toPrimitive = __webpack_require__(53), dP = Object.defineProperty;
    exports.f = __webpack_require__(9) ? Object.defineProperty : function (O, P, Attributes) {
        if (anObject(O), P = toPrimitive(P, !0), anObject(Attributes), IE8_DOM_DEFINE) try {
            return dP(O, P, Attributes)
        } catch (e) {
        }
        if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
        return "value" in Attributes && (O[P] = Attributes.value), O
    }
}, function (module, exports, __webpack_require__) {
    var isObject = __webpack_require__(5);
    module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + " is not an object!");
        return it
    }
}, function (module, exports, __webpack_require__) {
    module.exports = !__webpack_require__(14)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.Dictionary = exports.Map_ = exports.FixedSizeList = exports.FixedSizeBinary = exports.SparseUnion = exports.DenseUnion = exports.Union = exports.Struct = exports.List = exports.Interval = exports.Timestamp = exports.Time = exports.Date_ = exports.Decimal = exports.Bool = exports.Utf8 = exports.Binary = exports.Float64 = exports.Float32 = exports.Float16 = exports.Float = exports.Uint64 = exports.Uint32 = exports.Uint16 = exports.Uint8 = exports.Int64 = exports.Int32 = exports.Int16 = exports.Int8 = exports.Int = exports.Null = exports.DataType = exports.Type = exports.Field = exports.Schema = exports.MetadataVersion = exports.MessageHeader = exports.IntervalUnit = exports.VectorType = exports.UnionMode = exports.Precision = exports.TimeUnit = exports.DateUnit = exports.ArrowType = exports.Long = void 0;
    var _defineProperty = __webpack_require__(43), _defineProperty2 = _interopRequireDefault(_defineProperty),
        _toStringTag = __webpack_require__(106), _toStringTag2 = _interopRequireDefault(_toStringTag),
        _create = __webpack_require__(44), _create2 = _interopRequireDefault(_create), _map = __webpack_require__(70),
        _map2 = _interopRequireDefault(_map), _tslib = __webpack_require__(1),
        tslib_1 = _interopRequireWildcard(_tslib), _Schema = __webpack_require__(32),
        Schema_ = _interopRequireWildcard(_Schema), _Message = __webpack_require__(108),
        Message_ = _interopRequireWildcard(_Message), _flatbuffers = __webpack_require__(71),
        _metadata = __webpack_require__(47), _visitor = __webpack_require__(48),
        DateUnit = (exports.Long = _flatbuffers.flatbuffers.Long, exports.ArrowType = Schema_.org.apache.arrow.flatbuf.Type, exports.DateUnit = Schema_.org.apache.arrow.flatbuf.DateUnit),
        TimeUnit = exports.TimeUnit = Schema_.org.apache.arrow.flatbuf.TimeUnit,
        Precision = exports.Precision = Schema_.org.apache.arrow.flatbuf.Precision,
        UnionMode = exports.UnionMode = Schema_.org.apache.arrow.flatbuf.UnionMode,
        IntervalUnit = (exports.VectorType = Schema_.org.apache.arrow.flatbuf.VectorType, exports.IntervalUnit = Schema_.org.apache.arrow.flatbuf.IntervalUnit),
        MessageHeader = exports.MessageHeader = Message_.org.apache.arrow.flatbuf.MessageHeader,
        MetadataVersion = exports.MetadataVersion = Schema_.org.apache.arrow.flatbuf.MetadataVersion,
        Schema = function () {
            function Schema(fields, metadata, version, dictionaries) {
                void 0 === version && (version = MetadataVersion.V4), void 0 === dictionaries && (dictionaries = new _map2.default), this.fields = fields, this.version = version, this.metadata = metadata, this.dictionaries = dictionaries
            }

            return Schema.from = function (vectors) {
                return new Schema(vectors.map(function (v, i) {
                    return new Field("" + i, v.type)
                }))
            }, Object.defineProperty(Schema.prototype, "bodyLength", {
                get: function () {
                    return this._bodyLength
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(Schema.prototype, "headerType", {
                get: function () {
                    return this._headerType
                }, enumerable: !0, configurable: !0
            }), Schema.prototype.select = function () {
                for (var fieldNames = [], _i = 0; _i < arguments.length; _i++) fieldNames[_i] = arguments[_i];
                var namesToKeep = fieldNames.reduce(function (xs, x) {
                        return (xs[x] = !0) && xs
                    }, (0, _create2.default)(null)), newDictFields = new _map2.default,
                    newFields = this.fields.filter(function (f) {
                        return namesToKeep[f.name]
                    });
                return this.dictionaries.forEach(function (f, dictId) {
                    return namesToKeep[f.name] && newDictFields.set(dictId, f)
                }), new Schema(newFields, this.metadata, this.version, newDictFields)
            }, Schema[_toStringTag2.default] = function (prototype) {
                return prototype._bodyLength = 0, prototype._headerType = MessageHeader.Schema, "Schema"
            }(Schema.prototype), Schema
        }();
    exports.Schema = Schema;
    var Field = function () {
        function Field(name, type, nullable, metadata) {
            void 0 === nullable && (nullable = !1), this.name = name, this.type = type, this.nullable = nullable, this.metadata = metadata
        }

        return Field.prototype.toString = function () {
            return this.name + ": " + this.type
        }, Object.defineProperty(Field.prototype, "typeId", {
            get: function () {
                return this.type.TType
            }, enumerable: !0, configurable: !0
        }), (0, _defineProperty2.default)(Field.prototype, _toStringTag2.default, {
            get: function () {
                return "Field"
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(Field.prototype, "indices", {
            get: function () {
                return DataType.isDictionary(this.type) ? this.type.indices : this.type
            }, enumerable: !0, configurable: !0
        }), Field
    }();
    exports.Field = Field;
    var Type = exports.Type = void 0;
    !function (Type) {
        Type[Type.NONE = 0] = "NONE", Type[Type.Null = 1] = "Null", Type[Type.Int = 2] = "Int", Type[Type.Float = 3] = "Float", Type[Type.Binary = 4] = "Binary", Type[Type.Utf8 = 5] = "Utf8", Type[Type.Bool = 6] = "Bool", Type[Type.Decimal = 7] = "Decimal", Type[Type.Date = 8] = "Date", Type[Type.Time = 9] = "Time", Type[Type.Timestamp = 10] = "Timestamp", Type[Type.Interval = 11] = "Interval", Type[Type.List = 12] = "List", Type[Type.Struct = 13] = "Struct", Type[Type.Union = 14] = "Union", Type[Type.FixedSizeBinary = 15] = "FixedSizeBinary", Type[Type.FixedSizeList = 16] = "FixedSizeList", Type[Type.Map = 17] = "Map", Type.Dictionary = "Dictionary", Type.DenseUnion = "DenseUnion", Type.SparseUnion = "SparseUnion"
    }(Type || (exports.Type = Type = {}));
    var DataType = function () {
        function DataType(TType, children) {
            this.TType = TType, this.children = children
        }

        return DataType.isNull = function (x) {
            return x && x.TType === Type.Null
        }, DataType.isInt = function (x) {
            return x && x.TType === Type.Int
        }, DataType.isFloat = function (x) {
            return x && x.TType === Type.Float
        }, DataType.isBinary = function (x) {
            return x && x.TType === Type.Binary
        }, DataType.isUtf8 = function (x) {
            return x && x.TType === Type.Utf8
        }, DataType.isBool = function (x) {
            return x && x.TType === Type.Bool
        }, DataType.isDecimal = function (x) {
            return x && x.TType === Type.Decimal
        }, DataType.isDate = function (x) {
            return x && x.TType === Type.Date
        }, DataType.isTime = function (x) {
            return x && x.TType === Type.Time
        }, DataType.isTimestamp = function (x) {
            return x && x.TType === Type.Timestamp
        }, DataType.isInterval = function (x) {
            return x && x.TType === Type.Interval
        }, DataType.isList = function (x) {
            return x && x.TType === Type.List
        }, DataType.isStruct = function (x) {
            return x && x.TType === Type.Struct
        }, DataType.isUnion = function (x) {
            return x && x.TType === Type.Union
        }, DataType.isDenseUnion = function (x) {
            return x && x.TType === Type.DenseUnion
        }, DataType.isSparseUnion = function (x) {
            return x && x.TType === Type.SparseUnion
        }, DataType.isFixedSizeBinary = function (x) {
            return x && x.TType === Type.FixedSizeBinary
        }, DataType.isFixedSizeList = function (x) {
            return x && x.TType === Type.FixedSizeList
        }, DataType.isMap = function (x) {
            return x && x.TType === Type.Map
        }, DataType.isDictionary = function (x) {
            return x && x.TType === Type.Dictionary
        }, DataType.prototype.acceptTypeVisitor = function (visitor) {
            return _visitor.TypeVisitor.visitTypeInline(visitor, this)
        }, DataType[_toStringTag2.default] = function (proto) {
            return proto.ArrayType = Array, proto[_toStringTag2.default] = "DataType"
        }(DataType.prototype), DataType
    }();
    exports.DataType = DataType;
    var Null = function (_super) {
        function Null() {
            return _super.call(this, Type.Null) || this
        }

        return tslib_1.__extends(Null, _super), Null.prototype.toString = function () {
            return "Null"
        }, Null[_toStringTag2.default] = function (proto) {
            return proto[_toStringTag2.default] = "Null"
        }(Null.prototype), Null
    }(DataType);
    exports.Null = Null;
    var Int = function (_super) {
        function Int(isSigned, bitWidth) {
            var _this = _super.call(this, Type.Int) || this;
            return _this.isSigned = isSigned, _this.bitWidth = bitWidth, _this
        }

        return tslib_1.__extends(Int, _super), Object.defineProperty(Int.prototype, "ArrayType", {
            get: function () {
                switch (this.bitWidth) {
                    case 8:
                        return this.isSigned ? Int8Array : Uint8Array;
                    case 16:
                        return this.isSigned ? Int16Array : Uint16Array;
                    case 32:
                    case 64:
                        return this.isSigned ? Int32Array : Uint32Array
                }
                throw new Error("Unrecognized " + this[_toStringTag2.default] + " type")
            }, enumerable: !0, configurable: !0
        }), Int.prototype.toString = function () {
            return (this.isSigned ? "I" : "Ui") + "nt" + this.bitWidth
        }, Int[_toStringTag2.default] = function (proto) {
            return proto[_toStringTag2.default] = "Int"
        }(Int.prototype), Int
    }(DataType);
    exports.Int = Int;
    var Int8 = function (_super) {
        function Int8() {
            return _super.call(this, !0, 8) || this
        }

        return tslib_1.__extends(Int8, _super), Int8
    }(Int);
    exports.Int8 = Int8;
    var Int16 = function (_super) {
        function Int16() {
            return _super.call(this, !0, 16) || this
        }

        return tslib_1.__extends(Int16, _super), Int16
    }(Int);
    exports.Int16 = Int16;
    var Int32 = function (_super) {
        function Int32() {
            return _super.call(this, !0, 32) || this
        }

        return tslib_1.__extends(Int32, _super), Int32
    }(Int);
    exports.Int32 = Int32;
    var Int64 = function (_super) {
        function Int64() {
            return _super.call(this, !0, 64) || this
        }

        return tslib_1.__extends(Int64, _super), Int64
    }(Int);
    exports.Int64 = Int64;
    var Uint8 = function (_super) {
        function Uint8() {
            return _super.call(this, !1, 8) || this
        }

        return tslib_1.__extends(Uint8, _super), Uint8
    }(Int);
    exports.Uint8 = Uint8;
    var Uint16 = function (_super) {
        function Uint16() {
            return _super.call(this, !1, 16) || this
        }

        return tslib_1.__extends(Uint16, _super), Uint16
    }(Int);
    exports.Uint16 = Uint16;
    var Uint32 = function (_super) {
        function Uint32() {
            return _super.call(this, !1, 32) || this
        }

        return tslib_1.__extends(Uint32, _super), Uint32
    }(Int);
    exports.Uint32 = Uint32;
    var Uint64 = function (_super) {
        function Uint64() {
            return _super.call(this, !1, 64) || this
        }

        return tslib_1.__extends(Uint64, _super), Uint64
    }(Int);
    exports.Uint64 = Uint64;
    var Float = function (_super) {
        function Float(precision) {
            var _this = _super.call(this, Type.Float) || this;
            return _this.precision = precision, _this
        }

        return tslib_1.__extends(Float, _super), Object.defineProperty(Float.prototype, "ArrayType", {
            get: function () {
                switch (this.precision) {
                    case Precision.HALF:
                        return Uint16Array;
                    case Precision.SINGLE:
                        return Float32Array;
                    case Precision.DOUBLE:
                        return Float64Array
                }
                throw new Error("Unrecognized " + this[_toStringTag2.default] + " type")
            }, enumerable: !0, configurable: !0
        }), Float.prototype.toString = function () {
            return "Float" + (this.precision << 5 || 16)
        }, Float[_toStringTag2.default] = function (proto) {
            return proto[_toStringTag2.default] = "Float"
        }(Float.prototype), Float
    }(DataType);
    exports.Float = Float;
    var Float16 = function (_super) {
        function Float16() {
            return _super.call(this, Precision.HALF) || this
        }

        return tslib_1.__extends(Float16, _super), Float16
    }(Float);
    exports.Float16 = Float16;
    var Float32 = function (_super) {
        function Float32() {
            return _super.call(this, Precision.SINGLE) || this
        }

        return tslib_1.__extends(Float32, _super), Float32
    }(Float);
    exports.Float32 = Float32;
    var Float64 = function (_super) {
        function Float64() {
            return _super.call(this, Precision.DOUBLE) || this
        }

        return tslib_1.__extends(Float64, _super), Float64
    }(Float);
    exports.Float64 = Float64;
    var Binary = function (_super) {
        function Binary() {
            return _super.call(this, Type.Binary) || this
        }

        return tslib_1.__extends(Binary, _super), Binary.prototype.toString = function () {
            return "Binary"
        }, Binary[_toStringTag2.default] = function (proto) {
            return proto.ArrayType = Uint8Array, proto[_toStringTag2.default] = "Binary"
        }(Binary.prototype), Binary
    }(DataType);
    exports.Binary = Binary;
    var Utf8 = function (_super) {
        function Utf8() {
            return _super.call(this, Type.Utf8) || this
        }

        return tslib_1.__extends(Utf8, _super), Utf8.prototype.toString = function () {
            return "Utf8"
        }, Utf8[_toStringTag2.default] = function (proto) {
            return proto.ArrayType = Uint8Array, proto[_toStringTag2.default] = "Utf8"
        }(Utf8.prototype), Utf8
    }(DataType);
    exports.Utf8 = Utf8;
    var Bool = function (_super) {
        function Bool() {
            return _super.call(this, Type.Bool) || this
        }

        return tslib_1.__extends(Bool, _super), Bool.prototype.toString = function () {
            return "Bool"
        }, Bool[_toStringTag2.default] = function (proto) {
            return proto.ArrayType = Uint8Array, proto[_toStringTag2.default] = "Bool"
        }(Bool.prototype), Bool
    }(DataType);
    exports.Bool = Bool;
    var Decimal = function (_super) {
        function Decimal(scale, precision) {
            var _this = _super.call(this, Type.Decimal) || this;
            return _this.scale = scale, _this.precision = precision, _this
        }

        return tslib_1.__extends(Decimal, _super), Decimal.prototype.toString = function () {
            return "Decimal[" + this.precision + "e" + (this.scale > 0 ? "+" : "") + this.scale + "]"
        }, Decimal[_toStringTag2.default] = function (proto) {
            return proto.ArrayType = Uint32Array, proto[_toStringTag2.default] = "Decimal"
        }(Decimal.prototype), Decimal
    }(DataType);
    exports.Decimal = Decimal;
    var Date_ = function (_super) {
        function Date_(unit) {
            var _this = _super.call(this, Type.Date) || this;
            return _this.unit = unit, _this
        }

        return tslib_1.__extends(Date_, _super), Date_.prototype.toString = function () {
            return "Date" + 32 * (this.unit + 1) + "<" + DateUnit[this.unit] + ">"
        }, Date_[_toStringTag2.default] = function (proto) {
            return proto.ArrayType = Int32Array, proto[_toStringTag2.default] = "Date"
        }(Date_.prototype), Date_
    }(DataType);
    exports.Date_ = Date_;
    var Time = function (_super) {
        function Time(unit, bitWidth) {
            var _this = _super.call(this, Type.Time) || this;
            return _this.unit = unit, _this.bitWidth = bitWidth, _this
        }

        return tslib_1.__extends(Time, _super), Time.prototype.toString = function () {
            return "Time" + this.bitWidth + "<" + TimeUnit[this.unit] + ">"
        }, Time[_toStringTag2.default] = function (proto) {
            return proto.ArrayType = Uint32Array, proto[_toStringTag2.default] = "Time"
        }(Time.prototype), Time
    }(DataType);
    exports.Time = Time;
    var Timestamp = function (_super) {
        function Timestamp(unit, timezone) {
            var _this = _super.call(this, Type.Timestamp) || this;
            return _this.unit = unit, _this.timezone = timezone, _this
        }

        return tslib_1.__extends(Timestamp, _super), Timestamp.prototype.toString = function () {
            return "Timestamp<" + TimeUnit[this.unit] + (this.timezone ? ", " + this.timezone : "") + ">"
        }, Timestamp[_toStringTag2.default] = function (proto) {
            return proto.ArrayType = Int32Array, proto[_toStringTag2.default] = "Timestamp"
        }(Timestamp.prototype), Timestamp
    }(DataType);
    exports.Timestamp = Timestamp;
    var Interval = function (_super) {
        function Interval(unit) {
            var _this = _super.call(this, Type.Interval) || this;
            return _this.unit = unit, _this
        }

        return tslib_1.__extends(Interval, _super), Interval.prototype.toString = function () {
            return "Interval<" + IntervalUnit[this.unit] + ">"
        }, Interval[_toStringTag2.default] = function (proto) {
            return proto.ArrayType = Int32Array, proto[_toStringTag2.default] = "Interval"
        }(Interval.prototype), Interval
    }(DataType);
    exports.Interval = Interval;
    var List = function (_super) {
        function List(children) {
            var _this = _super.call(this, Type.List, children) || this;
            return _this.children = children, _this
        }

        return tslib_1.__extends(List, _super), List.prototype.toString = function () {
            return "List<" + this.valueType + ">"
        }, Object.defineProperty(List.prototype, "ArrayType", {
            get: function () {
                return this.valueType.ArrayType
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(List.prototype, "valueType", {
            get: function () {
                return this.children[0].type
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(List.prototype, "valueField", {
            get: function () {
                return this.children[0]
            }, enumerable: !0, configurable: !0
        }), List[_toStringTag2.default] = function (proto) {
            return proto[_toStringTag2.default] = "List"
        }(List.prototype), List
    }(DataType);
    exports.List = List;
    var Struct = function (_super) {
        function Struct(children) {
            var _this = _super.call(this, Type.Struct, children) || this;
            return _this.children = children, _this
        }

        return tslib_1.__extends(Struct, _super), Struct.prototype.toString = function () {
            return "Struct<" + this.children.map(function (f) {
                return f.type
            }).join(", ") + ">"
        }, Struct[_toStringTag2.default] = function (proto) {
            return proto[_toStringTag2.default] = "Struct"
        }(Struct.prototype), Struct
    }(DataType);
    exports.Struct = Struct;
    var Union = function (_super) {
        function Union(mode, typeIds, children) {
            var _this = _super.call(this, mode === UnionMode.Sparse ? Type.SparseUnion : Type.DenseUnion, children) || this;
            return _this.mode = mode, _this.typeIds = typeIds, _this.children = children, _this
        }

        return tslib_1.__extends(Union, _super), Union.prototype.toString = function () {
            return this[_toStringTag2.default] + "<" + this.typeIds.map(function (x) {
                return Type[x]
            }).join(" | ") + ">"
        }, Union[_toStringTag2.default] = function (proto) {
            return proto.ArrayType = Int8Array, proto[_toStringTag2.default] = "Union"
        }(Union.prototype), Union
    }(DataType);
    exports.Union = Union;
    var DenseUnion = function (_super) {
        function DenseUnion(typeIds, children) {
            return _super.call(this, UnionMode.Dense, typeIds, children) || this
        }

        return tslib_1.__extends(DenseUnion, _super), DenseUnion[_toStringTag2.default] = function (proto) {
            return proto[_toStringTag2.default] = "DenseUnion"
        }(DenseUnion.prototype), DenseUnion
    }(Union);
    exports.DenseUnion = DenseUnion;
    var SparseUnion = function (_super) {
        function SparseUnion(typeIds, children) {
            return _super.call(this, UnionMode.Sparse, typeIds, children) || this
        }

        return tslib_1.__extends(SparseUnion, _super), SparseUnion[_toStringTag2.default] = function (proto) {
            return proto[_toStringTag2.default] = "SparseUnion"
        }(SparseUnion.prototype), SparseUnion
    }(Union);
    exports.SparseUnion = SparseUnion;
    var FixedSizeBinary = function (_super) {
        function FixedSizeBinary(byteWidth) {
            var _this = _super.call(this, Type.FixedSizeBinary) || this;
            return _this.byteWidth = byteWidth, _this
        }

        return tslib_1.__extends(FixedSizeBinary, _super), FixedSizeBinary.prototype.toString = function () {
            return "FixedSizeBinary[" + this.byteWidth + "]"
        }, FixedSizeBinary[_toStringTag2.default] = function (proto) {
            return proto.ArrayType = Uint8Array, proto[_toStringTag2.default] = "FixedSizeBinary"
        }(FixedSizeBinary.prototype), FixedSizeBinary
    }(DataType);
    exports.FixedSizeBinary = FixedSizeBinary;
    var FixedSizeList = function (_super) {
        function FixedSizeList(listSize, children) {
            var _this = _super.call(this, Type.FixedSizeList, children) || this;
            return _this.listSize = listSize, _this.children = children, _this
        }

        return tslib_1.__extends(FixedSizeList, _super), Object.defineProperty(FixedSizeList.prototype, "ArrayType", {
            get: function () {
                return this.valueType.ArrayType
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(FixedSizeList.prototype, "valueType", {
            get: function () {
                return this.children[0].type
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(FixedSizeList.prototype, "valueField", {
            get: function () {
                return this.children[0]
            }, enumerable: !0, configurable: !0
        }), FixedSizeList.prototype.toString = function () {
            return "FixedSizeList[" + this.listSize + "]<" + this.valueType + ">"
        }, FixedSizeList[_toStringTag2.default] = function (proto) {
            return proto[_toStringTag2.default] = "FixedSizeList"
        }(FixedSizeList.prototype), FixedSizeList
    }(DataType);
    exports.FixedSizeList = FixedSizeList;
    var Map_ = function (_super) {
        function Map_(keysSorted, children) {
            var _this = _super.call(this, Type.Map, children) || this;
            return _this.keysSorted = keysSorted, _this.children = children, _this
        }

        return tslib_1.__extends(Map_, _super), Map_.prototype.toString = function () {
            return "Map<" + this.children.join(", ") + ">"
        }, Map_[_toStringTag2.default] = function (proto) {
            return proto[_toStringTag2.default] = "Map_"
        }(Map_.prototype), Map_
    }(DataType);
    exports.Map_ = Map_;
    var Dictionary = function (_super) {
        function Dictionary(dictionary, indices, id, isOrdered) {
            var _this = _super.call(this, Type.Dictionary) || this;
            return _this.indices = indices, _this.dictionary = dictionary, _this.isOrdered = isOrdered || !1, _this.id = null == id ? _metadata.DictionaryBatch.getId() : "number" == typeof id ? id : id.low, _this
        }

        return tslib_1.__extends(Dictionary, _super), Object.defineProperty(Dictionary.prototype, "ArrayType", {
            get: function () {
                return this.dictionary.ArrayType
            }, enumerable: !0, configurable: !0
        }), Dictionary.prototype.toString = function () {
            return "Dictionary<" + this.indices + ", " + this.dictionary + ">"
        }, Dictionary[_toStringTag2.default] = function (proto) {
            return proto[_toStringTag2.default] = "Dictionary"
        }(Dictionary.prototype), Dictionary
    }(DataType);
    exports.Dictionary = Dictionary
}, function (module, exports) {
    var g;
    g = function () {
        return this
    }();
    try {
        g = g || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (g = window)
    }
    module.exports = g
}, function (module, exports, __webpack_require__) {
    var aFunction = __webpack_require__(23);
    module.exports = function (fn, that, length) {
        if (aFunction(fn), void 0 === that) return fn;
        switch (length) {
            case 1:
                return function (a) {
                    return fn.call(that, a)
                };
            case 2:
                return function (a, b) {
                    return fn.call(that, a, b)
                };
            case 3:
                return function (a, b, c) {
                    return fn.call(that, a, b, c)
                }
        }
        return function () {
            return fn.apply(that, arguments)
        }
    }
}, function (module, exports, __webpack_require__) {
    var dP = __webpack_require__(7), createDesc = __webpack_require__(37);
    module.exports = __webpack_require__(9) ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value))
    } : function (object, key, value) {
        return object[key] = value, object
    }
}, function (module, exports) {
    module.exports = function (exec) {
        try {
            return !!exec()
        } catch (e) {
            return !0
        }
    }
}, function (module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function (it, key) {
        return hasOwnProperty.call(it, key)
    }
}, function (module, exports, __webpack_require__) {
    var IObject = __webpack_require__(54), defined = __webpack_require__(36);
    module.exports = function (it) {
        return IObject(defined(it))
    }
}, function (module, exports, __webpack_require__) {
    "use strict";

    function Duplex(options) {
        if (!(this instanceof Duplex)) return new Duplex(options);
        Readable.call(this, options), Writable.call(this, options), options && !1 === options.readable && (this.readable = !1), options && !1 === options.writable && (this.writable = !1), this.allowHalfOpen = !0, options && !1 === options.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", onend)
    }

    function onend() {
        this.allowHalfOpen || this._writableState.ended || pna.nextTick(onEndNT, this)
    }

    function onEndNT(self) {
        self.end()
    }

    var pna = __webpack_require__(45), objectKeys = Object.keys || function (obj) {
        var keys = [];
        for (var key in obj) keys.push(key);
        return keys
    };
    module.exports = Duplex;
    var util = __webpack_require__(31);
    util.inherits = __webpack_require__(21);
    var Readable = __webpack_require__(98), Writable = __webpack_require__(68);
    util.inherits(Duplex, Readable);
    for (var keys = objectKeys(Writable.prototype), v = 0; v < keys.length; v++) {
        var method = keys[v];
        Duplex.prototype[method] || (Duplex.prototype[method] = Writable.prototype[method])
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
        enumerable: !1, get: function () {
            return this._writableState.highWaterMark
        }
    }), Object.defineProperty(Duplex.prototype, "destroyed", {
        get: function () {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
        }, set: function (value) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = value, this._writableState.destroyed = value)
        }
    }), Duplex.prototype._destroy = function (err, cb) {
        this.push(null), this.end(), pna.nextTick(cb, err)
    }
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.createVector = exports.DictionaryVector = exports.UnionVector = exports.StructVector = exports.MapVector = exports.FixedSizeListVector = exports.ListVector = exports.Utf8Vector = exports.FixedSizeBinaryVector = exports.BinaryVector = exports.IntervalVector = exports.TimestampVector = exports.TimeVector = exports.DecimalVector = exports.DateVector = exports.FloatVector = exports.IntVector = exports.BoolVector = exports.NullVector = exports.NestedVector = exports.ListVectorBase = exports.FlatVector = exports.Vector = void 0;
    var _getIterator2 = __webpack_require__(30), _getIterator3 = _interopRequireDefault(_getIterator2),
        _iterator = __webpack_require__(6), _iterator2 = _interopRequireDefault(_iterator),
        _toStringTag = __webpack_require__(106), _toStringTag2 = _interopRequireDefault(_toStringTag),
        _defineProperty = __webpack_require__(43), _defineProperty2 = _interopRequireDefault(_defineProperty),
        _tslib = __webpack_require__(1), tslib_1 = function (obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj
        }(_tslib), _data = __webpack_require__(49), _visitor = __webpack_require__(48), _type2 = __webpack_require__(10),
        _chunked = __webpack_require__(109), _dictionary = __webpack_require__(203), _list = __webpack_require__(204),
        _nested = __webpack_require__(205), _flat = __webpack_require__(206), _bit = __webpack_require__(33),
        Vector = function () {
            function Vector(data, view) {
                this.data = data, this.type = data.type, this.length = data.length;
                var nulls;
                data instanceof _data.ChunkedData && !(view instanceof _chunked.ChunkedView) ? this.view = new _chunked.ChunkedView(data) : !(view instanceof _flat.ValidityView) && (nulls = data.nullBitmap) && nulls.length > 0 && data.nullCount > 0 ? this.view = new _flat.ValidityView(data, view) : this.view = view
            }

            return Vector.create = function (data) {
                return createVector(data)
            }, Vector.concat = function (source) {
                for (var others = [], _i = 1; _i < arguments.length; _i++) others[_i - 1] = arguments[_i];
                return others.reduce(function (a, b) {
                    return a ? a.concat(b) : b
                }, source)
            }, Object.defineProperty(Vector.prototype, "nullCount", {
                get: function () {
                    return this.data.nullCount
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(Vector.prototype, "nullBitmap", {
                get: function () {
                    return this.data.nullBitmap
                }, enumerable: !0, configurable: !0
            }), (0, _defineProperty2.default)(Vector.prototype, _toStringTag2.default, {
                get: function () {
                    return "Vector<" + this.type[_toStringTag2.default] + ">"
                }, enumerable: !0, configurable: !0
            }), Vector.prototype.toJSON = function () {
                return this.toArray()
            }, Vector.prototype.clone = function (data, view) {
                return void 0 === view && (view = this.view.clone(data)), new this.constructor(data, view)
            }, Vector.prototype.isValid = function (index) {
                return this.view.isValid(index)
            }, Vector.prototype.get = function (index) {
                return this.view.get(index)
            }, Vector.prototype.set = function (index, value) {
                return this.view.set(index, value)
            }, Vector.prototype.toArray = function () {
                return this.view.toArray()
            }, Vector.prototype.indexOf = function (value) {
                return this.view.indexOf(value)
            }, Vector.prototype[_iterator2.default] = function () {
                return (0, _getIterator3.default)(this.view)
            }, Vector.prototype.concat = function () {
                for (var others = [], _i = 0; _i < arguments.length; _i++) others[_i] = arguments[_i];
                if (0 === (others = others.filter(Boolean)).length) return this;
                var view = this.view,
                    vecs = view instanceof _chunked.ChunkedView ? tslib_1.__spread(view.chunkVectors, others) : tslib_1.__spread([this], others),
                    offsets = _data.ChunkedData.computeOffsets(vecs), chunksLength = offsets[offsets.length - 1],
                    chunkedData = new _data.ChunkedData(this.type, chunksLength, vecs, 0, -1, offsets);
                return this.clone(chunkedData, new _chunked.ChunkedView(chunkedData))
            }, Vector.prototype.slice = function (begin, end) {
                var length = this.length, size = this.view.size || 1, total = length, from = (begin || 0) * size,
                    to = ("number" == typeof end ? end : total) * size;
                to < 0 && (to = total - -1 * to % total), from < 0 && (from = total - -1 * from % total), to < from && (_a = tslib_1.__read([to, from], 2), from = _a[0], to = _a[1]), total = !isFinite(total = to - from) || total < 0 ? 0 : total;
                var slicedData = this.data.slice(from, Math.min(total, length));
                return this.clone(slicedData, this.view.clone(slicedData));
                var _a
            }, Vector.prototype.acceptTypeVisitor = function (visitor) {
                return _visitor.TypeVisitor.visitTypeInline(visitor, this.type)
            }, Vector.prototype.acceptVectorVisitor = function (visitor) {
                return _visitor.VectorVisitor.visitTypeInline(visitor, this.type, this)
            }, Vector
        }();
    exports.Vector = Vector;
    var FlatVector = function (_super) {
        function FlatVector() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(FlatVector, _super), Object.defineProperty(FlatVector.prototype, "values", {
            get: function () {
                return this.data.values
            }, enumerable: !0, configurable: !0
        }), FlatVector.prototype.lows = function () {
            return this.asInt32(0, 2)
        }, FlatVector.prototype.highs = function () {
            return this.asInt32(1, 2)
        }, FlatVector.prototype.asInt32 = function (offset, stride) {
            void 0 === offset && (offset = 0), void 0 === stride && (stride = 2);
            var data = this.data.clone(new _type2.Int32);
            offset > 0 && (data = data.slice(offset, this.length - offset));
            var int32s = new IntVector(data, new _flat.PrimitiveView(data, stride));
            return int32s.length = this.length / stride | 0, int32s
        }, FlatVector
    }(Vector);
    exports.FlatVector = FlatVector;
    var ListVectorBase = function (_super) {
        function ListVectorBase() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(ListVectorBase, _super), Object.defineProperty(ListVectorBase.prototype, "values", {
            get: function () {
                return this.data.values
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(ListVectorBase.prototype, "valueOffsets", {
            get: function () {
                return this.data.valueOffsets
            }, enumerable: !0, configurable: !0
        }), ListVectorBase.prototype.getValueOffset = function (index) {
            return this.valueOffsets[index]
        }, ListVectorBase.prototype.getValueLength = function (index) {
            return this.valueOffsets[index + 1] - this.valueOffsets[index]
        }, ListVectorBase
    }(Vector);
    exports.ListVectorBase = ListVectorBase;
    var NestedVector = function (_super) {
        function NestedVector() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(NestedVector, _super), NestedVector.prototype.getChildAt = function (index) {
            return this.view.getChildAt(index)
        }, Object.defineProperty(NestedVector.prototype, "childData", {
            get: function () {
                var data;
                if (data = this._childData) return data;
                if (!((data = this.data) instanceof _data.ChunkedData)) return this._childData = data.childData;
                var chunks = data.chunkVectors;
                return this._childData = chunks.reduce(function (cols, chunk) {
                    return chunk.childData.reduce(function (cols, _, i) {
                        return (cols[i] || (cols[i] = [])).push(chunk.getChildAt(i)) && cols || cols
                    }, cols)
                }, []).map(function (vecs) {
                    return Vector.concat.apply(Vector, tslib_1.__spread(vecs)).data
                })
            }, enumerable: !0, configurable: !0
        }), NestedVector
    }(Vector);
    exports.NestedVector = NestedVector;
    var NullVector = function (_super) {
        function NullVector(data, view) {
            return void 0 === view && (view = new _flat.NullView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(NullVector, _super), NullVector
    }(Vector);
    exports.NullVector = NullVector;
    var BoolVector = function (_super) {
        function BoolVector(data, view) {
            return void 0 === view && (view = new _flat.BoolView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(BoolVector, _super), BoolVector.from = function (data) {
            return new BoolVector(new _data.BoolData(new _type2.Bool, data.length, null, (0, _bit.packBools)(data)))
        }, Object.defineProperty(BoolVector.prototype, "values", {
            get: function () {
                return this.data.values
            }, enumerable: !0, configurable: !0
        }), BoolVector
    }(Vector);
    exports.BoolVector = BoolVector;
    var IntVector = function (_super) {
        function IntVector(data, view) {
            return void 0 === view && (view = IntVector.defaultView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(IntVector, _super), IntVector.from = function (data, is64) {
            if (!0 === is64) return new IntVector(data instanceof Int32Array ? new _data.FlatData(new _type2.Int64, data.length, null, data) : new _data.FlatData(new _type2.Uint64, data.length, null, data));
            switch (data.constructor) {
                case Int8Array:
                    return new IntVector(new _data.FlatData(new _type2.Int8, data.length, null, data));
                case Int16Array:
                    return new IntVector(new _data.FlatData(new _type2.Int16, data.length, null, data));
                case Int32Array:
                    return new IntVector(new _data.FlatData(new _type2.Int32, data.length, null, data));
                case Uint8Array:
                    return new IntVector(new _data.FlatData(new _type2.Uint8, data.length, null, data));
                case Uint16Array:
                    return new IntVector(new _data.FlatData(new _type2.Uint16, data.length, null, data));
                case Uint32Array:
                    return new IntVector(new _data.FlatData(new _type2.Uint32, data.length, null, data))
            }
            throw new TypeError("Unrecognized Int data")
        }, IntVector.defaultView = function (data) {
            return data.type.bitWidth <= 32 ? new _flat.FlatView(data) : new _flat.FixedSizeView(data, data.type.bitWidth / 32 | 0)
        }, IntVector
    }(FlatVector);
    exports.IntVector = IntVector;
    var FloatVector = function (_super) {
        function FloatVector(data, view) {
            return void 0 === view && (view = FloatVector.defaultView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(FloatVector, _super), FloatVector.from = function (data) {
            switch (data.constructor) {
                case Uint16Array:
                    return new FloatVector(new _data.FlatData(new _type2.Float16, data.length, null, data));
                case Float32Array:
                    return new FloatVector(new _data.FlatData(new _type2.Float32, data.length, null, data));
                case Float64Array:
                    return new FloatVector(new _data.FlatData(new _type2.Float64, data.length, null, data))
            }
            throw new TypeError("Unrecognized Float data")
        }, FloatVector.defaultView = function (data) {
            return data.type.precision !== _type2.Precision.HALF ? new _flat.FlatView(data) : new _flat.Float16View(data)
        }, FloatVector
    }(FlatVector);
    exports.FloatVector = FloatVector;
    var DateVector = function (_super) {
        function DateVector(data, view) {
            return void 0 === view && (view = DateVector.defaultView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(DateVector, _super), DateVector.defaultView = function (data) {
            return data.type.unit === _type2.DateUnit.DAY ? new _flat.DateDayView(data) : new _flat.DateMillisecondView(data, 2)
        }, DateVector.prototype.lows = function () {
            return this.type.unit === _type2.DateUnit.DAY ? this.asInt32(0, 1) : this.asInt32(0, 2)
        }, DateVector.prototype.highs = function () {
            return this.type.unit === _type2.DateUnit.DAY ? this.asInt32(0, 1) : this.asInt32(1, 2)
        }, DateVector.prototype.asEpochMilliseconds = function () {
            var data = this.data.clone(new _type2.Int32);
            switch (this.type.unit) {
                case _type2.DateUnit.DAY:
                    return new IntVector(data, new _flat.TimestampDayView(data, 1));
                case _type2.DateUnit.MILLISECOND:
                    return new IntVector(data, new _flat.TimestampMillisecondView(data, 2))
            }
            throw new TypeError('Unrecognized date unit "' + _type2.DateUnit[this.type.unit] + '"')
        }, DateVector
    }(FlatVector);
    exports.DateVector = DateVector;
    var DecimalVector = function (_super) {
        function DecimalVector(data, view) {
            return void 0 === view && (view = new _flat.FixedSizeView(data, 4)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(DecimalVector, _super), DecimalVector
    }(FlatVector);
    exports.DecimalVector = DecimalVector;
    var TimeVector = function (_super) {
        function TimeVector(data, view) {
            return void 0 === view && (view = TimeVector.defaultView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(TimeVector, _super), TimeVector.defaultView = function (data) {
            return data.type.bitWidth <= 32 ? new _flat.FlatView(data) : new _flat.FixedSizeView(data, data.type.bitWidth / 32 | 0)
        }, TimeVector.prototype.lows = function () {
            return this.type.bitWidth <= 32 ? this.asInt32(0, 1) : this.asInt32(0, 2)
        }, TimeVector.prototype.highs = function () {
            return this.type.bitWidth <= 32 ? this.asInt32(0, 1) : this.asInt32(1, 2)
        }, TimeVector
    }(FlatVector);
    exports.TimeVector = TimeVector;
    var TimestampVector = function (_super) {
        function TimestampVector(data, view) {
            return void 0 === view && (view = new _flat.FixedSizeView(data, 2)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(TimestampVector, _super), TimestampVector.prototype.asEpochMilliseconds = function () {
            var data = this.data.clone(new _type2.Int32);
            switch (this.type.unit) {
                case _type2.TimeUnit.SECOND:
                    return new IntVector(data, new _flat.TimestampSecondView(data, 1));
                case _type2.TimeUnit.MILLISECOND:
                    return new IntVector(data, new _flat.TimestampMillisecondView(data, 2));
                case _type2.TimeUnit.MICROSECOND:
                    return new IntVector(data, new _flat.TimestampMicrosecondView(data, 2));
                case _type2.TimeUnit.NANOSECOND:
                    return new IntVector(data, new _flat.TimestampNanosecondView(data, 2))
            }
            throw new TypeError('Unrecognized time unit "' + _type2.TimeUnit[this.type.unit] + '"')
        }, TimestampVector
    }(FlatVector);
    exports.TimestampVector = TimestampVector;
    var IntervalVector = function (_super) {
        function IntervalVector(data, view) {
            return void 0 === view && (view = IntervalVector.defaultView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(IntervalVector, _super), IntervalVector.defaultView = function (data) {
            return data.type.unit === _type2.IntervalUnit.YEAR_MONTH ? new _flat.IntervalYearMonthView(data) : new _flat.FixedSizeView(data, 2)
        }, IntervalVector.prototype.lows = function () {
            return this.type.unit === _type2.IntervalUnit.YEAR_MONTH ? this.asInt32(0, 1) : this.asInt32(0, 2)
        }, IntervalVector.prototype.highs = function () {
            return this.type.unit === _type2.IntervalUnit.YEAR_MONTH ? this.asInt32(0, 1) : this.asInt32(1, 2)
        }, IntervalVector
    }(FlatVector);
    exports.IntervalVector = IntervalVector;
    var BinaryVector = function (_super) {
        function BinaryVector(data, view) {
            return void 0 === view && (view = new _list.BinaryView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(BinaryVector, _super), BinaryVector.prototype.asUtf8 = function () {
            return new Utf8Vector(this.data.clone(new _type2.Utf8))
        }, BinaryVector
    }(ListVectorBase);
    exports.BinaryVector = BinaryVector;
    var FixedSizeBinaryVector = function (_super) {
        function FixedSizeBinaryVector(data, view) {
            return void 0 === view && (view = new _flat.FixedSizeView(data, data.type.byteWidth)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(FixedSizeBinaryVector, _super), FixedSizeBinaryVector
    }(FlatVector);
    exports.FixedSizeBinaryVector = FixedSizeBinaryVector;
    var Utf8Vector = function (_super) {
        function Utf8Vector(data, view) {
            return void 0 === view && (view = new _list.Utf8View(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(Utf8Vector, _super), Utf8Vector.prototype.asBinary = function () {
            return new BinaryVector(this.data.clone(new _type2.Binary))
        }, Utf8Vector
    }(ListVectorBase);
    exports.Utf8Vector = Utf8Vector;
    var ListVector = function (_super) {
        function ListVector(data, view) {
            return void 0 === view && (view = new _list.ListView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(ListVector, _super), ListVector
    }(ListVectorBase);
    exports.ListVector = ListVector;
    var FixedSizeListVector = function (_super) {
        function FixedSizeListVector(data, view) {
            return void 0 === view && (view = new _list.FixedSizeListView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(FixedSizeListVector, _super), FixedSizeListVector
    }(Vector);
    exports.FixedSizeListVector = FixedSizeListVector;
    var MapVector = function (_super) {
        function MapVector(data, view) {
            return void 0 === view && (view = new _nested.MapView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(MapVector, _super), MapVector.prototype.asStruct = function () {
            return new StructVector(this.data.clone(new _type2.Struct(this.type.children)))
        }, MapVector
    }(NestedVector);
    exports.MapVector = MapVector;
    var StructVector = function (_super) {
        function StructVector(data, view) {
            return void 0 === view && (view = new _nested.StructView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(StructVector, _super), StructVector.prototype.asMap = function (keysSorted) {
            return void 0 === keysSorted && (keysSorted = !1), new MapVector(this.data.clone(new _type2.Map_(keysSorted, this.type.children)))
        }, StructVector
    }(NestedVector);
    exports.StructVector = StructVector;
    var UnionVector = function (_super) {
        function UnionVector(data, view) {
            return void 0 === view && (view = data.type.mode === _type2.UnionMode.Sparse ? new _nested.UnionView(data) : new _nested.DenseUnionView(data)), _super.call(this, data, view) || this
        }

        return tslib_1.__extends(UnionVector, _super), UnionVector
    }(NestedVector);
    exports.UnionVector = UnionVector;
    var DictionaryVector = function (_super) {
        function DictionaryVector(data, view) {
            void 0 === view && (view = new _dictionary.DictionaryView(data.dictionary, new IntVector(data.indices)));
            var _this = _super.call(this, data, view) || this;
            if (view instanceof _flat.ValidityView && (view = view.view), data instanceof _data.DictionaryData && view instanceof _dictionary.DictionaryView) _this.indices = view.indices, _this.dictionary = data.dictionary; else {
                if (!(data instanceof _data.ChunkedData && view instanceof _chunked.ChunkedView)) throw new TypeError("Unrecognized DictionaryVector view");
                var chunks = view.chunkVectors;
                _this.dictionary = chunks[chunks.length - 1].dictionary, _this.indices = chunks.reduce(function (idxs, dict) {
                    return idxs ? idxs.concat(dict.indices) : dict.indices
                }, null)
            }
            return _this
        }

        return tslib_1.__extends(DictionaryVector, _super), DictionaryVector.prototype.getKey = function (index) {
            return this.indices.get(index)
        }, DictionaryVector.prototype.getValue = function (key) {
            return this.dictionary.get(key)
        }, DictionaryVector.prototype.reverseLookup = function (value) {
            return this.dictionary.indexOf(value)
        }, DictionaryVector
    }(Vector);
    exports.DictionaryVector = DictionaryVector;
    var createVector = exports.createVector = function (VectorLoader) {
        return function (data) {
            return _visitor.TypeVisitor.visitTypeInline(new VectorLoader(data), data.type)
        }
    }(function (_super) {
        function VectorLoader(data) {
            var _this = _super.call(this) || this;
            return _this.data = data, _this
        }

        return tslib_1.__extends(VectorLoader, _super), VectorLoader.prototype.visitNull = function (_type) {
            return new NullVector(this.data)
        }, VectorLoader.prototype.visitInt = function (_type) {
            return new IntVector(this.data)
        }, VectorLoader.prototype.visitFloat = function (_type) {
            return new FloatVector(this.data)
        }, VectorLoader.prototype.visitBinary = function (_type) {
            return new BinaryVector(this.data)
        }, VectorLoader.prototype.visitUtf8 = function (_type) {
            return new Utf8Vector(this.data)
        }, VectorLoader.prototype.visitBool = function (_type) {
            return new BoolVector(this.data)
        }, VectorLoader.prototype.visitDecimal = function (_type) {
            return new DecimalVector(this.data)
        }, VectorLoader.prototype.visitDate = function (_type) {
            return new DateVector(this.data)
        }, VectorLoader.prototype.visitTime = function (_type) {
            return new TimeVector(this.data)
        }, VectorLoader.prototype.visitTimestamp = function (_type) {
            return new TimestampVector(this.data)
        }, VectorLoader.prototype.visitInterval = function (_type) {
            return new IntervalVector(this.data)
        }, VectorLoader.prototype.visitList = function (_type) {
            return new ListVector(this.data)
        }, VectorLoader.prototype.visitStruct = function (_type) {
            return new StructVector(this.data)
        }, VectorLoader.prototype.visitUnion = function (_type) {
            return new UnionVector(this.data)
        }, VectorLoader.prototype.visitFixedSizeBinary = function (_type) {
            return new FixedSizeBinaryVector(this.data)
        }, VectorLoader.prototype.visitFixedSizeList = function (_type) {
            return new FixedSizeListVector(this.data)
        }, VectorLoader.prototype.visitMap = function (_type) {
            return new MapVector(this.data)
        }, VectorLoader.prototype.visitDictionary = function (_type) {
            return new DictionaryVector(this.data)
        }, VectorLoader
    }(_visitor.TypeVisitor))
}, function (module, exports) {
    function defaultSetTimout() {
        throw new Error("setTimeout has not been defined")
    }

    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined")
    }

    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, setTimeout(fun, 0);
        try {
            return cachedSetTimeout(fun, 0)
        } catch (e) {
            try {
                return cachedSetTimeout.call(null, fun, 0)
            } catch (e) {
                return cachedSetTimeout.call(this, fun, 0)
            }
        }
    }

    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, clearTimeout(marker);
        try {
            return cachedClearTimeout(marker)
        } catch (e) {
            try {
                return cachedClearTimeout.call(null, marker)
            } catch (e) {
                return cachedClearTimeout.call(this, marker)
            }
        }
    }

    function cleanUpNextTick() {
        draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue())
    }

    function drainQueue() {
        if (!draining) {
            var timeout = runTimeout(cleanUpNextTick);
            draining = !0;
            for (var len = queue.length; len;) {
                for (currentQueue = queue, queue = []; ++queueIndex < len;) currentQueue && currentQueue[queueIndex].run();
                queueIndex = -1, len = queue.length
            }
            currentQueue = null, draining = !1, runClearTimeout(timeout)
        }
    }

    function Item(fun, array) {
        this.fun = fun, this.array = array
    }

    function noop() {
    }

    var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
    !function () {
        try {
            cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
        } catch (e) {
            cachedSetTimeout = defaultSetTimout
        }
        try {
            cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout
        }
    }();
    var currentQueue, queue = [], draining = !1, queueIndex = -1;
    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
        queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue)
    }, Item.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, process.listeners = function (name) {
        return []
    }, process.binding = function (name) {
        throw new Error("process.binding is not supported")
    }, process.cwd = function () {
        return "/"
    }, process.chdir = function (dir) {
        throw new Error("process.chdir is not supported")
    }, process.umask = function () {
        return 0
    }
}, function (module, exports, __webpack_require__) {
    var $keys = __webpack_require__(77), enumBugKeys = __webpack_require__(58);
    module.exports = Object.keys || function (O) {
        return $keys(O, enumBugKeys)
    }
}, function (module, exports) {
    "function" == typeof Object.create ? module.exports = function (ctor, superCtor) {
        ctor.super_ = superCtor, ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : module.exports = function (ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function () {
        };
        TempCtor.prototype = superCtor.prototype, ctor.prototype = new TempCtor, ctor.prototype.constructor = ctor
    }
}, function (module, exports) {
    module.exports = !0
}, function (module, exports) {
    module.exports = function (it) {
        if ("function" != typeof it) throw TypeError(it + " is not a function!");
        return it
    }
}, function (module, exports) {
    module.exports = {}
}, function (module, exports) {
    var toString = {}.toString;
    module.exports = function (it) {
        return toString.call(it).slice(8, -1)
    }
}, function (module, exports, __webpack_require__) {
    var def = __webpack_require__(7).f, has = __webpack_require__(15), TAG = __webpack_require__(4)("toStringTag");
    module.exports = function (it, tag, stat) {
        it && !has(it = stat ? it : it.prototype, TAG) && def(it, TAG, {configurable: !0, value: tag})
    }
}, function (module, exports, __webpack_require__) {
    var defined = __webpack_require__(36);
    module.exports = function (it) {
        return Object(defined(it))
    }
}, function (module, exports) {
    exports.f = {}.propertyIsEnumerable
}, function (module, exports, __webpack_require__) {
    var ctx = __webpack_require__(12), call = __webpack_require__(144), isArrayIter = __webpack_require__(145),
        anObject = __webpack_require__(8), toLength = __webpack_require__(55), getIterFn = __webpack_require__(88),
        BREAK = {}, RETURN = {}, exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
            var length, step, iterator, result, iterFn = ITERATOR ? function () {
                return iterable
            } : getIterFn(iterable), f = ctx(fn, that, entries ? 2 : 1), index = 0;
            if ("function" != typeof iterFn) throw TypeError(iterable + " is not iterable!");
            if (isArrayIter(iterFn)) {
                for (length = toLength(iterable.length); length > index; index++) if ((result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index])) === BREAK || result === RETURN) return result
            } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) if ((result = call(iterator, f, step.value, entries)) === BREAK || result === RETURN) return result
        };
    exports.BREAK = BREAK, exports.RETURN = RETURN
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(152), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    (function (Buffer) {
        function isArray(arg) {
            return Array.isArray ? Array.isArray(arg) : "[object Array]" === objectToString(arg)
        }

        function isBoolean(arg) {
            return "boolean" == typeof arg
        }

        function isNull(arg) {
            return null === arg
        }

        function isNullOrUndefined(arg) {
            return null == arg
        }

        function isNumber(arg) {
            return "number" == typeof arg
        }

        function isString(arg) {
            return "string" == typeof arg
        }

        function isSymbol(arg) {
            return "symbol" == typeof arg
        }

        function isUndefined(arg) {
            return void 0 === arg
        }

        function isRegExp(re) {
            return "[object RegExp]" === objectToString(re)
        }

        function isObject(arg) {
            return "object" == typeof arg && null !== arg
        }

        function isDate(d) {
            return "[object Date]" === objectToString(d)
        }

        function isError(e) {
            return "[object Error]" === objectToString(e) || e instanceof Error
        }

        function isFunction(arg) {
            return "function" == typeof arg
        }

        function isPrimitive(arg) {
            return null === arg || "boolean" == typeof arg || "number" == typeof arg || "string" == typeof arg || "symbol" == typeof arg || void 0 === arg
        }

        function objectToString(o) {
            return Object.prototype.toString.call(o)
        }

        exports.isArray = isArray, exports.isBoolean = isBoolean, exports.isNull = isNull, exports.isNullOrUndefined = isNullOrUndefined, exports.isNumber = isNumber, exports.isString = isString, exports.isSymbol = isSymbol, exports.isUndefined = isUndefined, exports.isRegExp = isRegExp, exports.isObject = isObject, exports.isDate = isDate, exports.isError = isError, exports.isFunction = isFunction, exports.isPrimitive = isPrimitive, exports.isBuffer = Buffer.isBuffer
    }).call(exports, __webpack_require__(101).Buffer)
}, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: !0});
    var org = exports.org = void 0;
    !function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    !function (MetadataVersion) {
                        MetadataVersion[MetadataVersion.V1 = 0] = "V1", MetadataVersion[MetadataVersion.V2 = 1] = "V2", MetadataVersion[MetadataVersion.V3 = 2] = "V3", MetadataVersion[MetadataVersion.V4 = 3] = "V4"
                    }(flatbuf.MetadataVersion || (flatbuf.MetadataVersion = {}))
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    !function (UnionMode) {
                        UnionMode[UnionMode.Sparse = 0] = "Sparse", UnionMode[UnionMode.Dense = 1] = "Dense"
                    }(flatbuf.UnionMode || (flatbuf.UnionMode = {}))
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    !function (Precision) {
                        Precision[Precision.HALF = 0] = "HALF", Precision[Precision.SINGLE = 1] = "SINGLE", Precision[Precision.DOUBLE = 2] = "DOUBLE"
                    }(flatbuf.Precision || (flatbuf.Precision = {}))
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    !function (DateUnit) {
                        DateUnit[DateUnit.DAY = 0] = "DAY", DateUnit[DateUnit.MILLISECOND = 1] = "MILLISECOND"
                    }(flatbuf.DateUnit || (flatbuf.DateUnit = {}))
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    !function (TimeUnit) {
                        TimeUnit[TimeUnit.SECOND = 0] = "SECOND", TimeUnit[TimeUnit.MILLISECOND = 1] = "MILLISECOND", TimeUnit[TimeUnit.MICROSECOND = 2] = "MICROSECOND", TimeUnit[TimeUnit.NANOSECOND = 3] = "NANOSECOND"
                    }(flatbuf.TimeUnit || (flatbuf.TimeUnit = {}))
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    !function (IntervalUnit) {
                        IntervalUnit[IntervalUnit.YEAR_MONTH = 0] = "YEAR_MONTH", IntervalUnit[IntervalUnit.DAY_TIME = 1] = "DAY_TIME"
                    }(flatbuf.IntervalUnit || (flatbuf.IntervalUnit = {}))
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    !function (Type) {
                        Type[Type.NONE = 0] = "NONE", Type[Type.Null = 1] = "Null", Type[Type.Int = 2] = "Int", Type[Type.FloatingPoint = 3] = "FloatingPoint", Type[Type.Binary = 4] = "Binary", Type[Type.Utf8 = 5] = "Utf8", Type[Type.Bool = 6] = "Bool", Type[Type.Decimal = 7] = "Decimal", Type[Type.Date = 8] = "Date", Type[Type.Time = 9] = "Time", Type[Type.Timestamp = 10] = "Timestamp", Type[Type.Interval = 11] = "Interval", Type[Type.List = 12] = "List", Type[Type.Struct_ = 13] = "Struct_", Type[Type.Union = 14] = "Union", Type[Type.FixedSizeBinary = 15] = "FixedSizeBinary", Type[Type.FixedSizeList = 16] = "FixedSizeList", Type[Type.Map = 17] = "Map"
                    }(flatbuf.Type || (flatbuf.Type = {}))
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    !function (VectorType) {
                        VectorType[VectorType.OFFSET = 0] = "OFFSET", VectorType[VectorType.DATA = 1] = "DATA", VectorType[VectorType.VALIDITY = 2] = "VALIDITY", VectorType[VectorType.TYPE = 3] = "TYPE"
                    }(flatbuf.VectorType || (flatbuf.VectorType = {}))
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    !function (Endianness) {
                        Endianness[Endianness.Little = 0] = "Little", Endianness[Endianness.Big = 1] = "Big"
                    }(flatbuf.Endianness || (flatbuf.Endianness = {}))
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Null = function () {
                        function Null() {
                            this.bb_pos = 0
                        }

                        return Null.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Null.getRootAsNull = function (bb, obj) {
                            return (obj || new Null).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Null.startNull = function (builder) {
                            builder.startObject(0)
                        }, Null.endNull = function (builder) {
                            return builder.endObject()
                        }, Null
                    }();
                    flatbuf.Null = Null
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Struct_ = function () {
                        function Struct_() {
                            this.bb_pos = 0
                        }

                        return Struct_.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Struct_.getRootAsStruct_ = function (bb, obj) {
                            return (obj || new Struct_).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Struct_.startStruct_ = function (builder) {
                            builder.startObject(0)
                        }, Struct_.endStruct_ = function (builder) {
                            return builder.endObject()
                        }, Struct_
                    }();
                    flatbuf.Struct_ = Struct_
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var List = function () {
                        function List() {
                            this.bb_pos = 0
                        }

                        return List.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, List.getRootAsList = function (bb, obj) {
                            return (obj || new List).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, List.startList = function (builder) {
                            builder.startObject(0)
                        }, List.endList = function (builder) {
                            return builder.endObject()
                        }, List
                    }();
                    flatbuf.List = List
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var FixedSizeList = function () {
                        function FixedSizeList() {
                            this.bb_pos = 0
                        }

                        return FixedSizeList.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, FixedSizeList.getRootAsFixedSizeList = function (bb, obj) {
                            return (obj || new FixedSizeList).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, FixedSizeList.prototype.listSize = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt32(this.bb_pos + offset) : 0
                        }, FixedSizeList.startFixedSizeList = function (builder) {
                            builder.startObject(1)
                        }, FixedSizeList.addListSize = function (builder, listSize) {
                            builder.addFieldInt32(0, listSize, 0)
                        }, FixedSizeList.endFixedSizeList = function (builder) {
                            return builder.endObject()
                        }, FixedSizeList
                    }();
                    flatbuf.FixedSizeList = FixedSizeList
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Map = function () {
                        function Map() {
                            this.bb_pos = 0
                        }

                        return Map.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Map.getRootAsMap = function (bb, obj) {
                            return (obj || new Map).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Map.prototype.keysSorted = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return !!offset && !!this.bb.readInt8(this.bb_pos + offset)
                        }, Map.startMap = function (builder) {
                            builder.startObject(1)
                        }, Map.addKeysSorted = function (builder, keysSorted) {
                            builder.addFieldInt8(0, +keysSorted, 0)
                        }, Map.endMap = function (builder) {
                            return builder.endObject()
                        }, Map
                    }();
                    flatbuf.Map = Map
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Union = function () {
                        function Union() {
                            this.bb_pos = 0
                        }

                        return Union.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Union.getRootAsUnion = function (bb, obj) {
                            return (obj || new Union).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Union.prototype.mode = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.UnionMode.Sparse
                        }, Union.prototype.typeIds = function (index) {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + 4 * index) : 0
                        }, Union.prototype.typeIdsLength = function () {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0
                        }, Union.prototype.typeIdsArray = function () {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null
                        }, Union.startUnion = function (builder) {
                            builder.startObject(2)
                        }, Union.addMode = function (builder, mode) {
                            builder.addFieldInt16(0, mode, org.apache.arrow.flatbuf.UnionMode.Sparse)
                        }, Union.addTypeIds = function (builder, typeIdsOffset) {
                            builder.addFieldOffset(1, typeIdsOffset, 0)
                        }, Union.createTypeIdsVector = function (builder, data) {
                            builder.startVector(4, data.length, 4);
                            for (var i = data.length - 1; i >= 0; i--) builder.addInt32(data[i]);
                            return builder.endVector()
                        }, Union.startTypeIdsVector = function (builder, numElems) {
                            builder.startVector(4, numElems, 4)
                        }, Union.endUnion = function (builder) {
                            return builder.endObject()
                        }, Union
                    }();
                    flatbuf.Union = Union
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Int = function () {
                        function Int() {
                            this.bb_pos = 0
                        }

                        return Int.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Int.getRootAsInt = function (bb, obj) {
                            return (obj || new Int).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Int.prototype.bitWidth = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt32(this.bb_pos + offset) : 0
                        }, Int.prototype.isSigned = function () {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return !!offset && !!this.bb.readInt8(this.bb_pos + offset)
                        }, Int.startInt = function (builder) {
                            builder.startObject(2)
                        }, Int.addBitWidth = function (builder, bitWidth) {
                            builder.addFieldInt32(0, bitWidth, 0)
                        }, Int.addIsSigned = function (builder, isSigned) {
                            builder.addFieldInt8(1, +isSigned, 0)
                        }, Int.endInt = function (builder) {
                            return builder.endObject()
                        }, Int
                    }();
                    flatbuf.Int = Int
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var FloatingPoint = function () {
                        function FloatingPoint() {
                            this.bb_pos = 0
                        }

                        return FloatingPoint.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, FloatingPoint.getRootAsFloatingPoint = function (bb, obj) {
                            return (obj || new FloatingPoint).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, FloatingPoint.prototype.precision = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.Precision.HALF
                        }, FloatingPoint.startFloatingPoint = function (builder) {
                            builder.startObject(1)
                        }, FloatingPoint.addPrecision = function (builder, precision) {
                            builder.addFieldInt16(0, precision, org.apache.arrow.flatbuf.Precision.HALF)
                        }, FloatingPoint.endFloatingPoint = function (builder) {
                            return builder.endObject()
                        }, FloatingPoint
                    }();
                    flatbuf.FloatingPoint = FloatingPoint
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Utf8 = function () {
                        function Utf8() {
                            this.bb_pos = 0
                        }

                        return Utf8.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Utf8.getRootAsUtf8 = function (bb, obj) {
                            return (obj || new Utf8).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Utf8.startUtf8 = function (builder) {
                            builder.startObject(0)
                        }, Utf8.endUtf8 = function (builder) {
                            return builder.endObject()
                        }, Utf8
                    }();
                    flatbuf.Utf8 = Utf8
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Binary = function () {
                        function Binary() {
                            this.bb_pos = 0
                        }

                        return Binary.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Binary.getRootAsBinary = function (bb, obj) {
                            return (obj || new Binary).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Binary.startBinary = function (builder) {
                            builder.startObject(0)
                        }, Binary.endBinary = function (builder) {
                            return builder.endObject()
                        }, Binary
                    }();
                    flatbuf.Binary = Binary
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var FixedSizeBinary = function () {
                        function FixedSizeBinary() {
                            this.bb_pos = 0
                        }

                        return FixedSizeBinary.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, FixedSizeBinary.getRootAsFixedSizeBinary = function (bb, obj) {
                            return (obj || new FixedSizeBinary).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, FixedSizeBinary.prototype.byteWidth = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt32(this.bb_pos + offset) : 0
                        }, FixedSizeBinary.startFixedSizeBinary = function (builder) {
                            builder.startObject(1)
                        }, FixedSizeBinary.addByteWidth = function (builder, byteWidth) {
                            builder.addFieldInt32(0, byteWidth, 0)
                        }, FixedSizeBinary.endFixedSizeBinary = function (builder) {
                            return builder.endObject()
                        }, FixedSizeBinary
                    }();
                    flatbuf.FixedSizeBinary = FixedSizeBinary
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Bool = function () {
                        function Bool() {
                            this.bb_pos = 0
                        }

                        return Bool.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Bool.getRootAsBool = function (bb, obj) {
                            return (obj || new Bool).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Bool.startBool = function (builder) {
                            builder.startObject(0)
                        }, Bool.endBool = function (builder) {
                            return builder.endObject()
                        }, Bool
                    }();
                    flatbuf.Bool = Bool
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Decimal = function () {
                        function Decimal() {
                            this.bb_pos = 0
                        }

                        return Decimal.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Decimal.getRootAsDecimal = function (bb, obj) {
                            return (obj || new Decimal).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Decimal.prototype.precision = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt32(this.bb_pos + offset) : 0
                        }, Decimal.prototype.scale = function () {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? this.bb.readInt32(this.bb_pos + offset) : 0
                        }, Decimal.startDecimal = function (builder) {
                            builder.startObject(2)
                        }, Decimal.addPrecision = function (builder, precision) {
                            builder.addFieldInt32(0, precision, 0)
                        }, Decimal.addScale = function (builder, scale) {
                            builder.addFieldInt32(1, scale, 0)
                        }, Decimal.endDecimal = function (builder) {
                            return builder.endObject()
                        }, Decimal
                    }();
                    flatbuf.Decimal = Decimal
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Date = function () {
                        function Date() {
                            this.bb_pos = 0
                        }

                        return Date.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Date.getRootAsDate = function (bb, obj) {
                            return (obj || new Date).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Date.prototype.unit = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.DateUnit.MILLISECOND
                        }, Date.startDate = function (builder) {
                            builder.startObject(1)
                        }, Date.addUnit = function (builder, unit) {
                            builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.DateUnit.MILLISECOND)
                        }, Date.endDate = function (builder) {
                            return builder.endObject()
                        }, Date
                    }();
                    flatbuf.Date = Date
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Time = function () {
                        function Time() {
                            this.bb_pos = 0
                        }

                        return Time.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Time.getRootAsTime = function (bb, obj) {
                            return (obj || new Time).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Time.prototype.unit = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.TimeUnit.MILLISECOND
                        }, Time.prototype.bitWidth = function () {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? this.bb.readInt32(this.bb_pos + offset) : 32
                        }, Time.startTime = function (builder) {
                            builder.startObject(2)
                        }, Time.addUnit = function (builder, unit) {
                            builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.TimeUnit.MILLISECOND)
                        }, Time.addBitWidth = function (builder, bitWidth) {
                            builder.addFieldInt32(1, bitWidth, 32)
                        }, Time.endTime = function (builder) {
                            return builder.endObject()
                        }, Time
                    }();
                    flatbuf.Time = Time
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Timestamp = function () {
                        function Timestamp() {
                            this.bb_pos = 0
                        }

                        return Timestamp.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Timestamp.getRootAsTimestamp = function (bb, obj) {
                            return (obj || new Timestamp).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Timestamp.prototype.unit = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.TimeUnit.SECOND
                        }, Timestamp.prototype.timezone = function (optionalEncoding) {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null
                        }, Timestamp.startTimestamp = function (builder) {
                            builder.startObject(2)
                        }, Timestamp.addUnit = function (builder, unit) {
                            builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.TimeUnit.SECOND)
                        }, Timestamp.addTimezone = function (builder, timezoneOffset) {
                            builder.addFieldOffset(1, timezoneOffset, 0)
                        }, Timestamp.endTimestamp = function (builder) {
                            return builder.endObject()
                        }, Timestamp
                    }();
                    flatbuf.Timestamp = Timestamp
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Interval = function () {
                        function Interval() {
                            this.bb_pos = 0
                        }

                        return Interval.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Interval.getRootAsInterval = function (bb, obj) {
                            return (obj || new Interval).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Interval.prototype.unit = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.IntervalUnit.YEAR_MONTH
                        }, Interval.startInterval = function (builder) {
                            builder.startObject(1)
                        }, Interval.addUnit = function (builder, unit) {
                            builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.IntervalUnit.YEAR_MONTH)
                        }, Interval.endInterval = function (builder) {
                            return builder.endObject()
                        }, Interval
                    }();
                    flatbuf.Interval = Interval
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var VectorLayout = function () {
                        function VectorLayout() {
                            this.bb_pos = 0
                        }

                        return VectorLayout.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, VectorLayout.getRootAsVectorLayout = function (bb, obj) {
                            return (obj || new VectorLayout).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, VectorLayout.prototype.bitWidth = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt16(this.bb_pos + offset) : 0
                        }, VectorLayout.prototype.type = function () {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.VectorType.OFFSET
                        }, VectorLayout.startVectorLayout = function (builder) {
                            builder.startObject(2)
                        }, VectorLayout.addBitWidth = function (builder, bitWidth) {
                            builder.addFieldInt16(0, bitWidth, 0)
                        }, VectorLayout.addType = function (builder, type) {
                            builder.addFieldInt16(1, type, org.apache.arrow.flatbuf.VectorType.OFFSET)
                        }, VectorLayout.endVectorLayout = function (builder) {
                            return builder.endObject()
                        }, VectorLayout
                    }();
                    flatbuf.VectorLayout = VectorLayout
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var KeyValue = function () {
                        function KeyValue() {
                            this.bb_pos = 0
                        }

                        return KeyValue.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, KeyValue.getRootAsKeyValue = function (bb, obj) {
                            return (obj || new KeyValue).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, KeyValue.prototype.key = function (optionalEncoding) {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null
                        }, KeyValue.prototype.value = function (optionalEncoding) {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null
                        }, KeyValue.startKeyValue = function (builder) {
                            builder.startObject(2)
                        }, KeyValue.addKey = function (builder, keyOffset) {
                            builder.addFieldOffset(0, keyOffset, 0)
                        }, KeyValue.addValue = function (builder, valueOffset) {
                            builder.addFieldOffset(1, valueOffset, 0)
                        }, KeyValue.endKeyValue = function (builder) {
                            return builder.endObject()
                        }, KeyValue
                    }();
                    flatbuf.KeyValue = KeyValue
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var DictionaryEncoding = function () {
                        function DictionaryEncoding() {
                            this.bb_pos = 0
                        }

                        return DictionaryEncoding.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, DictionaryEncoding.getRootAsDictionaryEncoding = function (bb, obj) {
                            return (obj || new DictionaryEncoding).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, DictionaryEncoding.prototype.id = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0)
                        }, DictionaryEncoding.prototype.indexType = function (obj) {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? (obj || new org.apache.arrow.flatbuf.Int).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null
                        }, DictionaryEncoding.prototype.isOrdered = function () {
                            var offset = this.bb.__offset(this.bb_pos, 8);
                            return !!offset && !!this.bb.readInt8(this.bb_pos + offset)
                        }, DictionaryEncoding.startDictionaryEncoding = function (builder) {
                            builder.startObject(3)
                        }, DictionaryEncoding.addId = function (builder, id) {
                            builder.addFieldInt64(0, id, builder.createLong(0, 0))
                        }, DictionaryEncoding.addIndexType = function (builder, indexTypeOffset) {
                            builder.addFieldOffset(1, indexTypeOffset, 0)
                        }, DictionaryEncoding.addIsOrdered = function (builder, isOrdered) {
                            builder.addFieldInt8(2, +isOrdered, 0)
                        }, DictionaryEncoding.endDictionaryEncoding = function (builder) {
                            return builder.endObject()
                        }, DictionaryEncoding
                    }();
                    flatbuf.DictionaryEncoding = DictionaryEncoding
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Field = function () {
                        function Field() {
                            this.bb_pos = 0
                        }

                        return Field.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Field.getRootAsField = function (bb, obj) {
                            return (obj || new Field).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Field.prototype.name = function (optionalEncoding) {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null
                        }, Field.prototype.nullable = function () {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return !!offset && !!this.bb.readInt8(this.bb_pos + offset)
                        }, Field.prototype.typeType = function () {
                            var offset = this.bb.__offset(this.bb_pos, 8);
                            return offset ? this.bb.readUint8(this.bb_pos + offset) : org.apache.arrow.flatbuf.Type.NONE
                        }, Field.prototype.type = function (obj) {
                            var offset = this.bb.__offset(this.bb_pos, 10);
                            return offset ? this.bb.__union(obj, this.bb_pos + offset) : null
                        }, Field.prototype.dictionary = function (obj) {
                            var offset = this.bb.__offset(this.bb_pos, 12);
                            return offset ? (obj || new org.apache.arrow.flatbuf.DictionaryEncoding).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null
                        }, Field.prototype.children = function (index, obj) {
                            var offset = this.bb.__offset(this.bb_pos, 14);
                            return offset ? (obj || new org.apache.arrow.flatbuf.Field).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + 4 * index), this.bb) : null
                        }, Field.prototype.childrenLength = function () {
                            var offset = this.bb.__offset(this.bb_pos, 14);
                            return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0
                        }, Field.prototype.layout = function (index, obj) {
                            var offset = this.bb.__offset(this.bb_pos, 16);
                            return offset ? (obj || new org.apache.arrow.flatbuf.VectorLayout).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + 4 * index), this.bb) : null
                        }, Field.prototype.layoutLength = function () {
                            var offset = this.bb.__offset(this.bb_pos, 16);
                            return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0
                        }, Field.prototype.customMetadata = function (index, obj) {
                            var offset = this.bb.__offset(this.bb_pos, 18);
                            return offset ? (obj || new org.apache.arrow.flatbuf.KeyValue).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + 4 * index), this.bb) : null
                        }, Field.prototype.customMetadataLength = function () {
                            var offset = this.bb.__offset(this.bb_pos, 18);
                            return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0
                        }, Field.startField = function (builder) {
                            builder.startObject(8)
                        }, Field.addName = function (builder, nameOffset) {
                            builder.addFieldOffset(0, nameOffset, 0)
                        }, Field.addNullable = function (builder, nullable) {
                            builder.addFieldInt8(1, +nullable, 0)
                        }, Field.addTypeType = function (builder, typeType) {
                            builder.addFieldInt8(2, typeType, org.apache.arrow.flatbuf.Type.NONE)
                        }, Field.addType = function (builder, typeOffset) {
                            builder.addFieldOffset(3, typeOffset, 0)
                        }, Field.addDictionary = function (builder, dictionaryOffset) {
                            builder.addFieldOffset(4, dictionaryOffset, 0)
                        }, Field.addChildren = function (builder, childrenOffset) {
                            builder.addFieldOffset(5, childrenOffset, 0)
                        }, Field.createChildrenVector = function (builder, data) {
                            builder.startVector(4, data.length, 4);
                            for (var i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
                            return builder.endVector()
                        }, Field.startChildrenVector = function (builder, numElems) {
                            builder.startVector(4, numElems, 4)
                        }, Field.addLayout = function (builder, layoutOffset) {
                            builder.addFieldOffset(6, layoutOffset, 0)
                        }, Field.createLayoutVector = function (builder, data) {
                            builder.startVector(4, data.length, 4);
                            for (var i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
                            return builder.endVector()
                        }, Field.startLayoutVector = function (builder, numElems) {
                            builder.startVector(4, numElems, 4)
                        }, Field.addCustomMetadata = function (builder, customMetadataOffset) {
                            builder.addFieldOffset(7, customMetadataOffset, 0)
                        }, Field.createCustomMetadataVector = function (builder, data) {
                            builder.startVector(4, data.length, 4);
                            for (var i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
                            return builder.endVector()
                        }, Field.startCustomMetadataVector = function (builder, numElems) {
                            builder.startVector(4, numElems, 4)
                        }, Field.endField = function (builder) {
                            return builder.endObject()
                        }, Field
                    }();
                    flatbuf.Field = Field
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Buffer = function () {
                        function Buffer() {
                            this.bb_pos = 0
                        }

                        return Buffer.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Buffer.prototype.offset = function () {
                            return this.bb.readInt64(this.bb_pos)
                        }, Buffer.prototype.length = function () {
                            return this.bb.readInt64(this.bb_pos + 8)
                        }, Buffer.createBuffer = function (builder, offset, length) {
                            return builder.prep(8, 16), builder.writeInt64(length), builder.writeInt64(offset), builder.offset()
                        }, Buffer
                    }();
                    flatbuf.Buffer = Buffer
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Schema = function () {
                        function Schema() {
                            this.bb_pos = 0
                        }

                        return Schema.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Schema.getRootAsSchema = function (bb, obj) {
                            return (obj || new Schema).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Schema.prototype.endianness = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.Endianness.Little
                        }, Schema.prototype.fields = function (index, obj) {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? (obj || new org.apache.arrow.flatbuf.Field).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + 4 * index), this.bb) : null
                        }, Schema.prototype.fieldsLength = function () {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0
                        }, Schema.prototype.customMetadata = function (index, obj) {
                            var offset = this.bb.__offset(this.bb_pos, 8);
                            return offset ? (obj || new org.apache.arrow.flatbuf.KeyValue).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + 4 * index), this.bb) : null
                        }, Schema.prototype.customMetadataLength = function () {
                            var offset = this.bb.__offset(this.bb_pos, 8);
                            return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0
                        }, Schema.startSchema = function (builder) {
                            builder.startObject(3)
                        }, Schema.addEndianness = function (builder, endianness) {
                            builder.addFieldInt16(0, endianness, org.apache.arrow.flatbuf.Endianness.Little)
                        }, Schema.addFields = function (builder, fieldsOffset) {
                            builder.addFieldOffset(1, fieldsOffset, 0)
                        }, Schema.createFieldsVector = function (builder, data) {
                            builder.startVector(4, data.length, 4);
                            for (var i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
                            return builder.endVector()
                        }, Schema.startFieldsVector = function (builder, numElems) {
                            builder.startVector(4, numElems, 4)
                        }, Schema.addCustomMetadata = function (builder, customMetadataOffset) {
                            builder.addFieldOffset(2, customMetadataOffset, 0)
                        }, Schema.createCustomMetadataVector = function (builder, data) {
                            builder.startVector(4, data.length, 4);
                            for (var i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
                            return builder.endVector()
                        }, Schema.startCustomMetadataVector = function (builder, numElems) {
                            builder.startVector(4, numElems, 4)
                        }, Schema.endSchema = function (builder) {
                            return builder.endObject()
                        }, Schema.finishSchemaBuffer = function (builder, offset) {
                            builder.finish(offset)
                        }, Schema
                    }();
                    flatbuf.Schema = Schema
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {}))
}, function (module, exports, __webpack_require__) {
    "use strict";

    function align(value, alignment) {
        return value + padding(value, alignment)
    }

    function padding(value, alignment) {
        return value % alignment == 0 ? 0 : alignment - value % alignment
    }

    function getBool(_data, _index, byte, bit) {
        return 0 != (byte & 1 << bit)
    }

    function getBit(_data, _index, byte, bit) {
        return (byte & 1 << bit) >> bit
    }

    function setBool(bytes, index, value) {
        return value ? !!(bytes[index >> 3] |= 1 << index % 8) || !0 : !(bytes[index >> 3] &= ~(1 << index % 8)) && !1
    }

    function packBools(values) {
        var n = 0, i = 0, xs = [], bit = 0, byte = 0;
        try {
            for (var values_1 = tslib_1.__values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                values_1_1.value && (byte |= 1 << bit), 8 == ++bit && (xs[i++] = byte, byte = bit = 0)
            }
        } catch (e_1_1) {
            e_1 = {error: e_1_1}
        } finally {
            try {
                values_1_1 && !values_1_1.done && (_a = values_1.return) && _a.call(values_1)
            } finally {
                if (e_1) throw e_1.error
            }
        }
        if ((0 === i || bit > 0) && (xs[i++] = byte), i % 8 && (n = i + 8 - i % 8)) do {
            xs[i] = 0
        } while (++i < n);
        return new Uint8Array(xs);
        var e_1, _a
    }

    function iterateBits(bytes, begin, length, context, get) {
        var bit, byteIndex, index, remaining, byte;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bit = begin % 8, byteIndex = begin >> 3, index = 0, remaining = length, _a.label = 1;
                case 1:
                    if (!(remaining > 0)) return [3, 6];
                    byte = bytes[byteIndex++], _a.label = 2;
                case 2:
                    return [4, get(context, index++, byte, bit)];
                case 3:
                    _a.sent(), _a.label = 4;
                case 4:
                    if (--remaining > 0 && ++bit < 8) return [3, 2];
                    _a.label = 5;
                case 5:
                    return bit = 0, [3, 1];
                case 6:
                    return [2]
            }
        })
    }

    function popcnt_bit_range(data, lhs, rhs) {
        if (rhs - lhs <= 0) return 0;
        if (rhs - lhs < 8) {
            var sum = 0;
            try {
                for (var _a = tslib_1.__values(iterateBits(data, lhs, rhs - lhs, data, getBit)), _b = _a.next(); !_b.done; _b = _a.next()) {
                    sum += _b.value
                }
            } catch (e_2_1) {
                e_2 = {error: e_2_1}
            } finally {
                try {
                    _b && !_b.done && (_c = _a.return) && _c.call(_a)
                } finally {
                    if (e_2) throw e_2.error
                }
            }
            return sum
        }
        var rhsInside = rhs >> 3 << 3, lhsInside = lhs + (lhs % 8 == 0 ? 0 : 8 - lhs % 8);
        return popcnt_bit_range(data, lhs, lhsInside) + popcnt_bit_range(data, rhsInside, rhs) + popcnt_array(data, lhsInside >> 3, rhsInside - lhsInside >> 3);
        var e_2, _c
    }

    function popcnt_array(arr, byteOffset, byteLength) {
        for (var cnt = 0, pos = 0 | byteOffset, view = new DataView(arr.buffer, arr.byteOffset, arr.byteLength), len = void 0 === byteLength ? arr.byteLength : pos + byteLength; len - pos >= 4;) cnt += popcnt_uint32(view.getUint32(pos)), pos += 4;
        for (; len - pos >= 2;) cnt += popcnt_uint32(view.getUint16(pos)), pos += 2;
        for (; len - pos >= 1;) cnt += popcnt_uint32(view.getUint8(pos)), pos += 1;
        return cnt
    }

    function popcnt_uint32(uint32) {
        var i = 0 | uint32;
        return i -= i >>> 1 & 1431655765, 16843009 * ((i = (858993459 & i) + (i >>> 2 & 858993459)) + (i >>> 4) & 252645135) >>> 24
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.align = align, exports.padding = padding, exports.getBool = getBool, exports.getBit = getBit, exports.setBool = setBool, exports.packBools = packBools, exports.iterateBits = iterateBits, exports.popcnt_bit_range = popcnt_bit_range, exports.popcnt_array = popcnt_array, exports.popcnt_uint32 = popcnt_uint32;
    var _tslib = __webpack_require__(1), tslib_1 = function (obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }(_tslib)
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }

    exports.__esModule = !0;
    var _iterator = __webpack_require__(6), _iterator2 = _interopRequireDefault(_iterator),
        _symbol = __webpack_require__(81), _symbol2 = _interopRequireDefault(_symbol),
        _typeof = "function" == typeof _symbol2.default && "symbol" == typeof _iterator2.default ? function (obj) {
            return typeof obj
        } : function (obj) {
            return obj && "function" == typeof _symbol2.default && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj
        };
    exports.default = "function" == typeof _symbol2.default && "symbol" === _typeof(_iterator2.default) ? function (obj) {
        return void 0 === obj ? "undefined" : _typeof(obj)
    } : function (obj) {
        return obj && "function" == typeof _symbol2.default && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : void 0 === obj ? "undefined" : _typeof(obj)
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    var $at = __webpack_require__(117)(!0);
    __webpack_require__(51)(String, "String", function (iterated) {
        this._t = String(iterated), this._i = 0
    }, function () {
        var point, O = this._t, index = this._i;
        return index >= O.length ? {
            value: void 0,
            done: !0
        } : (point = $at(O, index), this._i += point.length, {value: point, done: !1})
    })
}, function (module, exports) {
    module.exports = function (it) {
        if (void 0 == it) throw TypeError("Can't call method on  " + it);
        return it
    }
}, function (module, exports) {
    module.exports = function (bitmap, value) {
        return {enumerable: !(1 & bitmap), configurable: !(2 & bitmap), writable: !(4 & bitmap), value: value}
    }
}, function (module, exports, __webpack_require__) {
    var anObject = __webpack_require__(8), dPs = __webpack_require__(119), enumBugKeys = __webpack_require__(58),
        IE_PROTO = __webpack_require__(56)("IE_PROTO"), Empty = function () {
        }, createDict = function () {
            var iframeDocument, iframe = __webpack_require__(52)("iframe"), i = enumBugKeys.length;
            for (iframe.style.display = "none", __webpack_require__(78).appendChild(iframe), iframe.src = "javascript:", iframeDocument = iframe.contentWindow.document, iframeDocument.open(), iframeDocument.write("<script>document.F=Object<\/script>"), iframeDocument.close(), createDict = iframeDocument.F; i--;) delete createDict.prototype[enumBugKeys[i]];
            return createDict()
        };
    module.exports = Object.create || function (O, Properties) {
        var result;
        return null !== O ? (Empty.prototype = anObject(O), result = new Empty, Empty.prototype = null, result[IE_PROTO] = O) : result = createDict(), void 0 === Properties ? result : dPs(result, Properties)
    }
}, function (module, exports) {
    var id = 0, px = Math.random();
    module.exports = function (key) {
        return "Symbol(".concat(void 0 === key ? "" : key, ")_", (++id + px).toString(36))
    }
}, function (module, exports, __webpack_require__) {
    __webpack_require__(122);
    for (var global = __webpack_require__(3), hide = __webpack_require__(13), Iterators = __webpack_require__(24), TO_STRING_TAG = __webpack_require__(4)("toStringTag"), DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), i = 0; i < DOMIterables.length; i++) {
        var NAME = DOMIterables[i], Collection = global[NAME], proto = Collection && Collection.prototype;
        proto && !proto[TO_STRING_TAG] && hide(proto, TO_STRING_TAG, NAME), Iterators[NAME] = Iterators.Array
    }
}, function (module, exports, __webpack_require__) {
    exports.f = __webpack_require__(4)
}, function (module, exports) {
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(131), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(167), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    "use strict";
    (function (process) {
        function nextTick(fn, arg1, arg2, arg3) {
            if ("function" != typeof fn) throw new TypeError('"callback" argument must be a function');
            var args, i, len = arguments.length;
            switch (len) {
                case 0:
                case 1:
                    return process.nextTick(fn);
                case 2:
                    return process.nextTick(function () {
                        fn.call(null, arg1)
                    });
                case 3:
                    return process.nextTick(function () {
                        fn.call(null, arg1, arg2)
                    });
                case 4:
                    return process.nextTick(function () {
                        fn.call(null, arg1, arg2, arg3)
                    });
                default:
                    for (args = new Array(len - 1), i = 0; i < args.length;) args[i++] = arguments[i];
                    return process.nextTick(function () {
                        fn.apply(null, args)
                    })
            }
        }

        !process.version || 0 === process.version.indexOf("v0.") || 0 === process.version.indexOf("v1.") && 0 !== process.version.indexOf("v1.8.") ? module.exports = {nextTick: nextTick} : module.exports = process
    }).call(exports, __webpack_require__(19))
}, function (module, exports, __webpack_require__) {
    function copyProps(src, dst) {
        for (var key in src) dst[key] = src[key]
    }

    function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer(arg, encodingOrOffset, length)
    }

    var buffer = __webpack_require__(101), Buffer = buffer.Buffer;
    Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow ? module.exports = buffer : (copyProps(buffer, exports), exports.Buffer = SafeBuffer), copyProps(Buffer, SafeBuffer), SafeBuffer.from = function (arg, encodingOrOffset, length) {
        if ("number" == typeof arg) throw new TypeError("Argument must not be a number");
        return Buffer(arg, encodingOrOffset, length)
    }, SafeBuffer.alloc = function (size, fill, encoding) {
        if ("number" != typeof size) throw new TypeError("Argument must be a number");
        var buf = Buffer(size);
        return void 0 !== fill ? "string" == typeof encoding ? buf.fill(fill, encoding) : buf.fill(fill) : buf.fill(0), buf
    }, SafeBuffer.allocUnsafe = function (size) {
        if ("number" != typeof size) throw new TypeError("Argument must be a number");
        return Buffer(size)
    }, SafeBuffer.allocUnsafeSlow = function (size) {
        if ("number" != typeof size) throw new TypeError("Argument must be a number");
        return buffer.SlowBuffer(size)
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: !0}), exports.FieldMetadata = exports.BufferMetadata = exports.DictionaryBatch = exports.RecordBatchMetadata = exports.Message = exports.FileBlock = exports.Footer = void 0;
    var _tslib = __webpack_require__(1), tslib_1 = function (obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }(_tslib), _bit = __webpack_require__(33), _type = __webpack_require__(10), Footer = function () {
        function Footer(dictionaryBatches, recordBatches, schema) {
            this.dictionaryBatches = dictionaryBatches, this.recordBatches = recordBatches, this.schema = schema
        }

        return Footer
    }();
    exports.Footer = Footer;
    var FileBlock = function () {
        function FileBlock(metaDataLength, bodyLength, offset) {
            this.metaDataLength = metaDataLength, this.bodyLength = bodyLength, this.offset = offset
        }

        return FileBlock
    }();
    exports.FileBlock = FileBlock;
    var Message = function () {
        function Message(version, bodyLength, headerType) {
            this.version = version, this.headerType = headerType, this.bodyLength = "number" == typeof bodyLength ? bodyLength : bodyLength.low
        }

        return Message.isSchema = function (m) {
            return m.headerType === _type.MessageHeader.Schema
        }, Message.isRecordBatch = function (m) {
            return m.headerType === _type.MessageHeader.RecordBatch
        }, Message.isDictionaryBatch = function (m) {
            return m.headerType === _type.MessageHeader.DictionaryBatch
        }, Message
    }();
    exports.Message = Message;
    var RecordBatchMetadata = function (_super) {
        function RecordBatchMetadata(version, length, nodes, buffers) {
            var _this = _super.call(this, version, buffers.reduce(function (s, b) {
                return (0, _bit.align)(s + b.length + (b.offset - s), 8)
            }, 0), _type.MessageHeader.RecordBatch) || this;
            return _this.nodes = nodes, _this.buffers = buffers, _this.length = "number" == typeof length ? length : length.low, _this
        }

        return tslib_1.__extends(RecordBatchMetadata, _super), RecordBatchMetadata
    }(Message);
    exports.RecordBatchMetadata = RecordBatchMetadata;
    var DictionaryBatch = function (_super) {
        function DictionaryBatch(version, data, id, isDelta) {
            void 0 === isDelta && (isDelta = !1);
            var _this = _super.call(this, version, data.bodyLength, _type.MessageHeader.DictionaryBatch) || this;
            return _this.isDelta = isDelta, _this.data = data, _this.id = "number" == typeof id ? id : id.low, _this
        }

        return tslib_1.__extends(DictionaryBatch, _super), DictionaryBatch.getId = function () {
            return DictionaryBatch.atomicDictionaryId++
        }, Object.defineProperty(DictionaryBatch.prototype, "nodes", {
            get: function () {
                return this.data.nodes
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(DictionaryBatch.prototype, "buffers", {
            get: function () {
                return this.data.buffers
            }, enumerable: !0, configurable: !0
        }), DictionaryBatch.atomicDictionaryId = 0, DictionaryBatch
    }(Message);
    exports.DictionaryBatch = DictionaryBatch;
    var BufferMetadata = function () {
        function BufferMetadata(offset, length) {
            this.offset = "number" == typeof offset ? offset : offset.low, this.length = "number" == typeof length ? length : length.low
        }

        return BufferMetadata
    }();
    exports.BufferMetadata = BufferMetadata;
    var FieldMetadata = function () {
        function FieldMetadata(length, nullCount) {
            this.length = "number" == typeof length ? length : length.low, this.nullCount = "number" == typeof nullCount ? nullCount : nullCount.low
        }

        return FieldMetadata
    }();
    exports.FieldMetadata = FieldMetadata
}, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: !0}), exports.VectorVisitor = exports.TypeVisitor = void 0;
    var _type = __webpack_require__(10), TypeVisitor = function () {
        function TypeVisitor() {
        }

        return TypeVisitor.prototype.visit = function (type) {
            return type.acceptTypeVisitor && type.acceptTypeVisitor(this) || null
        }, TypeVisitor.prototype.visitMany = function (types) {
            var _this = this;
            return types.map(function (type) {
                return _this.visit(type)
            })
        }, TypeVisitor.visitTypeInline = function (visitor, type) {
            switch (type.TType) {
                case _type.Type.Null:
                    return visitor.visitNull && visitor.visitNull(type);
                case _type.Type.Int:
                    return visitor.visitInt && visitor.visitInt(type);
                case _type.Type.Float:
                    return visitor.visitFloat && visitor.visitFloat(type);
                case _type.Type.Binary:
                    return visitor.visitBinary && visitor.visitBinary(type);
                case _type.Type.Utf8:
                    return visitor.visitUtf8 && visitor.visitUtf8(type);
                case _type.Type.Bool:
                    return visitor.visitBool && visitor.visitBool(type);
                case _type.Type.Decimal:
                    return visitor.visitDecimal && visitor.visitDecimal(type);
                case _type.Type.Date:
                    return visitor.visitDate && visitor.visitDate(type);
                case _type.Type.Time:
                    return visitor.visitTime && visitor.visitTime(type);
                case _type.Type.Timestamp:
                    return visitor.visitTimestamp && visitor.visitTimestamp(type);
                case _type.Type.Interval:
                    return visitor.visitInterval && visitor.visitInterval(type);
                case _type.Type.List:
                    return visitor.visitList && visitor.visitList(type);
                case _type.Type.Struct:
                    return visitor.visitStruct && visitor.visitStruct(type);
                case _type.Type.Union:
                    return visitor.visitUnion && visitor.visitUnion(type);
                case _type.Type.FixedSizeBinary:
                    return visitor.visitFixedSizeBinary && visitor.visitFixedSizeBinary(type);
                case _type.Type.FixedSizeList:
                    return visitor.visitFixedSizeList && visitor.visitFixedSizeList(type);
                case _type.Type.Map:
                    return visitor.visitMap && visitor.visitMap(type);
                case _type.Type.Dictionary:
                    return visitor.visitDictionary && visitor.visitDictionary(type);
                default:
                    return null
            }
        }, TypeVisitor
    }();
    exports.TypeVisitor = TypeVisitor;
    var VectorVisitor = function () {
        function VectorVisitor() {
        }

        return VectorVisitor.prototype.visit = function (vector) {
            return vector.acceptVectorVisitor && vector.acceptVectorVisitor(this) || null
        }, VectorVisitor.prototype.visitMany = function (vectors) {
            var _this = this;
            return vectors.map(function (vector) {
                return _this.visit(vector)
            })
        }, VectorVisitor.visitTypeInline = function (visitor, type, vector) {
            switch (type.TType) {
                case _type.Type.Null:
                    return visitor.visitNull && visitor.visitNull(vector);
                case _type.Type.Int:
                    return visitor.visitInt && visitor.visitInt(vector);
                case _type.Type.Float:
                    return visitor.visitFloat && visitor.visitFloat(vector);
                case _type.Type.Binary:
                    return visitor.visitBinary && visitor.visitBinary(vector);
                case _type.Type.Utf8:
                    return visitor.visitUtf8 && visitor.visitUtf8(vector);
                case _type.Type.Bool:
                    return visitor.visitBool && visitor.visitBool(vector);
                case _type.Type.Decimal:
                    return visitor.visitDecimal && visitor.visitDecimal(vector);
                case _type.Type.Date:
                    return visitor.visitDate && visitor.visitDate(vector);
                case _type.Type.Time:
                    return visitor.visitTime && visitor.visitTime(vector);
                case _type.Type.Timestamp:
                    return visitor.visitTimestamp && visitor.visitTimestamp(vector);
                case _type.Type.Interval:
                    return visitor.visitInterval && visitor.visitInterval(vector);
                case _type.Type.List:
                    return visitor.visitList && visitor.visitList(vector);
                case _type.Type.Struct:
                    return visitor.visitStruct && visitor.visitStruct(vector);
                case _type.Type.Union:
                    return visitor.visitUnion && visitor.visitUnion(vector);
                case _type.Type.FixedSizeBinary:
                    return visitor.visitFixedSizeBinary && visitor.visitFixedSizeBinary(vector);
                case _type.Type.FixedSizeList:
                    return visitor.visitFixedSizeList && visitor.visitFixedSizeList(vector);
                case _type.Type.Map:
                    return visitor.visitMap && visitor.visitMap(vector);
                case _type.Type.Dictionary:
                    return visitor.visitDictionary && visitor.visitDictionary(vector);
                default:
                    return null
            }
        }, VectorVisitor
    }();
    exports.VectorVisitor = VectorVisitor
}, function (module, exports, __webpack_require__) {
    "use strict";

    function toTypedArray(ArrayType, values) {
        return !ArrayType && ArrayBuffer.isView(values) ? values : values instanceof ArrayType ? values : values && ArrayBuffer.isView(values) ? new ArrayType(values.buffer, values.byteOffset, values.byteLength / ArrayType.BYTES_PER_ELEMENT) : ArrayType.from(values || [])
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.ChunkedData = exports.DenseUnionData = exports.SparseUnionData = exports.UnionData = exports.ListData = exports.SingleNestedData = exports.NestedData = exports.DictionaryData = exports.FlatListData = exports.BoolData = exports.FlatData = exports.BaseData = exports.kUnknownNullCount = void 0, exports.toTypedArray = toTypedArray;
    var _tslib = __webpack_require__(1), tslib_1 = function (obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj
        }(_tslib), _bit = __webpack_require__(33), _type = __webpack_require__(10),
        BaseData = (exports.kUnknownNullCount = -1, function () {
            function BaseData(type, length, offset, nullCount) {
                this.type = type, this.length = Math.floor(Math.max(length || 0, 0)), this.offset = Math.floor(Math.max(offset || 0, 0)), this._nullCount = Math.floor(Math.max(nullCount || 0, -1))
            }

            return Object.defineProperty(BaseData.prototype, "typeId", {
                get: function () {
                    return this.type.TType
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(BaseData.prototype, "nullBitmap", {
                get: function () {
                    return this[_type.VectorType.VALIDITY]
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(BaseData.prototype, "nullCount", {
                get: function () {
                    var nullBitmap, nullCount = this._nullCount;
                    return -1 === nullCount && (nullBitmap = this[_type.VectorType.VALIDITY]) && (this._nullCount = nullCount = this.length - (0, _bit.popcnt_bit_range)(nullBitmap, this.offset, this.offset + this.length)), nullCount
                }, enumerable: !0, configurable: !0
            }), BaseData.prototype.clone = function (type, length, offset, nullCount) {
                return void 0 === length && (length = this.length), void 0 === offset && (offset = this.offset), void 0 === nullCount && (nullCount = this._nullCount), new BaseData(type, length, offset, nullCount)
            }, BaseData.prototype.slice = function (offset, length) {
                return length <= 0 ? this : this.sliceInternal(this.clone(this.type, length, this.offset + offset, +(0 === this._nullCount) - 1), offset, length)
            }, BaseData.prototype.sliceInternal = function (clone, offset, length) {
                var arr;
                return (arr = this[_type.VectorType.TYPE]) && (clone[_type.VectorType.TYPE] = this.sliceData(arr, offset, length)), (arr = this[_type.VectorType.OFFSET]) && (clone[_type.VectorType.OFFSET] = this.sliceOffsets(arr, offset, length)) || (arr = this[_type.VectorType.DATA]) && (clone[_type.VectorType.DATA] = this.sliceData(arr, offset, length)), clone
            }, BaseData.prototype.sliceData = function (data, offset, length) {
                return data.subarray(offset, offset + length)
            }, BaseData.prototype.sliceOffsets = function (valueOffsets, offset, length) {
                return valueOffsets.subarray(offset, offset + length + 1)
            }, BaseData
        }());
    exports.BaseData = BaseData;
    var FlatData = function (_super) {
        function FlatData(type, length, nullBitmap, data, offset, nullCount) {
            var _this = _super.call(this, type, length, offset, nullCount) || this;
            return _this[_type.VectorType.DATA] = toTypedArray(_this.ArrayType, data), _this[_type.VectorType.VALIDITY] = toTypedArray(Uint8Array, nullBitmap), _this
        }

        return tslib_1.__extends(FlatData, _super), Object.defineProperty(FlatData.prototype, "values", {
            get: function () {
                return this[_type.VectorType.DATA]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(FlatData.prototype, "ArrayType", {
            get: function () {
                return this.type.ArrayType
            }, enumerable: !0, configurable: !0
        }), FlatData.prototype.clone = function (type, length, offset, nullCount) {
            return void 0 === length && (length = this.length), void 0 === offset && (offset = this.offset), void 0 === nullCount && (nullCount = this._nullCount), new this.constructor(type, length, this[_type.VectorType.VALIDITY], this[_type.VectorType.DATA], offset, nullCount)
        }, FlatData
    }(BaseData);
    exports.FlatData = FlatData;
    var BoolData = function (_super) {
        function BoolData() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(BoolData, _super), BoolData.prototype.sliceData = function (data) {
            return data
        }, BoolData
    }(FlatData);
    exports.BoolData = BoolData;
    var FlatListData = function (_super) {
        function FlatListData(type, length, nullBitmap, valueOffsets, data, offset, nullCount) {
            var _this = _super.call(this, type, length, nullBitmap, data, offset, nullCount) || this;
            return _this[_type.VectorType.OFFSET] = toTypedArray(Int32Array, valueOffsets), _this
        }

        return tslib_1.__extends(FlatListData, _super), Object.defineProperty(FlatListData.prototype, "values", {
            get: function () {
                return this[_type.VectorType.DATA]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(FlatListData.prototype, "valueOffsets", {
            get: function () {
                return this[_type.VectorType.OFFSET]
            }, enumerable: !0, configurable: !0
        }), FlatListData.prototype.clone = function (type, length, offset, nullCount) {
            return void 0 === length && (length = this.length), void 0 === offset && (offset = this.offset), void 0 === nullCount && (nullCount = this._nullCount), new FlatListData(type, length, this[_type.VectorType.VALIDITY], this[_type.VectorType.OFFSET], this[_type.VectorType.DATA], offset, nullCount)
        }, FlatListData
    }(FlatData);
    exports.FlatListData = FlatListData;
    var DictionaryData = function (_super) {
        function DictionaryData(type, dictionary, indices) {
            var _this = _super.call(this, type, indices.length, indices.offset, indices._nullCount) || this;
            return _this._indices = indices, _this._dictionary = dictionary, _this
        }

        return tslib_1.__extends(DictionaryData, _super), Object.defineProperty(DictionaryData.prototype, "indices", {
            get: function () {
                return this._indices
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(DictionaryData.prototype, "dictionary", {
            get: function () {
                return this._dictionary
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(DictionaryData.prototype, "nullCount", {
            get: function () {
                return this._indices.nullCount
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(DictionaryData.prototype, "nullBitmap", {
            get: function () {
                return this._indices.nullBitmap
            }, enumerable: !0, configurable: !0
        }), DictionaryData.prototype.clone = function (type, length, offset) {
            void 0 === length && (length = this.length), void 0 === offset && (offset = this.offset);
            var data = this._dictionary.data.clone(type.dictionary);
            return new DictionaryData(this.type, this._dictionary.clone(data), this._indices.slice(offset - this.offset, length))
        }, DictionaryData.prototype.sliceInternal = function (clone, _offset, _length) {
            return clone.length = clone._indices.length, clone._nullCount = clone._indices._nullCount, clone
        }, DictionaryData
    }(BaseData);
    exports.DictionaryData = DictionaryData;
    var NestedData = function (_super) {
        function NestedData(type, length, nullBitmap, childData, offset, nullCount) {
            var _this = _super.call(this, type, length, offset, nullCount) || this;
            return _this.childData = childData, _this[_type.VectorType.VALIDITY] = toTypedArray(Uint8Array, nullBitmap), _this
        }

        return tslib_1.__extends(NestedData, _super), NestedData.prototype.clone = function (type, length, offset, nullCount) {
            return void 0 === length && (length = this.length), void 0 === offset && (offset = this.offset), void 0 === nullCount && (nullCount = this._nullCount), new NestedData(type, length, this[_type.VectorType.VALIDITY], this.childData, offset, nullCount)
        }, NestedData.prototype.sliceInternal = function (clone, offset, length) {
            return this[_type.VectorType.OFFSET] || (clone.childData = this.childData.map(function (child) {
                return child.slice(offset, length)
            })), _super.prototype.sliceInternal.call(this, clone, offset, length)
        }, NestedData
    }(BaseData);
    exports.NestedData = NestedData;
    var SingleNestedData = function (_super) {
        function SingleNestedData(type, length, nullBitmap, valueChildData, offset, nullCount) {
            var _this = _super.call(this, type, length, nullBitmap, [valueChildData], offset, nullCount) || this;
            return _this._valuesData = valueChildData, _this
        }

        return tslib_1.__extends(SingleNestedData, _super), Object.defineProperty(SingleNestedData.prototype, "values", {
            get: function () {
                return this._valuesData
            }, enumerable: !0, configurable: !0
        }), SingleNestedData
    }(NestedData);
    exports.SingleNestedData = SingleNestedData;
    var ListData = function (_super) {
        function ListData(type, length, nullBitmap, valueOffsets, valueChildData, offset, nullCount) {
            var _this = _super.call(this, type, length, nullBitmap, valueChildData, offset, nullCount) || this;
            return _this[_type.VectorType.OFFSET] = toTypedArray(Int32Array, valueOffsets), _this
        }

        return tslib_1.__extends(ListData, _super), Object.defineProperty(ListData.prototype, "valueOffsets", {
            get: function () {
                return this[_type.VectorType.OFFSET]
            }, enumerable: !0, configurable: !0
        }), ListData.prototype.clone = function (type, length, offset, nullCount) {
            return void 0 === length && (length = this.length), void 0 === offset && (offset = this.offset), void 0 === nullCount && (nullCount = this._nullCount), new ListData(type, length, this[_type.VectorType.VALIDITY], this[_type.VectorType.OFFSET], this._valuesData, offset, nullCount)
        }, ListData
    }(SingleNestedData);
    exports.ListData = ListData;
    var UnionData = function (_super) {
        function UnionData(type, length, nullBitmap, typeIds, childData, offset, nullCount) {
            var _this = _super.call(this, type, length, nullBitmap, childData, offset, nullCount) || this;
            return _this[_type.VectorType.TYPE] = toTypedArray(Int8Array, typeIds), _this
        }

        return tslib_1.__extends(UnionData, _super), Object.defineProperty(UnionData.prototype, "typeIds", {
            get: function () {
                return this[_type.VectorType.TYPE]
            }, enumerable: !0, configurable: !0
        }), UnionData.prototype.clone = function (type, length, offset, nullCount) {
            return void 0 === length && (length = this.length), void 0 === offset && (offset = this.offset), void 0 === nullCount && (nullCount = this._nullCount), new UnionData(type, length, this[_type.VectorType.VALIDITY], this[_type.VectorType.TYPE], this.childData, offset, nullCount)
        }, UnionData
    }(NestedData);
    exports.UnionData = UnionData;
    var SparseUnionData = function (_super) {
        function SparseUnionData(type, length, nullBitmap, typeIds, childData, offset, nullCount) {
            return _super.call(this, type, length, nullBitmap, typeIds, childData, offset, nullCount) || this
        }

        return tslib_1.__extends(SparseUnionData, _super), SparseUnionData.prototype.clone = function (type, length, offset, nullCount) {
            return void 0 === length && (length = this.length), void 0 === offset && (offset = this.offset), void 0 === nullCount && (nullCount = this._nullCount), new SparseUnionData(type, length, this[_type.VectorType.VALIDITY], this[_type.VectorType.TYPE], this.childData, offset, nullCount)
        }, SparseUnionData
    }(UnionData);
    exports.SparseUnionData = SparseUnionData;
    var DenseUnionData = function (_super) {
        function DenseUnionData(type, length, nullBitmap, typeIds, valueOffsets, childData, offset, nullCount) {
            var _this = _super.call(this, type, length, nullBitmap, typeIds, childData, offset, nullCount) || this;
            return _this[_type.VectorType.OFFSET] = toTypedArray(Int32Array, valueOffsets), _this
        }

        return tslib_1.__extends(DenseUnionData, _super), Object.defineProperty(DenseUnionData.prototype, "valueOffsets", {
            get: function () {
                return this[_type.VectorType.OFFSET]
            }, enumerable: !0, configurable: !0
        }), DenseUnionData.prototype.clone = function (type, length, offset, nullCount) {
            return void 0 === length && (length = this.length), void 0 === offset && (offset = this.offset), void 0 === nullCount && (nullCount = this._nullCount), new DenseUnionData(type, length, this[_type.VectorType.VALIDITY], this[_type.VectorType.TYPE], this[_type.VectorType.OFFSET], this.childData, offset, nullCount)
        }, DenseUnionData
    }(UnionData);
    exports.DenseUnionData = DenseUnionData;
    var ChunkedData = function (_super) {
        function ChunkedData(type, length, chunkVectors, offset, nullCount, chunkOffsets) {
            var _this = _super.call(this, type, length, offset, nullCount) || this;
            return _this._chunkVectors = chunkVectors, _this._chunkOffsets = chunkOffsets || ChunkedData.computeOffsets(chunkVectors), _this
        }

        return tslib_1.__extends(ChunkedData, _super), Object.defineProperty(ChunkedData.prototype, "chunkVectors", {
            get: function () {
                return this._chunkVectors
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(ChunkedData.prototype, "chunkOffsets", {
            get: function () {
                return this._chunkOffsets
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(ChunkedData.prototype, "chunkData", {
            get: function () {
                return this._chunkData || (this._chunkData = this._chunkVectors.map(function (_a) {
                    return _a.data
                }))
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(ChunkedData.prototype, "nullCount", {
            get: function () {
                var nullCount = this._nullCount;
                return -1 === nullCount && (this._nullCount = nullCount = this._chunkVectors.reduce(function (x, c) {
                    return x + c.nullCount
                }, 0)), nullCount
            }, enumerable: !0, configurable: !0
        }), ChunkedData.prototype.clone = function (type, length, offset, nullCount) {
            return void 0 === length && (length = this.length), void 0 === offset && (offset = this.offset), void 0 === nullCount && (nullCount = this._nullCount), new ChunkedData(type, length, this._chunkVectors.map(function (vec) {
                return vec.clone(vec.data.clone(type))
            }), offset, nullCount, this._chunkOffsets)
        }, ChunkedData.prototype.sliceInternal = function (clone, offset, length) {
            for (var chunks = this._chunkVectors, offsets = this._chunkOffsets, chunkSlices = [], childIndex = -1, numChildren = chunks.length; ++childIndex < numChildren;) {
                var child = chunks[childIndex], childLength = child.length, childOffset = offsets[childIndex];
                if (!(childOffset >= offset + length) && !(offset >= childOffset + childLength)) if (childOffset >= offset && childOffset + childLength <= offset + length) chunkSlices.push(child); else {
                    var begin = Math.max(0, offset - childOffset),
                        end = begin + Math.min(childLength - begin, offset + length - childOffset);
                    chunkSlices.push(child.slice(begin, end))
                }
            }
            return clone._chunkVectors = chunkSlices, clone._chunkOffsets = ChunkedData.computeOffsets(chunkSlices), clone
        }, ChunkedData.computeOffsets = function (childVectors) {
            for (var childOffsets = new Uint32Array(childVectors.length + 1), index = 0, length_1 = childOffsets.length, childOffset = childOffsets[0] = 0; ++index < length_1;) childOffsets[index] = childOffset += childVectors[index - 1].length;
            return childOffsets
        }, ChunkedData
    }(BaseData);
    exports.ChunkedData = ChunkedData
}, function (module, exports) {
    var ceil = Math.ceil, floor = Math.floor;
    module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it)
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    var LIBRARY = __webpack_require__(22), $export = __webpack_require__(2), redefine = __webpack_require__(76),
        hide = __webpack_require__(13), Iterators = __webpack_require__(24), $iterCreate = __webpack_require__(118),
        setToStringTag = __webpack_require__(26), getPrototypeOf = __webpack_require__(79),
        ITERATOR = __webpack_require__(4)("iterator"), BUGGY = !([].keys && "next" in [].keys()),
        returnThis = function () {
            return this
        };
    module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);
        var methods, key, IteratorPrototype, getMethod = function (kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                    case"keys":
                    case"values":
                        return function () {
                            return new Constructor(this, kind)
                        }
                }
                return function () {
                    return new Constructor(this, kind)
                }
            }, TAG = NAME + " Iterator", DEF_VALUES = "values" == DEFAULT, VALUES_BUG = !1, proto = Base.prototype,
            $native = proto[ITERATOR] || proto["@@iterator"] || DEFAULT && proto[DEFAULT],
            $default = $native || getMethod(DEFAULT),
            $entries = DEFAULT ? DEF_VALUES ? getMethod("entries") : $default : void 0,
            $anyNative = "Array" == NAME ? proto.entries || $native : $native;
        if ($anyNative && (IteratorPrototype = getPrototypeOf($anyNative.call(new Base))) !== Object.prototype && IteratorPrototype.next && (setToStringTag(IteratorPrototype, TAG, !0), LIBRARY || "function" == typeof IteratorPrototype[ITERATOR] || hide(IteratorPrototype, ITERATOR, returnThis)), DEF_VALUES && $native && "values" !== $native.name && (VALUES_BUG = !0, $default = function () {
            return $native.call(this)
        }), LIBRARY && !FORCED || !BUGGY && !VALUES_BUG && proto[ITERATOR] || hide(proto, ITERATOR, $default), Iterators[NAME] = $default, Iterators[TAG] = returnThis, DEFAULT) if (methods = {
            values: DEF_VALUES ? $default : getMethod("values"),
            keys: IS_SET ? $default : getMethod("keys"),
            entries: $entries
        }, FORCED) for (key in methods) key in proto || redefine(proto, key, methods[key]); else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
        return methods
    }
}, function (module, exports, __webpack_require__) {
    var isObject = __webpack_require__(5), document = __webpack_require__(3).document,
        is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
        return is ? document.createElement(it) : {}
    }
}, function (module, exports, __webpack_require__) {
    var isObject = __webpack_require__(5);
    module.exports = function (it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (S && "function" == typeof(fn = it.toString) && !isObject(val = fn.call(it))) return val;
        if ("function" == typeof(fn = it.valueOf) && !isObject(val = fn.call(it))) return val;
        if (!S && "function" == typeof(fn = it.toString) && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (module, exports, __webpack_require__) {
    var cof = __webpack_require__(25);
    module.exports = Object("z").propertyIsEnumerable(0) ? Object : function (it) {
        return "String" == cof(it) ? it.split("") : Object(it)
    }
}, function (module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(50), min = Math.min;
    module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 9007199254740991) : 0
    }
}, function (module, exports, __webpack_require__) {
    var shared = __webpack_require__(57)("keys"), uid = __webpack_require__(39);
    module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key))
    }
}, function (module, exports, __webpack_require__) {
    var core = __webpack_require__(0), global = __webpack_require__(3),
        store = global["__core-js_shared__"] || (global["__core-js_shared__"] = {});
    (module.exports = function (key, value) {
        return store[key] || (store[key] = void 0 !== value ? value : {})
    })("versions", []).push({
        version: core.version,
        mode: __webpack_require__(22) ? "pure" : "global",
        copyright: "\xa9 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function (module, exports) {
    module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (module, exports, __webpack_require__) {
    var META = __webpack_require__(39)("meta"), isObject = __webpack_require__(5), has = __webpack_require__(15),
        setDesc = __webpack_require__(7).f, id = 0, isExtensible = Object.isExtensible || function () {
            return !0
        }, FREEZE = !__webpack_require__(14)(function () {
            return isExtensible(Object.preventExtensions({}))
        }), setMeta = function (it) {
            setDesc(it, META, {value: {i: "O" + ++id, w: {}}})
        }, fastKey = function (it, create) {
            if (!isObject(it)) return "symbol" == typeof it ? it : ("string" == typeof it ? "S" : "P") + it;
            if (!has(it, META)) {
                if (!isExtensible(it)) return "F";
                if (!create) return "E";
                setMeta(it)
            }
            return it[META].i
        }, getWeak = function (it, create) {
            if (!has(it, META)) {
                if (!isExtensible(it)) return !0;
                if (!create) return !1;
                setMeta(it)
            }
            return it[META].w
        }, onFreeze = function (it) {
            return FREEZE && meta.NEED && isExtensible(it) && !has(it, META) && setMeta(it), it
        }, meta = module.exports = {KEY: META, NEED: !1, fastKey: fastKey, getWeak: getWeak, onFreeze: onFreeze}
}, function (module, exports, __webpack_require__) {
    var global = __webpack_require__(3), core = __webpack_require__(0), LIBRARY = __webpack_require__(22),
        wksExt = __webpack_require__(41), defineProperty = __webpack_require__(7).f;
    module.exports = function (name) {
        var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
        "_" == name.charAt(0) || name in $Symbol || defineProperty($Symbol, name, {value: wksExt.f(name)})
    }
}, function (module, exports) {
    exports.f = Object.getOwnPropertySymbols
}, function (module, exports, __webpack_require__) {
    var cof = __webpack_require__(25), TAG = __webpack_require__(4)("toStringTag"),
        ARG = "Arguments" == cof(function () {
            return arguments
        }()), tryGet = function (it, key) {
            try {
                return it[key]
            } catch (e) {
            }
        };
    module.exports = function (it) {
        var O, T, B;
        return void 0 === it ? "Undefined" : null === it ? "Null" : "string" == typeof(T = tryGet(O = Object(it), TAG)) ? T : ARG ? cof(O) : "Object" == (B = cof(O)) && "function" == typeof O.callee ? "Arguments" : B
    }
}, function (module, exports) {
    module.exports = function (it, Constructor, name, forbiddenField) {
        if (!(it instanceof Constructor) || void 0 !== forbiddenField && forbiddenField in it) throw TypeError(name + ": incorrect invocation!");
        return it
    }
}, function (module, exports, __webpack_require__) {
    "use strict";

    function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function ($$resolve, $$reject) {
            if (void 0 !== resolve || void 0 !== reject) throw TypeError("Bad Promise constructor");
            resolve = $$resolve, reject = $$reject
        }), this.resolve = aFunction(resolve), this.reject = aFunction(reject)
    }

    var aFunction = __webpack_require__(23);
    module.exports.f = function (C) {
        return new PromiseCapability(C)
    }
}, function (module, exports, __webpack_require__) {
    var hide = __webpack_require__(13);
    module.exports = function (target, src, safe) {
        for (var key in src) safe && target[key] ? target[key] = src[key] : hide(target, key, src[key]);
        return target
    }
}, function (module, exports) {
    function EventEmitter() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function isFunction(arg) {
        return "function" == typeof arg
    }

    function isNumber(arg) {
        return "number" == typeof arg
    }

    function isObject(arg) {
        return "object" == typeof arg && null !== arg
    }

    function isUndefined(arg) {
        return void 0 === arg
    }

    module.exports = EventEmitter, EventEmitter.EventEmitter = EventEmitter, EventEmitter.prototype._events = void 0, EventEmitter.prototype._maxListeners = void 0, EventEmitter.defaultMaxListeners = 10, EventEmitter.prototype.setMaxListeners = function (n) {
        if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
        return this._maxListeners = n, this
    }, EventEmitter.prototype.emit = function (type) {
        var er, handler, len, args, i, listeners;
        if (this._events || (this._events = {}), "error" === type && (!this._events.error || isObject(this._events.error) && !this._events.error.length)) {
            if ((er = arguments[1]) instanceof Error) throw er;
            var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
            throw err.context = er, err
        }
        if (handler = this._events[type], isUndefined(handler)) return !1;
        if (isFunction(handler)) switch (arguments.length) {
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            default:
                args = Array.prototype.slice.call(arguments, 1), handler.apply(this, args)
        } else if (isObject(handler)) for (args = Array.prototype.slice.call(arguments, 1), listeners = handler.slice(), len = listeners.length, i = 0; i < len; i++) listeners[i].apply(this, args);
        return !0
    }, EventEmitter.prototype.addListener = function (type, listener) {
        var m;
        if (!isFunction(listener)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener), this._events[type] ? isObject(this._events[type]) ? this._events[type].push(listener) : this._events[type] = [this._events[type], listener] : this._events[type] = listener, isObject(this._events[type]) && !this._events[type].warned && (m = isUndefined(this._maxListeners) ? EventEmitter.defaultMaxListeners : this._maxListeners) && m > 0 && this._events[type].length > m && (this._events[type].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length), "function" == typeof console.trace && console.trace()), this
    }, EventEmitter.prototype.on = EventEmitter.prototype.addListener, EventEmitter.prototype.once = function (type, listener) {
        function g() {
            this.removeListener(type, g), fired || (fired = !0, listener.apply(this, arguments))
        }

        if (!isFunction(listener)) throw TypeError("listener must be a function");
        var fired = !1;
        return g.listener = listener, this.on(type, g), this
    }, EventEmitter.prototype.removeListener = function (type, listener) {
        var list, position, length, i;
        if (!isFunction(listener)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[type]) return this;
        if (list = this._events[type], length = list.length, position = -1, list === listener || isFunction(list.listener) && list.listener === listener) delete this._events[type], this._events.removeListener && this.emit("removeListener", type, listener); else if (isObject(list)) {
            for (i = length; i-- > 0;) if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                position = i;
                break
            }
            if (position < 0) return this;
            1 === list.length ? (list.length = 0, delete this._events[type]) : list.splice(position, 1), this._events.removeListener && this.emit("removeListener", type, listener)
        }
        return this
    }, EventEmitter.prototype.removeAllListeners = function (type) {
        var key, listeners;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[type] && delete this._events[type], this;
        if (0 === arguments.length) {
            for (key in this._events) "removeListener" !== key && this.removeAllListeners(key);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (listeners = this._events[type], isFunction(listeners)) this.removeListener(type, listeners); else if (listeners) for (; listeners.length;) this.removeListener(type, listeners[listeners.length - 1]);
        return delete this._events[type], this
    }, EventEmitter.prototype.listeners = function (type) {
        return this._events && this._events[type] ? isFunction(this._events[type]) ? [this._events[type]] : this._events[type].slice() : []
    }, EventEmitter.prototype.listenerCount = function (type) {
        if (this._events) {
            var evlistener = this._events[type];
            if (isFunction(evlistener)) return 1;
            if (evlistener) return evlistener.length
        }
        return 0
    }, EventEmitter.listenerCount = function (emitter, type) {
        return emitter.listenerCount(type)
    }
}, function (module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(98), exports.Stream = exports, exports.Readable = exports, exports.Writable = __webpack_require__(68), exports.Duplex = __webpack_require__(17), exports.Transform = __webpack_require__(104), exports.PassThrough = __webpack_require__(181)
}, function (module, exports, __webpack_require__) {
    "use strict";
    (function (process, setImmediate, global) {
        function CorkedRequest(state) {
            var _this = this;
            this.next = null, this.entry = null, this.finish = function () {
                onCorkedFinish(_this, state)
            }
        }

        function _uint8ArrayToBuffer(chunk) {
            return Buffer.from(chunk)
        }

        function _isUint8Array(obj) {
            return Buffer.isBuffer(obj) || obj instanceof OurUint8Array
        }

        function nop() {
        }

        function WritableState(options, stream) {
            Duplex = Duplex || __webpack_require__(17), options = options || {};
            var isDuplex = stream instanceof Duplex;
            this.objectMode = !!options.objectMode, isDuplex && (this.objectMode = this.objectMode || !!options.writableObjectMode);
            var hwm = options.highWaterMark, writableHwm = options.writableHighWaterMark,
                defaultHwm = this.objectMode ? 16 : 16384;
            this.highWaterMark = hwm || 0 === hwm ? hwm : isDuplex && (writableHwm || 0 === writableHwm) ? writableHwm : defaultHwm, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
            var noDecode = !1 === options.decodeStrings;
            this.decodeStrings = !noDecode, this.defaultEncoding = options.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (er) {
                onwrite(stream, er)
            }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new CorkedRequest(this)
        }

        function Writable(options) {
            if (Duplex = Duplex || __webpack_require__(17), !(realHasInstance.call(Writable, this) || this instanceof Duplex)) return new Writable(options);
            this._writableState = new WritableState(options, this), this.writable = !0, options && ("function" == typeof options.write && (this._write = options.write), "function" == typeof options.writev && (this._writev = options.writev), "function" == typeof options.destroy && (this._destroy = options.destroy), "function" == typeof options.final && (this._final = options.final)), Stream.call(this)
        }

        function writeAfterEnd(stream, cb) {
            var er = new Error("write after end");
            stream.emit("error", er), pna.nextTick(cb, er)
        }

        function validChunk(stream, state, chunk, cb) {
            var valid = !0, er = !1;
            return null === chunk ? er = new TypeError("May not write null values to stream") : "string" == typeof chunk || void 0 === chunk || state.objectMode || (er = new TypeError("Invalid non-string/buffer chunk")), er && (stream.emit("error", er), pna.nextTick(cb, er), valid = !1), valid
        }

        function decodeChunk(state, chunk, encoding) {
            return state.objectMode || !1 === state.decodeStrings || "string" != typeof chunk || (chunk = Buffer.from(chunk, encoding)), chunk
        }

        function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
            if (!isBuf) {
                var newChunk = decodeChunk(state, chunk, encoding);
                chunk !== newChunk && (isBuf = !0, encoding = "buffer", chunk = newChunk)
            }
            var len = state.objectMode ? 1 : chunk.length;
            state.length += len;
            var ret = state.length < state.highWaterMark;
            if (ret || (state.needDrain = !0), state.writing || state.corked) {
                var last = state.lastBufferedRequest;
                state.lastBufferedRequest = {
                    chunk: chunk,
                    encoding: encoding,
                    isBuf: isBuf,
                    callback: cb,
                    next: null
                }, last ? last.next = state.lastBufferedRequest : state.bufferedRequest = state.lastBufferedRequest, state.bufferedRequestCount += 1
            } else doWrite(stream, state, !1, len, chunk, encoding, cb);
            return ret
        }

        function doWrite(stream, state, writev, len, chunk, encoding, cb) {
            state.writelen = len, state.writecb = cb, state.writing = !0, state.sync = !0, writev ? stream._writev(chunk, state.onwrite) : stream._write(chunk, encoding, state.onwrite), state.sync = !1
        }

        function onwriteError(stream, state, sync, er, cb) {
            --state.pendingcb, sync ? (pna.nextTick(cb, er), pna.nextTick(finishMaybe, stream, state), stream._writableState.errorEmitted = !0, stream.emit("error", er)) : (cb(er), stream._writableState.errorEmitted = !0, stream.emit("error", er), finishMaybe(stream, state))
        }

        function onwriteStateUpdate(state) {
            state.writing = !1, state.writecb = null, state.length -= state.writelen, state.writelen = 0
        }

        function onwrite(stream, er) {
            var state = stream._writableState, sync = state.sync, cb = state.writecb;
            if (onwriteStateUpdate(state), er) onwriteError(stream, state, sync, er, cb); else {
                var finished = needFinish(state);
                finished || state.corked || state.bufferProcessing || !state.bufferedRequest || clearBuffer(stream, state), sync ? asyncWrite(afterWrite, stream, state, finished, cb) : afterWrite(stream, state, finished, cb)
            }
        }

        function afterWrite(stream, state, finished, cb) {
            finished || onwriteDrain(stream, state), state.pendingcb--, cb(), finishMaybe(stream, state)
        }

        function onwriteDrain(stream, state) {
            0 === state.length && state.needDrain && (state.needDrain = !1, stream.emit("drain"))
        }

        function clearBuffer(stream, state) {
            state.bufferProcessing = !0;
            var entry = state.bufferedRequest;
            if (stream._writev && entry && entry.next) {
                var l = state.bufferedRequestCount, buffer = new Array(l), holder = state.corkedRequestsFree;
                holder.entry = entry;
                for (var count = 0, allBuffers = !0; entry;) buffer[count] = entry, entry.isBuf || (allBuffers = !1), entry = entry.next, count += 1;
                buffer.allBuffers = allBuffers, doWrite(stream, state, !0, state.length, buffer, "", holder.finish), state.pendingcb++, state.lastBufferedRequest = null, holder.next ? (state.corkedRequestsFree = holder.next, holder.next = null) : state.corkedRequestsFree = new CorkedRequest(state), state.bufferedRequestCount = 0
            } else {
                for (; entry;) {
                    var chunk = entry.chunk, encoding = entry.encoding, cb = entry.callback;
                    if (doWrite(stream, state, !1, state.objectMode ? 1 : chunk.length, chunk, encoding, cb), entry = entry.next, state.bufferedRequestCount--, state.writing) break
                }
                null === entry && (state.lastBufferedRequest = null)
            }
            state.bufferedRequest = entry, state.bufferProcessing = !1
        }

        function needFinish(state) {
            return state.ending && 0 === state.length && null === state.bufferedRequest && !state.finished && !state.writing
        }

        function callFinal(stream, state) {
            stream._final(function (err) {
                state.pendingcb--, err && stream.emit("error", err), state.prefinished = !0, stream.emit("prefinish"), finishMaybe(stream, state)
            })
        }

        function prefinish(stream, state) {
            state.prefinished || state.finalCalled || ("function" == typeof stream._final ? (state.pendingcb++, state.finalCalled = !0, pna.nextTick(callFinal, stream, state)) : (state.prefinished = !0, stream.emit("prefinish")))
        }

        function finishMaybe(stream, state) {
            var need = needFinish(state);
            return need && (prefinish(stream, state), 0 === state.pendingcb && (state.finished = !0, stream.emit("finish"))), need
        }

        function endWritable(stream, state, cb) {
            state.ending = !0, finishMaybe(stream, state), cb && (state.finished ? pna.nextTick(cb) : stream.once("finish", cb)), state.ended = !0, stream.writable = !1
        }

        function onCorkedFinish(corkReq, state, err) {
            var entry = corkReq.entry;
            for (corkReq.entry = null; entry;) {
                var cb = entry.callback;
                state.pendingcb--, cb(err), entry = entry.next
            }
            state.corkedRequestsFree ? state.corkedRequestsFree.next = corkReq : state.corkedRequestsFree = corkReq
        }

        var pna = __webpack_require__(45);
        module.exports = Writable;
        var Duplex,
            asyncWrite = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
        Writable.WritableState = WritableState;
        var util = __webpack_require__(31);
        util.inherits = __webpack_require__(21);
        var internalUtil = {deprecate: __webpack_require__(180)}, Stream = __webpack_require__(100),
            Buffer = __webpack_require__(46).Buffer, OurUint8Array = global.Uint8Array || function () {
            }, destroyImpl = __webpack_require__(102);
        util.inherits(Writable, Stream), WritableState.prototype.getBuffer = function () {
            for (var current = this.bufferedRequest, out = []; current;) out.push(current), current = current.next;
            return out
        }, function () {
            try {
                Object.defineProperty(WritableState.prototype, "buffer", {
                    get: internalUtil.deprecate(function () {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch (_) {
            }
        }();
        var realHasInstance;
        "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (realHasInstance = Function.prototype[Symbol.hasInstance], Object.defineProperty(Writable, Symbol.hasInstance, {
            value: function (object) {
                return !!realHasInstance.call(this, object) || this === Writable && (object && object._writableState instanceof WritableState)
            }
        })) : realHasInstance = function (object) {
            return object instanceof this
        }, Writable.prototype.pipe = function () {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }, Writable.prototype.write = function (chunk, encoding, cb) {
            var state = this._writableState, ret = !1, isBuf = !state.objectMode && _isUint8Array(chunk);
            return isBuf && !Buffer.isBuffer(chunk) && (chunk = _uint8ArrayToBuffer(chunk)), "function" == typeof encoding && (cb = encoding, encoding = null), isBuf ? encoding = "buffer" : encoding || (encoding = state.defaultEncoding), "function" != typeof cb && (cb = nop), state.ended ? writeAfterEnd(this, cb) : (isBuf || validChunk(this, state, chunk, cb)) && (state.pendingcb++, ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb)), ret
        }, Writable.prototype.cork = function () {
            this._writableState.corked++
        }, Writable.prototype.uncork = function () {
            var state = this._writableState;
            state.corked && (state.corked--, state.writing || state.corked || state.finished || state.bufferProcessing || !state.bufferedRequest || clearBuffer(this, state))
        }, Writable.prototype.setDefaultEncoding = function (encoding) {
            if ("string" == typeof encoding && (encoding = encoding.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + encoding);
            return this._writableState.defaultEncoding = encoding, this
        }, Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
            enumerable: !1, get: function () {
                return this._writableState.highWaterMark
            }
        }), Writable.prototype._write = function (chunk, encoding, cb) {
            cb(new Error("_write() is not implemented"))
        }, Writable.prototype._writev = null, Writable.prototype.end = function (chunk, encoding, cb) {
            var state = this._writableState;
            "function" == typeof chunk ? (cb = chunk, chunk = null, encoding = null) : "function" == typeof encoding && (cb = encoding, encoding = null), null !== chunk && void 0 !== chunk && this.write(chunk, encoding), state.corked && (state.corked = 1, this.uncork()), state.ending || state.finished || endWritable(this, state, cb)
        }, Object.defineProperty(Writable.prototype, "destroyed", {
            get: function () {
                return void 0 !== this._writableState && this._writableState.destroyed
            }, set: function (value) {
                this._writableState && (this._writableState.destroyed = value)
            }
        }), Writable.prototype.destroy = destroyImpl.destroy, Writable.prototype._undestroy = destroyImpl.undestroy, Writable.prototype._destroy = function (err, cb) {
            this.end(), cb(err)
        }
    }).call(exports, __webpack_require__(19), __webpack_require__(178).setImmediate, __webpack_require__(11))
}, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: !0}), exports.RecordBatch = void 0;
    var _create = __webpack_require__(44), _create2 = function (obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }(_create), _tslib = __webpack_require__(1), tslib_1 = function (obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj
        }(_tslib), _type = __webpack_require__(10), _vector = __webpack_require__(18), _data = __webpack_require__(49),
        RecordBatch = function (_super) {
            function RecordBatch() {
                for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                var _this = this;
                if ("number" != typeof args[1]) {
                    var data = args[1];
                    _this = _super.call(this, data, args[2]) || this, _this.schema = args[0], _this.length = data.length
                } else {
                    for (var _a = tslib_1.__read(args, 3), schema = _a[0], numRows = _a[1], cols = _a[2], childData = new Array(cols.length), index = -1, length_1 = cols.length; ++index < length_1;) {
                        var col = cols[index];
                        childData[index] = col instanceof _vector.Vector ? col.data : col
                    }
                    _this = _super.call(this, new _data.NestedData(new _type.Struct(schema.fields), numRows, null, childData)) || this, _this.schema = schema, _this.length = numRows
                }
                return _this.numCols = _this.schema.fields.length, _this
            }

            return tslib_1.__extends(RecordBatch, _super), RecordBatch.from = function (vectors) {
                return new RecordBatch(_type.Schema.from(vectors), Math.max.apply(Math, tslib_1.__spread(vectors.map(function (v) {
                    return v.length
                }))), vectors)
            }, RecordBatch.prototype.clone = function (data, view) {
                return void 0 === view && (view = this.view.clone(data)), new RecordBatch(this.schema, data, view)
            }, RecordBatch.prototype.getChildAt = function (index) {
                return index < 0 || index >= this.numCols ? null : _super.prototype.getChildAt.call(this, index)
            }, RecordBatch.prototype.select = function () {
                for (var columnNames = [], _i = 0; _i < arguments.length; _i++) columnNames[_i] = arguments[_i];
                var fields = this.schema.fields, namesToKeep = columnNames.reduce(function (xs, x) {
                    return (xs[x] = !0) && xs
                }, (0, _create2.default)(null));
                return new RecordBatch((_a = this.schema).select.apply(_a, tslib_1.__spread(columnNames)), this.length, this.childData.filter(function (_, i) {
                    return namesToKeep[fields[i].name]
                }));
                var _a
            }, RecordBatch
        }(_vector.StructVector);
    exports.RecordBatch = RecordBatch
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(189), __esModule: !0}
}, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {value: !0}), __webpack_require__.d(__webpack_exports__, "flatbuffers", function () {
        return flatbuffers
    });
    var flatbuffers = {};
    flatbuffers.Offset, flatbuffers.Table, flatbuffers.SIZEOF_SHORT = 2, flatbuffers.SIZEOF_INT = 4, flatbuffers.FILE_IDENTIFIER_LENGTH = 4, flatbuffers.Encoding = {
        UTF8_BYTES: 1,
        UTF16_STRING: 2
    }, flatbuffers.int32 = new Int32Array(2), flatbuffers.float32 = new Float32Array(flatbuffers.int32.buffer), flatbuffers.float64 = new Float64Array(flatbuffers.int32.buffer), flatbuffers.isLittleEndian = 1 === new Uint16Array(new Uint8Array([1, 0]).buffer)[0], flatbuffers.Long = function (low, high) {
        this.low = 0 | low, this.high = 0 | high
    }, flatbuffers.Long.create = function (low, high) {
        return 0 == low && 0 == high ? flatbuffers.Long.ZERO : new flatbuffers.Long(low, high)
    }, flatbuffers.Long.prototype.toFloat64 = function () {
        return (this.low >>> 0) + 4294967296 * this.high
    }, flatbuffers.Long.prototype.equals = function (other) {
        return this.low == other.low && this.high == other.high
    }, flatbuffers.Long.ZERO = new flatbuffers.Long(0, 0), flatbuffers.Builder = function (opt_initial_size) {
        if (opt_initial_size) var initial_size = opt_initial_size; else var initial_size = 1024;
        this.bb = flatbuffers.ByteBuffer.allocate(initial_size), this.space = initial_size, this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1
    }, flatbuffers.Builder.prototype.forceDefaults = function (forceDefaults) {
        this.force_defaults = forceDefaults
    }, flatbuffers.Builder.prototype.dataBuffer = function () {
        return this.bb
    }, flatbuffers.Builder.prototype.asUint8Array = function () {
        return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset())
    }, flatbuffers.Builder.prototype.prep = function (size, additional_bytes) {
        size > this.minalign && (this.minalign = size);
        for (var align_size = 1 + ~(this.bb.capacity() - this.space + additional_bytes) & size - 1; this.space < align_size + size + additional_bytes;) {
            var old_buf_size = this.bb.capacity();
            this.bb = flatbuffers.Builder.growByteBuffer(this.bb), this.space += this.bb.capacity() - old_buf_size
        }
        this.pad(align_size)
    }, flatbuffers.Builder.prototype.pad = function (byte_size) {
        for (var i = 0; i < byte_size; i++) this.bb.writeInt8(--this.space, 0)
    }, flatbuffers.Builder.prototype.writeInt8 = function (value) {
        this.bb.writeInt8(this.space -= 1, value)
    }, flatbuffers.Builder.prototype.writeInt16 = function (value) {
        this.bb.writeInt16(this.space -= 2, value)
    }, flatbuffers.Builder.prototype.writeInt32 = function (value) {
        this.bb.writeInt32(this.space -= 4, value)
    }, flatbuffers.Builder.prototype.writeInt64 = function (value) {
        this.bb.writeInt64(this.space -= 8, value)
    }, flatbuffers.Builder.prototype.writeFloat32 = function (value) {
        this.bb.writeFloat32(this.space -= 4, value)
    }, flatbuffers.Builder.prototype.writeFloat64 = function (value) {
        this.bb.writeFloat64(this.space -= 8, value)
    }, flatbuffers.Builder.prototype.addInt8 = function (value) {
        this.prep(1, 0), this.writeInt8(value)
    }, flatbuffers.Builder.prototype.addInt16 = function (value) {
        this.prep(2, 0), this.writeInt16(value)
    }, flatbuffers.Builder.prototype.addInt32 = function (value) {
        this.prep(4, 0), this.writeInt32(value)
    }, flatbuffers.Builder.prototype.addInt64 = function (value) {
        this.prep(8, 0), this.writeInt64(value)
    }, flatbuffers.Builder.prototype.addFloat32 = function (value) {
        this.prep(4, 0), this.writeFloat32(value)
    }, flatbuffers.Builder.prototype.addFloat64 = function (value) {
        this.prep(8, 0), this.writeFloat64(value)
    }, flatbuffers.Builder.prototype.addFieldInt8 = function (voffset, value, defaultValue) {
        (this.force_defaults || value != defaultValue) && (this.addInt8(value), this.slot(voffset))
    }, flatbuffers.Builder.prototype.addFieldInt16 = function (voffset, value, defaultValue) {
        (this.force_defaults || value != defaultValue) && (this.addInt16(value), this.slot(voffset))
    }, flatbuffers.Builder.prototype.addFieldInt32 = function (voffset, value, defaultValue) {
        (this.force_defaults || value != defaultValue) && (this.addInt32(value), this.slot(voffset))
    }, flatbuffers.Builder.prototype.addFieldInt64 = function (voffset, value, defaultValue) {
        !this.force_defaults && value.equals(defaultValue) || (this.addInt64(value), this.slot(voffset))
    }, flatbuffers.Builder.prototype.addFieldFloat32 = function (voffset, value, defaultValue) {
        (this.force_defaults || value != defaultValue) && (this.addFloat32(value), this.slot(voffset))
    }, flatbuffers.Builder.prototype.addFieldFloat64 = function (voffset, value, defaultValue) {
        (this.force_defaults || value != defaultValue) && (this.addFloat64(value), this.slot(voffset))
    }, flatbuffers.Builder.prototype.addFieldOffset = function (voffset, value, defaultValue) {
        (this.force_defaults || value != defaultValue) && (this.addOffset(value), this.slot(voffset))
    }, flatbuffers.Builder.prototype.addFieldStruct = function (voffset, value, defaultValue) {
        value != defaultValue && (this.nested(value), this.slot(voffset))
    }, flatbuffers.Builder.prototype.nested = function (obj) {
        if (obj != this.offset()) throw new Error("FlatBuffers: struct must be serialized inline.")
    }, flatbuffers.Builder.prototype.notNested = function () {
        if (this.isNested) throw new Error("FlatBuffers: object serialization must not be nested.")
    }, flatbuffers.Builder.prototype.slot = function (voffset) {
        this.vtable[voffset] = this.offset()
    }, flatbuffers.Builder.prototype.offset = function () {
        return this.bb.capacity() - this.space
    }, flatbuffers.Builder.growByteBuffer = function (bb) {
        var old_buf_size = bb.capacity();
        if (3221225472 & old_buf_size) throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
        var new_buf_size = old_buf_size << 1, nbb = flatbuffers.ByteBuffer.allocate(new_buf_size);
        return nbb.setPosition(new_buf_size - old_buf_size), nbb.bytes().set(bb.bytes(), new_buf_size - old_buf_size), nbb
    }, flatbuffers.Builder.prototype.addOffset = function (offset) {
        this.prep(flatbuffers.SIZEOF_INT, 0), this.writeInt32(this.offset() - offset + flatbuffers.SIZEOF_INT)
    }, flatbuffers.Builder.prototype.startObject = function (numfields) {
        this.notNested(), null == this.vtable && (this.vtable = []), this.vtable_in_use = numfields;
        for (var i = 0; i < numfields; i++) this.vtable[i] = 0;
        this.isNested = !0, this.object_start = this.offset()
    }, flatbuffers.Builder.prototype.endObject = function () {
        if (null == this.vtable || !this.isNested) throw new Error("FlatBuffers: endObject called without startObject");
        this.addInt32(0);
        for (var vtableloc = this.offset(), i = this.vtable_in_use - 1; i >= 0 && 0 == this.vtable[i]; i--) ;
        for (var trimmed_size = i + 1; i >= 0; i--) this.addInt16(0 != this.vtable[i] ? vtableloc - this.vtable[i] : 0);
        this.addInt16(vtableloc - this.object_start);
        var len = (trimmed_size + 2) * flatbuffers.SIZEOF_SHORT;
        this.addInt16(len);
        var existing_vtable = 0, vt1 = this.space;
        outer_loop:for (i = 0; i < this.vtables.length; i++) {
            var vt2 = this.bb.capacity() - this.vtables[i];
            if (len == this.bb.readInt16(vt2)) {
                for (var j = flatbuffers.SIZEOF_SHORT; j < len; j += flatbuffers.SIZEOF_SHORT) if (this.bb.readInt16(vt1 + j) != this.bb.readInt16(vt2 + j)) continue outer_loop;
                existing_vtable = this.vtables[i];
                break
            }
        }
        return existing_vtable ? (this.space = this.bb.capacity() - vtableloc, this.bb.writeInt32(this.space, existing_vtable - vtableloc)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - vtableloc, this.offset() - vtableloc)), this.isNested = !1, vtableloc
    }, flatbuffers.Builder.prototype.finish = function (root_table, opt_file_identifier) {
        if (opt_file_identifier) {
            var file_identifier = opt_file_identifier;
            if (this.prep(this.minalign, flatbuffers.SIZEOF_INT + flatbuffers.FILE_IDENTIFIER_LENGTH), file_identifier.length != flatbuffers.FILE_IDENTIFIER_LENGTH) throw new Error("FlatBuffers: file identifier must be length " + flatbuffers.FILE_IDENTIFIER_LENGTH);
            for (var i = flatbuffers.FILE_IDENTIFIER_LENGTH - 1; i >= 0; i--) this.writeInt8(file_identifier.charCodeAt(i))
        }
        this.prep(this.minalign, flatbuffers.SIZEOF_INT), this.addOffset(root_table), this.bb.setPosition(this.space)
    }, flatbuffers.Builder.prototype.requiredField = function (table, field) {
        var table_start = this.bb.capacity() - table, vtable_start = table_start - this.bb.readInt32(table_start);
        if (0 == this.bb.readInt16(vtable_start + field)) throw new Error("FlatBuffers: field " + field + " must be set")
    }, flatbuffers.Builder.prototype.startVector = function (elem_size, num_elems, alignment) {
        this.notNested(), this.vector_num_elems = num_elems, this.prep(flatbuffers.SIZEOF_INT, elem_size * num_elems), this.prep(alignment, elem_size * num_elems)
    }, flatbuffers.Builder.prototype.endVector = function () {
        return this.writeInt32(this.vector_num_elems), this.offset()
    }, flatbuffers.Builder.prototype.createString = function (s) {
        if (s instanceof Uint8Array) var utf8 = s; else for (var utf8 = [], i = 0; i < s.length;) {
            var codePoint, a = s.charCodeAt(i++);
            if (a < 55296 || a >= 56320) codePoint = a; else {
                var b = s.charCodeAt(i++);
                codePoint = (a << 10) + b + -56613888
            }
            codePoint < 128 ? utf8.push(codePoint) : (codePoint < 2048 ? utf8.push(codePoint >> 6 & 31 | 192) : (codePoint < 65536 ? utf8.push(codePoint >> 12 & 15 | 224) : utf8.push(codePoint >> 18 & 7 | 240, codePoint >> 12 & 63 | 128), utf8.push(codePoint >> 6 & 63 | 128)), utf8.push(63 & codePoint | 128))
        }
        this.addInt8(0), this.startVector(1, utf8.length, 1), this.bb.setPosition(this.space -= utf8.length);
        for (var i = 0, offset = this.space, bytes = this.bb.bytes(); i < utf8.length; i++) bytes[offset++] = utf8[i];
        return this.endVector()
    }, flatbuffers.Builder.prototype.createLong = function (low, high) {
        return flatbuffers.Long.create(low, high)
    }, flatbuffers.ByteBuffer = function (bytes) {
        this.bytes_ = bytes, this.position_ = 0
    }, flatbuffers.ByteBuffer.allocate = function (byte_size) {
        return new flatbuffers.ByteBuffer(new Uint8Array(byte_size))
    }, flatbuffers.ByteBuffer.prototype.bytes = function () {
        return this.bytes_
    }, flatbuffers.ByteBuffer.prototype.position = function () {
        return this.position_
    }, flatbuffers.ByteBuffer.prototype.setPosition = function (position) {
        this.position_ = position
    }, flatbuffers.ByteBuffer.prototype.capacity = function () {
        return this.bytes_.length
    }, flatbuffers.ByteBuffer.prototype.readInt8 = function (offset) {
        return this.readUint8(offset) << 24 >> 24
    }, flatbuffers.ByteBuffer.prototype.readUint8 = function (offset) {
        return this.bytes_[offset]
    }, flatbuffers.ByteBuffer.prototype.readInt16 = function (offset) {
        return this.readUint16(offset) << 16 >> 16
    }, flatbuffers.ByteBuffer.prototype.readUint16 = function (offset) {
        return this.bytes_[offset] | this.bytes_[offset + 1] << 8
    }, flatbuffers.ByteBuffer.prototype.readInt32 = function (offset) {
        return this.bytes_[offset] | this.bytes_[offset + 1] << 8 | this.bytes_[offset + 2] << 16 | this.bytes_[offset + 3] << 24
    }, flatbuffers.ByteBuffer.prototype.readUint32 = function (offset) {
        return this.readInt32(offset) >>> 0
    }, flatbuffers.ByteBuffer.prototype.readInt64 = function (offset) {
        return new flatbuffers.Long(this.readInt32(offset), this.readInt32(offset + 4))
    }, flatbuffers.ByteBuffer.prototype.readUint64 = function (offset) {
        return new flatbuffers.Long(this.readUint32(offset), this.readUint32(offset + 4))
    }, flatbuffers.ByteBuffer.prototype.readFloat32 = function (offset) {
        return flatbuffers.int32[0] = this.readInt32(offset), flatbuffers.float32[0]
    }, flatbuffers.ByteBuffer.prototype.readFloat64 = function (offset) {
        return flatbuffers.int32[flatbuffers.isLittleEndian ? 0 : 1] = this.readInt32(offset), flatbuffers.int32[flatbuffers.isLittleEndian ? 1 : 0] = this.readInt32(offset + 4), flatbuffers.float64[0]
    }, flatbuffers.ByteBuffer.prototype.writeInt8 = function (offset, value) {
        this.bytes_[offset] = value
    }, flatbuffers.ByteBuffer.prototype.writeUint8 = function (offset, value) {
        this.bytes_[offset] = value
    }, flatbuffers.ByteBuffer.prototype.writeInt16 = function (offset, value) {
        this.bytes_[offset] = value, this.bytes_[offset + 1] = value >> 8
    }, flatbuffers.ByteBuffer.prototype.writeUint16 = function (offset, value) {
        this.bytes_[offset] = value, this.bytes_[offset + 1] = value >> 8
    }, flatbuffers.ByteBuffer.prototype.writeInt32 = function (offset, value) {
        this.bytes_[offset] = value, this.bytes_[offset + 1] = value >> 8, this.bytes_[offset + 2] = value >> 16, this.bytes_[offset + 3] = value >> 24
    }, flatbuffers.ByteBuffer.prototype.writeUint32 = function (offset, value) {
        this.bytes_[offset] = value, this.bytes_[offset + 1] = value >> 8, this.bytes_[offset + 2] = value >> 16, this.bytes_[offset + 3] = value >> 24
    }, flatbuffers.ByteBuffer.prototype.writeInt64 = function (offset, value) {
        this.writeInt32(offset, value.low), this.writeInt32(offset + 4, value.high)
    }, flatbuffers.ByteBuffer.prototype.writeUint64 = function (offset, value) {
        this.writeUint32(offset, value.low), this.writeUint32(offset + 4, value.high)
    }, flatbuffers.ByteBuffer.prototype.writeFloat32 = function (offset, value) {
        flatbuffers.float32[0] = value, this.writeInt32(offset, flatbuffers.int32[0])
    }, flatbuffers.ByteBuffer.prototype.writeFloat64 = function (offset, value) {
        flatbuffers.float64[0] = value, this.writeInt32(offset, flatbuffers.int32[flatbuffers.isLittleEndian ? 0 : 1]), this.writeInt32(offset + 4, flatbuffers.int32[flatbuffers.isLittleEndian ? 1 : 0])
    }, flatbuffers.ByteBuffer.prototype.__offset = function (bb_pos, vtable_offset) {
        var vtable = bb_pos - this.readInt32(bb_pos);
        return vtable_offset < this.readInt16(vtable) ? this.readInt16(vtable + vtable_offset) : 0
    }, flatbuffers.ByteBuffer.prototype.__union = function (t, offset) {
        return t.bb_pos = offset + this.readInt32(offset), t.bb = this, t
    }, flatbuffers.ByteBuffer.prototype.__string = function (offset, opt_encoding) {
        offset += this.readInt32(offset);
        var length = this.readInt32(offset), result = "", i = 0;
        if (offset += flatbuffers.SIZEOF_INT, opt_encoding === flatbuffers.Encoding.UTF8_BYTES) return this.bytes_.subarray(offset, offset + length);
        for (; i < length;) {
            var codePoint, a = this.readUint8(offset + i++);
            if (a < 192) codePoint = a; else {
                var b = this.readUint8(offset + i++);
                if (a < 224) codePoint = (31 & a) << 6 | 63 & b; else {
                    var c = this.readUint8(offset + i++);
                    if (a < 240) codePoint = (15 & a) << 12 | (63 & b) << 6 | 63 & c; else {
                        codePoint = (7 & a) << 18 | (63 & b) << 12 | (63 & c) << 6 | 63 & this.readUint8(offset + i++)
                    }
                }
            }
            codePoint < 65536 ? result += String.fromCharCode(codePoint) : (codePoint -= 65536, result += String.fromCharCode(55296 + (codePoint >> 10), 56320 + (1023 & codePoint)))
        }
        return result
    }, flatbuffers.ByteBuffer.prototype.__indirect = function (offset) {
        return offset + this.readInt32(offset)
    }, flatbuffers.ByteBuffer.prototype.__vector = function (offset) {
        return offset + this.readInt32(offset) + flatbuffers.SIZEOF_INT
    }, flatbuffers.ByteBuffer.prototype.__vector_len = function (offset) {
        return this.readInt32(offset + this.readInt32(offset))
    }, flatbuffers.ByteBuffer.prototype.__has_identifier = function (ident) {
        if (ident.length != flatbuffers.FILE_IDENTIFIER_LENGTH) throw new Error("FlatBuffers: file identifier must be length " + flatbuffers.FILE_IDENTIFIER_LENGTH);
        for (var i = 0; i < flatbuffers.FILE_IDENTIFIER_LENGTH; i++) if (ident.charCodeAt(i) != this.readInt8(this.position_ + flatbuffers.SIZEOF_INT + i)) return !1;
        return !0
    }, flatbuffers.ByteBuffer.prototype.createLong = function (low, high) {
        return flatbuffers.Long.create(low, high)
    }
}, function (module, exports, __webpack_require__) {
    "use strict";

    function readRecordBatches(messages) {
        var messages_1, messages_1_1, _a, schema, message, loader, e_1_1, e_1, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 5, 6, 7]), messages_1 = tslib_1.__values(messages), messages_1_1 = messages_1.next(), _c.label = 1;
                case 1:
                    return messages_1_1.done ? [3, 4] : (_a = messages_1_1.value, schema = _a.schema, message = _a.message, loader = _a.loader, [5, tslib_1.__values(readRecordBatch(schema, message, loader))]);
                case 2:
                    _c.sent(), _c.label = 3;
                case 3:
                    return messages_1_1 = messages_1.next(), [3, 1];
                case 4:
                    return [3, 7];
                case 5:
                    return e_1_1 = _c.sent(), e_1 = {error: e_1_1}, [3, 7];
                case 6:
                    try {
                        messages_1_1 && !messages_1_1.done && (_b = messages_1.return) && _b.call(messages_1)
                    } finally {
                        if (e_1) throw e_1.error
                    }
                    return [7];
                case 7:
                    return [2]
            }
        })
    }

    function readRecordBatchesAsync(messages) {
        return tslib_1.__asyncGenerator(this, arguments, function () {
            var messages_2, messages_2_1, _a, schema, message, loader, e_2_1, e_2, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 8, 9, 14]), messages_2 = tslib_1.__asyncValues(messages), _c.label = 1;
                    case 1:
                        return [4, tslib_1.__await(messages_2.next())];
                    case 2:
                        return messages_2_1 = _c.sent(), !messages_2_1.done ? [4, tslib_1.__await(messages_2_1.value)] : [3, 7];
                    case 3:
                        return _a = _c.sent(), schema = _a.schema, message = _a.message, loader = _a.loader, [5, tslib_1.__values(tslib_1.__asyncDelegator(tslib_1.__asyncValues(readRecordBatch(schema, message, loader))))];
                    case 4:
                        return [4, tslib_1.__await.apply(void 0, [_c.sent()])];
                    case 5:
                        _c.sent(), _c.label = 6;
                    case 6:
                        return [3, 1];
                    case 7:
                        return [3, 14];
                    case 8:
                        return e_2_1 = _c.sent(), e_2 = {error: e_2_1}, [3, 14];
                    case 9:
                        return _c.trys.push([9, , 12, 13]), messages_2_1 && !messages_2_1.done && (_b = messages_2.return) ? [4, tslib_1.__await(_b.call(messages_2))] : [3, 11];
                    case 10:
                        _c.sent(), _c.label = 11;
                    case 11:
                        return [3, 13];
                    case 12:
                        if (e_2) throw e_2.error;
                        return [7];
                    case 13:
                        return [7];
                    case 14:
                        return [2]
                }
            })
        })
    }

    function readRecordBatch(schema, message, loader) {
        var dictionaryId, dictionaries, dictionaryField, dictionaryDataType, dictionaryVector;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return _metadata.Message.isRecordBatch(message) ? [4, new _recordbatch.RecordBatch(schema, message.length, loader.visitFields(schema.fields))] : [3, 2];
                case 1:
                    return _a.sent(), [3, 3];
                case 2:
                    _metadata.Message.isDictionaryBatch(message) && (dictionaryId = message.id, dictionaries = loader.dictionaries, dictionaryField = schema.dictionaries.get(dictionaryId), dictionaryDataType = dictionaryField.type.dictionary, dictionaryVector = _vector.Vector.create(loader.visit(dictionaryDataType)), message.isDelta && dictionaries.has(dictionaryId) && (dictionaryVector = dictionaries.get(dictionaryId).concat(dictionaryVector)), dictionaries.set(dictionaryId, dictionaryVector)), _a.label = 3;
                case 3:
                    return [2]
            }
        })
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.TypeDataLoader = void 0, exports.readRecordBatches = readRecordBatches, exports.readRecordBatchesAsync = readRecordBatchesAsync, exports.readRecordBatch = readRecordBatch;
    var _tslib = __webpack_require__(1), tslib_1 = function (obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj
        }(_tslib), _vector = __webpack_require__(18), _recordbatch = __webpack_require__(69),
        _visitor = __webpack_require__(48), _metadata = __webpack_require__(47), _data = __webpack_require__(49),
        _type = __webpack_require__(10), TypeDataLoader = function (_super) {
            function TypeDataLoader(nodes, buffers, dictionaries) {
                var _this = _super.call(this) || this;
                return _this.nodes = nodes, _this.buffers = buffers, _this.dictionaries = dictionaries, _this
            }

            return tslib_1.__extends(TypeDataLoader, _super), TypeDataLoader.prototype.visitFields = function (fields) {
                var _this = this;
                return fields.map(function (field) {
                    return _this.visit(field.type)
                })
            }, TypeDataLoader.prototype.visitNull = function (type) {
                return this.visitNullType(type)
            }, TypeDataLoader.prototype.visitInt = function (type) {
                return this.visitFlatType(type)
            }, TypeDataLoader.prototype.visitFloat = function (type) {
                return this.visitFlatType(type)
            }, TypeDataLoader.prototype.visitBinary = function (type) {
                return this.visitFlatList(type)
            }, TypeDataLoader.prototype.visitUtf8 = function (type) {
                return this.visitFlatList(type)
            }, TypeDataLoader.prototype.visitBool = function (type) {
                return this.visitBoolType(type)
            }, TypeDataLoader.prototype.visitDecimal = function (type) {
                return this.visitFlatType(type)
            }, TypeDataLoader.prototype.visitDate = function (type) {
                return this.visitFlatType(type)
            }, TypeDataLoader.prototype.visitTime = function (type) {
                return this.visitFlatType(type)
            }, TypeDataLoader.prototype.visitTimestamp = function (type) {
                return this.visitFlatType(type)
            }, TypeDataLoader.prototype.visitInterval = function (type) {
                return this.visitFlatType(type)
            }, TypeDataLoader.prototype.visitList = function (type) {
                return this.visitListType(type)
            }, TypeDataLoader.prototype.visitStruct = function (type) {
                return this.visitNestedType(type)
            }, TypeDataLoader.prototype.visitUnion = function (type) {
                return this.visitUnionType(type)
            }, TypeDataLoader.prototype.visitFixedSizeBinary = function (type) {
                return this.visitFlatType(type)
            }, TypeDataLoader.prototype.visitFixedSizeList = function (type) {
                return this.visitFixedSizeListType(type)
            }, TypeDataLoader.prototype.visitMap = function (type) {
                return this.visitNestedType(type)
            }, TypeDataLoader.prototype.visitDictionary = function (type) {
                return new _data.DictionaryData(type, this.dictionaries.get(type.id), this.visit(type.indices))
            }, TypeDataLoader.prototype.getFieldMetadata = function () {
                return this.nodes.next().value
            }, TypeDataLoader.prototype.getBufferMetadata = function () {
                return this.buffers.next().value
            }, TypeDataLoader.prototype.readNullBitmap = function (type, nullCount, buffer) {
                return void 0 === buffer && (buffer = this.getBufferMetadata()), nullCount > 0 && this.readData(type, buffer) || new Uint8Array(0)
            }, TypeDataLoader.prototype.visitNullType = function (type, _a) {
                var _b = void 0 === _a ? this.getFieldMetadata() : _a, length = _b.length, nullCount = _b.nullCount;
                return new _data.FlatData(type, length, this.readNullBitmap(type, nullCount), new Uint8Array(0), 0, nullCount)
            }, TypeDataLoader.prototype.visitFlatType = function (type, _a) {
                var _b = void 0 === _a ? this.getFieldMetadata() : _a, length = _b.length, nullCount = _b.nullCount;
                return new _data.FlatData(type, length, this.readNullBitmap(type, nullCount), this.readData(type), 0, nullCount)
            }, TypeDataLoader.prototype.visitBoolType = function (type, _a, data) {
                var _b = void 0 === _a ? this.getFieldMetadata() : _a, length = _b.length, nullCount = _b.nullCount;
                return new _data.BoolData(type, length, this.readNullBitmap(type, nullCount), data || this.readData(type), 0, nullCount)
            }, TypeDataLoader.prototype.visitFlatList = function (type, _a) {
                var _b = void 0 === _a ? this.getFieldMetadata() : _a, length = _b.length, nullCount = _b.nullCount;
                return new _data.FlatListData(type, length, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.readData(type), 0, nullCount)
            }, TypeDataLoader.prototype.visitListType = function (type, _a) {
                var _b = void 0 === _a ? this.getFieldMetadata() : _a, length = _b.length, nullCount = _b.nullCount;
                return new _data.ListData(type, length, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.visit(type.children[0].type), 0, nullCount)
            }, TypeDataLoader.prototype.visitFixedSizeListType = function (type, _a) {
                var _b = void 0 === _a ? this.getFieldMetadata() : _a, length = _b.length, nullCount = _b.nullCount;
                return new _data.SingleNestedData(type, length, this.readNullBitmap(type, nullCount), this.visit(type.children[0].type), 0, nullCount)
            }, TypeDataLoader.prototype.visitNestedType = function (type, _a) {
                var _b = void 0 === _a ? this.getFieldMetadata() : _a, length = _b.length, nullCount = _b.nullCount;
                return new _data.NestedData(type, length, this.readNullBitmap(type, nullCount), this.visitFields(type.children), 0, nullCount)
            }, TypeDataLoader.prototype.visitUnionType = function (type, _a) {
                var _b = void 0 === _a ? this.getFieldMetadata() : _a, length = _b.length, nullCount = _b.nullCount;
                return type.mode === _type.UnionMode.Sparse ? new _data.SparseUnionData(type, length, this.readNullBitmap(type, nullCount), this.readTypeIds(type), this.visitFields(type.children), 0, nullCount) : new _data.DenseUnionData(type, length, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.readTypeIds(type), this.visitFields(type.children), 0, nullCount)
            }, TypeDataLoader
        }(_visitor.TypeVisitor);
    exports.TypeDataLoader = TypeDataLoader
}, function (module, exports, __webpack_require__) {
    (function (module) {
        !function (global, factory) {
            module.exports = factory()
        }(0, function () {
            "use strict";

            function hooks() {
                return hookCallback.apply(null, arguments)
            }

            function isArray(input) {
                return input instanceof Array || "[object Array]" === Object.prototype.toString.call(input)
            }

            function isObject(input) {
                return null != input && "[object Object]" === Object.prototype.toString.call(input)
            }

            function isObjectEmpty(obj) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(obj).length;
                var k;
                for (k in obj) if (obj.hasOwnProperty(k)) return !1;
                return !0
            }

            function isUndefined(input) {
                return void 0 === input
            }

            function isNumber(input) {
                return "number" == typeof input || "[object Number]" === Object.prototype.toString.call(input)
            }

            function isDate(input) {
                return input instanceof Date || "[object Date]" === Object.prototype.toString.call(input)
            }

            function map(arr, fn) {
                var i, res = [];
                for (i = 0; i < arr.length; ++i) res.push(fn(arr[i], i));
                return res
            }

            function hasOwnProp(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }

            function extend(a, b) {
                for (var i in b) hasOwnProp(b, i) && (a[i] = b[i]);
                return hasOwnProp(b, "toString") && (a.toString = b.toString), hasOwnProp(b, "valueOf") && (a.valueOf = b.valueOf), a
            }

            function createUTC(input, format, locale, strict) {
                return createLocalOrUTC(input, format, locale, strict, !0).utc()
            }

            function defaultParsingFlags() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }
            }

            function getParsingFlags(m) {
                return null == m._pf && (m._pf = defaultParsingFlags()), m._pf
            }

            function isValid(m) {
                if (null == m._isValid) {
                    var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function (i) {
                            return null != i
                        }),
                        isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
                    if (m._strict && (isNowValid = isNowValid && 0 === flags.charsLeftOver && 0 === flags.unusedTokens.length && void 0 === flags.bigHour), null != Object.isFrozen && Object.isFrozen(m)) return isNowValid;
                    m._isValid = isNowValid
                }
                return m._isValid
            }

            function createInvalid(flags) {
                var m = createUTC(NaN);
                return null != flags ? extend(getParsingFlags(m), flags) : getParsingFlags(m).userInvalidated = !0, m
            }

            function copyConfig(to, from) {
                var i, prop, val;
                if (isUndefined(from._isAMomentObject) || (to._isAMomentObject = from._isAMomentObject), isUndefined(from._i) || (to._i = from._i), isUndefined(from._f) || (to._f = from._f), isUndefined(from._l) || (to._l = from._l), isUndefined(from._strict) || (to._strict = from._strict), isUndefined(from._tzm) || (to._tzm = from._tzm), isUndefined(from._isUTC) || (to._isUTC = from._isUTC), isUndefined(from._offset) || (to._offset = from._offset), isUndefined(from._pf) || (to._pf = getParsingFlags(from)), isUndefined(from._locale) || (to._locale = from._locale), momentProperties.length > 0) for (i = 0; i < momentProperties.length; i++) prop = momentProperties[i], val = from[prop], isUndefined(val) || (to[prop] = val);
                return to
            }

            function Moment(config) {
                copyConfig(this, config), this._d = new Date(null != config._d ? config._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === updateInProgress && (updateInProgress = !0, hooks.updateOffset(this), updateInProgress = !1)
            }

            function isMoment(obj) {
                return obj instanceof Moment || null != obj && null != obj._isAMomentObject
            }

            function absFloor(number) {
                return number < 0 ? Math.ceil(number) || 0 : Math.floor(number)
            }

            function toInt(argumentForCoercion) {
                var coercedNumber = +argumentForCoercion, value = 0;
                return 0 !== coercedNumber && isFinite(coercedNumber) && (value = absFloor(coercedNumber)), value
            }

            function compareArrays(array1, array2, dontConvert) {
                var i, len = Math.min(array1.length, array2.length),
                    lengthDiff = Math.abs(array1.length - array2.length), diffs = 0;
                for (i = 0; i < len; i++) (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) && diffs++;
                return diffs + lengthDiff
            }

            function warn(msg) {
                !1 === hooks.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + msg)
            }

            function deprecate(msg, fn) {
                var firstTime = !0;
                return extend(function () {
                    if (null != hooks.deprecationHandler && hooks.deprecationHandler(null, msg), firstTime) {
                        for (var arg, args = [], i = 0; i < arguments.length; i++) {
                            if (arg = "", "object" == typeof arguments[i]) {
                                arg += "\n[" + i + "] ";
                                for (var key in arguments[0]) arg += key + ": " + arguments[0][key] + ", ";
                                arg = arg.slice(0, -2)
                            } else arg = arguments[i];
                            args.push(arg)
                        }
                        warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + (new Error).stack), firstTime = !1
                    }
                    return fn.apply(this, arguments)
                }, fn)
            }

            function deprecateSimple(name, msg) {
                null != hooks.deprecationHandler && hooks.deprecationHandler(name, msg), deprecations[name] || (warn(msg), deprecations[name] = !0)
            }

            function isFunction(input) {
                return input instanceof Function || "[object Function]" === Object.prototype.toString.call(input)
            }

            function set(config) {
                var prop, i;
                for (i in config) prop = config[i], isFunction(prop) ? this[i] = prop : this["_" + i] = prop;
                this._config = config, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }

            function mergeConfigs(parentConfig, childConfig) {
                var prop, res = extend({}, parentConfig);
                for (prop in childConfig) hasOwnProp(childConfig, prop) && (isObject(parentConfig[prop]) && isObject(childConfig[prop]) ? (res[prop] = {}, extend(res[prop], parentConfig[prop]), extend(res[prop], childConfig[prop])) : null != childConfig[prop] ? res[prop] = childConfig[prop] : delete res[prop]);
                for (prop in parentConfig) hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop]) && (res[prop] = extend({}, res[prop]));
                return res
            }

            function Locale(config) {
                null != config && this.set(config)
            }

            function calendar(key, mom, now) {
                var output = this._calendar[key] || this._calendar.sameElse;
                return isFunction(output) ? output.call(mom, now) : output
            }

            function longDateFormat(key) {
                var format = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
                return format || !formatUpper ? format : (this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1)
                }), this._longDateFormat[key])
            }

            function invalidDate() {
                return this._invalidDate
            }

            function ordinal(number) {
                return this._ordinal.replace("%d", number)
            }

            function relativeTime(number, withoutSuffix, string, isFuture) {
                var output = this._relativeTime[string];
                return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number)
            }

            function pastFuture(diff, output) {
                var format = this._relativeTime[diff > 0 ? "future" : "past"];
                return isFunction(format) ? format(output) : format.replace(/%s/i, output)
            }

            function addUnitAlias(unit, shorthand) {
                var lowerCase = unit.toLowerCase();
                aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit
            }

            function normalizeUnits(units) {
                return "string" == typeof units ? aliases[units] || aliases[units.toLowerCase()] : void 0
            }

            function normalizeObjectUnits(inputObject) {
                var normalizedProp, prop, normalizedInput = {};
                for (prop in inputObject) hasOwnProp(inputObject, prop) && (normalizedProp = normalizeUnits(prop)) && (normalizedInput[normalizedProp] = inputObject[prop]);
                return normalizedInput
            }

            function addUnitPriority(unit, priority) {
                priorities[unit] = priority
            }

            function getPrioritizedUnits(unitsObj) {
                var units = [];
                for (var u in unitsObj) units.push({unit: u, priority: priorities[u]});
                return units.sort(function (a, b) {
                    return a.priority - b.priority
                }), units
            }

            function zeroFill(number, targetLength, forceSign) {
                var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length;
                return (number >= 0 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber
            }

            function addFormatToken(token, padded, ordinal, callback) {
                var func = callback;
                "string" == typeof callback && (func = function () {
                    return this[callback]()
                }), token && (formatTokenFunctions[token] = func), padded && (formatTokenFunctions[padded[0]] = function () {
                    return zeroFill(func.apply(this, arguments), padded[1], padded[2])
                }), ordinal && (formatTokenFunctions[ordinal] = function () {
                    return this.localeData().ordinal(func.apply(this, arguments), token)
                })
            }

            function removeFormattingTokens(input) {
                return input.match(/\[[\s\S]/) ? input.replace(/^\[|\]$/g, "") : input.replace(/\\/g, "")
            }

            function makeFormatFunction(format) {
                var i, length, array = format.match(formattingTokens);
                for (i = 0, length = array.length; i < length; i++) formatTokenFunctions[array[i]] ? array[i] = formatTokenFunctions[array[i]] : array[i] = removeFormattingTokens(array[i]);
                return function (mom) {
                    var i, output = "";
                    for (i = 0; i < length; i++) output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
                    return output
                }
            }

            function formatMoment(m, format) {
                return m.isValid() ? (format = expandFormat(format, m.localeData()), formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format), formatFunctions[format](m)) : m.localeData().invalidDate()
            }

            function expandFormat(format, locale) {
                function replaceLongDateFormatTokens(input) {
                    return locale.longDateFormat(input) || input
                }

                var i = 5;
                for (localFormattingTokens.lastIndex = 0; i >= 0 && localFormattingTokens.test(format);) format = format.replace(localFormattingTokens, replaceLongDateFormatTokens), localFormattingTokens.lastIndex = 0, i -= 1;
                return format
            }

            function addRegexToken(token, regex, strictRegex) {
                regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
                    return isStrict && strictRegex ? strictRegex : regex
                }
            }

            function getParseRegexForToken(token, config) {
                return hasOwnProp(regexes, token) ? regexes[token](config._strict, config._locale) : new RegExp(unescapeFormat(token))
            }

            function unescapeFormat(s) {
                return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
                    return p1 || p2 || p3 || p4
                }))
            }

            function regexEscape(s) {
                return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function addParseToken(token, callback) {
                var i, func = callback;
                for ("string" == typeof token && (token = [token]), isNumber(callback) && (func = function (input, array) {
                    array[callback] = toInt(input)
                }), i = 0; i < token.length; i++) tokens[token[i]] = func
            }

            function addWeekParseToken(token, callback) {
                addParseToken(token, function (input, array, config, token) {
                    config._w = config._w || {}, callback(input, config._w, config, token)
                })
            }

            function addTimeToArrayFromToken(token, input, config) {
                null != input && hasOwnProp(tokens, token) && tokens[token](input, config._a, config, token)
            }

            function daysInYear(year) {
                return isLeapYear(year) ? 366 : 365
            }

            function isLeapYear(year) {
                return year % 4 == 0 && year % 100 != 0 || year % 400 == 0
            }

            function getIsLeapYear() {
                return isLeapYear(this.year())
            }

            function makeGetSet(unit, keepTime) {
                return function (value) {
                    return null != value ? (set$1(this, unit, value), hooks.updateOffset(this, keepTime), this) : get(this, unit)
                }
            }

            function get(mom, unit) {
                return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN
            }

            function set$1(mom, unit, value) {
                mom.isValid() && !isNaN(value) && ("FullYear" === unit && isLeapYear(mom.year()) && 1 === mom.month() && 29 === mom.date() ? mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value, mom.month(), daysInMonth(value, mom.month())) : mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value))
            }

            function stringGet(units) {
                return units = normalizeUnits(units), isFunction(this[units]) ? this[units]() : this
            }

            function stringSet(units, value) {
                if ("object" == typeof units) {
                    units = normalizeObjectUnits(units);
                    for (var prioritized = getPrioritizedUnits(units), i = 0; i < prioritized.length; i++) this[prioritized[i].unit](units[prioritized[i].unit])
                } else if (units = normalizeUnits(units), isFunction(this[units])) return this[units](value);
                return this
            }

            function mod(n, x) {
                return (n % x + x) % x
            }

            function daysInMonth(year, month) {
                if (isNaN(year) || isNaN(month)) return NaN;
                var modMonth = mod(month, 12);
                return year += (month - modMonth) / 12, 1 === modMonth ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2
            }

            function localeMonths(m, format) {
                return m ? isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? "format" : "standalone"][m.month()] : isArray(this._months) ? this._months : this._months.standalone
            }

            function localeMonthsShort(m, format) {
                return m ? isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? "format" : "standalone"][m.month()] : isArray(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }

            function handleStrictParse(monthName, format, strict) {
                var i, ii, mom, llc = monthName.toLocaleLowerCase();
                if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) mom = createUTC([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
                return strict ? "MMM" === format ? (ii = indexOf.call(this._shortMonthsParse, llc), -1 !== ii ? ii : null) : (ii = indexOf.call(this._longMonthsParse, llc), -1 !== ii ? ii : null) : "MMM" === format ? -1 !== (ii = indexOf.call(this._shortMonthsParse, llc)) ? ii : (ii = indexOf.call(this._longMonthsParse, llc), -1 !== ii ? ii : null) : -1 !== (ii = indexOf.call(this._longMonthsParse, llc)) ? ii : (ii = indexOf.call(this._shortMonthsParse, llc), -1 !== ii ? ii : null)
            }

            function localeMonthsParse(monthName, format, strict) {
                var i, mom, regex;
                if (this._monthsParseExact) return handleStrictParse.call(this, monthName, format, strict);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                    if (mom = createUTC([2e3, i]), strict && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i")), strict || this._monthsParse[i] || (regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, ""), this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i")), strict && "MMMM" === format && this._longMonthsParse[i].test(monthName)) return i;
                    if (strict && "MMM" === format && this._shortMonthsParse[i].test(monthName)) return i;
                    if (!strict && this._monthsParse[i].test(monthName)) return i
                }
            }

            function setMonth(mom, value) {
                var dayOfMonth;
                if (!mom.isValid()) return mom;
                if ("string" == typeof value) if (/^\d+$/.test(value)) value = toInt(value); else if (value = mom.localeData().monthsParse(value), !isNumber(value)) return mom;
                return dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value)), mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth), mom
            }

            function getSetMonth(value) {
                return null != value ? (setMonth(this, value), hooks.updateOffset(this, !0), this) : get(this, "Month")
            }

            function getDaysInMonth() {
                return daysInMonth(this.year(), this.month())
            }

            function monthsShortRegex(isStrict) {
                return this._monthsParseExact ? (hasOwnProp(this, "_monthsRegex") || computeMonthsParse.call(this), isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex) : (hasOwnProp(this, "_monthsShortRegex") || (this._monthsShortRegex = defaultMonthsShortRegex), this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }

            function monthsRegex(isStrict) {
                return this._monthsParseExact ? (hasOwnProp(this, "_monthsRegex") || computeMonthsParse.call(this), isStrict ? this._monthsStrictRegex : this._monthsRegex) : (hasOwnProp(this, "_monthsRegex") || (this._monthsRegex = defaultMonthsRegex), this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex)
            }

            function computeMonthsParse() {
                function cmpLenRev(a, b) {
                    return b.length - a.length
                }

                var i, mom, shortPieces = [], longPieces = [], mixedPieces = [];
                for (i = 0; i < 12; i++) mom = createUTC([2e3, i]), shortPieces.push(this.monthsShort(mom, "")), longPieces.push(this.months(mom, "")), mixedPieces.push(this.months(mom, "")), mixedPieces.push(this.monthsShort(mom, ""));
                for (shortPieces.sort(cmpLenRev), longPieces.sort(cmpLenRev), mixedPieces.sort(cmpLenRev), i = 0; i < 12; i++) shortPieces[i] = regexEscape(shortPieces[i]), longPieces[i] = regexEscape(longPieces[i]);
                for (i = 0; i < 24; i++) mixedPieces[i] = regexEscape(mixedPieces[i]);
                this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i")
            }

            function createDate(y, m, d, h, M, s, ms) {
                var date = new Date(y, m, d, h, M, s, ms);
                return y < 100 && y >= 0 && isFinite(date.getFullYear()) && date.setFullYear(y), date
            }

            function createUTCDate(y) {
                var date = new Date(Date.UTC.apply(null, arguments));
                return y < 100 && y >= 0 && isFinite(date.getUTCFullYear()) && date.setUTCFullYear(y), date
            }

            function firstWeekOffset(year, dow, doy) {
                var fwd = 7 + dow - doy;
                return -(7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7 + fwd - 1
            }

            function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
                var resYear, resDayOfYear, localWeekday = (7 + weekday - dow) % 7,
                    weekOffset = firstWeekOffset(year, dow, doy),
                    dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
                return dayOfYear <= 0 ? (resYear = year - 1, resDayOfYear = daysInYear(resYear) + dayOfYear) : dayOfYear > daysInYear(year) ? (resYear = year + 1, resDayOfYear = dayOfYear - daysInYear(year)) : (resYear = year, resDayOfYear = dayOfYear), {
                    year: resYear,
                    dayOfYear: resDayOfYear
                }
            }

            function weekOfYear(mom, dow, doy) {
                var resWeek, resYear, weekOffset = firstWeekOffset(mom.year(), dow, doy),
                    week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1;
                return week < 1 ? (resYear = mom.year() - 1, resWeek = week + weeksInYear(resYear, dow, doy)) : week > weeksInYear(mom.year(), dow, doy) ? (resWeek = week - weeksInYear(mom.year(), dow, doy), resYear = mom.year() + 1) : (resYear = mom.year(), resWeek = week), {
                    week: resWeek,
                    year: resYear
                }
            }

            function weeksInYear(year, dow, doy) {
                var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
                return (daysInYear(year) - weekOffset + weekOffsetNext) / 7
            }

            function localeWeek(mom) {
                return weekOfYear(mom, this._week.dow, this._week.doy).week
            }

            function localeFirstDayOfWeek() {
                return this._week.dow
            }

            function localeFirstDayOfYear() {
                return this._week.doy
            }

            function getSetWeek(input) {
                var week = this.localeData().week(this);
                return null == input ? week : this.add(7 * (input - week), "d")
            }

            function getSetISOWeek(input) {
                var week = weekOfYear(this, 1, 4).week;
                return null == input ? week : this.add(7 * (input - week), "d")
            }

            function parseWeekday(input, locale) {
                return "string" != typeof input ? input : isNaN(input) ? (input = locale.weekdaysParse(input), "number" == typeof input ? input : null) : parseInt(input, 10)
            }

            function parseIsoWeekday(input, locale) {
                return "string" == typeof input ? locale.weekdaysParse(input) % 7 || 7 : isNaN(input) ? null : input
            }

            function localeWeekdays(m, format) {
                return m ? isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? "format" : "standalone"][m.day()] : isArray(this._weekdays) ? this._weekdays : this._weekdays.standalone
            }

            function localeWeekdaysShort(m) {
                return m ? this._weekdaysShort[m.day()] : this._weekdaysShort
            }

            function localeWeekdaysMin(m) {
                return m ? this._weekdaysMin[m.day()] : this._weekdaysMin
            }

            function handleStrictParse$1(weekdayName, format, strict) {
                var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
                if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) mom = createUTC([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
                return strict ? "dddd" === format ? (ii = indexOf.call(this._weekdaysParse, llc), -1 !== ii ? ii : null) : "ddd" === format ? (ii = indexOf.call(this._shortWeekdaysParse, llc), -1 !== ii ? ii : null) : (ii = indexOf.call(this._minWeekdaysParse, llc), -1 !== ii ? ii : null) : "dddd" === format ? -1 !== (ii = indexOf.call(this._weekdaysParse, llc)) ? ii : -1 !== (ii = indexOf.call(this._shortWeekdaysParse, llc)) ? ii : (ii = indexOf.call(this._minWeekdaysParse, llc), -1 !== ii ? ii : null) : "ddd" === format ? -1 !== (ii = indexOf.call(this._shortWeekdaysParse, llc)) ? ii : -1 !== (ii = indexOf.call(this._weekdaysParse, llc)) ? ii : (ii = indexOf.call(this._minWeekdaysParse, llc), -1 !== ii ? ii : null) : -1 !== (ii = indexOf.call(this._minWeekdaysParse, llc)) ? ii : -1 !== (ii = indexOf.call(this._weekdaysParse, llc)) ? ii : (ii = indexOf.call(this._shortWeekdaysParse, llc), -1 !== ii ? ii : null)
            }

            function localeWeekdaysParse(weekdayName, format, strict) {
                var i, mom, regex;
                if (this._weekdaysParseExact) return handleStrictParse$1.call(this, weekdayName, format, strict);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                    if (mom = createUTC([2e3, 1]).day(i), strict && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, ""), this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i")), strict && "dddd" === format && this._fullWeekdaysParse[i].test(weekdayName)) return i;
                    if (strict && "ddd" === format && this._shortWeekdaysParse[i].test(weekdayName)) return i;
                    if (strict && "dd" === format && this._minWeekdaysParse[i].test(weekdayName)) return i;
                    if (!strict && this._weekdaysParse[i].test(weekdayName)) return i
                }
            }

            function getSetDayOfWeek(input) {
                if (!this.isValid()) return null != input ? this : NaN;
                var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != input ? (input = parseWeekday(input, this.localeData()), this.add(input - day, "d")) : day
            }

            function getSetLocaleDayOfWeek(input) {
                if (!this.isValid()) return null != input ? this : NaN;
                var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == input ? weekday : this.add(input - weekday, "d")
            }

            function getSetISODayOfWeek(input) {
                if (!this.isValid()) return null != input ? this : NaN;
                if (null != input) {
                    var weekday = parseIsoWeekday(input, this.localeData());
                    return this.day(this.day() % 7 ? weekday : weekday - 7)
                }
                return this.day() || 7
            }

            function weekdaysRegex(isStrict) {
                return this._weekdaysParseExact ? (hasOwnProp(this, "_weekdaysRegex") || computeWeekdaysParse.call(this), isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex) : (hasOwnProp(this, "_weekdaysRegex") || (this._weekdaysRegex = defaultWeekdaysRegex), this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }

            function weekdaysShortRegex(isStrict) {
                return this._weekdaysParseExact ? (hasOwnProp(this, "_weekdaysRegex") || computeWeekdaysParse.call(this), isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (hasOwnProp(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = defaultWeekdaysShortRegex), this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }

            function weekdaysMinRegex(isStrict) {
                return this._weekdaysParseExact ? (hasOwnProp(this, "_weekdaysRegex") || computeWeekdaysParse.call(this), isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (hasOwnProp(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = defaultWeekdaysMinRegex), this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }

            function computeWeekdaysParse() {
                function cmpLenRev(a, b) {
                    return b.length - a.length
                }

                var i, mom, minp, shortp, longp, minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [];
                for (i = 0; i < 7; i++) mom = createUTC([2e3, 1]).day(i), minp = this.weekdaysMin(mom, ""), shortp = this.weekdaysShort(mom, ""), longp = this.weekdays(mom, ""), minPieces.push(minp), shortPieces.push(shortp), longPieces.push(longp), mixedPieces.push(minp), mixedPieces.push(shortp), mixedPieces.push(longp);
                for (minPieces.sort(cmpLenRev), shortPieces.sort(cmpLenRev), longPieces.sort(cmpLenRev), mixedPieces.sort(cmpLenRev), i = 0; i < 7; i++) shortPieces[i] = regexEscape(shortPieces[i]), longPieces[i] = regexEscape(longPieces[i]), mixedPieces[i] = regexEscape(mixedPieces[i]);
                this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i")
            }

            function hFormat() {
                return this.hours() % 12 || 12
            }

            function kFormat() {
                return this.hours() || 24
            }

            function meridiem(token, lowercase) {
                addFormatToken(token, 0, 0, function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), lowercase)
                })
            }

            function matchMeridiem(isStrict, locale) {
                return locale._meridiemParse
            }

            function localeIsPM(input) {
                return "p" === (input + "").toLowerCase().charAt(0)
            }

            function localeMeridiem(hours, minutes, isLower) {
                return hours > 11 ? isLower ? "pm" : "PM" : isLower ? "am" : "AM"
            }

            function normalizeLocale(key) {
                return key ? key.toLowerCase().replace("_", "-") : key
            }

            function chooseLocale(names) {
                for (var j, next, locale, split, i = 0; i < names.length;) {
                    for (split = normalizeLocale(names[i]).split("-"), j = split.length, next = normalizeLocale(names[i + 1]), next = next ? next.split("-") : null; j > 0;) {
                        if (locale = loadLocale(split.slice(0, j).join("-"))) return locale;
                        if (next && next.length >= j && compareArrays(split, next, !0) >= j - 1) break;
                        j--
                    }
                    i++
                }
                return globalLocale
            }

            function loadLocale(name) {
                var oldLocale = null;
                if (!locales[name] && void 0 !== module && module && module.exports) try {
                    oldLocale = globalLocale._abbr;
                    __webpack_require__(219)("./" + name), getSetGlobalLocale(oldLocale)
                } catch (e) {
                }
                return locales[name]
            }

            function getSetGlobalLocale(key, values) {
                var data;
                return key && (data = isUndefined(values) ? getLocale(key) : defineLocale(key, values), data ? globalLocale = data : "undefined" != typeof console && console.warn && console.warn("Locale " + key + " not found. Did you forget to load it?")), globalLocale._abbr
            }

            function defineLocale(name, config) {
                if (null !== config) {
                    var locale, parentConfig = baseConfig;
                    if (config.abbr = name, null != locales[name]) deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), parentConfig = locales[name]._config; else if (null != config.parentLocale) if (null != locales[config.parentLocale]) parentConfig = locales[config.parentLocale]._config; else {
                        if (null == (locale = loadLocale(config.parentLocale))) return localeFamilies[config.parentLocale] || (localeFamilies[config.parentLocale] = []), localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        }), null;
                        parentConfig = locale._config
                    }
                    return locales[name] = new Locale(mergeConfigs(parentConfig, config)), localeFamilies[name] && localeFamilies[name].forEach(function (x) {
                        defineLocale(x.name, x.config)
                    }), getSetGlobalLocale(name), locales[name]
                }
                return delete locales[name], null
            }

            function updateLocale(name, config) {
                if (null != config) {
                    var locale, tmpLocale, parentConfig = baseConfig;
                    tmpLocale = loadLocale(name), null != tmpLocale && (parentConfig = tmpLocale._config), config = mergeConfigs(parentConfig, config), locale = new Locale(config), locale.parentLocale = locales[name], locales[name] = locale, getSetGlobalLocale(name)
                } else null != locales[name] && (null != locales[name].parentLocale ? locales[name] = locales[name].parentLocale : null != locales[name] && delete locales[name]);
                return locales[name]
            }

            function getLocale(key) {
                var locale;
                if (key && key._locale && key._locale._abbr && (key = key._locale._abbr), !key) return globalLocale;
                if (!isArray(key)) {
                    if (locale = loadLocale(key)) return locale;
                    key = [key]
                }
                return chooseLocale(key)
            }

            function listLocales() {
                return keys(locales)
            }

            function checkOverflow(m) {
                var overflow, a = m._a;
                return a && -2 === getParsingFlags(m).overflow && (overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || 24 === a[HOUR] && (0 !== a[MINUTE] || 0 !== a[SECOND] || 0 !== a[MILLISECOND]) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1, getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE) && (overflow = DATE), getParsingFlags(m)._overflowWeeks && -1 === overflow && (overflow = WEEK), getParsingFlags(m)._overflowWeekday && -1 === overflow && (overflow = WEEKDAY), getParsingFlags(m).overflow = overflow), m
            }

            function defaults(a, b, c) {
                return null != a ? a : null != b ? b : c
            }

            function currentDateArray(config) {
                var nowValue = new Date(hooks.now());
                return config._useUTC ? [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()] : [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()]
            }

            function configFromArray(config) {
                var i, date, currentDate, expectedWeekday, yearToUse, input = [];
                if (!config._d) {
                    for (currentDate = currentDateArray(config), config._w && null == config._a[DATE] && null == config._a[MONTH] && dayOfYearFromWeekInfo(config), null != config._dayOfYear && (yearToUse = defaults(config._a[YEAR], currentDate[YEAR]), (config._dayOfYear > daysInYear(yearToUse) || 0 === config._dayOfYear) && (getParsingFlags(config)._overflowDayOfYear = !0), date = createUTCDate(yearToUse, 0, config._dayOfYear), config._a[MONTH] = date.getUTCMonth(), config._a[DATE] = date.getUTCDate()), i = 0; i < 3 && null == config._a[i]; ++i) config._a[i] = input[i] = currentDate[i];
                    for (; i < 7; i++) config._a[i] = input[i] = null == config._a[i] ? 2 === i ? 1 : 0 : config._a[i];
                    24 === config._a[HOUR] && 0 === config._a[MINUTE] && 0 === config._a[SECOND] && 0 === config._a[MILLISECOND] && (config._nextDay = !0, config._a[HOUR] = 0), config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input), expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(), null != config._tzm && config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm), config._nextDay && (config._a[HOUR] = 24), config._w && void 0 !== config._w.d && config._w.d !== expectedWeekday && (getParsingFlags(config).weekdayMismatch = !0)
                }
            }

            function dayOfYearFromWeekInfo(config) {
                var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
                if (w = config._w, null != w.GG || null != w.W || null != w.E) dow = 1, doy = 4, weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year), week = defaults(w.W, 1), ((weekday = defaults(w.E, 1)) < 1 || weekday > 7) && (weekdayOverflow = !0); else {
                    dow = config._locale._week.dow, doy = config._locale._week.doy;
                    var curWeek = weekOfYear(createLocal(), dow, doy);
                    weekYear = defaults(w.gg, config._a[YEAR], curWeek.year), week = defaults(w.w, curWeek.week), null != w.d ? ((weekday = w.d) < 0 || weekday > 6) && (weekdayOverflow = !0) : null != w.e ? (weekday = w.e + dow, (w.e < 0 || w.e > 6) && (weekdayOverflow = !0)) : weekday = dow
                }
                week < 1 || week > weeksInYear(weekYear, dow, doy) ? getParsingFlags(config)._overflowWeeks = !0 : null != weekdayOverflow ? getParsingFlags(config)._overflowWeekday = !0 : (temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), config._a[YEAR] = temp.year, config._dayOfYear = temp.dayOfYear)
            }

            function configFromISO(config) {
                var i, l, allowTime, dateFormat, timeFormat, tzFormat, string = config._i,
                    match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string);
                if (match) {
                    for (getParsingFlags(config).iso = !0, i = 0, l = isoDates.length; i < l; i++) if (isoDates[i][1].exec(match[1])) {
                        dateFormat = isoDates[i][0], allowTime = !1 !== isoDates[i][2];
                        break
                    }
                    if (null == dateFormat) return void(config._isValid = !1);
                    if (match[3]) {
                        for (i = 0, l = isoTimes.length; i < l; i++) if (isoTimes[i][1].exec(match[3])) {
                            timeFormat = (match[2] || " ") + isoTimes[i][0];
                            break
                        }
                        if (null == timeFormat) return void(config._isValid = !1)
                    }
                    if (!allowTime && null != timeFormat) return void(config._isValid = !1);
                    if (match[4]) {
                        if (!tzRegex.exec(match[4])) return void(config._isValid = !1);
                        tzFormat = "Z"
                    }
                    config._f = dateFormat + (timeFormat || "") + (tzFormat || ""), configFromStringAndFormat(config)
                } else config._isValid = !1
            }

            function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
                var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];
                return secondStr && result.push(parseInt(secondStr, 10)), result
            }

            function untruncateYear(yearStr) {
                var year = parseInt(yearStr, 10);
                return year <= 49 ? 2e3 + year : year <= 999 ? 1900 + year : year
            }

            function preprocessRFC2822(s) {
                return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }

            function checkWeekday(weekdayStr, parsedInput, config) {
                if (weekdayStr) {
                    if (defaultLocaleWeekdaysShort.indexOf(weekdayStr) !== new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay()) return getParsingFlags(config).weekdayMismatch = !0, config._isValid = !1, !1
                }
                return !0
            }

            function calculateOffset(obsOffset, militaryOffset, numOffset) {
                if (obsOffset) return obsOffsets[obsOffset];
                if (militaryOffset) return 0;
                var hm = parseInt(numOffset, 10), m = hm % 100;
                return (hm - m) / 100 * 60 + m
            }

            function configFromRFC2822(config) {
                var match = rfc2822.exec(preprocessRFC2822(config._i));
                if (match) {
                    var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
                    if (!checkWeekday(match[1], parsedArray, config)) return;
                    config._a = parsedArray, config._tzm = calculateOffset(match[8], match[9], match[10]), config._d = createUTCDate.apply(null, config._a), config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm), getParsingFlags(config).rfc2822 = !0
                } else config._isValid = !1
            }

            function configFromString(config) {
                var matched = aspNetJsonRegex.exec(config._i);
                if (null !== matched) return void(config._d = new Date(+matched[1]));
                configFromISO(config), !1 === config._isValid && (delete config._isValid, configFromRFC2822(config), !1 === config._isValid && (delete config._isValid, hooks.createFromInputFallback(config)))
            }

            function configFromStringAndFormat(config) {
                if (config._f === hooks.ISO_8601) return void configFromISO(config);
                if (config._f === hooks.RFC_2822) return void configFromRFC2822(config);
                config._a = [], getParsingFlags(config).empty = !0;
                var i, parsedInput, tokens, token, skipped, string = "" + config._i, stringLength = string.length,
                    totalParsedInputLength = 0;
                for (tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [], i = 0; i < tokens.length; i++) token = tokens[i], parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0], parsedInput && (skipped = string.substr(0, string.indexOf(parsedInput)), skipped.length > 0 && getParsingFlags(config).unusedInput.push(skipped), string = string.slice(string.indexOf(parsedInput) + parsedInput.length), totalParsedInputLength += parsedInput.length), formatTokenFunctions[token] ? (parsedInput ? getParsingFlags(config).empty = !1 : getParsingFlags(config).unusedTokens.push(token), addTimeToArrayFromToken(token, parsedInput, config)) : config._strict && !parsedInput && getParsingFlags(config).unusedTokens.push(token);
                getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength, string.length > 0 && getParsingFlags(config).unusedInput.push(string), config._a[HOUR] <= 12 && !0 === getParsingFlags(config).bigHour && config._a[HOUR] > 0 && (getParsingFlags(config).bigHour = void 0), getParsingFlags(config).parsedDateParts = config._a.slice(0), getParsingFlags(config).meridiem = config._meridiem, config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem), configFromArray(config), checkOverflow(config)
            }

            function meridiemFixWrap(locale, hour, meridiem) {
                var isPm;
                return null == meridiem ? hour : null != locale.meridiemHour ? locale.meridiemHour(hour, meridiem) : null != locale.isPM ? (isPm = locale.isPM(meridiem), isPm && hour < 12 && (hour += 12), isPm || 12 !== hour || (hour = 0), hour) : hour
            }

            function configFromStringAndArray(config) {
                var tempConfig, bestMoment, scoreToBeat, i, currentScore;
                if (0 === config._f.length) return getParsingFlags(config).invalidFormat = !0, void(config._d = new Date(NaN));
                for (i = 0; i < config._f.length; i++) currentScore = 0, tempConfig = copyConfig({}, config), null != config._useUTC && (tempConfig._useUTC = config._useUTC), tempConfig._f = config._f[i], configFromStringAndFormat(tempConfig), isValid(tempConfig) && (currentScore += getParsingFlags(tempConfig).charsLeftOver, currentScore += 10 * getParsingFlags(tempConfig).unusedTokens.length, getParsingFlags(tempConfig).score = currentScore, (null == scoreToBeat || currentScore < scoreToBeat) && (scoreToBeat = currentScore, bestMoment = tempConfig));
                extend(config, bestMoment || tempConfig)
            }

            function configFromObject(config) {
                if (!config._d) {
                    var i = normalizeObjectUnits(config._i);
                    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
                        return obj && parseInt(obj, 10)
                    }), configFromArray(config)
                }
            }

            function createFromConfig(config) {
                var res = new Moment(checkOverflow(prepareConfig(config)));
                return res._nextDay && (res.add(1, "d"), res._nextDay = void 0), res
            }

            function prepareConfig(config) {
                var input = config._i, format = config._f;
                return config._locale = config._locale || getLocale(config._l), null === input || void 0 === format && "" === input ? createInvalid({nullInput: !0}) : ("string" == typeof input && (config._i = input = config._locale.preparse(input)), isMoment(input) ? new Moment(checkOverflow(input)) : (isDate(input) ? config._d = input : isArray(format) ? configFromStringAndArray(config) : format ? configFromStringAndFormat(config) : configFromInput(config), isValid(config) || (config._d = null), config))
            }

            function configFromInput(config) {
                var input = config._i;
                isUndefined(input) ? config._d = new Date(hooks.now()) : isDate(input) ? config._d = new Date(input.valueOf()) : "string" == typeof input ? configFromString(config) : isArray(input) ? (config._a = map(input.slice(0), function (obj) {
                    return parseInt(obj, 10)
                }), configFromArray(config)) : isObject(input) ? configFromObject(config) : isNumber(input) ? config._d = new Date(input) : hooks.createFromInputFallback(config)
            }

            function createLocalOrUTC(input, format, locale, strict, isUTC) {
                var c = {};
                return !0 !== locale && !1 !== locale || (strict = locale, locale = void 0), (isObject(input) && isObjectEmpty(input) || isArray(input) && 0 === input.length) && (input = void 0), c._isAMomentObject = !0, c._useUTC = c._isUTC = isUTC, c._l = locale, c._i = input, c._f = format, c._strict = strict, createFromConfig(c)
            }

            function createLocal(input, format, locale, strict) {
                return createLocalOrUTC(input, format, locale, strict, !1)
            }

            function pickBy(fn, moments) {
                var res, i;
                if (1 === moments.length && isArray(moments[0]) && (moments = moments[0]), !moments.length) return createLocal();
                for (res = moments[0], i = 1; i < moments.length; ++i) moments[i].isValid() && !moments[i][fn](res) || (res = moments[i]);
                return res
            }

            function min() {
                return pickBy("isBefore", [].slice.call(arguments, 0))
            }

            function max() {
                return pickBy("isAfter", [].slice.call(arguments, 0))
            }

            function isDurationValid(m) {
                for (var key in m) if (-1 === indexOf.call(ordering, key) || null != m[key] && isNaN(m[key])) return !1;
                for (var unitHasDecimal = !1, i = 0; i < ordering.length; ++i) if (m[ordering[i]]) {
                    if (unitHasDecimal) return !1;
                    parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]]) && (unitHasDecimal = !0)
                }
                return !0
            }

            function isValid$1() {
                return this._isValid
            }

            function createInvalid$1() {
                return createDuration(NaN)
            }

            function Duration(duration) {
                var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0,
                    quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0,
                    weeks = normalizedInput.week || 0, days = normalizedInput.day || 0,
                    hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0,
                    seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
                this._isValid = isDurationValid(normalizedInput), this._milliseconds = +milliseconds + 1e3 * seconds + 6e4 * minutes + 1e3 * hours * 60 * 60, this._days = +days + 7 * weeks, this._months = +months + 3 * quarters + 12 * years, this._data = {}, this._locale = getLocale(), this._bubble()
            }

            function isDuration(obj) {
                return obj instanceof Duration
            }

            function absRound(number) {
                return number < 0 ? -1 * Math.round(-1 * number) : Math.round(number)
            }

            function offset(token, separator) {
                addFormatToken(token, 0, 0, function () {
                    var offset = this.utcOffset(), sign = "+";
                    return offset < 0 && (offset = -offset, sign = "-"), sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2)
                })
            }

            function offsetFromString(matcher, string) {
                var matches = (string || "").match(matcher);
                if (null === matches) return null;
                var chunk = matches[matches.length - 1] || [], parts = (chunk + "").match(chunkOffset) || ["-", 0, 0],
                    minutes = 60 * parts[1] + toInt(parts[2]);
                return 0 === minutes ? 0 : "+" === parts[0] ? minutes : -minutes
            }

            function cloneWithOffset(input, model) {
                var res, diff;
                return model._isUTC ? (res = model.clone(), diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(), res._d.setTime(res._d.valueOf() + diff), hooks.updateOffset(res, !1), res) : createLocal(input).local()
            }

            function getDateOffset(m) {
                return 15 * -Math.round(m._d.getTimezoneOffset() / 15)
            }

            function getSetOffset(input, keepLocalTime, keepMinutes) {
                var localAdjust, offset = this._offset || 0;
                if (!this.isValid()) return null != input ? this : NaN;
                if (null != input) {
                    if ("string" == typeof input) {
                        if (null === (input = offsetFromString(matchShortOffset, input))) return this
                    } else Math.abs(input) < 16 && !keepMinutes && (input *= 60);
                    return !this._isUTC && keepLocalTime && (localAdjust = getDateOffset(this)), this._offset = input, this._isUTC = !0, null != localAdjust && this.add(localAdjust, "m"), offset !== input && (!keepLocalTime || this._changeInProgress ? addSubtract(this, createDuration(input - offset, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, hooks.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? offset : getDateOffset(this)
            }

            function getSetZone(input, keepLocalTime) {
                return null != input ? ("string" != typeof input && (input = -input), this.utcOffset(input, keepLocalTime), this) : -this.utcOffset()
            }

            function setOffsetToUTC(keepLocalTime) {
                return this.utcOffset(0, keepLocalTime)
            }

            function setOffsetToLocal(keepLocalTime) {
                return this._isUTC && (this.utcOffset(0, keepLocalTime), this._isUTC = !1, keepLocalTime && this.subtract(getDateOffset(this), "m")), this
            }

            function setOffsetToParsedOffset() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
                    var tZone = offsetFromString(matchOffset, this._i);
                    null != tZone ? this.utcOffset(tZone) : this.utcOffset(0, !0)
                }
                return this
            }

            function hasAlignedHourOffset(input) {
                return !!this.isValid() && (input = input ? createLocal(input).utcOffset() : 0, (this.utcOffset() - input) % 60 == 0)
            }

            function isDaylightSavingTime() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function isDaylightSavingTimeShifted() {
                if (!isUndefined(this._isDSTShifted)) return this._isDSTShifted;
                var c = {};
                if (copyConfig(c, this), c = prepareConfig(c), c._a) {
                    var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
                    this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function isLocal() {
                return !!this.isValid() && !this._isUTC
            }

            function isUtcOffset() {
                return !!this.isValid() && this._isUTC
            }

            function isUtc() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }

            function createDuration(input, key) {
                var sign, ret, diffRes, duration = input, match = null;
                return isDuration(input) ? duration = {
                    ms: input._milliseconds,
                    d: input._days,
                    M: input._months
                } : isNumber(input) ? (duration = {}, key ? duration[key] = input : duration.milliseconds = input) : (match = aspNetRegex.exec(input)) ? (sign = "-" === match[1] ? -1 : 1, duration = {
                    y: 0,
                    d: toInt(match[DATE]) * sign,
                    h: toInt(match[HOUR]) * sign,
                    m: toInt(match[MINUTE]) * sign,
                    s: toInt(match[SECOND]) * sign,
                    ms: toInt(absRound(1e3 * match[MILLISECOND])) * sign
                }) : (match = isoRegex.exec(input)) ? (sign = "-" === match[1] ? -1 : (match[1], 1), duration = {
                    y: parseIso(match[2], sign),
                    M: parseIso(match[3], sign),
                    w: parseIso(match[4], sign),
                    d: parseIso(match[5], sign),
                    h: parseIso(match[6], sign),
                    m: parseIso(match[7], sign),
                    s: parseIso(match[8], sign)
                }) : null == duration ? duration = {} : "object" == typeof duration && ("from" in duration || "to" in duration) && (diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to)), duration = {}, duration.ms = diffRes.milliseconds, duration.M = diffRes.months), ret = new Duration(duration), isDuration(input) && hasOwnProp(input, "_locale") && (ret._locale = input._locale), ret
            }

            function parseIso(inp, sign) {
                var res = inp && parseFloat(inp.replace(",", "."));
                return (isNaN(res) ? 0 : res) * sign
            }

            function positiveMomentsDifference(base, other) {
                var res = {milliseconds: 0, months: 0};
                return res.months = other.month() - base.month() + 12 * (other.year() - base.year()), base.clone().add(res.months, "M").isAfter(other) && --res.months, res.milliseconds = +other - +base.clone().add(res.months, "M"), res
            }

            function momentsDifference(base, other) {
                var res;
                return base.isValid() && other.isValid() ? (other = cloneWithOffset(other, base), base.isBefore(other) ? res = positiveMomentsDifference(base, other) : (res = positiveMomentsDifference(other, base), res.milliseconds = -res.milliseconds, res.months = -res.months), res) : {
                    milliseconds: 0,
                    months: 0
                }
            }

            function createAdder(direction, name) {
                return function (val, period) {
                    var dur, tmp;
                    return null === period || isNaN(+period) || (deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), tmp = val, val = period, period = tmp), val = "string" == typeof val ? +val : val, dur = createDuration(val, period), addSubtract(this, dur, direction), this
                }
            }

            function addSubtract(mom, duration, isAdding, updateOffset) {
                var milliseconds = duration._milliseconds, days = absRound(duration._days),
                    months = absRound(duration._months);
                mom.isValid() && (updateOffset = null == updateOffset || updateOffset, months && setMonth(mom, get(mom, "Month") + months * isAdding), days && set$1(mom, "Date", get(mom, "Date") + days * isAdding), milliseconds && mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding), updateOffset && hooks.updateOffset(mom, days || months))
            }

            function getCalendarFormat(myMoment, now) {
                var diff = myMoment.diff(now, "days", !0);
                return diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse"
            }

            function calendar$1(time, formats) {
                var now = time || createLocal(), sod = cloneWithOffset(now, this).startOf("day"),
                    format = hooks.calendarFormat(this, sod) || "sameElse",
                    output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
                return this.format(output || this.localeData().calendar(format, this, createLocal(now)))
            }

            function clone() {
                return new Moment(this)
            }

            function isAfter(input, units) {
                var localInput = isMoment(input) ? input : createLocal(input);
                return !(!this.isValid() || !localInput.isValid()) && (units = normalizeUnits(isUndefined(units) ? "millisecond" : units), "millisecond" === units ? this.valueOf() > localInput.valueOf() : localInput.valueOf() < this.clone().startOf(units).valueOf())
            }

            function isBefore(input, units) {
                var localInput = isMoment(input) ? input : createLocal(input);
                return !(!this.isValid() || !localInput.isValid()) && (units = normalizeUnits(isUndefined(units) ? "millisecond" : units), "millisecond" === units ? this.valueOf() < localInput.valueOf() : this.clone().endOf(units).valueOf() < localInput.valueOf())
            }

            function isBetween(from, to, units, inclusivity) {
                return inclusivity = inclusivity || "()", ("(" === inclusivity[0] ? this.isAfter(from, units) : !this.isBefore(from, units)) && (")" === inclusivity[1] ? this.isBefore(to, units) : !this.isAfter(to, units))
            }

            function isSame(input, units) {
                var inputMs, localInput = isMoment(input) ? input : createLocal(input);
                return !(!this.isValid() || !localInput.isValid()) && (units = normalizeUnits(units || "millisecond"), "millisecond" === units ? this.valueOf() === localInput.valueOf() : (inputMs = localInput.valueOf(), this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf()))
            }

            function isSameOrAfter(input, units) {
                return this.isSame(input, units) || this.isAfter(input, units)
            }

            function isSameOrBefore(input, units) {
                return this.isSame(input, units) || this.isBefore(input, units)
            }

            function diff(input, units, asFloat) {
                var that, zoneDelta, output;
                if (!this.isValid()) return NaN;
                if (that = cloneWithOffset(input, this), !that.isValid()) return NaN;
                switch (zoneDelta = 6e4 * (that.utcOffset() - this.utcOffset()), units = normalizeUnits(units)) {
                    case"year":
                        output = monthDiff(this, that) / 12;
                        break;
                    case"month":
                        output = monthDiff(this, that);
                        break;
                    case"quarter":
                        output = monthDiff(this, that) / 3;
                        break;
                    case"second":
                        output = (this - that) / 1e3;
                        break;
                    case"minute":
                        output = (this - that) / 6e4;
                        break;
                    case"hour":
                        output = (this - that) / 36e5;
                        break;
                    case"day":
                        output = (this - that - zoneDelta) / 864e5;
                        break;
                    case"week":
                        output = (this - that - zoneDelta) / 6048e5;
                        break;
                    default:
                        output = this - that
                }
                return asFloat ? output : absFloor(output)
            }

            function monthDiff(a, b) {
                var anchor2, adjust, wholeMonthDiff = 12 * (b.year() - a.year()) + (b.month() - a.month()),
                    anchor = a.clone().add(wholeMonthDiff, "months");
                return b - anchor < 0 ? (anchor2 = a.clone().add(wholeMonthDiff - 1, "months"), adjust = (b - anchor) / (anchor - anchor2)) : (anchor2 = a.clone().add(wholeMonthDiff + 1, "months"), adjust = (b - anchor) / (anchor2 - anchor)), -(wholeMonthDiff + adjust) || 0
            }

            function toString() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function toISOString(keepOffset) {
                if (!this.isValid()) return null;
                var utc = !0 !== keepOffset, m = utc ? this.clone().utc() : this;
                return m.year() < 0 || m.year() > 9999 ? formatMoment(m, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : isFunction(Date.prototype.toISOString) ? utc ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", formatMoment(m, "Z")) : formatMoment(m, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }

            function inspect() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var func = "moment", zone = "";
                this.isLocal() || (func = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", zone = "Z");
                var prefix = "[" + func + '("]', year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    suffix = zone + '[")]';
                return this.format(prefix + year + "-MM-DD[T]HH:mm:ss.SSS" + suffix)
            }

            function format(inputString) {
                inputString || (inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat);
                var output = formatMoment(this, inputString);
                return this.localeData().postformat(output)
            }

            function from(time, withoutSuffix) {
                return this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid()) ? createDuration({
                    to: this,
                    from: time
                }).locale(this.locale()).humanize(!withoutSuffix) : this.localeData().invalidDate()
            }

            function fromNow(withoutSuffix) {
                return this.from(createLocal(), withoutSuffix)
            }

            function to(time, withoutSuffix) {
                return this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid()) ? createDuration({
                    from: this,
                    to: time
                }).locale(this.locale()).humanize(!withoutSuffix) : this.localeData().invalidDate()
            }

            function toNow(withoutSuffix) {
                return this.to(createLocal(), withoutSuffix)
            }

            function locale(key) {
                var newLocaleData;
                return void 0 === key ? this._locale._abbr : (newLocaleData = getLocale(key), null != newLocaleData && (this._locale = newLocaleData), this)
            }

            function localeData() {
                return this._locale
            }

            function startOf(units) {
                switch (units = normalizeUnits(units)) {
                    case"year":
                        this.month(0);
                    case"quarter":
                    case"month":
                        this.date(1);
                    case"week":
                    case"isoWeek":
                    case"day":
                    case"date":
                        this.hours(0);
                    case"hour":
                        this.minutes(0);
                    case"minute":
                        this.seconds(0);
                    case"second":
                        this.milliseconds(0)
                }
                return "week" === units && this.weekday(0), "isoWeek" === units && this.isoWeekday(1), "quarter" === units && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function endOf(units) {
                return void 0 === (units = normalizeUnits(units)) || "millisecond" === units ? this : ("date" === units && (units = "day"), this.startOf(units).add(1, "isoWeek" === units ? "week" : units).subtract(1, "ms"))
            }

            function valueOf() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }

            function unix() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function toDate() {
                return new Date(this.valueOf())
            }

            function toArray() {
                var m = this;
                return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()]
            }

            function toObject() {
                var m = this;
                return {
                    years: m.year(),
                    months: m.month(),
                    date: m.date(),
                    hours: m.hours(),
                    minutes: m.minutes(),
                    seconds: m.seconds(),
                    milliseconds: m.milliseconds()
                }
            }

            function toJSON() {
                return this.isValid() ? this.toISOString() : null
            }

            function isValid$2() {
                return isValid(this)
            }

            function parsingFlags() {
                return extend({}, getParsingFlags(this))
            }

            function invalidAt() {
                return getParsingFlags(this).overflow
            }

            function creationData() {
                return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
            }

            function addWeekYearFormatToken(token, getter) {
                addFormatToken(0, [token, token.length], 0, getter)
            }

            function getSetWeekYear(input) {
                return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function getSetISOWeekYear(input) {
                return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function getISOWeeksInYear() {
                return weeksInYear(this.year(), 1, 4)
            }

            function getWeeksInYear() {
                var weekInfo = this.localeData()._week;
                return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy)
            }

            function getSetWeekYearHelper(input, week, weekday, dow, doy) {
                var weeksTarget;
                return null == input ? weekOfYear(this, dow, doy).year : (weeksTarget = weeksInYear(input, dow, doy), week > weeksTarget && (week = weeksTarget), setWeekAll.call(this, input, week, weekday, dow, doy))
            }

            function setWeekAll(weekYear, week, weekday, dow, doy) {
                var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
                    date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
                return this.year(date.getUTCFullYear()), this.month(date.getUTCMonth()), this.date(date.getUTCDate()), this
            }

            function getSetQuarter(input) {
                return null == input ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (input - 1) + this.month() % 3)
            }

            function getSetDayOfYear(input) {
                var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == input ? dayOfYear : this.add(input - dayOfYear, "d")
            }

            function parseMs(input, array) {
                array[MILLISECOND] = toInt(1e3 * ("0." + input))
            }

            function getZoneAbbr() {
                return this._isUTC ? "UTC" : ""
            }

            function getZoneName() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function createUnix(input) {
                return createLocal(1e3 * input)
            }

            function createInZone() {
                return createLocal.apply(null, arguments).parseZone()
            }

            function preParsePostFormat(string) {
                return string
            }

            function get$1(format, index, field, setter) {
                var locale = getLocale(), utc = createUTC().set(setter, index);
                return locale[field](utc, format)
            }

            function listMonthsImpl(format, index, field) {
                if (isNumber(format) && (index = format, format = void 0), format = format || "", null != index) return get$1(format, index, field, "month");
                var i, out = [];
                for (i = 0; i < 12; i++) out[i] = get$1(format, i, field, "month");
                return out
            }

            function listWeekdaysImpl(localeSorted, format, index, field) {
                "boolean" == typeof localeSorted ? (isNumber(format) && (index = format, format = void 0), format = format || "") : (format = localeSorted, index = format, localeSorted = !1, isNumber(format) && (index = format, format = void 0), format = format || "");
                var locale = getLocale(), shift = localeSorted ? locale._week.dow : 0;
                if (null != index) return get$1(format, (index + shift) % 7, field, "day");
                var i, out = [];
                for (i = 0; i < 7; i++) out[i] = get$1(format, (i + shift) % 7, field, "day");
                return out
            }

            function listMonths(format, index) {
                return listMonthsImpl(format, index, "months")
            }

            function listMonthsShort(format, index) {
                return listMonthsImpl(format, index, "monthsShort")
            }

            function listWeekdays(localeSorted, format, index) {
                return listWeekdaysImpl(localeSorted, format, index, "weekdays")
            }

            function listWeekdaysShort(localeSorted, format, index) {
                return listWeekdaysImpl(localeSorted, format, index, "weekdaysShort")
            }

            function listWeekdaysMin(localeSorted, format, index) {
                return listWeekdaysImpl(localeSorted, format, index, "weekdaysMin")
            }

            function abs() {
                var data = this._data;
                return this._milliseconds = mathAbs(this._milliseconds), this._days = mathAbs(this._days), this._months = mathAbs(this._months), data.milliseconds = mathAbs(data.milliseconds), data.seconds = mathAbs(data.seconds), data.minutes = mathAbs(data.minutes), data.hours = mathAbs(data.hours), data.months = mathAbs(data.months), data.years = mathAbs(data.years), this
            }

            function addSubtract$1(duration, input, value, direction) {
                var other = createDuration(input, value);
                return duration._milliseconds += direction * other._milliseconds, duration._days += direction * other._days, duration._months += direction * other._months, duration._bubble()
            }

            function add$1(input, value) {
                return addSubtract$1(this, input, value, 1)
            }

            function subtract$1(input, value) {
                return addSubtract$1(this, input, value, -1)
            }

            function absCeil(number) {
                return number < 0 ? Math.floor(number) : Math.ceil(number)
            }

            function bubble() {
                var seconds, minutes, hours, years, monthsFromDays, milliseconds = this._milliseconds,
                    days = this._days, months = this._months, data = this._data;
                return milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0 || (milliseconds += 864e5 * absCeil(monthsToDays(months) + days), days = 0, months = 0), data.milliseconds = milliseconds % 1e3, seconds = absFloor(milliseconds / 1e3), data.seconds = seconds % 60, minutes = absFloor(seconds / 60), data.minutes = minutes % 60, hours = absFloor(minutes / 60), data.hours = hours % 24, days += absFloor(hours / 24), monthsFromDays = absFloor(daysToMonths(days)), months += monthsFromDays, days -= absCeil(monthsToDays(monthsFromDays)), years = absFloor(months / 12), months %= 12, data.days = days, data.months = months, data.years = years, this
            }

            function daysToMonths(days) {
                return 4800 * days / 146097
            }

            function monthsToDays(months) {
                return 146097 * months / 4800
            }

            function as(units) {
                if (!this.isValid()) return NaN;
                var days, months, milliseconds = this._milliseconds;
                if ("month" === (units = normalizeUnits(units)) || "year" === units) return days = this._days + milliseconds / 864e5, months = this._months + daysToMonths(days), "month" === units ? months : months / 12;
                switch (days = this._days + Math.round(monthsToDays(this._months)), units) {
                    case"week":
                        return days / 7 + milliseconds / 6048e5;
                    case"day":
                        return days + milliseconds / 864e5;
                    case"hour":
                        return 24 * days + milliseconds / 36e5;
                    case"minute":
                        return 1440 * days + milliseconds / 6e4;
                    case"second":
                        return 86400 * days + milliseconds / 1e3;
                    case"millisecond":
                        return Math.floor(864e5 * days) + milliseconds;
                    default:
                        throw new Error("Unknown unit " + units)
                }
            }

            function valueOf$1() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * toInt(this._months / 12) : NaN
            }

            function makeAs(alias) {
                return function () {
                    return this.as(alias)
                }
            }

            function clone$1() {
                return createDuration(this)
            }

            function get$2(units) {
                return units = normalizeUnits(units), this.isValid() ? this[units + "s"]() : NaN
            }

            function makeGetter(name) {
                return function () {
                    return this.isValid() ? this._data[name] : NaN
                }
            }

            function weeks() {
                return absFloor(this.days() / 7)
            }

            function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
                return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture)
            }

            function relativeTime$1(posNegDuration, withoutSuffix, locale) {
                var duration = createDuration(posNegDuration).abs(), seconds = round(duration.as("s")),
                    minutes = round(duration.as("m")), hours = round(duration.as("h")), days = round(duration.as("d")),
                    months = round(duration.as("M")), years = round(duration.as("y")),
                    a = seconds <= thresholds.ss && ["s", seconds] || seconds < thresholds.s && ["ss", seconds] || minutes <= 1 && ["m"] || minutes < thresholds.m && ["mm", minutes] || hours <= 1 && ["h"] || hours < thresholds.h && ["hh", hours] || days <= 1 && ["d"] || days < thresholds.d && ["dd", days] || months <= 1 && ["M"] || months < thresholds.M && ["MM", months] || years <= 1 && ["y"] || ["yy", years];
                return a[2] = withoutSuffix, a[3] = +posNegDuration > 0, a[4] = locale, substituteTimeAgo.apply(null, a)
            }

            function getSetRelativeTimeRounding(roundingFunction) {
                return void 0 === roundingFunction ? round : "function" == typeof roundingFunction && (round = roundingFunction, !0)
            }

            function getSetRelativeTimeThreshold(threshold, limit) {
                return void 0 !== thresholds[threshold] && (void 0 === limit ? thresholds[threshold] : (thresholds[threshold] = limit, "s" === threshold && (thresholds.ss = limit - 1), !0))
            }

            function humanize(withSuffix) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var locale = this.localeData(), output = relativeTime$1(this, !withSuffix, locale);
                return withSuffix && (output = locale.pastFuture(+this, output)), locale.postformat(output)
            }

            function sign(x) {
                return (x > 0) - (x < 0) || +x
            }

            function toISOString$1() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var minutes, hours, years, seconds = abs$1(this._milliseconds) / 1e3, days = abs$1(this._days),
                    months = abs$1(this._months);
                minutes = absFloor(seconds / 60), hours = absFloor(minutes / 60), seconds %= 60, minutes %= 60, years = absFloor(months / 12), months %= 12;
                var Y = years, M = months, D = days, h = hours, m = minutes,
                    s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, "") : "", total = this.asSeconds();
                if (!total) return "P0D";
                var totalSign = total < 0 ? "-" : "", ymSign = sign(this._months) !== sign(total) ? "-" : "",
                    daysSign = sign(this._days) !== sign(total) ? "-" : "",
                    hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
                return totalSign + "P" + (Y ? ymSign + Y + "Y" : "") + (M ? ymSign + M + "M" : "") + (D ? daysSign + D + "D" : "") + (h || m || s ? "T" : "") + (h ? hmsSign + h + "H" : "") + (m ? hmsSign + m + "M" : "") + (s ? hmsSign + s + "S" : "")
            }

            var hookCallback, some;
            some = Array.prototype.some ? Array.prototype.some : function (fun) {
                for (var t = Object(this), len = t.length >>> 0, i = 0; i < len; i++) if (i in t && fun.call(this, t[i], i, t)) return !0;
                return !1
            };
            var momentProperties = hooks.momentProperties = [], updateInProgress = !1, deprecations = {};
            hooks.suppressDeprecationWarnings = !1, hooks.deprecationHandler = null;
            var keys;
            keys = Object.keys ? Object.keys : function (obj) {
                var i, res = [];
                for (i in obj) hasOwnProp(obj, i) && res.push(i);
                return res
            };
            var defaultCalendar = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                }, defaultLongDateFormat = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                }, defaultDayOfMonthOrdinalParse = /\d{1,2}/, defaultRelativeTime = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                }, aliases = {}, priorities = {},
                formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {},
                formatTokenFunctions = {}, match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/,
                match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/,
                match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/,
                matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi,
                matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
                matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                regexes = {}, tokens = {}, YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5,
                MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
            addFormatToken("Y", 0, 0, function () {
                var y = this.year();
                return y <= 9999 ? "" + y : "+" + y
            }), addFormatToken(0, ["YY", 2], 0, function () {
                return this.year() % 100
            }), addFormatToken(0, ["YYYY", 4], 0, "year"), addFormatToken(0, ["YYYYY", 5], 0, "year"), addFormatToken(0, ["YYYYYY", 6, !0], 0, "year"), addUnitAlias("year", "y"), addUnitPriority("year", 1), addRegexToken("Y", matchSigned), addRegexToken("YY", match1to2, match2), addRegexToken("YYYY", match1to4, match4), addRegexToken("YYYYY", match1to6, match6), addRegexToken("YYYYYY", match1to6, match6), addParseToken(["YYYYY", "YYYYYY"], YEAR), addParseToken("YYYY", function (input, array) {
                array[YEAR] = 2 === input.length ? hooks.parseTwoDigitYear(input) : toInt(input)
            }), addParseToken("YY", function (input, array) {
                array[YEAR] = hooks.parseTwoDigitYear(input)
            }), addParseToken("Y", function (input, array) {
                array[YEAR] = parseInt(input, 10)
            }), hooks.parseTwoDigitYear = function (input) {
                return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3)
            };
            var indexOf, getSetYear = makeGetSet("FullYear", !0);
            indexOf = Array.prototype.indexOf ? Array.prototype.indexOf : function (o) {
                var i;
                for (i = 0; i < this.length; ++i) if (this[i] === o) return i;
                return -1
            }, addFormatToken("M", ["MM", 2], "Mo", function () {
                return this.month() + 1
            }), addFormatToken("MMM", 0, 0, function (format) {
                return this.localeData().monthsShort(this, format)
            }), addFormatToken("MMMM", 0, 0, function (format) {
                return this.localeData().months(this, format)
            }), addUnitAlias("month", "M"), addUnitPriority("month", 8), addRegexToken("M", match1to2), addRegexToken("MM", match1to2, match2), addRegexToken("MMM", function (isStrict, locale) {
                return locale.monthsShortRegex(isStrict)
            }), addRegexToken("MMMM", function (isStrict, locale) {
                return locale.monthsRegex(isStrict)
            }), addParseToken(["M", "MM"], function (input, array) {
                array[MONTH] = toInt(input) - 1
            }), addParseToken(["MMM", "MMMM"], function (input, array, config, token) {
                var month = config._locale.monthsParse(input, token, config._strict);
                null != month ? array[MONTH] = month : getParsingFlags(config).invalidMonth = input
            });
            var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
            addFormatToken("w", ["ww", 2], "wo", "week"), addFormatToken("W", ["WW", 2], "Wo", "isoWeek"), addUnitAlias("week", "w"), addUnitAlias("isoWeek", "W"), addUnitPriority("week", 5), addUnitPriority("isoWeek", 5), addRegexToken("w", match1to2), addRegexToken("ww", match1to2, match2), addRegexToken("W", match1to2), addRegexToken("WW", match1to2, match2), addWeekParseToken(["w", "ww", "W", "WW"], function (input, week, config, token) {
                week[token.substr(0, 1)] = toInt(input)
            });
            var defaultLocaleWeek = {dow: 0, doy: 6};
            addFormatToken("d", 0, "do", "day"), addFormatToken("dd", 0, 0, function (format) {
                return this.localeData().weekdaysMin(this, format)
            }), addFormatToken("ddd", 0, 0, function (format) {
                return this.localeData().weekdaysShort(this, format)
            }), addFormatToken("dddd", 0, 0, function (format) {
                return this.localeData().weekdays(this, format)
            }), addFormatToken("e", 0, 0, "weekday"), addFormatToken("E", 0, 0, "isoWeekday"), addUnitAlias("day", "d"), addUnitAlias("weekday", "e"), addUnitAlias("isoWeekday", "E"), addUnitPriority("day", 11), addUnitPriority("weekday", 11), addUnitPriority("isoWeekday", 11), addRegexToken("d", match1to2), addRegexToken("e", match1to2), addRegexToken("E", match1to2), addRegexToken("dd", function (isStrict, locale) {
                return locale.weekdaysMinRegex(isStrict)
            }), addRegexToken("ddd", function (isStrict, locale) {
                return locale.weekdaysShortRegex(isStrict)
            }), addRegexToken("dddd", function (isStrict, locale) {
                return locale.weekdaysRegex(isStrict)
            }), addWeekParseToken(["dd", "ddd", "dddd"], function (input, week, config, token) {
                var weekday = config._locale.weekdaysParse(input, token, config._strict);
                null != weekday ? week.d = weekday : getParsingFlags(config).invalidWeekday = input
            }), addWeekParseToken(["d", "e", "E"], function (input, week, config, token) {
                week[token] = toInt(input)
            });
            var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord,
                defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
            addFormatToken("H", ["HH", 2], 0, "hour"), addFormatToken("h", ["hh", 2], 0, hFormat), addFormatToken("k", ["kk", 2], 0, kFormat), addFormatToken("hmm", 0, 0, function () {
                return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2)
            }), addFormatToken("hmmss", 0, 0, function () {
                return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2)
            }), addFormatToken("Hmm", 0, 0, function () {
                return "" + this.hours() + zeroFill(this.minutes(), 2)
            }), addFormatToken("Hmmss", 0, 0, function () {
                return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2)
            }), meridiem("a", !0), meridiem("A", !1), addUnitAlias("hour", "h"), addUnitPriority("hour", 13), addRegexToken("a", matchMeridiem), addRegexToken("A", matchMeridiem), addRegexToken("H", match1to2), addRegexToken("h", match1to2), addRegexToken("k", match1to2), addRegexToken("HH", match1to2, match2), addRegexToken("hh", match1to2, match2), addRegexToken("kk", match1to2, match2), addRegexToken("hmm", match3to4), addRegexToken("hmmss", match5to6), addRegexToken("Hmm", match3to4), addRegexToken("Hmmss", match5to6), addParseToken(["H", "HH"], HOUR), addParseToken(["k", "kk"], function (input, array, config) {
                var kInput = toInt(input);
                array[HOUR] = 24 === kInput ? 0 : kInput
            }), addParseToken(["a", "A"], function (input, array, config) {
                config._isPm = config._locale.isPM(input), config._meridiem = input
            }), addParseToken(["h", "hh"], function (input, array, config) {
                array[HOUR] = toInt(input), getParsingFlags(config).bigHour = !0
            }), addParseToken("hmm", function (input, array, config) {
                var pos = input.length - 2;
                array[HOUR] = toInt(input.substr(0, pos)), array[MINUTE] = toInt(input.substr(pos)), getParsingFlags(config).bigHour = !0
            }), addParseToken("hmmss", function (input, array, config) {
                var pos1 = input.length - 4, pos2 = input.length - 2;
                array[HOUR] = toInt(input.substr(0, pos1)), array[MINUTE] = toInt(input.substr(pos1, 2)), array[SECOND] = toInt(input.substr(pos2)), getParsingFlags(config).bigHour = !0
            }), addParseToken("Hmm", function (input, array, config) {
                var pos = input.length - 2;
                array[HOUR] = toInt(input.substr(0, pos)), array[MINUTE] = toInt(input.substr(pos))
            }), addParseToken("Hmmss", function (input, array, config) {
                var pos1 = input.length - 4, pos2 = input.length - 2;
                array[HOUR] = toInt(input.substr(0, pos1)), array[MINUTE] = toInt(input.substr(pos1, 2)), array[SECOND] = toInt(input.substr(pos2))
            });
            var globalLocale, defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", !0),
                baseConfig = {
                    calendar: defaultCalendar,
                    longDateFormat: defaultLongDateFormat,
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
                    relativeTime: defaultRelativeTime,
                    months: defaultLocaleMonths,
                    monthsShort: defaultLocaleMonthsShort,
                    week: defaultLocaleWeek,
                    weekdays: defaultLocaleWeekdays,
                    weekdaysMin: defaultLocaleWeekdaysMin,
                    weekdaysShort: defaultLocaleWeekdaysShort,
                    meridiemParse: defaultLocaleMeridiemParse
                }, locales = {}, localeFamilies = {},
                extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
                isoDates = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
                isoTimes = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
                aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
                rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                obsOffsets = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };
            hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (config) {
                config._d = new Date(config._i + (config._useUTC ? " UTC" : ""))
            }), hooks.ISO_8601 = function () {
            }, hooks.RFC_2822 = function () {
            };
            var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var other = createLocal.apply(null, arguments);
                    return this.isValid() && other.isValid() ? other < this ? this : other : createInvalid()
                }),
                prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var other = createLocal.apply(null, arguments);
                    return this.isValid() && other.isValid() ? other > this ? this : other : createInvalid()
                }), now = function () {
                    return Date.now ? Date.now() : +new Date
                }, ordering = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            offset("Z", ":"), offset("ZZ", ""), addRegexToken("Z", matchShortOffset), addRegexToken("ZZ", matchShortOffset), addParseToken(["Z", "ZZ"], function (input, array, config) {
                config._useUTC = !0, config._tzm = offsetFromString(matchShortOffset, input)
            });
            var chunkOffset = /([\+\-]|\d\d)/gi;
            hooks.updateOffset = function () {
            };
            var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            createDuration.fn = Duration.prototype, createDuration.invalid = createInvalid$1;
            var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
            hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (key) {
                return void 0 === key ? this.localeData() : this.locale(key)
            });
            addFormatToken(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100
            }), addFormatToken(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            }), addWeekYearFormatToken("gggg", "weekYear"), addWeekYearFormatToken("ggggg", "weekYear"), addWeekYearFormatToken("GGGG", "isoWeekYear"), addWeekYearFormatToken("GGGGG", "isoWeekYear"), addUnitAlias("weekYear", "gg"), addUnitAlias("isoWeekYear", "GG"), addUnitPriority("weekYear", 1), addUnitPriority("isoWeekYear", 1), addRegexToken("G", matchSigned), addRegexToken("g", matchSigned), addRegexToken("GG", match1to2, match2), addRegexToken("gg", match1to2, match2), addRegexToken("GGGG", match1to4, match4), addRegexToken("gggg", match1to4, match4), addRegexToken("GGGGG", match1to6, match6), addRegexToken("ggggg", match1to6, match6), addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function (input, week, config, token) {
                week[token.substr(0, 2)] = toInt(input)
            }), addWeekParseToken(["gg", "GG"], function (input, week, config, token) {
                week[token] = hooks.parseTwoDigitYear(input)
            }), addFormatToken("Q", 0, "Qo", "quarter"), addUnitAlias("quarter", "Q"), addUnitPriority("quarter", 7), addRegexToken("Q", match1), addParseToken("Q", function (input, array) {
                array[MONTH] = 3 * (toInt(input) - 1)
            }), addFormatToken("D", ["DD", 2], "Do", "date"), addUnitAlias("date", "D"), addUnitPriority("date", 9), addRegexToken("D", match1to2), addRegexToken("DD", match1to2, match2), addRegexToken("Do", function (isStrict, locale) {
                return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient
            }), addParseToken(["D", "DD"], DATE), addParseToken("Do", function (input, array) {
                array[DATE] = toInt(input.match(match1to2)[0])
            });
            var getSetDayOfMonth = makeGetSet("Date", !0);
            addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), addUnitAlias("dayOfYear", "DDD"), addUnitPriority("dayOfYear", 4), addRegexToken("DDD", match1to3), addRegexToken("DDDD", match3), addParseToken(["DDD", "DDDD"], function (input, array, config) {
                config._dayOfYear = toInt(input)
            }), addFormatToken("m", ["mm", 2], 0, "minute"), addUnitAlias("minute", "m"), addUnitPriority("minute", 14), addRegexToken("m", match1to2), addRegexToken("mm", match1to2, match2), addParseToken(["m", "mm"], MINUTE);
            var getSetMinute = makeGetSet("Minutes", !1);
            addFormatToken("s", ["ss", 2], 0, "second"), addUnitAlias("second", "s"), addUnitPriority("second", 15), addRegexToken("s", match1to2), addRegexToken("ss", match1to2, match2), addParseToken(["s", "ss"], SECOND);
            var getSetSecond = makeGetSet("Seconds", !1);
            addFormatToken("S", 0, 0, function () {
                return ~~(this.millisecond() / 100)
            }), addFormatToken(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10)
            }), addFormatToken(0, ["SSS", 3], 0, "millisecond"), addFormatToken(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond()
            }), addFormatToken(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond()
            }), addFormatToken(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond()
            }), addFormatToken(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond()
            }), addFormatToken(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond()
            }), addFormatToken(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond()
            }), addUnitAlias("millisecond", "ms"), addUnitPriority("millisecond", 16), addRegexToken("S", match1to3, match1), addRegexToken("SS", match1to3, match2), addRegexToken("SSS", match1to3, match3);
            var token;
            for (token = "SSSS"; token.length <= 9; token += "S") addRegexToken(token, matchUnsigned);
            for (token = "S"; token.length <= 9; token += "S") addParseToken(token, parseMs);
            var getSetMillisecond = makeGetSet("Milliseconds", !1);
            addFormatToken("z", 0, 0, "zoneAbbr"), addFormatToken("zz", 0, 0, "zoneName");
            var proto = Moment.prototype;
            proto.add = add, proto.calendar = calendar$1, proto.clone = clone, proto.diff = diff, proto.endOf = endOf, proto.format = format, proto.from = from, proto.fromNow = fromNow, proto.to = to, proto.toNow = toNow, proto.get = stringGet, proto.invalidAt = invalidAt, proto.isAfter = isAfter, proto.isBefore = isBefore, proto.isBetween = isBetween, proto.isSame = isSame, proto.isSameOrAfter = isSameOrAfter, proto.isSameOrBefore = isSameOrBefore, proto.isValid = isValid$2, proto.lang = lang, proto.locale = locale, proto.localeData = localeData, proto.max = prototypeMax, proto.min = prototypeMin, proto.parsingFlags = parsingFlags, proto.set = stringSet, proto.startOf = startOf, proto.subtract = subtract, proto.toArray = toArray, proto.toObject = toObject, proto.toDate = toDate, proto.toISOString = toISOString, proto.inspect = inspect, proto.toJSON = toJSON, proto.toString = toString, proto.unix = unix, proto.valueOf = valueOf, proto.creationData = creationData, proto.year = getSetYear, proto.isLeapYear = getIsLeapYear, proto.weekYear = getSetWeekYear, proto.isoWeekYear = getSetISOWeekYear, proto.quarter = proto.quarters = getSetQuarter, proto.month = getSetMonth, proto.daysInMonth = getDaysInMonth, proto.week = proto.weeks = getSetWeek, proto.isoWeek = proto.isoWeeks = getSetISOWeek, proto.weeksInYear = getWeeksInYear, proto.isoWeeksInYear = getISOWeeksInYear, proto.date = getSetDayOfMonth, proto.day = proto.days = getSetDayOfWeek, proto.weekday = getSetLocaleDayOfWeek, proto.isoWeekday = getSetISODayOfWeek, proto.dayOfYear = getSetDayOfYear, proto.hour = proto.hours = getSetHour, proto.minute = proto.minutes = getSetMinute, proto.second = proto.seconds = getSetSecond, proto.millisecond = proto.milliseconds = getSetMillisecond, proto.utcOffset = getSetOffset, proto.utc = setOffsetToUTC, proto.local = setOffsetToLocal, proto.parseZone = setOffsetToParsedOffset, proto.hasAlignedHourOffset = hasAlignedHourOffset, proto.isDST = isDaylightSavingTime, proto.isLocal = isLocal, proto.isUtcOffset = isUtcOffset, proto.isUtc = isUtc, proto.isUTC = isUtc, proto.zoneAbbr = getZoneAbbr, proto.zoneName = getZoneName, proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth), proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth), proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear), proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone), proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
            var proto$1 = Locale.prototype;
            proto$1.calendar = calendar, proto$1.longDateFormat = longDateFormat, proto$1.invalidDate = invalidDate, proto$1.ordinal = ordinal, proto$1.preparse = preParsePostFormat, proto$1.postformat = preParsePostFormat, proto$1.relativeTime = relativeTime, proto$1.pastFuture = pastFuture, proto$1.set = set, proto$1.months = localeMonths, proto$1.monthsShort = localeMonthsShort, proto$1.monthsParse = localeMonthsParse, proto$1.monthsRegex = monthsRegex, proto$1.monthsShortRegex = monthsShortRegex, proto$1.week = localeWeek, proto$1.firstDayOfYear = localeFirstDayOfYear, proto$1.firstDayOfWeek = localeFirstDayOfWeek, proto$1.weekdays = localeWeekdays, proto$1.weekdaysMin = localeWeekdaysMin, proto$1.weekdaysShort = localeWeekdaysShort, proto$1.weekdaysParse = localeWeekdaysParse, proto$1.weekdaysRegex = weekdaysRegex, proto$1.weekdaysShortRegex = weekdaysShortRegex, proto$1.weekdaysMinRegex = weekdaysMinRegex, proto$1.isPM = localeIsPM, proto$1.meridiem = localeMeridiem, getSetGlobalLocale("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (number) {
                    var b = number % 10;
                    return number + (1 === toInt(number % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                }
            }), hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale), hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
            var mathAbs = Math.abs, asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"),
                asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"),
                asYears = makeAs("y"), milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"),
                minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"),
                months = makeGetter("months"), years = makeGetter("years"), round = Math.round,
                thresholds = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11}, abs$1 = Math.abs,
                proto$2 = Duration.prototype;
            return proto$2.isValid = isValid$1, proto$2.abs = abs, proto$2.add = add$1, proto$2.subtract = subtract$1, proto$2.as = as, proto$2.asMilliseconds = asMilliseconds, proto$2.asSeconds = asSeconds, proto$2.asMinutes = asMinutes, proto$2.asHours = asHours, proto$2.asDays = asDays, proto$2.asWeeks = asWeeks, proto$2.asMonths = asMonths, proto$2.asYears = asYears, proto$2.valueOf = valueOf$1, proto$2._bubble = bubble, proto$2.clone = clone$1, proto$2.get = get$2, proto$2.milliseconds = milliseconds, proto$2.seconds = seconds, proto$2.minutes = minutes, proto$2.hours = hours, proto$2.days = days, proto$2.weeks = weeks, proto$2.months = months, proto$2.years = years, proto$2.humanize = humanize, proto$2.toISOString = toISOString$1, proto$2.toString = toISOString$1, proto$2.toJSON = toISOString$1, proto$2.locale = locale, proto$2.localeData = localeData, proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1), proto$2.lang = lang, addFormatToken("X", 0, 0, "unix"), addFormatToken("x", 0, 0, "valueOf"), addRegexToken("x", matchSigned), addRegexToken("X", matchTimestamp), addParseToken("X", function (input, array, config) {
                config._d = new Date(1e3 * parseFloat(input, 10))
            }), addParseToken("x", function (input, array, config) {
                config._d = new Date(toInt(input))
            }), hooks.version = "2.22.2", function (callback) {
                hookCallback = callback
            }(createLocal), hooks.fn = proto, hooks.min = min, hooks.max = max, hooks.now = now, hooks.utc = createUTC, hooks.unix = createUnix, hooks.months = listMonths, hooks.isDate = isDate, hooks.locale = getSetGlobalLocale, hooks.invalid = createInvalid, hooks.duration = createDuration, hooks.isMoment = isMoment, hooks.weekdays = listWeekdays, hooks.parseZone = createInZone, hooks.localeData = getLocale, hooks.isDuration = isDuration, hooks.monthsShort = listMonthsShort, hooks.weekdaysMin = listWeekdaysMin, hooks.defineLocale = defineLocale, hooks.updateLocale = updateLocale, hooks.locales = listLocales, hooks.weekdaysShort = listWeekdaysShort, hooks.normalizeUnits = normalizeUnits, hooks.relativeTimeRounding = getSetRelativeTimeRounding, hooks.relativeTimeThreshold = getSetRelativeTimeThreshold, hooks.calendarFormat = getCalendarFormat, hooks.prototype = proto, hooks.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "YYYY-[W]WW",
                MONTH: "YYYY-MM"
            }, hooks
        })
    }).call(exports, __webpack_require__(74)(module))
}, function (module, exports) {
    module.exports = function (module) {
        return module.webpackPolyfill || (module.deprecate = function () {
        }, module.paths = [], module.children || (module.children = []), Object.defineProperty(module, "loaded", {
            enumerable: !0,
            get: function () {
                return module.l
            }
        }), Object.defineProperty(module, "id", {
            enumerable: !0, get: function () {
                return module.i
            }
        }), module.webpackPolyfill = 1), module
    }
}, function (module, exports, __webpack_require__) {
    module.exports = !__webpack_require__(9) && !__webpack_require__(14)(function () {
        return 7 != Object.defineProperty(__webpack_require__(52)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(13)
}, function (module, exports, __webpack_require__) {
    var has = __webpack_require__(15), toIObject = __webpack_require__(16), arrayIndexOf = __webpack_require__(120)(!1),
        IE_PROTO = __webpack_require__(56)("IE_PROTO");
    module.exports = function (object, names) {
        var key, O = toIObject(object), i = 0, result = [];
        for (key in O) key != IE_PROTO && has(O, key) && result.push(key);
        for (; names.length > i;) has(O, key = names[i++]) && (~arrayIndexOf(result, key) || result.push(key));
        return result
    }
}, function (module, exports, __webpack_require__) {
    var document = __webpack_require__(3).document;
    module.exports = document && document.documentElement
}, function (module, exports, __webpack_require__) {
    var has = __webpack_require__(15), toObject = __webpack_require__(27),
        IE_PROTO = __webpack_require__(56)("IE_PROTO"), ObjectProto = Object.prototype;
    module.exports = Object.getPrototypeOf || function (O) {
        return O = toObject(O), has(O, IE_PROTO) ? O[IE_PROTO] : "function" == typeof O.constructor && O instanceof O.constructor ? O.constructor.prototype : O instanceof Object ? ObjectProto : null
    }
}, function (module, exports) {
    module.exports = function (done, value) {
        return {value: value, done: !!done}
    }
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(124), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    var cof = __webpack_require__(25);
    module.exports = Array.isArray || function (arg) {
        return "Array" == cof(arg)
    }
}, function (module, exports, __webpack_require__) {
    var $keys = __webpack_require__(77), hiddenKeys = __webpack_require__(58).concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function (O) {
        return $keys(O, hiddenKeys)
    }
}, function (module, exports, __webpack_require__) {
    var pIE = __webpack_require__(28), createDesc = __webpack_require__(37), toIObject = __webpack_require__(16),
        toPrimitive = __webpack_require__(53), has = __webpack_require__(15), IE8_DOM_DEFINE = __webpack_require__(75),
        gOPD = Object.getOwnPropertyDescriptor;
    exports.f = __webpack_require__(9) ? gOPD : function (O, P) {
        if (O = toIObject(O), P = toPrimitive(P, !0), IE8_DOM_DEFINE) try {
            return gOPD(O, P)
        } catch (e) {
        }
        if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P])
    }
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(134), __esModule: !0}
}, function (module, exports) {
    module.exports = "\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(142), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    var classof = __webpack_require__(62), ITERATOR = __webpack_require__(4)("iterator"),
        Iterators = __webpack_require__(24);
    module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
        if (void 0 != it) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)]
    }
}, function (module, exports, __webpack_require__) {
    var anObject = __webpack_require__(8), aFunction = __webpack_require__(23),
        SPECIES = __webpack_require__(4)("species");
    module.exports = function (O, D) {
        var S, C = anObject(O).constructor;
        return void 0 === C || void 0 == (S = anObject(C)[SPECIES]) ? D : aFunction(S)
    }
}, function (module, exports, __webpack_require__) {
    var defer, channel, port, ctx = __webpack_require__(12), invoke = __webpack_require__(146),
        html = __webpack_require__(78), cel = __webpack_require__(52), global = __webpack_require__(3),
        process = global.process, setTask = global.setImmediate, clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel, Dispatch = global.Dispatch, counter = 0, queue = {}, run = function () {
            var id = +this;
            if (queue.hasOwnProperty(id)) {
                var fn = queue[id];
                delete queue[id], fn()
            }
        }, listener = function (event) {
            run.call(event.data)
        };
    setTask && clearTask || (setTask = function (fn) {
        for (var args = [], i = 1; arguments.length > i;) args.push(arguments[i++]);
        return queue[++counter] = function () {
            invoke("function" == typeof fn ? fn : Function(fn), args)
        }, defer(counter), counter
    }, clearTask = function (id) {
        delete queue[id]
    }, "process" == __webpack_require__(25)(process) ? defer = function (id) {
        process.nextTick(ctx(run, id, 1))
    } : Dispatch && Dispatch.now ? defer = function (id) {
        Dispatch.now(ctx(run, id, 1))
    } : MessageChannel ? (channel = new MessageChannel, port = channel.port2, channel.port1.onmessage = listener, defer = ctx(port.postMessage, port, 1)) : global.addEventListener && "function" == typeof postMessage && !global.importScripts ? (defer = function (id) {
        global.postMessage(id + "", "*")
    }, global.addEventListener("message", listener, !1)) : defer = "onreadystatechange" in cel("script") ? function (id) {
        html.appendChild(cel("script")).onreadystatechange = function () {
            html.removeChild(this), run.call(id)
        }
    } : function (id) {
        setTimeout(ctx(run, id, 1), 0)
    }), module.exports = {set: setTask, clear: clearTask}
}, function (module, exports) {
    module.exports = function (exec) {
        try {
            return {e: !1, v: exec()}
        } catch (e) {
            return {e: !0, v: e}
        }
    }
}, function (module, exports, __webpack_require__) {
    var anObject = __webpack_require__(8), isObject = __webpack_require__(5),
        newPromiseCapability = __webpack_require__(64);
    module.exports = function (C, x) {
        if (anObject(C), isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        return (0, promiseCapability.resolve)(x), promiseCapability.promise
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    var global = __webpack_require__(3), core = __webpack_require__(0), dP = __webpack_require__(7),
        DESCRIPTORS = __webpack_require__(9), SPECIES = __webpack_require__(4)("species");
    module.exports = function (KEY) {
        var C = "function" == typeof core[KEY] ? core[KEY] : global[KEY];
        DESCRIPTORS && C && !C[SPECIES] && dP.f(C, SPECIES, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (module, exports, __webpack_require__) {
    var $export = __webpack_require__(2), core = __webpack_require__(0), fails = __webpack_require__(14);
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
        exp[KEY] = exec(fn), $export($export.S + $export.F * fails(function () {
            fn(1)
        }), "Object", exp)
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    exports.__esModule = !0, exports.default = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    exports.__esModule = !0;
    var _defineProperty = __webpack_require__(43), _defineProperty2 = function (obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }(_defineProperty);
    exports.default = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), (0, _defineProperty2.default)(target, descriptor.key, descriptor)
            }
        }

        return function (Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }()
}, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*@license
	Papa Parse
	v4.5.0
	https://github.com/mholt/PapaParse
	License: MIT
*/
    !function (root, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }(0, function () {
        "use strict";

        function CsvToJson(_input, _config) {
            _config = _config || {};
            var dynamicTyping = _config.dynamicTyping || !1;
            if (isFunction(dynamicTyping) && (_config.dynamicTypingFunction = dynamicTyping, dynamicTyping = {}), _config.dynamicTyping = dynamicTyping, _config.transform = !!isFunction(_config.transform) && _config.transform, _config.worker && Papa.WORKERS_SUPPORTED) {
                var w = newWorker();
                return w.userStep = _config.step, w.userChunk = _config.chunk, w.userComplete = _config.complete, w.userError = _config.error, _config.step = isFunction(_config.step), _config.chunk = isFunction(_config.chunk), _config.complete = isFunction(_config.complete), _config.error = isFunction(_config.error), delete _config.worker, void w.postMessage({
                    input: _input,
                    config: _config,
                    workerId: w.id
                })
            }
            var streamer = null;
            return _input === Papa.NODE_STREAM_INPUT ? (streamer = new DuplexStreamStreamer(_config), streamer.getStream()) : ("string" == typeof _input ? streamer = _config.download ? new NetworkStreamer(_config) : new StringStreamer(_config) : !0 === _input.readable && isFunction(_input.read) && isFunction(_input.on) ? streamer = new ReadableStreamStreamer(_config) : (global.File && _input instanceof File || _input instanceof Object) && (streamer = new FileStreamer(_config)), streamer.stream(_input))
        }

        function JsonToCsv(_input, _config) {
            function objectKeys(obj) {
                if ("object" != typeof obj) return [];
                var keys = [];
                for (var key in obj) keys.push(key);
                return keys
            }

            function serialize(fields, data) {
                var csv = "";
                "string" == typeof fields && (fields = JSON.parse(fields)), "string" == typeof data && (data = JSON.parse(data));
                var hasHeader = fields instanceof Array && fields.length > 0,
                    dataKeyedByField = !(data[0] instanceof Array);
                if (hasHeader && _writeHeader) {
                    for (var i = 0; i < fields.length; i++) i > 0 && (csv += _delimiter), csv += safe(fields[i], i);
                    data.length > 0 && (csv += _newline)
                }
                for (var row = 0; row < data.length; row++) {
                    for (var maxCol = hasHeader ? fields.length : data[row].length, col = 0; col < maxCol; col++) {
                        col > 0 && (csv += _delimiter);
                        var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
                        csv += safe(data[row][colIdx], col)
                    }
                    row < data.length - 1 && (csv += _newline)
                }
                return csv
            }

            function safe(str, col) {
                return void 0 === str || null === str ? "" : str.constructor === Date ? JSON.stringify(str).slice(1, 25) : (str = str.toString().replace(quoteCharRegex, _quoteChar + _quoteChar), "boolean" == typeof _quotes && _quotes || _quotes instanceof Array && _quotes[col] || hasAny(str, Papa.BAD_DELIMITERS) || str.indexOf(_delimiter) > -1 || " " === str.charAt(0) || " " === str.charAt(str.length - 1) ? _quoteChar + str + _quoteChar : str)
            }

            function hasAny(str, substrings) {
                for (var i = 0; i < substrings.length; i++) if (str.indexOf(substrings[i]) > -1) return !0;
                return !1
            }

            var _quotes = !1, _writeHeader = !0, _delimiter = ",", _newline = "\r\n", _quoteChar = '"';
            !function () {
                "object" == typeof _config && ("string" == typeof _config.delimiter && 1 === _config.delimiter.length && -1 === Papa.BAD_DELIMITERS.indexOf(_config.delimiter) && (_delimiter = _config.delimiter), ("boolean" == typeof _config.quotes || _config.quotes instanceof Array) && (_quotes = _config.quotes), "string" == typeof _config.newline && (_newline = _config.newline), "string" == typeof _config.quoteChar && (_quoteChar = _config.quoteChar), "boolean" == typeof _config.header && (_writeHeader = _config.header))
            }();
            var quoteCharRegex = new RegExp(_quoteChar, "g");
            if ("string" == typeof _input && (_input = JSON.parse(_input)), _input instanceof Array) {
                if (!_input.length || _input[0] instanceof Array) return serialize(null, _input);
                if ("object" == typeof _input[0]) return serialize(objectKeys(_input[0]), _input)
            } else if ("object" == typeof _input) return "string" == typeof _input.data && (_input.data = JSON.parse(_input.data)), _input.data instanceof Array && (_input.fields || (_input.fields = _input.meta && _input.meta.fields), _input.fields || (_input.fields = _input.data[0] instanceof Array ? _input.fields : objectKeys(_input.data[0])), _input.data[0] instanceof Array || "object" == typeof _input.data[0] || (_input.data = [_input.data])), serialize(_input.fields || [], _input.data || []);
            throw"exception: Unable to serialize unrecognized input"
        }

        function ChunkStreamer(config) {
            function replaceConfig(config) {
                var configCopy = copy(config);
                configCopy.chunkSize = parseInt(configCopy.chunkSize), config.step || config.chunk || (configCopy.chunkSize = null), this._handle = new ParserHandle(configCopy), this._handle.streamer = this, this._config = configCopy
            }

            this._handle = null, this._finished = !1, this._completed = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
                data: [],
                errors: [],
                meta: {}
            }, replaceConfig.call(this, config), this.parseChunk = function (chunk, isFakeChunk) {
                if (this.isFirstChunk && isFunction(this._config.beforeFirstChunk)) {
                    var modifiedChunk = this._config.beforeFirstChunk(chunk);
                    void 0 !== modifiedChunk && (chunk = modifiedChunk)
                }
                this.isFirstChunk = !1;
                var aggregate = this._partialLine + chunk;
                this._partialLine = "";
                var results = this._handle.parse(aggregate, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                    var lastIndex = results.meta.cursor;
                    this._finished || (this._partialLine = aggregate.substring(lastIndex - this._baseIndex), this._baseIndex = lastIndex), results && results.data && (this._rowCount += results.data.length);
                    var finishedIncludingPreview = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                    if (IS_PAPA_WORKER) global.postMessage({
                        results: results,
                        workerId: Papa.WORKER_ID,
                        finished: finishedIncludingPreview
                    }); else if (isFunction(this._config.chunk) && !isFakeChunk) {
                        if (this._config.chunk(results, this._handle), this._handle.paused() || this._handle.aborted()) return;
                        results = void 0, this._completeResults = void 0
                    }
                    return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(results.data), this._completeResults.errors = this._completeResults.errors.concat(results.errors), this._completeResults.meta = results.meta), this._completed || !finishedIncludingPreview || !isFunction(this._config.complete) || results && results.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), finishedIncludingPreview || results && results.meta.paused || this._nextChunk(), results
                }
            }, this._sendError = function (error) {
                isFunction(this._config.error) ? this._config.error(error) : IS_PAPA_WORKER && this._config.error && global.postMessage({
                    workerId: Papa.WORKER_ID,
                    error: error,
                    finished: !1
                })
            }
        }

        function NetworkStreamer(config) {
            function getFileSize(xhr) {
                var contentRange = xhr.getResponseHeader("Content-Range");
                return null === contentRange ? -1 : parseInt(contentRange.substr(contentRange.lastIndexOf("/") + 1))
            }

            config = config || {}, config.chunkSize || (config.chunkSize = Papa.RemoteChunkSize), ChunkStreamer.call(this, config);
            var xhr;
            this._nextChunk = IS_WORKER ? function () {
                this._readChunk(), this._chunkLoaded()
            } : function () {
                this._readChunk()
            }, this.stream = function (url) {
                this._input = url, this._nextChunk()
            }, this._readChunk = function () {
                if (this._finished) return void this._chunkLoaded();
                if (xhr = new XMLHttpRequest, this._config.withCredentials && (xhr.withCredentials = this._config.withCredentials), IS_WORKER || (xhr.onload = bindFunction(this._chunkLoaded, this), xhr.onerror = bindFunction(this._chunkError, this)), xhr.open("GET", this._input, !IS_WORKER), this._config.downloadRequestHeaders) {
                    var headers = this._config.downloadRequestHeaders;
                    for (var headerName in headers) xhr.setRequestHeader(headerName, headers[headerName])
                }
                if (this._config.chunkSize) {
                    var end = this._start + this._config.chunkSize - 1;
                    xhr.setRequestHeader("Range", "bytes=" + this._start + "-" + end), xhr.setRequestHeader("If-None-Match", "webkit-no-cache")
                }
                try {
                    xhr.send()
                } catch (err) {
                    this._chunkError(err.message)
                }
                IS_WORKER && 0 === xhr.status ? this._chunkError() : this._start += this._config.chunkSize
            }, this._chunkLoaded = function () {
                if (4 === xhr.readyState) {
                    if (xhr.status < 200 || xhr.status >= 400) return void this._chunkError();
                    this._finished = !this._config.chunkSize || this._start > getFileSize(xhr), this.parseChunk(xhr.responseText)
                }
            }, this._chunkError = function (errorMessage) {
                var errorText = xhr.statusText || errorMessage;
                this._sendError(new Error(errorText))
            }
        }

        function FileStreamer(config) {
            config = config || {}, config.chunkSize || (config.chunkSize = Papa.LocalChunkSize), ChunkStreamer.call(this, config);
            var reader, slice, usingAsyncReader = "undefined" != typeof FileReader;
            this.stream = function (file) {
                this._input = file, slice = file.slice || file.webkitSlice || file.mozSlice, usingAsyncReader ? (reader = new FileReader, reader.onload = bindFunction(this._chunkLoaded, this), reader.onerror = bindFunction(this._chunkError, this)) : reader = new FileReaderSync, this._nextChunk()
            }, this._nextChunk = function () {
                this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
            }, this._readChunk = function () {
                var input = this._input;
                if (this._config.chunkSize) {
                    var end = Math.min(this._start + this._config.chunkSize, this._input.size);
                    input = slice.call(input, this._start, end)
                }
                var txt = reader.readAsText(input, this._config.encoding);
                usingAsyncReader || this._chunkLoaded({target: {result: txt}})
            }, this._chunkLoaded = function (event) {
                this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(event.target.result)
            }, this._chunkError = function () {
                this._sendError(reader.error)
            }
        }

        function StringStreamer(config) {
            config = config || {}, ChunkStreamer.call(this, config);
            var remaining;
            this.stream = function (s) {
                return remaining = s, this._nextChunk()
            }, this._nextChunk = function () {
                if (!this._finished) {
                    var size = this._config.chunkSize, chunk = size ? remaining.substr(0, size) : remaining;
                    return remaining = size ? remaining.substr(size) : "", this._finished = !remaining, this.parseChunk(chunk)
                }
            }
        }

        function ReadableStreamStreamer(config) {
            config = config || {}, ChunkStreamer.call(this, config);
            var queue = [], parseOnData = !0, streamHasEnded = !1;
            this.pause = function () {
                ChunkStreamer.prototype.pause.apply(this, arguments), this._input.pause()
            }, this.resume = function () {
                ChunkStreamer.prototype.resume.apply(this, arguments), this._input.resume()
            }, this.stream = function (stream) {
                this._input = stream, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError)
            }, this._checkIsFinished = function () {
                streamHasEnded && 1 === queue.length && (this._finished = !0)
            }, this._nextChunk = function () {
                this._checkIsFinished(), queue.length ? this.parseChunk(queue.shift()) : parseOnData = !0
            }, this._streamData = bindFunction(function (chunk) {
                try {
                    queue.push("string" == typeof chunk ? chunk : chunk.toString(this._config.encoding)), parseOnData && (parseOnData = !1, this._checkIsFinished(), this.parseChunk(queue.shift()))
                } catch (error) {
                    this._streamError(error)
                }
            }, this), this._streamError = bindFunction(function (error) {
                this._streamCleanUp(), this._sendError(error)
            }, this), this._streamEnd = bindFunction(function () {
                this._streamCleanUp(), streamHasEnded = !0, this._streamData("")
            }, this), this._streamCleanUp = bindFunction(function () {
                this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError)
            }, this)
        }

        function DuplexStreamStreamer(_config) {
            var Duplex = __webpack_require__(172).Duplex, config = copy(_config), parseOnWrite = !0,
                writeStreamHasFinished = !1, parseCallbackQueue = [], stream = null;
            this._onCsvData = function (results) {
                for (var data = results.data, i = 0; i < data.length; i++) stream.push(data[i]) || this._handle.paused() || this._handle.pause()
            }, this._onCsvComplete = function () {
                stream.push(null)
            }, config.step = bindFunction(this._onCsvData, this), config.complete = bindFunction(this._onCsvComplete, this), ChunkStreamer.call(this, config), this._nextChunk = function () {
                writeStreamHasFinished && 1 === parseCallbackQueue.length && (this._finished = !0), parseCallbackQueue.length ? parseCallbackQueue.shift()() : parseOnWrite = !0
            }, this._addToParseQueue = function (chunk, callback) {
                parseCallbackQueue.push(bindFunction(function () {
                    if (this.parseChunk("string" == typeof chunk ? chunk : chunk.toString(config.encoding)), isFunction(callback)) return callback()
                }, this)), parseOnWrite && (parseOnWrite = !1, this._nextChunk())
            }, this._onRead = function () {
                this._handle.paused() && this._handle.resume()
            }, this._onWrite = function (chunk, encoding, callback) {
                this._addToParseQueue(chunk, callback)
            }, this._onWriteComplete = function () {
                writeStreamHasFinished = !0, this._addToParseQueue("")
            }, this.getStream = function () {
                return stream
            }, stream = new Duplex({
                readableObjectMode: !0,
                decodeStrings: !1,
                read: bindFunction(this._onRead, this),
                write: bindFunction(this._onWrite, this)
            }), stream.once("finish", bindFunction(this._onWriteComplete, this))
        }

        function ParserHandle(_config) {
            function processResults() {
                if (_results && _delimiterError && (addError("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + Papa.DefaultDelimiter + "'"), _delimiterError = !1), _config.skipEmptyLines) for (var i = 0; i < _results.data.length; i++) 1 === _results.data[i].length && "" === _results.data[i][0] && _results.data.splice(i--, 1);
                return needsHeaderRow() && fillHeaderFields(), applyHeaderAndDynamicTypingAndTransformation()
            }

            function needsHeaderRow() {
                return _config.header && 0 === _fields.length
            }

            function fillHeaderFields() {
                if (_results) {
                    for (var i = 0; needsHeaderRow() && i < _results.data.length; i++) for (var j = 0; j < _results.data[i].length; j++) {
                        var header = _results.data[i][j];
                        _config.trimHeaders && (header = header.trim()), _fields.push(header)
                    }
                    _results.data.splice(0, 1)
                }
            }

            function shouldApplyDynamicTyping(field) {
                return _config.dynamicTypingFunction && void 0 === _config.dynamicTyping[field] && (_config.dynamicTyping[field] = _config.dynamicTypingFunction(field)), !0 === (_config.dynamicTyping[field] || _config.dynamicTyping)
            }

            function parseDynamic(field, value) {
                return shouldApplyDynamicTyping(field) ? "true" === value || "TRUE" === value || "false" !== value && "FALSE" !== value && (FLOAT.test(value) ? parseFloat(value) : ISO_DATE.test(value) ? new Date(value) : "" === value ? null : value) : value
            }

            function applyHeaderAndDynamicTypingAndTransformation() {
                if (!_results || !_config.header && !_config.dynamicTyping && !_config.transform) return _results;
                for (var i = 0; i < _results.data.length; i++) {
                    var j, row = _config.header ? {} : [];
                    for (j = 0; j < _results.data[i].length; j++) {
                        var field = j, value = _results.data[i][j];
                        _config.header && (field = j >= _fields.length ? "__parsed_extra" : _fields[j]), _config.transform && (value = _config.transform(value, field)), value = parseDynamic(field, value), "__parsed_extra" === field ? (row[field] = row[field] || [], row[field].push(value)) : row[field] = value
                    }
                    _results.data[i] = row, _config.header && (j > _fields.length ? addError("FieldMismatch", "TooManyFields", "Too many fields: expected " + _fields.length + " fields but parsed " + j, _rowCounter + i) : j < _fields.length && addError("FieldMismatch", "TooFewFields", "Too few fields: expected " + _fields.length + " fields but parsed " + j, _rowCounter + i))
                }
                return _config.header && _results.meta && (_results.meta.fields = _fields), _rowCounter += _results.data.length, _results
            }

            function guessDelimiter(input, newline, skipEmptyLines, comments) {
                for (var bestDelim, bestDelta, fieldCountPrevRow, delimChoices = [",", "\t", "|", ";", Papa.RECORD_SEP, Papa.UNIT_SEP], i = 0; i < delimChoices.length; i++) {
                    var delim = delimChoices[i], delta = 0, avgFieldCount = 0, emptyLinesCount = 0;
                    fieldCountPrevRow = void 0;
                    for (var preview = new Parser({
                        comments: comments,
                        delimiter: delim,
                        newline: newline,
                        preview: 10
                    }).parse(input), j = 0; j < preview.data.length; j++) if (skipEmptyLines && 1 === preview.data[j].length && 0 === preview.data[j][0].length) emptyLinesCount++; else {
                        var fieldCount = preview.data[j].length;
                        avgFieldCount += fieldCount, void 0 !== fieldCountPrevRow ? fieldCount > 1 && (delta += Math.abs(fieldCount - fieldCountPrevRow), fieldCountPrevRow = fieldCount) : fieldCountPrevRow = fieldCount
                    }
                    preview.data.length > 0 && (avgFieldCount /= preview.data.length - emptyLinesCount), (void 0 === bestDelta || delta < bestDelta) && avgFieldCount > 1.99 && (bestDelta = delta, bestDelim = delim)
                }
                return _config.delimiter = bestDelim, {successful: !!bestDelim, bestDelimiter: bestDelim}
            }

            function guessLineEndings(input) {
                input = input.substr(0, 1048576);
                var r = input.split("\r"), n = input.split("\n"),
                    nAppearsFirst = n.length > 1 && n[0].length < r[0].length;
                if (1 === r.length || nAppearsFirst) return "\n";
                for (var numWithN = 0, i = 0; i < r.length; i++) "\n" === r[i][0] && numWithN++;
                return numWithN >= r.length / 2 ? "\r\n" : "\r"
            }

            function addError(type, code, msg, row) {
                _results.errors.push({type: type, code: code, message: msg, row: row})
            }

            var _input, _parser, _delimiterError, FLOAT = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
                ISO_DATE = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
                self = this, _stepCounter = 0, _rowCounter = 0, _paused = !1, _aborted = !1, _fields = [],
                _results = {data: [], errors: [], meta: {}};
            if (isFunction(_config.step)) {
                var userStep = _config.step;
                _config.step = function (results) {
                    if (_results = results, needsHeaderRow()) processResults(); else {
                        if (processResults(), 0 === _results.data.length) return;
                        _stepCounter += results.data.length, _config.preview && _stepCounter > _config.preview ? _parser.abort() : userStep(_results, self)
                    }
                }
            }
            this.parse = function (input, baseIndex, ignoreLastRow) {
                if (_config.newline || (_config.newline = guessLineEndings(input)), _delimiterError = !1, _config.delimiter) isFunction(_config.delimiter) && (_config.delimiter = _config.delimiter(input), _results.meta.delimiter = _config.delimiter); else {
                    var delimGuess = guessDelimiter(input, _config.newline, _config.skipEmptyLines, _config.comments);
                    delimGuess.successful ? _config.delimiter = delimGuess.bestDelimiter : (_delimiterError = !0, _config.delimiter = Papa.DefaultDelimiter), _results.meta.delimiter = _config.delimiter
                }
                var parserConfig = copy(_config);
                return _config.preview && _config.header && parserConfig.preview++, _input = input, _parser = new Parser(parserConfig), _results = _parser.parse(_input, baseIndex, ignoreLastRow), processResults(), _paused ? {meta: {paused: !0}} : _results || {meta: {paused: !1}}
            }, this.paused = function () {
                return _paused
            }, this.pause = function () {
                _paused = !0, _parser.abort(), _input = _input.substr(_parser.getCharIndex())
            }, this.resume = function () {
                _paused = !1, self.streamer.parseChunk(_input, !0)
            }, this.aborted = function () {
                return _aborted
            }, this.abort = function () {
                _aborted = !0, _parser.abort(), _results.meta.aborted = !0, isFunction(_config.complete) && _config.complete(_results), _input = ""
            }
        }

        function Parser(config) {
            config = config || {};
            var quoteChar, delim = config.delimiter, newline = config.newline, comments = config.comments,
                step = config.step, preview = config.preview, fastMode = config.fastMode;
            quoteChar = void 0 === config.quoteChar ? '"' : config.quoteChar;
            var escapeChar = quoteChar;
            if (void 0 !== config.escapeChar && (escapeChar = config.escapeChar), ("string" != typeof delim || Papa.BAD_DELIMITERS.indexOf(delim) > -1) && (delim = ","), comments === delim) throw"Comment character same as delimiter";
            !0 === comments ? comments = "#" : ("string" != typeof comments || Papa.BAD_DELIMITERS.indexOf(comments) > -1) && (comments = !1), "\n" !== newline && "\r" !== newline && "\r\n" !== newline && (newline = "\n");
            var cursor = 0, aborted = !1;
            this.parse = function (input, baseIndex, ignoreLastRow) {
                function pushRow(row) {
                    data.push(row), lastCursor = cursor
                }

                function extraSpaces(index) {
                    var spaceLength = 0;
                    if (-1 !== index) {
                        var textBetweenClosingQuoteAndIndex = input.substring(quoteSearch + 1, index);
                        textBetweenClosingQuoteAndIndex && "" === textBetweenClosingQuoteAndIndex.trim() && (spaceLength = textBetweenClosingQuoteAndIndex.length)
                    }
                    return spaceLength
                }

                function finish(value) {
                    return ignoreLastRow ? returnable() : (void 0 === value && (value = input.substr(cursor)), row.push(value), cursor = inputLen, pushRow(row), stepIsFunction && doStep(), returnable())
                }

                function saveRow(newCursor) {
                    cursor = newCursor, pushRow(row), row = [], nextNewline = input.indexOf(newline, cursor)
                }

                function returnable(stopped) {
                    return {
                        data: data,
                        errors: errors,
                        meta: {
                            delimiter: delim,
                            linebreak: newline,
                            aborted: aborted,
                            truncated: !!stopped,
                            cursor: lastCursor + (baseIndex || 0)
                        }
                    }
                }

                function doStep() {
                    step(returnable()), data = [], errors = []
                }

                if ("string" != typeof input) throw"Input must be a string";
                var inputLen = input.length, delimLen = delim.length, newlineLen = newline.length,
                    commentsLen = comments.length, stepIsFunction = isFunction(step);
                cursor = 0;
                var data = [], errors = [], row = [], lastCursor = 0;
                if (!input) return returnable();
                if (fastMode || !1 !== fastMode && -1 === input.indexOf(quoteChar)) {
                    for (var rows = input.split(newline), i = 0; i < rows.length; i++) {
                        if (row = rows[i], cursor += row.length, i !== rows.length - 1) cursor += newline.length; else if (ignoreLastRow) return returnable();
                        if (!comments || row.substr(0, commentsLen) !== comments) {
                            if (stepIsFunction) {
                                if (data = [], pushRow(row.split(delim)), doStep(), aborted) return returnable()
                            } else pushRow(row.split(delim));
                            if (preview && i >= preview) return data = data.slice(0, preview), returnable(!0)
                        }
                    }
                    return returnable()
                }
                for (var quoteSearch, nextDelim = input.indexOf(delim, cursor), nextNewline = input.indexOf(newline, cursor), quoteCharRegex = new RegExp(escapeChar.replace(/[-[\]\/{}()*+?.\\^$|]/g, "\\$&") + quoteChar, "g"); ;) if (input[cursor] !== quoteChar) if (comments && 0 === row.length && input.substr(cursor, commentsLen) === comments) {
                    if (-1 === nextNewline) return returnable();
                    cursor = nextNewline + newlineLen, nextNewline = input.indexOf(newline, cursor), nextDelim = input.indexOf(delim, cursor)
                } else if (-1 !== nextDelim && (nextDelim < nextNewline || -1 === nextNewline)) row.push(input.substring(cursor, nextDelim)), cursor = nextDelim + delimLen, nextDelim = input.indexOf(delim, cursor); else {
                    if (-1 === nextNewline) break;
                    if (row.push(input.substring(cursor, nextNewline)), saveRow(nextNewline + newlineLen), stepIsFunction && (doStep(), aborted)) return returnable();
                    if (preview && data.length >= preview) return returnable(!0)
                } else for (quoteSearch = cursor, cursor++; ;) {
                    if (-1 === (quoteSearch = input.indexOf(quoteChar, quoteSearch + 1))) return ignoreLastRow || errors.push({
                        type: "Quotes",
                        code: "MissingQuotes",
                        message: "Quoted field unterminated",
                        row: data.length,
                        index: cursor
                    }), finish();
                    if (quoteSearch === inputLen - 1) {
                        var value = input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar);
                        return finish(value)
                    }
                    if (quoteChar !== escapeChar || input[quoteSearch + 1] !== escapeChar) {
                        if (quoteChar === escapeChar || 0 === quoteSearch || input[quoteSearch - 1] !== escapeChar) {
                            var spacesBetweenQuoteAndDelimiter = extraSpaces(nextDelim);
                            if (input[quoteSearch + 1 + spacesBetweenQuoteAndDelimiter] === delim) {
                                row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar)), cursor = quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen, nextDelim = input.indexOf(delim, cursor), nextNewline = input.indexOf(newline, cursor);
                                break
                            }
                            var spacesBetweenQuoteAndNewLine = extraSpaces(nextNewline);
                            if (input.substr(quoteSearch + 1 + spacesBetweenQuoteAndNewLine, newlineLen) === newline) {
                                if (row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar)), saveRow(quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen), nextDelim = input.indexOf(delim, cursor), stepIsFunction && (doStep(), aborted)) return returnable();
                                if (preview && data.length >= preview) return returnable(!0);
                                break
                            }
                            errors.push({
                                type: "Quotes",
                                code: "InvalidQuotes",
                                message: "Trailing quote on quoted field is malformed",
                                row: data.length,
                                index: cursor
                            }), quoteSearch++
                        }
                    } else quoteSearch++
                }
                return finish()
            }, this.abort = function () {
                aborted = !0
            }, this.getCharIndex = function () {
                return cursor
            }
        }

        function newWorker() {
            if (!Papa.WORKERS_SUPPORTED) return !1;
            if (!LOADED_SYNC && null === Papa.SCRIPT_PATH) throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");
            var workerUrl = Papa.SCRIPT_PATH || AUTO_SCRIPT_PATH;
            workerUrl += (-1 !== workerUrl.indexOf("?") ? "&" : "?") + "papaworker";
            var w = new global.Worker(workerUrl);
            return w.onmessage = mainThreadReceivedMessage, w.id = workerIdCounter++, workers[w.id] = w, w
        }

        function mainThreadReceivedMessage(e) {
            var msg = e.data, worker = workers[msg.workerId], aborted = !1;
            if (msg.error) worker.userError(msg.error, msg.file); else if (msg.results && msg.results.data) {
                var abort = function () {
                    aborted = !0, completeWorker(msg.workerId, {data: [], errors: [], meta: {aborted: !0}})
                }, handle = {abort: abort, pause: notImplemented, resume: notImplemented};
                if (isFunction(worker.userStep)) {
                    for (var i = 0; i < msg.results.data.length && (worker.userStep({
                        data: [msg.results.data[i]],
                        errors: msg.results.errors,
                        meta: msg.results.meta
                    }, handle), !aborted); i++) ;
                    delete msg.results
                } else isFunction(worker.userChunk) && (worker.userChunk(msg.results, handle, msg.file), delete msg.results)
            }
            msg.finished && !aborted && completeWorker(msg.workerId, msg.results)
        }

        function completeWorker(workerId, results) {
            var worker = workers[workerId];
            isFunction(worker.userComplete) && worker.userComplete(results), worker.terminate(), delete workers[workerId]
        }

        function notImplemented() {
            throw"Not implemented."
        }

        function workerThreadReceivedMessage(e) {
            var msg = e.data;
            if (void 0 === Papa.WORKER_ID && msg && (Papa.WORKER_ID = msg.workerId), "string" == typeof msg.input) global.postMessage({
                workerId: Papa.WORKER_ID,
                results: Papa.parse(msg.input, msg.config),
                finished: !0
            }); else if (global.File && msg.input instanceof File || msg.input instanceof Object) {
                var results = Papa.parse(msg.input, msg.config);
                results && global.postMessage({workerId: Papa.WORKER_ID, results: results, finished: !0})
            }
        }

        function copy(obj) {
            if ("object" != typeof obj || null === obj) return obj;
            var cpy = obj instanceof Array ? [] : {};
            for (var key in obj) cpy[key] = copy(obj[key]);
            return cpy
        }

        function bindFunction(f, self) {
            return function () {
                f.apply(self, arguments)
            }
        }

        function isFunction(func) {
            return "function" == typeof func
        }

        var AUTO_SCRIPT_PATH, global = function () {
                return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== global ? global : {}
            }(), IS_WORKER = !global.document && !!global.postMessage,
            IS_PAPA_WORKER = IS_WORKER && /(\?|&)papaworker(=|&|$)/.test(global.location.search), LOADED_SYNC = !1,
            workers = {}, workerIdCounter = 0, Papa = {};
        if (Papa.parse = CsvToJson, Papa.unparse = JsonToCsv, Papa.RECORD_SEP = String.fromCharCode(30), Papa.UNIT_SEP = String.fromCharCode(31), Papa.BYTE_ORDER_MARK = "\ufeff", Papa.BAD_DELIMITERS = ["\r", "\n", '"', Papa.BYTE_ORDER_MARK], Papa.WORKERS_SUPPORTED = !IS_WORKER && !!global.Worker, Papa.SCRIPT_PATH = null, Papa.NODE_STREAM_INPUT = 1, Papa.LocalChunkSize = 10485760, Papa.RemoteChunkSize = 5242880, Papa.DefaultDelimiter = ",", Papa.Parser = Parser, Papa.ParserHandle = ParserHandle, Papa.NetworkStreamer = NetworkStreamer, Papa.FileStreamer = FileStreamer, Papa.StringStreamer = StringStreamer, Papa.ReadableStreamStreamer = ReadableStreamStreamer, Papa.DuplexStreamStreamer = DuplexStreamStreamer, global.jQuery) {
            var $ = global.jQuery;
            $.fn.parse = function (options) {
                function parseNextFile() {
                    if (0 === queue.length) return void(isFunction(options.complete) && options.complete());
                    var f = queue[0];
                    if (isFunction(options.before)) {
                        var returned = options.before(f.file, f.inputElem);
                        if ("object" == typeof returned) {
                            if ("abort" === returned.action) return void error("AbortError", f.file, f.inputElem, returned.reason);
                            if ("skip" === returned.action) return void fileComplete();
                            "object" == typeof returned.config && (f.instanceConfig = $.extend(f.instanceConfig, returned.config))
                        } else if ("skip" === returned) return void fileComplete()
                    }
                    var userCompleteFunc = f.instanceConfig.complete;
                    f.instanceConfig.complete = function (results) {
                        isFunction(userCompleteFunc) && userCompleteFunc(results, f.file, f.inputElem), fileComplete()
                    }, Papa.parse(f.file, f.instanceConfig)
                }

                function error(name, file, elem, reason) {
                    isFunction(options.error) && options.error({name: name}, file, elem, reason)
                }

                function fileComplete() {
                    queue.splice(0, 1), parseNextFile()
                }

                var config = options.config || {}, queue = [];
                return this.each(function (idx) {
                    if ("INPUT" !== $(this).prop("tagName").toUpperCase() || "file" !== $(this).attr("type").toLowerCase() || !global.FileReader || !this.files || 0 === this.files.length) return !0;
                    for (var i = 0; i < this.files.length; i++) queue.push({
                        file: this.files[i],
                        inputElem: this,
                        instanceConfig: $.extend({}, config)
                    })
                }), parseNextFile(), this
            }
        }
        return IS_PAPA_WORKER ? global.onmessage = workerThreadReceivedMessage : Papa.WORKERS_SUPPORTED && (AUTO_SCRIPT_PATH = function () {
            var scripts = document.getElementsByTagName("script");
            return scripts.length ? scripts[scripts.length - 1].src : ""
        }(), document.body ? document.addEventListener("DOMContentLoaded", function () {
            LOADED_SYNC = !0
        }, !0) : LOADED_SYNC = !0), NetworkStreamer.prototype = Object.create(ChunkStreamer.prototype), NetworkStreamer.prototype.constructor = NetworkStreamer, FileStreamer.prototype = Object.create(ChunkStreamer.prototype), FileStreamer.prototype.constructor = FileStreamer, StringStreamer.prototype = Object.create(StringStreamer.prototype), StringStreamer.prototype.constructor = StringStreamer, ReadableStreamStreamer.prototype = Object.create(ChunkStreamer.prototype), ReadableStreamStreamer.prototype.constructor = ReadableStreamStreamer, DuplexStreamStreamer.prototype = Object.create(ChunkStreamer.prototype), DuplexStreamStreamer.prototype.constructor = DuplexStreamStreamer, Papa
    })
}, function (module, exports, __webpack_require__) {
    "use strict";
    (function (global, process) {
        function _uint8ArrayToBuffer(chunk) {
            return Buffer.from(chunk)
        }

        function _isUint8Array(obj) {
            return Buffer.isBuffer(obj) || obj instanceof OurUint8Array
        }

        function prependListener(emitter, event, fn) {
            if ("function" == typeof emitter.prependListener) return emitter.prependListener(event, fn);
            emitter._events && emitter._events[event] ? isArray(emitter._events[event]) ? emitter._events[event].unshift(fn) : emitter._events[event] = [fn, emitter._events[event]] : emitter.on(event, fn)
        }

        function ReadableState(options, stream) {
            Duplex = Duplex || __webpack_require__(17), options = options || {};
            var isDuplex = stream instanceof Duplex;
            this.objectMode = !!options.objectMode, isDuplex && (this.objectMode = this.objectMode || !!options.readableObjectMode);
            var hwm = options.highWaterMark, readableHwm = options.readableHighWaterMark,
                defaultHwm = this.objectMode ? 16 : 16384;
            this.highWaterMark = hwm || 0 === hwm ? hwm : isDuplex && (readableHwm || 0 === readableHwm) ? readableHwm : defaultHwm, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new BufferList, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = options.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, options.encoding && (StringDecoder || (StringDecoder = __webpack_require__(103).StringDecoder), this.decoder = new StringDecoder(options.encoding), this.encoding = options.encoding)
        }

        function Readable(options) {
            if (Duplex = Duplex || __webpack_require__(17), !(this instanceof Readable)) return new Readable(options);
            this._readableState = new ReadableState(options, this), this.readable = !0, options && ("function" == typeof options.read && (this._read = options.read), "function" == typeof options.destroy && (this._destroy = options.destroy)), Stream.call(this)
        }

        function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
            var state = stream._readableState;
            if (null === chunk) state.reading = !1, onEofChunk(stream, state); else {
                var er;
                skipChunkCheck || (er = chunkInvalid(state, chunk)), er ? stream.emit("error", er) : state.objectMode || chunk && chunk.length > 0 ? ("string" == typeof chunk || state.objectMode || Object.getPrototypeOf(chunk) === Buffer.prototype || (chunk = _uint8ArrayToBuffer(chunk)), addToFront ? state.endEmitted ? stream.emit("error", new Error("stream.unshift() after end event")) : addChunk(stream, state, chunk, !0) : state.ended ? stream.emit("error", new Error("stream.push() after EOF")) : (state.reading = !1, state.decoder && !encoding ? (chunk = state.decoder.write(chunk), state.objectMode || 0 !== chunk.length ? addChunk(stream, state, chunk, !1) : maybeReadMore(stream, state)) : addChunk(stream, state, chunk, !1))) : addToFront || (state.reading = !1)
            }
            return needMoreData(state)
        }

        function addChunk(stream, state, chunk, addToFront) {
            state.flowing && 0 === state.length && !state.sync ? (stream.emit("data", chunk), stream.read(0)) : (state.length += state.objectMode ? 1 : chunk.length, addToFront ? state.buffer.unshift(chunk) : state.buffer.push(chunk), state.needReadable && emitReadable(stream)), maybeReadMore(stream, state)
        }

        function chunkInvalid(state, chunk) {
            var er;
            return _isUint8Array(chunk) || "string" == typeof chunk || void 0 === chunk || state.objectMode || (er = new TypeError("Invalid non-string/buffer chunk")), er
        }

        function needMoreData(state) {
            return !state.ended && (state.needReadable || state.length < state.highWaterMark || 0 === state.length)
        }

        function computeNewHighWaterMark(n) {
            return n >= MAX_HWM ? n = MAX_HWM : (n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++), n
        }

        function howMuchToRead(n, state) {
            return n <= 0 || 0 === state.length && state.ended ? 0 : state.objectMode ? 1 : n !== n ? state.flowing && state.length ? state.buffer.head.data.length : state.length : (n > state.highWaterMark && (state.highWaterMark = computeNewHighWaterMark(n)), n <= state.length ? n : state.ended ? state.length : (state.needReadable = !0, 0))
        }

        function onEofChunk(stream, state) {
            if (!state.ended) {
                if (state.decoder) {
                    var chunk = state.decoder.end();
                    chunk && chunk.length && (state.buffer.push(chunk), state.length += state.objectMode ? 1 : chunk.length)
                }
                state.ended = !0, emitReadable(stream)
            }
        }

        function emitReadable(stream) {
            var state = stream._readableState;
            state.needReadable = !1, state.emittedReadable || (debug("emitReadable", state.flowing), state.emittedReadable = !0, state.sync ? pna.nextTick(emitReadable_, stream) : emitReadable_(stream))
        }

        function emitReadable_(stream) {
            debug("emit readable"), stream.emit("readable"), flow(stream)
        }

        function maybeReadMore(stream, state) {
            state.readingMore || (state.readingMore = !0, pna.nextTick(maybeReadMore_, stream, state))
        }

        function maybeReadMore_(stream, state) {
            for (var len = state.length; !state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark && (debug("maybeReadMore read 0"), stream.read(0), len !== state.length);) len = state.length;
            state.readingMore = !1
        }

        function pipeOnDrain(src) {
            return function () {
                var state = src._readableState;
                debug("pipeOnDrain", state.awaitDrain), state.awaitDrain && state.awaitDrain--, 0 === state.awaitDrain && EElistenerCount(src, "data") && (state.flowing = !0, flow(src))
            }
        }

        function nReadingNextTick(self) {
            debug("readable nexttick read 0"), self.read(0)
        }

        function resume(stream, state) {
            state.resumeScheduled || (state.resumeScheduled = !0, pna.nextTick(resume_, stream, state))
        }

        function resume_(stream, state) {
            state.reading || (debug("resume read 0"), stream.read(0)), state.resumeScheduled = !1, state.awaitDrain = 0, stream.emit("resume"), flow(stream), state.flowing && !state.reading && stream.read(0)
        }

        function flow(stream) {
            var state = stream._readableState;
            for (debug("flow", state.flowing); state.flowing && null !== stream.read();) ;
        }

        function fromList(n, state) {
            if (0 === state.length) return null;
            var ret;
            return state.objectMode ? ret = state.buffer.shift() : !n || n >= state.length ? (ret = state.decoder ? state.buffer.join("") : 1 === state.buffer.length ? state.buffer.head.data : state.buffer.concat(state.length), state.buffer.clear()) : ret = fromListPartial(n, state.buffer, state.decoder), ret
        }

        function fromListPartial(n, list, hasStrings) {
            var ret;
            return n < list.head.data.length ? (ret = list.head.data.slice(0, n), list.head.data = list.head.data.slice(n)) : ret = n === list.head.data.length ? list.shift() : hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list), ret
        }

        function copyFromBufferString(n, list) {
            var p = list.head, c = 1, ret = p.data;
            for (n -= ret.length; p = p.next;) {
                var str = p.data, nb = n > str.length ? str.length : n;
                if (nb === str.length ? ret += str : ret += str.slice(0, n), 0 === (n -= nb)) {
                    nb === str.length ? (++c, p.next ? list.head = p.next : list.head = list.tail = null) : (list.head = p, p.data = str.slice(nb));
                    break
                }
                ++c
            }
            return list.length -= c, ret
        }

        function copyFromBuffer(n, list) {
            var ret = Buffer.allocUnsafe(n), p = list.head, c = 1;
            for (p.data.copy(ret), n -= p.data.length; p = p.next;) {
                var buf = p.data, nb = n > buf.length ? buf.length : n;
                if (buf.copy(ret, ret.length - n, 0, nb), 0 === (n -= nb)) {
                    nb === buf.length ? (++c, p.next ? list.head = p.next : list.head = list.tail = null) : (list.head = p, p.data = buf.slice(nb));
                    break
                }
                ++c
            }
            return list.length -= c, ret
        }

        function endReadable(stream) {
            var state = stream._readableState;
            if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
            state.endEmitted || (state.ended = !0, pna.nextTick(endReadableNT, state, stream))
        }

        function endReadableNT(state, stream) {
            state.endEmitted || 0 !== state.length || (state.endEmitted = !0, stream.readable = !1, stream.emit("end"))
        }

        function indexOf(xs, x) {
            for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
            return -1
        }

        var pna = __webpack_require__(45);
        module.exports = Readable;
        var Duplex, isArray = __webpack_require__(99);
        Readable.ReadableState = ReadableState;
        var EElistenerCount = (__webpack_require__(66).EventEmitter, function (emitter, type) {
                return emitter.listeners(type).length
            }), Stream = __webpack_require__(100), Buffer = __webpack_require__(46).Buffer,
            OurUint8Array = global.Uint8Array || function () {
            }, util = __webpack_require__(31);
        util.inherits = __webpack_require__(21);
        var debugUtil = __webpack_require__(175), debug = void 0;
        debug = debugUtil && debugUtil.debuglog ? debugUtil.debuglog("stream") : function () {
        };
        var StringDecoder, BufferList = __webpack_require__(176), destroyImpl = __webpack_require__(102);
        util.inherits(Readable, Stream);
        var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
        Object.defineProperty(Readable.prototype, "destroyed", {
            get: function () {
                return void 0 !== this._readableState && this._readableState.destroyed
            }, set: function (value) {
                this._readableState && (this._readableState.destroyed = value)
            }
        }), Readable.prototype.destroy = destroyImpl.destroy, Readable.prototype._undestroy = destroyImpl.undestroy, Readable.prototype._destroy = function (err, cb) {
            this.push(null), cb(err)
        }, Readable.prototype.push = function (chunk, encoding) {
            var skipChunkCheck, state = this._readableState;
            return state.objectMode ? skipChunkCheck = !0 : "string" == typeof chunk && (encoding = encoding || state.defaultEncoding, encoding !== state.encoding && (chunk = Buffer.from(chunk, encoding), encoding = ""), skipChunkCheck = !0), readableAddChunk(this, chunk, encoding, !1, skipChunkCheck)
        }, Readable.prototype.unshift = function (chunk) {
            return readableAddChunk(this, chunk, null, !0, !1)
        }, Readable.prototype.isPaused = function () {
            return !1 === this._readableState.flowing
        }, Readable.prototype.setEncoding = function (enc) {
            return StringDecoder || (StringDecoder = __webpack_require__(103).StringDecoder), this._readableState.decoder = new StringDecoder(enc), this._readableState.encoding = enc, this
        };
        var MAX_HWM = 8388608;
        Readable.prototype.read = function (n) {
            debug("read", n), n = parseInt(n, 10);
            var state = this._readableState, nOrig = n;
            if (0 !== n && (state.emittedReadable = !1), 0 === n && state.needReadable && (state.length >= state.highWaterMark || state.ended)) return debug("read: emitReadable", state.length, state.ended), 0 === state.length && state.ended ? endReadable(this) : emitReadable(this), null;
            if (0 === (n = howMuchToRead(n, state)) && state.ended) return 0 === state.length && endReadable(this), null;
            var doRead = state.needReadable;
            debug("need readable", doRead), (0 === state.length || state.length - n < state.highWaterMark) && (doRead = !0, debug("length less than watermark", doRead)), state.ended || state.reading ? (doRead = !1, debug("reading or ended", doRead)) : doRead && (debug("do read"), state.reading = !0, state.sync = !0, 0 === state.length && (state.needReadable = !0), this._read(state.highWaterMark), state.sync = !1, state.reading || (n = howMuchToRead(nOrig, state)));
            var ret;
            return ret = n > 0 ? fromList(n, state) : null, null === ret ? (state.needReadable = !0, n = 0) : state.length -= n, 0 === state.length && (state.ended || (state.needReadable = !0), nOrig !== n && state.ended && endReadable(this)), null !== ret && this.emit("data", ret), ret
        }, Readable.prototype._read = function (n) {
            this.emit("error", new Error("_read() is not implemented"))
        }, Readable.prototype.pipe = function (dest, pipeOpts) {
            function onunpipe(readable, unpipeInfo) {
                debug("onunpipe"), readable === src && unpipeInfo && !1 === unpipeInfo.hasUnpiped && (unpipeInfo.hasUnpiped = !0, cleanup())
            }

            function onend() {
                debug("onend"), dest.end()
            }

            function cleanup() {
                debug("cleanup"), dest.removeListener("close", onclose), dest.removeListener("finish", onfinish), dest.removeListener("drain", ondrain), dest.removeListener("error", onerror), dest.removeListener("unpipe", onunpipe), src.removeListener("end", onend), src.removeListener("end", unpipe), src.removeListener("data", ondata), cleanedUp = !0, !state.awaitDrain || dest._writableState && !dest._writableState.needDrain || ondrain()
            }

            function ondata(chunk) {
                debug("ondata"), increasedAwaitDrain = !1, !1 !== dest.write(chunk) || increasedAwaitDrain || ((1 === state.pipesCount && state.pipes === dest || state.pipesCount > 1 && -1 !== indexOf(state.pipes, dest)) && !cleanedUp && (debug("false write response, pause", src._readableState.awaitDrain), src._readableState.awaitDrain++, increasedAwaitDrain = !0), src.pause())
            }

            function onerror(er) {
                debug("onerror", er), unpipe(), dest.removeListener("error", onerror), 0 === EElistenerCount(dest, "error") && dest.emit("error", er)
            }

            function onclose() {
                dest.removeListener("finish", onfinish), unpipe()
            }

            function onfinish() {
                debug("onfinish"), dest.removeListener("close", onclose), unpipe()
            }

            function unpipe() {
                debug("unpipe"), src.unpipe(dest)
            }

            var src = this, state = this._readableState;
            switch (state.pipesCount) {
                case 0:
                    state.pipes = dest;
                    break;
                case 1:
                    state.pipes = [state.pipes, dest];
                    break;
                default:
                    state.pipes.push(dest)
            }
            state.pipesCount += 1, debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
            var doEnd = (!pipeOpts || !1 !== pipeOpts.end) && dest !== process.stdout && dest !== process.stderr,
                endFn = doEnd ? onend : unpipe;
            state.endEmitted ? pna.nextTick(endFn) : src.once("end", endFn), dest.on("unpipe", onunpipe);
            var ondrain = pipeOnDrain(src);
            dest.on("drain", ondrain);
            var cleanedUp = !1, increasedAwaitDrain = !1;
            return src.on("data", ondata), prependListener(dest, "error", onerror), dest.once("close", onclose), dest.once("finish", onfinish), dest.emit("pipe", src), state.flowing || (debug("pipe resume"), src.resume()), dest
        }, Readable.prototype.unpipe = function (dest) {
            var state = this._readableState, unpipeInfo = {hasUnpiped: !1};
            if (0 === state.pipesCount) return this;
            if (1 === state.pipesCount) return dest && dest !== state.pipes ? this : (dest || (dest = state.pipes), state.pipes = null, state.pipesCount = 0, state.flowing = !1, dest && dest.emit("unpipe", this, unpipeInfo), this);
            if (!dest) {
                var dests = state.pipes, len = state.pipesCount;
                state.pipes = null, state.pipesCount = 0, state.flowing = !1;
                for (var i = 0; i < len; i++) dests[i].emit("unpipe", this, unpipeInfo);
                return this
            }
            var index = indexOf(state.pipes, dest);
            return -1 === index ? this : (state.pipes.splice(index, 1), state.pipesCount -= 1, 1 === state.pipesCount && (state.pipes = state.pipes[0]), dest.emit("unpipe", this, unpipeInfo), this)
        }, Readable.prototype.on = function (ev, fn) {
            var res = Stream.prototype.on.call(this, ev, fn);
            if ("data" === ev) !1 !== this._readableState.flowing && this.resume(); else if ("readable" === ev) {
                var state = this._readableState;
                state.endEmitted || state.readableListening || (state.readableListening = state.needReadable = !0, state.emittedReadable = !1, state.reading ? state.length && emitReadable(this) : pna.nextTick(nReadingNextTick, this))
            }
            return res
        }, Readable.prototype.addListener = Readable.prototype.on, Readable.prototype.resume = function () {
            var state = this._readableState;
            return state.flowing || (debug("resume"), state.flowing = !0, resume(this, state)), this
        }, Readable.prototype.pause = function () {
            return debug("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (debug("pause"), this._readableState.flowing = !1, this.emit("pause")), this
        }, Readable.prototype.wrap = function (stream) {
            var _this = this, state = this._readableState, paused = !1;
            stream.on("end", function () {
                if (debug("wrapped end"), state.decoder && !state.ended) {
                    var chunk = state.decoder.end();
                    chunk && chunk.length && _this.push(chunk)
                }
                _this.push(null)
            }), stream.on("data", function (chunk) {
                if (debug("wrapped data"), state.decoder && (chunk = state.decoder.write(chunk)), (!state.objectMode || null !== chunk && void 0 !== chunk) && (state.objectMode || chunk && chunk.length)) {
                    _this.push(chunk) || (paused = !0, stream.pause())
                }
            });
            for (var i in stream) void 0 === this[i] && "function" == typeof stream[i] && (this[i] = function (method) {
                return function () {
                    return stream[method].apply(stream, arguments)
                }
            }(i));
            for (var n = 0; n < kProxyEvents.length; n++) stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
            return this._read = function (n) {
                debug("wrapped _read", n), paused && (paused = !1, stream.resume())
            }, this
        }, Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
            enumerable: !1, get: function () {
                return this._readableState.highWaterMark
            }
        }), Readable._fromList = fromList
    }).call(exports, __webpack_require__(11), __webpack_require__(19))
}, function (module, exports) {
    var toString = {}.toString;
    module.exports = Array.isArray || function (arr) {
        return "[object Array]" == toString.call(arr)
    }
}, function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(66).EventEmitter
}, function (module, exports, __webpack_require__) {
    "use strict";
    (function (global) {
        function kMaxLength() {
            return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function createBuffer(that, length) {
            if (kMaxLength() < length) throw new RangeError("Invalid typed array length");
            return Buffer.TYPED_ARRAY_SUPPORT ? (that = new Uint8Array(length), that.__proto__ = Buffer.prototype) : (null === that && (that = new Buffer(length)), that.length = length), that
        }

        function Buffer(arg, encodingOrOffset, length) {
            if (!(Buffer.TYPED_ARRAY_SUPPORT || this instanceof Buffer)) return new Buffer(arg, encodingOrOffset, length);
            if ("number" == typeof arg) {
                if ("string" == typeof encodingOrOffset) throw new Error("If encoding is specified then the first argument must be a string");
                return allocUnsafe(this, arg)
            }
            return from(this, arg, encodingOrOffset, length)
        }

        function from(that, value, encodingOrOffset, length) {
            if ("number" == typeof value) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && value instanceof ArrayBuffer ? fromArrayBuffer(that, value, encodingOrOffset, length) : "string" == typeof value ? fromString(that, value, encodingOrOffset) : fromObject(that, value)
        }

        function assertSize(size) {
            if ("number" != typeof size) throw new TypeError('"size" argument must be a number');
            if (size < 0) throw new RangeError('"size" argument must not be negative')
        }

        function alloc(that, size, fill, encoding) {
            return assertSize(size), size <= 0 ? createBuffer(that, size) : void 0 !== fill ? "string" == typeof encoding ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill) : createBuffer(that, size)
        }

        function allocUnsafe(that, size) {
            if (assertSize(size), that = createBuffer(that, size < 0 ? 0 : 0 | checked(size)), !Buffer.TYPED_ARRAY_SUPPORT) for (var i = 0; i < size; ++i) that[i] = 0;
            return that
        }

        function fromString(that, string, encoding) {
            if ("string" == typeof encoding && "" !== encoding || (encoding = "utf8"), !Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
            var length = 0 | byteLength(string, encoding);
            that = createBuffer(that, length);
            var actual = that.write(string, encoding);
            return actual !== length && (that = that.slice(0, actual)), that
        }

        function fromArrayLike(that, array) {
            var length = array.length < 0 ? 0 : 0 | checked(array.length);
            that = createBuffer(that, length);
            for (var i = 0; i < length; i += 1) that[i] = 255 & array[i];
            return that
        }

        function fromArrayBuffer(that, array, byteOffset, length) {
            if (array.byteLength, byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("'offset' is out of bounds");
            if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("'length' is out of bounds");
            return array = void 0 === byteOffset && void 0 === length ? new Uint8Array(array) : void 0 === length ? new Uint8Array(array, byteOffset) : new Uint8Array(array, byteOffset, length), Buffer.TYPED_ARRAY_SUPPORT ? (that = array, that.__proto__ = Buffer.prototype) : that = fromArrayLike(that, array), that
        }

        function fromObject(that, obj) {
            if (Buffer.isBuffer(obj)) {
                var len = 0 | checked(obj.length);
                return that = createBuffer(that, len), 0 === that.length ? that : (obj.copy(that, 0, 0, len), that)
            }
            if (obj) {
                if ("undefined" != typeof ArrayBuffer && obj.buffer instanceof ArrayBuffer || "length" in obj) return "number" != typeof obj.length || isnan(obj.length) ? createBuffer(that, 0) : fromArrayLike(that, obj);
                if ("Buffer" === obj.type && isArray(obj.data)) return fromArrayLike(that, obj.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }

        function checked(length) {
            if (length >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
            return 0 | length
        }

        function SlowBuffer(length) {
            return +length != length && (length = 0), Buffer.alloc(+length)
        }

        function byteLength(string, encoding) {
            if (Buffer.isBuffer(string)) return string.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) return string.byteLength;
            "string" != typeof string && (string = "" + string);
            var len = string.length;
            if (0 === len) return 0;
            for (var loweredCase = !1; ;) switch (encoding) {
                case"ascii":
                case"latin1":
                case"binary":
                    return len;
                case"utf8":
                case"utf-8":
                case void 0:
                    return utf8ToBytes(string).length;
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return 2 * len;
                case"hex":
                    return len >>> 1;
                case"base64":
                    return base64ToBytes(string).length;
                default:
                    if (loweredCase) return utf8ToBytes(string).length;
                    encoding = ("" + encoding).toLowerCase(), loweredCase = !0
            }
        }

        function slowToString(encoding, start, end) {
            var loweredCase = !1;
            if ((void 0 === start || start < 0) && (start = 0), start > this.length) return "";
            if ((void 0 === end || end > this.length) && (end = this.length), end <= 0) return "";
            if (end >>>= 0, start >>>= 0, end <= start) return "";
            for (encoding || (encoding = "utf8"); ;) switch (encoding) {
                case"hex":
                    return hexSlice(this, start, end);
                case"utf8":
                case"utf-8":
                    return utf8Slice(this, start, end);
                case"ascii":
                    return asciiSlice(this, start, end);
                case"latin1":
                case"binary":
                    return latin1Slice(this, start, end);
                case"base64":
                    return base64Slice(this, start, end);
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return utf16leSlice(this, start, end);
                default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = (encoding + "").toLowerCase(), loweredCase = !0
            }
        }

        function swap(b, n, m) {
            var i = b[n];
            b[n] = b[m], b[m] = i
        }

        function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
            if (0 === buffer.length) return -1;
            if ("string" == typeof byteOffset ? (encoding = byteOffset, byteOffset = 0) : byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648), byteOffset = +byteOffset, isNaN(byteOffset) && (byteOffset = dir ? 0 : buffer.length - 1), byteOffset < 0 && (byteOffset = buffer.length + byteOffset), byteOffset >= buffer.length) {
                if (dir) return -1;
                byteOffset = buffer.length - 1
            } else if (byteOffset < 0) {
                if (!dir) return -1;
                byteOffset = 0
            }
            if ("string" == typeof val && (val = Buffer.from(val, encoding)), Buffer.isBuffer(val)) return 0 === val.length ? -1 : arrayIndexOf(buffer, val, byteOffset, encoding, dir);
            if ("number" == typeof val) return val &= 255, Buffer.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset) : arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
            throw new TypeError("val must be string, number or Buffer")
        }

        function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
            function read(buf, i) {
                return 1 === indexSize ? buf[i] : buf.readUInt16BE(i * indexSize)
            }

            var indexSize = 1, arrLength = arr.length, valLength = val.length;
            if (void 0 !== encoding && ("ucs2" === (encoding = String(encoding).toLowerCase()) || "ucs-2" === encoding || "utf16le" === encoding || "utf-16le" === encoding)) {
                if (arr.length < 2 || val.length < 2) return -1;
                indexSize = 2, arrLength /= 2, valLength /= 2, byteOffset /= 2
            }
            var i;
            if (dir) {
                var foundIndex = -1;
                for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, -1 === foundIndex ? 0 : i - foundIndex)) {
                    if (-1 === foundIndex && (foundIndex = i), i - foundIndex + 1 === valLength) return foundIndex * indexSize
                } else -1 !== foundIndex && (i -= i - foundIndex), foundIndex = -1
            } else for (byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength), i = byteOffset; i >= 0; i--) {
                for (var found = !0, j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
                    found = !1;
                    break
                }
                if (found) return i
            }
            return -1
        }

        function hexWrite(buf, string, offset, length) {
            offset = Number(offset) || 0;
            var remaining = buf.length - offset;
            length ? (length = Number(length)) > remaining && (length = remaining) : length = remaining;
            var strLen = string.length;
            if (strLen % 2 != 0) throw new TypeError("Invalid hex string");
            length > strLen / 2 && (length = strLen / 2);
            for (var i = 0; i < length; ++i) {
                var parsed = parseInt(string.substr(2 * i, 2), 16);
                if (isNaN(parsed)) return i;
                buf[offset + i] = parsed
            }
            return i
        }

        function utf8Write(buf, string, offset, length) {
            return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
        }

        function asciiWrite(buf, string, offset, length) {
            return blitBuffer(asciiToBytes(string), buf, offset, length)
        }

        function latin1Write(buf, string, offset, length) {
            return asciiWrite(buf, string, offset, length)
        }

        function base64Write(buf, string, offset, length) {
            return blitBuffer(base64ToBytes(string), buf, offset, length)
        }

        function ucs2Write(buf, string, offset, length) {
            return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
        }

        function base64Slice(buf, start, end) {
            return 0 === start && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end))
        }

        function utf8Slice(buf, start, end) {
            end = Math.min(buf.length, end);
            for (var res = [], i = start; i < end;) {
                var firstByte = buf[i], codePoint = null,
                    bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                if (i + bytesPerSequence <= end) {
                    var secondByte, thirdByte, fourthByte, tempCodePoint;
                    switch (bytesPerSequence) {
                        case 1:
                            firstByte < 128 && (codePoint = firstByte);
                            break;
                        case 2:
                            secondByte = buf[i + 1], 128 == (192 & secondByte) && (tempCodePoint = (31 & firstByte) << 6 | 63 & secondByte) > 127 && (codePoint = tempCodePoint);
                            break;
                        case 3:
                            secondByte = buf[i + 1], thirdByte = buf[i + 2], 128 == (192 & secondByte) && 128 == (192 & thirdByte) && (tempCodePoint = (15 & firstByte) << 12 | (63 & secondByte) << 6 | 63 & thirdByte) > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint);
                            break;
                        case 4:
                            secondByte = buf[i + 1], thirdByte = buf[i + 2], fourthByte = buf[i + 3], 128 == (192 & secondByte) && 128 == (192 & thirdByte) && 128 == (192 & fourthByte) && (tempCodePoint = (15 & firstByte) << 18 | (63 & secondByte) << 12 | (63 & thirdByte) << 6 | 63 & fourthByte) > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint)
                    }
                }
                null === codePoint ? (codePoint = 65533, bytesPerSequence = 1) : codePoint > 65535 && (codePoint -= 65536, res.push(codePoint >>> 10 & 1023 | 55296), codePoint = 56320 | 1023 & codePoint), res.push(codePoint), i += bytesPerSequence
            }
            return decodeCodePointsArray(res)
        }

        function decodeCodePointsArray(codePoints) {
            var len = codePoints.length;
            if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
            for (var res = "", i = 0; i < len;) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
            return res
        }

        function asciiSlice(buf, start, end) {
            var ret = "";
            end = Math.min(buf.length, end);
            for (var i = start; i < end; ++i) ret += String.fromCharCode(127 & buf[i]);
            return ret
        }

        function latin1Slice(buf, start, end) {
            var ret = "";
            end = Math.min(buf.length, end);
            for (var i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
            return ret
        }

        function hexSlice(buf, start, end) {
            var len = buf.length;
            (!start || start < 0) && (start = 0), (!end || end < 0 || end > len) && (end = len);
            for (var out = "", i = start; i < end; ++i) out += toHex(buf[i]);
            return out
        }

        function utf16leSlice(buf, start, end) {
            for (var bytes = buf.slice(start, end), res = "", i = 0; i < bytes.length; i += 2) res += String.fromCharCode(bytes[i] + 256 * bytes[i + 1]);
            return res
        }

        function checkOffset(offset, ext, length) {
            if (offset % 1 != 0 || offset < 0) throw new RangeError("offset is not uint");
            if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length")
        }

        function checkInt(buf, value, offset, ext, max, min) {
            if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
            if (offset + ext > buf.length) throw new RangeError("Index out of range")
        }

        function objectWriteUInt16(buf, value, offset, littleEndian) {
            value < 0 && (value = 65535 + value + 1);
            for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> 8 * (littleEndian ? i : 1 - i)
        }

        function objectWriteUInt32(buf, value, offset, littleEndian) {
            value < 0 && (value = 4294967295 + value + 1);
            for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) buf[offset + i] = value >>> 8 * (littleEndian ? i : 3 - i) & 255
        }

        function checkIEEE754(buf, value, offset, ext, max, min) {
            if (offset + ext > buf.length) throw new RangeError("Index out of range");
            if (offset < 0) throw new RangeError("Index out of range")
        }

        function writeFloat(buf, value, offset, littleEndian, noAssert) {
            return noAssert || checkIEEE754(buf, value, offset, 4, 3.4028234663852886e38, -3.4028234663852886e38), ieee754.write(buf, value, offset, littleEndian, 23, 4), offset + 4
        }

        function writeDouble(buf, value, offset, littleEndian, noAssert) {
            return noAssert || checkIEEE754(buf, value, offset, 8, 1.7976931348623157e308, -1.7976931348623157e308), ieee754.write(buf, value, offset, littleEndian, 52, 8), offset + 8
        }

        function base64clean(str) {
            if (str = stringtrim(str).replace(INVALID_BASE64_RE, ""), str.length < 2) return "";
            for (; str.length % 4 != 0;) str += "=";
            return str
        }

        function stringtrim(str) {
            return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "")
        }

        function toHex(n) {
            return n < 16 ? "0" + n.toString(16) : n.toString(16)
        }

        function utf8ToBytes(string, units) {
            units = units || 1 / 0;
            for (var codePoint, length = string.length, leadSurrogate = null, bytes = [], i = 0; i < length; ++i) {
                if ((codePoint = string.charCodeAt(i)) > 55295 && codePoint < 57344) {
                    if (!leadSurrogate) {
                        if (codePoint > 56319) {
                            (units -= 3) > -1 && bytes.push(239, 191, 189);
                            continue
                        }
                        if (i + 1 === length) {
                            (units -= 3) > -1 && bytes.push(239, 191, 189);
                            continue
                        }
                        leadSurrogate = codePoint;
                        continue
                    }
                    if (codePoint < 56320) {
                        (units -= 3) > -1 && bytes.push(239, 191, 189), leadSurrogate = codePoint;
                        continue
                    }
                    codePoint = 65536 + (leadSurrogate - 55296 << 10 | codePoint - 56320)
                } else leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
                if (leadSurrogate = null, codePoint < 128) {
                    if ((units -= 1) < 0) break;
                    bytes.push(codePoint)
                } else if (codePoint < 2048) {
                    if ((units -= 2) < 0) break;
                    bytes.push(codePoint >> 6 | 192, 63 & codePoint | 128)
                } else if (codePoint < 65536) {
                    if ((units -= 3) < 0) break;
                    bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, 63 & codePoint | 128)
                } else {
                    if (!(codePoint < 1114112)) throw new Error("Invalid code point");
                    if ((units -= 4) < 0) break;
                    bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, 63 & codePoint | 128)
                }
            }
            return bytes
        }

        function asciiToBytes(str) {
            for (var byteArray = [], i = 0; i < str.length; ++i) byteArray.push(255 & str.charCodeAt(i));
            return byteArray
        }

        function utf16leToBytes(str, units) {
            for (var c, hi, lo, byteArray = [], i = 0; i < str.length && !((units -= 2) < 0); ++i) c = str.charCodeAt(i), hi = c >> 8, lo = c % 256, byteArray.push(lo), byteArray.push(hi);
            return byteArray
        }

        function base64ToBytes(str) {
            return base64.toByteArray(base64clean(str))
        }

        function blitBuffer(src, dst, offset, length) {
            for (var i = 0; i < length && !(i + offset >= dst.length || i >= src.length); ++i) dst[i + offset] = src[i];
            return i
        }

        function isnan(val) {
            return val !== val
        }

        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
        var base64 = __webpack_require__(173), ieee754 = __webpack_require__(174), isArray = __webpack_require__(99);
        exports.Buffer = Buffer, exports.SlowBuffer = SlowBuffer, exports.INSPECT_MAX_BYTES = 50, Buffer.TYPED_ARRAY_SUPPORT = void 0 !== global.TYPED_ARRAY_SUPPORT ? global.TYPED_ARRAY_SUPPORT : function () {
            try {
                var arr = new Uint8Array(1);
                return arr.__proto__ = {
                    __proto__: Uint8Array.prototype, foo: function () {
                        return 42
                    }
                }, 42 === arr.foo() && "function" == typeof arr.subarray && 0 === arr.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), exports.kMaxLength = kMaxLength(), Buffer.poolSize = 8192, Buffer._augment = function (arr) {
            return arr.__proto__ = Buffer.prototype, arr
        }, Buffer.from = function (value, encodingOrOffset, length) {
            return from(null, value, encodingOrOffset, length)
        }, Buffer.TYPED_ARRAY_SUPPORT && (Buffer.prototype.__proto__ = Uint8Array.prototype, Buffer.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
            value: null,
            configurable: !0
        })), Buffer.alloc = function (size, fill, encoding) {
            return alloc(null, size, fill, encoding)
        }, Buffer.allocUnsafe = function (size) {
            return allocUnsafe(null, size)
        }, Buffer.allocUnsafeSlow = function (size) {
            return allocUnsafe(null, size)
        }, Buffer.isBuffer = function (b) {
            return !(null == b || !b._isBuffer)
        }, Buffer.compare = function (a, b) {
            if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError("Arguments must be Buffers");
            if (a === b) return 0;
            for (var x = a.length, y = b.length, i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
                x = a[i], y = b[i];
                break
            }
            return x < y ? -1 : y < x ? 1 : 0
        }, Buffer.isEncoding = function (encoding) {
            switch (String(encoding).toLowerCase()) {
                case"hex":
                case"utf8":
                case"utf-8":
                case"ascii":
                case"latin1":
                case"binary":
                case"base64":
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, Buffer.concat = function (list, length) {
            if (!isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === list.length) return Buffer.alloc(0);
            var i;
            if (void 0 === length) for (length = 0, i = 0; i < list.length; ++i) length += list[i].length;
            var buffer = Buffer.allocUnsafe(length), pos = 0;
            for (i = 0; i < list.length; ++i) {
                var buf = list[i];
                if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
                buf.copy(buffer, pos), pos += buf.length
            }
            return buffer
        }, Buffer.byteLength = byteLength, Buffer.prototype._isBuffer = !0, Buffer.prototype.swap16 = function () {
            var len = this.length;
            if (len % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var i = 0; i < len; i += 2) swap(this, i, i + 1);
            return this
        }, Buffer.prototype.swap32 = function () {
            var len = this.length;
            if (len % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var i = 0; i < len; i += 4) swap(this, i, i + 3), swap(this, i + 1, i + 2);
            return this
        }, Buffer.prototype.swap64 = function () {
            var len = this.length;
            if (len % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var i = 0; i < len; i += 8) swap(this, i, i + 7), swap(this, i + 1, i + 6), swap(this, i + 2, i + 5), swap(this, i + 3, i + 4);
            return this
        }, Buffer.prototype.toString = function () {
            var length = 0 | this.length;
            return 0 === length ? "" : 0 === arguments.length ? utf8Slice(this, 0, length) : slowToString.apply(this, arguments)
        }, Buffer.prototype.equals = function (b) {
            if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
            return this === b || 0 === Buffer.compare(this, b)
        }, Buffer.prototype.inspect = function () {
            var str = "", max = exports.INSPECT_MAX_BYTES;
            return this.length > 0 && (str = this.toString("hex", 0, max).match(/.{2}/g).join(" "), this.length > max && (str += " ... ")), "<Buffer " + str + ">"
        }, Buffer.prototype.compare = function (target, start, end, thisStart, thisEnd) {
            if (!Buffer.isBuffer(target)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === start && (start = 0), void 0 === end && (end = target ? target.length : 0), void 0 === thisStart && (thisStart = 0), void 0 === thisEnd && (thisEnd = this.length), start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
            if (thisStart >= thisEnd && start >= end) return 0;
            if (thisStart >= thisEnd) return -1;
            if (start >= end) return 1;
            if (start >>>= 0, end >>>= 0, thisStart >>>= 0, thisEnd >>>= 0, this === target) return 0;
            for (var x = thisEnd - thisStart, y = end - start, len = Math.min(x, y), thisCopy = this.slice(thisStart, thisEnd), targetCopy = target.slice(start, end), i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
                x = thisCopy[i], y = targetCopy[i];
                break
            }
            return x < y ? -1 : y < x ? 1 : 0
        }, Buffer.prototype.includes = function (val, byteOffset, encoding) {
            return -1 !== this.indexOf(val, byteOffset, encoding)
        }, Buffer.prototype.indexOf = function (val, byteOffset, encoding) {
            return bidirectionalIndexOf(this, val, byteOffset, encoding, !0)
        }, Buffer.prototype.lastIndexOf = function (val, byteOffset, encoding) {
            return bidirectionalIndexOf(this, val, byteOffset, encoding, !1)
        }, Buffer.prototype.write = function (string, offset, length, encoding) {
            if (void 0 === offset) encoding = "utf8", length = this.length, offset = 0; else if (void 0 === length && "string" == typeof offset) encoding = offset, length = this.length, offset = 0; else {
                if (!isFinite(offset)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                offset |= 0, isFinite(length) ? (length |= 0, void 0 === encoding && (encoding = "utf8")) : (encoding = length, length = void 0)
            }
            var remaining = this.length - offset;
            if ((void 0 === length || length > remaining) && (length = remaining), string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            encoding || (encoding = "utf8");
            for (var loweredCase = !1; ;) switch (encoding) {
                case"hex":
                    return hexWrite(this, string, offset, length);
                case"utf8":
                case"utf-8":
                    return utf8Write(this, string, offset, length);
                case"ascii":
                    return asciiWrite(this, string, offset, length);
                case"latin1":
                case"binary":
                    return latin1Write(this, string, offset, length);
                case"base64":
                    return base64Write(this, string, offset, length);
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return ucs2Write(this, string, offset, length);
                default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = ("" + encoding).toLowerCase(), loweredCase = !0
            }
        }, Buffer.prototype.toJSON = function () {
            return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
        };
        var MAX_ARGUMENTS_LENGTH = 4096;
        Buffer.prototype.slice = function (start, end) {
            var len = this.length;
            start = ~~start, end = void 0 === end ? len : ~~end, start < 0 ? (start += len) < 0 && (start = 0) : start > len && (start = len), end < 0 ? (end += len) < 0 && (end = 0) : end > len && (end = len), end < start && (end = start);
            var newBuf;
            if (Buffer.TYPED_ARRAY_SUPPORT) newBuf = this.subarray(start, end), newBuf.__proto__ = Buffer.prototype; else {
                var sliceLen = end - start;
                newBuf = new Buffer(sliceLen, void 0);
                for (var i = 0; i < sliceLen; ++i) newBuf[i] = this[i + start]
            }
            return newBuf
        }, Buffer.prototype.readUIntLE = function (offset, byteLength, noAssert) {
            offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
            for (var val = this[offset], mul = 1, i = 0; ++i < byteLength && (mul *= 256);) val += this[offset + i] * mul;
            return val
        }, Buffer.prototype.readUIntBE = function (offset, byteLength, noAssert) {
            offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
            for (var val = this[offset + --byteLength], mul = 1; byteLength > 0 && (mul *= 256);) val += this[offset + --byteLength] * mul;
            return val
        }, Buffer.prototype.readUInt8 = function (offset, noAssert) {
            return noAssert || checkOffset(offset, 1, this.length), this[offset]
        }, Buffer.prototype.readUInt16LE = function (offset, noAssert) {
            return noAssert || checkOffset(offset, 2, this.length), this[offset] | this[offset + 1] << 8
        }, Buffer.prototype.readUInt16BE = function (offset, noAssert) {
            return noAssert || checkOffset(offset, 2, this.length), this[offset] << 8 | this[offset + 1]
        }, Buffer.prototype.readUInt32LE = function (offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + 16777216 * this[offset + 3]
        }, Buffer.prototype.readUInt32BE = function (offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), 16777216 * this[offset] + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3])
        }, Buffer.prototype.readIntLE = function (offset, byteLength, noAssert) {
            offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
            for (var val = this[offset], mul = 1, i = 0; ++i < byteLength && (mul *= 256);) val += this[offset + i] * mul;
            return mul *= 128, val >= mul && (val -= Math.pow(2, 8 * byteLength)), val
        }, Buffer.prototype.readIntBE = function (offset, byteLength, noAssert) {
            offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
            for (var i = byteLength, mul = 1, val = this[offset + --i]; i > 0 && (mul *= 256);) val += this[offset + --i] * mul;
            return mul *= 128, val >= mul && (val -= Math.pow(2, 8 * byteLength)), val
        }, Buffer.prototype.readInt8 = function (offset, noAssert) {
            return noAssert || checkOffset(offset, 1, this.length), 128 & this[offset] ? -1 * (255 - this[offset] + 1) : this[offset]
        }, Buffer.prototype.readInt16LE = function (offset, noAssert) {
            noAssert || checkOffset(offset, 2, this.length);
            var val = this[offset] | this[offset + 1] << 8;
            return 32768 & val ? 4294901760 | val : val
        }, Buffer.prototype.readInt16BE = function (offset, noAssert) {
            noAssert || checkOffset(offset, 2, this.length);
            var val = this[offset + 1] | this[offset] << 8;
            return 32768 & val ? 4294901760 | val : val
        }, Buffer.prototype.readInt32LE = function (offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24
        }, Buffer.prototype.readInt32BE = function (offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]
        }, Buffer.prototype.readFloatLE = function (offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), ieee754.read(this, offset, !0, 23, 4)
        }, Buffer.prototype.readFloatBE = function (offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), ieee754.read(this, offset, !1, 23, 4)
        }, Buffer.prototype.readDoubleLE = function (offset, noAssert) {
            return noAssert || checkOffset(offset, 8, this.length), ieee754.read(this, offset, !0, 52, 8)
        }, Buffer.prototype.readDoubleBE = function (offset, noAssert) {
            return noAssert || checkOffset(offset, 8, this.length), ieee754.read(this, offset, !1, 52, 8)
        }, Buffer.prototype.writeUIntLE = function (value, offset, byteLength, noAssert) {
            if (value = +value, offset |= 0, byteLength |= 0, !noAssert) {
                checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength) - 1, 0)
            }
            var mul = 1, i = 0;
            for (this[offset] = 255 & value; ++i < byteLength && (mul *= 256);) this[offset + i] = value / mul & 255;
            return offset + byteLength
        }, Buffer.prototype.writeUIntBE = function (value, offset, byteLength, noAssert) {
            if (value = +value, offset |= 0, byteLength |= 0, !noAssert) {
                checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength) - 1, 0)
            }
            var i = byteLength - 1, mul = 1;
            for (this[offset + i] = 255 & value; --i >= 0 && (mul *= 256);) this[offset + i] = value / mul & 255;
            return offset + byteLength
        }, Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 1, 255, 0), Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), this[offset] = 255 & value, offset + 1
        }, Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = 255 & value, this[offset + 1] = value >>> 8) : objectWriteUInt16(this, value, offset, !0), offset + 2
        }, Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = 255 & value) : objectWriteUInt16(this, value, offset, !1), offset + 2
        }, Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[offset + 3] = value >>> 24, this[offset + 2] = value >>> 16, this[offset + 1] = value >>> 8, this[offset] = 255 & value) : objectWriteUInt32(this, value, offset, !0), offset + 4
        }, Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, this[offset + 1] = value >>> 16, this[offset + 2] = value >>> 8, this[offset + 3] = 255 & value) : objectWriteUInt32(this, value, offset, !1), offset + 4
        }, Buffer.prototype.writeIntLE = function (value, offset, byteLength, noAssert) {
            if (value = +value, offset |= 0, !noAssert) {
                var limit = Math.pow(2, 8 * byteLength - 1);
                checkInt(this, value, offset, byteLength, limit - 1, -limit)
            }
            var i = 0, mul = 1, sub = 0;
            for (this[offset] = 255 & value; ++i < byteLength && (mul *= 256);) value < 0 && 0 === sub && 0 !== this[offset + i - 1] && (sub = 1), this[offset + i] = (value / mul >> 0) - sub & 255;
            return offset + byteLength
        }, Buffer.prototype.writeIntBE = function (value, offset, byteLength, noAssert) {
            if (value = +value, offset |= 0, !noAssert) {
                var limit = Math.pow(2, 8 * byteLength - 1);
                checkInt(this, value, offset, byteLength, limit - 1, -limit)
            }
            var i = byteLength - 1, mul = 1, sub = 0;
            for (this[offset + i] = 255 & value; --i >= 0 && (mul *= 256);) value < 0 && 0 === sub && 0 !== this[offset + i + 1] && (sub = 1), this[offset + i] = (value / mul >> 0) - sub & 255;
            return offset + byteLength
        }, Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 1, 127, -128), Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), value < 0 && (value = 255 + value + 1), this[offset] = 255 & value, offset + 1
        }, Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = 255 & value, this[offset + 1] = value >>> 8) : objectWriteUInt16(this, value, offset, !0), offset + 2
        }, Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = 255 & value) : objectWriteUInt16(this, value, offset, !1), offset + 2
        }, Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648), Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = 255 & value, this[offset + 1] = value >>> 8, this[offset + 2] = value >>> 16, this[offset + 3] = value >>> 24) : objectWriteUInt32(this, value, offset, !0), offset + 4
        }, Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648), value < 0 && (value = 4294967295 + value + 1), Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, this[offset + 1] = value >>> 16, this[offset + 2] = value >>> 8, this[offset + 3] = 255 & value) : objectWriteUInt32(this, value, offset, !1), offset + 4
        }, Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
            return writeFloat(this, value, offset, !0, noAssert)
        }, Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
            return writeFloat(this, value, offset, !1, noAssert)
        }, Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
            return writeDouble(this, value, offset, !0, noAssert)
        }, Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
            return writeDouble(this, value, offset, !1, noAssert)
        }, Buffer.prototype.copy = function (target, targetStart, start, end) {
            if (start || (start = 0), end || 0 === end || (end = this.length), targetStart >= target.length && (targetStart = target.length), targetStart || (targetStart = 0), end > 0 && end < start && (end = start), end === start) return 0;
            if (0 === target.length || 0 === this.length) return 0;
            if (targetStart < 0) throw new RangeError("targetStart out of bounds");
            if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
            if (end < 0) throw new RangeError("sourceEnd out of bounds");
            end > this.length && (end = this.length), target.length - targetStart < end - start && (end = target.length - targetStart + start);
            var i, len = end - start;
            if (this === target && start < targetStart && targetStart < end) for (i = len - 1; i >= 0; --i) target[i + targetStart] = this[i + start]; else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) for (i = 0; i < len; ++i) target[i + targetStart] = this[i + start]; else Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
            return len
        }, Buffer.prototype.fill = function (val, start, end, encoding) {
            if ("string" == typeof val) {
                if ("string" == typeof start ? (encoding = start, start = 0, end = this.length) : "string" == typeof end && (encoding = end, end = this.length), 1 === val.length) {
                    var code = val.charCodeAt(0);
                    code < 256 && (val = code)
                }
                if (void 0 !== encoding && "string" != typeof encoding) throw new TypeError("encoding must be a string");
                if ("string" == typeof encoding && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding)
            } else "number" == typeof val && (val &= 255);
            if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
            if (end <= start) return this;
            start >>>= 0, end = void 0 === end ? this.length : end >>> 0, val || (val = 0);
            var i;
            if ("number" == typeof val) for (i = start; i < end; ++i) this[i] = val; else {
                var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString()),
                    len = bytes.length;
                for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len]
            }
            return this
        };
        var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
    }).call(exports, __webpack_require__(11))
}, function (module, exports, __webpack_require__) {
    "use strict";

    function destroy(err, cb) {
        var _this = this, readableDestroyed = this._readableState && this._readableState.destroyed,
            writableDestroyed = this._writableState && this._writableState.destroyed;
        return readableDestroyed || writableDestroyed ? (cb ? cb(err) : !err || this._writableState && this._writableState.errorEmitted || pna.nextTick(emitErrorNT, this, err), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(err || null, function (err) {
            !cb && err ? (pna.nextTick(emitErrorNT, _this, err), _this._writableState && (_this._writableState.errorEmitted = !0)) : cb && cb(err)
        }), this)
    }

    function undestroy() {
        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
    }

    function emitErrorNT(self, err) {
        self.emit("error", err)
    }

    var pna = __webpack_require__(45);
    module.exports = {destroy: destroy, undestroy: undestroy}
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _normalizeEncoding(enc) {
        if (!enc) return "utf8";
        for (var retried; ;) switch (enc) {
            case"utf8":
            case"utf-8":
                return "utf8";
            case"ucs2":
            case"ucs-2":
            case"utf16le":
            case"utf-16le":
                return "utf16le";
            case"latin1":
            case"binary":
                return "latin1";
            case"base64":
            case"ascii":
            case"hex":
                return enc;
            default:
                if (retried) return;
                enc = ("" + enc).toLowerCase(), retried = !0
        }
    }

    function normalizeEncoding(enc) {
        var nenc = _normalizeEncoding(enc);
        if ("string" != typeof nenc && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
        return nenc || enc
    }

    function StringDecoder(encoding) {
        this.encoding = normalizeEncoding(encoding);
        var nb;
        switch (this.encoding) {
            case"utf16le":
                this.text = utf16Text, this.end = utf16End, nb = 4;
                break;
            case"utf8":
                this.fillLast = utf8FillLast, nb = 4;
                break;
            case"base64":
                this.text = base64Text, this.end = base64End, nb = 3;
                break;
            default:
                return this.write = simpleWrite, void(this.end = simpleEnd)
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Buffer.allocUnsafe(nb)
    }

    function utf8CheckByte(byte) {
        return byte <= 127 ? 0 : byte >> 5 == 6 ? 2 : byte >> 4 == 14 ? 3 : byte >> 3 == 30 ? 4 : byte >> 6 == 2 ? -1 : -2
    }

    function utf8CheckIncomplete(self, buf, i) {
        var j = buf.length - 1;
        if (j < i) return 0;
        var nb = utf8CheckByte(buf[j]);
        return nb >= 0 ? (nb > 0 && (self.lastNeed = nb - 1), nb) : --j < i || -2 === nb ? 0 : (nb = utf8CheckByte(buf[j])) >= 0 ? (nb > 0 && (self.lastNeed = nb - 2), nb) : --j < i || -2 === nb ? 0 : (nb = utf8CheckByte(buf[j]), nb >= 0 ? (nb > 0 && (2 === nb ? nb = 0 : self.lastNeed = nb - 3), nb) : 0)
    }

    function utf8CheckExtraBytes(self, buf, p) {
        if (128 != (192 & buf[0])) return self.lastNeed = 0, "\ufffd";
        if (self.lastNeed > 1 && buf.length > 1) {
            if (128 != (192 & buf[1])) return self.lastNeed = 1, "\ufffd";
            if (self.lastNeed > 2 && buf.length > 2 && 128 != (192 & buf[2])) return self.lastNeed = 2, "\ufffd"
        }
    }

    function utf8FillLast(buf) {
        var p = this.lastTotal - this.lastNeed, r = utf8CheckExtraBytes(this, buf, p);
        return void 0 !== r ? r : this.lastNeed <= buf.length ? (buf.copy(this.lastChar, p, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (buf.copy(this.lastChar, p, 0, buf.length), void(this.lastNeed -= buf.length))
    }

    function utf8Text(buf, i) {
        var total = utf8CheckIncomplete(this, buf, i);
        if (!this.lastNeed) return buf.toString("utf8", i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        return buf.copy(this.lastChar, 0, end), buf.toString("utf8", i, end)
    }

    function utf8End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        return this.lastNeed ? r + "\ufffd" : r
    }

    function utf16Text(buf, i) {
        if ((buf.length - i) % 2 == 0) {
            var r = buf.toString("utf16le", i);
            if (r) {
                var c = r.charCodeAt(r.length - 1);
                if (c >= 55296 && c <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = buf[buf.length - 2], this.lastChar[1] = buf[buf.length - 1], r.slice(0, -1)
            }
            return r
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = buf[buf.length - 1], buf.toString("utf16le", i, buf.length - 1)
    }

    function utf16End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) {
            var end = this.lastTotal - this.lastNeed;
            return r + this.lastChar.toString("utf16le", 0, end)
        }
        return r
    }

    function base64Text(buf, i) {
        var n = (buf.length - i) % 3;
        return 0 === n ? buf.toString("base64", i) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = buf[buf.length - 1] : (this.lastChar[0] = buf[buf.length - 2], this.lastChar[1] = buf[buf.length - 1]), buf.toString("base64", i, buf.length - n))
    }

    function base64End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        return this.lastNeed ? r + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : r
    }

    function simpleWrite(buf) {
        return buf.toString(this.encoding)
    }

    function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : ""
    }

    var Buffer = __webpack_require__(46).Buffer, isEncoding = Buffer.isEncoding || function (encoding) {
        switch ((encoding = "" + encoding) && encoding.toLowerCase()) {
            case"hex":
            case"utf8":
            case"utf-8":
            case"ascii":
            case"binary":
            case"base64":
            case"ucs2":
            case"ucs-2":
            case"utf16le":
            case"utf-16le":
            case"raw":
                return !0;
            default:
                return !1
        }
    };
    exports.StringDecoder = StringDecoder, StringDecoder.prototype.write = function (buf) {
        if (0 === buf.length) return "";
        var r, i;
        if (this.lastNeed) {
            if (void 0 === (r = this.fillLast(buf))) return "";
            i = this.lastNeed, this.lastNeed = 0
        } else i = 0;
        return i < buf.length ? r ? r + this.text(buf, i) : this.text(buf, i) : r || ""
    }, StringDecoder.prototype.end = utf8End, StringDecoder.prototype.text = utf8Text, StringDecoder.prototype.fillLast = function (buf) {
        if (this.lastNeed <= buf.length) return buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length), this.lastNeed -= buf.length
    }
}, function (module, exports, __webpack_require__) {
    "use strict";

    function afterTransform(er, data) {
        var ts = this._transformState;
        ts.transforming = !1;
        var cb = ts.writecb;
        if (!cb) return this.emit("error", new Error("write callback called multiple times"));
        ts.writechunk = null, ts.writecb = null, null != data && this.push(data), cb(er);
        var rs = this._readableState;
        rs.reading = !1, (rs.needReadable || rs.length < rs.highWaterMark) && this._read(rs.highWaterMark)
    }

    function Transform(options) {
        if (!(this instanceof Transform)) return new Transform(options);
        Duplex.call(this, options), this._transformState = {
            afterTransform: afterTransform.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, options && ("function" == typeof options.transform && (this._transform = options.transform), "function" == typeof options.flush && (this._flush = options.flush)), this.on("prefinish", prefinish)
    }

    function prefinish() {
        var _this = this;
        "function" == typeof this._flush ? this._flush(function (er, data) {
            done(_this, er, data)
        }) : done(this, null, null)
    }

    function done(stream, er, data) {
        if (er) return stream.emit("error", er);
        if (null != data && stream.push(data), stream._writableState.length) throw new Error("Calling transform done when ws.length != 0");
        if (stream._transformState.transforming) throw new Error("Calling transform done when still transforming");
        return stream.push(null)
    }

    module.exports = Transform;
    var Duplex = __webpack_require__(17), util = __webpack_require__(31);
    util.inherits = __webpack_require__(21), util.inherits(Transform, Duplex), Transform.prototype.push = function (chunk, encoding) {
        return this._transformState.needTransform = !1, Duplex.prototype.push.call(this, chunk, encoding)
    }, Transform.prototype._transform = function (chunk, encoding, cb) {
        throw new Error("_transform() is not implemented")
    }, Transform.prototype._write = function (chunk, encoding, cb) {
        var ts = this._transformState;
        if (ts.writecb = cb, ts.writechunk = chunk, ts.writeencoding = encoding, !ts.transforming) {
            var rs = this._readableState;
            (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) && this._read(rs.highWaterMark)
        }
    }, Transform.prototype._read = function (n) {
        var ts = this._transformState;
        null !== ts.writechunk && ts.writecb && !ts.transforming ? (ts.transforming = !0, this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform)) : ts.needTransform = !0
    }, Transform.prototype._destroy = function (err, cb) {
        var _this2 = this;
        Duplex.prototype._destroy.call(this, err, function (err2) {
            cb(err2), _this2.emit("close")
        })
    }
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(187), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(188), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    var isObject = __webpack_require__(5);
    module.exports = function (it, TYPE) {
        if (!isObject(it) || it._t !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required!");
        return it
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: !0}), exports.org = void 0;
    var _Schema = __webpack_require__(32), NS16187549871986683199 = function (obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }(_Schema), org = exports.org = void 0;
    !function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    flatbuf.Schema = NS16187549871986683199.org.apache.arrow.flatbuf.Schema
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    !function (MessageHeader) {
                        MessageHeader[MessageHeader.NONE = 0] = "NONE", MessageHeader[MessageHeader.Schema = 1] = "Schema", MessageHeader[MessageHeader.DictionaryBatch = 2] = "DictionaryBatch", MessageHeader[MessageHeader.RecordBatch = 3] = "RecordBatch", MessageHeader[MessageHeader.Tensor = 4] = "Tensor"
                    }(flatbuf.MessageHeader || (flatbuf.MessageHeader = {}))
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var FieldNode = function () {
                        function FieldNode() {
                            this.bb_pos = 0
                        }

                        return FieldNode.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, FieldNode.prototype.length = function () {
                            return this.bb.readInt64(this.bb_pos)
                        }, FieldNode.prototype.nullCount = function () {
                            return this.bb.readInt64(this.bb_pos + 8)
                        }, FieldNode.createFieldNode = function (builder, length, null_count) {
                            return builder.prep(8, 16), builder.writeInt64(null_count), builder.writeInt64(length), builder.offset()
                        }, FieldNode
                    }();
                    flatbuf.FieldNode = FieldNode
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var RecordBatch = function () {
                        function RecordBatch() {
                            this.bb_pos = 0
                        }

                        return RecordBatch.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, RecordBatch.getRootAsRecordBatch = function (bb, obj) {
                            return (obj || new RecordBatch).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, RecordBatch.prototype.length = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0)
                        }, RecordBatch.prototype.nodes = function (index, obj) {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? (obj || new org.apache.arrow.flatbuf.FieldNode).__init(this.bb.__vector(this.bb_pos + offset) + 16 * index, this.bb) : null
                        }, RecordBatch.prototype.nodesLength = function () {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0
                        }, RecordBatch.prototype.buffers = function (index, obj) {
                            var offset = this.bb.__offset(this.bb_pos, 8);
                            return offset ? (obj || new NS16187549871986683199.org.apache.arrow.flatbuf.Buffer).__init(this.bb.__vector(this.bb_pos + offset) + 16 * index, this.bb) : null
                        }, RecordBatch.prototype.buffersLength = function () {
                            var offset = this.bb.__offset(this.bb_pos, 8);
                            return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0
                        }, RecordBatch.startRecordBatch = function (builder) {
                            builder.startObject(3)
                        }, RecordBatch.addLength = function (builder, length) {
                            builder.addFieldInt64(0, length, builder.createLong(0, 0))
                        }, RecordBatch.addNodes = function (builder, nodesOffset) {
                            builder.addFieldOffset(1, nodesOffset, 0)
                        }, RecordBatch.startNodesVector = function (builder, numElems) {
                            builder.startVector(16, numElems, 8)
                        }, RecordBatch.addBuffers = function (builder, buffersOffset) {
                            builder.addFieldOffset(2, buffersOffset, 0)
                        }, RecordBatch.startBuffersVector = function (builder, numElems) {
                            builder.startVector(16, numElems, 8)
                        }, RecordBatch.endRecordBatch = function (builder) {
                            return builder.endObject()
                        }, RecordBatch
                    }();
                    flatbuf.RecordBatch = RecordBatch
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var DictionaryBatch = function () {
                        function DictionaryBatch() {
                            this.bb_pos = 0
                        }

                        return DictionaryBatch.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, DictionaryBatch.getRootAsDictionaryBatch = function (bb, obj) {
                            return (obj || new DictionaryBatch).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, DictionaryBatch.prototype.id = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0)
                        }, DictionaryBatch.prototype.data = function (obj) {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? (obj || new org.apache.arrow.flatbuf.RecordBatch).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null
                        }, DictionaryBatch.prototype.isDelta = function () {
                            var offset = this.bb.__offset(this.bb_pos, 8);
                            return !!offset && !!this.bb.readInt8(this.bb_pos + offset)
                        }, DictionaryBatch.startDictionaryBatch = function (builder) {
                            builder.startObject(3)
                        }, DictionaryBatch.addId = function (builder, id) {
                            builder.addFieldInt64(0, id, builder.createLong(0, 0))
                        }, DictionaryBatch.addData = function (builder, dataOffset) {
                            builder.addFieldOffset(1, dataOffset, 0)
                        }, DictionaryBatch.addIsDelta = function (builder, isDelta) {
                            builder.addFieldInt8(2, +isDelta, 0)
                        }, DictionaryBatch.endDictionaryBatch = function (builder) {
                            return builder.endObject()
                        }, DictionaryBatch
                    }();
                    flatbuf.DictionaryBatch = DictionaryBatch
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Message = function () {
                        function Message() {
                            this.bb_pos = 0
                        }

                        return Message.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Message.getRootAsMessage = function (bb, obj) {
                            return (obj || new Message).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Message.prototype.version = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt16(this.bb_pos + offset) : NS16187549871986683199.org.apache.arrow.flatbuf.MetadataVersion.V1
                        }, Message.prototype.headerType = function () {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? this.bb.readUint8(this.bb_pos + offset) : org.apache.arrow.flatbuf.MessageHeader.NONE
                        }, Message.prototype.header = function (obj) {
                            var offset = this.bb.__offset(this.bb_pos, 8);
                            return offset ? this.bb.__union(obj, this.bb_pos + offset) : null
                        }, Message.prototype.bodyLength = function () {
                            var offset = this.bb.__offset(this.bb_pos, 10);
                            return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0)
                        }, Message.startMessage = function (builder) {
                            builder.startObject(4)
                        }, Message.addVersion = function (builder, version) {
                            builder.addFieldInt16(0, version, NS16187549871986683199.org.apache.arrow.flatbuf.MetadataVersion.V1)
                        }, Message.addHeaderType = function (builder, headerType) {
                            builder.addFieldInt8(1, headerType, org.apache.arrow.flatbuf.MessageHeader.NONE)
                        }, Message.addHeader = function (builder, headerOffset) {
                            builder.addFieldOffset(2, headerOffset, 0)
                        }, Message.addBodyLength = function (builder, bodyLength) {
                            builder.addFieldInt64(3, bodyLength, builder.createLong(0, 0))
                        }, Message.endMessage = function (builder) {
                            return builder.endObject()
                        }, Message.finishMessageBuffer = function (builder, offset) {
                            builder.finish(offset)
                        }, Message
                    }();
                    flatbuf.Message = Message
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {}))
}, function (module, exports, __webpack_require__) {
    "use strict";

    function typedArraySet(source, target, index) {
        return target.set(source, index) || index + source.length
    }

    function arraySet(source, target, index) {
        for (var dstIdx = index - 1, srcIdx = -1, srcLen = source.length; ++srcIdx < srcLen;) target[++dstIdx] = source[srcIdx];
        return dstIdx
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.ChunkedView = void 0;
    var _iterator = __webpack_require__(6), _iterator2 = function (obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }(_iterator), _tslib = __webpack_require__(1), tslib_1 = function (obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }(_tslib), _vector = __webpack_require__(18), ChunkedView = function () {
        function ChunkedView(data) {
            this.chunkVectors = data.chunkVectors, this.chunkOffsets = data.chunkOffsets
        }

        return ChunkedView.prototype.clone = function (data) {
            return new ChunkedView(data)
        }, ChunkedView.prototype[_iterator2.default] = function () {
            var _a, _b, vector, e_1_1, e_1, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]), _a = tslib_1.__values(this.chunkVectors), _b = _a.next(), _d.label = 1;
                    case 1:
                        return _b.done ? [3, 4] : (vector = _b.value, [5, tslib_1.__values(vector)]);
                    case 2:
                        _d.sent(), _d.label = 3;
                    case 3:
                        return _b = _a.next(), [3, 1];
                    case 4:
                        return [3, 7];
                    case 5:
                        return e_1_1 = _d.sent(), e_1 = {error: e_1_1}, [3, 7];
                    case 6:
                        try {
                            _b && !_b.done && (_c = _a.return) && _c.call(_a)
                        } finally {
                            if (e_1) throw e_1.error
                        }
                        return [7];
                    case 7:
                        return [2]
                }
            })
        }, ChunkedView.prototype.getChildAt = function (index) {
            return index < 0 ? null : (this._children || (this._children = []))[index] || (this._children[index] = _vector.Vector.concat.apply(_vector.Vector, tslib_1.__spread(this.chunkVectors.map(function (chunk) {
                return chunk.getChildAt(index)
            }))))
        }, ChunkedView.prototype.isValid = function (index) {
            for (var offsets = this.chunkOffsets, pos = 0, lhs = 0, mid = 0, rhs = offsets.length - 1; index < offsets[rhs] && index >= (pos = offsets[lhs]);) {
                if (lhs + 1 === rhs) return this.chunkVectors[lhs].isValid(index - pos);
                mid = lhs + (rhs - lhs) / 2 | 0, index >= offsets[mid] ? lhs = mid : rhs = mid
            }
            return !1
        }, ChunkedView.prototype.get = function (index) {
            for (var offsets = this.chunkOffsets, pos = 0, lhs = 0, mid = 0, rhs = offsets.length - 1; index < offsets[rhs] && index >= (pos = offsets[lhs]);) {
                if (lhs + 1 === rhs) return this.chunkVectors[lhs].get(index - pos);
                mid = lhs + (rhs - lhs) / 2 | 0, index >= offsets[mid] ? lhs = mid : rhs = mid
            }
            return null
        }, ChunkedView.prototype.set = function (index, value) {
            for (var offsets = this.chunkOffsets, pos = 0, lhs = 0, mid = 0, rhs = offsets.length - 1; index < offsets[rhs] && index >= (pos = offsets[lhs]);) {
                if (lhs + 1 === rhs) return this.chunkVectors[lhs].set(index - pos, value);
                mid = lhs + (rhs - lhs) / 2 | 0, index >= offsets[mid] ? lhs = mid : rhs = mid
            }
        }, ChunkedView.prototype.toArray = function () {
            var chunks = this.chunkVectors, numChunks = chunks.length;
            if (1 === numChunks) return chunks[0].toArray();
            for (var sources = new Array(numChunks), sourcesLen = 0, ArrayType = Array, index = -1; ++index < numChunks;) {
                var source = chunks[index].toArray();
                sourcesLen += (sources[index] = source).length, ArrayType !== source.constructor && (ArrayType = source.constructor)
            }
            for (var target = new ArrayType(sourcesLen), setValues = ArrayType === Array ? arraySet : typedArraySet, index = -1, offset = 0; ++index < numChunks;) offset = setValues(sources[index], target, offset);
            return target
        }, ChunkedView.prototype.indexOf = function (search) {
            var result, offset = 0;
            try {
                for (var _a = tslib_1.__values(this.chunkVectors), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var vector = _b.value;
                    if (-1 !== (result = vector.indexOf(search))) return result + offset;
                    offset += vector.length
                }
            } catch (e_2_1) {
                e_2 = {error: e_2_1}
            } finally {
                try {
                    _b && !_b.done && (_c = _a.return) && _c.call(_a)
                } finally {
                    if (e_2) throw e_2.error
                }
            }
            return -1;
            var e_2, _c
        }, ChunkedView
    }();
    exports.ChunkedView = ChunkedView
}, function (module, exports, __webpack_require__) {
    "use strict";

    function inRange(a, min, max) {
        return min <= a && a <= max
    }

    function ToDictionary(o) {
        if (void 0 === o) return {};
        if (o === Object(o)) return o;
        throw TypeError("Could not convert argument to dictionary")
    }

    function stringToCodePoints(string) {
        for (var s = String(string), n = s.length, i = 0, u = []; i < n;) {
            var c = s.charCodeAt(i);
            if (c < 55296 || c > 57343) u.push(c); else if (56320 <= c && c <= 57343) u.push(65533); else if (55296 <= c && c <= 56319) if (i === n - 1) u.push(65533); else {
                var d = string.charCodeAt(i + 1);
                if (56320 <= d && d <= 57343) {
                    var a = 1023 & c, b = 1023 & d;
                    u.push(65536 + (a << 10) + b), i += 1
                } else u.push(65533)
            }
            i += 1
        }
        return u
    }

    function codePointsToString(code_points) {
        for (var s = "", i = 0; i < code_points.length; ++i) {
            var cp = code_points[i];
            cp <= 65535 ? s += String.fromCharCode(cp) : (cp -= 65536, s += String.fromCharCode(55296 + (cp >> 10), 56320 + (1023 & cp)))
        }
        return s
    }

    function Stream(tokens) {
        this.tokens = [].slice.call(tokens)
    }

    function decoderError(fatal, opt_code_point) {
        if (fatal) throw TypeError("Decoder error");
        return opt_code_point || 65533
    }

    function TextDecoder(encoding, options) {
        if (!(this instanceof TextDecoder)) return new TextDecoder(encoding, options);
        if ((encoding = void 0 !== encoding ? String(encoding).toLowerCase() : DEFAULT_ENCODING) !== DEFAULT_ENCODING) throw new Error("Encoding not supported. Only utf-8 is supported");
        options = ToDictionary(options), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = Boolean(options.fatal), this._ignoreBOM = Boolean(options.ignoreBOM), Object.defineProperty(this, "encoding", {value: "utf-8"}), Object.defineProperty(this, "fatal", {value: this._fatal}), Object.defineProperty(this, "ignoreBOM", {value: this._ignoreBOM})
    }

    function TextEncoder(encoding, options) {
        if (!(this instanceof TextEncoder)) return new TextEncoder(encoding, options);
        if ((encoding = void 0 !== encoding ? String(encoding).toLowerCase() : DEFAULT_ENCODING) !== DEFAULT_ENCODING) throw new Error("Encoding not supported. Only utf-8 is supported");
        options = ToDictionary(options), this._streaming = !1, this._encoder = null, this._options = {fatal: Boolean(options.fatal)}, Object.defineProperty(this, "encoding", {value: "utf-8"})
    }

    function UTF8Decoder(options) {
        var fatal = options.fatal, utf8_code_point = 0, utf8_bytes_seen = 0, utf8_bytes_needed = 0,
            utf8_lower_boundary = 128, utf8_upper_boundary = 191;
        this.handler = function (stream, bite) {
            if (bite === end_of_stream && 0 !== utf8_bytes_needed) return utf8_bytes_needed = 0, decoderError(fatal);
            if (bite === end_of_stream) return finished;
            if (0 === utf8_bytes_needed) {
                if (inRange(bite, 0, 127)) return bite;
                if (inRange(bite, 194, 223)) utf8_bytes_needed = 1, utf8_code_point = bite - 192; else if (inRange(bite, 224, 239)) 224 === bite && (utf8_lower_boundary = 160), 237 === bite && (utf8_upper_boundary = 159), utf8_bytes_needed = 2, utf8_code_point = bite - 224; else {
                    if (!inRange(bite, 240, 244)) return decoderError(fatal);
                    240 === bite && (utf8_lower_boundary = 144), 244 === bite && (utf8_upper_boundary = 143), utf8_bytes_needed = 3, utf8_code_point = bite - 240
                }
                return utf8_code_point <<= 6 * utf8_bytes_needed, null
            }
            if (!inRange(bite, utf8_lower_boundary, utf8_upper_boundary)) return utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0, utf8_lower_boundary = 128, utf8_upper_boundary = 191, stream.prepend(bite), decoderError(fatal);
            if (utf8_lower_boundary = 128, utf8_upper_boundary = 191, utf8_bytes_seen += 1, utf8_code_point += bite - 128 << 6 * (utf8_bytes_needed - utf8_bytes_seen), utf8_bytes_seen !== utf8_bytes_needed) return null;
            var code_point = utf8_code_point;
            return utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0, code_point
        }
    }

    function UTF8Encoder(options) {
        options.fatal;
        this.handler = function (stream, code_point) {
            if (code_point === end_of_stream) return finished;
            if (inRange(code_point, 0, 127)) return code_point;
            var count, offset;
            inRange(code_point, 128, 2047) ? (count = 1, offset = 192) : inRange(code_point, 2048, 65535) ? (count = 2, offset = 224) : inRange(code_point, 65536, 1114111) && (count = 3, offset = 240);
            for (var bytes = [(code_point >> 6 * count) + offset]; count > 0;) {
                var temp = code_point >> 6 * (count - 1);
                bytes.push(128 | 63 & temp), count -= 1
            }
            return bytes
        }
    }

    var end_of_stream = -1;
    Stream.prototype = {
        endOfStream: function () {
            return !this.tokens.length
        }, read: function () {
            return this.tokens.length ? this.tokens.shift() : end_of_stream
        }, prepend: function (token) {
            if (Array.isArray(token)) for (var tokens = token; tokens.length;) this.tokens.unshift(tokens.pop()); else this.tokens.unshift(token)
        }, push: function (token) {
            if (Array.isArray(token)) for (var tokens = token; tokens.length;) this.tokens.push(tokens.shift()); else this.tokens.push(token)
        }
    };
    var finished = -1, DEFAULT_ENCODING = "utf-8";
    TextDecoder.prototype = {
        decode: function (input, options) {
            var bytes;
            bytes = "object" == typeof input && input instanceof ArrayBuffer ? new Uint8Array(input) : "object" == typeof input && "buffer" in input && input.buffer instanceof ArrayBuffer ? new Uint8Array(input.buffer, input.byteOffset, input.byteLength) : new Uint8Array(0), options = ToDictionary(options), this._streaming || (this._decoder = new UTF8Decoder({fatal: this._fatal}), this._BOMseen = !1), this._streaming = Boolean(options.stream);
            for (var result, input_stream = new Stream(bytes), code_points = []; !input_stream.endOfStream() && (result = this._decoder.handler(input_stream, input_stream.read())) !== finished;) null !== result && (Array.isArray(result) ? code_points.push.apply(code_points, result) : code_points.push(result));
            if (!this._streaming) {
                do {
                    if ((result = this._decoder.handler(input_stream, input_stream.read())) === finished) break;
                    null !== result && (Array.isArray(result) ? code_points.push.apply(code_points, result) : code_points.push(result))
                } while (!input_stream.endOfStream());
                this._decoder = null
            }
            return code_points.length && (-1 === ["utf-8"].indexOf(this.encoding) || this._ignoreBOM || this._BOMseen || (65279 === code_points[0] ? (this._BOMseen = !0, code_points.shift()) : this._BOMseen = !0)), codePointsToString(code_points)
        }
    }, TextEncoder.prototype = {
        encode: function (opt_string, options) {
            opt_string = opt_string ? String(opt_string) : "", options = ToDictionary(options), this._streaming || (this._encoder = new UTF8Encoder(this._options)), this._streaming = Boolean(options.stream);
            for (var result, bytes = [], input_stream = new Stream(stringToCodePoints(opt_string)); !input_stream.endOfStream() && (result = this._encoder.handler(input_stream, input_stream.read())) !== finished;) Array.isArray(result) ? bytes.push.apply(bytes, result) : bytes.push(result);
            if (!this._streaming) {
                for (; ;) {
                    if ((result = this._encoder.handler(input_stream, input_stream.read())) === finished) break;
                    Array.isArray(result) ? bytes.push.apply(bytes, result) : bytes.push(result)
                }
                this._encoder = null
            }
            return new Uint8Array(bytes)
        }
    }, exports.TextEncoder = TextEncoder, exports.TextDecoder = TextDecoder
}, function (module, exports, __webpack_require__) {
    "use strict";
    (function (global) {
        var load_perspective = __webpack_require__(112).load_perspective, perspective = __webpack_require__(115);
        if (void 0 !== global.document && "undefined" != typeof WebAssembly) {
            var wasmXHR = new XMLHttpRequest;
            wasmXHR.open("GET", "wasm_async/psp.wasm", !0), wasmXHR.responseType = "arraybuffer", wasmXHR.onload = function () {
                var Module = {};
                Module.wasmBinary = wasmXHR.response, Module.wasmJSMethod = "native-wasm", Module = load_perspective(Module), perspective(Module)
            }, wasmXHR.send(null), module.exports = perspective({})
        } else module.exports = perspective(load_perspective)
    }).call(exports, __webpack_require__(11))
}, function (module, exports, __webpack_require__) {
    (function (process, global) {
        var window = window || {};
        exports.load_perspective = function (Module) {
            function staticAlloc(size) {
                assert(!staticSealed);
                var ret = STATICTOP;
                return STATICTOP = STATICTOP + size + 15 & -16, ret
            }

            function dynamicAlloc(size) {
                assert(DYNAMICTOP_PTR);
                var ret = HEAP32[DYNAMICTOP_PTR >> 2], end = ret + size + 15 & -16;
                if (HEAP32[DYNAMICTOP_PTR >> 2] = end, end >= TOTAL_MEMORY) {
                    if (!enlargeMemory()) return HEAP32[DYNAMICTOP_PTR >> 2] = ret, 0
                }
                return ret
            }

            function alignMemory(size, factor) {
                return factor || (factor = STACK_ALIGN), size = Math.ceil(size / factor) * factor
            }

            function assert(condition, text) {
                condition || abort("Assertion failed: " + text)
            }

            function getMemory(size) {
                return staticSealed ? runtimeInitialized ? _malloc(size) : dynamicAlloc(size) : staticAlloc(size)
            }

            function Pointer_stringify(ptr, length) {
                if (0 === length || !ptr) return "";
                for (var t, hasUtf = 0, i = 0; ;) {
                    if (t = HEAPU8[ptr + i >> 0], hasUtf |= t, 0 == t && !length) break;
                    if (i++, length && i == length) break
                }
                length || (length = i);
                var ret = "";
                if (hasUtf < 128) {
                    for (var curr; length > 0;) curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, 1024))), ret = ret ? ret + curr : curr, ptr += 1024, length -= 1024;
                    return ret
                }
                return UTF8ToString(ptr)
            }

            function UTF8ArrayToString(u8Array, idx) {
                for (var endPtr = idx; u8Array[endPtr];) ++endPtr;
                if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
                for (var u0, u1, u2, u3, u4, u5, str = ""; ;) {
                    if (!(u0 = u8Array[idx++])) return str;
                    if (128 & u0) if (u1 = 63 & u8Array[idx++], 192 != (224 & u0)) if (u2 = 63 & u8Array[idx++], 224 == (240 & u0) ? u0 = (15 & u0) << 12 | u1 << 6 | u2 : (u3 = 63 & u8Array[idx++], 240 == (248 & u0) ? u0 = (7 & u0) << 18 | u1 << 12 | u2 << 6 | u3 : (u4 = 63 & u8Array[idx++], 248 == (252 & u0) ? u0 = (3 & u0) << 24 | u1 << 18 | u2 << 12 | u3 << 6 | u4 : (u5 = 63 & u8Array[idx++], u0 = (1 & u0) << 30 | u1 << 24 | u2 << 18 | u3 << 12 | u4 << 6 | u5))), u0 < 65536) str += String.fromCharCode(u0); else {
                        var ch = u0 - 65536;
                        str += String.fromCharCode(55296 | ch >> 10, 56320 | 1023 & ch)
                    } else str += String.fromCharCode((31 & u0) << 6 | u1); else str += String.fromCharCode(u0)
                }
            }

            function UTF8ToString(ptr) {
                return UTF8ArrayToString(HEAPU8, ptr)
            }

            function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
                if (!(maxBytesToWrite > 0)) return 0;
                for (var startIdx = outIdx, endIdx = outIdx + maxBytesToWrite - 1, i = 0; i < str.length; ++i) {
                    var u = str.charCodeAt(i);
                    if (u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & str.charCodeAt(++i)), u <= 127) {
                        if (outIdx >= endIdx) break;
                        outU8Array[outIdx++] = u
                    } else if (u <= 2047) {
                        if (outIdx + 1 >= endIdx) break;
                        outU8Array[outIdx++] = 192 | u >> 6, outU8Array[outIdx++] = 128 | 63 & u
                    } else if (u <= 65535) {
                        if (outIdx + 2 >= endIdx) break;
                        outU8Array[outIdx++] = 224 | u >> 12, outU8Array[outIdx++] = 128 | u >> 6 & 63, outU8Array[outIdx++] = 128 | 63 & u
                    } else if (u <= 2097151) {
                        if (outIdx + 3 >= endIdx) break;
                        outU8Array[outIdx++] = 240 | u >> 18, outU8Array[outIdx++] = 128 | u >> 12 & 63, outU8Array[outIdx++] = 128 | u >> 6 & 63, outU8Array[outIdx++] = 128 | 63 & u
                    } else if (u <= 67108863) {
                        if (outIdx + 4 >= endIdx) break;
                        outU8Array[outIdx++] = 248 | u >> 24, outU8Array[outIdx++] = 128 | u >> 18 & 63, outU8Array[outIdx++] = 128 | u >> 12 & 63, outU8Array[outIdx++] = 128 | u >> 6 & 63, outU8Array[outIdx++] = 128 | 63 & u
                    } else {
                        if (outIdx + 5 >= endIdx) break;
                        outU8Array[outIdx++] = 252 | u >> 30, outU8Array[outIdx++] = 128 | u >> 24 & 63, outU8Array[outIdx++] = 128 | u >> 18 & 63, outU8Array[outIdx++] = 128 | u >> 12 & 63, outU8Array[outIdx++] = 128 | u >> 6 & 63, outU8Array[outIdx++] = 128 | 63 & u
                    }
                }
                return outU8Array[outIdx] = 0, outIdx - startIdx
            }

            function lengthBytesUTF8(str) {
                for (var len = 0, i = 0; i < str.length; ++i) {
                    var u = str.charCodeAt(i);
                    u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & str.charCodeAt(++i)), u <= 127 ? ++len : len += u <= 2047 ? 2 : u <= 65535 ? 3 : u <= 2097151 ? 4 : u <= 67108863 ? 5 : 6
                }
                return len
            }

            function allocateUTF8(str) {
                var size = lengthBytesUTF8(str) + 1, ret = _malloc(size);
                return ret && stringToUTF8Array(str, HEAP8, ret, size), ret
            }

            function allocateUTF8OnStack(str) {
                var size = lengthBytesUTF8(str) + 1, ret = stackAlloc(size);
                return stringToUTF8Array(str, HEAP8, ret, size), ret
            }

            function alignUp(x, multiple) {
                return x % multiple > 0 && (x += multiple - x % multiple), x
            }

            function updateGlobalBuffer(buf) {
                Module.buffer = buffer = buf
            }

            function updateGlobalBufferViews() {
                Module.HEAP8 = HEAP8 = new Int8Array(buffer), Module.HEAP16 = HEAP16 = new Int16Array(buffer), Module.HEAP32 = HEAP32 = new Int32Array(buffer), Module.HEAPU8 = HEAPU8 = new Uint8Array(buffer), Module.HEAPU16 = HEAPU16 = new Uint16Array(buffer), Module.HEAPU32 = HEAPU32 = new Uint32Array(buffer), Module.HEAPF32 = HEAPF32 = new Float32Array(buffer), Module.HEAPF64 = HEAPF64 = new Float64Array(buffer)
            }

            function abortOnCannotGrowMemory() {
                abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + TOTAL_MEMORY + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")
            }

            function enlargeMemory() {
                var PAGE_MULTIPLE = Module.usingWasm ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE,
                    LIMIT = 2147483648 - PAGE_MULTIPLE;
                if (HEAP32[DYNAMICTOP_PTR >> 2] > LIMIT) return !1;
                var OLD_TOTAL_MEMORY = TOTAL_MEMORY;
                for (TOTAL_MEMORY = Math.max(TOTAL_MEMORY, MIN_TOTAL_MEMORY); TOTAL_MEMORY < HEAP32[DYNAMICTOP_PTR >> 2];) TOTAL_MEMORY = TOTAL_MEMORY <= 536870912 ? alignUp(2 * TOTAL_MEMORY, PAGE_MULTIPLE) : Math.min(alignUp((3 * TOTAL_MEMORY + 2147483648) / 4, PAGE_MULTIPLE), LIMIT);
                var replacement = Module.reallocBuffer(TOTAL_MEMORY);
                return replacement && replacement.byteLength == TOTAL_MEMORY ? (updateGlobalBuffer(replacement), updateGlobalBufferViews(), !0) : (TOTAL_MEMORY = OLD_TOTAL_MEMORY, !1)
            }

            function getTotalMemory() {
                return TOTAL_MEMORY
            }

            function callRuntimeCallbacks(callbacks) {
                for (; callbacks.length > 0;) {
                    var callback = callbacks.shift();
                    if ("function" != typeof callback) {
                        var func = callback.func;
                        "number" == typeof func ? void 0 === callback.arg ? Module.dynCall_v(func) : Module.dynCall_vi(func, callback.arg) : func(void 0 === callback.arg ? null : callback.arg)
                    } else callback()
                }
            }

            function preRun() {
                if (Module.preRun) for ("function" == typeof Module.preRun && (Module.preRun = [Module.preRun]); Module.preRun.length;) addOnPreRun(Module.preRun.shift());
                callRuntimeCallbacks(__ATPRERUN__)
            }

            function ensureInitRuntime() {
                runtimeInitialized || (runtimeInitialized = !0, callRuntimeCallbacks(__ATINIT__))
            }

            function preMain() {
                callRuntimeCallbacks(__ATMAIN__)
            }

            function exitRuntime() {
                callRuntimeCallbacks(__ATEXIT__), runtimeExited = !0
            }

            function postRun() {
                if (Module.postRun) for ("function" == typeof Module.postRun && (Module.postRun = [Module.postRun]); Module.postRun.length;) addOnPostRun(Module.postRun.shift());
                callRuntimeCallbacks(__ATPOSTRUN__)
            }

            function addOnPreRun(cb) {
                __ATPRERUN__.unshift(cb)
            }

            function addOnPostRun(cb) {
                __ATPOSTRUN__.unshift(cb)
            }

            function writeArrayToMemory(array, buffer) {
                HEAP8.set(array, buffer)
            }

            function writeAsciiToMemory(str, buffer, dontAddNull) {
                for (var i = 0; i < str.length; ++i) HEAP8[buffer++ >> 0] = str.charCodeAt(i);
                dontAddNull || (HEAP8[buffer >> 0] = 0)
            }

            function addRunDependency(id) {
                runDependencies++, Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies)
            }

            function removeRunDependency(id) {
                if (runDependencies--, Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies), 0 == runDependencies && (null !== runDependencyWatcher && (clearInterval(runDependencyWatcher), runDependencyWatcher = null), dependenciesFulfilled)) {
                    var callback = dependenciesFulfilled;
                    dependenciesFulfilled = null, callback()
                }
            }

            function isDataURI(filename) {
                return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : 0 === filename.indexOf(dataURIPrefix)
            }

            function _emscripten_asm_const_i(code) {
                return ASM_CONSTS[code]()
            }

            function ___assert_fail(condition, filename, line, func) {
                abort("Assertion failed: " + Pointer_stringify(condition) + ", at: " + [filename ? Pointer_stringify(filename) : "unknown filename", line, func ? Pointer_stringify(func) : "unknown function"])
            }

            function ___buildEnvironment(environ) {
                var poolPtr, envPtr;
                ___buildEnvironment.called ? (envPtr = HEAP32[environ >> 2], poolPtr = HEAP32[envPtr >> 2]) : (___buildEnvironment.called = !0, ENV.USER = ENV.LOGNAME = "web_user", ENV.PATH = "/", ENV.PWD = "/", ENV.HOME = "/home/web_user", ENV.LANG = "C.UTF-8", ENV._ = Module.thisProgram, poolPtr = getMemory(1024), envPtr = getMemory(256), HEAP32[envPtr >> 2] = poolPtr, HEAP32[environ >> 2] = envPtr);
                var strings = [], totalSize = 0;
                for (var key in ENV) if ("string" == typeof ENV[key]) {
                    var line = key + "=" + ENV[key];
                    strings.push(line), totalSize += line.length
                }
                if (totalSize > 1024) throw new Error("Environment size exceeded TOTAL_ENV_SIZE!");
                for (var i = 0; i < strings.length; i++) {
                    var line = strings[i];
                    writeAsciiToMemory(line, poolPtr), HEAP32[envPtr + 4 * i >> 2] = poolPtr, poolPtr += line.length + 1
                }
                HEAP32[envPtr + 4 * strings.length >> 2] = 0
            }

            function ___cxa_allocate_exception(size) {
                return _malloc(size)
            }

            function ___cxa_pure_virtual() {
                throw ABORT = !0, "Pure virtual function called!"
            }

            function ___cxa_throw(ptr, type, destructor) {
                throw EXCEPTIONS.infos[ptr] = {
                    ptr: ptr,
                    adjusted: ptr,
                    type: type,
                    destructor: destructor,
                    refcount: 0,
                    caught: !1,
                    rethrown: !1
                }, EXCEPTIONS.last = ptr, "uncaught_exception" in __ZSt18uncaught_exceptionv ? __ZSt18uncaught_exceptionv.uncaught_exception++ : __ZSt18uncaught_exceptionv.uncaught_exception = 1, ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."
            }

            function ___cxa_uncaught_exception() {
                return !!__ZSt18uncaught_exceptionv.uncaught_exception
            }

            function ___lock() {
            }

            function ___setErrNo(value) {
                return Module.___errno_location && (HEAP32[Module.___errno_location() >> 2] = value), value
            }

            function ___map_file(pathname, size) {
                return ___setErrNo(ERRNO_CODES.EPERM), -1
            }

            function ___syscall10(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    var path = SYSCALLS.getStr();
                    return FS.unlink(path), 0
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___syscall140(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    var stream = SYSCALLS.getStreamFromFD(), offset_low = (SYSCALLS.get(), SYSCALLS.get()),
                        result = SYSCALLS.get(), whence = SYSCALLS.get(), offset = offset_low;
                    return FS.llseek(stream, offset, whence), HEAP32[result >> 2] = stream.position, stream.getdents && 0 === offset && 0 === whence && (stream.getdents = null), 0
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___syscall145(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    var stream = SYSCALLS.getStreamFromFD(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
                    return SYSCALLS.doReadv(stream, iov, iovcnt)
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___syscall146(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    var stream = SYSCALLS.get(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get(), ret = 0;
                    ___syscall146.buffers || (___syscall146.buffers = [null, [], []], ___syscall146.printChar = function (stream, curr) {
                        var buffer = ___syscall146.buffers[stream];
                        assert(buffer), 0 === curr || 10 === curr ? ((1 === stream ? Module.print : Module.printErr)(UTF8ArrayToString(buffer, 0)), buffer.length = 0) : buffer.push(curr)
                    });
                    for (var i = 0; i < iovcnt; i++) {
                        for (var ptr = HEAP32[iov + 8 * i >> 2], len = HEAP32[iov + (8 * i + 4) >> 2], j = 0; j < len; j++) ___syscall146.printChar(stream, HEAPU8[ptr + j]);
                        ret += len
                    }
                    return ret
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___syscall163(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    return -ERRNO_CODES.ENOMEM
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___syscall192(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    var addr = SYSCALLS.get(), len = SYSCALLS.get(), prot = SYSCALLS.get(), flags = SYSCALLS.get(),
                        fd = SYSCALLS.get(), off = SYSCALLS.get();
                    off <<= 12;
                    var ptr, allocated = !1;
                    if (-1 === fd) {
                        if (!(ptr = _memalign(PAGE_SIZE, len))) return -ERRNO_CODES.ENOMEM;
                        _memset(ptr, 0, len), allocated = !0
                    } else {
                        var info = FS.getStream(fd);
                        if (!info) return -ERRNO_CODES.EBADF;
                        var res = FS.mmap(info, HEAPU8, addr, len, off, prot, flags);
                        ptr = res.ptr, allocated = res.allocated
                    }
                    return SYSCALLS.mappings[ptr] = {
                        malloc: ptr,
                        len: len,
                        allocated: allocated,
                        fd: fd,
                        flags: flags
                    }, ptr
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___syscall194(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    var fd = SYSCALLS.get(), length = (SYSCALLS.getZero(), SYSCALLS.get64());
                    return FS.ftruncate(fd, length), 0
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___syscall20(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    return PROCINFO.pid
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___syscall221(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    return 0
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___syscall5(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    var pathname = SYSCALLS.getStr(), flags = SYSCALLS.get(), mode = SYSCALLS.get();
                    return FS.open(pathname, flags, mode).fd
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___syscall54(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    return 0
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___syscall6(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    var stream = SYSCALLS.getStreamFromFD();
                    return FS.close(stream), 0
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___syscall91(which, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    var addr = SYSCALLS.get(), len = SYSCALLS.get(), info = SYSCALLS.mappings[addr];
                    if (!info) return 0;
                    if (len === info.len) {
                        var stream = FS.getStream(info.fd);
                        SYSCALLS.doMsync(addr, stream, len, info.flags), FS.munmap(stream), SYSCALLS.mappings[addr] = null, info.allocated && _free(info.malloc)
                    }
                    return 0
                } catch (e) {
                    return "undefined" != typeof FS && e instanceof FS.ErrnoError || abort(e), -e.errno
                }
            }

            function ___unlock() {
            }

            function runDestructors(destructors) {
                for (; destructors.length;) {
                    var ptr = destructors.pop();
                    destructors.pop()(ptr)
                }
            }

            function simpleReadValueFromPointer(pointer) {
                return this.fromWireType(HEAPU32[pointer >> 2])
            }

            function makeLegalFunctionName(name) {
                if (void 0 === name) return "_unknown";
                name = name.replace(/[^a-zA-Z0-9_]/g, "$");
                var f = name.charCodeAt(0);
                return f >= char_0 && f <= char_9 ? "_" + name : name
            }

            function createNamedFunction(name, body) {
                return name = makeLegalFunctionName(name), function () {
                    "use strict";
                    return body.apply(this, arguments)
                }
            }

            function extendError(baseErrorType, errorName) {
                var errorClass = createNamedFunction(errorName, function (message) {
                    this.name = errorName, this.message = message;
                    var stack = new Error(message).stack;
                    void 0 !== stack && (this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, ""))
                });
                return errorClass.prototype = Object.create(baseErrorType.prototype), errorClass.prototype.constructor = errorClass, errorClass.prototype.toString = function () {
                    return void 0 === this.message ? this.name : this.name + ": " + this.message
                }, errorClass
            }

            function throwInternalError(message) {
                throw new InternalError(message)
            }

            function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
                function onComplete(typeConverters) {
                    var myTypeConverters = getTypeConverters(typeConverters);
                    myTypeConverters.length !== myTypes.length && throwInternalError("Mismatched type converter count");
                    for (var i = 0; i < myTypes.length; ++i) registerType(myTypes[i], myTypeConverters[i])
                }

                myTypes.forEach(function (type) {
                    typeDependencies[type] = dependentTypes
                });
                var typeConverters = new Array(dependentTypes.length), unregisteredTypes = [], registered = 0;
                dependentTypes.forEach(function (dt, i) {
                    registeredTypes.hasOwnProperty(dt) ? typeConverters[i] = registeredTypes[dt] : (unregisteredTypes.push(dt), awaitingDependencies.hasOwnProperty(dt) || (awaitingDependencies[dt] = []), awaitingDependencies[dt].push(function () {
                        typeConverters[i] = registeredTypes[dt], ++registered === unregisteredTypes.length && onComplete(typeConverters)
                    }))
                }), 0 === unregisteredTypes.length && onComplete(typeConverters)
            }

            function __embind_finalize_value_object(structType) {
                var reg = structRegistrations[structType];
                delete structRegistrations[structType];
                var rawConstructor = reg.rawConstructor, rawDestructor = reg.rawDestructor, fieldRecords = reg.fields;
                whenDependentTypesAreResolved([structType], fieldRecords.map(function (field) {
                    return field.getterReturnType
                }).concat(fieldRecords.map(function (field) {
                    return field.setterArgumentType
                })), function (fieldTypes) {
                    var fields = {};
                    return fieldRecords.forEach(function (field, i) {
                        var fieldName = field.fieldName, getterReturnType = fieldTypes[i], getter = field.getter,
                            getterContext = field.getterContext,
                            setterArgumentType = fieldTypes[i + fieldRecords.length], setter = field.setter,
                            setterContext = field.setterContext;
                        fields[fieldName] = {
                            read: function (ptr) {
                                return getterReturnType.fromWireType(getter(getterContext, ptr))
                            }, write: function (ptr, o) {
                                var destructors = [];
                                setter(setterContext, ptr, setterArgumentType.toWireType(destructors, o)), runDestructors(destructors)
                            }
                        }
                    }), [{
                        name: reg.name,
                        fromWireType: function (ptr) {
                            var rv = {};
                            for (var i in fields) rv[i] = fields[i].read(ptr);
                            return rawDestructor(ptr), rv
                        },
                        toWireType: function (destructors, o) {
                            for (var fieldName in fields) if (!(fieldName in o)) throw new TypeError("Missing field");
                            var ptr = rawConstructor();
                            for (fieldName in fields) fields[fieldName].write(ptr, o[fieldName]);
                            return null !== destructors && destructors.push(rawDestructor, ptr), ptr
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: simpleReadValueFromPointer,
                        destructorFunction: rawDestructor
                    }]
                })
            }

            function getShiftFromSize(size) {
                switch (size) {
                    case 1:
                        return 0;
                    case 2:
                        return 1;
                    case 4:
                        return 2;
                    case 8:
                        return 3;
                    default:
                        throw new TypeError("Unknown type size: " + size)
                }
            }

            function readLatin1String(ptr) {
                for (var ret = "", c = ptr; HEAPU8[c];) ret += embind_charCodes[HEAPU8[c++]];
                return ret
            }

            function throwBindingError(message) {
                throw new BindingError(message)
            }

            function registerType(rawType, registeredInstance, options) {
                if (options = options || {}, !("argPackAdvance" in registeredInstance)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                var name = registeredInstance.name;
                if (rawType || throwBindingError('type "' + name + '" must have a positive integer typeid pointer'), registeredTypes.hasOwnProperty(rawType)) {
                    if (options.ignoreDuplicateRegistrations) return;
                    throwBindingError("Cannot register type '" + name + "' twice")
                }
                if (registeredTypes[rawType] = registeredInstance, delete typeDependencies[rawType], awaitingDependencies.hasOwnProperty(rawType)) {
                    var callbacks = awaitingDependencies[rawType];
                    delete awaitingDependencies[rawType], callbacks.forEach(function (cb) {
                        cb()
                    })
                }
            }

            function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
                var shift = getShiftFromSize(size);
                name = readLatin1String(name), registerType(rawType, {
                    name: name, fromWireType: function (wt) {
                        return !!wt
                    }, toWireType: function (destructors, o) {
                        return o ? trueValue : falseValue
                    }, argPackAdvance: 8, readValueFromPointer: function (pointer) {
                        var heap;
                        if (1 === size) heap = HEAP8; else if (2 === size) heap = HEAP16; else {
                            if (4 !== size) throw new TypeError("Unknown boolean type size: " + name);
                            heap = HEAP32
                        }
                        return this.fromWireType(heap[pointer >> shift])
                    }, destructorFunction: null
                })
            }

            function ClassHandle_isAliasOf(other) {
                if (!(this instanceof ClassHandle)) return !1;
                if (!(other instanceof ClassHandle)) return !1;
                for (var leftClass = this.$$.ptrType.registeredClass, left = this.$$.ptr, rightClass = other.$$.ptrType.registeredClass, right = other.$$.ptr; leftClass.baseClass;) left = leftClass.upcast(left), leftClass = leftClass.baseClass;
                for (; rightClass.baseClass;) right = rightClass.upcast(right), rightClass = rightClass.baseClass;
                return leftClass === rightClass && left === right
            }

            function shallowCopyInternalPointer(o) {
                return {
                    count: o.count,
                    deleteScheduled: o.deleteScheduled,
                    preservePointerOnDelete: o.preservePointerOnDelete,
                    ptr: o.ptr,
                    ptrType: o.ptrType,
                    smartPtr: o.smartPtr,
                    smartPtrType: o.smartPtrType
                }
            }

            function throwInstanceAlreadyDeleted(obj) {
                throwBindingError(function (handle) {
                    return handle.$$.ptrType.registeredClass.name
                }(obj) + " instance already deleted")
            }

            function ClassHandle_clone() {
                if (this.$$.ptr || throwInstanceAlreadyDeleted(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
                var clone = Object.create(Object.getPrototypeOf(this), {$$: {value: shallowCopyInternalPointer(this.$$)}});
                return clone.$$.count.value += 1, clone.$$.deleteScheduled = !1, clone
            }

            function runDestructor(handle) {
                var $$ = handle.$$;
                $$.smartPtr ? $$.smartPtrType.rawDestructor($$.smartPtr) : $$.ptrType.registeredClass.rawDestructor($$.ptr)
            }

            function ClassHandle_delete() {
                this.$$.ptr || throwInstanceAlreadyDeleted(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && throwBindingError("Object already scheduled for deletion"), this.$$.count.value -= 1, 0 === this.$$.count.value && runDestructor(this), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0)
            }

            function ClassHandle_isDeleted() {
                return !this.$$.ptr
            }

            function flushPendingDeletes() {
                for (; deletionQueue.length;) {
                    var obj = deletionQueue.pop();
                    obj.$$.deleteScheduled = !1, obj.delete()
                }
            }

            function ClassHandle_deleteLater() {
                return this.$$.ptr || throwInstanceAlreadyDeleted(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && throwBindingError("Object already scheduled for deletion"), deletionQueue.push(this), 1 === deletionQueue.length && delayFunction && delayFunction(flushPendingDeletes), this.$$.deleteScheduled = !0, this
            }

            function ClassHandle() {
            }

            function ensureOverloadTable(proto, methodName, humanName) {
                if (void 0 === proto[methodName].overloadTable) {
                    var prevFunc = proto[methodName];
                    proto[methodName] = function () {
                        return proto[methodName].overloadTable.hasOwnProperty(arguments.length) || throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!"), proto[methodName].overloadTable[arguments.length].apply(this, arguments)
                    }, proto[methodName].overloadTable = [], proto[methodName].overloadTable[prevFunc.argCount] = prevFunc
                }
            }

            function exposePublicSymbol(name, value, numArguments) {
                Module.hasOwnProperty(name) ? ((void 0 === numArguments || void 0 !== Module[name].overloadTable && void 0 !== Module[name].overloadTable[numArguments]) && throwBindingError("Cannot register public name '" + name + "' twice"), ensureOverloadTable(Module, name, name), Module.hasOwnProperty(numArguments) && throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!"), Module[name].overloadTable[numArguments] = value) : (Module[name] = value, void 0 !== numArguments && (Module[name].numArguments = numArguments))
            }

            function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
                this.name = name, this.constructor = constructor, this.instancePrototype = instancePrototype, this.rawDestructor = rawDestructor, this.baseClass = baseClass, this.getActualType = getActualType, this.upcast = upcast, this.downcast = downcast, this.pureVirtualFunctions = []
            }

            function upcastPointer(ptr, ptrClass, desiredClass) {
                for (; ptrClass !== desiredClass;) ptrClass.upcast || throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name), ptr = ptrClass.upcast(ptr), ptrClass = ptrClass.baseClass;
                return ptr
            }

            function constNoSmartPtrRawPointerToWireType(destructors, handle) {
                if (null === handle) return this.isReference && throwBindingError("null is not a valid " + this.name), 0;
                handle.$$ || throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name), handle.$$.ptr || throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
                var handleClass = handle.$$.ptrType.registeredClass;
                return upcastPointer(handle.$$.ptr, handleClass, this.registeredClass)
            }

            function genericPointerToWireType(destructors, handle) {
                var ptr;
                if (null === handle) return this.isReference && throwBindingError("null is not a valid " + this.name), this.isSmartPointer ? (ptr = this.rawConstructor(), null !== destructors && destructors.push(this.rawDestructor, ptr), ptr) : 0;
                handle.$$ || throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name), handle.$$.ptr || throwBindingError("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && handle.$$.ptrType.isConst && throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
                var handleClass = handle.$$.ptrType.registeredClass;
                if (ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass), this.isSmartPointer) switch (void 0 === handle.$$.smartPtr && throwBindingError("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
                    case 0:
                        handle.$$.smartPtrType === this ? ptr = handle.$$.smartPtr : throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
                        break;
                    case 1:
                        ptr = handle.$$.smartPtr;
                        break;
                    case 2:
                        if (handle.$$.smartPtrType === this) ptr = handle.$$.smartPtr; else {
                            var clonedHandle = handle.clone();
                            ptr = this.rawShare(ptr, __emval_register(function () {
                                clonedHandle.delete()
                            })), null !== destructors && destructors.push(this.rawDestructor, ptr)
                        }
                        break;
                    default:
                        throwBindingError("Unsupporting sharing policy")
                }
                return ptr
            }

            function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
                if (null === handle) return this.isReference && throwBindingError("null is not a valid " + this.name), 0;
                handle.$$ || throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name), handle.$$.ptr || throwBindingError("Cannot pass deleted object as a pointer of type " + this.name), handle.$$.ptrType.isConst && throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
                var handleClass = handle.$$.ptrType.registeredClass;
                return upcastPointer(handle.$$.ptr, handleClass, this.registeredClass)
            }

            function RegisteredPointer_getPointee(ptr) {
                return this.rawGetPointee && (ptr = this.rawGetPointee(ptr)), ptr
            }

            function RegisteredPointer_destructor(ptr) {
                this.rawDestructor && this.rawDestructor(ptr)
            }

            function RegisteredPointer_deleteObject(handle) {
                null !== handle && handle.delete()
            }

            function downcastPointer(ptr, ptrClass, desiredClass) {
                if (ptrClass === desiredClass) return ptr;
                if (void 0 === desiredClass.baseClass) return null;
                var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
                return null === rv ? null : desiredClass.downcast(rv)
            }

            function getInheritedInstanceCount() {
                return Object.keys(registeredInstances).length
            }

            function getLiveInheritedInstances() {
                var rv = [];
                for (var k in registeredInstances) registeredInstances.hasOwnProperty(k) && rv.push(registeredInstances[k]);
                return rv
            }

            function setDelayFunction(fn) {
                delayFunction = fn, deletionQueue.length && delayFunction && delayFunction(flushPendingDeletes)
            }

            function getBasestPointer(class_, ptr) {
                for (void 0 === ptr && throwBindingError("ptr should not be undefined"); class_.baseClass;) ptr = class_.upcast(ptr), class_ = class_.baseClass;
                return ptr
            }

            function getInheritedInstance(class_, ptr) {
                return ptr = getBasestPointer(class_, ptr), registeredInstances[ptr]
            }

            function makeClassHandle(prototype, record) {
                return record.ptrType && record.ptr || throwInternalError("makeClassHandle requires ptr and ptrType"), !!record.smartPtrType != !!record.smartPtr && throwInternalError("Both smartPtrType and smartPtr must be specified"), record.count = {value: 1}, Object.create(prototype, {$$: {value: record}})
            }

            function RegisteredPointer_fromWireType(ptr) {
                function makeDefaultHandle() {
                    return this.isSmartPointer ? makeClassHandle(this.registeredClass.instancePrototype, {
                        ptrType: this.pointeeType,
                        ptr: rawPointer,
                        smartPtrType: this,
                        smartPtr: ptr
                    }) : makeClassHandle(this.registeredClass.instancePrototype, {ptrType: this, ptr: ptr})
                }

                var rawPointer = this.getPointee(ptr);
                if (!rawPointer) return this.destructor(ptr), null;
                var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
                if (void 0 !== registeredInstance) {
                    if (0 === registeredInstance.$$.count.value) return registeredInstance.$$.ptr = rawPointer, registeredInstance.$$.smartPtr = ptr, registeredInstance.clone();
                    var rv = registeredInstance.clone();
                    return this.destructor(ptr), rv
                }
                var actualType = this.registeredClass.getActualType(rawPointer),
                    registeredPointerRecord = registeredPointers[actualType];
                if (!registeredPointerRecord) return makeDefaultHandle.call(this);
                var toType;
                toType = this.isConst ? registeredPointerRecord.constPointerType : registeredPointerRecord.pointerType;
                var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
                return null === dp ? makeDefaultHandle.call(this) : this.isSmartPointer ? makeClassHandle(toType.registeredClass.instancePrototype, {
                    ptrType: toType,
                    ptr: dp,
                    smartPtrType: this,
                    smartPtr: ptr
                }) : makeClassHandle(toType.registeredClass.instancePrototype, {ptrType: toType, ptr: dp})
            }

            function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
                this.name = name, this.registeredClass = registeredClass, this.isReference = isReference, this.isConst = isConst, this.isSmartPointer = isSmartPointer, this.pointeeType = pointeeType, this.sharingPolicy = sharingPolicy, this.rawGetPointee = rawGetPointee, this.rawConstructor = rawConstructor, this.rawShare = rawShare, this.rawDestructor = rawDestructor, isSmartPointer || void 0 !== registeredClass.baseClass ? this.toWireType = genericPointerToWireType : isConst ? (this.toWireType = constNoSmartPtrRawPointerToWireType, this.destructorFunction = null) : (this.toWireType = nonConstNoSmartPtrRawPointerToWireType, this.destructorFunction = null)
            }

            function replacePublicSymbol(name, value, numArguments) {
                Module.hasOwnProperty(name) || throwInternalError("Replacing nonexistant public symbol"), void 0 !== Module[name].overloadTable && void 0 !== numArguments ? Module[name].overloadTable[numArguments] = value : (Module[name] = value, Module[name].argCount = numArguments)
            }

            function embind__requireFunction(signature, rawFunction) {
                signature = readLatin1String(signature);
                var fp;
                if (void 0 !== Module["FUNCTION_TABLE_" + signature]) fp = Module["FUNCTION_TABLE_" + signature][rawFunction]; else if ("undefined" != typeof FUNCTION_TABLE) fp = FUNCTION_TABLE[rawFunction]; else {
                    var dc = Module.asm["dynCall_" + signature];
                    void 0 === dc && void 0 === (dc = Module.asm["dynCall_" + signature.replace(/f/g, "d")]) && throwBindingError("No dynCall invoker for signature: " + signature), fp = function (dynCall) {
                        return function () {
                            var args = new Array(arguments.length + 1);
                            args[0] = rawFunction;
                            for (var i = 0; i < arguments.length; i++) args[i + 1] = arguments[i];
                            return dynCall.apply(null, args)
                        }
                    }(dc)
                }
                return "function" != typeof fp && throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction), fp
            }

            function getTypeName(type) {
                var ptr = ___getTypeName(type), rv = readLatin1String(ptr);
                return _free(ptr), rv
            }

            function throwUnboundTypeError(message, types) {
                function visit(type) {
                    if (!seen[type] && !registeredTypes[type]) {
                        if (typeDependencies[type]) return void typeDependencies[type].forEach(visit);
                        unboundTypes.push(type), seen[type] = !0
                    }
                }

                var unboundTypes = [], seen = {};
                throw types.forEach(visit), new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]))
            }

            function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
                name = readLatin1String(name), getActualType = embind__requireFunction(getActualTypeSignature, getActualType), upcast && (upcast = embind__requireFunction(upcastSignature, upcast)), downcast && (downcast = embind__requireFunction(downcastSignature, downcast)), rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
                var legalFunctionName = makeLegalFunctionName(name);
                exposePublicSymbol(legalFunctionName, function () {
                    throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType])
                }), whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function (base) {
                    base = base[0];
                    var baseClass, basePrototype;
                    baseClassRawType ? (baseClass = base.registeredClass, basePrototype = baseClass.instancePrototype) : basePrototype = ClassHandle.prototype;
                    var constructor = createNamedFunction(legalFunctionName, function () {
                        if (Object.getPrototypeOf(this) !== instancePrototype) throw new BindingError("Use 'new' to construct " + name);
                        if (void 0 === registeredClass.constructor_body) throw new BindingError(name + " has no accessible constructor");
                        var body = registeredClass.constructor_body[arguments.length];
                        if (void 0 === body) throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
                        return body.apply(this, arguments)
                    }), instancePrototype = Object.create(basePrototype, {constructor: {value: constructor}});
                    constructor.prototype = instancePrototype;
                    var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast),
                        referenceConverter = new RegisteredPointer(name, registeredClass, !0, !1, !1),
                        pointerConverter = new RegisteredPointer(name + "*", registeredClass, !1, !1, !1),
                        constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, !1, !0, !1);
                    return registeredPointers[rawType] = {
                        pointerType: pointerConverter,
                        constPointerType: constPointerConverter
                    }, replacePublicSymbol(legalFunctionName, constructor), [referenceConverter, pointerConverter, constPointerConverter]
                })
            }

            function heap32VectorToArray(count, firstElement) {
                for (var array = [], i = 0; i < count; i++) array.push(HEAP32[(firstElement >> 2) + i]);
                return array
            }

            function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
                var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
                invoker = embind__requireFunction(invokerSignature, invoker), whenDependentTypesAreResolved([], [rawClassType], function (classType) {
                    classType = classType[0];
                    var humanName = "constructor " + classType.name;
                    if (void 0 === classType.registeredClass.constructor_body && (classType.registeredClass.constructor_body = []), void 0 !== classType.registeredClass.constructor_body[argCount - 1]) throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                    return classType.registeredClass.constructor_body[argCount - 1] = function () {
                        throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes)
                    }, whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
                        return classType.registeredClass.constructor_body[argCount - 1] = function () {
                            arguments.length !== argCount - 1 && throwBindingError(humanName + " called with " + arguments.length + " arguments, expected " + (argCount - 1));
                            var destructors = [], args = new Array(argCount);
                            args[0] = rawConstructor;
                            for (var i = 1; i < argCount; ++i) args[i] = argTypes[i].toWireType(destructors, arguments[i - 1]);
                            var ptr = invoker.apply(null, args);
                            return runDestructors(destructors), argTypes[0].fromWireType(ptr)
                        }, []
                    }), []
                })
            }

            function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
                var argCount = argTypes.length;
                argCount < 2 && throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
                for (var isClassMethodFunc = null !== argTypes[1] && null !== classType, needsDestructorStack = !1, i = 1; i < argTypes.length; ++i) if (null !== argTypes[i] && void 0 === argTypes[i].destructorFunction) {
                    needsDestructorStack = !0;
                    break
                }
                var returns = "void" !== argTypes[0].name, argsWired = new Array(argCount - 2);
                return function () {
                    arguments.length !== argCount - 2 && throwBindingError("function " + humanName + " called with " + arguments.length + " arguments, expected " + (argCount - 2) + " args!");
                    var thisWired, destructors = needsDestructorStack ? [] : null;
                    isClassMethodFunc && (thisWired = argTypes[1].toWireType(destructors, this));
                    for (var i = 0; i < argCount - 2; ++i) argsWired[i] = argTypes[i + 2].toWireType(destructors, arguments[i]);
                    var invokerFuncArgs = isClassMethodFunc ? [cppTargetFunc, thisWired] : [cppTargetFunc],
                        rv = cppInvokerFunc.apply(null, invokerFuncArgs.concat(argsWired));
                    if (needsDestructorStack) runDestructors(destructors); else for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; i++) {
                        var param = 1 === i ? thisWired : argsWired[i - 2];
                        null !== argTypes[i].destructorFunction && argTypes[i].destructorFunction(param)
                    }
                    if (returns) return argTypes[0].fromWireType(rv)
                }
            }

            function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
                var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
                methodName = readLatin1String(methodName), rawInvoker = embind__requireFunction(invokerSignature, rawInvoker), whenDependentTypesAreResolved([], [rawClassType], function (classType) {
                    function unboundTypesHandler() {
                        throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes)
                    }

                    classType = classType[0];
                    var humanName = classType.name + "." + methodName;
                    isPureVirtual && classType.registeredClass.pureVirtualFunctions.push(methodName);
                    var proto = classType.registeredClass.instancePrototype, method = proto[methodName];
                    return void 0 === method || void 0 === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2 ? (unboundTypesHandler.argCount = argCount - 2, unboundTypesHandler.className = classType.name, proto[methodName] = unboundTypesHandler) : (ensureOverloadTable(proto, methodName, humanName), proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler), whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
                        var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
                        return void 0 === proto[methodName].overloadTable ? (memberFunction.argCount = argCount - 2, proto[methodName] = memberFunction) : proto[methodName].overloadTable[argCount - 2] = memberFunction, []
                    }), []
                })
            }

            function __emval_decref(handle) {
                handle > 4 && 0 == --emval_handle_array[handle].refcount && (emval_handle_array[handle] = void 0, emval_free_list.push(handle))
            }

            function count_emval_handles() {
                for (var count = 0, i = 5; i < emval_handle_array.length; ++i) void 0 !== emval_handle_array[i] && ++count;
                return count
            }

            function get_first_emval() {
                for (var i = 5; i < emval_handle_array.length; ++i) if (void 0 !== emval_handle_array[i]) return emval_handle_array[i];
                return null
            }

            function __emval_register(value) {
                switch (value) {
                    case void 0:
                        return 1;
                    case null:
                        return 2;
                    case!0:
                        return 3;
                    case!1:
                        return 4;
                    default:
                        var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
                        return emval_handle_array[handle] = {refcount: 1, value: value}, handle
                }
            }

            function __embind_register_emval(rawType, name) {
                name = readLatin1String(name), registerType(rawType, {
                    name: name, fromWireType: function (handle) {
                        var rv = emval_handle_array[handle].value;
                        return __emval_decref(handle), rv
                    }, toWireType: function (destructors, value) {
                        return __emval_register(value)
                    }, argPackAdvance: 8, readValueFromPointer: simpleReadValueFromPointer, destructorFunction: null
                })
            }

            function enumReadValueFromPointer(name, shift, signed) {
                switch (shift) {
                    case 0:
                        return function (pointer) {
                            var heap = signed ? HEAP8 : HEAPU8;
                            return this.fromWireType(heap[pointer])
                        };
                    case 1:
                        return function (pointer) {
                            var heap = signed ? HEAP16 : HEAPU16;
                            return this.fromWireType(heap[pointer >> 1])
                        };
                    case 2:
                        return function (pointer) {
                            var heap = signed ? HEAP32 : HEAPU32;
                            return this.fromWireType(heap[pointer >> 2])
                        };
                    default:
                        throw new TypeError("Unknown integer type: " + name)
                }
            }

            function __embind_register_enum(rawType, name, size, isSigned) {
                function ctor() {
                }

                var shift = getShiftFromSize(size);
                name = readLatin1String(name), ctor.values = {}, registerType(rawType, {
                    name: name,
                    constructor: ctor,
                    fromWireType: function (c) {
                        return this.constructor.values[c]
                    },
                    toWireType: function (destructors, c) {
                        return c.value
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: enumReadValueFromPointer(name, shift, isSigned),
                    destructorFunction: null
                }), exposePublicSymbol(name, ctor)
            }

            function requireRegisteredType(rawType, humanName) {
                var impl = registeredTypes[rawType];
                return void 0 === impl && throwBindingError(humanName + " has unknown type " + getTypeName(rawType)), impl
            }

            function __embind_register_enum_value(rawEnumType, name, enumValue) {
                var enumType = requireRegisteredType(rawEnumType, "enum");
                name = readLatin1String(name);
                var Enum = enumType.constructor, Value = Object.create(enumType.constructor.prototype, {
                    value: {value: enumValue},
                    constructor: {
                        value: createNamedFunction(enumType.name + "_" + name, function () {
                        })
                    }
                });
                Enum.values[enumValue] = Value, Enum[name] = Value
            }

            function _embind_repr(v) {
                if (null === v) return "null";
                var t = typeof v;
                return "object" === t || "array" === t || "function" === t ? v.toString() : "" + v
            }

            function floatReadValueFromPointer(name, shift) {
                switch (shift) {
                    case 2:
                        return function (pointer) {
                            return this.fromWireType(HEAPF32[pointer >> 2])
                        };
                    case 3:
                        return function (pointer) {
                            return this.fromWireType(HEAPF64[pointer >> 3])
                        };
                    default:
                        throw new TypeError("Unknown float type: " + name)
                }
            }

            function __embind_register_float(rawType, name, size) {
                var shift = getShiftFromSize(size);
                name = readLatin1String(name), registerType(rawType, {
                    name: name,
                    fromWireType: function (value) {
                        return value
                    },
                    toWireType: function (destructors, value) {
                        if ("number" != typeof value && "boolean" != typeof value) throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
                        return value
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: floatReadValueFromPointer(name, shift),
                    destructorFunction: null
                })
            }

            function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
                var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
                name = readLatin1String(name), rawInvoker = embind__requireFunction(signature, rawInvoker), exposePublicSymbol(name, function () {
                    throwUnboundTypeError("Cannot call " + name + " due to unbound types", argTypes)
                }, argCount - 1), whenDependentTypesAreResolved([], argTypes, function (argTypes) {
                    var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
                    return replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn), argCount - 1), []
                })
            }

            function integerReadValueFromPointer(name, shift, signed) {
                switch (shift) {
                    case 0:
                        return signed ? function (pointer) {
                            return HEAP8[pointer]
                        } : function (pointer) {
                            return HEAPU8[pointer]
                        };
                    case 1:
                        return signed ? function (pointer) {
                            return HEAP16[pointer >> 1]
                        } : function (pointer) {
                            return HEAPU16[pointer >> 1]
                        };
                    case 2:
                        return signed ? function (pointer) {
                            return HEAP32[pointer >> 2]
                        } : function (pointer) {
                            return HEAPU32[pointer >> 2]
                        };
                    default:
                        throw new TypeError("Unknown integer type: " + name)
                }
            }

            function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
                name = readLatin1String(name), -1 === maxRange && (maxRange = 4294967295);
                var shift = getShiftFromSize(size), fromWireType = function (value) {
                    return value
                };
                if (0 === minRange) {
                    var bitshift = 32 - 8 * size;
                    fromWireType = function (value) {
                        return value << bitshift >>> bitshift
                    }
                }
                var isUnsignedType = -1 != name.indexOf("unsigned");
                registerType(primitiveType, {
                    name: name,
                    fromWireType: fromWireType,
                    toWireType: function (destructors, value) {
                        if ("number" != typeof value && "boolean" != typeof value) throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
                        if (value < minRange || value > maxRange) throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ", " + maxRange + "]!");
                        return isUnsignedType ? value >>> 0 : 0 | value
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: integerReadValueFromPointer(name, shift, 0 !== minRange),
                    destructorFunction: null
                })
            }

            function __embind_register_memory_view(rawType, dataTypeIndex, name) {
                function decodeMemoryView(handle) {
                    handle >>= 2;
                    var heap = HEAPU32, size = heap[handle], data = heap[handle + 1];
                    return new TA(heap.buffer, data, size)
                }

                var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
                    TA = typeMapping[dataTypeIndex];
                name = readLatin1String(name), registerType(rawType, {
                    name: name,
                    fromWireType: decodeMemoryView,
                    argPackAdvance: 8,
                    readValueFromPointer: decodeMemoryView
                }, {ignoreDuplicateRegistrations: !0})
            }

            function __embind_register_smart_ptr(rawType, rawPointeeType, name, sharingPolicy, getPointeeSignature, rawGetPointee, constructorSignature, rawConstructor, shareSignature, rawShare, destructorSignature, rawDestructor) {
                name = readLatin1String(name), rawGetPointee = embind__requireFunction(getPointeeSignature, rawGetPointee), rawConstructor = embind__requireFunction(constructorSignature, rawConstructor), rawShare = embind__requireFunction(shareSignature, rawShare), rawDestructor = embind__requireFunction(destructorSignature, rawDestructor), whenDependentTypesAreResolved([rawType], [rawPointeeType], function (pointeeType) {
                    return pointeeType = pointeeType[0], [new RegisteredPointer(name, pointeeType.registeredClass, !1, !1, !0, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor)]
                })
            }

            function __embind_register_std_string(rawType, name) {
                name = readLatin1String(name), registerType(rawType, {
                    name: name,
                    fromWireType: function (value) {
                        for (var length = HEAPU32[value >> 2], a = new Array(length), i = 0; i < length; ++i) a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
                        return _free(value), a.join("")
                    },
                    toWireType: function (destructors, value) {
                        function getTAElement(ta, index) {
                            return ta[index]
                        }

                        function getStringElement(string, index) {
                            return string.charCodeAt(index)
                        }

                        value instanceof ArrayBuffer && (value = new Uint8Array(value));
                        var getElement;
                        value instanceof Uint8Array ? getElement = getTAElement : value instanceof Uint8ClampedArray ? getElement = getTAElement : value instanceof Int8Array ? getElement = getTAElement : "string" == typeof value ? getElement = getStringElement : throwBindingError("Cannot pass non-string to std::string");
                        var length = value.length, ptr = _malloc(4 + length);
                        HEAPU32[ptr >> 2] = length;
                        for (var i = 0; i < length; ++i) {
                            var charCode = getElement(value, i);
                            charCode > 255 && (_free(ptr), throwBindingError("String has UTF-16 code units that do not fit in 8 bits")), HEAPU8[ptr + 4 + i] = charCode
                        }
                        return null !== destructors && destructors.push(_free, ptr), ptr
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: simpleReadValueFromPointer,
                    destructorFunction: function (ptr) {
                        _free(ptr)
                    }
                })
            }

            function __embind_register_std_wstring(rawType, charSize, name) {
                name = readLatin1String(name);
                var getHeap, shift;
                2 === charSize ? (getHeap = function () {
                    return HEAPU16
                }, shift = 1) : 4 === charSize && (getHeap = function () {
                    return HEAPU32
                }, shift = 2), registerType(rawType, {
                    name: name,
                    fromWireType: function (value) {
                        for (var HEAP = getHeap(), length = HEAPU32[value >> 2], a = new Array(length), start = value + 4 >> shift, i = 0; i < length; ++i) a[i] = String.fromCharCode(HEAP[start + i]);
                        return _free(value), a.join("")
                    },
                    toWireType: function (destructors, value) {
                        var HEAP = getHeap(), length = value.length, ptr = _malloc(4 + length * charSize);
                        HEAPU32[ptr >> 2] = length;
                        for (var start = ptr + 4 >> shift, i = 0; i < length; ++i) HEAP[start + i] = value.charCodeAt(i);
                        return null !== destructors && destructors.push(_free, ptr), ptr
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: simpleReadValueFromPointer,
                    destructorFunction: function (ptr) {
                        _free(ptr)
                    }
                })
            }

            function __embind_register_value_object(rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) {
                structRegistrations[rawType] = {
                    name: readLatin1String(name),
                    rawConstructor: embind__requireFunction(constructorSignature, rawConstructor),
                    rawDestructor: embind__requireFunction(destructorSignature, rawDestructor),
                    fields: []
                }
            }

            function __embind_register_value_object_field(structType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) {
                structRegistrations[structType].fields.push({
                    fieldName: readLatin1String(fieldName),
                    getterReturnType: getterReturnType,
                    getter: embind__requireFunction(getterSignature, getter),
                    getterContext: getterContext,
                    setterArgumentType: setterArgumentType,
                    setter: embind__requireFunction(setterSignature, setter),
                    setterContext: setterContext
                })
            }

            function __embind_register_void(rawType, name) {
                name = readLatin1String(name), registerType(rawType, {
                    isVoid: !0,
                    name: name,
                    argPackAdvance: 0,
                    fromWireType: function () {
                    },
                    toWireType: function (destructors, o) {
                    }
                })
            }

            function requireHandle(handle) {
                return handle || throwBindingError("Cannot use deleted val. handle = " + handle), emval_handle_array[handle].value
            }

            function __emval_as(handle, returnType, destructorsRef) {
                handle = requireHandle(handle), returnType = requireRegisteredType(returnType, "emval::as");
                var destructors = [], rd = __emval_register(destructors);
                return HEAP32[destructorsRef >> 2] = rd, returnType.toWireType(destructors, handle)
            }

            function __emval_lookupTypes(argCount, argTypes, argWireTypes) {
                for (var a = new Array(argCount), i = 0; i < argCount; ++i) a[i] = requireRegisteredType(HEAP32[(argTypes >> 2) + i], "parameter " + i);
                return a
            }

            function __emval_call(handle, argCount, argTypes, argv) {
                handle = requireHandle(handle);
                for (var types = __emval_lookupTypes(argCount, argTypes), args = new Array(argCount), i = 0; i < argCount; ++i) {
                    var type = types[i];
                    args[i] = type.readValueFromPointer(argv), argv += type.argPackAdvance
                }
                return __emval_register(handle.apply(void 0, args))
            }

            function __emval_allocateDestructors(destructorsRef) {
                var destructors = [];
                return HEAP32[destructorsRef >> 2] = __emval_register(destructors), destructors
            }

            function getStringOrSymbol(address) {
                var symbol = emval_symbols[address];
                return void 0 === symbol ? readLatin1String(address) : symbol
            }

            function __emval_call_method(caller, handle, methodName, destructorsRef, args) {
                return caller = emval_methodCallers[caller], handle = requireHandle(handle), methodName = getStringOrSymbol(methodName), caller(handle, methodName, __emval_allocateDestructors(destructorsRef), args)
            }

            function __emval_call_void_method(caller, handle, methodName, args) {
                caller = emval_methodCallers[caller], handle = requireHandle(handle), methodName = getStringOrSymbol(methodName), caller(handle, methodName, null, args)
            }

            function emval_get_global() {
                function testGlobal(obj) {
                    obj.$$$embind_global$$$ = obj;
                    var success = "object" == typeof $$$embind_global$$$ && obj.$$$embind_global$$$ === obj;
                    return success || delete obj.$$$embind_global$$$, success
                }

                if ("object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
                if ("object" == typeof global && testGlobal(global) ? $$$embind_global$$$ = global : "object" == typeof window && testGlobal(window) && ($$$embind_global$$$ = window), "object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
                throw Error("unable to get global object.")
            }

            function __emval_get_global(name) {
                return 0 === name ? __emval_register(emval_get_global()) : (name = getStringOrSymbol(name), __emval_register(emval_get_global()[name]))
            }

            function __emval_addMethodCaller(caller) {
                var id = emval_methodCallers.length;
                return emval_methodCallers.push(caller), id
            }

            function __emval_get_method_caller(argCount, argTypes) {
                var types = __emval_lookupTypes(argCount, argTypes), retType = types[0], argN = new Array(argCount - 1);
                return __emval_addMethodCaller(function (handle, name, destructors, args) {
                    for (var offset = 0, i = 0; i < argCount - 1; ++i) argN[i] = types[i + 1].readValueFromPointer(args + offset), offset += types[i + 1].argPackAdvance;
                    for (var rv = handle[name].apply(handle, argN), i = 0; i < argCount - 1; ++i) types[i + 1].deleteObject && types[i + 1].deleteObject(argN[i]);
                    if (!retType.isVoid) return retType.toWireType(destructors, rv)
                })
            }

            function __emval_get_module_property(name) {
                return name = getStringOrSymbol(name), __emval_register(Module[name])
            }

            function __emval_get_property(handle, key) {
                return handle = requireHandle(handle), key = requireHandle(key), __emval_register(handle[key])
            }

            function __emval_incref(handle) {
                handle > 4 && (emval_handle_array[handle].refcount += 1)
            }

            function craftEmvalAllocator(argCount) {
                var argsList = new Array(argCount + 1);
                return function (constructor, argTypes, args) {
                    argsList[0] = constructor;
                    for (var i = 0; i < argCount; ++i) {
                        var argType = requireRegisteredType(HEAP32[(argTypes >> 2) + i], "parameter " + i);
                        argsList[i + 1] = argType.readValueFromPointer(args), args += argType.argPackAdvance
                    }
                    return __emval_register(new (constructor.bind.apply(constructor, argsList)))
                }
            }

            function __emval_new(handle, argCount, argTypes, args) {
                handle = requireHandle(handle);
                var newer = emval_newers[argCount];
                return newer || (newer = craftEmvalAllocator(argCount), emval_newers[argCount] = newer), newer(handle, argTypes, args)
            }

            function __emval_new_array() {
                return __emval_register([])
            }

            function __emval_new_cstring(v) {
                return __emval_register(getStringOrSymbol(v))
            }

            function __emval_run_destructors(handle) {
                runDestructors(emval_handle_array[handle].value), __emval_decref(handle)
            }

            function __emval_set_property(handle, key, value) {
                handle = requireHandle(handle), key = requireHandle(key), value = requireHandle(value), handle[key] = value
            }

            function __emval_take_value(type, argv) {
                return type = requireRegisteredType(type, "_emval_take_value"), __emval_register(type.readValueFromPointer(argv))
            }

            function _abort() {
                Module.abort()
            }

            function _clock() {
                return void 0 === _clock.start && (_clock.start = Date.now()), 1e3 * (Date.now() - _clock.start) | 0
            }

            function _emscripten_get_now() {
                abort()
            }

            function _emscripten_get_now_is_monotonic() {
                return ENVIRONMENT_IS_NODE || "undefined" != typeof dateNow || (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && self.performance && self.performance.now
            }

            function _clock_gettime(clk_id, tp) {
                var now;
                if (0 === clk_id) now = Date.now(); else {
                    if (1 !== clk_id || !_emscripten_get_now_is_monotonic()) return ___setErrNo(ERRNO_CODES.EINVAL), -1;
                    now = _emscripten_get_now()
                }
                return HEAP32[tp >> 2] = now / 1e3 | 0, HEAP32[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0, 0
            }

            function _getenv(name) {
                return 0 === name ? 0 : (name = Pointer_stringify(name), ENV.hasOwnProperty(name) ? (_getenv.ret && _free(_getenv.ret), _getenv.ret = allocateUTF8(ENV[name]), _getenv.ret) : 0)
            }

            function _getpagesize() {
                return PAGE_SIZE
            }

            function _gettimeofday(ptr) {
                var now = Date.now();
                return HEAP32[ptr >> 2] = now / 1e3 | 0, HEAP32[ptr + 4 >> 2] = now % 1e3 * 1e3 | 0, 0
            }

            function _llvm_stackrestore(p) {
                var self = _llvm_stacksave, ret = self.LLVM_SAVEDSTACKS[p];
                self.LLVM_SAVEDSTACKS.splice(p, 1), stackRestore(ret)
            }

            function _llvm_stacksave() {
                var self = _llvm_stacksave;
                return self.LLVM_SAVEDSTACKS || (self.LLVM_SAVEDSTACKS = []), self.LLVM_SAVEDSTACKS.push(stackSave()), self.LLVM_SAVEDSTACKS.length - 1
            }

            function _llvm_trap() {
                abort("trap!")
            }

            function _emscripten_memcpy_big(dest, src, num) {
                return HEAPU8.set(HEAPU8.subarray(src, src + num), dest), dest
            }

            function _usleep(useconds) {
                var msec = useconds / 1e3;
                if ((ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && self.performance && self.performance.now) for (var start = self.performance.now(); self.performance.now() - start < msec;) ; else for (var start = Date.now(); Date.now() - start < msec;) ;
                return 0
            }

            function _nanosleep(rqtp, rmtp) {
                var seconds = HEAP32[rqtp >> 2], nanoseconds = HEAP32[rqtp + 4 >> 2];
                return 0 !== rmtp && (HEAP32[rmtp >> 2] = 0, HEAP32[rmtp + 4 >> 2] = 0), _usleep(1e6 * seconds + nanoseconds / 1e3)
            }

            function _pthread_cond_wait() {
                return 0
            }

            function _pthread_getspecific(key) {
                return PTHREAD_SPECIFIC[key] || 0
            }

            function _pthread_key_create(key, destructor) {
                return 0 == key ? ERRNO_CODES.EINVAL : (HEAP32[key >> 2] = PTHREAD_SPECIFIC_NEXT_KEY, PTHREAD_SPECIFIC[PTHREAD_SPECIFIC_NEXT_KEY] = 0, PTHREAD_SPECIFIC_NEXT_KEY++, 0)
            }

            function _pthread_mutex_destroy() {
            }

            function _pthread_once(ptr, func) {
                _pthread_once.seen || (_pthread_once.seen = {}), ptr in _pthread_once.seen || (Module.dynCall_v(func), _pthread_once.seen[ptr] = 1)
            }

            function _pthread_setspecific(key, value) {
                return key in PTHREAD_SPECIFIC ? (PTHREAD_SPECIFIC[key] = value, 0) : ERRNO_CODES.EINVAL
            }

            function __isLeapYear(year) {
                return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
            }

            function __arraySum(array, index) {
                for (var sum = 0, i = 0; i <= index; sum += array[i++]) ;
                return sum
            }

            function __addDays(date, days) {
                for (var newDate = new Date(date.getTime()); days > 0;) {
                    var leap = __isLeapYear(newDate.getFullYear()), currentMonth = newDate.getMonth(),
                        daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
                    if (!(days > daysInCurrentMonth - newDate.getDate())) return newDate.setDate(newDate.getDate() + days), newDate;
                    days -= daysInCurrentMonth - newDate.getDate() + 1, newDate.setDate(1), currentMonth < 11 ? newDate.setMonth(currentMonth + 1) : (newDate.setMonth(0), newDate.setFullYear(newDate.getFullYear() + 1))
                }
                return newDate
            }

            function _strftime(s, maxsize, format, tm) {
                function leadingSomething(value, digits, character) {
                    for (var str = "number" == typeof value ? value.toString() : value || ""; str.length < digits;) str = character[0] + str;
                    return str
                }

                function leadingNulls(value, digits) {
                    return leadingSomething(value, digits, "0")
                }

                function compareByDay(date1, date2) {
                    function sgn(value) {
                        return value < 0 ? -1 : value > 0 ? 1 : 0
                    }

                    var compare;
                    return 0 === (compare = sgn(date1.getFullYear() - date2.getFullYear())) && 0 === (compare = sgn(date1.getMonth() - date2.getMonth())) && (compare = sgn(date1.getDate() - date2.getDate())), compare
                }

                function getFirstWeekStartDate(janFourth) {
                    switch (janFourth.getDay()) {
                        case 0:
                            return new Date(janFourth.getFullYear() - 1, 11, 29);
                        case 1:
                            return janFourth;
                        case 2:
                            return new Date(janFourth.getFullYear(), 0, 3);
                        case 3:
                            return new Date(janFourth.getFullYear(), 0, 2);
                        case 4:
                            return new Date(janFourth.getFullYear(), 0, 1);
                        case 5:
                            return new Date(janFourth.getFullYear() - 1, 11, 31);
                        case 6:
                            return new Date(janFourth.getFullYear() - 1, 11, 30)
                    }
                }

                function getWeekBasedYear(date) {
                    var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday),
                        janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4),
                        janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4),
                        firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear),
                        firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
                    return compareByDay(firstWeekStartThisYear, thisDate) <= 0 ? compareByDay(firstWeekStartNextYear, thisDate) <= 0 ? thisDate.getFullYear() + 1 : thisDate.getFullYear() : thisDate.getFullYear() - 1
                }

                var tm_zone = HEAP32[tm + 40 >> 2], date = {
                    tm_sec: HEAP32[tm >> 2],
                    tm_min: HEAP32[tm + 4 >> 2],
                    tm_hour: HEAP32[tm + 8 >> 2],
                    tm_mday: HEAP32[tm + 12 >> 2],
                    tm_mon: HEAP32[tm + 16 >> 2],
                    tm_year: HEAP32[tm + 20 >> 2],
                    tm_wday: HEAP32[tm + 24 >> 2],
                    tm_yday: HEAP32[tm + 28 >> 2],
                    tm_isdst: HEAP32[tm + 32 >> 2],
                    tm_gmtoff: HEAP32[tm + 36 >> 2],
                    tm_zone: tm_zone ? Pointer_stringify(tm_zone) : ""
                }, pattern = Pointer_stringify(format), EXPANSION_RULES_1 = {
                    "%c": "%a %b %d %H:%M:%S %Y",
                    "%D": "%m/%d/%y",
                    "%F": "%Y-%m-%d",
                    "%h": "%b",
                    "%r": "%I:%M:%S %p",
                    "%R": "%H:%M",
                    "%T": "%H:%M:%S",
                    "%x": "%m/%d/%y",
                    "%X": "%H:%M:%S"
                };
                for (var rule in EXPANSION_RULES_1) pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
                var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    EXPANSION_RULES_2 = {
                        "%a": function (date) {
                            return WEEKDAYS[date.tm_wday].substring(0, 3)
                        }, "%A": function (date) {
                            return WEEKDAYS[date.tm_wday]
                        }, "%b": function (date) {
                            return MONTHS[date.tm_mon].substring(0, 3)
                        }, "%B": function (date) {
                            return MONTHS[date.tm_mon]
                        }, "%C": function (date) {
                            return leadingNulls((date.tm_year + 1900) / 100 | 0, 2)
                        }, "%d": function (date) {
                            return leadingNulls(date.tm_mday, 2)
                        }, "%e": function (date) {
                            return leadingSomething(date.tm_mday, 2, " ")
                        }, "%g": function (date) {
                            return getWeekBasedYear(date).toString().substring(2)
                        }, "%G": function (date) {
                            return getWeekBasedYear(date)
                        }, "%H": function (date) {
                            return leadingNulls(date.tm_hour, 2)
                        }, "%I": function (date) {
                            var twelveHour = date.tm_hour;
                            return 0 == twelveHour ? twelveHour = 12 : twelveHour > 12 && (twelveHour -= 12), leadingNulls(twelveHour, 2)
                        }, "%j": function (date) {
                            return leadingNulls(date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1), 3)
                        }, "%m": function (date) {
                            return leadingNulls(date.tm_mon + 1, 2)
                        }, "%M": function (date) {
                            return leadingNulls(date.tm_min, 2)
                        }, "%n": function () {
                            return "\n"
                        }, "%p": function (date) {
                            return date.tm_hour >= 0 && date.tm_hour < 12 ? "AM" : "PM"
                        }, "%S": function (date) {
                            return leadingNulls(date.tm_sec, 2)
                        }, "%t": function () {
                            return "\t"
                        }, "%u": function (date) {
                            return new Date(date.tm_year + 1900, date.tm_mon + 1, date.tm_mday, 0, 0, 0, 0).getDay() || 7
                        }, "%U": function (date) {
                            var janFirst = new Date(date.tm_year + 1900, 0, 1),
                                firstSunday = 0 === janFirst.getDay() ? janFirst : __addDays(janFirst, 7 - janFirst.getDay()),
                                endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
                            if (compareByDay(firstSunday, endDate) < 0) {
                                var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31,
                                    firstSundayUntilEndJanuary = 31 - firstSunday.getDate(),
                                    days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
                                return leadingNulls(Math.ceil(days / 7), 2)
                            }
                            return 0 === compareByDay(firstSunday, janFirst) ? "01" : "00"
                        }, "%V": function (date) {
                            var janFourthThisYear = new Date(date.tm_year + 1900, 0, 4),
                                janFourthNextYear = new Date(date.tm_year + 1901, 0, 4),
                                firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear),
                                firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear),
                                endDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
                            if (compareByDay(endDate, firstWeekStartThisYear) < 0) return "53";
                            if (compareByDay(firstWeekStartNextYear, endDate) <= 0) return "01";
                            var daysDifference;
                            return daysDifference = firstWeekStartThisYear.getFullYear() < date.tm_year + 1900 ? date.tm_yday + 32 - firstWeekStartThisYear.getDate() : date.tm_yday + 1 - firstWeekStartThisYear.getDate(), leadingNulls(Math.ceil(daysDifference / 7), 2)
                        }, "%w": function (date) {
                            return new Date(date.tm_year + 1900, date.tm_mon + 1, date.tm_mday, 0, 0, 0, 0).getDay()
                        }, "%W": function (date) {
                            var janFirst = new Date(date.tm_year, 0, 1),
                                firstMonday = 1 === janFirst.getDay() ? janFirst : __addDays(janFirst, 0 === janFirst.getDay() ? 1 : 7 - janFirst.getDay() + 1),
                                endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
                            if (compareByDay(firstMonday, endDate) < 0) {
                                var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31,
                                    firstMondayUntilEndJanuary = 31 - firstMonday.getDate(),
                                    days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
                                return leadingNulls(Math.ceil(days / 7), 2)
                            }
                            return 0 === compareByDay(firstMonday, janFirst) ? "01" : "00"
                        }, "%y": function (date) {
                            return (date.tm_year + 1900).toString().substring(2)
                        }, "%Y": function (date) {
                            return date.tm_year + 1900
                        }, "%z": function (date) {
                            var off = date.tm_gmtoff, ahead = off >= 0;
                            return off = Math.abs(off) / 60, off = off / 60 * 100 + off % 60, (ahead ? "+" : "-") + String("0000" + off).slice(-4)
                        }, "%Z": function (date) {
                            return date.tm_zone
                        }, "%%": function () {
                            return "%"
                        }
                    };
                for (var rule in EXPANSION_RULES_2) pattern.indexOf(rule) >= 0 && (pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date)));
                var bytes = intArrayFromString(pattern, !1);
                return bytes.length > maxsize ? 0 : (writeArrayToMemory(bytes, s), bytes.length - 1)
            }

            function _strftime_l(s, maxsize, format, tm) {
                return _strftime(s, maxsize, format, tm)
            }

            function intArrayFromString(stringy, dontAddNull, length) {
                var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1, u8array = new Array(len),
                    numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
                return dontAddNull && (u8array.length = numBytesWritten), u8array
            }

            function ExitStatus(status) {
                this.name = "ExitStatus", this.message = "Program terminated with exit(" + status + ")", this.status = status
            }

            function run(args) {
                function doRun() {
                    Module.calledRun || (Module.calledRun = !0, ABORT || (ensureInitRuntime(), preMain(), Module.onRuntimeInitialized && Module.onRuntimeInitialized(), Module._main && shouldRunNow && Module.callMain(args), postRun()))
                }

                args = args || Module.arguments, runDependencies > 0 || (preRun(), runDependencies > 0 || Module.calledRun || (Module.setStatus ? (Module.setStatus("Running..."), setTimeout(function () {
                    setTimeout(function () {
                        Module.setStatus("")
                    }, 1), doRun()
                }, 1)) : doRun()))
            }

            function exit(status, implicit) {
                implicit && Module.noExitRuntime && 0 === status || (Module.noExitRuntime || (ABORT = !0, EXITSTATUS = status, STACKTOP = initialStackTop, exitRuntime(), Module.onExit && Module.onExit(status)), ENVIRONMENT_IS_NODE && process.exit(status), Module.quit(status, new ExitStatus(status)))
            }

            function abort(what) {
                throw Module.onAbort && Module.onAbort(what), void 0 !== what ? (Module.print(what), Module.printErr(what), what = JSON.stringify(what)) : what = "", ABORT = !0, EXITSTATUS = 1, "abort(" + what + "). Build with -s ASSERTIONS=1 for more info."
            }

            var key, Module = void 0 !== Module ? Module : {}, moduleOverrides = {};
            for (key in Module) Module.hasOwnProperty(key) && (moduleOverrides[key] = Module[key]);
            Module.arguments = [], Module.thisProgram = "./this.program", Module.quit = function (status, toThrow) {
                throw toThrow
            }, Module.preRun = [], Module.postRun = [];
            var ENVIRONMENT_IS_WEB = !1, ENVIRONMENT_IS_WORKER = !1, ENVIRONMENT_IS_NODE = !1,
                ENVIRONMENT_IS_SHELL = !1;
            if (Module.ENVIRONMENT) if ("WEB" === Module.ENVIRONMENT) ENVIRONMENT_IS_WEB = !0; else if ("WORKER" === Module.ENVIRONMENT) ENVIRONMENT_IS_WORKER = !0; else if ("NODE" === Module.ENVIRONMENT) ENVIRONMENT_IS_NODE = !0; else {
                if ("SHELL" !== Module.ENVIRONMENT) throw new Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");
                ENVIRONMENT_IS_SHELL = !0
            } else ENVIRONMENT_IS_WEB = "object" == typeof window, ENVIRONMENT_IS_WORKER = "function" == typeof importScripts, ENVIRONMENT_IS_NODE = "object" == typeof process && !0 && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER, ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
            if (ENVIRONMENT_IS_NODE) {
                var nodeFS, nodePath;
                Module.read = function (filename, binary) {
                    var ret;
                    return nodeFS || (nodeFS = __webpack_require__(113)), nodePath || (nodePath = __webpack_require__(114)), filename = nodePath.normalize(filename), ret = nodeFS.readFileSync(filename), binary ? ret : ret.toString()
                }, Module.readBinary = function (filename) {
                    var ret = Module.read(filename, !0);
                    return ret.buffer || (ret = new Uint8Array(ret)), assert(ret.buffer), ret
                }, process.argv.length > 1 && (Module.thisProgram = process.argv[1].replace(/\\/g, "/")), Module.arguments = process.argv.slice(2), module.exports = Module, process.on("uncaughtException", function (ex) {
                    if (!(ex instanceof ExitStatus)) throw ex
                }), process.on("unhandledRejection", function (reason, p) {
                    process.exit(1)
                }), Module.inspect = function () {
                    return "[Emscripten Module object]"
                }
            } else if (ENVIRONMENT_IS_SHELL) "undefined" != typeof read && (Module.read = function (f) {
                return read(f)
            }), Module.readBinary = function (f) {
                var data;
                return "function" == typeof readbuffer ? new Uint8Array(readbuffer(f)) : (data = read(f, "binary"), assert("object" == typeof data), data)
            }, "undefined" != typeof scriptArgs ? Module.arguments = scriptArgs : void 0 !== arguments && (Module.arguments = arguments), "function" == typeof quit && (Module.quit = function (status, toThrow) {
                quit(status)
            }); else {
                if (!ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER) throw new Error("not compiled for this environment");
                Module.read = function (url) {
                    var xhr = new XMLHttpRequest;
                    return xhr.open("GET", url, !1), xhr.send(null), xhr.responseText
                }, ENVIRONMENT_IS_WORKER && (Module.readBinary = function (url) {
                    var xhr = new XMLHttpRequest;
                    return xhr.open("GET", url, !1), xhr.responseType = "arraybuffer", xhr.send(null), new Uint8Array(xhr.response)
                }), Module.readAsync = function (url, onload, onerror) {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", url, !0), xhr.responseType = "arraybuffer", xhr.onload = function () {
                        if (200 == xhr.status || 0 == xhr.status && xhr.response) return void onload(xhr.response);
                        onerror()
                    }, xhr.onerror = onerror, xhr.send(null)
                }, Module.setWindowTitle = function (title) {
                    document.title = title
                }
            }
            Module.print = "undefined" != typeof console ? console.log.bind(console) : "undefined" != typeof print ? print : null, Module.printErr = "undefined" != typeof printErr ? printErr : "undefined" != typeof console && console.warn.bind(console) || Module.print, Module.print = Module.print, Module.printErr = Module.printErr;
            for (key in moduleOverrides) moduleOverrides.hasOwnProperty(key) && (Module[key] = moduleOverrides[key]);
            moduleOverrides = void 0;
            var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64, STATIC_BASE, STATICTOP,
                staticSealed, STACK_BASE, STACKTOP, STACK_MAX, DYNAMIC_BASE, DYNAMICTOP_PTR, STACK_ALIGN = 16,
                asm2wasmImports = {
                    "f64-rem": function (x, y) {
                        return x % y
                    }, debugger: function () {
                    }
                }, ABORT = (new Array(0), 0), EXITSTATUS = 0,
                UTF8Decoder = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0,
                PAGE_SIZE = ("undefined" != typeof TextDecoder && new TextDecoder("utf-16le"), 16384),
                WASM_PAGE_SIZE = 65536, ASMJS_PAGE_SIZE = 16777216, MIN_TOTAL_MEMORY = 16777216;
            STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0, staticSealed = !1, Module.reallocBuffer || (Module.reallocBuffer = function (size) {
                var ret;
                try {
                    if (ArrayBuffer.transfer) ret = ArrayBuffer.transfer(buffer, size); else {
                        var oldHEAP8 = HEAP8;
                        ret = new ArrayBuffer(size);
                        new Int8Array(ret).set(oldHEAP8)
                    }
                } catch (e) {
                    return !1
                }
                return !!_emscripten_replace_memory(ret) && ret
            });
            var byteLength;
            try {
                byteLength = Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get), byteLength(new ArrayBuffer(4))
            } catch (e) {
                byteLength = function (buffer) {
                    return buffer.byteLength
                }
            }
            var TOTAL_STACK = Module.TOTAL_STACK || 5242880, TOTAL_MEMORY = Module.TOTAL_MEMORY || 16777216;
            if (TOTAL_MEMORY < TOTAL_STACK && Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + TOTAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")"), Module.buffer ? buffer = Module.buffer : ("object" == typeof WebAssembly && "function" == typeof WebAssembly.Memory ? (Module.wasmMemory = new WebAssembly.Memory({initial: TOTAL_MEMORY / WASM_PAGE_SIZE}), buffer = Module.wasmMemory.buffer) : buffer = new ArrayBuffer(TOTAL_MEMORY), Module.buffer = buffer), updateGlobalBufferViews(), HEAP32[0] = 1668509029, HEAP16[1] = 25459, 115 !== HEAPU8[2] || 99 !== HEAPU8[3]) throw"Runtime error: expected the system to be little-endian!";
            var __ATPRERUN__ = [], __ATINIT__ = [], __ATMAIN__ = [], __ATEXIT__ = [], __ATPOSTRUN__ = [],
                runtimeInitialized = !1, runtimeExited = !1,
                runDependencies = (Math.abs, Math.cos, Math.sin, Math.tan, Math.acos, Math.asin, Math.atan, Math.atan2, Math.exp, Math.log, Math.sqrt, Math.ceil, Math.floor, Math.pow, Math.imul, Math.fround, Math.round, Math.min, Math.max, Math.clz32, Math.trunc, 0),
                runDependencyWatcher = null, dependenciesFulfilled = null;
            Module.preloadedImages = {}, Module.preloadedAudios = {};
            var dataURIPrefix = "data:application/octet-stream;base64,";
            !function () {
                function mergeMemory(newBuffer) {
                    var oldBuffer = Module.buffer;
                    newBuffer.byteLength < oldBuffer.byteLength && Module.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
                    var oldView = new Int8Array(oldBuffer);
                    new Int8Array(newBuffer).set(oldView), updateGlobalBuffer(newBuffer), updateGlobalBufferViews()
                }

                function fixImports(imports) {
                    return imports
                }

                function getBinary() {
                    try {
                        if (Module.wasmBinary) return new Uint8Array(Module.wasmBinary);
                        if (Module.readBinary) return Module.readBinary(wasmBinaryFile);
                        throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)"
                    } catch (err) {
                        abort(err)
                    }
                }

                function getBinaryPromise() {
                    return Module.wasmBinary || !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER || "function" != typeof fetch ? new Promise(function (resolve, reject) {
                        resolve(getBinary())
                    }) : fetch(wasmBinaryFile, {credentials: "same-origin"}).then(function (response) {
                        if (!response.ok) throw"failed to load wasm binary file at '" + wasmBinaryFile + "'";
                        return response.arrayBuffer()
                    }).catch(function () {
                        return getBinary()
                    })
                }

                function doNativeWasm(global, env, providedBuffer) {
                    function receiveInstance(instance, module) {
                        exports = instance.exports, exports.memory && mergeMemory(exports.memory), Module.asm = exports, Module.usingWasm = !0, removeRunDependency("wasm-instantiate")
                    }

                    function receiveInstantiatedSource(output) {
                        receiveInstance(output.instance, output.module)
                    }

                    function instantiateArrayBuffer(receiver) {
                        getBinaryPromise().then(function (binary) {
                            return WebAssembly.instantiate(binary, info)
                        }).then(receiver).catch(function (reason) {
                            Module.printErr("failed to asynchronously prepare wasm: " + reason), abort(reason)
                        })
                    }

                    if ("object" != typeof WebAssembly) return Module.printErr("no native wasm support detected"), !1;
                    if (!(Module.wasmMemory instanceof WebAssembly.Memory)) return Module.printErr("no native wasm Memory in use"), !1;
                    if (env.memory = Module.wasmMemory, info.global = {
                        NaN: NaN,
                        Infinity: 1 / 0
                    }, info["global.Math"] = Math, info.env = env, addRunDependency("wasm-instantiate"), Module.instantiateWasm) try {
                        return Module.instantiateWasm(info, receiveInstance)
                    } catch (e) {
                        return Module.printErr("Module.instantiateWasm callback failed with error: " + e), !1
                    }
                    return Module.wasmBinary || "function" != typeof WebAssembly.instantiateStreaming || isDataURI(wasmBinaryFile) || "function" != typeof fetch ? instantiateArrayBuffer(receiveInstantiatedSource) : WebAssembly.instantiateStreaming(fetch(wasmBinaryFile, {credentials: "same-origin"}), info).then(receiveInstantiatedSource).catch(function (reason) {
                        Module.printErr("wasm streaming compile failed: " + reason), Module.printErr("falling back to ArrayBuffer instantiation"), instantiateArrayBuffer(receiveInstantiatedSource)
                    }), {}
                }

                var wasmTextFile = "psp.wast", wasmBinaryFile = "psp.wasm", asmjsCodeFile = "psp.temp.asm.js";
                "function" == typeof Module.locateFile && (isDataURI(wasmTextFile) || (wasmTextFile = Module.locateFile(wasmTextFile)), isDataURI(wasmBinaryFile) || (wasmBinaryFile = Module.locateFile(wasmBinaryFile)), isDataURI(asmjsCodeFile) || (asmjsCodeFile = Module.locateFile(asmjsCodeFile)));
                var info = {global: null, env: null, asm2wasm: asm2wasmImports, parent: Module}, exports = null;
                Module.asmPreload = Module.asm;
                var asmjsReallocBuffer = Module.reallocBuffer, wasmReallocBuffer = function (size) {
                    size = alignUp(size, Module.usingWasm ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE);
                    var old = Module.buffer, oldSize = old.byteLength;
                    if (Module.usingWasm) try {
                        return -1 !== Module.wasmMemory.grow((size - oldSize) / 65536) ? Module.buffer = Module.wasmMemory.buffer : null
                    } catch (e) {
                        return null
                    }
                };
                Module.reallocBuffer = function (size) {
                    return "asmjs" === finalMethod ? asmjsReallocBuffer(size) : wasmReallocBuffer(size)
                };
                var finalMethod = "";
                Module.asm = function (global, env, providedBuffer) {
                    if (env = fixImports(env), !env.table) {
                        var TABLE_SIZE = Module.wasmTableSize;
                        void 0 === TABLE_SIZE && (TABLE_SIZE = 1024);
                        var MAX_TABLE_SIZE = Module.wasmMaxTableSize;
                        "object" == typeof WebAssembly && "function" == typeof WebAssembly.Table ? env.table = void 0 !== MAX_TABLE_SIZE ? new WebAssembly.Table({
                            initial: TABLE_SIZE,
                            maximum: MAX_TABLE_SIZE,
                            element: "anyfunc"
                        }) : new WebAssembly.Table({
                            initial: TABLE_SIZE,
                            element: "anyfunc"
                        }) : env.table = new Array(TABLE_SIZE), Module.wasmTable = env.table
                    }
                    env.memoryBase || (env.memoryBase = Module.STATIC_BASE), env.tableBase || (env.tableBase = 0);
                    var exports;
                    return exports = doNativeWasm(global, env, providedBuffer), assert(exports, "no binaryen method succeeded."), exports
                }
            }();
            var ASM_CONSTS = [function () {
                if (global.dispatchEvent && !global._perspective_initialized && global.document) {
                    global._perspective_initialized = !0;
                    var event = global.document.createEvent("Event");
                    event.initEvent("perspective-ready", !1, !0), global.dispatchEvent(event)
                } else global.document || "undefined" == typeof self || self.postMessage({})
            }];
            STATIC_BASE = 1024, STATICTOP = STATIC_BASE + 54448, __ATINIT__.push({
                func: function () {
                    __GLOBAL__I_000101()
                }
            }, {
                func: function () {
                    __GLOBAL__sub_I_main_cpp()
                }
            }, {
                func: function () {
                    __GLOBAL__sub_I_sym_table_cpp()
                }
            }, {
                func: function () {
                    __GLOBAL__sub_I_bind_cpp()
                }
            }, {
                func: function () {
                    ___emscripten_environ_constructor()
                }
            }, {
                func: function () {
                    __GLOBAL__sub_I_iostream_cpp()
                }
            });
            Module.STATIC_BASE = STATIC_BASE, Module.STATIC_BUMP = 54448, STATICTOP += 16;
            var ENV = {}, EXCEPTIONS = {
                    last: 0, caught: [], infos: {}, deAdjust: function (adjusted) {
                        if (!adjusted || EXCEPTIONS.infos[adjusted]) return adjusted;
                        for (var key in EXCEPTIONS.infos) {
                            var ptr = +key;
                            if (EXCEPTIONS.infos[ptr].adjusted === adjusted) return ptr
                        }
                        return adjusted
                    }, addRef: function (ptr) {
                        if (ptr) {
                            EXCEPTIONS.infos[ptr].refcount++
                        }
                    }, decRef: function (ptr) {
                        if (ptr) {
                            var info = EXCEPTIONS.infos[ptr];
                            assert(info.refcount > 0), info.refcount--, 0 !== info.refcount || info.rethrown || (info.destructor && Module.dynCall_vi(info.destructor, ptr), delete EXCEPTIONS.infos[ptr], ___cxa_free_exception(ptr))
                        }
                    }, clearRef: function (ptr) {
                        if (ptr) {
                            EXCEPTIONS.infos[ptr].refcount = 0
                        }
                    }
                }, ERRNO_CODES = {
                    EPERM: 1,
                    ENOENT: 2,
                    ESRCH: 3,
                    EINTR: 4,
                    EIO: 5,
                    ENXIO: 6,
                    E2BIG: 7,
                    ENOEXEC: 8,
                    EBADF: 9,
                    ECHILD: 10,
                    EAGAIN: 11,
                    EWOULDBLOCK: 11,
                    ENOMEM: 12,
                    EACCES: 13,
                    EFAULT: 14,
                    ENOTBLK: 15,
                    EBUSY: 16,
                    EEXIST: 17,
                    EXDEV: 18,
                    ENODEV: 19,
                    ENOTDIR: 20,
                    EISDIR: 21,
                    EINVAL: 22,
                    ENFILE: 23,
                    EMFILE: 24,
                    ENOTTY: 25,
                    ETXTBSY: 26,
                    EFBIG: 27,
                    ENOSPC: 28,
                    ESPIPE: 29,
                    EROFS: 30,
                    EMLINK: 31,
                    EPIPE: 32,
                    EDOM: 33,
                    ERANGE: 34,
                    ENOMSG: 42,
                    EIDRM: 43,
                    ECHRNG: 44,
                    EL2NSYNC: 45,
                    EL3HLT: 46,
                    EL3RST: 47,
                    ELNRNG: 48,
                    EUNATCH: 49,
                    ENOCSI: 50,
                    EL2HLT: 51,
                    EDEADLK: 35,
                    ENOLCK: 37,
                    EBADE: 52,
                    EBADR: 53,
                    EXFULL: 54,
                    ENOANO: 55,
                    EBADRQC: 56,
                    EBADSLT: 57,
                    EDEADLOCK: 35,
                    EBFONT: 59,
                    ENOSTR: 60,
                    ENODATA: 61,
                    ETIME: 62,
                    ENOSR: 63,
                    ENONET: 64,
                    ENOPKG: 65,
                    EREMOTE: 66,
                    ENOLINK: 67,
                    EADV: 68,
                    ESRMNT: 69,
                    ECOMM: 70,
                    EPROTO: 71,
                    EMULTIHOP: 72,
                    EDOTDOT: 73,
                    EBADMSG: 74,
                    ENOTUNIQ: 76,
                    EBADFD: 77,
                    EREMCHG: 78,
                    ELIBACC: 79,
                    ELIBBAD: 80,
                    ELIBSCN: 81,
                    ELIBMAX: 82,
                    ELIBEXEC: 83,
                    ENOSYS: 38,
                    ENOTEMPTY: 39,
                    ENAMETOOLONG: 36,
                    ELOOP: 40,
                    EOPNOTSUPP: 95,
                    EPFNOSUPPORT: 96,
                    ECONNRESET: 104,
                    ENOBUFS: 105,
                    EAFNOSUPPORT: 97,
                    EPROTOTYPE: 91,
                    ENOTSOCK: 88,
                    ENOPROTOOPT: 92,
                    ESHUTDOWN: 108,
                    ECONNREFUSED: 111,
                    EADDRINUSE: 98,
                    ECONNABORTED: 103,
                    ENETUNREACH: 101,
                    ENETDOWN: 100,
                    ETIMEDOUT: 110,
                    EHOSTDOWN: 112,
                    EHOSTUNREACH: 113,
                    EINPROGRESS: 115,
                    EALREADY: 114,
                    EDESTADDRREQ: 89,
                    EMSGSIZE: 90,
                    EPROTONOSUPPORT: 93,
                    ESOCKTNOSUPPORT: 94,
                    EADDRNOTAVAIL: 99,
                    ENETRESET: 102,
                    EISCONN: 106,
                    ENOTCONN: 107,
                    ETOOMANYREFS: 109,
                    EUSERS: 87,
                    EDQUOT: 122,
                    ESTALE: 116,
                    ENOTSUP: 95,
                    ENOMEDIUM: 123,
                    EILSEQ: 84,
                    EOVERFLOW: 75,
                    ECANCELED: 125,
                    ENOTRECOVERABLE: 131,
                    EOWNERDEAD: 130,
                    ESTRPIPE: 86
                }, SYSCALLS = {
                    varargs: 0, get: function (varargs) {
                        return SYSCALLS.varargs += 4, HEAP32[SYSCALLS.varargs - 4 >> 2]
                    }, getStr: function () {
                        return Pointer_stringify(SYSCALLS.get())
                    }, get64: function () {
                        var low = SYSCALLS.get(), high = SYSCALLS.get();
                        return assert(low >= 0 ? 0 === high : -1 === high), low
                    }, getZero: function () {
                        assert(0 === SYSCALLS.get())
                    }
                }, PROCINFO = {ppid: 1, pid: 42, sid: 42, pgid: 42}, structRegistrations = {}, awaitingDependencies = {},
                registeredTypes = {}, typeDependencies = {}, char_0 = 48, char_9 = 57, InternalError = void 0,
                embind_charCodes = void 0, BindingError = void 0, delayFunction = void 0, deletionQueue = [],
                registeredPointers = {}, registeredInstances = {}, UnboundTypeError = void 0, emval_free_list = [],
                emval_handle_array = [{}, {value: void 0}, {value: null}, {value: !0}, {value: !1}], emval_symbols = {},
                emval_methodCallers = [], emval_newers = {}, PTHREAD_SPECIFIC = {}, PTHREAD_SPECIFIC_NEXT_KEY = 1,
                __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            InternalError = Module.InternalError = extendError(Error, "InternalError"), function () {
                for (var codes = new Array(256), i = 0; i < 256; ++i) codes[i] = String.fromCharCode(i);
                embind_charCodes = codes
            }(), BindingError = Module.BindingError = extendError(Error, "BindingError"), function () {
                ClassHandle.prototype.isAliasOf = ClassHandle_isAliasOf, ClassHandle.prototype.clone = ClassHandle_clone, ClassHandle.prototype.delete = ClassHandle_delete, ClassHandle.prototype.isDeleted = ClassHandle_isDeleted, ClassHandle.prototype.deleteLater = ClassHandle_deleteLater
            }(), function () {
                RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee, RegisteredPointer.prototype.destructor = RegisteredPointer_destructor, RegisteredPointer.prototype.argPackAdvance = 8, RegisteredPointer.prototype.readValueFromPointer = simpleReadValueFromPointer, RegisteredPointer.prototype.deleteObject = RegisteredPointer_deleteObject, RegisteredPointer.prototype.fromWireType = RegisteredPointer_fromWireType
            }(), function () {
                Module.getInheritedInstanceCount = getInheritedInstanceCount, Module.getLiveInheritedInstances = getLiveInheritedInstances, Module.flushPendingDeletes = flushPendingDeletes, Module.setDelayFunction = setDelayFunction
            }(), UnboundTypeError = Module.UnboundTypeError = extendError(Error, "UnboundTypeError"), function () {
                Module.count_emval_handles = count_emval_handles, Module.get_first_emval = get_first_emval
            }(), _emscripten_get_now = ENVIRONMENT_IS_NODE ? function () {
                var t = process.hrtime();
                return 1e3 * t[0] + t[1] / 1e6
            } : "undefined" != typeof dateNow ? dateNow : "object" == typeof self && self.performance && "function" == typeof self.performance.now ? function () {
                return self.performance.now()
            } : "object" == typeof performance && "function" == typeof performance.now ? function () {
                return performance.now()
            } : Date.now, DYNAMICTOP_PTR = staticAlloc(4), STACK_BASE = STACKTOP = alignMemory(STATICTOP), STACK_MAX = STACK_BASE + TOTAL_STACK, DYNAMIC_BASE = alignMemory(STACK_MAX), HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE, staticSealed = !0, Module.wasmTableSize = 1476, Module.wasmMaxTableSize = 1476, Module.asmGlobalArg = {}, Module.asmLibraryArg = {
                abort: abort,
                enlargeMemory: enlargeMemory,
                getTotalMemory: getTotalMemory,
                abortOnCannotGrowMemory: abortOnCannotGrowMemory,
                ___assert_fail: ___assert_fail,
                ___buildEnvironment: ___buildEnvironment,
                ___cxa_allocate_exception: ___cxa_allocate_exception,
                ___cxa_pure_virtual: ___cxa_pure_virtual,
                ___cxa_throw: ___cxa_throw,
                ___cxa_uncaught_exception: ___cxa_uncaught_exception,
                ___lock: ___lock,
                ___map_file: ___map_file,
                ___setErrNo: ___setErrNo,
                ___syscall10: ___syscall10,
                ___syscall140: ___syscall140,
                ___syscall145: ___syscall145,
                ___syscall146: ___syscall146,
                ___syscall163: ___syscall163,
                ___syscall192: ___syscall192,
                ___syscall194: ___syscall194,
                ___syscall20: ___syscall20,
                ___syscall221: ___syscall221,
                ___syscall5: ___syscall5,
                ___syscall54: ___syscall54,
                ___syscall6: ___syscall6,
                ___syscall91: ___syscall91,
                ___unlock: ___unlock,
                __embind_finalize_value_object: __embind_finalize_value_object,
                __embind_register_bool: __embind_register_bool,
                __embind_register_class: __embind_register_class,
                __embind_register_class_constructor: __embind_register_class_constructor,
                __embind_register_class_function: __embind_register_class_function,
                __embind_register_emval: __embind_register_emval,
                __embind_register_enum: __embind_register_enum,
                __embind_register_enum_value: __embind_register_enum_value,
                __embind_register_float: __embind_register_float,
                __embind_register_function: __embind_register_function,
                __embind_register_integer: __embind_register_integer,
                __embind_register_memory_view: __embind_register_memory_view,
                __embind_register_smart_ptr: __embind_register_smart_ptr,
                __embind_register_std_string: __embind_register_std_string,
                __embind_register_std_wstring: __embind_register_std_wstring,
                __embind_register_value_object: __embind_register_value_object,
                __embind_register_value_object_field: __embind_register_value_object_field,
                __embind_register_void: __embind_register_void,
                __emval_as: __emval_as,
                __emval_call: __emval_call,
                __emval_call_method: __emval_call_method,
                __emval_call_void_method: __emval_call_void_method,
                __emval_decref: __emval_decref,
                __emval_get_global: __emval_get_global,
                __emval_get_method_caller: __emval_get_method_caller,
                __emval_get_module_property: __emval_get_module_property,
                __emval_get_property: __emval_get_property,
                __emval_incref: __emval_incref,
                __emval_new: __emval_new,
                __emval_new_array: __emval_new_array,
                __emval_new_cstring: __emval_new_cstring,
                __emval_run_destructors: __emval_run_destructors,
                __emval_set_property: __emval_set_property,
                __emval_take_value: __emval_take_value,
                _abort: _abort,
                _clock: _clock,
                _clock_gettime: _clock_gettime,
                _emscripten_asm_const_i: _emscripten_asm_const_i,
                _emscripten_memcpy_big: _emscripten_memcpy_big,
                _getenv: _getenv,
                _getpagesize: _getpagesize,
                _gettimeofday: _gettimeofday,
                _llvm_stackrestore: _llvm_stackrestore,
                _llvm_stacksave: _llvm_stacksave,
                _llvm_trap: _llvm_trap,
                _nanosleep: _nanosleep,
                _pthread_cond_wait: _pthread_cond_wait,
                _pthread_getspecific: _pthread_getspecific,
                _pthread_key_create: _pthread_key_create,
                _pthread_mutex_destroy: _pthread_mutex_destroy,
                _pthread_once: _pthread_once,
                _pthread_setspecific: _pthread_setspecific,
                _strftime_l: _strftime_l,
                DYNAMICTOP_PTR: DYNAMICTOP_PTR,
                STACKTOP: STACKTOP
            };
            var asm = Module.asm(Module.asmGlobalArg, Module.asmLibraryArg, buffer);
            Module.asm = asm;
            var __GLOBAL__I_000101 = Module.__GLOBAL__I_000101 = function () {
                return Module.asm.__GLOBAL__I_000101.apply(null, arguments)
            }, __GLOBAL__sub_I_bind_cpp = Module.__GLOBAL__sub_I_bind_cpp = function () {
                return Module.asm.__GLOBAL__sub_I_bind_cpp.apply(null, arguments)
            }, __GLOBAL__sub_I_iostream_cpp = Module.__GLOBAL__sub_I_iostream_cpp = function () {
                return Module.asm.__GLOBAL__sub_I_iostream_cpp.apply(null, arguments)
            }, __GLOBAL__sub_I_main_cpp = Module.__GLOBAL__sub_I_main_cpp = function () {
                return Module.asm.__GLOBAL__sub_I_main_cpp.apply(null, arguments)
            }, __GLOBAL__sub_I_sym_table_cpp = Module.__GLOBAL__sub_I_sym_table_cpp = function () {
                return Module.asm.__GLOBAL__sub_I_sym_table_cpp.apply(null, arguments)
            }, __ZSt18uncaught_exceptionv = Module.__ZSt18uncaught_exceptionv = function () {
                return Module.asm.__ZSt18uncaught_exceptionv.apply(null, arguments)
            }, ___emscripten_environ_constructor = Module.___emscripten_environ_constructor = function () {
                return Module.asm.___emscripten_environ_constructor.apply(null, arguments)
            }, ___getTypeName = Module.___getTypeName = function () {
                return Module.asm.___getTypeName.apply(null, arguments)
            }, _emscripten_replace_memory = Module._emscripten_replace_memory = function () {
                return Module.asm._emscripten_replace_memory.apply(null, arguments)
            }, _free = Module._free = function () {
                return Module.asm._free.apply(null, arguments)
            }, _malloc = (Module._main = function () {
                return Module.asm._main.apply(null, arguments)
            }, Module._malloc = function () {
                return Module.asm._malloc.apply(null, arguments)
            }), _memalign = Module._memalign = function () {
                return Module.asm._memalign.apply(null, arguments)
            }, _memset = Module._memset = function () {
                return Module.asm._memset.apply(null, arguments)
            }, stackAlloc = Module.stackAlloc = function () {
                return Module.asm.stackAlloc.apply(null, arguments)
            }, stackRestore = Module.stackRestore = function () {
                return Module.asm.stackRestore.apply(null, arguments)
            }, stackSave = Module.stackSave = function () {
                return Module.asm.stackSave.apply(null, arguments)
            };
            Module.dynCall_i = function () {
                return Module.asm.dynCall_i.apply(null, arguments)
            }, Module.dynCall_ii = function () {
                return Module.asm.dynCall_ii.apply(null, arguments)
            }, Module.dynCall_iii = function () {
                return Module.asm.dynCall_iii.apply(null, arguments)
            }, Module.dynCall_iiii = function () {
                return Module.asm.dynCall_iiii.apply(null, arguments)
            }, Module.dynCall_iiiii = function () {
                return Module.asm.dynCall_iiiii.apply(null, arguments)
            }, Module.dynCall_iiiiid = function () {
                return Module.asm.dynCall_iiiiid.apply(null, arguments)
            }, Module.dynCall_iiiiii = function () {
                return Module.asm.dynCall_iiiiii.apply(null, arguments)
            }, Module.dynCall_iiiiiid = function () {
                return Module.asm.dynCall_iiiiiid.apply(null, arguments)
            }, Module.dynCall_iiiiiii = function () {
                return Module.asm.dynCall_iiiiiii.apply(null, arguments)
            }, Module.dynCall_iiiiiiii = function () {
                return Module.asm.dynCall_iiiiiiii.apply(null, arguments)
            }, Module.dynCall_iiiiiiiii = function () {
                return Module.asm.dynCall_iiiiiiiii.apply(null, arguments)
            }, Module.dynCall_iiiiiiiiii = function () {
                return Module.asm.dynCall_iiiiiiiiii.apply(null, arguments)
            }, Module.dynCall_iiiiij = function () {
                return Module.asm.dynCall_iiiiij.apply(null, arguments)
            }, Module.dynCall_v = function () {
                return Module.asm.dynCall_v.apply(null, arguments)
            }, Module.dynCall_vi = function () {
                return Module.asm.dynCall_vi.apply(null, arguments)
            }, Module.dynCall_vii = function () {
                return Module.asm.dynCall_vii.apply(null, arguments)
            }, Module.dynCall_viii = function () {
                return Module.asm.dynCall_viii.apply(null, arguments)
            }, Module.dynCall_viiii = function () {
                return Module.asm.dynCall_viiii.apply(null, arguments)
            }, Module.dynCall_viiiii = function () {
                return Module.asm.dynCall_viiiii.apply(null, arguments)
            }, Module.dynCall_viiiiii = function () {
                return Module.asm.dynCall_viiiiii.apply(null, arguments)
            }, Module.dynCall_viiiiiii = function () {
                return Module.asm.dynCall_viiiiiii.apply(null, arguments)
            }, Module.dynCall_viiiiiiii = function () {
                return Module.asm.dynCall_viiiiiiii.apply(null, arguments)
            }, Module.dynCall_viiiiiiiii = function () {
                return Module.asm.dynCall_viiiiiiiii.apply(null, arguments)
            }, Module.dynCall_viijii = function () {
                return Module.asm.dynCall_viijii.apply(null, arguments)
            };
            Module.asm = asm, ExitStatus.prototype = new Error, ExitStatus.prototype.constructor = ExitStatus;
            var initialStackTop, calledMain = !1;
            if (dependenciesFulfilled = function runCaller() {
                Module.calledRun || run(), Module.calledRun || (dependenciesFulfilled = runCaller)
            }, Module.callMain = function (args) {
                args = args || [], ensureInitRuntime();
                var argc = args.length + 1, argv = stackAlloc(4 * (argc + 1));
                HEAP32[argv >> 2] = allocateUTF8OnStack(Module.thisProgram);
                for (var i = 1; i < argc; i++) HEAP32[(argv >> 2) + i] = allocateUTF8OnStack(args[i - 1]);
                HEAP32[(argv >> 2) + argc] = 0;
                try {
                    exit(Module._main(argc, argv, 0), !0)
                } catch (e) {
                    if (e instanceof ExitStatus) return;
                    if ("SimulateInfiniteLoop" == e) return void(Module.noExitRuntime = !0);
                    var toLog = e;
                    e && "object" == typeof e && e.stack && (toLog = [e, e.stack]), Module.printErr("exception thrown: " + toLog), Module.quit(1, e)
                } finally {
                    calledMain = !0
                }
            }, Module.run = run, Module.exit = exit, Module.abort = abort, Module.preInit) for ("function" == typeof Module.preInit && (Module.preInit = [Module.preInit]); Module.preInit.length > 0;) Module.preInit.pop()();
            var shouldRunNow = !0;
            return Module.noInitialRun && (shouldRunNow = !1), Module.noExitRuntime = !0, run(), Module
        }
    }).call(exports, __webpack_require__(19), __webpack_require__(11))
}, function (module, exports) {
}, function (module, exports, __webpack_require__) {
    (function (process) {
        function normalizeArray(parts, allowAboveRoot) {
            for (var up = 0, i = parts.length - 1; i >= 0; i--) {
                var last = parts[i];
                "." === last ? parts.splice(i, 1) : ".." === last ? (parts.splice(i, 1), up++) : up && (parts.splice(i, 1), up--)
            }
            if (allowAboveRoot) for (; up--; up) parts.unshift("..");
            return parts
        }

        function filter(xs, f) {
            if (xs.filter) return xs.filter(f);
            for (var res = [], i = 0; i < xs.length; i++) f(xs[i], i, xs) && res.push(xs[i]);
            return res
        }

        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            splitPath = function (filename) {
                return splitPathRe.exec(filename).slice(1)
            };
        exports.resolve = function () {
            for (var resolvedPath = "", resolvedAbsolute = !1, i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                var path = i >= 0 ? arguments[i] : process.cwd();
                if ("string" != typeof path) throw new TypeError("Arguments to path.resolve must be strings");
                path && (resolvedPath = path + "/" + resolvedPath, resolvedAbsolute = "/" === path.charAt(0))
            }
            return resolvedPath = normalizeArray(filter(resolvedPath.split("/"), function (p) {
                return !!p
            }), !resolvedAbsolute).join("/"), (resolvedAbsolute ? "/" : "") + resolvedPath || "."
        }, exports.normalize = function (path) {
            var isAbsolute = exports.isAbsolute(path), trailingSlash = "/" === substr(path, -1);
            return path = normalizeArray(filter(path.split("/"), function (p) {
                return !!p
            }), !isAbsolute).join("/"), path || isAbsolute || (path = "."), path && trailingSlash && (path += "/"), (isAbsolute ? "/" : "") + path
        }, exports.isAbsolute = function (path) {
            return "/" === path.charAt(0)
        }, exports.join = function () {
            var paths = Array.prototype.slice.call(arguments, 0);
            return exports.normalize(filter(paths, function (p, index) {
                if ("string" != typeof p) throw new TypeError("Arguments to path.join must be strings");
                return p
            }).join("/"))
        }, exports.relative = function (from, to) {
            function trim(arr) {
                for (var start = 0; start < arr.length && "" === arr[start]; start++) ;
                for (var end = arr.length - 1; end >= 0 && "" === arr[end]; end--) ;
                return start > end ? [] : arr.slice(start, end - start + 1)
            }

            from = exports.resolve(from).substr(1), to = exports.resolve(to).substr(1);
            for (var fromParts = trim(from.split("/")), toParts = trim(to.split("/")), length = Math.min(fromParts.length, toParts.length), samePartsLength = length, i = 0; i < length; i++) if (fromParts[i] !== toParts[i]) {
                samePartsLength = i;
                break
            }
            for (var outputParts = [], i = samePartsLength; i < fromParts.length; i++) outputParts.push("..");
            return outputParts = outputParts.concat(toParts.slice(samePartsLength)), outputParts.join("/")
        }, exports.sep = "/", exports.delimiter = ":", exports.dirname = function (path) {
            var result = splitPath(path), root = result[0], dir = result[1];
            return root || dir ? (dir && (dir = dir.substr(0, dir.length - 1)), root + dir) : "."
        }, exports.basename = function (path, ext) {
            var f = splitPath(path)[2];
            return ext && f.substr(-1 * ext.length) === ext && (f = f.substr(0, f.length - ext.length)), f
        }, exports.extname = function (path) {
            return splitPath(path)[3]
        };
        var substr = "b" === "ab".substr(-1) ? function (str, start, len) {
            return str.substr(start, len)
        } : function (str, start, len) {
            return start < 0 && (start = str.length + start), str.substr(start, len)
        }
    }).call(exports, __webpack_require__(19))
}, function (module, exports, __webpack_require__) {
    "use strict";
    (function (global, module) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        function infer_type(x) {
            var t = __MODULE__.t_dtype.DTYPE_FLOAT64;
            if (null === x) t = null; else if ("number" == typeof x && x % 1 == 0 && x < 1e4 && 0 !== x) t = __MODULE__.t_dtype.DTYPE_INT32; else if ("number" == typeof x) t = __MODULE__.t_dtype.DTYPE_FLOAT64; else if ("boolean" == typeof x) t = __MODULE__.t_dtype.DTYPE_BOOL; else if (x instanceof Date) t = __MODULE__.t_dtype.DTYPE_TIME; else if (isNaN(Number(x)) || "" === x) {
                if ("string" == typeof x && (0, _date_parser.is_valid_date)(x)) t = __MODULE__.t_dtype.DTYPE_TIME; else if ("string" == typeof x) {
                    var lower = x.toLowerCase();
                    t = "true" === lower || "false" === lower ? __MODULE__.t_dtype.DTYPE_BOOL : __MODULE__.t_dtype.DTYPE_STR
                }
            } else t = __MODULE__.t_dtype.DTYPE_FLOAT64;
            return t
        }

        function transform_data(type, data) {
            if (type != __MODULE__.t_dtype.DTYPE_TIME) return data;
            for (var rv = [], x = 0; x < data.length; x++) {
                var tmp = +data[x];
                rv.push(tmp)
            }
            return rv
        }

        function parse_data(data, names, types) {
            var preloaded = !!types;
            if (names = names || [], void 0 === types) types = []; else {
                for (var _types = [], t = 0; t < types.size() - 1; t++) _types.push(types.get(t));
                types = _types
            }
            var cdata = [], row_count = 0;
            if (Array.isArray(data)) {
                if (0 === data.length) throw"Not yet implemented: instantiate empty grid without column type";
                for (var col = void 0, MAX_CHECK = 50, ix = 0; ix < MAX_CHECK && ix < data.length; ix++) if (names.length > 0) {
                    var next = (0, _keys2.default)(data[ix]);
                    names.length !== next.length && (50 === MAX_CHECK && console.warn("Array data has inconsistent rows"), next.length > names.length && (console.warn("Extending from " + names.length + " to " + next.length), names = next, MAX_CHECK *= 2))
                } else names = (0, _keys2.default)(data[ix]);
                for (var n in names) {
                    var name = names[n], _i = 0, _inferredType = void 0;
                    if (preloaded) _inferredType = types[parseInt(n)]; else {
                        for (; !_inferredType && _i < 100 && _i < data.length;) data[_i].hasOwnProperty(name) && (_inferredType = infer_type(data[_i][name])), _i++;
                        _inferredType = _inferredType || __MODULE__.t_dtype.DTYPE_STR, types.push(_inferredType)
                    }
                    void 0 === _inferredType && (console.warn("Could not infer type for column " + name), _inferredType = __MODULE__.t_dtype.DTYPE_STR), col = [];
                    for (var parser = new _date_parser.DateParser, x = 0; x < data.length; x++) if (name in data[x] && void 0 !== data[x][name]) if (_inferredType.value === __MODULE__.t_dtype.DTYPE_FLOAT64.value) col.push(Number(data[x][name])); else if (_inferredType.value === __MODULE__.t_dtype.DTYPE_INT32.value) {
                        var val = Number(data[x][name]);
                        col.push(val), (val > 2147483647 || val < -2147483648) && (types[n] = __MODULE__.t_dtype.DTYPE_FLOAT64)
                    } else if (_inferredType.value === __MODULE__.t_dtype.DTYPE_BOOL.value) {
                        var cell = data[x][name];
                        "string" == typeof cell ? "true" === cell.toLowerCase() ? col.push(!0) : col.push(!1) : col.push(cell)
                    } else if (_inferredType.value === __MODULE__.t_dtype.DTYPE_TIME.value) {
                        var _val = data[x][name];
                        col.push(parser.parse(_val))
                    } else col.push(null === data[x][name] ? 19 === types[types.length - 1].value ? "" : 0 : "" + data[x][name]);
                    cdata.push(col), row_count = col.length
                }
            } else if (Array.isArray(data[(0, _keys2.default)(data)[0]])) for (var _name in data) {
                names.push(_name), types.push(infer_type(data[_name][0]));
                var transformed = transform_data(types[types.length - 1], data[_name]);
                cdata.push(transformed), row_count = transformed.length
            } else {
                if ("string" != typeof data[(0, _keys2.default)(data)[0]] && "function" != typeof data[(0, _keys2.default)(data)[0]]) throw"Unknown data type";
                for (var _name2 in data) {
                    if (names.push(_name2), "integer" === data[_name2]) types.push(__MODULE__.t_dtype.DTYPE_INT32); else if ("float" === data[_name2]) types.push(__MODULE__.t_dtype.DTYPE_FLOAT64); else if ("string" === data[_name2]) types.push(__MODULE__.t_dtype.DTYPE_STR); else if ("boolean" === data[_name2]) types.push(__MODULE__.t_dtype.DTYPE_BOOL); else {
                        if ("date" !== data[_name2]) throw"Unknown type " + data[_name2];
                        types.push(__MODULE__.t_dtype.DTYPE_TIME)
                    }
                    cdata.push([])
                }
            }
            return {row_count: row_count, is_arrow: !1, names: names, types: types, cdata: cdata}
        }

        function load_arrow_buffer(data, names, types) {
            var arrow = _table3.Table.from([new Uint8Array(data)]),
                loader = arrow.schema.fields.reduce(function (loader, field, colIdx) {
                    return loader.loadColumn(field, arrow.getColumnAt(colIdx))
                }, new ArrowColumnLoader);
            return {
                row_count: arrow.length,
                is_arrow: !0,
                names: loader.names,
                types: loader.types,
                cdata: loader.cdata
            }
        }

        function view(pool, ctx, sides, gnode, config, name, callbacks, table) {
            this.ctx = ctx, this.nsides = sides, this.gnode = gnode, this.config = config || {}, this.pool = pool, this.callbacks = callbacks, this.name = name, this.table = table
        }

        function _table2(gnode, pool, index, computed) {
            this.gnode = gnode, this.pool = pool, this.name = Math.random() + "", this.initialized = !1, this.index = index, this.pool.set_update_delegate(this), this.computed = computed || [], this.callbacks = [], this.views = []
        }

        var _typeof2 = __webpack_require__(34), _typeof3 = _interopRequireDefault(_typeof2),
            _defineProperty2 = __webpack_require__(130), _defineProperty3 = _interopRequireDefault(_defineProperty2),
            _extends2 = __webpack_require__(133), _extends3 = _interopRequireDefault(_extends2),
            _parseInt = __webpack_require__(137), _parseInt2 = _interopRequireDefault(_parseInt),
            _promise = __webpack_require__(87), _promise2 = _interopRequireDefault(_promise),
            _getIterator2 = __webpack_require__(30), _getIterator3 = _interopRequireDefault(_getIterator2),
            _regenerator = __webpack_require__(154), _regenerator2 = _interopRequireDefault(_regenerator),
            _asyncToGenerator2 = __webpack_require__(157),
            _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2), _getPrototypeOf = __webpack_require__(158),
            _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf), _classCallCheck2 = __webpack_require__(95),
            _classCallCheck3 = _interopRequireDefault(_classCallCheck2), _createClass2 = __webpack_require__(96),
            _createClass3 = _interopRequireDefault(_createClass2),
            _possibleConstructorReturn2 = __webpack_require__(161),
            _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2),
            _inherits2 = __webpack_require__(162), _inherits3 = _interopRequireDefault(_inherits2),
            _keys = __webpack_require__(169), _keys2 = _interopRequireDefault(_keys),
            _papaparse = __webpack_require__(97), _papaparse2 = _interopRequireDefault(_papaparse),
            _table3 = __webpack_require__(186), _visitor = __webpack_require__(48), _type = __webpack_require__(10),
            _date_parser = __webpack_require__(218), _view_formatters = __webpack_require__(222),
            _view_formatters2 = _interopRequireDefault(_view_formatters), _defaults = __webpack_require__(223);
        void 0 === global.performance && (global.performance || Date.now), "undefined" != typeof self && void 0 === self.performance && (self.performance = {now: Date.now});
        var __MODULE__ = void 0, ArrowColumnLoader = function (_TypeVisitor) {
            function ArrowColumnLoader(cdata, names, types) {
                (0, _classCallCheck3.default)(this, ArrowColumnLoader);
                var _this = (0, _possibleConstructorReturn3.default)(this, (ArrowColumnLoader.__proto__ || (0, _getPrototypeOf2.default)(ArrowColumnLoader)).call(this));
                return _this.cdata = cdata || [], _this.names = names || [], _this.types = types || [], _this
            }

            return (0, _inherits3.default)(ArrowColumnLoader, _TypeVisitor), (0, _createClass3.default)(ArrowColumnLoader, [{
                key: "loadColumn",
                value: function (field, column) {
                    return this.visit(field.type) && (this.cdata.push(column), this.names.push(field.name)), this
                }
            }, {
                key: "visitBool", value: function (type) {
                    return this.types.push(__MODULE__.t_dtype.DTYPE_BOOL), !0
                }
            }, {
                key: "visitInt", value: function (type) {
                    var bitWidth = type.bitWidth;
                    return 64 === bitWidth ? this.types.push(__MODULE__.t_dtype.DTYPE_INT64) : 32 === bitWidth ? this.types.push(__MODULE__.t_dtype.DTYPE_INT32) : 16 === bitWidth ? this.types.push(__MODULE__.t_dtype.DTYPE_INT16) : 8 === bitWidth && this.types.push(__MODULE__.t_dtype.DTYPE_INT8), !0
                }
            }, {
                key: "visitFloat", value: function (type) {
                    var precision = type.precision;
                    return precision === _type.Precision.DOUBLE ? this.types.push(__MODULE__.t_dtype.DTYPE_FLOAT64) : precision === _type.Precision.SINGLE && this.types.push(__MODULE__.t_dtype.DTYPE_FLOAT32), !0
                }
            }, {
                key: "visitUtf8", value: function (type) {
                    return this.types.push(__MODULE__.t_dtype.DTYPE_STR), !0
                }
            }, {
                key: "visitBinary", value: function (type) {
                    return this.types.push(__MODULE__.t_dtype.DTYPE_STR), !0
                }
            }, {
                key: "visitTimestamp", value: function (type) {
                    return this.types.push(__MODULE__.t_dtype.DTYPE_TIME), !0
                }
            }, {
                key: "visitDictionary", value: function (type) {
                    return this.visit(type.dictionary)
                }
            }]), ArrowColumnLoader
        }(_visitor.TypeVisitor);
        view.prototype.delete = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var i, j, val;
            return _regenerator2.default.wrap(function (_context) {
                for (; ;) switch (_context.prev = _context.next) {
                    case 0:
                        for (this.pool.unregister_context(this.gnode.get_id(), this.name), this.ctx.delete(), this.table.views.splice(this.table.views.indexOf(this), 1), this.table = void 0, i = 0, j = 0; i < this.callbacks.length;) val = this.callbacks[i], val.view !== this && (this.callbacks[j++] = val), i++;
                        this.callbacks.length = j, this._delete_callback && this._delete_callback();
                    case 8:
                    case"end":
                        return _context.stop()
                }
            }, _callee, this)
        })), view.prototype.sides = function () {
            return this.nsides
        }, view.prototype._column_names = function () {
            for (var col_names = [], aggs = this.ctx.get_column_names(), key = 0; key < this.ctx.unity_get_column_count(); key++) {
                var col_name = void 0;
                if (0 === this.sides()) {
                    if ("psp_okey" === (col_name = aggs.get(key))) continue
                } else {
                    var name = aggs.get(key % aggs.size()).name();
                    if ("psp_okey" === name) continue;
                    var col_path = this.ctx.unity_get_column_path(key + 1);
                    col_name = [];
                    for (var cnix = 0; cnix < col_path.size(); cnix++) col_name.push(__MODULE__.scalar_vec_to_val(col_path, cnix));
                    col_name = col_name.reverse(), col_name.push(name), col_name = col_name.join(","), col_path.delete()
                }
                col_names.push(col_name)
            }
            return aggs.delete(), col_names
        }, view.prototype.schema = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var schema, _types, names, types, i, new_schema, col_names, _iterator, _isArray, _i2, _ref3, col_name, agg;
            return _regenerator2.default.wrap(function (_context2) {
                for (; ;) switch (_context2.prev = _context2.next) {
                    case 0:
                        for (schema = this.gnode.get_tblschema(), _types = schema.types(), names = schema.columns(), types = {}, i = 0; i < names.size(); i++) types[names.get(i)] = _types.get(i).value;
                        new_schema = {}, col_names = this._column_names(), _iterator = col_names, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);
                    case 8:
                        if (!_isArray) {
                            _context2.next = 14;
                            break
                        }
                        if (!(_i2 >= _iterator.length)) {
                            _context2.next = 11;
                            break
                        }
                        return _context2.abrupt("break", 25);
                    case 11:
                        _ref3 = _iterator[_i2++], _context2.next = 18;
                        break;
                    case 14:
                        if (_i2 = _iterator.next(), !_i2.done) {
                            _context2.next = 17;
                            break
                        }
                        return _context2.abrupt("break", 25);
                    case 17:
                        _ref3 = _i2.value;
                    case 18:
                        if (col_name = _ref3, col_name = col_name.split(","), col_name = col_name[col_name.length - 1], 1 === types[col_name] || 2 === types[col_name] ? new_schema[col_name] = "integer" : 19 === types[col_name] ? new_schema[col_name] = "string" : 9 === types[col_name] || 10 === types[col_name] ? new_schema[col_name] = "float" : 11 === types[col_name] ? new_schema[col_name] = "boolean" : 12 === types[col_name] && (new_schema[col_name] = "date"), this.sides() > 0) for (agg in this.config.aggregate) agg = this.config.aggregate[agg], agg.column.join(",") === col_name && ["distinct count", "distinctcount", "distinct", "count"].indexOf(agg.op) > -1 && (new_schema[col_name] = "integer");
                    case 23:
                        _context2.next = 8;
                        break;
                    case 25:
                        return _context2.abrupt("return", new_schema);
                    case 26:
                    case"end":
                        return _context2.stop()
                }
            }, _callee2, this)
        }));
        var to_format = function () {
            var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(options, formatter) {
                var viewport, start_row, end_row, start_col, end_col, slice, data, col_names, row, prev_row, depth,
                    ridx, idx, cidx, col_name, _col_name, row_path, i, value, _col_name2;
                return _regenerator2.default.wrap(function (_context3) {
                    for (; ;) switch (_context3.prev = _context3.next) {
                        case 0:
                            for (options = options || {}, viewport = this.config.viewport ? this.config.viewport : {}, start_row = options.start_row || (viewport.top ? viewport.top : 0), end_row = options.end_row || (viewport.height ? start_row + viewport.height : this.ctx.get_row_count()), start_col = options.start_col || (viewport.left ? viewport.left : 0), end_col = options.end_col || (viewport.width ? start_row + viewport.width : this.ctx.unity_get_column_count() + (0 === this.sides() ? 0 : 1)), slice = void 0, "psp_okey" === this.config.row_pivot[0] && (end_row += this.config.column_pivot.length), slice = 0 === this.sides() ? __MODULE__.get_data_zero(this.ctx, start_row, end_row, start_col, end_col) : 1 === this.sides() ? __MODULE__.get_data_one(this.ctx, start_row, end_row, start_col, end_col) : __MODULE__.get_data_two(this.ctx, start_row, end_row, start_col, end_col), data = formatter.initDataValue(), col_names = [[]].concat(this._column_names()), row = void 0, prev_row = void 0, depth = [], ridx = -1, idx = 0; idx < slice.length; idx++) if (cidx = idx % (end_col - start_col), 0 === cidx && (row && formatter.addRow(data, row), row = formatter.initRowValue(), ridx++), 0 === this.sides()) col_name = col_names[start_col + cidx + 1], formatter.setColumnValue(data, row, col_name, slice[idx]); else if (0 === cidx) {
                                if ("psp_okey" !== this.config.row_pivot[0]) {
                                    for (_col_name = "__ROW_PATH__", row_path = this.ctx.unity_get_row_path(start_row + ridx), formatter.initColumnValue(row, _col_name), i = 0; i < row_path.size(); i++) value = __MODULE__.scalar_vec_to_val(row_path, i), formatter.addColumnValue(data, row, _col_name, value);
                                    row_path.delete()
                                }
                            } else _col_name2 = col_names[start_col + cidx], formatter.setColumnValue(data, row, _col_name2, slice[idx]);
                            return row && formatter.addRow(data, row), "psp_okey" === this.config.row_pivot[0] && (data = data.slice(this.config.column_pivot.length)), _context3.abrupt("return", formatter.formatData(data, options.config));
                        case 18:
                        case"end":
                            return _context3.stop()
                    }
                }, _callee3, this)
            }));
            return function (_x, _x2) {
                return _ref4.apply(this, arguments)
            }
        }();
        if (view.prototype.to_json = function () {
            var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(options) {
                return _regenerator2.default.wrap(function (_context4) {
                    for (; ;) switch (_context4.prev = _context4.next) {
                        case 0:
                            return _context4.abrupt("return", to_format.call(this, options, _view_formatters2.default.jsonFormatter));
                        case 1:
                        case"end":
                            return _context4.stop()
                    }
                }, _callee4, this)
            }));
            return function (_x3) {
                return _ref5.apply(this, arguments)
            }
        }(), view.prototype.to_csv = function () {
            var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(options) {
                return _regenerator2.default.wrap(function (_context5) {
                    for (; ;) switch (_context5.prev = _context5.next) {
                        case 0:
                            return _context5.abrupt("return", to_format.call(this, options, _view_formatters2.default.csvFormatter));
                        case 1:
                        case"end":
                            return _context5.stop()
                    }
                }, _callee5, this)
            }));
            return function (_x4) {
                return _ref6.apply(this, arguments)
            }
        }(), view.prototype.num_rows = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            return _regenerator2.default.wrap(function (_context6) {
                for (; ;) switch (_context6.prev = _context6.next) {
                    case 0:
                        return _context6.abrupt("return", this.ctx.get_row_count());
                    case 1:
                    case"end":
                        return _context6.stop()
                }
            }, _callee6, this)
        })), view.prototype.num_columns = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            return _regenerator2.default.wrap(function (_context7) {
                for (; ;) switch (_context7.prev = _context7.next) {
                    case 0:
                        return _context7.abrupt("return", this.ctx.unity_get_column_count());
                    case 1:
                    case"end":
                        return _context7.stop()
                }
            }, _callee7, this)
        })), view.prototype.get_row_expanded = function () {
            var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(idx) {
                return _regenerator2.default.wrap(function (_context8) {
                    for (; ;) switch (_context8.prev = _context8.next) {
                        case 0:
                            return _context8.abrupt("return", this.ctx.unity_get_row_expanded(idx));
                        case 1:
                        case"end":
                            return _context8.stop()
                    }
                }, _callee8, this)
            }));
            return function (_x5) {
                return _ref9.apply(this, arguments)
            }
        }(), view.prototype.open = function () {
            var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(idx) {
                return _regenerator2.default.wrap(function (_context9) {
                    for (; ;) switch (_context9.prev = _context9.next) {
                        case 0:
                            if (!(2 === this.nsides && this.ctx.unity_get_row_depth(idx) < this.config.row_pivot.length)) {
                                _context9.next = 4;
                                break
                            }
                            return _context9.abrupt("return", this.ctx.open(__MODULE__.t_header.HEADER_ROW, idx));
                        case 4:
                            if (!(this.nsides < 2)) {
                                _context9.next = 6;
                                break
                            }
                            return _context9.abrupt("return", this.ctx.open(idx));
                        case 6:
                        case"end":
                            return _context9.stop()
                    }
                }, _callee9, this)
            }));
            return function (_x6) {
                return _ref10.apply(this, arguments)
            }
        }(), view.prototype.close = function () {
            var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(idx) {
                return _regenerator2.default.wrap(function (_context10) {
                    for (; ;) switch (_context10.prev = _context10.next) {
                        case 0:
                            if (2 !== this.nsides) {
                                _context10.next = 4;
                                break
                            }
                            return _context10.abrupt("return", this.ctx.close(__MODULE__.t_header.HEADER_ROW, idx));
                        case 4:
                            return _context10.abrupt("return", this.ctx.close(idx));
                        case 5:
                        case"end":
                            return _context10.stop()
                    }
                }, _callee10, this)
            }));
            return function (_x7) {
                return _ref11.apply(this, arguments)
            }
        }(), view.prototype.expand_to_depth = function () {
            var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11(depth) {
                return _regenerator2.default.wrap(function (_context11) {
                    for (; ;) switch (_context11.prev = _context11.next) {
                        case 0:
                            if (!(this.config.row_pivot.length >= depth)) {
                                _context11.next = 8;
                                break
                            }
                            if (2 !== this.nsides) {
                                _context11.next = 5;
                                break
                            }
                            return _context11.abrupt("return", this.ctx.expand_to_depth(__MODULE__.t_header.HEADER_ROW, depth));
                        case 5:
                            return _context11.abrupt("return", this.ctx.expand_to_depth(depth));
                        case 6:
                            _context11.next = 9;
                            break;
                        case 8:
                            console.warn("Cannot expand past " + this.config.row_pivot.length);
                        case 9:
                        case"end":
                            return _context11.stop()
                    }
                }, _callee11, this)
            }));
            return function (_x8) {
                return _ref12.apply(this, arguments)
            }
        }(), view.prototype.collapse_to_depth = function () {
            var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12(depth) {
                return _regenerator2.default.wrap(function (_context12) {
                    for (; ;) switch (_context12.prev = _context12.next) {
                        case 0:
                            if (!(this.config.row_pivot.length >= depth)) {
                                _context12.next = 8;
                                break
                            }
                            if (2 !== this.nsides) {
                                _context12.next = 5;
                                break
                            }
                            return _context12.abrupt("return", this.ctx.collapse_to_depth(__MODULE__.t_header.HEADER_ROW, depth));
                        case 5:
                            return _context12.abrupt("return", this.ctx.collapse_to_depth(depth));
                        case 6:
                            _context12.next = 9;
                            break;
                        case 8:
                            console.warn("Cannot collapse past " + this.config.row_pivot.length);
                        case 9:
                        case"end":
                            return _context12.stop()
                    }
                }, _callee12, this)
            }));
            return function (_x9) {
                return _ref13.apply(this, arguments)
            }
        }(), view.prototype.on_update = function (_callback) {
            var _this2 = this;
            this.callbacks.push({
                view: this, callback: function () {
                    if (_this2.ctx.get_step_delta) {
                        var delta = _this2.ctx.get_step_delta(0, 2147483647);
                        if (0 === delta.cells.size()) _this2.to_json().then(_callback); else {
                            for (var rows = {}, x = 0; x < delta.cells.size(); x++) rows[delta.cells.get(x).row] = !0;
                            rows = (0, _keys2.default)(rows);
                            _promise2.default.all(rows.map(function (row) {
                                return _this2.to_json({
                                    start_row: (0, _parseInt2.default)(row),
                                    end_row: (0, _parseInt2.default)(row) + 1
                                })
                            })).then(function (results) {
                                return _callback([].concat.apply([], results))
                            })
                        }
                    } else _callback()
                }
            })
        }, view.prototype.on_delete = function (callback) {
            this._delete_callback = callback
        }, _table2.prototype._update_callback = function () {
            for (var e in this.callbacks) this.callbacks[e].callback()
        }, _table2.prototype._calculate_computed = function (tbl, computed_defs) {
            for (var i = 0; i < computed_defs.length; ++i) {
                var coldef = computed_defs[i], name = coldef.column, func = coldef.func, inputs = coldef.inputs,
                    type = coldef.type || "string", dtype = void 0;
                switch (type) {
                    case"integer":
                        dtype = __MODULE__.t_dtype.DTYPE_INT32;
                        break;
                    case"float":
                        dtype = __MODULE__.t_dtype.DTYPE_FLOAT64;
                        break;
                    case"boolean":
                        dtype = __MODULE__.t_dtype.DTYPE_BOOL;
                        break;
                    case"string":
                    default:
                        dtype = __MODULE__.t_dtype.DTYPE_STR
                }
                __MODULE__.table_add_computed_column(tbl, name, dtype, func, inputs)
            }
        }, _table2.prototype.delete = function () {
            if (this.views.length > 0) throw"Table still has contexts - refusing to delete.";
            this.pool.unregister_gnode(this.gnode.get_id()), this.gnode.delete(), this.pool.delete(), this._delete_callback && this._delete_callback()
        }, _table2.prototype.on_delete = function (callback) {
            this._delete_callback = callback
        }, _table2.prototype.size = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13() {
            return _regenerator2.default.wrap(function (_context13) {
                for (; ;) switch (_context13.prev = _context13.next) {
                    case 0:
                        return _context13.abrupt("return", this.gnode.get_table().size());
                    case 1:
                    case"end":
                        return _context13.stop()
                }
            }, _callee13, this)
        })), _table2.prototype._schema = function () {
            for (var schema = this.gnode.get_tblschema(), columns = schema.columns(), types = schema.types(), new_schema = {}, key = 0; key < columns.size(); key++) "psp_okey" !== columns.get(key) && (1 === types.get(key).value || 2 === types.get(key).value ? new_schema[columns.get(key)] = "integer" : 19 === types.get(key).value ? new_schema[columns.get(key)] = "string" : 10 === types.get(key).value || 9 === types.get(key).value ? new_schema[columns.get(key)] = "float" : 11 === types.get(key).value ? new_schema[columns.get(key)] = "boolean" : 12 === types.get(key).value && (new_schema[columns.get(key)] = "date"));
            return schema.delete(), columns.delete(), types.delete(), new_schema
        }, _table2.prototype.schema = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14() {
            return _regenerator2.default.wrap(function (_context14) {
                for (; ;) switch (_context14.prev = _context14.next) {
                    case 0:
                        return _context14.abrupt("return", this._schema());
                    case 1:
                    case"end":
                        return _context14.stop()
                }
            }, _callee14, this)
        })), _table2.prototype.view = function (config) {
            var _string_to_aggtype2;
            config = (0, _extends3.default)({}, config);
            var _string_to_filter_op = {
                    "&": __MODULE__.t_filter_op.FILTER_OP_AND,
                    "|": __MODULE__.t_filter_op.FILTER_OP_OR,
                    "<": __MODULE__.t_filter_op.FILTER_OP_LT,
                    ">": __MODULE__.t_filter_op.FILTER_OP_GT,
                    "==": __MODULE__.t_filter_op.FILTER_OP_EQ,
                    contains: __MODULE__.t_filter_op.FILTER_OP_CONTAINS,
                    "<=": __MODULE__.t_filter_op.FILTER_OP_LTEQ,
                    ">=": __MODULE__.t_filter_op.FILTER_OP_GTEQ,
                    "!=": __MODULE__.t_filter_op.FILTER_OP_NE,
                    "begins with": __MODULE__.t_filter_op.FILTER_OP_BEGINS_WITH,
                    "ends with": __MODULE__.t_filter_op.FILTER_OP_ENDS_WITH,
                    or: __MODULE__.t_filter_op.FILTER_OP_OR,
                    in: __MODULE__.t_filter_op.FILTER_OP_IN,
                    and: __MODULE__.t_filter_op.FILTER_OP_AND,
                    "is nan": __MODULE__.t_filter_op.FILTER_OP_IS_NAN,
                    "is not nan": __MODULE__.t_filter_op.FILTER_OP_IS_NOT_NAN
                }, _string_to_aggtype = (_string_to_aggtype2 = {
                    "distinct count": __MODULE__.t_aggtype.AGGTYPE_DISTINCT_COUNT,
                    distinctcount: __MODULE__.t_aggtype.AGGTYPE_DISTINCT_COUNT,
                    distinct: __MODULE__.t_aggtype.AGGTYPE_DISTINCT_COUNT,
                    sum: __MODULE__.t_aggtype.AGGTYPE_SUM,
                    mul: __MODULE__.t_aggtype.AGGTYPE_MUL,
                    avg: __MODULE__.t_aggtype.AGGTYPE_MEAN,
                    mean: __MODULE__.t_aggtype.AGGTYPE_MEAN,
                    count: __MODULE__.t_aggtype.AGGTYPE_COUNT,
                    "weighted mean": __MODULE__.t_aggtype.AGGTYPE_WEIGHTED_MEAN,
                    unique: __MODULE__.t_aggtype.AGGTYPE_UNIQUE,
                    any: __MODULE__.t_aggtype.AGGTYPE_ANY,
                    median: __MODULE__.t_aggtype.AGGTYPE_MEDIAN,
                    join: __MODULE__.t_aggtype.AGGTYPE_JOIN,
                    div: __MODULE__.t_aggtype.AGGTYPE_SCALED_DIV,
                    add: __MODULE__.t_aggtype.AGGTYPE_SCALED_ADD,
                    dominant: __MODULE__.t_aggtype.AGGTYPE_DOMINANT,
                    first: __MODULE__.t_aggtype.AGGTYPE_FIRST,
                    last: __MODULE__.t_aggtype.AGGTYPE_LAST,
                    and: __MODULE__.t_aggtype.AGGTYPE_AND,
                    or: __MODULE__.t_aggtype.AGGTYPE_OR
                }, (0, _defineProperty3.default)(_string_to_aggtype2, "last", __MODULE__.t_aggtype.AGGTYPE_LAST_VALUE), (0, _defineProperty3.default)(_string_to_aggtype2, "high", __MODULE__.t_aggtype.AGGTYPE_HIGH_WATER_MARK), (0, _defineProperty3.default)(_string_to_aggtype2, "low", __MODULE__.t_aggtype.AGGTYPE_LOW_WATER_MARK), (0, _defineProperty3.default)(_string_to_aggtype2, "sum abs", __MODULE__.t_aggtype.AGGTYPE_SUM_ABS), (0, _defineProperty3.default)(_string_to_aggtype2, "sum not null", __MODULE__.t_aggtype.AGGTYPE_SUM_NOT_NULL), (0, _defineProperty3.default)(_string_to_aggtype2, "mean by count", __MODULE__.t_aggtype.AGGTYPE_MEAN_BY_COUNT), (0, _defineProperty3.default)(_string_to_aggtype2, "identity", __MODULE__.t_aggtype.AGGTYPE_IDENTITY), (0, _defineProperty3.default)(_string_to_aggtype2, "distinct leaf", __MODULE__.t_aggtype.AGGTYPE_DISTINCT_LEAF), (0, _defineProperty3.default)(_string_to_aggtype2, "pct sum parent", __MODULE__.t_aggtype.AGGTYPE_PCT_SUM_PARENT), (0, _defineProperty3.default)(_string_to_aggtype2, "pct sum grand total", __MODULE__.t_aggtype.AGGTYPE_PCT_SUM_GRAND_TOTAL), _string_to_aggtype2),
                name = Math.random() + "";
            config.row_pivot = config.row_pivot || [], config.column_pivot = config.column_pivot || [], 0 === config.row_pivot.length && config.column_pivot.length > 0 && (config.row_pivot = ["psp_okey"], config.column_only = !0);
            var filters = [], filter_op = __MODULE__.t_filter_op.FILTER_OP_AND;
            if (config.filter) {
                var schema = this._schema();
                filters = config.filter.map(function (filter) {
                    return "date" === schema[filter[0]] ? [filter[0], _string_to_filter_op[filter[1]], +(new _date_parser.DateParser).parse(filter[2])] : [filter[0], _string_to_filter_op[filter[1]], filter[2]]
                }), config.filter_op && (filter_op = _string_to_filter_op[config.filter_op])
            }
            var sort = [];
            config.sort && (sort = config.sort.map(function (x) {
                return Array.isArray(x) ? [config.aggregate.map(function (agg) {
                    return agg.column
                }).indexOf(x[0]), _defaults.SORT_ORDERS.indexOf(x[1])] : [config.aggregate.map(function (agg) {
                    return agg.column
                }).indexOf(x), 1]
            }), config.column_pivot.length > 0 && config.row_pivot.length > 0 && (config.sort = config.sort.filter(function (x) {
                return -1 === config.row_pivot.indexOf(x[0])
            })));
            var aggregates = [];
            if ("object" === (0, _typeof3.default)(config.aggregate)) for (var aidx = 0; aidx < config.aggregate.length; aidx++) {
                var agg = config.aggregate[aidx], agg_op = _string_to_aggtype[agg.op];
                if (config.column_only && (agg_op = __MODULE__.t_aggtype.AGGTYPE_ANY, config.aggregate[aidx].op = "any"), "string" == typeof agg.column) agg.column = [agg.column]; else {
                    var dep_length = agg.column.length;
                    if ("weighted mean" === agg.op && 2 != dep_length || "weighted mean" !== agg.op && 1 != dep_length) throw"'" + agg.op + "' has incorrect arity ('" + dep_length + "') for column dependencies."
                }
                aggregates.push([agg.name || agg.column.join(","), agg_op, agg.column])
            } else {
                var _agg_op = __MODULE__.t_aggtype.AGGTYPE_DISTINCT_COUNT;
                config.column_only && (_agg_op = __MODULE__.t_aggtype.AGGTYPE_ANY);
                for (var _schema = this.gnode.get_tblschema(), t_aggs = _schema.columns(), _aidx = 0; _aidx < t_aggs.size(); _aidx++) {
                    var column = t_aggs.get(_aidx);
                    "psp_okey" !== column && aggregates.push([column, _agg_op, [column]])
                }
                _schema.delete(), t_aggs.delete()
            }
            var context = void 0, sides = 0;
            if (config.row_pivot.length > 0 || config.column_pivot.length > 0) if (config.column_pivot && config.column_pivot.length > 0) {
                config.row_pivot = config.row_pivot || [], context = __MODULE__.make_context_two(this.gnode, config.row_pivot, config.column_pivot, filter_op, filters, aggregates, []), sides = 2, this.pool.register_context(this.gnode.get_id(), name, __MODULE__.t_ctx_type.TWO_SIDED_CONTEXT, context.$$.ptr), void 0 !== config.row_pivot_depth ? context.expand_to_depth(__MODULE__.t_header.HEADER_ROW, config.row_pivot_depth - 1) : context.expand_to_depth(__MODULE__.t_header.HEADER_ROW, config.row_pivot.length), void 0 !== config.column_pivot_depth ? context.expand_to_depth(__MODULE__.t_header.HEADER_COLUMN, config.column_pivot_depth - 1) : context.expand_to_depth(__MODULE__.t_header.HEADER_COLUMN, config.column_pivot.length);
                for (var groups = context.unity_get_column_count() / aggregates.length, new_sort = [], z = 0; z < groups; z++) for (var _iterator2 = sort, _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ;) {
                    var _ref16;
                    if (_isArray2) {
                        if (_i3 >= _iterator2.length) break;
                        _ref16 = _iterator2[_i3++]
                    } else {
                        if (_i3 = _iterator2.next(), _i3.done) break;
                        _ref16 = _i3.value
                    }
                    var s = _ref16;
                    new_sort.push([s[0] + z * aggregates.length, s[1]])
                }
                sort.length > 0 && __MODULE__.sort(context, new_sort)
            } else context = __MODULE__.make_context_one(this.gnode, config.row_pivot, filter_op, filters, aggregates, sort), sides = 1, this.pool.register_context(this.gnode.get_id(), name, __MODULE__.t_ctx_type.ONE_SIDED_CONTEXT, context.$$.ptr), void 0 !== config.row_pivot_depth ? context.expand_to_depth(config.row_pivot_depth - 1) : context.expand_to_depth(config.row_pivot.length); else context = __MODULE__.make_context_zero(this.gnode, filter_op, filters, aggregates.map(function (x) {
                return x[0]
            }), sort), this.pool.register_context(this.gnode.get_id(), name, __MODULE__.t_ctx_type.ZERO_SIDED_CONTEXT, context.$$.ptr);
            var v = new view(this.pool, context, sides, this.gnode, config, name, this.callbacks, this);
            return this.views.push(v), v
        }, _table2.prototype.update = function (data) {
            var pdata = void 0, cols = this._columns(), schema = this.gnode.get_tblschema(), types = schema.types();
            pdata = data instanceof ArrayBuffer ? load_arrow_buffer(data, cols, types) : parse_data(data, cols, types);
            var tbl = void 0;
            try {
                tbl = __MODULE__.make_table(pdata.row_count || 0, pdata.names, pdata.types, pdata.cdata, this.gnode.get_table().size(), this.index || "", pdata.is_arrow, !1), this._calculate_computed(tbl, this.computed), __MODULE__.fill(this.pool, this.gnode, tbl), this.initialized = !0
            } catch (e) {
                console.error(e)
            } finally {
                tbl && tbl.delete(), schema.delete(), types.delete()
            }
        }, _table2.prototype.remove = function (data) {
            var _this3 = this, pdata = void 0, schema = (this._columns(), this.gnode.get_tblschema()),
                types = schema.types();
            data = data.map(function (idx) {
                return (0, _defineProperty3.default)({}, _this3.index, idx)
            }), pdata = data instanceof ArrayBuffer ? load_arrow_buffer(data, [this.index], types) : parse_data(data, [this.index], types);
            var tbl = void 0;
            try {
                tbl = __MODULE__.make_table(pdata.row_count || 0, pdata.names, pdata.types, pdata.cdata, this.gnode.get_table().size(), this.index || "", pdata.is_arrow, !0), __MODULE__.fill(this.pool, this.gnode, tbl), this.initialized = !0
            } catch (e) {
                console.error(e)
            } finally {
                tbl && tbl.delete(), schema.delete(), types.delete()
            }
        }, _table2.prototype.add_computed = function (computed) {
            var pool = void 0, gnode = void 0, tbl = void 0;
            try {
                return pool = new __MODULE__.t_pool({
                    _update_callback: function () {
                    }
                }), tbl = __MODULE__.clone_gnode_table(this.gnode), this._calculate_computed(tbl, computed), gnode = __MODULE__.make_gnode(tbl), pool.register_gnode(gnode), __MODULE__.fill(pool, gnode, tbl), this.computed.length > 0 && (computed = this.computed.concat(computed)), new _table2(gnode, pool, this.index, computed)
            } catch (e) {
                throw pool && pool.delete(), gnode && gnode.delete(), e
            } finally {
                tbl && tbl.delete()
            }
        }, _table2.prototype._columns = function () {
            for (var schema = this.gnode.get_tblschema(), cols = schema.columns(), names = [], cidx = 0; cidx < cols.size(); cidx++) {
                var name = cols.get(cidx);
                "psp_okey" !== name && names.push(name)
            }
            return names
        }, _table2.prototype.columns = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15() {
            return _regenerator2.default.wrap(function (_context15) {
                for (; ;) switch (_context15.prev = _context15.next) {
                    case 0:
                        return _context15.abrupt("return", this._columns());
                    case 1:
                    case"end":
                        return _context15.stop()
                }
            }, _callee15, this)
        })), _table2.prototype.execute = function (f) {
            f(this)
        }, "undefined" != typeof self && self.addEventListener) {
            var _tables = {}, _views = {};
            self.addEventListener("message", function (e) {
                var msg = e.data;
                switch (msg.cmd) {
                    case"init":
                        if ("undefined" == typeof WebAssembly) console.log("Loading asm.js"), __MODULE__ = __MODULE__({
                            wasmJSMethod: "asmjs",
                            locateFile: function (path) {
                                return "" + path
                            },
                            filePackagePrefixURL: msg.path,
                            printErr: function (x) {
                                return console.warn(x)
                            },
                            print: function (x) {
                                return console.log(x)
                            }
                        }); else if (console.log("Loading wasm"), msg.data) module = {}, module.wasmBinary = msg.data, module.wasmJSMethod = "native-wasm", __MODULE__ = __MODULE__(module); else {
                            var wasmXHR = new XMLHttpRequest;
                            wasmXHR.open("GET", msg.path + "wasm_async/psp.wasm", !0), wasmXHR.responseType = "arraybuffer", wasmXHR.onload = function () {
                                module = {}, module.wasmBinary = wasmXHR.response, module.wasmJSMethod = "native-wasm", __MODULE__ = __MODULE__(module)
                            }, wasmXHR.send(null)
                        }
                        break;
                    case"table":
                        _tables[msg.name] = perspective.table(msg.data, msg.options);
                        break;
                    case"add_computed":
                        for (var _table = _tables[msg.original], computed = msg.computed, i = 0; i < computed.length; ++i) {
                            var column = computed[i];
                            eval("column.func = " + column.func)
                        }
                        _tables[msg.name] = _table.add_computed(computed);
                        break;
                    case"table_generate":
                        var g = void 0;
                        eval("g = " + msg.args), g(function (tbl) {
                            _tables[msg.name] = tbl, self.postMessage({id: msg.id, data: "created!"})
                        });
                        break;
                    case"table_execute":
                        var f = void 0;
                        eval("f = " + msg.f), f(_tables[msg.name]);
                        break;
                    case"view":
                        _views[msg.view_name] = _tables[msg.table_name].view(msg.config);
                        break;
                    case"table_method":
                        var obj = _tables[msg.name], result = void 0;
                        try {
                            msg.subscribe ? obj[msg.method](function (e) {
                                self.postMessage({id: msg.id, data: e})
                            }) : (result = obj[msg.method].apply(obj, msg.args), result && result.then ? result.then(function (data) {
                                data && self.postMessage({id: msg.id, data: data})
                            }).catch(function (error) {
                                self.postMessage({id: msg.id, error: error})
                            }) : self.postMessage({id: msg.id, data: result}))
                        } catch (e) {
                            return void self.postMessage({id: msg.id, error: e})
                        }
                        break;
                    case"view_method":
                        var _obj = _views[msg.name];
                        if (!_obj) return void self.postMessage({id: msg.id, error: "View is not initialized"});
                        if (msg.subscribe) try {
                            _obj[msg.method](function (e) {
                                self.postMessage({id: msg.id, data: e})
                            })
                        } catch (error) {
                            self.postMessage({id: msg.id, error: error + ""})
                        } else _obj[msg.method].apply(_obj, msg.args).then(function (result) {
                            self.postMessage({id: msg.id, data: result})
                        }).catch(function (error) {
                            self.postMessage({id: msg.id, error: error})
                        })
                }
            }, !1)
        }
        var perspective = {
            TYPE_AGGREGATES: _defaults.TYPE_AGGREGATES,
            TYPE_FILTERS: _defaults.TYPE_FILTERS,
            AGGREGATE_DEFAULTS: _defaults.AGGREGATE_DEFAULTS,
            FILTER_DEFAULTS: _defaults.FILTER_DEFAULTS,
            SORT_ORDERS: _defaults.SORT_ORDERS,
            worker: function () {
            },
            table: function (data, options) {
                options = options || {}, options.index = options.index || "";
                var pdata = void 0;
                if (data instanceof ArrayBuffer ? pdata = load_arrow_buffer(data) : ("string" == typeof data && ("," === data[0] && (data = "_" + data), data = _papaparse2.default.parse(data, {
                    dynamicTyping: !0,
                    header: !0
                }).data), pdata = parse_data(data)), options.index && -1 === pdata.names.indexOf(options.index)) throw"Specified index '" + options.index + "' does not exist in data.";
                var tbl = void 0, gnode = void 0, pool = void 0;
                try {
                    return pool = new __MODULE__.t_pool({
                        _update_callback: function () {
                        }
                    }), tbl = __MODULE__.make_table(pdata.row_count || 0, pdata.names, pdata.types, pdata.cdata, 0, options.index, pdata.is_arrow, !1), gnode = __MODULE__.make_gnode(tbl), pool.register_gnode(gnode), __MODULE__.fill(pool, gnode, tbl), new _table2(gnode, pool, options.index)
                } catch (e) {
                    throw pool && pool.delete(), gnode && gnode.delete(), e
                } finally {
                    tbl && tbl.delete()
                }
            }
        };
        module.exports = function (Module) {
            return __MODULE__ = Module, perspective
        }
    }).call(exports, __webpack_require__(11), __webpack_require__(74)(module))
}, function (module, exports, __webpack_require__) {
    __webpack_require__(35), __webpack_require__(40), module.exports = __webpack_require__(41).f("iterator")
}, function (module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(50), defined = __webpack_require__(36);
    module.exports = function (TO_STRING) {
        return function (that, pos) {
            var a, b, s = String(defined(that)), i = toInteger(pos), l = s.length;
            return i < 0 || i >= l ? TO_STRING ? "" : void 0 : (a = s.charCodeAt(i), a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : b - 56320 + (a - 55296 << 10) + 65536)
        }
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    var create = __webpack_require__(38), descriptor = __webpack_require__(37),
        setToStringTag = __webpack_require__(26), IteratorPrototype = {};
    __webpack_require__(13)(IteratorPrototype, __webpack_require__(4)("iterator"), function () {
        return this
    }), module.exports = function (Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)}), setToStringTag(Constructor, NAME + " Iterator")
    }
}, function (module, exports, __webpack_require__) {
    var dP = __webpack_require__(7), anObject = __webpack_require__(8), getKeys = __webpack_require__(20);
    module.exports = __webpack_require__(9) ? Object.defineProperties : function (O, Properties) {
        anObject(O);
        for (var P, keys = getKeys(Properties), length = keys.length, i = 0; length > i;) dP.f(O, P = keys[i++], Properties[P]);
        return O
    }
}, function (module, exports, __webpack_require__) {
    var toIObject = __webpack_require__(16), toLength = __webpack_require__(55),
        toAbsoluteIndex = __webpack_require__(121);
    module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
            var value, O = toIObject($this), length = toLength(O.length), index = toAbsoluteIndex(fromIndex, length);
            if (IS_INCLUDES && el != el) {
                for (; length > index;) if ((value = O[index++]) != value) return !0
            } else for (; length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
            return !IS_INCLUDES && -1
        }
    }
}, function (module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(50), max = Math.max, min = Math.min;
    module.exports = function (index, length) {
        return index = toInteger(index), index < 0 ? max(index + length, 0) : min(index, length)
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    var addToUnscopables = __webpack_require__(123), step = __webpack_require__(80),
        Iterators = __webpack_require__(24), toIObject = __webpack_require__(16);
    module.exports = __webpack_require__(51)(Array, "Array", function (iterated, kind) {
        this._t = toIObject(iterated), this._i = 0, this._k = kind
    }, function () {
        var O = this._t, kind = this._k, index = this._i++;
        return !O || index >= O.length ? (this._t = void 0, step(1)) : "keys" == kind ? step(0, index) : "values" == kind ? step(0, O[index]) : step(0, [index, O[index]])
    }, "values"), Iterators.Arguments = Iterators.Array, addToUnscopables("keys"), addToUnscopables("values"), addToUnscopables("entries")
}, function (module, exports) {
    module.exports = function () {
    }
}, function (module, exports, __webpack_require__) {
    __webpack_require__(125), __webpack_require__(42), __webpack_require__(128), __webpack_require__(129), module.exports = __webpack_require__(0).Symbol
}, function (module, exports, __webpack_require__) {
    "use strict";
    var global = __webpack_require__(3), has = __webpack_require__(15), DESCRIPTORS = __webpack_require__(9),
        $export = __webpack_require__(2), redefine = __webpack_require__(76), META = __webpack_require__(59).KEY,
        $fails = __webpack_require__(14), shared = __webpack_require__(57), setToStringTag = __webpack_require__(26),
        uid = __webpack_require__(39), wks = __webpack_require__(4), wksExt = __webpack_require__(41),
        wksDefine = __webpack_require__(60), enumKeys = __webpack_require__(126), isArray = __webpack_require__(82),
        anObject = __webpack_require__(8), isObject = __webpack_require__(5), toIObject = __webpack_require__(16),
        toPrimitive = __webpack_require__(53), createDesc = __webpack_require__(37), _create = __webpack_require__(38),
        gOPNExt = __webpack_require__(127), $GOPD = __webpack_require__(84), $DP = __webpack_require__(7),
        $keys = __webpack_require__(20), gOPD = $GOPD.f, dP = $DP.f, gOPN = gOPNExt.f, $Symbol = global.Symbol,
        $JSON = global.JSON, _stringify = $JSON && $JSON.stringify, HIDDEN = wks("_hidden"),
        TO_PRIMITIVE = wks("toPrimitive"), isEnum = {}.propertyIsEnumerable, SymbolRegistry = shared("symbol-registry"),
        AllSymbols = shared("symbols"), OPSymbols = shared("op-symbols"), ObjectProto = Object.prototype,
        USE_NATIVE = "function" == typeof $Symbol, QObject = global.QObject,
        setter = !QObject || !QObject.prototype || !QObject.prototype.findChild,
        setSymbolDesc = DESCRIPTORS && $fails(function () {
            return 7 != _create(dP({}, "a", {
                get: function () {
                    return dP(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (it, key, D) {
            var protoDesc = gOPD(ObjectProto, key);
            protoDesc && delete ObjectProto[key], dP(it, key, D), protoDesc && it !== ObjectProto && dP(ObjectProto, key, protoDesc)
        } : dP, wrap = function (tag) {
            var sym = AllSymbols[tag] = _create($Symbol.prototype);
            return sym._k = tag, sym
        }, isSymbol = USE_NATIVE && "symbol" == typeof $Symbol.iterator ? function (it) {
            return "symbol" == typeof it
        } : function (it) {
            return it instanceof $Symbol
        }, $defineProperty = function (it, key, D) {
            return it === ObjectProto && $defineProperty(OPSymbols, key, D), anObject(it), key = toPrimitive(key, !0), anObject(D), has(AllSymbols, key) ? (D.enumerable ? (has(it, HIDDEN) && it[HIDDEN][key] && (it[HIDDEN][key] = !1), D = _create(D, {enumerable: createDesc(0, !1)})) : (has(it, HIDDEN) || dP(it, HIDDEN, createDesc(1, {})), it[HIDDEN][key] = !0), setSymbolDesc(it, key, D)) : dP(it, key, D)
        }, $defineProperties = function (it, P) {
            anObject(it);
            for (var key, keys = enumKeys(P = toIObject(P)), i = 0, l = keys.length; l > i;) $defineProperty(it, key = keys[i++], P[key]);
            return it
        }, $create = function (it, P) {
            return void 0 === P ? _create(it) : $defineProperties(_create(it), P)
        }, $propertyIsEnumerable = function (key) {
            var E = isEnum.call(this, key = toPrimitive(key, !0));
            return !(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) && (!(E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]) || E)
        }, $getOwnPropertyDescriptor = function (it, key) {
            if (it = toIObject(it), key = toPrimitive(key, !0), it !== ObjectProto || !has(AllSymbols, key) || has(OPSymbols, key)) {
                var D = gOPD(it, key);
                return !D || !has(AllSymbols, key) || has(it, HIDDEN) && it[HIDDEN][key] || (D.enumerable = !0), D
            }
        }, $getOwnPropertyNames = function (it) {
            for (var key, names = gOPN(toIObject(it)), result = [], i = 0; names.length > i;) has(AllSymbols, key = names[i++]) || key == HIDDEN || key == META || result.push(key);
            return result
        }, $getOwnPropertySymbols = function (it) {
            for (var key, IS_OP = it === ObjectProto, names = gOPN(IS_OP ? OPSymbols : toIObject(it)), result = [], i = 0; names.length > i;) !has(AllSymbols, key = names[i++]) || IS_OP && !has(ObjectProto, key) || result.push(AllSymbols[key]);
            return result
        };
    USE_NATIVE || ($Symbol = function () {
        if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
        var tag = uid(arguments.length > 0 ? arguments[0] : void 0), $set = function (value) {
            this === ObjectProto && $set.call(OPSymbols, value), has(this, HIDDEN) && has(this[HIDDEN], tag) && (this[HIDDEN][tag] = !1), setSymbolDesc(this, tag, createDesc(1, value))
        };
        return DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {configurable: !0, set: $set}), wrap(tag)
    }, redefine($Symbol.prototype, "toString", function () {
        return this._k
    }), $GOPD.f = $getOwnPropertyDescriptor, $DP.f = $defineProperty, __webpack_require__(83).f = gOPNExt.f = $getOwnPropertyNames, __webpack_require__(28).f = $propertyIsEnumerable, __webpack_require__(61).f = $getOwnPropertySymbols, DESCRIPTORS && !__webpack_require__(22) && redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, !0), wksExt.f = function (name) {
        return wrap(wks(name))
    }), $export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
    for (var es6Symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);
    for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
    $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
        for: function (key) {
            return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key)
        }, keyFor: function (sym) {
            if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
            for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key
        }, useSetter: function () {
            setter = !0
        }, useSimple: function () {
            setter = !1
        }
    }), $export($export.S + $export.F * !USE_NATIVE, "Object", {
        create: $create,
        defineProperty: $defineProperty,
        defineProperties: $defineProperties,
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        getOwnPropertyNames: $getOwnPropertyNames,
        getOwnPropertySymbols: $getOwnPropertySymbols
    }), $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
        var S = $Symbol();
        return "[null]" != _stringify([S]) || "{}" != _stringify({a: S}) || "{}" != _stringify(Object(S))
    })), "JSON", {
        stringify: function (it) {
            for (var replacer, $replacer, args = [it], i = 1; arguments.length > i;) args.push(arguments[i++]);
            if ($replacer = replacer = args[1], (isObject(replacer) || void 0 !== it) && !isSymbol(it)) return isArray(replacer) || (replacer = function (key, value) {
                if ("function" == typeof $replacer && (value = $replacer.call(this, key, value)), !isSymbol(value)) return value
            }), args[1] = replacer, _stringify.apply($JSON, args)
        }
    }), $Symbol.prototype[TO_PRIMITIVE] || __webpack_require__(13)($Symbol.prototype, TO_PRIMITIVE, $Symbol.prototype.valueOf), setToStringTag($Symbol, "Symbol"), setToStringTag(Math, "Math", !0), setToStringTag(global.JSON, "JSON", !0)
}, function (module, exports, __webpack_require__) {
    var getKeys = __webpack_require__(20), gOPS = __webpack_require__(61), pIE = __webpack_require__(28);
    module.exports = function (it) {
        var result = getKeys(it), getSymbols = gOPS.f;
        if (getSymbols) for (var key, symbols = getSymbols(it), isEnum = pIE.f, i = 0; symbols.length > i;) isEnum.call(it, key = symbols[i++]) && result.push(key);
        return result
    }
}, function (module, exports, __webpack_require__) {
    var toIObject = __webpack_require__(16), gOPN = __webpack_require__(83).f, toString = {}.toString,
        windowNames = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        getWindowNames = function (it) {
            try {
                return gOPN(it)
            } catch (e) {
                return windowNames.slice()
            }
        };
    module.exports.f = function (it) {
        return windowNames && "[object Window]" == toString.call(it) ? getWindowNames(it) : gOPN(toIObject(it))
    }
}, function (module, exports, __webpack_require__) {
    __webpack_require__(60)("asyncIterator")
}, function (module, exports, __webpack_require__) {
    __webpack_require__(60)("observable")
}, function (module, exports, __webpack_require__) {
    "use strict";
    exports.__esModule = !0;
    var _defineProperty = __webpack_require__(43), _defineProperty2 = function (obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }(_defineProperty);
    exports.default = function (obj, key, value) {
        return key in obj ? (0, _defineProperty2.default)(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj
    }
}, function (module, exports, __webpack_require__) {
    __webpack_require__(132);
    var $Object = __webpack_require__(0).Object;
    module.exports = function (it, key, desc) {
        return $Object.defineProperty(it, key, desc)
    }
}, function (module, exports, __webpack_require__) {
    var $export = __webpack_require__(2);
    $export($export.S + $export.F * !__webpack_require__(9), "Object", {defineProperty: __webpack_require__(7).f})
}, function (module, exports, __webpack_require__) {
    "use strict";
    exports.__esModule = !0;
    var _assign = __webpack_require__(85), _assign2 = function (obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }(_assign);
    exports.default = _assign2.default || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
        }
        return target
    }
}, function (module, exports, __webpack_require__) {
    __webpack_require__(135), module.exports = __webpack_require__(0).Object.assign
}, function (module, exports, __webpack_require__) {
    var $export = __webpack_require__(2);
    $export($export.S + $export.F, "Object", {assign: __webpack_require__(136)})
}, function (module, exports, __webpack_require__) {
    "use strict";
    var getKeys = __webpack_require__(20), gOPS = __webpack_require__(61), pIE = __webpack_require__(28),
        toObject = __webpack_require__(27), IObject = __webpack_require__(54), $assign = Object.assign;
    module.exports = !$assign || __webpack_require__(14)(function () {
        var A = {}, B = {}, S = Symbol(), K = "abcdefghijklmnopqrst";
        return A[S] = 7, K.split("").forEach(function (k) {
            B[k] = k
        }), 7 != $assign({}, A)[S] || Object.keys($assign({}, B)).join("") != K
    }) ? function (target, source) {
        for (var T = toObject(target), aLen = arguments.length, index = 1, getSymbols = gOPS.f, isEnum = pIE.f; aLen > index;) for (var key, S = IObject(arguments[index++]), keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S), length = keys.length, j = 0; length > j;) isEnum.call(S, key = keys[j++]) && (T[key] = S[key]);
        return T
    } : $assign
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(138), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    __webpack_require__(139), module.exports = __webpack_require__(0).Number.parseInt
}, function (module, exports, __webpack_require__) {
    var $export = __webpack_require__(2), $parseInt = __webpack_require__(140);
    $export($export.S + $export.F * (Number.parseInt != $parseInt), "Number", {parseInt: $parseInt})
}, function (module, exports, __webpack_require__) {
    var $parseInt = __webpack_require__(3).parseInt, $trim = __webpack_require__(141).trim,
        ws = __webpack_require__(86), hex = /^[-+]?0[xX]/;
    module.exports = 8 !== $parseInt(ws + "08") || 22 !== $parseInt(ws + "0x16") ? function (str, radix) {
        var string = $trim(String(str), 3);
        return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10))
    } : $parseInt
}, function (module, exports, __webpack_require__) {
    var $export = __webpack_require__(2), defined = __webpack_require__(36), fails = __webpack_require__(14),
        spaces = __webpack_require__(86), space = "[" + spaces + "]", non = "\u200b\x85",
        ltrim = RegExp("^" + space + space + "*"), rtrim = RegExp(space + space + "*$"),
        exporter = function (KEY, exec, ALIAS) {
            var exp = {}, FORCE = fails(function () {
                return !!spaces[KEY]() || non[KEY]() != non
            }), fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
            ALIAS && (exp[ALIAS] = fn), $export($export.P + $export.F * FORCE, "String", exp)
        }, trim = exporter.trim = function (string, TYPE) {
            return string = String(defined(string)), 1 & TYPE && (string = string.replace(ltrim, "")), 2 & TYPE && (string = string.replace(rtrim, "")), string
        };
    module.exports = exporter
}, function (module, exports, __webpack_require__) {
    __webpack_require__(42), __webpack_require__(35), __webpack_require__(40), __webpack_require__(143), __webpack_require__(150), __webpack_require__(151), module.exports = __webpack_require__(0).Promise
}, function (module, exports, __webpack_require__) {
    "use strict";
    var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper, LIBRARY = __webpack_require__(22),
        global = __webpack_require__(3), ctx = __webpack_require__(12), classof = __webpack_require__(62),
        $export = __webpack_require__(2), isObject = __webpack_require__(5), aFunction = __webpack_require__(23),
        anInstance = __webpack_require__(63), forOf = __webpack_require__(29),
        speciesConstructor = __webpack_require__(89), task = __webpack_require__(90).set,
        microtask = __webpack_require__(147)(), newPromiseCapabilityModule = __webpack_require__(64),
        perform = __webpack_require__(91), userAgent = __webpack_require__(148),
        promiseResolve = __webpack_require__(92), TypeError = global.TypeError, process = global.process,
        versions = process && process.versions, v8 = versions && versions.v8 || "", $Promise = global.Promise,
        isNode = "process" == classof(process), empty = function () {
        }, newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f, USE_NATIVE = !!function () {
            try {
                var promise = $Promise.resolve(1),
                    FakePromise = (promise.constructor = {})[__webpack_require__(4)("species")] = function (exec) {
                        exec(empty, empty)
                    };
                return (isNode || "function" == typeof PromiseRejectionEvent) && promise.then(empty) instanceof FakePromise && 0 !== v8.indexOf("6.6") && -1 === userAgent.indexOf("Chrome/66")
            } catch (e) {
            }
        }(), isThenable = function (it) {
            var then;
            return !(!isObject(it) || "function" != typeof(then = it.then)) && then
        }, notify = function (promise, isReject) {
            if (!promise._n) {
                promise._n = !0;
                var chain = promise._c;
                microtask(function () {
                    for (var value = promise._v, ok = 1 == promise._s, i = 0; chain.length > i;) !function (reaction) {
                        var result, then, exited, handler = ok ? reaction.ok : reaction.fail, resolve = reaction.resolve,
                            reject = reaction.reject, domain = reaction.domain;
                        try {
                            handler ? (ok || (2 == promise._h && onHandleUnhandled(promise), promise._h = 1), !0 === handler ? result = value : (domain && domain.enter(), result = handler(value), domain && (domain.exit(), exited = !0)), result === reaction.promise ? reject(TypeError("Promise-chain cycle")) : (then = isThenable(result)) ? then.call(result, resolve, reject) : resolve(result)) : reject(value)
                        } catch (e) {
                            domain && !exited && domain.exit(), reject(e)
                        }
                    }(chain[i++]);
                    promise._c = [], promise._n = !1, isReject && !promise._h && onUnhandled(promise)
                })
            }
        }, onUnhandled = function (promise) {
            task.call(global, function () {
                var result, handler, console, value = promise._v, unhandled = isUnhandled(promise);
                if (unhandled && (result = perform(function () {
                    isNode ? process.emit("unhandledRejection", value, promise) : (handler = global.onunhandledrejection) ? handler({
                        promise: promise,
                        reason: value
                    }) : (console = global.console) && console.error && console.error("Unhandled promise rejection", value)
                }), promise._h = isNode || isUnhandled(promise) ? 2 : 1), promise._a = void 0, unhandled && result.e) throw result.v
            })
        }, isUnhandled = function (promise) {
            return 1 !== promise._h && 0 === (promise._a || promise._c).length
        }, onHandleUnhandled = function (promise) {
            task.call(global, function () {
                var handler;
                isNode ? process.emit("rejectionHandled", promise) : (handler = global.onrejectionhandled) && handler({
                    promise: promise,
                    reason: promise._v
                })
            })
        }, $reject = function (value) {
            var promise = this;
            promise._d || (promise._d = !0, promise = promise._w || promise, promise._v = value, promise._s = 2, promise._a || (promise._a = promise._c.slice()), notify(promise, !0))
        }, $resolve = function (value) {
            var then, promise = this;
            if (!promise._d) {
                promise._d = !0, promise = promise._w || promise;
                try {
                    if (promise === value) throw TypeError("Promise can't be resolved itself");
                    (then = isThenable(value)) ? microtask(function () {
                        var wrapper = {_w: promise, _d: !1};
                        try {
                            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1))
                        } catch (e) {
                            $reject.call(wrapper, e)
                        }
                    }) : (promise._v = value, promise._s = 1, notify(promise, !1))
                } catch (e) {
                    $reject.call({_w: promise, _d: !1}, e)
                }
            }
        };
    USE_NATIVE || ($Promise = function (executor) {
        anInstance(this, $Promise, "Promise", "_h"), aFunction(executor), Internal.call(this);
        try {
            executor(ctx($resolve, this, 1), ctx($reject, this, 1))
        } catch (err) {
            $reject.call(this, err)
        }
    }, Internal = function (executor) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, Internal.prototype = __webpack_require__(65)($Promise.prototype, {
        then: function (onFulfilled, onRejected) {
            var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
            return reaction.ok = "function" != typeof onFulfilled || onFulfilled, reaction.fail = "function" == typeof onRejected && onRejected, reaction.domain = isNode ? process.domain : void 0, this._c.push(reaction), this._a && this._a.push(reaction), this._s && notify(this, !1), reaction.promise
        }, catch: function (onRejected) {
            return this.then(void 0, onRejected)
        }
    }), OwnPromiseCapability = function () {
        var promise = new Internal;
        this.promise = promise, this.resolve = ctx($resolve, promise, 1), this.reject = ctx($reject, promise, 1)
    }, newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
        return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C)
    }), $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise}), __webpack_require__(26)($Promise, "Promise"), __webpack_require__(93)("Promise"), Wrapper = __webpack_require__(0).Promise, $export($export.S + $export.F * !USE_NATIVE, "Promise", {
        reject: function (r) {
            var capability = newPromiseCapability(this);
            return (0, capability.reject)(r), capability.promise
        }
    }), $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), "Promise", {
        resolve: function (x) {
            return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x)
        }
    }), $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(149)(function (iter) {
        $Promise.all(iter).catch(empty)
    })), "Promise", {
        all: function (iterable) {
            var C = this, capability = newPromiseCapability(C), resolve = capability.resolve,
                reject = capability.reject, result = perform(function () {
                    var values = [], index = 0, remaining = 1;
                    forOf(iterable, !1, function (promise) {
                        var $index = index++, alreadyCalled = !1;
                        values.push(void 0), remaining++, C.resolve(promise).then(function (value) {
                            alreadyCalled || (alreadyCalled = !0, values[$index] = value, --remaining || resolve(values))
                        }, reject)
                    }), --remaining || resolve(values)
                });
            return result.e && reject(result.v), capability.promise
        }, race: function (iterable) {
            var C = this, capability = newPromiseCapability(C), reject = capability.reject,
                result = perform(function () {
                    forOf(iterable, !1, function (promise) {
                        C.resolve(promise).then(capability.resolve, reject)
                    })
                });
            return result.e && reject(result.v), capability.promise
        }
    })
}, function (module, exports, __webpack_require__) {
    var anObject = __webpack_require__(8);
    module.exports = function (iterator, fn, value, entries) {
        try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value)
        } catch (e) {
            var ret = iterator.return;
            throw void 0 !== ret && anObject(ret.call(iterator)), e
        }
    }
}, function (module, exports, __webpack_require__) {
    var Iterators = __webpack_require__(24), ITERATOR = __webpack_require__(4)("iterator"),
        ArrayProto = Array.prototype;
    module.exports = function (it) {
        return void 0 !== it && (Iterators.Array === it || ArrayProto[ITERATOR] === it)
    }
}, function (module, exports) {
    module.exports = function (fn, args, that) {
        var un = void 0 === that;
        switch (args.length) {
            case 0:
                return un ? fn() : fn.call(that);
            case 1:
                return un ? fn(args[0]) : fn.call(that, args[0]);
            case 2:
                return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
            case 3:
                return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
            case 4:
                return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3])
        }
        return fn.apply(that, args)
    }
}, function (module, exports, __webpack_require__) {
    var global = __webpack_require__(3), macrotask = __webpack_require__(90).set,
        Observer = global.MutationObserver || global.WebKitMutationObserver, process = global.process,
        Promise = global.Promise, isNode = "process" == __webpack_require__(25)(process);
    module.exports = function () {
        var head, last, notify, flush = function () {
            var parent, fn;
            for (isNode && (parent = process.domain) && parent.exit(); head;) {
                fn = head.fn, head = head.next;
                try {
                    fn()
                } catch (e) {
                    throw head ? notify() : last = void 0, e
                }
            }
            last = void 0, parent && parent.enter()
        };
        if (isNode) notify = function () {
            process.nextTick(flush)
        }; else if (!Observer || global.navigator && global.navigator.standalone) if (Promise && Promise.resolve) {
            var promise = Promise.resolve(void 0);
            notify = function () {
                promise.then(flush)
            }
        } else notify = function () {
            macrotask.call(global, flush)
        }; else {
            var toggle = !0, node = document.createTextNode("");
            new Observer(flush).observe(node, {characterData: !0}), notify = function () {
                node.data = toggle = !toggle
            }
        }
        return function (fn) {
            var task = {fn: fn, next: void 0};
            last && (last.next = task), head || (head = task, notify()), last = task
        }
    }
}, function (module, exports, __webpack_require__) {
    var global = __webpack_require__(3), navigator = global.navigator;
    module.exports = navigator && navigator.userAgent || ""
}, function (module, exports, __webpack_require__) {
    var ITERATOR = __webpack_require__(4)("iterator"), SAFE_CLOSING = !1;
    try {
        var riter = [7][ITERATOR]();
        riter.return = function () {
            SAFE_CLOSING = !0
        }, Array.from(riter, function () {
            throw 2
        })
    } catch (e) {
    }
    module.exports = function (exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return !1;
        var safe = !1;
        try {
            var arr = [7], iter = arr[ITERATOR]();
            iter.next = function () {
                return {done: safe = !0}
            }, arr[ITERATOR] = function () {
                return iter
            }, exec(arr)
        } catch (e) {
        }
        return safe
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(2), core = __webpack_require__(0), global = __webpack_require__(3),
        speciesConstructor = __webpack_require__(89), promiseResolve = __webpack_require__(92);
    $export($export.P + $export.R, "Promise", {
        finally: function (onFinally) {
            var C = speciesConstructor(this, core.Promise || global.Promise),
                isFunction = "function" == typeof onFinally;
            return this.then(isFunction ? function (x) {
                return promiseResolve(C, onFinally()).then(function () {
                    return x
                })
            } : onFinally, isFunction ? function (e) {
                return promiseResolve(C, onFinally()).then(function () {
                    throw e
                })
            } : onFinally)
        }
    })
}, function (module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(2), newPromiseCapability = __webpack_require__(64),
        perform = __webpack_require__(91);
    $export($export.S, "Promise", {
        try: function (callbackfn) {
            var promiseCapability = newPromiseCapability.f(this), result = perform(callbackfn);
            return (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v), promiseCapability.promise
        }
    })
}, function (module, exports, __webpack_require__) {
    __webpack_require__(40), __webpack_require__(35), module.exports = __webpack_require__(153)
}, function (module, exports, __webpack_require__) {
    var anObject = __webpack_require__(8), get = __webpack_require__(88);
    module.exports = __webpack_require__(0).getIterator = function (it) {
        var iterFn = get(it);
        if ("function" != typeof iterFn) throw TypeError(it + " is not iterable!");
        return anObject(iterFn.call(it))
    }
}, function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(155)
}, function (module, exports, __webpack_require__) {
    var g = function () {
            return this
        }() || Function("return this")(),
        hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0,
        oldRuntime = hadRuntime && g.regeneratorRuntime;
    if (g.regeneratorRuntime = void 0, module.exports = __webpack_require__(156), hadRuntime) g.regeneratorRuntime = oldRuntime; else try {
        delete g.regeneratorRuntime
    } catch (e) {
        g.regeneratorRuntime = void 0
    }
}, function (module, exports) {
    !function (global) {
        "use strict";

        function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
                generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
            return generator._invoke = makeInvokeMethod(innerFn, self, context), generator
        }

        function tryCatch(fn, obj, arg) {
            try {
                return {type: "normal", arg: fn.call(obj, arg)}
            } catch (err) {
                return {type: "throw", arg: err}
            }
        }

        function Generator() {
        }

        function GeneratorFunction() {
        }

        function GeneratorFunctionPrototype() {
        }

        function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
                prototype[method] = function (arg) {
                    return this._invoke(method, arg)
                }
            })
        }

        function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
                var record = tryCatch(generator[method], generator, arg);
                if ("throw" !== record.type) {
                    var result = record.arg, value = result.value;
                    return value && "object" == typeof value && hasOwn.call(value, "__await") ? Promise.resolve(value.__await).then(function (value) {
                        invoke("next", value, resolve, reject)
                    }, function (err) {
                        invoke("throw", err, resolve, reject)
                    }) : Promise.resolve(value).then(function (unwrapped) {
                        result.value = unwrapped, resolve(result)
                    }, reject)
                }
                reject(record.arg)
            }

            function enqueue(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new Promise(function (resolve, reject) {
                        invoke(method, arg, resolve, reject)
                    })
                }

                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg()
            }

            var previousPromise;
            this._invoke = enqueue
        }

        function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function (method, arg) {
                if (state === GenStateExecuting) throw new Error("Generator is already running");
                if (state === GenStateCompleted) {
                    if ("throw" === method) throw arg;
                    return doneResult()
                }
                for (context.method = method, context.arg = arg; ;) {
                    var delegate = context.delegate;
                    if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                            if (delegateResult === ContinueSentinel) continue;
                            return delegateResult
                        }
                    }
                    if ("next" === context.method) context.sent = context._sent = context.arg; else if ("throw" === context.method) {
                        if (state === GenStateSuspendedStart) throw state = GenStateCompleted, context.arg;
                        context.dispatchException(context.arg)
                    } else "return" === context.method && context.abrupt("return", context.arg);
                    state = GenStateExecuting;
                    var record = tryCatch(innerFn, self, context);
                    if ("normal" === record.type) {
                        if (state = context.done ? GenStateCompleted : GenStateSuspendedYield, record.arg === ContinueSentinel) continue;
                        return {value: record.arg, done: context.done}
                    }
                    "throw" === record.type && (state = GenStateCompleted, context.method = "throw", context.arg = record.arg)
                }
            }
        }

        function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined) {
                if (context.delegate = null, "throw" === context.method) {
                    if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
                    context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return ContinueSentinel
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
            var info = record.arg;
            return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel)
        }

        function pushTryEntry(locs) {
            var entry = {tryLoc: locs[0]};
            1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry)
        }

        function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal", delete record.arg, entry.completion = record
        }

        function Context(tryLocsList) {
            this.tryEntries = [{tryLoc: "root"}], tryLocsList.forEach(pushTryEntry, this), this.reset(!0)
        }

        function values(iterable) {
            if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod) return iteratorMethod.call(iterable);
                if ("function" == typeof iterable.next) return iterable;
                if (!isNaN(iterable.length)) {
                    var i = -1, next = function next() {
                        for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                        return next.value = undefined, next.done = !0, next
                    };
                    return next.next = next
                }
            }
            return {next: doneResult}
        }

        function doneResult() {
            return {value: undefined, done: !0}
        }

        var undefined, Op = Object.prototype, hasOwn = Op.hasOwnProperty,
            $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator",
            asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
            toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag", inModule = "object" == typeof module,
            runtime = global.regeneratorRuntime;
        if (runtime) return void(inModule && (module.exports = runtime));
        runtime = global.regeneratorRuntime = inModule ? module.exports : {}, runtime.wrap = wrap;
        var GenStateSuspendedStart = "suspendedStart", GenStateSuspendedYield = "suspendedYield",
            GenStateExecuting = "executing", GenStateCompleted = "completed", ContinueSentinel = {},
            IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function () {
            return this
        };
        var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype, GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction", runtime.isGeneratorFunction = function (genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name))
        }, runtime.mark = function (genFun) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, toStringTagSymbol in genFun || (genFun[toStringTagSymbol] = "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun
        }, runtime.awrap = function (arg) {
            return {__await: arg}
        }, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[asyncIteratorSymbol] = function () {
            return this
        }, runtime.AsyncIterator = AsyncIterator, runtime.async = function (innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
            return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
                return result.done ? result.value : iter.next()
            })
        }, defineIteratorMethods(Gp), Gp[toStringTagSymbol] = "Generator", Gp[iteratorSymbol] = function () {
            return this
        }, Gp.toString = function () {
            return "[object Generator]"
        }, runtime.keys = function (object) {
            var keys = [];
            for (var key in object) keys.push(key);
            return keys.reverse(), function next() {
                for (; keys.length;) {
                    var key = keys.pop();
                    if (key in object) return next.value = key, next.done = !1, next
                }
                return next.done = !0, next
            }
        }, runtime.values = values, Context.prototype = {
            constructor: Context, reset: function (skipTempReset) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined)
            }, stop: function () {
                this.done = !0;
                var rootEntry = this.tryEntries[0], rootRecord = rootEntry.completion;
                if ("throw" === rootRecord.type) throw rootRecord.arg;
                return this.rval
            }, dispatchException: function (exception) {
                function handle(loc, caught) {
                    return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught
                }

                if (this.done) throw exception;
                for (var context = this, i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i], record = entry.completion;
                    if ("root" === entry.tryLoc) return handle("end");
                    if (entry.tryLoc <= this.prev) {
                        var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                        if (hasCatch && hasFinally) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc)
                        } else if (hasCatch) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0)
                        } else {
                            if (!hasFinally) throw new Error("try statement without catch or finally");
                            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc)
                        }
                    }
                }
            }, abrupt: function (type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                        var finallyEntry = entry;
                        break
                    }
                }
                finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record)
            }, complete: function (record, afterLoc) {
                if ("throw" === record.type) throw record.arg;
                return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel
            }, finish: function (finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel
                }
            }, catch: function (tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc === tryLoc) {
                        var record = entry.completion;
                        if ("throw" === record.type) {
                            var thrown = record.arg;
                            resetTryEntry(entry)
                        }
                        return thrown
                    }
                }
                throw new Error("illegal catch attempt")
            }, delegateYield: function (iterable, resultName, nextLoc) {
                return this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc
                }, "next" === this.method && (this.arg = undefined), ContinueSentinel
            }
        }
    }(function () {
        return this
    }() || Function("return this")())
}, function (module, exports, __webpack_require__) {
    "use strict";
    exports.__esModule = !0;
    var _promise = __webpack_require__(87), _promise2 = function (obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }(_promise);
    exports.default = function (fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new _promise2.default(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg), value = info.value
                    } catch (error) {
                        return void reject(error)
                    }
                    if (!info.done) return _promise2.default.resolve(value).then(function (value) {
                        step("next", value)
                    }, function (err) {
                        step("throw", err)
                    });
                    resolve(value)
                }

                return step("next")
            })
        }
    }
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(159), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    __webpack_require__(160), module.exports = __webpack_require__(0).Object.getPrototypeOf
}, function (module, exports, __webpack_require__) {
    var toObject = __webpack_require__(27), $getPrototypeOf = __webpack_require__(79);
    __webpack_require__(94)("getPrototypeOf", function () {
        return function (it) {
            return $getPrototypeOf(toObject(it))
        }
    })
}, function (module, exports, __webpack_require__) {
    "use strict";
    exports.__esModule = !0;
    var _typeof2 = __webpack_require__(34), _typeof3 = function (obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }(_typeof2);
    exports.default = function (self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : (0, _typeof3.default)(call)) && "function" != typeof call ? self : call
    }
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }

    exports.__esModule = !0;
    var _setPrototypeOf = __webpack_require__(163), _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf),
        _create = __webpack_require__(44), _create2 = _interopRequireDefault(_create),
        _typeof2 = __webpack_require__(34), _typeof3 = _interopRequireDefault(_typeof2);
    exports.default = function (subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : (0, _typeof3.default)(superClass)));
        subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (_setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass)
    }
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(164), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    __webpack_require__(165), module.exports = __webpack_require__(0).Object.setPrototypeOf
}, function (module, exports, __webpack_require__) {
    var $export = __webpack_require__(2);
    $export($export.S, "Object", {setPrototypeOf: __webpack_require__(166).set})
}, function (module, exports, __webpack_require__) {
    var isObject = __webpack_require__(5), anObject = __webpack_require__(8), check = function (O, proto) {
        if (anObject(O), !isObject(proto) && null !== proto) throw TypeError(proto + ": can't set as prototype!")
    };
    module.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (test, buggy, set) {
            try {
                set = __webpack_require__(12)(Function.call, __webpack_require__(84).f(Object.prototype, "__proto__").set, 2), set(test, []), buggy = !(test instanceof Array)
            } catch (e) {
                buggy = !0
            }
            return function (O, proto) {
                return check(O, proto), buggy ? O.__proto__ = proto : set(O, proto), O
            }
        }({}, !1) : void 0), check: check
    }
}, function (module, exports, __webpack_require__) {
    __webpack_require__(168);
    var $Object = __webpack_require__(0).Object;
    module.exports = function (P, D) {
        return $Object.create(P, D)
    }
}, function (module, exports, __webpack_require__) {
    var $export = __webpack_require__(2);
    $export($export.S, "Object", {create: __webpack_require__(38)})
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(170), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    __webpack_require__(171), module.exports = __webpack_require__(0).Object.keys
}, function (module, exports, __webpack_require__) {
    var toObject = __webpack_require__(27), $keys = __webpack_require__(20);
    __webpack_require__(94)("keys", function () {
        return function (it) {
            return $keys(toObject(it))
        }
    })
}, function (module, exports, __webpack_require__) {
    function Stream() {
        EE.call(this)
    }

    module.exports = Stream;
    var EE = __webpack_require__(66).EventEmitter;
    __webpack_require__(21)(Stream, EE), Stream.Readable = __webpack_require__(67), Stream.Writable = __webpack_require__(182), Stream.Duplex = __webpack_require__(183), Stream.Transform = __webpack_require__(184), Stream.PassThrough = __webpack_require__(185), Stream.Stream = Stream, Stream.prototype.pipe = function (dest, options) {
        function ondata(chunk) {
            dest.writable && !1 === dest.write(chunk) && source.pause && source.pause()
        }

        function ondrain() {
            source.readable && source.resume && source.resume()
        }

        function onend() {
            didOnEnd || (didOnEnd = !0, dest.end())
        }

        function onclose() {
            didOnEnd || (didOnEnd = !0, "function" == typeof dest.destroy && dest.destroy())
        }

        function onerror(er) {
            if (cleanup(), 0 === EE.listenerCount(this, "error")) throw er
        }

        function cleanup() {
            source.removeListener("data", ondata), dest.removeListener("drain", ondrain), source.removeListener("end", onend), source.removeListener("close", onclose), source.removeListener("error", onerror), dest.removeListener("error", onerror), source.removeListener("end", cleanup), source.removeListener("close", cleanup), dest.removeListener("close", cleanup)
        }

        var source = this;
        source.on("data", ondata), dest.on("drain", ondrain), dest._isStdio || options && !1 === options.end || (source.on("end", onend), source.on("close", onclose));
        var didOnEnd = !1;
        return source.on("error", onerror), dest.on("error", onerror), source.on("end", cleanup), source.on("close", cleanup), dest.on("close", cleanup), dest.emit("pipe", source), dest
    }
}, function (module, exports, __webpack_require__) {
    "use strict";

    function getLens(b64) {
        var len = b64.length;
        if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var validLen = b64.indexOf("=");
        return -1 === validLen && (validLen = len), [validLen, validLen === len ? 0 : 4 - validLen % 4]
    }

    function byteLength(b64) {
        var lens = getLens(b64), validLen = lens[0], placeHoldersLen = lens[1];
        return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen
    }

    function _byteLength(b64, validLen, placeHoldersLen) {
        return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen
    }

    function toByteArray(b64) {
        for (var tmp, lens = getLens(b64), validLen = lens[0], placeHoldersLen = lens[1], arr = new Arr(_byteLength(b64, validLen, placeHoldersLen)), curByte = 0, len = placeHoldersLen > 0 ? validLen - 4 : validLen, i = 0; i < len; i += 4) tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)], arr[curByte++] = tmp >> 16 & 255, arr[curByte++] = tmp >> 8 & 255, arr[curByte++] = 255 & tmp;
        return 2 === placeHoldersLen && (tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4, arr[curByte++] = 255 & tmp), 1 === placeHoldersLen && (tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2, arr[curByte++] = tmp >> 8 & 255, arr[curByte++] = 255 & tmp), arr
    }

    function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[63 & num]
    }

    function encodeChunk(uint8, start, end) {
        for (var tmp, output = [], i = start; i < end; i += 3) tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (255 & uint8[i + 2]), output.push(tripletToBase64(tmp));
        return output.join("")
    }

    function fromByteArray(uint8) {
        for (var tmp, len = uint8.length, extraBytes = len % 3, parts = [], i = 0, len2 = len - extraBytes; i < len2; i += 16383) parts.push(encodeChunk(uint8, i, i + 16383 > len2 ? len2 : i + 16383));
        return 1 === extraBytes ? (tmp = uint8[len - 1], parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==")) : 2 === extraBytes && (tmp = (uint8[len - 2] << 8) + uint8[len - 1], parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=")), parts.join("")
    }

    exports.byteLength = byteLength, exports.toByteArray = toByteArray, exports.fromByteArray = fromByteArray;
    for (var lookup = [], revLookup = [], Arr = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i) lookup[i] = code[i], revLookup[code.charCodeAt(i)] = i;
    revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63
}, function (module, exports) {
    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m, eLen = 8 * nBytes - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = -7,
            i = isLE ? nBytes - 1 : 0, d = isLE ? -1 : 1, s = buffer[offset + i];
        for (i += d, e = s & (1 << -nBits) - 1, s >>= -nBits, nBits += eLen; nBits > 0; e = 256 * e + buffer[offset + i], i += d, nBits -= 8) ;
        for (m = e & (1 << -nBits) - 1, e >>= -nBits, nBits += mLen; nBits > 0; m = 256 * m + buffer[offset + i], i += d, nBits -= 8) ;
        if (0 === e) e = 1 - eBias; else {
            if (e === eMax) return m ? NaN : 1 / 0 * (s ? -1 : 1);
            m += Math.pow(2, mLen), e -= eBias
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }, exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c, eLen = 8 * nBytes - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1,
            rt = 23 === mLen ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i = isLE ? 0 : nBytes - 1, d = isLE ? 1 : -1,
            s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
        for (value = Math.abs(value), isNaN(value) || value === 1 / 0 ? (m = isNaN(value) ? 1 : 0, e = eMax) : (e = Math.floor(Math.log(value) / Math.LN2), value * (c = Math.pow(2, -e)) < 1 && (e--, c *= 2), value += e + eBias >= 1 ? rt / c : rt * Math.pow(2, 1 - eBias), value * c >= 2 && (e++, c /= 2), e + eBias >= eMax ? (m = 0, e = eMax) : e + eBias >= 1 ? (m = (value * c - 1) * Math.pow(2, mLen), e += eBias) : (m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen), e = 0)); mLen >= 8; buffer[offset + i] = 255 & m, i += d, m /= 256, mLen -= 8) ;
        for (e = e << mLen | m, eLen += mLen; eLen > 0; buffer[offset + i] = 255 & e, i += d, e /= 256, eLen -= 8) ;
        buffer[offset + i - d] |= 128 * s
    }
}, function (module, exports) {
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function copyBuffer(src, target, offset) {
        src.copy(target, offset)
    }

    var Buffer = __webpack_require__(46).Buffer, util = __webpack_require__(177);
    module.exports = function () {
        function BufferList() {
            _classCallCheck(this, BufferList), this.head = null, this.tail = null, this.length = 0
        }

        return BufferList.prototype.push = function (v) {
            var entry = {data: v, next: null};
            this.length > 0 ? this.tail.next = entry : this.head = entry, this.tail = entry, ++this.length
        }, BufferList.prototype.unshift = function (v) {
            var entry = {data: v, next: this.head};
            0 === this.length && (this.tail = entry), this.head = entry, ++this.length
        }, BufferList.prototype.shift = function () {
            if (0 !== this.length) {
                var ret = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, ret
            }
        }, BufferList.prototype.clear = function () {
            this.head = this.tail = null, this.length = 0
        }, BufferList.prototype.join = function (s) {
            if (0 === this.length) return "";
            for (var p = this.head, ret = "" + p.data; p = p.next;) ret += s + p.data;
            return ret
        }, BufferList.prototype.concat = function (n) {
            if (0 === this.length) return Buffer.alloc(0);
            if (1 === this.length) return this.head.data;
            for (var ret = Buffer.allocUnsafe(n >>> 0), p = this.head, i = 0; p;) copyBuffer(p.data, ret, i), i += p.data.length, p = p.next;
            return ret
        }, BufferList
    }(), util && util.inspect && util.inspect.custom && (module.exports.prototype[util.inspect.custom] = function () {
        var obj = util.inspect({length: this.length});
        return this.constructor.name + " " + obj
    })
}, function (module, exports) {
}, function (module, exports, __webpack_require__) {
    (function (global) {
        function Timeout(id, clearFn) {
            this._id = id, this._clearFn = clearFn
        }

        var scope = void 0 !== global && global || "undefined" != typeof self && self || window,
            apply = Function.prototype.apply;
        exports.setTimeout = function () {
            return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout)
        }, exports.setInterval = function () {
            return new Timeout(apply.call(setInterval, scope, arguments), clearInterval)
        }, exports.clearTimeout = exports.clearInterval = function (timeout) {
            timeout && timeout.close()
        }, Timeout.prototype.unref = Timeout.prototype.ref = function () {
        }, Timeout.prototype.close = function () {
            this._clearFn.call(scope, this._id)
        }, exports.enroll = function (item, msecs) {
            clearTimeout(item._idleTimeoutId), item._idleTimeout = msecs
        }, exports.unenroll = function (item) {
            clearTimeout(item._idleTimeoutId), item._idleTimeout = -1
        }, exports._unrefActive = exports.active = function (item) {
            clearTimeout(item._idleTimeoutId);
            var msecs = item._idleTimeout;
            msecs >= 0 && (item._idleTimeoutId = setTimeout(function () {
                item._onTimeout && item._onTimeout()
            }, msecs))
        }, __webpack_require__(179), exports.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== global && global.setImmediate || this && this.setImmediate, exports.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== global && global.clearImmediate || this && this.clearImmediate
    }).call(exports, __webpack_require__(11))
}, function (module, exports, __webpack_require__) {
    (function (global, process) {
        !function (global, undefined) {
            "use strict";

            function setImmediate(callback) {
                "function" != typeof callback && (callback = new Function("" + callback));
                for (var args = new Array(arguments.length - 1), i = 0; i < args.length; i++) args[i] = arguments[i + 1];
                var task = {callback: callback, args: args};
                return tasksByHandle[nextHandle] = task, registerImmediate(nextHandle), nextHandle++
            }

            function clearImmediate(handle) {
                delete tasksByHandle[handle]
            }

            function run(task) {
                var callback = task.callback, args = task.args;
                switch (args.length) {
                    case 0:
                        callback();
                        break;
                    case 1:
                        callback(args[0]);
                        break;
                    case 2:
                        callback(args[0], args[1]);
                        break;
                    case 3:
                        callback(args[0], args[1], args[2]);
                        break;
                    default:
                        callback.apply(undefined, args)
                }
            }

            function runIfPresent(handle) {
                if (currentlyRunningATask) setTimeout(runIfPresent, 0, handle); else {
                    var task = tasksByHandle[handle];
                    if (task) {
                        currentlyRunningATask = !0;
                        try {
                            run(task)
                        } finally {
                            clearImmediate(handle), currentlyRunningATask = !1
                        }
                    }
                }
            }

            if (!global.setImmediate) {
                var registerImmediate, nextHandle = 1, tasksByHandle = {}, currentlyRunningATask = !1,
                    doc = global.document, attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
                attachTo = attachTo && attachTo.setTimeout ? attachTo : global, "[object process]" === {}.toString.call(global.process) ? function () {
                    registerImmediate = function (handle) {
                        process.nextTick(function () {
                            runIfPresent(handle)
                        })
                    }
                }() : function () {
                    if (global.postMessage && !global.importScripts) {
                        var postMessageIsAsynchronous = !0, oldOnMessage = global.onmessage;
                        return global.onmessage = function () {
                            postMessageIsAsynchronous = !1
                        }, global.postMessage("", "*"), global.onmessage = oldOnMessage, postMessageIsAsynchronous
                    }
                }() ? function () {
                    var messagePrefix = "setImmediate$" + Math.random() + "$", onGlobalMessage = function (event) {
                        event.source === global && "string" == typeof event.data && 0 === event.data.indexOf(messagePrefix) && runIfPresent(+event.data.slice(messagePrefix.length))
                    };
                    global.addEventListener ? global.addEventListener("message", onGlobalMessage, !1) : global.attachEvent("onmessage", onGlobalMessage), registerImmediate = function (handle) {
                        global.postMessage(messagePrefix + handle, "*")
                    }
                }() : global.MessageChannel ? function () {
                    var channel = new MessageChannel;
                    channel.port1.onmessage = function (event) {
                        runIfPresent(event.data)
                    }, registerImmediate = function (handle) {
                        channel.port2.postMessage(handle)
                    }
                }() : doc && "onreadystatechange" in doc.createElement("script") ? function () {
                    var html = doc.documentElement;
                    registerImmediate = function (handle) {
                        var script = doc.createElement("script");
                        script.onreadystatechange = function () {
                            runIfPresent(handle), script.onreadystatechange = null, html.removeChild(script), script = null
                        }, html.appendChild(script)
                    }
                }() : function () {
                    registerImmediate = function (handle) {
                        setTimeout(runIfPresent, 0, handle)
                    }
                }(), attachTo.setImmediate = setImmediate, attachTo.clearImmediate = clearImmediate
            }
        }("undefined" == typeof self ? void 0 === global ? this : global : self)
    }).call(exports, __webpack_require__(11), __webpack_require__(19))
}, function (module, exports, __webpack_require__) {
    (function (global) {
        function deprecate(fn, msg) {
            function deprecated() {
                if (!warned) {
                    if (config("throwDeprecation")) throw new Error(msg);
                    config("traceDeprecation") ? console.trace(msg) : console.warn(msg), warned = !0
                }
                return fn.apply(this, arguments)
            }

            if (config("noDeprecation")) return fn;
            var warned = !1;
            return deprecated
        }

        function config(name) {
            try {
                if (!global.localStorage) return !1
            } catch (_) {
                return !1
            }
            var val = global.localStorage[name];
            return null != val && "true" === String(val).toLowerCase()
        }

        module.exports = deprecate
    }).call(exports, __webpack_require__(11))
}, function (module, exports, __webpack_require__) {
    "use strict";

    function PassThrough(options) {
        if (!(this instanceof PassThrough)) return new PassThrough(options);
        Transform.call(this, options)
    }

    module.exports = PassThrough;
    var Transform = __webpack_require__(104), util = __webpack_require__(31);
    util.inherits = __webpack_require__(21), util.inherits(PassThrough, Transform), PassThrough.prototype._transform = function (chunk, encoding, cb) {
        cb(null, chunk)
    }
}, function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(68)
}, function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(17)
}, function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(67).Transform
}, function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(67).PassThrough
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }

    function tableRowsToString(table, separator) {
        void 0 === separator && (separator = " | ");
        var fields, header, maxColumnWidths, i, n, val, row, j, k, i;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    for (fields = table.schema.fields, header = tslib_1.__spread(["row_id"], fields.map(function (f) {
                        return "" + f
                    })).map(stringify), maxColumnWidths = header.map(function (x) {
                        return x.length
                    }), i = -1, n = table.length - 1; ++i < n;) for (val = void 0, row = tslib_1.__spread([i], table.get(i)), j = -1, k = row.length; ++j < k;) val = stringify(row[j]), maxColumnWidths[j] = Math.max(maxColumnWidths[j], val.length);
                    return [4, header.map(function (x, j) {
                        return leftPad(x, " ", maxColumnWidths[j])
                    }).join(separator)];
                case 1:
                    _a.sent(), i = -1, _a.label = 2;
                case 2:
                    return ++i < table.length ? [4, tslib_1.__spread([i], table.get(i)).map(function (x) {
                        return stringify(x)
                    }).map(function (x, j) {
                        return leftPad(x, " ", maxColumnWidths[j])
                    }).join(separator)] : [3, 5];
                case 3:
                    _a.sent(), _a.label = 4;
                case 4:
                    return [3, 2];
                case 5:
                    return [2]
            }
        })
    }

    function leftPad(str, fill, n) {
        return (new Array(n + 1).join(fill) + str).slice(-1 * n)
    }

    function stringify(x) {
        return "string" == typeof x ? '"' + x + '"' : ArrayBuffer.isView(x) ? "[" + x + "]" : (0, _stringify2.default)(x)
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.TableToStringIterator = exports.CountByResult = exports.Table = void 0;
    var _stringify = __webpack_require__(105), _stringify2 = _interopRequireDefault(_stringify),
        _getIterator2 = __webpack_require__(30), _getIterator3 = _interopRequireDefault(_getIterator2),
        _iterator = __webpack_require__(6), _iterator2 = _interopRequireDefault(_iterator),
        _tslib = __webpack_require__(1), tslib_1 = function (obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj
        }(_tslib), _recordbatch = __webpack_require__(69), _predicate = __webpack_require__(207),
        _type = __webpack_require__(10), _arrow = __webpack_require__(208), _compat = __webpack_require__(217),
        _vector = __webpack_require__(18), _chunked = __webpack_require__(109), Table = function () {
            function Table() {
                for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                this._columns = [];
                var schema, batches;
                args[0] instanceof _type.Schema ? (schema = args[0], batches = Array.isArray(args[1][0]) ? args[1][0] : args[1]) : schema = args[0] instanceof _recordbatch.RecordBatch ? (batches = args)[0].schema : (batches = args[0])[0].schema, this.schema = schema, this.batches = batches, this.batchesUnion = 0 == batches.length ? new _recordbatch.RecordBatch(schema, 0, []) : batches.reduce(function (union, batch) {
                    return union.concat(batch)
                }), this.length = this.batchesUnion.length, this.numCols = this.batchesUnion.numCols
            }

            return Table.empty = function () {
                return new Table(new _type.Schema([]), [])
            }, Table.from = function (sources) {
                if (sources) {
                    var schema = void 0, recordBatches = [];
                    try {
                        for (var _a = tslib_1.__values((0, _arrow.read)(sources)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var recordBatch = _b.value;
                            schema = schema || recordBatch.schema, recordBatches.push(recordBatch)
                        }
                    } catch (e_1_1) {
                        e_1 = {error: e_1_1}
                    } finally {
                        try {
                            _b && !_b.done && (_c = _a.return) && _c.call(_a)
                        } finally {
                            if (e_1) throw e_1.error
                        }
                    }
                    return new Table(schema || new _type.Schema([]), recordBatches)
                }
                return Table.empty();
                var e_1, _c
            }, Table.fromAsync = function (sources) {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    var schema, recordBatches, _a, _b, recordBatch, e_2_1, _c, _d, e_2, _e;
                    return tslib_1.__generator(this, function (_f) {
                        switch (_f.label) {
                            case 0:
                                if (!(0, _compat.isAsyncIterable)(sources)) return [3, 14];
                                schema = void 0, recordBatches = [], _f.label = 1;
                            case 1:
                                _f.trys.push([1, 7, 8, 13]), _a = tslib_1.__asyncValues((0, _arrow.readAsync)(sources)), _f.label = 2;
                            case 2:
                                return [4, _a.next()];
                            case 3:
                                return _b = _f.sent(), !_b.done ? [4, _b.value] : [3, 6];
                            case 4:
                                recordBatch = _f.sent(), schema = schema || recordBatch.schema, recordBatches.push(recordBatch), _f.label = 5;
                            case 5:
                                return [3, 2];
                            case 6:
                                return [3, 13];
                            case 7:
                                return e_2_1 = _f.sent(), e_2 = {error: e_2_1}, [3, 13];
                            case 8:
                                return _f.trys.push([8, , 11, 12]), _b && !_b.done && (_e = _a.return) ? [4, _e.call(_a)] : [3, 10];
                            case 9:
                                _f.sent(), _f.label = 10;
                            case 10:
                                return [3, 12];
                            case 11:
                                if (e_2) throw e_2.error;
                                return [7];
                            case 12:
                                return [7];
                            case 13:
                                return [2, new Table(schema || new _type.Schema([]), recordBatches)];
                            case 14:
                                return (0, _compat.isPromise)(sources) ? (_d = (_c = Table).from, [4, sources]) : [3, 16];
                            case 15:
                                return [2, _d.apply(_c, [_f.sent()])];
                            case 16:
                                if (sources) return [2, Table.from(sources)];
                                _f.label = 17;
                            case 17:
                                return [2, Table.empty()]
                        }
                    })
                })
            }, Table.fromStruct = function (struct) {
                var schema = new _type.Schema(struct.type.children);
                return new Table((struct.view instanceof _chunked.ChunkedView ? struct.view.chunkVectors : [struct]).map(function (chunk) {
                    return new _recordbatch.RecordBatch(schema, chunk.length, chunk.view.childData)
                }))
            }, Table.prototype.get = function (index) {
                return this.batchesUnion.get(index)
            }, Table.prototype.getColumn = function (name) {
                return this.getColumnAt(this.getColumnIndex(name))
            }, Table.prototype.getColumnAt = function (index) {
                return index < 0 || index >= this.numCols ? null : this._columns[index] || (this._columns[index] = this.batchesUnion.getChildAt(index))
            }, Table.prototype.getColumnIndex = function (name) {
                return this.schema.fields.findIndex(function (f) {
                    return f.name === name
                })
            }, Table.prototype[_iterator2.default] = function () {
                return (0, _getIterator3.default)(this.batchesUnion)
            }, Table.prototype.filter = function (predicate) {
                return new FilteredDataFrame(this.batches, predicate)
            }, Table.prototype.scan = function (next, bind) {
                for (var batches = this.batches, numBatches = batches.length, batchIndex = -1; ++batchIndex < numBatches;) {
                    var batch = batches[batchIndex];
                    bind && bind(batch);
                    for (var index = -1, numRows = batch.length; ++index < numRows;) next(index, batch)
                }
            }, Table.prototype.count = function () {
                return this.length
            }, Table.prototype.countBy = function (name) {
                var batches = this.batches, numBatches = batches.length,
                    count_by = "string" == typeof name ? new _predicate.Col(name) : name;
                count_by.bind(batches[numBatches - 1]);
                var vector = count_by.vector;
                if (!(vector instanceof _vector.DictionaryVector)) throw new Error("countBy currently only supports dictionary-encoded columns");
                for (var counts = new Uint32Array(vector.dictionary.length), batchIndex = -1; ++batchIndex < numBatches;) {
                    var batch = batches[batchIndex];
                    count_by.bind(batch);
                    for (var keys = count_by.vector.indices, index = -1, numRows = batch.length; ++index < numRows;) {
                        var key = keys.get(index);
                        null !== key && counts[key]++
                    }
                }
                return new CountByResult(vector.dictionary, _vector.IntVector.from(counts))
            }, Table.prototype.select = function () {
                for (var columnNames = [], _i = 0; _i < arguments.length; _i++) columnNames[_i] = arguments[_i];
                return new Table(this.batches.map(function (batch) {
                    return batch.select.apply(batch, tslib_1.__spread(columnNames))
                }))
            }, Table.prototype.toString = function (separator) {
                var str = "";
                try {
                    for (var _a = tslib_1.__values(this.rowsToString(separator)), _b = _a.next(); !_b.done; _b = _a.next()) {
                        str += _b.value + "\n"
                    }
                } catch (e_3_1) {
                    e_3 = {error: e_3_1}
                } finally {
                    try {
                        _b && !_b.done && (_c = _a.return) && _c.call(_a)
                    } finally {
                        if (e_3) throw e_3.error
                    }
                }
                return str;
                var e_3, _c
            }, Table.prototype.rowsToString = function (separator) {
                return void 0 === separator && (separator = " | "), new TableToStringIterator(tableRowsToString(this, separator))
            }, Table
        }();
    exports.Table = Table;
    var FilteredDataFrame = function () {
        function FilteredDataFrame(batches, predicate) {
            this.batches = batches, this.predicate = predicate
        }

        return FilteredDataFrame.prototype.scan = function (next, bind) {
            for (var batches = this.batches, numBatches = batches.length, batchIndex = -1; ++batchIndex < numBatches;) {
                var batch = batches[batchIndex];
                bind && bind(batch);
                for (var predicate = this.predicate.bind(batch), index = -1, numRows = batch.length; ++index < numRows;) predicate(index, batch) && next(index, batch)
            }
        }, FilteredDataFrame.prototype.count = function () {
            for (var sum = 0, batches = this.batches, numBatches = batches.length, batchIndex = -1; ++batchIndex < numBatches;) for (var batch = batches[batchIndex], predicate = this.predicate.bind(batch), index = -1, numRows = batch.length; ++index < numRows;) predicate(index, batch) && ++sum;
            return sum
        }, FilteredDataFrame.prototype.filter = function (predicate) {
            return new FilteredDataFrame(this.batches, this.predicate.and(predicate))
        }, FilteredDataFrame.prototype.countBy = function (name) {
            var batches = this.batches, numBatches = batches.length,
                count_by = "string" == typeof name ? new _predicate.Col(name) : name;
            count_by.bind(batches[numBatches - 1]);
            var vector = count_by.vector;
            if (!(vector instanceof _vector.DictionaryVector)) throw new Error("countBy currently only supports dictionary-encoded columns");
            for (var counts = new Uint32Array(vector.dictionary.length), batchIndex = -1; ++batchIndex < numBatches;) {
                var batch = batches[batchIndex], predicate = this.predicate.bind(batch);
                count_by.bind(batch);
                for (var keys = count_by.vector.indices, index = -1, numRows = batch.length; ++index < numRows;) {
                    var key = keys.get(index);
                    null !== key && predicate(index, batch) && counts[key]++
                }
            }
            return new CountByResult(vector.dictionary, _vector.IntVector.from(counts))
        }, FilteredDataFrame
    }(), CountByResult = function (_super) {
        function CountByResult(values, counts) {
            return _super.call(this, new _recordbatch.RecordBatch(new _type.Schema([new _type.Field("values", values.type), new _type.Field("counts", counts.type)]), counts.length, [values, counts])) || this
        }

        return tslib_1.__extends(CountByResult, _super), CountByResult.prototype.toJSON = function () {
            for (var values = this.getColumnAt(0), counts = this.getColumnAt(1), result = {}, i = -1; ++i < this.length;) result[values.get(i)] = counts.get(i);
            return result
        }, CountByResult
    }(Table);
    exports.CountByResult = CountByResult;
    var TableToStringIterator = function () {
        function TableToStringIterator(iterator) {
            this.iterator = iterator
        }

        return TableToStringIterator.prototype[_iterator2.default] = function () {
            return this.iterator
        }, TableToStringIterator.prototype.next = function (value) {
            return this.iterator.next(value)
        }, TableToStringIterator.prototype.throw = function (error) {
            return this.iterator.throw && this.iterator.throw(error) || {done: !0, value: ""}
        }, TableToStringIterator.prototype.return = function (value) {
            return this.iterator.return && this.iterator.return(value) || {done: !0, value: ""}
        }, TableToStringIterator.prototype.pipe = function (stream) {
            var res, _this = this;
            !function write() {
                if (stream.writable) do {
                    if ((res = _this.next()).done) break
                } while (stream.write(res.value + "\n", "utf8"));
                res && res.done ? stream.isTTY || stream.end("\n") : stream.once("drain", write)
            }()
        }, TableToStringIterator
    }();
    exports.TableToStringIterator = TableToStringIterator
}, function (module, exports, __webpack_require__) {
    var core = __webpack_require__(0), $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
    module.exports = function (it) {
        return $JSON.stringify.apply($JSON, arguments)
    }
}, function (module, exports, __webpack_require__) {
    __webpack_require__(42), module.exports = __webpack_require__(41).f("toStringTag")
}, function (module, exports, __webpack_require__) {
    __webpack_require__(42), __webpack_require__(35), __webpack_require__(40), __webpack_require__(190), __webpack_require__(196), __webpack_require__(199), __webpack_require__(201), module.exports = __webpack_require__(0).Map
}, function (module, exports, __webpack_require__) {
    "use strict";
    var strong = __webpack_require__(191), validate = __webpack_require__(107);
    module.exports = __webpack_require__(192)("Map", function (get) {
        return function () {
            return get(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function (key) {
            var entry = strong.getEntry(validate(this, "Map"), key);
            return entry && entry.v
        }, set: function (key, value) {
            return strong.def(validate(this, "Map"), 0 === key ? 0 : key, value)
        }
    }, strong, !0)
}, function (module, exports, __webpack_require__) {
    "use strict";
    var dP = __webpack_require__(7).f, create = __webpack_require__(38), redefineAll = __webpack_require__(65),
        ctx = __webpack_require__(12), anInstance = __webpack_require__(63), forOf = __webpack_require__(29),
        $iterDefine = __webpack_require__(51), step = __webpack_require__(80), setSpecies = __webpack_require__(93),
        DESCRIPTORS = __webpack_require__(9), fastKey = __webpack_require__(59).fastKey,
        validate = __webpack_require__(107), SIZE = DESCRIPTORS ? "_s" : "size", getEntry = function (that, key) {
            var entry, index = fastKey(key);
            if ("F" !== index) return that._i[index];
            for (entry = that._f; entry; entry = entry.n) if (entry.k == key) return entry
        };
    module.exports = {
        getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
            var C = wrapper(function (that, iterable) {
                anInstance(that, C, NAME, "_i"), that._t = NAME, that._i = create(null), that._f = void 0, that._l = void 0, that[SIZE] = 0, void 0 != iterable && forOf(iterable, IS_MAP, that[ADDER], that)
            });
            return redefineAll(C.prototype, {
                clear: function () {
                    for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) entry.r = !0, entry.p && (entry.p = entry.p.n = void 0), delete data[entry.i];
                    that._f = that._l = void 0, that[SIZE] = 0
                }, delete: function (key) {
                    var that = validate(this, NAME), entry = getEntry(that, key);
                    if (entry) {
                        var next = entry.n, prev = entry.p;
                        delete that._i[entry.i], entry.r = !0, prev && (prev.n = next), next && (next.p = prev), that._f == entry && (that._f = next), that._l == entry && (that._l = prev), that[SIZE]--
                    }
                    return !!entry
                }, forEach: function (callbackfn) {
                    validate(this, NAME);
                    for (var entry, f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3); entry = entry ? entry.n : this._f;) for (f(entry.v, entry.k, this); entry && entry.r;) entry = entry.p
                }, has: function (key) {
                    return !!getEntry(validate(this, NAME), key)
                }
            }), DESCRIPTORS && dP(C.prototype, "size", {
                get: function () {
                    return validate(this, NAME)[SIZE]
                }
            }), C
        }, def: function (that, key, value) {
            var prev, index, entry = getEntry(that, key);
            return entry ? entry.v = value : (that._l = entry = {
                i: index = fastKey(key, !0),
                k: key,
                v: value,
                p: prev = that._l,
                n: void 0,
                r: !1
            }, that._f || (that._f = entry), prev && (prev.n = entry), that[SIZE]++, "F" !== index && (that._i[index] = entry)), that
        }, getEntry: getEntry, setStrong: function (C, NAME, IS_MAP) {
            $iterDefine(C, NAME, function (iterated, kind) {
                this._t = validate(iterated, NAME), this._k = kind, this._l = void 0
            }, function () {
                for (var that = this, kind = that._k, entry = that._l; entry && entry.r;) entry = entry.p;
                return that._t && (that._l = entry = entry ? entry.n : that._t._f) ? "keys" == kind ? step(0, entry.k) : "values" == kind ? step(0, entry.v) : step(0, [entry.k, entry.v]) : (that._t = void 0, step(1))
            }, IS_MAP ? "entries" : "values", !IS_MAP, !0), setSpecies(NAME)
        }
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    var global = __webpack_require__(3), $export = __webpack_require__(2), meta = __webpack_require__(59),
        fails = __webpack_require__(14), hide = __webpack_require__(13), redefineAll = __webpack_require__(65),
        forOf = __webpack_require__(29), anInstance = __webpack_require__(63), isObject = __webpack_require__(5),
        setToStringTag = __webpack_require__(26), dP = __webpack_require__(7).f, each = __webpack_require__(193)(0),
        DESCRIPTORS = __webpack_require__(9);
    module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
        var Base = global[NAME], C = Base, ADDER = IS_MAP ? "set" : "add", proto = C && C.prototype, O = {};
        return DESCRIPTORS && "function" == typeof C && (IS_WEAK || proto.forEach && !fails(function () {
            (new C).entries().next()
        })) ? (C = wrapper(function (target, iterable) {
            anInstance(target, C, NAME, "_c"), target._c = new Base, void 0 != iterable && forOf(iterable, IS_MAP, target[ADDER], target)
        }), each("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function (KEY) {
            var IS_ADDER = "add" == KEY || "set" == KEY;
            KEY in proto && (!IS_WEAK || "clear" != KEY) && hide(C.prototype, KEY, function (a, b) {
                if (anInstance(this, C, KEY), !IS_ADDER && IS_WEAK && !isObject(a)) return "get" == KEY && void 0;
                var result = this._c[KEY](0 === a ? 0 : a, b);
                return IS_ADDER ? this : result
            })
        }), IS_WEAK || dP(C.prototype, "size", {
            get: function () {
                return this._c.size
            }
        })) : (C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER), redefineAll(C.prototype, methods), meta.NEED = !0), setToStringTag(C, NAME), O[NAME] = C, $export($export.G + $export.W + $export.F, O), IS_WEAK || common.setStrong(C, NAME, IS_MAP), C
    }
}, function (module, exports, __webpack_require__) {
    var ctx = __webpack_require__(12), IObject = __webpack_require__(54), toObject = __webpack_require__(27),
        toLength = __webpack_require__(55), asc = __webpack_require__(194);
    module.exports = function (TYPE, $create) {
        var IS_MAP = 1 == TYPE, IS_FILTER = 2 == TYPE, IS_SOME = 3 == TYPE, IS_EVERY = 4 == TYPE,
            IS_FIND_INDEX = 6 == TYPE, NO_HOLES = 5 == TYPE || IS_FIND_INDEX, create = $create || asc;
        return function ($this, callbackfn, that) {
            for (var val, res, O = toObject($this), self = IObject(O), f = ctx(callbackfn, that, 3), length = toLength(self.length), index = 0, result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0; length > index; index++) if ((NO_HOLES || index in self) && (val = self[index], res = f(val, index, O), TYPE)) if (IS_MAP) result[index] = res; else if (res) switch (TYPE) {
                case 3:
                    return !0;
                case 5:
                    return val;
                case 6:
                    return index;
                case 2:
                    result.push(val)
            } else if (IS_EVERY) return !1;
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result
        }
    }
}, function (module, exports, __webpack_require__) {
    var speciesConstructor = __webpack_require__(195);
    module.exports = function (original, length) {
        return new (speciesConstructor(original))(length)
    }
}, function (module, exports, __webpack_require__) {
    var isObject = __webpack_require__(5), isArray = __webpack_require__(82),
        SPECIES = __webpack_require__(4)("species");
    module.exports = function (original) {
        var C;
        return isArray(original) && (C = original.constructor, "function" != typeof C || C !== Array && !isArray(C.prototype) || (C = void 0), isObject(C) && null === (C = C[SPECIES]) && (C = void 0)), void 0 === C ? Array : C
    }
}, function (module, exports, __webpack_require__) {
    var $export = __webpack_require__(2);
    $export($export.P + $export.R, "Map", {toJSON: __webpack_require__(197)("Map")})
}, function (module, exports, __webpack_require__) {
    var classof = __webpack_require__(62), from = __webpack_require__(198);
    module.exports = function (NAME) {
        return function () {
            if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
            return from(this)
        }
    }
}, function (module, exports, __webpack_require__) {
    var forOf = __webpack_require__(29);
    module.exports = function (iter, ITERATOR) {
        var result = [];
        return forOf(iter, !1, result.push, result, ITERATOR), result
    }
}, function (module, exports, __webpack_require__) {
    __webpack_require__(200)("Map")
}, function (module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(2);
    module.exports = function (COLLECTION) {
        $export($export.S, COLLECTION, {
            of: function () {
                for (var length = arguments.length, A = new Array(length); length--;) A[length] = arguments[length];
                return new this(A)
            }
        })
    }
}, function (module, exports, __webpack_require__) {
    __webpack_require__(202)("Map")
}, function (module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(2), aFunction = __webpack_require__(23), ctx = __webpack_require__(12),
        forOf = __webpack_require__(29);
    module.exports = function (COLLECTION) {
        $export($export.S, COLLECTION, {
            from: function (source) {
                var mapping, A, n, cb, mapFn = arguments[1];
                return aFunction(this), mapping = void 0 !== mapFn, mapping && aFunction(mapFn), void 0 == source ? new this : (A = [], mapping ? (n = 0, cb = ctx(mapFn, arguments[2], 2), forOf(source, !1, function (nextItem) {
                    A.push(cb(nextItem, n++))
                })) : forOf(source, !1, A.push, A), new this(A))
            }
        })
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: !0}), exports.DictionaryView = void 0;
    var _iterator = __webpack_require__(6), _iterator2 = function (obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }(_iterator), _tslib = __webpack_require__(1), tslib_1 = function (obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }(_tslib), DictionaryView = function () {
        function DictionaryView(dictionary, indices) {
            this.indices = indices, this.dictionary = dictionary
        }

        return DictionaryView.prototype.clone = function (data) {
            return new DictionaryView(data.dictionary, this.indices.clone(data.indices))
        }, DictionaryView.prototype.isValid = function (index) {
            return this.indices.isValid(index)
        }, DictionaryView.prototype.get = function (index) {
            return this.dictionary.get(this.indices.get(index))
        }, DictionaryView.prototype.set = function (index, value) {
            this.dictionary.set(this.indices.get(index), value)
        }, DictionaryView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, DictionaryView.prototype[_iterator2.default] = function () {
            var values, indices, index, n;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = this.dictionary, indices = this.indices, index = -1, n = indices.length, _a.label = 1;
                    case 1:
                        return ++index < n ? [4, values.get(indices.get(index))] : [3, 4];
                    case 2:
                        _a.sent(), _a.label = 3;
                    case 3:
                        return [3, 1];
                    case 4:
                        return [2]
                }
            })
        }, DictionaryView.prototype.indexOf = function (search) {
            var key = this.dictionary.indexOf(search);
            return -1 === key ? key : this.indices.indexOf(key)
        }, DictionaryView
    }();
    exports.DictionaryView = DictionaryView
}, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: !0}), exports.Utf8View = exports.BinaryView = exports.FixedSizeListView = exports.ListView = exports.VariableListViewBase = exports.ListViewBase = exports.decodeUtf8 = exports.encodeUtf8 = void 0;
    var _iterator = __webpack_require__(6), _iterator2 = function (obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }(_iterator), _tslib = __webpack_require__(1), tslib_1 = function (obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj
        }(_tslib), _vector = __webpack_require__(18), _textEncodingUtf = __webpack_require__(110),
        encodeUtf8 = exports.encodeUtf8 = function (encoder) {
            return encoder.encode.bind(encoder)
        }(new _textEncodingUtf.TextEncoder("utf-8")), decodeUtf8 = exports.decodeUtf8 = function (decoder) {
            return decoder.decode.bind(decoder)
        }(new _textEncodingUtf.TextDecoder("utf-8")), ListViewBase = function () {
            function ListViewBase(data) {
                this.length = data.length, this.values = data.values
            }

            return ListViewBase.prototype.clone = function (data) {
                return new this.constructor(data)
            }, ListViewBase.prototype.isValid = function () {
                return !0
            }, ListViewBase.prototype.toArray = function () {
                return tslib_1.__spread(this)
            }, ListViewBase.prototype.get = function (index) {
                return this.getList(this.values, index, this.valueOffsets)
            }, ListViewBase.prototype.set = function (index, value) {
                return this.setList(this.values, index, value, this.valueOffsets)
            }, ListViewBase.prototype[_iterator2.default] = function () {
                var get, length, values, valueOffsets, index;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            get = this.getList, length = this.length, values = this.values, valueOffsets = this.valueOffsets, index = -1, _a.label = 1;
                        case 1:
                            return ++index < length ? [4, get(values, index, valueOffsets)] : [3, 4];
                        case 2:
                            _a.sent(), _a.label = 3;
                        case 3:
                            return [3, 1];
                        case 4:
                            return [2]
                    }
                })
            }, ListViewBase.prototype.indexOf = function (search) {
                var index = 0;
                try {
                    for (var _a = tslib_1.__values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
                        if (_b.value === search) return index;
                        ++index
                    }
                } catch (e_1_1) {
                    e_1 = {error: e_1_1}
                } finally {
                    try {
                        _b && !_b.done && (_c = _a.return) && _c.call(_a)
                    } finally {
                        if (e_1) throw e_1.error
                    }
                }
                return -1;
                var e_1, _c
            }, ListViewBase
        }();
    exports.ListViewBase = ListViewBase;
    var VariableListViewBase = function (_super) {
        function VariableListViewBase(data) {
            var _this = _super.call(this, data) || this;
            return _this.length = data.length, _this.valueOffsets = data.valueOffsets, _this
        }

        return tslib_1.__extends(VariableListViewBase, _super), VariableListViewBase
    }(ListViewBase);
    exports.VariableListViewBase = VariableListViewBase;
    var ListView = function (_super) {
        function ListView(data) {
            var _this = _super.call(this, data) || this;
            return _this.values = (0, _vector.createVector)(data.values), _this
        }

        return tslib_1.__extends(ListView, _super), ListView.prototype.getList = function (values, index, valueOffsets) {
            return values.slice(valueOffsets[index], valueOffsets[index + 1])
        }, ListView.prototype.setList = function (values, index, value, valueOffsets) {
            for (var idx = -1, offset = valueOffsets[index], end = Math.min(value.length, valueOffsets[index + 1] - offset); offset < end;) values.set(offset++, value.get(++idx))
        }, ListView
    }(VariableListViewBase);
    exports.ListView = ListView;
    var FixedSizeListView = function (_super) {
        function FixedSizeListView(data) {
            var _this = _super.call(this, data) || this;
            return _this.size = data.type.listSize, _this.values = (0, _vector.createVector)(data.values), _this
        }

        return tslib_1.__extends(FixedSizeListView, _super), FixedSizeListView.prototype.getList = function (values, index) {
            var size = this.size;
            return values.slice(index *= size, index + size)
        }, FixedSizeListView.prototype.setList = function (values, index, value) {
            for (var size = this.size, idx = -1, offset = index * size; ++idx < size;) values.set(offset + idx, value.get(++idx))
        }, FixedSizeListView
    }(ListViewBase);
    exports.FixedSizeListView = FixedSizeListView;
    var BinaryView = function (_super) {
        function BinaryView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(BinaryView, _super), BinaryView.prototype.getList = function (values, index, valueOffsets) {
            return values.subarray(valueOffsets[index], valueOffsets[index + 1])
        }, BinaryView.prototype.setList = function (values, index, value, valueOffsets) {
            var offset = valueOffsets[index];
            values.set(value.subarray(0, valueOffsets[index + 1] - offset), offset)
        }, BinaryView
    }(VariableListViewBase);
    exports.BinaryView = BinaryView;
    var Utf8View = function (_super) {
        function Utf8View() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(Utf8View, _super), Utf8View.prototype.getList = function (values, index, valueOffsets) {
            return decodeUtf8(values.subarray(valueOffsets[index], valueOffsets[index + 1]))
        }, Utf8View.prototype.setList = function (values, index, value, valueOffsets) {
            var offset = valueOffsets[index];
            values.set(encodeUtf8(value).subarray(0, valueOffsets[index + 1] - offset), offset)
        }, Utf8View
    }(VariableListViewBase);
    exports.Utf8View = Utf8View
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }

    function stringify(x) {
        return "string" == typeof x ? '"' + x + '"' : Array.isArray(x) ? (0, _stringify2.default)(x) : ArrayBuffer.isView(x) ? "[" + x + "]" : "" + x
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.MapRowView = exports.RowView = exports.MapView = exports.StructView = exports.DenseUnionView = exports.UnionView = exports.NestedView = void 0;
    var _stringify = __webpack_require__(105), _stringify2 = _interopRequireDefault(_stringify),
        _create = __webpack_require__(44), _create2 = _interopRequireDefault(_create),
        _iterator = __webpack_require__(6), _iterator2 = _interopRequireDefault(_iterator),
        _tslib = __webpack_require__(1), tslib_1 = function (obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj
        }(_tslib), _vector = __webpack_require__(18), NestedView = function () {
            function NestedView(data, children) {
                this.length = data.length, this.childData = data.childData, this.numChildren = data.childData.length, this._children = children || new Array(this.numChildren)
            }

            return NestedView.prototype.clone = function (data) {
                return new this.constructor(data, this._children)
            }, NestedView.prototype.isValid = function () {
                return !0
            }, NestedView.prototype.toArray = function () {
                return tslib_1.__spread(this)
            }, NestedView.prototype.indexOf = function (_) {
                throw new Error("Not implemented yet")
            }, NestedView.prototype.toJSON = function () {
                return this.toArray()
            }, NestedView.prototype.toString = function () {
                return tslib_1.__spread(this).map(function (x) {
                    return stringify(x)
                }).join(", ")
            }, NestedView.prototype.get = function (index) {
                return this.getNested(this, index)
            }, NestedView.prototype.set = function (index, value) {
                return this.setNested(this, index, value)
            }, NestedView.prototype.getChildAt = function (index) {
                return index < 0 || index >= this.numChildren ? null : this._children[index] || (this._children[index] = _vector.Vector.create(this.childData[index]))
            }, NestedView.prototype[_iterator2.default] = function () {
                var get, length, index;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            get = this.getNested, length = this.length, index = -1, _a.label = 1;
                        case 1:
                            return ++index < length ? [4, get(this, index)] : [3, 4];
                        case 2:
                            _a.sent(), _a.label = 3;
                        case 3:
                            return [3, 1];
                        case 4:
                            return [2]
                    }
                })
            }, NestedView
        }();
    exports.NestedView = NestedView;
    var UnionView = function (_super) {
        function UnionView(data, children) {
            var _this = _super.call(this, data, children) || this;
            return _this.length = data.length, _this.typeIds = data.typeIds, _this
        }

        return tslib_1.__extends(UnionView, _super), UnionView.prototype.getNested = function (self, index) {
            return self.getChildValue(self, index, self.typeIds, self.valueOffsets)
        }, UnionView.prototype.setNested = function (self, index, value) {
            return self.setChildValue(self, index, value, self.typeIds, self.valueOffsets)
        }, UnionView.prototype.getChildValue = function (self, index, typeIds, _valueOffsets) {
            var child = self.getChildAt(typeIds[index]);
            return child ? child.get(index) : null
        }, UnionView.prototype.setChildValue = function (self, index, value, typeIds, _valueOffsets) {
            var child = self.getChildAt(typeIds[index]);
            return child ? child.set(index, value) : null
        }, UnionView.prototype[_iterator2.default] = function () {
            var length, get, _a, typeIds, valueOffsets, index;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        length = this.length, get = this.getChildValue, _a = this, typeIds = _a.typeIds, valueOffsets = _a.valueOffsets, index = -1, _b.label = 1;
                    case 1:
                        return ++index < length ? [4, get(this, index, typeIds, valueOffsets)] : [3, 4];
                    case 2:
                        _b.sent(), _b.label = 3;
                    case 3:
                        return [3, 1];
                    case 4:
                        return [2]
                }
            })
        }, UnionView
    }(NestedView);
    exports.UnionView = UnionView;
    var DenseUnionView = function (_super) {
        function DenseUnionView(data, children) {
            var _this = _super.call(this, data, children) || this;
            return _this.valueOffsets = data.valueOffsets, _this
        }

        return tslib_1.__extends(DenseUnionView, _super), DenseUnionView.prototype.getNested = function (self, index) {
            return self.getChildValue(self, index, self.typeIds, self.valueOffsets)
        }, DenseUnionView.prototype.getChildValue = function (self, index, typeIds, valueOffsets) {
            var child = self.getChildAt(typeIds[index]);
            return child ? child.get(valueOffsets[index]) : null
        }, DenseUnionView.prototype.setChildValue = function (self, index, value, typeIds, valueOffsets) {
            var child = self.getChildAt(typeIds[index]);
            return child ? child.set(valueOffsets[index], value) : null
        }, DenseUnionView
    }(UnionView);
    exports.DenseUnionView = DenseUnionView;
    var StructView = function (_super) {
        function StructView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(StructView, _super), StructView.prototype.getNested = function (self, index) {
            return new RowView(self, self._children, index)
        }, StructView.prototype.setNested = function (self, index, value) {
            var child, idx = -1, len = self.numChildren;
            if (value instanceof NestedView || value instanceof _vector.Vector) for (; ++idx < len;) (child = self.getChildAt(idx)) && child.set(index, value.get(idx)); else for (; ++idx < len;) (child = self.getChildAt(idx)) && child.set(index, value[idx])
        }, StructView
    }(NestedView);
    exports.StructView = StructView;
    var MapView = function (_super) {
        function MapView(data, children) {
            var _this = _super.call(this, data, children) || this;
            return _this.typeIds = data.type.children.reduce(function (xs, x, i) {
                return (xs[x.name] = i) && xs || xs
            }, (0, _create2.default)(null)), _this
        }

        return tslib_1.__extends(MapView, _super), MapView.prototype.getNested = function (self, index) {
            return new MapRowView(self, self._children, index)
        }, MapView.prototype.setNested = function (self, index, value) {
            var child, typeIds = self.typeIds;
            if (value instanceof NestedView || value instanceof _vector.Vector) for (var key in typeIds) (child = self.getChildAt(typeIds[key])) && child.set(index, value.get(key)); else for (var key in typeIds) (child = self.getChildAt(typeIds[key])) && child.set(index, value[key])
        }, MapView
    }(NestedView);
    exports.MapView = MapView;
    var RowView = function (_super) {
        function RowView(data, children, rowIndex) {
            var _this = _super.call(this, data, children) || this;
            return _this.rowIndex = rowIndex || 0, _this.length = data.numChildren, _this
        }

        return tslib_1.__extends(RowView, _super), RowView.prototype.clone = function (data) {
            return new this.constructor(data, this._children, this.rowIndex)
        }, RowView.prototype.getChildValue = function (self, index, _typeIds, _valueOffsets) {
            var child = self.getChildAt(index);
            return child ? child.get(self.rowIndex) : null
        }, RowView.prototype.setChildValue = function (self, index, value, _typeIds, _valueOffsets) {
            var child = self.getChildAt(index);
            return child ? child.set(self.rowIndex, value) : null
        }, RowView
    }(UnionView);
    exports.RowView = RowView;
    var MapRowView = function (_super) {
        function MapRowView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(MapRowView, _super), MapRowView.prototype.toJSON = function () {
            var get = this.getChildValue, result = {}, typeIds = this.typeIds;
            for (var name_1 in typeIds) result[name_1] = get(this, name_1, typeIds, null);
            return result
        }, MapRowView.prototype.getChildValue = function (self, key, typeIds, _valueOffsets) {
            var child = self.getChildAt(typeIds[key]);
            return child ? child.get(self.rowIndex) : null
        }, MapRowView.prototype.setChildValue = function (self, key, value, typeIds, _valueOffsets) {
            var child = self.getChildAt(typeIds[key]);
            return child ? child.set(self.rowIndex, value) : null
        }, MapRowView
    }(RowView);
    exports.MapRowView = MapRowView
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }

    function epochSecondsToMs(data, index) {
        return 1e3 * data[index]
    }

    function epochDaysToMs(data, index) {
        return 864e5 * data[index]
    }

    function epochMillisecondsLongToMs(data, index) {
        return 4294967296 * data[index + 1] + (data[index] >>> 0)
    }

    function epochMicrosecondsLongToMs(data, index) {
        return data[index + 1] / 1e3 * 4294967296 + (data[index] >>> 0) / 1e3
    }

    function epochNanosecondsLongToMs(data, index) {
        return data[index + 1] / 1e6 * 4294967296 + (data[index] >>> 0) / 1e6
    }

    function epochMillisecondsToDate(epochMs) {
        return new Date(epochMs)
    }

    function epochDaysToDate(data, index) {
        return epochMillisecondsToDate(epochDaysToMs(data, index))
    }

    function epochSecondsToDate(data, index) {
        return epochMillisecondsToDate(epochSecondsToMs(data, index))
    }

    function epochNanosecondsLongToDate(data, index) {
        return epochMillisecondsToDate(epochNanosecondsLongToMs(data, index))
    }

    function epochMillisecondsLongToDate(data, index) {
        return epochMillisecondsToDate(epochMillisecondsLongToMs(data, index))
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.IntervalMonthView = exports.IntervalYearView = exports.IntervalYearMonthView = exports.TimestampNanosecondView = exports.TimestampMicrosecondView = exports.TimestampMillisecondView = exports.TimestampSecondView = exports.TimestampDayView = exports.DateMillisecondView = exports.DateDayView = exports.Float16View = exports.FixedSizeView = exports.PrimitiveView = exports.ValidityView = exports.BoolView = exports.NullView = exports.FlatView = void 0;
    var _getIterator2 = __webpack_require__(30), _getIterator3 = _interopRequireDefault(_getIterator2),
        _iterator = __webpack_require__(6), _iterator2 = _interopRequireDefault(_iterator);
    exports.epochSecondsToMs = epochSecondsToMs, exports.epochDaysToMs = epochDaysToMs, exports.epochMillisecondsLongToMs = epochMillisecondsLongToMs, exports.epochMicrosecondsLongToMs = epochMicrosecondsLongToMs, exports.epochNanosecondsLongToMs = epochNanosecondsLongToMs, exports.epochMillisecondsToDate = epochMillisecondsToDate, exports.epochDaysToDate = epochDaysToDate, exports.epochSecondsToDate = epochSecondsToDate, exports.epochNanosecondsLongToDate = epochNanosecondsLongToDate, exports.epochMillisecondsLongToDate = epochMillisecondsLongToDate;
    var _tslib = __webpack_require__(1), tslib_1 = function (obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }(_tslib), _bit = __webpack_require__(33), FlatView = function () {
        function FlatView(data) {
            this.length = data.length, this.values = data.values
        }

        return FlatView.prototype.clone = function (data) {
            return new this.constructor(data)
        }, FlatView.prototype.isValid = function () {
            return !0
        }, FlatView.prototype.get = function (index) {
            return this.values[index]
        }, FlatView.prototype.set = function (index, value) {
            return this.values[index] = value
        }, FlatView.prototype.toArray = function () {
            return this.values.subarray(0, this.length)
        }, FlatView.prototype.indexOf = function (search) {
            var index = 0;
            try {
                for (var _a = tslib_1.__values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
                    if (_b.value === search) return index;
                    ++index
                }
            } catch (e_1_1) {
                e_1 = {error: e_1_1}
            } finally {
                try {
                    _b && !_b.done && (_c = _a.return) && _c.call(_a)
                } finally {
                    if (e_1) throw e_1.error
                }
            }
            return -1;
            var e_1, _c
        }, FlatView.prototype[_iterator2.default] = function () {
            return (0, _getIterator3.default)(this.values.subarray(0, this.length))
        }, FlatView
    }();
    exports.FlatView = FlatView;
    var NullView = function () {
        function NullView(data) {
            this.length = data.length
        }

        return NullView.prototype.clone = function (data) {
            return new this.constructor(data)
        }, NullView.prototype.isValid = function () {
            return !0
        }, NullView.prototype.set = function () {
        }, NullView.prototype.get = function () {
            return null
        }, NullView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, NullView.prototype.indexOf = function (search) {
            return null === search && this.length > 0 ? 0 : -1
        }, NullView.prototype[_iterator2.default] = function () {
            var index, length_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = -1, length_1 = this.length, _a.label = 1;
                    case 1:
                        return ++index < length_1 ? [4, null] : [3, 4];
                    case 2:
                        _a.sent(), _a.label = 3;
                    case 3:
                        return [3, 1];
                    case 4:
                        return [2]
                }
            })
        }, NullView
    }();
    exports.NullView = NullView;
    var BoolView = function (_super) {
        function BoolView(data) {
            var _this = _super.call(this, data) || this;
            return _this.offset = data.offset, _this
        }

        return tslib_1.__extends(BoolView, _super), BoolView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, BoolView.prototype.get = function (index) {
            var boolBitIndex = this.offset + index;
            return (0, _bit.getBool)(null, index, this.values[boolBitIndex >> 3], boolBitIndex % 8)
        }, BoolView.prototype.set = function (index, value) {
            (0, _bit.setBool)(this.values, this.offset + index, value)
        }, BoolView.prototype[_iterator2.default] = function () {
            return (0, _bit.iterateBits)(this.values, this.offset, this.length, this.values, _bit.getBool)
        }, BoolView
    }(FlatView);
    exports.BoolView = BoolView;
    var ValidityView = function () {
        function ValidityView(data, view) {
            this.view = view, this.length = data.length, this.offset = data.offset, this.nullBitmap = data.nullBitmap
        }

        return ValidityView.prototype.clone = function (data) {
            return new ValidityView(data, this.view.clone(data))
        }, ValidityView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, ValidityView.prototype.indexOf = function (search) {
            var index = 0;
            try {
                for (var _a = tslib_1.__values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
                    if (_b.value === search) return index;
                    ++index
                }
            } catch (e_2_1) {
                e_2 = {error: e_2_1}
            } finally {
                try {
                    _b && !_b.done && (_c = _a.return) && _c.call(_a)
                } finally {
                    if (e_2) throw e_2.error
                }
            }
            return -1;
            var e_2, _c
        }, ValidityView.prototype.isValid = function (index) {
            var nullBitIndex = this.offset + index;
            return (0, _bit.getBool)(null, index, this.nullBitmap[nullBitIndex >> 3], nullBitIndex % 8)
        }, ValidityView.prototype.get = function (index) {
            var nullBitIndex = this.offset + index;
            return this.getNullable(this.view, index, this.nullBitmap[nullBitIndex >> 3], nullBitIndex % 8)
        }, ValidityView.prototype.set = function (index, value) {
            (0, _bit.setBool)(this.nullBitmap, this.offset + index, null != value) && this.view.set(index, value)
        }, ValidityView.prototype[_iterator2.default] = function () {
            return (0, _bit.iterateBits)(this.nullBitmap, this.offset, this.length, this.view, this.getNullable)
        }, ValidityView.prototype.getNullable = function (view, index, byte, bit) {
            return (0, _bit.getBool)(view, index, byte, bit) ? view.get(index) : null
        }, ValidityView
    }();
    exports.ValidityView = ValidityView;
    var PrimitiveView = function (_super) {
        function PrimitiveView(data, size) {
            var _this = _super.call(this, data) || this;
            return _this.size = size || 1, _this.ArrayType = data.type.ArrayType, _this
        }

        return tslib_1.__extends(PrimitiveView, _super), PrimitiveView.prototype.clone = function (data) {
            return new this.constructor(data, this.size)
        }, PrimitiveView.prototype.getValue = function (values, index, size) {
            return values[index * size]
        }, PrimitiveView.prototype.setValue = function (values, index, size, value) {
            values[index * size] = value
        }, PrimitiveView.prototype.get = function (index) {
            return this.getValue(this.values, index, this.size)
        }, PrimitiveView.prototype.set = function (index, value) {
            return this.setValue(this.values, index, this.size, value)
        }, PrimitiveView.prototype.toArray = function () {
            return this.size > 1 ? new this.ArrayType(this) : this.values.subarray(0, this.length)
        }, PrimitiveView.prototype[_iterator2.default] = function () {
            var get, _a, size, values, length, index;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        get = this.getValue, _a = this, size = _a.size, values = _a.values, length = _a.length, index = -1, _b.label = 1;
                    case 1:
                        return ++index < length ? [4, get(values, index, size)] : [3, 4];
                    case 2:
                        _b.sent(), _b.label = 3;
                    case 3:
                        return [3, 1];
                    case 4:
                        return [2]
                }
            })
        }, PrimitiveView
    }(FlatView);
    exports.PrimitiveView = PrimitiveView;
    var FixedSizeView = function (_super) {
        function FixedSizeView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(FixedSizeView, _super), FixedSizeView.prototype.toArray = function () {
            return this.values
        }, FixedSizeView.prototype.indexOf = function (search) {
            var index = 0;
            try {
                for (var _a = tslib_1.__values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
                    if (_b.value.every(function (d, i) {
                        return d === search[i]
                    })) return index;
                    ++index
                }
            } catch (e_3_1) {
                e_3 = {error: e_3_1}
            } finally {
                try {
                    _b && !_b.done && (_c = _a.return) && _c.call(_a)
                } finally {
                    if (e_3) throw e_3.error
                }
            }
            return -1;
            var e_3, _c
        }, FixedSizeView.prototype.getValue = function (values, index, size) {
            return values.subarray(index * size, index * size + size)
        }, FixedSizeView.prototype.setValue = function (values, index, size, value) {
            values.set(value.subarray(0, size), index * size)
        }, FixedSizeView
    }(PrimitiveView);
    exports.FixedSizeView = FixedSizeView;
    var Float16View = function (_super) {
        function Float16View() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(Float16View, _super), Float16View.prototype.toArray = function () {
            return new Float32Array(this)
        }, Float16View.prototype.getValue = function (values, index, size) {
            return (values[index * size] - 32767) / 32767
        }, Float16View.prototype.setValue = function (values, index, size, value) {
            values[index * size] = 32767 * value + 32767
        }, Float16View
    }(PrimitiveView);
    exports.Float16View = Float16View;
    var DateDayView = function (_super) {
        function DateDayView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(DateDayView, _super), DateDayView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, DateDayView.prototype.getValue = function (values, index, size) {
            return epochDaysToDate(values, index * size)
        }, DateDayView.prototype.setValue = function (values, index, size, value) {
            values[index * size] = value.valueOf() / 864e5
        }, DateDayView
    }(PrimitiveView);
    exports.DateDayView = DateDayView;
    var DateMillisecondView = function (_super) {
        function DateMillisecondView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(DateMillisecondView, _super), DateMillisecondView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, DateMillisecondView.prototype.getValue = function (values, index, size) {
            return epochMillisecondsLongToDate(values, index * size)
        }, DateMillisecondView.prototype.setValue = function (values, index, size, value) {
            var epochMs = value.valueOf();
            values[index * size] = epochMs % 4294967296 | 0, values[index * size + size] = epochMs / 4294967296 | 0
        }, DateMillisecondView
    }(FixedSizeView);
    exports.DateMillisecondView = DateMillisecondView;
    var TimestampDayView = function (_super) {
        function TimestampDayView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(TimestampDayView, _super), TimestampDayView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, TimestampDayView.prototype.getValue = function (values, index, size) {
            return epochDaysToMs(values, index * size)
        }, TimestampDayView.prototype.setValue = function (values, index, size, epochMs) {
            values[index * size] = epochMs / 864e5 | 0
        }, TimestampDayView
    }(PrimitiveView);
    exports.TimestampDayView = TimestampDayView;
    var TimestampSecondView = function (_super) {
        function TimestampSecondView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(TimestampSecondView, _super), TimestampSecondView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, TimestampSecondView.prototype.getValue = function (values, index, size) {
            return epochSecondsToMs(values, index * size)
        }, TimestampSecondView.prototype.setValue = function (values, index, size, epochMs) {
            values[index * size] = epochMs / 1e3 | 0
        }, TimestampSecondView
    }(PrimitiveView);
    exports.TimestampSecondView = TimestampSecondView;
    var TimestampMillisecondView = function (_super) {
        function TimestampMillisecondView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(TimestampMillisecondView, _super), TimestampMillisecondView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, TimestampMillisecondView.prototype.getValue = function (values, index, size) {
            return epochMillisecondsLongToMs(values, index * size)
        }, TimestampMillisecondView.prototype.setValue = function (values, index, size, epochMs) {
            values[index * size] = epochMs % 4294967296 | 0, values[index * size + size] = epochMs / 4294967296 | 0
        }, TimestampMillisecondView
    }(PrimitiveView);
    exports.TimestampMillisecondView = TimestampMillisecondView;
    var TimestampMicrosecondView = function (_super) {
        function TimestampMicrosecondView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(TimestampMicrosecondView, _super), TimestampMicrosecondView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, TimestampMicrosecondView.prototype.getValue = function (values, index, size) {
            return epochMicrosecondsLongToMs(values, index * size)
        }, TimestampMicrosecondView.prototype.setValue = function (values, index, size, epochMs) {
            values[index * size] = epochMs / 1e3 % 4294967296 | 0, values[index * size + size] = epochMs / 1e3 / 4294967296 | 0
        }, TimestampMicrosecondView
    }(PrimitiveView);
    exports.TimestampMicrosecondView = TimestampMicrosecondView;
    var TimestampNanosecondView = function (_super) {
        function TimestampNanosecondView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(TimestampNanosecondView, _super), TimestampNanosecondView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, TimestampNanosecondView.prototype.getValue = function (values, index, size) {
            return epochNanosecondsLongToMs(values, index * size)
        }, TimestampNanosecondView.prototype.setValue = function (values, index, size, epochMs) {
            values[index * size] = epochMs / 1e6 % 4294967296 | 0, values[index * size + size] = epochMs / 1e6 / 4294967296 | 0
        }, TimestampNanosecondView
    }(PrimitiveView);
    exports.TimestampNanosecondView = TimestampNanosecondView;
    var IntervalYearMonthView = function (_super) {
        function IntervalYearMonthView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(IntervalYearMonthView, _super), IntervalYearMonthView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, IntervalYearMonthView.prototype.getValue = function (values, index, size) {
            var interval = values[index * size];
            return new Int32Array([interval / 12, interval % 12])
        }, IntervalYearMonthView.prototype.setValue = function (values, index, size, value) {
            values[index * size] = 12 * value[0] + value[1] % 12
        }, IntervalYearMonthView
    }(PrimitiveView);
    exports.IntervalYearMonthView = IntervalYearMonthView;
    var IntervalYearView = function (_super) {
        function IntervalYearView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(IntervalYearView, _super), IntervalYearView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, IntervalYearView.prototype.getValue = function (values, index, size) {
            return values[index * size] / 12
        }, IntervalYearView.prototype.setValue = function (values, index, size, value) {
            values[index * size] = 12 * value + values[index * size] % 12
        }, IntervalYearView
    }(PrimitiveView);
    exports.IntervalYearView = IntervalYearView;
    var IntervalMonthView = function (_super) {
        function IntervalMonthView() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(IntervalMonthView, _super), IntervalMonthView.prototype.toArray = function () {
            return tslib_1.__spread(this)
        }, IntervalMonthView.prototype.getValue = function (values, index, size) {
            return values[index * size] % 12
        }, IntervalMonthView.prototype.setValue = function (values, index, size, value) {
            values[index * size] = 12 * values[index * size] + value % 12
        }, IntervalMonthView
    }(PrimitiveView);
    exports.IntervalMonthView = IntervalMonthView
}, function (module, exports, __webpack_require__) {
    "use strict";

    function lit(v) {
        return new Literal(v)
    }

    function col(n) {
        return new Col(n)
    }

    function custom(next, bind) {
        return new CustomPredicate(next, bind)
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.CustomPredicate = exports.Not = exports.GTeq = exports.LTeq = exports.Equals = exports.Or = exports.And = exports.CombinationPredicate = exports.ComparisonPredicate = exports.Predicate = exports.Col = exports.Literal = exports.Value = void 0, exports.lit = lit, exports.col = col, exports.custom = custom;
    var _tslib = __webpack_require__(1), tslib_1 = function (obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }(_tslib), _vector = __webpack_require__(18), Value = function () {
        function Value() {
        }

        return Value.prototype.eq = function (other) {
            return other instanceof Value || (other = new Literal(other)), new Equals(this, other)
        }, Value.prototype.le = function (other) {
            return other instanceof Value || (other = new Literal(other)), new LTeq(this, other)
        }, Value.prototype.ge = function (other) {
            return other instanceof Value || (other = new Literal(other)), new GTeq(this, other)
        }, Value.prototype.lt = function (other) {
            return new Not(this.ge(other))
        }, Value.prototype.gt = function (other) {
            return new Not(this.le(other))
        }, Value.prototype.ne = function (other) {
            return new Not(this.eq(other))
        }, Value
    }();
    exports.Value = Value;
    var Literal = function (_super) {
        function Literal(v) {
            var _this = _super.call(this) || this;
            return _this.v = v, _this
        }

        return tslib_1.__extends(Literal, _super), Literal
    }(Value);
    exports.Literal = Literal;
    var Col = function (_super) {
        function Col(name) {
            var _this = _super.call(this) || this;
            return _this.name = name, _this
        }

        return tslib_1.__extends(Col, _super), Col.prototype.bind = function (batch) {
            if (!this.colidx) {
                this.colidx = -1;
                for (var fields = batch.schema.fields, idx = -1; ++idx < fields.length;) if (fields[idx].name === this.name) {
                    this.colidx = idx;
                    break
                }
                if (this.colidx < 0) throw new Error('Failed to bind Col "' + this.name + '"')
            }
            return this.vector = batch.getChildAt(this.colidx), this.vector.get.bind(this.vector)
        }, Col
    }(Value);
    exports.Col = Col;
    var Predicate = function () {
        function Predicate() {
        }

        return Predicate.prototype.and = function (expr) {
            return new And(this, expr)
        }, Predicate.prototype.or = function (expr) {
            return new Or(this, expr)
        }, Predicate.prototype.not = function () {
            return new Not(this)
        }, Predicate.prototype.ands = function () {
            return [this]
        }, Predicate
    }();
    exports.Predicate = Predicate;
    var ComparisonPredicate = function (_super) {
        function ComparisonPredicate(left, right) {
            var _this = _super.call(this) || this;
            return _this.left = left, _this.right = right, _this
        }

        return tslib_1.__extends(ComparisonPredicate, _super), ComparisonPredicate.prototype.bind = function (batch) {
            return this.left instanceof Literal ? this.right instanceof Literal ? this._bindLitLit(batch, this.left, this.right) : this._bindLitCol(batch, this.left, this.right) : this.right instanceof Literal ? this._bindColLit(batch, this.left, this.right) : this._bindColCol(batch, this.left, this.right)
        }, ComparisonPredicate
    }(Predicate);
    exports.ComparisonPredicate = ComparisonPredicate;
    var CombinationPredicate = function (_super) {
        function CombinationPredicate(left, right) {
            var _this = _super.call(this) || this;
            return _this.left = left, _this.right = right, _this
        }

        return tslib_1.__extends(CombinationPredicate, _super), CombinationPredicate
    }(Predicate);
    exports.CombinationPredicate = CombinationPredicate;
    var And = function (_super) {
        function And() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(And, _super), And.prototype.bind = function (batch) {
            var left = this.left.bind(batch), right = this.right.bind(batch);
            return function (idx, batch) {
                return left(idx, batch) && right(idx, batch)
            }
        }, And.prototype.ands = function () {
            return this.left.ands().concat(this.right.ands())
        }, And
    }(CombinationPredicate);
    exports.And = And;
    var Or = function (_super) {
        function Or() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(Or, _super), Or.prototype.bind = function (batch) {
            var left = this.left.bind(batch), right = this.right.bind(batch);
            return function (idx, batch) {
                return left(idx, batch) || right(idx, batch)
            }
        }, Or
    }(CombinationPredicate);
    exports.Or = Or;
    var Equals = function (_super) {
        function Equals() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(Equals, _super), Equals.prototype._bindLitLit = function (_batch, left, right) {
            var rtrn = left.v == right.v;
            return function () {
                return rtrn
            }
        }, Equals.prototype._bindColCol = function (batch, left, right) {
            var left_func = left.bind(batch), right_func = right.bind(batch);
            return function (idx, batch) {
                return left_func(idx, batch) == right_func(idx, batch)
            }
        }, Equals.prototype._bindColLit = function (batch, col, lit) {
            var col_func = col.bind(batch);
            if (col.vector instanceof _vector.DictionaryVector) {
                var key_1, vector_1 = col.vector;
                return vector_1.dictionary !== this.lastDictionary ? (key_1 = vector_1.reverseLookup(lit.v), this.lastDictionary = vector_1.dictionary, this.lastKey = key_1) : key_1 = this.lastKey, -1 === key_1 ? function () {
                    return !1
                } : function (idx) {
                    return vector_1.getKey(idx) === key_1
                }
            }
            return function (idx, cols) {
                return col_func(idx, cols) == lit.v
            }
        }, Equals.prototype._bindLitCol = function (batch, lit, col) {
            return this._bindColLit(batch, col, lit)
        }, Equals
    }(ComparisonPredicate);
    exports.Equals = Equals;
    var LTeq = function (_super) {
        function LTeq() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(LTeq, _super), LTeq.prototype._bindLitLit = function (_batch, left, right) {
            var rtrn = left.v <= right.v;
            return function () {
                return rtrn
            }
        }, LTeq.prototype._bindColCol = function (batch, left, right) {
            var left_func = left.bind(batch), right_func = right.bind(batch);
            return function (idx, cols) {
                return left_func(idx, cols) <= right_func(idx, cols)
            }
        }, LTeq.prototype._bindColLit = function (batch, col, lit) {
            var col_func = col.bind(batch);
            return function (idx, cols) {
                return col_func(idx, cols) <= lit.v
            }
        }, LTeq.prototype._bindLitCol = function (batch, lit, col) {
            var col_func = col.bind(batch);
            return function (idx, cols) {
                return lit.v <= col_func(idx, cols)
            }
        }, LTeq
    }(ComparisonPredicate);
    exports.LTeq = LTeq;
    var GTeq = function (_super) {
        function GTeq() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(GTeq, _super), GTeq.prototype._bindLitLit = function (_batch, left, right) {
            var rtrn = left.v >= right.v;
            return function () {
                return rtrn
            }
        }, GTeq.prototype._bindColCol = function (batch, left, right) {
            var left_func = left.bind(batch), right_func = right.bind(batch);
            return function (idx, cols) {
                return left_func(idx, cols) >= right_func(idx, cols)
            }
        }, GTeq.prototype._bindColLit = function (batch, col, lit) {
            var col_func = col.bind(batch);
            return function (idx, cols) {
                return col_func(idx, cols) >= lit.v
            }
        }, GTeq.prototype._bindLitCol = function (batch, lit, col) {
            var col_func = col.bind(batch);
            return function (idx, cols) {
                return lit.v >= col_func(idx, cols)
            }
        }, GTeq
    }(ComparisonPredicate);
    exports.GTeq = GTeq;
    var Not = function (_super) {
        function Not(child) {
            var _this = _super.call(this) || this;
            return _this.child = child, _this
        }

        return tslib_1.__extends(Not, _super), Not.prototype.bind = function (batch) {
            var func = this.child.bind(batch);
            return function (idx, batch) {
                return !func(idx, batch)
            }
        }, Not
    }(Predicate);
    exports.Not = Not;
    var CustomPredicate = function (_super) {
        function CustomPredicate(next, bind_) {
            var _this = _super.call(this) || this;
            return _this.next = next, _this.bind_ = bind_, _this
        }

        return tslib_1.__extends(CustomPredicate, _super), CustomPredicate.prototype.bind = function (batch) {
            return this.bind_(batch), this.next
        }, CustomPredicate
    }(Predicate);
    exports.CustomPredicate = CustomPredicate
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }

    function read(sources) {
        var input, messages;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if ("string" == typeof(input = sources)) try {
                        input = JSON.parse(input)
                    } catch (e) {
                        input = sources
                    }
                    return messages = input && "object" === (void 0 === input ? "undefined" : (0, _typeof3.default)(input)) ? "function" == typeof input[_iterator2.default] ? (0, _binary.readBuffers)(input) : (0, _json.readJSON)(input) : "string" == typeof input ? (0, _binary.readBuffers)([input]) : [], [5, tslib_1.__values((0, _vector.readRecordBatches)(messages))];
                case 1:
                    return _a.sent(), [2]
            }
        })
    }

    function readAsync(sources) {
        return tslib_1.__asyncGenerator(this, arguments, function () {
            var _a, _b, recordBatch, e_1_1, e_1, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, 8, 13]), _a = tslib_1.__asyncValues((0, _vector.readRecordBatchesAsync)((0, _binary.readBuffersAsync)(sources))), _d.label = 1;
                    case 1:
                        return [4, tslib_1.__await(_a.next())];
                    case 2:
                        return _b = _d.sent(), !_b.done ? [4, tslib_1.__await(_b.value)] : [3, 6];
                    case 3:
                        return recordBatch = _d.sent(), [4, recordBatch];
                    case 4:
                        _d.sent(), _d.label = 5;
                    case 5:
                        return [3, 1];
                    case 6:
                        return [3, 13];
                    case 7:
                        return e_1_1 = _d.sent(), e_1 = {error: e_1_1}, [3, 13];
                    case 8:
                        return _d.trys.push([8, , 11, 12]), _b && !_b.done && (_c = _a.return) ? [4, tslib_1.__await(_c.call(_a))] : [3, 10];
                    case 9:
                        _d.sent(), _d.label = 10;
                    case 10:
                        return [3, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7];
                    case 12:
                        return [7];
                    case 13:
                        return [2]
                }
            })
        })
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.readRecordBatchesAsync = exports.readRecordBatches = exports.readBuffersAsync = exports.readBuffers = exports.RecordBatch = exports.readJSON = void 0;
    var _iterator = __webpack_require__(6), _iterator2 = _interopRequireDefault(_iterator),
        _typeof2 = __webpack_require__(34), _typeof3 = _interopRequireDefault(_typeof2);
    exports.read = read, exports.readAsync = readAsync;
    var _tslib = __webpack_require__(1), tslib_1 = function (obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj
        }(_tslib), _json = __webpack_require__(209), _recordbatch = __webpack_require__(69),
        _binary = __webpack_require__(215), _vector = __webpack_require__(72);
    exports.readJSON = _json.readJSON, exports.RecordBatch = _recordbatch.RecordBatch, exports.readBuffers = _binary.readBuffers, exports.readBuffersAsync = _binary.readBuffersAsync, exports.readRecordBatches = _vector.readRecordBatches, exports.readRecordBatchesAsync = _vector.readRecordBatchesAsync
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }

    function readJSON(json) {
        var schema, dictionaries, _a, _b, batch, message, e_1_1, _c, _d, batch, message, e_2_1, e_1, _e, e_2, _f;
        return tslib_1.__generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    schema = schemaFromJSON(json.schema), dictionaries = new _map2.default, _g.label = 1;
                case 1:
                    _g.trys.push([1, 6, 7, 8]), _a = tslib_1.__values(json.dictionaries || []), _b = _a.next(), _g.label = 2;
                case 2:
                    return _b.done ? [3, 5] : (batch = _b.value, message = dictionaryBatchFromJSON(batch), [4, {
                        schema: schema,
                        message: message,
                        loader: new JSONDataLoader(flattenDataSources(batch.data.columns), arrayIterator(message.nodes), arrayIterator(message.buffers), dictionaries)
                    }]);
                case 3:
                    _g.sent(), _g.label = 4;
                case 4:
                    return _b = _a.next(), [3, 2];
                case 5:
                    return [3, 8];
                case 6:
                    return e_1_1 = _g.sent(), e_1 = {error: e_1_1}, [3, 8];
                case 7:
                    try {
                        _b && !_b.done && (_e = _a.return) && _e.call(_a)
                    } finally {
                        if (e_1) throw e_1.error
                    }
                    return [7];
                case 8:
                    _g.trys.push([8, 13, 14, 15]), _c = tslib_1.__values(json.batches || []), _d = _c.next(), _g.label = 9;
                case 9:
                    return _d.done ? [3, 12] : (batch = _d.value, message = recordBatchFromJSON(batch), [4, {
                        schema: schema,
                        message: message,
                        loader: new JSONDataLoader(flattenDataSources(batch.columns), arrayIterator(message.nodes), arrayIterator(message.buffers), dictionaries)
                    }]);
                case 10:
                    _g.sent(), _g.label = 11;
                case 11:
                    return _d = _c.next(), [3, 9];
                case 12:
                    return [3, 15];
                case 13:
                    return e_2_1 = _g.sent(), e_2 = {error: e_2_1}, [3, 15];
                case 14:
                    try {
                        _d && !_d.done && (_f = _c.return) && _f.call(_c)
                    } finally {
                        if (e_2) throw e_2.error
                    }
                    return [7];
                case 15:
                    return [2]
            }
        })
    }

    function arrayIterator(arr) {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [5, tslib_1.__values(arr)];
                case 1:
                    return _a.sent(), [2]
            }
        })
    }

    function flattenDataSources(xs) {
        return (xs || []).reduce(function (buffers, column) {
            return tslib_1.__spread(buffers, column.VALIDITY && [column.VALIDITY] || [], column.OFFSET && [column.OFFSET] || [], column.DATA && [column.DATA] || [], flattenDataSources(column.children))
        }, [])
    }

    function int64DataFromJSON(values) {
        for (var data = new Uint32Array(2 * values.length), i = -1, n = values.length; ++i < n;) IntUtil.Int64.fromString(values[i].toString(), new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
        return data.buffer
    }

    function decimalDataFromJSON(values) {
        for (var data = new Uint32Array(4 * values.length), i = -1, n = values.length; ++i < n;) IntUtil.Int128.fromString(values[i], new Uint32Array(data.buffer, data.byteOffset + 16 * i, 4));
        return data.buffer
    }

    function binaryDataFromJSON(values) {
        for (var joined = values.join(""), data = new Uint8Array(joined.length / 2), i = 0; i < joined.length; i += 2) data[i >> 1] = parseInt(joined.substr(i, 2), 16);
        return data.buffer
    }

    function schemaFromJSON(s) {
        var dictionaryFields = new _map2.default;
        return new _type2.Schema(fieldsFromJSON(s.fields, dictionaryFields), customMetadata(s.customMetadata), MetadataVersion.V4, dictionaryFields)
    }

    function recordBatchFromJSON(b) {
        return new _metadata.RecordBatchMetadata(MetadataVersion.V4, b.count, fieldNodesFromJSON(b.columns), buffersFromJSON(b.columns))
    }

    function dictionaryBatchFromJSON(b) {
        return new _metadata.DictionaryBatch(MetadataVersion.V4, recordBatchFromJSON(b.data), b.id, b.isDelta)
    }

    function fieldsFromJSON(fs, dictionaryFields) {
        return (fs || []).map(function (f) {
            return fieldFromJSON(f, dictionaryFields)
        }).filter(function (f) {
            return null != f
        })
    }

    function fieldNodesFromJSON(xs) {
        return (xs || []).reduce(function (fieldNodes, column) {
            return tslib_1.__spread(fieldNodes, [new _metadata.FieldMetadata(new Long(column.count, 0), new Long(nullCountFromJSON(column.VALIDITY), 0))], fieldNodesFromJSON(column.children))
        }, [])
    }

    function buffersFromJSON(xs, buffers) {
        void 0 === buffers && (buffers = []);
        for (var i = -1, n = (xs || []).length; ++i < n;) {
            var column = xs[i];
            column.VALIDITY && buffers.push(new _metadata.BufferMetadata(new Long(buffers.length, 0), new Long(column.VALIDITY.length, 0))), column.OFFSET && buffers.push(new _metadata.BufferMetadata(new Long(buffers.length, 0), new Long(column.OFFSET.length, 0))), column.DATA && buffers.push(new _metadata.BufferMetadata(new Long(buffers.length, 0), new Long(column.DATA.length, 0))), buffers = buffersFromJSON(column.children, buffers)
        }
        return buffers
    }

    function nullCountFromJSON(validity) {
        return (validity || []).reduce(function (sum, val) {
            return sum + +(0 === val)
        }, 0)
    }

    function fieldFromJSON(f, dictionaryFields) {
        var field, dataType, id, keysMeta, dictMeta, name = f.name, nullable = f.nullable,
            metadata = customMetadata(f.customMetadata);
        return dictionaryFields && (dictMeta = f.dictionary) ? (dataType = dictionaryFields.has(id = dictMeta.id) ? dictionaryFields.get(id).type.dictionary : typeFromJSON(f.type, fieldsFromJSON(f.children, null))) && (dataType = new _type2.Dictionary(dataType, (keysMeta = dictMeta.indexType) ? intFromJSON(keysMeta) : new _type2.Int32, id, dictMeta.isOrdered), field = new _type2.Field(name, dataType, nullable, metadata), dictionaryFields.has(id) || dictionaryFields.set(id, field)) : (dataType = typeFromJSON(f.type, fieldsFromJSON(f.children, dictionaryFields))) && (field = new _type2.Field(name, dataType, nullable, metadata)), field || null
    }

    function customMetadata(metadata) {
        return new _map2.default((0, _entries2.default)(metadata || {}))
    }

    function typeFromJSON(t, children) {
        switch (namesToTypeMap[t.name]) {
            case Type.NONE:
                return null;
            case Type.Null:
                return nullFromJSON(t);
            case Type.Int:
                return intFromJSON(t);
            case Type.FloatingPoint:
                return floatingPointFromJSON(t);
            case Type.Binary:
                return binaryFromJSON(t);
            case Type.Utf8:
                return utf8FromJSON(t);
            case Type.Bool:
                return boolFromJSON(t);
            case Type.Decimal:
                return decimalFromJSON(t);
            case Type.Date:
                return dateFromJSON(t);
            case Type.Time:
                return timeFromJSON(t);
            case Type.Timestamp:
                return timestampFromJSON(t);
            case Type.Interval:
                return intervalFromJSON(t);
            case Type.List:
                return listFromJSON(t, children || []);
            case Type.Struct_:
                return structFromJSON(t, children || []);
            case Type.Union:
                return unionFromJSON(t, children || []);
            case Type.FixedSizeBinary:
                return fixedSizeBinaryFromJSON(t);
            case Type.FixedSizeList:
                return fixedSizeListFromJSON(t, children || []);
            case Type.Map:
                return mapFromJSON(t, children || [])
        }
        throw new Error("Unrecognized type " + t.name)
    }

    function nullFromJSON(_type) {
        return new _type2.Null
    }

    function intFromJSON(_type) {
        switch (_type.bitWidth) {
            case 8:
                return _type.isSigned ? new _type2.Int8 : new _type2.Uint8;
            case 16:
                return _type.isSigned ? new _type2.Int16 : new _type2.Uint16;
            case 32:
                return _type.isSigned ? new _type2.Int32 : new _type2.Uint32;
            case 64:
                return _type.isSigned ? new _type2.Int64 : new _type2.Uint64
        }
        return null
    }

    function floatingPointFromJSON(_type) {
        switch (Precision[_type.precision]) {
            case Precision.HALF:
                return new _type2.Float16;
            case Precision.SINGLE:
                return new _type2.Float32;
            case Precision.DOUBLE:
                return new _type2.Float64
        }
        return null
    }

    function binaryFromJSON(_type) {
        return new _type2.Binary
    }

    function utf8FromJSON(_type) {
        return new _type2.Utf8
    }

    function boolFromJSON(_type) {
        return new _type2.Bool
    }

    function decimalFromJSON(_type) {
        return new _type2.Decimal(_type.scale, _type.precision)
    }

    function dateFromJSON(_type) {
        return new _type2.Date_(DateUnit[_type.unit])
    }

    function timeFromJSON(_type) {
        return new _type2.Time(TimeUnit[_type.unit], _type.bitWidth)
    }

    function timestampFromJSON(_type) {
        return new _type2.Timestamp(TimeUnit[_type.unit], _type.timezone)
    }

    function intervalFromJSON(_type) {
        return new _type2.Interval(IntervalUnit[_type.unit])
    }

    function listFromJSON(_type, children) {
        return new _type2.List(children)
    }

    function structFromJSON(_type, children) {
        return new _type2.Struct(children)
    }

    function unionFromJSON(_type, children) {
        return new _type2.Union(_type.mode, _type.typeIdsArray || [], children)
    }

    function fixedSizeBinaryFromJSON(_type) {
        return new _type2.FixedSizeBinary(_type.byteWidth)
    }

    function fixedSizeListFromJSON(_type, children) {
        return new _type2.FixedSizeList(_type.listSize, children)
    }

    function mapFromJSON(_type, children) {
        return new _type2.Map_(_type.keysSorted, children)
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.JSONDataLoader = void 0;
    var _entries = __webpack_require__(210), _entries2 = _interopRequireDefault(_entries),
        _map = __webpack_require__(70), _map2 = _interopRequireDefault(_map);
    exports.readJSON = readJSON;
    var _tslib = __webpack_require__(1), tslib_1 = _interopRequireWildcard(_tslib),
        _flatbuffers = __webpack_require__(71), _vector = __webpack_require__(72), _bit = __webpack_require__(33),
        _int = __webpack_require__(214), IntUtil = _interopRequireWildcard(_int),
        _textEncodingUtf = __webpack_require__(110), _metadata = __webpack_require__(47),
        _type2 = __webpack_require__(10), _Schema = __webpack_require__(32), Schema_ = _interopRequireWildcard(_Schema),
        _data = __webpack_require__(49), Long = _flatbuffers.flatbuffers.Long,
        utf8Encoder = new _textEncodingUtf.TextEncoder("utf-8"), JSONDataLoader = function (_super) {
            function JSONDataLoader(sources, nodes, buffers, dictionaries) {
                var _this = _super.call(this, nodes, buffers, dictionaries) || this;
                return _this.sources = sources, _this
            }

            return tslib_1.__extends(JSONDataLoader, _super), JSONDataLoader.prototype.readNullBitmap = function (_type, nullCount, _a) {
                var offset = (void 0 === _a ? this.getBufferMetadata() : _a).offset;
                return nullCount <= 0 ? new Uint8Array(0) : (0, _bit.packBools)(this.sources[offset])
            }, JSONDataLoader.prototype.readOffsets = function (_type, _a) {
                var offset = (void 0 === _a ? this.getBufferMetadata() : _a).offset;
                return new Int32Array(this.sources[offset])
            }, JSONDataLoader.prototype.readTypeIds = function (_type, _a) {
                var offset = (void 0 === _a ? this.getBufferMetadata() : _a).offset;
                return new Int8Array(this.sources[offset])
            }, JSONDataLoader.prototype.readData = function (type, _a) {
                var offset = (void 0 === _a ? this.getBufferMetadata() : _a).offset, sources = this.sources;
                return !0 === _type2.DataType.isTimestamp(type) ? new Uint8Array(int64DataFromJSON(sources[offset])) : (_type2.DataType.isInt(type) || _type2.DataType.isTime(type)) && 64 === type.bitWidth ? new Uint8Array(int64DataFromJSON(sources[offset])) : _type2.DataType.isDate(type) && type.unit === DateUnit.MILLISECOND ? new Uint8Array(int64DataFromJSON(sources[offset])) : !0 === _type2.DataType.isDecimal(type) ? new Uint8Array(decimalDataFromJSON(sources[offset])) : !0 === _type2.DataType.isBinary(type) ? new Uint8Array(binaryDataFromJSON(sources[offset])) : !0 === _type2.DataType.isBool(type) ? new Uint8Array((0, _bit.packBools)(sources[offset]).buffer) : !0 === _type2.DataType.isUtf8(type) ? utf8Encoder.encode(sources[offset].join("")) : (0, _data.toTypedArray)(type.ArrayType, sources[offset].map(function (x) {
                    return +x
                }))
            }, JSONDataLoader
        }(_vector.TypeDataLoader);
    exports.JSONDataLoader = JSONDataLoader;
    var Type = Schema_.org.apache.arrow.flatbuf.Type, DateUnit = Schema_.org.apache.arrow.flatbuf.DateUnit,
        TimeUnit = Schema_.org.apache.arrow.flatbuf.TimeUnit, Precision = Schema_.org.apache.arrow.flatbuf.Precision,
        IntervalUnit = Schema_.org.apache.arrow.flatbuf.IntervalUnit,
        MetadataVersion = Schema_.org.apache.arrow.flatbuf.MetadataVersion, namesToTypeMap = {
            NONE: Type.NONE,
            null: Type.Null,
            int: Type.Int,
            floatingpoint: Type.FloatingPoint,
            binary: Type.Binary,
            bool: Type.Bool,
            utf8: Type.Utf8,
            decimal: Type.Decimal,
            date: Type.Date,
            time: Type.Time,
            timestamp: Type.Timestamp,
            interval: Type.Interval,
            list: Type.List,
            struct: Type.Struct_,
            union: Type.Union,
            fixedsizebinary: Type.FixedSizeBinary,
            fixedsizelist: Type.FixedSizeList,
            map: Type.Map
        }
}, function (module, exports, __webpack_require__) {
    module.exports = {default: __webpack_require__(211), __esModule: !0}
}, function (module, exports, __webpack_require__) {
    __webpack_require__(212), module.exports = __webpack_require__(0).Object.entries
}, function (module, exports, __webpack_require__) {
    var $export = __webpack_require__(2), $entries = __webpack_require__(213)(!0);
    $export($export.S, "Object", {
        entries: function (it) {
            return $entries(it)
        }
    })
}, function (module, exports, __webpack_require__) {
    var getKeys = __webpack_require__(20), toIObject = __webpack_require__(16), isEnum = __webpack_require__(28).f;
    module.exports = function (isEntries) {
        return function (it) {
            for (var key, O = toIObject(it), keys = getKeys(O), length = keys.length, i = 0, result = []; length > i;) isEnum.call(O, key = keys[i++]) && result.push(isEntries ? [key, O[key]] : O[key]);
            return result
        }
    }
}, function (module, exports, __webpack_require__) {
    "use strict";

    function intAsHex(value) {
        return value < 0 && (value = 4294967295 + value + 1), "0x" + value.toString(16)
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.Int128 = exports.Int64 = exports.Uint64 = exports.BaseInt64 = void 0;
    var _tslib = __webpack_require__(1), tslib_1 = function (obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }(_tslib), kPowersOfTen = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8], BaseInt64 = function () {
        function BaseInt64(buffer) {
            this.buffer = buffer
        }

        return BaseInt64.prototype.high = function () {
            return this.buffer[1]
        }, BaseInt64.prototype.low = function () {
            return this.buffer[0]
        }, BaseInt64.prototype._times = function (other) {
            var L = new Uint32Array([this.buffer[1] >>> 16, 65535 & this.buffer[1], this.buffer[0] >>> 16, 65535 & this.buffer[0]]),
                R = new Uint32Array([other.buffer[1] >>> 16, 65535 & other.buffer[1], other.buffer[0] >>> 16, 65535 & other.buffer[0]]),
                product = L[3] * R[3];
            this.buffer[0] = 65535 & product;
            var sum = product >>> 16;
            return product = L[2] * R[3], sum += product, product = L[3] * R[2] >>> 0, sum += product, this.buffer[0] += sum << 16, this.buffer[1] = sum >>> 0 < product ? 65536 : 0, this.buffer[1] += sum >>> 16, this.buffer[1] += L[1] * R[3] + L[2] * R[2] + L[3] * R[1], this.buffer[1] += L[0] * R[3] + L[1] * R[2] + L[2] * R[1] + L[3] * R[0] << 16, this
        }, BaseInt64.prototype._plus = function (other) {
            var sum = this.buffer[0] + other.buffer[0] >>> 0;
            this.buffer[1] += other.buffer[1], sum < this.buffer[0] >>> 0 && ++this.buffer[1], this.buffer[0] = sum
        }, BaseInt64.prototype.lessThan = function (other) {
            return this.buffer[1] < other.buffer[1] || this.buffer[1] === other.buffer[1] && this.buffer[0] < other.buffer[0]
        }, BaseInt64.prototype.equals = function (other) {
            return this.buffer[1] === other.buffer[1] && this.buffer[0] == other.buffer[0]
        }, BaseInt64.prototype.greaterThan = function (other) {
            return other.lessThan(this)
        }, BaseInt64.prototype.hex = function () {
            return intAsHex(this.buffer[1]) + " " + intAsHex(this.buffer[0])
        }, BaseInt64
    }();
    exports.BaseInt64 = BaseInt64;
    var Uint64 = function (_super) {
        function Uint64() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(Uint64, _super), Uint64.prototype.times = function (other) {
            return this._times(other), this
        }, Uint64.prototype.plus = function (other) {
            return this._plus(other), this
        }, Uint64.multiply = function (left, right) {
            return new Uint64(new Uint32Array(left.buffer)).times(right)
        }, Uint64.add = function (left, right) {
            return new Uint64(new Uint32Array(left.buffer)).plus(right)
        }, Uint64
    }(BaseInt64);
    exports.Uint64 = Uint64;
    var Int64 = function (_super) {
        function Int64() {
            return null !== _super && _super.apply(this, arguments) || this
        }

        return tslib_1.__extends(Int64, _super), Int64.prototype.negate = function () {
            return this.buffer[0] = 1 + ~this.buffer[0], this.buffer[1] = ~this.buffer[1], 0 == this.buffer[0] && ++this.buffer[1], this
        }, Int64.prototype.times = function (other) {
            return this._times(other), this
        }, Int64.prototype.plus = function (other) {
            return this._plus(other), this
        }, Int64.prototype.lessThan = function (other) {
            var this_high = this.buffer[1] << 0, other_high = other.buffer[1] << 0;
            return this_high < other_high || this_high === other_high && this.buffer[0] < other.buffer[0]
        }, Int64.fromString = function (str, out_buffer) {
            void 0 === out_buffer && (out_buffer = new Uint32Array(2));
            for (var negate = str.startsWith("-"), length = str.length, out = new Int64(out_buffer), posn = negate ? 1 : 0; posn < length;) {
                var group = 8 < length - posn ? 8 : length - posn,
                    chunk = new Int64(new Uint32Array([parseInt(str.substr(posn, group), 10), 0])),
                    multiple = new Int64(new Uint32Array([kPowersOfTen[group], 0]));
                out.times(multiple), out.plus(chunk), posn += group
            }
            return negate ? out.negate() : out
        }, Int64.multiply = function (left, right) {
            return new Int64(new Uint32Array(left.buffer)).times(right)
        }, Int64.add = function (left, right) {
            return new Int64(new Uint32Array(left.buffer)).plus(right)
        }, Int64
    }(BaseInt64);
    exports.Int64 = Int64;
    var Int128 = function () {
        function Int128(buffer) {
            this.buffer = buffer
        }

        return Int128.prototype.high = function () {
            return new Int64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2))
        }, Int128.prototype.low = function () {
            return new Int64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2))
        }, Int128.prototype.negate = function () {
            return this.buffer[0] = 1 + ~this.buffer[0], this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], 0 == this.buffer[0] && ++this.buffer[1], 0 == this.buffer[1] && ++this.buffer[2], 0 == this.buffer[2] && ++this.buffer[3], this
        }, Int128.prototype.times = function (other) {
            var L0 = new Uint64(new Uint32Array([this.buffer[3], 0])),
                L1 = new Uint64(new Uint32Array([this.buffer[2], 0])),
                L2 = new Uint64(new Uint32Array([this.buffer[1], 0])),
                L3 = new Uint64(new Uint32Array([this.buffer[0], 0])),
                R0 = new Uint64(new Uint32Array([other.buffer[3], 0])),
                R1 = new Uint64(new Uint32Array([other.buffer[2], 0])),
                R2 = new Uint64(new Uint32Array([other.buffer[1], 0])),
                R3 = new Uint64(new Uint32Array([other.buffer[0], 0])), product = Uint64.multiply(L3, R3);
            this.buffer[0] = product.low();
            var sum = new Uint64(new Uint32Array([product.high(), 0]));
            return product = Uint64.multiply(L2, R3), sum.plus(product), product = Uint64.multiply(L3, R2), sum.plus(product), this.buffer[1] = sum.low(), this.buffer[3] = sum.lessThan(product) ? 1 : 0, this.buffer[2] = sum.high(), new Uint64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(Uint64.multiply(L1, R3)).plus(Uint64.multiply(L2, R2)).plus(Uint64.multiply(L3, R1)), this.buffer[3] += Uint64.multiply(L0, R3).plus(Uint64.multiply(L1, R2)).plus(Uint64.multiply(L2, R1)).plus(Uint64.multiply(L3, R0)).low(), this
        }, Int128.prototype.plus = function (other) {
            var sums = new Uint32Array(4);
            return sums[3] = this.buffer[3] + other.buffer[3] >>> 0, sums[2] = this.buffer[2] + other.buffer[2] >>> 0, sums[1] = this.buffer[1] + other.buffer[1] >>> 0, sums[0] = this.buffer[0] + other.buffer[0] >>> 0, sums[0] < this.buffer[0] >>> 0 && ++sums[1], sums[1] < this.buffer[1] >>> 0 && ++sums[2], sums[2] < this.buffer[2] >>> 0 && ++sums[3], this.buffer[3] = sums[3], this.buffer[2] = sums[2], this.buffer[1] = sums[1], this.buffer[0] = sums[0], this
        }, Int128.prototype.hex = function () {
            return intAsHex(this.buffer[3]) + " " + intAsHex(this.buffer[2]) + " " + intAsHex(this.buffer[1]) + " " + intAsHex(this.buffer[0])
        }, Int128.multiply = function (left, right) {
            return new Int128(new Uint32Array(left.buffer)).times(right)
        }, Int128.add = function (left, right) {
            return new Int128(new Uint32Array(left.buffer)).plus(right)
        }, Int128.fromString = function (str, out_buffer) {
            void 0 === out_buffer && (out_buffer = new Uint32Array(4));
            for (var negate = str.startsWith("-"), length = str.length, out = new Int128(out_buffer), posn = negate ? 1 : 0; posn < length;) {
                var group = 8 < length - posn ? 8 : length - posn,
                    chunk = new Int128(new Uint32Array([parseInt(str.substr(posn, group), 10), 0, 0, 0])),
                    multiple = new Int128(new Uint32Array([kPowersOfTen[group], 0, 0, 0]));
                out.times(multiple), out.plus(chunk), posn += group
            }
            return negate ? out.negate() : out
        }, Int128
    }();
    exports.Int128 = Int128
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function readBuffers(sources) {
        var schema, dictionaries, readMessages, sources_1, sources_1_1, source, bb, _a, _b, message, e_1_1, e_2_1, e_2,
            _c, _d, e_1, _e;
        return tslib_1.__generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    schema = null, dictionaries = new _map2.default, readMessages = null, (ArrayBuffer.isView(sources) || "string" == typeof sources) && (sources = [sources]), _f.label = 1;
                case 1:
                    _f.trys.push([1, 12, 13, 14]), sources_1 = tslib_1.__values(sources), sources_1_1 = sources_1.next(), _f.label = 2;
                case 2:
                    if (sources_1_1.done) return [3, 11];
                    if (source = sources_1_1.value, bb = toByteBuffer(source), !schema && (_d = readSchema(bb), schema = _d.schema, readMessages = _d.readMessages), !(schema && readMessages)) return [3, 10];
                    _f.label = 3;
                case 3:
                    _f.trys.push([3, 8, 9, 10]), _a = tslib_1.__values(readMessages(bb)), _b = _a.next(), _f.label = 4;
                case 4:
                    return _b.done ? [3, 7] : (message = _b.value, [4, {
                        schema: schema,
                        message: message,
                        loader: new BinaryDataLoader(bb, arrayIterator(message.nodes), arrayIterator(message.buffers), dictionaries)
                    }]);
                case 5:
                    _f.sent(), _f.label = 6;
                case 6:
                    return _b = _a.next(), [3, 4];
                case 7:
                    return [3, 10];
                case 8:
                    return e_1_1 = _f.sent(), e_1 = {error: e_1_1}, [3, 10];
                case 9:
                    try {
                        _b && !_b.done && (_e = _a.return) && _e.call(_a)
                    } finally {
                        if (e_1) throw e_1.error
                    }
                    return [7];
                case 10:
                    return sources_1_1 = sources_1.next(), [3, 2];
                case 11:
                    return [3, 14];
                case 12:
                    return e_2_1 = _f.sent(), e_2 = {error: e_2_1}, [3, 14];
                case 13:
                    try {
                        sources_1_1 && !sources_1_1.done && (_c = sources_1.return) && _c.call(sources_1)
                    } finally {
                        if (e_2) throw e_2.error
                    }
                    return [7];
                case 14:
                    return [2]
            }
        })
    }

    function readBuffersAsync(sources) {
        return tslib_1.__asyncGenerator(this, arguments, function () {
            var schema, dictionaries, readMessages, sources_2, sources_2_1, source, bb, _a, _b, message, e_3_1, e_4_1,
                e_4, _c, _d, e_3, _e;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        schema = null, dictionaries = new _map2.default, readMessages = null, _f.label = 1;
                    case 1:
                        _f.trys.push([1, 14, 15, 20]), sources_2 = tslib_1.__asyncValues(sources), _f.label = 2;
                    case 2:
                        return [4, tslib_1.__await(sources_2.next())];
                    case 3:
                        return sources_2_1 = _f.sent(), !sources_2_1.done ? [4, tslib_1.__await(sources_2_1.value)] : [3, 13];
                    case 4:
                        if (source = _f.sent(), bb = toByteBuffer(source), !schema && (_d = readSchema(bb), schema = _d.schema, readMessages = _d.readMessages), !(schema && readMessages)) return [3, 12];
                        _f.label = 5;
                    case 5:
                        _f.trys.push([5, 10, 11, 12]), _a = tslib_1.__values(readMessages(bb)), _b = _a.next(), _f.label = 6;
                    case 6:
                        return _b.done ? [3, 9] : (message = _b.value, [4, {
                            schema: schema,
                            message: message,
                            loader: new BinaryDataLoader(bb, arrayIterator(message.nodes), arrayIterator(message.buffers), dictionaries)
                        }]);
                    case 7:
                        _f.sent(), _f.label = 8;
                    case 8:
                        return _b = _a.next(), [3, 6];
                    case 9:
                        return [3, 12];
                    case 10:
                        return e_3_1 = _f.sent(), e_3 = {error: e_3_1}, [3, 12];
                    case 11:
                        try {
                            _b && !_b.done && (_e = _a.return) && _e.call(_a)
                        } finally {
                            if (e_3) throw e_3.error
                        }
                        return [7];
                    case 12:
                        return [3, 2];
                    case 13:
                        return [3, 20];
                    case 14:
                        return e_4_1 = _f.sent(), e_4 = {error: e_4_1}, [3, 20];
                    case 15:
                        return _f.trys.push([15, , 18, 19]), sources_2_1 && !sources_2_1.done && (_c = sources_2.return) ? [4, tslib_1.__await(_c.call(sources_2))] : [3, 17];
                    case 16:
                        _f.sent(), _f.label = 17;
                    case 17:
                        return [3, 19];
                    case 18:
                        if (e_4) throw e_4.error;
                        return [7];
                    case 19:
                        return [7];
                    case 20:
                        return [2]
                }
            })
        })
    }

    function arrayIterator(arr) {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [5, tslib_1.__values(arr)];
                case 1:
                    return _a.sent(), [2]
            }
        })
    }

    function toByteBuffer(bytes) {
        var arr = bytes || new Uint8Array(0);
        if ("string" == typeof bytes) {
            arr = new Uint8Array(bytes.length);
            for (var i = -1, n = bytes.length; ++i < n;) arr[i] = bytes.charCodeAt(i);
            return new ByteBuffer(arr)
        }
        return new ByteBuffer(arr)
    }

    function readSchema(bb) {
        var schema, readMessages, footer;
        if (footer = readFileSchema(bb)) schema = footer.schema, readMessages = readFileMessages(footer); else {
            if (!(schema = readStreamSchema(bb))) throw new Error("Invalid Arrow buffer");
            readMessages = readStreamMessages
        }
        return {schema: schema, readMessages: readMessages}
    }

    function checkForMagicArrowString(buffer, index) {
        void 0 === index && (index = 0);
        for (var i = -1, n = MAGIC.length; ++i < n;) if (MAGIC[i] !== buffer[index + i]) return !1;
        return !0
    }

    function readStreamSchema(bb) {
        if (!checkForMagicArrowString(bb.bytes(), 0)) try {
            for (var _a = tslib_1.__values(readMessages(bb)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var message = _b.value;
                if (_metadata.Message.isSchema(message)) return message
            }
        } catch (e_5_1) {
            e_5 = {error: e_5_1}
        } finally {
            try {
                _b && !_b.done && (_c = _a.return) && _c.call(_a)
            } finally {
                if (e_5) throw e_5.error
            }
        }
        return null;
        var e_5, _c
    }

    function readStreamMessages(bb) {
        var _a, _b, message, e_6_1, e_6, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 9, 10, 11]), _a = tslib_1.__values(readMessages(bb)), _b = _a.next(), _d.label = 1;
                case 1:
                    return _b.done ? [3, 8] : (message = _b.value, _metadata.Message.isRecordBatch(message) ? [4, message] : [3, 3]);
                case 2:
                    return _d.sent(), [3, 6];
                case 3:
                    return _metadata.Message.isDictionaryBatch(message) ? [4, message] : [3, 5];
                case 4:
                    return _d.sent(), [3, 6];
                case 5:
                    return [3, 7];
                case 6:
                    bb.setPosition(bb.position() + message.bodyLength), _d.label = 7;
                case 7:
                    return _b = _a.next(), [3, 1];
                case 8:
                    return [3, 11];
                case 9:
                    return e_6_1 = _d.sent(), e_6 = {error: e_6_1}, [3, 11];
                case 10:
                    try {
                        _b && !_b.done && (_c = _a.return) && _c.call(_a)
                    } finally {
                        if (e_6) throw e_6.error
                    }
                    return [7];
                case 11:
                    return [2]
            }
        })
    }

    function readFileSchema(bb) {
        var footerLength, footerOffset, fileLength = bb.capacity();
        return fileLength < magicX2AndPadding || !checkForMagicArrowString(bb.bytes(), 0) || !checkForMagicArrowString(bb.bytes(), fileLength - magicLength) || (footerLength = bb.readInt32(footerOffset = fileLength - magicAndPadding)) < 1 && footerLength + magicX2AndPadding > fileLength ? null : (bb.setPosition(footerOffset - footerLength), footerFromByteBuffer(bb))
    }

    function readFileMessages(footer) {
        return function (bb) {
            var i, batches, n, i, batches, n;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = -1, batches = footer.dictionaryBatches, n = batches.length, _a.label = 1;
                    case 1:
                        return ++i < n ? (bb.setPosition(batches[i].offset.low), [4, readMessage(bb, bb.readInt32(bb.position()))]) : [3, 4];
                    case 2:
                        _a.sent(), _a.label = 3;
                    case 3:
                        return [3, 1];
                    case 4:
                        i = -1, batches = footer.recordBatches, n = batches.length, _a.label = 5;
                    case 5:
                        return ++i < n ? (bb.setPosition(batches[i].offset.low), [4, readMessage(bb, bb.readInt32(bb.position()))]) : [3, 8];
                    case 6:
                        _a.sent(), _a.label = 7;
                    case 7:
                        return [3, 5];
                    case 8:
                        return [2]
                }
            })
        }
    }

    function readMessages(bb) {
        var length, message;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return bb.position() < bb.capacity() && (length = bb.readInt32(bb.position())) > 0 ? (message = readMessage(bb, length)) ? [4, message] : [3, 2] : [3, 3];
                case 1:
                    _a.sent(), _a.label = 2;
                case 2:
                    return [3, 0];
                case 3:
                    return [2]
            }
        })
    }

    function readMessage(bb, length) {
        bb.setPosition(bb.position() + PADDING);
        var message = messageFromByteBuffer(bb);
        return bb.setPosition(bb.position() + length), message
    }

    function footerFromByteBuffer(bb) {
        var dictionaryFields = new _map2.default, f = _Footer.getRootAsFooter(bb), s = f.schema();
        return new _metadata.Footer(dictionaryBatchesFromFooter(f), recordBatchesFromFooter(f), new _type2.Schema(fieldsFromSchema(s, dictionaryFields), customMetadata(s), f.version(), dictionaryFields))
    }

    function messageFromByteBuffer(bb) {
        var m = _Message.getRootAsMessage(bb), type = m.headerType(), version = m.version();
        switch (type) {
            case MessageHeader.Schema:
                return schemaFromMessage(version, m.header(new _Schema), new _map2.default);
            case MessageHeader.RecordBatch:
                return recordBatchFromMessage(version, m.header(new _RecordBatch));
            case MessageHeader.DictionaryBatch:
                return dictionaryBatchFromMessage(version, m.header(new _DictionaryBatch))
        }
        return null
    }

    function schemaFromMessage(version, s, dictionaryFields) {
        return new _type2.Schema(fieldsFromSchema(s, dictionaryFields), customMetadata(s), version, dictionaryFields)
    }

    function recordBatchFromMessage(version, b) {
        return new _metadata.RecordBatchMetadata(version, b.length(), fieldNodesFromRecordBatch(b), buffersFromRecordBatch(b, version))
    }

    function dictionaryBatchFromMessage(version, d) {
        return new _metadata.DictionaryBatch(version, recordBatchFromMessage(version, d.data()), d.id(), d.isDelta())
    }

    function dictionaryBatchesFromFooter(f) {
        for (var blocks = [], b = void 0, i = -1, n = f && f.dictionariesLength(); ++i < n;) (b = f.dictionaries(i)) && blocks.push(new _metadata.FileBlock(b.metaDataLength(), b.bodyLength(), b.offset()));
        return blocks
    }

    function recordBatchesFromFooter(f) {
        for (var blocks = [], b = void 0, i = -1, n = f && f.recordBatchesLength(); ++i < n;) (b = f.recordBatches(i)) && blocks.push(new _metadata.FileBlock(b.metaDataLength(), b.bodyLength(), b.offset()));
        return blocks
    }

    function fieldsFromSchema(s, dictionaryFields) {
        for (var fields = [], i = -1, c = void 0, n = s && s.fieldsLength(); ++i < n;) (c = field(s.fields(i), dictionaryFields)) && fields.push(c);
        return fields
    }

    function fieldsFromField(f, dictionaryFields) {
        for (var fields = [], i = -1, c = void 0, n = f && f.childrenLength(); ++i < n;) (c = field(f.children(i), dictionaryFields)) && fields.push(c);
        return fields
    }

    function fieldNodesFromRecordBatch(b) {
        for (var fieldNodes = [], i = -1, n = b.nodesLength(); ++i < n;) fieldNodes.push(fieldNodeFromRecordBatch(b.nodes(i)));
        return fieldNodes
    }

    function buffersFromRecordBatch(b, version) {
        for (var buffers = [], i = -1, n = b.buffersLength(); ++i < n;) {
            var buffer = b.buffers(i);
            version < MetadataVersion.V4 && (buffer.bb_pos += 8 * (i + 1)), buffers.push(bufferFromRecordBatch(buffer))
        }
        return buffers
    }

    function field(f, dictionaryFields) {
        var field, dataType, keysMeta, id, dictMeta, name = f.name(), nullable = f.nullable(),
            metadata = customMetadata(f);
        return dictionaryFields && (dictMeta = f.dictionary()) ? (dataType = dictionaryFields.has(id = dictMeta.id().low) ? dictionaryFields.get(id).type.dictionary : typeFromField(f, fieldsFromField(f, null))) && (dataType = new _type2.Dictionary(dataType, (keysMeta = dictMeta.indexType()) ? intFromField(keysMeta) : new _type2.Int32, id, dictMeta.isOrdered()), field = new _type2.Field(name, dataType, nullable, metadata), dictionaryFields.has(id) || dictionaryFields.set(id, field)) : (dataType = typeFromField(f, fieldsFromField(f, dictionaryFields))) && (field = new _type2.Field(name, dataType, nullable, metadata)), field || null
    }

    function customMetadata(parent) {
        var data = new _map2.default;
        if (parent) for (var entry = void 0, key = void 0, i = -1, n = 0 | parent.customMetadataLength(); ++i < n;) (entry = parent.customMetadata(i)) && null != (key = entry.key()) && data.set(key, entry.value());
        return data
    }

    function fieldNodeFromRecordBatch(f) {
        return new _metadata.FieldMetadata(f.length(), f.nullCount())
    }

    function bufferFromRecordBatch(b) {
        return new _metadata.BufferMetadata(b.offset(), b.length())
    }

    function typeFromField(f, children) {
        switch (f.typeType()) {
            case Type.NONE:
                return null;
            case Type.Null:
                return nullFromField(f.type(new _Null));
            case Type.Int:
                return intFromField(f.type(new _Int));
            case Type.FloatingPoint:
                return floatFromField(f.type(new _FloatingPoint));
            case Type.Binary:
                return binaryFromField(f.type(new _Binary));
            case Type.Utf8:
                return utf8FromField(f.type(new _Utf8));
            case Type.Bool:
                return boolFromField(f.type(new _Bool));
            case Type.Decimal:
                return decimalFromField(f.type(new _Decimal));
            case Type.Date:
                return dateFromField(f.type(new _Date));
            case Type.Time:
                return timeFromField(f.type(new _Time));
            case Type.Timestamp:
                return timestampFromField(f.type(new _Timestamp));
            case Type.Interval:
                return intervalFromField(f.type(new _Interval));
            case Type.List:
                return listFromField(f.type(new _List), children || []);
            case Type.Struct_:
                return structFromField(f.type(new _Struct), children || []);
            case Type.Union:
                return unionFromField(f.type(new _Union), children || []);
            case Type.FixedSizeBinary:
                return fixedSizeBinaryFromField(f.type(new _FixedSizeBinary));
            case Type.FixedSizeList:
                return fixedSizeListFromField(f.type(new _FixedSizeList), children || []);
            case Type.Map:
                return mapFromField(f.type(new _Map), children || [])
        }
        throw new Error("Unrecognized type " + f.typeType())
    }

    function nullFromField(_type) {
        return new _type2.Null
    }

    function intFromField(_type) {
        switch (_type.bitWidth()) {
            case 8:
                return _type.isSigned() ? new _type2.Int8 : new _type2.Uint8;
            case 16:
                return _type.isSigned() ? new _type2.Int16 : new _type2.Uint16;
            case 32:
                return _type.isSigned() ? new _type2.Int32 : new _type2.Uint32;
            case 64:
                return _type.isSigned() ? new _type2.Int64 : new _type2.Uint64
        }
        return null
    }

    function floatFromField(_type) {
        switch (_type.precision()) {
            case Precision.HALF:
                return new _type2.Float16;
            case Precision.SINGLE:
                return new _type2.Float32;
            case Precision.DOUBLE:
                return new _type2.Float64
        }
        return null
    }

    function binaryFromField(_type) {
        return new _type2.Binary
    }

    function utf8FromField(_type) {
        return new _type2.Utf8
    }

    function boolFromField(_type) {
        return new _type2.Bool
    }

    function decimalFromField(_type) {
        return new _type2.Decimal(_type.scale(), _type.precision())
    }

    function dateFromField(_type) {
        return new _type2.Date_(_type.unit())
    }

    function timeFromField(_type) {
        return new _type2.Time(_type.unit(), _type.bitWidth())
    }

    function timestampFromField(_type) {
        return new _type2.Timestamp(_type.unit(), _type.timezone())
    }

    function intervalFromField(_type) {
        return new _type2.Interval(_type.unit())
    }

    function listFromField(_type, children) {
        return new _type2.List(children)
    }

    function structFromField(_type, children) {
        return new _type2.Struct(children)
    }

    function unionFromField(_type, children) {
        return new _type2.Union(_type.mode(), _type.typeIdsArray() || [], children)
    }

    function fixedSizeBinaryFromField(_type) {
        return new _type2.FixedSizeBinary(_type.byteWidth())
    }

    function fixedSizeListFromField(_type, children) {
        return new _type2.FixedSizeList(_type.listSize(), children)
    }

    function mapFromField(_type, children) {
        return new _type2.Map_(_type.keysSorted(), children)
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.BinaryDataLoader = void 0;
    var _map = __webpack_require__(70), _map2 = function (obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }(_map);
    exports.readBuffers = readBuffers, exports.readBuffersAsync = readBuffersAsync;
    var _tslib = __webpack_require__(1), tslib_1 = _interopRequireWildcard(_tslib),
        _flatbuffers = __webpack_require__(71), _vector = __webpack_require__(72), _metadata = __webpack_require__(47),
        _type2 = __webpack_require__(10), _File = __webpack_require__(216), File_ = _interopRequireWildcard(_File),
        _Schema2 = __webpack_require__(32), Schema_ = _interopRequireWildcard(_Schema2),
        _Message2 = __webpack_require__(108), Message_ = _interopRequireWildcard(_Message2),
        ByteBuffer = _flatbuffers.flatbuffers.ByteBuffer, BinaryDataLoader = function (_super) {
            function BinaryDataLoader(bb, nodes, buffers, dictionaries) {
                var _this = _super.call(this, nodes, buffers, dictionaries) || this;
                return _this.bytes = bb.bytes(), _this.messageOffset = bb.position(), _this
            }

            return tslib_1.__extends(BinaryDataLoader, _super), BinaryDataLoader.prototype.readOffsets = function (type, buffer) {
                return this.readData(type, buffer)
            }, BinaryDataLoader.prototype.readTypeIds = function (type, buffer) {
                return this.readData(type, buffer)
            }, BinaryDataLoader.prototype.readData = function (_type, _a) {
                var _b = void 0 === _a ? this.getBufferMetadata() : _a, length = _b.length, offset = _b.offset;
                return new Uint8Array(this.bytes.buffer, this.bytes.byteOffset + this.messageOffset + offset, length)
            }, BinaryDataLoader
        }(_vector.TypeDataLoader);
    exports.BinaryDataLoader = BinaryDataLoader;
    for (var PADDING = 4, MAGIC_STR = "ARROW1", MAGIC = new Uint8Array(MAGIC_STR.length), i = 0; i < MAGIC_STR.length; i += 1) MAGIC[i] = MAGIC_STR.charCodeAt(i);
    var magicLength = MAGIC.length, magicAndPadding = magicLength + PADDING,
        magicX2AndPadding = 2 * magicLength + PADDING, Type = Schema_.org.apache.arrow.flatbuf.Type,
        Precision = Schema_.org.apache.arrow.flatbuf.Precision,
        MessageHeader = Message_.org.apache.arrow.flatbuf.MessageHeader,
        MetadataVersion = Schema_.org.apache.arrow.flatbuf.MetadataVersion,
        _Footer = File_.org.apache.arrow.flatbuf.Footer, _Message = Message_.org.apache.arrow.flatbuf.Message,
        _Schema = Schema_.org.apache.arrow.flatbuf.Schema, _RecordBatch = Message_.org.apache.arrow.flatbuf.RecordBatch,
        _DictionaryBatch = Message_.org.apache.arrow.flatbuf.DictionaryBatch,
        _Null = Schema_.org.apache.arrow.flatbuf.Null, _Int = Schema_.org.apache.arrow.flatbuf.Int,
        _FloatingPoint = Schema_.org.apache.arrow.flatbuf.FloatingPoint,
        _Binary = Schema_.org.apache.arrow.flatbuf.Binary, _Bool = Schema_.org.apache.arrow.flatbuf.Bool,
        _Utf8 = Schema_.org.apache.arrow.flatbuf.Utf8, _Decimal = Schema_.org.apache.arrow.flatbuf.Decimal,
        _Date = Schema_.org.apache.arrow.flatbuf.Date, _Time = Schema_.org.apache.arrow.flatbuf.Time,
        _Timestamp = Schema_.org.apache.arrow.flatbuf.Timestamp, _Interval = Schema_.org.apache.arrow.flatbuf.Interval,
        _List = Schema_.org.apache.arrow.flatbuf.List, _Struct = Schema_.org.apache.arrow.flatbuf.Struct_,
        _Union = Schema_.org.apache.arrow.flatbuf.Union,
        _FixedSizeBinary = Schema_.org.apache.arrow.flatbuf.FixedSizeBinary,
        _FixedSizeList = Schema_.org.apache.arrow.flatbuf.FixedSizeList, _Map = Schema_.org.apache.arrow.flatbuf.Map
}, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: !0}), exports.org = void 0;
    var _Schema = __webpack_require__(32), NS16187549871986683199 = function (obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }(_Schema), org = exports.org = void 0;
    !function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Footer = function () {
                        function Footer() {
                            this.bb_pos = 0
                        }

                        return Footer.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Footer.getRootAsFooter = function (bb, obj) {
                            return (obj || new Footer).__init(bb.readInt32(bb.position()) + bb.position(), bb)
                        }, Footer.prototype.version = function () {
                            var offset = this.bb.__offset(this.bb_pos, 4);
                            return offset ? this.bb.readInt16(this.bb_pos + offset) : NS16187549871986683199.org.apache.arrow.flatbuf.MetadataVersion.V1
                        }, Footer.prototype.schema = function (obj) {
                            var offset = this.bb.__offset(this.bb_pos, 6);
                            return offset ? (obj || new NS16187549871986683199.org.apache.arrow.flatbuf.Schema).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null
                        }, Footer.prototype.dictionaries = function (index, obj) {
                            var offset = this.bb.__offset(this.bb_pos, 8);
                            return offset ? (obj || new org.apache.arrow.flatbuf.Block).__init(this.bb.__vector(this.bb_pos + offset) + 24 * index, this.bb) : null
                        }, Footer.prototype.dictionariesLength = function () {
                            var offset = this.bb.__offset(this.bb_pos, 8);
                            return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0
                        }, Footer.prototype.recordBatches = function (index, obj) {
                            var offset = this.bb.__offset(this.bb_pos, 10);
                            return offset ? (obj || new org.apache.arrow.flatbuf.Block).__init(this.bb.__vector(this.bb_pos + offset) + 24 * index, this.bb) : null
                        }, Footer.prototype.recordBatchesLength = function () {
                            var offset = this.bb.__offset(this.bb_pos, 10);
                            return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0
                        }, Footer.startFooter = function (builder) {
                            builder.startObject(4)
                        }, Footer.addVersion = function (builder, version) {
                            builder.addFieldInt16(0, version, NS16187549871986683199.org.apache.arrow.flatbuf.MetadataVersion.V1)
                        }, Footer.addSchema = function (builder, schemaOffset) {
                            builder.addFieldOffset(1, schemaOffset, 0)
                        }, Footer.addDictionaries = function (builder, dictionariesOffset) {
                            builder.addFieldOffset(2, dictionariesOffset, 0)
                        }, Footer.startDictionariesVector = function (builder, numElems) {
                            builder.startVector(24, numElems, 8)
                        }, Footer.addRecordBatches = function (builder, recordBatchesOffset) {
                            builder.addFieldOffset(3, recordBatchesOffset, 0)
                        }, Footer.startRecordBatchesVector = function (builder, numElems) {
                            builder.startVector(24, numElems, 8)
                        }, Footer.endFooter = function (builder) {
                            return builder.endObject()
                        }, Footer.finishFooterBuffer = function (builder, offset) {
                            builder.finish(offset)
                        }, Footer
                    }();
                    flatbuf.Footer = Footer
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {})), function (org) {
        !function (apache) {
            !function (arrow) {
                !function (flatbuf) {
                    var Block = function () {
                        function Block() {
                            this.bb_pos = 0
                        }

                        return Block.prototype.__init = function (i, bb) {
                            return this.bb_pos = i, this.bb = bb, this
                        }, Block.prototype.offset = function () {
                            return this.bb.readInt64(this.bb_pos)
                        }, Block.prototype.metaDataLength = function () {
                            return this.bb.readInt32(this.bb_pos + 8)
                        }, Block.prototype.bodyLength = function () {
                            return this.bb.readInt64(this.bb_pos + 16)
                        }, Block.createBlock = function (builder, offset, metaDataLength, bodyLength) {
                            return builder.prep(8, 24), builder.writeInt64(bodyLength), builder.pad(4), builder.writeInt32(metaDataLength), builder.writeInt64(offset), builder.offset()
                        }, Block
                    }();
                    flatbuf.Block = Block
                }(arrow.flatbuf || (arrow.flatbuf = {}))
            }(apache.arrow || (apache.arrow = {}))
        }(org.apache || (org.apache = {}))
    }(org || (exports.org = org = {}))
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }

    function isPromise(x) {
        return null != x && Object(x) === x && "function" == typeof x.then
    }

    function isObservable(x) {
        return null != x && Object(x) === x && "function" == typeof x.subscribe
    }

    function isArrayLike(x) {
        return null != x && Object(x) === x && "number" == typeof x.length
    }

    function isIterable(x) {
        return null != x && Object(x) === x && void 0 !== x[_iterator2.default]
    }

    function isAsyncIterable(x) {
        return null != x && Object(x) === x && void 0 !== x[_symbol2.default.asyncIterator]
    }

    Object.defineProperty(exports, "__esModule", {value: !0});
    var _symbol = __webpack_require__(81), _symbol2 = _interopRequireDefault(_symbol),
        _iterator = __webpack_require__(6), _iterator2 = _interopRequireDefault(_iterator);
    exports.isPromise = isPromise, exports.isObservable = isObservable, exports.isArrayLike = isArrayLike, exports.isIterable = isIterable, exports.isAsyncIterable = isAsyncIterable
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }

    function is_valid_date(x) {
        return (0, _moment2.default)(x, DATE_PARSE_CANDIDATES, !0).isValid()
    }

    Object.defineProperty(exports, "__esModule", {value: !0}), exports.DateParser = void 0;
    var _getIterator2 = __webpack_require__(30), _getIterator3 = _interopRequireDefault(_getIterator2),
        _classCallCheck2 = __webpack_require__(95), _classCallCheck3 = _interopRequireDefault(_classCallCheck2),
        _createClass2 = __webpack_require__(96), _createClass3 = _interopRequireDefault(_createClass2);
    exports.is_valid_date = is_valid_date;
    var _moment = __webpack_require__(73), _moment2 = _interopRequireDefault(_moment),
        DATE_PARSE_CANDIDATES = [_moment2.default.ISO_8601, _moment2.default.RFC_2822, "YYYY-MM-DD\\DHH:mm:ss.SSSS", "MM-DD-YYYY", "MM/DD/YYYY", "M/D/YYYY", "M/D/YY", "DD MMM YYYY", "HH:mm:ss.SSS"];
    exports.DateParser = function () {
        function DateParser() {
            (0, _classCallCheck3.default)(this, DateParser), this.date_types = [], this.date_candidates = DATE_PARSE_CANDIDATES.slice(), this.date_exclusions = []
        }

        return (0, _createClass3.default)(DateParser, [{
            key: "parse", value: function (input) {
                if (this.date_exclusions.indexOf(input) > -1) return -1;
                var val = input;
                if ("string" == typeof val && (val = (0, _moment2.default)(input, this.date_types, !0), !val.isValid() || 0 === this.date_types.length)) {
                    for (var _iterator = this.date_candidates, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ;) {
                        var _ref;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++]
                        } else {
                            if (_i = _iterator.next(), _i.done) break;
                            _ref = _i.value
                        }
                        var candidate = _ref;
                        if (val = (0, _moment2.default)(input, candidate, !0), val.isValid()) return this.date_types.push(candidate), this.date_candidates.splice(this.date_candidates.indexOf(candidate), 1), +val
                    }
                    return this.date_exclusions.push(input), -1
                }
                return +val
            }
        }]), DateParser
    }()
}, function (module, exports, __webpack_require__) {
    function webpackContext(req) {
        return __webpack_require__(webpackContextResolve(req))
    }

    function webpackContextResolve(req) {
        var id = map[req];
        if (!(id + 1)) throw new Error("Cannot find module '" + req + "'.");
        return id
    }

    var map = {"./es": 220, "./fr": 221};
    webpackContext.keys = function () {
        return Object.keys(map)
    }, webpackContext.resolve = webpackContextResolve, module.exports = webpackContext, webpackContext.id = 219
}, function (module, exports, __webpack_require__) {
    !function (global, factory) {
        factory(__webpack_require__(73))
    }(0, function (moment) {
        "use strict";
        var monthsShortDot = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            monthsShort = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        return moment.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (m, format) {
                return m ? /-MMM-/.test(format) ? monthsShort[m.month()] : monthsShortDot[m.month()] : monthsShortDot
            },
            monthsRegex: monthsRegex,
            monthsShortRegex: monthsRegex,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: monthsParse,
            longMonthsParse: monthsParse,
            shortMonthsParse: monthsParse,
            weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d\xeda",
                dd: "%d d\xedas",
                M: "un mes",
                MM: "%d meses",
                y: "un a\xf1o",
                yy: "%d a\xf1os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%d\xba",
            week: {dow: 1, doy: 4}
        })
    })
}, function (module, exports, __webpack_require__) {
    !function (global, factory) {
        factory(__webpack_require__(73))
    }(0, function (moment) {
        "use strict";
        return moment.defineLocale("fr", {
            months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
            monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd\u2019hui \xe0] LT",
                nextDay: "[Demain \xe0] LT",
                nextWeek: "dddd [\xe0] LT",
                lastDay: "[Hier \xe0] LT",
                lastWeek: "dddd [dernier \xe0] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (number, period) {
                switch (period) {
                    case"D":
                        return number + (1 === number ? "er" : "");
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                        return number + (1 === number ? "er" : "e");
                    case"w":
                    case"W":
                        return number + (1 === number ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
    }

    Object.defineProperty(exports, "__esModule", {value: !0});
    var _assign = __webpack_require__(85), _assign2 = _interopRequireDefault(_assign),
        _papaparse = __webpack_require__(97), _papaparse2 = _interopRequireDefault(_papaparse), jsonFormatter = {
            initDataValue: function () {
                return []
            }, initRowValue: function () {
                return {}
            }, initColumnValue: function (row, colName) {
                return row[colName] = []
            }, setColumnValue: function (data, row, colName, value) {
                return row[colName] = value
            }, addColumnValue: function (data, row, colName, value) {
                return row[colName].unshift(value)
            }, addRow: function (data, row) {
                return data.push(row)
            }, formatData: function (data) {
                return data
            }
        }, csvFormatter = (0, _assign2.default)({}, jsonFormatter, {
            formatData: function (data, config) {
                return _papaparse2.default.unparse(data, config)
            }
        });
    exports.default = {jsonFormatter: jsonFormatter, csvFormatter: csvFormatter}
}, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: !0});
    var NUMBER_AGGREGATES = ["any", "avg", "count", "distinct count", "dominant", "first", "last", "high", "low", "mean", "mean by count", "median", "pct sum parent", "pct sum grand total", "sum", "sum abs", "sum not null", "unique"],
        STRING_AGGREGATES = ["any", "count", "distinct count", "distinct leaf", "dominant", "first", "last", "mean by count", "unique"],
        BOOLEAN_AGGREGATES = ["any", "count", "distinct count", "distinct leaf", "dominant", "first", "last", "mean by count", "unique", "and", "or"],
        BOOLEAN_FILTERS = (exports.SORT_ORDERS = ["asc", "desc", "none", "asc abs", "desc abs"], exports.TYPE_AGGREGATES = {
            string: STRING_AGGREGATES,
            float: NUMBER_AGGREGATES,
            integer: NUMBER_AGGREGATES,
            boolean: BOOLEAN_AGGREGATES,
            date: STRING_AGGREGATES
        }, exports.AGGREGATE_DEFAULTS = {
            string: "distinct count",
            float: "sum",
            integer: "sum",
            boolean: "distinct count",
            date: "distinct count"
        }, ["&", "|", "==", "!=", "or", "and"]),
        NUMBER_FILTERS = ["<", ">", "==", "<=", ">=", "!=", "is nan", "is not nan"],
        STRING_FILTERS = ["==", "contains", "!=", "in", "begins with", "ends with"],
        DATE_FILTERS = ["<", ">", "==", "<=", ">=", "!="];
    exports.TYPE_FILTERS = {
        string: STRING_FILTERS,
        float: NUMBER_FILTERS,
        integer: NUMBER_FILTERS,
        boolean: BOOLEAN_FILTERS,
        date: DATE_FILTERS
    }, exports.FILTER_DEFAULTS = {string: "==", float: "==", integer: "==", boolean: "==", date: "=="}
}]);
//# sourceMappingURL=perspective.js.map