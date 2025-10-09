import He, { createContext as No, useMemo as Co, useState as ae, useRef as z, useEffect as Ee, useCallback as $e, useContext as ko } from "react";
import { appendErrors as wo, useForm as Do } from "react-hook-form";
import { validateFieldsNatively as Ro, toNestErrors as _o } from "@hookform/resolvers";
import * as ye from "yup";
import { Box as F, Typography as re, Button as J, Alert as Lo, Stack as So, TextField as Me, CircularProgress as Ye, Divider as To } from "@mui/material";
import { Google as jo } from "@mui/icons-material";
import { LumoraOTP as Po } from "@volenday/lumora-otp-component";
var ne = { exports: {} }, te = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Oo() {
  if (ze) return te;
  ze = 1;
  var g = Symbol.for("react.fragment");
  return te.Fragment = g, te.jsxDEV = void 0, te;
}
var ie = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Vo() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && (function() {
    var g = He, b = Symbol.for("react.element"), C = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), w = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), W = Symbol.iterator, G = "@@iterator";
    function n(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = W && e[W] || e[G];
      return typeof o == "function" ? o : null;
    }
    var D = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), t = 1; t < o; t++)
          r[t - 1] = arguments[t];
        q("error", e, r);
      }
    }
    function q(e, o, r) {
      {
        var t = D.ReactDebugCurrentFrame, u = t.getStackAddendum();
        u !== "" && (o += "%s", r = r.concat([u]));
        var m = r.map(function(l) {
          return String(l);
        });
        m.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var T = !1, V = !1, I = !1, se = !1, le = !1, X;
    X = Symbol.for("react.module.reference");
    function ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === N || e === v || le || e === k || e === f || e === i || se || e === _ || T || V || I || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === p || e.$$typeof === y || e.$$typeof === w || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === X || e.getModuleId !== void 0));
    }
    function ce(e, o, r) {
      var t = e.displayName;
      if (t)
        return t;
      var u = o.displayName || o.name || "";
      return u !== "" ? r + "(" + u + ")" : r;
    }
    function K(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case N:
          return "Fragment";
        case C:
          return "Portal";
        case v:
          return "Profiler";
        case k:
          return "StrictMode";
        case f:
          return "Suspense";
        case i:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var o = e;
            return K(o) + ".Consumer";
          case y:
            var r = e;
            return K(r._context) + ".Provider";
          case c:
            return ce(e, e.render, "ForwardRef");
          case p:
            var t = e.displayName || null;
            return t !== null ? t : j(e.type) || "Memo";
          case R: {
            var u = e, m = u._payload, l = u._init;
            try {
              return j(l(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, d = 0, P, U, Ne, Ce, ke, we, De;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Xe() {
      {
        if (d === 0) {
          P = console.log, U = console.info, Ne = console.warn, Ce = console.error, ke = console.group, we = console.groupCollapsed, De = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
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
        d++;
      }
    }
    function Ke() {
      {
        if (d--, d === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: P
            }),
            info: A({}, e, {
              value: U
            }),
            warn: A({}, e, {
              value: Ne
            }),
            error: A({}, e, {
              value: Ce
            }),
            group: A({}, e, {
              value: ke
            }),
            groupCollapsed: A({}, e, {
              value: we
            }),
            groupEnd: A({}, e, {
              value: De
            })
          });
        }
        d < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = D.ReactCurrentDispatcher, fe;
    function Z(e, o, r) {
      {
        if (fe === void 0)
          try {
            throw Error();
          } catch (u) {
            var t = u.stack.trim().match(/\n( *(at )?)/);
            fe = t && t[1] || "";
          }
        return `
` + fe + e;
      }
    }
    var me = !1, Q;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Ze();
    }
    function _e(e, o) {
      if (!e || me)
        return "";
      {
        var r = Q.get(e);
        if (r !== void 0)
          return r;
      }
      var t;
      me = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = de.current, de.current = null, Xe();
      try {
        if (o) {
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
            } catch (S) {
              t = S;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (S) {
              t = S;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            t = S;
          }
          e();
        }
      } catch (S) {
        if (S && t && typeof S.stack == "string") {
          for (var s = S.stack.split(`
`), L = t.stack.split(`
`), x = s.length - 1, E = L.length - 1; x >= 1 && E >= 0 && s[x] !== L[E]; )
            E--;
          for (; x >= 1 && E >= 0; x--, E--)
            if (s[x] !== L[E]) {
              if (x !== 1 || E !== 1)
                do
                  if (x--, E--, E < 0 || s[x] !== L[E]) {
                    var O = `
` + s[x].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, O), O;
                  }
                while (x >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        me = !1, de.current = m, Ke(), Error.prepareStackTrace = u;
      }
      var Y = e ? e.displayName || e.name : "", $ = Y ? Z(Y) : "";
      return typeof e == "function" && Q.set(e, $), $;
    }
    function Qe(e, o, r) {
      return _e(e, !1);
    }
    function eo(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function ee(e, o, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, eo(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case f:
          return Z("Suspense");
        case i:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Qe(e.render);
          case p:
            return ee(e.type, o, r);
          case R: {
            var t = e, u = t._payload, m = t._init;
            try {
              return ee(m(u), o, r);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, Le = {}, Se = D.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var o = e._owner, r = ee(e.type, e._source, o ? o.type : null);
        Se.setExtraStackFrame(r);
      } else
        Se.setExtraStackFrame(null);
    }
    function oo(e, o, r, t, u) {
      {
        var m = Function.call.bind(B);
        for (var l in e)
          if (m(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var L = Error((t || "React class") + ": " + r + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              s = e[l](o, l, t, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              s = x;
            }
            s && !(s instanceof Error) && (oe(u), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", r, l, typeof s), oe(null)), s instanceof Error && !(s.message in Le) && (Le[s.message] = !0, oe(u), h("Failed %s type: %s", r, s.message), oe(null));
          }
      }
    }
    var ro = Array.isArray;
    function ge(e) {
      return ro(e);
    }
    function no(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, r = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function to(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function je(e) {
      if (to(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", no(e)), Te(e);
    }
    var H = D.ReactCurrentOwner, io = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Oe, ve;
    ve = {};
    function ao(e) {
      if (B.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function so(e) {
      if (B.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lo(e, o) {
      if (typeof e.ref == "string" && H.current && o && H.current.stateNode !== o) {
        var r = j(H.current.type);
        ve[r] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(H.current.type), e.ref), ve[r] = !0);
      }
    }
    function uo(e, o) {
      {
        var r = function() {
          Pe || (Pe = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function co(e, o) {
      {
        var r = function() {
          Oe || (Oe = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var fo = function(e, o, r, t, u, m, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: r,
        props: l,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function mo(e, o, r, t, u) {
      {
        var m, l = {}, s = null, L = null;
        r !== void 0 && (je(r), s = "" + r), so(o) && (je(o.key), s = "" + o.key), ao(o) && (L = o.ref, lo(o, u));
        for (m in o)
          B.call(o, m) && !io.hasOwnProperty(m) && (l[m] = o[m]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (m in x)
            l[m] === void 0 && (l[m] = x[m]);
        }
        if (s || L) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && uo(l, E), L && co(l, E);
        }
        return fo(e, s, L, u, t, H.current, l);
      }
    }
    var pe = D.ReactCurrentOwner, Ve = D.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var o = e._owner, r = ee(e.type, e._source, o ? o.type : null);
        Ve.setExtraStackFrame(r);
      } else
        Ve.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function he(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function Ae() {
      {
        if (pe.current) {
          var e = j(pe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function go(e) {
      {
        if (e !== void 0) {
          var o = e.fileName.replace(/^.*[\\\/]/, ""), r = e.lineNumber;
          return `

Check your code at ` + o + ":" + r + ".";
        }
        return "";
      }
    }
    var Ue = {};
    function vo(e) {
      {
        var o = Ae();
        if (!o) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (o = `

Check the top-level render call using <` + r + ">.");
        }
        return o;
      }
    }
    function Fe(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = vo(o);
        if (Ue[r])
          return;
        Ue[r] = !0;
        var t = "";
        e && e._owner && e._owner !== pe.current && (t = " It was passed a child from " + j(e._owner.type) + "."), M(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, t), M(null);
      }
    }
    function We(e, o) {
      {
        if (typeof e != "object")
          return;
        if (ge(e))
          for (var r = 0; r < e.length; r++) {
            var t = e[r];
            he(t) && Fe(t, o);
          }
        else if (he(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = n(e);
          if (typeof u == "function" && u !== e.entries)
            for (var m = u.call(e), l; !(l = m.next()).done; )
              he(l.value) && Fe(l.value, o);
        }
      }
    }
    function po(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var r;
        if (typeof o == "function")
          r = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === p))
          r = o.propTypes;
        else
          return;
        if (r) {
          var t = j(o);
          oo(r, e.props, "prop", t, e);
        } else if (o.PropTypes !== void 0 && !be) {
          be = !0;
          var u = j(o);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bo(e) {
      {
        for (var o = Object.keys(e.props), r = 0; r < o.length; r++) {
          var t = o[r];
          if (t !== "children" && t !== "key") {
            M(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    var Ie = {};
    function ho(e, o, r, t, u, m) {
      {
        var l = ue(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = go(u);
          L ? s += L : s += Ae();
          var x;
          e === null ? x = "null" : ge(e) ? x = "array" : e !== void 0 && e.$$typeof === b ? (x = "<" + (j(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, s);
        }
        var E = mo(e, o, r, u, m);
        if (E == null)
          return E;
        if (l) {
          var O = o.children;
          if (O !== void 0)
            if (t)
              if (ge(O)) {
                for (var Y = 0; Y < O.length; Y++)
                  We(O[Y], e);
                Object.freeze && Object.freeze(O);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(O, e);
        }
        if (B.call(o, "key")) {
          var $ = j(e), S = Object.keys(o).filter(function(Eo) {
            return Eo !== "key";
          }), xe = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[$ + xe]) {
            var yo = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xe, $, yo, $), Ie[$ + xe] = !0;
          }
        }
        return e === N ? bo(E) : po(E), E;
      }
    }
    var xo = ho;
    ie.Fragment = N, ie.jsxDEV = xo;
  })()), ie;
}
var qe;
function Ao() {
  return qe || (qe = 1, process.env.NODE_ENV === "production" ? ne.exports = Oo() : ne.exports = Vo()), ne.exports;
}
var a = Ao();
function Uo(g, b, C) {
  return C === void 0 && (C = {}), function(N, k, v) {
    try {
      return Promise.resolve((function(y, w) {
        try {
          var c = (b != null && b.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(g[C.mode === "sync" ? "validateSync" : "validate"](N, Object.assign({ abortEarly: !1 }, b, { context: k }))).then(function(f) {
            return v.shouldUseNativeValidation && Ro({}, v), { values: C.raw ? Object.assign({}, N) : f, errors: {} };
          }));
        } catch (f) {
          return w(f);
        }
        return c && c.then ? c.then(void 0, w) : c;
      })(0, function(y) {
        if (!y.inner) throw y;
        return { values: {}, errors: _o((w = y, c = !v.shouldUseNativeValidation && v.criteriaMode === "all", (w.inner || []).reduce(function(f, i) {
          if (f[i.path] || (f[i.path] = { message: i.message, type: i.type }), c) {
            var p = f[i.path].types, R = p && p[i.type];
            f[i.path] = wo(i.path, c, f, i.type, R ? [].concat(R, i.message) : i.message);
          }
          return f;
        }, {})), v) };
        var w, c;
      }));
    } catch (y) {
      return Promise.reject(y);
    }
  };
}
function Fo(g = {}) {
  const { nonce: b, onScriptLoadSuccess: C, onScriptLoadError: N } = g, [k, v] = ae(!1), y = z(C);
  y.current = C;
  const w = z(N);
  return w.current = N, Ee(() => {
    const c = document.createElement("script");
    return c.src = "https://accounts.google.com/gsi/client", c.async = !0, c.defer = !0, c.nonce = b, c.onload = () => {
      var f;
      v(!0), (f = y.current) === null || f === void 0 || f.call(y);
    }, c.onerror = () => {
      var f;
      v(!1), (f = w.current) === null || f === void 0 || f.call(w);
    }, document.body.appendChild(c), () => {
      document.body.removeChild(c);
    };
  }, [b]), k;
}
const Je = No(null);
function Wo({ clientId: g, nonce: b, onScriptLoadSuccess: C, onScriptLoadError: N, children: k }) {
  const v = Fo({
    nonce: b,
    onScriptLoadSuccess: C,
    onScriptLoadError: N
  }), y = Co(() => ({
    clientId: g,
    scriptLoadedSuccessfully: v
  }), [g, v]);
  return He.createElement(Je.Provider, { value: y }, k);
}
function Io() {
  const g = ko(Je);
  if (!g)
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  return g;
}
function $o({ flow: g = "implicit", scope: b = "", onSuccess: C, onError: N, onNonOAuthError: k, overrideScope: v, state: y, ...w }) {
  const { clientId: c, scriptLoadedSuccessfully: f } = Io(), i = z(), p = z(C);
  p.current = C;
  const R = z(N);
  R.current = N;
  const _ = z(k);
  _.current = k, Ee(() => {
    var n, D;
    if (!f)
      return;
    const h = g === "implicit" ? "initTokenClient" : "initCodeClient", q = (D = (n = window?.google) === null || n === void 0 ? void 0 : n.accounts) === null || D === void 0 ? void 0 : D.oauth2[h]({
      client_id: c,
      scope: v ? b : `openid profile email ${b}`,
      callback: (T) => {
        var V, I;
        if (T.error)
          return (V = R.current) === null || V === void 0 ? void 0 : V.call(R, T);
        (I = p.current) === null || I === void 0 || I.call(p, T);
      },
      error_callback: (T) => {
        var V;
        (V = _.current) === null || V === void 0 || V.call(_, T);
      },
      state: y,
      ...w
    });
    i.current = q;
  }, [c, f, g, b, y]);
  const W = $e((n) => {
    var D;
    return (D = i.current) === null || D === void 0 ? void 0 : D.requestAccessToken(n);
  }, []), G = $e(() => {
    var n;
    return (n = i.current) === null || n === void 0 ? void 0 : n.requestCode();
  }, []);
  return g === "implicit" ? W : G;
}
const Mo = ye.object({
  email: ye.string().email("Please enter a valid email address").required("Email is required"),
  password: ye.string().min(6, "Password must be at least 6 characters").required("Password is required")
}), Yo = () => ({
  primaryColor: "#1976d2",
  secondaryColor: "#42a5f5",
  backgroundColor: "#ffffff",
  textColor: "#333333",
  logoHeight: 48,
  logo: "https://via.placeholder.com/200x80/1976d2/ffffff?text=Lumora"
}), zo = (g) => ({
  ...Yo(),
  ...g
}), Be = ({
  onLocalLogin: g,
  onGoogleLogin: b,
  onLoginSuccess: C,
  onLoginError: N,
  enableRecaptcha: k = !1,
  recaptchaSiteKey: v,
  googleClientId: y,
  enableGoogleSignIn: w = !0,
  enableLocalSignIn: c = !0,
  branding: f
}) => {
  const [i, p] = ae("idle"), [R, _] = ae(null), [W, G] = ae(!1), n = zo(f), D = $o({
    onSuccess: (d) => {
      p("google-loading"), _(null);
      try {
        const P = {
          access_token: d.access_token,
          expires_in: d.expires_in,
          scope: d.scope,
          token_type: d.token_type
        };
        b(P), setTimeout(() => {
          p("otp-required");
        }, 1e3);
      } catch (P) {
        const U = P;
        _({ message: U.message, type: "google" }), p("error"), N(U);
      }
    },
    onError: (d) => {
      _({ message: d.error_description || "Google sign-in failed", type: "google" }), p("error"), N(new Error(d.error_description || "Google sign-in failed"));
    }
  });
  if (!c && !w)
    throw new Error(
      "At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)"
    );
  if (k && !v)
    throw new Error(
      "recaptchaSiteKey is required when enableRecaptcha is true"
    );
  const {
    register: h,
    handleSubmit: q,
    formState: { errors: T },
    reset: V
  } = Do({
    resolver: Uo(Mo)
  }), I = () => window.grecaptcha.execute(v, { action: "login" }).catch(() => {
    throw new Error("reCAPTCHA verification failed");
  }), se = async () => {
    if (!k || !v)
      return "";
    if (typeof window > "u" || !window.grecaptcha)
      throw new Error("reCAPTCHA is not loaded");
    return new Promise((d, P) => {
      const U = () => {
        I().then(d).catch(P);
      };
      window.grecaptcha.ready(U);
    });
  }, le = async (d) => {
    p("loading"), _(null);
    try {
      k && await se(), await g(d.email, d.password), p("otp-required");
    } catch (P) {
      const U = P;
      _({ message: U.message, type: "local" }), p("error"), N(U);
    }
  }, X = () => {
    D();
  }, ue = async (d) => {
    if (await new Promise((P) => setTimeout(P, 1e3)), d === "123456")
      return { success: !0, token: "verified-token" };
    throw new Error("Invalid OTP code");
  }, ce = (d) => {
    p("success"), C(d);
  }, K = (d) => {
    _({ message: d.message, type: "otp" }), p("otp-error");
  }, j = () => {
    console.log("Resending OTP..."), R && R.type === "otp" && _(null);
  }, A = () => {
    _(null), p("idle"), V();
  };
  return Ee(() => {
    if (k && v && typeof window < "u") {
      const d = document.createElement("script");
      d.src = `https://www.google.com/recaptcha/enterprise.js?render=${v}`, d.async = !0, d.defer = !0, document.head.appendChild(d);
    }
  }, [k, v]), i === "otp-required" || i === "otp-error" ? /* @__PURE__ */ a.jsxDEV(
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
        background: n.backgroundColor,
        display: "flex",
        flexDirection: "column",
        // Prevent horizontal overflow
        overflowX: "hidden",
        boxSizing: "border-box"
      },
      children: /* @__PURE__ */ a.jsxDEV(
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
          children: [
            /* @__PURE__ */ a.jsxDEV(F, { sx: { textAlign: "center", mb: 3 }, children: [
              n.logo && /* @__PURE__ */ a.jsxDEV(F, { sx: { mb: 2 }, children: typeof n.logo == "string" ? /* @__PURE__ */ a.jsxDEV(
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
                  lineNumber: 299,
                  columnNumber: 10
                },
                void 0
              ) : n.logo }, void 0, !1, {
                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                lineNumber: 297,
                columnNumber: 8
              }, void 0),
              /* @__PURE__ */ a.jsxDEV(
                re,
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
                  lineNumber: 317,
                  columnNumber: 7
                },
                void 0
              )
            ] }, void 0, !0, {
              fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
              lineNumber: 295,
              columnNumber: 6
            }, void 0),
            /* @__PURE__ */ a.jsxDEV(
              Po,
              {
                onVerify: ue,
                onVerifySuccess: ce,
                onVerifyError: K,
                onResend: j,
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
                lineNumber: 330,
                columnNumber: 6
              },
              void 0
            ),
            i === "otp-error" && /* @__PURE__ */ a.jsxDEV(F, { textAlign: "center", sx: { mt: 3 }, children: /* @__PURE__ */ a.jsxDEV(
              J,
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
                lineNumber: 344,
                columnNumber: 8
              },
              void 0
            ) }, void 0, !1, {
              fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
              lineNumber: 343,
              columnNumber: 7
            }, void 0)
          ]
        },
        void 0,
        !0,
        {
          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
          lineNumber: 282,
          columnNumber: 5
        },
        void 0
      )
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 258,
      columnNumber: 4
    },
    void 0
  ) : /* @__PURE__ */ a.jsxDEV(
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
        background: n.backgroundColor,
        display: "flex",
        flexDirection: "column",
        // Prevent horizontal overflow
        overflowX: "hidden",
        boxSizing: "border-box"
      },
      children: /* @__PURE__ */ a.jsxDEV(
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
          children: [
            /* @__PURE__ */ a.jsxDEV(F, { sx: { textAlign: "center", mb: 4 }, children: [
              n.logo && /* @__PURE__ */ a.jsxDEV(F, { sx: { mb: 2 }, children: typeof n.logo == "string" ? /* @__PURE__ */ a.jsxDEV(
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
                  lineNumber: 408,
                  columnNumber: 9
                },
                void 0
              ) : n.logo }, void 0, !1, {
                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                lineNumber: 406,
                columnNumber: 7
              }, void 0),
              /* @__PURE__ */ a.jsxDEV(
                re,
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
                  lineNumber: 426,
                  columnNumber: 6
                },
                void 0
              ),
              n.tagline && /* @__PURE__ */ a.jsxDEV(
                re,
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
                  lineNumber: 442,
                  columnNumber: 7
                },
                void 0
              )
            ] }, void 0, !0, {
              fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
              lineNumber: 404,
              columnNumber: 5
            }, void 0),
            R && /* @__PURE__ */ a.jsxDEV(
              Lo,
              {
                severity: "error",
                sx: { mb: 3 },
                onClose: () => _(null),
                children: R.message
              },
              void 0,
              !1,
              {
                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                lineNumber: 456,
                columnNumber: 6
              },
              void 0
            ),
            /* @__PURE__ */ a.jsxDEV(
              F,
              {
                component: "form",
                onSubmit: c ? q(le) : void 0,
                children: /* @__PURE__ */ a.jsxDEV(So, { spacing: 3, children: [
                  c && /* @__PURE__ */ a.jsxDEV(a.Fragment, { children: [
                    /* @__PURE__ */ a.jsxDEV(
                      Me,
                      {
                        ...h("email"),
                        fullWidth: !0,
                        label: "Email Address",
                        type: "email",
                        placeholder: "Enter your email",
                        error: !!T.email,
                        helperText: T.email?.message,
                        disabled: i === "loading" || i === "google-loading",
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
                        lineNumber: 476,
                        columnNumber: 9
                      },
                      void 0
                    ),
                    /* @__PURE__ */ a.jsxDEV(
                      Me,
                      {
                        ...h("password"),
                        fullWidth: !0,
                        label: "Password",
                        type: W ? "text" : "password",
                        placeholder: "Enter your password",
                        error: !!T.password,
                        helperText: T.password?.message,
                        disabled: i === "loading" || i === "google-loading",
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
                            endAdornment: /* @__PURE__ */ a.jsxDEV(
                              J,
                              {
                                size: "small",
                                onClick: () => G(
                                  !W
                                ),
                                disabled: i === "loading" || i === "google-loading",
                                sx: {
                                  color: n.primaryColor,
                                  textTransform: "none",
                                  fontWeight: 500,
                                  "&:hover": {
                                    backgroundColor: `${n.primaryColor}10`
                                  }
                                },
                                children: W ? "Hide" : "Show"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                                lineNumber: 537,
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
                        lineNumber: 506,
                        columnNumber: 9
                      },
                      void 0
                    ),
                    /* @__PURE__ */ a.jsxDEV(
                      J,
                      {
                        type: "submit",
                        fullWidth: !0,
                        variant: "contained",
                        size: "large",
                        disabled: i === "loading" || i === "google-loading",
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
                        children: i === "loading" ? /* @__PURE__ */ a.jsxDEV(
                          Ye,
                          {
                            size: 24,
                            color: "inherit"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                            lineNumber: 597,
                            columnNumber: 11
                          },
                          void 0
                        ) : "Sign In"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                        lineNumber: 568,
                        columnNumber: 9
                      },
                      void 0
                    )
                  ] }, void 0, !0, {
                    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                    lineNumber: 475,
                    columnNumber: 8
                  }, void 0),
                  w && y && /* @__PURE__ */ a.jsxDEV(a.Fragment, { children: [
                    c && /* @__PURE__ */ a.jsxDEV(To, { sx: { my: 1 }, children: /* @__PURE__ */ a.jsxDEV(
                      re,
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
                        lineNumber: 612,
                        columnNumber: 11
                      },
                      void 0
                    ) }, void 0, !1, {
                      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                      lineNumber: 611,
                      columnNumber: 10
                    }, void 0),
                    /* @__PURE__ */ a.jsxDEV(
                      J,
                      {
                        fullWidth: !0,
                        variant: "outlined",
                        size: "large",
                        startIcon: i === "google-loading" ? /* @__PURE__ */ a.jsxDEV(
                          Ye,
                          {
                            size: 20,
                            color: "inherit"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                            lineNumber: 632,
                            columnNumber: 12
                          },
                          void 0
                        ) : /* @__PURE__ */ a.jsxDEV(jo, {}, void 0, !1, {
                          fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                          lineNumber: 637,
                          columnNumber: 12
                        }, void 0),
                        onClick: X,
                        disabled: i === "loading" || i === "google-loading",
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
                        children: i === "google-loading" ? "Signing in..." : "Continue with Google"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                        lineNumber: 626,
                        columnNumber: 9
                      },
                      void 0
                    )
                  ] }, void 0, !0, {
                    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                    lineNumber: 609,
                    columnNumber: 8
                  }, void 0),
                  i === "error" && /* @__PURE__ */ a.jsxDEV(
                    J,
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
                      lineNumber: 693,
                      columnNumber: 8
                    },
                    void 0
                  )
                ] }, void 0, !0, {
                  fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                  lineNumber: 473,
                  columnNumber: 6
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
                lineNumber: 465,
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
          lineNumber: 391,
          columnNumber: 4
        },
        void 0
      )
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
      lineNumber: 367,
      columnNumber: 3
    },
    void 0
  );
}, Ko = (g) => {
  const { googleClientId: b, enableGoogleSignIn: C } = g;
  return C && b ? /* @__PURE__ */ a.jsxDEV(Wo, { clientId: b, children: /* @__PURE__ */ a.jsxDEV(Be, { ...g }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 725,
    columnNumber: 5
  }, void 0) }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 724,
    columnNumber: 4
  }, void 0) : /* @__PURE__ */ a.jsxDEV(Be, { ...g }, void 0, !1, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-login-component/src/components/LumoraLogin.tsx",
    lineNumber: 731,
    columnNumber: 9
  }, void 0);
};
export {
  Ko as LumoraLogin
};
