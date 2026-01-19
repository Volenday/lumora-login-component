import { jsxs as ue, jsx as $, Fragment as cr } from "react/jsx-runtime";
import * as Tt from "react";
import { useState as tt, useEffect as Zt, useCallback as oo } from "react";
import { Box as ge, Typography as Ie, Stack as lr, FormControl as Tr, FormLabel as wr, TextField as er, Button as Re, CircularProgress as ur, Divider as so, Alert as mn } from "@mui/material";
import { ThemeContext as io } from "@emotion/react";
import { appendErrors as ao, useForm as hn } from "react-hook-form";
import { validateFieldsNatively as co, toNestErrors as lo } from "@hookform/resolvers";
import * as Ze from "yup";
import { Google as uo } from "@mui/icons-material";
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
}), po = (e) => ({
  ...fo(),
  ...e
}), we = {
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
  hasTokens: () => !!(we.getAccessToken() && we.getRefreshToken())
};
function gn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: mo } = Object.prototype, { getPrototypeOf: fr } = Object, { iterator: wt, toStringTag: yn } = Symbol, Ct = /* @__PURE__ */ ((e) => (t) => {
  const r = mo.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), be = (e) => (e = e.toLowerCase(), (t) => Ct(t) === e), xt = (e) => (t) => typeof t === e, { isArray: Ve } = Array, ze = xt("undefined");
function nt(e) {
  return e !== null && !ze(e) && e.constructor !== null && !ze(e.constructor) && fe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const bn = be("ArrayBuffer");
function ho(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && bn(e.buffer), t;
}
const go = xt("string"), fe = xt("function"), En = xt("number"), ot = (e) => e !== null && typeof e == "object", yo = (e) => e === !0 || e === !1, gt = (e) => {
  if (Ct(e) !== "object")
    return !1;
  const t = fr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(yn in e) && !(wt in e);
}, bo = (e) => {
  if (!ot(e) || nt(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Eo = be("Date"), So = be("File"), To = be("Blob"), wo = be("FileList"), Co = (e) => ot(e) && fe(e.pipe), xo = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || fe(e.append) && ((t = Ct(e)) === "formdata" || // detect form-data instance
  t === "object" && fe(e.toString) && e.toString() === "[object FormData]"));
}, vo = be("URLSearchParams"), [Oo, Ro, Ao, _o] = ["ReadableStream", "Request", "Response", "Headers"].map(be), ko = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function st(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Ve(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    if (nt(e))
      return;
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (n = 0; n < i; n++)
      a = s[n], t.call(null, e[a], a, e);
  }
}
function Sn(e, t) {
  if (nt(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const $e = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Tn = (e) => !ze(e) && e !== $e;
function tr() {
  const { caseless: e, skipUndefined: t } = Tn(this) && this || {}, r = {}, n = (o, s) => {
    const i = e && Sn(r, s) || s;
    gt(r[i]) && gt(o) ? r[i] = tr(r[i], o) : gt(o) ? r[i] = tr({}, o) : Ve(o) ? r[i] = o.slice() : (!t || !ze(o)) && (r[i] = o);
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && st(arguments[o], n);
  return r;
}
const Po = (e, t, r, { allOwnKeys: n } = {}) => (st(t, (o, s) => {
  r && fe(o) ? e[s] = gn(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), $o = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), No = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Io = (e, t, r, n) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!n || n(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = r !== !1 && fr(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Do = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Bo = (e) => {
  if (!e) return null;
  if (Ve(e)) return e;
  let t = e.length;
  if (!En(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Fo = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && fr(Uint8Array)), Lo = (e, t) => {
  const n = (e && e[wt]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, Uo = (e, t) => {
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
), Cr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Wo = be("RegExp"), wn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  st(r, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (n[s] = i || o);
  }), Object.defineProperties(e, n);
}, qo = (e) => {
  wn(e, (t, r) => {
    if (fe(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (fe(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, zo = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return Ve(e) ? n(e) : n(String(e).split(t)), r;
}, Vo = () => {
}, Ho = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Yo(e) {
  return !!(e && fe(e.append) && e[yn] === "FormData" && e[wt]);
}
const Go = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (ot(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (nt(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = Ve(n) ? [] : {};
        return st(n, (i, a) => {
          const d = r(i, o + 1);
          !ze(d) && (s[a] = d);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, Ko = be("AsyncFunction"), Jo = (e) => e && (ot(e) || fe(e)) && fe(e.then) && fe(e.catch), Cn = ((e, t) => e ? setImmediate : t ? ((r, n) => ($e.addEventListener("message", ({ source: o, data: s }) => {
  o === $e && s === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), $e.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  fe($e.postMessage)
), Xo = typeof queueMicrotask < "u" ? queueMicrotask.bind($e) : typeof process < "u" && process.nextTick || Cn, Qo = (e) => e != null && fe(e[wt]), h = {
  isArray: Ve,
  isArrayBuffer: bn,
  isBuffer: nt,
  isFormData: xo,
  isArrayBufferView: ho,
  isString: go,
  isNumber: En,
  isBoolean: yo,
  isObject: ot,
  isPlainObject: gt,
  isEmptyObject: bo,
  isReadableStream: Oo,
  isRequest: Ro,
  isResponse: Ao,
  isHeaders: _o,
  isUndefined: ze,
  isDate: Eo,
  isFile: So,
  isBlob: To,
  isRegExp: Wo,
  isFunction: fe,
  isStream: Co,
  isURLSearchParams: vo,
  isTypedArray: Fo,
  isFileList: wo,
  forEach: st,
  merge: tr,
  extend: Po,
  trim: ko,
  stripBOM: $o,
  inherits: No,
  toFlatObject: Io,
  kindOf: Ct,
  kindOfTest: be,
  endsWith: Do,
  toArray: Bo,
  forEachEntry: Lo,
  matchAll: Uo,
  isHTMLForm: Mo,
  hasOwnProperty: Cr,
  hasOwnProp: Cr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wn,
  freezeMethods: qo,
  toObjectSet: zo,
  toCamelCase: jo,
  noop: Vo,
  toFiniteNumber: Ho,
  findKey: Sn,
  global: $e,
  isContextDefined: Tn,
  isSpecCompliantForm: Yo,
  toJSONObject: Go,
  isAsyncFn: Ko,
  isThenable: Jo,
  setImmediate: Cn,
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
const xn = I.prototype, vn = {};
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
  vn[e] = { value: e };
});
Object.defineProperties(I, vn);
Object.defineProperty(xn, "isAxiosError", { value: !0 });
I.from = (e, t, r, n, o, s) => {
  const i = Object.create(xn);
  h.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (f) => f !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", d = t == null && e ? e.code : t;
  return I.call(i, a, d, r, n, o), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", s && Object.assign(i, s), i;
};
const Zo = null;
function rr(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function On(e) {
  return h.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function xr(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = On(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function es(e) {
  return h.isArray(e) && !e.some(rr);
}
const ts = h.toFlatObject(h, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function vt(e, t, r) {
  if (!h.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(l, y) {
    return !h.isUndefined(y[l]);
  });
  const n = r.metaTokens, o = r.visitor || u, s = r.dots, i = r.indexes, d = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(t);
  if (!h.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(p) {
    if (p === null) return "";
    if (h.isDate(p))
      return p.toISOString();
    if (h.isBoolean(p))
      return p.toString();
    if (!d && h.isBlob(p))
      throw new I("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(p) || h.isTypedArray(p) ? d && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, l, y) {
    let R = p;
    if (p && !y && typeof p == "object") {
      if (h.endsWith(l, "{}"))
        l = n ? l : l.slice(0, -2), p = JSON.stringify(p);
      else if (h.isArray(p) && es(p) || (h.isFileList(p) || h.endsWith(l, "[]")) && (R = h.toArray(p)))
        return l = On(l), R.forEach(function(_, C) {
          !(h.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? xr([l], C, s) : i === null ? l : l + "[]",
            f(_)
          );
        }), !1;
    }
    return rr(p) ? !0 : (t.append(xr(y, l, s), f(p)), !1);
  }
  const m = [], g = Object.assign(ts, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: rr
  });
  function E(p, l) {
    if (!h.isUndefined(p)) {
      if (m.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + l.join("."));
      m.push(p), h.forEach(p, function(R, k) {
        (!(h.isUndefined(R) || R === null) && o.call(
          t,
          R,
          h.isString(k) ? k.trim() : k,
          l,
          g
        )) === !0 && E(R, l ? l.concat(k) : [k]);
      }), m.pop();
    }
  }
  if (!h.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function vr(e) {
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
  this._pairs = [], e && vt(e, this, t);
}
const Rn = dr.prototype;
Rn.append = function(t, r) {
  this._pairs.push([t, r]);
};
Rn.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, vr);
  } : vr;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function rs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function An(e, t, r) {
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
class Or {
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
const _n = {
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
}, pr = typeof window < "u" && typeof document < "u", nr = typeof navigator == "object" && navigator || void 0, as = pr && (!nr || ["ReactNative", "NativeScript", "NS"].indexOf(nr.product) < 0), cs = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ls = pr && window.location.href || "http://localhost", us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: pr,
  hasStandardBrowserEnv: as,
  hasStandardBrowserWebWorkerEnv: cs,
  navigator: nr,
  origin: ls
}, Symbol.toStringTag, { value: "Module" })), ce = {
  ...us,
  ...is
};
function fs(e, t) {
  return vt(e, new ce.classes.URLSearchParams(), {
    visitor: function(r, n, o, s) {
      return ce.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function ds(e) {
  return h.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ps(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function kn(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), d = s >= r.length;
    return i = !i && h.isArray(o) ? o.length : i, d ? (h.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !a) : ((!o[i] || !h.isObject(o[i])) && (o[i] = []), t(r, n, o[i], s) && h.isArray(o[i]) && (o[i] = ps(o[i])), !a);
  }
  if (h.isFormData(e) && h.isFunction(e.entries)) {
    const r = {};
    return h.forEachEntry(e, (n, o) => {
      t(ds(n), o, r, 0);
    }), r;
  }
  return null;
}
function ms(e, t, r) {
  if (h.isString(e))
    try {
      return (t || JSON.parse)(e), h.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const it = {
  transitional: _n,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = h.isObject(t);
    if (s && h.isHTMLForm(t) && (t = new FormData(t)), h.isFormData(t))
      return o ? JSON.stringify(kn(t)) : t;
    if (h.isArrayBuffer(t) || h.isBuffer(t) || h.isStream(t) || h.isFile(t) || h.isBlob(t) || h.isReadableStream(t))
      return t;
    if (h.isArrayBufferView(t))
      return t.buffer;
    if (h.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return fs(t, this.formSerializer).toString();
      if ((a = h.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return vt(
          a ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), ms(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || it.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
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
    FormData: ce.classes.FormData,
    Blob: ce.classes.Blob
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
  it.headers[e] = {};
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
}, Rr = /* @__PURE__ */ Symbol("internals");
function Ye(e) {
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
function jt(e, t, r, n, o) {
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
let de = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(a, d, f) {
      const u = Ye(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const m = h.findKey(o, u);
      (!m || o[m] === void 0 || f === !0 || f === void 0 && o[m] !== !1) && (o[m || d] = yt(a));
    }
    const i = (a, d) => h.forEach(a, (f, u) => s(f, u, d));
    if (h.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (h.isString(t) && (t = t.trim()) && !bs(t))
      i(gs(t), r);
    else if (h.isObject(t) && h.isIterable(t)) {
      let a = {}, d, f;
      for (const u of t) {
        if (!h.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[f = u[0]] = (d = a[f]) ? h.isArray(d) ? [...d, u[1]] : [d, u[1]] : u[1];
      }
      i(a, r);
    } else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Ye(t), t) {
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
    if (t = Ye(t), t) {
      const n = h.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || jt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = Ye(i), i) {
        const a = h.findKey(n, i);
        a && (!r || jt(n, n[a], a, r)) && (delete n[a], o = !0);
      }
    }
    return h.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || jt(this, this[s], s, t, !0)) && (delete this[s], o = !0);
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
    const n = (this[Rr] = this[Rr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = Ye(i);
      n[a] || (Ss(o, i), n[a] = !0);
    }
    return h.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
de.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(de.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
h.freezeMethods(de);
function Wt(e, t) {
  const r = this || it, n = t || r, o = de.from(n.headers);
  let s = n.data;
  return h.forEach(e, function(a) {
    s = a.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Pn(e) {
  return !!(e && e.__CANCEL__);
}
function He(e, t, r) {
  I.call(this, e ?? "canceled", I.ERR_CANCELED, t, r), this.name = "CanceledError";
}
h.inherits(He, I, {
  __CANCEL__: !0
});
function $n(e, t, r) {
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
  return t = t !== void 0 ? t : 1e3, function(d) {
    const f = Date.now(), u = n[s];
    i || (i = f), r[o] = d, n[o] = f;
    let m = s, g = 0;
    for (; m !== o; )
      g += r[m++], m = m % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), f - i < t)
      return;
    const E = u && f - u;
    return E ? Math.round(g * 1e3 / E) : void 0;
  };
}
function Cs(e, t) {
  let r = 0, n = 1e3 / t, o, s;
  const i = (f, u = Date.now()) => {
    r = u, o = null, s && (clearTimeout(s), s = null), e(...f);
  };
  return [(...f) => {
    const u = Date.now(), m = u - r;
    m >= n ? i(f, u) : (o = f, s || (s = setTimeout(() => {
      s = null, i(o);
    }, n - m)));
  }, () => o && i(o)];
}
const Et = (e, t, r = 3) => {
  let n = 0;
  const o = ws(50, 250);
  return Cs((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, d = i - n, f = o(d), u = i <= a;
    n = i;
    const m = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: d,
      rate: f || void 0,
      estimated: f && a && u ? (a - i) / f : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(m);
  }, r);
}, Ar = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, _r = (e) => (...t) => h.asap(() => e(...t)), xs = ce.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, ce.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(ce.origin),
  ce.navigator && /(msie|trident)/i.test(ce.navigator.userAgent)
) : () => !0, vs = ce.hasStandardBrowserEnv ? (
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
function Os(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Rs(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Nn(e, t, r) {
  let n = !Os(t);
  return e && (n || r == !1) ? Rs(e, t) : t;
}
const kr = (e) => e instanceof de ? { ...e } : e;
function De(e, t) {
  t = t || {};
  const r = {};
  function n(f, u, m, g) {
    return h.isPlainObject(f) && h.isPlainObject(u) ? h.merge.call({ caseless: g }, f, u) : h.isPlainObject(u) ? h.merge({}, u) : h.isArray(u) ? u.slice() : u;
  }
  function o(f, u, m, g) {
    if (h.isUndefined(u)) {
      if (!h.isUndefined(f))
        return n(void 0, f, m, g);
    } else return n(f, u, m, g);
  }
  function s(f, u) {
    if (!h.isUndefined(u))
      return n(void 0, u);
  }
  function i(f, u) {
    if (h.isUndefined(u)) {
      if (!h.isUndefined(f))
        return n(void 0, f);
    } else return n(void 0, u);
  }
  function a(f, u, m) {
    if (m in t)
      return n(f, u);
    if (m in e)
      return n(void 0, f);
  }
  const d = {
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
    headers: (f, u, m) => o(kr(f), kr(u), m, !0)
  };
  return h.forEach(Object.keys({ ...e, ...t }), function(u) {
    const m = d[u] || o, g = m(e[u], t[u], u);
    h.isUndefined(g) && m !== a || (r[u] = g);
  }), r;
}
const In = (e) => {
  const t = De({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  if (t.headers = i = de.from(i), t.url = An(Nn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), h.isFormData(r)) {
    if (ce.hasStandardBrowserEnv || ce.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (h.isFunction(r.getHeaders)) {
      const d = r.getHeaders(), f = ["content-type", "content-length"];
      Object.entries(d).forEach(([u, m]) => {
        f.includes(u.toLowerCase()) && i.set(u, m);
      });
    }
  }
  if (ce.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(t)), n || n !== !1 && xs(t.url))) {
    const d = o && s && vs.read(s);
    d && i.set(o, d);
  }
  return t;
}, As = typeof XMLHttpRequest < "u", _s = As && function(e) {
  return new Promise(function(r, n) {
    const o = In(e);
    let s = o.data;
    const i = de.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: d, onDownloadProgress: f } = o, u, m, g, E, p;
    function l() {
      E && E(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let y = new XMLHttpRequest();
    y.open(o.method.toUpperCase(), o.url, !0), y.timeout = o.timeout;
    function R() {
      if (!y)
        return;
      const _ = de.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), S = {
        data: !a || a === "text" || a === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: _,
        config: e,
        request: y
      };
      $n(function(F) {
        r(F), l();
      }, function(F) {
        n(F), l();
      }, S), y = null;
    }
    "onloadend" in y ? y.onloadend = R : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, y.onabort = function() {
      y && (n(new I("Request aborted", I.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(C) {
      const S = C && C.message ? C.message : "Network Error", x = new I(S, I.ERR_NETWORK, e, y);
      x.event = C || null, n(x), y = null;
    }, y.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const S = o.transitional || _n;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), n(new I(
        C,
        S.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED,
        e,
        y
      )), y = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in y && h.forEach(i.toJSON(), function(C, S) {
      y.setRequestHeader(S, C);
    }), h.isUndefined(o.withCredentials) || (y.withCredentials = !!o.withCredentials), a && a !== "json" && (y.responseType = o.responseType), f && ([g, p] = Et(f, !0), y.addEventListener("progress", g)), d && y.upload && ([m, E] = Et(d), y.upload.addEventListener("progress", m), y.upload.addEventListener("loadend", E)), (o.cancelToken || o.signal) && (u = (_) => {
      y && (n(!_ || _.type ? new He(null, e, y) : _), y.abort(), y = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const k = Ts(o.url);
    if (k && ce.protocols.indexOf(k) === -1) {
      n(new I("Unsupported protocol " + k + ":", I.ERR_BAD_REQUEST, e));
      return;
    }
    y.send(s || null);
  });
}, ks = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const s = function(f) {
      if (!o) {
        o = !0, a();
        const u = f instanceof Error ? f : this.reason;
        n.abort(u instanceof I ? u : new He(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new I(`timeout ${t} of ms exceeded`, I.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(s) : f.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", s));
    const { signal: d } = n;
    return d.unsubscribe = () => h.asap(a), d;
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
}, $s = async function* (e, t) {
  for await (const r of Ns(e))
    yield* Ps(r, t);
}, Ns = async function* (e) {
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
}, Pr = (e, t, r, n) => {
  const o = $s(e, t);
  let s = 0, i, a = (d) => {
    i || (i = !0, n && n(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: f, value: u } = await o.next();
        if (f) {
          a(), d.close();
          return;
        }
        let m = u.byteLength;
        if (r) {
          let g = s += m;
          r(g);
        }
        d.enqueue(new Uint8Array(u));
      } catch (f) {
        throw a(f), f;
      }
    },
    cancel(d) {
      return a(d), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, $r = 64 * 1024, { isFunction: ut } = h, Is = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(h.global), {
  ReadableStream: Nr,
  TextEncoder: Ir
} = h.global, Dr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ds = (e) => {
  e = h.merge.call({
    skipUndefined: !0
  }, Is, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? ut(t) : typeof fetch == "function", s = ut(r), i = ut(n);
  if (!o)
    return !1;
  const a = o && ut(Nr), d = o && (typeof Ir == "function" ? /* @__PURE__ */ ((p) => (l) => p.encode(l))(new Ir()) : async (p) => new Uint8Array(await new r(p).arrayBuffer())), f = s && a && Dr(() => {
    let p = !1;
    const l = new r(ce.origin, {
      body: new Nr(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return p && !l;
  }), u = i && a && Dr(() => h.isReadableStream(new n("").body)), m = {
    stream: u && ((p) => p.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !m[p] && (m[p] = (l, y) => {
      let R = l && l[p];
      if (R)
        return R.call(l);
      throw new I(`Response type '${p}' is not supported`, I.ERR_NOT_SUPPORT, y);
    });
  });
  const g = async (p) => {
    if (p == null)
      return 0;
    if (h.isBlob(p))
      return p.size;
    if (h.isSpecCompliantForm(p))
      return (await new r(ce.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (h.isArrayBufferView(p) || h.isArrayBuffer(p))
      return p.byteLength;
    if (h.isURLSearchParams(p) && (p = p + ""), h.isString(p))
      return (await d(p)).byteLength;
  }, E = async (p, l) => {
    const y = h.toFiniteNumber(p.getContentLength());
    return y ?? g(l);
  };
  return async (p) => {
    let {
      url: l,
      method: y,
      data: R,
      signal: k,
      cancelToken: _,
      timeout: C,
      onDownloadProgress: S,
      onUploadProgress: x,
      responseType: F,
      headers: ne,
      withCredentials: oe = "same-origin",
      fetchOptions: ie
    } = In(p), ee = t || fetch;
    F = F ? (F + "").toLowerCase() : "text";
    let c = ks([k, _ && _.toAbortSignal()], C), A = null;
    const w = c && c.unsubscribe && (() => {
      c.unsubscribe();
    });
    let j;
    try {
      if (x && f && y !== "get" && y !== "head" && (j = await E(ne, R)) !== 0) {
        let v = new r(l, {
          method: "POST",
          body: R,
          duplex: "half"
        }), N;
        if (h.isFormData(R) && (N = v.headers.get("content-type")) && ne.setContentType(N), v.body) {
          const [B, P] = Ar(
            j,
            Et(_r(x))
          );
          R = Pr(v.body, $r, B, P);
        }
      }
      h.isString(oe) || (oe = oe ? "include" : "omit");
      const D = s && "credentials" in r.prototype, ae = {
        ...ie,
        signal: c,
        method: y.toUpperCase(),
        headers: ne.normalize().toJSON(),
        body: R,
        duplex: "half",
        credentials: D ? oe : void 0
      };
      A = s && new r(l, ae);
      let se = await (s ? ee(A, ie) : ee(l, ae));
      const Be = u && (F === "stream" || F === "response");
      if (u && (S || Be && w)) {
        const v = {};
        ["status", "statusText", "headers"].forEach((M) => {
          v[M] = se[M];
        });
        const N = h.toFiniteNumber(se.headers.get("content-length")), [B, P] = S && Ar(
          N,
          Et(_r(S), !0)
        ) || [];
        se = new n(
          Pr(se.body, $r, B, () => {
            P && P(), w && w();
          }),
          v
        );
      }
      F = F || "text";
      let T = await m[h.findKey(m, F) || "text"](se, p);
      return !Be && w && w(), await new Promise((v, N) => {
        $n(v, N, {
          data: T,
          headers: de.from(se.headers),
          status: se.status,
          statusText: se.statusText,
          config: p,
          request: A
        });
      });
    } catch (D) {
      throw w && w(), D && D.name === "TypeError" && /Load failed|fetch/i.test(D.message) ? Object.assign(
        new I("Network Error", I.ERR_NETWORK, p, A),
        {
          cause: D.cause || D
        }
      ) : I.from(D, D && D.code, p, A);
    }
  };
}, Bs = /* @__PURE__ */ new Map(), Dn = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: o } = t, s = [
    n,
    o,
    r
  ];
  let i = s.length, a = i, d, f, u = Bs;
  for (; a--; )
    d = s[a], f = u.get(d), f === void 0 && u.set(d, f = a ? /* @__PURE__ */ new Map() : Ds(t)), u = f;
  return f;
};
Dn();
const mr = {
  http: Zo,
  xhr: _s,
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
const Br = (e) => `- ${e}`, Fs = (e) => h.isFunction(e) || e === null || e === !1;
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
      ([d, f]) => `adapter ${d} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = r ? i.length > 1 ? `since :
` + i.map(Br).join(`
`) : " " + Br(i[0]) : "as no adapter specified";
    throw new I(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Bn = {
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
    throw new He(null, e);
}
function Fr(e) {
  return qt(e), e.headers = de.from(e.headers), e.data = Wt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Bn.getAdapter(e.adapter || it.adapter, e)(e).then(function(n) {
    return qt(e), n.data = Wt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = de.from(n.headers), n;
  }, function(n) {
    return Pn(n) || (qt(e), n && n.response && (n.response.data = Wt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = de.from(n.response.headers))), Promise.reject(n);
  });
}
const Fn = "1.13.2", Ot = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ot[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Lr = {};
Ot.transitional = function(t, r, n) {
  function o(s, i) {
    return "[Axios v" + Fn + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new I(
        o(i, " has been removed" + (r ? " in " + r : "")),
        I.ERR_DEPRECATED
      );
    return r && !Lr[i] && (Lr[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
Ot.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Us(e, t, r) {
  if (typeof e != "object")
    throw new I("options must be an object", I.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = t[s];
    if (i) {
      const a = e[s], d = a === void 0 || i(a, s, e);
      if (d !== !0)
        throw new I("option " + s + " must be " + d, I.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new I("Unknown option " + s, I.ERR_BAD_OPTION);
  }
}
const bt = {
  assertOptions: Us,
  validators: Ot
}, Se = bt.validators;
let Ne = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Or(),
      response: new Or()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = De(this.defaults, r);
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
      (p) => {
        delete s[p];
      }
    ), r.headers = de.concat(i, s);
    const a = [];
    let d = !0;
    this.interceptors.request.forEach(function(l) {
      typeof l.runWhen == "function" && l.runWhen(r) === !1 || (d = d && l.synchronous, a.unshift(l.fulfilled, l.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(l) {
      f.push(l.fulfilled, l.rejected);
    });
    let u, m = 0, g;
    if (!d) {
      const p = [Fr.bind(this), void 0];
      for (p.unshift(...a), p.push(...f), g = p.length, u = Promise.resolve(r); m < g; )
        u = u.then(p[m++], p[m++]);
      return u;
    }
    g = a.length;
    let E = r;
    for (; m < g; ) {
      const p = a[m++], l = a[m++];
      try {
        E = p(E);
      } catch (y) {
        l.call(this, y);
        break;
      }
    }
    try {
      u = Fr.call(this, E);
    } catch (p) {
      return Promise.reject(p);
    }
    for (m = 0, g = f.length; m < g; )
      u = u.then(f[m++], f[m++]);
    return u;
  }
  getUri(t) {
    t = De(this.defaults, t);
    const r = Nn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return An(r, t.params, t.paramsSerializer);
  }
};
h.forEach(["delete", "get", "head", "options"], function(t) {
  Ne.prototype[t] = function(r, n) {
    return this.request(De(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, i, a) {
      return this.request(De(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Ne.prototype[t] = r(), Ne.prototype[t + "Form"] = r(!0);
});
let Ms = class Ln {
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
      n.reason || (n.reason = new He(s, i, a), r(n.reason));
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
      token: new Ln(function(o) {
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
function Un(e) {
  const t = new Ne(e), r = gn(Ne.prototype.request, t);
  return h.extend(r, Ne.prototype, t, { allOwnKeys: !0 }), h.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Un(De(e, o));
  }, r;
}
const te = Un(it);
te.Axios = Ne;
te.CanceledError = He;
te.CancelToken = Ms;
te.isCancel = Pn;
te.VERSION = Fn;
te.toFormData = vt;
te.AxiosError = I;
te.Cancel = te.CanceledError;
te.all = function(t) {
  return Promise.all(t);
};
te.spread = js;
te.isAxiosError = Ws;
te.mergeConfig = De;
te.AxiosHeaders = de;
te.formToJSON = (e) => kn(h.isHTMLForm(e) ? new FormData(e) : e);
te.getAdapter = Bn.getAdapter;
te.HttpStatusCode = or;
te.default = te;
const {
  Axios: pc,
  AxiosError: mc,
  CanceledError: hc,
  isCancel: gc,
  CancelToken: yc,
  VERSION: bc,
  all: Ec,
  Cancel: Sc,
  isAxiosError: Tc,
  spread: wc,
  toFormData: Cc,
  AxiosHeaders: xc,
  HttpStatusCode: vc,
  formToJSON: Oc,
  getAdapter: Rc,
  mergeConfig: Ac
} = te, ve = {
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
}, qs = {
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
}, zs = (e, t) => {
  const r = te.create({
    baseURL: e,
    timeout: ve.DEFAULT_CONFIG.TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      ...t && { "X-API-Key": t }
    }
  });
  return r.interceptors.request.use(
    (n) => {
      const o = we.getAccessToken();
      return o && n.headers && (n.headers.Authorization = `Bearer ${o}`), n;
    },
    (n) => Promise.reject(n)
  ), r.interceptors.response.use(
    (n) => n,
    async (n) => {
      const o = n.config;
      if (n.response?.status === ve.STATUS_CODES.UNAUTHORIZED && !o._retry) {
        o._retry = !0;
        try {
          const s = we.getRefreshToken();
          if (!s)
            throw new Error(qs.NO_REFRESH_TOKEN);
          const i = await r.post(ve.ENDPOINTS.REFRESH, {
            refreshToken: s
          }), a = {
            accessToken: i.data.accessToken,
            refreshToken: i.data.refreshToken
          };
          return we.setTokens(a.accessToken, a.refreshToken), o.headers && (o.headers.Authorization = `Bearer ${a.accessToken}`), r(o);
        } catch (s) {
          return we.clearTokens(), window.location.href = "/login", Promise.reject(s);
        }
      }
      return Promise.reject(n);
    }
  ), r;
};
let ft = null;
const Je = (e, t) => {
  if (!ft && e && (ft = zs(e, t)), !ft)
    throw new Error("API client not initialized. Please provide baseURL.");
  return ft;
}, We = {
  /**
   * Authenticate user with email and password
   * @param email - User's email address
   * @param password - User's password
   * @returns Promise resolving to authentication tokens
   */
  login: async (e, t) => {
    try {
      const n = await Je().post(ve.ENDPOINTS.LOGIN, {
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
      await Je().post(ve.ENDPOINTS.LOGOUT, {
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
      const r = await Je().post(ve.ENDPOINTS.REFRESH, {
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
      const t = await Je().get(ve.ENDPOINTS.USER_ME);
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
    const r = `${t}${ve.ENDPOINTS.GOOGLE_AUTH}?redirect_uri=${encodeURIComponent(e)}&prompt=select_account`;
    console.log("🚀 Initiating Google OAuth redirect..."), console.log("📍 Redirect URL:", r), console.log("🔙 Callback URL:", e), window.location.href = r;
  }
};
function Ae(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Vs = "$$material";
function Hs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dt = { exports: {} }, pt = { exports: {} }, z = {};
var Ur;
function Ys() {
  if (Ur) return z;
  Ur = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, d = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, m = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, g = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, E = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, p = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, l = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, y = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, R = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, k = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function _(S) {
    if (typeof S == "object" && S !== null) {
      var x = S.$$typeof;
      switch (x) {
        case t:
          switch (S = S.type, S) {
            case d:
            case f:
            case n:
            case s:
            case o:
            case m:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case a:
                case u:
                case p:
                case E:
                case i:
                  return S;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function C(S) {
    return _(S) === f;
  }
  return z.AsyncMode = d, z.ConcurrentMode = f, z.ContextConsumer = a, z.ContextProvider = i, z.Element = t, z.ForwardRef = u, z.Fragment = n, z.Lazy = p, z.Memo = E, z.Portal = r, z.Profiler = s, z.StrictMode = o, z.Suspense = m, z.isAsyncMode = function(S) {
    return C(S) || _(S) === d;
  }, z.isConcurrentMode = C, z.isContextConsumer = function(S) {
    return _(S) === a;
  }, z.isContextProvider = function(S) {
    return _(S) === i;
  }, z.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, z.isForwardRef = function(S) {
    return _(S) === u;
  }, z.isFragment = function(S) {
    return _(S) === n;
  }, z.isLazy = function(S) {
    return _(S) === p;
  }, z.isMemo = function(S) {
    return _(S) === E;
  }, z.isPortal = function(S) {
    return _(S) === r;
  }, z.isProfiler = function(S) {
    return _(S) === s;
  }, z.isStrictMode = function(S) {
    return _(S) === o;
  }, z.isSuspense = function(S) {
    return _(S) === m;
  }, z.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === f || S === s || S === o || S === m || S === g || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === E || S.$$typeof === i || S.$$typeof === a || S.$$typeof === u || S.$$typeof === y || S.$$typeof === R || S.$$typeof === k || S.$$typeof === l);
  }, z.typeOf = _, z;
}
var V = {};
var Mr;
function Gs() {
  return Mr || (Mr = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, d = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, m = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, g = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, E = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, p = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, l = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, y = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, R = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, k = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function _(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === f || O === s || O === o || O === m || O === g || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === E || O.$$typeof === i || O.$$typeof === a || O.$$typeof === u || O.$$typeof === y || O.$$typeof === R || O.$$typeof === k || O.$$typeof === l);
    }
    function C(O) {
      if (typeof O == "object" && O !== null) {
        var Ee = O.$$typeof;
        switch (Ee) {
          case t:
            var lt = O.type;
            switch (lt) {
              case d:
              case f:
              case n:
              case s:
              case o:
              case m:
                return lt;
              default:
                var Sr = lt && lt.$$typeof;
                switch (Sr) {
                  case a:
                  case u:
                  case p:
                  case E:
                  case i:
                    return Sr;
                  default:
                    return Ee;
                }
            }
          case r:
            return Ee;
        }
      }
    }
    var S = d, x = f, F = a, ne = i, oe = t, ie = u, ee = n, c = p, A = E, w = r, j = s, D = o, ae = m, se = !1;
    function Be(O) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(O) || C(O) === d;
    }
    function T(O) {
      return C(O) === f;
    }
    function v(O) {
      return C(O) === a;
    }
    function N(O) {
      return C(O) === i;
    }
    function B(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function P(O) {
      return C(O) === u;
    }
    function M(O) {
      return C(O) === n;
    }
    function L(O) {
      return C(O) === p;
    }
    function U(O) {
      return C(O) === E;
    }
    function W(O) {
      return C(O) === r;
    }
    function H(O) {
      return C(O) === s;
    }
    function q(O) {
      return C(O) === o;
    }
    function le(O) {
      return C(O) === m;
    }
    V.AsyncMode = S, V.ConcurrentMode = x, V.ContextConsumer = F, V.ContextProvider = ne, V.Element = oe, V.ForwardRef = ie, V.Fragment = ee, V.Lazy = c, V.Memo = A, V.Portal = w, V.Profiler = j, V.StrictMode = D, V.Suspense = ae, V.isAsyncMode = Be, V.isConcurrentMode = T, V.isContextConsumer = v, V.isContextProvider = N, V.isElement = B, V.isForwardRef = P, V.isFragment = M, V.isLazy = L, V.isMemo = U, V.isPortal = W, V.isProfiler = H, V.isStrictMode = q, V.isSuspense = le, V.isValidElementType = _, V.typeOf = C;
  })()), V;
}
var jr;
function Mn() {
  return jr || (jr = 1, process.env.NODE_ENV === "production" ? pt.exports = Ys() : pt.exports = Gs()), pt.exports;
}
var zt, Wr;
function Ks() {
  if (Wr) return zt;
  Wr = 1;
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
      var d = Object.getOwnPropertyNames(i).map(function(u) {
        return i[u];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        f[u] = u;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zt = o() ? Object.assign : function(s, i) {
    for (var a, d = n(s), f, u = 1; u < arguments.length; u++) {
      a = Object(arguments[u]);
      for (var m in a)
        t.call(a, m) && (d[m] = a[m]);
      if (e) {
        f = e(a);
        for (var g = 0; g < f.length; g++)
          r.call(a, f[g]) && (d[f[g]] = a[f[g]]);
      }
    }
    return d;
  }, zt;
}
var Vt, qr;
function hr() {
  if (qr) return Vt;
  qr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vt = e, Vt;
}
var Ht, zr;
function jn() {
  return zr || (zr = 1, Ht = Function.call.bind(Object.prototype.hasOwnProperty)), Ht;
}
var Yt, Vr;
function Js() {
  if (Vr) return Yt;
  Vr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ hr(), r = {}, n = /* @__PURE__ */ jn();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(s, i, a, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in s)
        if (n(s, u)) {
          var m;
          try {
            if (typeof s[u] != "function") {
              var g = Error(
                (d || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = s[u](i, u, d, a, null, t);
          } catch (p) {
            m = p;
          }
          if (m && !(m instanceof Error) && e(
            (d || "React class") + ": type specification of " + a + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var E = f ? f() : "";
            e(
              "Failed " + a + " type: " + m.message + (E ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Yt = o, Yt;
}
var Gt, Hr;
function Xs() {
  if (Hr) return Gt;
  Hr = 1;
  var e = Mn(), t = Ks(), r = /* @__PURE__ */ hr(), n = /* @__PURE__ */ jn(), o = /* @__PURE__ */ Js(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var d = "Warning: " + a;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Gt = function(a, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function m(T) {
      var v = T && (f && T[f] || T[u]);
      if (typeof v == "function")
        return v;
    }
    var g = "<<anonymous>>", E = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: k(),
      arrayOf: _,
      element: C(),
      elementType: S(),
      instanceOf: x,
      node: ie(),
      objectOf: ne,
      oneOf: F,
      oneOfType: oe,
      shape: c,
      exact: A
    };
    function p(T, v) {
      return T === v ? T !== 0 || 1 / T === 1 / v : T !== T && v !== v;
    }
    function l(T, v) {
      this.message = T, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function y(T) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, N = 0;
      function B(M, L, U, W, H, q, le) {
        if (W = W || g, q = q || U, le !== r) {
          if (d) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = W + ":" + U;
            !v[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[Ee] = !0, N++);
          }
        }
        return L[U] == null ? M ? L[U] === null ? new l("The " + H + " `" + q + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new l("The " + H + " `" + q + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : T(L, U, W, H, q);
      }
      var P = B.bind(null, !1);
      return P.isRequired = B.bind(null, !0), P;
    }
    function R(T) {
      function v(N, B, P, M, L, U) {
        var W = N[B], H = D(W);
        if (H !== T) {
          var q = ae(W);
          return new l(
            "Invalid " + M + " `" + L + "` of type " + ("`" + q + "` supplied to `" + P + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return y(v);
    }
    function k() {
      return y(i);
    }
    function _(T) {
      function v(N, B, P, M, L) {
        if (typeof T != "function")
          return new l("Property `" + L + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var U = N[B];
        if (!Array.isArray(U)) {
          var W = D(U);
          return new l("Invalid " + M + " `" + L + "` of type " + ("`" + W + "` supplied to `" + P + "`, expected an array."));
        }
        for (var H = 0; H < U.length; H++) {
          var q = T(U, H, P, M, L + "[" + H + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return y(v);
    }
    function C() {
      function T(v, N, B, P, M) {
        var L = v[N];
        if (!a(L)) {
          var U = D(L);
          return new l("Invalid " + P + " `" + M + "` of type " + ("`" + U + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(T);
    }
    function S() {
      function T(v, N, B, P, M) {
        var L = v[N];
        if (!e.isValidElementType(L)) {
          var U = D(L);
          return new l("Invalid " + P + " `" + M + "` of type " + ("`" + U + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(T);
    }
    function x(T) {
      function v(N, B, P, M, L) {
        if (!(N[B] instanceof T)) {
          var U = T.name || g, W = Be(N[B]);
          return new l("Invalid " + M + " `" + L + "` of type " + ("`" + W + "` supplied to `" + P + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return y(v);
    }
    function F(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function v(N, B, P, M, L) {
        for (var U = N[B], W = 0; W < T.length; W++)
          if (p(U, T[W]))
            return null;
        var H = JSON.stringify(T, function(le, O) {
          var Ee = ae(O);
          return Ee === "symbol" ? String(O) : O;
        });
        return new l("Invalid " + M + " `" + L + "` of value `" + String(U) + "` " + ("supplied to `" + P + "`, expected one of " + H + "."));
      }
      return y(v);
    }
    function ne(T) {
      function v(N, B, P, M, L) {
        if (typeof T != "function")
          return new l("Property `" + L + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var U = N[B], W = D(U);
        if (W !== "object")
          return new l("Invalid " + M + " `" + L + "` of type " + ("`" + W + "` supplied to `" + P + "`, expected an object."));
        for (var H in U)
          if (n(U, H)) {
            var q = T(U, H, P, M, L + "." + H, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return y(v);
    }
    function oe(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var v = 0; v < T.length; v++) {
        var N = T[v];
        if (typeof N != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(N) + " at index " + v + "."
          ), i;
      }
      function B(P, M, L, U, W) {
        for (var H = [], q = 0; q < T.length; q++) {
          var le = T[q], O = le(P, M, L, U, W, r);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && H.push(O.data.expectedType);
        }
        var Ee = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new l("Invalid " + U + " `" + W + "` supplied to " + ("`" + L + "`" + Ee + "."));
      }
      return y(B);
    }
    function ie() {
      function T(v, N, B, P, M) {
        return w(v[N]) ? null : new l("Invalid " + P + " `" + M + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return y(T);
    }
    function ee(T, v, N, B, P) {
      return new l(
        (T || "React class") + ": " + v + " type `" + N + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function c(T) {
      function v(N, B, P, M, L) {
        var U = N[B], W = D(U);
        if (W !== "object")
          return new l("Invalid " + M + " `" + L + "` of type `" + W + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var H in T) {
          var q = T[H];
          if (typeof q != "function")
            return ee(P, M, L, H, ae(q));
          var le = q(U, H, P, M, L + "." + H, r);
          if (le)
            return le;
        }
        return null;
      }
      return y(v);
    }
    function A(T) {
      function v(N, B, P, M, L) {
        var U = N[B], W = D(U);
        if (W !== "object")
          return new l("Invalid " + M + " `" + L + "` of type `" + W + "` " + ("supplied to `" + P + "`, expected `object`."));
        var H = t({}, N[B], T);
        for (var q in H) {
          var le = T[q];
          if (n(T, q) && typeof le != "function")
            return ee(P, M, L, q, ae(le));
          if (!le)
            return new l(
              "Invalid " + M + " `" + L + "` key `" + q + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(N[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var O = le(U, q, P, M, L + "." + q, r);
          if (O)
            return O;
        }
        return null;
      }
      return y(v);
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
          var v = m(T);
          if (v) {
            var N = v.call(T), B;
            if (v !== T.entries) {
              for (; !(B = N.next()).done; )
                if (!w(B.value))
                  return !1;
            } else
              for (; !(B = N.next()).done; ) {
                var P = B.value;
                if (P && !w(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(T, v) {
      return T === "symbol" ? !0 : v ? v["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && v instanceof Symbol : !1;
    }
    function D(T) {
      var v = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : j(v, T) ? "symbol" : v;
    }
    function ae(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var v = D(T);
      if (v === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function se(T) {
      var v = ae(T);
      switch (v) {
        case "array":
        case "object":
          return "an " + v;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + v;
        default:
          return v;
      }
    }
    function Be(T) {
      return !T.constructor || !T.constructor.name ? g : T.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, Gt;
}
var Kt, Yr;
function Qs() {
  if (Yr) return Kt;
  Yr = 1;
  var e = /* @__PURE__ */ hr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Kt = function() {
    function n(i, a, d, f, u, m) {
      if (m !== e) {
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
  }, Kt;
}
var Gr;
function Zs() {
  if (Gr) return dt.exports;
  if (Gr = 1, process.env.NODE_ENV !== "production") {
    var e = Mn(), t = !0;
    dt.exports = /* @__PURE__ */ Xs()(e.isElement, t);
  } else
    dt.exports = /* @__PURE__ */ Qs()();
  return dt.exports;
}
var ei = /* @__PURE__ */ Zs();
const Ge = /* @__PURE__ */ Hs(ei);
var mt = { exports: {} }, K = {};
var Kr;
function ti() {
  if (Kr) return K;
  Kr = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), i = /* @__PURE__ */ Symbol.for("react.context"), a = /* @__PURE__ */ Symbol.for("react.forward_ref"), d = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.suspense_list"), u = /* @__PURE__ */ Symbol.for("react.memo"), m = /* @__PURE__ */ Symbol.for("react.lazy"), g = /* @__PURE__ */ Symbol.for("react.view_transition"), E = /* @__PURE__ */ Symbol.for("react.client.reference");
  function p(l) {
    if (typeof l == "object" && l !== null) {
      var y = l.$$typeof;
      switch (y) {
        case e:
          switch (l = l.type, l) {
            case r:
            case o:
            case n:
            case d:
            case f:
            case g:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case i:
                case a:
                case m:
                case u:
                  return l;
                case s:
                  return l;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return K.ContextConsumer = s, K.ContextProvider = i, K.Element = e, K.ForwardRef = a, K.Fragment = r, K.Lazy = m, K.Memo = u, K.Portal = t, K.Profiler = o, K.StrictMode = n, K.Suspense = d, K.SuspenseList = f, K.isContextConsumer = function(l) {
    return p(l) === s;
  }, K.isContextProvider = function(l) {
    return p(l) === i;
  }, K.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, K.isForwardRef = function(l) {
    return p(l) === a;
  }, K.isFragment = function(l) {
    return p(l) === r;
  }, K.isLazy = function(l) {
    return p(l) === m;
  }, K.isMemo = function(l) {
    return p(l) === u;
  }, K.isPortal = function(l) {
    return p(l) === t;
  }, K.isProfiler = function(l) {
    return p(l) === o;
  }, K.isStrictMode = function(l) {
    return p(l) === n;
  }, K.isSuspense = function(l) {
    return p(l) === d;
  }, K.isSuspenseList = function(l) {
    return p(l) === f;
  }, K.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === o || l === n || l === d || l === f || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === u || l.$$typeof === i || l.$$typeof === s || l.$$typeof === a || l.$$typeof === E || l.getModuleId !== void 0);
  }, K.typeOf = p, K;
}
var J = {};
var Jr;
function ri() {
  return Jr || (Jr = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var y = l.$$typeof;
        switch (y) {
          case t:
            switch (l = l.type, l) {
              case n:
              case s:
              case o:
              case f:
              case u:
              case E:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case a:
                  case d:
                  case g:
                  case m:
                    return l;
                  case i:
                    return l;
                  default:
                    return y;
                }
            }
          case r:
            return y;
        }
      }
    }
    var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.consumer"), a = /* @__PURE__ */ Symbol.for("react.context"), d = /* @__PURE__ */ Symbol.for("react.forward_ref"), f = /* @__PURE__ */ Symbol.for("react.suspense"), u = /* @__PURE__ */ Symbol.for("react.suspense_list"), m = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.view_transition"), p = /* @__PURE__ */ Symbol.for("react.client.reference");
    J.ContextConsumer = i, J.ContextProvider = a, J.Element = t, J.ForwardRef = d, J.Fragment = n, J.Lazy = g, J.Memo = m, J.Portal = r, J.Profiler = s, J.StrictMode = o, J.Suspense = f, J.SuspenseList = u, J.isContextConsumer = function(l) {
      return e(l) === i;
    }, J.isContextProvider = function(l) {
      return e(l) === a;
    }, J.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }, J.isForwardRef = function(l) {
      return e(l) === d;
    }, J.isFragment = function(l) {
      return e(l) === n;
    }, J.isLazy = function(l) {
      return e(l) === g;
    }, J.isMemo = function(l) {
      return e(l) === m;
    }, J.isPortal = function(l) {
      return e(l) === r;
    }, J.isProfiler = function(l) {
      return e(l) === s;
    }, J.isStrictMode = function(l) {
      return e(l) === o;
    }, J.isSuspense = function(l) {
      return e(l) === f;
    }, J.isSuspenseList = function(l) {
      return e(l) === u;
    }, J.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === s || l === o || l === f || l === u || typeof l == "object" && l !== null && (l.$$typeof === g || l.$$typeof === m || l.$$typeof === a || l.$$typeof === i || l.$$typeof === d || l.$$typeof === p || l.getModuleId !== void 0);
    }, J.typeOf = e;
  })()), J;
}
var Xr;
function ni() {
  return Xr || (Xr = 1, process.env.NODE_ENV === "production" ? mt.exports = /* @__PURE__ */ ti() : mt.exports = /* @__PURE__ */ ri()), mt.exports;
}
var Wn = /* @__PURE__ */ ni();
function Oe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function qn(e) {
  if (/* @__PURE__ */ Tt.isValidElement(e) || Wn.isValidElementType(e) || !Oe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = qn(e[r]);
  }), t;
}
function me(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Oe(e) && Oe(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ Tt.isValidElement(t[o]) || Wn.isValidElementType(t[o]) ? n[o] = t[o] : Oe(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Oe(e[o]) ? n[o] = me(e[o], t[o], r) : r.clone ? n[o] = Oe(t[o]) ? qn(t[o]) : t[o] : n[o] = t[o];
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
  function d(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function f(g, E) {
    const p = i.indexOf(E);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(p !== -1 && typeof t[i[p]] == "number" ? t[i[p]] : E) - n / 100}${r})`;
  }
  function u(g) {
    return i.indexOf(g) + 1 < i.length ? f(g, i[i.indexOf(g) + 1]) : a(g);
  }
  function m(g) {
    const E = i.indexOf(g);
    return E === 0 ? a(i[1]) : E === i.length - 1 ? d(i[E]) : f(g, i[i.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: i,
    values: s,
    up: a,
    down: d,
    between: f,
    only: u,
    not: m,
    unit: r,
    ...o
  };
}
function Qr(e, t) {
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
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ae(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(s);
}
function ci(e) {
  const t = (s, i) => s.replace("@media", i ? `@container ${i}` : "@container");
  function r(s, i) {
    s.up = (...a) => t(e.breakpoints.up(...a), i), s.down = (...a) => t(e.breakpoints.down(...a), i), s.between = (...a) => t(e.breakpoints.between(...a), i), s.only = (...a) => t(e.breakpoints.only(...a), i), s.not = (...a) => {
      const d = t(e.breakpoints.not(...a), i);
      return d.includes("not all and") ? d.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : d;
    };
  }
  const n = {}, o = (s) => (r(n, s), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const li = {
  borderRadius: 4
}, ke = process.env.NODE_ENV !== "production" ? Ge.oneOfType([Ge.number, Ge.string, Ge.object, Ge.array]) : {};
function et(e, t) {
  return t ? me(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Rt = {
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
}, Zr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Rt[e]}px)`
}, ui = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Rt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function xe(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || Zr;
    return t.reduce((i, a, d) => (i[s.up(s.keys[d])] = r(t[d]), i), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || Zr;
    return Object.keys(t).reduce((i, a) => {
      if (ii(s.keys, a)) {
        const d = ai(n.containerQueries ? n : ui, a);
        d && (i[d] = r(t[a], a));
      } else if (Object.keys(s.values || Rt).includes(a)) {
        const d = s.up(a);
        i[d] = r(t[a], a);
      } else {
        const d = a;
        i[d] = t[d];
      }
      return i;
    }, {});
  }
  return r(t);
}
function fi(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function en(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function zn(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ae(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function At(e, t, r = !0) {
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
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = At(e, r) || n, t && (o = t(o, n, e)), o;
}
function re(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (i) => {
    if (i[t] == null)
      return null;
    const a = i[t], d = i.theme, f = At(d, n) || {};
    return xe(i, a, (m) => {
      let g = St(f, o, m);
      return m === g && typeof m == "string" && (g = St(f, o, `${t}${m === "default" ? "" : zn(m)}`, m)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ke
  } : {}, s.filterProps = [t], s;
}
function di(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const pi = {
  m: "margin",
  p: "padding"
}, mi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, tn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, hi = di((e) => {
  if (e.length > 2)
    if (tn[e])
      e = tn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = pi[t], o = mi[r] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), _t = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], kt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], gi = [..._t, ...kt];
function at(e, t, r, n) {
  const o = At(e, t, !0) ?? r;
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
function gr(e) {
  return at(e, "spacing", 8, "spacing");
}
function ct(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function yi(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = ct(t, r), n), {});
}
function bi(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = hi(r), s = yi(o, n), i = e[r];
  return xe(e, i, s);
}
function Vn(e, t) {
  const r = gr(e.theme);
  return Object.keys(e).map((n) => bi(e, t, n, r)).reduce(et, {});
}
function Q(e) {
  return Vn(e, _t);
}
Q.propTypes = process.env.NODE_ENV !== "production" ? _t.reduce((e, t) => (e[t] = ke, e), {}) : {};
Q.filterProps = _t;
function Z(e) {
  return Vn(e, kt);
}
Z.propTypes = process.env.NODE_ENV !== "production" ? kt.reduce((e, t) => (e[t] = ke, e), {}) : {};
Z.filterProps = kt;
process.env.NODE_ENV !== "production" && gi.reduce((e, t) => (e[t] = ke, e), {});
function Hn(e = 8, t = gr({
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
function Pt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, s) => t[s] ? et(o, t[s](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function he(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ye(e, t) {
  return re({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ei = ye("border", he), Si = ye("borderTop", he), Ti = ye("borderRight", he), wi = ye("borderBottom", he), Ci = ye("borderLeft", he), xi = ye("borderColor"), vi = ye("borderTopColor"), Oi = ye("borderRightColor"), Ri = ye("borderBottomColor"), Ai = ye("borderLeftColor"), _i = ye("outline", he), ki = ye("outlineColor"), $t = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = at(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: ct(t, n)
    });
    return xe(e, e.borderRadius, r);
  }
  return null;
};
$t.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ke
} : {};
$t.filterProps = ["borderRadius"];
Pt(Ei, Si, Ti, wi, Ci, xi, vi, Oi, Ri, Ai, $t, _i, ki);
const Nt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = at(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: ct(t, n)
    });
    return xe(e, e.gap, r);
  }
  return null;
};
Nt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ke
} : {};
Nt.filterProps = ["gap"];
const It = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = at(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: ct(t, n)
    });
    return xe(e, e.columnGap, r);
  }
  return null;
};
It.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ke
} : {};
It.filterProps = ["columnGap"];
const Dt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = at(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: ct(t, n)
    });
    return xe(e, e.rowGap, r);
  }
  return null;
};
Dt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ke
} : {};
Dt.filterProps = ["rowGap"];
const Pi = re({
  prop: "gridColumn"
}), $i = re({
  prop: "gridRow"
}), Ni = re({
  prop: "gridAutoFlow"
}), Ii = re({
  prop: "gridAutoColumns"
}), Di = re({
  prop: "gridAutoRows"
}), Bi = re({
  prop: "gridTemplateColumns"
}), Fi = re({
  prop: "gridTemplateRows"
}), Li = re({
  prop: "gridTemplateAreas"
}), Ui = re({
  prop: "gridArea"
});
Pt(Nt, It, Dt, Pi, $i, Ni, Ii, Di, Bi, Fi, Li, Ui);
function qe(e, t) {
  return t === "grey" ? t : e;
}
const Mi = re({
  prop: "color",
  themeKey: "palette",
  transform: qe
}), ji = re({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: qe
}), Wi = re({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: qe
});
Pt(Mi, ji, Wi);
function pe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const qi = re({
  prop: "width",
  transform: pe
}), yr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || Rt[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: pe(r)
      };
    };
    return xe(e, e.maxWidth, t);
  }
  return null;
};
yr.filterProps = ["maxWidth"];
const zi = re({
  prop: "minWidth",
  transform: pe
}), Vi = re({
  prop: "height",
  transform: pe
}), Hi = re({
  prop: "maxHeight",
  transform: pe
}), Yi = re({
  prop: "minHeight",
  transform: pe
});
re({
  prop: "size",
  cssProperty: "width",
  transform: pe
});
re({
  prop: "size",
  cssProperty: "height",
  transform: pe
});
const Gi = re({
  prop: "boxSizing"
});
Pt(qi, yr, zi, Vi, Hi, Yi, Gi);
const Bt = {
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
    transform: qe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: qe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: qe
  },
  // spacing
  p: {
    style: Z
  },
  pt: {
    style: Z
  },
  pr: {
    style: Z
  },
  pb: {
    style: Z
  },
  pl: {
    style: Z
  },
  px: {
    style: Z
  },
  py: {
    style: Z
  },
  padding: {
    style: Z
  },
  paddingTop: {
    style: Z
  },
  paddingRight: {
    style: Z
  },
  paddingBottom: {
    style: Z
  },
  paddingLeft: {
    style: Z
  },
  paddingX: {
    style: Z
  },
  paddingY: {
    style: Z
  },
  paddingInline: {
    style: Z
  },
  paddingInlineStart: {
    style: Z
  },
  paddingInlineEnd: {
    style: Z
  },
  paddingBlock: {
    style: Z
  },
  paddingBlockStart: {
    style: Z
  },
  paddingBlockEnd: {
    style: Z
  },
  m: {
    style: Q
  },
  mt: {
    style: Q
  },
  mr: {
    style: Q
  },
  mb: {
    style: Q
  },
  ml: {
    style: Q
  },
  mx: {
    style: Q
  },
  my: {
    style: Q
  },
  margin: {
    style: Q
  },
  marginTop: {
    style: Q
  },
  marginRight: {
    style: Q
  },
  marginBottom: {
    style: Q
  },
  marginLeft: {
    style: Q
  },
  marginX: {
    style: Q
  },
  marginY: {
    style: Q
  },
  marginInline: {
    style: Q
  },
  marginInlineStart: {
    style: Q
  },
  marginInlineEnd: {
    style: Q
  },
  marginBlock: {
    style: Q
  },
  marginBlockStart: {
    style: Q
  },
  marginBlockEnd: {
    style: Q
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
    style: Nt
  },
  rowGap: {
    style: Dt
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
    transform: pe
  },
  maxWidth: {
    style: yr
  },
  minWidth: {
    transform: pe
  },
  height: {
    transform: pe
  },
  maxHeight: {
    transform: pe
  },
  minHeight: {
    transform: pe
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
      cssProperty: d = r,
      themeKey: f,
      transform: u,
      style: m
    } = a;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = At(o, f) || {};
    return m ? m(i) : xe(i, n, (p) => {
      let l = St(g, u, p);
      return p === l && typeof p == "string" && (l = St(g, u, `${r}${p === "default" ? "" : zn(p)}`, p)), d === !1 ? l : {
        [d]: l
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
    const i = o.unstable_sxConfig ?? Bt;
    function a(d) {
      let f = d;
      if (typeof d == "function")
        f = d(o);
      else if (typeof d != "object")
        return d;
      if (!f)
        return null;
      const u = fi(o.breakpoints), m = Object.keys(u);
      let g = u;
      return Object.keys(f).forEach((E) => {
        const p = Ji(f[E], o);
        if (p != null)
          if (typeof p == "object")
            if (i[E])
              g = et(g, e(E, p, o, i));
            else {
              const l = xe({
                theme: o
              }, p, (y) => ({
                [E]: y
              }));
              Ki(l, p) ? g[E] = t({
                sx: p,
                theme: o,
                nested: !0
              }) : g = et(g, l);
            }
          else
            g = et(g, e(E, p, o, i));
      }), !s && o.modularCssLayers ? {
        "@layer sx": Qr(o, en(m, g))
      } : Qr(o, en(m, g));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const Ft = Xi();
Ft.filterProps = ["sx"];
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
function Yn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: s = {},
    ...i
  } = e, a = si(r), d = Hn(o);
  let f = me({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: d,
    shape: {
      ...li,
      ...s
    }
  }, i);
  return f = ci(f), f.applyStyles = Qi, f = t.reduce((u, m) => me(u, m), f), f.unstable_sxConfig = {
    ...Bt,
    ...i?.unstable_sxConfig
  }, f.unstable_sx = function(m) {
    return Ft({
      sx: m,
      theme: this
    });
  }, f;
}
function Zi(e) {
  return Object.keys(e).length === 0;
}
function ea(e = null) {
  const t = Tt.useContext(io);
  return !t || Zi(t) ? e : t;
}
const ta = Yn();
function ra(e = ta) {
  return ea(e);
}
const rn = (e) => e, na = () => {
  let e = rn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = rn;
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
function br(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), aa(e, t, r);
}
function ca(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function _e(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return _e(ca(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ae(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ae(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const la = (e) => {
  const t = _e(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Xe = (e, t) => {
  try {
    return la(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Lt(e) {
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
  e = _e(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, s = n * Math.min(o, 1 - o), i = (f, u = (f + r / 30) % 12) => o - s * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = "rgb";
  const d = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (a += "a", d.push(t[3])), Lt({
    type: a,
    values: d
  });
}
function sr(e) {
  e = _e(e);
  let t = e.type === "hsl" || e.type === "hsla" ? _e(Gn(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function nn(e, t) {
  const r = sr(e), n = sr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Kn(e, t) {
  return e = _e(e), t = br(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Lt(e);
}
function Pe(e, t, r) {
  try {
    return Kn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ut(e, t) {
  if (e = _e(e), t = br(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Lt(e);
}
function Y(e, t, r) {
  try {
    return Ut(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Mt(e, t) {
  if (e = _e(e), t = br(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Lt(e);
}
function G(e, t, r) {
  try {
    return Mt(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ua(e, t = 0.15) {
  return sr(e) > 0.5 ? Ut(e, t) : Mt(e, t);
}
function ht(e, t, r) {
  try {
    return ua(e, t);
  } catch {
    return e;
  }
}
function fa(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const on = (e, t, r, n = []) => {
  let o = e;
  t.forEach((s, i) => {
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = r : o && typeof o == "object" && (o[s] = r) : o && typeof o == "object" && (o[s] || (o[s] = n.includes(s) ? [] : {}), o = o[s]);
  });
}, da = (e, t, r) => {
  function n(o, s = [], i = []) {
    Object.entries(o).forEach(([a, d]) => {
      (!r || r && !r([...s, a])) && d != null && (typeof d == "object" && Object.keys(d).length > 0 ? n(d, [...s, a], Array.isArray(d) ? [...i, a] : i) : t([...s, a], d, i));
    });
  }
  n(e);
}, pa = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Jt(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, s = {}, i = {};
  return da(
    e,
    (a, d, f) => {
      if ((typeof d == "string" || typeof d == "number") && (!n || !n(a, d))) {
        const u = `--${r ? `${r}-` : ""}${a.join("-")}`, m = pa(a, d);
        Object.assign(o, {
          [u]: m
        }), on(s, a, `var(${u})`, f), on(i, a, `var(${u}, ${m})`, f);
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
function ma(e, t = {}) {
  const {
    getSelector: r = R,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: s
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: d = "light",
    ...f
  } = e, {
    vars: u,
    css: m,
    varsWithDefaults: g
  } = Jt(f, t);
  let E = g;
  const p = {}, {
    [d]: l,
    ...y
  } = i;
  if (Object.entries(y || {}).forEach(([C, S]) => {
    const {
      vars: x,
      css: F,
      varsWithDefaults: ne
    } = Jt(S, t);
    E = me(E, ne), p[C] = {
      css: F,
      vars: x
    };
  }), l) {
    const {
      css: C,
      vars: S,
      varsWithDefaults: x
    } = Jt(l, t);
    E = me(E, x), p[d] = {
      css: C,
      vars: S
    };
  }
  function R(C, S) {
    let x = o;
    if (o === "class" && (x = ".%s"), o === "data" && (x = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (x = `[${o}="%s"]`), C) {
      if (x === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${i[C]?.palette?.mode || C})`]: {
            ":root": S
          }
        };
      if (x)
        return e.defaultColorScheme === C ? `:root, ${x.replace("%s", String(C))}` : x.replace("%s", String(C));
    }
    return ":root";
  }
  return {
    vars: E,
    generateThemeVars: () => {
      let C = {
        ...u
      };
      return Object.entries(p).forEach(([, {
        vars: S
      }]) => {
        C = me(C, S);
      }), C;
    },
    generateStyleSheets: () => {
      const C = [], S = e.defaultColorScheme || "light";
      function x(oe, ie) {
        Object.keys(ie).length && C.push(typeof oe == "string" ? {
          [oe]: {
            ...ie
          }
        } : oe);
      }
      x(r(void 0, {
        ...m
      }), m);
      const {
        [S]: F,
        ...ne
      } = p;
      if (F) {
        const {
          css: oe
        } = F, ie = i[S]?.palette?.mode, ee = !n && ie ? {
          colorScheme: ie,
          ...oe
        } : {
          ...oe
        };
        x(r(S, {
          ...ee
        }), ee);
      }
      return Object.entries(ne).forEach(([oe, {
        css: ie
      }]) => {
        const ee = i[oe]?.palette?.mode, c = !n && ee ? {
          colorScheme: ee,
          ...ie
        } : {
          ...ie
        };
        x(r(oe, {
          ...c
        }), c);
      }), s && C.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), C;
    }
  };
}
function ha(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const rt = {
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
}, Ke = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ue = {
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
function Jn() {
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
      paper: rt.white,
      default: rt.white
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
const Xn = Jn();
function Qn() {
  return {
    text: {
      primary: rt.white,
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
      active: rt.white,
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
const ir = Qn();
function sn(e, t, r, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Mt(e.main, o) : t === "dark" && (e.dark = Ut(e.main, s)));
}
function an(e, t, r, n, o) {
  const s = o.light || o, i = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(i * 100).toFixed(0)}%)`));
}
function ya(e = "light") {
  return e === "dark" ? {
    main: Ue[200],
    light: Ue[50],
    dark: Ue[400]
  } : {
    main: Ue[700],
    light: Ue[400],
    dark: Ue[800]
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
    main: Ke[400],
    light: Ke[300],
    dark: Ke[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ke[500],
    dark: Ke[900]
  };
}
function Ca(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Er(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...s
  } = e, i = e.primary || ya(t), a = e.secondary || ba(t), d = e.error || Ea(t), f = e.info || Sa(t), u = e.success || Ta(t), m = e.warning || wa(t);
  function g(y) {
    if (o)
      return Ca(y);
    const R = nn(y, ir.text.primary) >= r ? ir.text.primary : Xn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const k = nn(y, R);
      k < 3 && console.error([`MUI: The contrast ratio of ${k}:1 for ${R} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return R;
  }
  const E = ({
    color: y,
    name: R,
    mainShade: k = 500,
    lightShade: _ = 300,
    darkShade: C = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[k] && (y.main = y[k]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${k}\` property.` : Ae(11, R ? ` (${R})` : "", k));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ae(12, R ? ` (${R})` : "", JSON.stringify(y.main)));
    return o ? (an(o, y, "light", _, n), an(o, y, "dark", C, n)) : (sn(y, "light", _, n), sn(y, "dark", C, n)), y.contrastText || (y.contrastText = g(y.main)), y;
  };
  let p;
  return t === "light" ? p = Jn() : t === "dark" && (p = Qn()), process.env.NODE_ENV !== "production" && (p || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), me({
    // A collection of common colors.
    common: {
      ...rt
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
      color: d,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: E({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: E({
      color: f,
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
    ...p
  }, s);
}
function xa(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, s] = n;
    typeof s == "object" && (t[o] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function va(e, t) {
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
function Oa(e) {
  return Math.round(e * 1e5) / 1e5;
}
const cn = {
  textTransform: "uppercase"
}, ln = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ra(e, t) {
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
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: u,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, E = u || ((y) => `${y / d * g}rem`), p = (y, R, k, _, C) => ({
    fontFamily: r,
    fontWeight: y,
    fontSize: E(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ln ? {
      letterSpacing: `${Oa(_ / R)}em`
    } : {},
    ...C,
    ...f
  }), l = {
    h1: p(o, 96, 1.167, -1.5),
    h2: p(o, 60, 1.2, -0.5),
    h3: p(s, 48, 1.167, 0),
    h4: p(s, 34, 1.235, 0.25),
    h5: p(s, 24, 1.334, 0),
    h6: p(i, 20, 1.6, 0.15),
    subtitle1: p(s, 16, 1.75, 0.15),
    subtitle2: p(i, 14, 1.57, 0.1),
    body1: p(s, 16, 1.5, 0.15),
    body2: p(s, 14, 1.43, 0.15),
    button: p(i, 14, 1.75, 0.4, cn),
    caption: p(s, 12, 1.66, 0.4),
    overline: p(s, 12, 2.66, 1, cn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return me({
    htmlFontSize: d,
    pxToRem: E,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: i,
    fontWeightBold: a,
    ...l
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Aa = 0.2, _a = 0.14, ka = 0.12;
function X(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Aa})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${_a})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ka})`].join(",");
}
const Pa = ["none", X(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), X(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), X(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), X(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), X(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), X(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), X(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), X(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), X(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), X(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), X(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), X(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), X(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), X(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), X(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), X(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), X(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), X(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), X(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), X(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), X(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), X(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), X(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), X(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], $a = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Na = {
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
function un(e) {
  return `${Math.round(e)}ms`;
}
function Ia(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Da(e) {
  const t = {
    ...$a,
    ...e.easing
  }, r = {
    ...Na,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Ia,
    create: (o = ["all"], s = {}) => {
      const {
        duration: i = r.standard,
        easing: a = t.easeInOut,
        delay: d = 0,
        ...f
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const u = (g) => typeof g == "string", m = (g) => !Number.isNaN(parseFloat(g));
        !u(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(i) && !u(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), u(a) || console.error('MUI: Argument "easing" must be a string.'), !m(d) && !u(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof i == "string" ? i : un(i)} ${a} ${typeof d == "string" ? d : un(d)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Ba = {
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
  return Oe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Zn(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let s = 0; s < o.length; s++) {
      const [i, a] = o[s];
      !Fa(a) || i.startsWith("unstable_") ? delete n[i] : Oe(a) && (n[i] = {
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
function fn(e) {
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
function Ua(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : Kn(t, La(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${fn(r)})` : Mt(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${fn(r)})` : Ut(t, r);
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
    shape: d,
    colorSpace: f,
    ...u
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ae(20));
  const m = Er({
    ...s,
    colorSpace: f
  }), g = Yn(e);
  let E = me(g, {
    mixins: va(g.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Pa.slice(),
    typography: Ra(m, a),
    transitions: Da(i),
    zIndex: {
      ...Ba
    }
  });
  if (E = me(E, u), E = t.reduce((p, l) => me(p, l), E), process.env.NODE_ENV !== "production") {
    const p = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], l = (y, R) => {
      let k;
      for (k in y) {
        const _ = y[k];
        if (p.includes(k) && Object.keys(_).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const C = ia("", k);
            console.error([`MUI: The \`${R}\` component increases the CSS specificity of the \`${k}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${C}' syntax:`, JSON.stringify({
              root: {
                [`&.${C}`]: _
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[k] = {};
        }
      }
    };
    Object.keys(E.components).forEach((y) => {
      const R = E.components[y].styleOverrides;
      R && y.startsWith("Mui") && l(R, y);
    });
  }
  return E.unstable_sxConfig = {
    ...Bt,
    ...u?.unstable_sxConfig
  }, E.unstable_sx = function(l) {
    return Ft({
      sx: l,
      theme: this
    });
  }, E.toRuntimeSource = Zn, Ua(E), E;
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
function eo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function to(e) {
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
  } = e, i = Er({
    ...t,
    colorSpace: o
  });
  return {
    palette: i,
    opacity: {
      ...eo(i.mode),
      ...r
    },
    overlays: n || to(i.mode),
    ...s
  };
}
function qa(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const za = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Va = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let s = o;
  if (o === "class" && (s = ".%s"), o === "data" && (s = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (s = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const i = {};
      return za(e.cssVarPrefix).forEach((a) => {
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
function Qe(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Gn(e);
}
function Ce(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Xe(Qe(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ya(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Te = (e) => {
  try {
    return e();
  } catch {
  }
}, Ga = (e = "mui") => fa(e);
function Xt(e, t, r, n, o) {
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
      ...eo(s),
      ...r?.opacity
    },
    overlays: r?.overlays || to(s)
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
    shouldSkipGeneratingVar: a = qa,
    colorSchemeSelector: d = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...u
  } = e, m = Object.keys(r)[0], g = n || (r.light && m !== "light" ? "light" : m), E = Ga(s), {
    [g]: p,
    light: l,
    dark: y,
    ...R
  } = r, k = {
    ...R
  };
  let _ = p;
  if ((g === "dark" && !("dark" in r) || g === "light" && !("light" in r)) && (_ = !0), !_)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : Ae(21, g));
  let C;
  i && (C = "oklch");
  const S = Xt(C, k, _, u, g);
  l && !k.light && Xt(C, k, l, void 0, "light"), y && !k.dark && Xt(C, k, y, void 0, "dark");
  let x = {
    defaultColorScheme: g,
    ...S,
    cssVarPrefix: s,
    colorSchemeSelector: d,
    rootSelector: f,
    getCssVar: E,
    colorSchemes: k,
    font: {
      ...xa(S.typography),
      ...S.font
    },
    spacing: Ya(u.spacing)
  };
  Object.keys(x.colorSchemes).forEach((ee) => {
    const c = x.colorSchemes[ee].palette, A = (j) => {
      const D = j.split("-"), ae = D[1], se = D[2];
      return E(j, c[ae][se]);
    };
    c.mode === "light" && (b(c.common, "background", "#fff"), b(c.common, "onBackground", "#000")), c.mode === "dark" && (b(c.common, "background", "#000"), b(c.common, "onBackground", "#fff"));
    function w(j, D, ae) {
      if (C) {
        let se;
        return j === Pe && (se = `transparent ${((1 - ae) * 100).toFixed(0)}%`), j === Y && (se = `#000 ${(ae * 100).toFixed(0)}%`), j === G && (se = `#fff ${(ae * 100).toFixed(0)}%`), `color-mix(in ${C}, ${D}, ${se})`;
      }
      return j(D, ae);
    }
    if (Ha(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      b(c.Alert, "errorColor", w(Y, c.error.light, 0.6)), b(c.Alert, "infoColor", w(Y, c.info.light, 0.6)), b(c.Alert, "successColor", w(Y, c.success.light, 0.6)), b(c.Alert, "warningColor", w(Y, c.warning.light, 0.6)), b(c.Alert, "errorFilledBg", A("palette-error-main")), b(c.Alert, "infoFilledBg", A("palette-info-main")), b(c.Alert, "successFilledBg", A("palette-success-main")), b(c.Alert, "warningFilledBg", A("palette-warning-main")), b(c.Alert, "errorFilledColor", Te(() => c.getContrastText(c.error.main))), b(c.Alert, "infoFilledColor", Te(() => c.getContrastText(c.info.main))), b(c.Alert, "successFilledColor", Te(() => c.getContrastText(c.success.main))), b(c.Alert, "warningFilledColor", Te(() => c.getContrastText(c.warning.main))), b(c.Alert, "errorStandardBg", w(G, c.error.light, 0.9)), b(c.Alert, "infoStandardBg", w(G, c.info.light, 0.9)), b(c.Alert, "successStandardBg", w(G, c.success.light, 0.9)), b(c.Alert, "warningStandardBg", w(G, c.warning.light, 0.9)), b(c.Alert, "errorIconColor", A("palette-error-main")), b(c.Alert, "infoIconColor", A("palette-info-main")), b(c.Alert, "successIconColor", A("palette-success-main")), b(c.Alert, "warningIconColor", A("palette-warning-main")), b(c.AppBar, "defaultBg", A("palette-grey-100")), b(c.Avatar, "defaultBg", A("palette-grey-400")), b(c.Button, "inheritContainedBg", A("palette-grey-300")), b(c.Button, "inheritContainedHoverBg", A("palette-grey-A100")), b(c.Chip, "defaultBorder", A("palette-grey-400")), b(c.Chip, "defaultAvatarColor", A("palette-grey-700")), b(c.Chip, "defaultIconColor", A("palette-grey-700")), b(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), b(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), b(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), b(c.LinearProgress, "primaryBg", w(G, c.primary.main, 0.62)), b(c.LinearProgress, "secondaryBg", w(G, c.secondary.main, 0.62)), b(c.LinearProgress, "errorBg", w(G, c.error.main, 0.62)), b(c.LinearProgress, "infoBg", w(G, c.info.main, 0.62)), b(c.LinearProgress, "successBg", w(G, c.success.main, 0.62)), b(c.LinearProgress, "warningBg", w(G, c.warning.main, 0.62)), b(c.Skeleton, "bg", C ? w(Pe, c.text.primary, 0.11) : `rgba(${A("palette-text-primaryChannel")} / 0.11)`), b(c.Slider, "primaryTrack", w(G, c.primary.main, 0.62)), b(c.Slider, "secondaryTrack", w(G, c.secondary.main, 0.62)), b(c.Slider, "errorTrack", w(G, c.error.main, 0.62)), b(c.Slider, "infoTrack", w(G, c.info.main, 0.62)), b(c.Slider, "successTrack", w(G, c.success.main, 0.62)), b(c.Slider, "warningTrack", w(G, c.warning.main, 0.62));
      const j = C ? w(Y, c.background.default, 0.6825) : ht(c.background.default, 0.8);
      b(c.SnackbarContent, "bg", j), b(c.SnackbarContent, "color", Te(() => C ? ir.text.primary : c.getContrastText(j))), b(c.SpeedDialAction, "fabHoverBg", ht(c.background.paper, 0.15)), b(c.StepConnector, "border", A("palette-grey-400")), b(c.StepContent, "border", A("palette-grey-400")), b(c.Switch, "defaultColor", A("palette-common-white")), b(c.Switch, "defaultDisabledColor", A("palette-grey-100")), b(c.Switch, "primaryDisabledColor", w(G, c.primary.main, 0.62)), b(c.Switch, "secondaryDisabledColor", w(G, c.secondary.main, 0.62)), b(c.Switch, "errorDisabledColor", w(G, c.error.main, 0.62)), b(c.Switch, "infoDisabledColor", w(G, c.info.main, 0.62)), b(c.Switch, "successDisabledColor", w(G, c.success.main, 0.62)), b(c.Switch, "warningDisabledColor", w(G, c.warning.main, 0.62)), b(c.TableCell, "border", w(G, w(Pe, c.divider, 1), 0.88)), b(c.Tooltip, "bg", w(Pe, c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      b(c.Alert, "errorColor", w(G, c.error.light, 0.6)), b(c.Alert, "infoColor", w(G, c.info.light, 0.6)), b(c.Alert, "successColor", w(G, c.success.light, 0.6)), b(c.Alert, "warningColor", w(G, c.warning.light, 0.6)), b(c.Alert, "errorFilledBg", A("palette-error-dark")), b(c.Alert, "infoFilledBg", A("palette-info-dark")), b(c.Alert, "successFilledBg", A("palette-success-dark")), b(c.Alert, "warningFilledBg", A("palette-warning-dark")), b(c.Alert, "errorFilledColor", Te(() => c.getContrastText(c.error.dark))), b(c.Alert, "infoFilledColor", Te(() => c.getContrastText(c.info.dark))), b(c.Alert, "successFilledColor", Te(() => c.getContrastText(c.success.dark))), b(c.Alert, "warningFilledColor", Te(() => c.getContrastText(c.warning.dark))), b(c.Alert, "errorStandardBg", w(Y, c.error.light, 0.9)), b(c.Alert, "infoStandardBg", w(Y, c.info.light, 0.9)), b(c.Alert, "successStandardBg", w(Y, c.success.light, 0.9)), b(c.Alert, "warningStandardBg", w(Y, c.warning.light, 0.9)), b(c.Alert, "errorIconColor", A("palette-error-main")), b(c.Alert, "infoIconColor", A("palette-info-main")), b(c.Alert, "successIconColor", A("palette-success-main")), b(c.Alert, "warningIconColor", A("palette-warning-main")), b(c.AppBar, "defaultBg", A("palette-grey-900")), b(c.AppBar, "darkBg", A("palette-background-paper")), b(c.AppBar, "darkColor", A("palette-text-primary")), b(c.Avatar, "defaultBg", A("palette-grey-600")), b(c.Button, "inheritContainedBg", A("palette-grey-800")), b(c.Button, "inheritContainedHoverBg", A("palette-grey-700")), b(c.Chip, "defaultBorder", A("palette-grey-700")), b(c.Chip, "defaultAvatarColor", A("palette-grey-300")), b(c.Chip, "defaultIconColor", A("palette-grey-300")), b(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), b(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), b(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), b(c.LinearProgress, "primaryBg", w(Y, c.primary.main, 0.5)), b(c.LinearProgress, "secondaryBg", w(Y, c.secondary.main, 0.5)), b(c.LinearProgress, "errorBg", w(Y, c.error.main, 0.5)), b(c.LinearProgress, "infoBg", w(Y, c.info.main, 0.5)), b(c.LinearProgress, "successBg", w(Y, c.success.main, 0.5)), b(c.LinearProgress, "warningBg", w(Y, c.warning.main, 0.5)), b(c.Skeleton, "bg", C ? w(Pe, c.text.primary, 0.13) : `rgba(${A("palette-text-primaryChannel")} / 0.13)`), b(c.Slider, "primaryTrack", w(Y, c.primary.main, 0.5)), b(c.Slider, "secondaryTrack", w(Y, c.secondary.main, 0.5)), b(c.Slider, "errorTrack", w(Y, c.error.main, 0.5)), b(c.Slider, "infoTrack", w(Y, c.info.main, 0.5)), b(c.Slider, "successTrack", w(Y, c.success.main, 0.5)), b(c.Slider, "warningTrack", w(Y, c.warning.main, 0.5));
      const j = C ? w(G, c.background.default, 0.985) : ht(c.background.default, 0.98);
      b(c.SnackbarContent, "bg", j), b(c.SnackbarContent, "color", Te(() => C ? Xn.text.primary : c.getContrastText(j))), b(c.SpeedDialAction, "fabHoverBg", ht(c.background.paper, 0.15)), b(c.StepConnector, "border", A("palette-grey-600")), b(c.StepContent, "border", A("palette-grey-600")), b(c.Switch, "defaultColor", A("palette-grey-300")), b(c.Switch, "defaultDisabledColor", A("palette-grey-600")), b(c.Switch, "primaryDisabledColor", w(Y, c.primary.main, 0.55)), b(c.Switch, "secondaryDisabledColor", w(Y, c.secondary.main, 0.55)), b(c.Switch, "errorDisabledColor", w(Y, c.error.main, 0.55)), b(c.Switch, "infoDisabledColor", w(Y, c.info.main, 0.55)), b(c.Switch, "successDisabledColor", w(Y, c.success.main, 0.55)), b(c.Switch, "warningDisabledColor", w(Y, c.warning.main, 0.55)), b(c.TableCell, "border", w(Y, w(Pe, c.divider, 1), 0.68)), b(c.Tooltip, "bg", w(Pe, c.grey[700], 0.92));
    }
    Ce(c.background, "default"), Ce(c.background, "paper"), Ce(c.common, "background"), Ce(c.common, "onBackground"), Ce(c, "divider"), Object.keys(c).forEach((j) => {
      const D = c[j];
      j !== "tonalOffset" && D && typeof D == "object" && (D.main && b(c[j], "mainChannel", Xe(Qe(D.main))), D.light && b(c[j], "lightChannel", Xe(Qe(D.light))), D.dark && b(c[j], "darkChannel", Xe(Qe(D.dark))), D.contrastText && b(c[j], "contrastTextChannel", Xe(Qe(D.contrastText))), j === "text" && (Ce(c[j], "primary"), Ce(c[j], "secondary")), j === "action" && (D.active && Ce(c[j], "active"), D.selected && Ce(c[j], "selected")));
    });
  }), x = t.reduce((ee, c) => me(ee, c), x);
  const F = {
    prefix: s,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Va(x),
    enableContrastVars: i
  }, {
    vars: ne,
    generateThemeVars: oe,
    generateStyleSheets: ie
  } = ma(x, F);
  return x.vars = ne, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([ee, c]) => {
    x[ee] = c;
  }), x.generateThemeVars = oe, x.generateStyleSheets = ie, x.generateSpacing = function() {
    return Hn(u.spacing, gr(this));
  }, x.getColorSchemeSelector = ha(d), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = a, x.unstable_sxConfig = {
    ...Bt,
    ...u?.unstable_sxConfig
  }, x.unstable_sx = function(c) {
    return Ft({
      sx: c,
      theme: this
    });
  }, x.toRuntimeSource = Zn, x;
}
function dn(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Er({
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
  } = e, a = s || "light", d = o?.[a], f = {
    ...o,
    ...r ? {
      [a]: {
        ...typeof d != "boolean" && d,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return ar(e, ...t);
    let u = r;
    "palette" in e || f[a] && (f[a] !== !0 ? u = f[a].palette : a === "dark" && (u = {
      mode: "dark"
    }));
    const m = ar({
      ...e,
      palette: u
    }, ...t);
    return m.defaultColorScheme = a, m.colorSchemes = f, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: m.palette
    }, dn(m, "dark", f.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: m.palette
    }, dn(m, "light", f.light)), m;
  }
  return !r && !("light" in f) && a === "light" && (f.light = !0), Ka({
    ...i,
    colorSchemes: f,
    defaultColorScheme: a,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Xa = Ja();
function ro() {
  const e = ra(Xa);
  return process.env.NODE_ENV !== "production" && Tt.useDebugValue(e), e[Vs] || e;
}
const pn = ({
  brandConfig: e,
  title: t,
  subtitle: r
}) => {
  const n = ro();
  return /* @__PURE__ */ ue(ge, { sx: { textAlign: "center", mb: 4 }, children: [
    e.logo && /* @__PURE__ */ $(ge, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ $(
      "img",
      {
        src: e.logo,
        alt: e.companyName || "Company Logo",
        style: {
          height: e.logoHeight,
          maxWidth: "100%",
          objectFit: "contain"
        }
      }
    ) : e.logo }),
    t && /* @__PURE__ */ $(
      Ie,
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
      }
    ),
    r && /* @__PURE__ */ $(
      Ie,
      {
        variant: "body1",
        sx: {
          color: e.textColor,
          opacity: 0.7,
          fontSize: "0.95rem"
        },
        children: r
      }
    )
  ] });
};
function no(e, t, r) {
  return r === void 0 && (r = {}), function(n, o, s) {
    try {
      return Promise.resolve((function(i, a) {
        try {
          var d = (t != null && t.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(e[r.mode === "sync" ? "validateSync" : "validate"](n, Object.assign({ abortEarly: !1 }, t, { context: o }))).then(function(f) {
            return s.shouldUseNativeValidation && co({}, s), { values: r.raw ? Object.assign({}, n) : f, errors: {} };
          }));
        } catch (f) {
          return a(f);
        }
        return d && d.then ? d.then(void 0, a) : d;
      })(0, function(i) {
        if (!i.inner) throw i;
        return { values: {}, errors: lo((a = i, d = !s.shouldUseNativeValidation && s.criteriaMode === "all", (a.inner || []).reduce(function(f, u) {
          if (f[u.path] || (f[u.path] = { message: u.message, type: u.type }), d) {
            var m = f[u.path].types, g = m && m[u.type];
            f[u.path] = ao(u.path, d, f, u.type, g ? [].concat(g, u.message) : u.message);
          }
          return f;
        }, {})), s) };
        var a, d;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const Qa = Ze.object({
  email: Ze.string().email("Please enter a valid email address").required("Email is required"),
  password: Ze.string().min(6, "Password must be at least 6 characters").required("Password is required")
}), Za = ({
  brandConfig: e,
  loginState: t,
  onSubmit: r,
  onForgetPassword: n,
  enableForgetPassword: o = !0
}) => {
  const s = ro(), [i, a] = tt(!1), {
    register: d,
    handleSubmit: f,
    formState: { errors: u }
  } = hn({
    resolver: no(Qa)
  }), m = t === "loading" || t === "google-loading", g = {
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
  return /* @__PURE__ */ $(ge, { component: "form", onSubmit: f(r), children: /* @__PURE__ */ ue(lr, { spacing: 3, children: [
    /* @__PURE__ */ ue(Tr, { fullWidth: !0, children: [
      /* @__PURE__ */ $(
        wr,
        {
          htmlFor: "lumora-email",
          sx: { color: "#5f676d", fontWeight: 700, mb: 0.5 },
          children: "Email Address"
        }
      ),
      /* @__PURE__ */ $(
        er,
        {
          ...d("email"),
          fullWidth: !0,
          id: "lumora-email",
          type: "email",
          placeholder: "Enter your email",
          error: !!u.email,
          helperText: u.email?.message,
          disabled: m,
          sx: g
        }
      )
    ] }),
    /* @__PURE__ */ ue(Tr, { fullWidth: !0, children: [
      /* @__PURE__ */ $(
        wr,
        {
          htmlFor: "lumora-password",
          sx: { color: "#5f676d", fontWeight: 700, mb: 0.5 },
          children: "Password"
        }
      ),
      /* @__PURE__ */ $(
        er,
        {
          ...d("password"),
          fullWidth: !0,
          id: "lumora-password",
          type: i ? "text" : "password",
          placeholder: "Enter your password",
          error: !!u.password,
          helperText: u.password?.message,
          disabled: m,
          sx: g,
          slotProps: {
            input: {
              endAdornment: /* @__PURE__ */ $(
                Re,
                {
                  size: "small",
                  onClick: () => a(!i),
                  disabled: m,
                  sx: {
                    color: e.primaryColor,
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: `${e.primaryColor}10`
                    }
                  },
                  children: i ? "Hide" : "Show"
                }
              )
            }
          }
        }
      )
    ] }),
    /* @__PURE__ */ $(
      Re,
      {
        type: "submit",
        fullWidth: !0,
        variant: "contained",
        size: "large",
        disabled: m,
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
        children: t === "loading" ? /* @__PURE__ */ $(ur, { size: 24, color: "inherit" }) : "Sign In"
      }
    ),
    o && n && /* @__PURE__ */ $(ge, { textAlign: "center", sx: { mt: 1 }, children: /* @__PURE__ */ $(
      Re,
      {
        variant: "text",
        onClick: n,
        disabled: m,
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
      }
    ) })
  ] }) });
}, ec = ({
  brandConfig: e,
  loginState: t,
  onClick: r,
  showDivider: n = !1
}) => {
  const o = t === "loading" || t === "google-loading";
  return /* @__PURE__ */ ue(cr, { children: [
    n && /* @__PURE__ */ $(so, { sx: { my: 1 }, children: /* @__PURE__ */ $(
      Ie,
      {
        variant: "body2",
        sx: {
          color: e.textColor,
          opacity: 0.6,
          px: 2,
          fontWeight: 500
        },
        children: "OR"
      }
    ) }),
    /* @__PURE__ */ $(
      Re,
      {
        fullWidth: !0,
        variant: "outlined",
        size: "large",
        startIcon: t === "google-loading" ? /* @__PURE__ */ $(ur, { size: 20, color: "inherit" }) : /* @__PURE__ */ $(uo, {}),
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
      }
    )
  ] });
}, tc = Ze.object({
  email: Ze.string().email("Please enter a valid email address").required("Email is required")
}), rc = ({
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
    formState: { errors: d }
  } = hn({
    resolver: no(tc)
  }), f = t === "forget-password-loading";
  return /* @__PURE__ */ ue(cr, { children: [
    r && /* @__PURE__ */ $(mn, { severity: "error", sx: { mb: 3 }, onClose: s, children: r.message }),
    /* @__PURE__ */ ue(ge, { sx: { textAlign: "center", mb: 3 }, children: [
      /* @__PURE__ */ $(
        Ie,
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
        }
      ),
      /* @__PURE__ */ $(
        Ie,
        {
          variant: "body1",
          sx: {
            color: e.textColor,
            opacity: 0.8,
            mb: 3,
            lineHeight: 1.6
          },
          children: e.forgetPasswordDescription || "Enter your email address and we will send you a link to reset your password."
        }
      )
    ] }),
    /* @__PURE__ */ $(ge, { component: "form", onSubmit: a(n), children: /* @__PURE__ */ ue(lr, { spacing: 3, children: [
      /* @__PURE__ */ $(
        er,
        {
          ...i("email"),
          fullWidth: !0,
          label: "Email Address",
          type: "email",
          placeholder: "Enter your email",
          error: !!d.email,
          helperText: d.email?.message,
          disabled: f,
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
        }
      ),
      /* @__PURE__ */ $(
        Re,
        {
          type: "submit",
          fullWidth: !0,
          variant: "contained",
          size: "large",
          disabled: f,
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
          children: f ? /* @__PURE__ */ $(ur, { size: 24, color: "inherit" }) : "Send Reset Link"
        }
      ),
      /* @__PURE__ */ $(
        Re,
        {
          fullWidth: !0,
          variant: "text",
          onClick: o,
          disabled: f,
          sx: {
            textTransform: "none",
            color: e.primaryColor,
            fontWeight: 500,
            "&:hover": {
              backgroundColor: `${e.primaryColor}08`
            }
          },
          children: "Back to Sign In"
        }
      )
    ] }) })
  ] });
}, nc = ({
  brandConfig: e,
  onBackToLogin: t
}) => /* @__PURE__ */ ue(cr, { children: [
  /* @__PURE__ */ ue(ge, { sx: { textAlign: "center", mb: 3 }, children: [
    e.logo && /* @__PURE__ */ $(ge, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ $(
      "img",
      {
        src: e.logo,
        alt: e.companyName || "Company Logo",
        style: {
          height: e.logoHeight,
          maxWidth: "100%",
          objectFit: "contain"
        }
      }
    ) : e.logo }),
    /* @__PURE__ */ $(
      Ie,
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
      }
    ),
    /* @__PURE__ */ $(
      Ie,
      {
        variant: "body1",
        sx: {
          color: e.textColor,
          opacity: 0.8,
          mb: 3,
          lineHeight: 1.6
        },
        children: e.forgetPasswordSuccessDescription || "We have sent you a password reset link. Please check your email and follow the instructions to reset your password."
      }
    )
  ] }),
  /* @__PURE__ */ $(ge, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ $(
    Re,
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
    }
  ) })
] }), Qt = ({
  children: e,
  brandConfig: t
}) => /* @__PURE__ */ $(
  ge,
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
    children: /* @__PURE__ */ $(
      ge,
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
      }
    )
  }
), _c = ({
  authConfig: e,
  onLoginSuccess: t,
  onLoginError: r,
  enableRecaptcha: n = !1,
  recaptchaSiteKey: o,
  enableGoogleSignIn: s = !0,
  enableLocalSignIn: i = !0,
  enableForgetPassword: a = !0,
  branding: d
}) => {
  const [f, u] = tt("idle"), [m, g] = tt(null), E = po(d);
  if (Zt(() => {
    try {
      Je(e.apiBaseUrl, e.apiKey);
    } catch (x) {
      console.error("Failed to initialize API client:", x);
    }
  }, [e.apiBaseUrl, e.apiKey]), !i && !s)
    throw new Error(
      "At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)"
    );
  if (n && !o)
    throw new Error(
      "recaptchaSiteKey is required when enableRecaptcha is true"
    );
  const p = () => window.grecaptcha.execute(o, { action: "login" }).catch(() => {
    throw new Error("reCAPTCHA verification failed");
  }), l = async () => {
    if (!n || !o)
      return "";
    if (typeof window > "u" || !window.grecaptcha)
      throw new Error("reCAPTCHA is not loaded");
    return new Promise((x, F) => {
      const ne = () => {
        p().then(x).catch(F);
      };
      window.grecaptcha.ready(ne);
    });
  }, y = async (x) => {
    u("loading"), g(null);
    try {
      n && await l();
      const F = await We.login(x.email, x.password);
      we.setTokens(F.accessToken, F.refreshToken);
      const ne = await We.getCurrentUser();
      u("success"), t({ user: ne, tokens: F });
    } catch (F) {
      const ne = F;
      g({ message: ne.message, type: "local" }), u("error"), r(ne);
    }
  }, R = () => {
    try {
      u("google-loading"), g(null);
      const x = `${window.location.origin}/callback`;
      setTimeout(() => {
        We.initiateGoogleOAuth(
          x,
          e.apiBaseUrl
        );
      }, 300);
    } catch (x) {
      const F = x;
      g({ message: F.message, type: "google" }), u("error"), r(F);
    }
  }, k = () => {
    g(null), u("idle");
  }, _ = async () => {
    u("forget-password-loading"), g(null);
    try {
      n && await l(), await new Promise((x) => setTimeout(x, 1e3)), u("forget-password-success");
    } catch (x) {
      const F = x;
      g({ message: F.message, type: "forget-password" }), u("forget-password"), r(F);
    }
  }, C = () => {
    g(null), u("forget-password");
  }, S = () => {
    g(null), u("idle");
  };
  return Zt(() => {
    if (n && o && typeof window < "u") {
      const x = document.createElement("script");
      x.src = `https://www.google.com/recaptcha/enterprise.js?render=${o}`, x.async = !0, x.defer = !0, document.head.appendChild(x);
    }
  }, [n, o]), f === "forget-password-success" ? /* @__PURE__ */ $(Qt, { brandConfig: E, children: /* @__PURE__ */ $(
    nc,
    {
      brandConfig: E,
      onBackToLogin: S
    }
  ) }) : f === "forget-password" || f === "forget-password-loading" ? /* @__PURE__ */ ue(Qt, { brandConfig: E, children: [
    /* @__PURE__ */ $(pn, { brandConfig: E }),
    /* @__PURE__ */ $(
      rc,
      {
        brandConfig: E,
        loginState: f,
        error: m,
        onSubmit: _,
        onBackToLogin: S,
        onCloseError: () => g(null)
      }
    )
  ] }) : /* @__PURE__ */ ue(ge, { children: [
    /* @__PURE__ */ $(
      pn,
      {
        brandConfig: E,
        title: E.companyName ? E.companyName : "Sign In",
        subtitle: E.tagline
      }
    ),
    /* @__PURE__ */ ue(Qt, { brandConfig: E, children: [
      m && /* @__PURE__ */ $(
        mn,
        {
          severity: "error",
          sx: { mb: 3 },
          onClose: () => g(null),
          children: m.message
        }
      ),
      /* @__PURE__ */ ue(lr, { spacing: 3, children: [
        i && /* @__PURE__ */ $(
          Za,
          {
            brandConfig: E,
            loginState: f,
            onSubmit: y,
            onForgetPassword: a ? C : void 0,
            enableForgetPassword: a
          }
        ),
        s && /* @__PURE__ */ $(
          ec,
          {
            brandConfig: E,
            loginState: f,
            onClick: R,
            showDivider: i
          }
        ),
        f === "error" && /* @__PURE__ */ $(
          Re,
          {
            fullWidth: !0,
            variant: "text",
            onClick: k,
            sx: {
              mt: 1,
              color: E.primaryColor,
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: `${E.primaryColor}08`
              }
            },
            children: "Try Again"
          }
        )
      ] })
    ] })
  ] });
}, kc = (e) => {
  const [t, r] = tt(!0), [n, o] = tt(null);
  return Zt(() => {
    (async () => {
      try {
        const i = new URLSearchParams(window.location.search), a = i.get("access_token") || i.get("accessToken"), d = i.get("refresh_token") || i.get("refreshToken"), f = i.get("user"), u = i.get("error"), m = i.get("message");
        if (u) {
          const p = decodeURIComponent(m || u);
          throw new Error(p);
        }
        if (!a || !d)
          throw new Error("Missing authentication tokens in callback URL");
        we.setTokens(a, d);
        let g;
        if (f)
          try {
            const p = decodeURIComponent(f);
            g = JSON.parse(p);
          } catch (p) {
            console.warn("Failed to parse user from URL, fetching from API:", p), g = await We.getCurrentUser();
          }
        else
          g = await We.getCurrentUser();
        e?.onSuccess?.({ accessToken: a, refreshToken: d }, g);
        const E = e?.redirectPath || "/dashboard";
        window.history.replaceState({}, document.title, E), r(!1);
      } catch (i) {
        const a = i;
        o(a), e?.onError?.(a), r(!1);
      }
    })();
  }, [e?.redirectPath]), { loading: t, error: n };
}, Pc = (e) => ({ logout: oo(async () => {
  const r = we.getRefreshToken();
  if (e?.apiBaseUrl && r)
    try {
      await We.logout(r);
    } catch (n) {
      console.error("Logout API call failed:", n);
    }
  we.clearTokens(), window.location.href = "/login";
}, [e?.apiBaseUrl]) });
export {
  _c as LumoraLogin,
  we as TokenStorage,
  po as getBrandingConfig,
  fo as getDefaultBranding,
  kc as useAuthCallback,
  Pc as useLogout
};
