import ce, { useState as _, useEffect as de } from "react";
import { appendErrors as fe, useForm as ge } from "react-hook-form";
import { validateFieldsNatively as pe, toNestErrors as ve } from "@hookform/resolvers";
import * as J from "yup";
import { Container as Q, Card as te, CardContent as ae, Typography as w, Alert as Ne, Box as A, Stack as be, TextField as B, Button as R, CircularProgress as se, Link as ee, Divider as xe } from "@mui/material";
import { Google as he } from "@mui/icons-material";
var O = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oe;
function Ee() {
  if (oe) return V;
  oe = 1;
  var d = Symbol.for("react.fragment");
  return V.Fragment = d, V.jsxDEV = void 0, V;
}
var U = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne;
function ke() {
  return ne || (ne = 1, process.env.NODE_ENV !== "production" && (function() {
    function d(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === u ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case D:
          return "Fragment";
        case W:
          return "Profiler";
        case S:
          return "StrictMode";
        case I:
          return "Suspense";
        case q:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case C:
            return "Portal";
          case F:
            return e.displayName || "Context";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var o = e.render;
            return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case $:
            return o = e.displayName || null, o !== null ? o : d(e.type) || "Memo";
          case j:
            o = e._payload, e = e._init;
            try {
              return d(e(o));
            } catch {
            }
        }
      return null;
    }
    function N(e) {
      return "" + e;
    }
    function p(e) {
      try {
        N(e);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var a = o.error, m = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          m
        ), N(e);
      }
    }
    function g(e) {
      if (e === D) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === j)
        return "<...>";
      try {
        var o = d(e);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function E() {
      var e = b.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (T.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, o) {
      function a() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function i() {
      var e = d(this.type);
      return H[e] || (H[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function t(e, o, a, m, k, M) {
      var s = a.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: o,
        props: a,
        _owner: m
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: i
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: M
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function r(e, o, a, m, k, M) {
      var s = o.children;
      if (s !== void 0)
        if (m)
          if (ie(s)) {
            for (m = 0; m < s.length; m++)
              x(s[m]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(s);
      if (T.call(o, "key")) {
        s = d(e);
        var y = Object.keys(o).filter(function(me) {
          return me !== "key";
        });
        m = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", Z[s + m] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          m,
          s,
          y,
          s
        ), Z[s + m] = !0);
      }
      if (s = null, a !== void 0 && (p(a), s = "" + a), f(o) && (p(o.key), s = "" + o.key), "key" in o) {
        a = {};
        for (var G in o)
          G !== "key" && (a[G] = o[G]);
      } else a = o;
      return s && v(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), t(
        e,
        s,
        a,
        E(),
        k,
        M
      );
    }
    function x(e) {
      c(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === j && (e._payload.status === "fulfilled" ? c(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function c(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var h = ce, P = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), F = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), u = Symbol.for("react.client.reference"), b = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = Object.prototype.hasOwnProperty, ie = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var K, H = {}, le = h.react_stack_bottom_frame.bind(
      h,
      l
    )(), ue = X(g(l)), Z = {};
    U.Fragment = D, U.jsxDEV = function(e, o, a, m) {
      var k = 1e4 > b.recentlyCreatedOwnerStacks++;
      return r(
        e,
        o,
        a,
        m,
        k ? Error("react-stack-top-frame") : le,
        k ? X(g(e)) : ue
      );
    };
  })()), U;
}
var re;
function De() {
  return re || (re = 1, process.env.NODE_ENV === "production" ? O.exports = Ee() : O.exports = ke()), O.exports;
}
var n = De();
function Le(d, N, p) {
  return p === void 0 && (p = {}), function(g, E, l) {
    try {
      return Promise.resolve((function(f, v) {
        try {
          var i = (N != null && N.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(d[p.mode === "sync" ? "validateSync" : "validate"](g, Object.assign({ abortEarly: !1 }, N, { context: E }))).then(function(t) {
            return l.shouldUseNativeValidation && pe({}, l), { values: p.raw ? Object.assign({}, g) : t, errors: {} };
          }));
        } catch (t) {
          return v(t);
        }
        return i && i.then ? i.then(void 0, v) : i;
      })(0, function(f) {
        if (!f.inner) throw f;
        return { values: {}, errors: ve((v = f, i = !l.shouldUseNativeValidation && l.criteriaMode === "all", (v.inner || []).reduce(function(t, r) {
          if (t[r.path] || (t[r.path] = { message: r.message, type: r.type }), i) {
            var x = t[r.path].types, c = x && x[r.type];
            t[r.path] = fe(r.path, i, t, r.type, c ? [].concat(c, r.message) : r.message);
          }
          return t;
        }, {})), l) };
        var v, i;
      }));
    } catch (f) {
      return Promise.reject(f);
    }
  };
}
const ye = ({ onSuccess: d, onError: N, onRetry: p }) => {
  const [g, E] = _(""), [l, f] = _(!1), v = async (i) => {
    i.preventDefault(), f(!0), setTimeout(() => {
      g === "123456" ? d({ token: "mock-token", user: { id: 1, email: "user@example.com" } }) : N(new Error("Invalid OTP")), f(!1);
    }, 1e3);
  };
  return /* @__PURE__ */ n.jsxDEV(te, { sx: { maxWidth: 400, mx: "auto", mt: 4 }, children: /* @__PURE__ */ n.jsxDEV(ae, { children: [
    /* @__PURE__ */ n.jsxDEV(w, { variant: "h5", component: "h1", gutterBottom: !0, align: "center", children: "Two-Factor Authentication" }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ n.jsxDEV(w, { variant: "body2", color: "text.secondary", align: "center", sx: { mb: 3 }, children: "Please enter the 6-digit code sent to your device" }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ n.jsxDEV(A, { component: "form", onSubmit: v, children: [
      /* @__PURE__ */ n.jsxDEV(
        B,
        {
          fullWidth: !0,
          label: "Enter OTP",
          value: g,
          onChange: (i) => E(i.target.value),
          placeholder: "123456",
          sx: { mb: 3 },
          disabled: l
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 53,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ n.jsxDEV(
        R,
        {
          type: "submit",
          fullWidth: !0,
          variant: "contained",
          disabled: l || g.length !== 6,
          sx: { mb: 2 },
          children: l ? /* @__PURE__ */ n.jsxDEV(se, { size: 24 }, void 0, !1, {
            fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
            lineNumber: 69,
            columnNumber: 26
          }, void 0) : "Verify OTP"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 62,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ n.jsxDEV(
        R,
        {
          fullWidth: !0,
          variant: "outlined",
          onClick: p,
          disabled: l,
          children: "Resend Code"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 71,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, void 0);
}, _e = J.object({
  email: J.string().email("Please enter a valid email address").required("Email is required"),
  password: J.string().min(6, "Password must be at least 6 characters").required("Password is required")
}), Se = ({
  onLocalLogin: d,
  onGoogleLogin: N,
  onLoginSuccess: p,
  onLoginError: g,
  showForgotPassword: E = !0,
  forgotPasswordLink: l = "#",
  showRegisterLink: f = !1,
  registerLink: v = "#",
  googleClientId: i
}) => {
  const [t, r] = _("idle"), [x, c] = _(null), [h, P] = _(!1), [C, D] = _(null), {
    register: S,
    handleSubmit: W,
    formState: { errors: L },
    reset: F
  } = ge({
    resolver: Le(_e)
  }), Y = async (u) => {
    r("loading"), c(null);
    try {
      const b = await d(u.email, u.password);
      D(b), r("otp-required");
    } catch (b) {
      const T = b;
      c({ message: T.message, type: "local" }), r("error"), g(T);
    }
  }, I = () => {
    r("loading"), c(null);
    try {
      N(), setTimeout(() => {
        D({ token: "google-token", user: { id: 2, email: "google@example.com" } }), r("otp-required");
      }, 1e3);
    } catch (u) {
      const b = u;
      c({ message: b.message, type: "google" }), r("error"), g(b);
    }
  }, q = (u) => {
    r("success"), p(u);
  }, $ = (u) => {
    c({ message: u.message, type: "otp" }), r("error");
  }, j = () => {
    c(null), r("idle");
  }, z = () => {
    c(null), r("idle"), F();
  };
  return de(() => {
    if (i && typeof window < "u") {
      const u = document.createElement("script");
      u.src = "https://accounts.google.com/gsi/client", u.async = !0, u.defer = !0, document.head.appendChild(u);
    }
  }, [i]), t === "otp-required" ? /* @__PURE__ */ n.jsxDEV(Q, { maxWidth: "sm", children: /* @__PURE__ */ n.jsxDEV(
    ye,
    {
      onSuccess: q,
      onError: $,
      onRetry: j,
      data: C
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 194,
      columnNumber: 9
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 193,
    columnNumber: 7
  }, void 0) : /* @__PURE__ */ n.jsxDEV(Q, { maxWidth: "sm", children: /* @__PURE__ */ n.jsxDEV(te, { sx: { mt: 4, boxShadow: 3 }, children: /* @__PURE__ */ n.jsxDEV(ae, { sx: { p: { xs: 2, sm: 3 } }, children: [
    /* @__PURE__ */ n.jsxDEV(w, { variant: "h4", component: "h1", gutterBottom: !0, align: "center", sx: { mb: 3 }, children: "Sign In" }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 208,
      columnNumber: 11
    }, void 0),
    x && /* @__PURE__ */ n.jsxDEV(
      Ne,
      {
        severity: "error",
        sx: { mb: 3 },
        onClose: () => c(null),
        children: x.message
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 213,
        columnNumber: 13
      },
      void 0
    ),
    /* @__PURE__ */ n.jsxDEV(A, { component: "form", onSubmit: W(Y), children: /* @__PURE__ */ n.jsxDEV(be, { spacing: 3, children: [
      /* @__PURE__ */ n.jsxDEV(
        B,
        {
          ...S("email"),
          fullWidth: !0,
          label: "Email Address",
          type: "email",
          placeholder: "Enter your email",
          error: !!L.email,
          helperText: L.email?.message,
          disabled: t === "loading"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 224,
          columnNumber: 15
        },
        void 0
      ),
      /* @__PURE__ */ n.jsxDEV(
        B,
        {
          ...S("password"),
          fullWidth: !0,
          label: "Password",
          type: h ? "text" : "password",
          placeholder: "Enter your password",
          error: !!L.password,
          helperText: L.password?.message,
          disabled: t === "loading",
          InputProps: {
            endAdornment: /* @__PURE__ */ n.jsxDEV(
              R,
              {
                size: "small",
                onClick: () => P(!h),
                disabled: t === "loading",
                children: h ? "Hide" : "Show"
              },
              void 0,
              !1,
              {
                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                lineNumber: 246,
                columnNumber: 21
              },
              void 0
            )
          }
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 235,
          columnNumber: 15
        },
        void 0
      ),
      /* @__PURE__ */ n.jsxDEV(
        R,
        {
          type: "submit",
          fullWidth: !0,
          variant: "contained",
          size: "large",
          disabled: t === "loading",
          sx: { py: 1.5 },
          children: t === "loading" ? /* @__PURE__ */ n.jsxDEV(se, { size: 24, color: "inherit" }, void 0, !1, {
            fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
            lineNumber: 266,
            columnNumber: 19
          }, void 0) : "Sign In"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 257,
          columnNumber: 15
        },
        void 0
      ),
      E && /* @__PURE__ */ n.jsxDEV(A, { textAlign: "center", children: /* @__PURE__ */ n.jsxDEV(ee, { href: l, variant: "body2", children: "Forgot Password?" }, void 0, !1, {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 274,
        columnNumber: 19
      }, void 0) }, void 0, !1, {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 273,
        columnNumber: 17
      }, void 0),
      i && /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: [
        /* @__PURE__ */ n.jsxDEV(xe, { children: /* @__PURE__ */ n.jsxDEV(w, { variant: "body2", color: "text.secondary", children: "OR" }, void 0, !1, {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 283,
          columnNumber: 21
        }, void 0) }, void 0, !1, {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 282,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ n.jsxDEV(
          R,
          {
            fullWidth: !0,
            variant: "outlined",
            size: "large",
            startIcon: /* @__PURE__ */ n.jsxDEV(he, {}, void 0, !1, {
              fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
              lineNumber: 292,
              columnNumber: 32
            }, void 0),
            onClick: I,
            disabled: t === "loading",
            sx: { py: 1.5 },
            children: "Continue with Google"
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
            lineNumber: 288,
            columnNumber: 19
          },
          void 0
        )
      ] }, void 0, !0, {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 281,
        columnNumber: 17
      }, void 0),
      f && /* @__PURE__ */ n.jsxDEV(A, { textAlign: "center", children: /* @__PURE__ */ n.jsxDEV(w, { variant: "body2", color: "text.secondary", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ n.jsxDEV(ee, { href: v, variant: "body2", children: "Register here" }, void 0, !1, {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 306,
          columnNumber: 21
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 304,
        columnNumber: 19
      }, void 0) }, void 0, !1, {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 303,
        columnNumber: 17
      }, void 0),
      t === "error" && /* @__PURE__ */ n.jsxDEV(
        R,
        {
          fullWidth: !0,
          variant: "text",
          onClick: z,
          sx: { mt: 1 },
          children: "Try Again"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 314,
          columnNumber: 17
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 223,
      columnNumber: 13
    }, void 0) }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 222,
      columnNumber: 11
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 207,
    columnNumber: 9
  }, void 0) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 206,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 205,
    columnNumber: 5
  }, void 0);
};
export {
  Se as LumoraLogin
};
