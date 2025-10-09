import ue, { createContext as So, useMemo as Po, useState as le, useRef as q, useEffect as Ee, useCallback as ze, useContext as To } from "react";
import { Box as C, Typography as $, Stack as De, TextField as ke, Button as I, CircularProgress as we, Divider as Co, Alert as Ze } from "@mui/material";
import { appendErrors as _o, useForm as Qe } from "react-hook-form";
import { validateFieldsNatively as Vo, toNestErrors as Fo } from "@hookform/resolvers";
import * as X from "yup";
import { Google as Lo } from "@mui/icons-material";
import { LumoraOTP as Oo } from "@volenday/lumora-otp-component";
var te = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Uo() {
  if (qe) return ie;
  qe = 1;
  var o = Symbol.for("react.fragment");
  return ie.Fragment = o, ie.jsxDEV = void 0, ie;
}
var se = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Ao() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && (function() {
    var o = ue, s = Symbol.for("react.element"), d = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), b = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), U = Symbol.iterator, j = "@@iterator";
    function S(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[j];
      return typeof r == "function" ? r : null;
    }
    var g = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        G("error", e, t);
      }
    }
    function G(e, r, t) {
      {
        var i = g.ReactDebugCurrentFrame, v = i.getStackAddendum();
        v !== "" && (r += "%s", t = t.concat([v]));
        var h = t.map(function(f) {
          return String(f);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var W = !1, O = !1, B = !1, ce = !1, de = !1, K;
    K = Symbol.for("react.module.reference");
    function Z(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === m || de || e === N || e === l || e === x || ce || e === R || W || O || B || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === _ || e.$$typeof === a || e.$$typeof === b || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === K || e.getModuleId !== void 0));
    }
    function me(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var v = r.displayName || r.name || "";
      return v !== "" ? t + "(" + v + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function V(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case d:
          return "Portal";
        case m:
          return "Profiler";
        case N:
          return "StrictMode";
        case l:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return Q(r) + ".Consumer";
          case a:
            var t = e;
            return Q(t._context) + ".Provider";
          case u:
            return me(e, e.render, "ForwardRef");
          case _:
            var i = e.displayName || null;
            return i !== null ? i : V(e.type) || "Memo";
          case k: {
            var v = e, h = v._payload, f = v._init;
            try {
              return V(f(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var y = Object.assign, F = 0, A, Re, je, Se, Pe, Te, Ce;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function ro() {
      {
        if (F === 0) {
          A = console.log, Re = console.info, je = console.warn, Se = console.error, Pe = console.group, Te = console.groupCollapsed, Ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
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
        F++;
      }
    }
    function no() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: y({}, e, {
              value: A
            }),
            info: y({}, e, {
              value: Re
            }),
            warn: y({}, e, {
              value: je
            }),
            error: y({}, e, {
              value: Se
            }),
            group: y({}, e, {
              value: Pe
            }),
            groupCollapsed: y({}, e, {
              value: Te
            }),
            groupEnd: y({}, e, {
              value: Ce
            })
          });
        }
        F < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = g.ReactCurrentDispatcher, pe;
    function ee(e, r, t) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (v) {
            var i = v.stack.trim().match(/\n( *(at )?)/);
            pe = i && i[1] || "";
          }
        return `
` + pe + e;
      }
    }
    var ge = !1, oe;
    {
      var to = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new to();
    }
    function Ve(e, r) {
      if (!e || ge)
        return "";
      {
        var t = oe.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      ge = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = fe.current, fe.current = null, ro();
      try {
        if (r) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (T) {
              i = T;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (T) {
              i = T;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            i = T;
          }
          e();
        }
      } catch (T) {
        if (T && i && typeof T.stack == "string") {
          for (var c = T.stack.split(`
`), P = i.stack.split(`
`), E = c.length - 1, w = P.length - 1; E >= 1 && w >= 0 && c[E] !== P[w]; )
            w--;
          for (; E >= 1 && w >= 0; E--, w--)
            if (c[E] !== P[w]) {
              if (E !== 1 || w !== 1)
                do
                  if (E--, w--, w < 0 || c[E] !== P[w]) {
                    var L = `
` + c[E].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && oe.set(e, L), L;
                  }
                while (E >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        ge = !1, fe.current = h, no(), Error.prepareStackTrace = v;
      }
      var z = e ? e.displayName || e.name : "", M = z ? ee(z) : "";
      return typeof e == "function" && oe.set(e, M), M;
    }
    function io(e, r, t) {
      return Ve(e, !1);
    }
    function so(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function re(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ve(e, so(e));
      if (typeof e == "string")
        return ee(e);
      switch (e) {
        case l:
          return ee("Suspense");
        case x:
          return ee("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return io(e.render);
          case _:
            return re(e.type, r, t);
          case k: {
            var i = e, v = i._payload, h = i._init;
            try {
              return re(h(v), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, Fe = {}, Le = g.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var r = e._owner, t = re(e.type, e._source, r ? r.type : null);
        Le.setExtraStackFrame(t);
      } else
        Le.setExtraStackFrame(null);
    }
    function ao(e, r, t, i, v) {
      {
        var h = Function.call.bind(H);
        for (var f in e)
          if (h(e, f)) {
            var c = void 0;
            try {
              if (typeof e[f] != "function") {
                var P = Error((i || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              c = e[f](r, f, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              c = E;
            }
            c && !(c instanceof Error) && (ne(v), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, f, typeof c), ne(null)), c instanceof Error && !(c.message in Fe) && (Fe[c.message] = !0, ne(v), D("Failed %s type: %s", t, c.message), ne(null));
          }
      }
    }
    var lo = Array.isArray;
    function ve(e) {
      return lo(e);
    }
    function uo(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function co(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Ue(e) {
      if (co(e))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", uo(e)), Oe(e);
    }
    var J = g.ReactCurrentOwner, mo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, We, xe;
    xe = {};
    function fo(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function po(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function go(e, r) {
      if (typeof e.ref == "string" && J.current && r && J.current.stateNode !== r) {
        var t = V(J.current.type);
        xe[t] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(J.current.type), e.ref), xe[t] = !0);
      }
    }
    function vo(e, r) {
      {
        var t = function() {
          Ae || (Ae = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function xo(e, r) {
      {
        var t = function() {
          We || (We = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ho = function(e, r, t, i, v, h, f) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: f,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function No(e, r, t, i, v) {
      {
        var h, f = {}, c = null, P = null;
        t !== void 0 && (Ue(t), c = "" + t), po(r) && (Ue(r.key), c = "" + r.key), fo(r) && (P = r.ref, go(r, v));
        for (h in r)
          H.call(r, h) && !mo.hasOwnProperty(h) && (f[h] = r[h]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (h in E)
            f[h] === void 0 && (f[h] = E[h]);
        }
        if (c || P) {
          var w = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && vo(f, w), P && xo(f, w);
        }
        return ho(e, c, P, v, i, J.current, f);
      }
    }
    var he = g.ReactCurrentOwner, Ie = g.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = re(e.type, e._source, r ? r.type : null);
        Ie.setExtraStackFrame(t);
      } else
        Ie.setExtraStackFrame(null);
    }
    var Ne;
    Ne = !1;
    function be(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function $e() {
      {
        if (he.current) {
          var e = V(he.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function bo(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Be = {};
    function yo(e) {
      {
        var r = $e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Me(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = yo(r);
        if (Be[t])
          return;
        Be[t] = !0;
        var i = "";
        e && e._owner && e._owner !== he.current && (i = " It was passed a child from " + V(e._owner.type) + "."), Y(e), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), Y(null);
      }
    }
    function Ge(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ve(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            be(i) && Me(i, r);
          }
        else if (be(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = S(e);
          if (typeof v == "function" && v !== e.entries)
            for (var h = v.call(e), f; !(f = h.next()).done; )
              be(f.value) && Me(f.value, r);
        }
      }
    }
    function ko(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = V(r);
          ao(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !Ne) {
          Ne = !0;
          var v = V(r);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Eo(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            Y(e), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), D("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var Ye = {};
    function Do(e, r, t, i, v, h) {
      {
        var f = Z(e);
        if (!f) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = bo(v);
          P ? c += P : c += $e();
          var E;
          e === null ? E = "null" : ve(e) ? E = "array" : e !== void 0 && e.$$typeof === s ? (E = "<" + (V(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, c);
        }
        var w = No(e, r, t, v, h);
        if (w == null)
          return w;
        if (f) {
          var L = r.children;
          if (L !== void 0)
            if (i)
              if (ve(L)) {
                for (var z = 0; z < L.length; z++)
                  Ge(L[z], e);
                Object.freeze && Object.freeze(L);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(L, e);
        }
        if (H.call(r, "key")) {
          var M = V(e), T = Object.keys(r).filter(function(jo) {
            return jo !== "key";
          }), ye = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[M + ye]) {
            var Ro = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ye, M, Ro, M), Ye[M + ye] = !0;
          }
        }
        return e === p ? Eo(w) : ko(w), w;
      }
    }
    var wo = Do;
    se.Fragment = p, se.jsxDEV = wo;
  })()), se;
}
var Je;
function Wo() {
  return Je || (Je = 1, process.env.NODE_ENV === "production" ? te.exports = Uo() : te.exports = Ao()), te.exports;
}
var n = Wo();
function Io(o = {}) {
  const { nonce: s, onScriptLoadSuccess: d, onScriptLoadError: p } = o, [N, m] = le(!1), a = q(d);
  a.current = d;
  const b = q(p);
  return b.current = p, Ee(() => {
    const u = document.createElement("script");
    return u.src = "https://accounts.google.com/gsi/client", u.async = !0, u.defer = !0, u.nonce = s, u.onload = () => {
      var l;
      m(!0), (l = a.current) === null || l === void 0 || l.call(a);
    }, u.onerror = () => {
      var l;
      m(!1), (l = b.current) === null || l === void 0 || l.call(b);
    }, document.body.appendChild(u), () => {
      document.body.removeChild(u);
    };
  }, [s]), N;
}
const eo = So(null);
function $o({ clientId: o, nonce: s, onScriptLoadSuccess: d, onScriptLoadError: p, children: N }) {
  const m = Io({
    nonce: s,
    onScriptLoadSuccess: d,
    onScriptLoadError: p
  }), a = Po(() => ({
    clientId: o,
    scriptLoadedSuccessfully: m
  }), [o, m]);
  return ue.createElement(eo.Provider, { value: a }, N);
}
function Bo() {
  const o = To(eo);
  if (!o)
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  return o;
}
function Mo({ flow: o = "implicit", scope: s = "", onSuccess: d, onError: p, onNonOAuthError: N, overrideScope: m, state: a, ...b }) {
  const { clientId: u, scriptLoadedSuccessfully: l } = Bo(), x = q(), _ = q(d);
  _.current = d;
  const k = q(p);
  k.current = p;
  const R = q(N);
  R.current = N, Ee(() => {
    var S, g;
    if (!l)
      return;
    const D = o === "implicit" ? "initTokenClient" : "initCodeClient", G = (g = (S = window?.google) === null || S === void 0 ? void 0 : S.accounts) === null || g === void 0 ? void 0 : g.oauth2[D]({
      client_id: u,
      scope: m ? s : `openid profile email ${s}`,
      callback: (W) => {
        var O, B;
        if (W.error)
          return (O = k.current) === null || O === void 0 ? void 0 : O.call(k, W);
        (B = _.current) === null || B === void 0 || B.call(_, W);
      },
      error_callback: (W) => {
        var O;
        (O = R.current) === null || O === void 0 || O.call(R, W);
      },
      state: a,
      ...b
    });
    x.current = G;
  }, [u, l, o, s, a]);
  const U = ze((S) => {
    var g;
    return (g = x.current) === null || g === void 0 ? void 0 : g.requestAccessToken(S);
  }, []), j = ze(() => {
    var S;
    return (S = x.current) === null || S === void 0 ? void 0 : S.requestCode();
  }, []);
  return o === "implicit" ? U : j;
}
const Xe = ({
  brandConfig: o,
  title: s,
  subtitle: d
}) => /* @__PURE__ */ n.jsxDEV(C, { sx: { textAlign: "center", mb: 4 }, children: [
  o.logo && /* @__PURE__ */ n.jsxDEV(C, { sx: { mb: 2 }, children: typeof o.logo == "string" ? /* @__PURE__ */ n.jsxDEV(
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
  s && /* @__PURE__ */ n.jsxDEV(
    $,
    {
      variant: "h4",
      component: "h1",
      sx: {
        mb: 1,
        color: o.textColor,
        fontWeight: 600,
        fontSize: { xs: "1.75rem", sm: "2rem" }
      },
      children: s
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
  d && /* @__PURE__ */ n.jsxDEV(
    $,
    {
      variant: "body1",
      sx: {
        color: o.textColor,
        opacity: 0.7,
        fontSize: "0.95rem"
      },
      children: d
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
function oo(o, s, d) {
  return d === void 0 && (d = {}), function(p, N, m) {
    try {
      return Promise.resolve((function(a, b) {
        try {
          var u = (s != null && s.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(o[d.mode === "sync" ? "validateSync" : "validate"](p, Object.assign({ abortEarly: !1 }, s, { context: N }))).then(function(l) {
            return m.shouldUseNativeValidation && Vo({}, m), { values: d.raw ? Object.assign({}, p) : l, errors: {} };
          }));
        } catch (l) {
          return b(l);
        }
        return u && u.then ? u.then(void 0, b) : u;
      })(0, function(a) {
        if (!a.inner) throw a;
        return { values: {}, errors: Fo((b = a, u = !m.shouldUseNativeValidation && m.criteriaMode === "all", (b.inner || []).reduce(function(l, x) {
          if (l[x.path] || (l[x.path] = { message: x.message, type: x.type }), u) {
            var _ = l[x.path].types, k = _ && _[x.type];
            l[x.path] = _o(x.path, u, l, x.type, k ? [].concat(k, x.message) : x.message);
          }
          return l;
        }, {})), m) };
        var b, u;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
}
const Go = X.object({
  email: X.string().email("Please enter a valid email address").required("Email is required"),
  password: X.string().min(6, "Password must be at least 6 characters").required("Password is required")
}), Yo = ({
  brandConfig: o,
  loginState: s,
  onSubmit: d,
  onForgetPassword: p,
  enableForgetPassword: N = !0
}) => {
  const [m, a] = le(!1), {
    register: b,
    handleSubmit: u,
    formState: { errors: l }
  } = Qe({
    resolver: oo(Go)
  }), x = s === "loading" || s === "google-loading";
  return /* @__PURE__ */ n.jsxDEV(C, { component: "form", onSubmit: u(d), children: /* @__PURE__ */ n.jsxDEV(De, { spacing: 3, children: [
    /* @__PURE__ */ n.jsxDEV(
      ke,
      {
        ...b("email"),
        fullWidth: !0,
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
        error: !!l.email,
        helperText: l.email?.message,
        disabled: x,
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
      ke,
      {
        ...b("password"),
        fullWidth: !0,
        label: "Password",
        type: m ? "text" : "password",
        placeholder: "Enter your password",
        error: !!l.password,
        helperText: l.password?.message,
        disabled: x,
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
              I,
              {
                size: "small",
                onClick: () => a(!m),
                disabled: x,
                sx: {
                  color: o.primaryColor,
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: `${o.primaryColor}10`
                  }
                },
                children: m ? "Hide" : "Show"
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
      I,
      {
        type: "submit",
        fullWidth: !0,
        variant: "contained",
        size: "large",
        disabled: x,
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
        children: s === "loading" ? /* @__PURE__ */ n.jsxDEV(we, { size: 24, color: "inherit" }, void 0, !1, {
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
    N && p && /* @__PURE__ */ n.jsxDEV(C, { textAlign: "right", sx: { mt: 1 }, children: /* @__PURE__ */ n.jsxDEV(
      I,
      {
        variant: "text",
        onClick: p,
        disabled: x,
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
}, zo = ({
  brandConfig: o,
  loginState: s,
  onClick: d,
  showDivider: p = !1
}) => {
  const N = s === "loading" || s === "google-loading";
  return /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: [
    p && /* @__PURE__ */ n.jsxDEV(Co, { sx: { my: 1 }, children: /* @__PURE__ */ n.jsxDEV(
      $,
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
      I,
      {
        fullWidth: !0,
        variant: "outlined",
        size: "large",
        startIcon: s === "google-loading" ? /* @__PURE__ */ n.jsxDEV(we, { size: 20, color: "inherit" }, void 0, !1, {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/GoogleSignInButton.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, void 0) : /* @__PURE__ */ n.jsxDEV(Lo, {}, void 0, !1, {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/GoogleSignInButton.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, void 0),
        onClick: d,
        disabled: N,
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
        children: s === "google-loading" ? "Signing in..." : "Continue with Google"
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
}, qo = X.object({
  email: X.string().email("Please enter a valid email address").required("Email is required")
}), Ho = ({
  brandConfig: o,
  loginState: s,
  error: d,
  onSubmit: p,
  onBackToLogin: N,
  onCloseError: m
}) => {
  const {
    register: a,
    handleSubmit: b,
    formState: { errors: u }
  } = Qe({
    resolver: oo(qo)
  }), l = s === "forget-password-loading";
  return /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: [
    d && /* @__PURE__ */ n.jsxDEV(Ze, { severity: "error", sx: { mb: 3 }, onClose: m, children: d.message }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/ForgetPasswordForm.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ n.jsxDEV(C, { sx: { textAlign: "center", mb: 3 }, children: [
      /* @__PURE__ */ n.jsxDEV(
        $,
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
        $,
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
    /* @__PURE__ */ n.jsxDEV(C, { component: "form", onSubmit: b(p), children: /* @__PURE__ */ n.jsxDEV(De, { spacing: 3, children: [
      /* @__PURE__ */ n.jsxDEV(
        ke,
        {
          ...a("email"),
          fullWidth: !0,
          label: "Email Address",
          type: "email",
          placeholder: "Enter your email",
          error: !!u.email,
          helperText: u.email?.message,
          disabled: l,
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
        I,
        {
          type: "submit",
          fullWidth: !0,
          variant: "contained",
          size: "large",
          disabled: l,
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
          children: l ? /* @__PURE__ */ n.jsxDEV(we, { size: 24, color: "inherit" }, void 0, !1, {
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
        I,
        {
          fullWidth: !0,
          variant: "text",
          onClick: N,
          disabled: l,
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
}, Jo = ({
  brandConfig: o,
  loginState: s,
  onVerify: d,
  onVerifySuccess: p,
  onVerifyError: N,
  onResend: m,
  onBackToSignIn: a
}) => /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: [
  /* @__PURE__ */ n.jsxDEV(C, { sx: { textAlign: "center", mb: 3 }, children: [
    o.logo && /* @__PURE__ */ n.jsxDEV(C, { sx: { mb: 2 }, children: typeof o.logo == "string" ? /* @__PURE__ */ n.jsxDEV(
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
      $,
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
    Oo,
    {
      onVerify: d,
      onVerifySuccess: p,
      onVerifyError: N,
      onResend: m,
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
  s === "otp-error" && /* @__PURE__ */ n.jsxDEV(C, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ n.jsxDEV(
    I,
    {
      variant: "text",
      onClick: a,
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
}, void 0), Xo = ({
  brandConfig: o,
  onBackToLogin: s
}) => /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: [
  /* @__PURE__ */ n.jsxDEV(C, { sx: { textAlign: "center", mb: 3 }, children: [
    o.logo && /* @__PURE__ */ n.jsxDEV(C, { sx: { mb: 2 }, children: typeof o.logo == "string" ? /* @__PURE__ */ n.jsxDEV(
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
      $,
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
      $,
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
  /* @__PURE__ */ n.jsxDEV(C, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ n.jsxDEV(
    I,
    {
      variant: "contained",
      onClick: s,
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
}, void 0), ae = ({
  children: o,
  brandConfig: s
}) => /* @__PURE__ */ n.jsxDEV(
  C,
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
    children: /* @__PURE__ */ n.jsxDEV(
      C,
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
), Ko = () => ({
  primaryColor: "#1976d2",
  secondaryColor: "#42a5f5",
  backgroundColor: "#ffffff",
  textColor: "#333333",
  logoHeight: 48,
  logo: "https://via.placeholder.com/200x80/1976d2/ffffff?text=Lumora"
}), Zo = (o) => ({
  ...Ko(),
  ...o
}), Qo = ({
  onGoogleLogin: o,
  onLoginError: s,
  setLoginState: d,
  setError: p,
  googleLoginRef: N
}) => {
  const m = Mo({
    onSuccess: (a) => {
      d("google-loading"), p(null);
      try {
        const b = {
          access_token: a.access_token,
          expires_in: a.expires_in,
          scope: a.scope,
          token_type: a.token_type
        };
        o(b), setTimeout(() => {
          d("otp-required");
        }, 1e3);
      } catch (b) {
        const u = b;
        p({ message: u.message, type: "google" }), d("error"), s(u);
      }
    },
    onError: (a) => {
      p({
        message: a.error_description || "Google sign-in failed",
        type: "google"
      }), d("error"), s(
        new Error(a.error_description || "Google sign-in failed")
      );
    }
  });
  return ue.useEffect(() => {
    N.current = m;
  }, [m, N]), null;
}, Ke = ({
  onLocalLogin: o,
  onGoogleLogin: s,
  onLoginSuccess: d,
  onLoginError: p,
  onForgetPassword: N,
  enableRecaptcha: m = !1,
  recaptchaSiteKey: a,
  googleClientId: b,
  enableGoogleSignIn: u = !0,
  enableLocalSignIn: l = !0,
  enableForgetPassword: x = !0,
  branding: _
}) => {
  const [k, R] = le("idle"), [U, j] = le(null), S = ue.useRef(null), g = Zo(_);
  if (!l && !u)
    throw new Error(
      "At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)"
    );
  if (m && !a)
    throw new Error(
      "recaptchaSiteKey is required when enableRecaptcha is true"
    );
  const D = () => window.grecaptcha.execute(a, { action: "login" }).catch(() => {
    throw new Error("reCAPTCHA verification failed");
  }), G = async () => {
    if (!m || !a)
      return "";
    if (typeof window > "u" || !window.grecaptcha)
      throw new Error("reCAPTCHA is not loaded");
    return new Promise((y, F) => {
      const A = () => {
        D().then(y).catch(F);
      };
      window.grecaptcha.ready(A);
    });
  }, W = async (y) => {
    R("loading"), j(null);
    try {
      m && await G(), await o(y.email, y.password), R("otp-required");
    } catch (F) {
      const A = F;
      j({ message: A.message, type: "local" }), R("error"), p(A);
    }
  }, O = () => {
    S.current && S.current();
  }, B = async (y) => {
    if (await new Promise((F) => setTimeout(F, 1e3)), y === "123456")
      return { success: !0, token: "verified-token" };
    throw new Error("Invalid OTP code");
  }, ce = (y) => {
    R("success"), d(y);
  }, de = (y) => {
    j({ message: y.message, type: "otp" }), R("otp-error");
  }, K = () => {
    console.log("Resending OTP..."), U && U.type === "otp" && j(null);
  }, Z = () => {
    j(null), R("idle");
  }, me = async (y) => {
    if (!N) {
      j({
        message: "Forget password functionality is not available",
        type: "forget-password"
      });
      return;
    }
    R("forget-password-loading"), j(null);
    try {
      m && await G(), await N(y.email), R("forget-password-success");
    } catch (F) {
      const A = F;
      j({ message: A.message, type: "forget-password" }), R("forget-password"), p(A);
    }
  }, Q = () => {
    j(null), R("forget-password");
  }, V = () => {
    j(null), R("idle");
  };
  return Ee(() => {
    if (m && a && typeof window < "u") {
      const y = document.createElement("script");
      y.src = `https://www.google.com/recaptcha/enterprise.js?render=${a}`, y.async = !0, y.defer = !0, document.head.appendChild(y);
    }
  }, [m, a]), k === "otp-required" || k === "otp-error" ? /* @__PURE__ */ n.jsxDEV(ae, { brandConfig: g, children: /* @__PURE__ */ n.jsxDEV(
    Jo,
    {
      brandConfig: g,
      loginState: k,
      onVerify: B,
      onVerifySuccess: ce,
      onVerifyError: de,
      onResend: K,
      onBackToSignIn: Z
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
  }, void 0) : k === "forget-password-success" ? /* @__PURE__ */ n.jsxDEV(ae, { brandConfig: g, children: /* @__PURE__ */ n.jsxDEV(
    Xo,
    {
      brandConfig: g,
      onBackToLogin: V
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 331,
      columnNumber: 5
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 330,
    columnNumber: 4
  }, void 0) : k === "forget-password" || k === "forget-password-loading" ? /* @__PURE__ */ n.jsxDEV(ae, { brandConfig: g, children: [
    /* @__PURE__ */ n.jsxDEV(Xe, { brandConfig: g }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 346,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ n.jsxDEV(
      Ho,
      {
        brandConfig: g,
        loginState: k,
        error: U,
        onSubmit: me,
        onBackToLogin: V,
        onCloseError: () => j(null)
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 347,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 345,
    columnNumber: 4
  }, void 0) : /* @__PURE__ */ n.jsxDEV(ae, { brandConfig: g, children: [
    /* @__PURE__ */ n.jsxDEV(
      Xe,
      {
        brandConfig: g,
        title: g.companyName ? `Welcome to ${g.companyName}` : "Sign In",
        subtitle: g.tagline
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 362,
        columnNumber: 4
      },
      void 0
    ),
    U && /* @__PURE__ */ n.jsxDEV(
      Ze,
      {
        severity: "error",
        sx: { mb: 3 },
        onClose: () => j(null),
        children: U.message
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 373,
        columnNumber: 5
      },
      void 0
    ),
    /* @__PURE__ */ n.jsxDEV(De, { spacing: 3, children: [
      l && /* @__PURE__ */ n.jsxDEV(
        Yo,
        {
          brandConfig: g,
          loginState: k,
          onSubmit: W,
          onForgetPassword: N ? Q : void 0,
          enableForgetPassword: x
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 384,
          columnNumber: 6
        },
        void 0
      ),
      u && b && /* @__PURE__ */ n.jsxDEV(
        zo,
        {
          brandConfig: g,
          loginState: k,
          onClick: O,
          showDivider: l
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 398,
          columnNumber: 6
        },
        void 0
      ),
      k === "error" && /* @__PURE__ */ n.jsxDEV(
        I,
        {
          fullWidth: !0,
          variant: "text",
          onClick: Z,
          sx: {
            mt: 1,
            color: g.primaryColor,
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: `${g.primaryColor}08`
            }
          },
          children: "Try Again"
        },
        void 0,
        !1,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 407,
          columnNumber: 6
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 382,
      columnNumber: 4
    }, void 0),
    u && b && /* @__PURE__ */ n.jsxDEV(
      Qo,
      {
        onGoogleLogin: s,
        onLoginError: p,
        setLoginState: R,
        setError: j,
        googleLoginRef: S
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
        lineNumber: 428,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 361,
    columnNumber: 3
  }, void 0);
}, sr = (o) => {
  const { googleClientId: s, enableGoogleSignIn: d } = o;
  return d && s ? /* @__PURE__ */ n.jsxDEV($o, { clientId: s, children: /* @__PURE__ */ n.jsxDEV(Ke, { ...o }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 448,
    columnNumber: 5
  }, void 0) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 447,
    columnNumber: 4
  }, void 0) : /* @__PURE__ */ n.jsxDEV(Ke, { ...o }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 454,
    columnNumber: 9
  }, void 0);
};
export {
  sr as LumoraLogin
};
