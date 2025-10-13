import Pe, { useState as ge, useEffect as yr, useCallback as Gr } from "react";
import { Box as F, Typography as Q, Stack as We, TextField as Ve, Button as K, CircularProgress as Ge, Divider as Jr, Alert as Er } from "@mui/material";
import { GoogleOAuthProvider as Kr, useGoogleLogin as Yr } from "@react-oauth/google";
import { appendErrors as Xr, useForm as xr } from "react-hook-form";
import { validateFieldsNatively as Zr, toNestErrors as Qr } from "@hookform/resolvers";
import * as pe from "yup";
import { Google as et } from "@mui/icons-material";
import { LumoraOTP as rt } from "@volenday/lumora-otp-component";
var we = { exports: {} }, Ne = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function tt() {
  if (Xe) return Ne;
  Xe = 1;
  var e = Symbol.for("react.fragment");
  return Ne.Fragment = e, Ne.jsxDEV = void 0, Ne;
}
var Te = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function ot() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === de ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case h:
          return "Fragment";
        case U:
          return "Profiler";
        case w:
          return "StrictMode";
        case B:
          return "Suspense";
        case _:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case g:
            return "Portal";
          case k:
            return d.displayName || "Context";
          case N:
            return (d._context.displayName || "Context") + ".Consumer";
          case D:
            var y = d.render;
            return d = d.displayName, d || (d = y.displayName || y.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case M:
            return y = d.displayName || null, y !== null ? y : e(d.type) || "Memo";
          case $:
            y = d._payload, d = d._init;
            try {
              return e(d(y));
            } catch {
            }
        }
      return null;
    }
    function r(d) {
      return "" + d;
    }
    function t(d) {
      try {
        r(d);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var v = y.error, O = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return v.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), r(d);
      }
    }
    function o(d) {
      if (d === h) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === $)
        return "<...>";
      try {
        var y = e(d);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var d = X.A;
      return d === null ? null : d.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(d) {
      if (z.call(d, "key")) {
        var y = Object.getOwnPropertyDescriptor(d, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function l(d, y) {
      function v() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: v,
        configurable: !0
      });
    }
    function f() {
      var d = e(this.type);
      return ee[d] || (ee[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function u(d, y, v, O, x, A) {
      var T = v.ref;
      return d = {
        $$typeof: m,
        type: d,
        key: y,
        props: v,
        _owner: O
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: x
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function c(d, y, v, O, x, A) {
      var T = y.children;
      if (T !== void 0)
        if (O)
          if (W(T)) {
            for (O = 0; O < T.length; O++)
              b(T[O]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(T);
      if (z.call(y, "key")) {
        T = e(d);
        var H = Object.keys(y).filter(function(Wr) {
          return Wr !== "key";
        });
        O = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", ie[T + O] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          T,
          H,
          T
        ), ie[T + O] = !0);
      }
      if (T = null, v !== void 0 && (t(v), T = "" + v), s(y) && (t(y.key), T = "" + y.key), "key" in y) {
        v = {};
        for (var me in y)
          me !== "key" && (v[me] = y[me]);
      } else v = y;
      return T && l(
        v,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), u(
        d,
        T,
        v,
        n(),
        x,
        A
      );
    }
    function b(d) {
      R(d) ? d._store && (d._store.validated = 1) : typeof d == "object" && d !== null && d.$$typeof === $ && (d._payload.status === "fulfilled" ? R(d._payload.value) && d._payload.value._store && (d._payload.value._store.validated = 1) : d._store && (d._store.validated = 1));
    }
    function R(d) {
      return typeof d == "object" && d !== null && d.$$typeof === m;
    }
    var S = Pe, m = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), k = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), de = Symbol.for("react.client.reference"), X = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, W = Array.isArray, se = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var L, ee = {}, V = S.react_stack_bottom_frame.bind(
      S,
      a
    )(), ae = se(o(a)), ie = {};
    Te.Fragment = h, Te.jsxDEV = function(d, y, v, O) {
      var x = 1e4 > X.recentlyCreatedOwnerStacks++;
      return c(
        d,
        y,
        v,
        O,
        x ? Error("react-stack-top-frame") : V,
        x ? se(o(d)) : ae
      );
    };
  })()), Te;
}
var Qe;
function nt() {
  return Qe || (Qe = 1, process.env.NODE_ENV === "production" ? we.exports = tt() : we.exports = ot()), we.exports;
}
var p = nt();
const st = () => ({
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
}), at = (e) => ({
  ...st(),
  ...e
}), J = {
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
  setTokens: (e, r) => {
    localStorage.setItem("lumora_access_token", e), localStorage.setItem("lumora_refresh_token", r);
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
  hasTokens: () => !!(J.getAccessToken() && J.getRefreshToken())
};
function wr(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: it } = Object.prototype, { getPrototypeOf: Je } = Object, { iterator: Ue, toStringTag: Nr } = Symbol, De = /* @__PURE__ */ ((e) => (r) => {
  const t = it.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), q = (e) => (e = e.toLowerCase(), (r) => De(r) === e), Ce = (e) => (r) => typeof r === e, { isArray: ce } = Array, le = Ce("undefined");
function be(e) {
  return e !== null && !le(e) && e.constructor !== null && !le(e.constructor) && j(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Tr = q("ArrayBuffer");
function lt(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && Tr(e.buffer), r;
}
const ct = Ce("string"), j = Ce("function"), Rr = Ce("number"), ye = (e) => e !== null && typeof e == "object", ut = (e) => e === !0 || e === !1, ke = (e) => {
  if (De(e) !== "object")
    return !1;
  const r = Je(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Nr in e) && !(Ue in e);
}, dt = (e) => {
  if (!ye(e) || be(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, mt = q("Date"), ft = q("File"), pt = q("Blob"), ht = q("FileList"), gt = (e) => ye(e) && j(e.pipe), bt = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || j(e.append) && ((r = De(e)) === "formdata" || // detect form-data instance
  r === "object" && j(e.toString) && e.toString() === "[object FormData]"));
}, yt = q("URLSearchParams"), [Et, xt, wt, Nt] = ["ReadableStream", "Request", "Response", "Headers"].map(q), Tt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ee(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, n;
  if (typeof e != "object" && (e = [e]), ce(e))
    for (o = 0, n = e.length; o < n; o++)
      r.call(null, e[o], o, e);
  else {
    if (be(e))
      return;
    const a = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let l;
    for (o = 0; o < s; o++)
      l = a[o], r.call(null, e[l], l, e);
  }
}
function vr(e, r) {
  if (be(e))
    return null;
  r = r.toLowerCase();
  const t = Object.keys(e);
  let o = t.length, n;
  for (; o-- > 0; )
    if (n = t[o], r === n.toLowerCase())
      return n;
  return null;
}
const re = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Sr = (e) => !le(e) && e !== re;
function He() {
  const { caseless: e, skipUndefined: r } = Sr(this) && this || {}, t = {}, o = (n, a) => {
    const s = e && vr(t, a) || a;
    ke(t[s]) && ke(n) ? t[s] = He(t[s], n) : ke(n) ? t[s] = He({}, n) : ce(n) ? t[s] = n.slice() : (!r || !le(n)) && (t[s] = n);
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && Ee(arguments[n], o);
  return t;
}
const Rt = (e, r, t, { allOwnKeys: o } = {}) => (Ee(r, (n, a) => {
  t && j(n) ? e[a] = wr(n, t) : e[a] = n;
}, { allOwnKeys: o }), e), vt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), St = (e, r, t, o) => {
  e.prototype = Object.create(r.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, kt = (e, r, t, o) => {
  let n, a, s;
  const l = {};
  if (r = r || {}, e == null) return r;
  do {
    for (n = Object.getOwnPropertyNames(e), a = n.length; a-- > 0; )
      s = n[a], (!o || o(s, e, r)) && !l[s] && (r[s] = e[s], l[s] = !0);
    e = t !== !1 && Je(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, Ot = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const o = e.indexOf(r, t);
  return o !== -1 && o === t;
}, At = (e) => {
  if (!e) return null;
  if (ce(e)) return e;
  let r = e.length;
  if (!Rr(r)) return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, Pt = /* @__PURE__ */ ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && Je(Uint8Array)), _t = (e, r) => {
  const o = (e && e[Ue]).call(e);
  let n;
  for (; (n = o.next()) && !n.done; ) {
    const a = n.value;
    r.call(e, a[0], a[1]);
  }
}, Ut = (e, r) => {
  let t;
  const o = [];
  for (; (t = e.exec(r)) !== null; )
    o.push(t);
  return o;
}, Dt = q("HTMLFormElement"), Ct = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, o, n) {
    return o.toUpperCase() + n;
  }
), er = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), Lt = q("RegExp"), kr = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), o = {};
  Ee(t, (n, a) => {
    let s;
    (s = r(n, a, e)) !== !1 && (o[a] = s || n);
  }), Object.defineProperties(e, o);
}, Ft = (e) => {
  kr(e, (r, t) => {
    if (j(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const o = e[t];
    if (j(o)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, jt = (e, r) => {
  const t = {}, o = (n) => {
    n.forEach((a) => {
      t[a] = !0;
    });
  };
  return ce(e) ? o(e) : o(String(e).split(r)), t;
}, It = () => {
}, Bt = (e, r) => e != null && Number.isFinite(e = +e) ? e : r;
function Vt(e) {
  return !!(e && j(e.append) && e[Nr] === "FormData" && e[Ue]);
}
const Ht = (e) => {
  const r = new Array(10), t = (o, n) => {
    if (ye(o)) {
      if (r.indexOf(o) >= 0)
        return;
      if (be(o))
        return o;
      if (!("toJSON" in o)) {
        r[n] = o;
        const a = ce(o) ? [] : {};
        return Ee(o, (s, l) => {
          const f = t(s, n + 1);
          !le(f) && (a[l] = f);
        }), r[n] = void 0, a;
      }
    }
    return o;
  };
  return t(e, 0);
}, Mt = q("AsyncFunction"), qt = (e) => e && (ye(e) || j(e)) && j(e.then) && j(e.catch), Or = ((e, r) => e ? setImmediate : r ? ((t, o) => (re.addEventListener("message", ({ source: n, data: a }) => {
  n === re && a === t && o.length && o.shift()();
}, !1), (n) => {
  o.push(n), re.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  j(re.postMessage)
), $t = typeof queueMicrotask < "u" ? queueMicrotask.bind(re) : typeof process < "u" && process.nextTick || Or, zt = (e) => e != null && j(e[Ue]), i = {
  isArray: ce,
  isArrayBuffer: Tr,
  isBuffer: be,
  isFormData: bt,
  isArrayBufferView: lt,
  isString: ct,
  isNumber: Rr,
  isBoolean: ut,
  isObject: ye,
  isPlainObject: ke,
  isEmptyObject: dt,
  isReadableStream: Et,
  isRequest: xt,
  isResponse: wt,
  isHeaders: Nt,
  isUndefined: le,
  isDate: mt,
  isFile: ft,
  isBlob: pt,
  isRegExp: Lt,
  isFunction: j,
  isStream: gt,
  isURLSearchParams: yt,
  isTypedArray: Pt,
  isFileList: ht,
  forEach: Ee,
  merge: He,
  extend: Rt,
  trim: Tt,
  stripBOM: vt,
  inherits: St,
  toFlatObject: kt,
  kindOf: De,
  kindOfTest: q,
  endsWith: Ot,
  toArray: At,
  forEachEntry: _t,
  matchAll: Ut,
  isHTMLForm: Dt,
  hasOwnProperty: er,
  hasOwnProp: er,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: kr,
  freezeMethods: Ft,
  toObjectSet: jt,
  toCamelCase: Ct,
  noop: It,
  toFiniteNumber: Bt,
  findKey: vr,
  global: re,
  isContextDefined: Sr,
  isSpecCompliantForm: Vt,
  toJSONObject: Ht,
  isAsyncFn: Mt,
  isThenable: qt,
  setImmediate: Or,
  asap: $t,
  isIterable: zt
};
function E(e, r, t, o, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), o && (this.request = o), n && (this.response = n, this.status = n.status ? n.status : null);
}
i.inherits(E, Error, {
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
      config: i.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ar = E.prototype, Pr = {};
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
  Pr[e] = { value: e };
});
Object.defineProperties(E, Pr);
Object.defineProperty(Ar, "isAxiosError", { value: !0 });
E.from = (e, r, t, o, n, a) => {
  const s = Object.create(Ar);
  i.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const l = e && e.message ? e.message : "Error", f = r == null && e ? e.code : r;
  return E.call(s, l, f, t, o, n), e && s.cause == null && Object.defineProperty(s, "cause", { value: e, configurable: !0 }), s.name = e && e.name || "Error", a && Object.assign(s, a), s;
};
const Wt = null;
function Me(e) {
  return i.isPlainObject(e) || i.isArray(e);
}
function _r(e) {
  return i.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function rr(e, r, t) {
  return e ? e.concat(r).map(function(n, a) {
    return n = _r(n), !t && a ? "[" + n + "]" : n;
  }).join(t ? "." : "") : r;
}
function Gt(e) {
  return i.isArray(e) && !e.some(Me);
}
const Jt = i.toFlatObject(i, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Le(e, r, t) {
  if (!i.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), t = i.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, h) {
    return !i.isUndefined(h[g]);
  });
  const o = t.metaTokens, n = t.visitor || c, a = t.dots, s = t.indexes, f = (t.Blob || typeof Blob < "u" && Blob) && i.isSpecCompliantForm(r);
  if (!i.isFunction(n))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (i.isDate(m))
      return m.toISOString();
    if (i.isBoolean(m))
      return m.toString();
    if (!f && i.isBlob(m))
      throw new E("Blob is not supported. Use a Buffer instead.");
    return i.isArrayBuffer(m) || i.isTypedArray(m) ? f && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function c(m, g, h) {
    let w = m;
    if (m && !h && typeof m == "object") {
      if (i.endsWith(g, "{}"))
        g = o ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (i.isArray(m) && Gt(m) || (i.isFileList(m) || i.endsWith(g, "[]")) && (w = i.toArray(m)))
        return g = _r(g), w.forEach(function(N, k) {
          !(i.isUndefined(N) || N === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? rr([g], k, a) : s === null ? g : g + "[]",
            u(N)
          );
        }), !1;
    }
    return Me(m) ? !0 : (r.append(rr(h, g, a), u(m)), !1);
  }
  const b = [], R = Object.assign(Jt, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Me
  });
  function S(m, g) {
    if (!i.isUndefined(m)) {
      if (b.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      b.push(m), i.forEach(m, function(w, U) {
        (!(i.isUndefined(w) || w === null) && n.call(
          r,
          w,
          i.isString(U) ? U.trim() : U,
          g,
          R
        )) === !0 && S(w, g ? g.concat(U) : [U]);
      }), b.pop();
    }
  }
  if (!i.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), r;
}
function tr(e) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return r[o];
  });
}
function Ke(e, r) {
  this._pairs = [], e && Le(e, this, r);
}
const Ur = Ke.prototype;
Ur.append = function(r, t) {
  this._pairs.push([r, t]);
};
Ur.toString = function(r) {
  const t = r ? function(o) {
    return r.call(this, o, tr);
  } : tr;
  return this._pairs.map(function(n) {
    return t(n[0]) + "=" + t(n[1]);
  }, "").join("&");
};
function Kt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Dr(e, r, t) {
  if (!r)
    return e;
  const o = t && t.encode || Kt;
  i.isFunction(t) && (t = {
    serialize: t
  });
  const n = t && t.serialize;
  let a;
  if (n ? a = n(r, t) : a = i.isURLSearchParams(r) ? r.toString() : new Ke(r, t).toString(o), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class or {
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
  use(r, t, o) {
    return this.handlers.push({
      fulfilled: r,
      rejected: t,
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
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
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
  forEach(r) {
    i.forEach(this.handlers, function(o) {
      o !== null && r(o);
    });
  }
}
const Cr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Yt = typeof URLSearchParams < "u" ? URLSearchParams : Ke, Xt = typeof FormData < "u" ? FormData : null, Zt = typeof Blob < "u" ? Blob : null, Qt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Yt,
    FormData: Xt,
    Blob: Zt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ye = typeof window < "u" && typeof document < "u", qe = typeof navigator == "object" && navigator || void 0, eo = Ye && (!qe || ["ReactNative", "NativeScript", "NS"].indexOf(qe.product) < 0), ro = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", to = Ye && window.location.href || "http://localhost", oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ye,
  hasStandardBrowserEnv: eo,
  hasStandardBrowserWebWorkerEnv: ro,
  navigator: qe,
  origin: to
}, Symbol.toStringTag, { value: "Module" })), C = {
  ...oo,
  ...Qt
};
function no(e, r) {
  return Le(e, new C.classes.URLSearchParams(), {
    visitor: function(t, o, n, a) {
      return C.isNode && i.isBuffer(t) ? (this.append(o, t.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function so(e) {
  return i.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function ao(e) {
  const r = {}, t = Object.keys(e);
  let o;
  const n = t.length;
  let a;
  for (o = 0; o < n; o++)
    a = t[o], r[a] = e[a];
  return r;
}
function Lr(e) {
  function r(t, o, n, a) {
    let s = t[a++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), f = a >= t.length;
    return s = !s && i.isArray(n) ? n.length : s, f ? (i.hasOwnProp(n, s) ? n[s] = [n[s], o] : n[s] = o, !l) : ((!n[s] || !i.isObject(n[s])) && (n[s] = []), r(t, o, n[s], a) && i.isArray(n[s]) && (n[s] = ao(n[s])), !l);
  }
  if (i.isFormData(e) && i.isFunction(e.entries)) {
    const t = {};
    return i.forEachEntry(e, (o, n) => {
      r(so(o), n, t, 0);
    }), t;
  }
  return null;
}
function io(e, r, t) {
  if (i.isString(e))
    try {
      return (r || JSON.parse)(e), i.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (t || JSON.stringify)(e);
}
const xe = {
  transitional: Cr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, t) {
    const o = t.getContentType() || "", n = o.indexOf("application/json") > -1, a = i.isObject(r);
    if (a && i.isHTMLForm(r) && (r = new FormData(r)), i.isFormData(r))
      return n ? JSON.stringify(Lr(r)) : r;
    if (i.isArrayBuffer(r) || i.isBuffer(r) || i.isStream(r) || i.isFile(r) || i.isBlob(r) || i.isReadableStream(r))
      return r;
    if (i.isArrayBufferView(r))
      return r.buffer;
    if (i.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let l;
    if (a) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return no(r, this.formSerializer).toString();
      if ((l = i.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Le(
          l ? { "files[]": r } : r,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || n ? (t.setContentType("application/json", !1), io(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || xe.transitional, o = t && t.forcedJSONParsing, n = this.responseType === "json";
    if (i.isResponse(r) || i.isReadableStream(r))
      return r;
    if (r && i.isString(r) && (o && !this.responseType || n)) {
      const s = !(t && t.silentJSONParsing) && n;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (l) {
        if (s)
          throw l.name === "SyntaxError" ? E.from(l, E.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return r;
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
    FormData: C.classes.FormData,
    Blob: C.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
i.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  xe.headers[e] = {};
});
const lo = i.toObjectSet([
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
]), co = (e) => {
  const r = {};
  let t, o, n;
  return e && e.split(`
`).forEach(function(s) {
    n = s.indexOf(":"), t = s.substring(0, n).trim().toLowerCase(), o = s.substring(n + 1).trim(), !(!t || r[t] && lo[t]) && (t === "set-cookie" ? r[t] ? r[t].push(o) : r[t] = [o] : r[t] = r[t] ? r[t] + ", " + o : o);
  }), r;
}, nr = Symbol("internals");
function fe(e) {
  return e && String(e).trim().toLowerCase();
}
function Oe(e) {
  return e === !1 || e == null ? e : i.isArray(e) ? e.map(Oe) : String(e);
}
function uo(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = t.exec(e); )
    r[o[1]] = o[2];
  return r;
}
const mo = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function je(e, r, t, o, n) {
  if (i.isFunction(o))
    return o.call(this, r, t);
  if (n && (r = t), !!i.isString(r)) {
    if (i.isString(o))
      return r.indexOf(o) !== -1;
    if (i.isRegExp(o))
      return o.test(r);
  }
}
function fo(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, o) => t.toUpperCase() + o);
}
function po(e, r) {
  const t = i.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + t, {
      value: function(n, a, s) {
        return this[o].call(this, r, n, a, s);
      },
      configurable: !0
    });
  });
}
let I = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, t, o) {
    const n = this;
    function a(l, f, u) {
      const c = fe(f);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const b = i.findKey(n, c);
      (!b || n[b] === void 0 || u === !0 || u === void 0 && n[b] !== !1) && (n[b || f] = Oe(l));
    }
    const s = (l, f) => i.forEach(l, (u, c) => a(u, c, f));
    if (i.isPlainObject(r) || r instanceof this.constructor)
      s(r, t);
    else if (i.isString(r) && (r = r.trim()) && !mo(r))
      s(co(r), t);
    else if (i.isObject(r) && i.isIterable(r)) {
      let l = {}, f, u;
      for (const c of r) {
        if (!i.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        l[u = c[0]] = (f = l[u]) ? i.isArray(f) ? [...f, c[1]] : [f, c[1]] : c[1];
      }
      s(l, t);
    } else
      r != null && a(t, r, o);
    return this;
  }
  get(r, t) {
    if (r = fe(r), r) {
      const o = i.findKey(this, r);
      if (o) {
        const n = this[o];
        if (!t)
          return n;
        if (t === !0)
          return uo(n);
        if (i.isFunction(t))
          return t.call(this, n, o);
        if (i.isRegExp(t))
          return t.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, t) {
    if (r = fe(r), r) {
      const o = i.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!t || je(this, this[o], o, t)));
    }
    return !1;
  }
  delete(r, t) {
    const o = this;
    let n = !1;
    function a(s) {
      if (s = fe(s), s) {
        const l = i.findKey(o, s);
        l && (!t || je(o, o[l], l, t)) && (delete o[l], n = !0);
      }
    }
    return i.isArray(r) ? r.forEach(a) : a(r), n;
  }
  clear(r) {
    const t = Object.keys(this);
    let o = t.length, n = !1;
    for (; o--; ) {
      const a = t[o];
      (!r || je(this, this[a], a, r, !0)) && (delete this[a], n = !0);
    }
    return n;
  }
  normalize(r) {
    const t = this, o = {};
    return i.forEach(this, (n, a) => {
      const s = i.findKey(o, a);
      if (s) {
        t[s] = Oe(n), delete t[a];
        return;
      }
      const l = r ? fo(a) : String(a).trim();
      l !== a && delete t[a], t[l] = Oe(n), o[l] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const t = /* @__PURE__ */ Object.create(null);
    return i.forEach(this, (o, n) => {
      o != null && o !== !1 && (t[n] = r && i.isArray(o) ? o.join(", ") : o);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, t]) => r + ": " + t).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...t) {
    const o = new this(r);
    return t.forEach((n) => o.set(n)), o;
  }
  static accessor(r) {
    const o = (this[nr] = this[nr] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function a(s) {
      const l = fe(s);
      o[l] || (po(n, s), o[l] = !0);
    }
    return i.isArray(r) ? r.forEach(a) : a(r), this;
  }
};
I.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
i.reduceDescriptors(I.prototype, ({ value: e }, r) => {
  let t = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(o) {
      this[t] = o;
    }
  };
});
i.freezeMethods(I);
function Ie(e, r) {
  const t = this || xe, o = r || t, n = I.from(o.headers);
  let a = o.data;
  return i.forEach(e, function(l) {
    a = l.call(t, a, n.normalize(), r ? r.status : void 0);
  }), n.normalize(), a;
}
function Fr(e) {
  return !!(e && e.__CANCEL__);
}
function ue(e, r, t) {
  E.call(this, e ?? "canceled", E.ERR_CANCELED, r, t), this.name = "CanceledError";
}
i.inherits(ue, E, {
  __CANCEL__: !0
});
function jr(e, r, t) {
  const o = t.config.validateStatus;
  !t.status || !o || o(t.status) ? e(t) : r(new E(
    "Request failed with status code " + t.status,
    [E.ERR_BAD_REQUEST, E.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function ho(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function go(e, r) {
  e = e || 10;
  const t = new Array(e), o = new Array(e);
  let n = 0, a = 0, s;
  return r = r !== void 0 ? r : 1e3, function(f) {
    const u = Date.now(), c = o[a];
    s || (s = u), t[n] = f, o[n] = u;
    let b = a, R = 0;
    for (; b !== n; )
      R += t[b++], b = b % e;
    if (n = (n + 1) % e, n === a && (a = (a + 1) % e), u - s < r)
      return;
    const S = c && u - c;
    return S ? Math.round(R * 1e3 / S) : void 0;
  };
}
function bo(e, r) {
  let t = 0, o = 1e3 / r, n, a;
  const s = (u, c = Date.now()) => {
    t = c, n = null, a && (clearTimeout(a), a = null), e(...u);
  };
  return [(...u) => {
    const c = Date.now(), b = c - t;
    b >= o ? s(u, c) : (n = u, a || (a = setTimeout(() => {
      a = null, s(n);
    }, o - b)));
  }, () => n && s(n)];
}
const _e = (e, r, t = 3) => {
  let o = 0;
  const n = go(50, 250);
  return bo((a) => {
    const s = a.loaded, l = a.lengthComputable ? a.total : void 0, f = s - o, u = n(f), c = s <= l;
    o = s;
    const b = {
      loaded: s,
      total: l,
      progress: l ? s / l : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && l && c ? (l - s) / u : void 0,
      event: a,
      lengthComputable: l != null,
      [r ? "download" : "upload"]: !0
    };
    e(b);
  }, t);
}, sr = (e, r) => {
  const t = e != null;
  return [(o) => r[0]({
    lengthComputable: t,
    total: e,
    loaded: o
  }), r[1]];
}, ar = (e) => (...r) => i.asap(() => e(...r)), yo = C.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, r) => (t) => (t = new URL(t, C.origin), e.protocol === t.protocol && e.host === t.host && (r || e.port === t.port)))(
  new URL(C.origin),
  C.navigator && /(msie|trident)/i.test(C.navigator.userAgent)
) : () => !0, Eo = C.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, r, t, o, n, a) {
      const s = [e + "=" + encodeURIComponent(r)];
      i.isNumber(t) && s.push("expires=" + new Date(t).toGMTString()), i.isString(o) && s.push("path=" + o), i.isString(n) && s.push("domain=" + n), a === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const r = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return r ? decodeURIComponent(r[3]) : null;
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
function xo(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function wo(e, r) {
  return r ? e.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function Ir(e, r, t) {
  let o = !xo(r);
  return e && (o || t == !1) ? wo(e, r) : r;
}
const ir = (e) => e instanceof I ? { ...e } : e;
function ne(e, r) {
  r = r || {};
  const t = {};
  function o(u, c, b, R) {
    return i.isPlainObject(u) && i.isPlainObject(c) ? i.merge.call({ caseless: R }, u, c) : i.isPlainObject(c) ? i.merge({}, c) : i.isArray(c) ? c.slice() : c;
  }
  function n(u, c, b, R) {
    if (i.isUndefined(c)) {
      if (!i.isUndefined(u))
        return o(void 0, u, b, R);
    } else return o(u, c, b, R);
  }
  function a(u, c) {
    if (!i.isUndefined(c))
      return o(void 0, c);
  }
  function s(u, c) {
    if (i.isUndefined(c)) {
      if (!i.isUndefined(u))
        return o(void 0, u);
    } else return o(void 0, c);
  }
  function l(u, c, b) {
    if (b in r)
      return o(u, c);
    if (b in e)
      return o(void 0, u);
  }
  const f = {
    url: a,
    method: a,
    data: a,
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
    headers: (u, c, b) => n(ir(u), ir(c), b, !0)
  };
  return i.forEach(Object.keys({ ...e, ...r }), function(c) {
    const b = f[c] || n, R = b(e[c], r[c], c);
    i.isUndefined(R) && b !== l || (t[c] = R);
  }), t;
}
const Br = (e) => {
  const r = ne({}, e);
  let { data: t, withXSRFToken: o, xsrfHeaderName: n, xsrfCookieName: a, headers: s, auth: l } = r;
  if (r.headers = s = I.from(s), r.url = Dr(Ir(r.baseURL, r.url, r.allowAbsoluteUrls), e.params, e.paramsSerializer), l && s.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), i.isFormData(t)) {
    if (C.hasStandardBrowserEnv || C.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (i.isFunction(t.getHeaders)) {
      const f = t.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(f).forEach(([c, b]) => {
        u.includes(c.toLowerCase()) && s.set(c, b);
      });
    }
  }
  if (C.hasStandardBrowserEnv && (o && i.isFunction(o) && (o = o(r)), o || o !== !1 && yo(r.url))) {
    const f = n && a && Eo.read(a);
    f && s.set(n, f);
  }
  return r;
}, No = typeof XMLHttpRequest < "u", To = No && function(e) {
  return new Promise(function(t, o) {
    const n = Br(e);
    let a = n.data;
    const s = I.from(n.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: u } = n, c, b, R, S, m;
    function g() {
      S && S(), m && m(), n.cancelToken && n.cancelToken.unsubscribe(c), n.signal && n.signal.removeEventListener("abort", c);
    }
    let h = new XMLHttpRequest();
    h.open(n.method.toUpperCase(), n.url, !0), h.timeout = n.timeout;
    function w() {
      if (!h)
        return;
      const N = I.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), D = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: N,
        config: e,
        request: h
      };
      jr(function(_) {
        t(_), g();
      }, function(_) {
        o(_), g();
      }, D), h = null;
    }
    "onloadend" in h ? h.onloadend = w : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, h.onabort = function() {
      h && (o(new E("Request aborted", E.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(k) {
      const D = k && k.message ? k.message : "Network Error", B = new E(D, E.ERR_NETWORK, e, h);
      B.event = k || null, o(B), h = null;
    }, h.ontimeout = function() {
      let k = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const D = n.transitional || Cr;
      n.timeoutErrorMessage && (k = n.timeoutErrorMessage), o(new E(
        k,
        D.clarifyTimeoutError ? E.ETIMEDOUT : E.ECONNABORTED,
        e,
        h
      )), h = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in h && i.forEach(s.toJSON(), function(k, D) {
      h.setRequestHeader(D, k);
    }), i.isUndefined(n.withCredentials) || (h.withCredentials = !!n.withCredentials), l && l !== "json" && (h.responseType = n.responseType), u && ([R, m] = _e(u, !0), h.addEventListener("progress", R)), f && h.upload && ([b, S] = _e(f), h.upload.addEventListener("progress", b), h.upload.addEventListener("loadend", S)), (n.cancelToken || n.signal) && (c = (N) => {
      h && (o(!N || N.type ? new ue(null, e, h) : N), h.abort(), h = null);
    }, n.cancelToken && n.cancelToken.subscribe(c), n.signal && (n.signal.aborted ? c() : n.signal.addEventListener("abort", c)));
    const U = ho(n.url);
    if (U && C.protocols.indexOf(U) === -1) {
      o(new E("Unsupported protocol " + U + ":", E.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(a || null);
  });
}, Ro = (e, r) => {
  const { length: t } = e = e ? e.filter(Boolean) : [];
  if (r || t) {
    let o = new AbortController(), n;
    const a = function(u) {
      if (!n) {
        n = !0, l();
        const c = u instanceof Error ? u : this.reason;
        o.abort(c instanceof E ? c : new ue(c instanceof Error ? c.message : c));
      }
    };
    let s = r && setTimeout(() => {
      s = null, a(new E(`timeout ${r} of ms exceeded`, E.ETIMEDOUT));
    }, r);
    const l = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: f } = o;
    return f.unsubscribe = () => i.asap(l), f;
  }
}, vo = function* (e, r) {
  let t = e.byteLength;
  if (t < r) {
    yield e;
    return;
  }
  let o = 0, n;
  for (; o < t; )
    n = o + r, yield e.slice(o, n), o = n;
}, So = async function* (e, r) {
  for await (const t of ko(e))
    yield* vo(t, r);
}, ko = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const r = e.getReader();
  try {
    for (; ; ) {
      const { done: t, value: o } = await r.read();
      if (t)
        break;
      yield o;
    }
  } finally {
    await r.cancel();
  }
}, lr = (e, r, t, o) => {
  const n = So(e, r);
  let a = 0, s, l = (f) => {
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
        let b = c.byteLength;
        if (t) {
          let R = a += b;
          t(R);
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
}, cr = 64 * 1024, { isFunction: Re } = i, Oo = (({ Request: e, Response: r }) => ({
  Request: e,
  Response: r
}))(i.global), {
  ReadableStream: ur,
  TextEncoder: dr
} = i.global, mr = (e, ...r) => {
  try {
    return !!e(...r);
  } catch {
    return !1;
  }
}, Ao = (e) => {
  e = i.merge.call({
    skipUndefined: !0
  }, Oo, e);
  const { fetch: r, Request: t, Response: o } = e, n = r ? Re(r) : typeof fetch == "function", a = Re(t), s = Re(o);
  if (!n)
    return !1;
  const l = n && Re(ur), f = n && (typeof dr == "function" ? /* @__PURE__ */ ((m) => (g) => m.encode(g))(new dr()) : async (m) => new Uint8Array(await new t(m).arrayBuffer())), u = a && l && mr(() => {
    let m = !1;
    const g = new t(C.origin, {
      body: new ur(),
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }).headers.has("Content-Type");
    return m && !g;
  }), c = s && l && mr(() => i.isReadableStream(new o("").body)), b = {
    stream: c && ((m) => m.body)
  };
  n && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((m) => {
    !b[m] && (b[m] = (g, h) => {
      let w = g && g[m];
      if (w)
        return w.call(g);
      throw new E(`Response type '${m}' is not supported`, E.ERR_NOT_SUPPORT, h);
    });
  });
  const R = async (m) => {
    if (m == null)
      return 0;
    if (i.isBlob(m))
      return m.size;
    if (i.isSpecCompliantForm(m))
      return (await new t(C.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
    if (i.isArrayBufferView(m) || i.isArrayBuffer(m))
      return m.byteLength;
    if (i.isURLSearchParams(m) && (m = m + ""), i.isString(m))
      return (await f(m)).byteLength;
  }, S = async (m, g) => {
    const h = i.toFiniteNumber(m.getContentLength());
    return h ?? R(g);
  };
  return async (m) => {
    let {
      url: g,
      method: h,
      data: w,
      signal: U,
      cancelToken: N,
      timeout: k,
      onDownloadProgress: D,
      onUploadProgress: B,
      responseType: _,
      headers: M,
      withCredentials: $ = "same-origin",
      fetchOptions: Y
    } = Br(m), de = r || fetch;
    _ = _ ? (_ + "").toLowerCase() : "text";
    let X = Ro([U, N && N.toAbortSignal()], k), z = null;
    const W = X && X.unsubscribe && (() => {
      X.unsubscribe();
    });
    let se;
    try {
      if (B && u && h !== "get" && h !== "head" && (se = await S(M, w)) !== 0) {
        let d = new t(g, {
          method: "POST",
          body: w,
          duplex: "half"
        }), y;
        if (i.isFormData(w) && (y = d.headers.get("content-type")) && M.setContentType(y), d.body) {
          const [v, O] = sr(
            se,
            _e(ar(B))
          );
          w = lr(d.body, cr, v, O);
        }
      }
      i.isString($) || ($ = $ ? "include" : "omit");
      const L = a && "credentials" in t.prototype, ee = {
        ...Y,
        signal: X,
        method: h.toUpperCase(),
        headers: M.normalize().toJSON(),
        body: w,
        duplex: "half",
        credentials: L ? $ : void 0
      };
      z = a && new t(g, ee);
      let V = await (a ? de(z, Y) : de(g, ee));
      const ae = c && (_ === "stream" || _ === "response");
      if (c && (D || ae && W)) {
        const d = {};
        ["status", "statusText", "headers"].forEach((x) => {
          d[x] = V[x];
        });
        const y = i.toFiniteNumber(V.headers.get("content-length")), [v, O] = D && sr(
          y,
          _e(ar(D), !0)
        ) || [];
        V = new o(
          lr(V.body, cr, v, () => {
            O && O(), W && W();
          }),
          d
        );
      }
      _ = _ || "text";
      let ie = await b[i.findKey(b, _) || "text"](V, m);
      return !ae && W && W(), await new Promise((d, y) => {
        jr(d, y, {
          data: ie,
          headers: I.from(V.headers),
          status: V.status,
          statusText: V.statusText,
          config: m,
          request: z
        });
      });
    } catch (L) {
      throw W && W(), L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message) ? Object.assign(
        new E("Network Error", E.ERR_NETWORK, m, z),
        {
          cause: L.cause || L
        }
      ) : E.from(L, L && L.code, m, z);
    }
  };
}, Po = /* @__PURE__ */ new Map(), Vr = (e) => {
  let r = e ? e.env : {};
  const { fetch: t, Request: o, Response: n } = r, a = [
    o,
    n,
    t
  ];
  let s = a.length, l = s, f, u, c = Po;
  for (; l--; )
    f = a[l], u = c.get(f), u === void 0 && c.set(f, u = l ? /* @__PURE__ */ new Map() : Ao(r)), c = u;
  return u;
};
Vr();
const $e = {
  http: Wt,
  xhr: To,
  fetch: {
    get: Vr
  }
};
i.forEach($e, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const fr = (e) => `- ${e}`, _o = (e) => i.isFunction(e) || e === null || e === !1, Hr = {
  getAdapter: (e, r) => {
    e = i.isArray(e) ? e : [e];
    const { length: t } = e;
    let o, n;
    const a = {};
    for (let s = 0; s < t; s++) {
      o = e[s];
      let l;
      if (n = o, !_o(o) && (n = $e[(l = String(o)).toLowerCase()], n === void 0))
        throw new E(`Unknown adapter '${l}'`);
      if (n && (i.isFunction(n) || (n = n.get(r))))
        break;
      a[l || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(a).map(
        ([f, u]) => `adapter ${f} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? s.length > 1 ? `since :
` + s.map(fr).join(`
`) : " " + fr(s[0]) : "as no adapter specified";
      throw new E(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: $e
};
function Be(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ue(null, e);
}
function pr(e) {
  return Be(e), e.headers = I.from(e.headers), e.data = Ie.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Hr.getAdapter(e.adapter || xe.adapter, e)(e).then(function(o) {
    return Be(e), o.data = Ie.call(
      e,
      e.transformResponse,
      o
    ), o.headers = I.from(o.headers), o;
  }, function(o) {
    return Fr(o) || (Be(e), o && o.response && (o.response.data = Ie.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = I.from(o.response.headers))), Promise.reject(o);
  });
}
const Mr = "1.12.2", Fe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  Fe[e] = function(o) {
    return typeof o === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const hr = {};
Fe.transitional = function(r, t, o) {
  function n(a, s) {
    return "[Axios v" + Mr + "] Transitional option '" + a + "'" + s + (o ? ". " + o : "");
  }
  return (a, s, l) => {
    if (r === !1)
      throw new E(
        n(s, " has been removed" + (t ? " in " + t : "")),
        E.ERR_DEPRECATED
      );
    return t && !hr[s] && (hr[s] = !0, console.warn(
      n(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(a, s, l) : !0;
  };
};
Fe.spelling = function(r) {
  return (t, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function Uo(e, r, t) {
  if (typeof e != "object")
    throw new E("options must be an object", E.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let n = o.length;
  for (; n-- > 0; ) {
    const a = o[n], s = r[a];
    if (s) {
      const l = e[a], f = l === void 0 || s(l, a, e);
      if (f !== !0)
        throw new E("option " + a + " must be " + f, E.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new E("Unknown option " + a, E.ERR_BAD_OPTION);
  }
}
const Ae = {
  assertOptions: Uo,
  validators: Fe
}, G = Ae.validators;
let oe = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new or(),
      response: new or()
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
  async request(r, t) {
    try {
      return await this._request(r, t);
    } catch (o) {
      if (o instanceof Error) {
        let n = {};
        Error.captureStackTrace ? Error.captureStackTrace(n) : n = new Error();
        const a = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? a && !String(o.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + a) : o.stack = a;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(r, t) {
    typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = ne(this.defaults, t);
    const { transitional: o, paramsSerializer: n, headers: a } = t;
    o !== void 0 && Ae.assertOptions(o, {
      silentJSONParsing: G.transitional(G.boolean),
      forcedJSONParsing: G.transitional(G.boolean),
      clarifyTimeoutError: G.transitional(G.boolean)
    }, !1), n != null && (i.isFunction(n) ? t.paramsSerializer = {
      serialize: n
    } : Ae.assertOptions(n, {
      encode: G.function,
      serialize: G.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Ae.assertOptions(t, {
      baseUrl: G.spelling("baseURL"),
      withXsrfToken: G.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = a && i.merge(
      a.common,
      a[t.method]
    );
    a && i.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete a[m];
      }
    ), t.headers = I.concat(s, a);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(t) === !1 || (f = f && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let c, b = 0, R;
    if (!f) {
      const m = [pr.bind(this), void 0];
      for (m.unshift(...l), m.push(...u), R = m.length, c = Promise.resolve(t); b < R; )
        c = c.then(m[b++], m[b++]);
      return c;
    }
    R = l.length;
    let S = t;
    for (; b < R; ) {
      const m = l[b++], g = l[b++];
      try {
        S = m(S);
      } catch (h) {
        g.call(this, h);
        break;
      }
    }
    try {
      c = pr.call(this, S);
    } catch (m) {
      return Promise.reject(m);
    }
    for (b = 0, R = u.length; b < R; )
      c = c.then(u[b++], u[b++]);
    return c;
  }
  getUri(r) {
    r = ne(this.defaults, r);
    const t = Ir(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Dr(t, r.params, r.paramsSerializer);
  }
};
i.forEach(["delete", "get", "head", "options"], function(r) {
  oe.prototype[r] = function(t, o) {
    return this.request(ne(o || {}, {
      method: r,
      url: t,
      data: (o || {}).data
    }));
  };
});
i.forEach(["post", "put", "patch"], function(r) {
  function t(o) {
    return function(a, s, l) {
      return this.request(ne(l || {}, {
        method: r,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  oe.prototype[r] = t(), oe.prototype[r + "Form"] = t(!0);
});
let Do = class qr {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(a) {
      t = a;
    });
    const o = this;
    this.promise.then((n) => {
      if (!o._listeners) return;
      let a = o._listeners.length;
      for (; a-- > 0; )
        o._listeners[a](n);
      o._listeners = null;
    }), this.promise.then = (n) => {
      let a;
      const s = new Promise((l) => {
        o.subscribe(l), a = l;
      }).then(n);
      return s.cancel = function() {
        o.unsubscribe(a);
      }, s;
    }, r(function(a, s, l) {
      o.reason || (o.reason = new ue(a, s, l), t(o.reason));
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
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(r);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), t = (o) => {
      r.abort(o);
    };
    return this.subscribe(t), r.signal.unsubscribe = () => this.unsubscribe(t), r.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new qr(function(n) {
        r = n;
      }),
      cancel: r
    };
  }
};
function Co(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function Lo(e) {
  return i.isObject(e) && e.isAxiosError === !0;
}
const ze = {
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
Object.entries(ze).forEach(([e, r]) => {
  ze[r] = e;
});
function $r(e) {
  const r = new oe(e), t = wr(oe.prototype.request, r);
  return i.extend(t, oe.prototype, r, { allOwnKeys: !0 }), i.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(n) {
    return $r(ne(e, n));
  }, t;
}
const P = $r(xe);
P.Axios = oe;
P.CanceledError = ue;
P.CancelToken = Do;
P.isCancel = Fr;
P.VERSION = Mr;
P.toFormData = Le;
P.AxiosError = E;
P.Cancel = P.CanceledError;
P.all = function(r) {
  return Promise.all(r);
};
P.spread = Co;
P.isAxiosError = Lo;
P.mergeConfig = ne;
P.AxiosHeaders = I;
P.formToJSON = (e) => Lr(i.isHTMLForm(e) ? new FormData(e) : e);
P.getAdapter = Hr.getAdapter;
P.HttpStatusCode = ze;
P.default = P;
const {
  Axios: rn,
  AxiosError: tn,
  CanceledError: on,
  isCancel: nn,
  CancelToken: sn,
  VERSION: an,
  all: ln,
  Cancel: cn,
  isAxiosError: un,
  spread: dn,
  toFormData: mn,
  AxiosHeaders: fn,
  HttpStatusCode: pn,
  formToJSON: hn,
  getAdapter: gn,
  mergeConfig: bn
} = P, Z = {
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
}, Fo = {
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
}, jo = (e, r) => {
  const t = P.create({
    baseURL: e,
    timeout: Z.DEFAULT_CONFIG.TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      ...r && { "X-API-Key": r }
    }
  });
  return t.interceptors.request.use(
    (o) => {
      const n = J.getAccessToken();
      return n && o.headers && (o.headers.Authorization = `Bearer ${n}`), o;
    },
    (o) => Promise.reject(o)
  ), t.interceptors.response.use(
    (o) => o,
    async (o) => {
      const n = o.config;
      if (o.response?.status === Z.STATUS_CODES.UNAUTHORIZED && !n._retry) {
        n._retry = !0;
        try {
          const a = J.getRefreshToken();
          if (!a)
            throw new Error(Fo.NO_REFRESH_TOKEN);
          const s = await t.post(Z.ENDPOINTS.REFRESH, {
            refreshToken: a
          }), l = {
            accessToken: s.data.accessToken,
            refreshToken: s.data.refreshToken
          };
          return J.setTokens(l.accessToken, l.refreshToken), n.headers && (n.headers.Authorization = `Bearer ${l.accessToken}`), t(n);
        } catch (a) {
          return J.clearTokens(), window.location.href = "/login", Promise.reject(a);
        }
      }
      return Promise.reject(o);
    }
  ), t;
};
let ve = null;
const te = (e, r) => {
  if (!ve && e && (ve = jo(e, r)), !ve)
    throw new Error("API client not initialized. Please provide baseURL.");
  return ve;
}, he = {
  /**
   * Authenticate user with email and password
   * @param email - User's email address
   * @param password - User's password
   * @returns Promise resolving to authentication tokens
   */
  login: async (e, r) => {
    try {
      const o = await te().post(Z.ENDPOINTS.LOGIN, {
        email: e,
        password: r
      });
      return {
        accessToken: o.data.accessToken,
        refreshToken: o.data.refreshToken
      };
    } catch (t) {
      throw new Error(
        t.response?.data?.message || t.message || "Login failed"
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
      await te().post(Z.ENDPOINTS.LOGOUT, {
        refreshToken: e
      });
    } catch (r) {
      console.error("Logout API call failed:", r);
    }
  },
  /**
   * Refresh access token using refresh token
   * @param refreshToken - The refresh token
   * @returns Promise resolving to new authentication tokens
   */
  refresh: async (e) => {
    try {
      const t = await te().post(Z.ENDPOINTS.REFRESH, {
        refreshToken: e
      });
      return {
        accessToken: t.data.accessToken,
        refreshToken: t.data.refreshToken
      };
    } catch (r) {
      throw new Error(
        r.response?.data?.message || r.message || "Token refresh failed"
      );
    }
  },
  /**
   * Get current user profile
   * @returns Promise resolving to user profile
   */
  getCurrentUser: async () => {
    try {
      const r = await te().get(Z.ENDPOINTS.USER_ME);
      return {
        id: r.data.id,
        email: r.data.email,
        name: r.data.name
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
  initiateGoogleOAuth: (e, r) => {
    const t = `${r}${Z.ENDPOINTS.GOOGLE_AUTH}?redirect_uri=${encodeURIComponent(e)}`;
    console.log("Redirecting to Google OAuth:", t), window.location.href = t;
  }
}, gr = ({
  brandConfig: e,
  title: r,
  subtitle: t
}) => /* @__PURE__ */ p.jsxDEV(F, { sx: { textAlign: "center", mb: 4 }, children: [
  e.logo && /* @__PURE__ */ p.jsxDEV(F, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ p.jsxDEV(
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
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/BrandingHeader.tsx",
      lineNumber: 21,
      columnNumber: 7
    },
    void 0
  ) : e.logo }, void 0, !1, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/BrandingHeader.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, void 0),
  r && /* @__PURE__ */ p.jsxDEV(
    Q,
    {
      variant: "h4",
      component: "h1",
      sx: {
        mb: 1,
        color: e.textColor,
        fontWeight: 600,
        fontSize: { xs: "1.75rem", sm: "2rem" }
      },
      children: r
    },
    void 0,
    !1,
    {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/BrandingHeader.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    void 0
  ),
  t && /* @__PURE__ */ p.jsxDEV(
    Q,
    {
      variant: "body1",
      sx: {
        color: e.textColor,
        opacity: 0.7,
        fontSize: "0.95rem"
      },
      children: t
    },
    void 0,
    !1,
    {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/BrandingHeader.tsx",
      lineNumber: 52,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, !0, {
  fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/BrandingHeader.tsx",
  lineNumber: 17,
  columnNumber: 3
}, void 0);
function zr(e, r, t) {
  return t === void 0 && (t = {}), function(o, n, a) {
    try {
      return Promise.resolve((function(s, l) {
        try {
          var f = (r != null && r.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(e[t.mode === "sync" ? "validateSync" : "validate"](o, Object.assign({ abortEarly: !1 }, r, { context: n }))).then(function(u) {
            return a.shouldUseNativeValidation && Zr({}, a), { values: t.raw ? Object.assign({}, o) : u, errors: {} };
          }));
        } catch (u) {
          return l(u);
        }
        return f && f.then ? f.then(void 0, l) : f;
      })(0, function(s) {
        if (!s.inner) throw s;
        return { values: {}, errors: Qr((l = s, f = !a.shouldUseNativeValidation && a.criteriaMode === "all", (l.inner || []).reduce(function(u, c) {
          if (u[c.path] || (u[c.path] = { message: c.message, type: c.type }), f) {
            var b = u[c.path].types, R = b && b[c.type];
            u[c.path] = Xr(c.path, f, u, c.type, R ? [].concat(R, c.message) : c.message);
          }
          return u;
        }, {})), a) };
        var l, f;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}
const Io = pe.object({
  email: pe.string().email("Please enter a valid email address").required("Email is required"),
  password: pe.string().min(6, "Password must be at least 6 characters").required("Password is required")
}), Bo = ({
  brandConfig: e,
  loginState: r,
  onSubmit: t,
  onForgetPassword: o,
  enableForgetPassword: n = !0
}) => {
  const [a, s] = ge(!1), {
    register: l,
    handleSubmit: f,
    formState: { errors: u }
  } = xr({
    resolver: zr(Io)
  }), c = r === "loading" || r === "google-loading";
  return /* @__PURE__ */ p.jsxDEV(F, { component: "form", onSubmit: f(t), children: /* @__PURE__ */ p.jsxDEV(We, { spacing: 3, children: [
    /* @__PURE__ */ p.jsxDEV(
      Ve,
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
      },
      void 0,
      !1,
      {
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LoginForm.tsx",
        lineNumber: 50,
        columnNumber: 5
      },
      void 0
    ),
    /* @__PURE__ */ p.jsxDEV(
      Ve,
      {
        ...l("password"),
        fullWidth: !0,
        label: "Password",
        type: a ? "text" : "password",
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
            endAdornment: /* @__PURE__ */ p.jsxDEV(
              K,
              {
                size: "small",
                onClick: () => s(!a),
                disabled: c,
                sx: {
                  color: e.primaryColor,
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: `${e.primaryColor}10`
                  }
                },
                children: a ? "Hide" : "Show"
              },
              void 0,
              !1,
              {
                fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LoginForm.tsx",
                lineNumber: 101,
                columnNumber: 9
              },
              void 0
            )
          }
        }
      },
      void 0,
      !1,
      {
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LoginForm.tsx",
        lineNumber: 75,
        columnNumber: 5
      },
      void 0
    ),
    /* @__PURE__ */ p.jsxDEV(
      K,
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
        children: r === "loading" ? /* @__PURE__ */ p.jsxDEV(Ge, { size: 24, color: "inherit" }, void 0, !1, {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LoginForm.tsx",
          lineNumber: 147,
          columnNumber: 7
        }, void 0) : "Sign In"
      },
      void 0,
      !1,
      {
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LoginForm.tsx",
        lineNumber: 123,
        columnNumber: 5
      },
      void 0
    ),
    n && o && /* @__PURE__ */ p.jsxDEV(F, { textAlign: "right", sx: { mt: 1 }, children: /* @__PURE__ */ p.jsxDEV(
      K,
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
      },
      void 0,
      !1,
      {
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LoginForm.tsx",
        lineNumber: 155,
        columnNumber: 7
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LoginForm.tsx",
      lineNumber: 154,
      columnNumber: 6
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LoginForm.tsx",
    lineNumber: 49,
    columnNumber: 4
  }, void 0) }, void 0, !1, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LoginForm.tsx",
    lineNumber: 48,
    columnNumber: 3
  }, void 0);
}, Vo = ({
  brandConfig: e,
  loginState: r,
  onClick: t,
  showDivider: o = !1
}) => {
  const n = r === "loading" || r === "google-loading";
  return /* @__PURE__ */ p.jsxDEV(p.Fragment, { children: [
    o && /* @__PURE__ */ p.jsxDEV(Jr, { sx: { my: 1 }, children: /* @__PURE__ */ p.jsxDEV(
      Q,
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
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
        lineNumber: 26,
        columnNumber: 6
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
      lineNumber: 25,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ p.jsxDEV(
      K,
      {
        fullWidth: !0,
        variant: "outlined",
        size: "large",
        startIcon: r === "google-loading" ? /* @__PURE__ */ p.jsxDEV(Ge, { size: 20, color: "inherit" }, void 0, !1, {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, void 0) : /* @__PURE__ */ p.jsxDEV(et, {}, void 0, !1, {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, void 0),
        onClick: t,
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
        children: r === "google-loading" ? "Signing in..." : "Continue with Google"
      },
      void 0,
      !1,
      {
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
        lineNumber: 40,
        columnNumber: 4
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
    lineNumber: 23,
    columnNumber: 3
  }, void 0);
}, Ho = pe.object({
  email: pe.string().email("Please enter a valid email address").required("Email is required")
}), Mo = ({
  brandConfig: e,
  loginState: r,
  error: t,
  onSubmit: o,
  onBackToLogin: n,
  onCloseError: a
}) => {
  const {
    register: s,
    handleSubmit: l,
    formState: { errors: f }
  } = xr({
    resolver: zr(Ho)
  }), u = r === "forget-password-loading";
  return /* @__PURE__ */ p.jsxDEV(p.Fragment, { children: [
    t && /* @__PURE__ */ p.jsxDEV(Er, { severity: "error", sx: { mb: 3 }, onClose: a, children: t.message }, void 0, !1, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ p.jsxDEV(F, { sx: { textAlign: "center", mb: 3 }, children: [
      /* @__PURE__ */ p.jsxDEV(
        Q,
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
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 65,
          columnNumber: 5
        },
        void 0
      ),
      /* @__PURE__ */ p.jsxDEV(
        Q,
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
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 78,
          columnNumber: 5
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 64,
      columnNumber: 4
    }, void 0),
    /* @__PURE__ */ p.jsxDEV(F, { component: "form", onSubmit: l(o), children: /* @__PURE__ */ p.jsxDEV(We, { spacing: 3, children: [
      /* @__PURE__ */ p.jsxDEV(
        Ve,
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
        },
        void 0,
        !1,
        {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 94,
          columnNumber: 6
        },
        void 0
      ),
      /* @__PURE__ */ p.jsxDEV(
        K,
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
          children: u ? /* @__PURE__ */ p.jsxDEV(Ge, { size: 24, color: "inherit" }, void 0, !1, {
            fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
            lineNumber: 143,
            columnNumber: 8
          }, void 0) : "Send Reset Link"
        },
        void 0,
        !1,
        {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 119,
          columnNumber: 6
        },
        void 0
      ),
      /* @__PURE__ */ p.jsxDEV(
        K,
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
        },
        void 0,
        !1,
        {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 149,
          columnNumber: 6
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 93,
      columnNumber: 5
    }, void 0) }, void 0, !1, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 92,
      columnNumber: 4
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
    lineNumber: 56,
    columnNumber: 3
  }, void 0);
}, qo = ({
  brandConfig: e,
  loginState: r,
  onVerify: t,
  onVerifySuccess: o,
  onVerifyError: n,
  onResend: a,
  onBackToSignIn: s
}) => /* @__PURE__ */ p.jsxDEV(p.Fragment, { children: [
  /* @__PURE__ */ p.jsxDEV(F, { sx: { textAlign: "center", mb: 3 }, children: [
    e.logo && /* @__PURE__ */ p.jsxDEV(F, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ p.jsxDEV(
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
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/OTPVerification.tsx",
        lineNumber: 32,
        columnNumber: 8
      },
      void 0
    ) : e.logo }, void 0, !1, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/OTPVerification.tsx",
      lineNumber: 30,
      columnNumber: 6
    }, void 0),
    /* @__PURE__ */ p.jsxDEV(
      Q,
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
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/OTPVerification.tsx",
        lineNumber: 47,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/OTPVerification.tsx",
    lineNumber: 28,
    columnNumber: 4
  }, void 0),
  /* @__PURE__ */ p.jsxDEV(
    rt,
    {
      onVerify: t,
      onVerifySuccess: o,
      onVerifyError: n,
      onResend: a,
      instructionText: "Please enter the 6-digit code sent to your email",
      showResend: !0,
      resendCooldown: 60,
      expirationTime: 300,
      showExpirationTimer: !0
    },
    void 0,
    !1,
    {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/OTPVerification.tsx",
      lineNumber: 60,
      columnNumber: 4
    },
    void 0
  ),
  r === "otp-error" && /* @__PURE__ */ p.jsxDEV(F, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ p.jsxDEV(
    K,
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
    },
    void 0,
    !1,
    {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/OTPVerification.tsx",
      lineNumber: 74,
      columnNumber: 6
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/OTPVerification.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, void 0)
] }, void 0, !0, {
  fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/OTPVerification.tsx",
  lineNumber: 26,
  columnNumber: 3
}, void 0), $o = ({
  brandConfig: e,
  onBackToLogin: r
}) => /* @__PURE__ */ p.jsxDEV(p.Fragment, { children: [
  /* @__PURE__ */ p.jsxDEV(F, { sx: { textAlign: "center", mb: 3 }, children: [
    e.logo && /* @__PURE__ */ p.jsxDEV(F, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ p.jsxDEV(
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
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
        lineNumber: 21,
        columnNumber: 8
      },
      void 0
    ) : e.logo }, void 0, !1, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
      lineNumber: 19,
      columnNumber: 6
    }, void 0),
    /* @__PURE__ */ p.jsxDEV(
      Q,
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
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
        lineNumber: 36,
        columnNumber: 5
      },
      void 0
    ),
    /* @__PURE__ */ p.jsxDEV(
      Q,
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
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
        lineNumber: 50,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
    lineNumber: 17,
    columnNumber: 4
  }, void 0),
  /* @__PURE__ */ p.jsxDEV(F, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ p.jsxDEV(
    K,
    {
      variant: "contained",
      onClick: r,
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
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
      lineNumber: 65,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
    lineNumber: 64,
    columnNumber: 4
  }, void 0)
] }, void 0, !0, {
  fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
  lineNumber: 15,
  columnNumber: 3
}, void 0), Se = ({
  children: e,
  brandConfig: r
}) => /* @__PURE__ */ p.jsxDEV(
  F,
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
      background: r.backgroundColor,
      display: "flex",
      flexDirection: "column",
      // Prevent horizontal overflow
      overflowX: "hidden",
      boxSizing: "border-box"
    },
    children: /* @__PURE__ */ p.jsxDEV(
      F,
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
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LoginContainer.tsx",
        lineNumber: 39,
        columnNumber: 4
      },
      void 0
    )
  },
  void 0,
  !1,
  {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LoginContainer.tsx",
    lineNumber: 15,
    columnNumber: 3
  },
  void 0
), zo = ({
  onGoogleLogin: e,
  onLoginError: r,
  setLoginState: t,
  setError: o,
  googleLoginRef: n
}) => {
  const a = Yr({
    onSuccess: (s) => {
      t("google-loading"), o(null);
      try {
        const l = {
          access_token: s.access_token,
          expires_in: s.expires_in,
          scope: s.scope,
          token_type: s.token_type
        };
        e(l), setTimeout(() => {
          t("otp-required");
        }, 1e3);
      } catch (l) {
        const f = l;
        o({ message: f.message, type: "google" }), t("error"), r(f);
      }
    },
    onError: (s) => {
      o({
        message: s.error_description || "Google sign-in failed",
        type: "google"
      }), t("error"), r(
        new Error(s.error_description || "Google sign-in failed")
      );
    }
  });
  return Pe.useEffect(() => {
    n.current = a;
  }, [a, n]), null;
}, br = ({
  authConfig: e,
  onLocalLogin: r,
  onGoogleLogin: t,
  onLoginSuccess: o,
  onLoginError: n,
  onForgetPassword: a,
  enableRecaptcha: s = !1,
  recaptchaSiteKey: l,
  googleClientId: f,
  enableGoogleSignIn: u = !0,
  enableLocalSignIn: c = !0,
  enableForgetPassword: b = !0,
  enableOtp: R = !0,
  branding: S
}) => {
  const [m, g] = ge("idle"), [h, w] = ge(null), U = Pe.useRef(null), N = at(S), k = e?.useApiIntegration && e?.apiBaseUrl, D = void 0, B = void 0, _ = void 0, M = void 0;
  if (console.log("LumoraLogin mode detection:", {
    authConfig: e,
    isApiMode: k,
    enableGoogleSignIn: u,
    envGoogleClientId: D,
    envGoogleCallbackUrl: B,
    envApiBaseUrl: _,
    envApiKey: M
  }), Pe.useEffect(() => {
    if (k)
      try {
        const x = e?.apiBaseUrl || _, A = e?.apiKey || M;
        x && te(x, A);
      } catch (x) {
        console.error("Failed to initialize API client:", x);
      }
  }, [k, e?.apiBaseUrl, e?.apiKey, _, M]), !c && !u)
    throw new Error(
      "At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)"
    );
  if (s && !l)
    throw new Error(
      "recaptchaSiteKey is required when enableRecaptcha is true"
    );
  const $ = () => window.grecaptcha.execute(l, { action: "login" }).catch(() => {
    throw new Error("reCAPTCHA verification failed");
  }), Y = async () => {
    if (!s || !l)
      return "";
    if (typeof window > "u" || !window.grecaptcha)
      throw new Error("reCAPTCHA is not loaded");
    return new Promise((x, A) => {
      const T = () => {
        $().then(x).catch(A);
      };
      window.grecaptcha.ready(T);
    });
  }, z = k ? async (x) => {
    g("loading"), w(null);
    try {
      s && await Y();
      const A = e?.apiBaseUrl || _, T = e?.apiKey || M;
      A && T && te(A, T);
      const H = await he.login(x.email, x.password);
      J.setTokens(H.accessToken, H.refreshToken);
      const me = await he.getCurrentUser();
      R ? g("otp-required") : (g("success"), o({ user: me, tokens: H }));
    } catch (A) {
      const T = A;
      w({ message: T.message, type: "local" }), g("error"), n(T);
    }
  } : async (x) => {
    g("loading"), w(null);
    try {
      s && await Y(), await r(x.email, x.password), g("otp-required");
    } catch (A) {
      const T = A;
      w({ message: T.message, type: "local" }), g("error"), n(T);
    }
  }, L = k ? () => {
    const x = e?.apiBaseUrl || _, A = e?.googleRedirectUri || B, T = e?.apiKey || M;
    if (x && A) {
      if (T)
        try {
          te(x, T);
        } catch (H) {
          console.error("Failed to initialize API client for Google OAuth:", H);
        }
      he.initiateGoogleOAuth(A, x);
    } else
      n(new Error("Google OAuth configuration is incomplete. Please set GOOGLE_CALLBACK_URL and FRONTEND_URL environment variables or provide authConfig."));
  } : () => {
    U.current ? U.current() : n(new Error("Google OAuth is not properly configured for legacy mode. Please set GOOGLE_CLIENT_ID environment variable or provide googleClientId prop."));
  }, ee = async (x) => {
    if (await new Promise((A) => setTimeout(A, 1e3)), x === "123456")
      return { success: !0, token: "verified-token" };
    throw new Error("Invalid OTP code");
  }, V = (x) => {
    g("success"), o(x);
  }, ae = (x) => {
    w({ message: x.message, type: "otp" }), g("otp-error");
  }, ie = () => {
    console.log("Resending OTP..."), h && h.type === "otp" && w(null);
  }, d = () => {
    w(null), g("idle");
  }, y = async (x) => {
    if (!a) {
      w({
        message: "Forget password functionality is not available",
        type: "forget-password"
      });
      return;
    }
    g("forget-password-loading"), w(null);
    try {
      s && await Y(), await a(x.email), g("forget-password-success");
    } catch (A) {
      const T = A;
      w({ message: T.message, type: "forget-password" }), g("forget-password"), n(T);
    }
  }, v = () => {
    w(null), g("forget-password");
  }, O = () => {
    w(null), g("idle");
  };
  return yr(() => {
    if (s && l && typeof window < "u") {
      const x = document.createElement("script");
      x.src = `https://www.google.com/recaptcha/enterprise.js?render=${l}`, x.async = !0, x.defer = !0, document.head.appendChild(x);
    }
  }, [s, l]), m === "otp-required" || m === "otp-error" ? /* @__PURE__ */ p.jsxDEV(Se, { brandConfig: N, children: /* @__PURE__ */ p.jsxDEV(
    qo,
    {
      brandConfig: N,
      loginState: m,
      onVerify: ee,
      onVerifySuccess: V,
      onVerifyError: ae,
      onResend: ie,
      onBackToSignIn: d
    },
    void 0,
    !1,
    {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 414,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 413,
    columnNumber: 4
  }, void 0) : m === "forget-password-success" ? /* @__PURE__ */ p.jsxDEV(Se, { brandConfig: N, children: /* @__PURE__ */ p.jsxDEV(
    $o,
    {
      brandConfig: N,
      onBackToLogin: O
    },
    void 0,
    !1,
    {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 431,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 430,
    columnNumber: 4
  }, void 0) : m === "forget-password" || m === "forget-password-loading" ? /* @__PURE__ */ p.jsxDEV(Se, { brandConfig: N, children: [
    /* @__PURE__ */ p.jsxDEV(gr, { brandConfig: N }, void 0, !1, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 446,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ p.jsxDEV(
      Mo,
      {
        brandConfig: N,
        loginState: m,
        error: h,
        onSubmit: y,
        onBackToLogin: O,
        onCloseError: () => w(null)
      },
      void 0,
      !1,
      {
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 447,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 445,
    columnNumber: 4
  }, void 0) : /* @__PURE__ */ p.jsxDEV(Se, { brandConfig: N, children: [
    /* @__PURE__ */ p.jsxDEV(
      gr,
      {
        brandConfig: N,
        title: N.companyName ? `Welcome to ${N.companyName}` : "Sign In",
        subtitle: N.tagline
      },
      void 0,
      !1,
      {
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 462,
        columnNumber: 4
      },
      void 0
    ),
    h && /* @__PURE__ */ p.jsxDEV(
      Er,
      {
        severity: "error",
        sx: { mb: 3 },
        onClose: () => w(null),
        children: h.message
      },
      void 0,
      !1,
      {
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 473,
        columnNumber: 5
      },
      void 0
    ),
    /* @__PURE__ */ p.jsxDEV(We, { spacing: 3, children: [
      c && /* @__PURE__ */ p.jsxDEV(
        Bo,
        {
          brandConfig: N,
          loginState: m,
          onSubmit: z,
          onForgetPassword: a ? v : void 0,
          enableForgetPassword: b
        },
        void 0,
        !1,
        {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 484,
          columnNumber: 6
        },
        void 0
      ),
      u && /* @__PURE__ */ p.jsxDEV(
        Vo,
        {
          brandConfig: N,
          loginState: m,
          onClick: L,
          showDivider: c
        },
        void 0,
        !1,
        {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 498,
          columnNumber: 6
        },
        void 0
      ),
      m === "error" && /* @__PURE__ */ p.jsxDEV(
        K,
        {
          fullWidth: !0,
          variant: "text",
          onClick: d,
          sx: {
            mt: 1,
            color: N.primaryColor,
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: `${N.primaryColor}08`
            }
          },
          children: "Try Again"
        },
        void 0,
        !1,
        {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 507,
          columnNumber: 6
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 482,
      columnNumber: 4
    }, void 0),
    !k && u && (f || D) && /* @__PURE__ */ p.jsxDEV(
      zo,
      {
        onGoogleLogin: t,
        onLoginError: n,
        setLoginState: g,
        setError: w,
        googleLoginRef: U
      },
      void 0,
      !1,
      {
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 529,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 461,
    columnNumber: 3
  }, void 0);
}, yn = (e) => {
  const { googleClientId: r, enableGoogleSignIn: t, authConfig: o } = e, a = r || void 0;
  return !(o?.useApiIntegration && o?.apiBaseUrl) && t && a ? /* @__PURE__ */ p.jsxDEV(Kr, { clientId: a, children: /* @__PURE__ */ p.jsxDEV(br, { ...e }, void 0, !1, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 557,
    columnNumber: 5
  }, void 0) }, void 0, !1, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 556,
    columnNumber: 4
  }, void 0) : /* @__PURE__ */ p.jsxDEV(br, { ...e }, void 0, !1, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 563,
    columnNumber: 9
  }, void 0);
}, En = (e) => {
  const [r, t] = ge(!0), [o, n] = ge(null);
  return yr(() => {
    (async () => {
      try {
        const s = new URLSearchParams(window.location.search), l = s.get("accessToken"), f = s.get("refreshToken"), u = s.get("error");
        if (u)
          throw new Error(decodeURIComponent(u));
        if (!l || !f)
          throw new Error("Missing authentication tokens in callback URL");
        J.setTokens(l, f);
        const c = await he.getCurrentUser();
        e?.onSuccess?.({ accessToken: l, refreshToken: f }, c);
        const b = e?.redirectPath || "/dashboard";
        window.history.replaceState({}, document.title, b), t(!1);
      } catch (s) {
        const l = s;
        n(l), e?.onError?.(l), t(!1);
      }
    })();
  }, [e?.redirectPath]), { loading: r, error: o };
}, xn = (e) => ({ logout: Gr(async () => {
  const t = J.getRefreshToken();
  if (e?.useApiIntegration && e?.apiBaseUrl && t)
    try {
      await he.logout(t);
    } catch (o) {
      console.error("Logout API call failed:", o);
    }
  J.clearTokens(), window.location.href = "/login";
}, [e?.useApiIntegration, e?.apiBaseUrl]) });
export {
  yn as LumoraLogin,
  J as TokenStorage,
  at as getBrandingConfig,
  st as getDefaultBranding,
  En as useAuthCallback,
  xn as useLogout
};
