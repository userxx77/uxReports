function pw(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }))
}(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver(o => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function n(o) {
    const i = {};
    return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
  }

  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i)
  }
})();

function bu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Dm = {
    exports: {}
  },
  ha = {},
  Im = {
    exports: {}
  },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi = Symbol.for("react.element"),
  mw = Symbol.for("react.portal"),
  hw = Symbol.for("react.fragment"),
  vw = Symbol.for("react.strict_mode"),
  gw = Symbol.for("react.profiler"),
  yw = Symbol.for("react.provider"),
  ww = Symbol.for("react.context"),
  xw = Symbol.for("react.forward_ref"),
  bw = Symbol.for("react.suspense"),
  Sw = Symbol.for("react.memo"),
  Cw = Symbol.for("react.lazy"),
  bf = Symbol.iterator;

function Ew(e) {
  return e === null || typeof e != "object" ? null : (e = bf && e[bf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Lm = {
    isMounted: function() {
      return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
  },
  Fm = Object.assign,
  zm = {};

function vo(e, t, n) {
  this.props = e, this.context = t, this.refs = zm, this.updater = n || Lm
}
vo.prototype.isReactComponent = {};
vo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
};
vo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Bm() {}
Bm.prototype = vo.prototype;

function Su(e, t, n) {
  this.props = e, this.context = t, this.refs = zm, this.updater = n || Lm
}
var Cu = Su.prototype = new Bm;
Cu.constructor = Su;
Fm(Cu, vo.prototype);
Cu.isPureReactComponent = !0;
var Sf = Array.isArray,
  Um = Object.prototype.hasOwnProperty,
  Eu = {
    current: null
  },
  Wm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function Vm(e, t, n) {
  var r, o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Um.call(t, r) && !Wm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l
  }
  if (e && e.defaultProps)
    for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Pi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Eu.current
  }
}

function kw(e, t) {
  return {
    $$typeof: Pi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}

function ku(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pi
}

function Nw(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n]
  })
}
var Cf = /\/+/g;

function ll(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Nw("" + e.key) : t.toString(36)
}

function bs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Pi:
        case mw:
          s = !0
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + ll(s, 0) : r, Sf(o) ? (n = "", e != null && (n = e.replace(Cf, "$&/") + "/"), bs(o, t, n, "", function(u) {
    return u
  })) : o != null && (ku(o) && (o = kw(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Cf, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Sf(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + ll(i, a);
      s += bs(i, t, n, l, o)
    } else if (l = Ew(e), typeof l == "function")
      for (e = l.call(e), a = 0; !(i = e.next()).done;) i = i.value, l = r + ll(i, a++), s += bs(i, t, n, l, o);
    else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s
}

function Hi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return bs(e, r, "", "", function(i) {
    return t.call(n, i, o++)
  }), r
}

function Pw(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
    }), e._status === -1 && (e._status = 0, e._result = t)
  }
  if (e._status === 1) return e._result.default;
  throw e._result
}
var Fe = {
    current: null
  },
  Ss = {
    transition: null
  },
  Rw = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: Ss,
    ReactCurrentOwner: Eu
  };

function Hm() {
  throw Error("act(...) is not supported in production builds of React.")
}
ee.Children = {
  map: Hi,
  forEach: function(e, t, n) {
    Hi(e, function() {
      t.apply(this, arguments)
    }, n)
  },
  count: function(e) {
    var t = 0;
    return Hi(e, function() {
      t++
    }), t
  },
  toArray: function(e) {
    return Hi(e, function(t) {
      return t
    }) || []
  },
  only: function(e) {
    if (!ku(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
};
ee.Component = vo;
ee.Fragment = hw;
ee.Profiler = gw;
ee.PureComponent = Su;
ee.StrictMode = vw;
ee.Suspense = bw;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rw;
ee.act = Hm;
ee.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Fm({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Eu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Um.call(t, l) && !Wm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a
  }
  return {
    $$typeof: Pi,
    type: e.type,
    key: o,
    ref: i,
    props: r,
    _owner: s
  }
};
ee.createContext = function(e) {
  return e = {
    $$typeof: ww,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }, e.Provider = {
    $$typeof: yw,
    _context: e
  }, e.Consumer = e
};
ee.createElement = Vm;
ee.createFactory = function(e) {
  var t = Vm.bind(null, e);
  return t.type = e, t
};
ee.createRef = function() {
  return {
    current: null
  }
};
ee.forwardRef = function(e) {
  return {
    $$typeof: xw,
    render: e
  }
};
ee.isValidElement = ku;
ee.lazy = function(e) {
  return {
    $$typeof: Cw,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: Pw
  }
};
ee.memo = function(e, t) {
  return {
    $$typeof: Sw,
    type: e,
    compare: t === void 0 ? null : t
  }
};
ee.startTransition = function(e) {
  var t = Ss.transition;
  Ss.transition = {};
  try {
    e()
  } finally {
    Ss.transition = t
  }
};
ee.unstable_act = Hm;
ee.useCallback = function(e, t) {
  return Fe.current.useCallback(e, t)
};
ee.useContext = function(e) {
  return Fe.current.useContext(e)
};
ee.useDebugValue = function() {};
ee.useDeferredValue = function(e) {
  return Fe.current.useDeferredValue(e)
};
ee.useEffect = function(e, t) {
  return Fe.current.useEffect(e, t)
};
ee.useId = function() {
  return Fe.current.useId()
};
ee.useImperativeHandle = function(e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n)
};
ee.useInsertionEffect = function(e, t) {
  return Fe.current.useInsertionEffect(e, t)
};
ee.useLayoutEffect = function(e, t) {
  return Fe.current.useLayoutEffect(e, t)
};
ee.useMemo = function(e, t) {
  return Fe.current.useMemo(e, t)
};
ee.useReducer = function(e, t, n) {
  return Fe.current.useReducer(e, t, n)
};
ee.useRef = function(e) {
  return Fe.current.useRef(e)
};
ee.useState = function(e) {
  return Fe.current.useState(e)
};
ee.useSyncExternalStore = function(e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n)
};
ee.useTransition = function() {
  return Fe.current.useTransition()
};
ee.version = "18.3.1";
Im.exports = ee;
var c = Im.exports;
const O = bu(c),
  Km = pw({
    __proto__: null,
    default: O
  }, [c]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $w = c,
  Mw = Symbol.for("react.element"),
  Tw = Symbol.for("react.fragment"),
  _w = Object.prototype.hasOwnProperty,
  Aw = $w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ow = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function Gm(e, t, n) {
  var r, o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) _w.call(t, r) && !Ow.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Mw,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Aw.current
  }
}
ha.Fragment = Tw;
ha.jsx = Gm;
ha.jsxs = Gm;
Dm.exports = ha;
var m = Dm.exports,
  je = function() {
    return je = Object.assign || function(t) {
      for (var n, r = 1, o = arguments.length; r < o; r++) {
        n = arguments[r];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
      }
      return t
    }, je.apply(this, arguments)
  };

function Nu(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
}

function Ym(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)(i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t))
}
var Ho = "right-scroll-bar-position",
  Ko = "width-before-scroll-bar",
  jw = "with-scroll-bars-hidden",
  Dw = "--removed-body-scroll-bar-size";

function cl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function Iw(e, t) {
  var n = c.useState(function() {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o))
        }
      }
    }
  })[0];
  return n.callback = t, n.facade
}
var Lw = typeof window < "u" ? c.useLayoutEffect : c.useEffect,
  Ef = new WeakMap;

function Xm(e, t) {
  var n = Iw(null, function(r) {
    return e.forEach(function(o) {
      return cl(o, r)
    })
  });
  return Lw(function() {
    var r = Ef.get(n);
    if (r) {
      var o = new Set(r),
        i = new Set(e),
        s = n.current;
      o.forEach(function(a) {
        i.has(a) || cl(a, null)
      }), i.forEach(function(a) {
        o.has(a) || cl(a, s)
      })
    }
    Ef.set(n, e)
  }, [e]), n
}

function Fw(e) {
  return e
}

function zw(e, t) {
  t === void 0 && (t = Fw);
  var n = [],
    r = !1,
    o = {
      read: function() {
        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return n.length ? n[n.length - 1] : e
      },
      useMedium: function(i) {
        var s = t(i, r);
        return n.push(s),
          function() {
            n = n.filter(function(a) {
              return a !== s
            })
          }
      },
      assignSyncMedium: function(i) {
        for (r = !0; n.length;) {
          var s = n;
          n = [], s.forEach(i)
        }
        n = {
          push: function(a) {
            return i(a)
          },
          filter: function() {
            return n
          }
        }
      },
      assignMedium: function(i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          n = [], a.forEach(i), s = n
        }
        var l = function() {
            var d = s;
            s = [], d.forEach(i)
          },
          u = function() {
            return Promise.resolve().then(l)
          };
        u(), n = {
          push: function(d) {
            s.push(d), u()
          },
          filter: function(d) {
            return s = s.filter(d), n
          }
        }
      }
    };
  return o
}

function Qm(e) {
  e === void 0 && (e = {});
  var t = zw(null);
  return t.options = je({
    async: !0,
    ssr: !1
  }, e), t
}
var Zm = function(e) {
  var t = e.sideCar,
    n = Nu(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return c.createElement(r, je({}, n))
};
Zm.isSideCarExport = !0;

function qm(e, t) {
  return e.useMedium(t), Zm
}
var Jm = Qm(),
  ul = function() {},
  va = c.forwardRef(function(e, t) {
    var n = c.useRef(null),
      r = c.useState({
        onScrollCapture: ul,
        onWheelCapture: ul,
        onTouchMoveCapture: ul
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      p = e.shards,
      f = e.sideCar,
      h = e.noIsolation,
      w = e.inert,
      g = e.allowPinchZoom,
      b = e.as,
      v = b === void 0 ? "div" : b,
      y = e.gapMode,
      x = Nu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
      S = f,
      C = Xm([n, t]),
      E = je(je({}, x), o);
    return c.createElement(c.Fragment, null, d && c.createElement(S, {
      sideCar: Jm,
      removeScrollBar: u,
      shards: p,
      noIsolation: h,
      inert: w,
      setCallbacks: i,
      allowPinchZoom: !!g,
      lockRef: n,
      gapMode: y
    }), s ? c.cloneElement(c.Children.only(a), je(je({}, E), {
      ref: C
    })) : c.createElement(v, je({}, E, {
      className: l,
      ref: C
    }), a))
  });
va.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
va.classNames = {
  fullWidth: Ko,
  zeroRight: Ho
};
var Bw = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function Uw() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Bw();
  return t && e.setAttribute("nonce", t), e
}

function Ww(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function Vw(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e)
}
var Hw = function() {
    var e = 0,
      t = null;
    return {
      add: function(n) {
        e == 0 && (t = Uw()) && (Ww(t, n), Vw(t)), e++
      },
      remove: function() {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
      }
    }
  },
  Kw = function() {
    var e = Hw();
    return function(t, n) {
      c.useEffect(function() {
        return e.add(t),
          function() {
            e.remove()
          }
      }, [t && n])
    }
  },
  Pu = function() {
    var e = Kw(),
      t = function(n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null
      };
    return t
  },
  Gw = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  },
  dl = function(e) {
    return parseInt(e || "", 10) || 0
  },
  Yw = function(e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [dl(n), dl(r), dl(o)]
  },
  Xw = function(e) {
    if (e === void 0 && (e = "margin"), typeof window > "u") return Gw;
    var t = Yw(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0])
    }
  },
  Qw = Pu(),
  Yr = "data-scroll-locked",
  Zw = function(e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return n === void 0 && (n = "margin"), `
  .`.concat(jw, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Yr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ho, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ko, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ho, " .").concat(Ho, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ko, " .").concat(Ko, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Yr, `] {
    `).concat(Dw, ": ").concat(a, `px;
  }
`)
  },
  kf = function() {
    var e = parseInt(document.body.getAttribute(Yr) || "0", 10);
    return isFinite(e) ? e : 0
  },
  qw = function() {
    c.useEffect(function() {
      return document.body.setAttribute(Yr, (kf() + 1).toString()),
        function() {
          var e = kf() - 1;
          e <= 0 ? document.body.removeAttribute(Yr) : document.body.setAttribute(Yr, e.toString())
        }
    }, [])
  },
  eh = function(e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    qw();
    var i = c.useMemo(function() {
      return Xw(o)
    }, [o]);
    return c.createElement(Qw, {
      styles: Zw(i, !t, o, n ? "" : "!important")
    })
  },
  sc = !1;
if (typeof window < "u") try {
  var Ki = Object.defineProperty({}, "passive", {
    get: function() {
      return sc = !0, !0
    }
  });
  window.addEventListener("test", Ki, Ki), window.removeEventListener("test", Ki, Ki)
} catch {
  sc = !1
}
var kr = sc ? {
    passive: !1
  } : !1,
  Jw = function(e) {
    return e.tagName === "TEXTAREA"
  },
  th = function(e, t) {
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Jw(e) && n[t] === "visible")
  },
  ex = function(e) {
    return th(e, "overflowY")
  },
  tx = function(e) {
    return th(e, "overflowX")
  },
  Nf = function(e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = nh(e, r);
      if (o) {
        var i = rh(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0
      }
      r = r.parentNode
    } while (r && r !== n.body);
    return !1
  },
  nx = function(e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r]
  },
  rx = function(e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r]
  },
  nh = function(e, t) {
    return e === "v" ? ex(t) : tx(t)
  },
  rh = function(e, t) {
    return e === "v" ? nx(t) : rx(t)
  },
  ox = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
  },
  ix = function(e, t, n, r, o) {
    var i = ox(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      d = s > 0,
      p = 0,
      f = 0;
    do {
      var h = rh(e, a),
        w = h[0],
        g = h[1],
        b = h[2],
        v = g - b - i * w;
      (w || v) && nh(e, a) && (p += v, f += w), a instanceof ShadowRoot ? a = a.host : a = a.parentNode
    } while (!l && a !== document.body || l && (t.contains(a) || t === a));
    return (d && (Math.abs(p) < 1 || !o) || !d && (Math.abs(f) < 1 || !o)) && (u = !0), u
  },
  Gi = function(e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
  },
  Pf = function(e) {
    return [e.deltaX, e.deltaY]
  },
  Rf = function(e) {
    return e && "current" in e ? e.current : e
  },
  sx = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
  },
  ax = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
  },
  lx = 0,
  Nr = [];

function cx(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    r = c.useRef(),
    o = c.useState(lx++)[0],
    i = c.useState(Pu)[0],
    s = c.useRef(e);
  c.useEffect(function() {
    s.current = e
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = Ym([e.lockRef.current], (e.shards || []).map(Rf), !0).filter(Boolean);
      return g.forEach(function(b) {
          return b.classList.add("allow-interactivity-".concat(o))
        }),
        function() {
          document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(b) {
            return b.classList.remove("allow-interactivity-".concat(o))
          })
        }
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = c.useCallback(function(g, b) {
      if ("touches" in g && g.touches.length === 2) return !s.current.allowPinchZoom;
      var v = Gi(g),
        y = n.current,
        x = "deltaX" in g ? g.deltaX : y[0] - v[0],
        S = "deltaY" in g ? g.deltaY : y[1] - v[1],
        C, E = g.target,
        k = Math.abs(x) > Math.abs(S) ? "h" : "v";
      if ("touches" in g && k === "h" && E.type === "range") return !1;
      var N = Nf(k, E);
      if (!N) return !0;
      if (N ? C = k : (C = k === "v" ? "h" : "v", N = Nf(k, E)), !N) return !1;
      if (!r.current && "changedTouches" in g && (x || S) && (r.current = C), !C) return !0;
      var T = r.current || C;
      return ix(T, b, g, T === "h" ? x : S, !0)
    }, []),
    l = c.useCallback(function(g) {
      var b = g;
      if (!(!Nr.length || Nr[Nr.length - 1] !== i)) {
        var v = "deltaY" in b ? Pf(b) : Gi(b),
          y = t.current.filter(function(C) {
            return C.name === b.type && (C.target === b.target || b.target === C.shadowParent) && sx(C.delta, v)
          })[0];
        if (y && y.should) {
          b.cancelable && b.preventDefault();
          return
        }
        if (!y) {
          var x = (s.current.shards || []).map(Rf).filter(Boolean).filter(function(C) {
              return C.contains(b.target)
            }),
            S = x.length > 0 ? a(b, x[0]) : !s.current.noIsolation;
          S && b.cancelable && b.preventDefault()
        }
      }
    }, []),
    u = c.useCallback(function(g, b, v, y) {
      var x = {
        name: g,
        delta: b,
        target: v,
        should: y,
        shadowParent: ux(v)
      };
      t.current.push(x), setTimeout(function() {
        t.current = t.current.filter(function(S) {
          return S !== x
        })
      }, 1)
    }, []),
    d = c.useCallback(function(g) {
      n.current = Gi(g), r.current = void 0
    }, []),
    p = c.useCallback(function(g) {
      u(g.type, Pf(g), g.target, a(g, e.lockRef.current))
    }, []),
    f = c.useCallback(function(g) {
      u(g.type, Gi(g), g.target, a(g, e.lockRef.current))
    }, []);
  c.useEffect(function() {
    return Nr.push(i), e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: f
      }), document.addEventListener("wheel", l, kr), document.addEventListener("touchmove", l, kr), document.addEventListener("touchstart", d, kr),
      function() {
        Nr = Nr.filter(function(g) {
          return g !== i
        }), document.removeEventListener("wheel", l, kr), document.removeEventListener("touchmove", l, kr), document.removeEventListener("touchstart", d, kr)
      }
  }, []);
  var h = e.removeScrollBar,
    w = e.inert;
  return c.createElement(c.Fragment, null, w ? c.createElement(i, {
    styles: ax(o)
  }) : null, h ? c.createElement(eh, {
    gapMode: e.gapMode
  }) : null)
}

function ux(e) {
  for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t
}
const dx = qm(Jm, cx);
var Ri = c.forwardRef(function(e, t) {
  return c.createElement(va, je({}, e, {
    ref: t,
    sideCar: dx
  }))
});
Ri.classNames = va.classNames;

function jt(e) {
  return Object.keys(e)
}

function fl(e) {
  return e && typeof e == "object" && !Array.isArray(e)
}

function Ru(e, t) {
  const n = {
      ...e
    },
    r = t;
  return fl(e) && fl(t) && Object.keys(t).forEach(o => {
    fl(r[o]) && o in e ? n[o] = Ru(n[o], r[o]) : n[o] = r[o]
  }), n
}

function fx(e) {
  return e.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`)
}

function px(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)") ? e : (t = e.match(/^calc\((.*?)\)$/)) == null ? void 0 : t[1].split("*")[0].trim()
}

function mx(e) {
  const t = px(e);
  return typeof t == "number" ? t : typeof t == "string" ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? Number(t.replace("rem", "")) * 16 : t.includes("em") ? Number(t.replace("em", "")) * 16 : Number(t) : NaN
}

function pl(e) {
  return e === "0rem" ? "0rem" : `calc(${e} * var(--mantine-scale))`
}

function oh(e, {
  shouldScale: t = !1
} = {}) {
  function n(r) {
    if (r === 0 || r === "0") return `0${e}`;
    if (typeof r == "number") {
      const o = `${r/16}${e}`;
      return t ? pl(o) : o
    }
    if (typeof r == "string") {
      if (r === "" || r.startsWith("calc(") || r.startsWith("clamp(") || r.includes("rgba(")) return r;
      if (r.includes(",")) return r.split(",").map(i => n(i)).join(",");
      if (r.includes(" ")) return r.split(" ").map(i => n(i)).join(" ");
      if (r.includes(e)) return t ? pl(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o)/16}${e}`;
        return t ? pl(i) : i
      }
    }
    return r
  }
  return n
}
const _ = oh("rem", {
    shouldScale: !0
  }),
  $f = oh("em");

function $u(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {})
}

function ih(e) {
  return typeof e == "number" ? !0 : typeof e == "string" ? e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "" ? !0 : /[0-9]/.test(e.trim().replace("-", "")[0]) : !1
}

function hx(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== c.Fragment : !1
}

function ga(e) {
  const t = c.createContext(null);
  return [({
    children: o,
    value: i
  }) => m.jsx(t.Provider, {
    value: i,
    children: o
  }), () => {
    const o = c.useContext(t);
    if (o === null) throw new Error(e);
    return o
  }]
}
const vx = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};

function ya(e) {
  return vx[e]
}

function Dn(e, t = "size", n = !0) {
  if (e !== void 0) return ih(e) ? n ? _(e) : e : `var(--${t}-${e})`
}

function gx(e) {
  return Dn(e, "mantine-spacing")
}

function $i(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : Dn(e, "mantine-radius")
}

function yx(e) {
  return Dn(e, "mantine-font-size")
}

function sh(e) {
  if (e) return Dn(e, "mantine-shadow", !1)
}

function ah() {
  return `mantine-${Math.random().toString(36).slice(2,11)}`
}

function Yn(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e
  }), c.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n)
  }, [])
}

function wa(e, t) {
  const n = Yn(e),
    r = c.useRef(0);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), c.useCallback((...o) => {
    window.clearTimeout(r.current), r.current = window.setTimeout(() => n(...o), t)
  }, [n, t])
}

function wx(e, t) {
  try {
    return e.addEventListener("change", t), () => e.removeEventListener("change", t)
  } catch {
    return e.addListener(t), () => e.removeListener(t)
  }
}

function xx(e, t) {
  return typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1
}

function bx(e, t, {
  getInitialValueInEffect: n
} = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = c.useState(n ? t : xx(e)), i = c.useRef();
  return c.useEffect(() => {
    if ("matchMedia" in window) return i.current = window.matchMedia(e), o(i.current.matches), wx(i.current, s => o(s.matches))
  }, [e]), r
}
const Mi = typeof document < "u" ? c.useLayoutEffect : c.useEffect;

function lh(e, t) {
  const n = c.useRef(!1);
  c.useEffect(() => () => {
    n.current = !1
  }, []), c.useEffect(() => {
    if (n.current) return e();
    n.current = !0
  }, t)
}

function Sx({
  opened: e,
  shouldReturnFocus: t = !0
}) {
  const n = c.useRef(),
    r = () => {
      var o;
      n.current && "focus" in n.current && typeof n.current.focus == "function" && ((o = n.current) == null || o.focus({
        preventScroll: !0
      }))
    };
  return lh(() => {
    let o = -1;
    const i = s => {
      s.key === "Tab" && window.clearTimeout(o)
    };
    return document.addEventListener("keydown", i), e ? n.current = document.activeElement : t && (o = window.setTimeout(r, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", i)
    }
  }, [e, t]), r
}

function Cx(e, t = "body > :not(script)") {
  const n = ah(),
    r = Array.from(document.querySelectorAll(t)).map(o => {
      var l;
      if ((l = o == null ? void 0 : o.shadowRoot) != null && l.contains(e) || o.contains(e)) return;
      const i = o.getAttribute("aria-hidden"),
        s = o.getAttribute("data-hidden"),
        a = o.getAttribute("data-focus-id");
      return o.setAttribute("data-focus-id", n), i === null || i === "false" ? o.setAttribute("aria-hidden", "true") : !s && !a && o.setAttribute("data-hidden", i), {
        node: o,
        ariaHidden: s || null
      }
    });
  return () => {
    r.forEach(o => {
      !o || n !== o.node.getAttribute("data-focus-id") || (o.ariaHidden === null ? o.node.removeAttribute("aria-hidden") : o.node.setAttribute("aria-hidden", o.ariaHidden), o.node.removeAttribute("data-focus-id"), o.node.removeAttribute("data-hidden"))
    })
  }
}
const Ex = /input|select|textarea|button|object/,
  ch = "a, input, select, textarea, button, object, [tabindex]";

function kx(e) {
  return e.style.display === "none"
}

function Nx(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden") return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11);) {
    if (kx(n)) return !1;
    n = n.parentNode
  }
  return !0
}

function uh(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10)
}

function ac(e) {
  const t = e.nodeName.toLowerCase(),
    n = !Number.isNaN(uh(e));
  return (Ex.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && Nx(e)
}

function dh(e) {
  const t = uh(e);
  return (Number.isNaN(t) || t >= 0) && ac(e)
}

function Px(e) {
  return Array.from(e.querySelectorAll(ch)).filter(dh)
}

function Rx(e, t) {
  const n = Px(e);
  if (!n.length) {
    t.preventDefault();
    return
  }
  const r = n[t.shiftKey ? 0 : n.length - 1],
    o = e.getRootNode();
  let i = r === o.activeElement || e === o.activeElement;
  const s = o.activeElement;
  if (s.tagName === "INPUT" && s.getAttribute("type") === "radio" && (i = n.filter(d => d.getAttribute("type") === "radio" && d.getAttribute("name") === s.getAttribute("name")).includes(r)), !i) return;
  t.preventDefault();
  const l = n[t.shiftKey ? n.length - 1 : 0];
  l && l.focus()
}

function $x(e = !0) {
  const t = c.useRef(),
    n = c.useRef(null),
    r = i => {
      let s = i.querySelector("[data-autofocus]");
      if (!s) {
        const a = Array.from(i.querySelectorAll(ch));
        s = a.find(dh) || a.find(ac) || null, !s && ac(i) && (s = i)
      }
      s && s.focus({
        preventScroll: !0
      })
    },
    o = c.useCallback(i => {
      if (e) {
        if (i === null) {
          n.current && (n.current(), n.current = null);
          return
        }
        n.current = Cx(i), t.current !== i && (i ? (setTimeout(() => {
          i.getRootNode() && r(i)
        }), t.current = i) : t.current = null)
      }
    }, [e]);
  return c.useEffect(() => {
    if (!e) return;
    t.current && setTimeout(() => r(t.current));
    const i = s => {
      s.key === "Tab" && t.current && Rx(t.current, s)
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), n.current && n.current()
    }
  }, [e]), o
}
const Mx = O.useId || (() => {});

function Tx() {
  const e = Mx();
  return e ? `mantine-${e.replace(/:/g,"")}` : ""
}

function fh(e) {
  const t = Tx(),
    [n, r] = c.useState(t);
  return Mi(() => {
    r(ah())
  }, []), typeof e == "string" ? e : typeof window > "u" ? t : n
}

function _x(e, t, n) {
  c.useEffect(() => (window.addEventListener(e, t, n), () => window.removeEventListener(e, t, n)), [e, t])
}

function ph(e, t) {
  typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current" in e && (e.current = t)
}

function Ax(...e) {
  return t => {
    e.forEach(n => ph(n, t))
  }
}

function nn(...e) {
  return c.useCallback(Ax(...e), e)
}

function Ox({
  value: e,
  defaultValue: t,
  finalValue: n,
  onChange: r = () => {}
}) {
  const [o, i] = c.useState(t !== void 0 ? t : n), s = (a, ...l) => {
    i(a), r == null || r(a, ...l)
  };
  return e !== void 0 ? [e, r, !0] : [o, s, !1]
}

function mh(e, t) {
  return bx("(prefers-reduced-motion: reduce)", e, t)
}

function jx(e, t, n = {
  autoInvoke: !1
}) {
  const r = c.useRef(null),
    o = c.useCallback((...s) => {
      r.current || (r.current = window.setTimeout(() => {
        e(s), r.current = null
      }, t))
    }, [t]),
    i = c.useCallback(() => {
      r.current && (window.clearTimeout(r.current), r.current = null)
    }, []);
  return c.useEffect(() => (n.autoInvoke && o(), i), [i, o]), {
    start: o,
    clear: i
  }
}

function Dx(e, t, n) {
  const r = c.useRef(),
    o = c.useRef(null);
  return c.useEffect(() => {
    const i = typeof n == "function" ? n() : n;
    return (i || o.current) && (r.current = new MutationObserver(e), r.current.observe(i || o.current, t)), () => {
      var s;
      (s = r.current) == null || s.disconnect()
    }
  }, [e, t]), o
}

function Ix() {
  const [e, t] = c.useState(!1);
  return c.useEffect(() => t(!0), []), e
}
var Lx = {};

function Fx() {
  return typeof process < "u" && Lx ? "production" : "development"
}

function hh(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (n = hh(e[t])) && (r && (r += " "), r += n)
    } else
      for (n in e) e[n] && (r && (r += " "), r += n);
  return r
}

function wt() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = hh(e)) && (r && (r += " "), r += t);
  return r
}
const zx = {};

function Bx(e) {
  const t = {};
  return e.forEach(n => {
    Object.entries(n).forEach(([r, o]) => {
      t[r] ? t[r] = wt(t[r], o) : t[r] = o
    })
  }), t
}

function Mu({
  theme: e,
  classNames: t,
  props: n,
  stylesCtx: r
}) {
  const i = (Array.isArray(t) ? t : [t]).map(s => typeof s == "function" ? s(e, n, r) : s || zx);
  return Bx(i)
}

function lc({
  theme: e,
  styles: t,
  props: n,
  stylesCtx: r
}) {
  return (Array.isArray(t) ? t : [t]).reduce((i, s) => typeof s == "function" ? {
    ...i,
    ...s(e, n, r)
  } : {
    ...i,
    ...s
  }, {})
}
const vh = c.createContext(null);

function hr() {
  const e = c.useContext(vh);
  if (!e) throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e
}

function Ux() {
  return hr().cssVariablesResolver
}

function Wx() {
  return hr().classNamesPrefix
}

function Tu() {
  return hr().getStyleNonce
}

function Vx() {
  return hr().withStaticClasses
}

function Hx() {
  return hr().headless
}

function Kx() {
  var e;
  return (e = hr().stylesTransform) == null ? void 0 : e.sx
}

function Gx() {
  var e;
  return (e = hr().stylesTransform) == null ? void 0 : e.styles
}

function Yx(e) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e)
}

function Xx(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const s = t.split("");
    t = [s[0], s[0], s[1], s[1], s[2], s[2]].join("")
  }
  if (t.length === 8) {
    const s = parseInt(t.slice(6, 8), 16) / 255;
    return {
      r: parseInt(t.slice(0, 2), 16),
      g: parseInt(t.slice(2, 4), 16),
      b: parseInt(t.slice(4, 6), 16),
      a: s
    }
  }
  const n = parseInt(t, 16),
    r = n >> 16 & 255,
    o = n >> 8 & 255,
    i = n & 255;
  return {
    r,
    g: o,
    b: i,
    a: 1
  }
}

function Qx(e) {
  const [t, n, r, o] = e.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return {
    r: t,
    g: n,
    b: r,
    a: o || 1
  }
}

function Zx(e) {
  const t = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,
    n = e.match(t);
  if (!n) return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
  const r = parseInt(n[1], 10),
    o = parseInt(n[2], 10) / 100,
    i = parseInt(n[3], 10) / 100,
    s = n[5] ? parseFloat(n[5]) : void 0,
    a = (1 - Math.abs(2 * i - 1)) * o,
    l = r / 60,
    u = a * (1 - Math.abs(l % 2 - 1)),
    d = i - a / 2;
  let p, f, h;
  return l >= 0 && l < 1 ? (p = a, f = u, h = 0) : l >= 1 && l < 2 ? (p = u, f = a, h = 0) : l >= 2 && l < 3 ? (p = 0, f = a, h = u) : l >= 3 && l < 4 ? (p = 0, f = u, h = a) : l >= 4 && l < 5 ? (p = u, f = 0, h = a) : (p = a, f = 0, h = u), {
    r: Math.round((p + d) * 255),
    g: Math.round((f + d) * 255),
    b: Math.round((h + d) * 255),
    a: s || 1
  }
}

function _u(e) {
  return Yx(e) ? Xx(e) : e.startsWith("rgb") ? Qx(e) : e.startsWith("hsl") ? Zx(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  }
}

function Yi(e, t) {
  if (e.startsWith("var(")) return `color-mix(in srgb, ${e}, black ${t*100}%)`;
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = _u(e), s = 1 - t, a = l => Math.round(l * s);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${i})`
}

function ni(e, t) {
  return typeof e.primaryShade == "number" ? e.primaryShade : t === "dark" ? e.primaryShade.dark : e.primaryShade.light
}

function ml(e) {
  return e <= .03928 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4
}

function qx(e) {
  const t = e.match(/oklch\((.*?)%\s/);
  return t ? parseFloat(t[1]) : null
}

function Jx(e) {
  if (e.startsWith("oklch(")) return (qx(e) || 0) / 100;
  const {
    r: t,
    g: n,
    b: r
  } = _u(e), o = t / 255, i = n / 255, s = r / 255, a = ml(o), l = ml(i), u = ml(s);
  return .2126 * a + .7152 * l + .0722 * u
}

function No(e, t = .179) {
  return e.startsWith("var(") ? !1 : Jx(e) > t
}

function Ti({
  color: e,
  theme: t,
  colorScheme: n
}) {
  if (typeof e != "string") throw new Error(`[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`);
  if (e === "bright") return {
    color: e,
    value: n === "dark" ? t.white : t.black,
    shade: void 0,
    isThemeColor: !1,
    isLight: No(n === "dark" ? t.white : t.black, t.luminanceThreshold),
    variable: "--mantine-color-bright"
  };
  if (e === "dimmed") return {
    color: e,
    value: n === "dark" ? t.colors.dark[2] : t.colors.gray[7],
    shade: void 0,
    isThemeColor: !1,
    isLight: No(n === "dark" ? t.colors.dark[2] : t.colors.gray[6], t.luminanceThreshold),
    variable: "--mantine-color-dimmed"
  };
  if (e === "white" || e === "black") return {
    color: e,
    value: e === "white" ? t.white : t.black,
    shade: void 0,
    isThemeColor: !1,
    isLight: No(e === "white" ? t.white : t.black, t.luminanceThreshold),
    variable: `--mantine-color-${e}`
  };
  const [r, o] = e.split("."), i = o ? Number(o) : void 0, s = r in t.colors;
  if (s) {
    const a = i !== void 0 ? t.colors[r][i] : t.colors[r][ni(t, n || "light")];
    return {
      color: r,
      value: a,
      shade: i,
      isThemeColor: s,
      isLight: No(a, t.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${i}` : `--mantine-color-${r}-filled`
    }
  }
  return {
    color: e,
    value: e,
    isThemeColor: s,
    isLight: No(e, t.luminanceThreshold),
    shade: i,
    variable: void 0
  }
}

function Os(e, t) {
  const n = Ti({
    color: e || t.primaryColor,
    theme: t
  });
  return n.variable ? `var(${n.variable})` : e
}

function Mf(e, t) {
  const n = {
      from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
      to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
      deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0
    },
    r = Os(n.from, t),
    o = Os(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`
}

function Tt(e, t) {
  if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(")) {
    const i = (1 - t) * 100;
    return `color-mix(in srgb, ${e}, transparent ${i}%)`
  }
  if (e.startsWith("oklch")) return e.includes("/") ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`) : e.replace(")", ` / ${t})`);
  const {
    r: n,
    g: r,
    b: o
  } = _u(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`
}
const Pr = Tt,
  eb = ({
    color: e,
    theme: t,
    variant: n,
    gradient: r,
    autoContrast: o
  }) => {
    const i = Ti({
        color: e,
        theme: t
      }),
      s = typeof o == "boolean" ? o : t.autoContrast;
    if (n === "filled") {
      const a = s && i.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
      return i.isThemeColor ? i.shade === void 0 ? {
        background: `var(--mantine-color-${e}-filled)`,
        hover: `var(--mantine-color-${e}-filled-hover)`,
        color: a,
        border: `${_(1)} solid transparent`
      } : {
        background: `var(--mantine-color-${i.color}-${i.shade})`,
        hover: `var(--mantine-color-${i.color}-${i.shade===9?8:i.shade+1})`,
        color: a,
        border: `${_(1)} solid transparent`
      } : {
        background: e,
        hover: Yi(e, .1),
        color: a,
        border: `${_(1)} solid transparent`
      }
    }
    if (n === "light") {
      if (i.isThemeColor) {
        if (i.shade === void 0) return {
          background: `var(--mantine-color-${e}-light)`,
          hover: `var(--mantine-color-${e}-light-hover)`,
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${_(1)} solid transparent`
        };
        const a = t.colors[i.color][i.shade];
        return {
          background: Tt(a, .1),
          hover: Tt(a, .12),
          color: `var(--mantine-color-${i.color}-${Math.min(i.shade,6)})`,
          border: `${_(1)} solid transparent`
        }
      }
      return {
        background: Tt(e, .1),
        hover: Tt(e, .12),
        color: e,
        border: `${_(1)} solid transparent`
      }
    }
    if (n === "outline") return i.isThemeColor ? i.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${e}-outline-hover)`,
      color: `var(--mantine-color-${e}-outline)`,
      border: `${_(1)} solid var(--mantine-color-${e}-outline)`
    } : {
      background: "transparent",
      hover: Tt(t.colors[i.color][i.shade], .05),
      color: `var(--mantine-color-${i.color}-${i.shade})`,
      border: `${_(1)} solid var(--mantine-color-${i.color}-${i.shade})`
    } : {
      background: "transparent",
      hover: Tt(e, .05),
      color: e,
      border: `${_(1)} solid ${e}`
    };
    if (n === "subtle") {
      if (i.isThemeColor) {
        if (i.shade === void 0) return {
          background: "transparent",
          hover: `var(--mantine-color-${e}-light-hover)`,
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${_(1)} solid transparent`
        };
        const a = t.colors[i.color][i.shade];
        return {
          background: "transparent",
          hover: Tt(a, .12),
          color: `var(--mantine-color-${i.color}-${Math.min(i.shade,6)})`,
          border: `${_(1)} solid transparent`
        }
      }
      return {
        background: "transparent",
        hover: Tt(e, .12),
        color: e,
        border: `${_(1)} solid transparent`
      }
    }
    return n === "transparent" ? i.isThemeColor ? i.shade === void 0 ? {
      background: "transparent",
      hover: "transparent",
      color: `var(--mantine-color-${e}-light-color)`,
      border: `${_(1)} solid transparent`
    } : {
      background: "transparent",
      hover: "transparent",
      color: `var(--mantine-color-${i.color}-${Math.min(i.shade,6)})`,
      border: `${_(1)} solid transparent`
    } : {
      background: "transparent",
      hover: "transparent",
      color: e,
      border: `${_(1)} solid transparent`
    } : n === "white" ? i.isThemeColor ? i.shade === void 0 ? {
      background: "var(--mantine-color-white)",
      hover: Yi(t.white, .01),
      color: `var(--mantine-color-${e}-filled)`,
      border: `${_(1)} solid transparent`
    } : {
      background: "var(--mantine-color-white)",
      hover: Yi(t.white, .01),
      color: `var(--mantine-color-${i.color}-${i.shade})`,
      border: `${_(1)} solid transparent`
    } : {
      background: "var(--mantine-color-white)",
      hover: Yi(t.white, .01),
      color: e,
      border: `${_(1)} solid transparent`
    } : n === "gradient" ? {
      background: Mf(r, t),
      hover: Mf(r, t),
      color: "var(--mantine-color-white)",
      border: "none"
    } : n === "default" ? {
      background: "var(--mantine-color-default)",
      hover: "var(--mantine-color-default-hover)",
      color: "var(--mantine-color-default-color)",
      border: `${_(1)} solid var(--mantine-color-default-border)`
    } : {}
  },
  tb = {
    dark: ["#C9C9C9", "#b8b8b8", "#828282", "#696969", "#424242", "#3b3b3b", "#2e2e2e", "#242424", "#1f1f1f", "#141414"],
    gray: ["#f8f9fa", "#f1f3f5", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#868e96", "#495057", "#343a40", "#212529"],
    red: ["#fff5f5", "#ffe3e3", "#ffc9c9", "#ffa8a8", "#ff8787", "#ff6b6b", "#fa5252", "#f03e3e", "#e03131", "#c92a2a"],
    pink: ["#fff0f6", "#ffdeeb", "#fcc2d7", "#faa2c1", "#f783ac", "#f06595", "#e64980", "#d6336c", "#c2255c", "#a61e4d"],
    grape: ["#f8f0fc", "#f3d9fa", "#eebefa", "#e599f7", "#da77f2", "#cc5de8", "#be4bdb", "#ae3ec9", "#9c36b5", "#862e9c"],
    violet: ["#1971c2", "#1971c2"],
    indigo: ["#edf2ff", "#dbe4ff", "#bac8ff", "#91a7ff", "#748ffc", "#5c7cfa", "#4c6ef5", "#4263eb", "#3b5bdb", "#364fc7"],
    blue: ["#e7f5ff", "#d0ebff", "#a5d8ff", "#74c0fc", "#4dabf7", "#339af0", "#228be6", "#1c7ed6", "#1971c2", "#1864ab"],
    cyan: ["#e3fafc", "#c5f6fa", "#99e9f2", "#66d9e8", "#3bc9db", "#22b8cf", "#15aabf", "#1098ad", "#0c8599", "#0b7285"],
    teal: ["#e6fcf5", "#c3fae8", "#96f2d7", "#63e6be", "#38d9a9", "#20c997", "#12b886", "#0ca678", "#099268", "#087f5b"],
    green: ["#ebfbee", "#d3f9d8", "#b2f2bb", "#8ce99a", "#69db7c", "#51cf66", "#40c057", "#37b24d", "#2f9e44", "#2b8a3e"],
    lime: ["#f4fce3", "#e9fac8", "#d8f5a2", "#c0eb75", "#a9e34b", "#94d82d", "#82c91e", "#74b816", "#66a80f", "#5c940d"],
    yellow: ["#fff9db", "#fff3bf", "#ffec99", "#ffe066", "#ffd43b", "#fcc419", "#fab005", "#f59f00", "#f08c00", "#e67700"],
    orange: ["#fff4e6", "#ffe8cc", "#ffd8a8", "#ffc078", "#ffa94d", "#ff922b", "#fd7e14", "#f76707", "#e8590c", "#d9480f"]
  },
  Tf = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  Au = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: tb,
    primaryShade: {
      light: 6,
      dark: 8
    },
    primaryColor: "blue",
    variantColorResolver: eb,
    autoContrast: !1,
    luminanceThreshold: .3,
    fontFamily: Tf,
    fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: !1,
    cursorType: "default",
    defaultGradient: {
      from: "blue",
      to: "cyan",
      deg: 45
    },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: Tf,
      fontWeight: "700",
      textWrap: "wrap",
      sizes: {
        h1: {
          fontSize: _(34),
          lineHeight: "1.3"
        },
        h2: {
          fontSize: _(26),
          lineHeight: "1.35"
        },
        h3: {
          fontSize: _(22),
          lineHeight: "1.4"
        },
        h4: {
          fontSize: _(18),
          lineHeight: "1.45"
        },
        h5: {
          fontSize: _(16),
          lineHeight: "1.5"
        },
        h6: {
          fontSize: _(14),
          lineHeight: "1.5"
        }
      }
    },
    fontSizes: {
      xs: _(12),
      sm: _(14),
      md: _(16),
      lg: _(18),
      xl: _(20)
    },
    lineHeights: {
      xs: "1.4",
      sm: "1.45",
      md: "1.55",
      lg: "1.6",
      xl: "1.65"
    },
    radius: {
      xs: _(2),
      sm: _(4),
      md: _(8),
      lg: _(16),
      xl: _(32)
    },
    spacing: {
      xs: _(10),
      sm: _(12),
      md: _(16),
      lg: _(20),
      xl: _(32)
    },
    breakpoints: {
      xs: "36em",
      sm: "48em",
      md: "62em",
      lg: "75em",
      xl: "88em"
    },
    shadows: {
      xs: `0 ${_(1)} ${_(3)} rgba(0, 0, 0, 0.05), 0 ${_(1)} ${_(2)} rgba(0, 0, 0, 0.1)`,
      sm: `0 ${_(1)} ${_(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${_(10)} ${_(15)} ${_(-5)}, rgba(0, 0, 0, 0.04) 0 ${_(7)} ${_(7)} ${_(-5)}`,
      md: `0 ${_(1)} ${_(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${_(20)} ${_(25)} ${_(-5)}, rgba(0, 0, 0, 0.04) 0 ${_(10)} ${_(10)} ${_(-5)}`,
      lg: `0 ${_(1)} ${_(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${_(28)} ${_(23)} ${_(-7)}, rgba(0, 0, 0, 0.04) 0 ${_(12)} ${_(12)} ${_(-7)}`,
      xl: `0 ${_(1)} ${_(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${_(36)} ${_(28)} ${_(-7)}, rgba(0, 0, 0, 0.04) 0 ${_(17)} ${_(17)} ${_(-7)}`
    },
    other: {},
    components: {}
  };

function _f(e) {
  return e === "auto" || e === "dark" || e === "light"
}

function nb({
  key: e = "mantine-color-scheme-value"
} = {}) {
  let t;
  return {
    get: n => {
      if (typeof window > "u") return n;
      try {
        const r = window.localStorage.getItem(e);
        return _f(r) ? r : n
      } catch {
        return n
      }
    },
    set: n => {
      try {
        window.localStorage.setItem(e, n)
      } catch (r) {
        console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.", r)
      }
    },
    subscribe: n => {
      t = r => {
        r.storageArea === window.localStorage && r.key === e && _f(r.newValue) && n(r.newValue)
      }, window.addEventListener("storage", t)
    },
    unsubscribe: () => {
      window.removeEventListener("storage", t)
    },
    clear: () => {
      window.localStorage.removeItem(e)
    }
  }
}
const rb = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more � https://mantine.dev/theming/colors/#primary-color",
  Af = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";

function hl(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e
}

function Of(e) {
  if (!(e.primaryColor in e.colors)) throw new Error(rb);
  if (typeof e.primaryShade == "object" && (!hl(e.primaryShade.dark) || !hl(e.primaryShade.light))) throw new Error(Af);
  if (typeof e.primaryShade == "number" && !hl(e.primaryShade)) throw new Error(Af)
}

function ob(e, t) {
  var r;
  if (!t) return Of(e), e;
  const n = Ru(e, t);
  return t.fontFamily && !((r = t.headings) != null && r.fontFamily) && (n.headings.fontFamily = t.fontFamily), Of(n), n
}
const Ou = c.createContext(null),
  ib = () => c.useContext(Ou) || Au;

function In() {
  const e = c.useContext(Ou);
  if (!e) throw new Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");
  return e
}

function gh({
  theme: e,
  children: t,
  inherit: n = !0
}) {
  const r = ib(),
    o = c.useMemo(() => ob(n ? r : Au, e), [e, r, n]);
  return m.jsx(Ou.Provider, {
    value: o,
    children: t
  })
}
gh.displayName = "@mantine/core/MantineThemeProvider";

function sb() {
  const e = In(),
    t = Tu(),
    n = jt(e.breakpoints).reduce((r, o) => {
      const i = e.breakpoints[o].includes("px"),
        s = mx(e.breakpoints[o]),
        a = i ? `${s-.1}px` : $f(s - .1),
        l = i ? `${s}px` : $f(s);
      return `${r}@media (max-width: ${a}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${l}) {.mantine-hidden-from-${o} {display: none !important;}}`
    }, "");
  return m.jsx("style", {
    "data-mantine-styles": "classes",
    nonce: t == null ? void 0 : t(),
    dangerouslySetInnerHTML: {
      __html: n
    }
  })
}

function vl(e) {
  return Object.entries(e).map(([t, n]) => `${t}: ${n};`).join("")
}

function Po(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t)
}

function ab(e, t) {
  const n = vl(e.variables),
    r = n ? Po(t, n) : "",
    o = vl(e.dark),
    i = vl(e.light),
    s = o ? Po(t === ":host" ? `${t}([data-mantine-color-scheme="dark"])` : `${t}[data-mantine-color-scheme="dark"]`, o) : "",
    a = i ? Po(t === ":host" ? `${t}([data-mantine-color-scheme="light"])` : `${t}[data-mantine-color-scheme="light"]`, i) : "";
  return `${r}${s}${a}`
}

function yh({
  color: e,
  theme: t,
  autoContrast: n
}) {
  return (typeof n == "boolean" ? n : t.autoContrast) && Ti({
    color: e || t.primaryColor,
    theme: t
  }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)"
}

function jf(e, t) {
  return yh({
    color: e.colors[e.primaryColor][ni(e, t)],
    theme: e,
    autoContrast: null
  })
}

function Xi({
  theme: e,
  color: t,
  colorScheme: n,
  name: r = t,
  withColorValues: o = !0
}) {
  if (!e.colors[t]) return {};
  if (n === "light") {
    const a = ni(e, "light"),
      l = {
        [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
        [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${a})`,
        [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${a===9?8:a+1})`,
        [`--mantine-color-${r}-light`]: Pr(e.colors[t][a], .1),
        [`--mantine-color-${r}-light-hover`]: Pr(e.colors[t][a], .12),
        [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${a})`,
        [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${a})`,
        [`--mantine-color-${r}-outline-hover`]: Pr(e.colors[t][a], .05)
      };
    return o ? {
      [`--mantine-color-${r}-0`]: e.colors[t][0],
      [`--mantine-color-${r}-1`]: e.colors[t][1],
      [`--mantine-color-${r}-2`]: e.colors[t][2],
      [`--mantine-color-${r}-3`]: e.colors[t][3],
      [`--mantine-color-${r}-4`]: e.colors[t][4],
      [`--mantine-color-${r}-5`]: e.colors[t][5],
      [`--mantine-color-${r}-6`]: e.colors[t][6],
      [`--mantine-color-${r}-7`]: e.colors[t][7],
      [`--mantine-color-${r}-8`]: e.colors[t][8],
      [`--mantine-color-${r}-9`]: e.colors[t][9],
      ...l
    } : l
  }
  const i = ni(e, "dark"),
    s = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${i})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${i===9?8:i+1})`,
      [`--mantine-color-${r}-light`]: Pr(e.colors[t][Math.max(0, i - 2)], .15),
      [`--mantine-color-${r}-light-hover`]: Pr(e.colors[t][Math.max(0, i - 2)], .2),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(i-5,0)})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(i-4,0)})`,
      [`--mantine-color-${r}-outline-hover`]: Pr(e.colors[t][Math.max(i - 4, 0)], .05)
    };
  return o ? {
    [`--mantine-color-${r}-0`]: e.colors[t][0],
    [`--mantine-color-${r}-1`]: e.colors[t][1],
    [`--mantine-color-${r}-2`]: e.colors[t][2],
    [`--mantine-color-${r}-3`]: e.colors[t][3],
    [`--mantine-color-${r}-4`]: e.colors[t][4],
    [`--mantine-color-${r}-5`]: e.colors[t][5],
    [`--mantine-color-${r}-6`]: e.colors[t][6],
    [`--mantine-color-${r}-7`]: e.colors[t][7],
    [`--mantine-color-${r}-8`]: e.colors[t][8],
    [`--mantine-color-${r}-9`]: e.colors[t][9],
    ...s
  } : s
}

function lb(e) {
  return !!e && typeof e == "object" && "mantine-virtual-color" in e
}

function Rr(e, t, n) {
  jt(t).forEach(r => Object.assign(e, {
    [`--mantine-${n}-${r}`]: t[r]
  }))
}
const wh = e => {
  const t = ni(e, "light"),
    n = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : _(e.defaultRadius),
    r = {
      variables: {
        "--mantine-scale": e.scale.toString(),
        "--mantine-cursor-type": e.cursorType,
        "--mantine-color-scheme": "light dark",
        "--mantine-webkit-font-smoothing": e.fontSmoothing ? "antialiased" : "unset",
        "--mantine-moz-font-smoothing": e.fontSmoothing ? "grayscale" : "unset",
        "--mantine-color-white": e.white,
        "--mantine-color-black": e.black,
        "--mantine-line-height": e.lineHeights.md,
        "--mantine-font-family": e.fontFamily,
        "--mantine-font-family-monospace": e.fontFamilyMonospace,
        "--mantine-font-family-headings": e.headings.fontFamily,
        "--mantine-heading-font-weight": e.headings.fontWeight,
        "--mantine-heading-text-wrap": e.headings.textWrap,
        "--mantine-radius-default": n,
        "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
        "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
        "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
        "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
        "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`
      },
      light: {
        "--mantine-primary-color-contrast": jf(e, "light"),
        "--mantine-color-bright": "var(--mantine-color-black)",
        "--mantine-color-text": e.black,
        "--mantine-color-body": e.white,
        "--mantine-color-error": "var(--mantine-color-red-6)",
        "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
        "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${t})`,
        "--mantine-color-default": "var(--mantine-color-white)",
        "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
        "--mantine-color-default-color": "var(--mantine-color-black)",
        "--mantine-color-default-border": "var(--mantine-color-gray-4)",
        "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
      },
      dark: {
        "--mantine-primary-color-contrast": jf(e, "dark"),
        "--mantine-color-bright": "var(--mantine-color-white)",
        "--mantine-color-text": "var(--mantine-color-dark-0)",
        "--mantine-color-body": "var(--mantine-color-dark-7)",
        "--mantine-color-error": "var(--mantine-color-red-8)",
        "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
        "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
        "--mantine-color-default": "var(--mantine-color-dark-6)",
        "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
        "--mantine-color-default-color": "var(--mantine-color-white)",
        "--mantine-color-default-border": "var(--mantine-color-dark-4)",
        "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
      }
    };
  Rr(r.variables, e.breakpoints, "breakpoint"), Rr(r.variables, e.spacing, "spacing"), Rr(r.variables, e.fontSizes, "font-size"), Rr(r.variables, e.lineHeights, "line-height"), Rr(r.variables, e.shadows, "shadow"), Rr(r.variables, e.radius, "radius"), e.colors[e.primaryColor].forEach((i, s) => {
    r.variables[`--mantine-primary-color-${s}`] = `var(--mantine-color-${e.primaryColor}-${s})`
  }), jt(e.colors).forEach(i => {
    const s = e.colors[i];
    if (lb(s)) {
      Object.assign(r.light, Xi({
        theme: e,
        name: s.name,
        color: s.light,
        colorScheme: "light",
        withColorValues: !0
      })), Object.assign(r.dark, Xi({
        theme: e,
        name: s.name,
        color: s.dark,
        colorScheme: "dark",
        withColorValues: !0
      }));
      return
    }
    s.forEach((a, l) => {
      r.variables[`--mantine-color-${i}-${l}`] = a
    }), Object.assign(r.light, Xi({
      theme: e,
      color: i,
      colorScheme: "light",
      withColorValues: !1
    })), Object.assign(r.dark, Xi({
      theme: e,
      color: i,
      colorScheme: "dark",
      withColorValues: !1
    }))
  });
  const o = e.headings.sizes;
  return jt(o).forEach(i => {
    r.variables[`--mantine-${i}-font-size`] = o[i].fontSize, r.variables[`--mantine-${i}-line-height`] = o[i].lineHeight, r.variables[`--mantine-${i}-font-weight`] = o[i].fontWeight || e.headings.fontWeight
  }), r
};

function cb({
  theme: e,
  generator: t
}) {
  const n = wh(e),
    r = t == null ? void 0 : t(e);
  return r ? Ru(n, r) : n
}
const gl = wh(Au);

function ub(e) {
  const t = {
    variables: {},
    light: {},
    dark: {}
  };
  return jt(e.variables).forEach(n => {
    gl.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n])
  }), jt(e.light).forEach(n => {
    gl.light[n] !== e.light[n] && (t.light[n] = e.light[n])
  }), jt(e.dark).forEach(n => {
    gl.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n])
  }), t
}

function db(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`
}

function xh({
  cssVariablesSelector: e,
  deduplicateCssVariables: t
}) {
  const n = In(),
    r = Tu(),
    o = Ux(),
    i = cb({
      theme: n,
      generator: o
    }),
    s = e === ":root" && t,
    a = s ? ub(i) : i,
    l = ab(a, e);
  return l ? m.jsx("style", {
    "data-mantine-styles": !0,
    nonce: r == null ? void 0 : r(),
    dangerouslySetInnerHTML: {
      __html: `${l}${s?"":db(e)}`
    }
  }) : null
}
xh.displayName = "@mantine/CssVariables";

function fb() {
  const e = console.error;
  console.error = (...t) => {
    t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t)
  }
}

function $r(e, t) {
  var r;
  const n = e !== "auto" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n)
}

function pb({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r
}) {
  const o = c.useRef(),
    [i, s] = c.useState(() => e.get(t)),
    a = r || i,
    l = c.useCallback(d => {
      r || ($r(d, n), s(d), e.set(d))
    }, [e.set, a, r]),
    u = c.useCallback(() => {
      s(t), $r(t, n), e.clear()
    }, [e.clear, t]);
  return c.useEffect(() => (e.subscribe(l), e.unsubscribe), [e.subscribe, e.unsubscribe]), Mi(() => {
    $r(e.get(t), n)
  }, []), c.useEffect(() => {
    var p;
    if (r) return $r(r, n), () => {};
    r === void 0 && $r(i, n), o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const d = f => {
      i === "auto" && $r(f.matches ? "dark" : "light", n)
    };
    return (p = o.current) == null || p.addEventListener("change", d), () => {
      var f;
      return (f = o.current) == null ? void 0 : f.removeEventListener("change", d)
    }
  }, [i, r]), {
    colorScheme: a,
    setColorScheme: l,
    clearColorScheme: u
  }
}

function mb({
  respectReducedMotion: e,
  getRootElement: t
}) {
  Mi(() => {
    var n;
    e && ((n = t()) == null || n.setAttribute("data-respect-reduced-motion", "true"))
  }, [e])
}
fb();

function bh({
  theme: e,
  children: t,
  getStyleNonce: n,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: i = !0,
  withCssVariables: s = !0,
  cssVariablesSelector: a = ":root",
  classNamesPrefix: l = "mantine",
  colorSchemeManager: u = nb(),
  defaultColorScheme: d = "light",
  getRootElement: p = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: h,
  stylesTransform: w
}) {
  const {
    colorScheme: g,
    setColorScheme: b,
    clearColorScheme: v
  } = pb({
    defaultColorScheme: d,
    forceColorScheme: h,
    manager: u,
    getRootElement: p
  });
  return mb({
    respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
    getRootElement: p
  }), m.jsx(vh.Provider, {
    value: {
      colorScheme: g,
      setColorScheme: b,
      clearColorScheme: v,
      getRootElement: p,
      classNamesPrefix: l,
      getStyleNonce: n,
      cssVariablesResolver: f,
      cssVariablesSelector: a,
      withStaticClasses: r,
      stylesTransform: w
    },
    children: m.jsxs(gh, {
      theme: e,
      children: [s && m.jsx(xh, {
        cssVariablesSelector: a,
        deduplicateCssVariables: i
      }), o && m.jsx(sb, {}), t]
    })
  })
}
bh.displayName = "@mantine/core/MantineProvider";
const hb = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};

function vb({
  theme: e,
  options: t,
  unstyled: n
}) {
  return wt((t == null ? void 0 : t.focusable) && !n && (e.focusClassName || hb[e.focusRing]), (t == null ? void 0 : t.active) && !n && e.activeClassName)
}

function gb({
  selector: e,
  stylesCtx: t,
  options: n,
  props: r,
  theme: o
}) {
  return Mu({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t
  })[e]
}

function Df({
  selector: e,
  stylesCtx: t,
  theme: n,
  classNames: r,
  props: o
}) {
  return Mu({
    theme: n,
    classNames: r,
    props: o,
    stylesCtx: t
  })[e]
}

function yb({
  rootSelector: e,
  selector: t,
  className: n
}) {
  return e === t ? n : void 0
}

function wb({
  selector: e,
  classes: t,
  unstyled: n
}) {
  return n ? void 0 : t[e]
}

function xb({
  themeName: e,
  classNamesPrefix: t,
  selector: n,
  withStaticClass: r
}) {
  return r === !1 ? [] : e.map(o => `${t}-${o}-${n}`)
}

function bb({
  themeName: e,
  theme: t,
  selector: n,
  props: r,
  stylesCtx: o
}) {
  return e.map(i => {
    var s, a;
    return (a = Mu({
      theme: t,
      classNames: (s = t.components[i]) == null ? void 0 : s.classNames,
      props: r,
      stylesCtx: o
    })) == null ? void 0 : a[n]
  })
}

function Sb({
  options: e,
  classes: t,
  selector: n,
  unstyled: r
}) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0
}

function Cb({
  theme: e,
  options: t,
  themeName: n,
  selector: r,
  classNamesPrefix: o,
  classNames: i,
  classes: s,
  unstyled: a,
  className: l,
  rootSelector: u,
  props: d,
  stylesCtx: p,
  withStaticClasses: f,
  headless: h,
  transformedStyles: w
}) {
  return wt(vb({
    theme: e,
    options: t,
    unstyled: a || h
  }), bb({
    theme: e,
    themeName: n,
    selector: r,
    props: d,
    stylesCtx: p
  }), Sb({
    options: t,
    classes: s,
    selector: r,
    unstyled: a
  }), Df({
    selector: r,
    stylesCtx: p,
    theme: e,
    classNames: i,
    props: d
  }), Df({
    selector: r,
    stylesCtx: p,
    theme: e,
    classNames: w,
    props: d
  }), gb({
    selector: r,
    stylesCtx: p,
    options: t,
    props: d,
    theme: e
  }), yb({
    rootSelector: u,
    selector: r,
    className: l
  }), wb({
    selector: r,
    classes: s,
    unstyled: a || h
  }), f && !h && xb({
    themeName: n,
    classNamesPrefix: o,
    selector: r,
    withStaticClass: t == null ? void 0 : t.withStaticClass
  }), t == null ? void 0 : t.className)
}

function Eb({
  theme: e,
  themeName: t,
  props: n,
  stylesCtx: r,
  selector: o
}) {
  return t.map(i => {
    var s;
    return lc({
      theme: e,
      styles: (s = e.components[i]) == null ? void 0 : s.styles,
      props: n,
      stylesCtx: r
    })[o]
  }).reduce((i, s) => ({
    ...i,
    ...s
  }), {})
}

function cc({
  style: e,
  theme: t
}) {
  return Array.isArray(e) ? [...e].reduce((n, r) => ({
    ...n,
    ...cc({
      style: r,
      theme: t
    })
  }), {}) : typeof e == "function" ? e(t) : e ?? {}
}

function kb(e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach(r => {
    t[r] = {
      ...t[r],
      ...$u(n[r])
    }
  }), t), {})
}

function Nb({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: i,
  themeName: s,
  headless: a
}) {
  var l;
  return (l = kb([a ? {} : t == null ? void 0 : t(n, r, o), ...s.map(u => {
    var d, p, f;
    return (f = (p = (d = n.components) == null ? void 0 : d[u]) == null ? void 0 : p.vars) == null ? void 0 : f.call(p, n, r, o)
  }), e == null ? void 0 : e(n, r, o)])) == null ? void 0 : l[i]
}

function Pb({
  theme: e,
  themeName: t,
  selector: n,
  options: r,
  props: o,
  stylesCtx: i,
  rootSelector: s,
  styles: a,
  style: l,
  vars: u,
  varsResolver: d,
  headless: p,
  withStylesTransform: f
}) {
  return {
    ...!f && Eb({
      theme: e,
      themeName: t,
      props: o,
      stylesCtx: i,
      selector: n
    }),
    ...!f && lc({
      theme: e,
      styles: a,
      props: o,
      stylesCtx: i
    })[n],
    ...!f && lc({
      theme: e,
      styles: r == null ? void 0 : r.styles,
      props: (r == null ? void 0 : r.props) || o,
      stylesCtx: i
    })[n],
    ...Nb({
      theme: e,
      props: o,
      stylesCtx: i,
      vars: u,
      varsResolver: d,
      selector: n,
      themeName: t,
      headless: p
    }),
    ...s === n ? cc({
      style: l,
      theme: e
    }) : null,
    ...cc({
      style: r == null ? void 0 : r.style,
      theme: e
    })
  }
}

function Rb({
  props: e,
  stylesCtx: t,
  themeName: n
}) {
  var s;
  const r = In(),
    o = (s = Gx()) == null ? void 0 : s();
  return {
    getTransformedStyles: a => o ? [...a.map(u => o(u, {
      props: e,
      theme: r,
      ctx: t
    })), ...n.map(u => {
      var d;
      return o((d = r.components[u]) == null ? void 0 : d.styles, {
        props: e,
        theme: r,
        ctx: t
      })
    })].filter(Boolean) : [],
    withStylesTransform: !!o
  }
}

function Ft({
  name: e,
  classes: t,
  props: n,
  stylesCtx: r,
  className: o,
  style: i,
  rootSelector: s = "root",
  unstyled: a,
  classNames: l,
  styles: u,
  vars: d,
  varsResolver: p
}) {
  const f = In(),
    h = Wx(),
    w = Vx(),
    g = Hx(),
    b = (Array.isArray(e) ? e : [e]).filter(x => x),
    {
      withStylesTransform: v,
      getTransformedStyles: y
    } = Rb({
      props: n,
      stylesCtx: r,
      themeName: b
    });
  return (x, S) => ({
    className: Cb({
      theme: f,
      options: S,
      themeName: b,
      selector: x,
      classNamesPrefix: h,
      classNames: l,
      classes: t,
      unstyled: a,
      className: o,
      rootSelector: s,
      props: n,
      stylesCtx: r,
      withStaticClasses: w,
      headless: g,
      transformedStyles: y([S == null ? void 0 : S.styles, u])
    }),
    style: Pb({
      theme: f,
      themeName: b,
      selector: x,
      options: S,
      props: n,
      stylesCtx: r,
      rootSelector: s,
      styles: u,
      style: i,
      vars: d,
      varsResolver: p,
      headless: g,
      withStylesTransform: v
    })
  })
}

function xe(e, t, n) {
  var s;
  const r = In(),
    o = (s = r.components[e]) == null ? void 0 : s.defaultProps,
    i = typeof o == "function" ? o(r) : o;
  return {
    ...t,
    ...i,
    ...$u(n)
  }
}

function yl(e) {
  return jt(e).reduce((t, n) => e[n] !== void 0 ? `${t}${fx(n)}:${e[n]};` : t, "").trim()
}

function $b({
  selector: e,
  styles: t,
  media: n,
  container: r
}) {
  const o = t ? yl(t) : "",
    i = Array.isArray(n) ? n.map(a => `@media${a.query}{${e}{${yl(a.styles)}}}`) : [],
    s = Array.isArray(r) ? r.map(a => `@container ${a.query}{${e}{${yl(a.styles)}}}`) : [];
  return `${o?`${e}{${o}}`:""}${i.join("")}${s.join("")}`.trim()
}

function Mb(e) {
  const t = Tu();
  return m.jsx("style", {
    "data-mantine-styles": "inline",
    nonce: t == null ? void 0 : t(),
    dangerouslySetInnerHTML: {
      __html: $b(e)
    }
  })
}

function Tb(e) {
  const {
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: i,
    ml: s,
    mr: a,
    me: l,
    ms: u,
    p: d,
    px: p,
    py: f,
    pt: h,
    pb: w,
    pl: g,
    pr: b,
    pe: v,
    ps: y,
    bd: x,
    bg: S,
    c: C,
    opacity: E,
    ff: k,
    fz: N,
    fw: T,
    lts: M,
    ta: z,
    lh: I,
    fs: Y,
    tt: H,
    td: Q,
    w: K,
    miw: V,
    maw: R,
    h: $,
    mih: L,
    mah: j,
    bgsz: P,
    bgp: D,
    bgr: W,
    bga: F,
    pos: B,
    top: Z,
    left: G,
    bottom: ne,
    right: Ee,
    inset: br,
    display: cn,
    flex: zt,
    hiddenFrom: Vn,
    visibleFrom: Sr,
    lightHidden: Pt,
    darkHidden: Eo,
    sx: ko,
    ...be
  } = e;
  return {
    styleProps: $u({
      m: t,
      mx: n,
      my: r,
      mt: o,
      mb: i,
      ml: s,
      mr: a,
      me: l,
      ms: u,
      p: d,
      px: p,
      py: f,
      pt: h,
      pb: w,
      pl: g,
      pr: b,
      pe: v,
      ps: y,
      bd: x,
      bg: S,
      c: C,
      opacity: E,
      ff: k,
      fz: N,
      fw: T,
      lts: M,
      ta: z,
      lh: I,
      fs: Y,
      tt: H,
      td: Q,
      w: K,
      miw: V,
      maw: R,
      h: $,
      mih: L,
      mah: j,
      bgsz: P,
      bgp: D,
      bgr: W,
      bga: F,
      pos: B,
      top: Z,
      left: G,
      bottom: ne,
      right: Ee,
      inset: br,
      display: cn,
      flex: zt,
      hiddenFrom: Vn,
      visibleFrom: Sr,
      lightHidden: Pt,
      darkHidden: Eo,
      sx: ko
    }),
    rest: be
  }
}
const _b = {
  m: {
    type: "spacing",
    property: "margin"
  },
  mt: {
    type: "spacing",
    property: "marginTop"
  },
  mb: {
    type: "spacing",
    property: "marginBottom"
  },
  ml: {
    type: "spacing",
    property: "marginLeft"
  },
  mr: {
    type: "spacing",
    property: "marginRight"
  },
  ms: {
    type: "spacing",
    property: "marginInlineStart"
  },
  me: {
    type: "spacing",
    property: "marginInlineEnd"
  },
  mx: {
    type: "spacing",
    property: "marginInline"
  },
  my: {
    type: "spacing",
    property: "marginBlock"
  },
  p: {
    type: "spacing",
    property: "padding"
  },
  pt: {
    type: "spacing",
    property: "paddingTop"
  },
  pb: {
    type: "spacing",
    property: "paddingBottom"
  },
  pl: {
    type: "spacing",
    property: "paddingLeft"
  },
  pr: {
    type: "spacing",
    property: "paddingRight"
  },
  ps: {
    type: "spacing",
    property: "paddingInlineStart"
  },
  pe: {
    type: "spacing",
    property: "paddingInlineEnd"
  },
  px: {
    type: "spacing",
    property: "paddingInline"
  },
  py: {
    type: "spacing",
    property: "paddingBlock"
  },
  bd: {
    type: "border",
    property: "border"
  },
  bg: {
    type: "color",
    property: "background"
  },
  c: {
    type: "textColor",
    property: "color"
  },
  opacity: {
    type: "identity",
    property: "opacity"
  },
  ff: {
    type: "fontFamily",
    property: "fontFamily"
  },
  fz: {
    type: "fontSize",
    property: "fontSize"
  },
  fw: {
    type: "identity",
    property: "fontWeight"
  },
  lts: {
    type: "size",
    property: "letterSpacing"
  },
  ta: {
    type: "identity",
    property: "textAlign"
  },
  lh: {
    type: "lineHeight",
    property: "lineHeight"
  },
  fs: {
    type: "identity",
    property: "fontStyle"
  },
  tt: {
    type: "identity",
    property: "textTransform"
  },
  td: {
    type: "identity",
    property: "textDecoration"
  },
  w: {
    type: "spacing",
    property: "width"
  },
  miw: {
    type: "spacing",
    property: "minWidth"
  },
  maw: {
    type: "spacing",
    property: "maxWidth"
  },
  h: {
    type: "spacing",
    property: "height"
  },
  mih: {
    type: "spacing",
    property: "minHeight"
  },
  mah: {
    type: "spacing",
    property: "maxHeight"
  },
  bgsz: {
    type: "size",
    property: "backgroundSize"
  },
  bgp: {
    type: "identity",
    property: "backgroundPosition"
  },
  bgr: {
    type: "identity",
    property: "backgroundRepeat"
  },
  bga: {
    type: "identity",
    property: "backgroundAttachment"
  },
  pos: {
    type: "identity",
    property: "position"
  },
  top: {
    type: "identity",
    property: "top"
  },
  left: {
    type: "size",
    property: "left"
  },
  bottom: {
    type: "size",
    property: "bottom"
  },
  right: {
    type: "size",
    property: "right"
  },
  inset: {
    type: "size",
    property: "inset"
  },
  display: {
    type: "identity",
    property: "display"
  },
  flex: {
    type: "identity",
    property: "flex"
  }
};

function ju(e, t) {
  const n = Ti({
    color: e,
    theme: t
  });
  return n.color === "dimmed" ? "var(--mantine-color-dimmed)" : n.color === "bright" ? "var(--mantine-color-bright)" : n.variable ? `var(${n.variable})` : n.color
}

function Ab(e, t) {
  const n = Ti({
    color: e,
    theme: t
  });
  return n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : ju(e, t)
}

function Ob(e, t) {
  if (typeof e == "number") return _(e);
  if (typeof e == "string") {
    const [n, r, ...o] = e.split(" ").filter(s => s.trim() !== "");
    let i = `${_(n)}`;
    return r && (i += ` ${r}`), o.length > 0 && (i += ` ${ju(o.join(" "),t)}`), i.trim()
  }
  return e
}
const If = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};

function jb(e) {
  return typeof e == "string" && e in If ? If[e] : e
}
const Db = ["h1", "h2", "h3", "h4", "h5", "h6"];

function Ib(e, t) {
  return typeof e == "string" && e in t.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "string" && Db.includes(e) ? `var(--mantine-${e}-font-size)` : typeof e == "number" || typeof e == "string" ? _(e) : e
}

function Lb(e) {
  return e
}
const Fb = ["h1", "h2", "h3", "h4", "h5", "h6"];

function zb(e, t) {
  return typeof e == "string" && e in t.lineHeights ? `var(--mantine-line-height-${e})` : typeof e == "string" && Fb.includes(e) ? `var(--mantine-${e}-line-height)` : e
}

function Bb(e) {
  return typeof e == "number" ? _(e) : e
}

function Ub(e, t) {
  if (typeof e == "number") return _(e);
  if (typeof e == "string") {
    const n = e.replace("-", "");
    if (!(n in t.spacing)) return _(e);
    const r = `--mantine-spacing-${n}`;
    return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`
  }
  return e
}
const wl = {
  color: ju,
  textColor: Ab,
  fontSize: Ib,
  spacing: Ub,
  identity: Lb,
  size: Bb,
  lineHeight: zb,
  fontFamily: jb,
  border: Ob
};

function Lf(e) {
  return e.replace("(min-width: ", "").replace("em)", "")
}

function Wb({
  media: e,
  ...t
}) {
  const r = Object.keys(e).sort((o, i) => Number(Lf(o)) - Number(Lf(i))).map(o => ({
    query: o,
    styles: e[o]
  }));
  return {
    ...t,
    media: r
  }
}

function Vb(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base")
}

function Hb(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e
}

function Kb(e) {
  return typeof e == "object" && e !== null ? jt(e).filter(t => t !== "base") : []
}

function Gb(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e
}

function Yb({
  styleProps: e,
  data: t,
  theme: n
}) {
  return Wb(jt(e).reduce((r, o) => {
    if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx") return r;
    const i = t[o],
      s = Array.isArray(i.property) ? i.property : [i.property],
      a = Hb(e[o]);
    if (!Vb(e[o])) return s.forEach(u => {
      r.inlineStyles[u] = wl[i.type](a, n)
    }), r;
    r.hasResponsiveStyles = !0;
    const l = Kb(e[o]);
    return s.forEach(u => {
      a && (r.styles[u] = wl[i.type](a, n)), l.forEach(d => {
        const p = `(min-width: ${n.breakpoints[d]})`;
        r.media[p] = {
          ...r.media[p],
          [u]: wl[i.type](Gb(e[o], d), n)
        }
      })
    }), r
  }, {
    hasResponsiveStyles: !1,
    styles: {},
    inlineStyles: {},
    media: {}
  }))
}

function Xb() {
  return `__m__-${c.useId().replace(/:/g,"")}`
}

function Sh(e) {
  return e.startsWith("data-") ? e : `data-${e}`
}

function Qb(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return r === void 0 || r === "" || r === !1 || r === null || (t[Sh(n)] = e[n]), t
  }, {})
}

function Ch(e) {
  return e ? typeof e == "string" ? {
    [Sh(e)]: !0
  } : Array.isArray(e) ? [...e].reduce((t, n) => ({
    ...t,
    ...Ch(n)
  }), {}) : Qb(e) : null
}

function uc(e, t) {
  return Array.isArray(e) ? [...e].reduce((n, r) => ({
    ...n,
    ...uc(r, t)
  }), {}) : typeof e == "function" ? e(t) : e ?? {}
}

function Zb({
  theme: e,
  style: t,
  vars: n,
  styleProps: r
}) {
  const o = uc(t, e),
    i = uc(n, e);
  return {
    ...o,
    ...i,
    ...r
  }
}
const Eh = c.forwardRef(({
  component: e,
  style: t,
  __vars: n,
  className: r,
  variant: o,
  mod: i,
  size: s,
  hiddenFrom: a,
  visibleFrom: l,
  lightHidden: u,
  darkHidden: d,
  renderRoot: p,
  __size: f,
  ...h
}, w) => {
  var N;
  const g = In(),
    b = e || "div",
    {
      styleProps: v,
      rest: y
    } = Tb(h),
    x = Kx(),
    S = (N = x == null ? void 0 : x()) == null ? void 0 : N(v.sx),
    C = Xb(),
    E = Yb({
      styleProps: v,
      theme: g,
      data: _b
    }),
    k = {
      ref: w,
      style: Zb({
        theme: g,
        style: t,
        vars: n,
        styleProps: E.inlineStyles
      }),
      className: wt(r, S, {
        [C]: E.hasResponsiveStyles,
        "mantine-light-hidden": u,
        "mantine-dark-hidden": d,
        [`mantine-hidden-from-${a}`]: a,
        [`mantine-visible-from-${l}`]: l
      }),
      "data-variant": o,
      "data-size": ih(s) ? void 0 : s || void 0,
      size: f,
      ...Ch(i),
      ...y
    };
  return m.jsxs(m.Fragment, {
    children: [E.hasResponsiveStyles && m.jsx(Mb, {
      selector: `.${C}`,
      styles: E.styles,
      media: E.media
    }), typeof p == "function" ? p(k) : m.jsx(b, {
      ...k
    })]
  })
});
Eh.displayName = "@mantine/core/Box";
const Ne = Eh;

function kh(e) {
  return e
}

function Ge(e) {
  const t = c.forwardRef(e);
  return t.extend = kh, t.withProps = n => {
    const r = c.forwardRef((o, i) => m.jsx(t, {
      ...n,
      ...o,
      ref: i
    }));
    return r.extend = t.extend, r.displayName = `WithProps(${t.displayName})`, r
  }, t
}

function xa(e) {
  const t = c.forwardRef(e);
  return t.withProps = n => {
    const r = c.forwardRef((o, i) => m.jsx(t, {
      ...n,
      ...o,
      ref: i
    }));
    return r.extend = t.extend, r.displayName = `WithProps(${t.displayName})`, r
  }, t.extend = kh, t
}
const qb = c.createContext({
  dir: "ltr",
  toggleDirection: () => {},
  setDirection: () => {}
});

function Jb() {
  return c.useContext(qb)
}
var Nh = {
    exports: {}
  },
  nt = {},
  Ph = {
    exports: {}
  },
  Rh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(R, $) {
    var L = R.length;
    R.push($);
    e: for (; 0 < L;) {
      var j = L - 1 >>> 1,
        P = R[j];
      if (0 < o(P, $)) R[j] = $, R[L] = P, L = j;
      else break e
    }
  }

  function n(R) {
    return R.length === 0 ? null : R[0]
  }

  function r(R) {
    if (R.length === 0) return null;
    var $ = R[0],
      L = R.pop();
    if (L !== $) {
      R[0] = L;
      e: for (var j = 0, P = R.length, D = P >>> 1; j < D;) {
        var W = 2 * (j + 1) - 1,
          F = R[W],
          B = W + 1,
          Z = R[B];
        if (0 > o(F, L)) B < P && 0 > o(Z, F) ? (R[j] = Z, R[B] = L, j = B) : (R[j] = F, R[W] = L, j = W);
        else if (B < P && 0 > o(Z, L)) R[j] = Z, R[B] = L, j = B;
        else break e
      }
    }
    return $
  }

  function o(R, $) {
    var L = R.sortIndex - $.sortIndex;
    return L !== 0 ? L : R.id - $.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now()
    }
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function() {
      return s.now() - a
    }
  }
  var l = [],
    u = [],
    d = 1,
    p = null,
    f = 3,
    h = !1,
    w = !1,
    g = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

  function x(R) {
    for (var $ = n(u); $ !== null;) {
      if ($.callback === null) r(u);
      else if ($.startTime <= R) r(u), $.sortIndex = $.expirationTime, t(l, $);
      else break;
      $ = n(u)
    }
  }

  function S(R) {
    if (g = !1, x(R), !w)
      if (n(l) !== null) w = !0, K(C);
      else {
        var $ = n(u);
        $ !== null && V(S, $.startTime - R)
      }
  }

  function C(R, $) {
    w = !1, g && (g = !1, v(N), N = -1), h = !0;
    var L = f;
    try {
      for (x($), p = n(l); p !== null && (!(p.expirationTime > $) || R && !z());) {
        var j = p.callback;
        if (typeof j == "function") {
          p.callback = null, f = p.priorityLevel;
          var P = j(p.expirationTime <= $);
          $ = e.unstable_now(), typeof P == "function" ? p.callback = P : p === n(l) && r(l), x($)
        } else r(l);
        p = n(l)
      }
      if (p !== null) var D = !0;
      else {
        var W = n(u);
        W !== null && V(S, W.startTime - $), D = !1
      }
      return D
    } finally {
      p = null, f = L, h = !1
    }
  }
  var E = !1,
    k = null,
    N = -1,
    T = 5,
    M = -1;

  function z() {
    return !(e.unstable_now() - M < T)
  }

  function I() {
    if (k !== null) {
      var R = e.unstable_now();
      M = R;
      var $ = !0;
      try {
        $ = k(!0, R)
      } finally {
        $ ? Y() : (E = !1, k = null)
      }
    } else E = !1
  }
  var Y;
  if (typeof y == "function") Y = function() {
    y(I)
  };
  else if (typeof MessageChannel < "u") {
    var H = new MessageChannel,
      Q = H.port2;
    H.port1.onmessage = I, Y = function() {
      Q.postMessage(null)
    }
  } else Y = function() {
    b(I, 0)
  };

  function K(R) {
    k = R, E || (E = !0, Y())
  }

  function V(R, $) {
    N = b(function() {
      R(e.unstable_now())
    }, $)
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null
  }, e.unstable_continueExecution = function() {
    w || h || (w = !0, K(C))
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < R ? Math.floor(1e3 / R) : 5
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l)
  }, e.unstable_next = function(R) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = f
    }
    var L = f;
    f = $;
    try {
      return R()
    } finally {
      f = L
    }
  }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(R, $) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3
    }
    var L = f;
    f = R;
    try {
      return $()
    } finally {
      f = L
    }
  }, e.unstable_scheduleCallback = function(R, $, L) {
    var j = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? j + L : j) : L = j, R) {
      case 1:
        var P = -1;
        break;
      case 2:
        P = 250;
        break;
      case 5:
        P = 1073741823;
        break;
      case 4:
        P = 1e4;
        break;
      default:
        P = 5e3
    }
    return P = L + P, R = {
      id: d++,
      callback: $,
      priorityLevel: R,
      startTime: L,
      expirationTime: P,
      sortIndex: -1
    }, L > j ? (R.sortIndex = L, t(u, R), n(l) === null && R === n(u) && (g ? (v(N), N = -1) : g = !0, V(S, L - j))) : (R.sortIndex = P, t(l, R), w || h || (w = !0, K(C))), R
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(R) {
    var $ = f;
    return function() {
      var L = f;
      f = $;
      try {
        return R.apply(this, arguments)
      } finally {
        f = L
      }
    }
  }
})(Rh);
Ph.exports = Rh;
var e2 = Ph.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t2 = c,
  tt = e2;

function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var $h = new Set,
  ri = {};

function vr(e, t) {
  oo(e, t), oo(e + "Capture", t)
}

function oo(e, t) {
  for (ri[e] = t, e = 0; e < t.length; e++) $h.add(t[e])
}
var Qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  dc = Object.prototype.hasOwnProperty,
  n2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ff = {},
  zf = {};

function r2(e) {
  return dc.call(zf, e) ? !0 : dc.call(Ff, e) ? !1 : n2.test(e) ? zf[e] = !0 : (Ff[e] = !0, !1)
}

function o2(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1
  }
}

function i2(e, t, n, r) {
  if (t === null || typeof t > "u" || o2(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t
  }
  return !1
}

function ze(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Me[e] = new ze(e, 0, !1, e, null, !1, !1)
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(function(e) {
  var t = e[0];
  Me[t] = new ze(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Me[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Me[e] = new ze(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Me[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Me[e] = new ze(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
  Me[e] = new ze(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Me[e] = new ze(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
  Me[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Du = /[\-:]([a-z])/g;

function Iu(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(Du, Iu);
  Me[t] = new ze(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Du, Iu);
  Me[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Du, Iu);
  Me[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Me[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Me.xlinkHref = new ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Me[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Lu(e, t, n, r) {
  var o = Me.hasOwnProperty(t) ? Me[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (i2(t, n, o, r) && (n = null), r || o === null ? r2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var rn = t2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Qi = Symbol.for("react.element"),
  Dr = Symbol.for("react.portal"),
  Ir = Symbol.for("react.fragment"),
  Fu = Symbol.for("react.strict_mode"),
  fc = Symbol.for("react.profiler"),
  Mh = Symbol.for("react.provider"),
  Th = Symbol.for("react.context"),
  zu = Symbol.for("react.forward_ref"),
  pc = Symbol.for("react.suspense"),
  mc = Symbol.for("react.suspense_list"),
  Bu = Symbol.for("react.memo"),
  vn = Symbol.for("react.lazy"),
  _h = Symbol.for("react.offscreen"),
  Bf = Symbol.iterator;

function Ro(e) {
  return e === null || typeof e != "object" ? null : (e = Bf && e[Bf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var he = Object.assign,
  xl;

function zo(e) {
  if (xl === void 0) try {
    throw Error()
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    xl = t && t[1] || ""
  }
  return `
` + xl + e
}
var bl = !1;

function Sl(e, t) {
  if (!e || bl) return "";
  bl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
          throw Error()
        }, Object.defineProperty(t.prototype, "props", {
          set: function() {
            throw Error()
          }
        }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];) a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if (s--, a--, 0 > a || o[s] !== i[a]) {
                var l = `
` + o[s].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
              } while (1 <= s && 0 <= a);
          break
        }
    }
  } finally {
    bl = !1, Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? zo(e) : ""
}

function s2(e) {
  switch (e.tag) {
    case 5:
      return zo(e.type);
    case 16:
      return zo("Lazy");
    case 13:
      return zo("Suspense");
    case 19:
      return zo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Sl(e.type, !1), e;
    case 11:
      return e = Sl(e.type.render, !1), e;
    case 1:
      return e = Sl(e.type, !0), e;
    default:
      return ""
  }
}

function hc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ir:
      return "Fragment";
    case Dr:
      return "Portal";
    case fc:
      return "Profiler";
    case Fu:
      return "StrictMode";
    case pc:
      return "Suspense";
    case mc:
      return "SuspenseList"
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Th:
      return (e.displayName || "Context") + ".Consumer";
    case Mh:
      return (e._context.displayName || "Context") + ".Provider";
    case zu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Bu:
      return t = e.displayName || null, t !== null ? t : hc(e.type) || "Memo";
    case vn:
      t = e._payload, e = e._init;
      try {
        return hc(e(t))
      } catch {}
  }
  return null
}

function a2(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return hc(t);
    case 8:
      return t === Fu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t
  }
  return null
}

function Mn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return ""
  }
}

function Ah(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function l2(e) {
  var t = Ah(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get,
      i = n.set;
    return Object.defineProperty(e, t, {
      configurable: !0,
      get: function() {
        return o.call(this)
      },
      set: function(s) {
        r = "" + s, i.call(this, s)
      }
    }), Object.defineProperty(e, t, {
      enumerable: n.enumerable
    }), {
      getValue: function() {
        return r
      },
      setValue: function(s) {
        r = "" + s
      },
      stopTracking: function() {
        e._valueTracker = null, delete e[t]
      }
    }
  }
}

function Zi(e) {
  e._valueTracker || (e._valueTracker = l2(e))
}

function Oh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = Ah(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function js(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}

function vc(e, t) {
  var n = t.checked;
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}

function Uf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  n = Mn(t.value != null ? t.value : n), e._wrapperState = {
    initialChecked: r,
    initialValue: n,
    controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  }
}

function jh(e, t) {
  t = t.checked, t != null && Lu(e, "checked", t, !1)
}

function gc(e, t) {
  jh(e, t);
  var n = Mn(t.value),
    r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return
  }
  t.hasOwnProperty("value") ? yc(e, t.type, n) : t.hasOwnProperty("defaultValue") && yc(e, t.type, Mn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Wf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function yc(e, t, n) {
  (t !== "number" || js(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Bo = Array.isArray;

function Xr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + Mn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}

function wc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  })
}

function Vf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (Bo(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), n = t
  }
  e._wrapperState = {
    initialValue: Mn(n)
  }
}

function Dh(e, t) {
  var n = Mn(t.value),
    r = Mn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Hf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Ih(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}

function xc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ih(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var qi, Lh = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o)
    })
  } : e
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (qi = qi || document.createElement("div"), qi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = qi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
    for (; t.firstChild;) e.appendChild(t.firstChild)
  }
});

function oi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return
    }
  }
  e.textContent = t
}
var Go = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  c2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Go).forEach(function(e) {
  c2.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Go[t] = Go[e]
  })
});

function Fh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Go.hasOwnProperty(e) && Go[e] ? ("" + t).trim() : t + "px"
}

function zh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Fh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
    }
}
var u2 = he({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});

function bc(e, t) {
  if (t) {
    if (u2[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61))
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62))
  }
}

function Sc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0
  }
}
var Cc = null;

function Uu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Ec = null,
  Qr = null,
  Zr = null;

function Kf(e) {
  if (e = Oi(e)) {
    if (typeof Ec != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = ka(t), Ec(e.stateNode, e.type, t))
  }
}

function Bh(e) {
  Qr ? Zr ? Zr.push(e) : Zr = [e] : Qr = e
}

function Uh() {
  if (Qr) {
    var e = Qr,
      t = Zr;
    if (Zr = Qr = null, Kf(e), t)
      for (e = 0; e < t.length; e++) Kf(t[e])
  }
}

function Wh(e, t) {
  return e(t)
}

function Vh() {}
var Cl = !1;

function Hh(e, t, n) {
  if (Cl) return e(t, n);
  Cl = !0;
  try {
    return Wh(e, t, n)
  } finally {
    Cl = !1, (Qr !== null || Zr !== null) && (Vh(), Uh())
  }
}

function ii(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ka(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n
}
var kc = !1;
if (Qt) try {
  var $o = {};
  Object.defineProperty($o, "passive", {
    get: function() {
      kc = !0
    }
  }), window.addEventListener("test", $o, $o), window.removeEventListener("test", $o, $o)
} catch {
  kc = !1
}

function d2(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u)
  } catch (d) {
    this.onError(d)
  }
}
var Yo = !1,
  Ds = null,
  Is = !1,
  Nc = null,
  f2 = {
    onError: function(e) {
      Yo = !0, Ds = e
    }
  };

function p2(e, t, n, r, o, i, s, a, l) {
  Yo = !1, Ds = null, d2.apply(f2, arguments)
}

function m2(e, t, n, r, o, i, s, a, l) {
  if (p2.apply(this, arguments), Yo) {
    if (Yo) {
      var u = Ds;
      Yo = !1, Ds = null
    } else throw Error(A(198));
    Is || (Is = !0, Nc = u)
  }
}

function gr(e) {
  var t = e,
    n = e;
  if (e.alternate)
    for (; t.return;) t = t.return;
  else {
    e = t;
    do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
  }
  return t.tag === 3 ? n : null
}

function Kh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
  }
  return null
}

function Gf(e) {
  if (gr(e) !== e) throw Error(A(188))
}

function h2(e) {
  var t = e.alternate;
  if (!t) {
    if (t = gr(e), t === null) throw Error(A(188));
    return t !== e ? null : e
  }
  for (var n = e, r = t;;) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i;) {
        if (i === n) return Gf(o), e;
        if (i === r) return Gf(o), t;
        i = i.sibling
      }
      throw Error(A(188))
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var s = !1, a = o.child; a;) {
        if (a === n) {
          s = !0, n = o, r = i;
          break
        }
        if (a === r) {
          s = !0, r = o, n = i;
          break
        }
        a = a.sibling
      }
      if (!s) {
        for (a = i.child; a;) {
          if (a === n) {
            s = !0, n = i, r = o;
            break
          }
          if (a === r) {
            s = !0, r = i, n = o;
            break
          }
          a = a.sibling
        }
        if (!s) throw Error(A(189))
      }
    }
    if (n.alternate !== r) throw Error(A(190))
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t
}

function Gh(e) {
  return e = h2(e), e !== null ? Yh(e) : null
}

function Yh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = Yh(e);
    if (t !== null) return t;
    e = e.sibling
  }
  return null
}
var Xh = tt.unstable_scheduleCallback,
  Yf = tt.unstable_cancelCallback,
  v2 = tt.unstable_shouldYield,
  g2 = tt.unstable_requestPaint,
  ge = tt.unstable_now,
  y2 = tt.unstable_getCurrentPriorityLevel,
  Wu = tt.unstable_ImmediatePriority,
  Qh = tt.unstable_UserBlockingPriority,
  Ls = tt.unstable_NormalPriority,
  w2 = tt.unstable_LowPriority,
  Zh = tt.unstable_IdlePriority,
  ba = null,
  Dt = null;

function x2(e) {
  if (Dt && typeof Dt.onCommitFiberRoot == "function") try {
    Dt.onCommitFiberRoot(ba, e, void 0, (e.current.flags & 128) === 128)
  } catch {}
}
var gt = Math.clz32 ? Math.clz32 : C2,
  b2 = Math.log,
  S2 = Math.LN2;

function C2(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (b2(e) / S2 | 0) | 0
}
var Ji = 64,
  es = 4194304;

function Uo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e
  }
}

function Fs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = Uo(a) : (i &= s, i !== 0 && (r = Uo(i)))
  } else s = n & ~o, s !== 0 ? r = Uo(s) : i !== 0 && (r = Uo(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;) n = 31 - gt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r
}

function E2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1
  }
}

function k2(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
    var s = 31 - gt(i),
      a = 1 << s,
      l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = E2(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a
  }
}

function Pc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function qh() {
  var e = Ji;
  return Ji <<= 1, !(Ji & 4194240) && (Ji = 64), e
}

function El(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t
}

function _i(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - gt(t), e[t] = n
}

function N2(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - gt(n),
      i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
  }
}

function Vu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - gt(n),
      o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o
  }
}
var re = 0;

function Jh(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ev, Hu, tv, nv, rv, Rc = !1,
  ts = [],
  Sn = null,
  Cn = null,
  En = null,
  si = new Map,
  ai = new Map,
  yn = [],
  P2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Xf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sn = null;
      break;
    case "dragenter":
    case "dragleave":
      Cn = null;
      break;
    case "mouseover":
    case "mouseout":
      En = null;
      break;
    case "pointerover":
    case "pointerout":
      si.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ai.delete(t.pointerId)
  }
}

function Mo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: i,
    targetContainers: [o]
  }, t !== null && (t = Oi(t), t !== null && Hu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function R2(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Sn = Mo(Sn, e, t, n, r, o), !0;
    case "dragenter":
      return Cn = Mo(Cn, e, t, n, r, o), !0;
    case "mouseover":
      return En = Mo(En, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return si.set(i, Mo(si.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ai.set(i, Mo(ai.get(i) || null, e, t, n, r, o)), !0
  }
  return !1
}

function ov(e) {
  var t = Qn(e.target);
  if (t !== null) {
    var n = gr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Kh(n), t !== null) {
          e.blockedOn = t, rv(e.priority, function() {
            tv(n)
          });
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return
      }
    }
  }
  e.blockedOn = null
}

function Cs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = $c(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Cc = r, n.target.dispatchEvent(r), Cc = null
    } else return t = Oi(n), t !== null && Hu(t), e.blockedOn = n, !1;
    t.shift()
  }
  return !0
}

function Qf(e, t, n) {
  Cs(e) && n.delete(t)
}

function $2() {
  Rc = !1, Sn !== null && Cs(Sn) && (Sn = null), Cn !== null && Cs(Cn) && (Cn = null), En !== null && Cs(En) && (En = null), si.forEach(Qf), ai.forEach(Qf)
}

function To(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Rc || (Rc = !0, tt.unstable_scheduleCallback(tt.unstable_NormalPriority, $2)))
}

function li(e) {
  function t(o) {
    return To(o, e)
  }
  if (0 < ts.length) {
    To(ts[0], e);
    for (var n = 1; n < ts.length; n++) {
      var r = ts[n];
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (Sn !== null && To(Sn, e), Cn !== null && To(Cn, e), En !== null && To(En, e), si.forEach(t), ai.forEach(t), n = 0; n < yn.length; n++) r = yn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < yn.length && (n = yn[0], n.blockedOn === null);) ov(n), n.blockedOn === null && yn.shift()
}
var qr = rn.ReactCurrentBatchConfig,
  zs = !0;

function M2(e, t, n, r) {
  var o = re,
    i = qr.transition;
  qr.transition = null;
  try {
    re = 1, Ku(e, t, n, r)
  } finally {
    re = o, qr.transition = i
  }
}

function T2(e, t, n, r) {
  var o = re,
    i = qr.transition;
  qr.transition = null;
  try {
    re = 4, Ku(e, t, n, r)
  } finally {
    re = o, qr.transition = i
  }
}

function Ku(e, t, n, r) {
  if (zs) {
    var o = $c(e, t, n, r);
    if (o === null) Ol(e, t, r, Bs, n), Xf(e, r);
    else if (R2(o, e, t, n, r)) r.stopPropagation();
    else if (Xf(e, r), t & 4 && -1 < P2.indexOf(e)) {
      for (; o !== null;) {
        var i = Oi(o);
        if (i !== null && ev(i), i = $c(e, t, n, r), i === null && Ol(e, t, r, Bs, n), i === o) break;
        o = i
      }
      o !== null && r.stopPropagation()
    } else Ol(e, t, r, null, n)
  }
}
var Bs = null;

function $c(e, t, n, r) {
  if (Bs = null, e = Uu(r), e = Qn(e), e !== null)
    if (t = gr(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
    if (e = Kh(t), e !== null) return e;
    e = null
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null
  } else t !== e && (e = null);
  return Bs = e, null
}

function iv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (y2()) {
        case Wu:
          return 1;
        case Qh:
          return 4;
        case Ls:
        case w2:
          return 16;
        case Zh:
          return 536870912;
        default:
          return 16
      }
    default:
      return 16
  }
}
var xn = null,
  Gu = null,
  Es = null;

function sv() {
  if (Es) return Es;
  var e, t = Gu,
    n = t.length,
    r, o = "value" in xn ? xn.value : xn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return Es = o.slice(e, 1 < r ? 1 - r : void 0)
}

function ks(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function ns() {
  return !0
}

function Zf() {
  return !1
}

function rt(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ns : Zf, this.isPropagationStopped = Zf, this
  }
  return he(t.prototype, {
    preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ns)
    },
    stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ns)
    },
    persist: function() {},
    isPersistent: ns
  }), t
}
var go = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Yu = rt(go),
  Ai = he({}, go, {
    view: 0,
    detail: 0
  }),
  _2 = rt(Ai),
  kl, Nl, _o, Sa = he({}, Ai, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Xu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== _o && (_o && e.type === "mousemove" ? (kl = e.screenX - _o.screenX, Nl = e.screenY - _o.screenY) : Nl = kl = 0, _o = e), kl)
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Nl
    }
  }),
  qf = rt(Sa),
  A2 = he({}, Sa, {
    dataTransfer: 0
  }),
  O2 = rt(A2),
  j2 = he({}, Ai, {
    relatedTarget: 0
  }),
  Pl = rt(j2),
  D2 = he({}, go, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  I2 = rt(D2),
  L2 = he({}, go, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
  }),
  F2 = rt(L2),
  z2 = he({}, go, {
    data: 0
  }),
  Jf = rt(z2),
  B2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  U2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  W2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };

function V2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = W2[e]) ? !!t[e] : !1
}

function Xu() {
  return V2
}
var H2 = he({}, Ai, {
    key: function(e) {
      if (e.key) {
        var t = B2[e.key] || e.key;
        if (t !== "Unidentified") return t
      }
      return e.type === "keypress" ? (e = ks(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? U2[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xu,
    charCode: function(e) {
      return e.type === "keypress" ? ks(e) : 0
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
      return e.type === "keypress" ? ks(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
  }),
  K2 = rt(H2),
  G2 = he({}, Sa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  ep = rt(G2),
  Y2 = he({}, Ai, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xu
  }),
  X2 = rt(Y2),
  Q2 = he({}, go, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Z2 = rt(Q2),
  q2 = he({}, Sa, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  J2 = rt(q2),
  eS = [9, 13, 27, 32],
  Qu = Qt && "CompositionEvent" in window,
  Xo = null;
Qt && "documentMode" in document && (Xo = document.documentMode);
var tS = Qt && "TextEvent" in window && !Xo,
  av = Qt && (!Qu || Xo && 8 < Xo && 11 >= Xo),
  tp = " ",
  np = !1;

function lv(e, t) {
  switch (e) {
    case "keyup":
      return eS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1
  }
}

function cv(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Lr = !1;

function nS(e, t) {
  switch (e) {
    case "compositionend":
      return cv(t);
    case "keypress":
      return t.which !== 32 ? null : (np = !0, tp);
    case "textInput":
      return e = t.data, e === tp && np ? null : e;
    default:
      return null
  }
}

function rS(e, t) {
  if (Lr) return e === "compositionend" || !Qu && lv(e, t) ? (e = sv(), Es = Gu = xn = null, Lr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which)
      }
      return null;
    case "compositionend":
      return av && t.locale !== "ko" ? null : t.data;
    default:
      return null
  }
}
var oS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};

function rp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!oS[e.type] : t === "textarea"
}

function uv(e, t, n, r) {
  Bh(r), t = Us(t, "onChange"), 0 < t.length && (n = new Yu("onChange", "change", null, n, r), e.push({
    event: n,
    listeners: t
  }))
}
var Qo = null,
  ci = null;

function iS(e) {
  bv(e, 0)
}

function Ca(e) {
  var t = Br(e);
  if (Oh(t)) return e
}

function sS(e, t) {
  if (e === "change") return t
}
var dv = !1;
if (Qt) {
  var Rl;
  if (Qt) {
    var $l = "oninput" in document;
    if (!$l) {
      var op = document.createElement("div");
      op.setAttribute("oninput", "return;"), $l = typeof op.oninput == "function"
    }
    Rl = $l
  } else Rl = !1;
  dv = Rl && (!document.documentMode || 9 < document.documentMode)
}

function ip() {
  Qo && (Qo.detachEvent("onpropertychange", fv), ci = Qo = null)
}

function fv(e) {
  if (e.propertyName === "value" && Ca(ci)) {
    var t = [];
    uv(t, ci, e, Uu(e)), Hh(iS, t)
  }
}

function aS(e, t, n) {
  e === "focusin" ? (ip(), Qo = t, ci = n, Qo.attachEvent("onpropertychange", fv)) : e === "focusout" && ip()
}

function lS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ca(ci)
}

function cS(e, t) {
  if (e === "click") return Ca(t)
}

function uS(e, t) {
  if (e === "input" || e === "change") return Ca(t)
}

function dS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var xt = typeof Object.is == "function" ? Object.is : dS;

function ui(e, t) {
  if (xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!dc.call(t, o) || !xt(e[o], t[o])) return !1
  }
  return !0
}

function sp(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e
}

function ap(e, t) {
  var n = sp(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return {
        node: n,
        offset: t - e
      };
      e = r
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = sp(n)
  }
}

function pv(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function mv() {
  for (var e = window, t = js(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow;
    else break;
    t = js(e.document)
  }
  return t
}

function Zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function fS(e) {
  var t = mv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && pv(n.ownerDocument.documentElement, n)) {
    if (r !== null && Zu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = ap(n, i);
        var s = ap(n, r);
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
      element: e,
      left: e.scrollLeft,
      top: e.scrollTop
    });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
  }
}
var pS = Qt && "documentMode" in document && 11 >= document.documentMode,
  Fr = null,
  Mc = null,
  Zo = null,
  Tc = !1;

function lp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Tc || Fr == null || Fr !== js(r) || (r = Fr, "selectionStart" in r && Zu(r) ? r = {
    start: r.selectionStart,
    end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
    anchorNode: r.anchorNode,
    anchorOffset: r.anchorOffset,
    focusNode: r.focusNode,
    focusOffset: r.focusOffset
  }), Zo && ui(Zo, r) || (Zo = r, r = Us(Mc, "onSelect"), 0 < r.length && (t = new Yu("onSelect", "select", null, t, n), e.push({
    event: t,
    listeners: r
  }), t.target = Fr)))
}

function rs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var zr = {
    animationend: rs("Animation", "AnimationEnd"),
    animationiteration: rs("Animation", "AnimationIteration"),
    animationstart: rs("Animation", "AnimationStart"),
    transitionend: rs("Transition", "TransitionEnd")
  },
  Ml = {},
  hv = {};
Qt && (hv = document.createElement("div").style, "AnimationEvent" in window || (delete zr.animationend.animation, delete zr.animationiteration.animation, delete zr.animationstart.animation), "TransitionEvent" in window || delete zr.transitionend.transition);

function Ea(e) {
  if (Ml[e]) return Ml[e];
  if (!zr[e]) return e;
  var t = zr[e],
    n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in hv) return Ml[e] = t[n];
  return e
}
var vv = Ea("animationend"),
  gv = Ea("animationiteration"),
  yv = Ea("animationstart"),
  wv = Ea("transitionend"),
  xv = new Map,
  cp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Ln(e, t) {
  xv.set(e, t), vr(t, [e])
}
for (var Tl = 0; Tl < cp.length; Tl++) {
  var _l = cp[Tl],
    mS = _l.toLowerCase(),
    hS = _l[0].toUpperCase() + _l.slice(1);
  Ln(mS, "on" + hS)
}
Ln(vv, "onAnimationEnd");
Ln(gv, "onAnimationIteration");
Ln(yv, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(wv, "onTransitionEnd");
oo("onMouseEnter", ["mouseout", "mouseover"]);
oo("onMouseLeave", ["mouseout", "mouseover"]);
oo("onPointerEnter", ["pointerout", "pointerover"]);
oo("onPointerLeave", ["pointerout", "pointerover"]);
vr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
vr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
vr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
vr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Wo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  vS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));

function up(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, m2(r, t, void 0, e), e.currentTarget = null
}

function bv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
          up(o, a, u), i = l
        } else
          for (s = 0; s < r.length; s++) {
            if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
            up(o, a, u), i = l
          }
    }
  }
  if (Is) throw e = Nc, Is = !1, Nc = null, e
}

function le(e, t) {
  var n = t[Dc];
  n === void 0 && (n = t[Dc] = new Set);
  var r = e + "__bubble";
  n.has(r) || (Sv(t, e, 2, !1), n.add(r))
}

function Al(e, t, n) {
  var r = 0;
  t && (r |= 4), Sv(n, e, r, t)
}
var os = "_reactListening" + Math.random().toString(36).slice(2);

function di(e) {
  if (!e[os]) {
    e[os] = !0, $h.forEach(function(n) {
      n !== "selectionchange" && (vS.has(n) || Al(n, !1, e), Al(n, !0, e))
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[os] || (t[os] = !0, Al("selectionchange", !1, t))
  }
}

function Sv(e, t, n, r) {
  switch (iv(t)) {
    case 1:
      var o = M2;
      break;
    case 4:
      o = T2;
      break;
    default:
      o = Ku
  }
  n = o.bind(null, t, n, e), o = void 0, !kc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
    capture: !0,
    passive: o
  }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
    passive: o
  }) : e.addEventListener(t, n, !1)
}

function Ol(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === o || a.nodeType === 8 && a.parentNode === o) break;
      if (s === 4)
        for (s = r.return; s !== null;) {
          var l = s.tag;
          if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
          s = s.return
        }
      for (; a !== null;) {
        if (s = Qn(a), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = i = s;
          continue e
        }
        a = a.parentNode
      }
    }
    r = r.return
  }
  Hh(function() {
    var u = i,
      d = Uu(n),
      p = [];
    e: {
      var f = xv.get(e);
      if (f !== void 0) {
        var h = Yu,
          w = e;
        switch (e) {
          case "keypress":
            if (ks(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = K2;
            break;
          case "focusin":
            w = "focus", h = Pl;
            break;
          case "focusout":
            w = "blur", h = Pl;
            break;
          case "beforeblur":
          case "afterblur":
            h = Pl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = qf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = O2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = X2;
            break;
          case vv:
          case gv:
          case yv:
            h = I2;
            break;
          case wv:
            h = Z2;
            break;
          case "scroll":
            h = _2;
            break;
          case "wheel":
            h = J2;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = F2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = ep
        }
        var g = (t & 4) !== 0,
          b = !g && e === "scroll",
          v = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var y = u, x; y !== null;) {
          x = y;
          var S = x.stateNode;
          if (x.tag === 5 && S !== null && (x = S, v !== null && (S = ii(y, v), S != null && g.push(fi(y, S, x)))), b) break;
          y = y.return
        }
        0 < g.length && (f = new h(f, w, null, n, d), p.push({
          event: f,
          listeners: g
        }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", f && n !== Cc && (w = n.relatedTarget || n.fromElement) && (Qn(w) || w[Zt])) break e;
        if ((h || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (w = n.relatedTarget || n.toElement, h = u, w = w ? Qn(w) : null, w !== null && (b = gr(w), w !== b || w.tag !== 5 && w.tag !== 6) && (w = null)) : (h = null, w = u), h !== w)) {
          if (g = qf, S = "onMouseLeave", v = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (g = ep, S = "onPointerLeave", v = "onPointerEnter", y = "pointer"), b = h == null ? f : Br(h), x = w == null ? f : Br(w), f = new g(S, y + "leave", h, n, d), f.target = b, f.relatedTarget = x, S = null, Qn(d) === u && (g = new g(v, y + "enter", w, n, d), g.target = x, g.relatedTarget = b, S = g), b = S, h && w) t: {
            for (g = h, v = w, y = 0, x = g; x; x = Mr(x)) y++;
            for (x = 0, S = v; S; S = Mr(S)) x++;
            for (; 0 < y - x;) g = Mr(g),
            y--;
            for (; 0 < x - y;) v = Mr(v),
            x--;
            for (; y--;) {
              if (g === v || v !== null && g === v.alternate) break t;
              g = Mr(g), v = Mr(v)
            }
            g = null
          }
          else g = null;
          h !== null && dp(p, f, h, g, !1), w !== null && b !== null && dp(p, b, w, g, !0)
        }
      }
      e: {
        if (f = u ? Br(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file") var C = sS;
        else if (rp(f))
          if (dv) C = uS;
          else {
            C = lS;
            var E = aS
          }
        else(h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = cS);
        if (C && (C = C(e, u))) {
          uv(p, C, n, d);
          break e
        }
        E && E(e, f, u),
        e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && yc(f, "number", f.value)
      }
      switch (E = u ? Br(u) : window, e) {
        case "focusin":
          (rp(E) || E.contentEditable === "true") && (Fr = E, Mc = u, Zo = null);
          break;
        case "focusout":
          Zo = Mc = Fr = null;
          break;
        case "mousedown":
          Tc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Tc = !1, lp(p, n, d);
          break;
        case "selectionchange":
          if (pS) break;
        case "keydown":
        case "keyup":
          lp(p, n, d)
      }
      var k;
      if (Qu) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e
        }
        N = void 0
      }
      else Lr ? lv(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");N && (av && n.locale !== "ko" && (Lr || N !== "onCompositionStart" ? N === "onCompositionEnd" && Lr && (k = sv()) : (xn = d, Gu = "value" in xn ? xn.value : xn.textContent, Lr = !0)), E = Us(u, N), 0 < E.length && (N = new Jf(N, e, null, n, d), p.push({
        event: N,
        listeners: E
      }), k ? N.data = k : (k = cv(n), k !== null && (N.data = k)))),
      (k = tS ? nS(e, n) : rS(e, n)) && (u = Us(u, "onBeforeInput"), 0 < u.length && (d = new Jf("onBeforeInput", "beforeinput", null, n, d), p.push({
        event: d,
        listeners: u
      }), d.data = k))
    }
    bv(p, t)
  })
}

function fi(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  }
}

function Us(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ii(e, n), i != null && r.unshift(fi(e, i, o)), i = ii(e, t), i != null && r.push(fi(e, i, o))), e = e.return
  }
  return r
}

function Mr(e) {
  if (e === null) return null;
  do e = e.return; while (e && e.tag !== 5);
  return e || null
}

function dp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r;) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, o ? (l = ii(n, i), l != null && s.unshift(fi(n, l, a))) : o || (l = ii(n, i), l != null && s.push(fi(n, l, a)))), n = n.return
  }
  s.length !== 0 && e.push({
    event: t,
    listeners: s
  })
}
var gS = /\r\n?/g,
  yS = /\u0000|\uFFFD/g;

function fp(e) {
  return (typeof e == "string" ? e : "" + e).replace(gS, `
`).replace(yS, "")
}

function is(e, t, n) {
  if (t = fp(t), fp(e) !== t && n) throw Error(A(425))
}

function Ws() {}
var _c = null,
  Ac = null;

function Oc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var jc = typeof setTimeout == "function" ? setTimeout : void 0,
  wS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  pp = typeof Promise == "function" ? Promise : void 0,
  xS = typeof queueMicrotask == "function" ? queueMicrotask : typeof pp < "u" ? function(e) {
    return pp.resolve(null).then(e).catch(bS)
  } : jc;

function bS(e) {
  setTimeout(function() {
    throw e
  })
}

function jl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), li(t);
          return
        }
        r--
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o
  } while (n);
  li(t)
}

function kn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null
    }
  }
  return e
}

function mp(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--
      } else n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var yo = Math.random().toString(36).slice(2),
  At = "__reactFiber$" + yo,
  pi = "__reactProps$" + yo,
  Zt = "__reactContainer$" + yo,
  Dc = "__reactEvents$" + yo,
  SS = "__reactListeners$" + yo,
  CS = "__reactHandles$" + yo;

function Qn(e) {
  var t = e[At];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if (t = n[Zt] || n[At]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = mp(e); e !== null;) {
          if (n = e[At]) return n;
          e = mp(e)
        }
      return t
    }
    e = n, n = e.parentNode
  }
  return null
}

function Oi(e) {
  return e = e[At] || e[Zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Br(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33))
}

function ka(e) {
  return e[pi] || null
}
var Ic = [],
  Ur = -1;

function Fn(e) {
  return {
    current: e
  }
}

function ce(e) {
  0 > Ur || (e.current = Ic[Ur], Ic[Ur] = null, Ur--)
}

function ie(e, t) {
  Ur++, Ic[Ur] = e.current, e.current = t
}
var Tn = {},
  De = Fn(Tn),
  Ve = Fn(!1),
  ir = Tn;

function io(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function He(e) {
  return e = e.childContextTypes, e != null
}

function Vs() {
  ce(Ve), ce(De)
}

function hp(e, t, n) {
  if (De.current !== Tn) throw Error(A(168));
  ie(De, t), ie(Ve, n)
}

function Cv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t)) throw Error(A(108, a2(e) || "Unknown", o));
  return he({}, n, r)
}

function Hs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Tn, ir = De.current, ie(De, e), ie(Ve, Ve.current), !0
}

function vp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = Cv(e, t, ir), r.__reactInternalMemoizedMergedChildContext = e, ce(Ve), ce(De), ie(De, e)) : ce(Ve), ie(Ve, n)
}
var Vt = null,
  Na = !1,
  Dl = !1;

function Ev(e) {
  Vt === null ? Vt = [e] : Vt.push(e)
}

function ES(e) {
  Na = !0, Ev(e)
}

function zn() {
  if (!Dl && Vt !== null) {
    Dl = !0;
    var e = 0,
      t = re;
    try {
      var n = Vt;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0); while (r !== null)
      }
      Vt = null, Na = !1
    } catch (o) {
      throw Vt !== null && (Vt = Vt.slice(e + 1)), Xh(Wu, zn), o
    } finally {
      re = t, Dl = !1
    }
  }
  return null
}
var Wr = [],
  Vr = 0,
  Ks = null,
  Gs = 0,
  ot = [],
  it = 0,
  sr = null,
  Kt = 1,
  Gt = "";

function Kn(e, t) {
  Wr[Vr++] = Gs, Wr[Vr++] = Ks, Ks = e, Gs = t
}

function kv(e, t, n) {
  ot[it++] = Kt, ot[it++] = Gt, ot[it++] = sr, sr = e;
  var r = Kt;
  e = Gt;
  var o = 32 - gt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - gt(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Kt = 1 << 32 - gt(t) + o | n << o | r, Gt = i + e
  } else Kt = 1 << i | n << o | r, Gt = e
}

function qu(e) {
  e.return !== null && (Kn(e, 1), kv(e, 1, 0))
}

function Ju(e) {
  for (; e === Ks;) Ks = Wr[--Vr], Wr[Vr] = null, Gs = Wr[--Vr], Wr[Vr] = null;
  for (; e === sr;) sr = ot[--it], ot[it] = null, Gt = ot[--it], ot[it] = null, Kt = ot[--it], ot[it] = null
}
var Je = null,
  qe = null,
  de = !1,
  vt = null;

function Nv(e, t) {
  var n = st(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function gp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, qe = kn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, qe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = sr !== null ? {
        id: Kt,
        overflow: Gt
      } : null, e.memoizedState = {
        dehydrated: t,
        treeContext: n,
        retryLane: 1073741824
      }, n = st(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, qe = null, !0) : !1;
    default:
      return !1
  }
}

function Lc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Fc(e) {
  if (de) {
    var t = qe;
    if (t) {
      var n = t;
      if (!gp(e, t)) {
        if (Lc(e)) throw Error(A(418));
        t = kn(n.nextSibling);
        var r = Je;
        t && gp(e, t) ? Nv(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, Je = e)
      }
    } else {
      if (Lc(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, de = !1, Je = e
    }
  }
}

function yp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
  Je = e
}

function ss(e) {
  if (e !== Je) return !1;
  if (!de) return yp(e), de = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Oc(e.type, e.memoizedProps)), t && (t = qe)) {
    if (Lc(e)) throw Pv(), Error(A(418));
    for (; t;) Nv(e, t), t = kn(t.nextSibling)
  }
  if (yp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = kn(e.nextSibling);
              break e
            }
            t--
          } else n !== "$" && n !== "$!" && n !== "$?" || t++
        }
        e = e.nextSibling
      }
      qe = null
    }
  } else qe = Je ? kn(e.stateNode.nextSibling) : null;
  return !0
}

function Pv() {
  for (var e = qe; e;) e = kn(e.nextSibling)
}

function so() {
  qe = Je = null, de = !1
}

function ed(e) {
  vt === null ? vt = [e] : vt.push(e)
}
var kS = rn.ReactCurrentBatchConfig;

function Ao(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode
      }
      if (!r) throw Error(A(147, e));
      var o = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = o.refs;
        s === null ? delete a[i] : a[i] = s
      }, t._stringRef = i, t)
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e))
  }
  return e
}

function as(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function wp(e) {
  var t = e._init;
  return t(e._payload)
}

function Rv(e) {
  function t(v, y) {
    if (e) {
      var x = v.deletions;
      x === null ? (v.deletions = [y], v.flags |= 16) : x.push(y)
    }
  }

  function n(v, y) {
    if (!e) return null;
    for (; y !== null;) t(v, y), y = y.sibling;
    return null
  }

  function r(v, y) {
    for (v = new Map; y !== null;) y.key !== null ? v.set(y.key, y) : v.set(y.index, y), y = y.sibling;
    return v
  }

  function o(v, y) {
    return v = $n(v, y), v.index = 0, v.sibling = null, v
  }

  function i(v, y, x) {
    return v.index = x, e ? (x = v.alternate, x !== null ? (x = x.index, x < y ? (v.flags |= 2, y) : x) : (v.flags |= 2, y)) : (v.flags |= 1048576, y)
  }

  function s(v) {
    return e && v.alternate === null && (v.flags |= 2), v
  }

  function a(v, y, x, S) {
    return y === null || y.tag !== 6 ? (y = Wl(x, v.mode, S), y.return = v, y) : (y = o(y, x), y.return = v, y)
  }

  function l(v, y, x, S) {
    var C = x.type;
    return C === Ir ? d(v, y, x.props.children, S, x.key) : y !== null && (y.elementType === C || typeof C == "object" && C !== null && C.$$typeof === vn && wp(C) === y.type) ? (S = o(y, x.props), S.ref = Ao(v, y, x), S.return = v, S) : (S = _s(x.type, x.key, x.props, null, v.mode, S), S.ref = Ao(v, y, x), S.return = v, S)
  }

  function u(v, y, x, S) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== x.containerInfo || y.stateNode.implementation !== x.implementation ? (y = Vl(x, v.mode, S), y.return = v, y) : (y = o(y, x.children || []), y.return = v, y)
  }

  function d(v, y, x, S, C) {
    return y === null || y.tag !== 7 ? (y = er(x, v.mode, S, C), y.return = v, y) : (y = o(y, x), y.return = v, y)
  }

  function p(v, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return y = Wl("" + y, v.mode, x), y.return = v, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Qi:
          return x = _s(y.type, y.key, y.props, null, v.mode, x), x.ref = Ao(v, null, y), x.return = v, x;
        case Dr:
          return y = Vl(y, v.mode, x), y.return = v, y;
        case vn:
          var S = y._init;
          return p(v, S(y._payload), x)
      }
      if (Bo(y) || Ro(y)) return y = er(y, v.mode, x, null), y.return = v, y;
      as(v, y)
    }
    return null
  }

  function f(v, y, x, S) {
    var C = y !== null ? y.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number") return C !== null ? null : a(v, y, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Qi:
          return x.key === C ? l(v, y, x, S) : null;
        case Dr:
          return x.key === C ? u(v, y, x, S) : null;
        case vn:
          return C = x._init, f(v, y, C(x._payload), S)
      }
      if (Bo(x) || Ro(x)) return C !== null ? null : d(v, y, x, S, null);
      as(v, x)
    }
    return null
  }

  function h(v, y, x, S, C) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return v = v.get(x) || null, a(y, v, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Qi:
          return v = v.get(S.key === null ? x : S.key) || null, l(y, v, S, C);
        case Dr:
          return v = v.get(S.key === null ? x : S.key) || null, u(y, v, S, C);
        case vn:
          var E = S._init;
          return h(v, y, x, E(S._payload), C)
      }
      if (Bo(S) || Ro(S)) return v = v.get(x) || null, d(y, v, S, C, null);
      as(y, S)
    }
    return null
  }

  function w(v, y, x, S) {
    for (var C = null, E = null, k = y, N = y = 0, T = null; k !== null && N < x.length; N++) {
      k.index > N ? (T = k, k = null) : T = k.sibling;
      var M = f(v, k, x[N], S);
      if (M === null) {
        k === null && (k = T);
        break
      }
      e && k && M.alternate === null && t(v, k), y = i(M, y, N), E === null ? C = M : E.sibling = M, E = M, k = T
    }
    if (N === x.length) return n(v, k), de && Kn(v, N), C;
    if (k === null) {
      for (; N < x.length; N++) k = p(v, x[N], S), k !== null && (y = i(k, y, N), E === null ? C = k : E.sibling = k, E = k);
      return de && Kn(v, N), C
    }
    for (k = r(v, k); N < x.length; N++) T = h(k, v, N, x[N], S), T !== null && (e && T.alternate !== null && k.delete(T.key === null ? N : T.key), y = i(T, y, N), E === null ? C = T : E.sibling = T, E = T);
    return e && k.forEach(function(z) {
      return t(v, z)
    }), de && Kn(v, N), C
  }

  function g(v, y, x, S) {
    var C = Ro(x);
    if (typeof C != "function") throw Error(A(150));
    if (x = C.call(x), x == null) throw Error(A(151));
    for (var E = C = null, k = y, N = y = 0, T = null, M = x.next(); k !== null && !M.done; N++, M = x.next()) {
      k.index > N ? (T = k, k = null) : T = k.sibling;
      var z = f(v, k, M.value, S);
      if (z === null) {
        k === null && (k = T);
        break
      }
      e && k && z.alternate === null && t(v, k), y = i(z, y, N), E === null ? C = z : E.sibling = z, E = z, k = T
    }
    if (M.done) return n(v, k), de && Kn(v, N), C;
    if (k === null) {
      for (; !M.done; N++, M = x.next()) M = p(v, M.value, S), M !== null && (y = i(M, y, N), E === null ? C = M : E.sibling = M, E = M);
      return de && Kn(v, N), C
    }
    for (k = r(v, k); !M.done; N++, M = x.next()) M = h(k, v, N, M.value, S), M !== null && (e && M.alternate !== null && k.delete(M.key === null ? N : M.key), y = i(M, y, N), E === null ? C = M : E.sibling = M, E = M);
    return e && k.forEach(function(I) {
      return t(v, I)
    }), de && Kn(v, N), C
  }

  function b(v, y, x, S) {
    if (typeof x == "object" && x !== null && x.type === Ir && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Qi:
          e: {
            for (var C = x.key, E = y; E !== null;) {
              if (E.key === C) {
                if (C = x.type, C === Ir) {
                  if (E.tag === 7) {
                    n(v, E.sibling), y = o(E, x.props.children), y.return = v, v = y;
                    break e
                  }
                } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === vn && wp(C) === E.type) {
                  n(v, E.sibling), y = o(E, x.props), y.ref = Ao(v, E, x), y.return = v, v = y;
                  break e
                }
                n(v, E);
                break
              } else t(v, E);
              E = E.sibling
            }
            x.type === Ir ? (y = er(x.props.children, v.mode, S, x.key), y.return = v, v = y) : (S = _s(x.type, x.key, x.props, null, v.mode, S), S.ref = Ao(v, y, x), S.return = v, v = S)
          }
          return s(v);
        case Dr:
          e: {
            for (E = x.key; y !== null;) {
              if (y.key === E)
                if (y.tag === 4 && y.stateNode.containerInfo === x.containerInfo && y.stateNode.implementation === x.implementation) {
                  n(v, y.sibling), y = o(y, x.children || []), y.return = v, v = y;
                  break e
                } else {
                  n(v, y);
                  break
                }
              else t(v, y);
              y = y.sibling
            }
            y = Vl(x, v.mode, S),
            y.return = v,
            v = y
          }
          return s(v);
        case vn:
          return E = x._init, b(v, y, E(x._payload), S)
      }
      if (Bo(x)) return w(v, y, x, S);
      if (Ro(x)) return g(v, y, x, S);
      as(v, x)
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, y !== null && y.tag === 6 ? (n(v, y.sibling), y = o(y, x), y.return = v, v = y) : (n(v, y), y = Wl(x, v.mode, S), y.return = v, v = y), s(v)) : n(v, y)
  }
  return b
}
var ao = Rv(!0),
  $v = Rv(!1),
  Ys = Fn(null),
  Xs = null,
  Hr = null,
  td = null;

function nd() {
  td = Hr = Xs = null
}

function rd(e) {
  var t = Ys.current;
  ce(Ys), e._currentValue = t
}

function zc(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return
  }
}

function Jr(e, t) {
  Xs = e, td = Hr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (We = !0), e.firstContext = null)
}

function ct(e) {
  var t = e._currentValue;
  if (td !== e)
    if (e = {
        context: e,
        memoizedValue: t,
        next: null
      }, Hr === null) {
      if (Xs === null) throw Error(A(308));
      Hr = e, Xs.dependencies = {
        lanes: 0,
        firstContext: e
      }
    } else Hr = Hr.next = e;
  return t
}
var Zn = null;

function od(e) {
  Zn === null ? Zn = [e] : Zn.push(e)
}

function Mv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, od(t)) : (n.next = o.next, o.next = n), t.interleaved = n, qt(e, r)
}

function qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var gn = !1;

function id(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  }
}

function Tv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
    baseState: e.baseState,
    firstBaseUpdate: e.firstBaseUpdate,
    lastBaseUpdate: e.lastBaseUpdate,
    shared: e.shared,
    effects: e.effects
  })
}

function Xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}

function Nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, te & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, qt(e, n)
  }
  return o = r.interleaved, o === null ? (t.next = t, od(r)) : (t.next = o.next, o.next = t), r.interleaved = t, qt(e, n)
}

function Ns(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Vu(e, n)
  }
}

function xp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null,
      i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        i === null ? o = i = s : i = i.next = s, n = n.next
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t
    } else o = i = t;
    n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects
    }, e.updateQueue = n;
    return
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Qs(e, t, n, r) {
  var o = e.updateQueue;
  gn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    l.next = null, s === null ? i = u : s.next = u, s = l;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== s && (a === null ? d.firstBaseUpdate = u : a.next = u, d.lastBaseUpdate = l))
  }
  if (i !== null) {
    var p = o.baseState;
    s = 0, d = u = l = null, a = i;
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        d !== null && (d = d.next = {
          eventTime: h,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var w = e,
            g = a;
          switch (f = t, h = n, g.tag) {
            case 1:
              if (w = g.payload, typeof w == "function") {
                p = w.call(h, p, f);
                break e
              }
              p = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = g.payload, f = typeof w == "function" ? w.call(h, p, f) : w, f == null) break e;
              p = he({}, p, f);
              break e;
            case 2:
              gn = !0
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [a] : f.push(a))
      } else h = {
        eventTime: h,
        lane: f,
        tag: a.tag,
        payload: a.payload,
        callback: a.callback,
        next: null
      }, d === null ? (u = d = h, l = p) : d = d.next = h, s |= f;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        f = a, a = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null
      }
    } while (!0);
    if (d === null && (l = p), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do s |= o.lane, o = o.next; while (o !== t)
    } else i === null && (o.shared.lanes = 0);
    lr |= s, e.lanes = s, e.memoizedState = p
  }
}

function bp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(A(191, o));
        o.call(r)
      }
    }
}
var ji = {},
  It = Fn(ji),
  mi = Fn(ji),
  hi = Fn(ji);

function qn(e) {
  if (e === ji) throw Error(A(174));
  return e
}

function sd(e, t) {
  switch (ie(hi, t), ie(mi, e), ie(It, ji), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xc(t, e)
  }
  ce(It), ie(It, t)
}

function lo() {
  ce(It), ce(mi), ce(hi)
}

function _v(e) {
  qn(hi.current);
  var t = qn(It.current),
    n = xc(t, e.type);
  t !== n && (ie(mi, e), ie(It, n))
}

function ad(e) {
  mi.current === e && (ce(It), ce(mi))
}
var pe = Fn(0);

function Zs(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return
    }
    t.sibling.return = t.return, t = t.sibling
  }
  return null
}
var Il = [];

function ld() {
  for (var e = 0; e < Il.length; e++) Il[e]._workInProgressVersionPrimary = null;
  Il.length = 0
}
var Ps = rn.ReactCurrentDispatcher,
  Ll = rn.ReactCurrentBatchConfig,
  ar = 0,
  me = null,
  Se = null,
  ke = null,
  qs = !1,
  qo = !1,
  vi = 0,
  NS = 0;

function _e() {
  throw Error(A(321))
}

function cd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xt(e[n], t[n])) return !1;
  return !0
}

function ud(e, t, n, r, o, i) {
  if (ar = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ps.current = e === null || e.memoizedState === null ? MS : TS, e = n(r, o), qo) {
    i = 0;
    do {
      if (qo = !1, vi = 0, 25 <= i) throw Error(A(301));
      i += 1, ke = Se = null, t.updateQueue = null, Ps.current = _S, e = n(r, o)
    } while (qo)
  }
  if (Ps.current = Js, t = Se !== null && Se.next !== null, ar = 0, ke = Se = me = null, qs = !1, t) throw Error(A(300));
  return e
}

function dd() {
  var e = vi !== 0;
  return vi = 0, e
}

function _t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return ke === null ? me.memoizedState = ke = e : ke = ke.next = e, ke
}

function ut() {
  if (Se === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null
  } else e = Se.next;
  var t = ke === null ? me.memoizedState : ke.next;
  if (t !== null) ke = t, Se = e;
  else {
    if (e === null) throw Error(A(310));
    Se = e, e = {
      memoizedState: Se.memoizedState,
      baseState: Se.baseState,
      baseQueue: Se.baseQueue,
      queue: Se.queue,
      next: null
    }, ke === null ? me.memoizedState = ke = e : ke = ke.next = e
  }
  return ke
}

function gi(e, t) {
  return typeof t == "function" ? t(e) : t
}

function Fl(e) {
  var t = ut(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Se,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s
    }
    r.baseQueue = o = i, n.pending = null
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var a = s = null,
      l = null,
      u = i;
    do {
      var d = u.lane;
      if ((ar & d) === d) l !== null && (l = l.next = {
        lane: 0,
        action: u.action,
        hasEagerState: u.hasEagerState,
        eagerState: u.eagerState,
        next: null
      }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = p, s = r) : l = l.next = p, me.lanes |= d, lr |= d
      }
      u = u.next
    } while (u !== null && u !== i);
    l === null ? s = r : l.next = a, xt(r, t.memoizedState) || (We = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do i = o.lane, me.lanes |= i, lr |= i, o = o.next; while (o !== e)
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}

function zl(e) {
  var t = ut(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do i = e(i, s.action), s = s.next; while (s !== o);
    xt(i, t.memoizedState) || (We = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
  }
  return [i, r]
}

function Av() {}

function Ov(e, t) {
  var n = me,
    r = ut(),
    o = t(),
    i = !xt(r.memoizedState, o);
  if (i && (r.memoizedState = o, We = !0), r = r.queue, fd(Iv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ke !== null && ke.memoizedState.tag & 1) {
    if (n.flags |= 2048, yi(9, Dv.bind(null, n, r, o, t), void 0, null), Pe === null) throw Error(A(349));
    ar & 30 || jv(n, t, o)
  }
  return o
}

function jv(e, t, n) {
  e.flags |= 16384, e = {
    getSnapshot: t,
    value: n
  }, t = me.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Dv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Lv(t) && Fv(e)
}

function Iv(e, t, n) {
  return n(function() {
    Lv(t) && Fv(e)
  })
}

function Lv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xt(e, n)
  } catch {
    return !0
  }
}

function Fv(e) {
  var t = qt(e, 1);
  t !== null && yt(t, e, 1, -1)
}

function Sp(e) {
  var t = _t();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: gi,
    lastRenderedState: e
  }, t.queue = e, e = e.dispatch = $S.bind(null, me, e), [t.memoizedState, e]
}

function yi(e, t, n, r) {
  return e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  }, t = me.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function zv() {
  return ut().memoizedState
}

function Rs(e, t, n, r) {
  var o = _t();
  me.flags |= e, o.memoizedState = yi(1 | t, n, void 0, r === void 0 ? null : r)
}

function Pa(e, t, n, r) {
  var o = ut();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Se !== null) {
    var s = Se.memoizedState;
    if (i = s.destroy, r !== null && cd(r, s.deps)) {
      o.memoizedState = yi(t, n, i, r);
      return
    }
  }
  me.flags |= e, o.memoizedState = yi(1 | t, n, i, r)
}

function Cp(e, t) {
  return Rs(8390656, 8, e, t)
}

function fd(e, t) {
  return Pa(2048, 8, e, t)
}

function Bv(e, t) {
  return Pa(4, 2, e, t)
}

function Uv(e, t) {
  return Pa(4, 4, e, t)
}

function Wv(e, t) {
  if (typeof t == "function") return e = e(), t(e),
    function() {
      t(null)
    };
  if (t != null) return e = e(), t.current = e,
    function() {
      t.current = null
    }
}

function Vv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Pa(4, 4, Wv.bind(null, t, e), n)
}

function pd() {}

function Hv(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Kv(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Gv(e, t, n) {
  return ar & 21 ? (xt(n, t) || (n = qh(), me.lanes |= n, lr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, We = !0), e.memoizedState = n)
}

function PS(e, t) {
  var n = re;
  re = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ll.transition;
  Ll.transition = {};
  try {
    e(!1), t()
  } finally {
    re = n, Ll.transition = r
  }
}

function Yv() {
  return ut().memoizedState
}

function RS(e, t, n) {
  var r = Rn(e);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xv(e)) Qv(t, n);
  else if (n = Mv(e, t, n, r), n !== null) {
    var o = Le();
    yt(n, e, r, o), Zv(n, t, r)
  }
}

function $S(e, t, n) {
  var r = Rn(e),
    o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (Xv(e)) Qv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState,
        a = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = a, xt(a, s)) {
        var l = t.interleaved;
        l === null ? (o.next = o, od(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return
      }
    } catch {} finally {}
    n = Mv(e, t, o, r), n !== null && (o = Le(), yt(n, e, r, o), Zv(n, t, r))
  }
}

function Xv(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me
}

function Qv(e, t) {
  qo = qs = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Zv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Vu(e, n)
  }
}
var Js = {
    readContext: ct,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1
  },
  MS = {
    readContext: ct,
    useCallback: function(e, t) {
      return _t().memoizedState = [e, t === void 0 ? null : t], e
    },
    useContext: ct,
    useEffect: Cp,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([e]) : null, Rs(4194308, 4, Wv.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
      return Rs(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
      return Rs(4, 2, e, t)
    },
    useMemo: function(e, t) {
      var n = _t();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    },
    useReducer: function(e, t, n) {
      var r = _t();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = RS.bind(null, me, e), [r.memoizedState, e]
    },
    useRef: function(e) {
      var t = _t();
      return e = {
        current: e
      }, t.memoizedState = e
    },
    useState: Sp,
    useDebugValue: pd,
    useDeferredValue: function(e) {
      return _t().memoizedState = e
    },
    useTransition: function() {
      var e = Sp(!1),
        t = e[0];
      return e = PS.bind(null, e[1]), _t().memoizedState = e, [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
      var r = me,
        o = _t();
      if (de) {
        if (n === void 0) throw Error(A(407));
        n = n()
      } else {
        if (n = t(), Pe === null) throw Error(A(349));
        ar & 30 || jv(r, t, n)
      }
      o.memoizedState = n;
      var i = {
        value: n,
        getSnapshot: t
      };
      return o.queue = i, Cp(Iv.bind(null, r, i, e), [e]), r.flags |= 2048, yi(9, Dv.bind(null, r, i, n, t), void 0, null), n
    },
    useId: function() {
      var e = _t(),
        t = Pe.identifierPrefix;
      if (de) {
        var n = Gt,
          r = Kt;
        n = (r & ~(1 << 32 - gt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = vi++, 0 < n && (t += "H" + n.toString(32)), t += ":"
      } else n = NS++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
  },
  TS = {
    readContext: ct,
    useCallback: Hv,
    useContext: ct,
    useEffect: fd,
    useImperativeHandle: Vv,
    useInsertionEffect: Bv,
    useLayoutEffect: Uv,
    useMemo: Kv,
    useReducer: Fl,
    useRef: zv,
    useState: function() {
      return Fl(gi)
    },
    useDebugValue: pd,
    useDeferredValue: function(e) {
      var t = ut();
      return Gv(t, Se.memoizedState, e)
    },
    useTransition: function() {
      var e = Fl(gi)[0],
        t = ut().memoizedState;
      return [e, t]
    },
    useMutableSource: Av,
    useSyncExternalStore: Ov,
    useId: Yv,
    unstable_isNewReconciler: !1
  },
  _S = {
    readContext: ct,
    useCallback: Hv,
    useContext: ct,
    useEffect: fd,
    useImperativeHandle: Vv,
    useInsertionEffect: Bv,
    useLayoutEffect: Uv,
    useMemo: Kv,
    useReducer: zl,
    useRef: zv,
    useState: function() {
      return zl(gi)
    },
    useDebugValue: pd,
    useDeferredValue: function(e) {
      var t = ut();
      return Se === null ? t.memoizedState = e : Gv(t, Se.memoizedState, e)
    },
    useTransition: function() {
      var e = zl(gi)[0],
        t = ut().memoizedState;
      return [e, t]
    },
    useMutableSource: Av,
    useSyncExternalStore: Ov,
    useId: Yv,
    unstable_isNewReconciler: !1
  };

function mt(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}

function Bc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ra = {
  isMounted: function(e) {
    return (e = e._reactInternals) ? gr(e) === e : !1
  },
  enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      o = Rn(e),
      i = Xt(r, o);
    i.payload = t, n != null && (i.callback = n), t = Nn(e, i, o), t !== null && (yt(t, e, o, r), Ns(t, e, o))
  },
  enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      o = Rn(e),
      i = Xt(r, o);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Nn(e, i, o), t !== null && (yt(t, e, o, r), Ns(t, e, o))
  },
  enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Le(),
      r = Rn(e),
      o = Xt(n, r);
    o.tag = 2, t != null && (o.callback = t), t = Nn(e, o, r), t !== null && (yt(t, e, r, n), Ns(t, e, r))
  }
};

function Ep(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ui(n, r) || !ui(o, i) : !0
}

function qv(e, t, n) {
  var r = !1,
    o = Tn,
    i = t.contextType;
  return typeof i == "object" && i !== null ? i = ct(i) : (o = He(t) ? ir : De.current, r = t.contextTypes, i = (r = r != null) ? io(e, o) : Tn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ra, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function kp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ra.enqueueReplaceState(t, t.state, null)
}

function Uc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, id(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = ct(i) : (i = He(t) ? ir : De.current, o.context = io(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Bc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ra.enqueueReplaceState(o, o.state, null), Qs(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function co(e, t) {
  try {
    var n = "",
      r = t;
    do n += s2(r), r = r.return; while (r);
    var o = n
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack
  }
  return {
    value: e,
    source: t,
    stack: o,
    digest: null
  }
}

function Bl(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null
  }
}

function Wc(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function() {
      throw n
    })
  }
}
var AS = typeof WeakMap == "function" ? WeakMap : Map;

function Jv(e, t, n) {
  n = Xt(-1, n), n.tag = 3, n.payload = {
    element: null
  };
  var r = t.value;
  return n.callback = function() {
    ta || (ta = !0, Jc = r), Wc(e, t)
  }, n
}

function eg(e, t, n) {
  n = Xt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o)
    }, n.callback = function() {
      Wc(e, t)
    }
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Wc(e, t), typeof r != "function" && (Pn === null ? Pn = new Set([this]) : Pn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, {
      componentStack: s !== null ? s : ""
    })
  }), n
}

function Np(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new AS;
    var o = new Set;
    r.set(t, o)
  } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
  o.has(n) || (o.add(n), e = GS.bind(null, e, t, n), t.then(e, e))
}

function Pp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return
  } while (e !== null);
  return null
}

function Rp(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xt(-1, 1), t.tag = 2, Nn(n, t, 1))), n.lanes |= 1), e)
}
var OS = rn.ReactCurrentOwner,
  We = !1;

function Ie(e, t, n, r) {
  t.child = e === null ? $v(t, null, n, r) : ao(t, e.child, n, r)
}

function $p(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Jr(t, o), r = ud(e, t, n, r, i, o), n = dd(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Jt(e, t, o)) : (de && n && qu(t), t.flags |= 1, Ie(e, t, r, o), t.child)
}

function Mp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !bd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, tg(e, t, i, r, o)) : (e = _s(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ui, n(s, r) && e.ref === t.ref) return Jt(e, t, o)
  }
  return t.flags |= 1, e = $n(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function tg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ui(i, r) && e.ref === t.ref)
      if (We = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (We = !0);
      else return t.lanes = e.lanes, Jt(e, t, o)
  }
  return Vc(e, t, n, r, o)
}

function ng(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, ie(Gr, Qe), Qe |= n;
    else {
      if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, ie(Gr, Qe), Qe |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = i !== null ? i.baseLanes : n, ie(Gr, Qe), Qe |= r
    }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ie(Gr, Qe), Qe |= r;
  return Ie(e, t, o, n), t.child
}

function rg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Vc(e, t, n, r, o) {
  var i = He(n) ? ir : De.current;
  return i = io(t, i), Jr(t, o), n = ud(e, t, n, r, i, o), r = dd(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Jt(e, t, o)) : (de && r && qu(t), t.flags |= 1, Ie(e, t, n, o), t.child)
}

function Tp(e, t, n, r, o) {
  if (He(n)) {
    var i = !0;
    Hs(t)
  } else i = !1;
  if (Jr(t, o), t.stateNode === null) $s(e, t), qv(t, n, r), Uc(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? u = ct(u) : (u = He(n) ? ir : De.current, u = io(t, u));
    var d = n.getDerivedStateFromProps,
      p = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && kp(t, s, r, u), gn = !1;
    var f = t.memoizedState;
    s.state = f, Qs(t, r, s, o), l = t.memoizedState, a !== r || f !== l || Ve.current || gn ? (typeof d == "function" && (Bc(t, n, d, r), l = t.memoizedState), (a = gn || Ep(t, n, a, r, f, l, u)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
  } else {
    s = t.stateNode, Tv(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : mt(t.type, a), s.props = u, p = t.pendingProps, f = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = ct(l) : (l = He(n) ? ir : De.current, l = io(t, l));
    var h = n.getDerivedStateFromProps;
    (d = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== p || f !== l) && kp(t, s, r, l), gn = !1, f = t.memoizedState, s.state = f, Qs(t, r, s, o);
    var w = t.memoizedState;
    a !== p || f !== w || Ve.current || gn ? (typeof h == "function" && (Bc(t, n, h, r), w = t.memoizedState), (u = gn || Ep(t, n, u, r, f, w, l) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
  }
  return Hc(e, t, n, r, i, o)
}

function Hc(e, t, n, r, o, i) {
  rg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && vp(t, n, !1), Jt(e, t, i);
  r = t.stateNode, OS.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = ao(t, e.child, null, i), t.child = ao(t, null, a, i)) : Ie(e, t, a, i), t.memoizedState = r.state, o && vp(t, n, !0), t.child
}

function og(e) {
  var t = e.stateNode;
  t.pendingContext ? hp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hp(e, t.context, !1), sd(e, t.containerInfo)
}

function _p(e, t, n, r, o) {
  return so(), ed(o), t.flags |= 256, Ie(e, t, n, r), t.child
}
var Kc = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};

function Gc(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  }
}

function ig(e, t, n) {
  var r = t.pendingProps,
    o = pe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ie(pe, o & 1), e === null) return Fc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
    mode: "hidden",
    children: s
  }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Ta(s, r, 0, null), e = er(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Gc(n), t.memoizedState = Kc, e) : md(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return jS(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = {
      mode: "hidden",
      children: r.children
    };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = $n(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = $n(a, i) : (i = er(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Gc(n) : {
      baseLanes: s.baseLanes | n,
      cachePool: null,
      transitions: s.transitions
    }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Kc, r
  }
  return i = e.child, e = i.sibling, r = $n(i, {
    mode: "visible",
    children: r.children
  }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function md(e, t) {
  return t = Ta({
    mode: "visible",
    children: t
  }, e.mode, 0, null), t.return = e, e.child = t
}

function ls(e, t, n, r) {
  return r !== null && ed(r), ao(t, e.child, null, n), e = md(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function jS(e, t, n, r, o, i, s) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = Bl(Error(A(422))), ls(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ta({
    mode: "visible",
    children: r.children
  }, o, 0, null), i = er(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ao(t, e.child, null, s), t.child.memoizedState = Gc(s), t.memoizedState = Kc, i);
  if (!(t.mode & 1)) return ls(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(A(419)), r = Bl(i, r, void 0), ls(e, t, s, r)
  }
  if (a = (s & e.childLanes) !== 0, We || a) {
    if (r = Pe, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, qt(e, o), yt(r, e, o, -1))
    }
    return xd(), r = Bl(Error(A(421))), ls(e, t, s, r)
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = YS.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, qe = kn(o.nextSibling), Je = t, de = !0, vt = null, e !== null && (ot[it++] = Kt, ot[it++] = Gt, ot[it++] = sr, Kt = e.id, Gt = e.overflow, sr = t), t = md(t, r.children), t.flags |= 4096, t)
}

function Ap(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), zc(e.return, t, n)
}

function Ul(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: o
  } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function sg(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if (Ie(e, t, r.children, n), r = pe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && Ap(e, n, t);
      else if (e.tag === 19) Ap(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue
      }
      if (e === t) break e;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break e;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
    r &= 1
  }
  if (ie(pe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && Zs(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ul(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null;) {
        if (e = o.alternate, e !== null && Zs(e) === null) {
          t.child = o;
          break
        }
        e = o.sibling, o.sibling = n, n = o, o = e
      }
      Ul(t, !0, n, null, i);
      break;
    case "together":
      Ul(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null
  }
  return t.child
}

function $s(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Jt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), lr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = $n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = $n(e, e.pendingProps), n.return = t;
    n.sibling = null
  }
  return t.child
}

function DS(e, t, n) {
  switch (t.tag) {
    case 3:
      og(t), so();
      break;
    case 5:
      _v(t);
      break;
    case 1:
      He(t.type) && Hs(t);
      break;
    case 4:
      sd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ie(Ys, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ie(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ig(e, t, n) : (ie(pe, pe.current & 1), e = Jt(e, t, n), e !== null ? e.sibling : null);
      ie(pe, pe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return sg(e, t, n);
        t.flags |= 128
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ie(pe, pe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ng(e, t, n)
  }
  return Jt(e, t, n)
}
var ag, Yc, lg, cg;
ag = function(e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return
    }
    n.sibling.return = n.return, n = n.sibling
  }
};
Yc = function() {};
lg = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, qn(It.current);
    var i = null;
    switch (n) {
      case "input":
        o = vc(e, o), r = vc(e, r), i = [];
        break;
      case "select":
        o = he({}, o, {
          value: void 0
        }), r = he({}, r, {
          value: void 0
        }), i = [];
        break;
      case "textarea":
        o = wc(e, o), r = wc(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ws)
    }
    bc(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ri.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
        if (u === "style")
          if (a) {
            for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
            for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
          } else n || (i || (i = []), i.push(u, n)), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ri.hasOwnProperty(u) ? (l != null && u === "onScroll" && le("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l))
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4)
  }
};
cg = function(e, t, n, r) {
  n !== r && (t.flags |= 4)
};

function Oo(e, t) {
  if (!de) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
  }
}

function Ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t
}

function IS(e, t, n) {
  var r = t.pendingProps;
  switch (Ju(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ae(t), null;
    case 1:
      return He(t.type) && Vs(), Ae(t), null;
    case 3:
      return r = t.stateNode, lo(), ce(Ve), ce(De), ld(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ss(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, vt !== null && (nu(vt), vt = null))), Yc(e, t), Ae(t), null;
    case 5:
      ad(t);
      var o = qn(hi.current);
      if (n = t.type, e !== null && t.stateNode != null) lg(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Ae(t), null
        }
        if (e = qn(It.current), ss(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[At] = t, r[pi] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              le("cancel", r), le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Wo.length; o++) le(Wo[o], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              le("error", r), le("load", r);
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              Uf(r, i), le("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!i.multiple
              }, le("invalid", r);
              break;
            case "textarea":
              Vf(r, i), le("invalid", r)
          }
          bc(n, i), o = null;
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && is(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && is(r.textContent, a, e), o = ["children", "" + a]) : ri.hasOwnProperty(s) && a != null && s === "onScroll" && le("scroll", r)
            } switch (n) {
            case "input":
              Zi(r), Wf(r, i, !0);
              break;
            case "textarea":
              Zi(r), Hf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ws)
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ih(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
            is: r.is
          }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[At] = t, e[pi] = r, ag(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Sc(n, r), n) {
              case "dialog":
                le("cancel", e), le("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Wo.length; o++) le(Wo[o], e);
                o = r;
                break;
              case "source":
                le("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                le("error", e), le("load", e), o = r;
                break;
              case "details":
                le("toggle", e), o = r;
                break;
              case "input":
                Uf(e, r), o = vc(e, r), le("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                }, o = he({}, r, {
                  value: void 0
                }), le("invalid", e);
                break;
              case "textarea":
                Vf(e, r), o = wc(e, r), le("invalid", e);
                break;
              default:
                o = r
            }
            bc(n, o),
            a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style" ? zh(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Lh(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && oi(e, l) : typeof l == "number" && oi(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ri.hasOwnProperty(i) ? l != null && i === "onScroll" && le("scroll", e) : l != null && Lu(e, i, l, s))
              } switch (n) {
              case "input":
                Zi(e), Wf(e, r, !1);
                break;
              case "textarea":
                Zi(e), Hf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Xr(e, !!r.multiple, i, !1) : r.defaultValue != null && Xr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ws)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
      }
      return Ae(t), null;
    case 6:
      if (e && t.stateNode != null) cg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = qn(hi.current), qn(It.current), ss(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[At] = t, (i = r.nodeValue !== n) && (e = Je, e !== null)) switch (e.tag) {
            case 3:
              is(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && is(r.nodeValue, n, (e.mode & 1) !== 0)
          }
          i && (t.flags |= 4)
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[At] = t, t.stateNode = r
      }
      return Ae(t), null;
    case 13:
      if (ce(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (de && qe !== null && t.mode & 1 && !(t.flags & 128)) Pv(), so(), t.flags |= 98560, i = !1;
        else if (i = ss(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(A(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(A(317));
            i[At] = t
          } else so(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ae(t), i = !1
        } else vt !== null && (nu(vt), vt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? Ce === 0 && (Ce = 3) : xd())), t.updateQueue !== null && (t.flags |= 4), Ae(t), null);
    case 4:
      return lo(), Yc(e, t), e === null && di(t.stateNode.containerInfo), Ae(t), null;
    case 10:
      return rd(t.type._context), Ae(t), null;
    case 17:
      return He(t.type) && Vs(), Ae(t), null;
    case 19:
      if (ce(pe), i = t.memoizedState, i === null) return Ae(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
        if (r) Oo(i, !1);
        else {
          if (Ce !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null;) {
              if (s = Zs(e), s !== null) {
                for (t.flags |= 128, Oo(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), n = n.sibling;
                return ie(pe, pe.current & 1 | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null && ge() > uo && (t.flags |= 128, r = !0, Oo(i, !1), t.lanes = 4194304)
        }
      else {
        if (!r)
          if (e = Zs(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Oo(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !de) return Ae(t), null
          } else 2 * ge() - i.renderingStartTime > uo && n !== 1073741824 && (t.flags |= 128, r = !0, Oo(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ge(), t.sibling = null, n = pe.current, ie(pe, r ? n & 1 | 2 : n & 1), t) : (Ae(t), null);
    case 22:
    case 23:
      return wd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Qe & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ae(t), null;
    case 24:
      return null;
    case 25:
      return null
  }
  throw Error(A(156, t.tag))
}

function LS(e, t) {
  switch (Ju(t), t.tag) {
    case 1:
      return He(t.type) && Vs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return lo(), ce(Ve), ce(De), ld(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ad(t), null;
    case 13:
      if (ce(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        so()
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ce(pe), null;
    case 4:
      return lo(), null;
    case 10:
      return rd(t.type._context), null;
    case 22:
    case 23:
      return wd(), null;
    case 24:
      return null;
    default:
      return null
  }
}
var cs = !1,
  Oe = !1,
  FS = typeof WeakSet == "function" ? WeakSet : Set,
  U = null;

function Kr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function") try {
      n(null)
    } catch (r) {
      ve(e, t, r)
    } else n.current = null
}

function Xc(e, t, n) {
  try {
    n()
  } catch (r) {
    ve(e, t, r)
  }
}
var Op = !1;

function zS(e, t) {
  if (_c = zs, e = mv(), Zu(e)) {
    if ("selectionStart" in e) var n = {
      start: e.selectionStart,
      end: e.selectionEnd
    };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset,
          i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType
        } catch {
          n = null;
          break e
        }
        var s = 0,
          a = -1,
          l = -1,
          u = 0,
          d = 0,
          p = e,
          f = null;
        t: for (;;) {
          for (var h; p !== n || o !== 0 && p.nodeType !== 3 || (a = s + o), p !== i || r !== 0 && p.nodeType !== 3 || (l = s + r), p.nodeType === 3 && (s += p.nodeValue.length), (h = p.firstChild) !== null;) f = p, p = h;
          for (;;) {
            if (p === e) break t;
            if (f === n && ++u === o && (a = s), f === i && ++d === r && (l = s), (h = p.nextSibling) !== null) break;
            p = f, f = p.parentNode
          }
          p = h
        }
        n = a === -1 || l === -1 ? null : {
          start: a,
          end: l
        }
      } else n = null
    }
    n = n || {
      start: 0,
      end: 0
    }
  } else n = null;
  for (Ac = {
      focusedElem: e,
      selectionRange: n
    }, zs = !1, U = t; U !== null;)
    if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, U = e;
    else
      for (; U !== null;) {
        t = U;
        try {
          var w = t.alternate;
          if (t.flags & 1024) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (w !== null) {
                var g = w.memoizedProps,
                  b = w.memoizedState,
                  v = t.stateNode,
                  y = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : mt(t.type, g), b);
                v.__reactInternalSnapshotBeforeUpdate = y
              }
              break;
            case 3:
              var x = t.stateNode.containerInfo;
              x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(A(163))
          }
        } catch (S) {
          ve(t, t.return, S)
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, U = e;
          break
        }
        U = t.return
      }
  return w = Op, Op = !1, w
}

function Jo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Xc(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}

function $a(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}

function Qc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n
    }
    typeof t == "function" ? t(e) : t.current = e
  }
}

function ug(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ug(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[At], delete t[pi], delete t[Dc], delete t[SS], delete t[CS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function dg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function jp(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || dg(e.return)) return null;
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}

function Zc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ws));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Zc(e, t, n), e = e.sibling; e !== null;) Zc(e, t, n), e = e.sibling
}

function qc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (qc(e, t, n), e = e.sibling; e !== null;) qc(e, t, n), e = e.sibling
}
var Re = null,
  ht = !1;

function dn(e, t, n) {
  for (n = n.child; n !== null;) fg(e, t, n), n = n.sibling
}

function fg(e, t, n) {
  if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
    Dt.onCommitFiberUnmount(ba, n)
  } catch {}
  switch (n.tag) {
    case 5:
      Oe || Kr(n, t);
    case 6:
      var r = Re,
        o = ht;
      Re = null, dn(e, t, n), Re = r, ht = o, Re !== null && (ht ? (e = Re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null && (ht ? (e = Re, n = n.stateNode, e.nodeType === 8 ? jl(e.parentNode, n) : e.nodeType === 1 && jl(e, n), li(e)) : jl(Re, n.stateNode));
      break;
    case 4:
      r = Re, o = ht, Re = n.stateNode.containerInfo, ht = !0, dn(e, t, n), Re = r, ht = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Xc(n, t, s), o = o.next
        } while (o !== r)
      }
      dn(e, t, n);
      break;
    case 1:
      if (!Oe && (Kr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
      } catch (a) {
        ve(n, t, a)
      }
      dn(e, t, n);
      break;
    case 21:
      dn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null, dn(e, t, n), Oe = r) : dn(e, t, n);
      break;
    default:
      dn(e, t, n)
  }
}

function Dp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new FS), t.forEach(function(r) {
      var o = XS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o))
    })
  }
}

function pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null;) {
          switch (a.tag) {
            case 5:
              Re = a.stateNode, ht = !1;
              break e;
            case 3:
              Re = a.stateNode.containerInfo, ht = !0;
              break e;
            case 4:
              Re = a.stateNode.containerInfo, ht = !0;
              break e
          }
          a = a.return
        }
        if (Re === null) throw Error(A(160));
        fg(i, s, o), Re = null, ht = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null
      } catch (u) {
        ve(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) pg(t, e), t = t.sibling
}

function pg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (pt(t, e), Mt(e), r & 4) {
        try {
          Jo(3, e, e.return), $a(3, e)
        } catch (g) {
          ve(e, e.return, g)
        }
        try {
          Jo(5, e, e.return)
        } catch (g) {
          ve(e, e.return, g)
        }
      }
      break;
    case 1:
      pt(t, e), Mt(e), r & 512 && n !== null && Kr(n, n.return);
      break;
    case 5:
      if (pt(t, e), Mt(e), r & 512 && n !== null && Kr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          oi(o, "")
        } catch (g) {
          ve(e, e.return, g)
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && i.type === "radio" && i.name != null && jh(o, i), Sc(a, s);
          var u = Sc(a, i);
          for (s = 0; s < l.length; s += 2) {
            var d = l[s],
              p = l[s + 1];
            d === "style" ? zh(o, p) : d === "dangerouslySetInnerHTML" ? Lh(o, p) : d === "children" ? oi(o, p) : Lu(o, d, p, u)
          }
          switch (a) {
            case "input":
              gc(o, i);
              break;
            case "textarea":
              Dh(o, i);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var h = i.value;
              h != null ? Xr(o, !!i.multiple, h, !1) : f !== !!i.multiple && (i.defaultValue != null ? Xr(o, !!i.multiple, i.defaultValue, !0) : Xr(o, !!i.multiple, i.multiple ? [] : "", !1))
          }
          o[pi] = i
        } catch (g) {
          ve(e, e.return, g)
        }
      }
      break;
    case 6:
      if (pt(t, e), Mt(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i
        } catch (g) {
          ve(e, e.return, g)
        }
      }
      break;
    case 3:
      if (pt(t, e), Mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        li(t.containerInfo)
      } catch (g) {
        ve(e, e.return, g)
      }
      break;
    case 4:
      pt(t, e), Mt(e);
      break;
    case 13:
      pt(t, e), Mt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (gd = ge())), r & 4 && Dp(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Oe = (u = Oe) || d, pt(t, e), Oe = u) : pt(t, e), Mt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
          for (U = e, d = e.child; d !== null;) {
            for (p = U = d; U !== null;) {
              switch (f = U, h = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jo(4, f, f.return);
                  break;
                case 1:
                  Kr(f, f.return);
                  var w = f.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                    } catch (g) {
                      ve(r, n, g)
                    }
                  }
                  break;
                case 5:
                  Kr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Lp(p);
                    continue
                  }
              }
              h !== null ? (h.return = f, U = h) : Lp(p)
            }
            d = d.sibling
          }
        e: for (d = null, p = e;;) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                o = p.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = p.stateNode, l = p.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Fh("display", s))
              } catch (g) {
                ve(e, e.return, g)
              }
            }
          } else if (p.tag === 6) {
            if (d === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps
            } catch (g) {
              ve(e, e.return, g)
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue
          }
          if (p === e) break e;
          for (; p.sibling === null;) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), p = p.return
          }
          d === p && (d = null), p.sibling.return = p.return, p = p.sibling
        }
      }
      break;
    case 19:
      pt(t, e), Mt(e), r & 4 && Dp(e);
      break;
    case 21:
      break;
    default:
      pt(t, e), Mt(e)
  }
}

function Mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (dg(n)) {
            var r = n;
            break e
          }
          n = n.return
        }
        throw Error(A(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (oi(o, ""), r.flags &= -33);
          var i = jp(e);
          qc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = jp(e);
          Zc(e, a, s);
          break;
        default:
          throw Error(A(161))
      }
    }
    catch (l) {
      ve(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}

function BS(e, t, n) {
  U = e, mg(e)
}

function mg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null;) {
    var o = U,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || cs;
      if (!s) {
        var a = o.alternate,
          l = a !== null && a.memoizedState !== null || Oe;
        a = cs;
        var u = Oe;
        if (cs = s, (Oe = l) && !u)
          for (U = o; U !== null;) s = U, l = s.child, s.tag === 22 && s.memoizedState !== null ? Fp(o) : l !== null ? (l.return = s, U = l) : Fp(o);
        for (; i !== null;) U = i, mg(i), i = i.sibling;
        U = o, cs = a, Oe = u
      }
      Ip(e)
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, U = i) : Ip(e)
  }
}

function Ip(e) {
  for (; U !== null;) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Oe || $a(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Oe)
              if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
              } var i = t.updateQueue;
            i !== null && bp(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode
              }
              bp(t, s, n)
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src)
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var d = u.memoizedState;
                if (d !== null) {
                  var p = d.dehydrated;
                  p !== null && li(p)
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(A(163))
        }
        Oe || t.flags & 512 && Qc(t)
      } catch (f) {
        ve(t, t.return, f)
      }
    }
    if (t === e) {
      U = null;
      break
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, U = n;
      break
    }
    U = t.return
  }
}

function Lp(e) {
  for (; U !== null;) {
    var t = U;
    if (t === e) {
      U = null;
      break
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, U = n;
      break
    }
    U = t.return
  }
}

function Fp(e) {
  for (; U !== null;) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $a(4, t)
          } catch (l) {
            ve(t, n, l)
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount()
            } catch (l) {
              ve(t, o, l)
            }
          }
          var i = t.return;
          try {
            Qc(t)
          } catch (l) {
            ve(t, i, l)
          }
          break;
        case 5:
          var s = t.return;
          try {
            Qc(t)
          } catch (l) {
            ve(t, s, l)
          }
      }
    } catch (l) {
      ve(t, t.return, l)
    }
    if (t === e) {
      U = null;
      break
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, U = a;
      break
    }
    U = t.return
  }
}
var US = Math.ceil,
  ea = rn.ReactCurrentDispatcher,
  hd = rn.ReactCurrentOwner,
  at = rn.ReactCurrentBatchConfig,
  te = 0,
  Pe = null,
  ye = null,
  $e = 0,
  Qe = 0,
  Gr = Fn(0),
  Ce = 0,
  wi = null,
  lr = 0,
  Ma = 0,
  vd = 0,
  ei = null,
  Ue = null,
  gd = 0,
  uo = 1 / 0,
  Wt = null,
  ta = !1,
  Jc = null,
  Pn = null,
  us = !1,
  bn = null,
  na = 0,
  ti = 0,
  eu = null,
  Ms = -1,
  Ts = 0;

function Le() {
  return te & 6 ? ge() : Ms !== -1 ? Ms : Ms = ge()
}

function Rn(e) {
  return e.mode & 1 ? te & 2 && $e !== 0 ? $e & -$e : kS.transition !== null ? (Ts === 0 && (Ts = qh()), Ts) : (e = re, e !== 0 || (e = window.event, e = e === void 0 ? 16 : iv(e.type)), e) : 1
}

function yt(e, t, n, r) {
  if (50 < ti) throw ti = 0, eu = null, Error(A(185));
  _i(e, n, r), (!(te & 2) || e !== Pe) && (e === Pe && (!(te & 2) && (Ma |= n), Ce === 4 && wn(e, $e)), Ke(e, r), n === 1 && te === 0 && !(t.mode & 1) && (uo = ge() + 500, Na && zn()))
}

function Ke(e, t) {
  var n = e.callbackNode;
  k2(e, t);
  var r = Fs(e, e === Pe ? $e : 0);
  if (r === 0) n !== null && Yf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Yf(n), t === 1) e.tag === 0 ? ES(zp.bind(null, e)) : Ev(zp.bind(null, e)), xS(function() {
      !(te & 6) && zn()
    }), n = null;
    else {
      switch (Jh(r)) {
        case 1:
          n = Wu;
          break;
        case 4:
          n = Qh;
          break;
        case 16:
          n = Ls;
          break;
        case 536870912:
          n = Zh;
          break;
        default:
          n = Ls
      }
      n = Sg(n, hg.bind(null, e))
    }
    e.callbackPriority = t, e.callbackNode = n
  }
}

function hg(e, t) {
  if (Ms = -1, Ts = 0, te & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (eo() && e.callbackNode !== n) return null;
  var r = Fs(e, e === Pe ? $e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ra(e, r);
  else {
    t = r;
    var o = te;
    te |= 2;
    var i = gg();
    (Pe !== e || $e !== t) && (Wt = null, uo = ge() + 500, Jn(e, t));
    do try {
      HS();
      break
    } catch (a) {
      vg(e, a)
    }
    while (!0);
    nd(), ea.current = i, te = o, ye !== null ? t = 0 : (Pe = null, $e = 0, t = Ce)
  }
  if (t !== 0) {
    if (t === 2 && (o = Pc(e), o !== 0 && (r = o, t = tu(e, o))), t === 1) throw n = wi, Jn(e, 0), wn(e, r), Ke(e, ge()), n;
    if (t === 6) wn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !WS(o) && (t = ra(e, r), t === 2 && (i = Pc(e), i !== 0 && (r = i, t = tu(e, i))), t === 1)) throw n = wi, Jn(e, 0), wn(e, r), Ke(e, ge()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Gn(e, Ue, Wt);
          break;
        case 3:
          if (wn(e, r), (r & 130023424) === r && (t = gd + 500 - ge(), 10 < t)) {
            if (Fs(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Le(), e.pingedLanes |= e.suspendedLanes & o;
              break
            }
            e.timeoutHandle = jc(Gn.bind(null, e, Ue, Wt), t);
            break
          }
          Gn(e, Ue, Wt);
          break;
        case 4:
          if (wn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r;) {
            var s = 31 - gt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
          }
          if (r = o, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * US(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = jc(Gn.bind(null, e, Ue, Wt), r);
            break
          }
          Gn(e, Ue, Wt);
          break;
        case 5:
          Gn(e, Ue, Wt);
          break;
        default:
          throw Error(A(329))
      }
    }
  }
  return Ke(e, ge()), e.callbackNode === n ? hg.bind(null, e) : null
}

function tu(e, t) {
  var n = ei;
  return e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256), e = ra(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && nu(t)), e
}

function nu(e) {
  Ue === null ? Ue = e : Ue.push.apply(Ue, e)
}

function WS(e) {
  for (var t = e;;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!xt(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
  }
  return !0
}

function wn(e, t) {
  for (t &= ~vd, t &= ~Ma, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - gt(t),
      r = 1 << n;
    e[n] = -1, t &= ~r
  }
}

function zp(e) {
  if (te & 6) throw Error(A(327));
  eo();
  var t = Fs(e, 0);
  if (!(t & 1)) return Ke(e, ge()), null;
  var n = ra(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pc(e);
    r !== 0 && (t = r, n = tu(e, r))
  }
  if (n === 1) throw n = wi, Jn(e, 0), wn(e, t), Ke(e, ge()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gn(e, Ue, Wt), Ke(e, ge()), null
}

function yd(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t)
  } finally {
    te = n, te === 0 && (uo = ge() + 500, Na && zn())
  }
}

function cr(e) {
  bn !== null && bn.tag === 0 && !(te & 6) && eo();
  var t = te;
  te |= 1;
  var n = at.transition,
    r = re;
  try {
    if (at.transition = null, re = 1, e) return e()
  } finally {
    re = r, at.transition = n, te = t, !(te & 6) && zn()
  }
}

function wd() {
  Qe = Gr.current, ce(Gr)
}

function Jn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, wS(n)), ye !== null)
    for (n = ye.return; n !== null;) {
      var r = n;
      switch (Ju(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Vs();
          break;
        case 3:
          lo(), ce(Ve), ce(De), ld();
          break;
        case 5:
          ad(r);
          break;
        case 4:
          lo();
          break;
        case 13:
          ce(pe);
          break;
        case 19:
          ce(pe);
          break;
        case 10:
          rd(r.type._context);
          break;
        case 22:
        case 23:
          wd()
      }
      n = n.return
    }
  if (Pe = e, ye = e = $n(e.current, null), $e = Qe = t, Ce = 0, wi = null, vd = Ma = lr = 0, Ue = ei = null, Zn !== null) {
    for (t = 0; t < Zn.length; t++)
      if (n = Zn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = o, r.next = s
        }
        n.pending = r
      } Zn = null
  }
  return e
}

function vg(e, t) {
  do {
    var n = ye;
    try {
      if (nd(), Ps.current = Js, qs) {
        for (var r = me.memoizedState; r !== null;) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next
        }
        qs = !1
      }
      if (ar = 0, ke = Se = me = null, qo = !1, vi = 0, hd.current = null, n === null || n.return === null) {
        Ce = 1, wi = t, ye = null;
        break
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (t = $e, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l,
            d = a,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = d.alternate;
            f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null)
          }
          var h = Pp(s);
          if (h !== null) {
            h.flags &= -257, Rp(h, s, a, i, t), h.mode & 1 && Np(i, u, t), t = h, l = u;
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set;
              g.add(l), t.updateQueue = g
            } else w.add(l);
            break e
          } else {
            if (!(t & 1)) {
              Np(i, u, t), xd();
              break e
            }
            l = Error(A(426))
          }
        } else if (de && a.mode & 1) {
          var b = Pp(s);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), Rp(b, s, a, i, t), ed(co(l, a));
            break e
          }
        }
        i = l = co(l, a),
        Ce !== 4 && (Ce = 2),
        ei === null ? ei = [i] : ei.push(i),
        i = s;do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var v = Jv(i, l, t);
              xp(i, v);
              break e;
            case 1:
              a = l;
              var y = i.type,
                x = i.stateNode;
              if (!(i.flags & 128) && (typeof y.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Pn === null || !Pn.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = eg(i, a, t);
                xp(i, S);
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      wg(n)
    } catch (C) {
      t = C, ye === n && n !== null && (ye = n = n.return);
      continue
    }
    break
  } while (!0)
}

function gg() {
  var e = ea.current;
  return ea.current = Js, e === null ? Js : e
}

function xd() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4), Pe === null || !(lr & 268435455) && !(Ma & 268435455) || wn(Pe, $e)
}

function ra(e, t) {
  var n = te;
  te |= 2;
  var r = gg();
  (Pe !== e || $e !== t) && (Wt = null, Jn(e, t));
  do try {
    VS();
    break
  } catch (o) {
    vg(e, o)
  }
  while (!0);
  if (nd(), te = n, ea.current = r, ye !== null) throw Error(A(261));
  return Pe = null, $e = 0, Ce
}

function VS() {
  for (; ye !== null;) yg(ye)
}

function HS() {
  for (; ye !== null && !v2();) yg(ye)
}

function yg(e) {
  var t = bg(e.alternate, e, Qe);
  e.memoizedProps = e.pendingProps, t === null ? wg(e) : ye = t, hd.current = null
}

function wg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = LS(n, t), n !== null) {
        n.flags &= 32767, ye = n;
        return
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ce = 6, ye = null;
        return
      }
    } else if (n = IS(n, t, Qe), n !== null) {
      ye = n;
      return
    }
    if (t = t.sibling, t !== null) {
      ye = t;
      return
    }
    ye = t = e
  } while (t !== null);
  Ce === 0 && (Ce = 5)
}

function Gn(e, t, n) {
  var r = re,
    o = at.transition;
  try {
    at.transition = null, re = 1, KS(e, t, n, r)
  } finally {
    at.transition = o, re = r
  }
  return null
}

function KS(e, t, n, r) {
  do eo(); while (bn !== null);
  if (te & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (N2(e, i), e === Pe && (ye = Pe = null, $e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || us || (us = !0, Sg(Ls, function() {
      return eo(), null
    })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = at.transition, at.transition = null;
    var s = re;
    re = 1;
    var a = te;
    te |= 4, hd.current = null, zS(e, n), pg(n, e), fS(Ac), zs = !!_c, Ac = _c = null, e.current = n, BS(n), g2(), te = a, re = s, at.transition = i
  } else e.current = n;
  if (us && (us = !1, bn = e, na = o), i = e.pendingLanes, i === 0 && (Pn = null), x2(n.stateNode), Ke(e, ge()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
      componentStack: o.stack,
      digest: o.digest
    });
  if (ta) throw ta = !1, e = Jc, Jc = null, e;
  return na & 1 && e.tag !== 0 && eo(), i = e.pendingLanes, i & 1 ? e === eu ? ti++ : (ti = 0, eu = e) : ti = 0, zn(), null
}

function eo() {
  if (bn !== null) {
    var e = Jh(na),
      t = at.transition,
      n = re;
    try {
      if (at.transition = null, re = 16 > e ? 16 : e, bn === null) var r = !1;
      else {
        if (e = bn, bn = null, na = 0, te & 6) throw Error(A(331));
        var o = te;
        for (te |= 4, U = e.current; U !== null;) {
          var i = U,
            s = i.child;
          if (U.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (U = u; U !== null;) {
                  var d = U;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jo(8, d, i)
                  }
                  var p = d.child;
                  if (p !== null) p.return = d, U = p;
                  else
                    for (; U !== null;) {
                      d = U;
                      var f = d.sibling,
                        h = d.return;
                      if (ug(d), d === u) {
                        U = null;
                        break
                      }
                      if (f !== null) {
                        f.return = h, U = f;
                        break
                      }
                      U = h
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var b = g.sibling;
                    g.sibling = null, g = b
                  } while (g !== null)
                }
              }
              U = i
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, U = s;
          else e: for (; U !== null;) {
            if (i = U, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Jo(9, i, i.return)
            }
            var v = i.sibling;
            if (v !== null) {
              v.return = i.return, U = v;
              break e
            }
            U = i.return
          }
        }
        var y = e.current;
        for (U = y; U !== null;) {
          s = U;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) x.return = s, U = x;
          else e: for (s = y; U !== null;) {
            if (a = U, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  $a(9, a)
              }
            } catch (C) {
              ve(a, a.return, C)
            }
            if (a === s) {
              U = null;
              break e
            }
            var S = a.sibling;
            if (S !== null) {
              S.return = a.return, U = S;
              break e
            }
            U = a.return
          }
        }
        if (te = o, zn(), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
          Dt.onPostCommitFiberRoot(ba, e)
        } catch {}
        r = !0
      }
      return r
    } finally {
      re = n, at.transition = t
    }
  }
  return !1
}

function Bp(e, t, n) {
  t = co(n, t), t = Jv(e, t, 1), e = Nn(e, t, 1), t = Le(), e !== null && (_i(e, 1, t), Ke(e, t))
}

function ve(e, t, n) {
  if (e.tag === 3) Bp(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        Bp(t, e, n);
        break
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pn === null || !Pn.has(r))) {
          e = co(n, e), e = eg(t, e, 1), t = Nn(t, e, 1), e = Le(), t !== null && (_i(t, 1, e), Ke(t, e));
          break
        }
      }
      t = t.return
    }
}

function GS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Le(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && ($e & n) === n && (Ce === 4 || Ce === 3 && ($e & 130023424) === $e && 500 > ge() - gd ? Jn(e, 0) : vd |= n), Ke(e, t)
}

function xg(e, t) {
  t === 0 && (e.mode & 1 ? (t = es, es <<= 1, !(es & 130023424) && (es = 4194304)) : t = 1);
  var n = Le();
  e = qt(e, t), e !== null && (_i(e, t, n), Ke(e, n))
}

function YS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xg(e, n)
}

function XS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314))
  }
  r !== null && r.delete(t), xg(e, n)
}
var bg;
bg = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) We = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return We = !1, DS(e, t, n);
      We = !!(e.flags & 131072)
    }
  else We = !1, de && t.flags & 1048576 && kv(t, Gs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      $s(e, t), e = t.pendingProps;
      var o = io(t, De.current);
      Jr(t, n), o = ud(null, t, r, e, o, n);
      var i = dd();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (i = !0, Hs(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, id(t), o.updater = Ra, t.stateNode = o, o._reactInternals = t, Uc(t, r, e, n), t = Hc(null, t, r, !0, i, n)) : (t.tag = 0, de && i && qu(t), Ie(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch ($s(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = ZS(r), e = mt(r, e), o) {
          case 0:
            t = Vc(null, t, r, e, n);
            break e;
          case 1:
            t = Tp(null, t, r, e, n);
            break e;
          case 11:
            t = $p(null, t, r, e, n);
            break e;
          case 14:
            t = Mp(null, t, r, mt(r.type, e), n);
            break e
        }
        throw Error(A(306, r, ""))
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), Vc(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), Tp(e, t, r, o, n);
    case 3:
      e: {
        if (og(t), e === null) throw Error(A(387));r = t.pendingProps,
        i = t.memoizedState,
        o = i.element,
        Tv(e, t),
        Qs(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated)
          if (i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = co(Error(A(423)), t), t = _p(e, t, r, n, o);
            break e
          } else if (r !== o) {
          o = co(Error(A(424)), t), t = _p(e, t, r, n, o);
          break e
        } else
          for (qe = kn(t.stateNode.containerInfo.firstChild), Je = t, de = !0, vt = null, n = $v(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (so(), r === o) {
            t = Jt(e, t, n);
            break e
          }
          Ie(e, t, r, n)
        }
        t = t.child
      }
      return t;
    case 5:
      return _v(t), e === null && Fc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Oc(r, o) ? s = null : i !== null && Oc(r, i) && (t.flags |= 32), rg(e, t), Ie(e, t, s, n), t.child;
    case 6:
      return e === null && Fc(t), null;
    case 13:
      return ig(e, t, n);
    case 4:
      return sd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ao(t, null, r, n) : Ie(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), $p(e, t, r, o, n);
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ie(Ys, r._currentValue), r._currentValue = s, i !== null)
          if (xt(i.value, s)) {
            if (i.children === o.children && !Ve.current) {
              t = Jt(e, t, n);
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null;) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null;) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      l = Xt(-1, n & -n), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), zc(i.return, n, t), a.lanes |= n;
                    break
                  }
                  l = l.next
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (s = i.return, s === null) throw Error(A(341));
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), zc(s, n, t), s = i.sibling
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null;) {
                  if (s === t) {
                    s = null;
                    break
                  }
                  if (i = s.sibling, i !== null) {
                    i.return = s.return, s = i;
                    break
                  }
                  s = s.return
                }
              i = s
            }
        Ie(e, t, o.children, n),
        t = t.child
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Jr(t, n), o = ct(o), r = r(o), t.flags |= 1, Ie(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = mt(r, t.pendingProps), o = mt(r.type, o), Mp(e, t, r, o, n);
    case 15:
      return tg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), $s(e, t), t.tag = 1, He(r) ? (e = !0, Hs(t)) : e = !1, Jr(t, n), qv(t, r, o), Uc(t, r, o, n), Hc(null, t, r, !0, e, n);
    case 19:
      return sg(e, t, n);
    case 22:
      return ng(e, t, n)
  }
  throw Error(A(156, t.tag))
};

function Sg(e, t) {
  return Xh(e, t)
}

function QS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function st(e, t, n, r) {
  return new QS(e, t, n, r)
}

function bd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent)
}

function ZS(e) {
  if (typeof e == "function") return bd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === zu) return 11;
    if (e === Bu) return 14
  }
  return 2
}

function $n(e, t) {
  var n = e.alternate;
  return n === null ? (n = st(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
    lanes: t.lanes,
    firstContext: t.firstContext
  }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function _s(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") bd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Ir:
      return er(n.children, o, i, t);
    case Fu:
      s = 8, o |= 8;
      break;
    case fc:
      return e = st(12, n, t, o | 2), e.elementType = fc, e.lanes = i, e;
    case pc:
      return e = st(13, n, t, o), e.elementType = pc, e.lanes = i, e;
    case mc:
      return e = st(19, n, t, o), e.elementType = mc, e.lanes = i, e;
    case _h:
      return Ta(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Mh:
          s = 10;
          break e;
        case Th:
          s = 9;
          break e;
        case zu:
          s = 11;
          break e;
        case Bu:
          s = 14;
          break e;
        case vn:
          s = 16, r = null;
          break e
      }
      throw Error(A(130, e == null ? e : typeof e, ""))
  }
  return t = st(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function er(e, t, n, r) {
  return e = st(7, e, r, t), e.lanes = n, e
}

function Ta(e, t, n, r) {
  return e = st(22, e, r, t), e.elementType = _h, e.lanes = n, e.stateNode = {
    isHidden: !1
  }, e
}

function Wl(e, t, n) {
  return e = st(6, e, null, t), e.lanes = n, e
}

function Vl(e, t, n) {
  return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
    containerInfo: e.containerInfo,
    pendingChildren: null,
    implementation: e.implementation
  }, t
}

function qS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = El(0), this.expirationTimes = El(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = El(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Sd(e, t, n, r, o, i, s, a, l) {
  return e = new qS(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = st(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
    element: r,
    isDehydrated: n,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  }, id(i), e
}

function JS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}

function Cg(e) {
  if (!e) return Tn;
  e = e._reactInternals;
  e: {
    if (gr(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e
          }
      }
      t = t.return
    } while (t !== null);
    throw Error(A(171))
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return Cv(e, n, t)
  }
  return t
}

function Eg(e, t, n, r, o, i, s, a, l) {
  return e = Sd(n, r, !0, e, o, i, s, a, l), e.context = Cg(null), n = e.current, r = Le(), o = Rn(n), i = Xt(r, o), i.callback = t ?? null, Nn(n, i, o), e.current.lanes = o, _i(e, o, r), Ke(e, r), e
}

function _a(e, t, n, r) {
  var o = t.current,
    i = Le(),
    s = Rn(o);
  return n = Cg(n), t.context === null ? t.context = n : t.pendingContext = n, t = Xt(i, s), t.payload = {
    element: e
  }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nn(o, t, s), e !== null && (yt(e, o, s, i), Ns(e, o, s)), s
}

function oa(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode
  }
}

function Up(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t
  }
}

function Cd(e, t) {
  Up(e, t), (e = e.alternate) && Up(e, t)
}

function eC() {
  return null
}
var kg = typeof reportError == "function" ? reportError : function(e) {
  console.error(e)
};

function Ed(e) {
  this._internalRoot = e
}
Aa.prototype.render = Ed.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  _a(e, t, null, null)
};
Aa.prototype.unmount = Ed.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    cr(function() {
      _a(null, e, null, null)
    }), t[Zt] = null
  }
};

function Aa(e) {
  this._internalRoot = e
}
Aa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = nv();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < yn.length && t !== 0 && t < yn[n].priority; n++);
    yn.splice(n, 0, e), n === 0 && ov(e)
  }
};

function kd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Oa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Wp() {}

function tC(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = oa(s);
        i.call(u)
      }
    }
    var s = Eg(t, r, e, 0, null, !1, !1, "", Wp);
    return e._reactRootContainer = s, e[Zt] = s.current, di(e.nodeType === 8 ? e.parentNode : e), cr(), s
  }
  for (; o = e.lastChild;) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = oa(l);
      a.call(u)
    }
  }
  var l = Sd(e, 0, !1, null, null, !1, !1, "", Wp);
  return e._reactRootContainer = l, e[Zt] = l.current, di(e.nodeType === 8 ? e.parentNode : e), cr(function() {
    _a(t, l, n, r)
  }), l
}

function ja(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = oa(s);
        a.call(l)
      }
    }
    _a(t, s, e, o)
  } else s = tC(n, t, e, o, r);
  return oa(s)
}
ev = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Uo(t.pendingLanes);
        n !== 0 && (Vu(t, n | 1), Ke(t, ge()), !(te & 6) && (uo = ge() + 500, zn()))
      }
      break;
    case 13:
      cr(function() {
        var r = qt(e, 1);
        if (r !== null) {
          var o = Le();
          yt(r, e, 1, o)
        }
      }), Cd(e, 1)
  }
};
Hu = function(e) {
  if (e.tag === 13) {
    var t = qt(e, 134217728);
    if (t !== null) {
      var n = Le();
      yt(t, e, 134217728, n)
    }
    Cd(e, 134217728)
  }
};
tv = function(e) {
  if (e.tag === 13) {
    var t = Rn(e),
      n = qt(e, t);
    if (n !== null) {
      var r = Le();
      yt(n, e, t, r)
    }
    Cd(e, t)
  }
};
nv = function() {
  return re
};
rv = function(e, t) {
  var n = re;
  try {
    return re = e, t()
  } finally {
    re = n
  }
};
Ec = function(e, t, n) {
  switch (t) {
    case "input":
      if (gc(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ka(r);
            if (!o) throw Error(A(90));
            Oh(r), gc(r, o)
          }
        }
      }
      break;
    case "textarea":
      Dh(e, n);
      break;
    case "select":
      t = n.value, t != null && Xr(e, !!n.multiple, t, !1)
  }
};
Wh = yd;
Vh = cr;
var nC = {
    usingClientEntryPoint: !1,
    Events: [Oi, Br, ka, Bh, Uh, yd]
  },
  jo = {
    findFiberByHostInstance: Qn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  },
  rC = {
    bundleType: jo.bundleType,
    version: jo.version,
    rendererPackageName: jo.rendererPackageName,
    rendererConfig: jo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = Gh(e), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: jo.findFiberByHostInstance || eC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ds.isDisabled && ds.supportsFiber) try {
    ba = ds.inject(rC), Dt = ds
  } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nC;
nt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!kd(t)) throw Error(A(200));
  return JS(e, t, null, n)
};
nt.createRoot = function(e, t) {
  if (!kd(e)) throw Error(A(299));
  var n = !1,
    r = "",
    o = kg;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Sd(e, 1, !1, null, null, n, !1, r, o), e[Zt] = t.current, di(e.nodeType === 8 ? e.parentNode : e), new Ed(t)
};
nt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = Gh(t), e = e === null ? null : e.stateNode, e
};
nt.flushSync = function(e) {
  return cr(e)
};
nt.hydrate = function(e, t, n) {
  if (!Oa(t)) throw Error(A(200));
  return ja(null, e, t, !0, n)
};
nt.hydrateRoot = function(e, t, n) {
  if (!kd(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null,
    o = !1,
    i = "",
    s = kg;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Eg(t, null, e, 1, n ?? null, o, !1, i, s), e[Zt] = t.current, di(e), r)
    for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new Aa(t)
};
nt.render = function(e, t, n) {
  if (!Oa(t)) throw Error(A(200));
  return ja(null, e, t, !1, n)
};
nt.unmountComponentAtNode = function(e) {
  if (!Oa(e)) throw Error(A(40));
  return e._reactRootContainer ? (cr(function() {
    ja(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Zt] = null
    })
  }), !0) : !1
};
nt.unstable_batchedUpdates = yd;
nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Oa(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return ja(e, t, n, !1, r)
};
nt.version = "18.3.1-next-f1338f8080-20240426";

function Ng() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ng)
  } catch (e) {
    console.error(e)
  }
}
Ng(), Nh.exports = nt;
var Bn = Nh.exports;
const Da = bu(Bn),
  [oC, dt] = ga("ScrollArea.Root component was not found in tree");

function fo(e, t) {
  const n = Yn(t);
  Mi(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n)
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e)
      }
    }
  }, [e, n])
}
const iC = c.forwardRef((e, t) => {
    const {
      style: n,
      ...r
    } = e, o = dt(), [i, s] = c.useState(0), [a, l] = c.useState(0), u = !!(i && a);
    return fo(o.scrollbarX, () => {
      var p;
      const d = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
      o.onCornerHeightChange(d), l(d)
    }), fo(o.scrollbarY, () => {
      var p;
      const d = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
      o.onCornerWidthChange(d), s(d)
    }), u ? m.jsx("div", {
      ...r,
      ref: t,
      style: {
        ...n,
        width: i,
        height: a
      }
    }) : null
  }),
  sC = c.forwardRef((e, t) => {
    const n = dt(),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? m.jsx(iC, {
      ...e,
      ref: t
    }) : null
  }),
  aC = {
    scrollHideDelay: 1e3,
    type: "hover"
  },
  Pg = c.forwardRef((e, t) => {
    const n = xe("ScrollAreaRoot", aC, e),
      {
        type: r,
        scrollHideDelay: o,
        scrollbars: i,
        ...s
      } = n,
      [a, l] = c.useState(null),
      [u, d] = c.useState(null),
      [p, f] = c.useState(null),
      [h, w] = c.useState(null),
      [g, b] = c.useState(null),
      [v, y] = c.useState(0),
      [x, S] = c.useState(0),
      [C, E] = c.useState(!1),
      [k, N] = c.useState(!1),
      T = nn(t, M => l(M));
    return m.jsx(oC, {
      value: {
        type: r,
        scrollHideDelay: o,
        scrollArea: a,
        viewport: u,
        onViewportChange: d,
        content: p,
        onContentChange: f,
        scrollbarX: h,
        onScrollbarXChange: w,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: E,
        scrollbarY: g,
        onScrollbarYChange: b,
        scrollbarYEnabled: k,
        onScrollbarYEnabledChange: N,
        onCornerWidthChange: y,
        onCornerHeightChange: S
      },
      children: m.jsx(Ne, {
        ...s,
        ref: T,
        __vars: {
          "--sa-corner-width": i !== "xy" ? "0px" : `${v}px`,
          "--sa-corner-height": i !== "xy" ? "0px" : `${x}px`
        }
      })
    })
  });
Pg.displayName = "@mantine/core/ScrollAreaRoot";

function Rg(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n
}

function Ia(e) {
  const t = Rg(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18)
}

function $g(e, t) {
  return n => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0])
  }
}

function lC(e, [t, n]) {
  return Math.min(n, Math.max(t, e))
}

function Vp(e, t, n = "ltr") {
  const r = Ia(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    i = t.scrollbar.size - o,
    s = t.content - t.viewport,
    a = i - r,
    l = n === "ltr" ? [0, s] : [s * -1, 0],
    u = lC(e, l);
  return $g([0, s], [0, a])(u)
}

function cC(e, t, n, r = "ltr") {
  const o = Ia(n),
    i = o / 2,
    s = t || i,
    a = o - s,
    l = n.scrollbar.paddingStart + s,
    u = n.scrollbar.size - n.scrollbar.paddingEnd - a,
    d = n.content - n.viewport,
    p = r === "ltr" ? [0, d] : [d * -1, 0];
  return $g([l, u], p)(e)
}

function Mg(e, t) {
  return e > 0 && e < t
}

function ia(e) {
  return e ? parseInt(e, 10) : 0
}

function tr(e, t, {
  checkForDefaultPrevented: n = !0
} = {}) {
  return r => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r))
  }
}
const [uC, Tg] = ga("ScrollAreaScrollbar was not found in tree"), _g = c.forwardRef((e, t) => {
  const {
    sizes: n,
    hasThumb: r,
    onThumbChange: o,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: a,
    onDragScroll: l,
    onWheelScroll: u,
    onResize: d,
    ...p
  } = e, f = dt(), [h, w] = c.useState(null), g = nn(t, N => w(N)), b = c.useRef(null), v = c.useRef(""), {
    viewport: y
  } = f, x = n.content - n.viewport, S = Yn(u), C = Yn(a), E = wa(d, 10), k = N => {
    if (b.current) {
      const T = N.clientX - b.current.left,
        M = N.clientY - b.current.top;
      l({
        x: T,
        y: M
      })
    }
  };
  return c.useEffect(() => {
    const N = T => {
      const M = T.target;
      (h == null ? void 0 : h.contains(M)) && S(T, x)
    };
    return document.addEventListener("wheel", N, {
      passive: !1
    }), () => document.removeEventListener("wheel", N, {
      passive: !1
    })
  }, [y, h, x, S]), c.useEffect(C, [n, C]), fo(h, E), fo(f.content, E), m.jsx(uC, {
    value: {
      scrollbar: h,
      hasThumb: r,
      onThumbChange: Yn(o),
      onThumbPointerUp: Yn(i),
      onThumbPositionChange: C,
      onThumbPointerDown: Yn(s)
    },
    children: m.jsx("div", {
      ...p,
      ref: g,
      "data-mantine-scrollbar": !0,
      style: {
        position: "absolute",
        ...p.style
      },
      onPointerDown: tr(e.onPointerDown, N => {
        N.preventDefault(), N.button === 0 && (N.target.setPointerCapture(N.pointerId), b.current = h.getBoundingClientRect(), v.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", k(N))
      }),
      onPointerMove: tr(e.onPointerMove, k),
      onPointerUp: tr(e.onPointerUp, N => {
        N.preventDefault();
        const T = N.target;
        T.hasPointerCapture(N.pointerId) && T.releasePointerCapture(N.pointerId), document.body.style.webkitUserSelect = v.current, b.current = null
      })
    })
  })
}), dC = c.forwardRef((e, t) => {
  const {
    sizes: n,
    onSizesChange: r,
    style: o,
    ...i
  } = e, s = dt(), [a, l] = c.useState(), u = c.useRef(null), d = nn(t, u, s.onScrollbarXChange);
  return c.useEffect(() => {
    u.current && l(getComputedStyle(u.current))
  }, [u]), m.jsx(_g, {
    "data-orientation": "horizontal",
    ...i,
    ref: d,
    sizes: n,
    style: {
      ...o,
      "--sa-thumb-width": `${Ia(n)}px`
    },
    onThumbPointerDown: p => e.onThumbPointerDown(p.x),
    onDragScroll: p => e.onDragScroll(p.x),
    onWheelScroll: (p, f) => {
      if (s.viewport) {
        const h = s.viewport.scrollLeft + p.deltaX;
        e.onWheelScroll(h), Mg(h, f) && p.preventDefault()
      }
    },
    onResize: () => {
      u.current && s.viewport && a && r({
        content: s.viewport.scrollWidth,
        viewport: s.viewport.offsetWidth,
        scrollbar: {
          size: u.current.clientWidth,
          paddingStart: ia(a.paddingLeft),
          paddingEnd: ia(a.paddingRight)
        }
      })
    }
  })
}), fC = c.forwardRef((e, t) => {
  const {
    sizes: n,
    onSizesChange: r,
    style: o,
    ...i
  } = e, s = dt(), [a, l] = c.useState(), u = c.useRef(null), d = nn(t, u, s.onScrollbarYChange);
  return c.useEffect(() => {
    u.current && l(window.getComputedStyle(u.current))
  }, []), m.jsx(_g, {
    ...i,
    "data-orientation": "vertical",
    ref: d,
    sizes: n,
    style: {
      "--sa-thumb-height": `${Ia(n)}px`,
      ...o
    },
    onThumbPointerDown: p => e.onThumbPointerDown(p.y),
    onDragScroll: p => e.onDragScroll(p.y),
    onWheelScroll: (p, f) => {
      if (s.viewport) {
        const h = s.viewport.scrollTop + p.deltaY;
        e.onWheelScroll(h), Mg(h, f) && p.preventDefault()
      }
    },
    onResize: () => {
      u.current && s.viewport && a && r({
        content: s.viewport.scrollHeight,
        viewport: s.viewport.offsetHeight,
        scrollbar: {
          size: u.current.clientHeight,
          paddingStart: ia(a.paddingTop),
          paddingEnd: ia(a.paddingBottom)
        }
      })
    }
  })
}), Nd = c.forwardRef((e, t) => {
  const {
    orientation: n = "vertical",
    ...r
  } = e, {
    dir: o
  } = Jb(), i = dt(), s = c.useRef(null), a = c.useRef(0), [l, u] = c.useState({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), d = Rg(l.viewport, l.content), p = {
    ...r,
    sizes: l,
    onSizesChange: u,
    hasThumb: d > 0 && d < 1,
    onThumbChange: h => {
      s.current = h
    },
    onThumbPointerUp: () => {
      a.current = 0
    },
    onThumbPointerDown: h => {
      a.current = h
    }
  }, f = (h, w) => cC(h, a.current, l, w);
  return n === "horizontal" ? m.jsx(dC, {
    ...p,
    ref: t,
    onThumbPositionChange: () => {
      if (i.viewport && s.current) {
        const h = i.viewport.scrollLeft,
          w = Vp(h, l, o);
        s.current.style.transform = `translate3d(${w}px, 0, 0)`
      }
    },
    onWheelScroll: h => {
      i.viewport && (i.viewport.scrollLeft = h)
    },
    onDragScroll: h => {
      i.viewport && (i.viewport.scrollLeft = f(h, o))
    }
  }) : n === "vertical" ? m.jsx(fC, {
    ...p,
    ref: t,
    onThumbPositionChange: () => {
      if (i.viewport && s.current) {
        const h = i.viewport.scrollTop,
          w = Vp(h, l);
        l.scrollbar.size === 0 ? s.current.style.opacity = "0" : s.current.style.opacity = "1", s.current.style.transform = `translate3d(0, ${w}px, 0)`
      }
    },
    onWheelScroll: h => {
      i.viewport && (i.viewport.scrollTop = h)
    },
    onDragScroll: h => {
      i.viewport && (i.viewport.scrollTop = f(h))
    }
  }) : null
}), Ag = c.forwardRef((e, t) => {
  const n = dt(),
    {
      forceMount: r,
      ...o
    } = e,
    [i, s] = c.useState(!1),
    a = e.orientation === "horizontal",
    l = wa(() => {
      if (n.viewport) {
        const u = n.viewport.offsetWidth < n.viewport.scrollWidth,
          d = n.viewport.offsetHeight < n.viewport.scrollHeight;
        s(a ? u : d)
      }
    }, 10);
  return fo(n.viewport, l), fo(n.content, l), r || i ? m.jsx(Nd, {
    "data-state": i ? "visible" : "hidden",
    ...o,
    ref: t
  }) : null
}), pC = c.forwardRef((e, t) => {
  const {
    forceMount: n,
    ...r
  } = e, o = dt(), [i, s] = c.useState(!1);
  return c.useEffect(() => {
    const {
      scrollArea: a
    } = o;
    let l = 0;
    if (a) {
      const u = () => {
          window.clearTimeout(l), s(!0)
        },
        d = () => {
          l = window.setTimeout(() => s(!1), o.scrollHideDelay)
        };
      return a.addEventListener("pointerenter", u), a.addEventListener("pointerleave", d), () => {
        window.clearTimeout(l), a.removeEventListener("pointerenter", u), a.removeEventListener("pointerleave", d)
      }
    }
  }, [o.scrollArea, o.scrollHideDelay]), n || i ? m.jsx(Ag, {
    "data-state": i ? "visible" : "hidden",
    ...r,
    ref: t
  }) : null
}), mC = c.forwardRef((e, t) => {
  const {
    forceMount: n,
    ...r
  } = e, o = dt(), i = e.orientation === "horizontal", [s, a] = c.useState("hidden"), l = wa(() => a("idle"), 100);
  return c.useEffect(() => {
    if (s === "idle") {
      const u = window.setTimeout(() => a("hidden"), o.scrollHideDelay);
      return () => window.clearTimeout(u)
    }
  }, [s, o.scrollHideDelay]), c.useEffect(() => {
    const {
      viewport: u
    } = o, d = i ? "scrollLeft" : "scrollTop";
    if (u) {
      let p = u[d];
      const f = () => {
        const h = u[d];
        p !== h && (a("scrolling"), l()), p = h
      };
      return u.addEventListener("scroll", f), () => u.removeEventListener("scroll", f)
    }
  }, [o.viewport, i, l]), n || s !== "hidden" ? m.jsx(Nd, {
    "data-state": s === "hidden" ? "hidden" : "visible",
    ...r,
    ref: t,
    onPointerEnter: tr(e.onPointerEnter, () => a("interacting")),
    onPointerLeave: tr(e.onPointerLeave, () => a("idle"))
  }) : null
}), Hp = c.forwardRef((e, t) => {
  const {
    forceMount: n,
    ...r
  } = e, o = dt(), {
    onScrollbarXEnabledChange: i,
    onScrollbarYEnabledChange: s
  } = o, a = e.orientation === "horizontal";
  return c.useEffect(() => (a ? i(!0) : s(!0), () => {
    a ? i(!1) : s(!1)
  }), [a, i, s]), o.type === "hover" ? m.jsx(pC, {
    ...r,
    ref: t,
    forceMount: n
  }) : o.type === "scroll" ? m.jsx(mC, {
    ...r,
    ref: t,
    forceMount: n
  }) : o.type === "auto" ? m.jsx(Ag, {
    ...r,
    ref: t,
    forceMount: n
  }) : o.type === "always" ? m.jsx(Nd, {
    ...r,
    ref: t
  }) : null
});

function hC(e, t = () => {}) {
  let n = {
      left: e.scrollLeft,
      top: e.scrollTop
    },
    r = 0;
  return function o() {
    const i = {
        left: e.scrollLeft,
        top: e.scrollTop
      },
      s = n.left !== i.left,
      a = n.top !== i.top;
    (s || a) && t(), n = i, r = window.requestAnimationFrame(o)
  }(), () => window.cancelAnimationFrame(r)
}
const vC = c.forwardRef((e, t) => {
    const {
      style: n,
      ...r
    } = e, o = dt(), i = Tg(), {
      onThumbPositionChange: s
    } = i, a = nn(t, d => i.onThumbChange(d)), l = c.useRef(), u = wa(() => {
      l.current && (l.current(), l.current = void 0)
    }, 100);
    return c.useEffect(() => {
      const {
        viewport: d
      } = o;
      if (d) {
        const p = () => {
          if (u(), !l.current) {
            const f = hC(d, s);
            l.current = f, s()
          }
        };
        return s(), d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p)
      }
    }, [o.viewport, u, s]), m.jsx("div", {
      "data-state": i.hasThumb ? "visible" : "hidden",
      ...r,
      ref: a,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...n
      },
      onPointerDownCapture: tr(e.onPointerDownCapture, d => {
        const f = d.target.getBoundingClientRect(),
          h = d.clientX - f.left,
          w = d.clientY - f.top;
        i.onThumbPointerDown({
          x: h,
          y: w
        })
      }),
      onPointerUp: tr(e.onPointerUp, i.onThumbPointerUp)
    })
  }),
  Kp = c.forwardRef((e, t) => {
    const {
      forceMount: n,
      ...r
    } = e, o = Tg();
    return n || o.hasThumb ? m.jsx(vC, {
      ref: t,
      ...r
    }) : null
  }),
  Og = c.forwardRef(({
    children: e,
    style: t,
    ...n
  }, r) => {
    const o = dt(),
      i = nn(r, o.onViewportChange);
    return m.jsx(Ne, {
      ...n,
      ref: i,
      style: {
        overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
        overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
        ...t
      },
      children: m.jsx("div", {
        style: {
          minWidth: "100%",
          display: "table"
        },
        ref: o.onContentChange,
        children: e
      })
    })
  });
Og.displayName = "@mantine/core/ScrollAreaViewport";
var Pd = {
  root: "m_d57069b5",
  viewport: "m_c0783ff9",
  viewportInner: "m_f8f631dd",
  scrollbar: "m_c44ba933",
  thumb: "m_d8b5e363",
  corner: "m_21657268"
};
const jg = {
    scrollHideDelay: 1e3,
    type: "hover",
    scrollbars: "xy"
  },
  gC = (e, {
    scrollbarSize: t
  }) => ({
    root: {
      "--scrollarea-scrollbar-size": _(t)
    }
  }),
  nr = Ge((e, t) => {
    const n = xe("ScrollArea", jg, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        scrollbarSize: l,
        vars: u,
        type: d,
        scrollHideDelay: p,
        viewportProps: f,
        viewportRef: h,
        onScrollPositionChange: w,
        children: g,
        offsetScrollbars: b,
        scrollbars: v,
        onBottomReached: y,
        onTopReached: x,
        ...S
      } = n,
      [C, E] = c.useState(!1),
      k = Ft({
        name: "ScrollArea",
        props: n,
        classes: Pd,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: u,
        varsResolver: gC
      });
    return m.jsxs(Pg, {
      type: d === "never" ? "always" : d,
      scrollHideDelay: p,
      ref: t,
      scrollbars: v,
      ...k("root"),
      ...S,
      children: [m.jsx(Og, {
        ...f,
        ...k("viewport", {
          style: f == null ? void 0 : f.style
        }),
        ref: h,
        "data-offset-scrollbars": b === !0 ? "xy" : b || void 0,
        "data-scrollbars": v || void 0,
        onScroll: N => {
          var I;
          (I = f == null ? void 0 : f.onScroll) == null || I.call(f, N), w == null || w({
            x: N.currentTarget.scrollLeft,
            y: N.currentTarget.scrollTop
          });
          const {
            scrollTop: T,
            scrollHeight: M,
            clientHeight: z
          } = N.currentTarget;
          T - (M - z) === 0 && (y == null || y()), T === 0 && (x == null || x())
        },
        children: g
      }), (v === "xy" || v === "x") && m.jsx(Hp, {
        ...k("scrollbar"),
        orientation: "horizontal",
        "data-hidden": d === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => E(!0),
        onMouseLeave: () => E(!1),
        children: m.jsx(Kp, {
          ...k("thumb")
        })
      }), (v === "xy" || v === "y") && m.jsx(Hp, {
        ...k("scrollbar"),
        orientation: "vertical",
        "data-hidden": d === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => E(!0),
        onMouseLeave: () => E(!1),
        children: m.jsx(Kp, {
          ...k("thumb")
        })
      }), m.jsx(sC, {
        ...k("corner"),
        "data-hovered": C || void 0,
        "data-hidden": d === "never" || void 0
      })]
    })
  });
nr.displayName = "@mantine/core/ScrollArea";
const Rd = Ge((e, t) => {
  const {
    children: n,
    classNames: r,
    styles: o,
    scrollbarSize: i,
    scrollHideDelay: s,
    type: a,
    dir: l,
    offsetScrollbars: u,
    viewportRef: d,
    onScrollPositionChange: p,
    unstyled: f,
    variant: h,
    viewportProps: w,
    scrollbars: g,
    style: b,
    vars: v,
    onBottomReached: y,
    ...x
  } = xe("ScrollAreaAutosize", jg, e);
  return m.jsx(Ne, {
    ...x,
    ref: t,
    style: [{
      display: "flex",
      overflow: "auto"
    }, b],
    children: m.jsx(Ne, {
      style: {
        display: "flex",
        flexDirection: "column",
        flex: 1
      },
      children: m.jsx(nr, {
        classNames: r,
        styles: o,
        scrollHideDelay: s,
        scrollbarSize: i,
        type: a,
        dir: l,
        offsetScrollbars: u,
        viewportRef: d,
        onScrollPositionChange: p,
        unstyled: f,
        variant: h,
        viewportProps: w,
        vars: v,
        scrollbars: g,
        onBottomReached: y,
        children: n
      })
    })
  })
});
nr.classes = Pd;
Rd.displayName = "@mantine/core/ScrollAreaAutosize";
Rd.classes = Pd;
nr.Autosize = Rd;
var Dg = {
  root: "m_87cf2631"
};
const yC = {
    __staticSelector: "UnstyledButton"
  },
  $d = xa((e, t) => {
    const n = xe("UnstyledButton", yC, e),
      {
        className: r,
        component: o = "button",
        __staticSelector: i,
        unstyled: s,
        classNames: a,
        styles: l,
        style: u,
        ...d
      } = n,
      p = Ft({
        name: i,
        props: n,
        classes: Dg,
        className: r,
        style: u,
        classNames: a,
        styles: l,
        unstyled: s
      });
    return m.jsx(Ne, {
      ...p("root", {
        focusable: !0
      }),
      component: o,
      ref: t,
      type: o === "button" ? "button" : void 0,
      ...d
    })
  });
$d.classes = Dg;
$d.displayName = "@mantine/core/UnstyledButton";
var Ig = {
  root: "m_515a97f8"
};
const wC = {},
  Md = Ge((e, t) => {
    const n = xe("VisuallyHidden", wC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        ...u
      } = n,
      d = Ft({
        name: "VisuallyHidden",
        classes: Ig,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a
      });
    return m.jsx(Ne, {
      component: "span",
      ref: t,
      ...d("root"),
      ...u
    })
  });
Md.classes = Ig;
Md.displayName = "@mantine/core/VisuallyHidden";
var Lg = {
  root: "m_1b7284a3"
};
const xC = {},
  bC = (e, {
    radius: t,
    shadow: n
  }) => ({
    root: {
      "--paper-radius": t === void 0 ? void 0 : $i(t),
      "--paper-shadow": sh(n)
    }
  }),
  Td = xa((e, t) => {
    const n = xe("Paper", xC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        withBorder: l,
        vars: u,
        radius: d,
        shadow: p,
        variant: f,
        mod: h,
        ...w
      } = n,
      g = Ft({
        name: "Paper",
        props: n,
        classes: Lg,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: u,
        varsResolver: bC
      });
    return m.jsx(Ne, {
      ref: t,
      mod: [{
        "data-with-border": l
      }, h],
      ...g("root"),
      variant: f,
      ...w
    })
  });
Td.classes = Lg;
Td.displayName = "@mantine/core/Paper";

function wo(e) {
  return Fg(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function et(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function on(e) {
  var t;
  return (t = (Fg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function Fg(e) {
  return e instanceof Node || e instanceof et(e).Node
}

function bt(e) {
  return e instanceof Element || e instanceof et(e).Element
}

function Lt(e) {
  return e instanceof HTMLElement || e instanceof et(e).HTMLElement
}

function Gp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof et(e).ShadowRoot
}

function Di(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = St(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}

function SC(e) {
  return ["table", "td", "th"].includes(wo(e))
}

function La(e) {
  return [":popover-open", ":modal"].some(t => {
    try {
      return e.matches(t)
    } catch {
      return !1
    }
  })
}

function _d(e) {
  const t = Ad(),
    n = bt(e) ? St(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function CC(e) {
  let t = _n(e);
  for (; Lt(t) && !po(t);) {
    if (_d(t)) return t;
    if (La(t)) return null;
    t = _n(t)
  }
  return null
}

function Ad() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function po(e) {
  return ["html", "body", "#document"].includes(wo(e))
}

function St(e) {
  return et(e).getComputedStyle(e)
}

function Fa(e) {
  return bt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  }
}

function _n(e) {
  if (wo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Gp(e) && e.host || on(e);
  return Gp(t) ? t.host : t
}

function zg(e) {
  const t = _n(e);
  return po(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Lt(t) && Di(t) ? t : zg(t)
}

function xi(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = zg(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = et(o);
  if (i) {
    const a = ru(s);
    return t.concat(s, s.visualViewport || [], Di(o) ? o : [], a && n ? xi(a) : [])
  }
  return t.concat(o, xi(o, [], n))
}

function ru(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
const EC = ["top", "right", "bottom", "left"],
  Ot = Math.min,
  Ze = Math.max,
  sa = Math.round,
  fs = Math.floor,
  An = e => ({
    x: e,
    y: e
  }),
  kC = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  },
  NC = {
    start: "end",
    end: "start"
  };

function ou(e, t, n) {
  return Ze(e, Ot(t, n))
}

function en(e, t) {
  return typeof e == "function" ? e(t) : e
}

function tn(e) {
  return e.split("-")[0]
}

function xo(e) {
  return e.split("-")[1]
}

function Od(e) {
  return e === "x" ? "y" : "x"
}

function jd(e) {
  return e === "y" ? "height" : "width"
}

function On(e) {
  return ["top", "bottom"].includes(tn(e)) ? "y" : "x"
}

function Dd(e) {
  return Od(On(e))
}

function PC(e, t, n) {
  n === void 0 && (n = !1);
  const r = xo(e),
    o = Dd(e),
    i = jd(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = aa(s)), [s, aa(s)]
}

function RC(e) {
  const t = aa(e);
  return [iu(e), t, iu(t)]
}

function iu(e) {
  return e.replace(/start|end/g, t => NC[t])
}

function $C(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return []
  }
}

function MC(e, t, n, r) {
  const o = xo(e);
  let i = $C(tn(e), n === "start", r);
  return o && (i = i.map(s => s + "-" + o), t && (i = i.concat(i.map(iu)))), i
}

function aa(e) {
  return e.replace(/left|right|bottom|top/g, t => kC[t])
}

function TC(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  }
}

function Bg(e) {
  return typeof e != "number" ? TC(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  }
}

function la(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  }
}

function Yp(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = On(t),
    s = Dd(t),
    a = jd(s),
    l = tn(t),
    u = i === "y",
    d = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    f = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      }
  }
  switch (xo(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break
  }
  return h
}
const _C = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }),
    {
      x: d,
      y: p
    } = Yp(u, r, l),
    f = r,
    h = {},
    w = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: b,
      fn: v
    } = a[g], {
      x: y,
      y: x,
      data: S,
      reset: C
    } = await v({
      x: d,
      y: p,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = y ?? d, p = x ?? p, h = {
      ...h,
      [b]: {
        ...h[b],
        ...S
      }
    }, C && w <= 50 && (w++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: d,
      y: p
    } = Yp(u, f, l)), g = -1)
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: h
  }
};
async function bi(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = en(t, e), w = Bg(h), b = a[f ? p === "floating" ? "reference" : "floating" : p], v = la(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), y = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), S = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = la(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: x,
    strategy: l
  }) : y);
  return {
    top: (v.top - C.top + w.top) / S.y,
    bottom: (C.bottom - v.bottom + w.bottom) / S.y,
    left: (v.left - C.left + w.left) / S.x,
    right: (C.right - v.right + w.right) / S.x
  }
}
const AC = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        platform: s,
        elements: a,
        middlewareData: l
      } = t, {
        element: u,
        padding: d = 0
      } = en(e, t) || {};
      if (u == null) return {};
      const p = Bg(d),
        f = {
          x: n,
          y: r
        },
        h = Dd(o),
        w = jd(h),
        g = await s.getDimensions(u),
        b = h === "y",
        v = b ? "top" : "left",
        y = b ? "bottom" : "right",
        x = b ? "clientHeight" : "clientWidth",
        S = i.reference[w] + i.reference[h] - f[h] - i.floating[w],
        C = f[h] - i.reference[h],
        E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let k = E ? E[x] : 0;
      (!k || !await (s.isElement == null ? void 0 : s.isElement(E))) && (k = a.floating[x] || i.floating[w]);
      const N = S / 2 - C / 2,
        T = k / 2 - g[w] / 2 - 1,
        M = Ot(p[v], T),
        z = Ot(p[y], T),
        I = M,
        Y = k - g[w] - z,
        H = k / 2 - g[w] / 2 + N,
        Q = ou(I, H, Y),
        K = !l.arrow && xo(o) != null && H !== Q && i.reference[w] / 2 - (H < I ? M : z) - g[w] / 2 < 0,
        V = K ? H < I ? H - I : H - Y : 0;
      return {
        [h]: f[h] + V,
        data: {
          [h]: Q,
          centerOffset: H - Q - V,
          ...K && {
            alignmentOffset: V
          }
        },
        reset: K
      }
    }
  }),
  OC = function(e) {
    return e === void 0 && (e = {}), {
      name: "flip",
      options: e,
      async fn(t) {
        var n, r;
        const {
          placement: o,
          middlewareData: i,
          rects: s,
          initialPlacement: a,
          platform: l,
          elements: u
        } = t, {
          mainAxis: d = !0,
          crossAxis: p = !0,
          fallbackPlacements: f,
          fallbackStrategy: h = "bestFit",
          fallbackAxisSideDirection: w = "none",
          flipAlignment: g = !0,
          ...b
        } = en(e, t);
        if ((n = i.arrow) != null && n.alignmentOffset) return {};
        const v = tn(o),
          y = On(a),
          x = tn(a) === a,
          S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
          C = f || (x || !g ? [aa(a)] : RC(a)),
          E = w !== "none";
        !f && E && C.push(...MC(a, g, w, S));
        const k = [a, ...C],
          N = await bi(t, b),
          T = [];
        let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
        if (d && T.push(N[v]), p) {
          const H = PC(o, s, S);
          T.push(N[H[0]], N[H[1]])
        }
        if (M = [...M, {
            placement: o,
            overflows: T
          }], !T.every(H => H <= 0)) {
          var z, I;
          const H = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1,
            Q = k[H];
          if (Q) return {
            data: {
              index: H,
              overflows: M
            },
            reset: {
              placement: Q
            }
          };
          let K = (I = M.filter(V => V.overflows[0] <= 0).sort((V, R) => V.overflows[1] - R.overflows[1])[0]) == null ? void 0 : I.placement;
          if (!K) switch (h) {
            case "bestFit": {
              var Y;
              const V = (Y = M.filter(R => {
                if (E) {
                  const $ = On(R.placement);
                  return $ === y || $ === "y"
                }
                return !0
              }).map(R => [R.placement, R.overflows.filter($ => $ > 0).reduce(($, L) => $ + L, 0)]).sort((R, $) => R[1] - $[1])[0]) == null ? void 0 : Y[0];
              V && (K = V);
              break
            }
            case "initialPlacement":
              K = a;
              break
          }
          if (o !== K) return {
            reset: {
              placement: K
            }
          }
        }
        return {}
      }
    }
  };

function Xp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  }
}

function Qp(e) {
  return EC.some(t => e[t] >= 0)
}
const jC = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = en(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await bi(t, {
              ...o,
              elementContext: "reference"
            }),
            s = Xp(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Qp(s)
            }
          }
        }
        case "escaped": {
          const i = await bi(t, {
              ...o,
              altBoundary: !0
            }),
            s = Xp(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Qp(s)
            }
          }
        }
        default:
          return {}
      }
    }
  }
};
async function DC(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = tn(n), a = xo(n), l = On(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, d = i && l ? -1 : 1, p = en(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: w
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return a && typeof w == "number" && (h = a === "end" ? w * -1 : w), l ? {
    x: h * d,
    y: f * u
  } : {
    x: f * u,
    y: h * d
  }
}
const IC = function(e) {
    return e === void 0 && (e = 0), {
      name: "offset",
      options: e,
      async fn(t) {
        var n, r;
        const {
          x: o,
          y: i,
          placement: s,
          middlewareData: a
        } = t, l = await DC(t, e);
        return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
          x: o + l.x,
          y: i + l.y,
          data: {
            ...l,
            placement: s
          }
        }
      }
    }
  },
  LC = function(e) {
    return e === void 0 && (e = {}), {
      name: "shift",
      options: e,
      async fn(t) {
        const {
          x: n,
          y: r,
          placement: o
        } = t, {
          mainAxis: i = !0,
          crossAxis: s = !1,
          limiter: a = {
            fn: b => {
              let {
                x: v,
                y
              } = b;
              return {
                x: v,
                y
              }
            }
          },
          ...l
        } = en(e, t), u = {
          x: n,
          y: r
        }, d = await bi(t, l), p = On(tn(o)), f = Od(p);
        let h = u[f],
          w = u[p];
        if (i) {
          const b = f === "y" ? "top" : "left",
            v = f === "y" ? "bottom" : "right",
            y = h + d[b],
            x = h - d[v];
          h = ou(y, h, x)
        }
        if (s) {
          const b = p === "y" ? "top" : "left",
            v = p === "y" ? "bottom" : "right",
            y = w + d[b],
            x = w - d[v];
          w = ou(y, w, x)
        }
        const g = a.fn({
          ...t,
          [f]: h,
          [p]: w
        });
        return {
          ...g,
          data: {
            x: g.x - n,
            y: g.y - r
          }
        }
      }
    }
  },
  FC = function(e) {
    return e === void 0 && (e = {}), {
      options: e,
      fn(t) {
        const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          middlewareData: s
        } = t, {
          offset: a = 0,
          mainAxis: l = !0,
          crossAxis: u = !0
        } = en(e, t), d = {
          x: n,
          y: r
        }, p = On(o), f = Od(p);
        let h = d[f],
          w = d[p];
        const g = en(a, t),
          b = typeof g == "number" ? {
            mainAxis: g,
            crossAxis: 0
          } : {
            mainAxis: 0,
            crossAxis: 0,
            ...g
          };
        if (l) {
          const x = f === "y" ? "height" : "width",
            S = i.reference[f] - i.floating[x] + b.mainAxis,
            C = i.reference[f] + i.reference[x] - b.mainAxis;
          h < S ? h = S : h > C && (h = C)
        }
        if (u) {
          var v, y;
          const x = f === "y" ? "width" : "height",
            S = ["top", "left"].includes(tn(o)),
            C = i.reference[p] - i.floating[x] + (S && ((v = s.offset) == null ? void 0 : v[p]) || 0) + (S ? 0 : b.crossAxis),
            E = i.reference[p] + i.reference[x] + (S ? 0 : ((y = s.offset) == null ? void 0 : y[p]) || 0) - (S ? b.crossAxis : 0);
          w < C ? w = C : w > E && (w = E)
        }
        return {
          [f]: h,
          [p]: w
        }
      }
    }
  },
  zC = function(e) {
    return e === void 0 && (e = {}), {
      name: "size",
      options: e,
      async fn(t) {
        const {
          placement: n,
          rects: r,
          platform: o,
          elements: i
        } = t, {
          apply: s = () => {},
          ...a
        } = en(e, t), l = await bi(t, a), u = tn(n), d = xo(n), p = On(n) === "y", {
          width: f,
          height: h
        } = r.floating;
        let w, g;
        u === "top" || u === "bottom" ? (w = u, g = d === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = u, w = d === "end" ? "top" : "bottom");
        const b = h - l.top - l.bottom,
          v = f - l.left - l.right,
          y = Ot(h - l[w], b),
          x = Ot(f - l[g], v),
          S = !t.middlewareData.shift;
        let C = y,
          E = x;
        if (p ? E = d || S ? Ot(x, v) : v : C = d || S ? Ot(y, b) : b, S && !d) {
          const N = Ze(l.left, 0),
            T = Ze(l.right, 0),
            M = Ze(l.top, 0),
            z = Ze(l.bottom, 0);
          p ? E = f - 2 * (N !== 0 || T !== 0 ? N + T : Ze(l.left, l.right)) : C = h - 2 * (M !== 0 || z !== 0 ? M + z : Ze(l.top, l.bottom))
        }
        await s({
          ...t,
          availableWidth: E,
          availableHeight: C
        });
        const k = await o.getDimensions(i.floating);
        return f !== k.width || h !== k.height ? {
          reset: {
            rects: !0
          }
        } : {}
      }
    }
  };

function Ug(e) {
  const t = St(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Lt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = sa(n) !== i || sa(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  }
}

function Id(e) {
  return bt(e) ? e : e.contextElement
}

function to(e) {
  const t = Id(e);
  if (!Lt(t)) return An(1);
  const n = t.getBoundingClientRect(),
    {
      width: r,
      height: o,
      $: i
    } = Ug(t);
  let s = (i ? sa(n.width) : n.width) / r,
    a = (i ? sa(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  }
}
const BC = An(0);

function Wg(e) {
  const t = et(e);
  return !Ad() || !t.visualViewport ? BC : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  }
}

function UC(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== et(e) ? !1 : t
}

function ur(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Id(e);
  let s = An(1);
  t && (r ? bt(r) && (s = to(r)) : s = to(e));
  const a = UC(i, n, r) ? Wg(i) : An(0);
  let l = (o.left + a.x) / s.x,
    u = (o.top + a.y) / s.y,
    d = o.width / s.x,
    p = o.height / s.y;
  if (i) {
    const f = et(i),
      h = r && bt(r) ? et(r) : r;
    let w = f,
      g = ru(w);
    for (; g && r && h !== w;) {
      const b = to(g),
        v = g.getBoundingClientRect(),
        y = St(g),
        x = v.left + (g.clientLeft + parseFloat(y.paddingLeft)) * b.x,
        S = v.top + (g.clientTop + parseFloat(y.paddingTop)) * b.y;
      l *= b.x, u *= b.y, d *= b.x, p *= b.y, l += x, u += S, w = et(g), g = ru(w)
    }
  }
  return la({
    width: d,
    height: p,
    x: l,
    y: u
  })
}

function WC(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed",
    s = on(r),
    a = t ? La(t.floating) : !1;
  if (r === s || a && i) return n;
  let l = {
      scrollLeft: 0,
      scrollTop: 0
    },
    u = An(1);
  const d = An(0),
    p = Lt(r);
  if ((p || !p && !i) && ((wo(r) !== "body" || Di(s)) && (l = Fa(r)), Lt(r))) {
    const f = ur(r);
    u = to(r), d.x = f.x + r.clientLeft, d.y = f.y + r.clientTop
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y
  }
}

function VC(e) {
  return Array.from(e.getClientRects())
}

function Vg(e) {
  return ur(on(e)).left + Fa(e).scrollLeft
}

function HC(e) {
  const t = on(e),
    n = Fa(e),
    r = e.ownerDocument.body,
    o = Ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Vg(e);
  const a = -n.scrollTop;
  return St(r).direction === "rtl" && (s += Ze(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  }
}

function KC(e, t) {
  const n = et(e),
    r = on(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Ad();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop)
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  }
}

function GC(e, t) {
  const n = ur(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Lt(e) ? to(e) : An(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = o * i.x,
    u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  }
}

function Zp(e, t, n) {
  let r;
  if (t === "viewport") r = KC(e, n);
  else if (t === "document") r = HC(on(e));
  else if (bt(t)) r = GC(t, n);
  else {
    const o = Wg(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    }
  }
  return la(r)
}

function Hg(e, t) {
  const n = _n(e);
  return n === t || !bt(n) || po(n) ? !1 : St(n).position === "fixed" || Hg(n, t)
}

function YC(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = xi(e, [], !1).filter(a => bt(a) && wo(a) !== "body"),
    o = null;
  const i = St(e).position === "fixed";
  let s = i ? _n(e) : e;
  for (; bt(s) && !po(s);) {
    const a = St(s),
      l = _d(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Di(s) && !l && Hg(e, s)) ? r = r.filter(d => d !== s) : o = a, s = _n(s)
  }
  return t.set(e, r), r
}

function XC(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? La(t) ? [] : YC(t, this._c) : [].concat(n), r],
    a = s[0],
    l = s.reduce((u, d) => {
      const p = Zp(t, d, o);
      return u.top = Ze(p.top, u.top), u.right = Ot(p.right, u.right), u.bottom = Ot(p.bottom, u.bottom), u.left = Ze(p.left, u.left), u
    }, Zp(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  }
}

function QC(e) {
  const {
    width: t,
    height: n
  } = Ug(e);
  return {
    width: t,
    height: n
  }
}

function ZC(e, t, n) {
  const r = Lt(t),
    o = on(t),
    i = n === "fixed",
    s = ur(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = An(0);
  if (r || !r && !i)
    if ((wo(t) !== "body" || Di(o)) && (a = Fa(t)), r) {
      const p = ur(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop
    } else o && (l.x = Vg(o));
  const u = s.left + a.scrollLeft - l.x,
    d = s.top + a.scrollTop - l.y;
  return {
    x: u,
    y: d,
    width: s.width,
    height: s.height
  }
}

function Hl(e) {
  return St(e).position === "static"
}

function qp(e, t) {
  return !Lt(e) || St(e).position === "fixed" ? null : t ? t(e) : e.offsetParent
}

function Kg(e, t) {
  const n = et(e);
  if (La(e)) return n;
  if (!Lt(e)) {
    let o = _n(e);
    for (; o && !po(o);) {
      if (bt(o) && !Hl(o)) return o;
      o = _n(o)
    }
    return n
  }
  let r = qp(e, t);
  for (; r && SC(r) && Hl(r);) r = qp(r, t);
  return r && po(r) && Hl(r) && !_d(r) ? n : r || CC(e) || n
}
const qC = async function(e) {
  const t = this.getOffsetParent || Kg,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: ZC(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  }
};

function JC(e) {
  return St(e).direction === "rtl"
}
const eE = {
  convertOffsetParentRelativeRectToViewportRelativeRect: WC,
  getDocumentElement: on,
  getClippingRect: XC,
  getOffsetParent: Kg,
  getElementRects: qC,
  getClientRects: VC,
  getDimensions: QC,
  getScale: to,
  isElement: bt,
  isRTL: JC
};

function tE(e, t) {
  let n = null,
    r;
  const o = on(e);

  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null
  }

  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const {
      left: u,
      top: d,
      width: p,
      height: f
    } = e.getBoundingClientRect();
    if (a || t(), !p || !f) return;
    const h = fs(d),
      w = fs(o.clientWidth - (u + p)),
      g = fs(o.clientHeight - (d + f)),
      b = fs(u),
      y = {
        rootMargin: -h + "px " + -w + "px " + -g + "px " + -b + "px",
        threshold: Ze(0, Ot(1, l)) || 1
      };
    let x = !0;

    function S(C) {
      const E = C[0].intersectionRatio;
      if (E !== l) {
        if (!x) return s();
        E ? s(!1, E) : r = setTimeout(() => {
          s(!1, 1e-7)
        }, 1e3)
      }
      x = !1
    }
    try {
      n = new IntersectionObserver(S, {
        ...y,
        root: o.ownerDocument
      })
    } catch {
      n = new IntersectionObserver(S, y)
    }
    n.observe(e)
  }
  return s(!0), i
}

function nE(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Id(e), d = o || i ? [...u ? xi(u) : [], ...xi(t)] : [];
  d.forEach(v => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n)
  });
  const p = u && a ? tE(u, n) : null;
  let f = -1,
    h = null;
  s && (h = new ResizeObserver(v => {
    let [y] = v;
    y && y.target === u && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t)
    })), n()
  }), u && !l && h.observe(u), h.observe(t));
  let w, g = l ? ur(e) : null;
  l && b();

  function b() {
    const v = ur(e);
    g && (v.x !== g.x || v.y !== g.y || v.width !== g.width || v.height !== g.height) && n(), g = v, w = requestAnimationFrame(b)
  }
  return n(), () => {
    var v;
    d.forEach(y => {
      o && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n)
    }), p == null || p(), (v = h) == null || v.disconnect(), h = null, l && cancelAnimationFrame(w)
  }
}
const rE = IC,
  oE = LC,
  iE = OC,
  sE = zC,
  aE = jC,
  Jp = AC,
  lE = FC,
  cE = (e, t, n) => {
    const r = new Map,
      o = {
        platform: eE,
        ...n
      },
      i = {
        ...o.platform,
        _c: r
      };
    return _C(e, t, {
      ...o,
      platform: i
    })
  };
var As = typeof document < "u" ? c.useLayoutEffect : c.useEffect;

function ca(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0;)
        if (!ca(e[r], t[r])) return !1;
      return !0
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
    for (r = n; r-- !== 0;)
      if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0;) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !ca(e[i], t[i])) return !1
    }
    return !0
  }
  return e !== e && t !== t
}

function Gg(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function em(e, t) {
  const n = Gg(e);
  return Math.round(t * n) / n
}

function tm(e) {
  const t = c.useRef(e);
  return As(() => {
    t.current = e
  }), t
}

function uE(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: u
  } = e, [d, p] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, h] = c.useState(r);
  ca(f, r) || h(r);
  const [w, g] = c.useState(null), [b, v] = c.useState(null), y = c.useCallback(V => {
    V !== E.current && (E.current = V, g(V))
  }, []), x = c.useCallback(V => {
    V !== k.current && (k.current = V, v(V))
  }, []), S = i || w, C = s || b, E = c.useRef(null), k = c.useRef(null), N = c.useRef(d), T = l != null, M = tm(l), z = tm(o), I = c.useCallback(() => {
    if (!E.current || !k.current) return;
    const V = {
      placement: t,
      strategy: n,
      middleware: f
    };
    z.current && (V.platform = z.current), cE(E.current, k.current, V).then(R => {
      const $ = {
        ...R,
        isPositioned: !0
      };
      Y.current && !ca(N.current, $) && (N.current = $, Bn.flushSync(() => {
        p($)
      }))
    })
  }, [f, t, n, z]);
  As(() => {
    u === !1 && N.current.isPositioned && (N.current.isPositioned = !1, p(V => ({
      ...V,
      isPositioned: !1
    })))
  }, [u]);
  const Y = c.useRef(!1);
  As(() => (Y.current = !0, () => {
    Y.current = !1
  }), []), As(() => {
    if (S && (E.current = S), C && (k.current = C), S && C) {
      if (M.current) return M.current(S, C, I);
      I()
    }
  }, [S, C, I, M, T]);
  const H = c.useMemo(() => ({
      reference: E,
      floating: k,
      setReference: y,
      setFloating: x
    }), [y, x]),
    Q = c.useMemo(() => ({
      reference: S,
      floating: C
    }), [S, C]),
    K = c.useMemo(() => {
      const V = {
        position: n,
        left: 0,
        top: 0
      };
      if (!Q.floating) return V;
      const R = em(Q.floating, d.x),
        $ = em(Q.floating, d.y);
      return a ? {
        ...V,
        transform: "translate(" + R + "px, " + $ + "px)",
        ...Gg(Q.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: n,
        left: R,
        top: $
      }
    }, [n, a, Q.floating, d.x, d.y]);
  return c.useMemo(() => ({
    ...d,
    update: I,
    refs: H,
    elements: Q,
    floatingStyles: K
  }), [d, I, H, Q, K])
}
const dE = e => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current")
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const {
          element: r,
          padding: o
        } = typeof e == "function" ? e(n) : e;
        return r && t(r) ? r.current != null ? Jp({
          element: r.current,
          padding: o
        }).fn(n) : {} : r ? Jp({
          element: r,
          padding: o
        }).fn(n) : {}
      }
    }
  },
  fE = (e, t) => ({
    ...rE(e),
    options: [e, t]
  }),
  pE = (e, t) => ({
    ...oE(e),
    options: [e, t]
  }),
  mE = (e, t) => ({
    ...lE(e),
    options: [e, t]
  }),
  hE = (e, t) => ({
    ...iE(e),
    options: [e, t]
  }),
  vE = (e, t) => ({
    ...sE(e),
    options: [e, t]
  }),
  gE = (e, t) => ({
    ...aE(e),
    options: [e, t]
  }),
  yE = (e, t) => ({
    ...dE(e),
    options: [e, t]
  });

function Ld({
  children: e,
  active: t = !0,
  refProp: n = "ref",
  innerRef: r
}) {
  const o = $x(t),
    i = nn(o, r);
  return hx(e) ? c.cloneElement(e, {
    [n]: i
  }) : e
}

function Yg(e) {
  return m.jsx(Md, {
    tabIndex: -1,
    "data-autofocus": !0,
    ...e
  })
}
Ld.displayName = "@mantine/core/FocusTrap";
Yg.displayName = "@mantine/core/FocusTrapInitialFocus";
Ld.InitialFocus = Yg;

function wE(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t
}
const xE = {},
  Xg = c.forwardRef((e, t) => {
    const {
      children: n,
      target: r,
      ...o
    } = xe("Portal", xE, e), [i, s] = c.useState(!1), a = c.useRef(null);
    return Mi(() => (s(!0), a.current = r ? typeof r == "string" ? document.querySelector(r) : r : wE(o), ph(t, a.current), !r && a.current && document.body.appendChild(a.current), () => {
      !r && a.current && document.body.removeChild(a.current)
    }), [r]), !i || !a.current ? null : Bn.createPortal(m.jsx(m.Fragment, {
      children: n
    }), a.current)
  });
Xg.displayName = "@mantine/core/Portal";

function Qg({
  withinPortal: e = !0,
  children: t,
  ...n
}) {
  return e ? m.jsx(Xg, {
    ...n,
    children: t
  }) : m.jsx(m.Fragment, {
    children: t
  })
}
Qg.displayName = "@mantine/core/OptionalPortal";
const Do = e => ({
    in: {
      opacity: 1,
      transform: "scale(1)"
    },
    out: {
      opacity: 0,
      transform: `scale(.9) translateY(${_(e==="bottom"?10:-10)})`
    },
    transitionProperty: "transform, opacity"
  }),
  ps = {
    fade: {
      in: {
        opacity: 1
      },
      out: {
        opacity: 0
      },
      transitionProperty: "opacity"
    },
    "fade-up": {
      in: {
        opacity: 1,
        transform: "translateY(0)"
      },
      out: {
        opacity: 0,
        transform: `translateY(${_(30)}`
      },
      transitionProperty: "opacity, transform"
    },
    "fade-down": {
      in: {
        opacity: 1,
        transform: "translateY(0)"
      },
      out: {
        opacity: 0,
        transform: `translateY(${_(-30)}`
      },
      transitionProperty: "opacity, transform"
    },
    "fade-left": {
      in: {
        opacity: 1,
        transform: "translateX(0)"
      },
      out: {
        opacity: 0,
        transform: `translateX(${_(30)}`
      },
      transitionProperty: "opacity, transform"
    },
    "fade-right": {
      in: {
        opacity: 1,
        transform: "translateX(0)"
      },
      out: {
        opacity: 0,
        transform: `translateX(${_(-30)}`
      },
      transitionProperty: "opacity, transform"
    },
    scale: {
      in: {
        opacity: 1,
        transform: "scale(1)"
      },
      out: {
        opacity: 0,
        transform: "scale(0)"
      },
      common: {
        transformOrigin: "top"
      },
      transitionProperty: "transform, opacity"
    },
    "scale-y": {
      in: {
        opacity: 1,
        transform: "scaleY(1)"
      },
      out: {
        opacity: 0,
        transform: "scaleY(0)"
      },
      common: {
        transformOrigin: "top"
      },
      transitionProperty: "transform, opacity"
    },
    "scale-x": {
      in: {
        opacity: 1,
        transform: "scaleX(1)"
      },
      out: {
        opacity: 0,
        transform: "scaleX(0)"
      },
      common: {
        transformOrigin: "left"
      },
      transitionProperty: "transform, opacity"
    },
    "skew-up": {
      in: {
        opacity: 1,
        transform: "translateY(0) skew(0deg, 0deg)"
      },
      out: {
        opacity: 0,
        transform: `translateY(${_(-20)}) skew(-10deg, -5deg)`
      },
      common: {
        transformOrigin: "top"
      },
      transitionProperty: "transform, opacity"
    },
    "skew-down": {
      in: {
        opacity: 1,
        transform: "translateY(0) skew(0deg, 0deg)"
      },
      out: {
        opacity: 0,
        transform: `translateY(${_(20)}) skew(-10deg, -5deg)`
      },
      common: {
        transformOrigin: "bottom"
      },
      transitionProperty: "transform, opacity"
    },
    "rotate-left": {
      in: {
        opacity: 1,
        transform: "translateY(0) rotate(0deg)"
      },
      out: {
        opacity: 0,
        transform: `translateY(${_(20)}) rotate(-5deg)`
      },
      common: {
        transformOrigin: "bottom"
      },
      transitionProperty: "transform, opacity"
    },
    "rotate-right": {
      in: {
        opacity: 1,
        transform: "translateY(0) rotate(0deg)"
      },
      out: {
        opacity: 0,
        transform: `translateY(${_(20)}) rotate(5deg)`
      },
      common: {
        transformOrigin: "top"
      },
      transitionProperty: "transform, opacity"
    },
    "slide-down": {
      in: {
        opacity: 1,
        transform: "translateY(0)"
      },
      out: {
        opacity: 0,
        transform: "translateY(-100%)"
      },
      common: {
        transformOrigin: "top"
      },
      transitionProperty: "transform, opacity"
    },
    "slide-up": {
      in: {
        opacity: 1,
        transform: "translateY(0)"
      },
      out: {
        opacity: 0,
        transform: "translateY(100%)"
      },
      common: {
        transformOrigin: "bottom"
      },
      transitionProperty: "transform, opacity"
    },
    "slide-left": {
      in: {
        opacity: 1,
        transform: "translateX(0)"
      },
      out: {
        opacity: 0,
        transform: "translateX(100%)"
      },
      common: {
        transformOrigin: "left"
      },
      transitionProperty: "transform, opacity"
    },
    "slide-right": {
      in: {
        opacity: 1,
        transform: "translateX(0)"
      },
      out: {
        opacity: 0,
        transform: "translateX(-100%)"
      },
      common: {
        transformOrigin: "right"
      },
      transitionProperty: "transform, opacity"
    },
    pop: {
      ...Do("bottom"),
      common: {
        transformOrigin: "center center"
      }
    },
    "pop-bottom-left": {
      ...Do("bottom"),
      common: {
        transformOrigin: "bottom left"
      }
    },
    "pop-bottom-right": {
      ...Do("bottom"),
      common: {
        transformOrigin: "bottom right"
      }
    },
    "pop-top-left": {
      ...Do("top"),
      common: {
        transformOrigin: "top left"
      }
    },
    "pop-top-right": {
      ...Do("top"),
      common: {
        transformOrigin: "top right"
      }
    }
  },
  nm = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out"
  };

function bE({
  transition: e,
  state: t,
  duration: n,
  timingFunction: r
}) {
  const o = {
    transitionDuration: `${n}ms`,
    transitionTimingFunction: r
  };
  return typeof e == "string" ? e in ps ? {
    transitionProperty: ps[e].transitionProperty,
    ...o,
    ...ps[e].common,
    ...ps[e][nm[t]]
  } : {} : {
    transitionProperty: e.transitionProperty,
    ...o,
    ...e.common,
    ...e[nm[t]]
  }
}

function SE({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: i,
  onEntered: s,
  onExited: a,
  enterDelay: l,
  exitDelay: u
}) {
  const d = In(),
    p = mh(),
    f = d.respectReducedMotion ? p : !1,
    [h, w] = c.useState(f ? 0 : e),
    [g, b] = c.useState(r ? "entered" : "exited"),
    v = c.useRef(-1),
    y = c.useRef(-1),
    x = c.useRef(-1),
    S = E => {
      const k = E ? o : i,
        N = E ? s : a;
      window.clearTimeout(v.current);
      const T = f ? 0 : E ? e : t;
      w(T), T === 0 ? (typeof k == "function" && k(), typeof N == "function" && N(), b(E ? "entered" : "exited")) : x.current = requestAnimationFrame(() => {
        Da.flushSync(() => {
          b(E ? "pre-entering" : "pre-exiting")
        }), x.current = requestAnimationFrame(() => {
          typeof k == "function" && k(), b(E ? "entering" : "exiting"), v.current = window.setTimeout(() => {
            typeof N == "function" && N(), b(E ? "entered" : "exited")
          }, T)
        })
      })
    },
    C = E => {
      if (window.clearTimeout(y.current), typeof(E ? l : u) != "number") {
        S(E);
        return
      }
      y.current = window.setTimeout(() => {
        S(E)
      }, E ? l : u)
    };
  return lh(() => {
    C(r)
  }, [r]), c.useEffect(() => () => {
    window.clearTimeout(v.current), cancelAnimationFrame(x.current)
  }, []), {
    transitionDuration: h,
    transitionStatus: g,
    transitionTimingFunction: n || "ease"
  }
}

function za({
  keepMounted: e,
  transition: t = "fade",
  duration: n = 250,
  exitDuration: r = n,
  mounted: o,
  children: i,
  timingFunction: s = "ease",
  onExit: a,
  onEntered: l,
  onEnter: u,
  onExited: d,
  enterDelay: p,
  exitDelay: f
}) {
  const {
    transitionDuration: h,
    transitionStatus: w,
    transitionTimingFunction: g
  } = SE({
    mounted: o,
    exitDuration: r,
    duration: n,
    timingFunction: s,
    onExit: a,
    onEntered: l,
    onEnter: u,
    onExited: d,
    enterDelay: p,
    exitDelay: f
  });
  return h === 0 ? o ? m.jsx(m.Fragment, {
    children: i({})
  }) : e ? i({
    display: "none"
  }) : null : w === "exited" ? e ? i({
    display: "none"
  }) : null : m.jsx(m.Fragment, {
    children: i(bE({
      transition: t,
      duration: h,
      state: w,
      timingFunction: g
    }))
  })
}
za.displayName = "@mantine/core/Transition";
const Zg = c.forwardRef(({
  size: e = "var(--cb-icon-size, 70%)",
  style: t,
  ...n
}, r) => m.jsx("svg", {
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    ...t,
    width: e,
    height: e
  },
  ref: r,
  ...n,
  children: m.jsx("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  })
}));
Zg.displayName = "@mantine/core/CloseIcon";
var qg = {
  root: "m_86a44da5",
  "root--subtle": "m_220c80f2"
};
const CE = {
    variant: "subtle"
  },
  EE = (e, {
    size: t,
    radius: n,
    iconSize: r
  }) => ({
    root: {
      "--cb-size": Dn(t, "cb-size"),
      "--cb-radius": n === void 0 ? void 0 : $i(n),
      "--cb-icon-size": _(r)
    }
  }),
  Fd = xa((e, t) => {
    const n = xe("CloseButton", CE, e),
      {
        iconSize: r,
        children: o,
        vars: i,
        radius: s,
        className: a,
        classNames: l,
        style: u,
        styles: d,
        unstyled: p,
        "data-disabled": f,
        disabled: h,
        variant: w,
        icon: g,
        mod: b,
        ...v
      } = n,
      y = Ft({
        name: "CloseButton",
        props: n,
        className: a,
        style: u,
        classes: qg,
        classNames: l,
        styles: d,
        unstyled: p,
        vars: i,
        varsResolver: EE
      });
    return m.jsxs($d, {
      ref: t,
      ...v,
      unstyled: p,
      variant: w,
      disabled: h,
      mod: [{
        disabled: h || f
      }, b],
      ...y("root", {
        variant: w,
        active: !h && !f
      }),
      children: [g || m.jsx(Zg, {}), o]
    })
  });
Fd.classes = qg;
Fd.displayName = "@mantine/core/CloseButton";
var Jg = {
  root: "m_9814e45f"
};
const kE = {
    zIndex: ya("modal")
  },
  NE = (e, {
    gradient: t,
    color: n,
    backgroundOpacity: r,
    blur: o,
    radius: i,
    zIndex: s
  }) => ({
    root: {
      "--overlay-bg": t || (n !== void 0 || r !== void 0) && Tt(n || "#000", r ?? .6) || void 0,
      "--overlay-filter": o ? `blur(${_(o)})` : void 0,
      "--overlay-radius": i === void 0 ? void 0 : $i(i),
      "--overlay-z-index": s == null ? void 0 : s.toString()
    }
  }),
  zd = xa((e, t) => {
    const n = xe("Overlay", kE, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        fixed: u,
        center: d,
        children: p,
        radius: f,
        zIndex: h,
        gradient: w,
        blur: g,
        color: b,
        backgroundOpacity: v,
        mod: y,
        ...x
      } = n,
      S = Ft({
        name: "Overlay",
        props: n,
        classes: Jg,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: NE
      });
    return m.jsx(Ne, {
      ref: t,
      ...S("root"),
      mod: [{
        center: d,
        fixed: u
      }, y],
      ...x,
      children: p
    })
  });
zd.classes = Jg;
zd.displayName = "@mantine/core/Overlay";
const [PE, sn] = ga("ModalBase component was not found in tree");

function RE({
  opened: e,
  transitionDuration: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(), s = mh() ? 0 : t;
  return c.useEffect(() => (e ? (r(!0), window.clearTimeout(o.current)) : s === 0 ? r(!1) : o.current = window.setTimeout(() => r(!1), s), () => window.clearTimeout(o.current)), [e, s]), n
}

function $E({
  id: e,
  transitionProps: t,
  opened: n,
  trapFocus: r,
  closeOnEscape: o,
  onClose: i,
  returnFocus: s
}) {
  const a = fh(e),
    [l, u] = c.useState(!1),
    [d, p] = c.useState(!1),
    f = typeof(t == null ? void 0 : t.duration) == "number" ? t == null ? void 0 : t.duration : 200,
    h = RE({
      opened: n,
      transitionDuration: f
    });
  return _x("keydown", w => {
    var g;
    w.key === "Escape" && o && n && ((g = w.target) == null ? void 0 : g.getAttribute("data-mantine-stop-propagation")) !== "true" && i()
  }, {
    capture: !0
  }), Sx({
    opened: n,
    shouldReturnFocus: r && s
  }), {
    _id: a,
    titleMounted: l,
    bodyMounted: d,
    shouldLockScroll: h,
    setTitleMounted: u,
    setBodyMounted: p
  }
}
const ME = c.forwardRef(({
  keepMounted: e,
  opened: t,
  onClose: n,
  id: r,
  transitionProps: o,
  trapFocus: i,
  closeOnEscape: s,
  returnFocus: a,
  closeOnClickOutside: l,
  withinPortal: u,
  portalProps: d,
  lockScroll: p,
  children: f,
  zIndex: h,
  shadow: w,
  padding: g,
  __vars: b,
  unstyled: v,
  removeScrollProps: y,
  ...x
}, S) => {
  const {
    _id: C,
    titleMounted: E,
    bodyMounted: k,
    shouldLockScroll: N,
    setTitleMounted: T,
    setBodyMounted: M
  } = $E({
    id: r,
    transitionProps: o,
    opened: t,
    trapFocus: i,
    closeOnEscape: s,
    onClose: n,
    returnFocus: a
  }), {
    key: z,
    ...I
  } = y || {};
  return m.jsx(Qg, {
    ...d,
    withinPortal: u,
    children: m.jsx(PE, {
      value: {
        opened: t,
        onClose: n,
        closeOnClickOutside: l,
        transitionProps: {
          ...o,
          keepMounted: e
        },
        getTitleId: () => `${C}-title`,
        getBodyId: () => `${C}-body`,
        titleMounted: E,
        bodyMounted: k,
        setTitleMounted: T,
        setBodyMounted: M,
        trapFocus: i,
        closeOnEscape: s,
        zIndex: h,
        unstyled: v
      },
      children: m.jsx(Ri, {
        enabled: N && p,
        ...I,
        children: m.jsx(Ne, {
          ref: S,
          ...x,
          __vars: {
            ...b,
            "--mb-z-index": (h || ya("modal")).toString(),
            "--mb-shadow": sh(w),
            "--mb-padding": gx(g)
          },
          children: f
        })
      }, z)
    })
  })
});

function TE() {
  const e = sn();
  return c.useEffect(() => (e.setBodyMounted(!0), () => e.setBodyMounted(!1)), []), e.getBodyId()
}
var mo = {
  title: "m_615af6c9",
  header: "m_b5489c3c",
  inner: "m_60c222c7",
  content: "m_fd1ab0aa",
  close: "m_606cb269",
  body: "m_5df29311"
};
const e0 = c.forwardRef(({
  className: e,
  ...t
}, n) => {
  const r = TE(),
    o = sn();
  return m.jsx(Ne, {
    ref: n,
    ...t,
    id: r,
    className: wt({
      [mo.body]: !o.unstyled
    }, e)
  })
});
e0.displayName = "@mantine/core/ModalBaseBody";
const t0 = c.forwardRef(({
  className: e,
  onClick: t,
  ...n
}, r) => {
  const o = sn();
  return m.jsx(Fd, {
    ref: r,
    ...n,
    onClick: i => {
      o.onClose(), t == null || t(i)
    },
    className: wt({
      [mo.close]: !o.unstyled
    }, e),
    unstyled: o.unstyled
  })
});
t0.displayName = "@mantine/core/ModalBaseCloseButton";
const _E = c.forwardRef(({
    transitionProps: e,
    className: t,
    innerProps: n,
    onKeyDown: r,
    style: o,
    ...i
  }, s) => {
    const a = sn();
    return m.jsx(za, {
      mounted: a.opened,
      transition: "pop",
      ...a.transitionProps,
      ...e,
      children: l => m.jsx("div", {
        ...n,
        className: wt({
          [mo.inner]: !a.unstyled
        }, n.className),
        children: m.jsx(Ld, {
          active: a.opened && a.trapFocus,
          innerRef: s,
          children: m.jsx(Td, {
            ...i,
            component: "section",
            role: "dialog",
            tabIndex: -1,
            "aria-modal": !0,
            "aria-describedby": a.bodyMounted ? a.getBodyId() : void 0,
            "aria-labelledby": a.titleMounted ? a.getTitleId() : void 0,
            style: [o, l],
            className: wt({
              [mo.content]: !a.unstyled
            }, t),
            unstyled: a.unstyled,
            children: i.children
          })
        })
      })
    })
  }),
  n0 = c.forwardRef(({
    className: e,
    ...t
  }, n) => {
    const r = sn();
    return m.jsx(Ne, {
      component: "header",
      ref: n,
      className: wt({
        [mo.header]: !r.unstyled
      }, e),
      ...t
    })
  });
n0.displayName = "@mantine/core/ModalBaseHeader";
const AE = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};

function OE(e) {
  const t = sn();
  return {
    ...AE,
    ...t.transitionProps,
    ...e
  }
}
const r0 = c.forwardRef(({
  onClick: e,
  transitionProps: t,
  style: n,
  ...r
}, o) => {
  const i = sn(),
    s = OE(t);
  return m.jsx(za, {
    mounted: i.opened,
    ...s,
    transition: "fade",
    children: a => m.jsx(zd, {
      ref: o,
      fixed: !0,
      style: [n, a],
      zIndex: i.zIndex,
      unstyled: i.unstyled,
      onClick: l => {
        e == null || e(l), i.closeOnClickOutside && i.onClose()
      },
      ...r
    })
  })
});
r0.displayName = "@mantine/core/ModalBaseOverlay";

function jE() {
  const e = sn();
  return c.useEffect(() => (e.setTitleMounted(!0), () => e.setTitleMounted(!1)), []), e.getTitleId()
}
const o0 = c.forwardRef(({
  className: e,
  ...t
}, n) => {
  const r = jE(),
    o = sn();
  return m.jsx(Ne, {
    component: "h2",
    ref: n,
    className: wt({
      [mo.title]: !o.unstyled
    }, e),
    ...t,
    id: r
  })
});
o0.displayName = "@mantine/core/ModalBaseTitle";

function DE({
  children: e
}) {
  return m.jsx(m.Fragment, {
    children: e
  })
}

function IE(e, t) {
  if (!t || !e) return !1;
  let n = t.parentNode;
  for (; n != null;) {
    if (n === e) return !0;
    n = n.parentNode
  }
  return !1
}

function LE({
  target: e,
  parent: t,
  ref: n,
  displayAfterTransitionEnd: r
}) {
  const o = c.useRef(),
    [i, s] = c.useState(!1),
    [a, l] = c.useState(typeof r == "boolean" ? r : !1),
    u = () => {
      if (!e || !t) return;
      const h = e.getBoundingClientRect(),
        w = t.getBoundingClientRect(),
        g = {
          top: h.top - w.top,
          left: h.left - w.left,
          width: h.width,
          height: h.height
        };
      n.current && (n.current.style.transform = `translateY(${g.top}px) translateX(${g.left}px)`, n.current.style.width = `${g.width}px`, n.current.style.height = `${g.height}px`)
    },
    d = () => {
      window.clearTimeout(o.current), n.current && (n.current.style.transitionDuration = "0ms"), u(), o.current = window.setTimeout(() => {
        n.current && (n.current.style.transitionDuration = "")
      }, 30)
    },
    p = c.useRef(),
    f = c.useRef();
  return c.useEffect(() => {
    if (u(), e) return p.current = new ResizeObserver(d), p.current.observe(e), t && (f.current = new ResizeObserver(d), f.current.observe(t)), () => {
      var h, w;
      (h = p.current) == null || h.disconnect(), (w = f.current) == null || w.disconnect()
    }
  }, [t, e]), c.useEffect(() => {
    if (t) {
      const h = w => {
        IE(w.target, t) && (d(), l(!1))
      };
      return t.addEventListener("transitionend", h), () => {
        t.removeEventListener("transitionend", h)
      }
    }
  }, [t]), jx(() => {
    Fx() !== "test" && s(!0)
  }, 20, {
    autoInvoke: !0
  }), Dx(h => {
    h.forEach(w => {
      w.type === "attributes" && w.attributeName === "dir" && d()
    })
  }, {
    attributes: !0,
    attributeFilter: ["dir"]
  }, () => document.documentElement), {
    initialized: i,
    hidden: a
  }
}
var i0 = {
  root: "m_96b553a6"
};
const FE = {},
  zE = (e, {
    transitionDuration: t
  }) => ({
    root: {
      "--transition-duration": typeof t == "number" ? `${t}ms` : t
    }
  }),
  Bd = Ge((e, t) => {
    const n = xe("FloatingIndicator", FE, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        target: u,
        parent: d,
        transitionDuration: p,
        mod: f,
        displayAfterTransitionEnd: h,
        ...w
      } = n,
      g = Ft({
        name: "FloatingIndicator",
        classes: i0,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: zE
      }),
      b = c.useRef(null),
      {
        initialized: v,
        hidden: y
      } = LE({
        target: u,
        parent: d,
        ref: b,
        displayAfterTransitionEnd: h
      }),
      x = nn(t, b);
    return !u || !d ? null : m.jsx(Ne, {
      ref: x,
      mod: [{
        initialized: v,
        hidden: y
      }, f],
      ...g("root"),
      ...w
    })
  });
Bd.displayName = "@mantine/core/FloatingIndicator";
Bd.classes = i0;
var s0 = {
  root: "m_3eebeb36",
  label: "m_9e365f20"
};
const BE = {
    orientation: "horizontal"
  },
  UE = (e, {
    color: t,
    variant: n,
    size: r
  }) => ({
    root: {
      "--divider-color": t ? Os(t, e) : void 0,
      "--divider-border-style": n,
      "--divider-size": Dn(r, "divider-size")
    }
  }),
  Ud = Ge((e, t) => {
    const n = xe("Divider", BE, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        color: u,
        orientation: d,
        label: p,
        labelPosition: f,
        mod: h,
        ...w
      } = n,
      g = Ft({
        name: "Divider",
        classes: s0,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: UE
      });
    return m.jsx(Ne, {
      ref: t,
      mod: [{
        orientation: d,
        "with-label": !!p
      }, h],
      ...g("root"),
      ...w,
      role: "separator",
      children: p && m.jsx(Ne, {
        component: "span",
        mod: {
          position: f
        },
        ...g("label"),
        children: p
      })
    })
  });
Ud.classes = s0;
Ud.displayName = "@mantine/core/Divider";

function Te() {
  return Te = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }, Te.apply(null, arguments)
}
const [WE, bo] = ga("Modal component was not found in tree");
var an = {
  root: "m_9df02822",
  content: "m_54c44539",
  inner: "m_1f958f16",
  header: "m_d0e2b9cd"
};
const VE = {},
  Ba = Ge((e, t) => {
    const n = xe("ModalBody", VE, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: a,
        ...l
      } = n,
      u = bo();
    return m.jsx(e0, {
      ref: t,
      ...u.getStyles("body", {
        classNames: r,
        style: i,
        styles: s,
        className: o
      }),
      ...l
    })
  });
Ba.classes = an;
Ba.displayName = "@mantine/core/ModalBody";
const HE = {},
  Ua = Ge((e, t) => {
    const n = xe("ModalCloseButton", HE, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: a,
        ...l
      } = n,
      u = bo();
    return m.jsx(t0, {
      ref: t,
      ...u.getStyles("close", {
        classNames: r,
        style: i,
        styles: s,
        className: o
      }),
      ...l
    })
  });
Ua.classes = an;
Ua.displayName = "@mantine/core/ModalCloseButton";
const KE = {},
  Wa = Ge((e, t) => {
    const n = xe("ModalContent", KE, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: a,
        children: l,
        ...u
      } = n,
      d = bo(),
      p = d.scrollAreaComponent || DE;
    return m.jsx(_E, {
      ...d.getStyles("content", {
        className: o,
        style: i,
        styles: s,
        classNames: r
      }),
      innerProps: d.getStyles("inner", {
        className: o,
        style: i,
        styles: s,
        classNames: r
      }),
      "data-full-screen": d.fullScreen || void 0,
      "data-modal-content": !0,
      ref: t,
      ...u,
      children: m.jsx(p, {
        style: {
          maxHeight: d.fullScreen ? "100dvh" : `calc(100dvh - (${_(d.yOffset)} * 2))`
        },
        children: l
      })
    })
  });
Wa.classes = an;
Wa.displayName = "@mantine/core/ModalContent";
const GE = {},
  Va = Ge((e, t) => {
    const n = xe("ModalHeader", GE, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: a,
        ...l
      } = n,
      u = bo();
    return m.jsx(n0, {
      ref: t,
      ...u.getStyles("header", {
        classNames: r,
        style: i,
        styles: s,
        className: o
      }),
      ...l
    })
  });
Va.classes = an;
Va.displayName = "@mantine/core/ModalHeader";
const YE = {},
  Ha = Ge((e, t) => {
    const n = xe("ModalOverlay", YE, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: a,
        ...l
      } = n,
      u = bo();
    return m.jsx(r0, {
      ref: t,
      ...u.getStyles("overlay", {
        classNames: r,
        style: i,
        styles: s,
        className: o
      }),
      ...l
    })
  });
Ha.classes = an;
Ha.displayName = "@mantine/core/ModalOverlay";
const XE = {
    __staticSelector: "Modal",
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: ya("modal"),
    transitionProps: {
      duration: 200,
      transition: "pop"
    },
    yOffset: "5dvh"
  },
  QE = (e, {
    radius: t,
    size: n,
    yOffset: r,
    xOffset: o
  }) => ({
    root: {
      "--modal-radius": t === void 0 ? void 0 : $i(t),
      "--modal-size": Dn(n, "modal-size"),
      "--modal-y-offset": _(r),
      "--modal-x-offset": _(o)
    }
  }),
  Ka = Ge((e, t) => {
    const n = xe("ModalRoot", XE, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        yOffset: u,
        scrollAreaComponent: d,
        radius: p,
        fullScreen: f,
        centered: h,
        xOffset: w,
        __staticSelector: g,
        ...b
      } = n,
      v = Ft({
        name: g,
        classes: an,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: QE
      });
    return m.jsx(WE, {
      value: {
        yOffset: u,
        scrollAreaComponent: d,
        getStyles: v,
        fullScreen: f
      },
      children: m.jsx(ME, {
        ref: t,
        ...v("root"),
        "data-full-screen": f || void 0,
        "data-centered": h || void 0,
        unstyled: a,
        ...b
      })
    })
  });
Ka.classes = an;
Ka.displayName = "@mantine/core/ModalRoot";
const ZE = {},
  Ga = Ge((e, t) => {
    const n = xe("ModalTitle", ZE, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: a,
        ...l
      } = n,
      u = bo();
    return m.jsx(o0, {
      ref: t,
      ...u.getStyles("title", {
        classNames: r,
        style: i,
        styles: s,
        className: o
      }),
      ...l
    })
  });
Ga.classes = an;
Ga.displayName = "@mantine/core/ModalTitle";
const qE = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: ya("modal"),
    transitionProps: {
      duration: 200,
      transition: "fade-down"
    },
    withOverlay: !0,
    withCloseButton: !0
  },
  Ct = Ge((e, t) => {
    const {
      title: n,
      withOverlay: r,
      overlayProps: o,
      withCloseButton: i,
      closeButtonProps: s,
      children: a,
      radius: l,
      ...u
    } = xe("Modal", qE, e), d = !!n || i;
    return m.jsxs(Ka, {
      ref: t,
      radius: l,
      ...u,
      children: [r && m.jsx(Ha, {
        ...o
      }), m.jsxs(Wa, {
        radius: l,
        children: [d && m.jsxs(Va, {
          children: [n && m.jsx(Ga, {
            children: n
          }), i && m.jsx(Ua, {
            ...s
          })]
        }), m.jsx(Ba, {
          children: a
        })]
      })]
    })
  });
Ct.classes = an;
Ct.displayName = "@mantine/core/Modal";
Ct.Root = Ka;
Ct.Overlay = Ha;
Ct.Content = Wa;
Ct.Body = Ba;
Ct.Header = Va;
Ct.Title = Ga;
Ct.CloseButton = Ua;
var a0 = {
  root: "m_cf365364",
  indicator: "m_9e182ccd",
  label: "m_1738fcb2",
  input: "m_1714d588",
  control: "m_69686b9b",
  innerLabel: "m_78882f40"
};
const JE = {
    withItemsBorders: !0
  },
  e4 = (e, {
    radius: t,
    color: n,
    transitionDuration: r,
    size: o,
    transitionTimingFunction: i
  }) => ({
    root: {
      "--sc-radius": t === void 0 ? void 0 : $i(t),
      "--sc-color": n ? Os(n, e) : void 0,
      "--sc-shadow": n ? void 0 : "var(--mantine-shadow-xs)",
      "--sc-transition-duration": r === void 0 ? void 0 : `${r}ms`,
      "--sc-transition-timing-function": i,
      "--sc-padding": Dn(o, "sc-padding"),
      "--sc-font-size": yx(o)
    }
  }),
  Wd = Ge((e, t) => {
    var B, Z;
    const n = xe("SegmentedControl", JE, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        data: u,
        value: d,
        defaultValue: p,
        onChange: f,
        size: h,
        name: w,
        disabled: g,
        readOnly: b,
        fullWidth: v,
        orientation: y,
        radius: x,
        color: S,
        transitionDuration: C,
        transitionTimingFunction: E,
        variant: k,
        autoContrast: N,
        withItemsBorders: T,
        mod: M,
        ...z
      } = n,
      I = Ft({
        name: "SegmentedControl",
        props: n,
        classes: a0,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: e4
      }),
      Y = In(),
      H = u.map(G => typeof G == "string" ? {
        label: G,
        value: G
      } : G),
      Q = Ix(),
      [K, V] = c.useState(null),
      [R, $] = c.useState({}),
      L = (G, ne) => {
        R[ne] = G, $(R)
      },
      [j, P] = Ox({
        value: d,
        defaultValue: p,
        finalValue: Array.isArray(u) ? ((B = H.find(G => !G.disabled)) == null ? void 0 : B.value) ?? ((Z = u[0]) == null ? void 0 : Z.value) ?? null : null,
        onChange: f
      }),
      D = fh(w),
      W = H.map(G => c.createElement(Ne, {
        ...I("control"),
        mod: {
          active: j === G.value,
          orientation: y
        },
        key: G.value
      }, c.createElement("input", {
        ...I("input"),
        disabled: g || G.disabled,
        type: "radio",
        name: D,
        value: G.value,
        id: `${D}-${G.value}`,
        checked: j === G.value,
        onChange: () => !b && P(G.value),
        "data-focus-ring": Y.focusRing,
        key: `${G.value}-input`
      }), c.createElement(Ne, {
        component: "label",
        ...I("label"),
        mod: {
          active: j === G.value && !(g || G.disabled),
          disabled: g || G.disabled,
          "read-only": b
        },
        htmlFor: `${D}-${G.value}`,
        ref: ne => L(ne, G.value),
        __vars: {
          "--sc-label-color": S !== void 0 ? yh({
            color: S,
            theme: Y,
            autoContrast: N
          }) : void 0
        },
        key: `${G.value}-label`
      }, m.jsx("span", {
        ...I("innerLabel"),
        children: G.label
      })))),
      F = nn(t, G => V(G));
    return u.length === 0 ? null : m.jsxs(Ne, {
      ...I("root"),
      variant: k,
      size: h,
      ref: F,
      mod: [{
        "full-width": v,
        orientation: y,
        initialized: Q,
        "with-items-borders": T
      }, M],
      ...z,
      role: "radiogroup",
      "data-disabled": g,
      children: [typeof j == "string" && m.jsx(Bd, {
        target: R[j],
        parent: K,
        component: "span",
        transitionDuration: "var(--sc-transition-duration)",
        ...I("indicator")
      }), W]
    })
  });
Wd.classes = a0;
Wd.displayName = "@mantine/core/SegmentedControl";
var su = {},
  rm = Bn;
su.createRoot = rm.createRoot, su.hydrateRoot = rm.hydrateRoot;
var l0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  },
  om = O.createContext && O.createContext(l0),
  t4 = ["attr", "size", "title"];

function n4(e, t) {
  if (e == null) return {};
  var n = r4(e, t),
    r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
  }
  return n
}

function r4(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r]
    } return n
}

function ua() {
  return ua = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }, ua.apply(this, arguments)
}

function im(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? im(Object(n), !0).forEach(function(r) {
      o4(e, r, n[r])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : im(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
    })
  }
  return e
}

function o4(e, t, n) {
  return t = i4(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function i4(e) {
  var t = s4(e, "string");
  return typeof t == "symbol" ? t : t + ""
}

function s4(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (t === "string" ? String : Number)(e)
}

function c0(e) {
  return e && e.map((t, n) => O.createElement(t.tag, da({
    key: n
  }, t.attr), c0(t.child)))
}

function ln(e) {
  return t => O.createElement(a4, ua({
    attr: da({}, e.attr)
  }, t), c0(e.child))
}

function a4(e) {
  var t = n => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, s = n4(e, t4), a = o || n.size || "1em", l;
    return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), O.createElement("svg", ua({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, s, {
      className: l,
      style: da(da({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && O.createElement("title", null, i), e.children)
  };
  return om !== void 0 ? O.createElement(om.Consumer, null, n => t(n)) : t(l0)
}

function sm(e) {
  return ln({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
      },
      child: []
    }]
  })(e)
}

function l4(e) {
  return ln({
    tag: "svg",
    attr: {
      viewBox: "0 0 576 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M80 96A48 48 0 1 0 80 0a48 48 0 1 0 0 96zM64 128c-35.3 0-64 28.7-64 64V320c0 17.7 14.3 32 32 32c9.8 0 18.5-4.4 24.4-11.2L80.4 485.3c2.9 17.4 19.4 29.2 36.8 26.3s29.2-19.4 26.3-36.8L123.1 352h15.7l30 134.9c3.8 17.3 20.9 28.1 38.2 24.3s28.1-20.9 24.3-38.2l-57.3-258 116.3 53.8c.5 .3 1.1 .5 1.6 .7c8.6 3.6 18 3.1 25.9-.7c3.4-1.6 6.6-3.9 9.3-6.7c3.1-3.2 5.5-7 7.1-11.4c.1-.3 .2-.7 .3-1l2.5-7.5c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L537 232.7l-15.3-36.8C504.5 154.8 464.3 128 419.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-24.4 10.9-44.6 29-58.1 51.6L157.3 136.9C144.7 131 130.9 128 117 128H64zM464 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM349.7 335.6l-25 62.4-59.4 59.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L372.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6z"
      },
      child: []
    }]
  })(e)
}

function u0(e) {
  return ln({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160 154.4c0-5.8 4.7-10.4 10.4-10.4h.2c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4h48c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3h.2c5.8 0 10.4 4.7 10.4 10.4V272c0 53-43 96-96 96s-96-43-96-96V154.4zM216 288a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm96-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"
      },
      child: []
    }]
  })(e)
}

function c4(e) {
  return ln({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M256 176a80 80 0 1 0 80 80 80.24 80.24 0 0 0-80-80zm172.72 80a165.53 165.53 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.56 176.56 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A174.58 174.58 0 0 1 83.28 256a165.53 165.53 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.56 176.56 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a174.58 174.58 0 0 1 1.64 22.66z"
      },
      child: []
    }]
  })(e)
}

function u4(e) {
  return ln({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24"
    },
    child: [{
      tag: "path",
      attr: {
        fill: "none",
        d: "M0 0h24v24H0z"
      },
      child: []
    }, {
      tag: "path",
      attr: {
        d: "M20 8h-2.81a5.985 5.985 0 0 0-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"
      },
      child: []
    }]
  })(e)
}

function d4(e) {
  return ln({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24"
    },
    child: [{
      tag: "path",
      attr: {
        fill: "none",
        d: "M0 0h24v24H0z"
      },
      child: []
    }, {
      tag: "path",
      attr: {
        d: "M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85zM18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85zm-2.77 4.43-1.41 1.41L18.17 16H5.83l1.58-1.59L6 13l-4 4 3.99 3.99 1.41-1.41L5.83 18h12.34l-1.58 1.58L18 20.99 22 17l-3.99-3.99z"
      },
      child: []
    }]
  })(e)
}

function f4(e) {
  return ln({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "currentColor"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-6 10a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -6a1 1 0 0 0 -1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0 -1 -1"
      },
      child: []
    }]
  })(e)
}
var p4 = e => {
    switch (e) {
      case "success":
        return v4;
      case "info":
        return y4;
      case "warning":
        return g4;
      case "error":
        return w4;
      default:
        return null
    }
  },
  m4 = Array(12).fill(0),
  h4 = ({
    visible: e
  }) => O.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
  }, O.createElement("div", {
    className: "sonner-spinner"
  }, m4.map((t, n) => O.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
  })))),
  v4 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, O.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })),
  g4 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, O.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })),
  y4 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })),
  w4 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })),
  x4 = () => {
    let [e, t] = O.useState(document.hidden);
    return O.useEffect(() => {
      let n = () => {
        t(document.hidden)
      };
      return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
    }, []), e
  },
  au = 1,
  b4 = class {
    constructor() {
      this.subscribe = e => (this.subscribers.push(e), () => {
        let t = this.subscribers.indexOf(e);
        this.subscribers.splice(t, 1)
      }), this.publish = e => {
        this.subscribers.forEach(t => t(e))
      }, this.addToast = e => {
        this.publish(e), this.toasts = [...this.toasts, e]
      }, this.create = e => {
        var t;
        let {
          message: n,
          ...r
        } = e, o = typeof(e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : au++, i = this.toasts.find(a => a.id === o), s = e.dismissible === void 0 ? !0 : e.dismissible;
        return i ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({
          ...a,
          ...e,
          id: o,
          title: n
        }), {
          ...a,
          ...e,
          id: o,
          dismissible: s,
          title: n
        }) : a) : this.addToast({
          title: n,
          ...r,
          dismissible: s,
          id: o
        }), o
      }, this.dismiss = e => (e || this.toasts.forEach(t => {
        this.subscribers.forEach(n => n({
          id: t.id,
          dismiss: !0
        }))
      }), this.subscribers.forEach(t => t({
        id: e,
        dismiss: !0
      })), e), this.message = (e, t) => this.create({
        ...t,
        message: e
      }), this.error = (e, t) => this.create({
        ...t,
        message: e,
        type: "error"
      }), this.success = (e, t) => this.create({
        ...t,
        type: "success",
        message: e
      }), this.info = (e, t) => this.create({
        ...t,
        type: "info",
        message: e
      }), this.warning = (e, t) => this.create({
        ...t,
        type: "warning",
        message: e
      }), this.loading = (e, t) => this.create({
        ...t,
        type: "loading",
        message: e
      }), this.promise = (e, t) => {
        if (!t) return;
        let n;
        t.loading !== void 0 && (n = this.create({
          ...t,
          promise: e,
          type: "loading",
          message: t.loading,
          description: typeof t.description != "function" ? t.description : void 0
        }));
        let r = e instanceof Promise ? e : e(),
          o = n !== void 0;
        return r.then(async i => {
          if (C4(i) && !i.ok) {
            o = !1;
            let s = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error,
              a = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
            this.create({
              id: n,
              type: "error",
              message: s,
              description: a
            })
          } else if (t.success !== void 0) {
            o = !1;
            let s = typeof t.success == "function" ? await t.success(i) : t.success,
              a = typeof t.description == "function" ? await t.description(i) : t.description;
            this.create({
              id: n,
              type: "success",
              message: s,
              description: a
            })
          }
        }).catch(async i => {
          if (t.error !== void 0) {
            o = !1;
            let s = typeof t.error == "function" ? await t.error(i) : t.error,
              a = typeof t.description == "function" ? await t.description(i) : t.description;
            this.create({
              id: n,
              type: "error",
              message: s,
              description: a
            })
          }
        }).finally(() => {
          var i;
          o && (this.dismiss(n), n = void 0), (i = t.finally) == null || i.call(t)
        }), n
      }, this.custom = (e, t) => {
        let n = (t == null ? void 0 : t.id) || au++;
        return this.create({
          jsx: e(n),
          id: n,
          ...t
        }), n
      }, this.subscribers = [], this.toasts = []
    }
  },
  Xe = new b4,
  S4 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || au++;
    return Xe.addToast({
      title: e,
      ...t,
      id: n
    }), n
  },
  C4 = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
  E4 = S4,
  k4 = () => Xe.toasts,
  N4 = Object.assign(E4, {
    success: Xe.success,
    info: Xe.info,
    warning: Xe.warning,
    error: Xe.error,
    custom: Xe.custom,
    message: Xe.message,
    promise: Xe.promise,
    dismiss: Xe.dismiss,
    loading: Xe.loading
  }, {
    getHistory: k4
  });

function P4(e, {
  insertAt: t
} = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
P4(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function ms(e) {
  return e.label !== void 0
}
var R4 = 3,
  $4 = "32px",
  M4 = 4e3,
  T4 = 356,
  _4 = 14,
  A4 = 20,
  O4 = 200;

function j4(...e) {
  return e.filter(Boolean).join(" ")
}
var D4 = e => {
  var t, n, r, o, i, s, a, l, u, d;
  let {
    invert: p,
    toast: f,
    unstyled: h,
    interacting: w,
    setHeights: g,
    visibleToasts: b,
    heights: v,
    index: y,
    toasts: x,
    expanded: S,
    removeToast: C,
    defaultRichColors: E,
    closeButton: k,
    style: N,
    cancelButtonStyle: T,
    actionButtonStyle: M,
    className: z = "",
    descriptionClassName: I = "",
    duration: Y,
    position: H,
    gap: Q,
    loadingIcon: K,
    expandByDefault: V,
    classNames: R,
    icons: $,
    closeButtonAriaLabel: L = "Close toast",
    pauseWhenPageIsHidden: j,
    cn: P
  } = e, [D, W] = O.useState(!1), [F, B] = O.useState(!1), [Z, G] = O.useState(!1), [ne, Ee] = O.useState(!1), [br, cn] = O.useState(0), [zt, Vn] = O.useState(0), Sr = O.useRef(null), Pt = O.useRef(null), Eo = y === 0, ko = y + 1 <= b, be = f.type, Hn = f.dismissible !== !1, sw = f.className || "", aw = f.descriptionClassName || "", Wi = O.useMemo(() => v.findIndex(q => q.toastId === f.id) || 0, [v, f.id]), lw = O.useMemo(() => {
    var q;
    return (q = f.closeButton) != null ? q : k
  }, [f.closeButton, k]), vf = O.useMemo(() => f.duration || Y || M4, [f.duration, Y]), sl = O.useRef(0), Cr = O.useRef(0), gf = O.useRef(0), Er = O.useRef(null), [yf, cw] = H.split("-"), wf = O.useMemo(() => v.reduce((q, se, oe) => oe >= Wi ? q : q + se.height, 0), [v, Wi]), xf = x4(), uw = f.invert || p, al = be === "loading";
  Cr.current = O.useMemo(() => Wi * Q + wf, [Wi, wf]), O.useEffect(() => {
    W(!0)
  }, []), O.useLayoutEffect(() => {
    if (!D) return;
    let q = Pt.current,
      se = q.style.height;
    q.style.height = "auto";
    let oe = q.getBoundingClientRect().height;
    q.style.height = se, Vn(oe), g(Rt => Rt.find($t => $t.toastId === f.id) ? Rt.map($t => $t.toastId === f.id ? {
      ...$t,
      height: oe
    } : $t) : [{
      toastId: f.id,
      height: oe,
      position: f.position
    }, ...Rt])
  }, [D, f.title, f.description, g, f.id]);
  let un = O.useCallback(() => {
    B(!0), cn(Cr.current), g(q => q.filter(se => se.toastId !== f.id)), setTimeout(() => {
      C(f)
    }, O4)
  }, [f, C, g, Cr]);
  O.useEffect(() => {
    if (f.promise && be === "loading" || f.duration === 1 / 0 || f.type === "loading") return;
    let q, se = vf;
    return S || w || j && xf ? (() => {
      if (gf.current < sl.current) {
        let oe = new Date().getTime() - sl.current;
        se = se - oe
      }
      gf.current = new Date().getTime()
    })() : se !== 1 / 0 && (sl.current = new Date().getTime(), q = setTimeout(() => {
      var oe;
      (oe = f.onAutoClose) == null || oe.call(f, f), un()
    }, se)), () => clearTimeout(q)
  }, [S, w, V, f, vf, un, f.promise, be, j, xf]), O.useEffect(() => {
    let q = Pt.current;
    if (q) {
      let se = q.getBoundingClientRect().height;
      return Vn(se), g(oe => [{
        toastId: f.id,
        height: se,
        position: f.position
      }, ...oe]), () => g(oe => oe.filter(Rt => Rt.toastId !== f.id))
    }
  }, [g, f.id]), O.useEffect(() => {
    f.delete && un()
  }, [un, f.delete]);

  function dw() {
    return $ != null && $.loading ? O.createElement("div", {
      className: "sonner-loader",
      "data-visible": be === "loading"
    }, $.loading) : K ? O.createElement("div", {
      className: "sonner-loader",
      "data-visible": be === "loading"
    }, K) : O.createElement(h4, {
      visible: be === "loading"
    })
  }
  return O.createElement("li", {
    "aria-live": f.important ? "assertive" : "polite",
    "aria-atomic": "true",
    role: "status",
    tabIndex: 0,
    ref: Pt,
    className: P(z, sw, R == null ? void 0 : R.toast, (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast, R == null ? void 0 : R.default, R == null ? void 0 : R[be], (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[be]),
    "data-sonner-toast": "",
    "data-rich-colors": (r = f.richColors) != null ? r : E,
    "data-styled": !(f.jsx || f.unstyled || h),
    "data-mounted": D,
    "data-promise": !!f.promise,
    "data-removed": F,
    "data-visible": ko,
    "data-y-position": yf,
    "data-x-position": cw,
    "data-index": y,
    "data-front": Eo,
    "data-swiping": Z,
    "data-dismissible": Hn,
    "data-type": be,
    "data-invert": uw,
    "data-swipe-out": ne,
    "data-expanded": !!(S || V && D),
    style: {
      "--index": y,
      "--toasts-before": y,
      "--z-index": x.length - y,
      "--offset": `${F?br:Cr.current}px`,
      "--initial-height": V ? "auto" : `${zt}px`,
      ...N,
      ...f.style
    },
    onPointerDown: q => {
      al || !Hn || (Sr.current = new Date, cn(Cr.current), q.target.setPointerCapture(q.pointerId), q.target.tagName !== "BUTTON" && (G(!0), Er.current = {
        x: q.clientX,
        y: q.clientY
      }))
    },
    onPointerUp: () => {
      var q, se, oe, Rt;
      if (ne || !Hn) return;
      Er.current = null;
      let $t = Number(((q = Pt.current) == null ? void 0 : q.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0),
        Vi = new Date().getTime() - ((se = Sr.current) == null ? void 0 : se.getTime()),
        fw = Math.abs($t) / Vi;
      if (Math.abs($t) >= A4 || fw > .11) {
        cn(Cr.current), (oe = f.onDismiss) == null || oe.call(f, f), un(), Ee(!0);
        return
      }(Rt = Pt.current) == null || Rt.style.setProperty("--swipe-amount", "0px"), G(!1)
    },
    onPointerMove: q => {
      var se;
      if (!Er.current || !Hn) return;
      let oe = q.clientY - Er.current.y,
        Rt = q.clientX - Er.current.x,
        $t = (yf === "top" ? Math.min : Math.max)(0, oe),
        Vi = q.pointerType === "touch" ? 10 : 2;
      Math.abs($t) > Vi ? (se = Pt.current) == null || se.style.setProperty("--swipe-amount", `${oe}px`) : Math.abs(Rt) > Vi && (Er.current = null)
    }
  }, lw && !f.jsx ? O.createElement("button", {
    "aria-label": L,
    "data-disabled": al,
    "data-close-button": !0,
    onClick: al || !Hn ? () => {} : () => {
      var q;
      un(), (q = f.onDismiss) == null || q.call(f, f)
    },
    className: P(R == null ? void 0 : R.closeButton, (o = f == null ? void 0 : f.classNames) == null ? void 0 : o.closeButton)
  }, O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, O.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), O.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))) : null, f.jsx || O.isValidElement(f.title) ? f.jsx || f.title : O.createElement(O.Fragment, null, be || f.icon || f.promise ? O.createElement("div", {
    "data-icon": "",
    className: P(R == null ? void 0 : R.icon, (i = f == null ? void 0 : f.classNames) == null ? void 0 : i.icon)
  }, f.promise || f.type === "loading" && !f.icon ? f.icon || dw() : null, f.type !== "loading" ? f.icon || ($ == null ? void 0 : $[be]) || p4(be) : null) : null, O.createElement("div", {
    "data-content": "",
    className: P(R == null ? void 0 : R.content, (s = f == null ? void 0 : f.classNames) == null ? void 0 : s.content)
  }, O.createElement("div", {
    "data-title": "",
    className: P(R == null ? void 0 : R.title, (a = f == null ? void 0 : f.classNames) == null ? void 0 : a.title)
  }, f.title), f.description ? O.createElement("div", {
    "data-description": "",
    className: P(I, aw, R == null ? void 0 : R.description, (l = f == null ? void 0 : f.classNames) == null ? void 0 : l.description)
  }, f.description) : null), O.isValidElement(f.cancel) ? f.cancel : f.cancel && ms(f.cancel) ? O.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: f.cancelButtonStyle || T,
    onClick: q => {
      var se, oe;
      ms(f.cancel) && Hn && ((oe = (se = f.cancel).onClick) == null || oe.call(se, q), un())
    },
    className: P(R == null ? void 0 : R.cancelButton, (u = f == null ? void 0 : f.classNames) == null ? void 0 : u.cancelButton)
  }, f.cancel.label) : null, O.isValidElement(f.action) ? f.action : f.action && ms(f.action) ? O.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: f.actionButtonStyle || M,
    onClick: q => {
      var se, oe;
      ms(f.action) && (q.defaultPrevented || ((oe = (se = f.action).onClick) == null || oe.call(se, q), un()))
    },
    className: P(R == null ? void 0 : R.actionButton, (d = f == null ? void 0 : f.classNames) == null ? void 0 : d.actionButton)
  }, f.action.label) : null))
};

function am() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var I4 = e => {
    let {
      invert: t,
      position: n = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: o,
      closeButton: i,
      className: s,
      offset: a,
      theme: l = "light",
      richColors: u,
      duration: d,
      style: p,
      visibleToasts: f = R4,
      toastOptions: h,
      dir: w = am(),
      gap: g = _4,
      loadingIcon: b,
      icons: v,
      containerAriaLabel: y = "Notifications",
      pauseWhenPageIsHidden: x,
      cn: S = j4
    } = e, [C, E] = O.useState([]), k = O.useMemo(() => Array.from(new Set([n].concat(C.filter(j => j.position).map(j => j.position)))), [C, n]), [N, T] = O.useState([]), [M, z] = O.useState(!1), [I, Y] = O.useState(!1), [H, Q] = O.useState(l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), K = O.useRef(null), V = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), R = O.useRef(null), $ = O.useRef(!1), L = O.useCallback(j => {
      var P;
      (P = C.find(D => D.id === j.id)) != null && P.delete || Xe.dismiss(j.id), E(D => D.filter(({
        id: W
      }) => W !== j.id))
    }, [C]);
    return O.useEffect(() => Xe.subscribe(j => {
      if (j.dismiss) {
        E(P => P.map(D => D.id === j.id ? {
          ...D,
          delete: !0
        } : D));
        return
      }
      setTimeout(() => {
        Da.flushSync(() => {
          E(P => {
            let D = P.findIndex(W => W.id === j.id);
            return D !== -1 ? [...P.slice(0, D), {
              ...P[D],
              ...j
            }, ...P.slice(D + 1)] : [j, ...P]
          })
        })
      })
    }), []), O.useEffect(() => {
      if (l !== "system") {
        Q(l);
        return
      }
      l === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Q("dark") : Q("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({
        matches: j
      }) => {
        Q(j ? "dark" : "light")
      })
    }, [l]), O.useEffect(() => {
      C.length <= 1 && z(!1)
    }, [C]), O.useEffect(() => {
      let j = P => {
        var D, W;
        r.every(F => P[F] || P.code === F) && (z(!0), (D = K.current) == null || D.focus()), P.code === "Escape" && (document.activeElement === K.current || (W = K.current) != null && W.contains(document.activeElement)) && z(!1)
      };
      return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j)
    }, [r]), O.useEffect(() => {
      if (K.current) return () => {
        R.current && (R.current.focus({
          preventScroll: !0
        }), R.current = null, $.current = !1)
      }
    }, [K.current]), C.length ? O.createElement("section", {
      "aria-label": `${y} ${V}`,
      tabIndex: -1
    }, k.map((j, P) => {
      var D;
      let [W, F] = j.split("-");
      return O.createElement("ol", {
        key: j,
        dir: w === "auto" ? am() : w,
        tabIndex: -1,
        ref: K,
        className: s,
        "data-sonner-toaster": !0,
        "data-theme": H,
        "data-y-position": W,
        "data-x-position": F,
        style: {
          "--front-toast-height": `${((D=N[0])==null?void 0:D.height)||0}px`,
          "--offset": typeof a == "number" ? `${a}px` : a || $4,
          "--width": `${T4}px`,
          "--gap": `${g}px`,
          ...p
        },
        onBlur: B => {
          $.current && !B.currentTarget.contains(B.relatedTarget) && ($.current = !1, R.current && (R.current.focus({
            preventScroll: !0
          }), R.current = null))
        },
        onFocus: B => {
          B.target instanceof HTMLElement && B.target.dataset.dismissible === "false" || $.current || ($.current = !0, R.current = B.relatedTarget)
        },
        onMouseEnter: () => z(!0),
        onMouseMove: () => z(!0),
        onMouseLeave: () => {
          I || z(!1)
        },
        onPointerDown: B => {
          B.target instanceof HTMLElement && B.target.dataset.dismissible === "false" || Y(!0)
        },
        onPointerUp: () => Y(!1)
      }, C.filter(B => !B.position && P === 0 || B.position === j).map((B, Z) => {
        var G, ne;
        return O.createElement(D4, {
          key: B.id,
          icons: v,
          index: Z,
          toast: B,
          defaultRichColors: u,
          duration: (G = h == null ? void 0 : h.duration) != null ? G : d,
          className: h == null ? void 0 : h.className,
          descriptionClassName: h == null ? void 0 : h.descriptionClassName,
          invert: t,
          visibleToasts: f,
          closeButton: (ne = h == null ? void 0 : h.closeButton) != null ? ne : i,
          interacting: I,
          position: j,
          style: h == null ? void 0 : h.style,
          unstyled: h == null ? void 0 : h.unstyled,
          classNames: h == null ? void 0 : h.classNames,
          cancelButtonStyle: h == null ? void 0 : h.cancelButtonStyle,
          actionButtonStyle: h == null ? void 0 : h.actionButtonStyle,
          removeToast: L,
          toasts: C.filter(Ee => Ee.position == B.position),
          heights: N.filter(Ee => Ee.position == B.position),
          setHeights: T,
          expandByDefault: o,
          gap: g,
          loadingIcon: b,
          expanded: M,
          pauseWhenPageIsHidden: x,
          cn: S
        })
      }))
    })) : null
  },
  Vd = {
    exports: {}
  };

function d0(e, t = 100, n = {}) {
  if (typeof e != "function") throw new TypeError(`Expected the first parameter to be a function, got \`${typeof e}\`.`);
  if (t < 0) throw new RangeError("`wait` must not be negative.");
  const {
    immediate: r
  } = typeof n == "boolean" ? {
    immediate: n
  } : n;
  let o, i, s, a, l;

  function u() {
    const f = o,
      h = i;
    return o = void 0, i = void 0, l = e.apply(f, h), l
  }

  function d() {
    const f = Date.now() - a;
    f < t && f >= 0 ? s = setTimeout(d, t - f) : (s = void 0, r || (l = u()))
  }
  const p = function(...f) {
    if (o && this !== o) throw new Error("Debounced method called with different contexts.");
    o = this, i = f, a = Date.now();
    const h = r && !s;
    return s || (s = setTimeout(d, t)), h && (l = u()), l
  };
  return p.clear = () => {
    s && (clearTimeout(s), s = void 0)
  }, p.flush = () => {
    s && p.trigger()
  }, p.trigger = () => {
    l = u(), p.clear()
  }, p
}
Vd.exports.debounce = d0;
Vd.exports = d0;
var L4 = Vd.exports;
const F4 = bu(L4),
  lu = () => !window.invokeNative,
  z4 = () => {},
  Bt = (e, t) => {
    const n = c.useRef(z4);
    c.useEffect(() => {
      n.current = t
    }, [t]), c.useEffect(() => {
      const r = o => {
        const {
          action: i,
          data: s
        } = o.data;
        n.current && i === e && n.current(s)
      };
      return window.addEventListener("message", r), () => window.removeEventListener("message", r)
    }, [e])
  };
async function Yt(e, t, n) {
  const r = {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(t)
  };
  if (lu() && n) return n;
  const o = window.GetParentResourceName ? window.GetParentResourceName() : "nui-frame-app";
  return await (await fetch(`https://${o}/${e}`, r)).json()
}

function X(e, t, {
  checkForDefaultPrevented: n = !0
} = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
  }
}

function B4(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function Ya(...e) {
  return t => e.forEach(n => B4(n, t))
}

function we(...e) {
  return c.useCallback(Ya(...e), e)
}

function U4(e, t) {
  const n = c.createContext(t);

  function r(i) {
    const {
      children: s,
      ...a
    } = i, l = c.useMemo(() => a, Object.values(a));
    return m.jsx(n.Provider, {
      value: l,
      children: s
    })
  }

  function o(i) {
    const s = c.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``)
  }
  return r.displayName = e + "Provider", [r, o]
}

function Un(e, t = []) {
  let n = [];

  function r(i, s) {
    const a = c.createContext(s),
      l = n.length;
    n = [...n, s];

    function u(p) {
      const {
        scope: f,
        children: h,
        ...w
      } = p, g = (f == null ? void 0 : f[e][l]) || a, b = c.useMemo(() => w, Object.values(w));
      return m.jsx(g.Provider, {
        value: b,
        children: h
      })
    }

    function d(p, f) {
      const h = (f == null ? void 0 : f[e][l]) || a,
        w = c.useContext(h);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${i}\``)
    }
    return u.displayName = i + "Provider", [u, d]
  }
  const o = () => {
    const i = n.map(s => c.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return c.useMemo(() => ({
        [`__scope${e}`]: {
          ...a,
          [e]: l
        }
      }), [a, l])
    }
  };
  return o.scopeName = e, [r, W4(o, ...t)]
}

function W4(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(o => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, {
        useScope: l,
        scopeName: u
      }) => {
        const p = l(i)[`__scope${u}`];
        return {
          ...a,
          ...p
        }
      }, {});
      return c.useMemo(() => ({
        [`__scope${t.scopeName}`]: s
      }), [s])
    }
  };
  return n.scopeName = t.scopeName, n
}
var dr = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {},
  V4 = Km.useId || (() => {}),
  H4 = 0;

function rr(e) {
  const [t, n] = c.useState(V4());
  return dr(() => {
    n(r => r ?? String(H4++))
  }, [e]), t ? `radix-${t}` : ""
}

function Et(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e
  }), c.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n)
  }, [])
}

function Ii({
  prop: e,
  defaultProp: t,
  onChange: n = () => {}
}) {
  const [r, o] = K4({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, s = i ? e : r, a = Et(n), l = c.useCallback(u => {
    if (i) {
      const p = typeof u == "function" ? u(e) : u;
      p !== e && a(p)
    } else o(u)
  }, [i, e, o, a]);
  return [s, l]
}

function K4({
  defaultProp: e,
  onChange: t
}) {
  const n = c.useState(e),
    [r] = n,
    o = c.useRef(r),
    i = Et(t);
  return c.useEffect(() => {
    o.current !== r && (i(r), o.current = r)
  }, [r, o, i]), n
}
var jn = c.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e, o = c.Children.toArray(n), i = o.find(Y4);
  if (i) {
    const s = i.props.children,
      a = o.map(l => l === i ? c.Children.count(s) > 1 ? c.Children.only(null) : c.isValidElement(s) ? s.props.children : null : l);
    return m.jsx(cu, {
      ...r,
      ref: t,
      children: c.isValidElement(s) ? c.cloneElement(s, void 0, a) : null
    })
  }
  return m.jsx(cu, {
    ...r,
    ref: t,
    children: n
  })
});
jn.displayName = "Slot";
var cu = c.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e;
  if (c.isValidElement(n)) {
    const o = Q4(n);
    return c.cloneElement(n, {
      ...X4(r, n.props),
      ref: t ? Ya(t, o) : o
    })
  }
  return c.Children.count(n) > 1 ? c.Children.only(null) : null
});
cu.displayName = "SlotClone";
var G4 = ({
  children: e
}) => m.jsx(m.Fragment, {
  children: e
});

function Y4(e) {
  return c.isValidElement(e) && e.type === G4
}

function X4(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      i(...a), o(...a)
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...i
    } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
  }
  return {
    ...e,
    ...n
  }
}

function Q4(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Z4 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
  fe = Z4.reduce((e, t) => {
    const n = c.forwardRef((r, o) => {
      const {
        asChild: i,
        ...s
      } = r, a = i ? jn : t;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), m.jsx(a, {
        ...s,
        ref: o
      })
    });
    return n.displayName = `Primitive.${t}`, {
      ...e,
      [t]: n
    }
  }, {});

function f0(e, t) {
  e && Bn.flushSync(() => e.dispatchEvent(t))
}

function q4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Et(e);
  c.useEffect(() => {
    const r = o => {
      o.key === "Escape" && n(o)
    };
    return t.addEventListener("keydown", r, {
      capture: !0
    }), () => t.removeEventListener("keydown", r, {
      capture: !0
    })
  }, [n, t])
}
var J4 = "DismissableLayer",
  uu = "dismissableLayer.update",
  e3 = "dismissableLayer.pointerDownOutside",
  t3 = "dismissableLayer.focusOutside",
  lm, p0 = c.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
  }),
  Xa = c.forwardRef((e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, u = c.useContext(p0), [d, p] = c.useState(null), f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = c.useState({}), w = we(t, k => p(k)), g = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(b), y = d ? g.indexOf(d) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= v, C = o3(k => {
      const N = k.target,
        T = [...u.branches].some(M => M.contains(N));
      !S || T || (o == null || o(k), s == null || s(k), k.defaultPrevented || a == null || a())
    }, f), E = i3(k => {
      const N = k.target;
      [...u.branches].some(M => M.contains(N)) || (i == null || i(k), s == null || s(k), k.defaultPrevented || a == null || a())
    }, f);
    return q4(k => {
      y === u.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && a && (k.preventDefault(), a()))
    }, f), c.useEffect(() => {
      if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (lm = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), cm(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = lm)
      }
    }, [d, f, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), cm())
    }, [d, u]), c.useEffect(() => {
      const k = () => h({});
      return document.addEventListener(uu, k), () => document.removeEventListener(uu, k)
    }, []), m.jsx(fe.div, {
      ...l,
      ref: w,
      style: {
        pointerEvents: x ? S ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: X(e.onFocusCapture, E.onFocusCapture),
      onBlurCapture: X(e.onBlurCapture, E.onBlurCapture),
      onPointerDownCapture: X(e.onPointerDownCapture, C.onPointerDownCapture)
    })
  });
Xa.displayName = J4;
var n3 = "DismissableLayerBranch",
  r3 = c.forwardRef((e, t) => {
    const n = c.useContext(p0),
      r = c.useRef(null),
      o = we(t, r);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return n.branches.add(i), () => {
        n.branches.delete(i)
      }
    }, [n.branches]), m.jsx(fe.div, {
      ...e,
      ref: o
    })
  });
r3.displayName = n3;

function o3(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Et(e),
    r = c.useRef(!1),
    o = c.useRef(() => {});
  return c.useEffect(() => {
    const i = a => {
        if (a.target && !r.current) {
          let l = function() {
            m0(e3, n, u, {
              discrete: !0
            })
          };
          const u = {
            originalEvent: a
          };
          a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
            once: !0
          })) : l()
        } else t.removeEventListener("click", o.current);
        r.current = !1
      },
      s = window.setTimeout(() => {
        t.addEventListener("pointerdown", i)
      }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
    }
  }, [t, n]), {
    onPointerDownCapture: () => r.current = !0
  }
}

function i3(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Et(e),
    r = c.useRef(!1);
  return c.useEffect(() => {
    const o = i => {
      i.target && !r.current && m0(t3, n, {
        originalEvent: i
      }, {
        discrete: !1
      })
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  }
}

function cm() {
  const e = new CustomEvent(uu);
  document.dispatchEvent(e)
}

function m0(e, t, n, {
  discrete: r
}) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? f0(o, i) : o.dispatchEvent(i)
}
var Kl = "focusScope.autoFocusOnMount",
  Gl = "focusScope.autoFocusOnUnmount",
  um = {
    bubbles: !1,
    cancelable: !0
  },
  s3 = "FocusScope",
  Qa = c.forwardRef((e, t) => {
    const {
      loop: n = !1,
      trapped: r = !1,
      onMountAutoFocus: o,
      onUnmountAutoFocus: i,
      ...s
    } = e, [a, l] = c.useState(null), u = Et(o), d = Et(i), p = c.useRef(null), f = we(t, g => l(g)), h = c.useRef({
      paused: !1,
      pause() {
        this.paused = !0
      },
      resume() {
        this.paused = !1
      }
    }).current;
    c.useEffect(() => {
      if (r) {
        let g = function(x) {
            if (h.paused || !a) return;
            const S = x.target;
            a.contains(S) ? p.current = S : mn(p.current, {
              select: !0
            })
          },
          b = function(x) {
            if (h.paused || !a) return;
            const S = x.relatedTarget;
            S !== null && (a.contains(S) || mn(p.current, {
              select: !0
            }))
          },
          v = function(x) {
            if (document.activeElement === document.body)
              for (const C of x) C.removedNodes.length > 0 && mn(a)
          };
        document.addEventListener("focusin", g), document.addEventListener("focusout", b);
        const y = new MutationObserver(v);
        return a && y.observe(a, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener("focusin", g), document.removeEventListener("focusout", b), y.disconnect()
        }
      }
    }, [r, a, h.paused]), c.useEffect(() => {
      if (a) {
        fm.add(h);
        const g = document.activeElement;
        if (!a.contains(g)) {
          const v = new CustomEvent(Kl, um);
          a.addEventListener(Kl, u), a.dispatchEvent(v), v.defaultPrevented || (a3(f3(h0(a)), {
            select: !0
          }), document.activeElement === g && mn(a))
        }
        return () => {
          a.removeEventListener(Kl, u), setTimeout(() => {
            const v = new CustomEvent(Gl, um);
            a.addEventListener(Gl, d), a.dispatchEvent(v), v.defaultPrevented || mn(g ?? document.body, {
              select: !0
            }), a.removeEventListener(Gl, d), fm.remove(h)
          }, 0)
        }
      }
    }, [a, u, d, h]);
    const w = c.useCallback(g => {
      if (!n && !r || h.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey,
        v = document.activeElement;
      if (b && v) {
        const y = g.currentTarget,
          [x, S] = l3(y);
        x && S ? !g.shiftKey && v === S ? (g.preventDefault(), n && mn(x, {
          select: !0
        })) : g.shiftKey && v === x && (g.preventDefault(), n && mn(S, {
          select: !0
        })) : v === y && g.preventDefault()
      }
    }, [n, r, h.paused]);
    return m.jsx(fe.div, {
      tabIndex: -1,
      ...s,
      ref: f,
      onKeyDown: w
    })
  });
Qa.displayName = s3;

function a3(e, {
  select: t = !1
} = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (mn(r, {
        select: t
      }), document.activeElement !== n) return
}

function l3(e) {
  const t = h0(e),
    n = dm(t, e),
    r = dm(t.reverse(), e);
  return [n, r]
}

function h0(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t
}

function dm(e, t) {
  for (const n of e)
    if (!c3(n, {
        upTo: t
      })) return n
}

function c3(e, {
  upTo: t
}) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement
  }
  return !1
}

function u3(e) {
  return e instanceof HTMLInputElement && "select" in e
}

function mn(e, {
  select: t = !1
} = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && u3(e) && t && e.select()
  }
}
var fm = d3();

function d3() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = pm(e, t), e.unshift(t)
    },
    remove(t) {
      var n;
      e = pm(e, t), (n = e[0]) == null || n.resume()
    }
  }
}

function pm(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n
}

function f3(e) {
  return e.filter(t => t.tagName !== "A")
}
var p3 = "Portal",
  Za = c.forwardRef((e, t) => {
    var a;
    const {
      container: n,
      ...r
    } = e, [o, i] = c.useState(!1);
    dr(() => i(!0), []);
    const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return s ? Da.createPortal(m.jsx(fe.div, {
      ...r,
      ref: t
    }), s) : null
  });
Za.displayName = p3;

function m3(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e)
}
var kt = e => {
  const {
    present: t,
    children: n
  } = e, r = h3(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : c.Children.only(n), i = we(r.ref, v3(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, {
    ref: i
  }) : null
};
kt.displayName = "Presence";

function h3(e) {
  const [t, n] = c.useState(), r = c.useRef({}), o = c.useRef(e), i = c.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = m3(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = hs(r.current);
    i.current = a === "mounted" ? u : "none"
  }, [a]), dr(() => {
    const u = r.current,
      d = o.current;
    if (d !== e) {
      const f = i.current,
        h = hs(u);
      e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && f !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
    }
  }, [e, l]), dr(() => {
    if (t) {
      const u = p => {
          const h = hs(r.current).includes(p.animationName);
          p.target === t && h && Bn.flushSync(() => l("ANIMATION_END"))
        },
        d = p => {
          p.target === t && (i.current = hs(r.current))
        };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u)
      }
    } else l("ANIMATION_END")
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: c.useCallback(u => {
      u && (r.current = getComputedStyle(u)), n(u)
    }, [])
  }
}

function hs(e) {
  return (e == null ? void 0 : e.animationName) || "none"
}

function v3(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Yl = 0;

function Hd() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? mm()), document.body.insertAdjacentElement("beforeend", e[1] ?? mm()), Yl++, () => {
      Yl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Yl--
    }
  }, [])
}

function mm() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
}
var g3 = function(e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
  },
  Tr = new WeakMap,
  vs = new WeakMap,
  gs = {},
  Xl = 0,
  v0 = function(e) {
    return e && (e.host || v0(e.parentNode))
  },
  y3 = function(e, t) {
    return t.map(function(n) {
      if (e.contains(n)) return n;
      var r = v0(n);
      return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
    }).filter(function(n) {
      return !!n
    })
  },
  w3 = function(e, t, n, r) {
    var o = y3(t, Array.isArray(e) ? e : [e]);
    gs[n] || (gs[n] = new WeakMap);
    var i = gs[n],
      s = [],
      a = new Set,
      l = new Set(o),
      u = function(p) {
        !p || a.has(p) || (a.add(p), u(p.parentNode))
      };
    o.forEach(u);
    var d = function(p) {
      !p || l.has(p) || Array.prototype.forEach.call(p.children, function(f) {
        if (a.has(f)) d(f);
        else try {
          var h = f.getAttribute(r),
            w = h !== null && h !== "false",
            g = (Tr.get(f) || 0) + 1,
            b = (i.get(f) || 0) + 1;
          Tr.set(f, g), i.set(f, b), s.push(f), g === 1 && w && vs.set(f, !0), b === 1 && f.setAttribute(n, "true"), w || f.setAttribute(r, "true")
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", f, v)
        }
      })
    };
    return d(t), a.clear(), Xl++,
      function() {
        s.forEach(function(p) {
          var f = Tr.get(p) - 1,
            h = i.get(p) - 1;
          Tr.set(p, f), i.set(p, h), f || (vs.has(p) || p.removeAttribute(r), vs.delete(p)), h || p.removeAttribute(n)
        }), Xl--, Xl || (Tr = new WeakMap, Tr = new WeakMap, vs = new WeakMap, gs = {})
      }
  },
  qa = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = g3(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), w3(r, o, n, "aria-hidden")) : function() {
      return null
    }
  },
  Kd = "Dialog",
  [g0, mR] = Un(Kd),
  [x3, Nt] = g0(Kd),
  y0 = e => {
    const {
      __scopeDialog: t,
      children: n,
      open: r,
      defaultOpen: o,
      onOpenChange: i,
      modal: s = !0
    } = e, a = c.useRef(null), l = c.useRef(null), [u = !1, d] = Ii({
      prop: r,
      defaultProp: o,
      onChange: i
    });
    return m.jsx(x3, {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: rr(),
      titleId: rr(),
      descriptionId: rr(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d(p => !p), [d]),
      modal: s,
      children: n
    })
  };
y0.displayName = Kd;
var w0 = "DialogTrigger",
  b3 = c.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, o = Nt(w0, n), i = we(t, o.triggerRef);
    return m.jsx(fe.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Xd(o.open),
      ...r,
      ref: i,
      onClick: X(e.onClick, o.onOpenToggle)
    })
  });
b3.displayName = w0;
var Gd = "DialogPortal",
  [S3, x0] = g0(Gd, {
    forceMount: void 0
  }),
  b0 = e => {
    const {
      __scopeDialog: t,
      forceMount: n,
      children: r,
      container: o
    } = e, i = Nt(Gd, t);
    return m.jsx(S3, {
      scope: t,
      forceMount: n,
      children: c.Children.map(r, s => m.jsx(kt, {
        present: n || i.open,
        children: m.jsx(Za, {
          asChild: !0,
          container: o,
          children: s
        })
      }))
    })
  };
b0.displayName = Gd;
var fa = "DialogOverlay",
  S0 = c.forwardRef((e, t) => {
    const n = x0(fa, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = Nt(fa, e.__scopeDialog);
    return i.modal ? m.jsx(kt, {
      present: r || i.open,
      children: m.jsx(C3, {
        ...o,
        ref: t
      })
    }) : null
  });
S0.displayName = fa;
var C3 = c.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, o = Nt(fa, n);
    return m.jsx(Ri, {
      as: jn,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: m.jsx(fe.div, {
        "data-state": Xd(o.open),
        ...r,
        ref: t,
        style: {
          pointerEvents: "auto",
          ...r.style
        }
      })
    })
  }),
  fr = "DialogContent",
  C0 = c.forwardRef((e, t) => {
    const n = x0(fr, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = Nt(fr, e.__scopeDialog);
    return m.jsx(kt, {
      present: r || i.open,
      children: i.modal ? m.jsx(E3, {
        ...o,
        ref: t
      }) : m.jsx(k3, {
        ...o,
        ref: t
      })
    })
  });
C0.displayName = fr;
var E3 = c.forwardRef((e, t) => {
    const n = Nt(fr, e.__scopeDialog),
      r = c.useRef(null),
      o = we(t, n.contentRef, r);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return qa(i)
    }, []), m.jsx(E0, {
      ...e,
      ref: o,
      trapFocus: n.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: X(e.onCloseAutoFocus, i => {
        var s;
        i.preventDefault(), (s = n.triggerRef.current) == null || s.focus()
      }),
      onPointerDownOutside: X(e.onPointerDownOutside, i => {
        const s = i.detail.originalEvent,
          a = s.button === 0 && s.ctrlKey === !0;
        (s.button === 2 || a) && i.preventDefault()
      }),
      onFocusOutside: X(e.onFocusOutside, i => i.preventDefault())
    })
  }),
  k3 = c.forwardRef((e, t) => {
    const n = Nt(fr, e.__scopeDialog),
      r = c.useRef(!1),
      o = c.useRef(!1);
    return m.jsx(E0, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: i => {
        var s, a;
        (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1
      },
      onInteractOutside: i => {
        var l, u;
        (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const s = i.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault()
      }
    })
  }),
  E0 = c.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      ...s
    } = e, a = Nt(fr, n), l = c.useRef(null), u = we(t, l);
    return Hd(), m.jsxs(m.Fragment, {
      children: [m.jsx(Qa, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: m.jsx(Xa, {
          role: "dialog",
          id: a.contentId,
          "aria-describedby": a.descriptionId,
          "aria-labelledby": a.titleId,
          "data-state": Xd(a.open),
          ...s,
          ref: u,
          onDismiss: () => a.onOpenChange(!1)
        })
      }), m.jsxs(m.Fragment, {
        children: [m.jsx(N3, {
          titleId: a.titleId
        }), m.jsx(R3, {
          contentRef: l,
          descriptionId: a.descriptionId
        })]
      })]
    })
  }),
  Yd = "DialogTitle",
  k0 = c.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, o = Nt(Yd, n);
    return m.jsx(fe.h2, {
      id: o.titleId,
      ...r,
      ref: t
    })
  });
k0.displayName = Yd;
var N0 = "DialogDescription",
  P0 = c.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, o = Nt(N0, n);
    return m.jsx(fe.p, {
      id: o.descriptionId,
      ...r,
      ref: t
    })
  });
P0.displayName = N0;
var R0 = "DialogClose",
  $0 = c.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, o = Nt(R0, n);
    return m.jsx(fe.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: X(e.onClick, () => o.onOpenChange(!1))
    })
  });
$0.displayName = R0;

function Xd(e) {
  return e ? "open" : "closed"
}
var M0 = "DialogTitleWarning",
  [hR, T0] = U4(M0, {
    contentName: fr,
    titleName: Yd,
    docsSlug: "dialog"
  }),
  N3 = ({
    titleId: e
  }) => {
    const t = T0(M0),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return c.useEffect(() => {
      e && (document.getElementById(e) || console.error(n))
    }, [n, e]), null
  },
  P3 = "DialogDescriptionWarning",
  R3 = ({
    contentRef: e,
    descriptionId: t
  }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${T0(P3).contentName}}.`;
    return c.useEffect(() => {
      var i;
      const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
      t && o && (document.getElementById(t) || console.warn(r))
    }, [r, e, t]), null
  },
  $3 = y0,
  M3 = b0,
  _0 = S0,
  A0 = C0,
  O0 = k0,
  j0 = P0,
  T3 = $0;
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _3 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  D0 = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var A3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O3 = c.forwardRef(({
  color: e = "currentColor",
  size: t = 24,
  strokeWidth: n = 2,
  absoluteStrokeWidth: r,
  className: o = "",
  children: i,
  iconNode: s,
  ...a
}, l) => c.createElement("svg", {
  ref: l,
  ...A3,
  width: t,
  height: t,
  stroke: e,
  strokeWidth: r ? Number(n) * 24 / Number(t) : n,
  className: D0("lucide", o),
  ...a
}, [...s.map(([u, d]) => c.createElement(u, d)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = (e, t) => {
  const n = c.forwardRef(({
    className: r,
    ...o
  }, i) => c.createElement(O3, {
    ref: i,
    iconNode: t,
    className: D0(`lucide-${_3(e)}`, r),
    ...o
  }));
  return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qd = So("Check", [
  ["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
  }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j3 = So("ChevronRight", [
  ["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
  }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D3 = So("ChevronsUpDown", [
  ["path", {
    d: "m7 15 5 5 5-5",
    key: "1hf1tw"
  }],
  ["path", {
    d: "m7 9 5-5 5 5",
    key: "sgt6xg"
  }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I3 = So("Circle", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L3 = So("Search", [
  ["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
  }],
  ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
  }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F3 = So("X", [
    ["path", {
      d: "M18 6 6 18",
      key: "1bl5f8"
    }],
    ["path", {
      d: "m6 6 12 12",
      key: "d8bk6v"
    }]
  ]),
  Zd = "-",
  z3 = e => {
    const t = U3(e),
      {
        conflictingClassGroups: n,
        conflictingClassGroupModifiers: r
      } = e;
    return {
      getClassGroupId: s => {
        const a = s.split(Zd);
        return a[0] === "" && a.length !== 1 && a.shift(), I0(a, t) || B3(s)
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l
      }
    }
  },
  I0 = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? I0(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Zd);
    return (s = t.validators.find(({
      validator: a
    }) => a(i))) == null ? void 0 : s.classGroupId
  },
  hm = /^\[(.+)\]$/,
  B3 = e => {
    if (hm.test(e)) {
      const t = hm.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n
    }
  },
  U3 = e => {
    const {
      theme: t,
      prefix: n
    } = e, r = {
      nextPart: new Map,
      validators: []
    };
    return V3(Object.entries(e.classGroups), n).forEach(([i, s]) => {
      du(s, r, i, t)
    }), r
  },
  du = (e, t, n, r) => {
    e.forEach(o => {
      if (typeof o == "string") {
        const i = o === "" ? t : vm(t, o);
        i.classGroupId = n;
        return
      }
      if (typeof o == "function") {
        if (W3(o)) {
          du(o(r), t, n, r);
          return
        }
        t.validators.push({
          validator: o,
          classGroupId: n
        });
        return
      }
      Object.entries(o).forEach(([i, s]) => {
        du(s, vm(t, i), n, r)
      })
    })
  },
  vm = (e, t) => {
    let n = e;
    return t.split(Zd).forEach(r => {
      n.nextPart.has(r) || n.nextPart.set(r, {
        nextPart: new Map,
        validators: []
      }), n = n.nextPart.get(r)
    }), n
  },
  W3 = e => e.isThemeGetter,
  V3 = (e, t) => t ? e.map(([n, r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
    return [n, o]
  }) : e,
  H3 = e => {
    if (e < 1) return {
      get: () => {},
      set: () => {}
    };
    let t = 0,
      n = new Map,
      r = new Map;
    const o = (i, s) => {
      n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map)
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s)
      }
    }
  },
  L0 = "!",
  K3 = e => {
    const {
      separator: t,
      experimentalParseClassName: n
    } = e, r = t.length === 1, o = t[0], i = t.length, s = a => {
      const l = [];
      let u = 0,
        d = 0,
        p;
      for (let b = 0; b < a.length; b++) {
        let v = a[b];
        if (u === 0) {
          if (v === o && (r || a.slice(b, b + i) === t)) {
            l.push(a.slice(d, b)), d = b + i;
            continue
          }
          if (v === "/") {
            p = b;
            continue
          }
        }
        v === "[" ? u++ : v === "]" && u--
      }
      const f = l.length === 0 ? a : a.substring(d),
        h = f.startsWith(L0),
        w = h ? f.substring(1) : f,
        g = p && p > d ? p - d : void 0;
      return {
        modifiers: l,
        hasImportantModifier: h,
        baseClassName: w,
        maybePostfixModifierPosition: g
      }
    };
    return n ? a => n({
      className: a,
      parseClassName: s
    }) : s
  },
  G3 = e => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
      r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
    }), t.push(...n.sort()), t
  },
  Y3 = e => ({
    cache: H3(e.cacheSize),
    parseClassName: K3(e),
    ...z3(e)
  }),
  X3 = /\s+/,
  Q3 = (e, t) => {
    const {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o
    } = t, i = [], s = e.trim().split(X3);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: d,
          hasImportantModifier: p,
          baseClassName: f,
          maybePostfixModifierPosition: h
        } = n(u);
      let w = !!h,
        g = r(w ? f.substring(0, h) : f);
      if (!g) {
        if (!w) {
          a = u + (a.length > 0 ? " " + a : a);
          continue
        }
        if (g = r(f), !g) {
          a = u + (a.length > 0 ? " " + a : a);
          continue
        }
        w = !1
      }
      const b = G3(d).join(":"),
        v = p ? b + L0 : b,
        y = v + g;
      if (i.includes(y)) continue;
      i.push(y);
      const x = o(g, w);
      for (let S = 0; S < x.length; ++S) {
        const C = x[S];
        i.push(v + C)
      }
      a = u + (a.length > 0 ? " " + a : a)
    }
    return a
  };

function Z3() {
  let e = 0,
    t, n, r = "";
  for (; e < arguments.length;)(t = arguments[e++]) && (n = F0(t)) && (r && (r += " "), r += n);
  return r
}
const F0 = e => {
  if (typeof e == "string") return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = F0(e[r])) && (n && (n += " "), n += t);
  return n
};

function q3(e, ...t) {
  let n, r, o, i = s;

  function s(l) {
    const u = t.reduce((d, p) => p(d), e());
    return n = Y3(u), r = n.cache.get, o = n.cache.set, i = a, a(l)
  }

  function a(l) {
    const u = r(l);
    if (u) return u;
    const d = Q3(l, n);
    return o(l, d), d
  }
  return function() {
    return i(Z3.apply(null, arguments))
  }
}
const ae = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0, t
  },
  z0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  J3 = /^\d+\/\d+$/,
  ek = new Set(["px", "full", "screen"]),
  tk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  nk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  rk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  ok = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ik = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ut = e => no(e) || ek.has(e) || J3.test(e),
  fn = e => Co(e, "length", pk),
  no = e => !!e && !Number.isNaN(Number(e)),
  Ql = e => Co(e, "number", no),
  Io = e => !!e && Number.isInteger(Number(e)),
  sk = e => e.endsWith("%") && no(e.slice(0, -1)),
  J = e => z0.test(e),
  pn = e => tk.test(e),
  ak = new Set(["length", "size", "percentage"]),
  lk = e => Co(e, ak, B0),
  ck = e => Co(e, "position", B0),
  uk = new Set(["image", "url"]),
  dk = e => Co(e, uk, hk),
  fk = e => Co(e, "", mk),
  Lo = () => !0,
  Co = (e, t, n) => {
    const r = z0.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
  },
  pk = e => nk.test(e) && !rk.test(e),
  B0 = () => !1,
  mk = e => ok.test(e),
  hk = e => ik.test(e),
  vk = () => {
    const e = ae("colors"),
      t = ae("spacing"),
      n = ae("blur"),
      r = ae("brightness"),
      o = ae("borderColor"),
      i = ae("borderRadius"),
      s = ae("borderSpacing"),
      a = ae("borderWidth"),
      l = ae("contrast"),
      u = ae("grayscale"),
      d = ae("hueRotate"),
      p = ae("invert"),
      f = ae("gap"),
      h = ae("gradientColorStops"),
      w = ae("gradientColorStopPositions"),
      g = ae("inset"),
      b = ae("margin"),
      v = ae("opacity"),
      y = ae("padding"),
      x = ae("saturate"),
      S = ae("scale"),
      C = ae("sepia"),
      E = ae("skew"),
      k = ae("space"),
      N = ae("translate"),
      T = () => ["auto", "contain", "none"],
      M = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", J, t],
      I = () => [J, t],
      Y = () => ["", Ut, fn],
      H = () => ["auto", no, J],
      Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
      K = () => ["solid", "dashed", "dotted", "double", "none"],
      V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      R = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
      $ = () => ["", "0", J],
      L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      j = () => [no, J];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Lo],
        spacing: [Ut, fn],
        blur: ["none", "", pn, J],
        brightness: j(),
        borderColor: [e],
        borderRadius: ["none", "", "full", pn, J],
        borderSpacing: I(),
        borderWidth: Y(),
        contrast: j(),
        grayscale: $(),
        hueRotate: j(),
        invert: $(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [sk, fn],
        inset: z(),
        margin: z(),
        opacity: j(),
        padding: I(),
        saturate: j(),
        scale: j(),
        sepia: $(),
        skew: j(),
        space: I(),
        translate: I()
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", "video", J]
        }],
        container: ["container"],
        columns: [{
          columns: [pn]
        }],
        "break-after": [{
          "break-after": L()
        }],
        "break-before": [{
          "break-before": L()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: [...Q(), J]
        }],
        overflow: [{
          overflow: M()
        }],
        "overflow-x": [{
          "overflow-x": M()
        }],
        "overflow-y": [{
          "overflow-y": M()
        }],
        overscroll: [{
          overscroll: T()
        }],
        "overscroll-x": [{
          "overscroll-x": T()
        }],
        "overscroll-y": [{
          "overscroll-y": T()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: [g]
        }],
        "inset-x": [{
          "inset-x": [g]
        }],
        "inset-y": [{
          "inset-y": [g]
        }],
        start: [{
          start: [g]
        }],
        end: [{
          end: [g]
        }],
        top: [{
          top: [g]
        }],
        right: [{
          right: [g]
        }],
        bottom: [{
          bottom: [g]
        }],
        left: [{
          left: [g]
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: ["auto", Io, J]
        }],
        basis: [{
          basis: z()
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["wrap", "wrap-reverse", "nowrap"]
        }],
        flex: [{
          flex: ["1", "auto", "initial", "none", J]
        }],
        grow: [{
          grow: $()
        }],
        shrink: [{
          shrink: $()
        }],
        order: [{
          order: ["first", "last", "none", Io, J]
        }],
        "grid-cols": [{
          "grid-cols": [Lo]
        }],
        "col-start-end": [{
          col: ["auto", {
            span: ["full", Io, J]
          }, J]
        }],
        "col-start": [{
          "col-start": H()
        }],
        "col-end": [{
          "col-end": H()
        }],
        "grid-rows": [{
          "grid-rows": [Lo]
        }],
        "row-start-end": [{
          row: ["auto", {
            span: [Io, J]
          }, J]
        }],
        "row-start": [{
          "row-start": H()
        }],
        "row-end": [{
          "row-end": H()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": ["auto", "min", "max", "fr", J]
        }],
        "auto-rows": [{
          "auto-rows": ["auto", "min", "max", "fr", J]
        }],
        gap: [{
          gap: [f]
        }],
        "gap-x": [{
          "gap-x": [f]
        }],
        "gap-y": [{
          "gap-y": [f]
        }],
        "justify-content": [{
          justify: ["normal", ...R()]
        }],
        "justify-items": [{
          "justify-items": ["start", "end", "center", "stretch"]
        }],
        "justify-self": [{
          "justify-self": ["auto", "start", "end", "center", "stretch"]
        }],
        "align-content": [{
          content: ["normal", ...R(), "baseline"]
        }],
        "align-items": [{
          items: ["start", "end", "center", "baseline", "stretch"]
        }],
        "align-self": [{
          self: ["auto", "start", "end", "center", "stretch", "baseline"]
        }],
        "place-content": [{
          "place-content": [...R(), "baseline"]
        }],
        "place-items": [{
          "place-items": ["start", "end", "center", "baseline", "stretch"]
        }],
        "place-self": [{
          "place-self": ["auto", "start", "end", "center", "stretch"]
        }],
        p: [{
          p: [y]
        }],
        px: [{
          px: [y]
        }],
        py: [{
          py: [y]
        }],
        ps: [{
          ps: [y]
        }],
        pe: [{
          pe: [y]
        }],
        pt: [{
          pt: [y]
        }],
        pr: [{
          pr: [y]
        }],
        pb: [{
          pb: [y]
        }],
        pl: [{
          pl: [y]
        }],
        m: [{
          m: [b]
        }],
        mx: [{
          mx: [b]
        }],
        my: [{
          my: [b]
        }],
        ms: [{
          ms: [b]
        }],
        me: [{
          me: [b]
        }],
        mt: [{
          mt: [b]
        }],
        mr: [{
          mr: [b]
        }],
        mb: [{
          mb: [b]
        }],
        ml: [{
          ml: [b]
        }],
        "space-x": [{
          "space-x": [k]
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": [k]
        }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{
          w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", J, t]
        }],
        "min-w": [{
          "min-w": [J, t, "min", "max", "fit"]
        }],
        "max-w": [{
          "max-w": [J, t, "none", "full", "min", "max", "fit", "prose", {
            screen: [pn]
          }, pn]
        }],
        h: [{
          h: [J, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "min-h": [{
          "min-h": [J, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "max-h": [{
          "max-h": [J, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        size: [{
          size: [J, t, "auto", "min", "max", "fit"]
        }],
        "font-size": [{
          text: ["base", pn, fn]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ql]
        }],
        "font-family": [{
          font: [Lo]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [{
          tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", J]
        }],
        "line-clamp": [{
          "line-clamp": ["none", no, Ql]
        }],
        leading: [{
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ut, J]
        }],
        "list-image": [{
          "list-image": ["none", J]
        }],
        "list-style-type": [{
          list: ["none", "disc", "decimal", J]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "placeholder-color": [{
          placeholder: [e]
        }],
        "placeholder-opacity": [{
          "placeholder-opacity": [v]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "text-color": [{
          text: [e]
        }],
        "text-opacity": [{
          "text-opacity": [v]
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...K(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: ["auto", "from-font", Ut, fn]
        }],
        "underline-offset": [{
          "underline-offset": ["auto", Ut, J]
        }],
        "text-decoration-color": [{
          decoration: [e]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: I()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", J]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-opacity": [{
          "bg-opacity": [v]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: [...Q(), ck]
        }],
        "bg-repeat": [{
          bg: ["no-repeat", {
            repeat: ["", "x", "y", "round", "space"]
          }]
        }],
        "bg-size": [{
          bg: ["auto", "cover", "contain", lk]
        }],
        "bg-image": [{
          bg: ["none", {
            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, dk]
        }],
        "bg-color": [{
          bg: [e]
        }],
        "gradient-from-pos": [{
          from: [w]
        }],
        "gradient-via-pos": [{
          via: [w]
        }],
        "gradient-to-pos": [{
          to: [w]
        }],
        "gradient-from": [{
          from: [h]
        }],
        "gradient-via": [{
          via: [h]
        }],
        "gradient-to": [{
          to: [h]
        }],
        rounded: [{
          rounded: [i]
        }],
        "rounded-s": [{
          "rounded-s": [i]
        }],
        "rounded-e": [{
          "rounded-e": [i]
        }],
        "rounded-t": [{
          "rounded-t": [i]
        }],
        "rounded-r": [{
          "rounded-r": [i]
        }],
        "rounded-b": [{
          "rounded-b": [i]
        }],
        "rounded-l": [{
          "rounded-l": [i]
        }],
        "rounded-ss": [{
          "rounded-ss": [i]
        }],
        "rounded-se": [{
          "rounded-se": [i]
        }],
        "rounded-ee": [{
          "rounded-ee": [i]
        }],
        "rounded-es": [{
          "rounded-es": [i]
        }],
        "rounded-tl": [{
          "rounded-tl": [i]
        }],
        "rounded-tr": [{
          "rounded-tr": [i]
        }],
        "rounded-br": [{
          "rounded-br": [i]
        }],
        "rounded-bl": [{
          "rounded-bl": [i]
        }],
        "border-w": [{
          border: [a]
        }],
        "border-w-x": [{
          "border-x": [a]
        }],
        "border-w-y": [{
          "border-y": [a]
        }],
        "border-w-s": [{
          "border-s": [a]
        }],
        "border-w-e": [{
          "border-e": [a]
        }],
        "border-w-t": [{
          "border-t": [a]
        }],
        "border-w-r": [{
          "border-r": [a]
        }],
        "border-w-b": [{
          "border-b": [a]
        }],
        "border-w-l": [{
          "border-l": [a]
        }],
        "border-opacity": [{
          "border-opacity": [v]
        }],
        "border-style": [{
          border: [...K(), "hidden"]
        }],
        "divide-x": [{
          "divide-x": [a]
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": [a]
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{
          "divide-opacity": [v]
        }],
        "divide-style": [{
          divide: K()
        }],
        "border-color": [{
          border: [o]
        }],
        "border-color-x": [{
          "border-x": [o]
        }],
        "border-color-y": [{
          "border-y": [o]
        }],
        "border-color-t": [{
          "border-t": [o]
        }],
        "border-color-r": [{
          "border-r": [o]
        }],
        "border-color-b": [{
          "border-b": [o]
        }],
        "border-color-l": [{
          "border-l": [o]
        }],
        "divide-color": [{
          divide: [o]
        }],
        "outline-style": [{
          outline: ["", ...K()]
        }],
        "outline-offset": [{
          "outline-offset": [Ut, J]
        }],
        "outline-w": [{
          outline: [Ut, fn]
        }],
        "outline-color": [{
          outline: [e]
        }],
        "ring-w": [{
          ring: Y()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: [e]
        }],
        "ring-opacity": [{
          "ring-opacity": [v]
        }],
        "ring-offset-w": [{
          "ring-offset": [Ut, fn]
        }],
        "ring-offset-color": [{
          "ring-offset": [e]
        }],
        shadow: [{
          shadow: ["", "inner", "none", pn, fk]
        }],
        "shadow-color": [{
          shadow: [Lo]
        }],
        opacity: [{
          opacity: [v]
        }],
        "mix-blend": [{
          "mix-blend": [...V(), "plus-lighter", "plus-darker"]
        }],
        "bg-blend": [{
          "bg-blend": V()
        }],
        filter: [{
          filter: ["", "none"]
        }],
        blur: [{
          blur: [n]
        }],
        brightness: [{
          brightness: [r]
        }],
        contrast: [{
          contrast: [l]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", pn, J]
        }],
        grayscale: [{
          grayscale: [u]
        }],
        "hue-rotate": [{
          "hue-rotate": [d]
        }],
        invert: [{
          invert: [p]
        }],
        saturate: [{
          saturate: [x]
        }],
        sepia: [{
          sepia: [C]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none"]
        }],
        "backdrop-blur": [{
          "backdrop-blur": [n]
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [r]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [l]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": [u]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [d]
        }],
        "backdrop-invert": [{
          "backdrop-invert": [p]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [v]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [x]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": [C]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": [s]
        }],
        "border-spacing-x": [{
          "border-spacing-x": [s]
        }],
        "border-spacing-y": [{
          "border-spacing-y": [s]
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", J]
        }],
        duration: [{
          duration: j()
        }],
        ease: [{
          ease: ["linear", "in", "out", "in-out", J]
        }],
        delay: [{
          delay: j()
        }],
        animate: [{
          animate: ["none", "spin", "ping", "pulse", "bounce", J]
        }],
        transform: [{
          transform: ["", "gpu", "none"]
        }],
        scale: [{
          scale: [S]
        }],
        "scale-x": [{
          "scale-x": [S]
        }],
        "scale-y": [{
          "scale-y": [S]
        }],
        rotate: [{
          rotate: [Io, J]
        }],
        "translate-x": [{
          "translate-x": [N]
        }],
        "translate-y": [{
          "translate-y": [N]
        }],
        "skew-x": [{
          "skew-x": [E]
        }],
        "skew-y": [{
          "skew-y": [E]
        }],
        "transform-origin": [{
          origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", J]
        }],
        accent: [{
          accent: ["auto", e]
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J]
        }],
        "caret-color": [{
          caret: [e]
        }],
        "pointer-events": [{
          "pointer-events": ["none", "auto"]
        }],
        resize: [{
          resize: ["none", "y", "x", ""]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": I()
        }],
        "scroll-mx": [{
          "scroll-mx": I()
        }],
        "scroll-my": [{
          "scroll-my": I()
        }],
        "scroll-ms": [{
          "scroll-ms": I()
        }],
        "scroll-me": [{
          "scroll-me": I()
        }],
        "scroll-mt": [{
          "scroll-mt": I()
        }],
        "scroll-mr": [{
          "scroll-mr": I()
        }],
        "scroll-mb": [{
          "scroll-mb": I()
        }],
        "scroll-ml": [{
          "scroll-ml": I()
        }],
        "scroll-p": [{
          "scroll-p": I()
        }],
        "scroll-px": [{
          "scroll-px": I()
        }],
        "scroll-py": [{
          "scroll-py": I()
        }],
        "scroll-ps": [{
          "scroll-ps": I()
        }],
        "scroll-pe": [{
          "scroll-pe": I()
        }],
        "scroll-pt": [{
          "scroll-pt": I()
        }],
        "scroll-pr": [{
          "scroll-pr": I()
        }],
        "scroll-pb": [{
          "scroll-pb": I()
        }],
        "scroll-pl": [{
          "scroll-pl": I()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", J]
        }],
        fill: [{
          fill: [e, "none"]
        }],
        "stroke-w": [{
          stroke: [Ut, fn, Ql]
        }],
        stroke: [{
          stroke: [e, "none"]
        }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      }
    }
  },
  gk = q3(vk);

function ue(...e) {
  return gk(wt(e))
}
const yk = $3,
  wk = M3,
  U0 = c.forwardRef(({
    className: e,
    ...t
  }, n) => m.jsx(_0, {
    ref: n,
    className: ue("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
  }));
U0.displayName = _0.displayName;
const W0 = c.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => m.jsxs(wk, {
  children: [m.jsx(U0, {}), m.jsxs(A0, {
    ref: r,
    className: ue("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
    ...n,
    children: [t, m.jsxs(T3, {
      className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
      children: [m.jsx(F3, {
        className: "h-4 w-4"
      }), m.jsx("span", {
        className: "sr-only",
        children: "Close"
      })]
    })]
  })]
}));
W0.displayName = A0.displayName;
const V0 = ({
  className: e,
  ...t
}) => m.jsx("div", {
  className: ue("flex flex-col space-y-1.5 text-center sm:text-left", e),
  ...t
});
V0.displayName = "DialogHeader";
const H0 = c.forwardRef(({
  className: e,
  ...t
}, n) => m.jsx(O0, {
  ref: n,
  className: ue("text-lg font-semibold leading-none tracking-tight", e),
  ...t
}));
H0.displayName = O0.displayName;
const xk = c.forwardRef(({
  className: e,
  ...t
}, n) => m.jsx(j0, {
  ref: n,
  className: ue("text-sm text-muted-foreground", e),
  ...t
}));
xk.displayName = j0.displayName;

function K0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++) e[t] && (n = K0(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e) e[t] && (r && (r += " "), r += t);
  return r
}

function bk() {
  for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = K0(e)) && (r && (r += " "), r += t);
  return r
}
const gm = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e,
  ym = bk,
  Sk = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null) return ym(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {
      variants: o,
      defaultVariants: i
    } = t, s = Object.keys(o).map(u => {
      const d = n == null ? void 0 : n[u],
        p = i == null ? void 0 : i[u];
      if (d === null) return null;
      const f = gm(d) || gm(p);
      return o[u][f]
    }), a = n && Object.entries(n).reduce((u, d) => {
      let [p, f] = d;
      return f === void 0 || (u[p] = f), u
    }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
      let {
        class: p,
        className: f,
        ...h
      } = d;
      return Object.entries(h).every(w => {
        let [g, b] = w;
        return Array.isArray(b) ? b.includes({
          ...i,
          ...a
        } [g]) : {
          ...i,
          ...a
        } [g] === b
      }) ? [...u, p, f] : u
    }, []);
    return ym(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
  },
  Ck = Sk("inline-flex items-center !rounded-[8px]  justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
      variant: {
        default: "bg-background text-primary-foreground hover:text-primary hover:border-primary",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }),
  Ht = c.forwardRef(({
    className: e,
    variant: t,
    size: n,
    asChild: r = !1,
    ...o
  }, i) => {
    const s = r ? jn : "button";
    return m.jsx(s, {
      className: ue(Ck({
        variant: t,
        size: n,
        className: e
      })),
      ref: i,
      ...o
    })
  });
Ht.displayName = "Button";
var wm = 1,
  Ek = .9,
  kk = .8,
  Nk = .17,
  Zl = .1,
  ql = .999,
  Pk = .9999,
  Rk = .99,
  $k = /[\\\/_+.#"@\[\(\{&]/,
  Mk = /[\\\/_+.#"@\[\(\{&]/g,
  Tk = /[\s-]/,
  G0 = /[\s-]/g;

function fu(e, t, n, r, o, i, s) {
  if (i === t.length) return o === e.length ? wm : Rk;
  var a = `${o},${i}`;
  if (s[a] !== void 0) return s[a];
  for (var l = r.charAt(i), u = n.indexOf(l, o), d = 0, p, f, h, w; u >= 0;) p = fu(e, t, n, r, u + 1, i + 1, s), p > d && (u === o ? p *= wm : $k.test(e.charAt(u - 1)) ? (p *= kk, h = e.slice(o, u - 1).match(Mk), h && o > 0 && (p *= Math.pow(ql, h.length))) : Tk.test(e.charAt(u - 1)) ? (p *= Ek, w = e.slice(o, u - 1).match(G0), w && o > 0 && (p *= Math.pow(ql, w.length))) : (p *= Nk, o > 0 && (p *= Math.pow(ql, u - o))), e.charAt(u) !== t.charAt(i) && (p *= Pk)), (p < Zl && n.charAt(u - 1) === r.charAt(i + 1) || r.charAt(i + 1) === r.charAt(i) && n.charAt(u - 1) !== r.charAt(i)) && (f = fu(e, t, n, r, u + 1, i + 2, s), f * Zl > p && (p = f * Zl)), p > d && (d = p), u = n.indexOf(l, u + 1);
  return s[a] = d, d
}

function xm(e) {
  return e.toLowerCase().replace(G0, " ")
}

function _k(e, t, n) {
  return e = n && n.length > 0 ? `${e+" "+n.join(" ")}` : e, fu(e, t, xm(e), xm(t), 0, 0, {})
}

function ro(e, t, {
  checkForDefaultPrevented: n = !0
} = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
  }
}

function Ak(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function Y0(...e) {
  return t => e.forEach(n => Ak(n, t))
}

function Li(...e) {
  return c.useCallback(Y0(...e), e)
}

function Ok(e, t = []) {
  let n = [];

  function r(i, s) {
    const a = c.createContext(s),
      l = n.length;
    n = [...n, s];

    function u(p) {
      const {
        scope: f,
        children: h,
        ...w
      } = p, g = (f == null ? void 0 : f[e][l]) || a, b = c.useMemo(() => w, Object.values(w));
      return c.createElement(g.Provider, {
        value: b
      }, h)
    }

    function d(p, f) {
      const h = (f == null ? void 0 : f[e][l]) || a,
        w = c.useContext(h);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${i}\``)
    }
    return u.displayName = i + "Provider", [u, d]
  }
  const o = () => {
    const i = n.map(s => c.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return c.useMemo(() => ({
        [`__scope${e}`]: {
          ...a,
          [e]: l
        }
      }), [a, l])
    }
  };
  return o.scopeName = e, [r, jk(o, ...t)]
}

function jk(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(o => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, {
        useScope: l,
        scopeName: u
      }) => {
        const p = l(i)[`__scope${u}`];
        return {
          ...a,
          ...p
        }
      }, {});
      return c.useMemo(() => ({
        [`__scope${t.scopeName}`]: s
      }), [s])
    }
  };
  return n.scopeName = t.scopeName, n
}
const Dk = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {},
  Ik = Km.useId || (() => {});
let Lk = 0;

function Jl(e) {
  const [t, n] = c.useState(Ik());
  return Dk(() => {
    e || n(r => r ?? String(Lk++))
  }, [e]), e || (t ? `radix-${t}` : "")
}

function X0(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e
  }), c.useMemo(() => (...n) => {
    var r;
    return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n)
  }, [])
}

function Fk({
  prop: e,
  defaultProp: t,
  onChange: n = () => {}
}) {
  const [r, o] = zk({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, s = i ? e : r, a = X0(n), l = c.useCallback(u => {
    if (i) {
      const p = typeof u == "function" ? u(e) : u;
      p !== e && a(p)
    } else o(u)
  }, [i, e, o, a]);
  return [s, l]
}

function zk({
  defaultProp: e,
  onChange: t
}) {
  const n = c.useState(e),
    [r] = n,
    o = c.useRef(r),
    i = X0(t);
  return c.useEffect(() => {
    o.current !== r && (i(r), o.current = r)
  }, [r, o, i]), n
}

function Bk(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function Uk(...e) {
  return t => e.forEach(n => Bk(n, t))
}
const Q0 = c.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e, o = c.Children.toArray(n), i = o.find(Vk);
  if (i) {
    const s = i.props.children,
      a = o.map(l => l === i ? c.Children.count(s) > 1 ? c.Children.only(null) : c.isValidElement(s) ? s.props.children : null : l);
    return c.createElement(pu, Te({}, r, {
      ref: t
    }), c.isValidElement(s) ? c.cloneElement(s, void 0, a) : null)
  }
  return c.createElement(pu, Te({}, r, {
    ref: t
  }), n)
});
Q0.displayName = "Slot";
const pu = c.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e;
  return c.isValidElement(n) ? c.cloneElement(n, {
    ...Hk(r, n.props),
    ref: t ? Uk(t, n.ref) : n.ref
  }) : c.Children.count(n) > 1 ? c.Children.only(null) : null
});
pu.displayName = "SlotClone";
const Wk = ({
  children: e
}) => c.createElement(c.Fragment, null, e);

function Vk(e) {
  return c.isValidElement(e) && e.type === Wk
}

function Hk(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      i(...a), o(...a)
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...i
    } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
  }
  return {
    ...e,
    ...n
  }
}
const Kk = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
  ft = Kk.reduce((e, t) => {
    const n = c.forwardRef((r, o) => {
      const {
        asChild: i,
        ...s
      } = r, a = i ? Q0 : t;
      return c.useEffect(() => {
        window[Symbol.for("radix-ui")] = !0
      }, []), c.createElement(a, Te({}, s, {
        ref: o
      }))
    });
    return n.displayName = `Primitive.${t}`, {
      ...e,
      [t]: n
    }
  }, {});

function Gk(e, t) {
  e && Bn.flushSync(() => e.dispatchEvent(t))
}

function qd(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e
  }), c.useMemo(() => (...n) => {
    var r;
    return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n)
  }, [])
}

function Yk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qd(e);
  c.useEffect(() => {
    const r = o => {
      o.key === "Escape" && n(o)
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r)
  }, [n, t])
}
const mu = "dismissableLayer.update",
  Xk = "dismissableLayer.pointerDownOutside",
  Qk = "dismissableLayer.focusOutside";
let bm;
const Zk = c.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
  }),
  qk = c.forwardRef((e, t) => {
    var n;
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: l,
      ...u
    } = e, d = c.useContext(Zk), [p, f] = c.useState(null), h = (n = p == null ? void 0 : p.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, w] = c.useState({}), g = Li(t, N => f(N)), b = Array.from(d.layers), [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = b.indexOf(v), x = p ? b.indexOf(p) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= y, E = Jk(N => {
      const T = N.target,
        M = [...d.branches].some(z => z.contains(T));
      !C || M || (i == null || i(N), a == null || a(N), N.defaultPrevented || l == null || l())
    }, h), k = e5(N => {
      const T = N.target;
      [...d.branches].some(z => z.contains(T)) || (s == null || s(N), a == null || a(N), N.defaultPrevented || l == null || l())
    }, h);
    return Yk(N => {
      x === d.layers.size - 1 && (o == null || o(N), !N.defaultPrevented && l && (N.preventDefault(), l()))
    }, h), c.useEffect(() => {
      if (p) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (bm = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), Sm(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = bm)
      }
    }, [p, h, r, d]), c.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), Sm())
    }, [p, d]), c.useEffect(() => {
      const N = () => w({});
      return document.addEventListener(mu, N), () => document.removeEventListener(mu, N)
    }, []), c.createElement(ft.div, Te({}, u, {
      ref: g,
      style: {
        pointerEvents: S ? C ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: ro(e.onFocusCapture, k.onFocusCapture),
      onBlurCapture: ro(e.onBlurCapture, k.onBlurCapture),
      onPointerDownCapture: ro(e.onPointerDownCapture, E.onPointerDownCapture)
    }))
  });

function Jk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qd(e),
    r = c.useRef(!1),
    o = c.useRef(() => {});
  return c.useEffect(() => {
    const i = a => {
        if (a.target && !r.current) {
          let d = function() {
            Z0(Xk, n, u, {
              discrete: !0
            })
          };
          var l = d;
          const u = {
            originalEvent: a
          };
          a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = d, t.addEventListener("click", o.current, {
            once: !0
          })) : d()
        } else t.removeEventListener("click", o.current);
        r.current = !1
      },
      s = window.setTimeout(() => {
        t.addEventListener("pointerdown", i)
      }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
    }
  }, [t, n]), {
    onPointerDownCapture: () => r.current = !0
  }
}

function e5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qd(e),
    r = c.useRef(!1);
  return c.useEffect(() => {
    const o = i => {
      i.target && !r.current && Z0(Qk, n, {
        originalEvent: i
      }, {
        discrete: !1
      })
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  }
}

function Sm() {
  const e = new CustomEvent(mu);
  document.dispatchEvent(e)
}

function Z0(e, t, n, {
  discrete: r
}) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Gk(o, i) : o.dispatchEvent(i)
}

function Cm(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e
  }), c.useMemo(() => (...n) => {
    var r;
    return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n)
  }, [])
}
const ec = "focusScope.autoFocusOnMount",
  tc = "focusScope.autoFocusOnUnmount",
  Em = {
    bubbles: !1,
    cancelable: !0
  },
  t5 = c.forwardRef((e, t) => {
    const {
      loop: n = !1,
      trapped: r = !1,
      onMountAutoFocus: o,
      onUnmountAutoFocus: i,
      ...s
    } = e, [a, l] = c.useState(null), u = Cm(o), d = Cm(i), p = c.useRef(null), f = Li(t, g => l(g)), h = c.useRef({
      paused: !1,
      pause() {
        this.paused = !0
      },
      resume() {
        this.paused = !1
      }
    }).current;
    c.useEffect(() => {
      if (r) {
        let y = function(E) {
            if (h.paused || !a) return;
            const k = E.target;
            a.contains(k) ? p.current = k : hn(p.current, {
              select: !0
            })
          },
          x = function(E) {
            if (h.paused || !a) return;
            const k = E.relatedTarget;
            k !== null && (a.contains(k) || hn(p.current, {
              select: !0
            }))
          },
          S = function(E) {
            if (document.activeElement === document.body)
              for (const N of E) N.removedNodes.length > 0 && hn(a)
          };
        var g = y,
          b = x,
          v = S;
        document.addEventListener("focusin", y), document.addEventListener("focusout", x);
        const C = new MutationObserver(S);
        return a && C.observe(a, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener("focusin", y), document.removeEventListener("focusout", x), C.disconnect()
        }
      }
    }, [r, a, h.paused]), c.useEffect(() => {
      if (a) {
        Nm.add(h);
        const g = document.activeElement;
        if (!a.contains(g)) {
          const v = new CustomEvent(ec, Em);
          a.addEventListener(ec, u), a.dispatchEvent(v), v.defaultPrevented || (n5(a5(q0(a)), {
            select: !0
          }), document.activeElement === g && hn(a))
        }
        return () => {
          a.removeEventListener(ec, u), setTimeout(() => {
            const v = new CustomEvent(tc, Em);
            a.addEventListener(tc, d), a.dispatchEvent(v), v.defaultPrevented || hn(g ?? document.body, {
              select: !0
            }), a.removeEventListener(tc, d), Nm.remove(h)
          }, 0)
        }
      }
    }, [a, u, d, h]);
    const w = c.useCallback(g => {
      if (!n && !r || h.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey,
        v = document.activeElement;
      if (b && v) {
        const y = g.currentTarget,
          [x, S] = r5(y);
        x && S ? !g.shiftKey && v === S ? (g.preventDefault(), n && hn(x, {
          select: !0
        })) : g.shiftKey && v === x && (g.preventDefault(), n && hn(S, {
          select: !0
        })) : v === y && g.preventDefault()
      }
    }, [n, r, h.paused]);
    return c.createElement(ft.div, Te({
      tabIndex: -1
    }, s, {
      ref: f,
      onKeyDown: w
    }))
  });

function n5(e, {
  select: t = !1
} = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (hn(r, {
        select: t
      }), document.activeElement !== n) return
}

function r5(e) {
  const t = q0(e),
    n = km(t, e),
    r = km(t.reverse(), e);
  return [n, r]
}

function q0(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t
}

function km(e, t) {
  for (const n of e)
    if (!o5(n, {
        upTo: t
      })) return n
}

function o5(e, {
  upTo: t
}) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement
  }
  return !1
}

function i5(e) {
  return e instanceof HTMLInputElement && "select" in e
}

function hn(e, {
  select: t = !1
} = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && i5(e) && t && e.select()
  }
}
const Nm = s5();

function s5() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Pm(e, t), e.unshift(t)
    },
    remove(t) {
      var n;
      e = Pm(e, t), (n = e[0]) === null || n === void 0 || n.resume()
    }
  }
}

function Pm(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n
}

function a5(e) {
  return e.filter(t => t.tagName !== "A")
}
const l5 = c.forwardRef((e, t) => {
    var n;
    const {
      container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body,
      ...o
    } = e;
    return r ? Da.createPortal(c.createElement(ft.div, Te({}, o, {
      ref: t
    })), r) : null
  }),
  Rm = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {};

function c5(e, t) {
  return c.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n
  }, e)
}
const Ja = e => {
  const {
    present: t,
    children: n
  } = e, r = u5(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : c.Children.only(n), i = Li(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, {
    ref: i
  }) : null
};
Ja.displayName = "Presence";

function u5(e) {
  const [t, n] = c.useState(), r = c.useRef({}), o = c.useRef(e), i = c.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = c5(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = ys(r.current);
    i.current = a === "mounted" ? u : "none"
  }, [a]), Rm(() => {
    const u = r.current,
      d = o.current;
    if (d !== e) {
      const f = i.current,
        h = ys(u);
      e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && f !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
    }
  }, [e, l]), Rm(() => {
    if (t) {
      const u = p => {
          const h = ys(r.current).includes(p.animationName);
          p.target === t && h && Bn.flushSync(() => l("ANIMATION_END"))
        },
        d = p => {
          p.target === t && (i.current = ys(r.current))
        };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u)
      }
    } else l("ANIMATION_END")
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: c.useCallback(u => {
      u && (r.current = getComputedStyle(u)), n(u)
    }, [])
  }
}

function ys(e) {
  return (e == null ? void 0 : e.animationName) || "none"
}
let nc = 0;

function d5() {
  c.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : $m()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : $m()), nc++, () => {
      nc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(r => r.remove()), nc--
    }
  }, [])
}

function $m() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
}
var J0 = Qm(),
  rc = function() {},
  el = c.forwardRef(function(e, t) {
    var n = c.useRef(null),
      r = c.useState({
        onScrollCapture: rc,
        onWheelCapture: rc,
        onTouchMoveCapture: rc
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      p = e.shards,
      f = e.sideCar,
      h = e.noIsolation,
      w = e.inert,
      g = e.allowPinchZoom,
      b = e.as,
      v = b === void 0 ? "div" : b,
      y = Nu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
      x = f,
      S = Xm([n, t]),
      C = je(je({}, y), o);
    return c.createElement(c.Fragment, null, d && c.createElement(x, {
      sideCar: J0,
      removeScrollBar: u,
      shards: p,
      noIsolation: h,
      inert: w,
      setCallbacks: i,
      allowPinchZoom: !!g,
      lockRef: n
    }), s ? c.cloneElement(c.Children.only(a), je(je({}, C), {
      ref: S
    })) : c.createElement(v, je({}, C, {
      className: l,
      ref: S
    }), a))
  });
el.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
el.classNames = {
  fullWidth: Ko,
  zeroRight: Ho
};
var hu = !1;
if (typeof window < "u") try {
  var ws = Object.defineProperty({}, "passive", {
    get: function() {
      return hu = !0, !0
    }
  });
  window.addEventListener("test", ws, ws), window.removeEventListener("test", ws, ws)
} catch {
  hu = !1
}
var _r = hu ? {
    passive: !1
  } : !1,
  f5 = function(e) {
    return e.tagName === "TEXTAREA"
  },
  ey = function(e, t) {
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !f5(e) && n[t] === "visible")
  },
  p5 = function(e) {
    return ey(e, "overflowY")
  },
  m5 = function(e) {
    return ey(e, "overflowX")
  },
  Mm = function(e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = ty(e, n);
      if (r) {
        var o = ny(e, n),
          i = o[1],
          s = o[2];
        if (i > s) return !0
      }
      n = n.parentNode
    } while (n && n !== document.body);
    return !1
  },
  h5 = function(e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r]
  },
  v5 = function(e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r]
  },
  ty = function(e, t) {
    return e === "v" ? p5(t) : m5(t)
  },
  ny = function(e, t) {
    return e === "v" ? h5(t) : v5(t)
  },
  g5 = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
  },
  y5 = function(e, t, n, r, o) {
    var i = g5(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      d = s > 0,
      p = 0,
      f = 0;
    do {
      var h = ny(e, a),
        w = h[0],
        g = h[1],
        b = h[2],
        v = g - b - i * w;
      (w || v) && ty(e, a) && (p += v, f += w), a = a.parentNode
    } while (!l && a !== document.body || l && (t.contains(a) || t === a));
    return (d && (p === 0 || !o) || !d && (f === 0 || !o)) && (u = !0), u
  },
  xs = function(e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
  },
  Tm = function(e) {
    return [e.deltaX, e.deltaY]
  },
  _m = function(e) {
    return e && "current" in e ? e.current : e
  },
  w5 = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
  },
  x5 = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
  },
  b5 = 0,
  Ar = [];

function S5(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    r = c.useRef(),
    o = c.useState(b5++)[0],
    i = c.useState(function() {
      return Pu()
    })[0],
    s = c.useRef(e);
  c.useEffect(function() {
    s.current = e
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = Ym([e.lockRef.current], (e.shards || []).map(_m), !0).filter(Boolean);
      return g.forEach(function(b) {
          return b.classList.add("allow-interactivity-".concat(o))
        }),
        function() {
          document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(b) {
            return b.classList.remove("allow-interactivity-".concat(o))
          })
        }
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = c.useCallback(function(g, b) {
      if ("touches" in g && g.touches.length === 2) return !s.current.allowPinchZoom;
      var v = xs(g),
        y = n.current,
        x = "deltaX" in g ? g.deltaX : y[0] - v[0],
        S = "deltaY" in g ? g.deltaY : y[1] - v[1],
        C, E = g.target,
        k = Math.abs(x) > Math.abs(S) ? "h" : "v";
      if ("touches" in g && k === "h" && E.type === "range") return !1;
      var N = Mm(k, E);
      if (!N) return !0;
      if (N ? C = k : (C = k === "v" ? "h" : "v", N = Mm(k, E)), !N) return !1;
      if (!r.current && "changedTouches" in g && (x || S) && (r.current = C), !C) return !0;
      var T = r.current || C;
      return y5(T, b, g, T === "h" ? x : S, !0)
    }, []),
    l = c.useCallback(function(g) {
      var b = g;
      if (!(!Ar.length || Ar[Ar.length - 1] !== i)) {
        var v = "deltaY" in b ? Tm(b) : xs(b),
          y = t.current.filter(function(C) {
            return C.name === b.type && C.target === b.target && w5(C.delta, v)
          })[0];
        if (y && y.should) {
          b.cancelable && b.preventDefault();
          return
        }
        if (!y) {
          var x = (s.current.shards || []).map(_m).filter(Boolean).filter(function(C) {
              return C.contains(b.target)
            }),
            S = x.length > 0 ? a(b, x[0]) : !s.current.noIsolation;
          S && b.cancelable && b.preventDefault()
        }
      }
    }, []),
    u = c.useCallback(function(g, b, v, y) {
      var x = {
        name: g,
        delta: b,
        target: v,
        should: y
      };
      t.current.push(x), setTimeout(function() {
        t.current = t.current.filter(function(S) {
          return S !== x
        })
      }, 1)
    }, []),
    d = c.useCallback(function(g) {
      n.current = xs(g), r.current = void 0
    }, []),
    p = c.useCallback(function(g) {
      u(g.type, Tm(g), g.target, a(g, e.lockRef.current))
    }, []),
    f = c.useCallback(function(g) {
      u(g.type, xs(g), g.target, a(g, e.lockRef.current))
    }, []);
  c.useEffect(function() {
    return Ar.push(i), e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: f
      }), document.addEventListener("wheel", l, _r), document.addEventListener("touchmove", l, _r), document.addEventListener("touchstart", d, _r),
      function() {
        Ar = Ar.filter(function(g) {
          return g !== i
        }), document.removeEventListener("wheel", l, _r), document.removeEventListener("touchmove", l, _r), document.removeEventListener("touchstart", d, _r)
      }
  }, []);
  var h = e.removeScrollBar,
    w = e.inert;
  return c.createElement(c.Fragment, null, w ? c.createElement(i, {
    styles: x5(o)
  }) : null, h ? c.createElement(eh, {
    gapMode: "margin"
  }) : null)
}
const C5 = qm(J0, S5);
var ry = c.forwardRef(function(e, t) {
  return c.createElement(el, je({}, e, {
    ref: t,
    sideCar: C5
  }))
});
ry.classNames = el.classNames;
const oy = c.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e, o = c.Children.toArray(n), i = o.find(k5);
  if (i) {
    const s = i.props.children,
      a = o.map(l => l === i ? c.Children.count(s) > 1 ? c.Children.only(null) : c.isValidElement(s) ? s.props.children : null : l);
    return c.createElement(vu, Te({}, r, {
      ref: t
    }), c.isValidElement(s) ? c.cloneElement(s, void 0, a) : null)
  }
  return c.createElement(vu, Te({}, r, {
    ref: t
  }), n)
});
oy.displayName = "Slot";
const vu = c.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e;
  return c.isValidElement(n) ? c.cloneElement(n, {
    ...N5(r, n.props),
    ref: t ? Y0(t, n.ref) : n.ref
  }) : c.Children.count(n) > 1 ? c.Children.only(null) : null
});
vu.displayName = "SlotClone";
const E5 = ({
  children: e
}) => c.createElement(c.Fragment, null, e);

function k5(e) {
  return c.isValidElement(e) && e.type === E5
}

function N5(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      i(...a), o(...a)
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...i
    } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
  }
  return {
    ...e,
    ...n
  }
}
const iy = "Dialog",
  [sy, vR] = Ok(iy),
  [P5, yr] = sy(iy),
  R5 = e => {
    const {
      __scopeDialog: t,
      children: n,
      open: r,
      defaultOpen: o,
      onOpenChange: i,
      modal: s = !0
    } = e, a = c.useRef(null), l = c.useRef(null), [u = !1, d] = Fk({
      prop: r,
      defaultProp: o,
      onChange: i
    });
    return c.createElement(P5, {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Jl(),
      titleId: Jl(),
      descriptionId: Jl(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d(p => !p), [d]),
      modal: s
    }, n)
  },
  ay = "DialogPortal",
  [$5, ly] = sy(ay, {
    forceMount: void 0
  }),
  M5 = e => {
    const {
      __scopeDialog: t,
      forceMount: n,
      children: r,
      container: o
    } = e, i = yr(ay, t);
    return c.createElement($5, {
      scope: t,
      forceMount: n
    }, c.Children.map(r, s => c.createElement(Ja, {
      present: n || i.open
    }, c.createElement(l5, {
      asChild: !0,
      container: o
    }, s))))
  },
  gu = "DialogOverlay",
  T5 = c.forwardRef((e, t) => {
    const n = ly(gu, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = yr(gu, e.__scopeDialog);
    return i.modal ? c.createElement(Ja, {
      present: r || i.open
    }, c.createElement(_5, Te({}, o, {
      ref: t
    }))) : null
  }),
  _5 = c.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, o = yr(gu, n);
    return c.createElement(ry, {
      as: oy,
      allowPinchZoom: !0,
      shards: [o.contentRef]
    }, c.createElement(ft.div, Te({
      "data-state": uy(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  }),
  Si = "DialogContent",
  A5 = c.forwardRef((e, t) => {
    const n = ly(Si, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = yr(Si, e.__scopeDialog);
    return c.createElement(Ja, {
      present: r || i.open
    }, i.modal ? c.createElement(O5, Te({}, o, {
      ref: t
    })) : c.createElement(j5, Te({}, o, {
      ref: t
    })))
  }),
  O5 = c.forwardRef((e, t) => {
    const n = yr(Si, e.__scopeDialog),
      r = c.useRef(null),
      o = Li(t, n.contentRef, r);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return qa(i)
    }, []), c.createElement(cy, Te({}, e, {
      ref: o,
      trapFocus: n.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: ro(e.onCloseAutoFocus, i => {
        var s;
        i.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus()
      }),
      onPointerDownOutside: ro(e.onPointerDownOutside, i => {
        const s = i.detail.originalEvent,
          a = s.button === 0 && s.ctrlKey === !0;
        (s.button === 2 || a) && i.preventDefault()
      }),
      onFocusOutside: ro(e.onFocusOutside, i => i.preventDefault())
    }))
  }),
  j5 = c.forwardRef((e, t) => {
    const n = yr(Si, e.__scopeDialog),
      r = c.useRef(!1),
      o = c.useRef(!1);
    return c.createElement(cy, Te({}, e, {
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: i => {
        var s;
        if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, i), !i.defaultPrevented) {
          var a;
          r.current || (a = n.triggerRef.current) === null || a === void 0 || a.focus(), i.preventDefault()
        }
        r.current = !1, o.current = !1
      },
      onInteractOutside: i => {
        var s, a;
        (s = e.onInteractOutside) === null || s === void 0 || s.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const l = i.target;
        ((a = n.triggerRef.current) === null || a === void 0 ? void 0 : a.contains(l)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault()
      }
    }))
  }),
  cy = c.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      ...s
    } = e, a = yr(Si, n), l = c.useRef(null), u = Li(t, l);
    return d5(), c.createElement(c.Fragment, null, c.createElement(t5, {
      asChild: !0,
      loop: !0,
      trapped: r,
      onMountAutoFocus: o,
      onUnmountAutoFocus: i
    }, c.createElement(qk, Te({
      role: "dialog",
      id: a.contentId,
      "aria-describedby": a.descriptionId,
      "aria-labelledby": a.titleId,
      "data-state": uy(a.open)
    }, s, {
      ref: u,
      onDismiss: () => a.onOpenChange(!1)
    }))), !1)
  });

function uy(e) {
  return e ? "open" : "closed"
}
const D5 = R5,
  I5 = M5,
  L5 = T5,
  F5 = A5;
var Fo = '[cmdk-group=""]',
  oc = '[cmdk-group-items=""]',
  z5 = '[cmdk-group-heading=""]',
  Jd = '[cmdk-item=""]',
  Am = `${Jd}:not([aria-disabled="true"])`,
  yu = "cmdk-item-select",
  Xn = "data-value",
  B5 = (e, t, n) => _k(e, t, n),
  dy = c.createContext(void 0),
  Fi = () => c.useContext(dy),
  fy = c.createContext(void 0),
  ef = () => c.useContext(fy),
  py = c.createContext(void 0),
  my = c.forwardRef((e, t) => {
    let n = jr(() => {
        var P, D;
        return {
          search: "",
          value: (D = (P = e.value) != null ? P : e.defaultValue) != null ? D : "",
          filtered: {
            count: 0,
            items: new Map,
            groups: new Set
          }
        }
      }),
      r = jr(() => new Set),
      o = jr(() => new Map),
      i = jr(() => new Map),
      s = jr(() => new Set),
      a = hy(e),
      {
        label: l,
        children: u,
        value: d,
        onValueChange: p,
        filter: f,
        shouldFilter: h,
        loop: w,
        disablePointerSelection: g = !1,
        vimBindings: b = !0,
        ...v
      } = e,
      y = c.useId(),
      x = c.useId(),
      S = c.useId(),
      C = c.useRef(null),
      E = q5();
    pr(() => {
      if (d !== void 0) {
        let P = d.trim();
        n.current.value = P, k.emit()
      }
    }, [d]), pr(() => {
      E(6, Y)
    }, []);
    let k = c.useMemo(() => ({
        subscribe: P => (s.current.add(P), () => s.current.delete(P)),
        snapshot: () => n.current,
        setState: (P, D, W) => {
          var F, B, Z;
          if (!Object.is(n.current[P], D)) {
            if (n.current[P] = D, P === "search") I(), M(), E(1, z);
            else if (P === "value" && (W || E(5, Y), ((F = a.current) == null ? void 0 : F.value) !== void 0)) {
              let G = D ?? "";
              (Z = (B = a.current).onValueChange) == null || Z.call(B, G);
              return
            }
            k.emit()
          }
        },
        emit: () => {
          s.current.forEach(P => P())
        }
      }), []),
      N = c.useMemo(() => ({
        value: (P, D, W) => {
          var F;
          D !== ((F = i.current.get(P)) == null ? void 0 : F.value) && (i.current.set(P, {
            value: D,
            keywords: W
          }), n.current.filtered.items.set(P, T(D, W)), E(2, () => {
            M(), k.emit()
          }))
        },
        item: (P, D) => (r.current.add(P), D && (o.current.has(D) ? o.current.get(D).add(P) : o.current.set(D, new Set([P]))), E(3, () => {
          I(), M(), n.current.value || z(), k.emit()
        }), () => {
          i.current.delete(P), r.current.delete(P), n.current.filtered.items.delete(P);
          let W = H();
          E(4, () => {
            I(), (W == null ? void 0 : W.getAttribute("id")) === P && z(), k.emit()
          })
        }),
        group: P => (o.current.has(P) || o.current.set(P, new Set), () => {
          i.current.delete(P), o.current.delete(P)
        }),
        filter: () => a.current.shouldFilter,
        label: l || e["aria-label"],
        disablePointerSelection: g,
        listId: y,
        inputId: S,
        labelId: x,
        listInnerRef: C
      }), []);

    function T(P, D) {
      var W, F;
      let B = (F = (W = a.current) == null ? void 0 : W.filter) != null ? F : B5;
      return P ? B(P, n.current.search, D) : 0
    }

    function M() {
      if (!n.current.search || a.current.shouldFilter === !1) return;
      let P = n.current.filtered.items,
        D = [];
      n.current.filtered.groups.forEach(F => {
        let B = o.current.get(F),
          Z = 0;
        B.forEach(G => {
          let ne = P.get(G);
          Z = Math.max(ne, Z)
        }), D.push([F, Z])
      });
      let W = C.current;
      Q().sort((F, B) => {
        var Z, G;
        let ne = F.getAttribute("id"),
          Ee = B.getAttribute("id");
        return ((Z = P.get(Ee)) != null ? Z : 0) - ((G = P.get(ne)) != null ? G : 0)
      }).forEach(F => {
        let B = F.closest(oc);
        B ? B.appendChild(F.parentElement === B ? F : F.closest(`${oc} > *`)) : W.appendChild(F.parentElement === W ? F : F.closest(`${oc} > *`))
      }), D.sort((F, B) => B[1] - F[1]).forEach(F => {
        let B = C.current.querySelector(`${Fo}[${Xn}="${encodeURIComponent(F[0])}"]`);
        B == null || B.parentElement.appendChild(B)
      })
    }

    function z() {
      let P = Q().find(W => W.getAttribute("aria-disabled") !== "true"),
        D = P == null ? void 0 : P.getAttribute(Xn);
      k.setState("value", D || void 0)
    }

    function I() {
      var P, D, W, F;
      if (!n.current.search || a.current.shouldFilter === !1) {
        n.current.filtered.count = r.current.size;
        return
      }
      n.current.filtered.groups = new Set;
      let B = 0;
      for (let Z of r.current) {
        let G = (D = (P = i.current.get(Z)) == null ? void 0 : P.value) != null ? D : "",
          ne = (F = (W = i.current.get(Z)) == null ? void 0 : W.keywords) != null ? F : [],
          Ee = T(G, ne);
        n.current.filtered.items.set(Z, Ee), Ee > 0 && B++
      }
      for (let [Z, G] of o.current)
        for (let ne of G)
          if (n.current.filtered.items.get(ne) > 0) {
            n.current.filtered.groups.add(Z);
            break
          } n.current.filtered.count = B
    }

    function Y() {
      var P, D, W;
      let F = H();
      F && (((P = F.parentElement) == null ? void 0 : P.firstChild) === F && ((W = (D = F.closest(Fo)) == null ? void 0 : D.querySelector(z5)) == null || W.scrollIntoView({
        block: "nearest"
      })), F.scrollIntoView({
        block: "nearest"
      }))
    }

    function H() {
      var P;
      return (P = C.current) == null ? void 0 : P.querySelector(`${Jd}[aria-selected="true"]`)
    }

    function Q() {
      var P;
      return Array.from((P = C.current) == null ? void 0 : P.querySelectorAll(Am))
    }

    function K(P) {
      let D = Q()[P];
      D && k.setState("value", D.getAttribute(Xn))
    }

    function V(P) {
      var D;
      let W = H(),
        F = Q(),
        B = F.findIndex(G => G === W),
        Z = F[B + P];
      (D = a.current) != null && D.loop && (Z = B + P < 0 ? F[F.length - 1] : B + P === F.length ? F[0] : F[B + P]), Z && k.setState("value", Z.getAttribute(Xn))
    }

    function R(P) {
      let D = H(),
        W = D == null ? void 0 : D.closest(Fo),
        F;
      for (; W && !F;) W = P > 0 ? Q5(W, Fo) : Z5(W, Fo), F = W == null ? void 0 : W.querySelector(Am);
      F ? k.setState("value", F.getAttribute(Xn)) : V(P)
    }
    let $ = () => K(Q().length - 1),
      L = P => {
        P.preventDefault(), P.metaKey ? $() : P.altKey ? R(1) : V(1)
      },
      j = P => {
        P.preventDefault(), P.metaKey ? K(0) : P.altKey ? R(-1) : V(-1)
      };
    return c.createElement(ft.div, {
      ref: t,
      tabIndex: -1,
      ...v,
      "cmdk-root": "",
      onKeyDown: P => {
        var D;
        if ((D = v.onKeyDown) == null || D.call(v, P), !P.defaultPrevented) switch (P.key) {
          case "n":
          case "j": {
            b && P.ctrlKey && L(P);
            break
          }
          case "ArrowDown": {
            L(P);
            break
          }
          case "p":
          case "k": {
            b && P.ctrlKey && j(P);
            break
          }
          case "ArrowUp": {
            j(P);
            break
          }
          case "Home": {
            P.preventDefault(), K(0);
            break
          }
          case "End": {
            P.preventDefault(), $();
            break
          }
          case "Enter":
            if (!P.nativeEvent.isComposing && P.keyCode !== 229) {
              P.preventDefault();
              let W = H();
              if (W) {
                let F = new Event(yu);
                W.dispatchEvent(F)
              }
            }
        }
      }
    }, c.createElement("label", {
      "cmdk-label": "",
      htmlFor: N.inputId,
      id: N.labelId,
      style: eN
    }, l), tl(e, P => c.createElement(fy.Provider, {
      value: k
    }, c.createElement(dy.Provider, {
      value: N
    }, P))))
  }),
  U5 = c.forwardRef((e, t) => {
    var n, r;
    let o = c.useId(),
      i = c.useRef(null),
      s = c.useContext(py),
      a = Fi(),
      l = hy(e),
      u = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
    pr(() => {
      if (!u) return a.item(o, s == null ? void 0 : s.id)
    }, [u]);
    let d = vy(o, i, [e.value, e.children, i], e.keywords),
      p = ef(),
      f = mr(E => E.value && E.value === d.current),
      h = mr(E => u || a.filter() === !1 ? !0 : E.search ? E.filtered.items.get(o) > 0 : !0);
    c.useEffect(() => {
      let E = i.current;
      if (!(!E || e.disabled)) return E.addEventListener(yu, w), () => E.removeEventListener(yu, w)
    }, [h, e.onSelect, e.disabled]);

    function w() {
      var E, k;
      g(), (k = (E = l.current).onSelect) == null || k.call(E, d.current)
    }

    function g() {
      p.setState("value", d.current, !0)
    }
    if (!h) return null;
    let {
      disabled: b,
      value: v,
      onSelect: y,
      forceMount: x,
      keywords: S,
      ...C
    } = e;
    return c.createElement(ft.div, {
      ref: Ci([i, t]),
      ...C,
      id: o,
      "cmdk-item": "",
      role: "option",
      "aria-disabled": !!b,
      "aria-selected": !!f,
      "data-disabled": !!b,
      "data-selected": !!f,
      onPointerMove: b || a.disablePointerSelection ? void 0 : g,
      onClick: b ? void 0 : w
    }, e.children)
  }),
  W5 = c.forwardRef((e, t) => {
    let {
      heading: n,
      children: r,
      forceMount: o,
      ...i
    } = e, s = c.useId(), a = c.useRef(null), l = c.useRef(null), u = c.useId(), d = Fi(), p = mr(h => o || d.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
    pr(() => d.group(s), []), vy(s, a, [e.value, e.heading, l]);
    let f = c.useMemo(() => ({
      id: s,
      forceMount: o
    }), [o]);
    return c.createElement(ft.div, {
      ref: Ci([a, t]),
      ...i,
      "cmdk-group": "",
      role: "presentation",
      hidden: p ? void 0 : !0
    }, n && c.createElement("div", {
      ref: l,
      "cmdk-group-heading": "",
      "aria-hidden": !0,
      id: u
    }, n), tl(e, h => c.createElement("div", {
      "cmdk-group-items": "",
      role: "group",
      "aria-labelledby": n ? u : void 0
    }, c.createElement(py.Provider, {
      value: f
    }, h))))
  }),
  V5 = c.forwardRef((e, t) => {
    let {
      alwaysRender: n,
      ...r
    } = e, o = c.useRef(null), i = mr(s => !s.search);
    return !n && !i ? null : c.createElement(ft.div, {
      ref: Ci([o, t]),
      ...r,
      "cmdk-separator": "",
      role: "separator"
    })
  }),
  H5 = c.forwardRef((e, t) => {
    let {
      onValueChange: n,
      ...r
    } = e, o = e.value != null, i = ef(), s = mr(d => d.search), a = mr(d => d.value), l = Fi(), u = c.useMemo(() => {
      var d;
      let p = (d = l.listInnerRef.current) == null ? void 0 : d.querySelector(`${Jd}[${Xn}="${encodeURIComponent(a)}"]`);
      return p == null ? void 0 : p.getAttribute("id")
    }, []);
    return c.useEffect(() => {
      e.value != null && i.setState("search", e.value)
    }, [e.value]), c.createElement(ft.input, {
      ref: t,
      ...r,
      "cmdk-input": "",
      autoComplete: "off",
      autoCorrect: "off",
      spellCheck: !1,
      "aria-autocomplete": "list",
      role: "combobox",
      "aria-expanded": !0,
      "aria-controls": l.listId,
      "aria-labelledby": l.labelId,
      "aria-activedescendant": u,
      id: l.inputId,
      type: "text",
      value: o ? e.value : s,
      onChange: d => {
        o || i.setState("search", d.target.value), n == null || n(d.target.value)
      }
    })
  }),
  K5 = c.forwardRef((e, t) => {
    let {
      children: n,
      label: r = "Suggestions",
      ...o
    } = e, i = c.useRef(null), s = c.useRef(null), a = Fi();
    return c.useEffect(() => {
      if (s.current && i.current) {
        let l = s.current,
          u = i.current,
          d, p = new ResizeObserver(() => {
            d = requestAnimationFrame(() => {
              let f = l.offsetHeight;
              u.style.setProperty("--cmdk-list-height", f.toFixed(1) + "px")
            })
          });
        return p.observe(l), () => {
          cancelAnimationFrame(d), p.unobserve(l)
        }
      }
    }, []), c.createElement(ft.div, {
      ref: Ci([i, t]),
      ...o,
      "cmdk-list": "",
      role: "listbox",
      "aria-label": r,
      id: a.listId
    }, tl(e, l => c.createElement("div", {
      ref: Ci([s, a.listInnerRef]),
      "cmdk-list-sizer": ""
    }, l)))
  }),
  G5 = c.forwardRef((e, t) => {
    let {
      open: n,
      onOpenChange: r,
      overlayClassName: o,
      contentClassName: i,
      container: s,
      ...a
    } = e;
    return c.createElement(D5, {
      open: n,
      onOpenChange: r
    }, c.createElement(I5, {
      container: s
    }, c.createElement(L5, {
      "cmdk-overlay": "",
      className: o
    }), c.createElement(F5, {
      "aria-label": e.label,
      "cmdk-dialog": "",
      className: i
    }, c.createElement(my, {
      ref: t,
      ...a
    }))))
  }),
  Y5 = c.forwardRef((e, t) => mr(n => n.filtered.count === 0) ? c.createElement(ft.div, {
    ref: t,
    ...e,
    "cmdk-empty": "",
    role: "presentation"
  }) : null),
  X5 = c.forwardRef((e, t) => {
    let {
      progress: n,
      children: r,
      label: o = "Loading...",
      ...i
    } = e;
    return c.createElement(ft.div, {
      ref: t,
      ...i,
      "cmdk-loading": "",
      role: "progressbar",
      "aria-valuenow": n,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-label": o
    }, tl(e, s => c.createElement("div", {
      "aria-hidden": !0
    }, s)))
  }),
  Ye = Object.assign(my, {
    List: K5,
    Item: U5,
    Input: H5,
    Group: W5,
    Separator: V5,
    Dialog: G5,
    Empty: Y5,
    Loading: X5
  });

function Q5(e, t) {
  let n = e.nextElementSibling;
  for (; n;) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling
  }
}

function Z5(e, t) {
  let n = e.previousElementSibling;
  for (; n;) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling
  }
}

function hy(e) {
  let t = c.useRef(e);
  return pr(() => {
    t.current = e
  }), t
}
var pr = typeof window > "u" ? c.useEffect : c.useLayoutEffect;

function jr(e) {
  let t = c.useRef();
  return t.current === void 0 && (t.current = e()), t
}

function Ci(e) {
  return t => {
    e.forEach(n => {
      typeof n == "function" ? n(t) : n != null && (n.current = t)
    })
  }
}

function mr(e) {
  let t = ef(),
    n = () => e(t.snapshot());
  return c.useSyncExternalStore(t.subscribe, n, n)
}

function vy(e, t, n, r = []) {
  let o = c.useRef(),
    i = Fi();
  return pr(() => {
    var s;
    let a = (() => {
        var u;
        for (let d of n) {
          if (typeof d == "string") return d.trim();
          if (typeof d == "object" && "current" in d) return d.current ? (u = d.current.textContent) == null ? void 0 : u.trim() : o.current
        }
      })(),
      l = r.map(u => u.trim());
    i.value(e, a, l), (s = t.current) == null || s.setAttribute(Xn, a), o.current = a
  }), o
}
var q5 = () => {
  let [e, t] = c.useState(), n = jr(() => new Map);
  return pr(() => {
    n.current.forEach(r => r()), n.current = new Map
  }, [e]), (r, o) => {
    n.current.set(r, o), t({})
  }
};

function J5(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e
}

function tl({
  asChild: e,
  children: t
}, n) {
  return e && c.isValidElement(t) ? c.cloneElement(J5(t), {
    ref: t.ref
  }, n(t.props.children)) : n(t)
}
var eN = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
};
const gy = c.forwardRef(({
  className: e,
  ...t
}, n) => m.jsx(Ye, {
  ref: n,
  className: ue("flex h-full w-full flex-col overflow-hidden rounded-md bg-background text-popover-foreground", e),
  ...t
}));
gy.displayName = Ye.displayName;
const yy = c.forwardRef(({
  className: e,
  ...t
}, n) => m.jsxs("div", {
  className: "flex items-center border-b px-3",
  "cmdk-input-wrapper": "",
  children: [m.jsx(L3, {
    className: "mr-2 h-4 w-4 shrink-0 opacity-50"
  }), m.jsx(Ye.Input, {
    ref: n,
    className: ue("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
    ...t
  })]
}));
yy.displayName = Ye.Input.displayName;
const wy = c.forwardRef(({
  className: e,
  ...t
}, n) => m.jsx(Ye.List, {
  ref: n,
  className: ue("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
  ...t
}));
wy.displayName = Ye.List.displayName;
const xy = c.forwardRef((e, t) => m.jsx(Ye.Empty, {
  ref: t,
  className: "py-6 text-center text-sm",
  ...e
}));
xy.displayName = Ye.Empty.displayName;
const by = c.forwardRef(({
  className: e,
  ...t
}, n) => m.jsx(Ye.Group, {
  ref: n,
  className: ue("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
  ...t
}));
by.displayName = Ye.Group.displayName;
const tN = c.forwardRef(({
  className: e,
  ...t
}, n) => m.jsx(Ye.Separator, {
  ref: n,
  className: ue("-mx-1 h-px bg-border", e),
  ...t
}));
tN.displayName = Ye.Separator.displayName;
const Sy = c.forwardRef(({
  className: e,
  ...t
}, n) => m.jsx(Ye.Item, {
  ref: n,
  className: ue("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50", e),
  ...t
}));
Sy.displayName = Ye.Item.displayName;
var nN = "Arrow",
  Cy = c.forwardRef((e, t) => {
    const {
      children: n,
      width: r = 10,
      height: o = 5,
      ...i
    } = e;
    return m.jsx(fe.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : m.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    })
  });
Cy.displayName = nN;
var rN = Cy;

function Ey(e) {
  const [t, n] = c.useState(void 0);
  return dr(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver(o => {
        if (!Array.isArray(o) || !o.length) return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize,
            u = Array.isArray(l) ? l[0] : l;
          s = u.inlineSize, a = u.blockSize
        } else s = e.offsetWidth, a = e.offsetHeight;
        n({
          width: s,
          height: a
        })
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e)
    } else n(void 0)
  }, [e]), t
}
var tf = "Popper",
  [ky, nl] = Un(tf),
  [oN, Ny] = ky(tf),
  Py = e => {
    const {
      __scopePopper: t,
      children: n
    } = e, [r, o] = c.useState(null);
    return m.jsx(oN, {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      children: n
    })
  };
Py.displayName = tf;
var Ry = "PopperAnchor",
  $y = c.forwardRef((e, t) => {
    const {
      __scopePopper: n,
      virtualRef: r,
      ...o
    } = e, i = Ny(Ry, n), s = c.useRef(null), a = we(t, s);
    return c.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }), r ? null : m.jsx(fe.div, {
      ...o,
      ref: a
    })
  });
$y.displayName = Ry;
var nf = "PopperContent",
  [iN, sN] = ky(nf),
  My = c.forwardRef((e, t) => {
    var Z, G, ne, Ee, br, cn;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: p = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: w,
      ...g
    } = e, b = Ny(nf, n), [v, y] = c.useState(null), x = we(t, zt => y(zt)), [S, C] = c.useState(null), E = Ey(S), k = (E == null ? void 0 : E.width) ?? 0, N = (E == null ? void 0 : E.height) ?? 0, T = r + (i !== "center" ? "-" + i : ""), M = typeof d == "number" ? d : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...d
    }, z = Array.isArray(u) ? u : [u], I = z.length > 0, Y = {
      padding: M,
      boundary: z.filter(lN),
      altBoundary: I
    }, {
      refs: H,
      floatingStyles: Q,
      placement: K,
      isPositioned: V,
      middlewareData: R
    } = uE({
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...zt) => nE(...zt, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [fE({
        mainAxis: o + N,
        alignmentAxis: s
      }), l && pE({
        mainAxis: !0,
        crossAxis: !1,
        limiter: p === "partial" ? mE() : void 0,
        ...Y
      }), l && hE({
        ...Y
      }), vE({
        ...Y,
        apply: ({
          elements: zt,
          rects: Vn,
          availableWidth: Sr,
          availableHeight: Pt
        }) => {
          const {
            width: Eo,
            height: ko
          } = Vn.reference, be = zt.floating.style;
          be.setProperty("--radix-popper-available-width", `${Sr}px`), be.setProperty("--radix-popper-available-height", `${Pt}px`), be.setProperty("--radix-popper-anchor-width", `${Eo}px`), be.setProperty("--radix-popper-anchor-height", `${ko}px`)
        }
      }), S && yE({
        element: S,
        padding: a
      }), cN({
        arrowWidth: k,
        arrowHeight: N
      }), f && gE({
        strategy: "referenceHidden",
        ...Y
      })]
    }), [$, L] = Ay(K), j = Et(w);
    dr(() => {
      V && (j == null || j())
    }, [V, j]);
    const P = (Z = R.arrow) == null ? void 0 : Z.x,
      D = (G = R.arrow) == null ? void 0 : G.y,
      W = ((ne = R.arrow) == null ? void 0 : ne.centerOffset) !== 0,
      [F, B] = c.useState();
    return dr(() => {
      v && B(window.getComputedStyle(v).zIndex)
    }, [v]), m.jsx("div", {
      ref: H.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...Q,
        transform: V ? Q.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: F,
        "--radix-popper-transform-origin": [(Ee = R.transformOrigin) == null ? void 0 : Ee.x, (br = R.transformOrigin) == null ? void 0 : br.y].join(" "),
        ...((cn = R.hide) == null ? void 0 : cn.referenceHidden) && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      },
      dir: e.dir,
      children: m.jsx(iN, {
        scope: n,
        placedSide: $,
        onArrowChange: C,
        arrowX: P,
        arrowY: D,
        shouldHideArrow: W,
        children: m.jsx(fe.div, {
          "data-side": $,
          "data-align": L,
          ...g,
          ref: x,
          style: {
            ...g.style,
            animation: V ? void 0 : "none"
          }
        })
      })
    })
  });
My.displayName = nf;
var Ty = "PopperArrow",
  aN = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  },
  _y = c.forwardRef(function(t, n) {
    const {
      __scopePopper: r,
      ...o
    } = t, i = sN(Ty, r), s = aN[i.placedSide];
    return m.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        } [i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        } [i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0
      },
      children: m.jsx(rN, {
        ...o,
        ref: n,
        style: {
          ...o.style,
          display: "block"
        }
      })
    })
  });
_y.displayName = Ty;

function lN(e) {
  return e !== null
}
var cN = e => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, v, y;
    const {
      placement: n,
      rects: r,
      middlewareData: o
    } = t, s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [u, d] = Ay(n), p = {
      start: "0%",
      center: "50%",
      end: "100%"
    } [d], f = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2, h = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let w = "",
      g = "";
    return u === "bottom" ? (w = s ? p : `${f}px`, g = `${-l}px`) : u === "top" ? (w = s ? p : `${f}px`, g = `${r.floating.height+l}px`) : u === "right" ? (w = `${-l}px`, g = s ? p : `${h}px`) : u === "left" && (w = `${r.floating.width+l}px`, g = s ? p : `${h}px`), {
      data: {
        x: w,
        y: g
      }
    }
  }
});

function Ay(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n]
}
var Oy = Py,
  rf = $y,
  jy = My,
  Dy = _y,
  of = "Popover",
  [Iy, gR] = Un(of, [nl]),
  zi = nl(),
  [uN, Wn] = Iy(of),
  Ly = e => {
    const {
      __scopePopover: t,
      children: n,
      open: r,
      defaultOpen: o,
      onOpenChange: i,
      modal: s = !1
    } = e, a = zi(t), l = c.useRef(null), [u, d] = c.useState(!1), [p = !1, f] = Ii({
      prop: r,
      defaultProp: o,
      onChange: i
    });
    return m.jsx(Oy, {
      ...a,
      children: m.jsx(uN, {
        scope: t,
        contentId: rr(),
        triggerRef: l,
        open: p,
        onOpenChange: f,
        onOpenToggle: c.useCallback(() => f(h => !h), [f]),
        hasCustomAnchor: u,
        onCustomAnchorAdd: c.useCallback(() => d(!0), []),
        onCustomAnchorRemove: c.useCallback(() => d(!1), []),
        modal: s,
        children: n
      })
    })
  };
Ly.displayName = of;
var Fy = "PopoverAnchor",
  dN = c.forwardRef((e, t) => {
    const {
      __scopePopover: n,
      ...r
    } = e, o = Wn(Fy, n), i = zi(n), {
      onCustomAnchorAdd: s,
      onCustomAnchorRemove: a
    } = o;
    return c.useEffect(() => (s(), () => a()), [s, a]), m.jsx(rf, {
      ...i,
      ...r,
      ref: t
    })
  });
dN.displayName = Fy;
var zy = "PopoverTrigger",
  By = c.forwardRef((e, t) => {
    const {
      __scopePopover: n,
      ...r
    } = e, o = Wn(zy, n), i = zi(n), s = we(t, o.triggerRef), a = m.jsx(fe.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Ky(o.open),
      ...r,
      ref: s,
      onClick: X(e.onClick, o.onOpenToggle)
    });
    return o.hasCustomAnchor ? a : m.jsx(rf, {
      asChild: !0,
      ...i,
      children: a
    })
  });
By.displayName = zy;
var sf = "PopoverPortal",
  [fN, pN] = Iy(sf, {
    forceMount: void 0
  }),
  Uy = e => {
    const {
      __scopePopover: t,
      forceMount: n,
      children: r,
      container: o
    } = e, i = Wn(sf, t);
    return m.jsx(fN, {
      scope: t,
      forceMount: n,
      children: m.jsx(kt, {
        present: n || i.open,
        children: m.jsx(Za, {
          asChild: !0,
          container: o,
          children: r
        })
      })
    })
  };
Uy.displayName = sf;
var ho = "PopoverContent",
  Wy = c.forwardRef((e, t) => {
    const n = pN(ho, e.__scopePopover),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = Wn(ho, e.__scopePopover);
    return m.jsx(kt, {
      present: r || i.open,
      children: i.modal ? m.jsx(mN, {
        ...o,
        ref: t
      }) : m.jsx(hN, {
        ...o,
        ref: t
      })
    })
  });
Wy.displayName = ho;
var mN = c.forwardRef((e, t) => {
    const n = Wn(ho, e.__scopePopover),
      r = c.useRef(null),
      o = we(t, r),
      i = c.useRef(!1);
    return c.useEffect(() => {
      const s = r.current;
      if (s) return qa(s)
    }, []), m.jsx(Ri, {
      as: jn,
      allowPinchZoom: !0,
      children: m.jsx(Vy, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, s => {
          var a;
          s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus()
        }),
        onPointerDownOutside: X(e.onPointerDownOutside, s => {
          const a = s.detail.originalEvent,
            l = a.button === 0 && a.ctrlKey === !0,
            u = a.button === 2 || l;
          i.current = u
        }, {
          checkForDefaultPrevented: !1
        }),
        onFocusOutside: X(e.onFocusOutside, s => s.preventDefault(), {
          checkForDefaultPrevented: !1
        })
      })
    })
  }),
  hN = c.forwardRef((e, t) => {
    const n = Wn(ho, e.__scopePopover),
      r = c.useRef(!1),
      o = c.useRef(!1);
    return m.jsx(Vy, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: i => {
        var s, a;
        (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1
      },
      onInteractOutside: i => {
        var l, u;
        (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const s = i.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault()
      }
    })
  }),
  Vy = c.forwardRef((e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onInteractOutside: d,
      ...p
    } = e, f = Wn(ho, n), h = zi(n);
    return Hd(), m.jsx(Qa, {
      asChild: !0,
      loop: !0,
      trapped: r,
      onMountAutoFocus: o,
      onUnmountAutoFocus: i,
      children: m.jsx(Xa, {
        asChild: !0,
        disableOutsidePointerEvents: s,
        onInteractOutside: d,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: u,
        onDismiss: () => f.onOpenChange(!1),
        children: m.jsx(jy, {
          "data-state": Ky(f.open),
          role: "dialog",
          id: f.contentId,
          ...h,
          ...p,
          ref: t,
          style: {
            ...p.style,
            "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
            "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
            "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      })
    })
  }),
  Hy = "PopoverClose",
  vN = c.forwardRef((e, t) => {
    const {
      __scopePopover: n,
      ...r
    } = e, o = Wn(Hy, n);
    return m.jsx(fe.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: X(e.onClick, () => o.onOpenChange(!1))
    })
  });
vN.displayName = Hy;
var gN = "PopoverArrow",
  yN = c.forwardRef((e, t) => {
    const {
      __scopePopover: n,
      ...r
    } = e, o = zi(n);
    return m.jsx(Dy, {
      ...o,
      ...r,
      ref: t
    })
  });
yN.displayName = gN;

function Ky(e) {
  return e ? "open" : "closed"
}
var wN = Ly,
  xN = By,
  bN = Uy,
  Gy = Wy;
const SN = wN,
  CN = xN,
  Yy = c.forwardRef(({
    className: e,
    align: t = "center",
    sideOffset: n = 4,
    ...r
  }, o) => m.jsx(bN, {
    children: m.jsx(Gy, {
      ref: o,
      align: t,
      sideOffset: n,
      className: ue("z-50 w-72 rounded-md border bg-transparent p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
      ...r
    })
  }));
Yy.displayName = Gy.displayName;

function EN({
  options: e,
  value: t,
  onValueChange: n,
  placeholder: r = "Select an option...",
  buttonClassName: o = "w-[200px] justify-between",
  inputPlaceholder: i = "Search..."
}) {
  var l;
  const [s, a] = c.useState(!1);
  return m.jsxs(SN, {
    open: s,
    onOpenChange: a,
    children: [m.jsx(CN, {
      asChild: !0,
      className: " flex items-center justify-between",
      children: m.jsxs(Ht, {
        variant: "outline",
        role: "combobox",
        "aria-expanded": s,
        className: o,
        children: [t ? (l = e.find(u => u.value === t)) == null ? void 0 : l.label : r, m.jsx(D3, {
          className: "ml-2 h-4 w-4 shrink-0 opacity-50"
        })]
      })
    }), m.jsx(Yy, {
      className: "w-[200px] p-0",
      children: m.jsxs(gy, {
        children: [m.jsx(yy, {
          placeholder: i
        }), m.jsxs(wy, {
          children: [m.jsx(xy, {
            children: "No option found."
          }), m.jsx(by, {
            children: e.map(u => m.jsxs(Sy, {
              value: u.value,
              onSelect: d => {
                n(d === t ? "" : d), a(!1)
              },
              children: [m.jsx(Qd, {
                className: ue("mr-2 h-4 w-4", t === u.value ? "opacity-100" : "opacity-0")
              }), u.label]
            }, u.value))
          })]
        })]
      })
    })]
  })
}

function kN({
  reportData: e,
  setReportData: t
}) {
  const n = [{
    value: "Question",
    label: "Question"
  }, {
    value: "Bug",
    label: "Bug"
  }, {
    value: "Report",
    label: "Report"
  }];
  return m.jsx(EN, {
    options: n,
    value: e.type,
    onValueChange: r => {
      if (!r) return console.log("[DEBUG] (ReportTypeSelect) value is null");
      t({
        ...e,
        type: r
      })
    },
    placeholder: "Report Type",
    buttonClassName: "bg-background border-[2px] w-full transition-all font-main text-white",
    inputPlaceholder: "Search Report Type..."
  })
}

function NN(e) {
  const t = c.useRef({
    value: e,
    previous: e
  });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
var af = "Checkbox",
  [PN, yR] = Un(af),
  [RN, $N] = PN(af),
  Xy = c.forwardRef((e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: i,
      required: s,
      disabled: a,
      value: l = "on",
      onCheckedChange: u,
      ...d
    } = e, [p, f] = c.useState(null), h = we(t, x => f(x)), w = c.useRef(!1), g = p ? !!p.closest("form") : !0, [b = !1, v] = Ii({
      prop: o,
      defaultProp: i,
      onChange: u
    }), y = c.useRef(b);
    return c.useEffect(() => {
      const x = p == null ? void 0 : p.form;
      if (x) {
        const S = () => v(y.current);
        return x.addEventListener("reset", S), () => x.removeEventListener("reset", S)
      }
    }, [p, v]), m.jsxs(RN, {
      scope: n,
      state: b,
      disabled: a,
      children: [m.jsx(fe.button, {
        type: "button",
        role: "checkbox",
        "aria-checked": or(b) ? "mixed" : b,
        "aria-required": s,
        "data-state": qy(b),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: l,
        ...d,
        ref: h,
        onKeyDown: X(e.onKeyDown, x => {
          x.key === "Enter" && x.preventDefault()
        }),
        onClick: X(e.onClick, x => {
          v(S => or(S) ? !0 : !S), g && (w.current = x.isPropagationStopped(), w.current || x.stopPropagation())
        })
      }), g && m.jsx(MN, {
        control: p,
        bubbles: !w.current,
        name: r,
        value: l,
        checked: b,
        required: s,
        disabled: a,
        style: {
          transform: "translateX(-100%)"
        }
      })]
    })
  });
Xy.displayName = af;
var Qy = "CheckboxIndicator",
  Zy = c.forwardRef((e, t) => {
    const {
      __scopeCheckbox: n,
      forceMount: r,
      ...o
    } = e, i = $N(Qy, n);
    return m.jsx(kt, {
      present: r || or(i.state) || i.state === !0,
      children: m.jsx(fe.span, {
        "data-state": qy(i.state),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: {
          pointerEvents: "none",
          ...e.style
        }
      })
    })
  });
Zy.displayName = Qy;
var MN = e => {
  const {
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  } = e, i = c.useRef(null), s = NN(n), a = Ey(t);
  return c.useEffect(() => {
    const l = i.current,
      u = window.HTMLInputElement.prototype,
      p = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (s !== n && p) {
      const f = new Event("click", {
        bubbles: r
      });
      l.indeterminate = or(n), p.call(l, or(n) ? !1 : n), l.dispatchEvent(f)
    }
  }, [s, n, r]), m.jsx("input", {
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: or(n) ? !1 : n,
    ...o,
    tabIndex: -1,
    ref: i,
    style: {
      ...e.style,
      ...a,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  })
};

function or(e) {
  return e === "indeterminate"
}

function qy(e) {
  return or(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
var Jy = Xy,
  TN = Zy;
const e1 = c.forwardRef(({
  className: e,
  ...t
}, n) => m.jsx(Jy, {
  ref: n,
  className: ue("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e),
  ...t,
  children: m.jsx(TN, {
    className: ue("flex items-center justify-center text-current"),
    children: m.jsx(Qd, {
      className: "h-4 w-4"
    })
  })
}));
e1.displayName = Jy.displayName;
const Ei = c.forwardRef(({
  className: e,
  type: t,
  ...n
}, r) => m.jsx("input", {
  type: t,
  className: ue("flex h-10 w-full transition-all rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[2px]  focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50", e),
  ref: r,
  ...n
}));
Ei.displayName = "Input";
const _N = {
    title: "",
    type: "Report",
    description: "",
    reportNearestPlayers: !1
  },
  AN = ({
    reportMenuVisible: e,
    setReportMenuVisible: t,
    reportData: n,
    setReportData: r
  }) => m.jsx(yk, {
    open: e,
    onOpenChange: o => {
      o || Yt("hideFrame"), t(o)
    },
    children: m.jsxs(W0, {
      className: "bg-[#1a1a1a] border-[2px] rounded-[8px]",
      children: [m.jsx(V0, {
        children: m.jsxs(H0, {
          className: "font-main mb-2 text-lg flex justify-center items-center gap-[5px]",
          children: [m.jsx(u0, {
            size: 18,
            className: "text-primary mb-[1px]"
          }), "uxReports Menu"]
        })
      }), m.jsx("form", {
        onSubmit: o => {
          o.preventDefault(), t(!1), Yt("hideFrame"), Yt("reportmenu:nuicb:sendreport", n), r(_N)
        },
        children: m.jsx("div", {
          className: "w-full h-full",
          children: m.jsxs("div", {
            className: "grid grid-cols-2 mt-2 gap-4",
            children: [m.jsx(Ei, {
              type: "text",
              className: "outline-none text-sm font-main w-full h-full border-[2px] bg-background ml-auto py-2 rounded transition-all",
              placeholder: "Title",
              onChange: o => {
                const i = {
                  ...n,
                  title: o.target.value
                };
                r(i)
              },
              required: !0
            }), m.jsx(kN, {
              reportData: n,
              setReportData: r
            }), m.jsx(Ei, {
              type: "text",
              className: "outline-none col-span-2 font-main w-full h-full border-[2px] bg-background ml-auto p-2 rounded transition-all",
              placeholder: "Description...",
              onChange: o => {
                const i = {
                  ...n,
                  description: o.target.value
                };
                r(i)
              },
              required: !0
            }), m.jsx("div", {
              className: "w-full h-full flex col-span-2 items-center justify-center",
              children: m.jsxs("div", {
                className: "items-center flex space-x-3 border w-full p-[6px] rounded-[8px] hover:cursor-pointer hover:border-primary transition-all z-20",
                children: [m.jsx(e1, {
                  id: "checkbox1",
                  checked: n.reportNearestPlayers,
                  onCheckedChange: o => {
                    const i = {
                      ...n,
                      reportNearestPlayers: o
                    };
                    r(i)
                  }
                }), m.jsxs("div", {
                  className: "grid gap-[2px] hover:!cursor-pointer w-full leading-none",
                  children: [m.jsx("label", {
                    htmlFor: "checkbox1",
                    className: "text-sm font-medium hover:!cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    children: "Send players near you?"
                  }), m.jsx("label", {
                    htmlFor: "checkbox1",
                    className: "text-xs hover:!cursor-pointer text-muted-foreground",
                    children: "Sends a list of every player near you in the report details."
                  })]
                })]
              })
            }), m.jsx(Ht, {
              className: "text-sm gap-1 font-bold font-geist rounded-[2px] m-0 border-[2px] col-span-2",
              type: "submit",
              children: "Submit Report"
            })]
          })
        })
      })]
    })
  });

function ON(e) {
  return ln({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M249.334 22.717c-18.64 2.424-35.677 23.574-37.043 51.49v.02c-.057 1.186-.097 2.38-.097 3.59 0 16.362 5.658 30.827 13.942 40.818l10.127 12.213-15.592 2.933c-10.75 2.025-18.622 7.702-25.373 16.978-2.285 3.14-4.384 6.707-6.31 10.62-57.54-6.44-97.91-21.06-97.91-37.952 0-17.363 42.647-31.983 102.75-37.97-.213-2.51-.323-5.057-.323-7.636v-.002c0-.84.024-1.674.047-2.51-96.43 6.77-167.298 29.15-167.3 55.71-.002 25.33 64.462 46.86 154.074 54.67-.19.742-.394 1.465-.576 2.216-2.36 9.72-4.05 20.22-5.268 31.03-.01 0-.02 0-.03.002-.418 3.653-.78 7.34-1.095 11.046l.05-.005c-1.316 15.777-1.772 31.88-1.893 46.95h35.894l2.115 28.4c-68.24-4.994-118.444-21.004-118.444-39.843 0-13.243 24.83-24.89 63.27-32.33.3-4.056.66-8.115 1.076-12.162-76.42 9.353-129.17 29.168-129.172 52.086-.002 28.17 79.71 51.643 185.098 56.768l5.94 79.77c10.5 2.648 24.84 4.162 39.017 4.068 13.79-.092 27.235-1.71 36.45-4l5.263-79.846c105.308-5.14 184.935-28.605 184.935-56.76 0-23.013-53.196-42.895-130.13-52.2.304 4.02.557 8.047.755 12.07 38.883 7.43 63.965 19.17 63.965 32.536 0 18.84-49.804 34.85-117.908 39.844l1.87-28.402h34.18c-.012-15.113-.127-31.27-1.033-47.094.01 0 .02.002.032.004-.214-3.687-.472-7.352-.782-10.986l-.02-.002c-.94-11.157-2.367-21.984-4.546-31.967-.09-.405-.184-.803-.275-1.206 89.518-7.826 153.893-29.344 153.893-54.656 0-26.787-72.076-49.332-169.77-55.887.025.895.053 1.788.053 2.688 0 2.5-.104 4.97-.304 7.407 61.19 5.836 104.61 20.61 104.61 38.2 0 16.805-39.633 31.355-96.524 37.848-2.01-4.283-4.26-8.15-6.762-11.505-6.83-9.167-15.063-14.81-27.14-16.682l-15.913-2.47 10.037-12.59c6.928-8.69 11.912-20.715 13.057-34.268h.002c.163-1.95.25-3.93.25-5.938 0-.77-.022-1.532-.048-2.29-.015-.48-.033-.958-.057-1.434h-.002c-1.48-29.745-20.507-51.3-41.076-51.3-2.528 0-3.966-.087-4.03-.08h-.003zM194.54 355.822c-97.11 6.655-168.573 29.11-168.573 55.8 0 31.932 102.243 57.815 228.367 57.815S482.7 443.555 482.7 411.623c0-26.608-71.02-49.004-167.67-55.736l-.655 9.93c60.363 6.055 103.074 20.956 103.074 38.394 0 22.81-73.032 41.298-163.12 41.298-90.088 0-163.12-18.49-163.12-41.297 0-17.533 43.18-32.502 104.07-38.493l-.74-9.895z"
      },
      child: []
    }]
  })(e)
}

function jN(e) {
  return ln({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"
      },
      child: []
    }]
  })(e)
}
const Om = ["Bug", "Question", "Report"],
  DN = () => {
    const e = new Date,
      t = e.getHours(),
      n = e.getMinutes(),
      r = `${e.getMonth()+1}/${e.getDate()}/${e.getFullYear()}`;
    return `${`${t}:${n<10?"0":""}${n}`} ${r}`
  };
Array.from({
  length: 100
}, (e, t) => ({
  id: t,
  type: Om[Math.floor(Math.random() * Om.length)],
  description: "Very Very racist personeeeeeeeeeeeeeeeee!",
  playerName: `Test: ${t}`,
  timedate: DN(),
  title: `Title ${t}`,
  nearestPlayers: []
}));
const Or = {
    id: 0,
    playerName: "",
    type: "",
    description: "",
    timedate: "",
    title: "",
    messages: [],
    reportId: "A1"
  },
  IN = ({
    reports: e,
    myReports: t
  }) => {
    const [n, r] = c.useState(Or), [o, i] = c.useState(!1), [s, a] = c.useState(!1), [l, u] = c.useState("");
    return m.jsxs(m.Fragment, {
      children: [m.jsx(nr, {
        className: "w-full h-full",
        children: m.jsx("div", {
          className: "grid grid-cols-1 m-5 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
          children: e.length !== 0 ? m.jsx(m.Fragment, {
            children: Object.values(e).map((d, p) => d ? m.jsx(m.Fragment, {
              children: m.jsxs("div", {
                onClick: () => {
                  r(d), i(!0)
                },
                className: "flex hover:cursor-pointer transition-all select-none hover:-translate-y-1 flex-col py-1 px-2  bg-secondary border-[2px] border-secondary-foreground rounded text-white",
                children: [m.jsxs("p", {
                  className: "flex items-center",
                  children: [m.jsx("span", {
                    className: "truncate max-w-[100px] text-sm",
                    children: d.title
                  }), m.jsx("span", {
                    className: "ml-auto bg-background px-1 font-main text-sm",
                    children: d.type
                  })]
                }), m.jsxs("div", {
                  className: "flex items-center mt-2",
                  children: [m.jsx("p", {
                    className: "text-xs rounded-[2px] text-white bg-background text-opacity-50",
                    children: d.reportId
                  }), m.jsx("p", {
                    className: "ml-auto rounded-[2px] bg-background px-2 font-main text-xs opacity-50",
                    children: d.timedate
                  })]
                })]
              }, p)
            }) : console.log("[DEBUG] (Reports/map) report is null"))
          }) : m.jsx(m.Fragment, {
            children: m.jsx("div", {
              className: "font-main",
              children: t ? "You have no active reports." : "No Reports available."
            })
          })
        })
      }), m.jsxs(Ct, {
        opened: o,
        centered: !0,
        size: "lg",
        onClose: () => {
          i(!1), r(Or)
        },
        classNames: {
          body: "border-[2px] bg-secondary"
        },
        withCloseButton: !1,
        children: [m.jsxs("div", {
          className: "flex flex-col gap-1 justify-center p-2 rounded",
          children: [m.jsxs("div", {
            className: "flex m-2 font-main text-white",
            children: [m.jsx("p", {
              children: n.title
            }), m.jsxs("div", {
              className: "ml-auto flex  gap-2 justify-center items-center",
              children: [m.jsx("p", {
                className: "bg-background rounded-[2px] p-1 text-sm",
                children: n.reportId
              }), m.jsx("p", {
                className: "bg-background rounded-[2px] p-1 text-sm",
                children: n.type
              })]
            })]
          }), m.jsxs("div", {
            className: "rounded py-1 px-2 flex flex-col gap-2 justify-center",
            children: [m.jsx("p", {
              className: "text-white font-main",
              children: "Player Name"
            }), n.playerName, m.jsx("p", {
              className: "text-white font-main",
              children: "Report Description"
            }), n.description, n.messages && m.jsxs(m.Fragment, {
              children: [m.jsx("p", {
                className: "text-white font-main",
                children: "Report Messages"
              }), m.jsx(nr, {
                className: "h-[20dvh] bg-background border-[2px]",
                children: m.jsx("div", {
                  className: "flex flex-col gap-2",
                  children: n.messages.map((d, p) => m.jsx(m.Fragment, {
                    children: m.jsx("div", {
                      className: "bg-secondary py-1 px-2 m-2 rounded-[2px] border-[2px]",
                      children: m.jsxs("div", {
                        className: "flex items-center justify-center font-main",
                        children: [m.jsxs("span", {
                          className: "text-white",
                          children: [d.playerName, " ", "(ID -", " ", d.playerId, "):"]
                        }), m.jsx("span", {
                          className: "ml-1 max-w-[240px] break-words",
                          children: d.data
                        }), m.jsx("p", {
                          className: "ml-auto bg-background px-2 py-1 flex justify-center items-center gap-1 border-[2px] font-main opacity-50 text-xs",
                          children: d.timedate
                        })]
                      })
                    }, p)
                  }))
                })
              })]
            }), n.nearestPlayers && m.jsxs(m.Fragment, {
              children: [m.jsx("p", {
                className: "text-white font-main",
                children: "Nearest Players"
              }), m.jsx(nr, {
                className: "max-h-[30dvh] bg-background border-[2px]",
                children: m.jsx("div", {
                  className: " py-4 px-4 rounded-[2px] gap-2 grid grid-cols-4 font-mwwwwwwwwwwwain text-sm",
                  children: n.nearestPlayers.length > 0 && n.nearestPlayers.map((d, p) => m.jsx(m.Fragment, {
                    children: m.jsxs("div", {
                      className: "bg-secondary py-1 px-2 flex items-center",
                      children: [m.jsxs("div", {
                        className: "p-1 flex items-center text-white",
                        children: ["[", d.id, "]", " ", m.jsx("p", {
                          className: "ml-1 truncate max-w-[50px]",
                          children: d.name
                        })]
                      }), m.jsxs("p", {
                        className: "ml-auto flex items-center bg-background rounded-[2px] px-1",
                        children: [m.jsx(d4, {
                          className: "mr-1"
                        }), " ", d.distance]
                      })]
                    }, p)
                  }))
                })
              })]
            })]
          })]
        }), m.jsxs("div", {
          className: "flex justify-end items-center mt-4 gap-2 font-main",
          children: [m.jsxs(Ht, {
            className: "text-xs rounded-[2px] m-0 border-[2px] bg-secondary",
            onClick: () => {
              a(!0)
            },
            children: [m.jsx(jN, {
              size: 16,
              className: "mr-1"
            }), " Send Message"]
          }), !t && m.jsxs(m.Fragment, {
            children: [m.jsxs(Ht, {
              className: "text-xs rounded-[2px] m-0 border-[2px] bg-secondary",
              onClick: () => {
                Yt("reportmenu:nuicb:goto", n), r(Or), i(!1)
              },
              children: [m.jsx(ON, {
                className: "mr-1"
              }), " Goto"]
            }), m.jsxs(Ht, {
              className: "text-xs rounded-[2px] m-0 border-[2px] bg-secondary",
              onClick: () => {
                Yt("reportmenu:nuicb:bring", n), r(Or), i(!1)
              },
              children: [m.jsx(l4, {
                className: "mr-1"
              }), " Bring"]
            })]
          }), m.jsxs(Ht, {
            className: "text-xs rounded-[2px] m-0 border-[2px] text-white",
            onClick: () => {
              const d = {
                ...n,
                isMyReportsPage: t
              };
              Yt("reportmenu:nuicb:delete", d), i(!1), r(Or)
            },
            children: [m.jsx(sm, {
              size: 16,
              strokeWidth: 2.5,
              className: "mr-1"
            }), t ? "Close" : "Conclude", " Report"]
          })]
        })]
      }), m.jsx(Ct, {
        opened: s,
        withCloseButton: !1,
        onClose: () => {
          a(!1)
        },
        centered: !0,
        classNames: {
          body: "bg-secondary border-[2px]"
        },
        children: m.jsxs("div", {
          className: "font-main",
          children: [m.jsx("p", {
            className: "mb-1",
            children: "Send a message"
          }), m.jsxs("form", {
            className: "flex items-center gap-1",
            onSubmit: d => {
              d.preventDefault(), Yt("reportmenu:nuicb:sendmessage", {
                report: n,
                messageQuery: l
              }), a(!1), i(!1), r(Or), u("")
            },
            children: [m.jsx(Ei, {
              className: "w-full focus:!ring-1",
              value: l,
              onChange: d => {
                u(d.target.value)
              },
              placeholder: "Message..."
            }), m.jsx(Ht, {
              type: "submit",
              className: "border-[2px] p-4 rounded-[2px] bg-background h-[36px] text-white",
              children: m.jsx(sm, {
                size: 16,
                strokeWidth: 2.5
              })
            })]
          })]
        })
      })]
    })
  };

function t1(e) {
  const t = e + "CollectionProvider",
    [n, r] = Un(t),
    [o, i] = n(t, {
      collectionRef: {
        current: null
      },
      itemMap: new Map
    }),
    s = h => {
      const {
        scope: w,
        children: g
      } = h, b = O.useRef(null), v = O.useRef(new Map).current;
      return m.jsx(o, {
        scope: w,
        itemMap: v,
        collectionRef: b,
        children: g
      })
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = O.forwardRef((h, w) => {
      const {
        scope: g,
        children: b
      } = h, v = i(a, g), y = we(w, v.collectionRef);
      return m.jsx(jn, {
        ref: y,
        children: b
      })
    });
  l.displayName = a;
  const u = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    p = O.forwardRef((h, w) => {
      const {
        scope: g,
        children: b,
        ...v
      } = h, y = O.useRef(null), x = we(w, y), S = i(u, g);
      return O.useEffect(() => (S.itemMap.set(y, {
        ref: y,
        ...v
      }), () => void S.itemMap.delete(y))), m.jsx(jn, {
        [d]: "",
        ref: x,
        children: b
      })
    });
  p.displayName = u;

  function f(h) {
    const w = i(e + "CollectionConsumer", h);
    return O.useCallback(() => {
      const b = w.collectionRef.current;
      if (!b) return [];
      const v = Array.from(b.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort((S, C) => v.indexOf(S.ref.current) - v.indexOf(C.ref.current))
    }, [w.collectionRef, w.itemMap])
  }
  return [{
    Provider: s,
    Slot: l,
    ItemSlot: p
  }, f, r]
}
var LN = c.createContext(void 0);

function n1(e) {
  const t = c.useContext(LN);
  return e || t || "ltr"
}
var ic = "rovingFocusGroup.onEntryFocus",
  FN = {
    bubbles: !1,
    cancelable: !0
  },
  rl = "RovingFocusGroup",
  [wu, r1, zN] = t1(rl),
  [BN, o1] = Un(rl, [zN]),
  [UN, WN] = BN(rl),
  i1 = c.forwardRef((e, t) => m.jsx(wu.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: m.jsx(wu.Slot, {
      scope: e.__scopeRovingFocusGroup,
      children: m.jsx(VN, {
        ...e,
        ref: t
      })
    })
  }));
i1.displayName = rl;
var VN = c.forwardRef((e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      orientation: r,
      loop: o = !1,
      dir: i,
      currentTabStopId: s,
      defaultCurrentTabStopId: a,
      onCurrentTabStopIdChange: l,
      onEntryFocus: u,
      preventScrollOnEntryFocus: d = !1,
      ...p
    } = e, f = c.useRef(null), h = we(t, f), w = n1(i), [g = null, b] = Ii({
      prop: s,
      defaultProp: a,
      onChange: l
    }), [v, y] = c.useState(!1), x = Et(u), S = r1(n), C = c.useRef(!1), [E, k] = c.useState(0);
    return c.useEffect(() => {
      const N = f.current;
      if (N) return N.addEventListener(ic, x), () => N.removeEventListener(ic, x)
    }, [x]), m.jsx(UN, {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: g,
      onItemFocus: c.useCallback(N => b(N), [b]),
      onItemShiftTab: c.useCallback(() => y(!0), []),
      onFocusableItemAdd: c.useCallback(() => k(N => N + 1), []),
      onFocusableItemRemove: c.useCallback(() => k(N => N - 1), []),
      children: m.jsx(fe.div, {
        tabIndex: v || E === 0 ? -1 : 0,
        "data-orientation": r,
        ...p,
        ref: h,
        style: {
          outline: "none",
          ...e.style
        },
        onMouseDown: X(e.onMouseDown, () => {
          C.current = !0
        }),
        onFocus: X(e.onFocus, N => {
          const T = !C.current;
          if (N.target === N.currentTarget && T && !v) {
            const M = new CustomEvent(ic, FN);
            if (N.currentTarget.dispatchEvent(M), !M.defaultPrevented) {
              const z = S().filter(K => K.focusable),
                I = z.find(K => K.active),
                Y = z.find(K => K.id === g),
                Q = [I, Y, ...z].filter(Boolean).map(K => K.ref.current);
              l1(Q, d)
            }
          }
          C.current = !1
        }),
        onBlur: X(e.onBlur, () => y(!1))
      })
    })
  }),
  s1 = "RovingFocusGroupItem",
  a1 = c.forwardRef((e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      ...s
    } = e, a = rr(), l = i || a, u = WN(s1, n), d = u.currentTabStopId === l, p = r1(n), {
      onFocusableItemAdd: f,
      onFocusableItemRemove: h
    } = u;
    return c.useEffect(() => {
      if (r) return f(), () => h()
    }, [r, f, h]), m.jsx(wu.ItemSlot, {
      scope: n,
      id: l,
      focusable: r,
      active: o,
      children: m.jsx(fe.span, {
        tabIndex: d ? 0 : -1,
        "data-orientation": u.orientation,
        ...s,
        ref: t,
        onMouseDown: X(e.onMouseDown, w => {
          r ? u.onItemFocus(l) : w.preventDefault()
        }),
        onFocus: X(e.onFocus, () => u.onItemFocus(l)),
        onKeyDown: X(e.onKeyDown, w => {
          if (w.key === "Tab" && w.shiftKey) {
            u.onItemShiftTab();
            return
          }
          if (w.target !== w.currentTarget) return;
          const g = GN(w, u.orientation, u.dir);
          if (g !== void 0) {
            if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
            w.preventDefault();
            let v = p().filter(y => y.focusable).map(y => y.ref.current);
            if (g === "last") v.reverse();
            else if (g === "prev" || g === "next") {
              g === "prev" && v.reverse();
              const y = v.indexOf(w.currentTarget);
              v = u.loop ? YN(v, y + 1) : v.slice(y + 1)
            }
            setTimeout(() => l1(v))
          }
        })
      })
    })
  });
a1.displayName = s1;
var HN = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};

function KN(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}

function GN(e, t, n) {
  const r = KN(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return HN[r]
}

function l1(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({
        preventScroll: t
      }), document.activeElement !== n)) return
}

function YN(e, t) {
  return e.map((n, r) => e[(t + r) % e.length])
}
var XN = i1,
  QN = a1,
  xu = ["Enter", " "],
  ZN = ["ArrowDown", "PageUp", "Home"],
  c1 = ["ArrowUp", "PageDown", "End"],
  qN = [...ZN, ...c1],
  JN = {
    ltr: [...xu, "ArrowRight"],
    rtl: [...xu, "ArrowLeft"]
  },
  eP = {
    ltr: ["ArrowLeft"],
    rtl: ["ArrowRight"]
  },
  Bi = "Menu",
  [ki, tP, nP] = t1(Bi),
  [wr, u1] = Un(Bi, [nP, nl, o1]),
  ol = nl(),
  d1 = o1(),
  [rP, xr] = wr(Bi),
  [oP, Ui] = wr(Bi),
  f1 = e => {
    const {
      __scopeMenu: t,
      open: n = !1,
      children: r,
      dir: o,
      onOpenChange: i,
      modal: s = !0
    } = e, a = ol(t), [l, u] = c.useState(null), d = c.useRef(!1), p = Et(i), f = n1(o);
    return c.useEffect(() => {
      const h = () => {
          d.current = !0, document.addEventListener("pointerdown", w, {
            capture: !0,
            once: !0
          }), document.addEventListener("pointermove", w, {
            capture: !0,
            once: !0
          })
        },
        w = () => d.current = !1;
      return document.addEventListener("keydown", h, {
        capture: !0
      }), () => {
        document.removeEventListener("keydown", h, {
          capture: !0
        }), document.removeEventListener("pointerdown", w, {
          capture: !0
        }), document.removeEventListener("pointermove", w, {
          capture: !0
        })
      }
    }, []), m.jsx(Oy, {
      ...a,
      children: m.jsx(rP, {
        scope: t,
        open: n,
        onOpenChange: p,
        content: l,
        onContentChange: u,
        children: m.jsx(oP, {
          scope: t,
          onClose: c.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: d,
          dir: f,
          modal: s,
          children: r
        })
      })
    })
  };
f1.displayName = Bi;
var iP = "MenuAnchor",
  lf = c.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      ...r
    } = e, o = ol(n);
    return m.jsx(rf, {
      ...o,
      ...r,
      ref: t
    })
  });
lf.displayName = iP;
var cf = "MenuPortal",
  [sP, p1] = wr(cf, {
    forceMount: void 0
  }),
  m1 = e => {
    const {
      __scopeMenu: t,
      forceMount: n,
      children: r,
      container: o
    } = e, i = xr(cf, t);
    return m.jsx(sP, {
      scope: t,
      forceMount: n,
      children: m.jsx(kt, {
        present: n || i.open,
        children: m.jsx(Za, {
          asChild: !0,
          container: o,
          children: r
        })
      })
    })
  };
m1.displayName = cf;
var lt = "MenuContent",
  [aP, uf] = wr(lt),
  h1 = c.forwardRef((e, t) => {
    const n = p1(lt, e.__scopeMenu),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = xr(lt, e.__scopeMenu),
      s = Ui(lt, e.__scopeMenu);
    return m.jsx(ki.Provider, {
      scope: e.__scopeMenu,
      children: m.jsx(kt, {
        present: r || i.open,
        children: m.jsx(ki.Slot, {
          scope: e.__scopeMenu,
          children: s.modal ? m.jsx(lP, {
            ...o,
            ref: t
          }) : m.jsx(cP, {
            ...o,
            ref: t
          })
        })
      })
    })
  }),
  lP = c.forwardRef((e, t) => {
    const n = xr(lt, e.__scopeMenu),
      r = c.useRef(null),
      o = we(t, r);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return qa(i)
    }, []), m.jsx(df, {
      ...e,
      ref: o,
      trapFocus: n.open,
      disableOutsidePointerEvents: n.open,
      disableOutsideScroll: !0,
      onFocusOutside: X(e.onFocusOutside, i => i.preventDefault(), {
        checkForDefaultPrevented: !1
      }),
      onDismiss: () => n.onOpenChange(!1)
    })
  }),
  cP = c.forwardRef((e, t) => {
    const n = xr(lt, e.__scopeMenu);
    return m.jsx(df, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    })
  }),
  df = c.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEntryFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: p,
      onInteractOutside: f,
      onDismiss: h,
      disableOutsideScroll: w,
      ...g
    } = e, b = xr(lt, n), v = Ui(lt, n), y = ol(n), x = d1(n), S = tP(n), [C, E] = c.useState(null), k = c.useRef(null), N = we(t, k, b.onContentChange), T = c.useRef(0), M = c.useRef(""), z = c.useRef(0), I = c.useRef(null), Y = c.useRef("right"), H = c.useRef(0), Q = w ? Ri : c.Fragment, K = w ? {
      as: jn,
      allowPinchZoom: !0
    } : void 0, V = $ => {
      var Z, G;
      const L = M.current + $,
        j = S().filter(ne => !ne.disabled),
        P = document.activeElement,
        D = (Z = j.find(ne => ne.ref.current === P)) == null ? void 0 : Z.textValue,
        W = j.map(ne => ne.textValue),
        F = bP(W, L, D),
        B = (G = j.find(ne => ne.textValue === F)) == null ? void 0 : G.ref.current;
      (function ne(Ee) {
        M.current = Ee, window.clearTimeout(T.current), Ee !== "" && (T.current = window.setTimeout(() => ne(""), 1e3))
      })(L), B && setTimeout(() => B.focus())
    };
    c.useEffect(() => () => window.clearTimeout(T.current), []), Hd();
    const R = c.useCallback($ => {
      var j, P;
      return Y.current === ((j = I.current) == null ? void 0 : j.side) && CP($, (P = I.current) == null ? void 0 : P.area)
    }, []);
    return m.jsx(aP, {
      scope: n,
      searchRef: M,
      onItemEnter: c.useCallback($ => {
        R($) && $.preventDefault()
      }, [R]),
      onItemLeave: c.useCallback($ => {
        var L;
        R($) || ((L = k.current) == null || L.focus(), E(null))
      }, [R]),
      onTriggerLeave: c.useCallback($ => {
        R($) && $.preventDefault()
      }, [R]),
      pointerGraceTimerRef: z,
      onPointerGraceIntentChange: c.useCallback($ => {
        I.current = $
      }, []),
      children: m.jsx(Q, {
        ...K,
        children: m.jsx(Qa, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: X(i, $ => {
            var L;
            $.preventDefault(), (L = k.current) == null || L.focus({
              preventScroll: !0
            })
          }),
          onUnmountAutoFocus: s,
          children: m.jsx(Xa, {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            onFocusOutside: p,
            onInteractOutside: f,
            onDismiss: h,
            children: m.jsx(XN, {
              asChild: !0,
              ...x,
              dir: v.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: C,
              onCurrentTabStopIdChange: E,
              onEntryFocus: X(l, $ => {
                v.isUsingKeyboardRef.current || $.preventDefault()
              }),
              preventScrollOnEntryFocus: !0,
              children: m.jsx(jy, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": T1(b.open),
                "data-radix-menu-content": "",
                dir: v.dir,
                ...y,
                ...g,
                ref: N,
                style: {
                  outline: "none",
                  ...g.style
                },
                onKeyDown: X(g.onKeyDown, $ => {
                  const j = $.target.closest("[data-radix-menu-content]") === $.currentTarget,
                    P = $.ctrlKey || $.altKey || $.metaKey,
                    D = $.key.length === 1;
                  j && ($.key === "Tab" && $.preventDefault(), !P && D && V($.key));
                  const W = k.current;
                  if ($.target !== W || !qN.includes($.key)) return;
                  $.preventDefault();
                  const B = S().filter(Z => !Z.disabled).map(Z => Z.ref.current);
                  c1.includes($.key) && B.reverse(), wP(B)
                }),
                onBlur: X(e.onBlur, $ => {
                  $.currentTarget.contains($.target) || (window.clearTimeout(T.current), M.current = "")
                }),
                onPointerMove: X(e.onPointerMove, Ni($ => {
                  const L = $.target,
                    j = H.current !== $.clientX;
                  if ($.currentTarget.contains(L) && j) {
                    const P = $.clientX > H.current ? "right" : "left";
                    Y.current = P, H.current = $.clientX
                  }
                }))
              })
            })
          })
        })
      })
    })
  });
h1.displayName = lt;
var uP = "MenuGroup",
  ff = c.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      ...r
    } = e;
    return m.jsx(fe.div, {
      role: "group",
      ...r,
      ref: t
    })
  });
ff.displayName = uP;
var dP = "MenuLabel",
  v1 = c.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      ...r
    } = e;
    return m.jsx(fe.div, {
      ...r,
      ref: t
    })
  });
v1.displayName = dP;
var pa = "MenuItem",
  jm = "menu.itemSelect",
  il = c.forwardRef((e, t) => {
    const {
      disabled: n = !1,
      onSelect: r,
      ...o
    } = e, i = c.useRef(null), s = Ui(pa, e.__scopeMenu), a = uf(pa, e.__scopeMenu), l = we(t, i), u = c.useRef(!1), d = () => {
      const p = i.current;
      if (!n && p) {
        const f = new CustomEvent(jm, {
          bubbles: !0,
          cancelable: !0
        });
        p.addEventListener(jm, h => r == null ? void 0 : r(h), {
          once: !0
        }), f0(p, f), f.defaultPrevented ? u.current = !1 : s.onClose()
      }
    };
    return m.jsx(g1, {
      ...o,
      ref: l,
      disabled: n,
      onClick: X(e.onClick, d),
      onPointerDown: p => {
        var f;
        (f = e.onPointerDown) == null || f.call(e, p), u.current = !0
      },
      onPointerUp: X(e.onPointerUp, p => {
        var f;
        u.current || (f = p.currentTarget) == null || f.click()
      }),
      onKeyDown: X(e.onKeyDown, p => {
        const f = a.searchRef.current !== "";
        n || f && p.key === " " || xu.includes(p.key) && (p.currentTarget.click(), p.preventDefault())
      })
    })
  });
il.displayName = pa;
var g1 = c.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      disabled: r = !1,
      textValue: o,
      ...i
    } = e, s = uf(pa, n), a = d1(n), l = c.useRef(null), u = we(t, l), [d, p] = c.useState(!1), [f, h] = c.useState("");
    return c.useEffect(() => {
      const w = l.current;
      w && h((w.textContent ?? "").trim())
    }, [i.children]), m.jsx(ki.ItemSlot, {
      scope: n,
      disabled: r,
      textValue: o ?? f,
      children: m.jsx(QN, {
        asChild: !0,
        ...a,
        focusable: !r,
        children: m.jsx(fe.div, {
          role: "menuitem",
          "data-highlighted": d ? "" : void 0,
          "aria-disabled": r || void 0,
          "data-disabled": r ? "" : void 0,
          ...i,
          ref: u,
          onPointerMove: X(e.onPointerMove, Ni(w => {
            r ? s.onItemLeave(w) : (s.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus({
              preventScroll: !0
            }))
          })),
          onPointerLeave: X(e.onPointerLeave, Ni(w => s.onItemLeave(w))),
          onFocus: X(e.onFocus, () => p(!0)),
          onBlur: X(e.onBlur, () => p(!1))
        })
      })
    })
  }),
  fP = "MenuCheckboxItem",
  y1 = c.forwardRef((e, t) => {
    const {
      checked: n = !1,
      onCheckedChange: r,
      ...o
    } = e;
    return m.jsx(C1, {
      scope: e.__scopeMenu,
      checked: n,
      children: m.jsx(il, {
        role: "menuitemcheckbox",
        "aria-checked": ma(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": mf(n),
        onSelect: X(o.onSelect, () => r == null ? void 0 : r(ma(n) ? !0 : !n), {
          checkForDefaultPrevented: !1
        })
      })
    })
  });
y1.displayName = fP;
var w1 = "MenuRadioGroup",
  [pP, mP] = wr(w1, {
    value: void 0,
    onValueChange: () => {}
  }),
  x1 = c.forwardRef((e, t) => {
    const {
      value: n,
      onValueChange: r,
      ...o
    } = e, i = Et(r);
    return m.jsx(pP, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: i,
      children: m.jsx(ff, {
        ...o,
        ref: t
      })
    })
  });
x1.displayName = w1;
var b1 = "MenuRadioItem",
  S1 = c.forwardRef((e, t) => {
    const {
      value: n,
      ...r
    } = e, o = mP(b1, e.__scopeMenu), i = n === o.value;
    return m.jsx(C1, {
      scope: e.__scopeMenu,
      checked: i,
      children: m.jsx(il, {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": mf(i),
        onSelect: X(r.onSelect, () => {
          var s;
          return (s = o.onValueChange) == null ? void 0 : s.call(o, n)
        }, {
          checkForDefaultPrevented: !1
        })
      })
    })
  });
S1.displayName = b1;
var pf = "MenuItemIndicator",
  [C1, hP] = wr(pf, {
    checked: !1
  }),
  E1 = c.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      forceMount: r,
      ...o
    } = e, i = hP(pf, n);
    return m.jsx(kt, {
      present: r || ma(i.checked) || i.checked === !0,
      children: m.jsx(fe.span, {
        ...o,
        ref: t,
        "data-state": mf(i.checked)
      })
    })
  });
E1.displayName = pf;
var vP = "MenuSeparator",
  k1 = c.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      ...r
    } = e;
    return m.jsx(fe.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: t
    })
  });
k1.displayName = vP;
var gP = "MenuArrow",
  N1 = c.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      ...r
    } = e, o = ol(n);
    return m.jsx(Dy, {
      ...o,
      ...r,
      ref: t
    })
  });
N1.displayName = gP;
var yP = "MenuSub",
  [wR, P1] = wr(yP),
  Vo = "MenuSubTrigger",
  R1 = c.forwardRef((e, t) => {
    const n = xr(Vo, e.__scopeMenu),
      r = Ui(Vo, e.__scopeMenu),
      o = P1(Vo, e.__scopeMenu),
      i = uf(Vo, e.__scopeMenu),
      s = c.useRef(null),
      {
        pointerGraceTimerRef: a,
        onPointerGraceIntentChange: l
      } = i,
      u = {
        __scopeMenu: e.__scopeMenu
      },
      d = c.useCallback(() => {
        s.current && window.clearTimeout(s.current), s.current = null
      }, []);
    return c.useEffect(() => d, [d]), c.useEffect(() => {
      const p = a.current;
      return () => {
        window.clearTimeout(p), l(null)
      }
    }, [a, l]), m.jsx(lf, {
      asChild: !0,
      ...u,
      children: m.jsx(g1, {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": T1(n.open),
        ...e,
        ref: Ya(t, o.onTriggerChange),
        onClick: p => {
          var f;
          (f = e.onClick) == null || f.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), n.open || n.onOpenChange(!0))
        },
        onPointerMove: X(e.onPointerMove, Ni(p => {
          i.onItemEnter(p), !p.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
            n.onOpenChange(!0), d()
          }, 100))
        })),
        onPointerLeave: X(e.onPointerLeave, Ni(p => {
          var h, w;
          d();
          const f = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
          if (f) {
            const g = (w = n.content) == null ? void 0 : w.dataset.side,
              b = g === "right",
              v = b ? -5 : 5,
              y = f[b ? "left" : "right"],
              x = f[b ? "right" : "left"];
            i.onPointerGraceIntentChange({
              area: [{
                x: p.clientX + v,
                y: p.clientY
              }, {
                x: y,
                y: f.top
              }, {
                x,
                y: f.top
              }, {
                x,
                y: f.bottom
              }, {
                x: y,
                y: f.bottom
              }],
              side: g
            }), window.clearTimeout(a.current), a.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300)
          } else {
            if (i.onTriggerLeave(p), p.defaultPrevented) return;
            i.onPointerGraceIntentChange(null)
          }
        })),
        onKeyDown: X(e.onKeyDown, p => {
          var h;
          const f = i.searchRef.current !== "";
          e.disabled || f && p.key === " " || JN[r.dir].includes(p.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), p.preventDefault())
        })
      })
    })
  });
R1.displayName = Vo;
var $1 = "MenuSubContent",
  M1 = c.forwardRef((e, t) => {
    const n = p1(lt, e.__scopeMenu),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = xr(lt, e.__scopeMenu),
      s = Ui(lt, e.__scopeMenu),
      a = P1($1, e.__scopeMenu),
      l = c.useRef(null),
      u = we(t, l);
    return m.jsx(ki.Provider, {
      scope: e.__scopeMenu,
      children: m.jsx(kt, {
        present: r || i.open,
        children: m.jsx(ki.Slot, {
          scope: e.__scopeMenu,
          children: m.jsx(df, {
            id: a.contentId,
            "aria-labelledby": a.triggerId,
            ...o,
            ref: u,
            align: "start",
            side: s.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: d => {
              var p;
              s.isUsingKeyboardRef.current && ((p = l.current) == null || p.focus()), d.preventDefault()
            },
            onCloseAutoFocus: d => d.preventDefault(),
            onFocusOutside: X(e.onFocusOutside, d => {
              d.target !== a.trigger && i.onOpenChange(!1)
            }),
            onEscapeKeyDown: X(e.onEscapeKeyDown, d => {
              s.onClose(), d.preventDefault()
            }),
            onKeyDown: X(e.onKeyDown, d => {
              var h;
              const p = d.currentTarget.contains(d.target),
                f = eP[s.dir].includes(d.key);
              p && f && (i.onOpenChange(!1), (h = a.trigger) == null || h.focus(), d.preventDefault())
            })
          })
        })
      })
    })
  });
M1.displayName = $1;

function T1(e) {
  return e ? "open" : "closed"
}

function ma(e) {
  return e === "indeterminate"
}

function mf(e) {
  return ma(e) ? "indeterminate" : e ? "checked" : "unchecked"
}

function wP(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return
}

function xP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length])
}

function bP(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = xP(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter(u => u !== n));
  const l = s.find(u => u.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0
}

function SP(e, t) {
  const {
    x: n,
    y: r
  } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x,
      l = t[i].y,
      u = t[s].x,
      d = t[s].y;
    l > r != d > r && n < (u - a) * (r - l) / (d - l) + a && (o = !o)
  }
  return o
}

function CP(e, t) {
  if (!t) return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return SP(n, t)
}

function Ni(e) {
  return t => t.pointerType === "mouse" ? e(t) : void 0
}
var EP = f1,
  kP = lf,
  NP = m1,
  PP = h1,
  RP = ff,
  $P = v1,
  MP = il,
  TP = y1,
  _P = x1,
  AP = S1,
  OP = E1,
  jP = k1,
  DP = N1,
  IP = R1,
  LP = M1,
  hf = "DropdownMenu",
  [FP, xR] = Un(hf, [u1]),
  Be = u1(),
  [zP, _1] = FP(hf),
  A1 = e => {
    const {
      __scopeDropdownMenu: t,
      children: n,
      dir: r,
      open: o,
      defaultOpen: i,
      onOpenChange: s,
      modal: a = !0
    } = e, l = Be(t), u = c.useRef(null), [d = !1, p] = Ii({
      prop: o,
      defaultProp: i,
      onChange: s
    });
    return m.jsx(zP, {
      scope: t,
      triggerId: rr(),
      triggerRef: u,
      contentId: rr(),
      open: d,
      onOpenChange: p,
      onOpenToggle: c.useCallback(() => p(f => !f), [p]),
      modal: a,
      children: m.jsx(EP, {
        ...l,
        open: d,
        onOpenChange: p,
        dir: r,
        modal: a,
        children: n
      })
    })
  };
A1.displayName = hf;
var O1 = "DropdownMenuTrigger",
  j1 = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      disabled: r = !1,
      ...o
    } = e, i = _1(O1, n), s = Be(n);
    return m.jsx(kP, {
      asChild: !0,
      ...s,
      children: m.jsx(fe.button, {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Ya(t, i.triggerRef),
        onPointerDown: X(e.onPointerDown, a => {
          !r && a.button === 0 && a.ctrlKey === !1 && (i.onOpenToggle(), i.open || a.preventDefault())
        }),
        onKeyDown: X(e.onKeyDown, a => {
          r || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault())
        })
      })
    })
  });
j1.displayName = O1;
var BP = "DropdownMenuPortal",
  D1 = e => {
    const {
      __scopeDropdownMenu: t,
      ...n
    } = e, r = Be(t);
    return m.jsx(NP, {
      ...r,
      ...n
    })
  };
D1.displayName = BP;
var I1 = "DropdownMenuContent",
  L1 = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      ...r
    } = e, o = _1(I1, n), i = Be(n), s = c.useRef(!1);
    return m.jsx(PP, {
      id: o.contentId,
      "aria-labelledby": o.triggerId,
      ...i,
      ...r,
      ref: t,
      onCloseAutoFocus: X(e.onCloseAutoFocus, a => {
        var l;
        s.current || (l = o.triggerRef.current) == null || l.focus(), s.current = !1, a.preventDefault()
      }),
      onInteractOutside: X(e.onInteractOutside, a => {
        const l = a.detail.originalEvent,
          u = l.button === 0 && l.ctrlKey === !0,
          d = l.button === 2 || u;
        (!o.modal || d) && (s.current = !0)
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    })
  });
L1.displayName = I1;
var UP = "DropdownMenuGroup",
  WP = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      ...r
    } = e, o = Be(n);
    return m.jsx(RP, {
      ...o,
      ...r,
      ref: t
    })
  });
WP.displayName = UP;
var VP = "DropdownMenuLabel",
  F1 = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      ...r
    } = e, o = Be(n);
    return m.jsx($P, {
      ...o,
      ...r,
      ref: t
    })
  });
F1.displayName = VP;
var HP = "DropdownMenuItem",
  z1 = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      ...r
    } = e, o = Be(n);
    return m.jsx(MP, {
      ...o,
      ...r,
      ref: t
    })
  });
z1.displayName = HP;
var KP = "DropdownMenuCheckboxItem",
  B1 = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      ...r
    } = e, o = Be(n);
    return m.jsx(TP, {
      ...o,
      ...r,
      ref: t
    })
  });
B1.displayName = KP;
var GP = "DropdownMenuRadioGroup",
  YP = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      ...r
    } = e, o = Be(n);
    return m.jsx(_P, {
      ...o,
      ...r,
      ref: t
    })
  });
YP.displayName = GP;
var XP = "DropdownMenuRadioItem",
  U1 = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      ...r
    } = e, o = Be(n);
    return m.jsx(AP, {
      ...o,
      ...r,
      ref: t
    })
  });
U1.displayName = XP;
var QP = "DropdownMenuItemIndicator",
  W1 = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      ...r
    } = e, o = Be(n);
    return m.jsx(OP, {
      ...o,
      ...r,
      ref: t
    })
  });
W1.displayName = QP;
var ZP = "DropdownMenuSeparator",
  V1 = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      ...r
    } = e, o = Be(n);
    return m.jsx(jP, {
      ...o,
      ...r,
      ref: t
    })
  });
V1.displayName = ZP;
var qP = "DropdownMenuArrow",
  JP = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      ...r
    } = e, o = Be(n);
    return m.jsx(DP, {
      ...o,
      ...r,
      ref: t
    })
  });
JP.displayName = qP;
var eR = "DropdownMenuSubTrigger",
  H1 = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      ...r
    } = e, o = Be(n);
    return m.jsx(IP, {
      ...o,
      ...r,
      ref: t
    })
  });
H1.displayName = eR;
var tR = "DropdownMenuSubContent",
  K1 = c.forwardRef((e, t) => {
    const {
      __scopeDropdownMenu: n,
      ...r
    } = e, o = Be(n);
    return m.jsx(LP, {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    })
  });
K1.displayName = tR;
var nR = A1,
  rR = j1,
  oR = D1,
  G1 = L1,
  Y1 = F1,
  X1 = z1,
  Q1 = B1,
  Z1 = U1,
  q1 = W1,
  J1 = V1,
  ew = H1,
  tw = K1;
const iR = nR,
  sR = rR,
  aR = c.forwardRef(({
    className: e,
    inset: t,
    children: n,
    ...r
  }, o) => m.jsxs(ew, {
    ref: o,
    className: ue("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", t && "pl-8", e),
    ...r,
    children: [n, m.jsx(j3, {
      className: "ml-auto h-4 w-4"
    })]
  }));
aR.displayName = ew.displayName;
const lR = c.forwardRef(({
  className: e,
  ...t
}, n) => m.jsx(tw, {
  ref: n,
  className: ue("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
  ...t
}));
lR.displayName = tw.displayName;
const nw = c.forwardRef(({
  className: e,
  sideOffset: t = 4,
  ...n
}, r) => m.jsx(oR, {
  children: m.jsx(G1, {
    ref: r,
    sideOffset: t,
    className: ue("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
  })
}));
nw.displayName = G1.displayName;
const cR = c.forwardRef(({
  className: e,
  inset: t,
  ...n
}, r) => m.jsx(X1, {
  ref: r,
  className: ue("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t && "pl-8", e),
  ...n
}));
cR.displayName = X1.displayName;
const rw = c.forwardRef(({
  className: e,
  children: t,
  checked: n,
  ...r
}, o) => m.jsxs(Q1, {
  ref: o,
  className: ue("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
  checked: n,
  ...r,
  children: [m.jsx("span", {
    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    children: m.jsx(q1, {
      children: m.jsx(Qd, {
        className: "h-4 w-4"
      })
    })
  }), t]
}));
rw.displayName = Q1.displayName;
const uR = c.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => m.jsxs(Z1, {
  ref: r,
  className: ue("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
  ...n,
  children: [m.jsx("span", {
    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    children: m.jsx(q1, {
      children: m.jsx(I3, {
        className: "h-2 w-2 fill-current"
      })
    })
  }), t]
}));
uR.displayName = Z1.displayName;
const ow = c.forwardRef(({
  className: e,
  inset: t,
  ...n
}, r) => m.jsx(Y1, {
  ref: r,
  className: ue("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
  ...n
}));
ow.displayName = Y1.displayName;
const iw = c.forwardRef(({
  className: e,
  ...t
}, n) => m.jsx(J1, {
  ref: n,
  className: ue("-mx-1 my-1 h-px bg-muted", e),
  ...t
}));
iw.displayName = J1.displayName;
const dR = {
    title: "",
    type: "Report",
    description: "",
    reportNearestPlayers: !1
  },
  fR = {
    name: "vipex",
    id: "1",
    identifiers: ["hey", "hey2"],
    isStaff: !0
  },
  pR = () => {
    const [e, t] = c.useState(!1), [n, r] = c.useState(fR), [o, i] = c.useState(n.isStaff ? "reports" : "myreports"), [s, a] = c.useState(lu()), [l, u] = c.useState(dR), [d, p] = c.useState([]), [f, h] = c.useState(""), [w, g] = c.useState([]), [b, v] = c.useState([]), [y, x] = c.useState({
      Debug: !0,
      UseDiscordRestAPI: !0,
      AcePerm: "vadmin.staff",
      MaxDistance: 20,
      RoleIDs: {
        "839129247918194732": !0
      },
      ReportCommand: "report",
      ReportMenuCommand: "reports",
      NotificationPos: "top-center"
    }), [S, C] = c.useState({
      notifications: !0
    }), [E, k] = c.useState(!1), N = c.useCallback(F4(T => {
      g(((z, I) => z ? Object.values(z).filter(Y => {
        var L;
        if (!Y) return;
        const H = I.toLowerCase(),
          Q = (L = Y.id) == null ? void 0 : L.toString().toLowerCase(),
          K = Y.playerName.toLowerCase(),
          V = Y.title.toLowerCase(),
          R = Y.timedate.toLowerCase(),
          $ = Y.type.toLowerCase();
        return Q.includes(H) || K.includes(H) || V.includes(H) || R.includes(H) || $.includes(H)
      }) : [])(o === "reports" ? d : b, T)), k(!1)
    }, 300), [d, o, b]);
    return c.useEffect(() => {
      k(!0), N(f)
    }, [f, N]), Bt("nui:state:playerdata", r), Bt("nui:state:myreports", v), Bt("nui:state:reportmenu", a), Bt("nui:state:reports", p), Bt("nui:state:settings", C), Bt("nui:state:scriptconfig", x), Bt("nui:resetstates", () => {
      h("")
    }), Bt("setVisible", t), Bt("nui:notify", T => {
      !S.notifications || T.appearOnlyWhenNuiNotOpen && e || N4.success(T.title, {
        description: T.description,
        classNames: {
          toast: "font-main !bg-background !border !border-[2px] !rounded-[8px]",
          default: "rounded-[2px] bg-background border-[2px]"
        }
      })
    }), c.useEffect(() => {
      if (!e) return;
      const T = M => {
        ["Escape"].includes(M.code) && (lu() ? t(!e) : Yt("hideFrame"))
      };
      return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T)
    }, [e]), m.jsxs(m.Fragment, {
      children: [m.jsx(za, {
        mounted: e,
        transition: "fade-up",
        duration: 200,
        children: T => m.jsx(m.Fragment, {
          children: m.jsx("div", {
            className: "flex w-[100dvw] h-[100dvh] justify-center items-center",
            children: m.jsxs("div", {
              className: "min-w-[50dvw] min-h-[35dvw] bg-background rounded-[2px]",
              style: T,
              children: [m.jsxs("div", {
                className: "flex items-center",
                children: [m.jsxs("h1", {
                  className: "m-2 gap-[5px] relative flex justify-center bg-secondary items-center rounded px-4 py-1 font-main text-white border-[2px]",
                  children: [m.jsx(u0, {
                    size: 18,
                    className: "text-primary mb-[1px]"
                  }), "uxReports Menu"]
                }), m.jsxs(iR, {
                  children: [m.jsx(sR, {
                    asChild: !0,
                    children: m.jsx(Ht, {
                      className: "border-[2px] ml-auto rounded bg-secondary text-white mr-1",
                      children: m.jsx(c4, {
                        size: 13,
                        strokeWidth: 2.25
                      })
                    })
                  }), m.jsxs(nw, {
                    className: "bg-background font-main",
                    children: [m.jsx(ow, {
                      className: "text-center",
                      children: "Settings"
                    }), m.jsx(iw, {}), m.jsx(rw, {
                      checked: S.notifications,
                      onCheckedChange: M => {
                        C({
                          notifications: M
                        });
                        const z = {
                          notifications: M
                        };
                        C(z), Yt("reportmenu:nui:cb:settings", z)
                      },
                      children: "Notifications"
                    })]
                  })]
                })]
              }), m.jsx(Ud, {
                size: "xs"
              }), m.jsxs("div", {
                className: "flex relative items-center justify-center m-5",
                children: [m.jsx(Wd, {
                  className: "border-[2px] bg-secondary",
                  value: o,
                  onChange: M => {
                    i(M)
                  },
                  classNames: {
                    label: "mb-1 mr-1"
                  },
                  data: [{
                    value: "reports",
                    disabled: !n.isStaff,
                    label: m.jsx(m.Fragment, {
                      children: m.jsxs("div", {
                        className: "flex justify-center items-center gap-1 text-white",
                        children: [m.jsx(f4, {
                          size: 18,
                          className: "text-primary mt-[3px]"
                        }), "Reports"]
                      })
                    })
                  }, {
                    value: "myreports",
                    label: m.jsx(m.Fragment, {
                      children: m.jsxs("div", {
                        className: "flex justify-center items-center gap-1 text-white",
                        children: [m.jsx(u4, {
                          size: 18,
                          className: "text-primary mt-[3px]"
                        }), "My Reports"]
                      })
                    })
                  }]
                }), m.jsx("div", {
                  className: "absolute right-0 top-0 h-full flex items-center justify-center",
                  children: m.jsx(Ei, {
                    type: "text",
                    className: "outline-none w-full font-main h-[70%] text-sm border border-secondary-foreground] bg-secondary ml-auto py-[5px] px-[5px] rounded-[8px] focus:border-blue-400 transition-all focus:!ring-1",
                    placeholder: "Search...",
                    onChange: M => {
                      h(M.target.value)
                    }
                  })
                })]
              }), m.jsx("div", {
                className: "border-[1px] flex justify-center items-center h-[55dvh] w-[55dvw] rounded-[8px] m-5",
                children: E ? m.jsx("div", {
                  className: "text-center",
                  children: "Loading..."
                }) : m.jsx(IN, {
                  reports: f ? w : o === "reports" ? d : b,
                  myReports: o !== "reports"
                })
              }), m.jsx("p", {
                className: "font-main flex justify-end m-2",
                children: "discord.gg/uxdevelopment | V1.1.9"
              })]
            })
          })
        })
      }), m.jsx(AN, {
        reportMenuVisible: s,
        reportData: l,
        setReportData: u,
        setReportMenuVisible: a
      }), m.jsx(I4, {
        theme: "dark",
        position: y.NotificationPos
      })]
    })
  };
su.createRoot(document.getElementById("root")).render(m.jsx(O.StrictMode, {
  children: m.jsx(bh, {
    defaultColorScheme: "dark",
    children: m.jsx(pR, {})
  })
}));