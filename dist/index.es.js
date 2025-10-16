import { jsxs as L, jsx as m, Fragment as Ee } from "react/jsx-runtime";
import { useState as ie, useEffect as Pe, useCallback as It } from "react";
import { Box as N, Typography as z, Stack as Ie, TextField as Ne, Button as H, CircularProgress as Be, Divider as Bt, Alert as lt } from "@mui/material";
import { appendErrors as vt, useForm as ct } from "react-hook-form";
import { validateFieldsNatively as jt, toNestErrors as Ht } from "@hookform/resolvers";
import * as se from "yup";
import { Google as qt } from "@mui/icons-material";
import { LumoraOTP as Mt } from "@volenday/lumora-otp-component";
const $t = () => ({
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
}), zt = (e) => ({
  ...$t(),
  ...e
}), D = {
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
  hasTokens: () => !!(D.getAccessToken() && D.getRefreshToken())
};
function ut(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Wt } = Object.prototype, { getPrototypeOf: ve } = Object, { iterator: be, toStringTag: dt } = Symbol, Te = /* @__PURE__ */ ((e) => (t) => {
  const r = Wt.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), I = (e) => (e = e.toLowerCase(), (t) => Te(t) === e), Se = (e) => (t) => typeof t === e, { isArray: Q } = Array, Z = Se("undefined");
function ae(e) {
  return e !== null && !Z(e) && e.constructor !== null && !Z(e.constructor) && _(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ft = I("ArrayBuffer");
function Vt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ft(e.buffer), t;
}
const Jt = Se("string"), _ = Se("function"), ht = Se("number"), le = (e) => e !== null && typeof e == "object", Gt = (e) => e === !0 || e === !1, me = (e) => {
  if (Te(e) !== "object")
    return !1;
  const t = ve(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(dt in e) && !(be in e);
}, Kt = (e) => {
  if (!le(e) || ae(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Xt = I("Date"), Yt = I("File"), Zt = I("Blob"), Qt = I("FileList"), er = (e) => le(e) && _(e.pipe), tr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || _(e.append) && ((t = Te(e)) === "formdata" || // detect form-data instance
  t === "object" && _(e.toString) && e.toString() === "[object FormData]"));
}, rr = I("URLSearchParams"), [or, nr, sr, ir] = ["ReadableStream", "Request", "Response", "Headers"].map(I), ar = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ce(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, n;
  if (typeof e != "object" && (e = [e]), Q(e))
    for (o = 0, n = e.length; o < n; o++)
      t.call(null, e[o], o, e);
  else {
    if (ae(e))
      return;
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let l;
    for (o = 0; o < s; o++)
      l = i[o], t.call(null, e[l], l, e);
  }
}
function pt(e, t) {
  if (ae(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let o = r.length, n;
  for (; o-- > 0; )
    if (n = r[o], t === n.toLowerCase())
      return n;
  return null;
}
const V = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, mt = (e) => !Z(e) && e !== V;
function _e() {
  const { caseless: e, skipUndefined: t } = mt(this) && this || {}, r = {}, o = (n, i) => {
    const s = e && pt(r, i) || i;
    me(r[s]) && me(n) ? r[s] = _e(r[s], n) : me(n) ? r[s] = _e({}, n) : Q(n) ? r[s] = n.slice() : (!t || !Z(n)) && (r[s] = n);
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && ce(arguments[n], o);
  return r;
}
const lr = (e, t, r, { allOwnKeys: o } = {}) => (ce(t, (n, i) => {
  r && _(n) ? e[i] = ut(n, r) : e[i] = n;
}, { allOwnKeys: o }), e), cr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ur = (e, t, r, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, dr = (e, t, r, o) => {
  let n, i, s;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (n = Object.getOwnPropertyNames(e), i = n.length; i-- > 0; )
      s = n[i], (!o || o(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = r !== !1 && ve(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, fr = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const o = e.indexOf(t, r);
  return o !== -1 && o === r;
}, hr = (e) => {
  if (!e) return null;
  if (Q(e)) return e;
  let t = e.length;
  if (!ht(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, pr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ve(Uint8Array)), mr = (e, t) => {
  const o = (e && e[be]).call(e);
  let n;
  for (; (n = o.next()) && !n.done; ) {
    const i = n.value;
    t.call(e, i[0], i[1]);
  }
}, yr = (e, t) => {
  let r;
  const o = [];
  for (; (r = e.exec(t)) !== null; )
    o.push(r);
  return o;
}, gr = I("HTMLFormElement"), wr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, n) {
    return o.toUpperCase() + n;
  }
), We = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Er = I("RegExp"), yt = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  ce(r, (n, i) => {
    let s;
    (s = t(n, i, e)) !== !1 && (o[i] = s || n);
  }), Object.defineProperties(e, o);
}, br = (e) => {
  yt(e, (t, r) => {
    if (_(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = e[r];
    if (_(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Tr = (e, t) => {
  const r = {}, o = (n) => {
    n.forEach((i) => {
      r[i] = !0;
    });
  };
  return Q(e) ? o(e) : o(String(e).split(t)), r;
}, Sr = () => {
}, xr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Rr(e) {
  return !!(e && _(e.append) && e[dt] === "FormData" && e[be]);
}
const Or = (e) => {
  const t = new Array(10), r = (o, n) => {
    if (le(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (ae(o))
        return o;
      if (!("toJSON" in o)) {
        t[n] = o;
        const i = Q(o) ? [] : {};
        return ce(o, (s, l) => {
          const f = r(s, n + 1);
          !Z(f) && (i[l] = f);
        }), t[n] = void 0, i;
      }
    }
    return o;
  };
  return r(e, 0);
}, Ar = I("AsyncFunction"), kr = (e) => e && (le(e) || _(e)) && _(e.then) && _(e.catch), gt = ((e, t) => e ? setImmediate : t ? ((r, o) => (V.addEventListener("message", ({ source: n, data: i }) => {
  n === V && i === r && o.length && o.shift()();
}, !1), (n) => {
  o.push(n), V.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  _(V.postMessage)
), Cr = typeof queueMicrotask < "u" ? queueMicrotask.bind(V) : typeof process < "u" && process.nextTick || gt, Pr = (e) => e != null && _(e[be]), a = {
  isArray: Q,
  isArrayBuffer: ft,
  isBuffer: ae,
  isFormData: tr,
  isArrayBufferView: Vt,
  isString: Jt,
  isNumber: ht,
  isBoolean: Gt,
  isObject: le,
  isPlainObject: me,
  isEmptyObject: Kt,
  isReadableStream: or,
  isRequest: nr,
  isResponse: sr,
  isHeaders: ir,
  isUndefined: Z,
  isDate: Xt,
  isFile: Yt,
  isBlob: Zt,
  isRegExp: Er,
  isFunction: _,
  isStream: er,
  isURLSearchParams: rr,
  isTypedArray: pr,
  isFileList: Qt,
  forEach: ce,
  merge: _e,
  extend: lr,
  trim: ar,
  stripBOM: cr,
  inherits: ur,
  toFlatObject: dr,
  kindOf: Te,
  kindOfTest: I,
  endsWith: fr,
  toArray: hr,
  forEachEntry: mr,
  matchAll: yr,
  isHTMLForm: gr,
  hasOwnProperty: We,
  hasOwnProp: We,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: yt,
  freezeMethods: br,
  toObjectSet: Tr,
  toCamelCase: wr,
  noop: Sr,
  toFiniteNumber: xr,
  findKey: pt,
  global: V,
  isContextDefined: mt,
  isSpecCompliantForm: Rr,
  toJSONObject: Or,
  isAsyncFn: Ar,
  isThenable: kr,
  setImmediate: gt,
  asap: Cr,
  isIterable: Pr
};
function g(e, t, r, o, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), o && (this.request = o), n && (this.response = n, this.status = n.status ? n.status : null);
}
a.inherits(g, Error, {
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
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const wt = g.prototype, Et = {};
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
  Et[e] = { value: e };
});
Object.defineProperties(g, Et);
Object.defineProperty(wt, "isAxiosError", { value: !0 });
g.from = (e, t, r, o, n, i) => {
  const s = Object.create(wt);
  a.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const l = e && e.message ? e.message : "Error", f = t == null && e ? e.code : t;
  return g.call(s, l, f, r, o, n), e && s.cause == null && Object.defineProperty(s, "cause", { value: e, configurable: !0 }), s.name = e && e.name || "Error", i && Object.assign(s, i), s;
};
const Nr = null;
function Ue(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function bt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ve(e, t, r) {
  return e ? e.concat(t).map(function(n, i) {
    return n = bt(n), !r && i ? "[" + n + "]" : n;
  }).join(r ? "." : "") : t;
}
function _r(e) {
  return a.isArray(e) && !e.some(Ue);
}
const Ur = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function xe(e, t, r) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = a.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, p) {
    return !a.isUndefined(p[y]);
  });
  const o = r.metaTokens, n = r.visitor || c, i = r.dots, s = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(n))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null) return "";
    if (a.isDate(d))
      return d.toISOString();
    if (a.isBoolean(d))
      return d.toString();
    if (!f && a.isBlob(d))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(d) || a.isTypedArray(d) ? f && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function c(d, y, p) {
    let S = d;
    if (d && !p && typeof d == "object") {
      if (a.endsWith(y, "{}"))
        y = o ? y : y.slice(0, -2), d = JSON.stringify(d);
      else if (a.isArray(d) && _r(d) || (a.isFileList(d) || a.endsWith(y, "[]")) && (S = a.toArray(d)))
        return y = bt(y), S.forEach(function(R, O) {
          !(a.isUndefined(R) || R === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Ve([y], O, i) : s === null ? y : y + "[]",
            u(R)
          );
        }), !1;
    }
    return Ue(d) ? !0 : (t.append(Ve(p, y, i), u(d)), !1);
  }
  const h = [], w = Object.assign(Ur, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Ue
  });
  function E(d, y) {
    if (!a.isUndefined(d)) {
      if (h.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      h.push(d), a.forEach(d, function(S, P) {
        (!(a.isUndefined(S) || S === null) && n.call(
          t,
          S,
          a.isString(P) ? P.trim() : P,
          y,
          w
        )) === !0 && E(S, y ? y.concat(P) : [P]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function Je(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return t[o];
  });
}
function je(e, t) {
  this._pairs = [], e && xe(e, this, t);
}
const Tt = je.prototype;
Tt.append = function(t, r) {
  this._pairs.push([t, r]);
};
Tt.toString = function(t) {
  const r = t ? function(o) {
    return t.call(this, o, Je);
  } : Je;
  return this._pairs.map(function(n) {
    return r(n[0]) + "=" + r(n[1]);
  }, "").join("&");
};
function Fr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function St(e, t, r) {
  if (!t)
    return e;
  const o = r && r.encode || Fr;
  a.isFunction(r) && (r = {
    serialize: r
  });
  const n = r && r.serialize;
  let i;
  if (n ? i = n(t, r) : i = a.isURLSearchParams(t) ? t.toString() : new je(t, r).toString(o), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Ge {
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
  use(t, r, o) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
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
    a.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const xt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Lr = typeof URLSearchParams < "u" ? URLSearchParams : je, Dr = typeof FormData < "u" ? FormData : null, Ir = typeof Blob < "u" ? Blob : null, Br = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Lr,
    FormData: Dr,
    Blob: Ir
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, He = typeof window < "u" && typeof document < "u", Fe = typeof navigator == "object" && navigator || void 0, vr = He && (!Fe || ["ReactNative", "NativeScript", "NS"].indexOf(Fe.product) < 0), jr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Hr = He && window.location.href || "http://localhost", qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: He,
  hasStandardBrowserEnv: vr,
  hasStandardBrowserWebWorkerEnv: jr,
  navigator: Fe,
  origin: Hr
}, Symbol.toStringTag, { value: "Module" })), k = {
  ...qr,
  ...Br
};
function Mr(e, t) {
  return xe(e, new k.classes.URLSearchParams(), {
    visitor: function(r, o, n, i) {
      return k.isNode && a.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function $r(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function zr(e) {
  const t = {}, r = Object.keys(e);
  let o;
  const n = r.length;
  let i;
  for (o = 0; o < n; o++)
    i = r[o], t[i] = e[i];
  return t;
}
function Rt(e) {
  function t(r, o, n, i) {
    let s = r[i++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), f = i >= r.length;
    return s = !s && a.isArray(n) ? n.length : s, f ? (a.hasOwnProp(n, s) ? n[s] = [n[s], o] : n[s] = o, !l) : ((!n[s] || !a.isObject(n[s])) && (n[s] = []), t(r, o, n[s], i) && a.isArray(n[s]) && (n[s] = zr(n[s])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const r = {};
    return a.forEachEntry(e, (o, n) => {
      t($r(o), n, r, 0);
    }), r;
  }
  return null;
}
function Wr(e, t, r) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
const ue = {
  transitional: xt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const o = r.getContentType() || "", n = o.indexOf("application/json") > -1, i = a.isObject(t);
    if (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return n ? JSON.stringify(Rt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Mr(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return xe(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || n ? (r.setContentType("application/json", !1), Wr(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || ue.transitional, o = r && r.forcedJSONParsing, n = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (o && !this.responseType || n)) {
      const s = !(r && r.silentJSONParsing) && n;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (l) {
        if (s)
          throw l.name === "SyntaxError" ? g.from(l, g.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: k.classes.FormData,
    Blob: k.classes.Blob
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
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ue.headers[e] = {};
});
const Vr = a.toObjectSet([
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
]), Jr = (e) => {
  const t = {};
  let r, o, n;
  return e && e.split(`
`).forEach(function(s) {
    n = s.indexOf(":"), r = s.substring(0, n).trim().toLowerCase(), o = s.substring(n + 1).trim(), !(!r || t[r] && Vr[r]) && (r === "set-cookie" ? t[r] ? t[r].push(o) : t[r] = [o] : t[r] = t[r] ? t[r] + ", " + o : o);
  }), t;
}, Ke = Symbol("internals");
function oe(e) {
  return e && String(e).trim().toLowerCase();
}
function ye(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(ye) : String(e);
}
function Gr(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const Kr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ae(e, t, r, o, n) {
  if (a.isFunction(o))
    return o.call(this, t, r);
  if (n && (t = r), !!a.isString(t)) {
    if (a.isString(o))
      return t.indexOf(o) !== -1;
    if (a.isRegExp(o))
      return o.test(t);
  }
}
function Xr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, o) => r.toUpperCase() + o);
}
function Yr(e, t) {
  const r = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + r, {
      value: function(n, i, s) {
        return this[o].call(this, t, n, i, s);
      },
      configurable: !0
    });
  });
}
let U = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, o) {
    const n = this;
    function i(l, f, u) {
      const c = oe(f);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(n, c);
      (!h || n[h] === void 0 || u === !0 || u === void 0 && n[h] !== !1) && (n[h || f] = ye(l));
    }
    const s = (l, f) => a.forEach(l, (u, c) => i(u, c, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      s(t, r);
    else if (a.isString(t) && (t = t.trim()) && !Kr(t))
      s(Jr(t), r);
    else if (a.isObject(t) && a.isIterable(t)) {
      let l = {}, f, u;
      for (const c of t) {
        if (!a.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        l[u = c[0]] = (f = l[u]) ? a.isArray(f) ? [...f, c[1]] : [f, c[1]] : c[1];
      }
      s(l, r);
    } else
      t != null && i(r, t, o);
    return this;
  }
  get(t, r) {
    if (t = oe(t), t) {
      const o = a.findKey(this, t);
      if (o) {
        const n = this[o];
        if (!r)
          return n;
        if (r === !0)
          return Gr(n);
        if (a.isFunction(r))
          return r.call(this, n, o);
        if (a.isRegExp(r))
          return r.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = oe(t), t) {
      const o = a.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!r || Ae(this, this[o], o, r)));
    }
    return !1;
  }
  delete(t, r) {
    const o = this;
    let n = !1;
    function i(s) {
      if (s = oe(s), s) {
        const l = a.findKey(o, s);
        l && (!r || Ae(o, o[l], l, r)) && (delete o[l], n = !0);
      }
    }
    return a.isArray(t) ? t.forEach(i) : i(t), n;
  }
  clear(t) {
    const r = Object.keys(this);
    let o = r.length, n = !1;
    for (; o--; ) {
      const i = r[o];
      (!t || Ae(this, this[i], i, t, !0)) && (delete this[i], n = !0);
    }
    return n;
  }
  normalize(t) {
    const r = this, o = {};
    return a.forEach(this, (n, i) => {
      const s = a.findKey(o, i);
      if (s) {
        r[s] = ye(n), delete r[i];
        return;
      }
      const l = t ? Xr(i) : String(i).trim();
      l !== i && delete r[i], r[l] = ye(n), o[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (o, n) => {
      o != null && o !== !1 && (r[n] = t && a.isArray(o) ? o.join(", ") : o);
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
    const o = new this(t);
    return r.forEach((n) => o.set(n)), o;
  }
  static accessor(t) {
    const o = (this[Ke] = this[Ke] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(s) {
      const l = oe(s);
      o[l] || (Yr(n, s), o[l] = !0);
    }
    return a.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
U.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(U.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[r] = o;
    }
  };
});
a.freezeMethods(U);
function ke(e, t) {
  const r = this || ue, o = t || r, n = U.from(o.headers);
  let i = o.data;
  return a.forEach(e, function(l) {
    i = l.call(r, i, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), i;
}
function Ot(e) {
  return !!(e && e.__CANCEL__);
}
function ee(e, t, r) {
  g.call(this, e ?? "canceled", g.ERR_CANCELED, t, r), this.name = "CanceledError";
}
a.inherits(ee, g, {
  __CANCEL__: !0
});
function At(e, t, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? e(r) : t(new g(
    "Request failed with status code " + r.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Zr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Qr(e, t) {
  e = e || 10;
  const r = new Array(e), o = new Array(e);
  let n = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), c = o[i];
    s || (s = u), r[n] = f, o[n] = u;
    let h = i, w = 0;
    for (; h !== n; )
      w += r[h++], h = h % e;
    if (n = (n + 1) % e, n === i && (i = (i + 1) % e), u - s < t)
      return;
    const E = c && u - c;
    return E ? Math.round(w * 1e3 / E) : void 0;
  };
}
function eo(e, t) {
  let r = 0, o = 1e3 / t, n, i;
  const s = (u, c = Date.now()) => {
    r = c, n = null, i && (clearTimeout(i), i = null), e(...u);
  };
  return [(...u) => {
    const c = Date.now(), h = c - r;
    h >= o ? s(u, c) : (n = u, i || (i = setTimeout(() => {
      i = null, s(n);
    }, o - h)));
  }, () => n && s(n)];
}
const we = (e, t, r = 3) => {
  let o = 0;
  const n = Qr(50, 250);
  return eo((i) => {
    const s = i.loaded, l = i.lengthComputable ? i.total : void 0, f = s - o, u = n(f), c = s <= l;
    o = s;
    const h = {
      loaded: s,
      total: l,
      progress: l ? s / l : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && l && c ? (l - s) / u : void 0,
      event: i,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, r);
}, Xe = (e, t) => {
  const r = e != null;
  return [(o) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: o
  }), t[1]];
}, Ye = (e) => (...t) => a.asap(() => e(...t)), to = k.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, k.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(k.origin),
  k.navigator && /(msie|trident)/i.test(k.navigator.userAgent)
) : () => !0, ro = k.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, o, n, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      a.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), a.isString(o) && s.push("path=" + o), a.isString(n) && s.push("domain=" + n), i === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
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
function oo(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function no(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kt(e, t, r) {
  let o = !oo(t);
  return e && (o || r == !1) ? no(e, t) : t;
}
const Ze = (e) => e instanceof U ? { ...e } : e;
function K(e, t) {
  t = t || {};
  const r = {};
  function o(u, c, h, w) {
    return a.isPlainObject(u) && a.isPlainObject(c) ? a.merge.call({ caseless: w }, u, c) : a.isPlainObject(c) ? a.merge({}, c) : a.isArray(c) ? c.slice() : c;
  }
  function n(u, c, h, w) {
    if (a.isUndefined(c)) {
      if (!a.isUndefined(u))
        return o(void 0, u, h, w);
    } else return o(u, c, h, w);
  }
  function i(u, c) {
    if (!a.isUndefined(c))
      return o(void 0, c);
  }
  function s(u, c) {
    if (a.isUndefined(c)) {
      if (!a.isUndefined(u))
        return o(void 0, u);
    } else return o(void 0, c);
  }
  function l(u, c, h) {
    if (h in t)
      return o(u, c);
    if (h in e)
      return o(void 0, u);
  }
  const f = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (u, c, h) => n(Ze(u), Ze(c), h, !0)
  };
  return a.forEach(Object.keys({ ...e, ...t }), function(c) {
    const h = f[c] || n, w = h(e[c], t[c], c);
    a.isUndefined(w) && h !== l || (r[c] = w);
  }), r;
}
const Ct = (e) => {
  const t = K({}, e);
  let { data: r, withXSRFToken: o, xsrfHeaderName: n, xsrfCookieName: i, headers: s, auth: l } = t;
  if (t.headers = s = U.from(s), t.url = St(kt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && s.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), a.isFormData(r)) {
    if (k.hasStandardBrowserEnv || k.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (a.isFunction(r.getHeaders)) {
      const f = r.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(f).forEach(([c, h]) => {
        u.includes(c.toLowerCase()) && s.set(c, h);
      });
    }
  }
  if (k.hasStandardBrowserEnv && (o && a.isFunction(o) && (o = o(t)), o || o !== !1 && to(t.url))) {
    const f = n && i && ro.read(i);
    f && s.set(n, f);
  }
  return t;
}, so = typeof XMLHttpRequest < "u", io = so && function(e) {
  return new Promise(function(r, o) {
    const n = Ct(e);
    let i = n.data;
    const s = U.from(n.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: u } = n, c, h, w, E, d;
    function y() {
      E && E(), d && d(), n.cancelToken && n.cancelToken.unsubscribe(c), n.signal && n.signal.removeEventListener("abort", c);
    }
    let p = new XMLHttpRequest();
    p.open(n.method.toUpperCase(), n.url, !0), p.timeout = n.timeout;
    function S() {
      if (!p)
        return;
      const R = U.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), F = {
        data: !l || l === "text" || l === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: R,
        config: e,
        request: p
      };
      At(function(C) {
        r(C), y();
      }, function(C) {
        o(C), y();
      }, F), p = null;
    }
    "onloadend" in p ? p.onloadend = S : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, p.onabort = function() {
      p && (o(new g("Request aborted", g.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function(O) {
      const F = O && O.message ? O.message : "Network Error", j = new g(F, g.ERR_NETWORK, e, p);
      j.event = O || null, o(j), p = null;
    }, p.ontimeout = function() {
      let O = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const F = n.transitional || xt;
      n.timeoutErrorMessage && (O = n.timeoutErrorMessage), o(new g(
        O,
        F.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in p && a.forEach(s.toJSON(), function(O, F) {
      p.setRequestHeader(F, O);
    }), a.isUndefined(n.withCredentials) || (p.withCredentials = !!n.withCredentials), l && l !== "json" && (p.responseType = n.responseType), u && ([w, d] = we(u, !0), p.addEventListener("progress", w)), f && p.upload && ([h, E] = we(f), p.upload.addEventListener("progress", h), p.upload.addEventListener("loadend", E)), (n.cancelToken || n.signal) && (c = (R) => {
      p && (o(!R || R.type ? new ee(null, e, p) : R), p.abort(), p = null);
    }, n.cancelToken && n.cancelToken.subscribe(c), n.signal && (n.signal.aborted ? c() : n.signal.addEventListener("abort", c)));
    const P = Zr(n.url);
    if (P && k.protocols.indexOf(P) === -1) {
      o(new g("Unsupported protocol " + P + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, ao = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let o = new AbortController(), n;
    const i = function(u) {
      if (!n) {
        n = !0, l();
        const c = u instanceof Error ? u : this.reason;
        o.abort(c instanceof g ? c : new ee(c instanceof Error ? c.message : c));
      }
    };
    let s = t && setTimeout(() => {
      s = null, i(new g(`timeout ${t} of ms exceeded`, g.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: f } = o;
    return f.unsubscribe = () => a.asap(l), f;
  }
}, lo = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let o = 0, n;
  for (; o < r; )
    n = o + t, yield e.slice(o, n), o = n;
}, co = async function* (e, t) {
  for await (const r of uo(e))
    yield* lo(r, t);
}, uo = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: o } = await t.read();
      if (r)
        break;
      yield o;
    }
  } finally {
    await t.cancel();
  }
}, Qe = (e, t, r, o) => {
  const n = co(e, t);
  let i = 0, s, l = (f) => {
    s || (s = !0, o && o(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: u, value: c } = await n.next();
        if (u) {
          l(), f.close();
          return;
        }
        let h = c.byteLength;
        if (r) {
          let w = i += h;
          r(w);
        }
        f.enqueue(new Uint8Array(c));
      } catch (u) {
        throw l(u), u;
      }
    },
    cancel(f) {
      return l(f), n.return();
    }
  }, {
    highWaterMark: 2
  });
}, et = 64 * 1024, { isFunction: fe } = a, fo = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(a.global), {
  ReadableStream: tt,
  TextEncoder: rt
} = a.global, ot = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ho = (e) => {
  e = a.merge.call({
    skipUndefined: !0
  }, fo, e);
  const { fetch: t, Request: r, Response: o } = e, n = t ? fe(t) : typeof fetch == "function", i = fe(r), s = fe(o);
  if (!n)
    return !1;
  const l = n && fe(tt), f = n && (typeof rt == "function" ? /* @__PURE__ */ ((d) => (y) => d.encode(y))(new rt()) : async (d) => new Uint8Array(await new r(d).arrayBuffer())), u = i && l && ot(() => {
    let d = !1;
    const y = new r(k.origin, {
      body: new tt(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !y;
  }), c = s && l && ot(() => a.isReadableStream(new o("").body)), h = {
    stream: c && ((d) => d.body)
  };
  n && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !h[d] && (h[d] = (y, p) => {
      let S = y && y[d];
      if (S)
        return S.call(y);
      throw new g(`Response type '${d}' is not supported`, g.ERR_NOT_SUPPORT, p);
    });
  });
  const w = async (d) => {
    if (d == null)
      return 0;
    if (a.isBlob(d))
      return d.size;
    if (a.isSpecCompliantForm(d))
      return (await new r(k.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(d) || a.isArrayBuffer(d))
      return d.byteLength;
    if (a.isURLSearchParams(d) && (d = d + ""), a.isString(d))
      return (await f(d)).byteLength;
  }, E = async (d, y) => {
    const p = a.toFiniteNumber(d.getContentLength());
    return p ?? w(y);
  };
  return async (d) => {
    let {
      url: y,
      method: p,
      data: S,
      signal: P,
      cancelToken: R,
      timeout: O,
      onDownloadProgress: F,
      onUploadProgress: j,
      responseType: C,
      headers: te,
      withCredentials: X = "same-origin",
      fetchOptions: re
    } = Ct(d), b = t || fetch;
    C = C ? (C + "").toLowerCase() : "text";
    let T = ao([P, R && R.toAbortSignal()], O), A = null;
    const W = T && T.unsubscribe && (() => {
      T.unsubscribe();
    });
    let qe;
    try {
      if (j && u && p !== "get" && p !== "head" && (qe = await E(te, S)) !== 0) {
        let M = new r(y, {
          method: "POST",
          body: S,
          duplex: "half"
        }), Y;
        if (a.isFormData(S) && (Y = M.headers.get("content-type")) && te.setContentType(Y), M.body) {
          const [Oe, de] = Xe(
            qe,
            we(Ye(j))
          );
          S = Qe(M.body, et, Oe, de);
        }
      }
      a.isString(X) || (X = X ? "include" : "omit");
      const B = i && "credentials" in r.prototype, Me = {
        ...re,
        signal: T,
        method: p.toUpperCase(),
        headers: te.normalize().toJSON(),
        body: S,
        duplex: "half",
        credentials: B ? X : void 0
      };
      A = i && new r(y, Me);
      let q = await (i ? b(A, re) : b(y, Me));
      const $e = c && (C === "stream" || C === "response");
      if (c && (F || $e && W)) {
        const M = {};
        ["status", "statusText", "headers"].forEach((ze) => {
          M[ze] = q[ze];
        });
        const Y = a.toFiniteNumber(q.headers.get("content-length")), [Oe, de] = F && Xe(
          Y,
          we(Ye(F), !0)
        ) || [];
        q = new o(
          Qe(q.body, et, Oe, () => {
            de && de(), W && W();
          }),
          M
        );
      }
      C = C || "text";
      let Dt = await h[a.findKey(h, C) || "text"](q, d);
      return !$e && W && W(), await new Promise((M, Y) => {
        At(M, Y, {
          data: Dt,
          headers: U.from(q.headers),
          status: q.status,
          statusText: q.statusText,
          config: d,
          request: A
        });
      });
    } catch (B) {
      throw W && W(), B && B.name === "TypeError" && /Load failed|fetch/i.test(B.message) ? Object.assign(
        new g("Network Error", g.ERR_NETWORK, d, A),
        {
          cause: B.cause || B
        }
      ) : g.from(B, B && B.code, d, A);
    }
  };
}, po = /* @__PURE__ */ new Map(), Pt = (e) => {
  let t = e ? e.env : {};
  const { fetch: r, Request: o, Response: n } = t, i = [
    o,
    n,
    r
  ];
  let s = i.length, l = s, f, u, c = po;
  for (; l--; )
    f = i[l], u = c.get(f), u === void 0 && c.set(f, u = l ? /* @__PURE__ */ new Map() : ho(t)), c = u;
  return u;
};
Pt();
const Le = {
  http: Nr,
  xhr: io,
  fetch: {
    get: Pt
  }
};
a.forEach(Le, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nt = (e) => `- ${e}`, mo = (e) => a.isFunction(e) || e === null || e === !1, Nt = {
  getAdapter: (e, t) => {
    e = a.isArray(e) ? e : [e];
    const { length: r } = e;
    let o, n;
    const i = {};
    for (let s = 0; s < r; s++) {
      o = e[s];
      let l;
      if (n = o, !mo(o) && (n = Le[(l = String(o)).toLowerCase()], n === void 0))
        throw new g(`Unknown adapter '${l}'`);
      if (n && (a.isFunction(n) || (n = n.get(t))))
        break;
      i[l || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(i).map(
        ([f, u]) => `adapter ${f} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = r ? s.length > 1 ? `since :
` + s.map(nt).join(`
`) : " " + nt(s[0]) : "as no adapter specified";
      throw new g(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Le
};
function Ce(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ee(null, e);
}
function st(e) {
  return Ce(e), e.headers = U.from(e.headers), e.data = ke.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Nt.getAdapter(e.adapter || ue.adapter, e)(e).then(function(o) {
    return Ce(e), o.data = ke.call(
      e,
      e.transformResponse,
      o
    ), o.headers = U.from(o.headers), o;
  }, function(o) {
    return Ot(o) || (Ce(e), o && o.response && (o.response.data = ke.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = U.from(o.response.headers))), Promise.reject(o);
  });
}
const _t = "1.12.2", Re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Re[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const it = {};
Re.transitional = function(t, r, o) {
  function n(i, s) {
    return "[Axios v" + _t + "] Transitional option '" + i + "'" + s + (o ? ". " + o : "");
  }
  return (i, s, l) => {
    if (t === !1)
      throw new g(
        n(s, " has been removed" + (r ? " in " + r : "")),
        g.ERR_DEPRECATED
      );
    return r && !it[s] && (it[s] = !0, console.warn(
      n(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, s, l) : !0;
  };
};
Re.spelling = function(t) {
  return (r, o) => (console.warn(`${o} is likely a misspelling of ${t}`), !0);
};
function yo(e, t, r) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let n = o.length;
  for (; n-- > 0; ) {
    const i = o[n], s = t[i];
    if (s) {
      const l = e[i], f = l === void 0 || s(l, i, e);
      if (f !== !0)
        throw new g("option " + i + " must be " + f, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new g("Unknown option " + i, g.ERR_BAD_OPTION);
  }
}
const ge = {
  assertOptions: yo,
  validators: Re
}, v = ge.validators;
let G = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ge(),
      response: new Ge()
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
    } catch (o) {
      if (o instanceof Error) {
        let n = {};
        Error.captureStackTrace ? Error.captureStackTrace(n) : n = new Error();
        const i = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? i && !String(o.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + i) : o.stack = i;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = K(this.defaults, r);
    const { transitional: o, paramsSerializer: n, headers: i } = r;
    o !== void 0 && ge.assertOptions(o, {
      silentJSONParsing: v.transitional(v.boolean),
      forcedJSONParsing: v.transitional(v.boolean),
      clarifyTimeoutError: v.transitional(v.boolean)
    }, !1), n != null && (a.isFunction(n) ? r.paramsSerializer = {
      serialize: n
    } : ge.assertOptions(n, {
      encode: v.function,
      serialize: v.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ge.assertOptions(r, {
      baseUrl: v.spelling("baseURL"),
      withXsrfToken: v.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = i && a.merge(
      i.common,
      i[r.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), r.headers = U.concat(s, i);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (f = f && y.synchronous, l.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let c, h = 0, w;
    if (!f) {
      const d = [st.bind(this), void 0];
      for (d.unshift(...l), d.push(...u), w = d.length, c = Promise.resolve(r); h < w; )
        c = c.then(d[h++], d[h++]);
      return c;
    }
    w = l.length;
    let E = r;
    for (; h < w; ) {
      const d = l[h++], y = l[h++];
      try {
        E = d(E);
      } catch (p) {
        y.call(this, p);
        break;
      }
    }
    try {
      c = st.call(this, E);
    } catch (d) {
      return Promise.reject(d);
    }
    for (h = 0, w = u.length; h < w; )
      c = c.then(u[h++], u[h++]);
    return c;
  }
  getUri(t) {
    t = K(this.defaults, t);
    const r = kt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return St(r, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  G.prototype[t] = function(r, o) {
    return this.request(K(o || {}, {
      method: t,
      url: r,
      data: (o || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function r(o) {
    return function(i, s, l) {
      return this.request(K(l || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  G.prototype[t] = r(), G.prototype[t + "Form"] = r(!0);
});
let go = class Ut {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const o = this;
    this.promise.then((n) => {
      if (!o._listeners) return;
      let i = o._listeners.length;
      for (; i-- > 0; )
        o._listeners[i](n);
      o._listeners = null;
    }), this.promise.then = (n) => {
      let i;
      const s = new Promise((l) => {
        o.subscribe(l), i = l;
      }).then(n);
      return s.cancel = function() {
        o.unsubscribe(i);
      }, s;
    }, t(function(i, s, l) {
      o.reason || (o.reason = new ee(i, s, l), r(o.reason));
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
    const t = new AbortController(), r = (o) => {
      t.abort(o);
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
      token: new Ut(function(n) {
        t = n;
      }),
      cancel: t
    };
  }
};
function wo(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Eo(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const De = {
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
  NetworkAuthenticationRequired: 511
};
Object.entries(De).forEach(([e, t]) => {
  De[t] = e;
});
function Ft(e) {
  const t = new G(e), r = ut(G.prototype.request, t);
  return a.extend(r, G.prototype, t, { allOwnKeys: !0 }), a.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(n) {
    return Ft(K(e, n));
  }, r;
}
const x = Ft(ue);
x.Axios = G;
x.CanceledError = ee;
x.CancelToken = go;
x.isCancel = Ot;
x.VERSION = _t;
x.toFormData = xe;
x.AxiosError = g;
x.Cancel = x.CanceledError;
x.all = function(t) {
  return Promise.all(t);
};
x.spread = wo;
x.isAxiosError = Eo;
x.mergeConfig = K;
x.AxiosHeaders = U;
x.formToJSON = (e) => Rt(a.isHTMLForm(e) ? new FormData(e) : e);
x.getAdapter = Nt.getAdapter;
x.HttpStatusCode = De;
x.default = x;
const {
  Axios: vo,
  AxiosError: jo,
  CanceledError: Ho,
  isCancel: qo,
  CancelToken: Mo,
  VERSION: $o,
  all: zo,
  Cancel: Wo,
  isAxiosError: Vo,
  spread: Jo,
  toFormData: Go,
  AxiosHeaders: Ko,
  HttpStatusCode: Xo,
  formToJSON: Yo,
  getAdapter: Zo,
  mergeConfig: Qo
} = x, $ = {
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
}, bo = {
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
}, To = (e, t) => {
  const r = x.create({
    baseURL: e,
    timeout: $.DEFAULT_CONFIG.TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      ...t && { "X-API-Key": t }
    }
  });
  return r.interceptors.request.use(
    (o) => {
      const n = D.getAccessToken();
      return n && o.headers && (o.headers.Authorization = `Bearer ${n}`), o;
    },
    (o) => Promise.reject(o)
  ), r.interceptors.response.use(
    (o) => o,
    async (o) => {
      const n = o.config;
      if (o.response?.status === $.STATUS_CODES.UNAUTHORIZED && !n._retry) {
        n._retry = !0;
        try {
          const i = D.getRefreshToken();
          if (!i)
            throw new Error(bo.NO_REFRESH_TOKEN);
          const s = await r.post($.ENDPOINTS.REFRESH, {
            refreshToken: i
          }), l = {
            accessToken: s.data.accessToken,
            refreshToken: s.data.refreshToken
          };
          return D.setTokens(l.accessToken, l.refreshToken), n.headers && (n.headers.Authorization = `Bearer ${l.accessToken}`), r(n);
        } catch (i) {
          return D.clearTokens(), window.location.href = "/login", Promise.reject(i);
        }
      }
      return Promise.reject(o);
    }
  ), r;
};
let he = null;
const ne = (e, t) => {
  if (!he && e && (he = To(e, t)), !he)
    throw new Error("API client not initialized. Please provide baseURL.");
  return he;
}, J = {
  /**
   * Authenticate user with email and password
   * @param email - User's email address
   * @param password - User's password
   * @returns Promise resolving to authentication tokens
   */
  login: async (e, t) => {
    try {
      const o = await ne().post($.ENDPOINTS.LOGIN, {
        email: e,
        password: t
      });
      return {
        accessToken: o.data.accessToken,
        refreshToken: o.data.refreshToken
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
      await ne().post($.ENDPOINTS.LOGOUT, {
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
      const r = await ne().post($.ENDPOINTS.REFRESH, {
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
      const t = await ne().get($.ENDPOINTS.USER_ME);
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
    const r = `${t}${$.ENDPOINTS.GOOGLE_AUTH}?redirect_uri=${encodeURIComponent(e)}&prompt=select_account`;
    console.log("🚀 Initiating Google OAuth redirect..."), console.log("📍 Redirect URL:", r), console.log("🔙 Callback URL:", e), window.location.href = r;
  }
}, at = ({
  brandConfig: e,
  title: t,
  subtitle: r
}) => /* @__PURE__ */ L(N, { sx: { textAlign: "center", mb: 4 }, children: [
  e.logo && /* @__PURE__ */ m(N, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ m(
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
  t && /* @__PURE__ */ m(
    z,
    {
      variant: "h4",
      component: "h1",
      sx: {
        mb: 1,
        color: e.textColor,
        fontWeight: 600,
        fontSize: { xs: "1.75rem", sm: "2rem" }
      },
      children: t
    }
  ),
  r && /* @__PURE__ */ m(
    z,
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
function Lt(e, t, r) {
  return r === void 0 && (r = {}), function(o, n, i) {
    try {
      return Promise.resolve((function(s, l) {
        try {
          var f = (t != null && t.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(e[r.mode === "sync" ? "validateSync" : "validate"](o, Object.assign({ abortEarly: !1 }, t, { context: n }))).then(function(u) {
            return i.shouldUseNativeValidation && jt({}, i), { values: r.raw ? Object.assign({}, o) : u, errors: {} };
          }));
        } catch (u) {
          return l(u);
        }
        return f && f.then ? f.then(void 0, l) : f;
      })(0, function(s) {
        if (!s.inner) throw s;
        return { values: {}, errors: Ht((l = s, f = !i.shouldUseNativeValidation && i.criteriaMode === "all", (l.inner || []).reduce(function(u, c) {
          if (u[c.path] || (u[c.path] = { message: c.message, type: c.type }), f) {
            var h = u[c.path].types, w = h && h[c.type];
            u[c.path] = vt(c.path, f, u, c.type, w ? [].concat(w, c.message) : c.message);
          }
          return u;
        }, {})), i) };
        var l, f;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}
const So = se.object({
  email: se.string().email("Please enter a valid email address").required("Email is required"),
  password: se.string().min(6, "Password must be at least 6 characters").required("Password is required")
}), xo = ({
  brandConfig: e,
  loginState: t,
  onSubmit: r,
  onForgetPassword: o,
  enableForgetPassword: n = !0
}) => {
  const [i, s] = ie(!1), {
    register: l,
    handleSubmit: f,
    formState: { errors: u }
  } = ct({
    resolver: Lt(So)
  }), c = t === "loading" || t === "google-loading";
  return /* @__PURE__ */ m(N, { component: "form", onSubmit: f(r), children: /* @__PURE__ */ L(Ie, { spacing: 3, children: [
    /* @__PURE__ */ m(
      Ne,
      {
        ...l("email"),
        fullWidth: !0,
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
        error: !!u.email,
        helperText: u.email?.message,
        disabled: c,
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
    /* @__PURE__ */ m(
      Ne,
      {
        ...l("password"),
        fullWidth: !0,
        label: "Password",
        type: i ? "text" : "password",
        placeholder: "Enter your password",
        error: !!u.password,
        helperText: u.password?.message,
        disabled: c,
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
        },
        slotProps: {
          input: {
            endAdornment: /* @__PURE__ */ m(
              H,
              {
                size: "small",
                onClick: () => s(!i),
                disabled: c,
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
    ),
    /* @__PURE__ */ m(
      H,
      {
        type: "submit",
        fullWidth: !0,
        variant: "contained",
        size: "large",
        disabled: c,
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
        children: t === "loading" ? /* @__PURE__ */ m(Be, { size: 24, color: "inherit" }) : "Sign In"
      }
    ),
    n && o && /* @__PURE__ */ m(N, { textAlign: "right", sx: { mt: 1 }, children: /* @__PURE__ */ m(
      H,
      {
        variant: "text",
        onClick: o,
        disabled: c,
        sx: {
          textTransform: "none",
          color: e.primaryColor,
          fontWeight: 500,
          fontSize: "0.9rem",
          "&:hover": {
            backgroundColor: `${e.primaryColor}08`
          }
        },
        children: "Forgot Password?"
      }
    ) })
  ] }) });
}, Ro = ({
  brandConfig: e,
  loginState: t,
  onClick: r,
  showDivider: o = !1
}) => {
  const n = t === "loading" || t === "google-loading";
  return /* @__PURE__ */ L(Ee, { children: [
    o && /* @__PURE__ */ m(Bt, { sx: { my: 1 }, children: /* @__PURE__ */ m(
      z,
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
    /* @__PURE__ */ m(
      H,
      {
        fullWidth: !0,
        variant: "outlined",
        size: "large",
        startIcon: t === "google-loading" ? /* @__PURE__ */ m(Be, { size: 20, color: "inherit" }) : /* @__PURE__ */ m(qt, {}),
        onClick: r,
        disabled: n,
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
}, Oo = se.object({
  email: se.string().email("Please enter a valid email address").required("Email is required")
}), Ao = ({
  brandConfig: e,
  loginState: t,
  error: r,
  onSubmit: o,
  onBackToLogin: n,
  onCloseError: i
}) => {
  const {
    register: s,
    handleSubmit: l,
    formState: { errors: f }
  } = ct({
    resolver: Lt(Oo)
  }), u = t === "forget-password-loading";
  return /* @__PURE__ */ L(Ee, { children: [
    r && /* @__PURE__ */ m(lt, { severity: "error", sx: { mb: 3 }, onClose: i, children: r.message }),
    /* @__PURE__ */ L(N, { sx: { textAlign: "center", mb: 3 }, children: [
      /* @__PURE__ */ m(
        z,
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
      /* @__PURE__ */ m(
        z,
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
    /* @__PURE__ */ m(N, { component: "form", onSubmit: l(o), children: /* @__PURE__ */ L(Ie, { spacing: 3, children: [
      /* @__PURE__ */ m(
        Ne,
        {
          ...s("email"),
          fullWidth: !0,
          label: "Email Address",
          type: "email",
          placeholder: "Enter your email",
          error: !!f.email,
          helperText: f.email?.message,
          disabled: u,
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
      /* @__PURE__ */ m(
        H,
        {
          type: "submit",
          fullWidth: !0,
          variant: "contained",
          size: "large",
          disabled: u,
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
          children: u ? /* @__PURE__ */ m(Be, { size: 24, color: "inherit" }) : "Send Reset Link"
        }
      ),
      /* @__PURE__ */ m(
        H,
        {
          fullWidth: !0,
          variant: "text",
          onClick: n,
          disabled: u,
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
}, ko = ({
  brandConfig: e,
  loginState: t,
  onVerify: r,
  onVerifySuccess: o,
  onVerifyError: n,
  onResend: i,
  onBackToSignIn: s
}) => /* @__PURE__ */ L(Ee, { children: [
  /* @__PURE__ */ L(N, { sx: { textAlign: "center", mb: 3 }, children: [
    e.logo && /* @__PURE__ */ m(N, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ m(
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
    /* @__PURE__ */ m(
      z,
      {
        variant: "h5",
        component: "h1",
        sx: {
          color: e.textColor,
          fontWeight: 600,
          fontSize: { xs: "1.5rem", sm: "1.75rem" }
        },
        children: "Verify Your Identity"
      }
    )
  ] }),
  /* @__PURE__ */ m(
    Mt,
    {
      onVerify: r,
      onVerifySuccess: o,
      onVerifyError: n,
      onResend: i,
      instructionText: "Please enter the 6-digit code sent to your email",
      showResend: !0,
      resendCooldown: 60,
      expirationTime: 300,
      showExpirationTimer: !0
    }
  ),
  t === "otp-error" && /* @__PURE__ */ m(N, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ m(
    H,
    {
      variant: "text",
      onClick: s,
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
  ) })
] }), Co = ({
  brandConfig: e,
  onBackToLogin: t
}) => /* @__PURE__ */ L(Ee, { children: [
  /* @__PURE__ */ L(N, { sx: { textAlign: "center", mb: 3 }, children: [
    e.logo && /* @__PURE__ */ m(N, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ m(
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
    /* @__PURE__ */ m(
      z,
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
    /* @__PURE__ */ m(
      z,
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
  /* @__PURE__ */ m(N, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ m(
    H,
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
] }), pe = ({
  children: e,
  brandConfig: t
}) => /* @__PURE__ */ m(
  N,
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
      borderRadius: { xs: 0, sm: 2 },
      border: { xs: "none", sm: "1px solid rgba(0, 0, 0, 0.08)" },
      background: t.backgroundColor,
      display: "flex",
      flexDirection: "column",
      // Prevent horizontal overflow
      overflowX: "hidden",
      boxSizing: "border-box"
    },
    children: /* @__PURE__ */ m(
      N,
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
), en = ({
  authConfig: e,
  onLoginSuccess: t,
  onLoginError: r,
  enableRecaptcha: o = !1,
  recaptchaSiteKey: n,
  enableGoogleSignIn: i = !0,
  enableLocalSignIn: s = !0,
  enableForgetPassword: l = !0,
  enableOtp: f = !0,
  branding: u
}) => {
  const [c, h] = ie("idle"), [w, E] = ie(null), d = zt(u);
  if (Pe(() => {
    try {
      ne(e.apiBaseUrl, e.apiKey);
    } catch (b) {
      console.error("Failed to initialize API client:", b);
    }
  }, [e.apiBaseUrl, e.apiKey]), !s && !i)
    throw new Error(
      "At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)"
    );
  if (o && !n)
    throw new Error(
      "recaptchaSiteKey is required when enableRecaptcha is true"
    );
  const y = () => window.grecaptcha.execute(n, { action: "login" }).catch(() => {
    throw new Error("reCAPTCHA verification failed");
  }), p = async () => {
    if (!o || !n)
      return "";
    if (typeof window > "u" || !window.grecaptcha)
      throw new Error("reCAPTCHA is not loaded");
    return new Promise((b, T) => {
      const A = () => {
        y().then(b).catch(T);
      };
      window.grecaptcha.ready(A);
    });
  }, S = async (b) => {
    h("loading"), E(null);
    try {
      o && await p();
      const T = await J.login(b.email, b.password);
      D.setTokens(T.accessToken, T.refreshToken);
      const A = await J.getCurrentUser();
      f ? h("otp-required") : (h("success"), t({ user: A, tokens: T }));
    } catch (T) {
      const A = T;
      E({ message: A.message, type: "local" }), h("error"), r(A);
    }
  }, P = () => {
    try {
      h("google-loading"), E(null), setTimeout(() => {
        J.initiateGoogleOAuth(
          e.googleRedirectUri,
          e.apiBaseUrl
        );
      }, 300);
    } catch (b) {
      const T = b;
      E({ message: T.message, type: "google" }), h("error"), r(T);
    }
  }, R = async (b) => {
    if (await new Promise((T) => setTimeout(T, 1e3)), b === "123456")
      return { success: !0, token: "verified-token" };
    throw new Error("Invalid OTP code");
  }, O = () => {
    h("success");
    const b = D.getAccessToken(), T = D.getRefreshToken();
    b && T ? J.getCurrentUser().then((A) => {
      t({
        user: A,
        tokens: { accessToken: b, refreshToken: T }
      });
    }).catch((A) => {
      r(A);
    }) : r(new Error("Session expired. Please login again."));
  }, F = (b) => {
    E({ message: b.message, type: "otp" }), h("otp-error");
  }, j = () => {
    console.log("Resending OTP..."), w && w.type === "otp" && E(null);
  }, C = () => {
    E(null), h("idle");
  }, te = async () => {
    h("forget-password-loading"), E(null);
    try {
      o && await p(), await new Promise((b) => setTimeout(b, 1e3)), h("forget-password-success");
    } catch (b) {
      const T = b;
      E({ message: T.message, type: "forget-password" }), h("forget-password"), r(T);
    }
  }, X = () => {
    E(null), h("forget-password");
  }, re = () => {
    E(null), h("idle");
  };
  return Pe(() => {
    if (o && n && typeof window < "u") {
      const b = document.createElement("script");
      b.src = `https://www.google.com/recaptcha/enterprise.js?render=${n}`, b.async = !0, b.defer = !0, document.head.appendChild(b);
    }
  }, [o, n]), c === "otp-required" || c === "otp-error" ? /* @__PURE__ */ m(pe, { brandConfig: d, children: /* @__PURE__ */ m(
    ko,
    {
      brandConfig: d,
      loginState: c,
      onVerify: R,
      onVerifySuccess: O,
      onVerifyError: F,
      onResend: j,
      onBackToSignIn: C
    }
  ) }) : c === "forget-password-success" ? /* @__PURE__ */ m(pe, { brandConfig: d, children: /* @__PURE__ */ m(
    Co,
    {
      brandConfig: d,
      onBackToLogin: re
    }
  ) }) : c === "forget-password" || c === "forget-password-loading" ? /* @__PURE__ */ L(pe, { brandConfig: d, children: [
    /* @__PURE__ */ m(at, { brandConfig: d }),
    /* @__PURE__ */ m(
      Ao,
      {
        brandConfig: d,
        loginState: c,
        error: w,
        onSubmit: te,
        onBackToLogin: re,
        onCloseError: () => E(null)
      }
    )
  ] }) : /* @__PURE__ */ L(pe, { brandConfig: d, children: [
    /* @__PURE__ */ m(
      at,
      {
        brandConfig: d,
        title: d.companyName ? `Welcome to ${d.companyName}` : "Sign In",
        subtitle: d.tagline
      }
    ),
    w && /* @__PURE__ */ m(
      lt,
      {
        severity: "error",
        sx: { mb: 3 },
        onClose: () => E(null),
        children: w.message
      }
    ),
    /* @__PURE__ */ L(Ie, { spacing: 3, children: [
      s && /* @__PURE__ */ m(
        xo,
        {
          brandConfig: d,
          loginState: c,
          onSubmit: S,
          onForgetPassword: l ? X : void 0,
          enableForgetPassword: l
        }
      ),
      i && /* @__PURE__ */ m(
        Ro,
        {
          brandConfig: d,
          loginState: c,
          onClick: P,
          showDivider: s
        }
      ),
      c === "error" && /* @__PURE__ */ m(
        H,
        {
          fullWidth: !0,
          variant: "text",
          onClick: C,
          sx: {
            mt: 1,
            color: d.primaryColor,
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: `${d.primaryColor}08`
            }
          },
          children: "Try Again"
        }
      )
    ] })
  ] });
}, tn = (e) => {
  const [t, r] = ie(!0), [o, n] = ie(null);
  return Pe(() => {
    (async () => {
      try {
        const s = new URLSearchParams(window.location.search), l = s.get("access_token") || s.get("accessToken"), f = s.get("refresh_token") || s.get("refreshToken"), u = s.get("user"), c = s.get("error"), h = s.get("message");
        if (c) {
          const d = decodeURIComponent(h || c);
          throw new Error(d);
        }
        if (!l || !f)
          throw new Error("Missing authentication tokens in callback URL");
        D.setTokens(l, f);
        let w;
        if (u)
          try {
            const d = decodeURIComponent(u);
            w = JSON.parse(d);
          } catch (d) {
            console.warn("Failed to parse user from URL, fetching from API:", d), w = await J.getCurrentUser();
          }
        else
          w = await J.getCurrentUser();
        e?.onSuccess?.({ accessToken: l, refreshToken: f }, w);
        const E = e?.redirectPath || "/dashboard";
        window.history.replaceState({}, document.title, E), r(!1);
      } catch (s) {
        const l = s;
        n(l), e?.onError?.(l), r(!1);
      }
    })();
  }, [e?.redirectPath]), { loading: t, error: o };
}, rn = (e) => ({ logout: It(async () => {
  const r = D.getRefreshToken();
  if (e?.apiBaseUrl && r)
    try {
      await J.logout(r);
    } catch (o) {
      console.error("Logout API call failed:", o);
    }
  D.clearTokens(), window.location.href = "/login";
}, [e?.apiBaseUrl]) });
export {
  en as LumoraLogin,
  D as TokenStorage,
  zt as getBrandingConfig,
  $t as getDefaultBranding,
  tn as useAuthCallback,
  rn as useLogout
};
