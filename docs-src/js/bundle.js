/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/darkreader/darkreader.js":
/*!***********************************************!*\
  !*** ./node_modules/darkreader/darkreader.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports) {

/**
 * Dark Reader v4.9.58
 * https://darkreader.org/
 */

(function (global, factory) {
     true
        ? factory(exports)
        : 0;
})(this, function (exports) {
    "use strict";

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function () {
        __assign =
            Object.assign ||
            function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    }

    function __generator(thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            },
            f,
            y,
            t,
            g;
        return (
            (g = {next: verb(0), throw: verb(1), return: verb(2)}),
            typeof Symbol === "function" &&
                (g[Symbol.iterator] = function () {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y["return"]
                                    : op[0]
                                    ? y["throw"] ||
                                      ((t = y["return"]) && t.call(y), 0)
                                    : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return {value: op[1], done: false};
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (
                                !((t = _.trys),
                                (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0;
                                continue;
                            }
                            if (
                                op[0] === 3 &&
                                (!t || (op[1] > t[0] && op[1] < t[3]))
                            ) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return {value: op[0] ? op[1] : void 0, done: true};
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length) o = void 0;
                    return {value: o && o[i++], done: !o};
                }
            };
        throw new TypeError(
            s ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        } catch (error) {
            e = {error: error};
        } finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
                if (e) throw e.error;
            }
        }
        return ar;
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    var MessageType;
    (function (MessageType) {
        MessageType["UI_GET_DATA"] = "ui-get-data";
        MessageType["UI_SUBSCRIBE_TO_CHANGES"] = "ui-subscribe-to-changes";
        MessageType["UI_UNSUBSCRIBE_FROM_CHANGES"] =
            "ui-unsubscribe-from-changes";
        MessageType["UI_CHANGE_SETTINGS"] = "ui-change-settings";
        MessageType["UI_SET_THEME"] = "ui-set-theme";
        MessageType["UI_SET_SHORTCUT"] = "ui-set-shortcut";
        MessageType["UI_TOGGLE_ACTIVE_TAB"] = "ui-toggle-active-tab";
        MessageType["UI_MARK_NEWS_AS_READ"] = "ui-mark-news-as-read";
        MessageType["UI_MARK_NEWS_AS_DISPLAYED"] = "ui-mark-news-as-displayed";
        MessageType["UI_LOAD_CONFIG"] = "ui-load-config";
        MessageType["UI_APPLY_DEV_DYNAMIC_THEME_FIXES"] =
            "ui-apply-dev-dynamic-theme-fixes";
        MessageType["UI_RESET_DEV_DYNAMIC_THEME_FIXES"] =
            "ui-reset-dev-dynamic-theme-fixes";
        MessageType["UI_APPLY_DEV_INVERSION_FIXES"] =
            "ui-apply-dev-inversion-fixes";
        MessageType["UI_RESET_DEV_INVERSION_FIXES"] =
            "ui-reset-dev-inversion-fixes";
        MessageType["UI_APPLY_DEV_STATIC_THEMES"] =
            "ui-apply-dev-static-themes";
        MessageType["UI_RESET_DEV_STATIC_THEMES"] =
            "ui-reset-dev-static-themes";
        MessageType["UI_SAVE_FILE"] = "ui-save-file";
        MessageType["UI_REQUEST_EXPORT_CSS"] = "ui-request-export-css";
        MessageType["UI_COLOR_SCHEME_CHANGE"] = "ui-color-scheme-change";
        MessageType["BG_CHANGES"] = "bg-changes";
        MessageType["BG_ADD_CSS_FILTER"] = "bg-add-css-filter";
        MessageType["BG_ADD_STATIC_THEME"] = "bg-add-static-theme";
        MessageType["BG_ADD_SVG_FILTER"] = "bg-add-svg-filter";
        MessageType["BG_ADD_DYNAMIC_THEME"] = "bg-add-dynamic-theme";
        MessageType["BG_EXPORT_CSS"] = "bg-export-css";
        MessageType["BG_UNSUPPORTED_SENDER"] = "bg-unsupported-sender";
        MessageType["BG_CLEAN_UP"] = "bg-clean-up";
        MessageType["BG_RELOAD"] = "bg-reload";
        MessageType["BG_FETCH_RESPONSE"] = "bg-fetch-response";
        MessageType["BG_UI_UPDATE"] = "bg-ui-update";
        MessageType["BG_CSS_UPDATE"] = "bg-css-update";
        MessageType["CS_COLOR_SCHEME_CHANGE"] = "cs-color-scheme-change";
        MessageType["CS_FRAME_CONNECT"] = "cs-frame-connect";
        MessageType["CS_FRAME_FORGET"] = "cs-frame-forget";
        MessageType["CS_FRAME_FREEZE"] = "cs-frame-freeze";
        MessageType["CS_FRAME_RESUME"] = "cs-frame-resume";
        MessageType["CS_EXPORT_CSS_RESPONSE"] = "cs-export-css-response";
        MessageType["CS_FETCH"] = "cs-fetch";
        MessageType["CS_DARK_THEME_DETECTED"] = "cs-dark-theme-detected";
        MessageType["CS_DARK_THEME_NOT_DETECTED"] =
            "cs-dark-theme-not-detected";
        MessageType["CS_LOG"] = "cs-log";
    })(MessageType || (MessageType = {}));

    var isNavigatorDefined = typeof navigator !== "undefined";
    var userAgent = isNavigatorDefined
        ? navigator.userAgentData &&
          Array.isArray(navigator.userAgentData.brands)
            ? navigator.userAgentData.brands
                  .map(function (brand) {
                      return ""
                          .concat(brand.brand.toLowerCase(), " ")
                          .concat(brand.version);
                  })
                  .join(" ")
            : navigator.userAgent.toLowerCase()
        : "some useragent";
    var platform = isNavigatorDefined
        ? navigator.userAgentData &&
          typeof navigator.userAgentData.platform === "string"
            ? navigator.userAgentData.platform.toLowerCase()
            : navigator.platform.toLowerCase()
        : "some platform";
    var isChromium =
        userAgent.includes("chrome") || userAgent.includes("chromium");
    var isThunderbird = userAgent.includes("thunderbird");
    var isFirefox =
        userAgent.includes("firefox") ||
        userAgent.includes("librewolf") ||
        isThunderbird;
    userAgent.includes("vivaldi");
    userAgent.includes("yabrowser");
    userAgent.includes("opr") || userAgent.includes("opera");
    userAgent.includes("edg");
    var isSafari = userAgent.includes("safari") && !isChromium;
    var isWindows = platform.startsWith("win");
    var isMacOS = platform.startsWith("mac");
    isNavigatorDefined && navigator.userAgentData
        ? navigator.userAgentData.mobile
        : userAgent.includes("mobile");
    var isShadowDomSupported = typeof ShadowRoot === "function";
    var isMatchMediaChangeEventListenerSupported =
        typeof MediaQueryList === "function" &&
        typeof MediaQueryList.prototype.addEventListener === "function";
    (function () {
        var m = userAgent.match(/chrom(?:e|ium)(?:\/| )([^ ]+)/);
        if (m && m[1]) {
            return m[1];
        }
        return "";
    })();
    (function () {
        var m = userAgent.match(/(?:firefox|librewolf)(?:\/| )([^ ]+)/);
        if (m && m[1]) {
            return m[1];
        }
        return "";
    })();
    var isDefinedSelectorSupported = (function () {
        try {
            document.querySelector(":defined");
            return true;
        } catch (err) {
            return false;
        }
    })();
    var isCSSColorSchemePropSupported = (function () {
        if (typeof document === "undefined") {
            return false;
        }
        var el = document.createElement("div");
        el.setAttribute("style", "color-scheme: dark");
        return el.style && el.style.colorScheme === "dark";
    })();

    function getOKResponse(url, mimeType, origin) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [
                            4,
                            fetch(url, {
                                cache: "force-cache",
                                credentials: "omit",
                                referrer: origin
                            })
                        ];
                    case 1:
                        response = _a.sent();
                        if (
                            isFirefox &&
                            mimeType === "text/css" &&
                            url.startsWith("moz-extension://") &&
                            url.endsWith(".css")
                        ) {
                            return [2, response];
                        }
                        if (
                            mimeType &&
                            !response.headers
                                .get("Content-Type")
                                .startsWith(mimeType)
                        ) {
                            throw new Error(
                                "Mime type mismatch when loading ".concat(url)
                            );
                        }
                        if (!response.ok) {
                            throw new Error(
                                "Unable to load "
                                    .concat(url, " ")
                                    .concat(response.status, " ")
                                    .concat(response.statusText)
                            );
                        }
                        return [2, response];
                }
            });
        });
    }
    function loadAsDataURL(url, mimeType) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, getOKResponse(url, mimeType)];
                    case 1:
                        response = _a.sent();
                        return [4, readResponseAsDataURL(response)];
                    case 2:
                        return [2, _a.sent()];
                }
            });
        });
    }
    function readResponseAsDataURL(response) {
        return __awaiter(this, void 0, void 0, function () {
            var blob, dataURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, response.blob()];
                    case 1:
                        blob = _a.sent();
                        return [
                            4,
                            new Promise(function (resolve) {
                                var reader = new FileReader();
                                reader.onloadend = function () {
                                    return resolve(reader.result);
                                };
                                reader.readAsDataURL(blob);
                            })
                        ];
                    case 2:
                        dataURL = _a.sent();
                        return [2, dataURL];
                }
            });
        });
    }

    var throwCORSError = function (url) {
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [
                    2,
                    Promise.reject(
                        new Error(
                            [
                                "Embedded Dark Reader cannot access a cross-origin resource",
                                url,
                                "Overview your URLs and CORS policies or use",
                                "`DarkReader.setFetchMethod(fetch: (url) => Promise<Response>))`.",
                                "See if using `DarkReader.setFetchMethod(window.fetch)`",
                                "before `DarkReader.enable()` works."
                            ].join(" ")
                        )
                    )
                ];
            });
        });
    };
    var fetcher = throwCORSError;
    function setFetchMethod$1(fetch) {
        if (fetch) {
            fetcher = fetch;
        } else {
            fetcher = throwCORSError;
        }
    }
    function callFetchMethod(url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, fetcher(url)];
                    case 1:
                        return [2, _a.sent()];
                }
            });
        });
    }

    if (!window.chrome) {
        window.chrome = {};
    }
    if (!chrome.runtime) {
        chrome.runtime = {};
    }
    var messageListeners = new Set();
    function sendMessage() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var id_1, _a, url, responseType, response, text_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(args[0] && args[0].type === MessageType.CS_FETCH))
                            return [3, 8];
                        id_1 = args[0].id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, , 8]);
                        (_a = args[0].data),
                            (url = _a.url),
                            (responseType = _a.responseType);
                        return [4, callFetchMethod(url)];
                    case 2:
                        response = _b.sent();
                        if (!(responseType === "data-url")) return [3, 4];
                        return [4, readResponseAsDataURL(response)];
                    case 3:
                        text_1 = _b.sent();
                        return [3, 6];
                    case 4:
                        return [4, response.text()];
                    case 5:
                        text_1 = _b.sent();
                        _b.label = 6;
                    case 6:
                        messageListeners.forEach(function (cb) {
                            return cb({
                                type: MessageType.BG_FETCH_RESPONSE,
                                data: text_1,
                                error: null,
                                id: id_1
                            });
                        });
                        return [3, 8];
                    case 7:
                        error_1 = _b.sent();
                        console.error(error_1);
                        messageListeners.forEach(function (cb) {
                            return cb({
                                type: MessageType.BG_FETCH_RESPONSE,
                                data: null,
                                error: error_1,
                                id: id_1
                            });
                        });
                        return [3, 8];
                    case 8:
                        return [2];
                }
            });
        });
    }
    function addMessageListener(callback) {
        messageListeners.add(callback);
    }
    if (typeof chrome.runtime.sendMessage === "function") {
        var nativeSendMessage_1 = chrome.runtime.sendMessage;
        chrome.runtime.sendMessage = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            sendMessage.apply(void 0, __spreadArray([], __read(args), false));
            nativeSendMessage_1.apply(chrome.runtime, args);
        };
    } else {
        chrome.runtime.sendMessage = sendMessage;
    }
    if (!chrome.runtime.onMessage) {
        chrome.runtime.onMessage = {};
    }
    if (typeof chrome.runtime.onMessage.addListener === "function") {
        var nativeAddListener_1 = chrome.runtime.onMessage.addListener;
        chrome.runtime.onMessage.addListener = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            addMessageListener(args[0]);
            nativeAddListener_1.apply(chrome.runtime.onMessage, args);
        };
    } else {
        chrome.runtime.onMessage.addListener = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return addMessageListener(args[0]);
        };
    }

    var ThemeEngine;
    (function (ThemeEngine) {
        ThemeEngine["cssFilter"] = "cssFilter";
        ThemeEngine["svgFilter"] = "svgFilter";
        ThemeEngine["staticTheme"] = "staticTheme";
        ThemeEngine["dynamicTheme"] = "dynamicTheme";
    })(ThemeEngine || (ThemeEngine = {}));

    var AutomationMode;
    (function (AutomationMode) {
        AutomationMode["NONE"] = "";
        AutomationMode["TIME"] = "time";
        AutomationMode["SYSTEM"] = "system";
        AutomationMode["LOCATION"] = "location";
    })(AutomationMode || (AutomationMode = {}));

    var DEFAULT_COLORS = {
        darkScheme: {
            background: "#181a1b",
            text: "#e8e6e3"
        },
        lightScheme: {
            background: "#dcdad7",
            text: "#181a1b"
        }
    };
    var DEFAULT_THEME = {
        mode: 1,
        brightness: 100,
        contrast: 100,
        grayscale: 0,
        sepia: 0,
        useFont: false,
        fontFamily: isMacOS
            ? "Helvetica Neue"
            : isWindows
            ? "Segoe UI"
            : "Open Sans",
        textStroke: 0,
        engine: ThemeEngine.dynamicTheme,
        stylesheet: "",
        darkSchemeBackgroundColor: DEFAULT_COLORS.darkScheme.background,
        darkSchemeTextColor: DEFAULT_COLORS.darkScheme.text,
        lightSchemeBackgroundColor: DEFAULT_COLORS.lightScheme.background,
        lightSchemeTextColor: DEFAULT_COLORS.lightScheme.text,
        scrollbarColor: isMacOS ? "" : "auto",
        selectionColor: "auto",
        styleSystemControls: !isCSSColorSchemePropSupported,
        lightColorScheme: "Default",
        darkColorScheme: "Default",
        immediateModify: false
    };
    ({
        enabled: true,
        fetchNews: true,
        theme: DEFAULT_THEME,
        presets: [],
        customThemes: [],
        siteList: [],
        siteListEnabled: [],
        applyToListedOnly: false,
        changeBrowserTheme: false,
        syncSettings: true,
        syncSitesFixes: false,
        automation: {
            enabled: false,
            mode: AutomationMode.NONE,
            behavior: "OnOff"
        },
        time: {
            activation: "18:00",
            deactivation: "9:00"
        },
        location: {
            latitude: null,
            longitude: null
        },
        previewNewDesign: false,
        enableForPDF: true,
        enableForProtectedPages: false,
        enableContextMenus: false,
        detectDarkTheme: false
    });

    function isArrayLike(items) {
        return items.length != null;
    }
    function forEach(items, iterator) {
        var e_1, _a;
        if (isArrayLike(items)) {
            for (var i = 0, len = items.length; i < len; i++) {
                iterator(items[i]);
            }
        } else {
            try {
                for (
                    var items_1 = __values(items), items_1_1 = items_1.next();
                    !items_1_1.done;
                    items_1_1 = items_1.next()
                ) {
                    var item = items_1_1.value;
                    iterator(item);
                }
            } catch (e_1_1) {
                e_1 = {error: e_1_1};
            } finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return))
                        _a.call(items_1);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
        }
    }
    function push(array, addition) {
        forEach(addition, function (a) {
            return array.push(a);
        });
    }
    function toArray(items) {
        var results = [];
        for (var i = 0, len = items.length; i < len; i++) {
            results.push(items[i]);
        }
        return results;
    }

    function logInfo() {}
    function logWarn() {}

    function throttle(callback) {
        var pending = false;
        var frameId = null;
        var lastArgs;
        var throttled = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            if (frameId) {
                pending = true;
            } else {
                callback.apply(
                    void 0,
                    __spreadArray([], __read(lastArgs), false)
                );
                frameId = requestAnimationFrame(function () {
                    frameId = null;
                    if (pending) {
                        callback.apply(
                            void 0,
                            __spreadArray([], __read(lastArgs), false)
                        );
                        pending = false;
                    }
                });
            }
        };
        var cancel = function () {
            cancelAnimationFrame(frameId);
            pending = false;
            frameId = null;
        };
        return Object.assign(throttled, {cancel: cancel});
    }
    function createAsyncTasksQueue() {
        var tasks = [];
        var frameId = null;
        function runTasks() {
            var task;
            while ((task = tasks.shift())) {
                task();
            }
            frameId = null;
        }
        function add(task) {
            tasks.push(task);
            if (!frameId) {
                frameId = requestAnimationFrame(runTasks);
            }
        }
        function cancel() {
            tasks.splice(0);
            cancelAnimationFrame(frameId);
            frameId = null;
        }
        return {add: add, cancel: cancel};
    }

    function getDuration(time) {
        var duration = 0;
        if (time.seconds) {
            duration += time.seconds * 1000;
        }
        if (time.minutes) {
            duration += time.minutes * 60 * 1000;
        }
        if (time.hours) {
            duration += time.hours * 60 * 60 * 1000;
        }
        if (time.days) {
            duration += time.days * 24 * 60 * 60 * 1000;
        }
        return duration;
    }

    function removeNode(node) {
        node && node.parentNode && node.parentNode.removeChild(node);
    }
    function watchForNodePosition(node, mode, onRestore) {
        if (onRestore === void 0) {
            onRestore = Function.prototype;
        }
        var MAX_ATTEMPTS_COUNT = 10;
        var RETRY_TIMEOUT = getDuration({seconds: 2});
        var ATTEMPTS_INTERVAL = getDuration({seconds: 10});
        var prevSibling = node.previousSibling;
        var parent = node.parentNode;
        if (!parent) {
            throw new Error(
                "Unable to watch for node position: parent element not found"
            );
        }
        if (mode === "prev-sibling" && !prevSibling) {
            throw new Error(
                "Unable to watch for node position: there is no previous sibling"
            );
        }
        var attempts = 0;
        var start = null;
        var timeoutId = null;
        var restore = throttle(function () {
            if (timeoutId) {
                return;
            }
            attempts++;
            var now = Date.now();
            if (start == null) {
                start = now;
            } else if (attempts >= MAX_ATTEMPTS_COUNT) {
                if (now - start < ATTEMPTS_INTERVAL) {
                    timeoutId = setTimeout(function () {
                        start = null;
                        attempts = 0;
                        timeoutId = null;
                        restore();
                    }, RETRY_TIMEOUT);
                    return;
                }
                start = now;
                attempts = 1;
            }
            if (mode === "parent") {
                if (prevSibling && prevSibling.parentNode !== parent) {
                    stop();
                    return;
                }
            }
            if (mode === "prev-sibling") {
                if (prevSibling.parentNode == null) {
                    stop();
                    return;
                }
                if (prevSibling.parentNode !== parent) {
                    updateParent(prevSibling.parentNode);
                }
            }
            parent.insertBefore(
                node,
                prevSibling ? prevSibling.nextSibling : parent.firstChild
            );
            observer.takeRecords();
            onRestore && onRestore();
        });
        var observer = new MutationObserver(function () {
            if (
                (mode === "parent" && node.parentNode !== parent) ||
                (mode === "prev-sibling" &&
                    node.previousSibling !== prevSibling)
            ) {
                restore();
            }
        });
        var run = function () {
            observer.observe(parent, {childList: true});
        };
        var stop = function () {
            clearTimeout(timeoutId);
            observer.disconnect();
            restore.cancel();
        };
        var skip = function () {
            observer.takeRecords();
        };
        var updateParent = function (parentNode) {
            parent = parentNode;
            stop();
            run();
        };
        run();
        return {run: run, stop: stop, skip: skip};
    }
    function iterateShadowHosts(root, iterator) {
        if (root == null) {
            return;
        }
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function (node) {
                return node.shadowRoot == null
                    ? NodeFilter.FILTER_SKIP
                    : NodeFilter.FILTER_ACCEPT;
            }
        });
        for (
            var node = root.shadowRoot ? walker.currentNode : walker.nextNode();
            node != null;
            node = walker.nextNode()
        ) {
            if (node.classList.contains("surfingkeys_hints_host")) {
                continue;
            }
            iterator(node);
            iterateShadowHosts(node.shadowRoot, iterator);
        }
    }
    var isDOMReady = function () {
        return (
            document.readyState === "complete" ||
            document.readyState === "interactive"
        );
    };
    function setIsDOMReady(newFunc) {
        isDOMReady = newFunc;
    }
    var readyStateListeners = new Set();
    function addDOMReadyListener(listener) {
        isDOMReady() ? listener() : readyStateListeners.add(listener);
    }
    function removeDOMReadyListener(listener) {
        readyStateListeners.delete(listener);
    }
    function isReadyStateComplete() {
        return document.readyState === "complete";
    }
    var readyStateCompleteListeners = new Set();
    function addReadyStateCompleteListener(listener) {
        isReadyStateComplete()
            ? listener()
            : readyStateCompleteListeners.add(listener);
    }
    function cleanReadyStateCompleteListeners() {
        readyStateCompleteListeners.clear();
    }
    if (!isDOMReady()) {
        var onReadyStateChange_1 = function () {
            if (isDOMReady()) {
                readyStateListeners.forEach(function (listener) {
                    return listener();
                });
                readyStateListeners.clear();
                if (isReadyStateComplete()) {
                    document.removeEventListener(
                        "readystatechange",
                        onReadyStateChange_1
                    );
                    readyStateCompleteListeners.forEach(function (listener) {
                        return listener();
                    });
                    readyStateCompleteListeners.clear();
                }
            }
        };
        document.addEventListener("readystatechange", onReadyStateChange_1);
    }
    var HUGE_MUTATIONS_COUNT = 1000;
    function isHugeMutation(mutations) {
        if (mutations.length > HUGE_MUTATIONS_COUNT) {
            return true;
        }
        var addedNodesCount = 0;
        for (var i = 0; i < mutations.length; i++) {
            addedNodesCount += mutations[i].addedNodes.length;
            if (addedNodesCount > HUGE_MUTATIONS_COUNT) {
                return true;
            }
        }
        return false;
    }
    function getElementsTreeOperations(mutations) {
        var additions = new Set();
        var deletions = new Set();
        var moves = new Set();
        mutations.forEach(function (m) {
            forEach(m.addedNodes, function (n) {
                if (n instanceof Element && n.isConnected) {
                    additions.add(n);
                }
            });
            forEach(m.removedNodes, function (n) {
                if (n instanceof Element) {
                    if (n.isConnected) {
                        moves.add(n);
                        additions.delete(n);
                    } else {
                        deletions.add(n);
                    }
                }
            });
        });
        var duplicateAdditions = [];
        var duplicateDeletions = [];
        additions.forEach(function (node) {
            if (additions.has(node.parentElement)) {
                duplicateAdditions.push(node);
            }
        });
        deletions.forEach(function (node) {
            if (deletions.has(node.parentElement)) {
                duplicateDeletions.push(node);
            }
        });
        duplicateAdditions.forEach(function (node) {
            return additions.delete(node);
        });
        duplicateDeletions.forEach(function (node) {
            return deletions.delete(node);
        });
        return {additions: additions, moves: moves, deletions: deletions};
    }
    var optimizedTreeObservers = new Map();
    var optimizedTreeCallbacks = new WeakMap();
    function createOptimizedTreeObserver(root, callbacks) {
        var observer;
        var observerCallbacks;
        var domReadyListener;
        if (optimizedTreeObservers.has(root)) {
            observer = optimizedTreeObservers.get(root);
            observerCallbacks = optimizedTreeCallbacks.get(observer);
        } else {
            var hadHugeMutationsBefore_1 = false;
            var subscribedForReadyState_1 = false;
            observer = new MutationObserver(function (mutations) {
                if (isHugeMutation(mutations)) {
                    if (!hadHugeMutationsBefore_1 || isDOMReady()) {
                        observerCallbacks.forEach(function (_a) {
                            var onHugeMutations = _a.onHugeMutations;
                            return onHugeMutations(root);
                        });
                    } else if (!subscribedForReadyState_1) {
                        domReadyListener = function () {
                            return observerCallbacks.forEach(function (_a) {
                                var onHugeMutations = _a.onHugeMutations;
                                return onHugeMutations(root);
                            });
                        };
                        addDOMReadyListener(domReadyListener);
                        subscribedForReadyState_1 = true;
                    }
                    hadHugeMutationsBefore_1 = true;
                } else {
                    var elementsOperations_1 =
                        getElementsTreeOperations(mutations);
                    observerCallbacks.forEach(function (_a) {
                        var onMinorMutations = _a.onMinorMutations;
                        return onMinorMutations(elementsOperations_1);
                    });
                }
            });
            observer.observe(root, {childList: true, subtree: true});
            optimizedTreeObservers.set(root, observer);
            observerCallbacks = new Set();
            optimizedTreeCallbacks.set(observer, observerCallbacks);
        }
        observerCallbacks.add(callbacks);
        return {
            disconnect: function () {
                observerCallbacks.delete(callbacks);
                if (domReadyListener) {
                    removeDOMReadyListener(domReadyListener);
                }
                if (observerCallbacks.size === 0) {
                    observer.disconnect();
                    optimizedTreeCallbacks.delete(observer);
                    optimizedTreeObservers.delete(root);
                }
            }
        };
    }

    var anchor;
    var parsedURLCache = new Map();
    function fixBaseURL($url) {
        if (!anchor) {
            anchor = document.createElement("a");
        }
        anchor.href = $url;
        return anchor.href;
    }
    function parseURL($url, $base) {
        if ($base === void 0) {
            $base = null;
        }
        var key = "".concat($url).concat($base ? ";".concat($base) : "");
        if (parsedURLCache.has(key)) {
            return parsedURLCache.get(key);
        }
        if ($base) {
            var parsedURL_1 = new URL($url, fixBaseURL($base));
            parsedURLCache.set(key, parsedURL_1);
            return parsedURL_1;
        }
        var parsedURL = new URL(fixBaseURL($url));
        parsedURLCache.set($url, parsedURL);
        return parsedURL;
    }
    function getAbsoluteURL($base, $relative) {
        if ($relative.match(/^data\\?\:/)) {
            return $relative;
        }
        if (/^\/\//.test($relative)) {
            return "".concat(location.protocol).concat($relative);
        }
        var b = parseURL($base);
        var a = parseURL($relative, b.href);
        return a.href;
    }
    function isRelativeHrefOnAbsolutePath(href) {
        if (href.startsWith("data:")) {
            return true;
        }
        var url = parseURL(href);
        if (url.protocol !== location.protocol) {
            return false;
        }
        if (url.hostname !== location.hostname) {
            return false;
        }
        if (url.port !== location.port) {
            return false;
        }
        return url.pathname === location.pathname;
    }

    function iterateCSSRules(rules, iterate, onMediaRuleError) {
        forEach(rules, function (rule) {
            if (rule.selectorText) {
                iterate(rule);
            } else if (rule.href) {
                try {
                    iterateCSSRules(
                        rule.styleSheet.cssRules,
                        iterate,
                        onMediaRuleError
                    );
                } catch (err) {
                    logInfo("Found a non-loaded link.");
                    onMediaRuleError && onMediaRuleError();
                }
            } else if (rule.media) {
                var media = Array.from(rule.media);
                var isScreenOrAllOrQuery = media.some(function (m) {
                    return (
                        m.startsWith("screen") ||
                        m.startsWith("all") ||
                        m.startsWith("(")
                    );
                });
                var isPrintOrSpeech = media.some(function (m) {
                    return m.startsWith("print") || m.startsWith("speech");
                });
                if (isScreenOrAllOrQuery || !isPrintOrSpeech) {
                    iterateCSSRules(rule.cssRules, iterate, onMediaRuleError);
                }
            } else if (rule.conditionText) {
                if (CSS.supports(rule.conditionText)) {
                    iterateCSSRules(rule.cssRules, iterate, onMediaRuleError);
                }
            } else {
                logWarn("CSSRule type not supported", rule);
            }
        });
    }
    var shorthandVarDependantProperties = [
        "background",
        "border",
        "border-color",
        "border-bottom",
        "border-left",
        "border-right",
        "border-top",
        "outline",
        "outline-color"
    ];
    var shorthandVarDepPropRegexps = isSafari
        ? shorthandVarDependantProperties.map(function (prop) {
              var regexp = new RegExp("".concat(prop, ":\\s*(.*?)\\s*;"));
              return [prop, regexp];
          })
        : null;
    function iterateCSSDeclarations(style, iterate) {
        forEach(style, function (property) {
            var value = style.getPropertyValue(property).trim();
            if (!value) {
                return;
            }
            iterate(property, value);
        });
        var cssText = style.cssText;
        if (cssText.includes("var(")) {
            if (isSafari) {
                shorthandVarDepPropRegexps.forEach(function (_a) {
                    var _b = __read(_a, 2),
                        prop = _b[0],
                        regexp = _b[1];
                    var match = cssText.match(regexp);
                    if (match && match[1]) {
                        var val = match[1].trim();
                        iterate(prop, val);
                    }
                });
            } else {
                shorthandVarDependantProperties.forEach(function (prop) {
                    var val = style.getPropertyValue(prop);
                    if (val && val.includes("var(")) {
                        iterate(prop, val);
                    }
                });
            }
        }
    }
    var cssURLRegex = /url\((('.*?')|(".*?")|([^\)]*?))\)/g;
    var cssImportRegex =
        /@import\s*(url\()?(('.+?')|(".+?")|([^\)]*?))\)? ?(screen)?;?/gi;
    function getCSSURLValue(cssURL) {
        return cssURL
            .trim()
            .replace(/[\n\r\\]+/g, "")
            .replace(/^url\((.*)\)$/, "$1")
            .trim()
            .replace(/^"(.*)"$/, "$1")
            .replace(/^'(.*)'$/, "$1")
            .replace(/(?:\\(.))/g, "$1");
    }
    function getCSSBaseBath(url) {
        var cssURL = parseURL(url);
        return ""
            .concat(cssURL.origin)
            .concat(
                cssURL.pathname
                    .replace(/\?.*$/, "")
                    .replace(/(\/)([^\/]+)$/i, "$1")
            );
    }
    function replaceCSSRelativeURLsWithAbsolute($css, cssBasePath) {
        return $css.replace(cssURLRegex, function (match) {
            var pathValue = getCSSURLValue(match);
            try {
                return "url('".concat(
                    getAbsoluteURL(cssBasePath, pathValue),
                    "')"
                );
            } catch (err) {
                return match;
            }
        });
    }
    var cssCommentsRegex = /\/\*[\s\S]*?\*\//g;
    function removeCSSComments($css) {
        return $css.replace(cssCommentsRegex, "");
    }
    var fontFaceRegex = /@font-face\s*{[^}]*}/g;
    function replaceCSSFontFace($css) {
        return $css.replace(fontFaceRegex, "");
    }

    function evalMath(expression) {
        var rpnStack = [];
        var workingStack = [];
        var lastToken;
        for (var i = 0, len = expression.length; i < len; i++) {
            var token = expression[i];
            if (!token || token === " ") {
                continue;
            }
            if (operators.has(token)) {
                var op = operators.get(token);
                while (workingStack.length) {
                    var currentOp = operators.get(workingStack[0]);
                    if (!currentOp) {
                        break;
                    }
                    if (op.lessOrEqualThan(currentOp)) {
                        rpnStack.push(workingStack.shift());
                    } else {
                        break;
                    }
                }
                workingStack.unshift(token);
            } else if (!lastToken || operators.has(lastToken)) {
                rpnStack.push(token);
            } else {
                rpnStack[rpnStack.length - 1] += token;
            }
            lastToken = token;
        }
        rpnStack.push.apply(
            rpnStack,
            __spreadArray([], __read(workingStack), false)
        );
        var stack = [];
        for (var i = 0, len = rpnStack.length; i < len; i++) {
            var op = operators.get(rpnStack[i]);
            if (op) {
                var args = stack.splice(0, 2);
                stack.push(op.exec(args[1], args[0]));
            } else {
                stack.unshift(parseFloat(rpnStack[i]));
            }
        }
        return stack[0];
    }
    var Operator = (function () {
        function Operator(precedence, method) {
            this.precendce = precedence;
            this.execMethod = method;
        }
        Operator.prototype.exec = function (left, right) {
            return this.execMethod(left, right);
        };
        Operator.prototype.lessOrEqualThan = function (op) {
            return this.precendce <= op.precendce;
        };
        return Operator;
    })();
    var operators = new Map([
        [
            "+",
            new Operator(1, function (left, right) {
                return left + right;
            })
        ],
        [
            "-",
            new Operator(1, function (left, right) {
                return left - right;
            })
        ],
        [
            "*",
            new Operator(2, function (left, right) {
                return left * right;
            })
        ],
        [
            "/",
            new Operator(2, function (left, right) {
                return left / right;
            })
        ]
    ]);

    function getMatches(regex, input, group) {
        if (group === void 0) {
            group = 0;
        }
        var matches = [];
        var m;
        while ((m = regex.exec(input))) {
            matches.push(m[group]);
        }
        return matches;
    }
    function formatCSS(text) {
        function trimLeft(text) {
            return text.replace(/^\s+/, "");
        }
        function getIndent(depth) {
            if (depth === 0) {
                return "";
            }
            return " ".repeat(4 * depth);
        }
        if (text.length < 50000) {
            var emptyRuleRegexp = /[^{}]+{\s*}/;
            while (emptyRuleRegexp.test(text)) {
                text = text.replace(emptyRuleRegexp, "");
            }
        }
        var css = text
            .replace(/\s{2,}/g, " ")
            .replace(/\{/g, "{\n")
            .replace(/\}/g, "\n}\n")
            .replace(/\;(?![^\(|\"]*(\)|\"))/g, ";\n")
            .replace(/\,(?![^\(|\"]*(\)|\"))/g, ",\n")
            .replace(/\n\s*\n/g, "\n")
            .split("\n");
        var depth = 0;
        var formatted = [];
        for (var x = 0, len = css.length; x < len; x++) {
            var line = "".concat(css[x], "\n");
            if (line.includes("{")) {
                formatted.push(getIndent(depth++) + trimLeft(line));
            } else if (line.includes("}")) {
                formatted.push(getIndent(--depth) + trimLeft(line));
            } else {
                formatted.push(getIndent(depth) + trimLeft(line));
            }
        }
        return formatted.join("").trim();
    }
    function getParenthesesRange(input, searchStartIndex) {
        if (searchStartIndex === void 0) {
            searchStartIndex = 0;
        }
        var length = input.length;
        var depth = 0;
        var firstOpenIndex = -1;
        for (var i = searchStartIndex; i < length; i++) {
            if (depth === 0) {
                var openIndex = input.indexOf("(", i);
                if (openIndex < 0) {
                    break;
                }
                firstOpenIndex = openIndex;
                depth++;
                i = openIndex;
            } else {
                var closingIndex = input.indexOf(")", i);
                if (closingIndex < 0) {
                    break;
                }
                var openIndex = input.indexOf("(", i);
                if (openIndex < 0 || closingIndex < openIndex) {
                    depth--;
                    if (depth === 0) {
                        return {start: firstOpenIndex, end: closingIndex + 1};
                    }
                    i = closingIndex;
                } else {
                    depth++;
                    i = openIndex;
                }
            }
        }
        return null;
    }

    var hslaParseCache = new Map();
    var rgbaParseCache = new Map();
    function parseColorWithCache($color) {
        $color = $color.trim();
        if (rgbaParseCache.has($color)) {
            return rgbaParseCache.get($color);
        }
        if ($color.includes("calc(")) {
            $color = lowerCalcExpression($color);
        }
        var color = parse($color);
        color && rgbaParseCache.set($color, color);
        return color;
    }
    function parseToHSLWithCache(color) {
        if (hslaParseCache.has(color)) {
            return hslaParseCache.get(color);
        }
        var rgb = parseColorWithCache(color);
        if (!rgb) {
            return null;
        }
        var hsl = rgbToHSL(rgb);
        hslaParseCache.set(color, hsl);
        return hsl;
    }
    function clearColorCache() {
        hslaParseCache.clear();
        rgbaParseCache.clear();
    }
    function hslToRGB(_a) {
        var h = _a.h,
            s = _a.s,
            l = _a.l,
            _b = _a.a,
            a = _b === void 0 ? 1 : _b;
        if (s === 0) {
            var _c = __read(
                    [l, l, l].map(function (x) {
                        return Math.round(x * 255);
                    }),
                    3
                ),
                r_1 = _c[0],
                b_1 = _c[1],
                g_1 = _c[2];
            return {r: r_1, g: g_1, b: b_1, a: a};
        }
        var c = (1 - Math.abs(2 * l - 1)) * s;
        var x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        var m = l - c / 2;
        var _d = __read(
                (h < 60
                    ? [c, x, 0]
                    : h < 120
                    ? [x, c, 0]
                    : h < 180
                    ? [0, c, x]
                    : h < 240
                    ? [0, x, c]
                    : h < 300
                    ? [x, 0, c]
                    : [c, 0, x]
                ).map(function (n) {
                    return Math.round((n + m) * 255);
                }),
                3
            ),
            r = _d[0],
            g = _d[1],
            b = _d[2];
        return {r: r, g: g, b: b, a: a};
    }
    function rgbToHSL(_a) {
        var r255 = _a.r,
            g255 = _a.g,
            b255 = _a.b,
            _b = _a.a,
            a = _b === void 0 ? 1 : _b;
        var r = r255 / 255;
        var g = g255 / 255;
        var b = b255 / 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var c = max - min;
        var l = (max + min) / 2;
        if (c === 0) {
            return {h: 0, s: 0, l: l, a: a};
        }
        var h =
            (max === r
                ? ((g - b) / c) % 6
                : max === g
                ? (b - r) / c + 2
                : (r - g) / c + 4) * 60;
        if (h < 0) {
            h += 360;
        }
        var s = c / (1 - Math.abs(2 * l - 1));
        return {h: h, s: s, l: l, a: a};
    }
    function toFixed(n, digits) {
        if (digits === void 0) {
            digits = 0;
        }
        var fixed = n.toFixed(digits);
        if (digits === 0) {
            return fixed;
        }
        var dot = fixed.indexOf(".");
        if (dot >= 0) {
            var zerosMatch = fixed.match(/0+$/);
            if (zerosMatch) {
                if (zerosMatch.index === dot + 1) {
                    return fixed.substring(0, dot);
                }
                return fixed.substring(0, zerosMatch.index);
            }
        }
        return fixed;
    }
    function rgbToString(rgb) {
        var r = rgb.r,
            g = rgb.g,
            b = rgb.b,
            a = rgb.a;
        if (a != null && a < 1) {
            return "rgba("
                .concat(toFixed(r), ", ")
                .concat(toFixed(g), ", ")
                .concat(toFixed(b), ", ")
                .concat(toFixed(a, 2), ")");
        }
        return "rgb("
            .concat(toFixed(r), ", ")
            .concat(toFixed(g), ", ")
            .concat(toFixed(b), ")");
    }
    function rgbToHexString(_a) {
        var r = _a.r,
            g = _a.g,
            b = _a.b,
            a = _a.a;
        return "#".concat(
            (a != null && a < 1 ? [r, g, b, Math.round(a * 255)] : [r, g, b])
                .map(function (x) {
                    return "".concat(x < 16 ? "0" : "").concat(x.toString(16));
                })
                .join("")
        );
    }
    function hslToString(hsl) {
        var h = hsl.h,
            s = hsl.s,
            l = hsl.l,
            a = hsl.a;
        if (a != null && a < 1) {
            return "hsla("
                .concat(toFixed(h), ", ")
                .concat(toFixed(s * 100), "%, ")
                .concat(toFixed(l * 100), "%, ")
                .concat(toFixed(a, 2), ")");
        }
        return "hsl("
            .concat(toFixed(h), ", ")
            .concat(toFixed(s * 100), "%, ")
            .concat(toFixed(l * 100), "%)");
    }
    var rgbMatch = /^rgba?\([^\(\)]+\)$/;
    var hslMatch = /^hsla?\([^\(\)]+\)$/;
    var hexMatch = /^#[0-9a-f]+$/i;
    function parse($color) {
        var c = $color.trim().toLowerCase();
        if (c.match(rgbMatch)) {
            return parseRGB(c);
        }
        if (c.match(hslMatch)) {
            return parseHSL(c);
        }
        if (c.match(hexMatch)) {
            return parseHex(c);
        }
        if (knownColors.has(c)) {
            return getColorByName(c);
        }
        if (systemColors.has(c)) {
            return getSystemColor(c);
        }
        if ($color === "transparent") {
            return {r: 0, g: 0, b: 0, a: 0};
        }
        return null;
    }
    function getNumbers($color) {
        var numbers = [];
        var prevPos = 0;
        var isMining = false;
        var startIndex = $color.indexOf("(");
        $color = $color.substring(startIndex + 1, $color.length - 1);
        for (var i = 0; i < $color.length; i++) {
            var c = $color[i];
            if ((c >= "0" && c <= "9") || c === "." || c === "+" || c === "-") {
                isMining = true;
            } else if (isMining && (c === " " || c === ",")) {
                numbers.push($color.substring(prevPos, i));
                isMining = false;
                prevPos = i + 1;
            } else if (!isMining) {
                prevPos = i + 1;
            }
        }
        if (isMining) {
            numbers.push($color.substring(prevPos, $color.length));
        }
        return numbers;
    }
    function getNumbersFromString(str, range, units) {
        var raw = getNumbers(str);
        var unitsList = Object.entries(units);
        var numbers = raw
            .map(function (r) {
                return r.trim();
            })
            .map(function (r, i) {
                var n;
                var unit = unitsList.find(function (_a) {
                    var _b = __read(_a, 1),
                        u = _b[0];
                    return r.endsWith(u);
                });
                if (unit) {
                    n =
                        (parseFloat(r.substring(0, r.length - unit[0].length)) /
                            unit[1]) *
                        range[i];
                } else {
                    n = parseFloat(r);
                }
                if (range[i] > 1) {
                    return Math.round(n);
                }
                return n;
            });
        return numbers;
    }
    var rgbRange = [255, 255, 255, 1];
    var rgbUnits = {"%": 100};
    function parseRGB($rgb) {
        var _a = __read(getNumbersFromString($rgb, rgbRange, rgbUnits), 4),
            r = _a[0],
            g = _a[1],
            b = _a[2],
            _b = _a[3],
            a = _b === void 0 ? 1 : _b;
        return {r: r, g: g, b: b, a: a};
    }
    var hslRange = [360, 1, 1, 1];
    var hslUnits = {"%": 100, "deg": 360, "rad": 2 * Math.PI, "turn": 1};
    function parseHSL($hsl) {
        var _a = __read(getNumbersFromString($hsl, hslRange, hslUnits), 4),
            h = _a[0],
            s = _a[1],
            l = _a[2],
            _b = _a[3],
            a = _b === void 0 ? 1 : _b;
        return hslToRGB({h: h, s: s, l: l, a: a});
    }
    function parseHex($hex) {
        var h = $hex.substring(1);
        switch (h.length) {
            case 3:
            case 4: {
                var _a = __read(
                        [0, 1, 2].map(function (i) {
                            return parseInt("".concat(h[i]).concat(h[i]), 16);
                        }),
                        3
                    ),
                    r = _a[0],
                    g = _a[1],
                    b = _a[2];
                var a =
                    h.length === 3
                        ? 1
                        : parseInt("".concat(h[3]).concat(h[3]), 16) / 255;
                return {r: r, g: g, b: b, a: a};
            }
            case 6:
            case 8: {
                var _b = __read(
                        [0, 2, 4].map(function (i) {
                            return parseInt(h.substring(i, i + 2), 16);
                        }),
                        3
                    ),
                    r = _b[0],
                    g = _b[1],
                    b = _b[2];
                var a =
                    h.length === 6 ? 1 : parseInt(h.substring(6, 8), 16) / 255;
                return {r: r, g: g, b: b, a: a};
            }
        }
        return null;
    }
    function getColorByName($color) {
        var n = knownColors.get($color);
        return {
            r: (n >> 16) & 255,
            g: (n >> 8) & 255,
            b: (n >> 0) & 255,
            a: 1
        };
    }
    function getSystemColor($color) {
        var n = systemColors.get($color);
        return {
            r: (n >> 16) & 255,
            g: (n >> 8) & 255,
            b: (n >> 0) & 255,
            a: 1
        };
    }
    function lowerCalcExpression(color) {
        var searchIndex = 0;
        var replaceBetweenIndices = function (start, end, replacement) {
            color =
                color.substring(0, start) + replacement + color.substring(end);
        };
        while ((searchIndex = color.indexOf("calc(")) !== -1) {
            var range = getParenthesesRange(color, searchIndex);
            if (!range) {
                break;
            }
            var slice = color.slice(range.start + 1, range.end - 1);
            var includesPercentage = slice.includes("%");
            slice = slice.split("%").join("");
            var output = Math.round(evalMath(slice));
            replaceBetweenIndices(
                range.start - 4,
                range.end,
                output + (includesPercentage ? "%" : "")
            );
        }
        return color;
    }
    var knownColors = new Map(
        Object.entries({
            aliceblue: 0xf0f8ff,
            antiquewhite: 0xfaebd7,
            aqua: 0x00ffff,
            aquamarine: 0x7fffd4,
            azure: 0xf0ffff,
            beige: 0xf5f5dc,
            bisque: 0xffe4c4,
            black: 0x000000,
            blanchedalmond: 0xffebcd,
            blue: 0x0000ff,
            blueviolet: 0x8a2be2,
            brown: 0xa52a2a,
            burlywood: 0xdeb887,
            cadetblue: 0x5f9ea0,
            chartreuse: 0x7fff00,
            chocolate: 0xd2691e,
            coral: 0xff7f50,
            cornflowerblue: 0x6495ed,
            cornsilk: 0xfff8dc,
            crimson: 0xdc143c,
            cyan: 0x00ffff,
            darkblue: 0x00008b,
            darkcyan: 0x008b8b,
            darkgoldenrod: 0xb8860b,
            darkgray: 0xa9a9a9,
            darkgrey: 0xa9a9a9,
            darkgreen: 0x006400,
            darkkhaki: 0xbdb76b,
            darkmagenta: 0x8b008b,
            darkolivegreen: 0x556b2f,
            darkorange: 0xff8c00,
            darkorchid: 0x9932cc,
            darkred: 0x8b0000,
            darksalmon: 0xe9967a,
            darkseagreen: 0x8fbc8f,
            darkslateblue: 0x483d8b,
            darkslategray: 0x2f4f4f,
            darkslategrey: 0x2f4f4f,
            darkturquoise: 0x00ced1,
            darkviolet: 0x9400d3,
            deeppink: 0xff1493,
            deepskyblue: 0x00bfff,
            dimgray: 0x696969,
            dimgrey: 0x696969,
            dodgerblue: 0x1e90ff,
            firebrick: 0xb22222,
            floralwhite: 0xfffaf0,
            forestgreen: 0x228b22,
            fuchsia: 0xff00ff,
            gainsboro: 0xdcdcdc,
            ghostwhite: 0xf8f8ff,
            gold: 0xffd700,
            goldenrod: 0xdaa520,
            gray: 0x808080,
            grey: 0x808080,
            green: 0x008000,
            greenyellow: 0xadff2f,
            honeydew: 0xf0fff0,
            hotpink: 0xff69b4,
            indianred: 0xcd5c5c,
            indigo: 0x4b0082,
            ivory: 0xfffff0,
            khaki: 0xf0e68c,
            lavender: 0xe6e6fa,
            lavenderblush: 0xfff0f5,
            lawngreen: 0x7cfc00,
            lemonchiffon: 0xfffacd,
            lightblue: 0xadd8e6,
            lightcoral: 0xf08080,
            lightcyan: 0xe0ffff,
            lightgoldenrodyellow: 0xfafad2,
            lightgray: 0xd3d3d3,
            lightgrey: 0xd3d3d3,
            lightgreen: 0x90ee90,
            lightpink: 0xffb6c1,
            lightsalmon: 0xffa07a,
            lightseagreen: 0x20b2aa,
            lightskyblue: 0x87cefa,
            lightslategray: 0x778899,
            lightslategrey: 0x778899,
            lightsteelblue: 0xb0c4de,
            lightyellow: 0xffffe0,
            lime: 0x00ff00,
            limegreen: 0x32cd32,
            linen: 0xfaf0e6,
            magenta: 0xff00ff,
            maroon: 0x800000,
            mediumaquamarine: 0x66cdaa,
            mediumblue: 0x0000cd,
            mediumorchid: 0xba55d3,
            mediumpurple: 0x9370db,
            mediumseagreen: 0x3cb371,
            mediumslateblue: 0x7b68ee,
            mediumspringgreen: 0x00fa9a,
            mediumturquoise: 0x48d1cc,
            mediumvioletred: 0xc71585,
            midnightblue: 0x191970,
            mintcream: 0xf5fffa,
            mistyrose: 0xffe4e1,
            moccasin: 0xffe4b5,
            navajowhite: 0xffdead,
            navy: 0x000080,
            oldlace: 0xfdf5e6,
            olive: 0x808000,
            olivedrab: 0x6b8e23,
            orange: 0xffa500,
            orangered: 0xff4500,
            orchid: 0xda70d6,
            palegoldenrod: 0xeee8aa,
            palegreen: 0x98fb98,
            paleturquoise: 0xafeeee,
            palevioletred: 0xdb7093,
            papayawhip: 0xffefd5,
            peachpuff: 0xffdab9,
            peru: 0xcd853f,
            pink: 0xffc0cb,
            plum: 0xdda0dd,
            powderblue: 0xb0e0e6,
            purple: 0x800080,
            rebeccapurple: 0x663399,
            red: 0xff0000,
            rosybrown: 0xbc8f8f,
            royalblue: 0x4169e1,
            saddlebrown: 0x8b4513,
            salmon: 0xfa8072,
            sandybrown: 0xf4a460,
            seagreen: 0x2e8b57,
            seashell: 0xfff5ee,
            sienna: 0xa0522d,
            silver: 0xc0c0c0,
            skyblue: 0x87ceeb,
            slateblue: 0x6a5acd,
            slategray: 0x708090,
            slategrey: 0x708090,
            snow: 0xfffafa,
            springgreen: 0x00ff7f,
            steelblue: 0x4682b4,
            tan: 0xd2b48c,
            teal: 0x008080,
            thistle: 0xd8bfd8,
            tomato: 0xff6347,
            turquoise: 0x40e0d0,
            violet: 0xee82ee,
            wheat: 0xf5deb3,
            white: 0xffffff,
            whitesmoke: 0xf5f5f5,
            yellow: 0xffff00,
            yellowgreen: 0x9acd32
        })
    );
    var systemColors = new Map(
        Object.entries({
            "ActiveBorder": 0x3b99fc,
            "ActiveCaption": 0x000000,
            "AppWorkspace": 0xaaaaaa,
            "Background": 0x6363ce,
            "ButtonFace": 0xffffff,
            "ButtonHighlight": 0xe9e9e9,
            "ButtonShadow": 0x9fa09f,
            "ButtonText": 0x000000,
            "CaptionText": 0x000000,
            "GrayText": 0x7f7f7f,
            "Highlight": 0xb2d7ff,
            "HighlightText": 0x000000,
            "InactiveBorder": 0xffffff,
            "InactiveCaption": 0xffffff,
            "InactiveCaptionText": 0x000000,
            "InfoBackground": 0xfbfcc5,
            "InfoText": 0x000000,
            "Menu": 0xf6f6f6,
            "MenuText": 0xffffff,
            "Scrollbar": 0xaaaaaa,
            "ThreeDDarkShadow": 0x000000,
            "ThreeDFace": 0xc0c0c0,
            "ThreeDHighlight": 0xffffff,
            "ThreeDLightShadow": 0xffffff,
            "ThreeDShadow": 0x000000,
            "Window": 0xececec,
            "WindowFrame": 0xaaaaaa,
            "WindowText": 0x000000,
            "-webkit-focus-ring-color": 0xe59700
        }).map(function (_a) {
            var _b = __read(_a, 2),
                key = _b[0],
                value = _b[1];
            return [key.toLowerCase(), value];
        })
    );
    function getSRGBLightness(r, g, b) {
        return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    }

    function scale(x, inLow, inHigh, outLow, outHigh) {
        return ((x - inLow) * (outHigh - outLow)) / (inHigh - inLow) + outLow;
    }
    function clamp(x, min, max) {
        return Math.min(max, Math.max(min, x));
    }
    function multiplyMatrices(m1, m2) {
        var result = [];
        for (var i = 0, len = m1.length; i < len; i++) {
            result[i] = [];
            for (var j = 0, len2 = m2[0].length; j < len2; j++) {
                var sum = 0;
                for (var k = 0, len3 = m1[0].length; k < len3; k++) {
                    sum += m1[i][k] * m2[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }

    function createFilterMatrix(config) {
        var m = Matrix.identity();
        if (config.sepia !== 0) {
            m = multiplyMatrices(m, Matrix.sepia(config.sepia / 100));
        }
        if (config.grayscale !== 0) {
            m = multiplyMatrices(m, Matrix.grayscale(config.grayscale / 100));
        }
        if (config.contrast !== 100) {
            m = multiplyMatrices(m, Matrix.contrast(config.contrast / 100));
        }
        if (config.brightness !== 100) {
            m = multiplyMatrices(m, Matrix.brightness(config.brightness / 100));
        }
        if (config.mode === 1) {
            m = multiplyMatrices(m, Matrix.invertNHue());
        }
        return m;
    }
    function applyColorMatrix(_a, matrix) {
        var _b = __read(_a, 3),
            r = _b[0],
            g = _b[1],
            b = _b[2];
        var rgb = [[r / 255], [g / 255], [b / 255], [1], [1]];
        var result = multiplyMatrices(matrix, rgb);
        return [0, 1, 2].map(function (i) {
            return clamp(Math.round(result[i][0] * 255), 0, 255);
        });
    }
    var Matrix = {
        identity: function () {
            return [
                [1, 0, 0, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ];
        },
        invertNHue: function () {
            return [
                [0.333, -0.667, -0.667, 0, 1],
                [-0.667, 0.333, -0.667, 0, 1],
                [-0.667, -0.667, 0.333, 0, 1],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ];
        },
        brightness: function (v) {
            return [
                [v, 0, 0, 0, 0],
                [0, v, 0, 0, 0],
                [0, 0, v, 0, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ];
        },
        contrast: function (v) {
            var t = (1 - v) / 2;
            return [
                [v, 0, 0, 0, t],
                [0, v, 0, 0, t],
                [0, 0, v, 0, t],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ];
        },
        sepia: function (v) {
            return [
                [
                    0.393 + 0.607 * (1 - v),
                    0.769 - 0.769 * (1 - v),
                    0.189 - 0.189 * (1 - v),
                    0,
                    0
                ],
                [
                    0.349 - 0.349 * (1 - v),
                    0.686 + 0.314 * (1 - v),
                    0.168 - 0.168 * (1 - v),
                    0,
                    0
                ],
                [
                    0.272 - 0.272 * (1 - v),
                    0.534 - 0.534 * (1 - v),
                    0.131 + 0.869 * (1 - v),
                    0,
                    0
                ],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ];
        },
        grayscale: function (v) {
            return [
                [
                    0.2126 + 0.7874 * (1 - v),
                    0.7152 - 0.7152 * (1 - v),
                    0.0722 - 0.0722 * (1 - v),
                    0,
                    0
                ],
                [
                    0.2126 - 0.2126 * (1 - v),
                    0.7152 + 0.2848 * (1 - v),
                    0.0722 - 0.0722 * (1 - v),
                    0,
                    0
                ],
                [
                    0.2126 - 0.2126 * (1 - v),
                    0.7152 - 0.7152 * (1 - v),
                    0.0722 + 0.9278 * (1 - v),
                    0,
                    0
                ],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ];
        }
    };

    function getBgPole(theme) {
        var isDarkScheme = theme.mode === 1;
        var prop = isDarkScheme
            ? "darkSchemeBackgroundColor"
            : "lightSchemeBackgroundColor";
        return theme[prop];
    }
    function getFgPole(theme) {
        var isDarkScheme = theme.mode === 1;
        var prop = isDarkScheme
            ? "darkSchemeTextColor"
            : "lightSchemeTextColor";
        return theme[prop];
    }
    var colorModificationCache = new Map();
    function clearColorModificationCache() {
        colorModificationCache.clear();
    }
    var rgbCacheKeys = ["r", "g", "b", "a"];
    var themeCacheKeys$1 = [
        "mode",
        "brightness",
        "contrast",
        "grayscale",
        "sepia",
        "darkSchemeBackgroundColor",
        "darkSchemeTextColor",
        "lightSchemeBackgroundColor",
        "lightSchemeTextColor"
    ];
    function getCacheId(rgb, theme) {
        var resultId = "";
        rgbCacheKeys.forEach(function (key) {
            resultId += "".concat(rgb[key], ";");
        });
        themeCacheKeys$1.forEach(function (key) {
            resultId += "".concat(theme[key], ";");
        });
        return resultId;
    }
    function modifyColorWithCache(
        rgb,
        theme,
        modifyHSL,
        poleColor,
        anotherPoleColor
    ) {
        var fnCache;
        if (colorModificationCache.has(modifyHSL)) {
            fnCache = colorModificationCache.get(modifyHSL);
        } else {
            fnCache = new Map();
            colorModificationCache.set(modifyHSL, fnCache);
        }
        var id = getCacheId(rgb, theme);
        if (fnCache.has(id)) {
            return fnCache.get(id);
        }
        var hsl = rgbToHSL(rgb);
        var pole = poleColor == null ? null : parseToHSLWithCache(poleColor);
        var anotherPole =
            anotherPoleColor == null
                ? null
                : parseToHSLWithCache(anotherPoleColor);
        var modified = modifyHSL(hsl, pole, anotherPole);
        var _a = hslToRGB(modified),
            r = _a.r,
            g = _a.g,
            b = _a.b,
            a = _a.a;
        var matrix = createFilterMatrix(theme);
        var _b = __read(applyColorMatrix([r, g, b], matrix), 3),
            rf = _b[0],
            gf = _b[1],
            bf = _b[2];
        var color =
            a === 1
                ? rgbToHexString({r: rf, g: gf, b: bf})
                : rgbToString({r: rf, g: gf, b: bf, a: a});
        fnCache.set(id, color);
        return color;
    }
    function noopHSL(hsl) {
        return hsl;
    }
    function modifyColor(rgb, theme) {
        return modifyColorWithCache(rgb, theme, noopHSL);
    }
    function modifyLightSchemeColor(rgb, theme) {
        var poleBg = getBgPole(theme);
        var poleFg = getFgPole(theme);
        return modifyColorWithCache(
            rgb,
            theme,
            modifyLightModeHSL,
            poleFg,
            poleBg
        );
    }
    function modifyLightModeHSL(_a, poleFg, poleBg) {
        var h = _a.h,
            s = _a.s,
            l = _a.l,
            a = _a.a;
        var isDark = l < 0.5;
        var isNeutral;
        if (isDark) {
            isNeutral = l < 0.2 || s < 0.12;
        } else {
            var isBlue = h > 200 && h < 280;
            isNeutral = s < 0.24 || (l > 0.8 && isBlue);
        }
        var hx = h;
        var sx = l;
        if (isNeutral) {
            if (isDark) {
                hx = poleFg.h;
                sx = poleFg.s;
            } else {
                hx = poleBg.h;
                sx = poleBg.s;
            }
        }
        var lx = scale(l, 0, 1, poleFg.l, poleBg.l);
        return {h: hx, s: sx, l: lx, a: a};
    }
    var MAX_BG_LIGHTNESS = 0.4;
    function modifyBgHSL(_a, pole) {
        var h = _a.h,
            s = _a.s,
            l = _a.l,
            a = _a.a;
        var isDark = l < 0.5;
        var isBlue = h > 200 && h < 280;
        var isNeutral = s < 0.12 || (l > 0.8 && isBlue);
        if (isDark) {
            var lx_1 = scale(l, 0, 0.5, 0, MAX_BG_LIGHTNESS);
            if (isNeutral) {
                var hx_1 = pole.h;
                var sx = pole.s;
                return {h: hx_1, s: sx, l: lx_1, a: a};
            }
            return {h: h, s: s, l: lx_1, a: a};
        }
        var lx = scale(l, 0.5, 1, MAX_BG_LIGHTNESS, pole.l);
        if (isNeutral) {
            var hx_2 = pole.h;
            var sx = pole.s;
            return {h: hx_2, s: sx, l: lx, a: a};
        }
        var hx = h;
        var isYellow = h > 60 && h < 180;
        if (isYellow) {
            var isCloserToGreen = h > 120;
            if (isCloserToGreen) {
                hx = scale(h, 120, 180, 135, 180);
            } else {
                hx = scale(h, 60, 120, 60, 105);
            }
        }
        if (hx > 40 && hx < 80) {
            lx *= 0.75;
        }
        return {h: hx, s: s, l: lx, a: a};
    }
    function modifyBackgroundColor(rgb, theme) {
        if (theme.mode === 0) {
            return modifyLightSchemeColor(rgb, theme);
        }
        var pole = getBgPole(theme);
        return modifyColorWithCache(
            rgb,
            __assign(__assign({}, theme), {mode: 0}),
            modifyBgHSL,
            pole
        );
    }
    var MIN_FG_LIGHTNESS = 0.55;
    function modifyBlueFgHue(hue) {
        return scale(hue, 205, 245, 205, 220);
    }
    function modifyFgHSL(_a, pole) {
        var h = _a.h,
            s = _a.s,
            l = _a.l,
            a = _a.a;
        var isLight = l > 0.5;
        var isNeutral = l < 0.2 || s < 0.24;
        var isBlue = !isNeutral && h > 205 && h < 245;
        if (isLight) {
            var lx_2 = scale(l, 0.5, 1, MIN_FG_LIGHTNESS, pole.l);
            if (isNeutral) {
                var hx_3 = pole.h;
                var sx = pole.s;
                return {h: hx_3, s: sx, l: lx_2, a: a};
            }
            var hx_4 = h;
            if (isBlue) {
                hx_4 = modifyBlueFgHue(h);
            }
            return {h: hx_4, s: s, l: lx_2, a: a};
        }
        if (isNeutral) {
            var hx_5 = pole.h;
            var sx = pole.s;
            var lx_3 = scale(l, 0, 0.5, pole.l, MIN_FG_LIGHTNESS);
            return {h: hx_5, s: sx, l: lx_3, a: a};
        }
        var hx = h;
        var lx;
        if (isBlue) {
            hx = modifyBlueFgHue(h);
            lx = scale(l, 0, 0.5, pole.l, Math.min(1, MIN_FG_LIGHTNESS + 0.05));
        } else {
            lx = scale(l, 0, 0.5, pole.l, MIN_FG_LIGHTNESS);
        }
        return {h: hx, s: s, l: lx, a: a};
    }
    function modifyForegroundColor(rgb, theme) {
        if (theme.mode === 0) {
            return modifyLightSchemeColor(rgb, theme);
        }
        var pole = getFgPole(theme);
        return modifyColorWithCache(
            rgb,
            __assign(__assign({}, theme), {mode: 0}),
            modifyFgHSL,
            pole
        );
    }
    function modifyBorderHSL(_a, poleFg, poleBg) {
        var h = _a.h,
            s = _a.s,
            l = _a.l,
            a = _a.a;
        var isDark = l < 0.5;
        var isNeutral = l < 0.2 || s < 0.24;
        var hx = h;
        var sx = s;
        if (isNeutral) {
            if (isDark) {
                hx = poleFg.h;
                sx = poleFg.s;
            } else {
                hx = poleBg.h;
                sx = poleBg.s;
            }
        }
        var lx = scale(l, 0, 1, 0.5, 0.2);
        return {h: hx, s: sx, l: lx, a: a};
    }
    function modifyBorderColor(rgb, theme) {
        if (theme.mode === 0) {
            return modifyLightSchemeColor(rgb, theme);
        }
        var poleFg = getFgPole(theme);
        var poleBg = getBgPole(theme);
        return modifyColorWithCache(
            rgb,
            __assign(__assign({}, theme), {mode: 0}),
            modifyBorderHSL,
            poleFg,
            poleBg
        );
    }
    function modifyShadowColor(rgb, filter) {
        return modifyBackgroundColor(rgb, filter);
    }
    function modifyGradientColor(rgb, filter) {
        return modifyBackgroundColor(rgb, filter);
    }

    function createTextStyle(config) {
        var lines = [];
        lines.push(
            '*:not(pre, pre *, code, .far, .fa, .glyphicon, [class*="vjs-"], .fab, .fa-github, .fas, .material-icons, .icofont, .typcn, mu, [class*="mu-"], .glyphicon, .icon) {'
        );
        if (config.useFont && config.fontFamily) {
            lines.push(
                "  font-family: ".concat(config.fontFamily, " !important;")
            );
        }
        if (config.textStroke > 0) {
            lines.push(
                "  -webkit-text-stroke: ".concat(
                    config.textStroke,
                    "px !important;"
                )
            );
            lines.push(
                "  text-stroke: ".concat(config.textStroke, "px !important;")
            );
        }
        lines.push("}");
        return lines.join("\n");
    }

    var FilterMode;
    (function (FilterMode) {
        FilterMode[(FilterMode["light"] = 0)] = "light";
        FilterMode[(FilterMode["dark"] = 1)] = "dark";
    })(FilterMode || (FilterMode = {}));
    function getCSSFilterValue(config) {
        var filters = [];
        if (config.mode === FilterMode.dark) {
            filters.push("invert(100%) hue-rotate(180deg)");
        }
        if (config.brightness !== 100) {
            filters.push("brightness(".concat(config.brightness, "%)"));
        }
        if (config.contrast !== 100) {
            filters.push("contrast(".concat(config.contrast, "%)"));
        }
        if (config.grayscale !== 0) {
            filters.push("grayscale(".concat(config.grayscale, "%)"));
        }
        if (config.sepia !== 0) {
            filters.push("sepia(".concat(config.sepia, "%)"));
        }
        if (filters.length === 0) {
            return null;
        }
        return filters.join(" ");
    }

    function toSVGMatrix(matrix) {
        return matrix
            .slice(0, 4)
            .map(function (m) {
                return m
                    .map(function (m) {
                        return m.toFixed(3);
                    })
                    .join(" ");
            })
            .join(" ");
    }
    function getSVGFilterMatrixValue(config) {
        return toSVGMatrix(createFilterMatrix(config));
    }

    var counter = 0;
    var resolvers$1 = new Map();
    var rejectors = new Map();
    function bgFetch(request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [
                    2,
                    new Promise(function (resolve, reject) {
                        var id = ++counter;
                        resolvers$1.set(id, resolve);
                        rejectors.set(id, reject);
                        chrome.runtime.sendMessage({
                            type: MessageType.CS_FETCH,
                            data: request,
                            id: id
                        });
                    })
                ];
            });
        });
    }
    chrome.runtime.onMessage.addListener(function (_a) {
        var type = _a.type,
            data = _a.data,
            error = _a.error,
            id = _a.id;
        if (type === MessageType.BG_FETCH_RESPONSE) {
            var resolve = resolvers$1.get(id);
            var reject = rejectors.get(id);
            resolvers$1.delete(id);
            rejectors.delete(id);
            if (error) {
                reject && reject(error);
            } else {
                resolve && resolve(data);
            }
        }
    });

    var AsyncQueue = (function () {
        function AsyncQueue() {
            this.queue = [];
            this.timerId = null;
            this.frameDuration = 1000 / 60;
        }
        AsyncQueue.prototype.addToQueue = function (entry) {
            this.queue.push(entry);
            this.startQueue();
        };
        AsyncQueue.prototype.stopQueue = function () {
            if (this.timerId !== null) {
                cancelAnimationFrame(this.timerId);
                this.timerId = null;
            }
            this.queue = [];
        };
        AsyncQueue.prototype.startQueue = function () {
            var _this = this;
            if (this.timerId) {
                return;
            }
            this.timerId = requestAnimationFrame(function () {
                _this.timerId = null;
                var start = Date.now();
                var cb;
                while ((cb = _this.queue.shift())) {
                    cb();
                    if (Date.now() - start >= _this.frameDuration) {
                        _this.startQueue();
                        break;
                    }
                }
            });
        };
        return AsyncQueue;
    })();

    var imageManager = new AsyncQueue();
    function getImageDetails(url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [
                    2,
                    new Promise(function (resolve, reject) {
                        return __awaiter(_this, void 0, void 0, function () {
                            var dataURL, error_1, image_1, error_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!url.startsWith("data:"))
                                            return [3, 1];
                                        dataURL = url;
                                        return [3, 4];
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4, getImageDataURL(url)];
                                    case 2:
                                        dataURL = _a.sent();
                                        return [3, 4];
                                    case 3:
                                        error_1 = _a.sent();
                                        reject(error_1);
                                        return [2];
                                    case 4:
                                        _a.trys.push([4, 6, , 7]);
                                        return [4, urlToImage(dataURL)];
                                    case 5:
                                        image_1 = _a.sent();
                                        imageManager.addToQueue(function () {
                                            resolve(
                                                __assign(
                                                    {
                                                        src: url,
                                                        dataURL: dataURL,
                                                        width: image_1.naturalWidth,
                                                        height: image_1.naturalHeight
                                                    },
                                                    analyzeImage(image_1)
                                                )
                                            );
                                        });
                                        return [3, 7];
                                    case 6:
                                        error_2 = _a.sent();
                                        reject(error_2);
                                        return [3, 7];
                                    case 7:
                                        return [2];
                                }
                            });
                        });
                    })
                ];
            });
        });
    }
    function getImageDataURL(url) {
        return __awaiter(this, void 0, void 0, function () {
            var parsedURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parsedURL = new URL(url);
                        if (!(parsedURL.origin === location.origin))
                            return [3, 2];
                        return [4, loadAsDataURL(url)];
                    case 1:
                        return [2, _a.sent()];
                    case 2:
                        return [
                            4,
                            bgFetch({url: url, responseType: "data-url"})
                        ];
                    case 3:
                        return [2, _a.sent()];
                }
            });
        });
    }
    function urlToImage(url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [
                    2,
                    new Promise(function (resolve, reject) {
                        var image = new Image();
                        image.onload = function () {
                            return resolve(image);
                        };
                        image.onerror = function () {
                            return reject("Unable to load image ".concat(url));
                        };
                        image.src = url;
                    })
                ];
            });
        });
    }
    var MAX_ANALIZE_PIXELS_COUNT = 32 * 32;
    var canvas;
    var context;
    function createCanvas() {
        var maxWidth = MAX_ANALIZE_PIXELS_COUNT;
        var maxHeight = MAX_ANALIZE_PIXELS_COUNT;
        canvas = document.createElement("canvas");
        canvas.width = maxWidth;
        canvas.height = maxHeight;
        context = canvas.getContext("2d");
        context.imageSmoothingEnabled = false;
    }
    function removeCanvas() {
        canvas = null;
        context = null;
    }
    var MAX_IMAGE_SIZE = 5 * 1024 * 1024;
    function analyzeImage(image) {
        if (!canvas) {
            createCanvas();
        }
        var naturalWidth = image.naturalWidth,
            naturalHeight = image.naturalHeight;
        if (naturalHeight === 0 || naturalWidth === 0) {
            logWarn("logWarn(Image is empty ".concat(image.currentSrc, ")"));
            return null;
        }
        var size = naturalWidth * naturalHeight * 4;
        if (size > MAX_IMAGE_SIZE) {
            return {
                isDark: false,
                isLight: false,
                isTransparent: false,
                isLarge: false,
                isTooLarge: true
            };
        }
        var naturalPixelsCount = naturalWidth * naturalHeight;
        var k = Math.min(
            1,
            Math.sqrt(MAX_ANALIZE_PIXELS_COUNT / naturalPixelsCount)
        );
        var width = Math.ceil(naturalWidth * k);
        var height = Math.ceil(naturalHeight * k);
        context.clearRect(0, 0, width, height);
        context.drawImage(
            image,
            0,
            0,
            naturalWidth,
            naturalHeight,
            0,
            0,
            width,
            height
        );
        var imageData = context.getImageData(0, 0, width, height);
        var d = imageData.data;
        var TRANSPARENT_ALPHA_THRESHOLD = 0.05;
        var DARK_LIGHTNESS_THRESHOLD = 0.4;
        var LIGHT_LIGHTNESS_THRESHOLD = 0.7;
        var transparentPixelsCount = 0;
        var darkPixelsCount = 0;
        var lightPixelsCount = 0;
        var i, x, y;
        var r, g, b, a;
        var l;
        for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
                i = 4 * (y * width + x);
                r = d[i + 0];
                g = d[i + 1];
                b = d[i + 2];
                a = d[i + 3];
                if (a / 255 < TRANSPARENT_ALPHA_THRESHOLD) {
                    transparentPixelsCount++;
                } else {
                    l = getSRGBLightness(r, g, b);
                    if (l < DARK_LIGHTNESS_THRESHOLD) {
                        darkPixelsCount++;
                    }
                    if (l > LIGHT_LIGHTNESS_THRESHOLD) {
                        lightPixelsCount++;
                    }
                }
            }
        }
        var totalPixelsCount = width * height;
        var opaquePixelsCount = totalPixelsCount - transparentPixelsCount;
        var DARK_IMAGE_THRESHOLD = 0.7;
        var LIGHT_IMAGE_THRESHOLD = 0.7;
        var TRANSPARENT_IMAGE_THRESHOLD = 0.1;
        var LARGE_IMAGE_PIXELS_COUNT = 800 * 600;
        return {
            isDark: darkPixelsCount / opaquePixelsCount >= DARK_IMAGE_THRESHOLD,
            isLight:
                lightPixelsCount / opaquePixelsCount >= LIGHT_IMAGE_THRESHOLD,
            isTransparent:
                transparentPixelsCount / totalPixelsCount >=
                TRANSPARENT_IMAGE_THRESHOLD,
            isLarge: naturalPixelsCount >= LARGE_IMAGE_PIXELS_COUNT,
            isTooLarge: false
        };
    }
    function getFilteredImageDataURL(_a, theme) {
        var dataURL = _a.dataURL,
            width = _a.width,
            height = _a.height;
        var matrix = getSVGFilterMatrixValue(theme);
        var svg = [
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'
                .concat(width, '" height="')
                .concat(height, '">'),
            "<defs>",
            '<filter id="darkreader-image-filter">',
            '<feColorMatrix type="matrix" values="'.concat(matrix, '" />'),
            "</filter>",
            "</defs>",
            '<image width="'
                .concat(width, '" height="')
                .concat(
                    height,
                    '" filter="url(#darkreader-image-filter)" xlink:href="'
                )
                .concat(dataURL, '" />'),
            "</svg>"
        ].join("");
        return "data:image/svg+xml;base64,".concat(btoa(svg));
    }
    function cleanImageProcessingCache() {
        imageManager && imageManager.stopQueue();
        removeCanvas();
    }

    var gradientLength = "gradient".length;
    var conicGradient = "conic-";
    var conicGradientLength = conicGradient.length;
    var radialGradient = "radial-";
    var linearGradient = "linear-";
    function parseGradient(value) {
        var result = [];
        var index = 0;
        var startIndex = conicGradient.length;
        var _loop_1 = function () {
            var typeGradient;
            [linearGradient, radialGradient, conicGradient].find(function (
                possibleType
            ) {
                if (index - possibleType.length >= 0) {
                    var possibleGradient = value.substring(
                        index - possibleType.length,
                        index
                    );
                    if (possibleGradient === possibleType) {
                        if (
                            value.slice(
                                index - possibleType.length - 10,
                                index - possibleType.length - 1
                            ) === "repeating"
                        ) {
                            typeGradient = "repeating-".concat(
                                possibleType,
                                "gradient"
                            );
                            return true;
                        }
                        if (
                            value.slice(
                                index - possibleType.length - 8,
                                index - possibleType.length - 1
                            ) === "-webkit"
                        ) {
                            typeGradient = "-webkit-".concat(
                                possibleType,
                                "gradient"
                            );
                            return true;
                        }
                        typeGradient = "".concat(possibleType, "gradient");
                        return true;
                    }
                }
            });
            if (!typeGradient) {
                return "break";
            }
            var _a = getParenthesesRange(value, index + gradientLength),
                start = _a.start,
                end = _a.end;
            var match = value.substring(start + 1, end - 1);
            startIndex = end + 1 + conicGradientLength;
            result.push({
                typeGradient: typeGradient,
                match: match,
                offset: typeGradient.length + 2,
                index: index - typeGradient.length + gradientLength,
                hasComma: true
            });
        };
        while ((index = value.indexOf("gradient", startIndex)) !== -1) {
            var state_1 = _loop_1();
            if (state_1 === "break") break;
        }
        if (result.length) {
            result[result.length - 1].hasComma = false;
        }
        return result;
    }

    function getPriority(ruleStyle, property) {
        return Boolean(ruleStyle && ruleStyle.getPropertyPriority(property));
    }
    function getModifiableCSSDeclaration(
        property,
        value,
        rule,
        variablesStore,
        ignoreImageSelectors,
        isCancelled
    ) {
        if (property.startsWith("--")) {
            var modifier = getVariableModifier(
                variablesStore,
                property,
                value,
                rule,
                ignoreImageSelectors,
                isCancelled
            );
            if (modifier) {
                return {
                    property: property,
                    value: modifier,
                    important: getPriority(rule.style, property),
                    sourceValue: value
                };
            }
        } else if (value.includes("var(")) {
            var modifier = getVariableDependantModifier(
                variablesStore,
                property,
                value
            );
            if (modifier) {
                return {
                    property: property,
                    value: modifier,
                    important: getPriority(rule.style, property),
                    sourceValue: value
                };
            }
        } else if (property === "color-scheme") {
            return null;
        } else if (
            (property.includes("color") &&
                property !== "-webkit-print-color-adjust") ||
            property === "fill" ||
            property === "stroke" ||
            property === "stop-color"
        ) {
            var modifier = getColorModifier(property, value, rule);
            if (modifier) {
                return {
                    property: property,
                    value: modifier,
                    important: getPriority(rule.style, property),
                    sourceValue: value
                };
            }
        } else if (
            property === "background-image" ||
            property === "list-style-image"
        ) {
            var modifier = getBgImageModifier(
                value,
                rule,
                ignoreImageSelectors,
                isCancelled
            );
            if (modifier) {
                return {
                    property: property,
                    value: modifier,
                    important: getPriority(rule.style, property),
                    sourceValue: value
                };
            }
        } else if (property.includes("shadow")) {
            var modifier = getShadowModifier(value);
            if (modifier) {
                return {
                    property: property,
                    value: modifier,
                    important: getPriority(rule.style, property),
                    sourceValue: value
                };
            }
        }
        return null;
    }
    function joinSelectors() {
        var selectors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selectors[_i] = arguments[_i];
        }
        return selectors.filter(Boolean).join(", ");
    }
    function getModifiedUserAgentStyle(theme, isIFrame, styleSystemControls) {
        var lines = [];
        if (!isIFrame) {
            lines.push("html {");
            lines.push(
                "    background-color: ".concat(
                    modifyBackgroundColor({r: 255, g: 255, b: 255}, theme),
                    " !important;"
                )
            );
            lines.push("}");
        }
        if (isCSSColorSchemePropSupported) {
            lines.push("html {");
            lines.push(
                "    color-scheme: ".concat(
                    theme.mode === 1 ? "dark" : "dark light",
                    " !important;"
                )
            );
            lines.push("}");
        }
        var bgSelectors = joinSelectors(
            isIFrame ? "" : "html, body",
            styleSystemControls ? "input, textarea, select, button, dialog" : ""
        );
        if (bgSelectors) {
            lines.push("".concat(bgSelectors, " {"));
            lines.push(
                "    background-color: ".concat(
                    modifyBackgroundColor({r: 255, g: 255, b: 255}, theme),
                    ";"
                )
            );
            lines.push("}");
        }
        lines.push(
            "".concat(
                joinSelectors(
                    "html, body",
                    styleSystemControls ? "input, textarea, select, button" : ""
                ),
                " {"
            )
        );
        lines.push(
            "    border-color: ".concat(
                modifyBorderColor({r: 76, g: 76, b: 76}, theme),
                ";"
            )
        );
        lines.push(
            "    color: ".concat(
                modifyForegroundColor({r: 0, g: 0, b: 0}, theme),
                ";"
            )
        );
        lines.push("}");
        lines.push("a {");
        lines.push(
            "    color: ".concat(
                modifyForegroundColor({r: 0, g: 64, b: 255}, theme),
                ";"
            )
        );
        lines.push("}");
        lines.push("table {");
        lines.push(
            "    border-color: ".concat(
                modifyBorderColor({r: 128, g: 128, b: 128}, theme),
                ";"
            )
        );
        lines.push("}");
        lines.push("::placeholder {");
        lines.push(
            "    color: ".concat(
                modifyForegroundColor({r: 169, g: 169, b: 169}, theme),
                ";"
            )
        );
        lines.push("}");
        lines.push("input:-webkit-autofill,");
        lines.push("textarea:-webkit-autofill,");
        lines.push("select:-webkit-autofill {");
        lines.push(
            "    background-color: ".concat(
                modifyBackgroundColor({r: 250, g: 255, b: 189}, theme),
                " !important;"
            )
        );
        lines.push(
            "    color: ".concat(
                modifyForegroundColor({r: 0, g: 0, b: 0}, theme),
                " !important;"
            )
        );
        lines.push("}");
        if (theme.scrollbarColor) {
            lines.push(getModifiedScrollbarStyle(theme));
        }
        if (theme.selectionColor) {
            lines.push(getModifiedSelectionStyle(theme));
        }
        return lines.join("\n");
    }
    function getSelectionColor(theme) {
        var backgroundColorSelection;
        var foregroundColorSelection;
        if (theme.selectionColor === "auto") {
            backgroundColorSelection = modifyBackgroundColor(
                {r: 0, g: 96, b: 212},
                __assign(__assign({}, theme), {grayscale: 0})
            );
            foregroundColorSelection = modifyForegroundColor(
                {r: 255, g: 255, b: 255},
                __assign(__assign({}, theme), {grayscale: 0})
            );
        } else {
            var rgb = parseColorWithCache(theme.selectionColor);
            var hsl = rgbToHSL(rgb);
            backgroundColorSelection = theme.selectionColor;
            if (hsl.l < 0.5) {
                foregroundColorSelection = "#FFF";
            } else {
                foregroundColorSelection = "#000";
            }
        }
        return {
            backgroundColorSelection: backgroundColorSelection,
            foregroundColorSelection: foregroundColorSelection
        };
    }
    function getModifiedSelectionStyle(theme) {
        var lines = [];
        var modifiedSelectionColor = getSelectionColor(theme);
        var backgroundColorSelection =
            modifiedSelectionColor.backgroundColorSelection;
        var foregroundColorSelection =
            modifiedSelectionColor.foregroundColorSelection;
        ["::selection", "::-moz-selection"].forEach(function (selection) {
            lines.push("".concat(selection, " {"));
            lines.push(
                "    background-color: ".concat(
                    backgroundColorSelection,
                    " !important;"
                )
            );
            lines.push(
                "    color: ".concat(foregroundColorSelection, " !important;")
            );
            lines.push("}");
        });
        return lines.join("\n");
    }
    function getModifiedScrollbarStyle(theme) {
        var lines = [];
        var colorTrack;
        var colorIcons;
        var colorThumb;
        var colorThumbHover;
        var colorThumbActive;
        var colorCorner;
        if (theme.scrollbarColor === "auto") {
            colorTrack = modifyBackgroundColor({r: 241, g: 241, b: 241}, theme);
            colorIcons = modifyForegroundColor({r: 96, g: 96, b: 96}, theme);
            colorThumb = modifyBackgroundColor({r: 176, g: 176, b: 176}, theme);
            colorThumbHover = modifyBackgroundColor(
                {r: 144, g: 144, b: 144},
                theme
            );
            colorThumbActive = modifyBackgroundColor(
                {r: 96, g: 96, b: 96},
                theme
            );
            colorCorner = modifyBackgroundColor(
                {r: 255, g: 255, b: 255},
                theme
            );
        } else {
            var rgb = parseColorWithCache(theme.scrollbarColor);
            var hsl_1 = rgbToHSL(rgb);
            var isLight = hsl_1.l > 0.5;
            var lighten = function (lighter) {
                return __assign(__assign({}, hsl_1), {
                    l: clamp(hsl_1.l + lighter, 0, 1)
                });
            };
            var darken = function (darker) {
                return __assign(__assign({}, hsl_1), {
                    l: clamp(hsl_1.l - darker, 0, 1)
                });
            };
            colorTrack = hslToString(darken(0.4));
            colorIcons = hslToString(isLight ? darken(0.4) : lighten(0.4));
            colorThumb = hslToString(hsl_1);
            colorThumbHover = hslToString(lighten(0.1));
            colorThumbActive = hslToString(lighten(0.2));
        }
        lines.push("::-webkit-scrollbar {");
        lines.push("    background-color: ".concat(colorTrack, ";"));
        lines.push("    color: ".concat(colorIcons, ";"));
        lines.push("}");
        lines.push("::-webkit-scrollbar-thumb {");
        lines.push("    background-color: ".concat(colorThumb, ";"));
        lines.push("}");
        lines.push("::-webkit-scrollbar-thumb:hover {");
        lines.push("    background-color: ".concat(colorThumbHover, ";"));
        lines.push("}");
        lines.push("::-webkit-scrollbar-thumb:active {");
        lines.push("    background-color: ".concat(colorThumbActive, ";"));
        lines.push("}");
        lines.push("::-webkit-scrollbar-corner {");
        lines.push("    background-color: ".concat(colorCorner, ";"));
        lines.push("}");
        if (isFirefox) {
            lines.push("* {");
            lines.push(
                "    scrollbar-color: "
                    .concat(colorThumb, " ")
                    .concat(colorTrack, ";")
            );
            lines.push("}");
        }
        return lines.join("\n");
    }
    function getModifiedFallbackStyle(filter, _a) {
        var strict = _a.strict;
        var lines = [];
        var isMicrosoft = ["microsoft.com", "docs.microsoft.com"].includes(
            location.hostname
        );
        lines.push(
            "html, body, ".concat(
                strict
                    ? "body :not(iframe)".concat(
                          isMicrosoft
                              ? ':not(div[style^="position:absolute;top:0;left:-"]'
                              : ""
                      )
                    : "body > :not(iframe)",
                " {"
            )
        );
        lines.push(
            "    background-color: ".concat(
                modifyBackgroundColor({r: 255, g: 255, b: 255}, filter),
                " !important;"
            )
        );
        lines.push(
            "    border-color: ".concat(
                modifyBorderColor({r: 64, g: 64, b: 64}, filter),
                " !important;"
            )
        );
        lines.push(
            "    color: ".concat(
                modifyForegroundColor({r: 0, g: 0, b: 0}, filter),
                " !important;"
            )
        );
        lines.push("}");
        return lines.join("\n");
    }
    var unparsableColors = new Set([
        "inherit",
        "transparent",
        "initial",
        "currentcolor",
        "none",
        "unset"
    ]);
    function getColorModifier(prop, value, rule) {
        if (unparsableColors.has(value.toLowerCase())) {
            return value;
        }
        var rgb = parseColorWithCache(value);
        if (!rgb) {
            return null;
        }
        if (prop.includes("background")) {
            if (
                (rule.style.webkitMaskImage &&
                    rule.style.webkitMaskImage !== "none") ||
                (rule.style.webkitMask &&
                    !rule.style.webkitMask.startsWith("none")) ||
                (rule.style.mask && rule.style.mask !== "none") ||
                (rule.style.getPropertyValue("mask-image") &&
                    rule.style.getPropertyValue("mask-image") !== "none")
            ) {
                return function (filter) {
                    return modifyForegroundColor(rgb, filter);
                };
            }
            return function (filter) {
                return modifyBackgroundColor(rgb, filter);
            };
        }
        if (prop.includes("border") || prop.includes("outline")) {
            return function (filter) {
                return modifyBorderColor(rgb, filter);
            };
        }
        return function (filter) {
            return modifyForegroundColor(rgb, filter);
        };
    }
    var imageDetailsCache = new Map();
    var awaitingForImageLoading = new Map();
    function shouldIgnoreImage(selectorText, selectors) {
        if (!selectorText || selectors.length === 0) {
            return false;
        }
        if (
            selectors.some(function (s) {
                return s === "*";
            })
        ) {
            return true;
        }
        var ruleSelectors = selectorText.split(/,\s*/g);
        var _loop_1 = function (i) {
            var ignoredSelector = selectors[i];
            if (
                ruleSelectors.some(function (s) {
                    return s === ignoredSelector;
                })
            ) {
                return {value: true};
            }
        };
        for (var i = 0; i < selectors.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object") return state_1.value;
        }
        return false;
    }
    function getBgImageModifier(
        value,
        rule,
        ignoreImageSelectors,
        isCancelled
    ) {
        var _this = this;
        try {
            var gradients = parseGradient(value);
            var urls = getMatches(cssURLRegex, value);
            if (urls.length === 0 && gradients.length === 0) {
                return value;
            }
            var getIndices = function (matches) {
                var index = 0;
                return matches.map(function (match) {
                    var valueIndex = value.indexOf(match, index);
                    index = valueIndex + match.length;
                    return {match: match, index: valueIndex};
                });
            };
            var matches_1 = gradients
                .map(function (i) {
                    return __assign({type: "gradient"}, i);
                })
                .concat(
                    getIndices(urls).map(function (i) {
                        return __assign({type: "url", offset: 0}, i);
                    })
                )
                .sort(function (a, b) {
                    return a.index > b.index ? 1 : -1;
                });
            var getGradientModifier_1 = function (gradient) {
                var typeGradient = gradient.typeGradient,
                    match = gradient.match,
                    hasComma = gradient.hasComma;
                var partsRegex =
                    /([^\(\),]+(\([^\(\)]*(\([^\(\)]*\)*[^\(\)]*)?\))?([^\(\), ]|( (?!calc)))*),?/g;
                var colorStopRegex =
                    /^(from|color-stop|to)\(([^\(\)]*?,\s*)?(.*?)\)$/;
                var parts = getMatches(partsRegex, match, 1).map(function (
                    part
                ) {
                    part = part.trim();
                    var rgb = parseColorWithCache(part);
                    if (rgb) {
                        return function (filter) {
                            return modifyGradientColor(rgb, filter);
                        };
                    }
                    var space = part.lastIndexOf(" ");
                    rgb = parseColorWithCache(part.substring(0, space));
                    if (rgb) {
                        return function (filter) {
                            return ""
                                .concat(modifyGradientColor(rgb, filter), " ")
                                .concat(part.substring(space + 1));
                        };
                    }
                    var colorStopMatch = part.match(colorStopRegex);
                    if (colorStopMatch) {
                        rgb = parseColorWithCache(colorStopMatch[3]);
                        if (rgb) {
                            return function (filter) {
                                return ""
                                    .concat(colorStopMatch[1], "(")
                                    .concat(
                                        colorStopMatch[2]
                                            ? "".concat(colorStopMatch[2], ", ")
                                            : ""
                                    )
                                    .concat(
                                        modifyGradientColor(rgb, filter),
                                        ")"
                                    );
                            };
                        }
                    }
                    return function () {
                        return part;
                    };
                });
                return function (filter) {
                    return ""
                        .concat(typeGradient, "(")
                        .concat(
                            parts
                                .map(function (modify) {
                                    return modify(filter);
                                })
                                .join(", "),
                            ")"
                        )
                        .concat(hasComma ? ", " : "");
                };
            };
            var getURLModifier_1 = function (urlValue) {
                var _a;
                if (
                    shouldIgnoreImage(rule.selectorText, ignoreImageSelectors)
                ) {
                    return null;
                }
                var url = getCSSURLValue(urlValue);
                var isURLEmpty = url.length === 0;
                var parentStyleSheet = rule.parentStyleSheet;
                var baseURL =
                    parentStyleSheet && parentStyleSheet.href
                        ? getCSSBaseBath(parentStyleSheet.href)
                        : ((_a = parentStyleSheet.ownerNode) === null ||
                          _a === void 0
                              ? void 0
                              : _a.baseURI) || location.origin;
                url = getAbsoluteURL(baseURL, url);
                var absoluteValue = 'url("'.concat(url, '")');
                return function (filter) {
                    return __awaiter(_this, void 0, void 0, function () {
                        var imageDetails, awaiters_1, err_1, bgImageValue;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (isURLEmpty) {
                                        return [2, "url('')"];
                                    }
                                    if (!imageDetailsCache.has(url))
                                        return [3, 1];
                                    imageDetails = imageDetailsCache.get(url);
                                    return [3, 7];
                                case 1:
                                    _a.trys.push([1, 6, , 7]);
                                    if (!awaitingForImageLoading.has(url))
                                        return [3, 3];
                                    awaiters_1 =
                                        awaitingForImageLoading.get(url);
                                    return [
                                        4,
                                        new Promise(function (resolve) {
                                            return awaiters_1.push(resolve);
                                        })
                                    ];
                                case 2:
                                    imageDetails = _a.sent();
                                    if (!imageDetails) {
                                        return [2, null];
                                    }
                                    return [3, 5];
                                case 3:
                                    awaitingForImageLoading.set(url, []);
                                    return [4, getImageDetails(url)];
                                case 4:
                                    imageDetails = _a.sent();
                                    imageDetailsCache.set(url, imageDetails);
                                    awaitingForImageLoading
                                        .get(url)
                                        .forEach(function (resolve) {
                                            return resolve(imageDetails);
                                        });
                                    awaitingForImageLoading.delete(url);
                                    _a.label = 5;
                                case 5:
                                    if (isCancelled()) {
                                        return [2, null];
                                    }
                                    return [3, 7];
                                case 6:
                                    err_1 = _a.sent();
                                    logWarn(err_1);
                                    if (awaitingForImageLoading.has(url)) {
                                        awaitingForImageLoading
                                            .get(url)
                                            .forEach(function (resolve) {
                                                return resolve(null);
                                            });
                                        awaitingForImageLoading.delete(url);
                                    }
                                    return [2, absoluteValue];
                                case 7:
                                    bgImageValue =
                                        getBgImageValue_1(
                                            imageDetails,
                                            filter
                                        ) || absoluteValue;
                                    return [2, bgImageValue];
                            }
                        });
                    });
                };
            };
            var getBgImageValue_1 = function (imageDetails, filter) {
                var isDark = imageDetails.isDark,
                    isLight = imageDetails.isLight,
                    isTransparent = imageDetails.isTransparent,
                    isLarge = imageDetails.isLarge,
                    isTooLarge = imageDetails.isTooLarge,
                    width = imageDetails.width;
                var result;
                if (isTooLarge) {
                    result = 'url("'.concat(imageDetails.src, '")');
                } else if (
                    isDark &&
                    isTransparent &&
                    filter.mode === 1 &&
                    !isLarge &&
                    width > 2
                ) {
                    logInfo("Inverting dark image ".concat(imageDetails.src));
                    var inverted = getFilteredImageDataURL(
                        imageDetails,
                        __assign(__assign({}, filter), {
                            sepia: clamp(filter.sepia + 10, 0, 100)
                        })
                    );
                    result = 'url("'.concat(inverted, '")');
                } else if (isLight && !isTransparent && filter.mode === 1) {
                    if (isLarge) {
                        result = "none";
                    } else {
                        logInfo(
                            "Dimming light image ".concat(imageDetails.src)
                        );
                        var dimmed = getFilteredImageDataURL(
                            imageDetails,
                            filter
                        );
                        result = 'url("'.concat(dimmed, '")');
                    }
                } else if (filter.mode === 0 && isLight && !isLarge) {
                    logInfo(
                        "Applying filter to image ".concat(imageDetails.src)
                    );
                    var filtered = getFilteredImageDataURL(
                        imageDetails,
                        __assign(__assign({}, filter), {
                            brightness: clamp(filter.brightness - 10, 5, 200),
                            sepia: clamp(filter.sepia + 10, 0, 100)
                        })
                    );
                    result = 'url("'.concat(filtered, '")');
                } else {
                    result = null;
                }
                return result;
            };
            var modifiers_1 = [];
            var matchIndex_1 = 0;
            var prevHasComma_1 = false;
            matches_1.forEach(function (_a, i) {
                var type = _a.type,
                    match = _a.match,
                    index = _a.index,
                    typeGradient = _a.typeGradient,
                    hasComma = _a.hasComma,
                    offset = _a.offset;
                var matchStart = index;
                var prefixStart = matchIndex_1;
                var matchEnd = matchStart + match.length + offset;
                matchIndex_1 = matchEnd;
                if (prefixStart !== matchStart) {
                    if (prevHasComma_1) {
                        modifiers_1.push(function () {
                            var betweenValue = value.substring(
                                prefixStart,
                                matchStart
                            );
                            if (betweenValue[0] === ",") {
                                betweenValue = betweenValue.substring(1);
                            }
                            return betweenValue;
                        });
                    } else {
                        modifiers_1.push(function () {
                            return value.substring(prefixStart, matchStart);
                        });
                    }
                }
                prevHasComma_1 = hasComma || false;
                if (type === "url") {
                    modifiers_1.push(getURLModifier_1(match));
                } else if (type === "gradient") {
                    modifiers_1.push(
                        getGradientModifier_1({
                            match: match,
                            index: index,
                            typeGradient: typeGradient,
                            hasComma: hasComma,
                            offset: offset
                        })
                    );
                }
                if (i === matches_1.length - 1) {
                    modifiers_1.push(function () {
                        return value.substring(matchEnd);
                    });
                }
            });
            return function (filter) {
                var results = modifiers_1
                    .filter(Boolean)
                    .map(function (modify) {
                        return modify(filter);
                    });
                if (
                    results.some(function (r) {
                        return r instanceof Promise;
                    })
                ) {
                    return Promise.all(results).then(function (asyncResults) {
                        return asyncResults.filter(Boolean).join("");
                    });
                }
                var combinedResult = results.join("");
                if (combinedResult.endsWith(", initial")) {
                    return combinedResult.slice(0, -9);
                }
                return combinedResult;
            };
        } catch (err) {
            return null;
        }
    }
    function getShadowModifierWithInfo(value) {
        try {
            var index_1 = 0;
            var colorMatches_1 = getMatches(
                /(^|\s)(?!calc)([a-z]+\(.+?\)|#[0-9a-f]+|[a-z]+)(.*?(inset|outset)?($|,))/gi,
                value,
                2
            );
            var notParsed_1 = 0;
            var modifiers_2 = colorMatches_1.map(function (match, i) {
                var prefixIndex = index_1;
                var matchIndex = value.indexOf(match, index_1);
                var matchEnd = matchIndex + match.length;
                index_1 = matchEnd;
                var rgb = parseColorWithCache(match);
                if (!rgb) {
                    notParsed_1++;
                    return function () {
                        return value.substring(prefixIndex, matchEnd);
                    };
                }
                return function (filter) {
                    return ""
                        .concat(value.substring(prefixIndex, matchIndex))
                        .concat(modifyShadowColor(rgb, filter))
                        .concat(
                            i === colorMatches_1.length - 1
                                ? value.substring(matchEnd)
                                : ""
                        );
                };
            });
            return function (filter) {
                var modified = modifiers_2
                    .map(function (modify) {
                        return modify(filter);
                    })
                    .join("");
                return {
                    matchesLength: colorMatches_1.length,
                    unparseableMatchesLength: notParsed_1,
                    result: modified
                };
            };
        } catch (err) {
            return null;
        }
    }
    function getShadowModifier(value) {
        var shadowModifier = getShadowModifierWithInfo(value);
        if (!shadowModifier) {
            return null;
        }
        return function (theme) {
            return shadowModifier(theme).result;
        };
    }
    function getVariableModifier(
        variablesStore,
        prop,
        value,
        rule,
        ignoredImgSelectors,
        isCancelled
    ) {
        return variablesStore.getModifierForVariable({
            varName: prop,
            sourceValue: value,
            rule: rule,
            ignoredImgSelectors: ignoredImgSelectors,
            isCancelled: isCancelled
        });
    }
    function getVariableDependantModifier(variablesStore, prop, value) {
        return variablesStore.getModifierForVarDependant(prop, value);
    }
    function cleanModificationCache() {
        clearColorModificationCache();
        imageDetailsCache.clear();
        cleanImageProcessingCache();
        awaitingForImageLoading.clear();
    }

    var VAR_TYPE_BGCOLOR = 1 << 0;
    var VAR_TYPE_TEXTCOLOR = 1 << 1;
    var VAR_TYPE_BORDERCOLOR = 1 << 2;
    var VAR_TYPE_BGIMG = 1 << 3;
    var VariablesStore = (function () {
        function VariablesStore() {
            this.varTypes = new Map();
            this.rulesQueue = [];
            this.definedVars = new Set();
            this.varRefs = new Map();
            this.unknownColorVars = new Set();
            this.unknownBgVars = new Set();
            this.undefinedVars = new Set();
            this.initialVarTypes = new Map();
            this.changedTypeVars = new Set();
            this.typeChangeSubscriptions = new Map();
            this.unstableVarValues = new Map();
        }
        VariablesStore.prototype.clear = function () {
            this.varTypes.clear();
            this.rulesQueue.splice(0);
            this.definedVars.clear();
            this.varRefs.clear();
            this.unknownColorVars.clear();
            this.unknownBgVars.clear();
            this.undefinedVars.clear();
            this.initialVarTypes.clear();
            this.changedTypeVars.clear();
            this.typeChangeSubscriptions.clear();
            this.unstableVarValues.clear();
        };
        VariablesStore.prototype.isVarType = function (varName, typeNum) {
            return (
                this.varTypes.has(varName) &&
                (this.varTypes.get(varName) & typeNum) > 0
            );
        };
        VariablesStore.prototype.addRulesForMatching = function (rules) {
            this.rulesQueue.push(rules);
        };
        VariablesStore.prototype.matchVariablesAndDependants = function () {
            var _this = this;
            this.changedTypeVars.clear();
            this.initialVarTypes = new Map(this.varTypes);
            this.collectRootVariables();
            this.collectVariablesAndVarDep(this.rulesQueue);
            this.rulesQueue.splice(0);
            this.collectRootVarDependants();
            this.varRefs.forEach(function (refs, v) {
                refs.forEach(function (r) {
                    if (_this.varTypes.has(v)) {
                        _this.resolveVariableType(r, _this.varTypes.get(v));
                    }
                });
            });
            this.unknownColorVars.forEach(function (v) {
                if (_this.unknownBgVars.has(v)) {
                    _this.unknownColorVars.delete(v);
                    _this.unknownBgVars.delete(v);
                    _this.resolveVariableType(v, VAR_TYPE_BGCOLOR);
                } else if (
                    _this.isVarType(
                        v,
                        VAR_TYPE_BGCOLOR |
                            VAR_TYPE_TEXTCOLOR |
                            VAR_TYPE_BORDERCOLOR
                    )
                ) {
                    _this.unknownColorVars.delete(v);
                } else {
                    _this.undefinedVars.add(v);
                }
            });
            this.unknownBgVars.forEach(function (v) {
                var hasColor =
                    _this.findVarRef(v, function (ref) {
                        return (
                            _this.unknownColorVars.has(ref) ||
                            _this.isVarType(
                                ref,
                                VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR
                            )
                        );
                    }) != null;
                if (hasColor) {
                    _this.itarateVarRefs(v, function (ref) {
                        _this.resolveVariableType(ref, VAR_TYPE_BGCOLOR);
                    });
                } else if (
                    _this.isVarType(v, VAR_TYPE_BGCOLOR | VAR_TYPE_BGIMG)
                ) {
                    _this.unknownBgVars.delete(v);
                } else {
                    _this.undefinedVars.add(v);
                }
            });
            this.changedTypeVars.forEach(function (varName) {
                if (_this.typeChangeSubscriptions.has(varName)) {
                    _this.typeChangeSubscriptions
                        .get(varName)
                        .forEach(function (callback) {
                            callback();
                        });
                }
            });
            this.changedTypeVars.clear();
        };
        VariablesStore.prototype.getModifierForVariable = function (options) {
            var _this = this;
            return function (theme) {
                var varName = options.varName,
                    sourceValue = options.sourceValue,
                    rule = options.rule,
                    ignoredImgSelectors = options.ignoredImgSelectors,
                    isCancelled = options.isCancelled;
                var getDeclarations = function () {
                    var declarations = [];
                    var addModifiedValue = function (
                        typeNum,
                        varNameWrapper,
                        colorModifier
                    ) {
                        if (!_this.isVarType(varName, typeNum)) {
                            return;
                        }
                        var property = varNameWrapper(varName);
                        var modifiedValue;
                        if (isVarDependant(sourceValue)) {
                            if (isConstructedColorVar(sourceValue)) {
                                var value = insertVarValues(
                                    sourceValue,
                                    _this.unstableVarValues
                                );
                                if (!value) {
                                    value =
                                        typeNum === VAR_TYPE_BGCOLOR
                                            ? "#ffffff"
                                            : "#000000";
                                }
                                modifiedValue = colorModifier(value, theme);
                            } else {
                                modifiedValue = replaceCSSVariablesNames(
                                    sourceValue,
                                    function (v) {
                                        return varNameWrapper(v);
                                    },
                                    function (fallback) {
                                        return colorModifier(fallback, theme);
                                    }
                                );
                            }
                        } else {
                            modifiedValue = colorModifier(sourceValue, theme);
                        }
                        declarations.push({
                            property: property,
                            value: modifiedValue
                        });
                    };
                    addModifiedValue(
                        VAR_TYPE_BGCOLOR,
                        wrapBgColorVariableName,
                        tryModifyBgColor
                    );
                    addModifiedValue(
                        VAR_TYPE_TEXTCOLOR,
                        wrapTextColorVariableName,
                        tryModifyTextColor
                    );
                    addModifiedValue(
                        VAR_TYPE_BORDERCOLOR,
                        wrapBorderColorVariableName,
                        tryModifyBorderColor
                    );
                    if (_this.isVarType(varName, VAR_TYPE_BGIMG)) {
                        var property = wrapBgImgVariableName(varName);
                        var modifiedValue = sourceValue;
                        if (isVarDependant(sourceValue)) {
                            modifiedValue = replaceCSSVariablesNames(
                                sourceValue,
                                function (v) {
                                    return wrapBgColorVariableName(v);
                                },
                                function (fallback) {
                                    return tryModifyBgColor(fallback, theme);
                                }
                            );
                        }
                        var bgModifier = getBgImageModifier(
                            modifiedValue,
                            rule,
                            ignoredImgSelectors,
                            isCancelled
                        );
                        modifiedValue =
                            typeof bgModifier === "function"
                                ? bgModifier(theme)
                                : bgModifier;
                        declarations.push({
                            property: property,
                            value: modifiedValue
                        });
                    }
                    return declarations;
                };
                var callbacks = new Set();
                var addListener = function (onTypeChange) {
                    var callback = function () {
                        var decs = getDeclarations();
                        onTypeChange(decs);
                    };
                    callbacks.add(callback);
                    _this.subscribeForVarTypeChange(varName, callback);
                };
                var removeListeners = function () {
                    callbacks.forEach(function (callback) {
                        _this.unsubscribeFromVariableTypeChanges(
                            varName,
                            callback
                        );
                    });
                };
                return {
                    declarations: getDeclarations(),
                    onTypeChange: {
                        addListener: addListener,
                        removeListeners: removeListeners
                    }
                };
            };
        };
        VariablesStore.prototype.getModifierForVarDependant = function (
            property,
            sourceValue
        ) {
            var _this = this;
            if (sourceValue.match(/^\s*(rgb|hsl)a?\(/)) {
                var isBg_1 = property.startsWith("background");
                var isText_1 = isTextColorProperty(property);
                return function (theme) {
                    var value = insertVarValues(
                        sourceValue,
                        _this.unstableVarValues
                    );
                    if (!value) {
                        value = isBg_1 ? "#ffffff" : "#000000";
                    }
                    var modifier = isBg_1
                        ? tryModifyBgColor
                        : isText_1
                        ? tryModifyTextColor
                        : tryModifyBorderColor;
                    return modifier(value, theme);
                };
            }
            if (property === "background-color") {
                return function (theme) {
                    return replaceCSSVariablesNames(
                        sourceValue,
                        function (v) {
                            return wrapBgColorVariableName(v);
                        },
                        function (fallback) {
                            return tryModifyBgColor(fallback, theme);
                        }
                    );
                };
            }
            if (isTextColorProperty(property)) {
                return function (theme) {
                    return replaceCSSVariablesNames(
                        sourceValue,
                        function (v) {
                            return wrapTextColorVariableName(v);
                        },
                        function (fallback) {
                            return tryModifyTextColor(fallback, theme);
                        }
                    );
                };
            }
            if (
                property === "background" ||
                property === "background-image" ||
                property === "box-shadow"
            ) {
                return function (theme) {
                    var unknownVars = new Set();
                    var modify = function () {
                        var variableReplaced = replaceCSSVariablesNames(
                            sourceValue,
                            function (v) {
                                if (_this.isVarType(v, VAR_TYPE_BGCOLOR)) {
                                    return wrapBgColorVariableName(v);
                                }
                                if (_this.isVarType(v, VAR_TYPE_BGIMG)) {
                                    return wrapBgImgVariableName(v);
                                }
                                unknownVars.add(v);
                                return v;
                            },
                            function (fallback) {
                                return tryModifyBgColor(fallback, theme);
                            }
                        );
                        if (property === "box-shadow") {
                            var shadowModifier =
                                getShadowModifierWithInfo(variableReplaced);
                            var modifiedShadow = shadowModifier(theme);
                            if (
                                modifiedShadow.unparseableMatchesLength !==
                                modifiedShadow.matchesLength
                            ) {
                                return modifiedShadow.result;
                            }
                        }
                        return variableReplaced;
                    };
                    var modified = modify();
                    if (unknownVars.size > 0) {
                        return new Promise(function (resolve) {
                            var firstUnknownVar = unknownVars
                                .values()
                                .next().value;
                            var callback = function () {
                                _this.unsubscribeFromVariableTypeChanges(
                                    firstUnknownVar,
                                    callback
                                );
                                var newValue = modify();
                                resolve(newValue);
                            };
                            _this.subscribeForVarTypeChange(
                                firstUnknownVar,
                                callback
                            );
                        });
                    }
                    return modified;
                };
            }
            if (
                property.startsWith("border") ||
                property.startsWith("outline")
            ) {
                return function (theme) {
                    return replaceCSSVariablesNames(
                        sourceValue,
                        function (v) {
                            return wrapBorderColorVariableName(v);
                        },
                        function (fallback) {
                            return tryModifyBorderColor(fallback, theme);
                        }
                    );
                };
            }
            return null;
        };
        VariablesStore.prototype.subscribeForVarTypeChange = function (
            varName,
            callback
        ) {
            if (!this.typeChangeSubscriptions.has(varName)) {
                this.typeChangeSubscriptions.set(varName, new Set());
            }
            var rootStore = this.typeChangeSubscriptions.get(varName);
            if (!rootStore.has(callback)) {
                rootStore.add(callback);
            }
        };
        VariablesStore.prototype.unsubscribeFromVariableTypeChanges = function (
            varName,
            callback
        ) {
            if (this.typeChangeSubscriptions.has(varName)) {
                this.typeChangeSubscriptions.get(varName).delete(callback);
            }
        };
        VariablesStore.prototype.collectVariablesAndVarDep = function (
            ruleList
        ) {
            var _this = this;
            ruleList.forEach(function (rules) {
                iterateCSSRules(rules, function (rule) {
                    rule.style &&
                        iterateCSSDeclarations(
                            rule.style,
                            function (property, value) {
                                if (isVariable(property)) {
                                    _this.inspectVariable(property, value);
                                }
                                if (isVarDependant(value)) {
                                    _this.inspectVarDependant(property, value);
                                }
                            }
                        );
                });
            });
        };
        VariablesStore.prototype.collectRootVariables = function () {
            var _this = this;
            iterateCSSDeclarations(
                document.documentElement.style,
                function (property, value) {
                    if (isVariable(property)) {
                        _this.inspectVariable(property, value);
                    }
                }
            );
        };
        VariablesStore.prototype.inspectVariable = function (varName, value) {
            this.unstableVarValues.set(varName, value);
            if (isVarDependant(value) && isConstructedColorVar(value)) {
                this.unknownColorVars.add(varName);
                this.definedVars.add(varName);
            }
            if (this.definedVars.has(varName)) {
                return;
            }
            this.definedVars.add(varName);
            var color = parseColorWithCache(value);
            if (color) {
                this.unknownColorVars.add(varName);
            } else if (
                value.includes("url(") ||
                value.includes("linear-gradient(") ||
                value.includes("radial-gradient(")
            ) {
                this.resolveVariableType(varName, VAR_TYPE_BGIMG);
            }
        };
        VariablesStore.prototype.resolveVariableType = function (
            varName,
            typeNum
        ) {
            var initialType = this.initialVarTypes.get(varName) || 0;
            var currentType = this.varTypes.get(varName) || 0;
            var newType = currentType | typeNum;
            this.varTypes.set(varName, newType);
            if (newType !== initialType || this.undefinedVars.has(varName)) {
                this.changedTypeVars.add(varName);
                this.undefinedVars.delete(varName);
            }
            this.unknownColorVars.delete(varName);
            this.unknownBgVars.delete(varName);
        };
        VariablesStore.prototype.collectRootVarDependants = function () {
            var _this = this;
            iterateCSSDeclarations(
                document.documentElement.style,
                function (property, value) {
                    if (isVarDependant(value)) {
                        _this.inspectVarDependant(property, value);
                    }
                }
            );
        };
        VariablesStore.prototype.inspectVarDependant = function (
            property,
            value
        ) {
            var _this = this;
            if (isVariable(property)) {
                this.iterateVarDeps(value, function (ref) {
                    if (!_this.varRefs.has(property)) {
                        _this.varRefs.set(property, new Set());
                    }
                    _this.varRefs.get(property).add(ref);
                });
            } else if (
                property === "background-color" ||
                property === "box-shadow"
            ) {
                this.iterateVarDeps(value, function (v) {
                    return _this.resolveVariableType(v, VAR_TYPE_BGCOLOR);
                });
            } else if (isTextColorProperty(property)) {
                this.iterateVarDeps(value, function (v) {
                    return _this.resolveVariableType(v, VAR_TYPE_TEXTCOLOR);
                });
            } else if (
                property.startsWith("border") ||
                property.startsWith("outline")
            ) {
                this.iterateVarDeps(value, function (v) {
                    return _this.resolveVariableType(v, VAR_TYPE_BORDERCOLOR);
                });
            } else if (
                property === "background" ||
                property === "background-image"
            ) {
                this.iterateVarDeps(value, function (v) {
                    if (_this.isVarType(v, VAR_TYPE_BGCOLOR | VAR_TYPE_BGIMG)) {
                        return;
                    }
                    var isBgColor =
                        _this.findVarRef(v, function (ref) {
                            return (
                                _this.unknownColorVars.has(ref) ||
                                _this.isVarType(
                                    ref,
                                    VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR
                                )
                            );
                        }) != null;
                    _this.itarateVarRefs(v, function (ref) {
                        if (isBgColor) {
                            _this.resolveVariableType(ref, VAR_TYPE_BGCOLOR);
                        } else {
                            _this.unknownBgVars.add(ref);
                        }
                    });
                });
            }
        };
        VariablesStore.prototype.iterateVarDeps = function (value, iterator) {
            var varDeps = new Set();
            iterateVarDependencies(value, function (v) {
                return varDeps.add(v);
            });
            varDeps.forEach(function (v) {
                return iterator(v);
            });
        };
        VariablesStore.prototype.findVarRef = function (
            varName,
            iterator,
            stack
        ) {
            var e_1, _a;
            if (stack === void 0) {
                stack = new Set();
            }
            if (stack.has(varName)) {
                return null;
            }
            stack.add(varName);
            var result = iterator(varName);
            if (result) {
                return varName;
            }
            var refs = this.varRefs.get(varName);
            if (!refs || refs.size === 0) {
                return null;
            }
            try {
                for (
                    var refs_1 = __values(refs), refs_1_1 = refs_1.next();
                    !refs_1_1.done;
                    refs_1_1 = refs_1.next()
                ) {
                    var ref = refs_1_1.value;
                    var found = this.findVarRef(ref, iterator, stack);
                    if (found) {
                        return found;
                    }
                }
            } catch (e_1_1) {
                e_1 = {error: e_1_1};
            } finally {
                try {
                    if (refs_1_1 && !refs_1_1.done && (_a = refs_1.return))
                        _a.call(refs_1);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
            return null;
        };
        VariablesStore.prototype.itarateVarRefs = function (varName, iterator) {
            this.findVarRef(varName, function (ref) {
                iterator(ref);
                return false;
            });
        };
        VariablesStore.prototype.setOnRootVariableChange = function (callback) {
            this.onRootVariableDefined = callback;
        };
        VariablesStore.prototype.putRootVars = function (styleElement, theme) {
            var e_2, _a;
            var _this = this;
            var sheet = styleElement.sheet;
            if (sheet.cssRules.length > 0) {
                sheet.deleteRule(0);
            }
            var declarations = new Map();
            iterateCSSDeclarations(
                document.documentElement.style,
                function (property, value) {
                    if (isVariable(property)) {
                        if (_this.isVarType(property, VAR_TYPE_BGCOLOR)) {
                            declarations.set(
                                wrapBgColorVariableName(property),
                                tryModifyBgColor(value, theme)
                            );
                        }
                        if (_this.isVarType(property, VAR_TYPE_TEXTCOLOR)) {
                            declarations.set(
                                wrapTextColorVariableName(property),
                                tryModifyTextColor(value, theme)
                            );
                        }
                        if (_this.isVarType(property, VAR_TYPE_BORDERCOLOR)) {
                            declarations.set(
                                wrapBorderColorVariableName(property),
                                tryModifyBorderColor(value, theme)
                            );
                        }
                        _this.subscribeForVarTypeChange(
                            property,
                            _this.onRootVariableDefined
                        );
                    }
                }
            );
            var cssLines = [];
            cssLines.push(":root {");
            try {
                for (
                    var declarations_1 = __values(declarations),
                        declarations_1_1 = declarations_1.next();
                    !declarations_1_1.done;
                    declarations_1_1 = declarations_1.next()
                ) {
                    var _b = __read(declarations_1_1.value, 2),
                        property = _b[0],
                        value = _b[1];
                    cssLines.push(
                        "    ".concat(property, ": ").concat(value, ";")
                    );
                }
            } catch (e_2_1) {
                e_2 = {error: e_2_1};
            } finally {
                try {
                    if (
                        declarations_1_1 &&
                        !declarations_1_1.done &&
                        (_a = declarations_1.return)
                    )
                        _a.call(declarations_1);
                } finally {
                    if (e_2) throw e_2.error;
                }
            }
            cssLines.push("}");
            var cssText = cssLines.join("\n");
            sheet.insertRule(cssText);
        };
        return VariablesStore;
    })();
    var variablesStore = new VariablesStore();
    function getVariableRange(input, searchStart) {
        if (searchStart === void 0) {
            searchStart = 0;
        }
        var start = input.indexOf("var(", searchStart);
        if (start >= 0) {
            var range = getParenthesesRange(input, start + 3);
            if (range) {
                return {start: start, end: range.end};
            }
            return null;
        }
    }
    function getVariablesMatches(input) {
        var ranges = [];
        var i = 0;
        var range;
        while ((range = getVariableRange(input, i))) {
            var start = range.start,
                end = range.end;
            ranges.push({
                start: start,
                end: end,
                value: input.substring(start, end)
            });
            i = range.end + 1;
        }
        return ranges;
    }
    function replaceVariablesMatches(input, replacer) {
        var matches = getVariablesMatches(input);
        var matchesCount = matches.length;
        if (matchesCount === 0) {
            return input;
        }
        var inputLength = input.length;
        var replacements = matches.map(function (m) {
            return replacer(m.value);
        });
        var parts = [];
        parts.push(input.substring(0, matches[0].start));
        for (var i = 0; i < matchesCount; i++) {
            parts.push(replacements[i]);
            var start = matches[i].end;
            var end = i < matchesCount - 1 ? matches[i + 1].start : inputLength;
            parts.push(input.substring(start, end));
        }
        return parts.join("");
    }
    function getVariableNameAndFallback(match) {
        var commaIndex = match.indexOf(",");
        var name;
        var fallback;
        if (commaIndex >= 0) {
            name = match.substring(4, commaIndex).trim();
            fallback = match.substring(commaIndex + 1, match.length - 1).trim();
        } else {
            name = match.substring(4, match.length - 1).trim();
            fallback = "";
        }
        return {name: name, fallback: fallback};
    }
    function replaceCSSVariablesNames(value, nameReplacer, fallbackReplacer) {
        var matchReplacer = function (match) {
            var _a = getVariableNameAndFallback(match),
                name = _a.name,
                fallback = _a.fallback;
            var newName = nameReplacer(name);
            if (!fallback) {
                return "var(".concat(newName, ")");
            }
            var newFallback;
            if (isVarDependant(fallback)) {
                newFallback = replaceCSSVariablesNames(
                    fallback,
                    nameReplacer,
                    fallbackReplacer
                );
            } else if (fallbackReplacer) {
                newFallback = fallbackReplacer(fallback);
            } else {
                newFallback = fallback;
            }
            return "var(".concat(newName, ", ").concat(newFallback, ")");
        };
        return replaceVariablesMatches(value, matchReplacer);
    }
    function iterateVarDependencies(value, iterator) {
        replaceCSSVariablesNames(value, function (varName) {
            iterator(varName);
            return varName;
        });
    }
    function wrapBgColorVariableName(name) {
        return "--darkreader-bg".concat(name);
    }
    function wrapTextColorVariableName(name) {
        return "--darkreader-text".concat(name);
    }
    function wrapBorderColorVariableName(name) {
        return "--darkreader-border".concat(name);
    }
    function wrapBgImgVariableName(name) {
        return "--darkreader-bgimg".concat(name);
    }
    function isVariable(property) {
        return property.startsWith("--");
    }
    function isVarDependant(value) {
        return value.includes("var(");
    }
    function isConstructedColorVar(value) {
        return value.match(/^\s*(rgb|hsl)a?\(/);
    }
    function isTextColorProperty(property) {
        return (
            property === "color" ||
            property === "caret-color" ||
            property === "-webkit-text-fill-color"
        );
    }
    var rawValueRegex = /^\d{1,3}, ?\d{1,3}, ?\d{1,3}$/;
    function parseRawValue(color) {
        if (rawValueRegex.test(color)) {
            var splitted = color.split(",");
            var resultInRGB_1 = "rgb(";
            splitted.forEach(function (number) {
                resultInRGB_1 += "".concat(number.trim(), ", ");
            });
            resultInRGB_1 = resultInRGB_1.substring(
                0,
                resultInRGB_1.length - 2
            );
            resultInRGB_1 += ")";
            return {isRaw: true, color: resultInRGB_1};
        }
        return {isRaw: false, color: color};
    }
    function handleRawValue(color, theme, modifyFunction) {
        var _a = parseRawValue(color),
            isRaw = _a.isRaw,
            newColor = _a.color;
        var rgb = parseColorWithCache(newColor);
        if (rgb) {
            var outputColor = modifyFunction(rgb, theme);
            if (isRaw) {
                var outputInRGB = parseColorWithCache(outputColor);
                return outputInRGB
                    ? ""
                          .concat(outputInRGB.r, ", ")
                          .concat(outputInRGB.g, ", ")
                          .concat(outputInRGB.b)
                    : outputColor;
            }
            return outputColor;
        }
        return newColor;
    }
    function tryModifyBgColor(color, theme) {
        return handleRawValue(color, theme, modifyBackgroundColor);
    }
    function tryModifyTextColor(color, theme) {
        return handleRawValue(color, theme, modifyForegroundColor);
    }
    function tryModifyBorderColor(color, theme) {
        return handleRawValue(color, theme, modifyBorderColor);
    }
    function insertVarValues(source, varValues, stack) {
        if (stack === void 0) {
            stack = new Set();
        }
        var containsUnresolvedVar = false;
        var matchReplacer = function (match) {
            var _a = getVariableNameAndFallback(match),
                name = _a.name,
                fallback = _a.fallback;
            if (stack.has(name)) {
                containsUnresolvedVar = true;
                return null;
            }
            stack.add(name);
            var varValue = varValues.get(name) || fallback;
            var inserted = null;
            if (varValue) {
                if (isVarDependant(varValue)) {
                    inserted = insertVarValues(varValue, varValues, stack);
                } else {
                    inserted = varValue;
                }
            }
            if (!inserted) {
                containsUnresolvedVar = true;
                return null;
            }
            return inserted;
        };
        var replaced = replaceVariablesMatches(source, matchReplacer);
        if (containsUnresolvedVar) {
            return null;
        }
        return replaced;
    }

    var overrides = {
        "background-color": {
            customProp: "--darkreader-inline-bgcolor",
            cssProp: "background-color",
            dataAttr: "data-darkreader-inline-bgcolor"
        },
        "background-image": {
            customProp: "--darkreader-inline-bgimage",
            cssProp: "background-image",
            dataAttr: "data-darkreader-inline-bgimage"
        },
        "border-color": {
            customProp: "--darkreader-inline-border",
            cssProp: "border-color",
            dataAttr: "data-darkreader-inline-border"
        },
        "border-bottom-color": {
            customProp: "--darkreader-inline-border-bottom",
            cssProp: "border-bottom-color",
            dataAttr: "data-darkreader-inline-border-bottom"
        },
        "border-left-color": {
            customProp: "--darkreader-inline-border-left",
            cssProp: "border-left-color",
            dataAttr: "data-darkreader-inline-border-left"
        },
        "border-right-color": {
            customProp: "--darkreader-inline-border-right",
            cssProp: "border-right-color",
            dataAttr: "data-darkreader-inline-border-right"
        },
        "border-top-color": {
            customProp: "--darkreader-inline-border-top",
            cssProp: "border-top-color",
            dataAttr: "data-darkreader-inline-border-top"
        },
        "box-shadow": {
            customProp: "--darkreader-inline-boxshadow",
            cssProp: "box-shadow",
            dataAttr: "data-darkreader-inline-boxshadow"
        },
        "color": {
            customProp: "--darkreader-inline-color",
            cssProp: "color",
            dataAttr: "data-darkreader-inline-color"
        },
        "fill": {
            customProp: "--darkreader-inline-fill",
            cssProp: "fill",
            dataAttr: "data-darkreader-inline-fill"
        },
        "stroke": {
            customProp: "--darkreader-inline-stroke",
            cssProp: "stroke",
            dataAttr: "data-darkreader-inline-stroke"
        },
        "outline-color": {
            customProp: "--darkreader-inline-outline",
            cssProp: "outline-color",
            dataAttr: "data-darkreader-inline-outline"
        },
        "stop-color": {
            customProp: "--darkreader-inline-stopcolor",
            cssProp: "stop-color",
            dataAttr: "data-darkreader-inline-stopcolor"
        }
    };
    var overridesList = Object.values(overrides);
    var normalizedPropList = {};
    overridesList.forEach(function (_a) {
        var cssProp = _a.cssProp,
            customProp = _a.customProp;
        return (normalizedPropList[customProp] = cssProp);
    });
    var INLINE_STYLE_ATTRS = [
        "style",
        "fill",
        "stop-color",
        "stroke",
        "bgcolor",
        "color"
    ];
    var INLINE_STYLE_SELECTOR = INLINE_STYLE_ATTRS.map(function (attr) {
        return "[".concat(attr, "]");
    }).join(", ");
    function getInlineOverrideStyle() {
        return overridesList
            .map(function (_a) {
                var dataAttr = _a.dataAttr,
                    customProp = _a.customProp,
                    cssProp = _a.cssProp;
                return [
                    "[".concat(dataAttr, "] {"),
                    "  "
                        .concat(cssProp, ": var(")
                        .concat(customProp, ") !important;"),
                    "}"
                ].join("\n");
            })
            .join("\n");
    }
    function getInlineStyleElements(root) {
        var results = [];
        if (root instanceof Element && root.matches(INLINE_STYLE_SELECTOR)) {
            results.push(root);
        }
        if (
            root instanceof Element ||
            (isShadowDomSupported && root instanceof ShadowRoot) ||
            root instanceof Document
        ) {
            push(results, root.querySelectorAll(INLINE_STYLE_SELECTOR));
        }
        return results;
    }
    var treeObservers = new Map();
    var attrObservers = new Map();
    function watchForInlineStyles(elementStyleDidChange, shadowRootDiscovered) {
        deepWatchForInlineStyles(
            document,
            elementStyleDidChange,
            shadowRootDiscovered
        );
        iterateShadowHosts(document.documentElement, function (host) {
            deepWatchForInlineStyles(
                host.shadowRoot,
                elementStyleDidChange,
                shadowRootDiscovered
            );
        });
    }
    function deepWatchForInlineStyles(
        root,
        elementStyleDidChange,
        shadowRootDiscovered
    ) {
        if (treeObservers.has(root)) {
            treeObservers.get(root).disconnect();
            attrObservers.get(root).disconnect();
        }
        var discoveredNodes = new WeakSet();
        function discoverNodes(node) {
            getInlineStyleElements(node).forEach(function (el) {
                if (discoveredNodes.has(el)) {
                    return;
                }
                discoveredNodes.add(el);
                elementStyleDidChange(el);
            });
            iterateShadowHosts(node, function (n) {
                if (discoveredNodes.has(node)) {
                    return;
                }
                discoveredNodes.add(node);
                shadowRootDiscovered(n.shadowRoot);
                deepWatchForInlineStyles(
                    n.shadowRoot,
                    elementStyleDidChange,
                    shadowRootDiscovered
                );
            });
        }
        var treeObserver = createOptimizedTreeObserver(root, {
            onMinorMutations: function (_a) {
                var additions = _a.additions;
                additions.forEach(function (added) {
                    return discoverNodes(added);
                });
            },
            onHugeMutations: function () {
                discoverNodes(root);
            }
        });
        treeObservers.set(root, treeObserver);
        var attemptCount = 0;
        var start = null;
        var ATTEMPTS_INTERVAL = getDuration({seconds: 10});
        var RETRY_TIMEOUT = getDuration({seconds: 2});
        var MAX_ATTEMPTS_COUNT = 50;
        var cache = [];
        var timeoutId = null;
        var handleAttributeMutations = throttle(function (mutations) {
            mutations.forEach(function (m) {
                if (INLINE_STYLE_ATTRS.includes(m.attributeName)) {
                    elementStyleDidChange(m.target);
                }
            });
        });
        var attrObserver = new MutationObserver(function (mutations) {
            if (timeoutId) {
                cache.push.apply(
                    cache,
                    __spreadArray([], __read(mutations), false)
                );
                return;
            }
            attemptCount++;
            var now = Date.now();
            if (start == null) {
                start = now;
            } else if (attemptCount >= MAX_ATTEMPTS_COUNT) {
                if (now - start < ATTEMPTS_INTERVAL) {
                    timeoutId = setTimeout(function () {
                        start = null;
                        attemptCount = 0;
                        timeoutId = null;
                        var attributeCache = cache;
                        cache = [];
                        handleAttributeMutations(attributeCache);
                    }, RETRY_TIMEOUT);
                    cache.push.apply(
                        cache,
                        __spreadArray([], __read(mutations), false)
                    );
                    return;
                }
                start = now;
                attemptCount = 1;
            }
            handleAttributeMutations(mutations);
        });
        attrObserver.observe(root, {
            attributes: true,
            attributeFilter: INLINE_STYLE_ATTRS.concat(
                overridesList.map(function (_a) {
                    var dataAttr = _a.dataAttr;
                    return dataAttr;
                })
            ),
            subtree: true
        });
        attrObservers.set(root, attrObserver);
    }
    function stopWatchingForInlineStyles() {
        treeObservers.forEach(function (o) {
            return o.disconnect();
        });
        attrObservers.forEach(function (o) {
            return o.disconnect();
        });
        treeObservers.clear();
        attrObservers.clear();
    }
    var inlineStyleCache = new WeakMap();
    var filterProps = ["brightness", "contrast", "grayscale", "sepia", "mode"];
    function getInlineStyleCacheKey(el, theme) {
        return INLINE_STYLE_ATTRS.map(function (attr) {
            return "".concat(attr, '="').concat(el.getAttribute(attr), '"');
        })
            .concat(
                filterProps.map(function (prop) {
                    return "".concat(prop, '="').concat(theme[prop], '"');
                })
            )
            .join(" ");
    }
    function shouldIgnoreInlineStyle(element, selectors) {
        for (var i = 0, len = selectors.length; i < len; i++) {
            var ingnoredSelector = selectors[i];
            if (element.matches(ingnoredSelector)) {
                return true;
            }
        }
        return false;
    }
    function overrideInlineStyle(
        element,
        theme,
        ignoreInlineSelectors,
        ignoreImageSelectors
    ) {
        var cacheKey = getInlineStyleCacheKey(element, theme);
        if (cacheKey === inlineStyleCache.get(element)) {
            return;
        }
        var unsetProps = new Set(Object.keys(overrides));
        function setCustomProp(targetCSSProp, modifierCSSProp, cssVal) {
            var isPropertyVariable = targetCSSProp.startsWith("--");
            var _a = isPropertyVariable ? {} : overrides[targetCSSProp],
                customProp = _a.customProp,
                dataAttr = _a.dataAttr;
            var mod = getModifiableCSSDeclaration(
                modifierCSSProp,
                cssVal,
                {style: element.style},
                variablesStore,
                ignoreImageSelectors,
                null
            );
            if (!mod) {
                return;
            }
            var value = mod.value;
            if (typeof value === "function") {
                value = value(theme);
            }
            if (isPropertyVariable && typeof value === "object") {
                var typedValue = value;
                typedValue.declarations.forEach(function (_a) {
                    var property = _a.property,
                        value = _a.value;
                    !(value instanceof Promise) &&
                        element.style.setProperty(property, value);
                });
            } else {
                element.style.setProperty(customProp, value);
                if (!element.hasAttribute(dataAttr)) {
                    element.setAttribute(dataAttr, "");
                }
                unsetProps.delete(targetCSSProp);
            }
        }
        if (ignoreInlineSelectors.length > 0) {
            if (shouldIgnoreInlineStyle(element, ignoreInlineSelectors)) {
                unsetProps.forEach(function (cssProp) {
                    element.removeAttribute(overrides[cssProp].dataAttr);
                });
                return;
            }
        }
        if (element.hasAttribute("bgcolor")) {
            var value = element.getAttribute("bgcolor");
            if (
                value.match(/^[0-9a-f]{3}$/i) ||
                value.match(/^[0-9a-f]{6}$/i)
            ) {
                value = "#".concat(value);
            }
            setCustomProp("background-color", "background-color", value);
        }
        if (element.hasAttribute("color") && element.rel !== "mask-icon") {
            var value = element.getAttribute("color");
            if (
                value.match(/^[0-9a-f]{3}$/i) ||
                value.match(/^[0-9a-f]{6}$/i)
            ) {
                value = "#".concat(value);
            }
            setCustomProp("color", "color", value);
        }
        if (element instanceof SVGElement) {
            if (element.hasAttribute("fill")) {
                var SMALL_SVG_LIMIT_1 = 32;
                var value_1 = element.getAttribute("fill");
                if (value_1 !== "none") {
                    if (!(element instanceof SVGTextElement)) {
                        var handleSVGElement = function () {
                            var _a = element.getBoundingClientRect(),
                                width = _a.width,
                                height = _a.height;
                            var isBg =
                                width > SMALL_SVG_LIMIT_1 ||
                                height > SMALL_SVG_LIMIT_1;
                            setCustomProp(
                                "fill",
                                isBg ? "background-color" : "color",
                                value_1
                            );
                        };
                        if (isReadyStateComplete()) {
                            handleSVGElement();
                        } else {
                            addReadyStateCompleteListener(handleSVGElement);
                        }
                    } else {
                        setCustomProp("fill", "color", value_1);
                    }
                }
            }
            if (element.hasAttribute("stop-color")) {
                setCustomProp(
                    "stop-color",
                    "background-color",
                    element.getAttribute("stop-color")
                );
            }
        }
        if (element.hasAttribute("stroke")) {
            var value = element.getAttribute("stroke");
            setCustomProp(
                "stroke",
                element instanceof SVGLineElement ||
                    element instanceof SVGTextElement
                    ? "border-color"
                    : "color",
                value
            );
        }
        element.style &&
            iterateCSSDeclarations(element.style, function (property, value) {
                if (property === "background-image" && value.includes("url")) {
                    return;
                }
                if (
                    overrides.hasOwnProperty(property) ||
                    (property.startsWith("--") && !normalizedPropList[property])
                ) {
                    setCustomProp(property, property, value);
                } else {
                    var overridenProp = normalizedPropList[property];
                    if (
                        overridenProp &&
                        !element.style.getPropertyValue(overridenProp) &&
                        !element.hasAttribute(overridenProp)
                    ) {
                        if (
                            overridenProp === "background-color" &&
                            element.hasAttribute("bgcolor")
                        ) {
                            return;
                        }
                        element.style.setProperty(property, "");
                    }
                }
            });
        if (
            element.style &&
            element instanceof SVGTextElement &&
            element.style.fill
        ) {
            setCustomProp(
                "fill",
                "color",
                element.style.getPropertyValue("fill")
            );
        }
        forEach(unsetProps, function (cssProp) {
            element.removeAttribute(overrides[cssProp].dataAttr);
        });
        inlineStyleCache.set(element, getInlineStyleCacheKey(element, theme));
    }

    var metaThemeColorName = "theme-color";
    var metaThemeColorSelector = 'meta[name="'.concat(metaThemeColorName, '"]');
    var srcMetaThemeColor = null;
    var observer = null;
    function changeMetaThemeColor(meta, theme) {
        srcMetaThemeColor = srcMetaThemeColor || meta.content;
        var color = parseColorWithCache(srcMetaThemeColor);
        if (!color) {
            return;
        }
        meta.content = modifyBackgroundColor(color, theme);
    }
    function changeMetaThemeColorWhenAvailable(theme) {
        var meta = document.querySelector(metaThemeColorSelector);
        if (meta) {
            changeMetaThemeColor(meta, theme);
        } else {
            if (observer) {
                observer.disconnect();
            }
            observer = new MutationObserver(function (mutations) {
                loop: for (var i = 0; i < mutations.length; i++) {
                    var addedNodes = mutations[i].addedNodes;
                    for (var j = 0; j < addedNodes.length; j++) {
                        var node = addedNodes[j];
                        if (
                            node instanceof HTMLMetaElement &&
                            node.name === metaThemeColorName
                        ) {
                            observer.disconnect();
                            observer = null;
                            changeMetaThemeColor(node, theme);
                            break loop;
                        }
                    }
                }
            });
            observer.observe(document.head, {childList: true});
        }
    }
    function restoreMetaThemeColor() {
        if (observer) {
            observer.disconnect();
            observer = null;
        }
        var meta = document.querySelector(metaThemeColorSelector);
        if (meta && srcMetaThemeColor) {
            meta.content = srcMetaThemeColor;
        }
    }

    var themeCacheKeys = [
        "mode",
        "brightness",
        "contrast",
        "grayscale",
        "sepia",
        "darkSchemeBackgroundColor",
        "darkSchemeTextColor",
        "lightSchemeBackgroundColor",
        "lightSchemeTextColor"
    ];
    function getThemeKey(theme) {
        var resultKey = "";
        themeCacheKeys.forEach(function (key) {
            resultKey += "".concat(key, ":").concat(theme[key], ";");
        });
        return resultKey;
    }
    var asyncQueue = createAsyncTasksQueue();
    function createStyleSheetModifier() {
        var renderId = 0;
        var rulesTextCache = new Set();
        var rulesModCache = new Map();
        var varTypeChangeCleaners = new Set();
        var prevFilterKey = null;
        var hasNonLoadedLink = false;
        var wasRebuilt = false;
        function shouldRebuildStyle() {
            return hasNonLoadedLink && !wasRebuilt;
        }
        function modifySheet(options) {
            var rules = options.sourceCSSRules;
            var theme = options.theme,
                ignoreImageAnalysis = options.ignoreImageAnalysis,
                force = options.force,
                prepareSheet = options.prepareSheet,
                isAsyncCancelled = options.isAsyncCancelled;
            var rulesChanged = rulesModCache.size === 0;
            var notFoundCacheKeys = new Set(rulesModCache.keys());
            var themeKey = getThemeKey(theme);
            var themeChanged = themeKey !== prevFilterKey;
            if (hasNonLoadedLink) {
                wasRebuilt = true;
            }
            var modRules = [];
            iterateCSSRules(
                rules,
                function (rule) {
                    var cssText = rule.cssText;
                    var textDiffersFromPrev = false;
                    notFoundCacheKeys.delete(cssText);
                    if (rule.parentRule instanceof CSSMediaRule) {
                        cssText += ";".concat(rule.parentRule.media.mediaText);
                    }
                    if (!rulesTextCache.has(cssText)) {
                        rulesTextCache.add(cssText);
                        textDiffersFromPrev = true;
                    }
                    if (textDiffersFromPrev) {
                        rulesChanged = true;
                    } else {
                        modRules.push(rulesModCache.get(cssText));
                        return;
                    }
                    var modDecs = [];
                    rule.style &&
                        iterateCSSDeclarations(
                            rule.style,
                            function (property, value) {
                                var mod = getModifiableCSSDeclaration(
                                    property,
                                    value,
                                    rule,
                                    variablesStore,
                                    ignoreImageAnalysis,
                                    isAsyncCancelled
                                );
                                if (mod) {
                                    modDecs.push(mod);
                                }
                            }
                        );
                    var modRule = null;
                    if (modDecs.length > 0) {
                        var parentRule = rule.parentRule;
                        modRule = {
                            selector: rule.selectorText,
                            declarations: modDecs,
                            parentRule: parentRule
                        };
                        modRules.push(modRule);
                    }
                    rulesModCache.set(cssText, modRule);
                },
                function () {
                    hasNonLoadedLink = true;
                }
            );
            notFoundCacheKeys.forEach(function (key) {
                rulesTextCache.delete(key);
                rulesModCache.delete(key);
            });
            prevFilterKey = themeKey;
            if (!force && !rulesChanged && !themeChanged) {
                return;
            }
            renderId++;
            function setRule(target, index, rule) {
                var selector = rule.selector,
                    declarations = rule.declarations;
                var getDeclarationText = function (dec) {
                    var property = dec.property,
                        value = dec.value,
                        important = dec.important,
                        sourceValue = dec.sourceValue;
                    return ""
                        .concat(property, ": ")
                        .concat(value == null ? sourceValue : value)
                        .concat(important ? " !important" : "", ";");
                };
                var cssRulesText = "";
                declarations.forEach(function (declarations) {
                    cssRulesText += "".concat(
                        getDeclarationText(declarations),
                        " "
                    );
                });
                var ruleText = ""
                    .concat(selector, " { ")
                    .concat(cssRulesText, " }");
                target.insertRule(ruleText, index);
            }
            var asyncDeclarations = new Map();
            var varDeclarations = new Map();
            var asyncDeclarationCounter = 0;
            var varDeclarationCounter = 0;
            var rootReadyGroup = {rule: null, rules: [], isGroup: true};
            var groupRefs = new WeakMap();
            function getGroup(rule) {
                if (rule == null) {
                    return rootReadyGroup;
                }
                if (groupRefs.has(rule)) {
                    return groupRefs.get(rule);
                }
                var group = {rule: rule, rules: [], isGroup: true};
                groupRefs.set(rule, group);
                var parentGroup = getGroup(rule.parentRule);
                parentGroup.rules.push(group);
                return group;
            }
            varTypeChangeCleaners.forEach(function (clear) {
                return clear();
            });
            varTypeChangeCleaners.clear();
            modRules
                .filter(function (r) {
                    return r;
                })
                .forEach(function (_a) {
                    var selector = _a.selector,
                        declarations = _a.declarations,
                        parentRule = _a.parentRule;
                    var group = getGroup(parentRule);
                    var readyStyleRule = {
                        selector: selector,
                        declarations: [],
                        isGroup: false
                    };
                    var readyDeclarations = readyStyleRule.declarations;
                    group.rules.push(readyStyleRule);
                    function handleAsyncDeclaration(
                        property,
                        modified,
                        important,
                        sourceValue
                    ) {
                        var asyncKey = ++asyncDeclarationCounter;
                        var asyncDeclaration = {
                            property: property,
                            value: null,
                            important: important,
                            asyncKey: asyncKey,
                            sourceValue: sourceValue
                        };
                        readyDeclarations.push(asyncDeclaration);
                        var currentRenderId = renderId;
                        modified.then(function (asyncValue) {
                            if (
                                !asyncValue ||
                                isAsyncCancelled() ||
                                currentRenderId !== renderId
                            ) {
                                return;
                            }
                            asyncDeclaration.value = asyncValue;
                            asyncQueue.add(function () {
                                if (
                                    isAsyncCancelled() ||
                                    currentRenderId !== renderId
                                ) {
                                    return;
                                }
                                rebuildAsyncRule(asyncKey);
                            });
                        });
                    }
                    function handleVarDeclarations(
                        property,
                        modified,
                        important,
                        sourceValue
                    ) {
                        var _a = modified,
                            varDecs = _a.declarations,
                            onTypeChange = _a.onTypeChange;
                        var varKey = ++varDeclarationCounter;
                        var currentRenderId = renderId;
                        var initialIndex = readyDeclarations.length;
                        var oldDecs = [];
                        if (varDecs.length === 0) {
                            var tempDec = {
                                property: property,
                                value: sourceValue,
                                important: important,
                                sourceValue: sourceValue,
                                varKey: varKey
                            };
                            readyDeclarations.push(tempDec);
                            oldDecs = [tempDec];
                        }
                        varDecs.forEach(function (mod) {
                            if (mod.value instanceof Promise) {
                                handleAsyncDeclaration(
                                    mod.property,
                                    mod.value,
                                    important,
                                    sourceValue
                                );
                            } else {
                                var readyDec = {
                                    property: mod.property,
                                    value: mod.value,
                                    important: important,
                                    sourceValue: sourceValue,
                                    varKey: varKey
                                };
                                readyDeclarations.push(readyDec);
                                oldDecs.push(readyDec);
                            }
                        });
                        onTypeChange.addListener(function (newDecs) {
                            if (
                                isAsyncCancelled() ||
                                currentRenderId !== renderId
                            ) {
                                return;
                            }
                            var readyVarDecs = newDecs.map(function (mod) {
                                return {
                                    property: mod.property,
                                    value: mod.value,
                                    important: important,
                                    sourceValue: sourceValue,
                                    varKey: varKey
                                };
                            });
                            var index = readyDeclarations.indexOf(
                                oldDecs[0],
                                initialIndex
                            );
                            readyDeclarations.splice.apply(
                                readyDeclarations,
                                __spreadArray(
                                    [index, oldDecs.length],
                                    __read(readyVarDecs),
                                    false
                                )
                            );
                            oldDecs = readyVarDecs;
                            rebuildVarRule(varKey);
                        });
                        varTypeChangeCleaners.add(function () {
                            return onTypeChange.removeListeners();
                        });
                    }
                    declarations.forEach(function (_a) {
                        var property = _a.property,
                            value = _a.value,
                            important = _a.important,
                            sourceValue = _a.sourceValue;
                        if (typeof value === "function") {
                            var modified = value(theme);
                            if (modified instanceof Promise) {
                                handleAsyncDeclaration(
                                    property,
                                    modified,
                                    important,
                                    sourceValue
                                );
                            } else if (property.startsWith("--")) {
                                handleVarDeclarations(
                                    property,
                                    modified,
                                    important,
                                    sourceValue
                                );
                            } else {
                                readyDeclarations.push({
                                    property: property,
                                    value: modified,
                                    important: important,
                                    sourceValue: sourceValue
                                });
                            }
                        } else {
                            readyDeclarations.push({
                                property: property,
                                value: value,
                                important: important,
                                sourceValue: sourceValue
                            });
                        }
                    });
                });
            var sheet = prepareSheet();
            function buildStyleSheet() {
                function createTarget(group, parent) {
                    var rule = group.rule;
                    if (rule instanceof CSSMediaRule) {
                        var media = rule.media;
                        var index = parent.cssRules.length;
                        parent.insertRule(
                            "@media ".concat(media.mediaText, " {}"),
                            index
                        );
                        return parent.cssRules[index];
                    }
                    return parent;
                }
                function iterateReadyRules(group, target, styleIterator) {
                    group.rules.forEach(function (r) {
                        if (r.isGroup) {
                            var t = createTarget(r, target);
                            iterateReadyRules(r, t, styleIterator);
                        } else {
                            styleIterator(r, target);
                        }
                    });
                }
                iterateReadyRules(
                    rootReadyGroup,
                    sheet,
                    function (rule, target) {
                        var index = target.cssRules.length;
                        rule.declarations.forEach(function (_a) {
                            var asyncKey = _a.asyncKey,
                                varKey = _a.varKey;
                            if (asyncKey != null) {
                                asyncDeclarations.set(asyncKey, {
                                    rule: rule,
                                    target: target,
                                    index: index
                                });
                            }
                            if (varKey != null) {
                                varDeclarations.set(varKey, {
                                    rule: rule,
                                    target: target,
                                    index: index
                                });
                            }
                        });
                        setRule(target, index, rule);
                    }
                );
            }
            function rebuildAsyncRule(key) {
                var _a = asyncDeclarations.get(key),
                    rule = _a.rule,
                    target = _a.target,
                    index = _a.index;
                target.deleteRule(index);
                setRule(target, index, rule);
                asyncDeclarations.delete(key);
            }
            function rebuildVarRule(key) {
                var _a = varDeclarations.get(key),
                    rule = _a.rule,
                    target = _a.target,
                    index = _a.index;
                target.deleteRule(index);
                setRule(target, index, rule);
            }
            buildStyleSheet();
        }
        return {
            modifySheet: modifySheet,
            shouldRebuildStyle: shouldRebuildStyle
        };
    }

    var STYLE_SELECTOR = 'style, link[rel*="stylesheet" i]:not([disabled])';
    function isFontsGoogleApiStyle(element) {
        if (!element.href) {
            return false;
        }
        try {
            var elementURL = new URL(element.href);
            return elementURL.hostname === "fonts.googleapis.com";
        } catch (err) {
            logInfo("Couldn't construct ".concat(element.href, " as URL"));
            return false;
        }
    }
    function shouldManageStyle(element) {
        return (
            (element instanceof HTMLStyleElement ||
                element instanceof SVGStyleElement ||
                (element instanceof HTMLLinkElement &&
                    element.rel &&
                    element.rel.toLowerCase().includes("stylesheet") &&
                    element.href &&
                    !element.disabled &&
                    (isFirefox
                        ? !element.href.startsWith("moz-extension://")
                        : true) &&
                    !isFontsGoogleApiStyle(element))) &&
            !element.classList.contains("darkreader") &&
            element.media.toLowerCase() !== "print" &&
            !element.classList.contains("stylus")
        );
    }
    function getManageableStyles(node, results, deep) {
        if (results === void 0) {
            results = [];
        }
        if (deep === void 0) {
            deep = true;
        }
        if (shouldManageStyle(node)) {
            results.push(node);
        } else if (
            node instanceof Element ||
            (isShadowDomSupported && node instanceof ShadowRoot) ||
            node === document
        ) {
            forEach(node.querySelectorAll(STYLE_SELECTOR), function (style) {
                return getManageableStyles(style, results, false);
            });
            if (deep) {
                iterateShadowHosts(node, function (host) {
                    return getManageableStyles(host.shadowRoot, results, false);
                });
            }
        }
        return results;
    }
    var syncStyleSet = new WeakSet();
    var corsStyleSet = new WeakSet();
    var canOptimizeUsingProxy$1 = false;
    document.addEventListener(
        "__darkreader__inlineScriptsAllowed",
        function () {
            canOptimizeUsingProxy$1 = true;
        }
    );
    var loadingLinkCounter = 0;
    var rejectorsForLoadingLinks = new Map();
    function cleanLoadingLinks() {
        rejectorsForLoadingLinks.clear();
    }
    function manageStyle(element, _a) {
        var update = _a.update,
            loadingStart = _a.loadingStart,
            loadingEnd = _a.loadingEnd;
        var prevStyles = [];
        var next = element;
        while (
            (next = next.nextElementSibling) &&
            next.matches(".darkreader")
        ) {
            prevStyles.push(next);
        }
        var corsCopy =
            prevStyles.find(function (el) {
                return el.matches(".darkreader--cors") && !corsStyleSet.has(el);
            }) || null;
        var syncStyle =
            prevStyles.find(function (el) {
                return el.matches(".darkreader--sync") && !syncStyleSet.has(el);
            }) || null;
        var corsCopyPositionWatcher = null;
        var syncStylePositionWatcher = null;
        var cancelAsyncOperations = false;
        var isOverrideEmpty = true;
        var sheetModifier = createStyleSheetModifier();
        var observer = new MutationObserver(function () {
            update();
        });
        var observerOptions = {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true
        };
        function containsCSSImport() {
            return (
                element instanceof HTMLStyleElement &&
                element.textContent.trim().match(cssImportRegex)
            );
        }
        function hasImports(cssRules, checkCrossOrigin) {
            var result = false;
            if (cssRules) {
                var rule = void 0;
                cssRulesLoop: for (
                    var i = 0, len = cssRules.length;
                    i < len;
                    i++
                ) {
                    rule = cssRules[i];
                    if (rule.href) {
                        if (checkCrossOrigin) {
                            if (
                                rule.href.startsWith("http") &&
                                !rule.href.startsWith(location.origin)
                            ) {
                                result = true;
                                break cssRulesLoop;
                            }
                        } else {
                            result = true;
                            break cssRulesLoop;
                        }
                    }
                }
            }
            return result;
        }
        function getRulesSync() {
            if (corsCopy) {
                return corsCopy.sheet.cssRules;
            }
            if (containsCSSImport()) {
                return null;
            }
            var cssRules = safeGetSheetRules();
            if (
                element instanceof HTMLLinkElement &&
                !isRelativeHrefOnAbsolutePath(element.href) &&
                hasImports(cssRules, false)
            ) {
                return null;
            }
            if (hasImports(cssRules, true)) {
                return null;
            }
            return cssRules;
        }
        function insertStyle() {
            if (corsCopy) {
                if (element.nextSibling !== corsCopy) {
                    element.parentNode.insertBefore(
                        corsCopy,
                        element.nextSibling
                    );
                }
                if (corsCopy.nextSibling !== syncStyle) {
                    element.parentNode.insertBefore(
                        syncStyle,
                        corsCopy.nextSibling
                    );
                }
            } else if (element.nextSibling !== syncStyle) {
                element.parentNode.insertBefore(syncStyle, element.nextSibling);
            }
        }
        function createSyncStyle() {
            syncStyle =
                element instanceof SVGStyleElement
                    ? document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "style"
                      )
                    : document.createElement("style");
            syncStyle.classList.add("darkreader");
            syncStyle.classList.add("darkreader--sync");
            syncStyle.media = "screen";
            if (element.title) {
                syncStyle.title = element.title;
            }
            syncStyleSet.add(syncStyle);
        }
        var isLoadingRules = false;
        var wasLoadingError = false;
        var loadingLinkId = ++loadingLinkCounter;
        function getRulesAsync() {
            return __awaiter(this, void 0, void 0, function () {
                var cssText,
                    cssBasePath,
                    _a,
                    cssRules,
                    accessError,
                    fullCSSText;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!(element instanceof HTMLLinkElement))
                                return [3, 7];
                            (_a = __read(getRulesOrError(), 2)),
                                (cssRules = _a[0]),
                                (accessError = _a[1]);
                            if (
                                !(
                                    (!cssRules && !accessError && !isSafari) ||
                                    (isSafari && !element.sheet) ||
                                    isStillLoadingError(accessError)
                                )
                            )
                                return [3, 5];
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4, linkLoading(element, loadingLinkId)];
                        case 2:
                            _c.sent();
                            return [3, 4];
                        case 3:
                            _c.sent();
                            wasLoadingError = true;
                            return [3, 4];
                        case 4:
                            if (cancelAsyncOperations) {
                                return [2, null];
                            }
                            (_b = __read(getRulesOrError(), 2)),
                                (cssRules = _b[0]),
                                (accessError = _b[1]);
                            _c.label = 5;
                        case 5:
                            if (cssRules) {
                                if (!hasImports(cssRules, false)) {
                                    return [2, cssRules];
                                }
                            }
                            return [4, loadText(element.href)];
                        case 6:
                            cssText = _c.sent();
                            cssBasePath = getCSSBaseBath(element.href);
                            if (cancelAsyncOperations) {
                                return [2, null];
                            }
                            return [3, 8];
                        case 7:
                            if (containsCSSImport()) {
                                cssText = element.textContent.trim();
                                cssBasePath = getCSSBaseBath(location.href);
                            } else {
                                return [2, null];
                            }
                            _c.label = 8;
                        case 8:
                            if (!cssText) return [3, 13];
                            _c.label = 9;
                        case 9:
                            _c.trys.push([9, 11, , 12]);
                            return [4, replaceCSSImports(cssText, cssBasePath)];
                        case 10:
                            fullCSSText = _c.sent();
                            corsCopy = createCORSCopy(element, fullCSSText);
                            return [3, 12];
                        case 11:
                            _c.sent();
                            return [3, 12];
                        case 12:
                            if (corsCopy) {
                                corsCopyPositionWatcher = watchForNodePosition(
                                    corsCopy,
                                    "prev-sibling"
                                );
                                return [2, corsCopy.sheet.cssRules];
                            }
                            _c.label = 13;
                        case 13:
                            return [2, null];
                    }
                });
            });
        }
        function details(options) {
            var rules = getRulesSync();
            if (!rules) {
                if (options.secondRound) {
                    return null;
                }
                if (isLoadingRules || wasLoadingError) {
                    return null;
                }
                isLoadingRules = true;
                loadingStart();
                getRulesAsync()
                    .then(function (results) {
                        isLoadingRules = false;
                        loadingEnd();
                        if (results) {
                            update();
                        }
                    })
                    .catch(function (err) {
                        isLoadingRules = false;
                        loadingEnd();
                    });
                return null;
            }
            return {rules: rules};
        }
        var forceRenderStyle = false;
        function render(theme, ignoreImageAnalysis) {
            var rules = getRulesSync();
            if (!rules) {
                return;
            }
            cancelAsyncOperations = false;
            function removeCSSRulesFromSheet(sheet) {
                for (var i = sheet.cssRules.length - 1; i >= 0; i--) {
                    sheet.deleteRule(i);
                }
            }
            function prepareOverridesSheet() {
                if (!syncStyle) {
                    createSyncStyle();
                }
                syncStylePositionWatcher && syncStylePositionWatcher.stop();
                insertStyle();
                if (syncStyle.sheet == null) {
                    syncStyle.textContent = "";
                }
                var sheet = syncStyle.sheet;
                removeCSSRulesFromSheet(sheet);
                if (syncStylePositionWatcher) {
                    syncStylePositionWatcher.run();
                } else {
                    syncStylePositionWatcher = watchForNodePosition(
                        syncStyle,
                        "prev-sibling",
                        function () {
                            forceRenderStyle = true;
                            buildOverrides();
                        }
                    );
                }
                return syncStyle.sheet;
            }
            function buildOverrides() {
                var force = forceRenderStyle;
                forceRenderStyle = false;
                sheetModifier.modifySheet({
                    prepareSheet: prepareOverridesSheet,
                    sourceCSSRules: rules,
                    theme: theme,
                    ignoreImageAnalysis: ignoreImageAnalysis,
                    force: force,
                    isAsyncCancelled: function () {
                        return cancelAsyncOperations;
                    }
                });
                isOverrideEmpty = syncStyle.sheet.cssRules.length === 0;
                if (sheetModifier.shouldRebuildStyle()) {
                    addReadyStateCompleteListener(function () {
                        return update();
                    });
                }
            }
            buildOverrides();
        }
        function getRulesOrError() {
            try {
                if (element.sheet == null) {
                    return [null, null];
                }
                return [element.sheet.cssRules, null];
            } catch (err) {
                return [null, err];
            }
        }
        function isStillLoadingError(error) {
            return error && error.message && error.message.includes("loading");
        }
        function safeGetSheetRules() {
            var _a = __read(getRulesOrError(), 2),
                cssRules = _a[0],
                err = _a[1];
            if (err) {
                return null;
            }
            return cssRules;
        }
        function watchForSheetChanges() {
            watchForSheetChangesUsingProxy();
            if (!(canOptimizeUsingProxy$1 && element.sheet)) {
                watchForSheetChangesUsingRAF();
            }
        }
        var rulesChangeKey = null;
        var rulesCheckFrameId = null;
        function getRulesChangeKey() {
            var rules = safeGetSheetRules();
            return rules ? rules.length : null;
        }
        function didRulesKeyChange() {
            return getRulesChangeKey() !== rulesChangeKey;
        }
        function watchForSheetChangesUsingRAF() {
            rulesChangeKey = getRulesChangeKey();
            stopWatchingForSheetChangesUsingRAF();
            var checkForUpdate = function () {
                if (didRulesKeyChange()) {
                    rulesChangeKey = getRulesChangeKey();
                    update();
                }
                if (canOptimizeUsingProxy$1 && element.sheet) {
                    stopWatchingForSheetChangesUsingRAF();
                    return;
                }
                rulesCheckFrameId = requestAnimationFrame(checkForUpdate);
            };
            checkForUpdate();
        }
        function stopWatchingForSheetChangesUsingRAF() {
            cancelAnimationFrame(rulesCheckFrameId);
        }
        var areSheetChangesPending = false;
        function onSheetChange() {
            canOptimizeUsingProxy$1 = true;
            stopWatchingForSheetChangesUsingRAF();
            if (areSheetChangesPending) {
                return;
            }
            function handleSheetChanges() {
                areSheetChangesPending = false;
                if (cancelAsyncOperations) {
                    return;
                }
                update();
            }
            areSheetChangesPending = true;
            if (typeof queueMicrotask === "function") {
                queueMicrotask(handleSheetChanges);
            } else {
                requestAnimationFrame(handleSheetChanges);
            }
        }
        function watchForSheetChangesUsingProxy() {
            element.addEventListener(
                "__darkreader__updateSheet",
                onSheetChange
            );
        }
        function stopWatchingForSheetChangesUsingProxy() {
            element.removeEventListener(
                "__darkreader__updateSheet",
                onSheetChange
            );
        }
        function stopWatchingForSheetChanges() {
            stopWatchingForSheetChangesUsingProxy();
            stopWatchingForSheetChangesUsingRAF();
        }
        function pause() {
            observer.disconnect();
            cancelAsyncOperations = true;
            corsCopyPositionWatcher && corsCopyPositionWatcher.stop();
            syncStylePositionWatcher && syncStylePositionWatcher.stop();
            stopWatchingForSheetChanges();
        }
        function destroy() {
            pause();
            removeNode(corsCopy);
            removeNode(syncStyle);
            loadingEnd();
            if (rejectorsForLoadingLinks.has(loadingLinkId)) {
                var reject = rejectorsForLoadingLinks.get(loadingLinkId);
                rejectorsForLoadingLinks.delete(loadingLinkId);
                reject && reject();
            }
        }
        function watch() {
            observer.observe(element, observerOptions);
            if (element instanceof HTMLStyleElement) {
                watchForSheetChanges();
            }
        }
        var maxMoveCount = 10;
        var moveCount = 0;
        function restore() {
            if (!syncStyle) {
                return;
            }
            moveCount++;
            if (moveCount > maxMoveCount) {
                return;
            }
            insertStyle();
            corsCopyPositionWatcher && corsCopyPositionWatcher.skip();
            syncStylePositionWatcher && syncStylePositionWatcher.skip();
            if (!isOverrideEmpty) {
                forceRenderStyle = true;
                update();
            }
        }
        return {
            details: details,
            render: render,
            pause: pause,
            destroy: destroy,
            watch: watch,
            restore: restore
        };
    }
    function linkLoading(link, loadingId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [
                    2,
                    new Promise(function (resolve, reject) {
                        var cleanUp = function () {
                            link.removeEventListener("load", onLoad);
                            link.removeEventListener("error", onError);
                            rejectorsForLoadingLinks.delete(loadingId);
                        };
                        var onLoad = function () {
                            cleanUp();
                            resolve();
                        };
                        var onError = function () {
                            cleanUp();
                            reject(
                                "Linkelement "
                                    .concat(loadingId, " couldn't be loaded. ")
                                    .concat(link.href)
                            );
                        };
                        rejectorsForLoadingLinks.set(loadingId, function () {
                            cleanUp();
                            reject();
                        });
                        link.addEventListener("load", onLoad);
                        link.addEventListener("error", onError);
                        if (!link.href) {
                            onError();
                        }
                    })
                ];
            });
        });
    }
    function getCSSImportURL(importDeclaration) {
        return getCSSURLValue(
            importDeclaration
                .substring(7)
                .trim()
                .replace(/;$/, "")
                .replace(/screen$/, "")
        );
    }
    function loadText(url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!url.startsWith("data:")) return [3, 3];
                        return [4, fetch(url)];
                    case 1:
                        return [4, _a.sent().text()];
                    case 2:
                        return [2, _a.sent()];
                    case 3:
                        return [
                            4,
                            bgFetch({
                                url: url,
                                responseType: "text",
                                mimeType: "text/css",
                                origin: window.location.origin
                            })
                        ];
                    case 4:
                        return [2, _a.sent()];
                }
            });
        });
    }
    function replaceCSSImports(cssText, basePath, cache) {
        if (cache === void 0) {
            cache = new Map();
        }
        return __awaiter(this, void 0, void 0, function () {
            var importMatches,
                importMatches_1,
                importMatches_1_1,
                match,
                importURL,
                absoluteURL,
                importedCSS,
                e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cssText = removeCSSComments(cssText);
                        cssText = replaceCSSFontFace(cssText);
                        cssText = replaceCSSRelativeURLsWithAbsolute(
                            cssText,
                            basePath
                        );
                        importMatches = getMatches(cssImportRegex, cssText);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 10, 11, 12]);
                        (importMatches_1 = __values(importMatches)),
                            (importMatches_1_1 = importMatches_1.next());
                        _b.label = 2;
                    case 2:
                        if (!!importMatches_1_1.done) return [3, 9];
                        match = importMatches_1_1.value;
                        importURL = getCSSImportURL(match);
                        absoluteURL = getAbsoluteURL(basePath, importURL);
                        importedCSS = void 0;
                        if (!cache.has(absoluteURL)) return [3, 3];
                        importedCSS = cache.get(absoluteURL);
                        return [3, 7];
                    case 3:
                        _b.trys.push([3, 6, , 7]);
                        return [4, loadText(absoluteURL)];
                    case 4:
                        importedCSS = _b.sent();
                        cache.set(absoluteURL, importedCSS);
                        return [
                            4,
                            replaceCSSImports(
                                importedCSS,
                                getCSSBaseBath(absoluteURL),
                                cache
                            )
                        ];
                    case 5:
                        importedCSS = _b.sent();
                        return [3, 7];
                    case 6:
                        _b.sent();
                        importedCSS = "";
                        return [3, 7];
                    case 7:
                        cssText = cssText.split(match).join(importedCSS);
                        _b.label = 8;
                    case 8:
                        importMatches_1_1 = importMatches_1.next();
                        return [3, 2];
                    case 9:
                        return [3, 12];
                    case 10:
                        e_1_1 = _b.sent();
                        e_1 = {error: e_1_1};
                        return [3, 12];
                    case 11:
                        try {
                            if (
                                importMatches_1_1 &&
                                !importMatches_1_1.done &&
                                (_a = importMatches_1.return)
                            )
                                _a.call(importMatches_1);
                        } finally {
                            if (e_1) throw e_1.error;
                        }
                        return [7];
                    case 12:
                        cssText = cssText.trim();
                        return [2, cssText];
                }
            });
        });
    }
    function createCORSCopy(srcElement, cssText) {
        if (!cssText) {
            return null;
        }
        var cors = document.createElement("style");
        cors.classList.add("darkreader");
        cors.classList.add("darkreader--cors");
        cors.media = "screen";
        cors.textContent = cssText;
        srcElement.parentNode.insertBefore(cors, srcElement.nextSibling);
        cors.sheet.disabled = true;
        corsStyleSet.add(cors);
        return cors;
    }

    var observers = [];
    var observedRoots;
    var undefinedGroups = new Map();
    var elementsDefinitionCallback;
    function collectUndefinedElements(root) {
        if (!isDefinedSelectorSupported) {
            return;
        }
        forEach(root.querySelectorAll(":not(:defined)"), function (el) {
            var tag = el.tagName.toLowerCase();
            if (!tag.includes("-")) {
                var extendedTag = el.getAttribute("is");
                if (extendedTag) {
                    tag = extendedTag;
                } else {
                    return;
                }
            }
            if (!undefinedGroups.has(tag)) {
                undefinedGroups.set(tag, new Set());
                customElementsWhenDefined(tag).then(function () {
                    if (elementsDefinitionCallback) {
                        var elements = undefinedGroups.get(tag);
                        undefinedGroups.delete(tag);
                        elementsDefinitionCallback(Array.from(elements));
                    }
                });
            }
            undefinedGroups.get(tag).add(el);
        });
    }
    var canOptimizeUsingProxy = false;
    document.addEventListener(
        "__darkreader__inlineScriptsAllowed",
        function () {
            canOptimizeUsingProxy = true;
        }
    );
    var resolvers = new Map();
    function handleIsDefined(e) {
        canOptimizeUsingProxy = true;
        if (resolvers.has(e.detail.tag)) {
            var resolve = resolvers.get(e.detail.tag);
            resolve();
        }
    }
    function customElementsWhenDefined(tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [
                    2,
                    new Promise(function (resolve) {
                        if (
                            window.customElements &&
                            typeof customElements.whenDefined === "function"
                        ) {
                            customElements.whenDefined(tag).then(function () {
                                return resolve();
                            });
                        } else if (canOptimizeUsingProxy) {
                            resolvers.set(tag, resolve);
                            document.dispatchEvent(
                                new CustomEvent(
                                    "__darkreader__addUndefinedResolver",
                                    {detail: {tag: tag}}
                                )
                            );
                        } else {
                            var checkIfDefined_1 = function () {
                                var elements = undefinedGroups.get(tag);
                                if (elements && elements.size > 0) {
                                    if (
                                        elements
                                            .values()
                                            .next()
                                            .value.matches(":defined")
                                    ) {
                                        resolve();
                                    } else {
                                        requestAnimationFrame(checkIfDefined_1);
                                    }
                                }
                            };
                            requestAnimationFrame(checkIfDefined_1);
                        }
                    })
                ];
            });
        });
    }
    function watchWhenCustomElementsDefined(callback) {
        elementsDefinitionCallback = callback;
    }
    function unsubscribeFromDefineCustomElements() {
        elementsDefinitionCallback = null;
        undefinedGroups.clear();
        document.removeEventListener(
            "__darkreader__isDefined",
            handleIsDefined
        );
    }
    function watchForStyleChanges(currentStyles, update, shadowRootDiscovered) {
        stopWatchingForStyleChanges();
        var prevStyles = new Set(currentStyles);
        var prevStyleSiblings = new WeakMap();
        var nextStyleSiblings = new WeakMap();
        function saveStylePosition(style) {
            prevStyleSiblings.set(style, style.previousElementSibling);
            nextStyleSiblings.set(style, style.nextElementSibling);
        }
        function forgetStylePosition(style) {
            prevStyleSiblings.delete(style);
            nextStyleSiblings.delete(style);
        }
        function didStylePositionChange(style) {
            return (
                style.previousElementSibling !== prevStyleSiblings.get(style) ||
                style.nextElementSibling !== nextStyleSiblings.get(style)
            );
        }
        currentStyles.forEach(saveStylePosition);
        function handleStyleOperations(operations) {
            var createdStyles = operations.createdStyles,
                removedStyles = operations.removedStyles,
                movedStyles = operations.movedStyles;
            createdStyles.forEach(function (s) {
                return saveStylePosition(s);
            });
            movedStyles.forEach(function (s) {
                return saveStylePosition(s);
            });
            removedStyles.forEach(function (s) {
                return forgetStylePosition(s);
            });
            createdStyles.forEach(function (s) {
                return prevStyles.add(s);
            });
            removedStyles.forEach(function (s) {
                return prevStyles.delete(s);
            });
            if (
                createdStyles.size + removedStyles.size + movedStyles.size >
                0
            ) {
                update({
                    created: Array.from(createdStyles),
                    removed: Array.from(removedStyles),
                    moved: Array.from(movedStyles),
                    updated: []
                });
            }
        }
        function handleMinorTreeMutations(_a) {
            var additions = _a.additions,
                moves = _a.moves,
                deletions = _a.deletions;
            var createdStyles = new Set();
            var removedStyles = new Set();
            var movedStyles = new Set();
            additions.forEach(function (node) {
                return getManageableStyles(node).forEach(function (style) {
                    return createdStyles.add(style);
                });
            });
            deletions.forEach(function (node) {
                return getManageableStyles(node).forEach(function (style) {
                    return removedStyles.add(style);
                });
            });
            moves.forEach(function (node) {
                return getManageableStyles(node).forEach(function (style) {
                    return movedStyles.add(style);
                });
            });
            handleStyleOperations({
                createdStyles: createdStyles,
                removedStyles: removedStyles,
                movedStyles: movedStyles
            });
            additions.forEach(function (n) {
                iterateShadowHosts(n, subscribeForShadowRootChanges);
                collectUndefinedElements(n);
            });
        }
        function handleHugeTreeMutations(root) {
            var styles = new Set(getManageableStyles(root));
            var createdStyles = new Set();
            var removedStyles = new Set();
            var movedStyles = new Set();
            styles.forEach(function (s) {
                if (!prevStyles.has(s)) {
                    createdStyles.add(s);
                }
            });
            prevStyles.forEach(function (s) {
                if (!styles.has(s)) {
                    removedStyles.add(s);
                }
            });
            styles.forEach(function (s) {
                if (
                    !createdStyles.has(s) &&
                    !removedStyles.has(s) &&
                    didStylePositionChange(s)
                ) {
                    movedStyles.add(s);
                }
            });
            handleStyleOperations({
                createdStyles: createdStyles,
                removedStyles: removedStyles,
                movedStyles: movedStyles
            });
            iterateShadowHosts(root, subscribeForShadowRootChanges);
            collectUndefinedElements(root);
        }
        function handleAttributeMutations(mutations) {
            var updatedStyles = new Set();
            var removedStyles = new Set();
            mutations.forEach(function (m) {
                var target = m.target;
                if (target.isConnected) {
                    if (shouldManageStyle(target)) {
                        updatedStyles.add(target);
                    } else if (
                        target instanceof HTMLLinkElement &&
                        target.disabled
                    ) {
                        removedStyles.add(target);
                    }
                }
            });
            if (updatedStyles.size + removedStyles.size > 0) {
                update({
                    updated: Array.from(updatedStyles),
                    created: [],
                    removed: Array.from(removedStyles),
                    moved: []
                });
            }
        }
        function observe(root) {
            var treeObserver = createOptimizedTreeObserver(root, {
                onMinorMutations: handleMinorTreeMutations,
                onHugeMutations: handleHugeTreeMutations
            });
            var attrObserver = new MutationObserver(handleAttributeMutations);
            attrObserver.observe(root, {
                attributes: true,
                attributeFilter: ["rel", "disabled", "media", "href"],
                subtree: true
            });
            observers.push(treeObserver, attrObserver);
            observedRoots.add(root);
        }
        function subscribeForShadowRootChanges(node) {
            var shadowRoot = node.shadowRoot;
            if (shadowRoot == null || observedRoots.has(shadowRoot)) {
                return;
            }
            observe(shadowRoot);
            shadowRootDiscovered(shadowRoot);
        }
        observe(document);
        iterateShadowHosts(
            document.documentElement,
            subscribeForShadowRootChanges
        );
        watchWhenCustomElementsDefined(function (hosts) {
            var newStyles = [];
            hosts.forEach(function (host) {
                return push(newStyles, getManageableStyles(host.shadowRoot));
            });
            update({created: newStyles, updated: [], removed: [], moved: []});
            hosts.forEach(function (host) {
                var shadowRoot = host.shadowRoot;
                if (shadowRoot == null) {
                    return;
                }
                subscribeForShadowRootChanges(host);
                iterateShadowHosts(shadowRoot, subscribeForShadowRootChanges);
                collectUndefinedElements(shadowRoot);
            });
        });
        document.addEventListener("__darkreader__isDefined", handleIsDefined);
        collectUndefinedElements(document);
    }
    function resetObservers() {
        observers.forEach(function (o) {
            return o.disconnect();
        });
        observers.splice(0, observers.length);
        observedRoots = new WeakSet();
    }
    function stopWatchingForStyleChanges() {
        resetObservers();
        unsubscribeFromDefineCustomElements();
    }

    function hexify(number) {
        return (number < 16 ? "0" : "") + number.toString(16);
    }
    function generateUID() {
        if ("randomUUID" in crypto) {
            var uuid = crypto.randomUUID();
            return (
                uuid.substring(0, 8) +
                uuid.substring(9, 13) +
                uuid.substring(14, 18) +
                uuid.substring(19, 23) +
                uuid.substring(24)
            );
        }
        return Array.from(crypto.getRandomValues(new Uint8Array(16)))
            .map(function (x) {
                return hexify(x);
            })
            .join("");
    }

    var adoptedStyleOverrides = new WeakMap();
    var overrideList = new WeakSet();
    function createAdoptedStyleSheetOverride(node) {
        var cancelAsyncOperations = false;
        function injectSheet(sheet, override) {
            var newSheets = __spreadArray(
                [],
                __read(node.adoptedStyleSheets),
                false
            );
            var sheetIndex = newSheets.indexOf(sheet);
            var existingIndex = newSheets.indexOf(override);
            if (sheetIndex === existingIndex - 1) {
                return;
            }
            if (existingIndex >= 0) {
                newSheets.splice(existingIndex, 1);
            }
            newSheets.splice(sheetIndex + 1, 0, override);
            node.adoptedStyleSheets = newSheets;
        }
        function destroy() {
            cancelAsyncOperations = true;
            var newSheets = __spreadArray(
                [],
                __read(node.adoptedStyleSheets),
                false
            );
            node.adoptedStyleSheets.forEach(function (adoptedStyleSheet) {
                if (overrideList.has(adoptedStyleSheet)) {
                    var existingIndex = newSheets.indexOf(adoptedStyleSheet);
                    if (existingIndex >= 0) {
                        newSheets.splice(existingIndex, 1);
                    }
                    adoptedStyleOverrides.delete(adoptedStyleSheet);
                    overrideList.delete(adoptedStyleSheet);
                }
            });
            node.adoptedStyleSheets = newSheets;
        }
        function render(theme, ignoreImageAnalysis) {
            node.adoptedStyleSheets.forEach(function (sheet) {
                if (overrideList.has(sheet)) {
                    return;
                }
                var rules = sheet.rules;
                var override = new CSSStyleSheet();
                function prepareOverridesSheet() {
                    for (var i = override.cssRules.length - 1; i >= 0; i--) {
                        override.deleteRule(i);
                    }
                    injectSheet(sheet, override);
                    adoptedStyleOverrides.set(sheet, override);
                    overrideList.add(override);
                    return override;
                }
                var sheetModifier = createStyleSheetModifier();
                sheetModifier.modifySheet({
                    prepareSheet: prepareOverridesSheet,
                    sourceCSSRules: rules,
                    theme: theme,
                    ignoreImageAnalysis: ignoreImageAnalysis,
                    force: false,
                    isAsyncCancelled: function () {
                        return cancelAsyncOperations;
                    }
                });
            });
        }
        return {
            render: render,
            destroy: destroy
        };
    }

    function injectProxy(enableStyleSheetsProxy) {
        document.dispatchEvent(
            new CustomEvent("__darkreader__inlineScriptsAllowed")
        );
        var addRuleDescriptor = Object.getOwnPropertyDescriptor(
            CSSStyleSheet.prototype,
            "addRule"
        );
        var insertRuleDescriptor = Object.getOwnPropertyDescriptor(
            CSSStyleSheet.prototype,
            "insertRule"
        );
        var deleteRuleDescriptor = Object.getOwnPropertyDescriptor(
            CSSStyleSheet.prototype,
            "deleteRule"
        );
        var removeRuleDescriptor = Object.getOwnPropertyDescriptor(
            CSSStyleSheet.prototype,
            "removeRule"
        );
        var documentStyleSheetsDescriptor = enableStyleSheetsProxy
            ? Object.getOwnPropertyDescriptor(Document.prototype, "styleSheets")
            : null;
        var shouldWrapHTMLElement = [
            "baidu.com",
            "baike.baidu.com",
            "ditu.baidu.com",
            "map.baidu.com",
            "maps.baidu.com",
            "haokan.baidu.com",
            "pan.baidu.com",
            "passport.baidu.com",
            "tieba.baidu.com",
            "www.baidu.com"
        ].includes(location.hostname);
        var getElementsByTagNameDescriptor = shouldWrapHTMLElement
            ? Object.getOwnPropertyDescriptor(
                  Element.prototype,
                  "getElementsByTagName"
              )
            : null;
        var cleanUp = function () {
            Object.defineProperty(
                CSSStyleSheet.prototype,
                "addRule",
                addRuleDescriptor
            );
            Object.defineProperty(
                CSSStyleSheet.prototype,
                "insertRule",
                insertRuleDescriptor
            );
            Object.defineProperty(
                CSSStyleSheet.prototype,
                "deleteRule",
                deleteRuleDescriptor
            );
            Object.defineProperty(
                CSSStyleSheet.prototype,
                "removeRule",
                removeRuleDescriptor
            );
            document.removeEventListener("__darkreader__cleanUp", cleanUp);
            document.removeEventListener(
                "__darkreader__addUndefinedResolver",
                addUndefinedResolver
            );
            if (enableStyleSheetsProxy) {
                Object.defineProperty(
                    Document.prototype,
                    "styleSheets",
                    documentStyleSheetsDescriptor
                );
            }
            if (shouldWrapHTMLElement) {
                Object.defineProperty(
                    Element.prototype,
                    "getElementsByTagName",
                    getElementsByTagNameDescriptor
                );
            }
        };
        var addUndefinedResolver = function (e) {
            customElements.whenDefined(e.detail.tag).then(function () {
                document.dispatchEvent(
                    new CustomEvent("__darkreader__isDefined", {
                        detail: {tag: e.detail.tag}
                    })
                );
            });
        };
        document.addEventListener("__darkreader__cleanUp", cleanUp);
        document.addEventListener(
            "__darkreader__addUndefinedResolver",
            addUndefinedResolver
        );
        var updateSheetEvent = new Event("__darkreader__updateSheet");
        function proxyAddRule(selector, style, index) {
            addRuleDescriptor.value.call(this, selector, style, index);
            if (
                this.ownerNode &&
                !this.ownerNode.classList.contains("darkreader")
            ) {
                this.ownerNode.dispatchEvent(updateSheetEvent);
            }
            return -1;
        }
        function proxyInsertRule(rule, index) {
            var returnValue = insertRuleDescriptor.value.call(
                this,
                rule,
                index
            );
            if (
                this.ownerNode &&
                !this.ownerNode.classList.contains("darkreader")
            ) {
                this.ownerNode.dispatchEvent(updateSheetEvent);
            }
            return returnValue;
        }
        function proxyDeleteRule(index) {
            deleteRuleDescriptor.value.call(this, index);
            if (
                this.ownerNode &&
                !this.ownerNode.classList.contains("darkreader")
            ) {
                this.ownerNode.dispatchEvent(updateSheetEvent);
            }
        }
        function proxyRemoveRule(index) {
            removeRuleDescriptor.value.call(this, index);
            if (
                this.ownerNode &&
                !this.ownerNode.classList.contains("darkreader")
            ) {
                this.ownerNode.dispatchEvent(updateSheetEvent);
            }
        }
        function proxyDocumentStyleSheets() {
            var _this = this;
            var getCurrentValue = function () {
                var docSheets = documentStyleSheetsDescriptor.get.call(_this);
                var filteredSheets = __spreadArray(
                    [],
                    __read(docSheets),
                    false
                ).filter(function (styleSheet) {
                    return !styleSheet.ownerNode.classList.contains(
                        "darkreader"
                    );
                });
                filteredSheets.item = function (item) {
                    return filteredSheets[item];
                };
                return Object.setPrototypeOf(
                    filteredSheets,
                    StyleSheetList.prototype
                );
            };
            var elements = getCurrentValue();
            var styleSheetListBehavior = {
                get: function (_, property) {
                    return getCurrentValue()[property];
                }
            };
            elements = new Proxy(elements, styleSheetListBehavior);
            return elements;
        }
        function proxyGetElementsByTagName(tagName) {
            var _this = this;
            if (tagName !== "style") {
                return getElementsByTagNameDescriptor.value.call(this, tagName);
            }
            var getCurrentElementValue = function () {
                var elements = getElementsByTagNameDescriptor.value.call(
                    _this,
                    tagName
                );
                return Object.setPrototypeOf(
                    __spreadArray([], __read(elements), false).filter(function (
                        element
                    ) {
                        return !element.classList.contains("darkreader");
                    }),
                    NodeList.prototype
                );
            };
            var elements = getCurrentElementValue();
            var nodeListBehavior = {
                get: function (_, property) {
                    return getCurrentElementValue()[
                        Number(property) || property
                    ];
                }
            };
            elements = new Proxy(elements, nodeListBehavior);
            return elements;
        }
        Object.defineProperty(
            CSSStyleSheet.prototype,
            "addRule",
            Object.assign({}, addRuleDescriptor, {value: proxyAddRule})
        );
        Object.defineProperty(
            CSSStyleSheet.prototype,
            "insertRule",
            Object.assign({}, insertRuleDescriptor, {value: proxyInsertRule})
        );
        Object.defineProperty(
            CSSStyleSheet.prototype,
            "deleteRule",
            Object.assign({}, deleteRuleDescriptor, {value: proxyDeleteRule})
        );
        Object.defineProperty(
            CSSStyleSheet.prototype,
            "removeRule",
            Object.assign({}, removeRuleDescriptor, {value: proxyRemoveRule})
        );
        if (enableStyleSheetsProxy) {
            Object.defineProperty(
                Document.prototype,
                "styleSheets",
                Object.assign({}, documentStyleSheetsDescriptor, {
                    get: proxyDocumentStyleSheets
                })
            );
        }
        if (shouldWrapHTMLElement) {
            Object.defineProperty(
                Element.prototype,
                "getElementsByTagName",
                Object.assign({}, getElementsByTagNameDescriptor, {
                    value: proxyGetElementsByTagName
                })
            );
        }
    }

    var INSTANCE_ID = generateUID();
    var styleManagers = new Map();
    var adoptedStyleManagers = [];
    var filter = null;
    var fixes = null;
    var isIFrame$1 = null;
    var ignoredImageAnalysisSelectors = null;
    var ignoredInlineSelectors = null;
    function createOrUpdateStyle(className, root) {
        if (root === void 0) {
            root = document.head || document;
        }
        var element = root.querySelector(".".concat(className));
        if (!element) {
            element = document.createElement("style");
            element.classList.add("darkreader");
            element.classList.add(className);
            element.media = "screen";
            element.textContent = "";
        }
        return element;
    }
    function createOrUpdateScript(className, root) {
        if (root === void 0) {
            root = document.head || document;
        }
        var element = root.querySelector(".".concat(className));
        if (!element) {
            element = document.createElement("script");
            element.classList.add("darkreader");
            element.classList.add(className);
        }
        return element;
    }
    var nodePositionWatchers = new Map();
    function setupNodePositionWatcher(node, alias) {
        nodePositionWatchers.has(alias) &&
            nodePositionWatchers.get(alias).stop();
        nodePositionWatchers.set(alias, watchForNodePosition(node, "parent"));
    }
    function stopStylePositionWatchers() {
        forEach(nodePositionWatchers.values(), function (watcher) {
            return watcher.stop();
        });
        nodePositionWatchers.clear();
    }
    function createStaticStyleOverrides() {
        var fallbackStyle = createOrUpdateStyle(
            "darkreader--fallback",
            document
        );
        fallbackStyle.textContent = getModifiedFallbackStyle(filter, {
            strict: true
        });
        document.head.insertBefore(fallbackStyle, document.head.firstChild);
        setupNodePositionWatcher(fallbackStyle, "fallback");
        var userAgentStyle = createOrUpdateStyle("darkreader--user-agent");
        userAgentStyle.textContent = getModifiedUserAgentStyle(
            filter,
            isIFrame$1,
            filter.styleSystemControls
        );
        document.head.insertBefore(userAgentStyle, fallbackStyle.nextSibling);
        setupNodePositionWatcher(userAgentStyle, "user-agent");
        var textStyle = createOrUpdateStyle("darkreader--text");
        if (filter.useFont || filter.textStroke > 0) {
            textStyle.textContent = createTextStyle(filter);
        } else {
            textStyle.textContent = "";
        }
        document.head.insertBefore(textStyle, fallbackStyle.nextSibling);
        setupNodePositionWatcher(textStyle, "text");
        var invertStyle = createOrUpdateStyle("darkreader--invert");
        if (fixes && Array.isArray(fixes.invert) && fixes.invert.length > 0) {
            invertStyle.textContent = [
                "".concat(fixes.invert.join(", "), " {"),
                "    filter: ".concat(
                    getCSSFilterValue(
                        __assign(__assign({}, filter), {
                            contrast:
                                filter.mode === 0
                                    ? filter.contrast
                                    : clamp(filter.contrast - 10, 0, 100)
                        })
                    ),
                    " !important;"
                ),
                "}"
            ].join("\n");
        } else {
            invertStyle.textContent = "";
        }
        document.head.insertBefore(invertStyle, textStyle.nextSibling);
        setupNodePositionWatcher(invertStyle, "invert");
        var inlineStyle = createOrUpdateStyle("darkreader--inline");
        inlineStyle.textContent = getInlineOverrideStyle();
        document.head.insertBefore(inlineStyle, invertStyle.nextSibling);
        setupNodePositionWatcher(inlineStyle, "inline");
        var overrideStyle = createOrUpdateStyle("darkreader--override");
        overrideStyle.textContent =
            fixes && fixes.css ? replaceCSSTemplates(fixes.css) : "";
        document.head.appendChild(overrideStyle);
        setupNodePositionWatcher(overrideStyle, "override");
        var variableStyle = createOrUpdateStyle("darkreader--variables");
        var selectionColors = getSelectionColor(filter);
        var darkSchemeBackgroundColor = filter.darkSchemeBackgroundColor,
            darkSchemeTextColor = filter.darkSchemeTextColor,
            lightSchemeBackgroundColor = filter.lightSchemeBackgroundColor,
            lightSchemeTextColor = filter.lightSchemeTextColor,
            mode = filter.mode;
        var schemeBackgroundColor =
            mode === 0 ? lightSchemeBackgroundColor : darkSchemeBackgroundColor;
        var schemeTextColor =
            mode === 0 ? lightSchemeTextColor : darkSchemeTextColor;
        schemeBackgroundColor = modifyBackgroundColor(
            parseColorWithCache(schemeBackgroundColor),
            filter
        );
        schemeTextColor = modifyForegroundColor(
            parseColorWithCache(schemeTextColor),
            filter
        );
        variableStyle.textContent = [
            ":root {",
            "   --darkreader-neutral-background: ".concat(
                schemeBackgroundColor,
                ";"
            ),
            "   --darkreader-neutral-text: ".concat(schemeTextColor, ";"),
            "   --darkreader-selection-background: ".concat(
                selectionColors.backgroundColorSelection,
                ";"
            ),
            "   --darkreader-selection-text: ".concat(
                selectionColors.foregroundColorSelection,
                ";"
            ),
            "}"
        ].join("\n");
        document.head.insertBefore(variableStyle, inlineStyle.nextSibling);
        setupNodePositionWatcher(variableStyle, "variables");
        var rootVarsStyle = createOrUpdateStyle("darkreader--root-vars");
        document.head.insertBefore(rootVarsStyle, variableStyle.nextSibling);
        var injectProxyArg = !(fixes && fixes.disableStyleSheetsProxy);
        {
            var proxyScript = createOrUpdateScript("darkreader--proxy");
            proxyScript.append(
                "(".concat(injectProxy, ")(").concat(injectProxyArg, ")")
            );
            document.head.insertBefore(proxyScript, rootVarsStyle.nextSibling);
            proxyScript.remove();
        }
    }
    var shadowRootsWithOverrides = new Set();
    function createShadowStaticStyleOverrides(root) {
        var inlineStyle = createOrUpdateStyle("darkreader--inline", root);
        inlineStyle.textContent = getInlineOverrideStyle();
        root.insertBefore(inlineStyle, root.firstChild);
        var overrideStyle = createOrUpdateStyle("darkreader--override", root);
        overrideStyle.textContent =
            fixes && fixes.css ? replaceCSSTemplates(fixes.css) : "";
        root.insertBefore(overrideStyle, inlineStyle.nextSibling);
        var invertStyle = createOrUpdateStyle("darkreader--invert", root);
        if (fixes && Array.isArray(fixes.invert) && fixes.invert.length > 0) {
            invertStyle.textContent = [
                "".concat(fixes.invert.join(", "), " {"),
                "    filter: ".concat(
                    getCSSFilterValue(
                        __assign(__assign({}, filter), {
                            contrast:
                                filter.mode === 0
                                    ? filter.contrast
                                    : clamp(filter.contrast - 10, 0, 100)
                        })
                    ),
                    " !important;"
                ),
                "}"
            ].join("\n");
        } else {
            invertStyle.textContent = "";
        }
        root.insertBefore(invertStyle, overrideStyle.nextSibling);
        shadowRootsWithOverrides.add(root);
    }
    function replaceCSSTemplates($cssText) {
        return $cssText.replace(/\${(.+?)}/g, function (_, $color) {
            var color = parseColorWithCache($color);
            if (color) {
                return modifyColor(color, filter);
            }
            return $color;
        });
    }
    function cleanFallbackStyle() {
        var fallback = document.querySelector(".darkreader--fallback");
        if (fallback) {
            fallback.textContent = "";
        }
    }
    function createDynamicStyleOverrides() {
        cancelRendering();
        var allStyles = getManageableStyles(document);
        var newManagers = allStyles
            .filter(function (style) {
                return !styleManagers.has(style);
            })
            .map(function (style) {
                return createManager(style);
            });
        newManagers
            .map(function (manager) {
                return manager.details({secondRound: false});
            })
            .filter(function (detail) {
                return detail && detail.rules.length > 0;
            })
            .forEach(function (detail) {
                variablesStore.addRulesForMatching(detail.rules);
            });
        variablesStore.matchVariablesAndDependants();
        variablesStore.setOnRootVariableChange(function () {
            variablesStore.putRootVars(
                document.head.querySelector(".darkreader--root-vars"),
                filter
            );
        });
        variablesStore.putRootVars(
            document.head.querySelector(".darkreader--root-vars"),
            filter
        );
        styleManagers.forEach(function (manager) {
            return manager.render(filter, ignoredImageAnalysisSelectors);
        });
        if (loadingStyles.size === 0) {
            cleanFallbackStyle();
        }
        newManagers.forEach(function (manager) {
            return manager.watch();
        });
        var inlineStyleElements = toArray(
            document.querySelectorAll(INLINE_STYLE_SELECTOR)
        );
        iterateShadowHosts(document.documentElement, function (host) {
            createShadowStaticStyleOverrides(host.shadowRoot);
            var elements = host.shadowRoot.querySelectorAll(
                INLINE_STYLE_SELECTOR
            );
            if (elements.length > 0) {
                push(inlineStyleElements, elements);
            }
        });
        inlineStyleElements.forEach(function (el) {
            return overrideInlineStyle(
                el,
                filter,
                ignoredInlineSelectors,
                ignoredImageAnalysisSelectors
            );
        });
        handleAdoptedStyleSheets(document);
    }
    var loadingStylesCounter = 0;
    var loadingStyles = new Set();
    function createManager(element) {
        var loadingStyleId = ++loadingStylesCounter;
        function loadingStart() {
            if (!isDOMReady() || !didDocumentShowUp) {
                loadingStyles.add(loadingStyleId);
                logInfo(
                    "Current amount of styles loading: ".concat(
                        loadingStyles.size
                    )
                );
                var fallbackStyle = document.querySelector(
                    ".darkreader--fallback"
                );
                if (!fallbackStyle.textContent) {
                    fallbackStyle.textContent = getModifiedFallbackStyle(
                        filter,
                        {strict: false}
                    );
                }
            }
        }
        function loadingEnd() {
            loadingStyles.delete(loadingStyleId);
            logInfo(
                "Removed loadingStyle "
                    .concat(loadingStyleId, ", now awaiting: ")
                    .concat(loadingStyles.size)
            );
            if (loadingStyles.size === 0 && isDOMReady()) {
                cleanFallbackStyle();
            }
        }
        function update() {
            var details = manager.details({secondRound: true});
            if (!details) {
                return;
            }
            variablesStore.addRulesForMatching(details.rules);
            variablesStore.matchVariablesAndDependants();
            manager.render(filter, ignoredImageAnalysisSelectors);
        }
        var manager = manageStyle(element, {
            update: update,
            loadingStart: loadingStart,
            loadingEnd: loadingEnd
        });
        styleManagers.set(element, manager);
        return manager;
    }
    function removeManager(element) {
        var manager = styleManagers.get(element);
        if (manager) {
            manager.destroy();
            styleManagers.delete(element);
        }
    }
    var throttledRenderAllStyles = throttle(function (callback) {
        styleManagers.forEach(function (manager) {
            return manager.render(filter, ignoredImageAnalysisSelectors);
        });
        adoptedStyleManagers.forEach(function (manager) {
            return manager.render(filter, ignoredImageAnalysisSelectors);
        });
        callback && callback();
    });
    var cancelRendering = function () {
        throttledRenderAllStyles.cancel();
    };
    function onDOMReady() {
        if (loadingStyles.size === 0) {
            cleanFallbackStyle();
            return;
        }
    }
    var documentVisibilityListener = null;
    var didDocumentShowUp = !document.hidden;
    function watchForDocumentVisibility(callback) {
        var alreadyWatching = Boolean(documentVisibilityListener);
        documentVisibilityListener = function () {
            if (!document.hidden) {
                stopWatchingForDocumentVisibility();
                callback();
                didDocumentShowUp = true;
            }
        };
        if (!alreadyWatching) {
            document.addEventListener(
                "visibilitychange",
                documentVisibilityListener
            );
        }
    }
    function stopWatchingForDocumentVisibility() {
        document.removeEventListener(
            "visibilitychange",
            documentVisibilityListener
        );
        documentVisibilityListener = null;
    }
    function createThemeAndWatchForUpdates() {
        createStaticStyleOverrides();
        function runDynamicStyle() {
            createDynamicStyleOverrides();
            watchForUpdates();
        }
        if (document.hidden && !filter.immediateModify) {
            watchForDocumentVisibility(runDynamicStyle);
        } else {
            runDynamicStyle();
        }
        changeMetaThemeColorWhenAvailable(filter);
    }
    function handleAdoptedStyleSheets(node) {
        try {
            if (Array.isArray(node.adoptedStyleSheets)) {
                if (node.adoptedStyleSheets.length > 0) {
                    var newManger = createAdoptedStyleSheetOverride(node);
                    adoptedStyleManagers.push(newManger);
                    newManger.render(filter, ignoredImageAnalysisSelectors);
                }
            }
        } catch (err) {}
    }
    function watchForUpdates() {
        var managedStyles = Array.from(styleManagers.keys());
        watchForStyleChanges(
            managedStyles,
            function (_a) {
                var created = _a.created,
                    updated = _a.updated,
                    removed = _a.removed,
                    moved = _a.moved;
                var stylesToRemove = removed;
                var stylesToManage = created
                    .concat(updated)
                    .concat(moved)
                    .filter(function (style) {
                        return !styleManagers.has(style);
                    });
                var stylesToRestore = moved.filter(function (style) {
                    return styleManagers.has(style);
                });
                stylesToRemove.forEach(function (style) {
                    return removeManager(style);
                });
                var newManagers = stylesToManage.map(function (style) {
                    return createManager(style);
                });
                newManagers
                    .map(function (manager) {
                        return manager.details({secondRound: false});
                    })
                    .filter(function (detail) {
                        return detail && detail.rules.length > 0;
                    })
                    .forEach(function (detail) {
                        variablesStore.addRulesForMatching(detail.rules);
                    });
                variablesStore.matchVariablesAndDependants();
                newManagers.forEach(function (manager) {
                    return manager.render(
                        filter,
                        ignoredImageAnalysisSelectors
                    );
                });
                newManagers.forEach(function (manager) {
                    return manager.watch();
                });
                stylesToRestore.forEach(function (style) {
                    return styleManagers.get(style).restore();
                });
            },
            function (shadowRoot) {
                createShadowStaticStyleOverrides(shadowRoot);
                handleAdoptedStyleSheets(shadowRoot);
            }
        );
        watchForInlineStyles(
            function (element) {
                overrideInlineStyle(
                    element,
                    filter,
                    ignoredInlineSelectors,
                    ignoredImageAnalysisSelectors
                );
                if (element === document.documentElement) {
                    var styleAttr = element.getAttribute("style") || "";
                    if (styleAttr.includes("--")) {
                        variablesStore.matchVariablesAndDependants();
                        variablesStore.putRootVars(
                            document.head.querySelector(
                                ".darkreader--root-vars"
                            ),
                            filter
                        );
                    }
                }
            },
            function (root) {
                createShadowStaticStyleOverrides(root);
                var inlineStyleElements = root.querySelectorAll(
                    INLINE_STYLE_SELECTOR
                );
                if (inlineStyleElements.length > 0) {
                    forEach(inlineStyleElements, function (el) {
                        return overrideInlineStyle(
                            el,
                            filter,
                            ignoredInlineSelectors,
                            ignoredImageAnalysisSelectors
                        );
                    });
                }
            }
        );
        addDOMReadyListener(onDOMReady);
    }
    function stopWatchingForUpdates() {
        styleManagers.forEach(function (manager) {
            return manager.pause();
        });
        stopStylePositionWatchers();
        stopWatchingForStyleChanges();
        stopWatchingForInlineStyles();
        removeDOMReadyListener(onDOMReady);
        cleanReadyStateCompleteListeners();
    }
    var metaObserver;
    function addMetaListener() {
        metaObserver = new MutationObserver(function () {
            if (document.querySelector('meta[name="darkreader-lock"]')) {
                metaObserver.disconnect();
                removeDynamicTheme();
            }
        });
        metaObserver.observe(document.head, {childList: true, subtree: true});
    }
    function createDarkReaderInstanceMarker() {
        var metaElement = document.createElement("meta");
        metaElement.name = "darkreader";
        metaElement.content = INSTANCE_ID;
        document.head.appendChild(metaElement);
    }
    function isAnotherDarkReaderInstanceActive() {
        if (document.querySelector('meta[name="darkreader-lock"]')) {
            return true;
        }
        var meta = document.querySelector('meta[name="darkreader"]');
        if (meta) {
            if (meta.content !== INSTANCE_ID) {
                return true;
            }
            return false;
        }
        createDarkReaderInstanceMarker();
        addMetaListener();
        return false;
    }
    function createOrUpdateDynamicTheme(
        filterConfig,
        dynamicThemeFixes,
        iframe
    ) {
        filter = filterConfig;
        fixes = dynamicThemeFixes;
        if (fixes) {
            ignoredImageAnalysisSelectors = Array.isArray(
                fixes.ignoreImageAnalysis
            )
                ? fixes.ignoreImageAnalysis
                : [];
            ignoredInlineSelectors = Array.isArray(fixes.ignoreInlineStyle)
                ? fixes.ignoreInlineStyle
                : [];
        } else {
            ignoredImageAnalysisSelectors = [];
            ignoredInlineSelectors = [];
        }
        if (filter.immediateModify) {
            setIsDOMReady(function () {
                return true;
            });
        }
        isIFrame$1 = iframe;
        if (document.head) {
            if (isAnotherDarkReaderInstanceActive()) {
                return;
            }
            document.documentElement.setAttribute(
                "data-darkreader-mode",
                "dynamic"
            );
            document.documentElement.setAttribute(
                "data-darkreader-scheme",
                filter.mode ? "dark" : "dimmed"
            );
            createThemeAndWatchForUpdates();
        } else {
            if (!isFirefox) {
                var fallbackStyle = createOrUpdateStyle("darkreader--fallback");
                document.documentElement.appendChild(fallbackStyle);
                fallbackStyle.textContent = getModifiedFallbackStyle(filter, {
                    strict: true
                });
            }
            var headObserver_1 = new MutationObserver(function () {
                if (document.head) {
                    headObserver_1.disconnect();
                    if (isAnotherDarkReaderInstanceActive()) {
                        removeDynamicTheme();
                        return;
                    }
                    createThemeAndWatchForUpdates();
                }
            });
            headObserver_1.observe(document, {childList: true, subtree: true});
        }
    }
    function removeProxy() {
        document.dispatchEvent(new CustomEvent("__darkreader__cleanUp"));
        removeNode(document.head.querySelector(".darkreader--proxy"));
    }
    function removeDynamicTheme() {
        document.documentElement.removeAttribute("data-darkreader-mode");
        document.documentElement.removeAttribute("data-darkreader-scheme");
        cleanDynamicThemeCache();
        removeNode(document.querySelector(".darkreader--fallback"));
        if (document.head) {
            restoreMetaThemeColor();
            removeNode(document.head.querySelector(".darkreader--user-agent"));
            removeNode(document.head.querySelector(".darkreader--text"));
            removeNode(document.head.querySelector(".darkreader--invert"));
            removeNode(document.head.querySelector(".darkreader--inline"));
            removeNode(document.head.querySelector(".darkreader--override"));
            removeNode(document.head.querySelector(".darkreader--variables"));
            removeNode(document.head.querySelector(".darkreader--root-vars"));
            removeNode(document.head.querySelector('meta[name="darkreader"]'));
            removeProxy();
        }
        shadowRootsWithOverrides.forEach(function (root) {
            removeNode(root.querySelector(".darkreader--inline"));
            removeNode(root.querySelector(".darkreader--override"));
        });
        shadowRootsWithOverrides.clear();
        forEach(styleManagers.keys(), function (el) {
            return removeManager(el);
        });
        loadingStyles.clear();
        cleanLoadingLinks();
        forEach(document.querySelectorAll(".darkreader"), removeNode);
        adoptedStyleManagers.forEach(function (manager) {
            manager.destroy();
        });
        adoptedStyleManagers.splice(0);
        metaObserver && metaObserver.disconnect();
    }
    function cleanDynamicThemeCache() {
        variablesStore.clear();
        parsedURLCache.clear();
        stopWatchingForDocumentVisibility();
        cancelRendering();
        stopWatchingForUpdates();
        cleanModificationCache();
        clearColorCache();
    }

    var blobRegex = /url\(\"(blob\:.*?)\"\)/g;
    function replaceBlobs(text) {
        return __awaiter(this, void 0, void 0, function () {
            var promises, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [];
                        getMatches(blobRegex, text, 1).forEach(function (url) {
                            var promise = loadAsDataURL(url);
                            promises.push(promise);
                        });
                        return [4, Promise.all(promises)];
                    case 1:
                        data = _a.sent();
                        return [
                            2,
                            text.replace(blobRegex, function () {
                                return 'url("'.concat(data.shift(), '")');
                            })
                        ];
                }
            });
        });
    }
    var banner =
        '/*\n                        _______\n                       /       \\\n                      .==.    .==.\n                     ((  ))==((  ))\n                    / "=="    "=="\\\n                   /____|| || ||___\\\n       ________     ____    ________  ___    ___\n       |  ___  \\   /    \\   |  ___  \\ |  |  /  /\n       |  |  \\  \\ /  /\\  \\  |  |  \\  \\|  |_/  /\n       |  |   )  /  /__\\  \\ |  |__/  /|  ___  \\\n       |  |__/  /  ______  \\|  ____  \\|  |  \\  \\\n_______|_______/__/ ____ \\__\\__|___\\__\\__|___\\__\\____\n|  ___  \\ |  ____/ /    \\   |  ___  \\ |  ____|  ___  \\\n|  |  \\  \\|  |___ /  /\\  \\  |  |  \\  \\|  |___|  |  \\  \\\n|  |__/  /|  ____/  /__\\  \\ |  |   )  |  ____|  |__/  /\n|  ____  \\|  |__/  ______  \\|  |__/  /|  |___|  ____  \\\n|__|   \\__\\____/__/      \\__\\_______/ |______|__|   \\__\\\n                https://darkreader.org\n*/\n\n/*! Dark reader generated CSS | Licensed under MIT https://github.com/darkreader/darkreader/blob/main/LICENSE */\n';
    function collectCSS() {
        return __awaiter(this, void 0, void 0, function () {
            function addStaticCSS(selector, comment) {
                var staticStyle = document.querySelector(selector);
                if (staticStyle && staticStyle.textContent) {
                    css.push("/* ".concat(comment, " */"));
                    css.push(staticStyle.textContent);
                    css.push("");
                }
            }
            var css, modifiedCSS, formattedCSS, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        css = [banner];
                        addStaticCSS(".darkreader--fallback", "Fallback Style");
                        addStaticCSS(
                            ".darkreader--user-agent",
                            "User-Agent Style"
                        );
                        addStaticCSS(".darkreader--text", "Text Style");
                        addStaticCSS(".darkreader--invert", "Invert Style");
                        addStaticCSS(
                            ".darkreader--variables",
                            "Variables Style"
                        );
                        modifiedCSS = [];
                        document
                            .querySelectorAll(".darkreader--sync")
                            .forEach(function (element) {
                                forEach(
                                    element.sheet.cssRules,
                                    function (rule) {
                                        rule &&
                                            rule.cssText &&
                                            modifiedCSS.push(rule.cssText);
                                    }
                                );
                            });
                        if (!modifiedCSS.length) return [3, 2];
                        formattedCSS = formatCSS(modifiedCSS.join("\n"));
                        css.push("/* Modified CSS */");
                        _b = (_a = css).push;
                        return [4, replaceBlobs(formattedCSS)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        css.push("");
                        _c.label = 2;
                    case 2:
                        addStaticCSS(".darkreader--override", "Override Style");
                        return [2, css.join("\n")];
                }
            });
        });
    }

    var isDarkReaderEnabled = false;
    var isIFrame = (function () {
        try {
            return window.self !== window.top;
        } catch (err) {
            console.warn(err);
            return true;
        }
    })();
    function enable(themeOptions, fixes) {
        if (themeOptions === void 0) {
            themeOptions = {};
        }
        if (fixes === void 0) {
            fixes = null;
        }
        var theme = __assign(__assign({}, DEFAULT_THEME), themeOptions);
        if (theme.engine !== ThemeEngine.dynamicTheme) {
            throw new Error("Theme engine is not supported.");
        }
        createOrUpdateDynamicTheme(theme, fixes, isIFrame);
        isDarkReaderEnabled = true;
    }
    function isEnabled() {
        return isDarkReaderEnabled;
    }
    function disable() {
        removeDynamicTheme();
        isDarkReaderEnabled = false;
    }
    var darkScheme = matchMedia("(prefers-color-scheme: dark)");
    var store = {
        themeOptions: null,
        fixes: null
    };
    function handleColorScheme() {
        if (darkScheme.matches) {
            enable(store.themeOptions, store.fixes);
        } else {
            disable();
        }
    }
    function auto(themeOptions, fixes) {
        if (themeOptions === void 0) {
            themeOptions = {};
        }
        if (fixes === void 0) {
            fixes = null;
        }
        if (themeOptions) {
            store = {themeOptions: themeOptions, fixes: fixes};
            handleColorScheme();
            if (isMatchMediaChangeEventListenerSupported) {
                darkScheme.addEventListener("change", handleColorScheme);
            } else {
                darkScheme.addListener(handleColorScheme);
            }
        } else {
            if (isMatchMediaChangeEventListenerSupported) {
                darkScheme.removeEventListener("change", handleColorScheme);
            } else {
                darkScheme.removeListener(handleColorScheme);
            }
            disable();
        }
    }
    function exportGeneratedCSS() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, collectCSS()];
                    case 1:
                        return [2, _a.sent()];
                }
            });
        });
    }
    var setFetchMethod = setFetchMethod$1;

    exports.auto = auto;
    exports.disable = disable;
    exports.enable = enable;
    exports.exportGeneratedCSS = exportGeneratedCSS;
    exports.isEnabled = isEnabled;
    exports.setFetchMethod = setFetchMethod;

    Object.defineProperty(exports, "__esModule", {value: true});
});


/***/ }),

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var dr_1 = __webpack_require__(/*! ./util/dr */ "./util/dr.ts");
var templates_1 = __webpack_require__(/*! ./util/templates */ "./util/templates.ts");
(0, dr_1.darkify)(window.document);
if (window.marloweWindow != undefined) {
    window.marloweWindow().then(function (mw) {
        window.api = {
            state: {
                isMarloweContractGenerated: false,
                isMarloweContractSampled: false,
                samplingInProgress: false
            },
            injectMarloweContract: function (c, updateState) {
                if (updateState === void 0) { updateState = true; }
                return __awaiter(void 0, void 0, void 0, function () {
                    var marloweHome, dontSave, raw, goToEditor, menuBar, meta, staticAnalysis, toInject, _a, goToBlocks, cancel;
                    var _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (updateState) {
                                    window.api.state.contract = c;
                                }
                                marloweHome = mw.document.querySelector(".h-10");
                                marloweHome === null || marloweHome === void 0 ? void 0 : marloweHome.click();
                                dontSave = mw.document.querySelector(".mr-medium");
                                dontSave === null || dontSave === void 0 ? void 0 : dontSave.click();
                                if (!(window.api.state.template == undefined)) return [3 /*break*/, 3];
                                return [4 /*yield*/, fetch(window.location.origin + "/marlowe-wolfram-webdoc/contracts/".concat(c.template, ".marlowe"))];
                            case 1: return [4 /*yield*/, (_c.sent()).text()];
                            case 2:
                                raw = _c.sent();
                                window.api.state.template = raw;
                                return [3 /*break*/, 4];
                            case 3:
                                raw = window.api.state.template;
                                _c.label = 4;
                            case 4:
                                goToEditor = mw.document.querySelector('.mr-4');
                                goToEditor === null || goToEditor === void 0 ? void 0 : goToEditor.click();
                                menuBar = mw.document.querySelector(".menu-bar");
                                menuBar === null || menuBar === void 0 ? void 0 : menuBar.setAttribute('style', "display: none");
                                meta = mw.document.querySelector(".text-secondary");
                                meta === null || meta === void 0 ? void 0 : meta.setAttribute('style', "display: none");
                                staticAnalysis = mw.document.querySelector(".text-gray-darkest");
                                staticAnalysis === null || staticAnalysis === void 0 ? void 0 : staticAnalysis.setAttribute('style', "display: none");
                                toInject = (0, templates_1.processTemplate)(c.template, c.terms, raw);
                                _c.label = 5;
                            case 5:
                                _c.trys.push([5, 7, , 8]);
                                return [4 /*yield*/, mw.monaco.editor.getModels()[mw.monaco.editor.getModels().length - 2].dispose()];
                            case 6:
                                _c.sent();
                                return [3 /*break*/, 8];
                            case 7:
                                _a = _c.sent();
                                return [3 /*break*/, 8];
                            case 8: return [4 /*yield*/, mw.monaco.editor.getModels()[mw.monaco.editor.getModels().length - 1].setValue(toInject)];
                            case 9:
                                _c.sent();
                                goToBlocks = (_b = mw.document.querySelector('.group')) === null || _b === void 0 ? void 0 : _b.querySelector('.btn');
                                goToBlocks === null || goToBlocks === void 0 ? void 0 : goToBlocks.click();
                                cancel = mw.document.querySelector(".uppercase");
                                cancel === null || cancel === void 0 ? void 0 : cancel.click();
                                window.api.state.isMarloweContractGenerated = true;
                                window.dispatchEvent(new Event("state"));
                                return [2 /*return*/];
                        }
                    });
                });
            },
            sampleMarloweContract: function () { return __awaiter(void 0, void 0, void 0, function () {
                var i, c, sendToSimulator, startSimulation, aliceDeposit, bobDeposit, skipToExercise, confirm_1, log, extractBobPayoffOpt, extractAlicePayoffOpt, bobPayoff, alicePayoff, endSimulation;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            window.api.state.samplingInProgress = true;
                            window.api.state.sample = [];
                            i = window.api.state.contract.terms.minValue;
                            _c.label = 1;
                        case 1:
                            if (!(i <= window.api.state.contract.terms.maxValue)) return [3 /*break*/, 7];
                            c = __assign(__assign({}, window.api.state.contract), { terms: __assign({}, window.api.state.contract.terms) });
                            c.terms.minValue = i;
                            c.terms.maxValue = i;
                            return [4 /*yield*/, window.api.injectMarloweContract(c, false)];
                        case 2:
                            _c.sent();
                            console.log(i);
                            sendToSimulator = mw.document.querySelectorAll('button')[1];
                            _c.label = 3;
                        case 3:
                            if (!sendToSimulator['disabled']) return [3 /*break*/, 5];
                            console.log("AWAIT");
                            return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                        case 4:
                            _c.sent();
                            return [3 /*break*/, 3];
                        case 5:
                            //await new Promise(r => setTimeout(r, 3000));
                            sendToSimulator.click();
                            startSimulation = mw.document.querySelectorAll('button')[2];
                            startSimulation.click();
                            aliceDeposit = mw.document.querySelector('.plus-btn');
                            aliceDeposit === null || aliceDeposit === void 0 ? void 0 : aliceDeposit.click();
                            bobDeposit = mw.document.querySelector('.plus-btn');
                            bobDeposit === null || bobDeposit === void 0 ? void 0 : bobDeposit.click();
                            skipToExercise = mw.document.querySelectorAll('.plus-btn')[2];
                            skipToExercise === null || skipToExercise === void 0 ? void 0 : skipToExercise.click();
                            confirm_1 = mw.document.querySelector('.plus-btn');
                            confirm_1 === null || confirm_1 === void 0 ? void 0 : confirm_1.click();
                            log = mw.document.querySelector('.grid-cols-description-location');
                            extractBobPayoffOpt = (_a = /The contract pays ₳ (\d+) from account of Bob to Bob wallet/.exec(log.innerText)) === null || _a === void 0 ? void 0 : _a[1];
                            extractAlicePayoffOpt = (_b = /The contract pays ₳ (\d+) from account of Alice to Alice wallet/.exec(log.innerText)) === null || _b === void 0 ? void 0 : _b[1];
                            bobPayoff = extractBobPayoffOpt == null || Number.isNaN(parseInt(extractBobPayoffOpt)) ? 0 : parseInt(extractBobPayoffOpt);
                            alicePayoff = extractAlicePayoffOpt == null || Number.isNaN(parseInt(extractAlicePayoffOpt)) ? 0 : parseInt(extractAlicePayoffOpt);
                            //console.log(window.api.state.sample)
                            window.api.state.sample.push({ oracleValue: i, alicePayout: alicePayoff, bobPayout: bobPayoff });
                            endSimulation = mw.document.querySelectorAll('button')[0];
                            endSimulation.click();
                            _c.label = 6;
                        case 6:
                            i += 100;
                            return [3 /*break*/, 1];
                        case 7:
                            console.log(window.api.state.sample);
                            window.api.state.samplingInProgress = false;
                            window.api.state.isMarloweContractSampled = true;
                            window.dispatchEvent(new Event("state"));
                            return [2 /*return*/];
                    }
                });
            }); }
        };
        var poll = function () { return __awaiter(void 0, void 0, void 0, function () {
            var original, url, response, raw, rx, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        original = 'https://api.wolframalpha.com/v1/result?appid=6WU6JX-46EP5U9AGX&i=1%20btc%20to%20usd%20number';
                        url = 'https://corsproxy.io/?' + encodeURIComponent(original);
                        response = fetch(url);
                        return [4 /*yield*/, response];
                    case 1: return [4 /*yield*/, (_a.sent()).text()];
                    case 2:
                        raw = (_a.sent());
                        rx = /\d+/g;
                        res = rx.exec(raw);
                        if (res != null)
                            window.tick = parseInt(res[0]);
                        window.dispatchEvent(new Event("tick"));
                        return [2 /*return*/];
                }
            });
        }); };
        poll();
        setInterval(poll, 10000);
    });
}


/***/ }),

/***/ "./util/dr.ts":
/*!********************!*\
  !*** ./util/dr.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.darkify = void 0;
var darkreader_1 = __webpack_require__(/*! darkreader */ "./node_modules/darkreader/darkreader.js");
function addStyle(doc, styleString) {
    var style = doc.createElement('style');
    style.textContent = styleString;
    doc.head.append(style);
}
var darkify = function (doc) { return __awaiter(void 0, void 0, void 0, function () {
    var CSS;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, darkreader_1.setFetchMethod)(window.fetch);
                (0, darkreader_1.enable)({
                    brightness: 100,
                    contrast: 90,
                    sepia: 10,
                });
                return [4 /*yield*/, (0, darkreader_1.exportGeneratedCSS)()];
            case 1:
                CSS = _a.sent();
                addStyle(doc, CSS);
                return [2 /*return*/];
        }
    });
}); };
exports.darkify = darkify;
console.log(window.location.href);


/***/ }),

/***/ "./util/templates.ts":
/*!***************************!*\
  !*** ./util/templates.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.processTemplate = void 0;
var processTemplate = function (name, subst, template) {
    switch (name) {
        case 'eurocall': return template
            .replace("$notional", subst.notional.toString())
            .replace("$margin", subst.margin.toString())
            .replace("$strike", subst.strike.toString())
            .replace("$premium", subst.premium.toString())
            .replace("$minValue", subst.minValue.toString())
            .replace("$maxValue", subst.maxValue.toString());
    }
    return template;
};
exports.processTemplate = processTemplate;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxXQUFXO0FBQ3BELDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHNDQUFzQyxnQkFBZ0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiLG9DQUFvQywrQkFBK0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0EsaURBQWlELFVBQVU7QUFDM0Q7QUFDQSxxREFBcUQsVUFBVTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRCxzQkFBc0I7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBC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Q2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxRQUFRO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFlBQVk7QUFDOUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3Q1T0QsZ0VBQW9DO0FBQ3BDLHFGQUFtRDtBQTJDbkQsZ0JBQU8sRUFBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBRXhCLElBQUksTUFBTSxDQUFDLGFBQWEsSUFBSSxTQUFTLEVBQUU7SUFDbkMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFFO1FBRzFCLE1BQU0sQ0FBQyxHQUFHLEdBQUc7WUFDVCxLQUFLLEVBQUU7Z0JBQ0gsMEJBQTBCLEVBQUUsS0FBSztnQkFDakMsd0JBQXdCLEVBQUUsS0FBSztnQkFDL0Isa0JBQWtCLEVBQUUsS0FBSzthQUM1QjtZQUNELHFCQUFxQixFQUFFLFVBQU8sQ0FBa0IsRUFBRSxXQUFrQjtnQkFBbEIsZ0RBQWtCOzs7Ozs7O2dDQUNoRSxJQUFJLFdBQVcsRUFBRTtvQ0FDYixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQztpQ0FDaEM7Z0NBQ0csV0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBZ0I7Z0NBQ25FLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxLQUFLLEVBQUU7Z0NBRWhCLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQWdCO2dDQUNyRSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsS0FBSyxFQUFFO3FDQUdiLE9BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxTQUFTLEdBQXRDLHdCQUFzQztnQ0FDekIscUJBQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLDRDQUFxQyxDQUFDLENBQUMsUUFBUSxhQUFVLENBQUM7b0NBQXRHLHFCQUFNLENBQUMsU0FBK0YsQ0FBQyxDQUFDLElBQUksRUFBRTs7Z0NBQXBILEdBQUcsR0FBRyxTQUE4RztnQ0FDcEgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUc7OztnQ0FHL0IsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVE7OztnQ0FJL0IsVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBZ0I7Z0NBQ2xFLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxLQUFLLEVBQUU7Z0NBR2YsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBZ0I7Z0NBQ25FLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztnQ0FFM0MsSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFnQjtnQ0FDdEUsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO2dDQUV4QyxjQUFjLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQWdCO2dDQUNuRixjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7Z0NBRWxELFFBQVEsR0FBRywrQkFBZSxFQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7Ozs7Z0NBR3BELHFCQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7O2dDQUFyRixTQUFxRjs7Ozs7b0NBTXpGLHFCQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDOztnQ0FBOUYsU0FBOEY7Z0NBSTFGLFVBQVUsR0FBRyxRQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsMENBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBZ0I7Z0NBQzFGLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxLQUFLLEVBQUU7Z0NBRWYsTUFBTSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBZ0I7Z0NBQ25FLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxLQUFLLEVBQUU7Z0NBRWYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEdBQUcsSUFBSTtnQ0FDbEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7YUFDM0M7WUFDRCxxQkFBcUIsRUFBRTs7Ozs7OzRCQUVuQixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFJOzRCQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRTs0QkFDbkIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUTs7O2lDQUFFLEVBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFTLENBQUMsS0FBSyxDQUFDLFFBQVE7NEJBQzlGLENBQUMseUJBQVEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUyxLQUFFLEtBQUssZUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFTLENBQUMsS0FBSyxJQUFJOzRCQUV4RixDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDOzRCQUNwQixDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDOzRCQUVwQixxQkFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7OzRCQUFoRCxTQUFnRDs0QkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ1YsZUFBZSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFnQjs7O2lDQUV4RSxlQUFlLENBQUMsVUFBVSxDQUFDOzRCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs0QkFDcEIscUJBQU0sSUFBSSxPQUFPLENBQUMsV0FBQyxJQUFJLGlCQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDOzs0QkFBMUMsU0FBMEMsQ0FBQzs7OzRCQUUvQyw4Q0FBOEM7NEJBQzlDLGVBQWUsQ0FBQyxLQUFLLEVBQUU7NEJBR25CLGVBQWUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBZ0I7NEJBQzlFLGVBQWUsQ0FBQyxLQUFLLEVBQUU7NEJBRW5CLFlBQVksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQWdCOzRCQUN4RSxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsS0FBSyxFQUFFOzRCQUVqQixVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFnQjs0QkFDdEUsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLEtBQUssRUFBRTs0QkFFZixjQUFjLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQWdCOzRCQUNoRixjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsS0FBSyxFQUFFOzRCQUVuQixZQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBZ0I7NEJBQ25FLFNBQU8sYUFBUCxTQUFPLHVCQUFQLFNBQU8sQ0FBRSxLQUFLLEVBQUU7NEJBRVosR0FBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGlDQUFpQyxDQUFnQjs0QkFDakYsbUJBQW1CLEdBQUcsbUVBQTZELENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsMENBQUcsQ0FBQyxDQUFDOzRCQUM1RyxxQkFBcUIsR0FBRyx1RUFBaUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQywwQ0FBRyxDQUFDLENBQUM7NEJBQ2xILFNBQVMsR0FBRyxtQkFBbUIsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQzs0QkFDMUgsV0FBVyxHQUFHLHFCQUFxQixJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDOzRCQUV0SSxzQ0FBc0M7NEJBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxDQUFDOzRCQUMxRixhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQWdCOzRCQUM1RSxhQUFhLENBQUMsS0FBSyxFQUFFOzs7NEJBMUMrRSxDQUFDLElBQUUsR0FBRzs7OzRCQThDOUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7NEJBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEtBQUs7NEJBRTNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLElBQUk7NEJBQ2hELE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7aUJBSTNDO1NBQ0o7UUFDRCxJQUFJLElBQUksR0FBRzs7Ozs7d0JBQ0QsUUFBUSxHQUFHLDhGQUE4Rjt3QkFDekcsR0FBRyxHQUFHLHdCQUF3QixHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzt3QkFFL0QsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7d0JBQ1AscUJBQU0sUUFBUTs0QkFBckIscUJBQU0sQ0FBQyxTQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUU7O3dCQUFwQyxHQUFHLEdBQUcsQ0FBQyxTQUE2QixDQUFDO3dCQUNyQyxFQUFFLEdBQUcsTUFBTSxDQUFDO3dCQUNaLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDdEIsSUFBSSxHQUFHLElBQUksSUFBSTs0QkFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFJaEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs7OzthQUUxQztRQUNELElBQUksRUFBRTtRQUNOLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0lBRTVCLENBQUMsQ0FBQztDQUlMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTUQsb0dBSW9CO0FBRXBCLFNBQVMsUUFBUSxDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQzlCLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsS0FBSyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVNLElBQU0sT0FBTyxHQUFHLFVBQU8sR0FBRzs7Ozs7Z0JBQzdCLCtCQUFjLEVBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFFNUIsdUJBQWMsRUFBQztvQkFDWCxVQUFVLEVBQUUsR0FBRztvQkFDZixRQUFRLEVBQUUsRUFBRTtvQkFDWixLQUFLLEVBQUUsRUFBRTtpQkFDWixDQUFDLENBQUM7Z0JBRVMscUJBQU0sbUNBQVUsR0FBRTs7Z0JBQXhCLEdBQUcsR0FBRyxTQUFrQjtnQkFDOUIsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Ozs7S0FFckI7QUFaWSxlQUFPLFdBWW5CO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUIxQixJQUFNLGVBQWUsR0FBRyxVQUFDLElBQVksRUFBRSxLQUE4QixFQUFFLFFBQWdCO0lBQzFGLFFBQVEsSUFBSSxFQUFFO1FBQ1YsS0FBSyxVQUFVLENBQUMsQ0FBQyxPQUFPLFFBQVE7YUFDM0IsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQy9DLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMzQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDM0MsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzdDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMvQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdkQ7SUFDRCxPQUFPLFFBQVE7QUFDbkIsQ0FBQztBQVhZLHVCQUFlLG1CQVczQjs7Ozs7OztVQ1hEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJsb3dlLXdvbGZyYW0td2ViZG9jLy4vbm9kZV9tb2R1bGVzL2RhcmtyZWFkZXIvZGFya3JlYWRlci5qcyIsIndlYnBhY2s6Ly9tYXJsb3dlLXdvbGZyYW0td2ViZG9jLy4vYXBwLnRzIiwid2VicGFjazovL21hcmxvd2Utd29sZnJhbS13ZWJkb2MvLi91dGlsL2RyLnRzIiwid2VicGFjazovL21hcmxvd2Utd29sZnJhbS13ZWJkb2MvLi91dGlsL3RlbXBsYXRlcy50cyIsIndlYnBhY2s6Ly9tYXJsb3dlLXdvbGZyYW0td2ViZG9jL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hcmxvd2Utd29sZnJhbS13ZWJkb2Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9tYXJsb3dlLXdvbGZyYW0td2ViZG9jL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9tYXJsb3dlLXdvbGZyYW0td2ViZG9jL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRGFyayBSZWFkZXIgdjQuOS41OFxyXG4gKiBodHRwczovL2RhcmtyZWFkZXIub3JnL1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XHJcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgPyBmYWN0b3J5KGV4cG9ydHMpXHJcbiAgICAgICAgOiB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZFxyXG4gICAgICAgID8gZGVmaW5lKFtcImV4cG9ydHNcIl0sIGZhY3RvcnkpXHJcbiAgICAgICAgOiAoKGdsb2JhbCA9XHJcbiAgICAgICAgICAgICAgdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYpLFxyXG4gICAgICAgICAgZmFjdG9yeSgoZ2xvYmFsLkRhcmtSZWFkZXIgPSB7fSkpKTtcclxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuICAgIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG4gICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuICAgIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG4gICAgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG4gICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbiAgICBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG4gICAgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG4gICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9fYXNzaWduID1cclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbiB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQXHJcbiAgICAgICAgICAgICAgICA/IHZhbHVlXHJcbiAgICAgICAgICAgICAgICA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9uZVxyXG4gICAgICAgICAgICAgICAgICAgID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RlcChcclxuICAgICAgICAgICAgICAgIChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgICAgICB2YXIgXyA9IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAwLFxyXG4gICAgICAgICAgICAgICAgc2VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdFsxXTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0cnlzOiBbXSxcclxuICAgICAgICAgICAgICAgIG9wczogW11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZixcclxuICAgICAgICAgICAgeSxcclxuICAgICAgICAgICAgdCxcclxuICAgICAgICAgICAgZztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAoZyA9IHtuZXh0OiB2ZXJiKDApLCB0aHJvdzogdmVyYigxKSwgcmV0dXJuOiB2ZXJiKDIpfSksXHJcbiAgICAgICAgICAgIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmdW5jdGlvbiB2ZXJiKG4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RlcChbbiwgdl0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICAgICAgd2hpbGUgKF8pXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKChmID0gMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcFswXSAmIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB5W1wicmV0dXJuXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogb3BbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB5W1widGhyb3dcIl0gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogeS5uZXh0KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoKHkgPSAwKSwgdCkpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmxhYmVsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3ZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2V9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmxhYmVsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gb3BbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcCA9IFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcCA9IF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISgodCA9IF8udHJ5cyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcFswXSA9PT0gMyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmxhYmVsID0gb3BbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmxhYmVsID0gdFsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ubGFiZWwgPSB0WzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3BzLnB1c2gob3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wID0gWzYsIGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gdCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdO1xyXG4gICAgICAgICAgICByZXR1cm4ge3ZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvcixcclxuICAgICAgICAgICAgbSA9IHMgJiYgb1tzXSxcclxuICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICAgICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgICAgICBzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICAgICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICAgICAgdmFyIGkgPSBtLmNhbGwobyksXHJcbiAgICAgICAgICAgIHIsXHJcbiAgICAgICAgICAgIGFyID0gW10sXHJcbiAgICAgICAgICAgIGU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpXHJcbiAgICAgICAgICAgICAgICBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGUgPSB7ZXJyb3I6IGVycm9yfTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgTWVzc2FnZVR5cGU7XHJcbiAgICAoZnVuY3Rpb24gKE1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9HRVRfREFUQVwiXSA9IFwidWktZ2V0LWRhdGFcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1NVQlNDUklCRV9UT19DSEFOR0VTXCJdID0gXCJ1aS1zdWJzY3JpYmUtdG8tY2hhbmdlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfVU5TVUJTQ1JJQkVfRlJPTV9DSEFOR0VTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS11bnN1YnNjcmliZS1mcm9tLWNoYW5nZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX0NIQU5HRV9TRVRUSU5HU1wiXSA9IFwidWktY2hhbmdlLXNldHRpbmdzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9TRVRfVEhFTUVcIl0gPSBcInVpLXNldC10aGVtZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfU0VUX1NIT1JUQ1VUXCJdID0gXCJ1aS1zZXQtc2hvcnRjdXRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1RPR0dMRV9BQ1RJVkVfVEFCXCJdID0gXCJ1aS10b2dnbGUtYWN0aXZlLXRhYlwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfTUFSS19ORVdTX0FTX1JFQURcIl0gPSBcInVpLW1hcmstbmV3cy1hcy1yZWFkXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9NQVJLX05FV1NfQVNfRElTUExBWUVEXCJdID0gXCJ1aS1tYXJrLW5ld3MtYXMtZGlzcGxheWVkXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9MT0FEX0NPTkZJR1wiXSA9IFwidWktbG9hZC1jb25maWdcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX0FQUExZX0RFVl9EWU5BTUlDX1RIRU1FX0ZJWEVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1hcHBseS1kZXYtZHluYW1pYy10aGVtZS1maXhlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfUkVTRVRfREVWX0RZTkFNSUNfVEhFTUVfRklYRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLXJlc2V0LWRldi1keW5hbWljLXRoZW1lLWZpeGVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9BUFBMWV9ERVZfSU5WRVJTSU9OX0ZJWEVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1hcHBseS1kZXYtaW52ZXJzaW9uLWZpeGVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9SRVNFVF9ERVZfSU5WRVJTSU9OX0ZJWEVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1yZXNldC1kZXYtaW52ZXJzaW9uLWZpeGVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9BUFBMWV9ERVZfU1RBVElDX1RIRU1FU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktYXBwbHktZGV2LXN0YXRpYy10aGVtZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1JFU0VUX0RFVl9TVEFUSUNfVEhFTUVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1yZXNldC1kZXYtc3RhdGljLXRoZW1lc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfU0FWRV9GSUxFXCJdID0gXCJ1aS1zYXZlLWZpbGVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1JFUVVFU1RfRVhQT1JUX0NTU1wiXSA9IFwidWktcmVxdWVzdC1leHBvcnQtY3NzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9DT0xPUl9TQ0hFTUVfQ0hBTkdFXCJdID0gXCJ1aS1jb2xvci1zY2hlbWUtY2hhbmdlXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19DSEFOR0VTXCJdID0gXCJiZy1jaGFuZ2VzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19BRERfQ1NTX0ZJTFRFUlwiXSA9IFwiYmctYWRkLWNzcy1maWx0ZXJcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX0FERF9TVEFUSUNfVEhFTUVcIl0gPSBcImJnLWFkZC1zdGF0aWMtdGhlbWVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX0FERF9TVkdfRklMVEVSXCJdID0gXCJiZy1hZGQtc3ZnLWZpbHRlclwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfQUREX0RZTkFNSUNfVEhFTUVcIl0gPSBcImJnLWFkZC1keW5hbWljLXRoZW1lXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19FWFBPUlRfQ1NTXCJdID0gXCJiZy1leHBvcnQtY3NzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19VTlNVUFBPUlRFRF9TRU5ERVJcIl0gPSBcImJnLXVuc3VwcG9ydGVkLXNlbmRlclwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfQ0xFQU5fVVBcIl0gPSBcImJnLWNsZWFuLXVwXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19SRUxPQURcIl0gPSBcImJnLXJlbG9hZFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfRkVUQ0hfUkVTUE9OU0VcIl0gPSBcImJnLWZldGNoLXJlc3BvbnNlXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19VSV9VUERBVEVcIl0gPSBcImJnLXVpLXVwZGF0ZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfQ1NTX1VQREFURVwiXSA9IFwiYmctY3NzLXVwZGF0ZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfQ09MT1JfU0NIRU1FX0NIQU5HRVwiXSA9IFwiY3MtY29sb3Itc2NoZW1lLWNoYW5nZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfRlJBTUVfQ09OTkVDVFwiXSA9IFwiY3MtZnJhbWUtY29ubmVjdFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfRlJBTUVfRk9SR0VUXCJdID0gXCJjcy1mcmFtZS1mb3JnZXRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkNTX0ZSQU1FX0ZSRUVaRVwiXSA9IFwiY3MtZnJhbWUtZnJlZXplXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19GUkFNRV9SRVNVTUVcIl0gPSBcImNzLWZyYW1lLXJlc3VtZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfRVhQT1JUX0NTU19SRVNQT05TRVwiXSA9IFwiY3MtZXhwb3J0LWNzcy1yZXNwb25zZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfRkVUQ0hcIl0gPSBcImNzLWZldGNoXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19EQVJLX1RIRU1FX0RFVEVDVEVEXCJdID0gXCJjcy1kYXJrLXRoZW1lLWRldGVjdGVkXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19EQVJLX1RIRU1FX05PVF9ERVRFQ1RFRFwiXSA9XHJcbiAgICAgICAgICAgIFwiY3MtZGFyay10aGVtZS1ub3QtZGV0ZWN0ZWRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkNTX0xPR1wiXSA9IFwiY3MtbG9nXCI7XHJcbiAgICB9KShNZXNzYWdlVHlwZSB8fCAoTWVzc2FnZVR5cGUgPSB7fSkpO1xyXG5cclxuICAgIHZhciBpc05hdmlnYXRvckRlZmluZWQgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgdmFyIHVzZXJBZ2VudCA9IGlzTmF2aWdhdG9yRGVmaW5lZFxyXG4gICAgICAgID8gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEgJiZcclxuICAgICAgICAgIEFycmF5LmlzQXJyYXkobmF2aWdhdG9yLnVzZXJBZ2VudERhdGEuYnJhbmRzKVxyXG4gICAgICAgICAgICA/IG5hdmlnYXRvci51c2VyQWdlbnREYXRhLmJyYW5kc1xyXG4gICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChicmFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGJyYW5kLmJyYW5kLnRvTG93ZXJDYXNlKCksIFwiIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoYnJhbmQudmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5qb2luKFwiIFwiKVxyXG4gICAgICAgICAgICA6IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIDogXCJzb21lIHVzZXJhZ2VudFwiO1xyXG4gICAgdmFyIHBsYXRmb3JtID0gaXNOYXZpZ2F0b3JEZWZpbmVkXHJcbiAgICAgICAgPyBuYXZpZ2F0b3IudXNlckFnZW50RGF0YSAmJlxyXG4gICAgICAgICAgdHlwZW9mIG5hdmlnYXRvci51c2VyQWdlbnREYXRhLnBsYXRmb3JtID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgID8gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEucGxhdGZvcm0udG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICA6IG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgOiBcInNvbWUgcGxhdGZvcm1cIjtcclxuICAgIHZhciBpc0Nocm9taXVtID1cclxuICAgICAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJjaHJvbWVcIikgfHwgdXNlckFnZW50LmluY2x1ZGVzKFwiY2hyb21pdW1cIik7XHJcbiAgICB2YXIgaXNUaHVuZGVyYmlyZCA9IHVzZXJBZ2VudC5pbmNsdWRlcyhcInRodW5kZXJiaXJkXCIpO1xyXG4gICAgdmFyIGlzRmlyZWZveCA9XHJcbiAgICAgICAgdXNlckFnZW50LmluY2x1ZGVzKFwiZmlyZWZveFwiKSB8fFxyXG4gICAgICAgIHVzZXJBZ2VudC5pbmNsdWRlcyhcImxpYnJld29sZlwiKSB8fFxyXG4gICAgICAgIGlzVGh1bmRlcmJpcmQ7XHJcbiAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJ2aXZhbGRpXCIpO1xyXG4gICAgdXNlckFnZW50LmluY2x1ZGVzKFwieWFicm93c2VyXCIpO1xyXG4gICAgdXNlckFnZW50LmluY2x1ZGVzKFwib3ByXCIpIHx8IHVzZXJBZ2VudC5pbmNsdWRlcyhcIm9wZXJhXCIpO1xyXG4gICAgdXNlckFnZW50LmluY2x1ZGVzKFwiZWRnXCIpO1xyXG4gICAgdmFyIGlzU2FmYXJpID0gdXNlckFnZW50LmluY2x1ZGVzKFwic2FmYXJpXCIpICYmICFpc0Nocm9taXVtO1xyXG4gICAgdmFyIGlzV2luZG93cyA9IHBsYXRmb3JtLnN0YXJ0c1dpdGgoXCJ3aW5cIik7XHJcbiAgICB2YXIgaXNNYWNPUyA9IHBsYXRmb3JtLnN0YXJ0c1dpdGgoXCJtYWNcIik7XHJcbiAgICBpc05hdmlnYXRvckRlZmluZWQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudERhdGFcclxuICAgICAgICA/IG5hdmlnYXRvci51c2VyQWdlbnREYXRhLm1vYmlsZVxyXG4gICAgICAgIDogdXNlckFnZW50LmluY2x1ZGVzKFwibW9iaWxlXCIpO1xyXG4gICAgdmFyIGlzU2hhZG93RG9tU3VwcG9ydGVkID0gdHlwZW9mIFNoYWRvd1Jvb3QgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIHZhciBpc01hdGNoTWVkaWFDaGFuZ2VFdmVudExpc3RlbmVyU3VwcG9ydGVkID1cclxuICAgICAgICB0eXBlb2YgTWVkaWFRdWVyeUxpc3QgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG4gICAgICAgIHR5cGVvZiBNZWRpYVF1ZXJ5TGlzdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbSA9IHVzZXJBZ2VudC5tYXRjaCgvY2hyb20oPzplfGl1bSkoPzpcXC98ICkoW14gXSspLyk7XHJcbiAgICAgICAgaWYgKG0gJiYgbVsxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9KSgpO1xyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbSA9IHVzZXJBZ2VudC5tYXRjaCgvKD86ZmlyZWZveHxsaWJyZXdvbGYpKD86XFwvfCApKFteIF0rKS8pO1xyXG4gICAgICAgIGlmIChtICYmIG1bMV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1bMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfSkoKTtcclxuICAgIHZhciBpc0RlZmluZWRTZWxlY3RvclN1cHBvcnRlZCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgICB2YXIgaXNDU1NDb2xvclNjaGVtZVByb3BTdXBwb3J0ZWQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiY29sb3Itc2NoZW1lOiBkYXJrXCIpO1xyXG4gICAgICAgIHJldHVybiBlbC5zdHlsZSAmJiBlbC5zdHlsZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCI7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE9LUmVzcG9uc2UodXJsLCBtaW1lVHlwZSwgb3JpZ2luKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJvbWl0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJyZXI6IG9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZpcmVmb3ggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlID09PSBcInRleHQvY3NzXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybC5zdGFydHNXaXRoKFwibW96LWV4dGVuc2lvbjovL1wiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsLmVuZHNXaXRoKFwiLmNzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgcmVzcG9uc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzcG9uc2UuaGVhZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXCJDb250ZW50LVR5cGVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnRzV2l0aChtaW1lVHlwZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNaW1lIHR5cGUgbWlzbWF0Y2ggd2hlbiBsb2FkaW5nIFwiLmNvbmNhdCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuYWJsZSB0byBsb2FkIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQodXJsLCBcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChyZXNwb25zZS5zdGF0dXMsIFwiIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgcmVzcG9uc2VdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGxvYWRBc0RhdGFVUkwodXJsLCBtaW1lVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGdldE9LUmVzcG9uc2UodXJsLCBtaW1lVHlwZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcmVhZFJlc3BvbnNlQXNEYXRhVVJMKHJlc3BvbnNlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVhZFJlc3BvbnNlQXNEYXRhVVJMKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmxvYiwgZGF0YVVSTDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCByZXNwb25zZS5ibG9iKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvYiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVSTCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBkYXRhVVJMXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRocm93Q09SU0Vycm9yID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVtYmVkZGVkIERhcmsgUmVhZGVyIGNhbm5vdCBhY2Nlc3MgYSBjcm9zcy1vcmlnaW4gcmVzb3VyY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPdmVydmlldyB5b3VyIFVSTHMgYW5kIENPUlMgcG9saWNpZXMgb3IgdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJgRGFya1JlYWRlci5zZXRGZXRjaE1ldGhvZChmZXRjaDogKHVybCkgPT4gUHJvbWlzZTxSZXNwb25zZT4pKWAuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTZWUgaWYgdXNpbmcgYERhcmtSZWFkZXIuc2V0RmV0Y2hNZXRob2Qod2luZG93LmZldGNoKWBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJlZm9yZSBgRGFya1JlYWRlci5lbmFibGUoKWAgd29ya3MuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbihcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBmZXRjaGVyID0gdGhyb3dDT1JTRXJyb3I7XHJcbiAgICBmdW5jdGlvbiBzZXRGZXRjaE1ldGhvZCQxKGZldGNoKSB7XHJcbiAgICAgICAgaWYgKGZldGNoKSB7XHJcbiAgICAgICAgICAgIGZldGNoZXIgPSBmZXRjaDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmZXRjaGVyID0gdGhyb3dDT1JTRXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsbEZldGNoTWV0aG9kKHVybCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBmZXRjaGVyKHVybCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXdpbmRvdy5jaHJvbWUpIHtcclxuICAgICAgICB3aW5kb3cuY2hyb21lID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAoIWNocm9tZS5ydW50aW1lKSB7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUgPSB7fTtcclxuICAgIH1cclxuICAgIHZhciBtZXNzYWdlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGlkXzEsIF9hLCB1cmwsIHJlc3BvbnNlVHlwZSwgcmVzcG9uc2UsIHRleHRfMSwgZXJyb3JfMTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoYXJnc1swXSAmJiBhcmdzWzBdLnR5cGUgPT09IE1lc3NhZ2VUeXBlLkNTX0ZFVENIKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgOF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXzEgPSBhcmdzWzBdLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDcsICwgOF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBhcmdzWzBdLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHVybCA9IF9hLnVybCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VUeXBlID0gX2EucmVzcG9uc2VUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBjYWxsRmV0Y2hNZXRob2QodXJsKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmVzcG9uc2VUeXBlID09PSBcImRhdGEtdXJsXCIpKSByZXR1cm4gWzMsIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHJlYWRSZXNwb25zZUFzRGF0YVVSTChyZXNwb25zZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF8xID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCByZXNwb25zZS50ZXh0KCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF8xID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkJHX0ZFVENIX1JFU1BPTlNFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRleHRfMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRfMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcl8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5CR19GRVRDSF9SRVNQT05TRSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZF8xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgOF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZE1lc3NhZ2VMaXN0ZW5lcihjYWxsYmFjaykge1xyXG4gICAgICAgIG1lc3NhZ2VMaXN0ZW5lcnMuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHZhciBuYXRpdmVTZW5kTWVzc2FnZV8xID0gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2U7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UuYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYXJncyksIGZhbHNlKSk7XHJcbiAgICAgICAgICAgIG5hdGl2ZVNlbmRNZXNzYWdlXzEuYXBwbHkoY2hyb21lLnJ1bnRpbWUsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlID0gc2VuZE1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIWNocm9tZS5ydW50aW1lLm9uTWVzc2FnZSkge1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZSA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHZhciBuYXRpdmVBZGRMaXN0ZW5lcl8xID0gY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyO1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZGRNZXNzYWdlTGlzdGVuZXIoYXJnc1swXSk7XHJcbiAgICAgICAgICAgIG5hdGl2ZUFkZExpc3RlbmVyXzEuYXBwbHkoY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFkZE1lc3NhZ2VMaXN0ZW5lcihhcmdzWzBdKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBUaGVtZUVuZ2luZTtcclxuICAgIChmdW5jdGlvbiAoVGhlbWVFbmdpbmUpIHtcclxuICAgICAgICBUaGVtZUVuZ2luZVtcImNzc0ZpbHRlclwiXSA9IFwiY3NzRmlsdGVyXCI7XHJcbiAgICAgICAgVGhlbWVFbmdpbmVbXCJzdmdGaWx0ZXJcIl0gPSBcInN2Z0ZpbHRlclwiO1xyXG4gICAgICAgIFRoZW1lRW5naW5lW1wic3RhdGljVGhlbWVcIl0gPSBcInN0YXRpY1RoZW1lXCI7XHJcbiAgICAgICAgVGhlbWVFbmdpbmVbXCJkeW5hbWljVGhlbWVcIl0gPSBcImR5bmFtaWNUaGVtZVwiO1xyXG4gICAgfSkoVGhlbWVFbmdpbmUgfHwgKFRoZW1lRW5naW5lID0ge30pKTtcclxuXHJcbiAgICB2YXIgQXV0b21hdGlvbk1vZGU7XHJcbiAgICAoZnVuY3Rpb24gKEF1dG9tYXRpb25Nb2RlKSB7XHJcbiAgICAgICAgQXV0b21hdGlvbk1vZGVbXCJOT05FXCJdID0gXCJcIjtcclxuICAgICAgICBBdXRvbWF0aW9uTW9kZVtcIlRJTUVcIl0gPSBcInRpbWVcIjtcclxuICAgICAgICBBdXRvbWF0aW9uTW9kZVtcIlNZU1RFTVwiXSA9IFwic3lzdGVtXCI7XHJcbiAgICAgICAgQXV0b21hdGlvbk1vZGVbXCJMT0NBVElPTlwiXSA9IFwibG9jYXRpb25cIjtcclxuICAgIH0pKEF1dG9tYXRpb25Nb2RlIHx8IChBdXRvbWF0aW9uTW9kZSA9IHt9KSk7XHJcblxyXG4gICAgdmFyIERFRkFVTFRfQ09MT1JTID0ge1xyXG4gICAgICAgIGRhcmtTY2hlbWU6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMTgxYTFiXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2U4ZTZlM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaWdodFNjaGVtZToge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkY2RhZDdcIixcclxuICAgICAgICAgICAgdGV4dDogXCIjMTgxYTFiXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIERFRkFVTFRfVEhFTUUgPSB7XHJcbiAgICAgICAgbW9kZTogMSxcclxuICAgICAgICBicmlnaHRuZXNzOiAxMDAsXHJcbiAgICAgICAgY29udHJhc3Q6IDEwMCxcclxuICAgICAgICBncmF5c2NhbGU6IDAsXHJcbiAgICAgICAgc2VwaWE6IDAsXHJcbiAgICAgICAgdXNlRm9udDogZmFsc2UsXHJcbiAgICAgICAgZm9udEZhbWlseTogaXNNYWNPU1xyXG4gICAgICAgICAgICA/IFwiSGVsdmV0aWNhIE5ldWVcIlxyXG4gICAgICAgICAgICA6IGlzV2luZG93c1xyXG4gICAgICAgICAgICA/IFwiU2Vnb2UgVUlcIlxyXG4gICAgICAgICAgICA6IFwiT3BlbiBTYW5zXCIsXHJcbiAgICAgICAgdGV4dFN0cm9rZTogMCxcclxuICAgICAgICBlbmdpbmU6IFRoZW1lRW5naW5lLmR5bmFtaWNUaGVtZSxcclxuICAgICAgICBzdHlsZXNoZWV0OiBcIlwiLFxyXG4gICAgICAgIGRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3I6IERFRkFVTFRfQ09MT1JTLmRhcmtTY2hlbWUuYmFja2dyb3VuZCxcclxuICAgICAgICBkYXJrU2NoZW1lVGV4dENvbG9yOiBERUZBVUxUX0NPTE9SUy5kYXJrU2NoZW1lLnRleHQsXHJcbiAgICAgICAgbGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3I6IERFRkFVTFRfQ09MT1JTLmxpZ2h0U2NoZW1lLmJhY2tncm91bmQsXHJcbiAgICAgICAgbGlnaHRTY2hlbWVUZXh0Q29sb3I6IERFRkFVTFRfQ09MT1JTLmxpZ2h0U2NoZW1lLnRleHQsXHJcbiAgICAgICAgc2Nyb2xsYmFyQ29sb3I6IGlzTWFjT1MgPyBcIlwiIDogXCJhdXRvXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uQ29sb3I6IFwiYXV0b1wiLFxyXG4gICAgICAgIHN0eWxlU3lzdGVtQ29udHJvbHM6ICFpc0NTU0NvbG9yU2NoZW1lUHJvcFN1cHBvcnRlZCxcclxuICAgICAgICBsaWdodENvbG9yU2NoZW1lOiBcIkRlZmF1bHRcIixcclxuICAgICAgICBkYXJrQ29sb3JTY2hlbWU6IFwiRGVmYXVsdFwiLFxyXG4gICAgICAgIGltbWVkaWF0ZU1vZGlmeTogZmFsc2VcclxuICAgIH07XHJcbiAgICAoe1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgZmV0Y2hOZXdzOiB0cnVlLFxyXG4gICAgICAgIHRoZW1lOiBERUZBVUxUX1RIRU1FLFxyXG4gICAgICAgIHByZXNldHM6IFtdLFxyXG4gICAgICAgIGN1c3RvbVRoZW1lczogW10sXHJcbiAgICAgICAgc2l0ZUxpc3Q6IFtdLFxyXG4gICAgICAgIHNpdGVMaXN0RW5hYmxlZDogW10sXHJcbiAgICAgICAgYXBwbHlUb0xpc3RlZE9ubHk6IGZhbHNlLFxyXG4gICAgICAgIGNoYW5nZUJyb3dzZXJUaGVtZTogZmFsc2UsXHJcbiAgICAgICAgc3luY1NldHRpbmdzOiB0cnVlLFxyXG4gICAgICAgIHN5bmNTaXRlc0ZpeGVzOiBmYWxzZSxcclxuICAgICAgICBhdXRvbWF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2RlOiBBdXRvbWF0aW9uTW9kZS5OT05FLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJPbk9mZlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aW1lOiB7XHJcbiAgICAgICAgICAgIGFjdGl2YXRpb246IFwiMTg6MDBcIixcclxuICAgICAgICAgICAgZGVhY3RpdmF0aW9uOiBcIjk6MDBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IG51bGwsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldmlld05ld0Rlc2lnbjogZmFsc2UsXHJcbiAgICAgICAgZW5hYmxlRm9yUERGOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZUZvclByb3RlY3RlZFBhZ2VzOiBmYWxzZSxcclxuICAgICAgICBlbmFibGVDb250ZXh0TWVudXM6IGZhbHNlLFxyXG4gICAgICAgIGRldGVjdERhcmtUaGVtZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzQXJyYXlMaWtlKGl0ZW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCAhPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9yRWFjaChpdGVtcywgaXRlcmF0b3IpIHtcclxuICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICBpZiAoaXNBcnJheUxpa2UoaXRlbXMpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0b3IoaXRlbXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1zXzEgPSBfX3ZhbHVlcyhpdGVtcyksIGl0ZW1zXzFfMSA9IGl0ZW1zXzEubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICFpdGVtc18xXzEuZG9uZTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc18xXzEgPSBpdGVtc18xLm5leHQoKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc18xXzEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3IoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVfMV8xKSB7XHJcbiAgICAgICAgICAgICAgICBlXzEgPSB7ZXJyb3I6IGVfMV8xfTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1zXzFfMSAmJiAhaXRlbXNfMV8xLmRvbmUgJiYgKF9hID0gaXRlbXNfMS5yZXR1cm4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5jYWxsKGl0ZW1zXzEpO1xyXG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwdXNoKGFycmF5LCBhZGRpdGlvbikge1xyXG4gICAgICAgIGZvckVhY2goYWRkaXRpb24sIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5wdXNoKGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG9BcnJheShpdGVtcykge1xyXG4gICAgICAgIHZhciByZXN1bHRzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ0luZm8oKSB7fVxyXG4gICAgZnVuY3Rpb24gbG9nV2FybigpIHt9XHJcblxyXG4gICAgZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICB2YXIgbGFzdEFyZ3M7XHJcbiAgICAgICAgdmFyIHRocm90dGxlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0QXJncyA9IGFyZ3M7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KFxyXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCxcclxuICAgICAgICAgICAgICAgICAgICBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQobGFzdEFyZ3MpLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChsYXN0QXJncyksIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBjYW5jZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xyXG4gICAgICAgICAgICBwZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhyb3R0bGVkLCB7Y2FuY2VsOiBjYW5jZWx9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFzeW5jVGFza3NRdWV1ZSgpIHtcclxuICAgICAgICB2YXIgdGFza3MgPSBbXTtcclxuICAgICAgICB2YXIgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgZnVuY3Rpb24gcnVuVGFza3MoKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXNrO1xyXG4gICAgICAgICAgICB3aGlsZSAoKHRhc2sgPSB0YXNrcy5zaGlmdCgpKSkge1xyXG4gICAgICAgICAgICAgICAgdGFzaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBhZGQodGFzaykge1xyXG4gICAgICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgICAgICBpZiAoIWZyYW1lSWQpIHtcclxuICAgICAgICAgICAgICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuVGFza3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbCgpIHtcclxuICAgICAgICAgICAgdGFza3Muc3BsaWNlKDApO1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZUlkKTtcclxuICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7YWRkOiBhZGQsIGNhbmNlbDogY2FuY2VsfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREdXJhdGlvbih0aW1lKSB7XHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gMDtcclxuICAgICAgICBpZiAodGltZS5zZWNvbmRzKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHRpbWUuc2Vjb25kcyAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lLm1pbnV0ZXMpIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gKz0gdGltZS5taW51dGVzICogNjAgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZS5ob3Vycykge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSB0aW1lLmhvdXJzICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lLmRheXMpIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gKz0gdGltZS5kYXlzICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xyXG4gICAgICAgIG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdhdGNoRm9yTm9kZVBvc2l0aW9uKG5vZGUsIG1vZGUsIG9uUmVzdG9yZSkge1xyXG4gICAgICAgIGlmIChvblJlc3RvcmUgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBvblJlc3RvcmUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBNQVhfQVRURU1QVFNfQ09VTlQgPSAxMDtcclxuICAgICAgICB2YXIgUkVUUllfVElNRU9VVCA9IGdldER1cmF0aW9uKHtzZWNvbmRzOiAyfSk7XHJcbiAgICAgICAgdmFyIEFUVEVNUFRTX0lOVEVSVkFMID0gZ2V0RHVyYXRpb24oe3NlY29uZHM6IDEwfSk7XHJcbiAgICAgICAgdmFyIHByZXZTaWJsaW5nID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBcIlVuYWJsZSB0byB3YXRjaCBmb3Igbm9kZSBwb3NpdGlvbjogcGFyZW50IGVsZW1lbnQgbm90IGZvdW5kXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZGUgPT09IFwicHJldi1zaWJsaW5nXCIgJiYgIXByZXZTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgIFwiVW5hYmxlIHRvIHdhdGNoIGZvciBub2RlIHBvc2l0aW9uOiB0aGVyZSBpcyBubyBwcmV2aW91cyBzaWJsaW5nXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGF0dGVtcHRzID0gMDtcclxuICAgICAgICB2YXIgc3RhcnQgPSBudWxsO1xyXG4gICAgICAgIHZhciB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgIHZhciByZXN0b3JlID0gdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGltZW91dElkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXR0ZW1wdHMrKztcclxuICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5vdztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRlbXB0cyA+PSBNQVhfQVRURU1QVFNfQ09VTlQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub3cgLSBzdGFydCA8IEFUVEVNUFRTX0lOVEVSVkFMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgUkVUUllfVElNRU9VVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3c7XHJcbiAgICAgICAgICAgICAgICBhdHRlbXB0cyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwicGFyZW50XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZyAmJiBwcmV2U2libGluZy5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBcInByZXYtc2libGluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldlNpYmxpbmcucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZy5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJlbnQocHJldlNpYmxpbmcucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShcclxuICAgICAgICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICAgICAgICBwcmV2U2libGluZyA/IHByZXZTaWJsaW5nLm5leHRTaWJsaW5nIDogcGFyZW50LmZpcnN0Q2hpbGRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcclxuICAgICAgICAgICAgb25SZXN0b3JlICYmIG9uUmVzdG9yZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKG1vZGUgPT09IFwicGFyZW50XCIgJiYgbm9kZS5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHx8XHJcbiAgICAgICAgICAgICAgICAobW9kZSA9PT0gXCJwcmV2LXNpYmxpbmdcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucHJldmlvdXNTaWJsaW5nICE9PSBwcmV2U2libGluZylcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcnVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHBhcmVudCwge2NoaWxkTGlzdDogdHJ1ZX0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHJlc3RvcmUuY2FuY2VsKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgc2tpcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB1cGRhdGVQYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBzdG9wKCk7XHJcbiAgICAgICAgICAgIHJ1bigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcnVuKCk7XHJcbiAgICAgICAgcmV0dXJuIHtydW46IHJ1biwgc3RvcDogc3RvcCwgc2tpcDogc2tpcH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpdGVyYXRlU2hhZG93SG9zdHMocm9vdCwgaXRlcmF0b3IpIHtcclxuICAgICAgICBpZiAocm9vdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIocm9vdCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHtcclxuICAgICAgICAgICAgYWNjZXB0Tm9kZTogZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnNoYWRvd1Jvb3QgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgID8gTm9kZUZpbHRlci5GSUxURVJfU0tJUFxyXG4gICAgICAgICAgICAgICAgICAgIDogTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSByb290LnNoYWRvd1Jvb3QgPyB3YWxrZXIuY3VycmVudE5vZGUgOiB3YWxrZXIubmV4dE5vZGUoKTtcclxuICAgICAgICAgICAgbm9kZSAhPSBudWxsO1xyXG4gICAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3VyZmluZ2tleXNfaGludHNfaG9zdFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlcmF0b3Iobm9kZSk7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhub2RlLnNoYWRvd1Jvb3QsIGl0ZXJhdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgaXNET01SZWFkeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgfHxcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBzZXRJc0RPTVJlYWR5KG5ld0Z1bmMpIHtcclxuICAgICAgICBpc0RPTVJlYWR5ID0gbmV3RnVuYztcclxuICAgIH1cclxuICAgIHZhciByZWFkeVN0YXRlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gYWRkRE9NUmVhZHlMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIGlzRE9NUmVhZHkoKSA/IGxpc3RlbmVyKCkgOiByZWFkeVN0YXRlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVET01SZWFkeUxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgcmVhZHlTdGF0ZUxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNSZWFkeVN0YXRlQ29tcGxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIjtcclxuICAgIH1cclxuICAgIHZhciByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XHJcbiAgICBmdW5jdGlvbiBhZGRSZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIGlzUmVhZHlTdGF0ZUNvbXBsZXRlKClcclxuICAgICAgICAgICAgPyBsaXN0ZW5lcigpXHJcbiAgICAgICAgICAgIDogcmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhblJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycygpIHtcclxuICAgICAgICByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGlmICghaXNET01SZWFkeSgpKSB7XHJcbiAgICAgICAgdmFyIG9uUmVhZHlTdGF0ZUNoYW5nZV8xID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaXNET01SZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkeVN0YXRlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVMaXN0ZW5lcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1JlYWR5U3RhdGVDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkeXN0YXRlY2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVhZHlTdGF0ZUNoYW5nZV8xXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIG9uUmVhZHlTdGF0ZUNoYW5nZV8xKTtcclxuICAgIH1cclxuICAgIHZhciBIVUdFX01VVEFUSU9OU19DT1VOVCA9IDEwMDA7XHJcbiAgICBmdW5jdGlvbiBpc0h1Z2VNdXRhdGlvbihtdXRhdGlvbnMpIHtcclxuICAgICAgICBpZiAobXV0YXRpb25zLmxlbmd0aCA+IEhVR0VfTVVUQVRJT05TX0NPVU5UKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWRkZWROb2Rlc0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhZGRlZE5vZGVzQ291bnQgKz0gbXV0YXRpb25zW2ldLmFkZGVkTm9kZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoYWRkZWROb2Rlc0NvdW50ID4gSFVHRV9NVVRBVElPTlNfQ09VTlQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRzVHJlZU9wZXJhdGlvbnMobXV0YXRpb25zKSB7XHJcbiAgICAgICAgdmFyIGFkZGl0aW9ucyA9IG5ldyBTZXQoKTtcclxuICAgICAgICB2YXIgZGVsZXRpb25zID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHZhciBtb3ZlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICBmb3JFYWNoKG0uYWRkZWROb2RlcywgZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChuIGluc3RhbmNlb2YgRWxlbWVudCAmJiBuLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25zLmFkZChuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvckVhY2gobS5yZW1vdmVkTm9kZXMsIGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobiBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3Zlcy5hZGQobik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9ucy5kZWxldGUobik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRpb25zLmFkZChuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBkdXBsaWNhdGVBZGRpdGlvbnMgPSBbXTtcclxuICAgICAgICB2YXIgZHVwbGljYXRlRGVsZXRpb25zID0gW107XHJcbiAgICAgICAgYWRkaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgaWYgKGFkZGl0aW9ucy5oYXMobm9kZS5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlQWRkaXRpb25zLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkZWxldGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICBpZiAoZGVsZXRpb25zLmhhcyhub2RlLnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVEZWxldGlvbnMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGR1cGxpY2F0ZUFkZGl0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbnMuZGVsZXRlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGR1cGxpY2F0ZURlbGV0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxldGlvbnMuZGVsZXRlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7YWRkaXRpb25zOiBhZGRpdGlvbnMsIG1vdmVzOiBtb3ZlcywgZGVsZXRpb25zOiBkZWxldGlvbnN9O1xyXG4gICAgfVxyXG4gICAgdmFyIG9wdGltaXplZFRyZWVPYnNlcnZlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICB2YXIgb3B0aW1pemVkVHJlZUNhbGxiYWNrcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPcHRpbWl6ZWRUcmVlT2JzZXJ2ZXIocm9vdCwgY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyO1xyXG4gICAgICAgIHZhciBvYnNlcnZlckNhbGxiYWNrcztcclxuICAgICAgICB2YXIgZG9tUmVhZHlMaXN0ZW5lcjtcclxuICAgICAgICBpZiAob3B0aW1pemVkVHJlZU9ic2VydmVycy5oYXMocm9vdCkpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBvcHRpbWl6ZWRUcmVlT2JzZXJ2ZXJzLmdldChyb290KTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MgPSBvcHRpbWl6ZWRUcmVlQ2FsbGJhY2tzLmdldChvYnNlcnZlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGhhZEh1Z2VNdXRhdGlvbnNCZWZvcmVfMSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgc3Vic2NyaWJlZEZvclJlYWR5U3RhdGVfMSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0h1Z2VNdXRhdGlvbihtdXRhdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYWRIdWdlTXV0YXRpb25zQmVmb3JlXzEgfHwgaXNET01SZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25IdWdlTXV0YXRpb25zID0gX2Eub25IdWdlTXV0YXRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uSHVnZU11dGF0aW9ucyhyb290KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc3Vic2NyaWJlZEZvclJlYWR5U3RhdGVfMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21SZWFkeUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uSHVnZU11dGF0aW9ucyA9IF9hLm9uSHVnZU11dGF0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25IdWdlTXV0YXRpb25zKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZERPTVJlYWR5TGlzdGVuZXIoZG9tUmVhZHlMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZWRGb3JSZWFkeVN0YXRlXzEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBoYWRIdWdlTXV0YXRpb25zQmVmb3JlXzEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHNPcGVyYXRpb25zXzEgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRFbGVtZW50c1RyZWVPcGVyYXRpb25zKG11dGF0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uTWlub3JNdXRhdGlvbnMgPSBfYS5vbk1pbm9yTXV0YXRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25NaW5vck11dGF0aW9ucyhlbGVtZW50c09wZXJhdGlvbnNfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcclxuICAgICAgICAgICAgb3B0aW1pemVkVHJlZU9ic2VydmVycy5zZXQocm9vdCwgb2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgb3B0aW1pemVkVHJlZUNhbGxiYWNrcy5zZXQob2JzZXJ2ZXIsIG9ic2VydmVyQ2FsbGJhY2tzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MuYWRkKGNhbGxiYWNrcyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzY29ubmVjdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9tUmVhZHlMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZURPTVJlYWR5TGlzdGVuZXIoZG9tUmVhZHlMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2JzZXJ2ZXJDYWxsYmFja3Muc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpbWl6ZWRUcmVlQ2FsbGJhY2tzLmRlbGV0ZShvYnNlcnZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW1pemVkVHJlZU9ic2VydmVycy5kZWxldGUocm9vdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhbmNob3I7XHJcbiAgICB2YXIgcGFyc2VkVVJMQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBmaXhCYXNlVVJMKCR1cmwpIHtcclxuICAgICAgICBpZiAoIWFuY2hvcikge1xyXG4gICAgICAgICAgICBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYW5jaG9yLmhyZWYgPSAkdXJsO1xyXG4gICAgICAgIHJldHVybiBhbmNob3IuaHJlZjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlVVJMKCR1cmwsICRiYXNlKSB7XHJcbiAgICAgICAgaWYgKCRiYXNlID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgJGJhc2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIga2V5ID0gXCJcIi5jb25jYXQoJHVybCkuY29uY2F0KCRiYXNlID8gXCI7XCIuY29uY2F0KCRiYXNlKSA6IFwiXCIpO1xyXG4gICAgICAgIGlmIChwYXJzZWRVUkxDYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkVVJMQ2FjaGUuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkYmFzZSkge1xyXG4gICAgICAgICAgICB2YXIgcGFyc2VkVVJMXzEgPSBuZXcgVVJMKCR1cmwsIGZpeEJhc2VVUkwoJGJhc2UpKTtcclxuICAgICAgICAgICAgcGFyc2VkVVJMQ2FjaGUuc2V0KGtleSwgcGFyc2VkVVJMXzEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkVVJMXzE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwYXJzZWRVUkwgPSBuZXcgVVJMKGZpeEJhc2VVUkwoJHVybCkpO1xyXG4gICAgICAgIHBhcnNlZFVSTENhY2hlLnNldCgkdXJsLCBwYXJzZWRVUkwpO1xyXG4gICAgICAgIHJldHVybiBwYXJzZWRVUkw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRBYnNvbHV0ZVVSTCgkYmFzZSwgJHJlbGF0aXZlKSB7XHJcbiAgICAgICAgaWYgKCRyZWxhdGl2ZS5tYXRjaCgvXmRhdGFcXFxcP1xcOi8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgvXlxcL1xcLy8udGVzdCgkcmVsYXRpdmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChsb2NhdGlvbi5wcm90b2NvbCkuY29uY2F0KCRyZWxhdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiID0gcGFyc2VVUkwoJGJhc2UpO1xyXG4gICAgICAgIHZhciBhID0gcGFyc2VVUkwoJHJlbGF0aXZlLCBiLmhyZWYpO1xyXG4gICAgICAgIHJldHVybiBhLmhyZWY7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1JlbGF0aXZlSHJlZk9uQWJzb2x1dGVQYXRoKGhyZWYpIHtcclxuICAgICAgICBpZiAoaHJlZi5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1cmwgPSBwYXJzZVVSTChocmVmKTtcclxuICAgICAgICBpZiAodXJsLnByb3RvY29sICE9PSBsb2NhdGlvbi5wcm90b2NvbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1cmwuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVybC5wb3J0ICE9PSBsb2NhdGlvbi5wb3J0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybC5wYXRobmFtZSA9PT0gbG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXRlcmF0ZUNTU1J1bGVzKHJ1bGVzLCBpdGVyYXRlLCBvbk1lZGlhUnVsZUVycm9yKSB7XHJcbiAgICAgICAgZm9yRWFjaChydWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcclxuICAgICAgICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlKHJ1bGUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJ1bGUuaHJlZikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGVTaGVldC5jc3NSdWxlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25NZWRpYVJ1bGVFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKFwiRm91bmQgYSBub24tbG9hZGVkIGxpbmsuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uTWVkaWFSdWxlRXJyb3IgJiYgb25NZWRpYVJ1bGVFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJ1bGUubWVkaWEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZWRpYSA9IEFycmF5LmZyb20ocnVsZS5tZWRpYSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNTY3JlZW5PckFsbE9yUXVlcnkgPSBtZWRpYS5zb21lKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5zdGFydHNXaXRoKFwic2NyZWVuXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uc3RhcnRzV2l0aChcImFsbFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnN0YXJ0c1dpdGgoXCIoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzUHJpbnRPclNwZWVjaCA9IG1lZGlhLnNvbWUoZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5zdGFydHNXaXRoKFwicHJpbnRcIikgfHwgbS5zdGFydHNXaXRoKFwic3BlZWNoXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTY3JlZW5PckFsbE9yUXVlcnkgfHwgIWlzUHJpbnRPclNwZWVjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlLmNzc1J1bGVzLCBpdGVyYXRlLCBvbk1lZGlhUnVsZUVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChydWxlLmNvbmRpdGlvblRleHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChDU1Muc3VwcG9ydHMocnVsZS5jb25kaXRpb25UZXh0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlLmNzc1J1bGVzLCBpdGVyYXRlLCBvbk1lZGlhUnVsZUVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvZ1dhcm4oXCJDU1NSdWxlIHR5cGUgbm90IHN1cHBvcnRlZFwiLCBydWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIHNob3J0aGFuZFZhckRlcGVuZGFudFByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJib3JkZXJcIixcclxuICAgICAgICBcImJvcmRlci1jb2xvclwiLFxyXG4gICAgICAgIFwiYm9yZGVyLWJvdHRvbVwiLFxyXG4gICAgICAgIFwiYm9yZGVyLWxlZnRcIixcclxuICAgICAgICBcImJvcmRlci1yaWdodFwiLFxyXG4gICAgICAgIFwiYm9yZGVyLXRvcFwiLFxyXG4gICAgICAgIFwib3V0bGluZVwiLFxyXG4gICAgICAgIFwib3V0bGluZS1jb2xvclwiXHJcbiAgICBdO1xyXG4gICAgdmFyIHNob3J0aGFuZFZhckRlcFByb3BSZWdleHBzID0gaXNTYWZhcmlcclxuICAgICAgICA/IHNob3J0aGFuZFZhckRlcGVuZGFudFByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQocHJvcCwgXCI6XFxcXHMqKC4qPylcXFxccyo7XCIpKTtcclxuICAgICAgICAgICAgICByZXR1cm4gW3Byb3AsIHJlZ2V4cF07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoc3R5bGUsIGl0ZXJhdGUpIHtcclxuICAgICAgICBmb3JFYWNoKHN0eWxlLCBmdW5jdGlvbiAocHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkudHJpbSgpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlcmF0ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBjc3NUZXh0ID0gc3R5bGUuY3NzVGV4dDtcclxuICAgICAgICBpZiAoY3NzVGV4dC5pbmNsdWRlcyhcInZhcihcIikpIHtcclxuICAgICAgICAgICAgaWYgKGlzU2FmYXJpKSB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydGhhbmRWYXJEZXBQcm9wUmVnZXhwcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3AgPSBfYlswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhwID0gX2JbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gY3NzVGV4dC5tYXRjaChyZWdleHApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gbWF0Y2hbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKHByb3AsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydGhhbmRWYXJEZXBlbmRhbnRQcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsICYmIHZhbC5pbmNsdWRlcyhcInZhcihcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZShwcm9wLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGNzc1VSTFJlZ2V4ID0gL3VybFxcKCgoJy4qPycpfChcIi4qP1wiKXwoW15cXCldKj8pKVxcKS9nO1xyXG4gICAgdmFyIGNzc0ltcG9ydFJlZ2V4ID1cclxuICAgICAgICAvQGltcG9ydFxccyoodXJsXFwoKT8oKCcuKz8nKXwoXCIuKz9cIil8KFteXFwpXSo/KSlcXCk/ID8oc2NyZWVuKT87Py9naTtcclxuICAgIGZ1bmN0aW9uIGdldENTU1VSTFZhbHVlKGNzc1VSTCkge1xyXG4gICAgICAgIHJldHVybiBjc3NVUkxcclxuICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcblxcclxcXFxdKy9nLCBcIlwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXnVybFxcKCguKilcXCkkLywgXCIkMVwiKVxyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXCIoLiopXCIkLywgXCIkMVwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXicoLiopJyQvLCBcIiQxXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oPzpcXFxcKC4pKS9nLCBcIiQxXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q1NTQmFzZUJhdGgodXJsKSB7XHJcbiAgICAgICAgdmFyIGNzc1VSTCA9IHBhcnNlVVJMKHVybCk7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgICAgICAgICAgLmNvbmNhdChjc3NVUkwub3JpZ2luKVxyXG4gICAgICAgICAgICAuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgY3NzVVJMLnBhdGhuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyhcXC8pKFteXFwvXSspJC9pLCBcIiQxXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQ1NTUmVsYXRpdmVVUkxzV2l0aEFic29sdXRlKCRjc3MsIGNzc0Jhc2VQYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuICRjc3MucmVwbGFjZShjc3NVUkxSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXRoVmFsdWUgPSBnZXRDU1NVUkxWYWx1ZShtYXRjaCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ1cmwoJ1wiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICBnZXRBYnNvbHV0ZVVSTChjc3NCYXNlUGF0aCwgcGF0aFZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICBcIicpXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgY3NzQ29tbWVudHNSZWdleCA9IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvL2c7XHJcbiAgICBmdW5jdGlvbiByZW1vdmVDU1NDb21tZW50cygkY3NzKSB7XHJcbiAgICAgICAgcmV0dXJuICRjc3MucmVwbGFjZShjc3NDb21tZW50c1JlZ2V4LCBcIlwiKTtcclxuICAgIH1cclxuICAgIHZhciBmb250RmFjZVJlZ2V4ID0gL0Bmb250LWZhY2VcXHMqe1tefV0qfS9nO1xyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU0ZvbnRGYWNlKCRjc3MpIHtcclxuICAgICAgICByZXR1cm4gJGNzcy5yZXBsYWNlKGZvbnRGYWNlUmVnZXgsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGV2YWxNYXRoKGV4cHJlc3Npb24pIHtcclxuICAgICAgICB2YXIgcnBuU3RhY2sgPSBbXTtcclxuICAgICAgICB2YXIgd29ya2luZ1N0YWNrID0gW107XHJcbiAgICAgICAgdmFyIGxhc3RUb2tlbjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXhwcmVzc2lvbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSBleHByZXNzaW9uW2ldO1xyXG4gICAgICAgICAgICBpZiAoIXRva2VuIHx8IHRva2VuID09PSBcIiBcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9wZXJhdG9ycy5oYXModG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3AgPSBvcGVyYXRvcnMuZ2V0KHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh3b3JraW5nU3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRPcCA9IG9wZXJhdG9ycy5nZXQod29ya2luZ1N0YWNrWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRPcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wLmxlc3NPckVxdWFsVGhhbihjdXJyZW50T3ApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJwblN0YWNrLnB1c2god29ya2luZ1N0YWNrLnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdvcmtpbmdTdGFjay51bnNoaWZ0KHRva2VuKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghbGFzdFRva2VuIHx8IG9wZXJhdG9ycy5oYXMobGFzdFRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgcnBuU3RhY2sucHVzaCh0b2tlbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBycG5TdGFja1tycG5TdGFjay5sZW5ndGggLSAxXSArPSB0b2tlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcnBuU3RhY2sucHVzaC5hcHBseShcclxuICAgICAgICAgICAgcnBuU3RhY2ssXHJcbiAgICAgICAgICAgIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZCh3b3JraW5nU3RhY2spLCBmYWxzZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBzdGFjayA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBycG5TdGFjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgb3AgPSBvcGVyYXRvcnMuZ2V0KHJwblN0YWNrW2ldKTtcclxuICAgICAgICAgICAgaWYgKG9wKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IHN0YWNrLnNwbGljZSgwLCAyKTtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gob3AuZXhlYyhhcmdzWzFdLCBhcmdzWzBdKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFjay51bnNoaWZ0KHBhcnNlRmxvYXQocnBuU3RhY2tbaV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhY2tbMF07XHJcbiAgICB9XHJcbiAgICB2YXIgT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIE9wZXJhdG9yKHByZWNlZGVuY2UsIG1ldGhvZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByZWNlbmRjZSA9IHByZWNlZGVuY2U7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY01ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgT3BlcmF0b3IucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlY01ldGhvZChsZWZ0LCByaWdodCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBPcGVyYXRvci5wcm90b3R5cGUubGVzc09yRXF1YWxUaGFuID0gZnVuY3Rpb24gKG9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZWNlbmRjZSA8PSBvcC5wcmVjZW5kY2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gT3BlcmF0b3I7XHJcbiAgICB9KSgpO1xyXG4gICAgdmFyIG9wZXJhdG9ycyA9IG5ldyBNYXAoW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCIrXCIsXHJcbiAgICAgICAgICAgIG5ldyBPcGVyYXRvcigxLCBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICsgcmlnaHQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiLVwiLFxyXG4gICAgICAgICAgICBuZXcgT3BlcmF0b3IoMSwgZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCAtIHJpZ2h0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcIipcIixcclxuICAgICAgICAgICAgbmV3IE9wZXJhdG9yKDIsIGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgKiByaWdodDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCIvXCIsXHJcbiAgICAgICAgICAgIG5ldyBPcGVyYXRvcigyLCBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0IC8gcmlnaHQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXVxyXG4gICAgXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TWF0Y2hlcyhyZWdleCwgaW5wdXQsIGdyb3VwKSB7XHJcbiAgICAgICAgaWYgKGdyb3VwID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgZ3JvdXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgIHZhciBtO1xyXG4gICAgICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoaW5wdXQpKSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gobVtncm91cF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0Y2hlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1hdENTUyh0ZXh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdHJpbUxlZnQodGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9eXFxzKy8sIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBnZXRJbmRlbnQoZGVwdGgpIHtcclxuICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCIgXCIucmVwZWF0KDQgKiBkZXB0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA8IDUwMDAwKSB7XHJcbiAgICAgICAgICAgIHZhciBlbXB0eVJ1bGVSZWdleHAgPSAvW157fV0re1xccyp9LztcclxuICAgICAgICAgICAgd2hpbGUgKGVtcHR5UnVsZVJlZ2V4cC50ZXN0KHRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKGVtcHR5UnVsZVJlZ2V4cCwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNzcyA9IHRleHRcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcc3syLH0vZywgXCIgXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHsvZywgXCJ7XFxuXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXH0vZywgXCJcXG59XFxuXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXDsoPyFbXlxcKHxcXFwiXSooXFwpfFxcXCIpKS9nLCBcIjtcXG5cIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcLCg/IVteXFwofFxcXCJdKihcXCl8XFxcIikpL2csIFwiLFxcblwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxuXFxzKlxcbi9nLCBcIlxcblwiKVxyXG4gICAgICAgICAgICAuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgdmFyIGRlcHRoID0gMDtcclxuICAgICAgICB2YXIgZm9ybWF0dGVkID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgeCA9IDAsIGxlbiA9IGNzcy5sZW5ndGg7IHggPCBsZW47IHgrKykge1xyXG4gICAgICAgICAgICB2YXIgbGluZSA9IFwiXCIuY29uY2F0KGNzc1t4XSwgXCJcXG5cIik7XHJcbiAgICAgICAgICAgIGlmIChsaW5lLmluY2x1ZGVzKFwie1wiKSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkLnB1c2goZ2V0SW5kZW50KGRlcHRoKyspICsgdHJpbUxlZnQobGluZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpbmUuaW5jbHVkZXMoXCJ9XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQucHVzaChnZXRJbmRlbnQoLS1kZXB0aCkgKyB0cmltTGVmdChsaW5lKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQucHVzaChnZXRJbmRlbnQoZGVwdGgpICsgdHJpbUxlZnQobGluZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWQuam9pbihcIlwiKS50cmltKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRoZXNlc1JhbmdlKGlucHV0LCBzZWFyY2hTdGFydEluZGV4KSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaFN0YXJ0SW5kZXggPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBzZWFyY2hTdGFydEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgZGVwdGggPSAwO1xyXG4gICAgICAgIHZhciBmaXJzdE9wZW5JbmRleCA9IC0xO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBzZWFyY2hTdGFydEluZGV4OyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3BlbkluZGV4ID0gaW5wdXQuaW5kZXhPZihcIihcIiwgaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlbkluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmlyc3RPcGVuSW5kZXggPSBvcGVuSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBkZXB0aCsrO1xyXG4gICAgICAgICAgICAgICAgaSA9IG9wZW5JbmRleDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBjbG9zaW5nSW5kZXggPSBpbnB1dC5pbmRleE9mKFwiKVwiLCBpKTtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9zaW5nSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgb3BlbkluZGV4ID0gaW5wdXQuaW5kZXhPZihcIihcIiwgaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlbkluZGV4IDwgMCB8fCBjbG9zaW5nSW5kZXggPCBvcGVuSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXJ0OiBmaXJzdE9wZW5JbmRleCwgZW5kOiBjbG9zaW5nSW5kZXggKyAxfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IGNsb3NpbmdJbmRleDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGgrKztcclxuICAgICAgICAgICAgICAgICAgICBpID0gb3BlbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBoc2xhUGFyc2VDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIHZhciByZ2JhUGFyc2VDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIHBhcnNlQ29sb3JXaXRoQ2FjaGUoJGNvbG9yKSB7XHJcbiAgICAgICAgJGNvbG9yID0gJGNvbG9yLnRyaW0oKTtcclxuICAgICAgICBpZiAocmdiYVBhcnNlQ2FjaGUuaGFzKCRjb2xvcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJnYmFQYXJzZUNhY2hlLmdldCgkY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJGNvbG9yLmluY2x1ZGVzKFwiY2FsYyhcIikpIHtcclxuICAgICAgICAgICAgJGNvbG9yID0gbG93ZXJDYWxjRXhwcmVzc2lvbigkY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29sb3IgPSBwYXJzZSgkY29sb3IpO1xyXG4gICAgICAgIGNvbG9yICYmIHJnYmFQYXJzZUNhY2hlLnNldCgkY29sb3IsIGNvbG9yKTtcclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZVRvSFNMV2l0aENhY2hlKGNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGhzbGFQYXJzZUNhY2hlLmhhcyhjb2xvcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhzbGFQYXJzZUNhY2hlLmdldChjb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKGNvbG9yKTtcclxuICAgICAgICBpZiAoIXJnYikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGhzbCA9IHJnYlRvSFNMKHJnYik7XHJcbiAgICAgICAgaHNsYVBhcnNlQ2FjaGUuc2V0KGNvbG9yLCBoc2wpO1xyXG4gICAgICAgIHJldHVybiBoc2w7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhckNvbG9yQ2FjaGUoKSB7XHJcbiAgICAgICAgaHNsYVBhcnNlQ2FjaGUuY2xlYXIoKTtcclxuICAgICAgICByZ2JhUGFyc2VDYWNoZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaHNsVG9SR0IoX2EpIHtcclxuICAgICAgICB2YXIgaCA9IF9hLmgsXHJcbiAgICAgICAgICAgIHMgPSBfYS5zLFxyXG4gICAgICAgICAgICBsID0gX2EubCxcclxuICAgICAgICAgICAgX2IgPSBfYS5hLFxyXG4gICAgICAgICAgICBhID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYjtcclxuICAgICAgICBpZiAocyA9PT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgX2MgPSBfX3JlYWQoXHJcbiAgICAgICAgICAgICAgICAgICAgW2wsIGwsIGxdLm1hcChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh4ICogMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcl8xID0gX2NbMF0sXHJcbiAgICAgICAgICAgICAgICBiXzEgPSBfY1sxXSxcclxuICAgICAgICAgICAgICAgIGdfMSA9IF9jWzJdO1xyXG4gICAgICAgICAgICByZXR1cm4ge3I6IHJfMSwgZzogZ18xLCBiOiBiXzEsIGE6IGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYyA9ICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSkgKiBzO1xyXG4gICAgICAgIHZhciB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKChoIC8gNjApICUgMikgLSAxKSk7XHJcbiAgICAgICAgdmFyIG0gPSBsIC0gYyAvIDI7XHJcbiAgICAgICAgdmFyIF9kID0gX19yZWFkKFxyXG4gICAgICAgICAgICAgICAgKGggPCA2MFxyXG4gICAgICAgICAgICAgICAgICAgID8gW2MsIHgsIDBdXHJcbiAgICAgICAgICAgICAgICAgICAgOiBoIDwgMTIwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBbeCwgYywgMF1cclxuICAgICAgICAgICAgICAgICAgICA6IGggPCAxODBcclxuICAgICAgICAgICAgICAgICAgICA/IFswLCBjLCB4XVxyXG4gICAgICAgICAgICAgICAgICAgIDogaCA8IDI0MFxyXG4gICAgICAgICAgICAgICAgICAgID8gWzAsIHgsIGNdXHJcbiAgICAgICAgICAgICAgICAgICAgOiBoIDwgMzAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBbeCwgMCwgY11cclxuICAgICAgICAgICAgICAgICAgICA6IFtjLCAwLCB4XVxyXG4gICAgICAgICAgICAgICAgKS5tYXAoZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgobiArIG0pICogMjU1KTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICByID0gX2RbMF0sXHJcbiAgICAgICAgICAgIGcgPSBfZFsxXSxcclxuICAgICAgICAgICAgYiA9IF9kWzJdO1xyXG4gICAgICAgIHJldHVybiB7cjogciwgZzogZywgYjogYiwgYTogYX07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZ2JUb0hTTChfYSkge1xyXG4gICAgICAgIHZhciByMjU1ID0gX2EucixcclxuICAgICAgICAgICAgZzI1NSA9IF9hLmcsXHJcbiAgICAgICAgICAgIGIyNTUgPSBfYS5iLFxyXG4gICAgICAgICAgICBfYiA9IF9hLmEsXHJcbiAgICAgICAgICAgIGEgPSBfYiA9PT0gdm9pZCAwID8gMSA6IF9iO1xyXG4gICAgICAgIHZhciByID0gcjI1NSAvIDI1NTtcclxuICAgICAgICB2YXIgZyA9IGcyNTUgLyAyNTU7XHJcbiAgICAgICAgdmFyIGIgPSBiMjU1IC8gMjU1O1xyXG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcclxuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XHJcbiAgICAgICAgdmFyIGMgPSBtYXggLSBtaW47XHJcbiAgICAgICAgdmFyIGwgPSAobWF4ICsgbWluKSAvIDI7XHJcbiAgICAgICAgaWYgKGMgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtoOiAwLCBzOiAwLCBsOiBsLCBhOiBhfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGggPVxyXG4gICAgICAgICAgICAobWF4ID09PSByXHJcbiAgICAgICAgICAgICAgICA/ICgoZyAtIGIpIC8gYykgJSA2XHJcbiAgICAgICAgICAgICAgICA6IG1heCA9PT0gZ1xyXG4gICAgICAgICAgICAgICAgPyAoYiAtIHIpIC8gYyArIDJcclxuICAgICAgICAgICAgICAgIDogKHIgLSBnKSAvIGMgKyA0KSAqIDYwO1xyXG4gICAgICAgIGlmIChoIDwgMCkge1xyXG4gICAgICAgICAgICBoICs9IDM2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHMgPSBjIC8gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKTtcclxuICAgICAgICByZXR1cm4ge2g6IGgsIHM6IHMsIGw6IGwsIGE6IGF9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG9GaXhlZChuLCBkaWdpdHMpIHtcclxuICAgICAgICBpZiAoZGlnaXRzID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgZGlnaXRzID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZpeGVkID0gbi50b0ZpeGVkKGRpZ2l0cyk7XHJcbiAgICAgICAgaWYgKGRpZ2l0cyA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZml4ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkb3QgPSBmaXhlZC5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICBpZiAoZG90ID49IDApIHtcclxuICAgICAgICAgICAgdmFyIHplcm9zTWF0Y2ggPSBmaXhlZC5tYXRjaCgvMCskLyk7XHJcbiAgICAgICAgICAgIGlmICh6ZXJvc01hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoemVyb3NNYXRjaC5pbmRleCA9PT0gZG90ICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXhlZC5zdWJzdHJpbmcoMCwgZG90KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmaXhlZC5zdWJzdHJpbmcoMCwgemVyb3NNYXRjaC5pbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpeGVkO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmdiVG9TdHJpbmcocmdiKSB7XHJcbiAgICAgICAgdmFyIHIgPSByZ2IucixcclxuICAgICAgICAgICAgZyA9IHJnYi5nLFxyXG4gICAgICAgICAgICBiID0gcmdiLmIsXHJcbiAgICAgICAgICAgIGEgPSByZ2IuYTtcclxuICAgICAgICBpZiAoYSAhPSBudWxsICYmIGEgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInJnYmEoXCJcclxuICAgICAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChyKSwgXCIsIFwiKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKGcpLCBcIiwgXCIpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQoYiksIFwiLCBcIilcclxuICAgICAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChhLCAyKSwgXCIpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJyZ2IoXCJcclxuICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKHIpLCBcIiwgXCIpXHJcbiAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChnKSwgXCIsIFwiKVxyXG4gICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQoYiksIFwiKVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJnYlRvSGV4U3RyaW5nKF9hKSB7XHJcbiAgICAgICAgdmFyIHIgPSBfYS5yLFxyXG4gICAgICAgICAgICBnID0gX2EuZyxcclxuICAgICAgICAgICAgYiA9IF9hLmIsXHJcbiAgICAgICAgICAgIGEgPSBfYS5hO1xyXG4gICAgICAgIHJldHVybiBcIiNcIi5jb25jYXQoXHJcbiAgICAgICAgICAgIChhICE9IG51bGwgJiYgYSA8IDEgPyBbciwgZywgYiwgTWF0aC5yb3VuZChhICogMjU1KV0gOiBbciwgZywgYl0pXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHggPCAxNiA/IFwiMFwiIDogXCJcIikuY29uY2F0KHgudG9TdHJpbmcoMTYpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoc2xUb1N0cmluZyhoc2wpIHtcclxuICAgICAgICB2YXIgaCA9IGhzbC5oLFxyXG4gICAgICAgICAgICBzID0gaHNsLnMsXHJcbiAgICAgICAgICAgIGwgPSBoc2wubCxcclxuICAgICAgICAgICAgYSA9IGhzbC5hO1xyXG4gICAgICAgIGlmIChhICE9IG51bGwgJiYgYSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaHNsYShcIlxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKGgpLCBcIiwgXCIpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQocyAqIDEwMCksIFwiJSwgXCIpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQobCAqIDEwMCksIFwiJSwgXCIpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQoYSwgMiksIFwiKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiaHNsKFwiXHJcbiAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChoKSwgXCIsIFwiKVxyXG4gICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQocyAqIDEwMCksIFwiJSwgXCIpXHJcbiAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChsICogMTAwKSwgXCIlKVwiKTtcclxuICAgIH1cclxuICAgIHZhciByZ2JNYXRjaCA9IC9ecmdiYT9cXChbXlxcKFxcKV0rXFwpJC87XHJcbiAgICB2YXIgaHNsTWF0Y2ggPSAvXmhzbGE/XFwoW15cXChcXCldK1xcKSQvO1xyXG4gICAgdmFyIGhleE1hdGNoID0gL14jWzAtOWEtZl0rJC9pO1xyXG4gICAgZnVuY3Rpb24gcGFyc2UoJGNvbG9yKSB7XHJcbiAgICAgICAgdmFyIGMgPSAkY29sb3IudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGMubWF0Y2gocmdiTWF0Y2gpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVJHQihjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMubWF0Y2goaHNsTWF0Y2gpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUhTTChjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMubWF0Y2goaGV4TWF0Y2gpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUhleChjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtub3duQ29sb3JzLmhhcyhjKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29sb3JCeU5hbWUoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzeXN0ZW1Db2xvcnMuaGFzKGMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRTeXN0ZW1Db2xvcihjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRjb2xvciA9PT0gXCJ0cmFuc3BhcmVudFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7cjogMCwgZzogMCwgYjogMCwgYTogMH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TnVtYmVycygkY29sb3IpIHtcclxuICAgICAgICB2YXIgbnVtYmVycyA9IFtdO1xyXG4gICAgICAgIHZhciBwcmV2UG9zID0gMDtcclxuICAgICAgICB2YXIgaXNNaW5pbmcgPSBmYWxzZTtcclxuICAgICAgICB2YXIgc3RhcnRJbmRleCA9ICRjb2xvci5pbmRleE9mKFwiKFwiKTtcclxuICAgICAgICAkY29sb3IgPSAkY29sb3Iuc3Vic3RyaW5nKHN0YXJ0SW5kZXggKyAxLCAkY29sb3IubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkY29sb3IubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGMgPSAkY29sb3JbaV07XHJcbiAgICAgICAgICAgIGlmICgoYyA+PSBcIjBcIiAmJiBjIDw9IFwiOVwiKSB8fCBjID09PSBcIi5cIiB8fCBjID09PSBcIitcIiB8fCBjID09PSBcIi1cIikge1xyXG4gICAgICAgICAgICAgICAgaXNNaW5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTWluaW5nICYmIChjID09PSBcIiBcIiB8fCBjID09PSBcIixcIikpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlcnMucHVzaCgkY29sb3Iuc3Vic3RyaW5nKHByZXZQb3MsIGkpKTtcclxuICAgICAgICAgICAgICAgIGlzTWluaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBwcmV2UG9zID0gaSArIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzTWluaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2UG9zID0gaSArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTWluaW5nKSB7XHJcbiAgICAgICAgICAgIG51bWJlcnMucHVzaCgkY29sb3Iuc3Vic3RyaW5nKHByZXZQb3MsICRjb2xvci5sZW5ndGgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bWJlcnM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXROdW1iZXJzRnJvbVN0cmluZyhzdHIsIHJhbmdlLCB1bml0cykge1xyXG4gICAgICAgIHZhciByYXcgPSBnZXROdW1iZXJzKHN0cik7XHJcbiAgICAgICAgdmFyIHVuaXRzTGlzdCA9IE9iamVjdC5lbnRyaWVzKHVuaXRzKTtcclxuICAgICAgICB2YXIgbnVtYmVycyA9IHJhd1xyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gci50cmltKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHIsIGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuO1xyXG4gICAgICAgICAgICAgICAgdmFyIHVuaXQgPSB1bml0c0xpc3QuZmluZChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1ID0gX2JbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIuZW5kc1dpdGgodSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh1bml0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KHIuc3Vic3RyaW5nKDAsIHIubGVuZ3RoIC0gdW5pdFswXS5sZW5ndGgpKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0WzFdKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlW2ldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuID0gcGFyc2VGbG9hdChyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyYW5nZVtpXSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbnVtYmVycztcclxuICAgIH1cclxuICAgIHZhciByZ2JSYW5nZSA9IFsyNTUsIDI1NSwgMjU1LCAxXTtcclxuICAgIHZhciByZ2JVbml0cyA9IHtcIiVcIjogMTAwfTtcclxuICAgIGZ1bmN0aW9uIHBhcnNlUkdCKCRyZ2IpIHtcclxuICAgICAgICB2YXIgX2EgPSBfX3JlYWQoZ2V0TnVtYmVyc0Zyb21TdHJpbmcoJHJnYiwgcmdiUmFuZ2UsIHJnYlVuaXRzKSwgNCksXHJcbiAgICAgICAgICAgIHIgPSBfYVswXSxcclxuICAgICAgICAgICAgZyA9IF9hWzFdLFxyXG4gICAgICAgICAgICBiID0gX2FbMl0sXHJcbiAgICAgICAgICAgIF9iID0gX2FbM10sXHJcbiAgICAgICAgICAgIGEgPSBfYiA9PT0gdm9pZCAwID8gMSA6IF9iO1xyXG4gICAgICAgIHJldHVybiB7cjogciwgZzogZywgYjogYiwgYTogYX07XHJcbiAgICB9XHJcbiAgICB2YXIgaHNsUmFuZ2UgPSBbMzYwLCAxLCAxLCAxXTtcclxuICAgIHZhciBoc2xVbml0cyA9IHtcIiVcIjogMTAwLCBcImRlZ1wiOiAzNjAsIFwicmFkXCI6IDIgKiBNYXRoLlBJLCBcInR1cm5cIjogMX07XHJcbiAgICBmdW5jdGlvbiBwYXJzZUhTTCgkaHNsKSB7XHJcbiAgICAgICAgdmFyIF9hID0gX19yZWFkKGdldE51bWJlcnNGcm9tU3RyaW5nKCRoc2wsIGhzbFJhbmdlLCBoc2xVbml0cyksIDQpLFxyXG4gICAgICAgICAgICBoID0gX2FbMF0sXHJcbiAgICAgICAgICAgIHMgPSBfYVsxXSxcclxuICAgICAgICAgICAgbCA9IF9hWzJdLFxyXG4gICAgICAgICAgICBfYiA9IF9hWzNdLFxyXG4gICAgICAgICAgICBhID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYjtcclxuICAgICAgICByZXR1cm4gaHNsVG9SR0Ioe2g6IGgsIHM6IHMsIGw6IGwsIGE6IGF9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlSGV4KCRoZXgpIHtcclxuICAgICAgICB2YXIgaCA9ICRoZXguc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIHN3aXRjaCAoaC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBjYXNlIDQ6IHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSA9IF9fcmVhZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KFwiXCIuY29uY2F0KGhbaV0pLmNvbmNhdChoW2ldKSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgciA9IF9hWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBfYVsxXSxcclxuICAgICAgICAgICAgICAgICAgICBiID0gX2FbMl07XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9XHJcbiAgICAgICAgICAgICAgICAgICAgaC5sZW5ndGggPT09IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VJbnQoXCJcIi5jb25jYXQoaFszXSkuY29uY2F0KGhbM10pLCAxNikgLyAyNTU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3I6IHIsIGc6IGcsIGI6IGIsIGE6IGF9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgY2FzZSA4OiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfX3JlYWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLCAyLCA0XS5tYXAoZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChoLnN1YnN0cmluZyhpLCBpICsgMiksIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBfYlswXSxcclxuICAgICAgICAgICAgICAgICAgICBnID0gX2JbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgYiA9IF9iWzJdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPVxyXG4gICAgICAgICAgICAgICAgICAgIGgubGVuZ3RoID09PSA2ID8gMSA6IHBhcnNlSW50KGguc3Vic3RyaW5nKDYsIDgpLCAxNikgLyAyNTU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3I6IHIsIGc6IGcsIGI6IGIsIGE6IGF9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JCeU5hbWUoJGNvbG9yKSB7XHJcbiAgICAgICAgdmFyIG4gPSBrbm93bkNvbG9ycy5nZXQoJGNvbG9yKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByOiAobiA+PiAxNikgJiAyNTUsXHJcbiAgICAgICAgICAgIGc6IChuID4+IDgpICYgMjU1LFxyXG4gICAgICAgICAgICBiOiAobiA+PiAwKSAmIDI1NSxcclxuICAgICAgICAgICAgYTogMVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTeXN0ZW1Db2xvcigkY29sb3IpIHtcclxuICAgICAgICB2YXIgbiA9IHN5c3RlbUNvbG9ycy5nZXQoJGNvbG9yKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByOiAobiA+PiAxNikgJiAyNTUsXHJcbiAgICAgICAgICAgIGc6IChuID4+IDgpICYgMjU1LFxyXG4gICAgICAgICAgICBiOiAobiA+PiAwKSAmIDI1NSxcclxuICAgICAgICAgICAgYTogMVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsb3dlckNhbGNFeHByZXNzaW9uKGNvbG9yKSB7XHJcbiAgICAgICAgdmFyIHNlYXJjaEluZGV4ID0gMDtcclxuICAgICAgICB2YXIgcmVwbGFjZUJldHdlZW5JbmRpY2VzID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIHJlcGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbG9yID1cclxuICAgICAgICAgICAgICAgIGNvbG9yLnN1YnN0cmluZygwLCBzdGFydCkgKyByZXBsYWNlbWVudCArIGNvbG9yLnN1YnN0cmluZyhlbmQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2hpbGUgKChzZWFyY2hJbmRleCA9IGNvbG9yLmluZGV4T2YoXCJjYWxjKFwiKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciByYW5nZSA9IGdldFBhcmVudGhlc2VzUmFuZ2UoY29sb3IsIHNlYXJjaEluZGV4KTtcclxuICAgICAgICAgICAgaWYgKCFyYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHNsaWNlID0gY29sb3Iuc2xpY2UocmFuZ2Uuc3RhcnQgKyAxLCByYW5nZS5lbmQgLSAxKTtcclxuICAgICAgICAgICAgdmFyIGluY2x1ZGVzUGVyY2VudGFnZSA9IHNsaWNlLmluY2x1ZGVzKFwiJVwiKTtcclxuICAgICAgICAgICAgc2xpY2UgPSBzbGljZS5zcGxpdChcIiVcIikuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IE1hdGgucm91bmQoZXZhbE1hdGgoc2xpY2UpKTtcclxuICAgICAgICAgICAgcmVwbGFjZUJldHdlZW5JbmRpY2VzKFxyXG4gICAgICAgICAgICAgICAgcmFuZ2Uuc3RhcnQgLSA0LFxyXG4gICAgICAgICAgICAgICAgcmFuZ2UuZW5kLFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICsgKGluY2x1ZGVzUGVyY2VudGFnZSA/IFwiJVwiIDogXCJcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgdmFyIGtub3duQ29sb3JzID0gbmV3IE1hcChcclxuICAgICAgICBPYmplY3QuZW50cmllcyh7XHJcbiAgICAgICAgICAgIGFsaWNlYmx1ZTogMHhmMGY4ZmYsXHJcbiAgICAgICAgICAgIGFudGlxdWV3aGl0ZTogMHhmYWViZDcsXHJcbiAgICAgICAgICAgIGFxdWE6IDB4MDBmZmZmLFxyXG4gICAgICAgICAgICBhcXVhbWFyaW5lOiAweDdmZmZkNCxcclxuICAgICAgICAgICAgYXp1cmU6IDB4ZjBmZmZmLFxyXG4gICAgICAgICAgICBiZWlnZTogMHhmNWY1ZGMsXHJcbiAgICAgICAgICAgIGJpc3F1ZTogMHhmZmU0YzQsXHJcbiAgICAgICAgICAgIGJsYWNrOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgYmxhbmNoZWRhbG1vbmQ6IDB4ZmZlYmNkLFxyXG4gICAgICAgICAgICBibHVlOiAweDAwMDBmZixcclxuICAgICAgICAgICAgYmx1ZXZpb2xldDogMHg4YTJiZTIsXHJcbiAgICAgICAgICAgIGJyb3duOiAweGE1MmEyYSxcclxuICAgICAgICAgICAgYnVybHl3b29kOiAweGRlYjg4NyxcclxuICAgICAgICAgICAgY2FkZXRibHVlOiAweDVmOWVhMCxcclxuICAgICAgICAgICAgY2hhcnRyZXVzZTogMHg3ZmZmMDAsXHJcbiAgICAgICAgICAgIGNob2NvbGF0ZTogMHhkMjY5MWUsXHJcbiAgICAgICAgICAgIGNvcmFsOiAweGZmN2Y1MCxcclxuICAgICAgICAgICAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkLFxyXG4gICAgICAgICAgICBjb3Juc2lsazogMHhmZmY4ZGMsXHJcbiAgICAgICAgICAgIGNyaW1zb246IDB4ZGMxNDNjLFxyXG4gICAgICAgICAgICBjeWFuOiAweDAwZmZmZixcclxuICAgICAgICAgICAgZGFya2JsdWU6IDB4MDAwMDhiLFxyXG4gICAgICAgICAgICBkYXJrY3lhbjogMHgwMDhiOGIsXHJcbiAgICAgICAgICAgIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiLFxyXG4gICAgICAgICAgICBkYXJrZ3JheTogMHhhOWE5YTksXHJcbiAgICAgICAgICAgIGRhcmtncmV5OiAweGE5YTlhOSxcclxuICAgICAgICAgICAgZGFya2dyZWVuOiAweDAwNjQwMCxcclxuICAgICAgICAgICAgZGFya2toYWtpOiAweGJkYjc2YixcclxuICAgICAgICAgICAgZGFya21hZ2VudGE6IDB4OGIwMDhiLFxyXG4gICAgICAgICAgICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmYsXHJcbiAgICAgICAgICAgIGRhcmtvcmFuZ2U6IDB4ZmY4YzAwLFxyXG4gICAgICAgICAgICBkYXJrb3JjaGlkOiAweDk5MzJjYyxcclxuICAgICAgICAgICAgZGFya3JlZDogMHg4YjAwMDAsXHJcbiAgICAgICAgICAgIGRhcmtzYWxtb246IDB4ZTk5NjdhLFxyXG4gICAgICAgICAgICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmLFxyXG4gICAgICAgICAgICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YixcclxuICAgICAgICAgICAgZGFya3NsYXRlZ3JheTogMHgyZjRmNGYsXHJcbiAgICAgICAgICAgIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmLFxyXG4gICAgICAgICAgICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMSxcclxuICAgICAgICAgICAgZGFya3Zpb2xldDogMHg5NDAwZDMsXHJcbiAgICAgICAgICAgIGRlZXBwaW5rOiAweGZmMTQ5MyxcclxuICAgICAgICAgICAgZGVlcHNreWJsdWU6IDB4MDBiZmZmLFxyXG4gICAgICAgICAgICBkaW1ncmF5OiAweDY5Njk2OSxcclxuICAgICAgICAgICAgZGltZ3JleTogMHg2OTY5NjksXHJcbiAgICAgICAgICAgIGRvZGdlcmJsdWU6IDB4MWU5MGZmLFxyXG4gICAgICAgICAgICBmaXJlYnJpY2s6IDB4YjIyMjIyLFxyXG4gICAgICAgICAgICBmbG9yYWx3aGl0ZTogMHhmZmZhZjAsXHJcbiAgICAgICAgICAgIGZvcmVzdGdyZWVuOiAweDIyOGIyMixcclxuICAgICAgICAgICAgZnVjaHNpYTogMHhmZjAwZmYsXHJcbiAgICAgICAgICAgIGdhaW5zYm9ybzogMHhkY2RjZGMsXHJcbiAgICAgICAgICAgIGdob3N0d2hpdGU6IDB4ZjhmOGZmLFxyXG4gICAgICAgICAgICBnb2xkOiAweGZmZDcwMCxcclxuICAgICAgICAgICAgZ29sZGVucm9kOiAweGRhYTUyMCxcclxuICAgICAgICAgICAgZ3JheTogMHg4MDgwODAsXHJcbiAgICAgICAgICAgIGdyZXk6IDB4ODA4MDgwLFxyXG4gICAgICAgICAgICBncmVlbjogMHgwMDgwMDAsXHJcbiAgICAgICAgICAgIGdyZWVueWVsbG93OiAweGFkZmYyZixcclxuICAgICAgICAgICAgaG9uZXlkZXc6IDB4ZjBmZmYwLFxyXG4gICAgICAgICAgICBob3RwaW5rOiAweGZmNjliNCxcclxuICAgICAgICAgICAgaW5kaWFucmVkOiAweGNkNWM1YyxcclxuICAgICAgICAgICAgaW5kaWdvOiAweDRiMDA4MixcclxuICAgICAgICAgICAgaXZvcnk6IDB4ZmZmZmYwLFxyXG4gICAgICAgICAgICBraGFraTogMHhmMGU2OGMsXHJcbiAgICAgICAgICAgIGxhdmVuZGVyOiAweGU2ZTZmYSxcclxuICAgICAgICAgICAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjUsXHJcbiAgICAgICAgICAgIGxhd25ncmVlbjogMHg3Y2ZjMDAsXHJcbiAgICAgICAgICAgIGxlbW9uY2hpZmZvbjogMHhmZmZhY2QsXHJcbiAgICAgICAgICAgIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTYsXHJcbiAgICAgICAgICAgIGxpZ2h0Y29yYWw6IDB4ZjA4MDgwLFxyXG4gICAgICAgICAgICBsaWdodGN5YW46IDB4ZTBmZmZmLFxyXG4gICAgICAgICAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDIsXHJcbiAgICAgICAgICAgIGxpZ2h0Z3JheTogMHhkM2QzZDMsXHJcbiAgICAgICAgICAgIGxpZ2h0Z3JleTogMHhkM2QzZDMsXHJcbiAgICAgICAgICAgIGxpZ2h0Z3JlZW46IDB4OTBlZTkwLFxyXG4gICAgICAgICAgICBsaWdodHBpbms6IDB4ZmZiNmMxLFxyXG4gICAgICAgICAgICBsaWdodHNhbG1vbjogMHhmZmEwN2EsXHJcbiAgICAgICAgICAgIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhLFxyXG4gICAgICAgICAgICBsaWdodHNreWJsdWU6IDB4ODdjZWZhLFxyXG4gICAgICAgICAgICBsaWdodHNsYXRlZ3JheTogMHg3Nzg4OTksXHJcbiAgICAgICAgICAgIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OSxcclxuICAgICAgICAgICAgbGlnaHRzdGVlbGJsdWU6IDB4YjBjNGRlLFxyXG4gICAgICAgICAgICBsaWdodHllbGxvdzogMHhmZmZmZTAsXHJcbiAgICAgICAgICAgIGxpbWU6IDB4MDBmZjAwLFxyXG4gICAgICAgICAgICBsaW1lZ3JlZW46IDB4MzJjZDMyLFxyXG4gICAgICAgICAgICBsaW5lbjogMHhmYWYwZTYsXHJcbiAgICAgICAgICAgIG1hZ2VudGE6IDB4ZmYwMGZmLFxyXG4gICAgICAgICAgICBtYXJvb246IDB4ODAwMDAwLFxyXG4gICAgICAgICAgICBtZWRpdW1hcXVhbWFyaW5lOiAweDY2Y2RhYSxcclxuICAgICAgICAgICAgbWVkaXVtYmx1ZTogMHgwMDAwY2QsXHJcbiAgICAgICAgICAgIG1lZGl1bW9yY2hpZDogMHhiYTU1ZDMsXHJcbiAgICAgICAgICAgIG1lZGl1bXB1cnBsZTogMHg5MzcwZGIsXHJcbiAgICAgICAgICAgIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MSxcclxuICAgICAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAweDdiNjhlZSxcclxuICAgICAgICAgICAgbWVkaXVtc3ByaW5nZ3JlZW46IDB4MDBmYTlhLFxyXG4gICAgICAgICAgICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjLFxyXG4gICAgICAgICAgICBtZWRpdW12aW9sZXRyZWQ6IDB4YzcxNTg1LFxyXG4gICAgICAgICAgICBtaWRuaWdodGJsdWU6IDB4MTkxOTcwLFxyXG4gICAgICAgICAgICBtaW50Y3JlYW06IDB4ZjVmZmZhLFxyXG4gICAgICAgICAgICBtaXN0eXJvc2U6IDB4ZmZlNGUxLFxyXG4gICAgICAgICAgICBtb2NjYXNpbjogMHhmZmU0YjUsXHJcbiAgICAgICAgICAgIG5hdmFqb3doaXRlOiAweGZmZGVhZCxcclxuICAgICAgICAgICAgbmF2eTogMHgwMDAwODAsXHJcbiAgICAgICAgICAgIG9sZGxhY2U6IDB4ZmRmNWU2LFxyXG4gICAgICAgICAgICBvbGl2ZTogMHg4MDgwMDAsXHJcbiAgICAgICAgICAgIG9saXZlZHJhYjogMHg2YjhlMjMsXHJcbiAgICAgICAgICAgIG9yYW5nZTogMHhmZmE1MDAsXHJcbiAgICAgICAgICAgIG9yYW5nZXJlZDogMHhmZjQ1MDAsXHJcbiAgICAgICAgICAgIG9yY2hpZDogMHhkYTcwZDYsXHJcbiAgICAgICAgICAgIHBhbGVnb2xkZW5yb2Q6IDB4ZWVlOGFhLFxyXG4gICAgICAgICAgICBwYWxlZ3JlZW46IDB4OThmYjk4LFxyXG4gICAgICAgICAgICBwYWxldHVycXVvaXNlOiAweGFmZWVlZSxcclxuICAgICAgICAgICAgcGFsZXZpb2xldHJlZDogMHhkYjcwOTMsXHJcbiAgICAgICAgICAgIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1LFxyXG4gICAgICAgICAgICBwZWFjaHB1ZmY6IDB4ZmZkYWI5LFxyXG4gICAgICAgICAgICBwZXJ1OiAweGNkODUzZixcclxuICAgICAgICAgICAgcGluazogMHhmZmMwY2IsXHJcbiAgICAgICAgICAgIHBsdW06IDB4ZGRhMGRkLFxyXG4gICAgICAgICAgICBwb3dkZXJibHVlOiAweGIwZTBlNixcclxuICAgICAgICAgICAgcHVycGxlOiAweDgwMDA4MCxcclxuICAgICAgICAgICAgcmViZWNjYXB1cnBsZTogMHg2NjMzOTksXHJcbiAgICAgICAgICAgIHJlZDogMHhmZjAwMDAsXHJcbiAgICAgICAgICAgIHJvc3licm93bjogMHhiYzhmOGYsXHJcbiAgICAgICAgICAgIHJveWFsYmx1ZTogMHg0MTY5ZTEsXHJcbiAgICAgICAgICAgIHNhZGRsZWJyb3duOiAweDhiNDUxMyxcclxuICAgICAgICAgICAgc2FsbW9uOiAweGZhODA3MixcclxuICAgICAgICAgICAgc2FuZHlicm93bjogMHhmNGE0NjAsXHJcbiAgICAgICAgICAgIHNlYWdyZWVuOiAweDJlOGI1NyxcclxuICAgICAgICAgICAgc2Vhc2hlbGw6IDB4ZmZmNWVlLFxyXG4gICAgICAgICAgICBzaWVubmE6IDB4YTA1MjJkLFxyXG4gICAgICAgICAgICBzaWx2ZXI6IDB4YzBjMGMwLFxyXG4gICAgICAgICAgICBza3libHVlOiAweDg3Y2VlYixcclxuICAgICAgICAgICAgc2xhdGVibHVlOiAweDZhNWFjZCxcclxuICAgICAgICAgICAgc2xhdGVncmF5OiAweDcwODA5MCxcclxuICAgICAgICAgICAgc2xhdGVncmV5OiAweDcwODA5MCxcclxuICAgICAgICAgICAgc25vdzogMHhmZmZhZmEsXHJcbiAgICAgICAgICAgIHNwcmluZ2dyZWVuOiAweDAwZmY3ZixcclxuICAgICAgICAgICAgc3RlZWxibHVlOiAweDQ2ODJiNCxcclxuICAgICAgICAgICAgdGFuOiAweGQyYjQ4YyxcclxuICAgICAgICAgICAgdGVhbDogMHgwMDgwODAsXHJcbiAgICAgICAgICAgIHRoaXN0bGU6IDB4ZDhiZmQ4LFxyXG4gICAgICAgICAgICB0b21hdG86IDB4ZmY2MzQ3LFxyXG4gICAgICAgICAgICB0dXJxdW9pc2U6IDB4NDBlMGQwLFxyXG4gICAgICAgICAgICB2aW9sZXQ6IDB4ZWU4MmVlLFxyXG4gICAgICAgICAgICB3aGVhdDogMHhmNWRlYjMsXHJcbiAgICAgICAgICAgIHdoaXRlOiAweGZmZmZmZixcclxuICAgICAgICAgICAgd2hpdGVzbW9rZTogMHhmNWY1ZjUsXHJcbiAgICAgICAgICAgIHllbGxvdzogMHhmZmZmMDAsXHJcbiAgICAgICAgICAgIHllbGxvd2dyZWVuOiAweDlhY2QzMlxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgdmFyIHN5c3RlbUNvbG9ycyA9IG5ldyBNYXAoXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoe1xyXG4gICAgICAgICAgICBcIkFjdGl2ZUJvcmRlclwiOiAweDNiOTlmYyxcclxuICAgICAgICAgICAgXCJBY3RpdmVDYXB0aW9uXCI6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBcIkFwcFdvcmtzcGFjZVwiOiAweGFhYWFhYSxcclxuICAgICAgICAgICAgXCJCYWNrZ3JvdW5kXCI6IDB4NjM2M2NlLFxyXG4gICAgICAgICAgICBcIkJ1dHRvbkZhY2VcIjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIFwiQnV0dG9uSGlnaGxpZ2h0XCI6IDB4ZTllOWU5LFxyXG4gICAgICAgICAgICBcIkJ1dHRvblNoYWRvd1wiOiAweDlmYTA5ZixcclxuICAgICAgICAgICAgXCJCdXR0b25UZXh0XCI6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBcIkNhcHRpb25UZXh0XCI6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBcIkdyYXlUZXh0XCI6IDB4N2Y3ZjdmLFxyXG4gICAgICAgICAgICBcIkhpZ2hsaWdodFwiOiAweGIyZDdmZixcclxuICAgICAgICAgICAgXCJIaWdobGlnaHRUZXh0XCI6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBcIkluYWN0aXZlQm9yZGVyXCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIkluYWN0aXZlQ2FwdGlvblwiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJJbmFjdGl2ZUNhcHRpb25UZXh0XCI6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBcIkluZm9CYWNrZ3JvdW5kXCI6IDB4ZmJmY2M1LFxyXG4gICAgICAgICAgICBcIkluZm9UZXh0XCI6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBcIk1lbnVcIjogMHhmNmY2ZjYsXHJcbiAgICAgICAgICAgIFwiTWVudVRleHRcIjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIFwiU2Nyb2xsYmFyXCI6IDB4YWFhYWFhLFxyXG4gICAgICAgICAgICBcIlRocmVlRERhcmtTaGFkb3dcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiVGhyZWVERmFjZVwiOiAweGMwYzBjMCxcclxuICAgICAgICAgICAgXCJUaHJlZURIaWdobGlnaHRcIjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIFwiVGhyZWVETGlnaHRTaGFkb3dcIjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIFwiVGhyZWVEU2hhZG93XCI6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBcIldpbmRvd1wiOiAweGVjZWNlYyxcclxuICAgICAgICAgICAgXCJXaW5kb3dGcmFtZVwiOiAweGFhYWFhYSxcclxuICAgICAgICAgICAgXCJXaW5kb3dUZXh0XCI6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBcIi13ZWJraXQtZm9jdXMtcmluZy1jb2xvclwiOiAweGU1OTcwMFxyXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKF9hLCAyKSxcclxuICAgICAgICAgICAgICAgIGtleSA9IF9iWzBdLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBfYlsxXTtcclxuICAgICAgICAgICAgcmV0dXJuIFtrZXkudG9Mb3dlckNhc2UoKSwgdmFsdWVdO1xyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgZnVuY3Rpb24gZ2V0U1JHQkxpZ2h0bmVzcyhyLCBnLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuICgwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGIpIC8gMjU1O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjYWxlKHgsIGluTG93LCBpbkhpZ2gsIG91dExvdywgb3V0SGlnaCkge1xyXG4gICAgICAgIHJldHVybiAoKHggLSBpbkxvdykgKiAob3V0SGlnaCAtIG91dExvdykpIC8gKGluSGlnaCAtIGluTG93KSArIG91dExvdztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsYW1wKHgsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB4KSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseU1hdHJpY2VzKG0xLCBtMikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbTEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0W2ldID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBsZW4yID0gbTJbMF0ubGVuZ3RoOyBqIDwgbGVuMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3VtID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwLCBsZW4zID0gbTFbMF0ubGVuZ3RoOyBrIDwgbGVuMzsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IG0xW2ldW2tdICogbTJba11bal07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaV1bal0gPSBzdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGaWx0ZXJNYXRyaXgoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRyaXguaWRlbnRpdHkoKTtcclxuICAgICAgICBpZiAoY29uZmlnLnNlcGlhICE9PSAwKSB7XHJcbiAgICAgICAgICAgIG0gPSBtdWx0aXBseU1hdHJpY2VzKG0sIE1hdHJpeC5zZXBpYShjb25maWcuc2VwaWEgLyAxMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5ncmF5c2NhbGUgIT09IDApIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LmdyYXlzY2FsZShjb25maWcuZ3JheXNjYWxlIC8gMTAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuY29udHJhc3QgIT09IDEwMCkge1xyXG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguY29udHJhc3QoY29uZmlnLmNvbnRyYXN0IC8gMTAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuYnJpZ2h0bmVzcyAhPT0gMTAwKSB7XHJcbiAgICAgICAgICAgIG0gPSBtdWx0aXBseU1hdHJpY2VzKG0sIE1hdHJpeC5icmlnaHRuZXNzKGNvbmZpZy5icmlnaHRuZXNzIC8gMTAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcubW9kZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguaW52ZXJ0Tkh1ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhcHBseUNvbG9yTWF0cml4KF9hLCBtYXRyaXgpIHtcclxuICAgICAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDMpLFxyXG4gICAgICAgICAgICByID0gX2JbMF0sXHJcbiAgICAgICAgICAgIGcgPSBfYlsxXSxcclxuICAgICAgICAgICAgYiA9IF9iWzJdO1xyXG4gICAgICAgIHZhciByZ2IgPSBbW3IgLyAyNTVdLCBbZyAvIDI1NV0sIFtiIC8gMjU1XSwgWzFdLCBbMV1dO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBtdWx0aXBseU1hdHJpY2VzKG1hdHJpeCwgcmdiKTtcclxuICAgICAgICByZXR1cm4gWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2xhbXAoTWF0aC5yb3VuZChyZXN1bHRbaV1bMF0gKiAyNTUpLCAwLCAyNTUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIE1hdHJpeCA9IHtcclxuICAgICAgICBpZGVudGl0eTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnZlcnROSHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbMC4zMzMsIC0wLjY2NywgLTAuNjY3LCAwLCAxXSxcclxuICAgICAgICAgICAgICAgIFstMC42NjcsIDAuMzMzLCAtMC42NjcsIDAsIDFdLFxyXG4gICAgICAgICAgICAgICAgWy0wLjY2NywgLTAuNjY3LCAwLjMzMywgMCwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyaWdodG5lc3M6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbdiwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgdiwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgdiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRyYXN0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICB2YXIgdCA9ICgxIC0gdikgLyAyO1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW3YsIDAsIDAsIDAsIHRdLFxyXG4gICAgICAgICAgICAgICAgWzAsIHYsIDAsIDAsIHRdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIHYsIDAsIHRdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXBpYTogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjM5MyArIDAuNjA3ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjc2OSAtIDAuNzY5ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjE4OSAtIDAuMTg5ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4zNDkgLSAwLjM0OSAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC42ODYgKyAwLjMxNCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4xNjggLSAwLjE2OCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMjcyIC0gMC4yNzIgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNTM0IC0gMC41MzQgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMTMxICsgMC44NjkgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3JheXNjYWxlOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMjEyNiArIDAuNzg3NCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC43MTUyIC0gMC43MTUyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjA3MjIgLSAwLjA3MjIgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjIxMjYgLSAwLjIxMjYgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNzE1MiArIDAuMjg0OCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wNzIyIC0gMC4wNzIyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4yMTI2IC0gMC4yMTI2ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjcxNTIgLSAwLjcxNTIgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMDcyMiArIDAuOTI3OCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCZ1BvbGUodGhlbWUpIHtcclxuICAgICAgICB2YXIgaXNEYXJrU2NoZW1lID0gdGhlbWUubW9kZSA9PT0gMTtcclxuICAgICAgICB2YXIgcHJvcCA9IGlzRGFya1NjaGVtZVxyXG4gICAgICAgICAgICA/IFwiZGFya1NjaGVtZUJhY2tncm91bmRDb2xvclwiXHJcbiAgICAgICAgICAgIDogXCJsaWdodFNjaGVtZUJhY2tncm91bmRDb2xvclwiO1xyXG4gICAgICAgIHJldHVybiB0aGVtZVtwcm9wXTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEZnUG9sZSh0aGVtZSkge1xyXG4gICAgICAgIHZhciBpc0RhcmtTY2hlbWUgPSB0aGVtZS5tb2RlID09PSAxO1xyXG4gICAgICAgIHZhciBwcm9wID0gaXNEYXJrU2NoZW1lXHJcbiAgICAgICAgICAgID8gXCJkYXJrU2NoZW1lVGV4dENvbG9yXCJcclxuICAgICAgICAgICAgOiBcImxpZ2h0U2NoZW1lVGV4dENvbG9yXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoZW1lW3Byb3BdO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBjbGVhckNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUoKSB7XHJcbiAgICAgICAgY29sb3JNb2RpZmljYXRpb25DYWNoZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgdmFyIHJnYkNhY2hlS2V5cyA9IFtcInJcIiwgXCJnXCIsIFwiYlwiLCBcImFcIl07XHJcbiAgICB2YXIgdGhlbWVDYWNoZUtleXMkMSA9IFtcclxuICAgICAgICBcIm1vZGVcIixcclxuICAgICAgICBcImJyaWdodG5lc3NcIixcclxuICAgICAgICBcImNvbnRyYXN0XCIsXHJcbiAgICAgICAgXCJncmF5c2NhbGVcIixcclxuICAgICAgICBcInNlcGlhXCIsXHJcbiAgICAgICAgXCJkYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgXCJkYXJrU2NoZW1lVGV4dENvbG9yXCIsXHJcbiAgICAgICAgXCJsaWdodFNjaGVtZUJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIFwibGlnaHRTY2hlbWVUZXh0Q29sb3JcIlxyXG4gICAgXTtcclxuICAgIGZ1bmN0aW9uIGdldENhY2hlSWQocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIHZhciByZXN1bHRJZCA9IFwiXCI7XHJcbiAgICAgICAgcmdiQ2FjaGVLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXN1bHRJZCArPSBcIlwiLmNvbmNhdChyZ2Jba2V5XSwgXCI7XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoZW1lQ2FjaGVLZXlzJDEuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdElkICs9IFwiXCIuY29uY2F0KHRoZW1lW2tleV0sIFwiO1wiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0SWQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlDb2xvcldpdGhDYWNoZShcclxuICAgICAgICByZ2IsXHJcbiAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgbW9kaWZ5SFNMLFxyXG4gICAgICAgIHBvbGVDb2xvcixcclxuICAgICAgICBhbm90aGVyUG9sZUNvbG9yXHJcbiAgICApIHtcclxuICAgICAgICB2YXIgZm5DYWNoZTtcclxuICAgICAgICBpZiAoY29sb3JNb2RpZmljYXRpb25DYWNoZS5oYXMobW9kaWZ5SFNMKSkge1xyXG4gICAgICAgICAgICBmbkNhY2hlID0gY29sb3JNb2RpZmljYXRpb25DYWNoZS5nZXQobW9kaWZ5SFNMKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmbkNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICBjb2xvck1vZGlmaWNhdGlvbkNhY2hlLnNldChtb2RpZnlIU0wsIGZuQ2FjaGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaWQgPSBnZXRDYWNoZUlkKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIGlmIChmbkNhY2hlLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZuQ2FjaGUuZ2V0KGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGhzbCA9IHJnYlRvSFNMKHJnYik7XHJcbiAgICAgICAgdmFyIHBvbGUgPSBwb2xlQ29sb3IgPT0gbnVsbCA/IG51bGwgOiBwYXJzZVRvSFNMV2l0aENhY2hlKHBvbGVDb2xvcik7XHJcbiAgICAgICAgdmFyIGFub3RoZXJQb2xlID1cclxuICAgICAgICAgICAgYW5vdGhlclBvbGVDb2xvciA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgIDogcGFyc2VUb0hTTFdpdGhDYWNoZShhbm90aGVyUG9sZUNvbG9yKTtcclxuICAgICAgICB2YXIgbW9kaWZpZWQgPSBtb2RpZnlIU0woaHNsLCBwb2xlLCBhbm90aGVyUG9sZSk7XHJcbiAgICAgICAgdmFyIF9hID0gaHNsVG9SR0IobW9kaWZpZWQpLFxyXG4gICAgICAgICAgICByID0gX2EucixcclxuICAgICAgICAgICAgZyA9IF9hLmcsXHJcbiAgICAgICAgICAgIGIgPSBfYS5iLFxyXG4gICAgICAgICAgICBhID0gX2EuYTtcclxuICAgICAgICB2YXIgbWF0cml4ID0gY3JlYXRlRmlsdGVyTWF0cml4KHRoZW1lKTtcclxuICAgICAgICB2YXIgX2IgPSBfX3JlYWQoYXBwbHlDb2xvck1hdHJpeChbciwgZywgYl0sIG1hdHJpeCksIDMpLFxyXG4gICAgICAgICAgICByZiA9IF9iWzBdLFxyXG4gICAgICAgICAgICBnZiA9IF9iWzFdLFxyXG4gICAgICAgICAgICBiZiA9IF9iWzJdO1xyXG4gICAgICAgIHZhciBjb2xvciA9XHJcbiAgICAgICAgICAgIGEgPT09IDFcclxuICAgICAgICAgICAgICAgID8gcmdiVG9IZXhTdHJpbmcoe3I6IHJmLCBnOiBnZiwgYjogYmZ9KVxyXG4gICAgICAgICAgICAgICAgOiByZ2JUb1N0cmluZyh7cjogcmYsIGc6IGdmLCBiOiBiZiwgYTogYX0pO1xyXG4gICAgICAgIGZuQ2FjaGUuc2V0KGlkLCBjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbm9vcEhTTChoc2wpIHtcclxuICAgICAgICByZXR1cm4gaHNsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5Q29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlDb2xvcldpdGhDYWNoZShyZ2IsIHRoZW1lLCBub29wSFNMKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIHZhciBwb2xlQmcgPSBnZXRCZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIHZhciBwb2xlRmcgPSBnZXRGZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlDb2xvcldpdGhDYWNoZShcclxuICAgICAgICAgICAgcmdiLFxyXG4gICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgbW9kaWZ5TGlnaHRNb2RlSFNMLFxyXG4gICAgICAgICAgICBwb2xlRmcsXHJcbiAgICAgICAgICAgIHBvbGVCZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlMaWdodE1vZGVIU0woX2EsIHBvbGVGZywgcG9sZUJnKSB7XHJcbiAgICAgICAgdmFyIGggPSBfYS5oLFxyXG4gICAgICAgICAgICBzID0gX2EucyxcclxuICAgICAgICAgICAgbCA9IF9hLmwsXHJcbiAgICAgICAgICAgIGEgPSBfYS5hO1xyXG4gICAgICAgIHZhciBpc0RhcmsgPSBsIDwgMC41O1xyXG4gICAgICAgIHZhciBpc05ldXRyYWw7XHJcbiAgICAgICAgaWYgKGlzRGFyaykge1xyXG4gICAgICAgICAgICBpc05ldXRyYWwgPSBsIDwgMC4yIHx8IHMgPCAwLjEyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpc0JsdWUgPSBoID4gMjAwICYmIGggPCAyODA7XHJcbiAgICAgICAgICAgIGlzTmV1dHJhbCA9IHMgPCAwLjI0IHx8IChsID4gMC44ICYmIGlzQmx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBoeCA9IGg7XHJcbiAgICAgICAgdmFyIHN4ID0gbDtcclxuICAgICAgICBpZiAoaXNOZXV0cmFsKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0RhcmspIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gcG9sZUZnLmg7XHJcbiAgICAgICAgICAgICAgICBzeCA9IHBvbGVGZy5zO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaHggPSBwb2xlQmcuaDtcclxuICAgICAgICAgICAgICAgIHN4ID0gcG9sZUJnLnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGx4ID0gc2NhbGUobCwgMCwgMSwgcG9sZUZnLmwsIHBvbGVCZy5sKTtcclxuICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzeCwgbDogbHgsIGE6IGF9O1xyXG4gICAgfVxyXG4gICAgdmFyIE1BWF9CR19MSUdIVE5FU1MgPSAwLjQ7XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCZ0hTTChfYSwgcG9sZSkge1xyXG4gICAgICAgIHZhciBoID0gX2EuaCxcclxuICAgICAgICAgICAgcyA9IF9hLnMsXHJcbiAgICAgICAgICAgIGwgPSBfYS5sLFxyXG4gICAgICAgICAgICBhID0gX2EuYTtcclxuICAgICAgICB2YXIgaXNEYXJrID0gbCA8IDAuNTtcclxuICAgICAgICB2YXIgaXNCbHVlID0gaCA+IDIwMCAmJiBoIDwgMjgwO1xyXG4gICAgICAgIHZhciBpc05ldXRyYWwgPSBzIDwgMC4xMiB8fCAobCA+IDAuOCAmJiBpc0JsdWUpO1xyXG4gICAgICAgIGlmIChpc0RhcmspIHtcclxuICAgICAgICAgICAgdmFyIGx4XzEgPSBzY2FsZShsLCAwLCAwLjUsIDAsIE1BWF9CR19MSUdIVE5FU1MpO1xyXG4gICAgICAgICAgICBpZiAoaXNOZXV0cmFsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaHhfMSA9IHBvbGUuaDtcclxuICAgICAgICAgICAgICAgIHZhciBzeCA9IHBvbGUucztcclxuICAgICAgICAgICAgICAgIHJldHVybiB7aDogaHhfMSwgczogc3gsIGw6IGx4XzEsIGE6IGF9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7aDogaCwgczogcywgbDogbHhfMSwgYTogYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBseCA9IHNjYWxlKGwsIDAuNSwgMSwgTUFYX0JHX0xJR0hUTkVTUywgcG9sZS5sKTtcclxuICAgICAgICBpZiAoaXNOZXV0cmFsKSB7XHJcbiAgICAgICAgICAgIHZhciBoeF8yID0gcG9sZS5oO1xyXG4gICAgICAgICAgICB2YXIgc3ggPSBwb2xlLnM7XHJcbiAgICAgICAgICAgIHJldHVybiB7aDogaHhfMiwgczogc3gsIGw6IGx4LCBhOiBhfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh4ID0gaDtcclxuICAgICAgICB2YXIgaXNZZWxsb3cgPSBoID4gNjAgJiYgaCA8IDE4MDtcclxuICAgICAgICBpZiAoaXNZZWxsb3cpIHtcclxuICAgICAgICAgICAgdmFyIGlzQ2xvc2VyVG9HcmVlbiA9IGggPiAxMjA7XHJcbiAgICAgICAgICAgIGlmIChpc0Nsb3NlclRvR3JlZW4pIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gc2NhbGUoaCwgMTIwLCAxODAsIDEzNSwgMTgwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gc2NhbGUoaCwgNjAsIDEyMCwgNjAsIDEwNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGh4ID4gNDAgJiYgaHggPCA4MCkge1xyXG4gICAgICAgICAgICBseCAqPSAwLjc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzLCBsOiBseCwgYTogYX07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIGlmICh0aGVtZS5tb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RpZnlMaWdodFNjaGVtZUNvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcG9sZSA9IGdldEJnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUNvbG9yV2l0aENhY2hlKFxyXG4gICAgICAgICAgICByZ2IsXHJcbiAgICAgICAgICAgIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGVtZSksIHttb2RlOiAwfSksXHJcbiAgICAgICAgICAgIG1vZGlmeUJnSFNMLFxyXG4gICAgICAgICAgICBwb2xlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHZhciBNSU5fRkdfTElHSFRORVNTID0gMC41NTtcclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJsdWVGZ0h1ZShodWUpIHtcclxuICAgICAgICByZXR1cm4gc2NhbGUoaHVlLCAyMDUsIDI0NSwgMjA1LCAyMjApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5RmdIU0woX2EsIHBvbGUpIHtcclxuICAgICAgICB2YXIgaCA9IF9hLmgsXHJcbiAgICAgICAgICAgIHMgPSBfYS5zLFxyXG4gICAgICAgICAgICBsID0gX2EubCxcclxuICAgICAgICAgICAgYSA9IF9hLmE7XHJcbiAgICAgICAgdmFyIGlzTGlnaHQgPSBsID4gMC41O1xyXG4gICAgICAgIHZhciBpc05ldXRyYWwgPSBsIDwgMC4yIHx8IHMgPCAwLjI0O1xyXG4gICAgICAgIHZhciBpc0JsdWUgPSAhaXNOZXV0cmFsICYmIGggPiAyMDUgJiYgaCA8IDI0NTtcclxuICAgICAgICBpZiAoaXNMaWdodCkge1xyXG4gICAgICAgICAgICB2YXIgbHhfMiA9IHNjYWxlKGwsIDAuNSwgMSwgTUlOX0ZHX0xJR0hUTkVTUywgcG9sZS5sKTtcclxuICAgICAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGh4XzMgPSBwb2xlLmg7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3ggPSBwb2xlLnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2g6IGh4XzMsIHM6IHN4LCBsOiBseF8yLCBhOiBhfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaHhfNCA9IGg7XHJcbiAgICAgICAgICAgIGlmIChpc0JsdWUpIHtcclxuICAgICAgICAgICAgICAgIGh4XzQgPSBtb2RpZnlCbHVlRmdIdWUoaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtoOiBoeF80LCBzOiBzLCBsOiBseF8yLCBhOiBhfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICB2YXIgaHhfNSA9IHBvbGUuaDtcclxuICAgICAgICAgICAgdmFyIHN4ID0gcG9sZS5zO1xyXG4gICAgICAgICAgICB2YXIgbHhfMyA9IHNjYWxlKGwsIDAsIDAuNSwgcG9sZS5sLCBNSU5fRkdfTElHSFRORVNTKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtoOiBoeF81LCBzOiBzeCwgbDogbHhfMywgYTogYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBoeCA9IGg7XHJcbiAgICAgICAgdmFyIGx4O1xyXG4gICAgICAgIGlmIChpc0JsdWUpIHtcclxuICAgICAgICAgICAgaHggPSBtb2RpZnlCbHVlRmdIdWUoaCk7XHJcbiAgICAgICAgICAgIGx4ID0gc2NhbGUobCwgMCwgMC41LCBwb2xlLmwsIE1hdGgubWluKDEsIE1JTl9GR19MSUdIVE5FU1MgKyAwLjA1KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbHggPSBzY2FsZShsLCAwLCAwLjUsIHBvbGUubCwgTUlOX0ZHX0xJR0hUTkVTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7aDogaHgsIHM6IHMsIGw6IGx4LCBhOiBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUZvcmVncm91bmRDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lLm1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwb2xlID0gZ2V0RmdQb2xlKHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgICAgIHJnYixcclxuICAgICAgICAgICAgX19hc3NpZ24oX19hc3NpZ24oe30sIHRoZW1lKSwge21vZGU6IDB9KSxcclxuICAgICAgICAgICAgbW9kaWZ5RmdIU0wsXHJcbiAgICAgICAgICAgIHBvbGVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5Qm9yZGVySFNMKF9hLCBwb2xlRmcsIHBvbGVCZykge1xyXG4gICAgICAgIHZhciBoID0gX2EuaCxcclxuICAgICAgICAgICAgcyA9IF9hLnMsXHJcbiAgICAgICAgICAgIGwgPSBfYS5sLFxyXG4gICAgICAgICAgICBhID0gX2EuYTtcclxuICAgICAgICB2YXIgaXNEYXJrID0gbCA8IDAuNTtcclxuICAgICAgICB2YXIgaXNOZXV0cmFsID0gbCA8IDAuMiB8fCBzIDwgMC4yNDtcclxuICAgICAgICB2YXIgaHggPSBoO1xyXG4gICAgICAgIHZhciBzeCA9IHM7XHJcbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICBpZiAoaXNEYXJrKSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVGZy5oO1xyXG4gICAgICAgICAgICAgICAgc3ggPSBwb2xlRmcucztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gcG9sZUJnLmg7XHJcbiAgICAgICAgICAgICAgICBzeCA9IHBvbGVCZy5zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBseCA9IHNjYWxlKGwsIDAsIDEsIDAuNSwgMC4yKTtcclxuICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzeCwgbDogbHgsIGE6IGF9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5Qm9yZGVyQ29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIGlmICh0aGVtZS5tb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RpZnlMaWdodFNjaGVtZUNvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcG9sZUZnID0gZ2V0RmdQb2xlKHRoZW1lKTtcclxuICAgICAgICB2YXIgcG9sZUJnID0gZ2V0QmdQb2xlKHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgICAgIHJnYixcclxuICAgICAgICAgICAgX19hc3NpZ24oX19hc3NpZ24oe30sIHRoZW1lKSwge21vZGU6IDB9KSxcclxuICAgICAgICAgICAgbW9kaWZ5Qm9yZGVySFNMLFxyXG4gICAgICAgICAgICBwb2xlRmcsXHJcbiAgICAgICAgICAgIHBvbGVCZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlTaGFkb3dDb2xvcihyZ2IsIGZpbHRlcikge1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IocmdiLCBmaWx0ZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5R3JhZGllbnRDb2xvcihyZ2IsIGZpbHRlcikge1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IocmdiLCBmaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRleHRTdHlsZShjb25maWcpIHtcclxuICAgICAgICB2YXIgbGluZXMgPSBbXTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAnKjpub3QocHJlLCBwcmUgKiwgY29kZSwgLmZhciwgLmZhLCAuZ2x5cGhpY29uLCBbY2xhc3MqPVwidmpzLVwiXSwgLmZhYiwgLmZhLWdpdGh1YiwgLmZhcywgLm1hdGVyaWFsLWljb25zLCAuaWNvZm9udCwgLnR5cGNuLCBtdSwgW2NsYXNzKj1cIm11LVwiXSwgLmdseXBoaWNvbiwgLmljb24pIHsnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoY29uZmlnLnVzZUZvbnQgJiYgY29uZmlnLmZvbnRGYW1pbHkpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIFwiICBmb250LWZhbWlseTogXCIuY29uY2F0KGNvbmZpZy5mb250RmFtaWx5LCBcIiAhaW1wb3J0YW50O1wiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLnRleHRTdHJva2UgPiAwKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBcIiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy50ZXh0U3Ryb2tlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHggIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgXCIgIHRleHQtc3Ryb2tlOiBcIi5jb25jYXQoY29uZmlnLnRleHRTdHJva2UsIFwicHggIWltcG9ydGFudDtcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIEZpbHRlck1vZGU7XHJcbiAgICAoZnVuY3Rpb24gKEZpbHRlck1vZGUpIHtcclxuICAgICAgICBGaWx0ZXJNb2RlWyhGaWx0ZXJNb2RlW1wibGlnaHRcIl0gPSAwKV0gPSBcImxpZ2h0XCI7XHJcbiAgICAgICAgRmlsdGVyTW9kZVsoRmlsdGVyTW9kZVtcImRhcmtcIl0gPSAxKV0gPSBcImRhcmtcIjtcclxuICAgIH0pKEZpbHRlck1vZGUgfHwgKEZpbHRlck1vZGUgPSB7fSkpO1xyXG4gICAgZnVuY3Rpb24gZ2V0Q1NTRmlsdGVyVmFsdWUoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIGZpbHRlcnMgPSBbXTtcclxuICAgICAgICBpZiAoY29uZmlnLm1vZGUgPT09IEZpbHRlck1vZGUuZGFyaykge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goXCJpbnZlcnQoMTAwJSkgaHVlLXJvdGF0ZSgxODBkZWcpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmJyaWdodG5lc3MgIT09IDEwMCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goXCJicmlnaHRuZXNzKFwiLmNvbmNhdChjb25maWcuYnJpZ2h0bmVzcywgXCIlKVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuY29udHJhc3QgIT09IDEwMCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goXCJjb250cmFzdChcIi5jb25jYXQoY29uZmlnLmNvbnRyYXN0LCBcIiUpXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5ncmF5c2NhbGUgIT09IDApIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKFwiZ3JheXNjYWxlKFwiLmNvbmNhdChjb25maWcuZ3JheXNjYWxlLCBcIiUpXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5zZXBpYSAhPT0gMCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goXCJzZXBpYShcIi5jb25jYXQoY29uZmlnLnNlcGlhLCBcIiUpXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsdGVycy5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b1NWR01hdHJpeChtYXRyaXgpIHtcclxuICAgICAgICByZXR1cm4gbWF0cml4XHJcbiAgICAgICAgICAgIC5zbGljZSgwLCA0KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0udG9GaXhlZCgzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKFwiIFwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U1ZHRmlsdGVyTWF0cml4VmFsdWUoY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvU1ZHTWF0cml4KGNyZWF0ZUZpbHRlck1hdHJpeChjb25maWcpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICB2YXIgcmVzb2x2ZXJzJDEgPSBuZXcgTWFwKCk7XHJcbiAgICB2YXIgcmVqZWN0b3JzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gYmdGZXRjaChyZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSArK2NvdW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVycyQxLnNldChpZCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdG9ycy5zZXQoaWQsIHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNTX0ZFVENILFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIHR5cGUgPSBfYS50eXBlLFxyXG4gICAgICAgICAgICBkYXRhID0gX2EuZGF0YSxcclxuICAgICAgICAgICAgZXJyb3IgPSBfYS5lcnJvcixcclxuICAgICAgICAgICAgaWQgPSBfYS5pZDtcclxuICAgICAgICBpZiAodHlwZSA9PT0gTWVzc2FnZVR5cGUuQkdfRkVUQ0hfUkVTUE9OU0UpIHtcclxuICAgICAgICAgICAgdmFyIHJlc29sdmUgPSByZXNvbHZlcnMkMS5nZXQoaWQpO1xyXG4gICAgICAgICAgICB2YXIgcmVqZWN0ID0gcmVqZWN0b3JzLmdldChpZCk7XHJcbiAgICAgICAgICAgIHJlc29sdmVycyQxLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIHJlamVjdG9ycy5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCAmJiByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSAmJiByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIEFzeW5jUXVldWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIEFzeW5jUXVldWUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy50aW1lcklkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBBc3luY1F1ZXVlLnByb3RvdHlwZS5hZGRUb1F1ZXVlID0gZnVuY3Rpb24gKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUucHVzaChlbnRyeSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRRdWV1ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQXN5bmNRdWV1ZS5wcm90b3R5cGUuc3RvcFF1ZXVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lcklkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lcklkID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlID0gW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBBc3luY1F1ZXVlLnByb3RvdHlwZS5zdGFydFF1ZXVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lcklkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50aW1lcklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRpbWVySWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIHZhciBjYjtcclxuICAgICAgICAgICAgICAgIHdoaWxlICgoY2IgPSBfdGhpcy5xdWV1ZS5zaGlmdCgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+PSBfdGhpcy5mcmFtZUR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN0YXJ0UXVldWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBBc3luY1F1ZXVlO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICB2YXIgaW1hZ2VNYW5hZ2VyID0gbmV3IEFzeW5jUXVldWUoKTtcclxuICAgIGZ1bmN0aW9uIGdldEltYWdlRGV0YWlscyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVVSTCwgZXJyb3JfMSwgaW1hZ2VfMSwgZXJyb3JfMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVSTCA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGdldEltYWdlRGF0YVVSTCh1cmwpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVSTCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3JfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzQsIDYsICwgN10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB1cmxUb0ltYWdlKGRhdGFVUkwpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlTWFuYWdlci5hZGRUb1F1ZXVlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2Fzc2lnbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVVJMOiBkYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbWFnZV8xLm5hdHVyYWxXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGltYWdlXzEubmF0dXJhbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5emVJbWFnZShpbWFnZV8xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcl8yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEltYWdlRGF0YVVSTCh1cmwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJzZWRVUkw7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFVSTCA9IG5ldyBVUkwodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocGFyc2VkVVJMLm9yaWdpbiA9PT0gbG9jYXRpb24ub3JpZ2luKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgbG9hZEFzRGF0YVVSTCh1cmwpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdGZXRjaCh7dXJsOiB1cmwsIHJlc3BvbnNlVHlwZTogXCJkYXRhLXVybFwifSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cmxUb0ltYWdlKHVybCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoXCJVbmFibGUgdG8gbG9hZCBpbWFnZSBcIi5jb25jYXQodXJsKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgTUFYX0FOQUxJWkVfUElYRUxTX0NPVU5UID0gMzIgKiAzMjtcclxuICAgIHZhciBjYW52YXM7XHJcbiAgICB2YXIgY29udGV4dDtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB2YXIgbWF4V2lkdGggPSBNQVhfQU5BTElaRV9QSVhFTFNfQ09VTlQ7XHJcbiAgICAgICAgdmFyIG1heEhlaWdodCA9IE1BWF9BTkFMSVpFX1BJWEVMU19DT1VOVDtcclxuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG1heFdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBtYXhIZWlnaHQ7XHJcbiAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNhbnZhcygpIHtcclxuICAgICAgICBjYW52YXMgPSBudWxsO1xyXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIE1BWF9JTUFHRV9TSVpFID0gNSAqIDEwMjQgKiAxMDI0O1xyXG4gICAgZnVuY3Rpb24gYW5hbHl6ZUltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgY3JlYXRlQ2FudmFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuYXR1cmFsV2lkdGggPSBpbWFnZS5uYXR1cmFsV2lkdGgsXHJcbiAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0O1xyXG4gICAgICAgIGlmIChuYXR1cmFsSGVpZ2h0ID09PSAwIHx8IG5hdHVyYWxXaWR0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBsb2dXYXJuKFwibG9nV2FybihJbWFnZSBpcyBlbXB0eSBcIi5jb25jYXQoaW1hZ2UuY3VycmVudFNyYywgXCIpXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaXplID0gbmF0dXJhbFdpZHRoICogbmF0dXJhbEhlaWdodCAqIDQ7XHJcbiAgICAgICAgaWYgKHNpemUgPiBNQVhfSU1BR0VfU0laRSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaXNEYXJrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTGlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNUcmFuc3BhcmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xhcmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzVG9vTGFyZ2U6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5hdHVyYWxQaXhlbHNDb3VudCA9IG5hdHVyYWxXaWR0aCAqIG5hdHVyYWxIZWlnaHQ7XHJcbiAgICAgICAgdmFyIGsgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgTWF0aC5zcXJ0KE1BWF9BTkFMSVpFX1BJWEVMU19DT1VOVCAvIG5hdHVyYWxQaXhlbHNDb3VudClcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciB3aWR0aCA9IE1hdGguY2VpbChuYXR1cmFsV2lkdGggKiBrKTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gTWF0aC5jZWlsKG5hdHVyYWxIZWlnaHQgKiBrKTtcclxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcclxuICAgICAgICAgICAgbmF0dXJhbEhlaWdodCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIGltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHZhciBkID0gaW1hZ2VEYXRhLmRhdGE7XHJcbiAgICAgICAgdmFyIFRSQU5TUEFSRU5UX0FMUEhBX1RIUkVTSE9MRCA9IDAuMDU7XHJcbiAgICAgICAgdmFyIERBUktfTElHSFRORVNTX1RIUkVTSE9MRCA9IDAuNDtcclxuICAgICAgICB2YXIgTElHSFRfTElHSFRORVNTX1RIUkVTSE9MRCA9IDAuNztcclxuICAgICAgICB2YXIgdHJhbnNwYXJlbnRQaXhlbHNDb3VudCA9IDA7XHJcbiAgICAgICAgdmFyIGRhcmtQaXhlbHNDb3VudCA9IDA7XHJcbiAgICAgICAgdmFyIGxpZ2h0UGl4ZWxzQ291bnQgPSAwO1xyXG4gICAgICAgIHZhciBpLCB4LCB5O1xyXG4gICAgICAgIHZhciByLCBnLCBiLCBhO1xyXG4gICAgICAgIHZhciBsO1xyXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaSA9IDQgKiAoeSAqIHdpZHRoICsgeCk7XHJcbiAgICAgICAgICAgICAgICByID0gZFtpICsgMF07XHJcbiAgICAgICAgICAgICAgICBnID0gZFtpICsgMV07XHJcbiAgICAgICAgICAgICAgICBiID0gZFtpICsgMl07XHJcbiAgICAgICAgICAgICAgICBhID0gZFtpICsgM107XHJcbiAgICAgICAgICAgICAgICBpZiAoYSAvIDI1NSA8IFRSQU5TUEFSRU5UX0FMUEhBX1RIUkVTSE9MRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50UGl4ZWxzQ291bnQrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbCA9IGdldFNSR0JMaWdodG5lc3MociwgZywgYik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwgPCBEQVJLX0xJR0hUTkVTU19USFJFU0hPTEQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFya1BpeGVsc0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsID4gTElHSFRfTElHSFRORVNTX1RIUkVTSE9MRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodFBpeGVsc0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0b3RhbFBpeGVsc0NvdW50ID0gd2lkdGggKiBoZWlnaHQ7XHJcbiAgICAgICAgdmFyIG9wYXF1ZVBpeGVsc0NvdW50ID0gdG90YWxQaXhlbHNDb3VudCAtIHRyYW5zcGFyZW50UGl4ZWxzQ291bnQ7XHJcbiAgICAgICAgdmFyIERBUktfSU1BR0VfVEhSRVNIT0xEID0gMC43O1xyXG4gICAgICAgIHZhciBMSUdIVF9JTUFHRV9USFJFU0hPTEQgPSAwLjc7XHJcbiAgICAgICAgdmFyIFRSQU5TUEFSRU5UX0lNQUdFX1RIUkVTSE9MRCA9IDAuMTtcclxuICAgICAgICB2YXIgTEFSR0VfSU1BR0VfUElYRUxTX0NPVU5UID0gODAwICogNjAwO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzRGFyazogZGFya1BpeGVsc0NvdW50IC8gb3BhcXVlUGl4ZWxzQ291bnQgPj0gREFSS19JTUFHRV9USFJFU0hPTEQsXHJcbiAgICAgICAgICAgIGlzTGlnaHQ6XHJcbiAgICAgICAgICAgICAgICBsaWdodFBpeGVsc0NvdW50IC8gb3BhcXVlUGl4ZWxzQ291bnQgPj0gTElHSFRfSU1BR0VfVEhSRVNIT0xELFxyXG4gICAgICAgICAgICBpc1RyYW5zcGFyZW50OlxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRQaXhlbHNDb3VudCAvIHRvdGFsUGl4ZWxzQ291bnQgPj1cclxuICAgICAgICAgICAgICAgIFRSQU5TUEFSRU5UX0lNQUdFX1RIUkVTSE9MRCxcclxuICAgICAgICAgICAgaXNMYXJnZTogbmF0dXJhbFBpeGVsc0NvdW50ID49IExBUkdFX0lNQUdFX1BJWEVMU19DT1VOVCxcclxuICAgICAgICAgICAgaXNUb29MYXJnZTogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0RmlsdGVyZWRJbWFnZURhdGFVUkwoX2EsIHRoZW1lKSB7XHJcbiAgICAgICAgdmFyIGRhdGFVUkwgPSBfYS5kYXRhVVJMLFxyXG4gICAgICAgICAgICB3aWR0aCA9IF9hLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIG1hdHJpeCA9IGdldFNWR0ZpbHRlck1hdHJpeFZhbHVlKHRoZW1lKTtcclxuICAgICAgICB2YXIgc3ZnID0gW1xyXG4gICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCInXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KHdpZHRoLCAnXCIgaGVpZ2h0PVwiJylcclxuICAgICAgICAgICAgICAgIC5jb25jYXQoaGVpZ2h0LCAnXCI+JyksXHJcbiAgICAgICAgICAgIFwiPGRlZnM+XCIsXHJcbiAgICAgICAgICAgICc8ZmlsdGVyIGlkPVwiZGFya3JlYWRlci1pbWFnZS1maWx0ZXJcIj4nLFxyXG4gICAgICAgICAgICAnPGZlQ29sb3JNYXRyaXggdHlwZT1cIm1hdHJpeFwiIHZhbHVlcz1cIicuY29uY2F0KG1hdHJpeCwgJ1wiIC8+JyksXHJcbiAgICAgICAgICAgIFwiPC9maWx0ZXI+XCIsXHJcbiAgICAgICAgICAgIFwiPC9kZWZzPlwiLFxyXG4gICAgICAgICAgICAnPGltYWdlIHdpZHRoPVwiJ1xyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh3aWR0aCwgJ1wiIGhlaWdodD1cIicpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAnXCIgZmlsdGVyPVwidXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcilcIiB4bGluazpocmVmPVwiJ1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdChkYXRhVVJMLCAnXCIgLz4nKSxcclxuICAgICAgICAgICAgXCI8L3N2Zz5cIlxyXG4gICAgICAgIF0uam9pbihcIlwiKTtcclxuICAgICAgICByZXR1cm4gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiLmNvbmNhdChidG9hKHN2ZykpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYW5JbWFnZVByb2Nlc3NpbmdDYWNoZSgpIHtcclxuICAgICAgICBpbWFnZU1hbmFnZXIgJiYgaW1hZ2VNYW5hZ2VyLnN0b3BRdWV1ZSgpO1xyXG4gICAgICAgIHJlbW92ZUNhbnZhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBncmFkaWVudExlbmd0aCA9IFwiZ3JhZGllbnRcIi5sZW5ndGg7XHJcbiAgICB2YXIgY29uaWNHcmFkaWVudCA9IFwiY29uaWMtXCI7XHJcbiAgICB2YXIgY29uaWNHcmFkaWVudExlbmd0aCA9IGNvbmljR3JhZGllbnQubGVuZ3RoO1xyXG4gICAgdmFyIHJhZGlhbEdyYWRpZW50ID0gXCJyYWRpYWwtXCI7XHJcbiAgICB2YXIgbGluZWFyR3JhZGllbnQgPSBcImxpbmVhci1cIjtcclxuICAgIGZ1bmN0aW9uIHBhcnNlR3JhZGllbnQodmFsdWUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuICAgICAgICB2YXIgc3RhcnRJbmRleCA9IGNvbmljR3JhZGllbnQubGVuZ3RoO1xyXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdHlwZUdyYWRpZW50O1xyXG4gICAgICAgICAgICBbbGluZWFyR3JhZGllbnQsIHJhZGlhbEdyYWRpZW50LCBjb25pY0dyYWRpZW50XS5maW5kKGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlVHlwZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NzaWJsZUdyYWRpZW50ID0gdmFsdWUuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zc2libGVHcmFkaWVudCA9PT0gcG9zc2libGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCAtIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT09IFwicmVwZWF0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQgPSBcInJlcGVhdGluZy1cIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3JhZGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCAtIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PT0gXCItd2Via2l0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQgPSBcIi13ZWJraXQtXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyYWRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQgPSBcIlwiLmNvbmNhdChwb3NzaWJsZVR5cGUsIFwiZ3JhZGllbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghdHlwZUdyYWRpZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBfYSA9IGdldFBhcmVudGhlc2VzUmFuZ2UodmFsdWUsIGluZGV4ICsgZ3JhZGllbnRMZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBfYS5zdGFydCxcclxuICAgICAgICAgICAgICAgIGVuZCA9IF9hLmVuZDtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gdmFsdWUuc3Vic3RyaW5nKHN0YXJ0ICsgMSwgZW5kIC0gMSk7XHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSBlbmQgKyAxICsgY29uaWNHcmFkaWVudExlbmd0aDtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZUdyYWRpZW50OiB0eXBlR3JhZGllbnQsXHJcbiAgICAgICAgICAgICAgICBtYXRjaDogbWF0Y2gsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IHR5cGVHcmFkaWVudC5sZW5ndGggKyAyLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4IC0gdHlwZUdyYWRpZW50Lmxlbmd0aCArIGdyYWRpZW50TGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgaGFzQ29tbWE6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aGlsZSAoKGluZGV4ID0gdmFsdWUuaW5kZXhPZihcImdyYWRpZW50XCIsIHN0YXJ0SW5kZXgpKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKCk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZV8xID09PSBcImJyZWFrXCIpIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdLmhhc0NvbW1hID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJpb3JpdHkocnVsZVN0eWxlLCBwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKHJ1bGVTdHlsZSAmJiBydWxlU3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eShwcm9wZXJ0eSkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TW9kaWZpYWJsZUNTU0RlY2xhcmF0aW9uKFxyXG4gICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIHJ1bGUsXHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnMsXHJcbiAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICkge1xyXG4gICAgICAgIGlmIChwcm9wZXJ0eS5zdGFydHNXaXRoKFwiLS1cIikpIHtcclxuICAgICAgICAgICAgdmFyIG1vZGlmaWVyID0gZ2V0VmFyaWFibGVNb2RpZmllcihcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChtb2RpZmllcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogZ2V0UHJpb3JpdHkocnVsZS5zdHlsZSwgcHJvcGVydHkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoXCJ2YXIoXCIpKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2RpZmllciA9IGdldFZhcmlhYmxlRGVwZW5kYW50TW9kaWZpZXIoXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKG1vZGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kaWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBnZXRQcmlvcml0eShydWxlLnN0eWxlLCBwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gXCJjb2xvci1zY2hlbWVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAocHJvcGVydHkuaW5jbHVkZXMoXCJjb2xvclwiKSAmJlxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgIT09IFwiLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3RcIikgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiZmlsbFwiIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcInN0cm9rZVwiIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcInN0b3AtY29sb3JcIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgbW9kaWZpZXIgPSBnZXRDb2xvck1vZGlmaWVyKHByb3BlcnR5LCB2YWx1ZSwgcnVsZSk7XHJcbiAgICAgICAgICAgIGlmIChtb2RpZmllcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogZ2V0UHJpb3JpdHkocnVsZS5zdHlsZSwgcHJvcGVydHkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtaW1hZ2VcIiB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJsaXN0LXN0eWxlLWltYWdlXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdmFyIG1vZGlmaWVyID0gZ2V0QmdJbWFnZU1vZGlmaWVyKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAobW9kaWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllcixcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGdldFByaW9yaXR5KHJ1bGUuc3R5bGUsIHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5LmluY2x1ZGVzKFwic2hhZG93XCIpKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2RpZmllciA9IGdldFNoYWRvd01vZGlmaWVyKHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKG1vZGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kaWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBnZXRQcmlvcml0eShydWxlLnN0eWxlLCBwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gam9pblNlbGVjdG9ycygpIHtcclxuICAgICAgICB2YXIgc2VsZWN0b3JzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgc2VsZWN0b3JzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIsIFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVkVXNlckFnZW50U3R5bGUodGhlbWUsIGlzSUZyYW1lLCBzdHlsZVN5c3RlbUNvbnRyb2xzKSB7XHJcbiAgICAgICAgdmFyIGxpbmVzID0gW107XHJcbiAgICAgICAgaWYgKCFpc0lGcmFtZSkge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwiaHRtbCB7XCIpO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmeUJhY2tncm91bmRDb2xvcih7cjogMjU1LCBnOiAyNTUsIGI6IDI1NX0sIHRoZW1lKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNDU1NDb2xvclNjaGVtZVByb3BTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcImh0bWwge1wiKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIFwiICAgIGNvbG9yLXNjaGVtZTogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLm1vZGUgPT09IDEgPyBcImRhcmtcIiA6IFwiZGFyayBsaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiZ1NlbGVjdG9ycyA9IGpvaW5TZWxlY3RvcnMoXHJcbiAgICAgICAgICAgIGlzSUZyYW1lID8gXCJcIiA6IFwiaHRtbCwgYm9keVwiLFxyXG4gICAgICAgICAgICBzdHlsZVN5c3RlbUNvbnRyb2xzID8gXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uLCBkaWFsb2dcIiA6IFwiXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChiZ1NlbGVjdG9ycykge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwiXCIuY29uY2F0KGJnU2VsZWN0b3JzLCBcIiB7XCIpKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIFwiICAgIGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI1NSwgZzogMjU1LCBiOiAyNTV9LCB0aGVtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgXCI7XCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIFwiXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgam9pblNlbGVjdG9ycyhcclxuICAgICAgICAgICAgICAgICAgICBcImh0bWwsIGJvZHlcIixcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVN5c3RlbUNvbnRyb2xzID8gXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgXCIge1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIFwiICAgIGJvcmRlci1jb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5Qm9yZGVyQ29sb3Ioe3I6IDc2LCBnOiA3NiwgYjogNzZ9LCB0aGVtZSksXHJcbiAgICAgICAgICAgICAgICBcIjtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBcIiAgICBjb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAwLCBnOiAwLCBiOiAwfSwgdGhlbWUpLFxyXG4gICAgICAgICAgICAgICAgXCI7XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcImEge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBcIiAgICBjb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAwLCBnOiA2NCwgYjogMjU1fSwgdGhlbWUpLFxyXG4gICAgICAgICAgICAgICAgXCI7XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcInRhYmxlIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgXCIgICAgYm9yZGVyLWNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlCb3JkZXJDb2xvcih7cjogMTI4LCBnOiAxMjgsIGI6IDEyOH0sIHRoZW1lKSxcclxuICAgICAgICAgICAgICAgIFwiO1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCI6OnBsYWNlaG9sZGVyIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgXCIgICAgY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIG1vZGlmeUZvcmVncm91bmRDb2xvcih7cjogMTY5LCBnOiAxNjksIGI6IDE2OX0sIHRoZW1lKSxcclxuICAgICAgICAgICAgICAgIFwiO1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJpbnB1dDotd2Via2l0LWF1dG9maWxsLFwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwidGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbCxcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcInNlbGVjdDotd2Via2l0LWF1dG9maWxsIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAyNTAsIGc6IDI1NSwgYjogMTg5fSwgdGhlbWUpLFxyXG4gICAgICAgICAgICAgICAgXCIgIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBcIiAgICBjb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAwLCBnOiAwLCBiOiAwfSwgdGhlbWUpLFxyXG4gICAgICAgICAgICAgICAgXCIgIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBpZiAodGhlbWUuc2Nyb2xsYmFyQ29sb3IpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChnZXRNb2RpZmllZFNjcm9sbGJhclN0eWxlKHRoZW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGVtZS5zZWxlY3Rpb25Db2xvcikge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGdldE1vZGlmaWVkU2VsZWN0aW9uU3R5bGUodGhlbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTZWxlY3Rpb25Db2xvcih0aGVtZSkge1xyXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb247XHJcbiAgICAgICAgdmFyIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbjtcclxuICAgICAgICBpZiAodGhlbWUuc2VsZWN0aW9uQ29sb3IgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclNlbGVjdGlvbiA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihcclxuICAgICAgICAgICAgICAgIHtyOiAwLCBnOiA5NiwgYjogMjEyfSxcclxuICAgICAgICAgICAgICAgIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGVtZSksIHtncmF5c2NhbGU6IDB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgICAgICB7cjogMjU1LCBnOiAyNTUsIGI6IDI1NX0sXHJcbiAgICAgICAgICAgICAgICBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhlbWUpLCB7Z3JheXNjYWxlOiAwfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZSh0aGVtZS5zZWxlY3Rpb25Db2xvcik7XHJcbiAgICAgICAgICAgIHZhciBoc2wgPSByZ2JUb0hTTChyZ2IpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSB0aGVtZS5zZWxlY3Rpb25Db2xvcjtcclxuICAgICAgICAgICAgaWYgKGhzbC5sIDwgMC41KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSBcIiNGRkZcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9IFwiIzAwMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclNlbGVjdGlvbjogYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uLFxyXG4gICAgICAgICAgICBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb246IGZvcmVncm91bmRDb2xvclNlbGVjdGlvblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNb2RpZmllZFNlbGVjdGlvblN0eWxlKHRoZW1lKSB7XHJcbiAgICAgICAgdmFyIGxpbmVzID0gW107XHJcbiAgICAgICAgdmFyIG1vZGlmaWVkU2VsZWN0aW9uQ29sb3IgPSBnZXRTZWxlY3Rpb25Db2xvcih0aGVtZSk7XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmRDb2xvclNlbGVjdGlvbiA9XHJcbiAgICAgICAgICAgIG1vZGlmaWVkU2VsZWN0aW9uQ29sb3IuYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uO1xyXG4gICAgICAgIHZhciBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPVxyXG4gICAgICAgICAgICBtb2RpZmllZFNlbGVjdGlvbkNvbG9yLmZvcmVncm91bmRDb2xvclNlbGVjdGlvbjtcclxuICAgICAgICBbXCI6OnNlbGVjdGlvblwiLCBcIjo6LW1vei1zZWxlY3Rpb25cIl0uZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJcIi5jb25jYXQoc2VsZWN0aW9uLCBcIiB7XCIpKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIFwiICAgIGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgXCIgICAgY29sb3I6IFwiLmNvbmNhdChmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24sIFwiICFpbXBvcnRhbnQ7XCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TW9kaWZpZWRTY3JvbGxiYXJTdHlsZSh0aGVtZSkge1xyXG4gICAgICAgIHZhciBsaW5lcyA9IFtdO1xyXG4gICAgICAgIHZhciBjb2xvclRyYWNrO1xyXG4gICAgICAgIHZhciBjb2xvckljb25zO1xyXG4gICAgICAgIHZhciBjb2xvclRodW1iO1xyXG4gICAgICAgIHZhciBjb2xvclRodW1iSG92ZXI7XHJcbiAgICAgICAgdmFyIGNvbG9yVGh1bWJBY3RpdmU7XHJcbiAgICAgICAgdmFyIGNvbG9yQ29ybmVyO1xyXG4gICAgICAgIGlmICh0aGVtZS5zY3JvbGxiYXJDb2xvciA9PT0gXCJhdXRvXCIpIHtcclxuICAgICAgICAgICAgY29sb3JUcmFjayA9IG1vZGlmeUJhY2tncm91bmRDb2xvcih7cjogMjQxLCBnOiAyNDEsIGI6IDI0MX0sIHRoZW1lKTtcclxuICAgICAgICAgICAgY29sb3JJY29ucyA9IG1vZGlmeUZvcmVncm91bmRDb2xvcih7cjogOTYsIGc6IDk2LCBiOiA5Nn0sIHRoZW1lKTtcclxuICAgICAgICAgICAgY29sb3JUaHVtYiA9IG1vZGlmeUJhY2tncm91bmRDb2xvcih7cjogMTc2LCBnOiAxNzYsIGI6IDE3Nn0sIHRoZW1lKTtcclxuICAgICAgICAgICAgY29sb3JUaHVtYkhvdmVyID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKFxyXG4gICAgICAgICAgICAgICAge3I6IDE0NCwgZzogMTQ0LCBiOiAxNDR9LFxyXG4gICAgICAgICAgICAgICAgdGhlbWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29sb3JUaHVtYkFjdGl2ZSA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihcclxuICAgICAgICAgICAgICAgIHtyOiA5NiwgZzogOTYsIGI6IDk2fSxcclxuICAgICAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbG9yQ29ybmVyID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKFxyXG4gICAgICAgICAgICAgICAge3I6IDI1NSwgZzogMjU1LCBiOiAyNTV9LFxyXG4gICAgICAgICAgICAgICAgdGhlbWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZSh0aGVtZS5zY3JvbGxiYXJDb2xvcik7XHJcbiAgICAgICAgICAgIHZhciBoc2xfMSA9IHJnYlRvSFNMKHJnYik7XHJcbiAgICAgICAgICAgIHZhciBpc0xpZ2h0ID0gaHNsXzEubCA+IDAuNTtcclxuICAgICAgICAgICAgdmFyIGxpZ2h0ZW4gPSBmdW5jdGlvbiAobGlnaHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBoc2xfMSksIHtcclxuICAgICAgICAgICAgICAgICAgICBsOiBjbGFtcChoc2xfMS5sICsgbGlnaHRlciwgMCwgMSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgZGFya2VuID0gZnVuY3Rpb24gKGRhcmtlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBoc2xfMSksIHtcclxuICAgICAgICAgICAgICAgICAgICBsOiBjbGFtcChoc2xfMS5sIC0gZGFya2VyLCAwLCAxKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbG9yVHJhY2sgPSBoc2xUb1N0cmluZyhkYXJrZW4oMC40KSk7XHJcbiAgICAgICAgICAgIGNvbG9ySWNvbnMgPSBoc2xUb1N0cmluZyhpc0xpZ2h0ID8gZGFya2VuKDAuNCkgOiBsaWdodGVuKDAuNCkpO1xyXG4gICAgICAgICAgICBjb2xvclRodW1iID0gaHNsVG9TdHJpbmcoaHNsXzEpO1xyXG4gICAgICAgICAgICBjb2xvclRodW1iSG92ZXIgPSBoc2xUb1N0cmluZyhsaWdodGVuKDAuMSkpO1xyXG4gICAgICAgICAgICBjb2xvclRodW1iQWN0aXZlID0gaHNsVG9TdHJpbmcobGlnaHRlbigwLjIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZXMucHVzaChcIjo6LXdlYmtpdC1zY3JvbGxiYXIge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiICAgIGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChjb2xvclRyYWNrLCBcIjtcIikpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgY29sb3I6IFwiLmNvbmNhdChjb2xvckljb25zLCBcIjtcIikpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoY29sb3JUaHVtYiwgXCI7XCIpKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGNvbG9yVGh1bWJIb3ZlciwgXCI7XCIpKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiICAgIGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChjb2xvclRodW1iQWN0aXZlLCBcIjtcIikpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCI6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGNvbG9yQ29ybmVyLCBcIjtcIikpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGlmIChpc0ZpcmVmb3gpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIioge1wiKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIFwiICAgIHNjcm9sbGJhci1jb2xvcjogXCJcclxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGNvbG9yVGh1bWIsIFwiIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQoY29sb3JUcmFjaywgXCI7XCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVkRmFsbGJhY2tTdHlsZShmaWx0ZXIsIF9hKSB7XHJcbiAgICAgICAgdmFyIHN0cmljdCA9IF9hLnN0cmljdDtcclxuICAgICAgICB2YXIgbGluZXMgPSBbXTtcclxuICAgICAgICB2YXIgaXNNaWNyb3NvZnQgPSBbXCJtaWNyb3NvZnQuY29tXCIsIFwiZG9jcy5taWNyb3NvZnQuY29tXCJdLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICBsb2NhdGlvbi5ob3N0bmFtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgXCJodG1sLCBib2R5LCBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBzdHJpY3RcclxuICAgICAgICAgICAgICAgICAgICA/IFwiYm9keSA6bm90KGlmcmFtZSlcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNaWNyb3NvZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnOm5vdChkaXZbc3R5bGVePVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDotXCJdJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA6IFwiYm9keSA+IDpub3QoaWZyYW1lKVwiLFxyXG4gICAgICAgICAgICAgICAgXCIge1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIFwiICAgIGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIG1vZGlmeUJhY2tncm91bmRDb2xvcih7cjogMjU1LCBnOiAyNTUsIGI6IDI1NX0sIGZpbHRlciksXHJcbiAgICAgICAgICAgICAgICBcIiAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIFwiICAgIGJvcmRlci1jb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5Qm9yZGVyQ29sb3Ioe3I6IDY0LCBnOiA2NCwgYjogNjR9LCBmaWx0ZXIpLFxyXG4gICAgICAgICAgICAgICAgXCIgIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBcIiAgICBjb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAwLCBnOiAwLCBiOiAwfSwgZmlsdGVyKSxcclxuICAgICAgICAgICAgICAgIFwiICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICB2YXIgdW5wYXJzYWJsZUNvbG9ycyA9IG5ldyBTZXQoW1xyXG4gICAgICAgIFwiaW5oZXJpdFwiLFxyXG4gICAgICAgIFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICBcImluaXRpYWxcIixcclxuICAgICAgICBcImN1cnJlbnRjb2xvclwiLFxyXG4gICAgICAgIFwibm9uZVwiLFxyXG4gICAgICAgIFwidW5zZXRcIlxyXG4gICAgXSk7XHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvck1vZGlmaWVyKHByb3AsIHZhbHVlLCBydWxlKSB7XHJcbiAgICAgICAgaWYgKHVucGFyc2FibGVDb2xvcnMuaGFzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUodmFsdWUpO1xyXG4gICAgICAgIGlmICghcmdiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcC5pbmNsdWRlcyhcImJhY2tncm91bmRcIikpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUuc3R5bGUud2Via2l0TWFza0ltYWdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZS53ZWJraXRNYXNrSW1hZ2UgIT09IFwibm9uZVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUuc3R5bGUud2Via2l0TWFzayAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFydWxlLnN0eWxlLndlYmtpdE1hc2suc3RhcnRzV2l0aChcIm5vbmVcIikpIHx8XHJcbiAgICAgICAgICAgICAgICAocnVsZS5zdHlsZS5tYXNrICYmIHJ1bGUuc3R5bGUubWFzayAhPT0gXCJub25lXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAocnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibWFzay1pbWFnZVwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIm1hc2staW1hZ2VcIikgIT09IFwibm9uZVwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUZvcmVncm91bmRDb2xvcihyZ2IsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHJnYiwgZmlsdGVyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3AuaW5jbHVkZXMoXCJib3JkZXJcIikgfHwgcHJvcC5pbmNsdWRlcyhcIm91dGxpbmVcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnlCb3JkZXJDb2xvcihyZ2IsIGZpbHRlcik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IocmdiLCBmaWx0ZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB2YXIgaW1hZ2VEZXRhaWxzQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICB2YXIgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBzaG91bGRJZ25vcmVJbWFnZShzZWxlY3RvclRleHQsIHNlbGVjdG9ycykge1xyXG4gICAgICAgIGlmICghc2VsZWN0b3JUZXh0IHx8IHNlbGVjdG9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHNlbGVjdG9ycy5zb21lKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcyA9PT0gXCIqXCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcnVsZVNlbGVjdG9ycyA9IHNlbGVjdG9yVGV4dC5zcGxpdCgvLFxccyovZyk7XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgaWdub3JlZFNlbGVjdG9yID0gc2VsZWN0b3JzW2ldO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBydWxlU2VsZWN0b3JzLnNvbWUoZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcyA9PT0gaWdub3JlZFNlbGVjdG9yO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3ZhbHVlOiB0cnVlfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKGkpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlXzEgPT09IFwib2JqZWN0XCIpIHJldHVybiBzdGF0ZV8xLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRCZ0ltYWdlTW9kaWZpZXIoXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgcnVsZSxcclxuICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgZ3JhZGllbnRzID0gcGFyc2VHcmFkaWVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciB1cmxzID0gZ2V0TWF0Y2hlcyhjc3NVUkxSZWdleCwgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAodXJscy5sZW5ndGggPT09IDAgJiYgZ3JhZGllbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBnZXRJbmRpY2VzID0gZnVuY3Rpb24gKG1hdGNoZXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlcy5tYXAoZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlSW5kZXggPSB2YWx1ZS5pbmRleE9mKG1hdGNoLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB2YWx1ZUluZGV4ICsgbWF0Y2gubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7bWF0Y2g6IG1hdGNoLCBpbmRleDogdmFsdWVJbmRleH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIG1hdGNoZXNfMSA9IGdyYWRpZW50c1xyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbih7dHlwZTogXCJncmFkaWVudFwifSwgaSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICBnZXRJbmRpY2VzKHVybHMpLm1hcChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oe3R5cGU6IFwidXJsXCIsIG9mZnNldDogMH0sIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4ID4gYi5pbmRleCA/IDEgOiAtMTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgZ2V0R3JhZGllbnRNb2RpZmllcl8xID0gZnVuY3Rpb24gKGdyYWRpZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZUdyYWRpZW50ID0gZ3JhZGllbnQudHlwZUdyYWRpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZ3JhZGllbnQubWF0Y2gsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29tbWEgPSBncmFkaWVudC5oYXNDb21tYTtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJ0c1JlZ2V4ID1cclxuICAgICAgICAgICAgICAgICAgICAvKFteXFwoXFwpLF0rKFxcKFteXFwoXFwpXSooXFwoW15cXChcXCldKlxcKSpbXlxcKFxcKV0qKT9cXCkpPyhbXlxcKFxcKSwgXXwoICg/IWNhbGMpKSkqKSw/L2c7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sb3JTdG9wUmVnZXggPVxyXG4gICAgICAgICAgICAgICAgICAgIC9eKGZyb218Y29sb3Itc3RvcHx0bylcXCgoW15cXChcXCldKj8sXFxzKik/KC4qPylcXCkkLztcclxuICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IGdldE1hdGNoZXMocGFydHNSZWdleCwgbWF0Y2gsIDEpLm1hcChmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFydFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnQudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHBhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnlHcmFkaWVudENvbG9yKHJnYiwgZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwYWNlID0gcGFydC5sYXN0SW5kZXhPZihcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShwYXJ0LnN1YnN0cmluZygwLCBzcGFjZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChtb2RpZnlHcmFkaWVudENvbG9yKHJnYiwgZmlsdGVyKSwgXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChwYXJ0LnN1YnN0cmluZyhzcGFjZSArIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yU3RvcE1hdGNoID0gcGFydC5tYXRjaChjb2xvclN0b3BSZWdleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yU3RvcE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoY29sb3JTdG9wTWF0Y2hbM10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmdiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoY29sb3JTdG9wTWF0Y2hbMV0sIFwiKFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JTdG9wTWF0Y2hbMl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiXCIuY29uY2F0KGNvbG9yU3RvcE1hdGNoWzJdLCBcIiwgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUdyYWRpZW50Q29sb3IocmdiLCBmaWx0ZXIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHR5cGVHcmFkaWVudCwgXCIoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1vZGlmeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZ5KGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGhhc0NvbW1hID8gXCIsIFwiIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgZ2V0VVJMTW9kaWZpZXJfMSA9IGZ1bmN0aW9uICh1cmxWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3VsZElnbm9yZUltYWdlKHJ1bGUuc2VsZWN0b3JUZXh0LCBpZ25vcmVJbWFnZVNlbGVjdG9ycylcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IGdldENTU1VSTFZhbHVlKHVybFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHZhciBpc1VSTEVtcHR5ID0gdXJsLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRTdHlsZVNoZWV0ID0gcnVsZS5wYXJlbnRTdHlsZVNoZWV0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhc2VVUkwgPVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFN0eWxlU2hlZXQgJiYgcGFyZW50U3R5bGVTaGVldC5ocmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZ2V0Q1NTQmFzZUJhdGgocGFyZW50U3R5bGVTaGVldC5ocmVmKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICgoX2EgPSBwYXJlbnRTdHlsZVNoZWV0Lm93bmVyTm9kZSkgPT09IG51bGwgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYSA9PT0gdm9pZCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdm9pZCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2EuYmFzZVVSSSkgfHwgbG9jYXRpb24ub3JpZ2luO1xyXG4gICAgICAgICAgICAgICAgdXJsID0gZ2V0QWJzb2x1dGVVUkwoYmFzZVVSTCwgdXJsKTtcclxuICAgICAgICAgICAgICAgIHZhciBhYnNvbHV0ZVZhbHVlID0gJ3VybChcIicuY29uY2F0KHVybCwgJ1wiKScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VEZXRhaWxzLCBhd2FpdGVyc18xLCBlcnJfMSwgYmdJbWFnZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNVUkxFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBcInVybCgnJylcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbWFnZURldGFpbHNDYWNoZS5oYXModXJsKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyA9IGltYWdlRGV0YWlsc0NhY2hlLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA2LCAsIDddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5oYXModXJsKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0ZXJzXzEgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXRlcnNfMS5wdXNoKHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbWFnZURldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbnVsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLnNldCh1cmwsIFtdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBnZXRJbWFnZURldGFpbHModXJsKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlsc0NhY2hlLnNldCh1cmwsIGltYWdlRGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaW1hZ2VEZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5kZWxldGUodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2FuY2VsbGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbnVsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKGVycl8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmhhcyh1cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuZGVsZXRlKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhYnNvbHV0ZVZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnSW1hZ2VWYWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRCZ0ltYWdlVmFsdWVfMShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHx8IGFic29sdXRlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYmdJbWFnZVZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgZ2V0QmdJbWFnZVZhbHVlXzEgPSBmdW5jdGlvbiAoaW1hZ2VEZXRhaWxzLCBmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpc0RhcmsgPSBpbWFnZURldGFpbHMuaXNEYXJrLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTGlnaHQgPSBpbWFnZURldGFpbHMuaXNMaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBpc1RyYW5zcGFyZW50ID0gaW1hZ2VEZXRhaWxzLmlzVHJhbnNwYXJlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMYXJnZSA9IGltYWdlRGV0YWlscy5pc0xhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzVG9vTGFyZ2UgPSBpbWFnZURldGFpbHMuaXNUb29MYXJnZSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IGltYWdlRGV0YWlscy53aWR0aDtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNUb29MYXJnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICd1cmwoXCInLmNvbmNhdChpbWFnZURldGFpbHMuc3JjLCAnXCIpJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGFyayAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGlzVHJhbnNwYXJlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubW9kZSA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFpc0xhcmdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPiAyXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKFwiSW52ZXJ0aW5nIGRhcmsgaW1hZ2UgXCIuY29uY2F0KGltYWdlRGV0YWlscy5zcmMpKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW52ZXJ0ZWQgPSBnZXRGaWx0ZXJlZEltYWdlRGF0YVVSTChcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZmlsdGVyKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwaWE6IGNsYW1wKGZpbHRlci5zZXBpYSArIDEwLCAwLCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAndXJsKFwiJy5jb25jYXQoaW52ZXJ0ZWQsICdcIiknKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNMaWdodCAmJiAhaXNUcmFuc3BhcmVudCAmJiBmaWx0ZXIubW9kZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0xhcmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRpbW1pbmcgbGlnaHQgaW1hZ2UgXCIuY29uY2F0KGltYWdlRGV0YWlscy5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaW1tZWQgPSBnZXRGaWx0ZXJlZEltYWdlRGF0YVVSTChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAndXJsKFwiJy5jb25jYXQoZGltbWVkLCAnXCIpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIubW9kZSA9PT0gMCAmJiBpc0xpZ2h0ICYmICFpc0xhcmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHBseWluZyBmaWx0ZXIgdG8gaW1hZ2UgXCIuY29uY2F0KGltYWdlRGV0YWlscy5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZWQgPSBnZXRGaWx0ZXJlZEltYWdlRGF0YVVSTChcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZmlsdGVyKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJpZ2h0bmVzczogY2xhbXAoZmlsdGVyLmJyaWdodG5lc3MgLSAxMCwgNSwgMjAwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGlhOiBjbGFtcChmaWx0ZXIuc2VwaWEgKyAxMCwgMCwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gJ3VybChcIicuY29uY2F0KGZpbHRlcmVkLCAnXCIpJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgbW9kaWZpZXJzXzEgPSBbXTtcclxuICAgICAgICAgICAgdmFyIG1hdGNoSW5kZXhfMSA9IDA7XHJcbiAgICAgICAgICAgIHZhciBwcmV2SGFzQ29tbWFfMSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBtYXRjaGVzXzEuZm9yRWFjaChmdW5jdGlvbiAoX2EsIGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gX2EudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IF9hLm1hdGNoLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gX2EuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZUdyYWRpZW50ID0gX2EudHlwZUdyYWRpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbW1hID0gX2EuaGFzQ29tbWEsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gX2Eub2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoU3RhcnQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHZhciBwcmVmaXhTdGFydCA9IG1hdGNoSW5kZXhfMTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaEVuZCA9IG1hdGNoU3RhcnQgKyBtYXRjaC5sZW5ndGggKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBtYXRjaEluZGV4XzEgPSBtYXRjaEVuZDtcclxuICAgICAgICAgICAgICAgIGlmIChwcmVmaXhTdGFydCAhPT0gbWF0Y2hTdGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2SGFzQ29tbWFfMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnNfMS5wdXNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZXR3ZWVuVmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4U3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hTdGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiZXR3ZWVuVmFsdWVbMF0gPT09IFwiLFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmV0d2VlblZhbHVlID0gYmV0d2VlblZhbHVlLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXR3ZWVuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyc18xLnB1c2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyhwcmVmaXhTdGFydCwgbWF0Y2hTdGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByZXZIYXNDb21tYV8xID0gaGFzQ29tbWEgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJ1cmxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyc18xLnB1c2goZ2V0VVJMTW9kaWZpZXJfMShtYXRjaCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImdyYWRpZW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnNfMS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRHcmFkaWVudE1vZGlmaWVyXzEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IG1hdGNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUdyYWRpZW50OiB0eXBlR3JhZGllbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDb21tYTogaGFzQ29tbWEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IG9mZnNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gbWF0Y2hlc18xLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnNfMS5wdXNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyhtYXRjaEVuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSBtb2RpZmllcnNfMVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtb2RpZnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmeShmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuc29tZShmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gciBpbnN0YW5jZW9mIFByb21pc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKS50aGVuKGZ1bmN0aW9uIChhc3luY1Jlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jUmVzdWx0cy5maWx0ZXIoQm9vbGVhbikuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBjb21iaW5lZFJlc3VsdCA9IHJlc3VsdHMuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21iaW5lZFJlc3VsdC5lbmRzV2l0aChcIiwgaW5pdGlhbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlc3VsdC5zbGljZSgwLCAtOSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluZWRSZXN1bHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFNoYWRvd01vZGlmaWVyV2l0aEluZm8odmFsdWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXhfMSA9IDA7XHJcbiAgICAgICAgICAgIHZhciBjb2xvck1hdGNoZXNfMSA9IGdldE1hdGNoZXMoXHJcbiAgICAgICAgICAgICAgICAvKF58XFxzKSg/IWNhbGMpKFthLXpdK1xcKC4rP1xcKXwjWzAtOWEtZl0rfFthLXpdKykoLio/KGluc2V0fG91dHNldCk/KCR8LCkpL2dpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciBub3RQYXJzZWRfMSA9IDA7XHJcbiAgICAgICAgICAgIHZhciBtb2RpZmllcnNfMiA9IGNvbG9yTWF0Y2hlc18xLm1hcChmdW5jdGlvbiAobWF0Y2gsIGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcmVmaXhJbmRleCA9IGluZGV4XzE7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hJbmRleCA9IHZhbHVlLmluZGV4T2YobWF0Y2gsIGluZGV4XzEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoRW5kID0gbWF0Y2hJbmRleCArIG1hdGNoLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGluZGV4XzEgPSBtYXRjaEVuZDtcclxuICAgICAgICAgICAgICAgIHZhciByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmdiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90UGFyc2VkXzErKztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHByZWZpeEluZGV4LCBtYXRjaEVuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCh2YWx1ZS5zdWJzdHJpbmcocHJlZml4SW5kZXgsIG1hdGNoSW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KG1vZGlmeVNoYWRvd0NvbG9yKHJnYiwgZmlsdGVyKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPT09IGNvbG9yTWF0Y2hlc18xLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHZhbHVlLnN1YnN0cmluZyhtYXRjaEVuZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkID0gbW9kaWZpZXJzXzJcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtb2RpZnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmeShmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXNMZW5ndGg6IGNvbG9yTWF0Y2hlc18xLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB1bnBhcnNlYWJsZU1hdGNoZXNMZW5ndGg6IG5vdFBhcnNlZF8xLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogbW9kaWZpZWRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFNoYWRvd01vZGlmaWVyKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHNoYWRvd01vZGlmaWVyID0gZ2V0U2hhZG93TW9kaWZpZXJXaXRoSW5mbyh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKCFzaGFkb3dNb2RpZmllcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGVtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2hhZG93TW9kaWZpZXIodGhlbWUpLnJlc3VsdDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VmFyaWFibGVNb2RpZmllcihcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICBwcm9wLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIHJ1bGUsXHJcbiAgICAgICAgaWdub3JlZEltZ1NlbGVjdG9ycyxcclxuICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlc1N0b3JlLmdldE1vZGlmaWVyRm9yVmFyaWFibGUoe1xyXG4gICAgICAgICAgICB2YXJOYW1lOiBwcm9wLFxyXG4gICAgICAgICAgICBzb3VyY2VWYWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgIHJ1bGU6IHJ1bGUsXHJcbiAgICAgICAgICAgIGlnbm9yZWRJbWdTZWxlY3RvcnM6IGlnbm9yZWRJbWdTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgIGlzQ2FuY2VsbGVkOiBpc0NhbmNlbGxlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VmFyaWFibGVEZXBlbmRhbnRNb2RpZmllcih2YXJpYWJsZXNTdG9yZSwgcHJvcCwgdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFyaWFibGVzU3RvcmUuZ2V0TW9kaWZpZXJGb3JWYXJEZXBlbmRhbnQocHJvcCwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYW5Nb2RpZmljYXRpb25DYWNoZSgpIHtcclxuICAgICAgICBjbGVhckNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUoKTtcclxuICAgICAgICBpbWFnZURldGFpbHNDYWNoZS5jbGVhcigpO1xyXG4gICAgICAgIGNsZWFuSW1hZ2VQcm9jZXNzaW5nQ2FjaGUoKTtcclxuICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBWQVJfVFlQRV9CR0NPTE9SID0gMSA8PCAwO1xyXG4gICAgdmFyIFZBUl9UWVBFX1RFWFRDT0xPUiA9IDEgPDwgMTtcclxuICAgIHZhciBWQVJfVFlQRV9CT1JERVJDT0xPUiA9IDEgPDwgMjtcclxuICAgIHZhciBWQVJfVFlQRV9CR0lNRyA9IDEgPDwgMztcclxuICAgIHZhciBWYXJpYWJsZXNTdG9yZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gVmFyaWFibGVzU3RvcmUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFyVHlwZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMucnVsZXNRdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmluZWRWYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnZhclJlZnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVuZGVmaW5lZFZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhclR5cGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdGhpcy51bnN0YWJsZVZhclZhbHVlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhclR5cGVzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucnVsZXNRdWV1ZS5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lZFZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy52YXJSZWZzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy51bmRlZmluZWRWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhclR5cGVzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy51bnN0YWJsZVZhclZhbHVlcy5jbGVhcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmlzVmFyVHlwZSA9IGZ1bmN0aW9uICh2YXJOYW1lLCB0eXBlTnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhclR5cGVzLmhhcyh2YXJOYW1lKSAmJlxyXG4gICAgICAgICAgICAgICAgKHRoaXMudmFyVHlwZXMuZ2V0KHZhck5hbWUpICYgdHlwZU51bSkgPiAwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuYWRkUnVsZXNGb3JNYXRjaGluZyA9IGZ1bmN0aW9uIChydWxlcykge1xyXG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUucHVzaChydWxlcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRhbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYXJUeXBlcyA9IG5ldyBNYXAodGhpcy52YXJUeXBlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFJvb3RWYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0VmFyaWFibGVzQW5kVmFyRGVwKHRoaXMucnVsZXNRdWV1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucnVsZXNRdWV1ZS5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFJvb3RWYXJEZXBlbmRhbnRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFyUmVmcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWZzLCB2KSB7XHJcbiAgICAgICAgICAgICAgICByZWZzLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMudmFyVHlwZXMuaGFzKHYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUociwgX3RoaXMudmFyVHlwZXMuZ2V0KHYpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMudW5rbm93bkJnVmFycy5oYXModikpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy51bmtub3duQ29sb3JWYXJzLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy51bmtub3duQmdWYXJzLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pc1ZhclR5cGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JHQ09MT1IgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfVEVYVENPTE9SIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JPUkRFUkNPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5rbm93bkNvbG9yVmFycy5kZWxldGUodik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVuZGVmaW5lZFZhcnMuYWRkKHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoYXNDb2xvciA9XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmluZFZhclJlZih2LCBmdW5jdGlvbiAocmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51bmtub3duQ29sb3JWYXJzLmhhcyhyZWYpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pc1ZhclR5cGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX1RFWFRDT0xPUiB8IFZBUl9UWVBFX0JPUkRFUkNPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgIT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLml0YXJhdGVWYXJSZWZzKHYsIGZ1bmN0aW9uIChyZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZShyZWYsIFZBUl9UWVBFX0JHQ09MT1IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pc1ZhclR5cGUodiwgVkFSX1RZUEVfQkdDT0xPUiB8IFZBUl9UWVBFX0JHSU1HKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5rbm93bkJnVmFycy5kZWxldGUodik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVuZGVmaW5lZFZhcnMuYWRkKHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuZm9yRWFjaChmdW5jdGlvbiAodmFyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQodmFyTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuZ2V0TW9kaWZpZXJGb3JWYXJpYWJsZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodGhlbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YXJOYW1lID0gb3B0aW9ucy52YXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlID0gb3B0aW9ucy5zb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBydWxlID0gb3B0aW9ucy5ydWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbWdTZWxlY3RvcnMgPSBvcHRpb25zLmlnbm9yZWRJbWdTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNDYW5jZWxsZWQgPSBvcHRpb25zLmlzQ2FuY2VsbGVkO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdldERlY2xhcmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVjbGFyYXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZE1vZGlmaWVkVmFsdWUgPSBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVOdW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhck5hbWVXcmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvck1vZGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuaXNWYXJUeXBlKHZhck5hbWUsIHR5cGVOdW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gdmFyTmFtZVdyYXBwZXIodmFyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQoc291cmNlVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb25zdHJ1Y3RlZENvbG9yVmFyKHNvdXJjZVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGluc2VydFZhclZhbHVlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVuc3RhYmxlVmFyVmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVOdW0gPT09IFZBUl9UWVBFX0JHQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiMwMDAwMDBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IGNvbG9yTW9kaWZpZXIodmFsdWUsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFyTmFtZVdyYXBwZXIodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yTW9kaWZpZXIoZmFsbGJhY2ssIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID0gY29sb3JNb2RpZmllcihzb3VyY2VWYWx1ZSwgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllZFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTW9kaWZpZWRWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQkdDT0xPUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeU1vZGlmeUJnQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE1vZGlmaWVkVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX1RFWFRDT0xPUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcFRleHRDb2xvclZhcmlhYmxlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5TW9kaWZ5VGV4dENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRNb2RpZmllZFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CT1JERVJDT0xPUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlCb3JkZXJDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzVmFyVHlwZSh2YXJOYW1lLCBWQVJfVFlQRV9CR0lNRykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gd3JhcEJnSW1nVmFyaWFibGVOYW1lKHZhck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWRWYWx1ZSA9IHNvdXJjZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQoc291cmNlVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID0gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ5TW9kaWZ5QmdDb2xvcihmYWxsYmFjaywgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJnTW9kaWZpZXIgPSBnZXRCZ0ltYWdlTW9kaWZpZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbWdTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBiZ01vZGlmaWVyID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJnTW9kaWZpZXIodGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBiZ01vZGlmaWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kaWZpZWRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZExpc3RlbmVyID0gZnVuY3Rpb24gKG9uVHlwZUNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlY3MgPSBnZXREZWNsYXJhdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25UeXBlQ2hhbmdlKGRlY3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlRm9yVmFyVHlwZUNoYW5nZSh2YXJOYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5zdWJzY3JpYmVGcm9tVmFyaWFibGVUeXBlQ2hhbmdlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBnZXREZWNsYXJhdGlvbnMoKSxcclxuICAgICAgICAgICAgICAgICAgICBvblR5cGVDaGFuZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXI6IGFkZExpc3RlbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcnM6IHJlbW92ZUxpc3RlbmVyc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuZ2V0TW9kaWZpZXJGb3JWYXJEZXBlbmRhbnQgPSBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoc291cmNlVmFsdWUubWF0Y2goL15cXHMqKHJnYnxoc2wpYT9cXCgvKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzQmdfMSA9IHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJiYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzVGV4dF8xID0gaXNUZXh0Q29sb3JQcm9wZXJ0eShwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5zZXJ0VmFyVmFsdWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5zdGFibGVWYXJWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpc0JnXzEgPyBcIiNmZmZmZmZcIiA6IFwiIzAwMDAwMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZXIgPSBpc0JnXzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnlNb2RpZnlCZ0NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXNUZXh0XzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnlNb2RpZnlUZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnlNb2RpZnlCb3JkZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZpZXIodmFsdWUsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtY29sb3JcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGVtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnlNb2RpZnlCZ0NvbG9yKGZhbGxiYWNrLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNUZXh0Q29sb3JQcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodGhlbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnlNb2RpZnlUZXh0Q29sb3IoZmFsbGJhY2ssIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmRcIiB8fFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1pbWFnZVwiIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJib3gtc2hhZG93XCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVua25vd25WYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YXJpYWJsZVJlcGxhY2VkID0gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1ZhclR5cGUodiwgVkFSX1RZUEVfQkdDT0xPUikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNWYXJUeXBlKHYsIFZBUl9UWVBFX0JHSU1HKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcEJnSW1nVmFyaWFibGVOYW1lKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmtub3duVmFycy5hZGQodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyeU1vZGlmeUJnQ29sb3IoZmFsbGJhY2ssIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcImJveC1zaGFkb3dcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd01vZGlmaWVyID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTaGFkb3dNb2RpZmllcldpdGhJbmZvKHZhcmlhYmxlUmVwbGFjZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkU2hhZG93ID0gc2hhZG93TW9kaWZpZXIodGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU2hhZG93LnVucGFyc2VhYmxlTWF0Y2hlc0xlbmd0aCAhPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFNoYWRvdy5tYXRjaGVzTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZpZWRTaGFkb3cucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZVJlcGxhY2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkID0gbW9kaWZ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVua25vd25WYXJzLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpcnN0VW5rbm93blZhciA9IHVua25vd25WYXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51bnN1YnNjcmliZUZyb21WYXJpYWJsZVR5cGVDaGFuZ2VzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFVua25vd25WYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBtb2RpZnkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmVGb3JWYXJUeXBlQ2hhbmdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VW5rbm93blZhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZmllZDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuc3RhcnRzV2l0aChcImJvcmRlclwiKSB8fFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuc3RhcnRzV2l0aChcIm91dGxpbmVcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnlNb2RpZnlCb3JkZXJDb2xvcihmYWxsYmFjaywgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuc3Vic2NyaWJlRm9yVmFyVHlwZUNoYW5nZSA9IGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgdmFyTmFtZSxcclxuICAgICAgICAgICAgY2FsbGJhY2tcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5zZXQodmFyTmFtZSwgbmV3IFNldCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcm9vdFN0b3JlID0gdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5nZXQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghcm9vdFN0b3JlLmhhcyhjYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgICAgIHJvb3RTdG9yZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUudW5zdWJzY3JpYmVGcm9tVmFyaWFibGVUeXBlQ2hhbmdlcyA9IGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgdmFyTmFtZSxcclxuICAgICAgICAgICAgY2FsbGJhY2tcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmdldCh2YXJOYW1lKS5kZWxldGUoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuY29sbGVjdFZhcmlhYmxlc0FuZFZhckRlcCA9IGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgcnVsZUxpc3RcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcnVsZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAocnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhcmlhYmxlKHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbnNwZWN0VmFyaWFibGUocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbnNwZWN0VmFyRGVwZW5kYW50KHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmNvbGxlY3RSb290VmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhcmlhYmxlKHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbnNwZWN0VmFyaWFibGUocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuaW5zcGVjdFZhcmlhYmxlID0gZnVuY3Rpb24gKHZhck5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zdGFibGVWYXJWYWx1ZXMuc2V0KHZhck5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhbHVlKSAmJiBpc0NvbnN0cnVjdGVkQ29sb3JWYXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZpbmVkVmFycy5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmaW5lZFZhcnMuaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kZWZpbmVkVmFycy5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIHZhciBjb2xvciA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5pbmNsdWRlcyhcInVybChcIikgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlLmluY2x1ZGVzKFwibGluZWFyLWdyYWRpZW50KFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgdmFsdWUuaW5jbHVkZXMoXCJyYWRpYWwtZ3JhZGllbnQoXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHZhck5hbWUsIFZBUl9UWVBFX0JHSU1HKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLnJlc29sdmVWYXJpYWJsZVR5cGUgPSBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgIHZhck5hbWUsXHJcbiAgICAgICAgICAgIHR5cGVOdW1cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdmFyIGluaXRpYWxUeXBlID0gdGhpcy5pbml0aWFsVmFyVHlwZXMuZ2V0KHZhck5hbWUpIHx8IDA7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50VHlwZSA9IHRoaXMudmFyVHlwZXMuZ2V0KHZhck5hbWUpIHx8IDA7XHJcbiAgICAgICAgICAgIHZhciBuZXdUeXBlID0gY3VycmVudFR5cGUgfCB0eXBlTnVtO1xyXG4gICAgICAgICAgICB0aGlzLnZhclR5cGVzLnNldCh2YXJOYW1lLCBuZXdUeXBlKTtcclxuICAgICAgICAgICAgaWYgKG5ld1R5cGUgIT09IGluaXRpYWxUeXBlIHx8IHRoaXMudW5kZWZpbmVkVmFycy5oYXModmFyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmFkZCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5kZWZpbmVkVmFycy5kZWxldGUodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmRlbGV0ZSh2YXJOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmRlbGV0ZSh2YXJOYW1lKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5jb2xsZWN0Um9vdFZhckRlcGVuZGFudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbnNwZWN0VmFyRGVwZW5kYW50KHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmluc3BlY3RWYXJEZXBlbmRhbnQgPSBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoaXNWYXJpYWJsZShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsIGZ1bmN0aW9uIChyZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLnZhclJlZnMuaGFzKHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy52YXJSZWZzLnNldChwcm9wZXJ0eSwgbmV3IFNldCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudmFyUmVmcy5nZXQocHJvcGVydHkpLmFkZChyZWYpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWNvbG9yXCIgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJveC1zaGFkb3dcIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodiwgVkFSX1RZUEVfQkdDT0xPUik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1RleHRDb2xvclByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyRGVwcyh2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2LCBWQVJfVFlQRV9URVhUQ09MT1IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiYm9yZGVyXCIpIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5zdGFydHNXaXRoKFwib3V0bGluZVwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodiwgVkFSX1RZUEVfQk9SREVSQ09MT1IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kXCIgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtaW1hZ2VcIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzVmFyVHlwZSh2LCBWQVJfVFlQRV9CR0NPTE9SIHwgVkFSX1RZUEVfQkdJTUcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQmdDb2xvciA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmZpbmRWYXJSZWYodiwgZnVuY3Rpb24gKHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51bmtub3duQ29sb3JWYXJzLmhhcyhyZWYpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNWYXJUeXBlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX1RFWFRDT0xPUiB8IFZBUl9UWVBFX0JPUkRFUkNPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgIT0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pdGFyYXRlVmFyUmVmcyh2LCBmdW5jdGlvbiAocmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0JnQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUocmVmLCBWQVJfVFlQRV9CR0NPTE9SKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVua25vd25CZ1ZhcnMuYWRkKHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuaXRlcmF0ZVZhckRlcHMgPSBmdW5jdGlvbiAodmFsdWUsIGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIHZhciB2YXJEZXBzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBpdGVyYXRlVmFyRGVwZW5kZW5jaWVzKHZhbHVlLCBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhckRlcHMuYWRkKHYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyRGVwcy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlcmF0b3Iodik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmZpbmRWYXJSZWYgPSBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgIHZhck5hbWUsXHJcbiAgICAgICAgICAgIGl0ZXJhdG9yLFxyXG4gICAgICAgICAgICBzdGFja1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICAgICAgaWYgKHN0YWNrID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgICAgIHN0YWNrID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGFjay5oYXModmFyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YWNrLmFkZCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yKHZhck5hbWUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFyTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVmcyA9IHRoaXMudmFyUmVmcy5nZXQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghcmVmcyB8fCByZWZzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWZzXzEgPSBfX3ZhbHVlcyhyZWZzKSwgcmVmc18xXzEgPSByZWZzXzEubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICFyZWZzXzFfMS5kb25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZnNfMV8xID0gcmVmc18xLm5leHQoKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZiA9IHJlZnNfMV8xLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IHRoaXMuZmluZFZhclJlZihyZWYsIGl0ZXJhdG9yLCBzdGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVfMV8xKSB7XHJcbiAgICAgICAgICAgICAgICBlXzEgPSB7ZXJyb3I6IGVfMV8xfTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZnNfMV8xICYmICFyZWZzXzFfMS5kb25lICYmIChfYSA9IHJlZnNfMS5yZXR1cm4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5jYWxsKHJlZnNfMSk7XHJcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5pdGFyYXRlVmFyUmVmcyA9IGZ1bmN0aW9uICh2YXJOYW1lLCBpdGVyYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmRWYXJSZWYodmFyTmFtZSwgZnVuY3Rpb24gKHJlZikge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0b3IocmVmKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuc2V0T25Sb290VmFyaWFibGVDaGFuZ2UgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5vblJvb3RWYXJpYWJsZURlZmluZWQgPSBjYWxsYmFjaztcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5wdXRSb290VmFycyA9IGZ1bmN0aW9uIChzdHlsZUVsZW1lbnQsIHRoZW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBlXzIsIF9hO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgc2hlZXQgPSBzdHlsZUVsZW1lbnQuc2hlZXQ7XHJcbiAgICAgICAgICAgIGlmIChzaGVldC5jc3NSdWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzaGVldC5kZWxldGVSdWxlKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBkZWNsYXJhdGlvbnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyaWFibGUocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1ZhclR5cGUocHJvcGVydHksIFZBUl9UWVBFX0JHQ09MT1IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuc2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlCZ0NvbG9yKHZhbHVlLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzVmFyVHlwZShwcm9wZXJ0eSwgVkFSX1RZUEVfVEVYVENPTE9SKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lKHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlUZXh0Q29sb3IodmFsdWUsIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNWYXJUeXBlKHByb3BlcnR5LCBWQVJfVFlQRV9CT1JERVJDT0xPUikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5zZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lKHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlCb3JkZXJDb2xvcih2YWx1ZSwgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZUZvclZhclR5cGVDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9uUm9vdFZhcmlhYmxlRGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIGNzc0xpbmVzID0gW107XHJcbiAgICAgICAgICAgIGNzc0xpbmVzLnB1c2goXCI6cm9vdCB7XCIpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVjbGFyYXRpb25zXzEgPSBfX3ZhbHVlcyhkZWNsYXJhdGlvbnMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnNfMV8xID0gZGVjbGFyYXRpb25zXzEubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICFkZWNsYXJhdGlvbnNfMV8xLmRvbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zXzFfMSA9IGRlY2xhcmF0aW9uc18xLm5leHQoKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKGRlY2xhcmF0aW9uc18xXzEudmFsdWUsIDIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IF9iWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IF9iWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNzc0xpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICAgIFwiLmNvbmNhdChwcm9wZXJ0eSwgXCI6IFwiKS5jb25jYXQodmFsdWUsIFwiO1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVfMl8xKSB7XHJcbiAgICAgICAgICAgICAgICBlXzIgPSB7ZXJyb3I6IGVfMl8xfTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnNfMV8xICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFkZWNsYXJhdGlvbnNfMV8xLmRvbmUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gZGVjbGFyYXRpb25zXzEucmV0dXJuKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EuY2FsbChkZWNsYXJhdGlvbnNfMSk7XHJcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjc3NMaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBjc3NMaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgICAgICBzaGVldC5pbnNlcnRSdWxlKGNzc1RleHQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIFZhcmlhYmxlc1N0b3JlO1xyXG4gICAgfSkoKTtcclxuICAgIHZhciB2YXJpYWJsZXNTdG9yZSA9IG5ldyBWYXJpYWJsZXNTdG9yZSgpO1xyXG4gICAgZnVuY3Rpb24gZ2V0VmFyaWFibGVSYW5nZShpbnB1dCwgc2VhcmNoU3RhcnQpIHtcclxuICAgICAgICBpZiAoc2VhcmNoU3RhcnQgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBzZWFyY2hTdGFydCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdGFydCA9IGlucHV0LmluZGV4T2YoXCJ2YXIoXCIsIHNlYXJjaFN0YXJ0KTtcclxuICAgICAgICBpZiAoc3RhcnQgPj0gMCkge1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBnZXRQYXJlbnRoZXNlc1JhbmdlKGlucHV0LCBzdGFydCArIDMpO1xyXG4gICAgICAgICAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7c3RhcnQ6IHN0YXJ0LCBlbmQ6IHJhbmdlLmVuZH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VmFyaWFibGVzTWF0Y2hlcyhpbnB1dCkge1xyXG4gICAgICAgIHZhciByYW5nZXMgPSBbXTtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgdmFyIHJhbmdlO1xyXG4gICAgICAgIHdoaWxlICgocmFuZ2UgPSBnZXRWYXJpYWJsZVJhbmdlKGlucHV0LCBpKSkpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gcmFuZ2Uuc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBlbmQgPSByYW5nZS5lbmQ7XHJcbiAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgICAgICAgICAgIGVuZDogZW5kLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGlucHV0LnN1YnN0cmluZyhzdGFydCwgZW5kKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaSA9IHJhbmdlLmVuZCArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByYW5nZXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlVmFyaWFibGVzTWF0Y2hlcyhpbnB1dCwgcmVwbGFjZXIpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IGdldFZhcmlhYmxlc01hdGNoZXMoaW5wdXQpO1xyXG4gICAgICAgIHZhciBtYXRjaGVzQ291bnQgPSBtYXRjaGVzLmxlbmd0aDtcclxuICAgICAgICBpZiAobWF0Y2hlc0NvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgIHZhciByZXBsYWNlbWVudHMgPSBtYXRjaGVzLm1hcChmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZXIobS52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHBhcnRzID0gW107XHJcbiAgICAgICAgcGFydHMucHVzaChpbnB1dC5zdWJzdHJpbmcoMCwgbWF0Y2hlc1swXS5zdGFydCkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hlc0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgcGFydHMucHVzaChyZXBsYWNlbWVudHNbaV0pO1xyXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBtYXRjaGVzW2ldLmVuZDtcclxuICAgICAgICAgICAgdmFyIGVuZCA9IGkgPCBtYXRjaGVzQ291bnQgLSAxID8gbWF0Y2hlc1tpICsgMV0uc3RhcnQgOiBpbnB1dExlbmd0aDtcclxuICAgICAgICAgICAgcGFydHMucHVzaChpbnB1dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFydHMuam9pbihcIlwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlTmFtZUFuZEZhbGxiYWNrKG1hdGNoKSB7XHJcbiAgICAgICAgdmFyIGNvbW1hSW5kZXggPSBtYXRjaC5pbmRleE9mKFwiLFwiKTtcclxuICAgICAgICB2YXIgbmFtZTtcclxuICAgICAgICB2YXIgZmFsbGJhY2s7XHJcbiAgICAgICAgaWYgKGNvbW1hSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBuYW1lID0gbWF0Y2guc3Vic3RyaW5nKDQsIGNvbW1hSW5kZXgpLnRyaW0oKTtcclxuICAgICAgICAgICAgZmFsbGJhY2sgPSBtYXRjaC5zdWJzdHJpbmcoY29tbWFJbmRleCArIDEsIG1hdGNoLmxlbmd0aCAtIDEpLnRyaW0oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYW1lID0gbWF0Y2guc3Vic3RyaW5nKDQsIG1hdGNoLmxlbmd0aCAtIDEpLnRyaW0oKTtcclxuICAgICAgICAgICAgZmFsbGJhY2sgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge25hbWU6IG5hbWUsIGZhbGxiYWNrOiBmYWxsYmFja307XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXModmFsdWUsIG5hbWVSZXBsYWNlciwgZmFsbGJhY2tSZXBsYWNlcikge1xyXG4gICAgICAgIHZhciBtYXRjaFJlcGxhY2VyID0gZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IGdldFZhcmlhYmxlTmFtZUFuZEZhbGxiYWNrKG1hdGNoKSxcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBfYS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZmFsbGJhY2sgPSBfYS5mYWxsYmFjaztcclxuICAgICAgICAgICAgdmFyIG5ld05hbWUgPSBuYW1lUmVwbGFjZXIobmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInZhcihcIi5jb25jYXQobmV3TmFtZSwgXCIpXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBuZXdGYWxsYmFjaztcclxuICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KGZhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3RmFsbGJhY2sgPSByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVJlcGxhY2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrUmVwbGFjZXJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmFsbGJhY2tSZXBsYWNlcikge1xyXG4gICAgICAgICAgICAgICAgbmV3RmFsbGJhY2sgPSBmYWxsYmFja1JlcGxhY2VyKGZhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZhbGxiYWNrID0gZmFsbGJhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwidmFyKFwiLmNvbmNhdChuZXdOYW1lLCBcIiwgXCIpLmNvbmNhdChuZXdGYWxsYmFjaywgXCIpXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VWYXJpYWJsZXNNYXRjaGVzKHZhbHVlLCBtYXRjaFJlcGxhY2VyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVWYXJEZXBlbmRlbmNpZXModmFsdWUsIGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKHZhbHVlLCBmdW5jdGlvbiAodmFyTmFtZSkge1xyXG4gICAgICAgICAgICBpdGVyYXRvcih2YXJOYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhck5hbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiLS1kYXJrcmVhZGVyLWJnXCIuY29uY2F0KG5hbWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JhcFRleHRDb2xvclZhcmlhYmxlTmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiLS1kYXJrcmVhZGVyLXRleHRcIi5jb25jYXQobmFtZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3cmFwQm9yZGVyQ29sb3JWYXJpYWJsZU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBcIi0tZGFya3JlYWRlci1ib3JkZXJcIi5jb25jYXQobmFtZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3cmFwQmdJbWdWYXJpYWJsZU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBcIi0tZGFya3JlYWRlci1iZ2ltZ1wiLmNvbmNhdChuYW1lKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzVmFyaWFibGUocHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gcHJvcGVydHkuc3RhcnRzV2l0aChcIi0tXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNWYXJEZXBlbmRhbnQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUuaW5jbHVkZXMoXCJ2YXIoXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNDb25zdHJ1Y3RlZENvbG9yVmFyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hdGNoKC9eXFxzKihyZ2J8aHNsKWE/XFwoLyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1RleHRDb2xvclByb3BlcnR5KHByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiY29sb3JcIiB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJjYXJldC1jb2xvclwiIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcIi13ZWJraXQtdGV4dC1maWxsLWNvbG9yXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdmFyIHJhd1ZhbHVlUmVnZXggPSAvXlxcZHsxLDN9LCA/XFxkezEsM30sID9cXGR7MSwzfSQvO1xyXG4gICAgZnVuY3Rpb24gcGFyc2VSYXdWYWx1ZShjb2xvcikge1xyXG4gICAgICAgIGlmIChyYXdWYWx1ZVJlZ2V4LnRlc3QoY29sb3IpKSB7XHJcbiAgICAgICAgICAgIHZhciBzcGxpdHRlZCA9IGNvbG9yLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdEluUkdCXzEgPSBcInJnYihcIjtcclxuICAgICAgICAgICAgc3BsaXR0ZWQuZm9yRWFjaChmdW5jdGlvbiAobnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRJblJHQl8xICs9IFwiXCIuY29uY2F0KG51bWJlci50cmltKCksIFwiLCBcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXN1bHRJblJHQl8xID0gcmVzdWx0SW5SR0JfMS5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0SW5SR0JfMS5sZW5ndGggLSAyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJlc3VsdEluUkdCXzEgKz0gXCIpXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB7aXNSYXc6IHRydWUsIGNvbG9yOiByZXN1bHRJblJHQl8xfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtpc1JhdzogZmFsc2UsIGNvbG9yOiBjb2xvcn07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSYXdWYWx1ZShjb2xvciwgdGhlbWUsIG1vZGlmeUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdmFyIF9hID0gcGFyc2VSYXdWYWx1ZShjb2xvciksXHJcbiAgICAgICAgICAgIGlzUmF3ID0gX2EuaXNSYXcsXHJcbiAgICAgICAgICAgIG5ld0NvbG9yID0gX2EuY29sb3I7XHJcbiAgICAgICAgdmFyIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUobmV3Q29sb3IpO1xyXG4gICAgICAgIGlmIChyZ2IpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dENvbG9yID0gbW9kaWZ5RnVuY3Rpb24ocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgICAgIGlmIChpc1Jhdykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dEluUkdCID0gcGFyc2VDb2xvcldpdGhDYWNoZShvdXRwdXRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0SW5SR0JcclxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KG91dHB1dEluUkdCLnIsIFwiLCBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KG91dHB1dEluUkdCLmcsIFwiLCBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KG91dHB1dEluUkdCLmIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBvdXRwdXRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0Q29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdDb2xvcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyeU1vZGlmeUJnQ29sb3IoY29sb3IsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJhd1ZhbHVlKGNvbG9yLCB0aGVtZSwgbW9kaWZ5QmFja2dyb3VuZENvbG9yKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyeU1vZGlmeVRleHRDb2xvcihjb2xvciwgdGhlbWUpIHtcclxuICAgICAgICByZXR1cm4gaGFuZGxlUmF3VmFsdWUoY29sb3IsIHRoZW1lLCBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJ5TW9kaWZ5Qm9yZGVyQ29sb3IoY29sb3IsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJhd1ZhbHVlKGNvbG9yLCB0aGVtZSwgbW9kaWZ5Qm9yZGVyQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaW5zZXJ0VmFyVmFsdWVzKHNvdXJjZSwgdmFyVmFsdWVzLCBzdGFjaykge1xyXG4gICAgICAgIGlmIChzdGFjayA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIHN0YWNrID0gbmV3IFNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29udGFpbnNVbnJlc29sdmVkVmFyID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG1hdGNoUmVwbGFjZXIgPSBmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gZ2V0VmFyaWFibGVOYW1lQW5kRmFsbGJhY2sobWF0Y2gpLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IF9hLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBmYWxsYmFjayA9IF9hLmZhbGxiYWNrO1xyXG4gICAgICAgICAgICBpZiAoc3RhY2suaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluc1VucmVzb2x2ZWRWYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhY2suYWRkKG5hbWUpO1xyXG4gICAgICAgICAgICB2YXIgdmFyVmFsdWUgPSB2YXJWYWx1ZXMuZ2V0KG5hbWUpIHx8IGZhbGxiYWNrO1xyXG4gICAgICAgICAgICB2YXIgaW5zZXJ0ZWQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodmFyVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudCh2YXJWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGluc2VydFZhclZhbHVlcyh2YXJWYWx1ZSwgdmFyVmFsdWVzLCBzdGFjayk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gdmFyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpbnNlcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbnNVbnJlc29sdmVkVmFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbnNlcnRlZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciByZXBsYWNlZCA9IHJlcGxhY2VWYXJpYWJsZXNNYXRjaGVzKHNvdXJjZSwgbWF0Y2hSZXBsYWNlcik7XHJcbiAgICAgICAgaWYgKGNvbnRhaW5zVW5yZXNvbHZlZFZhcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBvdmVycmlkZXMgPSB7XHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJnY29sb3JcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYmdjb2xvclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYmdpbWFnZVwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJhY2tncm91bmQtaW1hZ2VcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1iZ2ltYWdlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlclwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJvcmRlci1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvcmRlci1ib3R0b20tY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLWJvdHRvbVwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJvcmRlci1ib3R0b20tY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItYm90dG9tXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLWxlZnQtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLWxlZnRcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJib3JkZXItbGVmdC1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1sZWZ0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLXJpZ2h0LWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1yaWdodFwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJvcmRlci1yaWdodC1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1yaWdodFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvcmRlci10b3AtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXRvcFwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJvcmRlci10b3AtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItdG9wXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm94LXNoYWRvd1wiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3hzaGFkb3dcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJib3gtc2hhZG93XCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm94c2hhZG93XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtY29sb3JcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJjb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWNvbG9yXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZmlsbFwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1maWxsXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiZmlsbFwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWZpbGxcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdHJva2VcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwic3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtc3Ryb2tlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwib3V0bGluZS1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1vdXRsaW5lXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwib3V0bGluZS1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLW91dGxpbmVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdG9wLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLXN0b3Bjb2xvclwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcInN0b3AtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1zdG9wY29sb3JcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgb3ZlcnJpZGVzTGlzdCA9IE9iamVjdC52YWx1ZXMob3ZlcnJpZGVzKTtcclxuICAgIHZhciBub3JtYWxpemVkUHJvcExpc3QgPSB7fTtcclxuICAgIG92ZXJyaWRlc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgY3NzUHJvcCA9IF9hLmNzc1Byb3AsXHJcbiAgICAgICAgICAgIGN1c3RvbVByb3AgPSBfYS5jdXN0b21Qcm9wO1xyXG4gICAgICAgIHJldHVybiAobm9ybWFsaXplZFByb3BMaXN0W2N1c3RvbVByb3BdID0gY3NzUHJvcCk7XHJcbiAgICB9KTtcclxuICAgIHZhciBJTkxJTkVfU1RZTEVfQVRUUlMgPSBbXHJcbiAgICAgICAgXCJzdHlsZVwiLFxyXG4gICAgICAgIFwiZmlsbFwiLFxyXG4gICAgICAgIFwic3RvcC1jb2xvclwiLFxyXG4gICAgICAgIFwic3Ryb2tlXCIsXHJcbiAgICAgICAgXCJiZ2NvbG9yXCIsXHJcbiAgICAgICAgXCJjb2xvclwiXHJcbiAgICBdO1xyXG4gICAgdmFyIElOTElORV9TVFlMRV9TRUxFQ1RPUiA9IElOTElORV9TVFlMRV9BVFRSUy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gXCJbXCIuY29uY2F0KGF0dHIsIFwiXVwiKTtcclxuICAgIH0pLmpvaW4oXCIsIFwiKTtcclxuICAgIGZ1bmN0aW9uIGdldElubGluZU92ZXJyaWRlU3R5bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG92ZXJyaWRlc0xpc3RcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhQXR0ciA9IF9hLmRhdGFBdHRyLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbVByb3AgPSBfYS5jdXN0b21Qcm9wLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc1Byb3AgPSBfYS5jc3NQcm9wO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICBcIltcIi5jb25jYXQoZGF0YUF0dHIsIFwiXSB7XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGNzc1Byb3AsIFwiOiB2YXIoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoY3VzdG9tUHJvcCwgXCIpICFpbXBvcnRhbnQ7XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwifVwiXHJcbiAgICAgICAgICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0SW5saW5lU3R5bGVFbGVtZW50cyhyb290KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcclxuICAgICAgICBpZiAocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgcm9vdC5tYXRjaGVzKElOTElORV9TVFlMRV9TRUxFQ1RPUikpIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJvb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50IHx8XHJcbiAgICAgICAgICAgIChpc1NoYWRvd0RvbVN1cHBvcnRlZCAmJiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCkgfHxcclxuICAgICAgICAgICAgcm9vdCBpbnN0YW5jZW9mIERvY3VtZW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHB1c2gocmVzdWx0cywgcm9vdC5xdWVyeVNlbGVjdG9yQWxsKElOTElORV9TVFlMRV9TRUxFQ1RPUikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuICAgIHZhciB0cmVlT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgdmFyIGF0dHJPYnNlcnZlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvcklubGluZVN0eWxlcyhlbGVtZW50U3R5bGVEaWRDaGFuZ2UsIHNoYWRvd1Jvb3REaXNjb3ZlcmVkKSB7XHJcbiAgICAgICAgZGVlcFdhdGNoRm9ySW5saW5lU3R5bGVzKFxyXG4gICAgICAgICAgICBkb2N1bWVudCxcclxuICAgICAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlLFxyXG4gICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZnVuY3Rpb24gKGhvc3QpIHtcclxuICAgICAgICAgICAgZGVlcFdhdGNoRm9ySW5saW5lU3R5bGVzKFxyXG4gICAgICAgICAgICAgICAgaG9zdC5zaGFkb3dSb290LFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlZXBXYXRjaEZvcklubGluZVN0eWxlcyhcclxuICAgICAgICByb290LFxyXG4gICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZSxcclxuICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKHRyZWVPYnNlcnZlcnMuaGFzKHJvb3QpKSB7XHJcbiAgICAgICAgICAgIHRyZWVPYnNlcnZlcnMuZ2V0KHJvb3QpLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgYXR0ck9ic2VydmVycy5nZXQocm9vdCkuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGlzY292ZXJlZE5vZGVzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgICAgICBmdW5jdGlvbiBkaXNjb3Zlck5vZGVzKG5vZGUpIHtcclxuICAgICAgICAgICAgZ2V0SW5saW5lU3R5bGVFbGVtZW50cyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc2NvdmVyZWROb2Rlcy5oYXMoZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGlzY292ZXJlZE5vZGVzLmFkZChlbCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UoZWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKG5vZGUsIGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzY292ZXJlZE5vZGVzLmhhcyhub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc2NvdmVyZWROb2Rlcy5hZGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZChuLnNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICAgICAgZGVlcFdhdGNoRm9ySW5saW5lU3R5bGVzKFxyXG4gICAgICAgICAgICAgICAgICAgIG4uc2hhZG93Um9vdCxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdHJlZU9ic2VydmVyID0gY3JlYXRlT3B0aW1pemVkVHJlZU9ic2VydmVyKHJvb3QsIHtcclxuICAgICAgICAgICAgb25NaW5vck11dGF0aW9uczogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkaXRpb25zID0gX2EuYWRkaXRpb25zO1xyXG4gICAgICAgICAgICAgICAgYWRkaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGFkZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc2NvdmVyTm9kZXMoYWRkZWQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uSHVnZU11dGF0aW9uczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZGlzY292ZXJOb2Rlcyhyb290KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRyZWVPYnNlcnZlcnMuc2V0KHJvb3QsIHRyZWVPYnNlcnZlcik7XHJcbiAgICAgICAgdmFyIGF0dGVtcHRDb3VudCA9IDA7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gbnVsbDtcclxuICAgICAgICB2YXIgQVRURU1QVFNfSU5URVJWQUwgPSBnZXREdXJhdGlvbih7c2Vjb25kczogMTB9KTtcclxuICAgICAgICB2YXIgUkVUUllfVElNRU9VVCA9IGdldER1cmF0aW9uKHtzZWNvbmRzOiAyfSk7XHJcbiAgICAgICAgdmFyIE1BWF9BVFRFTVBUU19DT1VOVCA9IDUwO1xyXG4gICAgICAgIHZhciBjYWNoZSA9IFtdO1xyXG4gICAgICAgIHZhciB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgIHZhciBoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMgPSB0aHJvdHRsZShmdW5jdGlvbiAobXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoSU5MSU5FX1NUWUxFX0FUVFJTLmluY2x1ZGVzKG0uYXR0cmlidXRlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UobS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgYXR0ck9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAodGltZW91dElkKSB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZS5wdXNoLmFwcGx5KFxyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgICAgIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChtdXRhdGlvbnMpLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXR0ZW1wdENvdW50Kys7XHJcbiAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3c7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ZW1wdENvdW50ID49IE1BWF9BVFRFTVBUU19DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdyAtIHN0YXJ0IDwgQVRURU1QVFNfSU5URVJWQUwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0Q291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlQ2FjaGUgPSBjYWNoZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXR0cmlidXRlTXV0YXRpb25zKGF0dHJpYnV0ZUNhY2hlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBSRVRSWV9USU1FT1VUKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5wdXNoLmFwcGx5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKG11dGF0aW9ucyksIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3c7XHJcbiAgICAgICAgICAgICAgICBhdHRlbXB0Q291bnQgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyhtdXRhdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF0dHJPYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBJTkxJTkVfU1RZTEVfQVRUUlMuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzTGlzdC5tYXAoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFBdHRyID0gX2EuZGF0YUF0dHI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFBdHRyO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF0dHJPYnNlcnZlcnMuc2V0KHJvb3QsIGF0dHJPYnNlcnZlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JJbmxpbmVTdHlsZXMoKSB7XHJcbiAgICAgICAgdHJlZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhdHRyT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRyZWVPYnNlcnZlcnMuY2xlYXIoKTtcclxuICAgICAgICBhdHRyT2JzZXJ2ZXJzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5saW5lU3R5bGVDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICB2YXIgZmlsdGVyUHJvcHMgPSBbXCJicmlnaHRuZXNzXCIsIFwiY29udHJhc3RcIiwgXCJncmF5c2NhbGVcIiwgXCJzZXBpYVwiLCBcIm1vZGVcIl07XHJcbiAgICBmdW5jdGlvbiBnZXRJbmxpbmVTdHlsZUNhY2hlS2V5KGVsLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBJTkxJTkVfU1RZTEVfQVRUUlMubWFwKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChhdHRyLCAnPVwiJykuY29uY2F0KGVsLmdldEF0dHJpYnV0ZShhdHRyKSwgJ1wiJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIGZpbHRlclByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwcm9wLCAnPVwiJykuY29uY2F0KHRoZW1lW3Byb3BdLCAnXCInKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvdWxkSWdub3JlSW5saW5lU3R5bGUoZWxlbWVudCwgc2VsZWN0b3JzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGVjdG9ycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaW5nbm9yZWRTZWxlY3RvciA9IHNlbGVjdG9yc1tpXTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhpbmdub3JlZFNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb3ZlcnJpZGVJbmxpbmVTdHlsZShcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIHRoZW1lLFxyXG4gICAgICAgIGlnbm9yZUlubGluZVNlbGVjdG9ycyxcclxuICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9yc1xyXG4gICAgKSB7XHJcbiAgICAgICAgdmFyIGNhY2hlS2V5ID0gZ2V0SW5saW5lU3R5bGVDYWNoZUtleShlbGVtZW50LCB0aGVtZSk7XHJcbiAgICAgICAgaWYgKGNhY2hlS2V5ID09PSBpbmxpbmVTdHlsZUNhY2hlLmdldChlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1bnNldFByb3BzID0gbmV3IFNldChPYmplY3Qua2V5cyhvdmVycmlkZXMpKTtcclxuICAgICAgICBmdW5jdGlvbiBzZXRDdXN0b21Qcm9wKHRhcmdldENTU1Byb3AsIG1vZGlmaWVyQ1NTUHJvcCwgY3NzVmFsKSB7XHJcbiAgICAgICAgICAgIHZhciBpc1Byb3BlcnR5VmFyaWFibGUgPSB0YXJnZXRDU1NQcm9wLnN0YXJ0c1dpdGgoXCItLVwiKTtcclxuICAgICAgICAgICAgdmFyIF9hID0gaXNQcm9wZXJ0eVZhcmlhYmxlID8ge30gOiBvdmVycmlkZXNbdGFyZ2V0Q1NTUHJvcF0sXHJcbiAgICAgICAgICAgICAgICBjdXN0b21Qcm9wID0gX2EuY3VzdG9tUHJvcCxcclxuICAgICAgICAgICAgICAgIGRhdGFBdHRyID0gX2EuZGF0YUF0dHI7XHJcbiAgICAgICAgICAgIHZhciBtb2QgPSBnZXRNb2RpZmlhYmxlQ1NTRGVjbGFyYXRpb24oXHJcbiAgICAgICAgICAgICAgICBtb2RpZmllckNTU1Byb3AsXHJcbiAgICAgICAgICAgICAgICBjc3NWYWwsXHJcbiAgICAgICAgICAgICAgICB7c3R5bGU6IGVsZW1lbnQuc3R5bGV9LFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKCFtb2QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBtb2QudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSh0aGVtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzUHJvcGVydHlWYXJpYWJsZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0eXBlZFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0eXBlZFZhbHVlLmRlY2xhcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IF9hLnByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IF9hLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICEodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY3VzdG9tUHJvcCwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShkYXRhQXR0cikpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShkYXRhQXR0ciwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1bnNldFByb3BzLmRlbGV0ZSh0YXJnZXRDU1NQcm9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaWdub3JlSW5saW5lU2VsZWN0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHNob3VsZElnbm9yZUlubGluZVN0eWxlKGVsZW1lbnQsIGlnbm9yZUlubGluZVNlbGVjdG9ycykpIHtcclxuICAgICAgICAgICAgICAgIHVuc2V0UHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoY3NzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG92ZXJyaWRlc1tjc3NQcm9wXS5kYXRhQXR0cik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJiZ2NvbG9yXCIpKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYmdjb2xvclwiKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUubWF0Y2goL15bMC05YS1mXXszfSQvaSkgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eWzAtOWEtZl17Nn0kL2kpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcIiNcIi5jb25jYXQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmFja2dyb3VuZC1jb2xvclwiLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImNvbG9yXCIpICYmIGVsZW1lbnQucmVsICE9PSBcIm1hc2staWNvblwiKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY29sb3JcIik7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eWzAtOWEtZl17M30kL2kpIHx8XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezZ9JC9pKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gXCIjXCIuY29uY2F0KHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFwiY29sb3JcIiwgXCJjb2xvclwiLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJmaWxsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgU01BTExfU1ZHX0xJTUlUXzEgPSAzMjtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZV8xID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJmaWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlXzEgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIFNWR1RleHRFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlU1ZHRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBfYS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNCZyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPiBTTUFMTF9TVkdfTElNSVRfMSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA+IFNNQUxMX1NWR19MSU1JVF8xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JnID8gXCJiYWNrZ3JvdW5kLWNvbG9yXCIgOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVfMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmVhZHlTdGF0ZUNvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNWR0VsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVyKGhhbmRsZVNWR0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcImZpbGxcIiwgXCJjb2xvclwiLCB2YWx1ZV8xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwic3RvcC1jb2xvclwiKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcclxuICAgICAgICAgICAgICAgICAgICBcInN0b3AtY29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZShcInN0b3AtY29sb3JcIilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwic3Ryb2tlXCIpKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3Ryb2tlXCIpO1xyXG4gICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFxyXG4gICAgICAgICAgICAgICAgXCJzdHJva2VcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdMaW5lRWxlbWVudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJjb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZSAmJlxyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKGVsZW1lbnQuc3R5bGUsIGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCIgJiYgdmFsdWUuaW5jbHVkZXMoXCJ1cmxcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChwcm9wZXJ0eS5zdGFydHNXaXRoKFwiLS1cIikgJiYgIW5vcm1hbGl6ZWRQcm9wTGlzdFtwcm9wZXJ0eV0pXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21Qcm9wKHByb3BlcnR5LCBwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3ZlcnJpZGVuUHJvcCA9IG5vcm1hbGl6ZWRQcm9wTGlzdFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZW5Qcm9wICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUob3ZlcnJpZGVuUHJvcCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWVsZW1lbnQuaGFzQXR0cmlidXRlKG92ZXJyaWRlblByb3ApXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlblByb3AgPT09IFwiYmFja2dyb3VuZC1jb2xvclwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImJnY29sb3JcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUgJiZcclxuICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIFNWR1RleHRFbGVtZW50ICYmXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZmlsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFxyXG4gICAgICAgICAgICAgICAgXCJmaWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmaWxsXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvckVhY2godW5zZXRQcm9wcywgZnVuY3Rpb24gKGNzc1Byb3ApIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVzW2Nzc1Byb3BdLmRhdGFBdHRyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbmxpbmVTdHlsZUNhY2hlLnNldChlbGVtZW50LCBnZXRJbmxpbmVTdHlsZUNhY2hlS2V5KGVsZW1lbnQsIHRoZW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1ldGFUaGVtZUNvbG9yTmFtZSA9IFwidGhlbWUtY29sb3JcIjtcclxuICAgIHZhciBtZXRhVGhlbWVDb2xvclNlbGVjdG9yID0gJ21ldGFbbmFtZT1cIicuY29uY2F0KG1ldGFUaGVtZUNvbG9yTmFtZSwgJ1wiXScpO1xyXG4gICAgdmFyIHNyY01ldGFUaGVtZUNvbG9yID0gbnVsbDtcclxuICAgIHZhciBvYnNlcnZlciA9IG51bGw7XHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VNZXRhVGhlbWVDb2xvcihtZXRhLCB0aGVtZSkge1xyXG4gICAgICAgIHNyY01ldGFUaGVtZUNvbG9yID0gc3JjTWV0YVRoZW1lQ29sb3IgfHwgbWV0YS5jb250ZW50O1xyXG4gICAgICAgIHZhciBjb2xvciA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoc3JjTWV0YVRoZW1lQ29sb3IpO1xyXG4gICAgICAgIGlmICghY29sb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRhLmNvbnRlbnQgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoY29sb3IsIHRoZW1lKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoYW5nZU1ldGFUaGVtZUNvbG9yV2hlbkF2YWlsYWJsZSh0aGVtZSkge1xyXG4gICAgICAgIHZhciBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZXRhVGhlbWVDb2xvclNlbGVjdG9yKTtcclxuICAgICAgICBpZiAobWV0YSkge1xyXG4gICAgICAgICAgICBjaGFuZ2VNZXRhVGhlbWVDb2xvcihtZXRhLCB0aGVtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBsb29wOiBmb3IgKHZhciBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGRlZE5vZGVzID0gbXV0YXRpb25zW2ldLmFkZGVkTm9kZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhZGRlZE5vZGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gYWRkZWROb2Rlc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBpbnN0YW5jZW9mIEhUTUxNZXRhRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5uYW1lID09PSBtZXRhVGhlbWVDb2xvck5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNZXRhVGhlbWVDb2xvcihub2RlLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBsb29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5oZWFkLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzdG9yZU1ldGFUaGVtZUNvbG9yKCkge1xyXG4gICAgICAgIGlmIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1ldGFUaGVtZUNvbG9yU2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChtZXRhICYmIHNyY01ldGFUaGVtZUNvbG9yKSB7XHJcbiAgICAgICAgICAgIG1ldGEuY29udGVudCA9IHNyY01ldGFUaGVtZUNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGhlbWVDYWNoZUtleXMgPSBbXHJcbiAgICAgICAgXCJtb2RlXCIsXHJcbiAgICAgICAgXCJicmlnaHRuZXNzXCIsXHJcbiAgICAgICAgXCJjb250cmFzdFwiLFxyXG4gICAgICAgIFwiZ3JheXNjYWxlXCIsXHJcbiAgICAgICAgXCJzZXBpYVwiLFxyXG4gICAgICAgIFwiZGFya1NjaGVtZUJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIFwiZGFya1NjaGVtZVRleHRDb2xvclwiLFxyXG4gICAgICAgIFwibGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBcImxpZ2h0U2NoZW1lVGV4dENvbG9yXCJcclxuICAgIF07XHJcbiAgICBmdW5jdGlvbiBnZXRUaGVtZUtleSh0aGVtZSkge1xyXG4gICAgICAgIHZhciByZXN1bHRLZXkgPSBcIlwiO1xyXG4gICAgICAgIHRoZW1lQ2FjaGVLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXN1bHRLZXkgKz0gXCJcIi5jb25jYXQoa2V5LCBcIjpcIikuY29uY2F0KHRoZW1lW2tleV0sIFwiO1wiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0S2V5O1xyXG4gICAgfVxyXG4gICAgdmFyIGFzeW5jUXVldWUgPSBjcmVhdGVBc3luY1Rhc2tzUXVldWUoKTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXRNb2RpZmllcigpIHtcclxuICAgICAgICB2YXIgcmVuZGVySWQgPSAwO1xyXG4gICAgICAgIHZhciBydWxlc1RleHRDYWNoZSA9IG5ldyBTZXQoKTtcclxuICAgICAgICB2YXIgcnVsZXNNb2RDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgICAgICB2YXIgdmFyVHlwZUNoYW5nZUNsZWFuZXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHZhciBwcmV2RmlsdGVyS2V5ID0gbnVsbDtcclxuICAgICAgICB2YXIgaGFzTm9uTG9hZGVkTGluayA9IGZhbHNlO1xyXG4gICAgICAgIHZhciB3YXNSZWJ1aWx0ID0gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gc2hvdWxkUmVidWlsZFN0eWxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaGFzTm9uTG9hZGVkTGluayAmJiAhd2FzUmVidWlsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbW9kaWZ5U2hlZXQob3B0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgcnVsZXMgPSBvcHRpb25zLnNvdXJjZUNTU1J1bGVzO1xyXG4gICAgICAgICAgICB2YXIgdGhlbWUgPSBvcHRpb25zLnRoZW1lLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpcyA9IG9wdGlvbnMuaWdub3JlSW1hZ2VBbmFseXNpcyxcclxuICAgICAgICAgICAgICAgIGZvcmNlID0gb3B0aW9ucy5mb3JjZSxcclxuICAgICAgICAgICAgICAgIHByZXBhcmVTaGVldCA9IG9wdGlvbnMucHJlcGFyZVNoZWV0LFxyXG4gICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZCA9IG9wdGlvbnMuaXNBc3luY0NhbmNlbGxlZDtcclxuICAgICAgICAgICAgdmFyIHJ1bGVzQ2hhbmdlZCA9IHJ1bGVzTW9kQ2FjaGUuc2l6ZSA9PT0gMDtcclxuICAgICAgICAgICAgdmFyIG5vdEZvdW5kQ2FjaGVLZXlzID0gbmV3IFNldChydWxlc01vZENhY2hlLmtleXMoKSk7XHJcbiAgICAgICAgICAgIHZhciB0aGVtZUtleSA9IGdldFRoZW1lS2V5KHRoZW1lKTtcclxuICAgICAgICAgICAgdmFyIHRoZW1lQ2hhbmdlZCA9IHRoZW1lS2V5ICE9PSBwcmV2RmlsdGVyS2V5O1xyXG4gICAgICAgICAgICBpZiAoaGFzTm9uTG9hZGVkTGluaykge1xyXG4gICAgICAgICAgICAgICAgd2FzUmVidWlsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG1vZFJ1bGVzID0gW107XHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhcclxuICAgICAgICAgICAgICAgIHJ1bGVzLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJ1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3NzVGV4dCA9IHJ1bGUuY3NzVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dERpZmZlcnNGcm9tUHJldiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kQ2FjaGVLZXlzLmRlbGV0ZShjc3NUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5wYXJlbnRSdWxlIGluc3RhbmNlb2YgQ1NTTWVkaWFSdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgKz0gXCI7XCIuY29uY2F0KHJ1bGUucGFyZW50UnVsZS5tZWRpYS5tZWRpYVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJ1bGVzVGV4dENhY2hlLmhhcyhjc3NUZXh0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlc1RleHRDYWNoZS5hZGQoY3NzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaWZmZXJzRnJvbVByZXYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dERpZmZlcnNGcm9tUHJldikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZFJ1bGVzLnB1c2gocnVsZXNNb2RDYWNoZS5nZXQoY3NzVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2REZWNzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gZ2V0TW9kaWZpYWJsZUNTU0RlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZUFuYWx5c2lzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZERlY3MucHVzaChtb2QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kUnVsZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZERlY3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50UnVsZSA9IHJ1bGUucGFyZW50UnVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kUnVsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBydWxlLnNlbGVjdG9yVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogbW9kRGVjcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFJ1bGU6IHBhcmVudFJ1bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kUnVsZXMucHVzaChtb2RSdWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXNNb2RDYWNoZS5zZXQoY3NzVGV4dCwgbW9kUnVsZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc05vbkxvYWRlZExpbmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBub3RGb3VuZENhY2hlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJ1bGVzVGV4dENhY2hlLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgcnVsZXNNb2RDYWNoZS5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHByZXZGaWx0ZXJLZXkgPSB0aGVtZUtleTtcclxuICAgICAgICAgICAgaWYgKCFmb3JjZSAmJiAhcnVsZXNDaGFuZ2VkICYmICF0aGVtZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZW5kZXJJZCsrO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRSdWxlKHRhcmdldCwgaW5kZXgsIHJ1bGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IHJ1bGUuc2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gcnVsZS5kZWNsYXJhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2V0RGVjbGFyYXRpb25UZXh0ID0gZnVuY3Rpb24gKGRlYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IGRlYy5wcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBkZWMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCA9IGRlYy5pbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlID0gZGVjLnNvdXJjZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQocHJvcGVydHksIFwiOiBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCh2YWx1ZSA9PSBudWxsID8gc291cmNlVmFsdWUgOiB2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChpbXBvcnRhbnQgPyBcIiAhaW1wb3J0YW50XCIgOiBcIlwiLCBcIjtcIik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIGNzc1J1bGVzVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZGVjbGFyYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzUnVsZXNUZXh0ICs9IFwiXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREZWNsYXJhdGlvblRleHQoZGVjbGFyYXRpb25zKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnVsZVRleHQgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChzZWxlY3RvciwgXCIgeyBcIilcclxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGNzc1J1bGVzVGV4dCwgXCIgfVwiKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5pbnNlcnRSdWxlKHJ1bGVUZXh0LCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGFzeW5jRGVjbGFyYXRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB2YXIgdmFyRGVjbGFyYXRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB2YXIgYXN5bmNEZWNsYXJhdGlvbkNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICB2YXIgdmFyRGVjbGFyYXRpb25Db3VudGVyID0gMDtcclxuICAgICAgICAgICAgdmFyIHJvb3RSZWFkeUdyb3VwID0ge3J1bGU6IG51bGwsIHJ1bGVzOiBbXSwgaXNHcm91cDogdHJ1ZX07XHJcbiAgICAgICAgICAgIHZhciBncm91cFJlZnMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRHcm91cChydWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3RSZWFkeUdyb3VwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwUmVmcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBSZWZzLmdldChydWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBncm91cCA9IHtydWxlOiBydWxlLCBydWxlczogW10sIGlzR3JvdXA6IHRydWV9O1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBSZWZzLnNldChydWxlLCBncm91cCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50R3JvdXAgPSBnZXRHcm91cChydWxlLnBhcmVudFJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50R3JvdXAucnVsZXMucHVzaChncm91cCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyVHlwZUNoYW5nZUNsZWFuZXJzLmZvckVhY2goZnVuY3Rpb24gKGNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xlYXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhclR5cGVDaGFuZ2VDbGVhbmVycy5jbGVhcigpO1xyXG4gICAgICAgICAgICBtb2RSdWxlc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IF9hLnNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBfYS5kZWNsYXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFJ1bGUgPSBfYS5wYXJlbnRSdWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBncm91cCA9IGdldEdyb3VwKHBhcmVudFJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFkeVN0eWxlUnVsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyb3VwOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWR5RGVjbGFyYXRpb25zID0gcmVhZHlTdHlsZVJ1bGUuZGVjbGFyYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLnJ1bGVzLnB1c2gocmVhZHlTdHlsZVJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUFzeW5jRGVjbGFyYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXN5bmNLZXkgPSArK2FzeW5jRGVjbGFyYXRpb25Db3VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXN5bmNEZWNsYXJhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY0tleTogYXN5bmNLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTogc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaChhc3luY0RlY2xhcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRSZW5kZXJJZCA9IHJlbmRlcklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZC50aGVuKGZ1bmN0aW9uIChhc3luY1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWFzeW5jVmFsdWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVuZGVySWQgIT09IHJlbmRlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY0RlY2xhcmF0aW9uLnZhbHVlID0gYXN5bmNWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jUXVldWUuYWRkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVuZGVySWQgIT09IHJlbmRlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVidWlsZEFzeW5jUnVsZShhc3luY0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVZhckRlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyRGVjcyA9IF9hLmRlY2xhcmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVHlwZUNoYW5nZSA9IF9hLm9uVHlwZUNoYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhcktleSA9ICsrdmFyRGVjbGFyYXRpb25Db3VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFJlbmRlcklkID0gcmVuZGVySWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbml0aWFsSW5kZXggPSByZWFkeURlY2xhcmF0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGREZWNzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YXJEZWNzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBEZWMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTogc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyS2V5OiB2YXJLZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5wdXNoKHRlbXBEZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjcyA9IFt0ZW1wRGVjXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJEZWNzLmZvckVhY2goZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZC52YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBc3luY0RlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2QucHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkeURlYyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IG1vZC5wcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOiBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyS2V5OiB2YXJLZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2gocmVhZHlEZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZERlY3MucHVzaChyZWFkeURlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblR5cGVDaGFuZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKG5ld0RlY3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVuZGVySWQgIT09IHJlbmRlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZHlWYXJEZWNzID0gbmV3RGVjcy5tYXAoZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBtb2QucHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2QudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTogc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcktleTogdmFyS2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcmVhZHlEZWNsYXJhdGlvbnMuaW5kZXhPZihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREZWNzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnNwbGljZS5hcHBseShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NwcmVhZEFycmF5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXgsIG9sZERlY3MubGVuZ3RoXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19yZWFkKHJlYWR5VmFyRGVjcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZERlY3MgPSByZWFkeVZhckRlY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWJ1aWxkVmFyUnVsZSh2YXJLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyVHlwZUNoYW5nZUNsZWFuZXJzLmFkZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25UeXBlQ2hhbmdlLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IF9hLnByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBfYS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCA9IF9hLmltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlID0gX2Euc291cmNlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkID0gdmFsdWUodGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUFzeW5jRGVjbGFyYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5LnN0YXJ0c1dpdGgoXCItLVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVZhckRlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOiBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgc2hlZXQgPSBwcmVwYXJlU2hlZXQoKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gYnVpbGRTdHlsZVNoZWV0KCkge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVGFyZ2V0KGdyb3VwLCBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcnVsZSA9IGdyb3VwLnJ1bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUgaW5zdGFuY2VvZiBDU1NNZWRpYVJ1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lZGlhID0gcnVsZS5tZWRpYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyZW50LmNzc1J1bGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydFJ1bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkBtZWRpYSBcIi5jb25jYXQobWVkaWEubWVkaWFUZXh0LCBcIiB7fVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaXRlcmF0ZVJlYWR5UnVsZXMoZ3JvdXAsIHRhcmdldCwgc3R5bGVJdGVyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLnJ1bGVzLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBjcmVhdGVUYXJnZXQociwgdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVSZWFkeVJ1bGVzKHIsIHQsIHN0eWxlSXRlcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVJdGVyYXRvcihyLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlUmVhZHlSdWxlcyhcclxuICAgICAgICAgICAgICAgICAgICByb290UmVhZHlHcm91cCxcclxuICAgICAgICAgICAgICAgICAgICBzaGVldCxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocnVsZSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRhcmdldC5jc3NSdWxlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXN5bmNLZXkgPSBfYS5hc3luY0tleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJLZXkgPSBfYS52YXJLZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXN5bmNLZXkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jRGVjbGFyYXRpb25zLnNldChhc3luY0tleSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlOiBydWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyS2V5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJEZWNsYXJhdGlvbnMuc2V0KHZhcktleSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlOiBydWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSdWxlKHRhcmdldCwgaW5kZXgsIHJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVidWlsZEFzeW5jUnVsZShrZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSA9IGFzeW5jRGVjbGFyYXRpb25zLmdldChrZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUgPSBfYS5ydWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IF9hLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IF9hLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgc2V0UnVsZSh0YXJnZXQsIGluZGV4LCBydWxlKTtcclxuICAgICAgICAgICAgICAgIGFzeW5jRGVjbGFyYXRpb25zLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlYnVpbGRWYXJSdWxlKGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gdmFyRGVjbGFyYXRpb25zLmdldChrZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUgPSBfYS5ydWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IF9hLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IF9hLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgc2V0UnVsZSh0YXJnZXQsIGluZGV4LCBydWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWlsZFN0eWxlU2hlZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbW9kaWZ5U2hlZXQ6IG1vZGlmeVNoZWV0LFxyXG4gICAgICAgICAgICBzaG91bGRSZWJ1aWxkU3R5bGU6IHNob3VsZFJlYnVpbGRTdHlsZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIFNUWUxFX1NFTEVDVE9SID0gJ3N0eWxlLCBsaW5rW3JlbCo9XCJzdHlsZXNoZWV0XCIgaV06bm90KFtkaXNhYmxlZF0pJztcclxuICAgIGZ1bmN0aW9uIGlzRm9udHNHb29nbGVBcGlTdHlsZShlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50LmhyZWYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudFVSTCA9IG5ldyBVUkwoZWxlbWVudC5ocmVmKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRVUkwuaG9zdG5hbWUgPT09IFwiZm9udHMuZ29vZ2xlYXBpcy5jb21cIjtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgbG9nSW5mbyhcIkNvdWxkbid0IGNvbnN0cnVjdCBcIi5jb25jYXQoZWxlbWVudC5ocmVmLCBcIiBhcyBVUkxcIikpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvdWxkTWFuYWdlU3R5bGUoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCB8fFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIFNWR1N0eWxlRWxlbWVudCB8fFxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJzdHlsZXNoZWV0XCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5ocmVmICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWVsZW1lbnQuZGlzYWJsZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAoaXNGaXJlZm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gIWVsZW1lbnQuaHJlZi5zdGFydHNXaXRoKFwibW96LWV4dGVuc2lvbjovL1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRydWUpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWlzRm9udHNHb29nbGVBcGlTdHlsZShlbGVtZW50KSkpICYmXHJcbiAgICAgICAgICAgICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtyZWFkZXJcIikgJiZcclxuICAgICAgICAgICAgZWxlbWVudC5tZWRpYS50b0xvd2VyQ2FzZSgpICE9PSBcInByaW50XCIgJiZcclxuICAgICAgICAgICAgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3R5bHVzXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1hbmFnZWFibGVTdHlsZXMobm9kZSwgcmVzdWx0cywgZGVlcCkge1xyXG4gICAgICAgIGlmIChyZXN1bHRzID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGVlcCA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGRlZXAgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvdWxkTWFuYWdlU3R5bGUobm9kZSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKG5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50IHx8XHJcbiAgICAgICAgICAgIChpc1NoYWRvd0RvbVN1cHBvcnRlZCAmJiBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdCkgfHxcclxuICAgICAgICAgICAgbm9kZSA9PT0gZG9jdW1lbnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZm9yRWFjaChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoU1RZTEVfU0VMRUNUT1IpLCBmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRNYW5hZ2VhYmxlU3R5bGVzKHN0eWxlLCByZXN1bHRzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKG5vZGUsIGZ1bmN0aW9uIChob3N0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldE1hbmFnZWFibGVTdHlsZXMoaG9zdC5zaGFkb3dSb290LCByZXN1bHRzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuICAgIHZhciBzeW5jU3R5bGVTZXQgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgdmFyIGNvcnNTdHlsZVNldCA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICB2YXIgY2FuT3B0aW1pemVVc2luZ1Byb3h5JDEgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkXCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYW5PcHRpbWl6ZVVzaW5nUHJveHkkMSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIHZhciBsb2FkaW5nTGlua0NvdW50ZXIgPSAwO1xyXG4gICAgdmFyIHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGNsZWFuTG9hZGluZ0xpbmtzKCkge1xyXG4gICAgICAgIHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWFuYWdlU3R5bGUoZWxlbWVudCwgX2EpIHtcclxuICAgICAgICB2YXIgdXBkYXRlID0gX2EudXBkYXRlLFxyXG4gICAgICAgICAgICBsb2FkaW5nU3RhcnQgPSBfYS5sb2FkaW5nU3RhcnQsXHJcbiAgICAgICAgICAgIGxvYWRpbmdFbmQgPSBfYS5sb2FkaW5nRW5kO1xyXG4gICAgICAgIHZhciBwcmV2U3R5bGVzID0gW107XHJcbiAgICAgICAgdmFyIG5leHQgPSBlbGVtZW50O1xyXG4gICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICAgKG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZykgJiZcclxuICAgICAgICAgICAgbmV4dC5tYXRjaGVzKFwiLmRhcmtyZWFkZXJcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcHJldlN0eWxlcy5wdXNoKG5leHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29yc0NvcHkgPVxyXG4gICAgICAgICAgICBwcmV2U3R5bGVzLmZpbmQoZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwubWF0Y2hlcyhcIi5kYXJrcmVhZGVyLS1jb3JzXCIpICYmICFjb3JzU3R5bGVTZXQuaGFzKGVsKTtcclxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcclxuICAgICAgICB2YXIgc3luY1N0eWxlID1cclxuICAgICAgICAgICAgcHJldlN0eWxlcy5maW5kKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLm1hdGNoZXMoXCIuZGFya3JlYWRlci0tc3luY1wiKSAmJiAhc3luY1N0eWxlU2V0LmhhcyhlbCk7XHJcbiAgICAgICAgICAgIH0pIHx8IG51bGw7XHJcbiAgICAgICAgdmFyIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyID0gbnVsbDtcclxuICAgICAgICB2YXIgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyID0gbnVsbDtcclxuICAgICAgICB2YXIgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGlzT3ZlcnJpZGVFbXB0eSA9IHRydWU7XHJcbiAgICAgICAgdmFyIHNoZWV0TW9kaWZpZXIgPSBjcmVhdGVTdHlsZVNoZWV0TW9kaWZpZXIoKTtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBvYnNlcnZlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZnVuY3Rpb24gY29udGFpbnNDU1NJbXBvcnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkubWF0Y2goY3NzSW1wb3J0UmVnZXgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGhhc0ltcG9ydHMoY3NzUnVsZXMsIGNoZWNrQ3Jvc3NPcmlnaW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBydWxlID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgY3NzUnVsZXNMb29wOiBmb3IgKFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gMCwgbGVuID0gY3NzUnVsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPCBsZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBydWxlID0gY3NzUnVsZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUuaHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tDcm9zc09yaWdpbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaHJlZi5zdGFydHNXaXRoKFwiaHR0cFwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFydWxlLmhyZWYuc3RhcnRzV2l0aChsb2NhdGlvbi5vcmlnaW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGNzc1J1bGVzTG9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBjc3NSdWxlc0xvb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXNTeW5jKCkge1xyXG4gICAgICAgICAgICBpZiAoY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3JzQ29weS5zaGVldC5jc3NSdWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29udGFpbnNDU1NJbXBvcnQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNzc1J1bGVzID0gc2FmZUdldFNoZWV0UnVsZXMoKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgIWlzUmVsYXRpdmVIcmVmT25BYnNvbHV0ZVBhdGgoZWxlbWVudC5ocmVmKSAmJlxyXG4gICAgICAgICAgICAgICAgaGFzSW1wb3J0cyhjc3NSdWxlcywgZmFsc2UpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhhc0ltcG9ydHMoY3NzUnVsZXMsIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY3NzUnVsZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGluc2VydFN0eWxlKCkge1xyXG4gICAgICAgICAgICBpZiAoY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nICE9PSBjb3JzQ29weSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm5leHRTaWJsaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb3JzQ29weS5uZXh0U2libGluZyAhPT0gc3luY1N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weS5uZXh0U2libGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5uZXh0U2libGluZyAhPT0gc3luY1N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN5bmNTdHlsZSwgZWxlbWVudC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3luY1N0eWxlKCkge1xyXG4gICAgICAgICAgICBzeW5jU3R5bGUgPVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIFNWR1N0eWxlRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgc3luY1N0eWxlLmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgICAgICBzeW5jU3R5bGUuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXItLXN5bmNcIik7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZS5tZWRpYSA9IFwic2NyZWVuXCI7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBzeW5jU3R5bGUudGl0bGUgPSBlbGVtZW50LnRpdGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZVNldC5hZGQoc3luY1N0eWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGlzTG9hZGluZ1J1bGVzID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHdhc0xvYWRpbmdFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBsb2FkaW5nTGlua0lkID0gKytsb2FkaW5nTGlua0NvdW50ZXI7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXNBc3luYygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNzc1RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQmFzZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgX2EsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzUnVsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzRXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbENTU1RleHQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2I7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gX19yZWFkKGdldFJ1bGVzT3JFcnJvcigpLCAyKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNzc1J1bGVzID0gX2FbMF0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhY2Nlc3NFcnJvciA9IF9hWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIWNzc1J1bGVzICYmICFhY2Nlc3NFcnJvciAmJiAhaXNTYWZhcmkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc1NhZmFyaSAmJiAhZWxlbWVudC5zaGVldCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTdGlsbExvYWRpbmdFcnJvcihhY2Nlc3NFcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgbGlua0xvYWRpbmcoZWxlbWVudCwgbG9hZGluZ0xpbmtJZCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXNMb2FkaW5nRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbmNlbEFzeW5jT3BlcmF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbnVsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2IgPSBfX3JlYWQoZ2V0UnVsZXNPckVycm9yKCksIDIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3NzUnVsZXMgPSBfYlswXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjY2Vzc0Vycm9yID0gX2JbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0ltcG9ydHMoY3NzUnVsZXMsIGZhbHNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGNzc1J1bGVzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGxvYWRUZXh0KGVsZW1lbnQuaHJlZildO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQmFzZVBhdGggPSBnZXRDU1NCYXNlQmF0aChlbGVtZW50LmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbmNlbEFzeW5jT3BlcmF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbnVsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbnNDU1NJbXBvcnQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NCYXNlUGF0aCA9IGdldENTU0Jhc2VCYXRoKGxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNzc1RleHQpIHJldHVybiBbMywgMTNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzksIDExLCAsIDEyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHJlcGxhY2VDU1NJbXBvcnRzKGNzc1RleHQsIGNzc0Jhc2VQYXRoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsQ1NTVGV4dCA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5ID0gY3JlYXRlQ09SU0NvcHkoZWxlbWVudCwgZnVsbENTU1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDEyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3JzQ29weSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyID0gd2F0Y2hGb3JOb2RlUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXYtc2libGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGNvcnNDb3B5LnNoZWV0LmNzc1J1bGVzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGV0YWlscyhvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciBydWxlcyA9IGdldFJ1bGVzU3luYygpO1xyXG4gICAgICAgICAgICBpZiAoIXJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zZWNvbmRSb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZ1J1bGVzIHx8IHdhc0xvYWRpbmdFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nUnVsZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZ1N0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBnZXRSdWxlc0FzeW5jKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmdSdWxlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nUnVsZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtydWxlczogcnVsZXN9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZm9yY2VSZW5kZXJTdHlsZSA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcih0aGVtZSwgaWdub3JlSW1hZ2VBbmFseXNpcykge1xyXG4gICAgICAgICAgICB2YXIgcnVsZXMgPSBnZXRSdWxlc1N5bmMoKTtcclxuICAgICAgICAgICAgaWYgKCFydWxlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVDU1NSdWxlc0Zyb21TaGVldChzaGVldCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHNoZWV0LmNzc1J1bGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXQuZGVsZXRlUnVsZShpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwcmVwYXJlT3ZlcnJpZGVzU2hlZXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN5bmNTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVN5bmNTdHlsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyICYmIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRTdHlsZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN5bmNTdHlsZS5zaGVldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzaGVldCA9IHN5bmNTdHlsZS5zaGVldDtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNTU1J1bGVzRnJvbVNoZWV0KHNoZWV0KTtcclxuICAgICAgICAgICAgICAgIGlmIChzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlciA9IHdhdGNoRm9yTm9kZVBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW5jU3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldi1zaWJsaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyU3R5bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVpbGRPdmVycmlkZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3luY1N0eWxlLnNoZWV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGJ1aWxkT3ZlcnJpZGVzKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvcmNlID0gZm9yY2VSZW5kZXJTdHlsZTtcclxuICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyU3R5bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNoZWV0TW9kaWZpZXIubW9kaWZ5U2hlZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmVTaGVldDogcHJlcGFyZU92ZXJyaWRlc1NoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUNTU1J1bGVzOiBydWxlcyxcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZTogdGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpczogaWdub3JlSW1hZ2VBbmFseXNpcyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZTogZm9yY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FuY2VsQXN5bmNPcGVyYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaXNPdmVycmlkZUVtcHR5ID0gc3luY1N0eWxlLnNoZWV0LmNzc1J1bGVzLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChzaGVldE1vZGlmaWVyLnNob3VsZFJlYnVpbGRTdHlsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVpbGRPdmVycmlkZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXNPckVycm9yKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc2hlZXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbbnVsbCwgbnVsbF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW2VsZW1lbnQuc2hlZXQuY3NzUnVsZXMsIG51bGxdO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZXJyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBpc1N0aWxsTG9hZGluZ0Vycm9yKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvciAmJiBlcnJvci5tZXNzYWdlICYmIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJsb2FkaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzYWZlR2V0U2hlZXRSdWxlcygpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gX19yZWFkKGdldFJ1bGVzT3JFcnJvcigpLCAyKSxcclxuICAgICAgICAgICAgICAgIGNzc1J1bGVzID0gX2FbMF0sXHJcbiAgICAgICAgICAgICAgICBlcnIgPSBfYVsxXTtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNzc1J1bGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaEZvclNoZWV0Q2hhbmdlcygpIHtcclxuICAgICAgICAgICAgd2F0Y2hGb3JTaGVldENoYW5nZXNVc2luZ1Byb3h5KCk7XHJcbiAgICAgICAgICAgIGlmICghKGNhbk9wdGltaXplVXNpbmdQcm94eSQxICYmIGVsZW1lbnQuc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICB3YXRjaEZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJ1bGVzQ2hhbmdlS2V5ID0gbnVsbDtcclxuICAgICAgICB2YXIgcnVsZXNDaGVja0ZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzQ2hhbmdlS2V5KCkge1xyXG4gICAgICAgICAgICB2YXIgcnVsZXMgPSBzYWZlR2V0U2hlZXRSdWxlcygpO1xyXG4gICAgICAgICAgICByZXR1cm4gcnVsZXMgPyBydWxlcy5sZW5ndGggOiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkaWRSdWxlc0tleUNoYW5nZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFJ1bGVzQ2hhbmdlS2V5KCkgIT09IHJ1bGVzQ2hhbmdlS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaEZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCkge1xyXG4gICAgICAgICAgICBydWxlc0NoYW5nZUtleSA9IGdldFJ1bGVzQ2hhbmdlS2V5KCk7XHJcbiAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCk7XHJcbiAgICAgICAgICAgIHZhciBjaGVja0ZvclVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaWRSdWxlc0tleUNoYW5nZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXNDaGFuZ2VLZXkgPSBnZXRSdWxlc0NoYW5nZUtleSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbk9wdGltaXplVXNpbmdQcm94eSQxICYmIGVsZW1lbnQuc2hlZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1bGVzQ2hlY2tGcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrRm9yVXBkYXRlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2hlY2tGb3JVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJ1bGVzQ2hlY2tGcmFtZUlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFyZVNoZWV0Q2hhbmdlc1BlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBmdW5jdGlvbiBvblNoZWV0Q2hhbmdlKCkge1xyXG4gICAgICAgICAgICBjYW5PcHRpbWl6ZVVzaW5nUHJveHkkMSA9IHRydWU7XHJcbiAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCk7XHJcbiAgICAgICAgICAgIGlmIChhcmVTaGVldENoYW5nZXNQZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlU2hlZXRDaGFuZ2VzKCkge1xyXG4gICAgICAgICAgICAgICAgYXJlU2hlZXRDaGFuZ2VzUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbEFzeW5jT3BlcmF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyZVNoZWV0Q2hhbmdlc1BlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHF1ZXVlTWljcm90YXNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKGhhbmRsZVNoZWV0Q2hhbmdlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlU2hlZXRDaGFuZ2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaEZvclNoZWV0Q2hhbmdlc1VzaW5nUHJveHkoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX191cGRhdGVTaGVldFwiLFxyXG4gICAgICAgICAgICAgICAgb25TaGVldENoYW5nZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1Byb3h5KCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fdXBkYXRlU2hlZXRcIixcclxuICAgICAgICAgICAgICAgIG9uU2hlZXRDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzKCkge1xyXG4gICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1Byb3h5KCk7XHJcbiAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHBhdXNlKCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyICYmIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyICYmIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5zdG9wKCk7XHJcbiAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xyXG4gICAgICAgICAgICBwYXVzZSgpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGNvcnNDb3B5KTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShzeW5jU3R5bGUpO1xyXG4gICAgICAgICAgICBsb2FkaW5nRW5kKCk7XHJcbiAgICAgICAgICAgIGlmIChyZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuaGFzKGxvYWRpbmdMaW5rSWQpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVqZWN0ID0gcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmdldChsb2FkaW5nTGlua0lkKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5kZWxldGUobG9hZGluZ0xpbmtJZCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QgJiYgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2goKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB3YXRjaEZvclNoZWV0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYXhNb3ZlQ291bnQgPSAxMDtcclxuICAgICAgICB2YXIgbW92ZUNvdW50ID0gMDtcclxuICAgICAgICBmdW5jdGlvbiByZXN0b3JlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXN5bmNTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vdmVDb3VudCsrO1xyXG4gICAgICAgICAgICBpZiAobW92ZUNvdW50ID4gbWF4TW92ZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5zZXJ0U3R5bGUoKTtcclxuICAgICAgICAgICAgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIgJiYgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIuc2tpcCgpO1xyXG4gICAgICAgICAgICBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgJiYgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyLnNraXAoKTtcclxuICAgICAgICAgICAgaWYgKCFpc092ZXJyaWRlRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyU3R5bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGV0YWlsczogZGV0YWlscyxcclxuICAgICAgICAgICAgcmVuZGVyOiByZW5kZXIsXHJcbiAgICAgICAgICAgIHBhdXNlOiBwYXVzZSxcclxuICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveSxcclxuICAgICAgICAgICAgd2F0Y2g6IHdhdGNoLFxyXG4gICAgICAgICAgICByZXN0b3JlOiByZXN0b3JlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGxpbmtMb2FkaW5nKGxpbmssIGxvYWRpbmdJZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsZWFuVXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG9uTG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5kZWxldGUobG9hZGluZ0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuVXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhblVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMaW5rZWxlbWVudCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGxvYWRpbmdJZCwgXCIgY291bGRuJ3QgYmUgbG9hZGVkLiBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChsaW5rLmhyZWYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3RvcnNGb3JMb2FkaW5nTGlua3Muc2V0KGxvYWRpbmdJZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5VcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG9uTG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxpbmsuaHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q1NTSW1wb3J0VVJMKGltcG9ydERlY2xhcmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldENTU1VSTFZhbHVlKFxyXG4gICAgICAgICAgICBpbXBvcnREZWNsYXJhdGlvblxyXG4gICAgICAgICAgICAgICAgLnN1YnN0cmluZyg3KVxyXG4gICAgICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLzskLywgXCJcIilcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9zY3JlZW4kLywgXCJcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbG9hZFRleHQodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVybC5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHJldHVybiBbMywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZmV0Y2godXJsKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIF9hLnNlbnQoKS50ZXh0KCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0ZldGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBcInRleHQvY3NzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VDU1NJbXBvcnRzKGNzc1RleHQsIGJhc2VQYXRoLCBjYWNoZSkge1xyXG4gICAgICAgIGlmIChjYWNoZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpbXBvcnRNYXRjaGVzLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0TWF0Y2hlc18xLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0TWF0Y2hlc18xXzEsXHJcbiAgICAgICAgICAgICAgICBtYXRjaCxcclxuICAgICAgICAgICAgICAgIGltcG9ydFVSTCxcclxuICAgICAgICAgICAgICAgIGFic29sdXRlVVJMLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MsXHJcbiAgICAgICAgICAgICAgICBlXzFfMTtcclxuICAgICAgICAgICAgdmFyIGVfMSwgX2E7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSByZW1vdmVDU1NDb21tZW50cyhjc3NUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IHJlcGxhY2VDU1NGb250RmFjZShjc3NUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IHJlcGxhY2VDU1NSZWxhdGl2ZVVSTHNXaXRoQWJzb2x1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0TWF0Y2hlcyA9IGdldE1hdGNoZXMoY3NzSW1wb3J0UmVnZXgsIGNzc1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDEwLCAxMSwgMTJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGltcG9ydE1hdGNoZXNfMSA9IF9fdmFsdWVzKGltcG9ydE1hdGNoZXMpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbXBvcnRNYXRjaGVzXzFfMSA9IGltcG9ydE1hdGNoZXNfMS5uZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFpbXBvcnRNYXRjaGVzXzFfMS5kb25lKSByZXR1cm4gWzMsIDldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGltcG9ydE1hdGNoZXNfMV8xLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRVUkwgPSBnZXRDU1NJbXBvcnRVUkwobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhYnNvbHV0ZVVSTCA9IGdldEFic29sdXRlVVJMKGJhc2VQYXRoLCBpbXBvcnRVUkwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYWNoZS5oYXMoYWJzb2x1dGVVUkwpKSByZXR1cm4gWzMsIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyA9IGNhY2hlLmdldChhYnNvbHV0ZVVSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzMsIDYsICwgN10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGxvYWRUZXh0KGFic29sdXRlVVJMKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGFic29sdXRlVVJMLCBpbXBvcnRlZENTUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUNTU0ltcG9ydHMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q1NTQmFzZUJhdGgoYWJzb2x1dGVVUkwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQuc3BsaXQobWF0Y2gpLmpvaW4oaW1wb3J0ZWRDU1MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRNYXRjaGVzXzFfMSA9IGltcG9ydE1hdGNoZXNfMS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDEyXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzFfMSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0ge2Vycm9yOiBlXzFfMX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0TWF0Y2hlc18xXzEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaW1wb3J0TWF0Y2hlc18xXzEuZG9uZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGltcG9ydE1hdGNoZXNfMS5yZXR1cm4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EuY2FsbChpbXBvcnRNYXRjaGVzXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbN107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGNzc1RleHRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNPUlNDb3B5KHNyY0VsZW1lbnQsIGNzc1RleHQpIHtcclxuICAgICAgICBpZiAoIWNzc1RleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgIGNvcnMuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXJcIik7XHJcbiAgICAgICAgY29ycy5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlci0tY29yc1wiKTtcclxuICAgICAgICBjb3JzLm1lZGlhID0gXCJzY3JlZW5cIjtcclxuICAgICAgICBjb3JzLnRleHRDb250ZW50ID0gY3NzVGV4dDtcclxuICAgICAgICBzcmNFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvcnMsIHNyY0VsZW1lbnQubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIGNvcnMuc2hlZXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvcnNTdHlsZVNldC5hZGQoY29ycyk7XHJcbiAgICAgICAgcmV0dXJuIGNvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9ic2VydmVycyA9IFtdO1xyXG4gICAgdmFyIG9ic2VydmVkUm9vdHM7XHJcbiAgICB2YXIgdW5kZWZpbmVkR3JvdXBzID0gbmV3IE1hcCgpO1xyXG4gICAgdmFyIGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrO1xyXG4gICAgZnVuY3Rpb24gY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKHJvb3QpIHtcclxuICAgICAgICBpZiAoIWlzRGVmaW5lZFNlbGVjdG9yU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yRWFjaChyb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCI6bm90KDpkZWZpbmVkKVwiKSwgZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIHZhciB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmICghdGFnLmluY2x1ZGVzKFwiLVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGV4dGVuZGVkVGFnID0gZWwuZ2V0QXR0cmlidXRlKFwiaXNcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5kZWRUYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWcgPSBleHRlbmRlZFRhZztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdW5kZWZpbmVkR3JvdXBzLmhhcyh0YWcpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmRlZmluZWRHcm91cHMuc2V0KHRhZywgbmV3IFNldCgpKTtcclxuICAgICAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzV2hlbkRlZmluZWQodGFnKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gdW5kZWZpbmVkR3JvdXBzLmdldCh0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWRHcm91cHMuZGVsZXRlKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrKEFycmF5LmZyb20oZWxlbWVudHMpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bmRlZmluZWRHcm91cHMuZ2V0KHRhZykuYWRkKGVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBjYW5PcHRpbWl6ZVVzaW5nUHJveHkgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkXCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYW5PcHRpbWl6ZVVzaW5nUHJveHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICB2YXIgcmVzb2x2ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlSXNEZWZpbmVkKGUpIHtcclxuICAgICAgICBjYW5PcHRpbWl6ZVVzaW5nUHJveHkgPSB0cnVlO1xyXG4gICAgICAgIGlmIChyZXNvbHZlcnMuaGFzKGUuZGV0YWlsLnRhZykpIHtcclxuICAgICAgICAgICAgdmFyIHJlc29sdmUgPSByZXNvbHZlcnMuZ2V0KGUuZGV0YWlsLnRhZyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjdXN0b21FbGVtZW50c1doZW5EZWZpbmVkKHRhZykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWcpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYW5PcHRpbWl6ZVVzaW5nUHJveHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVycy5zZXQodGFnLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRkVW5kZWZpbmVkUmVzb2x2ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbDoge3RhZzogdGFnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrSWZEZWZpbmVkXzEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gdW5kZWZpbmVkR3JvdXBzLmdldCh0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUubWF0Y2hlcyhcIjpkZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrSWZEZWZpbmVkXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjaGVja0lmRGVmaW5lZF8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdhdGNoV2hlbkN1c3RvbUVsZW1lbnRzRGVmaW5lZChjYWxsYmFjaykge1xyXG4gICAgICAgIGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1bnN1YnNjcmliZUZyb21EZWZpbmVDdXN0b21FbGVtZW50cygpIHtcclxuICAgICAgICBlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgdW5kZWZpbmVkR3JvdXBzLmNsZWFyKCk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2lzRGVmaW5lZFwiLFxyXG4gICAgICAgICAgICBoYW5kbGVJc0RlZmluZWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JTdHlsZUNoYW5nZXMoY3VycmVudFN0eWxlcywgdXBkYXRlLCBzaGFkb3dSb290RGlzY292ZXJlZCkge1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvclN0eWxlQ2hhbmdlcygpO1xyXG4gICAgICAgIHZhciBwcmV2U3R5bGVzID0gbmV3IFNldChjdXJyZW50U3R5bGVzKTtcclxuICAgICAgICB2YXIgcHJldlN0eWxlU2libGluZ3MgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgIHZhciBuZXh0U3R5bGVTaWJsaW5ncyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgZnVuY3Rpb24gc2F2ZVN0eWxlUG9zaXRpb24oc3R5bGUpIHtcclxuICAgICAgICAgICAgcHJldlN0eWxlU2libGluZ3Muc2V0KHN0eWxlLCBzdHlsZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcclxuICAgICAgICAgICAgbmV4dFN0eWxlU2libGluZ3Muc2V0KHN0eWxlLCBzdHlsZS5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBmb3JnZXRTdHlsZVBvc2l0aW9uKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHByZXZTdHlsZVNpYmxpbmdzLmRlbGV0ZShzdHlsZSk7XHJcbiAgICAgICAgICAgIG5leHRTdHlsZVNpYmxpbmdzLmRlbGV0ZShzdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRpZFN0eWxlUG9zaXRpb25DaGFuZ2Uoc3R5bGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHN0eWxlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgIT09IHByZXZTdHlsZVNpYmxpbmdzLmdldChzdHlsZSkgfHxcclxuICAgICAgICAgICAgICAgIHN0eWxlLm5leHRFbGVtZW50U2libGluZyAhPT0gbmV4dFN0eWxlU2libGluZ3MuZ2V0KHN0eWxlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50U3R5bGVzLmZvckVhY2goc2F2ZVN0eWxlUG9zaXRpb24pO1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN0eWxlT3BlcmF0aW9ucyhvcGVyYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciBjcmVhdGVkU3R5bGVzID0gb3BlcmF0aW9ucy5jcmVhdGVkU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcyA9IG9wZXJhdGlvbnMucmVtb3ZlZFN0eWxlcyxcclxuICAgICAgICAgICAgICAgIG1vdmVkU3R5bGVzID0gb3BlcmF0aW9ucy5tb3ZlZFN0eWxlcztcclxuICAgICAgICAgICAgY3JlYXRlZFN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2F2ZVN0eWxlUG9zaXRpb24ocyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtb3ZlZFN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2F2ZVN0eWxlUG9zaXRpb24ocyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZW1vdmVkU3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JnZXRTdHlsZVBvc2l0aW9uKHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY3JlYXRlZFN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0eWxlcy5hZGQocyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZW1vdmVkU3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3R5bGVzLmRlbGV0ZShzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuc2l6ZSArIHJlbW92ZWRTdHlsZXMuc2l6ZSArIG1vdmVkU3R5bGVzLnNpemUgPlxyXG4gICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZDogQXJyYXkuZnJvbShjcmVhdGVkU3R5bGVzKSxcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkOiBBcnJheS5mcm9tKHJlbW92ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVkOiBBcnJheS5mcm9tKG1vdmVkU3R5bGVzKSxcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkOiBbXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWlub3JUcmVlTXV0YXRpb25zKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBhZGRpdGlvbnMgPSBfYS5hZGRpdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBtb3ZlcyA9IF9hLm1vdmVzLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRpb25zID0gX2EuZGVsZXRpb25zO1xyXG4gICAgICAgICAgICB2YXIgY3JlYXRlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdmFyIHJlbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHZhciBtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgYWRkaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRNYW5hZ2VhYmxlU3R5bGVzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWRTdHlsZXMuYWRkKHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGVsZXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRNYW5hZ2VhYmxlU3R5bGVzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbW92ZWRTdHlsZXMuYWRkKHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbW92ZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldE1hbmFnZWFibGVTdHlsZXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZWRTdHlsZXMuYWRkKHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaGFuZGxlU3R5bGVPcGVyYXRpb25zKHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXM6IGNyZWF0ZWRTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzOiByZW1vdmVkU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgbW92ZWRTdHlsZXM6IG1vdmVkU3R5bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKG4sIHN1YnNjcmliZUZvclNoYWRvd1Jvb3RDaGFuZ2VzKTtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhuKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUh1Z2VUcmVlTXV0YXRpb25zKHJvb3QpIHtcclxuICAgICAgICAgICAgdmFyIHN0eWxlcyA9IG5ldyBTZXQoZ2V0TWFuYWdlYWJsZVN0eWxlcyhyb290KSk7XHJcbiAgICAgICAgICAgIHZhciBjcmVhdGVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB2YXIgcmVtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdmFyIG1vdmVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBzdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2U3R5bGVzLmhhcyhzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuYWRkKHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJldlN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0eWxlcy5oYXMocykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzLmFkZChzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIWNyZWF0ZWRTdHlsZXMuaGFzKHMpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXJlbW92ZWRTdHlsZXMuaGFzKHMpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZGlkU3R5bGVQb3NpdGlvbkNoYW5nZShzKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZWRTdHlsZXMuYWRkKHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaGFuZGxlU3R5bGVPcGVyYXRpb25zKHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXM6IGNyZWF0ZWRTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzOiByZW1vdmVkU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgbW92ZWRTdHlsZXM6IG1vdmVkU3R5bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMocm9vdCwgc3Vic2NyaWJlRm9yU2hhZG93Um9vdENoYW5nZXMpO1xyXG4gICAgICAgICAgICBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMocm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyhtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHZhciByZW1vdmVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IG0udGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRNYW5hZ2VTdHlsZSh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRTdHlsZXMuYWRkKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzLmFkZCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVkU3R5bGVzLnNpemUgKyByZW1vdmVkU3R5bGVzLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IEFycmF5LmZyb20odXBkYXRlZFN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZDogQXJyYXkuZnJvbShyZW1vdmVkU3R5bGVzKSxcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZDogW11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmUocm9vdCkge1xyXG4gICAgICAgICAgICB2YXIgdHJlZU9ic2VydmVyID0gY3JlYXRlT3B0aW1pemVkVHJlZU9ic2VydmVyKHJvb3QsIHtcclxuICAgICAgICAgICAgICAgIG9uTWlub3JNdXRhdGlvbnM6IGhhbmRsZU1pbm9yVHJlZU11dGF0aW9ucyxcclxuICAgICAgICAgICAgICAgIG9uSHVnZU11dGF0aW9uczogaGFuZGxlSHVnZVRyZWVNdXRhdGlvbnNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBhdHRyT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMpO1xyXG4gICAgICAgICAgICBhdHRyT2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJyZWxcIiwgXCJkaXNhYmxlZFwiLCBcIm1lZGlhXCIsIFwiaHJlZlwiXSxcclxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5wdXNoKHRyZWVPYnNlcnZlciwgYXR0ck9ic2VydmVyKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZWRSb290cy5hZGQocm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN1YnNjcmliZUZvclNoYWRvd1Jvb3RDaGFuZ2VzKG5vZGUpIHtcclxuICAgICAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSBub2RlLnNoYWRvd1Jvb3Q7XHJcbiAgICAgICAgICAgIGlmIChzaGFkb3dSb290ID09IG51bGwgfHwgb2JzZXJ2ZWRSb290cy5oYXMoc2hhZG93Um9vdCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnNlcnZlKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZChzaGFkb3dSb290KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZShkb2N1bWVudCk7XHJcbiAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgIHN1YnNjcmliZUZvclNoYWRvd1Jvb3RDaGFuZ2VzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB3YXRjaFdoZW5DdXN0b21FbGVtZW50c0RlZmluZWQoZnVuY3Rpb24gKGhvc3RzKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdTdHlsZXMgPSBbXTtcclxuICAgICAgICAgICAgaG9zdHMuZm9yRWFjaChmdW5jdGlvbiAoaG9zdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHB1c2gobmV3U3R5bGVzLCBnZXRNYW5hZ2VhYmxlU3R5bGVzKGhvc3Quc2hhZG93Um9vdCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdXBkYXRlKHtjcmVhdGVkOiBuZXdTdHlsZXMsIHVwZGF0ZWQ6IFtdLCByZW1vdmVkOiBbXSwgbW92ZWQ6IFtdfSk7XHJcbiAgICAgICAgICAgIGhvc3RzLmZvckVhY2goZnVuY3Rpb24gKGhvc3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzaGFkb3dSb290ID0gaG9zdC5zaGFkb3dSb290O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoYWRvd1Jvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN1YnNjcmliZUZvclNoYWRvd1Jvb3RDaGFuZ2VzKGhvc3QpO1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKHNoYWRvd1Jvb3QsIHN1YnNjcmliZUZvclNoYWRvd1Jvb3RDaGFuZ2VzKTtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhzaGFkb3dSb290KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIl9fZGFya3JlYWRlcl9faXNEZWZpbmVkXCIsIGhhbmRsZUlzRGVmaW5lZCk7XHJcbiAgICAgICAgY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKGRvY3VtZW50KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlc2V0T2JzZXJ2ZXJzKCkge1xyXG4gICAgICAgIG9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKDAsIG9ic2VydmVycy5sZW5ndGgpO1xyXG4gICAgICAgIG9ic2VydmVkUm9vdHMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU3R5bGVDaGFuZ2VzKCkge1xyXG4gICAgICAgIHJlc2V0T2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgdW5zdWJzY3JpYmVGcm9tRGVmaW5lQ3VzdG9tRWxlbWVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoZXhpZnkobnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChudW1iZXIgPCAxNiA/IFwiMFwiIDogXCJcIikgKyBudW1iZXIudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVVSUQoKSB7XHJcbiAgICAgICAgaWYgKFwicmFuZG9tVVVJRFwiIGluIGNyeXB0bykge1xyXG4gICAgICAgICAgICB2YXIgdXVpZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICB1dWlkLnN1YnN0cmluZygwLCA4KSArXHJcbiAgICAgICAgICAgICAgICB1dWlkLnN1YnN0cmluZyg5LCAxMykgK1xyXG4gICAgICAgICAgICAgICAgdXVpZC5zdWJzdHJpbmcoMTQsIDE4KSArXHJcbiAgICAgICAgICAgICAgICB1dWlkLnN1YnN0cmluZygxOSwgMjMpICtcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDI0KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDE2KSkpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBoZXhpZnkoeCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5qb2luKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhZG9wdGVkU3R5bGVPdmVycmlkZXMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgdmFyIG92ZXJyaWRlTGlzdCA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBZG9wdGVkU3R5bGVTaGVldE92ZXJyaWRlKG5vZGUpIHtcclxuICAgICAgICB2YXIgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gaW5qZWN0U2hlZXQoc2hlZXQsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdTaGVldHMgPSBfX3NwcmVhZEFycmF5KFxyXG4gICAgICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgICAgICBfX3JlYWQobm9kZS5hZG9wdGVkU3R5bGVTaGVldHMpLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHNoZWV0SW5kZXggPSBuZXdTaGVldHMuaW5kZXhPZihzaGVldCk7XHJcbiAgICAgICAgICAgIHZhciBleGlzdGluZ0luZGV4ID0gbmV3U2hlZXRzLmluZGV4T2Yob3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICBpZiAoc2hlZXRJbmRleCA9PT0gZXhpc3RpbmdJbmRleCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTaGVldHMuc3BsaWNlKGV4aXN0aW5nSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1NoZWV0cy5zcGxpY2Uoc2hlZXRJbmRleCArIDEsIDAsIG92ZXJyaWRlKTtcclxuICAgICAgICAgICAgbm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgPSBuZXdTaGVldHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBuZXdTaGVldHMgPSBfX3NwcmVhZEFycmF5KFxyXG4gICAgICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgICAgICBfX3JlYWQobm9kZS5hZG9wdGVkU3R5bGVTaGVldHMpLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbm9kZS5hZG9wdGVkU3R5bGVTaGVldHMuZm9yRWFjaChmdW5jdGlvbiAoYWRvcHRlZFN0eWxlU2hlZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVycmlkZUxpc3QuaGFzKGFkb3B0ZWRTdHlsZVNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ0luZGV4ID0gbmV3U2hlZXRzLmluZGV4T2YoYWRvcHRlZFN0eWxlU2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ0luZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2hlZXRzLnNwbGljZShleGlzdGluZ0luZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWRvcHRlZFN0eWxlT3ZlcnJpZGVzLmRlbGV0ZShhZG9wdGVkU3R5bGVTaGVldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVMaXN0LmRlbGV0ZShhZG9wdGVkU3R5bGVTaGVldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyA9IG5ld1NoZWV0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKHRoZW1lLCBpZ25vcmVJbWFnZUFuYWx5c2lzKSB7XHJcbiAgICAgICAgICAgIG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmZvckVhY2goZnVuY3Rpb24gKHNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVMaXN0LmhhcyhzaGVldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcnVsZXMgPSBzaGVldC5ydWxlcztcclxuICAgICAgICAgICAgICAgIHZhciBvdmVycmlkZSA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwcmVwYXJlT3ZlcnJpZGVzU2hlZXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IG92ZXJyaWRlLmNzc1J1bGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlLmRlbGV0ZVJ1bGUoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGluamVjdFNoZWV0KHNoZWV0LCBvdmVycmlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRvcHRlZFN0eWxlT3ZlcnJpZGVzLnNldChzaGVldCwgb3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlTGlzdC5hZGQob3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdmVycmlkZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzaGVldE1vZGlmaWVyID0gY3JlYXRlU3R5bGVTaGVldE1vZGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICBzaGVldE1vZGlmaWVyLm1vZGlmeVNoZWV0KHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVwYXJlU2hlZXQ6IHByZXBhcmVPdmVycmlkZXNTaGVldCxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VDU1NSdWxlczogcnVsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU6IHRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlQW5hbHlzaXM6IGlnbm9yZUltYWdlQW5hbHlzaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbmNlbEFzeW5jT3BlcmF0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogcmVuZGVyLFxyXG4gICAgICAgICAgICBkZXN0cm95OiBkZXN0cm95XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbmplY3RQcm94eShlbmFibGVTdHlsZVNoZWV0c1Byb3h5KSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19pbmxpbmVTY3JpcHRzQWxsb3dlZFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIGFkZFJ1bGVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgIFwiYWRkUnVsZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgaW5zZXJ0UnVsZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgXCJpbnNlcnRSdWxlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBkZWxldGVSdWxlRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICBcImRlbGV0ZVJ1bGVcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIHJlbW92ZVJ1bGVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgIFwicmVtb3ZlUnVsZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgZG9jdW1lbnRTdHlsZVNoZWV0c0Rlc2NyaXB0b3IgPSBlbmFibGVTdHlsZVNoZWV0c1Byb3h5XHJcbiAgICAgICAgICAgID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihEb2N1bWVudC5wcm90b3R5cGUsIFwic3R5bGVTaGVldHNcIilcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIHZhciBzaG91bGRXcmFwSFRNTEVsZW1lbnQgPSBbXHJcbiAgICAgICAgICAgIFwiYmFpZHUuY29tXCIsXHJcbiAgICAgICAgICAgIFwiYmFpa2UuYmFpZHUuY29tXCIsXHJcbiAgICAgICAgICAgIFwiZGl0dS5iYWlkdS5jb21cIixcclxuICAgICAgICAgICAgXCJtYXAuYmFpZHUuY29tXCIsXHJcbiAgICAgICAgICAgIFwibWFwcy5iYWlkdS5jb21cIixcclxuICAgICAgICAgICAgXCJoYW9rYW4uYmFpZHUuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGFuLmJhaWR1LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBhc3Nwb3J0LmJhaWR1LmNvbVwiLFxyXG4gICAgICAgICAgICBcInRpZWJhLmJhaWR1LmNvbVwiLFxyXG4gICAgICAgICAgICBcInd3dy5iYWlkdS5jb21cIlxyXG4gICAgICAgIF0uaW5jbHVkZXMobG9jYXRpb24uaG9zdG5hbWUpO1xyXG4gICAgICAgIHZhciBnZXRFbGVtZW50c0J5VGFnTmFtZURlc2NyaXB0b3IgPSBzaG91bGRXcmFwSFRNTEVsZW1lbnRcclxuICAgICAgICAgICAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxyXG4gICAgICAgICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgICAgXCJnZXRFbGVtZW50c0J5VGFnTmFtZVwiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgdmFyIGNsZWFuVXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgXCJhZGRSdWxlXCIsXHJcbiAgICAgICAgICAgICAgICBhZGRSdWxlRGVzY3JpcHRvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgIFwiaW5zZXJ0UnVsZVwiLFxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0UnVsZURlc2NyaXB0b3JcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICBcImRlbGV0ZVJ1bGVcIixcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVJ1bGVEZXNjcmlwdG9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgXCJyZW1vdmVSdWxlXCIsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVSdWxlRGVzY3JpcHRvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiX19kYXJrcmVhZGVyX19jbGVhblVwXCIsIGNsZWFuVXApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2FkZFVuZGVmaW5lZFJlc29sdmVyXCIsXHJcbiAgICAgICAgICAgICAgICBhZGRVbmRlZmluZWRSZXNvbHZlclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoZW5hYmxlU3R5bGVTaGVldHNQcm94eSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgIERvY3VtZW50LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlU2hlZXRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRTdHlsZVNoZWV0c0Rlc2NyaXB0b3JcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3VsZFdyYXBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZ2V0RWxlbWVudHNCeVRhZ05hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZURlc2NyaXB0b3JcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBhZGRVbmRlZmluZWRSZXNvbHZlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKGUuZGV0YWlsLnRhZykudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9faXNEZWZpbmVkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7dGFnOiBlLmRldGFpbC50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIl9fZGFya3JlYWRlcl9fY2xlYW5VcFwiLCBjbGVhblVwKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRkVW5kZWZpbmVkUmVzb2x2ZXJcIixcclxuICAgICAgICAgICAgYWRkVW5kZWZpbmVkUmVzb2x2ZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciB1cGRhdGVTaGVldEV2ZW50ID0gbmV3IEV2ZW50KFwiX19kYXJrcmVhZGVyX191cGRhdGVTaGVldFwiKTtcclxuICAgICAgICBmdW5jdGlvbiBwcm94eUFkZFJ1bGUoc2VsZWN0b3IsIHN0eWxlLCBpbmRleCkge1xyXG4gICAgICAgICAgICBhZGRSdWxlRGVzY3JpcHRvci52YWx1ZS5jYWxsKHRoaXMsIHNlbGVjdG9yLCBzdHlsZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyTm9kZSAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMub3duZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtyZWFkZXJcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyTm9kZS5kaXNwYXRjaEV2ZW50KHVwZGF0ZVNoZWV0RXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcHJveHlJbnNlcnRSdWxlKHJ1bGUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IGluc2VydFJ1bGVEZXNjcmlwdG9yLnZhbHVlLmNhbGwoXHJcbiAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJOb2RlICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5vd25lck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya3JlYWRlclwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJOb2RlLmRpc3BhdGNoRXZlbnQodXBkYXRlU2hlZXRFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBwcm94eURlbGV0ZVJ1bGUoaW5kZXgpIHtcclxuICAgICAgICAgICAgZGVsZXRlUnVsZURlc2NyaXB0b3IudmFsdWUuY2FsbCh0aGlzLCBpbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJOb2RlICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5vd25lck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya3JlYWRlclwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJOb2RlLmRpc3BhdGNoRXZlbnQodXBkYXRlU2hlZXRFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcHJveHlSZW1vdmVSdWxlKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJlbW92ZVJ1bGVEZXNjcmlwdG9yLnZhbHVlLmNhbGwodGhpcywgaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyTm9kZSAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMub3duZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtyZWFkZXJcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyTm9kZS5kaXNwYXRjaEV2ZW50KHVwZGF0ZVNoZWV0RXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHByb3h5RG9jdW1lbnRTdHlsZVNoZWV0cygpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGdldEN1cnJlbnRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkb2NTaGVldHMgPSBkb2N1bWVudFN0eWxlU2hlZXRzRGVzY3JpcHRvci5nZXQuY2FsbChfdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZWRTaGVldHMgPSBfX3NwcmVhZEFycmF5KFxyXG4gICAgICAgICAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIF9fcmVhZChkb2NTaGVldHMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApLmZpbHRlcihmdW5jdGlvbiAoc3R5bGVTaGVldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhc3R5bGVTaGVldC5vd25lck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhcmtyZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkU2hlZXRzLml0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZFNoZWV0c1tpdGVtXTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkU2hlZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIFN0eWxlU2hlZXRMaXN0LnByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZ2V0Q3VycmVudFZhbHVlKCk7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZVNoZWV0TGlzdEJlaGF2aW9yID0ge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoXywgcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0Q3VycmVudFZhbHVlKClbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBlbGVtZW50cyA9IG5ldyBQcm94eShlbGVtZW50cywgc3R5bGVTaGVldExpc3RCZWhhdmlvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50cztcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcHJveHlHZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICh0YWdOYW1lICE9PSBcInN0eWxlXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRFbGVtZW50c0J5VGFnTmFtZURlc2NyaXB0b3IudmFsdWUuY2FsbCh0aGlzLCB0YWdOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZ2V0Q3VycmVudEVsZW1lbnRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGdldEVsZW1lbnRzQnlUYWdOYW1lRGVzY3JpcHRvci52YWx1ZS5jYWxsKFxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKFxyXG4gICAgICAgICAgICAgICAgICAgIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChlbGVtZW50cyksIGZhbHNlKS5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIE5vZGVMaXN0LnByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZ2V0Q3VycmVudEVsZW1lbnRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB2YXIgbm9kZUxpc3RCZWhhdmlvciA9IHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKF8sIHByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRFbGVtZW50VmFsdWUoKVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHByb3BlcnR5KSB8fCBwcm9wZXJ0eVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGVsZW1lbnRzID0gbmV3IFByb3h5KGVsZW1lbnRzLCBub2RlTGlzdEJlaGF2aW9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICBcImFkZFJ1bGVcIixcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgYWRkUnVsZURlc2NyaXB0b3IsIHt2YWx1ZTogcHJveHlBZGRSdWxlfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgIFwiaW5zZXJ0UnVsZVwiLFxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBpbnNlcnRSdWxlRGVzY3JpcHRvciwge3ZhbHVlOiBwcm94eUluc2VydFJ1bGV9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgXCJkZWxldGVSdWxlXCIsXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGRlbGV0ZVJ1bGVEZXNjcmlwdG9yLCB7dmFsdWU6IHByb3h5RGVsZXRlUnVsZX0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICBcInJlbW92ZVJ1bGVcIixcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcmVtb3ZlUnVsZURlc2NyaXB0b3IsIHt2YWx1ZTogcHJveHlSZW1vdmVSdWxlfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChlbmFibGVTdHlsZVNoZWV0c1Byb3h5KSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgIERvY3VtZW50LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgIFwic3R5bGVTaGVldHNcIixcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGRvY3VtZW50U3R5bGVTaGVldHNEZXNjcmlwdG9yLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBwcm94eURvY3VtZW50U3R5bGVTaGVldHNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG91bGRXcmFwSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICBcImdldEVsZW1lbnRzQnlUYWdOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBnZXRFbGVtZW50c0J5VGFnTmFtZURlc2NyaXB0b3IsIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJveHlHZXRFbGVtZW50c0J5VGFnTmFtZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIElOU1RBTkNFX0lEID0gZ2VuZXJhdGVVSUQoKTtcclxuICAgIHZhciBzdHlsZU1hbmFnZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgdmFyIGFkb3B0ZWRTdHlsZU1hbmFnZXJzID0gW107XHJcbiAgICB2YXIgZmlsdGVyID0gbnVsbDtcclxuICAgIHZhciBmaXhlcyA9IG51bGw7XHJcbiAgICB2YXIgaXNJRnJhbWUkMSA9IG51bGw7XHJcbiAgICB2YXIgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMgPSBudWxsO1xyXG4gICAgdmFyIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMgPSBudWxsO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVTdHlsZShjbGFzc05hbWUsIHJvb3QpIHtcclxuICAgICAgICBpZiAocm9vdCA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIHJvb3QgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZWxlbWVudCA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoY2xhc3NOYW1lKSk7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXJcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICBlbGVtZW50Lm1lZGlhID0gXCJzY3JlZW5cIjtcclxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVTY3JpcHQoY2xhc3NOYW1lLCByb290KSB7XHJcbiAgICAgICAgaWYgKHJvb3QgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICByb290ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KGNsYXNzTmFtZSkpO1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlclwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgdmFyIG5vZGVQb3NpdGlvbldhdGNoZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKG5vZGUsIGFsaWFzKSB7XHJcbiAgICAgICAgbm9kZVBvc2l0aW9uV2F0Y2hlcnMuaGFzKGFsaWFzKSAmJlxyXG4gICAgICAgICAgICBub2RlUG9zaXRpb25XYXRjaGVycy5nZXQoYWxpYXMpLnN0b3AoKTtcclxuICAgICAgICBub2RlUG9zaXRpb25XYXRjaGVycy5zZXQoYWxpYXMsIHdhdGNoRm9yTm9kZVBvc2l0aW9uKG5vZGUsIFwicGFyZW50XCIpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BTdHlsZVBvc2l0aW9uV2F0Y2hlcnMoKSB7XHJcbiAgICAgICAgZm9yRWFjaChub2RlUG9zaXRpb25XYXRjaGVycy52YWx1ZXMoKSwgZnVuY3Rpb24gKHdhdGNoZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdhdGNoZXIuc3RvcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5vZGVQb3NpdGlvbldhdGNoZXJzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTdGF0aWNTdHlsZU92ZXJyaWRlcygpIHtcclxuICAgICAgICB2YXIgZmFsbGJhY2tTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXHJcbiAgICAgICAgICAgIFwiZGFya3JlYWRlci0tZmFsbGJhY2tcIixcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICApO1xyXG4gICAgICAgIGZhbGxiYWNrU3R5bGUudGV4dENvbnRlbnQgPSBnZXRNb2RpZmllZEZhbGxiYWNrU3R5bGUoZmlsdGVyLCB7XHJcbiAgICAgICAgICAgIHN0cmljdDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGZhbGxiYWNrU3R5bGUsIGRvY3VtZW50LmhlYWQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKGZhbGxiYWNrU3R5bGUsIFwiZmFsbGJhY2tcIik7XHJcbiAgICAgICAgdmFyIHVzZXJBZ2VudFN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXVzZXItYWdlbnRcIik7XHJcbiAgICAgICAgdXNlckFnZW50U3R5bGUudGV4dENvbnRlbnQgPSBnZXRNb2RpZmllZFVzZXJBZ2VudFN0eWxlKFxyXG4gICAgICAgICAgICBmaWx0ZXIsXHJcbiAgICAgICAgICAgIGlzSUZyYW1lJDEsXHJcbiAgICAgICAgICAgIGZpbHRlci5zdHlsZVN5c3RlbUNvbnRyb2xzXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZSh1c2VyQWdlbnRTdHlsZSwgZmFsbGJhY2tTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKHVzZXJBZ2VudFN0eWxlLCBcInVzZXItYWdlbnRcIik7XHJcbiAgICAgICAgdmFyIHRleHRTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS10ZXh0XCIpO1xyXG4gICAgICAgIGlmIChmaWx0ZXIudXNlRm9udCB8fCBmaWx0ZXIudGV4dFN0cm9rZSA+IDApIHtcclxuICAgICAgICAgICAgdGV4dFN0eWxlLnRleHRDb250ZW50ID0gY3JlYXRlVGV4dFN0eWxlKGZpbHRlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dFN0eWxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUodGV4dFN0eWxlLCBmYWxsYmFja1N0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIodGV4dFN0eWxlLCBcInRleHRcIik7XHJcbiAgICAgICAgdmFyIGludmVydFN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLWludmVydFwiKTtcclxuICAgICAgICBpZiAoZml4ZXMgJiYgQXJyYXkuaXNBcnJheShmaXhlcy5pbnZlcnQpICYmIGZpeGVzLmludmVydC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGludmVydFN0eWxlLnRleHRDb250ZW50ID0gW1xyXG4gICAgICAgICAgICAgICAgXCJcIi5jb25jYXQoZml4ZXMuaW52ZXJ0LmpvaW4oXCIsIFwiKSwgXCIge1wiKSxcclxuICAgICAgICAgICAgICAgIFwiICAgIGZpbHRlcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIGdldENTU0ZpbHRlclZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZmlsdGVyKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhc3Q6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1vZGUgPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWx0ZXIuY29udHJhc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbGFtcChmaWx0ZXIuY29udHJhc3QgLSAxMCwgMCwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIFwifVwiXHJcbiAgICAgICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnZlcnRTdHlsZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGludmVydFN0eWxlLCB0ZXh0U3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcihpbnZlcnRTdHlsZSwgXCJpbnZlcnRcIik7XHJcbiAgICAgICAgdmFyIGlubGluZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLWlubGluZVwiKTtcclxuICAgICAgICBpbmxpbmVTdHlsZS50ZXh0Q29udGVudCA9IGdldElubGluZU92ZXJyaWRlU3R5bGUoKTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShpbmxpbmVTdHlsZSwgaW52ZXJ0U3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcihpbmxpbmVTdHlsZSwgXCJpbmxpbmVcIik7XHJcbiAgICAgICAgdmFyIG92ZXJyaWRlU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tb3ZlcnJpZGVcIik7XHJcbiAgICAgICAgb3ZlcnJpZGVTdHlsZS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIGZpeGVzICYmIGZpeGVzLmNzcyA/IHJlcGxhY2VDU1NUZW1wbGF0ZXMoZml4ZXMuY3NzKSA6IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChvdmVycmlkZVN0eWxlKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIob3ZlcnJpZGVTdHlsZSwgXCJvdmVycmlkZVwiKTtcclxuICAgICAgICB2YXIgdmFyaWFibGVTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS12YXJpYWJsZXNcIik7XHJcbiAgICAgICAgdmFyIHNlbGVjdGlvbkNvbG9ycyA9IGdldFNlbGVjdGlvbkNvbG9yKGZpbHRlcik7XHJcbiAgICAgICAgdmFyIGRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3IgPSBmaWx0ZXIuZGFya1NjaGVtZUJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgZGFya1NjaGVtZVRleHRDb2xvciA9IGZpbHRlci5kYXJrU2NoZW1lVGV4dENvbG9yLFxyXG4gICAgICAgICAgICBsaWdodFNjaGVtZUJhY2tncm91bmRDb2xvciA9IGZpbHRlci5saWdodFNjaGVtZUJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgbGlnaHRTY2hlbWVUZXh0Q29sb3IgPSBmaWx0ZXIubGlnaHRTY2hlbWVUZXh0Q29sb3IsXHJcbiAgICAgICAgICAgIG1vZGUgPSBmaWx0ZXIubW9kZTtcclxuICAgICAgICB2YXIgc2NoZW1lQmFja2dyb3VuZENvbG9yID1cclxuICAgICAgICAgICAgbW9kZSA9PT0gMCA/IGxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yIDogZGFya1NjaGVtZUJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB2YXIgc2NoZW1lVGV4dENvbG9yID1cclxuICAgICAgICAgICAgbW9kZSA9PT0gMCA/IGxpZ2h0U2NoZW1lVGV4dENvbG9yIDogZGFya1NjaGVtZVRleHRDb2xvcjtcclxuICAgICAgICBzY2hlbWVCYWNrZ3JvdW5kQ29sb3IgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgIHBhcnNlQ29sb3JXaXRoQ2FjaGUoc2NoZW1lQmFja2dyb3VuZENvbG9yKSxcclxuICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzY2hlbWVUZXh0Q29sb3IgPSBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgIHBhcnNlQ29sb3JXaXRoQ2FjaGUoc2NoZW1lVGV4dENvbG9yKSxcclxuICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXJpYWJsZVN0eWxlLnRleHRDb250ZW50ID0gW1xyXG4gICAgICAgICAgICBcIjpyb290IHtcIixcclxuICAgICAgICAgICAgXCIgICAtLWRhcmtyZWFkZXItbmV1dHJhbC1iYWNrZ3JvdW5kOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBzY2hlbWVCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBcIjtcIlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBcIiAgIC0tZGFya3JlYWRlci1uZXV0cmFsLXRleHQ6IFwiLmNvbmNhdChzY2hlbWVUZXh0Q29sb3IsIFwiO1wiKSxcclxuICAgICAgICAgICAgXCIgICAtLWRhcmtyZWFkZXItc2VsZWN0aW9uLWJhY2tncm91bmQ6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbG9ycy5iYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBcIjtcIlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBcIiAgIC0tZGFya3JlYWRlci1zZWxlY3Rpb24tdGV4dDogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29sb3JzLmZvcmVncm91bmRDb2xvclNlbGVjdGlvbixcclxuICAgICAgICAgICAgICAgIFwiO1wiXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIFwifVwiXHJcbiAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKHZhcmlhYmxlU3R5bGUsIGlubGluZVN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIodmFyaWFibGVTdHlsZSwgXCJ2YXJpYWJsZXNcIik7XHJcbiAgICAgICAgdmFyIHJvb3RWYXJzU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tcm9vdC12YXJzXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKHJvb3RWYXJzU3R5bGUsIHZhcmlhYmxlU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHZhciBpbmplY3RQcm94eUFyZyA9ICEoZml4ZXMgJiYgZml4ZXMuZGlzYWJsZVN0eWxlU2hlZXRzUHJveHkpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHByb3h5U2NyaXB0ID0gY3JlYXRlT3JVcGRhdGVTY3JpcHQoXCJkYXJrcmVhZGVyLS1wcm94eVwiKTtcclxuICAgICAgICAgICAgcHJveHlTY3JpcHQuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgXCIoXCIuY29uY2F0KGluamVjdFByb3h5LCBcIikoXCIpLmNvbmNhdChpbmplY3RQcm94eUFyZywgXCIpXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKHByb3h5U2NyaXB0LCByb290VmFyc1N0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgcHJveHlTY3JpcHQucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHNoYWRvd1Jvb3RzV2l0aE92ZXJyaWRlcyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKHJvb3QpIHtcclxuICAgICAgICB2YXIgaW5saW5lU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0taW5saW5lXCIsIHJvb3QpO1xyXG4gICAgICAgIGlubGluZVN0eWxlLnRleHRDb250ZW50ID0gZ2V0SW5saW5lT3ZlcnJpZGVTdHlsZSgpO1xyXG4gICAgICAgIHJvb3QuaW5zZXJ0QmVmb3JlKGlubGluZVN0eWxlLCByb290LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIHZhciBvdmVycmlkZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLW92ZXJyaWRlXCIsIHJvb3QpO1xyXG4gICAgICAgIG92ZXJyaWRlU3R5bGUudGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICBmaXhlcyAmJiBmaXhlcy5jc3MgPyByZXBsYWNlQ1NTVGVtcGxhdGVzKGZpeGVzLmNzcykgOiBcIlwiO1xyXG4gICAgICAgIHJvb3QuaW5zZXJ0QmVmb3JlKG92ZXJyaWRlU3R5bGUsIGlubGluZVN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICB2YXIgaW52ZXJ0U3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0taW52ZXJ0XCIsIHJvb3QpO1xyXG4gICAgICAgIGlmIChmaXhlcyAmJiBBcnJheS5pc0FycmF5KGZpeGVzLmludmVydCkgJiYgZml4ZXMuaW52ZXJ0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaW52ZXJ0U3R5bGUudGV4dENvbnRlbnQgPSBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLmNvbmNhdChmaXhlcy5pbnZlcnQuam9pbihcIiwgXCIpLCBcIiB7XCIpLFxyXG4gICAgICAgICAgICAgICAgXCIgICAgZmlsdGVyOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q1NTRmlsdGVyVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fYXNzaWduKF9fYXNzaWduKHt9LCBmaWx0ZXIpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFzdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubW9kZSA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpbHRlci5jb250cmFzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsYW1wKGZpbHRlci5jb250cmFzdCAtIDEwLCAwLCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgXCJ9XCJcclxuICAgICAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGludmVydFN0eWxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm9vdC5pbnNlcnRCZWZvcmUoaW52ZXJ0U3R5bGUsIG92ZXJyaWRlU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNoYWRvd1Jvb3RzV2l0aE92ZXJyaWRlcy5hZGQocm9vdCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQ1NTVGVtcGxhdGVzKCRjc3NUZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuICRjc3NUZXh0LnJlcGxhY2UoL1xcJHsoLis/KX0vZywgZnVuY3Rpb24gKF8sICRjb2xvcikge1xyXG4gICAgICAgICAgICB2YXIgY29sb3IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKCRjb2xvcik7XHJcbiAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUNvbG9yKGNvbG9yLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAkY29sb3I7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhbkZhbGxiYWNrU3R5bGUoKSB7XHJcbiAgICAgICAgdmFyIGZhbGxiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1mYWxsYmFja1wiKTtcclxuICAgICAgICBpZiAoZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgZmFsbGJhY2sudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUR5bmFtaWNTdHlsZU92ZXJyaWRlcygpIHtcclxuICAgICAgICBjYW5jZWxSZW5kZXJpbmcoKTtcclxuICAgICAgICB2YXIgYWxsU3R5bGVzID0gZ2V0TWFuYWdlYWJsZVN0eWxlcyhkb2N1bWVudCk7XHJcbiAgICAgICAgdmFyIG5ld01hbmFnZXJzID0gYWxsU3R5bGVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXN0eWxlTWFuYWdlcnMuaGFzKHN0eWxlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVNYW5hZ2VyKHN0eWxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3TWFuYWdlcnNcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIuZGV0YWlscyh7c2Vjb25kUm91bmQ6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGRldGFpbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldGFpbCAmJiBkZXRhaWwucnVsZXMubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGRldGFpbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhkZXRhaWwucnVsZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGFudHMoKTtcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZS5zZXRPblJvb3RWYXJpYWJsZUNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLnB1dFJvb3RWYXJzKFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLXJvb3QtdmFyc1wiKSxcclxuICAgICAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLnB1dFJvb3RWYXJzKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tcm9vdC12YXJzXCIpLFxyXG4gICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIHN0eWxlTWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlci5yZW5kZXIoZmlsdGVyLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGxvYWRpbmdTdHlsZXMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjbGVhbkZhbGxiYWNrU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3TWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlci53YXRjaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBpbmxpbmVTdHlsZUVsZW1lbnRzID0gdG9BcnJheShcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChJTkxJTkVfU1RZTEVfU0VMRUNUT1IpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBmdW5jdGlvbiAoaG9zdCkge1xyXG4gICAgICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhob3N0LnNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBob3N0LnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgIElOTElORV9TVFlMRV9TRUxFQ1RPUlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcHVzaChpbmxpbmVTdHlsZUVsZW1lbnRzLCBlbGVtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpbmxpbmVTdHlsZUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvdmVycmlkZUlubGluZVN0eWxlKFxyXG4gICAgICAgICAgICAgICAgZWwsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVkSW5saW5lU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBoYW5kbGVBZG9wdGVkU3R5bGVTaGVldHMoZG9jdW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdmFyIGxvYWRpbmdTdHlsZXNDb3VudGVyID0gMDtcclxuICAgIHZhciBsb2FkaW5nU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFuYWdlcihlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGxvYWRpbmdTdHlsZUlkID0gKytsb2FkaW5nU3R5bGVzQ291bnRlcjtcclxuICAgICAgICBmdW5jdGlvbiBsb2FkaW5nU3RhcnQoKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNET01SZWFkeSgpIHx8ICFkaWREb2N1bWVudFNob3dVcCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZ1N0eWxlcy5hZGQobG9hZGluZ1N0eWxlSWQpO1xyXG4gICAgICAgICAgICAgICAgbG9nSW5mbyhcclxuICAgICAgICAgICAgICAgICAgICBcIkN1cnJlbnQgYW1vdW50IG9mIHN0eWxlcyBsb2FkaW5nOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdTdHlsZXMuc2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmFsbGJhY2tTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIuZGFya3JlYWRlci0tZmFsbGJhY2tcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmICghZmFsbGJhY2tTdHlsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrU3R5bGUudGV4dENvbnRlbnQgPSBnZXRNb2RpZmllZEZhbGxiYWNrU3R5bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0cmljdDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBsb2FkaW5nRW5kKCkge1xyXG4gICAgICAgICAgICBsb2FkaW5nU3R5bGVzLmRlbGV0ZShsb2FkaW5nU3R5bGVJZCk7XHJcbiAgICAgICAgICAgIGxvZ0luZm8oXHJcbiAgICAgICAgICAgICAgICBcIlJlbW92ZWQgbG9hZGluZ1N0eWxlIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChsb2FkaW5nU3R5bGVJZCwgXCIsIG5vdyBhd2FpdGluZzogXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChsb2FkaW5nU3R5bGVzLnNpemUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChsb2FkaW5nU3R5bGVzLnNpemUgPT09IDAgJiYgaXNET01SZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhbkZhbGxiYWNrU3R5bGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIHZhciBkZXRhaWxzID0gbWFuYWdlci5kZXRhaWxzKHtzZWNvbmRSb3VuZDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBpZiAoIWRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRSdWxlc0Zvck1hdGNoaW5nKGRldGFpbHMucnVsZXMpO1xyXG4gICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGFudHMoKTtcclxuICAgICAgICAgICAgbWFuYWdlci5yZW5kZXIoZmlsdGVyLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gbWFuYWdlU3R5bGUoZWxlbWVudCwge1xyXG4gICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZSxcclxuICAgICAgICAgICAgbG9hZGluZ1N0YXJ0OiBsb2FkaW5nU3RhcnQsXHJcbiAgICAgICAgICAgIGxvYWRpbmdFbmQ6IGxvYWRpbmdFbmRcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdHlsZU1hbmFnZXJzLnNldChlbGVtZW50LCBtYW5hZ2VyKTtcclxuICAgICAgICByZXR1cm4gbWFuYWdlcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU1hbmFnZXIoZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gc3R5bGVNYW5hZ2Vycy5nZXQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgbWFuYWdlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHN0eWxlTWFuYWdlcnMuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciB0aHJvdHRsZWRSZW5kZXJBbGxTdHlsZXMgPSB0aHJvdHRsZShmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBzdHlsZU1hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIucmVuZGVyKGZpbHRlciwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFkb3B0ZWRTdHlsZU1hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIucmVuZGVyKGZpbHRlciwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHZhciBjYW5jZWxSZW5kZXJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhyb3R0bGVkUmVuZGVyQWxsU3R5bGVzLmNhbmNlbCgpO1xyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIG9uRE9NUmVhZHkoKSB7XHJcbiAgICAgICAgaWYgKGxvYWRpbmdTdHlsZXMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjbGVhbkZhbGxiYWNrU3R5bGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lciA9IG51bGw7XHJcbiAgICB2YXIgZGlkRG9jdW1lbnRTaG93VXAgPSAhZG9jdW1lbnQuaGlkZGVuO1xyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JEb2N1bWVudFZpc2liaWxpdHkoY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgYWxyZWFkeVdhdGNoaW5nID0gQm9vbGVhbihkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuaGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JEb2N1bWVudFZpc2liaWxpdHkoKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICBkaWREb2N1bWVudFNob3dVcCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghYWxyZWFkeVdhdGNoaW5nKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHljaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yRG9jdW1lbnRWaXNpYmlsaXR5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwidmlzaWJpbGl0eWNoYW5nZVwiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGhlbWVBbmRXYXRjaEZvclVwZGF0ZXMoKSB7XHJcbiAgICAgICAgY3JlYXRlU3RhdGljU3R5bGVPdmVycmlkZXMoKTtcclxuICAgICAgICBmdW5jdGlvbiBydW5EeW5hbWljU3R5bGUoKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUR5bmFtaWNTdHlsZU92ZXJyaWRlcygpO1xyXG4gICAgICAgICAgICB3YXRjaEZvclVwZGF0ZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmhpZGRlbiAmJiAhZmlsdGVyLmltbWVkaWF0ZU1vZGlmeSkge1xyXG4gICAgICAgICAgICB3YXRjaEZvckRvY3VtZW50VmlzaWJpbGl0eShydW5EeW5hbWljU3R5bGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJ1bkR5bmFtaWNTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGFuZ2VNZXRhVGhlbWVDb2xvcldoZW5BdmFpbGFibGUoZmlsdGVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkb3B0ZWRTdHlsZVNoZWV0cyhub2RlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZS5hZG9wdGVkU3R5bGVTaGVldHMpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5hZG9wdGVkU3R5bGVTaGVldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdNYW5nZXIgPSBjcmVhdGVBZG9wdGVkU3R5bGVTaGVldE92ZXJyaWRlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkb3B0ZWRTdHlsZU1hbmFnZXJzLnB1c2gobmV3TWFuZ2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNYW5nZXIucmVuZGVyKGZpbHRlciwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JVcGRhdGVzKCkge1xyXG4gICAgICAgIHZhciBtYW5hZ2VkU3R5bGVzID0gQXJyYXkuZnJvbShzdHlsZU1hbmFnZXJzLmtleXMoKSk7XHJcbiAgICAgICAgd2F0Y2hGb3JTdHlsZUNoYW5nZXMoXHJcbiAgICAgICAgICAgIG1hbmFnZWRTdHlsZXMsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNyZWF0ZWQgPSBfYS5jcmVhdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSBfYS51cGRhdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWQgPSBfYS5yZW1vdmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVkID0gX2EubW92ZWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVzVG9SZW1vdmUgPSByZW1vdmVkO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlc1RvTWFuYWdlID0gY3JlYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQodXBkYXRlZClcclxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KG1vdmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhc3R5bGVNYW5hZ2Vycy5oYXMoc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlc1RvUmVzdG9yZSA9IG1vdmVkLmZpbHRlcihmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGVNYW5hZ2Vycy5oYXMoc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZXNUb1JlbW92ZS5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW1vdmVNYW5hZ2VyKHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld01hbmFnZXJzID0gc3R5bGVzVG9NYW5hZ2UubWFwKGZ1bmN0aW9uIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVNYW5hZ2VyKHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbmV3TWFuYWdlcnNcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYW5hZ2VyLmRldGFpbHMoe3NlY29uZFJvdW5kOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZGV0YWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXRhaWwgJiYgZGV0YWlsLnJ1bGVzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZGV0YWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcoZGV0YWlsLnJ1bGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kYW50cygpO1xyXG4gICAgICAgICAgICAgICAgbmV3TWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYW5hZ2VyLnJlbmRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG5ld01hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFuYWdlci53YXRjaCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZXNUb1Jlc3RvcmUuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGVNYW5hZ2Vycy5nZXQoc3R5bGUpLnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoc2hhZG93Um9vdCkge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXMoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVBZG9wdGVkU3R5bGVTaGVldHMoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHdhdGNoRm9ySW5saW5lU3R5bGVzKFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVJbmxpbmVTdHlsZShcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW5saW5lU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZUF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlQXR0ci5pbmNsdWRlcyhcIi0tXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kYW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5wdXRSb290VmFycyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi5kYXJrcmVhZGVyLS1yb290LXZhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHJvb3QpIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlubGluZVN0eWxlRWxlbWVudHMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgSU5MSU5FX1NUWUxFX1NFTEVDVE9SXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlubGluZVN0eWxlRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvckVhY2goaW5saW5lU3R5bGVFbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvdmVycmlkZUlubGluZVN0eWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW5saW5lU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYWRkRE9NUmVhZHlMaXN0ZW5lcihvbkRPTVJlYWR5KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclVwZGF0ZXMoKSB7XHJcbiAgICAgICAgc3R5bGVNYW5hZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYW5hZ2VyLnBhdXNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcFN0eWxlUG9zaXRpb25XYXRjaGVycygpO1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvclN0eWxlQ2hhbmdlcygpO1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvcklubGluZVN0eWxlcygpO1xyXG4gICAgICAgIHJlbW92ZURPTVJlYWR5TGlzdGVuZXIob25ET01SZWFkeSk7XHJcbiAgICAgICAgY2xlYW5SZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICAgIHZhciBtZXRhT2JzZXJ2ZXI7XHJcbiAgICBmdW5jdGlvbiBhZGRNZXRhTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgbWV0YU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGFya3JlYWRlci1sb2NrXCJdJykpIHtcclxuICAgICAgICAgICAgICAgIG1ldGFPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVEeW5hbWljVGhlbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1ldGFPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmhlYWQsIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURhcmtSZWFkZXJJbnN0YW5jZU1hcmtlcigpIHtcclxuICAgICAgICB2YXIgbWV0YUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcclxuICAgICAgICBtZXRhRWxlbWVudC5uYW1lID0gXCJkYXJrcmVhZGVyXCI7XHJcbiAgICAgICAgbWV0YUVsZW1lbnQuY29udGVudCA9IElOU1RBTkNFX0lEO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNBbm90aGVyRGFya1JlYWRlckluc3RhbmNlQWN0aXZlKCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyLWxvY2tcIl0nKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyXCJdJyk7XHJcbiAgICAgICAgaWYgKG1ldGEpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGEuY29udGVudCAhPT0gSU5TVEFOQ0VfSUQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlRGFya1JlYWRlckluc3RhbmNlTWFya2VyKCk7XHJcbiAgICAgICAgYWRkTWV0YUxpc3RlbmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVEeW5hbWljVGhlbWUoXHJcbiAgICAgICAgZmlsdGVyQ29uZmlnLFxyXG4gICAgICAgIGR5bmFtaWNUaGVtZUZpeGVzLFxyXG4gICAgICAgIGlmcmFtZVxyXG4gICAgKSB7XHJcbiAgICAgICAgZmlsdGVyID0gZmlsdGVyQ29uZmlnO1xyXG4gICAgICAgIGZpeGVzID0gZHluYW1pY1RoZW1lRml4ZXM7XHJcbiAgICAgICAgaWYgKGZpeGVzKSB7XHJcbiAgICAgICAgICAgIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzID0gQXJyYXkuaXNBcnJheShcclxuICAgICAgICAgICAgICAgIGZpeGVzLmlnbm9yZUltYWdlQW5hbHlzaXNcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgPyBmaXhlcy5pZ25vcmVJbWFnZUFuYWx5c2lzXHJcbiAgICAgICAgICAgICAgICA6IFtdO1xyXG4gICAgICAgICAgICBpZ25vcmVkSW5saW5lU2VsZWN0b3JzID0gQXJyYXkuaXNBcnJheShmaXhlcy5pZ25vcmVJbmxpbmVTdHlsZSlcclxuICAgICAgICAgICAgICAgID8gZml4ZXMuaWdub3JlSW5saW5lU3R5bGVcclxuICAgICAgICAgICAgICAgIDogW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMgPSBbXTtcclxuICAgICAgICAgICAgaWdub3JlZElubGluZVNlbGVjdG9ycyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsdGVyLmltbWVkaWF0ZU1vZGlmeSkge1xyXG4gICAgICAgICAgICBzZXRJc0RPTVJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNJRnJhbWUkMSA9IGlmcmFtZTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuaGVhZCkge1xyXG4gICAgICAgICAgICBpZiAoaXNBbm90aGVyRGFya1JlYWRlckluc3RhbmNlQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgXCJkYXRhLWRhcmtyZWFkZXItbW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkeW5hbWljXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwiZGF0YS1kYXJrcmVhZGVyLXNjaGVtZVwiLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyLm1vZGUgPyBcImRhcmtcIiA6IFwiZGltbWVkXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY3JlYXRlVGhlbWVBbmRXYXRjaEZvclVwZGF0ZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWlzRmlyZWZveCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZhbGxiYWNrU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tZmFsbGJhY2tcIik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFsbGJhY2tTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICBmYWxsYmFja1N0eWxlLnRleHRDb250ZW50ID0gZ2V0TW9kaWZpZWRGYWxsYmFja1N0eWxlKGZpbHRlciwge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmljdDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGhlYWRPYnNlcnZlcl8xID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmhlYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkT2JzZXJ2ZXJfMS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQW5vdGhlckRhcmtSZWFkZXJJbnN0YW5jZUFjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUR5bmFtaWNUaGVtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRoZW1lQW5kV2F0Y2hGb3JVcGRhdGVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBoZWFkT2JzZXJ2ZXJfMS5vYnNlcnZlKGRvY3VtZW50LCB7Y2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJveHkoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2NsZWFuVXBcIikpO1xyXG4gICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLXByb3h5XCIpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUR5bmFtaWNUaGVtZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1kYXJrcmVhZGVyLW1vZGVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtZGFya3JlYWRlci1zY2hlbWVcIik7XHJcbiAgICAgICAgY2xlYW5EeW5hbWljVGhlbWVDYWNoZSgpO1xyXG4gICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1mYWxsYmFja1wiKSk7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmhlYWQpIHtcclxuICAgICAgICAgICAgcmVzdG9yZU1ldGFUaGVtZUNvbG9yKCk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLXVzZXItYWdlbnRcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS10ZXh0XCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0taW52ZXJ0XCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0taW5saW5lXCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tb3ZlcnJpZGVcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS12YXJpYWJsZXNcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1yb290LXZhcnNcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGFya3JlYWRlclwiXScpKTtcclxuICAgICAgICAgICAgcmVtb3ZlUHJveHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hhZG93Um9vdHNXaXRoT3ZlcnJpZGVzLmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShyb290LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0taW5saW5lXCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShyb290LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tb3ZlcnJpZGVcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNoYWRvd1Jvb3RzV2l0aE92ZXJyaWRlcy5jbGVhcigpO1xyXG4gICAgICAgIGZvckVhY2goc3R5bGVNYW5hZ2Vycy5rZXlzKCksIGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVtb3ZlTWFuYWdlcihlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9hZGluZ1N0eWxlcy5jbGVhcigpO1xyXG4gICAgICAgIGNsZWFuTG9hZGluZ0xpbmtzKCk7XHJcbiAgICAgICAgZm9yRWFjaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhcmtyZWFkZXJcIiksIHJlbW92ZU5vZGUpO1xyXG4gICAgICAgIGFkb3B0ZWRTdHlsZU1hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgbWFuYWdlci5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWRvcHRlZFN0eWxlTWFuYWdlcnMuc3BsaWNlKDApO1xyXG4gICAgICAgIG1ldGFPYnNlcnZlciAmJiBtZXRhT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYW5EeW5hbWljVGhlbWVDYWNoZSgpIHtcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZS5jbGVhcigpO1xyXG4gICAgICAgIHBhcnNlZFVSTENhY2hlLmNsZWFyKCk7XHJcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9yRG9jdW1lbnRWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgY2FuY2VsUmVuZGVyaW5nKCk7XHJcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9yVXBkYXRlcygpO1xyXG4gICAgICAgIGNsZWFuTW9kaWZpY2F0aW9uQ2FjaGUoKTtcclxuICAgICAgICBjbGVhckNvbG9yQ2FjaGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYmxvYlJlZ2V4ID0gL3VybFxcKFxcXCIoYmxvYlxcOi4qPylcXFwiXFwpL2c7XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQmxvYnModGV4dCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHByb21pc2VzLCBkYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRNYXRjaGVzKGJsb2JSZWdleCwgdGV4dCwgMSkuZm9yRWFjaChmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGxvYWRBc0RhdGFVUkwodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIFByb21pc2UuYWxsKHByb21pc2VzKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQucmVwbGFjZShibG9iUmVnZXgsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3VybChcIicuY29uY2F0KGRhdGEuc2hpZnQoKSwgJ1wiKScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgYmFubmVyID1cclxuICAgICAgICAnLypcXG4gICAgICAgICAgICAgICAgICAgICAgICBfX19fX19fXFxuICAgICAgICAgICAgICAgICAgICAgICAvICAgICAgIFxcXFxcXG4gICAgICAgICAgICAgICAgICAgICAgLj09LiAgICAuPT0uXFxuICAgICAgICAgICAgICAgICAgICAgKCggICkpPT0oKCAgKSlcXG4gICAgICAgICAgICAgICAgICAgIC8gXCI9PVwiICAgIFwiPT1cIlxcXFxcXG4gICAgICAgICAgICAgICAgICAgL19fX198fCB8fCB8fF9fX1xcXFxcXG4gICAgICAgX19fX19fX18gICAgIF9fX18gICAgX19fX19fX18gIF9fXyAgICBfX19cXG4gICAgICAgfCAgX19fICBcXFxcICAgLyAgICBcXFxcICAgfCAgX19fICBcXFxcIHwgIHwgIC8gIC9cXG4gICAgICAgfCAgfCAgXFxcXCAgXFxcXCAvICAvXFxcXCAgXFxcXCAgfCAgfCAgXFxcXCAgXFxcXHwgIHxfLyAgL1xcbiAgICAgICB8ICB8ICAgKSAgLyAgL19fXFxcXCAgXFxcXCB8ICB8X18vICAvfCAgX19fICBcXFxcXFxuICAgICAgIHwgIHxfXy8gIC8gIF9fX19fXyAgXFxcXHwgIF9fX18gIFxcXFx8ICB8ICBcXFxcICBcXFxcXFxuX19fX19fX3xfX19fX19fL19fLyBfX19fIFxcXFxfX1xcXFxfX3xfX19cXFxcX19cXFxcX198X19fXFxcXF9fXFxcXF9fX19cXG58ICBfX18gIFxcXFwgfCAgX19fXy8gLyAgICBcXFxcICAgfCAgX19fICBcXFxcIHwgIF9fX198ICBfX18gIFxcXFxcXG58ICB8ICBcXFxcICBcXFxcfCAgfF9fXyAvICAvXFxcXCAgXFxcXCAgfCAgfCAgXFxcXCAgXFxcXHwgIHxfX198ICB8ICBcXFxcICBcXFxcXFxufCAgfF9fLyAgL3wgIF9fX18vICAvX19cXFxcICBcXFxcIHwgIHwgICApICB8ICBfX19ffCAgfF9fLyAgL1xcbnwgIF9fX18gIFxcXFx8ICB8X18vICBfX19fX18gIFxcXFx8ICB8X18vICAvfCAgfF9fX3wgIF9fX18gIFxcXFxcXG58X198ICAgXFxcXF9fXFxcXF9fX18vX18vICAgICAgXFxcXF9fXFxcXF9fX19fX18vIHxfX19fX198X198ICAgXFxcXF9fXFxcXFxcbiAgICAgICAgICAgICAgICBodHRwczovL2RhcmtyZWFkZXIub3JnXFxuKi9cXG5cXG4vKiEgRGFyayByZWFkZXIgZ2VuZXJhdGVkIENTUyB8IExpY2Vuc2VkIHVuZGVyIE1JVCBodHRwczovL2dpdGh1Yi5jb20vZGFya3JlYWRlci9kYXJrcmVhZGVyL2Jsb2IvbWFpbi9MSUNFTlNFICovXFxuJztcclxuICAgIGZ1bmN0aW9uIGNvbGxlY3RDU1MoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRTdGF0aWNDU1Moc2VsZWN0b3IsIGNvbW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0aWNTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRpY1N0eWxlICYmIHN0YXRpY1N0eWxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzLnB1c2goXCIvKiBcIi5jb25jYXQoY29tbWVudCwgXCIgKi9cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNzcy5wdXNoKHN0YXRpY1N0eWxlLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjc3MucHVzaChcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY3NzLCBtb2RpZmllZENTUywgZm9ybWF0dGVkQ1NTLCBfYSwgX2I7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcyA9IFtiYW5uZXJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0tZmFsbGJhY2tcIiwgXCJGYWxsYmFjayBTdHlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3RhdGljQ1NTKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuZGFya3JlYWRlci0tdXNlci1hZ2VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVc2VyLUFnZW50IFN0eWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3RhdGljQ1NTKFwiLmRhcmtyZWFkZXItLXRleHRcIiwgXCJUZXh0IFN0eWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0taW52ZXJ0XCIsIFwiSW52ZXJ0IFN0eWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRTdGF0aWNDU1MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi5kYXJrcmVhZGVyLS12YXJpYWJsZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmFyaWFibGVzIFN0eWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRDU1MgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhcmtyZWFkZXItLXN5bmNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zaGVldC5jc3NSdWxlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJ1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmNzc1RleHQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZENTUy5wdXNoKHJ1bGUuY3NzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZWRDU1MubGVuZ3RoKSByZXR1cm4gWzMsIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRDU1MgPSBmb3JtYXRDU1MobW9kaWZpZWRDU1Muam9pbihcIlxcblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcy5wdXNoKFwiLyogTW9kaWZpZWQgQ1NTICovXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IChfYSA9IGNzcykucHVzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCByZXBsYWNlQmxvYnMoZm9ybWF0dGVkQ1NTKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5hcHBseShfYSwgW19jLnNlbnQoKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3MucHVzaChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3RhdGljQ1NTKFwiLmRhcmtyZWFkZXItLW92ZXJyaWRlXCIsIFwiT3ZlcnJpZGUgU3R5bGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgY3NzLmpvaW4oXCJcXG5cIildO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaXNEYXJrUmVhZGVyRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgdmFyIGlzSUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KSgpO1xyXG4gICAgZnVuY3Rpb24gZW5hYmxlKHRoZW1lT3B0aW9ucywgZml4ZXMpIHtcclxuICAgICAgICBpZiAodGhlbWVPcHRpb25zID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgdGhlbWVPcHRpb25zID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaXhlcyA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGZpeGVzID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRoZW1lID0gX19hc3NpZ24oX19hc3NpZ24oe30sIERFRkFVTFRfVEhFTUUpLCB0aGVtZU9wdGlvbnMpO1xyXG4gICAgICAgIGlmICh0aGVtZS5lbmdpbmUgIT09IFRoZW1lRW5naW5lLmR5bmFtaWNUaGVtZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVtZSBlbmdpbmUgaXMgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZU9yVXBkYXRlRHluYW1pY1RoZW1lKHRoZW1lLCBmaXhlcywgaXNJRnJhbWUpO1xyXG4gICAgICAgIGlzRGFya1JlYWRlckVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiBpc0RhcmtSZWFkZXJFbmFibGVkO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGlzYWJsZSgpIHtcclxuICAgICAgICByZW1vdmVEeW5hbWljVGhlbWUoKTtcclxuICAgICAgICBpc0RhcmtSZWFkZXJFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgZGFya1NjaGVtZSA9IG1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpO1xyXG4gICAgdmFyIHN0b3JlID0ge1xyXG4gICAgICAgIHRoZW1lT3B0aW9uczogbnVsbCxcclxuICAgICAgICBmaXhlczogbnVsbFxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbG9yU2NoZW1lKCkge1xyXG4gICAgICAgIGlmIChkYXJrU2NoZW1lLm1hdGNoZXMpIHtcclxuICAgICAgICAgICAgZW5hYmxlKHN0b3JlLnRoZW1lT3B0aW9ucywgc3RvcmUuZml4ZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdXRvKHRoZW1lT3B0aW9ucywgZml4ZXMpIHtcclxuICAgICAgICBpZiAodGhlbWVPcHRpb25zID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgdGhlbWVPcHRpb25zID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaXhlcyA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGZpeGVzID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoZW1lT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdG9yZSA9IHt0aGVtZU9wdGlvbnM6IHRoZW1lT3B0aW9ucywgZml4ZXM6IGZpeGVzfTtcclxuICAgICAgICAgICAgaGFuZGxlQ29sb3JTY2hlbWUoKTtcclxuICAgICAgICAgICAgaWYgKGlzTWF0Y2hNZWRpYUNoYW5nZUV2ZW50TGlzdGVuZXJTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGRhcmtTY2hlbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVDb2xvclNjaGVtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkYXJrU2NoZW1lLmFkZExpc3RlbmVyKGhhbmRsZUNvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpc01hdGNoTWVkaWFDaGFuZ2VFdmVudExpc3RlbmVyU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBkYXJrU2NoZW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlQ29sb3JTY2hlbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGFya1NjaGVtZS5yZW1vdmVMaXN0ZW5lcihoYW5kbGVDb2xvclNjaGVtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGV4cG9ydEdlbmVyYXRlZENTUygpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY29sbGVjdENTUygpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgc2V0RmV0Y2hNZXRob2QgPSBzZXRGZXRjaE1ldGhvZCQxO1xyXG5cclxuICAgIGV4cG9ydHMuYXV0byA9IGF1dG87XHJcbiAgICBleHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xyXG4gICAgZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XHJcbiAgICBleHBvcnRzLmV4cG9ydEdlbmVyYXRlZENTUyA9IGV4cG9ydEdlbmVyYXRlZENTUztcclxuICAgIGV4cG9ydHMuaXNFbmFibGVkID0gaXNFbmFibGVkO1xyXG4gICAgZXhwb3J0cy5zZXRGZXRjaE1ldGhvZCA9IHNldEZldGNoTWV0aG9kO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiB0cnVlfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBkYXJraWZ5IH0gZnJvbSBcIi4vdXRpbC9kclwiO1xuaW1wb3J0IHsgcHJvY2Vzc1RlbXBsYXRlIH0gZnJvbSBcIi4vdXRpbC90ZW1wbGF0ZXNcIjtcblxuXG5pbnRlcmZhY2UgTWFybG93ZUNvbnRyYWN0IHtcbiAgICB0ZW1wbGF0ZTogc3RyaW5nXG4gICAgdGVybXM6IHtba2V5OiBzdHJpbmddOiBudW1iZXJ9XG59XG5cbmludGVyZmFjZSBTYW1wbGVkUm93IHtcbiAgICBvcmFjbGVWYWx1ZTogbnVtYmVyLFxuICAgIGFsaWNlUGF5b3V0OiBudW1iZXIsXG4gICAgYm9iUGF5b3V0OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIENvbnRyYWN0QXBpIHtcbiAgICBzdGF0ZTogTm90ZWJvb2tTdGF0ZVxuICAgIGluamVjdE1hcmxvd2VDb250cmFjdDogKGM6IE1hcmxvd2VDb250cmFjdCwgdXBkYXRlOiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+XG4gICAgc2FtcGxlTWFybG93ZUNvbnRyYWN0OiAoKSA9PiB2b2lkXG4gICAgcGxvdE1hcmxvd2VDb250cmFjdD86IChzYW1wbGU6IFNhbXBsZWRSb3dbXSwgd2hlcmU6IEhUTUxEaXZFbGVtZW50KSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBOb3RlYm9va1N0YXRlIHtcbiAgICBpc01hcmxvd2VDb250cmFjdEdlbmVyYXRlZDogYm9vbGVhblxuICAgIGlzTWFybG93ZUNvbnRyYWN0U2FtcGxlZDogYm9vbGVhblxuICAgIHNhbXBsaW5nSW5Qcm9ncmVzczogYm9vbGVhblxuICAgIHNhbXBsZT86IFNhbXBsZWRSb3dbXVxuICAgIGNvbnRyYWN0PzogTWFybG93ZUNvbnRyYWN0XG4gICAgdGVtcGxhdGU/OiBzdHJpbmdcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBXaW5kb3cgeyBcbiAgICAgICAgZGFya2lmaWVyOiBhbnlcbiAgICAgICAgbWFybG93ZVdpbmRvdz86ICgpID0+IFByb21pc2U8V2luZG93PlxuICAgICAgICBhcGk6IENvbnRyYWN0QXBpXG4gICAgICAgIG1vbmFjbzogYW55XG4gICAgICAgIHRpY2s6IG51bWJlclxuICAgICAgICBhY3RpdmVUaWNrZXI6IG51bWJlclxuICAgIH1cbn1cblxuXG5cbmRhcmtpZnkod2luZG93LmRvY3VtZW50KVxuXG5pZiAod2luZG93Lm1hcmxvd2VXaW5kb3cgIT0gdW5kZWZpbmVkKSB7XG4gICAgd2luZG93Lm1hcmxvd2VXaW5kb3coKS50aGVuKG13ID0+IHtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hcGkgPSB7XG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIGlzTWFybG93ZUNvbnRyYWN0R2VuZXJhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc01hcmxvd2VDb250cmFjdFNhbXBsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNhbXBsaW5nSW5Qcm9ncmVzczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmplY3RNYXJsb3dlQ29udHJhY3Q6IGFzeW5jIChjOiBNYXJsb3dlQ29udHJhY3QsIHVwZGF0ZVN0YXRlID0gdHJ1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLnN0YXRlLmNvbnRyYWN0ID0gY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbWFybG93ZUhvbWUgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmgtMTBcIikgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICBtYXJsb3dlSG9tZT8uY2xpY2soKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBkb250U2F2ZSA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXItbWVkaXVtXCIpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgZG9udFNhdmU/LmNsaWNrKClcblxuICAgICAgICAgICAgICAgIGxldCByYXdcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmFwaS5zdGF0ZS50ZW1wbGF0ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3ID0gYXdhaXQgKGF3YWl0IGZldGNoKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBgL21hcmxvd2Utd29sZnJhbS13ZWJkb2MvY29udHJhY3RzLyR7Yy50ZW1wbGF0ZX0ubWFybG93ZWApKS50ZXh0KClcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFwaS5zdGF0ZS50ZW1wbGF0ZSA9IHJhd1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3ID0gd2luZG93LmFwaS5zdGF0ZS50ZW1wbGF0ZVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGdvVG9FZGl0b3IgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXItNCcpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgZ29Ub0VkaXRvcj8uY2xpY2soKVxuXG5cbiAgICAgICAgICAgICAgICBsZXQgbWVudUJhciA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1iYXJcIikgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICBtZW51QmFyPy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJkaXNwbGF5OiBub25lXCIpXG5cbiAgICAgICAgICAgICAgICBsZXQgbWV0YSA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1zZWNvbmRhcnlcIikgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICBtZXRhPy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJkaXNwbGF5OiBub25lXCIpXG5cbiAgICAgICAgICAgICAgICBsZXQgc3RhdGljQW5hbHlzaXMgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHQtZ3JheS1kYXJrZXN0XCIpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgc3RhdGljQW5hbHlzaXM/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcImRpc3BsYXk6IG5vbmVcIilcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdG9JbmplY3QgPSBwcm9jZXNzVGVtcGxhdGUoYy50ZW1wbGF0ZSwgYy50ZXJtcywgcmF3KVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbXcubW9uYWNvLmVkaXRvci5nZXRNb2RlbHMoKVttdy5tb25hY28uZWRpdG9yLmdldE1vZGVscygpLmxlbmd0aCAtIDJdLmRpc3Bvc2UoKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYXdhaXQgbXcubW9uYWNvLmVkaXRvci5nZXRNb2RlbHMoKVttdy5tb25hY28uZWRpdG9yLmdldE1vZGVscygpLmxlbmd0aCAtIDFdLnNldFZhbHVlKHRvSW5qZWN0KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgbGV0IGdvVG9CbG9ja3MgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAnKT8ucXVlcnlTZWxlY3RvcignLmJ0bicpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgZ29Ub0Jsb2Nrcz8uY2xpY2soKVxuXG4gICAgICAgICAgICAgICAgbGV0IGNhbmNlbCA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBwZXJjYXNlXCIpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgY2FuY2VsPy5jbGljaygpXG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLnN0YXRlLmlzTWFybG93ZUNvbnRyYWN0R2VuZXJhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInN0YXRlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhbXBsZU1hcmxvd2VDb250cmFjdDogYXN5bmMgKCkgPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5hcGkuc3RhdGUuc2FtcGxpbmdJblByb2dyZXNzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hcGkuc3RhdGUuc2FtcGxlID0gW11cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gd2luZG93LmFwaS5zdGF0ZS5jb250cmFjdCEudGVybXMubWluVmFsdWU7IGkgPD0gd2luZG93LmFwaS5zdGF0ZS5jb250cmFjdCEudGVybXMubWF4VmFsdWU7IGkrPTEwMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IHsgLi4ud2luZG93LmFwaS5zdGF0ZS5jb250cmFjdCEsIHRlcm1zOiB7Li4ud2luZG93LmFwaS5zdGF0ZS5jb250cmFjdCEudGVybXN9LCB9XG5cbiAgICAgICAgICAgICAgICAgICAgYy50ZXJtcy5taW5WYWx1ZSA9IGlcbiAgICAgICAgICAgICAgICAgICAgYy50ZXJtcy5tYXhWYWx1ZSA9IGlcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuYXBpLmluamVjdE1hcmxvd2VDb250cmFjdChjLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbmRUb1NpbXVsYXRvciA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpWzFdIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB3aGlsZShzZW5kVG9TaW11bGF0b3JbJ2Rpc2FibGVkJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVdBSVRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCAxMDApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2F3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCAzMDAwKSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRUb1NpbXVsYXRvci5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFydFNpbXVsYXRpb24gPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVsyXSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBzdGFydFNpbXVsYXRpb24uY2xpY2soKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhbGljZURlcG9zaXQgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cy1idG4nKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBhbGljZURlcG9zaXQ/LmNsaWNrKClcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9iRGVwb3NpdCA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzLWJ0bicpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGJvYkRlcG9zaXQ/LmNsaWNrKClcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc2tpcFRvRXhlcmNpc2UgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGx1cy1idG4nKVsyXSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBza2lwVG9FeGVyY2lzZT8uY2xpY2soKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb25maXJtID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXMtYnRuJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybT8uY2xpY2soKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsb2cgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1jb2xzLWRlc2NyaXB0aW9uLWxvY2F0aW9uJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4dHJhY3RCb2JQYXlvZmZPcHQgPSAvVGhlIGNvbnRyYWN0IHBheXMg4oKzIChcXGQrKSBmcm9tIGFjY291bnQgb2YgQm9iIHRvIEJvYiB3YWxsZXQvLmV4ZWMobG9nLmlubmVyVGV4dCk/LlsxXVxuICAgICAgICAgICAgICAgICAgICBsZXQgZXh0cmFjdEFsaWNlUGF5b2ZmT3B0ID0gL1RoZSBjb250cmFjdCBwYXlzIOKCsyAoXFxkKykgZnJvbSBhY2NvdW50IG9mIEFsaWNlIHRvIEFsaWNlIHdhbGxldC8uZXhlYyhsb2cuaW5uZXJUZXh0KT8uWzFdXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2JQYXlvZmYgPSBleHRyYWN0Qm9iUGF5b2ZmT3B0ID09IG51bGwgfHwgTnVtYmVyLmlzTmFOKHBhcnNlSW50KGV4dHJhY3RCb2JQYXlvZmZPcHQpKSA/IDAgOiBwYXJzZUludChleHRyYWN0Qm9iUGF5b2ZmT3B0KVxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxpY2VQYXlvZmYgPSBleHRyYWN0QWxpY2VQYXlvZmZPcHQgPT0gbnVsbCB8fCBOdW1iZXIuaXNOYU4ocGFyc2VJbnQoZXh0cmFjdEFsaWNlUGF5b2ZmT3B0KSkgPyAwIDogcGFyc2VJbnQoZXh0cmFjdEFsaWNlUGF5b2ZmT3B0KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cod2luZG93LmFwaS5zdGF0ZS5zYW1wbGUpXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hcGkuc3RhdGUuc2FtcGxlLnB1c2goe29yYWNsZVZhbHVlOiBpLCBhbGljZVBheW91dDogYWxpY2VQYXlvZmYsIGJvYlBheW91dDogYm9iUGF5b2ZmfSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZFNpbXVsYXRpb24gPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVswXSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBlbmRTaW11bGF0aW9uLmNsaWNrKClcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuYXBpLnN0YXRlLnNhbXBsZSlcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLnN0YXRlLnNhbXBsaW5nSW5Qcm9ncmVzcyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2luZG93LmFwaS5zdGF0ZS5pc01hcmxvd2VDb250cmFjdFNhbXBsZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic3RhdGVcIikpXG4gICAgICAgICAgICAgICAgLy93aW5kb3cuYXBpLmluamVjdE1hcmxvd2VDb250cmFjdCh3aW5kb3cuYXBpLnN0YXRlLmNvbnRyYWN0ISwgZmFsc2UpXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBwb2xsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWwgPSAnaHR0cHM6Ly9hcGkud29sZnJhbWFscGhhLmNvbS92MS9yZXN1bHQ/YXBwaWQ9NldVNkpYLTQ2RVA1VTlBR1gmaT0xJTIwYnRjJTIwdG8lMjB1c2QlMjBudW1iZXInXG4gICAgICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jb3JzcHJveHkuaW8vPycgKyBlbmNvZGVVUklDb21wb25lbnQob3JpZ2luYWwpXG4gICAgXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBmZXRjaCh1cmwpXG4gICAgICAgICAgICBsZXQgcmF3ID0gKGF3YWl0IChhd2FpdCByZXNwb25zZSkudGV4dCgpKVxuICAgICAgICAgICAgbGV0IHJ4ID0gL1xcZCsvZztcbiAgICAgICAgICAgIGxldCByZXMgPSByeC5leGVjKHJhdylcbiAgICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkgd2luZG93LnRpY2sgPSBwYXJzZUludChyZXNbMF0pO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwidGlja1wiKSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHBvbGwoKVxuICAgICAgICBzZXRJbnRlcnZhbChwb2xsLCAxMDAwMClcblxuICAgIH0pXG5cblxuICAgIFxufVxuXG4iLCJpbXBvcnQge1xuICAgIGVuYWJsZSBhcyBlbmFibGVEYXJrTW9kZSxcbiAgICBleHBvcnRHZW5lcmF0ZWRDU1MgYXMgY29sbGVjdENTUyxcbiAgICBzZXRGZXRjaE1ldGhvZCBhcyBzZXRGZXRjaE1ldGhvZFxufSBmcm9tICdkYXJrcmVhZGVyJztcblxuZnVuY3Rpb24gYWRkU3R5bGUoZG9jLCBzdHlsZVN0cmluZykge1xuICAgIGNvbnN0IHN0eWxlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBzdHlsZVN0cmluZztcbiAgICBkb2MuaGVhZC5hcHBlbmQoc3R5bGUpO1xufVxuXG5leHBvcnQgY29uc3QgZGFya2lmeSA9IGFzeW5jIChkb2MpID0+IHtcbiAgICBzZXRGZXRjaE1ldGhvZCh3aW5kb3cuZmV0Y2gpXG5cbiAgICBlbmFibGVEYXJrTW9kZSh7XG4gICAgICAgIGJyaWdodG5lc3M6IDEwMCxcbiAgICAgICAgY29udHJhc3Q6IDkwLFxuICAgICAgICBzZXBpYTogMTAsXG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgQ1NTID0gYXdhaXQgY29sbGVjdENTUygpO1xuICAgIGFkZFN0eWxlKGRvYywgQ1NTKVxuXG59XG5cbmNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSIsImV4cG9ydCBjb25zdCBwcm9jZXNzVGVtcGxhdGUgPSAobmFtZTogc3RyaW5nLCBzdWJzdDoge1trZXk6IHN0cmluZ106IG51bWJlcn0sIHRlbXBsYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICBjYXNlICdldXJvY2FsbCc6IHJldHVybiB0ZW1wbGF0ZVxuICAgICAgICAgICAgLnJlcGxhY2UoXCIkbm90aW9uYWxcIiwgc3Vic3Qubm90aW9uYWwudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiJG1hcmdpblwiLCBzdWJzdC5tYXJnaW4udG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiJHN0cmlrZVwiLCBzdWJzdC5zdHJpa2UudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiJHByZW1pdW1cIiwgc3Vic3QucHJlbWl1bS50b1N0cmluZygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoXCIkbWluVmFsdWVcIiwgc3Vic3QubWluVmFsdWUudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiJG1heFZhbHVlXCIsIHN1YnN0Lm1heFZhbHVlLnRvU3RyaW5nKCkpXG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==