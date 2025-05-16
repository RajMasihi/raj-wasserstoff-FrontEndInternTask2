import Wo from "react";
var Gt = { exports: {} }, xt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs;
function Ho() {
  if (gs) return xt;
  gs = 1;
  var re = Symbol.for("react.transitional.element"), Oe = Symbol.for("react.fragment");
  function M(oe, W, Q) {
    var ye = null;
    if (Q !== void 0 && (ye = "" + Q), W.key !== void 0 && (ye = "" + W.key), "key" in W) {
      Q = {};
      for (var H in W)
        H !== "key" && (Q[H] = W[H]);
    } else Q = W;
    return W = Q.ref, {
      $$typeof: re,
      type: oe,
      key: ye,
      ref: W !== void 0 ? W : null,
      props: Q
    };
  }
  return xt.Fragment = Oe, xt.jsx = M, xt.jsxs = M, xt;
}
var Tt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s;
function Bo() {
  return _s || (_s = 1, process.env.NODE_ENV !== "production" && function() {
    function re(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === St ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case ke:
          return "Fragment";
        case X:
          return "Profiler";
        case U:
          return "StrictMode";
        case en:
          return "Suspense";
        case tn:
          return "SuspenseList";
        case kt:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case Ct:
            return "Portal";
          case Ot:
            return (s.displayName || "Context") + ".Provider";
          case R:
            return (s._context.displayName || "Context") + ".Consumer";
          case lt:
            var v = s.render;
            return s = s.displayName, s || (s = v.displayName || v.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case nn:
            return v = s.displayName || null, v !== null ? v : re(s.type) || "Memo";
          case He:
            v = s._payload, s = s._init;
            try {
              return re(s(v));
            } catch {
            }
        }
      return null;
    }
    function Oe(s) {
      return "" + s;
    }
    function M(s) {
      try {
        Oe(s);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var j = v.error, P = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return j.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), Oe(s);
      }
    }
    function oe(s) {
      if (s === ke) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === He)
        return "<...>";
      try {
        var v = re(s);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function W() {
      var s = ct.A;
      return s === null ? null : s.getOwner();
    }
    function Q() {
      return Error("react-stack-top-frame");
    }
    function ye(s) {
      if (ut.call(s, "key")) {
        var v = Object.getOwnPropertyDescriptor(s, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function H(s, v) {
      function j() {
        ht || (ht = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: j,
        configurable: !0
      });
    }
    function he() {
      var s = re(this.type);
      return dt[s] || (dt[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function we(s, v, j, P, $, F, B, Se) {
      return j = F.ref, s = {
        $$typeof: Ee,
        type: s,
        key: v,
        props: F,
        _owner: $
      }, (j !== void 0 ? j : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: he
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Se
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function ae(s, v, j, P, $, F, B, Se) {
      var h = v.children;
      if (h !== void 0)
        if (P)
          if (jt(h)) {
            for (P = 0; P < h.length; P++)
              at(h[P]);
            Object.freeze && Object.freeze(h);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else at(h);
      if (ut.call(v, "key")) {
        h = re(s);
        var le = Object.keys(v).filter(function(sn) {
          return sn !== "key";
        });
        P = 0 < le.length ? "{key: someKey, " + le.join(": ..., ") + ": ...}" : "{key: someKey}", ft[h + P] || (le = 0 < le.length ? "{" + le.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          h,
          le,
          h
        ), ft[h + P] = !0);
      }
      if (h = null, j !== void 0 && (M(j), h = "" + j), ye(v) && (M(v.key), h = "" + v.key), "key" in v) {
        j = {};
        for (var qe in v)
          qe !== "key" && (j[qe] = v[qe]);
      } else j = v;
      return h && H(
        j,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), we(
        s,
        h,
        F,
        $,
        W(),
        j,
        B,
        Se
      );
    }
    function at(s) {
      typeof s == "object" && s !== null && s.$$typeof === Ee && s._store && (s._store.validated = 1);
    }
    var ge = Wo, Ee = Symbol.for("react.transitional.element"), Ct = Symbol.for("react.portal"), ke = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), Ot = Symbol.for("react.context"), lt = Symbol.for("react.forward_ref"), en = Symbol.for("react.suspense"), tn = Symbol.for("react.suspense_list"), nn = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), kt = Symbol.for("react.activity"), St = Symbol.for("react.client.reference"), ct = ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ut = Object.prototype.hasOwnProperty, jt = Array.isArray, Be = console.createTask ? console.createTask : function() {
      return null;
    };
    ge = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var ht, dt = {}, ze = ge["react-stack-bottom-frame"].bind(
      ge,
      Q
    )(), Nt = Be(oe(Q)), ft = {};
    Tt.Fragment = ke, Tt.jsx = function(s, v, j, P, $) {
      var F = 1e4 > ct.recentlyCreatedOwnerStacks++;
      return ae(
        s,
        v,
        j,
        !1,
        P,
        $,
        F ? Error("react-stack-top-frame") : ze,
        F ? Be(oe(s)) : Nt
      );
    }, Tt.jsxs = function(s, v, j, P, $) {
      var F = 1e4 > ct.recentlyCreatedOwnerStacks++;
      return ae(
        s,
        v,
        j,
        !0,
        P,
        $,
        F ? Error("react-stack-top-frame") : ze,
        F ? Be(oe(s)) : Nt
      );
    };
  }()), Tt;
}
var bs;
function zo() {
  return bs || (bs = 1, process.env.NODE_ENV === "production" ? Gt.exports = Ho() : Gt.exports = Bo()), Gt.exports;
}
var g = zo(), Zt = { exports: {} };
/*!
  * Bootstrap v5.3.6 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var qo = Zt.exports, vs;
function Vo() {
  return vs || (vs = 1, function(re, Oe) {
    (function(M, oe) {
      re.exports = oe();
    })(qo, function() {
      const M = /* @__PURE__ */ new Map(), oe = { set(n, e, t) {
        M.has(n) || M.set(n, /* @__PURE__ */ new Map());
        const i = M.get(n);
        i.has(e) || i.size === 0 ? i.set(e, t) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
      }, get: (n, e) => M.has(n) && M.get(n).get(e) || null, remove(n, e) {
        if (!M.has(n)) return;
        const t = M.get(n);
        t.delete(e), t.size === 0 && M.delete(n);
      } }, W = "transitionend", Q = (n) => (n && window.CSS && window.CSS.escape && (n = n.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)), n), ye = (n) => {
        n.dispatchEvent(new Event(W));
      }, H = (n) => !(!n || typeof n != "object") && (n.jquery !== void 0 && (n = n[0]), n.nodeType !== void 0), he = (n) => H(n) ? n.jquery ? n[0] : n : typeof n == "string" && n.length > 0 ? document.querySelector(Q(n)) : null, we = (n) => {
        if (!H(n) || n.getClientRects().length === 0) return !1;
        const e = getComputedStyle(n).getPropertyValue("visibility") === "visible", t = n.closest("details:not([open])");
        if (!t) return e;
        if (t !== n) {
          const i = n.closest("summary");
          if (i && i.parentNode !== t || i === null) return !1;
        }
        return e;
      }, ae = (n) => !n || n.nodeType !== Node.ELEMENT_NODE || !!n.classList.contains("disabled") || (n.disabled !== void 0 ? n.disabled : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false"), at = (n) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof n.getRootNode == "function") {
          const e = n.getRootNode();
          return e instanceof ShadowRoot ? e : null;
        }
        return n instanceof ShadowRoot ? n : n.parentNode ? at(n.parentNode) : null;
      }, ge = () => {
      }, Ee = (n) => {
        n.offsetHeight;
      }, Ct = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, ke = [], U = () => document.documentElement.dir === "rtl", X = (n) => {
        var e;
        e = () => {
          const t = Ct();
          if (t) {
            const i = n.NAME, r = t.fn[i];
            t.fn[i] = n.jQueryInterface, t.fn[i].Constructor = n, t.fn[i].noConflict = () => (t.fn[i] = r, n.jQueryInterface);
          }
        }, document.readyState === "loading" ? (ke.length || document.addEventListener("DOMContentLoaded", () => {
          for (const t of ke) t();
        }), ke.push(e)) : e();
      }, R = (n, e = [], t = n) => typeof n == "function" ? n.call(...e) : t, Ot = (n, e, t = !0) => {
        if (!t) return void R(n);
        const i = ((a) => {
          if (!a) return 0;
          let { transitionDuration: l, transitionDelay: c } = window.getComputedStyle(a);
          const d = Number.parseFloat(l), f = Number.parseFloat(c);
          return d || f ? (l = l.split(",")[0], c = c.split(",")[0], 1e3 * (Number.parseFloat(l) + Number.parseFloat(c))) : 0;
        })(e) + 5;
        let r = !1;
        const o = ({ target: a }) => {
          a === e && (r = !0, e.removeEventListener(W, o), R(n));
        };
        e.addEventListener(W, o), setTimeout(() => {
          r || ye(e);
        }, i);
      }, lt = (n, e, t, i) => {
        const r = n.length;
        let o = n.indexOf(e);
        return o === -1 ? !t && i ? n[r - 1] : n[0] : (o += t ? 1 : -1, i && (o = (o + r) % r), n[Math.max(0, Math.min(o, r - 1))]);
      }, en = /[^.]*(?=\..*)\.|.*/, tn = /\..*/, nn = /::\d+$/, He = {};
      let kt = 1;
      const St = { mouseenter: "mouseover", mouseleave: "mouseout" }, ct = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
      function ut(n, e) {
        return e && `${e}::${kt++}` || n.uidEvent || kt++;
      }
      function jt(n) {
        const e = ut(n);
        return n.uidEvent = e, He[e] = He[e] || {}, He[e];
      }
      function Be(n, e, t = null) {
        return Object.values(n).find((i) => i.callable === e && i.delegationSelector === t);
      }
      function ht(n, e, t) {
        const i = typeof e == "string", r = i ? t : e || t;
        let o = ft(n);
        return ct.has(o) || (o = n), [i, r, o];
      }
      function dt(n, e, t, i, r) {
        if (typeof e != "string" || !n) return;
        let [o, a, l] = ht(e, t, i);
        e in St && (a = ((_) => function(m) {
          if (!m.relatedTarget || m.relatedTarget !== m.delegateTarget && !m.delegateTarget.contains(m.relatedTarget)) return _.call(this, m);
        })(a));
        const c = jt(n), d = c[l] || (c[l] = {}), f = Be(d, a, o ? t : null);
        if (f) return void (f.oneOff = f.oneOff && r);
        const u = ut(a, e.replace(en, "")), y = o ? /* @__PURE__ */ function(p, _, m) {
          return function b(O) {
            const N = p.querySelectorAll(_);
            for (let { target: E } = O; E && E !== this; E = E.parentNode) for (const x of N) if (x === E) return v(O, { delegateTarget: E }), b.oneOff && s.off(p, O.type, _, m), m.apply(E, [O]);
          };
        }(n, t, a) : /* @__PURE__ */ function(p, _) {
          return function m(b) {
            return v(b, { delegateTarget: p }), m.oneOff && s.off(p, b.type, _), _.apply(p, [b]);
          };
        }(n, a);
        y.delegationSelector = o ? t : null, y.callable = a, y.oneOff = r, y.uidEvent = u, d[u] = y, n.addEventListener(l, y, o);
      }
      function ze(n, e, t, i, r) {
        const o = Be(e[t], i, r);
        o && (n.removeEventListener(t, o, !!r), delete e[t][o.uidEvent]);
      }
      function Nt(n, e, t, i) {
        const r = e[t] || {};
        for (const [o, a] of Object.entries(r)) o.includes(i) && ze(n, e, t, a.callable, a.delegationSelector);
      }
      function ft(n) {
        return n = n.replace(tn, ""), St[n] || n;
      }
      const s = { on(n, e, t, i) {
        dt(n, e, t, i, !1);
      }, one(n, e, t, i) {
        dt(n, e, t, i, !0);
      }, off(n, e, t, i) {
        if (typeof e != "string" || !n) return;
        const [r, o, a] = ht(e, t, i), l = a !== e, c = jt(n), d = c[a] || {}, f = e.startsWith(".");
        if (o === void 0) {
          if (f) for (const u of Object.keys(c)) Nt(n, c, u, e.slice(1));
          for (const [u, y] of Object.entries(d)) {
            const p = u.replace(nn, "");
            l && !e.includes(p) || ze(n, c, a, y.callable, y.delegationSelector);
          }
        } else {
          if (!Object.keys(d).length) return;
          ze(n, c, a, o, r ? t : null);
        }
      }, trigger(n, e, t) {
        if (typeof e != "string" || !n) return null;
        const i = Ct();
        let r = null, o = !0, a = !0, l = !1;
        e !== ft(e) && i && (r = i.Event(e, t), i(n).trigger(r), o = !r.isPropagationStopped(), a = !r.isImmediatePropagationStopped(), l = r.isDefaultPrevented());
        const c = v(new Event(e, { bubbles: o, cancelable: !0 }), t);
        return l && c.preventDefault(), a && n.dispatchEvent(c), c.defaultPrevented && r && r.preventDefault(), c;
      } };
      function v(n, e = {}) {
        for (const [t, i] of Object.entries(e)) try {
          n[t] = i;
        } catch {
          Object.defineProperty(n, t, { configurable: !0, get: () => i });
        }
        return n;
      }
      function j(n) {
        if (n === "true") return !0;
        if (n === "false") return !1;
        if (n === Number(n).toString()) return Number(n);
        if (n === "" || n === "null") return null;
        if (typeof n != "string") return n;
        try {
          return JSON.parse(decodeURIComponent(n));
        } catch {
          return n;
        }
      }
      function P(n) {
        return n.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
      }
      const $ = { setDataAttribute(n, e, t) {
        n.setAttribute(`data-bs-${P(e)}`, t);
      }, removeDataAttribute(n, e) {
        n.removeAttribute(`data-bs-${P(e)}`);
      }, getDataAttributes(n) {
        if (!n) return {};
        const e = {}, t = Object.keys(n.dataset).filter((i) => i.startsWith("bs") && !i.startsWith("bsConfig"));
        for (const i of t) {
          let r = i.replace(/^bs/, "");
          r = r.charAt(0).toLowerCase() + r.slice(1), e[r] = j(n.dataset[i]);
        }
        return e;
      }, getDataAttribute: (n, e) => j(n.getAttribute(`data-bs-${P(e)}`)) };
      class F {
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(e) {
          return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
        }
        _configAfterMerge(e) {
          return e;
        }
        _mergeConfigObj(e, t) {
          const i = H(t) ? $.getDataAttribute(t, "config") : {};
          return { ...this.constructor.Default, ...typeof i == "object" ? i : {}, ...H(t) ? $.getDataAttributes(t) : {}, ...typeof e == "object" ? e : {} };
        }
        _typeCheckConfig(e, t = this.constructor.DefaultType) {
          for (const [r, o] of Object.entries(t)) {
            const a = e[r], l = H(a) ? "element" : (i = a) == null ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(o).test(l)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${l}" but expected type "${o}".`);
          }
          var i;
        }
      }
      class B extends F {
        constructor(e, t) {
          super(), (e = he(e)) && (this._element = e, this._config = this._getConfig(t), oe.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
          oe.remove(this._element, this.constructor.DATA_KEY), s.off(this._element, this.constructor.EVENT_KEY);
          for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
        }
        _queueCallback(e, t, i = !0) {
          Ot(e, t, i);
        }
        _getConfig(e) {
          return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
        }
        static getInstance(e) {
          return oe.get(he(e), this.DATA_KEY);
        }
        static getOrCreateInstance(e, t = {}) {
          return this.getInstance(e) || new this(e, typeof t == "object" ? t : null);
        }
        static get VERSION() {
          return "5.3.6";
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(e) {
          return `${e}${this.EVENT_KEY}`;
        }
      }
      const Se = (n) => {
        let e = n.getAttribute("data-bs-target");
        if (!e || e === "#") {
          let t = n.getAttribute("href");
          if (!t || !t.includes("#") && !t.startsWith(".")) return null;
          t.includes("#") && !t.startsWith("#") && (t = `#${t.split("#")[1]}`), e = t && t !== "#" ? t.trim() : null;
        }
        return e ? e.split(",").map((t) => Q(t)).join(",") : null;
      }, h = { find: (n, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, n)), findOne: (n, e = document.documentElement) => Element.prototype.querySelector.call(e, n), children: (n, e) => [].concat(...n.children).filter((t) => t.matches(e)), parents(n, e) {
        const t = [];
        let i = n.parentNode.closest(e);
        for (; i; ) t.push(i), i = i.parentNode.closest(e);
        return t;
      }, prev(n, e) {
        let t = n.previousElementSibling;
        for (; t; ) {
          if (t.matches(e)) return [t];
          t = t.previousElementSibling;
        }
        return [];
      }, next(n, e) {
        let t = n.nextElementSibling;
        for (; t; ) {
          if (t.matches(e)) return [t];
          t = t.nextElementSibling;
        }
        return [];
      }, focusableChildren(n) {
        const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t) => `${t}:not([tabindex^="-"])`).join(",");
        return this.find(e, n).filter((t) => !ae(t) && we(t));
      }, getSelectorFromElement(n) {
        const e = Se(n);
        return e && h.findOne(e) ? e : null;
      }, getElementFromSelector(n) {
        const e = Se(n);
        return e ? h.findOne(e) : null;
      }, getMultipleElementsFromSelector(n) {
        const e = Se(n);
        return e ? h.find(e) : [];
      } }, le = (n, e = "hide") => {
        const t = `click.dismiss${n.EVENT_KEY}`, i = n.NAME;
        s.on(document, t, `[data-bs-dismiss="${i}"]`, function(r) {
          if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), ae(this)) return;
          const o = h.getElementFromSelector(this) || this.closest(`.${i}`);
          n.getOrCreateInstance(o)[e]();
        });
      }, qe = ".bs.alert", sn = `close${qe}`, ys = `closed${qe}`;
      class pt extends B {
        static get NAME() {
          return "alert";
        }
        close() {
          if (s.trigger(this._element, sn).defaultPrevented) return;
          this._element.classList.remove("show");
          const e = this._element.classList.contains("fade");
          this._queueCallback(() => this._destroyElement(), this._element, e);
        }
        _destroyElement() {
          this._element.remove(), s.trigger(this._element, ys), this.dispose();
        }
        static jQueryInterface(e) {
          return this.each(function() {
            const t = pt.getOrCreateInstance(this);
            if (typeof e == "string") {
              if (t[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      le(pt, "close"), X(pt);
      const Fn = '[data-bs-toggle="button"]';
      class mt extends B {
        static get NAME() {
          return "button";
        }
        toggle() {
          this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(e) {
          return this.each(function() {
            const t = mt.getOrCreateInstance(this);
            e === "toggle" && t[e]();
          });
        }
      }
      s.on(document, "click.bs.button.data-api", Fn, (n) => {
        n.preventDefault();
        const e = n.target.closest(Fn);
        mt.getOrCreateInstance(e).toggle();
      }), X(mt);
      const Ve = ".bs.swipe", ws = `touchstart${Ve}`, Es = `touchmove${Ve}`, As = `touchend${Ve}`, xs = `pointerdown${Ve}`, Ts = `pointerup${Ve}`, Cs = { endCallback: null, leftCallback: null, rightCallback: null }, Os = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
      class Lt extends F {
        constructor(e, t) {
          super(), this._element = e, e && Lt.isSupported() && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
        }
        static get Default() {
          return Cs;
        }
        static get DefaultType() {
          return Os;
        }
        static get NAME() {
          return "swipe";
        }
        dispose() {
          s.off(this._element, Ve);
        }
        _start(e) {
          this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX;
        }
        _end(e) {
          this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), R(this._config.endCallback);
        }
        _move(e) {
          this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
          const e = Math.abs(this._deltaX);
          if (e <= 40) return;
          const t = e / this._deltaX;
          this._deltaX = 0, t && R(t > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
          this._supportPointerEvents ? (s.on(this._element, xs, (e) => this._start(e)), s.on(this._element, Ts, (e) => this._end(e)), this._element.classList.add("pointer-event")) : (s.on(this._element, ws, (e) => this._start(e)), s.on(this._element, Es, (e) => this._move(e)), s.on(this._element, As, (e) => this._end(e)));
        }
        _eventIsPointerPenTouch(e) {
          return this._supportPointerEvents && (e.pointerType === "pen" || e.pointerType === "touch");
        }
        static isSupported() {
          return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
      }
      const Ae = ".bs.carousel", Wn = ".data-api", ks = "ArrowLeft", Ss = "ArrowRight", gt = "next", Ye = "prev", Ue = "left", Dt = "right", js = `slide${Ae}`, rn = `slid${Ae}`, Ns = `keydown${Ae}`, Ls = `mouseenter${Ae}`, Ds = `mouseleave${Ae}`, Ps = `dragstart${Ae}`, $s = `load${Ae}${Wn}`, Is = `click${Ae}${Wn}`, Hn = "carousel", Pt = "active", Bn = ".active", zn = ".carousel-item", Ms = Bn + zn, Rs = { [ks]: Dt, [Ss]: Ue }, Fs = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 }, Ws = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
      class Xe extends B {
        constructor(e, t) {
          super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = h.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === Hn && this.cycle();
        }
        static get Default() {
          return Fs;
        }
        static get DefaultType() {
          return Ws;
        }
        static get NAME() {
          return "carousel";
        }
        next() {
          this._slide(gt);
        }
        nextWhenVisible() {
          !document.hidden && we(this._element) && this.next();
        }
        prev() {
          this._slide(Ye);
        }
        pause() {
          this._isSliding && ye(this._element), this._clearInterval();
        }
        cycle() {
          this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
          this._config.ride && (this._isSliding ? s.one(this._element, rn, () => this.cycle()) : this.cycle());
        }
        to(e) {
          const t = this._getItems();
          if (e > t.length - 1 || e < 0) return;
          if (this._isSliding) return void s.one(this._element, rn, () => this.to(e));
          const i = this._getItemIndex(this._getActive());
          if (i === e) return;
          const r = e > i ? gt : Ye;
          this._slide(r, t[e]);
        }
        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(e) {
          return e.defaultInterval = e.interval, e;
        }
        _addEventListeners() {
          this._config.keyboard && s.on(this._element, Ns, (e) => this._keydown(e)), this._config.pause === "hover" && (s.on(this._element, Ls, () => this.pause()), s.on(this._element, Ds, () => this._maybeEnableCycle())), this._config.touch && Lt.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
          for (const t of h.find(".carousel-item img", this._element)) s.on(t, Ps, (i) => i.preventDefault());
          const e = { leftCallback: () => this._slide(this._directionToOrder(Ue)), rightCallback: () => this._slide(this._directionToOrder(Dt)), endCallback: () => {
            this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
          } };
          this._swipeHelper = new Lt(this._element, e);
        }
        _keydown(e) {
          if (/input|textarea/i.test(e.target.tagName)) return;
          const t = Rs[e.key];
          t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
        }
        _getItemIndex(e) {
          return this._getItems().indexOf(e);
        }
        _setActiveIndicatorElement(e) {
          if (!this._indicatorsElement) return;
          const t = h.findOne(Bn, this._indicatorsElement);
          t.classList.remove(Pt), t.removeAttribute("aria-current");
          const i = h.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
          i && (i.classList.add(Pt), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
          const e = this._activeElement || this._getActive();
          if (!e) return;
          const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
          this._config.interval = t || this._config.defaultInterval;
        }
        _slide(e, t = null) {
          if (this._isSliding) return;
          const i = this._getActive(), r = e === gt, o = t || lt(this._getItems(), i, r, this._config.wrap);
          if (o === i) return;
          const a = this._getItemIndex(o), l = (u) => s.trigger(this._element, u, { relatedTarget: o, direction: this._orderToDirection(e), from: this._getItemIndex(i), to: a });
          if (l(js).defaultPrevented || !i || !o) return;
          const c = !!this._interval;
          this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(a), this._activeElement = o;
          const d = r ? "carousel-item-start" : "carousel-item-end", f = r ? "carousel-item-next" : "carousel-item-prev";
          o.classList.add(f), Ee(o), i.classList.add(d), o.classList.add(d), this._queueCallback(() => {
            o.classList.remove(d, f), o.classList.add(Pt), i.classList.remove(Pt, f, d), this._isSliding = !1, l(rn);
          }, i, this._isAnimated()), c && this.cycle();
        }
        _isAnimated() {
          return this._element.classList.contains("slide");
        }
        _getActive() {
          return h.findOne(Ms, this._element);
        }
        _getItems() {
          return h.find(zn, this._element);
        }
        _clearInterval() {
          this._interval && (clearInterval(this._interval), this._interval = null);
        }
        _directionToOrder(e) {
          return U() ? e === Ue ? Ye : gt : e === Ue ? gt : Ye;
        }
        _orderToDirection(e) {
          return U() ? e === Ye ? Ue : Dt : e === Ye ? Dt : Ue;
        }
        static jQueryInterface(e) {
          return this.each(function() {
            const t = Xe.getOrCreateInstance(this, e);
            if (typeof e != "number") {
              if (typeof e == "string") {
                if (t[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
                t[e]();
              }
            } else t.to(e);
          });
        }
      }
      s.on(document, Is, "[data-bs-slide], [data-bs-slide-to]", function(n) {
        const e = h.getElementFromSelector(this);
        if (!e || !e.classList.contains(Hn)) return;
        n.preventDefault();
        const t = Xe.getOrCreateInstance(e), i = this.getAttribute("data-bs-slide-to");
        return i ? (t.to(i), void t._maybeEnableCycle()) : $.getDataAttribute(this, "slide") === "next" ? (t.next(), void t._maybeEnableCycle()) : (t.prev(), void t._maybeEnableCycle());
      }), s.on(window, $s, () => {
        const n = h.find('[data-bs-ride="carousel"]');
        for (const e of n) Xe.getOrCreateInstance(e);
      }), X(Xe);
      const _t = ".bs.collapse", Hs = `show${_t}`, Bs = `shown${_t}`, zs = `hide${_t}`, qs = `hidden${_t}`, Vs = `click${_t}.data-api`, on = "show", Qe = "collapse", $t = "collapsing", Ys = `:scope .${Qe} .${Qe}`, an = '[data-bs-toggle="collapse"]', Us = { parent: null, toggle: !0 }, Xs = { parent: "(null|element)", toggle: "boolean" };
      class Ke extends B {
        constructor(e, t) {
          super(e, t), this._isTransitioning = !1, this._triggerArray = [];
          const i = h.find(an);
          for (const r of i) {
            const o = h.getSelectorFromElement(r), a = h.find(o).filter((l) => l === this._element);
            o !== null && a.length && this._triggerArray.push(r);
          }
          this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
          return Us;
        }
        static get DefaultType() {
          return Xs;
        }
        static get NAME() {
          return "collapse";
        }
        toggle() {
          this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._isShown()) return;
          let e = [];
          if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((r) => r !== this._element).map((r) => Ke.getOrCreateInstance(r, { toggle: !1 }))), e.length && e[0]._isTransitioning || s.trigger(this._element, Hs).defaultPrevented) return;
          for (const r of e) r.hide();
          const t = this._getDimension();
          this._element.classList.remove(Qe), this._element.classList.add($t), this._element.style[t] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
          const i = `scroll${t[0].toUpperCase() + t.slice(1)}`;
          this._queueCallback(() => {
            this._isTransitioning = !1, this._element.classList.remove($t), this._element.classList.add(Qe, on), this._element.style[t] = "", s.trigger(this._element, Bs);
          }, this._element, !0), this._element.style[t] = `${this._element[i]}px`;
        }
        hide() {
          if (this._isTransitioning || !this._isShown() || s.trigger(this._element, zs).defaultPrevented) return;
          const e = this._getDimension();
          this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Ee(this._element), this._element.classList.add($t), this._element.classList.remove(Qe, on);
          for (const t of this._triggerArray) {
            const i = h.getElementFromSelector(t);
            i && !this._isShown(i) && this._addAriaAndCollapsedClass([t], !1);
          }
          this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback(() => {
            this._isTransitioning = !1, this._element.classList.remove($t), this._element.classList.add(Qe), s.trigger(this._element, qs);
          }, this._element, !0);
        }
        _isShown(e = this._element) {
          return e.classList.contains(on);
        }
        _configAfterMerge(e) {
          return e.toggle = !!e.toggle, e.parent = he(e.parent), e;
        }
        _getDimension() {
          return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
          if (!this._config.parent) return;
          const e = this._getFirstLevelChildren(an);
          for (const t of e) {
            const i = h.getElementFromSelector(t);
            i && this._addAriaAndCollapsedClass([t], this._isShown(i));
          }
        }
        _getFirstLevelChildren(e) {
          const t = h.find(Ys, this._config.parent);
          return h.find(e, this._config.parent).filter((i) => !t.includes(i));
        }
        _addAriaAndCollapsedClass(e, t) {
          if (e.length) for (const i of e) i.classList.toggle("collapsed", !t), i.setAttribute("aria-expanded", t);
        }
        static jQueryInterface(e) {
          const t = {};
          return typeof e == "string" && /show|hide/.test(e) && (t.toggle = !1), this.each(function() {
            const i = Ke.getOrCreateInstance(this, t);
            if (typeof e == "string") {
              if (i[e] === void 0) throw new TypeError(`No method named "${e}"`);
              i[e]();
            }
          });
        }
      }
      s.on(document, Vs, an, function(n) {
        (n.target.tagName === "A" || n.delegateTarget && n.delegateTarget.tagName === "A") && n.preventDefault();
        for (const e of h.getMultipleElementsFromSelector(this)) Ke.getOrCreateInstance(e, { toggle: !1 }).toggle();
      }), X(Ke);
      var z = "top", K = "bottom", J = "right", q = "left", It = "auto", Je = [z, K, J, q], je = "start", Ge = "end", qn = "clippingParents", ln = "viewport", Ze = "popper", Vn = "reference", cn = Je.reduce(function(n, e) {
        return n.concat([e + "-" + je, e + "-" + Ge]);
      }, []), un = [].concat(Je, [It]).reduce(function(n, e) {
        return n.concat([e, e + "-" + je, e + "-" + Ge]);
      }, []), Yn = "beforeRead", Un = "read", Xn = "afterRead", Qn = "beforeMain", Kn = "main", Jn = "afterMain", Gn = "beforeWrite", Zn = "write", ei = "afterWrite", ti = [Yn, Un, Xn, Qn, Kn, Jn, Gn, Zn, ei];
      function de(n) {
        return n ? (n.nodeName || "").toLowerCase() : null;
      }
      function G(n) {
        if (n == null) return window;
        if (n.toString() !== "[object Window]") {
          var e = n.ownerDocument;
          return e && e.defaultView || window;
        }
        return n;
      }
      function Ne(n) {
        return n instanceof G(n).Element || n instanceof Element;
      }
      function ee(n) {
        return n instanceof G(n).HTMLElement || n instanceof HTMLElement;
      }
      function hn(n) {
        return typeof ShadowRoot < "u" && (n instanceof G(n).ShadowRoot || n instanceof ShadowRoot);
      }
      const dn = { name: "applyStyles", enabled: !0, phase: "write", fn: function(n) {
        var e = n.state;
        Object.keys(e.elements).forEach(function(t) {
          var i = e.styles[t] || {}, r = e.attributes[t] || {}, o = e.elements[t];
          ee(o) && de(o) && (Object.assign(o.style, i), Object.keys(r).forEach(function(a) {
            var l = r[a];
            l === !1 ? o.removeAttribute(a) : o.setAttribute(a, l === !0 ? "" : l);
          }));
        });
      }, effect: function(n) {
        var e = n.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
        return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
          Object.keys(e.elements).forEach(function(i) {
            var r = e.elements[i], o = e.attributes[i] || {}, a = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]).reduce(function(l, c) {
              return l[c] = "", l;
            }, {});
            ee(r) && de(r) && (Object.assign(r.style, a), Object.keys(o).forEach(function(l) {
              r.removeAttribute(l);
            }));
          });
        };
      }, requires: ["computeStyles"] };
      function fe(n) {
        return n.split("-")[0];
      }
      var Le = Math.max, Mt = Math.min, et = Math.round;
      function fn() {
        var n = navigator.userAgentData;
        return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(e) {
          return e.brand + "/" + e.version;
        }).join(" ") : navigator.userAgent;
      }
      function ni() {
        return !/^((?!chrome|android).)*safari/i.test(fn());
      }
      function tt(n, e, t) {
        e === void 0 && (e = !1), t === void 0 && (t = !1);
        var i = n.getBoundingClientRect(), r = 1, o = 1;
        e && ee(n) && (r = n.offsetWidth > 0 && et(i.width) / n.offsetWidth || 1, o = n.offsetHeight > 0 && et(i.height) / n.offsetHeight || 1);
        var a = (Ne(n) ? G(n) : window).visualViewport, l = !ni() && t, c = (i.left + (l && a ? a.offsetLeft : 0)) / r, d = (i.top + (l && a ? a.offsetTop : 0)) / o, f = i.width / r, u = i.height / o;
        return { width: f, height: u, top: d, right: c + f, bottom: d + u, left: c, x: c, y: d };
      }
      function pn(n) {
        var e = tt(n), t = n.offsetWidth, i = n.offsetHeight;
        return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: n.offsetLeft, y: n.offsetTop, width: t, height: i };
      }
      function ii(n, e) {
        var t = e.getRootNode && e.getRootNode();
        if (n.contains(e)) return !0;
        if (t && hn(t)) {
          var i = e;
          do {
            if (i && n.isSameNode(i)) return !0;
            i = i.parentNode || i.host;
          } while (i);
        }
        return !1;
      }
      function _e(n) {
        return G(n).getComputedStyle(n);
      }
      function Qs(n) {
        return ["table", "td", "th"].indexOf(de(n)) >= 0;
      }
      function xe(n) {
        return ((Ne(n) ? n.ownerDocument : n.document) || window.document).documentElement;
      }
      function Rt(n) {
        return de(n) === "html" ? n : n.assignedSlot || n.parentNode || (hn(n) ? n.host : null) || xe(n);
      }
      function si(n) {
        return ee(n) && _e(n).position !== "fixed" ? n.offsetParent : null;
      }
      function bt(n) {
        for (var e = G(n), t = si(n); t && Qs(t) && _e(t).position === "static"; ) t = si(t);
        return t && (de(t) === "html" || de(t) === "body" && _e(t).position === "static") ? e : t || function(i) {
          var r = /firefox/i.test(fn());
          if (/Trident/i.test(fn()) && ee(i) && _e(i).position === "fixed") return null;
          var o = Rt(i);
          for (hn(o) && (o = o.host); ee(o) && ["html", "body"].indexOf(de(o)) < 0; ) {
            var a = _e(o);
            if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || r && a.willChange === "filter" || r && a.filter && a.filter !== "none") return o;
            o = o.parentNode;
          }
          return null;
        }(n) || e;
      }
      function mn(n) {
        return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
      }
      function vt(n, e, t) {
        return Le(n, Mt(e, t));
      }
      function ri(n) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, n);
      }
      function oi(n, e) {
        return e.reduce(function(t, i) {
          return t[i] = n, t;
        }, {});
      }
      const ai = { name: "arrow", enabled: !0, phase: "main", fn: function(n) {
        var e, t = n.state, i = n.name, r = n.options, o = t.elements.arrow, a = t.modifiersData.popperOffsets, l = fe(t.placement), c = mn(l), d = [q, J].indexOf(l) >= 0 ? "height" : "width";
        if (o && a) {
          var f = function(k, C) {
            return ri(typeof (k = typeof k == "function" ? k(Object.assign({}, C.rects, { placement: C.placement })) : k) != "number" ? k : oi(k, Je));
          }(r.padding, t), u = pn(o), y = c === "y" ? z : q, p = c === "y" ? K : J, _ = t.rects.reference[d] + t.rects.reference[c] - a[c] - t.rects.popper[d], m = a[c] - t.rects.reference[c], b = bt(o), O = b ? c === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, N = _ / 2 - m / 2, E = f[y], x = O - u[d] - f[p], w = O / 2 - u[d] / 2 + N, A = vt(E, w, x), T = c;
          t.modifiersData[i] = ((e = {})[T] = A, e.centerOffset = A - w, e);
        }
      }, effect: function(n) {
        var e = n.state, t = n.options.element, i = t === void 0 ? "[data-popper-arrow]" : t;
        i != null && (typeof i != "string" || (i = e.elements.popper.querySelector(i))) && ii(e.elements.popper, i) && (e.elements.arrow = i);
      }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
      function nt(n) {
        return n.split("-")[1];
      }
      var Ks = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function li(n) {
        var e, t = n.popper, i = n.popperRect, r = n.placement, o = n.variation, a = n.offsets, l = n.position, c = n.gpuAcceleration, d = n.adaptive, f = n.roundOffsets, u = n.isFixed, y = a.x, p = y === void 0 ? 0 : y, _ = a.y, m = _ === void 0 ? 0 : _, b = typeof f == "function" ? f({ x: p, y: m }) : { x: p, y: m };
        p = b.x, m = b.y;
        var O = a.hasOwnProperty("x"), N = a.hasOwnProperty("y"), E = q, x = z, w = window;
        if (d) {
          var A = bt(t), T = "clientHeight", k = "clientWidth";
          A === G(t) && _e(A = xe(t)).position !== "static" && l === "absolute" && (T = "scrollHeight", k = "scrollWidth"), (r === z || (r === q || r === J) && o === Ge) && (x = K, m -= (u && A === w && w.visualViewport ? w.visualViewport.height : A[T]) - i.height, m *= c ? 1 : -1), r !== q && (r !== z && r !== K || o !== Ge) || (E = J, p -= (u && A === w && w.visualViewport ? w.visualViewport.width : A[k]) - i.width, p *= c ? 1 : -1);
        }
        var C, D = Object.assign({ position: l }, d && Ks), Z = f === !0 ? function(ue, V) {
          var ne = ue.x, ie = ue.y, L = V.devicePixelRatio || 1;
          return { x: et(ne * L) / L || 0, y: et(ie * L) / L || 0 };
        }({ x: p, y: m }, G(t)) : { x: p, y: m };
        return p = Z.x, m = Z.y, c ? Object.assign({}, D, ((C = {})[x] = N ? "0" : "", C[E] = O ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", C)) : Object.assign({}, D, ((e = {})[x] = N ? m + "px" : "", e[E] = O ? p + "px" : "", e.transform = "", e));
      }
      const gn = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function(n) {
        var e = n.state, t = n.options, i = t.gpuAcceleration, r = i === void 0 || i, o = t.adaptive, a = o === void 0 || o, l = t.roundOffsets, c = l === void 0 || l, d = { placement: fe(e.placement), variation: nt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: r, isFixed: e.options.strategy === "fixed" };
        e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, li(Object.assign({}, d, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: a, roundOffsets: c })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, li(Object.assign({}, d, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
      }, data: {} };
      var Ft = { passive: !0 };
      const _n = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
      }, effect: function(n) {
        var e = n.state, t = n.instance, i = n.options, r = i.scroll, o = r === void 0 || r, a = i.resize, l = a === void 0 || a, c = G(e.elements.popper), d = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return o && d.forEach(function(f) {
          f.addEventListener("scroll", t.update, Ft);
        }), l && c.addEventListener("resize", t.update, Ft), function() {
          o && d.forEach(function(f) {
            f.removeEventListener("scroll", t.update, Ft);
          }), l && c.removeEventListener("resize", t.update, Ft);
        };
      }, data: {} };
      var Js = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Wt(n) {
        return n.replace(/left|right|bottom|top/g, function(e) {
          return Js[e];
        });
      }
      var Gs = { start: "end", end: "start" };
      function ci(n) {
        return n.replace(/start|end/g, function(e) {
          return Gs[e];
        });
      }
      function bn(n) {
        var e = G(n);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function vn(n) {
        return tt(xe(n)).left + bn(n).scrollLeft;
      }
      function yn(n) {
        var e = _e(n), t = e.overflow, i = e.overflowX, r = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(t + r + i);
      }
      function ui(n) {
        return ["html", "body", "#document"].indexOf(de(n)) >= 0 ? n.ownerDocument.body : ee(n) && yn(n) ? n : ui(Rt(n));
      }
      function yt(n, e) {
        var t;
        e === void 0 && (e = []);
        var i = ui(n), r = i === ((t = n.ownerDocument) == null ? void 0 : t.body), o = G(i), a = r ? [o].concat(o.visualViewport || [], yn(i) ? i : []) : i, l = e.concat(a);
        return r ? l : l.concat(yt(Rt(a)));
      }
      function wn(n) {
        return Object.assign({}, n, { left: n.x, top: n.y, right: n.x + n.width, bottom: n.y + n.height });
      }
      function hi(n, e, t) {
        return e === ln ? wn(function(i, r) {
          var o = G(i), a = xe(i), l = o.visualViewport, c = a.clientWidth, d = a.clientHeight, f = 0, u = 0;
          if (l) {
            c = l.width, d = l.height;
            var y = ni();
            (y || !y && r === "fixed") && (f = l.offsetLeft, u = l.offsetTop);
          }
          return { width: c, height: d, x: f + vn(i), y: u };
        }(n, t)) : Ne(e) ? function(i, r) {
          var o = tt(i, !1, r === "fixed");
          return o.top = o.top + i.clientTop, o.left = o.left + i.clientLeft, o.bottom = o.top + i.clientHeight, o.right = o.left + i.clientWidth, o.width = i.clientWidth, o.height = i.clientHeight, o.x = o.left, o.y = o.top, o;
        }(e, t) : wn(function(i) {
          var r, o = xe(i), a = bn(i), l = (r = i.ownerDocument) == null ? void 0 : r.body, c = Le(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), d = Le(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), f = -a.scrollLeft + vn(i), u = -a.scrollTop;
          return _e(l || o).direction === "rtl" && (f += Le(o.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: d, x: f, y: u };
        }(xe(n)));
      }
      function di(n) {
        var e, t = n.reference, i = n.element, r = n.placement, o = r ? fe(r) : null, a = r ? nt(r) : null, l = t.x + t.width / 2 - i.width / 2, c = t.y + t.height / 2 - i.height / 2;
        switch (o) {
          case z:
            e = { x: l, y: t.y - i.height };
            break;
          case K:
            e = { x: l, y: t.y + t.height };
            break;
          case J:
            e = { x: t.x + t.width, y: c };
            break;
          case q:
            e = { x: t.x - i.width, y: c };
            break;
          default:
            e = { x: t.x, y: t.y };
        }
        var d = o ? mn(o) : null;
        if (d != null) {
          var f = d === "y" ? "height" : "width";
          switch (a) {
            case je:
              e[d] = e[d] - (t[f] / 2 - i[f] / 2);
              break;
            case Ge:
              e[d] = e[d] + (t[f] / 2 - i[f] / 2);
          }
        }
        return e;
      }
      function it(n, e) {
        e === void 0 && (e = {});
        var t = e, i = t.placement, r = i === void 0 ? n.placement : i, o = t.strategy, a = o === void 0 ? n.strategy : o, l = t.boundary, c = l === void 0 ? qn : l, d = t.rootBoundary, f = d === void 0 ? ln : d, u = t.elementContext, y = u === void 0 ? Ze : u, p = t.altBoundary, _ = p !== void 0 && p, m = t.padding, b = m === void 0 ? 0 : m, O = ri(typeof b != "number" ? b : oi(b, Je)), N = y === Ze ? Vn : Ze, E = n.rects.popper, x = n.elements[_ ? N : y], w = function(V, ne, ie, L) {
          var pe = ne === "clippingParents" ? function(S) {
            var Y = yt(Rt(S)), se = ["absolute", "fixed"].indexOf(_e(S).position) >= 0 && ee(S) ? bt(S) : S;
            return Ne(se) ? Y.filter(function(Ce) {
              return Ne(Ce) && ii(Ce, se) && de(Ce) !== "body";
            }) : [];
          }(V) : [].concat(ne), me = [].concat(pe, [ie]), ot = me[0], I = me.reduce(function(S, Y) {
            var se = hi(V, Y, L);
            return S.top = Le(se.top, S.top), S.right = Mt(se.right, S.right), S.bottom = Mt(se.bottom, S.bottom), S.left = Le(se.left, S.left), S;
          }, hi(V, ot, L));
          return I.width = I.right - I.left, I.height = I.bottom - I.top, I.x = I.left, I.y = I.top, I;
        }(Ne(x) ? x : x.contextElement || xe(n.elements.popper), c, f, a), A = tt(n.elements.reference), T = di({ reference: A, element: E, placement: r }), k = wn(Object.assign({}, E, T)), C = y === Ze ? k : A, D = { top: w.top - C.top + O.top, bottom: C.bottom - w.bottom + O.bottom, left: w.left - C.left + O.left, right: C.right - w.right + O.right }, Z = n.modifiersData.offset;
        if (y === Ze && Z) {
          var ue = Z[r];
          Object.keys(D).forEach(function(V) {
            var ne = [J, K].indexOf(V) >= 0 ? 1 : -1, ie = [z, K].indexOf(V) >= 0 ? "y" : "x";
            D[V] += ue[ie] * ne;
          });
        }
        return D;
      }
      function Zs(n, e) {
        e === void 0 && (e = {});
        var t = e, i = t.placement, r = t.boundary, o = t.rootBoundary, a = t.padding, l = t.flipVariations, c = t.allowedAutoPlacements, d = c === void 0 ? un : c, f = nt(i), u = f ? l ? cn : cn.filter(function(_) {
          return nt(_) === f;
        }) : Je, y = u.filter(function(_) {
          return d.indexOf(_) >= 0;
        });
        y.length === 0 && (y = u);
        var p = y.reduce(function(_, m) {
          return _[m] = it(n, { placement: m, boundary: r, rootBoundary: o, padding: a })[fe(m)], _;
        }, {});
        return Object.keys(p).sort(function(_, m) {
          return p[_] - p[m];
        });
      }
      const fi = { name: "flip", enabled: !0, phase: "main", fn: function(n) {
        var e = n.state, t = n.options, i = n.name;
        if (!e.modifiersData[i]._skip) {
          for (var r = t.mainAxis, o = r === void 0 || r, a = t.altAxis, l = a === void 0 || a, c = t.fallbackPlacements, d = t.padding, f = t.boundary, u = t.rootBoundary, y = t.altBoundary, p = t.flipVariations, _ = p === void 0 || p, m = t.allowedAutoPlacements, b = e.options.placement, O = fe(b), N = c || (O !== b && _ ? function(S) {
            if (fe(S) === It) return [];
            var Y = Wt(S);
            return [ci(S), Y, ci(Y)];
          }(b) : [Wt(b)]), E = [b].concat(N).reduce(function(S, Y) {
            return S.concat(fe(Y) === It ? Zs(e, { placement: Y, boundary: f, rootBoundary: u, padding: d, flipVariations: _, allowedAutoPlacements: m }) : Y);
          }, []), x = e.rects.reference, w = e.rects.popper, A = /* @__PURE__ */ new Map(), T = !0, k = E[0], C = 0; C < E.length; C++) {
            var D = E[C], Z = fe(D), ue = nt(D) === je, V = [z, K].indexOf(Z) >= 0, ne = V ? "width" : "height", ie = it(e, { placement: D, boundary: f, rootBoundary: u, altBoundary: y, padding: d }), L = V ? ue ? J : q : ue ? K : z;
            x[ne] > w[ne] && (L = Wt(L));
            var pe = Wt(L), me = [];
            if (o && me.push(ie[Z] <= 0), l && me.push(ie[L] <= 0, ie[pe] <= 0), me.every(function(S) {
              return S;
            })) {
              k = D, T = !1;
              break;
            }
            A.set(D, me);
          }
          if (T) for (var ot = function(S) {
            var Y = E.find(function(se) {
              var Ce = A.get(se);
              if (Ce) return Ce.slice(0, S).every(function(Qt) {
                return Qt;
              });
            });
            if (Y) return k = Y, "break";
          }, I = _ ? 3 : 1; I > 0 && ot(I) !== "break"; I--) ;
          e.placement !== k && (e.modifiersData[i]._skip = !0, e.placement = k, e.reset = !0);
        }
      }, requiresIfExists: ["offset"], data: { _skip: !1 } };
      function pi(n, e, t) {
        return t === void 0 && (t = { x: 0, y: 0 }), { top: n.top - e.height - t.y, right: n.right - e.width + t.x, bottom: n.bottom - e.height + t.y, left: n.left - e.width - t.x };
      }
      function mi(n) {
        return [z, J, K, q].some(function(e) {
          return n[e] >= 0;
        });
      }
      const gi = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(n) {
        var e = n.state, t = n.name, i = e.rects.reference, r = e.rects.popper, o = e.modifiersData.preventOverflow, a = it(e, { elementContext: "reference" }), l = it(e, { altBoundary: !0 }), c = pi(a, i), d = pi(l, r, o), f = mi(c), u = mi(d);
        e.modifiersData[t] = { referenceClippingOffsets: c, popperEscapeOffsets: d, isReferenceHidden: f, hasPopperEscaped: u }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": u });
      } }, _i = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function(n) {
        var e = n.state, t = n.options, i = n.name, r = t.offset, o = r === void 0 ? [0, 0] : r, a = un.reduce(function(f, u) {
          return f[u] = function(y, p, _) {
            var m = fe(y), b = [q, z].indexOf(m) >= 0 ? -1 : 1, O = typeof _ == "function" ? _(Object.assign({}, p, { placement: y })) : _, N = O[0], E = O[1];
            return N = N || 0, E = (E || 0) * b, [q, J].indexOf(m) >= 0 ? { x: E, y: N } : { x: N, y: E };
          }(u, e.rects, o), f;
        }, {}), l = a[e.placement], c = l.x, d = l.y;
        e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += c, e.modifiersData.popperOffsets.y += d), e.modifiersData[i] = a;
      } }, En = { name: "popperOffsets", enabled: !0, phase: "read", fn: function(n) {
        var e = n.state, t = n.name;
        e.modifiersData[t] = di({ reference: e.rects.reference, element: e.rects.popper, placement: e.placement });
      }, data: {} }, bi = { name: "preventOverflow", enabled: !0, phase: "main", fn: function(n) {
        var e = n.state, t = n.options, i = n.name, r = t.mainAxis, o = r === void 0 || r, a = t.altAxis, l = a !== void 0 && a, c = t.boundary, d = t.rootBoundary, f = t.altBoundary, u = t.padding, y = t.tether, p = y === void 0 || y, _ = t.tetherOffset, m = _ === void 0 ? 0 : _, b = it(e, { boundary: c, rootBoundary: d, padding: u, altBoundary: f }), O = fe(e.placement), N = nt(e.placement), E = !N, x = mn(O), w = x === "x" ? "y" : "x", A = e.modifiersData.popperOffsets, T = e.rects.reference, k = e.rects.popper, C = typeof m == "function" ? m(Object.assign({}, e.rects, { placement: e.placement })) : m, D = typeof C == "number" ? { mainAxis: C, altAxis: C } : Object.assign({ mainAxis: 0, altAxis: 0 }, C), Z = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, ue = { x: 0, y: 0 };
        if (A) {
          if (o) {
            var V, ne = x === "y" ? z : q, ie = x === "y" ? K : J, L = x === "y" ? "height" : "width", pe = A[x], me = pe + b[ne], ot = pe - b[ie], I = p ? -k[L] / 2 : 0, S = N === je ? T[L] : k[L], Y = N === je ? -k[L] : -T[L], se = e.elements.arrow, Ce = p && se ? pn(se) : { width: 0, height: 0 }, Qt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, ss = Qt[ne], rs = Qt[ie], Kt = vt(0, T[L], Ce[L]), Lo = E ? T[L] / 2 - I - Kt - ss - D.mainAxis : S - Kt - ss - D.mainAxis, Do = E ? -T[L] / 2 + I + Kt + rs + D.mainAxis : Y + Kt + rs + D.mainAxis, $n = e.elements.arrow && bt(e.elements.arrow), Po = $n ? x === "y" ? $n.clientTop || 0 : $n.clientLeft || 0 : 0, os = (V = Z == null ? void 0 : Z[x]) != null ? V : 0, $o = pe + Do - os, as = vt(p ? Mt(me, pe + Lo - os - Po) : me, pe, p ? Le(ot, $o) : ot);
            A[x] = as, ue[x] = as - pe;
          }
          if (l) {
            var ls, Io = x === "x" ? z : q, Mo = x === "x" ? K : J, We = A[w], Jt = w === "y" ? "height" : "width", cs = We + b[Io], us = We - b[Mo], In = [z, q].indexOf(O) !== -1, hs = (ls = Z == null ? void 0 : Z[w]) != null ? ls : 0, ds = In ? cs : We - T[Jt] - k[Jt] - hs + D.altAxis, fs = In ? We + T[Jt] + k[Jt] - hs - D.altAxis : us, ps = p && In ? function(Ro, Fo, Mn) {
              var ms = vt(Ro, Fo, Mn);
              return ms > Mn ? Mn : ms;
            }(ds, We, fs) : vt(p ? ds : cs, We, p ? fs : us);
            A[w] = ps, ue[w] = ps - We;
          }
          e.modifiersData[i] = ue;
        }
      }, requiresIfExists: ["offset"] };
      function er(n, e, t) {
        t === void 0 && (t = !1);
        var i, r, o = ee(e), a = ee(e) && function(u) {
          var y = u.getBoundingClientRect(), p = et(y.width) / u.offsetWidth || 1, _ = et(y.height) / u.offsetHeight || 1;
          return p !== 1 || _ !== 1;
        }(e), l = xe(e), c = tt(n, a, t), d = { scrollLeft: 0, scrollTop: 0 }, f = { x: 0, y: 0 };
        return (o || !o && !t) && ((de(e) !== "body" || yn(l)) && (d = (i = e) !== G(i) && ee(i) ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop } : bn(i)), ee(e) ? ((f = tt(e, !0)).x += e.clientLeft, f.y += e.clientTop) : l && (f.x = vn(l))), { x: c.left + d.scrollLeft - f.x, y: c.top + d.scrollTop - f.y, width: c.width, height: c.height };
      }
      function tr(n) {
        var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
        function r(o) {
          t.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach(function(a) {
            if (!t.has(a)) {
              var l = e.get(a);
              l && r(l);
            }
          }), i.push(o);
        }
        return n.forEach(function(o) {
          e.set(o.name, o);
        }), n.forEach(function(o) {
          t.has(o.name) || r(o);
        }), i;
      }
      var vi = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function yi() {
        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
        return !e.some(function(i) {
          return !(i && typeof i.getBoundingClientRect == "function");
        });
      }
      function Ht(n) {
        n === void 0 && (n = {});
        var e = n, t = e.defaultModifiers, i = t === void 0 ? [] : t, r = e.defaultOptions, o = r === void 0 ? vi : r;
        return function(a, l, c) {
          c === void 0 && (c = o);
          var d, f, u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, vi, o), modifiersData: {}, elements: { reference: a, popper: l }, attributes: {}, styles: {} }, y = [], p = !1, _ = { state: u, setOptions: function(b) {
            var O = typeof b == "function" ? b(u.options) : b;
            m(), u.options = Object.assign({}, o, u.options, O), u.scrollParents = { reference: Ne(a) ? yt(a) : a.contextElement ? yt(a.contextElement) : [], popper: yt(l) };
            var N, E, x = function(w) {
              var A = tr(w);
              return ti.reduce(function(T, k) {
                return T.concat(A.filter(function(C) {
                  return C.phase === k;
                }));
              }, []);
            }((N = [].concat(i, u.options.modifiers), E = N.reduce(function(w, A) {
              var T = w[A.name];
              return w[A.name] = T ? Object.assign({}, T, A, { options: Object.assign({}, T.options, A.options), data: Object.assign({}, T.data, A.data) }) : A, w;
            }, {}), Object.keys(E).map(function(w) {
              return E[w];
            })));
            return u.orderedModifiers = x.filter(function(w) {
              return w.enabled;
            }), u.orderedModifiers.forEach(function(w) {
              var A = w.name, T = w.options, k = T === void 0 ? {} : T, C = w.effect;
              if (typeof C == "function") {
                var D = C({ state: u, name: A, instance: _, options: k });
                y.push(D || function() {
                });
              }
            }), _.update();
          }, forceUpdate: function() {
            if (!p) {
              var b = u.elements, O = b.reference, N = b.popper;
              if (yi(O, N)) {
                u.rects = { reference: er(O, bt(N), u.options.strategy === "fixed"), popper: pn(N) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(C) {
                  return u.modifiersData[C.name] = Object.assign({}, C.data);
                });
                for (var E = 0; E < u.orderedModifiers.length; E++) if (u.reset !== !0) {
                  var x = u.orderedModifiers[E], w = x.fn, A = x.options, T = A === void 0 ? {} : A, k = x.name;
                  typeof w == "function" && (u = w({ state: u, options: T, name: k, instance: _ }) || u);
                } else u.reset = !1, E = -1;
              }
            }
          }, update: (d = function() {
            return new Promise(function(b) {
              _.forceUpdate(), b(u);
            });
          }, function() {
            return f || (f = new Promise(function(b) {
              Promise.resolve().then(function() {
                f = void 0, b(d());
              });
            })), f;
          }), destroy: function() {
            m(), p = !0;
          } };
          if (!yi(a, l)) return _;
          function m() {
            y.forEach(function(b) {
              return b();
            }), y = [];
          }
          return _.setOptions(c).then(function(b) {
            !p && c.onFirstUpdate && c.onFirstUpdate(b);
          }), _;
        };
      }
      var nr = Ht(), ir = Ht({ defaultModifiers: [_n, En, gn, dn] }), An = Ht({ defaultModifiers: [_n, En, gn, dn, _i, fi, bi, ai, gi] });
      const wi = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: Jn, afterRead: Xn, afterWrite: ei, applyStyles: dn, arrow: ai, auto: It, basePlacements: Je, beforeMain: Qn, beforeRead: Yn, beforeWrite: Gn, bottom: K, clippingParents: qn, computeStyles: gn, createPopper: An, createPopperBase: nr, createPopperLite: ir, detectOverflow: it, end: Ge, eventListeners: _n, flip: fi, hide: gi, left: q, main: Kn, modifierPhases: ti, offset: _i, placements: un, popper: Ze, popperGenerator: Ht, popperOffsets: En, preventOverflow: bi, read: Un, reference: Vn, right: J, start: je, top: z, variationPlacements: cn, viewport: ln, write: Zn }, Symbol.toStringTag, { value: "Module" })), Ei = "dropdown", De = ".bs.dropdown", xn = ".data-api", sr = "ArrowUp", Ai = "ArrowDown", rr = `hide${De}`, or = `hidden${De}`, ar = `show${De}`, lr = `shown${De}`, xi = `click${De}${xn}`, Ti = `keydown${De}${xn}`, cr = `keyup${De}${xn}`, st = "show", Pe = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', ur = `${Pe}.${st}`, Bt = ".dropdown-menu", hr = U() ? "top-end" : "top-start", dr = U() ? "top-start" : "top-end", fr = U() ? "bottom-end" : "bottom-start", pr = U() ? "bottom-start" : "bottom-end", mr = U() ? "left-start" : "right-start", gr = U() ? "right-start" : "left-start", _r = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, br = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
      class ce extends B {
        constructor(e, t) {
          super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = h.next(this._element, Bt)[0] || h.prev(this._element, Bt)[0] || h.findOne(Bt, this._parent), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
          return _r;
        }
        static get DefaultType() {
          return br;
        }
        static get NAME() {
          return Ei;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (ae(this._element) || this._isShown()) return;
          const e = { relatedTarget: this._element };
          if (!s.trigger(this._element, ar, e).defaultPrevented) {
            if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children)) s.on(t, "mouseover", ge);
            this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(st), this._element.classList.add(st), s.trigger(this._element, lr, e);
          }
        }
        hide() {
          if (ae(this._element) || !this._isShown()) return;
          const e = { relatedTarget: this._element };
          this._completeHide(e);
        }
        dispose() {
          this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
          this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(e) {
          if (!s.trigger(this._element, rr, e).defaultPrevented) {
            if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) s.off(t, "mouseover", ge);
            this._popper && this._popper.destroy(), this._menu.classList.remove(st), this._element.classList.remove(st), this._element.setAttribute("aria-expanded", "false"), $.removeDataAttribute(this._menu, "popper"), s.trigger(this._element, or, e), this._element.focus();
          }
        }
        _getConfig(e) {
          if (typeof (e = super._getConfig(e)).reference == "object" && !H(e.reference) && typeof e.reference.getBoundingClientRect != "function") throw new TypeError(`${Ei.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
          return e;
        }
        _createPopper() {
          if (wi === void 0) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
          let e = this._element;
          this._config.reference === "parent" ? e = this._parent : H(this._config.reference) ? e = he(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
          const t = this._getPopperConfig();
          this._popper = An(e, this._menu, t);
        }
        _isShown() {
          return this._menu.classList.contains(st);
        }
        _getPlacement() {
          const e = this._parent;
          if (e.classList.contains("dropend")) return mr;
          if (e.classList.contains("dropstart")) return gr;
          if (e.classList.contains("dropup-center")) return "top";
          if (e.classList.contains("dropdown-center")) return "bottom";
          const t = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
          return e.classList.contains("dropup") ? t ? dr : hr : t ? pr : fr;
        }
        _detectNavbar() {
          return this._element.closest(".navbar") !== null;
        }
        _getOffset() {
          const { offset: e } = this._config;
          return typeof e == "string" ? e.split(",").map((t) => Number.parseInt(t, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
        }
        _getPopperConfig() {
          const e = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
          return (this._inNavbar || this._config.display === "static") && ($.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...e, ...R(this._config.popperConfig, [void 0, e]) };
        }
        _selectMenuItem({ key: e, target: t }) {
          const i = h.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((r) => we(r));
          i.length && lt(i, t, e === Ai, !i.includes(t)).focus();
        }
        static jQueryInterface(e) {
          return this.each(function() {
            const t = ce.getOrCreateInstance(this, e);
            if (typeof e == "string") {
              if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
        static clearMenus(e) {
          if (e.button === 2 || e.type === "keyup" && e.key !== "Tab") return;
          const t = h.find(ur);
          for (const i of t) {
            const r = ce.getInstance(i);
            if (!r || r._config.autoClose === !1) continue;
            const o = e.composedPath(), a = o.includes(r._menu);
            if (o.includes(r._element) || r._config.autoClose === "inside" && !a || r._config.autoClose === "outside" && a || r._menu.contains(e.target) && (e.type === "keyup" && e.key === "Tab" || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
            const l = { relatedTarget: r._element };
            e.type === "click" && (l.clickEvent = e), r._completeHide(l);
          }
        }
        static dataApiKeydownHandler(e) {
          const t = /input|textarea/i.test(e.target.tagName), i = e.key === "Escape", r = [sr, Ai].includes(e.key);
          if (!r && !i || t && !i) return;
          e.preventDefault();
          const o = this.matches(Pe) ? this : h.prev(this, Pe)[0] || h.next(this, Pe)[0] || h.findOne(Pe, e.delegateTarget.parentNode), a = ce.getOrCreateInstance(o);
          if (r) return e.stopPropagation(), a.show(), void a._selectMenuItem(e);
          a._isShown() && (e.stopPropagation(), a.hide(), o.focus());
        }
      }
      s.on(document, Ti, Pe, ce.dataApiKeydownHandler), s.on(document, Ti, Bt, ce.dataApiKeydownHandler), s.on(document, xi, ce.clearMenus), s.on(document, cr, ce.clearMenus), s.on(document, xi, Pe, function(n) {
        n.preventDefault(), ce.getOrCreateInstance(this).toggle();
      }), X(ce);
      const Ci = "backdrop", Oi = "show", ki = `mousedown.bs.${Ci}`, vr = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" }, yr = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
      class Si extends F {
        constructor(e) {
          super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null;
        }
        static get Default() {
          return vr;
        }
        static get DefaultType() {
          return yr;
        }
        static get NAME() {
          return Ci;
        }
        show(e) {
          if (!this._config.isVisible) return void R(e);
          this._append();
          const t = this._getElement();
          this._config.isAnimated && Ee(t), t.classList.add(Oi), this._emulateAnimation(() => {
            R(e);
          });
        }
        hide(e) {
          this._config.isVisible ? (this._getElement().classList.remove(Oi), this._emulateAnimation(() => {
            this.dispose(), R(e);
          })) : R(e);
        }
        dispose() {
          this._isAppended && (s.off(this._element, ki), this._element.remove(), this._isAppended = !1);
        }
        _getElement() {
          if (!this._element) {
            const e = document.createElement("div");
            e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e;
          }
          return this._element;
        }
        _configAfterMerge(e) {
          return e.rootElement = he(e.rootElement), e;
        }
        _append() {
          if (this._isAppended) return;
          const e = this._getElement();
          this._config.rootElement.append(e), s.on(e, ki, () => {
            R(this._config.clickCallback);
          }), this._isAppended = !0;
        }
        _emulateAnimation(e) {
          Ot(e, this._getElement(), this._config.isAnimated);
        }
      }
      const zt = ".bs.focustrap", wr = `focusin${zt}`, Er = `keydown.tab${zt}`, ji = "backward", Ar = { autofocus: !0, trapElement: null }, xr = { autofocus: "boolean", trapElement: "element" };
      class Ni extends F {
        constructor(e) {
          super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null;
        }
        static get Default() {
          return Ar;
        }
        static get DefaultType() {
          return xr;
        }
        static get NAME() {
          return "focustrap";
        }
        activate() {
          this._isActive || (this._config.autofocus && this._config.trapElement.focus(), s.off(document, zt), s.on(document, wr, (e) => this._handleFocusin(e)), s.on(document, Er, (e) => this._handleKeydown(e)), this._isActive = !0);
        }
        deactivate() {
          this._isActive && (this._isActive = !1, s.off(document, zt));
        }
        _handleFocusin(e) {
          const { trapElement: t } = this._config;
          if (e.target === document || e.target === t || t.contains(e.target)) return;
          const i = h.focusableChildren(t);
          i.length === 0 ? t.focus() : this._lastTabNavDirection === ji ? i[i.length - 1].focus() : i[0].focus();
        }
        _handleKeydown(e) {
          e.key === "Tab" && (this._lastTabNavDirection = e.shiftKey ? ji : "forward");
        }
      }
      const Li = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Di = ".sticky-top", qt = "padding-right", Pi = "margin-right";
      class Tn {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          const e = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - e);
        }
        hide() {
          const e = this.getWidth();
          this._disableOverFlow(), this._setElementAttributes(this._element, qt, (t) => t + e), this._setElementAttributes(Li, qt, (t) => t + e), this._setElementAttributes(Di, Pi, (t) => t - e);
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, qt), this._resetElementAttributes(Li, qt), this._resetElementAttributes(Di, Pi);
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(e, t, i) {
          const r = this.getWidth();
          this._applyManipulationCallback(e, (o) => {
            if (o !== this._element && window.innerWidth > o.clientWidth + r) return;
            this._saveInitialAttribute(o, t);
            const a = window.getComputedStyle(o).getPropertyValue(t);
            o.style.setProperty(t, `${i(Number.parseFloat(a))}px`);
          });
        }
        _saveInitialAttribute(e, t) {
          const i = e.style.getPropertyValue(t);
          i && $.setDataAttribute(e, t, i);
        }
        _resetElementAttributes(e, t) {
          this._applyManipulationCallback(e, (i) => {
            const r = $.getDataAttribute(i, t);
            r !== null ? ($.removeDataAttribute(i, t), i.style.setProperty(t, r)) : i.style.removeProperty(t);
          });
        }
        _applyManipulationCallback(e, t) {
          if (H(e)) t(e);
          else for (const i of h.find(e, this._element)) t(i);
        }
      }
      const te = ".bs.modal", Tr = `hide${te}`, Cr = `hidePrevented${te}`, $i = `hidden${te}`, Ii = `show${te}`, Or = `shown${te}`, kr = `resize${te}`, Sr = `click.dismiss${te}`, jr = `mousedown.dismiss${te}`, Nr = `keydown.dismiss${te}`, Lr = `click${te}.data-api`, Mi = "modal-open", Ri = "show", Cn = "modal-static", Dr = { backdrop: !0, focus: !0, keyboard: !0 }, Pr = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
      class $e extends B {
        constructor(e, t) {
          super(e, t), this._dialog = h.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Tn(), this._addEventListeners();
        }
        static get Default() {
          return Dr;
        }
        static get DefaultType() {
          return Pr;
        }
        static get NAME() {
          return "modal";
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          this._isShown || this._isTransitioning || s.trigger(this._element, Ii, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Mi), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
        }
        hide() {
          this._isShown && !this._isTransitioning && (s.trigger(this._element, Tr).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Ri), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
          s.off(window, te), s.off(this._dialog, te), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new Si({ isVisible: !!this._config.backdrop, isAnimated: this._isAnimated() });
        }
        _initializeFocusTrap() {
          return new Ni({ trapElement: this._element });
        }
        _showElement(e) {
          document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
          const t = h.findOne(".modal-body", this._dialog);
          t && (t.scrollTop = 0), Ee(this._element), this._element.classList.add(Ri), this._queueCallback(() => {
            this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, s.trigger(this._element, Or, { relatedTarget: e });
          }, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
          s.on(this._element, Nr, (e) => {
            e.key === "Escape" && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
          }), s.on(window, kr, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }), s.on(this._element, jr, (e) => {
            s.one(this._element, Sr, (t) => {
              this._element === e.target && this._element === t.target && (this._config.backdrop !== "static" ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
            });
          });
        }
        _hideModal() {
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
            document.body.classList.remove(Mi), this._resetAdjustments(), this._scrollBar.reset(), s.trigger(this._element, $i);
          });
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          if (s.trigger(this._element, Cr).defaultPrevented) return;
          const e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._element.style.overflowY;
          t === "hidden" || this._element.classList.contains(Cn) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(Cn), this._queueCallback(() => {
            this._element.classList.remove(Cn), this._queueCallback(() => {
              this._element.style.overflowY = t;
            }, this._dialog);
          }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
          const e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._scrollBar.getWidth(), i = t > 0;
          if (i && !e) {
            const r = U() ? "paddingLeft" : "paddingRight";
            this._element.style[r] = `${t}px`;
          }
          if (!i && e) {
            const r = U() ? "paddingRight" : "paddingLeft";
            this._element.style[r] = `${t}px`;
          }
        }
        _resetAdjustments() {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(e, t) {
          return this.each(function() {
            const i = $e.getOrCreateInstance(this, e);
            if (typeof e == "string") {
              if (i[e] === void 0) throw new TypeError(`No method named "${e}"`);
              i[e](t);
            }
          });
        }
      }
      s.on(document, Lr, '[data-bs-toggle="modal"]', function(n) {
        const e = h.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && n.preventDefault(), s.one(e, Ii, (i) => {
          i.defaultPrevented || s.one(e, $i, () => {
            we(this) && this.focus();
          });
        });
        const t = h.findOne(".modal.show");
        t && $e.getInstance(t).hide(), $e.getOrCreateInstance(e).toggle(this);
      }), le($e), X($e);
      const be = ".bs.offcanvas", Fi = ".data-api", $r = `load${be}${Fi}`, Wi = "show", Hi = "showing", Bi = "hiding", zi = ".offcanvas.show", Ir = `show${be}`, Mr = `shown${be}`, Rr = `hide${be}`, qi = `hidePrevented${be}`, Vi = `hidden${be}`, Fr = `resize${be}`, Wr = `click${be}${Fi}`, Hr = `keydown.dismiss${be}`, Br = { backdrop: !0, keyboard: !0, scroll: !1 }, zr = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
      class ve extends B {
        constructor(e, t) {
          super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get Default() {
          return Br;
        }
        static get DefaultType() {
          return zr;
        }
        static get NAME() {
          return "offcanvas";
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          this._isShown || s.trigger(this._element, Ir, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Tn().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Hi), this._queueCallback(() => {
            this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Wi), this._element.classList.remove(Hi), s.trigger(this._element, Mr, { relatedTarget: e });
          }, this._element, !0));
        }
        hide() {
          this._isShown && (s.trigger(this._element, Rr).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Bi), this._backdrop.hide(), this._queueCallback(() => {
            this._element.classList.remove(Wi, Bi), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Tn().reset(), s.trigger(this._element, Vi);
          }, this._element, !0)));
        }
        dispose() {
          this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
          const e = !!this._config.backdrop;
          return new Si({ className: "offcanvas-backdrop", isVisible: e, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: e ? () => {
            this._config.backdrop !== "static" ? this.hide() : s.trigger(this._element, qi);
          } : null });
        }
        _initializeFocusTrap() {
          return new Ni({ trapElement: this._element });
        }
        _addEventListeners() {
          s.on(this._element, Hr, (e) => {
            e.key === "Escape" && (this._config.keyboard ? this.hide() : s.trigger(this._element, qi));
          });
        }
        static jQueryInterface(e) {
          return this.each(function() {
            const t = ve.getOrCreateInstance(this, e);
            if (typeof e == "string") {
              if (t[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      s.on(document, Wr, '[data-bs-toggle="offcanvas"]', function(n) {
        const e = h.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), ae(this)) return;
        s.one(e, Vi, () => {
          we(this) && this.focus();
        });
        const t = h.findOne(zi);
        t && t !== e && ve.getInstance(t).hide(), ve.getOrCreateInstance(e).toggle(this);
      }), s.on(window, $r, () => {
        for (const n of h.find(zi)) ve.getOrCreateInstance(n).show();
      }), s.on(window, Fr, () => {
        for (const n of h.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(n).position !== "fixed" && ve.getOrCreateInstance(n).hide();
      }), le(ve), X(ve);
      const Yi = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], dd: [], div: [], dl: [], dt: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, qr = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Vr = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Yr = (n, e) => {
        const t = n.nodeName.toLowerCase();
        return e.includes(t) ? !qr.has(t) || !!Vr.test(n.nodeValue) : e.filter((i) => i instanceof RegExp).some((i) => i.test(t));
      }, Ur = { allowList: Yi, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" }, Xr = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Qr = { entry: "(string|element|function|null)", selector: "(string|element)" };
      class Kr extends F {
        constructor(e) {
          super(), this._config = this._getConfig(e);
        }
        static get Default() {
          return Ur;
        }
        static get DefaultType() {
          return Xr;
        }
        static get NAME() {
          return "TemplateFactory";
        }
        getContent() {
          return Object.values(this._config.content).map((e) => this._resolvePossibleFunction(e)).filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(e) {
          return this._checkContent(e), this._config.content = { ...this._config.content, ...e }, this;
        }
        toHtml() {
          const e = document.createElement("div");
          e.innerHTML = this._maybeSanitize(this._config.template);
          for (const [r, o] of Object.entries(this._config.content)) this._setContent(e, o, r);
          const t = e.children[0], i = this._resolvePossibleFunction(this._config.extraClass);
          return i && t.classList.add(...i.split(" ")), t;
        }
        _typeCheckConfig(e) {
          super._typeCheckConfig(e), this._checkContent(e.content);
        }
        _checkContent(e) {
          for (const [t, i] of Object.entries(e)) super._typeCheckConfig({ selector: t, entry: i }, Qr);
        }
        _setContent(e, t, i) {
          const r = h.findOne(i, e);
          r && ((t = this._resolvePossibleFunction(t)) ? H(t) ? this._putElementInTemplate(he(t), r) : this._config.html ? r.innerHTML = this._maybeSanitize(t) : r.textContent = t : r.remove());
        }
        _maybeSanitize(e) {
          return this._config.sanitize ? function(t, i, r) {
            if (!t.length) return t;
            if (r && typeof r == "function") return r(t);
            const o = new window.DOMParser().parseFromString(t, "text/html"), a = [].concat(...o.body.querySelectorAll("*"));
            for (const l of a) {
              const c = l.nodeName.toLowerCase();
              if (!Object.keys(i).includes(c)) {
                l.remove();
                continue;
              }
              const d = [].concat(...l.attributes), f = [].concat(i["*"] || [], i[c] || []);
              for (const u of d) Yr(u, f) || l.removeAttribute(u.nodeName);
            }
            return o.body.innerHTML;
          }(e, this._config.allowList, this._config.sanitizeFn) : e;
        }
        _resolvePossibleFunction(e) {
          return R(e, [void 0, this]);
        }
        _putElementInTemplate(e, t) {
          if (this._config.html) return t.innerHTML = "", void t.append(e);
          t.textContent = e.textContent;
        }
      }
      const Jr = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), On = "fade", Vt = "show", Gr = ".tooltip-inner", Ui = ".modal", Xi = "hide.bs.modal", wt = "hover", kn = "focus", Zr = { AUTO: "auto", TOP: "top", RIGHT: U() ? "left" : "right", BOTTOM: "bottom", LEFT: U() ? "right" : "left" }, eo = { allowList: Yi, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 6], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, to = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
      class Ie extends B {
        constructor(e, t) {
          if (wi === void 0) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
          super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
        }
        static get Default() {
          return eo;
        }
        static get DefaultType() {
          return to;
        }
        static get NAME() {
          return "tooltip";
        }
        enable() {
          this._isEnabled = !0;
        }
        disable() {
          this._isEnabled = !1;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          this._isEnabled && (this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
          clearTimeout(this._timeout), s.off(this._element.closest(Ui), Xi, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
        }
        show() {
          if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
          if (!this._isWithContent() || !this._isEnabled) return;
          const e = s.trigger(this._element, this.constructor.eventName("show")), t = (at(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
          if (e.defaultPrevented || !t) return;
          this._disposePopper();
          const i = this._getTipElement();
          this._element.setAttribute("aria-describedby", i.getAttribute("id"));
          const { container: r } = this._config;
          if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(i), s.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(Vt), "ontouchstart" in document.documentElement) for (const o of [].concat(...document.body.children)) s.on(o, "mouseover", ge);
          this._queueCallback(() => {
            s.trigger(this._element, this.constructor.eventName("shown")), this._isHovered === !1 && this._leave(), this._isHovered = !1;
          }, this.tip, this._isAnimated());
        }
        hide() {
          if (this._isShown() && !s.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
            if (this._getTipElement().classList.remove(Vt), "ontouchstart" in document.documentElement) for (const e of [].concat(...document.body.children)) s.off(e, "mouseover", ge);
            this._activeTrigger.click = !1, this._activeTrigger[kn] = !1, this._activeTrigger[wt] = !1, this._isHovered = null, this._queueCallback(() => {
              this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), s.trigger(this._element, this.constructor.eventName("hidden")));
            }, this.tip, this._isAnimated());
          }
        }
        update() {
          this._popper && this._popper.update();
        }
        _isWithContent() {
          return !!this._getTitle();
        }
        _getTipElement() {
          return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(e) {
          const t = this._getTemplateFactory(e).toHtml();
          if (!t) return null;
          t.classList.remove(On, Vt), t.classList.add(`bs-${this.constructor.NAME}-auto`);
          const i = ((r) => {
            do
              r += Math.floor(1e6 * Math.random());
            while (document.getElementById(r));
            return r;
          })(this.constructor.NAME).toString();
          return t.setAttribute("id", i), this._isAnimated() && t.classList.add(On), t;
        }
        setContent(e) {
          this._newContent = e, this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(e) {
          return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Kr({ ...this._config, content: e, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
        }
        _getContentForTemplate() {
          return { [Gr]: this._getTitle() };
        }
        _getTitle() {
          return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(e) {
          return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
          return this._config.animation || this.tip && this.tip.classList.contains(On);
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(Vt);
        }
        _createPopper(e) {
          const t = R(this._config.placement, [this, e, this._element]), i = Zr[t.toUpperCase()];
          return An(this._element, e, this._getPopperConfig(i));
        }
        _getOffset() {
          const { offset: e } = this._config;
          return typeof e == "string" ? e.split(",").map((t) => Number.parseInt(t, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
        }
        _resolvePossibleFunction(e) {
          return R(e, [this._element, this._element]);
        }
        _getPopperConfig(e) {
          const t = { placement: e, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: (i) => {
            this._getTipElement().setAttribute("data-popper-placement", i.state.placement);
          } }] };
          return { ...t, ...R(this._config.popperConfig, [void 0, t]) };
        }
        _setListeners() {
          const e = this._config.trigger.split(" ");
          for (const t of e) if (t === "click") s.on(this._element, this.constructor.eventName("click"), this._config.selector, (i) => {
            this._initializeOnDelegatedTarget(i).toggle();
          });
          else if (t !== "manual") {
            const i = t === wt ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), r = t === wt ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
            s.on(this._element, i, this._config.selector, (o) => {
              const a = this._initializeOnDelegatedTarget(o);
              a._activeTrigger[o.type === "focusin" ? kn : wt] = !0, a._enter();
            }), s.on(this._element, r, this._config.selector, (o) => {
              const a = this._initializeOnDelegatedTarget(o);
              a._activeTrigger[o.type === "focusout" ? kn : wt] = a._element.contains(o.relatedTarget), a._leave();
            });
          }
          this._hideModalHandler = () => {
            this._element && this.hide();
          }, s.on(this._element.closest(Ui), Xi, this._hideModalHandler);
        }
        _fixTitle() {
          const e = this._element.getAttribute("title");
          e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"));
        }
        _enter() {
          this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
        }
        _leave() {
          this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
        }
        _setTimeout(e, t) {
          clearTimeout(this._timeout), this._timeout = setTimeout(e, t);
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(e) {
          const t = $.getDataAttributes(this._element);
          for (const i of Object.keys(t)) Jr.has(i) && delete t[i];
          return e = { ...t, ...typeof e == "object" && e ? e : {} }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
        }
        _configAfterMerge(e) {
          return e.container = e.container === !1 ? document.body : he(e.container), typeof e.delay == "number" && (e.delay = { show: e.delay, hide: e.delay }), typeof e.title == "number" && (e.title = e.title.toString()), typeof e.content == "number" && (e.content = e.content.toString()), e;
        }
        _getDelegateConfig() {
          const e = {};
          for (const [t, i] of Object.entries(this._config)) this.constructor.Default[t] !== i && (e[t] = i);
          return e.selector = !1, e.trigger = "manual", e;
        }
        _disposePopper() {
          this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
        }
        static jQueryInterface(e) {
          return this.each(function() {
            const t = Ie.getOrCreateInstance(this, e);
            if (typeof e == "string") {
              if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      X(Ie);
      const no = ".popover-header", io = ".popover-body", so = { ...Ie.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, ro = { ...Ie.DefaultType, content: "(null|string|element|function)" };
      class Yt extends Ie {
        static get Default() {
          return so;
        }
        static get DefaultType() {
          return ro;
        }
        static get NAME() {
          return "popover";
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return { [no]: this._getTitle(), [io]: this._getContent() };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(e) {
          return this.each(function() {
            const t = Yt.getOrCreateInstance(this, e);
            if (typeof e == "string") {
              if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      X(Yt);
      const Sn = ".bs.scrollspy", oo = `activate${Sn}`, Qi = `click${Sn}`, ao = `load${Sn}.data-api`, rt = "active", jn = "[href]", Ki = ".nav-link", lo = `${Ki}, .nav-item > ${Ki}, .list-group-item`, co = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] }, uo = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
      class Et extends B {
        constructor(e, t) {
          super(e, t), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
        }
        static get Default() {
          return co;
        }
        static get DefaultType() {
          return uo;
        }
        static get NAME() {
          return "scrollspy";
        }
        refresh() {
          this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
          for (const e of this._observableSections.values()) this._observer.observe(e);
        }
        dispose() {
          this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(e) {
          return e.target = he(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, typeof e.threshold == "string" && (e.threshold = e.threshold.split(",").map((t) => Number.parseFloat(t))), e;
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll && (s.off(this._config.target, Qi), s.on(this._config.target, Qi, jn, (e) => {
            const t = this._observableSections.get(e.target.hash);
            if (t) {
              e.preventDefault();
              const i = this._rootElement || window, r = t.offsetTop - this._element.offsetTop;
              if (i.scrollTo) return void i.scrollTo({ top: r, behavior: "smooth" });
              i.scrollTop = r;
            }
          }));
        }
        _getNewObserver() {
          const e = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
          return new IntersectionObserver((t) => this._observerCallback(t), e);
        }
        _observerCallback(e) {
          const t = (a) => this._targetLinks.get(`#${a.target.id}`), i = (a) => {
            this._previousScrollData.visibleEntryTop = a.target.offsetTop, this._process(t(a));
          }, r = (this._rootElement || document.documentElement).scrollTop, o = r >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = r;
          for (const a of e) {
            if (!a.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(t(a));
              continue;
            }
            const l = a.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (o && l) {
              if (i(a), !r) return;
            } else o || l || i(a);
          }
        }
        _initializeTargetsAndObservables() {
          this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
          const e = h.find(jn, this._config.target);
          for (const t of e) {
            if (!t.hash || ae(t)) continue;
            const i = h.findOne(decodeURI(t.hash), this._element);
            we(i) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, i));
          }
        }
        _process(e) {
          this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(rt), this._activateParents(e), s.trigger(this._element, oo, { relatedTarget: e }));
        }
        _activateParents(e) {
          if (e.classList.contains("dropdown-item")) h.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(rt);
          else for (const t of h.parents(e, ".nav, .list-group")) for (const i of h.prev(t, lo)) i.classList.add(rt);
        }
        _clearActiveClass(e) {
          e.classList.remove(rt);
          const t = h.find(`${jn}.${rt}`, e);
          for (const i of t) i.classList.remove(rt);
        }
        static jQueryInterface(e) {
          return this.each(function() {
            const t = Et.getOrCreateInstance(this, e);
            if (typeof e == "string") {
              if (t[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      s.on(window, ao, () => {
        for (const n of h.find('[data-bs-spy="scroll"]')) Et.getOrCreateInstance(n);
      }), X(Et);
      const Me = ".bs.tab", ho = `hide${Me}`, fo = `hidden${Me}`, po = `show${Me}`, mo = `shown${Me}`, go = `click${Me}`, _o = `keydown${Me}`, bo = `load${Me}`, vo = "ArrowLeft", Ji = "ArrowRight", yo = "ArrowUp", Gi = "ArrowDown", Nn = "Home", Zi = "End", Re = "active", es = "fade", Ln = "show", ts = ".dropdown-toggle", Dn = `:not(${ts})`, ns = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Pn = `.nav-link${Dn}, .list-group-item${Dn}, [role="tab"]${Dn}, ${ns}`, wo = `.${Re}[data-bs-toggle="tab"], .${Re}[data-bs-toggle="pill"], .${Re}[data-bs-toggle="list"]`;
      class Fe extends B {
        constructor(e) {
          super(e), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), s.on(this._element, _o, (t) => this._keydown(t)));
        }
        static get NAME() {
          return "tab";
        }
        show() {
          const e = this._element;
          if (this._elemIsActive(e)) return;
          const t = this._getActiveElem(), i = t ? s.trigger(t, ho, { relatedTarget: e }) : null;
          s.trigger(e, po, { relatedTarget: t }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(t, e), this._activate(e, t));
        }
        _activate(e, t) {
          e && (e.classList.add(Re), this._activate(h.getElementFromSelector(e)), this._queueCallback(() => {
            e.getAttribute("role") === "tab" ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), s.trigger(e, mo, { relatedTarget: t })) : e.classList.add(Ln);
          }, e, e.classList.contains(es)));
        }
        _deactivate(e, t) {
          e && (e.classList.remove(Re), e.blur(), this._deactivate(h.getElementFromSelector(e)), this._queueCallback(() => {
            e.getAttribute("role") === "tab" ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), s.trigger(e, fo, { relatedTarget: t })) : e.classList.remove(Ln);
          }, e, e.classList.contains(es)));
        }
        _keydown(e) {
          if (![vo, Ji, yo, Gi, Nn, Zi].includes(e.key)) return;
          e.stopPropagation(), e.preventDefault();
          const t = this._getChildren().filter((r) => !ae(r));
          let i;
          if ([Nn, Zi].includes(e.key)) i = t[e.key === Nn ? 0 : t.length - 1];
          else {
            const r = [Ji, Gi].includes(e.key);
            i = lt(t, e.target, r, !0);
          }
          i && (i.focus({ preventScroll: !0 }), Fe.getOrCreateInstance(i).show());
        }
        _getChildren() {
          return h.find(Pn, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((e) => this._elemIsActive(e)) || null;
        }
        _setInitialAttributes(e, t) {
          this._setAttributeIfNotExists(e, "role", "tablist");
          for (const i of t) this._setInitialAttributesOnChild(i);
        }
        _setInitialAttributesOnChild(e) {
          e = this._getInnerElement(e);
          const t = this._elemIsActive(e), i = this._getOuterElement(e);
          e.setAttribute("aria-selected", t), i !== e && this._setAttributeIfNotExists(i, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e);
        }
        _setInitialAttributesOnTargetPanel(e) {
          const t = h.getElementFromSelector(e);
          t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
        }
        _toggleDropDown(e, t) {
          const i = this._getOuterElement(e);
          if (!i.classList.contains("dropdown")) return;
          const r = (o, a) => {
            const l = h.findOne(o, i);
            l && l.classList.toggle(a, t);
          };
          r(ts, Re), r(".dropdown-menu", Ln), i.setAttribute("aria-expanded", t);
        }
        _setAttributeIfNotExists(e, t, i) {
          e.hasAttribute(t) || e.setAttribute(t, i);
        }
        _elemIsActive(e) {
          return e.classList.contains(Re);
        }
        _getInnerElement(e) {
          return e.matches(Pn) ? e : h.findOne(Pn, e);
        }
        _getOuterElement(e) {
          return e.closest(".nav-item, .list-group-item") || e;
        }
        static jQueryInterface(e) {
          return this.each(function() {
            const t = Fe.getOrCreateInstance(this);
            if (typeof e == "string") {
              if (t[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      s.on(document, go, ns, function(n) {
        ["A", "AREA"].includes(this.tagName) && n.preventDefault(), ae(this) || Fe.getOrCreateInstance(this).show();
      }), s.on(window, bo, () => {
        for (const n of h.find(wo)) Fe.getOrCreateInstance(n);
      }), X(Fe);
      const Te = ".bs.toast", Eo = `mouseover${Te}`, Ao = `mouseout${Te}`, xo = `focusin${Te}`, To = `focusout${Te}`, Co = `hide${Te}`, Oo = `hidden${Te}`, ko = `show${Te}`, So = `shown${Te}`, is = "hide", Ut = "show", Xt = "showing", jo = { animation: "boolean", autohide: "boolean", delay: "number" }, No = { animation: !0, autohide: !0, delay: 5e3 };
      class At extends B {
        constructor(e, t) {
          super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get Default() {
          return No;
        }
        static get DefaultType() {
          return jo;
        }
        static get NAME() {
          return "toast";
        }
        show() {
          s.trigger(this._element, ko).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(is), Ee(this._element), this._element.classList.add(Ut, Xt), this._queueCallback(() => {
            this._element.classList.remove(Xt), s.trigger(this._element, So), this._maybeScheduleHide();
          }, this._element, this._config.animation));
        }
        hide() {
          this.isShown() && (s.trigger(this._element, Co).defaultPrevented || (this._element.classList.add(Xt), this._queueCallback(() => {
            this._element.classList.add(is), this._element.classList.remove(Xt, Ut), s.trigger(this._element, Oo);
          }, this._element, this._config.animation)));
        }
        dispose() {
          this._clearTimeout(), this.isShown() && this._element.classList.remove(Ut), super.dispose();
        }
        isShown() {
          return this._element.classList.contains(Ut);
        }
        _maybeScheduleHide() {
          this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
        }
        _onInteraction(e, t) {
          switch (e.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = t;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = t;
          }
          if (t) return void this._clearTimeout();
          const i = e.relatedTarget;
          this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
          s.on(this._element, Eo, (e) => this._onInteraction(e, !0)), s.on(this._element, Ao, (e) => this._onInteraction(e, !1)), s.on(this._element, xo, (e) => this._onInteraction(e, !0)), s.on(this._element, To, (e) => this._onInteraction(e, !1));
        }
        _clearTimeout() {
          clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(e) {
          return this.each(function() {
            const t = At.getOrCreateInstance(this, e);
            if (typeof e == "string") {
              if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      return le(At), X(At), { Alert: pt, Button: mt, Carousel: Xe, Collapse: Ke, Dropdown: ce, Modal: $e, Offcanvas: ve, Popover: Yt, ScrollSpy: Et, Tab: Fe, Toast: At, Tooltip: Ie };
    });
  }(Zt)), Zt.exports;
}
Vo();
function Rn({ label: re, type: Oe, placeholder: M }) {
  return /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsx("p", { className: "label", children: re }),
    /* @__PURE__ */ g.jsx("input", { type: Oe, className: "input", placeholder: M })
  ] });
}
function Uo() {
  return /* @__PURE__ */ g.jsxs("div", { className: "form_div", children: [
    /* @__PURE__ */ g.jsxs("h1", { className: "color", children: [
      "Your Journey to Coding Conf ",
      /* @__PURE__ */ g.jsx("br", {}),
      "2025 Start Here"
    ] }),
    /* @__PURE__ */ g.jsx("p", { className: "color", children: "Secure your spot at next year's biggest coding conference." }),
    /* @__PURE__ */ g.jsxs("form", { children: [
      /* @__PURE__ */ g.jsx("p", { className: "label", children: "Upload Avatar" }),
      /* @__PURE__ */ g.jsxs("label", { for: "images", className: "drop-container", id: "dropcontainer", children: [
        /* @__PURE__ */ g.jsx("span", { className: "drop-title", children: "Drag and drop or click to upload" }),
        /* @__PURE__ */ g.jsx(
          "input",
          {
            type: "file",
            className: "file_input",
            id: "images",
            accept: "image/*",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ g.jsx("br", {}),
      /* @__PURE__ */ g.jsx(Rn, { label: "Full Name", type: "text", placeholder: "enter name" }),
      /* @__PURE__ */ g.jsx("br", {}),
      /* @__PURE__ */ g.jsx(Rn, { label: "Email Address", type: "email", placeholder: "Enter email" }),
      /* @__PURE__ */ g.jsx("br", {}),
      /* @__PURE__ */ g.jsx(
        Rn,
        {
          label: "Github Username",
          type: "text",
          placeholder: "enter github username"
        }
      ),
      /* @__PURE__ */ g.jsx("br", {}),
      /* @__PURE__ */ g.jsx("button", { className: "form-control btn btn-danger", children: "Generate My Ticket" })
    ] })
  ] });
}
function Xo() {
  return /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsxs("h1", { className: "heading text_color", children: [
      "Congrats, ",
      /* @__PURE__ */ g.jsx("span", { className: "span_heading", children: "Raj Masihi !" }),
      /* @__PURE__ */ g.jsx("br", {}),
      "Your Ticket is ready."
    ] }),
    /* @__PURE__ */ g.jsx("div", { className: "msg_div", children: /* @__PURE__ */ g.jsxs("p", { className: "msg text_color", children: [
      "We've dtoiled your Ticket to ",
      /* @__PURE__ */ g.jsx("br", {}),
      /* @__PURE__ */ g.jsx("span", { className: "email_span", children: " rajmasihi@gmail.com " }),
      " and will send update in ",
      /* @__PURE__ */ g.jsx("br", {}),
      "the run up to the event."
    ] }) }),
    /* @__PURE__ */ g.jsxs("div", { className: "full_card", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "half_left_card", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "coding_conf", children: [
          /* @__PURE__ */ g.jsx("img", { className: "img" }),
          /* @__PURE__ */ g.jsxs("h1", { className: "text_color", children: [
            "Coding Conf",
            /* @__PURE__ */ g.jsx("br", {}),
            /* @__PURE__ */ g.jsx("span", { className: "date text_color", children: "Jan 31, 2025 / Austin, TK" })
          ] })
        ] }),
        /* @__PURE__ */ g.jsx("br", {}),
        /* @__PURE__ */ g.jsx("br", {}),
        /* @__PURE__ */ g.jsxs("div", { className: "user_profile", children: [
          /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsx("img", { className: "img" }) }),
          /* @__PURE__ */ g.jsxs("h5", { className: "text_color", children: [
            "Raj Masihi",
            /* @__PURE__ */ g.jsx("br", {}),
            /* @__PURE__ */ g.jsx("span", { className: "social_id text_color", children: "@ rajmasihi" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ g.jsx("div", { className: "half_right_card", children: /* @__PURE__ */ g.jsx("p", { className: "hash_number text_color", children: "#01609" }) })
    ] })
  ] });
}
export {
  Xo as Displaycard,
  Uo as Form
};
