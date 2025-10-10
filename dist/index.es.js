import ye, { useState as Ne, useEffect as Do } from "react";
import { Box as S, Typography as A, Stack as ke, TextField as be, Button as U, CircularProgress as Ee, Divider as wo, Alert as Je } from "@mui/material";
import { GoogleOAuthProvider as jo, useGoogleLogin as Po } from "@react-oauth/google";
import { appendErrors as Ro, useForm as Xe } from "react-hook-form";
import { validateFieldsNatively as To, toNestErrors as So } from "@hookform/resolvers";
import * as z from "yup";
import { Google as Co } from "@mui/icons-material";
import { LumoraOTP as Vo } from "@volenday/lumora-otp-component";
var ee = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function _o() {
  if (Ye) return oe;
  Ye = 1;
  var o = Symbol.for("react.fragment");
  return oe.Fragment = o, oe.jsxDEV = void 0, oe;
}
var re = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Fo() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && (function() {
    var o = ye, i = Symbol.for("react.element"), m = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), y = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), L = Symbol.iterator, j = "@@iterator";
    function B(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[j];
      return typeof r == "function" ? r : null;
    }
    var N = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          t[s - 1] = arguments[s];
        G("error", e, t);
      }
    }
    function G(e, r, t) {
      {
        var s = N.ReactDebugCurrentFrame, u = s.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var f = t.map(function(l) {
          return String(l);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var te = !1, se = !1, ae = !1, ie = !1, le = !1, H;
    H = Symbol.for("react.module.reference");
    function q(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === x || e === p || le || e === E || e === d || e === h || ie || e === R || te || se || ae || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === O || e.$$typeof === c || e.$$typeof === y || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === H || e.getModuleId !== void 0));
    }
    function ue(e, r, t) {
      var s = e.displayName;
      if (s)
        return s;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function J(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case x:
          return "Fragment";
        case m:
          return "Portal";
        case p:
          return "Profiler";
        case E:
          return "StrictMode";
        case d:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return J(r) + ".Consumer";
          case c:
            var t = e;
            return J(t._context) + ".Provider";
          case g:
            return ue(e, e.render, "ForwardRef");
          case O:
            var s = e.displayName || null;
            return s !== null ? s : C(e.type) || "Memo";
          case w: {
            var u = e, f = u._payload, l = u._init;
            try {
              return C(l(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var v = Object.assign, V = 0, F, De, we, je, Pe, Re, Te;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function Ze() {
      {
        if (V === 0) {
          F = console.log, De = console.info, we = console.warn, je = console.error, Pe = console.group, Re = console.groupCollapsed, Te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Se,
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
        V++;
      }
    }
    function Qe() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: v({}, e, {
              value: F
            }),
            info: v({}, e, {
              value: De
            }),
            warn: v({}, e, {
              value: we
            }),
            error: v({}, e, {
              value: je
            }),
            group: v({}, e, {
              value: Pe
            }),
            groupCollapsed: v({}, e, {
              value: Re
            }),
            groupEnd: v({}, e, {
              value: Te
            })
          });
        }
        V < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = N.ReactCurrentDispatcher, de;
    function X(e, r, t) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (u) {
            var s = u.stack.trim().match(/\n( *(at )?)/);
            de = s && s[1] || "";
          }
        return `
` + de + e;
      }
    }
    var me = !1, K;
    {
      var eo = typeof WeakMap == "function" ? WeakMap : Map;
      K = new eo();
    }
    function Ce(e, r) {
      if (!e || me)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var s;
      me = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = ce.current, ce.current = null, Ze();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (T) {
              s = T;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (T) {
              s = T;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            s = T;
          }
          e();
        }
      } catch (T) {
        if (T && s && typeof T.stack == "string") {
          for (var a = T.stack.split(`
`), P = s.stack.split(`
`), b = a.length - 1, k = P.length - 1; b >= 1 && k >= 0 && a[b] !== P[k]; )
            k--;
          for (; b >= 1 && k >= 0; b--, k--)
            if (a[b] !== P[k]) {
              if (b !== 1 || k !== 1)
                do
                  if (b--, k--, k < 0 || a[b] !== P[k]) {
                    var _ = `
` + a[b].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, _), _;
                  }
                while (b >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        me = !1, ce.current = f, Qe(), Error.prepareStackTrace = u;
      }
      var $ = e ? e.displayName || e.name : "", W = $ ? X($) : "";
      return typeof e == "function" && K.set(e, W), W;
    }
    function oo(e, r, t) {
      return Ce(e, !1);
    }
    function ro(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ce(e, ro(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case d:
          return X("Suspense");
        case h:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return oo(e.render);
          case O:
            return Z(e.type, r, t);
          case w: {
            var s = e, u = s._payload, f = s._init;
            try {
              return Z(f(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, Ve = {}, _e = N.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var r = e._owner, t = Z(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    function no(e, r, t, s, u) {
      {
        var f = Function.call.bind(M);
        for (var l in e)
          if (f(e, l)) {
            var a = void 0;
            try {
              if (typeof e[l] != "function") {
                var P = Error((s || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              a = e[l](r, l, s, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              a = b;
            }
            a && !(a instanceof Error) && (Q(u), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", t, l, typeof a), Q(null)), a instanceof Error && !(a.message in Ve) && (Ve[a.message] = !0, Q(u), D("Failed %s type: %s", t, a.message), Q(null));
          }
      }
    }
    var to = Array.isArray;
    function fe(e) {
      return to(e);
    }
    function so(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ao(e) {
      try {
        return Fe(e), !1;
      } catch {
        return !0;
      }
    }
    function Fe(e) {
      return "" + e;
    }
    function Oe(e) {
      if (ao(e))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", so(e)), Fe(e);
    }
    var Y = N.ReactCurrentOwner, io = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ue, Le, pe;
    pe = {};
    function lo(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function uo(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function co(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = C(Y.current.type);
        pe[t] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(Y.current.type), e.ref), pe[t] = !0);
      }
    }
    function mo(e, r) {
      {
        var t = function() {
          Ue || (Ue = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function fo(e, r) {
      {
        var t = function() {
          Le || (Le = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var po = function(e, r, t, s, u, f, l) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: f
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
        value: s
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function go(e, r, t, s, u) {
      {
        var f, l = {}, a = null, P = null;
        t !== void 0 && (Oe(t), a = "" + t), uo(r) && (Oe(r.key), a = "" + r.key), lo(r) && (P = r.ref, co(r, u));
        for (f in r)
          M.call(r, f) && !io.hasOwnProperty(f) && (l[f] = r[f]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (f in b)
            l[f] === void 0 && (l[f] = b[f]);
        }
        if (a || P) {
          var k = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && mo(l, k), P && fo(l, k);
        }
        return po(e, a, P, u, s, Y.current, l);
      }
    }
    var ge = N.ReactCurrentOwner, Ae = N.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = Z(e.type, e._source, r ? r.type : null);
        Ae.setExtraStackFrame(t);
      } else
        Ae.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function xe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function We() {
      {
        if (ge.current) {
          var e = C(ge.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vo(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ie = {};
    function xo(e) {
      {
        var r = We();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function $e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = xo(r);
        if (Ie[t])
          return;
        Ie[t] = !0;
        var s = "";
        e && e._owner && e._owner !== ge.current && (s = " It was passed a child from " + C(e._owner.type) + "."), I(e), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, s), I(null);
      }
    }
    function Be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var t = 0; t < e.length; t++) {
            var s = e[t];
            xe(s) && $e(s, r);
          }
        else if (xe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = B(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), l; !(l = f.next()).done; )
              xe(l.value) && $e(l.value, r);
        }
      }
    }
    function ho(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          t = r.propTypes;
        else
          return;
        if (t) {
          var s = C(r);
          no(t, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !ve) {
          ve = !0;
          var u = C(r);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function No(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var s = r[t];
          if (s !== "children" && s !== "key") {
            I(e), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), D("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Me = {};
    function bo(e, r, t, s, u, f) {
      {
        var l = q(e);
        if (!l) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = vo(u);
          P ? a += P : a += We();
          var b;
          e === null ? b = "null" : fe(e) ? b = "array" : e !== void 0 && e.$$typeof === i ? (b = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, a);
        }
        var k = go(e, r, t, u, f);
        if (k == null)
          return k;
        if (l) {
          var _ = r.children;
          if (_ !== void 0)
            if (s)
              if (fe(_)) {
                for (var $ = 0; $ < _.length; $++)
                  Be(_[$], e);
                Object.freeze && Object.freeze(_);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(_, e);
        }
        if (M.call(r, "key")) {
          var W = C(e), T = Object.keys(r).filter(function(Eo) {
            return Eo !== "key";
          }), he = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Me[W + he]) {
            var ko = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, he, W, ko, W), Me[W + he] = !0;
          }
        }
        return e === x ? No(k) : ho(k), k;
      }
    }
    var yo = bo;
    re.Fragment = x, re.jsxDEV = yo;
  })()), re;
}
var Ge;
function Oo() {
  return Ge || (Ge = 1, process.env.NODE_ENV === "production" ? ee.exports = _o() : ee.exports = Fo()), ee.exports;
}
var n = Oo();
const Uo = () => ({
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
}), Lo = (o) => ({
  ...Uo(),
  ...o
}), He = ({
  brandConfig: o,
  title: i,
  subtitle: m
}) => /* @__PURE__ */ n.jsxDEV(S, { sx: { textAlign: "center", mb: 4 }, children: [
  o.logo && /* @__PURE__ */ n.jsxDEV(S, { sx: { mb: 2 }, children: typeof o.logo == "string" ? /* @__PURE__ */ n.jsxDEV(
    "img",
    {
      src: o.logo,
      alt: o.companyName || "Company Logo",
      style: {
        height: o.logoHeight,
        maxWidth: "100%",
        objectFit: "contain"
      }
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/BrandingHeader.tsx",
      lineNumber: 21,
      columnNumber: 7
    },
    void 0
  ) : o.logo }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/BrandingHeader.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, void 0),
  i && /* @__PURE__ */ n.jsxDEV(
    A,
    {
      variant: "h4",
      component: "h1",
      sx: {
        mb: 1,
        color: o.textColor,
        fontWeight: 600,
        fontSize: { xs: "1.75rem", sm: "2rem" }
      },
      children: i
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/BrandingHeader.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    void 0
  ),
  m && /* @__PURE__ */ n.jsxDEV(
    A,
    {
      variant: "body1",
      sx: {
        color: o.textColor,
        opacity: 0.7,
        fontSize: "0.95rem"
      },
      children: m
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/BrandingHeader.tsx",
      lineNumber: 52,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, !0, {
  fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/BrandingHeader.tsx",
  lineNumber: 17,
  columnNumber: 3
}, void 0);
function Ke(o, i, m) {
  return m === void 0 && (m = {}), function(x, E, p) {
    try {
      return Promise.resolve((function(c, y) {
        try {
          var g = (i != null && i.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(o[m.mode === "sync" ? "validateSync" : "validate"](x, Object.assign({ abortEarly: !1 }, i, { context: E }))).then(function(d) {
            return p.shouldUseNativeValidation && To({}, p), { values: m.raw ? Object.assign({}, x) : d, errors: {} };
          }));
        } catch (d) {
          return y(d);
        }
        return g && g.then ? g.then(void 0, y) : g;
      })(0, function(c) {
        if (!c.inner) throw c;
        return { values: {}, errors: So((y = c, g = !p.shouldUseNativeValidation && p.criteriaMode === "all", (y.inner || []).reduce(function(d, h) {
          if (d[h.path] || (d[h.path] = { message: h.message, type: h.type }), g) {
            var O = d[h.path].types, w = O && O[h.type];
            d[h.path] = Ro(h.path, g, d, h.type, w ? [].concat(w, h.message) : h.message);
          }
          return d;
        }, {})), p) };
        var y, g;
      }));
    } catch (c) {
      return Promise.reject(c);
    }
  };
}
const Ao = z.object({
  email: z.string().email("Please enter a valid email address").required("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters").required("Password is required")
}), Wo = ({
  brandConfig: o,
  loginState: i,
  onSubmit: m,
  onForgetPassword: x,
  enableForgetPassword: E = !0
}) => {
  const [p, c] = Ne(!1), {
    register: y,
    handleSubmit: g,
    formState: { errors: d }
  } = Xe({
    resolver: Ke(Ao)
  }), h = i === "loading" || i === "google-loading";
  return /* @__PURE__ */ n.jsxDEV(S, { component: "form", onSubmit: g(m), children: /* @__PURE__ */ n.jsxDEV(ke, { spacing: 3, children: [
    /* @__PURE__ */ n.jsxDEV(
      be,
      {
        ...y("email"),
        fullWidth: !0,
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
        error: !!d.email,
        helperText: d.email?.message,
        disabled: h,
        sx: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 1.4,
            "&:hover fieldset": {
              borderColor: o.primaryColor
            },
            "&.Mui-focused fieldset": {
              borderColor: o.primaryColor
            }
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: o.primaryColor
          }
        }
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LoginForm.tsx",
        lineNumber: 50,
        columnNumber: 5
      },
      void 0
    ),
    /* @__PURE__ */ n.jsxDEV(
      be,
      {
        ...y("password"),
        fullWidth: !0,
        label: "Password",
        type: p ? "text" : "password",
        placeholder: "Enter your password",
        error: !!d.password,
        helperText: d.password?.message,
        disabled: h,
        sx: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 1.4,
            "&:hover fieldset": {
              borderColor: o.primaryColor
            },
            "&.Mui-focused fieldset": {
              borderColor: o.primaryColor
            }
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: o.primaryColor
          }
        },
        slotProps: {
          input: {
            endAdornment: /* @__PURE__ */ n.jsxDEV(
              U,
              {
                size: "small",
                onClick: () => c(!p),
                disabled: h,
                sx: {
                  color: o.primaryColor,
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: `${o.primaryColor}10`
                  }
                },
                children: p ? "Hide" : "Show"
              },
              void 0,
              !1,
              {
                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LoginForm.tsx",
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
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LoginForm.tsx",
        lineNumber: 75,
        columnNumber: 5
      },
      void 0
    ),
    /* @__PURE__ */ n.jsxDEV(
      U,
      {
        type: "submit",
        fullWidth: !0,
        variant: "contained",
        size: "large",
        disabled: h,
        sx: {
          py: 1.5,
          backgroundColor: o.primaryColor,
          borderRadius: 1.4,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          boxShadow: `0 4px 12px ${o.primaryColor}30`,
          "&:hover": {
            backgroundColor: o.secondaryColor,
            boxShadow: `0 6px 16px ${o.primaryColor}40`
          },
          "&:disabled": {
            backgroundColor: `${o.primaryColor}60`
          }
        },
        children: i === "loading" ? /* @__PURE__ */ n.jsxDEV(Ee, { size: 24, color: "inherit" }, void 0, !1, {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LoginForm.tsx",
          lineNumber: 147,
          columnNumber: 7
        }, void 0) : "Sign In"
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LoginForm.tsx",
        lineNumber: 123,
        columnNumber: 5
      },
      void 0
    ),
    E && x && /* @__PURE__ */ n.jsxDEV(S, { textAlign: "right", sx: { mt: 1 }, children: /* @__PURE__ */ n.jsxDEV(
      U,
      {
        variant: "text",
        onClick: x,
        disabled: h,
        sx: {
          textTransform: "none",
          color: o.primaryColor,
          fontWeight: 500,
          fontSize: "0.9rem",
          "&:hover": {
            backgroundColor: `${o.primaryColor}08`
          }
        },
        children: "Forgot Password?"
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LoginForm.tsx",
        lineNumber: 155,
        columnNumber: 7
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LoginForm.tsx",
      lineNumber: 154,
      columnNumber: 6
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LoginForm.tsx",
    lineNumber: 49,
    columnNumber: 4
  }, void 0) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LoginForm.tsx",
    lineNumber: 48,
    columnNumber: 3
  }, void 0);
}, Io = ({
  brandConfig: o,
  loginState: i,
  onClick: m,
  showDivider: x = !1
}) => {
  const E = i === "loading" || i === "google-loading";
  return /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: [
    x && /* @__PURE__ */ n.jsxDEV(wo, { sx: { my: 1 }, children: /* @__PURE__ */ n.jsxDEV(
      A,
      {
        variant: "body2",
        sx: {
          color: o.textColor,
          opacity: 0.6,
          px: 2,
          fontWeight: 500
        },
        children: "OR"
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/GoogleSignInButton.tsx",
        lineNumber: 26,
        columnNumber: 6
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/GoogleSignInButton.tsx",
      lineNumber: 25,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ n.jsxDEV(
      U,
      {
        fullWidth: !0,
        variant: "outlined",
        size: "large",
        startIcon: i === "google-loading" ? /* @__PURE__ */ n.jsxDEV(Ee, { size: 20, color: "inherit" }, void 0, !1, {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/GoogleSignInButton.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, void 0) : /* @__PURE__ */ n.jsxDEV(Co, {}, void 0, !1, {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/GoogleSignInButton.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, void 0),
        onClick: m,
        disabled: E,
        sx: {
          py: 1.5,
          borderRadius: 1.4,
          textTransform: "none",
          fontWeight: 500,
          fontSize: "1rem",
          borderColor: o.textColor + "30",
          color: o.textColor,
          "&:hover": {
            borderColor: o.primaryColor,
            backgroundColor: `${o.primaryColor}08`,
            color: o.textColor
          },
          "&:active": {
            borderColor: o.primaryColor,
            backgroundColor: `${o.primaryColor}12`,
            color: o.textColor
          },
          "&:disabled": {
            borderColor: o.textColor + "20",
            color: o.textColor + "60"
          },
          "&:focus": {
            borderColor: o.textColor + "30",
            color: o.textColor
          },
          "&.MuiButton-root": {
            borderColor: o.textColor + "30",
            color: o.textColor
          }
        },
        children: i === "google-loading" ? "Signing in..." : "Continue with Google"
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/GoogleSignInButton.tsx",
        lineNumber: 40,
        columnNumber: 4
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/GoogleSignInButton.tsx",
    lineNumber: 23,
    columnNumber: 3
  }, void 0);
}, $o = z.object({
  email: z.string().email("Please enter a valid email address").required("Email is required")
}), Bo = ({
  brandConfig: o,
  loginState: i,
  error: m,
  onSubmit: x,
  onBackToLogin: E,
  onCloseError: p
}) => {
  const {
    register: c,
    handleSubmit: y,
    formState: { errors: g }
  } = Xe({
    resolver: Ke($o)
  }), d = i === "forget-password-loading";
  return /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: [
    m && /* @__PURE__ */ n.jsxDEV(Je, { severity: "error", sx: { mb: 3 }, onClose: p, children: m.message }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ n.jsxDEV(S, { sx: { textAlign: "center", mb: 3 }, children: [
      /* @__PURE__ */ n.jsxDEV(
        A,
        {
          variant: "h5",
          component: "h1",
          sx: {
            color: o.textColor,
            fontWeight: 600,
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
            mb: 2
          },
          children: o.forgetPasswordTitle || "Reset Password"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 65,
          columnNumber: 5
        },
        void 0
      ),
      /* @__PURE__ */ n.jsxDEV(
        A,
        {
          variant: "body1",
          sx: {
            color: o.textColor,
            opacity: 0.8,
            mb: 3,
            lineHeight: 1.6
          },
          children: o.forgetPasswordDescription || "Enter your email address and we will send you a link to reset your password."
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 78,
          columnNumber: 5
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 64,
      columnNumber: 4
    }, void 0),
    /* @__PURE__ */ n.jsxDEV(S, { component: "form", onSubmit: y(x), children: /* @__PURE__ */ n.jsxDEV(ke, { spacing: 3, children: [
      /* @__PURE__ */ n.jsxDEV(
        be,
        {
          ...c("email"),
          fullWidth: !0,
          label: "Email Address",
          type: "email",
          placeholder: "Enter your email",
          error: !!g.email,
          helperText: g.email?.message,
          disabled: d,
          sx: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 1.4,
              "&:hover fieldset": {
                borderColor: o.primaryColor
              },
              "&.Mui-focused fieldset": {
                borderColor: o.primaryColor
              }
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: o.primaryColor
            }
          }
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 94,
          columnNumber: 6
        },
        void 0
      ),
      /* @__PURE__ */ n.jsxDEV(
        U,
        {
          type: "submit",
          fullWidth: !0,
          variant: "contained",
          size: "large",
          disabled: d,
          sx: {
            py: 1.5,
            backgroundColor: o.primaryColor,
            borderRadius: 1.4,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
            boxShadow: `0 4px 12px ${o.primaryColor}30`,
            "&:hover": {
              backgroundColor: o.secondaryColor,
              boxShadow: `0 6px 16px ${o.primaryColor}40`
            },
            "&:disabled": {
              backgroundColor: `${o.primaryColor}60`
            }
          },
          children: d ? /* @__PURE__ */ n.jsxDEV(Ee, { size: 24, color: "inherit" }, void 0, !1, {
            fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordForm.tsx",
            lineNumber: 143,
            columnNumber: 8
          }, void 0) : "Send Reset Link"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 119,
          columnNumber: 6
        },
        void 0
      ),
      /* @__PURE__ */ n.jsxDEV(
        U,
        {
          fullWidth: !0,
          variant: "text",
          onClick: E,
          disabled: d,
          sx: {
            textTransform: "none",
            color: o.primaryColor,
            fontWeight: 500,
            "&:hover": {
              backgroundColor: `${o.primaryColor}08`
            }
          },
          children: "Back to Sign In"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordForm.tsx",
          lineNumber: 149,
          columnNumber: 6
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 93,
      columnNumber: 5
    }, void 0) }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 92,
      columnNumber: 4
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordForm.tsx",
    lineNumber: 56,
    columnNumber: 3
  }, void 0);
}, Mo = ({
  brandConfig: o,
  loginState: i,
  onVerify: m,
  onVerifySuccess: x,
  onVerifyError: E,
  onResend: p,
  onBackToSignIn: c
}) => /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: [
  /* @__PURE__ */ n.jsxDEV(S, { sx: { textAlign: "center", mb: 3 }, children: [
    o.logo && /* @__PURE__ */ n.jsxDEV(S, { sx: { mb: 2 }, children: typeof o.logo == "string" ? /* @__PURE__ */ n.jsxDEV(
      "img",
      {
        src: o.logo,
        alt: o.companyName || "Company Logo",
        style: {
          height: o.logoHeight,
          maxWidth: "100%",
          objectFit: "contain"
        }
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/OTPVerification.tsx",
        lineNumber: 32,
        columnNumber: 8
      },
      void 0
    ) : o.logo }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/OTPVerification.tsx",
      lineNumber: 30,
      columnNumber: 6
    }, void 0),
    /* @__PURE__ */ n.jsxDEV(
      A,
      {
        variant: "h5",
        component: "h1",
        sx: {
          color: o.textColor,
          fontWeight: 600,
          fontSize: { xs: "1.5rem", sm: "1.75rem" }
        },
        children: "Verify Your Identity"
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/OTPVerification.tsx",
        lineNumber: 47,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/OTPVerification.tsx",
    lineNumber: 28,
    columnNumber: 4
  }, void 0),
  /* @__PURE__ */ n.jsxDEV(
    Vo,
    {
      onVerify: m,
      onVerifySuccess: x,
      onVerifyError: E,
      onResend: p,
      instructionText: "Please enter the 6-digit code sent to your email",
      showResend: !0,
      resendCooldown: 60,
      expirationTime: 300,
      showExpirationTimer: !0
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/OTPVerification.tsx",
      lineNumber: 60,
      columnNumber: 4
    },
    void 0
  ),
  i === "otp-error" && /* @__PURE__ */ n.jsxDEV(S, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ n.jsxDEV(
    U,
    {
      variant: "text",
      onClick: c,
      sx: {
        textTransform: "none",
        color: o.primaryColor,
        fontWeight: 500,
        "&:hover": {
          backgroundColor: `${o.primaryColor}08`
        }
      },
      children: "Back to Sign In"
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/OTPVerification.tsx",
      lineNumber: 74,
      columnNumber: 6
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/OTPVerification.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, void 0)
] }, void 0, !0, {
  fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/OTPVerification.tsx",
  lineNumber: 26,
  columnNumber: 3
}, void 0), Yo = ({
  brandConfig: o,
  onBackToLogin: i
}) => /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: [
  /* @__PURE__ */ n.jsxDEV(S, { sx: { textAlign: "center", mb: 3 }, children: [
    o.logo && /* @__PURE__ */ n.jsxDEV(S, { sx: { mb: 2 }, children: typeof o.logo == "string" ? /* @__PURE__ */ n.jsxDEV(
      "img",
      {
        src: o.logo,
        alt: o.companyName || "Company Logo",
        style: {
          height: o.logoHeight,
          maxWidth: "100%",
          objectFit: "contain"
        }
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
        lineNumber: 21,
        columnNumber: 8
      },
      void 0
    ) : o.logo }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
      lineNumber: 19,
      columnNumber: 6
    }, void 0),
    /* @__PURE__ */ n.jsxDEV(
      A,
      {
        variant: "h5",
        component: "h1",
        sx: {
          color: o.textColor,
          fontWeight: 600,
          fontSize: { xs: "1.5rem", sm: "1.75rem" },
          mb: 2
        },
        children: o.forgetPasswordSuccessTitle || "Check Your Email"
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
        lineNumber: 36,
        columnNumber: 5
      },
      void 0
    ),
    /* @__PURE__ */ n.jsxDEV(
      A,
      {
        variant: "body1",
        sx: {
          color: o.textColor,
          opacity: 0.8,
          mb: 3,
          lineHeight: 1.6
        },
        children: o.forgetPasswordSuccessDescription || "We have sent you a password reset link. Please check your email and follow the instructions to reset your password."
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
        lineNumber: 50,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
    lineNumber: 17,
    columnNumber: 4
  }, void 0),
  /* @__PURE__ */ n.jsxDEV(S, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ n.jsxDEV(
    U,
    {
      variant: "contained",
      onClick: i,
      sx: {
        py: 1.5,
        px: 4,
        backgroundColor: o.primaryColor,
        borderRadius: 1.4,
        textTransform: "none",
        fontWeight: 600,
        fontSize: "1rem",
        boxShadow: `0 4px 12px ${o.primaryColor}30`,
        "&:hover": {
          backgroundColor: o.secondaryColor,
          boxShadow: `0 6px 16px ${o.primaryColor}40`
        }
      },
      children: "Back to Sign In"
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
      lineNumber: 65,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
    lineNumber: 64,
    columnNumber: 4
  }, void 0)
] }, void 0, !0, {
  fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordSuccess.tsx",
  lineNumber: 15,
  columnNumber: 3
}, void 0), ne = ({
  children: o,
  brandConfig: i
}) => /* @__PURE__ */ n.jsxDEV(
  S,
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
      background: i.backgroundColor,
      display: "flex",
      flexDirection: "column",
      // Prevent horizontal overflow
      overflowX: "hidden",
      boxSizing: "border-box"
    },
    children: /* @__PURE__ */ n.jsxDEV(
      S,
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
        children: o
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LoginContainer.tsx",
        lineNumber: 39,
        columnNumber: 4
      },
      void 0
    )
  },
  void 0,
  !1,
  {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LoginContainer.tsx",
    lineNumber: 15,
    columnNumber: 3
  },
  void 0
), zo = ({
  onGoogleLogin: o,
  onLoginError: i,
  setLoginState: m,
  setError: x,
  googleLoginRef: E
}) => {
  const p = Po({
    onSuccess: (c) => {
      m("google-loading"), x(null);
      try {
        const y = {
          access_token: c.access_token,
          expires_in: c.expires_in,
          scope: c.scope,
          token_type: c.token_type
        };
        o(y), setTimeout(() => {
          m("otp-required");
        }, 1e3);
      } catch (y) {
        const g = y;
        x({ message: g.message, type: "google" }), m("error"), i(g);
      }
    },
    onError: (c) => {
      x({
        message: c.error_description || "Google sign-in failed",
        type: "google"
      }), m("error"), i(
        new Error(c.error_description || "Google sign-in failed")
      );
    }
  });
  return ye.useEffect(() => {
    E.current = p;
  }, [p, E]), null;
}, qe = ({
  onLocalLogin: o,
  onGoogleLogin: i,
  onLoginSuccess: m,
  onLoginError: x,
  onForgetPassword: E,
  enableRecaptcha: p = !1,
  recaptchaSiteKey: c,
  googleClientId: y,
  enableGoogleSignIn: g = !0,
  enableLocalSignIn: d = !0,
  enableForgetPassword: h = !0,
  branding: O
}) => {
  const [w, R] = Ne("idle"), [L, j] = Ne(null), B = ye.useRef(null), N = Lo(O);
  if (!d && !g)
    throw new Error(
      "At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)"
    );
  if (p && !c)
    throw new Error(
      "recaptchaSiteKey is required when enableRecaptcha is true"
    );
  const D = () => window.grecaptcha.execute(c, { action: "login" }).catch(() => {
    throw new Error("reCAPTCHA verification failed");
  }), G = async () => {
    if (!p || !c)
      return "";
    if (typeof window > "u" || !window.grecaptcha)
      throw new Error("reCAPTCHA is not loaded");
    return new Promise((v, V) => {
      const F = () => {
        D().then(v).catch(V);
      };
      window.grecaptcha.ready(F);
    });
  }, te = async (v) => {
    R("loading"), j(null);
    try {
      p && await G(), await o(v.email, v.password), R("otp-required");
    } catch (V) {
      const F = V;
      j({ message: F.message, type: "local" }), R("error"), x(F);
    }
  }, se = () => {
    B.current && B.current();
  }, ae = async (v) => {
    if (await new Promise((V) => setTimeout(V, 1e3)), v === "123456")
      return { success: !0, token: "verified-token" };
    throw new Error("Invalid OTP code");
  }, ie = (v) => {
    R("success"), m(v);
  }, le = (v) => {
    j({ message: v.message, type: "otp" }), R("otp-error");
  }, H = () => {
    console.log("Resending OTP..."), L && L.type === "otp" && j(null);
  }, q = () => {
    j(null), R("idle");
  }, ue = async (v) => {
    if (!E) {
      j({
        message: "Forget password functionality is not available",
        type: "forget-password"
      });
      return;
    }
    R("forget-password-loading"), j(null);
    try {
      p && await G(), await E(v.email), R("forget-password-success");
    } catch (V) {
      const F = V;
      j({ message: F.message, type: "forget-password" }), R("forget-password"), x(F);
    }
  }, J = () => {
    j(null), R("forget-password");
  }, C = () => {
    j(null), R("idle");
  };
  return Do(() => {
    if (p && c && typeof window < "u") {
      const v = document.createElement("script");
      v.src = `https://www.google.com/recaptcha/enterprise.js?render=${c}`, v.async = !0, v.defer = !0, document.head.appendChild(v);
    }
  }, [p, c]), w === "otp-required" || w === "otp-error" ? /* @__PURE__ */ n.jsxDEV(ne, { brandConfig: N, children: /* @__PURE__ */ n.jsxDEV(
    Mo,
    {
      brandConfig: N,
      loginState: w,
      onVerify: ae,
      onVerifySuccess: ie,
      onVerifyError: le,
      onResend: H,
      onBackToSignIn: q
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 297,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 296,
    columnNumber: 4
  }, void 0) : w === "forget-password-success" ? /* @__PURE__ */ n.jsxDEV(ne, { brandConfig: N, children: /* @__PURE__ */ n.jsxDEV(
    Yo,
    {
      brandConfig: N,
      onBackToLogin: C
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 314,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 313,
    columnNumber: 4
  }, void 0) : w === "forget-password" || w === "forget-password-loading" ? /* @__PURE__ */ n.jsxDEV(ne, { brandConfig: N, children: [
    /* @__PURE__ */ n.jsxDEV(He, { brandConfig: N }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 329,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ n.jsxDEV(
      Bo,
      {
        brandConfig: N,
        loginState: w,
        error: L,
        onSubmit: ue,
        onBackToLogin: C,
        onCloseError: () => j(null)
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 330,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 328,
    columnNumber: 4
  }, void 0) : /* @__PURE__ */ n.jsxDEV(ne, { brandConfig: N, children: [
    /* @__PURE__ */ n.jsxDEV(
      He,
      {
        brandConfig: N,
        title: N.companyName ? `Welcome to ${N.companyName}` : "Sign In",
        subtitle: N.tagline
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 345,
        columnNumber: 4
      },
      void 0
    ),
    L && /* @__PURE__ */ n.jsxDEV(
      Je,
      {
        severity: "error",
        sx: { mb: 3 },
        onClose: () => j(null),
        children: L.message
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 356,
        columnNumber: 5
      },
      void 0
    ),
    /* @__PURE__ */ n.jsxDEV(ke, { spacing: 3, children: [
      d && /* @__PURE__ */ n.jsxDEV(
        Wo,
        {
          brandConfig: N,
          loginState: w,
          onSubmit: te,
          onForgetPassword: E ? J : void 0,
          enableForgetPassword: h
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 367,
          columnNumber: 6
        },
        void 0
      ),
      g && y && /* @__PURE__ */ n.jsxDEV(
        Io,
        {
          brandConfig: N,
          loginState: w,
          onClick: se,
          showDivider: d
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 381,
          columnNumber: 6
        },
        void 0
      ),
      w === "error" && /* @__PURE__ */ n.jsxDEV(
        U,
        {
          fullWidth: !0,
          variant: "text",
          onClick: q,
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
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 390,
          columnNumber: 6
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 365,
      columnNumber: 4
    }, void 0),
    g && y && /* @__PURE__ */ n.jsxDEV(
      zo,
      {
        onGoogleLogin: i,
        onLoginError: x,
        setLoginState: R,
        setError: j,
        googleLoginRef: B
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 411,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 344,
    columnNumber: 3
  }, void 0);
}, Qo = (o) => {
  const { googleClientId: i, enableGoogleSignIn: m } = o;
  return m && i ? /* @__PURE__ */ n.jsxDEV(jo, { clientId: i, children: /* @__PURE__ */ n.jsxDEV(qe, { ...o }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 431,
    columnNumber: 5
  }, void 0) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 430,
    columnNumber: 4
  }, void 0) : /* @__PURE__ */ n.jsxDEV(qe, { ...o }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 437,
    columnNumber: 9
  }, void 0);
};
export {
  Qo as LumoraLogin,
  Lo as getBrandingConfig,
  Uo as getDefaultBranding
};
