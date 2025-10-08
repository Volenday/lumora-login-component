import pr, { useState as ve, useEffect as vr } from "react";
import { appendErrors as br, useForm as xr } from "react-hook-form";
import { validateFieldsNatively as hr, toNestErrors as yr } from "@hookform/resolvers";
import * as be from "yup";
import { Box as T, Typography as H, Button as Y, Alert as Er, Stack as Nr, TextField as We, CircularProgress as $e, Divider as kr } from "@mui/material";
import { Google as Cr } from "@mui/icons-material";
import { LumoraOTP as Dr } from "@volenday/lumora-otp-component";
var K = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Rr() {
  if (Ie) return X;
  Ie = 1;
  var _ = Symbol.for("react.fragment");
  return X.Fragment = _, X.jsxDEV = void 0, X;
}
var Z = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function wr() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && (function() {
    var _ = pr, j = Symbol.for("react.element"), L = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), D = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), n = Symbol.iterator, z = "@@iterator";
    function ee(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = n && e[n] || e[z];
      return typeof r == "function" ? r : null;
    }
    var k = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          o[t - 1] = arguments[t];
        re("error", e, o);
      }
    }
    function re(e, r, o) {
      {
        var t = k.ReactDebugCurrentFrame, u = t.getStackAddendum();
        u !== "" && (r += "%s", o = o.concat([u]));
        var c = o.map(function(i) {
          return String(i);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var oe = !1, ne = !1, te = !1, ae = !1, ie = !1, A;
    A = Symbol.for("react.module.reference");
    function v(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === C || e === N || ie || e === S || e === d || e === m || ae || e === Q || oe || ne || te || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === b || e.$$typeof === h || e.$$typeof === D || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === A || e.getModuleId !== void 0));
    }
    function P(e, r, o) {
      var t = e.displayName;
      if (t)
        return t;
      var u = r.displayName || r.name || "";
      return u !== "" ? o + "(" + u + ")" : o;
    }
    function W(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case C:
          return "Fragment";
        case L:
          return "Portal";
        case N:
          return "Profiler";
        case S:
          return "StrictMode";
        case d:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case D:
            var r = e;
            return W(r) + ".Consumer";
          case h:
            var o = e;
            return W(o._context) + ".Provider";
          case l:
            return P(e, e.render, "ForwardRef");
          case b:
            var t = e.displayName || null;
            return t !== null ? t : w(e.type) || "Memo";
          case R: {
            var u = e, c = u._payload, i = u._init;
            try {
              return w(i(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, $ = 0, xe, he, ye, Ee, Ne, ke, Ce;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function ze() {
      {
        if ($ === 0) {
          xe = console.log, he = console.info, ye = console.warn, Ee = console.error, Ne = console.group, ke = console.groupCollapsed, Ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: De,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function qe() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: xe
            }),
            info: O({}, e, {
              value: he
            }),
            warn: O({}, e, {
              value: ye
            }),
            error: O({}, e, {
              value: Ee
            }),
            group: O({}, e, {
              value: Ne
            }),
            groupCollapsed: O({}, e, {
              value: ke
            }),
            groupEnd: O({}, e, {
              value: Ce
            })
          });
        }
        $ < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = k.ReactCurrentDispatcher, le;
    function q(e, r, o) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (u) {
            var t = u.stack.trim().match(/\n( *(at )?)/);
            le = t && t[1] || "";
          }
        return `
` + le + e;
      }
    }
    var ue = !1, B;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Be();
    }
    function Re(e, r) {
      if (!e || ue)
        return "";
      {
        var o = B.get(e);
        if (o !== void 0)
          return o;
      }
      var t;
      ue = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = se.current, se.current = null, ze();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (y) {
              t = y;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (y) {
              t = y;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            t = y;
          }
          e();
        }
      } catch (y) {
        if (y && t && typeof y.stack == "string") {
          for (var a = y.stack.split(`
`), x = t.stack.split(`
`), f = a.length - 1, g = x.length - 1; f >= 1 && g >= 0 && a[f] !== x[g]; )
            g--;
          for (; f >= 1 && g >= 0; f--, g--)
            if (a[f] !== x[g]) {
              if (f !== 1 || g !== 1)
                do
                  if (f--, g--, g < 0 || a[f] !== x[g]) {
                    var E = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, E), E;
                  }
                while (f >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        ue = !1, se.current = c, qe(), Error.prepareStackTrace = u;
      }
      var F = e ? e.displayName || e.name : "", V = F ? q(F) : "";
      return typeof e == "function" && B.set(e, V), V;
    }
    function Je(e, r, o) {
      return Re(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Ge(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case d:
          return q("Suspense");
        case m:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Je(e.render);
          case b:
            return J(e.type, r, o);
          case R: {
            var t = e, u = t._payload, c = t._init;
            try {
              return J(c(u), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, we = {}, Te = k.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, o = J(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(o);
      } else
        Te.setExtraStackFrame(null);
    }
    function He(e, r, o, t, u) {
      {
        var c = Function.call.bind(I);
        for (var i in e)
          if (c(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var x = Error((t || "React class") + ": " + o + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              a = e[i](r, i, t, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (G(u), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", o, i, typeof a), G(null)), a instanceof Error && !(a.message in we) && (we[a.message] = !0, G(u), p("Failed %s type: %s", o, a.message), G(null));
          }
      }
    }
    var Ke = Array.isArray;
    function ce(e) {
      return Ke(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function Ze(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function je(e) {
      if (Ze(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), _e(e);
    }
    var M = k.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Se, de;
    de = {};
    function er(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var o = w(M.current.type);
        de[o] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(M.current.type), e.ref), de[o] = !0);
      }
    }
    function nr(e, r) {
      {
        var o = function() {
          Le || (Le = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var o = function() {
          Se || (Se = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, o, t, u, c, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: j,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: o,
        props: i,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ir(e, r, o, t, u) {
      {
        var c, i = {}, a = null, x = null;
        o !== void 0 && (je(o), a = "" + o), rr(r) && (je(r.key), a = "" + r.key), er(r) && (x = r.ref, or(r, u));
        for (c in r)
          I.call(r, c) && !Qe.hasOwnProperty(c) && (i[c] = r[c]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (c in f)
            i[c] === void 0 && (i[c] = f[c]);
        }
        if (a || x) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && nr(i, g), x && tr(i, g);
        }
        return ar(e, a, x, u, t, M.current, i);
      }
    }
    var fe = k.ReactCurrentOwner, Pe = k.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, o = J(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(o);
      } else
        Pe.setExtraStackFrame(null);
    }
    var me;
    me = !1;
    function ge(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    function Oe() {
      {
        if (fe.current) {
          var e = w(fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + r + ":" + o + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function lr(e) {
      {
        var r = Oe();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function Ue(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = lr(r);
        if (Ve[o])
          return;
        Ve[o] = !0;
        var t = "";
        e && e._owner && e._owner !== fe.current && (t = " It was passed a child from " + w(e._owner.type) + "."), U(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, t), U(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var o = 0; o < e.length; o++) {
            var t = e[o];
            ge(t) && Ue(t, r);
          }
        else if (ge(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = ee(e);
          if (typeof u == "function" && u !== e.entries)
            for (var c = u.call(e), i; !(i = c.next()).done; )
              ge(i.value) && Ue(i.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          o = r.propTypes;
        else
          return;
        if (o) {
          var t = w(r);
          He(o, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !me) {
          me = !0;
          var u = w(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var t = r[o];
          if (t !== "children" && t !== "key") {
            U(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), U(null);
            break;
          }
        }
        e.ref !== null && (U(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    var Ae = {};
    function dr(e, r, o, t, u, c) {
      {
        var i = v(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = sr(u);
          x ? a += x : a += Oe();
          var f;
          e === null ? f = "null" : ce(e) ? f = "array" : e !== void 0 && e.$$typeof === j ? (f = "<" + (w(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var g = ir(e, r, o, u, c);
        if (g == null)
          return g;
        if (i) {
          var E = r.children;
          if (E !== void 0)
            if (t)
              if (ce(E)) {
                for (var F = 0; F < E.length; F++)
                  Fe(E[F], e);
                Object.freeze && Object.freeze(E);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(E, e);
        }
        if (I.call(r, "key")) {
          var V = w(e), y = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), pe = y.length > 0 ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ae[V + pe]) {
            var mr = y.length > 0 ? "{" + y.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pe, V, mr, V), Ae[V + pe] = !0;
          }
        }
        return e === C ? cr(g) : ur(g), g;
      }
    }
    var fr = dr;
    Z.Fragment = C, Z.jsxDEV = fr;
  })()), Z;
}
var Ye;
function Tr() {
  return Ye || (Ye = 1, process.env.NODE_ENV === "production" ? K.exports = Rr() : K.exports = wr()), K.exports;
}
var s = Tr();
function _r(_, j, L) {
  return L === void 0 && (L = {}), function(C, S, N) {
    try {
      return Promise.resolve((function(h, D) {
        try {
          var l = (j != null && j.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(_[L.mode === "sync" ? "validateSync" : "validate"](C, Object.assign({ abortEarly: !1 }, j, { context: S }))).then(function(d) {
            return N.shouldUseNativeValidation && hr({}, N), { values: L.raw ? Object.assign({}, C) : d, errors: {} };
          }));
        } catch (d) {
          return D(d);
        }
        return l && l.then ? l.then(void 0, D) : l;
      })(0, function(h) {
        if (!h.inner) throw h;
        return { values: {}, errors: yr((D = h, l = !N.shouldUseNativeValidation && N.criteriaMode === "all", (D.inner || []).reduce(function(d, m) {
          if (d[m.path] || (d[m.path] = { message: m.message, type: m.type }), l) {
            var b = d[m.path].types, R = b && b[m.type];
            d[m.path] = br(m.path, l, d, m.type, R ? [].concat(R, m.message) : m.message);
          }
          return d;
        }, {})), N) };
        var D, l;
      }));
    } catch (h) {
      return Promise.reject(h);
    }
  };
}
const jr = be.object({
  email: be.string().email("Please enter a valid email address").required("Email is required"),
  password: be.string().min(6, "Password must be at least 6 characters").required("Password is required")
}), Lr = () => ({
  primaryColor: "#1976d2",
  secondaryColor: "#42a5f5",
  backgroundColor: "#ffffff",
  textColor: "#333333",
  logoHeight: 48,
  logo: "https://via.placeholder.com/200x80/1976d2/ffffff?text=Lumora"
}), Sr = (_) => ({
  ...Lr(),
  ..._
}), Wr = ({
  onLocalLogin: _,
  onGoogleLogin: j,
  onLoginSuccess: L,
  onLoginError: C,
  googleClientId: S,
  enableGoogleSignIn: N = !0,
  enableLocalSignIn: h = !0,
  branding: D
}) => {
  const [l, d] = ve("idle"), [m, b] = ve(null), [R, Q] = ve(!1), n = Sr(D);
  if (!h && !N)
    throw new Error(
      "At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)"
    );
  const {
    register: z,
    handleSubmit: ee,
    formState: { errors: k },
    reset: p
  } = xr({
    resolver: _r(jr)
  }), re = async (v) => {
    d("loading"), b(null);
    try {
      await _(v.email, v.password), d("otp-required");
    } catch (P) {
      const W = P;
      b({ message: W.message, type: "local" }), d("error"), C(W);
    }
  }, oe = () => {
    d("google-loading"), b(null);
    try {
      j(), setTimeout(() => {
        d("otp-required");
      }, 1e3);
    } catch (v) {
      const P = v;
      b({ message: P.message, type: "google" }), d("error"), C(P);
    }
  }, ne = async (v) => {
    if (await new Promise((P) => setTimeout(P, 1e3)), v === "123456")
      return { success: !0, token: "verified-token" };
    throw new Error("Invalid OTP code");
  }, te = (v) => {
    d("success"), L(v);
  }, ae = (v) => {
    b({ message: v.message, type: "otp" }), d("otp-error");
  }, ie = () => {
    console.log("Resending OTP..."), m && m.type === "otp" && b(null);
  }, A = () => {
    b(null), d("idle"), p();
  };
  return vr(() => {
    if (S && typeof window < "u") {
      const v = document.createElement("script");
      v.src = "https://accounts.google.com/gsi/client", v.async = !0, v.defer = !0, document.head.appendChild(v);
    }
  }, [S]), l === "otp-required" || l === "otp-error" ? /* @__PURE__ */ s.jsxDEV(
    T,
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
        background: n.backgroundColor,
        display: "flex",
        flexDirection: "column",
        // Prevent horizontal overflow
        overflowX: "hidden",
        boxSizing: "border-box"
      },
      children: /* @__PURE__ */ s.jsxDEV(
        T,
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
          children: [
            /* @__PURE__ */ s.jsxDEV(T, { sx: { textAlign: "center", mb: 3 }, children: [
              n.logo && /* @__PURE__ */ s.jsxDEV(T, { sx: { mb: 2 }, children: typeof n.logo == "string" ? /* @__PURE__ */ s.jsxDEV(
                "img",
                {
                  src: n.logo,
                  alt: n.companyName || "Company Logo",
                  style: {
                    height: n.logoHeight,
                    maxWidth: "100%",
                    objectFit: "contain"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                  lineNumber: 232,
                  columnNumber: 10
                },
                void 0
              ) : n.logo }, void 0, !1, {
                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                lineNumber: 230,
                columnNumber: 8
              }, void 0),
              /* @__PURE__ */ s.jsxDEV(
                H,
                {
                  variant: "h5",
                  component: "h1",
                  sx: {
                    color: n.textColor,
                    fontWeight: 600,
                    fontSize: { xs: "1.5rem", sm: "1.75rem" }
                  },
                  children: "Verify Your Identity"
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                  lineNumber: 250,
                  columnNumber: 7
                },
                void 0
              )
            ] }, void 0, !0, {
              fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
              lineNumber: 228,
              columnNumber: 6
            }, void 0),
            /* @__PURE__ */ s.jsxDEV(
              Dr,
              {
                onVerify: ne,
                onVerifySuccess: te,
                onVerifyError: ae,
                onResend: ie,
                instructionText: "Please enter the 6-digit code sent to your email",
                showResend: !0,
                resendCooldown: 60,
                expirationTime: 300,
                showExpirationTimer: !0
              },
              void 0,
              !1,
              {
                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                lineNumber: 263,
                columnNumber: 6
              },
              void 0
            ),
            l === "otp-error" && /* @__PURE__ */ s.jsxDEV(T, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ s.jsxDEV(
              Y,
              {
                variant: "text",
                onClick: A,
                sx: {
                  textTransform: "none",
                  color: n.primaryColor,
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: `${n.primaryColor}08`
                  }
                },
                children: "Back to Sign In"
              },
              void 0,
              !1,
              {
                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                lineNumber: 277,
                columnNumber: 8
              },
              void 0
            ) }, void 0, !1, {
              fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
              lineNumber: 276,
              columnNumber: 7
            }, void 0)
          ]
        },
        void 0,
        !0,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 215,
          columnNumber: 5
        },
        void 0
      )
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 191,
      columnNumber: 4
    },
    void 0
  ) : /* @__PURE__ */ s.jsxDEV(
    T,
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
        boxShadow: { xs: "none", sm: "0 8px 32px rgba(0, 0, 0, 0.12)" },
        borderRadius: { xs: 0, sm: 2 },
        border: { xs: "none", sm: "1px solid rgba(0, 0, 0, 0.08)" },
        background: n.backgroundColor,
        display: "flex",
        flexDirection: "column",
        // Prevent horizontal overflow
        overflowX: "hidden",
        boxSizing: "border-box"
      },
      children: /* @__PURE__ */ s.jsxDEV(
        T,
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
          children: [
            /* @__PURE__ */ s.jsxDEV(T, { sx: { textAlign: "center", mb: 4 }, children: [
              n.logo && /* @__PURE__ */ s.jsxDEV(T, { sx: { mb: 2 }, children: typeof n.logo == "string" ? /* @__PURE__ */ s.jsxDEV(
                "img",
                {
                  src: n.logo,
                  alt: n.companyName || "Company Logo",
                  style: {
                    height: n.logoHeight,
                    maxWidth: "100%",
                    objectFit: "contain"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                  lineNumber: 338,
                  columnNumber: 9
                },
                void 0
              ) : n.logo }, void 0, !1, {
                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                lineNumber: 336,
                columnNumber: 7
              }, void 0),
              /* @__PURE__ */ s.jsxDEV(
                H,
                {
                  variant: "h4",
                  component: "h1",
                  sx: {
                    mb: 1,
                    color: n.textColor,
                    fontWeight: 600,
                    fontSize: { xs: "1.75rem", sm: "2rem" }
                  },
                  children: n.companyName ? `Welcome to ${n.companyName}` : "Sign In"
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                  lineNumber: 356,
                  columnNumber: 6
                },
                void 0
              ),
              n.tagline && /* @__PURE__ */ s.jsxDEV(
                H,
                {
                  variant: "body1",
                  sx: {
                    color: n.textColor,
                    opacity: 0.7,
                    fontSize: "0.95rem"
                  },
                  children: n.tagline
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                  lineNumber: 372,
                  columnNumber: 7
                },
                void 0
              )
            ] }, void 0, !0, {
              fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
              lineNumber: 334,
              columnNumber: 5
            }, void 0),
            m && /* @__PURE__ */ s.jsxDEV(
              Er,
              {
                severity: "error",
                sx: { mb: 3 },
                onClose: () => b(null),
                children: m.message
              },
              void 0,
              !1,
              {
                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                lineNumber: 386,
                columnNumber: 6
              },
              void 0
            ),
            /* @__PURE__ */ s.jsxDEV(
              T,
              {
                component: "form",
                onSubmit: h ? ee(re) : void 0,
                children: /* @__PURE__ */ s.jsxDEV(Nr, { spacing: 3, children: [
                  h && /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: [
                    /* @__PURE__ */ s.jsxDEV(
                      We,
                      {
                        ...z("email"),
                        fullWidth: !0,
                        label: "Email Address",
                        type: "email",
                        placeholder: "Enter your email",
                        error: !!k.email,
                        helperText: k.email?.message,
                        disabled: l === "loading" || l === "google-loading",
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.4,
                            "&:hover fieldset": {
                              borderColor: n.primaryColor
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: n.primaryColor
                            }
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: n.primaryColor
                          }
                        }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                        lineNumber: 406,
                        columnNumber: 9
                      },
                      void 0
                    ),
                    /* @__PURE__ */ s.jsxDEV(
                      We,
                      {
                        ...z("password"),
                        fullWidth: !0,
                        label: "Password",
                        type: R ? "text" : "password",
                        placeholder: "Enter your password",
                        error: !!k.password,
                        helperText: k.password?.message,
                        disabled: l === "loading" || l === "google-loading",
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.4,
                            "&:hover fieldset": {
                              borderColor: n.primaryColor
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: n.primaryColor
                            }
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: n.primaryColor
                          }
                        },
                        slotProps: {
                          input: {
                            endAdornment: /* @__PURE__ */ s.jsxDEV(
                              Y,
                              {
                                size: "small",
                                onClick: () => Q(
                                  !R
                                ),
                                disabled: l === "loading" || l === "google-loading",
                                sx: {
                                  color: n.primaryColor,
                                  textTransform: "none",
                                  fontWeight: 500,
                                  "&:hover": {
                                    backgroundColor: `${n.primaryColor}10`
                                  }
                                },
                                children: R ? "Hide" : "Show"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                                lineNumber: 467,
                                columnNumber: 13
                              },
                              void 0
                            )
                          }
                        }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                        lineNumber: 436,
                        columnNumber: 9
                      },
                      void 0
                    ),
                    /* @__PURE__ */ s.jsxDEV(
                      Y,
                      {
                        type: "submit",
                        fullWidth: !0,
                        variant: "contained",
                        size: "large",
                        disabled: l === "loading" || l === "google-loading",
                        sx: {
                          py: 1.5,
                          backgroundColor: n.primaryColor,
                          borderRadius: 1.4,
                          textTransform: "none",
                          fontWeight: 600,
                          fontSize: "1rem",
                          boxShadow: `0 4px 12px ${n.primaryColor}30`,
                          "&:hover": {
                            backgroundColor: n.secondaryColor,
                            boxShadow: `0 6px 16px ${n.primaryColor}40`
                          },
                          "&:disabled": {
                            backgroundColor: `${n.primaryColor}60`
                          }
                        },
                        children: l === "loading" ? /* @__PURE__ */ s.jsxDEV(
                          $e,
                          {
                            size: 24,
                            color: "inherit"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                            lineNumber: 527,
                            columnNumber: 11
                          },
                          void 0
                        ) : "Sign In"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                        lineNumber: 498,
                        columnNumber: 9
                      },
                      void 0
                    )
                  ] }, void 0, !0, {
                    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                    lineNumber: 405,
                    columnNumber: 8
                  }, void 0),
                  N && S && /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: [
                    h && /* @__PURE__ */ s.jsxDEV(kr, { sx: { my: 1 }, children: /* @__PURE__ */ s.jsxDEV(
                      H,
                      {
                        variant: "body2",
                        sx: {
                          color: n.textColor,
                          opacity: 0.6,
                          px: 2,
                          fontWeight: 500
                        },
                        children: "OR"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                        lineNumber: 542,
                        columnNumber: 11
                      },
                      void 0
                    ) }, void 0, !1, {
                      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                      lineNumber: 541,
                      columnNumber: 10
                    }, void 0),
                    /* @__PURE__ */ s.jsxDEV(
                      Y,
                      {
                        fullWidth: !0,
                        variant: "outlined",
                        size: "large",
                        startIcon: l === "google-loading" ? /* @__PURE__ */ s.jsxDEV(
                          $e,
                          {
                            size: 20,
                            color: "inherit"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                            lineNumber: 562,
                            columnNumber: 12
                          },
                          void 0
                        ) : /* @__PURE__ */ s.jsxDEV(Cr, {}, void 0, !1, {
                          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                          lineNumber: 567,
                          columnNumber: 12
                        }, void 0),
                        onClick: oe,
                        disabled: l === "loading" || l === "google-loading",
                        sx: {
                          py: 1.5,
                          borderRadius: 1.4,
                          textTransform: "none",
                          fontWeight: 500,
                          fontSize: "1rem",
                          borderColor: n.textColor + "30",
                          color: n.textColor,
                          "&:hover": {
                            borderColor: n.primaryColor,
                            backgroundColor: `${n.primaryColor}08`,
                            color: n.textColor
                            // Ensure text color stays consistent
                          },
                          "&:active": {
                            borderColor: n.primaryColor,
                            backgroundColor: `${n.primaryColor}12`,
                            color: n.textColor
                            // Ensure text color stays consistent on click
                          },
                          "&:disabled": {
                            borderColor: n.textColor + "20",
                            color: n.textColor + "60"
                          },
                          // Prevent color changes on focus
                          "&:focus": {
                            borderColor: n.textColor + "30",
                            color: n.textColor
                          },
                          // Ensure consistent styling across all states
                          "&.MuiButton-root": {
                            borderColor: n.textColor + "30",
                            color: n.textColor
                          }
                        },
                        children: l === "google-loading" ? "Signing in..." : "Continue with Google"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                        lineNumber: 556,
                        columnNumber: 9
                      },
                      void 0
                    )
                  ] }, void 0, !0, {
                    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                    lineNumber: 539,
                    columnNumber: 8
                  }, void 0),
                  l === "error" && /* @__PURE__ */ s.jsxDEV(
                    Y,
                    {
                      fullWidth: !0,
                      variant: "text",
                      onClick: A,
                      sx: {
                        mt: 1,
                        color: n.primaryColor,
                        textTransform: "none",
                        fontWeight: 500,
                        "&:hover": {
                          backgroundColor: `${n.primaryColor}08`
                        }
                      },
                      children: "Try Again"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                      lineNumber: 623,
                      columnNumber: 8
                    },
                    void 0
                  )
                ] }, void 0, !0, {
                  fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                  lineNumber: 403,
                  columnNumber: 6
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                lineNumber: 395,
                columnNumber: 5
              },
              void 0
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 321,
          columnNumber: 4
        },
        void 0
      )
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 300,
      columnNumber: 3
    },
    void 0
  );
};
export {
  Wr as LumoraLogin
};
