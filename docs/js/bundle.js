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
                isMarloweContractSampled: false,
                samplingInProgress: false
            },
            injectMarloweContract: function (c) { return __awaiter(void 0, void 0, void 0, function () {
                var marloweHome, dontSave, raw, toInject, goToEditor, i, menuBar, meta, staticAnalysis, goToBlocks, cancel;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            window.api.state.contract = c;
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
                            cancel = mw.document.querySelector(".uppercase");
                            cancel === null || cancel === void 0 ? void 0 : cancel.click();
                            window.api.state.isMarloweContractGenerated = true;
                            window.dispatchEvent(new Event("state"));
                            return [2 /*return*/];
                    }
                });
            }); },
            sampleMarloweContract: function () {
                var _a, _b, _c, _d;
                //todo check if in simulator already
                window.api.state.samplingInProgress = true;
                window.api.state.sample = [];
                for (var i = window.api.state.contract.terms.minValue; i <= window.api.state.contract.terms.maxValue; i++) {
                    var c = window.api.state.contract;
                    c.terms.minValue = i;
                    c.terms.maxValue = i;
                    window.api.injectMarloweContract(c);
                    console.log(i);
                    var sendToSimulator = (_a = mw.document.querySelector('.group')) === null || _a === void 0 ? void 0 : _a.children[1];
                    sendToSimulator === null || sendToSimulator === void 0 ? void 0 : sendToSimulator.click();
                    var startSimulation = (_b = mw.document.querySelector('.transaction-btns')) === null || _b === void 0 ? void 0 : _b.children[1];
                    startSimulation === null || startSimulation === void 0 ? void 0 : startSimulation.click();
                    var aliceDeposit = mw.document.querySelector('.plus-btn');
                    aliceDeposit === null || aliceDeposit === void 0 ? void 0 : aliceDeposit.click();
                    var bobDeposit = mw.document.querySelector('.plus-btn');
                    bobDeposit === null || bobDeposit === void 0 ? void 0 : bobDeposit.click();
                    var skipToExercise = mw.document.querySelectorAll('.plus-btn')[2];
                    skipToExercise === null || skipToExercise === void 0 ? void 0 : skipToExercise.click();
                    var confirm_1 = mw.document.querySelector('.plus-btn');
                    confirm_1 === null || confirm_1 === void 0 ? void 0 : confirm_1.click();
                    var log = mw.document.querySelector('.grid-cols-description-location');
                    var extractBobPayoffOpt = (_c = /The contract pays ₳ (\d+) from account of Bob to Bob wallet/.exec(log.innerText)) === null || _c === void 0 ? void 0 : _c[1];
                    var extractAlicePayoffOpt = (_d = /The contract pays ₳ (\d+) from account of Alice to Alice wallet/.exec(log.innerText)) === null || _d === void 0 ? void 0 : _d[1];
                    var bobPayoff = extractBobPayoffOpt == null || Number.isNaN(parseInt(extractBobPayoffOpt)) ? 0 : parseInt(extractBobPayoffOpt);
                    var alicePayoff = extractAlicePayoffOpt == null || Number.isNaN(parseInt(extractAlicePayoffOpt)) ? 0 : parseInt(extractAlicePayoffOpt);
                    window.api.state.sample.push({ oracleValue: i, alicePayout: alicePayoff, bobPayout: bobPayoff });
                }
                console.log(window.api.state.sample);
                window.api.state.samplingInProgress = false;
                window.api.state.isMarloweContractSampled = true;
                window.dispatchEvent(new Event("state"));
                window.api.injectMarloweContract(window.api.state.contract);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssa0NBQWtDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx3Q0FBd0M7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLHVCQUF1QjtBQUN2QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxXQUFXO0FBQ3BELDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHNDQUFzQyxnQkFBZ0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiLG9DQUFvQywrQkFBK0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0EsaURBQWlELFVBQVU7QUFDM0Q7QUFDQSxxREFBcUQsVUFBVTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRCxzQkFBc0I7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBC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Q2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxRQUFRO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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dXJjZXMiOlsid2VicGFjazovL21hcmxvd2Utd29sZnJhbS13ZWJkb2MvLi9ub2RlX21vZHVsZXMvZGFya3JlYWRlci9kYXJrcmVhZGVyLmpzIiwid2VicGFjazovL21hcmxvd2Utd29sZnJhbS13ZWJkb2MvLi9hcHAudHMiLCJ3ZWJwYWNrOi8vbWFybG93ZS13b2xmcmFtLXdlYmRvYy8uL3V0aWwvZHIudHMiLCJ3ZWJwYWNrOi8vbWFybG93ZS13b2xmcmFtLXdlYmRvYy8uL3V0aWwvdGVtcGxhdGVzLnRzIiwid2VicGFjazovL21hcmxvd2Utd29sZnJhbS13ZWJkb2Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFybG93ZS13b2xmcmFtLXdlYmRvYy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL21hcmxvd2Utd29sZnJhbS13ZWJkb2Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL21hcmxvd2Utd29sZnJhbS13ZWJkb2Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEYXJrIFJlYWRlciB2NC45LjU4XHJcbiAqIGh0dHBzOi8vZGFya3JlYWRlci5vcmcvXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuICAgIHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICA/IGZhY3RvcnkoZXhwb3J0cylcclxuICAgICAgICA6IHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kXHJcbiAgICAgICAgPyBkZWZpbmUoW1wiZXhwb3J0c1wiXSwgZmFjdG9yeSlcclxuICAgICAgICA6ICgoZ2xvYmFsID1cclxuICAgICAgICAgICAgICB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiksXHJcbiAgICAgICAgICBmYWN0b3J5KChnbG9iYWwuRGFya1JlYWRlciA9IHt9KSkpO1xyXG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG4gICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbiAgICBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG4gICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG4gICAgUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbiAgICBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuICAgIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcbiAgICBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgICB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX19hc3NpZ24gPVxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFBcclxuICAgICAgICAgICAgICAgID8gdmFsdWVcclxuICAgICAgICAgICAgICAgIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kb25lXHJcbiAgICAgICAgICAgICAgICAgICAgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGVwKFxyXG4gICAgICAgICAgICAgICAgKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgICAgIHZhciBfID0ge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IDAsXHJcbiAgICAgICAgICAgICAgICBzZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0WzFdO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRyeXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgb3BzOiBbXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmLFxyXG4gICAgICAgICAgICB5LFxyXG4gICAgICAgICAgICB0LFxyXG4gICAgICAgICAgICBnO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIChnID0ge25leHQ6IHZlcmIoMCksIHRocm93OiB2ZXJiKDEpLCByZXR1cm46IHZlcmIoMil9KSxcclxuICAgICAgICAgICAgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICAgICAgICAgICAgICAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGdcclxuICAgICAgICApO1xyXG4gICAgICAgIGZ1bmN0aW9uIHZlcmIobikge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGVwKFtuLCB2XSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgICAgICB3aGlsZSAoXylcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKGYgPSAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wWzBdICYgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHlbXCJyZXR1cm5cIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvcFswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHlbXCJ0aHJvd1wiXSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB5Lm5leHQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgoeSA9IDApLCB0KSkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ubGFiZWwrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ubGFiZWwrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBvcFsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wID0gWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wID0gXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKCh0ID0gXy50cnlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wWzBdID09PSAzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ubGFiZWwgPSBvcFsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ubGFiZWwgPSB0WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCA9IHRbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHMucHVzaChvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AgPSBbNiwgZV07XHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGYgPSB0ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07XHJcbiAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWV9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICAgICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLFxyXG4gICAgICAgICAgICBtID0gcyAmJiBvW3NdLFxyXG4gICAgICAgICAgICBpID0gMDtcclxuICAgICAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgICAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3ZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW99O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgICAgIHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgICAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICAgICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgICAgICB2YXIgaSA9IG0uY2FsbChvKSxcclxuICAgICAgICAgICAgcixcclxuICAgICAgICAgICAgYXIgPSBbXSxcclxuICAgICAgICAgICAgZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSlcclxuICAgICAgICAgICAgICAgIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgZSA9IHtlcnJvcjogZXJyb3J9O1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICAgICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBNZXNzYWdlVHlwZTtcclxuICAgIChmdW5jdGlvbiAoTWVzc2FnZVR5cGUpIHtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX0dFVF9EQVRBXCJdID0gXCJ1aS1nZXQtZGF0YVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfU1VCU0NSSUJFX1RPX0NIQU5HRVNcIl0gPSBcInVpLXN1YnNjcmliZS10by1jaGFuZ2VzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9VTlNVQlNDUklCRV9GUk9NX0NIQU5HRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLXVuc3Vic2NyaWJlLWZyb20tY2hhbmdlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfQ0hBTkdFX1NFVFRJTkdTXCJdID0gXCJ1aS1jaGFuZ2Utc2V0dGluZ3NcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1NFVF9USEVNRVwiXSA9IFwidWktc2V0LXRoZW1lXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9TRVRfU0hPUlRDVVRcIl0gPSBcInVpLXNldC1zaG9ydGN1dFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfVE9HR0xFX0FDVElWRV9UQUJcIl0gPSBcInVpLXRvZ2dsZS1hY3RpdmUtdGFiXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9NQVJLX05FV1NfQVNfUkVBRFwiXSA9IFwidWktbWFyay1uZXdzLWFzLXJlYWRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX01BUktfTkVXU19BU19ESVNQTEFZRURcIl0gPSBcInVpLW1hcmstbmV3cy1hcy1kaXNwbGF5ZWRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX0xPQURfQ09ORklHXCJdID0gXCJ1aS1sb2FkLWNvbmZpZ1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfQVBQTFlfREVWX0RZTkFNSUNfVEhFTUVfRklYRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWFwcGx5LWRldi1keW5hbWljLXRoZW1lLWZpeGVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9SRVNFVF9ERVZfRFlOQU1JQ19USEVNRV9GSVhFU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktcmVzZXQtZGV2LWR5bmFtaWMtdGhlbWUtZml4ZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX0FQUExZX0RFVl9JTlZFUlNJT05fRklYRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWFwcGx5LWRldi1pbnZlcnNpb24tZml4ZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1JFU0VUX0RFVl9JTlZFUlNJT05fRklYRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLXJlc2V0LWRldi1pbnZlcnNpb24tZml4ZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX0FQUExZX0RFVl9TVEFUSUNfVEhFTUVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1hcHBseS1kZXYtc3RhdGljLXRoZW1lc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfUkVTRVRfREVWX1NUQVRJQ19USEVNRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLXJlc2V0LWRldi1zdGF0aWMtdGhlbWVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9TQVZFX0ZJTEVcIl0gPSBcInVpLXNhdmUtZmlsZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfUkVRVUVTVF9FWFBPUlRfQ1NTXCJdID0gXCJ1aS1yZXF1ZXN0LWV4cG9ydC1jc3NcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX0NPTE9SX1NDSEVNRV9DSEFOR0VcIl0gPSBcInVpLWNvbG9yLXNjaGVtZS1jaGFuZ2VcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX0NIQU5HRVNcIl0gPSBcImJnLWNoYW5nZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX0FERF9DU1NfRklMVEVSXCJdID0gXCJiZy1hZGQtY3NzLWZpbHRlclwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfQUREX1NUQVRJQ19USEVNRVwiXSA9IFwiYmctYWRkLXN0YXRpYy10aGVtZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfQUREX1NWR19GSUxURVJcIl0gPSBcImJnLWFkZC1zdmctZmlsdGVyXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19BRERfRFlOQU1JQ19USEVNRVwiXSA9IFwiYmctYWRkLWR5bmFtaWMtdGhlbWVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX0VYUE9SVF9DU1NcIl0gPSBcImJnLWV4cG9ydC1jc3NcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX1VOU1VQUE9SVEVEX1NFTkRFUlwiXSA9IFwiYmctdW5zdXBwb3J0ZWQtc2VuZGVyXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19DTEVBTl9VUFwiXSA9IFwiYmctY2xlYW4tdXBcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX1JFTE9BRFwiXSA9IFwiYmctcmVsb2FkXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19GRVRDSF9SRVNQT05TRVwiXSA9IFwiYmctZmV0Y2gtcmVzcG9uc2VcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX1VJX1VQREFURVwiXSA9IFwiYmctdWktdXBkYXRlXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19DU1NfVVBEQVRFXCJdID0gXCJiZy1jc3MtdXBkYXRlXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19DT0xPUl9TQ0hFTUVfQ0hBTkdFXCJdID0gXCJjcy1jb2xvci1zY2hlbWUtY2hhbmdlXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19GUkFNRV9DT05ORUNUXCJdID0gXCJjcy1mcmFtZS1jb25uZWN0XCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19GUkFNRV9GT1JHRVRcIl0gPSBcImNzLWZyYW1lLWZvcmdldFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfRlJBTUVfRlJFRVpFXCJdID0gXCJjcy1mcmFtZS1mcmVlemVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkNTX0ZSQU1FX1JFU1VNRVwiXSA9IFwiY3MtZnJhbWUtcmVzdW1lXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19FWFBPUlRfQ1NTX1JFU1BPTlNFXCJdID0gXCJjcy1leHBvcnQtY3NzLXJlc3BvbnNlXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19GRVRDSFwiXSA9IFwiY3MtZmV0Y2hcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkNTX0RBUktfVEhFTUVfREVURUNURURcIl0gPSBcImNzLWRhcmstdGhlbWUtZGV0ZWN0ZWRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVtcIkNTX0RBUktfVEhFTUVfTk9UX0RFVEVDVEVEXCJdID1cclxuICAgICAgICAgICAgXCJjcy1kYXJrLXRoZW1lLW5vdC1kZXRlY3RlZFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfTE9HXCJdID0gXCJjcy1sb2dcIjtcclxuICAgIH0pKE1lc3NhZ2VUeXBlIHx8IChNZXNzYWdlVHlwZSA9IHt9KSk7XHJcblxyXG4gICAgdmFyIGlzTmF2aWdhdG9yRGVmaW5lZCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICB2YXIgdXNlckFnZW50ID0gaXNOYXZpZ2F0b3JEZWZpbmVkXHJcbiAgICAgICAgPyBuYXZpZ2F0b3IudXNlckFnZW50RGF0YSAmJlxyXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5icmFuZHMpXHJcbiAgICAgICAgICAgID8gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEuYnJhbmRzXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGJyYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoYnJhbmQuYnJhbmQudG9Mb3dlckNhc2UoKSwgXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChicmFuZC52ZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLmpvaW4oXCIgXCIpXHJcbiAgICAgICAgICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgOiBcInNvbWUgdXNlcmFnZW50XCI7XHJcbiAgICB2YXIgcGxhdGZvcm0gPSBpc05hdmlnYXRvckRlZmluZWRcclxuICAgICAgICA/IG5hdmlnYXRvci51c2VyQWdlbnREYXRhICYmXHJcbiAgICAgICAgICB0eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEucGxhdGZvcm0gPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgPyBuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIDogbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKClcclxuICAgICAgICA6IFwic29tZSBwbGF0Zm9ybVwiO1xyXG4gICAgdmFyIGlzQ2hyb21pdW0gPVxyXG4gICAgICAgIHVzZXJBZ2VudC5pbmNsdWRlcyhcImNocm9tZVwiKSB8fCB1c2VyQWdlbnQuaW5jbHVkZXMoXCJjaHJvbWl1bVwiKTtcclxuICAgIHZhciBpc1RodW5kZXJiaXJkID0gdXNlckFnZW50LmluY2x1ZGVzKFwidGh1bmRlcmJpcmRcIik7XHJcbiAgICB2YXIgaXNGaXJlZm94ID1cclxuICAgICAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJmaXJlZm94XCIpIHx8XHJcbiAgICAgICAgdXNlckFnZW50LmluY2x1ZGVzKFwibGlicmV3b2xmXCIpIHx8XHJcbiAgICAgICAgaXNUaHVuZGVyYmlyZDtcclxuICAgIHVzZXJBZ2VudC5pbmNsdWRlcyhcInZpdmFsZGlcIik7XHJcbiAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJ5YWJyb3dzZXJcIik7XHJcbiAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJvcHJcIikgfHwgdXNlckFnZW50LmluY2x1ZGVzKFwib3BlcmFcIik7XHJcbiAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJlZGdcIik7XHJcbiAgICB2YXIgaXNTYWZhcmkgPSB1c2VyQWdlbnQuaW5jbHVkZXMoXCJzYWZhcmlcIikgJiYgIWlzQ2hyb21pdW07XHJcbiAgICB2YXIgaXNXaW5kb3dzID0gcGxhdGZvcm0uc3RhcnRzV2l0aChcIndpblwiKTtcclxuICAgIHZhciBpc01hY09TID0gcGxhdGZvcm0uc3RhcnRzV2l0aChcIm1hY1wiKTtcclxuICAgIGlzTmF2aWdhdG9yRGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YVxyXG4gICAgICAgID8gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEubW9iaWxlXHJcbiAgICAgICAgOiB1c2VyQWdlbnQuaW5jbHVkZXMoXCJtb2JpbGVcIik7XHJcbiAgICB2YXIgaXNTaGFkb3dEb21TdXBwb3J0ZWQgPSB0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgdmFyIGlzTWF0Y2hNZWRpYUNoYW5nZUV2ZW50TGlzdGVuZXJTdXBwb3J0ZWQgPVxyXG4gICAgICAgIHR5cGVvZiBNZWRpYVF1ZXJ5TGlzdCA9PT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICAgICAgdHlwZW9mIE1lZGlhUXVlcnlMaXN0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtID0gdXNlckFnZW50Lm1hdGNoKC9jaHJvbSg/OmV8aXVtKSg/OlxcL3wgKShbXiBdKykvKTtcclxuICAgICAgICBpZiAobSAmJiBtWzFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH0pKCk7XHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtID0gdXNlckFnZW50Lm1hdGNoKC8oPzpmaXJlZm94fGxpYnJld29sZikoPzpcXC98ICkoW14gXSspLyk7XHJcbiAgICAgICAgaWYgKG0gJiYgbVsxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9KSgpO1xyXG4gICAgdmFyIGlzRGVmaW5lZFNlbGVjdG9yU3VwcG9ydGVkID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxuICAgIHZhciBpc0NTU0NvbG9yU2NoZW1lUHJvcFN1cHBvcnRlZCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvci1zY2hlbWU6IGRhcmtcIik7XHJcbiAgICAgICAgcmV0dXJuIGVsLnN0eWxlICYmIGVsLnN0eWxlLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIjtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0T0tSZXNwb25zZSh1cmwsIG1pbWVUeXBlLCBvcmlnaW4pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogXCJmb3JjZS1jYWNoZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcIm9taXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcnJlcjogb3JpZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRmlyZWZveCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWltZVR5cGUgPT09IFwidGV4dC9jc3NcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsLnN0YXJ0c1dpdGgoXCJtb3otZXh0ZW5zaW9uOi8vXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwuZW5kc1dpdGgoXCIuY3NzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCByZXNwb25zZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWltZVR5cGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXNwb25zZS5oZWFkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcIkNvbnRlbnQtVHlwZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydHNXaXRoKG1pbWVUeXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1pbWUgdHlwZSBtaXNtYXRjaCB3aGVuIGxvYWRpbmcgXCIuY29uY2F0KHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5hYmxlIHRvIGxvYWQgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCh1cmwsIFwiIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHJlc3BvbnNlLnN0YXR1cywgXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCByZXNwb25zZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbG9hZEFzRGF0YVVSTCh1cmwsIG1pbWVUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZ2V0T0tSZXNwb25zZSh1cmwsIG1pbWVUeXBlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCByZWFkUmVzcG9uc2VBc0RhdGFVUkwocmVzcG9uc2UpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWFkUmVzcG9uc2VBc0RhdGFVUkwocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBibG9iLCBkYXRhVVJMO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHJlc3BvbnNlLmJsb2IoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9iID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVVJMID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGRhdGFVUkxdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGhyb3dDT1JTRXJyb3IgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlamVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW1iZWRkZWQgRGFyayBSZWFkZXIgY2Fubm90IGFjY2VzcyBhIGNyb3NzLW9yaWdpbiByZXNvdXJjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk92ZXJ2aWV3IHlvdXIgVVJMcyBhbmQgQ09SUyBwb2xpY2llcyBvciB1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImBEYXJrUmVhZGVyLnNldEZldGNoTWV0aG9kKGZldGNoOiAodXJsKSA9PiBQcm9taXNlPFJlc3BvbnNlPikpYC5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNlZSBpZiB1c2luZyBgRGFya1JlYWRlci5zZXRGZXRjaE1ldGhvZCh3aW5kb3cuZmV0Y2gpYFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlIGBEYXJrUmVhZGVyLmVuYWJsZSgpYCB3b3Jrcy5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGZldGNoZXIgPSB0aHJvd0NPUlNFcnJvcjtcclxuICAgIGZ1bmN0aW9uIHNldEZldGNoTWV0aG9kJDEoZmV0Y2gpIHtcclxuICAgICAgICBpZiAoZmV0Y2gpIHtcclxuICAgICAgICAgICAgZmV0Y2hlciA9IGZldGNoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZldGNoZXIgPSB0aHJvd0NPUlNFcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxsRmV0Y2hNZXRob2QodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGZldGNoZXIodXJsKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghd2luZG93LmNocm9tZSkge1xyXG4gICAgICAgIHdpbmRvdy5jaHJvbWUgPSB7fTtcclxuICAgIH1cclxuICAgIGlmICghY2hyb21lLnJ1bnRpbWUpIHtcclxuICAgICAgICBjaHJvbWUucnVudGltZSA9IHt9O1xyXG4gICAgfVxyXG4gICAgdmFyIG1lc3NhZ2VMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XHJcbiAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZSgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaWRfMSwgX2EsIHVybCwgcmVzcG9uc2VUeXBlLCByZXNwb25zZSwgdGV4dF8xLCBlcnJvcl8xO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShhcmdzWzBdICYmIGFyZ3NbMF0udHlwZSA9PT0gTWVzc2FnZVR5cGUuQ1NfRkVUQ0gpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfMSA9IGFyZ3NbMF0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMSwgNywgLCA4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGFyZ3NbMF0uZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodXJsID0gX2EudXJsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZVR5cGUgPSBfYS5yZXNwb25zZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGNhbGxGZXRjaE1ldGhvZCh1cmwpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShyZXNwb25zZVR5cGUgPT09IFwiZGF0YS11cmxcIikpIHJldHVybiBbMywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcmVhZFJlc3BvbnNlQXNEYXRhVVJMKHJlc3BvbnNlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XzEgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHJlc3BvbnNlLnRleHQoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XzEgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuQkdfRkVUQ0hfUkVTUE9OU0UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGV4dF8xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZF8xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgOF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkJHX0ZFVENIX1JFU1BPTlNFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkTWVzc2FnZUxpc3RlbmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbWVzc2FnZUxpc3RlbmVycy5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgdmFyIG5hdGl2ZVNlbmRNZXNzYWdlXzEgPSBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZTtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZS5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChhcmdzKSwgZmFsc2UpKTtcclxuICAgICAgICAgICAgbmF0aXZlU2VuZE1lc3NhZ2VfMS5hcHBseShjaHJvbWUucnVudGltZSwgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UgPSBzZW5kTWVzc2FnZTtcclxuICAgIH1cclxuICAgIGlmICghY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlKSB7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgdmFyIG5hdGl2ZUFkZExpc3RlbmVyXzEgPSBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXI7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcihhcmdzWzBdKTtcclxuICAgICAgICAgICAgbmF0aXZlQWRkTGlzdGVuZXJfMS5hcHBseShjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYWRkTWVzc2FnZUxpc3RlbmVyKGFyZ3NbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIFRoZW1lRW5naW5lO1xyXG4gICAgKGZ1bmN0aW9uIChUaGVtZUVuZ2luZSkge1xyXG4gICAgICAgIFRoZW1lRW5naW5lW1wiY3NzRmlsdGVyXCJdID0gXCJjc3NGaWx0ZXJcIjtcclxuICAgICAgICBUaGVtZUVuZ2luZVtcInN2Z0ZpbHRlclwiXSA9IFwic3ZnRmlsdGVyXCI7XHJcbiAgICAgICAgVGhlbWVFbmdpbmVbXCJzdGF0aWNUaGVtZVwiXSA9IFwic3RhdGljVGhlbWVcIjtcclxuICAgICAgICBUaGVtZUVuZ2luZVtcImR5bmFtaWNUaGVtZVwiXSA9IFwiZHluYW1pY1RoZW1lXCI7XHJcbiAgICB9KShUaGVtZUVuZ2luZSB8fCAoVGhlbWVFbmdpbmUgPSB7fSkpO1xyXG5cclxuICAgIHZhciBBdXRvbWF0aW9uTW9kZTtcclxuICAgIChmdW5jdGlvbiAoQXV0b21hdGlvbk1vZGUpIHtcclxuICAgICAgICBBdXRvbWF0aW9uTW9kZVtcIk5PTkVcIl0gPSBcIlwiO1xyXG4gICAgICAgIEF1dG9tYXRpb25Nb2RlW1wiVElNRVwiXSA9IFwidGltZVwiO1xyXG4gICAgICAgIEF1dG9tYXRpb25Nb2RlW1wiU1lTVEVNXCJdID0gXCJzeXN0ZW1cIjtcclxuICAgICAgICBBdXRvbWF0aW9uTW9kZVtcIkxPQ0FUSU9OXCJdID0gXCJsb2NhdGlvblwiO1xyXG4gICAgfSkoQXV0b21hdGlvbk1vZGUgfHwgKEF1dG9tYXRpb25Nb2RlID0ge30pKTtcclxuXHJcbiAgICB2YXIgREVGQVVMVF9DT0xPUlMgPSB7XHJcbiAgICAgICAgZGFya1NjaGVtZToge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMxODFhMWJcIixcclxuICAgICAgICAgICAgdGV4dDogXCIjZThlNmUzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpZ2h0U2NoZW1lOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2RjZGFkN1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIiMxODFhMWJcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgREVGQVVMVF9USEVNRSA9IHtcclxuICAgICAgICBtb2RlOiAxLFxyXG4gICAgICAgIGJyaWdodG5lc3M6IDEwMCxcclxuICAgICAgICBjb250cmFzdDogMTAwLFxyXG4gICAgICAgIGdyYXlzY2FsZTogMCxcclxuICAgICAgICBzZXBpYTogMCxcclxuICAgICAgICB1c2VGb250OiBmYWxzZSxcclxuICAgICAgICBmb250RmFtaWx5OiBpc01hY09TXHJcbiAgICAgICAgICAgID8gXCJIZWx2ZXRpY2EgTmV1ZVwiXHJcbiAgICAgICAgICAgIDogaXNXaW5kb3dzXHJcbiAgICAgICAgICAgID8gXCJTZWdvZSBVSVwiXHJcbiAgICAgICAgICAgIDogXCJPcGVuIFNhbnNcIixcclxuICAgICAgICB0ZXh0U3Ryb2tlOiAwLFxyXG4gICAgICAgIGVuZ2luZTogVGhlbWVFbmdpbmUuZHluYW1pY1RoZW1lLFxyXG4gICAgICAgIHN0eWxlc2hlZXQ6IFwiXCIsXHJcbiAgICAgICAgZGFya1NjaGVtZUJhY2tncm91bmRDb2xvcjogREVGQVVMVF9DT0xPUlMuZGFya1NjaGVtZS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIGRhcmtTY2hlbWVUZXh0Q29sb3I6IERFRkFVTFRfQ09MT1JTLmRhcmtTY2hlbWUudGV4dCxcclxuICAgICAgICBsaWdodFNjaGVtZUJhY2tncm91bmRDb2xvcjogREVGQVVMVF9DT0xPUlMubGlnaHRTY2hlbWUuYmFja2dyb3VuZCxcclxuICAgICAgICBsaWdodFNjaGVtZVRleHRDb2xvcjogREVGQVVMVF9DT0xPUlMubGlnaHRTY2hlbWUudGV4dCxcclxuICAgICAgICBzY3JvbGxiYXJDb2xvcjogaXNNYWNPUyA/IFwiXCIgOiBcImF1dG9cIixcclxuICAgICAgICBzZWxlY3Rpb25Db2xvcjogXCJhdXRvXCIsXHJcbiAgICAgICAgc3R5bGVTeXN0ZW1Db250cm9sczogIWlzQ1NTQ29sb3JTY2hlbWVQcm9wU3VwcG9ydGVkLFxyXG4gICAgICAgIGxpZ2h0Q29sb3JTY2hlbWU6IFwiRGVmYXVsdFwiLFxyXG4gICAgICAgIGRhcmtDb2xvclNjaGVtZTogXCJEZWZhdWx0XCIsXHJcbiAgICAgICAgaW1tZWRpYXRlTW9kaWZ5OiBmYWxzZVxyXG4gICAgfTtcclxuICAgICh7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBmZXRjaE5ld3M6IHRydWUsXHJcbiAgICAgICAgdGhlbWU6IERFRkFVTFRfVEhFTUUsXHJcbiAgICAgICAgcHJlc2V0czogW10sXHJcbiAgICAgICAgY3VzdG9tVGhlbWVzOiBbXSxcclxuICAgICAgICBzaXRlTGlzdDogW10sXHJcbiAgICAgICAgc2l0ZUxpc3RFbmFibGVkOiBbXSxcclxuICAgICAgICBhcHBseVRvTGlzdGVkT25seTogZmFsc2UsXHJcbiAgICAgICAgY2hhbmdlQnJvd3NlclRoZW1lOiBmYWxzZSxcclxuICAgICAgICBzeW5jU2V0dGluZ3M6IHRydWUsXHJcbiAgICAgICAgc3luY1NpdGVzRml4ZXM6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9tYXRpb246IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1vZGU6IEF1dG9tYXRpb25Nb2RlLk5PTkUsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcIk9uT2ZmXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbWU6IHtcclxuICAgICAgICAgICAgYWN0aXZhdGlvbjogXCIxODowMFwiLFxyXG4gICAgICAgICAgICBkZWFjdGl2YXRpb246IFwiOTowMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgICAgICBsYXRpdHVkZTogbnVsbCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmV2aWV3TmV3RGVzaWduOiBmYWxzZSxcclxuICAgICAgICBlbmFibGVGb3JQREY6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlRm9yUHJvdGVjdGVkUGFnZXM6IGZhbHNlLFxyXG4gICAgICAgIGVuYWJsZUNvbnRleHRNZW51czogZmFsc2UsXHJcbiAgICAgICAgZGV0ZWN0RGFya1RoZW1lOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBcnJheUxpa2UoaXRlbXMpIHtcclxuICAgICAgICByZXR1cm4gaXRlbXMubGVuZ3RoICE9IG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JFYWNoKGl0ZW1zLCBpdGVyYXRvcikge1xyXG4gICAgICAgIHZhciBlXzEsIF9hO1xyXG4gICAgICAgIGlmIChpc0FycmF5TGlrZShpdGVtcykpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRvcihpdGVtc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbXNfMSA9IF9fdmFsdWVzKGl0ZW1zKSwgaXRlbXNfMV8xID0gaXRlbXNfMS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIWl0ZW1zXzFfMS5kb25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zXzFfMSA9IGl0ZW1zXzEubmV4dCgpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvcihpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZV8xXzEpIHtcclxuICAgICAgICAgICAgICAgIGVfMSA9IHtlcnJvcjogZV8xXzF9O1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbXNfMV8xICYmICFpdGVtc18xXzEuZG9uZSAmJiAoX2EgPSBpdGVtc18xLnJldHVybikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmNhbGwoaXRlbXNfMSk7XHJcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHB1c2goYXJyYXksIGFkZGl0aW9uKSB7XHJcbiAgICAgICAgZm9yRWFjaChhZGRpdGlvbiwgZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5LnB1c2goYSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0b0FycmF5KGl0ZW1zKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW1zW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9nSW5mbygpIHt9XHJcbiAgICBmdW5jdGlvbiBsb2dXYXJuKCkge31cclxuXHJcbiAgICBmdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBwZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIHZhciBsYXN0QXJncztcclxuICAgICAgICB2YXIgdGhyb3R0bGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RBcmdzID0gYXJncztcclxuICAgICAgICAgICAgaWYgKGZyYW1lSWQpIHtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChsYXN0QXJncyksIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGxhc3RBcmdzKSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XHJcbiAgICAgICAgICAgIHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aHJvdHRsZWQsIHtjYW5jZWw6IGNhbmNlbH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQXN5bmNUYXNrc1F1ZXVlKCkge1xyXG4gICAgICAgIHZhciB0YXNrcyA9IFtdO1xyXG4gICAgICAgIHZhciBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICBmdW5jdGlvbiBydW5UYXNrcygpIHtcclxuICAgICAgICAgICAgdmFyIHRhc2s7XHJcbiAgICAgICAgICAgIHdoaWxlICgodGFzayA9IHRhc2tzLnNoaWZ0KCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZCh0YXNrKSB7XHJcbiAgICAgICAgICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgICAgIGlmICghZnJhbWVJZCkge1xyXG4gICAgICAgICAgICAgICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShydW5UYXNrcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY2FuY2VsKCkge1xyXG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xyXG4gICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHthZGQ6IGFkZCwgY2FuY2VsOiBjYW5jZWx9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldER1cmF0aW9uKHRpbWUpIHtcclxuICAgICAgICB2YXIgZHVyYXRpb24gPSAwO1xyXG4gICAgICAgIGlmICh0aW1lLnNlY29uZHMpIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gKz0gdGltZS5zZWNvbmRzICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWUubWludXRlcykge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSB0aW1lLm1pbnV0ZXMgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lLmhvdXJzKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHRpbWUuaG91cnMgKiA2MCAqIDYwICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWUuZGF5cykge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSB0aW1lLmRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XHJcbiAgICAgICAgbm9kZSAmJiBub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JOb2RlUG9zaXRpb24obm9kZSwgbW9kZSwgb25SZXN0b3JlKSB7XHJcbiAgICAgICAgaWYgKG9uUmVzdG9yZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIG9uUmVzdG9yZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIE1BWF9BVFRFTVBUU19DT1VOVCA9IDEwO1xyXG4gICAgICAgIHZhciBSRVRSWV9USU1FT1VUID0gZ2V0RHVyYXRpb24oe3NlY29uZHM6IDJ9KTtcclxuICAgICAgICB2YXIgQVRURU1QVFNfSU5URVJWQUwgPSBnZXREdXJhdGlvbih7c2Vjb25kczogMTB9KTtcclxuICAgICAgICB2YXIgcHJldlNpYmxpbmcgPSBub2RlLnByZXZpb3VzU2libGluZztcclxuICAgICAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgIFwiVW5hYmxlIHRvIHdhdGNoIGZvciBub2RlIHBvc2l0aW9uOiBwYXJlbnQgZWxlbWVudCBub3QgZm91bmRcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW9kZSA9PT0gXCJwcmV2LXNpYmxpbmdcIiAmJiAhcHJldlNpYmxpbmcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgXCJVbmFibGUgdG8gd2F0Y2ggZm9yIG5vZGUgcG9zaXRpb246IHRoZXJlIGlzIG5vIHByZXZpb3VzIHNpYmxpbmdcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXR0ZW1wdHMgPSAwO1xyXG4gICAgICAgIHZhciBzdGFydCA9IG51bGw7XHJcbiAgICAgICAgdmFyIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgdmFyIHJlc3RvcmUgPSB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdHRlbXB0cysrO1xyXG4gICAgICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGVtcHRzID49IE1BWF9BVFRFTVBUU19DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdyAtIHN0YXJ0IDwgQVRURU1QVFNfSU5URVJWQUwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBSRVRSWV9USU1FT1VUKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5vdztcclxuICAgICAgICAgICAgICAgIGF0dGVtcHRzID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJwYXJlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nICYmIHByZXZTaWJsaW5nLnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwicHJldi1zaWJsaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZy5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nLnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcmVudChwcmV2U2libGluZy5wYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgICAgIHByZXZTaWJsaW5nID8gcHJldlNpYmxpbmcubmV4dFNpYmxpbmcgOiBwYXJlbnQuZmlyc3RDaGlsZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xyXG4gICAgICAgICAgICBvblJlc3RvcmUgJiYgb25SZXN0b3JlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAobW9kZSA9PT0gXCJwYXJlbnRcIiAmJiBub2RlLnBhcmVudE5vZGUgIT09IHBhcmVudCkgfHxcclxuICAgICAgICAgICAgICAgIChtb2RlID09PSBcInByZXYtc2libGluZ1wiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wcmV2aW91c1NpYmxpbmcgIT09IHByZXZTaWJsaW5nKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBydW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUocGFyZW50LCB7Y2hpbGRMaXN0OiB0cnVlfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgcmVzdG9yZS5jYW5jZWwoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBza2lwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHVwZGF0ZVBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIHN0b3AoKTtcclxuICAgICAgICAgICAgcnVuKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBydW4oKTtcclxuICAgICAgICByZXR1cm4ge3J1bjogcnVuLCBzdG9wOiBzdG9wLCBza2lwOiBza2lwfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVTaGFkb3dIb3N0cyhyb290LCBpdGVyYXRvcikge1xyXG4gICAgICAgIGlmIChyb290ID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihyb290LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwge1xyXG4gICAgICAgICAgICBhY2NlcHROb2RlOiBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc2hhZG93Um9vdCA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgPyBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQXHJcbiAgICAgICAgICAgICAgICAgICAgOiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHJvb3Quc2hhZG93Um9vdCA/IHdhbGtlci5jdXJyZW50Tm9kZSA6IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG4gICAgICAgICAgICBub2RlICE9IG51bGw7XHJcbiAgICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzdXJmaW5na2V5c19oaW50c19ob3N0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVyYXRvcihub2RlKTtcclxuICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKG5vZGUuc2hhZG93Um9vdCwgaXRlcmF0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBpc0RPTVJlYWR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiB8fFxyXG4gICAgICAgICAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCJcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIHNldElzRE9NUmVhZHkobmV3RnVuYykge1xyXG4gICAgICAgIGlzRE9NUmVhZHkgPSBuZXdGdW5jO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlYWR5U3RhdGVMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XHJcbiAgICBmdW5jdGlvbiBhZGRET01SZWFkeUxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaXNET01SZWFkeSgpID8gbGlzdGVuZXIoKSA6IHJlYWR5U3RhdGVMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZURPTVJlYWR5TGlzdGVuZXIobGlzdGVuZXIpIHtcclxuICAgICAgICByZWFkeVN0YXRlTGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1JlYWR5U3RhdGVDb21wbGV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGFkZFJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaXNSZWFkeVN0YXRlQ29tcGxldGUoKVxyXG4gICAgICAgICAgICA/IGxpc3RlbmVyKClcclxuICAgICAgICAgICAgOiByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlXzEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVhZHlTdGF0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVhZHlTdGF0ZUNvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlYWR5c3RhdGVjaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZWFkeVN0YXRlQ2hhbmdlXzFcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgb25SZWFkeVN0YXRlQ2hhbmdlXzEpO1xyXG4gICAgfVxyXG4gICAgdmFyIEhVR0VfTVVUQVRJT05TX0NPVU5UID0gMTAwMDtcclxuICAgIGZ1bmN0aW9uIGlzSHVnZU11dGF0aW9uKG11dGF0aW9ucykge1xyXG4gICAgICAgIGlmIChtdXRhdGlvbnMubGVuZ3RoID4gSFVHRV9NVVRBVElPTlNfQ09VTlQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhZGRlZE5vZGVzQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFkZGVkTm9kZXNDb3VudCArPSBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChhZGRlZE5vZGVzQ291bnQgPiBIVUdFX01VVEFUSU9OU19DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudHNUcmVlT3BlcmF0aW9ucyhtdXRhdGlvbnMpIHtcclxuICAgICAgICB2YXIgYWRkaXRpb25zID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHZhciBkZWxldGlvbnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdmFyIG1vdmVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgIGZvckVhY2gobS5hZGRlZE5vZGVzLCBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBFbGVtZW50ICYmIG4uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbnMuYWRkKG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yRWFjaChtLnJlbW92ZWROb2RlcywgZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChuIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVzLmFkZChuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25zLmRlbGV0ZShuKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGlvbnMuYWRkKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGR1cGxpY2F0ZUFkZGl0aW9ucyA9IFtdO1xyXG4gICAgICAgIHZhciBkdXBsaWNhdGVEZWxldGlvbnMgPSBbXTtcclxuICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICBpZiAoYWRkaXRpb25zLmhhcyhub2RlLnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVBZGRpdGlvbnMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRlbGV0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGlvbnMuaGFzKG5vZGUucGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZURlbGV0aW9ucy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZHVwbGljYXRlQWRkaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9ucy5kZWxldGUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZHVwbGljYXRlRGVsZXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlbGV0aW9ucy5kZWxldGUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHthZGRpdGlvbnM6IGFkZGl0aW9ucywgbW92ZXM6IG1vdmVzLCBkZWxldGlvbnM6IGRlbGV0aW9uc307XHJcbiAgICB9XHJcbiAgICB2YXIgb3B0aW1pemVkVHJlZU9ic2VydmVycyA9IG5ldyBNYXAoKTtcclxuICAgIHZhciBvcHRpbWl6ZWRUcmVlQ2FsbGJhY2tzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9wdGltaXplZFRyZWVPYnNlcnZlcihyb290LCBjYWxsYmFja3MpIHtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXI7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyQ2FsbGJhY2tzO1xyXG4gICAgICAgIHZhciBkb21SZWFkeUxpc3RlbmVyO1xyXG4gICAgICAgIGlmIChvcHRpbWl6ZWRUcmVlT2JzZXJ2ZXJzLmhhcyhyb290KSkge1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG9wdGltaXplZFRyZWVPYnNlcnZlcnMuZ2V0KHJvb3QpO1xyXG4gICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcyA9IG9wdGltaXplZFRyZWVDYWxsYmFja3MuZ2V0KG9ic2VydmVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaGFkSHVnZU11dGF0aW9uc0JlZm9yZV8xID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBzdWJzY3JpYmVkRm9yUmVhZHlTdGF0ZV8xID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzSHVnZU11dGF0aW9uKG11dGF0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhZEh1Z2VNdXRhdGlvbnNCZWZvcmVfMSB8fCBpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbkh1Z2VNdXRhdGlvbnMgPSBfYS5vbkh1Z2VNdXRhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25IdWdlTXV0YXRpb25zKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzdWJzY3JpYmVkRm9yUmVhZHlTdGF0ZV8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVJlYWR5TGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXJDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25IdWdlTXV0YXRpb25zID0gX2Eub25IdWdlTXV0YXRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvbkh1Z2VNdXRhdGlvbnMocm9vdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkRE9NUmVhZHlMaXN0ZW5lcihkb21SZWFkeUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlZEZvclJlYWR5U3RhdGVfMSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhZEh1Z2VNdXRhdGlvbnNCZWZvcmVfMSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50c09wZXJhdGlvbnNfMSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEVsZW1lbnRzVHJlZU9wZXJhdGlvbnMobXV0YXRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25NaW5vck11dGF0aW9ucyA9IF9hLm9uTWlub3JNdXRhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk1pbm9yTXV0YXRpb25zKGVsZW1lbnRzT3BlcmF0aW9uc18xKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUocm9vdCwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBvcHRpbWl6ZWRUcmVlT2JzZXJ2ZXJzLnNldChyb290LCBvYnNlcnZlcik7XHJcbiAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBvcHRpbWl6ZWRUcmVlQ2FsbGJhY2tzLnNldChvYnNlcnZlciwgb2JzZXJ2ZXJDYWxsYmFja3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5hZGQoY2FsbGJhY2tzKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkaXNjb25uZWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2tzKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb21SZWFkeUxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRE9NUmVhZHlMaXN0ZW5lcihkb21SZWFkeUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZlckNhbGxiYWNrcy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGltaXplZFRyZWVDYWxsYmFja3MuZGVsZXRlKG9ic2VydmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpbWl6ZWRUcmVlT2JzZXJ2ZXJzLmRlbGV0ZShyb290KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFuY2hvcjtcclxuICAgIHZhciBwYXJzZWRVUkxDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGZpeEJhc2VVUkwoJHVybCkge1xyXG4gICAgICAgIGlmICghYW5jaG9yKSB7XHJcbiAgICAgICAgICAgIGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbmNob3IuaHJlZiA9ICR1cmw7XHJcbiAgICAgICAgcmV0dXJuIGFuY2hvci5ocmVmO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VVUkwoJHVybCwgJGJhc2UpIHtcclxuICAgICAgICBpZiAoJGJhc2UgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICAkYmFzZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBrZXkgPSBcIlwiLmNvbmNhdCgkdXJsKS5jb25jYXQoJGJhc2UgPyBcIjtcIi5jb25jYXQoJGJhc2UpIDogXCJcIik7XHJcbiAgICAgICAgaWYgKHBhcnNlZFVSTENhY2hlLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRVUkxDYWNoZS5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRiYXNlKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJzZWRVUkxfMSA9IG5ldyBVUkwoJHVybCwgZml4QmFzZVVSTCgkYmFzZSkpO1xyXG4gICAgICAgICAgICBwYXJzZWRVUkxDYWNoZS5zZXQoa2V5LCBwYXJzZWRVUkxfMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRVUkxfMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhcnNlZFVSTCA9IG5ldyBVUkwoZml4QmFzZVVSTCgkdXJsKSk7XHJcbiAgICAgICAgcGFyc2VkVVJMQ2FjaGUuc2V0KCR1cmwsIHBhcnNlZFVSTCk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZFVSTDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEFic29sdXRlVVJMKCRiYXNlLCAkcmVsYXRpdmUpIHtcclxuICAgICAgICBpZiAoJHJlbGF0aXZlLm1hdGNoKC9eZGF0YVxcXFw/XFw6LykpIHtcclxuICAgICAgICAgICAgcmV0dXJuICRyZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKC9eXFwvXFwvLy50ZXN0KCRyZWxhdGl2ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGxvY2F0aW9uLnByb3RvY29sKS5jb25jYXQoJHJlbGF0aXZlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGIgPSBwYXJzZVVSTCgkYmFzZSk7XHJcbiAgICAgICAgdmFyIGEgPSBwYXJzZVVSTCgkcmVsYXRpdmUsIGIuaHJlZik7XHJcbiAgICAgICAgcmV0dXJuIGEuaHJlZjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzUmVsYXRpdmVIcmVmT25BYnNvbHV0ZVBhdGgoaHJlZikge1xyXG4gICAgICAgIGlmIChocmVmLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHVybCA9IHBhcnNlVVJMKGhyZWYpO1xyXG4gICAgICAgIGlmICh1cmwucHJvdG9jb2wgIT09IGxvY2F0aW9uLnByb3RvY29sKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVybC5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsLnBvcnQgIT09IGxvY2F0aW9uLnBvcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsLnBhdGhuYW1lID09PSBsb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpdGVyYXRlQ1NTUnVsZXMocnVsZXMsIGl0ZXJhdGUsIG9uTWVkaWFSdWxlRXJyb3IpIHtcclxuICAgICAgICBmb3JFYWNoKHJ1bGVzLCBmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgICAgICBpZiAocnVsZS5zZWxlY3RvclRleHQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGUocnVsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocnVsZS5ocmVmKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZVNoZWV0LmNzc1J1bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1lZGlhUnVsZUVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oXCJGb3VuZCBhIG5vbi1sb2FkZWQgbGluay5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgb25NZWRpYVJ1bGVFcnJvciAmJiBvbk1lZGlhUnVsZUVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocnVsZS5tZWRpYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lZGlhID0gQXJyYXkuZnJvbShydWxlLm1lZGlhKTtcclxuICAgICAgICAgICAgICAgIHZhciBpc1NjcmVlbk9yQWxsT3JRdWVyeSA9IG1lZGlhLnNvbWUoZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnN0YXJ0c1dpdGgoXCJzY3JlZW5cIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5zdGFydHNXaXRoKFwiYWxsXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uc3RhcnRzV2l0aChcIihcIilcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNQcmludE9yU3BlZWNoID0gbWVkaWEuc29tZShmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnN0YXJ0c1dpdGgoXCJwcmludFwiKSB8fCBtLnN0YXJ0c1dpdGgoXCJzcGVlY2hcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NjcmVlbk9yQWxsT3JRdWVyeSB8fCAhaXNQcmludE9yU3BlZWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKHJ1bGUuY3NzUnVsZXMsIGl0ZXJhdGUsIG9uTWVkaWFSdWxlRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJ1bGUuY29uZGl0aW9uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKENTUy5zdXBwb3J0cyhydWxlLmNvbmRpdGlvblRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKHJ1bGUuY3NzUnVsZXMsIGl0ZXJhdGUsIG9uTWVkaWFSdWxlRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9nV2FybihcIkNTU1J1bGUgdHlwZSBub3Qgc3VwcG9ydGVkXCIsIHJ1bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgc2hvcnRoYW5kVmFyRGVwZW5kYW50UHJvcGVydGllcyA9IFtcclxuICAgICAgICBcImJhY2tncm91bmRcIixcclxuICAgICAgICBcImJvcmRlclwiLFxyXG4gICAgICAgIFwiYm9yZGVyLWNvbG9yXCIsXHJcbiAgICAgICAgXCJib3JkZXItYm90dG9tXCIsXHJcbiAgICAgICAgXCJib3JkZXItbGVmdFwiLFxyXG4gICAgICAgIFwiYm9yZGVyLXJpZ2h0XCIsXHJcbiAgICAgICAgXCJib3JkZXItdG9wXCIsXHJcbiAgICAgICAgXCJvdXRsaW5lXCIsXHJcbiAgICAgICAgXCJvdXRsaW5lLWNvbG9yXCJcclxuICAgIF07XHJcbiAgICB2YXIgc2hvcnRoYW5kVmFyRGVwUHJvcFJlZ2V4cHMgPSBpc1NhZmFyaVxyXG4gICAgICAgID8gc2hvcnRoYW5kVmFyRGVwZW5kYW50UHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgICAgICAgICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChwcm9wLCBcIjpcXFxccyooLio/KVxcXFxzKjtcIikpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBbcHJvcCwgcmVnZXhwXTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgOiBudWxsO1xyXG4gICAgZnVuY3Rpb24gaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhzdHlsZSwgaXRlcmF0ZSkge1xyXG4gICAgICAgIGZvckVhY2goc3R5bGUsIGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVyYXRlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGNzc1RleHQgPSBzdHlsZS5jc3NUZXh0O1xyXG4gICAgICAgIGlmIChjc3NUZXh0LmluY2x1ZGVzKFwidmFyKFwiKSkge1xyXG4gICAgICAgICAgICBpZiAoaXNTYWZhcmkpIHtcclxuICAgICAgICAgICAgICAgIHNob3J0aGFuZFZhckRlcFByb3BSZWdleHBzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKF9hLCAyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcCA9IF9iWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdleHAgPSBfYlsxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBjc3NUZXh0Lm1hdGNoKHJlZ2V4cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBtYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGUocHJvcCwgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3J0aGFuZFZhckRlcGVuZGFudFByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgJiYgdmFsLmluY2x1ZGVzKFwidmFyKFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKHByb3AsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgY3NzVVJMUmVnZXggPSAvdXJsXFwoKCgnLio/Jyl8KFwiLio/XCIpfChbXlxcKV0qPykpXFwpL2c7XHJcbiAgICB2YXIgY3NzSW1wb3J0UmVnZXggPVxyXG4gICAgICAgIC9AaW1wb3J0XFxzKih1cmxcXCgpPygoJy4rPycpfChcIi4rP1wiKXwoW15cXCldKj8pKVxcKT8gPyhzY3JlZW4pPzs/L2dpO1xyXG4gICAgZnVuY3Rpb24gZ2V0Q1NTVVJMVmFsdWUoY3NzVVJMKSB7XHJcbiAgICAgICAgcmV0dXJuIGNzc1VSTFxyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFxuXFxyXFxcXF0rL2csIFwiXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9edXJsXFwoKC4qKVxcKSQvLCBcIiQxXCIpXHJcbiAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgLnJlcGxhY2UoL15cIiguKilcIiQvLCBcIiQxXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eJyguKiknJC8sIFwiJDFcIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyg/OlxcXFwoLikpL2csIFwiJDFcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRDU1NCYXNlQmF0aCh1cmwpIHtcclxuICAgICAgICB2YXIgY3NzVVJMID0gcGFyc2VVUkwodXJsKTtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgICAgICAgICAuY29uY2F0KGNzc1VSTC5vcmlnaW4pXHJcbiAgICAgICAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBjc3NVUkwucGF0aG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFw/LiokLywgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKFxcLykoW15cXC9dKykkL2ksIFwiJDFcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VDU1NSZWxhdGl2ZVVSTHNXaXRoQWJzb2x1dGUoJGNzcywgY3NzQmFzZVBhdGgpIHtcclxuICAgICAgICByZXR1cm4gJGNzcy5yZXBsYWNlKGNzc1VSTFJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgdmFyIHBhdGhWYWx1ZSA9IGdldENTU1VSTFZhbHVlKG1hdGNoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInVybCgnXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEFic29sdXRlVVJMKGNzc0Jhc2VQYXRoLCBwYXRoVmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiJylcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBjc3NDb21tZW50c1JlZ2V4ID0gL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vZztcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNTU0NvbW1lbnRzKCRjc3MpIHtcclxuICAgICAgICByZXR1cm4gJGNzcy5yZXBsYWNlKGNzc0NvbW1lbnRzUmVnZXgsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIGZvbnRGYWNlUmVnZXggPSAvQGZvbnQtZmFjZVxccyp7W159XSp9L2c7XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQ1NTRm9udEZhY2UoJGNzcykge1xyXG4gICAgICAgIHJldHVybiAkY3NzLnJlcGxhY2UoZm9udEZhY2VSZWdleCwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXZhbE1hdGgoZXhwcmVzc2lvbikge1xyXG4gICAgICAgIHZhciBycG5TdGFjayA9IFtdO1xyXG4gICAgICAgIHZhciB3b3JraW5nU3RhY2sgPSBbXTtcclxuICAgICAgICB2YXIgbGFzdFRva2VuO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHByZXNzaW9uLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IGV4cHJlc3Npb25baV07XHJcbiAgICAgICAgICAgIGlmICghdG9rZW4gfHwgdG9rZW4gPT09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3BlcmF0b3JzLmhhcyh0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcCA9IG9wZXJhdG9ycy5nZXQodG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHdvcmtpbmdTdGFjay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudE9wID0gb3BlcmF0b3JzLmdldCh3b3JraW5nU3RhY2tbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudE9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3AubGVzc09yRXF1YWxUaGFuKGN1cnJlbnRPcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnBuU3RhY2sucHVzaCh3b3JraW5nU3RhY2suc2hpZnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd29ya2luZ1N0YWNrLnVuc2hpZnQodG9rZW4pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFsYXN0VG9rZW4gfHwgb3BlcmF0b3JzLmhhcyhsYXN0VG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBycG5TdGFjay5wdXNoKHRva2VuKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJwblN0YWNrW3JwblN0YWNrLmxlbmd0aCAtIDFdICs9IHRva2VuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RUb2tlbiA9IHRva2VuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBycG5TdGFjay5wdXNoLmFwcGx5KFxyXG4gICAgICAgICAgICBycG5TdGFjayxcclxuICAgICAgICAgICAgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKHdvcmtpbmdTdGFjayksIGZhbHNlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIHN0YWNrID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJwblN0YWNrLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvcCA9IG9wZXJhdG9ycy5nZXQocnBuU3RhY2tbaV0pO1xyXG4gICAgICAgICAgICBpZiAob3ApIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gc3RhY2suc3BsaWNlKDAsIDIpO1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChvcC5leGVjKGFyZ3NbMV0sIGFyZ3NbMF0pKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnVuc2hpZnQocGFyc2VGbG9hdChycG5TdGFja1tpXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGFja1swXTtcclxuICAgIH1cclxuICAgIHZhciBPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gT3BlcmF0b3IocHJlY2VkZW5jZSwgbWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlY2VuZGNlID0gcHJlY2VkZW5jZTtcclxuICAgICAgICAgICAgdGhpcy5leGVjTWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPcGVyYXRvci5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leGVjTWV0aG9kKGxlZnQsIHJpZ2h0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE9wZXJhdG9yLnByb3RvdHlwZS5sZXNzT3JFcXVhbFRoYW4gPSBmdW5jdGlvbiAob3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlY2VuZGNlIDw9IG9wLnByZWNlbmRjZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBPcGVyYXRvcjtcclxuICAgIH0pKCk7XHJcbiAgICB2YXIgb3BlcmF0b3JzID0gbmV3IE1hcChbXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcIitcIixcclxuICAgICAgICAgICAgbmV3IE9wZXJhdG9yKDEsIGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgKyByaWdodDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCItXCIsXHJcbiAgICAgICAgICAgIG5ldyBPcGVyYXRvcigxLCBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0IC0gcmlnaHQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiKlwiLFxyXG4gICAgICAgICAgICBuZXcgT3BlcmF0b3IoMiwgZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCAqIHJpZ2h0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcIi9cIixcclxuICAgICAgICAgICAgbmV3IE9wZXJhdG9yKDIsIGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgLyByaWdodDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdXHJcbiAgICBdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNYXRjaGVzKHJlZ2V4LCBpbnB1dCwgZ3JvdXApIHtcclxuICAgICAgICBpZiAoZ3JvdXAgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBncm91cCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYXRjaGVzID0gW107XHJcbiAgICAgICAgdmFyIG07XHJcbiAgICAgICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhpbnB1dCkpKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChtW2dyb3VwXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRjaGVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybWF0Q1NTKHRleHQpIHtcclxuICAgICAgICBmdW5jdGlvbiB0cmltTGVmdCh0ZXh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL15cXHMrLywgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEluZGVudChkZXB0aCkge1xyXG4gICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIiBcIi5yZXBlYXQoNCAqIGRlcHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoIDwgNTAwMDApIHtcclxuICAgICAgICAgICAgdmFyIGVtcHR5UnVsZVJlZ2V4cCA9IC9bXnt9XSt7XFxzKn0vO1xyXG4gICAgICAgICAgICB3aGlsZSAoZW1wdHlSdWxlUmVnZXhwLnRlc3QodGV4dCkpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoZW1wdHlSdWxlUmVnZXhwLCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3NzID0gdGV4dFxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzezIsfS9nLCBcIiBcIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcey9nLCBcIntcXG5cIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcfS9nLCBcIlxcbn1cXG5cIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcOyg/IVteXFwofFxcXCJdKihcXCl8XFxcIikpL2csIFwiO1xcblwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwsKD8hW15cXCh8XFxcIl0qKFxcKXxcXFwiKSkvZywgXCIsXFxuXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXG5cXHMqXFxuL2csIFwiXFxuXCIpXHJcbiAgICAgICAgICAgIC5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICB2YXIgZGVwdGggPSAwO1xyXG4gICAgICAgIHZhciBmb3JtYXR0ZWQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciB4ID0gMCwgbGVuID0gY3NzLmxlbmd0aDsgeCA8IGxlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIHZhciBsaW5lID0gXCJcIi5jb25jYXQoY3NzW3hdLCBcIlxcblwiKTtcclxuICAgICAgICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoXCJ7XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQucHVzaChnZXRJbmRlbnQoZGVwdGgrKykgKyB0cmltTGVmdChsaW5lKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmNsdWRlcyhcIn1cIikpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZC5wdXNoKGdldEluZGVudCgtLWRlcHRoKSArIHRyaW1MZWZ0KGxpbmUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZC5wdXNoKGdldEluZGVudChkZXB0aCkgKyB0cmltTGVmdChsaW5lKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZC5qb2luKFwiXCIpLnRyaW0oKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFBhcmVudGhlc2VzUmFuZ2UoaW5wdXQsIHNlYXJjaFN0YXJ0SW5kZXgpIHtcclxuICAgICAgICBpZiAoc2VhcmNoU3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgIHZhciBkZXB0aCA9IDA7XHJcbiAgICAgICAgdmFyIGZpcnN0T3BlbkluZGV4ID0gLTE7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHNlYXJjaFN0YXJ0SW5kZXg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcGVuSW5kZXggPSBpbnB1dC5pbmRleE9mKFwiKFwiLCBpKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcGVuSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaXJzdE9wZW5JbmRleCA9IG9wZW5JbmRleDtcclxuICAgICAgICAgICAgICAgIGRlcHRoKys7XHJcbiAgICAgICAgICAgICAgICBpID0gb3BlbkluZGV4O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsb3NpbmdJbmRleCA9IGlucHV0LmluZGV4T2YoXCIpXCIsIGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsb3NpbmdJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBvcGVuSW5kZXggPSBpbnB1dC5pbmRleE9mKFwiKFwiLCBpKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcGVuSW5kZXggPCAwIHx8IGNsb3NpbmdJbmRleCA8IG9wZW5JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3RhcnQ6IGZpcnN0T3BlbkluZGV4LCBlbmQ6IGNsb3NpbmdJbmRleCArIDF9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpID0gY2xvc2luZ0luZGV4O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBvcGVuSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhzbGFQYXJzZUNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgdmFyIHJnYmFQYXJzZUNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gcGFyc2VDb2xvcldpdGhDYWNoZSgkY29sb3IpIHtcclxuICAgICAgICAkY29sb3IgPSAkY29sb3IudHJpbSgpO1xyXG4gICAgICAgIGlmIChyZ2JhUGFyc2VDYWNoZS5oYXMoJGNvbG9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmdiYVBhcnNlQ2FjaGUuZ2V0KCRjb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkY29sb3IuaW5jbHVkZXMoXCJjYWxjKFwiKSkge1xyXG4gICAgICAgICAgICAkY29sb3IgPSBsb3dlckNhbGNFeHByZXNzaW9uKCRjb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb2xvciA9IHBhcnNlKCRjb2xvcik7XHJcbiAgICAgICAgY29sb3IgJiYgcmdiYVBhcnNlQ2FjaGUuc2V0KCRjb2xvciwgY29sb3IpO1xyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlVG9IU0xXaXRoQ2FjaGUoY29sb3IpIHtcclxuICAgICAgICBpZiAoaHNsYVBhcnNlQ2FjaGUuaGFzKGNvbG9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaHNsYVBhcnNlQ2FjaGUuZ2V0KGNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoY29sb3IpO1xyXG4gICAgICAgIGlmICghcmdiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHNsID0gcmdiVG9IU0wocmdiKTtcclxuICAgICAgICBoc2xhUGFyc2VDYWNoZS5zZXQoY29sb3IsIGhzbCk7XHJcbiAgICAgICAgcmV0dXJuIGhzbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyQ29sb3JDYWNoZSgpIHtcclxuICAgICAgICBoc2xhUGFyc2VDYWNoZS5jbGVhcigpO1xyXG4gICAgICAgIHJnYmFQYXJzZUNhY2hlLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoc2xUb1JHQihfYSkge1xyXG4gICAgICAgIHZhciBoID0gX2EuaCxcclxuICAgICAgICAgICAgcyA9IF9hLnMsXHJcbiAgICAgICAgICAgIGwgPSBfYS5sLFxyXG4gICAgICAgICAgICBfYiA9IF9hLmEsXHJcbiAgICAgICAgICAgIGEgPSBfYiA9PT0gdm9pZCAwID8gMSA6IF9iO1xyXG4gICAgICAgIGlmIChzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBfYyA9IF9fcmVhZChcclxuICAgICAgICAgICAgICAgICAgICBbbCwgbCwgbF0ubWFwKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHggKiAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICByXzEgPSBfY1swXSxcclxuICAgICAgICAgICAgICAgIGJfMSA9IF9jWzFdLFxyXG4gICAgICAgICAgICAgICAgZ18xID0gX2NbMl07XHJcbiAgICAgICAgICAgIHJldHVybiB7cjogcl8xLCBnOiBnXzEsIGI6IGJfMSwgYTogYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjID0gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAqIHM7XHJcbiAgICAgICAgdmFyIHggPSBjICogKDEgLSBNYXRoLmFicygoKGggLyA2MCkgJSAyKSAtIDEpKTtcclxuICAgICAgICB2YXIgbSA9IGwgLSBjIC8gMjtcclxuICAgICAgICB2YXIgX2QgPSBfX3JlYWQoXHJcbiAgICAgICAgICAgICAgICAoaCA8IDYwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBbYywgeCwgMF1cclxuICAgICAgICAgICAgICAgICAgICA6IGggPCAxMjBcclxuICAgICAgICAgICAgICAgICAgICA/IFt4LCBjLCAwXVxyXG4gICAgICAgICAgICAgICAgICAgIDogaCA8IDE4MFxyXG4gICAgICAgICAgICAgICAgICAgID8gWzAsIGMsIHhdXHJcbiAgICAgICAgICAgICAgICAgICAgOiBoIDwgMjQwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBbMCwgeCwgY11cclxuICAgICAgICAgICAgICAgICAgICA6IGggPCAzMDBcclxuICAgICAgICAgICAgICAgICAgICA/IFt4LCAwLCBjXVxyXG4gICAgICAgICAgICAgICAgICAgIDogW2MsIDAsIHhdXHJcbiAgICAgICAgICAgICAgICApLm1hcChmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKChuICsgbSkgKiAyNTUpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHIgPSBfZFswXSxcclxuICAgICAgICAgICAgZyA9IF9kWzFdLFxyXG4gICAgICAgICAgICBiID0gX2RbMl07XHJcbiAgICAgICAgcmV0dXJuIHtyOiByLCBnOiBnLCBiOiBiLCBhOiBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJnYlRvSFNMKF9hKSB7XHJcbiAgICAgICAgdmFyIHIyNTUgPSBfYS5yLFxyXG4gICAgICAgICAgICBnMjU1ID0gX2EuZyxcclxuICAgICAgICAgICAgYjI1NSA9IF9hLmIsXHJcbiAgICAgICAgICAgIF9iID0gX2EuYSxcclxuICAgICAgICAgICAgYSA9IF9iID09PSB2b2lkIDAgPyAxIDogX2I7XHJcbiAgICAgICAgdmFyIHIgPSByMjU1IC8gMjU1O1xyXG4gICAgICAgIHZhciBnID0gZzI1NSAvIDI1NTtcclxuICAgICAgICB2YXIgYiA9IGIyNTUgLyAyNTU7XHJcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xyXG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcclxuICAgICAgICB2YXIgYyA9IG1heCAtIG1pbjtcclxuICAgICAgICB2YXIgbCA9IChtYXggKyBtaW4pIC8gMjtcclxuICAgICAgICBpZiAoYyA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge2g6IDAsIHM6IDAsIGw6IGwsIGE6IGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaCA9XHJcbiAgICAgICAgICAgIChtYXggPT09IHJcclxuICAgICAgICAgICAgICAgID8gKChnIC0gYikgLyBjKSAlIDZcclxuICAgICAgICAgICAgICAgIDogbWF4ID09PSBnXHJcbiAgICAgICAgICAgICAgICA/IChiIC0gcikgLyBjICsgMlxyXG4gICAgICAgICAgICAgICAgOiAociAtIGcpIC8gYyArIDQpICogNjA7XHJcbiAgICAgICAgaWYgKGggPCAwKSB7XHJcbiAgICAgICAgICAgIGggKz0gMzYwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcyA9IGMgLyAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpO1xyXG4gICAgICAgIHJldHVybiB7aDogaCwgczogcywgbDogbCwgYTogYX07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0b0ZpeGVkKG4sIGRpZ2l0cykge1xyXG4gICAgICAgIGlmIChkaWdpdHMgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBkaWdpdHMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZml4ZWQgPSBuLnRvRml4ZWQoZGlnaXRzKTtcclxuICAgICAgICBpZiAoZGlnaXRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXhlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRvdCA9IGZpeGVkLmluZGV4T2YoXCIuXCIpO1xyXG4gICAgICAgIGlmIChkb3QgPj0gMCkge1xyXG4gICAgICAgICAgICB2YXIgemVyb3NNYXRjaCA9IGZpeGVkLm1hdGNoKC8wKyQvKTtcclxuICAgICAgICAgICAgaWYgKHplcm9zTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGlmICh6ZXJvc01hdGNoLmluZGV4ID09PSBkb3QgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVkLnN1YnN0cmluZygwLCBkb3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVkLnN1YnN0cmluZygwLCB6ZXJvc01hdGNoLmluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZml4ZWQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZ2JUb1N0cmluZyhyZ2IpIHtcclxuICAgICAgICB2YXIgciA9IHJnYi5yLFxyXG4gICAgICAgICAgICBnID0gcmdiLmcsXHJcbiAgICAgICAgICAgIGIgPSByZ2IuYixcclxuICAgICAgICAgICAgYSA9IHJnYi5hO1xyXG4gICAgICAgIGlmIChhICE9IG51bGwgJiYgYSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwicmdiYShcIlxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKHIpLCBcIiwgXCIpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQoZyksIFwiLCBcIilcclxuICAgICAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChiKSwgXCIsIFwiKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKGEsIDIpLCBcIilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcInJnYihcIlxyXG4gICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQociksIFwiLCBcIilcclxuICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKGcpLCBcIiwgXCIpXHJcbiAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChiKSwgXCIpXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmdiVG9IZXhTdHJpbmcoX2EpIHtcclxuICAgICAgICB2YXIgciA9IF9hLnIsXHJcbiAgICAgICAgICAgIGcgPSBfYS5nLFxyXG4gICAgICAgICAgICBiID0gX2EuYixcclxuICAgICAgICAgICAgYSA9IF9hLmE7XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiLmNvbmNhdChcclxuICAgICAgICAgICAgKGEgIT0gbnVsbCAmJiBhIDwgMSA/IFtyLCBnLCBiLCBNYXRoLnJvdW5kKGEgKiAyNTUpXSA6IFtyLCBnLCBiXSlcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoeCA8IDE2ID8gXCIwXCIgOiBcIlwiKS5jb25jYXQoeC50b1N0cmluZygxNikpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhzbFRvU3RyaW5nKGhzbCkge1xyXG4gICAgICAgIHZhciBoID0gaHNsLmgsXHJcbiAgICAgICAgICAgIHMgPSBoc2wucyxcclxuICAgICAgICAgICAgbCA9IGhzbC5sLFxyXG4gICAgICAgICAgICBhID0gaHNsLmE7XHJcbiAgICAgICAgaWYgKGEgIT0gbnVsbCAmJiBhIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJoc2xhKFwiXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KHRvRml4ZWQoaCksIFwiLCBcIilcclxuICAgICAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChzICogMTAwKSwgXCIlLCBcIilcclxuICAgICAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChsICogMTAwKSwgXCIlLCBcIilcclxuICAgICAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChhLCAyKSwgXCIpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJoc2woXCJcclxuICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKGgpLCBcIiwgXCIpXHJcbiAgICAgICAgICAgIC5jb25jYXQodG9GaXhlZChzICogMTAwKSwgXCIlLCBcIilcclxuICAgICAgICAgICAgLmNvbmNhdCh0b0ZpeGVkKGwgKiAxMDApLCBcIiUpXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIHJnYk1hdGNoID0gL15yZ2JhP1xcKFteXFwoXFwpXStcXCkkLztcclxuICAgIHZhciBoc2xNYXRjaCA9IC9eaHNsYT9cXChbXlxcKFxcKV0rXFwpJC87XHJcbiAgICB2YXIgaGV4TWF0Y2ggPSAvXiNbMC05YS1mXSskL2k7XHJcbiAgICBmdW5jdGlvbiBwYXJzZSgkY29sb3IpIHtcclxuICAgICAgICB2YXIgYyA9ICRjb2xvci50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoYy5tYXRjaChyZ2JNYXRjaCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlUkdCKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYy5tYXRjaChoc2xNYXRjaCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSFNMKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYy5tYXRjaChoZXhNYXRjaCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSGV4KGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa25vd25Db2xvcnMuaGFzKGMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDb2xvckJ5TmFtZShjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN5c3RlbUNvbG9ycy5oYXMoYykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFN5c3RlbUNvbG9yKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJGNvbG9yID09PSBcInRyYW5zcGFyZW50XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtyOiAwLCBnOiAwLCBiOiAwLCBhOiAwfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXROdW1iZXJzKCRjb2xvcikge1xyXG4gICAgICAgIHZhciBudW1iZXJzID0gW107XHJcbiAgICAgICAgdmFyIHByZXZQb3MgPSAwO1xyXG4gICAgICAgIHZhciBpc01pbmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBzdGFydEluZGV4ID0gJGNvbG9yLmluZGV4T2YoXCIoXCIpO1xyXG4gICAgICAgICRjb2xvciA9ICRjb2xvci5zdWJzdHJpbmcoc3RhcnRJbmRleCArIDEsICRjb2xvci5sZW5ndGggLSAxKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRjb2xvci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYyA9ICRjb2xvcltpXTtcclxuICAgICAgICAgICAgaWYgKChjID49IFwiMFwiICYmIGMgPD0gXCI5XCIpIHx8IGMgPT09IFwiLlwiIHx8IGMgPT09IFwiK1wiIHx8IGMgPT09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpc01pbmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNNaW5pbmcgJiYgKGMgPT09IFwiIFwiIHx8IGMgPT09IFwiLFwiKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVycy5wdXNoKCRjb2xvci5zdWJzdHJpbmcocHJldlBvcywgaSkpO1xyXG4gICAgICAgICAgICAgICAgaXNNaW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHByZXZQb3MgPSBpICsgMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNNaW5pbmcpIHtcclxuICAgICAgICAgICAgICAgIHByZXZQb3MgPSBpICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNNaW5pbmcpIHtcclxuICAgICAgICAgICAgbnVtYmVycy5wdXNoKCRjb2xvci5zdWJzdHJpbmcocHJldlBvcywgJGNvbG9yLmxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtYmVycztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE51bWJlcnNGcm9tU3RyaW5nKHN0ciwgcmFuZ2UsIHVuaXRzKSB7XHJcbiAgICAgICAgdmFyIHJhdyA9IGdldE51bWJlcnMoc3RyKTtcclxuICAgICAgICB2YXIgdW5pdHNMaXN0ID0gT2JqZWN0LmVudHJpZXModW5pdHMpO1xyXG4gICAgICAgIHZhciBudW1iZXJzID0gcmF3XHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByLnRyaW0oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAociwgaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG47XHJcbiAgICAgICAgICAgICAgICB2YXIgdW5pdCA9IHVuaXRzTGlzdC5maW5kKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHUgPSBfYlswXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gci5lbmRzV2l0aCh1KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVuaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKHBhcnNlRmxvYXQoci5zdWJzdHJpbmcoMCwgci5sZW5ndGggLSB1bml0WzBdLmxlbmd0aCkpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRbMV0pICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VbaV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG4gPSBwYXJzZUZsb2F0KHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlW2ldID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG47XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBudW1iZXJzO1xyXG4gICAgfVxyXG4gICAgdmFyIHJnYlJhbmdlID0gWzI1NSwgMjU1LCAyNTUsIDFdO1xyXG4gICAgdmFyIHJnYlVuaXRzID0ge1wiJVwiOiAxMDB9O1xyXG4gICAgZnVuY3Rpb24gcGFyc2VSR0IoJHJnYikge1xyXG4gICAgICAgIHZhciBfYSA9IF9fcmVhZChnZXROdW1iZXJzRnJvbVN0cmluZygkcmdiLCByZ2JSYW5nZSwgcmdiVW5pdHMpLCA0KSxcclxuICAgICAgICAgICAgciA9IF9hWzBdLFxyXG4gICAgICAgICAgICBnID0gX2FbMV0sXHJcbiAgICAgICAgICAgIGIgPSBfYVsyXSxcclxuICAgICAgICAgICAgX2IgPSBfYVszXSxcclxuICAgICAgICAgICAgYSA9IF9iID09PSB2b2lkIDAgPyAxIDogX2I7XHJcbiAgICAgICAgcmV0dXJuIHtyOiByLCBnOiBnLCBiOiBiLCBhOiBhfTtcclxuICAgIH1cclxuICAgIHZhciBoc2xSYW5nZSA9IFszNjAsIDEsIDEsIDFdO1xyXG4gICAgdmFyIGhzbFVuaXRzID0ge1wiJVwiOiAxMDAsIFwiZGVnXCI6IDM2MCwgXCJyYWRcIjogMiAqIE1hdGguUEksIFwidHVyblwiOiAxfTtcclxuICAgIGZ1bmN0aW9uIHBhcnNlSFNMKCRoc2wpIHtcclxuICAgICAgICB2YXIgX2EgPSBfX3JlYWQoZ2V0TnVtYmVyc0Zyb21TdHJpbmcoJGhzbCwgaHNsUmFuZ2UsIGhzbFVuaXRzKSwgNCksXHJcbiAgICAgICAgICAgIGggPSBfYVswXSxcclxuICAgICAgICAgICAgcyA9IF9hWzFdLFxyXG4gICAgICAgICAgICBsID0gX2FbMl0sXHJcbiAgICAgICAgICAgIF9iID0gX2FbM10sXHJcbiAgICAgICAgICAgIGEgPSBfYiA9PT0gdm9pZCAwID8gMSA6IF9iO1xyXG4gICAgICAgIHJldHVybiBoc2xUb1JHQih7aDogaCwgczogcywgbDogbCwgYTogYX0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VIZXgoJGhleCkge1xyXG4gICAgICAgIHZhciBoID0gJGhleC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgc3dpdGNoIChoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGNhc2UgNDoge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gX19yZWFkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoXCJcIi5jb25jYXQoaFtpXSkuY29uY2F0KGhbaV0pLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICByID0gX2FbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IF9hWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIGIgPSBfYVsyXTtcclxuICAgICAgICAgICAgICAgIHZhciBhID1cclxuICAgICAgICAgICAgICAgICAgICBoLmxlbmd0aCA9PT0gM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJzZUludChcIlwiLmNvbmNhdChoWzNdKS5jb25jYXQoaFszXSksIDE2KSAvIDI1NTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7cjogciwgZzogZywgYjogYiwgYTogYX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICBjYXNlIDg6IHtcclxuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzAsIDIsIDRdLm1hcChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGguc3Vic3RyaW5nKGksIGkgKyAyKSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgciA9IF9iWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBfYlsxXSxcclxuICAgICAgICAgICAgICAgICAgICBiID0gX2JbMl07XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9XHJcbiAgICAgICAgICAgICAgICAgICAgaC5sZW5ndGggPT09IDYgPyAxIDogcGFyc2VJbnQoaC5zdWJzdHJpbmcoNiwgOCksIDE2KSAvIDI1NTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7cjogciwgZzogZywgYjogYiwgYTogYX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvckJ5TmFtZSgkY29sb3IpIHtcclxuICAgICAgICB2YXIgbiA9IGtub3duQ29sb3JzLmdldCgkY29sb3IpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IChuID4+IDE2KSAmIDI1NSxcclxuICAgICAgICAgICAgZzogKG4gPj4gOCkgJiAyNTUsXHJcbiAgICAgICAgICAgIGI6IChuID4+IDApICYgMjU1LFxyXG4gICAgICAgICAgICBhOiAxXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFN5c3RlbUNvbG9yKCRjb2xvcikge1xyXG4gICAgICAgIHZhciBuID0gc3lzdGVtQ29sb3JzLmdldCgkY29sb3IpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IChuID4+IDE2KSAmIDI1NSxcclxuICAgICAgICAgICAgZzogKG4gPj4gOCkgJiAyNTUsXHJcbiAgICAgICAgICAgIGI6IChuID4+IDApICYgMjU1LFxyXG4gICAgICAgICAgICBhOiAxXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGxvd2VyQ2FsY0V4cHJlc3Npb24oY29sb3IpIHtcclxuICAgICAgICB2YXIgc2VhcmNoSW5kZXggPSAwO1xyXG4gICAgICAgIHZhciByZXBsYWNlQmV0d2VlbkluZGljZXMgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgcmVwbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgY29sb3IgPVxyXG4gICAgICAgICAgICAgICAgY29sb3Iuc3Vic3RyaW5nKDAsIHN0YXJ0KSArIHJlcGxhY2VtZW50ICsgY29sb3Iuc3Vic3RyaW5nKGVuZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aGlsZSAoKHNlYXJjaEluZGV4ID0gY29sb3IuaW5kZXhPZihcImNhbGMoXCIpKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIHJhbmdlID0gZ2V0UGFyZW50aGVzZXNSYW5nZShjb2xvciwgc2VhcmNoSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoIXJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc2xpY2UgPSBjb2xvci5zbGljZShyYW5nZS5zdGFydCArIDEsIHJhbmdlLmVuZCAtIDEpO1xyXG4gICAgICAgICAgICB2YXIgaW5jbHVkZXNQZXJjZW50YWdlID0gc2xpY2UuaW5jbHVkZXMoXCIlXCIpO1xyXG4gICAgICAgICAgICBzbGljZSA9IHNsaWNlLnNwbGl0KFwiJVwiKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gTWF0aC5yb3VuZChldmFsTWF0aChzbGljZSkpO1xyXG4gICAgICAgICAgICByZXBsYWNlQmV0d2VlbkluZGljZXMoXHJcbiAgICAgICAgICAgICAgICByYW5nZS5zdGFydCAtIDQsXHJcbiAgICAgICAgICAgICAgICByYW5nZS5lbmQsXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKyAoaW5jbHVkZXNQZXJjZW50YWdlID8gXCIlXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcbiAgICB2YXIga25vd25Db2xvcnMgPSBuZXcgTWFwKFxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHtcclxuICAgICAgICAgICAgYWxpY2VibHVlOiAweGYwZjhmZixcclxuICAgICAgICAgICAgYW50aXF1ZXdoaXRlOiAweGZhZWJkNyxcclxuICAgICAgICAgICAgYXF1YTogMHgwMGZmZmYsXHJcbiAgICAgICAgICAgIGFxdWFtYXJpbmU6IDB4N2ZmZmQ0LFxyXG4gICAgICAgICAgICBhenVyZTogMHhmMGZmZmYsXHJcbiAgICAgICAgICAgIGJlaWdlOiAweGY1ZjVkYyxcclxuICAgICAgICAgICAgYmlzcXVlOiAweGZmZTRjNCxcclxuICAgICAgICAgICAgYmxhY2s6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2QsXHJcbiAgICAgICAgICAgIGJsdWU6IDB4MDAwMGZmLFxyXG4gICAgICAgICAgICBibHVldmlvbGV0OiAweDhhMmJlMixcclxuICAgICAgICAgICAgYnJvd246IDB4YTUyYTJhLFxyXG4gICAgICAgICAgICBidXJseXdvb2Q6IDB4ZGViODg3LFxyXG4gICAgICAgICAgICBjYWRldGJsdWU6IDB4NWY5ZWEwLFxyXG4gICAgICAgICAgICBjaGFydHJldXNlOiAweDdmZmYwMCxcclxuICAgICAgICAgICAgY2hvY29sYXRlOiAweGQyNjkxZSxcclxuICAgICAgICAgICAgY29yYWw6IDB4ZmY3ZjUwLFxyXG4gICAgICAgICAgICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWQsXHJcbiAgICAgICAgICAgIGNvcm5zaWxrOiAweGZmZjhkYyxcclxuICAgICAgICAgICAgY3JpbXNvbjogMHhkYzE0M2MsXHJcbiAgICAgICAgICAgIGN5YW46IDB4MDBmZmZmLFxyXG4gICAgICAgICAgICBkYXJrYmx1ZTogMHgwMDAwOGIsXHJcbiAgICAgICAgICAgIGRhcmtjeWFuOiAweDAwOGI4YixcclxuICAgICAgICAgICAgZGFya2dvbGRlbnJvZDogMHhiODg2MGIsXHJcbiAgICAgICAgICAgIGRhcmtncmF5OiAweGE5YTlhOSxcclxuICAgICAgICAgICAgZGFya2dyZXk6IDB4YTlhOWE5LFxyXG4gICAgICAgICAgICBkYXJrZ3JlZW46IDB4MDA2NDAwLFxyXG4gICAgICAgICAgICBkYXJra2hha2k6IDB4YmRiNzZiLFxyXG4gICAgICAgICAgICBkYXJrbWFnZW50YTogMHg4YjAwOGIsXHJcbiAgICAgICAgICAgIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZixcclxuICAgICAgICAgICAgZGFya29yYW5nZTogMHhmZjhjMDAsXHJcbiAgICAgICAgICAgIGRhcmtvcmNoaWQ6IDB4OTkzMmNjLFxyXG4gICAgICAgICAgICBkYXJrcmVkOiAweDhiMDAwMCxcclxuICAgICAgICAgICAgZGFya3NhbG1vbjogMHhlOTk2N2EsXHJcbiAgICAgICAgICAgIGRhcmtzZWFncmVlbjogMHg4ZmJjOGYsXHJcbiAgICAgICAgICAgIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiLFxyXG4gICAgICAgICAgICBkYXJrc2xhdGVncmF5OiAweDJmNGY0ZixcclxuICAgICAgICAgICAgZGFya3NsYXRlZ3JleTogMHgyZjRmNGYsXHJcbiAgICAgICAgICAgIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxLFxyXG4gICAgICAgICAgICBkYXJrdmlvbGV0OiAweDk0MDBkMyxcclxuICAgICAgICAgICAgZGVlcHBpbms6IDB4ZmYxNDkzLFxyXG4gICAgICAgICAgICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmYsXHJcbiAgICAgICAgICAgIGRpbWdyYXk6IDB4Njk2OTY5LFxyXG4gICAgICAgICAgICBkaW1ncmV5OiAweDY5Njk2OSxcclxuICAgICAgICAgICAgZG9kZ2VyYmx1ZTogMHgxZTkwZmYsXHJcbiAgICAgICAgICAgIGZpcmVicmljazogMHhiMjIyMjIsXHJcbiAgICAgICAgICAgIGZsb3JhbHdoaXRlOiAweGZmZmFmMCxcclxuICAgICAgICAgICAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyLFxyXG4gICAgICAgICAgICBmdWNoc2lhOiAweGZmMDBmZixcclxuICAgICAgICAgICAgZ2FpbnNib3JvOiAweGRjZGNkYyxcclxuICAgICAgICAgICAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmYsXHJcbiAgICAgICAgICAgIGdvbGQ6IDB4ZmZkNzAwLFxyXG4gICAgICAgICAgICBnb2xkZW5yb2Q6IDB4ZGFhNTIwLFxyXG4gICAgICAgICAgICBncmF5OiAweDgwODA4MCxcclxuICAgICAgICAgICAgZ3JleTogMHg4MDgwODAsXHJcbiAgICAgICAgICAgIGdyZWVuOiAweDAwODAwMCxcclxuICAgICAgICAgICAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxyXG4gICAgICAgICAgICBob25leWRldzogMHhmMGZmZjAsXHJcbiAgICAgICAgICAgIGhvdHBpbms6IDB4ZmY2OWI0LFxyXG4gICAgICAgICAgICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjLFxyXG4gICAgICAgICAgICBpbmRpZ286IDB4NGIwMDgyLFxyXG4gICAgICAgICAgICBpdm9yeTogMHhmZmZmZjAsXHJcbiAgICAgICAgICAgIGtoYWtpOiAweGYwZTY4YyxcclxuICAgICAgICAgICAgbGF2ZW5kZXI6IDB4ZTZlNmZhLFxyXG4gICAgICAgICAgICBsYXZlbmRlcmJsdXNoOiAweGZmZjBmNSxcclxuICAgICAgICAgICAgbGF3bmdyZWVuOiAweDdjZmMwMCxcclxuICAgICAgICAgICAgbGVtb25jaGlmZm9uOiAweGZmZmFjZCxcclxuICAgICAgICAgICAgbGlnaHRibHVlOiAweGFkZDhlNixcclxuICAgICAgICAgICAgbGlnaHRjb3JhbDogMHhmMDgwODAsXHJcbiAgICAgICAgICAgIGxpZ2h0Y3lhbjogMHhlMGZmZmYsXHJcbiAgICAgICAgICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAweGZhZmFkMixcclxuICAgICAgICAgICAgbGlnaHRncmF5OiAweGQzZDNkMyxcclxuICAgICAgICAgICAgbGlnaHRncmV5OiAweGQzZDNkMyxcclxuICAgICAgICAgICAgbGlnaHRncmVlbjogMHg5MGVlOTAsXHJcbiAgICAgICAgICAgIGxpZ2h0cGluazogMHhmZmI2YzEsXHJcbiAgICAgICAgICAgIGxpZ2h0c2FsbW9uOiAweGZmYTA3YSxcclxuICAgICAgICAgICAgbGlnaHRzZWFncmVlbjogMHgyMGIyYWEsXHJcbiAgICAgICAgICAgIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmEsXHJcbiAgICAgICAgICAgIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OSxcclxuICAgICAgICAgICAgbGlnaHRzbGF0ZWdyZXk6IDB4Nzc4ODk5LFxyXG4gICAgICAgICAgICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGUsXHJcbiAgICAgICAgICAgIGxpZ2h0eWVsbG93OiAweGZmZmZlMCxcclxuICAgICAgICAgICAgbGltZTogMHgwMGZmMDAsXHJcbiAgICAgICAgICAgIGxpbWVncmVlbjogMHgzMmNkMzIsXHJcbiAgICAgICAgICAgIGxpbmVuOiAweGZhZjBlNixcclxuICAgICAgICAgICAgbWFnZW50YTogMHhmZjAwZmYsXHJcbiAgICAgICAgICAgIG1hcm9vbjogMHg4MDAwMDAsXHJcbiAgICAgICAgICAgIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhLFxyXG4gICAgICAgICAgICBtZWRpdW1ibHVlOiAweDAwMDBjZCxcclxuICAgICAgICAgICAgbWVkaXVtb3JjaGlkOiAweGJhNTVkMyxcclxuICAgICAgICAgICAgbWVkaXVtcHVycGxlOiAweDkzNzBkYixcclxuICAgICAgICAgICAgbWVkaXVtc2VhZ3JlZW46IDB4M2NiMzcxLFxyXG4gICAgICAgICAgICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlLFxyXG4gICAgICAgICAgICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWEsXHJcbiAgICAgICAgICAgIG1lZGl1bXR1cnF1b2lzZTogMHg0OGQxY2MsXHJcbiAgICAgICAgICAgIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODUsXHJcbiAgICAgICAgICAgIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzAsXHJcbiAgICAgICAgICAgIG1pbnRjcmVhbTogMHhmNWZmZmEsXHJcbiAgICAgICAgICAgIG1pc3R5cm9zZTogMHhmZmU0ZTEsXHJcbiAgICAgICAgICAgIG1vY2Nhc2luOiAweGZmZTRiNSxcclxuICAgICAgICAgICAgbmF2YWpvd2hpdGU6IDB4ZmZkZWFkLFxyXG4gICAgICAgICAgICBuYXZ5OiAweDAwMDA4MCxcclxuICAgICAgICAgICAgb2xkbGFjZTogMHhmZGY1ZTYsXHJcbiAgICAgICAgICAgIG9saXZlOiAweDgwODAwMCxcclxuICAgICAgICAgICAgb2xpdmVkcmFiOiAweDZiOGUyMyxcclxuICAgICAgICAgICAgb3JhbmdlOiAweGZmYTUwMCxcclxuICAgICAgICAgICAgb3JhbmdlcmVkOiAweGZmNDUwMCxcclxuICAgICAgICAgICAgb3JjaGlkOiAweGRhNzBkNixcclxuICAgICAgICAgICAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWEsXHJcbiAgICAgICAgICAgIHBhbGVncmVlbjogMHg5OGZiOTgsXHJcbiAgICAgICAgICAgIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlLFxyXG4gICAgICAgICAgICBwYWxldmlvbGV0cmVkOiAweGRiNzA5MyxcclxuICAgICAgICAgICAgcGFwYXlhd2hpcDogMHhmZmVmZDUsXHJcbiAgICAgICAgICAgIHBlYWNocHVmZjogMHhmZmRhYjksXHJcbiAgICAgICAgICAgIHBlcnU6IDB4Y2Q4NTNmLFxyXG4gICAgICAgICAgICBwaW5rOiAweGZmYzBjYixcclxuICAgICAgICAgICAgcGx1bTogMHhkZGEwZGQsXHJcbiAgICAgICAgICAgIHBvd2RlcmJsdWU6IDB4YjBlMGU2LFxyXG4gICAgICAgICAgICBwdXJwbGU6IDB4ODAwMDgwLFxyXG4gICAgICAgICAgICByZWJlY2NhcHVycGxlOiAweDY2MzM5OSxcclxuICAgICAgICAgICAgcmVkOiAweGZmMDAwMCxcclxuICAgICAgICAgICAgcm9zeWJyb3duOiAweGJjOGY4ZixcclxuICAgICAgICAgICAgcm95YWxibHVlOiAweDQxNjllMSxcclxuICAgICAgICAgICAgc2FkZGxlYnJvd246IDB4OGI0NTEzLFxyXG4gICAgICAgICAgICBzYWxtb246IDB4ZmE4MDcyLFxyXG4gICAgICAgICAgICBzYW5keWJyb3duOiAweGY0YTQ2MCxcclxuICAgICAgICAgICAgc2VhZ3JlZW46IDB4MmU4YjU3LFxyXG4gICAgICAgICAgICBzZWFzaGVsbDogMHhmZmY1ZWUsXHJcbiAgICAgICAgICAgIHNpZW5uYTogMHhhMDUyMmQsXHJcbiAgICAgICAgICAgIHNpbHZlcjogMHhjMGMwYzAsXHJcbiAgICAgICAgICAgIHNreWJsdWU6IDB4ODdjZWViLFxyXG4gICAgICAgICAgICBzbGF0ZWJsdWU6IDB4NmE1YWNkLFxyXG4gICAgICAgICAgICBzbGF0ZWdyYXk6IDB4NzA4MDkwLFxyXG4gICAgICAgICAgICBzbGF0ZWdyZXk6IDB4NzA4MDkwLFxyXG4gICAgICAgICAgICBzbm93OiAweGZmZmFmYSxcclxuICAgICAgICAgICAgc3ByaW5nZ3JlZW46IDB4MDBmZjdmLFxyXG4gICAgICAgICAgICBzdGVlbGJsdWU6IDB4NDY4MmI0LFxyXG4gICAgICAgICAgICB0YW46IDB4ZDJiNDhjLFxyXG4gICAgICAgICAgICB0ZWFsOiAweDAwODA4MCxcclxuICAgICAgICAgICAgdGhpc3RsZTogMHhkOGJmZDgsXHJcbiAgICAgICAgICAgIHRvbWF0bzogMHhmZjYzNDcsXHJcbiAgICAgICAgICAgIHR1cnF1b2lzZTogMHg0MGUwZDAsXHJcbiAgICAgICAgICAgIHZpb2xldDogMHhlZTgyZWUsXHJcbiAgICAgICAgICAgIHdoZWF0OiAweGY1ZGViMyxcclxuICAgICAgICAgICAgd2hpdGU6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICB3aGl0ZXNtb2tlOiAweGY1ZjVmNSxcclxuICAgICAgICAgICAgeWVsbG93OiAweGZmZmYwMCxcclxuICAgICAgICAgICAgeWVsbG93Z3JlZW46IDB4OWFjZDMyXHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgICB2YXIgc3lzdGVtQ29sb3JzID0gbmV3IE1hcChcclxuICAgICAgICBPYmplY3QuZW50cmllcyh7XHJcbiAgICAgICAgICAgIFwiQWN0aXZlQm9yZGVyXCI6IDB4M2I5OWZjLFxyXG4gICAgICAgICAgICBcIkFjdGl2ZUNhcHRpb25cIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiQXBwV29ya3NwYWNlXCI6IDB4YWFhYWFhLFxyXG4gICAgICAgICAgICBcIkJhY2tncm91bmRcIjogMHg2MzYzY2UsXHJcbiAgICAgICAgICAgIFwiQnV0dG9uRmFjZVwiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJCdXR0b25IaWdobGlnaHRcIjogMHhlOWU5ZTksXHJcbiAgICAgICAgICAgIFwiQnV0dG9uU2hhZG93XCI6IDB4OWZhMDlmLFxyXG4gICAgICAgICAgICBcIkJ1dHRvblRleHRcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiQ2FwdGlvblRleHRcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiR3JheVRleHRcIjogMHg3ZjdmN2YsXHJcbiAgICAgICAgICAgIFwiSGlnaGxpZ2h0XCI6IDB4YjJkN2ZmLFxyXG4gICAgICAgICAgICBcIkhpZ2hsaWdodFRleHRcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiSW5hY3RpdmVCb3JkZXJcIjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIFwiSW5hY3RpdmVDYXB0aW9uXCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIkluYWN0aXZlQ2FwdGlvblRleHRcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiSW5mb0JhY2tncm91bmRcIjogMHhmYmZjYzUsXHJcbiAgICAgICAgICAgIFwiSW5mb1RleHRcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiTWVudVwiOiAweGY2ZjZmNixcclxuICAgICAgICAgICAgXCJNZW51VGV4dFwiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJTY3JvbGxiYXJcIjogMHhhYWFhYWEsXHJcbiAgICAgICAgICAgIFwiVGhyZWVERGFya1NoYWRvd1wiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJUaHJlZURGYWNlXCI6IDB4YzBjMGMwLFxyXG4gICAgICAgICAgICBcIlRocmVlREhpZ2hsaWdodFwiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJUaHJlZURMaWdodFNoYWRvd1wiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJUaHJlZURTaGFkb3dcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiV2luZG93XCI6IDB4ZWNlY2VjLFxyXG4gICAgICAgICAgICBcIldpbmRvd0ZyYW1lXCI6IDB4YWFhYWFhLFxyXG4gICAgICAgICAgICBcIldpbmRvd1RleHRcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yXCI6IDB4ZTU5NzAwXHJcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDIpLFxyXG4gICAgICAgICAgICAgICAga2V5ID0gX2JbMF0sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IF9iWzFdO1xyXG4gICAgICAgICAgICByZXR1cm4gW2tleS50b0xvd2VyQ2FzZSgpLCB2YWx1ZV07XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgICBmdW5jdGlvbiBnZXRTUkdCTGlnaHRuZXNzKHIsIGcsIGIpIHtcclxuICAgICAgICByZXR1cm4gKDAuMjEyNiAqIHIgKyAwLjcxNTIgKiBnICsgMC4wNzIyICogYikgLyAyNTU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2NhbGUoeCwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSB7XHJcbiAgICAgICAgcmV0dXJuICgoeCAtIGluTG93KSAqIChvdXRIaWdoIC0gb3V0TG93KSkgLyAoaW5IaWdoIC0gaW5Mb3cpICsgb3V0TG93O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xhbXAoeCwgbWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHgpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG11bHRpcGx5TWF0cmljZXMobTEsIG0yKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBtMS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHRbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGxlbjIgPSBtMlswXS5sZW5ndGg7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDAsIGxlbjMgPSBtMVswXS5sZW5ndGg7IGsgPCBsZW4zOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gbTFbaV1ba10gKiBtMltrXVtqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXVtqXSA9IHN1bTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpbHRlck1hdHJpeChjb25maWcpIHtcclxuICAgICAgICB2YXIgbSA9IE1hdHJpeC5pZGVudGl0eSgpO1xyXG4gICAgICAgIGlmIChjb25maWcuc2VwaWEgIT09IDApIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LnNlcGlhKGNvbmZpZy5zZXBpYSAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmdyYXlzY2FsZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguZ3JheXNjYWxlKGNvbmZpZy5ncmF5c2NhbGUgLyAxMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5jb250cmFzdCAhPT0gMTAwKSB7XHJcbiAgICAgICAgICAgIG0gPSBtdWx0aXBseU1hdHJpY2VzKG0sIE1hdHJpeC5jb250cmFzdChjb25maWcuY29udHJhc3QgLyAxMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5icmlnaHRuZXNzICE9PSAxMDApIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LmJyaWdodG5lc3MoY29uZmlnLmJyaWdodG5lc3MgLyAxMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5tb2RlID09PSAxKSB7XHJcbiAgICAgICAgICAgIG0gPSBtdWx0aXBseU1hdHJpY2VzKG0sIE1hdHJpeC5pbnZlcnROSHVlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFwcGx5Q29sb3JNYXRyaXgoX2EsIG1hdHJpeCkge1xyXG4gICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMyksXHJcbiAgICAgICAgICAgIHIgPSBfYlswXSxcclxuICAgICAgICAgICAgZyA9IF9iWzFdLFxyXG4gICAgICAgICAgICBiID0gX2JbMl07XHJcbiAgICAgICAgdmFyIHJnYiA9IFtbciAvIDI1NV0sIFtnIC8gMjU1XSwgW2IgLyAyNTVdLCBbMV0sIFsxXV07XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG11bHRpcGx5TWF0cmljZXMobWF0cml4LCByZ2IpO1xyXG4gICAgICAgIHJldHVybiBbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjbGFtcChNYXRoLnJvdW5kKHJlc3VsdFtpXVswXSAqIDI1NSksIDAsIDI1NSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgTWF0cml4ID0ge1xyXG4gICAgICAgIGlkZW50aXR5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGludmVydE5IdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFswLjMzMywgLTAuNjY3LCAtMC42NjcsIDAsIDFdLFxyXG4gICAgICAgICAgICAgICAgWy0wLjY2NywgMC4zMzMsIC0wLjY2NywgMCwgMV0sXHJcbiAgICAgICAgICAgICAgICBbLTAuNjY3LCAtMC42NjcsIDAuMzMzLCAwLCAxXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJpZ2h0bmVzczogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFt2LCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCB2LCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCB2LCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udHJhc3Q6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gKDEgLSB2KSAvIDI7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbdiwgMCwgMCwgMCwgdF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgdiwgMCwgMCwgdF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgdiwgMCwgdF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcGlhOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMzkzICsgMC42MDcgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNzY5IC0gMC43NjkgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMTg5IC0gMC4xODkgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjM0OSAtIDAuMzQ5ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjY4NiArIDAuMzE0ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjE2OCAtIDAuMTY4ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4yNzIgLSAwLjI3MiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC41MzQgLSAwLjUzNCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4xMzEgKyAwLjg2OSAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmF5c2NhbGU6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4yMTI2ICsgMC43ODc0ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjcxNTIgLSAwLjcxNTIgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMDcyMiAtIDAuMDcyMiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMjEyNiAtIDAuMjEyNiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC43MTUyICsgMC4yODQ4ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjA3MjIgLSAwLjA3MjIgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjIxMjYgLSAwLjIxMjYgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNzE1MiAtIDAuNzE1MiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wNzIyICsgMC45Mjc4ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJnUG9sZSh0aGVtZSkge1xyXG4gICAgICAgIHZhciBpc0RhcmtTY2hlbWUgPSB0aGVtZS5tb2RlID09PSAxO1xyXG4gICAgICAgIHZhciBwcm9wID0gaXNEYXJrU2NoZW1lXHJcbiAgICAgICAgICAgID8gXCJkYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yXCJcclxuICAgICAgICAgICAgOiBcImxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoZW1lW3Byb3BdO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0RmdQb2xlKHRoZW1lKSB7XHJcbiAgICAgICAgdmFyIGlzRGFya1NjaGVtZSA9IHRoZW1lLm1vZGUgPT09IDE7XHJcbiAgICAgICAgdmFyIHByb3AgPSBpc0RhcmtTY2hlbWVcclxuICAgICAgICAgICAgPyBcImRhcmtTY2hlbWVUZXh0Q29sb3JcIlxyXG4gICAgICAgICAgICA6IFwibGlnaHRTY2hlbWVUZXh0Q29sb3JcIjtcclxuICAgICAgICByZXR1cm4gdGhlbWVbcHJvcF07XHJcbiAgICB9XHJcbiAgICB2YXIgY29sb3JNb2RpZmljYXRpb25DYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGNsZWFyQ29sb3JNb2RpZmljYXRpb25DYWNoZSgpIHtcclxuICAgICAgICBjb2xvck1vZGlmaWNhdGlvbkNhY2hlLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgcmdiQ2FjaGVLZXlzID0gW1wiclwiLCBcImdcIiwgXCJiXCIsIFwiYVwiXTtcclxuICAgIHZhciB0aGVtZUNhY2hlS2V5cyQxID0gW1xyXG4gICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgIFwiYnJpZ2h0bmVzc1wiLFxyXG4gICAgICAgIFwiY29udHJhc3RcIixcclxuICAgICAgICBcImdyYXlzY2FsZVwiLFxyXG4gICAgICAgIFwic2VwaWFcIixcclxuICAgICAgICBcImRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBcImRhcmtTY2hlbWVUZXh0Q29sb3JcIixcclxuICAgICAgICBcImxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgXCJsaWdodFNjaGVtZVRleHRDb2xvclwiXHJcbiAgICBdO1xyXG4gICAgZnVuY3Rpb24gZ2V0Q2FjaGVJZChyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdElkID0gXCJcIjtcclxuICAgICAgICByZ2JDYWNoZUtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdElkICs9IFwiXCIuY29uY2F0KHJnYltrZXldLCBcIjtcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhlbWVDYWNoZUtleXMkMS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgcmVzdWx0SWQgKz0gXCJcIi5jb25jYXQodGhlbWVba2V5XSwgXCI7XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRJZDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUNvbG9yV2l0aENhY2hlKFxyXG4gICAgICAgIHJnYixcclxuICAgICAgICB0aGVtZSxcclxuICAgICAgICBtb2RpZnlIU0wsXHJcbiAgICAgICAgcG9sZUNvbG9yLFxyXG4gICAgICAgIGFub3RoZXJQb2xlQ29sb3JcclxuICAgICkge1xyXG4gICAgICAgIHZhciBmbkNhY2hlO1xyXG4gICAgICAgIGlmIChjb2xvck1vZGlmaWNhdGlvbkNhY2hlLmhhcyhtb2RpZnlIU0wpKSB7XHJcbiAgICAgICAgICAgIGZuQ2FjaGUgPSBjb2xvck1vZGlmaWNhdGlvbkNhY2hlLmdldChtb2RpZnlIU0wpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZuQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuc2V0KG1vZGlmeUhTTCwgZm5DYWNoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpZCA9IGdldENhY2hlSWQocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgaWYgKGZuQ2FjaGUuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZm5DYWNoZS5nZXQoaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHNsID0gcmdiVG9IU0wocmdiKTtcclxuICAgICAgICB2YXIgcG9sZSA9IHBvbGVDb2xvciA9PSBudWxsID8gbnVsbCA6IHBhcnNlVG9IU0xXaXRoQ2FjaGUocG9sZUNvbG9yKTtcclxuICAgICAgICB2YXIgYW5vdGhlclBvbGUgPVxyXG4gICAgICAgICAgICBhbm90aGVyUG9sZUNvbG9yID09IG51bGxcclxuICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgOiBwYXJzZVRvSFNMV2l0aENhY2hlKGFub3RoZXJQb2xlQ29sb3IpO1xyXG4gICAgICAgIHZhciBtb2RpZmllZCA9IG1vZGlmeUhTTChoc2wsIHBvbGUsIGFub3RoZXJQb2xlKTtcclxuICAgICAgICB2YXIgX2EgPSBoc2xUb1JHQihtb2RpZmllZCksXHJcbiAgICAgICAgICAgIHIgPSBfYS5yLFxyXG4gICAgICAgICAgICBnID0gX2EuZyxcclxuICAgICAgICAgICAgYiA9IF9hLmIsXHJcbiAgICAgICAgICAgIGEgPSBfYS5hO1xyXG4gICAgICAgIHZhciBtYXRyaXggPSBjcmVhdGVGaWx0ZXJNYXRyaXgodGhlbWUpO1xyXG4gICAgICAgIHZhciBfYiA9IF9fcmVhZChhcHBseUNvbG9yTWF0cml4KFtyLCBnLCBiXSwgbWF0cml4KSwgMyksXHJcbiAgICAgICAgICAgIHJmID0gX2JbMF0sXHJcbiAgICAgICAgICAgIGdmID0gX2JbMV0sXHJcbiAgICAgICAgICAgIGJmID0gX2JbMl07XHJcbiAgICAgICAgdmFyIGNvbG9yID1cclxuICAgICAgICAgICAgYSA9PT0gMVxyXG4gICAgICAgICAgICAgICAgPyByZ2JUb0hleFN0cmluZyh7cjogcmYsIGc6IGdmLCBiOiBiZn0pXHJcbiAgICAgICAgICAgICAgICA6IHJnYlRvU3RyaW5nKHtyOiByZiwgZzogZ2YsIGI6IGJmLCBhOiBhfSk7XHJcbiAgICAgICAgZm5DYWNoZS5zZXQoaWQsIGNvbG9yKTtcclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBub29wSFNMKGhzbCkge1xyXG4gICAgICAgIHJldHVybiBoc2w7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUNvbG9yV2l0aENhY2hlKHJnYiwgdGhlbWUsIG5vb3BIU0wpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5TGlnaHRTY2hlbWVDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgdmFyIHBvbGVCZyA9IGdldEJnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgdmFyIHBvbGVGZyA9IGdldEZnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUNvbG9yV2l0aENhY2hlKFxyXG4gICAgICAgICAgICByZ2IsXHJcbiAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICBtb2RpZnlMaWdodE1vZGVIU0wsXHJcbiAgICAgICAgICAgIHBvbGVGZyxcclxuICAgICAgICAgICAgcG9sZUJnXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUxpZ2h0TW9kZUhTTChfYSwgcG9sZUZnLCBwb2xlQmcpIHtcclxuICAgICAgICB2YXIgaCA9IF9hLmgsXHJcbiAgICAgICAgICAgIHMgPSBfYS5zLFxyXG4gICAgICAgICAgICBsID0gX2EubCxcclxuICAgICAgICAgICAgYSA9IF9hLmE7XHJcbiAgICAgICAgdmFyIGlzRGFyayA9IGwgPCAwLjU7XHJcbiAgICAgICAgdmFyIGlzTmV1dHJhbDtcclxuICAgICAgICBpZiAoaXNEYXJrKSB7XHJcbiAgICAgICAgICAgIGlzTmV1dHJhbCA9IGwgPCAwLjIgfHwgcyA8IDAuMTI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGlzQmx1ZSA9IGggPiAyMDAgJiYgaCA8IDI4MDtcclxuICAgICAgICAgICAgaXNOZXV0cmFsID0gcyA8IDAuMjQgfHwgKGwgPiAwLjggJiYgaXNCbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh4ID0gaDtcclxuICAgICAgICB2YXIgc3ggPSBsO1xyXG4gICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgaWYgKGlzRGFyaykge1xyXG4gICAgICAgICAgICAgICAgaHggPSBwb2xlRmcuaDtcclxuICAgICAgICAgICAgICAgIHN4ID0gcG9sZUZnLnM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVCZy5oO1xyXG4gICAgICAgICAgICAgICAgc3ggPSBwb2xlQmcucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbHggPSBzY2FsZShsLCAwLCAxLCBwb2xlRmcubCwgcG9sZUJnLmwpO1xyXG4gICAgICAgIHJldHVybiB7aDogaHgsIHM6IHN4LCBsOiBseCwgYTogYX07XHJcbiAgICB9XHJcbiAgICB2YXIgTUFYX0JHX0xJR0hUTkVTUyA9IDAuNDtcclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJnSFNMKF9hLCBwb2xlKSB7XHJcbiAgICAgICAgdmFyIGggPSBfYS5oLFxyXG4gICAgICAgICAgICBzID0gX2EucyxcclxuICAgICAgICAgICAgbCA9IF9hLmwsXHJcbiAgICAgICAgICAgIGEgPSBfYS5hO1xyXG4gICAgICAgIHZhciBpc0RhcmsgPSBsIDwgMC41O1xyXG4gICAgICAgIHZhciBpc0JsdWUgPSBoID4gMjAwICYmIGggPCAyODA7XHJcbiAgICAgICAgdmFyIGlzTmV1dHJhbCA9IHMgPCAwLjEyIHx8IChsID4gMC44ICYmIGlzQmx1ZSk7XHJcbiAgICAgICAgaWYgKGlzRGFyaykge1xyXG4gICAgICAgICAgICB2YXIgbHhfMSA9IHNjYWxlKGwsIDAsIDAuNSwgMCwgTUFYX0JHX0xJR0hUTkVTUyk7XHJcbiAgICAgICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoeF8xID0gcG9sZS5oO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN4ID0gcG9sZS5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtoOiBoeF8xLCBzOiBzeCwgbDogbHhfMSwgYTogYX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtoOiBoLCBzOiBzLCBsOiBseF8xLCBhOiBhfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGx4ID0gc2NhbGUobCwgMC41LCAxLCBNQVhfQkdfTElHSFRORVNTLCBwb2xlLmwpO1xyXG4gICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgdmFyIGh4XzIgPSBwb2xlLmg7XHJcbiAgICAgICAgICAgIHZhciBzeCA9IHBvbGUucztcclxuICAgICAgICAgICAgcmV0dXJuIHtoOiBoeF8yLCBzOiBzeCwgbDogbHgsIGE6IGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHggPSBoO1xyXG4gICAgICAgIHZhciBpc1llbGxvdyA9IGggPiA2MCAmJiBoIDwgMTgwO1xyXG4gICAgICAgIGlmIChpc1llbGxvdykge1xyXG4gICAgICAgICAgICB2YXIgaXNDbG9zZXJUb0dyZWVuID0gaCA+IDEyMDtcclxuICAgICAgICAgICAgaWYgKGlzQ2xvc2VyVG9HcmVlbikge1xyXG4gICAgICAgICAgICAgICAgaHggPSBzY2FsZShoLCAxMjAsIDE4MCwgMTM1LCAxODApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaHggPSBzY2FsZShoLCA2MCwgMTIwLCA2MCwgMTA1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaHggPiA0MCAmJiBoeCA8IDgwKSB7XHJcbiAgICAgICAgICAgIGx4ICo9IDAuNzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7aDogaHgsIHM6IHMsIGw6IGx4LCBhOiBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lLm1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwb2xlID0gZ2V0QmdQb2xlKHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgICAgIHJnYixcclxuICAgICAgICAgICAgX19hc3NpZ24oX19hc3NpZ24oe30sIHRoZW1lKSwge21vZGU6IDB9KSxcclxuICAgICAgICAgICAgbW9kaWZ5QmdIU0wsXHJcbiAgICAgICAgICAgIHBvbGVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdmFyIE1JTl9GR19MSUdIVE5FU1MgPSAwLjU1O1xyXG4gICAgZnVuY3Rpb24gbW9kaWZ5Qmx1ZUZnSHVlKGh1ZSkge1xyXG4gICAgICAgIHJldHVybiBzY2FsZShodWUsIDIwNSwgMjQ1LCAyMDUsIDIyMCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlGZ0hTTChfYSwgcG9sZSkge1xyXG4gICAgICAgIHZhciBoID0gX2EuaCxcclxuICAgICAgICAgICAgcyA9IF9hLnMsXHJcbiAgICAgICAgICAgIGwgPSBfYS5sLFxyXG4gICAgICAgICAgICBhID0gX2EuYTtcclxuICAgICAgICB2YXIgaXNMaWdodCA9IGwgPiAwLjU7XHJcbiAgICAgICAgdmFyIGlzTmV1dHJhbCA9IGwgPCAwLjIgfHwgcyA8IDAuMjQ7XHJcbiAgICAgICAgdmFyIGlzQmx1ZSA9ICFpc05ldXRyYWwgJiYgaCA+IDIwNSAmJiBoIDwgMjQ1O1xyXG4gICAgICAgIGlmIChpc0xpZ2h0KSB7XHJcbiAgICAgICAgICAgIHZhciBseF8yID0gc2NhbGUobCwgMC41LCAxLCBNSU5fRkdfTElHSFRORVNTLCBwb2xlLmwpO1xyXG4gICAgICAgICAgICBpZiAoaXNOZXV0cmFsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaHhfMyA9IHBvbGUuaDtcclxuICAgICAgICAgICAgICAgIHZhciBzeCA9IHBvbGUucztcclxuICAgICAgICAgICAgICAgIHJldHVybiB7aDogaHhfMywgczogc3gsIGw6IGx4XzIsIGE6IGF9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBoeF80ID0gaDtcclxuICAgICAgICAgICAgaWYgKGlzQmx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaHhfNCA9IG1vZGlmeUJsdWVGZ0h1ZShoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge2g6IGh4XzQsIHM6IHMsIGw6IGx4XzIsIGE6IGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOZXV0cmFsKSB7XHJcbiAgICAgICAgICAgIHZhciBoeF81ID0gcG9sZS5oO1xyXG4gICAgICAgICAgICB2YXIgc3ggPSBwb2xlLnM7XHJcbiAgICAgICAgICAgIHZhciBseF8zID0gc2NhbGUobCwgMCwgMC41LCBwb2xlLmwsIE1JTl9GR19MSUdIVE5FU1MpO1xyXG4gICAgICAgICAgICByZXR1cm4ge2g6IGh4XzUsIHM6IHN4LCBsOiBseF8zLCBhOiBhfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh4ID0gaDtcclxuICAgICAgICB2YXIgbHg7XHJcbiAgICAgICAgaWYgKGlzQmx1ZSkge1xyXG4gICAgICAgICAgICBoeCA9IG1vZGlmeUJsdWVGZ0h1ZShoKTtcclxuICAgICAgICAgICAgbHggPSBzY2FsZShsLCAwLCAwLjUsIHBvbGUubCwgTWF0aC5taW4oMSwgTUlOX0ZHX0xJR0hUTkVTUyArIDAuMDUpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBseCA9IHNjYWxlKGwsIDAsIDAuNSwgcG9sZS5sLCBNSU5fRkdfTElHSFRORVNTKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtoOiBoeCwgczogcywgbDogbHgsIGE6IGF9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHJnYiwgdGhlbWUpIHtcclxuICAgICAgICBpZiAodGhlbWUubW9kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kaWZ5TGlnaHRTY2hlbWVDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBvbGUgPSBnZXRGZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlDb2xvcldpdGhDYWNoZShcclxuICAgICAgICAgICAgcmdiLFxyXG4gICAgICAgICAgICBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhlbWUpLCB7bW9kZTogMH0pLFxyXG4gICAgICAgICAgICBtb2RpZnlGZ0hTTCxcclxuICAgICAgICAgICAgcG9sZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCb3JkZXJIU0woX2EsIHBvbGVGZywgcG9sZUJnKSB7XHJcbiAgICAgICAgdmFyIGggPSBfYS5oLFxyXG4gICAgICAgICAgICBzID0gX2EucyxcclxuICAgICAgICAgICAgbCA9IF9hLmwsXHJcbiAgICAgICAgICAgIGEgPSBfYS5hO1xyXG4gICAgICAgIHZhciBpc0RhcmsgPSBsIDwgMC41O1xyXG4gICAgICAgIHZhciBpc05ldXRyYWwgPSBsIDwgMC4yIHx8IHMgPCAwLjI0O1xyXG4gICAgICAgIHZhciBoeCA9IGg7XHJcbiAgICAgICAgdmFyIHN4ID0gcztcclxuICAgICAgICBpZiAoaXNOZXV0cmFsKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0RhcmspIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gcG9sZUZnLmg7XHJcbiAgICAgICAgICAgICAgICBzeCA9IHBvbGVGZy5zO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaHggPSBwb2xlQmcuaDtcclxuICAgICAgICAgICAgICAgIHN4ID0gcG9sZUJnLnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGx4ID0gc2NhbGUobCwgMCwgMSwgMC41LCAwLjIpO1xyXG4gICAgICAgIHJldHVybiB7aDogaHgsIHM6IHN4LCBsOiBseCwgYTogYX07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCb3JkZXJDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lLm1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwb2xlRmcgPSBnZXRGZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIHZhciBwb2xlQmcgPSBnZXRCZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlDb2xvcldpdGhDYWNoZShcclxuICAgICAgICAgICAgcmdiLFxyXG4gICAgICAgICAgICBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhlbWUpLCB7bW9kZTogMH0pLFxyXG4gICAgICAgICAgICBtb2RpZnlCb3JkZXJIU0wsXHJcbiAgICAgICAgICAgIHBvbGVGZyxcclxuICAgICAgICAgICAgcG9sZUJnXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeVNoYWRvd0NvbG9yKHJnYiwgZmlsdGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIGZpbHRlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlHcmFkaWVudENvbG9yKHJnYiwgZmlsdGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIGZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGV4dFN0eWxlKGNvbmZpZykge1xyXG4gICAgICAgIHZhciBsaW5lcyA9IFtdO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICcqOm5vdChwcmUsIHByZSAqLCBjb2RlLCAuZmFyLCAuZmEsIC5nbHlwaGljb24sIFtjbGFzcyo9XCJ2anMtXCJdLCAuZmFiLCAuZmEtZ2l0aHViLCAuZmFzLCAubWF0ZXJpYWwtaWNvbnMsIC5pY29mb250LCAudHlwY24sIG11LCBbY2xhc3MqPVwibXUtXCJdLCAuZ2x5cGhpY29uLCAuaWNvbikgeydcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChjb25maWcudXNlRm9udCAmJiBjb25maWcuZm9udEZhbWlseSkge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgXCIgIGZvbnQtZmFtaWx5OiBcIi5jb25jYXQoY29uZmlnLmZvbnRGYW1pbHksIFwiICFpbXBvcnRhbnQ7XCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcudGV4dFN0cm9rZSA+IDApIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIFwiICAtd2Via2l0LXRleHQtc3Ryb2tlOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnRleHRTdHJva2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJweCAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBcIiAgdGV4dC1zdHJva2U6IFwiLmNvbmNhdChjb25maWcudGV4dFN0cm9rZSwgXCJweCAhaW1wb3J0YW50O1wiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgRmlsdGVyTW9kZTtcclxuICAgIChmdW5jdGlvbiAoRmlsdGVyTW9kZSkge1xyXG4gICAgICAgIEZpbHRlck1vZGVbKEZpbHRlck1vZGVbXCJsaWdodFwiXSA9IDApXSA9IFwibGlnaHRcIjtcclxuICAgICAgICBGaWx0ZXJNb2RlWyhGaWx0ZXJNb2RlW1wiZGFya1wiXSA9IDEpXSA9IFwiZGFya1wiO1xyXG4gICAgfSkoRmlsdGVyTW9kZSB8fCAoRmlsdGVyTW9kZSA9IHt9KSk7XHJcbiAgICBmdW5jdGlvbiBnZXRDU1NGaWx0ZXJWYWx1ZShjb25maWcpIHtcclxuICAgICAgICB2YXIgZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIGlmIChjb25maWcubW9kZSA9PT0gRmlsdGVyTW9kZS5kYXJrKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaChcImludmVydCgxMDAlKSBodWUtcm90YXRlKDE4MGRlZylcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuYnJpZ2h0bmVzcyAhPT0gMTAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaChcImJyaWdodG5lc3MoXCIuY29uY2F0KGNvbmZpZy5icmlnaHRuZXNzLCBcIiUpXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5jb250cmFzdCAhPT0gMTAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaChcImNvbnRyYXN0KFwiLmNvbmNhdChjb25maWcuY29udHJhc3QsIFwiJSlcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmdyYXlzY2FsZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goXCJncmF5c2NhbGUoXCIuY29uY2F0KGNvbmZpZy5ncmF5c2NhbGUsIFwiJSlcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLnNlcGlhICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaChcInNlcGlhKFwiLmNvbmNhdChjb25maWcuc2VwaWEsIFwiJSlcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWx0ZXJzLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvU1ZHTWF0cml4KG1hdHJpeCkge1xyXG4gICAgICAgIHJldHVybiBtYXRyaXhcclxuICAgICAgICAgICAgLnNsaWNlKDAsIDQpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS50b0ZpeGVkKDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbihcIiBcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTVkdGaWx0ZXJNYXRyaXhWYWx1ZShjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gdG9TVkdNYXRyaXgoY3JlYXRlRmlsdGVyTWF0cml4KGNvbmZpZykpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIHZhciByZXNvbHZlcnMkMSA9IG5ldyBNYXAoKTtcclxuICAgIHZhciByZWplY3RvcnMgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBiZ0ZldGNoKHJlcXVlc3QpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9ICsrY291bnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJzJDEuc2V0KGlkLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0b3JzLnNldChpZCwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuQ1NfRkVUQ0gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgdHlwZSA9IF9hLnR5cGUsXHJcbiAgICAgICAgICAgIGRhdGEgPSBfYS5kYXRhLFxyXG4gICAgICAgICAgICBlcnJvciA9IF9hLmVycm9yLFxyXG4gICAgICAgICAgICBpZCA9IF9hLmlkO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBNZXNzYWdlVHlwZS5CR19GRVRDSF9SRVNQT05TRSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzb2x2ZSA9IHJlc29sdmVycyQxLmdldChpZCk7XHJcbiAgICAgICAgICAgIHZhciByZWplY3QgPSByZWplY3RvcnMuZ2V0KGlkKTtcclxuICAgICAgICAgICAgcmVzb2x2ZXJzJDEuZGVsZXRlKGlkKTtcclxuICAgICAgICAgICAgcmVqZWN0b3JzLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0ICYmIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlICYmIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgQXN5bmNRdWV1ZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gQXN5bmNRdWV1ZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFzeW5jUXVldWUucHJvdG90eXBlLmFkZFRvUXVldWUgPSBmdW5jdGlvbiAoZW50cnkpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFF1ZXVlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBBc3luY1F1ZXVlLnByb3RvdHlwZS5zdG9wUXVldWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVySWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUgPSBbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEFzeW5jUXVldWUucHJvdG90eXBlLnN0YXJ0UXVldWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVySWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVySWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudGltZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNiO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKChjYiA9IF90aGlzLnF1ZXVlLnNoaWZ0KCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID49IF90aGlzLmZyYW1lRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhcnRRdWV1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIEFzeW5jUXVldWU7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciBpbWFnZU1hbmFnZXIgPSBuZXcgQXN5bmNRdWV1ZSgpO1xyXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2VEZXRhaWxzKHVybCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhVVJMLCBlcnJvcl8xLCBpbWFnZV8xLCBlcnJvcl8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVVJMID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZ2V0SW1hZ2VEYXRhVVJMKHVybCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVVJMID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcl8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbNCwgNiwgLCA3XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHVybFRvSW1hZ2UoZGF0YVVSTCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VNYW5hZ2VyLmFkZFRvUXVldWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fYXNzaWduKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFVUkw6IGRhdGFVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlXzEubmF0dXJhbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2VfMS5uYXR1cmFsSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHl6ZUltYWdlKGltYWdlXzEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yXzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2VEYXRhVVJMKHVybCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBhcnNlZFVSTDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkVVJMID0gbmV3IFVSTCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwYXJzZWRVUkwub3JpZ2luID09PSBsb2NhdGlvbi5vcmlnaW4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBsb2FkQXNEYXRhVVJMKHVybCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0ZldGNoKHt1cmw6IHVybCwgcmVzcG9uc2VUeXBlOiBcImRhdGEtdXJsXCJ9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVybFRvSW1hZ2UodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcIlVuYWJsZSB0byBsb2FkIGltYWdlIFwiLmNvbmNhdCh1cmwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBNQVhfQU5BTElaRV9QSVhFTFNfQ09VTlQgPSAzMiAqIDMyO1xyXG4gICAgdmFyIGNhbnZhcztcclxuICAgIHZhciBjb250ZXh0O1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHZhciBtYXhXaWR0aCA9IE1BWF9BTkFMSVpFX1BJWEVMU19DT1VOVDtcclxuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gTUFYX0FOQUxJWkVfUElYRUxTX0NPVU5UO1xyXG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gbWF4V2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG1heEhlaWdodDtcclxuICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2FudmFzKCkge1xyXG4gICAgICAgIGNhbnZhcyA9IG51bGw7XHJcbiAgICAgICAgY29udGV4dCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB2YXIgTUFYX0lNQUdFX1NJWkUgPSA1ICogMTAyNCAqIDEwMjQ7XHJcbiAgICBmdW5jdGlvbiBhbmFseXplSW1hZ2UoaW1hZ2UpIHtcclxuICAgICAgICBpZiAoIWNhbnZhcykge1xyXG4gICAgICAgICAgICBjcmVhdGVDYW52YXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IGltYWdlLm5hdHVyYWxXaWR0aCxcclxuICAgICAgICAgICAgbmF0dXJhbEhlaWdodCA9IGltYWdlLm5hdHVyYWxIZWlnaHQ7XHJcbiAgICAgICAgaWYgKG5hdHVyYWxIZWlnaHQgPT09IDAgfHwgbmF0dXJhbFdpZHRoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxvZ1dhcm4oXCJsb2dXYXJuKEltYWdlIGlzIGVtcHR5IFwiLmNvbmNhdChpbWFnZS5jdXJyZW50U3JjLCBcIilcIikpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNpemUgPSBuYXR1cmFsV2lkdGggKiBuYXR1cmFsSGVpZ2h0ICogNDtcclxuICAgICAgICBpZiAoc2l6ZSA+IE1BWF9JTUFHRV9TSVpFKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpc0Rhcms6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNMaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc1RyYW5zcGFyZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTGFyZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNUb29MYXJnZTogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmF0dXJhbFBpeGVsc0NvdW50ID0gbmF0dXJhbFdpZHRoICogbmF0dXJhbEhlaWdodDtcclxuICAgICAgICB2YXIgayA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICBNYXRoLnNxcnQoTUFYX0FOQUxJWkVfUElYRUxTX0NPVU5UIC8gbmF0dXJhbFBpeGVsc0NvdW50KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gTWF0aC5jZWlsKG5hdHVyYWxXaWR0aCAqIGspO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBNYXRoLmNlaWwobmF0dXJhbEhlaWdodCAqIGspO1xyXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxyXG4gICAgICAgICAgICBuYXR1cmFsSGVpZ2h0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgaW1hZ2VEYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdmFyIGQgPSBpbWFnZURhdGEuZGF0YTtcclxuICAgICAgICB2YXIgVFJBTlNQQVJFTlRfQUxQSEFfVEhSRVNIT0xEID0gMC4wNTtcclxuICAgICAgICB2YXIgREFSS19MSUdIVE5FU1NfVEhSRVNIT0xEID0gMC40O1xyXG4gICAgICAgIHZhciBMSUdIVF9MSUdIVE5FU1NfVEhSRVNIT0xEID0gMC43O1xyXG4gICAgICAgIHZhciB0cmFuc3BhcmVudFBpeGVsc0NvdW50ID0gMDtcclxuICAgICAgICB2YXIgZGFya1BpeGVsc0NvdW50ID0gMDtcclxuICAgICAgICB2YXIgbGlnaHRQaXhlbHNDb3VudCA9IDA7XHJcbiAgICAgICAgdmFyIGksIHgsIHk7XHJcbiAgICAgICAgdmFyIHIsIGcsIGIsIGE7XHJcbiAgICAgICAgdmFyIGw7XHJcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gNCAqICh5ICogd2lkdGggKyB4KTtcclxuICAgICAgICAgICAgICAgIHIgPSBkW2kgKyAwXTtcclxuICAgICAgICAgICAgICAgIGcgPSBkW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgIGIgPSBkW2kgKyAyXTtcclxuICAgICAgICAgICAgICAgIGEgPSBkW2kgKyAzXTtcclxuICAgICAgICAgICAgICAgIGlmIChhIC8gMjU1IDwgVFJBTlNQQVJFTlRfQUxQSEFfVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRQaXhlbHNDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsID0gZ2V0U1JHQkxpZ2h0bmVzcyhyLCBnLCBiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobCA8IERBUktfTElHSFRORVNTX1RIUkVTSE9MRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrUGl4ZWxzQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwgPiBMSUdIVF9MSUdIVE5FU1NfVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0UGl4ZWxzQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRvdGFsUGl4ZWxzQ291bnQgPSB3aWR0aCAqIGhlaWdodDtcclxuICAgICAgICB2YXIgb3BhcXVlUGl4ZWxzQ291bnQgPSB0b3RhbFBpeGVsc0NvdW50IC0gdHJhbnNwYXJlbnRQaXhlbHNDb3VudDtcclxuICAgICAgICB2YXIgREFSS19JTUFHRV9USFJFU0hPTEQgPSAwLjc7XHJcbiAgICAgICAgdmFyIExJR0hUX0lNQUdFX1RIUkVTSE9MRCA9IDAuNztcclxuICAgICAgICB2YXIgVFJBTlNQQVJFTlRfSU1BR0VfVEhSRVNIT0xEID0gMC4xO1xyXG4gICAgICAgIHZhciBMQVJHRV9JTUFHRV9QSVhFTFNfQ09VTlQgPSA4MDAgKiA2MDA7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNEYXJrOiBkYXJrUGl4ZWxzQ291bnQgLyBvcGFxdWVQaXhlbHNDb3VudCA+PSBEQVJLX0lNQUdFX1RIUkVTSE9MRCxcclxuICAgICAgICAgICAgaXNMaWdodDpcclxuICAgICAgICAgICAgICAgIGxpZ2h0UGl4ZWxzQ291bnQgLyBvcGFxdWVQaXhlbHNDb3VudCA+PSBMSUdIVF9JTUFHRV9USFJFU0hPTEQsXHJcbiAgICAgICAgICAgIGlzVHJhbnNwYXJlbnQ6XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudFBpeGVsc0NvdW50IC8gdG90YWxQaXhlbHNDb3VudCA+PVxyXG4gICAgICAgICAgICAgICAgVFJBTlNQQVJFTlRfSU1BR0VfVEhSRVNIT0xELFxyXG4gICAgICAgICAgICBpc0xhcmdlOiBuYXR1cmFsUGl4ZWxzQ291bnQgPj0gTEFSR0VfSU1BR0VfUElYRUxTX0NPVU5ULFxyXG4gICAgICAgICAgICBpc1Rvb0xhcmdlOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRGaWx0ZXJlZEltYWdlRGF0YVVSTChfYSwgdGhlbWUpIHtcclxuICAgICAgICB2YXIgZGF0YVVSTCA9IF9hLmRhdGFVUkwsXHJcbiAgICAgICAgICAgIHdpZHRoID0gX2Eud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgICAgICB2YXIgbWF0cml4ID0gZ2V0U1ZHRmlsdGVyTWF0cml4VmFsdWUodGhlbWUpO1xyXG4gICAgICAgIHZhciBzdmcgPSBbXHJcbiAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIidcclxuICAgICAgICAgICAgICAgIC5jb25jYXQod2lkdGgsICdcIiBoZWlnaHQ9XCInKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdChoZWlnaHQsICdcIj4nKSxcclxuICAgICAgICAgICAgXCI8ZGVmcz5cIixcclxuICAgICAgICAgICAgJzxmaWx0ZXIgaWQ9XCJkYXJrcmVhZGVyLWltYWdlLWZpbHRlclwiPicsXHJcbiAgICAgICAgICAgICc8ZmVDb2xvck1hdHJpeCB0eXBlPVwibWF0cml4XCIgdmFsdWVzPVwiJy5jb25jYXQobWF0cml4LCAnXCIgLz4nKSxcclxuICAgICAgICAgICAgXCI8L2ZpbHRlcj5cIixcclxuICAgICAgICAgICAgXCI8L2RlZnM+XCIsXHJcbiAgICAgICAgICAgICc8aW1hZ2Ugd2lkdGg9XCInXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KHdpZHRoLCAnXCIgaGVpZ2h0PVwiJylcclxuICAgICAgICAgICAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICdcIiBmaWx0ZXI9XCJ1cmwoI2RhcmtyZWFkZXItaW1hZ2UtZmlsdGVyKVwiIHhsaW5rOmhyZWY9XCInXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KGRhdGFVUkwsICdcIiAvPicpLFxyXG4gICAgICAgICAgICBcIjwvc3ZnPlwiXHJcbiAgICAgICAgXS5qb2luKFwiXCIpO1xyXG4gICAgICAgIHJldHVybiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCIuY29uY2F0KGJ0b2Eoc3ZnKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhbkltYWdlUHJvY2Vzc2luZ0NhY2hlKCkge1xyXG4gICAgICAgIGltYWdlTWFuYWdlciAmJiBpbWFnZU1hbmFnZXIuc3RvcFF1ZXVlKCk7XHJcbiAgICAgICAgcmVtb3ZlQ2FudmFzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdyYWRpZW50TGVuZ3RoID0gXCJncmFkaWVudFwiLmxlbmd0aDtcclxuICAgIHZhciBjb25pY0dyYWRpZW50ID0gXCJjb25pYy1cIjtcclxuICAgIHZhciBjb25pY0dyYWRpZW50TGVuZ3RoID0gY29uaWNHcmFkaWVudC5sZW5ndGg7XHJcbiAgICB2YXIgcmFkaWFsR3JhZGllbnQgPSBcInJhZGlhbC1cIjtcclxuICAgIHZhciBsaW5lYXJHcmFkaWVudCA9IFwibGluZWFyLVwiO1xyXG4gICAgZnVuY3Rpb24gcGFyc2VHcmFkaWVudCh2YWx1ZSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgICAgIHZhciBzdGFydEluZGV4ID0gY29uaWNHcmFkaWVudC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlR3JhZGllbnQ7XHJcbiAgICAgICAgICAgIFtsaW5lYXJHcmFkaWVudCwgcmFkaWFsR3JhZGllbnQsIGNvbmljR3JhZGllbnRdLmZpbmQoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgcG9zc2libGVUeXBlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc3NpYmxlR3JhZGllbnQgPSB2YWx1ZS5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NzaWJsZUdyYWRpZW50ID09PSBwb3NzaWJsZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2xpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoIC0gMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PT0gXCJyZXBlYXRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCA9IFwicmVwZWF0aW5nLVwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJncmFkaWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2xpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoIC0gOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApID09PSBcIi13ZWJraXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCA9IFwiLXdlYmtpdC1cIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3JhZGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCA9IFwiXCIuY29uY2F0KHBvc3NpYmxlVHlwZSwgXCJncmFkaWVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCF0eXBlR3JhZGllbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9hID0gZ2V0UGFyZW50aGVzZXNSYW5nZSh2YWx1ZSwgaW5kZXggKyBncmFkaWVudExlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IF9hLnN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgZW5kID0gX2EuZW5kO1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSB2YWx1ZS5zdWJzdHJpbmcoc3RhcnQgKyAxLCBlbmQgLSAxKTtcclxuICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZCArIDEgKyBjb25pY0dyYWRpZW50TGVuZ3RoO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQ6IHR5cGVHcmFkaWVudCxcclxuICAgICAgICAgICAgICAgIG1hdGNoOiBtYXRjaCxcclxuICAgICAgICAgICAgICAgIG9mZnNldDogdHlwZUdyYWRpZW50Lmxlbmd0aCArIDIsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXggLSB0eXBlR3JhZGllbnQubGVuZ3RoICsgZ3JhZGllbnRMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBoYXNDb21tYTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdoaWxlICgoaW5kZXggPSB2YWx1ZS5pbmRleE9mKFwiZ3JhZGllbnRcIiwgc3RhcnRJbmRleCkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEoKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlXzEgPT09IFwiYnJlYWtcIikgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0uaGFzQ29tbWEgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0eShydWxlU3R5bGUsIHByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocnVsZVN0eWxlICYmIHJ1bGVTdHlsZS5nZXRQcm9wZXJ0eVByaW9yaXR5KHByb3BlcnR5KSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNb2RpZmlhYmxlQ1NTRGVjbGFyYXRpb24oXHJcbiAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgcnVsZSxcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5LnN0YXJ0c1dpdGgoXCItLVwiKSkge1xyXG4gICAgICAgICAgICB2YXIgbW9kaWZpZXIgPSBnZXRWYXJpYWJsZU1vZGlmaWVyKFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKG1vZGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kaWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBnZXRQcmlvcml0eShydWxlLnN0eWxlLCBwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcyhcInZhcihcIikpIHtcclxuICAgICAgICAgICAgdmFyIG1vZGlmaWVyID0gZ2V0VmFyaWFibGVEZXBlbmRhbnRNb2RpZmllcihcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAobW9kaWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllcixcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGdldFByaW9yaXR5KHJ1bGUuc3R5bGUsIHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSBcImNvbG9yLXNjaGVtZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIChwcm9wZXJ0eS5pbmNsdWRlcyhcImNvbG9yXCIpICYmXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPT0gXCItd2Via2l0LXByaW50LWNvbG9yLWFkanVzdFwiKSB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJmaWxsXCIgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwic3Ryb2tlXCIgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwic3RvcC1jb2xvclwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2RpZmllciA9IGdldENvbG9yTW9kaWZpZXIocHJvcGVydHksIHZhbHVlLCBydWxlKTtcclxuICAgICAgICAgICAgaWYgKG1vZGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kaWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBnZXRQcmlvcml0eShydWxlLnN0eWxlLCBwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1pbWFnZVwiIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImxpc3Qtc3R5bGUtaW1hZ2VcIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgbW9kaWZpZXIgPSBnZXRCZ0ltYWdlTW9kaWZpZXIoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChtb2RpZmllcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogZ2V0UHJpb3JpdHkocnVsZS5zdHlsZSwgcHJvcGVydHkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkuaW5jbHVkZXMoXCJzaGFkb3dcIikpIHtcclxuICAgICAgICAgICAgdmFyIG1vZGlmaWVyID0gZ2V0U2hhZG93TW9kaWZpZXIodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAobW9kaWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllcixcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGdldFByaW9yaXR5KHJ1bGUuc3R5bGUsIHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBqb2luU2VsZWN0b3JzKCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RvcnMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy5maWx0ZXIoQm9vbGVhbikuam9pbihcIiwgXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TW9kaWZpZWRVc2VyQWdlbnRTdHlsZSh0aGVtZSwgaXNJRnJhbWUsIHN0eWxlU3lzdGVtQ29udHJvbHMpIHtcclxuICAgICAgICB2YXIgbGluZXMgPSBbXTtcclxuICAgICAgICBpZiAoIWlzSUZyYW1lKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJodG1sIHtcIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1fSwgdGhlbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0NTU0NvbG9yU2NoZW1lUHJvcFN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwiaHRtbCB7XCIpO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgXCIgICAgY29sb3Itc2NoZW1lOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUubW9kZSA9PT0gMSA/IFwiZGFya1wiIDogXCJkYXJrIGxpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJnU2VsZWN0b3JzID0gam9pblNlbGVjdG9ycyhcclxuICAgICAgICAgICAgaXNJRnJhbWUgPyBcIlwiIDogXCJodG1sLCBib2R5XCIsXHJcbiAgICAgICAgICAgIHN0eWxlU3lzdGVtQ29udHJvbHMgPyBcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24sIGRpYWxvZ1wiIDogXCJcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGJnU2VsZWN0b3JzKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJcIi5jb25jYXQoYmdTZWxlY3RvcnMsIFwiIHtcIikpO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmeUJhY2tncm91bmRDb2xvcih7cjogMjU1LCBnOiAyNTUsIGI6IDI1NX0sIHRoZW1lKSxcclxuICAgICAgICAgICAgICAgICAgICBcIjtcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgXCJcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBqb2luU2VsZWN0b3JzKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHRtbCwgYm9keVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU3lzdGVtQ29udHJvbHMgPyBcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b25cIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBcIiB7XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgXCIgICAgYm9yZGVyLWNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlCb3JkZXJDb2xvcih7cjogNzYsIGc6IDc2LCBiOiA3Nn0sIHRoZW1lKSxcclxuICAgICAgICAgICAgICAgIFwiO1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIFwiICAgIGNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDAsIGI6IDB9LCB0aGVtZSksXHJcbiAgICAgICAgICAgICAgICBcIjtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiYSB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIFwiICAgIGNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDY0LCBiOiAyNTV9LCB0aGVtZSksXHJcbiAgICAgICAgICAgICAgICBcIjtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwidGFibGUge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBcIiAgICBib3JkZXItY29sb3I6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIG1vZGlmeUJvcmRlckNvbG9yKHtyOiAxMjgsIGc6IDEyOCwgYjogMTI4fSwgdGhlbWUpLFxyXG4gICAgICAgICAgICAgICAgXCI7XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIjo6cGxhY2Vob2xkZXIge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBcIiAgICBjb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAxNjksIGc6IDE2OSwgYjogMTY5fSwgdGhlbWUpLFxyXG4gICAgICAgICAgICAgICAgXCI7XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcImlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLFwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwic2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGwge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI1MCwgZzogMjU1LCBiOiAxODl9LCB0aGVtZSksXHJcbiAgICAgICAgICAgICAgICBcIiAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIFwiICAgIGNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDAsIGI6IDB9LCB0aGVtZSksXHJcbiAgICAgICAgICAgICAgICBcIiAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGlmICh0aGVtZS5zY3JvbGxiYXJDb2xvcikge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGdldE1vZGlmaWVkU2Nyb2xsYmFyU3R5bGUodGhlbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoZW1lLnNlbGVjdGlvbkNvbG9yKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goZ2V0TW9kaWZpZWRTZWxlY3Rpb25TdHlsZSh0aGVtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdGlvbkNvbG9yKHRoZW1lKSB7XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmRDb2xvclNlbGVjdGlvbjtcclxuICAgICAgICB2YXIgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uO1xyXG4gICAgICAgIGlmICh0aGVtZS5zZWxlY3Rpb25Db2xvciA9PT0gXCJhdXRvXCIpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKFxyXG4gICAgICAgICAgICAgICAge3I6IDAsIGc6IDk2LCBiOiAyMTJ9LFxyXG4gICAgICAgICAgICAgICAgX19hc3NpZ24oX19hc3NpZ24oe30sIHRoZW1lKSwge2dyYXlzY2FsZTogMH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9IG1vZGlmeUZvcmVncm91bmRDb2xvcihcclxuICAgICAgICAgICAgICAgIHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1fSxcclxuICAgICAgICAgICAgICAgIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGVtZSksIHtncmF5c2NhbGU6IDB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHRoZW1lLnNlbGVjdGlvbkNvbG9yKTtcclxuICAgICAgICAgICAgdmFyIGhzbCA9IHJnYlRvSFNMKHJnYik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclNlbGVjdGlvbiA9IHRoZW1lLnNlbGVjdGlvbkNvbG9yO1xyXG4gICAgICAgICAgICBpZiAoaHNsLmwgPCAwLjUpIHtcclxuICAgICAgICAgICAgICAgIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9IFwiI0ZGRlwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uID0gXCIjMDAwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uOiBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24sXHJcbiAgICAgICAgICAgIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbjogZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVkU2VsZWN0aW9uU3R5bGUodGhlbWUpIHtcclxuICAgICAgICB2YXIgbGluZXMgPSBbXTtcclxuICAgICAgICB2YXIgbW9kaWZpZWRTZWxlY3Rpb25Db2xvciA9IGdldFNlbGVjdGlvbkNvbG9yKHRoZW1lKTtcclxuICAgICAgICB2YXIgYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uID1cclxuICAgICAgICAgICAgbW9kaWZpZWRTZWxlY3Rpb25Db2xvci5iYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb247XHJcbiAgICAgICAgdmFyIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9XHJcbiAgICAgICAgICAgIG1vZGlmaWVkU2VsZWN0aW9uQ29sb3IuZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uO1xyXG4gICAgICAgIFtcIjo6c2VsZWN0aW9uXCIsIFwiOjotbW96LXNlbGVjdGlvblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIlwiLmNvbmNhdChzZWxlY3Rpb24sIFwiIHtcIikpO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclNlbGVjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBcIiAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBcIiAgICBjb2xvcjogXCIuY29uY2F0KGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiwgXCIgIWltcG9ydGFudDtcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNb2RpZmllZFNjcm9sbGJhclN0eWxlKHRoZW1lKSB7XHJcbiAgICAgICAgdmFyIGxpbmVzID0gW107XHJcbiAgICAgICAgdmFyIGNvbG9yVHJhY2s7XHJcbiAgICAgICAgdmFyIGNvbG9ySWNvbnM7XHJcbiAgICAgICAgdmFyIGNvbG9yVGh1bWI7XHJcbiAgICAgICAgdmFyIGNvbG9yVGh1bWJIb3ZlcjtcclxuICAgICAgICB2YXIgY29sb3JUaHVtYkFjdGl2ZTtcclxuICAgICAgICB2YXIgY29sb3JDb3JuZXI7XHJcbiAgICAgICAgaWYgKHRoZW1lLnNjcm9sbGJhckNvbG9yID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBjb2xvclRyYWNrID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAyNDEsIGc6IDI0MSwgYjogMjQxfSwgdGhlbWUpO1xyXG4gICAgICAgICAgICBjb2xvckljb25zID0gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiA5NiwgZzogOTYsIGI6IDk2fSwgdGhlbWUpO1xyXG4gICAgICAgICAgICBjb2xvclRodW1iID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAxNzYsIGc6IDE3NiwgYjogMTc2fSwgdGhlbWUpO1xyXG4gICAgICAgICAgICBjb2xvclRodW1iSG92ZXIgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgICAgICB7cjogMTQ0LCBnOiAxNDQsIGI6IDE0NH0sXHJcbiAgICAgICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb2xvclRodW1iQWN0aXZlID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKFxyXG4gICAgICAgICAgICAgICAge3I6IDk2LCBnOiA5NiwgYjogOTZ9LFxyXG4gICAgICAgICAgICAgICAgdGhlbWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29sb3JDb3JuZXIgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgICAgICB7cjogMjU1LCBnOiAyNTUsIGI6IDI1NX0sXHJcbiAgICAgICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHRoZW1lLnNjcm9sbGJhckNvbG9yKTtcclxuICAgICAgICAgICAgdmFyIGhzbF8xID0gcmdiVG9IU0wocmdiKTtcclxuICAgICAgICAgICAgdmFyIGlzTGlnaHQgPSBoc2xfMS5sID4gMC41O1xyXG4gICAgICAgICAgICB2YXIgbGlnaHRlbiA9IGZ1bmN0aW9uIChsaWdodGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGhzbF8xKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGw6IGNsYW1wKGhzbF8xLmwgKyBsaWdodGVyLCAwLCAxKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBkYXJrZW4gPSBmdW5jdGlvbiAoZGFya2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGhzbF8xKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGw6IGNsYW1wKGhzbF8xLmwgLSBkYXJrZXIsIDAsIDEpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29sb3JUcmFjayA9IGhzbFRvU3RyaW5nKGRhcmtlbigwLjQpKTtcclxuICAgICAgICAgICAgY29sb3JJY29ucyA9IGhzbFRvU3RyaW5nKGlzTGlnaHQgPyBkYXJrZW4oMC40KSA6IGxpZ2h0ZW4oMC40KSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWIgPSBoc2xUb1N0cmluZyhoc2xfMSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWJIb3ZlciA9IGhzbFRvU3RyaW5nKGxpZ2h0ZW4oMC4xKSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWJBY3RpdmUgPSBoc2xUb1N0cmluZyhsaWdodGVuKDAuMikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjotd2Via2l0LXNjcm9sbGJhciB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGNvbG9yVHJhY2ssIFwiO1wiKSk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIiAgICBjb2xvcjogXCIuY29uY2F0KGNvbG9ySWNvbnMsIFwiO1wiKSk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiICAgIGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChjb2xvclRodW1iLCBcIjtcIikpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoY29sb3JUaHVtYkhvdmVyLCBcIjtcIikpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGNvbG9yVGh1bWJBY3RpdmUsIFwiO1wiKSk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoY29sb3JDb3JuZXIsIFwiO1wiKSk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgaWYgKGlzRmlyZWZveCkge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwiKiB7XCIpO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgXCIgICAgc2Nyb2xsYmFyLWNvbG9yOiBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQoY29sb3JUaHVtYiwgXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChjb2xvclRyYWNrLCBcIjtcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TW9kaWZpZWRGYWxsYmFja1N0eWxlKGZpbHRlciwgX2EpIHtcclxuICAgICAgICB2YXIgc3RyaWN0ID0gX2Euc3RyaWN0O1xyXG4gICAgICAgIHZhciBsaW5lcyA9IFtdO1xyXG4gICAgICAgIHZhciBpc01pY3Jvc29mdCA9IFtcIm1pY3Jvc29mdC5jb21cIiwgXCJkb2NzLm1pY3Jvc29mdC5jb21cIl0uaW5jbHVkZXMoXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhvc3RuYW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBcImh0bWwsIGJvZHksIFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIHN0cmljdFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJib2R5IDpub3QoaWZyYW1lKVwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc01pY3Jvc29mdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICc6bm90KGRpdltzdHlsZV49XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0Oi1cIl0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJib2R5ID4gOm5vdChpZnJhbWUpXCIsXHJcbiAgICAgICAgICAgICAgICBcIiB7XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1fSwgZmlsdGVyKSxcclxuICAgICAgICAgICAgICAgIFwiICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgXCIgICAgYm9yZGVyLWNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlCb3JkZXJDb2xvcih7cjogNjQsIGc6IDY0LCBiOiA2NH0sIGZpbHRlciksXHJcbiAgICAgICAgICAgICAgICBcIiAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIFwiICAgIGNvbG9yOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDAsIGI6IDB9LCBmaWx0ZXIpLFxyXG4gICAgICAgICAgICAgICAgXCIgIWltcG9ydGFudDtcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIHZhciB1bnBhcnNhYmxlQ29sb3JzID0gbmV3IFNldChbXHJcbiAgICAgICAgXCJpbmhlcml0XCIsXHJcbiAgICAgICAgXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIFwiaW5pdGlhbFwiLFxyXG4gICAgICAgIFwiY3VycmVudGNvbG9yXCIsXHJcbiAgICAgICAgXCJub25lXCIsXHJcbiAgICAgICAgXCJ1bnNldFwiXHJcbiAgICBdKTtcclxuICAgIGZ1bmN0aW9uIGdldENvbG9yTW9kaWZpZXIocHJvcCwgdmFsdWUsIHJ1bGUpIHtcclxuICAgICAgICBpZiAodW5wYXJzYWJsZUNvbG9ycy5oYXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZSh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKCFyZ2IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wLmluY2x1ZGVzKFwiYmFja2dyb3VuZFwiKSkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAocnVsZS5zdHlsZS53ZWJraXRNYXNrSW1hZ2UgJiZcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLndlYmtpdE1hc2tJbWFnZSAhPT0gXCJub25lXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAocnVsZS5zdHlsZS53ZWJraXRNYXNrICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXJ1bGUuc3R5bGUud2Via2l0TWFzay5zdGFydHNXaXRoKFwibm9uZVwiKSkgfHxcclxuICAgICAgICAgICAgICAgIChydWxlLnN0eWxlLm1hc2sgJiYgcnVsZS5zdHlsZS5tYXNrICE9PSBcIm5vbmVcIikgfHxcclxuICAgICAgICAgICAgICAgIChydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJtYXNrLWltYWdlXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibWFzay1pbWFnZVwiKSAhPT0gXCJub25lXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHJnYiwgZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IocmdiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcC5pbmNsdWRlcyhcImJvcmRlclwiKSB8fCBwcm9wLmluY2x1ZGVzKFwib3V0bGluZVwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUJvcmRlckNvbG9yKHJnYiwgZmlsdGVyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUZvcmVncm91bmRDb2xvcihyZ2IsIGZpbHRlcik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHZhciBpbWFnZURldGFpbHNDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIHZhciBhd2FpdGluZ0ZvckltYWdlTG9hZGluZyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIHNob3VsZElnbm9yZUltYWdlKHNlbGVjdG9yVGV4dCwgc2VsZWN0b3JzKSB7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RvclRleHQgfHwgc2VsZWN0b3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgc2VsZWN0b3JzLnNvbWUoZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzID09PSBcIipcIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBydWxlU2VsZWN0b3JzID0gc2VsZWN0b3JUZXh0LnNwbGl0KC8sXFxzKi9nKTtcclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciBpZ25vcmVkU2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHJ1bGVTZWxlY3RvcnMuc29tZShmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzID09PSBpZ25vcmVkU2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IHRydWV9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEoaSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGVfMSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIHN0YXRlXzEudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEJnSW1hZ2VNb2RpZmllcihcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBydWxlLFxyXG4gICAgICAgIGlnbm9yZUltYWdlU2VsZWN0b3JzLFxyXG4gICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICApIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBncmFkaWVudHMgPSBwYXJzZUdyYWRpZW50KHZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIHVybHMgPSBnZXRNYXRjaGVzKGNzc1VSTFJlZ2V4LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh1cmxzLmxlbmd0aCA9PT0gMCAmJiBncmFkaWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGdldEluZGljZXMgPSBmdW5jdGlvbiAobWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzLm1hcChmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVJbmRleCA9IHZhbHVlLmluZGV4T2YobWF0Y2gsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHZhbHVlSW5kZXggKyBtYXRjaC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHttYXRjaDogbWF0Y2gsIGluZGV4OiB2YWx1ZUluZGV4fTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hlc18xID0gZ3JhZGllbnRzXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt0eXBlOiBcImdyYWRpZW50XCJ9LCBpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEluZGljZXModXJscykubWFwKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbih7dHlwZTogXCJ1cmxcIiwgb2Zmc2V0OiAwfSwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggPiBiLmluZGV4ID8gMSA6IC0xO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBnZXRHcmFkaWVudE1vZGlmaWVyXzEgPSBmdW5jdGlvbiAoZ3JhZGllbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0eXBlR3JhZGllbnQgPSBncmFkaWVudC50eXBlR3JhZGllbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBncmFkaWVudC5tYXRjaCxcclxuICAgICAgICAgICAgICAgICAgICBoYXNDb21tYSA9IGdyYWRpZW50Lmhhc0NvbW1hO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcnRzUmVnZXggPVxyXG4gICAgICAgICAgICAgICAgICAgIC8oW15cXChcXCksXSsoXFwoW15cXChcXCldKihcXChbXlxcKFxcKV0qXFwpKlteXFwoXFwpXSopP1xcKSk/KFteXFwoXFwpLCBdfCggKD8hY2FsYykpKSopLD8vZztcclxuICAgICAgICAgICAgICAgIHZhciBjb2xvclN0b3BSZWdleCA9XHJcbiAgICAgICAgICAgICAgICAgICAgL14oZnJvbXxjb2xvci1zdG9wfHRvKVxcKChbXlxcKFxcKV0qPyxcXHMqKT8oLio/KVxcKSQvO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcnRzID0gZ2V0TWF0Y2hlcyhwYXJ0c1JlZ2V4LCBtYXRjaCwgMSkubWFwKGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0XHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUocGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJnYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUdyYWRpZW50Q29sb3IocmdiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3BhY2UgPSBwYXJ0Lmxhc3RJbmRleE9mKFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHBhcnQuc3Vic3RyaW5nKDAsIHNwYWNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJnYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KG1vZGlmeUdyYWRpZW50Q29sb3IocmdiLCBmaWx0ZXIpLCBcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHBhcnQuc3Vic3RyaW5nKHNwYWNlICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3JTdG9wTWF0Y2ggPSBwYXJ0Lm1hdGNoKGNvbG9yU3RvcFJlZ2V4KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3JTdG9wTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShjb2xvclN0b3BNYXRjaFszXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChjb2xvclN0b3BNYXRjaFsxXSwgXCIoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvclN0b3BNYXRjaFsyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIi5jb25jYXQoY29sb3JTdG9wTWF0Y2hbMl0sIFwiLCBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5R3JhZGllbnRDb2xvcihyZ2IsIGZpbHRlciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFydDtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQodHlwZUdyYWRpZW50LCBcIihcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobW9kaWZ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnkoZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoaGFzQ29tbWEgPyBcIiwgXCIgOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBnZXRVUkxNb2RpZmllcl8xID0gZnVuY3Rpb24gKHVybFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkSWdub3JlSW1hZ2UocnVsZS5zZWxlY3RvclRleHQsIGlnbm9yZUltYWdlU2VsZWN0b3JzKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gZ2V0Q1NTVVJMVmFsdWUodXJsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzVVJMRW1wdHkgPSB1cmwubGVuZ3RoID09PSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudFN0eWxlU2hlZXQgPSBydWxlLnBhcmVudFN0eWxlU2hlZXQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzZVVSTCA9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50U3R5bGVTaGVldCAmJiBwYXJlbnRTdHlsZVNoZWV0LmhyZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBnZXRDU1NCYXNlQmF0aChwYXJlbnRTdHlsZVNoZWV0LmhyZWYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKChfYSA9IHBhcmVudFN0eWxlU2hlZXQub3duZXJOb2RlKSA9PT0gbnVsbCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9hID09PSB2b2lkIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB2b2lkIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYS5iYXNlVVJJKSB8fCBsb2NhdGlvbi5vcmlnaW47XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBnZXRBYnNvbHV0ZVVSTChiYXNlVVJMLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFic29sdXRlVmFsdWUgPSAndXJsKFwiJy5jb25jYXQodXJsLCAnXCIpJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZURldGFpbHMsIGF3YWl0ZXJzXzEsIGVycl8xLCBiZ0ltYWdlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1VSTEVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIFwidXJsKCcnKVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWltYWdlRGV0YWlsc0NhY2hlLmhhcyh1cmwpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzID0gaW1hZ2VEZXRhaWxzQ2FjaGUuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDYsICwgN10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmhhcyh1cmwpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRlcnNfMSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdGVyc18xLnB1c2gocmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWltYWdlRGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuc2V0KHVybCwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGdldEltYWdlRGV0YWlscyh1cmwpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzQ2FjaGUuc2V0KHVybCwgaW1hZ2VEZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpbWFnZURldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmRlbGV0ZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDYW5jZWxsZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1dhcm4oZXJyXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuaGFzKHVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5kZWxldGUodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGFic29sdXRlVmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdJbWFnZVZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEJnSW1hZ2VWYWx1ZV8xKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfHwgYWJzb2x1dGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBiZ0ltYWdlVmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBnZXRCZ0ltYWdlVmFsdWVfMSA9IGZ1bmN0aW9uIChpbWFnZURldGFpbHMsIGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzRGFyayA9IGltYWdlRGV0YWlscy5pc0RhcmssXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMaWdodCA9IGltYWdlRGV0YWlscy5pc0xpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzVHJhbnNwYXJlbnQgPSBpbWFnZURldGFpbHMuaXNUcmFuc3BhcmVudCxcclxuICAgICAgICAgICAgICAgICAgICBpc0xhcmdlID0gaW1hZ2VEZXRhaWxzLmlzTGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNUb29MYXJnZSA9IGltYWdlRGV0YWlscy5pc1Rvb0xhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gaW1hZ2VEZXRhaWxzLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGlmIChpc1Rvb0xhcmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gJ3VybChcIicuY29uY2F0KGltYWdlRGV0YWlscy5zcmMsICdcIiknKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgaXNEYXJrICYmXHJcbiAgICAgICAgICAgICAgICAgICAgaXNUcmFuc3BhcmVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5tb2RlID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWlzTGFyZ2UgJiZcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA+IDJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oXCJJbnZlcnRpbmcgZGFyayBpbWFnZSBcIi5jb25jYXQoaW1hZ2VEZXRhaWxzLnNyYykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnZlcnRlZCA9IGdldEZpbHRlcmVkSW1hZ2VEYXRhVVJMKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fYXNzaWduKF9fYXNzaWduKHt9LCBmaWx0ZXIpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBpYTogY2xhbXAoZmlsdGVyLnNlcGlhICsgMTAsIDAsIDEwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICd1cmwoXCInLmNvbmNhdChpbnZlcnRlZCwgJ1wiKScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0xpZ2h0ICYmICFpc1RyYW5zcGFyZW50ICYmIGZpbHRlci5tb2RlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGFyZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGltbWluZyBsaWdodCBpbWFnZSBcIi5jb25jYXQoaW1hZ2VEZXRhaWxzLnNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpbW1lZCA9IGdldEZpbHRlcmVkSW1hZ2VEYXRhVVJMKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICd1cmwoXCInLmNvbmNhdChkaW1tZWQsICdcIiknKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlci5tb2RlID09PSAwICYmIGlzTGlnaHQgJiYgIWlzTGFyZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFwcGx5aW5nIGZpbHRlciB0byBpbWFnZSBcIi5jb25jYXQoaW1hZ2VEZXRhaWxzLnNyYylcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJlZCA9IGdldEZpbHRlcmVkSW1hZ2VEYXRhVVJMKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fYXNzaWduKF9fYXNzaWduKHt9LCBmaWx0ZXIpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmlnaHRuZXNzOiBjbGFtcChmaWx0ZXIuYnJpZ2h0bmVzcyAtIDEwLCA1LCAyMDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwaWE6IGNsYW1wKGZpbHRlci5zZXBpYSArIDEwLCAwLCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAndXJsKFwiJy5jb25jYXQoZmlsdGVyZWQsICdcIiknKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBtb2RpZmllcnNfMSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hJbmRleF8xID0gMDtcclxuICAgICAgICAgICAgdmFyIHByZXZIYXNDb21tYV8xID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1hdGNoZXNfMS5mb3JFYWNoKGZ1bmN0aW9uIChfYSwgaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBfYS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gX2EubWF0Y2gsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBfYS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQgPSBfYS50eXBlR3JhZGllbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29tbWEgPSBfYS5oYXNDb21tYSxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBfYS5vZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hTdGFydCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgdmFyIHByZWZpeFN0YXJ0ID0gbWF0Y2hJbmRleF8xO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoRW5kID0gbWF0Y2hTdGFydCArIG1hdGNoLmxlbmd0aCArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgIG1hdGNoSW5kZXhfMSA9IG1hdGNoRW5kO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeFN0YXJ0ICE9PSBtYXRjaFN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZIYXNDb21tYV8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyc18xLnB1c2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJldHdlZW5WYWx1ZSA9IHZhbHVlLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXhTdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJldHdlZW5WYWx1ZVswXSA9PT0gXCIsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXR3ZWVuVmFsdWUgPSBiZXR3ZWVuVmFsdWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJldHdlZW5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzXzEucHVzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHByZWZpeFN0YXJ0LCBtYXRjaFN0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJldkhhc0NvbW1hXzEgPSBoYXNDb21tYSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInVybFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzXzEucHVzaChnZXRVUkxNb2RpZmllcl8xKG1hdGNoKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZ3JhZGllbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyc18xLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEdyYWRpZW50TW9kaWZpZXJfMSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaDogbWF0Y2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQ6IHR5cGVHcmFkaWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NvbW1hOiBoYXNDb21tYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpID09PSBtYXRjaGVzXzEubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyc18xLnB1c2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKG1hdGNoRW5kKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IG1vZGlmaWVyc18xXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1vZGlmeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZ5KGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zb21lKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByIGluc3RhbmNlb2YgUHJvbWlzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpLnRoZW4oZnVuY3Rpb24gKGFzeW5jUmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXN5bmNSZXN1bHRzLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGNvbWJpbmVkUmVzdWx0ID0gcmVzdWx0cy5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbWJpbmVkUmVzdWx0LmVuZHNXaXRoKFwiLCBpbml0aWFsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVzdWx0LnNsaWNlKDAsIC05KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlc3VsdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U2hhZG93TW9kaWZpZXJXaXRoSW5mbyh2YWx1ZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleF8xID0gMDtcclxuICAgICAgICAgICAgdmFyIGNvbG9yTWF0Y2hlc18xID0gZ2V0TWF0Y2hlcyhcclxuICAgICAgICAgICAgICAgIC8oXnxcXHMpKD8hY2FsYykoW2Etel0rXFwoLis/XFwpfCNbMC05YS1mXSt8W2Etel0rKSguKj8oaW5zZXR8b3V0c2V0KT8oJHwsKSkvZ2ksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIG5vdFBhcnNlZF8xID0gMDtcclxuICAgICAgICAgICAgdmFyIG1vZGlmaWVyc18yID0gY29sb3JNYXRjaGVzXzEubWFwKGZ1bmN0aW9uIChtYXRjaCwgaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByZWZpeEluZGV4ID0gaW5kZXhfMTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaEluZGV4ID0gdmFsdWUuaW5kZXhPZihtYXRjaCwgaW5kZXhfMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hFbmQgPSBtYXRjaEluZGV4ICsgbWF0Y2gubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaW5kZXhfMSA9IG1hdGNoRW5kO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RQYXJzZWRfMSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcocHJlZml4SW5kZXgsIG1hdGNoRW5kKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHZhbHVlLnN1YnN0cmluZyhwcmVmaXhJbmRleCwgbWF0Y2hJbmRleCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQobW9kaWZ5U2hhZG93Q29sb3IocmdiLCBmaWx0ZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9PT0gY29sb3JNYXRjaGVzXzEubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsdWUuc3Vic3RyaW5nKG1hdGNoRW5kKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWQgPSBtb2RpZmllcnNfMlxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1vZGlmeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZ5KGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc0xlbmd0aDogY29sb3JNYXRjaGVzXzEubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHVucGFyc2VhYmxlTWF0Y2hlc0xlbmd0aDogbm90UGFyc2VkXzEsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBtb2RpZmllZFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U2hhZG93TW9kaWZpZXIodmFsdWUpIHtcclxuICAgICAgICB2YXIgc2hhZG93TW9kaWZpZXIgPSBnZXRTaGFkb3dNb2RpZmllcldpdGhJbmZvKHZhbHVlKTtcclxuICAgICAgICBpZiAoIXNoYWRvd01vZGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzaGFkb3dNb2RpZmllcih0aGVtZSkucmVzdWx0O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZU1vZGlmaWVyKFxyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgIHByb3AsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgcnVsZSxcclxuICAgICAgICBpZ25vcmVkSW1nU2VsZWN0b3JzLFxyXG4gICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gdmFyaWFibGVzU3RvcmUuZ2V0TW9kaWZpZXJGb3JWYXJpYWJsZSh7XHJcbiAgICAgICAgICAgIHZhck5hbWU6IHByb3AsXHJcbiAgICAgICAgICAgIHNvdXJjZVZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgcnVsZTogcnVsZSxcclxuICAgICAgICAgICAgaWdub3JlZEltZ1NlbGVjdG9yczogaWdub3JlZEltZ1NlbGVjdG9ycyxcclxuICAgICAgICAgICAgaXNDYW5jZWxsZWQ6IGlzQ2FuY2VsbGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZURlcGVuZGFudE1vZGlmaWVyKHZhcmlhYmxlc1N0b3JlLCBwcm9wLCB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YXJpYWJsZXNTdG9yZS5nZXRNb2RpZmllckZvclZhckRlcGVuZGFudChwcm9wLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhbk1vZGlmaWNhdGlvbkNhY2hlKCkge1xyXG4gICAgICAgIGNsZWFyQ29sb3JNb2RpZmljYXRpb25DYWNoZSgpO1xyXG4gICAgICAgIGltYWdlRGV0YWlsc0NhY2hlLmNsZWFyKCk7XHJcbiAgICAgICAgY2xlYW5JbWFnZVByb2Nlc3NpbmdDYWNoZSgpO1xyXG4gICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIFZBUl9UWVBFX0JHQ09MT1IgPSAxIDw8IDA7XHJcbiAgICB2YXIgVkFSX1RZUEVfVEVYVENPTE9SID0gMSA8PCAxO1xyXG4gICAgdmFyIFZBUl9UWVBFX0JPUkRFUkNPTE9SID0gMSA8PCAyO1xyXG4gICAgdmFyIFZBUl9UWVBFX0JHSU1HID0gMSA8PCAzO1xyXG4gICAgdmFyIFZhcmlhYmxlc1N0b3JlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBWYXJpYWJsZXNTdG9yZSgpIHtcclxuICAgICAgICAgICAgdGhpcy52YXJUeXBlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lZFZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFyUmVmcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5kZWZpbmVkVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFyVHlwZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVuc3RhYmxlVmFyVmFsdWVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFyVHlwZXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLnNwbGljZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5kZWZpbmVkVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnZhclJlZnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkJnVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnVuZGVmaW5lZFZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFyVHlwZXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnVuc3RhYmxlVmFyVmFsdWVzLmNsZWFyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuaXNWYXJUeXBlID0gZnVuY3Rpb24gKHZhck5hbWUsIHR5cGVOdW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHRoaXMudmFyVHlwZXMuaGFzKHZhck5hbWUpICYmXHJcbiAgICAgICAgICAgICAgICAodGhpcy52YXJUeXBlcy5nZXQodmFyTmFtZSkgJiB0eXBlTnVtKSA+IDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5hZGRSdWxlc0Zvck1hdGNoaW5nID0gZnVuY3Rpb24gKHJ1bGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucnVsZXNRdWV1ZS5wdXNoKHJ1bGVzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGFudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhclR5cGVzID0gbmV3IE1hcCh0aGlzLnZhclR5cGVzKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0Um9vdFZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3RWYXJpYWJsZXNBbmRWYXJEZXAodGhpcy5ydWxlc1F1ZXVlKTtcclxuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLnNwbGljZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0Um9vdFZhckRlcGVuZGFudHMoKTtcclxuICAgICAgICAgICAgdGhpcy52YXJSZWZzLmZvckVhY2goZnVuY3Rpb24gKHJlZnMsIHYpIHtcclxuICAgICAgICAgICAgICAgIHJlZnMuZm9yRWFjaChmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy52YXJUeXBlcy5oYXModikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZShyLCBfdGhpcy52YXJUeXBlcy5nZXQodikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy51bmtub3duQmdWYXJzLmhhcyh2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVua25vd25Db2xvclZhcnMuZGVsZXRlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVua25vd25CZ1ZhcnMuZGVsZXRlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodiwgVkFSX1RZUEVfQkdDT0xPUik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmlzVmFyVHlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdixcclxuICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQkdDT0xPUiB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9URVhUQ09MT1IgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQk9SREVSQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy51bmtub3duQ29sb3JWYXJzLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5kZWZpbmVkVmFycy5hZGQodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuZm9yRWFjaChmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhhc0NvbG9yID1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5maW5kVmFyUmVmKHYsIGZ1bmN0aW9uIChyZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVua25vd25Db2xvclZhcnMuaGFzKHJlZikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmlzVmFyVHlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfVEVYVENPTE9SIHwgVkFSX1RZUEVfQk9SREVSQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSAhPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXRhcmF0ZVZhclJlZnModiwgZnVuY3Rpb24gKHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHJlZiwgVkFSX1RZUEVfQkdDT0xPUik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmlzVmFyVHlwZSh2LCBWQVJfVFlQRV9CR0NPTE9SIHwgVkFSX1RZUEVfQkdJTUcpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy51bmtub3duQmdWYXJzLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5kZWZpbmVkVmFycy5hZGQodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5mb3JFYWNoKGZ1bmN0aW9uICh2YXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldCh2YXJOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuY2xlYXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5nZXRNb2RpZmllckZvclZhcmlhYmxlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGVtZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhck5hbWUgPSBvcHRpb25zLnZhck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUgPSBvcHRpb25zLnNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUgPSBvcHRpb25zLnJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlZEltZ1NlbGVjdG9ycyA9IG9wdGlvbnMuaWdub3JlZEltZ1NlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZCA9IG9wdGlvbnMuaXNDYW5jZWxsZWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2V0RGVjbGFyYXRpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWNsYXJhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkTW9kaWZpZWRWYWx1ZSA9IGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZU51bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyTmFtZVdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTW9kaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5pc1ZhclR5cGUodmFyTmFtZSwgdHlwZU51bSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHkgPSB2YXJOYW1lV3JhcHBlcih2YXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudChzb3VyY2VWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbnN0cnVjdGVkQ29sb3JWYXIoc291cmNlVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5zZXJ0VmFyVmFsdWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5zdGFibGVWYXJWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZU51bSA9PT0gVkFSX1RZUEVfQkdDT0xPUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiIzAwMDAwMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID0gY29sb3JNb2RpZmllcih2YWx1ZSwgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID0gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YXJOYW1lV3JhcHBlcih2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JNb2RpZmllcihmYWxsYmFjaywgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPSBjb2xvck1vZGlmaWVyKHNvdXJjZVZhbHVlLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVkVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRNb2RpZmllZFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CR0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5TW9kaWZ5QmdDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTW9kaWZpZWRWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfVEVYVENPTE9SLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlUZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE1vZGlmaWVkVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JPUkRFUkNPTE9SLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwQm9yZGVyQ29sb3JWYXJpYWJsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeU1vZGlmeUJvcmRlckNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNWYXJUeXBlKHZhck5hbWUsIFZBUl9UWVBFX0JHSU1HKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHkgPSB3cmFwQmdJbWdWYXJpYWJsZU5hbWUodmFyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZFZhbHVlID0gc291cmNlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudChzb3VyY2VWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPSByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnlNb2RpZnlCZ0NvbG9yKGZhbGxiYWNrLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmdNb2RpZmllciA9IGdldEJnSW1hZ2VNb2RpZmllcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZEltZ1NlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGJnTW9kaWZpZXIgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYmdNb2RpZmllcih0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGJnTW9kaWZpZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllZFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAob25UeXBlQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVjcyA9IGdldERlY2xhcmF0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblR5cGVDaGFuZ2UoZGVjcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmVGb3JWYXJUeXBlQ2hhbmdlKHZhck5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51bnN1YnNjcmliZUZyb21WYXJpYWJsZVR5cGVDaGFuZ2VzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGdldERlY2xhcmF0aW9ucygpLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uVHlwZUNoYW5nZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcjogYWRkTGlzdGVuZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyczogcmVtb3ZlTGlzdGVuZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5nZXRNb2RpZmllckZvclZhckRlcGVuZGFudCA9IGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChzb3VyY2VWYWx1ZS5tYXRjaCgvXlxccyoocmdifGhzbClhP1xcKC8pKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNCZ18xID0gcHJvcGVydHkuc3RhcnRzV2l0aChcImJhY2tncm91bmRcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNUZXh0XzEgPSBpc1RleHRDb2xvclByb3BlcnR5KHByb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodGhlbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnNlcnRWYXJWYWx1ZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51bnN0YWJsZVZhclZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGlzQmdfMSA/IFwiI2ZmZmZmZlwiIDogXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllciA9IGlzQmdfMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRyeU1vZGlmeUJnQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpc1RleHRfMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRyeU1vZGlmeVRleHRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRyeU1vZGlmeUJvcmRlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZmllcih2YWx1ZSwgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1jb2xvclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyeU1vZGlmeUJnQ29sb3IoZmFsbGJhY2ssIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1RleHRDb2xvclByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGVtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBUZXh0Q29sb3JWYXJpYWJsZU5hbWUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyeU1vZGlmeVRleHRDb2xvcihmYWxsYmFjaywgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZFwiIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCIgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJveC1zaGFkb3dcIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodGhlbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdW5rbm93blZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhcmlhYmxlUmVwbGFjZWQgPSByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzVmFyVHlwZSh2LCBWQVJfVFlQRV9CR0NPTE9SKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1ZhclR5cGUodiwgVkFSX1RZUEVfQkdJTUcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwQmdJbWdWYXJpYWJsZU5hbWUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVua25vd25WYXJzLmFkZCh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ5TW9kaWZ5QmdDb2xvcihmYWxsYmFjaywgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiYm94LXNoYWRvd1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93TW9kaWZpZXIgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFNoYWRvd01vZGlmaWVyV2l0aEluZm8odmFyaWFibGVSZXBsYWNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWRTaGFkb3cgPSBzaGFkb3dNb2RpZmllcih0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRTaGFkb3cudW5wYXJzZWFibGVNYXRjaGVzTGVuZ3RoICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU2hhZG93Lm1hdGNoZXNMZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZmllZFNoYWRvdy5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlUmVwbGFjZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWQgPSBtb2RpZnkoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodW5rbm93blZhcnMuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3RVbmtub3duVmFyID0gdW5rbm93blZhcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWVzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVuc3Vic2NyaWJlRnJvbVZhcmlhYmxlVHlwZUNoYW5nZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VW5rbm93blZhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IG1vZGlmeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZUZvclZhclR5cGVDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RVbmtub3duVmFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVkO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiYm9yZGVyXCIpIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5zdGFydHNXaXRoKFwib3V0bGluZVwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodGhlbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwQm9yZGVyQ29sb3JWYXJpYWJsZU5hbWUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyeU1vZGlmeUJvcmRlckNvbG9yKGZhbGxiYWNrLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5zdWJzY3JpYmVGb3JWYXJUeXBlQ2hhbmdlID0gZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICB2YXJOYW1lLFxyXG4gICAgICAgICAgICBjYWxsYmFja1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLnNldCh2YXJOYW1lLCBuZXcgU2V0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByb290U3RvcmUgPSB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmdldCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFyb290U3RvcmUuaGFzKGNhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICAgICAgcm9vdFN0b3JlLmFkZChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS51bnN1YnNjcmliZUZyb21WYXJpYWJsZVR5cGVDaGFuZ2VzID0gZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICB2YXJOYW1lLFxyXG4gICAgICAgICAgICBjYWxsYmFja1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5oYXModmFyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuZ2V0KHZhck5hbWUpLmRlbGV0ZShjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5jb2xsZWN0VmFyaWFibGVzQW5kVmFyRGVwID0gZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICBydWxlTGlzdFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBydWxlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChydWxlcykge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKHJ1bGVzLCBmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyaWFibGUocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmluc3BlY3RWYXJpYWJsZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmluc3BlY3RWYXJEZXBlbmRhbnQocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuY29sbGVjdFJvb3RWYXJpYWJsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyaWFibGUocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmluc3BlY3RWYXJpYWJsZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5pbnNwZWN0VmFyaWFibGUgPSBmdW5jdGlvbiAodmFyTmFtZSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy51bnN0YWJsZVZhclZhbHVlcy5zZXQodmFyTmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQodmFsdWUpICYmIGlzQ29uc3RydWN0ZWRDb2xvclZhcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmluZWRWYXJzLmFkZCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWZpbmVkVmFycy5oYXModmFyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRlZmluZWRWYXJzLmFkZCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgdmFyIGNvbG9yID0gcGFyc2VDb2xvcldpdGhDYWNoZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmFkZCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHZhbHVlLmluY2x1ZGVzKFwidXJsKFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgdmFsdWUuaW5jbHVkZXMoXCJsaW5lYXItZ3JhZGllbnQoXCIpIHx8XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5pbmNsdWRlcyhcInJhZGlhbC1ncmFkaWVudChcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodmFyTmFtZSwgVkFSX1RZUEVfQkdJTUcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUucmVzb2x2ZVZhcmlhYmxlVHlwZSA9IGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgdmFyTmFtZSxcclxuICAgICAgICAgICAgdHlwZU51bVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbFR5cGUgPSB0aGlzLmluaXRpYWxWYXJUeXBlcy5nZXQodmFyTmFtZSkgfHwgMDtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUeXBlID0gdGhpcy52YXJUeXBlcy5nZXQodmFyTmFtZSkgfHwgMDtcclxuICAgICAgICAgICAgdmFyIG5ld1R5cGUgPSBjdXJyZW50VHlwZSB8IHR5cGVOdW07XHJcbiAgICAgICAgICAgIHRoaXMudmFyVHlwZXMuc2V0KHZhck5hbWUsIG5ld1R5cGUpO1xyXG4gICAgICAgICAgICBpZiAobmV3VHlwZSAhPT0gaW5pdGlhbFR5cGUgfHwgdGhpcy51bmRlZmluZWRWYXJzLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bmRlZmluZWRWYXJzLmRlbGV0ZSh2YXJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuZGVsZXRlKHZhck5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuZGVsZXRlKHZhck5hbWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmNvbGxlY3RSb290VmFyRGVwZW5kYW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmluc3BlY3RWYXJEZXBlbmRhbnQocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuaW5zcGVjdFZhckRlcGVuZGFudCA9IGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhcmlhYmxlKHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyRGVwcyh2YWx1ZSwgZnVuY3Rpb24gKHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMudmFyUmVmcy5oYXMocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnZhclJlZnMuc2V0KHByb3BlcnR5LCBuZXcgU2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy52YXJSZWZzLmdldChwcm9wZXJ0eSkuYWRkKHJlZik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtY29sb3JcIiB8fFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYm94LXNoYWRvd1wiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyRGVwcyh2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2LCBWQVJfVFlQRV9CR0NPTE9SKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzVGV4dENvbG9yUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHYsIFZBUl9UWVBFX1RFWFRDT0xPUik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJib3JkZXJcIikgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJvdXRsaW5lXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyRGVwcyh2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2LCBWQVJfVFlQRV9CT1JERVJDT0xPUik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmRcIiB8fFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1pbWFnZVwiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyRGVwcyh2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNWYXJUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IgfCBWQVJfVFlQRV9CR0lNRykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNCZ0NvbG9yID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmluZFZhclJlZih2LCBmdW5jdGlvbiAocmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVua25vd25Db2xvclZhcnMuaGFzKHJlZikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pc1ZhclR5cGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfVEVYVENPTE9SIHwgVkFSX1RZUEVfQk9SREVSQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSAhPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLml0YXJhdGVWYXJSZWZzKHYsIGZ1bmN0aW9uIChyZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQmdDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZShyZWYsIFZBUl9UWVBFX0JHQ09MT1IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5rbm93bkJnVmFycy5hZGQocmVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5pdGVyYXRlVmFyRGVwcyA9IGZ1bmN0aW9uICh2YWx1ZSwgaXRlcmF0b3IpIHtcclxuICAgICAgICAgICAgdmFyIHZhckRlcHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVWYXJEZXBlbmRlbmNpZXModmFsdWUsIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFyRGVwcy5hZGQodik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXJEZXBzLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVyYXRvcih2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuZmluZFZhclJlZiA9IGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgdmFyTmFtZSxcclxuICAgICAgICAgICAgaXRlcmF0b3IsXHJcbiAgICAgICAgICAgIHN0YWNrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBlXzEsIF9hO1xyXG4gICAgICAgICAgICBpZiAoc3RhY2sgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YWNrLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhY2suYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YXJOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZWZzID0gdGhpcy52YXJSZWZzLmdldCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFyZWZzIHx8IHJlZnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZnNfMSA9IF9fdmFsdWVzKHJlZnMpLCByZWZzXzFfMSA9IHJlZnNfMS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIXJlZnNfMV8xLmRvbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmc18xXzEgPSByZWZzXzEubmV4dCgpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmID0gcmVmc18xXzEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gdGhpcy5maW5kVmFyUmVmKHJlZiwgaXRlcmF0b3IsIHN0YWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZV8xXzEpIHtcclxuICAgICAgICAgICAgICAgIGVfMSA9IHtlcnJvcjogZV8xXzF9O1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVmc18xXzEgJiYgIXJlZnNfMV8xLmRvbmUgJiYgKF9hID0gcmVmc18xLnJldHVybikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmNhbGwocmVmc18xKTtcclxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLml0YXJhdGVWYXJSZWZzID0gZnVuY3Rpb24gKHZhck5hbWUsIGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluZFZhclJlZih2YXJOYW1lLCBmdW5jdGlvbiAocmVmKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRvcihyZWYpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5zZXRPblJvb3RWYXJpYWJsZUNoYW5nZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLm9uUm9vdFZhcmlhYmxlRGVmaW5lZCA9IGNhbGxiYWNrO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLnB1dFJvb3RWYXJzID0gZnVuY3Rpb24gKHN0eWxlRWxlbWVudCwgdGhlbWUpIHtcclxuICAgICAgICAgICAgdmFyIGVfMiwgX2E7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBzaGVldCA9IHN0eWxlRWxlbWVudC5zaGVldDtcclxuICAgICAgICAgICAgaWYgKHNoZWV0LmNzc1J1bGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNoZWV0LmRlbGV0ZVJ1bGUoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGRlY2xhcmF0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJpYWJsZShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzVmFyVHlwZShwcm9wZXJ0eSwgVkFSX1RZUEVfQkdDT0xPUikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5zZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUocHJvcGVydHkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeU1vZGlmeUJnQ29sb3IodmFsdWUsIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNWYXJUeXBlKHByb3BlcnR5LCBWQVJfVFlQRV9URVhUQ09MT1IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuc2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBUZXh0Q29sb3JWYXJpYWJsZU5hbWUocHJvcGVydHkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeU1vZGlmeVRleHRDb2xvcih2YWx1ZSwgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1ZhclR5cGUocHJvcGVydHksIFZBUl9UWVBFX0JPUkRFUkNPTE9SKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwQm9yZGVyQ29sb3JWYXJpYWJsZU5hbWUocHJvcGVydHkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeU1vZGlmeUJvcmRlckNvbG9yKHZhbHVlLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlRm9yVmFyVHlwZUNoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25Sb290VmFyaWFibGVEZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgY3NzTGluZXMgPSBbXTtcclxuICAgICAgICAgICAgY3NzTGluZXMucHVzaChcIjpyb290IHtcIik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWNsYXJhdGlvbnNfMSA9IF9fdmFsdWVzKGRlY2xhcmF0aW9ucyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uc18xXzEgPSBkZWNsYXJhdGlvbnNfMS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIWRlY2xhcmF0aW9uc18xXzEuZG9uZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnNfMV8xID0gZGVjbGFyYXRpb25zXzEubmV4dCgpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2IgPSBfX3JlYWQoZGVjbGFyYXRpb25zXzFfMS52YWx1ZSwgMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gX2JbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX2JbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzTGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgXCIuY29uY2F0KHByb3BlcnR5LCBcIjogXCIpLmNvbmNhdCh2YWx1ZSwgXCI7XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZV8yXzEpIHtcclxuICAgICAgICAgICAgICAgIGVfMiA9IHtlcnJvcjogZV8yXzF9O1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uc18xXzEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWRlY2xhcmF0aW9uc18xXzEuZG9uZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBkZWNsYXJhdGlvbnNfMS5yZXR1cm4pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5jYWxsKGRlY2xhcmF0aW9uc18xKTtcclxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNzc0xpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgICAgICB2YXIgY3NzVGV4dCA9IGNzc0xpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUoY3NzVGV4dCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gVmFyaWFibGVzU3RvcmU7XHJcbiAgICB9KSgpO1xyXG4gICAgdmFyIHZhcmlhYmxlc1N0b3JlID0gbmV3IFZhcmlhYmxlc1N0b3JlKCk7XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZVJhbmdlKGlucHV0LCBzZWFyY2hTdGFydCkge1xyXG4gICAgICAgIGlmIChzZWFyY2hTdGFydCA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFN0YXJ0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gaW5wdXQuaW5kZXhPZihcInZhcihcIiwgc2VhcmNoU3RhcnQpO1xyXG4gICAgICAgIGlmIChzdGFydCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciByYW5nZSA9IGdldFBhcmVudGhlc2VzUmFuZ2UoaW5wdXQsIHN0YXJ0ICsgMyk7XHJcbiAgICAgICAgICAgIGlmIChyYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGFydDogc3RhcnQsIGVuZDogcmFuZ2UuZW5kfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZXNNYXRjaGVzKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIHJhbmdlcyA9IFtdO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB2YXIgcmFuZ2U7XHJcbiAgICAgICAgd2hpbGUgKChyYW5nZSA9IGdldFZhcmlhYmxlUmFuZ2UoaW5wdXQsIGkpKSkge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSByYW5nZS5zdGFydCxcclxuICAgICAgICAgICAgICAgIGVuZCA9IHJhbmdlLmVuZDtcclxuICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgZW5kOiBlbmQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpID0gcmFuZ2UuZW5kICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJhbmdlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VWYXJpYWJsZXNNYXRjaGVzKGlucHV0LCByZXBsYWNlcikge1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gZ2V0VmFyaWFibGVzTWF0Y2hlcyhpbnB1dCk7XHJcbiAgICAgICAgdmFyIG1hdGNoZXNDb3VudCA9IG1hdGNoZXMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChtYXRjaGVzQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIHJlcGxhY2VtZW50cyA9IG1hdGNoZXMubWFwKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlcihtLnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcGFydHMgPSBbXTtcclxuICAgICAgICBwYXJ0cy5wdXNoKGlucHV0LnN1YnN0cmluZygwLCBtYXRjaGVzWzBdLnN0YXJ0KSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKHJlcGxhY2VtZW50c1tpXSk7XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IG1hdGNoZXNbaV0uZW5kO1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gaSA8IG1hdGNoZXNDb3VudCAtIDEgPyBtYXRjaGVzW2kgKyAxXS5zdGFydCA6IGlucHV0TGVuZ3RoO1xyXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKGlucHV0LnN1YnN0cmluZyhzdGFydCwgZW5kKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKFwiXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VmFyaWFibGVOYW1lQW5kRmFsbGJhY2sobWF0Y2gpIHtcclxuICAgICAgICB2YXIgY29tbWFJbmRleCA9IG1hdGNoLmluZGV4T2YoXCIsXCIpO1xyXG4gICAgICAgIHZhciBuYW1lO1xyXG4gICAgICAgIHZhciBmYWxsYmFjaztcclxuICAgICAgICBpZiAoY29tbWFJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBtYXRjaC5zdWJzdHJpbmcoNCwgY29tbWFJbmRleCkudHJpbSgpO1xyXG4gICAgICAgICAgICBmYWxsYmFjayA9IG1hdGNoLnN1YnN0cmluZyhjb21tYUluZGV4ICsgMSwgbWF0Y2gubGVuZ3RoIC0gMSkudHJpbSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBtYXRjaC5zdWJzdHJpbmcoNCwgbWF0Y2gubGVuZ3RoIC0gMSkudHJpbSgpO1xyXG4gICAgICAgICAgICBmYWxsYmFjayA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7bmFtZTogbmFtZSwgZmFsbGJhY2s6IGZhbGxiYWNrfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyh2YWx1ZSwgbmFtZVJlcGxhY2VyLCBmYWxsYmFja1JlcGxhY2VyKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoUmVwbGFjZXIgPSBmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gZ2V0VmFyaWFibGVOYW1lQW5kRmFsbGJhY2sobWF0Y2gpLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IF9hLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBmYWxsYmFjayA9IF9hLmZhbGxiYWNrO1xyXG4gICAgICAgICAgICB2YXIgbmV3TmFtZSA9IG5hbWVSZXBsYWNlcihuYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFmYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidmFyKFwiLmNvbmNhdChuZXdOYW1lLCBcIilcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG5ld0ZhbGxiYWNrO1xyXG4gICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQoZmFsbGJhY2spKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdGYWxsYmFjayA9IHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBmYWxsYmFjayxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lUmVwbGFjZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tSZXBsYWNlclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChmYWxsYmFja1JlcGxhY2VyKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdGYWxsYmFjayA9IGZhbGxiYWNrUmVwbGFjZXIoZmFsbGJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3RmFsbGJhY2sgPSBmYWxsYmFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJ2YXIoXCIuY29uY2F0KG5ld05hbWUsIFwiLCBcIikuY29uY2F0KG5ld0ZhbGxiYWNrLCBcIilcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmVwbGFjZVZhcmlhYmxlc01hdGNoZXModmFsdWUsIG1hdGNoUmVwbGFjZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXRlcmF0ZVZhckRlcGVuZGVuY2llcyh2YWx1ZSwgaXRlcmF0b3IpIHtcclxuICAgICAgICByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXModmFsdWUsIGZ1bmN0aW9uICh2YXJOYW1lKSB7XHJcbiAgICAgICAgICAgIGl0ZXJhdG9yKHZhck5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFyTmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gXCItLWRhcmtyZWFkZXItYmdcIi5jb25jYXQobmFtZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gXCItLWRhcmtyZWFkZXItdGV4dFwiLmNvbmNhdChuYW1lKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdyYXBCb3JkZXJDb2xvclZhcmlhYmxlTmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiLS1kYXJrcmVhZGVyLWJvcmRlclwiLmNvbmNhdChuYW1lKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdyYXBCZ0ltZ1ZhcmlhYmxlTmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiLS1kYXJrcmVhZGVyLWJnaW1nXCIuY29uY2F0KG5hbWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNWYXJpYWJsZShwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiLS1cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1ZhckRlcGVuZGFudCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5pbmNsdWRlcyhcInZhcihcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0NvbnN0cnVjdGVkQ29sb3JWYXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubWF0Y2goL15cXHMqKHJnYnxoc2wpYT9cXCgvKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzVGV4dENvbG9yUHJvcGVydHkocHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJjb2xvclwiIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImNhcmV0LWNvbG9yXCIgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiLXdlYmtpdC10ZXh0LWZpbGwtY29sb3JcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICB2YXIgcmF3VmFsdWVSZWdleCA9IC9eXFxkezEsM30sID9cXGR7MSwzfSwgP1xcZHsxLDN9JC87XHJcbiAgICBmdW5jdGlvbiBwYXJzZVJhd1ZhbHVlKGNvbG9yKSB7XHJcbiAgICAgICAgaWYgKHJhd1ZhbHVlUmVnZXgudGVzdChjb2xvcikpIHtcclxuICAgICAgICAgICAgdmFyIHNwbGl0dGVkID0gY29sb3Iuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0SW5SR0JfMSA9IFwicmdiKFwiO1xyXG4gICAgICAgICAgICBzcGxpdHRlZC5mb3JFYWNoKGZ1bmN0aW9uIChudW1iZXIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdEluUkdCXzEgKz0gXCJcIi5jb25jYXQobnVtYmVyLnRyaW0oKSwgXCIsIFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlc3VsdEluUkdCXzEgPSByZXN1bHRJblJHQl8xLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICByZXN1bHRJblJHQl8xLmxlbmd0aCAtIDJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmVzdWx0SW5SR0JfMSArPSBcIilcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHtpc1JhdzogdHJ1ZSwgY29sb3I6IHJlc3VsdEluUkdCXzF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2lzUmF3OiBmYWxzZSwgY29sb3I6IGNvbG9yfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJhd1ZhbHVlKGNvbG9yLCB0aGVtZSwgbW9kaWZ5RnVuY3Rpb24pIHtcclxuICAgICAgICB2YXIgX2EgPSBwYXJzZVJhd1ZhbHVlKGNvbG9yKSxcclxuICAgICAgICAgICAgaXNSYXcgPSBfYS5pc1JhdyxcclxuICAgICAgICAgICAgbmV3Q29sb3IgPSBfYS5jb2xvcjtcclxuICAgICAgICB2YXIgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShuZXdDb2xvcik7XHJcbiAgICAgICAgaWYgKHJnYikge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0Q29sb3IgPSBtb2RpZnlGdW5jdGlvbihyZ2IsIHRoZW1lKTtcclxuICAgICAgICAgICAgaWYgKGlzUmF3KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0SW5SR0IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKG91dHB1dENvbG9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXRJblJHQlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQob3V0cHV0SW5SR0IuciwgXCIsIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQob3V0cHV0SW5SR0IuZywgXCIsIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQob3V0cHV0SW5SR0IuYilcclxuICAgICAgICAgICAgICAgICAgICA6IG91dHB1dENvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0NvbG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJ5TW9kaWZ5QmdDb2xvcihjb2xvciwgdGhlbWUpIHtcclxuICAgICAgICByZXR1cm4gaGFuZGxlUmF3VmFsdWUoY29sb3IsIHRoZW1lLCBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJ5TW9kaWZ5VGV4dENvbG9yKGNvbG9yLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBoYW5kbGVSYXdWYWx1ZShjb2xvciwgdGhlbWUsIG1vZGlmeUZvcmVncm91bmRDb2xvcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cnlNb2RpZnlCb3JkZXJDb2xvcihjb2xvciwgdGhlbWUpIHtcclxuICAgICAgICByZXR1cm4gaGFuZGxlUmF3VmFsdWUoY29sb3IsIHRoZW1lLCBtb2RpZnlCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbnNlcnRWYXJWYWx1ZXMoc291cmNlLCB2YXJWYWx1ZXMsIHN0YWNrKSB7XHJcbiAgICAgICAgaWYgKHN0YWNrID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgc3RhY2sgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb250YWluc1VucmVzb2x2ZWRWYXIgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbWF0Y2hSZXBsYWNlciA9IGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSBnZXRWYXJpYWJsZU5hbWVBbmRGYWxsYmFjayhtYXRjaCksXHJcbiAgICAgICAgICAgICAgICBuYW1lID0gX2EubmFtZSxcclxuICAgICAgICAgICAgICAgIGZhbGxiYWNrID0gX2EuZmFsbGJhY2s7XHJcbiAgICAgICAgICAgIGlmIChzdGFjay5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5zVW5yZXNvbHZlZFZhciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGFjay5hZGQobmFtZSk7XHJcbiAgICAgICAgICAgIHZhciB2YXJWYWx1ZSA9IHZhclZhbHVlcy5nZXQobmFtZSkgfHwgZmFsbGJhY2s7XHJcbiAgICAgICAgICAgIHZhciBpbnNlcnRlZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh2YXJWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhclZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gaW5zZXJ0VmFyVmFsdWVzKHZhclZhbHVlLCB2YXJWYWx1ZXMsIHN0YWNrKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSB2YXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWluc2VydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluc1VucmVzb2x2ZWRWYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGluc2VydGVkO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHJlcGxhY2VkID0gcmVwbGFjZVZhcmlhYmxlc01hdGNoZXMoc291cmNlLCBtYXRjaFJlcGxhY2VyKTtcclxuICAgICAgICBpZiAoY29udGFpbnNVbnJlc29sdmVkVmFyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVwbGFjZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG92ZXJyaWRlcyA9IHtcclxuICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYmdjb2xvclwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJhY2tncm91bmQtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1iZ2NvbG9yXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1iZ2ltYWdlXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYmFja2dyb3VuZC1pbWFnZVwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJnaW1hZ2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLWJvdHRvbS1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItYm90dG9tXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLWJvdHRvbS1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1ib3R0b21cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItbGVmdC1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItbGVmdFwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJvcmRlci1sZWZ0LWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLWxlZnRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItcmlnaHQtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLXJpZ2h0LWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXJpZ2h0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLXRvcC1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItdG9wXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLXRvcC1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci10b3BcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3gtc2hhZG93XCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJveHNoYWRvd1wiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJveC1zaGFkb3dcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3hzaGFkb3dcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1jb2xvclwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtY29sb3JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJmaWxsXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWZpbGxcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJmaWxsXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtZmlsbFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0cm9rZVwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1zdHJva2VcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJzdHJva2VcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1zdHJva2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvdXRsaW5lLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLW91dGxpbmVcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJvdXRsaW5lLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtb3V0bGluZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0b3AtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtc3RvcGNvbG9yXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwic3RvcC1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLXN0b3Bjb2xvclwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciBvdmVycmlkZXNMaXN0ID0gT2JqZWN0LnZhbHVlcyhvdmVycmlkZXMpO1xyXG4gICAgdmFyIG5vcm1hbGl6ZWRQcm9wTGlzdCA9IHt9O1xyXG4gICAgb3ZlcnJpZGVzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBjc3NQcm9wID0gX2EuY3NzUHJvcCxcclxuICAgICAgICAgICAgY3VzdG9tUHJvcCA9IF9hLmN1c3RvbVByb3A7XHJcbiAgICAgICAgcmV0dXJuIChub3JtYWxpemVkUHJvcExpc3RbY3VzdG9tUHJvcF0gPSBjc3NQcm9wKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIElOTElORV9TVFlMRV9BVFRSUyA9IFtcclxuICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgXCJmaWxsXCIsXHJcbiAgICAgICAgXCJzdG9wLWNvbG9yXCIsXHJcbiAgICAgICAgXCJzdHJva2VcIixcclxuICAgICAgICBcImJnY29sb3JcIixcclxuICAgICAgICBcImNvbG9yXCJcclxuICAgIF07XHJcbiAgICB2YXIgSU5MSU5FX1NUWUxFX1NFTEVDVE9SID0gSU5MSU5FX1NUWUxFX0FUVFJTLm1hcChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIHJldHVybiBcIltcIi5jb25jYXQoYXR0ciwgXCJdXCIpO1xyXG4gICAgfSkuam9pbihcIiwgXCIpO1xyXG4gICAgZnVuY3Rpb24gZ2V0SW5saW5lT3ZlcnJpZGVTdHlsZSgpIHtcclxuICAgICAgICByZXR1cm4gb3ZlcnJpZGVzTGlzdFxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFBdHRyID0gX2EuZGF0YUF0dHIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tUHJvcCA9IF9hLmN1c3RvbVByb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzUHJvcCA9IF9hLmNzc1Byb3A7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiW1wiLmNvbmNhdChkYXRhQXR0ciwgXCJdIHtcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoY3NzUHJvcCwgXCI6IHZhcihcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChjdXN0b21Qcm9wLCBcIikgIWltcG9ydGFudDtcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ9XCJcclxuICAgICAgICAgICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRJbmxpbmVTdHlsZUVsZW1lbnRzKHJvb3QpIHtcclxuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgIGlmIChyb290IGluc3RhbmNlb2YgRWxlbWVudCAmJiByb290Lm1hdGNoZXMoSU5MSU5FX1NUWUxFX1NFTEVDVE9SKSkge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgcm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQgfHxcclxuICAgICAgICAgICAgKGlzU2hhZG93RG9tU3VwcG9ydGVkICYmIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB8fFxyXG4gICAgICAgICAgICByb290IGluc3RhbmNlb2YgRG9jdW1lbnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcHVzaChyZXN1bHRzLCByb290LnF1ZXJ5U2VsZWN0b3JBbGwoSU5MSU5FX1NUWUxFX1NFTEVDVE9SKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG4gICAgdmFyIHRyZWVPYnNlcnZlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICB2YXIgYXR0ck9ic2VydmVycyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIHdhdGNoRm9ySW5saW5lU3R5bGVzKGVsZW1lbnRTdHlsZURpZENoYW5nZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpIHtcclxuICAgICAgICBkZWVwV2F0Y2hGb3JJbmxpbmVTdHlsZXMoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LFxyXG4gICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UsXHJcbiAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBmdW5jdGlvbiAoaG9zdCkge1xyXG4gICAgICAgICAgICBkZWVwV2F0Y2hGb3JJbmxpbmVTdHlsZXMoXHJcbiAgICAgICAgICAgICAgICBob3N0LnNoYWRvd1Jvb3QsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVlcFdhdGNoRm9ySW5saW5lU3R5bGVzKFxyXG4gICAgICAgIHJvb3QsXHJcbiAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlLFxyXG4gICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICApIHtcclxuICAgICAgICBpZiAodHJlZU9ic2VydmVycy5oYXMocm9vdCkpIHtcclxuICAgICAgICAgICAgdHJlZU9ic2VydmVycy5nZXQocm9vdCkuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBhdHRyT2JzZXJ2ZXJzLmdldChyb290KS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkaXNjb3ZlcmVkTm9kZXMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGRpc2NvdmVyTm9kZXMobm9kZSkge1xyXG4gICAgICAgICAgICBnZXRJbmxpbmVTdHlsZUVsZW1lbnRzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzY292ZXJlZE5vZGVzLmhhcyhlbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXNjb3ZlcmVkTm9kZXMuYWRkKGVsKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZShlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMobm9kZSwgZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXNjb3ZlcmVkTm9kZXMuaGFzKG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGlzY292ZXJlZE5vZGVzLmFkZChub2RlKTtcclxuICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkKG4uc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgICAgICBkZWVwV2F0Y2hGb3JJbmxpbmVTdHlsZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgbi5zaGFkb3dSb290LFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0cmVlT2JzZXJ2ZXIgPSBjcmVhdGVPcHRpbWl6ZWRUcmVlT2JzZXJ2ZXIocm9vdCwge1xyXG4gICAgICAgICAgICBvbk1pbm9yTXV0YXRpb25zOiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhZGRpdGlvbnMgPSBfYS5hZGRpdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWRkZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlzY292ZXJOb2RlcyhhZGRlZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25IdWdlTXV0YXRpb25zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNjb3Zlck5vZGVzKHJvb3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdHJlZU9ic2VydmVycy5zZXQocm9vdCwgdHJlZU9ic2VydmVyKTtcclxuICAgICAgICB2YXIgYXR0ZW1wdENvdW50ID0gMDtcclxuICAgICAgICB2YXIgc3RhcnQgPSBudWxsO1xyXG4gICAgICAgIHZhciBBVFRFTVBUU19JTlRFUlZBTCA9IGdldER1cmF0aW9uKHtzZWNvbmRzOiAxMH0pO1xyXG4gICAgICAgIHZhciBSRVRSWV9USU1FT1VUID0gZ2V0RHVyYXRpb24oe3NlY29uZHM6IDJ9KTtcclxuICAgICAgICB2YXIgTUFYX0FUVEVNUFRTX0NPVU5UID0gNTA7XHJcbiAgICAgICAgdmFyIGNhY2hlID0gW107XHJcbiAgICAgICAgdmFyIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgdmFyIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyA9IHRocm90dGxlKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChJTkxJTkVfU1RZTEVfQVRUUlMuaW5jbHVkZXMobS5hdHRyaWJ1dGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZShtLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBhdHRyT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgICAgIGNhY2hlLnB1c2guYXBwbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICAgICAgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKG11dGF0aW9ucyksIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdHRlbXB0Q291bnQrKztcclxuICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5vdztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRlbXB0Q291bnQgPj0gTUFYX0FUVEVNUFRTX0NPVU5UKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm93IC0gc3RhcnQgPCBBVFRFTVBUU19JTlRFUlZBTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVDYWNoZSA9IGNhY2hlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMoYXR0cmlidXRlQ2FjaGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIFJFVFJZX1RJTUVPVVQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLnB1c2guYXBwbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQobXV0YXRpb25zKSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5vdztcclxuICAgICAgICAgICAgICAgIGF0dGVtcHRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlQXR0cmlidXRlTXV0YXRpb25zKG11dGF0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXR0ck9ic2VydmVyLm9ic2VydmUocm9vdCwge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IElOTElORV9TVFlMRV9BVFRSUy5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBvdmVycmlkZXNMaXN0Lm1hcChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUF0dHIgPSBfYS5kYXRhQXR0cjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUF0dHI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXR0ck9ic2VydmVycy5zZXQocm9vdCwgYXR0ck9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvcklubGluZVN0eWxlcygpIHtcclxuICAgICAgICB0cmVlT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF0dHJPYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICByZXR1cm4gby5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdHJlZU9ic2VydmVycy5jbGVhcigpO1xyXG4gICAgICAgIGF0dHJPYnNlcnZlcnMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIHZhciBpbmxpbmVTdHlsZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIHZhciBmaWx0ZXJQcm9wcyA9IFtcImJyaWdodG5lc3NcIiwgXCJjb250cmFzdFwiLCBcImdyYXlzY2FsZVwiLCBcInNlcGlhXCIsIFwibW9kZVwiXTtcclxuICAgIGZ1bmN0aW9uIGdldElubGluZVN0eWxlQ2FjaGVLZXkoZWwsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIElOTElORV9TVFlMRV9BVFRSUy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGF0dHIsICc9XCInKS5jb25jYXQoZWwuZ2V0QXR0cmlidXRlKGF0dHIpLCAnXCInKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyUHJvcHMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHByb3AsICc9XCInKS5jb25jYXQodGhlbWVbcHJvcF0sICdcIicpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuam9pbihcIiBcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG91bGRJZ25vcmVJbmxpbmVTdHlsZShlbGVtZW50LCBzZWxlY3RvcnMpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZWN0b3JzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmdub3JlZFNlbGVjdG9yID0gc2VsZWN0b3JzW2ldO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKGluZ25vcmVkU2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvdmVycmlkZUlubGluZVN0eWxlKFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgaWdub3JlSW5saW5lU2VsZWN0b3JzLFxyXG4gICAgICAgIGlnbm9yZUltYWdlU2VsZWN0b3JzXHJcbiAgICApIHtcclxuICAgICAgICB2YXIgY2FjaGVLZXkgPSBnZXRJbmxpbmVTdHlsZUNhY2hlS2V5KGVsZW1lbnQsIHRoZW1lKTtcclxuICAgICAgICBpZiAoY2FjaGVLZXkgPT09IGlubGluZVN0eWxlQ2FjaGUuZ2V0KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHVuc2V0UHJvcHMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKG92ZXJyaWRlcykpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldEN1c3RvbVByb3AodGFyZ2V0Q1NTUHJvcCwgbW9kaWZpZXJDU1NQcm9wLCBjc3NWYWwpIHtcclxuICAgICAgICAgICAgdmFyIGlzUHJvcGVydHlWYXJpYWJsZSA9IHRhcmdldENTU1Byb3Auc3RhcnRzV2l0aChcIi0tXCIpO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSBpc1Byb3BlcnR5VmFyaWFibGUgPyB7fSA6IG92ZXJyaWRlc1t0YXJnZXRDU1NQcm9wXSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbVByb3AgPSBfYS5jdXN0b21Qcm9wLFxyXG4gICAgICAgICAgICAgICAgZGF0YUF0dHIgPSBfYS5kYXRhQXR0cjtcclxuICAgICAgICAgICAgdmFyIG1vZCA9IGdldE1vZGlmaWFibGVDU1NEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgIG1vZGlmaWVyQ1NTUHJvcCxcclxuICAgICAgICAgICAgICAgIGNzc1ZhbCxcclxuICAgICAgICAgICAgICAgIHtzdHlsZTogZWxlbWVudC5zdHlsZX0sXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoIW1vZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG1vZC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlKHRoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNQcm9wZXJ0eVZhcmlhYmxlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGVkVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHR5cGVkVmFsdWUuZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gX2EucHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX2EudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgISh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjdXN0b21Qcm9wLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGRhdGFBdHRyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGRhdGFBdHRyLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVuc2V0UHJvcHMuZGVsZXRlKHRhcmdldENTU1Byb3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpZ25vcmVJbmxpbmVTZWxlY3RvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkSWdub3JlSW5saW5lU3R5bGUoZWxlbWVudCwgaWdub3JlSW5saW5lU2VsZWN0b3JzKSkge1xyXG4gICAgICAgICAgICAgICAgdW5zZXRQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChjc3NQcm9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVzW2Nzc1Byb3BdLmRhdGFBdHRyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImJnY29sb3JcIikpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJiZ2NvbG9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezN9JC9pKSB8fFxyXG4gICAgICAgICAgICAgICAgdmFsdWUubWF0Y2goL15bMC05YS1mXXs2fSQvaSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiI1wiLmNvbmNhdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcImJhY2tncm91bmQtY29sb3JcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiY29sb3JcIikgJiYgZWxlbWVudC5yZWwgIT09IFwibWFzay1pY29uXCIpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjb2xvclwiKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUubWF0Y2goL15bMC05YS1mXXszfSQvaSkgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eWzAtOWEtZl17Nn0kL2kpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcIiNcIi5jb25jYXQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXCJjb2xvclwiLCBcImNvbG9yXCIsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImZpbGxcIikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBTTUFMTF9TVkdfTElNSVRfMSA9IDMyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlXzEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImZpbGxcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVfMSAhPT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgU1ZHVGV4dEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVTVkdFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IF9hLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0JnID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA+IFNNQUxMX1NWR19MSU1JVF8xIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID4gU01BTExfU1ZHX0xJTUlUXzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmcgPyBcImJhY2tncm91bmQtY29sb3JcIiA6IFwiY29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZV8xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNSZWFkeVN0YXRlQ29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU1ZHRWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXIoaGFuZGxlU1ZHRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFwiZmlsbFwiLCBcImNvbG9yXCIsIHZhbHVlXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJzdG9wLWNvbG9yXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcC1jb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3RvcC1jb2xvclwiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJzdHJva2VcIikpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHJva2VcIik7XHJcbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXHJcbiAgICAgICAgICAgICAgICBcInN0cm9rZVwiLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIFNWR0xpbmVFbGVtZW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIFNWR1RleHRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LnN0eWxlICYmXHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoZWxlbWVudC5zdHlsZSwgZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtaW1hZ2VcIiAmJiB2YWx1ZS5pbmNsdWRlcyhcInVybFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHByb3BlcnR5LnN0YXJ0c1dpdGgoXCItLVwiKSAmJiAhbm9ybWFsaXplZFByb3BMaXN0W3Byb3BlcnR5XSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVByb3AocHJvcGVydHksIHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvdmVycmlkZW5Qcm9wID0gbm9ybWFsaXplZFByb3BMaXN0W3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlblByb3AgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShvdmVycmlkZW5Qcm9wKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZWxlbWVudC5oYXNBdHRyaWJ1dGUob3ZlcnJpZGVuUHJvcClcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVuUHJvcCA9PT0gXCJiYWNrZ3JvdW5kLWNvbG9yXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiYmdjb2xvclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZSAmJlxyXG4gICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgU1ZHVGV4dEVsZW1lbnQgJiZcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5maWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXHJcbiAgICAgICAgICAgICAgICBcImZpbGxcIixcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZpbGxcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yRWFjaCh1bnNldFByb3BzLCBmdW5jdGlvbiAoY3NzUHJvcCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZXNbY3NzUHJvcF0uZGF0YUF0dHIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlubGluZVN0eWxlQ2FjaGUuc2V0KGVsZW1lbnQsIGdldElubGluZVN0eWxlQ2FjaGVLZXkoZWxlbWVudCwgdGhlbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWV0YVRoZW1lQ29sb3JOYW1lID0gXCJ0aGVtZS1jb2xvclwiO1xyXG4gICAgdmFyIG1ldGFUaGVtZUNvbG9yU2VsZWN0b3IgPSAnbWV0YVtuYW1lPVwiJy5jb25jYXQobWV0YVRoZW1lQ29sb3JOYW1lLCAnXCJdJyk7XHJcbiAgICB2YXIgc3JjTWV0YVRoZW1lQ29sb3IgPSBudWxsO1xyXG4gICAgdmFyIG9ic2VydmVyID0gbnVsbDtcclxuICAgIGZ1bmN0aW9uIGNoYW5nZU1ldGFUaGVtZUNvbG9yKG1ldGEsIHRoZW1lKSB7XHJcbiAgICAgICAgc3JjTWV0YVRoZW1lQ29sb3IgPSBzcmNNZXRhVGhlbWVDb2xvciB8fCBtZXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gcGFyc2VDb2xvcldpdGhDYWNoZShzcmNNZXRhVGhlbWVDb2xvcik7XHJcbiAgICAgICAgaWYgKCFjb2xvcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGEuY29udGVudCA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihjb2xvciwgdGhlbWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2hhbmdlTWV0YVRoZW1lQ29sb3JXaGVuQXZhaWxhYmxlKHRoZW1lKSB7XHJcbiAgICAgICAgdmFyIG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1ldGFUaGVtZUNvbG9yU2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChtZXRhKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZU1ldGFUaGVtZUNvbG9yKG1ldGEsIHRoZW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGxvb3A6IGZvciAodmFyIGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZGVkTm9kZXMgPSBtdXRhdGlvbnNbaV0uYWRkZWROb2RlcztcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFkZGVkTm9kZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBhZGRlZE5vZGVzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIGluc3RhbmNlb2YgSFRNTE1ldGFFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLm5hbWUgPT09IG1ldGFUaGVtZUNvbG9yTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1ldGFUaGVtZUNvbG9yKG5vZGUsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGxvb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmhlYWQsIHtjaGlsZExpc3Q6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXN0b3JlTWV0YVRoZW1lQ29sb3IoKSB7XHJcbiAgICAgICAgaWYgKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWV0YVRoZW1lQ29sb3JTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKG1ldGEgJiYgc3JjTWV0YVRoZW1lQ29sb3IpIHtcclxuICAgICAgICAgICAgbWV0YS5jb250ZW50ID0gc3JjTWV0YVRoZW1lQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciB0aGVtZUNhY2hlS2V5cyA9IFtcclxuICAgICAgICBcIm1vZGVcIixcclxuICAgICAgICBcImJyaWdodG5lc3NcIixcclxuICAgICAgICBcImNvbnRyYXN0XCIsXHJcbiAgICAgICAgXCJncmF5c2NhbGVcIixcclxuICAgICAgICBcInNlcGlhXCIsXHJcbiAgICAgICAgXCJkYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgXCJkYXJrU2NoZW1lVGV4dENvbG9yXCIsXHJcbiAgICAgICAgXCJsaWdodFNjaGVtZUJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIFwibGlnaHRTY2hlbWVUZXh0Q29sb3JcIlxyXG4gICAgXTtcclxuICAgIGZ1bmN0aW9uIGdldFRoZW1lS2V5KHRoZW1lKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdEtleSA9IFwiXCI7XHJcbiAgICAgICAgdGhlbWVDYWNoZUtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdEtleSArPSBcIlwiLmNvbmNhdChrZXksIFwiOlwiKS5jb25jYXQodGhlbWVba2V5XSwgXCI7XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRLZXk7XHJcbiAgICB9XHJcbiAgICB2YXIgYXN5bmNRdWV1ZSA9IGNyZWF0ZUFzeW5jVGFza3NRdWV1ZSgpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldE1vZGlmaWVyKCkge1xyXG4gICAgICAgIHZhciByZW5kZXJJZCA9IDA7XHJcbiAgICAgICAgdmFyIHJ1bGVzVGV4dENhY2hlID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHZhciBydWxlc01vZENhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHZhciB2YXJUeXBlQ2hhbmdlQ2xlYW5lcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdmFyIHByZXZGaWx0ZXJLZXkgPSBudWxsO1xyXG4gICAgICAgIHZhciBoYXNOb25Mb2FkZWRMaW5rID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHdhc1JlYnVpbHQgPSBmYWxzZTtcclxuICAgICAgICBmdW5jdGlvbiBzaG91bGRSZWJ1aWxkU3R5bGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoYXNOb25Mb2FkZWRMaW5rICYmICF3YXNSZWJ1aWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBtb2RpZnlTaGVldChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciBydWxlcyA9IG9wdGlvbnMuc291cmNlQ1NTUnVsZXM7XHJcbiAgICAgICAgICAgIHZhciB0aGVtZSA9IG9wdGlvbnMudGhlbWUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZUFuYWx5c2lzID0gb3B0aW9ucy5pZ25vcmVJbWFnZUFuYWx5c2lzLFxyXG4gICAgICAgICAgICAgICAgZm9yY2UgPSBvcHRpb25zLmZvcmNlLFxyXG4gICAgICAgICAgICAgICAgcHJlcGFyZVNoZWV0ID0gb3B0aW9ucy5wcmVwYXJlU2hlZXQsXHJcbiAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkID0gb3B0aW9ucy5pc0FzeW5jQ2FuY2VsbGVkO1xyXG4gICAgICAgICAgICB2YXIgcnVsZXNDaGFuZ2VkID0gcnVsZXNNb2RDYWNoZS5zaXplID09PSAwO1xyXG4gICAgICAgICAgICB2YXIgbm90Rm91bmRDYWNoZUtleXMgPSBuZXcgU2V0KHJ1bGVzTW9kQ2FjaGUua2V5cygpKTtcclxuICAgICAgICAgICAgdmFyIHRoZW1lS2V5ID0gZ2V0VGhlbWVLZXkodGhlbWUpO1xyXG4gICAgICAgICAgICB2YXIgdGhlbWVDaGFuZ2VkID0gdGhlbWVLZXkgIT09IHByZXZGaWx0ZXJLZXk7XHJcbiAgICAgICAgICAgIGlmIChoYXNOb25Mb2FkZWRMaW5rKSB7XHJcbiAgICAgICAgICAgICAgICB3YXNSZWJ1aWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbW9kUnVsZXMgPSBbXTtcclxuICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKFxyXG4gICAgICAgICAgICAgICAgcnVsZXMsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gcnVsZS5jc3NUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0RGlmZmVyc0Zyb21QcmV2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRDYWNoZUtleXMuZGVsZXRlKGNzc1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlLnBhcmVudFJ1bGUgaW5zdGFuY2VvZiBDU1NNZWRpYVJ1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCArPSBcIjtcIi5jb25jYXQocnVsZS5wYXJlbnRSdWxlLm1lZGlhLm1lZGlhVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcnVsZXNUZXh0Q2FjaGUuaGFzKGNzc1RleHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzVGV4dENhY2hlLmFkZChjc3NUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpZmZlcnNGcm9tUHJldiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RGlmZmVyc0Zyb21QcmV2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kUnVsZXMucHVzaChydWxlc01vZENhY2hlLmdldChjc3NUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZERlY3MgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSBnZXRNb2RpZmlhYmxlQ1NTRGVjbGFyYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlQW5hbHlzaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kRGVjcy5wdXNoKG1vZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RSdWxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kRGVjcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRSdWxlID0gcnVsZS5wYXJlbnRSdWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RSdWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHJ1bGUuc2VsZWN0b3JUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBtb2REZWNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50UnVsZTogcGFyZW50UnVsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RSdWxlcy5wdXNoKG1vZFJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBydWxlc01vZENhY2hlLnNldChjc3NUZXh0LCBtb2RSdWxlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzTm9uTG9hZGVkTGluayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG5vdEZvdW5kQ2FjaGVLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcnVsZXNUZXh0Q2FjaGUuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgICAgICBydWxlc01vZENhY2hlLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJldkZpbHRlcktleSA9IHRoZW1lS2V5O1xyXG4gICAgICAgICAgICBpZiAoIWZvcmNlICYmICFydWxlc0NoYW5nZWQgJiYgIXRoZW1lQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbmRlcklkKys7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFJ1bGUodGFyZ2V0LCBpbmRleCwgcnVsZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gcnVsZS5zZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBydWxlLmRlY2xhcmF0aW9ucztcclxuICAgICAgICAgICAgICAgIHZhciBnZXREZWNsYXJhdGlvblRleHQgPSBmdW5jdGlvbiAoZGVjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gZGVjLnByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGRlYy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50ID0gZGVjLmltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUgPSBkZWMuc291cmNlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChwcm9wZXJ0eSwgXCI6IFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHZhbHVlID09IG51bGwgPyBzb3VyY2VWYWx1ZSA6IHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGltcG9ydGFudCA/IFwiICFpbXBvcnRhbnRcIiA6IFwiXCIsIFwiO1wiKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgY3NzUnVsZXNUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkZWNsYXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjc3NSdWxlc1RleHQgKz0gXCJcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERlY2xhcmF0aW9uVGV4dChkZWNsYXJhdGlvbnMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBydWxlVGV4dCA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHNlbGVjdG9yLCBcIiB7IFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQoY3NzUnVsZXNUZXh0LCBcIiB9XCIpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0Lmluc2VydFJ1bGUocnVsZVRleHQsIGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgYXN5bmNEZWNsYXJhdGlvbnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHZhciB2YXJEZWNsYXJhdGlvbnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHZhciBhc3luY0RlY2xhcmF0aW9uQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHZhciB2YXJEZWNsYXJhdGlvbkNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICB2YXIgcm9vdFJlYWR5R3JvdXAgPSB7cnVsZTogbnVsbCwgcnVsZXM6IFtdLCBpc0dyb3VwOiB0cnVlfTtcclxuICAgICAgICAgICAgdmFyIGdyb3VwUmVmcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEdyb3VwKHJ1bGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChydWxlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdFJlYWR5R3JvdXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSZWZzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cFJlZnMuZ2V0KHJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGdyb3VwID0ge3J1bGU6IHJ1bGUsIHJ1bGVzOiBbXSwgaXNHcm91cDogdHJ1ZX07XHJcbiAgICAgICAgICAgICAgICBncm91cFJlZnMuc2V0KHJ1bGUsIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRHcm91cCA9IGdldEdyb3VwKHJ1bGUucGFyZW50UnVsZSk7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRHcm91cC5ydWxlcy5wdXNoKGdyb3VwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBncm91cDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXJUeXBlQ2hhbmdlQ2xlYW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoY2xlYXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjbGVhcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyVHlwZUNoYW5nZUNsZWFuZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIG1vZFJ1bGVzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gX2Euc2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IF9hLmRlY2xhcmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50UnVsZSA9IF9hLnBhcmVudFJ1bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdyb3VwID0gZ2V0R3JvdXAocGFyZW50UnVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWR5U3R5bGVSdWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JvdXA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZHlEZWNsYXJhdGlvbnMgPSByZWFkeVN0eWxlUnVsZS5kZWNsYXJhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAucnVsZXMucHVzaChyZWFkeVN0eWxlUnVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlQXN5bmNEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhc3luY0tleSA9ICsrYXN5bmNEZWNsYXJhdGlvbkNvdW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhc3luY0RlY2xhcmF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jS2V5OiBhc3luY0tleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOiBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5wdXNoKGFzeW5jRGVjbGFyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFJlbmRlcklkID0gcmVuZGVySWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLnRoZW4oZnVuY3Rpb24gKGFzeW5jVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhYXN5bmNWYWx1ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZW5kZXJJZCAhPT0gcmVuZGVySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jRGVjbGFyYXRpb24udmFsdWUgPSBhc3luY1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNRdWV1ZS5hZGQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZCgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZW5kZXJJZCAhPT0gcmVuZGVySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWJ1aWxkQXN5bmNSdWxlKGFzeW5jS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlVmFyRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gbW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJEZWNzID0gX2EuZGVjbGFyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25UeXBlQ2hhbmdlID0gX2Eub25UeXBlQ2hhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFyS2V5ID0gKyt2YXJEZWNsYXJhdGlvbkNvdW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UmVuZGVySWQgPSByZW5kZXJJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluaXRpYWxJbmRleCA9IHJlYWR5RGVjbGFyYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9sZERlY3MgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhckRlY3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcERlYyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOiBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJLZXk6IHZhcktleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2godGVtcERlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREZWNzID0gW3RlbXBEZWNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhckRlY3MuZm9yRWFjaChmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kLnZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUFzeW5jRGVjbGFyYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZC5wcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWR5RGVjID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogbW9kLnByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJLZXk6IHZhcktleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaChyZWFkeURlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjcy5wdXNoKHJlYWR5RGVjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVHlwZUNoYW5nZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAobmV3RGVjcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZW5kZXJJZCAhPT0gcmVuZGVySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkeVZhckRlY3MgPSBuZXdEZWNzLm1hcChmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IG1vZC5wcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOiBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyS2V5OiB2YXJLZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSByZWFkeURlY2xhcmF0aW9ucy5pbmRleE9mKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZERlY3NbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMuc3BsaWNlLmFwcGx5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc3ByZWFkQXJyYXkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRleCwgb2xkRGVjcy5sZW5ndGhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3JlYWQocmVhZHlWYXJEZWNzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjcyA9IHJlYWR5VmFyRGVjcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYnVpbGRWYXJSdWxlKHZhcktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJUeXBlQ2hhbmdlQ2xlYW5lcnMuYWRkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvblR5cGVDaGFuZ2UucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gX2EucHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IF9hLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50ID0gX2EuaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUgPSBfYS5zb3VyY2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWQgPSB2YWx1ZSh0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZWQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXN5bmNEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVmFyRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTogc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBzaGVldCA9IHByZXBhcmVTaGVldCgpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBidWlsZFN0eWxlU2hlZXQoKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVUYXJnZXQoZ3JvdXAsIHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBydWxlID0gZ3JvdXAucnVsZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZSBpbnN0YW5jZW9mIENTU01lZGlhUnVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVkaWEgPSBydWxlLm1lZGlhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJlbnQuY3NzUnVsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0UnVsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQG1lZGlhIFwiLmNvbmNhdChtZWRpYS5tZWRpYVRleHQsIFwiIHt9XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jc3NSdWxlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpdGVyYXRlUmVhZHlSdWxlcyhncm91cCwgdGFyZ2V0LCBzdHlsZUl0ZXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAucnVsZXMuZm9yRWFjaChmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5pc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGNyZWF0ZVRhcmdldChyLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZVJlYWR5UnVsZXMociwgdCwgc3R5bGVJdGVyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUl0ZXJhdG9yKHIsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVSZWFkeVJ1bGVzKFxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RSZWFkeUdyb3VwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChydWxlLCB0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGFyZ2V0LmNzc1J1bGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5kZWNsYXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhc3luY0tleSA9IF9hLmFzeW5jS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcktleSA9IF9hLnZhcktleTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhc3luY0tleSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNEZWNsYXJhdGlvbnMuc2V0KGFzeW5jS2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGU6IHJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YXJLZXkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhckRlY2xhcmF0aW9ucy5zZXQodmFyS2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGU6IHJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJ1bGUodGFyZ2V0LCBpbmRleCwgcnVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWJ1aWxkQXN5bmNSdWxlKGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gYXN5bmNEZWNsYXJhdGlvbnMuZ2V0KGtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZSA9IF9hLnJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gX2EudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gX2EuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGVsZXRlUnVsZShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzZXRSdWxlKHRhcmdldCwgaW5kZXgsIHJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgYXN5bmNEZWNsYXJhdGlvbnMuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVidWlsZFZhclJ1bGUoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSB2YXJEZWNsYXJhdGlvbnMuZ2V0KGtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZSA9IF9hLnJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gX2EudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gX2EuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGVsZXRlUnVsZShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzZXRSdWxlKHRhcmdldCwgaW5kZXgsIHJ1bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1aWxkU3R5bGVTaGVldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtb2RpZnlTaGVldDogbW9kaWZ5U2hlZXQsXHJcbiAgICAgICAgICAgIHNob3VsZFJlYnVpbGRTdHlsZTogc2hvdWxkUmVidWlsZFN0eWxlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgU1RZTEVfU0VMRUNUT1IgPSAnc3R5bGUsIGxpbmtbcmVsKj1cInN0eWxlc2hlZXRcIiBpXTpub3QoW2Rpc2FibGVkXSknO1xyXG4gICAgZnVuY3Rpb24gaXNGb250c0dvb2dsZUFwaVN0eWxlKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQuaHJlZikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50VVJMID0gbmV3IFVSTChlbGVtZW50LmhyZWYpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFVSTC5ob3N0bmFtZSA9PT0gXCJmb250cy5nb29nbGVhcGlzLmNvbVwiO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBsb2dJbmZvKFwiQ291bGRuJ3QgY29uc3RydWN0IFwiLmNvbmNhdChlbGVtZW50LmhyZWYsIFwiIGFzIFVSTFwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG91bGRNYW5hZ2VTdHlsZShlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50IHx8XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgU1ZHU3R5bGVFbGVtZW50IHx8XHJcbiAgICAgICAgICAgICAgICAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInN0eWxlc2hlZXRcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmhyZWYgJiZcclxuICAgICAgICAgICAgICAgICAgICAhZWxlbWVudC5kaXNhYmxlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChpc0ZpcmVmb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAhZWxlbWVudC5ocmVmLnN0YXJ0c1dpdGgoXCJtb3otZXh0ZW5zaW9uOi8vXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAhaXNGb250c0dvb2dsZUFwaVN0eWxlKGVsZW1lbnQpKSkgJiZcclxuICAgICAgICAgICAgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya3JlYWRlclwiKSAmJlxyXG4gICAgICAgICAgICBlbGVtZW50Lm1lZGlhLnRvTG93ZXJDYXNlKCkgIT09IFwicHJpbnRcIiAmJlxyXG4gICAgICAgICAgICAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdHlsdXNcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TWFuYWdlYWJsZVN0eWxlcyhub2RlLCByZXN1bHRzLCBkZWVwKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdHMgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICByZXN1bHRzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZWVwID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgZGVlcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG91bGRNYW5hZ2VTdHlsZShub2RlKSkge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgfHxcclxuICAgICAgICAgICAgKGlzU2hhZG93RG9tU3VwcG9ydGVkICYmIG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB8fFxyXG4gICAgICAgICAgICBub2RlID09PSBkb2N1bWVudFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBmb3JFYWNoKG5vZGUucXVlcnlTZWxlY3RvckFsbChTVFlMRV9TRUxFQ1RPUiksIGZ1bmN0aW9uIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldE1hbmFnZWFibGVTdHlsZXMoc3R5bGUsIHJlc3VsdHMsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMobm9kZSwgZnVuY3Rpb24gKGhvc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TWFuYWdlYWJsZVN0eWxlcyhob3N0LnNoYWRvd1Jvb3QsIHJlc3VsdHMsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG4gICAgdmFyIHN5bmNTdHlsZVNldCA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICB2YXIgY29yc1N0eWxlU2V0ID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIHZhciBjYW5PcHRpbWl6ZVVzaW5nUHJveHkkMSA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcIl9fZGFya3JlYWRlcl9faW5saW5lU2NyaXB0c0FsbG93ZWRcIixcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNhbk9wdGltaXplVXNpbmdQcm94eSQxID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgdmFyIGxvYWRpbmdMaW5rQ291bnRlciA9IDA7XHJcbiAgICB2YXIgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gY2xlYW5Mb2FkaW5nTGlua3MoKSB7XHJcbiAgICAgICAgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtYW5hZ2VTdHlsZShlbGVtZW50LCBfYSkge1xyXG4gICAgICAgIHZhciB1cGRhdGUgPSBfYS51cGRhdGUsXHJcbiAgICAgICAgICAgIGxvYWRpbmdTdGFydCA9IF9hLmxvYWRpbmdTdGFydCxcclxuICAgICAgICAgICAgbG9hZGluZ0VuZCA9IF9hLmxvYWRpbmdFbmQ7XHJcbiAgICAgICAgdmFyIHByZXZTdHlsZXMgPSBbXTtcclxuICAgICAgICB2YXIgbmV4dCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUgKFxyXG4gICAgICAgICAgICAobmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nKSAmJlxyXG4gICAgICAgICAgICBuZXh0Lm1hdGNoZXMoXCIuZGFya3JlYWRlclwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwcmV2U3R5bGVzLnB1c2gobmV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb3JzQ29weSA9XHJcbiAgICAgICAgICAgIHByZXZTdHlsZXMuZmluZChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbC5tYXRjaGVzKFwiLmRhcmtyZWFkZXItLWNvcnNcIikgJiYgIWNvcnNTdHlsZVNldC5oYXMoZWwpO1xyXG4gICAgICAgICAgICB9KSB8fCBudWxsO1xyXG4gICAgICAgIHZhciBzeW5jU3R5bGUgPVxyXG4gICAgICAgICAgICBwcmV2U3R5bGVzLmZpbmQoZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwubWF0Y2hlcyhcIi5kYXJrcmVhZGVyLS1zeW5jXCIpICYmICFzeW5jU3R5bGVTZXQuaGFzKGVsKTtcclxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcclxuICAgICAgICB2YXIgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIgPSBudWxsO1xyXG4gICAgICAgIHZhciBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgPSBudWxsO1xyXG4gICAgICAgIHZhciBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaXNPdmVycmlkZUVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc2hlZXRNb2RpZmllciA9IGNyZWF0ZVN0eWxlU2hlZXRNb2RpZmllcigpO1xyXG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmdW5jdGlvbiBjb250YWluc0NTU0ltcG9ydCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKS5tYXRjaChjc3NJbXBvcnRSZWdleClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaGFzSW1wb3J0cyhjc3NSdWxlcywgY2hlY2tDcm9zc09yaWdpbikge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ1bGUgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICBjc3NSdWxlc0xvb3A6IGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwLCBsZW4gPSBjc3NSdWxlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA8IGxlbjtcclxuICAgICAgICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUgPSBjc3NSdWxlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5ocmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0Nyb3NzT3JpZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJ1bGUuaHJlZi5zdGFydHNXaXRoKGxvY2F0aW9uLm9yaWdpbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgY3NzUnVsZXNMb29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGNzc1J1bGVzTG9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBnZXRSdWxlc1N5bmMoKSB7XHJcbiAgICAgICAgICAgIGlmIChjb3JzQ29weSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvcnNDb3B5LnNoZWV0LmNzc1J1bGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb250YWluc0NTU0ltcG9ydCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY3NzUnVsZXMgPSBzYWZlR2V0U2hlZXRSdWxlcygpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAhaXNSZWxhdGl2ZUhyZWZPbkFic29sdXRlUGF0aChlbGVtZW50LmhyZWYpICYmXHJcbiAgICAgICAgICAgICAgICBoYXNJbXBvcnRzKGNzc1J1bGVzLCBmYWxzZSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaGFzSW1wb3J0cyhjc3NSdWxlcywgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjc3NSdWxlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaW5zZXJ0U3R5bGUoKSB7XHJcbiAgICAgICAgICAgIGlmIChjb3JzQ29weSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcgIT09IGNvcnNDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29yc0NvcHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQubmV4dFNpYmxpbmdcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvcnNDb3B5Lm5leHRTaWJsaW5nICE9PSBzeW5jU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW5jU3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5Lm5leHRTaWJsaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nICE9PSBzeW5jU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3luY1N0eWxlLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTeW5jU3R5bGUoKSB7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZSA9XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgU1ZHU3R5bGVFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICBzeW5jU3R5bGUuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXJcIik7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZS5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlci0tc3luY1wiKTtcclxuICAgICAgICAgICAgc3luY1N0eWxlLm1lZGlhID0gXCJzY3JlZW5cIjtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHN5bmNTdHlsZS50aXRsZSA9IGVsZW1lbnQudGl0bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3luY1N0eWxlU2V0LmFkZChzeW5jU3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXNMb2FkaW5nUnVsZXMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgd2FzTG9hZGluZ0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGxvYWRpbmdMaW5rSWQgPSArK2xvYWRpbmdMaW5rQ291bnRlcjtcclxuICAgICAgICBmdW5jdGlvbiBnZXRSdWxlc0FzeW5jKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3NzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBjc3NCYXNlUGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBfYSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NSdWxlcyxcclxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NFcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBmdWxsQ1NTVGV4dDtcclxuICAgICAgICAgICAgICAgIHZhciBfYjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBfX3JlYWQoZ2V0UnVsZXNPckVycm9yKCksIDIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3NzUnVsZXMgPSBfYVswXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjY2Vzc0Vycm9yID0gX2FbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghY3NzUnVsZXMgJiYgIWFjY2Vzc0Vycm9yICYmICFpc1NhZmFyaSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzU2FmYXJpICYmICFlbGVtZW50LnNoZWV0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1N0aWxsTG9hZGluZ0Vycm9yKGFjY2Vzc0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBsaW5rTG9hZGluZyhlbGVtZW50LCBsb2FkaW5nTGlua0lkKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhc0xvYWRpbmdFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FuY2VsQXN5bmNPcGVyYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfYiA9IF9fcmVhZChnZXRSdWxlc09yRXJyb3IoKSwgMikpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjc3NSdWxlcyA9IF9iWzBdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWNjZXNzRXJyb3IgPSBfYlsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzSW1wb3J0cyhjc3NSdWxlcywgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgY3NzUnVsZXNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgbG9hZFRleHQoZWxlbWVudC5ocmVmKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NCYXNlUGF0aCA9IGdldENTU0Jhc2VCYXRoKGVsZW1lbnQuaHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FuY2VsQXN5bmNPcGVyYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgOF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluc0NTU0ltcG9ydCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0Jhc2VQYXRoID0gZ2V0Q1NTQmFzZUJhdGgobG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbnVsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3NzVGV4dCkgcmV0dXJuIFszLCAxM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbOSwgMTEsICwgMTJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcmVwbGFjZUNTU0ltcG9ydHMoY3NzVGV4dCwgY3NzQmFzZVBhdGgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxDU1NUZXh0ID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yc0NvcHkgPSBjcmVhdGVDT1JTQ29weShlbGVtZW50LCBmdWxsQ1NTVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDEyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIgPSB3YXRjaEZvck5vZGVQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yc0NvcHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldi1zaWJsaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgY29yc0NvcHkuc2hlZXQuY3NzUnVsZXNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbnVsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkZXRhaWxzKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIHJ1bGVzID0gZ2V0UnVsZXNTeW5jKCk7XHJcbiAgICAgICAgICAgIGlmICghcnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNlY29uZFJvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nUnVsZXMgfHwgd2FzTG9hZGluZ0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmdSdWxlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nU3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGdldFJ1bGVzQXN5bmMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZ1J1bGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdFbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmdSdWxlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge3J1bGVzOiBydWxlc307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmb3JjZVJlbmRlclN0eWxlID0gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKHRoZW1lLCBpZ25vcmVJbWFnZUFuYWx5c2lzKSB7XHJcbiAgICAgICAgICAgIHZhciBydWxlcyA9IGdldFJ1bGVzU3luYygpO1xyXG4gICAgICAgICAgICBpZiAoIXJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUNTU1J1bGVzRnJvbVNoZWV0KHNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gc2hlZXQuY3NzUnVsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVldC5kZWxldGVSdWxlKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByZXBhcmVPdmVycmlkZXNTaGVldCgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3luY1N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU3luY1N0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgJiYgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGluc2VydFN0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3luY1N0eWxlLnNoZWV0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jU3R5bGUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHNoZWV0ID0gc3luY1N0eWxlLnNoZWV0O1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ1NTUnVsZXNGcm9tU2hlZXQoc2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyID0gd2F0Y2hGb3JOb2RlUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bmNTdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2LXNpYmxpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VSZW5kZXJTdHlsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWlsZE92ZXJyaWRlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzeW5jU3R5bGUuc2hlZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gYnVpbGRPdmVycmlkZXMoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm9yY2UgPSBmb3JjZVJlbmRlclN0eWxlO1xyXG4gICAgICAgICAgICAgICAgZm9yY2VSZW5kZXJTdHlsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2hlZXRNb2RpZmllci5tb2RpZnlTaGVldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlcGFyZVNoZWV0OiBwcmVwYXJlT3ZlcnJpZGVzU2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlQ1NTUnVsZXM6IHJ1bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lOiB0aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZUFuYWx5c2lzOiBpZ25vcmVJbWFnZUFuYWx5c2lzLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlOiBmb3JjZSxcclxuICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW5jZWxBc3luY09wZXJhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpc092ZXJyaWRlRW1wdHkgPSBzeW5jU3R5bGUuc2hlZXQuY3NzUnVsZXMubGVuZ3RoID09PSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoZWV0TW9kaWZpZXIuc2hvdWxkUmVidWlsZFN0eWxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRSZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWlsZE92ZXJyaWRlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBnZXRSdWxlc09yRXJyb3IoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zaGVldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBudWxsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbZWxlbWVudC5zaGVldC5jc3NSdWxlcywgbnVsbF07XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBlcnJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGlzU3RpbGxMb2FkaW5nRXJyb3IoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yICYmIGVycm9yLm1lc3NhZ2UgJiYgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcImxvYWRpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNhZmVHZXRTaGVldFJ1bGVzKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSBfX3JlYWQoZ2V0UnVsZXNPckVycm9yKCksIDIpLFxyXG4gICAgICAgICAgICAgICAgY3NzUnVsZXMgPSBfYVswXSxcclxuICAgICAgICAgICAgICAgIGVyciA9IF9hWzFdO1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY3NzUnVsZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoRm9yU2hlZXRDaGFuZ2VzKCkge1xyXG4gICAgICAgICAgICB3YXRjaEZvclNoZWV0Q2hhbmdlc1VzaW5nUHJveHkoKTtcclxuICAgICAgICAgICAgaWYgKCEoY2FuT3B0aW1pemVVc2luZ1Byb3h5JDEgJiYgZWxlbWVudC5zaGVldCkpIHtcclxuICAgICAgICAgICAgICAgIHdhdGNoRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcnVsZXNDaGFuZ2VLZXkgPSBudWxsO1xyXG4gICAgICAgIHZhciBydWxlc0NoZWNrRnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXNDaGFuZ2VLZXkoKSB7XHJcbiAgICAgICAgICAgIHZhciBydWxlcyA9IHNhZmVHZXRTaGVldFJ1bGVzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBydWxlcyA/IHJ1bGVzLmxlbmd0aCA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRpZFJ1bGVzS2V5Q2hhbmdlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UnVsZXNDaGFuZ2VLZXkoKSAhPT0gcnVsZXNDaGFuZ2VLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKSB7XHJcbiAgICAgICAgICAgIHJ1bGVzQ2hhbmdlS2V5ID0gZ2V0UnVsZXNDaGFuZ2VLZXkoKTtcclxuICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKTtcclxuICAgICAgICAgICAgdmFyIGNoZWNrRm9yVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpZFJ1bGVzS2V5Q2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBydWxlc0NoYW5nZUtleSA9IGdldFJ1bGVzQ2hhbmdlS2V5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FuT3B0aW1pemVVc2luZ1Byb3h5JDEgJiYgZWxlbWVudC5zaGVldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVsZXNDaGVja0ZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hlY2tGb3JVcGRhdGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjaGVja0ZvclVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpIHtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocnVsZXNDaGVja0ZyYW1lSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXJlU2hlZXRDaGFuZ2VzUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2hlZXRDaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgIGNhbk9wdGltaXplVXNpbmdQcm94eSQxID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKTtcclxuICAgICAgICAgICAgaWYgKGFyZVNoZWV0Q2hhbmdlc1BlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVTaGVldENoYW5nZXMoKSB7XHJcbiAgICAgICAgICAgICAgICBhcmVTaGVldENoYW5nZXNQZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsQXN5bmNPcGVyYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJlU2hlZXRDaGFuZ2VzUGVuZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcXVldWVNaWNyb3Rhc2sgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soaGFuZGxlU2hlZXRDaGFuZ2VzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGVTaGVldENoYW5nZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoRm9yU2hlZXRDaGFuZ2VzVXNpbmdQcm94eSgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX3VwZGF0ZVNoZWV0XCIsXHJcbiAgICAgICAgICAgICAgICBvblNoZWV0Q2hhbmdlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUHJveHkoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX191cGRhdGVTaGVldFwiLFxyXG4gICAgICAgICAgICAgICAgb25TaGVldENoYW5nZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXMoKSB7XHJcbiAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUHJveHkoKTtcclxuICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcGF1c2UoKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIgJiYgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgJiYgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgICAgIHBhdXNlKCk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoY29yc0NvcHkpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKHN5bmNTdHlsZSk7XHJcbiAgICAgICAgICAgIGxvYWRpbmdFbmQoKTtcclxuICAgICAgICAgICAgaWYgKHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5oYXMobG9hZGluZ0xpbmtJZCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWplY3QgPSByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuZ2V0KGxvYWRpbmdMaW5rSWQpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmRlbGV0ZShsb2FkaW5nTGlua0lkKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCAmJiByZWplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaCgpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCBvYnNlcnZlck9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHdhdGNoRm9yU2hlZXRDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1heE1vdmVDb3VudCA9IDEwO1xyXG4gICAgICAgIHZhciBtb3ZlQ291bnQgPSAwO1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlc3RvcmUoKSB7XHJcbiAgICAgICAgICAgIGlmICghc3luY1N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW92ZUNvdW50Kys7XHJcbiAgICAgICAgICAgIGlmIChtb3ZlQ291bnQgPiBtYXhNb3ZlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnNlcnRTdHlsZSgpO1xyXG4gICAgICAgICAgICBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlciAmJiBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlci5za2lwKCk7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlciAmJiBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIuc2tpcCgpO1xyXG4gICAgICAgICAgICBpZiAoIWlzT3ZlcnJpZGVFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgZm9yY2VSZW5kZXJTdHlsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzLFxyXG4gICAgICAgICAgICByZW5kZXI6IHJlbmRlcixcclxuICAgICAgICAgICAgcGF1c2U6IHBhdXNlLFxyXG4gICAgICAgICAgICBkZXN0cm95OiBkZXN0cm95LFxyXG4gICAgICAgICAgICB3YXRjaDogd2F0Y2gsXHJcbiAgICAgICAgICAgIHJlc3RvcmU6IHJlc3RvcmVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbGlua0xvYWRpbmcobGluaywgbG9hZGluZ0lkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xlYW5VcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgb25Mb2FkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmRlbGV0ZShsb2FkaW5nSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5VcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuVXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxpbmtlbGVtZW50IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQobG9hZGluZ0lkLCBcIiBjb3VsZG4ndCBiZSBsb2FkZWQuIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGxpbmsuaHJlZilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5zZXQobG9hZGluZ0lkLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhblVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgb25Mb2FkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGluay5ocmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRDU1NJbXBvcnRVUkwoaW1wb3J0RGVjbGFyYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gZ2V0Q1NTVVJMVmFsdWUoXHJcbiAgICAgICAgICAgIGltcG9ydERlY2xhcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDcpXHJcbiAgICAgICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvOyQvLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL3NjcmVlbiQvLCBcIlwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsb2FkVGV4dCh1cmwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkgcmV0dXJuIFszLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBmZXRjaCh1cmwpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgX2Euc2VudCgpLnRleHQoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnRmV0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWltZVR5cGU6IFwidGV4dC9jc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU0ltcG9ydHMoY3NzVGV4dCwgYmFzZVBhdGgsIGNhY2hlKSB7XHJcbiAgICAgICAgaWYgKGNhY2hlID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgY2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGltcG9ydE1hdGNoZXMsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRNYXRjaGVzXzEsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRNYXRjaGVzXzFfMSxcclxuICAgICAgICAgICAgICAgIG1hdGNoLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0VVJMLFxyXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVVUkwsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyxcclxuICAgICAgICAgICAgICAgIGVfMV8xO1xyXG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IHJlbW92ZUNTU0NvbW1lbnRzKGNzc1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gcmVwbGFjZUNTU0ZvbnRGYWNlKGNzc1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gcmVwbGFjZUNTU1JlbGF0aXZlVVJMc1dpdGhBYnNvbHV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlUGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRNYXRjaGVzID0gZ2V0TWF0Y2hlcyhjc3NJbXBvcnRSZWdleCwgY3NzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMSwgMTAsIDExLCAxMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW1wb3J0TWF0Y2hlc18xID0gX192YWx1ZXMoaW1wb3J0TWF0Y2hlcykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGltcG9ydE1hdGNoZXNfMV8xID0gaW1wb3J0TWF0Y2hlc18xLm5leHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWltcG9ydE1hdGNoZXNfMV8xLmRvbmUpIHJldHVybiBbMywgOV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gaW1wb3J0TWF0Y2hlc18xXzEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydFVSTCA9IGdldENTU0ltcG9ydFVSTChtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFic29sdXRlVVJMID0gZ2V0QWJzb2x1dGVVUkwoYmFzZVBhdGgsIGltcG9ydFVSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhY2hlLmhhcyhhYnNvbHV0ZVVSTCkpIHJldHVybiBbMywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gY2FjaGUuZ2V0KGFic29sdXRlVVJMKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMywgNiwgLCA3XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgbG9hZFRleHQoYWJzb2x1dGVVUkwpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS5zZXQoYWJzb2x1dGVVUkwsIGltcG9ydGVkQ1NTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ1NTSW1wb3J0cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDU1NCYXNlQmF0aChhYnNvbHV0ZVVSTCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5zcGxpdChtYXRjaCkuam9pbihpbXBvcnRlZENTUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gODtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydE1hdGNoZXNfMV8xID0gaW1wb3J0TWF0Y2hlc18xLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMV8xID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSB7ZXJyb3I6IGVfMV8xfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxMl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRNYXRjaGVzXzFfMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpbXBvcnRNYXRjaGVzXzFfMS5kb25lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gaW1wb3J0TWF0Y2hlc18xLnJldHVybilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5jYWxsKGltcG9ydE1hdGNoZXNfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgY3NzVGV4dF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ09SU0NvcHkoc3JjRWxlbWVudCwgY3NzVGV4dCkge1xyXG4gICAgICAgIGlmICghY3NzVGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgY29ycy5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlclwiKTtcclxuICAgICAgICBjb3JzLmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyLS1jb3JzXCIpO1xyXG4gICAgICAgIGNvcnMubWVkaWEgPSBcInNjcmVlblwiO1xyXG4gICAgICAgIGNvcnMudGV4dENvbnRlbnQgPSBjc3NUZXh0O1xyXG4gICAgICAgIHNyY0VsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29ycywgc3JjRWxlbWVudC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgY29ycy5zaGVldC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY29yc1N0eWxlU2V0LmFkZChjb3JzKTtcclxuICAgICAgICByZXR1cm4gY29ycztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgb2JzZXJ2ZXJzID0gW107XHJcbiAgICB2YXIgb2JzZXJ2ZWRSb290cztcclxuICAgIHZhciB1bmRlZmluZWRHcm91cHMgPSBuZXcgTWFwKCk7XHJcbiAgICB2YXIgZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2s7XHJcbiAgICBmdW5jdGlvbiBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMocm9vdCkge1xyXG4gICAgICAgIGlmICghaXNEZWZpbmVkU2VsZWN0b3JTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3JFYWNoKHJvb3QucXVlcnlTZWxlY3RvckFsbChcIjpub3QoOmRlZmluZWQpXCIpLCBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgdmFyIHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYgKCF0YWcuaW5jbHVkZXMoXCItXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXh0ZW5kZWRUYWcgPSBlbC5nZXRBdHRyaWJ1dGUoXCJpc1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChleHRlbmRlZFRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZyA9IGV4dGVuZGVkVGFnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF1bmRlZmluZWRHcm91cHMuaGFzKHRhZykpIHtcclxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZEdyb3Vwcy5zZXQodGFnLCBuZXcgU2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudHNXaGVuRGVmaW5lZCh0YWcpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSB1bmRlZmluZWRHcm91cHMuZ2V0KHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZEdyb3Vwcy5kZWxldGUodGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2soQXJyYXkuZnJvbShlbGVtZW50cykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVuZGVmaW5lZEdyb3Vwcy5nZXQodGFnKS5hZGQoZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIGNhbk9wdGltaXplVXNpbmdQcm94eSA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcIl9fZGFya3JlYWRlcl9faW5saW5lU2NyaXB0c0FsbG93ZWRcIixcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNhbk9wdGltaXplVXNpbmdQcm94eSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIHZhciByZXNvbHZlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJc0RlZmluZWQoZSkge1xyXG4gICAgICAgIGNhbk9wdGltaXplVXNpbmdQcm94eSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHJlc29sdmVycy5oYXMoZS5kZXRhaWwudGFnKSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzb2x2ZSA9IHJlc29sdmVycy5nZXQoZS5kZXRhaWwudGFnKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGN1c3RvbUVsZW1lbnRzV2hlbkRlZmluZWQodGFnKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmN1c3RvbUVsZW1lbnRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRhZykudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhbk9wdGltaXplVXNpbmdQcm94eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJzLnNldCh0YWcsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZGRVbmRlZmluZWRSZXNvbHZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsOiB7dGFnOiB0YWd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tJZkRlZmluZWRfMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSB1bmRlZmluZWRHcm91cHMuZ2V0KHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzICYmIGVsZW1lbnRzLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZS5tYXRjaGVzKFwiOmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hlY2tJZkRlZmluZWRfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrSWZEZWZpbmVkXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd2F0Y2hXaGVuQ3VzdG9tRWxlbWVudHNEZWZpbmVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlRnJvbURlZmluZUN1c3RvbUVsZW1lbnRzKCkge1xyXG4gICAgICAgIGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB1bmRlZmluZWRHcm91cHMuY2xlYXIoKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9faXNEZWZpbmVkXCIsXHJcbiAgICAgICAgICAgIGhhbmRsZUlzRGVmaW5lZFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvclN0eWxlQ2hhbmdlcyhjdXJyZW50U3R5bGVzLCB1cGRhdGUsIHNoYWRvd1Jvb3REaXNjb3ZlcmVkKSB7XHJcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9yU3R5bGVDaGFuZ2VzKCk7XHJcbiAgICAgICAgdmFyIHByZXZTdHlsZXMgPSBuZXcgU2V0KGN1cnJlbnRTdHlsZXMpO1xyXG4gICAgICAgIHZhciBwcmV2U3R5bGVTaWJsaW5ncyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgdmFyIG5leHRTdHlsZVNpYmxpbmdzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICBmdW5jdGlvbiBzYXZlU3R5bGVQb3NpdGlvbihzdHlsZSkge1xyXG4gICAgICAgICAgICBwcmV2U3R5bGVTaWJsaW5ncy5zZXQoc3R5bGUsIHN0eWxlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpO1xyXG4gICAgICAgICAgICBuZXh0U3R5bGVTaWJsaW5ncy5zZXQoc3R5bGUsIHN0eWxlLm5leHRFbGVtZW50U2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGZvcmdldFN0eWxlUG9zaXRpb24oc3R5bGUpIHtcclxuICAgICAgICAgICAgcHJldlN0eWxlU2libGluZ3MuZGVsZXRlKHN0eWxlKTtcclxuICAgICAgICAgICAgbmV4dFN0eWxlU2libGluZ3MuZGVsZXRlKHN0eWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGlkU3R5bGVQb3NpdGlvbkNoYW5nZShzdHlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgc3R5bGUucHJldmlvdXNFbGVtZW50U2libGluZyAhPT0gcHJldlN0eWxlU2libGluZ3MuZ2V0KHN0eWxlKSB8fFxyXG4gICAgICAgICAgICAgICAgc3R5bGUubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBuZXh0U3R5bGVTaWJsaW5ncy5nZXQoc3R5bGUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRTdHlsZXMuZm9yRWFjaChzYXZlU3R5bGVQb3NpdGlvbik7XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlU3R5bGVPcGVyYXRpb25zKG9wZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIGNyZWF0ZWRTdHlsZXMgPSBvcGVyYXRpb25zLmNyZWF0ZWRTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzID0gb3BlcmF0aW9ucy5yZW1vdmVkU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgbW92ZWRTdHlsZXMgPSBvcGVyYXRpb25zLm1vdmVkU3R5bGVzO1xyXG4gICAgICAgICAgICBjcmVhdGVkU3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzYXZlU3R5bGVQb3NpdGlvbihzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1vdmVkU3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzYXZlU3R5bGVQb3NpdGlvbihzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcmdldFN0eWxlUG9zaXRpb24ocyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjcmVhdGVkU3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3R5bGVzLmFkZChzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZTdHlsZXMuZGVsZXRlKHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZFN0eWxlcy5zaXplICsgcmVtb3ZlZFN0eWxlcy5zaXplICsgbW92ZWRTdHlsZXMuc2l6ZSA+XHJcbiAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiBBcnJheS5mcm9tKGNyZWF0ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWQ6IEFycmF5LmZyb20ocmVtb3ZlZFN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZWQ6IEFycmF5LmZyb20obW92ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IFtdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVNaW5vclRyZWVNdXRhdGlvbnMoX2EpIHtcclxuICAgICAgICAgICAgdmFyIGFkZGl0aW9ucyA9IF9hLmFkZGl0aW9ucyxcclxuICAgICAgICAgICAgICAgIG1vdmVzID0gX2EubW92ZXMsXHJcbiAgICAgICAgICAgICAgICBkZWxldGlvbnMgPSBfYS5kZWxldGlvbnM7XHJcbiAgICAgICAgICAgIHZhciBjcmVhdGVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB2YXIgcmVtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdmFyIG1vdmVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldE1hbmFnZWFibGVTdHlsZXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlZFN0eWxlcy5hZGQoc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkZWxldGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldE1hbmFnZWFibGVTdHlsZXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVtb3ZlZFN0eWxlcy5hZGQoc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtb3Zlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TWFuYWdlYWJsZVN0eWxlcyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlZFN0eWxlcy5hZGQoc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBoYW5kbGVTdHlsZU9wZXJhdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlZFN0eWxlczogY3JlYXRlZFN0eWxlcyxcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRTdHlsZXM6IHJlbW92ZWRTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZFN0eWxlczogbW92ZWRTdHlsZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMobiwgc3Vic2NyaWJlRm9yU2hhZG93Um9vdENoYW5nZXMpO1xyXG4gICAgICAgICAgICAgICAgY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKG4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlSHVnZVRyZWVNdXRhdGlvbnMocm9vdCkge1xyXG4gICAgICAgICAgICB2YXIgc3R5bGVzID0gbmV3IFNldChnZXRNYW5hZ2VhYmxlU3R5bGVzKHJvb3QpKTtcclxuICAgICAgICAgICAgdmFyIGNyZWF0ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHZhciByZW1vdmVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB2YXIgbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZTdHlsZXMuaGFzKHMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZFN0eWxlcy5hZGQocyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwcmV2U3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3R5bGVzLmhhcyhzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMuYWRkKHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhY3JlYXRlZFN0eWxlcy5oYXMocykgJiZcclxuICAgICAgICAgICAgICAgICAgICAhcmVtb3ZlZFN0eWxlcy5oYXMocykgJiZcclxuICAgICAgICAgICAgICAgICAgICBkaWRTdHlsZVBvc2l0aW9uQ2hhbmdlKHMpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZFN0eWxlcy5hZGQocyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBoYW5kbGVTdHlsZU9wZXJhdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlZFN0eWxlczogY3JlYXRlZFN0eWxlcyxcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRTdHlsZXM6IHJlbW92ZWRTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZFN0eWxlczogbW92ZWRTdHlsZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhyb290LCBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlcyk7XHJcbiAgICAgICAgICAgIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhyb290KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQXR0cmlidXRlTXV0YXRpb25zKG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgdXBkYXRlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdmFyIHJlbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gbS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZE1hbmFnZVN0eWxlKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFN0eWxlcy5hZGQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMuYWRkKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZWRTdHlsZXMuc2l6ZSArIHJlbW92ZWRTdHlsZXMuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZDogQXJyYXkuZnJvbSh1cGRhdGVkU3R5bGVzKSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkOiBBcnJheS5mcm9tKHJlbW92ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVkOiBbXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZShyb290KSB7XHJcbiAgICAgICAgICAgIHZhciB0cmVlT2JzZXJ2ZXIgPSBjcmVhdGVPcHRpbWl6ZWRUcmVlT2JzZXJ2ZXIocm9vdCwge1xyXG4gICAgICAgICAgICAgICAgb25NaW5vck11dGF0aW9uczogaGFuZGxlTWlub3JUcmVlTXV0YXRpb25zLFxyXG4gICAgICAgICAgICAgICAgb25IdWdlTXV0YXRpb25zOiBoYW5kbGVIdWdlVHJlZU11dGF0aW9uc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIGF0dHJPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyk7XHJcbiAgICAgICAgICAgIGF0dHJPYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcInJlbFwiLCBcImRpc2FibGVkXCIsIFwibWVkaWFcIiwgXCJocmVmXCJdLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJzLnB1c2godHJlZU9ic2VydmVyLCBhdHRyT2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICBvYnNlcnZlZFJvb3RzLmFkZChyb290KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3Vic2NyaWJlRm9yU2hhZG93Um9vdENoYW5nZXMobm9kZSkge1xyXG4gICAgICAgICAgICB2YXIgc2hhZG93Um9vdCA9IG5vZGUuc2hhZG93Um9vdDtcclxuICAgICAgICAgICAgaWYgKHNoYWRvd1Jvb3QgPT0gbnVsbCB8fCBvYnNlcnZlZFJvb3RzLmhhcyhzaGFkb3dSb290KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9ic2VydmUoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlKGRvY3VtZW50KTtcclxuICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcclxuICAgICAgICAgICAgc3Vic2NyaWJlRm9yU2hhZG93Um9vdENoYW5nZXNcclxuICAgICAgICApO1xyXG4gICAgICAgIHdhdGNoV2hlbkN1c3RvbUVsZW1lbnRzRGVmaW5lZChmdW5jdGlvbiAoaG9zdHMpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1N0eWxlcyA9IFtdO1xyXG4gICAgICAgICAgICBob3N0cy5mb3JFYWNoKGZ1bmN0aW9uIChob3N0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHVzaChuZXdTdHlsZXMsIGdldE1hbmFnZWFibGVTdHlsZXMoaG9zdC5zaGFkb3dSb290KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB1cGRhdGUoe2NyZWF0ZWQ6IG5ld1N0eWxlcywgdXBkYXRlZDogW10sIHJlbW92ZWQ6IFtdLCBtb3ZlZDogW119KTtcclxuICAgICAgICAgICAgaG9zdHMuZm9yRWFjaChmdW5jdGlvbiAoaG9zdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSBob3N0LnNoYWRvd1Jvb3Q7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hhZG93Um9vdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlRm9yU2hhZG93Um9vdENoYW5nZXMoaG9zdCk7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMoc2hhZG93Um9vdCwgc3Vic2NyaWJlRm9yU2hhZG93Um9vdENoYW5nZXMpO1xyXG4gICAgICAgICAgICAgICAgY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiX19kYXJrcmVhZGVyX19pc0RlZmluZWRcIiwgaGFuZGxlSXNEZWZpbmVkKTtcclxuICAgICAgICBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMoZG9jdW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzZXRPYnNlcnZlcnMoKSB7XHJcbiAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9ic2VydmVycy5zcGxpY2UoMCwgb2JzZXJ2ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgb2JzZXJ2ZWRSb290cyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JTdHlsZUNoYW5nZXMoKSB7XHJcbiAgICAgICAgcmVzZXRPYnNlcnZlcnMoKTtcclxuICAgICAgICB1bnN1YnNjcmliZUZyb21EZWZpbmVDdXN0b21FbGVtZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhleGlmeShudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKG51bWJlciA8IDE2ID8gXCIwXCIgOiBcIlwiKSArIG51bWJlci50b1N0cmluZygxNik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVVJRCgpIHtcclxuICAgICAgICBpZiAoXCJyYW5kb21VVUlEXCIgaW4gY3J5cHRvKSB7XHJcbiAgICAgICAgICAgIHZhciB1dWlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDAsIDgpICtcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDksIDEzKSArXHJcbiAgICAgICAgICAgICAgICB1dWlkLnN1YnN0cmluZygxNCwgMTgpICtcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDE5LCAyMykgK1xyXG4gICAgICAgICAgICAgICAgdXVpZC5zdWJzdHJpbmcoMjQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTYpKSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhleGlmeSh4KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFkb3B0ZWRTdHlsZU92ZXJyaWRlcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICB2YXIgb3ZlcnJpZGVMaXN0ID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkb3B0ZWRTdHlsZVNoZWV0T3ZlcnJpZGUobm9kZSkge1xyXG4gICAgICAgIHZhciBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICBmdW5jdGlvbiBpbmplY3RTaGVldChzaGVldCwgb3ZlcnJpZGUpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1NoZWV0cyA9IF9fc3ByZWFkQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgICAgIF9fcmVhZChub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyksXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgc2hlZXRJbmRleCA9IG5ld1NoZWV0cy5pbmRleE9mKHNoZWV0KTtcclxuICAgICAgICAgICAgdmFyIGV4aXN0aW5nSW5kZXggPSBuZXdTaGVldHMuaW5kZXhPZihvdmVycmlkZSk7XHJcbiAgICAgICAgICAgIGlmIChzaGVldEluZGV4ID09PSBleGlzdGluZ0luZGV4IC0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0luZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIG5ld1NoZWV0cy5zcGxpY2UoZXhpc3RpbmdJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3U2hlZXRzLnNwbGljZShzaGVldEluZGV4ICsgMSwgMCwgb3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyA9IG5ld1NoZWV0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcclxuICAgICAgICAgICAgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIG5ld1NoZWV0cyA9IF9fc3ByZWFkQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgICAgIF9fcmVhZChub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyksXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5mb3JFYWNoKGZ1bmN0aW9uIChhZG9wdGVkU3R5bGVTaGVldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlTGlzdC5oYXMoYWRvcHRlZFN0eWxlU2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nSW5kZXggPSBuZXdTaGVldHMuaW5kZXhPZihhZG9wdGVkU3R5bGVTaGVldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTaGVldHMuc3BsaWNlKGV4aXN0aW5nSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhZG9wdGVkU3R5bGVPdmVycmlkZXMuZGVsZXRlKGFkb3B0ZWRTdHlsZVNoZWV0KTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZUxpc3QuZGVsZXRlKGFkb3B0ZWRTdHlsZVNoZWV0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzID0gbmV3U2hlZXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiByZW5kZXIodGhlbWUsIGlnbm9yZUltYWdlQW5hbHlzaXMpIHtcclxuICAgICAgICAgICAgbm9kZS5hZG9wdGVkU3R5bGVTaGVldHMuZm9yRWFjaChmdW5jdGlvbiAoc2hlZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVycmlkZUxpc3QuaGFzKHNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBydWxlcyA9IHNoZWV0LnJ1bGVzO1xyXG4gICAgICAgICAgICAgICAgdmFyIG92ZXJyaWRlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHByZXBhcmVPdmVycmlkZXNTaGVldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gb3ZlcnJpZGUuY3NzUnVsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGUuZGVsZXRlUnVsZShpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5qZWN0U2hlZXQoc2hlZXQsIG92ZXJyaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICBhZG9wdGVkU3R5bGVPdmVycmlkZXMuc2V0KHNoZWV0LCBvdmVycmlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVMaXN0LmFkZChvdmVycmlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG92ZXJyaWRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHNoZWV0TW9kaWZpZXIgPSBjcmVhdGVTdHlsZVNoZWV0TW9kaWZpZXIoKTtcclxuICAgICAgICAgICAgICAgIHNoZWV0TW9kaWZpZXIubW9kaWZ5U2hlZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmVTaGVldDogcHJlcGFyZU92ZXJyaWRlc1NoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUNTU1J1bGVzOiBydWxlcyxcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZTogdGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpczogaWdub3JlSW1hZ2VBbmFseXNpcyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FuY2VsQXN5bmNPcGVyYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVuZGVyOiByZW5kZXIsXHJcbiAgICAgICAgICAgIGRlc3Ryb3k6IGRlc3Ryb3lcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluamVjdFByb3h5KGVuYWJsZVN0eWxlU2hlZXRzUHJveHkpIHtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgYWRkUnVsZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgXCJhZGRSdWxlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBpbnNlcnRSdWxlRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICBcImluc2VydFJ1bGVcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIGRlbGV0ZVJ1bGVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlUnVsZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgcmVtb3ZlUnVsZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgXCJyZW1vdmVSdWxlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBkb2N1bWVudFN0eWxlU2hlZXRzRGVzY3JpcHRvciA9IGVuYWJsZVN0eWxlU2hlZXRzUHJveHlcclxuICAgICAgICAgICAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKERvY3VtZW50LnByb3RvdHlwZSwgXCJzdHlsZVNoZWV0c1wiKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgdmFyIHNob3VsZFdyYXBIVE1MRWxlbWVudCA9IFtcclxuICAgICAgICAgICAgXCJiYWlkdS5jb21cIixcclxuICAgICAgICAgICAgXCJiYWlrZS5iYWlkdS5jb21cIixcclxuICAgICAgICAgICAgXCJkaXR1LmJhaWR1LmNvbVwiLFxyXG4gICAgICAgICAgICBcIm1hcC5iYWlkdS5jb21cIixcclxuICAgICAgICAgICAgXCJtYXBzLmJhaWR1LmNvbVwiLFxyXG4gICAgICAgICAgICBcImhhb2thbi5iYWlkdS5jb21cIixcclxuICAgICAgICAgICAgXCJwYW4uYmFpZHUuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGFzc3BvcnQuYmFpZHUuY29tXCIsXHJcbiAgICAgICAgICAgIFwidGllYmEuYmFpZHUuY29tXCIsXHJcbiAgICAgICAgICAgIFwid3d3LmJhaWR1LmNvbVwiXHJcbiAgICAgICAgXS5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSk7XHJcbiAgICAgICAgdmFyIGdldEVsZW1lbnRzQnlUYWdOYW1lRGVzY3JpcHRvciA9IHNob3VsZFdyYXBIVE1MRWxlbWVudFxyXG4gICAgICAgICAgICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXHJcbiAgICAgICAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgICBcImdldEVsZW1lbnRzQnlUYWdOYW1lXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICB2YXIgY2xlYW5VcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICBcImFkZFJ1bGVcIixcclxuICAgICAgICAgICAgICAgIGFkZFJ1bGVEZXNjcmlwdG9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgXCJpbnNlcnRSdWxlXCIsXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRSdWxlRGVzY3JpcHRvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgIFwiZGVsZXRlUnVsZVwiLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlUnVsZURlc2NyaXB0b3JcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICBcInJlbW92ZVJ1bGVcIixcclxuICAgICAgICAgICAgICAgIHJlbW92ZVJ1bGVEZXNjcmlwdG9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJfX2RhcmtyZWFkZXJfX2NsZWFuVXBcIiwgY2xlYW5VcCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRkVW5kZWZpbmVkUmVzb2x2ZXJcIixcclxuICAgICAgICAgICAgICAgIGFkZFVuZGVmaW5lZFJlc29sdmVyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChlbmFibGVTdHlsZVNoZWV0c1Byb3h5KSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgRG9jdW1lbnQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVTaGVldHNcIixcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFN0eWxlU2hlZXRzRGVzY3JpcHRvclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkV3JhcEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJnZXRFbGVtZW50c0J5VGFnTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lRGVzY3JpcHRvclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGFkZFVuZGVmaW5lZFJlc29sdmVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoZS5kZXRhaWwudGFnKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19pc0RlZmluZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHt0YWc6IGUuZGV0YWlsLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiX19kYXJrcmVhZGVyX19jbGVhblVwXCIsIGNsZWFuVXApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZGRVbmRlZmluZWRSZXNvbHZlclwiLFxyXG4gICAgICAgICAgICBhZGRVbmRlZmluZWRSZXNvbHZlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIHVwZGF0ZVNoZWV0RXZlbnQgPSBuZXcgRXZlbnQoXCJfX2RhcmtyZWFkZXJfX3VwZGF0ZVNoZWV0XCIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHByb3h5QWRkUnVsZShzZWxlY3Rvciwgc3R5bGUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGFkZFJ1bGVEZXNjcmlwdG9yLnZhbHVlLmNhbGwodGhpcywgc2VsZWN0b3IsIHN0eWxlLCBpbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJOb2RlICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5vd25lck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya3JlYWRlclwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJOb2RlLmRpc3BhdGNoRXZlbnQodXBkYXRlU2hlZXRFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBwcm94eUluc2VydFJ1bGUocnVsZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlID0gaW5zZXJ0UnVsZURlc2NyaXB0b3IudmFsdWUuY2FsbChcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lck5vZGUgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLm93bmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrcmVhZGVyXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lck5vZGUuZGlzcGF0Y2hFdmVudCh1cGRhdGVTaGVldEV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHByb3h5RGVsZXRlUnVsZShpbmRleCkge1xyXG4gICAgICAgICAgICBkZWxldGVSdWxlRGVzY3JpcHRvci52YWx1ZS5jYWxsKHRoaXMsIGluZGV4KTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lck5vZGUgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLm93bmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrcmVhZGVyXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lck5vZGUuZGlzcGF0Y2hFdmVudCh1cGRhdGVTaGVldEV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBwcm94eVJlbW92ZVJ1bGUoaW5kZXgpIHtcclxuICAgICAgICAgICAgcmVtb3ZlUnVsZURlc2NyaXB0b3IudmFsdWUuY2FsbCh0aGlzLCBpbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJOb2RlICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5vd25lck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya3JlYWRlclwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJOb2RlLmRpc3BhdGNoRXZlbnQodXBkYXRlU2hlZXRFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcHJveHlEb2N1bWVudFN0eWxlU2hlZXRzKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZ2V0Q3VycmVudFZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRvY1NoZWV0cyA9IGRvY3VtZW50U3R5bGVTaGVldHNEZXNjcmlwdG9yLmdldC5jYWxsKF90aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJlZFNoZWV0cyA9IF9fc3ByZWFkQXJyYXkoXHJcbiAgICAgICAgICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgICAgICAgICAgX19yZWFkKGRvY1NoZWV0cyksXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICkuZmlsdGVyKGZ1bmN0aW9uIChzdHlsZVNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFzdHlsZVNoZWV0Lm93bmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFya3JlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRTaGVldHMuaXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkU2hlZXRzW2l0ZW1dO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YoXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRTaGVldHMsXHJcbiAgICAgICAgICAgICAgICAgICAgU3R5bGVTaGVldExpc3QucHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBnZXRDdXJyZW50VmFsdWUoKTtcclxuICAgICAgICAgICAgdmFyIHN0eWxlU2hlZXRMaXN0QmVoYXZpb3IgPSB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChfLCBwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRDdXJyZW50VmFsdWUoKVtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGVsZW1lbnRzID0gbmV3IFByb3h5KGVsZW1lbnRzLCBzdHlsZVNoZWV0TGlzdEJlaGF2aW9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBwcm94eUdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHRhZ05hbWUgIT09IFwic3R5bGVcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEVsZW1lbnRzQnlUYWdOYW1lRGVzY3JpcHRvci52YWx1ZS5jYWxsKHRoaXMsIHRhZ05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBnZXRDdXJyZW50RWxlbWVudFZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZ2V0RWxlbWVudHNCeVRhZ05hbWVEZXNjcmlwdG9yLnZhbHVlLmNhbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YoXHJcbiAgICAgICAgICAgICAgICAgICAgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGVsZW1lbnRzKSwgZmFsc2UpLmZpbHRlcihmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtyZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgTm9kZUxpc3QucHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBnZXRDdXJyZW50RWxlbWVudFZhbHVlKCk7XHJcbiAgICAgICAgICAgIHZhciBub2RlTGlzdEJlaGF2aW9yID0ge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoXywgcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0Q3VycmVudEVsZW1lbnRWYWx1ZSgpW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIocHJvcGVydHkpIHx8IHByb3BlcnR5XHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZWxlbWVudHMgPSBuZXcgUHJveHkoZWxlbWVudHMsIG5vZGVMaXN0QmVoYXZpb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgIFwiYWRkUnVsZVwiLFxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBhZGRSdWxlRGVzY3JpcHRvciwge3ZhbHVlOiBwcm94eUFkZFJ1bGV9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgXCJpbnNlcnRSdWxlXCIsXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGluc2VydFJ1bGVEZXNjcmlwdG9yLCB7dmFsdWU6IHByb3h5SW5zZXJ0UnVsZX0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICBcImRlbGV0ZVJ1bGVcIixcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgZGVsZXRlUnVsZURlc2NyaXB0b3IsIHt2YWx1ZTogcHJveHlEZWxldGVSdWxlfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgIFwicmVtb3ZlUnVsZVwiLFxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCByZW1vdmVSdWxlRGVzY3JpcHRvciwge3ZhbHVlOiBwcm94eVJlbW92ZVJ1bGV9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGVuYWJsZVN0eWxlU2hlZXRzUHJveHkpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgRG9jdW1lbnQucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZVNoZWV0c1wiLFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgZG9jdW1lbnRTdHlsZVNoZWV0c0Rlc2NyaXB0b3IsIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXQ6IHByb3h5RG9jdW1lbnRTdHlsZVNoZWV0c1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3VsZFdyYXBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgIFwiZ2V0RWxlbWVudHNCeVRhZ05hbWVcIixcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGdldEVsZW1lbnRzQnlUYWdOYW1lRGVzY3JpcHRvciwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm94eUdldEVsZW1lbnRzQnlUYWdOYW1lXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgSU5TVEFOQ0VfSUQgPSBnZW5lcmF0ZVVJRCgpO1xyXG4gICAgdmFyIHN0eWxlTWFuYWdlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICB2YXIgYWRvcHRlZFN0eWxlTWFuYWdlcnMgPSBbXTtcclxuICAgIHZhciBmaWx0ZXIgPSBudWxsO1xyXG4gICAgdmFyIGZpeGVzID0gbnVsbDtcclxuICAgIHZhciBpc0lGcmFtZSQxID0gbnVsbDtcclxuICAgIHZhciBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyA9IG51bGw7XHJcbiAgICB2YXIgaWdub3JlZElubGluZVNlbGVjdG9ycyA9IG51bGw7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZVN0eWxlKGNsYXNzTmFtZSwgcm9vdCkge1xyXG4gICAgICAgIGlmIChyb290ID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgcm9vdCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChjbGFzc05hbWUpKTtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlclwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQubWVkaWEgPSBcInNjcmVlblwiO1xyXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZVNjcmlwdChjbGFzc05hbWUsIHJvb3QpIHtcclxuICAgICAgICBpZiAocm9vdCA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIHJvb3QgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZWxlbWVudCA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoY2xhc3NOYW1lKSk7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICB2YXIgbm9kZVBvc2l0aW9uV2F0Y2hlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIobm9kZSwgYWxpYXMpIHtcclxuICAgICAgICBub2RlUG9zaXRpb25XYXRjaGVycy5oYXMoYWxpYXMpICYmXHJcbiAgICAgICAgICAgIG5vZGVQb3NpdGlvbldhdGNoZXJzLmdldChhbGlhcykuc3RvcCgpO1xyXG4gICAgICAgIG5vZGVQb3NpdGlvbldhdGNoZXJzLnNldChhbGlhcywgd2F0Y2hGb3JOb2RlUG9zaXRpb24obm9kZSwgXCJwYXJlbnRcIikpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFN0eWxlUG9zaXRpb25XYXRjaGVycygpIHtcclxuICAgICAgICBmb3JFYWNoKG5vZGVQb3NpdGlvbldhdGNoZXJzLnZhbHVlcygpLCBmdW5jdGlvbiAod2F0Y2hlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gd2F0Y2hlci5zdG9wKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbm9kZVBvc2l0aW9uV2F0Y2hlcnMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0YXRpY1N0eWxlT3ZlcnJpZGVzKCkge1xyXG4gICAgICAgIHZhciBmYWxsYmFja1N0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcclxuICAgICAgICAgICAgXCJkYXJrcmVhZGVyLS1mYWxsYmFja1wiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZmFsbGJhY2tTdHlsZS50ZXh0Q29udGVudCA9IGdldE1vZGlmaWVkRmFsbGJhY2tTdHlsZShmaWx0ZXIsIHtcclxuICAgICAgICAgICAgc3RyaWN0OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoZmFsbGJhY2tTdHlsZSwgZG9jdW1lbnQuaGVhZC5maXJzdENoaWxkKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIoZmFsbGJhY2tTdHlsZSwgXCJmYWxsYmFja1wiKTtcclxuICAgICAgICB2YXIgdXNlckFnZW50U3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tdXNlci1hZ2VudFwiKTtcclxuICAgICAgICB1c2VyQWdlbnRTdHlsZS50ZXh0Q29udGVudCA9IGdldE1vZGlmaWVkVXNlckFnZW50U3R5bGUoXHJcbiAgICAgICAgICAgIGZpbHRlcixcclxuICAgICAgICAgICAgaXNJRnJhbWUkMSxcclxuICAgICAgICAgICAgZmlsdGVyLnN0eWxlU3lzdGVtQ29udHJvbHNcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKHVzZXJBZ2VudFN0eWxlLCBmYWxsYmFja1N0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIodXNlckFnZW50U3R5bGUsIFwidXNlci1hZ2VudFwiKTtcclxuICAgICAgICB2YXIgdGV4dFN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXRleHRcIik7XHJcbiAgICAgICAgaWYgKGZpbHRlci51c2VGb250IHx8IGZpbHRlci50ZXh0U3Ryb2tlID4gMCkge1xyXG4gICAgICAgICAgICB0ZXh0U3R5bGUudGV4dENvbnRlbnQgPSBjcmVhdGVUZXh0U3R5bGUoZmlsdGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0U3R5bGUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZSh0ZXh0U3R5bGUsIGZhbGxiYWNrU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcih0ZXh0U3R5bGUsIFwidGV4dFwiKTtcclxuICAgICAgICB2YXIgaW52ZXJ0U3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0taW52ZXJ0XCIpO1xyXG4gICAgICAgIGlmIChmaXhlcyAmJiBBcnJheS5pc0FycmF5KGZpeGVzLmludmVydCkgJiYgZml4ZXMuaW52ZXJ0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaW52ZXJ0U3R5bGUudGV4dENvbnRlbnQgPSBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLmNvbmNhdChmaXhlcy5pbnZlcnQuam9pbihcIiwgXCIpLCBcIiB7XCIpLFxyXG4gICAgICAgICAgICAgICAgXCIgICAgZmlsdGVyOiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q1NTRmlsdGVyVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fYXNzaWduKF9fYXNzaWduKHt9LCBmaWx0ZXIpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFzdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubW9kZSA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpbHRlci5jb250cmFzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsYW1wKGZpbHRlci5jb250cmFzdCAtIDEwLCAwLCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiAhaW1wb3J0YW50O1wiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgXCJ9XCJcclxuICAgICAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGludmVydFN0eWxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoaW52ZXJ0U3R5bGUsIHRleHRTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKGludmVydFN0eWxlLCBcImludmVydFwiKTtcclxuICAgICAgICB2YXIgaW5saW5lU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0taW5saW5lXCIpO1xyXG4gICAgICAgIGlubGluZVN0eWxlLnRleHRDb250ZW50ID0gZ2V0SW5saW5lT3ZlcnJpZGVTdHlsZSgpO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGlubGluZVN0eWxlLCBpbnZlcnRTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKGlubGluZVN0eWxlLCBcImlubGluZVwiKTtcclxuICAgICAgICB2YXIgb3ZlcnJpZGVTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1vdmVycmlkZVwiKTtcclxuICAgICAgICBvdmVycmlkZVN0eWxlLnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgZml4ZXMgJiYgZml4ZXMuY3NzID8gcmVwbGFjZUNTU1RlbXBsYXRlcyhmaXhlcy5jc3MpIDogXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG92ZXJyaWRlU3R5bGUpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcihvdmVycmlkZVN0eWxlLCBcIm92ZXJyaWRlXCIpO1xyXG4gICAgICAgIHZhciB2YXJpYWJsZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXZhcmlhYmxlc1wiKTtcclxuICAgICAgICB2YXIgc2VsZWN0aW9uQ29sb3JzID0gZ2V0U2VsZWN0aW9uQ29sb3IoZmlsdGVyKTtcclxuICAgICAgICB2YXIgZGFya1NjaGVtZUJhY2tncm91bmRDb2xvciA9IGZpbHRlci5kYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBkYXJrU2NoZW1lVGV4dENvbG9yID0gZmlsdGVyLmRhcmtTY2hlbWVUZXh0Q29sb3IsXHJcbiAgICAgICAgICAgIGxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yID0gZmlsdGVyLmxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBsaWdodFNjaGVtZVRleHRDb2xvciA9IGZpbHRlci5saWdodFNjaGVtZVRleHRDb2xvcixcclxuICAgICAgICAgICAgbW9kZSA9IGZpbHRlci5tb2RlO1xyXG4gICAgICAgIHZhciBzY2hlbWVCYWNrZ3JvdW5kQ29sb3IgPVxyXG4gICAgICAgICAgICBtb2RlID09PSAwID8gbGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3IgOiBkYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIHZhciBzY2hlbWVUZXh0Q29sb3IgPVxyXG4gICAgICAgICAgICBtb2RlID09PSAwID8gbGlnaHRTY2hlbWVUZXh0Q29sb3IgOiBkYXJrU2NoZW1lVGV4dENvbG9yO1xyXG4gICAgICAgIHNjaGVtZUJhY2tncm91bmRDb2xvciA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihcclxuICAgICAgICAgICAgcGFyc2VDb2xvcldpdGhDYWNoZShzY2hlbWVCYWNrZ3JvdW5kQ29sb3IpLFxyXG4gICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIHNjaGVtZVRleHRDb2xvciA9IG1vZGlmeUZvcmVncm91bmRDb2xvcihcclxuICAgICAgICAgICAgcGFyc2VDb2xvcldpdGhDYWNoZShzY2hlbWVUZXh0Q29sb3IpLFxyXG4gICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhcmlhYmxlU3R5bGUudGV4dENvbnRlbnQgPSBbXHJcbiAgICAgICAgICAgIFwiOnJvb3Qge1wiLFxyXG4gICAgICAgICAgICBcIiAgIC0tZGFya3JlYWRlci1uZXV0cmFsLWJhY2tncm91bmQ6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIHNjaGVtZUJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgIFwiO1wiXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIFwiICAgLS1kYXJrcmVhZGVyLW5ldXRyYWwtdGV4dDogXCIuY29uY2F0KHNjaGVtZVRleHRDb2xvciwgXCI7XCIpLFxyXG4gICAgICAgICAgICBcIiAgIC0tZGFya3JlYWRlci1zZWxlY3Rpb24tYmFja2dyb3VuZDogXCIuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29sb3JzLmJhY2tncm91bmRDb2xvclNlbGVjdGlvbixcclxuICAgICAgICAgICAgICAgIFwiO1wiXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIFwiICAgLS1kYXJrcmVhZGVyLXNlbGVjdGlvbi10ZXh0OiBcIi5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db2xvcnMuZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgXCI7XCJcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgXCJ9XCJcclxuICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUodmFyaWFibGVTdHlsZSwgaW5saW5lU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcih2YXJpYWJsZVN0eWxlLCBcInZhcmlhYmxlc1wiKTtcclxuICAgICAgICB2YXIgcm9vdFZhcnNTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1yb290LXZhcnNcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUocm9vdFZhcnNTdHlsZSwgdmFyaWFibGVTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgdmFyIGluamVjdFByb3h5QXJnID0gIShmaXhlcyAmJiBmaXhlcy5kaXNhYmxlU3R5bGVTaGVldHNQcm94eSk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcHJveHlTY3JpcHQgPSBjcmVhdGVPclVwZGF0ZVNjcmlwdChcImRhcmtyZWFkZXItLXByb3h5XCIpO1xyXG4gICAgICAgICAgICBwcm94eVNjcmlwdC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICBcIihcIi5jb25jYXQoaW5qZWN0UHJveHksIFwiKShcIikuY29uY2F0KGluamVjdFByb3h5QXJnLCBcIilcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUocHJveHlTY3JpcHQsIHJvb3RWYXJzU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgICAgICBwcm94eVNjcmlwdC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgc2hhZG93Um9vdHNXaXRoT3ZlcnJpZGVzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXMocm9vdCkge1xyXG4gICAgICAgIHZhciBpbmxpbmVTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1pbmxpbmVcIiwgcm9vdCk7XHJcbiAgICAgICAgaW5saW5lU3R5bGUudGV4dENvbnRlbnQgPSBnZXRJbmxpbmVPdmVycmlkZVN0eWxlKCk7XHJcbiAgICAgICAgcm9vdC5pbnNlcnRCZWZvcmUoaW5saW5lU3R5bGUsIHJvb3QuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgdmFyIG92ZXJyaWRlU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tb3ZlcnJpZGVcIiwgcm9vdCk7XHJcbiAgICAgICAgb3ZlcnJpZGVTdHlsZS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIGZpeGVzICYmIGZpeGVzLmNzcyA/IHJlcGxhY2VDU1NUZW1wbGF0ZXMoZml4ZXMuY3NzKSA6IFwiXCI7XHJcbiAgICAgICAgcm9vdC5pbnNlcnRCZWZvcmUob3ZlcnJpZGVTdHlsZSwgaW5saW5lU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHZhciBpbnZlcnRTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1pbnZlcnRcIiwgcm9vdCk7XHJcbiAgICAgICAgaWYgKGZpeGVzICYmIEFycmF5LmlzQXJyYXkoZml4ZXMuaW52ZXJ0KSAmJiBmaXhlcy5pbnZlcnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpbnZlcnRTdHlsZS50ZXh0Q29udGVudCA9IFtcclxuICAgICAgICAgICAgICAgIFwiXCIuY29uY2F0KGZpeGVzLmludmVydC5qb2luKFwiLCBcIiksIFwiIHtcIiksXHJcbiAgICAgICAgICAgICAgICBcIiAgICBmaWx0ZXI6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICBnZXRDU1NGaWx0ZXJWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19hc3NpZ24oX19hc3NpZ24oe30sIGZpbHRlciksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5tb2RlID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmlsdGVyLmNvbnRyYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2xhbXAoZmlsdGVyLmNvbnRyYXN0IC0gMTAsIDAsIDEwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiICFpbXBvcnRhbnQ7XCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBcIn1cIlxyXG4gICAgICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW52ZXJ0U3R5bGUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb290Lmluc2VydEJlZm9yZShpbnZlcnRTdHlsZSwgb3ZlcnJpZGVTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2hhZG93Um9vdHNXaXRoT3ZlcnJpZGVzLmFkZChyb290KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VDU1NUZW1wbGF0ZXMoJGNzc1RleHQpIHtcclxuICAgICAgICByZXR1cm4gJGNzc1RleHQucmVwbGFjZSgvXFwkeyguKz8pfS9nLCBmdW5jdGlvbiAoXywgJGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2xvciA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoJGNvbG9yKTtcclxuICAgICAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3IoY29sb3IsIGZpbHRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICRjb2xvcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuRmFsbGJhY2tTdHlsZSgpIHtcclxuICAgICAgICB2YXIgZmFsbGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWZhbGxiYWNrXCIpO1xyXG4gICAgICAgIGlmIChmYWxsYmFjaykge1xyXG4gICAgICAgICAgICBmYWxsYmFjay50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRHluYW1pY1N0eWxlT3ZlcnJpZGVzKCkge1xyXG4gICAgICAgIGNhbmNlbFJlbmRlcmluZygpO1xyXG4gICAgICAgIHZhciBhbGxTdHlsZXMgPSBnZXRNYW5hZ2VhYmxlU3R5bGVzKGRvY3VtZW50KTtcclxuICAgICAgICB2YXIgbmV3TWFuYWdlcnMgPSBhbGxTdHlsZXNcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhc3R5bGVNYW5hZ2Vycy5oYXMoc3R5bGUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU1hbmFnZXIoc3R5bGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBuZXdNYW5hZ2Vyc1xyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFuYWdlci5kZXRhaWxzKHtzZWNvbmRSb3VuZDogZmFsc2V9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZGV0YWlsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGV0YWlsICYmIGRldGFpbC5ydWxlcy5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZGV0YWlsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRSdWxlc0Zvck1hdGNoaW5nKGRldGFpbC5ydWxlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kYW50cygpO1xyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLnNldE9uUm9vdFZhcmlhYmxlQ2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUucHV0Um9vdFZhcnMoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tcm9vdC12YXJzXCIpLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUucHV0Um9vdFZhcnMoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1yb290LXZhcnNcIiksXHJcbiAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc3R5bGVNYW5hZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYW5hZ2VyLnJlbmRlcihmaWx0ZXIsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobG9hZGluZ1N0eWxlcy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNsZWFuRmFsbGJhY2tTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdNYW5hZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYW5hZ2VyLndhdGNoKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGlubGluZVN0eWxlRWxlbWVudHMgPSB0b0FycmF5KFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKElOTElORV9TVFlMRV9TRUxFQ1RPUilcclxuICAgICAgICApO1xyXG4gICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGZ1bmN0aW9uIChob3N0KSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKGhvc3Quc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGhvc3Quc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgSU5MSU5FX1NUWUxFX1NFTEVDVE9SXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwdXNoKGlubGluZVN0eWxlRWxlbWVudHMsIGVsZW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlubGluZVN0eWxlRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG92ZXJyaWRlSW5saW5lU3R5bGUoXHJcbiAgICAgICAgICAgICAgICBlbCxcclxuICAgICAgICAgICAgICAgIGZpbHRlcixcclxuICAgICAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9yc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhhbmRsZUFkb3B0ZWRTdHlsZVNoZWV0cyhkb2N1bWVudCk7XHJcbiAgICB9XHJcbiAgICB2YXIgbG9hZGluZ1N0eWxlc0NvdW50ZXIgPSAwO1xyXG4gICAgdmFyIGxvYWRpbmdTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNYW5hZ2VyKGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgbG9hZGluZ1N0eWxlSWQgPSArK2xvYWRpbmdTdHlsZXNDb3VudGVyO1xyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRpbmdTdGFydCgpIHtcclxuICAgICAgICAgICAgaWYgKCFpc0RPTVJlYWR5KCkgfHwgIWRpZERvY3VtZW50U2hvd1VwKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nU3R5bGVzLmFkZChsb2FkaW5nU3R5bGVJZCk7XHJcbiAgICAgICAgICAgICAgICBsb2dJbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3VycmVudCBhbW91bnQgb2Ygc3R5bGVzIGxvYWRpbmc6IFwiLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1N0eWxlcy5zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHZhciBmYWxsYmFja1N0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICBcIi5kYXJrcmVhZGVyLS1mYWxsYmFja1wiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmYWxsYmFja1N0eWxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tTdHlsZS50ZXh0Q29udGVudCA9IGdldE1vZGlmaWVkRmFsbGJhY2tTdHlsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyaWN0OiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRpbmdFbmQoKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdTdHlsZXMuZGVsZXRlKGxvYWRpbmdTdHlsZUlkKTtcclxuICAgICAgICAgICAgbG9nSW5mbyhcclxuICAgICAgICAgICAgICAgIFwiUmVtb3ZlZCBsb2FkaW5nU3R5bGUgXCJcclxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGxvYWRpbmdTdHlsZUlkLCBcIiwgbm93IGF3YWl0aW5nOiBcIilcclxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGxvYWRpbmdTdHlsZXMuc2l6ZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGxvYWRpbmdTdHlsZXMuc2l6ZSA9PT0gMCAmJiBpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFuRmFsbGJhY2tTdHlsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgdmFyIGRldGFpbHMgPSBtYW5hZ2VyLmRldGFpbHMoe3NlY29uZFJvdW5kOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGlmICghZGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcoZGV0YWlscy5ydWxlcyk7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kYW50cygpO1xyXG4gICAgICAgICAgICBtYW5hZ2VyLnJlbmRlcihmaWx0ZXIsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBtYW5hZ2VTdHlsZShlbGVtZW50LCB7XHJcbiAgICAgICAgICAgIHVwZGF0ZTogdXBkYXRlLFxyXG4gICAgICAgICAgICBsb2FkaW5nU3RhcnQ6IGxvYWRpbmdTdGFydCxcclxuICAgICAgICAgICAgbG9hZGluZ0VuZDogbG9hZGluZ0VuZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0eWxlTWFuYWdlcnMuc2V0KGVsZW1lbnQsIG1hbmFnZXIpO1xyXG4gICAgICAgIHJldHVybiBtYW5hZ2VyO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFuYWdlcihlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBzdHlsZU1hbmFnZXJzLmdldChlbGVtZW50KTtcclxuICAgICAgICBpZiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICBtYW5hZ2VyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc3R5bGVNYW5hZ2Vycy5kZWxldGUoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHRocm90dGxlZFJlbmRlckFsbFN0eWxlcyA9IHRocm90dGxlKGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIHN0eWxlTWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlci5yZW5kZXIoZmlsdGVyLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWRvcHRlZFN0eWxlTWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlci5yZW5kZXIoZmlsdGVyLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGNhbmNlbFJlbmRlcmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aHJvdHRsZWRSZW5kZXJBbGxTdHlsZXMuY2FuY2VsKCk7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gb25ET01SZWFkeSgpIHtcclxuICAgICAgICBpZiAobG9hZGluZ1N0eWxlcy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNsZWFuRmFsbGJhY2tTdHlsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyID0gbnVsbDtcclxuICAgIHZhciBkaWREb2N1bWVudFNob3dVcCA9ICFkb2N1bWVudC5oaWRkZW47XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvckRvY3VtZW50VmlzaWJpbGl0eShjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBhbHJlYWR5V2F0Y2hpbmcgPSBCb29sZWFuKGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4pIHtcclxuICAgICAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvckRvY3VtZW50VmlzaWJpbGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIGRpZERvY3VtZW50U2hvd1VwID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKCFhbHJlYWR5V2F0Y2hpbmcpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eWNoYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JEb2N1bWVudFZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsXHJcbiAgICAgICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUaGVtZUFuZFdhdGNoRm9yVXBkYXRlcygpIHtcclxuICAgICAgICBjcmVhdGVTdGF0aWNTdHlsZU92ZXJyaWRlcygpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHJ1bkR5bmFtaWNTdHlsZSgpIHtcclxuICAgICAgICAgICAgY3JlYXRlRHluYW1pY1N0eWxlT3ZlcnJpZGVzKCk7XHJcbiAgICAgICAgICAgIHdhdGNoRm9yVXBkYXRlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuICYmICFmaWx0ZXIuaW1tZWRpYXRlTW9kaWZ5KSB7XHJcbiAgICAgICAgICAgIHdhdGNoRm9yRG9jdW1lbnRWaXNpYmlsaXR5KHJ1bkR5bmFtaWNTdHlsZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcnVuRHluYW1pY1N0eWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoYW5nZU1ldGFUaGVtZUNvbG9yV2hlbkF2YWlsYWJsZShmaWx0ZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRvcHRlZFN0eWxlU2hlZXRzKG5vZGUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld01hbmdlciA9IGNyZWF0ZUFkb3B0ZWRTdHlsZVNoZWV0T3ZlcnJpZGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRvcHRlZFN0eWxlTWFuYWdlcnMucHVzaChuZXdNYW5nZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld01hbmdlci5yZW5kZXIoZmlsdGVyLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvclVwZGF0ZXMoKSB7XHJcbiAgICAgICAgdmFyIG1hbmFnZWRTdHlsZXMgPSBBcnJheS5mcm9tKHN0eWxlTWFuYWdlcnMua2V5cygpKTtcclxuICAgICAgICB3YXRjaEZvclN0eWxlQ2hhbmdlcyhcclxuICAgICAgICAgICAgbWFuYWdlZFN0eWxlcyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3JlYXRlZCA9IF9hLmNyZWF0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IF9hLnVwZGF0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZCA9IF9hLnJlbW92ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSBfYS5tb3ZlZDtcclxuICAgICAgICAgICAgICAgIHZhciBzdHlsZXNUb1JlbW92ZSA9IHJlbW92ZWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVzVG9NYW5hZ2UgPSBjcmVhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCh1cGRhdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQobW92ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFzdHlsZU1hbmFnZXJzLmhhcyhzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVzVG9SZXN0b3JlID0gbW92ZWQuZmlsdGVyKGZ1bmN0aW9uIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZU1hbmFnZXJzLmhhcyhzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHN0eWxlc1RvUmVtb3ZlLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbW92ZU1hbmFnZXIoc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3TWFuYWdlcnMgPSBzdHlsZXNUb01hbmFnZS5tYXAoZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU1hbmFnZXIoc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBuZXdNYW5hZ2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIuZGV0YWlscyh7c2Vjb25kUm91bmQ6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkZXRhaWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRldGFpbCAmJiBkZXRhaWwucnVsZXMubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChkZXRhaWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhkZXRhaWwucnVsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRhbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNYW5hZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIucmVuZGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbmV3TWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYW5hZ2VyLndhdGNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHN0eWxlc1RvUmVzdG9yZS5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZU1hbmFnZXJzLmdldChzdHlsZSkucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChzaGFkb3dSb290KSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhzaGFkb3dSb290KTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUFkb3B0ZWRTdHlsZVNoZWV0cyhzaGFkb3dSb290KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgd2F0Y2hGb3JJbmxpbmVTdHlsZXMoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBvdmVycmlkZUlubGluZVN0eWxlKFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnNcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVBdHRyLmluY2x1ZGVzKFwiLS1cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRhbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLnB1dFJvb3RWYXJzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLmRhcmtyZWFkZXItLXJvb3QtdmFyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAocm9vdCkge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXMocm9vdCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5saW5lU3R5bGVFbGVtZW50cyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICAgICBJTkxJTkVfU1RZTEVfU0VMRUNUT1JcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5saW5lU3R5bGVFbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yRWFjaChpbmxpbmVTdHlsZUVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG92ZXJyaWRlSW5saW5lU3R5bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBhZGRET01SZWFkeUxpc3RlbmVyKG9uRE9NUmVhZHkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yVXBkYXRlcygpIHtcclxuICAgICAgICBzdHlsZU1hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIucGF1c2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9wU3R5bGVQb3NpdGlvbldhdGNoZXJzKCk7XHJcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9yU3R5bGVDaGFuZ2VzKCk7XHJcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9ySW5saW5lU3R5bGVzKCk7XHJcbiAgICAgICAgcmVtb3ZlRE9NUmVhZHlMaXN0ZW5lcihvbkRPTVJlYWR5KTtcclxuICAgICAgICBjbGVhblJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgdmFyIG1ldGFPYnNlcnZlcjtcclxuICAgIGZ1bmN0aW9uIGFkZE1ldGFMaXN0ZW5lcigpIHtcclxuICAgICAgICBtZXRhT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyLWxvY2tcIl0nKSkge1xyXG4gICAgICAgICAgICAgICAgbWV0YU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUR5bmFtaWNUaGVtZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWV0YU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRGFya1JlYWRlckluc3RhbmNlTWFya2VyKCkge1xyXG4gICAgICAgIHZhciBtZXRhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xyXG4gICAgICAgIG1ldGFFbGVtZW50Lm5hbWUgPSBcImRhcmtyZWFkZXJcIjtcclxuICAgICAgICBtZXRhRWxlbWVudC5jb250ZW50ID0gSU5TVEFOQ0VfSUQ7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0Fub3RoZXJEYXJrUmVhZGVySW5zdGFuY2VBY3RpdmUoKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRhcmtyZWFkZXItbG9ja1wiXScpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRhcmtyZWFkZXJcIl0nKTtcclxuICAgICAgICBpZiAobWV0YSkge1xyXG4gICAgICAgICAgICBpZiAobWV0YS5jb250ZW50ICE9PSBJTlNUQU5DRV9JRCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVEYXJrUmVhZGVySW5zdGFuY2VNYXJrZXIoKTtcclxuICAgICAgICBhZGRNZXRhTGlzdGVuZXIoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZUR5bmFtaWNUaGVtZShcclxuICAgICAgICBmaWx0ZXJDb25maWcsXHJcbiAgICAgICAgZHluYW1pY1RoZW1lRml4ZXMsXHJcbiAgICAgICAgaWZyYW1lXHJcbiAgICApIHtcclxuICAgICAgICBmaWx0ZXIgPSBmaWx0ZXJDb25maWc7XHJcbiAgICAgICAgZml4ZXMgPSBkeW5hbWljVGhlbWVGaXhlcztcclxuICAgICAgICBpZiAoZml4ZXMpIHtcclxuICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMgPSBBcnJheS5pc0FycmF5KFxyXG4gICAgICAgICAgICAgICAgZml4ZXMuaWdub3JlSW1hZ2VBbmFseXNpc1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA/IGZpeGVzLmlnbm9yZUltYWdlQW5hbHlzaXNcclxuICAgICAgICAgICAgICAgIDogW107XHJcbiAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMgPSBBcnJheS5pc0FycmF5KGZpeGVzLmlnbm9yZUlubGluZVN0eWxlKVxyXG4gICAgICAgICAgICAgICAgPyBmaXhlcy5pZ25vcmVJbmxpbmVTdHlsZVxyXG4gICAgICAgICAgICAgICAgOiBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyA9IFtdO1xyXG4gICAgICAgICAgICBpZ25vcmVkSW5saW5lU2VsZWN0b3JzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWx0ZXIuaW1tZWRpYXRlTW9kaWZ5KSB7XHJcbiAgICAgICAgICAgIHNldElzRE9NUmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0lGcmFtZSQxID0gaWZyYW1lO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5oZWFkKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0Fub3RoZXJEYXJrUmVhZGVySW5zdGFuY2VBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcImRhdGEtZGFya3JlYWRlci1tb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImR5bmFtaWNcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgXCJkYXRhLWRhcmtyZWFkZXItc2NoZW1lXCIsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIubW9kZSA/IFwiZGFya1wiIDogXCJkaW1tZWRcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjcmVhdGVUaGVtZUFuZFdhdGNoRm9yVXBkYXRlcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghaXNGaXJlZm94KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmFsbGJhY2tTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1mYWxsYmFja1wiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChmYWxsYmFja1N0eWxlKTtcclxuICAgICAgICAgICAgICAgIGZhbGxiYWNrU3R5bGUudGV4dENvbnRlbnQgPSBnZXRNb2RpZmllZEZhbGxiYWNrU3R5bGUoZmlsdGVyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaWN0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaGVhZE9ic2VydmVyXzEgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuaGVhZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRPYnNlcnZlcl8xLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBbm90aGVyRGFya1JlYWRlckluc3RhbmNlQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRHluYW1pY1RoZW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGhlbWVBbmRXYXRjaEZvclVwZGF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGhlYWRPYnNlcnZlcl8xLm9ic2VydmUoZG9jdW1lbnQsIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVQcm94eSgpIHtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9fY2xlYW5VcFwiKSk7XHJcbiAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tcHJveHlcIikpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRHluYW1pY1RoZW1lKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWRhcmtyZWFkZXItbW9kZVwiKTtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1kYXJrcmVhZGVyLXNjaGVtZVwiKTtcclxuICAgICAgICBjbGVhbkR5bmFtaWNUaGVtZUNhY2hlKCk7XHJcbiAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWZhbGxiYWNrXCIpKTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuaGVhZCkge1xyXG4gICAgICAgICAgICByZXN0b3JlTWV0YVRoZW1lQ29sb3IoKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tdXNlci1hZ2VudFwiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLXRleHRcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1pbnZlcnRcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1pbmxpbmVcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1vdmVycmlkZVwiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLXZhcmlhYmxlc1wiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLXJvb3QtdmFyc1wiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyXCJdJykpO1xyXG4gICAgICAgICAgICByZW1vdmVQcm94eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaGFkb3dSb290c1dpdGhPdmVycmlkZXMuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKHJvb3QucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1pbmxpbmVcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKHJvb3QucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1vdmVycmlkZVwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2hhZG93Um9vdHNXaXRoT3ZlcnJpZGVzLmNsZWFyKCk7XHJcbiAgICAgICAgZm9yRWFjaChzdHlsZU1hbmFnZXJzLmtleXMoKSwgZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZW1vdmVNYW5hZ2VyKGVsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2FkaW5nU3R5bGVzLmNsZWFyKCk7XHJcbiAgICAgICAgY2xlYW5Mb2FkaW5nTGlua3MoKTtcclxuICAgICAgICBmb3JFYWNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya3JlYWRlclwiKSwgcmVtb3ZlTm9kZSk7XHJcbiAgICAgICAgYWRvcHRlZFN0eWxlTWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICBtYW5hZ2VyLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhZG9wdGVkU3R5bGVNYW5hZ2Vycy5zcGxpY2UoMCk7XHJcbiAgICAgICAgbWV0YU9ic2VydmVyICYmIG1ldGFPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhbkR5bmFtaWNUaGVtZUNhY2hlKCkge1xyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLmNsZWFyKCk7XHJcbiAgICAgICAgcGFyc2VkVVJMQ2FjaGUuY2xlYXIoKTtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JEb2N1bWVudFZpc2liaWxpdHkoKTtcclxuICAgICAgICBjYW5jZWxSZW5kZXJpbmcoKTtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JVcGRhdGVzKCk7XHJcbiAgICAgICAgY2xlYW5Nb2RpZmljYXRpb25DYWNoZSgpO1xyXG4gICAgICAgIGNsZWFyQ29sb3JDYWNoZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBibG9iUmVnZXggPSAvdXJsXFwoXFxcIihibG9iXFw6Lio/KVxcXCJcXCkvZztcclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VCbG9icyh0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcHJvbWlzZXMsIGRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldE1hdGNoZXMoYmxvYlJlZ2V4LCB0ZXh0LCAxKS5mb3JFYWNoKGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbG9hZEFzRGF0YVVSTCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgUHJvbWlzZS5hbGwocHJvbWlzZXMpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC5yZXBsYWNlKGJsb2JSZWdleCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAndXJsKFwiJy5jb25jYXQoZGF0YS5zaGlmdCgpLCAnXCIpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBiYW5uZXIgPVxyXG4gICAgICAgICcvKlxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fX19fX19cXG4gICAgICAgICAgICAgICAgICAgICAgIC8gICAgICAgXFxcXFxcbiAgICAgICAgICAgICAgICAgICAgICAuPT0uICAgIC49PS5cXG4gICAgICAgICAgICAgICAgICAgICAoKCAgKSk9PSgoICApKVxcbiAgICAgICAgICAgICAgICAgICAgLyBcIj09XCIgICAgXCI9PVwiXFxcXFxcbiAgICAgICAgICAgICAgICAgICAvX19fX3x8IHx8IHx8X19fXFxcXFxcbiAgICAgICBfX19fX19fXyAgICAgX19fXyAgICBfX19fX19fXyAgX19fICAgIF9fX1xcbiAgICAgICB8ICBfX18gIFxcXFwgICAvICAgIFxcXFwgICB8ICBfX18gIFxcXFwgfCAgfCAgLyAgL1xcbiAgICAgICB8ICB8ICBcXFxcICBcXFxcIC8gIC9cXFxcICBcXFxcICB8ICB8ICBcXFxcICBcXFxcfCAgfF8vICAvXFxuICAgICAgIHwgIHwgICApICAvICAvX19cXFxcICBcXFxcIHwgIHxfXy8gIC98ICBfX18gIFxcXFxcXG4gICAgICAgfCAgfF9fLyAgLyAgX19fX19fICBcXFxcfCAgX19fXyAgXFxcXHwgIHwgIFxcXFwgIFxcXFxcXG5fX19fX19ffF9fX19fX18vX18vIF9fX18gXFxcXF9fXFxcXF9ffF9fX1xcXFxfX1xcXFxfX3xfX19cXFxcX19cXFxcX19fX1xcbnwgIF9fXyAgXFxcXCB8ICBfX19fLyAvICAgIFxcXFwgICB8ICBfX18gIFxcXFwgfCAgX19fX3wgIF9fXyAgXFxcXFxcbnwgIHwgIFxcXFwgIFxcXFx8ICB8X19fIC8gIC9cXFxcICBcXFxcICB8ICB8ICBcXFxcICBcXFxcfCAgfF9fX3wgIHwgIFxcXFwgIFxcXFxcXG58ICB8X18vICAvfCAgX19fXy8gIC9fX1xcXFwgIFxcXFwgfCAgfCAgICkgIHwgIF9fX198ICB8X18vICAvXFxufCAgX19fXyAgXFxcXHwgIHxfXy8gIF9fX19fXyAgXFxcXHwgIHxfXy8gIC98ICB8X19ffCAgX19fXyAgXFxcXFxcbnxfX3wgICBcXFxcX19cXFxcX19fXy9fXy8gICAgICBcXFxcX19cXFxcX19fX19fXy8gfF9fX19fX3xfX3wgICBcXFxcX19cXFxcXFxuICAgICAgICAgICAgICAgIGh0dHBzOi8vZGFya3JlYWRlci5vcmdcXG4qL1xcblxcbi8qISBEYXJrIHJlYWRlciBnZW5lcmF0ZWQgQ1NTIHwgTGljZW5zZWQgdW5kZXIgTUlUIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrcmVhZGVyL2RhcmtyZWFkZXIvYmxvYi9tYWluL0xJQ0VOU0UgKi9cXG4nO1xyXG4gICAgZnVuY3Rpb24gY29sbGVjdENTUygpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFN0YXRpY0NTUyhzZWxlY3RvciwgY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRpY1N0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGljU3R5bGUgJiYgc3RhdGljU3R5bGUudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjc3MucHVzaChcIi8qIFwiLmNvbmNhdChjb21tZW50LCBcIiAqL1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzLnB1c2goc3RhdGljU3R5bGUudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNzcy5wdXNoKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjc3MsIG1vZGlmaWVkQ1NTLCBmb3JtYXR0ZWRDU1MsIF9hLCBfYjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzID0gW2Jhbm5lcl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN0YXRpY0NTUyhcIi5kYXJrcmVhZGVyLS1mYWxsYmFja1wiLCBcIkZhbGxiYWNrIFN0eWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRTdGF0aWNDU1MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi5kYXJrcmVhZGVyLS11c2VyLWFnZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVzZXItQWdlbnQgU3R5bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0tdGV4dFwiLCBcIlRleHQgU3R5bGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN0YXRpY0NTUyhcIi5kYXJrcmVhZGVyLS1pbnZlcnRcIiwgXCJJbnZlcnQgU3R5bGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN0YXRpY0NTUyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLmRhcmtyZWFkZXItLXZhcmlhYmxlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWYXJpYWJsZXMgU3R5bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZENTUyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya3JlYWRlci0tc3luY1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNoZWV0LmNzc1J1bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuY3NzVGV4dCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQ1NTLnB1c2gocnVsZS5jc3NUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllZENTUy5sZW5ndGgpIHJldHVybiBbMywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZENTUyA9IGZvcm1hdENTUyhtb2RpZmllZENTUy5qb2luKFwiXFxuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzLnB1c2goXCIvKiBNb2RpZmllZCBDU1MgKi9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gKF9hID0gY3NzKS5wdXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHJlcGxhY2VCbG9icyhmb3JtYXR0ZWRDU1MpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmFwcGx5KF9hLCBbX2Muc2VudCgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcy5wdXNoKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0tb3ZlcnJpZGVcIiwgXCJPdmVycmlkZSBTdHlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBjc3Muam9pbihcIlxcblwiKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpc0RhcmtSZWFkZXJFbmFibGVkID0gZmFsc2U7XHJcbiAgICB2YXIgaXNJRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgICBmdW5jdGlvbiBlbmFibGUodGhlbWVPcHRpb25zLCBmaXhlcykge1xyXG4gICAgICAgIGlmICh0aGVtZU9wdGlvbnMgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICB0aGVtZU9wdGlvbnMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpeGVzID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgZml4ZXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGhlbWUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9USEVNRSksIHRoZW1lT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHRoZW1lLmVuZ2luZSAhPT0gVGhlbWVFbmdpbmUuZHluYW1pY1RoZW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZW1lIGVuZ2luZSBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlT3JVcGRhdGVEeW5hbWljVGhlbWUodGhlbWUsIGZpeGVzLCBpc0lGcmFtZSk7XHJcbiAgICAgICAgaXNEYXJrUmVhZGVyRW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzRGFya1JlYWRlckVuYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNhYmxlKCkge1xyXG4gICAgICAgIHJlbW92ZUR5bmFtaWNUaGVtZSgpO1xyXG4gICAgICAgIGlzRGFya1JlYWRlckVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhciBkYXJrU2NoZW1lID0gbWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIik7XHJcbiAgICB2YXIgc3RvcmUgPSB7XHJcbiAgICAgICAgdGhlbWVPcHRpb25zOiBudWxsLFxyXG4gICAgICAgIGZpeGVzOiBudWxsXHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29sb3JTY2hlbWUoKSB7XHJcbiAgICAgICAgaWYgKGRhcmtTY2hlbWUubWF0Y2hlcykge1xyXG4gICAgICAgICAgICBlbmFibGUoc3RvcmUudGhlbWVPcHRpb25zLCBzdG9yZS5maXhlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF1dG8odGhlbWVPcHRpb25zLCBmaXhlcykge1xyXG4gICAgICAgIGlmICh0aGVtZU9wdGlvbnMgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICB0aGVtZU9wdGlvbnMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpeGVzID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgZml4ZXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhlbWVPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN0b3JlID0ge3RoZW1lT3B0aW9uczogdGhlbWVPcHRpb25zLCBmaXhlczogZml4ZXN9O1xyXG4gICAgICAgICAgICBoYW5kbGVDb2xvclNjaGVtZSgpO1xyXG4gICAgICAgICAgICBpZiAoaXNNYXRjaE1lZGlhQ2hhbmdlRXZlbnRMaXN0ZW5lclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgZGFya1NjaGVtZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZUNvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRhcmtTY2hlbWUuYWRkTGlzdGVuZXIoaGFuZGxlQ29sb3JTY2hlbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzTWF0Y2hNZWRpYUNoYW5nZUV2ZW50TGlzdGVuZXJTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGRhcmtTY2hlbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVDb2xvclNjaGVtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkYXJrU2NoZW1lLnJlbW92ZUxpc3RlbmVyKGhhbmRsZUNvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZXhwb3J0R2VuZXJhdGVkQ1NTKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBjb2xsZWN0Q1NTKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBzZXRGZXRjaE1ldGhvZCA9IHNldEZldGNoTWV0aG9kJDE7XHJcblxyXG4gICAgZXhwb3J0cy5hdXRvID0gYXV0bztcclxuICAgIGV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XHJcbiAgICBleHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcclxuICAgIGV4cG9ydHMuZXhwb3J0R2VuZXJhdGVkQ1NTID0gZXhwb3J0R2VuZXJhdGVkQ1NTO1xyXG4gICAgZXhwb3J0cy5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XHJcbiAgICBleHBvcnRzLnNldEZldGNoTWV0aG9kID0gc2V0RmV0Y2hNZXRob2Q7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6IHRydWV9KTtcclxufSk7XHJcbiIsImltcG9ydCB7IGRhcmtpZnkgfSBmcm9tIFwiLi91dGlsL2RyXCI7XG5pbXBvcnQgeyBwcm9jZXNzVGVtcGxhdGUgfSBmcm9tIFwiLi91dGlsL3RlbXBsYXRlc1wiO1xuXG5cbmludGVyZmFjZSBNYXJsb3dlQ29udHJhY3Qge1xuICAgIHRlbXBsYXRlOiBzdHJpbmdcbiAgICB0ZXJtczoge1trZXk6IHN0cmluZ106IG51bWJlcn1cbn1cblxuaW50ZXJmYWNlIFNhbXBsZWRSb3cge1xuICAgIG9yYWNsZVZhbHVlOiBudW1iZXIsXG4gICAgYWxpY2VQYXlvdXQ6IG51bWJlcixcbiAgICBib2JQYXlvdXQ6IG51bWJlclxufVxuXG5pbnRlcmZhY2UgQ29udHJhY3RBcGkge1xuICAgIHN0YXRlOiBOb3RlYm9va1N0YXRlXG4gICAgaW5qZWN0TWFybG93ZUNvbnRyYWN0OiAoYzogTWFybG93ZUNvbnRyYWN0KSA9PiB2b2lkXG4gICAgc2FtcGxlTWFybG93ZUNvbnRyYWN0OiAodzogV2luZG93KSA9PiB2b2lkXG4gICAgcGxvdE1hcmxvd2VDb250cmFjdD86IChzYW1wbGU6IFNhbXBsZWRSb3dbXSwgd2hlcmU6IEhUTUxEaXZFbGVtZW50KSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBOb3RlYm9va1N0YXRlIHtcbiAgICBpc01hcmxvd2VDb250cmFjdEdlbmVyYXRlZDogYm9vbGVhblxuICAgIGlzTWFybG93ZUNvbnRyYWN0U2FtcGxlZDogYm9vbGVhblxuICAgIHNhbXBsaW5nSW5Qcm9ncmVzczogYm9vbGVhblxuICAgIHNhbXBsZT86IFNhbXBsZWRSb3dbXVxuICAgIGNvbnRyYWN0PzogTWFybG93ZUNvbnRyYWN0XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgV2luZG93IHsgXG4gICAgICAgIGRhcmtpZmllcjogYW55XG4gICAgICAgIG1hcmxvd2VXaW5kb3c/OiAoKSA9PiBQcm9taXNlPFdpbmRvdz5cbiAgICAgICAgYXBpOiBDb250cmFjdEFwaVxuICAgICAgICBtb25hY286IGFueVxuICAgICAgICB0aWNrOiBudW1iZXJcbiAgICAgICAgYWN0aXZlVGlja2VyOiBudW1iZXJcbiAgICB9XG59XG5cblxuXG5kYXJraWZ5KHdpbmRvdy5kb2N1bWVudClcblxuaWYgKHdpbmRvdy5tYXJsb3dlV2luZG93ICE9IHVuZGVmaW5lZCkge1xuICAgIHdpbmRvdy5tYXJsb3dlV2luZG93KCkudGhlbihtdyA9PiB7XG4gICAgICAgIHdpbmRvdy5hcGkgPSB7XG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIGlzTWFybG93ZUNvbnRyYWN0R2VuZXJhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc01hcmxvd2VDb250cmFjdFNhbXBsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNhbXBsaW5nSW5Qcm9ncmVzczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmplY3RNYXJsb3dlQ29udHJhY3Q6IGFzeW5jIChjOiBNYXJsb3dlQ29udHJhY3QpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLnN0YXRlLmNvbnRyYWN0ID0gY1xuICAgICAgICAgICAgICAgIGxldCBtYXJsb3dlSG9tZSA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaC0xMFwiKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgIG1hcmxvd2VIb21lPy5jbGljaygpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGRvbnRTYXZlID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tci1tZWRpdW1cIikgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICBkb250U2F2ZT8uY2xpY2soKVxuXG4gICAgICAgICAgICAgICAgbGV0IHJhdyA9IGF3YWl0IChhd2FpdCBmZXRjaCh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgYC9tYXJsb3dlLXdvbGZyYW0td2ViZG9jL2NvbnRyYWN0cy8ke2MudGVtcGxhdGV9Lm1hcmxvd2VgKSkudGV4dCgpXG4gICAgICAgICAgICAgICAgbGV0IHRvSW5qZWN0ID0gcHJvY2Vzc1RlbXBsYXRlKGMudGVtcGxhdGUsIGMudGVybXMsIHJhdylcbiAgICAgICAgICAgICAgICBsZXQgZ29Ub0VkaXRvciA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tci00JykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICBnb1RvRWRpdG9yPy5jbGljaygpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBtdy5tb25hY28uZWRpdG9yLmdldE1vZGVscygpKSB7XG4gICAgICAgICAgICAgICAgICAgIG13Lm1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKClbaV0uYXBwbHlFZGl0cyhbe3JhbmdlOiB7c3RhcnRMaW5lTnVtYmVyOjAsIHN0YXJ0Q29sdW1uOiAwLCBlbmRDb2x1bW46IDEwMDAsIGVuZExpbmVOdW1iZXI6IDEwMDB9LCB0ZXh0OiB0b0luamVjdH1dKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBtZW51QmFyID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJhclwiKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgIG1lbnVCYXI/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcImRpc3BsYXk6IG5vbmVcIilcblxuICAgICAgICAgICAgICAgIGxldCBtZXRhID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0LXNlY29uZGFyeVwiKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgIG1ldGE/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcImRpc3BsYXk6IG5vbmVcIilcblxuICAgICAgICAgICAgICAgIGxldCBzdGF0aWNBbmFseXNpcyA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1ncmF5LWRhcmtlc3RcIikgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICBzdGF0aWNBbmFseXNpcz8uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiZGlzcGxheTogbm9uZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IGdvVG9CbG9ja3MgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAnKT8ucXVlcnlTZWxlY3RvcignLmJ0bicpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgZ29Ub0Jsb2Nrcz8uY2xpY2soKVxuXG4gICAgICAgICAgICAgICAgbGV0IGNhbmNlbCA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBwZXJjYXNlXCIpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgY2FuY2VsPy5jbGljaygpXG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLnN0YXRlLmlzTWFybG93ZUNvbnRyYWN0R2VuZXJhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInN0YXRlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhbXBsZU1hcmxvd2VDb250cmFjdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vdG9kbyBjaGVjayBpZiBpbiBzaW11bGF0b3IgYWxyZWFkeVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hcGkuc3RhdGUuc2FtcGxpbmdJblByb2dyZXNzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hcGkuc3RhdGUuc2FtcGxlID0gW11cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gd2luZG93LmFwaS5zdGF0ZS5jb250cmFjdCEudGVybXMubWluVmFsdWU7IGkgPD0gd2luZG93LmFwaS5zdGF0ZS5jb250cmFjdCEudGVybXMubWF4VmFsdWU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IHdpbmRvdy5hcGkuc3RhdGUuY29udHJhY3QhXG5cbiAgICAgICAgICAgICAgICAgICAgYy50ZXJtcy5taW5WYWx1ZSA9IGlcbiAgICAgICAgICAgICAgICAgICAgYy50ZXJtcy5tYXhWYWx1ZSA9IGlcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFwaS5pbmplY3RNYXJsb3dlQ29udHJhY3QoYylcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpKVxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZFRvU2ltdWxhdG9yID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwJyk/LmNoaWxkcmVuWzFdIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIHNlbmRUb1NpbXVsYXRvcj8uY2xpY2soKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFydFNpbXVsYXRpb24gPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNhY3Rpb24tYnRucycpPy5jaGlsZHJlblsxXSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBzdGFydFNpbXVsYXRpb24/LmNsaWNrKClcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxpY2VEZXBvc2l0ID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXMtYnRuJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgYWxpY2VEZXBvc2l0Py5jbGljaygpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvYkRlcG9zaXQgPSBtdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cy1idG4nKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBib2JEZXBvc2l0Py5jbGljaygpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNraXBUb0V4ZXJjaXNlID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsdXMtYnRuJylbMl0gYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgc2tpcFRvRXhlcmNpc2U/LmNsaWNrKClcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY29uZmlybSA9IG13LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzLWJ0bicpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm0/LmNsaWNrKClcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbG9nID0gbXcuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtY29scy1kZXNjcmlwdGlvbi1sb2NhdGlvbicpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGxldCBleHRyYWN0Qm9iUGF5b2ZmT3B0ID0gL1RoZSBjb250cmFjdCBwYXlzIOKCsyAoXFxkKykgZnJvbSBhY2NvdW50IG9mIEJvYiB0byBCb2Igd2FsbGV0Ly5leGVjKGxvZy5pbm5lclRleHQpPy5bMV1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4dHJhY3RBbGljZVBheW9mZk9wdCA9IC9UaGUgY29udHJhY3QgcGF5cyDigrMgKFxcZCspIGZyb20gYWNjb3VudCBvZiBBbGljZSB0byBBbGljZSB3YWxsZXQvLmV4ZWMobG9nLmlubmVyVGV4dCk/LlsxXVxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9iUGF5b2ZmID0gZXh0cmFjdEJvYlBheW9mZk9wdCA9PSBudWxsIHx8IE51bWJlci5pc05hTihwYXJzZUludChleHRyYWN0Qm9iUGF5b2ZmT3B0KSkgPyAwIDogcGFyc2VJbnQoZXh0cmFjdEJvYlBheW9mZk9wdClcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFsaWNlUGF5b2ZmID0gZXh0cmFjdEFsaWNlUGF5b2ZmT3B0ID09IG51bGwgfHwgTnVtYmVyLmlzTmFOKHBhcnNlSW50KGV4dHJhY3RBbGljZVBheW9mZk9wdCkpID8gMCA6IHBhcnNlSW50KGV4dHJhY3RBbGljZVBheW9mZk9wdClcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLnN0YXRlLnNhbXBsZS5wdXNoKHtvcmFjbGVWYWx1ZTogaSwgYWxpY2VQYXlvdXQ6IGFsaWNlUGF5b2ZmLCBib2JQYXlvdXQ6IGJvYlBheW9mZn0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5hcGkuc3RhdGUuc2FtcGxlKVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hcGkuc3RhdGUuc2FtcGxpbmdJblByb2dyZXNzID0gZmFsc2VcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLnN0YXRlLmlzTWFybG93ZUNvbnRyYWN0U2FtcGxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzdGF0ZVwiKSlcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXBpLmluamVjdE1hcmxvd2VDb250cmFjdCh3aW5kb3cuYXBpLnN0YXRlLmNvbnRyYWN0ISlcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBwb2xsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWwgPSAnaHR0cHM6Ly9hcGkud29sZnJhbWFscGhhLmNvbS92MS9yZXN1bHQ/YXBwaWQ9NldVNkpYLTQ2RVA1VTlBR1gmaT0xJTIwYnRjJTIwdG8lMjB1c2QlMjBudW1iZXInXG4gICAgICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jb3JzcHJveHkuaW8vPycgKyBlbmNvZGVVUklDb21wb25lbnQob3JpZ2luYWwpXG4gICAgXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBmZXRjaCh1cmwpXG4gICAgICAgICAgICBsZXQgcmF3ID0gKGF3YWl0IChhd2FpdCByZXNwb25zZSkudGV4dCgpKVxuICAgICAgICAgICAgbGV0IHJ4ID0gL1xcZCsvZztcbiAgICAgICAgICAgIGxldCByZXMgPSByeC5leGVjKHJhdylcbiAgICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkgd2luZG93LnRpY2sgPSBwYXJzZUludChyZXNbMF0pO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwidGlja1wiKSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHBvbGwoKVxuICAgICAgICBzZXRJbnRlcnZhbChwb2xsLCAxMDAwMClcblxuICAgIH0pXG5cblxuICAgIFxufVxuXG4iLCJpbXBvcnQge1xuICAgIGVuYWJsZSBhcyBlbmFibGVEYXJrTW9kZSxcbiAgICBleHBvcnRHZW5lcmF0ZWRDU1MgYXMgY29sbGVjdENTUyxcbiAgICBzZXRGZXRjaE1ldGhvZCBhcyBzZXRGZXRjaE1ldGhvZFxufSBmcm9tICdkYXJrcmVhZGVyJztcblxuZnVuY3Rpb24gYWRkU3R5bGUoZG9jLCBzdHlsZVN0cmluZykge1xuICAgIGNvbnN0IHN0eWxlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBzdHlsZVN0cmluZztcbiAgICBkb2MuaGVhZC5hcHBlbmQoc3R5bGUpO1xufVxuXG5leHBvcnQgY29uc3QgZGFya2lmeSA9IGFzeW5jIChkb2MpID0+IHtcbiAgICBzZXRGZXRjaE1ldGhvZCh3aW5kb3cuZmV0Y2gpXG5cbiAgICBlbmFibGVEYXJrTW9kZSh7XG4gICAgICAgIGJyaWdodG5lc3M6IDEwMCxcbiAgICAgICAgY29udHJhc3Q6IDkwLFxuICAgICAgICBzZXBpYTogMTAsXG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgQ1NTID0gYXdhaXQgY29sbGVjdENTUygpO1xuICAgIGFkZFN0eWxlKGRvYywgQ1NTKVxuXG59XG5cbmNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSIsImV4cG9ydCBjb25zdCBwcm9jZXNzVGVtcGxhdGUgPSAobmFtZTogc3RyaW5nLCBzdWJzdDoge1trZXk6IHN0cmluZ106IG51bWJlcn0sIHRlbXBsYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICBjYXNlICdldXJvY2FsbCc6IHJldHVybiB0ZW1wbGF0ZVxuICAgICAgICAgICAgLnJlcGxhY2UoXCIkbm90aW9uYWxcIiwgc3Vic3Qubm90aW9uYWwudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiJG1hcmdpblwiLCBzdWJzdC5tYXJnaW4udG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiJHN0cmlrZVwiLCBzdWJzdC5zdHJpa2UudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiJHByZW1pdW1cIiwgc3Vic3QucHJlbWl1bS50b1N0cmluZygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoXCIkbWluVmFsdWVcIiwgc3Vic3QubWluVmFsdWUudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiJG1heFZhbHVlXCIsIHN1YnN0Lm1heFZhbHVlLnRvU3RyaW5nKCkpXG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==