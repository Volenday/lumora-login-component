import K, { useState as Z, useEffect as he } from "react";
import { Box as b, Typography as _, Stack as ee, TextField as Q, Button as k, CircularProgress as re, Divider as fe, Alert as de } from "@mui/material";
import { GoogleOAuthProvider as ge, useGoogleLogin as ye } from "@react-oauth/google";
import { appendErrors as we, useForm as me } from "react-hook-form";
import { validateFieldsNatively as ve, toNestErrors as je } from "@hookform/resolvers";
import * as $ from "yup";
import { Google as be } from "@mui/icons-material";
import { LumoraOTP as Ee } from "@volenday/lumora-otp-component";
var D = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le;
function Te() {
  if (le) return W;
  le = 1;
  var e = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function a(u, i, n) {
    var l = null;
    if (n !== void 0 && (l = "" + n), i.key !== void 0 && (l = "" + i.key), "key" in i) {
      n = {};
      for (var d in i)
        d !== "key" && (n[d] = i[d]);
    } else n = i;
    return i = n.ref, {
      $$typeof: e,
      type: u,
      key: l,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  return W.Fragment = s, W.jsx = a, W.jsxs = a, W;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae;
function ke() {
  return ae || (ae = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === U ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case P:
          return "Fragment";
        case Y:
          return "Profiler";
        case y:
          return "StrictMode";
        case V:
          return "Suspense";
        case G:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case j:
            return "Portal";
          case q:
            return r.displayName || "Context";
          case F:
            return (r._context.displayName || "Context") + ".Consumer";
          case B:
            var t = r.render;
            return r = r.displayName, r || (r = t.displayName || t.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case H:
            return t = r.displayName || null, t !== null ? t : e(r.type) || "Memo";
          case A:
            t = r._payload, r = r._init;
            try {
              return e(r(t));
            } catch {
            }
        }
      return null;
    }
    function s(r) {
      return "" + r;
    }
    function a(r) {
      try {
        s(r);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var p = t.error, f = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return p.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), s(r);
      }
    }
    function u(r) {
      if (r === P) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === A)
        return "<...>";
      try {
        var t = e(r);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = O.A;
      return r === null ? null : r.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function l(r) {
      if (N.call(r, "key")) {
        var t = Object.getOwnPropertyDescriptor(r, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function d(r, t) {
      function p() {
        T || (T = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      p.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: p,
        configurable: !0
      });
    }
    function m() {
      var r = e(this.type);
      return oe[r] || (oe[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function c(r, t, p, f, z, J) {
      var g = p.ref;
      return r = {
        $$typeof: R,
        type: r,
        key: t,
        props: p,
        _owner: f
      }, (g !== void 0 ? g : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function x(r, t, p, f, z, J) {
      var g = t.children;
      if (g !== void 0)
        if (f)
          if (h(g)) {
            for (f = 0; f < g.length; f++)
              S(g[f]);
            Object.freeze && Object.freeze(g);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(g);
      if (N.call(t, "key")) {
        g = e(r);
        var C = Object.keys(t).filter(function(pe) {
          return pe !== "key";
        });
        f = 0 < C.length ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}", ne[g + f] || (C = 0 < C.length ? "{" + C.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          g,
          C,
          g
        ), ne[g + f] = !0);
      }
      if (g = null, p !== void 0 && (a(p), g = "" + p), l(t) && (a(t.key), g = "" + t.key), "key" in t) {
        p = {};
        for (var X in t)
          X !== "key" && (p[X] = t[X]);
      } else p = t;
      return g && d(
        p,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), c(
        r,
        g,
        p,
        i(),
        z,
        J
      );
    }
    function S(r) {
      v(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === A && (r._payload.status === "fulfilled" ? v(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function v(r) {
      return typeof r == "object" && r !== null && r.$$typeof === R;
    }
    var w = K, R = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), q = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), O = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, h = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var T, oe = {}, te = w.react_stack_bottom_frame.bind(
      w,
      n
    )(), se = E(u(n)), ne = {};
    I.Fragment = P, I.jsx = function(r, t, p) {
      var f = 1e4 > O.recentlyCreatedOwnerStacks++;
      return x(
        r,
        t,
        p,
        !1,
        f ? Error("react-stack-top-frame") : te,
        f ? E(u(r)) : se
      );
    }, I.jsxs = function(r, t, p) {
      var f = 1e4 > O.recentlyCreatedOwnerStacks++;
      return x(
        r,
        t,
        p,
        !0,
        f ? Error("react-stack-top-frame") : te,
        f ? E(u(r)) : se
      );
    };
  })()), I;
}
var ie;
function Re() {
  return ie || (ie = 1, process.env.NODE_ENV === "production" ? D.exports = Te() : D.exports = ke()), D.exports;
}
var o = Re();
const _e = () => ({
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
}), Se = (e) => ({
  ..._e(),
  ...e
}), ce = ({
  brandConfig: e,
  title: s,
  subtitle: a
}) => /* @__PURE__ */ o.jsxs(b, { sx: { textAlign: "center", mb: 4 }, children: [
  e.logo && /* @__PURE__ */ o.jsx(b, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ o.jsx(
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
  s && /* @__PURE__ */ o.jsx(
    _,
    {
      variant: "h4",
      component: "h1",
      sx: {
        mb: 1,
        color: e.textColor,
        fontWeight: 600,
        fontSize: { xs: "1.75rem", sm: "2rem" }
      },
      children: s
    }
  ),
  a && /* @__PURE__ */ o.jsx(
    _,
    {
      variant: "body1",
      sx: {
        color: e.textColor,
        opacity: 0.7,
        fontSize: "0.95rem"
      },
      children: a
    }
  )
] });
function xe(e, s, a) {
  return a === void 0 && (a = {}), function(u, i, n) {
    try {
      return Promise.resolve((function(l, d) {
        try {
          var m = (s != null && s.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(e[a.mode === "sync" ? "validateSync" : "validate"](u, Object.assign({ abortEarly: !1 }, s, { context: i }))).then(function(c) {
            return n.shouldUseNativeValidation && ve({}, n), { values: a.raw ? Object.assign({}, u) : c, errors: {} };
          }));
        } catch (c) {
          return d(c);
        }
        return m && m.then ? m.then(void 0, d) : m;
      })(0, function(l) {
        if (!l.inner) throw l;
        return { values: {}, errors: je((d = l, m = !n.shouldUseNativeValidation && n.criteriaMode === "all", (d.inner || []).reduce(function(c, x) {
          if (c[x.path] || (c[x.path] = { message: x.message, type: x.type }), m) {
            var S = c[x.path].types, v = S && S[x.type];
            c[x.path] = we(x.path, m, c, x.type, v ? [].concat(v, x.message) : x.message);
          }
          return c;
        }, {})), n) };
        var d, m;
      }));
    } catch (l) {
      return Promise.reject(l);
    }
  };
}
const Pe = $.object({
  email: $.string().email("Please enter a valid email address").required("Email is required"),
  password: $.string().min(6, "Password must be at least 6 characters").required("Password is required")
}), Ce = ({
  brandConfig: e,
  loginState: s,
  onSubmit: a,
  onForgetPassword: u,
  enableForgetPassword: i = !0
}) => {
  const [n, l] = Z(!1), {
    register: d,
    handleSubmit: m,
    formState: { errors: c }
  } = me({
    resolver: xe(Pe)
  }), x = s === "loading" || s === "google-loading";
  return /* @__PURE__ */ o.jsx(b, { component: "form", onSubmit: m(a), children: /* @__PURE__ */ o.jsxs(ee, { spacing: 3, children: [
    /* @__PURE__ */ o.jsx(
      Q,
      {
        ...d("email"),
        fullWidth: !0,
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
        error: !!c.email,
        helperText: c.email?.message,
        disabled: x,
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
    /* @__PURE__ */ o.jsx(
      Q,
      {
        ...d("password"),
        fullWidth: !0,
        label: "Password",
        type: n ? "text" : "password",
        placeholder: "Enter your password",
        error: !!c.password,
        helperText: c.password?.message,
        disabled: x,
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
            endAdornment: /* @__PURE__ */ o.jsx(
              k,
              {
                size: "small",
                onClick: () => l(!n),
                disabled: x,
                sx: {
                  color: e.primaryColor,
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: `${e.primaryColor}10`
                  }
                },
                children: n ? "Hide" : "Show"
              }
            )
          }
        }
      }
    ),
    /* @__PURE__ */ o.jsx(
      k,
      {
        type: "submit",
        fullWidth: !0,
        variant: "contained",
        size: "large",
        disabled: x,
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
        children: s === "loading" ? /* @__PURE__ */ o.jsx(re, { size: 24, color: "inherit" }) : "Sign In"
      }
    ),
    i && u && /* @__PURE__ */ o.jsx(b, { textAlign: "right", sx: { mt: 1 }, children: /* @__PURE__ */ o.jsx(
      k,
      {
        variant: "text",
        onClick: u,
        disabled: x,
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
}, Ae = ({
  brandConfig: e,
  loginState: s,
  onClick: a,
  showDivider: u = !1
}) => {
  const i = s === "loading" || s === "google-loading";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    u && /* @__PURE__ */ o.jsx(fe, { sx: { my: 1 }, children: /* @__PURE__ */ o.jsx(
      _,
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
    /* @__PURE__ */ o.jsx(
      k,
      {
        fullWidth: !0,
        variant: "outlined",
        size: "large",
        startIcon: s === "google-loading" ? /* @__PURE__ */ o.jsx(re, { size: 20, color: "inherit" }) : /* @__PURE__ */ o.jsx(be, {}),
        onClick: a,
        disabled: i,
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
        children: s === "google-loading" ? "Signing in..." : "Continue with Google"
      }
    )
  ] });
}, Oe = $.object({
  email: $.string().email("Please enter a valid email address").required("Email is required")
}), Ne = ({
  brandConfig: e,
  loginState: s,
  error: a,
  onSubmit: u,
  onBackToLogin: i,
  onCloseError: n
}) => {
  const {
    register: l,
    handleSubmit: d,
    formState: { errors: m }
  } = me({
    resolver: xe(Oe)
  }), c = s === "forget-password-loading";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    a && /* @__PURE__ */ o.jsx(de, { severity: "error", sx: { mb: 3 }, onClose: n, children: a.message }),
    /* @__PURE__ */ o.jsxs(b, { sx: { textAlign: "center", mb: 3 }, children: [
      /* @__PURE__ */ o.jsx(
        _,
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
      /* @__PURE__ */ o.jsx(
        _,
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
    /* @__PURE__ */ o.jsx(b, { component: "form", onSubmit: d(u), children: /* @__PURE__ */ o.jsxs(ee, { spacing: 3, children: [
      /* @__PURE__ */ o.jsx(
        Q,
        {
          ...l("email"),
          fullWidth: !0,
          label: "Email Address",
          type: "email",
          placeholder: "Enter your email",
          error: !!m.email,
          helperText: m.email?.message,
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
      /* @__PURE__ */ o.jsx(
        k,
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
          children: c ? /* @__PURE__ */ o.jsx(re, { size: 24, color: "inherit" }) : "Send Reset Link"
        }
      ),
      /* @__PURE__ */ o.jsx(
        k,
        {
          fullWidth: !0,
          variant: "text",
          onClick: i,
          disabled: c,
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
}, We = ({
  brandConfig: e,
  loginState: s,
  onVerify: a,
  onVerifySuccess: u,
  onVerifyError: i,
  onResend: n,
  onBackToSignIn: l
}) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
  /* @__PURE__ */ o.jsxs(b, { sx: { textAlign: "center", mb: 3 }, children: [
    e.logo && /* @__PURE__ */ o.jsx(b, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ o.jsx(
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
    /* @__PURE__ */ o.jsx(
      _,
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
  /* @__PURE__ */ o.jsx(
    Ee,
    {
      onVerify: a,
      onVerifySuccess: u,
      onVerifyError: i,
      onResend: n,
      instructionText: "Please enter the 6-digit code sent to your email",
      showResend: !0,
      resendCooldown: 60,
      expirationTime: 300,
      showExpirationTimer: !0
    }
  ),
  s === "otp-error" && /* @__PURE__ */ o.jsx(b, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ o.jsx(
    k,
    {
      variant: "text",
      onClick: l,
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
] }), Ie = ({
  brandConfig: e,
  onBackToLogin: s
}) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
  /* @__PURE__ */ o.jsxs(b, { sx: { textAlign: "center", mb: 3 }, children: [
    e.logo && /* @__PURE__ */ o.jsx(b, { sx: { mb: 2 }, children: typeof e.logo == "string" ? /* @__PURE__ */ o.jsx(
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
    /* @__PURE__ */ o.jsx(
      _,
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
    /* @__PURE__ */ o.jsx(
      _,
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
  /* @__PURE__ */ o.jsx(b, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ o.jsx(
    k,
    {
      variant: "contained",
      onClick: s,
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
] }), M = ({
  children: e,
  brandConfig: s
}) => /* @__PURE__ */ o.jsx(
  b,
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
      background: s.backgroundColor,
      display: "flex",
      flexDirection: "column",
      // Prevent horizontal overflow
      overflowX: "hidden",
      boxSizing: "border-box"
    },
    children: /* @__PURE__ */ o.jsx(
      b,
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
), $e = ({
  onGoogleLogin: e,
  onLoginError: s,
  setLoginState: a,
  setError: u,
  googleLoginRef: i
}) => {
  const n = ye({
    onSuccess: (l) => {
      a("google-loading"), u(null);
      try {
        const d = {
          access_token: l.access_token,
          expires_in: l.expires_in,
          scope: l.scope,
          token_type: l.token_type
        };
        e(d), setTimeout(() => {
          a("otp-required");
        }, 1e3);
      } catch (d) {
        const m = d;
        u({ message: m.message, type: "google" }), a("error"), s(m);
      }
    },
    onError: (l) => {
      u({
        message: l.error_description || "Google sign-in failed",
        type: "google"
      }), a("error"), s(
        new Error(l.error_description || "Google sign-in failed")
      );
    }
  });
  return K.useEffect(() => {
    i.current = n;
  }, [n, i]), null;
}, ue = ({
  onLocalLogin: e,
  onGoogleLogin: s,
  onLoginSuccess: a,
  onLoginError: u,
  onForgetPassword: i,
  enableRecaptcha: n = !1,
  recaptchaSiteKey: l,
  googleClientId: d,
  enableGoogleSignIn: m = !0,
  enableLocalSignIn: c = !0,
  enableForgetPassword: x = !0,
  branding: S
}) => {
  const [v, w] = Z("idle"), [R, j] = Z(null), P = K.useRef(null), y = Se(S);
  if (!c && !m)
    throw new Error(
      "At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)"
    );
  if (n && !l)
    throw new Error(
      "recaptchaSiteKey is required when enableRecaptcha is true"
    );
  const Y = () => window.grecaptcha.execute(l, { action: "login" }).catch(() => {
    throw new Error("reCAPTCHA verification failed");
  }), F = async () => {
    if (!n || !l)
      return "";
    if (typeof window > "u" || !window.grecaptcha)
      throw new Error("reCAPTCHA is not loaded");
    return new Promise((h, E) => {
      const T = () => {
        Y().then(h).catch(E);
      };
      window.grecaptcha.ready(T);
    });
  }, q = async (h) => {
    w("loading"), j(null);
    try {
      n && await F(), await e(h.email, h.password), w("otp-required");
    } catch (E) {
      const T = E;
      j({ message: T.message, type: "local" }), w("error"), u(T);
    }
  }, B = () => {
    P.current && P.current();
  }, V = async (h) => {
    if (await new Promise((E) => setTimeout(E, 1e3)), h === "123456")
      return { success: !0, token: "verified-token" };
    throw new Error("Invalid OTP code");
  }, G = (h) => {
    w("success"), a(h);
  }, H = (h) => {
    j({ message: h.message, type: "otp" }), w("otp-error");
  }, A = () => {
    console.log("Resending OTP..."), R && R.type === "otp" && j(null);
  }, L = () => {
    j(null), w("idle");
  }, U = async (h) => {
    if (!i) {
      j({
        message: "Forget password functionality is not available",
        type: "forget-password"
      });
      return;
    }
    w("forget-password-loading"), j(null);
    try {
      n && await F(), await i(h.email), w("forget-password-success");
    } catch (E) {
      const T = E;
      j({ message: T.message, type: "forget-password" }), w("forget-password"), u(T);
    }
  }, O = () => {
    j(null), w("forget-password");
  }, N = () => {
    j(null), w("idle");
  };
  return he(() => {
    if (n && l && typeof window < "u") {
      const h = document.createElement("script");
      h.src = `https://www.google.com/recaptcha/enterprise.js?render=${l}`, h.async = !0, h.defer = !0, document.head.appendChild(h);
    }
  }, [n, l]), v === "otp-required" || v === "otp-error" ? /* @__PURE__ */ o.jsx(M, { brandConfig: y, children: /* @__PURE__ */ o.jsx(
    We,
    {
      brandConfig: y,
      loginState: v,
      onVerify: V,
      onVerifySuccess: G,
      onVerifyError: H,
      onResend: A,
      onBackToSignIn: L
    }
  ) }) : v === "forget-password-success" ? /* @__PURE__ */ o.jsx(M, { brandConfig: y, children: /* @__PURE__ */ o.jsx(
    Ie,
    {
      brandConfig: y,
      onBackToLogin: N
    }
  ) }) : v === "forget-password" || v === "forget-password-loading" ? /* @__PURE__ */ o.jsxs(M, { brandConfig: y, children: [
    /* @__PURE__ */ o.jsx(ce, { brandConfig: y }),
    /* @__PURE__ */ o.jsx(
      Ne,
      {
        brandConfig: y,
        loginState: v,
        error: R,
        onSubmit: U,
        onBackToLogin: N,
        onCloseError: () => j(null)
      }
    )
  ] }) : /* @__PURE__ */ o.jsxs(M, { brandConfig: y, children: [
    /* @__PURE__ */ o.jsx(
      ce,
      {
        brandConfig: y,
        title: y.companyName ? `Welcome to ${y.companyName}` : "Sign In",
        subtitle: y.tagline
      }
    ),
    R && /* @__PURE__ */ o.jsx(
      de,
      {
        severity: "error",
        sx: { mb: 3 },
        onClose: () => j(null),
        children: R.message
      }
    ),
    /* @__PURE__ */ o.jsxs(ee, { spacing: 3, children: [
      c && /* @__PURE__ */ o.jsx(
        Ce,
        {
          brandConfig: y,
          loginState: v,
          onSubmit: q,
          onForgetPassword: i ? O : void 0,
          enableForgetPassword: x
        }
      ),
      m && d && /* @__PURE__ */ o.jsx(
        Ae,
        {
          brandConfig: y,
          loginState: v,
          onClick: B,
          showDivider: c
        }
      ),
      v === "error" && /* @__PURE__ */ o.jsx(
        k,
        {
          fullWidth: !0,
          variant: "text",
          onClick: L,
          sx: {
            mt: 1,
            color: y.primaryColor,
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: `${y.primaryColor}08`
            }
          },
          children: "Try Again"
        }
      )
    ] }),
    m && d && /* @__PURE__ */ o.jsx(
      $e,
      {
        onGoogleLogin: s,
        onLoginError: u,
        setLoginState: w,
        setError: j,
        googleLoginRef: P
      }
    )
  ] });
}, Be = (e) => {
  const { googleClientId: s, enableGoogleSignIn: a } = e;
  return a && s ? /* @__PURE__ */ o.jsx(ge, { clientId: s, children: /* @__PURE__ */ o.jsx(ue, { ...e }) }) : /* @__PURE__ */ o.jsx(ue, { ...e });
};
export {
  Be as LumoraLogin,
  Se as getBrandingConfig,
  _e as getDefaultBranding
};
