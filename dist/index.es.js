import zr, { useState as me, useEffect as Be, useCallback as Wr } from "react";
import { Box as L, Typography as Y, Stack as We, TextField as Ve, Button as J, CircularProgress as Ge, Divider as Gr, Alert as br } from "@mui/material";
import { appendErrors as Jr, useForm as Er } from "react-hook-form";
import { validateFieldsNatively as Kr, toNestErrors as Yr } from "@hookform/resolvers";
import * as de from "yup";
import { Google as Xr } from "@mui/icons-material";
import { LumoraOTP as Zr } from "@volenday/lumora-otp-component";
var ye = { exports: {} }, we = {};
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
function Qr() {
  if (Xe) return we;
  Xe = 1;
  var e = Symbol.for("react.fragment");
  return we.Fragment = e, we.jsxDEV = void 0, we;
}
var xe = {};
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
function et() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === N ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case g:
          return "Fragment";
        case C:
          return "Profiler";
        case R:
          return "StrictMode";
        case H:
          return "Suspense";
        case U:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case b:
            return "Portal";
          case _:
            return m.displayName || "Context";
          case k:
            return (m._context.displayName || "Context") + ".Consumer";
          case F:
            var y = m.render;
            return m = m.displayName, m || (m = y.displayName || y.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case X:
            return y = m.displayName || null, y !== null ? y : e(m.type) || "Memo";
          case q:
            y = m._payload, m = m._init;
            try {
              return e(m(y));
            } catch {
            }
        }
      return null;
    }
    function r(m) {
      return "" + m;
    }
    function t(m) {
      try {
        r(m);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var S = y.error, O = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return S.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), r(m);
      }
    }
    function o(m) {
      if (m === g) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === q)
        return "<...>";
      try {
        var y = e(m);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var m = T.A;
      return m === null ? null : m.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(m) {
      if (A.call(m, "key")) {
        var y = Object.getOwnPropertyDescriptor(m, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function l(m, y) {
      function S() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: S,
        configurable: !0
      });
    }
    function f() {
      var m = e(this.type);
      return le[m] || (le[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function u(m, y, S, O, z, De) {
      var P = S.ref;
      return m = {
        $$typeof: d,
        type: m,
        key: y,
        props: S,
        _owner: O
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(m, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.defineProperty(m, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: De
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function c(m, y, S, O, z, De) {
      var P = y.children;
      if (P !== void 0)
        if (O)
          if (G(P)) {
            for (O = 0; O < P.length; O++)
              p(P[O]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(P);
      if (A.call(y, "key")) {
        P = e(m);
        var oe = Object.keys(y).filter(function($r) {
          return $r !== "key";
        });
        O = 0 < oe.length ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}", Ee[P + O] || (oe = 0 < oe.length ? "{" + oe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          P,
          oe,
          P
        ), Ee[P + O] = !0);
      }
      if (P = null, S !== void 0 && (t(S), P = "" + S), s(y) && (t(y.key), P = "" + y.key), "key" in y) {
        S = {};
        for (var Fe in y)
          Fe !== "key" && (S[Fe] = y[Fe]);
      } else S = y;
      return P && l(
        S,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), u(
        m,
        P,
        S,
        n(),
        z,
        De
      );
    }
    function p(m) {
      E(m) ? m._store && (m._store.validated = 1) : typeof m == "object" && m !== null && m.$$typeof === q && (m._payload.status === "fulfilled" ? E(m._payload.value) && m._payload.value._store && (m._payload.value._store.validated = 1) : m._store && (m._store.validated = 1));
    }
    function E(m) {
      return typeof m == "object" && m !== null && m.$$typeof === d;
    }
    var x = zr, d = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), T = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, G = Array.isArray, ie = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(m) {
        return m();
      }
    };
    var B, le = {}, $ = x.react_stack_bottom_frame.bind(
      x,
      a
    )(), be = ie(o(a)), Ee = {};
    xe.Fragment = g, xe.jsxDEV = function(m, y, S, O) {
      var z = 1e4 > T.recentlyCreatedOwnerStacks++;
      return c(
        m,
        y,
        S,
        O,
        z ? Error("react-stack-top-frame") : $,
        z ? ie(o(m)) : be
      );
    };
  })()), xe;
}
var Qe;
function rt() {
  return Qe || (Qe = 1, process.env.NODE_ENV === "production" ? ye.exports = Qr() : ye.exports = et()), ye.exports;
}
var h = rt();
const tt = () => ({
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
}), ot = (e) => ({
  ...tt(),
  ...e
}), V = {
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
  hasTokens: () => !!(V.getAccessToken() && V.getRefreshToken())
};
function yr(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: nt } = Object.prototype, { getPrototypeOf: Je } = Object, { iterator: Ae, toStringTag: wr } = Symbol, Pe = /* @__PURE__ */ ((e) => (r) => {
  const t = nt.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), M = (e) => (e = e.toLowerCase(), (r) => Pe(r) === e), _e = (e) => (r) => typeof r === e, { isArray: se } = Array, ne = _e("undefined");
function fe(e) {
  return e !== null && !ne(e) && e.constructor !== null && !ne(e.constructor) && j(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const xr = M("ArrayBuffer");
function st(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && xr(e.buffer), r;
}
const at = _e("string"), j = _e("function"), Nr = _e("number"), pe = (e) => e !== null && typeof e == "object", it = (e) => e === !0 || e === !1, Re = (e) => {
  if (Pe(e) !== "object")
    return !1;
  const r = Je(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(wr in e) && !(Ae in e);
}, lt = (e) => {
  if (!pe(e) || fe(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, ct = M("Date"), ut = M("File"), dt = M("Blob"), mt = M("FileList"), ft = (e) => pe(e) && j(e.pipe), pt = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || j(e.append) && ((r = Pe(e)) === "formdata" || // detect form-data instance
  r === "object" && j(e.toString) && e.toString() === "[object FormData]"));
}, ht = M("URLSearchParams"), [gt, bt, Et, yt] = ["ReadableStream", "Request", "Response", "Headers"].map(M), wt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function he(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, n;
  if (typeof e != "object" && (e = [e]), se(e))
    for (o = 0, n = e.length; o < n; o++)
      r.call(null, e[o], o, e);
  else {
    if (fe(e))
      return;
    const a = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let l;
    for (o = 0; o < s; o++)
      l = a[o], r.call(null, e[l], l, e);
  }
}
function Tr(e, r) {
  if (fe(e))
    return null;
  r = r.toLowerCase();
  const t = Object.keys(e);
  let o = t.length, n;
  for (; o-- > 0; )
    if (n = t[o], r === n.toLowerCase())
      return n;
  return null;
}
const Q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Sr = (e) => !ne(e) && e !== Q;
function He() {
  const { caseless: e, skipUndefined: r } = Sr(this) && this || {}, t = {}, o = (n, a) => {
    const s = e && Tr(t, a) || a;
    Re(t[s]) && Re(n) ? t[s] = He(t[s], n) : Re(n) ? t[s] = He({}, n) : se(n) ? t[s] = n.slice() : (!r || !ne(n)) && (t[s] = n);
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && he(arguments[n], o);
  return t;
}
const xt = (e, r, t, { allOwnKeys: o } = {}) => (he(r, (n, a) => {
  t && j(n) ? e[a] = yr(n, t) : e[a] = n;
}, { allOwnKeys: o }), e), Nt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Tt = (e, r, t, o) => {
  e.prototype = Object.create(r.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, St = (e, r, t, o) => {
  let n, a, s;
  const l = {};
  if (r = r || {}, e == null) return r;
  do {
    for (n = Object.getOwnPropertyNames(e), a = n.length; a-- > 0; )
      s = n[a], (!o || o(s, e, r)) && !l[s] && (r[s] = e[s], l[s] = !0);
    e = t !== !1 && Je(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, Rt = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const o = e.indexOf(r, t);
  return o !== -1 && o === t;
}, kt = (e) => {
  if (!e) return null;
  if (se(e)) return e;
  let r = e.length;
  if (!Nr(r)) return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, vt = /* @__PURE__ */ ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && Je(Uint8Array)), Ot = (e, r) => {
  const o = (e && e[Ae]).call(e);
  let n;
  for (; (n = o.next()) && !n.done; ) {
    const a = n.value;
    r.call(e, a[0], a[1]);
  }
}, At = (e, r) => {
  let t;
  const o = [];
  for (; (t = e.exec(r)) !== null; )
    o.push(t);
  return o;
}, Pt = M("HTMLFormElement"), _t = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, o, n) {
    return o.toUpperCase() + n;
  }
), er = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), Ut = M("RegExp"), Rr = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), o = {};
  he(t, (n, a) => {
    let s;
    (s = r(n, a, e)) !== !1 && (o[a] = s || n);
  }), Object.defineProperties(e, o);
}, Ct = (e) => {
  Rr(e, (r, t) => {
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
}, Dt = (e, r) => {
  const t = {}, o = (n) => {
    n.forEach((a) => {
      t[a] = !0;
    });
  };
  return se(e) ? o(e) : o(String(e).split(r)), t;
}, Ft = () => {
}, Lt = (e, r) => e != null && Number.isFinite(e = +e) ? e : r;
function jt(e) {
  return !!(e && j(e.append) && e[wr] === "FormData" && e[Ae]);
}
const It = (e) => {
  const r = new Array(10), t = (o, n) => {
    if (pe(o)) {
      if (r.indexOf(o) >= 0)
        return;
      if (fe(o))
        return o;
      if (!("toJSON" in o)) {
        r[n] = o;
        const a = se(o) ? [] : {};
        return he(o, (s, l) => {
          const f = t(s, n + 1);
          !ne(f) && (a[l] = f);
        }), r[n] = void 0, a;
      }
    }
    return o;
  };
  return t(e, 0);
}, Bt = M("AsyncFunction"), Vt = (e) => e && (pe(e) || j(e)) && j(e.then) && j(e.catch), kr = ((e, r) => e ? setImmediate : r ? ((t, o) => (Q.addEventListener("message", ({ source: n, data: a }) => {
  n === Q && a === t && o.length && o.shift()();
}, !1), (n) => {
  o.push(n), Q.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  j(Q.postMessage)
), Ht = typeof queueMicrotask < "u" ? queueMicrotask.bind(Q) : typeof process < "u" && process.nextTick || kr, Mt = (e) => e != null && j(e[Ae]), i = {
  isArray: se,
  isArrayBuffer: xr,
  isBuffer: fe,
  isFormData: pt,
  isArrayBufferView: st,
  isString: at,
  isNumber: Nr,
  isBoolean: it,
  isObject: pe,
  isPlainObject: Re,
  isEmptyObject: lt,
  isReadableStream: gt,
  isRequest: bt,
  isResponse: Et,
  isHeaders: yt,
  isUndefined: ne,
  isDate: ct,
  isFile: ut,
  isBlob: dt,
  isRegExp: Ut,
  isFunction: j,
  isStream: ft,
  isURLSearchParams: ht,
  isTypedArray: vt,
  isFileList: mt,
  forEach: he,
  merge: He,
  extend: xt,
  trim: wt,
  stripBOM: Nt,
  inherits: Tt,
  toFlatObject: St,
  kindOf: Pe,
  kindOfTest: M,
  endsWith: Rt,
  toArray: kt,
  forEachEntry: Ot,
  matchAll: At,
  isHTMLForm: Pt,
  hasOwnProperty: er,
  hasOwnProp: er,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Rr,
  freezeMethods: Ct,
  toObjectSet: Dt,
  toCamelCase: _t,
  noop: Ft,
  toFiniteNumber: Lt,
  findKey: Tr,
  global: Q,
  isContextDefined: Sr,
  isSpecCompliantForm: jt,
  toJSONObject: It,
  isAsyncFn: Bt,
  isThenable: Vt,
  setImmediate: kr,
  asap: Ht,
  isIterable: Mt
};
function w(e, r, t, o, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), o && (this.request = o), n && (this.response = n, this.status = n.status ? n.status : null);
}
i.inherits(w, Error, {
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
const vr = w.prototype, Or = {};
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
  Or[e] = { value: e };
});
Object.defineProperties(w, Or);
Object.defineProperty(vr, "isAxiosError", { value: !0 });
w.from = (e, r, t, o, n, a) => {
  const s = Object.create(vr);
  i.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const l = e && e.message ? e.message : "Error", f = r == null && e ? e.code : r;
  return w.call(s, l, f, t, o, n), e && s.cause == null && Object.defineProperty(s, "cause", { value: e, configurable: !0 }), s.name = e && e.name || "Error", a && Object.assign(s, a), s;
};
const qt = null;
function Me(e) {
  return i.isPlainObject(e) || i.isArray(e);
}
function Ar(e) {
  return i.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function rr(e, r, t) {
  return e ? e.concat(r).map(function(n, a) {
    return n = Ar(n), !t && a ? "[" + n + "]" : n;
  }).join(t ? "." : "") : r;
}
function $t(e) {
  return i.isArray(e) && !e.some(Me);
}
const zt = i.toFlatObject(i, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Ue(e, r, t) {
  if (!i.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), t = i.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, g) {
    return !i.isUndefined(g[b]);
  });
  const o = t.metaTokens, n = t.visitor || c, a = t.dots, s = t.indexes, f = (t.Blob || typeof Blob < "u" && Blob) && i.isSpecCompliantForm(r);
  if (!i.isFunction(n))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null) return "";
    if (i.isDate(d))
      return d.toISOString();
    if (i.isBoolean(d))
      return d.toString();
    if (!f && i.isBlob(d))
      throw new w("Blob is not supported. Use a Buffer instead.");
    return i.isArrayBuffer(d) || i.isTypedArray(d) ? f && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function c(d, b, g) {
    let R = d;
    if (d && !g && typeof d == "object") {
      if (i.endsWith(b, "{}"))
        b = o ? b : b.slice(0, -2), d = JSON.stringify(d);
      else if (i.isArray(d) && $t(d) || (i.isFileList(d) || i.endsWith(b, "[]")) && (R = i.toArray(d)))
        return b = Ar(b), R.forEach(function(k, _) {
          !(i.isUndefined(k) || k === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? rr([b], _, a) : s === null ? b : b + "[]",
            u(k)
          );
        }), !1;
    }
    return Me(d) ? !0 : (r.append(rr(g, b, a), u(d)), !1);
  }
  const p = [], E = Object.assign(zt, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Me
  });
  function x(d, b) {
    if (!i.isUndefined(d)) {
      if (p.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      p.push(d), i.forEach(d, function(R, C) {
        (!(i.isUndefined(R) || R === null) && n.call(
          r,
          R,
          i.isString(C) ? C.trim() : C,
          b,
          E
        )) === !0 && x(R, b ? b.concat(C) : [C]);
      }), p.pop();
    }
  }
  if (!i.isObject(e))
    throw new TypeError("data must be an object");
  return x(e), r;
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
  this._pairs = [], e && Ue(e, this, r);
}
const Pr = Ke.prototype;
Pr.append = function(r, t) {
  this._pairs.push([r, t]);
};
Pr.toString = function(r) {
  const t = r ? function(o) {
    return r.call(this, o, tr);
  } : tr;
  return this._pairs.map(function(n) {
    return t(n[0]) + "=" + t(n[1]);
  }, "").join("&");
};
function Wt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function _r(e, r, t) {
  if (!r)
    return e;
  const o = t && t.encode || Wt;
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
const Ur = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Gt = typeof URLSearchParams < "u" ? URLSearchParams : Ke, Jt = typeof FormData < "u" ? FormData : null, Kt = typeof Blob < "u" ? Blob : null, Yt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Gt,
    FormData: Jt,
    Blob: Kt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ye = typeof window < "u" && typeof document < "u", qe = typeof navigator == "object" && navigator || void 0, Xt = Ye && (!qe || ["ReactNative", "NativeScript", "NS"].indexOf(qe.product) < 0), Zt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Qt = Ye && window.location.href || "http://localhost", eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ye,
  hasStandardBrowserEnv: Xt,
  hasStandardBrowserWebWorkerEnv: Zt,
  navigator: qe,
  origin: Qt
}, Symbol.toStringTag, { value: "Module" })), D = {
  ...eo,
  ...Yt
};
function ro(e, r) {
  return Ue(e, new D.classes.URLSearchParams(), {
    visitor: function(t, o, n, a) {
      return D.isNode && i.isBuffer(t) ? (this.append(o, t.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function to(e) {
  return i.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function oo(e) {
  const r = {}, t = Object.keys(e);
  let o;
  const n = t.length;
  let a;
  for (o = 0; o < n; o++)
    a = t[o], r[a] = e[a];
  return r;
}
function Cr(e) {
  function r(t, o, n, a) {
    let s = t[a++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), f = a >= t.length;
    return s = !s && i.isArray(n) ? n.length : s, f ? (i.hasOwnProp(n, s) ? n[s] = [n[s], o] : n[s] = o, !l) : ((!n[s] || !i.isObject(n[s])) && (n[s] = []), r(t, o, n[s], a) && i.isArray(n[s]) && (n[s] = oo(n[s])), !l);
  }
  if (i.isFormData(e) && i.isFunction(e.entries)) {
    const t = {};
    return i.forEachEntry(e, (o, n) => {
      r(to(o), n, t, 0);
    }), t;
  }
  return null;
}
function no(e, r, t) {
  if (i.isString(e))
    try {
      return (r || JSON.parse)(e), i.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (t || JSON.stringify)(e);
}
const ge = {
  transitional: Ur,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, t) {
    const o = t.getContentType() || "", n = o.indexOf("application/json") > -1, a = i.isObject(r);
    if (a && i.isHTMLForm(r) && (r = new FormData(r)), i.isFormData(r))
      return n ? JSON.stringify(Cr(r)) : r;
    if (i.isArrayBuffer(r) || i.isBuffer(r) || i.isStream(r) || i.isFile(r) || i.isBlob(r) || i.isReadableStream(r))
      return r;
    if (i.isArrayBufferView(r))
      return r.buffer;
    if (i.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let l;
    if (a) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return ro(r, this.formSerializer).toString();
      if ((l = i.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Ue(
          l ? { "files[]": r } : r,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || n ? (t.setContentType("application/json", !1), no(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || ge.transitional, o = t && t.forcedJSONParsing, n = this.responseType === "json";
    if (i.isResponse(r) || i.isReadableStream(r))
      return r;
    if (r && i.isString(r) && (o && !this.responseType || n)) {
      const s = !(t && t.silentJSONParsing) && n;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (l) {
        if (s)
          throw l.name === "SyntaxError" ? w.from(l, w.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: D.classes.FormData,
    Blob: D.classes.Blob
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
  ge.headers[e] = {};
});
const so = i.toObjectSet([
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
]), ao = (e) => {
  const r = {};
  let t, o, n;
  return e && e.split(`
`).forEach(function(s) {
    n = s.indexOf(":"), t = s.substring(0, n).trim().toLowerCase(), o = s.substring(n + 1).trim(), !(!t || r[t] && so[t]) && (t === "set-cookie" ? r[t] ? r[t].push(o) : r[t] = [o] : r[t] = r[t] ? r[t] + ", " + o : o);
  }), r;
}, nr = Symbol("internals");
function ce(e) {
  return e && String(e).trim().toLowerCase();
}
function ke(e) {
  return e === !1 || e == null ? e : i.isArray(e) ? e.map(ke) : String(e);
}
function io(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = t.exec(e); )
    r[o[1]] = o[2];
  return r;
}
const lo = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Le(e, r, t, o, n) {
  if (i.isFunction(o))
    return o.call(this, r, t);
  if (n && (r = t), !!i.isString(r)) {
    if (i.isString(o))
      return r.indexOf(o) !== -1;
    if (i.isRegExp(o))
      return o.test(r);
  }
}
function co(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, o) => t.toUpperCase() + o);
}
function uo(e, r) {
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
      const c = ce(f);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const p = i.findKey(n, c);
      (!p || n[p] === void 0 || u === !0 || u === void 0 && n[p] !== !1) && (n[p || f] = ke(l));
    }
    const s = (l, f) => i.forEach(l, (u, c) => a(u, c, f));
    if (i.isPlainObject(r) || r instanceof this.constructor)
      s(r, t);
    else if (i.isString(r) && (r = r.trim()) && !lo(r))
      s(ao(r), t);
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
    if (r = ce(r), r) {
      const o = i.findKey(this, r);
      if (o) {
        const n = this[o];
        if (!t)
          return n;
        if (t === !0)
          return io(n);
        if (i.isFunction(t))
          return t.call(this, n, o);
        if (i.isRegExp(t))
          return t.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, t) {
    if (r = ce(r), r) {
      const o = i.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!t || Le(this, this[o], o, t)));
    }
    return !1;
  }
  delete(r, t) {
    const o = this;
    let n = !1;
    function a(s) {
      if (s = ce(s), s) {
        const l = i.findKey(o, s);
        l && (!t || Le(o, o[l], l, t)) && (delete o[l], n = !0);
      }
    }
    return i.isArray(r) ? r.forEach(a) : a(r), n;
  }
  clear(r) {
    const t = Object.keys(this);
    let o = t.length, n = !1;
    for (; o--; ) {
      const a = t[o];
      (!r || Le(this, this[a], a, r, !0)) && (delete this[a], n = !0);
    }
    return n;
  }
  normalize(r) {
    const t = this, o = {};
    return i.forEach(this, (n, a) => {
      const s = i.findKey(o, a);
      if (s) {
        t[s] = ke(n), delete t[a];
        return;
      }
      const l = r ? co(a) : String(a).trim();
      l !== a && delete t[a], t[l] = ke(n), o[l] = !0;
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
      const l = ce(s);
      o[l] || (uo(n, s), o[l] = !0);
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
function je(e, r) {
  const t = this || ge, o = r || t, n = I.from(o.headers);
  let a = o.data;
  return i.forEach(e, function(l) {
    a = l.call(t, a, n.normalize(), r ? r.status : void 0);
  }), n.normalize(), a;
}
function Dr(e) {
  return !!(e && e.__CANCEL__);
}
function ae(e, r, t) {
  w.call(this, e ?? "canceled", w.ERR_CANCELED, r, t), this.name = "CanceledError";
}
i.inherits(ae, w, {
  __CANCEL__: !0
});
function Fr(e, r, t) {
  const o = t.config.validateStatus;
  !t.status || !o || o(t.status) ? e(t) : r(new w(
    "Request failed with status code " + t.status,
    [w.ERR_BAD_REQUEST, w.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function mo(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function fo(e, r) {
  e = e || 10;
  const t = new Array(e), o = new Array(e);
  let n = 0, a = 0, s;
  return r = r !== void 0 ? r : 1e3, function(f) {
    const u = Date.now(), c = o[a];
    s || (s = u), t[n] = f, o[n] = u;
    let p = a, E = 0;
    for (; p !== n; )
      E += t[p++], p = p % e;
    if (n = (n + 1) % e, n === a && (a = (a + 1) % e), u - s < r)
      return;
    const x = c && u - c;
    return x ? Math.round(E * 1e3 / x) : void 0;
  };
}
function po(e, r) {
  let t = 0, o = 1e3 / r, n, a;
  const s = (u, c = Date.now()) => {
    t = c, n = null, a && (clearTimeout(a), a = null), e(...u);
  };
  return [(...u) => {
    const c = Date.now(), p = c - t;
    p >= o ? s(u, c) : (n = u, a || (a = setTimeout(() => {
      a = null, s(n);
    }, o - p)));
  }, () => n && s(n)];
}
const Oe = (e, r, t = 3) => {
  let o = 0;
  const n = fo(50, 250);
  return po((a) => {
    const s = a.loaded, l = a.lengthComputable ? a.total : void 0, f = s - o, u = n(f), c = s <= l;
    o = s;
    const p = {
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
    e(p);
  }, t);
}, sr = (e, r) => {
  const t = e != null;
  return [(o) => r[0]({
    lengthComputable: t,
    total: e,
    loaded: o
  }), r[1]];
}, ar = (e) => (...r) => i.asap(() => e(...r)), ho = D.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, r) => (t) => (t = new URL(t, D.origin), e.protocol === t.protocol && e.host === t.host && (r || e.port === t.port)))(
  new URL(D.origin),
  D.navigator && /(msie|trident)/i.test(D.navigator.userAgent)
) : () => !0, go = D.hasStandardBrowserEnv ? (
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
function bo(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Eo(e, r) {
  return r ? e.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function Lr(e, r, t) {
  let o = !bo(r);
  return e && (o || t == !1) ? Eo(e, r) : r;
}
const ir = (e) => e instanceof I ? { ...e } : e;
function te(e, r) {
  r = r || {};
  const t = {};
  function o(u, c, p, E) {
    return i.isPlainObject(u) && i.isPlainObject(c) ? i.merge.call({ caseless: E }, u, c) : i.isPlainObject(c) ? i.merge({}, c) : i.isArray(c) ? c.slice() : c;
  }
  function n(u, c, p, E) {
    if (i.isUndefined(c)) {
      if (!i.isUndefined(u))
        return o(void 0, u, p, E);
    } else return o(u, c, p, E);
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
  function l(u, c, p) {
    if (p in r)
      return o(u, c);
    if (p in e)
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
    headers: (u, c, p) => n(ir(u), ir(c), p, !0)
  };
  return i.forEach(Object.keys({ ...e, ...r }), function(c) {
    const p = f[c] || n, E = p(e[c], r[c], c);
    i.isUndefined(E) && p !== l || (t[c] = E);
  }), t;
}
const jr = (e) => {
  const r = te({}, e);
  let { data: t, withXSRFToken: o, xsrfHeaderName: n, xsrfCookieName: a, headers: s, auth: l } = r;
  if (r.headers = s = I.from(s), r.url = _r(Lr(r.baseURL, r.url, r.allowAbsoluteUrls), e.params, e.paramsSerializer), l && s.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), i.isFormData(t)) {
    if (D.hasStandardBrowserEnv || D.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (i.isFunction(t.getHeaders)) {
      const f = t.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(f).forEach(([c, p]) => {
        u.includes(c.toLowerCase()) && s.set(c, p);
      });
    }
  }
  if (D.hasStandardBrowserEnv && (o && i.isFunction(o) && (o = o(r)), o || o !== !1 && ho(r.url))) {
    const f = n && a && go.read(a);
    f && s.set(n, f);
  }
  return r;
}, yo = typeof XMLHttpRequest < "u", wo = yo && function(e) {
  return new Promise(function(t, o) {
    const n = jr(e);
    let a = n.data;
    const s = I.from(n.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: u } = n, c, p, E, x, d;
    function b() {
      x && x(), d && d(), n.cancelToken && n.cancelToken.unsubscribe(c), n.signal && n.signal.removeEventListener("abort", c);
    }
    let g = new XMLHttpRequest();
    g.open(n.method.toUpperCase(), n.url, !0), g.timeout = n.timeout;
    function R() {
      if (!g)
        return;
      const k = I.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), F = {
        data: !l || l === "text" || l === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: k,
        config: e,
        request: g
      };
      Fr(function(U) {
        t(U), b();
      }, function(U) {
        o(U), b();
      }, F), g = null;
    }
    "onloadend" in g ? g.onloadend = R : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, g.onabort = function() {
      g && (o(new w("Request aborted", w.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function(_) {
      const F = _ && _.message ? _.message : "Network Error", H = new w(F, w.ERR_NETWORK, e, g);
      H.event = _ || null, o(H), g = null;
    }, g.ontimeout = function() {
      let _ = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const F = n.transitional || Ur;
      n.timeoutErrorMessage && (_ = n.timeoutErrorMessage), o(new w(
        _,
        F.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
        e,
        g
      )), g = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in g && i.forEach(s.toJSON(), function(_, F) {
      g.setRequestHeader(F, _);
    }), i.isUndefined(n.withCredentials) || (g.withCredentials = !!n.withCredentials), l && l !== "json" && (g.responseType = n.responseType), u && ([E, d] = Oe(u, !0), g.addEventListener("progress", E)), f && g.upload && ([p, x] = Oe(f), g.upload.addEventListener("progress", p), g.upload.addEventListener("loadend", x)), (n.cancelToken || n.signal) && (c = (k) => {
      g && (o(!k || k.type ? new ae(null, e, g) : k), g.abort(), g = null);
    }, n.cancelToken && n.cancelToken.subscribe(c), n.signal && (n.signal.aborted ? c() : n.signal.addEventListener("abort", c)));
    const C = mo(n.url);
    if (C && D.protocols.indexOf(C) === -1) {
      o(new w("Unsupported protocol " + C + ":", w.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(a || null);
  });
}, xo = (e, r) => {
  const { length: t } = e = e ? e.filter(Boolean) : [];
  if (r || t) {
    let o = new AbortController(), n;
    const a = function(u) {
      if (!n) {
        n = !0, l();
        const c = u instanceof Error ? u : this.reason;
        o.abort(c instanceof w ? c : new ae(c instanceof Error ? c.message : c));
      }
    };
    let s = r && setTimeout(() => {
      s = null, a(new w(`timeout ${r} of ms exceeded`, w.ETIMEDOUT));
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
}, No = function* (e, r) {
  let t = e.byteLength;
  if (t < r) {
    yield e;
    return;
  }
  let o = 0, n;
  for (; o < t; )
    n = o + r, yield e.slice(o, n), o = n;
}, To = async function* (e, r) {
  for await (const t of So(e))
    yield* No(t, r);
}, So = async function* (e) {
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
  const n = To(e, r);
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
        let p = c.byteLength;
        if (t) {
          let E = a += p;
          t(E);
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
}, cr = 64 * 1024, { isFunction: Ne } = i, Ro = (({ Request: e, Response: r }) => ({
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
}, ko = (e) => {
  e = i.merge.call({
    skipUndefined: !0
  }, Ro, e);
  const { fetch: r, Request: t, Response: o } = e, n = r ? Ne(r) : typeof fetch == "function", a = Ne(t), s = Ne(o);
  if (!n)
    return !1;
  const l = n && Ne(ur), f = n && (typeof dr == "function" ? /* @__PURE__ */ ((d) => (b) => d.encode(b))(new dr()) : async (d) => new Uint8Array(await new t(d).arrayBuffer())), u = a && l && mr(() => {
    let d = !1;
    const b = new t(D.origin, {
      body: new ur(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !b;
  }), c = s && l && mr(() => i.isReadableStream(new o("").body)), p = {
    stream: c && ((d) => d.body)
  };
  n && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !p[d] && (p[d] = (b, g) => {
      let R = b && b[d];
      if (R)
        return R.call(b);
      throw new w(`Response type '${d}' is not supported`, w.ERR_NOT_SUPPORT, g);
    });
  });
  const E = async (d) => {
    if (d == null)
      return 0;
    if (i.isBlob(d))
      return d.size;
    if (i.isSpecCompliantForm(d))
      return (await new t(D.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (i.isArrayBufferView(d) || i.isArrayBuffer(d))
      return d.byteLength;
    if (i.isURLSearchParams(d) && (d = d + ""), i.isString(d))
      return (await f(d)).byteLength;
  }, x = async (d, b) => {
    const g = i.toFiniteNumber(d.getContentLength());
    return g ?? E(b);
  };
  return async (d) => {
    let {
      url: b,
      method: g,
      data: R,
      signal: C,
      cancelToken: k,
      timeout: _,
      onDownloadProgress: F,
      onUploadProgress: H,
      responseType: U,
      headers: X,
      withCredentials: q = "same-origin",
      fetchOptions: Z
    } = jr(d), N = r || fetch;
    U = U ? (U + "").toLowerCase() : "text";
    let T = xo([C, k && k.toAbortSignal()], _), A = null;
    const G = T && T.unsubscribe && (() => {
      T.unsubscribe();
    });
    let ie;
    try {
      if (H && u && g !== "get" && g !== "head" && (ie = await x(X, R)) !== 0) {
        let m = new t(b, {
          method: "POST",
          body: R,
          duplex: "half"
        }), y;
        if (i.isFormData(R) && (y = m.headers.get("content-type")) && X.setContentType(y), m.body) {
          const [S, O] = sr(
            ie,
            Oe(ar(H))
          );
          R = lr(m.body, cr, S, O);
        }
      }
      i.isString(q) || (q = q ? "include" : "omit");
      const B = a && "credentials" in t.prototype, le = {
        ...Z,
        signal: T,
        method: g.toUpperCase(),
        headers: X.normalize().toJSON(),
        body: R,
        duplex: "half",
        credentials: B ? q : void 0
      };
      A = a && new t(b, le);
      let $ = await (a ? N(A, Z) : N(b, le));
      const be = c && (U === "stream" || U === "response");
      if (c && (F || be && G)) {
        const m = {};
        ["status", "statusText", "headers"].forEach((z) => {
          m[z] = $[z];
        });
        const y = i.toFiniteNumber($.headers.get("content-length")), [S, O] = F && sr(
          y,
          Oe(ar(F), !0)
        ) || [];
        $ = new o(
          lr($.body, cr, S, () => {
            O && O(), G && G();
          }),
          m
        );
      }
      U = U || "text";
      let Ee = await p[i.findKey(p, U) || "text"]($, d);
      return !be && G && G(), await new Promise((m, y) => {
        Fr(m, y, {
          data: Ee,
          headers: I.from($.headers),
          status: $.status,
          statusText: $.statusText,
          config: d,
          request: A
        });
      });
    } catch (B) {
      throw G && G(), B && B.name === "TypeError" && /Load failed|fetch/i.test(B.message) ? Object.assign(
        new w("Network Error", w.ERR_NETWORK, d, A),
        {
          cause: B.cause || B
        }
      ) : w.from(B, B && B.code, d, A);
    }
  };
}, vo = /* @__PURE__ */ new Map(), Ir = (e) => {
  let r = e ? e.env : {};
  const { fetch: t, Request: o, Response: n } = r, a = [
    o,
    n,
    t
  ];
  let s = a.length, l = s, f, u, c = vo;
  for (; l--; )
    f = a[l], u = c.get(f), u === void 0 && c.set(f, u = l ? /* @__PURE__ */ new Map() : ko(r)), c = u;
  return u;
};
Ir();
const $e = {
  http: qt,
  xhr: wo,
  fetch: {
    get: Ir
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
const fr = (e) => `- ${e}`, Oo = (e) => i.isFunction(e) || e === null || e === !1, Br = {
  getAdapter: (e, r) => {
    e = i.isArray(e) ? e : [e];
    const { length: t } = e;
    let o, n;
    const a = {};
    for (let s = 0; s < t; s++) {
      o = e[s];
      let l;
      if (n = o, !Oo(o) && (n = $e[(l = String(o)).toLowerCase()], n === void 0))
        throw new w(`Unknown adapter '${l}'`);
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
      throw new w(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: $e
};
function Ie(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ae(null, e);
}
function pr(e) {
  return Ie(e), e.headers = I.from(e.headers), e.data = je.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Br.getAdapter(e.adapter || ge.adapter, e)(e).then(function(o) {
    return Ie(e), o.data = je.call(
      e,
      e.transformResponse,
      o
    ), o.headers = I.from(o.headers), o;
  }, function(o) {
    return Dr(o) || (Ie(e), o && o.response && (o.response.data = je.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = I.from(o.response.headers))), Promise.reject(o);
  });
}
const Vr = "1.12.2", Ce = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  Ce[e] = function(o) {
    return typeof o === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const hr = {};
Ce.transitional = function(r, t, o) {
  function n(a, s) {
    return "[Axios v" + Vr + "] Transitional option '" + a + "'" + s + (o ? ". " + o : "");
  }
  return (a, s, l) => {
    if (r === !1)
      throw new w(
        n(s, " has been removed" + (t ? " in " + t : "")),
        w.ERR_DEPRECATED
      );
    return t && !hr[s] && (hr[s] = !0, console.warn(
      n(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(a, s, l) : !0;
  };
};
Ce.spelling = function(r) {
  return (t, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function Ao(e, r, t) {
  if (typeof e != "object")
    throw new w("options must be an object", w.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let n = o.length;
  for (; n-- > 0; ) {
    const a = o[n], s = r[a];
    if (s) {
      const l = e[a], f = l === void 0 || s(l, a, e);
      if (f !== !0)
        throw new w("option " + a + " must be " + f, w.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new w("Unknown option " + a, w.ERR_BAD_OPTION);
  }
}
const ve = {
  assertOptions: Ao,
  validators: Ce
}, W = ve.validators;
let re = class {
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
    typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = te(this.defaults, t);
    const { transitional: o, paramsSerializer: n, headers: a } = t;
    o !== void 0 && ve.assertOptions(o, {
      silentJSONParsing: W.transitional(W.boolean),
      forcedJSONParsing: W.transitional(W.boolean),
      clarifyTimeoutError: W.transitional(W.boolean)
    }, !1), n != null && (i.isFunction(n) ? t.paramsSerializer = {
      serialize: n
    } : ve.assertOptions(n, {
      encode: W.function,
      serialize: W.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), ve.assertOptions(t, {
      baseUrl: W.spelling("baseURL"),
      withXsrfToken: W.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = a && i.merge(
      a.common,
      a[t.method]
    );
    a && i.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete a[d];
      }
    ), t.headers = I.concat(s, a);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(t) === !1 || (f = f && b.synchronous, l.unshift(b.fulfilled, b.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(b) {
      u.push(b.fulfilled, b.rejected);
    });
    let c, p = 0, E;
    if (!f) {
      const d = [pr.bind(this), void 0];
      for (d.unshift(...l), d.push(...u), E = d.length, c = Promise.resolve(t); p < E; )
        c = c.then(d[p++], d[p++]);
      return c;
    }
    E = l.length;
    let x = t;
    for (; p < E; ) {
      const d = l[p++], b = l[p++];
      try {
        x = d(x);
      } catch (g) {
        b.call(this, g);
        break;
      }
    }
    try {
      c = pr.call(this, x);
    } catch (d) {
      return Promise.reject(d);
    }
    for (p = 0, E = u.length; p < E; )
      c = c.then(u[p++], u[p++]);
    return c;
  }
  getUri(r) {
    r = te(this.defaults, r);
    const t = Lr(r.baseURL, r.url, r.allowAbsoluteUrls);
    return _r(t, r.params, r.paramsSerializer);
  }
};
i.forEach(["delete", "get", "head", "options"], function(r) {
  re.prototype[r] = function(t, o) {
    return this.request(te(o || {}, {
      method: r,
      url: t,
      data: (o || {}).data
    }));
  };
});
i.forEach(["post", "put", "patch"], function(r) {
  function t(o) {
    return function(a, s, l) {
      return this.request(te(l || {}, {
        method: r,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  re.prototype[r] = t(), re.prototype[r + "Form"] = t(!0);
});
let Po = class Hr {
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
      o.reason || (o.reason = new ae(a, s, l), t(o.reason));
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
      token: new Hr(function(n) {
        r = n;
      }),
      cancel: r
    };
  }
};
function _o(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function Uo(e) {
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
function Mr(e) {
  const r = new re(e), t = yr(re.prototype.request, r);
  return i.extend(t, re.prototype, r, { allOwnKeys: !0 }), i.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(n) {
    return Mr(te(e, n));
  }, t;
}
const v = Mr(ge);
v.Axios = re;
v.CanceledError = ae;
v.CancelToken = Po;
v.isCancel = Dr;
v.VERSION = Vr;
v.toFormData = Ue;
v.AxiosError = w;
v.Cancel = v.CanceledError;
v.all = function(r) {
  return Promise.all(r);
};
v.spread = _o;
v.isAxiosError = Uo;
v.mergeConfig = te;
v.AxiosHeaders = I;
v.formToJSON = (e) => Cr(i.isHTMLForm(e) ? new FormData(e) : e);
v.getAdapter = Br.getAdapter;
v.HttpStatusCode = ze;
v.default = v;
const {
  Axios: Yo,
  AxiosError: Xo,
  CanceledError: Zo,
  isCancel: Qo,
  CancelToken: en,
  VERSION: rn,
  all: tn,
  Cancel: on,
  isAxiosError: nn,
  spread: sn,
  toFormData: an,
  AxiosHeaders: ln,
  HttpStatusCode: cn,
  formToJSON: un,
  getAdapter: dn,
  mergeConfig: mn
} = v, K = {
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
}, Co = {
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
}, Do = (e, r) => {
  const t = v.create({
    baseURL: e,
    timeout: K.DEFAULT_CONFIG.TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      ...r && { "X-API-Key": r }
    }
  });
  return t.interceptors.request.use(
    (o) => {
      const n = V.getAccessToken();
      return n && o.headers && (o.headers.Authorization = `Bearer ${n}`), o;
    },
    (o) => Promise.reject(o)
  ), t.interceptors.response.use(
    (o) => o,
    async (o) => {
      const n = o.config;
      if (o.response?.status === K.STATUS_CODES.UNAUTHORIZED && !n._retry) {
        n._retry = !0;
        try {
          const a = V.getRefreshToken();
          if (!a)
            throw new Error(Co.NO_REFRESH_TOKEN);
          const s = await t.post(K.ENDPOINTS.REFRESH, {
            refreshToken: a
          }), l = {
            accessToken: s.data.accessToken,
            refreshToken: s.data.refreshToken
          };
          return V.setTokens(l.accessToken, l.refreshToken), n.headers && (n.headers.Authorization = `Bearer ${l.accessToken}`), t(n);
        } catch (a) {
          return V.clearTokens(), window.location.href = "/login", Promise.reject(a);
        }
      }
      return Promise.reject(o);
    }
  ), t;
};
let Te = null;
const ue = (e, r) => {
  if (!Te && e && (Te = Do(e, r)), !Te)
    throw new Error("API client not initialized. Please provide baseURL.");
  return Te;
}, ee = {
  /**
   * Authenticate user with email and password
   * @param email - User's email address
   * @param password - User's password
   * @returns Promise resolving to authentication tokens
   */
  login: async (e, r) => {
    try {
      const o = await ue().post(K.ENDPOINTS.LOGIN, {
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
      await ue().post(K.ENDPOINTS.LOGOUT, {
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
      const t = await ue().post(K.ENDPOINTS.REFRESH, {
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
      const r = await ue().get(K.ENDPOINTS.USER_ME);
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
    const t = `${r}${K.ENDPOINTS.GOOGLE_AUTH}?redirect_uri=${encodeURIComponent(e)}`;
    console.log("Redirecting to Google OAuth:", t), window.location.href = t;
  }
}, gr = ({
  brandConfig: e,
  title: r,
  subtitle: t
}) => /* @__PURE__ */ h.jsxDEV(L, { sx: { textAlign: "center", mb: 4 }, children: [
  e.logo && /* @__PURE__ */ h.jsxDEV(L, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ h.jsxDEV(
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
  r && /* @__PURE__ */ h.jsxDEV(
    Y,
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
  t && /* @__PURE__ */ h.jsxDEV(
    Y,
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
function qr(e, r, t) {
  return t === void 0 && (t = {}), function(o, n, a) {
    try {
      return Promise.resolve((function(s, l) {
        try {
          var f = (r != null && r.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(e[t.mode === "sync" ? "validateSync" : "validate"](o, Object.assign({ abortEarly: !1 }, r, { context: n }))).then(function(u) {
            return a.shouldUseNativeValidation && Kr({}, a), { values: t.raw ? Object.assign({}, o) : u, errors: {} };
          }));
        } catch (u) {
          return l(u);
        }
        return f && f.then ? f.then(void 0, l) : f;
      })(0, function(s) {
        if (!s.inner) throw s;
        return { values: {}, errors: Yr((l = s, f = !a.shouldUseNativeValidation && a.criteriaMode === "all", (l.inner || []).reduce(function(u, c) {
          if (u[c.path] || (u[c.path] = { message: c.message, type: c.type }), f) {
            var p = u[c.path].types, E = p && p[c.type];
            u[c.path] = Jr(c.path, f, u, c.type, E ? [].concat(E, c.message) : c.message);
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
const Fo = de.object({
  email: de.string().email("Please enter a valid email address").required("Email is required"),
  password: de.string().min(6, "Password must be at least 6 characters").required("Password is required")
}), Lo = ({
  brandConfig: e,
  loginState: r,
  onSubmit: t,
  onForgetPassword: o,
  enableForgetPassword: n = !0
}) => {
  const [a, s] = me(!1), {
    register: l,
    handleSubmit: f,
    formState: { errors: u }
  } = Er({
    resolver: qr(Fo)
  }), c = r === "loading" || r === "google-loading";
  return /* @__PURE__ */ h.jsxDEV(L, { component: "form", onSubmit: f(t), children: /* @__PURE__ */ h.jsxDEV(We, { spacing: 3, children: [
    /* @__PURE__ */ h.jsxDEV(
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
    /* @__PURE__ */ h.jsxDEV(
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
            endAdornment: /* @__PURE__ */ h.jsxDEV(
              J,
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
    /* @__PURE__ */ h.jsxDEV(
      J,
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
        children: r === "loading" ? /* @__PURE__ */ h.jsxDEV(Ge, { size: 24, color: "inherit" }, void 0, !1, {
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
    n && o && /* @__PURE__ */ h.jsxDEV(L, { textAlign: "right", sx: { mt: 1 }, children: /* @__PURE__ */ h.jsxDEV(
      J,
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
}, jo = ({
  brandConfig: e,
  loginState: r,
  onClick: t,
  showDivider: o = !1
}) => {
  const n = r === "loading" || r === "google-loading";
  return /* @__PURE__ */ h.jsxDEV(h.Fragment, { children: [
    o && /* @__PURE__ */ h.jsxDEV(Gr, { sx: { my: 1 }, children: /* @__PURE__ */ h.jsxDEV(
      Y,
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
    /* @__PURE__ */ h.jsxDEV(
      J,
      {
        fullWidth: !0,
        variant: "outlined",
        size: "large",
        startIcon: r === "google-loading" ? /* @__PURE__ */ h.jsxDEV(Ge, { size: 20, color: "inherit" }, void 0, !1, {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/GoogleSignInButton.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, void 0) : /* @__PURE__ */ h.jsxDEV(Xr, {}, void 0, !1, {
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
}, Io = de.object({
  email: de.string().email("Please enter a valid email address").required("Email is required")
}), Bo = ({
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
  } = Er({
    resolver: qr(Io)
  }), u = r === "forget-password-loading";
  return /* @__PURE__ */ h.jsxDEV(h.Fragment, { children: [
    t && /* @__PURE__ */ h.jsxDEV(br, { severity: "error", sx: { mb: 3 }, onClose: a, children: t.message }, void 0, !1, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ h.jsxDEV(L, { sx: { textAlign: "center", mb: 3 }, children: [
      /* @__PURE__ */ h.jsxDEV(
        Y,
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
      /* @__PURE__ */ h.jsxDEV(
        Y,
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
    /* @__PURE__ */ h.jsxDEV(L, { component: "form", onSubmit: l(o), children: /* @__PURE__ */ h.jsxDEV(We, { spacing: 3, children: [
      /* @__PURE__ */ h.jsxDEV(
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
      /* @__PURE__ */ h.jsxDEV(
        J,
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
          children: u ? /* @__PURE__ */ h.jsxDEV(Ge, { size: 24, color: "inherit" }, void 0, !1, {
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
      /* @__PURE__ */ h.jsxDEV(
        J,
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
}, Vo = ({
  brandConfig: e,
  loginState: r,
  onVerify: t,
  onVerifySuccess: o,
  onVerifyError: n,
  onResend: a,
  onBackToSignIn: s
}) => /* @__PURE__ */ h.jsxDEV(h.Fragment, { children: [
  /* @__PURE__ */ h.jsxDEV(L, { sx: { textAlign: "center", mb: 3 }, children: [
    e.logo && /* @__PURE__ */ h.jsxDEV(L, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ h.jsxDEV(
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
    /* @__PURE__ */ h.jsxDEV(
      Y,
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
  /* @__PURE__ */ h.jsxDEV(
    Zr,
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
  r === "otp-error" && /* @__PURE__ */ h.jsxDEV(L, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ h.jsxDEV(
    J,
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
}, void 0), Ho = ({
  brandConfig: e,
  onBackToLogin: r
}) => /* @__PURE__ */ h.jsxDEV(h.Fragment, { children: [
  /* @__PURE__ */ h.jsxDEV(L, { sx: { textAlign: "center", mb: 3 }, children: [
    e.logo && /* @__PURE__ */ h.jsxDEV(L, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ h.jsxDEV(
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
    /* @__PURE__ */ h.jsxDEV(
      Y,
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
    /* @__PURE__ */ h.jsxDEV(
      Y,
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
  /* @__PURE__ */ h.jsxDEV(L, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ h.jsxDEV(
    J,
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
}) => /* @__PURE__ */ h.jsxDEV(
  L,
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
    children: /* @__PURE__ */ h.jsxDEV(
      L,
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
), fn = ({
  authConfig: e,
  onLoginSuccess: r,
  onLoginError: t,
  enableRecaptcha: o = !1,
  recaptchaSiteKey: n,
  enableGoogleSignIn: a = !0,
  enableLocalSignIn: s = !0,
  enableForgetPassword: l = !0,
  enableOtp: f = !0,
  branding: u
}) => {
  const [c, p] = me("idle"), [E, x] = me(null), d = ot(u);
  if (Be(() => {
    try {
      ue(e.apiBaseUrl, e.apiKey);
    } catch (N) {
      console.error("Failed to initialize API client:", N);
    }
  }, [e.apiBaseUrl, e.apiKey]), !s && !a)
    throw new Error(
      "At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)"
    );
  if (o && !n)
    throw new Error(
      "recaptchaSiteKey is required when enableRecaptcha is true"
    );
  const b = () => window.grecaptcha.execute(n, { action: "login" }).catch(() => {
    throw new Error("reCAPTCHA verification failed");
  }), g = async () => {
    if (!o || !n)
      return "";
    if (typeof window > "u" || !window.grecaptcha)
      throw new Error("reCAPTCHA is not loaded");
    return new Promise((N, T) => {
      const A = () => {
        b().then(N).catch(T);
      };
      window.grecaptcha.ready(A);
    });
  }, R = async (N) => {
    p("loading"), x(null);
    try {
      o && await g();
      const T = await ee.login(N.email, N.password);
      V.setTokens(T.accessToken, T.refreshToken);
      const A = await ee.getCurrentUser();
      f ? p("otp-required") : (p("success"), r({ user: A, tokens: T }));
    } catch (T) {
      const A = T;
      x({ message: A.message, type: "local" }), p("error"), t(A);
    }
  }, C = () => {
    try {
      ee.initiateGoogleOAuth(
        e.googleRedirectUri,
        e.apiBaseUrl
      );
    } catch (N) {
      const T = N;
      x({ message: T.message, type: "google" }), p("error"), t(T);
    }
  }, k = async (N) => {
    if (await new Promise((T) => setTimeout(T, 1e3)), N === "123456")
      return { success: !0, token: "verified-token" };
    throw new Error("Invalid OTP code");
  }, _ = () => {
    p("success");
    const N = V.getAccessToken(), T = V.getRefreshToken();
    N && T ? ee.getCurrentUser().then((A) => {
      r({
        user: A,
        tokens: { accessToken: N, refreshToken: T }
      });
    }).catch((A) => {
      t(A);
    }) : t(new Error("Session expired. Please login again."));
  }, F = (N) => {
    x({ message: N.message, type: "otp" }), p("otp-error");
  }, H = () => {
    console.log("Resending OTP..."), E && E.type === "otp" && x(null);
  }, U = () => {
    x(null), p("idle");
  }, X = async () => {
    p("forget-password-loading"), x(null);
    try {
      o && await g(), await new Promise((N) => setTimeout(N, 1e3)), p("forget-password-success");
    } catch (N) {
      const T = N;
      x({ message: T.message, type: "forget-password" }), p("forget-password"), t(T);
    }
  }, q = () => {
    x(null), p("forget-password");
  }, Z = () => {
    x(null), p("idle");
  };
  return Be(() => {
    if (o && n && typeof window < "u") {
      const N = document.createElement("script");
      N.src = `https://www.google.com/recaptcha/enterprise.js?render=${n}`, N.async = !0, N.defer = !0, document.head.appendChild(N);
    }
  }, [o, n]), c === "otp-required" || c === "otp-error" ? /* @__PURE__ */ h.jsxDEV(Se, { brandConfig: d, children: /* @__PURE__ */ h.jsxDEV(
    Vo,
    {
      brandConfig: d,
      loginState: c,
      onVerify: k,
      onVerifySuccess: _,
      onVerifyError: F,
      onResend: H,
      onBackToSignIn: U
    },
    void 0,
    !1,
    {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 265,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 264,
    columnNumber: 4
  }, void 0) : c === "forget-password-success" ? /* @__PURE__ */ h.jsxDEV(Se, { brandConfig: d, children: /* @__PURE__ */ h.jsxDEV(
    Ho,
    {
      brandConfig: d,
      onBackToLogin: Z
    },
    void 0,
    !1,
    {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 282,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 281,
    columnNumber: 4
  }, void 0) : c === "forget-password" || c === "forget-password-loading" ? /* @__PURE__ */ h.jsxDEV(Se, { brandConfig: d, children: [
    /* @__PURE__ */ h.jsxDEV(gr, { brandConfig: d }, void 0, !1, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 297,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ h.jsxDEV(
      Bo,
      {
        brandConfig: d,
        loginState: c,
        error: E,
        onSubmit: X,
        onBackToLogin: Z,
        onCloseError: () => x(null)
      },
      void 0,
      !1,
      {
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 298,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 296,
    columnNumber: 4
  }, void 0) : /* @__PURE__ */ h.jsxDEV(Se, { brandConfig: d, children: [
    /* @__PURE__ */ h.jsxDEV(
      gr,
      {
        brandConfig: d,
        title: d.companyName ? `Welcome to ${d.companyName}` : "Sign In",
        subtitle: d.tagline
      },
      void 0,
      !1,
      {
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 313,
        columnNumber: 4
      },
      void 0
    ),
    E && /* @__PURE__ */ h.jsxDEV(
      br,
      {
        severity: "error",
        sx: { mb: 3 },
        onClose: () => x(null),
        children: E.message
      },
      void 0,
      !1,
      {
        fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 324,
        columnNumber: 5
      },
      void 0
    ),
    /* @__PURE__ */ h.jsxDEV(We, { spacing: 3, children: [
      s && /* @__PURE__ */ h.jsxDEV(
        Lo,
        {
          brandConfig: d,
          loginState: c,
          onSubmit: R,
          onForgetPassword: l ? q : void 0,
          enableForgetPassword: l
        },
        void 0,
        !1,
        {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 335,
          columnNumber: 6
        },
        void 0
      ),
      a && /* @__PURE__ */ h.jsxDEV(
        jo,
        {
          brandConfig: d,
          loginState: c,
          onClick: C,
          showDivider: s
        },
        void 0,
        !1,
        {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 349,
          columnNumber: 6
        },
        void 0
      ),
      c === "error" && /* @__PURE__ */ h.jsxDEV(
        J,
        {
          fullWidth: !0,
          variant: "text",
          onClick: U,
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
        },
        void 0,
        !1,
        {
          fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 358,
          columnNumber: 6
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 333,
      columnNumber: 4
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/karlaleandravargas/lumora/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 312,
    columnNumber: 3
  }, void 0);
}, pn = (e) => {
  const [r, t] = me(!0), [o, n] = me(null);
  return Be(() => {
    (async () => {
      try {
        const s = new URLSearchParams(window.location.search), l = s.get("access_token") || s.get("accessToken"), f = s.get("refresh_token") || s.get("refreshToken"), u = s.get("user"), c = s.get("error"), p = s.get("message");
        if (c) {
          const d = decodeURIComponent(p || c);
          throw new Error(d);
        }
        if (!l || !f)
          throw new Error("Missing authentication tokens in callback URL");
        V.setTokens(l, f);
        let E;
        if (u)
          try {
            const d = decodeURIComponent(u);
            E = JSON.parse(d);
          } catch (d) {
            console.warn("Failed to parse user from URL, fetching from API:", d), E = await ee.getCurrentUser();
          }
        else
          E = await ee.getCurrentUser();
        e?.onSuccess?.({ accessToken: l, refreshToken: f }, E);
        const x = e?.redirectPath || "/dashboard";
        window.history.replaceState({}, document.title, x), t(!1);
      } catch (s) {
        const l = s;
        n(l), e?.onError?.(l), t(!1);
      }
    })();
  }, [e?.redirectPath]), { loading: r, error: o };
}, hn = (e) => ({ logout: Wr(async () => {
  const t = V.getRefreshToken();
  if (e?.apiBaseUrl && t)
    try {
      await ee.logout(t);
    } catch (o) {
      console.error("Logout API call failed:", o);
    }
  V.clearTokens(), window.location.href = "/login";
}, [e?.apiBaseUrl]) });
export {
  fn as LumoraLogin,
  V as TokenStorage,
  ot as getBrandingConfig,
  tt as getDefaultBranding,
  pn as useAuthCallback,
  hn as useLogout
};
