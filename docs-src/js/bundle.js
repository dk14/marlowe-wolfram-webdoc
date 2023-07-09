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
                isMarloweContractSampled: false
            },
            injectMarloweContract: function (c) { return __awaiter(void 0, void 0, void 0, function () {
                var marloweHome, dontSave, raw, toInject, goToEditor, i, menuBar, meta, staticAnalysis, goToBlocks;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            marloweHome = mw.document.querySelector(".h-10");
                            marloweHome === null || marloweHome === void 0 ? void 0 : marloweHome.click();
                            dontSave = mw.document.querySelector(".mr-medium");
                            dontSave === null || dontSave === void 0 ? void 0 : dontSave.click();
                            return [4 /*yield*/, fetch(window.location.origin + "/marlowe-wolfram-webdoc/contracts/".concat(c.template, ".marlowe"))];
                        case 1: return [4 /*yield*/, (_b.sent()).text()];
                        case 2:
                            raw = _b.sent();
                            toInject = (0, templates_1.processTemplate)(c.template, c.terms, raw);
                            goToEditor = mw.document.querySelector('.mr-4');
                            goToEditor === null || goToEditor === void 0 ? void 0 : goToEditor.click();
                            for (i in mw.monaco.editor.getModels()) {
                                mw.monaco.editor.getModels()[i].applyEdits([{ range: { startLineNumber: 0, startColumn: 0, endColumn: 1000, endLineNumber: 1000 }, text: toInject }]);
                            }
                            menuBar = mw.document.querySelector(".menu-bar");
                            menuBar === null || menuBar === void 0 ? void 0 : menuBar.setAttribute('style', "display: none");
                            meta = mw.document.querySelector(".text-secondary");
                            meta === null || meta === void 0 ? void 0 : meta.setAttribute('style', "display: none");
                            staticAnalysis = mw.document.querySelector(".text-gray-darkest");
                            staticAnalysis === null || staticAnalysis === void 0 ? void 0 : staticAnalysis.setAttribute('style', "display: none");
                            goToBlocks = (_a = mw.document.querySelector('.group')) === null || _a === void 0 ? void 0 : _a.querySelector('.btn');
                            goToBlocks === null || goToBlocks === void 0 ? void 0 : goToBlocks.click();
                            window.api.state.isMarloweContractGenerated = true;
                            return [2 /*return*/];
                    }
                });
            }); },
            sampleMarloweContract: function () {
                window.api.state.sample = [];
                window.api.state.isMarloweContractSampled = true;
            }
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxXQUFXO0FBQ3BELDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHNDQUFzQyxnQkFBZ0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiLG9DQUFvQywrQkFBK0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0EsaURBQWlELFVBQVU7QUFDM0Q7QUFDQSxxREFBcUQsVUFBVTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsdUJBQXVCO0FBQ3ZCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsdUJBQXVCO0FBQ3ZCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRCxzQkFBc0I7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBC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Q2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxRQUFRO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQjFCLElBQU0sZUFBZSxHQUFHLFVBQUMsSUFBWSxFQUFFLEtBQThCLEVBQUUsUUFBZ0I7SUFDMUYsT0FBTyxRQUFRO0FBQ25CLENBQUM7QUFGWSx1QkFBZSxtQkFFM0I7Ozs7Ozs7VUNGRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFybG93ZS13b2xmcmFtLXdlYmRvYy8uL25vZGVfbW9kdWxlcy9kYXJrcmVhZGVyL2RhcmtyZWFkZXIuanMiLCJ3ZWJwYWNrOi8vbWFybG93ZS13b2xmcmFtLXdlYmRvYy8uL2FwcC50cyIsIndlYnBhY2s6Ly9tYXJsb3dlLXdvbGZyYW0td2ViZG9jLy4vdXRpbC9kci50cyIsIndlYnBhY2s6Ly9tYXJsb3dlLXdvbGZyYW0td2ViZG9jLy4vdXRpbC90ZW1wbGF0ZXMudHMiLCJ3ZWJwYWNrOi8vbWFybG93ZS13b2xmcmFtLXdlYmRvYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYXJsb3dlLXdvbGZyYW0td2ViZG9jL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFybG93ZS13b2xmcmFtLXdlYmRvYy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFybG93ZS13b2xmcmFtLXdlYmRvYy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERhcmsgUmVhZGVyIHY0LjkuNThcclxuICogaHR0cHM6Ly9kYXJrcmVhZGVyLm9yZy9cclxuICovXHJcblxyXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xyXG4gICAgdHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgID8gZmFjdG9yeShleHBvcnRzKVxyXG4gICAgICAgIDogdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWRcclxuICAgICAgICA/IGRlZmluZShbXCJleHBvcnRzXCJdLCBmYWN0b3J5KVxyXG4gICAgICAgIDogKChnbG9iYWwgPVxyXG4gICAgICAgICAgICAgIHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmKSxcclxuICAgICAgICAgIGZhY3RvcnkoKGdsb2JhbC5EYXJrUmVhZGVyID0ge30pKSk7XHJcbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcbiAgICBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxuICAgIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcbiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuICAgIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuICAgIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG4gICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuICAgIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuICAgIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgIHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfX2Fzc2lnbiA9XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24gfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUFxyXG4gICAgICAgICAgICAgICAgPyB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvbmVcclxuICAgICAgICAgICAgICAgICAgICA/IHJlc29sdmUocmVzdWx0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0ZXAoXHJcbiAgICAgICAgICAgICAgICAoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICAgICAgdmFyIF8gPSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogMCxcclxuICAgICAgICAgICAgICAgIHNlbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodFswXSAmIDEpIHRocm93IHRbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRbMV07XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdHJ5czogW10sXHJcbiAgICAgICAgICAgICAgICBvcHM6IFtdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGYsXHJcbiAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgIHQsXHJcbiAgICAgICAgICAgIGc7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKGcgPSB7bmV4dDogdmVyYigwKSwgdGhyb3c6IHZlcmIoMSksIHJldHVybjogdmVyYigyKX0pLFxyXG4gICAgICAgICAgICB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiZcclxuICAgICAgICAgICAgICAgIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXAoW24sIHZdKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgICAgIHdoaWxlIChfKVxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoZiA9IDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BbMF0gJiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geVtcInJldHVyblwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9wWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geVtcInRocm93XCJdIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHkubmV4dCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKCh5ID0gMCksIHQpKSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IG9wWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3AgPSBbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3AgPSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoKHQgPSBfLnRyeXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BbMF0gPT09IDMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCA9IG9wWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCA9IHRbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmxhYmVsID0gdFsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wcy5wdXNoKG9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcCA9IFs2LCBlXTtcclxuICAgICAgICAgICAgICAgICAgICB5ID0gMDtcclxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTtcclxuICAgICAgICAgICAgcmV0dXJuIHt2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZX07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgICAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsXHJcbiAgICAgICAgICAgIG0gPSBzICYmIG9bc10sXHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhb307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICAgICAgcyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgICAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgICAgIHZhciBpID0gbS5jYWxsKG8pLFxyXG4gICAgICAgICAgICByLFxyXG4gICAgICAgICAgICBhciA9IFtdLFxyXG4gICAgICAgICAgICBlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKVxyXG4gICAgICAgICAgICAgICAgYXIucHVzaChyLnZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBlID0ge2Vycm9yOiBlcnJvcn07XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgICAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIE1lc3NhZ2VUeXBlO1xyXG4gICAgKGZ1bmN0aW9uIChNZXNzYWdlVHlwZSkge1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfR0VUX0RBVEFcIl0gPSBcInVpLWdldC1kYXRhXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9TVUJTQ1JJQkVfVE9fQ0hBTkdFU1wiXSA9IFwidWktc3Vic2NyaWJlLXRvLWNoYW5nZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1VOU1VCU0NSSUJFX0ZST01fQ0hBTkdFU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktdW5zdWJzY3JpYmUtZnJvbS1jaGFuZ2VzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9DSEFOR0VfU0VUVElOR1NcIl0gPSBcInVpLWNoYW5nZS1zZXR0aW5nc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfU0VUX1RIRU1FXCJdID0gXCJ1aS1zZXQtdGhlbWVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1NFVF9TSE9SVENVVFwiXSA9IFwidWktc2V0LXNob3J0Y3V0XCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9UT0dHTEVfQUNUSVZFX1RBQlwiXSA9IFwidWktdG9nZ2xlLWFjdGl2ZS10YWJcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX01BUktfTkVXU19BU19SRUFEXCJdID0gXCJ1aS1tYXJrLW5ld3MtYXMtcmVhZFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfTUFSS19ORVdTX0FTX0RJU1BMQVlFRFwiXSA9IFwidWktbWFyay1uZXdzLWFzLWRpc3BsYXllZFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfTE9BRF9DT05GSUdcIl0gPSBcInVpLWxvYWQtY29uZmlnXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9BUFBMWV9ERVZfRFlOQU1JQ19USEVNRV9GSVhFU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktYXBwbHktZGV2LWR5bmFtaWMtdGhlbWUtZml4ZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1JFU0VUX0RFVl9EWU5BTUlDX1RIRU1FX0ZJWEVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1yZXNldC1kZXYtZHluYW1pYy10aGVtZS1maXhlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfQVBQTFlfREVWX0lOVkVSU0lPTl9GSVhFU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktYXBwbHktZGV2LWludmVyc2lvbi1maXhlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfUkVTRVRfREVWX0lOVkVSU0lPTl9GSVhFU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktcmVzZXQtZGV2LWludmVyc2lvbi1maXhlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfQVBQTFlfREVWX1NUQVRJQ19USEVNRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWFwcGx5LWRldi1zdGF0aWMtdGhlbWVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9SRVNFVF9ERVZfU1RBVElDX1RIRU1FU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktcmVzZXQtZGV2LXN0YXRpYy10aGVtZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1NBVkVfRklMRVwiXSA9IFwidWktc2F2ZS1maWxlXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9SRVFVRVNUX0VYUE9SVF9DU1NcIl0gPSBcInVpLXJlcXVlc3QtZXhwb3J0LWNzc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfQ09MT1JfU0NIRU1FX0NIQU5HRVwiXSA9IFwidWktY29sb3Itc2NoZW1lLWNoYW5nZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfQ0hBTkdFU1wiXSA9IFwiYmctY2hhbmdlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfQUREX0NTU19GSUxURVJcIl0gPSBcImJnLWFkZC1jc3MtZmlsdGVyXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19BRERfU1RBVElDX1RIRU1FXCJdID0gXCJiZy1hZGQtc3RhdGljLXRoZW1lXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19BRERfU1ZHX0ZJTFRFUlwiXSA9IFwiYmctYWRkLXN2Zy1maWx0ZXJcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX0FERF9EWU5BTUlDX1RIRU1FXCJdID0gXCJiZy1hZGQtZHluYW1pYy10aGVtZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfRVhQT1JUX0NTU1wiXSA9IFwiYmctZXhwb3J0LWNzc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfVU5TVVBQT1JURURfU0VOREVSXCJdID0gXCJiZy11bnN1cHBvcnRlZC1zZW5kZXJcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX0NMRUFOX1VQXCJdID0gXCJiZy1jbGVhbi11cFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfUkVMT0FEXCJdID0gXCJiZy1yZWxvYWRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX0ZFVENIX1JFU1BPTlNFXCJdID0gXCJiZy1mZXRjaC1yZXNwb25zZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfVUlfVVBEQVRFXCJdID0gXCJiZy11aS11cGRhdGVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX0NTU19VUERBVEVcIl0gPSBcImJnLWNzcy11cGRhdGVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkNTX0NPTE9SX1NDSEVNRV9DSEFOR0VcIl0gPSBcImNzLWNvbG9yLXNjaGVtZS1jaGFuZ2VcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkNTX0ZSQU1FX0NPTk5FQ1RcIl0gPSBcImNzLWZyYW1lLWNvbm5lY3RcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkNTX0ZSQU1FX0ZPUkdFVFwiXSA9IFwiY3MtZnJhbWUtZm9yZ2V0XCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19GUkFNRV9GUkVFWkVcIl0gPSBcImNzLWZyYW1lLWZyZWV6ZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfRlJBTUVfUkVTVU1FXCJdID0gXCJjcy1mcmFtZS1yZXN1bWVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkNTX0VYUE9SVF9DU1NfUkVTUE9OU0VcIl0gPSBcImNzLWV4cG9ydC1jc3MtcmVzcG9uc2VcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkNTX0ZFVENIXCJdID0gXCJjcy1mZXRjaFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfREFSS19USEVNRV9ERVRFQ1RFRFwiXSA9IFwiY3MtZGFyay10aGVtZS1kZXRlY3RlZFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfREFSS19USEVNRV9OT1RfREVURUNURURcIl0gPVxyXG4gICAgICAgICAgICBcImNzLWRhcmstdGhlbWUtbm90LWRldGVjdGVkXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19MT0dcIl0gPSBcImNzLWxvZ1wiO1xyXG4gICAgfSkoTWVzc2FnZVR5cGUgfHwgKE1lc3NhZ2VUeXBlID0ge30pKTtcclxuXHJcbiAgICB2YXIgaXNOYXZpZ2F0b3JEZWZpbmVkID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIHZhciB1c2VyQWdlbnQgPSBpc05hdmlnYXRvckRlZmluZWRcclxuICAgICAgICA/IG5hdmlnYXRvci51c2VyQWdlbnREYXRhICYmXHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KG5hdmlnYXRvci51c2VyQWdlbnREYXRhLmJyYW5kcylcclxuICAgICAgICAgICAgPyBuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5icmFuZHNcclxuICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYnJhbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChicmFuZC5icmFuZC50b0xvd2VyQ2FzZSgpLCBcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGJyYW5kLnZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuam9pbihcIiBcIilcclxuICAgICAgICAgICAgOiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcclxuICAgICAgICA6IFwic29tZSB1c2VyYWdlbnRcIjtcclxuICAgIHZhciBwbGF0Zm9ybSA9IGlzTmF2aWdhdG9yRGVmaW5lZFxyXG4gICAgICAgID8gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEgJiZcclxuICAgICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5wbGF0Zm9ybSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICA/IG5hdmlnYXRvci51c2VyQWdlbnREYXRhLnBsYXRmb3JtLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgOiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIDogXCJzb21lIHBsYXRmb3JtXCI7XHJcbiAgICB2YXIgaXNDaHJvbWl1bSA9XHJcbiAgICAgICAgdXNlckFnZW50LmluY2x1ZGVzKFwiY2hyb21lXCIpIHx8IHVzZXJBZ2VudC5pbmNsdWRlcyhcImNocm9taXVtXCIpO1xyXG4gICAgdmFyIGlzVGh1bmRlcmJpcmQgPSB1c2VyQWdlbnQuaW5jbHVkZXMoXCJ0aHVuZGVyYmlyZFwiKTtcclxuICAgIHZhciBpc0ZpcmVmb3ggPVxyXG4gICAgICAgIHVzZXJBZ2VudC5pbmNsdWRlcyhcImZpcmVmb3hcIikgfHxcclxuICAgICAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJsaWJyZXdvbGZcIikgfHxcclxuICAgICAgICBpc1RodW5kZXJiaXJkO1xyXG4gICAgdXNlckFnZW50LmluY2x1ZGVzKFwidml2YWxkaVwiKTtcclxuICAgIHVzZXJBZ2VudC5pbmNsdWRlcyhcInlhYnJvd3NlclwiKTtcclxuICAgIHVzZXJBZ2VudC5pbmNsdWRlcyhcIm9wclwiKSB8fCB1c2VyQWdlbnQuaW5jbHVkZXMoXCJvcGVyYVwiKTtcclxuICAgIHVzZXJBZ2VudC5pbmNsdWRlcyhcImVkZ1wiKTtcclxuICAgIHZhciBpc1NhZmFyaSA9IHVzZXJBZ2VudC5pbmNsdWRlcyhcInNhZmFyaVwiKSAmJiAhaXNDaHJvbWl1bTtcclxuICAgIHZhciBpc1dpbmRvd3MgPSBwbGF0Zm9ybS5zdGFydHNXaXRoKFwid2luXCIpO1xyXG4gICAgdmFyIGlzTWFjT1MgPSBwbGF0Zm9ybS5zdGFydHNXaXRoKFwibWFjXCIpO1xyXG4gICAgaXNOYXZpZ2F0b3JEZWZpbmVkICYmIG5hdmlnYXRvci51c2VyQWdlbnREYXRhXHJcbiAgICAgICAgPyBuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5tb2JpbGVcclxuICAgICAgICA6IHVzZXJBZ2VudC5pbmNsdWRlcyhcIm1vYmlsZVwiKTtcclxuICAgIHZhciBpc1NoYWRvd0RvbVN1cHBvcnRlZCA9IHR5cGVvZiBTaGFkb3dSb290ID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICB2YXIgaXNNYXRjaE1lZGlhQ2hhbmdlRXZlbnRMaXN0ZW5lclN1cHBvcnRlZCA9XHJcbiAgICAgICAgdHlwZW9mIE1lZGlhUXVlcnlMaXN0ID09PSBcImZ1bmN0aW9uXCIgJiZcclxuICAgICAgICB0eXBlb2YgTWVkaWFRdWVyeUxpc3QucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG0gPSB1c2VyQWdlbnQubWF0Y2goL2Nocm9tKD86ZXxpdW0pKD86XFwvfCApKFteIF0rKS8pO1xyXG4gICAgICAgIGlmIChtICYmIG1bMV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1bMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfSkoKTtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG0gPSB1c2VyQWdlbnQubWF0Y2goLyg/OmZpcmVmb3h8bGlicmV3b2xmKSg/OlxcL3wgKShbXiBdKykvKTtcclxuICAgICAgICBpZiAobSAmJiBtWzFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH0pKCk7XHJcbiAgICB2YXIgaXNEZWZpbmVkU2VsZWN0b3JTdXBwb3J0ZWQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6ZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KSgpO1xyXG4gICAgdmFyIGlzQ1NTQ29sb3JTY2hlbWVQcm9wU3VwcG9ydGVkID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImNvbG9yLXNjaGVtZTogZGFya1wiKTtcclxuICAgICAgICByZXR1cm4gZWwuc3R5bGUgJiYgZWwuc3R5bGUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRPS1Jlc3BvbnNlKHVybCwgbWltZVR5cGUsIG9yaWdpbikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwib21pdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVycmVyOiBvcmlnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGaXJlZm94ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZSA9PT0gXCJ0ZXh0L2Nzc1wiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwuc3RhcnRzV2l0aChcIm1vei1leHRlbnNpb246Ly9cIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybC5lbmRzV2l0aChcIi5jc3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHJlc3BvbnNlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc3BvbnNlLmhlYWRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KFwiQ29udGVudC1UeXBlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0c1dpdGgobWltZVR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTWltZSB0eXBlIG1pc21hdGNoIHdoZW4gbG9hZGluZyBcIi5jb25jYXQodXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmFibGUgdG8gbG9hZCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHVybCwgXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQocmVzcG9uc2Uuc3RhdHVzLCBcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChyZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHJlc3BvbnNlXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsb2FkQXNEYXRhVVJMKHVybCwgbWltZVR5cGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBnZXRPS1Jlc3BvbnNlKHVybCwgbWltZVR5cGUpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHJlYWRSZXNwb25zZUFzRGF0YVVSTChyZXNwb25zZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlYWRSZXNwb25zZUFzRGF0YVVSTChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2IsIGRhdGFVUkw7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcmVzcG9uc2UuYmxvYigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2IgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFVUkwgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgZGF0YVVSTF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0aHJvd0NPUlNFcnJvciA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbWJlZGRlZCBEYXJrIFJlYWRlciBjYW5ub3QgYWNjZXNzIGEgY3Jvc3Mtb3JpZ2luIHJlc291cmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT3ZlcnZpZXcgeW91ciBVUkxzIGFuZCBDT1JTIHBvbGljaWVzIG9yIHVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYERhcmtSZWFkZXIuc2V0RmV0Y2hNZXRob2QoZmV0Y2g6ICh1cmwpID0+IFByb21pc2U8UmVzcG9uc2U+KSlgLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2VlIGlmIHVzaW5nIGBEYXJrUmVhZGVyLnNldEZldGNoTWV0aG9kKHdpbmRvdy5mZXRjaClgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmUgYERhcmtSZWFkZXIuZW5hYmxlKClgIHdvcmtzLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgZmV0Y2hlciA9IHRocm93Q09SU0Vycm9yO1xyXG4gICAgZnVuY3Rpb24gc2V0RmV0Y2hNZXRob2QkMShmZXRjaCkge1xyXG4gICAgICAgIGlmIChmZXRjaCkge1xyXG4gICAgICAgICAgICBmZXRjaGVyID0gZmV0Y2g7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmV0Y2hlciA9IHRocm93Q09SU0Vycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhbGxGZXRjaE1ldGhvZCh1cmwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZmV0Y2hlcih1cmwpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF3aW5kb3cuY2hyb21lKSB7XHJcbiAgICAgICAgd2luZG93LmNocm9tZSA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFjaHJvbWUucnVudGltZSkge1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lID0ge307XHJcbiAgICB9XHJcbiAgICB2YXIgbWVzc2FnZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpZF8xLCBfYSwgdXJsLCByZXNwb25zZVR5cGUsIHJlc3BvbnNlLCB0ZXh0XzEsIGVycm9yXzE7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGFyZ3NbMF0gJiYgYXJnc1swXS50eXBlID09PSBNZXNzYWdlVHlwZS5DU19GRVRDSCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZF8xID0gYXJnc1swXS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCA3LCAsIDhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gYXJnc1swXS5kYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh1cmwgPSBfYS51cmwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlVHlwZSA9IF9hLnJlc3BvbnNlVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2FsbEZldGNoTWV0aG9kKHVybCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHJlc3BvbnNlVHlwZSA9PT0gXCJkYXRhLXVybFwiKSkgcmV0dXJuIFszLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCByZWFkUmVzcG9uc2VBc0RhdGFVUkwocmVzcG9uc2UpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfMSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcmVzcG9uc2UudGV4dCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfMSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5CR19GRVRDSF9SRVNQT05TRSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0ZXh0XzEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuQkdfRkVUQ0hfUkVTUE9OU0UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRfMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRNZXNzYWdlTGlzdGVuZXIoY2FsbGJhY2spIHtcclxuICAgICAgICBtZXNzYWdlTGlzdGVuZXJzLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICB2YXIgbmF0aXZlU2VuZE1lc3NhZ2VfMSA9IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlO1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGFyZ3MpLCBmYWxzZSkpO1xyXG4gICAgICAgICAgICBuYXRpdmVTZW5kTWVzc2FnZV8xLmFwcGx5KGNocm9tZS5ydW50aW1lLCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSA9IHNlbmRNZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UpIHtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UgPSB7fTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICB2YXIgbmF0aXZlQWRkTGlzdGVuZXJfMSA9IGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcjtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyKGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICBuYXRpdmVBZGRMaXN0ZW5lcl8xLmFwcGx5KGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZSwgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhZGRNZXNzYWdlTGlzdGVuZXIoYXJnc1swXSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgVGhlbWVFbmdpbmU7XHJcbiAgICAoZnVuY3Rpb24gKFRoZW1lRW5naW5lKSB7XHJcbiAgICAgICAgVGhlbWVFbmdpbmVbXCJjc3NGaWx0ZXJcIl0gPSBcImNzc0ZpbHRlclwiO1xyXG4gICAgICAgIFRoZW1lRW5naW5lW1wic3ZnRmlsdGVyXCJdID0gXCJzdmdGaWx0ZXJcIjtcclxuICAgICAgICBUaGVtZUVuZ2luZVtcInN0YXRpY1RoZW1lXCJdID0gXCJzdGF0aWNUaGVtZVwiO1xyXG4gICAgICAgIFRoZW1lRW5naW5lW1wiZHluYW1pY1RoZW1lXCJdID0gXCJkeW5hbWljVGhlbWVcIjtcclxuICAgIH0pKFRoZW1lRW5naW5lIHx8IChUaGVtZUVuZ2luZSA9IHt9KSk7XHJcblxyXG4gICAgdmFyIEF1dG9tYXRpb25Nb2RlO1xyXG4gICAgKGZ1bmN0aW9uIChBdXRvbWF0aW9uTW9kZSkge1xyXG4gICAgICAgIEF1dG9tYXRpb25Nb2RlW1wiTk9ORVwiXSA9IFwiXCI7XHJcbiAgICAgICAgQXV0b21hdGlvbk1vZGVbXCJUSU1FXCJdID0gXCJ0aW1lXCI7XHJcbiAgICAgICAgQXV0b21hdGlvbk1vZGVbXCJTWVNURU1cIl0gPSBcInN5c3RlbVwiO1xyXG4gICAgICAgIEF1dG9tYXRpb25Nb2RlW1wiTE9DQVRJT05cIl0gPSBcImxvY2F0aW9uXCI7XHJcbiAgICB9KShBdXRvbWF0aW9uTW9kZSB8fCAoQXV0b21hdGlvbk1vZGUgPSB7fSkpO1xyXG5cclxuICAgIHZhciBERUZBVUxUX0NPTE9SUyA9IHtcclxuICAgICAgICBkYXJrU2NoZW1lOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzE4MWExYlwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIiNlOGU2ZTNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGlnaHRTY2hlbWU6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZGNkYWQ3XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiIzE4MWExYlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciBERUZBVUxUX1RIRU1FID0ge1xyXG4gICAgICAgIG1vZGU6IDEsXHJcbiAgICAgICAgYnJpZ2h0bmVzczogMTAwLFxyXG4gICAgICAgIGNvbnRyYXN0OiAxMDAsXHJcbiAgICAgICAgZ3JheXNjYWxlOiAwLFxyXG4gICAgICAgIHNlcGlhOiAwLFxyXG4gICAgICAgIHVzZUZvbnQ6IGZhbHNlLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IGlzTWFjT1NcclxuICAgICAgICAgICAgPyBcIkhlbHZldGljYSBOZXVlXCJcclxuICAgICAgICAgICAgOiBpc1dpbmRvd3NcclxuICAgICAgICAgICAgPyBcIlNlZ29lIFVJXCJcclxuICAgICAgICAgICAgOiBcIk9wZW4gU2Fuc1wiLFxyXG4gICAgICAgIHRleHRTdHJva2U6IDAsXHJcbiAgICAgICAgZW5naW5lOiBUaGVtZUVuZ2luZS5keW5hbWljVGhlbWUsXHJcbiAgICAgICAgc3R5bGVzaGVldDogXCJcIixcclxuICAgICAgICBkYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yOiBERUZBVUxUX0NPTE9SUy5kYXJrU2NoZW1lLmJhY2tncm91bmQsXHJcbiAgICAgICAgZGFya1NjaGVtZVRleHRDb2xvcjogREVGQVVMVF9DT0xPUlMuZGFya1NjaGVtZS50ZXh0LFxyXG4gICAgICAgIGxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yOiBERUZBVUxUX0NPTE9SUy5saWdodFNjaGVtZS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIGxpZ2h0U2NoZW1lVGV4dENvbG9yOiBERUZBVUxUX0NPTE9SUy5saWdodFNjaGVtZS50ZXh0LFxyXG4gICAgICAgIHNjcm9sbGJhckNvbG9yOiBpc01hY09TID8gXCJcIiA6IFwiYXV0b1wiLFxyXG4gICAgICAgIHNlbGVjdGlvbkNvbG9yOiBcImF1dG9cIixcclxuICAgICAgICBzdHlsZVN5c3RlbUNvbnRyb2xzOiAhaXNDU1NDb2xvclNjaGVtZVByb3BTdXBwb3J0ZWQsXHJcbiAgICAgICAgbGlnaHRDb2xvclNjaGVtZTogXCJEZWZhdWx0XCIsXHJcbiAgICAgICAgZGFya0NvbG9yU2NoZW1lOiBcIkRlZmF1bHRcIixcclxuICAgICAgICBpbW1lZGlhdGVNb2RpZnk6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgKHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGZldGNoTmV3czogdHJ1ZSxcclxuICAgICAgICB0aGVtZTogREVGQVVMVF9USEVNRSxcclxuICAgICAgICBwcmVzZXRzOiBbXSxcclxuICAgICAgICBjdXN0b21UaGVtZXM6IFtdLFxyXG4gICAgICAgIHNpdGVMaXN0OiBbXSxcclxuICAgICAgICBzaXRlTGlzdEVuYWJsZWQ6IFtdLFxyXG4gICAgICAgIGFwcGx5VG9MaXN0ZWRPbmx5OiBmYWxzZSxcclxuICAgICAgICBjaGFuZ2VCcm93c2VyVGhlbWU6IGZhbHNlLFxyXG4gICAgICAgIHN5bmNTZXR0aW5nczogdHJ1ZSxcclxuICAgICAgICBzeW5jU2l0ZXNGaXhlczogZmFsc2UsXHJcbiAgICAgICAgYXV0b21hdGlvbjoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgbW9kZTogQXV0b21hdGlvbk1vZGUuTk9ORSxcclxuICAgICAgICAgICAgYmVoYXZpb3I6IFwiT25PZmZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGltZToge1xyXG4gICAgICAgICAgICBhY3RpdmF0aW9uOiBcIjE4OjAwXCIsXHJcbiAgICAgICAgICAgIGRlYWN0aXZhdGlvbjogXCI5OjAwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBudWxsLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZXZpZXdOZXdEZXNpZ246IGZhbHNlLFxyXG4gICAgICAgIGVuYWJsZUZvclBERjogdHJ1ZSxcclxuICAgICAgICBlbmFibGVGb3JQcm90ZWN0ZWRQYWdlczogZmFsc2UsXHJcbiAgICAgICAgZW5hYmxlQ29udGV4dE1lbnVzOiBmYWxzZSxcclxuICAgICAgICBkZXRlY3REYXJrVGhlbWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc0FycmF5TGlrZShpdGVtcykge1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5sZW5ndGggIT0gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvckVhY2goaXRlbXMsIGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgdmFyIGVfMSwgX2E7XHJcbiAgICAgICAgaWYgKGlzQXJyYXlMaWtlKGl0ZW1zKSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKGl0ZW1zW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtc18xID0gX192YWx1ZXMoaXRlbXMpLCBpdGVtc18xXzEgPSBpdGVtc18xLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAhaXRlbXNfMV8xLmRvbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNfMV8xID0gaXRlbXNfMS5uZXh0KClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNfMV8xLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlXzFfMSkge1xyXG4gICAgICAgICAgICAgICAgZV8xID0ge2Vycm9yOiBlXzFfMX07XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtc18xXzEgJiYgIWl0ZW1zXzFfMS5kb25lICYmIChfYSA9IGl0ZW1zXzEucmV0dXJuKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EuY2FsbChpdGVtc18xKTtcclxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcHVzaChhcnJheSwgYWRkaXRpb24pIHtcclxuICAgICAgICBmb3JFYWNoKGFkZGl0aW9uLCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkucHVzaChhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRvQXJyYXkoaXRlbXMpIHtcclxuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2dJbmZvKCkge31cclxuICAgIGZ1bmN0aW9uIGxvZ1dhcm4oKSB7fVxyXG5cclxuICAgIGZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgdmFyIGxhc3RBcmdzO1xyXG4gICAgICAgIHZhciB0aHJvdHRsZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdEFyZ3MgPSBhcmdzO1xyXG4gICAgICAgICAgICBpZiAoZnJhbWVJZCkge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShcclxuICAgICAgICAgICAgICAgICAgICB2b2lkIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGxhc3RBcmdzKSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQobGFzdEFyZ3MpLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2FuY2VsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZUlkKTtcclxuICAgICAgICAgICAgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRocm90dGxlZCwge2NhbmNlbDogY2FuY2VsfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBc3luY1Rhc2tzUXVldWUoKSB7XHJcbiAgICAgICAgdmFyIHRhc2tzID0gW107XHJcbiAgICAgICAgdmFyIGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIHJ1blRhc2tzKCkge1xyXG4gICAgICAgICAgICB2YXIgdGFzaztcclxuICAgICAgICAgICAgd2hpbGUgKCh0YXNrID0gdGFza3Muc2hpZnQoKSkpIHtcclxuICAgICAgICAgICAgICAgIHRhc2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gYWRkKHRhc2spIHtcclxuICAgICAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgaWYgKCFmcmFtZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1blRhc2tzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjYW5jZWwoKSB7XHJcbiAgICAgICAgICAgIHRhc2tzLnNwbGljZSgwKTtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XHJcbiAgICAgICAgICAgIGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2FkZDogYWRkLCBjYW5jZWw6IGNhbmNlbH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RHVyYXRpb24odGltZSkge1xyXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgaWYgKHRpbWUuc2Vjb25kcykge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSB0aW1lLnNlY29uZHMgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZS5taW51dGVzKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHRpbWUubWludXRlcyAqIDYwICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWUuaG91cnMpIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gKz0gdGltZS5ob3VycyAqIDYwICogNjAgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZS5kYXlzKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHRpbWUuZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcclxuICAgICAgICBub2RlICYmIG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvck5vZGVQb3NpdGlvbihub2RlLCBtb2RlLCBvblJlc3RvcmUpIHtcclxuICAgICAgICBpZiAob25SZXN0b3JlID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgb25SZXN0b3JlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgTUFYX0FUVEVNUFRTX0NPVU5UID0gMTA7XHJcbiAgICAgICAgdmFyIFJFVFJZX1RJTUVPVVQgPSBnZXREdXJhdGlvbih7c2Vjb25kczogMn0pO1xyXG4gICAgICAgIHZhciBBVFRFTVBUU19JTlRFUlZBTCA9IGdldER1cmF0aW9uKHtzZWNvbmRzOiAxMH0pO1xyXG4gICAgICAgIHZhciBwcmV2U2libGluZyA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgXCJVbmFibGUgdG8gd2F0Y2ggZm9yIG5vZGUgcG9zaXRpb246IHBhcmVudCBlbGVtZW50IG5vdCBmb3VuZFwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2RlID09PSBcInByZXYtc2libGluZ1wiICYmICFwcmV2U2libGluZykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBcIlVuYWJsZSB0byB3YXRjaCBmb3Igbm9kZSBwb3NpdGlvbjogdGhlcmUgaXMgbm8gcHJldmlvdXMgc2libGluZ1wiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gbnVsbDtcclxuICAgICAgICB2YXIgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICB2YXIgcmVzdG9yZSA9IHRocm90dGxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF0dGVtcHRzKys7XHJcbiAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3c7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ZW1wdHMgPj0gTUFYX0FUVEVNUFRTX0NPVU5UKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm93IC0gc3RhcnQgPCBBVFRFTVBUU19JTlRFUlZBTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIFJFVFJZX1RJTUVPVVQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xyXG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBcInBhcmVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldlNpYmxpbmcgJiYgcHJldlNpYmxpbmcucGFyZW50Tm9kZSAhPT0gcGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJwcmV2LXNpYmxpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nLnBhcmVudE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldlNpYmxpbmcucGFyZW50Tm9kZSAhPT0gcGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFyZW50KHByZXZTaWJsaW5nLnBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICAgICAgcHJldlNpYmxpbmcgPyBwcmV2U2libGluZy5uZXh0U2libGluZyA6IHBhcmVudC5maXJzdENoaWxkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnRha2VSZWNvcmRzKCk7XHJcbiAgICAgICAgICAgIG9uUmVzdG9yZSAmJiBvblJlc3RvcmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChtb2RlID09PSBcInBhcmVudFwiICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gcGFyZW50KSB8fFxyXG4gICAgICAgICAgICAgICAgKG1vZGUgPT09IFwicHJldi1zaWJsaW5nXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnByZXZpb3VzU2libGluZyAhPT0gcHJldlNpYmxpbmcpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShwYXJlbnQsIHtjaGlsZExpc3Q6IHRydWV9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBzdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICByZXN0b3JlLmNhbmNlbCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHNraXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnRha2VSZWNvcmRzKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdXBkYXRlUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgc3RvcCgpO1xyXG4gICAgICAgICAgICBydW4oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJ1bigpO1xyXG4gICAgICAgIHJldHVybiB7cnVuOiBydW4sIHN0b3A6IHN0b3AsIHNraXA6IHNraXB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXRlcmF0ZVNoYWRvd0hvc3RzKHJvb3QsIGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgaWYgKHJvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKHJvb3QsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XHJcbiAgICAgICAgICAgIGFjY2VwdE5vZGU6IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5zaGFkb3dSb290ID09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVBcclxuICAgICAgICAgICAgICAgICAgICA6IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgIHZhciBub2RlID0gcm9vdC5zaGFkb3dSb290ID8gd2Fsa2VyLmN1cnJlbnROb2RlIDogd2Fsa2VyLm5leHROb2RlKCk7XHJcbiAgICAgICAgICAgIG5vZGUgIT0gbnVsbDtcclxuICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhcInN1cmZpbmdrZXlzX2hpbnRzX2hvc3RcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZXJhdG9yKG5vZGUpO1xyXG4gICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMobm9kZS5zaGFkb3dSb290LCBpdGVyYXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGlzRE9NUmVhZHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gc2V0SXNET01SZWFkeShuZXdGdW5jKSB7XHJcbiAgICAgICAgaXNET01SZWFkeSA9IG5ld0Z1bmM7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVhZHlTdGF0ZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGFkZERPTVJlYWR5TGlzdGVuZXIobGlzdGVuZXIpIHtcclxuICAgICAgICBpc0RPTVJlYWR5KCkgPyBsaXN0ZW5lcigpIDogcmVhZHlTdGF0ZUxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRE9NUmVhZHlMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIHJlYWR5U3RhdGVMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzUmVhZHlTdGF0ZUNvbXBsZXRlKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCI7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gYWRkUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXIobGlzdGVuZXIpIHtcclxuICAgICAgICBpc1JlYWR5U3RhdGVDb21wbGV0ZSgpXHJcbiAgICAgICAgICAgID8gbGlzdGVuZXIoKVxyXG4gICAgICAgICAgICA6IHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYW5SZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgcmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzRE9NUmVhZHkoKSkge1xyXG4gICAgICAgIHZhciBvblJlYWR5U3RhdGVDaGFuZ2VfMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGlzRE9NUmVhZHkoKSkge1xyXG4gICAgICAgICAgICAgICAgcmVhZHlTdGF0ZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZWFkeVN0YXRlTGlzdGVuZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSZWFkeVN0YXRlQ29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZHlzdGF0ZWNoYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlYWR5U3RhdGVDaGFuZ2VfMVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBvblJlYWR5U3RhdGVDaGFuZ2VfMSk7XHJcbiAgICB9XHJcbiAgICB2YXIgSFVHRV9NVVRBVElPTlNfQ09VTlQgPSAxMDAwO1xyXG4gICAgZnVuY3Rpb24gaXNIdWdlTXV0YXRpb24obXV0YXRpb25zKSB7XHJcbiAgICAgICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPiBIVUdFX01VVEFUSU9OU19DT1VOVCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFkZGVkTm9kZXNDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWRkZWROb2Rlc0NvdW50ICs9IG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGFkZGVkTm9kZXNDb3VudCA+IEhVR0VfTVVUQVRJT05TX0NPVU5UKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50c1RyZWVPcGVyYXRpb25zKG11dGF0aW9ucykge1xyXG4gICAgICAgIHZhciBhZGRpdGlvbnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdmFyIGRlbGV0aW9ucyA9IG5ldyBTZXQoKTtcclxuICAgICAgICB2YXIgbW92ZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgZm9yRWFjaChtLmFkZGVkTm9kZXMsIGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobiBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9ucy5hZGQobik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3JFYWNoKG0ucmVtb3ZlZE5vZGVzLCBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZXMuYWRkKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbnMuZGVsZXRlKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0aW9ucy5hZGQobik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgZHVwbGljYXRlQWRkaXRpb25zID0gW107XHJcbiAgICAgICAgdmFyIGR1cGxpY2F0ZURlbGV0aW9ucyA9IFtdO1xyXG4gICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIGlmIChhZGRpdGlvbnMuaGFzKG5vZGUucGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZUFkZGl0aW9ucy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGVsZXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgaWYgKGRlbGV0aW9ucy5oYXMobm9kZS5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlRGVsZXRpb25zLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkdXBsaWNhdGVBZGRpdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWRkaXRpb25zLmRlbGV0ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkdXBsaWNhdGVEZWxldGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVsZXRpb25zLmRlbGV0ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge2FkZGl0aW9uczogYWRkaXRpb25zLCBtb3ZlczogbW92ZXMsIGRlbGV0aW9uczogZGVsZXRpb25zfTtcclxuICAgIH1cclxuICAgIHZhciBvcHRpbWl6ZWRUcmVlT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgdmFyIG9wdGltaXplZFRyZWVDYWxsYmFja3MgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlT3B0aW1pemVkVHJlZU9ic2VydmVyKHJvb3QsIGNhbGxiYWNrcykge1xyXG4gICAgICAgIHZhciBvYnNlcnZlcjtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXJDYWxsYmFja3M7XHJcbiAgICAgICAgdmFyIGRvbVJlYWR5TGlzdGVuZXI7XHJcbiAgICAgICAgaWYgKG9wdGltaXplZFRyZWVPYnNlcnZlcnMuaGFzKHJvb3QpKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gb3B0aW1pemVkVHJlZU9ic2VydmVycy5nZXQocm9vdCk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzID0gb3B0aW1pemVkVHJlZUNhbGxiYWNrcy5nZXQob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBoYWRIdWdlTXV0YXRpb25zQmVmb3JlXzEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHN1YnNjcmliZWRGb3JSZWFkeVN0YXRlXzEgPSBmYWxzZTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNIdWdlTXV0YXRpb24obXV0YXRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFkSHVnZU11dGF0aW9uc0JlZm9yZV8xIHx8IGlzRE9NUmVhZHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uSHVnZU11dGF0aW9ucyA9IF9hLm9uSHVnZU11dGF0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvbkh1Z2VNdXRhdGlvbnMocm9vdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN1YnNjcmliZWRGb3JSZWFkeVN0YXRlXzEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUmVhZHlMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlckNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbkh1Z2VNdXRhdGlvbnMgPSBfYS5vbkh1Z2VNdXRhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uSHVnZU11dGF0aW9ucyhyb290KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRET01SZWFkeUxpc3RlbmVyKGRvbVJlYWR5TGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVkRm9yUmVhZHlTdGF0ZV8xID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFkSHVnZU11dGF0aW9uc0JlZm9yZV8xID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzT3BlcmF0aW9uc18xID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RWxlbWVudHNUcmVlT3BlcmF0aW9ucyhtdXRhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbk1pbm9yTXV0YXRpb25zID0gX2Eub25NaW5vck11dGF0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTWlub3JNdXRhdGlvbnMoZWxlbWVudHNPcGVyYXRpb25zXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7Y2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIG9wdGltaXplZFRyZWVPYnNlcnZlcnMuc2V0KHJvb3QsIG9ic2VydmVyKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIG9wdGltaXplZFRyZWVDYWxsYmFja3Muc2V0KG9ic2VydmVyLCBvYnNlcnZlckNhbGxiYWNrcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmFkZChjYWxsYmFja3MpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmRlbGV0ZShjYWxsYmFja3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbVJlYWR5TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVET01SZWFkeUxpc3RlbmVyKGRvbVJlYWR5TGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyQ2FsbGJhY2tzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW1pemVkVHJlZUNhbGxiYWNrcy5kZWxldGUob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGltaXplZFRyZWVPYnNlcnZlcnMuZGVsZXRlKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYW5jaG9yO1xyXG4gICAgdmFyIHBhcnNlZFVSTENhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gZml4QmFzZVVSTCgkdXJsKSB7XHJcbiAgICAgICAgaWYgKCFhbmNob3IpIHtcclxuICAgICAgICAgICAgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFuY2hvci5ocmVmID0gJHVybDtcclxuICAgICAgICByZXR1cm4gYW5jaG9yLmhyZWY7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZVVSTCgkdXJsLCAkYmFzZSkge1xyXG4gICAgICAgIGlmICgkYmFzZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgICRiYXNlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGtleSA9IFwiXCIuY29uY2F0KCR1cmwpLmNvbmNhdCgkYmFzZSA/IFwiO1wiLmNvbmNhdCgkYmFzZSkgOiBcIlwiKTtcclxuICAgICAgICBpZiAocGFyc2VkVVJMQ2FjaGUuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFVSTENhY2hlLmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJGJhc2UpIHtcclxuICAgICAgICAgICAgdmFyIHBhcnNlZFVSTF8xID0gbmV3IFVSTCgkdXJsLCBmaXhCYXNlVVJMKCRiYXNlKSk7XHJcbiAgICAgICAgICAgIHBhcnNlZFVSTENhY2hlLnNldChrZXksIHBhcnNlZFVSTF8xKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFVSTF8xO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGFyc2VkVVJMID0gbmV3IFVSTChmaXhCYXNlVVJMKCR1cmwpKTtcclxuICAgICAgICBwYXJzZWRVUkxDYWNoZS5zZXQoJHVybCwgcGFyc2VkVVJMKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkVVJMO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0QWJzb2x1dGVVUkwoJGJhc2UsICRyZWxhdGl2ZSkge1xyXG4gICAgICAgIGlmICgkcmVsYXRpdmUubWF0Y2goL15kYXRhXFxcXD9cXDovKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoL15cXC9cXC8vLnRlc3QoJHJlbGF0aXZlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQobG9jYXRpb24ucHJvdG9jb2wpLmNvbmNhdCgkcmVsYXRpdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYiA9IHBhcnNlVVJMKCRiYXNlKTtcclxuICAgICAgICB2YXIgYSA9IHBhcnNlVVJMKCRyZWxhdGl2ZSwgYi5ocmVmKTtcclxuICAgICAgICByZXR1cm4gYS5ocmVmO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNSZWxhdGl2ZUhyZWZPbkFic29sdXRlUGF0aChocmVmKSB7XHJcbiAgICAgICAgaWYgKGhyZWYuc3RhcnRzV2l0aChcImRhdGE6XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXJsID0gcGFyc2VVUkwoaHJlZik7XHJcbiAgICAgICAgaWYgKHVybC5wcm90b2NvbCAhPT0gbG9jYXRpb24ucHJvdG9jb2wpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1cmwucG9ydCAhPT0gbG9jYXRpb24ucG9ydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmwucGF0aG5hbWUgPT09IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVDU1NSdWxlcyhydWxlcywgaXRlcmF0ZSwgb25NZWRpYVJ1bGVFcnJvcikge1xyXG4gICAgICAgIGZvckVhY2gocnVsZXMsIGZ1bmN0aW9uIChydWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChydWxlLnNlbGVjdG9yVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZShydWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChydWxlLmhyZWYpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlU2hlZXQuY3NzUnVsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTWVkaWFSdWxlRXJyb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhcIkZvdW5kIGEgbm9uLWxvYWRlZCBsaW5rLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBvbk1lZGlhUnVsZUVycm9yICYmIG9uTWVkaWFSdWxlRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChydWxlLm1lZGlhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVkaWEgPSBBcnJheS5mcm9tKHJ1bGUubWVkaWEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzU2NyZWVuT3JBbGxPclF1ZXJ5ID0gbWVkaWEuc29tZShmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uc3RhcnRzV2l0aChcInNjcmVlblwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnN0YXJ0c1dpdGgoXCJhbGxcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5zdGFydHNXaXRoKFwiKFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBpc1ByaW50T3JTcGVlY2ggPSBtZWRpYS5zb21lKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0uc3RhcnRzV2l0aChcInByaW50XCIpIHx8IG0uc3RhcnRzV2l0aChcInNwZWVjaFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2NyZWVuT3JBbGxPclF1ZXJ5IHx8ICFpc1ByaW50T3JTcGVlY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMocnVsZS5jc3NSdWxlcywgaXRlcmF0ZSwgb25NZWRpYVJ1bGVFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocnVsZS5jb25kaXRpb25UZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ1NTLnN1cHBvcnRzKHJ1bGUuY29uZGl0aW9uVGV4dCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMocnVsZS5jc3NSdWxlcywgaXRlcmF0ZSwgb25NZWRpYVJ1bGVFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsb2dXYXJuKFwiQ1NTUnVsZSB0eXBlIG5vdCBzdXBwb3J0ZWRcIiwgcnVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBzaG9ydGhhbmRWYXJEZXBlbmRhbnRQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIFwiYmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiYm9yZGVyXCIsXHJcbiAgICAgICAgXCJib3JkZXItY29sb3JcIixcclxuICAgICAgICBcImJvcmRlci1ib3R0b21cIixcclxuICAgICAgICBcImJvcmRlci1sZWZ0XCIsXHJcbiAgICAgICAgXCJib3JkZXItcmlnaHRcIixcclxuICAgICAgICBcImJvcmRlci10b3BcIixcclxuICAgICAgICBcIm91dGxpbmVcIixcclxuICAgICAgICBcIm91dGxpbmUtY29sb3JcIlxyXG4gICAgXTtcclxuICAgIHZhciBzaG9ydGhhbmRWYXJEZXBQcm9wUmVnZXhwcyA9IGlzU2FmYXJpXHJcbiAgICAgICAgPyBzaG9ydGhhbmRWYXJEZXBlbmRhbnRQcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgICAgICAgIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KHByb3AsIFwiOlxcXFxzKiguKj8pXFxcXHMqO1wiKSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFtwcm9wLCByZWdleHBdO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICA6IG51bGw7XHJcbiAgICBmdW5jdGlvbiBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKHN0eWxlLCBpdGVyYXRlKSB7XHJcbiAgICAgICAgZm9yRWFjaChzdHlsZSwgZnVuY3Rpb24gKHByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpLnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZXJhdGUocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgY3NzVGV4dCA9IHN0eWxlLmNzc1RleHQ7XHJcbiAgICAgICAgaWYgKGNzc1RleHQuaW5jbHVkZXMoXCJ2YXIoXCIpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1NhZmFyaSkge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRoYW5kVmFyRGVwUHJvcFJlZ2V4cHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wID0gX2JbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4cCA9IF9iWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IGNzc1RleHQubWF0Y2gocmVnZXhwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IG1hdGNoWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZShwcm9wLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRoYW5kVmFyRGVwZW5kYW50UHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAmJiB2YWwuaW5jbHVkZXMoXCJ2YXIoXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGUocHJvcCwgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBjc3NVUkxSZWdleCA9IC91cmxcXCgoKCcuKj8nKXwoXCIuKj9cIil8KFteXFwpXSo/KSlcXCkvZztcclxuICAgIHZhciBjc3NJbXBvcnRSZWdleCA9XHJcbiAgICAgICAgL0BpbXBvcnRcXHMqKHVybFxcKCk/KCgnLis/Jyl8KFwiLis/XCIpfChbXlxcKV0qPykpXFwpPyA/KHNjcmVlbik/Oz8vZ2k7XHJcbiAgICBmdW5jdGlvbiBnZXRDU1NVUkxWYWx1ZShjc3NVUkwpIHtcclxuICAgICAgICByZXR1cm4gY3NzVVJMXHJcbiAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXG5cXHJcXFxcXSsvZywgXCJcIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoL151cmxcXCgoLiopXFwpJC8sIFwiJDFcIilcclxuICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXlwiKC4qKVwiJC8sIFwiJDFcIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoL14nKC4qKSckLywgXCIkMVwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvKD86XFxcXCguKSkvZywgXCIkMVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldENTU0Jhc2VCYXRoKHVybCkge1xyXG4gICAgICAgIHZhciBjc3NVUkwgPSBwYXJzZVVSTCh1cmwpO1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgICAgICAgIC5jb25jYXQoY3NzVVJMLm9yaWdpbilcclxuICAgICAgICAgICAgLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIGNzc1VSTC5wYXRobmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXFwvKShbXlxcL10rKSQvaSwgXCIkMVwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU1JlbGF0aXZlVVJMc1dpdGhBYnNvbHV0ZSgkY3NzLCBjc3NCYXNlUGF0aCkge1xyXG4gICAgICAgIHJldHVybiAkY3NzLnJlcGxhY2UoY3NzVVJMUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICAgICAgICB2YXIgcGF0aFZhbHVlID0gZ2V0Q1NTVVJMVmFsdWUobWF0Y2gpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidXJsKCdcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0QWJzb2x1dGVVUkwoY3NzQmFzZVBhdGgsIHBhdGhWYWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgXCInKVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIGNzc0NvbW1lbnRzUmVnZXggPSAvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy9nO1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ1NTQ29tbWVudHMoJGNzcykge1xyXG4gICAgICAgIHJldHVybiAkY3NzLnJlcGxhY2UoY3NzQ29tbWVudHNSZWdleCwgXCJcIik7XHJcbiAgICB9XHJcbiAgICB2YXIgZm9udEZhY2VSZWdleCA9IC9AZm9udC1mYWNlXFxzKntbXn1dKn0vZztcclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VDU1NGb250RmFjZSgkY3NzKSB7XHJcbiAgICAgICAgcmV0dXJuICRjc3MucmVwbGFjZShmb250RmFjZVJlZ2V4LCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBldmFsTWF0aChleHByZXNzaW9uKSB7XHJcbiAgICAgICAgdmFyIHJwblN0YWNrID0gW107XHJcbiAgICAgICAgdmFyIHdvcmtpbmdTdGFjayA9IFtdO1xyXG4gICAgICAgIHZhciBsYXN0VG9rZW47XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cHJlc3Npb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gZXhwcmVzc2lvbltpXTtcclxuICAgICAgICAgICAgaWYgKCF0b2tlbiB8fCB0b2tlbiA9PT0gXCIgXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcGVyYXRvcnMuaGFzKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wID0gb3BlcmF0b3JzLmdldCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAod29ya2luZ1N0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50T3AgPSBvcGVyYXRvcnMuZ2V0KHdvcmtpbmdTdGFja1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50T3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcC5sZXNzT3JFcXVhbFRoYW4oY3VycmVudE9wKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBycG5TdGFjay5wdXNoKHdvcmtpbmdTdGFjay5zaGlmdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3b3JraW5nU3RhY2sudW5zaGlmdCh0b2tlbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWxhc3RUb2tlbiB8fCBvcGVyYXRvcnMuaGFzKGxhc3RUb2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHJwblN0YWNrLnB1c2godG9rZW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcnBuU3RhY2tbcnBuU3RhY2subGVuZ3RoIC0gMV0gKz0gdG9rZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdFRva2VuID0gdG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJwblN0YWNrLnB1c2guYXBwbHkoXHJcbiAgICAgICAgICAgIHJwblN0YWNrLFxyXG4gICAgICAgICAgICBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQod29ya2luZ1N0YWNrKSwgZmFsc2UpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgc3RhY2sgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcnBuU3RhY2subGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG9wID0gb3BlcmF0b3JzLmdldChycG5TdGFja1tpXSk7XHJcbiAgICAgICAgICAgIGlmIChvcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBzdGFjay5zcGxpY2UoMCwgMik7XHJcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG9wLmV4ZWMoYXJnc1sxXSwgYXJnc1swXSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sudW5zaGlmdChwYXJzZUZsb2F0KHJwblN0YWNrW2ldKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YWNrWzBdO1xyXG4gICAgfVxyXG4gICAgdmFyIE9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBPcGVyYXRvcihwcmVjZWRlbmNlLCBtZXRob2QpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVjZW5kY2UgPSBwcmVjZWRlbmNlO1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWNNZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9wZXJhdG9yLnByb3RvdHlwZS5leGVjID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4ZWNNZXRob2QobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgT3BlcmF0b3IucHJvdG90eXBlLmxlc3NPckVxdWFsVGhhbiA9IGZ1bmN0aW9uIChvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVjZW5kY2UgPD0gb3AucHJlY2VuZGNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIE9wZXJhdG9yO1xyXG4gICAgfSkoKTtcclxuICAgIHZhciBvcGVyYXRvcnMgPSBuZXcgTWFwKFtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiK1wiLFxyXG4gICAgICAgICAgICBuZXcgT3BlcmF0b3IoMSwgZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCArIHJpZ2h0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcIi1cIixcclxuICAgICAgICAgICAgbmV3IE9wZXJhdG9yKDEsIGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgLSByaWdodDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCIqXCIsXHJcbiAgICAgICAgICAgIG5ldyBPcGVyYXRvcigyLCBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICogcmlnaHQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiL1wiLFxyXG4gICAgICAgICAgICBuZXcgT3BlcmF0b3IoMiwgZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCAvIHJpZ2h0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF1cclxuICAgIF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1hdGNoZXMocmVnZXgsIGlucHV0LCBncm91cCkge1xyXG4gICAgICAgIGlmIChncm91cCA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGdyb3VwID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcclxuICAgICAgICB2YXIgbTtcclxuICAgICAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKGlucHV0KSkpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG1bZ3JvdXBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtYXRDU1ModGV4dCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHRyaW1MZWZ0KHRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXlxccysvLCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0SW5kZW50KGRlcHRoKSB7XHJcbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiIFwiLnJlcGVhdCg0ICogZGVwdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGV4dC5sZW5ndGggPCA1MDAwMCkge1xyXG4gICAgICAgICAgICB2YXIgZW1wdHlSdWxlUmVnZXhwID0gL1tee31dK3tcXHMqfS87XHJcbiAgICAgICAgICAgIHdoaWxlIChlbXB0eVJ1bGVSZWdleHAudGVzdCh0ZXh0KSkge1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShlbXB0eVJ1bGVSZWdleHAsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjc3MgPSB0ZXh0XHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHN7Mix9L2csIFwiIFwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFx7L2csIFwie1xcblwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFx9L2csIFwiXFxufVxcblwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFw7KD8hW15cXCh8XFxcIl0qKFxcKXxcXFwiKSkvZywgXCI7XFxuXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCwoPyFbXlxcKHxcXFwiXSooXFwpfFxcXCIpKS9nLCBcIixcXG5cIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcblxccypcXG4vZywgXCJcXG5cIilcclxuICAgICAgICAgICAgLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIHZhciBkZXB0aCA9IDA7XHJcbiAgICAgICAgdmFyIGZvcm1hdHRlZCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHggPSAwLCBsZW4gPSBjc3MubGVuZ3RoOyB4IDwgbGVuOyB4KyspIHtcclxuICAgICAgICAgICAgdmFyIGxpbmUgPSBcIlwiLmNvbmNhdChjc3NbeF0sIFwiXFxuXCIpO1xyXG4gICAgICAgICAgICBpZiAobGluZS5pbmNsdWRlcyhcIntcIikpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZC5wdXNoKGdldEluZGVudChkZXB0aCsrKSArIHRyaW1MZWZ0KGxpbmUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaW5lLmluY2x1ZGVzKFwifVwiKSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkLnB1c2goZ2V0SW5kZW50KC0tZGVwdGgpICsgdHJpbUxlZnQobGluZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkLnB1c2goZ2V0SW5kZW50KGRlcHRoKSArIHRyaW1MZWZ0KGxpbmUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkLmpvaW4oXCJcIikudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0UGFyZW50aGVzZXNSYW5nZShpbnB1dCwgc2VhcmNoU3RhcnRJbmRleCkge1xyXG4gICAgICAgIGlmIChzZWFyY2hTdGFydEluZGV4ID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgc2VhcmNoU3RhcnRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGRlcHRoID0gMDtcclxuICAgICAgICB2YXIgZmlyc3RPcGVuSW5kZXggPSAtMTtcclxuICAgICAgICBmb3IgKHZhciBpID0gc2VhcmNoU3RhcnRJbmRleDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wZW5JbmRleCA9IGlucHV0LmluZGV4T2YoXCIoXCIsIGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5JbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpcnN0T3BlbkluZGV4ID0gb3BlbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgZGVwdGgrKztcclxuICAgICAgICAgICAgICAgIGkgPSBvcGVuSW5kZXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2xvc2luZ0luZGV4ID0gaW5wdXQuaW5kZXhPZihcIilcIiwgaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2luZ0luZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG9wZW5JbmRleCA9IGlucHV0LmluZGV4T2YoXCIoXCIsIGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5JbmRleCA8IDAgfHwgY2xvc2luZ0luZGV4IDwgb3BlbkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGgtLTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtzdGFydDogZmlyc3RPcGVuSW5kZXgsIGVuZDogY2xvc2luZ0luZGV4ICsgMX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBjbG9zaW5nSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IG9wZW5JbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaHNsYVBhcnNlQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICB2YXIgcmdiYVBhcnNlQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBwYXJzZUNvbG9yV2l0aENhY2hlKCRjb2xvcikge1xyXG4gICAgICAgICRjb2xvciA9ICRjb2xvci50cmltKCk7XHJcbiAgICAgICAgaWYgKHJnYmFQYXJzZUNhY2hlLmhhcygkY29sb3IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZ2JhUGFyc2VDYWNoZS5nZXQoJGNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRjb2xvci5pbmNsdWRlcyhcImNhbGMoXCIpKSB7XHJcbiAgICAgICAgICAgICRjb2xvciA9IGxvd2VyQ2FsY0V4cHJlc3Npb24oJGNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbG9yID0gcGFyc2UoJGNvbG9yKTtcclxuICAgICAgICBjb2xvciAmJiByZ2JhUGFyc2VDYWNoZS5zZXQoJGNvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VUb0hTTFdpdGhDYWNoZShjb2xvcikge1xyXG4gICAgICAgIGlmIChoc2xhUGFyc2VDYWNoZS5oYXMoY29sb3IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoc2xhUGFyc2VDYWNoZS5nZXQoY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShjb2xvcik7XHJcbiAgICAgICAgaWYgKCFyZ2IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBoc2wgPSByZ2JUb0hTTChyZ2IpO1xyXG4gICAgICAgIGhzbGFQYXJzZUNhY2hlLnNldChjb2xvciwgaHNsKTtcclxuICAgICAgICByZXR1cm4gaHNsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYXJDb2xvckNhY2hlKCkge1xyXG4gICAgICAgIGhzbGFQYXJzZUNhY2hlLmNsZWFyKCk7XHJcbiAgICAgICAgcmdiYVBhcnNlQ2FjaGUuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhzbFRvUkdCKF9hKSB7XHJcbiAgICAgICAgdmFyIGggPSBfYS5oLFxyXG4gICAgICAgICAgICBzID0gX2EucyxcclxuICAgICAgICAgICAgbCA9IF9hLmwsXHJcbiAgICAgICAgICAgIF9iID0gX2EuYSxcclxuICAgICAgICAgICAgYSA9IF9iID09PSB2b2lkIDAgPyAxIDogX2I7XHJcbiAgICAgICAgaWYgKHMgPT09IDApIHtcclxuICAgICAgICAgICAgdmFyIF9jID0gX19yZWFkKFxyXG4gICAgICAgICAgICAgICAgICAgIFtsLCBsLCBsXS5tYXAoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoeCAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJfMSA9IF9jWzBdLFxyXG4gICAgICAgICAgICAgICAgYl8xID0gX2NbMV0sXHJcbiAgICAgICAgICAgICAgICBnXzEgPSBfY1syXTtcclxuICAgICAgICAgICAgcmV0dXJuIHtyOiByXzEsIGc6IGdfMSwgYjogYl8xLCBhOiBhfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGMgPSAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpICogcztcclxuICAgICAgICB2YXIgeCA9IGMgKiAoMSAtIE1hdGguYWJzKCgoaCAvIDYwKSAlIDIpIC0gMSkpO1xyXG4gICAgICAgIHZhciBtID0gbCAtIGMgLyAyO1xyXG4gICAgICAgIHZhciBfZCA9IF9fcmVhZChcclxuICAgICAgICAgICAgICAgIChoIDwgNjBcclxuICAgICAgICAgICAgICAgICAgICA/IFtjLCB4LCAwXVxyXG4gICAgICAgICAgICAgICAgICAgIDogaCA8IDEyMFxyXG4gICAgICAgICAgICAgICAgICAgID8gW3gsIGMsIDBdXHJcbiAgICAgICAgICAgICAgICAgICAgOiBoIDwgMTgwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBbMCwgYywgeF1cclxuICAgICAgICAgICAgICAgICAgICA6IGggPCAyNDBcclxuICAgICAgICAgICAgICAgICAgICA/IFswLCB4LCBjXVxyXG4gICAgICAgICAgICAgICAgICAgIDogaCA8IDMwMFxyXG4gICAgICAgICAgICAgICAgICAgID8gW3gsIDAsIGNdXHJcbiAgICAgICAgICAgICAgICAgICAgOiBbYywgMCwgeF1cclxuICAgICAgICAgICAgICAgICkubWFwKGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKG4gKyBtKSAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgciA9IF9kWzBdLFxyXG4gICAgICAgICAgICBnID0gX2RbMV0sXHJcbiAgICAgICAgICAgIGIgPSBfZFsyXTtcclxuICAgICAgICByZXR1cm4ge3I6IHIsIGc6IGcsIGI6IGIsIGE6IGF9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmdiVG9IU0woX2EpIHtcclxuICAgICAgICB2YXIgcjI1NSA9IF9hLnIsXHJcbiAgICAgICAgICAgIGcyNTUgPSBfYS5nLFxyXG4gICAgICAgICAgICBiMjU1ID0gX2EuYixcclxuICAgICAgICAgICAgX2IgPSBfYS5hLFxyXG4gICAgICAgICAgICBhID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYjtcclxuICAgICAgICB2YXIgciA9IHIyNTUgLyAyNTU7XHJcbiAgICAgICAgdmFyIGcgPSBnMjU1IC8gMjU1O1xyXG4gICAgICAgIHZhciBiID0gYjI1NSAvIDI1NTtcclxuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XHJcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xyXG4gICAgICAgIHZhciBjID0gbWF4IC0gbWluO1xyXG4gICAgICAgIHZhciBsID0gKG1heCArIG1pbikgLyAyO1xyXG4gICAgICAgIGlmIChjID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7aDogMCwgczogMCwgbDogbCwgYTogYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBoID1cclxuICAgICAgICAgICAgKG1heCA9PT0gclxyXG4gICAgICAgICAgICAgICAgPyAoKGcgLSBiKSAvIGMpICUgNlxyXG4gICAgICAgICAgICAgICAgOiBtYXggPT09IGdcclxuICAgICAgICAgICAgICAgID8gKGIgLSByKSAvIGMgKyAyXHJcbiAgICAgICAgICAgICAgICA6IChyIC0gZykgLyBjICsgNCkgKiA2MDtcclxuICAgICAgICBpZiAoaCA8IDApIHtcclxuICAgICAgICAgICAgaCArPSAzNjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzID0gYyAvICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSk7XHJcbiAgICAgICAgcmV0dXJuIHtoOiBoLCBzOiBzLCBsOiBsLCBhOiBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRvRml4ZWQobiwgZGlnaXRzKSB7XHJcbiAgICAgICAgaWYgKGRpZ2l0cyA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGRpZ2l0cyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmaXhlZCA9IG4udG9GaXhlZChkaWdpdHMpO1xyXG4gICAgICAgIGlmIChkaWdpdHMgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpeGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZG90ID0gZml4ZWQuaW5kZXhPZihcIi5cIik7XHJcbiAgICAgICAgaWYgKGRvdCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciB6ZXJvc01hdGNoID0gZml4ZWQubWF0Y2goLzArJC8pO1xyXG4gICAgICAgICAgICBpZiAoemVyb3NNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHplcm9zTWF0Y2guaW5kZXggPT09IGRvdCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZml4ZWQuc3Vic3RyaW5nKDAsIGRvdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZml4ZWQuc3Vic3RyaW5nKDAsIHplcm9zTWF0Y2guaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaXhlZDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJnYlRvU3RyaW5nKHJnYikge1xyXG4gICAgICAgIHZhciByID0gcmdiLnIsXHJcbiAgICAgICAgICAgIGcgPSByZ2IuZyxcclxuICAgICAgICAgICAgYiA9IHJnYi5iLFxyXG4gICAgICAgICAgICBhID0gcmdiLmE7XHJcbiAgICAgICAgaWYgKGEgIT0gbnVsbCAmJiBhIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJyZ2JhKFwiXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQociksIFwiLCBcIilcclxuICAgICAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChnKSwgXCIsIFwiKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKGIpLCBcIiwgXCIpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQoYSwgMiksIFwiKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwicmdiKFwiXHJcbiAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChyKSwgXCIsIFwiKVxyXG4gICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQoZyksIFwiLCBcIilcclxuICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKGIpLCBcIilcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZ2JUb0hleFN0cmluZyhfYSkge1xyXG4gICAgICAgIHZhciByID0gX2EucixcclxuICAgICAgICAgICAgZyA9IF9hLmcsXHJcbiAgICAgICAgICAgIGIgPSBfYS5iLFxyXG4gICAgICAgICAgICBhID0gX2EuYTtcclxuICAgICAgICByZXR1cm4gXCIjXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAoYSAhPSBudWxsICYmIGEgPCAxID8gW3IsIGcsIGIsIE1hdGgucm91bmQoYSAqIDI1NSldIDogW3IsIGcsIGJdKVxyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh4IDwgMTYgPyBcIjBcIiA6IFwiXCIpLmNvbmNhdCh4LnRvU3RyaW5nKDE2KSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oXCJcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaHNsVG9TdHJpbmcoaHNsKSB7XHJcbiAgICAgICAgdmFyIGggPSBoc2wuaCxcclxuICAgICAgICAgICAgcyA9IGhzbC5zLFxyXG4gICAgICAgICAgICBsID0gaHNsLmwsXHJcbiAgICAgICAgICAgIGEgPSBoc2wuYTtcclxuICAgICAgICBpZiAoYSAhPSBudWxsICYmIGEgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImhzbGEoXCJcclxuICAgICAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChoKSwgXCIsIFwiKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKHMgKiAxMDApLCBcIiUsIFwiKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKGwgKiAxMDApLCBcIiUsIFwiKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKGEsIDIpLCBcIilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcImhzbChcIlxyXG4gICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQoaCksIFwiLCBcIilcclxuICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKHMgKiAxMDApLCBcIiUsIFwiKVxyXG4gICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQobCAqIDEwMCksIFwiJSlcIik7XHJcbiAgICB9XHJcbiAgICB2YXIgcmdiTWF0Y2ggPSAvXnJnYmE/XFwoW15cXChcXCldK1xcKSQvO1xyXG4gICAgdmFyIGhzbE1hdGNoID0gL15oc2xhP1xcKFteXFwoXFwpXStcXCkkLztcclxuICAgIHZhciBoZXhNYXRjaCA9IC9eI1swLTlhLWZdKyQvaTtcclxuICAgIGZ1bmN0aW9uIHBhcnNlKCRjb2xvcikge1xyXG4gICAgICAgIHZhciBjID0gJGNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChjLm1hdGNoKHJnYk1hdGNoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VSR0IoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjLm1hdGNoKGhzbE1hdGNoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VIU0woYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjLm1hdGNoKGhleE1hdGNoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VIZXgoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrbm93bkNvbG9ycy5oYXMoYykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldENvbG9yQnlOYW1lKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3lzdGVtQ29sb3JzLmhhcyhjKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0U3lzdGVtQ29sb3IoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkY29sb3IgPT09IFwidHJhbnNwYXJlbnRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge3I6IDAsIGc6IDAsIGI6IDAsIGE6IDB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE51bWJlcnMoJGNvbG9yKSB7XHJcbiAgICAgICAgdmFyIG51bWJlcnMgPSBbXTtcclxuICAgICAgICB2YXIgcHJldlBvcyA9IDA7XHJcbiAgICAgICAgdmFyIGlzTWluaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSAkY29sb3IuaW5kZXhPZihcIihcIik7XHJcbiAgICAgICAgJGNvbG9yID0gJGNvbG9yLnN1YnN0cmluZyhzdGFydEluZGV4ICsgMSwgJGNvbG9yLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJGNvbG9yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gJGNvbG9yW2ldO1xyXG4gICAgICAgICAgICBpZiAoKGMgPj0gXCIwXCIgJiYgYyA8PSBcIjlcIikgfHwgYyA9PT0gXCIuXCIgfHwgYyA9PT0gXCIrXCIgfHwgYyA9PT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgIGlzTWluaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc01pbmluZyAmJiAoYyA9PT0gXCIgXCIgfHwgYyA9PT0gXCIsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJzLnB1c2goJGNvbG9yLnN1YnN0cmluZyhwcmV2UG9zLCBpKSk7XHJcbiAgICAgICAgICAgICAgICBpc01pbmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcHJldlBvcyA9IGkgKyAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc01pbmluZykge1xyXG4gICAgICAgICAgICAgICAgcHJldlBvcyA9IGkgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc01pbmluZykge1xyXG4gICAgICAgICAgICBudW1iZXJzLnB1c2goJGNvbG9yLnN1YnN0cmluZyhwcmV2UG9zLCAkY29sb3IubGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW1iZXJzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TnVtYmVyc0Zyb21TdHJpbmcoc3RyLCByYW5nZSwgdW5pdHMpIHtcclxuICAgICAgICB2YXIgcmF3ID0gZ2V0TnVtYmVycyhzdHIpO1xyXG4gICAgICAgIHZhciB1bml0c0xpc3QgPSBPYmplY3QuZW50cmllcyh1bml0cyk7XHJcbiAgICAgICAgdmFyIG51bWJlcnMgPSByYXdcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHIudHJpbSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyLCBpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbjtcclxuICAgICAgICAgICAgICAgIHZhciB1bml0ID0gdW5pdHNMaXN0LmZpbmQoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKF9hLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdSA9IF9iWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByLmVuZHNXaXRoKHUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodW5pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG4gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocGFyc2VGbG9hdChyLnN1YnN0cmluZygwLCByLmxlbmd0aCAtIHVuaXRbMF0ubGVuZ3RoKSkgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFsxXSkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZVtpXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbiA9IHBhcnNlRmxvYXQocik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VbaV0gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlcnM7XHJcbiAgICB9XHJcbiAgICB2YXIgcmdiUmFuZ2UgPSBbMjU1LCAyNTUsIDI1NSwgMV07XHJcbiAgICB2YXIgcmdiVW5pdHMgPSB7XCIlXCI6IDEwMH07XHJcbiAgICBmdW5jdGlvbiBwYXJzZVJHQigkcmdiKSB7XHJcbiAgICAgICAgdmFyIF9hID0gX19yZWFkKGdldE51bWJlcnNGcm9tU3RyaW5nKCRyZ2IsIHJnYlJhbmdlLCByZ2JVbml0cyksIDQpLFxyXG4gICAgICAgICAgICByID0gX2FbMF0sXHJcbiAgICAgICAgICAgIGcgPSBfYVsxXSxcclxuICAgICAgICAgICAgYiA9IF9hWzJdLFxyXG4gICAgICAgICAgICBfYiA9IF9hWzNdLFxyXG4gICAgICAgICAgICBhID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYjtcclxuICAgICAgICByZXR1cm4ge3I6IHIsIGc6IGcsIGI6IGIsIGE6IGF9O1xyXG4gICAgfVxyXG4gICAgdmFyIGhzbFJhbmdlID0gWzM2MCwgMSwgMSwgMV07XHJcbiAgICB2YXIgaHNsVW5pdHMgPSB7XCIlXCI6IDEwMCwgXCJkZWdcIjogMzYwLCBcInJhZFwiOiAyICogTWF0aC5QSSwgXCJ0dXJuXCI6IDF9O1xyXG4gICAgZnVuY3Rpb24gcGFyc2VIU0woJGhzbCkge1xyXG4gICAgICAgIHZhciBfYSA9IF9fcmVhZChnZXROdW1iZXJzRnJvbVN0cmluZygkaHNsLCBoc2xSYW5nZSwgaHNsVW5pdHMpLCA0KSxcclxuICAgICAgICAgICAgaCA9IF9hWzBdLFxyXG4gICAgICAgICAgICBzID0gX2FbMV0sXHJcbiAgICAgICAgICAgIGwgPSBfYVsyXSxcclxuICAgICAgICAgICAgX2IgPSBfYVszXSxcclxuICAgICAgICAgICAgYSA9IF9iID09PSB2b2lkIDAgPyAxIDogX2I7XHJcbiAgICAgICAgcmV0dXJuIGhzbFRvUkdCKHtoOiBoLCBzOiBzLCBsOiBsLCBhOiBhfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZUhleCgkaGV4KSB7XHJcbiAgICAgICAgdmFyIGggPSAkaGV4LnN1YnN0cmluZygxKTtcclxuICAgICAgICBzd2l0Y2ggKGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgY2FzZSA0OiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBfX3JlYWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChcIlwiLmNvbmNhdChoW2ldKS5jb25jYXQoaFtpXSksIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBfYVswXSxcclxuICAgICAgICAgICAgICAgICAgICBnID0gX2FbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgYiA9IF9hWzJdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPVxyXG4gICAgICAgICAgICAgICAgICAgIGgubGVuZ3RoID09PSAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhcnNlSW50KFwiXCIuY29uY2F0KGhbM10pLmNvbmNhdChoWzNdKSwgMTYpIC8gMjU1O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtyOiByLCBnOiBnLCBiOiBiLCBhOiBhfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgIGNhc2UgODoge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwgMiwgNF0ubWFwKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSwgaSArIDIpLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICByID0gX2JbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IF9iWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIGIgPSBfYlsyXTtcclxuICAgICAgICAgICAgICAgIHZhciBhID1cclxuICAgICAgICAgICAgICAgICAgICBoLmxlbmd0aCA9PT0gNiA/IDEgOiBwYXJzZUludChoLnN1YnN0cmluZyg2LCA4KSwgMTYpIC8gMjU1O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtyOiByLCBnOiBnLCBiOiBiLCBhOiBhfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldENvbG9yQnlOYW1lKCRjb2xvcikge1xyXG4gICAgICAgIHZhciBuID0ga25vd25Db2xvcnMuZ2V0KCRjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcjogKG4gPj4gMTYpICYgMjU1LFxyXG4gICAgICAgICAgICBnOiAobiA+PiA4KSAmIDI1NSxcclxuICAgICAgICAgICAgYjogKG4gPj4gMCkgJiAyNTUsXHJcbiAgICAgICAgICAgIGE6IDFcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U3lzdGVtQ29sb3IoJGNvbG9yKSB7XHJcbiAgICAgICAgdmFyIG4gPSBzeXN0ZW1Db2xvcnMuZ2V0KCRjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcjogKG4gPj4gMTYpICYgMjU1LFxyXG4gICAgICAgICAgICBnOiAobiA+PiA4KSAmIDI1NSxcclxuICAgICAgICAgICAgYjogKG4gPj4gMCkgJiAyNTUsXHJcbiAgICAgICAgICAgIGE6IDFcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbG93ZXJDYWxjRXhwcmVzc2lvbihjb2xvcikge1xyXG4gICAgICAgIHZhciBzZWFyY2hJbmRleCA9IDA7XHJcbiAgICAgICAgdmFyIHJlcGxhY2VCZXR3ZWVuSW5kaWNlcyA9IGZ1bmN0aW9uIChzdGFydCwgZW5kLCByZXBsYWNlbWVudCkge1xyXG4gICAgICAgICAgICBjb2xvciA9XHJcbiAgICAgICAgICAgICAgICBjb2xvci5zdWJzdHJpbmcoMCwgc3RhcnQpICsgcmVwbGFjZW1lbnQgKyBjb2xvci5zdWJzdHJpbmcoZW5kKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdoaWxlICgoc2VhcmNoSW5kZXggPSBjb2xvci5pbmRleE9mKFwiY2FsYyhcIikpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBnZXRQYXJlbnRoZXNlc1JhbmdlKGNvbG9yLCBzZWFyY2hJbmRleCk7XHJcbiAgICAgICAgICAgIGlmICghcmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzbGljZSA9IGNvbG9yLnNsaWNlKHJhbmdlLnN0YXJ0ICsgMSwgcmFuZ2UuZW5kIC0gMSk7XHJcbiAgICAgICAgICAgIHZhciBpbmNsdWRlc1BlcmNlbnRhZ2UgPSBzbGljZS5pbmNsdWRlcyhcIiVcIik7XHJcbiAgICAgICAgICAgIHNsaWNlID0gc2xpY2Uuc3BsaXQoXCIlXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSBNYXRoLnJvdW5kKGV2YWxNYXRoKHNsaWNlKSk7XHJcbiAgICAgICAgICAgIHJlcGxhY2VCZXR3ZWVuSW5kaWNlcyhcclxuICAgICAgICAgICAgICAgIHJhbmdlLnN0YXJ0IC0gNCxcclxuICAgICAgICAgICAgICAgIHJhbmdlLmVuZCxcclxuICAgICAgICAgICAgICAgIG91dHB1dCArIChpbmNsdWRlc1BlcmNlbnRhZ2UgPyBcIiVcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuICAgIHZhciBrbm93bkNvbG9ycyA9IG5ldyBNYXAoXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoe1xyXG4gICAgICAgICAgICBhbGljZWJsdWU6IDB4ZjBmOGZmLFxyXG4gICAgICAgICAgICBhbnRpcXVld2hpdGU6IDB4ZmFlYmQ3LFxyXG4gICAgICAgICAgICBhcXVhOiAweDAwZmZmZixcclxuICAgICAgICAgICAgYXF1YW1hcmluZTogMHg3ZmZmZDQsXHJcbiAgICAgICAgICAgIGF6dXJlOiAweGYwZmZmZixcclxuICAgICAgICAgICAgYmVpZ2U6IDB4ZjVmNWRjLFxyXG4gICAgICAgICAgICBiaXNxdWU6IDB4ZmZlNGM0LFxyXG4gICAgICAgICAgICBibGFjazogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIGJsYW5jaGVkYWxtb25kOiAweGZmZWJjZCxcclxuICAgICAgICAgICAgYmx1ZTogMHgwMDAwZmYsXHJcbiAgICAgICAgICAgIGJsdWV2aW9sZXQ6IDB4OGEyYmUyLFxyXG4gICAgICAgICAgICBicm93bjogMHhhNTJhMmEsXHJcbiAgICAgICAgICAgIGJ1cmx5d29vZDogMHhkZWI4ODcsXHJcbiAgICAgICAgICAgIGNhZGV0Ymx1ZTogMHg1ZjllYTAsXHJcbiAgICAgICAgICAgIGNoYXJ0cmV1c2U6IDB4N2ZmZjAwLFxyXG4gICAgICAgICAgICBjaG9jb2xhdGU6IDB4ZDI2OTFlLFxyXG4gICAgICAgICAgICBjb3JhbDogMHhmZjdmNTAsXHJcbiAgICAgICAgICAgIGNvcm5mbG93ZXJibHVlOiAweDY0OTVlZCxcclxuICAgICAgICAgICAgY29ybnNpbGs6IDB4ZmZmOGRjLFxyXG4gICAgICAgICAgICBjcmltc29uOiAweGRjMTQzYyxcclxuICAgICAgICAgICAgY3lhbjogMHgwMGZmZmYsXHJcbiAgICAgICAgICAgIGRhcmtibHVlOiAweDAwMDA4YixcclxuICAgICAgICAgICAgZGFya2N5YW46IDB4MDA4YjhiLFxyXG4gICAgICAgICAgICBkYXJrZ29sZGVucm9kOiAweGI4ODYwYixcclxuICAgICAgICAgICAgZGFya2dyYXk6IDB4YTlhOWE5LFxyXG4gICAgICAgICAgICBkYXJrZ3JleTogMHhhOWE5YTksXHJcbiAgICAgICAgICAgIGRhcmtncmVlbjogMHgwMDY0MDAsXHJcbiAgICAgICAgICAgIGRhcmtraGFraTogMHhiZGI3NmIsXHJcbiAgICAgICAgICAgIGRhcmttYWdlbnRhOiAweDhiMDA4YixcclxuICAgICAgICAgICAgZGFya29saXZlZ3JlZW46IDB4NTU2YjJmLFxyXG4gICAgICAgICAgICBkYXJrb3JhbmdlOiAweGZmOGMwMCxcclxuICAgICAgICAgICAgZGFya29yY2hpZDogMHg5OTMyY2MsXHJcbiAgICAgICAgICAgIGRhcmtyZWQ6IDB4OGIwMDAwLFxyXG4gICAgICAgICAgICBkYXJrc2FsbW9uOiAweGU5OTY3YSxcclxuICAgICAgICAgICAgZGFya3NlYWdyZWVuOiAweDhmYmM4ZixcclxuICAgICAgICAgICAgZGFya3NsYXRlYmx1ZTogMHg0ODNkOGIsXHJcbiAgICAgICAgICAgIGRhcmtzbGF0ZWdyYXk6IDB4MmY0ZjRmLFxyXG4gICAgICAgICAgICBkYXJrc2xhdGVncmV5OiAweDJmNGY0ZixcclxuICAgICAgICAgICAgZGFya3R1cnF1b2lzZTogMHgwMGNlZDEsXHJcbiAgICAgICAgICAgIGRhcmt2aW9sZXQ6IDB4OTQwMGQzLFxyXG4gICAgICAgICAgICBkZWVwcGluazogMHhmZjE0OTMsXHJcbiAgICAgICAgICAgIGRlZXBza3libHVlOiAweDAwYmZmZixcclxuICAgICAgICAgICAgZGltZ3JheTogMHg2OTY5NjksXHJcbiAgICAgICAgICAgIGRpbWdyZXk6IDB4Njk2OTY5LFxyXG4gICAgICAgICAgICBkb2RnZXJibHVlOiAweDFlOTBmZixcclxuICAgICAgICAgICAgZmlyZWJyaWNrOiAweGIyMjIyMixcclxuICAgICAgICAgICAgZmxvcmFsd2hpdGU6IDB4ZmZmYWYwLFxyXG4gICAgICAgICAgICBmb3Jlc3RncmVlbjogMHgyMjhiMjIsXHJcbiAgICAgICAgICAgIGZ1Y2hzaWE6IDB4ZmYwMGZmLFxyXG4gICAgICAgICAgICBnYWluc2Jvcm86IDB4ZGNkY2RjLFxyXG4gICAgICAgICAgICBnaG9zdHdoaXRlOiAweGY4ZjhmZixcclxuICAgICAgICAgICAgZ29sZDogMHhmZmQ3MDAsXHJcbiAgICAgICAgICAgIGdvbGRlbnJvZDogMHhkYWE1MjAsXHJcbiAgICAgICAgICAgIGdyYXk6IDB4ODA4MDgwLFxyXG4gICAgICAgICAgICBncmV5OiAweDgwODA4MCxcclxuICAgICAgICAgICAgZ3JlZW46IDB4MDA4MDAwLFxyXG4gICAgICAgICAgICBncmVlbnllbGxvdzogMHhhZGZmMmYsXHJcbiAgICAgICAgICAgIGhvbmV5ZGV3OiAweGYwZmZmMCxcclxuICAgICAgICAgICAgaG90cGluazogMHhmZjY5YjQsXHJcbiAgICAgICAgICAgIGluZGlhbnJlZDogMHhjZDVjNWMsXHJcbiAgICAgICAgICAgIGluZGlnbzogMHg0YjAwODIsXHJcbiAgICAgICAgICAgIGl2b3J5OiAweGZmZmZmMCxcclxuICAgICAgICAgICAga2hha2k6IDB4ZjBlNjhjLFxyXG4gICAgICAgICAgICBsYXZlbmRlcjogMHhlNmU2ZmEsXHJcbiAgICAgICAgICAgIGxhdmVuZGVyYmx1c2g6IDB4ZmZmMGY1LFxyXG4gICAgICAgICAgICBsYXduZ3JlZW46IDB4N2NmYzAwLFxyXG4gICAgICAgICAgICBsZW1vbmNoaWZmb246IDB4ZmZmYWNkLFxyXG4gICAgICAgICAgICBsaWdodGJsdWU6IDB4YWRkOGU2LFxyXG4gICAgICAgICAgICBsaWdodGNvcmFsOiAweGYwODA4MCxcclxuICAgICAgICAgICAgbGlnaHRjeWFuOiAweGUwZmZmZixcclxuICAgICAgICAgICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDB4ZmFmYWQyLFxyXG4gICAgICAgICAgICBsaWdodGdyYXk6IDB4ZDNkM2QzLFxyXG4gICAgICAgICAgICBsaWdodGdyZXk6IDB4ZDNkM2QzLFxyXG4gICAgICAgICAgICBsaWdodGdyZWVuOiAweDkwZWU5MCxcclxuICAgICAgICAgICAgbGlnaHRwaW5rOiAweGZmYjZjMSxcclxuICAgICAgICAgICAgbGlnaHRzYWxtb246IDB4ZmZhMDdhLFxyXG4gICAgICAgICAgICBsaWdodHNlYWdyZWVuOiAweDIwYjJhYSxcclxuICAgICAgICAgICAgbGlnaHRza3libHVlOiAweDg3Y2VmYSxcclxuICAgICAgICAgICAgbGlnaHRzbGF0ZWdyYXk6IDB4Nzc4ODk5LFxyXG4gICAgICAgICAgICBsaWdodHNsYXRlZ3JleTogMHg3Nzg4OTksXHJcbiAgICAgICAgICAgIGxpZ2h0c3RlZWxibHVlOiAweGIwYzRkZSxcclxuICAgICAgICAgICAgbGlnaHR5ZWxsb3c6IDB4ZmZmZmUwLFxyXG4gICAgICAgICAgICBsaW1lOiAweDAwZmYwMCxcclxuICAgICAgICAgICAgbGltZWdyZWVuOiAweDMyY2QzMixcclxuICAgICAgICAgICAgbGluZW46IDB4ZmFmMGU2LFxyXG4gICAgICAgICAgICBtYWdlbnRhOiAweGZmMDBmZixcclxuICAgICAgICAgICAgbWFyb29uOiAweDgwMDAwMCxcclxuICAgICAgICAgICAgbWVkaXVtYXF1YW1hcmluZTogMHg2NmNkYWEsXHJcbiAgICAgICAgICAgIG1lZGl1bWJsdWU6IDB4MDAwMGNkLFxyXG4gICAgICAgICAgICBtZWRpdW1vcmNoaWQ6IDB4YmE1NWQzLFxyXG4gICAgICAgICAgICBtZWRpdW1wdXJwbGU6IDB4OTM3MGRiLFxyXG4gICAgICAgICAgICBtZWRpdW1zZWFncmVlbjogMHgzY2IzNzEsXHJcbiAgICAgICAgICAgIG1lZGl1bXNsYXRlYmx1ZTogMHg3YjY4ZWUsXHJcbiAgICAgICAgICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAweDAwZmE5YSxcclxuICAgICAgICAgICAgbWVkaXVtdHVycXVvaXNlOiAweDQ4ZDFjYyxcclxuICAgICAgICAgICAgbWVkaXVtdmlvbGV0cmVkOiAweGM3MTU4NSxcclxuICAgICAgICAgICAgbWlkbmlnaHRibHVlOiAweDE5MTk3MCxcclxuICAgICAgICAgICAgbWludGNyZWFtOiAweGY1ZmZmYSxcclxuICAgICAgICAgICAgbWlzdHlyb3NlOiAweGZmZTRlMSxcclxuICAgICAgICAgICAgbW9jY2FzaW46IDB4ZmZlNGI1LFxyXG4gICAgICAgICAgICBuYXZham93aGl0ZTogMHhmZmRlYWQsXHJcbiAgICAgICAgICAgIG5hdnk6IDB4MDAwMDgwLFxyXG4gICAgICAgICAgICBvbGRsYWNlOiAweGZkZjVlNixcclxuICAgICAgICAgICAgb2xpdmU6IDB4ODA4MDAwLFxyXG4gICAgICAgICAgICBvbGl2ZWRyYWI6IDB4NmI4ZTIzLFxyXG4gICAgICAgICAgICBvcmFuZ2U6IDB4ZmZhNTAwLFxyXG4gICAgICAgICAgICBvcmFuZ2VyZWQ6IDB4ZmY0NTAwLFxyXG4gICAgICAgICAgICBvcmNoaWQ6IDB4ZGE3MGQ2LFxyXG4gICAgICAgICAgICBwYWxlZ29sZGVucm9kOiAweGVlZThhYSxcclxuICAgICAgICAgICAgcGFsZWdyZWVuOiAweDk4ZmI5OCxcclxuICAgICAgICAgICAgcGFsZXR1cnF1b2lzZTogMHhhZmVlZWUsXHJcbiAgICAgICAgICAgIHBhbGV2aW9sZXRyZWQ6IDB4ZGI3MDkzLFxyXG4gICAgICAgICAgICBwYXBheWF3aGlwOiAweGZmZWZkNSxcclxuICAgICAgICAgICAgcGVhY2hwdWZmOiAweGZmZGFiOSxcclxuICAgICAgICAgICAgcGVydTogMHhjZDg1M2YsXHJcbiAgICAgICAgICAgIHBpbms6IDB4ZmZjMGNiLFxyXG4gICAgICAgICAgICBwbHVtOiAweGRkYTBkZCxcclxuICAgICAgICAgICAgcG93ZGVyYmx1ZTogMHhiMGUwZTYsXHJcbiAgICAgICAgICAgIHB1cnBsZTogMHg4MDAwODAsXHJcbiAgICAgICAgICAgIHJlYmVjY2FwdXJwbGU6IDB4NjYzMzk5LFxyXG4gICAgICAgICAgICByZWQ6IDB4ZmYwMDAwLFxyXG4gICAgICAgICAgICByb3N5YnJvd246IDB4YmM4ZjhmLFxyXG4gICAgICAgICAgICByb3lhbGJsdWU6IDB4NDE2OWUxLFxyXG4gICAgICAgICAgICBzYWRkbGVicm93bjogMHg4YjQ1MTMsXHJcbiAgICAgICAgICAgIHNhbG1vbjogMHhmYTgwNzIsXHJcbiAgICAgICAgICAgIHNhbmR5YnJvd246IDB4ZjRhNDYwLFxyXG4gICAgICAgICAgICBzZWFncmVlbjogMHgyZThiNTcsXHJcbiAgICAgICAgICAgIHNlYXNoZWxsOiAweGZmZjVlZSxcclxuICAgICAgICAgICAgc2llbm5hOiAweGEwNTIyZCxcclxuICAgICAgICAgICAgc2lsdmVyOiAweGMwYzBjMCxcclxuICAgICAgICAgICAgc2t5Ymx1ZTogMHg4N2NlZWIsXHJcbiAgICAgICAgICAgIHNsYXRlYmx1ZTogMHg2YTVhY2QsXHJcbiAgICAgICAgICAgIHNsYXRlZ3JheTogMHg3MDgwOTAsXHJcbiAgICAgICAgICAgIHNsYXRlZ3JleTogMHg3MDgwOTAsXHJcbiAgICAgICAgICAgIHNub3c6IDB4ZmZmYWZhLFxyXG4gICAgICAgICAgICBzcHJpbmdncmVlbjogMHgwMGZmN2YsXHJcbiAgICAgICAgICAgIHN0ZWVsYmx1ZTogMHg0NjgyYjQsXHJcbiAgICAgICAgICAgIHRhbjogMHhkMmI0OGMsXHJcbiAgICAgICAgICAgIHRlYWw6IDB4MDA4MDgwLFxyXG4gICAgICAgICAgICB0aGlzdGxlOiAweGQ4YmZkOCxcclxuICAgICAgICAgICAgdG9tYXRvOiAweGZmNjM0NyxcclxuICAgICAgICAgICAgdHVycXVvaXNlOiAweDQwZTBkMCxcclxuICAgICAgICAgICAgdmlvbGV0OiAweGVlODJlZSxcclxuICAgICAgICAgICAgd2hlYXQ6IDB4ZjVkZWIzLFxyXG4gICAgICAgICAgICB3aGl0ZTogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIHdoaXRlc21va2U6IDB4ZjVmNWY1LFxyXG4gICAgICAgICAgICB5ZWxsb3c6IDB4ZmZmZjAwLFxyXG4gICAgICAgICAgICB5ZWxsb3dncmVlbjogMHg5YWNkMzJcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICAgIHZhciBzeXN0ZW1Db2xvcnMgPSBuZXcgTWFwKFxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHtcclxuICAgICAgICAgICAgXCJBY3RpdmVCb3JkZXJcIjogMHgzYjk5ZmMsXHJcbiAgICAgICAgICAgIFwiQWN0aXZlQ2FwdGlvblwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJBcHBXb3Jrc3BhY2VcIjogMHhhYWFhYWEsXHJcbiAgICAgICAgICAgIFwiQmFja2dyb3VuZFwiOiAweDYzNjNjZSxcclxuICAgICAgICAgICAgXCJCdXR0b25GYWNlXCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIkJ1dHRvbkhpZ2hsaWdodFwiOiAweGU5ZTllOSxcclxuICAgICAgICAgICAgXCJCdXR0b25TaGFkb3dcIjogMHg5ZmEwOWYsXHJcbiAgICAgICAgICAgIFwiQnV0dG9uVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJDYXB0aW9uVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJHcmF5VGV4dFwiOiAweDdmN2Y3ZixcclxuICAgICAgICAgICAgXCJIaWdobGlnaHRcIjogMHhiMmQ3ZmYsXHJcbiAgICAgICAgICAgIFwiSGlnaGxpZ2h0VGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJJbmFjdGl2ZUJvcmRlclwiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJJbmFjdGl2ZUNhcHRpb25cIjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIFwiSW5hY3RpdmVDYXB0aW9uVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJJbmZvQmFja2dyb3VuZFwiOiAweGZiZmNjNSxcclxuICAgICAgICAgICAgXCJJbmZvVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJNZW51XCI6IDB4ZjZmNmY2LFxyXG4gICAgICAgICAgICBcIk1lbnVUZXh0XCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIlNjcm9sbGJhclwiOiAweGFhYWFhYSxcclxuICAgICAgICAgICAgXCJUaHJlZUREYXJrU2hhZG93XCI6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBcIlRocmVlREZhY2VcIjogMHhjMGMwYzAsXHJcbiAgICAgICAgICAgIFwiVGhyZWVESGlnaGxpZ2h0XCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIlRocmVlRExpZ2h0U2hhZG93XCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIlRocmVlRFNoYWRvd1wiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJXaW5kb3dcIjogMHhlY2VjZWMsXHJcbiAgICAgICAgICAgIFwiV2luZG93RnJhbWVcIjogMHhhYWFhYWEsXHJcbiAgICAgICAgICAgIFwiV2luZG93VGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCItd2Via2l0LWZvY3VzLXJpbmctY29sb3JcIjogMHhlNTk3MDBcclxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMiksXHJcbiAgICAgICAgICAgICAgICBrZXkgPSBfYlswXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gX2JbMV07XHJcbiAgICAgICAgICAgIHJldHVybiBba2V5LnRvTG93ZXJDYXNlKCksIHZhbHVlXTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICAgIGZ1bmN0aW9uIGdldFNSR0JMaWdodG5lc3MociwgZywgYikge1xyXG4gICAgICAgIHJldHVybiAoMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiKSAvIDI1NTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzY2FsZSh4LCBpbkxvdywgaW5IaWdoLCBvdXRMb3csIG91dEhpZ2gpIHtcclxuICAgICAgICByZXR1cm4gKCh4IC0gaW5Mb3cpICogKG91dEhpZ2ggLSBvdXRMb3cpKSAvIChpbkhpZ2ggLSBpbkxvdykgKyBvdXRMb3c7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGFtcCh4LCBtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgeCkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlNYXRyaWNlcyhtMSwgbTIpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG0xLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgbGVuMiA9IG0yWzBdLmxlbmd0aDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN1bSA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMCwgbGVuMyA9IG0xWzBdLmxlbmd0aDsgayA8IGxlbjM7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBtMVtpXVtrXSAqIG0yW2tdW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldW2pdID0gc3VtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmlsdGVyTWF0cml4KGNvbmZpZykge1xyXG4gICAgICAgIHZhciBtID0gTWF0cml4LmlkZW50aXR5KCk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5zZXBpYSAhPT0gMCkge1xyXG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguc2VwaWEoY29uZmlnLnNlcGlhIC8gMTAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuZ3JheXNjYWxlICE9PSAwKSB7XHJcbiAgICAgICAgICAgIG0gPSBtdWx0aXBseU1hdHJpY2VzKG0sIE1hdHJpeC5ncmF5c2NhbGUoY29uZmlnLmdyYXlzY2FsZSAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmNvbnRyYXN0ICE9PSAxMDApIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LmNvbnRyYXN0KGNvbmZpZy5jb250cmFzdCAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmJyaWdodG5lc3MgIT09IDEwMCkge1xyXG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguYnJpZ2h0bmVzcyhjb25maWcuYnJpZ2h0bmVzcyAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLm1vZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LmludmVydE5IdWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXBwbHlDb2xvck1hdHJpeChfYSwgbWF0cml4KSB7XHJcbiAgICAgICAgdmFyIF9iID0gX19yZWFkKF9hLCAzKSxcclxuICAgICAgICAgICAgciA9IF9iWzBdLFxyXG4gICAgICAgICAgICBnID0gX2JbMV0sXHJcbiAgICAgICAgICAgIGIgPSBfYlsyXTtcclxuICAgICAgICB2YXIgcmdiID0gW1tyIC8gMjU1XSwgW2cgLyAyNTVdLCBbYiAvIDI1NV0sIFsxXSwgWzFdXTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbXVsdGlwbHlNYXRyaWNlcyhtYXRyaXgsIHJnYik7XHJcbiAgICAgICAgcmV0dXJuIFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNsYW1wKE1hdGgucm91bmQocmVzdWx0W2ldWzBdICogMjU1KSwgMCwgMjU1KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBNYXRyaXggPSB7XHJcbiAgICAgICAgaWRlbnRpdHk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW52ZXJ0Tkh1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgWzAuMzMzLCAtMC42NjcsIC0wLjY2NywgMCwgMV0sXHJcbiAgICAgICAgICAgICAgICBbLTAuNjY3LCAwLjMzMywgLTAuNjY3LCAwLCAxXSxcclxuICAgICAgICAgICAgICAgIFstMC42NjcsIC0wLjY2NywgMC4zMzMsIDAsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBicmlnaHRuZXNzOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW3YsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIHYsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIHYsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cmFzdDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSAoMSAtIHYpIC8gMjtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFt2LCAwLCAwLCAwLCB0XSxcclxuICAgICAgICAgICAgICAgIFswLCB2LCAwLCAwLCB0XSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCB2LCAwLCB0XSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VwaWE6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4zOTMgKyAwLjYwNyAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC43NjkgLSAwLjc2OSAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4xODkgLSAwLjE4OSAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMzQ5IC0gMC4zNDkgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNjg2ICsgMC4zMTQgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMTY4IC0gMC4xNjggKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjI3MiAtIDAuMjcyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjUzNCAtIDAuNTM0ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjEzMSArIDAuODY5ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdyYXlzY2FsZTogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjIxMjYgKyAwLjc4NzQgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNzE1MiAtIDAuNzE1MiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wNzIyIC0gMC4wNzIyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4yMTI2IC0gMC4yMTI2ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjcxNTIgKyAwLjI4NDggKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMDcyMiAtIDAuMDcyMiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMjEyNiAtIDAuMjEyNiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC43MTUyIC0gMC43MTUyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjA3MjIgKyAwLjkyNzggKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QmdQb2xlKHRoZW1lKSB7XHJcbiAgICAgICAgdmFyIGlzRGFya1NjaGVtZSA9IHRoZW1lLm1vZGUgPT09IDE7XHJcbiAgICAgICAgdmFyIHByb3AgPSBpc0RhcmtTY2hlbWVcclxuICAgICAgICAgICAgPyBcImRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIlxyXG4gICAgICAgICAgICA6IFwibGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIjtcclxuICAgICAgICByZXR1cm4gdGhlbWVbcHJvcF07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRGZ1BvbGUodGhlbWUpIHtcclxuICAgICAgICB2YXIgaXNEYXJrU2NoZW1lID0gdGhlbWUubW9kZSA9PT0gMTtcclxuICAgICAgICB2YXIgcHJvcCA9IGlzRGFya1NjaGVtZVxyXG4gICAgICAgICAgICA/IFwiZGFya1NjaGVtZVRleHRDb2xvclwiXHJcbiAgICAgICAgICAgIDogXCJsaWdodFNjaGVtZVRleHRDb2xvclwiO1xyXG4gICAgICAgIHJldHVybiB0aGVtZVtwcm9wXTtcclxuICAgIH1cclxuICAgIHZhciBjb2xvck1vZGlmaWNhdGlvbkNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gY2xlYXJDb2xvck1vZGlmaWNhdGlvbkNhY2hlKCkge1xyXG4gICAgICAgIGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIHZhciByZ2JDYWNoZUtleXMgPSBbXCJyXCIsIFwiZ1wiLCBcImJcIiwgXCJhXCJdO1xyXG4gICAgdmFyIHRoZW1lQ2FjaGVLZXlzJDEgPSBbXHJcbiAgICAgICAgXCJtb2RlXCIsXHJcbiAgICAgICAgXCJicmlnaHRuZXNzXCIsXHJcbiAgICAgICAgXCJjb250cmFzdFwiLFxyXG4gICAgICAgIFwiZ3JheXNjYWxlXCIsXHJcbiAgICAgICAgXCJzZXBpYVwiLFxyXG4gICAgICAgIFwiZGFya1NjaGVtZUJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIFwiZGFya1NjaGVtZVRleHRDb2xvclwiLFxyXG4gICAgICAgIFwibGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBcImxpZ2h0U2NoZW1lVGV4dENvbG9yXCJcclxuICAgIF07XHJcbiAgICBmdW5jdGlvbiBnZXRDYWNoZUlkKHJnYiwgdGhlbWUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0SWQgPSBcIlwiO1xyXG4gICAgICAgIHJnYkNhY2hlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgcmVzdWx0SWQgKz0gXCJcIi5jb25jYXQocmdiW2tleV0sIFwiO1wiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGVtZUNhY2hlS2V5cyQxLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXN1bHRJZCArPSBcIlwiLmNvbmNhdCh0aGVtZVtrZXldLCBcIjtcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdElkO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgcmdiLFxyXG4gICAgICAgIHRoZW1lLFxyXG4gICAgICAgIG1vZGlmeUhTTCxcclxuICAgICAgICBwb2xlQ29sb3IsXHJcbiAgICAgICAgYW5vdGhlclBvbGVDb2xvclxyXG4gICAgKSB7XHJcbiAgICAgICAgdmFyIGZuQ2FjaGU7XHJcbiAgICAgICAgaWYgKGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuaGFzKG1vZGlmeUhTTCkpIHtcclxuICAgICAgICAgICAgZm5DYWNoZSA9IGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuZ2V0KG1vZGlmeUhTTCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm5DYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgY29sb3JNb2RpZmljYXRpb25DYWNoZS5zZXQobW9kaWZ5SFNMLCBmbkNhY2hlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGlkID0gZ2V0Q2FjaGVJZChyZ2IsIHRoZW1lKTtcclxuICAgICAgICBpZiAoZm5DYWNoZS5oYXMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmbkNhY2hlLmdldChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBoc2wgPSByZ2JUb0hTTChyZ2IpO1xyXG4gICAgICAgIHZhciBwb2xlID0gcG9sZUNvbG9yID09IG51bGwgPyBudWxsIDogcGFyc2VUb0hTTFdpdGhDYWNoZShwb2xlQ29sb3IpO1xyXG4gICAgICAgIHZhciBhbm90aGVyUG9sZSA9XHJcbiAgICAgICAgICAgIGFub3RoZXJQb2xlQ29sb3IgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICA6IHBhcnNlVG9IU0xXaXRoQ2FjaGUoYW5vdGhlclBvbGVDb2xvcik7XHJcbiAgICAgICAgdmFyIG1vZGlmaWVkID0gbW9kaWZ5SFNMKGhzbCwgcG9sZSwgYW5vdGhlclBvbGUpO1xyXG4gICAgICAgIHZhciBfYSA9IGhzbFRvUkdCKG1vZGlmaWVkKSxcclxuICAgICAgICAgICAgciA9IF9hLnIsXHJcbiAgICAgICAgICAgIGcgPSBfYS5nLFxyXG4gICAgICAgICAgICBiID0gX2EuYixcclxuICAgICAgICAgICAgYSA9IF9hLmE7XHJcbiAgICAgICAgdmFyIG1hdHJpeCA9IGNyZWF0ZUZpbHRlck1hdHJpeCh0aGVtZSk7XHJcbiAgICAgICAgdmFyIF9iID0gX19yZWFkKGFwcGx5Q29sb3JNYXRyaXgoW3IsIGcsIGJdLCBtYXRyaXgpLCAzKSxcclxuICAgICAgICAgICAgcmYgPSBfYlswXSxcclxuICAgICAgICAgICAgZ2YgPSBfYlsxXSxcclxuICAgICAgICAgICAgYmYgPSBfYlsyXTtcclxuICAgICAgICB2YXIgY29sb3IgPVxyXG4gICAgICAgICAgICBhID09PSAxXHJcbiAgICAgICAgICAgICAgICA/IHJnYlRvSGV4U3RyaW5nKHtyOiByZiwgZzogZ2YsIGI6IGJmfSlcclxuICAgICAgICAgICAgICAgIDogcmdiVG9TdHJpbmcoe3I6IHJmLCBnOiBnZiwgYjogYmYsIGE6IGF9KTtcclxuICAgICAgICBmbkNhY2hlLnNldChpZCwgY29sb3IpO1xyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG5vb3BIU0woaHNsKSB7XHJcbiAgICAgICAgcmV0dXJuIGhzbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUNvbG9yKHJnYiwgdGhlbWUpIHtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUocmdiLCB0aGVtZSwgbm9vcEhTTCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlMaWdodFNjaGVtZUNvbG9yKHJnYiwgdGhlbWUpIHtcclxuICAgICAgICB2YXIgcG9sZUJnID0gZ2V0QmdQb2xlKHRoZW1lKTtcclxuICAgICAgICB2YXIgcG9sZUZnID0gZ2V0RmdQb2xlKHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgICAgIHJnYixcclxuICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgIG1vZGlmeUxpZ2h0TW9kZUhTTCxcclxuICAgICAgICAgICAgcG9sZUZnLFxyXG4gICAgICAgICAgICBwb2xlQmdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5TGlnaHRNb2RlSFNMKF9hLCBwb2xlRmcsIHBvbGVCZykge1xyXG4gICAgICAgIHZhciBoID0gX2EuaCxcclxuICAgICAgICAgICAgcyA9IF9hLnMsXHJcbiAgICAgICAgICAgIGwgPSBfYS5sLFxyXG4gICAgICAgICAgICBhID0gX2EuYTtcclxuICAgICAgICB2YXIgaXNEYXJrID0gbCA8IDAuNTtcclxuICAgICAgICB2YXIgaXNOZXV0cmFsO1xyXG4gICAgICAgIGlmIChpc0RhcmspIHtcclxuICAgICAgICAgICAgaXNOZXV0cmFsID0gbCA8IDAuMiB8fCBzIDwgMC4xMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaXNCbHVlID0gaCA+IDIwMCAmJiBoIDwgMjgwO1xyXG4gICAgICAgICAgICBpc05ldXRyYWwgPSBzIDwgMC4yNCB8fCAobCA+IDAuOCAmJiBpc0JsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHggPSBoO1xyXG4gICAgICAgIHZhciBzeCA9IGw7XHJcbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICBpZiAoaXNEYXJrKSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVGZy5oO1xyXG4gICAgICAgICAgICAgICAgc3ggPSBwb2xlRmcucztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gcG9sZUJnLmg7XHJcbiAgICAgICAgICAgICAgICBzeCA9IHBvbGVCZy5zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBseCA9IHNjYWxlKGwsIDAsIDEsIHBvbGVGZy5sLCBwb2xlQmcubCk7XHJcbiAgICAgICAgcmV0dXJuIHtoOiBoeCwgczogc3gsIGw6IGx4LCBhOiBhfTtcclxuICAgIH1cclxuICAgIHZhciBNQVhfQkdfTElHSFRORVNTID0gMC40O1xyXG4gICAgZnVuY3Rpb24gbW9kaWZ5QmdIU0woX2EsIHBvbGUpIHtcclxuICAgICAgICB2YXIgaCA9IF9hLmgsXHJcbiAgICAgICAgICAgIHMgPSBfYS5zLFxyXG4gICAgICAgICAgICBsID0gX2EubCxcclxuICAgICAgICAgICAgYSA9IF9hLmE7XHJcbiAgICAgICAgdmFyIGlzRGFyayA9IGwgPCAwLjU7XHJcbiAgICAgICAgdmFyIGlzQmx1ZSA9IGggPiAyMDAgJiYgaCA8IDI4MDtcclxuICAgICAgICB2YXIgaXNOZXV0cmFsID0gcyA8IDAuMTIgfHwgKGwgPiAwLjggJiYgaXNCbHVlKTtcclxuICAgICAgICBpZiAoaXNEYXJrKSB7XHJcbiAgICAgICAgICAgIHZhciBseF8xID0gc2NhbGUobCwgMCwgMC41LCAwLCBNQVhfQkdfTElHSFRORVNTKTtcclxuICAgICAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGh4XzEgPSBwb2xlLmg7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3ggPSBwb2xlLnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2g6IGh4XzEsIHM6IHN4LCBsOiBseF8xLCBhOiBhfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge2g6IGgsIHM6IHMsIGw6IGx4XzEsIGE6IGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbHggPSBzY2FsZShsLCAwLjUsIDEsIE1BWF9CR19MSUdIVE5FU1MsIHBvbGUubCk7XHJcbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICB2YXIgaHhfMiA9IHBvbGUuaDtcclxuICAgICAgICAgICAgdmFyIHN4ID0gcG9sZS5zO1xyXG4gICAgICAgICAgICByZXR1cm4ge2g6IGh4XzIsIHM6IHN4LCBsOiBseCwgYTogYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBoeCA9IGg7XHJcbiAgICAgICAgdmFyIGlzWWVsbG93ID0gaCA+IDYwICYmIGggPCAxODA7XHJcbiAgICAgICAgaWYgKGlzWWVsbG93KSB7XHJcbiAgICAgICAgICAgIHZhciBpc0Nsb3NlclRvR3JlZW4gPSBoID4gMTIwO1xyXG4gICAgICAgICAgICBpZiAoaXNDbG9zZXJUb0dyZWVuKSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHNjYWxlKGgsIDEyMCwgMTgwLCAxMzUsIDE4MCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHNjYWxlKGgsIDYwLCAxMjAsIDYwLCAxMDUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoeCA+IDQwICYmIGh4IDwgODApIHtcclxuICAgICAgICAgICAgbHggKj0gMC43NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtoOiBoeCwgczogcywgbDogbHgsIGE6IGF9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHJnYiwgdGhlbWUpIHtcclxuICAgICAgICBpZiAodGhlbWUubW9kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kaWZ5TGlnaHRTY2hlbWVDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBvbGUgPSBnZXRCZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlDb2xvcldpdGhDYWNoZShcclxuICAgICAgICAgICAgcmdiLFxyXG4gICAgICAgICAgICBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhlbWUpLCB7bW9kZTogMH0pLFxyXG4gICAgICAgICAgICBtb2RpZnlCZ0hTTCxcclxuICAgICAgICAgICAgcG9sZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICB2YXIgTUlOX0ZHX0xJR0hUTkVTUyA9IDAuNTU7XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCbHVlRmdIdWUoaHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNjYWxlKGh1ZSwgMjA1LCAyNDUsIDIwNSwgMjIwKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUZnSFNMKF9hLCBwb2xlKSB7XHJcbiAgICAgICAgdmFyIGggPSBfYS5oLFxyXG4gICAgICAgICAgICBzID0gX2EucyxcclxuICAgICAgICAgICAgbCA9IF9hLmwsXHJcbiAgICAgICAgICAgIGEgPSBfYS5hO1xyXG4gICAgICAgIHZhciBpc0xpZ2h0ID0gbCA+IDAuNTtcclxuICAgICAgICB2YXIgaXNOZXV0cmFsID0gbCA8IDAuMiB8fCBzIDwgMC4yNDtcclxuICAgICAgICB2YXIgaXNCbHVlID0gIWlzTmV1dHJhbCAmJiBoID4gMjA1ICYmIGggPCAyNDU7XHJcbiAgICAgICAgaWYgKGlzTGlnaHQpIHtcclxuICAgICAgICAgICAgdmFyIGx4XzIgPSBzY2FsZShsLCAwLjUsIDEsIE1JTl9GR19MSUdIVE5FU1MsIHBvbGUubCk7XHJcbiAgICAgICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoeF8zID0gcG9sZS5oO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN4ID0gcG9sZS5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtoOiBoeF8zLCBzOiBzeCwgbDogbHhfMiwgYTogYX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGh4XzQgPSBoO1xyXG4gICAgICAgICAgICBpZiAoaXNCbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBoeF80ID0gbW9kaWZ5Qmx1ZUZnSHVlKGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7aDogaHhfNCwgczogcywgbDogbHhfMiwgYTogYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgdmFyIGh4XzUgPSBwb2xlLmg7XHJcbiAgICAgICAgICAgIHZhciBzeCA9IHBvbGUucztcclxuICAgICAgICAgICAgdmFyIGx4XzMgPSBzY2FsZShsLCAwLCAwLjUsIHBvbGUubCwgTUlOX0ZHX0xJR0hUTkVTUyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7aDogaHhfNSwgczogc3gsIGw6IGx4XzMsIGE6IGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHggPSBoO1xyXG4gICAgICAgIHZhciBseDtcclxuICAgICAgICBpZiAoaXNCbHVlKSB7XHJcbiAgICAgICAgICAgIGh4ID0gbW9kaWZ5Qmx1ZUZnSHVlKGgpO1xyXG4gICAgICAgICAgICBseCA9IHNjYWxlKGwsIDAsIDAuNSwgcG9sZS5sLCBNYXRoLm1pbigxLCBNSU5fRkdfTElHSFRORVNTICsgMC4wNSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGx4ID0gc2NhbGUobCwgMCwgMC41LCBwb2xlLmwsIE1JTl9GR19MSUdIVE5FU1MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzLCBsOiBseCwgYTogYX07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIGlmICh0aGVtZS5tb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RpZnlMaWdodFNjaGVtZUNvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcG9sZSA9IGdldEZnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUNvbG9yV2l0aENhY2hlKFxyXG4gICAgICAgICAgICByZ2IsXHJcbiAgICAgICAgICAgIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGVtZSksIHttb2RlOiAwfSksXHJcbiAgICAgICAgICAgIG1vZGlmeUZnSFNMLFxyXG4gICAgICAgICAgICBwb2xlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJvcmRlckhTTChfYSwgcG9sZUZnLCBwb2xlQmcpIHtcclxuICAgICAgICB2YXIgaCA9IF9hLmgsXHJcbiAgICAgICAgICAgIHMgPSBfYS5zLFxyXG4gICAgICAgICAgICBsID0gX2EubCxcclxuICAgICAgICAgICAgYSA9IF9hLmE7XHJcbiAgICAgICAgdmFyIGlzRGFyayA9IGwgPCAwLjU7XHJcbiAgICAgICAgdmFyIGlzTmV1dHJhbCA9IGwgPCAwLjIgfHwgcyA8IDAuMjQ7XHJcbiAgICAgICAgdmFyIGh4ID0gaDtcclxuICAgICAgICB2YXIgc3ggPSBzO1xyXG4gICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgaWYgKGlzRGFyaykge1xyXG4gICAgICAgICAgICAgICAgaHggPSBwb2xlRmcuaDtcclxuICAgICAgICAgICAgICAgIHN4ID0gcG9sZUZnLnM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVCZy5oO1xyXG4gICAgICAgICAgICAgICAgc3ggPSBwb2xlQmcucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbHggPSBzY2FsZShsLCAwLCAxLCAwLjUsIDAuMik7XHJcbiAgICAgICAgcmV0dXJuIHtoOiBoeCwgczogc3gsIGw6IGx4LCBhOiBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJvcmRlckNvbG9yKHJnYiwgdGhlbWUpIHtcclxuICAgICAgICBpZiAodGhlbWUubW9kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kaWZ5TGlnaHRTY2hlbWVDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBvbGVGZyA9IGdldEZnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgdmFyIHBvbGVCZyA9IGdldEJnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUNvbG9yV2l0aENhY2hlKFxyXG4gICAgICAgICAgICByZ2IsXHJcbiAgICAgICAgICAgIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGVtZSksIHttb2RlOiAwfSksXHJcbiAgICAgICAgICAgIG1vZGlmeUJvcmRlckhTTCxcclxuICAgICAgICAgICAgcG9sZUZnLFxyXG4gICAgICAgICAgICBwb2xlQmdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5U2hhZG93Q29sb3IocmdiLCBmaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHJnYiwgZmlsdGVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUdyYWRpZW50Q29sb3IocmdiLCBmaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHJnYiwgZmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUZXh0U3R5bGUoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIGxpbmVzID0gW107XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgJyo6bm90KHByZSwgcHJlICosIGNvZGUsIC5mYXIsIC5mYSwgLmdseXBoaWNvbiwgW2NsYXNzKj1cInZqcy1cIl0sIC5mYWIsIC5mYS1naXRodWIsIC5mYXMsIC5tYXRlcmlhbC1pY29ucywgLmljb2ZvbnQsIC50eXBjbiwgbXUsIFtjbGFzcyo9XCJtdS1cIl0sIC5nbHlwaGljb24sIC5pY29uKSB7J1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy51c2VGb250ICYmIGNvbmZpZy5mb250RmFtaWx5KSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBcIiAgZm9udC1mYW1pbHk6IFwiLmNvbmNhdChjb25maWcuZm9udEZhbWlseSwgXCIgIWltcG9ydGFudDtcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy50ZXh0U3Ryb2tlID4gMCkge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgXCIgIC13ZWJraXQtdGV4dC1zdHJva2U6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcudGV4dFN0cm9rZSxcclxuICAgICAgICAgICAgICAgICAgICBcInB4ICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIFwiICB0ZXh0LXN0cm9rZTogXCIuY29uY2F0KGNvbmZpZy50ZXh0U3Ryb2tlLCBcInB4ICFpbXBvcnRhbnQ7XCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBGaWx0ZXJNb2RlO1xyXG4gICAgKGZ1bmN0aW9uIChGaWx0ZXJNb2RlKSB7XHJcbiAgICAgICAgRmlsdGVyTW9kZVsoRmlsdGVyTW9kZVtcImxpZ2h0XCJdID0gMCldID0gXCJsaWdodFwiO1xyXG4gICAgICAgIEZpbHRlck1vZGVbKEZpbHRlck1vZGVbXCJkYXJrXCJdID0gMSldID0gXCJkYXJrXCI7XHJcbiAgICB9KShGaWx0ZXJNb2RlIHx8IChGaWx0ZXJNb2RlID0ge30pKTtcclxuICAgIGZ1bmN0aW9uIGdldENTU0ZpbHRlclZhbHVlKGNvbmZpZykge1xyXG4gICAgICAgIHZhciBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgaWYgKGNvbmZpZy5tb2RlID09PSBGaWx0ZXJNb2RlLmRhcmspIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKFwiaW52ZXJ0KDEwMCUpIGh1ZS1yb3RhdGUoMTgwZGVnKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5icmlnaHRuZXNzICE9PSAxMDApIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKFwiYnJpZ2h0bmVzcyhcIi5jb25jYXQoY29uZmlnLmJyaWdodG5lc3MsIFwiJSlcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmNvbnRyYXN0ICE9PSAxMDApIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKFwiY29udHJhc3QoXCIuY29uY2F0KGNvbmZpZy5jb250cmFzdCwgXCIlKVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuZ3JheXNjYWxlICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaChcImdyYXlzY2FsZShcIi5jb25jYXQoY29uZmlnLmdyYXlzY2FsZSwgXCIlKVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuc2VwaWEgIT09IDApIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKFwic2VwaWEoXCIuY29uY2F0KGNvbmZpZy5zZXBpYSwgXCIlKVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcnMuam9pbihcIiBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9TVkdNYXRyaXgobWF0cml4KSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdHJpeFxyXG4gICAgICAgICAgICAuc2xpY2UoMCwgNClcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1cclxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnRvRml4ZWQoMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbihcIiBcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFNWR0ZpbHRlck1hdHJpeFZhbHVlKGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0b1NWR01hdHJpeChjcmVhdGVGaWx0ZXJNYXRyaXgoY29uZmlnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgdmFyIHJlc29sdmVycyQxID0gbmV3IE1hcCgpO1xyXG4gICAgdmFyIHJlamVjdG9ycyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGJnRmV0Y2gocmVxdWVzdCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gKytjb3VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlcnMkMS5zZXQoaWQsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3RvcnMuc2V0KGlkLCByZWplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5DU19GRVRDSCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciB0eXBlID0gX2EudHlwZSxcclxuICAgICAgICAgICAgZGF0YSA9IF9hLmRhdGEsXHJcbiAgICAgICAgICAgIGVycm9yID0gX2EuZXJyb3IsXHJcbiAgICAgICAgICAgIGlkID0gX2EuaWQ7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IE1lc3NhZ2VUeXBlLkJHX0ZFVENIX1JFU1BPTlNFKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNvbHZlID0gcmVzb2x2ZXJzJDEuZ2V0KGlkKTtcclxuICAgICAgICAgICAgdmFyIHJlamVjdCA9IHJlamVjdG9ycy5nZXQoaWQpO1xyXG4gICAgICAgICAgICByZXNvbHZlcnMkMS5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICByZWplY3RvcnMuZGVsZXRlKGlkKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QgJiYgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUgJiYgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBBc3luY1F1ZXVlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBBc3luY1F1ZXVlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXN5bmNRdWV1ZS5wcm90b3R5cGUuYWRkVG9RdWV1ZSA9IGZ1bmN0aW9uIChlbnRyeSkge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlLnB1c2goZW50cnkpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0UXVldWUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEFzeW5jUXVldWUucHJvdG90eXBlLnN0b3BRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQXN5bmNRdWV1ZS5wcm90b3R5cGUuc3RhcnRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50aW1lcklkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2I7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGNiID0gX3RoaXMucXVldWUuc2hpZnQoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPj0gX3RoaXMuZnJhbWVEdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdGFydFF1ZXVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gQXN5bmNRdWV1ZTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIGltYWdlTWFuYWdlciA9IG5ldyBBc3luY1F1ZXVlKCk7XHJcbiAgICBmdW5jdGlvbiBnZXRJbWFnZURldGFpbHModXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFVUkwsIGVycm9yXzEsIGltYWdlXzEsIGVycm9yXzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVybC5zdGFydHNXaXRoKFwiZGF0YTpcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFVUkwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBnZXRJbWFnZURhdGFVUkwodXJsKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFVUkwgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFs0LCA2LCAsIDddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdXJsVG9JbWFnZShkYXRhVVJMKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZU1hbmFnZXIuYWRkVG9RdWV1ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19hc3NpZ24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVSTDogZGF0YVVSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW1hZ2VfMS5uYXR1cmFsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZV8xLm5hdHVyYWxIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmFseXplSW1hZ2UoaW1hZ2VfMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3JfMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRJbWFnZURhdGFVUkwodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcGFyc2VkVVJMO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRVUkwgPSBuZXcgVVJMKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHBhcnNlZFVSTC5vcmlnaW4gPT09IGxvY2F0aW9uLm9yaWdpbikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGxvYWRBc0RhdGFVUkwodXJsKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnRmV0Y2goe3VybDogdXJsLCByZXNwb25zZVR5cGU6IFwiZGF0YS11cmxcIn0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXJsVG9JbWFnZSh1cmwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KFwiVW5hYmxlIHRvIGxvYWQgaW1hZ2UgXCIuY29uY2F0KHVybCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIE1BWF9BTkFMSVpFX1BJWEVMU19DT1VOVCA9IDMyICogMzI7XHJcbiAgICB2YXIgY2FudmFzO1xyXG4gICAgdmFyIGNvbnRleHQ7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgdmFyIG1heFdpZHRoID0gTUFYX0FOQUxJWkVfUElYRUxTX0NPVU5UO1xyXG4gICAgICAgIHZhciBtYXhIZWlnaHQgPSBNQVhfQU5BTElaRV9QSVhFTFNfQ09VTlQ7XHJcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBtYXhXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG4gICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVDYW52YXMoKSB7XHJcbiAgICAgICAgY2FudmFzID0gbnVsbDtcclxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciBNQVhfSU1BR0VfU0laRSA9IDUgKiAxMDI0ICogMTAyNDtcclxuICAgIGZ1bmN0aW9uIGFuYWx5emVJbWFnZShpbWFnZSkge1xyXG4gICAgICAgIGlmICghY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNhbnZhcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmF0dXJhbFdpZHRoID0gaW1hZ2UubmF0dXJhbFdpZHRoLFxyXG4gICAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodDtcclxuICAgICAgICBpZiAobmF0dXJhbEhlaWdodCA9PT0gMCB8fCBuYXR1cmFsV2lkdGggPT09IDApIHtcclxuICAgICAgICAgICAgbG9nV2FybihcImxvZ1dhcm4oSW1hZ2UgaXMgZW1wdHkgXCIuY29uY2F0KGltYWdlLmN1cnJlbnRTcmMsIFwiKVwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2l6ZSA9IG5hdHVyYWxXaWR0aCAqIG5hdHVyYWxIZWlnaHQgKiA0O1xyXG4gICAgICAgIGlmIChzaXplID4gTUFYX0lNQUdFX1NJWkUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlzRGFyazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzVHJhbnNwYXJlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNMYXJnZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc1Rvb0xhcmdlOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuYXR1cmFsUGl4ZWxzQ291bnQgPSBuYXR1cmFsV2lkdGggKiBuYXR1cmFsSGVpZ2h0O1xyXG4gICAgICAgIHZhciBrID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIE1hdGguc3FydChNQVhfQU5BTElaRV9QSVhFTFNfQ09VTlQgLyBuYXR1cmFsUGl4ZWxzQ291bnQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgd2lkdGggPSBNYXRoLmNlaWwobmF0dXJhbFdpZHRoICogayk7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IE1hdGguY2VpbChuYXR1cmFsSGVpZ2h0ICogayk7XHJcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBuYXR1cmFsV2lkdGgsXHJcbiAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB2YXIgZCA9IGltYWdlRGF0YS5kYXRhO1xyXG4gICAgICAgIHZhciBUUkFOU1BBUkVOVF9BTFBIQV9USFJFU0hPTEQgPSAwLjA1O1xyXG4gICAgICAgIHZhciBEQVJLX0xJR0hUTkVTU19USFJFU0hPTEQgPSAwLjQ7XHJcbiAgICAgICAgdmFyIExJR0hUX0xJR0hUTkVTU19USFJFU0hPTEQgPSAwLjc7XHJcbiAgICAgICAgdmFyIHRyYW5zcGFyZW50UGl4ZWxzQ291bnQgPSAwO1xyXG4gICAgICAgIHZhciBkYXJrUGl4ZWxzQ291bnQgPSAwO1xyXG4gICAgICAgIHZhciBsaWdodFBpeGVsc0NvdW50ID0gMDtcclxuICAgICAgICB2YXIgaSwgeCwgeTtcclxuICAgICAgICB2YXIgciwgZywgYiwgYTtcclxuICAgICAgICB2YXIgbDtcclxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcclxuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGkgPSA0ICogKHkgKiB3aWR0aCArIHgpO1xyXG4gICAgICAgICAgICAgICAgciA9IGRbaSArIDBdO1xyXG4gICAgICAgICAgICAgICAgZyA9IGRbaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgYiA9IGRbaSArIDJdO1xyXG4gICAgICAgICAgICAgICAgYSA9IGRbaSArIDNdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGEgLyAyNTUgPCBUUkFOU1BBUkVOVF9BTFBIQV9USFJFU0hPTEQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudFBpeGVsc0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGwgPSBnZXRTUkdCTGlnaHRuZXNzKHIsIGcsIGIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsIDwgREFSS19MSUdIVE5FU1NfVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtQaXhlbHNDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobCA+IExJR0hUX0xJR0hUTkVTU19USFJFU0hPTEQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHRQaXhlbHNDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG90YWxQaXhlbHNDb3VudCA9IHdpZHRoICogaGVpZ2h0O1xyXG4gICAgICAgIHZhciBvcGFxdWVQaXhlbHNDb3VudCA9IHRvdGFsUGl4ZWxzQ291bnQgLSB0cmFuc3BhcmVudFBpeGVsc0NvdW50O1xyXG4gICAgICAgIHZhciBEQVJLX0lNQUdFX1RIUkVTSE9MRCA9IDAuNztcclxuICAgICAgICB2YXIgTElHSFRfSU1BR0VfVEhSRVNIT0xEID0gMC43O1xyXG4gICAgICAgIHZhciBUUkFOU1BBUkVOVF9JTUFHRV9USFJFU0hPTEQgPSAwLjE7XHJcbiAgICAgICAgdmFyIExBUkdFX0lNQUdFX1BJWEVMU19DT1VOVCA9IDgwMCAqIDYwMDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc0Rhcms6IGRhcmtQaXhlbHNDb3VudCAvIG9wYXF1ZVBpeGVsc0NvdW50ID49IERBUktfSU1BR0VfVEhSRVNIT0xELFxyXG4gICAgICAgICAgICBpc0xpZ2h0OlxyXG4gICAgICAgICAgICAgICAgbGlnaHRQaXhlbHNDb3VudCAvIG9wYXF1ZVBpeGVsc0NvdW50ID49IExJR0hUX0lNQUdFX1RIUkVTSE9MRCxcclxuICAgICAgICAgICAgaXNUcmFuc3BhcmVudDpcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50UGl4ZWxzQ291bnQgLyB0b3RhbFBpeGVsc0NvdW50ID49XHJcbiAgICAgICAgICAgICAgICBUUkFOU1BBUkVOVF9JTUFHRV9USFJFU0hPTEQsXHJcbiAgICAgICAgICAgIGlzTGFyZ2U6IG5hdHVyYWxQaXhlbHNDb3VudCA+PSBMQVJHRV9JTUFHRV9QSVhFTFNfQ09VTlQsXHJcbiAgICAgICAgICAgIGlzVG9vTGFyZ2U6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEZpbHRlcmVkSW1hZ2VEYXRhVVJMKF9hLCB0aGVtZSkge1xyXG4gICAgICAgIHZhciBkYXRhVVJMID0gX2EuZGF0YVVSTCxcclxuICAgICAgICAgICAgd2lkdGggPSBfYS53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xyXG4gICAgICAgIHZhciBtYXRyaXggPSBnZXRTVkdGaWx0ZXJNYXRyaXhWYWx1ZSh0aGVtZSk7XHJcbiAgICAgICAgdmFyIHN2ZyA9IFtcclxuICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiJ1xyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh3aWR0aCwgJ1wiIGhlaWdodD1cIicpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KGhlaWdodCwgJ1wiPicpLFxyXG4gICAgICAgICAgICBcIjxkZWZzPlwiLFxyXG4gICAgICAgICAgICAnPGZpbHRlciBpZD1cImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyXCI+JyxcclxuICAgICAgICAgICAgJzxmZUNvbG9yTWF0cml4IHR5cGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCInLmNvbmNhdChtYXRyaXgsICdcIiAvPicpLFxyXG4gICAgICAgICAgICBcIjwvZmlsdGVyPlwiLFxyXG4gICAgICAgICAgICBcIjwvZGVmcz5cIixcclxuICAgICAgICAgICAgJzxpbWFnZSB3aWR0aD1cIidcclxuICAgICAgICAgICAgICAgIC5jb25jYXQod2lkdGgsICdcIiBoZWlnaHQ9XCInKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1wiIGZpbHRlcj1cInVybCgjZGFya3JlYWRlci1pbWFnZS1maWx0ZXIpXCIgeGxpbms6aHJlZj1cIidcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5jb25jYXQoZGF0YVVSTCwgJ1wiIC8+JyksXHJcbiAgICAgICAgICAgIFwiPC9zdmc+XCJcclxuICAgICAgICBdLmpvaW4oXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxcIi5jb25jYXQoYnRvYShzdmcpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuSW1hZ2VQcm9jZXNzaW5nQ2FjaGUoKSB7XHJcbiAgICAgICAgaW1hZ2VNYW5hZ2VyICYmIGltYWdlTWFuYWdlci5zdG9wUXVldWUoKTtcclxuICAgICAgICByZW1vdmVDYW52YXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ3JhZGllbnRMZW5ndGggPSBcImdyYWRpZW50XCIubGVuZ3RoO1xyXG4gICAgdmFyIGNvbmljR3JhZGllbnQgPSBcImNvbmljLVwiO1xyXG4gICAgdmFyIGNvbmljR3JhZGllbnRMZW5ndGggPSBjb25pY0dyYWRpZW50Lmxlbmd0aDtcclxuICAgIHZhciByYWRpYWxHcmFkaWVudCA9IFwicmFkaWFsLVwiO1xyXG4gICAgdmFyIGxpbmVhckdyYWRpZW50ID0gXCJsaW5lYXItXCI7XHJcbiAgICBmdW5jdGlvbiBwYXJzZUdyYWRpZW50KHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSBjb25pY0dyYWRpZW50Lmxlbmd0aDtcclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHR5cGVHcmFkaWVudDtcclxuICAgICAgICAgICAgW2xpbmVhckdyYWRpZW50LCByYWRpYWxHcmFkaWVudCwgY29uaWNHcmFkaWVudF0uZmluZChmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZVR5cGVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zc2libGVHcmFkaWVudCA9IHZhbHVlLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlR3JhZGllbnQgPT09IHBvc3NpYmxlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggLSAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApID09PSBcInJlcGVhdGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUdyYWRpZW50ID0gXCJyZXBlYXRpbmctXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyYWRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggLSA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT09IFwiLXdlYmtpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUdyYWRpZW50ID0gXCItd2Via2l0LVwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJncmFkaWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUdyYWRpZW50ID0gXCJcIi5jb25jYXQocG9zc2libGVUeXBlLCBcImdyYWRpZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIXR5cGVHcmFkaWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgX2EgPSBnZXRQYXJlbnRoZXNlc1JhbmdlKHZhbHVlLCBpbmRleCArIGdyYWRpZW50TGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gX2Euc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBlbmQgPSBfYS5lbmQ7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IHZhbHVlLnN1YnN0cmluZyhzdGFydCArIDEsIGVuZCAtIDEpO1xyXG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kICsgMSArIGNvbmljR3JhZGllbnRMZW5ndGg7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudDogdHlwZUdyYWRpZW50LFxyXG4gICAgICAgICAgICAgICAgbWF0Y2g6IG1hdGNoLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiB0eXBlR3JhZGllbnQubGVuZ3RoICsgMixcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCAtIHR5cGVHcmFkaWVudC5sZW5ndGggKyBncmFkaWVudExlbmd0aCxcclxuICAgICAgICAgICAgICAgIGhhc0NvbW1hOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2hpbGUgKChpbmRleCA9IHZhbHVlLmluZGV4T2YoXCJncmFkaWVudFwiLCBzdGFydEluZGV4KSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZV8xID0gX2xvb3BfMSgpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVfMSA9PT0gXCJicmVha1wiKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXS5oYXNDb21tYSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByaW9yaXR5KHJ1bGVTdHlsZSwgcHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbihydWxlU3R5bGUgJiYgcnVsZVN0eWxlLmdldFByb3BlcnR5UHJpb3JpdHkocHJvcGVydHkpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWFibGVDU1NEZWNsYXJhdGlvbihcclxuICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBydWxlLFxyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgIGlnbm9yZUltYWdlU2VsZWN0b3JzLFxyXG4gICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICApIHtcclxuICAgICAgICBpZiAocHJvcGVydHkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2RpZmllciA9IGdldFZhcmlhYmxlTW9kaWZpZXIoXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAobW9kaWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllcixcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGdldFByaW9yaXR5KHJ1bGUuc3R5bGUsIHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKFwidmFyKFwiKSkge1xyXG4gICAgICAgICAgICB2YXIgbW9kaWZpZXIgPSBnZXRWYXJpYWJsZURlcGVuZGFudE1vZGlmaWVyKFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChtb2RpZmllcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogZ2V0UHJpb3JpdHkocnVsZS5zdHlsZSwgcHJvcGVydHkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkgPT09IFwiY29sb3Itc2NoZW1lXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgKHByb3BlcnR5LmluY2x1ZGVzKFwiY29sb3JcIikgJiZcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9PSBcIi13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0XCIpIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImZpbGxcIiB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJzdHJva2VcIiB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJzdG9wLWNvbG9yXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdmFyIG1vZGlmaWVyID0gZ2V0Q29sb3JNb2RpZmllcihwcm9wZXJ0eSwgdmFsdWUsIHJ1bGUpO1xyXG4gICAgICAgICAgICBpZiAobW9kaWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllcixcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGdldFByaW9yaXR5KHJ1bGUuc3R5bGUsIHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCIgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwibGlzdC1zdHlsZS1pbWFnZVwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2RpZmllciA9IGdldEJnSW1hZ2VNb2RpZmllcihcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKG1vZGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kaWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBnZXRQcmlvcml0eShydWxlLnN0eWxlLCBwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eS5pbmNsdWRlcyhcInNoYWRvd1wiKSkge1xyXG4gICAgICAgICAgICB2YXIgbW9kaWZpZXIgPSBnZXRTaGFkb3dNb2RpZmllcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChtb2RpZmllcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogZ2V0UHJpb3JpdHkocnVsZS5zdHlsZSwgcHJvcGVydHkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGpvaW5TZWxlY3RvcnMoKSB7XHJcbiAgICAgICAgdmFyIHNlbGVjdG9ycyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VsZWN0b3JzLmZpbHRlcihCb29sZWFuKS5qb2luKFwiLCBcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNb2RpZmllZFVzZXJBZ2VudFN0eWxlKHRoZW1lLCBpc0lGcmFtZSwgc3R5bGVTeXN0ZW1Db250cm9scykge1xyXG4gICAgICAgIHZhciBsaW5lcyA9IFtdO1xyXG4gICAgICAgIGlmICghaXNJRnJhbWUpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcImh0bWwge1wiKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIFwiICAgIGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI1NSwgZzogMjU1LCBiOiAyNTV9LCB0aGVtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQ1NTQ29sb3JTY2hlbWVQcm9wU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJodG1sIHtcIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBcIiAgICBjb2xvci1zY2hlbWU6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5tb2RlID09PSAxID8gXCJkYXJrXCIgOiBcImRhcmsgbGlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIiAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYmdTZWxlY3RvcnMgPSBqb2luU2VsZWN0b3JzKFxyXG4gICAgICAgICAgICBpc0lGcmFtZSA/IFwiXCIgOiBcImh0bWwsIGJvZHlcIixcclxuICAgICAgICAgICAgc3R5bGVTeXN0ZW1Db250cm9scyA/IFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvbiwgZGlhbG9nXCIgOiBcIlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoYmdTZWxlY3RvcnMpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIlwiLmNvbmNhdChiZ1NlbGVjdG9ycywgXCIge1wiKSk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1fSwgdGhlbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiO1wiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBcIlwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIGpvaW5TZWxlY3RvcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJodG1sLCBib2R5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTeXN0ZW1Db250cm9scyA/IFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvblwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIFwiIHtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBcIiAgICBib3JkZXItY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIG1vZGlmeUJvcmRlckNvbG9yKHtyOiA3NiwgZzogNzYsIGI6IDc2fSwgdGhlbWUpLFxyXG4gICAgICAgICAgICAgICAgXCI7XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgXCIgICAgY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIG1vZGlmeUZvcmVncm91bmRDb2xvcih7cjogMCwgZzogMCwgYjogMH0sIHRoZW1lKSxcclxuICAgICAgICAgICAgICAgIFwiO1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJhIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgXCIgICAgY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIG1vZGlmeUZvcmVncm91bmRDb2xvcih7cjogMCwgZzogNjQsIGI6IDI1NX0sIHRoZW1lKSxcclxuICAgICAgICAgICAgICAgIFwiO1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ0YWJsZSB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIFwiICAgIGJvcmRlci1jb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5Qm9yZGVyQ29sb3Ioe3I6IDEyOCwgZzogMTI4LCBiOiAxMjh9LCB0aGVtZSksXHJcbiAgICAgICAgICAgICAgICBcIjtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjpwbGFjZWhvbGRlciB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIFwiICAgIGNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDE2OSwgZzogMTY5LCBiOiAxNjl9LCB0aGVtZSksXHJcbiAgICAgICAgICAgICAgICBcIjtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcInRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGwsXCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIFwiICAgIGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIG1vZGlmeUJhY2tncm91bmRDb2xvcih7cjogMjUwLCBnOiAyNTUsIGI6IDE4OX0sIHRoZW1lKSxcclxuICAgICAgICAgICAgICAgIFwiICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgXCIgICAgY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIG1vZGlmeUZvcmVncm91bmRDb2xvcih7cjogMCwgZzogMCwgYjogMH0sIHRoZW1lKSxcclxuICAgICAgICAgICAgICAgIFwiICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgaWYgKHRoZW1lLnNjcm9sbGJhckNvbG9yKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goZ2V0TW9kaWZpZWRTY3JvbGxiYXJTdHlsZSh0aGVtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhlbWUuc2VsZWN0aW9uQ29sb3IpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChnZXRNb2RpZmllZFNlbGVjdGlvblN0eWxlKHRoZW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uQ29sb3IodGhlbWUpIHtcclxuICAgICAgICB2YXIgYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uO1xyXG4gICAgICAgIHZhciBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb247XHJcbiAgICAgICAgaWYgKHRoZW1lLnNlbGVjdGlvbkNvbG9yID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgICAgICB7cjogMCwgZzogOTYsIGI6IDIxMn0sXHJcbiAgICAgICAgICAgICAgICBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhlbWUpLCB7Z3JheXNjYWxlOiAwfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uID0gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKFxyXG4gICAgICAgICAgICAgICAge3I6IDI1NSwgZzogMjU1LCBiOiAyNTV9LFxyXG4gICAgICAgICAgICAgICAgX19hc3NpZ24oX19hc3NpZ24oe30sIHRoZW1lKSwge2dyYXlzY2FsZTogMH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUodGhlbWUuc2VsZWN0aW9uQ29sb3IpO1xyXG4gICAgICAgICAgICB2YXIgaHNsID0gcmdiVG9IU0wocmdiKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uID0gdGhlbWUuc2VsZWN0aW9uQ29sb3I7XHJcbiAgICAgICAgICAgIGlmIChoc2wubCA8IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uID0gXCIjRkZGXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSBcIiMwMDBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb246IGJhY2tncm91bmRDb2xvclNlbGVjdGlvbixcclxuICAgICAgICAgICAgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uOiBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb25cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TW9kaWZpZWRTZWxlY3Rpb25TdHlsZSh0aGVtZSkge1xyXG4gICAgICAgIHZhciBsaW5lcyA9IFtdO1xyXG4gICAgICAgIHZhciBtb2RpZmllZFNlbGVjdGlvbkNvbG9yID0gZ2V0U2VsZWN0aW9uQ29sb3IodGhlbWUpO1xyXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPVxyXG4gICAgICAgICAgICBtb2RpZmllZFNlbGVjdGlvbkNvbG9yLmJhY2tncm91bmRDb2xvclNlbGVjdGlvbjtcclxuICAgICAgICB2YXIgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uID1cclxuICAgICAgICAgICAgbW9kaWZpZWRTZWxlY3Rpb25Db2xvci5mb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb247XHJcbiAgICAgICAgW1wiOjpzZWxlY3Rpb25cIiwgXCI6Oi1tb3otc2VsZWN0aW9uXCJdLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwiXCIuY29uY2F0KHNlbGVjdGlvbiwgXCIge1wiKSk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIFwiICAgIGNvbG9yOiBcIi5jb25jYXQoZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uLCBcIiAhaW1wb3J0YW50O1wiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVkU2Nyb2xsYmFyU3R5bGUodGhlbWUpIHtcclxuICAgICAgICB2YXIgbGluZXMgPSBbXTtcclxuICAgICAgICB2YXIgY29sb3JUcmFjaztcclxuICAgICAgICB2YXIgY29sb3JJY29ucztcclxuICAgICAgICB2YXIgY29sb3JUaHVtYjtcclxuICAgICAgICB2YXIgY29sb3JUaHVtYkhvdmVyO1xyXG4gICAgICAgIHZhciBjb2xvclRodW1iQWN0aXZlO1xyXG4gICAgICAgIHZhciBjb2xvckNvcm5lcjtcclxuICAgICAgICBpZiAodGhlbWUuc2Nyb2xsYmFyQ29sb3IgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yVHJhY2sgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI0MSwgZzogMjQxLCBiOiAyNDF9LCB0aGVtZSk7XHJcbiAgICAgICAgICAgIGNvbG9ySWNvbnMgPSBtb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDk2LCBnOiA5NiwgYjogOTZ9LCB0aGVtZSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWIgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDE3NiwgZzogMTc2LCBiOiAxNzZ9LCB0aGVtZSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWJIb3ZlciA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihcclxuICAgICAgICAgICAgICAgIHtyOiAxNDQsIGc6IDE0NCwgYjogMTQ0fSxcclxuICAgICAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWJBY3RpdmUgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgICAgICB7cjogOTYsIGc6IDk2LCBiOiA5Nn0sXHJcbiAgICAgICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb2xvckNvcm5lciA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihcclxuICAgICAgICAgICAgICAgIHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1fSxcclxuICAgICAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUodGhlbWUuc2Nyb2xsYmFyQ29sb3IpO1xyXG4gICAgICAgICAgICB2YXIgaHNsXzEgPSByZ2JUb0hTTChyZ2IpO1xyXG4gICAgICAgICAgICB2YXIgaXNMaWdodCA9IGhzbF8xLmwgPiAwLjU7XHJcbiAgICAgICAgICAgIHZhciBsaWdodGVuID0gZnVuY3Rpb24gKGxpZ2h0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaHNsXzEpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbDogY2xhbXAoaHNsXzEubCArIGxpZ2h0ZXIsIDAsIDEpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGRhcmtlbiA9IGZ1bmN0aW9uIChkYXJrZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaHNsXzEpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbDogY2xhbXAoaHNsXzEubCAtIGRhcmtlciwgMCwgMSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb2xvclRyYWNrID0gaHNsVG9TdHJpbmcoZGFya2VuKDAuNCkpO1xyXG4gICAgICAgICAgICBjb2xvckljb25zID0gaHNsVG9TdHJpbmcoaXNMaWdodCA/IGRhcmtlbigwLjQpIDogbGlnaHRlbigwLjQpKTtcclxuICAgICAgICAgICAgY29sb3JUaHVtYiA9IGhzbFRvU3RyaW5nKGhzbF8xKTtcclxuICAgICAgICAgICAgY29sb3JUaHVtYkhvdmVyID0gaHNsVG9TdHJpbmcobGlnaHRlbigwLjEpKTtcclxuICAgICAgICAgICAgY29sb3JUaHVtYkFjdGl2ZSA9IGhzbFRvU3RyaW5nKGxpZ2h0ZW4oMC4yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmVzLnB1c2goXCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoY29sb3JUcmFjaywgXCI7XCIpKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiICAgIGNvbG9yOiBcIi5jb25jYXQoY29sb3JJY29ucywgXCI7XCIpKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGNvbG9yVGh1bWIsIFwiO1wiKSk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiICAgIGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChjb2xvclRodW1iSG92ZXIsIFwiO1wiKSk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoY29sb3JUaHVtYkFjdGl2ZSwgXCI7XCIpKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiICAgIGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChjb2xvckNvcm5lciwgXCI7XCIpKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBpZiAoaXNGaXJlZm94KSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCIqIHtcIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBcIiAgICBzY3JvbGxiYXItY29sb3I6IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChjb2xvclRodW1iLCBcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGNvbG9yVHJhY2ssIFwiO1wiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNb2RpZmllZEZhbGxiYWNrU3R5bGUoZmlsdGVyLCBfYSkge1xyXG4gICAgICAgIHZhciBzdHJpY3QgPSBfYS5zdHJpY3Q7XHJcbiAgICAgICAgdmFyIGxpbmVzID0gW107XHJcbiAgICAgICAgdmFyIGlzTWljcm9zb2Z0ID0gW1wibWljcm9zb2Z0LmNvbVwiLCBcImRvY3MubWljcm9zb2Z0LmNvbVwiXS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIFwiaHRtbCwgYm9keSwgXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgc3RyaWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJvZHkgOm5vdChpZnJhbWUpXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzTWljcm9zb2Z0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJzpub3QoZGl2W3N0eWxlXj1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6LVwiXSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJvZHkgPiA6bm90KGlmcmFtZSlcIixcclxuICAgICAgICAgICAgICAgIFwiIHtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI1NSwgZzogMjU1LCBiOiAyNTV9LCBmaWx0ZXIpLFxyXG4gICAgICAgICAgICAgICAgXCIgIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBcIiAgICBib3JkZXItY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIG1vZGlmeUJvcmRlckNvbG9yKHtyOiA2NCwgZzogNjQsIGI6IDY0fSwgZmlsdGVyKSxcclxuICAgICAgICAgICAgICAgIFwiICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgXCIgICAgY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIG1vZGlmeUZvcmVncm91bmRDb2xvcih7cjogMCwgZzogMCwgYjogMH0sIGZpbHRlciksXHJcbiAgICAgICAgICAgICAgICBcIiAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIHVucGFyc2FibGVDb2xvcnMgPSBuZXcgU2V0KFtcclxuICAgICAgICBcImluaGVyaXRcIixcclxuICAgICAgICBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgXCJpbml0aWFsXCIsXHJcbiAgICAgICAgXCJjdXJyZW50Y29sb3JcIixcclxuICAgICAgICBcIm5vbmVcIixcclxuICAgICAgICBcInVuc2V0XCJcclxuICAgIF0pO1xyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JNb2RpZmllcihwcm9wLCB2YWx1ZSwgcnVsZSkge1xyXG4gICAgICAgIGlmICh1bnBhcnNhYmxlQ29sb3JzLmhhcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHZhbHVlKTtcclxuICAgICAgICBpZiAoIXJnYikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3AuaW5jbHVkZXMoXCJiYWNrZ3JvdW5kXCIpKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChydWxlLnN0eWxlLndlYmtpdE1hc2tJbWFnZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUud2Via2l0TWFza0ltYWdlICE9PSBcIm5vbmVcIikgfHxcclxuICAgICAgICAgICAgICAgIChydWxlLnN0eWxlLndlYmtpdE1hc2sgJiZcclxuICAgICAgICAgICAgICAgICAgICAhcnVsZS5zdHlsZS53ZWJraXRNYXNrLnN0YXJ0c1dpdGgoXCJub25lXCIpKSB8fFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUuc3R5bGUubWFzayAmJiBydWxlLnN0eWxlLm1hc2sgIT09IFwibm9uZVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIm1hc2staW1hZ2VcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJtYXNrLWltYWdlXCIpICE9PSBcIm5vbmVcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IocmdiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIGZpbHRlcik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wLmluY2x1ZGVzKFwiYm9yZGVyXCIpIHx8IHByb3AuaW5jbHVkZXMoXCJvdXRsaW5lXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZ5Qm9yZGVyQ29sb3IocmdiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHJnYiwgZmlsdGVyKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgdmFyIGltYWdlRGV0YWlsc0NhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgdmFyIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gc2hvdWxkSWdub3JlSW1hZ2Uoc2VsZWN0b3JUZXh0LCBzZWxlY3RvcnMpIHtcclxuICAgICAgICBpZiAoIXNlbGVjdG9yVGV4dCB8fCBzZWxlY3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBzZWxlY3RvcnMuc29tZShmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgPT09IFwiKlwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJ1bGVTZWxlY3RvcnMgPSBzZWxlY3RvclRleHQuc3BsaXQoLyxcXHMqL2cpO1xyXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgdmFyIGlnbm9yZWRTZWxlY3RvciA9IHNlbGVjdG9yc1tpXTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgcnVsZVNlbGVjdG9ycy5zb21lKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMgPT09IGlnbm9yZWRTZWxlY3RvcjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt2YWx1ZTogdHJ1ZX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZV8xID0gX2xvb3BfMShpKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZV8xID09PSBcIm9iamVjdFwiKSByZXR1cm4gc3RhdGVfMS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0QmdJbWFnZU1vZGlmaWVyKFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIHJ1bGUsXHJcbiAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnMsXHJcbiAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGdyYWRpZW50cyA9IHBhcnNlR3JhZGllbnQodmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgdXJscyA9IGdldE1hdGNoZXMoY3NzVVJMUmVnZXgsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHVybHMubGVuZ3RoID09PSAwICYmIGdyYWRpZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZ2V0SW5kaWNlcyA9IGZ1bmN0aW9uIChtYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXMubWFwKGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZUluZGV4ID0gdmFsdWUuaW5kZXhPZihtYXRjaCwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gdmFsdWVJbmRleCArIG1hdGNoLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge21hdGNoOiBtYXRjaCwgaW5kZXg6IHZhbHVlSW5kZXh9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVzXzEgPSBncmFkaWVudHNcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oe3R5cGU6IFwiZ3JhZGllbnRcIn0sIGkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0SW5kaWNlcyh1cmxzKS5tYXAoZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt0eXBlOiBcInVybFwiLCBvZmZzZXQ6IDB9LCBpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCA+IGIuaW5kZXggPyAxIDogLTE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIGdldEdyYWRpZW50TW9kaWZpZXJfMSA9IGZ1bmN0aW9uIChncmFkaWVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGVHcmFkaWVudCA9IGdyYWRpZW50LnR5cGVHcmFkaWVudCxcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGdyYWRpZW50Lm1hdGNoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbW1hID0gZ3JhZGllbnQuaGFzQ29tbWE7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFydHNSZWdleCA9XHJcbiAgICAgICAgICAgICAgICAgICAgLyhbXlxcKFxcKSxdKyhcXChbXlxcKFxcKV0qKFxcKFteXFwoXFwpXSpcXCkqW15cXChcXCldKik/XFwpKT8oW15cXChcXCksIF18KCAoPyFjYWxjKSkpKiksPy9nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbG9yU3RvcFJlZ2V4ID1cclxuICAgICAgICAgICAgICAgICAgICAvXihmcm9tfGNvbG9yLXN0b3B8dG8pXFwoKFteXFwoXFwpXSo/LFxccyopPyguKj8pXFwpJC87XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFydHMgPSBnZXRNYXRjaGVzKHBhcnRzUmVnZXgsIG1hdGNoLCAxKS5tYXAoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBwYXJ0LnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShwYXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmdiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZ5R3JhZGllbnRDb2xvcihyZ2IsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGFjZSA9IHBhcnQubGFzdEluZGV4T2YoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUocGFydC5zdWJzdHJpbmcoMCwgc3BhY2UpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmdiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQobW9kaWZ5R3JhZGllbnRDb2xvcihyZ2IsIGZpbHRlciksIFwiIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQocGFydC5zdWJzdHJpbmcoc3BhY2UgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xvclN0b3BNYXRjaCA9IHBhcnQubWF0Y2goY29sb3JTdG9wUmVnZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvclN0b3BNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKGNvbG9yU3RvcE1hdGNoWzNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJnYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGNvbG9yU3RvcE1hdGNoWzFdLCBcIihcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU3RvcE1hdGNoWzJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiLmNvbmNhdChjb2xvclN0b3BNYXRjaFsyXSwgXCIsIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlHcmFkaWVudENvbG9yKHJnYiwgZmlsdGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCh0eXBlR3JhZGllbnQsIFwiKFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtb2RpZnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmeShmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChoYXNDb21tYSA/IFwiLCBcIiA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGdldFVSTE1vZGlmaWVyXzEgPSBmdW5jdGlvbiAodXJsVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBzaG91bGRJZ25vcmVJbWFnZShydWxlLnNlbGVjdG9yVGV4dCwgaWdub3JlSW1hZ2VTZWxlY3RvcnMpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBnZXRDU1NVUkxWYWx1ZSh1cmxWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNVUkxFbXB0eSA9IHVybC5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50U3R5bGVTaGVldCA9IHJ1bGUucGFyZW50U3R5bGVTaGVldDtcclxuICAgICAgICAgICAgICAgIHZhciBiYXNlVVJMID1cclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRTdHlsZVNoZWV0ICYmIHBhcmVudFN0eWxlU2hlZXQuaHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGdldENTU0Jhc2VCYXRoKHBhcmVudFN0eWxlU2hlZXQuaHJlZilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoKF9hID0gcGFyZW50U3R5bGVTaGVldC5vd25lck5vZGUpID09PSBudWxsIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPT09IHZvaWQgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHZvaWQgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9hLmJhc2VVUkkpIHx8IGxvY2F0aW9uLm9yaWdpbjtcclxuICAgICAgICAgICAgICAgIHVybCA9IGdldEFic29sdXRlVVJMKGJhc2VVUkwsIHVybCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWJzb2x1dGVWYWx1ZSA9ICd1cmwoXCInLmNvbmNhdCh1cmwsICdcIiknKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlRGV0YWlscywgYXdhaXRlcnNfMSwgZXJyXzEsIGJnSW1hZ2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVVJMRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgXCJ1cmwoJycpXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW1hZ2VEZXRhaWxzQ2FjaGUuaGFzKHVybCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMgPSBpbWFnZURldGFpbHNDYWNoZS5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNiwgLCA3XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuaGFzKHVybCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGVyc18xID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0ZXJzXzEucHVzaChyZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW1hZ2VEZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5zZXQodXJsLCBbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZ2V0SW1hZ2VEZXRhaWxzKHVybCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHNDYWNoZS5zZXQodXJsLCBpbWFnZURldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGltYWdlRGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuZGVsZXRlKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NhbmNlbGxlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nV2FybihlcnJfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5oYXModXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmRlbGV0ZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWJzb2x1dGVWYWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0ltYWdlVmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QmdJbWFnZVZhbHVlXzEoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB8fCBhYnNvbHV0ZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGJnSW1hZ2VWYWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGdldEJnSW1hZ2VWYWx1ZV8xID0gZnVuY3Rpb24gKGltYWdlRGV0YWlscywgZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNEYXJrID0gaW1hZ2VEZXRhaWxzLmlzRGFyayxcclxuICAgICAgICAgICAgICAgICAgICBpc0xpZ2h0ID0gaW1hZ2VEZXRhaWxzLmlzTGlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNUcmFuc3BhcmVudCA9IGltYWdlRGV0YWlscy5pc1RyYW5zcGFyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTGFyZ2UgPSBpbWFnZURldGFpbHMuaXNMYXJnZSxcclxuICAgICAgICAgICAgICAgICAgICBpc1Rvb0xhcmdlID0gaW1hZ2VEZXRhaWxzLmlzVG9vTGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBpbWFnZURldGFpbHMud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVG9vTGFyZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAndXJsKFwiJy5jb25jYXQoaW1hZ2VEZXRhaWxzLnNyYywgJ1wiKScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBpc0RhcmsgJiZcclxuICAgICAgICAgICAgICAgICAgICBpc1RyYW5zcGFyZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1vZGUgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAhaXNMYXJnZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID4gMlxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhcIkludmVydGluZyBkYXJrIGltYWdlIFwiLmNvbmNhdChpbWFnZURldGFpbHMuc3JjKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGludmVydGVkID0gZ2V0RmlsdGVyZWRJbWFnZURhdGFVUkwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19hc3NpZ24oX19hc3NpZ24oe30sIGZpbHRlciksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGlhOiBjbGFtcChmaWx0ZXIuc2VwaWEgKyAxMCwgMCwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gJ3VybChcIicuY29uY2F0KGludmVydGVkLCAnXCIpJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzTGlnaHQgJiYgIWlzVHJhbnNwYXJlbnQgJiYgZmlsdGVyLm1vZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMYXJnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEaW1taW5nIGxpZ2h0IGltYWdlIFwiLmNvbmNhdChpbWFnZURldGFpbHMuc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGltbWVkID0gZ2V0RmlsdGVyZWRJbWFnZURhdGFVUkwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gJ3VybChcIicuY29uY2F0KGRpbW1lZCwgJ1wiKScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLm1vZGUgPT09IDAgJiYgaXNMaWdodCAmJiAhaXNMYXJnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXBwbHlpbmcgZmlsdGVyIHRvIGltYWdlIFwiLmNvbmNhdChpbWFnZURldGFpbHMuc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlcmVkID0gZ2V0RmlsdGVyZWRJbWFnZURhdGFVUkwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19hc3NpZ24oX19hc3NpZ24oe30sIGZpbHRlciksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyaWdodG5lc3M6IGNsYW1wKGZpbHRlci5icmlnaHRuZXNzIC0gMTAsIDUsIDIwMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBpYTogY2xhbXAoZmlsdGVyLnNlcGlhICsgMTAsIDAsIDEwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICd1cmwoXCInLmNvbmNhdChmaWx0ZXJlZCwgJ1wiKScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIG1vZGlmaWVyc18xID0gW107XHJcbiAgICAgICAgICAgIHZhciBtYXRjaEluZGV4XzEgPSAwO1xyXG4gICAgICAgICAgICB2YXIgcHJldkhhc0NvbW1hXzEgPSBmYWxzZTtcclxuICAgICAgICAgICAgbWF0Y2hlc18xLmZvckVhY2goZnVuY3Rpb24gKF9hLCBpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IF9hLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBfYS5tYXRjaCxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IF9hLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCA9IF9hLnR5cGVHcmFkaWVudCxcclxuICAgICAgICAgICAgICAgICAgICBoYXNDb21tYSA9IF9hLmhhc0NvbW1hLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IF9hLm9mZnNldDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaFN0YXJ0ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJlZml4U3RhcnQgPSBtYXRjaEluZGV4XzE7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hFbmQgPSBtYXRjaFN0YXJ0ICsgbWF0Y2gubGVuZ3RoICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hJbmRleF8xID0gbWF0Y2hFbmQ7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4U3RhcnQgIT09IG1hdGNoU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldkhhc0NvbW1hXzEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzXzEucHVzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmV0d2VlblZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeFN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoU3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmV0d2VlblZhbHVlWzBdID09PSBcIixcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJldHdlZW5WYWx1ZSA9IGJldHdlZW5WYWx1ZS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmV0d2VlblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnNfMS5wdXNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcocHJlZml4U3RhcnQsIG1hdGNoU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcmV2SGFzQ29tbWFfMSA9IGhhc0NvbW1hIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwidXJsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnNfMS5wdXNoKGdldFVSTE1vZGlmaWVyXzEobWF0Y2gpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJncmFkaWVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzXzEucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0R3JhZGllbnRNb2RpZmllcl8xKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiBtYXRjaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudDogdHlwZUdyYWRpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ29tbWE6IGhhc0NvbW1hLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IG1hdGNoZXNfMS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzXzEucHVzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcobWF0Y2hFbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHRzID0gbW9kaWZpZXJzXzFcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobW9kaWZ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnkoZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnNvbWUoZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIgaW5zdGFuY2VvZiBQcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cykudGhlbihmdW5jdGlvbiAoYXN5bmNSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3luY1Jlc3VsdHMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRSZXN1bHQgPSByZXN1bHRzLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tYmluZWRSZXN1bHQuZW5kc1dpdGgoXCIsIGluaXRpYWxcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluZWRSZXN1bHQuc2xpY2UoMCwgLTkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTaGFkb3dNb2RpZmllcldpdGhJbmZvKHZhbHVlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGluZGV4XzEgPSAwO1xyXG4gICAgICAgICAgICB2YXIgY29sb3JNYXRjaGVzXzEgPSBnZXRNYXRjaGVzKFxyXG4gICAgICAgICAgICAgICAgLyhefFxccykoPyFjYWxjKShbYS16XStcXCguKz9cXCl8I1swLTlhLWZdK3xbYS16XSspKC4qPyhpbnNldHxvdXRzZXQpPygkfCwpKS9naSxcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgbm90UGFyc2VkXzEgPSAwO1xyXG4gICAgICAgICAgICB2YXIgbW9kaWZpZXJzXzIgPSBjb2xvck1hdGNoZXNfMS5tYXAoZnVuY3Rpb24gKG1hdGNoLCBpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJlZml4SW5kZXggPSBpbmRleF8xO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoSW5kZXggPSB2YWx1ZS5pbmRleE9mKG1hdGNoLCBpbmRleF8xKTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaEVuZCA9IG1hdGNoSW5kZXggKyBtYXRjaC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpbmRleF8xID0gbWF0Y2hFbmQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJnYikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdFBhcnNlZF8xKys7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyhwcmVmaXhJbmRleCwgbWF0Y2hFbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQodmFsdWUuc3Vic3RyaW5nKHByZWZpeEluZGV4LCBtYXRjaEluZGV4KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChtb2RpZnlTaGFkb3dDb2xvcihyZ2IsIGZpbHRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID09PSBjb2xvck1hdGNoZXNfMS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWx1ZS5zdWJzdHJpbmcobWF0Y2hFbmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZCA9IG1vZGlmaWVyc18yXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobW9kaWZ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnkoZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzTGVuZ3RoOiBjb2xvck1hdGNoZXNfMS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdW5wYXJzZWFibGVNYXRjaGVzTGVuZ3RoOiBub3RQYXJzZWRfMSxcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IG1vZGlmaWVkXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTaGFkb3dNb2RpZmllcih2YWx1ZSkge1xyXG4gICAgICAgIHZhciBzaGFkb3dNb2RpZmllciA9IGdldFNoYWRvd01vZGlmaWVyV2l0aEluZm8odmFsdWUpO1xyXG4gICAgICAgIGlmICghc2hhZG93TW9kaWZpZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGhlbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNoYWRvd01vZGlmaWVyKHRoZW1lKS5yZXN1bHQ7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlTW9kaWZpZXIoXHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgcHJvcCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBydWxlLFxyXG4gICAgICAgIGlnbm9yZWRJbWdTZWxlY3RvcnMsXHJcbiAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICkge1xyXG4gICAgICAgIHJldHVybiB2YXJpYWJsZXNTdG9yZS5nZXRNb2RpZmllckZvclZhcmlhYmxlKHtcclxuICAgICAgICAgICAgdmFyTmFtZTogcHJvcCxcclxuICAgICAgICAgICAgc291cmNlVmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICBydWxlOiBydWxlLFxyXG4gICAgICAgICAgICBpZ25vcmVkSW1nU2VsZWN0b3JzOiBpZ25vcmVkSW1nU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICBpc0NhbmNlbGxlZDogaXNDYW5jZWxsZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlRGVwZW5kYW50TW9kaWZpZXIodmFyaWFibGVzU3RvcmUsIHByb3AsIHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlc1N0b3JlLmdldE1vZGlmaWVyRm9yVmFyRGVwZW5kYW50KHByb3AsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuTW9kaWZpY2F0aW9uQ2FjaGUoKSB7XHJcbiAgICAgICAgY2xlYXJDb2xvck1vZGlmaWNhdGlvbkNhY2hlKCk7XHJcbiAgICAgICAgaW1hZ2VEZXRhaWxzQ2FjaGUuY2xlYXIoKTtcclxuICAgICAgICBjbGVhbkltYWdlUHJvY2Vzc2luZ0NhY2hlKCk7XHJcbiAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgVkFSX1RZUEVfQkdDT0xPUiA9IDEgPDwgMDtcclxuICAgIHZhciBWQVJfVFlQRV9URVhUQ09MT1IgPSAxIDw8IDE7XHJcbiAgICB2YXIgVkFSX1RZUEVfQk9SREVSQ09MT1IgPSAxIDw8IDI7XHJcbiAgICB2YXIgVkFSX1RZUEVfQkdJTUcgPSAxIDw8IDM7XHJcbiAgICB2YXIgVmFyaWFibGVzU3RvcmUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIFZhcmlhYmxlc1N0b3JlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhclR5cGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5kZWZpbmVkVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy52YXJSZWZzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkJnVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy51bmRlZmluZWRWYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYXJUeXBlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zdGFibGVWYXJWYWx1ZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy52YXJUeXBlcy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUuc3BsaWNlKDApO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmluZWRWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFyUmVmcy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5kZWZpbmVkVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYXJUeXBlcy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zdGFibGVWYXJWYWx1ZXMuY2xlYXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5pc1ZhclR5cGUgPSBmdW5jdGlvbiAodmFyTmFtZSwgdHlwZU51bSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJUeXBlcy5oYXModmFyTmFtZSkgJiZcclxuICAgICAgICAgICAgICAgICh0aGlzLnZhclR5cGVzLmdldCh2YXJOYW1lKSAmIHR5cGVOdW0pID4gMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcgPSBmdW5jdGlvbiAocnVsZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLnB1c2gocnVsZXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kYW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFyVHlwZXMgPSBuZXcgTWFwKHRoaXMudmFyVHlwZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3RSb290VmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFZhcmlhYmxlc0FuZFZhckRlcCh0aGlzLnJ1bGVzUXVldWUpO1xyXG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUuc3BsaWNlKDApO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3RSb290VmFyRGVwZW5kYW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLnZhclJlZnMuZm9yRWFjaChmdW5jdGlvbiAocmVmcywgdikge1xyXG4gICAgICAgICAgICAgICAgcmVmcy5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnZhclR5cGVzLmhhcyh2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHIsIF90aGlzLnZhclR5cGVzLmdldCh2KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuZm9yRWFjaChmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnVua25vd25CZ1ZhcnMuaGFzKHYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5rbm93bkNvbG9yVmFycy5kZWxldGUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5rbm93bkJnVmFycy5kZWxldGUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2LCBWQVJfVFlQRV9CR0NPTE9SKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNWYXJUeXBlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CR0NPTE9SIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX1RFWFRDT0xPUiB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CT1JERVJDT0xPUlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVua25vd25Db2xvclZhcnMuZGVsZXRlKHYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy51bmRlZmluZWRWYXJzLmFkZCh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkJnVmFycy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzQ29sb3IgPVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZpbmRWYXJSZWYodiwgZnVuY3Rpb24gKHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5rbm93bkNvbG9yVmFycy5oYXMocmVmKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNWYXJUeXBlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9URVhUQ09MT1IgfCBWQVJfVFlQRV9CT1JERVJDT0xPUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pICE9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pdGFyYXRlVmFyUmVmcyh2LCBmdW5jdGlvbiAocmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUocmVmLCBWQVJfVFlQRV9CR0NPTE9SKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNWYXJUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IgfCBWQVJfVFlQRV9CR0lNRylcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVua25vd25CZ1ZhcnMuZGVsZXRlKHYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy51bmRlZmluZWRWYXJzLmFkZCh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmZvckVhY2goZnVuY3Rpb24gKHZhck5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5oYXModmFyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHZhck5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5jbGVhcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmdldE1vZGlmaWVyRm9yVmFyaWFibGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFyTmFtZSA9IG9wdGlvbnMudmFyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSA9IG9wdGlvbnMuc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZSA9IG9wdGlvbnMucnVsZSxcclxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW1nU2VsZWN0b3JzID0gb3B0aW9ucy5pZ25vcmVkSW1nU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2FuY2VsbGVkID0gb3B0aW9ucy5pc0NhbmNlbGxlZDtcclxuICAgICAgICAgICAgICAgIHZhciBnZXREZWNsYXJhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlY2xhcmF0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGRNb2RpZmllZFZhbHVlID0gZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlTnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJOYW1lV3JhcHBlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JNb2RpZmllclxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmlzVmFyVHlwZSh2YXJOYW1lLCB0eXBlTnVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHZhck5hbWVXcmFwcGVyKHZhck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHNvdXJjZVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29uc3RydWN0ZWRDb2xvclZhcihzb3VyY2VWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnNlcnRWYXJWYWx1ZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51bnN0YWJsZVZhclZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlTnVtID09PSBWQVJfVFlQRV9CR0NPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPSBjb2xvck1vZGlmaWVyKHZhbHVlLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPSByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhck5hbWVXcmFwcGVyKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xvck1vZGlmaWVyKGZhbGxiYWNrLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IGNvbG9yTW9kaWZpZXIoc291cmNlVmFsdWUsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kaWZpZWRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE1vZGlmaWVkVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JHQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlCZ0NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRNb2RpZmllZFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9URVhUQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBUZXh0Q29sb3JWYXJpYWJsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeU1vZGlmeVRleHRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTW9kaWZpZWRWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQk9SREVSQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBCb3JkZXJDb2xvclZhcmlhYmxlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5TW9kaWZ5Qm9yZGVyQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1ZhclR5cGUodmFyTmFtZSwgVkFSX1RZUEVfQkdJTUcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHdyYXBCZ0ltZ1ZhcmlhYmxlTmFtZSh2YXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkVmFsdWUgPSBzb3VyY2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHNvdXJjZVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyeU1vZGlmeUJnQ29sb3IoZmFsbGJhY2ssIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZ01vZGlmaWVyID0gZ2V0QmdJbWFnZU1vZGlmaWVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW1nU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYmdNb2RpZmllciA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBiZ01vZGlmaWVyKHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYmdNb2RpZmllcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVkVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBhZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChvblR5cGVDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNzID0gZ2V0RGVjbGFyYXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVHlwZUNoYW5nZShkZWNzKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZUZvclZhclR5cGVDaGFuZ2UodmFyTmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHZhciByZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVuc3Vic2NyaWJlRnJvbVZhcmlhYmxlVHlwZUNoYW5nZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZ2V0RGVjbGFyYXRpb25zKCksXHJcbiAgICAgICAgICAgICAgICAgICAgb25UeXBlQ2hhbmdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyOiBhZGRMaXN0ZW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzOiByZW1vdmVMaXN0ZW5lcnNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmdldE1vZGlmaWVyRm9yVmFyRGVwZW5kYW50ID0gZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHNvdXJjZVZhbHVlLm1hdGNoKC9eXFxzKihyZ2J8aHNsKWE/XFwoLykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpc0JnXzEgPSBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiYmFja2dyb3VuZFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBpc1RleHRfMSA9IGlzVGV4dENvbG9yUHJvcGVydHkocHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGVtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGluc2VydFZhclZhbHVlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVuc3RhYmxlVmFyVmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaXNCZ18xID8gXCIjZmZmZmZmXCIgOiBcIiMwMDAwMDBcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVyID0gaXNCZ18xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ5TW9kaWZ5QmdDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGlzVGV4dF8xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ5TW9kaWZ5VGV4dENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ5TW9kaWZ5Qm9yZGVyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVyKHZhbHVlLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWNvbG9yXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodGhlbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ5TW9kaWZ5QmdDb2xvcihmYWxsYmFjaywgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVGV4dENvbG9yUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcFRleHRDb2xvclZhcmlhYmxlTmFtZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ5TW9kaWZ5VGV4dENvbG9yKGZhbGxiYWNrLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kXCIgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtaW1hZ2VcIiB8fFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYm94LXNoYWRvd1wiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGVtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1bmtub3duVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZ5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFyaWFibGVSZXBsYWNlZCA9IHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNWYXJUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzVmFyVHlwZSh2LCBWQVJfVFlQRV9CR0lNRykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBCZ0ltZ1ZhcmlhYmxlTmFtZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5rbm93blZhcnMuYWRkKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnlNb2RpZnlCZ0NvbG9yKGZhbGxiYWNrLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJib3gtc2hhZG93XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dNb2RpZmllciA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2hhZG93TW9kaWZpZXJXaXRoSW5mbyh2YXJpYWJsZVJlcGxhY2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZFNoYWRvdyA9IHNoYWRvd01vZGlmaWVyKHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFNoYWRvdy51bnBhcnNlYWJsZU1hdGNoZXNMZW5ndGggIT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRTaGFkb3cubWF0Y2hlc0xlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVkU2hhZG93LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFyaWFibGVSZXBsYWNlZDtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZCA9IG1vZGlmeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bmtub3duVmFycy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdFVua25vd25WYXIgPSB1bmtub3duVmFyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5zdWJzY3JpYmVGcm9tVmFyaWFibGVUeXBlQ2hhbmdlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RVbmtub3duVmFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gbW9kaWZ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlRm9yVmFyVHlwZUNoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFVua25vd25WYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZpZWQ7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJib3JkZXJcIikgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJvdXRsaW5lXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGVtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBCb3JkZXJDb2xvclZhcmlhYmxlTmFtZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ5TW9kaWZ5Qm9yZGVyQ29sb3IoZmFsbGJhY2ssIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLnN1YnNjcmliZUZvclZhclR5cGVDaGFuZ2UgPSBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgIHZhck5hbWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5oYXModmFyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuc2V0KHZhck5hbWUsIG5ldyBTZXQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJvb3RTdG9yZSA9IHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuZ2V0KHZhck5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIXJvb3RTdG9yZS5oYXMoY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgICAgICByb290U3RvcmUuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLnVuc3Vic2NyaWJlRnJvbVZhcmlhYmxlVHlwZUNoYW5nZXMgPSBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgIHZhck5hbWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5nZXQodmFyTmFtZSkuZGVsZXRlKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmNvbGxlY3RWYXJpYWJsZXNBbmRWYXJEZXAgPSBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgIHJ1bGVMaXN0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJ1bGVMaXN0LmZvckVhY2goZnVuY3Rpb24gKHJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMocnVsZXMsIGZ1bmN0aW9uIChydWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJpYWJsZShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW5zcGVjdFZhcmlhYmxlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW5zcGVjdFZhckRlcGVuZGFudChwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5jb2xsZWN0Um9vdFZhcmlhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJpYWJsZShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW5zcGVjdFZhcmlhYmxlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmluc3BlY3RWYXJpYWJsZSA9IGZ1bmN0aW9uICh2YXJOYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc3RhYmxlVmFyVmFsdWVzLnNldCh2YXJOYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudCh2YWx1ZSkgJiYgaXNDb25zdHJ1Y3RlZENvbG9yVmFyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmFkZCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5lZFZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmluZWRWYXJzLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lZFZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICB2YXIgY29sb3IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUuaW5jbHVkZXMoXCJ1cmwoXCIpIHx8XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5pbmNsdWRlcyhcImxpbmVhci1ncmFkaWVudChcIikgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlLmluY2x1ZGVzKFwicmFkaWFsLWdyYWRpZW50KFwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2YXJOYW1lLCBWQVJfVFlQRV9CR0lNRyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5yZXNvbHZlVmFyaWFibGVUeXBlID0gZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICB2YXJOYW1lLFxyXG4gICAgICAgICAgICB0eXBlTnVtXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBpbml0aWFsVHlwZSA9IHRoaXMuaW5pdGlhbFZhclR5cGVzLmdldCh2YXJOYW1lKSB8fCAwO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFR5cGUgPSB0aGlzLnZhclR5cGVzLmdldCh2YXJOYW1lKSB8fCAwO1xyXG4gICAgICAgICAgICB2YXIgbmV3VHlwZSA9IGN1cnJlbnRUeXBlIHwgdHlwZU51bTtcclxuICAgICAgICAgICAgdGhpcy52YXJUeXBlcy5zZXQodmFyTmFtZSwgbmV3VHlwZSk7XHJcbiAgICAgICAgICAgIGlmIChuZXdUeXBlICE9PSBpbml0aWFsVHlwZSB8fCB0aGlzLnVuZGVmaW5lZFZhcnMuaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuZGVmaW5lZFZhcnMuZGVsZXRlKHZhck5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5kZWxldGUodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkJnVmFycy5kZWxldGUodmFyTmFtZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuY29sbGVjdFJvb3RWYXJEZXBlbmRhbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW5zcGVjdFZhckRlcGVuZGFudChwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5pbnNwZWN0VmFyRGVwZW5kYW50ID0gZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKGlzVmFyaWFibGUocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCBmdW5jdGlvbiAocmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy52YXJSZWZzLmhhcyhwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudmFyUmVmcy5zZXQocHJvcGVydHksIG5ldyBTZXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnZhclJlZnMuZ2V0KHByb3BlcnR5KS5hZGQocmVmKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1jb2xvclwiIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJib3gtc2hhZG93XCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNUZXh0Q29sb3JQcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodiwgVkFSX1RZUEVfVEVYVENPTE9SKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuc3RhcnRzV2l0aChcImJvcmRlclwiKSB8fFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuc3RhcnRzV2l0aChcIm91dGxpbmVcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHYsIFZBUl9UWVBFX0JPUkRFUkNPTE9SKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZFwiIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1ZhclR5cGUodiwgVkFSX1RZUEVfQkdDT0xPUiB8IFZBUl9UWVBFX0JHSU1HKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0JnQ29sb3IgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5maW5kVmFyUmVmKHYsIGZ1bmN0aW9uIChyZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5rbm93bkNvbG9yVmFycy5oYXMocmVmKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmlzVmFyVHlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9URVhUQ09MT1IgfCBWQVJfVFlQRV9CT1JERVJDT0xPUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pICE9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXRhcmF0ZVZhclJlZnModiwgZnVuY3Rpb24gKHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNCZ0NvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHJlZiwgVkFSX1RZUEVfQkdDT0xPUik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51bmtub3duQmdWYXJzLmFkZChyZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLml0ZXJhdGVWYXJEZXBzID0gZnVuY3Rpb24gKHZhbHVlLCBpdGVyYXRvcikge1xyXG4gICAgICAgICAgICB2YXIgdmFyRGVwcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgaXRlcmF0ZVZhckRlcGVuZGVuY2llcyh2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YXJEZXBzLmFkZCh2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhckRlcHMuZm9yRWFjaChmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yKHYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5maW5kVmFyUmVmID0gZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICB2YXJOYW1lLFxyXG4gICAgICAgICAgICBpdGVyYXRvcixcclxuICAgICAgICAgICAgc3RhY2tcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdmFyIGVfMSwgX2E7XHJcbiAgICAgICAgICAgIGlmIChzdGFjayA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFjayA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhY2suaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGFjay5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvcih2YXJOYW1lKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhck5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlZnMgPSB0aGlzLnZhclJlZnMuZ2V0KHZhck5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIXJlZnMgfHwgcmVmcy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmc18xID0gX192YWx1ZXMocmVmcyksIHJlZnNfMV8xID0gcmVmc18xLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAhcmVmc18xXzEuZG9uZTtcclxuICAgICAgICAgICAgICAgICAgICByZWZzXzFfMSA9IHJlZnNfMS5uZXh0KClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWYgPSByZWZzXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSB0aGlzLmZpbmRWYXJSZWYocmVmLCBpdGVyYXRvciwgc3RhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlXzFfMSkge1xyXG4gICAgICAgICAgICAgICAgZV8xID0ge2Vycm9yOiBlXzFfMX07XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWZzXzFfMSAmJiAhcmVmc18xXzEuZG9uZSAmJiAoX2EgPSByZWZzXzEucmV0dXJuKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EuY2FsbChyZWZzXzEpO1xyXG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuaXRhcmF0ZVZhclJlZnMgPSBmdW5jdGlvbiAodmFyTmFtZSwgaXRlcmF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5kVmFyUmVmKHZhck5hbWUsIGZ1bmN0aW9uIChyZWYpIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKHJlZik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLnNldE9uUm9vdFZhcmlhYmxlQ2hhbmdlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Sb290VmFyaWFibGVEZWZpbmVkID0gY2FsbGJhY2s7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUucHV0Um9vdFZhcnMgPSBmdW5jdGlvbiAoc3R5bGVFbGVtZW50LCB0aGVtZSkge1xyXG4gICAgICAgICAgICB2YXIgZV8yLCBfYTtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIHNoZWV0ID0gc3R5bGVFbGVtZW50LnNoZWV0O1xyXG4gICAgICAgICAgICBpZiAoc2hlZXQuY3NzUnVsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2hlZXQuZGVsZXRlUnVsZSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZGVjbGFyYXRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhcmlhYmxlKHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNWYXJUeXBlKHByb3BlcnR5LCBWQVJfVFlQRV9CR0NPTE9SKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZShwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5TW9kaWZ5QmdDb2xvcih2YWx1ZSwgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1ZhclR5cGUocHJvcGVydHksIFZBUl9UWVBFX1RFWFRDT0xPUikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5zZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcFRleHRDb2xvclZhcmlhYmxlTmFtZShwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5TW9kaWZ5VGV4dENvbG9yKHZhbHVlLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzVmFyVHlwZShwcm9wZXJ0eSwgVkFSX1RZUEVfQk9SREVSQ09MT1IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuc2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBCb3JkZXJDb2xvclZhcmlhYmxlTmFtZShwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5TW9kaWZ5Qm9yZGVyQ29sb3IodmFsdWUsIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmVGb3JWYXJUeXBlQ2hhbmdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vblJvb3RWYXJpYWJsZURlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciBjc3NMaW5lcyA9IFtdO1xyXG4gICAgICAgICAgICBjc3NMaW5lcy5wdXNoKFwiOnJvb3Qge1wiKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlY2xhcmF0aW9uc18xID0gX192YWx1ZXMoZGVjbGFyYXRpb25zKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zXzFfMSA9IGRlY2xhcmF0aW9uc18xLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAhZGVjbGFyYXRpb25zXzFfMS5kb25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uc18xXzEgPSBkZWNsYXJhdGlvbnNfMS5uZXh0KClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChkZWNsYXJhdGlvbnNfMV8xLnZhbHVlLCAyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgPSBfYlswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBfYlsxXTtcclxuICAgICAgICAgICAgICAgICAgICBjc3NMaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiAgICBcIi5jb25jYXQocHJvcGVydHksIFwiOiBcIikuY29uY2F0KHZhbHVlLCBcIjtcIilcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlXzJfMSkge1xyXG4gICAgICAgICAgICAgICAgZV8yID0ge2Vycm9yOiBlXzJfMX07XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zXzFfMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZGVjbGFyYXRpb25zXzFfMS5kb25lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGRlY2xhcmF0aW9uc18xLnJldHVybilcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmNhbGwoZGVjbGFyYXRpb25zXzEpO1xyXG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3NzTGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gY3NzTGluZXMuam9pbihcIlxcblwiKTtcclxuICAgICAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShjc3NUZXh0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBWYXJpYWJsZXNTdG9yZTtcclxuICAgIH0pKCk7XHJcbiAgICB2YXIgdmFyaWFibGVzU3RvcmUgPSBuZXcgVmFyaWFibGVzU3RvcmUoKTtcclxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlUmFuZ2UoaW5wdXQsIHNlYXJjaFN0YXJ0KSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaFN0YXJ0ID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgc2VhcmNoU3RhcnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RhcnQgPSBpbnB1dC5pbmRleE9mKFwidmFyKFwiLCBzZWFyY2hTdGFydCk7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IDApIHtcclxuICAgICAgICAgICAgdmFyIHJhbmdlID0gZ2V0UGFyZW50aGVzZXNSYW5nZShpbnB1dCwgc3RhcnQgKyAzKTtcclxuICAgICAgICAgICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXJ0OiBzdGFydCwgZW5kOiByYW5nZS5lbmR9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlc01hdGNoZXMoaW5wdXQpIHtcclxuICAgICAgICB2YXIgcmFuZ2VzID0gW107XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciByYW5nZTtcclxuICAgICAgICB3aGlsZSAoKHJhbmdlID0gZ2V0VmFyaWFibGVSYW5nZShpbnB1dCwgaSkpKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHJhbmdlLnN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgZW5kID0gcmFuZ2UuZW5kO1xyXG4gICAgICAgICAgICByYW5nZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IGVuZCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBpbnB1dC5zdWJzdHJpbmcoc3RhcnQsIGVuZClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGkgPSByYW5nZS5lbmQgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmFuZ2VzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZVZhcmlhYmxlc01hdGNoZXMoaW5wdXQsIHJlcGxhY2VyKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBnZXRWYXJpYWJsZXNNYXRjaGVzKGlucHV0KTtcclxuICAgICAgICB2YXIgbWF0Y2hlc0NvdW50ID0gbWF0Y2hlcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG1hdGNoZXNDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgcmVwbGFjZW1lbnRzID0gbWF0Y2hlcy5tYXAoZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VyKG0udmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBwYXJ0cyA9IFtdO1xyXG4gICAgICAgIHBhcnRzLnB1c2goaW5wdXQuc3Vic3RyaW5nKDAsIG1hdGNoZXNbMF0uc3RhcnQpKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcnRzLnB1c2gocmVwbGFjZW1lbnRzW2ldKTtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbWF0Y2hlc1tpXS5lbmQ7XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSBpIDwgbWF0Y2hlc0NvdW50IC0gMSA/IG1hdGNoZXNbaSArIDFdLnN0YXJ0IDogaW5wdXRMZW5ndGg7XHJcbiAgICAgICAgICAgIHBhcnRzLnB1c2goaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oXCJcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZU5hbWVBbmRGYWxsYmFjayhtYXRjaCkge1xyXG4gICAgICAgIHZhciBjb21tYUluZGV4ID0gbWF0Y2guaW5kZXhPZihcIixcIik7XHJcbiAgICAgICAgdmFyIG5hbWU7XHJcbiAgICAgICAgdmFyIGZhbGxiYWNrO1xyXG4gICAgICAgIGlmIChjb21tYUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgbmFtZSA9IG1hdGNoLnN1YnN0cmluZyg0LCBjb21tYUluZGV4KS50cmltKCk7XHJcbiAgICAgICAgICAgIGZhbGxiYWNrID0gbWF0Y2guc3Vic3RyaW5nKGNvbW1hSW5kZXggKyAxLCBtYXRjaC5sZW5ndGggLSAxKS50cmltKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmFtZSA9IG1hdGNoLnN1YnN0cmluZyg0LCBtYXRjaC5sZW5ndGggLSAxKS50cmltKCk7XHJcbiAgICAgICAgICAgIGZhbGxiYWNrID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtuYW1lOiBuYW1lLCBmYWxsYmFjazogZmFsbGJhY2t9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKHZhbHVlLCBuYW1lUmVwbGFjZXIsIGZhbGxiYWNrUmVwbGFjZXIpIHtcclxuICAgICAgICB2YXIgbWF0Y2hSZXBsYWNlciA9IGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSBnZXRWYXJpYWJsZU5hbWVBbmRGYWxsYmFjayhtYXRjaCksXHJcbiAgICAgICAgICAgICAgICBuYW1lID0gX2EubmFtZSxcclxuICAgICAgICAgICAgICAgIGZhbGxiYWNrID0gX2EuZmFsbGJhY2s7XHJcbiAgICAgICAgICAgIHZhciBuZXdOYW1lID0gbmFtZVJlcGxhY2VyKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIWZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ2YXIoXCIuY29uY2F0KG5ld05hbWUsIFwiKVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbmV3RmFsbGJhY2s7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudChmYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZhbGxiYWNrID0gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVSZXBsYWNlcixcclxuICAgICAgICAgICAgICAgICAgICBmYWxsYmFja1JlcGxhY2VyXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZhbGxiYWNrUmVwbGFjZXIpIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZhbGxiYWNrID0gZmFsbGJhY2tSZXBsYWNlcihmYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdGYWxsYmFjayA9IGZhbGxiYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcInZhcihcIi5jb25jYXQobmV3TmFtZSwgXCIsIFwiKS5jb25jYXQobmV3RmFsbGJhY2ssIFwiKVwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXBsYWNlVmFyaWFibGVzTWF0Y2hlcyh2YWx1ZSwgbWF0Y2hSZXBsYWNlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpdGVyYXRlVmFyRGVwZW5kZW5jaWVzKHZhbHVlLCBpdGVyYXRvcikge1xyXG4gICAgICAgIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyh2YWx1ZSwgZnVuY3Rpb24gKHZhck5hbWUpIHtcclxuICAgICAgICAgICAgaXRlcmF0b3IodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YXJOYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBcIi0tZGFya3JlYWRlci1iZ1wiLmNvbmNhdChuYW1lKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdyYXBUZXh0Q29sb3JWYXJpYWJsZU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBcIi0tZGFya3JlYWRlci10ZXh0XCIuY29uY2F0KG5hbWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gXCItLWRhcmtyZWFkZXItYm9yZGVyXCIuY29uY2F0KG5hbWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JhcEJnSW1nVmFyaWFibGVOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gXCItLWRhcmtyZWFkZXItYmdpbWdcIi5jb25jYXQobmFtZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1ZhcmlhYmxlKHByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCItLVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzVmFyRGVwZW5kYW50KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLmluY2x1ZGVzKFwidmFyKFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzQ29uc3RydWN0ZWRDb2xvclZhcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXRjaCgvXlxccyoocmdifGhzbClhP1xcKC8pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNUZXh0Q29sb3JQcm9wZXJ0eShwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImNvbG9yXCIgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiY2FyZXQtY29sb3JcIiB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCItd2Via2l0LXRleHQtZmlsbC1jb2xvclwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHZhciByYXdWYWx1ZVJlZ2V4ID0gL15cXGR7MSwzfSwgP1xcZHsxLDN9LCA/XFxkezEsM30kLztcclxuICAgIGZ1bmN0aW9uIHBhcnNlUmF3VmFsdWUoY29sb3IpIHtcclxuICAgICAgICBpZiAocmF3VmFsdWVSZWdleC50ZXN0KGNvbG9yKSkge1xyXG4gICAgICAgICAgICB2YXIgc3BsaXR0ZWQgPSBjb2xvci5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHRJblJHQl8xID0gXCJyZ2IoXCI7XHJcbiAgICAgICAgICAgIHNwbGl0dGVkLmZvckVhY2goZnVuY3Rpb24gKG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0SW5SR0JfMSArPSBcIlwiLmNvbmNhdChudW1iZXIudHJpbSgpLCBcIiwgXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVzdWx0SW5SR0JfMSA9IHJlc3VsdEluUkdCXzEuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIHJlc3VsdEluUkdCXzEubGVuZ3RoIC0gMlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXN1bHRJblJHQl8xICs9IFwiKVwiO1xyXG4gICAgICAgICAgICByZXR1cm4ge2lzUmF3OiB0cnVlLCBjb2xvcjogcmVzdWx0SW5SR0JfMX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7aXNSYXc6IGZhbHNlLCBjb2xvcjogY29sb3J9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmF3VmFsdWUoY29sb3IsIHRoZW1lLCBtb2RpZnlGdW5jdGlvbikge1xyXG4gICAgICAgIHZhciBfYSA9IHBhcnNlUmF3VmFsdWUoY29sb3IpLFxyXG4gICAgICAgICAgICBpc1JhdyA9IF9hLmlzUmF3LFxyXG4gICAgICAgICAgICBuZXdDb2xvciA9IF9hLmNvbG9yO1xyXG4gICAgICAgIHZhciByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKG5ld0NvbG9yKTtcclxuICAgICAgICBpZiAocmdiKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXRDb2xvciA9IG1vZGlmeUZ1bmN0aW9uKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgICAgICBpZiAoaXNSYXcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdXRwdXRJblJHQiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUob3V0cHV0Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dEluUkdCXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChvdXRwdXRJblJHQi5yLCBcIiwgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChvdXRwdXRJblJHQi5nLCBcIiwgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChvdXRwdXRJblJHQi5iKVxyXG4gICAgICAgICAgICAgICAgICAgIDogb3V0cHV0Q29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3Q29sb3I7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cnlNb2RpZnlCZ0NvbG9yKGNvbG9yLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBoYW5kbGVSYXdWYWx1ZShjb2xvciwgdGhlbWUsIG1vZGlmeUJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cnlNb2RpZnlUZXh0Q29sb3IoY29sb3IsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJhd1ZhbHVlKGNvbG9yLCB0aGVtZSwgbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyeU1vZGlmeUJvcmRlckNvbG9yKGNvbG9yLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBoYW5kbGVSYXdWYWx1ZShjb2xvciwgdGhlbWUsIG1vZGlmeUJvcmRlckNvbG9yKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGluc2VydFZhclZhbHVlcyhzb3VyY2UsIHZhclZhbHVlcywgc3RhY2spIHtcclxuICAgICAgICBpZiAoc3RhY2sgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBzdGFjayA9IG5ldyBTZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnRhaW5zVW5yZXNvbHZlZFZhciA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtYXRjaFJlcGxhY2VyID0gZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IGdldFZhcmlhYmxlTmFtZUFuZEZhbGxiYWNrKG1hdGNoKSxcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBfYS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZmFsbGJhY2sgPSBfYS5mYWxsYmFjaztcclxuICAgICAgICAgICAgaWYgKHN0YWNrLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbnNVbnJlc29sdmVkVmFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YWNrLmFkZChuYW1lKTtcclxuICAgICAgICAgICAgdmFyIHZhclZhbHVlID0gdmFyVmFsdWVzLmdldChuYW1lKSB8fCBmYWxsYmFjaztcclxuICAgICAgICAgICAgdmFyIGluc2VydGVkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHZhclZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQodmFyVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSBpbnNlcnRWYXJWYWx1ZXModmFyVmFsdWUsIHZhclZhbHVlcywgc3RhY2spO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IHZhclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaW5zZXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5zVW5yZXNvbHZlZFZhciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaW5zZXJ0ZWQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcmVwbGFjZWQgPSByZXBsYWNlVmFyaWFibGVzTWF0Y2hlcyhzb3VyY2UsIG1hdGNoUmVwbGFjZXIpO1xyXG4gICAgICAgIGlmIChjb250YWluc1VucmVzb2x2ZWRWYXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXBsYWNlZDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgb3ZlcnJpZGVzID0ge1xyXG4gICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1iZ2NvbG9yXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYmFja2dyb3VuZC1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJnY29sb3JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJnaW1hZ2VcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJiYWNrZ3JvdW5kLWltYWdlXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYmdpbWFnZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvcmRlci1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXJcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJib3JkZXItY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItYm90dG9tLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1ib3R0b21cIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJib3JkZXItYm90dG9tLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLWJvdHRvbVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvcmRlci1sZWZ0LWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1sZWZ0XCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLWxlZnQtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItbGVmdFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvcmRlci1yaWdodC1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItcmlnaHRcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJib3JkZXItcmlnaHQtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItcmlnaHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItdG9wLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci10b3BcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJib3JkZXItdG9wLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXRvcFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJveC1zaGFkb3dcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm94c2hhZG93XCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm94LXNoYWRvd1wiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJveHNoYWRvd1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImZpbGxcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtZmlsbFwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImZpbGxcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1maWxsXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3Ryb2tlXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLXN0cm9rZVwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcInN0cm9rZVwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLXN0cm9rZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm91dGxpbmUtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtb3V0bGluZVwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcIm91dGxpbmUtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1vdXRsaW5lXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3RvcC1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1zdG9wY29sb3JcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJzdG9wLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtc3RvcGNvbG9yXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIG92ZXJyaWRlc0xpc3QgPSBPYmplY3QudmFsdWVzKG92ZXJyaWRlcyk7XHJcbiAgICB2YXIgbm9ybWFsaXplZFByb3BMaXN0ID0ge307XHJcbiAgICBvdmVycmlkZXNMaXN0LmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIGNzc1Byb3AgPSBfYS5jc3NQcm9wLFxyXG4gICAgICAgICAgICBjdXN0b21Qcm9wID0gX2EuY3VzdG9tUHJvcDtcclxuICAgICAgICByZXR1cm4gKG5vcm1hbGl6ZWRQcm9wTGlzdFtjdXN0b21Qcm9wXSA9IGNzc1Byb3ApO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgSU5MSU5FX1NUWUxFX0FUVFJTID0gW1xyXG4gICAgICAgIFwic3R5bGVcIixcclxuICAgICAgICBcImZpbGxcIixcclxuICAgICAgICBcInN0b3AtY29sb3JcIixcclxuICAgICAgICBcInN0cm9rZVwiLFxyXG4gICAgICAgIFwiYmdjb2xvclwiLFxyXG4gICAgICAgIFwiY29sb3JcIlxyXG4gICAgXTtcclxuICAgIHZhciBJTkxJTkVfU1RZTEVfU0VMRUNUT1IgPSBJTkxJTkVfU1RZTEVfQVRUUlMubWFwKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiW1wiLmNvbmNhdChhdHRyLCBcIl1cIik7XHJcbiAgICB9KS5qb2luKFwiLCBcIik7XHJcbiAgICBmdW5jdGlvbiBnZXRJbmxpbmVPdmVycmlkZVN0eWxlKCkge1xyXG4gICAgICAgIHJldHVybiBvdmVycmlkZXNMaXN0XHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YUF0dHIgPSBfYS5kYXRhQXR0cixcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Qcm9wID0gX2EuY3VzdG9tUHJvcCxcclxuICAgICAgICAgICAgICAgICAgICBjc3NQcm9wID0gX2EuY3NzUHJvcDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJbXCIuY29uY2F0KGRhdGFBdHRyLCBcIl0ge1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChjc3NQcm9wLCBcIjogdmFyKFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGN1c3RvbVByb3AsIFwiKSAhaW1wb3J0YW50O1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBcIn1cIlxyXG4gICAgICAgICAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldElubGluZVN0eWxlRWxlbWVudHMocm9vdCkge1xyXG4gICAgICAgIHZhciByZXN1bHRzID0gW107XHJcbiAgICAgICAgaWYgKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHJvb3QubWF0Y2hlcyhJTkxJTkVfU1RZTEVfU0VMRUNUT1IpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyb290KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICByb290IGluc3RhbmNlb2YgRWxlbWVudCB8fFxyXG4gICAgICAgICAgICAoaXNTaGFkb3dEb21TdXBwb3J0ZWQgJiYgcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHx8XHJcbiAgICAgICAgICAgIHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwdXNoKHJlc3VsdHMsIHJvb3QucXVlcnlTZWxlY3RvckFsbChJTkxJTkVfU1RZTEVfU0VMRUNUT1IpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcbiAgICB2YXIgdHJlZU9ic2VydmVycyA9IG5ldyBNYXAoKTtcclxuICAgIHZhciBhdHRyT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JJbmxpbmVTdHlsZXMoZWxlbWVudFN0eWxlRGlkQ2hhbmdlLCBzaGFkb3dSb290RGlzY292ZXJlZCkge1xyXG4gICAgICAgIGRlZXBXYXRjaEZvcklubGluZVN0eWxlcyhcclxuICAgICAgICAgICAgZG9jdW1lbnQsXHJcbiAgICAgICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZSxcclxuICAgICAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGZ1bmN0aW9uIChob3N0KSB7XHJcbiAgICAgICAgICAgIGRlZXBXYXRjaEZvcklubGluZVN0eWxlcyhcclxuICAgICAgICAgICAgICAgIGhvc3Quc2hhZG93Um9vdCxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZSxcclxuICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWVwV2F0Y2hGb3JJbmxpbmVTdHlsZXMoXHJcbiAgICAgICAgcm9vdCxcclxuICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UsXHJcbiAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWRcclxuICAgICkge1xyXG4gICAgICAgIGlmICh0cmVlT2JzZXJ2ZXJzLmhhcyhyb290KSkge1xyXG4gICAgICAgICAgICB0cmVlT2JzZXJ2ZXJzLmdldChyb290KS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGF0dHJPYnNlcnZlcnMuZ2V0KHJvb3QpLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRpc2NvdmVyZWROb2RlcyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICAgICAgZnVuY3Rpb24gZGlzY292ZXJOb2Rlcyhub2RlKSB7XHJcbiAgICAgICAgICAgIGdldElubGluZVN0eWxlRWxlbWVudHMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXNjb3ZlcmVkTm9kZXMuaGFzKGVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc2NvdmVyZWROb2Rlcy5hZGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlKGVsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhub2RlLCBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc2NvdmVyZWROb2Rlcy5oYXMobm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXNjb3ZlcmVkTm9kZXMuYWRkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWQobi5zaGFkb3dSb290KTtcclxuICAgICAgICAgICAgICAgIGRlZXBXYXRjaEZvcklubGluZVN0eWxlcyhcclxuICAgICAgICAgICAgICAgICAgICBuLnNoYWRvd1Jvb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRyZWVPYnNlcnZlciA9IGNyZWF0ZU9wdGltaXplZFRyZWVPYnNlcnZlcihyb290LCB7XHJcbiAgICAgICAgICAgIG9uTWlub3JNdXRhdGlvbnM6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZGl0aW9ucyA9IF9hLmFkZGl0aW9ucztcclxuICAgICAgICAgICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhZGRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXNjb3Zlck5vZGVzKGFkZGVkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkh1Z2VNdXRhdGlvbnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRpc2NvdmVyTm9kZXMocm9vdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0cmVlT2JzZXJ2ZXJzLnNldChyb290LCB0cmVlT2JzZXJ2ZXIpO1xyXG4gICAgICAgIHZhciBhdHRlbXB0Q291bnQgPSAwO1xyXG4gICAgICAgIHZhciBzdGFydCA9IG51bGw7XHJcbiAgICAgICAgdmFyIEFUVEVNUFRTX0lOVEVSVkFMID0gZ2V0RHVyYXRpb24oe3NlY29uZHM6IDEwfSk7XHJcbiAgICAgICAgdmFyIFJFVFJZX1RJTUVPVVQgPSBnZXREdXJhdGlvbih7c2Vjb25kczogMn0pO1xyXG4gICAgICAgIHZhciBNQVhfQVRURU1QVFNfQ09VTlQgPSA1MDtcclxuICAgICAgICB2YXIgY2FjaGUgPSBbXTtcclxuICAgICAgICB2YXIgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICB2YXIgaGFuZGxlQXR0cmlidXRlTXV0YXRpb25zID0gdGhyb3R0bGUoZnVuY3Rpb24gKG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKElOTElORV9TVFlMRV9BVFRSUy5pbmNsdWRlcyhtLmF0dHJpYnV0ZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlKG0udGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGF0dHJPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCkge1xyXG4gICAgICAgICAgICAgICAgY2FjaGUucHVzaC5hcHBseShcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgICAgICBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQobXV0YXRpb25zKSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF0dGVtcHRDb3VudCsrO1xyXG4gICAgICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGVtcHRDb3VudCA+PSBNQVhfQVRURU1QVFNfQ09VTlQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub3cgLSBzdGFydCA8IEFUVEVNUFRTX0lOVEVSVkFMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZUNhY2hlID0gY2FjaGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyhhdHRyaWJ1dGVDYWNoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgUkVUUllfVElNRU9VVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUucHVzaC5hcHBseShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChtdXRhdGlvbnMpLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xyXG4gICAgICAgICAgICAgICAgYXR0ZW1wdENvdW50ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMobXV0YXRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhdHRyT2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogSU5MSU5FX1NUWUxFX0FUVFJTLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIG92ZXJyaWRlc0xpc3QubWFwKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhQXR0ciA9IF9hLmRhdGFBdHRyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhQXR0cjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBhdHRyT2JzZXJ2ZXJzLnNldChyb290LCBhdHRyT2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9ySW5saW5lU3R5bGVzKCkge1xyXG4gICAgICAgIHRyZWVPYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICByZXR1cm4gby5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXR0ck9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0cmVlT2JzZXJ2ZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgYXR0ck9ic2VydmVycy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgdmFyIGlubGluZVN0eWxlQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgdmFyIGZpbHRlclByb3BzID0gW1wiYnJpZ2h0bmVzc1wiLCBcImNvbnRyYXN0XCIsIFwiZ3JheXNjYWxlXCIsIFwic2VwaWFcIiwgXCJtb2RlXCJdO1xyXG4gICAgZnVuY3Rpb24gZ2V0SW5saW5lU3R5bGVDYWNoZUtleShlbCwgdGhlbWUpIHtcclxuICAgICAgICByZXR1cm4gSU5MSU5FX1NUWUxFX0FUVFJTLm1hcChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoYXR0ciwgJz1cIicpLmNvbmNhdChlbC5nZXRBdHRyaWJ1dGUoYXR0ciksICdcIicpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQocHJvcCwgJz1cIicpLmNvbmNhdCh0aGVtZVtwcm9wXSwgJ1wiJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3VsZElnbm9yZUlubGluZVN0eWxlKGVsZW1lbnQsIHNlbGVjdG9ycykge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGluZ25vcmVkU2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoaW5nbm9yZWRTZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG92ZXJyaWRlSW5saW5lU3R5bGUoXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICB0aGVtZSxcclxuICAgICAgICBpZ25vcmVJbmxpbmVTZWxlY3RvcnMsXHJcbiAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnNcclxuICAgICkge1xyXG4gICAgICAgIHZhciBjYWNoZUtleSA9IGdldElubGluZVN0eWxlQ2FjaGVLZXkoZWxlbWVudCwgdGhlbWUpO1xyXG4gICAgICAgIGlmIChjYWNoZUtleSA9PT0gaW5saW5lU3R5bGVDYWNoZS5nZXQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdW5zZXRQcm9wcyA9IG5ldyBTZXQoT2JqZWN0LmtleXMob3ZlcnJpZGVzKSk7XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Q3VzdG9tUHJvcCh0YXJnZXRDU1NQcm9wLCBtb2RpZmllckNTU1Byb3AsIGNzc1ZhbCkge1xyXG4gICAgICAgICAgICB2YXIgaXNQcm9wZXJ0eVZhcmlhYmxlID0gdGFyZ2V0Q1NTUHJvcC5zdGFydHNXaXRoKFwiLS1cIik7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IGlzUHJvcGVydHlWYXJpYWJsZSA/IHt9IDogb3ZlcnJpZGVzW3RhcmdldENTU1Byb3BdLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUHJvcCA9IF9hLmN1c3RvbVByb3AsXHJcbiAgICAgICAgICAgICAgICBkYXRhQXR0ciA9IF9hLmRhdGFBdHRyO1xyXG4gICAgICAgICAgICB2YXIgbW9kID0gZ2V0TW9kaWZpYWJsZUNTU0RlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJDU1NQcm9wLFxyXG4gICAgICAgICAgICAgICAgY3NzVmFsLFxyXG4gICAgICAgICAgICAgICAge3N0eWxlOiBlbGVtZW50LnN0eWxlfSxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICghbW9kKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gbW9kLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUodGhlbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1Byb3BlcnR5VmFyaWFibGUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdHlwZWRWYWx1ZS5kZWNsYXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHkgPSBfYS5wcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBfYS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAhKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGN1c3RvbVByb3AsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoZGF0YUF0dHIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoZGF0YUF0dHIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdW5zZXRQcm9wcy5kZWxldGUodGFyZ2V0Q1NTUHJvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlnbm9yZUlubGluZVNlbGVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRJZ25vcmVJbmxpbmVTdHlsZShlbGVtZW50LCBpZ25vcmVJbmxpbmVTZWxlY3RvcnMpKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNldFByb3BzLmZvckVhY2goZnVuY3Rpb24gKGNzc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZXNbY3NzUHJvcF0uZGF0YUF0dHIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiYmdjb2xvclwiKSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImJnY29sb3JcIik7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eWzAtOWEtZl17M30kL2kpIHx8XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezZ9JC9pKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gXCIjXCIuY29uY2F0KHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJhY2tncm91bmQtY29sb3JcIiwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJjb2xvclwiKSAmJiBlbGVtZW50LnJlbCAhPT0gXCJtYXNrLWljb25cIikge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImNvbG9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezN9JC9pKSB8fFxyXG4gICAgICAgICAgICAgICAgdmFsdWUubWF0Y2goL15bMC05YS1mXXs2fSQvaSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiI1wiLmNvbmNhdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcImNvbG9yXCIsIFwiY29sb3JcIiwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZmlsbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIFNNQUxMX1NWR19MSU1JVF8xID0gMzI7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVfMSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZmlsbFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZV8xICE9PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZVNWR0VsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gX2Eud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQmcgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID4gU01BTExfU1ZHX0xJTUlUXzEgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPiBTTUFMTF9TVkdfTElNSVRfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCZyA/IFwiYmFja2dyb3VuZC1jb2xvclwiIDogXCJjb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1JlYWR5U3RhdGVDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTVkdFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRSZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcihoYW5kbGVTVkdFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXCJmaWxsXCIsIFwiY29sb3JcIiwgdmFsdWVfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcInN0b3AtY29sb3JcIikpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9wLWNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdG9wLWNvbG9yXCIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcInN0cm9rZVwiKSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInN0cm9rZVwiKTtcclxuICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcclxuICAgICAgICAgICAgICAgIFwic3Ryb2tlXCIsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgU1ZHTGluZUVsZW1lbnQgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgU1ZHVGV4dEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLWNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiY29sb3JcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUgJiZcclxuICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhlbGVtZW50LnN0eWxlLCBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1pbWFnZVwiICYmIHZhbHVlLmluY2x1ZGVzKFwidXJsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAocHJvcGVydHkuc3RhcnRzV2l0aChcIi0tXCIpICYmICFub3JtYWxpemVkUHJvcExpc3RbcHJvcGVydHldKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChwcm9wZXJ0eSwgcHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG92ZXJyaWRlblByb3AgPSBub3JtYWxpemVkUHJvcExpc3RbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVuUHJvcCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG92ZXJyaWRlblByb3ApICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFlbGVtZW50Lmhhc0F0dHJpYnV0ZShvdmVycmlkZW5Qcm9wKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZW5Qcm9wID09PSBcImJhY2tncm91bmQtY29sb3JcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJiZ2NvbG9yXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlICYmXHJcbiAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudCAmJlxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmZpbGxcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcclxuICAgICAgICAgICAgICAgIFwiZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZmlsbFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3JFYWNoKHVuc2V0UHJvcHMsIGZ1bmN0aW9uIChjc3NQcm9wKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG92ZXJyaWRlc1tjc3NQcm9wXS5kYXRhQXR0cik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5saW5lU3R5bGVDYWNoZS5zZXQoZWxlbWVudCwgZ2V0SW5saW5lU3R5bGVDYWNoZUtleShlbGVtZW50LCB0aGVtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtZXRhVGhlbWVDb2xvck5hbWUgPSBcInRoZW1lLWNvbG9yXCI7XHJcbiAgICB2YXIgbWV0YVRoZW1lQ29sb3JTZWxlY3RvciA9ICdtZXRhW25hbWU9XCInLmNvbmNhdChtZXRhVGhlbWVDb2xvck5hbWUsICdcIl0nKTtcclxuICAgIHZhciBzcmNNZXRhVGhlbWVDb2xvciA9IG51bGw7XHJcbiAgICB2YXIgb2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgZnVuY3Rpb24gY2hhbmdlTWV0YVRoZW1lQ29sb3IobWV0YSwgdGhlbWUpIHtcclxuICAgICAgICBzcmNNZXRhVGhlbWVDb2xvciA9IHNyY01ldGFUaGVtZUNvbG9yIHx8IG1ldGEuY29udGVudDtcclxuICAgICAgICB2YXIgY29sb3IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHNyY01ldGFUaGVtZUNvbG9yKTtcclxuICAgICAgICBpZiAoIWNvbG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0YS5jb250ZW50ID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKGNvbG9yLCB0aGVtZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VNZXRhVGhlbWVDb2xvcldoZW5BdmFpbGFibGUodGhlbWUpIHtcclxuICAgICAgICB2YXIgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWV0YVRoZW1lQ29sb3JTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKG1ldGEpIHtcclxuICAgICAgICAgICAgY2hhbmdlTWV0YVRoZW1lQ29sb3IobWV0YSwgdGhlbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgbG9vcDogZm9yICh2YXIgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkZWROb2RlcyA9IG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYWRkZWROb2Rlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGFkZGVkTm9kZXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgaW5zdGFuY2VvZiBIVE1MTWV0YUVsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubmFtZSA9PT0gbWV0YVRoZW1lQ29sb3JOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTWV0YVRoZW1lQ29sb3Iobm9kZSwgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgbG9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwge2NoaWxkTGlzdDogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlc3RvcmVNZXRhVGhlbWVDb2xvcigpIHtcclxuICAgICAgICBpZiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZXRhVGhlbWVDb2xvclNlbGVjdG9yKTtcclxuICAgICAgICBpZiAobWV0YSAmJiBzcmNNZXRhVGhlbWVDb2xvcikge1xyXG4gICAgICAgICAgICBtZXRhLmNvbnRlbnQgPSBzcmNNZXRhVGhlbWVDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRoZW1lQ2FjaGVLZXlzID0gW1xyXG4gICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgIFwiYnJpZ2h0bmVzc1wiLFxyXG4gICAgICAgIFwiY29udHJhc3RcIixcclxuICAgICAgICBcImdyYXlzY2FsZVwiLFxyXG4gICAgICAgIFwic2VwaWFcIixcclxuICAgICAgICBcImRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBcImRhcmtTY2hlbWVUZXh0Q29sb3JcIixcclxuICAgICAgICBcImxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgXCJsaWdodFNjaGVtZVRleHRDb2xvclwiXHJcbiAgICBdO1xyXG4gICAgZnVuY3Rpb24gZ2V0VGhlbWVLZXkodGhlbWUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0S2V5ID0gXCJcIjtcclxuICAgICAgICB0aGVtZUNhY2hlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgcmVzdWx0S2V5ICs9IFwiXCIuY29uY2F0KGtleSwgXCI6XCIpLmNvbmNhdCh0aGVtZVtrZXldLCBcIjtcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdEtleTtcclxuICAgIH1cclxuICAgIHZhciBhc3luY1F1ZXVlID0gY3JlYXRlQXN5bmNUYXNrc1F1ZXVlKCk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0TW9kaWZpZXIoKSB7XHJcbiAgICAgICAgdmFyIHJlbmRlcklkID0gMDtcclxuICAgICAgICB2YXIgcnVsZXNUZXh0Q2FjaGUgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdmFyIHJ1bGVzTW9kQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdmFyIHZhclR5cGVDaGFuZ2VDbGVhbmVycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICB2YXIgcHJldkZpbHRlcktleSA9IG51bGw7XHJcbiAgICAgICAgdmFyIGhhc05vbkxvYWRlZExpbmsgPSBmYWxzZTtcclxuICAgICAgICB2YXIgd2FzUmVidWlsdCA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNob3VsZFJlYnVpbGRTdHlsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhhc05vbkxvYWRlZExpbmsgJiYgIXdhc1JlYnVpbHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG1vZGlmeVNoZWV0KG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIHJ1bGVzID0gb3B0aW9ucy5zb3VyY2VDU1NSdWxlcztcclxuICAgICAgICAgICAgdmFyIHRoZW1lID0gb3B0aW9ucy50aGVtZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlQW5hbHlzaXMgPSBvcHRpb25zLmlnbm9yZUltYWdlQW5hbHlzaXMsXHJcbiAgICAgICAgICAgICAgICBmb3JjZSA9IG9wdGlvbnMuZm9yY2UsXHJcbiAgICAgICAgICAgICAgICBwcmVwYXJlU2hlZXQgPSBvcHRpb25zLnByZXBhcmVTaGVldCxcclxuICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQgPSBvcHRpb25zLmlzQXN5bmNDYW5jZWxsZWQ7XHJcbiAgICAgICAgICAgIHZhciBydWxlc0NoYW5nZWQgPSBydWxlc01vZENhY2hlLnNpemUgPT09IDA7XHJcbiAgICAgICAgICAgIHZhciBub3RGb3VuZENhY2hlS2V5cyA9IG5ldyBTZXQocnVsZXNNb2RDYWNoZS5rZXlzKCkpO1xyXG4gICAgICAgICAgICB2YXIgdGhlbWVLZXkgPSBnZXRUaGVtZUtleSh0aGVtZSk7XHJcbiAgICAgICAgICAgIHZhciB0aGVtZUNoYW5nZWQgPSB0aGVtZUtleSAhPT0gcHJldkZpbHRlcktleTtcclxuICAgICAgICAgICAgaWYgKGhhc05vbkxvYWRlZExpbmspIHtcclxuICAgICAgICAgICAgICAgIHdhc1JlYnVpbHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBtb2RSdWxlcyA9IFtdO1xyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMoXHJcbiAgICAgICAgICAgICAgICBydWxlcyxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChydWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBydWxlLmNzc1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHREaWZmZXJzRnJvbVByZXYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBub3RGb3VuZENhY2hlS2V5cy5kZWxldGUoY3NzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUucGFyZW50UnVsZSBpbnN0YW5jZW9mIENTU01lZGlhUnVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ICs9IFwiO1wiLmNvbmNhdChydWxlLnBhcmVudFJ1bGUubWVkaWEubWVkaWFUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFydWxlc1RleHRDYWNoZS5oYXMoY3NzVGV4dCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXNUZXh0Q2FjaGUuYWRkKGNzc1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGlmZmVyc0Zyb21QcmV2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHREaWZmZXJzRnJvbVByZXYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RSdWxlcy5wdXNoKHJ1bGVzTW9kQ2FjaGUuZ2V0KGNzc1RleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kRGVjcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IGdldE1vZGlmaWFibGVDU1NEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2REZWNzLnB1c2gobW9kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZFJ1bGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2REZWNzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudFJ1bGUgPSBydWxlLnBhcmVudFJ1bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZFJ1bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogcnVsZS5zZWxlY3RvclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IG1vZERlY3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRSdWxlOiBwYXJlbnRSdWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZFJ1bGVzLnB1c2gobW9kUnVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzTW9kQ2FjaGUuc2V0KGNzc1RleHQsIG1vZFJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNOb25Mb2FkZWRMaW5rID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbm90Rm91bmRDYWNoZUtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBydWxlc1RleHRDYWNoZS5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgICAgIHJ1bGVzTW9kQ2FjaGUuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwcmV2RmlsdGVyS2V5ID0gdGhlbWVLZXk7XHJcbiAgICAgICAgICAgIGlmICghZm9yY2UgJiYgIXJ1bGVzQ2hhbmdlZCAmJiAhdGhlbWVDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVuZGVySWQrKztcclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0UnVsZSh0YXJnZXQsIGluZGV4LCBydWxlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBydWxlLnNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IHJ1bGUuZGVjbGFyYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdldERlY2xhcmF0aW9uVGV4dCA9IGZ1bmN0aW9uIChkZWMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHkgPSBkZWMucHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZGVjLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQgPSBkZWMuaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSA9IGRlYy5zb3VyY2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHByb3BlcnR5LCBcIjogXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQodmFsdWUgPT0gbnVsbCA/IHNvdXJjZVZhbHVlIDogdmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoaW1wb3J0YW50ID8gXCIgIWltcG9ydGFudFwiIDogXCJcIiwgXCI7XCIpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHZhciBjc3NSdWxlc1RleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlY2xhcmF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzc1J1bGVzVGV4dCArPSBcIlwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGVjbGFyYXRpb25UZXh0KGRlY2xhcmF0aW9ucyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ1bGVUZXh0ID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQoc2VsZWN0b3IsIFwiIHsgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChjc3NSdWxlc1RleHQsIFwiIH1cIik7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuaW5zZXJ0UnVsZShydWxlVGV4dCwgaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhc3luY0RlY2xhcmF0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdmFyIHZhckRlY2xhcmF0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdmFyIGFzeW5jRGVjbGFyYXRpb25Db3VudGVyID0gMDtcclxuICAgICAgICAgICAgdmFyIHZhckRlY2xhcmF0aW9uQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHZhciByb290UmVhZHlHcm91cCA9IHtydWxlOiBudWxsLCBydWxlczogW10sIGlzR3JvdXA6IHRydWV9O1xyXG4gICAgICAgICAgICB2YXIgZ3JvdXBSZWZzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0R3JvdXAocnVsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290UmVhZHlHcm91cDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChncm91cFJlZnMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwUmVmcy5nZXQocnVsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgZ3JvdXAgPSB7cnVsZTogcnVsZSwgcnVsZXM6IFtdLCBpc0dyb3VwOiB0cnVlfTtcclxuICAgICAgICAgICAgICAgIGdyb3VwUmVmcy5zZXQocnVsZSwgZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudEdyb3VwID0gZ2V0R3JvdXAocnVsZS5wYXJlbnRSdWxlKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudEdyb3VwLnJ1bGVzLnB1c2goZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhclR5cGVDaGFuZ2VDbGVhbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsZWFyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXJUeXBlQ2hhbmdlQ2xlYW5lcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgbW9kUnVsZXNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBfYS5zZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gX2EuZGVjbGFyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRSdWxlID0gX2EucGFyZW50UnVsZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JvdXAgPSBnZXRHcm91cChwYXJlbnRSdWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZHlTdHlsZVJ1bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcm91cDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFkeURlY2xhcmF0aW9ucyA9IHJlYWR5U3R5bGVSdWxlLmRlY2xhcmF0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICBncm91cC5ydWxlcy5wdXNoKHJlYWR5U3R5bGVSdWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVBc3luY0RlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFzeW5jS2V5ID0gKythc3luY0RlY2xhcmF0aW9uQ291bnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFzeW5jRGVjbGFyYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNLZXk6IGFzeW5jS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2goYXN5bmNEZWNsYXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UmVuZGVySWQgPSByZW5kZXJJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQudGhlbihmdW5jdGlvbiAoYXN5bmNWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFhc3luY1ZhbHVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZCgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlbmRlcklkICE9PSByZW5kZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNEZWNsYXJhdGlvbi52YWx1ZSA9IGFzeW5jVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY1F1ZXVlLmFkZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlbmRlcklkICE9PSByZW5kZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYnVpbGRBc3luY1J1bGUoYXN5bmNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVWYXJEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhckRlY3MgPSBfYS5kZWNsYXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblR5cGVDaGFuZ2UgPSBfYS5vblR5cGVDaGFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YXJLZXkgPSArK3ZhckRlY2xhcmF0aW9uQ291bnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRSZW5kZXJJZCA9IHJlbmRlcklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5pdGlhbEluZGV4ID0gcmVhZHlEZWNsYXJhdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkRGVjcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyRGVjcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRGVjID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcktleTogdmFyS2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaCh0ZW1wRGVjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZERlY3MgPSBbdGVtcERlY107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyRGVjcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2QudmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXN5bmNEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kLnByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2QudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZHlEZWMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBtb2QucHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2QudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTogc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcktleTogdmFyS2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5wdXNoKHJlYWR5RGVjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREZWNzLnB1c2gocmVhZHlEZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25UeXBlQ2hhbmdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChuZXdEZWNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZCgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlbmRlcklkICE9PSByZW5kZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWR5VmFyRGVjcyA9IG5ld0RlY3MubWFwKGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogbW9kLnByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJLZXk6IHZhcktleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHJlYWR5RGVjbGFyYXRpb25zLmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjc1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5zcGxpY2UuYXBwbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zcHJlYWRBcnJheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2luZGV4LCBvbGREZWNzLmxlbmd0aF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fcmVhZChyZWFkeVZhckRlY3MpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREZWNzID0gcmVhZHlWYXJEZWNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVidWlsZFZhclJ1bGUodmFyS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhclR5cGVDaGFuZ2VDbGVhbmVycy5hZGQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uVHlwZUNoYW5nZS5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHkgPSBfYS5wcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX2EudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQgPSBfYS5pbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSA9IF9hLnNvdXJjZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZCA9IHZhbHVlKHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmllZCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBc3luY0RlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eS5zdGFydHNXaXRoKFwiLS1cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVWYXJEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOiBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTogc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHNoZWV0ID0gcHJlcGFyZVNoZWV0KCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGJ1aWxkU3R5bGVTaGVldCgpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVRhcmdldChncm91cCwgcGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ1bGUgPSBncm91cC5ydWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlIGluc3RhbmNlb2YgQ1NTTWVkaWFSdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZWRpYSA9IHJ1bGUubWVkaWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcmVudC5jc3NSdWxlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRSdWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJAbWVkaWEgXCIuY29uY2F0KG1lZGlhLm1lZGlhVGV4dCwgXCIge31cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGl0ZXJhdGVSZWFkeVJ1bGVzKGdyb3VwLCB0YXJnZXQsIHN0eWxlSXRlcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cC5ydWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmlzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gY3JlYXRlVGFyZ2V0KHIsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlUmVhZHlSdWxlcyhyLCB0LCBzdHlsZUl0ZXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlSXRlcmF0b3IociwgdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZVJlYWR5UnVsZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdFJlYWR5R3JvdXAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJ1bGUsIHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0YXJnZXQuY3NzUnVsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlLmRlY2xhcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFzeW5jS2V5ID0gX2EuYXN5bmNLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyS2V5ID0gX2EudmFyS2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFzeW5jS2V5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY0RlY2xhcmF0aW9ucy5zZXQoYXN5bmNLZXksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZTogcnVsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhcktleSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyRGVjbGFyYXRpb25zLnNldCh2YXJLZXksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZTogcnVsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UnVsZSh0YXJnZXQsIGluZGV4LCBydWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlYnVpbGRBc3luY1J1bGUoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBhc3luY0RlY2xhcmF0aW9ucy5nZXQoa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICBydWxlID0gX2EucnVsZSxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBfYS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBfYS5pbmRleDtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5kZWxldGVSdWxlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHNldFJ1bGUodGFyZ2V0LCBpbmRleCwgcnVsZSk7XHJcbiAgICAgICAgICAgICAgICBhc3luY0RlY2xhcmF0aW9ucy5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWJ1aWxkVmFyUnVsZShrZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSA9IHZhckRlY2xhcmF0aW9ucy5nZXQoa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICBydWxlID0gX2EucnVsZSxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBfYS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBfYS5pbmRleDtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5kZWxldGVSdWxlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHNldFJ1bGUodGFyZ2V0LCBpbmRleCwgcnVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVpbGRTdHlsZVNoZWV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1vZGlmeVNoZWV0OiBtb2RpZnlTaGVldCxcclxuICAgICAgICAgICAgc2hvdWxkUmVidWlsZFN0eWxlOiBzaG91bGRSZWJ1aWxkU3R5bGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBTVFlMRV9TRUxFQ1RPUiA9ICdzdHlsZSwgbGlua1tyZWwqPVwic3R5bGVzaGVldFwiIGldOm5vdChbZGlzYWJsZWRdKSc7XHJcbiAgICBmdW5jdGlvbiBpc0ZvbnRzR29vZ2xlQXBpU3R5bGUoZWxlbWVudCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudC5ocmVmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRVUkwgPSBuZXcgVVJMKGVsZW1lbnQuaHJlZik7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50VVJMLmhvc3RuYW1lID09PSBcImZvbnRzLmdvb2dsZWFwaXMuY29tXCI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGxvZ0luZm8oXCJDb3VsZG4ndCBjb25zdHJ1Y3QgXCIuY29uY2F0KGVsZW1lbnQuaHJlZiwgXCIgYXMgVVJMXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3VsZE1hbmFnZVN0eWxlKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgfHxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdTdHlsZUVsZW1lbnQgfHxcclxuICAgICAgICAgICAgICAgIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZWwgJiZcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic3R5bGVzaGVldFwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaHJlZiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFlbGVtZW50LmRpc2FibGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGlzRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICFlbGVtZW50LmhyZWYuc3RhcnRzV2l0aChcIm1vei1leHRlbnNpb246Ly9cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFpc0ZvbnRzR29vZ2xlQXBpU3R5bGUoZWxlbWVudCkpKSAmJlxyXG4gICAgICAgICAgICAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrcmVhZGVyXCIpICYmXHJcbiAgICAgICAgICAgIGVsZW1lbnQubWVkaWEudG9Mb3dlckNhc2UoKSAhPT0gXCJwcmludFwiICYmXHJcbiAgICAgICAgICAgICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInN0eWx1c1wiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNYW5hZ2VhYmxlU3R5bGVzKG5vZGUsIHJlc3VsdHMsIGRlZXApIHtcclxuICAgICAgICBpZiAocmVzdWx0cyA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlZXAgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBkZWVwID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3VsZE1hbmFnZVN0eWxlKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChub2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBub2RlIGluc3RhbmNlb2YgRWxlbWVudCB8fFxyXG4gICAgICAgICAgICAoaXNTaGFkb3dEb21TdXBwb3J0ZWQgJiYgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHx8XHJcbiAgICAgICAgICAgIG5vZGUgPT09IGRvY3VtZW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGZvckVhY2gobm9kZS5xdWVyeVNlbGVjdG9yQWxsKFNUWUxFX1NFTEVDVE9SKSwgZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TWFuYWdlYWJsZVN0eWxlcyhzdHlsZSwgcmVzdWx0cywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGRlZXApIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhub2RlLCBmdW5jdGlvbiAoaG9zdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRNYW5hZ2VhYmxlU3R5bGVzKGhvc3Quc2hhZG93Um9vdCwgcmVzdWx0cywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcbiAgICB2YXIgc3luY1N0eWxlU2V0ID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIHZhciBjb3JzU3R5bGVTZXQgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgdmFyIGNhbk9wdGltaXplVXNpbmdQcm94eSQxID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiX19kYXJrcmVhZGVyX19pbmxpbmVTY3JpcHRzQWxsb3dlZFwiLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2FuT3B0aW1pemVVc2luZ1Byb3h5JDEgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICB2YXIgbG9hZGluZ0xpbmtDb3VudGVyID0gMDtcclxuICAgIHZhciByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBjbGVhbkxvYWRpbmdMaW5rcygpIHtcclxuICAgICAgICByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1hbmFnZVN0eWxlKGVsZW1lbnQsIF9hKSB7XHJcbiAgICAgICAgdmFyIHVwZGF0ZSA9IF9hLnVwZGF0ZSxcclxuICAgICAgICAgICAgbG9hZGluZ1N0YXJ0ID0gX2EubG9hZGluZ1N0YXJ0LFxyXG4gICAgICAgICAgICBsb2FkaW5nRW5kID0gX2EubG9hZGluZ0VuZDtcclxuICAgICAgICB2YXIgcHJldlN0eWxlcyA9IFtdO1xyXG4gICAgICAgIHZhciBuZXh0ID0gZWxlbWVudDtcclxuICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAgIChuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmcpICYmXHJcbiAgICAgICAgICAgIG5leHQubWF0Y2hlcyhcIi5kYXJrcmVhZGVyXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHByZXZTdHlsZXMucHVzaChuZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvcnNDb3B5ID1cclxuICAgICAgICAgICAgcHJldlN0eWxlcy5maW5kKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLm1hdGNoZXMoXCIuZGFya3JlYWRlci0tY29yc1wiKSAmJiAhY29yc1N0eWxlU2V0LmhhcyhlbCk7XHJcbiAgICAgICAgICAgIH0pIHx8IG51bGw7XHJcbiAgICAgICAgdmFyIHN5bmNTdHlsZSA9XHJcbiAgICAgICAgICAgIHByZXZTdHlsZXMuZmluZChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbC5tYXRjaGVzKFwiLmRhcmtyZWFkZXItLXN5bmNcIikgJiYgIXN5bmNTdHlsZVNldC5oYXMoZWwpO1xyXG4gICAgICAgICAgICB9KSB8fCBudWxsO1xyXG4gICAgICAgIHZhciBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlciA9IG51bGw7XHJcbiAgICAgICAgdmFyIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlciA9IG51bGw7XHJcbiAgICAgICAgdmFyIGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpc092ZXJyaWRlRW1wdHkgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzaGVldE1vZGlmaWVyID0gY3JlYXRlU3R5bGVTaGVldE1vZGlmaWVyKCk7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIGNvbnRhaW5zQ1NTSW1wb3J0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpLm1hdGNoKGNzc0ltcG9ydFJlZ2V4KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBoYXNJbXBvcnRzKGNzc1J1bGVzLCBjaGVja0Nyb3NzT3JpZ2luKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnVsZSA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgIGNzc1J1bGVzTG9vcDogZm9yIChcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDAsIGxlbiA9IGNzc1J1bGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBpIDwgbGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZSA9IGNzc1J1bGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlLmhyZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQ3Jvc3NPcmlnaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmhyZWYuc3RhcnRzV2l0aChcImh0dHBcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcnVsZS5ocmVmLnN0YXJ0c1dpdGgobG9jYXRpb24ub3JpZ2luKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBjc3NSdWxlc0xvb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgY3NzUnVsZXNMb29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzU3luYygpIHtcclxuICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29yc0NvcHkuc2hlZXQuY3NzUnVsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5zQ1NTSW1wb3J0KCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjc3NSdWxlcyA9IHNhZmVHZXRTaGVldFJ1bGVzKCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICFpc1JlbGF0aXZlSHJlZk9uQWJzb2x1dGVQYXRoKGVsZW1lbnQuaHJlZikgJiZcclxuICAgICAgICAgICAgICAgIGhhc0ltcG9ydHMoY3NzUnVsZXMsIGZhbHNlKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoYXNJbXBvcnRzKGNzc1J1bGVzLCB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNzc1J1bGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBpbnNlcnRTdHlsZSgpIHtcclxuICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5uZXh0U2libGluZyAhPT0gY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5uZXh0U2libGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29yc0NvcHkubmV4dFNpYmxpbmcgIT09IHN5bmNTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bmNTdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29yc0NvcHkubmV4dFNpYmxpbmdcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcgIT09IHN5bmNTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzeW5jU3R5bGUsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVN5bmNTdHlsZSgpIHtcclxuICAgICAgICAgICAgc3luY1N0eWxlID1cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdTdHlsZUVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZS5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlclwiKTtcclxuICAgICAgICAgICAgc3luY1N0eWxlLmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyLS1zeW5jXCIpO1xyXG4gICAgICAgICAgICBzeW5jU3R5bGUubWVkaWEgPSBcInNjcmVlblwiO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgc3luY1N0eWxlLnRpdGxlID0gZWxlbWVudC50aXRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzeW5jU3R5bGVTZXQuYWRkKHN5bmNTdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpc0xvYWRpbmdSdWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciB3YXNMb2FkaW5nRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbG9hZGluZ0xpbmtJZCA9ICsrbG9hZGluZ0xpbmtDb3VudGVyO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzQXN5bmMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjc3NUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Jhc2VQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIF9hLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc1J1bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0Vycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxDU1NUZXh0O1xyXG4gICAgICAgICAgICAgICAgdmFyIF9iO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IF9fcmVhZChnZXRSdWxlc09yRXJyb3IoKSwgMikpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjc3NSdWxlcyA9IF9hWzBdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWNjZXNzRXJyb3IgPSBfYVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFjc3NSdWxlcyAmJiAhYWNjZXNzRXJyb3IgJiYgIWlzU2FmYXJpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNTYWZhcmkgJiYgIWVsZW1lbnQuc2hlZXQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU3RpbGxMb2FkaW5nRXJyb3IoYWNjZXNzRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGxpbmtMb2FkaW5nKGVsZW1lbnQsIGxvYWRpbmdMaW5rSWQpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FzTG9hZGluZ0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW5jZWxBc3luY09wZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9iID0gX19yZWFkKGdldFJ1bGVzT3JFcnJvcigpLCAyKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNzc1J1bGVzID0gX2JbMF0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhY2Nlc3NFcnJvciA9IF9iWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNJbXBvcnRzKGNzc1J1bGVzLCBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBjc3NSdWxlc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBsb2FkVGV4dChlbGVtZW50LmhyZWYpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0Jhc2VQYXRoID0gZ2V0Q1NTQmFzZUJhdGgoZWxlbWVudC5ocmVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW5jZWxBc3luY09wZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zQ1NTSW1wb3J0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQmFzZVBhdGggPSBnZXRDU1NCYXNlQmF0aChsb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjc3NUZXh0KSByZXR1cm4gWzMsIDEzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFs5LCAxMSwgLCAxMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCByZXBsYWNlQ1NTSW1wb3J0cyhjc3NUZXh0LCBjc3NCYXNlUGF0aCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbENTU1RleHQgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weSA9IGNyZWF0ZUNPUlNDb3B5KGVsZW1lbnQsIGZ1bGxDU1NUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlciA9IHdhdGNoRm9yTm9kZVBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2LXNpYmxpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBjb3JzQ29weS5zaGVldC5jc3NSdWxlc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDEzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRldGFpbHMob3B0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgcnVsZXMgPSBnZXRSdWxlc1N5bmMoKTtcclxuICAgICAgICAgICAgaWYgKCFydWxlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kUm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRpbmdSdWxlcyB8fCB3YXNMb2FkaW5nRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZ1J1bGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgZ2V0UnVsZXNBc3luYygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nUnVsZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZ1J1bGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdFbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7cnVsZXM6IHJ1bGVzfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZvcmNlUmVuZGVyU3R5bGUgPSBmYWxzZTtcclxuICAgICAgICBmdW5jdGlvbiByZW5kZXIodGhlbWUsIGlnbm9yZUltYWdlQW5hbHlzaXMpIHtcclxuICAgICAgICAgICAgdmFyIHJ1bGVzID0gZ2V0UnVsZXNTeW5jKCk7XHJcbiAgICAgICAgICAgIGlmICghcnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQ1NTUnVsZXNGcm9tU2hlZXQoc2hlZXQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBzaGVldC5jc3NSdWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0LmRlbGV0ZVJ1bGUoaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcHJlcGFyZU92ZXJyaWRlc1NoZWV0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzeW5jU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTeW5jU3R5bGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlciAmJiBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0U3R5bGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzeW5jU3R5bGUuc2hlZXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNTdHlsZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hlZXQgPSBzeW5jU3R5bGUuc2hlZXQ7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDU1NSdWxlc0Zyb21TaGVldChzaGVldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgPSB3YXRjaEZvck5vZGVQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByZXYtc2libGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVJlbmRlclN0eWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkT3ZlcnJpZGVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN5bmNTdHlsZS5zaGVldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBidWlsZE92ZXJyaWRlcygpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmb3JjZSA9IGZvcmNlUmVuZGVyU3R5bGU7XHJcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlclN0eWxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzaGVldE1vZGlmaWVyLm1vZGlmeVNoZWV0KHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVwYXJlU2hlZXQ6IHByZXBhcmVPdmVycmlkZXNTaGVldCxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VDU1NSdWxlczogcnVsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU6IHRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlQW5hbHlzaXM6IGlnbm9yZUltYWdlQW5hbHlzaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2U6IGZvcmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbmNlbEFzeW5jT3BlcmF0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlzT3ZlcnJpZGVFbXB0eSA9IHN5bmNTdHlsZS5zaGVldC5jc3NSdWxlcy5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXRNb2RpZmllci5zaG91bGRSZWJ1aWxkU3R5bGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1aWxkT3ZlcnJpZGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzT3JFcnJvcigpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnNoZWV0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW251bGwsIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtlbGVtZW50LnNoZWV0LmNzc1J1bGVzLCBudWxsXTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW251bGwsIGVycl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaXNTdGlsbExvYWRpbmdFcnJvcihlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IgJiYgZXJyb3IubWVzc2FnZSAmJiBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKFwibG9hZGluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2FmZUdldFNoZWV0UnVsZXMoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IF9fcmVhZChnZXRSdWxlc09yRXJyb3IoKSwgMiksXHJcbiAgICAgICAgICAgICAgICBjc3NSdWxlcyA9IF9hWzBdLFxyXG4gICAgICAgICAgICAgICAgZXJyID0gX2FbMV07XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjc3NSdWxlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hGb3JTaGVldENoYW5nZXMoKSB7XHJcbiAgICAgICAgICAgIHdhdGNoRm9yU2hlZXRDaGFuZ2VzVXNpbmdQcm94eSgpO1xyXG4gICAgICAgICAgICBpZiAoIShjYW5PcHRpbWl6ZVVzaW5nUHJveHkkMSAmJiBlbGVtZW50LnNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgd2F0Y2hGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBydWxlc0NoYW5nZUtleSA9IG51bGw7XHJcbiAgICAgICAgdmFyIHJ1bGVzQ2hlY2tGcmFtZUlkID0gbnVsbDtcclxuICAgICAgICBmdW5jdGlvbiBnZXRSdWxlc0NoYW5nZUtleSgpIHtcclxuICAgICAgICAgICAgdmFyIHJ1bGVzID0gc2FmZUdldFNoZWV0UnVsZXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVzID8gcnVsZXMubGVuZ3RoIDogbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGlkUnVsZXNLZXlDaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRSdWxlc0NoYW5nZUtleSgpICE9PSBydWxlc0NoYW5nZUtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpIHtcclxuICAgICAgICAgICAgcnVsZXNDaGFuZ2VLZXkgPSBnZXRSdWxlc0NoYW5nZUtleSgpO1xyXG4gICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpO1xyXG4gICAgICAgICAgICB2YXIgY2hlY2tGb3JVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlkUnVsZXNLZXlDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzQ2hhbmdlS2V5ID0gZ2V0UnVsZXNDaGFuZ2VLZXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYW5PcHRpbWl6ZVVzaW5nUHJveHkkMSAmJiBlbGVtZW50LnNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydWxlc0NoZWNrRnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjaGVja0ZvclVwZGF0ZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNoZWNrRm9yVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCkge1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShydWxlc0NoZWNrRnJhbWVJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhcmVTaGVldENoYW5nZXNQZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gb25TaGVldENoYW5nZSgpIHtcclxuICAgICAgICAgICAgY2FuT3B0aW1pemVVc2luZ1Byb3h5JDEgPSB0cnVlO1xyXG4gICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpO1xyXG4gICAgICAgICAgICBpZiAoYXJlU2hlZXRDaGFuZ2VzUGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVNoZWV0Q2hhbmdlcygpIHtcclxuICAgICAgICAgICAgICAgIGFyZVNoZWV0Q2hhbmdlc1BlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYW5jZWxBc3luY09wZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcmVTaGVldENoYW5nZXNQZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBxdWV1ZU1pY3JvdGFzayA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzayhoYW5kbGVTaGVldENoYW5nZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZVNoZWV0Q2hhbmdlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hGb3JTaGVldENoYW5nZXNVc2luZ1Byb3h5KCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fdXBkYXRlU2hlZXRcIixcclxuICAgICAgICAgICAgICAgIG9uU2hlZXRDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdQcm94eSgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX3VwZGF0ZVNoZWV0XCIsXHJcbiAgICAgICAgICAgICAgICBvblNoZWV0Q2hhbmdlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlcygpIHtcclxuICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdQcm94eSgpO1xyXG4gICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBwYXVzZSgpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlciAmJiBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlci5zdG9wKCk7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlciAmJiBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcclxuICAgICAgICAgICAgcGF1c2UoKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShjb3JzQ29weSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoc3luY1N0eWxlKTtcclxuICAgICAgICAgICAgbG9hZGluZ0VuZCgpO1xyXG4gICAgICAgICAgICBpZiAocmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmhhcyhsb2FkaW5nTGlua0lkKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlamVjdCA9IHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5nZXQobG9hZGluZ0xpbmtJZCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuZGVsZXRlKGxvYWRpbmdMaW5rSWQpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0ICYmIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoKCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgd2F0Y2hGb3JTaGVldENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWF4TW92ZUNvdW50ID0gMTA7XHJcbiAgICAgICAgdmFyIG1vdmVDb3VudCA9IDA7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVzdG9yZSgpIHtcclxuICAgICAgICAgICAgaWYgKCFzeW5jU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb3ZlQ291bnQrKztcclxuICAgICAgICAgICAgaWYgKG1vdmVDb3VudCA+IG1heE1vdmVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluc2VydFN0eWxlKCk7XHJcbiAgICAgICAgICAgIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyICYmIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyLnNraXAoKTtcclxuICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyICYmIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5za2lwKCk7XHJcbiAgICAgICAgICAgIGlmICghaXNPdmVycmlkZUVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlclN0eWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRldGFpbHM6IGRldGFpbHMsXHJcbiAgICAgICAgICAgIHJlbmRlcjogcmVuZGVyLFxyXG4gICAgICAgICAgICBwYXVzZTogcGF1c2UsXHJcbiAgICAgICAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXHJcbiAgICAgICAgICAgIHdhdGNoOiB3YXRjaCxcclxuICAgICAgICAgICAgcmVzdG9yZTogcmVzdG9yZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsaW5rTG9hZGluZyhsaW5rLCBsb2FkaW5nSWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjbGVhblVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbkxvYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuZGVsZXRlKGxvYWRpbmdJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbkxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhblVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5VcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGlua2VsZW1lbnQgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChsb2FkaW5nSWQsIFwiIGNvdWxkbid0IGJlIGxvYWRlZC4gXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQobGluay5ocmVmKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLnNldChsb2FkaW5nSWQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuVXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbkxvYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsaW5rLmhyZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldENTU0ltcG9ydFVSTChpbXBvcnREZWNsYXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBnZXRDU1NVUkxWYWx1ZShcclxuICAgICAgICAgICAgaW1wb3J0RGVjbGFyYXRpb25cclxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoNylcclxuICAgICAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC87JC8sIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvc2NyZWVuJC8sIFwiXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGxvYWRUZXh0KHVybCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpKSByZXR1cm4gWzMsIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGZldGNoKHVybCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBfYS5zZW50KCkudGV4dCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdGZXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZTogXCJ0ZXh0L2Nzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQ1NTSW1wb3J0cyhjc3NUZXh0LCBiYXNlUGF0aCwgY2FjaGUpIHtcclxuICAgICAgICBpZiAoY2FjaGUgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBjYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW1wb3J0TWF0Y2hlcyxcclxuICAgICAgICAgICAgICAgIGltcG9ydE1hdGNoZXNfMSxcclxuICAgICAgICAgICAgICAgIGltcG9ydE1hdGNoZXNfMV8xLFxyXG4gICAgICAgICAgICAgICAgbWF0Y2gsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRVUkwsXHJcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZVVSTCxcclxuICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTLFxyXG4gICAgICAgICAgICAgICAgZV8xXzE7XHJcbiAgICAgICAgICAgIHZhciBlXzEsIF9hO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gcmVtb3ZlQ1NTQ29tbWVudHMoY3NzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSByZXBsYWNlQ1NTRm9udEZhY2UoY3NzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSByZXBsYWNlQ1NTUmVsYXRpdmVVUkxzV2l0aEFic29sdXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydE1hdGNoZXMgPSBnZXRNYXRjaGVzKGNzc0ltcG9ydFJlZ2V4LCBjc3NUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCAxMCwgMTEsIDEyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbXBvcnRNYXRjaGVzXzEgPSBfX3ZhbHVlcyhpbXBvcnRNYXRjaGVzKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1wb3J0TWF0Y2hlc18xXzEgPSBpbXBvcnRNYXRjaGVzXzEubmV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhaW1wb3J0TWF0Y2hlc18xXzEuZG9uZSkgcmV0dXJuIFszLCA5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBpbXBvcnRNYXRjaGVzXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0VVJMID0gZ2V0Q1NTSW1wb3J0VVJMKG1hdGNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWJzb2x1dGVVUkwgPSBnZXRBYnNvbHV0ZVVSTChiYXNlUGF0aCwgaW1wb3J0VVJMKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FjaGUuaGFzKGFic29sdXRlVVJMKSkgcmV0dXJuIFszLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MgPSBjYWNoZS5nZXQoYWJzb2x1dGVVUkwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFszLCA2LCAsIDddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBsb2FkVGV4dChhYnNvbHV0ZVVSTCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChhYnNvbHV0ZVVSTCwgaW1wb3J0ZWRDU1MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDU1NJbXBvcnRzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENTU0Jhc2VCYXRoKGFic29sdXRlVVJMKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnNwbGl0KG1hdGNoKS5qb2luKGltcG9ydGVkQ1NTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0TWF0Y2hlc18xXzEgPSBpbXBvcnRNYXRjaGVzXzEubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxMl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xXzEgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IHtlcnJvcjogZV8xXzF9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDEyXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydE1hdGNoZXNfMV8xICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWltcG9ydE1hdGNoZXNfMV8xLmRvbmUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBpbXBvcnRNYXRjaGVzXzEucmV0dXJuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmNhbGwoaW1wb3J0TWF0Y2hlc18xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBjc3NUZXh0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDT1JTQ29weShzcmNFbGVtZW50LCBjc3NUZXh0KSB7XHJcbiAgICAgICAgaWYgKCFjc3NUZXh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29ycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICBjb3JzLmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgIGNvcnMuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXItLWNvcnNcIik7XHJcbiAgICAgICAgY29ycy5tZWRpYSA9IFwic2NyZWVuXCI7XHJcbiAgICAgICAgY29ycy50ZXh0Q29udGVudCA9IGNzc1RleHQ7XHJcbiAgICAgICAgc3JjRWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb3JzLCBzcmNFbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICBjb3JzLnNoZWV0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBjb3JzU3R5bGVTZXQuYWRkKGNvcnMpO1xyXG4gICAgICAgIHJldHVybiBjb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBvYnNlcnZlcnMgPSBbXTtcclxuICAgIHZhciBvYnNlcnZlZFJvb3RzO1xyXG4gICAgdmFyIHVuZGVmaW5lZEdyb3VwcyA9IG5ldyBNYXAoKTtcclxuICAgIHZhciBlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjaztcclxuICAgIGZ1bmN0aW9uIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhyb290KSB7XHJcbiAgICAgICAgaWYgKCFpc0RlZmluZWRTZWxlY3RvclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvckVhY2gocm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiOm5vdCg6ZGVmaW5lZClcIiksIGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICB2YXIgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXRhZy5pbmNsdWRlcyhcIi1cIikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBleHRlbmRlZFRhZyA9IGVsLmdldEF0dHJpYnV0ZShcImlzXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuZGVkVGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnID0gZXh0ZW5kZWRUYWc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXVuZGVmaW5lZEdyb3Vwcy5oYXModGFnKSkge1xyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkR3JvdXBzLnNldCh0YWcsIG5ldyBTZXQoKSk7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21FbGVtZW50c1doZW5EZWZpbmVkKHRhZykudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IHVuZGVmaW5lZEdyb3Vwcy5nZXQodGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkR3JvdXBzLmRlbGV0ZSh0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjayhBcnJheS5mcm9tKGVsZW1lbnRzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdW5kZWZpbmVkR3JvdXBzLmdldCh0YWcpLmFkZChlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgY2FuT3B0aW1pemVVc2luZ1Byb3h5ID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiX19kYXJrcmVhZGVyX19pbmxpbmVTY3JpcHRzQWxsb3dlZFwiLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2FuT3B0aW1pemVVc2luZ1Byb3h5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgdmFyIHJlc29sdmVycyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlzRGVmaW5lZChlKSB7XHJcbiAgICAgICAgY2FuT3B0aW1pemVVc2luZ1Byb3h5ID0gdHJ1ZTtcclxuICAgICAgICBpZiAocmVzb2x2ZXJzLmhhcyhlLmRldGFpbC50YWcpKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNvbHZlID0gcmVzb2x2ZXJzLmdldChlLmRldGFpbC50YWcpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3VzdG9tRWxlbWVudHNXaGVuRGVmaW5lZCh0YWcpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FuT3B0aW1pemVVc2luZ1Byb3h5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlcnMuc2V0KHRhZywgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2FkZFVuZGVmaW5lZFJlc29sdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWw6IHt0YWc6IHRhZ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGVja0lmRGVmaW5lZF8xID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IHVuZGVmaW5lZEdyb3Vwcy5nZXQodGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWVzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlLm1hdGNoZXMoXCI6ZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjaGVja0lmRGVmaW5lZF8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hlY2tJZkRlZmluZWRfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3YXRjaFdoZW5DdXN0b21FbGVtZW50c0RlZmluZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmVGcm9tRGVmaW5lQ3VzdG9tRWxlbWVudHMoKSB7XHJcbiAgICAgICAgZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHVuZGVmaW5lZEdyb3Vwcy5jbGVhcigpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19pc0RlZmluZWRcIixcclxuICAgICAgICAgICAgaGFuZGxlSXNEZWZpbmVkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdhdGNoRm9yU3R5bGVDaGFuZ2VzKGN1cnJlbnRTdHlsZXMsIHVwZGF0ZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpIHtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTdHlsZUNoYW5nZXMoKTtcclxuICAgICAgICB2YXIgcHJldlN0eWxlcyA9IG5ldyBTZXQoY3VycmVudFN0eWxlcyk7XHJcbiAgICAgICAgdmFyIHByZXZTdHlsZVNpYmxpbmdzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICB2YXIgbmV4dFN0eWxlU2libGluZ3MgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNhdmVTdHlsZVBvc2l0aW9uKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHByZXZTdHlsZVNpYmxpbmdzLnNldChzdHlsZSwgc3R5bGUucHJldmlvdXNFbGVtZW50U2libGluZyk7XHJcbiAgICAgICAgICAgIG5leHRTdHlsZVNpYmxpbmdzLnNldChzdHlsZSwgc3R5bGUubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZm9yZ2V0U3R5bGVQb3NpdGlvbihzdHlsZSkge1xyXG4gICAgICAgICAgICBwcmV2U3R5bGVTaWJsaW5ncy5kZWxldGUoc3R5bGUpO1xyXG4gICAgICAgICAgICBuZXh0U3R5bGVTaWJsaW5ncy5kZWxldGUoc3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkaWRTdHlsZVBvc2l0aW9uQ2hhbmdlKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9PSBwcmV2U3R5bGVTaWJsaW5ncy5nZXQoc3R5bGUpIHx8XHJcbiAgICAgICAgICAgICAgICBzdHlsZS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IG5leHRTdHlsZVNpYmxpbmdzLmdldChzdHlsZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudFN0eWxlcy5mb3JFYWNoKHNhdmVTdHlsZVBvc2l0aW9uKTtcclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdHlsZU9wZXJhdGlvbnMob3BlcmF0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgY3JlYXRlZFN0eWxlcyA9IG9wZXJhdGlvbnMuY3JlYXRlZFN0eWxlcyxcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMgPSBvcGVyYXRpb25zLnJlbW92ZWRTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZFN0eWxlcyA9IG9wZXJhdGlvbnMubW92ZWRTdHlsZXM7XHJcbiAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNhdmVTdHlsZVBvc2l0aW9uKHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbW92ZWRTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNhdmVTdHlsZVBvc2l0aW9uKHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9yZ2V0U3R5bGVQb3NpdGlvbihzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZTdHlsZXMuYWRkKHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0eWxlcy5kZWxldGUocyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkU3R5bGVzLnNpemUgKyByZW1vdmVkU3R5bGVzLnNpemUgKyBtb3ZlZFN0eWxlcy5zaXplID5cclxuICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IEFycmF5LmZyb20oY3JlYXRlZFN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZDogQXJyYXkuZnJvbShyZW1vdmVkU3R5bGVzKSxcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZDogQXJyYXkuZnJvbShtb3ZlZFN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZDogW11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1pbm9yVHJlZU11dGF0aW9ucyhfYSkge1xyXG4gICAgICAgICAgICB2YXIgYWRkaXRpb25zID0gX2EuYWRkaXRpb25zLFxyXG4gICAgICAgICAgICAgICAgbW92ZXMgPSBfYS5tb3ZlcyxcclxuICAgICAgICAgICAgICAgIGRlbGV0aW9ucyA9IF9hLmRlbGV0aW9ucztcclxuICAgICAgICAgICAgdmFyIGNyZWF0ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHZhciByZW1vdmVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB2YXIgbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TWFuYWdlYWJsZVN0eWxlcyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVkU3R5bGVzLmFkZChzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRlbGV0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TWFuYWdlYWJsZVN0eWxlcyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW1vdmVkU3R5bGVzLmFkZChzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1vdmVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRNYW5hZ2VhYmxlU3R5bGVzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmVkU3R5bGVzLmFkZChzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGhhbmRsZVN0eWxlT3BlcmF0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkU3R5bGVzOiBjcmVhdGVkU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlczogcmVtb3ZlZFN0eWxlcyxcclxuICAgICAgICAgICAgICAgIG1vdmVkU3R5bGVzOiBtb3ZlZFN0eWxlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWRkaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhuLCBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlcyk7XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMobik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVIdWdlVHJlZU11dGF0aW9ucyhyb290KSB7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZXMgPSBuZXcgU2V0KGdldE1hbmFnZWFibGVTdHlsZXMocm9vdCkpO1xyXG4gICAgICAgICAgICB2YXIgY3JlYXRlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdmFyIHJlbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHZhciBtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgc3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcHJldlN0eWxlcy5oYXMocykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkU3R5bGVzLmFkZChzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHByZXZTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdHlsZXMuaGFzKHMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5hZGQocyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICFjcmVhdGVkU3R5bGVzLmhhcyhzKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFyZW1vdmVkU3R5bGVzLmhhcyhzKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGRpZFN0eWxlUG9zaXRpb25DaGFuZ2UocylcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVkU3R5bGVzLmFkZChzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGhhbmRsZVN0eWxlT3BlcmF0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkU3R5bGVzOiBjcmVhdGVkU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlczogcmVtb3ZlZFN0eWxlcyxcclxuICAgICAgICAgICAgICAgIG1vdmVkU3R5bGVzOiBtb3ZlZFN0eWxlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKHJvb3QsIHN1YnNjcmliZUZvclNoYWRvd1Jvb3RDaGFuZ2VzKTtcclxuICAgICAgICAgICAgY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKHJvb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMobXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB2YXIgcmVtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBtLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkTWFuYWdlU3R5bGUodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkU3R5bGVzLmFkZCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5hZGQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlZFN0eWxlcy5zaXplICsgcmVtb3ZlZFN0eWxlcy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkOiBBcnJheS5mcm9tKHVwZGF0ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWQ6IEFycmF5LmZyb20ocmVtb3ZlZFN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZWQ6IFtdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlKHJvb3QpIHtcclxuICAgICAgICAgICAgdmFyIHRyZWVPYnNlcnZlciA9IGNyZWF0ZU9wdGltaXplZFRyZWVPYnNlcnZlcihyb290LCB7XHJcbiAgICAgICAgICAgICAgICBvbk1pbm9yTXV0YXRpb25zOiBoYW5kbGVNaW5vclRyZWVNdXRhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBvbkh1Z2VNdXRhdGlvbnM6IGhhbmRsZUh1Z2VUcmVlTXV0YXRpb25zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgYXR0ck9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoaGFuZGxlQXR0cmlidXRlTXV0YXRpb25zKTtcclxuICAgICAgICAgICAgYXR0ck9ic2VydmVyLm9ic2VydmUocm9vdCwge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wicmVsXCIsIFwiZGlzYWJsZWRcIiwgXCJtZWRpYVwiLCBcImhyZWZcIl0sXHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYnNlcnZlcnMucHVzaCh0cmVlT2JzZXJ2ZXIsIGF0dHJPYnNlcnZlcik7XHJcbiAgICAgICAgICAgIG9ic2VydmVkUm9vdHMuYWRkKHJvb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlcyhub2RlKSB7XHJcbiAgICAgICAgICAgIHZhciBzaGFkb3dSb290ID0gbm9kZS5zaGFkb3dSb290O1xyXG4gICAgICAgICAgICBpZiAoc2hhZG93Um9vdCA9PSBudWxsIHx8IG9ic2VydmVkUm9vdHMuaGFzKHNoYWRvd1Jvb3QpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JzZXJ2ZShzaGFkb3dSb290KTtcclxuICAgICAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWQoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmUoZG9jdW1lbnQpO1xyXG4gICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxyXG4gICAgICAgICAgICBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgd2F0Y2hXaGVuQ3VzdG9tRWxlbWVudHNEZWZpbmVkKGZ1bmN0aW9uIChob3N0cykge1xyXG4gICAgICAgICAgICB2YXIgbmV3U3R5bGVzID0gW107XHJcbiAgICAgICAgICAgIGhvc3RzLmZvckVhY2goZnVuY3Rpb24gKGhvc3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwdXNoKG5ld1N0eWxlcywgZ2V0TWFuYWdlYWJsZVN0eWxlcyhob3N0LnNoYWRvd1Jvb3QpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZSh7Y3JlYXRlZDogbmV3U3R5bGVzLCB1cGRhdGVkOiBbXSwgcmVtb3ZlZDogW10sIG1vdmVkOiBbXX0pO1xyXG4gICAgICAgICAgICBob3N0cy5mb3JFYWNoKGZ1bmN0aW9uIChob3N0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hhZG93Um9vdCA9IGhvc3Quc2hhZG93Um9vdDtcclxuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dSb290ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlcyhob3N0KTtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhzaGFkb3dSb290LCBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlcyk7XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJfX2RhcmtyZWFkZXJfX2lzRGVmaW5lZFwiLCBoYW5kbGVJc0RlZmluZWQpO1xyXG4gICAgICAgIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhkb2N1bWVudCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXNldE9ic2VydmVycygpIHtcclxuICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICByZXR1cm4gby5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JzZXJ2ZXJzLnNwbGljZSgwLCBvYnNlcnZlcnMubGVuZ3RoKTtcclxuICAgICAgICBvYnNlcnZlZFJvb3RzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclN0eWxlQ2hhbmdlcygpIHtcclxuICAgICAgICByZXNldE9ic2VydmVycygpO1xyXG4gICAgICAgIHVuc3Vic2NyaWJlRnJvbURlZmluZUN1c3RvbUVsZW1lbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGV4aWZ5KG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAobnVtYmVyIDwgMTYgPyBcIjBcIiA6IFwiXCIpICsgbnVtYmVyLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVUlEKCkge1xyXG4gICAgICAgIGlmIChcInJhbmRvbVVVSURcIiBpbiBjcnlwdG8pIHtcclxuICAgICAgICAgICAgdmFyIHV1aWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgdXVpZC5zdWJzdHJpbmcoMCwgOCkgK1xyXG4gICAgICAgICAgICAgICAgdXVpZC5zdWJzdHJpbmcoOSwgMTMpICtcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDE0LCAxOCkgK1xyXG4gICAgICAgICAgICAgICAgdXVpZC5zdWJzdHJpbmcoMTksIDIzKSArXHJcbiAgICAgICAgICAgICAgICB1dWlkLnN1YnN0cmluZygyNClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxNikpKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGV4aWZ5KHgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbihcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWRvcHRlZFN0eWxlT3ZlcnJpZGVzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIHZhciBvdmVycmlkZUxpc3QgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRvcHRlZFN0eWxlU2hlZXRPdmVycmlkZShub2RlKSB7XHJcbiAgICAgICAgdmFyIGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIGluamVjdFNoZWV0KHNoZWV0LCBvdmVycmlkZSkge1xyXG4gICAgICAgICAgICB2YXIgbmV3U2hlZXRzID0gX19zcHJlYWRBcnJheShcclxuICAgICAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICAgICAgX19yZWFkKG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzKSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciBzaGVldEluZGV4ID0gbmV3U2hlZXRzLmluZGV4T2Yoc2hlZXQpO1xyXG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdJbmRleCA9IG5ld1NoZWV0cy5pbmRleE9mKG92ZXJyaWRlKTtcclxuICAgICAgICAgICAgaWYgKHNoZWV0SW5kZXggPT09IGV4aXN0aW5nSW5kZXggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgbmV3U2hlZXRzLnNwbGljZShleGlzdGluZ0luZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdTaGVldHMuc3BsaWNlKHNoZWV0SW5kZXggKyAxLCAwLCBvdmVycmlkZSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzID0gbmV3U2hlZXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xyXG4gICAgICAgICAgICBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgbmV3U2hlZXRzID0gX19zcHJlYWRBcnJheShcclxuICAgICAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICAgICAgX19yZWFkKG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzKSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmZvckVhY2goZnVuY3Rpb24gKGFkb3B0ZWRTdHlsZVNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVMaXN0LmhhcyhhZG9wdGVkU3R5bGVTaGVldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdJbmRleCA9IG5ld1NoZWV0cy5pbmRleE9mKGFkb3B0ZWRTdHlsZVNoZWV0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NoZWV0cy5zcGxpY2UoZXhpc3RpbmdJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFkb3B0ZWRTdHlsZU92ZXJyaWRlcy5kZWxldGUoYWRvcHRlZFN0eWxlU2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlTGlzdC5kZWxldGUoYWRvcHRlZFN0eWxlU2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgPSBuZXdTaGVldHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcih0aGVtZSwgaWdub3JlSW1hZ2VBbmFseXNpcykge1xyXG4gICAgICAgICAgICBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5mb3JFYWNoKGZ1bmN0aW9uIChzaGVldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlTGlzdC5oYXMoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHJ1bGVzID0gc2hlZXQucnVsZXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcnJpZGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcHJlcGFyZU92ZXJyaWRlc1NoZWV0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBvdmVycmlkZS5jc3NSdWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZS5kZWxldGVSdWxlKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbmplY3RTaGVldChzaGVldCwgb3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkb3B0ZWRTdHlsZU92ZXJyaWRlcy5zZXQoc2hlZXQsIG92ZXJyaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZUxpc3QuYWRkKG92ZXJyaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3ZlcnJpZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hlZXRNb2RpZmllciA9IGNyZWF0ZVN0eWxlU2hlZXRNb2RpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgc2hlZXRNb2RpZmllci5tb2RpZnlTaGVldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlcGFyZVNoZWV0OiBwcmVwYXJlT3ZlcnJpZGVzU2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlQ1NTUnVsZXM6IHJ1bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lOiB0aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZUFuYWx5c2lzOiBpZ25vcmVJbWFnZUFuYWx5c2lzLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW5jZWxBc3luY09wZXJhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZW5kZXI6IHJlbmRlcixcclxuICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5qZWN0UHJveHkoZW5hYmxlU3R5bGVTaGVldHNQcm94eSkge1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9faW5saW5lU2NyaXB0c0FsbG93ZWRcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBhZGRSdWxlRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICBcImFkZFJ1bGVcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIGluc2VydFJ1bGVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgIFwiaW5zZXJ0UnVsZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgZGVsZXRlUnVsZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgXCJkZWxldGVSdWxlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciByZW1vdmVSdWxlRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICBcInJlbW92ZVJ1bGVcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIGRvY3VtZW50U3R5bGVTaGVldHNEZXNjcmlwdG9yID0gZW5hYmxlU3R5bGVTaGVldHNQcm94eVxyXG4gICAgICAgICAgICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRG9jdW1lbnQucHJvdG90eXBlLCBcInN0eWxlU2hlZXRzXCIpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICB2YXIgc2hvdWxkV3JhcEhUTUxFbGVtZW50ID0gW1xyXG4gICAgICAgICAgICBcImJhaWR1LmNvbVwiLFxyXG4gICAgICAgICAgICBcImJhaWtlLmJhaWR1LmNvbVwiLFxyXG4gICAgICAgICAgICBcImRpdHUuYmFpZHUuY29tXCIsXHJcbiAgICAgICAgICAgIFwibWFwLmJhaWR1LmNvbVwiLFxyXG4gICAgICAgICAgICBcIm1hcHMuYmFpZHUuY29tXCIsXHJcbiAgICAgICAgICAgIFwiaGFva2FuLmJhaWR1LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBhbi5iYWlkdS5jb21cIixcclxuICAgICAgICAgICAgXCJwYXNzcG9ydC5iYWlkdS5jb21cIixcclxuICAgICAgICAgICAgXCJ0aWViYS5iYWlkdS5jb21cIixcclxuICAgICAgICAgICAgXCJ3d3cuYmFpZHUuY29tXCJcclxuICAgICAgICBdLmluY2x1ZGVzKGxvY2F0aW9uLmhvc3RuYW1lKTtcclxuICAgICAgICB2YXIgZ2V0RWxlbWVudHNCeVRhZ05hbWVEZXNjcmlwdG9yID0gc2hvdWxkV3JhcEhUTUxFbGVtZW50XHJcbiAgICAgICAgICAgID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcclxuICAgICAgICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgIFwiZ2V0RWxlbWVudHNCeVRhZ05hbWVcIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIHZhciBjbGVhblVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgIFwiYWRkUnVsZVwiLFxyXG4gICAgICAgICAgICAgICAgYWRkUnVsZURlc2NyaXB0b3JcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICBcImluc2VydFJ1bGVcIixcclxuICAgICAgICAgICAgICAgIGluc2VydFJ1bGVEZXNjcmlwdG9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgXCJkZWxldGVSdWxlXCIsXHJcbiAgICAgICAgICAgICAgICBkZWxldGVSdWxlRGVzY3JpcHRvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgIFwicmVtb3ZlUnVsZVwiLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUnVsZURlc2NyaXB0b3JcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIl9fZGFya3JlYWRlcl9fY2xlYW5VcFwiLCBjbGVhblVwKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZGRVbmRlZmluZWRSZXNvbHZlclwiLFxyXG4gICAgICAgICAgICAgICAgYWRkVW5kZWZpbmVkUmVzb2x2ZXJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGVuYWJsZVN0eWxlU2hlZXRzUHJveHkpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICBEb2N1bWVudC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVNoZWV0c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50U3R5bGVTaGVldHNEZXNjcmlwdG9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRXcmFwSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBcImdldEVsZW1lbnRzQnlUYWdOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWVEZXNjcmlwdG9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgYWRkVW5kZWZpbmVkUmVzb2x2ZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZChlLmRldGFpbC50YWcpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2lzRGVmaW5lZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge3RhZzogZS5kZXRhaWwudGFnfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJfX2RhcmtyZWFkZXJfX2NsZWFuVXBcIiwgY2xlYW5VcCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2FkZFVuZGVmaW5lZFJlc29sdmVyXCIsXHJcbiAgICAgICAgICAgIGFkZFVuZGVmaW5lZFJlc29sdmVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgdXBkYXRlU2hlZXRFdmVudCA9IG5ldyBFdmVudChcIl9fZGFya3JlYWRlcl9fdXBkYXRlU2hlZXRcIik7XHJcbiAgICAgICAgZnVuY3Rpb24gcHJveHlBZGRSdWxlKHNlbGVjdG9yLCBzdHlsZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgYWRkUnVsZURlc2NyaXB0b3IudmFsdWUuY2FsbCh0aGlzLCBzZWxlY3Rvciwgc3R5bGUsIGluZGV4KTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lck5vZGUgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLm93bmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrcmVhZGVyXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lck5vZGUuZGlzcGF0Y2hFdmVudCh1cGRhdGVTaGVldEV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHByb3h5SW5zZXJ0UnVsZShydWxlLCBpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSBpbnNlcnRSdWxlRGVzY3JpcHRvci52YWx1ZS5jYWxsKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyTm9kZSAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMub3duZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtyZWFkZXJcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyTm9kZS5kaXNwYXRjaEV2ZW50KHVwZGF0ZVNoZWV0RXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcHJveHlEZWxldGVSdWxlKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZVJ1bGVEZXNjcmlwdG9yLnZhbHVlLmNhbGwodGhpcywgaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyTm9kZSAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMub3duZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtyZWFkZXJcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyTm9kZS5kaXNwYXRjaEV2ZW50KHVwZGF0ZVNoZWV0RXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHByb3h5UmVtb3ZlUnVsZShpbmRleCkge1xyXG4gICAgICAgICAgICByZW1vdmVSdWxlRGVzY3JpcHRvci52YWx1ZS5jYWxsKHRoaXMsIGluZGV4KTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lck5vZGUgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLm93bmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrcmVhZGVyXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lck5vZGUuZGlzcGF0Y2hFdmVudCh1cGRhdGVTaGVldEV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBwcm94eURvY3VtZW50U3R5bGVTaGVldHMoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBnZXRDdXJyZW50VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG9jU2hlZXRzID0gZG9jdW1lbnRTdHlsZVNoZWV0c0Rlc2NyaXB0b3IuZ2V0LmNhbGwoX3RoaXMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbHRlcmVkU2hlZXRzID0gX19zcHJlYWRBcnJheShcclxuICAgICAgICAgICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgICAgICAgICBfX3JlYWQoZG9jU2hlZXRzKSxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgKS5maWx0ZXIoZnVuY3Rpb24gKHN0eWxlU2hlZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXN0eWxlU2hlZXQub3duZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXJrcmVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZFNoZWV0cy5pdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRTaGVldHNbaXRlbV07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZihcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFNoZWV0cyxcclxuICAgICAgICAgICAgICAgICAgICBTdHlsZVNoZWV0TGlzdC5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGdldEN1cnJlbnRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB2YXIgc3R5bGVTaGVldExpc3RCZWhhdmlvciA9IHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKF8sIHByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRWYWx1ZSgpW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZWxlbWVudHMgPSBuZXcgUHJveHkoZWxlbWVudHMsIHN0eWxlU2hlZXRMaXN0QmVoYXZpb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHByb3h5R2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAodGFnTmFtZSAhPT0gXCJzdHlsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RWxlbWVudHNCeVRhZ05hbWVEZXNjcmlwdG9yLnZhbHVlLmNhbGwodGhpcywgdGFnTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGdldEN1cnJlbnRFbGVtZW50VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBnZXRFbGVtZW50c0J5VGFnTmFtZURlc2NyaXB0b3IudmFsdWUuY2FsbChcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZihcclxuICAgICAgICAgICAgICAgICAgICBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoZWxlbWVudHMpLCBmYWxzZSkuZmlsdGVyKGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya3JlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBOb2RlTGlzdC5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGdldEN1cnJlbnRFbGVtZW50VmFsdWUoKTtcclxuICAgICAgICAgICAgdmFyIG5vZGVMaXN0QmVoYXZpb3IgPSB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChfLCBwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRDdXJyZW50RWxlbWVudFZhbHVlKClbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihwcm9wZXJ0eSkgfHwgcHJvcGVydHlcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBlbGVtZW50cyA9IG5ldyBQcm94eShlbGVtZW50cywgbm9kZUxpc3RCZWhhdmlvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50cztcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgXCJhZGRSdWxlXCIsXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGFkZFJ1bGVEZXNjcmlwdG9yLCB7dmFsdWU6IHByb3h5QWRkUnVsZX0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICBcImluc2VydFJ1bGVcIixcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgaW5zZXJ0UnVsZURlc2NyaXB0b3IsIHt2YWx1ZTogcHJveHlJbnNlcnRSdWxlfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlUnVsZVwiLFxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBkZWxldGVSdWxlRGVzY3JpcHRvciwge3ZhbHVlOiBwcm94eURlbGV0ZVJ1bGV9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgXCJyZW1vdmVSdWxlXCIsXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHJlbW92ZVJ1bGVEZXNjcmlwdG9yLCB7dmFsdWU6IHByb3h5UmVtb3ZlUnVsZX0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZW5hYmxlU3R5bGVTaGVldHNQcm94eSkge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICBEb2N1bWVudC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICBcInN0eWxlU2hlZXRzXCIsXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBkb2N1bWVudFN0eWxlU2hlZXRzRGVzY3JpcHRvciwge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldDogcHJveHlEb2N1bWVudFN0eWxlU2hlZXRzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvdWxkV3JhcEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgXCJnZXRFbGVtZW50c0J5VGFnTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgZ2V0RWxlbWVudHNCeVRhZ05hbWVEZXNjcmlwdG9yLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3h5R2V0RWxlbWVudHNCeVRhZ05hbWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBJTlNUQU5DRV9JRCA9IGdlbmVyYXRlVUlEKCk7XHJcbiAgICB2YXIgc3R5bGVNYW5hZ2VycyA9IG5ldyBNYXAoKTtcclxuICAgIHZhciBhZG9wdGVkU3R5bGVNYW5hZ2VycyA9IFtdO1xyXG4gICAgdmFyIGZpbHRlciA9IG51bGw7XHJcbiAgICB2YXIgZml4ZXMgPSBudWxsO1xyXG4gICAgdmFyIGlzSUZyYW1lJDEgPSBudWxsO1xyXG4gICAgdmFyIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzID0gbnVsbDtcclxuICAgIHZhciBpZ25vcmVkSW5saW5lU2VsZWN0b3JzID0gbnVsbDtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlU3R5bGUoY2xhc3NOYW1lLCByb290KSB7XHJcbiAgICAgICAgaWYgKHJvb3QgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICByb290ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KGNsYXNzTmFtZSkpO1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgZWxlbWVudC5tZWRpYSA9IFwic2NyZWVuXCI7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlU2NyaXB0KGNsYXNzTmFtZSwgcm9vdCkge1xyXG4gICAgICAgIGlmIChyb290ID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgcm9vdCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChjbGFzc05hbWUpKTtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXJcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHZhciBub2RlUG9zaXRpb25XYXRjaGVycyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcihub2RlLCBhbGlhcykge1xyXG4gICAgICAgIG5vZGVQb3NpdGlvbldhdGNoZXJzLmhhcyhhbGlhcykgJiZcclxuICAgICAgICAgICAgbm9kZVBvc2l0aW9uV2F0Y2hlcnMuZ2V0KGFsaWFzKS5zdG9wKCk7XHJcbiAgICAgICAgbm9kZVBvc2l0aW9uV2F0Y2hlcnMuc2V0KGFsaWFzLCB3YXRjaEZvck5vZGVQb3NpdGlvbihub2RlLCBcInBhcmVudFwiKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wU3R5bGVQb3NpdGlvbldhdGNoZXJzKCkge1xyXG4gICAgICAgIGZvckVhY2gobm9kZVBvc2l0aW9uV2F0Y2hlcnMudmFsdWVzKCksIGZ1bmN0aW9uICh3YXRjaGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3YXRjaGVyLnN0b3AoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBub2RlUG9zaXRpb25XYXRjaGVycy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3RhdGljU3R5bGVPdmVycmlkZXMoKSB7XHJcbiAgICAgICAgdmFyIGZhbGxiYWNrU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFxyXG4gICAgICAgICAgICBcImRhcmtyZWFkZXItLWZhbGxiYWNrXCIsXHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICBmYWxsYmFja1N0eWxlLnRleHRDb250ZW50ID0gZ2V0TW9kaWZpZWRGYWxsYmFja1N0eWxlKGZpbHRlciwge1xyXG4gICAgICAgICAgICBzdHJpY3Q6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShmYWxsYmFja1N0eWxlLCBkb2N1bWVudC5oZWFkLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcihmYWxsYmFja1N0eWxlLCBcImZhbGxiYWNrXCIpO1xyXG4gICAgICAgIHZhciB1c2VyQWdlbnRTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS11c2VyLWFnZW50XCIpO1xyXG4gICAgICAgIHVzZXJBZ2VudFN0eWxlLnRleHRDb250ZW50ID0gZ2V0TW9kaWZpZWRVc2VyQWdlbnRTdHlsZShcclxuICAgICAgICAgICAgZmlsdGVyLFxyXG4gICAgICAgICAgICBpc0lGcmFtZSQxLFxyXG4gICAgICAgICAgICBmaWx0ZXIuc3R5bGVTeXN0ZW1Db250cm9sc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUodXNlckFnZW50U3R5bGUsIGZhbGxiYWNrU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcih1c2VyQWdlbnRTdHlsZSwgXCJ1c2VyLWFnZW50XCIpO1xyXG4gICAgICAgIHZhciB0ZXh0U3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tdGV4dFwiKTtcclxuICAgICAgICBpZiAoZmlsdGVyLnVzZUZvbnQgfHwgZmlsdGVyLnRleHRTdHJva2UgPiAwKSB7XHJcbiAgICAgICAgICAgIHRleHRTdHlsZS50ZXh0Q29udGVudCA9IGNyZWF0ZVRleHRTdHlsZShmaWx0ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHRTdHlsZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKHRleHRTdHlsZSwgZmFsbGJhY2tTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKHRleHRTdHlsZSwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgIHZhciBpbnZlcnRTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1pbnZlcnRcIik7XHJcbiAgICAgICAgaWYgKGZpeGVzICYmIEFycmF5LmlzQXJyYXkoZml4ZXMuaW52ZXJ0KSAmJiBmaXhlcy5pbnZlcnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpbnZlcnRTdHlsZS50ZXh0Q29udGVudCA9IFtcclxuICAgICAgICAgICAgICAgIFwiXCIuY29uY2F0KGZpeGVzLmludmVydC5qb2luKFwiLCBcIiksIFwiIHtcIiksXHJcbiAgICAgICAgICAgICAgICBcIiAgICBmaWx0ZXI6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICBnZXRDU1NGaWx0ZXJWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19hc3NpZ24oX19hc3NpZ24oe30sIGZpbHRlciksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5tb2RlID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmlsdGVyLmNvbnRyYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2xhbXAoZmlsdGVyLmNvbnRyYXN0IC0gMTAsIDAsIDEwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBcIn1cIlxyXG4gICAgICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW52ZXJ0U3R5bGUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShpbnZlcnRTdHlsZSwgdGV4dFN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIoaW52ZXJ0U3R5bGUsIFwiaW52ZXJ0XCIpO1xyXG4gICAgICAgIHZhciBpbmxpbmVTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1pbmxpbmVcIik7XHJcbiAgICAgICAgaW5saW5lU3R5bGUudGV4dENvbnRlbnQgPSBnZXRJbmxpbmVPdmVycmlkZVN0eWxlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoaW5saW5lU3R5bGUsIGludmVydFN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIoaW5saW5lU3R5bGUsIFwiaW5saW5lXCIpO1xyXG4gICAgICAgIHZhciBvdmVycmlkZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLW92ZXJyaWRlXCIpO1xyXG4gICAgICAgIG92ZXJyaWRlU3R5bGUudGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICBmaXhlcyAmJiBmaXhlcy5jc3MgPyByZXBsYWNlQ1NTVGVtcGxhdGVzKGZpeGVzLmNzcykgOiBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQob3ZlcnJpZGVTdHlsZSk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKG92ZXJyaWRlU3R5bGUsIFwib3ZlcnJpZGVcIik7XHJcbiAgICAgICAgdmFyIHZhcmlhYmxlU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tdmFyaWFibGVzXCIpO1xyXG4gICAgICAgIHZhciBzZWxlY3Rpb25Db2xvcnMgPSBnZXRTZWxlY3Rpb25Db2xvcihmaWx0ZXIpO1xyXG4gICAgICAgIHZhciBkYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yID0gZmlsdGVyLmRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIGRhcmtTY2hlbWVUZXh0Q29sb3IgPSBmaWx0ZXIuZGFya1NjaGVtZVRleHRDb2xvcixcclxuICAgICAgICAgICAgbGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3IgPSBmaWx0ZXIubGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIGxpZ2h0U2NoZW1lVGV4dENvbG9yID0gZmlsdGVyLmxpZ2h0U2NoZW1lVGV4dENvbG9yLFxyXG4gICAgICAgICAgICBtb2RlID0gZmlsdGVyLm1vZGU7XHJcbiAgICAgICAgdmFyIHNjaGVtZUJhY2tncm91bmRDb2xvciA9XHJcbiAgICAgICAgICAgIG1vZGUgPT09IDAgPyBsaWdodFNjaGVtZUJhY2tncm91bmRDb2xvciA6IGRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgdmFyIHNjaGVtZVRleHRDb2xvciA9XHJcbiAgICAgICAgICAgIG1vZGUgPT09IDAgPyBsaWdodFNjaGVtZVRleHRDb2xvciA6IGRhcmtTY2hlbWVUZXh0Q29sb3I7XHJcbiAgICAgICAgc2NoZW1lQmFja2dyb3VuZENvbG9yID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKFxyXG4gICAgICAgICAgICBwYXJzZUNvbG9yV2l0aENhY2hlKHNjaGVtZUJhY2tncm91bmRDb2xvciksXHJcbiAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2NoZW1lVGV4dENvbG9yID0gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKFxyXG4gICAgICAgICAgICBwYXJzZUNvbG9yV2l0aENhY2hlKHNjaGVtZVRleHRDb2xvciksXHJcbiAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyaWFibGVTdHlsZS50ZXh0Q29udGVudCA9IFtcclxuICAgICAgICAgICAgXCI6cm9vdCB7XCIsXHJcbiAgICAgICAgICAgIFwiICAgLS1kYXJrcmVhZGVyLW5ldXRyYWwtYmFja2dyb3VuZDogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgc2NoZW1lQmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgXCI7XCJcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgXCIgICAtLWRhcmtyZWFkZXItbmV1dHJhbC10ZXh0OiBcIi5jb25jYXQoc2NoZW1lVGV4dENvbG9yLCBcIjtcIiksXHJcbiAgICAgICAgICAgIFwiICAgLS1kYXJrcmVhZGVyLXNlbGVjdGlvbi1iYWNrZ3JvdW5kOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db2xvcnMuYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgXCI7XCJcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgXCIgICAtLWRhcmtyZWFkZXItc2VsZWN0aW9uLXRleHQ6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbG9ycy5mb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBcIjtcIlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBcIn1cIlxyXG4gICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZSh2YXJpYWJsZVN0eWxlLCBpbmxpbmVTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKHZhcmlhYmxlU3R5bGUsIFwidmFyaWFibGVzXCIpO1xyXG4gICAgICAgIHZhciByb290VmFyc1N0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXJvb3QtdmFyc1wiKTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShyb290VmFyc1N0eWxlLCB2YXJpYWJsZVN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICB2YXIgaW5qZWN0UHJveHlBcmcgPSAhKGZpeGVzICYmIGZpeGVzLmRpc2FibGVTdHlsZVNoZWV0c1Byb3h5KTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwcm94eVNjcmlwdCA9IGNyZWF0ZU9yVXBkYXRlU2NyaXB0KFwiZGFya3JlYWRlci0tcHJveHlcIik7XHJcbiAgICAgICAgICAgIHByb3h5U2NyaXB0LmFwcGVuZChcclxuICAgICAgICAgICAgICAgIFwiKFwiLmNvbmNhdChpbmplY3RQcm94eSwgXCIpKFwiKS5jb25jYXQoaW5qZWN0UHJveHlBcmcsIFwiKVwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShwcm94eVNjcmlwdCwgcm9vdFZhcnNTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgICAgIHByb3h5U2NyaXB0LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBzaGFkb3dSb290c1dpdGhPdmVycmlkZXMgPSBuZXcgU2V0KCk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhyb290KSB7XHJcbiAgICAgICAgdmFyIGlubGluZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLWlubGluZVwiLCByb290KTtcclxuICAgICAgICBpbmxpbmVTdHlsZS50ZXh0Q29udGVudCA9IGdldElubGluZU92ZXJyaWRlU3R5bGUoKTtcclxuICAgICAgICByb290Lmluc2VydEJlZm9yZShpbmxpbmVTdHlsZSwgcm9vdC5maXJzdENoaWxkKTtcclxuICAgICAgICB2YXIgb3ZlcnJpZGVTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1vdmVycmlkZVwiLCByb290KTtcclxuICAgICAgICBvdmVycmlkZVN0eWxlLnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgZml4ZXMgJiYgZml4ZXMuY3NzID8gcmVwbGFjZUNTU1RlbXBsYXRlcyhmaXhlcy5jc3MpIDogXCJcIjtcclxuICAgICAgICByb290Lmluc2VydEJlZm9yZShvdmVycmlkZVN0eWxlLCBpbmxpbmVTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgdmFyIGludmVydFN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLWludmVydFwiLCByb290KTtcclxuICAgICAgICBpZiAoZml4ZXMgJiYgQXJyYXkuaXNBcnJheShmaXhlcy5pbnZlcnQpICYmIGZpeGVzLmludmVydC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGludmVydFN0eWxlLnRleHRDb250ZW50ID0gW1xyXG4gICAgICAgICAgICAgICAgXCJcIi5jb25jYXQoZml4ZXMuaW52ZXJ0LmpvaW4oXCIsIFwiKSwgXCIge1wiKSxcclxuICAgICAgICAgICAgICAgIFwiICAgIGZpbHRlcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIGdldENTU0ZpbHRlclZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZmlsdGVyKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhc3Q6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1vZGUgPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWx0ZXIuY29udHJhc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbGFtcChmaWx0ZXIuY29udHJhc3QgLSAxMCwgMCwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIFwifVwiXHJcbiAgICAgICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnZlcnRTdHlsZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvb3QuaW5zZXJ0QmVmb3JlKGludmVydFN0eWxlLCBvdmVycmlkZVN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzaGFkb3dSb290c1dpdGhPdmVycmlkZXMuYWRkKHJvb3QpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU1RlbXBsYXRlcygkY3NzVGV4dCkge1xyXG4gICAgICAgIHJldHVybiAkY3NzVGV4dC5yZXBsYWNlKC9cXCR7KC4rPyl9L2csIGZ1bmN0aW9uIChfLCAkY29sb3IpIHtcclxuICAgICAgICAgICAgdmFyIGNvbG9yID0gcGFyc2VDb2xvcldpdGhDYWNoZSgkY29sb3IpO1xyXG4gICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnlDb2xvcihjb2xvciwgZmlsdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJGNvbG9yO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYW5GYWxsYmFja1N0eWxlKCkge1xyXG4gICAgICAgIHZhciBmYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tZmFsbGJhY2tcIik7XHJcbiAgICAgICAgaWYgKGZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGZhbGxiYWNrLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVEeW5hbWljU3R5bGVPdmVycmlkZXMoKSB7XHJcbiAgICAgICAgY2FuY2VsUmVuZGVyaW5nKCk7XHJcbiAgICAgICAgdmFyIGFsbFN0eWxlcyA9IGdldE1hbmFnZWFibGVTdHlsZXMoZG9jdW1lbnQpO1xyXG4gICAgICAgIHZhciBuZXdNYW5hZ2VycyA9IGFsbFN0eWxlc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICFzdHlsZU1hbmFnZXJzLmhhcyhzdHlsZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlTWFuYWdlcihzdHlsZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG5ld01hbmFnZXJzXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYW5hZ2VyLmRldGFpbHMoe3NlY29uZFJvdW5kOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkZXRhaWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZXRhaWwgJiYgZGV0YWlsLnJ1bGVzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChkZXRhaWwpIHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcoZGV0YWlsLnJ1bGVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRhbnRzKCk7XHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUuc2V0T25Sb290VmFyaWFibGVDaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5wdXRSb290VmFycyhcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1yb290LXZhcnNcIiksXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZS5wdXRSb290VmFycyhcclxuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLXJvb3QtdmFyc1wiKSxcclxuICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzdHlsZU1hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIucmVuZGVyKGZpbHRlciwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChsb2FkaW5nU3R5bGVzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgY2xlYW5GYWxsYmFja1N0eWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld01hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIud2F0Y2goKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgaW5saW5lU3R5bGVFbGVtZW50cyA9IHRvQXJyYXkoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoSU5MSU5FX1NUWUxFX1NFTEVDVE9SKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZnVuY3Rpb24gKGhvc3QpIHtcclxuICAgICAgICAgICAgY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXMoaG9zdC5zaGFkb3dSb290KTtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gaG9zdC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICBJTkxJTkVfU1RZTEVfU0VMRUNUT1JcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHB1c2goaW5saW5lU3R5bGVFbGVtZW50cywgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5saW5lU3R5bGVFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3ZlcnJpZGVJbmxpbmVTdHlsZShcclxuICAgICAgICAgICAgICAgIGVsLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlZElubGluZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFuZGxlQWRvcHRlZFN0eWxlU2hlZXRzKGRvY3VtZW50KTtcclxuICAgIH1cclxuICAgIHZhciBsb2FkaW5nU3R5bGVzQ291bnRlciA9IDA7XHJcbiAgICB2YXIgbG9hZGluZ1N0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1hbmFnZXIoZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBsb2FkaW5nU3R5bGVJZCA9ICsrbG9hZGluZ1N0eWxlc0NvdW50ZXI7XHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZGluZ1N0YXJ0KCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzRE9NUmVhZHkoKSB8fCAhZGlkRG9jdW1lbnRTaG93VXApIHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdTdHlsZXMuYWRkKGxvYWRpbmdTdHlsZUlkKTtcclxuICAgICAgICAgICAgICAgIGxvZ0luZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDdXJyZW50IGFtb3VudCBvZiBzdHlsZXMgbG9hZGluZzogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nU3R5bGVzLnNpemVcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZhbGxiYWNrU3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLmRhcmtyZWFkZXItLWZhbGxiYWNrXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZhbGxiYWNrU3R5bGUudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmYWxsYmFja1N0eWxlLnRleHRDb250ZW50ID0gZ2V0TW9kaWZpZWRGYWxsYmFja1N0eWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpY3Q6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZGluZ0VuZCgpIHtcclxuICAgICAgICAgICAgbG9hZGluZ1N0eWxlcy5kZWxldGUobG9hZGluZ1N0eWxlSWQpO1xyXG4gICAgICAgICAgICBsb2dJbmZvKFxyXG4gICAgICAgICAgICAgICAgXCJSZW1vdmVkIGxvYWRpbmdTdHlsZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQobG9hZGluZ1N0eWxlSWQsIFwiLCBub3cgYXdhaXRpbmc6IFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQobG9hZGluZ1N0eWxlcy5zaXplKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAobG9hZGluZ1N0eWxlcy5zaXplID09PSAwICYmIGlzRE9NUmVhZHkoKSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYW5GYWxsYmFja1N0eWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgICAgICAgICB2YXIgZGV0YWlscyA9IG1hbmFnZXIuZGV0YWlscyh7c2Vjb25kUm91bmQ6IHRydWV9KTtcclxuICAgICAgICAgICAgaWYgKCFkZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhkZXRhaWxzLnJ1bGVzKTtcclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRhbnRzKCk7XHJcbiAgICAgICAgICAgIG1hbmFnZXIucmVuZGVyKGZpbHRlciwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWFuYWdlciA9IG1hbmFnZVN0eWxlKGVsZW1lbnQsIHtcclxuICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGUsXHJcbiAgICAgICAgICAgIGxvYWRpbmdTdGFydDogbG9hZGluZ1N0YXJ0LFxyXG4gICAgICAgICAgICBsb2FkaW5nRW5kOiBsb2FkaW5nRW5kXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3R5bGVNYW5hZ2Vycy5zZXQoZWxlbWVudCwgbWFuYWdlcik7XHJcbiAgICAgICAgcmV0dXJuIG1hbmFnZXI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVNYW5hZ2VyKGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IHN0eWxlTWFuYWdlcnMuZ2V0KGVsZW1lbnQpO1xyXG4gICAgICAgIGlmIChtYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIG1hbmFnZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBzdHlsZU1hbmFnZXJzLmRlbGV0ZShlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgdGhyb3R0bGVkUmVuZGVyQWxsU3R5bGVzID0gdGhyb3R0bGUoZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgc3R5bGVNYW5hZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYW5hZ2VyLnJlbmRlcihmaWx0ZXIsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhZG9wdGVkU3R5bGVNYW5hZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYW5hZ2VyLnJlbmRlcihmaWx0ZXIsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgY2FuY2VsUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRocm90dGxlZFJlbmRlckFsbFN0eWxlcy5jYW5jZWwoKTtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBvbkRPTVJlYWR5KCkge1xyXG4gICAgICAgIGlmIChsb2FkaW5nU3R5bGVzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgY2xlYW5GYWxsYmFja1N0eWxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgdmFyIGRpZERvY3VtZW50U2hvd1VwID0gIWRvY3VtZW50LmhpZGRlbjtcclxuICAgIGZ1bmN0aW9uIHdhdGNoRm9yRG9jdW1lbnRWaXNpYmlsaXR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIGFscmVhZHlXYXRjaGluZyA9IEJvb2xlYW4oZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmhpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yRG9jdW1lbnRWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgZGlkRG9jdW1lbnRTaG93VXAgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoIWFscmVhZHlXYXRjaGluZykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvckRvY3VtZW50VmlzaWJpbGl0eSgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcInZpc2liaWxpdHljaGFuZ2VcIixcclxuICAgICAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyID0gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRoZW1lQW5kV2F0Y2hGb3JVcGRhdGVzKCkge1xyXG4gICAgICAgIGNyZWF0ZVN0YXRpY1N0eWxlT3ZlcnJpZGVzKCk7XHJcbiAgICAgICAgZnVuY3Rpb24gcnVuRHluYW1pY1N0eWxlKCkge1xyXG4gICAgICAgICAgICBjcmVhdGVEeW5hbWljU3R5bGVPdmVycmlkZXMoKTtcclxuICAgICAgICAgICAgd2F0Y2hGb3JVcGRhdGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4gJiYgIWZpbHRlci5pbW1lZGlhdGVNb2RpZnkpIHtcclxuICAgICAgICAgICAgd2F0Y2hGb3JEb2N1bWVudFZpc2liaWxpdHkocnVuRHluYW1pY1N0eWxlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBydW5EeW5hbWljU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhbmdlTWV0YVRoZW1lQ29sb3JXaGVuQXZhaWxhYmxlKGZpbHRlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVBZG9wdGVkU3R5bGVTaGVldHMobm9kZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TWFuZ2VyID0gY3JlYXRlQWRvcHRlZFN0eWxlU2hlZXRPdmVycmlkZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBhZG9wdGVkU3R5bGVNYW5hZ2Vycy5wdXNoKG5ld01hbmdlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TWFuZ2VyLnJlbmRlcihmaWx0ZXIsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge31cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdhdGNoRm9yVXBkYXRlcygpIHtcclxuICAgICAgICB2YXIgbWFuYWdlZFN0eWxlcyA9IEFycmF5LmZyb20oc3R5bGVNYW5hZ2Vycy5rZXlzKCkpO1xyXG4gICAgICAgIHdhdGNoRm9yU3R5bGVDaGFuZ2VzKFxyXG4gICAgICAgICAgICBtYW5hZ2VkU3R5bGVzLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjcmVhdGVkID0gX2EuY3JlYXRlZCxcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gX2EudXBkYXRlZCxcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkID0gX2EucmVtb3ZlZCxcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IF9hLm1vdmVkO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlc1RvUmVtb3ZlID0gcmVtb3ZlZDtcclxuICAgICAgICAgICAgICAgIHZhciBzdHlsZXNUb01hbmFnZSA9IGNyZWF0ZWRcclxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHVwZGF0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChtb3ZlZClcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXN0eWxlTWFuYWdlcnMuaGFzKHN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBzdHlsZXNUb1Jlc3RvcmUgPSBtb3ZlZC5maWx0ZXIoZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlTWFuYWdlcnMuaGFzKHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzVG9SZW1vdmUuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVtb3ZlTWFuYWdlcihzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdNYW5hZ2VycyA9IHN0eWxlc1RvTWFuYWdlLm1hcChmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlTWFuYWdlcihzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG5ld01hbmFnZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFuYWdlci5kZXRhaWxzKHtzZWNvbmRSb3VuZDogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGRldGFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGV0YWlsICYmIGRldGFpbC5ydWxlcy5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGRldGFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRSdWxlc0Zvck1hdGNoaW5nKGRldGFpbC5ydWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGFudHMoKTtcclxuICAgICAgICAgICAgICAgIG5ld01hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFuYWdlci5yZW5kZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnNcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBuZXdNYW5hZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIud2F0Y2goKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzVG9SZXN0b3JlLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlTWFuYWdlcnMuZ2V0KHN0eWxlKS5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHNoYWRvd1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQWRvcHRlZFN0eWxlU2hlZXRzKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB3YXRjaEZvcklubGluZVN0eWxlcyhcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIG92ZXJyaWRlSW5saW5lU3R5bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlZElubGluZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9yc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGVBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZUF0dHIuaW5jbHVkZXMoXCItLVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGFudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUucHV0Um9vdFZhcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuZGFya3JlYWRlci0tcm9vdC12YXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyb290KSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhyb290KTtcclxuICAgICAgICAgICAgICAgIHZhciBpbmxpbmVTdHlsZUVsZW1lbnRzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgIElOTElORV9TVFlMRV9TRUxFQ1RPUlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmxpbmVTdHlsZUVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JFYWNoKGlubGluZVN0eWxlRWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3ZlcnJpZGVJbmxpbmVTdHlsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZElubGluZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGFkZERPTVJlYWR5TGlzdGVuZXIob25ET01SZWFkeSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JVcGRhdGVzKCkge1xyXG4gICAgICAgIHN0eWxlTWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlci5wYXVzZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3BTdHlsZVBvc2l0aW9uV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTdHlsZUNoYW5nZXMoKTtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JJbmxpbmVTdHlsZXMoKTtcclxuICAgICAgICByZW1vdmVET01SZWFkeUxpc3RlbmVyKG9uRE9NUmVhZHkpO1xyXG4gICAgICAgIGNsZWFuUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgbWV0YU9ic2VydmVyO1xyXG4gICAgZnVuY3Rpb24gYWRkTWV0YUxpc3RlbmVyKCkge1xyXG4gICAgICAgIG1ldGFPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRhcmtyZWFkZXItbG9ja1wiXScpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRhT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRHluYW1pY1RoZW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBtZXRhT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5oZWFkLCB7Y2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVEYXJrUmVhZGVySW5zdGFuY2VNYXJrZXIoKSB7XHJcbiAgICAgICAgdmFyIG1ldGFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XHJcbiAgICAgICAgbWV0YUVsZW1lbnQubmFtZSA9IFwiZGFya3JlYWRlclwiO1xyXG4gICAgICAgIG1ldGFFbGVtZW50LmNvbnRlbnQgPSBJTlNUQU5DRV9JRDtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzQW5vdGhlckRhcmtSZWFkZXJJbnN0YW5jZUFjdGl2ZSgpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGFya3JlYWRlci1sb2NrXCJdJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGFya3JlYWRlclwiXScpO1xyXG4gICAgICAgIGlmIChtZXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRhLmNvbnRlbnQgIT09IElOU1RBTkNFX0lEKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZURhcmtSZWFkZXJJbnN0YW5jZU1hcmtlcigpO1xyXG4gICAgICAgIGFkZE1ldGFMaXN0ZW5lcigpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlRHluYW1pY1RoZW1lKFxyXG4gICAgICAgIGZpbHRlckNvbmZpZyxcclxuICAgICAgICBkeW5hbWljVGhlbWVGaXhlcyxcclxuICAgICAgICBpZnJhbWVcclxuICAgICkge1xyXG4gICAgICAgIGZpbHRlciA9IGZpbHRlckNvbmZpZztcclxuICAgICAgICBmaXhlcyA9IGR5bmFtaWNUaGVtZUZpeGVzO1xyXG4gICAgICAgIGlmIChmaXhlcykge1xyXG4gICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyA9IEFycmF5LmlzQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBmaXhlcy5pZ25vcmVJbWFnZUFuYWx5c2lzXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgID8gZml4ZXMuaWdub3JlSW1hZ2VBbmFseXNpc1xyXG4gICAgICAgICAgICAgICAgOiBbXTtcclxuICAgICAgICAgICAgaWdub3JlZElubGluZVNlbGVjdG9ycyA9IEFycmF5LmlzQXJyYXkoZml4ZXMuaWdub3JlSW5saW5lU3R5bGUpXHJcbiAgICAgICAgICAgICAgICA/IGZpeGVzLmlnbm9yZUlubGluZVN0eWxlXHJcbiAgICAgICAgICAgICAgICA6IFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzID0gW107XHJcbiAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbHRlci5pbW1lZGlhdGVNb2RpZnkpIHtcclxuICAgICAgICAgICAgc2V0SXNET01SZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzSUZyYW1lJDEgPSBpZnJhbWU7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmhlYWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzQW5vdGhlckRhcmtSZWFkZXJJbnN0YW5jZUFjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwiZGF0YS1kYXJrcmVhZGVyLW1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiZHluYW1pY1wiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcImRhdGEtZGFya3JlYWRlci1zY2hlbWVcIixcclxuICAgICAgICAgICAgICAgIGZpbHRlci5tb2RlID8gXCJkYXJrXCIgOiBcImRpbW1lZFwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRoZW1lQW5kV2F0Y2hGb3JVcGRhdGVzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFpc0ZpcmVmb3gpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmYWxsYmFja1N0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLWZhbGxiYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGZhbGxiYWNrU3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgZmFsbGJhY2tTdHlsZS50ZXh0Q29udGVudCA9IGdldE1vZGlmaWVkRmFsbGJhY2tTdHlsZShmaWx0ZXIsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpY3Q6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBoZWFkT2JzZXJ2ZXJfMSA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5oZWFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZE9ic2VydmVyXzEuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Fub3RoZXJEYXJrUmVhZGVySW5zdGFuY2VBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVEeW5hbWljVGhlbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUaGVtZUFuZFdhdGNoRm9yVXBkYXRlcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaGVhZE9ic2VydmVyXzEub2JzZXJ2ZShkb2N1bWVudCwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb3h5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19jbGVhblVwXCIpKTtcclxuICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1wcm94eVwiKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVEeW5hbWljVGhlbWUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtZGFya3JlYWRlci1tb2RlXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWRhcmtyZWFkZXItc2NoZW1lXCIpO1xyXG4gICAgICAgIGNsZWFuRHluYW1pY1RoZW1lQ2FjaGUoKTtcclxuICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tZmFsbGJhY2tcIikpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5oZWFkKSB7XHJcbiAgICAgICAgICAgIHJlc3RvcmVNZXRhVGhlbWVDb2xvcigpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS11c2VyLWFnZW50XCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tdGV4dFwiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWludmVydFwiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWlubGluZVwiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLW92ZXJyaWRlXCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tdmFyaWFibGVzXCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tcm9vdC12YXJzXCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRhcmtyZWFkZXJcIl0nKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZVByb3h5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoYWRvd1Jvb3RzV2l0aE92ZXJyaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUocm9vdC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWlubGluZVwiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUocm9vdC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLW92ZXJyaWRlXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzaGFkb3dSb290c1dpdGhPdmVycmlkZXMuY2xlYXIoKTtcclxuICAgICAgICBmb3JFYWNoKHN0eWxlTWFuYWdlcnMua2V5cygpLCBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZU1hbmFnZXIoZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvYWRpbmdTdHlsZXMuY2xlYXIoKTtcclxuICAgICAgICBjbGVhbkxvYWRpbmdMaW5rcygpO1xyXG4gICAgICAgIGZvckVhY2goZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXJrcmVhZGVyXCIpLCByZW1vdmVOb2RlKTtcclxuICAgICAgICBhZG9wdGVkU3R5bGVNYW5hZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIG1hbmFnZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFkb3B0ZWRTdHlsZU1hbmFnZXJzLnNwbGljZSgwKTtcclxuICAgICAgICBtZXRhT2JzZXJ2ZXIgJiYgbWV0YU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuRHluYW1pY1RoZW1lQ2FjaGUoKSB7XHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUuY2xlYXIoKTtcclxuICAgICAgICBwYXJzZWRVUkxDYWNoZS5jbGVhcigpO1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvckRvY3VtZW50VmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIGNhbmNlbFJlbmRlcmluZygpO1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvclVwZGF0ZXMoKTtcclxuICAgICAgICBjbGVhbk1vZGlmaWNhdGlvbkNhY2hlKCk7XHJcbiAgICAgICAgY2xlYXJDb2xvckNhY2hlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJsb2JSZWdleCA9IC91cmxcXChcXFwiKGJsb2JcXDouKj8pXFxcIlxcKS9nO1xyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUJsb2JzKHRleHQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlcywgZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWF0Y2hlcyhibG9iUmVnZXgsIHRleHQsIDEpLmZvckVhY2goZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBsb2FkQXNEYXRhVVJMKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBQcm9taXNlLmFsbChwcm9taXNlcyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnJlcGxhY2UoYmxvYlJlZ2V4LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd1cmwoXCInLmNvbmNhdChkYXRhLnNoaWZ0KCksICdcIiknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIGJhbm5lciA9XHJcbiAgICAgICAgJy8qXFxuICAgICAgICAgICAgICAgICAgICAgICAgX19fX19fX1xcbiAgICAgICAgICAgICAgICAgICAgICAgLyAgICAgICBcXFxcXFxuICAgICAgICAgICAgICAgICAgICAgIC49PS4gICAgLj09LlxcbiAgICAgICAgICAgICAgICAgICAgICgoICApKT09KCggICkpXFxuICAgICAgICAgICAgICAgICAgICAvIFwiPT1cIiAgICBcIj09XCJcXFxcXFxuICAgICAgICAgICAgICAgICAgIC9fX19ffHwgfHwgfHxfX19cXFxcXFxuICAgICAgIF9fX19fX19fICAgICBfX19fICAgIF9fX19fX19fICBfX18gICAgX19fXFxuICAgICAgIHwgIF9fXyAgXFxcXCAgIC8gICAgXFxcXCAgIHwgIF9fXyAgXFxcXCB8ICB8ICAvICAvXFxuICAgICAgIHwgIHwgIFxcXFwgIFxcXFwgLyAgL1xcXFwgIFxcXFwgIHwgIHwgIFxcXFwgIFxcXFx8ICB8Xy8gIC9cXG4gICAgICAgfCAgfCAgICkgIC8gIC9fX1xcXFwgIFxcXFwgfCAgfF9fLyAgL3wgIF9fXyAgXFxcXFxcbiAgICAgICB8ICB8X18vICAvICBfX19fX18gIFxcXFx8ICBfX19fICBcXFxcfCAgfCAgXFxcXCAgXFxcXFxcbl9fX19fX198X19fX19fXy9fXy8gX19fXyBcXFxcX19cXFxcX198X19fXFxcXF9fXFxcXF9ffF9fX1xcXFxfX1xcXFxfX19fXFxufCAgX19fICBcXFxcIHwgIF9fX18vIC8gICAgXFxcXCAgIHwgIF9fXyAgXFxcXCB8ICBfX19ffCAgX19fICBcXFxcXFxufCAgfCAgXFxcXCAgXFxcXHwgIHxfX18gLyAgL1xcXFwgIFxcXFwgIHwgIHwgIFxcXFwgIFxcXFx8ICB8X19ffCAgfCAgXFxcXCAgXFxcXFxcbnwgIHxfXy8gIC98ICBfX19fLyAgL19fXFxcXCAgXFxcXCB8ICB8ICAgKSAgfCAgX19fX3wgIHxfXy8gIC9cXG58ICBfX19fICBcXFxcfCAgfF9fLyAgX19fX19fICBcXFxcfCAgfF9fLyAgL3wgIHxfX198ICBfX19fICBcXFxcXFxufF9ffCAgIFxcXFxfX1xcXFxfX19fL19fLyAgICAgIFxcXFxfX1xcXFxfX19fX19fLyB8X19fX19ffF9ffCAgIFxcXFxfX1xcXFxcXG4gICAgICAgICAgICAgICAgaHR0cHM6Ly9kYXJrcmVhZGVyLm9yZ1xcbiovXFxuXFxuLyohIERhcmsgcmVhZGVyIGdlbmVyYXRlZCBDU1MgfCBMaWNlbnNlZCB1bmRlciBNSVQgaHR0cHM6Ly9naXRodWIuY29tL2RhcmtyZWFkZXIvZGFya3JlYWRlci9ibG9iL21haW4vTElDRU5TRSAqL1xcbic7XHJcbiAgICBmdW5jdGlvbiBjb2xsZWN0Q1NTKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkU3RhdGljQ1NTKHNlbGVjdG9yLCBjb21tZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGljU3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0aWNTdHlsZSAmJiBzdGF0aWNTdHlsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzcy5wdXNoKFwiLyogXCIuY29uY2F0KGNvbW1lbnQsIFwiICovXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBjc3MucHVzaChzdGF0aWNTdHlsZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzLnB1c2goXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNzcywgbW9kaWZpZWRDU1MsIGZvcm1hdHRlZENTUywgX2EsIF9iO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3MgPSBbYmFubmVyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3RhdGljQ1NTKFwiLmRhcmtyZWFkZXItLWZhbGxiYWNrXCIsIFwiRmFsbGJhY2sgU3R5bGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN0YXRpY0NTUyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLmRhcmtyZWFkZXItLXVzZXItYWdlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVXNlci1BZ2VudCBTdHlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN0YXRpY0NTUyhcIi5kYXJrcmVhZGVyLS10ZXh0XCIsIFwiVGV4dCBTdHlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3RhdGljQ1NTKFwiLmRhcmtyZWFkZXItLWludmVydFwiLCBcIkludmVydCBTdHlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3RhdGljQ1NTKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuZGFya3JlYWRlci0tdmFyaWFibGVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZhcmlhYmxlcyBTdHlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQ1NTID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5kYXJrcmVhZGVyLS1zeW5jXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2hlZXQuY3NzUnVsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChydWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5jc3NUZXh0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRDU1MucHVzaChydWxlLmNzc1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1vZGlmaWVkQ1NTLmxlbmd0aCkgcmV0dXJuIFszLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkQ1NTID0gZm9ybWF0Q1NTKG1vZGlmaWVkQ1NTLmpvaW4oXCJcXG5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3MucHVzaChcIi8qIE1vZGlmaWVkIENTUyAqL1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSAoX2EgPSBjc3MpLnB1c2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcmVwbGFjZUJsb2JzKGZvcm1hdHRlZENTUyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IuYXBwbHkoX2EsIFtfYy5zZW50KCldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzLnB1c2goXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN0YXRpY0NTUyhcIi5kYXJrcmVhZGVyLS1vdmVycmlkZVwiLCBcIk92ZXJyaWRlIFN0eWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGNzcy5qb2luKFwiXFxuXCIpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzRGFya1JlYWRlckVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHZhciBpc0lGcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZWxmICE9PSB3aW5kb3cudG9wO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxuICAgIGZ1bmN0aW9uIGVuYWJsZSh0aGVtZU9wdGlvbnMsIGZpeGVzKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lT3B0aW9ucyA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIHRoZW1lT3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZml4ZXMgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBmaXhlcyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0aGVtZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBERUZBVUxUX1RIRU1FKSwgdGhlbWVPcHRpb25zKTtcclxuICAgICAgICBpZiAodGhlbWUuZW5naW5lICE9PSBUaGVtZUVuZ2luZS5keW5hbWljVGhlbWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlbWUgZW5naW5lIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVPclVwZGF0ZUR5bmFtaWNUaGVtZSh0aGVtZSwgZml4ZXMsIGlzSUZyYW1lKTtcclxuICAgICAgICBpc0RhcmtSZWFkZXJFbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gaXNEYXJrUmVhZGVyRW5hYmxlZDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRpc2FibGUoKSB7XHJcbiAgICAgICAgcmVtb3ZlRHluYW1pY1RoZW1lKCk7XHJcbiAgICAgICAgaXNEYXJrUmVhZGVyRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIGRhcmtTY2hlbWUgPSBtYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcclxuICAgIHZhciBzdG9yZSA9IHtcclxuICAgICAgICB0aGVtZU9wdGlvbnM6IG51bGwsXHJcbiAgICAgICAgZml4ZXM6IG51bGxcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDb2xvclNjaGVtZSgpIHtcclxuICAgICAgICBpZiAoZGFya1NjaGVtZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIGVuYWJsZShzdG9yZS50aGVtZU9wdGlvbnMsIHN0b3JlLmZpeGVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXV0byh0aGVtZU9wdGlvbnMsIGZpeGVzKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lT3B0aW9ucyA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIHRoZW1lT3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZml4ZXMgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBmaXhlcyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGVtZU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3RvcmUgPSB7dGhlbWVPcHRpb25zOiB0aGVtZU9wdGlvbnMsIGZpeGVzOiBmaXhlc307XHJcbiAgICAgICAgICAgIGhhbmRsZUNvbG9yU2NoZW1lKCk7XHJcbiAgICAgICAgICAgIGlmIChpc01hdGNoTWVkaWFDaGFuZ2VFdmVudExpc3RlbmVyU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBkYXJrU2NoZW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlQ29sb3JTY2hlbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGFya1NjaGVtZS5hZGRMaXN0ZW5lcihoYW5kbGVDb2xvclNjaGVtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXNNYXRjaE1lZGlhQ2hhbmdlRXZlbnRMaXN0ZW5lclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgZGFya1NjaGVtZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZUNvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRhcmtTY2hlbWUucmVtb3ZlTGlzdGVuZXIoaGFuZGxlQ29sb3JTY2hlbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBleHBvcnRHZW5lcmF0ZWRDU1MoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGNvbGxlY3RDU1MoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIHNldEZldGNoTWV0aG9kID0gc2V0RmV0Y2hNZXRob2QkMTtcclxuXHJcbiAgICBleHBvcnRzLmF1dG8gPSBhdXRvO1xyXG4gICAgZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcclxuICAgIGV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xyXG4gICAgZXhwb3J0cy5leHBvcnRHZW5lcmF0ZWRDU1MgPSBleHBvcnRHZW5lcmF0ZWRDU1M7XHJcbiAgICBleHBvcnRzLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcclxuICAgIGV4cG9ydHMuc2V0RmV0Y2hNZXRob2QgPSBzZXRGZXRjaE1ldGhvZDtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogdHJ1ZX0pO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgZGFya2lmeSB9IGZyb20gXCIuL3V0aWwvZHJcIjtcbmltcG9ydCB7IHByb2Nlc3NUZW1wbGF0ZSB9IGZyb20gXCIuL3V0aWwvdGVtcGxhdGVzXCI7XG5cblxuaW50ZXJmYWNlIE1hcmxvd2VDb250cmFjdCB7XG4gICAgdGVtcGxhdGU6IHN0cmluZ1xuICAgIHRlcm1zOiB7W2tleTogc3RyaW5nXTogbnVtYmVyfVxufVxuXG5pbnRlcmZhY2UgU2FtcGxlZFJvdyB7XG4gICAgb3JhY2xlVmFsdWU6IG51bWJlcixcbiAgICBhbGljZVBheW91dDogbnVtYmVyLFxuICAgIGJvYlBheW91dDogbnVtYmVyXG59XG5cbmludGVyZmFjZSBDb250cmFjdEFwaSB7XG4gICAgc3RhdGU6IE5vdGVib29rU3RhdGVcbiAgICBpbmplY3RNYXJsb3dlQ29udHJhY3Q6IChjOiBNYXJsb3dlQ29udHJhY3QpID0+IHZvaWRcbiAgICBzYW1wbGVNYXJsb3dlQ29udHJhY3Q6ICh3OiBXaW5kb3cpID0+IHZvaWRcbiAgICBwbG90TWFybG93ZUNvbnRyYWN0PzogKHNhbXBsZTogU2FtcGxlZFJvd1tdLCB3aGVyZTogSFRNTERpdkVsZW1lbnQpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIE5vdGVib29rU3RhdGUge1xuICAgIGlzTWFybG93ZUNvbnRyYWN0R2VuZXJhdGVkOiBib29sZWFuXG4gICAgaXNNYXJsb3dlQ29udHJhY3RTYW1wbGVkOiBib29sZWFuXG4gICAgc2FtcGxlPzogU2FtcGxlZFJvd1tdXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgV2luZG93IHsgXG4gICAgICAgIGRhcmtpZmllcjogYW55XG4gICAgICAgIG1hcmxvd2VXaW5kb3c/OiAoKSA9PiBQcm9taXNlPFdpbmRvdz5cbiAgICAgICAgYXBpOiBDb250cmFjdEFwaVxuICAgICAgICBtb25hY286IGFueVxuICAgIH1cbn1cblxuXG5cbmRhcmtpZnkod2luZG93LmRvY3VtZW50KVxuXG5pZiAod2luZG93Lm1hcmxvd2VXaW5kb3cgIT0gdW5kZWZpbmVkKSB7XG4gICAgd2luZG93Lm1hcmxvd2VXaW5kb3coKS50aGVuKG13ID0+IHtcbiAgICAgICAgd2luZG93LmFwaSA9IHtcbiAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgaXNNYXJsb3dlQ29udHJhY3RHZW5lcmF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzTWFybG93ZUNvbnRyYWN0U2FtcGxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmplY3RNYXJsb3dlQ29udHJhY3Q6IGFzeW5jIChjOiBNYXJsb3dlQ29udHJhY3QpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWFybG93ZUhvbWUgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmgtMTBcIikgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICBtYXJsb3dlSG9tZT8uY2xpY2soKVxuICAgICAgICAgICAgICAgIGxldCBkb250U2F2ZSA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXItbWVkaXVtXCIpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgZG9udFNhdmU/LmNsaWNrKClcbiAgICAgICAgICAgICAgICBsZXQgcmF3ID0gYXdhaXQgKGF3YWl0IGZldGNoKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBgL21hcmxvd2Utd29sZnJhbS13ZWJkb2MvY29udHJhY3RzLyR7Yy50ZW1wbGF0ZX0ubWFybG93ZWApKS50ZXh0KClcbiAgICAgICAgICAgICAgICBsZXQgdG9JbmplY3QgPSBwcm9jZXNzVGVtcGxhdGUoYy50ZW1wbGF0ZSwgYy50ZXJtcywgcmF3KVxuICAgICAgICAgICAgICAgIGxldCBnb1RvRWRpdG9yID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1yLTQnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgIGdvVG9FZGl0b3I/LmNsaWNrKClcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIG13Lm1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbXcubW9uYWNvLmVkaXRvci5nZXRNb2RlbHMoKVtpXS5hcHBseUVkaXRzKFt7cmFuZ2U6IHtzdGFydExpbmVOdW1iZXI6MCwgc3RhcnRDb2x1bW46IDAsIGVuZENvbHVtbjogMTAwMCwgZW5kTGluZU51bWJlcjogMTAwMH0sIHRleHQ6IHRvSW5qZWN0fV0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG1lbnVCYXIgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYmFyXCIpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgbWVudUJhcj8uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiZGlzcGxheTogbm9uZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IG1ldGEgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHQtc2Vjb25kYXJ5XCIpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgbWV0YT8uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiZGlzcGxheTogbm9uZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRpY0FuYWx5c2lzID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0LWdyYXktZGFya2VzdFwiKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgIHN0YXRpY0FuYWx5c2lzPy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJkaXNwbGF5OiBub25lXCIpXG5cbiAgICAgICAgICAgICAgICBsZXQgZ29Ub0Jsb2NrcyA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cCcpPy5xdWVyeVNlbGVjdG9yKCcuYnRuJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICBnb1RvQmxvY2tzPy5jbGljaygpXG4gICAgICAgICAgICAgICAgd2luZG93LmFwaS5zdGF0ZS5pc01hcmxvd2VDb250cmFjdEdlbmVyYXRlZCA9IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYW1wbGVNYXJsb3dlQ29udHJhY3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLnN0YXRlLnNhbXBsZSA9IFtdXG4gICAgICAgICAgICAgICAgd2luZG93LmFwaS5zdGF0ZS5pc01hcmxvd2VDb250cmFjdFNhbXBsZWQgPSB0cnVlXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSlcbiAgICBcbn1cbiIsImltcG9ydCB7XG4gICAgZW5hYmxlIGFzIGVuYWJsZURhcmtNb2RlLFxuICAgIGV4cG9ydEdlbmVyYXRlZENTUyBhcyBjb2xsZWN0Q1NTLFxuICAgIHNldEZldGNoTWV0aG9kIGFzIHNldEZldGNoTWV0aG9kXG59IGZyb20gJ2RhcmtyZWFkZXInO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShkb2MsIHN0eWxlU3RyaW5nKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IHN0eWxlU3RyaW5nO1xuICAgIGRvYy5oZWFkLmFwcGVuZChzdHlsZSk7XG59XG5cbmV4cG9ydCBjb25zdCBkYXJraWZ5ID0gYXN5bmMgKGRvYykgPT4ge1xuICAgIHNldEZldGNoTWV0aG9kKHdpbmRvdy5mZXRjaClcblxuICAgIGVuYWJsZURhcmtNb2RlKHtcbiAgICAgICAgYnJpZ2h0bmVzczogMTAwLFxuICAgICAgICBjb250cmFzdDogOTAsXG4gICAgICAgIHNlcGlhOiAxMCxcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBDU1MgPSBhd2FpdCBjb2xsZWN0Q1NTKCk7XG4gICAgYWRkU3R5bGUoZG9jLCBDU1MpXG5cbn1cblxuY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhyZWYpIiwiZXhwb3J0IGNvbnN0IHByb2Nlc3NUZW1wbGF0ZSA9IChuYW1lOiBzdHJpbmcsIHN1YnN0OiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSwgdGVtcGxhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHRlbXBsYXRlXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9