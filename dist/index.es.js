import { jsxDEV as k, Fragment as Tt } from "react/jsx-dev-runtime";
import * as wt from "react";
import { useState as et, useEffect as Zt, useCallback as no } from "react";
import { Box as ce, Typography as Ne, Stack as lr, FormControl as Sr, FormLabel as Tr, TextField as er, Button as ve, CircularProgress as cr, Divider as oo, Alert as mn } from "@mui/material";
import { ThemeContext as so } from "@emotion/react";
import { appendErrors as io, useForm as pn } from "react-hook-form";
import { validateFieldsNatively as ao, toNestErrors as lo } from "@hookform/resolvers";
import * as Qe from "yup";
import { Google as co } from "@mui/icons-material";
import { LumoraOTP as uo } from "@volenday/lumora-otp-component";
const fo = () => ({
  // Company branding
  companyName: "Lumora",
  tagline: "Secure authentication made simple",
  // Visual styling
  primaryColor: "#1976d2",
  secondaryColor: "#42a5f5",
  backgroundColor: "#ffffff",
  textColor: "#333333",
  // Logo configuration
  logoHeight: 48,
  logo: "https://via.placeholder.com/200x80/1976d2/ffffff?text=Lumora",
  // Forget password messaging
  forgetPasswordTitle: "Reset Your Password",
  forgetPasswordDescription: "Enter your email address and we will send you a secure link to reset your password.",
  forgetPasswordSuccessTitle: "Check Your Inbox",
  forgetPasswordSuccessDescription: "We have sent you a password reset link. Please check your email and follow the instructions to reset your password."
}), mo = (e) => ({
  ...fo(),
  ...e
}), ge = {
  /**
   * Get the access token from localStorage
   * @returns The access token or null if not found
   */
  getAccessToken: () => localStorage.getItem("lumora_access_token"),
  /**
   * Get the refresh token from localStorage
   * @returns The refresh token or null if not found
   */
  getRefreshToken: () => localStorage.getItem("lumora_refresh_token"),
  /**
   * Store both access and refresh tokens in localStorage
   * @param accessToken - The access token to store
   * @param refreshToken - The refresh token to store
   */
  setTokens: (e, t) => {
    localStorage.setItem("lumora_access_token", e), localStorage.setItem("lumora_refresh_token", t);
  },
  /**
   * Clear all authentication tokens from localStorage
   */
  clearTokens: () => {
    localStorage.removeItem("lumora_access_token"), localStorage.removeItem("lumora_refresh_token");
  },
  /**
   * Check if both tokens are present in localStorage
   * @returns True if both tokens exist, false otherwise
   */
  hasTokens: () => !!(ge.getAccessToken() && ge.getRefreshToken())
};
function hn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: po } = Object.prototype, { getPrototypeOf: ur } = Object, { iterator: vt, toStringTag: gn } = Symbol, xt = /* @__PURE__ */ ((e) => (t) => {
  const r = po.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), be = (e) => (e = e.toLowerCase(), (t) => xt(t) === e), Ct = (e) => (t) => typeof t === e, { isArray: qe } = Array, Ve = Ct("undefined");
function rt(e) {
  return e !== null && !Ve(e) && e.constructor !== null && !Ve(e.constructor) && de(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const yn = be("ArrayBuffer");
function ho(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && yn(e.buffer), t;
}
const go = Ct("string"), de = Ct("function"), bn = Ct("number"), nt = (e) => e !== null && typeof e == "object", yo = (e) => e === !0 || e === !1, gt = (e) => {
  if (xt(e) !== "object")
    return !1;
  const t = ur(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(gn in e) && !(vt in e);
}, bo = (e) => {
  if (!nt(e) || rt(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Eo = be("Date"), So = be("File"), To = be("Blob"), wo = be("FileList"), vo = (e) => nt(e) && de(e.pipe), xo = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || de(e.append) && ((t = xt(e)) === "formdata" || // detect form-data instance
  t === "object" && de(e.toString) && e.toString() === "[object FormData]"));
}, Co = be("URLSearchParams"), [ko, No, Oo, Ro] = ["ReadableStream", "Request", "Response", "Headers"].map(be), Ao = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ot(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), qe(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    if (rt(e))
      return;
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (n = 0; n < i; n++)
      a = s[n], t.call(null, e[a], a, e);
  }
}
function En(e, t) {
  if (rt(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const _e = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Sn = (e) => !Ve(e) && e !== _e;
function tr() {
  const { caseless: e, skipUndefined: t } = Sn(this) && this || {}, r = {}, n = (o, s) => {
    const i = e && En(r, s) || s;
    gt(r[i]) && gt(o) ? r[i] = tr(r[i], o) : gt(o) ? r[i] = tr({}, o) : qe(o) ? r[i] = o.slice() : (!t || !Ve(o)) && (r[i] = o);
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && ot(arguments[o], n);
  return r;
}
const Po = (e, t, r, { allOwnKeys: n } = {}) => (ot(t, (o, s) => {
  r && de(o) ? e[s] = hn(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), _o = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), $o = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Do = (e, t, r, n) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!n || n(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = r !== !1 && ur(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Io = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Uo = (e) => {
  if (!e) return null;
  if (qe(e)) return e;
  let t = e.length;
  if (!bn(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Fo = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ur(Uint8Array)), Lo = (e, t) => {
  const n = (e && e[vt]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, Bo = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Mo = be("HTMLFormElement"), jo = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), wr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Wo = be("RegExp"), Tn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ot(r, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (n[s] = i || o);
  }), Object.defineProperties(e, n);
}, Vo = (e) => {
  Tn(e, (t, r) => {
    if (de(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (de(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, qo = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return qe(e) ? n(e) : n(String(e).split(t)), r;
}, zo = () => {
}, Ho = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Go(e) {
  return !!(e && de(e.append) && e[gn] === "FormData" && e[vt]);
}
const Yo = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (nt(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (rt(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = qe(n) ? [] : {};
        return ot(n, (i, a) => {
          const f = r(i, o + 1);
          !Ve(f) && (s[a] = f);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, Ko = be("AsyncFunction"), Jo = (e) => e && (nt(e) || de(e)) && de(e.then) && de(e.catch), wn = ((e, t) => e ? setImmediate : t ? ((r, n) => (_e.addEventListener("message", ({ source: o, data: s }) => {
  o === _e && s === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), _e.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  de(_e.postMessage)
), Xo = typeof queueMicrotask < "u" ? queueMicrotask.bind(_e) : typeof process < "u" && process.nextTick || wn, Qo = (e) => e != null && de(e[vt]), h = {
  isArray: qe,
  isArrayBuffer: yn,
  isBuffer: rt,
  isFormData: xo,
  isArrayBufferView: ho,
  isString: go,
  isNumber: bn,
  isBoolean: yo,
  isObject: nt,
  isPlainObject: gt,
  isEmptyObject: bo,
  isReadableStream: ko,
  isRequest: No,
  isResponse: Oo,
  isHeaders: Ro,
  isUndefined: Ve,
  isDate: Eo,
  isFile: So,
  isBlob: To,
  isRegExp: Wo,
  isFunction: de,
  isStream: vo,
  isURLSearchParams: Co,
  isTypedArray: Fo,
  isFileList: wo,
  forEach: ot,
  merge: tr,
  extend: Po,
  trim: Ao,
  stripBOM: _o,
  inherits: $o,
  toFlatObject: Do,
  kindOf: xt,
  kindOfTest: be,
  endsWith: Io,
  toArray: Uo,
  forEachEntry: Lo,
  matchAll: Bo,
  isHTMLForm: Mo,
  hasOwnProperty: wr,
  hasOwnProp: wr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Tn,
  freezeMethods: Vo,
  toObjectSet: qo,
  toCamelCase: jo,
  noop: zo,
  toFiniteNumber: Ho,
  findKey: En,
  global: _e,
  isContextDefined: Sn,
  isSpecCompliantForm: Go,
  toJSONObject: Yo,
  isAsyncFn: Ko,
  isThenable: Jo,
  setImmediate: wn,
  asap: Xo,
  isIterable: Qo
};
function I(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
h.inherits(I, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: h.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const vn = I.prototype, xn = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  xn[e] = { value: e };
});
Object.defineProperties(I, xn);
Object.defineProperty(vn, "isAxiosError", { value: !0 });
I.from = (e, t, r, n, o, s) => {
  const i = Object.create(vn);
  h.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (d) => d !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", f = t == null && e ? e.code : t;
  return I.call(i, a, f, r, n, o), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", s && Object.assign(i, s), i;
};
const Zo = null;
function rr(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function Cn(e) {
  return h.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function vr(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Cn(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function es(e) {
  return h.isArray(e) && !e.some(rr);
}
const ts = h.toFlatObject(h, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function kt(e, t, r) {
  if (!h.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(c, y) {
    return !h.isUndefined(y[c]);
  });
  const n = r.metaTokens, o = r.visitor || u, s = r.dots, i = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(t);
  if (!h.isFunction(o))
    throw new TypeError("visitor must be a function");
  function d(m) {
    if (m === null) return "";
    if (h.isDate(m))
      return m.toISOString();
    if (h.isBoolean(m))
      return m.toString();
    if (!f && h.isBlob(m))
      throw new I("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(m) || h.isTypedArray(m) ? f && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, c, y) {
    let O = m;
    if (m && !y && typeof m == "object") {
      if (h.endsWith(c, "{}"))
        c = n ? c : c.slice(0, -2), m = JSON.stringify(m);
      else if (h.isArray(m) && es(m) || (h.isFileList(m) || h.endsWith(c, "[]")) && (O = h.toArray(m)))
        return c = Cn(c), O.forEach(function(A, v) {
          !(h.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? vr([c], v, s) : i === null ? c : c + "[]",
            d(A)
          );
        }), !1;
    }
    return rr(m) ? !0 : (t.append(vr(y, c, s), d(m)), !1);
  }
  const p = [], g = Object.assign(ts, {
    defaultVisitor: u,
    convertValue: d,
    isVisitable: rr
  });
  function E(m, c) {
    if (!h.isUndefined(m)) {
      if (p.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + c.join("."));
      p.push(m), h.forEach(m, function(O, _) {
        (!(h.isUndefined(O) || O === null) && o.call(
          t,
          O,
          h.isString(_) ? _.trim() : _,
          c,
          g
        )) === !0 && E(O, c ? c.concat(_) : [_]);
      }), p.pop();
    }
  }
  if (!h.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function xr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function dr(e, t) {
  this._pairs = [], e && kt(e, this, t);
}
const kn = dr.prototype;
kn.append = function(t, r) {
  this._pairs.push([t, r]);
};
kn.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, xr);
  } : xr;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function rs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Nn(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || rs;
  h.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = h.isURLSearchParams(t) ? t.toString() : new dr(t, r).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Cr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    h.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const On = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ns = typeof URLSearchParams < "u" ? URLSearchParams : dr, os = typeof FormData < "u" ? FormData : null, ss = typeof Blob < "u" ? Blob : null, is = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ns,
    FormData: os,
    Blob: ss
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, fr = typeof window < "u" && typeof document < "u", nr = typeof navigator == "object" && navigator || void 0, as = fr && (!nr || ["ReactNative", "NativeScript", "NS"].indexOf(nr.product) < 0), ls = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", cs = fr && window.location.href || "http://localhost", us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: fr,
  hasStandardBrowserEnv: as,
  hasStandardBrowserWebWorkerEnv: ls,
  navigator: nr,
  origin: cs
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...us,
  ...is
};
function ds(e, t) {
  return kt(e, new ae.classes.URLSearchParams(), {
    visitor: function(r, n, o, s) {
      return ae.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function fs(e) {
  return h.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ms(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function Rn(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), f = s >= r.length;
    return i = !i && h.isArray(o) ? o.length : i, f ? (h.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !a) : ((!o[i] || !h.isObject(o[i])) && (o[i] = []), t(r, n, o[i], s) && h.isArray(o[i]) && (o[i] = ms(o[i])), !a);
  }
  if (h.isFormData(e) && h.isFunction(e.entries)) {
    const r = {};
    return h.forEachEntry(e, (n, o) => {
      t(fs(n), o, r, 0);
    }), r;
  }
  return null;
}
function ps(e, t, r) {
  if (h.isString(e))
    try {
      return (t || JSON.parse)(e), h.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const st = {
  transitional: On,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = h.isObject(t);
    if (s && h.isHTMLForm(t) && (t = new FormData(t)), h.isFormData(t))
      return o ? JSON.stringify(Rn(t)) : t;
    if (h.isArrayBuffer(t) || h.isBuffer(t) || h.isStream(t) || h.isFile(t) || h.isBlob(t) || h.isReadableStream(t))
      return t;
    if (h.isArrayBufferView(t))
      return t.buffer;
    if (h.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ds(t, this.formSerializer).toString();
      if ((a = h.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return kt(
          a ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), ps(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || st.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (h.isResponse(t) || h.isReadableStream(t))
      return t;
    if (t && h.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? I.from(a, I.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ae.classes.FormData,
    Blob: ae.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
h.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  st.headers[e] = {};
});
const hs = h.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), gs = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && hs[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, kr = /* @__PURE__ */ Symbol("internals");
function He(e) {
  return e && String(e).trim().toLowerCase();
}
function yt(e) {
  return e === !1 || e == null ? e : h.isArray(e) ? e.map(yt) : String(e);
}
function ys(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const bs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Wt(e, t, r, n, o) {
  if (h.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!h.isString(t)) {
    if (h.isString(n))
      return t.indexOf(n) !== -1;
    if (h.isRegExp(n))
      return n.test(t);
  }
}
function Es(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Ss(e, t) {
  const r = h.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, i) {
        return this[n].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
let fe = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(a, f, d) {
      const u = He(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = h.findKey(o, u);
      (!p || o[p] === void 0 || d === !0 || d === void 0 && o[p] !== !1) && (o[p || f] = yt(a));
    }
    const i = (a, f) => h.forEach(a, (d, u) => s(d, u, f));
    if (h.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (h.isString(t) && (t = t.trim()) && !bs(t))
      i(gs(t), r);
    else if (h.isObject(t) && h.isIterable(t)) {
      let a = {}, f, d;
      for (const u of t) {
        if (!h.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[d = u[0]] = (f = a[d]) ? h.isArray(f) ? [...f, u[1]] : [f, u[1]] : u[1];
      }
      i(a, r);
    } else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = He(t), t) {
      const n = h.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return ys(o);
        if (h.isFunction(r))
          return r.call(this, o, n);
        if (h.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = He(t), t) {
      const n = h.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Wt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = He(i), i) {
        const a = h.findKey(n, i);
        a && (!r || Wt(n, n[a], a, r)) && (delete n[a], o = !0);
      }
    }
    return h.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || Wt(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return h.forEach(this, (o, s) => {
      const i = h.findKey(n, s);
      if (i) {
        r[i] = yt(o), delete r[s];
        return;
      }
      const a = t ? Es(s) : String(s).trim();
      a !== s && delete r[s], r[a] = yt(o), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return h.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && h.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[kr] = this[kr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = He(i);
      n[a] || (Ss(o, i), n[a] = !0);
    }
    return h.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
fe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(fe.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
h.freezeMethods(fe);
function Vt(e, t) {
  const r = this || st, n = t || r, o = fe.from(n.headers);
  let s = n.data;
  return h.forEach(e, function(a) {
    s = a.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function An(e) {
  return !!(e && e.__CANCEL__);
}
function ze(e, t, r) {
  I.call(this, e ?? "canceled", I.ERR_CANCELED, t, r), this.name = "CanceledError";
}
h.inherits(ze, I, {
  __CANCEL__: !0
});
function Pn(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new I(
    "Request failed with status code " + r.status,
    [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ts(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ws(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const d = Date.now(), u = n[s];
    i || (i = d), r[o] = f, n[o] = d;
    let p = s, g = 0;
    for (; p !== o; )
      g += r[p++], p = p % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), d - i < t)
      return;
    const E = u && d - u;
    return E ? Math.round(g * 1e3 / E) : void 0;
  };
}
function vs(e, t) {
  let r = 0, n = 1e3 / t, o, s;
  const i = (d, u = Date.now()) => {
    r = u, o = null, s && (clearTimeout(s), s = null), e(...d);
  };
  return [(...d) => {
    const u = Date.now(), p = u - r;
    p >= n ? i(d, u) : (o = d, s || (s = setTimeout(() => {
      s = null, i(o);
    }, n - p)));
  }, () => o && i(o)];
}
const Et = (e, t, r = 3) => {
  let n = 0;
  const o = ws(50, 250);
  return vs((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, f = i - n, d = o(f), u = i <= a;
    n = i;
    const p = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: f,
      rate: d || void 0,
      estimated: d && a && u ? (a - i) / d : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, r);
}, Nr = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Or = (e) => (...t) => h.asap(() => e(...t)), xs = ae.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, ae.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(ae.origin),
  ae.navigator && /(msie|trident)/i.test(ae.navigator.userAgent)
) : () => !0, Cs = ae.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, s, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      h.isNumber(r) && a.push(`expires=${new Date(r).toUTCString()}`), h.isString(n) && a.push(`path=${n}`), h.isString(o) && a.push(`domain=${o}`), s === !0 && a.push("secure"), h.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ks(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ns(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _n(e, t, r) {
  let n = !ks(t);
  return e && (n || r == !1) ? Ns(e, t) : t;
}
const Rr = (e) => e instanceof fe ? { ...e } : e;
function Ie(e, t) {
  t = t || {};
  const r = {};
  function n(d, u, p, g) {
    return h.isPlainObject(d) && h.isPlainObject(u) ? h.merge.call({ caseless: g }, d, u) : h.isPlainObject(u) ? h.merge({}, u) : h.isArray(u) ? u.slice() : u;
  }
  function o(d, u, p, g) {
    if (h.isUndefined(u)) {
      if (!h.isUndefined(d))
        return n(void 0, d, p, g);
    } else return n(d, u, p, g);
  }
  function s(d, u) {
    if (!h.isUndefined(u))
      return n(void 0, u);
  }
  function i(d, u) {
    if (h.isUndefined(u)) {
      if (!h.isUndefined(d))
        return n(void 0, d);
    } else return n(void 0, u);
  }
  function a(d, u, p) {
    if (p in t)
      return n(d, u);
    if (p in e)
      return n(void 0, d);
  }
  const f = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (d, u, p) => o(Rr(d), Rr(u), p, !0)
  };
  return h.forEach(Object.keys({ ...e, ...t }), function(u) {
    const p = f[u] || o, g = p(e[u], t[u], u);
    h.isUndefined(g) && p !== a || (r[u] = g);
  }), r;
}
const $n = (e) => {
  const t = Ie({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  if (t.headers = i = fe.from(i), t.url = Nn(_n(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), h.isFormData(r)) {
    if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (h.isFunction(r.getHeaders)) {
      const f = r.getHeaders(), d = ["content-type", "content-length"];
      Object.entries(f).forEach(([u, p]) => {
        d.includes(u.toLowerCase()) && i.set(u, p);
      });
    }
  }
  if (ae.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(t)), n || n !== !1 && xs(t.url))) {
    const f = o && s && Cs.read(s);
    f && i.set(o, f);
  }
  return t;
}, Os = typeof XMLHttpRequest < "u", Rs = Os && function(e) {
  return new Promise(function(r, n) {
    const o = $n(e);
    let s = o.data;
    const i = fe.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: f, onDownloadProgress: d } = o, u, p, g, E, m;
    function c() {
      E && E(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let y = new XMLHttpRequest();
    y.open(o.method.toUpperCase(), o.url, !0), y.timeout = o.timeout;
    function O() {
      if (!y)
        return;
      const A = fe.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), S = {
        data: !a || a === "text" || a === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: A,
        config: e,
        request: y
      };
      Pn(function(X) {
        r(X), c();
      }, function(X) {
        n(X), c();
      }, S), y = null;
    }
    "onloadend" in y ? y.onloadend = O : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(O);
    }, y.onabort = function() {
      y && (n(new I("Request aborted", I.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(v) {
      const S = v && v.message ? v.message : "Network Error", R = new I(S, I.ERR_NETWORK, e, y);
      R.event = v || null, n(R), y = null;
    }, y.ontimeout = function() {
      let v = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const S = o.transitional || On;
      o.timeoutErrorMessage && (v = o.timeoutErrorMessage), n(new I(
        v,
        S.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED,
        e,
        y
      )), y = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in y && h.forEach(i.toJSON(), function(v, S) {
      y.setRequestHeader(S, v);
    }), h.isUndefined(o.withCredentials) || (y.withCredentials = !!o.withCredentials), a && a !== "json" && (y.responseType = o.responseType), d && ([g, m] = Et(d, !0), y.addEventListener("progress", g)), f && y.upload && ([p, E] = Et(f), y.upload.addEventListener("progress", p), y.upload.addEventListener("loadend", E)), (o.cancelToken || o.signal) && (u = (A) => {
      y && (n(!A || A.type ? new ze(null, e, y) : A), y.abort(), y = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const _ = Ts(o.url);
    if (_ && ae.protocols.indexOf(_) === -1) {
      n(new I("Unsupported protocol " + _ + ":", I.ERR_BAD_REQUEST, e));
      return;
    }
    y.send(s || null);
  });
}, As = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const s = function(d) {
      if (!o) {
        o = !0, a();
        const u = d instanceof Error ? d : this.reason;
        n.abort(u instanceof I ? u : new ze(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new I(`timeout ${t} of ms exceeded`, I.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(s) : d.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", s));
    const { signal: f } = n;
    return f.unsubscribe = () => h.asap(a), f;
  }
}, Ps = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, _s = async function* (e, t) {
  for await (const r of $s(e))
    yield* Ps(r, t);
}, $s = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Ar = (e, t, r, n) => {
  const o = _s(e, t);
  let s = 0, i, a = (f) => {
    i || (i = !0, n && n(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: d, value: u } = await o.next();
        if (d) {
          a(), f.close();
          return;
        }
        let p = u.byteLength;
        if (r) {
          let g = s += p;
          r(g);
        }
        f.enqueue(new Uint8Array(u));
      } catch (d) {
        throw a(d), d;
      }
    },
    cancel(f) {
      return a(f), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Pr = 64 * 1024, { isFunction: ct } = h, Ds = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(h.global), {
  ReadableStream: _r,
  TextEncoder: $r
} = h.global, Dr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Is = (e) => {
  e = h.merge.call({
    skipUndefined: !0
  }, Ds, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? ct(t) : typeof fetch == "function", s = ct(r), i = ct(n);
  if (!o)
    return !1;
  const a = o && ct(_r), f = o && (typeof $r == "function" ? /* @__PURE__ */ ((m) => (c) => m.encode(c))(new $r()) : async (m) => new Uint8Array(await new r(m).arrayBuffer())), d = s && a && Dr(() => {
    let m = !1;
    const c = new r(ae.origin, {
      body: new _r(),
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }).headers.has("Content-Type");
    return m && !c;
  }), u = i && a && Dr(() => h.isReadableStream(new n("").body)), p = {
    stream: u && ((m) => m.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((m) => {
    !p[m] && (p[m] = (c, y) => {
      let O = c && c[m];
      if (O)
        return O.call(c);
      throw new I(`Response type '${m}' is not supported`, I.ERR_NOT_SUPPORT, y);
    });
  });
  const g = async (m) => {
    if (m == null)
      return 0;
    if (h.isBlob(m))
      return m.size;
    if (h.isSpecCompliantForm(m))
      return (await new r(ae.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
    if (h.isArrayBufferView(m) || h.isArrayBuffer(m))
      return m.byteLength;
    if (h.isURLSearchParams(m) && (m = m + ""), h.isString(m))
      return (await f(m)).byteLength;
  }, E = async (m, c) => {
    const y = h.toFiniteNumber(m.getContentLength());
    return y ?? g(c);
  };
  return async (m) => {
    let {
      url: c,
      method: y,
      data: O,
      signal: _,
      cancelToken: A,
      timeout: v,
      onDownloadProgress: S,
      onUploadProgress: R,
      responseType: X,
      headers: le,
      withCredentials: Z = "same-origin",
      fetchOptions: oe
    } = $n(m), P = t || fetch;
    X = X ? (X + "").toLowerCase() : "text";
    let l = As([_, A && A.toAbortSignal()], v), N = null;
    const w = l && l.unsubscribe && (() => {
      l.unsubscribe();
    });
    let j;
    try {
      if (R && d && y !== "get" && y !== "head" && (j = await E(le, O)) !== 0) {
        let x = new r(c, {
          method: "POST",
          body: O,
          duplex: "half"
        }), D;
        if (h.isFormData(O) && (D = x.headers.get("content-type")) && le.setContentType(D), x.body) {
          const [F, $] = Nr(
            j,
            Et(Or(R))
          );
          O = Ar(x.body, Pr, F, $);
        }
      }
      h.isString(Z) || (Z = Z ? "include" : "omit");
      const U = s && "credentials" in r.prototype, ie = {
        ...oe,
        signal: l,
        method: y.toUpperCase(),
        headers: le.normalize().toJSON(),
        body: O,
        duplex: "half",
        credentials: U ? Z : void 0
      };
      N = s && new r(c, ie);
      let se = await (s ? P(N, oe) : P(c, ie));
      const Ue = u && (X === "stream" || X === "response");
      if (u && (S || Ue && w)) {
        const x = {};
        ["status", "statusText", "headers"].forEach((M) => {
          x[M] = se[M];
        });
        const D = h.toFiniteNumber(se.headers.get("content-length")), [F, $] = S && Nr(
          D,
          Et(Or(S), !0)
        ) || [];
        se = new n(
          Ar(se.body, Pr, F, () => {
            $ && $(), w && w();
          }),
          x
        );
      }
      X = X || "text";
      let T = await p[h.findKey(p, X) || "text"](se, m);
      return !Ue && w && w(), await new Promise((x, D) => {
        Pn(x, D, {
          data: T,
          headers: fe.from(se.headers),
          status: se.status,
          statusText: se.statusText,
          config: m,
          request: N
        });
      });
    } catch (U) {
      throw w && w(), U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message) ? Object.assign(
        new I("Network Error", I.ERR_NETWORK, m, N),
        {
          cause: U.cause || U
        }
      ) : I.from(U, U && U.code, m, N);
    }
  };
}, Us = /* @__PURE__ */ new Map(), Dn = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: o } = t, s = [
    n,
    o,
    r
  ];
  let i = s.length, a = i, f, d, u = Us;
  for (; a--; )
    f = s[a], d = u.get(f), d === void 0 && u.set(f, d = a ? /* @__PURE__ */ new Map() : Is(t)), u = d;
  return d;
};
Dn();
const mr = {
  http: Zo,
  xhr: Rs,
  fetch: {
    get: Dn
  }
};
h.forEach(mr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ir = (e) => `- ${e}`, Fs = (e) => h.isFunction(e) || e === null || e === !1;
function Ls(e, t) {
  e = h.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, o;
  const s = {};
  for (let i = 0; i < r; i++) {
    n = e[i];
    let a;
    if (o = n, !Fs(n) && (o = mr[(a = String(n)).toLowerCase()], o === void 0))
      throw new I(`Unknown adapter '${a}'`);
    if (o && (h.isFunction(o) || (o = o.get(t))))
      break;
    s[a || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(s).map(
      ([f, d]) => `adapter ${f} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = r ? i.length > 1 ? `since :
` + i.map(Ir).join(`
`) : " " + Ir(i[0]) : "as no adapter specified";
    throw new I(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const In = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Ls,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: mr
};
function qt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ze(null, e);
}
function Ur(e) {
  return qt(e), e.headers = fe.from(e.headers), e.data = Vt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), In.getAdapter(e.adapter || st.adapter, e)(e).then(function(n) {
    return qt(e), n.data = Vt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = fe.from(n.headers), n;
  }, function(n) {
    return An(n) || (qt(e), n && n.response && (n.response.data = Vt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = fe.from(n.response.headers))), Promise.reject(n);
  });
}
const Un = "1.13.2", Nt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Nt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Fr = {};
Nt.transitional = function(t, r, n) {
  function o(s, i) {
    return "[Axios v" + Un + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new I(
        o(i, " has been removed" + (r ? " in " + r : "")),
        I.ERR_DEPRECATED
      );
    return r && !Fr[i] && (Fr[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
Nt.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Bs(e, t, r) {
  if (typeof e != "object")
    throw new I("options must be an object", I.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = t[s];
    if (i) {
      const a = e[s], f = a === void 0 || i(a, s, e);
      if (f !== !0)
        throw new I("option " + s + " must be " + f, I.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new I("Unknown option " + s, I.ERR_BAD_OPTION);
  }
}
const bt = {
  assertOptions: Bs,
  validators: Nt
}, Se = bt.validators;
let De = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Cr(),
      response: new Cr()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ie(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && bt.assertOptions(n, {
      silentJSONParsing: Se.transitional(Se.boolean),
      forcedJSONParsing: Se.transitional(Se.boolean),
      clarifyTimeoutError: Se.transitional(Se.boolean)
    }, !1), o != null && (h.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : bt.assertOptions(o, {
      encode: Se.function,
      serialize: Se.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), bt.assertOptions(r, {
      baseUrl: Se.spelling("baseURL"),
      withXsrfToken: Se.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = s && h.merge(
      s.common,
      s[r.method]
    );
    s && h.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete s[m];
      }
    ), r.headers = fe.concat(i, s);
    const a = [];
    let f = !0;
    this.interceptors.request.forEach(function(c) {
      typeof c.runWhen == "function" && c.runWhen(r) === !1 || (f = f && c.synchronous, a.unshift(c.fulfilled, c.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(c) {
      d.push(c.fulfilled, c.rejected);
    });
    let u, p = 0, g;
    if (!f) {
      const m = [Ur.bind(this), void 0];
      for (m.unshift(...a), m.push(...d), g = m.length, u = Promise.resolve(r); p < g; )
        u = u.then(m[p++], m[p++]);
      return u;
    }
    g = a.length;
    let E = r;
    for (; p < g; ) {
      const m = a[p++], c = a[p++];
      try {
        E = m(E);
      } catch (y) {
        c.call(this, y);
        break;
      }
    }
    try {
      u = Ur.call(this, E);
    } catch (m) {
      return Promise.reject(m);
    }
    for (p = 0, g = d.length; p < g; )
      u = u.then(d[p++], d[p++]);
    return u;
  }
  getUri(t) {
    t = Ie(this.defaults, t);
    const r = _n(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Nn(r, t.params, t.paramsSerializer);
  }
};
h.forEach(["delete", "get", "head", "options"], function(t) {
  De.prototype[t] = function(r, n) {
    return this.request(Ie(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, i, a) {
      return this.request(Ie(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  De.prototype[t] = r(), De.prototype[t + "Form"] = r(!0);
});
let Ms = class Fn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        n.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      n.reason || (n.reason = new ze(s, i, a), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Fn(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function js(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Ws(e) {
  return h.isObject(e) && e.isAxiosError === !0;
}
const or = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(or).forEach(([e, t]) => {
  or[t] = e;
});
function Ln(e) {
  const t = new De(e), r = hn(De.prototype.request, t);
  return h.extend(r, De.prototype, t, { allOwnKeys: !0 }), h.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Ln(Ie(e, o));
  }, r;
}
const re = Ln(st);
re.Axios = De;
re.CanceledError = ze;
re.CancelToken = Ms;
re.isCancel = An;
re.VERSION = Un;
re.toFormData = kt;
re.AxiosError = I;
re.Cancel = re.CanceledError;
re.all = function(t) {
  return Promise.all(t);
};
re.spread = js;
re.isAxiosError = Ws;
re.mergeConfig = Ie;
re.AxiosHeaders = fe;
re.formToJSON = (e) => Rn(h.isHTMLForm(e) ? new FormData(e) : e);
re.getAdapter = In.getAdapter;
re.HttpStatusCode = or;
re.default = re;
const {
  Axios: hl,
  AxiosError: gl,
  CanceledError: yl,
  isCancel: bl,
  CancelToken: El,
  VERSION: Sl,
  all: Tl,
  Cancel: wl,
  isAxiosError: vl,
  spread: xl,
  toFormData: Cl,
  AxiosHeaders: kl,
  HttpStatusCode: Nl,
  formToJSON: Ol,
  getAdapter: Rl,
  mergeConfig: Al
} = re, Ce = {
  // Default API endpoints
  ENDPOINTS: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    GOOGLE_AUTH: "/auth/google",
    GOOGLE_CALLBACK: "/auth/google/callback",
    USER_ME: "/users/me"
  },
  // Token storage keys
  STORAGE_KEYS: {
    ACCESS_TOKEN: "lumora_access_token",
    REFRESH_TOKEN: "lumora_refresh_token"
  },
  // Default API configuration
  DEFAULT_CONFIG: {
    API_BASE_URL: "https://dev.api.lumora.capital",
    TIMEOUT: 1e4,
    // 10 seconds
    RETRY_ATTEMPTS: 1
  },
  // HTTP status codes
  STATUS_CODES: {
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
  }
}, Vs = {
  NO_ACCESS_TOKEN: "No access token available",
  NO_REFRESH_TOKEN: "No refresh token available",
  TOKEN_REFRESH_FAILED: "Token refresh failed",
  API_REQUEST_FAILED: "API request failed",
  NETWORK_ERROR: "Network error occurred",
  INVALID_CREDENTIALS: "Invalid credentials",
  UNAUTHORIZED: "Unauthorized access",
  FORBIDDEN: "Access forbidden",
  NOT_FOUND: "Resource not found",
  INTERNAL_ERROR: "Internal server error"
}, qs = (e, t) => {
  const r = re.create({
    baseURL: e,
    timeout: Ce.DEFAULT_CONFIG.TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      ...t && { "X-API-Key": t }
    }
  });
  return r.interceptors.request.use(
    (n) => {
      const o = ge.getAccessToken();
      return o && n.headers && (n.headers.Authorization = `Bearer ${o}`), n;
    },
    (n) => Promise.reject(n)
  ), r.interceptors.response.use(
    (n) => n,
    async (n) => {
      const o = n.config;
      if (n.response?.status === Ce.STATUS_CODES.UNAUTHORIZED && !o._retry) {
        o._retry = !0;
        try {
          const s = ge.getRefreshToken();
          if (!s)
            throw new Error(Vs.NO_REFRESH_TOKEN);
          const i = await r.post(Ce.ENDPOINTS.REFRESH, {
            refreshToken: s
          }), a = {
            accessToken: i.data.accessToken,
            refreshToken: i.data.refreshToken
          };
          return ge.setTokens(a.accessToken, a.refreshToken), o.headers && (o.headers.Authorization = `Bearer ${a.accessToken}`), r(o);
        } catch (s) {
          return ge.clearTokens(), window.location.href = "/login", Promise.reject(s);
        }
      }
      return Promise.reject(n);
    }
  ), r;
};
let ut = null;
const Ke = (e, t) => {
  if (!ut && e && (ut = qs(e, t)), !ut)
    throw new Error("API client not initialized. Please provide baseURL.");
  return ut;
}, $e = {
  /**
   * Authenticate user with email and password
   * @param email - User's email address
   * @param password - User's password
   * @returns Promise resolving to authentication tokens
   */
  login: async (e, t) => {
    try {
      const n = await Ke().post(Ce.ENDPOINTS.LOGIN, {
        email: e,
        password: t
      });
      return {
        accessToken: n.data.accessToken,
        refreshToken: n.data.refreshToken
      };
    } catch (r) {
      throw new Error(
        r.response?.data?.message || r.message || "Login failed"
      );
    }
  },
  /**
   * Logout user and invalidate refresh token
   * @param refreshToken - The refresh token to invalidate
   * @returns Promise resolving when logout is complete
   */
  logout: async (e) => {
    try {
      await Ke().post(Ce.ENDPOINTS.LOGOUT, {
        refreshToken: e
      });
    } catch (t) {
      console.error("Logout API call failed:", t);
    }
  },
  /**
   * Refresh access token using refresh token
   * @param refreshToken - The refresh token
   * @returns Promise resolving to new authentication tokens
   */
  refresh: async (e) => {
    try {
      const r = await Ke().post(Ce.ENDPOINTS.REFRESH, {
        refreshToken: e
      });
      return {
        accessToken: r.data.accessToken,
        refreshToken: r.data.refreshToken
      };
    } catch (t) {
      throw new Error(
        t.response?.data?.message || t.message || "Token refresh failed"
      );
    }
  },
  /**
   * Get current user profile
   * @returns Promise resolving to user profile
   */
  getCurrentUser: async () => {
    try {
      const t = await Ke().get(Ce.ENDPOINTS.USER_ME);
      return {
        id: t.data.id,
        email: t.data.email,
        name: t.data.name
      };
    } catch (e) {
      throw new Error(
        e.response?.data?.message || e.message || "Failed to fetch user profile"
      );
    }
  },
  /**
   * Initiate Google OAuth flow by redirecting to Lumora API
   * @param redirectUri - The URI to redirect to after OAuth completion
   * @param apiBaseUrl - The base URL of the Lumora API
   */
  initiateGoogleOAuth: (e, t) => {
    const r = `${t}${Ce.ENDPOINTS.GOOGLE_AUTH}?redirect_uri=${encodeURIComponent(e)}&prompt=select_account`;
    console.log("🚀 Initiating Google OAuth redirect..."), console.log("📍 Redirect URL:", r), console.log("🔙 Callback URL:", e), window.location.href = r;
  }
};
function Oe(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const zs = "$$material";
function Hs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dt = { exports: {} }, ft = { exports: {} }, q = {};
var Lr;
function Gs() {
  if (Lr) return q;
  Lr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, f = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, p = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, g = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, E = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, m = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, c = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, y = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, O = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, _ = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function A(S) {
    if (typeof S == "object" && S !== null) {
      var R = S.$$typeof;
      switch (R) {
        case t:
          switch (S = S.type, S) {
            case f:
            case d:
            case n:
            case s:
            case o:
            case p:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case a:
                case u:
                case m:
                case E:
                case i:
                  return S;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  function v(S) {
    return A(S) === d;
  }
  return q.AsyncMode = f, q.ConcurrentMode = d, q.ContextConsumer = a, q.ContextProvider = i, q.Element = t, q.ForwardRef = u, q.Fragment = n, q.Lazy = m, q.Memo = E, q.Portal = r, q.Profiler = s, q.StrictMode = o, q.Suspense = p, q.isAsyncMode = function(S) {
    return v(S) || A(S) === f;
  }, q.isConcurrentMode = v, q.isContextConsumer = function(S) {
    return A(S) === a;
  }, q.isContextProvider = function(S) {
    return A(S) === i;
  }, q.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, q.isForwardRef = function(S) {
    return A(S) === u;
  }, q.isFragment = function(S) {
    return A(S) === n;
  }, q.isLazy = function(S) {
    return A(S) === m;
  }, q.isMemo = function(S) {
    return A(S) === E;
  }, q.isPortal = function(S) {
    return A(S) === r;
  }, q.isProfiler = function(S) {
    return A(S) === s;
  }, q.isStrictMode = function(S) {
    return A(S) === o;
  }, q.isSuspense = function(S) {
    return A(S) === p;
  }, q.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === d || S === s || S === o || S === p || S === g || typeof S == "object" && S !== null && (S.$$typeof === m || S.$$typeof === E || S.$$typeof === i || S.$$typeof === a || S.$$typeof === u || S.$$typeof === y || S.$$typeof === O || S.$$typeof === _ || S.$$typeof === c);
  }, q.typeOf = A, q;
}
var z = {};
var Br;
function Ys() {
  return Br || (Br = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, f = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, p = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, g = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, E = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, m = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, c = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, y = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, O = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, _ = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function A(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === n || C === d || C === s || C === o || C === p || C === g || typeof C == "object" && C !== null && (C.$$typeof === m || C.$$typeof === E || C.$$typeof === i || C.$$typeof === a || C.$$typeof === u || C.$$typeof === y || C.$$typeof === O || C.$$typeof === _ || C.$$typeof === c);
    }
    function v(C) {
      if (typeof C == "object" && C !== null) {
        var Ee = C.$$typeof;
        switch (Ee) {
          case t:
            var lt = C.type;
            switch (lt) {
              case f:
              case d:
              case n:
              case s:
              case o:
              case p:
                return lt;
              default:
                var Er = lt && lt.$$typeof;
                switch (Er) {
                  case a:
                  case u:
                  case m:
                  case E:
                  case i:
                    return Er;
                  default:
                    return Ee;
                }
            }
          case r:
            return Ee;
        }
      }
    }
    var S = f, R = d, X = a, le = i, Z = t, oe = u, P = n, l = m, N = E, w = r, j = s, U = o, ie = p, se = !1;
    function Ue(C) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(C) || v(C) === f;
    }
    function T(C) {
      return v(C) === d;
    }
    function x(C) {
      return v(C) === a;
    }
    function D(C) {
      return v(C) === i;
    }
    function F(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function $(C) {
      return v(C) === u;
    }
    function M(C) {
      return v(C) === n;
    }
    function L(C) {
      return v(C) === m;
    }
    function B(C) {
      return v(C) === E;
    }
    function W(C) {
      return v(C) === r;
    }
    function H(C) {
      return v(C) === s;
    }
    function V(C) {
      return v(C) === o;
    }
    function ue(C) {
      return v(C) === p;
    }
    z.AsyncMode = S, z.ConcurrentMode = R, z.ContextConsumer = X, z.ContextProvider = le, z.Element = Z, z.ForwardRef = oe, z.Fragment = P, z.Lazy = l, z.Memo = N, z.Portal = w, z.Profiler = j, z.StrictMode = U, z.Suspense = ie, z.isAsyncMode = Ue, z.isConcurrentMode = T, z.isContextConsumer = x, z.isContextProvider = D, z.isElement = F, z.isForwardRef = $, z.isFragment = M, z.isLazy = L, z.isMemo = B, z.isPortal = W, z.isProfiler = H, z.isStrictMode = V, z.isSuspense = ue, z.isValidElementType = A, z.typeOf = v;
  })()), z;
}
var Mr;
function Bn() {
  return Mr || (Mr = 1, process.env.NODE_ENV === "production" ? ft.exports = Gs() : ft.exports = Ys()), ft.exports;
}
var zt, jr;
function Ks() {
  if (jr) return zt;
  jr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var i = {}, a = 0; a < 10; a++)
        i["_" + String.fromCharCode(a)] = a;
      var f = Object.getOwnPropertyNames(i).map(function(u) {
        return i[u];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        d[u] = u;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zt = o() ? Object.assign : function(s, i) {
    for (var a, f = n(s), d, u = 1; u < arguments.length; u++) {
      a = Object(arguments[u]);
      for (var p in a)
        t.call(a, p) && (f[p] = a[p]);
      if (e) {
        d = e(a);
        for (var g = 0; g < d.length; g++)
          r.call(a, d[g]) && (f[d[g]] = a[d[g]]);
      }
    }
    return f;
  }, zt;
}
var Ht, Wr;
function pr() {
  if (Wr) return Ht;
  Wr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ht = e, Ht;
}
var Gt, Vr;
function Mn() {
  return Vr || (Vr = 1, Gt = Function.call.bind(Object.prototype.hasOwnProperty)), Gt;
}
var Yt, qr;
function Js() {
  if (qr) return Yt;
  qr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ pr(), r = {}, n = /* @__PURE__ */ Mn();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(s, i, a, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in s)
        if (n(s, u)) {
          var p;
          try {
            if (typeof s[u] != "function") {
              var g = Error(
                (f || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            p = s[u](i, u, f, a, null, t);
          } catch (m) {
            p = m;
          }
          if (p && !(p instanceof Error) && e(
            (f || "React class") + ": type specification of " + a + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var E = d ? d() : "";
            e(
              "Failed " + a + " type: " + p.message + (E ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Yt = o, Yt;
}
var Kt, zr;
function Xs() {
  if (zr) return Kt;
  zr = 1;
  var e = Bn(), t = Ks(), r = /* @__PURE__ */ pr(), n = /* @__PURE__ */ Mn(), o = /* @__PURE__ */ Js(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var f = "Warning: " + a;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Kt = function(a, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function p(T) {
      var x = T && (d && T[d] || T[u]);
      if (typeof x == "function")
        return x;
    }
    var g = "<<anonymous>>", E = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: _(),
      arrayOf: A,
      element: v(),
      elementType: S(),
      instanceOf: R,
      node: oe(),
      objectOf: le,
      oneOf: X,
      oneOfType: Z,
      shape: l,
      exact: N
    };
    function m(T, x) {
      return T === x ? T !== 0 || 1 / T === 1 / x : T !== T && x !== x;
    }
    function c(T, x) {
      this.message = T, this.data = x && typeof x == "object" ? x : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function y(T) {
      if (process.env.NODE_ENV !== "production")
        var x = {}, D = 0;
      function F(M, L, B, W, H, V, ue) {
        if (W = W || g, V = V || B, ue !== r) {
          if (f) {
            var C = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw C.name = "Invariant Violation", C;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = W + ":" + B;
            !x[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), x[Ee] = !0, D++);
          }
        }
        return L[B] == null ? M ? L[B] === null ? new c("The " + H + " `" + V + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new c("The " + H + " `" + V + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : T(L, B, W, H, V);
      }
      var $ = F.bind(null, !1);
      return $.isRequired = F.bind(null, !0), $;
    }
    function O(T) {
      function x(D, F, $, M, L, B) {
        var W = D[F], H = U(W);
        if (H !== T) {
          var V = ie(W);
          return new c(
            "Invalid " + M + " `" + L + "` of type " + ("`" + V + "` supplied to `" + $ + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return y(x);
    }
    function _() {
      return y(i);
    }
    function A(T) {
      function x(D, F, $, M, L) {
        if (typeof T != "function")
          return new c("Property `" + L + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var B = D[F];
        if (!Array.isArray(B)) {
          var W = U(B);
          return new c("Invalid " + M + " `" + L + "` of type " + ("`" + W + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var H = 0; H < B.length; H++) {
          var V = T(B, H, $, M, L + "[" + H + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return y(x);
    }
    function v() {
      function T(x, D, F, $, M) {
        var L = x[D];
        if (!a(L)) {
          var B = U(L);
          return new c("Invalid " + $ + " `" + M + "` of type " + ("`" + B + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(T);
    }
    function S() {
      function T(x, D, F, $, M) {
        var L = x[D];
        if (!e.isValidElementType(L)) {
          var B = U(L);
          return new c("Invalid " + $ + " `" + M + "` of type " + ("`" + B + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(T);
    }
    function R(T) {
      function x(D, F, $, M, L) {
        if (!(D[F] instanceof T)) {
          var B = T.name || g, W = Ue(D[F]);
          return new c("Invalid " + M + " `" + L + "` of type " + ("`" + W + "` supplied to `" + $ + "`, expected ") + ("instance of `" + B + "`."));
        }
        return null;
      }
      return y(x);
    }
    function X(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function x(D, F, $, M, L) {
        for (var B = D[F], W = 0; W < T.length; W++)
          if (m(B, T[W]))
            return null;
        var H = JSON.stringify(T, function(ue, C) {
          var Ee = ie(C);
          return Ee === "symbol" ? String(C) : C;
        });
        return new c("Invalid " + M + " `" + L + "` of value `" + String(B) + "` " + ("supplied to `" + $ + "`, expected one of " + H + "."));
      }
      return y(x);
    }
    function le(T) {
      function x(D, F, $, M, L) {
        if (typeof T != "function")
          return new c("Property `" + L + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var B = D[F], W = U(B);
        if (W !== "object")
          return new c("Invalid " + M + " `" + L + "` of type " + ("`" + W + "` supplied to `" + $ + "`, expected an object."));
        for (var H in B)
          if (n(B, H)) {
            var V = T(B, H, $, M, L + "." + H, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return y(x);
    }
    function Z(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var x = 0; x < T.length; x++) {
        var D = T[x];
        if (typeof D != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(D) + " at index " + x + "."
          ), i;
      }
      function F($, M, L, B, W) {
        for (var H = [], V = 0; V < T.length; V++) {
          var ue = T[V], C = ue($, M, L, B, W, r);
          if (C == null)
            return null;
          C.data && n(C.data, "expectedType") && H.push(C.data.expectedType);
        }
        var Ee = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new c("Invalid " + B + " `" + W + "` supplied to " + ("`" + L + "`" + Ee + "."));
      }
      return y(F);
    }
    function oe() {
      function T(x, D, F, $, M) {
        return w(x[D]) ? null : new c("Invalid " + $ + " `" + M + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return y(T);
    }
    function P(T, x, D, F, $) {
      return new c(
        (T || "React class") + ": " + x + " type `" + D + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function l(T) {
      function x(D, F, $, M, L) {
        var B = D[F], W = U(B);
        if (W !== "object")
          return new c("Invalid " + M + " `" + L + "` of type `" + W + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var H in T) {
          var V = T[H];
          if (typeof V != "function")
            return P($, M, L, H, ie(V));
          var ue = V(B, H, $, M, L + "." + H, r);
          if (ue)
            return ue;
        }
        return null;
      }
      return y(x);
    }
    function N(T) {
      function x(D, F, $, M, L) {
        var B = D[F], W = U(B);
        if (W !== "object")
          return new c("Invalid " + M + " `" + L + "` of type `" + W + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var H = t({}, D[F], T);
        for (var V in H) {
          var ue = T[V];
          if (n(T, V) && typeof ue != "function")
            return P($, M, L, V, ie(ue));
          if (!ue)
            return new c(
              "Invalid " + M + " `" + L + "` key `" + V + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(D[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var C = ue(B, V, $, M, L + "." + V, r);
          if (C)
            return C;
        }
        return null;
      }
      return y(x);
    }
    function w(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(w);
          if (T === null || a(T))
            return !0;
          var x = p(T);
          if (x) {
            var D = x.call(T), F;
            if (x !== T.entries) {
              for (; !(F = D.next()).done; )
                if (!w(F.value))
                  return !1;
            } else
              for (; !(F = D.next()).done; ) {
                var $ = F.value;
                if ($ && !w($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(T, x) {
      return T === "symbol" ? !0 : x ? x["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && x instanceof Symbol : !1;
    }
    function U(T) {
      var x = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : j(x, T) ? "symbol" : x;
    }
    function ie(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var x = U(T);
      if (x === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return x;
    }
    function se(T) {
      var x = ie(T);
      switch (x) {
        case "array":
        case "object":
          return "an " + x;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + x;
        default:
          return x;
      }
    }
    function Ue(T) {
      return !T.constructor || !T.constructor.name ? g : T.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, Kt;
}
var Jt, Hr;
function Qs() {
  if (Hr) return Jt;
  Hr = 1;
  var e = /* @__PURE__ */ pr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Jt = function() {
    function n(i, a, f, d, u, p) {
      if (p !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Jt;
}
var Gr;
function Zs() {
  if (Gr) return dt.exports;
  if (Gr = 1, process.env.NODE_ENV !== "production") {
    var e = Bn(), t = !0;
    dt.exports = /* @__PURE__ */ Xs()(e.isElement, t);
  } else
    dt.exports = /* @__PURE__ */ Qs()();
  return dt.exports;
}
var ei = /* @__PURE__ */ Zs();
const Ge = /* @__PURE__ */ Hs(ei);
var mt = { exports: {} }, K = {};
var Yr;
function ti() {
  if (Yr) return K;
  Yr = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), i = /* @__PURE__ */ Symbol.for("react.context"), a = /* @__PURE__ */ Symbol.for("react.forward_ref"), f = /* @__PURE__ */ Symbol.for("react.suspense"), d = /* @__PURE__ */ Symbol.for("react.suspense_list"), u = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), g = /* @__PURE__ */ Symbol.for("react.view_transition"), E = /* @__PURE__ */ Symbol.for("react.client.reference");
  function m(c) {
    if (typeof c == "object" && c !== null) {
      var y = c.$$typeof;
      switch (y) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case f:
            case d:
            case g:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case i:
                case a:
                case p:
                case u:
                  return c;
                case s:
                  return c;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return K.ContextConsumer = s, K.ContextProvider = i, K.Element = e, K.ForwardRef = a, K.Fragment = r, K.Lazy = p, K.Memo = u, K.Portal = t, K.Profiler = o, K.StrictMode = n, K.Suspense = f, K.SuspenseList = d, K.isContextConsumer = function(c) {
    return m(c) === s;
  }, K.isContextProvider = function(c) {
    return m(c) === i;
  }, K.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, K.isForwardRef = function(c) {
    return m(c) === a;
  }, K.isFragment = function(c) {
    return m(c) === r;
  }, K.isLazy = function(c) {
    return m(c) === p;
  }, K.isMemo = function(c) {
    return m(c) === u;
  }, K.isPortal = function(c) {
    return m(c) === t;
  }, K.isProfiler = function(c) {
    return m(c) === o;
  }, K.isStrictMode = function(c) {
    return m(c) === n;
  }, K.isSuspense = function(c) {
    return m(c) === f;
  }, K.isSuspenseList = function(c) {
    return m(c) === d;
  }, K.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === f || c === d || typeof c == "object" && c !== null && (c.$$typeof === p || c.$$typeof === u || c.$$typeof === i || c.$$typeof === s || c.$$typeof === a || c.$$typeof === E || c.getModuleId !== void 0);
  }, K.typeOf = m, K;
}
var J = {};
var Kr;
function ri() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var y = c.$$typeof;
        switch (y) {
          case t:
            switch (c = c.type, c) {
              case n:
              case s:
              case o:
              case d:
              case u:
              case E:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case a:
                  case f:
                  case g:
                  case p:
                    return c;
                  case i:
                    return c;
                  default:
                    return y;
                }
            }
          case r:
            return y;
        }
      }
    }
    var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.consumer"), a = /* @__PURE__ */ Symbol.for("react.context"), f = /* @__PURE__ */ Symbol.for("react.forward_ref"), d = /* @__PURE__ */ Symbol.for("react.suspense"), u = /* @__PURE__ */ Symbol.for("react.suspense_list"), p = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.view_transition"), m = /* @__PURE__ */ Symbol.for("react.client.reference");
    J.ContextConsumer = i, J.ContextProvider = a, J.Element = t, J.ForwardRef = f, J.Fragment = n, J.Lazy = g, J.Memo = p, J.Portal = r, J.Profiler = s, J.StrictMode = o, J.Suspense = d, J.SuspenseList = u, J.isContextConsumer = function(c) {
      return e(c) === i;
    }, J.isContextProvider = function(c) {
      return e(c) === a;
    }, J.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, J.isForwardRef = function(c) {
      return e(c) === f;
    }, J.isFragment = function(c) {
      return e(c) === n;
    }, J.isLazy = function(c) {
      return e(c) === g;
    }, J.isMemo = function(c) {
      return e(c) === p;
    }, J.isPortal = function(c) {
      return e(c) === r;
    }, J.isProfiler = function(c) {
      return e(c) === s;
    }, J.isStrictMode = function(c) {
      return e(c) === o;
    }, J.isSuspense = function(c) {
      return e(c) === d;
    }, J.isSuspenseList = function(c) {
      return e(c) === u;
    }, J.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === s || c === o || c === d || c === u || typeof c == "object" && c !== null && (c.$$typeof === g || c.$$typeof === p || c.$$typeof === a || c.$$typeof === i || c.$$typeof === f || c.$$typeof === m || c.getModuleId !== void 0);
    }, J.typeOf = e;
  })()), J;
}
var Jr;
function ni() {
  return Jr || (Jr = 1, process.env.NODE_ENV === "production" ? mt.exports = /* @__PURE__ */ ti() : mt.exports = /* @__PURE__ */ ri()), mt.exports;
}
var jn = /* @__PURE__ */ ni();
function ke(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Wn(e) {
  if (/* @__PURE__ */ wt.isValidElement(e) || jn.isValidElementType(e) || !ke(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Wn(e[r]);
  }), t;
}
function pe(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return ke(e) && ke(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ wt.isValidElement(t[o]) || jn.isValidElementType(t[o]) ? n[o] = t[o] : ke(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && ke(e[o]) ? n[o] = pe(e[o], t[o], r) : r.clone ? n[o] = ke(t[o]) ? Wn(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const oi = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function si(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, s = oi(t), i = Object.keys(s);
  function a(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function f(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function d(g, E) {
    const m = i.indexOf(E);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(m !== -1 && typeof t[i[m]] == "number" ? t[i[m]] : E) - n / 100}${r})`;
  }
  function u(g) {
    return i.indexOf(g) + 1 < i.length ? d(g, i[i.indexOf(g) + 1]) : a(g);
  }
  function p(g) {
    const E = i.indexOf(g);
    return E === 0 ? a(i[1]) : E === i.length - 1 ? f(i[E]) : d(g, i[i.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: i,
    values: s,
    up: a,
    down: f,
    between: d,
    only: u,
    not: p,
    unit: r,
    ...o
  };
}
function Xr(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    const s = /min-width:\s*([0-9.]+)/;
    return +(n.match(s)?.[1] || 0) - +(o.match(s)?.[1] || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const s = t[o];
    return delete n[o], n[o] = s, n;
  }, {
    ...t
  }) : t;
}
function ii(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function ai(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Oe(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(s);
}
function li(e) {
  const t = (s, i) => s.replace("@media", i ? `@container ${i}` : "@container");
  function r(s, i) {
    s.up = (...a) => t(e.breakpoints.up(...a), i), s.down = (...a) => t(e.breakpoints.down(...a), i), s.between = (...a) => t(e.breakpoints.between(...a), i), s.only = (...a) => t(e.breakpoints.only(...a), i), s.not = (...a) => {
      const f = t(e.breakpoints.not(...a), i);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (s) => (r(n, s), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const ci = {
  borderRadius: 4
}, Ae = process.env.NODE_ENV !== "production" ? Ge.oneOfType([Ge.number, Ge.string, Ge.object, Ge.array]) : {};
function Ze(e, t) {
  return t ? pe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ot = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Qr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ot[e]}px)`
}, ui = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Ot[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function xe(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || Qr;
    return t.reduce((i, a, f) => (i[s.up(s.keys[f])] = r(t[f]), i), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || Qr;
    return Object.keys(t).reduce((i, a) => {
      if (ii(s.keys, a)) {
        const f = ai(n.containerQueries ? n : ui, a);
        f && (i[f] = r(t[a], a));
      } else if (Object.keys(s.values || Ot).includes(a)) {
        const f = s.up(a);
        i[f] = r(t[a], a);
      } else {
        const f = a;
        i[f] = t[f];
      }
      return i;
    }, {});
  }
  return r(t);
}
function di(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function Zr(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Vn(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Oe(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Rt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function St(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Rt(e, r) || n, t && (o = t(o, n, e)), o;
}
function ne(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (i) => {
    if (i[t] == null)
      return null;
    const a = i[t], f = i.theme, d = Rt(f, n) || {};
    return xe(i, a, (p) => {
      let g = St(d, o, p);
      return p === g && typeof p == "string" && (g = St(d, o, `${t}${p === "default" ? "" : Vn(p)}`, p)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ae
  } : {}, s.filterProps = [t], s;
}
function fi(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const mi = {
  m: "margin",
  p: "padding"
}, pi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, en = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, hi = fi((e) => {
  if (e.length > 2)
    if (en[e])
      e = en[e];
    else
      return [e];
  const [t, r] = e.split(""), n = mi[t], o = pi[r] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), At = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Pt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], gi = [...At, ...Pt];
function it(e, t, r, n) {
  const o = Rt(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), typeof o == "string" ? o.startsWith("var(") && s === 0 ? 0 : o.startsWith("var(") && s === 1 ? o : `calc(${s} * ${o})` : o * s) : Array.isArray(o) ? (s) => {
    if (typeof s == "string")
      return s;
    const i = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > o.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${i} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const a = o[i];
    return s >= 0 ? a : typeof a == "number" ? -a : typeof a == "string" && a.startsWith("var(") ? `calc(-1 * ${a})` : `-${a}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function hr(e) {
  return it(e, "spacing", 8, "spacing");
}
function at(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function yi(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = at(t, r), n), {});
}
function bi(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = hi(r), s = yi(o, n), i = e[r];
  return xe(e, i, s);
}
function qn(e, t) {
  const r = hr(e.theme);
  return Object.keys(e).map((n) => bi(e, t, n, r)).reduce(Ze, {});
}
function ee(e) {
  return qn(e, At);
}
ee.propTypes = process.env.NODE_ENV !== "production" ? At.reduce((e, t) => (e[t] = Ae, e), {}) : {};
ee.filterProps = At;
function te(e) {
  return qn(e, Pt);
}
te.propTypes = process.env.NODE_ENV !== "production" ? Pt.reduce((e, t) => (e[t] = Ae, e), {}) : {};
te.filterProps = Pt;
process.env.NODE_ENV !== "production" && gi.reduce((e, t) => (e[t] = Ae, e), {});
function zn(e = 8, t = hr({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const i = t(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return r.mui = !0, r;
}
function _t(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, s) => t[s] ? Ze(o, t[s](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function he(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ye(e, t) {
  return ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ei = ye("border", he), Si = ye("borderTop", he), Ti = ye("borderRight", he), wi = ye("borderBottom", he), vi = ye("borderLeft", he), xi = ye("borderColor"), Ci = ye("borderTopColor"), ki = ye("borderRightColor"), Ni = ye("borderBottomColor"), Oi = ye("borderLeftColor"), Ri = ye("outline", he), Ai = ye("outlineColor"), $t = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = it(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: at(t, n)
    });
    return xe(e, e.borderRadius, r);
  }
  return null;
};
$t.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ae
} : {};
$t.filterProps = ["borderRadius"];
_t(Ei, Si, Ti, wi, vi, xi, Ci, ki, Ni, Oi, $t, Ri, Ai);
const Dt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = it(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: at(t, n)
    });
    return xe(e, e.gap, r);
  }
  return null;
};
Dt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ae
} : {};
Dt.filterProps = ["gap"];
const It = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = it(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: at(t, n)
    });
    return xe(e, e.columnGap, r);
  }
  return null;
};
It.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ae
} : {};
It.filterProps = ["columnGap"];
const Ut = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = it(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: at(t, n)
    });
    return xe(e, e.rowGap, r);
  }
  return null;
};
Ut.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ae
} : {};
Ut.filterProps = ["rowGap"];
const Pi = ne({
  prop: "gridColumn"
}), _i = ne({
  prop: "gridRow"
}), $i = ne({
  prop: "gridAutoFlow"
}), Di = ne({
  prop: "gridAutoColumns"
}), Ii = ne({
  prop: "gridAutoRows"
}), Ui = ne({
  prop: "gridTemplateColumns"
}), Fi = ne({
  prop: "gridTemplateRows"
}), Li = ne({
  prop: "gridTemplateAreas"
}), Bi = ne({
  prop: "gridArea"
});
_t(Dt, It, Ut, Pi, _i, $i, Di, Ii, Ui, Fi, Li, Bi);
function We(e, t) {
  return t === "grey" ? t : e;
}
const Mi = ne({
  prop: "color",
  themeKey: "palette",
  transform: We
}), ji = ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: We
}), Wi = ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: We
});
_t(Mi, ji, Wi);
function me(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Vi = ne({
  prop: "width",
  transform: me
}), gr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || Ot[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: me(r)
      };
    };
    return xe(e, e.maxWidth, t);
  }
  return null;
};
gr.filterProps = ["maxWidth"];
const qi = ne({
  prop: "minWidth",
  transform: me
}), zi = ne({
  prop: "height",
  transform: me
}), Hi = ne({
  prop: "maxHeight",
  transform: me
}), Gi = ne({
  prop: "minHeight",
  transform: me
});
ne({
  prop: "size",
  cssProperty: "width",
  transform: me
});
ne({
  prop: "size",
  cssProperty: "height",
  transform: me
});
const Yi = ne({
  prop: "boxSizing"
});
_t(Vi, gr, qi, zi, Hi, Gi, Yi);
const Ft = {
  // borders
  border: {
    themeKey: "borders",
    transform: he
  },
  borderTop: {
    themeKey: "borders",
    transform: he
  },
  borderRight: {
    themeKey: "borders",
    transform: he
  },
  borderBottom: {
    themeKey: "borders",
    transform: he
  },
  borderLeft: {
    themeKey: "borders",
    transform: he
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: he
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: $t
  },
  // palette
  color: {
    themeKey: "palette",
    transform: We
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: We
  },
  backgroundColor: {
    themeKey: "palette",
    transform: We
  },
  // spacing
  p: {
    style: te
  },
  pt: {
    style: te
  },
  pr: {
    style: te
  },
  pb: {
    style: te
  },
  pl: {
    style: te
  },
  px: {
    style: te
  },
  py: {
    style: te
  },
  padding: {
    style: te
  },
  paddingTop: {
    style: te
  },
  paddingRight: {
    style: te
  },
  paddingBottom: {
    style: te
  },
  paddingLeft: {
    style: te
  },
  paddingX: {
    style: te
  },
  paddingY: {
    style: te
  },
  paddingInline: {
    style: te
  },
  paddingInlineStart: {
    style: te
  },
  paddingInlineEnd: {
    style: te
  },
  paddingBlock: {
    style: te
  },
  paddingBlockStart: {
    style: te
  },
  paddingBlockEnd: {
    style: te
  },
  m: {
    style: ee
  },
  mt: {
    style: ee
  },
  mr: {
    style: ee
  },
  mb: {
    style: ee
  },
  ml: {
    style: ee
  },
  mx: {
    style: ee
  },
  my: {
    style: ee
  },
  margin: {
    style: ee
  },
  marginTop: {
    style: ee
  },
  marginRight: {
    style: ee
  },
  marginBottom: {
    style: ee
  },
  marginLeft: {
    style: ee
  },
  marginX: {
    style: ee
  },
  marginY: {
    style: ee
  },
  marginInline: {
    style: ee
  },
  marginInlineStart: {
    style: ee
  },
  marginInlineEnd: {
    style: ee
  },
  marginBlock: {
    style: ee
  },
  marginBlockStart: {
    style: ee
  },
  marginBlockEnd: {
    style: ee
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Dt
  },
  rowGap: {
    style: Ut
  },
  columnGap: {
    style: It
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: me
  },
  maxWidth: {
    style: gr
  },
  minWidth: {
    transform: me
  },
  height: {
    transform: me
  },
  maxHeight: {
    transform: me
  },
  minHeight: {
    transform: me
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Ki(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Ji(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xi() {
  function e(r, n, o, s) {
    const i = {
      [r]: n,
      theme: o
    }, a = s[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: f = r,
      themeKey: d,
      transform: u,
      style: p
    } = a;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = Rt(o, d) || {};
    return p ? p(i) : xe(i, n, (m) => {
      let c = St(g, u, m);
      return m === c && typeof m == "string" && (c = St(g, u, `${r}${m === "default" ? "" : Vn(m)}`, m)), f === !1 ? c : {
        [f]: c
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {},
      nested: s
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? Ft;
    function a(f) {
      let d = f;
      if (typeof f == "function")
        d = f(o);
      else if (typeof f != "object")
        return f;
      if (!d)
        return null;
      const u = di(o.breakpoints), p = Object.keys(u);
      let g = u;
      return Object.keys(d).forEach((E) => {
        const m = Ji(d[E], o);
        if (m != null)
          if (typeof m == "object")
            if (i[E])
              g = Ze(g, e(E, m, o, i));
            else {
              const c = xe({
                theme: o
              }, m, (y) => ({
                [E]: y
              }));
              Ki(c, m) ? g[E] = t({
                sx: m,
                theme: o,
                nested: !0
              }) : g = Ze(g, c);
            }
          else
            g = Ze(g, e(E, m, o, i));
      }), !s && o.modularCssLayers ? {
        "@layer sx": Xr(o, Zr(p, g))
      } : Xr(o, Zr(p, g));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const Lt = Xi();
Lt.filterProps = ["sx"];
function Qi(e, t) {
  const r = this;
  if (r.vars) {
    if (!r.colorSchemes?.[e] || typeof r.getColorSchemeSelector != "function")
      return {};
    let n = r.getColorSchemeSelector(e);
    return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
      [n]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Hn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: s = {},
    ...i
  } = e, a = si(r), f = zn(o);
  let d = pe({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: f,
    shape: {
      ...ci,
      ...s
    }
  }, i);
  return d = li(d), d.applyStyles = Qi, d = t.reduce((u, p) => pe(u, p), d), d.unstable_sxConfig = {
    ...Ft,
    ...i?.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return Lt({
      sx: p,
      theme: this
    });
  }, d;
}
function Zi(e) {
  return Object.keys(e).length === 0;
}
function ea(e = null) {
  const t = wt.useContext(so);
  return !t || Zi(t) ? e : t;
}
const ta = Hn();
function ra(e = ta) {
  return ea(e);
}
const tn = (e) => e, na = () => {
  let e = tn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = tn;
    }
  };
}, oa = na(), sa = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ia(e, t, r = "Mui") {
  const n = sa[t];
  return n ? `${r}-${n}` : `${oa.generate(e)}-${t}`;
}
function aa(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function yr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), aa(e, t, r);
}
function la(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Re(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Re(la(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Oe(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Oe(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const ca = (e) => {
  const t = Re(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Je = (e, t) => {
  try {
    return ca(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Bt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Gn(e) {
  e = Re(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, s = n * Math.min(o, 1 - o), i = (d, u = (d + r / 30) % 12) => o - s * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = "rgb";
  const f = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (a += "a", f.push(t[3])), Bt({
    type: a,
    values: f
  });
}
function sr(e) {
  e = Re(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Re(Gn(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function rn(e, t) {
  const r = sr(e), n = sr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Yn(e, t) {
  return e = Re(e), t = yr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Bt(e);
}
function Pe(e, t, r) {
  try {
    return Yn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Mt(e, t) {
  if (e = Re(e), t = yr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Bt(e);
}
function G(e, t, r) {
  try {
    return Mt(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function jt(e, t) {
  if (e = Re(e), t = yr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Bt(e);
}
function Y(e, t, r) {
  try {
    return jt(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ua(e, t = 0.15) {
  return sr(e) > 0.5 ? Mt(e, t) : jt(e, t);
}
function pt(e, t, r) {
  try {
    return ua(e, t);
  } catch {
    return e;
  }
}
function da(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const nn = (e, t, r, n = []) => {
  let o = e;
  t.forEach((s, i) => {
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = r : o && typeof o == "object" && (o[s] = r) : o && typeof o == "object" && (o[s] || (o[s] = n.includes(s) ? [] : {}), o = o[s]);
  });
}, fa = (e, t, r) => {
  function n(o, s = [], i = []) {
    Object.entries(o).forEach(([a, f]) => {
      (!r || r && !r([...s, a])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...s, a], Array.isArray(f) ? [...i, a] : i) : t([...s, a], f, i));
    });
  }
  n(e);
}, ma = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Xt(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, s = {}, i = {};
  return fa(
    e,
    (a, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(a, f))) {
        const u = `--${r ? `${r}-` : ""}${a.join("-")}`, p = ma(a, f);
        Object.assign(o, {
          [u]: p
        }), nn(s, a, `var(${u})`, d), nn(i, a, `var(${u}, ${p})`, d);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: s,
    varsWithDefaults: i
  };
}
function pa(e, t = {}) {
  const {
    getSelector: r = O,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: s
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: f = "light",
    ...d
  } = e, {
    vars: u,
    css: p,
    varsWithDefaults: g
  } = Xt(d, t);
  let E = g;
  const m = {}, {
    [f]: c,
    ...y
  } = i;
  if (Object.entries(y || {}).forEach(([v, S]) => {
    const {
      vars: R,
      css: X,
      varsWithDefaults: le
    } = Xt(S, t);
    E = pe(E, le), m[v] = {
      css: X,
      vars: R
    };
  }), c) {
    const {
      css: v,
      vars: S,
      varsWithDefaults: R
    } = Xt(c, t);
    E = pe(E, R), m[f] = {
      css: v,
      vars: S
    };
  }
  function O(v, S) {
    let R = o;
    if (o === "class" && (R = ".%s"), o === "data" && (R = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (R = `[${o}="%s"]`), v) {
      if (R === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${i[v]?.palette?.mode || v})`]: {
            ":root": S
          }
        };
      if (R)
        return e.defaultColorScheme === v ? `:root, ${R.replace("%s", String(v))}` : R.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: E,
    generateThemeVars: () => {
      let v = {
        ...u
      };
      return Object.entries(m).forEach(([, {
        vars: S
      }]) => {
        v = pe(v, S);
      }), v;
    },
    generateStyleSheets: () => {
      const v = [], S = e.defaultColorScheme || "light";
      function R(Z, oe) {
        Object.keys(oe).length && v.push(typeof Z == "string" ? {
          [Z]: {
            ...oe
          }
        } : Z);
      }
      R(r(void 0, {
        ...p
      }), p);
      const {
        [S]: X,
        ...le
      } = m;
      if (X) {
        const {
          css: Z
        } = X, oe = i[S]?.palette?.mode, P = !n && oe ? {
          colorScheme: oe,
          ...Z
        } : {
          ...Z
        };
        R(r(S, {
          ...P
        }), P);
      }
      return Object.entries(le).forEach(([Z, {
        css: oe
      }]) => {
        const P = i[Z]?.palette?.mode, l = !n && P ? {
          colorScheme: P,
          ...oe
        } : {
          ...oe
        };
        R(r(Z, {
          ...l
        }), l);
      }), s && v.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), v;
    }
  };
}
function ha(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const tt = {
  black: "#000",
  white: "#fff"
}, ga = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Fe = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Le = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ye = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Be = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Me = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, je = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Kn() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: tt.white,
      default: tt.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Jn = Kn();
function Xn() {
  return {
    text: {
      primary: tt.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: tt.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const ir = Xn();
function on(e, t, r, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = jt(e.main, o) : t === "dark" && (e.dark = Mt(e.main, s)));
}
function sn(e, t, r, n, o) {
  const s = o.light || o, i = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(i * 100).toFixed(0)}%)`));
}
function ya(e = "light") {
  return e === "dark" ? {
    main: Be[200],
    light: Be[50],
    dark: Be[400]
  } : {
    main: Be[700],
    light: Be[400],
    dark: Be[800]
  };
}
function ba(e = "light") {
  return e === "dark" ? {
    main: Fe[200],
    light: Fe[50],
    dark: Fe[400]
  } : {
    main: Fe[500],
    light: Fe[300],
    dark: Fe[700]
  };
}
function Ea(e = "light") {
  return e === "dark" ? {
    main: Le[500],
    light: Le[300],
    dark: Le[700]
  } : {
    main: Le[700],
    light: Le[400],
    dark: Le[800]
  };
}
function Sa(e = "light") {
  return e === "dark" ? {
    main: Me[400],
    light: Me[300],
    dark: Me[700]
  } : {
    main: Me[700],
    light: Me[500],
    dark: Me[900]
  };
}
function Ta(e = "light") {
  return e === "dark" ? {
    main: je[400],
    light: je[300],
    dark: je[700]
  } : {
    main: je[800],
    light: je[500],
    dark: je[900]
  };
}
function wa(e = "light") {
  return e === "dark" ? {
    main: Ye[400],
    light: Ye[300],
    dark: Ye[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ye[500],
    dark: Ye[900]
  };
}
function va(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function br(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...s
  } = e, i = e.primary || ya(t), a = e.secondary || ba(t), f = e.error || Ea(t), d = e.info || Sa(t), u = e.success || Ta(t), p = e.warning || wa(t);
  function g(y) {
    if (o)
      return va(y);
    const O = rn(y, ir.text.primary) >= r ? ir.text.primary : Jn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const _ = rn(y, O);
      _ < 3 && console.error([`MUI: The contrast ratio of ${_}:1 for ${O} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return O;
  }
  const E = ({
    color: y,
    name: O,
    mainShade: _ = 500,
    lightShade: A = 300,
    darkShade: v = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[_] && (y.main = y[_]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${_}\` property.` : Oe(11, O ? ` (${O})` : "", _));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Oe(12, O ? ` (${O})` : "", JSON.stringify(y.main)));
    return o ? (sn(o, y, "light", A, n), sn(o, y, "dark", v, n)) : (on(y, "light", A, n), on(y, "dark", v, n)), y.contrastText || (y.contrastText = g(y.main)), y;
  };
  let m;
  return t === "light" ? m = Kn() : t === "dark" && (m = Xn()), process.env.NODE_ENV !== "production" && (m || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), pe({
    // A collection of common colors.
    common: {
      ...tt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: E({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: E({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: E({
      color: f,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: E({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: E({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: E({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: ga,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: E,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...m
  }, s);
}
function xa(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, s] = n;
    typeof s == "object" && (t[o] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function Ca(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function ka(e) {
  return Math.round(e * 1e5) / 1e5;
}
const an = {
  textTransform: "uppercase"
}, ln = '"Roboto", "Helvetica", "Arial", sans-serif';
function Na(e, t) {
  const {
    fontFamily: r = ln,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: i = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: u,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, E = u || ((y) => `${y / f * g}rem`), m = (y, O, _, A, v) => ({
    fontFamily: r,
    fontWeight: y,
    fontSize: E(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ln ? {
      letterSpacing: `${ka(A / O)}em`
    } : {},
    ...v,
    ...d
  }), c = {
    h1: m(o, 96, 1.167, -1.5),
    h2: m(o, 60, 1.2, -0.5),
    h3: m(s, 48, 1.167, 0),
    h4: m(s, 34, 1.235, 0.25),
    h5: m(s, 24, 1.334, 0),
    h6: m(i, 20, 1.6, 0.15),
    subtitle1: m(s, 16, 1.75, 0.15),
    subtitle2: m(i, 14, 1.57, 0.1),
    body1: m(s, 16, 1.5, 0.15),
    body2: m(s, 14, 1.43, 0.15),
    button: m(i, 14, 1.75, 0.4, an),
    caption: m(s, 12, 1.66, 0.4),
    overline: m(s, 12, 2.66, 1, an),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return pe({
    htmlFontSize: f,
    pxToRem: E,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: i,
    fontWeightBold: a,
    ...c
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Oa = 0.2, Ra = 0.14, Aa = 0.12;
function Q(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Oa})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ra})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Aa})`].join(",");
}
const Pa = ["none", Q(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Q(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Q(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Q(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Q(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Q(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Q(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Q(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Q(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Q(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Q(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Q(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Q(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Q(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Q(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Q(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Q(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Q(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Q(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Q(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Q(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Q(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Q(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Q(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], _a = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, $a = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function cn(e) {
  return `${Math.round(e)}ms`;
}
function Da(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Ia(e) {
  const t = {
    ..._a,
    ...e.easing
  }, r = {
    ...$a,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Da,
    create: (o = ["all"], s = {}) => {
      const {
        duration: i = r.standard,
        easing: a = t.easeInOut,
        delay: f = 0,
        ...d
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const u = (g) => typeof g == "string", p = (g) => !Number.isNaN(parseFloat(g));
        !u(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(i) && !u(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), u(a) || console.error('MUI: Argument "easing" must be a string.'), !p(f) && !u(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof i == "string" ? i : cn(i)} ${a} ${typeof f == "string" ? f : cn(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Ua = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Fa(e) {
  return ke(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Qn(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let s = 0; s < o.length; s++) {
      const [i, a] = o[s];
      !Fa(a) || i.startsWith("unstable_") ? delete n[i] : ke(a) && (n[i] = {
        ...a
      }, r(n[i]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function un(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const La = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let n = 0; n < t.length; n += 1)
    r += +t[n];
  return r;
};
function Ba(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : Yn(t, La(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${un(r)})` : jt(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${un(r)})` : Mt(t, r);
    }
  });
}
function ar(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: s = {},
    transitions: i = {},
    typography: a = {},
    shape: f,
    colorSpace: d,
    ...u
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Oe(20));
  const p = br({
    ...s,
    colorSpace: d
  }), g = Hn(e);
  let E = pe(g, {
    mixins: Ca(g.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Pa.slice(),
    typography: Na(p, a),
    transitions: Ia(i),
    zIndex: {
      ...Ua
    }
  });
  if (E = pe(E, u), E = t.reduce((m, c) => pe(m, c), E), process.env.NODE_ENV !== "production") {
    const m = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], c = (y, O) => {
      let _;
      for (_ in y) {
        const A = y[_];
        if (m.includes(_) && Object.keys(A).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = ia("", _);
            console.error([`MUI: The \`${O}\` component increases the CSS specificity of the \`${_}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: A
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[_] = {};
        }
      }
    };
    Object.keys(E.components).forEach((y) => {
      const O = E.components[y].styleOverrides;
      O && y.startsWith("Mui") && c(O, y);
    });
  }
  return E.unstable_sxConfig = {
    ...Ft,
    ...u?.unstable_sxConfig
  }, E.unstable_sx = function(c) {
    return Lt({
      sx: c,
      theme: this
    });
  }, E.toRuntimeSource = Qn, Ba(E), E;
}
function Ma(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ja = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Ma(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Zn(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function eo(e) {
  return e === "dark" ? ja : [];
}
function Wa(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...s
  } = e, i = br({
    ...t,
    colorSpace: o
  });
  return {
    palette: i,
    opacity: {
      ...Zn(i.mode),
      ...r
    },
    overlays: n || eo(i.mode),
    ...s
  };
}
function Va(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const qa = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], za = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let s = o;
  if (o === "class" && (s = ".%s"), o === "data" && (s = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (s = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const i = {};
      return qa(e.cssVarPrefix).forEach((a) => {
        i[a] = r[a], delete r[a];
      }), s === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: i
        }
      } : s ? {
        [s.replace("%s", t)]: i,
        [`${n}, ${s.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...i
        }
      };
    }
    if (s && s !== "media")
      return `${n}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return n;
};
function Ha(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function b(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Xe(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Gn(e);
}
function we(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Je(Xe(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ga(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Te = (e) => {
  try {
    return e();
  } catch {
  }
}, Ya = (e = "mui") => da(e);
function Qt(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const s = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = Wa({
      ...r,
      palette: {
        mode: s,
        ...r?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = ar({
    ...n,
    palette: {
      mode: s,
      ...r?.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: i,
    opacity: {
      ...Zn(s),
      ...r?.opacity
    },
    overlays: r?.overlays || eo(s)
  }, a;
}
function Ka(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: s = "mui",
    nativeColor: i = !1,
    shouldSkipGeneratingVar: a = Va,
    colorSchemeSelector: f = r.light && r.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...u
  } = e, p = Object.keys(r)[0], g = n || (r.light && p !== "light" ? "light" : p), E = Ya(s), {
    [g]: m,
    light: c,
    dark: y,
    ...O
  } = r, _ = {
    ...O
  };
  let A = m;
  if ((g === "dark" && !("dark" in r) || g === "light" && !("light" in r)) && (A = !0), !A)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : Oe(21, g));
  let v;
  i && (v = "oklch");
  const S = Qt(v, _, A, u, g);
  c && !_.light && Qt(v, _, c, void 0, "light"), y && !_.dark && Qt(v, _, y, void 0, "dark");
  let R = {
    defaultColorScheme: g,
    ...S,
    cssVarPrefix: s,
    colorSchemeSelector: f,
    rootSelector: d,
    getCssVar: E,
    colorSchemes: _,
    font: {
      ...xa(S.typography),
      ...S.font
    },
    spacing: Ga(u.spacing)
  };
  Object.keys(R.colorSchemes).forEach((P) => {
    const l = R.colorSchemes[P].palette, N = (j) => {
      const U = j.split("-"), ie = U[1], se = U[2];
      return E(j, l[ie][se]);
    };
    l.mode === "light" && (b(l.common, "background", "#fff"), b(l.common, "onBackground", "#000")), l.mode === "dark" && (b(l.common, "background", "#000"), b(l.common, "onBackground", "#fff"));
    function w(j, U, ie) {
      if (v) {
        let se;
        return j === Pe && (se = `transparent ${((1 - ie) * 100).toFixed(0)}%`), j === G && (se = `#000 ${(ie * 100).toFixed(0)}%`), j === Y && (se = `#fff ${(ie * 100).toFixed(0)}%`), `color-mix(in ${v}, ${U}, ${se})`;
      }
      return j(U, ie);
    }
    if (Ha(l, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), l.mode === "light") {
      b(l.Alert, "errorColor", w(G, l.error.light, 0.6)), b(l.Alert, "infoColor", w(G, l.info.light, 0.6)), b(l.Alert, "successColor", w(G, l.success.light, 0.6)), b(l.Alert, "warningColor", w(G, l.warning.light, 0.6)), b(l.Alert, "errorFilledBg", N("palette-error-main")), b(l.Alert, "infoFilledBg", N("palette-info-main")), b(l.Alert, "successFilledBg", N("palette-success-main")), b(l.Alert, "warningFilledBg", N("palette-warning-main")), b(l.Alert, "errorFilledColor", Te(() => l.getContrastText(l.error.main))), b(l.Alert, "infoFilledColor", Te(() => l.getContrastText(l.info.main))), b(l.Alert, "successFilledColor", Te(() => l.getContrastText(l.success.main))), b(l.Alert, "warningFilledColor", Te(() => l.getContrastText(l.warning.main))), b(l.Alert, "errorStandardBg", w(Y, l.error.light, 0.9)), b(l.Alert, "infoStandardBg", w(Y, l.info.light, 0.9)), b(l.Alert, "successStandardBg", w(Y, l.success.light, 0.9)), b(l.Alert, "warningStandardBg", w(Y, l.warning.light, 0.9)), b(l.Alert, "errorIconColor", N("palette-error-main")), b(l.Alert, "infoIconColor", N("palette-info-main")), b(l.Alert, "successIconColor", N("palette-success-main")), b(l.Alert, "warningIconColor", N("palette-warning-main")), b(l.AppBar, "defaultBg", N("palette-grey-100")), b(l.Avatar, "defaultBg", N("palette-grey-400")), b(l.Button, "inheritContainedBg", N("palette-grey-300")), b(l.Button, "inheritContainedHoverBg", N("palette-grey-A100")), b(l.Chip, "defaultBorder", N("palette-grey-400")), b(l.Chip, "defaultAvatarColor", N("palette-grey-700")), b(l.Chip, "defaultIconColor", N("palette-grey-700")), b(l.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), b(l.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), b(l.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), b(l.LinearProgress, "primaryBg", w(Y, l.primary.main, 0.62)), b(l.LinearProgress, "secondaryBg", w(Y, l.secondary.main, 0.62)), b(l.LinearProgress, "errorBg", w(Y, l.error.main, 0.62)), b(l.LinearProgress, "infoBg", w(Y, l.info.main, 0.62)), b(l.LinearProgress, "successBg", w(Y, l.success.main, 0.62)), b(l.LinearProgress, "warningBg", w(Y, l.warning.main, 0.62)), b(l.Skeleton, "bg", v ? w(Pe, l.text.primary, 0.11) : `rgba(${N("palette-text-primaryChannel")} / 0.11)`), b(l.Slider, "primaryTrack", w(Y, l.primary.main, 0.62)), b(l.Slider, "secondaryTrack", w(Y, l.secondary.main, 0.62)), b(l.Slider, "errorTrack", w(Y, l.error.main, 0.62)), b(l.Slider, "infoTrack", w(Y, l.info.main, 0.62)), b(l.Slider, "successTrack", w(Y, l.success.main, 0.62)), b(l.Slider, "warningTrack", w(Y, l.warning.main, 0.62));
      const j = v ? w(G, l.background.default, 0.6825) : pt(l.background.default, 0.8);
      b(l.SnackbarContent, "bg", j), b(l.SnackbarContent, "color", Te(() => v ? ir.text.primary : l.getContrastText(j))), b(l.SpeedDialAction, "fabHoverBg", pt(l.background.paper, 0.15)), b(l.StepConnector, "border", N("palette-grey-400")), b(l.StepContent, "border", N("palette-grey-400")), b(l.Switch, "defaultColor", N("palette-common-white")), b(l.Switch, "defaultDisabledColor", N("palette-grey-100")), b(l.Switch, "primaryDisabledColor", w(Y, l.primary.main, 0.62)), b(l.Switch, "secondaryDisabledColor", w(Y, l.secondary.main, 0.62)), b(l.Switch, "errorDisabledColor", w(Y, l.error.main, 0.62)), b(l.Switch, "infoDisabledColor", w(Y, l.info.main, 0.62)), b(l.Switch, "successDisabledColor", w(Y, l.success.main, 0.62)), b(l.Switch, "warningDisabledColor", w(Y, l.warning.main, 0.62)), b(l.TableCell, "border", w(Y, w(Pe, l.divider, 1), 0.88)), b(l.Tooltip, "bg", w(Pe, l.grey[700], 0.92));
    }
    if (l.mode === "dark") {
      b(l.Alert, "errorColor", w(Y, l.error.light, 0.6)), b(l.Alert, "infoColor", w(Y, l.info.light, 0.6)), b(l.Alert, "successColor", w(Y, l.success.light, 0.6)), b(l.Alert, "warningColor", w(Y, l.warning.light, 0.6)), b(l.Alert, "errorFilledBg", N("palette-error-dark")), b(l.Alert, "infoFilledBg", N("palette-info-dark")), b(l.Alert, "successFilledBg", N("palette-success-dark")), b(l.Alert, "warningFilledBg", N("palette-warning-dark")), b(l.Alert, "errorFilledColor", Te(() => l.getContrastText(l.error.dark))), b(l.Alert, "infoFilledColor", Te(() => l.getContrastText(l.info.dark))), b(l.Alert, "successFilledColor", Te(() => l.getContrastText(l.success.dark))), b(l.Alert, "warningFilledColor", Te(() => l.getContrastText(l.warning.dark))), b(l.Alert, "errorStandardBg", w(G, l.error.light, 0.9)), b(l.Alert, "infoStandardBg", w(G, l.info.light, 0.9)), b(l.Alert, "successStandardBg", w(G, l.success.light, 0.9)), b(l.Alert, "warningStandardBg", w(G, l.warning.light, 0.9)), b(l.Alert, "errorIconColor", N("palette-error-main")), b(l.Alert, "infoIconColor", N("palette-info-main")), b(l.Alert, "successIconColor", N("palette-success-main")), b(l.Alert, "warningIconColor", N("palette-warning-main")), b(l.AppBar, "defaultBg", N("palette-grey-900")), b(l.AppBar, "darkBg", N("palette-background-paper")), b(l.AppBar, "darkColor", N("palette-text-primary")), b(l.Avatar, "defaultBg", N("palette-grey-600")), b(l.Button, "inheritContainedBg", N("palette-grey-800")), b(l.Button, "inheritContainedHoverBg", N("palette-grey-700")), b(l.Chip, "defaultBorder", N("palette-grey-700")), b(l.Chip, "defaultAvatarColor", N("palette-grey-300")), b(l.Chip, "defaultIconColor", N("palette-grey-300")), b(l.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), b(l.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), b(l.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), b(l.LinearProgress, "primaryBg", w(G, l.primary.main, 0.5)), b(l.LinearProgress, "secondaryBg", w(G, l.secondary.main, 0.5)), b(l.LinearProgress, "errorBg", w(G, l.error.main, 0.5)), b(l.LinearProgress, "infoBg", w(G, l.info.main, 0.5)), b(l.LinearProgress, "successBg", w(G, l.success.main, 0.5)), b(l.LinearProgress, "warningBg", w(G, l.warning.main, 0.5)), b(l.Skeleton, "bg", v ? w(Pe, l.text.primary, 0.13) : `rgba(${N("palette-text-primaryChannel")} / 0.13)`), b(l.Slider, "primaryTrack", w(G, l.primary.main, 0.5)), b(l.Slider, "secondaryTrack", w(G, l.secondary.main, 0.5)), b(l.Slider, "errorTrack", w(G, l.error.main, 0.5)), b(l.Slider, "infoTrack", w(G, l.info.main, 0.5)), b(l.Slider, "successTrack", w(G, l.success.main, 0.5)), b(l.Slider, "warningTrack", w(G, l.warning.main, 0.5));
      const j = v ? w(Y, l.background.default, 0.985) : pt(l.background.default, 0.98);
      b(l.SnackbarContent, "bg", j), b(l.SnackbarContent, "color", Te(() => v ? Jn.text.primary : l.getContrastText(j))), b(l.SpeedDialAction, "fabHoverBg", pt(l.background.paper, 0.15)), b(l.StepConnector, "border", N("palette-grey-600")), b(l.StepContent, "border", N("palette-grey-600")), b(l.Switch, "defaultColor", N("palette-grey-300")), b(l.Switch, "defaultDisabledColor", N("palette-grey-600")), b(l.Switch, "primaryDisabledColor", w(G, l.primary.main, 0.55)), b(l.Switch, "secondaryDisabledColor", w(G, l.secondary.main, 0.55)), b(l.Switch, "errorDisabledColor", w(G, l.error.main, 0.55)), b(l.Switch, "infoDisabledColor", w(G, l.info.main, 0.55)), b(l.Switch, "successDisabledColor", w(G, l.success.main, 0.55)), b(l.Switch, "warningDisabledColor", w(G, l.warning.main, 0.55)), b(l.TableCell, "border", w(G, w(Pe, l.divider, 1), 0.68)), b(l.Tooltip, "bg", w(Pe, l.grey[700], 0.92));
    }
    we(l.background, "default"), we(l.background, "paper"), we(l.common, "background"), we(l.common, "onBackground"), we(l, "divider"), Object.keys(l).forEach((j) => {
      const U = l[j];
      j !== "tonalOffset" && U && typeof U == "object" && (U.main && b(l[j], "mainChannel", Je(Xe(U.main))), U.light && b(l[j], "lightChannel", Je(Xe(U.light))), U.dark && b(l[j], "darkChannel", Je(Xe(U.dark))), U.contrastText && b(l[j], "contrastTextChannel", Je(Xe(U.contrastText))), j === "text" && (we(l[j], "primary"), we(l[j], "secondary")), j === "action" && (U.active && we(l[j], "active"), U.selected && we(l[j], "selected")));
    });
  }), R = t.reduce((P, l) => pe(P, l), R);
  const X = {
    prefix: s,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: za(R),
    enableContrastVars: i
  }, {
    vars: le,
    generateThemeVars: Z,
    generateStyleSheets: oe
  } = pa(R, X);
  return R.vars = le, Object.entries(R.colorSchemes[R.defaultColorScheme]).forEach(([P, l]) => {
    R[P] = l;
  }), R.generateThemeVars = Z, R.generateStyleSheets = oe, R.generateSpacing = function() {
    return zn(u.spacing, hr(this));
  }, R.getColorSchemeSelector = ha(f), R.spacing = R.generateSpacing(), R.shouldSkipGeneratingVar = a, R.unstable_sxConfig = {
    ...Ft,
    ...u?.unstable_sxConfig
  }, R.unstable_sx = function(l) {
    return Lt({
      sx: l,
      theme: this
    });
  }, R.toRuntimeSource = Qn, R;
}
function dn(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: br({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ja(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r?.mode,
    ...i
  } = e, a = s || "light", f = o?.[a], d = {
    ...o,
    ...r ? {
      [a]: {
        ...typeof f != "boolean" && f,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return ar(e, ...t);
    let u = r;
    "palette" in e || d[a] && (d[a] !== !0 ? u = d[a].palette : a === "dark" && (u = {
      mode: "dark"
    }));
    const p = ar({
      ...e,
      palette: u
    }, ...t);
    return p.defaultColorScheme = a, p.colorSchemes = d, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: p.palette
    }, dn(p, "dark", d.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: p.palette
    }, dn(p, "light", d.light)), p;
  }
  return !r && !("light" in d) && a === "light" && (d.light = !0), Ka({
    ...i,
    colorSchemes: d,
    defaultColorScheme: a,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Xa = Ja();
function to() {
  const e = ra(Xa);
  return process.env.NODE_ENV !== "production" && wt.useDebugValue(e), e[zs] || e;
}
const fn = ({
  brandConfig: e,
  title: t,
  subtitle: r
}) => {
  const n = to();
  return /* @__PURE__ */ k(ce, { sx: { textAlign: "center", mb: 4 }, children: [
    e.logo && /* @__PURE__ */ k(ce, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ k(
      "img",
      {
        src: e.logo,
        alt: e.companyName || "Company Logo",
        style: {
          height: e.logoHeight,
          maxWidth: "100%",
          objectFit: "contain"
        }
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/BrandingHeader.tsx",
        lineNumber: 24,
        columnNumber: 7
      },
      void 0
    ) : e.logo }, void 0, !1, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/BrandingHeader.tsx",
      lineNumber: 22,
      columnNumber: 5
    }, void 0),
    t && /* @__PURE__ */ k(
      Ne,
      {
        variant: "h4",
        component: "h1",
        sx: {
          mb: 1,
          color: e.textColor,
          fontSize: {
            xs: n.typography.pxToRem(42),
            sm: n.typography.pxToRem(54)
          }
        },
        children: t
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/BrandingHeader.tsx",
        lineNumber: 40,
        columnNumber: 5
      },
      void 0
    ),
    r && /* @__PURE__ */ k(
      Ne,
      {
        variant: "body1",
        sx: {
          color: e.textColor,
          opacity: 0.7,
          fontSize: "0.95rem"
        },
        children: r
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/BrandingHeader.tsx",
        lineNumber: 57,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/BrandingHeader.tsx",
    lineNumber: 20,
    columnNumber: 3
  }, void 0);
};
function ro(e, t, r) {
  return r === void 0 && (r = {}), function(n, o, s) {
    try {
      return Promise.resolve((function(i, a) {
        try {
          var f = (t != null && t.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(e[r.mode === "sync" ? "validateSync" : "validate"](n, Object.assign({ abortEarly: !1 }, t, { context: o }))).then(function(d) {
            return s.shouldUseNativeValidation && ao({}, s), { values: r.raw ? Object.assign({}, n) : d, errors: {} };
          }));
        } catch (d) {
          return a(d);
        }
        return f && f.then ? f.then(void 0, a) : f;
      })(0, function(i) {
        if (!i.inner) throw i;
        return { values: {}, errors: lo((a = i, f = !s.shouldUseNativeValidation && s.criteriaMode === "all", (a.inner || []).reduce(function(d, u) {
          if (d[u.path] || (d[u.path] = { message: u.message, type: u.type }), f) {
            var p = d[u.path].types, g = p && p[u.type];
            d[u.path] = io(u.path, f, d, u.type, g ? [].concat(g, u.message) : u.message);
          }
          return d;
        }, {})), s) };
        var a, f;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const Qa = Qe.object({
  email: Qe.string().email("Please enter a valid email address").required("Email is required"),
  password: Qe.string().min(6, "Password must be at least 6 characters").required("Password is required")
}), Za = ({
  brandConfig: e,
  loginState: t,
  onSubmit: r,
  onForgetPassword: n,
  enableForgetPassword: o = !0
}) => {
  const s = to(), [i, a] = et(!1), {
    register: f,
    handleSubmit: d,
    formState: { errors: u }
  } = pn({
    resolver: ro(Qa)
  }), p = t === "loading" || t === "google-loading", g = {
    "& .MuiInputLabel-root": {
      color: "#5f676d",
      fontWeight: 600
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#5f676d"
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 1.4,
      backgroundColor: "#f3f4f6",
      "& fieldset": {
        borderColor: "#e5e7eb"
      },
      "&:hover fieldset": {
        borderColor: e.primaryColor
      },
      "&.Mui-focused fieldset": {
        borderColor: e.primaryColor
      },
      "&.Mui-disabled": {
        backgroundColor: "#f3f4f6"
      }
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#6b7280",
      opacity: 1
    }
  };
  return /* @__PURE__ */ k(ce, { component: "form", onSubmit: d(r), children: /* @__PURE__ */ k(lr, { spacing: 3, children: [
    /* @__PURE__ */ k(Sr, { fullWidth: !0, children: [
      /* @__PURE__ */ k(
        Tr,
        {
          htmlFor: "lumora-email",
          sx: { color: "#5f676d", fontWeight: 700, mb: 0.5 },
          children: "Email Address"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
          lineNumber: 95,
          columnNumber: 6
        },
        void 0
      ),
      /* @__PURE__ */ k(
        er,
        {
          ...f("email"),
          fullWidth: !0,
          id: "lumora-email",
          type: "email",
          placeholder: "Enter your email",
          error: !!u.email,
          helperText: u.email?.message,
          disabled: p,
          sx: g
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
          lineNumber: 101,
          columnNumber: 6
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
      lineNumber: 94,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ k(Sr, { fullWidth: !0, children: [
      /* @__PURE__ */ k(
        Tr,
        {
          htmlFor: "lumora-password",
          sx: { color: "#5f676d", fontWeight: 700, mb: 0.5 },
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
          lineNumber: 115,
          columnNumber: 6
        },
        void 0
      ),
      /* @__PURE__ */ k(
        er,
        {
          ...f("password"),
          fullWidth: !0,
          id: "lumora-password",
          type: i ? "text" : "password",
          placeholder: "Enter your password",
          error: !!u.password,
          helperText: u.password?.message,
          disabled: p,
          sx: g,
          slotProps: {
            input: {
              endAdornment: /* @__PURE__ */ k(
                ve,
                {
                  size: "small",
                  onClick: () => a(!i),
                  disabled: p,
                  sx: {
                    color: e.primaryColor,
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: `${e.primaryColor}10`
                    }
                  },
                  children: i ? "Hide" : "Show"
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
                  lineNumber: 134,
                  columnNumber: 10
                },
                void 0
              )
            }
          }
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
          lineNumber: 121,
          columnNumber: 6
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
      lineNumber: 114,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ k(
      ve,
      {
        type: "submit",
        fullWidth: !0,
        variant: "contained",
        size: "large",
        disabled: p,
        sx: {
          py: 1.5,
          backgroundColor: e.primaryColor,
          borderRadius: 1.4,
          textTransform: "none",
          fontWeight: 600,
          fontSize: s.typography.pxToRem(18),
          boxShadow: `0 4px 12px ${e.primaryColor}30`,
          "&:hover": {
            backgroundColor: e.secondaryColor,
            boxShadow: `0 6px 16px ${e.primaryColor}40`
          },
          "&:disabled": {
            backgroundColor: `${e.primaryColor}60`
          }
        },
        children: t === "loading" ? /* @__PURE__ */ k(cr, { size: 24, color: "inherit" }, void 0, !1, {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
          lineNumber: 181,
          columnNumber: 7
        }, void 0) : "Sign In"
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
        lineNumber: 157,
        columnNumber: 5
      },
      void 0
    ),
    o && n && /* @__PURE__ */ k(ce, { textAlign: "center", sx: { mt: 1 }, children: /* @__PURE__ */ k(
      ve,
      {
        variant: "text",
        onClick: n,
        disabled: p,
        sx: {
          textTransform: "none",
          color: e.primaryColor,
          fontWeight: 500,
          fontSize: s.typography.pxToRem(18),
          "&:hover": {
            backgroundColor: `${e.primaryColor}08`
          }
        },
        children: "Forgot Password?"
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
        lineNumber: 189,
        columnNumber: 7
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
      lineNumber: 188,
      columnNumber: 6
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
    lineNumber: 93,
    columnNumber: 4
  }, void 0) }, void 0, !1, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginForm.tsx",
    lineNumber: 92,
    columnNumber: 3
  }, void 0);
}, el = ({
  brandConfig: e,
  loginState: t,
  onClick: r,
  showDivider: n = !1
}) => {
  const o = t === "loading" || t === "google-loading";
  return /* @__PURE__ */ k(Tt, { children: [
    n && /* @__PURE__ */ k(oo, { sx: { my: 1 }, children: /* @__PURE__ */ k(
      Ne,
      {
        variant: "body2",
        sx: {
          color: e.textColor,
          opacity: 0.6,
          px: 2,
          fontWeight: 500
        },
        children: "OR"
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
        lineNumber: 26,
        columnNumber: 6
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
      lineNumber: 25,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ k(
      ve,
      {
        fullWidth: !0,
        variant: "outlined",
        size: "large",
        startIcon: t === "google-loading" ? /* @__PURE__ */ k(cr, { size: 20, color: "inherit" }, void 0, !1, {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, void 0) : /* @__PURE__ */ k(co, {}, void 0, !1, {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, void 0),
        onClick: r,
        disabled: o,
        sx: {
          py: 1.5,
          borderRadius: 1.4,
          textTransform: "none",
          fontWeight: 500,
          fontSize: "1rem",
          borderColor: e.textColor + "30",
          color: e.textColor,
          "&:hover": {
            borderColor: e.primaryColor,
            backgroundColor: `${e.primaryColor}08`,
            color: e.textColor
          },
          "&:active": {
            borderColor: e.primaryColor,
            backgroundColor: `${e.primaryColor}12`,
            color: e.textColor
          },
          "&:disabled": {
            borderColor: e.textColor + "20",
            color: e.textColor + "60"
          },
          "&:focus": {
            borderColor: e.textColor + "30",
            color: e.textColor
          },
          "&.MuiButton-root": {
            borderColor: e.textColor + "30",
            color: e.textColor
          }
        },
        children: t === "google-loading" ? "Signing in..." : "Continue with Google"
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
        lineNumber: 40,
        columnNumber: 4
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
    lineNumber: 23,
    columnNumber: 3
  }, void 0);
}, tl = Qe.object({
  email: Qe.string().email("Please enter a valid email address").required("Email is required")
}), rl = ({
  brandConfig: e,
  loginState: t,
  error: r,
  onSubmit: n,
  onBackToLogin: o,
  onCloseError: s
}) => {
  const {
    register: i,
    handleSubmit: a,
    formState: { errors: f }
  } = pn({
    resolver: ro(tl)
  }), d = t === "forget-password-loading";
  return /* @__PURE__ */ k(Tt, { children: [
    r && /* @__PURE__ */ k(mn, { severity: "error", sx: { mb: 3 }, onClose: s, children: r.message }, void 0, !1, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ k(ce, { sx: { textAlign: "center", mb: 3 }, children: [
      /* @__PURE__ */ k(
        Ne,
        {
          variant: "h5",
          component: "h1",
          sx: {
            color: e.textColor,
            fontWeight: 600,
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
            mb: 2
          },
          children: e.forgetPasswordTitle || "Reset Password"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 65,
          columnNumber: 5
        },
        void 0
      ),
      /* @__PURE__ */ k(
        Ne,
        {
          variant: "body1",
          sx: {
            color: e.textColor,
            opacity: 0.8,
            mb: 3,
            lineHeight: 1.6
          },
          children: e.forgetPasswordDescription || "Enter your email address and we will send you a link to reset your password."
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 78,
          columnNumber: 5
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 64,
      columnNumber: 4
    }, void 0),
    /* @__PURE__ */ k(ce, { component: "form", onSubmit: a(n), children: /* @__PURE__ */ k(lr, { spacing: 3, children: [
      /* @__PURE__ */ k(
        er,
        {
          ...i("email"),
          fullWidth: !0,
          label: "Email Address",
          type: "email",
          placeholder: "Enter your email",
          error: !!f.email,
          helperText: f.email?.message,
          disabled: d,
          sx: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 1.4,
              "&:hover fieldset": {
                borderColor: e.primaryColor
              },
              "&.Mui-focused fieldset": {
                borderColor: e.primaryColor
              }
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: e.primaryColor
            }
          }
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 94,
          columnNumber: 6
        },
        void 0
      ),
      /* @__PURE__ */ k(
        ve,
        {
          type: "submit",
          fullWidth: !0,
          variant: "contained",
          size: "large",
          disabled: d,
          sx: {
            py: 1.5,
            backgroundColor: e.primaryColor,
            borderRadius: 1.4,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
            boxShadow: `0 4px 12px ${e.primaryColor}30`,
            "&:hover": {
              backgroundColor: e.secondaryColor,
              boxShadow: `0 6px 16px ${e.primaryColor}40`
            },
            "&:disabled": {
              backgroundColor: `${e.primaryColor}60`
            }
          },
          children: d ? /* @__PURE__ */ k(cr, { size: 24, color: "inherit" }, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
            lineNumber: 143,
            columnNumber: 8
          }, void 0) : "Send Reset Link"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 119,
          columnNumber: 6
        },
        void 0
      ),
      /* @__PURE__ */ k(
        ve,
        {
          fullWidth: !0,
          variant: "text",
          onClick: o,
          disabled: d,
          sx: {
            textTransform: "none",
            color: e.primaryColor,
            fontWeight: 500,
            "&:hover": {
              backgroundColor: `${e.primaryColor}08`
            }
          },
          children: "Back to Sign In"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 149,
          columnNumber: 6
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 93,
      columnNumber: 5
    }, void 0) }, void 0, !1, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 92,
      columnNumber: 4
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
    lineNumber: 56,
    columnNumber: 3
  }, void 0);
}, nl = ({
  brandConfig: e,
  loginState: t,
  onVerify: r,
  onVerifySuccess: n,
  onVerifyError: o,
  onResend: s,
  onBackToSignIn: i
}) => /* @__PURE__ */ k(Tt, { children: [
  /* @__PURE__ */ k(ce, { sx: { textAlign: "center", mb: 3 }, children: [
    e.logo && /* @__PURE__ */ k(ce, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ k(
      "img",
      {
        src: e.logo,
        alt: e.companyName || "Company Logo",
        style: {
          height: e.logoHeight,
          maxWidth: "100%",
          objectFit: "contain"
        }
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/OTPVerification.tsx",
        lineNumber: 32,
        columnNumber: 8
      },
      void 0
    ) : e.logo }, void 0, !1, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/OTPVerification.tsx",
      lineNumber: 30,
      columnNumber: 6
    }, void 0),
    /* @__PURE__ */ k(
      Ne,
      {
        variant: "h5",
        component: "h1",
        sx: {
          color: e.textColor,
          fontWeight: 600,
          fontSize: { xs: "1.5rem", sm: "1.75rem" }
        },
        children: "Verify Your Identity"
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/OTPVerification.tsx",
        lineNumber: 47,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/OTPVerification.tsx",
    lineNumber: 28,
    columnNumber: 4
  }, void 0),
  /* @__PURE__ */ k(
    uo,
    {
      onVerify: r,
      onVerifySuccess: n,
      onVerifyError: o,
      onResend: s,
      instructionText: "Please enter the 6-digit code sent to your email",
      showResend: !0,
      resendCooldown: 60,
      expirationTime: 300,
      showExpirationTimer: !0
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/OTPVerification.tsx",
      lineNumber: 60,
      columnNumber: 4
    },
    void 0
  ),
  t === "otp-error" && /* @__PURE__ */ k(ce, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ k(
    ve,
    {
      variant: "text",
      onClick: i,
      sx: {
        textTransform: "none",
        color: e.primaryColor,
        fontWeight: 500,
        "&:hover": {
          backgroundColor: `${e.primaryColor}08`
        }
      },
      children: "Back to Sign In"
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/OTPVerification.tsx",
      lineNumber: 74,
      columnNumber: 6
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/OTPVerification.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, void 0)
] }, void 0, !0, {
  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/OTPVerification.tsx",
  lineNumber: 26,
  columnNumber: 3
}, void 0), ol = ({
  brandConfig: e,
  onBackToLogin: t
}) => /* @__PURE__ */ k(Tt, { children: [
  /* @__PURE__ */ k(ce, { sx: { textAlign: "center", mb: 3 }, children: [
    e.logo && /* @__PURE__ */ k(ce, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ k(
      "img",
      {
        src: e.logo,
        alt: e.companyName || "Company Logo",
        style: {
          height: e.logoHeight,
          maxWidth: "100%",
          objectFit: "contain"
        }
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
        lineNumber: 21,
        columnNumber: 8
      },
      void 0
    ) : e.logo }, void 0, !1, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
      lineNumber: 19,
      columnNumber: 6
    }, void 0),
    /* @__PURE__ */ k(
      Ne,
      {
        variant: "h5",
        component: "h1",
        sx: {
          color: e.textColor,
          fontWeight: 600,
          fontSize: { xs: "1.5rem", sm: "1.75rem" },
          mb: 2
        },
        children: e.forgetPasswordSuccessTitle || "Check Your Email"
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
        lineNumber: 36,
        columnNumber: 5
      },
      void 0
    ),
    /* @__PURE__ */ k(
      Ne,
      {
        variant: "body1",
        sx: {
          color: e.textColor,
          opacity: 0.8,
          mb: 3,
          lineHeight: 1.6
        },
        children: e.forgetPasswordSuccessDescription || "We have sent you a password reset link. Please check your email and follow the instructions to reset your password."
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
        lineNumber: 50,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
    lineNumber: 17,
    columnNumber: 4
  }, void 0),
  /* @__PURE__ */ k(ce, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ k(
    ve,
    {
      variant: "contained",
      onClick: t,
      sx: {
        py: 1.5,
        px: 4,
        backgroundColor: e.primaryColor,
        borderRadius: 1.4,
        textTransform: "none",
        fontWeight: 600,
        fontSize: "1rem",
        boxShadow: `0 4px 12px ${e.primaryColor}30`,
        "&:hover": {
          backgroundColor: e.secondaryColor,
          boxShadow: `0 6px 16px ${e.primaryColor}40`
        }
      },
      children: "Back to Sign In"
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
      lineNumber: 65,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
    lineNumber: 64,
    columnNumber: 4
  }, void 0)
] }, void 0, !0, {
  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
  lineNumber: 15,
  columnNumber: 3
}, void 0), ht = ({
  children: e,
  brandConfig: t
}) => /* @__PURE__ */ k(
  ce,
  {
    sx: {
      // Mobile: full screen with proper centering
      width: { xs: "100%", sm: "auto" },
      height: { xs: "100vh", sm: "auto" },
      minHeight: { xs: "100vh", sm: "auto" },
      margin: { xs: 0, sm: "auto" },
      maxWidth: { xs: "100%", sm: "600px" },
      // Desktop: container with card styling
      mt: { xs: 0, sm: 4 },
      boxShadow: {
        xs: "none",
        sm: "0 8px 32px rgba(0, 0, 0, 0.12)"
      },
      borderRadius: { xs: 0, sm: 2.5 },
      border: { xs: "none", sm: "1px solid rgba(0, 0, 0, 0.08)" },
      background: t.backgroundColor,
      display: "flex",
      flexDirection: "column",
      // Prevent horizontal overflow
      overflowX: "hidden",
      boxSizing: "border-box"
    },
    children: /* @__PURE__ */ k(
      ce,
      {
        sx: {
          p: { xs: 3, sm: 4 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          // Ensure proper mobile centering and prevent overflow
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box"
        },
        children: e
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginContainer.tsx",
        lineNumber: 39,
        columnNumber: 4
      },
      void 0
    )
  },
  void 0,
  !1,
  {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LoginContainer.tsx",
    lineNumber: 15,
    columnNumber: 3
  },
  void 0
), Pl = ({
  authConfig: e,
  onLoginSuccess: t,
  onLoginError: r,
  enableRecaptcha: n = !1,
  recaptchaSiteKey: o,
  enableGoogleSignIn: s = !0,
  enableLocalSignIn: i = !0,
  enableForgetPassword: a = !0,
  enableOtp: f = !0,
  branding: d
}) => {
  const [u, p] = et("idle"), [g, E] = et(null), m = mo(d);
  if (Zt(() => {
    try {
      Ke(e.apiBaseUrl, e.apiKey);
    } catch (P) {
      console.error("Failed to initialize API client:", P);
    }
  }, [e.apiBaseUrl, e.apiKey]), !i && !s)
    throw new Error(
      "At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)"
    );
  if (n && !o)
    throw new Error(
      "recaptchaSiteKey is required when enableRecaptcha is true"
    );
  const c = () => window.grecaptcha.execute(o, { action: "login" }).catch(() => {
    throw new Error("reCAPTCHA verification failed");
  }), y = async () => {
    if (!n || !o)
      return "";
    if (typeof window > "u" || !window.grecaptcha)
      throw new Error("reCAPTCHA is not loaded");
    return new Promise((P, l) => {
      const N = () => {
        c().then(P).catch(l);
      };
      window.grecaptcha.ready(N);
    });
  }, O = async (P) => {
    p("loading"), E(null);
    try {
      n && await y();
      const l = await $e.login(P.email, P.password);
      ge.setTokens(l.accessToken, l.refreshToken);
      const N = await $e.getCurrentUser();
      f ? p("otp-required") : (p("success"), t({ user: N, tokens: l }));
    } catch (l) {
      const N = l;
      E({ message: N.message, type: "local" }), p("error"), r(N);
    }
  }, _ = () => {
    try {
      p("google-loading"), E(null);
      const P = `${window.location.origin}/callback`;
      setTimeout(() => {
        $e.initiateGoogleOAuth(
          P,
          e.apiBaseUrl
        );
      }, 300);
    } catch (P) {
      const l = P;
      E({ message: l.message, type: "google" }), p("error"), r(l);
    }
  }, A = async (P) => {
    if (await new Promise((l) => setTimeout(l, 1e3)), P === "123456")
      return { success: !0, token: "verified-token" };
    throw new Error("Invalid OTP code");
  }, v = () => {
    p("success");
    const P = ge.getAccessToken(), l = ge.getRefreshToken();
    P && l ? $e.getCurrentUser().then((N) => {
      t({
        user: N,
        tokens: { accessToken: P, refreshToken: l }
      });
    }).catch((N) => {
      r(N);
    }) : r(new Error("Session expired. Please login again."));
  }, S = (P) => {
    E({ message: P.message, type: "otp" }), p("otp-error");
  }, R = () => {
    console.log("Resending OTP..."), g && g.type === "otp" && E(null);
  }, X = () => {
    E(null), p("idle");
  }, le = async () => {
    p("forget-password-loading"), E(null);
    try {
      n && await y(), await new Promise((P) => setTimeout(P, 1e3)), p("forget-password-success");
    } catch (P) {
      const l = P;
      E({ message: l.message, type: "forget-password" }), p("forget-password"), r(l);
    }
  }, Z = () => {
    E(null), p("forget-password");
  }, oe = () => {
    E(null), p("idle");
  };
  return Zt(() => {
    if (n && o && typeof window < "u") {
      const P = document.createElement("script");
      P.src = `https://www.google.com/recaptcha/enterprise.js?render=${o}`, P.async = !0, P.defer = !0, document.head.appendChild(P);
    }
  }, [n, o]), u === "otp-required" || u === "otp-error" ? /* @__PURE__ */ k(ht, { brandConfig: m, children: /* @__PURE__ */ k(
    nl,
    {
      brandConfig: m,
      loginState: u,
      onVerify: A,
      onVerifySuccess: v,
      onVerifyError: S,
      onResend: R,
      onBackToSignIn: X
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 278,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 277,
    columnNumber: 4
  }, void 0) : u === "forget-password-success" ? /* @__PURE__ */ k(ht, { brandConfig: m, children: /* @__PURE__ */ k(
    ol,
    {
      brandConfig: m,
      onBackToLogin: oe
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 295,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 294,
    columnNumber: 4
  }, void 0) : u === "forget-password" || u === "forget-password-loading" ? /* @__PURE__ */ k(ht, { brandConfig: m, children: [
    /* @__PURE__ */ k(fn, { brandConfig: m }, void 0, !1, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 310,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ k(
      rl,
      {
        brandConfig: m,
        loginState: u,
        error: g,
        onSubmit: le,
        onBackToLogin: oe,
        onCloseError: () => E(null)
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 311,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 309,
    columnNumber: 4
  }, void 0) : /* @__PURE__ */ k(ce, { children: [
    /* @__PURE__ */ k(
      fn,
      {
        brandConfig: m,
        title: m.companyName ? m.companyName : "Sign In",
        subtitle: m.tagline
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 326,
        columnNumber: 4
      },
      void 0
    ),
    /* @__PURE__ */ k(ht, { brandConfig: m, children: [
      g && /* @__PURE__ */ k(
        mn,
        {
          severity: "error",
          sx: { mb: 3 },
          onClose: () => E(null),
          children: g.message
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 337,
          columnNumber: 6
        },
        void 0
      ),
      /* @__PURE__ */ k(lr, { spacing: 3, children: [
        i && /* @__PURE__ */ k(
          Za,
          {
            brandConfig: m,
            loginState: u,
            onSubmit: O,
            onForgetPassword: a ? Z : void 0,
            enableForgetPassword: a
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
            lineNumber: 348,
            columnNumber: 7
          },
          void 0
        ),
        s && /* @__PURE__ */ k(
          el,
          {
            brandConfig: m,
            loginState: u,
            onClick: _,
            showDivider: i
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
            lineNumber: 362,
            columnNumber: 7
          },
          void 0
        ),
        u === "error" && /* @__PURE__ */ k(
          ve,
          {
            fullWidth: !0,
            variant: "text",
            onClick: X,
            sx: {
              mt: 1,
              color: m.primaryColor,
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: `${m.primaryColor}08`
              }
            },
            children: "Try Again"
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
            lineNumber: 371,
            columnNumber: 7
          },
          void 0
        )
      ] }, void 0, !0, {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 346,
        columnNumber: 5
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 335,
      columnNumber: 4
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 325,
    columnNumber: 3
  }, void 0);
}, _l = (e) => {
  const [t, r] = et(!0), [n, o] = et(null);
  return Zt(() => {
    (async () => {
      try {
        const i = new URLSearchParams(window.location.search), a = i.get("access_token") || i.get("accessToken"), f = i.get("refresh_token") || i.get("refreshToken"), d = i.get("user"), u = i.get("error"), p = i.get("message");
        if (u) {
          const m = decodeURIComponent(p || u);
          throw new Error(m);
        }
        if (!a || !f)
          throw new Error("Missing authentication tokens in callback URL");
        ge.setTokens(a, f);
        let g;
        if (d)
          try {
            const m = decodeURIComponent(d);
            g = JSON.parse(m);
          } catch (m) {
            console.warn("Failed to parse user from URL, fetching from API:", m), g = await $e.getCurrentUser();
          }
        else
          g = await $e.getCurrentUser();
        e?.onSuccess?.({ accessToken: a, refreshToken: f }, g);
        const E = e?.redirectPath || "/dashboard";
        window.history.replaceState({}, document.title, E), r(!1);
      } catch (i) {
        const a = i;
        o(a), e?.onError?.(a), r(!1);
      }
    })();
  }, [e?.redirectPath]), { loading: t, error: n };
}, $l = (e) => ({ logout: no(async () => {
  const r = ge.getRefreshToken();
  if (e?.apiBaseUrl && r)
    try {
      await $e.logout(r);
    } catch (n) {
      console.error("Logout API call failed:", n);
    }
  ge.clearTokens(), window.location.href = "/login";
}, [e?.apiBaseUrl]) });
export {
  Pl as LumoraLogin,
  ge as TokenStorage,
  mo as getBrandingConfig,
  fo as getDefaultBranding,
  _l as useAuthCallback,
  $l as useLogout
};
