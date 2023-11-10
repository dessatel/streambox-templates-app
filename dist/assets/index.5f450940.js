const p$1 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$1();
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n2, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n2[k];
      }
    });
  });
  return a;
}
var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject$1(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i2 = 0; i2 < 10; i2++) {
      test2["_" + String.fromCharCode(i2)] = i2;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject$1(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty$1.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i2 = 0; i2 < symbols.length; i2++) {
        if (propIsEnumerable.call(from, symbols[i2])) {
          to[symbols[i2]] = from[symbols[i2]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = objectAssign, n = 60103, p = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q = 60109, r$1 = 60110, t = 60112;
react_production_min.Suspense = 60113;
var u = 60115, v = 60116;
if ("function" === typeof Symbol && Symbol.for) {
  var w = Symbol.for;
  n = w("react.element");
  p = w("react.portal");
  react_production_min.Fragment = w("react.fragment");
  react_production_min.StrictMode = w("react.strict_mode");
  react_production_min.Profiler = w("react.profiler");
  q = w("react.provider");
  r$1 = w("react.context");
  t = w("react.forward_ref");
  react_production_min.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}
var x = "function" === typeof Symbol && Symbol.iterator;
function y$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = x && a[x] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B$1 = {};
function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B$1;
  this.updater = c || A;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
C.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D$1() {
}
D$1.prototype = C.prototype;
function E$1(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B$1;
  this.updater = c || A;
}
var F$1 = E$1.prototype = new D$1();
F$1.constructor = E$1;
l(F$1, C.prototype);
F$1.isPureReactComponent = true;
var G$1 = { current: null }, H$1 = Object.prototype.hasOwnProperty, I$1 = { key: true, ref: true, __self: true, __source: true };
function J(a, b, c) {
  var e, d = {}, k = null, h = null;
  if (null != b)
    for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)
      H$1.call(b, e) && !I$1.hasOwnProperty(e) && (d[e] = b[e]);
  var g = arguments.length - 2;
  if (1 === g)
    d.children = c;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
      f2[m2] = arguments[m2 + 2];
    d.children = f2;
  }
  if (a && a.defaultProps)
    for (e in g = a.defaultProps, g)
      void 0 === d[e] && (d[e] = g[e]);
  return { $$typeof: n, type: a, key: k, ref: h, props: d, _owner: G$1.current };
}
function K(a, b) {
  return { $$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return "object" === typeof a && null !== a && a.$$typeof === n;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var M$1 = /\/+/g;
function N$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function O$1(a, b, c, e, d) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n:
          case p:
            h = true;
        }
    }
  if (h)
    return h = a, d = d(h), a = "" === e ? "." + N$1(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M$1, "$&/") + "/"), O$1(d, b, c, "", function(a2) {
      return a2;
    })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M$1, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = "" === e ? "." : e + ":";
  if (Array.isArray(a))
    for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f2 = e + N$1(k, g);
      h += O$1(k, b, c, f2, d);
    }
  else if (f2 = y$1(a), "function" === typeof f2)
    for (a = f2.call(a), g = 0; !(k = a.next()).done; )
      k = k.value, f2 = e + N$1(k, g++), h += O$1(k, b, c, f2, d);
  else if ("object" === k)
    throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}
function P$1(a, b, c) {
  if (null == a)
    return a;
  var e = [], d = 0;
  O$1(a, e, "", "", function(a2) {
    return b.call(c, a2, d++);
  });
  return e;
}
function Q(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function(b2) {
      0 === a._status && (b2 = b2.default, a._status = 1, a._result = b2);
    }, function(b2) {
      0 === a._status && (a._status = 2, a._result = b2);
    });
  }
  if (1 === a._status)
    return a._result;
  throw a._result;
}
var R$1 = { current: null };
function S$1() {
  var a = R$1.current;
  if (null === a)
    throw Error(z(321));
  return a;
}
var T$1 = { ReactCurrentDispatcher: R$1, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G$1, IsSomeRendererActing: { current: false }, assign: l };
react_production_min.Children = { map: P$1, forEach: function(a, b, c) {
  P$1(a, function() {
    b.apply(this, arguments);
  }, c);
}, count: function(a) {
  var b = 0;
  P$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return P$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z(143));
  return a;
} };
react_production_min.Component = C;
react_production_min.PureComponent = E$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
react_production_min.cloneElement = function(a, b, c) {
  if (null === a || void 0 === a)
    throw Error(z(267, a));
  var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = G$1.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f2 in b)
      H$1.call(b, f2) && !I$1.hasOwnProperty(f2) && (e[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    e.children = c;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g[m2] = arguments[m2 + 2];
    e.children = g;
  }
  return {
    $$typeof: n,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};
react_production_min.createContext = function(a, b) {
  void 0 === b && (b = null);
  a = { $$typeof: r$1, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: u, type: a, compare: void 0 === b ? null : b };
};
react_production_min.useCallback = function(a, b) {
  return S$1().useCallback(a, b);
};
react_production_min.useContext = function(a, b) {
  return S$1().useContext(a, b);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b) {
  return S$1().useEffect(a, b);
};
react_production_min.useImperativeHandle = function(a, b, c) {
  return S$1().useImperativeHandle(a, b, c);
};
react_production_min.useLayoutEffect = function(a, b) {
  return S$1().useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return S$1().useMemo(a, b);
};
react_production_min.useReducer = function(a, b, c) {
  return S$1().useReducer(a, b, c);
};
react_production_min.useRef = function(a) {
  return S$1().useRef(a);
};
react_production_min.useState = function(a) {
  return S$1().useState(a);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var React$1 = react.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f2, g, h, k;
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
    var t2 = null, u2 = null, w2 = function() {
      if (null !== t2)
        try {
          var a = exports.unstable_now();
          t2(true, a);
          t2 = null;
        } catch (b) {
          throw setTimeout(w2, 0), b;
        }
    };
    f2 = function(a) {
      null !== t2 ? setTimeout(f2, 0, a) : (t2 = a, setTimeout(w2, 0));
    };
    g = function(a, b) {
      u2 = setTimeout(a, b);
    };
    h = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x2 = window.setTimeout, y2 = window.clearTimeout;
    if ("undefined" !== typeof console) {
      var z2 = window.cancelAnimationFrame;
      "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      "function" !== typeof z2 && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (null !== B2) {
        var a = exports.unstable_now();
        E2 = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b) {
          throw G2.postMessage(null), b;
        }
      } else
        A2 = false;
    };
    f2 = function(a) {
      B2 = a;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g = function(a, b) {
      C2 = x2(function() {
        a(exports.unstable_now());
      }, b);
    };
    h = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (void 0 !== e && 0 < I2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function J2(a) {
    a = a[0];
    return void 0 === a ? null : a;
  }
  function K2(a) {
    var b = a[0];
    if (void 0 !== b) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m2 = 2 * (d + 1) - 1, n2 = a[m2], v2 = m2 + 1, r2 = a[v2];
            if (void 0 !== n2 && 0 > I2(n2, c))
              void 0 !== r2 && 0 > I2(r2, n2) ? (a[d] = r2, a[v2] = c, d = v2) : (a[d] = n2, a[m2] = c, d = m2);
            else if (void 0 !== r2 && 0 > I2(r2, c))
              a[d] = r2, a[v2] = c, d = v2;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function I2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q2 = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b = J2(M2); null !== b; ) {
      if (null === b.callback)
        K2(M2);
      else if (b.startTime <= a)
        K2(M2), b.sortIndex = b.expirationTime, H2(L2, b);
      else
        break;
      b = J2(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (null !== J2(L2))
        R2 = true, f2(V2);
      else {
        var b = J2(M2);
        null !== b && g(U2, b.startTime - a);
      }
  }
  function V2(a, b) {
    R2 = false;
    S2 && (S2 = false, h());
    Q2 = true;
    var c = P2;
    try {
      T2(b);
      for (O2 = J2(L2); null !== O2 && (!(O2.expirationTime > b) || a && !exports.unstable_shouldYield()); ) {
        var d = O2.callback;
        if ("function" === typeof d) {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e = d(O2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? O2.callback = e : O2 === J2(L2) && K2(L2);
          T2(b);
        } else
          K2(L2);
        O2 = J2(L2);
      }
      if (null !== O2)
        var m2 = true;
      else {
        var n2 = J2(M2);
        null !== n2 && g(U2, n2.startTime - b);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c, Q2 = false;
    }
  }
  var W2 = k;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q2 || (R2 = true, f2(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = P2;
    }
    var c = P2;
    P2 = b;
    try {
      return a();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = P2;
    P2 = a;
    try {
      return b();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: N2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, H2(M2, a), null === J2(L2) && a === J2(M2) && (S2 ? h() : S2 = true, g(U2, c - d))) : (a.sortIndex = e, H2(L2, a), R2 || Q2 || (R2 = true, f2(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b = P2;
    return function() {
      var c = P2;
      P2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, m = objectAssign, r = scheduler.exports;
function y(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y(227));
var ba = /* @__PURE__ */ new Set(), ca = {};
function da(a, b) {
  ea(a, b);
  ea(a + "Capture", b);
}
function ea(a, b) {
  ca[a] = b;
  for (a = 0; a < b.length; a++)
    ba.add(b[a]);
}
var fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function na(a, b, c, d) {
  if (null === b || "undefined" === typeof b || ma(a, b, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function B(a, b, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  D[b] = new B(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    oa,
    pa
  );
  D[b] = new B(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f2 = null !== e ? 0 === e.type : d ? false : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? false : true;
  f2 || (na(b, c, e, d) && (c = null), d || null === e ? la(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var Ka = "function" === typeof Symbol && Symbol.iterator;
function La(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var Ma;
function Na(a) {
  if (void 0 === Ma)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ma = b && b[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (k) {
          var d = k;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (k) {
          d = k;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k) {
        d = k;
      }
      a();
    }
  } catch (k) {
    if (k && d && "string" === typeof k.stack) {
      for (var e = k.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f2[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f2[h])
                return "\n" + e[g].replace(" at new ", " at ");
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b = a._payload;
        a = a._init;
        try {
          return Ra(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return m({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function $a(a, b) {
  b = b.checked;
  null != b && qa(a, "checked", b, false);
}
function ab(a, b) {
  $a(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function cb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function bb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function db(a) {
  var b = "";
  aa.Children.forEach(a, function(a2) {
    null != a2 && (b += a2);
  });
  return b;
}
function eb(a, b) {
  a = m({ children: void 0 }, b);
  if (b = db(b.children))
    a.children = b;
  return a;
}
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML)
    throw Error(y(91));
  return m({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b)
        throw Error(y(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length))
          throw Error(y(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? lb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var nb, ob = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function pb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b] = qb[a];
  });
});
function sb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
}
function tb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = sb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var ub = m({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a, b) {
  if (b) {
    if (ub[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
      throw Error(y(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children)
        throw Error(y(60));
      if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (null != b.style && "object" !== typeof b.style)
      throw Error(y(62));
  }
}
function wb(a, b) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(y(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (null !== zb || null !== Ab)
    Ib(), Fb();
}
function Nb(a, b, c) {
  if (Lb)
    return a(b, c);
  Lb = true;
  try {
    return Jb(a, b, c);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
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
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(y(231, b, typeof c));
  return c;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
function Rb(a, b, c, d, e, f2, g, h, k) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a) {
  Sb = true;
  Tb = a;
} };
function Xb(a, b, c, d, e, f2, g, h, k) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b, c, d, e, f2, g, h, k) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function $b(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y(188));
}
function bc(a) {
  var b = a.alternate;
  if (!b) {
    b = Zb(a);
    if (null === b)
      throw Error(y(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e)
      break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return ac(e), a;
        if (f2 === d)
          return ac(e), b;
        f2 = f2.sibling;
      }
      throw Error(y(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(y(189));
      }
    }
    if (c.alternate !== d)
      throw Error(y(190));
  }
  if (3 !== c.tag)
    throw Error(y(188));
  return c.stateNode.current === c ? a : b;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (5 === b.tag || 6 === b.tag)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function dc(a, b) {
  for (var c = a.alternate; null !== b; ) {
    if (b === a || b === c)
      return true;
    b = b.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = /* @__PURE__ */ new Map(), oc = /* @__PURE__ */ new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b, c, d, e) {
  return { blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d] };
}
function sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b.pointerId);
  }
}
function tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = rc(b, c, d, e, f2), null !== b && (b = Cb(b), null !== b && fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return kc = tc(kc, a, b, c, d, e), true;
    case "dragenter":
      return lc = tc(lc, a, b, c, d, e), true;
    case "mouseover":
      return mc = tc(mc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, oc.set(f2, tc(oc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function vc(a) {
  var b = wc(a.target);
  if (null !== b) {
    var c = Zb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = $b(c), null !== b) {
          a.blockedOn = b;
          hc(a.lanePriority, function() {
            r.unstable_runWithPriority(a.priority, function() {
              gc(c);
            });
          });
          return;
        }
      } else if (3 === b && c.stateNode.hydrate) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null !== c)
      return b = Cb(c), null !== b && fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function zc(a, b, c) {
  xc(a) && c.delete(b);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (null !== a.blockedOn) {
      a = Cb(a.blockedOn);
      null !== a && ec(a);
      break;
    }
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null !== c) {
        a.blockedOn = c;
        break;
      }
      b.shift();
    }
    null === a.blockedOn && jc.shift();
  }
  null !== kc && xc(kc) && (kc = null);
  null !== lc && xc(lc) && (lc = null);
  null !== mc && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b(b2) {
    return Bc(b2, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c = 1; c < jc.length; c++) {
      var d = jc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== kc && Bc(kc, a);
  null !== lc && Bc(lc, a);
  null !== mc && Bc(mc, a);
  nc.forEach(b);
  oc.forEach(b);
  for (c = 0; c < pc.length; c++)
    d = pc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < pc.length && (c = pc[0], null === c.blockedOn); )
    vc(c), null === c.blockedOn && pc.shift();
}
function Dc(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b = Ec[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Gc)
      return Fc[a] = b[c];
  return a;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = /* @__PURE__ */ new Map(), Nc = /* @__PURE__ */ new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c], e = a[c + 1];
    e = "on" + (e[0].toUpperCase() + e.slice(1));
    Nc.set(d, b);
    Mc.set(d, e);
    da(e, [d]);
  }
}
var Qc = r.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if (0 !== (1 & a))
    return F = 15, 1;
  if (0 !== (2 & a))
    return F = 14, 2;
  if (0 !== (4 & a))
    return F = 13, 4;
  var b = 24 & a;
  if (0 !== b)
    return F = 12, b;
  if (0 !== (a & 32))
    return F = 11, 32;
  b = 192 & a;
  if (0 !== b)
    return F = 10, b;
  if (0 !== (a & 256))
    return F = 9, 256;
  b = 3584 & a;
  if (0 !== b)
    return F = 8, b;
  if (0 !== (a & 4096))
    return F = 7, 4096;
  b = 4186112 & a;
  if (0 !== b)
    return F = 6, b;
  b = 62914560 & a;
  if (0 !== b)
    return F = 5, b;
  if (a & 67108864)
    return F = 4, 67108864;
  if (0 !== (a & 134217728))
    return F = 3, 134217728;
  b = 805306368 & a;
  if (0 !== b)
    return F = 2, b;
  if (0 !== (1073741824 & a))
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a));
  }
}
function Uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return F = 0;
  var d = 0, e = 0, f2 = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
  if (0 !== f2)
    d = f2, e = F = 15;
  else if (f2 = c & 134217727, 0 !== f2) {
    var k = f2 & ~g;
    0 !== k ? (d = Rc(k), e = F) : (h &= f2, 0 !== h && (d = Rc(h), e = F));
  } else
    f2 = c & ~g, 0 !== f2 ? (d = Rc(f2), e = F) : 0 !== h && (d = Rc(h), e = F);
  if (0 === d)
    return 0;
  d = 31 - Vc(d);
  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
  if (0 !== b && b !== d && 0 === (b & g)) {
    Rc(b);
    if (e <= F)
      return b;
    F = e;
  }
  b = a.entangledLanes;
  if (0 !== b)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b), 0 === a ? Xc(10, b) : a;
    case 10:
      return a = Yc(192 & ~b), 0 === a ? Xc(8, b) : a;
    case 8:
      return a = Yc(3584 & ~b), 0 === a && (a = Yc(4186112 & ~b), 0 === a && (a = 512)), a;
    case 2:
      return b = Yc(805306368 & ~b), 0 === b && (b = 268435456), b;
  }
  throw Error(y(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function $c(a, b, c) {
  a.pendingLanes |= b;
  var d = b - 1;
  a.suspendedLanes &= d;
  a.pingedLanes &= d;
  a = a.eventTimes;
  b = 31 - Vc(b);
  a[b] = c;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a) {
  return 0 === a ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = true;
function gd(a, b, c, d) {
  Kb || Ib();
  var e = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e, a, b, c, d);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id$1(a, b, c, d) {
  ed(dd, hd.bind(null, a, b, c, d));
}
function hd(a, b, c, d) {
  if (fd) {
    var e;
    if ((e = 0 === (b & 4)) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b, c, d), jc.push(a);
    else {
      var f2 = yc(a, b, c, d);
      if (null === f2)
        e && sc(a, d);
      else {
        if (e) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f2, a, b, c, d);
            jc.push(a);
            return;
          }
          if (uc(f2, a, b, c, d))
            return;
          sc(a, d);
        }
        jd(a, b, d, null, c);
      }
    }
  }
}
function yc(a, b, c, d) {
  var e = xb(d);
  e = wc(e);
  if (null !== e) {
    var f2 = Zb(e);
    if (null === f2)
      e = null;
    else {
      var g = f2.tag;
      if (13 === g) {
        e = $b(f2);
        if (null !== e)
          return e;
        e = null;
      } else if (3 === g) {
        if (f2.stateNode.hydrate)
          return 3 === f2.tag ? f2.stateNode.containerInfo : null;
        e = null;
      } else
        f2 !== e && (e = null);
    }
  }
  jd(a, b, d, e, c);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = m({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
}, Nd = {
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
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = m({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = m({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if ("change" === a)
    return b;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b);
    else {
      Kb = true;
      try {
        Gb(a, b);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b) {
  if ("click" === a)
    return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a)
    return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a, b) {
  if (He(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++)
    if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b) {
  var c = Ke(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ke(c);
  }
}
function Me(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Ne() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Oe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
Pc(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0
);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Yb(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k !== f2 && e.isPropagationStopped())
            break a;
          Ze(e, h, l2);
          f2 = k;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k !== f2 && e.isPropagationStopped())
            break a;
          Ze(e, h, l2);
          f2 = k;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b) {
  var c = $e(b), d = a + "__bubble";
  c.has(d) || (af(b, a, 2, false), c.add(d));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b) {
    Ye.has(b) || df(b, false, a, null);
    df(b, true, a, null);
  }));
}
function df(a, b, c, d) {
  var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, f2 = c;
  "selectionchange" === a && 9 !== c.nodeType && (f2 = c.ownerDocument);
  if (null !== d && !b && Ye.has(a)) {
    if ("scroll" !== a)
      return;
    e |= 2;
    f2 = d;
  }
  var g = $e(f2), h = a + "__" + (b ? "capture" : "bubble");
  g.has(h) || (b && (e |= 4), af(f2, a, e, b), g.add(h));
}
function af(a, b, c, d) {
  var e = Nc.get(b);
  switch (void 0 === e ? 2 : e) {
    case 0:
      e = gd;
      break;
    case 1:
      e = id$1;
      break;
    default:
      e = hd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Pb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function jd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k = g.tag;
              if (3 === k || 4 === k) {
                if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; null !== h; ) {
            g = wc(h);
            if (null === g)
              return;
            k = g.tag;
            if (5 === k || 6 === k) {
              d = f2 = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Nb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = Mc.get(a);
      if (void 0 !== h2) {
        var k2 = td, x2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c))
              break a;
          case "keydown":
          case "keyup":
            k2 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k2 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k2 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Fd;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k2 = Hd;
            break;
          case Lc:
            k2 = Xd;
            break;
          case "scroll":
            k2 = vd;
            break;
          case "wheel":
            k2 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Td;
        }
        var w2 = 0 !== (b & 4), z2 = !w2 && "scroll" === a, u2 = w2 ? null !== h2 ? h2 + "Capture" : null : h2;
        w2 = [];
        for (var t2 = d2, q2; null !== t2; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          5 === q2.tag && null !== v2 && (q2 = v2, null !== u2 && (v2 = Ob(t2, u2), null != v2 && w2.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h2 = new k2(h2, x2, null, c, e2), g2.push({ event: h2, listeners: w2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k2 = "mouseout" === a || "pointerout" === a;
        if (h2 && 0 === (b & 16) && (x2 = c.relatedTarget || c.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k2 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k2) {
            if (x2 = c.relatedTarget || c.toElement, k2 = d2, x2 = x2 ? wc(x2) : null, null !== x2 && (z2 = Zb(x2), x2 !== z2 || 5 !== x2.tag && 6 !== x2.tag))
              x2 = null;
          } else
            k2 = null, x2 = d2;
          if (k2 !== x2) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = null == k2 ? h2 : ue(k2);
            q2 = null == x2 ? h2 : ue(x2);
            h2 = new w2(v2, t2 + "leave", k2, c, e2);
            h2.target = z2;
            h2.relatedTarget = q2;
            v2 = null;
            wc(e2) === d2 && (w2 = new w2(u2, t2 + "enter", x2, c, e2), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k2 && x2)
              b: {
                w2 = k2;
                u2 = x2;
                t2 = 0;
                for (q2 = w2; q2; q2 = gf(q2))
                  t2++;
                q2 = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q2++;
                for (; 0 < t2 - q2; )
                  w2 = gf(w2), t2--;
                for (; 0 < q2 - t2; )
                  u2 = gf(u2), q2--;
                for (; t2--; ) {
                  if (w2 === u2 || null !== u2 && w2 === u2.alternate)
                    break b;
                  w2 = gf(w2);
                  u2 = gf(u2);
                }
                w2 = null;
              }
            else
              w2 = null;
            null !== k2 && hf(g2, h2, k2, w2, false);
            null !== x2 && null !== z2 && hf(g2, z2, x2, w2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k2 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k2 || "input" === k2 && "file" === h2.type)
          var J2 = ve;
        else if (me(h2))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (J2 = Ee);
        if (J2 && (J2 = J2(a, d2))) {
          ne(g2, J2, c, e2);
          break a;
        }
        K2 && K2(a, h2, d2);
        "focusout" === a && (K2 = h2._wrapperState) && K2.controlled && "number" === h2.type && bb(h2, "number", h2.value);
      }
      K2 = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(K2) || "true" === K2.contentEditable)
            Qe = K2, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var Q2;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a, c) && (L2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (L2 = "onCompositionStart");
      L2 && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== L2 ? "onCompositionEnd" === L2 && ie && (Q2 = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d2, L2), 0 < K2.length && (L2 = new Ld(L2, a, null, c, e2), g2.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he(c), null !== Q2 && (L2.data = Q2))));
      if (Q2 = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld(
          "onBeforeInput",
          "beforeinput",
          null,
          c,
          e2
        ), g2.push({ event: e2, listeners: d2 }), e2.data = Q2);
    }
    se(g2, b);
  });
}
function ef(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Ob(a, c), null != f2 && d.unshift(ef(a, f2, e)), f2 = Ob(a, b), null != f2 && d.push(ef(a, f2, e)));
    a = a.return;
  }
  return d;
}
function gf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function hf(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k = h.alternate, l2 = h.stateNode;
    if (null !== k && k === d)
      break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k = Ob(c, f2), null != k && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f2), null != k && g.push(ef(c, k, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
function jf() {
}
var kf = null, lf = null;
function mf(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function nf(a, b) {
  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var of = "function" === typeof setTimeout ? setTimeout : void 0, pf = "function" === typeof clearTimeout ? clearTimeout : void 0;
function qf(a) {
  1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
}
function rf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return { $$typeof: Ga, toString: a, valueOf: a };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a) {
  var b = a[wf];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[ff] || c[wf]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = sf(a); null !== a; ) {
          if (c = a[wf])
            return c;
          a = sf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(y(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b = a[yf];
  void 0 === b && (b = a[yf] = /* @__PURE__ */ new Set());
  return b;
}
var zf = [], Af = -1;
function Bf(a) {
  return { current: a };
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b) {
  Af++;
  zf[Af] = a.current;
  a.current = b;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Cf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Ff(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b, c) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b);
  I(N, c);
}
function If(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(y(108, Ra(b) || "Unknown", e));
  return m({}, c, d);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(y(169));
  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c);
}
var Lf = null, Mf = null, Nf = r.unstable_runWithPriority, Of = r.unstable_scheduleCallback, Pf = r.unstable_cancelCallback, Qf = r.unstable_shouldYield, Rf = r.unstable_requestPaint, Sf = r.unstable_now, Tf = r.unstable_getCurrentPriorityLevel, Uf = r.unstable_ImmediatePriority, Vf = r.unstable_UserBlockingPriority, Wf = r.unstable_NormalPriority, Xf = r.unstable_LowPriority, Yf = r.unstable_IdlePriority, Zf = {}, $f = void 0 !== Rf ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a, b) {
  a = fg(a);
  return Nf(a, b);
}
function hg(a, b, c) {
  a = fg(a);
  return Of(a, b, c);
}
function ig() {
  if (null !== bg) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && null !== ag) {
    cg = true;
    var a = 0;
    try {
      var b = ag;
      gg(99, function() {
        for (; a < b.length; a++) {
          var c = b[a];
          do
            c = c(true);
          while (null !== c);
        }
      });
      ag = null;
    } catch (c) {
      throw null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b) {
  if (a && a.defaultProps) {
    b = m({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b = mg.current;
  H(mg);
  a.type._context._currentValue = b;
}
function sg(a, b) {
  for (; null !== a; ) {
    var c = a.alternate;
    if ((a.childLanes & b) === b)
      if (null === c || (c.childLanes & b) === b)
        break;
      else
        c.childLanes |= b;
    else
      a.childLanes |= b, null !== c && (c.childLanes |= b);
    a = a.return;
  }
}
function tg(a, b) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (ug = true), a.firstContext = null);
}
function vg(a, b) {
  if (pg !== a && false !== b && 0 !== b) {
    if ("number" !== typeof b || 1073741823 === b)
      pg = a, b = 1073741823;
    b = { context: a, observedBits: b, next: null };
    if (null === og) {
      if (null === ng)
        throw Error(y(308));
      og = b;
      ng.dependencies = { lanes: 0, firstContext: b, responders: null };
    } else
      og = og.next = b;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b) {
  a = a.updateQueue;
  if (null !== a) {
    a = a.shared;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function Bg(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else
      e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function Cg(a, b, c, d) {
  var e = a.updateQueue;
  wg = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k = h, l2 = k.next;
    k.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k;
    var n2 = a.alternate;
    if (null !== n2) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g && (null === A2 ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k);
    }
  }
  if (null !== f2) {
    A2 = e.baseState;
    g = 0;
    n2 = l2 = k = null;
    do {
      h = f2.lane;
      var p2 = f2.eventTime;
      if ((d & h) === h) {
        null !== n2 && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a, x2 = f2;
          h = b;
          p2 = c;
          switch (x2.tag) {
            case 1:
              C2 = x2.payload;
              if ("function" === typeof C2) {
                A2 = C2.call(p2, A2, h);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x2.payload;
              h = "function" === typeof C2 ? C2.call(p2, A2, h) : C2;
              if (null === h || void 0 === h)
                break a;
              A2 = m({}, A2, h);
              break a;
            case 2:
              wg = true;
          }
        }
        null !== f2.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f2] : h.push(f2));
      } else
        p2 = { eventTime: p2, lane: h, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, null === n2 ? (l2 = n2 = p2, k = A2) : n2 = n2.next = p2, g |= h;
      f2 = f2.next;
      if (null === f2)
        if (h = e.shared.pending, null === h)
          break;
        else
          f2 = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
    } while (1);
    null === n2 && (k = A2);
    e.baseState = k;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = n2;
    Dg |= g;
    a.lanes = g;
    a.memoizedState = A2;
  }
}
function Eg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e)
          throw Error(y(191, e));
        e.call(d);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : m({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var Kg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f2 = zg(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  Ag(a, f2);
  Jg(a, e, d);
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f2 = zg(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  Ag(a, f2);
  Jg(a, e, d);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = Hg(), d = Ig(a), e = zg(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  Ag(a, e);
  Jg(a, d, c);
} };
function Lg(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f2) : true;
}
function Mg(a, b, c) {
  var d = false, e = Cf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = vg(f2) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Ef(a, e) : Cf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Kg;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function Ng(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
}
function Og(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Fg;
  xg(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = vg(f2) : (f2 = Ff(b) ? Df : M.current, e.context = Ef(a, f2));
  Cg(a, c, e, d);
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (Gg(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(y(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(y(147, a));
      var e = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Fg && (b2 = d.refs = {});
        null === a2 ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if ("string" !== typeof a)
      throw Error(y(284));
    if (!c._owner)
      throw Error(y(290, a));
  }
  return a;
}
function Rg(a, b) {
  if ("textarea" !== a.type)
    throw Error(y(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
}
function Sg(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.lastEffect;
      null !== d2 ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
      c2.nextEffect = null;
      c2.flags = 8;
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
      null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Tg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return c2;
    d2 = b2.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
    b2.flags = 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags = 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag)
      return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    if (null !== b2 && b2.elementType === c2.type)
      return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
    d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Qg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function n2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag)
      return b2 = Xg(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function A2(a2, b2, c2) {
    if ("string" === typeof b2 || "number" === typeof b2)
      return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case sa:
          return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
        case ta:
          return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
      }
      if (Pg(b2) || La(b2))
        return b2 = Xg(
          b2,
          a2.mode,
          c2,
          null
        ), b2.return = a2, b2;
      Rg(a2, b2);
    }
    return null;
  }
  function p2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 || "number" === typeof c2)
      return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case sa:
          return c2.key === e2 ? c2.type === ua ? n2(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
        case ta:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
      }
      if (Pg(c2) || La(c2))
        return null !== e2 ? null : n2(a2, b2, c2, d2, null);
      Rg(a2, c2);
    }
    return null;
  }
  function C2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case sa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, d2.type === ua ? n2(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
        case ta:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
      }
      if (Pg(d2) || La(d2))
        return a2 = a2.get(c2) || null, n2(b2, a2, d2, e2, null);
      Rg(b2, d2);
    }
    return null;
  }
  function x2(e2, g2, h2, k2) {
    for (var l3 = null, t2 = null, u2 = g2, z2 = g2 = 0, q2 = null; null !== u2 && z2 < h2.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e2, u2, h2[z2], k2);
      if (null === n3) {
        null === u2 && (u2 = q2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f2(n3, g2, z2);
      null === t2 ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h2.length)
      return c(e2, u2), l3;
    if (null === u2) {
      for (; z2 < h2.length; z2++)
        u2 = A2(e2, h2[z2], k2), null !== u2 && (g2 = f2(u2, g2, z2), null === t2 ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d(e2, u2); z2 < h2.length; z2++)
      q2 = C2(u2, e2, z2, h2[z2], k2), null !== q2 && (a && null !== q2.alternate && u2.delete(null === q2.key ? z2 : q2.key), g2 = f2(q2, g2, z2), null === t2 ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  function w2(e2, g2, h2, k2) {
    var l3 = La(h2);
    if ("function" !== typeof l3)
      throw Error(y(150));
    h2 = l3.call(h2);
    if (null == h2)
      throw Error(y(151));
    for (var t2 = l3 = null, u2 = g2, z2 = g2 = 0, q2 = null, n3 = h2.next(); null !== u2 && !n3.done; z2++, n3 = h2.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w3 = p2(e2, u2, n3.value, k2);
      if (null === w3) {
        null === u2 && (u2 = q2);
        break;
      }
      a && u2 && null === w3.alternate && b(e2, u2);
      g2 = f2(w3, g2, z2);
      null === t2 ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q2;
    }
    if (n3.done)
      return c(e2, u2), l3;
    if (null === u2) {
      for (; !n3.done; z2++, n3 = h2.next())
        n3 = A2(e2, n3.value, k2), null !== n3 && (g2 = f2(n3, g2, z2), null === t2 ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d(e2, u2); !n3.done; z2++, n3 = h2.next())
      n3 = C2(u2, e2, z2, n3.value, k2), null !== n3 && (a && null !== n3.alternate && u2.delete(null === n3.key ? z2 : n3.key), g2 = f2(n3, g2, z2), null === t2 ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  return function(a2, d2, f3, h2) {
    var k2 = "object" === typeof f3 && null !== f3 && f3.type === ua && null === f3.key;
    k2 && (f3 = f3.props.children);
    var l3 = "object" === typeof f3 && null !== f3;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k2 = d2; null !== k2; ) {
              if (k2.key === l3) {
                switch (k2.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f3.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k2.elementType === f3.type) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f3.props);
                      d2.ref = Qg(a2, k2, f3);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c(a2, k2);
                break;
              } else
                b(a2, k2);
              k2 = k2.sibling;
            }
            f3.type === ua ? (d2 = Xg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Vg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Qg(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case ta:
          a: {
            for (k2 = f3.key; null !== d2; ) {
              if (d2.key === k2)
                if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Wg(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
      }
    if ("string" === typeof f3 || "number" === typeof f3)
      return f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
    if (Pg(f3))
      return x2(a2, d2, f3, h2);
    if (La(f3))
      return w2(a2, d2, f3, h2);
    l3 && Rg(a2, f3);
    if ("undefined" === typeof f3 && !k2)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a2.type) || "Component"));
      }
    return c(a2, d2);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y(174));
  return a;
}
function eh(a, b) {
  I(ch, b);
  I(bh, a);
  I(ah, $g);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
  }
  H(ah);
  I(ah, b);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b = dh(ah.current);
  var c = mb(b, a.type);
  b !== c && (I(bh, a), I(ah, c));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 64))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a, b) {
  var c = nh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.flags = 8;
  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function oh(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b = kh;
    if (b) {
      var c = b;
      if (!oh(a, b)) {
        b = rf(c.nextSibling);
        if (!b || !oh(a, b)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c);
      }
      jh = a;
      kh = rf(b.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b = a.type;
  if (5 !== a.tag || "head" !== b && "body" !== b && !nf(b, a.memoizedProps))
    for (b = kh; b; )
      mh(a, b), b = rf(b.nextSibling);
  qh(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(y(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              kh = rf(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Ch(a, b, c, d, e, f2) {
  xh = f2;
  R = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  vh.current = null === a || null === a.memoizedState ? Dh : Eh;
  a = c(d, e);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y(301));
      f2 += 1;
      T = S = null;
      b.updateQueue = null;
      vh.current = Fh;
      a = c(d, e);
    } while (zh);
  }
  vh.current = Gh;
  b = null !== S && null !== S.next;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b)
    throw Error(y(300));
  return a;
}
function Hh() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === T ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (null === S) {
    var a = R.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = S.next;
  var b = null === T ? R.memoizedState : T.next;
  if (null !== b)
    T = b, S = a;
  else {
    if (null === a)
      throw Error(y(310));
    S = a;
    a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    null === T ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function Kh(a) {
  var b = Ih(), c = b.queue;
  if (null === c)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = S, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    e = e.next;
    d = d.baseState;
    var h = g = f2 = null, k = e;
    do {
      var l2 = k.lane;
      if ((xh & l2) === l2)
        null !== h && (h = h.next = { lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      else {
        var n2 = {
          lane: l2,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        };
        null === h ? (g = h = n2, f2 = d) : h = h.next = n2;
        R.lanes |= l2;
        Dg |= l2;
      }
      k = k.next;
    } while (null !== k && k !== e);
    null === h ? f2 = d : h.next = g;
    He(d, b.memoizedState) || (ug = true);
    b.memoizedState = d;
    b.baseState = f2;
    b.baseQueue = h;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function Lh(a) {
  var b = Ih(), c = b.queue;
  if (null === c)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b.memoizedState) || (ug = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Mh(a, b, c) {
  var d = b._getVersion;
  d = d(b._source);
  var e = b._workInProgressVersionPrimary;
  if (null !== e)
    a = e === d;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b._workInProgressVersionPrimary = d, th.push(b);
  if (a)
    return c(b._source);
  th.push(b);
  throw Error(y(350));
}
function Nh(a, b, c, d) {
  var e = U;
  if (null === e)
    throw Error(y(349));
  var f2 = b._getVersion, g = f2(b._source), h = vh.current, k = h.useState(function() {
    return Mh(e, b, c);
  }), l2 = k[1], n2 = k[0];
  k = T;
  var A2 = a.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w2 = R;
  a.memoizedState = { refs: p2, source: b, subscribe: d };
  h.useEffect(function() {
    p2.getSnapshot = c;
    p2.setSnapshot = l2;
    var a2 = f2(b._source);
    if (!He(g, a2)) {
      a2 = c(b._source);
      He(n2, a2) || (l2(a2), a2 = Ig(w2), e.mutableReadLanes |= a2 & e.pendingLanes);
      a2 = e.mutableReadLanes;
      e.entangledLanes |= a2;
      for (var d2 = e.entanglements, h2 = a2; 0 < h2; ) {
        var k2 = 31 - Vc(h2), v2 = 1 << k2;
        d2[k2] |= a2;
        h2 &= ~v2;
      }
    }
  }, [c, b, d]);
  h.useEffect(function() {
    return d(b._source, function() {
      var a2 = p2.getSnapshot, c2 = p2.setSnapshot;
      try {
        c2(a2(b._source));
        var d2 = Ig(w2);
        e.mutableReadLanes |= d2 & e.pendingLanes;
      } catch (q2) {
        c2(function() {
          throw q2;
        });
      }
    });
  }, [b, d]);
  He(C2, c) && He(x2, b) && He(A2, d) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a.dispatch = l2 = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n2 = Mh(e, b, c), k.memoizedState = k.baseState = n2);
  return n2;
}
function Ph(a, b, c) {
  var d = Ih();
  return Nh(d, a, b, c);
}
function Qh(a) {
  var b = Hh();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b.memoizedState, a];
}
function Rh(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = R.updateQueue;
  null === b ? (b = { lastEffect: null }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Sh(a) {
  var b = Hh();
  a = { current: a };
  return b.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b, c, d) {
  var e = Hh();
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, void 0, void 0 === d ? null : d);
}
function Vh(a, b, c, d) {
  var e = Ih();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== S) {
    var g = S.memoizedState;
    f2 = g.destroy;
    if (null !== d && Bh(d, g.deps)) {
      Rh(b, c, f2, d);
      return;
    }
  }
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, f2, d);
}
function Wh(a, b) {
  return Uh(516, 4, a, b);
}
function Xh(a, b) {
  return Vh(516, 4, a, b);
}
function Yh(a, b) {
  return Vh(4, 2, a, b);
}
function Zh(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function $h(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b, a), c);
}
function ai() {
}
function bi(a, b) {
  var c = Ih();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Bh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ci(a, b) {
  var c = Ih();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Bh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function di(a, b) {
  var c = eg();
  gg(98 > c ? 98 : c, function() {
    a(true);
  });
  gg(97 < c ? 97 : c, function() {
    var c2 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b();
    } finally {
      wh.transition = c2;
    }
  });
}
function Oh(a, b, c) {
  var d = Hg(), e = Ig(a), f2 = { lane: e, action: c, eagerReducer: null, eagerState: null, next: null }, g = b.pending;
  null === g ? f2.next = f2 : (f2.next = g.next, g.next = f2);
  b.pending = f2;
  g = a.alternate;
  if (a === R || null !== g && g === R)
    zh = yh = true;
  else {
    if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g))
      try {
        var h = b.lastRenderedState, k = g(h, c);
        f2.eagerReducer = g;
        f2.eagerState = k;
        if (He(k, h))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a, e, d);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a, b) {
  Hh().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return Uh(4, 2, Zh.bind(
    null,
    b,
    a
  ), c);
}, useLayoutEffect: function(a, b) {
  return Uh(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Hh();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Hh();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  a = a.dispatch = Oh.bind(null, R, a);
  return [d.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Qh(a), c = b[0], d = b[1];
  Wh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Qh(false), b = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b];
}, useMutableSource: function(a, b, c) {
  var d = Hh();
  d.memoizedState = { refs: { getSnapshot: b, setSnapshot: null }, source: a, subscribe: c };
  return Nh(d, a, b, c);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b = uf(function() {
      a || (a = true, c("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c = Qh(b)[1];
    0 === (R.mode & 2) && (R.flags |= 516, Rh(
      5,
      function() {
        c("r:" + (tf++).toString(36));
      },
      void 0,
      null
    ));
    return b;
  }
  b = "r:" + (tf++).toString(36);
  Qh(b);
  return b;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Kh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Lh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a, b, c, d) {
  b.child = null === a ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
}
function gi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  tg(b, e);
  d = Ch(a, b, c, d, f2, e);
  if (null !== a && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, d, e);
  return b.child;
}
function ii(a, b, c, d, e, f2) {
  if (null === a) {
    var g = c.type;
    if ("function" === typeof g && !ji(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = g, ki(a, b, g, d, e, f2);
    a = Vg(c.type, null, d, b, b.mode, f2);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g = a.child;
  if (0 === (e & f2) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Je, c(e, d) && a.ref === b.ref))
    return hi(a, b, f2);
  b.flags |= 1;
  a = Tg(g, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ki(a, b, c, d, e, f2) {
  if (null !== a && Je(a.memoizedProps, d) && a.ref === b.ref)
    if (ug = false, 0 !== (f2 & e))
      0 !== (a.flags & 16384) && (ug = true);
    else
      return b.lanes = a.lanes, hi(a, b, f2);
  return li(a, b, c, d, f2);
}
function mi(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode)
    if (0 === (b.mode & 4))
      b.memoizedState = { baseLanes: 0 }, ni(b, c);
    else if (0 !== (c & 1073741824))
      b.memoizedState = { baseLanes: 0 }, ni(b, null !== f2 ? f2.baseLanes : c);
    else
      return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a }, ni(b, a), null;
  else
    null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
  fi(a, b, e, c);
  return b.child;
}
function oi(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b.flags |= 128;
}
function li(a, b, c, d, e) {
  var f2 = Ff(c) ? Df : M.current;
  f2 = Ef(b, f2);
  tg(b, e);
  c = Ch(a, b, c, d, f2, e);
  if (null !== a && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, c, e);
  return b.child;
}
function pi(a, b, c, d, e) {
  if (Ff(c)) {
    var f2 = true;
    Jf(b);
  } else
    f2 = false;
  tg(b, e);
  if (null === b.stateNode)
    null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = vg(l2) : (l2 = Ff(c) ? Df : M.current, l2 = Ef(b, l2));
    var n2 = c.getDerivedStateFromProps, A2 = "function" === typeof n2 || "function" === typeof g.getSnapshotBeforeUpdate;
    A2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l2) && Ng(b, g, d, l2);
    wg = false;
    var p2 = b.memoizedState;
    g.state = p2;
    Cg(b, d, g, e);
    k = b.memoizedState;
    h !== d || p2 !== k || N.current || wg ? ("function" === typeof n2 && (Gg(b, c, n2, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p2, k, l2)) ? (A2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = false);
  } else {
    g = b.stateNode;
    yg(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : lg(b.type, h);
    g.props = l2;
    A2 = b.pendingProps;
    p2 = g.context;
    k = c.contextType;
    "object" === typeof k && null !== k ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
    var C2 = c.getDerivedStateFromProps;
    (n2 = "function" === typeof C2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== A2 || p2 !== k) && Ng(b, g, d, k);
    wg = false;
    p2 = b.memoizedState;
    g.state = p2;
    Cg(b, d, g, e);
    var x2 = b.memoizedState;
    h !== A2 || p2 !== x2 || N.current || wg ? ("function" === typeof C2 && (Gg(b, c, C2, d), x2 = b.memoizedState), (l2 = wg || Lg(b, c, l2, d, p2, x2, k)) ? (n2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(
      d,
      x2,
      k
    ), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x2, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x2), g.props = d, g.state = x2, g.context = k, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), d = false);
  }
  return qi(a, b, c, d, f2, e);
}
function qi(a, b, c, d, e, f2) {
  oi(a, b);
  var g = 0 !== (b.flags & 64);
  if (!d && !g)
    return e && Kf(b, c, false), hi(a, b, f2);
  d = b.stateNode;
  ei.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Yg(b, a.child, null, f2), b.child = Yg(b, null, h, f2)) : fi(a, b, h, f2);
  b.memoizedState = d.state;
  e && Kf(b, c, true);
  return b.child;
}
function ri(a) {
  var b = a.stateNode;
  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
  eh(a, b.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a, b, c) {
  var d = b.pendingProps, e = P.current, f2 = false, g;
  (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  g ? (f2 = true, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || true === d.unstable_avoidThisFallback || (e |= 1);
  I(P, e & 1);
  if (null === a) {
    void 0 !== d.fallback && ph(b);
    a = d.children;
    e = d.fallback;
    if (f2)
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, a;
    if ("number" === typeof d.unstable_expectedLoadTime)
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, b.lanes = 33554432, a;
    c = vi({ mode: "visible", children: a }, b.mode, c, null);
    c.return = b;
    return b.child = c;
  }
  if (null !== a.memoizedState) {
    if (f2)
      return d = wi(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = null === e ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f2.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  if (f2)
    return d = wi(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = null === e ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f2.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
  c = xi(a, b, d.children, c);
  b.memoizedState = null;
  return c;
}
function ui(a, b, c, d) {
  var e = a.mode, f2 = a.child;
  b = { mode: "hidden", children: b };
  0 === (e & 2) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = b) : f2 = vi(b, e, 0, null);
  c = Xg(c, e, d, null);
  f2.return = a;
  c.return = a;
  f2.sibling = c;
  a.child = f2;
  return c;
}
function xi(a, b, c, d) {
  var e = a.child;
  a = e.sibling;
  c = Tg(e, { mode: "visible", children: c });
  0 === (b.mode & 2) && (c.lanes = d);
  c.return = b;
  c.sibling = null;
  null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
  return b.child = c;
}
function wi(a, b, c, d, e) {
  var f2 = b.mode, g = a.child;
  a = g.sibling;
  var h = { mode: "hidden", children: c };
  0 === (f2 & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
  null !== a ? d = Tg(a, d) : (d = Xg(d, f2, e, null), d.flags |= 2);
  d.return = b;
  c.return = b;
  c.sibling = d;
  b.child = c;
  return d;
}
function yi(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  sg(a.return, b);
}
function zi(a, b, c, d, e, f2) {
  var g = a.memoizedState;
  null === g ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f2 } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f2);
}
function Ai(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  fi(a, b, d.children, c);
  d = P.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 64;
  else {
    if (null !== a && 0 !== (a.flags & 64))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && yi(a, c);
          else if (19 === a.tag)
            yi(a, c);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(P, d);
  if (0 === (b.mode & 2))
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; )
          a = c.alternate, null !== a && null === ih(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zi(b, false, e, c, f2, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === ih(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        zi(b, true, c, null, f2, b.lastEffect);
        break;
      case "together":
        zi(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function hi(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  Dg |= b.lanes;
  if (0 !== (c & b.childLanes)) {
    if (null !== a && b.child !== a.child)
      throw Error(y(153));
    if (null !== b.child) {
      a = b.child;
      c = Tg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; )
        a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ci = function() {
};
Di = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "option":
        e = eb(a, e);
        d = eb(a, d);
        f2 = [];
        break;
      case "select":
        e = m({}, e, { value: void 0 });
        d = m({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = jf);
    }
    vb(c, d);
    var g;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
        if ("style" === l2) {
          var h = e[l2];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k !== h && (null != k || null != h))
        if ("style" === l2)
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k)
              k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else
            c || (f2 || (f2 = []), f2.push(l2, c)), c = k;
        else
          "dangerouslySetInnerHTML" === l2 ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f2 = f2 || []).push(l2, k)) : "children" === l2 ? "string" !== typeof k && "number" !== typeof k || (f2 = f2 || []).push(l2, "" + k) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ca.hasOwnProperty(l2) ? (null != k && "onScroll" === l2 && G("scroll", a), f2 || h === k || (f2 = [])) : "object" === typeof k && null !== k && k.$$typeof === Ga ? k.toString() : (f2 = f2 || []).push(l2, k));
    }
    c && (f2 = f2 || []).push(
      "style",
      c
    );
    var l2 = f2;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Ei = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Fi(a, b) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function Gi(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
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
      return null;
    case 1:
      return Ff(b.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d = b.stateNode;
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
      Ci(b);
      return null;
    case 5:
      hh(b);
      var e = dh(ch.current);
      c = b.type;
      if (null !== a && null != b.stateNode)
        Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(y(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[wf] = b;
          d[xf] = f2;
          switch (c) {
            case "dialog":
              G("cancel", d);
              G("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d);
              break;
            case "source":
              G("error", d);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d);
              G("load", d);
              break;
            case "details":
              G("toggle", d);
              break;
            case "input":
              Za(d, f2);
              G("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              G("invalid", d);
              break;
            case "textarea":
              hb(d, f2), G("invalid", d);
          }
          vb(c, f2);
          a = null;
          for (var g in f2)
            f2.hasOwnProperty(g) && (e = f2[g], "children" === g ? "string" === typeof e ? d.textContent !== e && (a = ["children", e]) : "number" === typeof e && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && null != e && "onScroll" === g && G("scroll", d));
          switch (c) {
            case "input":
              Va(d);
              cb(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = jf);
          }
          d = a;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          a === kb.html && (a = lb(c));
          a === kb.html ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[wf] = b;
          a[xf] = d;
          Bi(a, b, false, false);
          b.stateNode = a;
          g = wb(c, d);
          switch (c) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e = d;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e = d;
              break;
            case "video":
            case "audio":
              for (e = 0; e < Xe.length; e++)
                G(Xe[e], a);
              e = d;
              break;
            case "source":
              G("error", a);
              e = d;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e = d;
              break;
            case "details":
              G("toggle", a);
              e = d;
              break;
            case "input":
              Za(a, d);
              e = Ya(a, d);
              G("invalid", a);
              break;
            case "option":
              e = eb(a, d);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d.multiple };
              e = m({}, d, { value: void 0 });
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d);
              e = gb(a, d);
              G("invalid", a);
              break;
            default:
              e = d;
          }
          vb(c, e);
          var h = e;
          for (f2 in h)
            if (h.hasOwnProperty(f2)) {
              var k = h[f2];
              "style" === f2 ? tb(a, k) : "dangerouslySetInnerHTML" === f2 ? (k = k ? k.__html : void 0, null != k && ob(a, k)) : "children" === f2 ? "string" === typeof k ? ("textarea" !== c || "" !== k) && pb(a, k) : "number" === typeof k && pb(a, "" + k) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ca.hasOwnProperty(f2) ? null != k && "onScroll" === f2 && G("scroll", a) : null != k && qa(a, f2, k, g));
            }
          switch (c) {
            case "input":
              Va(a);
              cb(a, d, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              null != d.value && a.setAttribute("value", "" + Sa(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              f2 = d.value;
              null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              "function" === typeof e.onClick && (a.onclick = jf);
          }
          mf(c, d) && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 128);
      }
      return null;
    case 6:
      if (a && null != b.stateNode)
        Ei(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(y(166));
        c = dh(ch.current);
        dh(ah.current);
        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
      }
      return null;
    case 13:
      H(P);
      d = b.memoizedState;
      if (0 !== (b.flags & 64))
        return b.lanes = c, b;
      d = null !== d;
      c = false;
      null === a ? void 0 !== b.memoizedProps.fallback && rh(b) : c = null !== a.memoizedState;
      if (d && !c && 0 !== (b.mode & 2))
        if (null === a && true !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (P.current & 1))
          0 === V && (V = 3);
        else {
          if (0 === V || 3 === V)
            V = 4;
          null === U || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U, W);
        }
      if (d || c)
        b.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b), null === a && cf(b.stateNode.containerInfo), null;
    case 10:
      return rg(b), null;
    case 17:
      return Ff(b.type) && Gf(), null;
    case 19:
      H(P);
      d = b.memoizedState;
      if (null === d)
        return null;
      f2 = 0 !== (b.flags & 64);
      g = d.rendering;
      if (null === g)
        if (f2)
          Fi(d, false);
        else {
          if (0 !== V || null !== a && 0 !== (a.flags & 64))
            for (a = b.child; null !== a; ) {
              g = ih(a);
              if (null !== g) {
                b.flags |= 64;
                Fi(d, false);
                f2 = g.updateQueue;
                null !== f2 && (b.updateQueue = f2, b.flags |= 4);
                null === d.lastEffect && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                d = c;
                for (c = b.child; null !== c; )
                  f2 = c, a = d, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                I(P, P.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== d.tail && O() > Ji && (b.flags |= 64, f2 = true, Fi(d, false), b.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a = ih(g), null !== a) {
            if (b.flags |= 64, f2 = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Fi(d, true), null === d.tail && "hidden" === d.tailMode && !g.alternate && !lh)
              return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
          } else
            2 * O() - d.renderingStartTime > Ji && 1073741824 !== c && (b.flags |= 64, f2 = true, Fi(d, false), b.lanes = 33554432);
        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, null !== c ? c.sibling = g : b.child = g, d.last = g);
      }
      return null !== d.tail ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f2 ? b & 1 | 2 : b & 1), c) : null;
    case 23:
    case 24:
      return Ki(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
  }
  throw Error(y(156, b.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b = a.flags;
      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b = a.flags;
      if (0 !== (b & 64))
        throw Error(y(285));
      a.flags = b & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b) {
  try {
    var c = "", d = b;
    do
      c += Qa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e };
}
function Ni(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Oi = "function" === typeof WeakMap ? WeakMap : Map;
function Pi(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Qi || (Qi = true, Ri = d);
    Ni(a, b);
  };
  return c;
}
function Si(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      Ni(a, b);
      return d(e);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    "function" !== typeof d && (null === Ti ? Ti = /* @__PURE__ */ new Set([this]) : Ti.add(this), Ni(a, b));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
var Ui = "function" === typeof WeakSet ? WeakSet : Set;
function Vi(a) {
  var b = a.ref;
  if (null !== b)
    if ("function" === typeof b)
      try {
        b(null);
      } catch (c) {
        Wi(a, c);
      }
    else
      b.current = null;
}
function Xi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.flags & 256 && null !== a) {
        var c = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
      b.flags & 256 && qf(b.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b = c.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        a = b = b.next;
        do {
          if (3 === (a.tag & 3)) {
            var d = a.create;
            a.destroy = d();
          }
          a = a.next;
        } while (a !== b);
      }
      b = c.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        a = b = b.next;
        do {
          var e = a;
          d = e.next;
          e = e.tag;
          0 !== (e & 4) && 0 !== (e & 1) && (Zi(c, a), $i(c, a));
          a = d;
        } while (a !== b);
      }
      return;
    case 1:
      a = c.stateNode;
      c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(
        d,
        b.memoizedState,
        a.__reactInternalSnapshotBeforeUpdate
      )));
      b = c.updateQueue;
      null !== b && Eg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (null !== b) {
        a = null;
        if (null !== c.child)
          switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        Eg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      null === b && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Cc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a, b) {
  for (var c = a; ; ) {
    if (5 === c.tag) {
      var d = c.stateNode;
      if (b)
        d = d.style, "function" === typeof d.setProperty ? d.setProperty("display", "none", "important") : d.display = "none";
      else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = sb("display", e);
      }
    } else if (6 === c.tag)
      c.stateNode.nodeValue = b ? "" : c.memoizedProps;
    else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === a)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === a)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function bj(a, b) {
  if (Mf && "function" === typeof Mf.onCommitFiberUnmount)
    try {
      Mf.onCommitFiberUnmount(Lf, b);
    } catch (f2) {
    }
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (null !== a && (a = a.lastEffect, null !== a)) {
        var c = a = a.next;
        do {
          var d = c, e = d.destroy;
          d = d.tag;
          if (void 0 !== e)
            if (0 !== (d & 4))
              Zi(b, c);
            else {
              d = b;
              try {
                e();
              } catch (f2) {
                Wi(d, f2);
              }
            }
          c = c.next;
        } while (c !== a);
      }
      break;
    case 1:
      Vi(b);
      a = b.stateNode;
      if ("function" === typeof a.componentWillUnmount)
        try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f2) {
          Wi(
            b,
            f2
          );
        }
      break;
    case 5:
      Vi(b);
      break;
    case 4:
      cj(a, b);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function fj(a) {
  a: {
    for (var b = a.return; null !== b; ) {
      if (ej(b))
        break a;
      b = b.return;
    }
    throw Error(y(160));
  }
  var c = b;
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(y(161));
  }
  c.flags & 16 && (pb(b, ""), c.flags &= -17);
  a:
    b:
      for (c = a; ; ) {
        for (; null === c.sibling; ) {
          if (null === c.return || ej(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag; ) {
          if (c.flags & 2)
            continue b;
          if (null === c.child || 4 === c.tag)
            continue b;
          else
            c.child.return = c, c = c.child;
        }
        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }
  d ? gj(a, c, b) : hj(a, c, b);
}
function gj(a, b, c) {
  var d = a.tag, e = 5 === d || 6 === d;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = jf));
  else if (4 !== d && (a = a.child, null !== a))
    for (gj(a, b, c), a = a.sibling; null !== a; )
      gj(a, b, c), a = a.sibling;
}
function hj(a, b, c) {
  var d = a.tag, e = 5 === d || 6 === d;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (hj(a, b, c), a = a.sibling; null !== a; )
      hj(a, b, c), a = a.sibling;
}
function cj(a, b) {
  for (var c = b, d = false, e, f2; ; ) {
    if (!d) {
      d = c.return;
      a:
        for (; ; ) {
          if (null === d)
            throw Error(y(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e = e.containerInfo;
              f2 = true;
              break a;
            case 4:
              e = e.containerInfo;
              f2 = true;
              break a;
          }
          d = d.return;
        }
      d = true;
    }
    if (5 === c.tag || 6 === c.tag) {
      a:
        for (var g = a, h = c, k = h; ; )
          if (bj(g, k), null !== k.child && 4 !== k.tag)
            k.child.return = k, k = k.child;
          else {
            if (k === h)
              break a;
            for (; null === k.sibling; ) {
              if (null === k.return || k.return === h)
                break a;
              k = k.return;
            }
            k.sibling.return = k.return;
            k = k.sibling;
          }
      f2 ? (g = e, h = c.stateNode, 8 === g.nodeType ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
    } else if (4 === c.tag) {
      if (null !== c.child) {
        e = c.stateNode.containerInfo;
        f2 = true;
        c.child.return = c;
        c = c.child;
        continue;
      }
    } else if (bj(a, c), null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
      4 === c.tag && (d = false);
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function ij(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c = b.updateQueue;
      c = null !== c ? c.lastEffect : null;
      if (null !== c) {
        var d = c = c.next;
        do
          3 === (d.tag & 3) && (a = d.destroy, d.destroy = void 0, void 0 !== a && a()), d = d.next;
        while (d !== c);
      }
      return;
    case 1:
      return;
    case 5:
      c = b.stateNode;
      if (null != c) {
        d = b.memoizedProps;
        var e = null !== a ? a.memoizedProps : d;
        a = b.type;
        var f2 = b.updateQueue;
        b.updateQueue = null;
        if (null !== f2) {
          c[xf] = d;
          "input" === a && "radio" === d.type && null != d.name && $a(c, d);
          wb(a, e);
          b = wb(a, d);
          for (e = 0; e < f2.length; e += 2) {
            var g = f2[e], h = f2[e + 1];
            "style" === g ? tb(c, h) : "dangerouslySetInnerHTML" === g ? ob(c, h) : "children" === g ? pb(c, h) : qa(c, g, h, b);
          }
          switch (a) {
            case "input":
              ab(c, d);
              break;
            case "textarea":
              ib(c, d);
              break;
            case "select":
              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f2 = d.value, null != f2 ? fb(c, !!d.multiple, f2, false) : a !== !!d.multiple && (null != d.defaultValue ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (null === b.stateNode)
        throw Error(y(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      c = b.stateNode;
      c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
      return;
    case 12:
      return;
    case 13:
      null !== b.memoizedState && (jj = O(), aj(b.child, true));
      kj(b);
      return;
    case 19:
      kj(b);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b, null !== b.memoizedState);
      return;
  }
  throw Error(y(163));
}
function kj(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Ui());
    b.forEach(function(b2) {
      var d = lj.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function mj(a, b) {
  return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return 0 !== (X & 48) ? O() : -1 !== Fj ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if (0 === (a & 2))
    return 1;
  if (0 === (a & 4))
    return 99 === eg() ? 1 : 2;
  0 === Gj && (Gj = tj);
  if (0 !== kg.transition) {
    0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
    a = Gj;
    var b = 4186112 & ~Hj;
    b &= -b;
    0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
    return b;
  }
  a = eg();
  0 !== (X & 4) && 98 === a ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b, c) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a = Kj(a, b);
  if (null === a)
    return null;
  $c(a, b, c);
  a === U && (Hi |= b, 4 === V && Ii(a, W));
  var d = eg();
  1 === b ? 0 !== (X & 8) && 0 === (X & 48) ? Lj(a) : (Mj(a, c), 0 === X && (wj(), ig())) : (0 === (X & 4) || 98 !== d && 99 !== d || (null === Cj ? Cj = /* @__PURE__ */ new Set([a]) : Cj.add(a)), Mj(a, c));
  vj = a;
}
function Kj(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
function Mj(a, b) {
  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f2 = a.expirationTimes, g = a.pendingLanes; 0 < g; ) {
    var h = 31 - Vc(g), k = 1 << h, l2 = f2[h];
    if (-1 === l2) {
      if (0 === (k & d) || 0 !== (k & e)) {
        l2 = b;
        Rc(k);
        var n2 = F;
        f2[h] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b && (a.expiredLanes |= k);
    g &= ~k;
  }
  d = Uc(a, a === U ? W : 0);
  b = F;
  if (0 === d)
    null !== c && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (null !== c) {
      if (a.callbackPriority === b)
        return;
      c !== Zf && Pf(c);
    }
    15 === b ? (c = Lj.bind(null, a), null === ag ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : 14 === b ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if (0 !== (X & 48))
    throw Error(y(327));
  var b = a.callbackNode;
  if (Oj() && a.callbackNode !== b)
    return null;
  var c = Uc(a, a === U ? W : 0);
  if (0 === c)
    return null;
  var d = c;
  var e = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a || W !== d)
    wj(), Qj(a, d);
  do
    try {
      Rj();
      break;
    } catch (h) {
      Sj(a, h);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e;
  null !== Y ? d = 0 : (U = null, W = 0, d = V);
  if (0 !== (tj & Hi))
    Qj(a, 0);
  else if (0 !== d) {
    2 === d && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), 0 !== c && (d = Tj(a, c)));
    if (1 === d)
      throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c;
    switch (d) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c);
        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
          if (0 !== Uc(a, 0))
            break;
          e = a.suspendedLanes;
          if ((e & c) !== c) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c);
        if ((c & 4186112) === c)
          break;
        d = a.eventTimes;
        for (e = -1; 0 < c; ) {
          var g = 31 - Vc(c);
          f2 = 1 << g;
          g = d[g];
          g > e && (e = g);
          c &= ~f2;
        }
        c = e;
        c = O() - c;
        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
        if (10 < c) {
          a.timeoutHandle = of(Uj.bind(null, a), c);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b ? Nj.bind(null, a) : null;
}
function Ii(a, b) {
  b &= ~uj;
  b &= ~Hi;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - Vc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Lj(a) {
  if (0 !== (X & 48))
    throw Error(y(327));
  Oj();
  if (a === U && 0 !== (a.expiredLanes & W)) {
    var b = W;
    var c = Tj(a, b);
    0 !== (tj & Hi) && (b = Uc(a, b), c = Tj(a, b));
  } else
    b = Uc(a, 0), c = Tj(a, b);
  0 !== a.tag && 2 === c && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), 0 !== b && (c = Tj(a, b)));
  if (1 === c)
    throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (null !== Cj) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b) {
  var c = X;
  X |= 1;
  try {
    return a(b);
  } finally {
    X = c, 0 === X && (wj(), ig());
  }
}
function Xj(a, b) {
  var c = X;
  X &= -2;
  X |= 8;
  try {
    return a(b);
  } finally {
    X = c, 0 === X && (wj(), ig());
  }
}
function ni(a, b) {
  I(rj, qj);
  qj |= b;
  tj |= b;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, pf(c));
  if (null !== Y)
    for (c = Y.return; null !== c; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d);
          break;
        case 23:
        case 24:
          Ki();
      }
      c = c.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b) {
  do {
    var c = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d = R.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (null === c || null === c.return) {
        V = 1;
        sj = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k = b;
        b = W;
        h.flags |= 2048;
        h.firstEffect = h.lastEffect = null;
        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
          var l2 = k;
          if (0 === (h.mode & 2)) {
            var n2 = h.alternate;
            n2 ? (h.updateQueue = n2.updateQueue, h.memoizedState = n2.memoizedState, h.lanes = n2.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var A2 = 0 !== (P.current & 1), p2 = g;
          do {
            var C2;
            if (C2 = 13 === p2.tag) {
              var x2 = p2.memoizedState;
              if (null !== x2)
                C2 = null !== x2.dehydrated ? true : false;
              else {
                var w2 = p2.memoizedProps;
                C2 = void 0 === w2.fallback ? false : true !== w2.unstable_avoidThisFallback ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (null === z2) {
                var u2 = /* @__PURE__ */ new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if (0 === (p2.mode & 2)) {
                p2.flags |= 64;
                h.flags |= 16384;
                h.flags &= -2981;
                if (1 === h.tag)
                  if (null === h.alternate)
                    h.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h, t2);
                  }
                h.lanes |= 1;
                break a;
              }
              k = void 0;
              h = b;
              var q2 = f2.pingCache;
              null === q2 ? (q2 = f2.pingCache = new Oi(), k = /* @__PURE__ */ new Set(), q2.set(l2, k)) : (k = q2.get(l2), void 0 === k && (k = /* @__PURE__ */ new Set(), q2.set(l2, k)));
              if (!k.has(h)) {
                k.add(h);
                var v2 = Yj.bind(null, f2, l2, h);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b;
              break a;
            }
            p2 = p2.return;
          } while (null !== p2);
          k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        5 !== V && (V = 2);
        k = Mi(k, h);
        p2 = g;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k;
              p2.flags |= 4096;
              b &= -b;
              p2.lanes |= b;
              var J2 = Pi(p2, f2, b);
              Bg(p2, J2);
              break a;
            case 1:
              f2 = k;
              var K2 = p2.type, Q2 = p2.stateNode;
              if (0 === (p2.flags & 64) && ("function" === typeof K2.getDerivedStateFromError || null !== Q2 && "function" === typeof Q2.componentDidCatch && (null === Ti || !Ti.has(Q2)))) {
                p2.flags |= 4096;
                b &= -b;
                p2.lanes |= b;
                var L2 = Si(p2, f2, b);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (null !== p2);
      }
      Zj(c);
    } catch (va) {
      b = va;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return null === a ? Gh : a;
}
function Tj(a, b) {
  var c = X;
  X |= 16;
  var d = Pj();
  U === a && W === b || Qj(a, b);
  do
    try {
      ak();
      break;
    } catch (e) {
      Sj(a, e);
    }
  while (1);
  qg();
  X = c;
  oj.current = d;
  if (null !== Y)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; null !== Y; )
    bk(Y);
}
function Rj() {
  for (; null !== Y && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  null === b ? Zj(a) : Y = b;
  pj.current = null;
}
function Zj(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 2048)) {
      c = Gi(c, b, qj);
      if (null !== c) {
        Y = c;
        return;
      }
      c = b;
      if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (qj & 1073741824) || 0 === (c.mode & 4)) {
        for (var d = 0, e = c.child; null !== e; )
          d |= e.lanes | e.childLanes, e = e.sibling;
        c.childLanes = d;
      }
      null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
    } else {
      c = Li(b);
      if (null !== c) {
        c.flags &= 2047;
        Y = c;
        return;
      }
      null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === V && (V = 5);
}
function Uj(a) {
  var b = eg();
  gg(99, dk.bind(null, a, b));
  return null;
}
function dk(a, b) {
  do
    Oj();
  while (null !== yj);
  if (0 !== (X & 48))
    throw Error(y(327));
  var c = a.finishedWork;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(y(177));
  a.callbackNode = null;
  var d = c.lanes | c.childLanes, e = d, f2 = a.pendingLanes & ~e;
  a.pendingLanes = e;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e;
  a.mutableReadLanes &= e;
  a.entangledLanes &= e;
  e = a.entanglements;
  for (var g = a.eventTimes, h = a.expirationTimes; 0 < f2; ) {
    var k = 31 - Vc(f2), l2 = 1 << k;
    e[k] = 0;
    g[k] = -1;
    h[k] = -1;
    f2 &= ~l2;
  }
  null !== Cj && 0 === (d & 24) && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
  if (null !== d) {
    e = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g = Ne();
    if (Oe(g)) {
      if ("selectionStart" in g)
        h = { start: g.selectionStart, end: g.selectionEnd };
      else
        a:
          if (h = (h = g.ownerDocument) && h.defaultView || window, (l2 = h.getSelection && h.getSelection()) && 0 !== l2.rangeCount) {
            h = l2.anchorNode;
            f2 = l2.anchorOffset;
            k = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h.nodeType, k.nodeType;
            } catch (va) {
              h = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x2 = 0, w2 = g, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h || 0 !== f2 && 3 !== w2.nodeType || (A2 = n2 + f2);
                  w2 !== k || 0 !== l2 && 3 !== w2.nodeType || (p2 = n2 + l2);
                  3 === w2.nodeType && (n2 += w2.nodeValue.length);
                  if (null === (u2 = w2.firstChild))
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g)
                    break b;
                  z2 === h && ++C2 === f2 && (A2 = n2);
                  z2 === k && ++x2 === l2 && (p2 = n2);
                  if (null !== (u2 = w2.nextSibling))
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h = -1 === A2 || -1 === p2 ? null : { start: A2, end: p2 };
          } else
            h = null;
      h = h || { start: 0, end: 0 };
    } else
      h = null;
    lf = { focusedElem: g, selectionRange: h };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d;
    do
      try {
        ek();
      } catch (va) {
        if (null === Z)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (null !== Z);
    Ij = null;
    Z = d;
    do
      try {
        for (g = a; null !== Z; ) {
          var t2 = Z.flags;
          t2 & 16 && pb(Z.stateNode, "");
          if (t2 & 128) {
            var q2 = Z.alternate;
            if (null !== q2) {
              var v2 = q2.ref;
              null !== v2 && ("function" === typeof v2 ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h = Z;
              cj(g, h);
              var J2 = h.alternate;
              dj(h);
              null !== J2 && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (null === Z)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (null !== Z);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      null !== g && Oe(t2) && (q2 = g.start, v2 = g.end, void 0 === v2 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h = t2.textContent.length, J2 = Math.min(g.start, h), g = void 0 === g.end ? J2 : Math.min(g.end, h), !v2.extend && J2 > g && (h = g, g = J2, J2 = h), h = Le(t2, J2), f2 = Le(t2, g), h && f2 && (1 !== v2.rangeCount || v2.anchorNode !== h.node || v2.anchorOffset !== h.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q2 = q2.createRange(), q2.setStart(h.node, h.offset), v2.removeAllRanges(), J2 > g ? (v2.addRange(q2), v2.extend(f2.node, f2.offset)) : (q2.setEnd(f2.node, f2.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        1 === v2.nodeType && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      "function" === typeof t2.focus && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c;
    Z = d;
    do
      try {
        for (t2 = a; null !== Z; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t2, Z.alternate, Z);
          if (K2 & 128) {
            q2 = void 0;
            var Q2 = Z.ref;
            if (null !== Q2) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L2;
                  break;
                default:
                  q2 = L2;
              }
              "function" === typeof Q2 ? Q2(q2) : Q2.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (null === Z)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (null !== Z);
    Z = null;
    $f();
    X = e;
  } else
    a.current = c;
  if (xj)
    xj = false, yj = a, zj = b;
  else
    for (Z = d; null !== Z; )
      b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b;
  d = a.pendingLanes;
  0 === d && (Ti = null);
  1 === d ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c = c.stateNode;
  if (Mf && "function" === typeof Mf.onCommitFiberRoot)
    try {
      Mf.onCommitFiberRoot(Lf, c, void 0, 64 === (c.current.flags & 64));
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if (0 !== (X & 8))
    return null;
  ig();
  return null;
}
function ek() {
  for (; null !== Z; ) {
    var a = Z.alternate;
    Jj || null === Ij || (0 !== (Z.flags & 8) ? dc(Z, Ij) && (Jj = true) : 13 === Z.tag && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b = Z.flags;
    0 !== (b & 256) && Xi(a, Z);
    0 === (b & 512) || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (90 !== zj) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b) {
  Aj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b) {
  Bj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (null === yj)
    return false;
  var a = yj;
  yj = null;
  if (0 !== (X & 48))
    throw Error(y(331));
  var b = X;
  X |= 32;
  var c = Bj;
  Bj = [];
  for (var d = 0; d < c.length; d += 2) {
    var e = c[d], f2 = c[d + 1], g = e.destroy;
    e.destroy = void 0;
    if ("function" === typeof g)
      try {
        g();
      } catch (k) {
        if (null === f2)
          throw Error(y(330));
        Wi(f2, k);
      }
  }
  c = Aj;
  Aj = [];
  for (d = 0; d < c.length; d += 2) {
    e = c[d];
    f2 = c[d + 1];
    try {
      var h = e.create;
      e.destroy = h();
    } catch (k) {
      if (null === f2)
        throw Error(y(330));
      Wi(f2, k);
    }
  }
  for (h = a.current.firstEffect; null !== h; )
    a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
  X = b;
  ig();
  return true;
}
function gk(a, b, c) {
  b = Mi(c, b);
  b = Pi(a, b, 1);
  Ag(a, b);
  b = Hg();
  a = Kj(a, 1);
  null !== a && ($c(a, 1, b), Mj(a, b));
}
function Wi(a, b) {
  if (3 === a.tag)
    gk(a, a, b);
  else
    for (var c = a.return; null !== c; ) {
      if (3 === c.tag) {
        gk(c, a, b);
        break;
      } else if (1 === c.tag) {
        var d = c.stateNode;
        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) {
          a = Mi(b, a);
          var e = Si(c, a, 1);
          Ag(c, e);
          e = Hg();
          c = Kj(c, 1);
          if (null !== c)
            $c(c, 1, e), Mj(c, e);
          else if ("function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d)))
            try {
              d.componentDidCatch(b, a);
            } catch (f2) {
            }
          break;
        }
      }
      c = c.return;
    }
}
function Yj(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = Hg();
  a.pingedLanes |= a.suspendedLanes & c;
  U === a && (W & c) === c && (4 === V || 3 === V && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
  Mj(a, b);
}
function lj(a, b) {
  var c = a.stateNode;
  null !== c && c.delete(b);
  b = 0;
  0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b = Yc(62914560 & ~Gj), 0 === b && (b = 4194304)));
  c = Hg();
  a = Kj(a, b);
  null !== a && ($c(a, b, c), Mj(a, c));
}
var ck;
ck = function(a, b, c) {
  var d = b.lanes;
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps || N.current)
      ug = true;
    else if (0 !== (c & d))
      ug = 0 !== (a.flags & 16384) ? true : false;
    else {
      ug = false;
      switch (b.tag) {
        case 3:
          ri(b);
          sh();
          break;
        case 5:
          gh(b);
          break;
        case 1:
          Ff(b.type) && Jf(b);
          break;
        case 4:
          eh(b, b.stateNode.containerInfo);
          break;
        case 10:
          d = b.memoizedProps.value;
          var e = b.type._context;
          I(mg, e._currentValue);
          e._currentValue = d;
          break;
        case 13:
          if (null !== b.memoizedState) {
            if (0 !== (c & b.child.childLanes))
              return ti(a, b, c);
            I(P, P.current & 1);
            b = hi(a, b, c);
            return null !== b ? b.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 64)) {
            if (d)
              return Ai(a, b, c);
            b.flags |= 64;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          I(P, P.current);
          if (d)
            break;
          else
            return null;
        case 23:
        case 24:
          return b.lanes = 0, mi(a, b, c);
      }
      return hi(a, b, c);
    }
  else
    ug = false;
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      a = b.pendingProps;
      e = Ef(b, M.current);
      tg(b, c);
      e = Ch(null, b, d, a, e, c);
      b.flags |= 1;
      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (Ff(d)) {
          var f2 = true;
          Jf(b);
        } else
          f2 = false;
        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
        xg(b);
        var g = d.getDerivedStateFromProps;
        "function" === typeof g && Gg(b, d, g, a);
        e.updater = Kg;
        b.stateNode = e;
        e._reactInternals = b;
        Og(b, d, a, c);
        b = qi(null, b, d, true, f2, c);
      } else
        b.tag = 0, fi(null, b, e, c), b = b.child;
      return b;
    case 16:
      e = b.elementType;
      a: {
        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        f2 = e._init;
        e = f2(e._payload);
        b.type = e;
        f2 = b.tag = hk(e);
        a = lg(e, a);
        switch (f2) {
          case 0:
            b = li(null, b, e, a, c);
            break a;
          case 1:
            b = pi(null, b, e, a, c);
            break a;
          case 11:
            b = gi(null, b, e, a, c);
            break a;
          case 14:
            b = ii(null, b, e, lg(e.type, a), d, c);
            break a;
        }
        throw Error(y(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
    case 3:
      ri(b);
      d = b.updateQueue;
      if (null === a || null === d)
        throw Error(y(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = null !== e ? e.element : null;
      yg(a, b);
      Cg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e)
        sh(), b = hi(a, b, c);
      else {
        e = b.stateNode;
        if (f2 = e.hydrate)
          kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f2 = lh = true;
        if (f2) {
          a = e.mutableSourceEagerHydrationData;
          if (null != a)
            for (e = 0; e < a.length; e += 2)
              f2 = a[e], f2._workInProgressVersionPrimary = a[e + 1], th.push(f2);
          c = Zg(b, null, d, c);
          for (b.child = c; c; )
            c.flags = c.flags & -3 | 1024, c = c.sibling;
        } else
          fi(a, b, d, c), sh();
        b = b.child;
      }
      return b;
    case 5:
      return gh(b), null === a && ph(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : null !== f2 && nf(d, f2) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
    case 6:
      return null === a && ph(b), null;
    case 13:
      return ti(a, b, c);
    case 4:
      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
    case 7:
      return fi(a, b, b.pendingProps, c), b.child;
    case 8:
      return fi(
        a,
        b,
        b.pendingProps.children,
        c
      ), b.child;
    case 12:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f2 = e.value;
        var h = b.type._context;
        I(mg, h._currentValue);
        h._currentValue = f2;
        if (null !== g)
          if (h = g.value, f2 = He(h, f2) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f2) : 1073741823) | 0, 0 === f2) {
            if (g.children === e.children && !N.current) {
              b = hi(a, b, c);
              break a;
            }
          } else
            for (h = b.child, null !== h && (h.return = b); null !== h; ) {
              var k = h.dependencies;
              if (null !== k) {
                g = h.child;
                for (var l2 = k.firstContext; null !== l2; ) {
                  if (l2.context === d && 0 !== (l2.observedBits & f2)) {
                    1 === h.tag && (l2 = zg(-1, c & -c), l2.tag = 2, Ag(h, l2));
                    h.lanes |= c;
                    l2 = h.alternate;
                    null !== l2 && (l2.lanes |= c);
                    sg(h.return, c);
                    k.lanes |= c;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;
              if (null !== g)
                g.return = h;
              else
                for (g = h; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  h = g.sibling;
                  if (null !== h) {
                    h.return = g.return;
                    g = h;
                    break;
                  }
                  g = g.return;
                }
              h = g;
            }
        fi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f2 = b.pendingProps, d = f2.children, tg(b, c), e = vg(
        e,
        f2.unstable_observedBits
      ), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
    case 14:
      return e = b.type, f2 = lg(e, b.pendingProps), f2 = lg(e.type, f2), ii(a, b, e, f2, d, c);
    case 15:
      return ki(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
    case 19:
      return Ai(a, b, c);
    case 23:
      return mi(a, b, c);
    case 24:
      return mi(a, b, c);
  }
  throw Error(y(156, b.tag));
};
function ik(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b, c, d) {
  return new ik(a, b, c, d);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if ("function" === typeof a)
    return ji(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b) {
  var c = a.alternate;
  null === c ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Vg(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    ji(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c.children, e, f2, b);
        case Ha:
          g = 8;
          e |= 16;
          break;
        case wa:
          g = 8;
          e |= 1;
          break;
        case xa:
          return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f2, a;
        case Ba:
          return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f2, a;
        case Ca:
          return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f2, a;
        case Ia:
          return vi(c, e, f2, b);
        case Ja:
          return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f2, a;
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case ya:
                g = 10;
                break a;
              case za:
                g = 9;
                break a;
              case Aa:
                g = 11;
                break a;
              case Da:
                g = 14;
                break a;
              case Ea:
                g = 16;
                d = null;
                break a;
              case Fa:
                g = 22;
                break a;
            }
          throw Error(y(130, null == a ? a : typeof a, ""));
      }
  b = nh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Xg(a, b, c, d) {
  a = nh(7, a, d, b);
  a.lanes = c;
  return a;
}
function vi(a, b, c, d) {
  a = nh(23, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  return a;
}
function Ug(a, b, c) {
  a = nh(6, a, null, b);
  a.lanes = c;
  return a;
}
function Wg(a, b, c) {
  b = nh(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function jk(a, b, c) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: ta, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function lk(a, b, c, d) {
  var e = b.current, f2 = Hg(), g = Ig(e);
  a:
    if (c) {
      c = c._reactInternals;
      b: {
        if (Zb(c) !== c || 1 !== c.tag)
          throw Error(y(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (Ff(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (null !== h);
        throw Error(y(171));
      }
      if (1 === c.tag) {
        var k = c.type;
        if (Ff(k)) {
          c = If(c, k, h);
          break a;
        }
      }
      c = h;
    } else
      c = Cf;
  null === b.context ? b.context = c : b.pendingContext = c;
  b = zg(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  Ag(e, b);
  Jg(e, g, f2);
  return g;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function ok(a, b) {
  nk(a, b);
  (a = a.alternate) && nk(a, b);
}
function pk() {
  return null;
}
function qk(a, b, c) {
  var d = null != c && null != c.hydrationOptions && c.hydrationOptions.mutableSources || null;
  c = new jk(a, b, null != c && true === c.hydrate);
  b = nh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
  c.current = b;
  b.stateNode = c;
  xg(b);
  a[ff] = c.current;
  cf(8 === a.nodeType ? a.parentNode : a);
  if (d)
    for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      null == c.mutableSourceEagerHydrationData ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
  this._internalRoot = c;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  lk(null, a, null, function() {
    b[ff] = null;
  });
};
function rk(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function sk(a, b) {
  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c; c = a.lastChild; )
      a.removeChild(c);
  return new qk(a, 0, b ? { hydrate: true } : void 0);
}
function tk(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2._internalRoot;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = mk(g);
        h.call(a2);
      };
    }
    lk(b, g, a, e);
  } else {
    f2 = c._reactRootContainer = sk(c, d);
    g = f2._internalRoot;
    if ("function" === typeof e) {
      var k = e;
      e = function() {
        var a2 = mk(g);
        k.call(a2);
      };
    }
    Xj(function() {
      lk(b, g, a, e);
    });
  }
  return mk(g);
}
ec = function(a) {
  if (13 === a.tag) {
    var b = Hg();
    Jg(a, 4, b);
    ok(a, 4);
  }
};
fc = function(a) {
  if (13 === a.tag) {
    var b = Hg();
    Jg(a, 67108864, b);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (13 === a.tag) {
    var b = Hg(), c = Ig(a);
    Jg(a, c, b);
    ok(a, c);
  }
};
hc = function(a, b) {
  return b();
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      ab(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(y(90));
            Wa(d);
            ab(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Wj;
Hb = function(a, b, c, d, e) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b, c, d, e));
  } finally {
    X = f2, 0 === X && (wj(), ig());
  }
};
Ib = function() {
  0 === (X & 49) && (Vj(), Oj());
};
Jb = function(a, b) {
  var c = X;
  X |= 2;
  try {
    return a(b);
  } finally {
    X = c, 0 === X && (wj(), ig());
  }
};
function uk(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!rk(b))
    throw Error(y(200));
  return kk(a, b, null, c);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(y(188));
    throw Error(y(268, Object.keys(a)));
  }
  a = cc(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b) {
  var c = X;
  if (0 !== (c & 48))
    return a(b);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b));
  } finally {
    X = c, ig();
  }
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, true, c);
};
reactDom_production_min.render = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a, b) {
  return uk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!rk(c))
    throw Error(y(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(y(38));
  return tk(a, b, c, false, d);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
var sax$1 = {};
var __viteBrowserExternal = {};
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
(function(exports) {
  (function(sax2) {
    sax2.parser = function(strict, opt) {
      return new SAXParser(strict, opt);
    };
    sax2.SAXParser = SAXParser;
    sax2.SAXStream = SAXStream;
    sax2.createStream = createStream;
    sax2.MAX_BUFFER_LENGTH = 64 * 1024;
    var buffers = [
      "comment",
      "sgmlDecl",
      "textNode",
      "tagName",
      "doctype",
      "procInstName",
      "procInstBody",
      "entity",
      "attribName",
      "attribValue",
      "cdata",
      "script"
    ];
    sax2.EVENTS = [
      "text",
      "processinginstruction",
      "sgmldeclaration",
      "doctype",
      "comment",
      "opentagstart",
      "attribute",
      "opentag",
      "closetag",
      "opencdata",
      "cdata",
      "closecdata",
      "error",
      "end",
      "ready",
      "script",
      "opennamespace",
      "closenamespace"
    ];
    function SAXParser(strict, opt) {
      if (!(this instanceof SAXParser)) {
        return new SAXParser(strict, opt);
      }
      var parser = this;
      clearBuffers(parser);
      parser.q = parser.c = "";
      parser.bufferCheckPosition = sax2.MAX_BUFFER_LENGTH;
      parser.opt = opt || {};
      parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
      parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
      parser.tags = [];
      parser.closed = parser.closedRoot = parser.sawRoot = false;
      parser.tag = parser.error = null;
      parser.strict = !!strict;
      parser.noscript = !!(strict || parser.opt.noscript);
      parser.state = S2.BEGIN;
      parser.strictEntities = parser.opt.strictEntities;
      parser.ENTITIES = parser.strictEntities ? Object.create(sax2.XML_ENTITIES) : Object.create(sax2.ENTITIES);
      parser.attribList = [];
      if (parser.opt.xmlns) {
        parser.ns = Object.create(rootNS);
      }
      parser.trackPosition = parser.opt.position !== false;
      if (parser.trackPosition) {
        parser.position = parser.line = parser.column = 0;
      }
      emit(parser, "onready");
    }
    if (!Object.create) {
      Object.create = function(o) {
        function F2() {
        }
        F2.prototype = o;
        var newf = new F2();
        return newf;
      };
    }
    if (!Object.keys) {
      Object.keys = function(o) {
        var a = [];
        for (var i2 in o)
          if (o.hasOwnProperty(i2))
            a.push(i2);
        return a;
      };
    }
    function checkBufferLength(parser) {
      var maxAllowed = Math.max(sax2.MAX_BUFFER_LENGTH, 10);
      var maxActual = 0;
      for (var i2 = 0, l2 = buffers.length; i2 < l2; i2++) {
        var len = parser[buffers[i2]].length;
        if (len > maxAllowed) {
          switch (buffers[i2]) {
            case "textNode":
              closeText(parser);
              break;
            case "cdata":
              emitNode(parser, "oncdata", parser.cdata);
              parser.cdata = "";
              break;
            case "script":
              emitNode(parser, "onscript", parser.script);
              parser.script = "";
              break;
            default:
              error(parser, "Max buffer length exceeded: " + buffers[i2]);
          }
        }
        maxActual = Math.max(maxActual, len);
      }
      var m2 = sax2.MAX_BUFFER_LENGTH - maxActual;
      parser.bufferCheckPosition = m2 + parser.position;
    }
    function clearBuffers(parser) {
      for (var i2 = 0, l2 = buffers.length; i2 < l2; i2++) {
        parser[buffers[i2]] = "";
      }
    }
    function flushBuffers(parser) {
      closeText(parser);
      if (parser.cdata !== "") {
        emitNode(parser, "oncdata", parser.cdata);
        parser.cdata = "";
      }
      if (parser.script !== "") {
        emitNode(parser, "onscript", parser.script);
        parser.script = "";
      }
    }
    SAXParser.prototype = {
      end: function() {
        end(this);
      },
      write,
      resume: function() {
        this.error = null;
        return this;
      },
      close: function() {
        return this.write(null);
      },
      flush: function() {
        flushBuffers(this);
      }
    };
    var Stream;
    try {
      Stream = require("stream").Stream;
    } catch (ex) {
      Stream = function() {
      };
    }
    if (!Stream)
      Stream = function() {
      };
    var streamWraps = sax2.EVENTS.filter(function(ev) {
      return ev !== "error" && ev !== "end";
    });
    function createStream(strict, opt) {
      return new SAXStream(strict, opt);
    }
    function SAXStream(strict, opt) {
      if (!(this instanceof SAXStream)) {
        return new SAXStream(strict, opt);
      }
      Stream.apply(this);
      this._parser = new SAXParser(strict, opt);
      this.writable = true;
      this.readable = true;
      var me2 = this;
      this._parser.onend = function() {
        me2.emit("end");
      };
      this._parser.onerror = function(er) {
        me2.emit("error", er);
        me2._parser.error = null;
      };
      this._decoder = null;
      streamWraps.forEach(function(ev) {
        Object.defineProperty(me2, "on" + ev, {
          get: function() {
            return me2._parser["on" + ev];
          },
          set: function(h) {
            if (!h) {
              me2.removeAllListeners(ev);
              me2._parser["on" + ev] = h;
              return h;
            }
            me2.on(ev, h);
          },
          enumerable: true,
          configurable: false
        });
      });
    }
    SAXStream.prototype = Object.create(Stream.prototype, {
      constructor: {
        value: SAXStream
      }
    });
    SAXStream.prototype.write = function(data2) {
      if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data2)) {
        if (!this._decoder) {
          var SD = require$$0.StringDecoder;
          this._decoder = new SD("utf8");
        }
        data2 = this._decoder.write(data2);
      }
      this._parser.write(data2.toString());
      this.emit("data", data2);
      return true;
    };
    SAXStream.prototype.end = function(chunk) {
      if (chunk && chunk.length) {
        this.write(chunk);
      }
      this._parser.end();
      return true;
    };
    SAXStream.prototype.on = function(ev, handler) {
      var me2 = this;
      if (!me2._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
        me2._parser["on" + ev] = function() {
          var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          args.splice(0, 0, ev);
          me2.emit.apply(me2, args);
        };
      }
      return Stream.prototype.on.call(me2, ev, handler);
    };
    var CDATA = "[CDATA[";
    var DOCTYPE = "DOCTYPE";
    var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
    var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
    var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };
    var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function isWhitespace(c) {
      return c === " " || c === "\n" || c === "\r" || c === "	";
    }
    function isQuote(c) {
      return c === '"' || c === "'";
    }
    function isAttribEnd(c) {
      return c === ">" || isWhitespace(c);
    }
    function isMatch(regex, c) {
      return regex.test(c);
    }
    function notMatch(regex, c) {
      return !isMatch(regex, c);
    }
    var S2 = 0;
    sax2.STATE = {
      BEGIN: S2++,
      BEGIN_WHITESPACE: S2++,
      TEXT: S2++,
      TEXT_ENTITY: S2++,
      OPEN_WAKA: S2++,
      SGML_DECL: S2++,
      SGML_DECL_QUOTED: S2++,
      DOCTYPE: S2++,
      DOCTYPE_QUOTED: S2++,
      DOCTYPE_DTD: S2++,
      DOCTYPE_DTD_QUOTED: S2++,
      COMMENT_STARTING: S2++,
      COMMENT: S2++,
      COMMENT_ENDING: S2++,
      COMMENT_ENDED: S2++,
      CDATA: S2++,
      CDATA_ENDING: S2++,
      CDATA_ENDING_2: S2++,
      PROC_INST: S2++,
      PROC_INST_BODY: S2++,
      PROC_INST_ENDING: S2++,
      OPEN_TAG: S2++,
      OPEN_TAG_SLASH: S2++,
      ATTRIB: S2++,
      ATTRIB_NAME: S2++,
      ATTRIB_NAME_SAW_WHITE: S2++,
      ATTRIB_VALUE: S2++,
      ATTRIB_VALUE_QUOTED: S2++,
      ATTRIB_VALUE_CLOSED: S2++,
      ATTRIB_VALUE_UNQUOTED: S2++,
      ATTRIB_VALUE_ENTITY_Q: S2++,
      ATTRIB_VALUE_ENTITY_U: S2++,
      CLOSE_TAG: S2++,
      CLOSE_TAG_SAW_WHITE: S2++,
      SCRIPT: S2++,
      SCRIPT_ENDING: S2++
    };
    sax2.XML_ENTITIES = {
      "amp": "&",
      "gt": ">",
      "lt": "<",
      "quot": '"',
      "apos": "'"
    };
    sax2.ENTITIES = {
      "amp": "&",
      "gt": ">",
      "lt": "<",
      "quot": '"',
      "apos": "'",
      "AElig": 198,
      "Aacute": 193,
      "Acirc": 194,
      "Agrave": 192,
      "Aring": 197,
      "Atilde": 195,
      "Auml": 196,
      "Ccedil": 199,
      "ETH": 208,
      "Eacute": 201,
      "Ecirc": 202,
      "Egrave": 200,
      "Euml": 203,
      "Iacute": 205,
      "Icirc": 206,
      "Igrave": 204,
      "Iuml": 207,
      "Ntilde": 209,
      "Oacute": 211,
      "Ocirc": 212,
      "Ograve": 210,
      "Oslash": 216,
      "Otilde": 213,
      "Ouml": 214,
      "THORN": 222,
      "Uacute": 218,
      "Ucirc": 219,
      "Ugrave": 217,
      "Uuml": 220,
      "Yacute": 221,
      "aacute": 225,
      "acirc": 226,
      "aelig": 230,
      "agrave": 224,
      "aring": 229,
      "atilde": 227,
      "auml": 228,
      "ccedil": 231,
      "eacute": 233,
      "ecirc": 234,
      "egrave": 232,
      "eth": 240,
      "euml": 235,
      "iacute": 237,
      "icirc": 238,
      "igrave": 236,
      "iuml": 239,
      "ntilde": 241,
      "oacute": 243,
      "ocirc": 244,
      "ograve": 242,
      "oslash": 248,
      "otilde": 245,
      "ouml": 246,
      "szlig": 223,
      "thorn": 254,
      "uacute": 250,
      "ucirc": 251,
      "ugrave": 249,
      "uuml": 252,
      "yacute": 253,
      "yuml": 255,
      "copy": 169,
      "reg": 174,
      "nbsp": 160,
      "iexcl": 161,
      "cent": 162,
      "pound": 163,
      "curren": 164,
      "yen": 165,
      "brvbar": 166,
      "sect": 167,
      "uml": 168,
      "ordf": 170,
      "laquo": 171,
      "not": 172,
      "shy": 173,
      "macr": 175,
      "deg": 176,
      "plusmn": 177,
      "sup1": 185,
      "sup2": 178,
      "sup3": 179,
      "acute": 180,
      "micro": 181,
      "para": 182,
      "middot": 183,
      "cedil": 184,
      "ordm": 186,
      "raquo": 187,
      "frac14": 188,
      "frac12": 189,
      "frac34": 190,
      "iquest": 191,
      "times": 215,
      "divide": 247,
      "OElig": 338,
      "oelig": 339,
      "Scaron": 352,
      "scaron": 353,
      "Yuml": 376,
      "fnof": 402,
      "circ": 710,
      "tilde": 732,
      "Alpha": 913,
      "Beta": 914,
      "Gamma": 915,
      "Delta": 916,
      "Epsilon": 917,
      "Zeta": 918,
      "Eta": 919,
      "Theta": 920,
      "Iota": 921,
      "Kappa": 922,
      "Lambda": 923,
      "Mu": 924,
      "Nu": 925,
      "Xi": 926,
      "Omicron": 927,
      "Pi": 928,
      "Rho": 929,
      "Sigma": 931,
      "Tau": 932,
      "Upsilon": 933,
      "Phi": 934,
      "Chi": 935,
      "Psi": 936,
      "Omega": 937,
      "alpha": 945,
      "beta": 946,
      "gamma": 947,
      "delta": 948,
      "epsilon": 949,
      "zeta": 950,
      "eta": 951,
      "theta": 952,
      "iota": 953,
      "kappa": 954,
      "lambda": 955,
      "mu": 956,
      "nu": 957,
      "xi": 958,
      "omicron": 959,
      "pi": 960,
      "rho": 961,
      "sigmaf": 962,
      "sigma": 963,
      "tau": 964,
      "upsilon": 965,
      "phi": 966,
      "chi": 967,
      "psi": 968,
      "omega": 969,
      "thetasym": 977,
      "upsih": 978,
      "piv": 982,
      "ensp": 8194,
      "emsp": 8195,
      "thinsp": 8201,
      "zwnj": 8204,
      "zwj": 8205,
      "lrm": 8206,
      "rlm": 8207,
      "ndash": 8211,
      "mdash": 8212,
      "lsquo": 8216,
      "rsquo": 8217,
      "sbquo": 8218,
      "ldquo": 8220,
      "rdquo": 8221,
      "bdquo": 8222,
      "dagger": 8224,
      "Dagger": 8225,
      "bull": 8226,
      "hellip": 8230,
      "permil": 8240,
      "prime": 8242,
      "Prime": 8243,
      "lsaquo": 8249,
      "rsaquo": 8250,
      "oline": 8254,
      "frasl": 8260,
      "euro": 8364,
      "image": 8465,
      "weierp": 8472,
      "real": 8476,
      "trade": 8482,
      "alefsym": 8501,
      "larr": 8592,
      "uarr": 8593,
      "rarr": 8594,
      "darr": 8595,
      "harr": 8596,
      "crarr": 8629,
      "lArr": 8656,
      "uArr": 8657,
      "rArr": 8658,
      "dArr": 8659,
      "hArr": 8660,
      "forall": 8704,
      "part": 8706,
      "exist": 8707,
      "empty": 8709,
      "nabla": 8711,
      "isin": 8712,
      "notin": 8713,
      "ni": 8715,
      "prod": 8719,
      "sum": 8721,
      "minus": 8722,
      "lowast": 8727,
      "radic": 8730,
      "prop": 8733,
      "infin": 8734,
      "ang": 8736,
      "and": 8743,
      "or": 8744,
      "cap": 8745,
      "cup": 8746,
      "int": 8747,
      "there4": 8756,
      "sim": 8764,
      "cong": 8773,
      "asymp": 8776,
      "ne": 8800,
      "equiv": 8801,
      "le": 8804,
      "ge": 8805,
      "sub": 8834,
      "sup": 8835,
      "nsub": 8836,
      "sube": 8838,
      "supe": 8839,
      "oplus": 8853,
      "otimes": 8855,
      "perp": 8869,
      "sdot": 8901,
      "lceil": 8968,
      "rceil": 8969,
      "lfloor": 8970,
      "rfloor": 8971,
      "lang": 9001,
      "rang": 9002,
      "loz": 9674,
      "spades": 9824,
      "clubs": 9827,
      "hearts": 9829,
      "diams": 9830
    };
    Object.keys(sax2.ENTITIES).forEach(function(key) {
      var e = sax2.ENTITIES[key];
      var s2 = typeof e === "number" ? String.fromCharCode(e) : e;
      sax2.ENTITIES[key] = s2;
    });
    for (var s in sax2.STATE) {
      sax2.STATE[sax2.STATE[s]] = s;
    }
    S2 = sax2.STATE;
    function emit(parser, event, data2) {
      parser[event] && parser[event](data2);
    }
    function emitNode(parser, nodeType, data2) {
      if (parser.textNode)
        closeText(parser);
      emit(parser, nodeType, data2);
    }
    function closeText(parser) {
      parser.textNode = textopts(parser.opt, parser.textNode);
      if (parser.textNode)
        emit(parser, "ontext", parser.textNode);
      parser.textNode = "";
    }
    function textopts(opt, text) {
      if (opt.trim)
        text = text.trim();
      if (opt.normalize)
        text = text.replace(/\s+/g, " ");
      return text;
    }
    function error(parser, er) {
      closeText(parser);
      if (parser.trackPosition) {
        er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
      }
      er = new Error(er);
      parser.error = er;
      emit(parser, "onerror", er);
      return parser;
    }
    function end(parser) {
      if (parser.sawRoot && !parser.closedRoot)
        strictFail(parser, "Unclosed root tag");
      if (parser.state !== S2.BEGIN && parser.state !== S2.BEGIN_WHITESPACE && parser.state !== S2.TEXT) {
        error(parser, "Unexpected end");
      }
      closeText(parser);
      parser.c = "";
      parser.closed = true;
      emit(parser, "onend");
      SAXParser.call(parser, parser.strict, parser.opt);
      return parser;
    }
    function strictFail(parser, message) {
      if (typeof parser !== "object" || !(parser instanceof SAXParser)) {
        throw new Error("bad call to strictFail");
      }
      if (parser.strict) {
        error(parser, message);
      }
    }
    function newTag(parser) {
      if (!parser.strict)
        parser.tagName = parser.tagName[parser.looseCase]();
      var parent = parser.tags[parser.tags.length - 1] || parser;
      var tag = parser.tag = { name: parser.tagName, attributes: {} };
      if (parser.opt.xmlns) {
        tag.ns = parent.ns;
      }
      parser.attribList.length = 0;
      emitNode(parser, "onopentagstart", tag);
    }
    function qname(name, attribute) {
      var i2 = name.indexOf(":");
      var qualName = i2 < 0 ? ["", name] : name.split(":");
      var prefix = qualName[0];
      var local = qualName[1];
      if (attribute && name === "xmlns") {
        prefix = "xmlns";
        local = "";
      }
      return { prefix, local };
    }
    function attrib(parser) {
      if (!parser.strict) {
        parser.attribName = parser.attribName[parser.looseCase]();
      }
      if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
        parser.attribName = parser.attribValue = "";
        return;
      }
      if (parser.opt.xmlns) {
        var qn = qname(parser.attribName, true);
        var prefix = qn.prefix;
        var local = qn.local;
        if (prefix === "xmlns") {
          if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
            strictFail(
              parser,
              "xml: prefix must be bound to " + XML_NAMESPACE + "\nActual: " + parser.attribValue
            );
          } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
            strictFail(
              parser,
              "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\nActual: " + parser.attribValue
            );
          } else {
            var tag = parser.tag;
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (tag.ns === parent.ns) {
              tag.ns = Object.create(parent.ns);
            }
            tag.ns[local] = parser.attribValue;
          }
        }
        parser.attribList.push([parser.attribName, parser.attribValue]);
      } else {
        parser.tag.attributes[parser.attribName] = parser.attribValue;
        emitNode(parser, "onattribute", {
          name: parser.attribName,
          value: parser.attribValue
        });
      }
      parser.attribName = parser.attribValue = "";
    }
    function openTag(parser, selfClosing) {
      if (parser.opt.xmlns) {
        var tag = parser.tag;
        var qn = qname(parser.tagName);
        tag.prefix = qn.prefix;
        tag.local = qn.local;
        tag.uri = tag.ns[qn.prefix] || "";
        if (tag.prefix && !tag.uri) {
          strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(parser.tagName));
          tag.uri = qn.prefix;
        }
        var parent = parser.tags[parser.tags.length - 1] || parser;
        if (tag.ns && parent.ns !== tag.ns) {
          Object.keys(tag.ns).forEach(function(p2) {
            emitNode(parser, "onopennamespace", {
              prefix: p2,
              uri: tag.ns[p2]
            });
          });
        }
        for (var i2 = 0, l2 = parser.attribList.length; i2 < l2; i2++) {
          var nv = parser.attribList[i2];
          var name = nv[0];
          var value = nv[1];
          var qualName = qname(name, true);
          var prefix = qualName.prefix;
          var local = qualName.local;
          var uri = prefix === "" ? "" : tag.ns[prefix] || "";
          var a = {
            name,
            value,
            prefix,
            local,
            uri
          };
          if (prefix && prefix !== "xmlns" && !uri) {
            strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix));
            a.uri = prefix;
          }
          parser.tag.attributes[name] = a;
          emitNode(parser, "onattribute", a);
        }
        parser.attribList.length = 0;
      }
      parser.tag.isSelfClosing = !!selfClosing;
      parser.sawRoot = true;
      parser.tags.push(parser.tag);
      emitNode(parser, "onopentag", parser.tag);
      if (!selfClosing) {
        if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
          parser.state = S2.SCRIPT;
        } else {
          parser.state = S2.TEXT;
        }
        parser.tag = null;
        parser.tagName = "";
      }
      parser.attribName = parser.attribValue = "";
      parser.attribList.length = 0;
    }
    function closeTag(parser) {
      if (!parser.tagName) {
        strictFail(parser, "Weird empty close tag.");
        parser.textNode += "</>";
        parser.state = S2.TEXT;
        return;
      }
      if (parser.script) {
        if (parser.tagName !== "script") {
          parser.script += "</" + parser.tagName + ">";
          parser.tagName = "";
          parser.state = S2.SCRIPT;
          return;
        }
        emitNode(parser, "onscript", parser.script);
        parser.script = "";
      }
      var t2 = parser.tags.length;
      var tagName = parser.tagName;
      if (!parser.strict) {
        tagName = tagName[parser.looseCase]();
      }
      var closeTo = tagName;
      while (t2--) {
        var close = parser.tags[t2];
        if (close.name !== closeTo) {
          strictFail(parser, "Unexpected close tag");
        } else {
          break;
        }
      }
      if (t2 < 0) {
        strictFail(parser, "Unmatched closing tag: " + parser.tagName);
        parser.textNode += "</" + parser.tagName + ">";
        parser.state = S2.TEXT;
        return;
      }
      parser.tagName = tagName;
      var s2 = parser.tags.length;
      while (s2-- > t2) {
        var tag = parser.tag = parser.tags.pop();
        parser.tagName = parser.tag.name;
        emitNode(parser, "onclosetag", parser.tagName);
        var x2 = {};
        for (var i2 in tag.ns) {
          x2[i2] = tag.ns[i2];
        }
        var parent = parser.tags[parser.tags.length - 1] || parser;
        if (parser.opt.xmlns && tag.ns !== parent.ns) {
          Object.keys(tag.ns).forEach(function(p2) {
            var n2 = tag.ns[p2];
            emitNode(parser, "onclosenamespace", { prefix: p2, uri: n2 });
          });
        }
      }
      if (t2 === 0)
        parser.closedRoot = true;
      parser.tagName = parser.attribValue = parser.attribName = "";
      parser.attribList.length = 0;
      parser.state = S2.TEXT;
    }
    function parseEntity(parser) {
      var entity = parser.entity;
      var entityLC = entity.toLowerCase();
      var num;
      var numStr = "";
      if (parser.ENTITIES[entity]) {
        return parser.ENTITIES[entity];
      }
      if (parser.ENTITIES[entityLC]) {
        return parser.ENTITIES[entityLC];
      }
      entity = entityLC;
      if (entity.charAt(0) === "#") {
        if (entity.charAt(1) === "x") {
          entity = entity.slice(2);
          num = parseInt(entity, 16);
          numStr = num.toString(16);
        } else {
          entity = entity.slice(1);
          num = parseInt(entity, 10);
          numStr = num.toString(10);
        }
      }
      entity = entity.replace(/^0+/, "");
      if (isNaN(num) || numStr.toLowerCase() !== entity) {
        strictFail(parser, "Invalid character entity");
        return "&" + parser.entity + ";";
      }
      return String.fromCodePoint(num);
    }
    function beginWhiteSpace(parser, c) {
      if (c === "<") {
        parser.state = S2.OPEN_WAKA;
        parser.startTagPosition = parser.position;
      } else if (!isWhitespace(c)) {
        strictFail(parser, "Non-whitespace before first tag.");
        parser.textNode = c;
        parser.state = S2.TEXT;
      }
    }
    function charAt(chunk, i2) {
      var result = "";
      if (i2 < chunk.length) {
        result = chunk.charAt(i2);
      }
      return result;
    }
    function write(chunk) {
      var parser = this;
      if (this.error) {
        throw this.error;
      }
      if (parser.closed) {
        return error(
          parser,
          "Cannot write after close. Assign an onready handler."
        );
      }
      if (chunk === null) {
        return end(parser);
      }
      if (typeof chunk === "object") {
        chunk = chunk.toString();
      }
      var i2 = 0;
      var c = "";
      while (true) {
        c = charAt(chunk, i2++);
        parser.c = c;
        if (!c) {
          break;
        }
        if (parser.trackPosition) {
          parser.position++;
          if (c === "\n") {
            parser.line++;
            parser.column = 0;
          } else {
            parser.column++;
          }
        }
        switch (parser.state) {
          case S2.BEGIN:
            parser.state = S2.BEGIN_WHITESPACE;
            if (c === "\uFEFF") {
              continue;
            }
            beginWhiteSpace(parser, c);
            continue;
          case S2.BEGIN_WHITESPACE:
            beginWhiteSpace(parser, c);
            continue;
          case S2.TEXT:
            if (parser.sawRoot && !parser.closedRoot) {
              var starti = i2 - 1;
              while (c && c !== "<" && c !== "&") {
                c = charAt(chunk, i2++);
                if (c && parser.trackPosition) {
                  parser.position++;
                  if (c === "\n") {
                    parser.line++;
                    parser.column = 0;
                  } else {
                    parser.column++;
                  }
                }
              }
              parser.textNode += chunk.substring(starti, i2 - 1);
            }
            if (c === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
              parser.state = S2.OPEN_WAKA;
              parser.startTagPosition = parser.position;
            } else {
              if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
                strictFail(parser, "Text data outside of root node.");
              }
              if (c === "&") {
                parser.state = S2.TEXT_ENTITY;
              } else {
                parser.textNode += c;
              }
            }
            continue;
          case S2.SCRIPT:
            if (c === "<") {
              parser.state = S2.SCRIPT_ENDING;
            } else {
              parser.script += c;
            }
            continue;
          case S2.SCRIPT_ENDING:
            if (c === "/") {
              parser.state = S2.CLOSE_TAG;
            } else {
              parser.script += "<" + c;
              parser.state = S2.SCRIPT;
            }
            continue;
          case S2.OPEN_WAKA:
            if (c === "!") {
              parser.state = S2.SGML_DECL;
              parser.sgmlDecl = "";
            } else if (isWhitespace(c))
              ;
            else if (isMatch(nameStart, c)) {
              parser.state = S2.OPEN_TAG;
              parser.tagName = c;
            } else if (c === "/") {
              parser.state = S2.CLOSE_TAG;
              parser.tagName = "";
            } else if (c === "?") {
              parser.state = S2.PROC_INST;
              parser.procInstName = parser.procInstBody = "";
            } else {
              strictFail(parser, "Unencoded <");
              if (parser.startTagPosition + 1 < parser.position) {
                var pad = parser.position - parser.startTagPosition;
                c = new Array(pad).join(" ") + c;
              }
              parser.textNode += "<" + c;
              parser.state = S2.TEXT;
            }
            continue;
          case S2.SGML_DECL:
            if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
              emitNode(parser, "onopencdata");
              parser.state = S2.CDATA;
              parser.sgmlDecl = "";
              parser.cdata = "";
            } else if (parser.sgmlDecl + c === "--") {
              parser.state = S2.COMMENT;
              parser.comment = "";
              parser.sgmlDecl = "";
            } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
              parser.state = S2.DOCTYPE;
              if (parser.doctype || parser.sawRoot) {
                strictFail(
                  parser,
                  "Inappropriately located doctype declaration"
                );
              }
              parser.doctype = "";
              parser.sgmlDecl = "";
            } else if (c === ">") {
              emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
              parser.sgmlDecl = "";
              parser.state = S2.TEXT;
            } else if (isQuote(c)) {
              parser.state = S2.SGML_DECL_QUOTED;
              parser.sgmlDecl += c;
            } else {
              parser.sgmlDecl += c;
            }
            continue;
          case S2.SGML_DECL_QUOTED:
            if (c === parser.q) {
              parser.state = S2.SGML_DECL;
              parser.q = "";
            }
            parser.sgmlDecl += c;
            continue;
          case S2.DOCTYPE:
            if (c === ">") {
              parser.state = S2.TEXT;
              emitNode(parser, "ondoctype", parser.doctype);
              parser.doctype = true;
            } else {
              parser.doctype += c;
              if (c === "[") {
                parser.state = S2.DOCTYPE_DTD;
              } else if (isQuote(c)) {
                parser.state = S2.DOCTYPE_QUOTED;
                parser.q = c;
              }
            }
            continue;
          case S2.DOCTYPE_QUOTED:
            parser.doctype += c;
            if (c === parser.q) {
              parser.q = "";
              parser.state = S2.DOCTYPE;
            }
            continue;
          case S2.DOCTYPE_DTD:
            parser.doctype += c;
            if (c === "]") {
              parser.state = S2.DOCTYPE;
            } else if (isQuote(c)) {
              parser.state = S2.DOCTYPE_DTD_QUOTED;
              parser.q = c;
            }
            continue;
          case S2.DOCTYPE_DTD_QUOTED:
            parser.doctype += c;
            if (c === parser.q) {
              parser.state = S2.DOCTYPE_DTD;
              parser.q = "";
            }
            continue;
          case S2.COMMENT:
            if (c === "-") {
              parser.state = S2.COMMENT_ENDING;
            } else {
              parser.comment += c;
            }
            continue;
          case S2.COMMENT_ENDING:
            if (c === "-") {
              parser.state = S2.COMMENT_ENDED;
              parser.comment = textopts(parser.opt, parser.comment);
              if (parser.comment) {
                emitNode(parser, "oncomment", parser.comment);
              }
              parser.comment = "";
            } else {
              parser.comment += "-" + c;
              parser.state = S2.COMMENT;
            }
            continue;
          case S2.COMMENT_ENDED:
            if (c !== ">") {
              strictFail(parser, "Malformed comment");
              parser.comment += "--" + c;
              parser.state = S2.COMMENT;
            } else {
              parser.state = S2.TEXT;
            }
            continue;
          case S2.CDATA:
            if (c === "]") {
              parser.state = S2.CDATA_ENDING;
            } else {
              parser.cdata += c;
            }
            continue;
          case S2.CDATA_ENDING:
            if (c === "]") {
              parser.state = S2.CDATA_ENDING_2;
            } else {
              parser.cdata += "]" + c;
              parser.state = S2.CDATA;
            }
            continue;
          case S2.CDATA_ENDING_2:
            if (c === ">") {
              if (parser.cdata) {
                emitNode(parser, "oncdata", parser.cdata);
              }
              emitNode(parser, "onclosecdata");
              parser.cdata = "";
              parser.state = S2.TEXT;
            } else if (c === "]") {
              parser.cdata += "]";
            } else {
              parser.cdata += "]]" + c;
              parser.state = S2.CDATA;
            }
            continue;
          case S2.PROC_INST:
            if (c === "?") {
              parser.state = S2.PROC_INST_ENDING;
            } else if (isWhitespace(c)) {
              parser.state = S2.PROC_INST_BODY;
            } else {
              parser.procInstName += c;
            }
            continue;
          case S2.PROC_INST_BODY:
            if (!parser.procInstBody && isWhitespace(c)) {
              continue;
            } else if (c === "?") {
              parser.state = S2.PROC_INST_ENDING;
            } else {
              parser.procInstBody += c;
            }
            continue;
          case S2.PROC_INST_ENDING:
            if (c === ">") {
              emitNode(parser, "onprocessinginstruction", {
                name: parser.procInstName,
                body: parser.procInstBody
              });
              parser.procInstName = parser.procInstBody = "";
              parser.state = S2.TEXT;
            } else {
              parser.procInstBody += "?" + c;
              parser.state = S2.PROC_INST_BODY;
            }
            continue;
          case S2.OPEN_TAG:
            if (isMatch(nameBody, c)) {
              parser.tagName += c;
            } else {
              newTag(parser);
              if (c === ">") {
                openTag(parser);
              } else if (c === "/") {
                parser.state = S2.OPEN_TAG_SLASH;
              } else {
                if (!isWhitespace(c)) {
                  strictFail(parser, "Invalid character in tag name");
                }
                parser.state = S2.ATTRIB;
              }
            }
            continue;
          case S2.OPEN_TAG_SLASH:
            if (c === ">") {
              openTag(parser, true);
              closeTag(parser);
            } else {
              strictFail(parser, "Forward-slash in opening tag not followed by >");
              parser.state = S2.ATTRIB;
            }
            continue;
          case S2.ATTRIB:
            if (isWhitespace(c)) {
              continue;
            } else if (c === ">") {
              openTag(parser);
            } else if (c === "/") {
              parser.state = S2.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c)) {
              parser.attribName = c;
              parser.attribValue = "";
              parser.state = S2.ATTRIB_NAME;
            } else {
              strictFail(parser, "Invalid attribute name");
            }
            continue;
          case S2.ATTRIB_NAME:
            if (c === "=") {
              parser.state = S2.ATTRIB_VALUE;
            } else if (c === ">") {
              strictFail(parser, "Attribute without value");
              parser.attribValue = parser.attribName;
              attrib(parser);
              openTag(parser);
            } else if (isWhitespace(c)) {
              parser.state = S2.ATTRIB_NAME_SAW_WHITE;
            } else if (isMatch(nameBody, c)) {
              parser.attribName += c;
            } else {
              strictFail(parser, "Invalid attribute name");
            }
            continue;
          case S2.ATTRIB_NAME_SAW_WHITE:
            if (c === "=") {
              parser.state = S2.ATTRIB_VALUE;
            } else if (isWhitespace(c)) {
              continue;
            } else {
              strictFail(parser, "Attribute without value");
              parser.tag.attributes[parser.attribName] = "";
              parser.attribValue = "";
              emitNode(parser, "onattribute", {
                name: parser.attribName,
                value: ""
              });
              parser.attribName = "";
              if (c === ">") {
                openTag(parser);
              } else if (isMatch(nameStart, c)) {
                parser.attribName = c;
                parser.state = S2.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
                parser.state = S2.ATTRIB;
              }
            }
            continue;
          case S2.ATTRIB_VALUE:
            if (isWhitespace(c)) {
              continue;
            } else if (isQuote(c)) {
              parser.q = c;
              parser.state = S2.ATTRIB_VALUE_QUOTED;
            } else {
              strictFail(parser, "Unquoted attribute value");
              parser.state = S2.ATTRIB_VALUE_UNQUOTED;
              parser.attribValue = c;
            }
            continue;
          case S2.ATTRIB_VALUE_QUOTED:
            if (c !== parser.q) {
              if (c === "&") {
                parser.state = S2.ATTRIB_VALUE_ENTITY_Q;
              } else {
                parser.attribValue += c;
              }
              continue;
            }
            attrib(parser);
            parser.q = "";
            parser.state = S2.ATTRIB_VALUE_CLOSED;
            continue;
          case S2.ATTRIB_VALUE_CLOSED:
            if (isWhitespace(c)) {
              parser.state = S2.ATTRIB;
            } else if (c === ">") {
              openTag(parser);
            } else if (c === "/") {
              parser.state = S2.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c)) {
              strictFail(parser, "No whitespace between attributes");
              parser.attribName = c;
              parser.attribValue = "";
              parser.state = S2.ATTRIB_NAME;
            } else {
              strictFail(parser, "Invalid attribute name");
            }
            continue;
          case S2.ATTRIB_VALUE_UNQUOTED:
            if (!isAttribEnd(c)) {
              if (c === "&") {
                parser.state = S2.ATTRIB_VALUE_ENTITY_U;
              } else {
                parser.attribValue += c;
              }
              continue;
            }
            attrib(parser);
            if (c === ">") {
              openTag(parser);
            } else {
              parser.state = S2.ATTRIB;
            }
            continue;
          case S2.CLOSE_TAG:
            if (!parser.tagName) {
              if (isWhitespace(c)) {
                continue;
              } else if (notMatch(nameStart, c)) {
                if (parser.script) {
                  parser.script += "</" + c;
                  parser.state = S2.SCRIPT;
                } else {
                  strictFail(parser, "Invalid tagname in closing tag.");
                }
              } else {
                parser.tagName = c;
              }
            } else if (c === ">") {
              closeTag(parser);
            } else if (isMatch(nameBody, c)) {
              parser.tagName += c;
            } else if (parser.script) {
              parser.script += "</" + parser.tagName;
              parser.tagName = "";
              parser.state = S2.SCRIPT;
            } else {
              if (!isWhitespace(c)) {
                strictFail(parser, "Invalid tagname in closing tag");
              }
              parser.state = S2.CLOSE_TAG_SAW_WHITE;
            }
            continue;
          case S2.CLOSE_TAG_SAW_WHITE:
            if (isWhitespace(c)) {
              continue;
            }
            if (c === ">") {
              closeTag(parser);
            } else {
              strictFail(parser, "Invalid characters in closing tag");
            }
            continue;
          case S2.TEXT_ENTITY:
          case S2.ATTRIB_VALUE_ENTITY_Q:
          case S2.ATTRIB_VALUE_ENTITY_U:
            var returnState;
            var buffer;
            switch (parser.state) {
              case S2.TEXT_ENTITY:
                returnState = S2.TEXT;
                buffer = "textNode";
                break;
              case S2.ATTRIB_VALUE_ENTITY_Q:
                returnState = S2.ATTRIB_VALUE_QUOTED;
                buffer = "attribValue";
                break;
              case S2.ATTRIB_VALUE_ENTITY_U:
                returnState = S2.ATTRIB_VALUE_UNQUOTED;
                buffer = "attribValue";
                break;
            }
            if (c === ";") {
              if (parser.opt.unparsedEntities) {
                var parsedEntity = parseEntity(parser);
                parser.entity = "";
                parser.state = returnState;
                parser.write(parsedEntity);
              } else {
                parser[buffer] += parseEntity(parser);
                parser.entity = "";
                parser.state = returnState;
              }
            } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
              parser.entity += c;
            } else {
              strictFail(parser, "Invalid character in entity name");
              parser[buffer] += "&" + parser.entity + c;
              parser.entity = "";
              parser.state = returnState;
            }
            continue;
          default: {
            throw new Error(parser, "Unknown state: " + parser.state);
          }
        }
      }
      if (parser.position >= parser.bufferCheckPosition) {
        checkBufferLength(parser);
      }
      return parser;
    }
    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
    if (!String.fromCodePoint) {
      (function() {
        var stringFromCharCode = String.fromCharCode;
        var floor2 = Math.floor;
        var fromCodePoint = function() {
          var MAX_SIZE = 16384;
          var codeUnits = [];
          var highSurrogate;
          var lowSurrogate;
          var index = -1;
          var length = arguments.length;
          if (!length) {
            return "";
          }
          var result = "";
          while (++index < length) {
            var codePoint = Number(arguments[index]);
            if (!isFinite(codePoint) || codePoint < 0 || codePoint > 1114111 || floor2(codePoint) !== codePoint) {
              throw RangeError("Invalid code point: " + codePoint);
            }
            if (codePoint <= 65535) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 65536;
              highSurrogate = (codePoint >> 10) + 55296;
              lowSurrogate = codePoint % 1024 + 56320;
              codeUnits.push(highSurrogate, lowSurrogate);
            }
            if (index + 1 === length || codeUnits.length > MAX_SIZE) {
              result += stringFromCharCode.apply(null, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result;
        };
        if (Object.defineProperty) {
          Object.defineProperty(String, "fromCodePoint", {
            value: fromCodePoint,
            configurable: true,
            writable: true
          });
        } else {
          String.fromCodePoint = fromCodePoint;
        }
      })();
    }
  })(exports);
})(sax$1);
var arrayHelper = {
  isArray: function(value) {
    if (Array.isArray) {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
};
var isArray$3 = arrayHelper.isArray;
var optionsHelper = {
  copyOptions: function(options2) {
    var key, copy = {};
    for (key in options2) {
      if (options2.hasOwnProperty(key)) {
        copy[key] = options2[key];
      }
    }
    return copy;
  },
  ensureFlagExists: function(item, options2) {
    if (!(item in options2) || typeof options2[item] !== "boolean") {
      options2[item] = false;
    }
  },
  ensureSpacesExists: function(options2) {
    if (!("spaces" in options2) || typeof options2.spaces !== "number" && typeof options2.spaces !== "string") {
      options2.spaces = 0;
    }
  },
  ensureAlwaysArrayExists: function(options2) {
    if (!("alwaysArray" in options2) || typeof options2.alwaysArray !== "boolean" && !isArray$3(options2.alwaysArray)) {
      options2.alwaysArray = false;
    }
  },
  ensureKeyExists: function(key, options2) {
    if (!(key + "Key" in options2) || typeof options2[key + "Key"] !== "string") {
      options2[key + "Key"] = options2.compact ? "_" + key : key;
    }
  },
  checkFnExists: function(key, options2) {
    return key + "Fn" in options2;
  }
};
var sax = sax$1;
var helper$2 = optionsHelper;
var isArray$2 = arrayHelper.isArray;
var options;
var currentElement$1;
function validateOptions$2(userOptions) {
  options = helper$2.copyOptions(userOptions);
  helper$2.ensureFlagExists("ignoreDeclaration", options);
  helper$2.ensureFlagExists("ignoreInstruction", options);
  helper$2.ensureFlagExists("ignoreAttributes", options);
  helper$2.ensureFlagExists("ignoreText", options);
  helper$2.ensureFlagExists("ignoreComment", options);
  helper$2.ensureFlagExists("ignoreCdata", options);
  helper$2.ensureFlagExists("ignoreDoctype", options);
  helper$2.ensureFlagExists("compact", options);
  helper$2.ensureFlagExists("alwaysChildren", options);
  helper$2.ensureFlagExists("addParent", options);
  helper$2.ensureFlagExists("trim", options);
  helper$2.ensureFlagExists("nativeType", options);
  helper$2.ensureFlagExists("nativeTypeAttributes", options);
  helper$2.ensureFlagExists("sanitize", options);
  helper$2.ensureFlagExists("instructionHasAttributes", options);
  helper$2.ensureFlagExists("captureSpacesBetweenElements", options);
  helper$2.ensureAlwaysArrayExists(options);
  helper$2.ensureKeyExists("declaration", options);
  helper$2.ensureKeyExists("instruction", options);
  helper$2.ensureKeyExists("attributes", options);
  helper$2.ensureKeyExists("text", options);
  helper$2.ensureKeyExists("comment", options);
  helper$2.ensureKeyExists("cdata", options);
  helper$2.ensureKeyExists("doctype", options);
  helper$2.ensureKeyExists("type", options);
  helper$2.ensureKeyExists("name", options);
  helper$2.ensureKeyExists("elements", options);
  helper$2.ensureKeyExists("parent", options);
  return options;
}
function nativeType(value) {
  var nValue = Number(value);
  if (!isNaN(nValue)) {
    return nValue;
  }
  var bValue = value.toLowerCase();
  if (bValue === "true") {
    return true;
  } else if (bValue === "false") {
    return false;
  }
  return value;
}
function addField(type, value) {
  var key;
  if (options.compact) {
    if (!currentElement$1[options[type + "Key"]] && (isArray$2(options.alwaysArray) ? options.alwaysArray.indexOf(options[type + "Key"]) !== -1 : options.alwaysArray)) {
      currentElement$1[options[type + "Key"]] = [];
    }
    if (currentElement$1[options[type + "Key"]] && !isArray$2(currentElement$1[options[type + "Key"]])) {
      currentElement$1[options[type + "Key"]] = [currentElement$1[options[type + "Key"]]];
    }
    if (type + "Fn" in options && typeof value === "string") {
      value = options[type + "Fn"](value, currentElement$1);
    }
    if (type === "instruction" && ("instructionFn" in options || "instructionNameFn" in options)) {
      for (key in value) {
        if (value.hasOwnProperty(key)) {
          if ("instructionFn" in options) {
            value[key] = options.instructionFn(value[key], key, currentElement$1);
          } else {
            var temp = value[key];
            delete value[key];
            value[options.instructionNameFn(key, temp, currentElement$1)] = temp;
          }
        }
      }
    }
    if (isArray$2(currentElement$1[options[type + "Key"]])) {
      currentElement$1[options[type + "Key"]].push(value);
    } else {
      currentElement$1[options[type + "Key"]] = value;
    }
  } else {
    if (!currentElement$1[options.elementsKey]) {
      currentElement$1[options.elementsKey] = [];
    }
    var element = {};
    element[options.typeKey] = type;
    if (type === "instruction") {
      for (key in value) {
        if (value.hasOwnProperty(key)) {
          break;
        }
      }
      element[options.nameKey] = "instructionNameFn" in options ? options.instructionNameFn(key, value, currentElement$1) : key;
      if (options.instructionHasAttributes) {
        element[options.attributesKey] = value[key][options.attributesKey];
        if ("instructionFn" in options) {
          element[options.attributesKey] = options.instructionFn(element[options.attributesKey], key, currentElement$1);
        }
      } else {
        if ("instructionFn" in options) {
          value[key] = options.instructionFn(value[key], key, currentElement$1);
        }
        element[options.instructionKey] = value[key];
      }
    } else {
      if (type + "Fn" in options) {
        value = options[type + "Fn"](value, currentElement$1);
      }
      element[options[type + "Key"]] = value;
    }
    if (options.addParent) {
      element[options.parentKey] = currentElement$1;
    }
    currentElement$1[options.elementsKey].push(element);
  }
}
function manipulateAttributes(attributes) {
  if ("attributesFn" in options && attributes) {
    attributes = options.attributesFn(attributes, currentElement$1);
  }
  if ((options.trim || "attributeValueFn" in options || "attributeNameFn" in options || options.nativeTypeAttributes) && attributes) {
    var key;
    for (key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        if (options.trim)
          attributes[key] = attributes[key].trim();
        if (options.nativeTypeAttributes) {
          attributes[key] = nativeType(attributes[key]);
        }
        if ("attributeValueFn" in options)
          attributes[key] = options.attributeValueFn(attributes[key], key, currentElement$1);
        if ("attributeNameFn" in options) {
          var temp = attributes[key];
          delete attributes[key];
          attributes[options.attributeNameFn(key, attributes[key], currentElement$1)] = temp;
        }
      }
    }
  }
  return attributes;
}
function onInstruction(instruction) {
  var attributes = {};
  if (instruction.body && (instruction.name.toLowerCase() === "xml" || options.instructionHasAttributes)) {
    var attrsRegExp = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g;
    var match2;
    while ((match2 = attrsRegExp.exec(instruction.body)) !== null) {
      attributes[match2[1]] = match2[2] || match2[3] || match2[4];
    }
    attributes = manipulateAttributes(attributes);
  }
  if (instruction.name.toLowerCase() === "xml") {
    if (options.ignoreDeclaration) {
      return;
    }
    currentElement$1[options.declarationKey] = {};
    if (Object.keys(attributes).length) {
      currentElement$1[options.declarationKey][options.attributesKey] = attributes;
    }
    if (options.addParent) {
      currentElement$1[options.declarationKey][options.parentKey] = currentElement$1;
    }
  } else {
    if (options.ignoreInstruction) {
      return;
    }
    if (options.trim) {
      instruction.body = instruction.body.trim();
    }
    var value = {};
    if (options.instructionHasAttributes && Object.keys(attributes).length) {
      value[instruction.name] = {};
      value[instruction.name][options.attributesKey] = attributes;
    } else {
      value[instruction.name] = instruction.body;
    }
    addField("instruction", value);
  }
}
function onStartElement(name, attributes) {
  var element;
  if (typeof name === "object") {
    attributes = name.attributes;
    name = name.name;
  }
  attributes = manipulateAttributes(attributes);
  if ("elementNameFn" in options) {
    name = options.elementNameFn(name, currentElement$1);
  }
  if (options.compact) {
    element = {};
    if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {
      element[options.attributesKey] = {};
      var key;
      for (key in attributes) {
        if (attributes.hasOwnProperty(key)) {
          element[options.attributesKey][key] = attributes[key];
        }
      }
    }
    if (!(name in currentElement$1) && (isArray$2(options.alwaysArray) ? options.alwaysArray.indexOf(name) !== -1 : options.alwaysArray)) {
      currentElement$1[name] = [];
    }
    if (currentElement$1[name] && !isArray$2(currentElement$1[name])) {
      currentElement$1[name] = [currentElement$1[name]];
    }
    if (isArray$2(currentElement$1[name])) {
      currentElement$1[name].push(element);
    } else {
      currentElement$1[name] = element;
    }
  } else {
    if (!currentElement$1[options.elementsKey]) {
      currentElement$1[options.elementsKey] = [];
    }
    element = {};
    element[options.typeKey] = "element";
    element[options.nameKey] = name;
    if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {
      element[options.attributesKey] = attributes;
    }
    if (options.alwaysChildren) {
      element[options.elementsKey] = [];
    }
    currentElement$1[options.elementsKey].push(element);
  }
  element[options.parentKey] = currentElement$1;
  currentElement$1 = element;
}
function onText(text) {
  if (options.ignoreText) {
    return;
  }
  if (!text.trim() && !options.captureSpacesBetweenElements) {
    return;
  }
  if (options.trim) {
    text = text.trim();
  }
  if (options.nativeType) {
    text = nativeType(text);
  }
  if (options.sanitize) {
    text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  addField("text", text);
}
function onComment(comment) {
  if (options.ignoreComment) {
    return;
  }
  if (options.trim) {
    comment = comment.trim();
  }
  addField("comment", comment);
}
function onEndElement(name) {
  var parentElement = currentElement$1[options.parentKey];
  if (!options.addParent) {
    delete currentElement$1[options.parentKey];
  }
  currentElement$1 = parentElement;
}
function onCdata(cdata) {
  if (options.ignoreCdata) {
    return;
  }
  if (options.trim) {
    cdata = cdata.trim();
  }
  addField("cdata", cdata);
}
function onDoctype(doctype) {
  if (options.ignoreDoctype) {
    return;
  }
  doctype = doctype.replace(/^ /, "");
  if (options.trim) {
    doctype = doctype.trim();
  }
  addField("doctype", doctype);
}
function onError(error) {
  error.note = error;
}
var xml2js$2 = function(xml, userOptions) {
  var parser = sax.parser(true, {});
  var result = {};
  currentElement$1 = result;
  options = validateOptions$2(userOptions);
  {
    parser.opt = { strictEntities: true };
    parser.onopentag = onStartElement;
    parser.ontext = onText;
    parser.oncomment = onComment;
    parser.onclosetag = onEndElement;
    parser.onerror = onError;
    parser.oncdata = onCdata;
    parser.ondoctype = onDoctype;
    parser.onprocessinginstruction = onInstruction;
  }
  {
    parser.write(xml).close();
  }
  if (result[options.elementsKey]) {
    var temp = result[options.elementsKey];
    delete result[options.elementsKey];
    result[options.elementsKey] = temp;
    delete result.text;
  }
  return result;
};
var helper$1 = optionsHelper;
var xml2js$1 = xml2js$2;
function validateOptions$1(userOptions) {
  var options2 = helper$1.copyOptions(userOptions);
  helper$1.ensureSpacesExists(options2);
  return options2;
}
var xml2json$1 = function(xml, userOptions) {
  var options2, js, json, parentKey;
  options2 = validateOptions$1(userOptions);
  js = xml2js$1(xml, options2);
  parentKey = "compact" in options2 && options2.compact ? "_parent" : "parent";
  if ("addParent" in options2 && options2.addParent) {
    json = JSON.stringify(js, function(k, v2) {
      return k === parentKey ? "_" : v2;
    }, options2.spaces);
  } else {
    json = JSON.stringify(js, null, options2.spaces);
  }
  return json.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
};
var helper = optionsHelper;
var isArray$1 = arrayHelper.isArray;
var currentElement, currentElementName;
function validateOptions(userOptions) {
  var options2 = helper.copyOptions(userOptions);
  helper.ensureFlagExists("ignoreDeclaration", options2);
  helper.ensureFlagExists("ignoreInstruction", options2);
  helper.ensureFlagExists("ignoreAttributes", options2);
  helper.ensureFlagExists("ignoreText", options2);
  helper.ensureFlagExists("ignoreComment", options2);
  helper.ensureFlagExists("ignoreCdata", options2);
  helper.ensureFlagExists("ignoreDoctype", options2);
  helper.ensureFlagExists("compact", options2);
  helper.ensureFlagExists("indentText", options2);
  helper.ensureFlagExists("indentCdata", options2);
  helper.ensureFlagExists("indentAttributes", options2);
  helper.ensureFlagExists("indentInstruction", options2);
  helper.ensureFlagExists("fullTagEmptyElement", options2);
  helper.ensureFlagExists("noQuotesForNativeAttributes", options2);
  helper.ensureSpacesExists(options2);
  if (typeof options2.spaces === "number") {
    options2.spaces = Array(options2.spaces + 1).join(" ");
  }
  helper.ensureKeyExists("declaration", options2);
  helper.ensureKeyExists("instruction", options2);
  helper.ensureKeyExists("attributes", options2);
  helper.ensureKeyExists("text", options2);
  helper.ensureKeyExists("comment", options2);
  helper.ensureKeyExists("cdata", options2);
  helper.ensureKeyExists("doctype", options2);
  helper.ensureKeyExists("type", options2);
  helper.ensureKeyExists("name", options2);
  helper.ensureKeyExists("elements", options2);
  return options2;
}
function writeIndentation(options2, depth, firstLine) {
  return (!firstLine && options2.spaces ? "\n" : "") + Array(depth + 1).join(options2.spaces);
}
function writeAttributes(attributes, options2, depth) {
  if (options2.ignoreAttributes) {
    return "";
  }
  if ("attributesFn" in options2) {
    attributes = options2.attributesFn(attributes, currentElementName, currentElement);
  }
  var key, attr, attrName, quote, result = [];
  for (key in attributes) {
    if (attributes.hasOwnProperty(key) && attributes[key] !== null && attributes[key] !== void 0) {
      quote = options2.noQuotesForNativeAttributes && typeof attributes[key] !== "string" ? "" : '"';
      attr = "" + attributes[key];
      attr = attr.replace(/"/g, "&quot;");
      attrName = "attributeNameFn" in options2 ? options2.attributeNameFn(key, attr, currentElementName, currentElement) : key;
      result.push(options2.spaces && options2.indentAttributes ? writeIndentation(options2, depth + 1, false) : " ");
      result.push(attrName + "=" + quote + ("attributeValueFn" in options2 ? options2.attributeValueFn(attr, key, currentElementName, currentElement) : attr) + quote);
    }
  }
  if (attributes && Object.keys(attributes).length && options2.spaces && options2.indentAttributes) {
    result.push(writeIndentation(options2, depth, false));
  }
  return result.join("");
}
function writeDeclaration(declaration, options2, depth) {
  currentElement = declaration;
  currentElementName = "xml";
  return options2.ignoreDeclaration ? "" : "<?xml" + writeAttributes(declaration[options2.attributesKey], options2, depth) + "?>";
}
function writeInstruction(instruction, options2, depth) {
  if (options2.ignoreInstruction) {
    return "";
  }
  var key;
  for (key in instruction) {
    if (instruction.hasOwnProperty(key)) {
      break;
    }
  }
  var instructionName = "instructionNameFn" in options2 ? options2.instructionNameFn(key, instruction[key], currentElementName, currentElement) : key;
  if (typeof instruction[key] === "object") {
    currentElement = instruction;
    currentElementName = instructionName;
    return "<?" + instructionName + writeAttributes(instruction[key][options2.attributesKey], options2, depth) + "?>";
  } else {
    var instructionValue = instruction[key] ? instruction[key] : "";
    if ("instructionFn" in options2)
      instructionValue = options2.instructionFn(instructionValue, key, currentElementName, currentElement);
    return "<?" + instructionName + (instructionValue ? " " + instructionValue : "") + "?>";
  }
}
function writeComment(comment, options2) {
  return options2.ignoreComment ? "" : "<!--" + ("commentFn" in options2 ? options2.commentFn(comment, currentElementName, currentElement) : comment) + "-->";
}
function writeCdata(cdata, options2) {
  return options2.ignoreCdata ? "" : "<![CDATA[" + ("cdataFn" in options2 ? options2.cdataFn(cdata, currentElementName, currentElement) : cdata.replace("]]>", "]]]]><![CDATA[>")) + "]]>";
}
function writeDoctype(doctype, options2) {
  return options2.ignoreDoctype ? "" : "<!DOCTYPE " + ("doctypeFn" in options2 ? options2.doctypeFn(doctype, currentElementName, currentElement) : doctype) + ">";
}
function writeText(text, options2) {
  if (options2.ignoreText)
    return "";
  text = "" + text;
  text = text.replace(/&amp;/g, "&");
  text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return "textFn" in options2 ? options2.textFn(text, currentElementName, currentElement) : text;
}
function hasContent(element, options2) {
  var i2;
  if (element.elements && element.elements.length) {
    for (i2 = 0; i2 < element.elements.length; ++i2) {
      switch (element.elements[i2][options2.typeKey]) {
        case "text":
          if (options2.indentText) {
            return true;
          }
          break;
        case "cdata":
          if (options2.indentCdata) {
            return true;
          }
          break;
        case "instruction":
          if (options2.indentInstruction) {
            return true;
          }
          break;
        case "doctype":
        case "comment":
        case "element":
          return true;
        default:
          return true;
      }
    }
  }
  return false;
}
function writeElement(element, options2, depth) {
  currentElement = element;
  currentElementName = element.name;
  var xml = [], elementName = "elementNameFn" in options2 ? options2.elementNameFn(element.name, element) : element.name;
  xml.push("<" + elementName);
  if (element[options2.attributesKey]) {
    xml.push(writeAttributes(element[options2.attributesKey], options2, depth));
  }
  var withClosingTag = element[options2.elementsKey] && element[options2.elementsKey].length || element[options2.attributesKey] && element[options2.attributesKey]["xml:space"] === "preserve";
  if (!withClosingTag) {
    if ("fullTagEmptyElementFn" in options2) {
      withClosingTag = options2.fullTagEmptyElementFn(element.name, element);
    } else {
      withClosingTag = options2.fullTagEmptyElement;
    }
  }
  if (withClosingTag) {
    xml.push(">");
    if (element[options2.elementsKey] && element[options2.elementsKey].length) {
      xml.push(writeElements(element[options2.elementsKey], options2, depth + 1));
      currentElement = element;
      currentElementName = element.name;
    }
    xml.push(options2.spaces && hasContent(element, options2) ? "\n" + Array(depth + 1).join(options2.spaces) : "");
    xml.push("</" + elementName + ">");
  } else {
    xml.push("/>");
  }
  return xml.join("");
}
function writeElements(elements, options2, depth, firstLine) {
  return elements.reduce(function(xml, element) {
    var indent = writeIndentation(options2, depth, firstLine && !xml);
    switch (element.type) {
      case "element":
        return xml + indent + writeElement(element, options2, depth);
      case "comment":
        return xml + indent + writeComment(element[options2.commentKey], options2);
      case "doctype":
        return xml + indent + writeDoctype(element[options2.doctypeKey], options2);
      case "cdata":
        return xml + (options2.indentCdata ? indent : "") + writeCdata(element[options2.cdataKey], options2);
      case "text":
        return xml + (options2.indentText ? indent : "") + writeText(element[options2.textKey], options2);
      case "instruction":
        var instruction = {};
        instruction[element[options2.nameKey]] = element[options2.attributesKey] ? element : element[options2.instructionKey];
        return xml + (options2.indentInstruction ? indent : "") + writeInstruction(instruction, options2, depth);
    }
  }, "");
}
function hasContentCompact(element, options2, anyContent) {
  var key;
  for (key in element) {
    if (element.hasOwnProperty(key)) {
      switch (key) {
        case options2.parentKey:
        case options2.attributesKey:
          break;
        case options2.textKey:
          if (options2.indentText || anyContent) {
            return true;
          }
          break;
        case options2.cdataKey:
          if (options2.indentCdata || anyContent) {
            return true;
          }
          break;
        case options2.instructionKey:
          if (options2.indentInstruction || anyContent) {
            return true;
          }
          break;
        case options2.doctypeKey:
        case options2.commentKey:
          return true;
        default:
          return true;
      }
    }
  }
  return false;
}
function writeElementCompact(element, name, options2, depth, indent) {
  currentElement = element;
  currentElementName = name;
  var elementName = "elementNameFn" in options2 ? options2.elementNameFn(name, element) : name;
  if (typeof element === "undefined" || element === null || element === "") {
    return "fullTagEmptyElementFn" in options2 && options2.fullTagEmptyElementFn(name, element) || options2.fullTagEmptyElement ? "<" + elementName + "></" + elementName + ">" : "<" + elementName + "/>";
  }
  var xml = [];
  if (name) {
    xml.push("<" + elementName);
    if (typeof element !== "object") {
      xml.push(">" + writeText(element, options2) + "</" + elementName + ">");
      return xml.join("");
    }
    if (element[options2.attributesKey]) {
      xml.push(writeAttributes(element[options2.attributesKey], options2, depth));
    }
    var withClosingTag = hasContentCompact(element, options2, true) || element[options2.attributesKey] && element[options2.attributesKey]["xml:space"] === "preserve";
    if (!withClosingTag) {
      if ("fullTagEmptyElementFn" in options2) {
        withClosingTag = options2.fullTagEmptyElementFn(name, element);
      } else {
        withClosingTag = options2.fullTagEmptyElement;
      }
    }
    if (withClosingTag) {
      xml.push(">");
    } else {
      xml.push("/>");
      return xml.join("");
    }
  }
  xml.push(writeElementsCompact(element, options2, depth + 1, false));
  currentElement = element;
  currentElementName = name;
  if (name) {
    xml.push((indent ? writeIndentation(options2, depth, false) : "") + "</" + elementName + ">");
  }
  return xml.join("");
}
function writeElementsCompact(element, options2, depth, firstLine) {
  var i2, key, nodes, xml = [];
  for (key in element) {
    if (element.hasOwnProperty(key)) {
      nodes = isArray$1(element[key]) ? element[key] : [element[key]];
      for (i2 = 0; i2 < nodes.length; ++i2) {
        switch (key) {
          case options2.declarationKey:
            xml.push(writeDeclaration(nodes[i2], options2, depth));
            break;
          case options2.instructionKey:
            xml.push((options2.indentInstruction ? writeIndentation(options2, depth, firstLine) : "") + writeInstruction(nodes[i2], options2, depth));
            break;
          case options2.attributesKey:
          case options2.parentKey:
            break;
          case options2.textKey:
            xml.push((options2.indentText ? writeIndentation(options2, depth, firstLine) : "") + writeText(nodes[i2], options2));
            break;
          case options2.cdataKey:
            xml.push((options2.indentCdata ? writeIndentation(options2, depth, firstLine) : "") + writeCdata(nodes[i2], options2));
            break;
          case options2.doctypeKey:
            xml.push(writeIndentation(options2, depth, firstLine) + writeDoctype(nodes[i2], options2));
            break;
          case options2.commentKey:
            xml.push(writeIndentation(options2, depth, firstLine) + writeComment(nodes[i2], options2));
            break;
          default:
            xml.push(writeIndentation(options2, depth, firstLine) + writeElementCompact(nodes[i2], key, options2, depth, hasContentCompact(nodes[i2], options2)));
        }
        firstLine = firstLine && !xml.length;
      }
    }
  }
  return xml.join("");
}
var js2xml$2 = function(js, options2) {
  options2 = validateOptions(options2);
  var xml = [];
  currentElement = js;
  currentElementName = "_root_";
  if (options2.compact) {
    xml.push(writeElementsCompact(js, options2, 0, true));
  } else {
    if (js[options2.declarationKey]) {
      xml.push(writeDeclaration(js[options2.declarationKey], options2, 0));
    }
    if (js[options2.elementsKey] && js[options2.elementsKey].length) {
      xml.push(writeElements(js[options2.elementsKey], options2, 0, !xml.length));
    }
  }
  return xml.join("");
};
var js2xml$1 = js2xml$2;
var json2xml$1 = function(json, options2) {
  if (json instanceof Buffer) {
    json = json.toString();
  }
  var js = null;
  if (typeof json === "string") {
    try {
      js = JSON.parse(json);
    } catch (e) {
      throw new Error("The JSON structure is invalid");
    }
  } else {
    js = json;
  }
  return js2xml$1(js, options2);
};
var xml2js = xml2js$2;
var xml2json = xml2json$1;
var js2xml = js2xml$2;
var json2xml = json2xml$1;
var lib$1 = {
  xml2js,
  xml2json,
  js2xml,
  json2xml
};
function TableSessions({ url }) {
  const [data2, setData] = react.exports.useState([]);
  const [isLoading, setIsLoading] = react.exports.useState(true);
  const [error, setError] = react.exports.useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const xmlData = await response.text();
      const jsonData = lib$1.xml2json(xmlData, { compact: true, spaces: 4 });
      setData(JSON.parse(jsonData));
    } catch (error2) {
      setError(error2.message);
    } finally {
      setIsLoading(false);
    }
  };
  react.exports.useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 1e4);
    return () => {
      clearInterval(intervalId);
    };
  }, [url]);
  if (isLoading) {
    return /* @__PURE__ */ React$1.createElement("p", null, "Loading...");
  }
  if (error) {
    return /* @__PURE__ */ React$1.createElement("p", null, "Error: ", error);
  }
  if (!data2 || data2.length === 0) {
    return /* @__PURE__ */ React$1.createElement("p", null, "No data available");
  }
  let items = data2.body.sessions.item;
  if (!Array.isArray(items)) {
    items = items ? [items] : [];
  }
  const p2 = items.map((dataitem, index) => ({
    index: index + 1,
    name: dataitem._attributes.Name,
    encoder: dataitem._attributes.Encoder,
    decoder: dataitem._attributes.Decoder,
    live: dataitem._attributes.Live,
    ports: dataitem._attributes.Ports,
    created: dataitem._attributes.Created,
    expires: dataitem._attributes.Expires,
    params: dataitem._attributes.Params
  }));
  return /* @__PURE__ */ React$1.createElement("table", null, /* @__PURE__ */ React$1.createElement("thead", null, /* @__PURE__ */ React$1.createElement("tr", null, /* @__PURE__ */ React$1.createElement("th", null, "#"), /* @__PURE__ */ React$1.createElement("th", null, "NAME"), /* @__PURE__ */ React$1.createElement("th", null, "Encoder"), /* @__PURE__ */ React$1.createElement("th", null, "Decoder"), /* @__PURE__ */ React$1.createElement("th", null, "Live"), /* @__PURE__ */ React$1.createElement("th", null, "Ports"), /* @__PURE__ */ React$1.createElement("th", null, "Created"), /* @__PURE__ */ React$1.createElement("th", null, "Expires"), /* @__PURE__ */ React$1.createElement("th", null, "Params"))), /* @__PURE__ */ React$1.createElement("tbody", null, p2.map((dataitem, index) => /* @__PURE__ */ React$1.createElement("tr", {
    key: index
  }, /* @__PURE__ */ React$1.createElement("td", null, dataitem.index), /* @__PURE__ */ React$1.createElement("td", null, dataitem.name), /* @__PURE__ */ React$1.createElement("td", null, dataitem.encoder), /* @__PURE__ */ React$1.createElement("td", null, dataitem.decoder), /* @__PURE__ */ React$1.createElement("td", null, dataitem.live), /* @__PURE__ */ React$1.createElement("td", null, dataitem.ports), /* @__PURE__ */ React$1.createElement("td", null, dataitem.created), /* @__PURE__ */ React$1.createElement("td", null, dataitem.expires), /* @__PURE__ */ React$1.createElement("td", null, dataitem.params)))));
}
function TableDecoders({ url }) {
  const [data2, setData] = react.exports.useState([]);
  const [isLoading, setIsLoading] = react.exports.useState(true);
  const [error, setError] = react.exports.useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const xmlData = await response.text();
      const jsonData = lib$1.xml2json(xmlData, { compact: true, spaces: 4 });
      setData(JSON.parse(jsonData));
    } catch (error2) {
      setError(error2.message);
    } finally {
      setIsLoading(false);
    }
  };
  react.exports.useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 1e4);
    return () => {
      clearInterval(intervalId);
    };
  }, [url]);
  if (isLoading) {
    return /* @__PURE__ */ React$1.createElement("p", null, "Loading...");
  }
  if (error) {
    return /* @__PURE__ */ React$1.createElement("p", null, "Error: ", error);
  }
  if (!data2 || data2.length === 0) {
    return /* @__PURE__ */ React$1.createElement("p", null, "No data available");
  }
  let items = data2.body.decoders.item;
  if (!Array.isArray(items)) {
    items = items ? [items] : [];
  }
  const p2 = items.map((dataitem, index) => ({
    index: index + 1,
    inport: dataitem._attributes.inport,
    sid: dataitem._attributes.sid,
    srvport: dataitem._attributes.srvport,
    bitrate: dataitem._attributes.bitrate,
    lastactive: dataitem._attributes.lastactive,
    max_timeout: dataitem._attributes.max_timeout,
    total: dataitem._attributes.total,
    total_to: dataitem._attributes.total_to,
    percent: dataitem._attributes.percent,
    rtt: dataitem._attributes.rtt,
    rtt_avg: dataitem._attributes.rtt_avg,
    rtt_peak: dataitem._attributes.rtt_peak,
    act_to: dataitem._attributes.act_to
  }));
  return /* @__PURE__ */ React$1.createElement("table", null, /* @__PURE__ */ React$1.createElement("thead", null, /* @__PURE__ */ React$1.createElement("tr", null, /* @__PURE__ */ React$1.createElement("th", null, "#"), /* @__PURE__ */ React$1.createElement("th", null, "sid"), /* @__PURE__ */ React$1.createElement("th", null, "server"), /* @__PURE__ */ React$1.createElement("th", null, "port"), /* @__PURE__ */ React$1.createElement("th", null, "bitrate"), /* @__PURE__ */ React$1.createElement("th", null, "last active, s"), /* @__PURE__ */ React$1.createElement("th", null, "max timeout, s"), /* @__PURE__ */ React$1.createElement("th", null, "Packets"), /* @__PURE__ */ React$1.createElement("th", null, "Resent"), /* @__PURE__ */ React$1.createElement("th", null, "%"), /* @__PURE__ */ React$1.createElement("th", null, "RTT"), /* @__PURE__ */ React$1.createElement("th", null, "Avg"), /* @__PURE__ */ React$1.createElement("th", null, "Peak"), /* @__PURE__ */ React$1.createElement("th", null, "Ack timeout"))), /* @__PURE__ */ React$1.createElement("tbody", null, p2.map((dataitem, index) => /* @__PURE__ */ React$1.createElement("tr", {
    key: index
  }, /* @__PURE__ */ React$1.createElement("td", null, dataitem.index, " "), /* @__PURE__ */ React$1.createElement("td", null, dataitem.inport), /* @__PURE__ */ React$1.createElement("td", null, dataitem.sid), /* @__PURE__ */ React$1.createElement("td", null, dataitem.srvport), /* @__PURE__ */ React$1.createElement("td", null, dataitem.bitrate), /* @__PURE__ */ React$1.createElement("td", null, dataitem.lastactive), /* @__PURE__ */ React$1.createElement("td", null, dataitem.max_timeout), /* @__PURE__ */ React$1.createElement("td", null, dataitem.total), /* @__PURE__ */ React$1.createElement("td", null, dataitem.total_to), /* @__PURE__ */ React$1.createElement("td", null, dataitem.percent), /* @__PURE__ */ React$1.createElement("td", null, dataitem.rtt), /* @__PURE__ */ React$1.createElement("td", null, dataitem.rtt_avg), /* @__PURE__ */ React$1.createElement("td", null, dataitem.rtt_peak), /* @__PURE__ */ React$1.createElement("td", null, dataitem.act_to)))));
}
function TablePorts({ url }) {
  const [data2, setData] = react.exports.useState([]);
  const [isLoading, setIsLoading] = react.exports.useState(true);
  const [error, setError] = react.exports.useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const xmlData = await response.text();
      const jsonData = lib$1.xml2json(xmlData, { compact: true, spaces: 4 });
      setData(JSON.parse(jsonData));
    } catch (error2) {
      setError(error2.message);
    } finally {
      setIsLoading(false);
    }
  };
  react.exports.useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 1e4);
    return () => {
      clearInterval(intervalId);
    };
  }, [url]);
  if (isLoading) {
    return /* @__PURE__ */ React$1.createElement("p", null, "Loading...");
  }
  if (error) {
    return /* @__PURE__ */ React$1.createElement("p", null, "Error: ", error);
  }
  if (!data2 || data2.length === 0) {
    return /* @__PURE__ */ React$1.createElement("p", null, "No data available");
  }
  let items = data2.body.ports.item;
  if (!Array.isArray(items)) {
    items = items ? [items] : [];
  }
  const p2 = items.map((inport, index) => ({
    index: index + 1,
    port: inport._attributes.port,
    encoders: inport._attributes.encoders,
    bitrate_in: inport._attributes.bitrate_in,
    bitrate_out: inport._attributes.bitrate_out
  }));
  return /* @__PURE__ */ React$1.createElement("table", null, /* @__PURE__ */ React$1.createElement("thead", null, /* @__PURE__ */ React$1.createElement("tr", null, /* @__PURE__ */ React$1.createElement("th", null, "#"), /* @__PURE__ */ React$1.createElement("th", null, "Port"), /* @__PURE__ */ React$1.createElement("th", null, "Encoders"), /* @__PURE__ */ React$1.createElement("th", null, "Bitrate In"), /* @__PURE__ */ React$1.createElement("th", null, "Bitrate Out"))), /* @__PURE__ */ React$1.createElement("tbody", null, p2.map((port, index) => /* @__PURE__ */ React$1.createElement("tr", {
    key: index
  }, /* @__PURE__ */ React$1.createElement("td", null, " ", port.index, " "), /* @__PURE__ */ React$1.createElement("td", null, port.port), /* @__PURE__ */ React$1.createElement("td", null, port.encoders), /* @__PURE__ */ React$1.createElement("td", null, port.bitrate_in), /* @__PURE__ */ React$1.createElement("td", null, port.bitrate_out)))));
}
function TableStreams({ url }) {
  const [data2, setData] = react.exports.useState([]);
  const [isLoading, setIsLoading] = react.exports.useState(true);
  const [error, setError] = react.exports.useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const xmlData = await response.text();
      const jsonData = lib$1.xml2json(xmlData, { compact: true, spaces: 4 });
      setData(JSON.parse(jsonData));
    } catch (error2) {
      setError(error2.message);
    } finally {
      setIsLoading(false);
    }
  };
  react.exports.useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 1e4);
    return () => {
      clearInterval(intervalId);
    };
  }, [url]);
  if (isLoading) {
    return /* @__PURE__ */ React$1.createElement("p", null, "Loading...");
  }
  if (error) {
    return /* @__PURE__ */ React$1.createElement("p", null, "Error: ", error);
  }
  if (!data2 || data2.length === 0) {
    return /* @__PURE__ */ React$1.createElement("p", null, "No data available");
  }
  let items = data2.body.streams.item;
  if (!Array.isArray(items)) {
    items = items ? [items] : [];
  }
  const p2 = items.map((dataitem, index) => ({
    index: index + 1,
    encsid: dataitem._attributes.encsid,
    title: dataitem._attributes.title,
    bitrate: dataitem._attributes.bitrate,
    resolution: dataitem._attributes.resolution,
    fps: dataitem._attributes.fps,
    snd: dataitem._attributes.snd,
    ch: dataitem._attributes.ch,
    hw: dataitem._attributes.hw,
    ver: dataitem._attributes.ver,
    ip: dataitem._attributes.ip,
    port: dataitem._attributes.port,
    time: dataitem._attributes.time
  }));
  return /* @__PURE__ */ React$1.createElement("table", null, /* @__PURE__ */ React$1.createElement("thead", null, /* @__PURE__ */ React$1.createElement("tr", null, /* @__PURE__ */ React$1.createElement("th", null, "#"), /* @__PURE__ */ React$1.createElement("th", null, "Encoder sid"), /* @__PURE__ */ React$1.createElement("th", null, "Title"), /* @__PURE__ */ React$1.createElement("th", null, "Bitrate"), /* @__PURE__ */ React$1.createElement("th", null, "Resolution"), /* @__PURE__ */ React$1.createElement("th", null, "FPS"), /* @__PURE__ */ React$1.createElement("th", null, "Sound"), /* @__PURE__ */ React$1.createElement("th", null, "Channels"), /* @__PURE__ */ React$1.createElement("th", null, "OS"), /* @__PURE__ */ React$1.createElement("th", null, "Version"), /* @__PURE__ */ React$1.createElement("th", null, "IP"), /* @__PURE__ */ React$1.createElement("th", null, "Port"), /* @__PURE__ */ React$1.createElement("th", null, "Time"))), /* @__PURE__ */ React$1.createElement("tbody", null, p2.map((dataitem, index) => /* @__PURE__ */ React$1.createElement("tr", {
    key: index
  }, /* @__PURE__ */ React$1.createElement("td", null, dataitem.index, " "), /* @__PURE__ */ React$1.createElement("td", null, dataitem.encsid), /* @__PURE__ */ React$1.createElement("td", null, dataitem.title), /* @__PURE__ */ React$1.createElement("td", null, dataitem.bitrate), /* @__PURE__ */ React$1.createElement("td", null, dataitem.resolution), /* @__PURE__ */ React$1.createElement("td", null, dataitem.fps), /* @__PURE__ */ React$1.createElement("td", null, dataitem.snd), /* @__PURE__ */ React$1.createElement("td", null, dataitem.ch), /* @__PURE__ */ React$1.createElement("td", null, dataitem.hw), /* @__PURE__ */ React$1.createElement("td", null, dataitem.ver), /* @__PURE__ */ React$1.createElement("td", null, dataitem.ip), /* @__PURE__ */ React$1.createElement("td", null, dataitem.port), /* @__PURE__ */ React$1.createElement("td", null, dataitem.time)))));
}
function TableDataUsage({ url }) {
  const [data2, setData] = react.exports.useState([]);
  const [isLoading, setIsLoading] = react.exports.useState(true);
  const [error, setError] = react.exports.useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const xmlData = await response.text();
      const jsonData = lib$1.xml2json(xmlData, { compact: true, spaces: 4 });
      setData(JSON.parse(jsonData));
    } catch (error2) {
      setError(error2.message);
    } finally {
      setIsLoading(false);
    }
  };
  react.exports.useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 1e4);
    return () => {
      clearInterval(intervalId);
    };
  }, [url]);
  if (isLoading) {
    return /* @__PURE__ */ React$1.createElement("p", null, "Loading...");
  }
  if (error) {
    return /* @__PURE__ */ React$1.createElement("p", null, "Error: ", error);
  }
  if (!data2 || data2.length === 0) {
    return /* @__PURE__ */ React$1.createElement("p", null, "No data available");
  }
  let items = data2.body.data.item;
  if (!Array.isArray(items)) {
    items = items ? [items] : [];
  }
  const p2 = items.map((dataitem, index) => ({
    index: index + 1,
    ip: dataitem._attributes.ip,
    dataSent: dataitem._attributes.dataSent,
    timeRunning: dataitem._attributes.timeRunning,
    firstActive: dataitem._attributes.firstActive,
    lastActive: dataitem._attributes.lastActive
  }));
  return /* @__PURE__ */ React$1.createElement("table", null, /* @__PURE__ */ React$1.createElement("thead", null, /* @__PURE__ */ React$1.createElement("tr", null, /* @__PURE__ */ React$1.createElement("th", null, "#"), /* @__PURE__ */ React$1.createElement("th", null, "Data"), /* @__PURE__ */ React$1.createElement("th", null, "Time"), /* @__PURE__ */ React$1.createElement("th", null, "First Active"), /* @__PURE__ */ React$1.createElement("th", null, "Last Active"))), /* @__PURE__ */ React$1.createElement("tbody", null, p2.map((dataitem, index) => /* @__PURE__ */ React$1.createElement("tr", {
    key: index
  }, /* @__PURE__ */ React$1.createElement("td", null, dataitem.index), /* @__PURE__ */ React$1.createElement("td", null, dataitem.ip), /* @__PURE__ */ React$1.createElement("td", null, dataitem.dataSent), /* @__PURE__ */ React$1.createElement("td", null, dataitem.timeRunning), /* @__PURE__ */ React$1.createElement("td", null, dataitem.firstActive), /* @__PURE__ */ React$1.createElement("td", null, dataitem.lastActive)))));
}
var App$1 = "";
const USER_PASS = "?login=admin&hashedPass=fe01ce2a7fbac8fafaed7c982a04e229";
const DATA_USAGE_URL = "https://tl3.streambox.com/light/xmlDataUsage.php" + USER_PASS;
const DECODERS_URL = "https://tl3.streambox.com/light/xmlGetDecoders.php" + USER_PASS;
const SESSIONS_URL = "https://tl3.streambox.com/light/xmlGetSessions.php" + USER_PASS;
const PORTS_URL = "https://tl3.streambox.com/light/xmlIncomingPorts.php" + USER_PASS;
const STREAMS_URL = "https://tl3.streambox.com/light/xmlStreams.php" + USER_PASS;
function App() {
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React$1.createElement("h3", null, "Streambox Light Server"), /* @__PURE__ */ React$1.createElement("h4", null, "Available Encoder/Decoder Session IDs:"), /* @__PURE__ */ React$1.createElement(TableSessions, {
    url: SESSIONS_URL
  }), /* @__PURE__ */ React$1.createElement("p", null), /* @__PURE__ */ React$1.createElement("h4", null, "Streaming to Decoders:"), /* @__PURE__ */ React$1.createElement(TableDecoders, {
    url: DECODERS_URL
  }), /* @__PURE__ */ React$1.createElement("p", null), /* @__PURE__ */ React$1.createElement("h4", null, "Incoming ports:"), /* @__PURE__ */ React$1.createElement(TablePorts, {
    url: PORTS_URL
  }), /* @__PURE__ */ React$1.createElement("p", null), /* @__PURE__ */ React$1.createElement("h4", null, "Streams info:"), /* @__PURE__ */ React$1.createElement(TableStreams, {
    url: STREAMS_URL
  }), /* @__PURE__ */ React$1.createElement("p", null), /* @__PURE__ */ React$1.createElement("h4", null, "Data Usage Records:"), /* @__PURE__ */ React$1.createElement(TableDataUsage, {
    url: DATA_USAGE_URL
  }));
}
function NavBtn(props) {
  let classList = "nav-btn";
  if (props.currentPageName === props.navBtn) {
    classList = "nav-btn selected-route";
  }
  return /* @__PURE__ */ React$1.createElement("a", {
    onClick: () => props.changeRoute(props.navBtn),
    className: classList
  }, props.navBtn);
}
function debounce(callback, delay = 500) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log("Saving to LocalHost");
      callback();
    }, delay);
  };
}
function getRestEndpoint() {
  {
    return location.origin;
  }
}
async function logout() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let user;
  let token;
  if (urlParams.get("user") && urlParams.get("token")) {
    user = urlParams.get("user");
    token = urlParams.get("token");
  } else {
    if (localStorage.getItem("user") && localStorage.getItem("token")) {
      user = localStorage.getItem("user").toLowerCase();
      token = localStorage.getItem("token");
    }
  }
  const endpoint2 = location.origin;
  let formData = new FormData();
  formData.append("username", user.toLowerCase());
  formData.append("token", token);
  formData.append("fromreact", 1);
  formData.append("islogout", 1);
  let response;
  {
    response = await fetch(endpoint2 + "/sbuiauth/auth.php", {
      method: "POST",
      body: formData
    });
  }
  let json = await response.text();
  let [logoutStatus] = JSON.parse(json);
  if (logoutStatus === "logout success") {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location = `${location.origin}/sbuiauth`;
  } else {
    alert("Something went wrong with the authentication server");
  }
}
function md5(str) {
  var xl;
  var rotateLeft = function(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  };
  var addUnsigned = function(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 2147483648;
    lY8 = lY & 2147483648;
    lX4 = lX & 1073741824;
    lY4 = lY & 1073741824;
    lResult = (lX & 1073741823) + (lY & 1073741823);
    if (lX4 & lY4) {
      return lResult ^ 2147483648 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
      if (lResult & 1073741824) {
        return lResult ^ 3221225472 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 1073741824 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  };
  var _F = function(x22, y2, z2) {
    return x22 & y2 | ~x22 & z2;
  };
  var _G = function(x22, y2, z2) {
    return x22 & z2 | y2 & ~z2;
  };
  var _H = function(x22, y2, z2) {
    return x22 ^ y2 ^ z2;
  };
  var _I = function(x22, y2, z2) {
    return y2 ^ (x22 | ~z2);
  };
  var _FF = function(a2, b2, c2, d2, x22, s, ac2) {
    a2 = addUnsigned(a2, addUnsigned(addUnsigned(_F(b2, c2, d2), x22), ac2));
    return addUnsigned(rotateLeft(a2, s), b2);
  };
  var _GG = function(a2, b2, c2, d2, x22, s, ac2) {
    a2 = addUnsigned(a2, addUnsigned(addUnsigned(_G(b2, c2, d2), x22), ac2));
    return addUnsigned(rotateLeft(a2, s), b2);
  };
  var _HH = function(a2, b2, c2, d2, x22, s, ac2) {
    a2 = addUnsigned(a2, addUnsigned(addUnsigned(_H(b2, c2, d2), x22), ac2));
    return addUnsigned(rotateLeft(a2, s), b2);
  };
  var _II = function(a2, b2, c2, d2, x22, s, ac2) {
    a2 = addUnsigned(a2, addUnsigned(addUnsigned(_I(b2, c2, d2), x22), ac2));
    return addUnsigned(rotateLeft(a2, s), b2);
  };
  var convertToWordArray = function(str2) {
    var lWordCount;
    var lMessageLength = str2.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = new Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | str2.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }
    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  };
  var wordToHex = function(lValue) {
    var wordToHexValue = "", wordToHexValue_temp = "", lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      wordToHexValue_temp = "0" + lByte.toString(16);
      wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
    }
    return wordToHexValue;
  };
  var x2 = [], k, AA, BB, CC, DD, a, b, c, d, S11 = 7, S12 = 12, S13 = 17, S14 = 22, S21 = 5, S22 = 9, S23 = 14, S24 = 20, S31 = 4, S32 = 11, S33 = 16, S34 = 23, S41 = 6, S42 = 10, S43 = 15, S44 = 21;
  str = str;
  x2 = convertToWordArray(str);
  a = 1732584193;
  b = 4023233417;
  c = 2562383102;
  d = 271733878;
  xl = x2.length;
  for (k = 0; k < xl; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = _FF(a, b, c, d, x2[k + 0], S11, 3614090360);
    d = _FF(d, a, b, c, x2[k + 1], S12, 3905402710);
    c = _FF(c, d, a, b, x2[k + 2], S13, 606105819);
    b = _FF(b, c, d, a, x2[k + 3], S14, 3250441966);
    a = _FF(a, b, c, d, x2[k + 4], S11, 4118548399);
    d = _FF(d, a, b, c, x2[k + 5], S12, 1200080426);
    c = _FF(c, d, a, b, x2[k + 6], S13, 2821735955);
    b = _FF(b, c, d, a, x2[k + 7], S14, 4249261313);
    a = _FF(a, b, c, d, x2[k + 8], S11, 1770035416);
    d = _FF(d, a, b, c, x2[k + 9], S12, 2336552879);
    c = _FF(c, d, a, b, x2[k + 10], S13, 4294925233);
    b = _FF(b, c, d, a, x2[k + 11], S14, 2304563134);
    a = _FF(a, b, c, d, x2[k + 12], S11, 1804603682);
    d = _FF(d, a, b, c, x2[k + 13], S12, 4254626195);
    c = _FF(c, d, a, b, x2[k + 14], S13, 2792965006);
    b = _FF(b, c, d, a, x2[k + 15], S14, 1236535329);
    a = _GG(a, b, c, d, x2[k + 1], S21, 4129170786);
    d = _GG(d, a, b, c, x2[k + 6], S22, 3225465664);
    c = _GG(c, d, a, b, x2[k + 11], S23, 643717713);
    b = _GG(b, c, d, a, x2[k + 0], S24, 3921069994);
    a = _GG(a, b, c, d, x2[k + 5], S21, 3593408605);
    d = _GG(d, a, b, c, x2[k + 10], S22, 38016083);
    c = _GG(c, d, a, b, x2[k + 15], S23, 3634488961);
    b = _GG(b, c, d, a, x2[k + 4], S24, 3889429448);
    a = _GG(a, b, c, d, x2[k + 9], S21, 568446438);
    d = _GG(d, a, b, c, x2[k + 14], S22, 3275163606);
    c = _GG(c, d, a, b, x2[k + 3], S23, 4107603335);
    b = _GG(b, c, d, a, x2[k + 8], S24, 1163531501);
    a = _GG(a, b, c, d, x2[k + 13], S21, 2850285829);
    d = _GG(d, a, b, c, x2[k + 2], S22, 4243563512);
    c = _GG(c, d, a, b, x2[k + 7], S23, 1735328473);
    b = _GG(b, c, d, a, x2[k + 12], S24, 2368359562);
    a = _HH(a, b, c, d, x2[k + 5], S31, 4294588738);
    d = _HH(d, a, b, c, x2[k + 8], S32, 2272392833);
    c = _HH(c, d, a, b, x2[k + 11], S33, 1839030562);
    b = _HH(b, c, d, a, x2[k + 14], S34, 4259657740);
    a = _HH(a, b, c, d, x2[k + 1], S31, 2763975236);
    d = _HH(d, a, b, c, x2[k + 4], S32, 1272893353);
    c = _HH(c, d, a, b, x2[k + 7], S33, 4139469664);
    b = _HH(b, c, d, a, x2[k + 10], S34, 3200236656);
    a = _HH(a, b, c, d, x2[k + 13], S31, 681279174);
    d = _HH(d, a, b, c, x2[k + 0], S32, 3936430074);
    c = _HH(c, d, a, b, x2[k + 3], S33, 3572445317);
    b = _HH(b, c, d, a, x2[k + 6], S34, 76029189);
    a = _HH(a, b, c, d, x2[k + 9], S31, 3654602809);
    d = _HH(d, a, b, c, x2[k + 12], S32, 3873151461);
    c = _HH(c, d, a, b, x2[k + 15], S33, 530742520);
    b = _HH(b, c, d, a, x2[k + 2], S34, 3299628645);
    a = _II(a, b, c, d, x2[k + 0], S41, 4096336452);
    d = _II(d, a, b, c, x2[k + 7], S42, 1126891415);
    c = _II(c, d, a, b, x2[k + 14], S43, 2878612391);
    b = _II(b, c, d, a, x2[k + 5], S44, 4237533241);
    a = _II(a, b, c, d, x2[k + 12], S41, 1700485571);
    d = _II(d, a, b, c, x2[k + 3], S42, 2399980690);
    c = _II(c, d, a, b, x2[k + 10], S43, 4293915773);
    b = _II(b, c, d, a, x2[k + 1], S44, 2240044497);
    a = _II(a, b, c, d, x2[k + 8], S41, 1873313359);
    d = _II(d, a, b, c, x2[k + 15], S42, 4264355552);
    c = _II(c, d, a, b, x2[k + 6], S43, 2734768916);
    b = _II(b, c, d, a, x2[k + 13], S44, 1309151649);
    a = _II(a, b, c, d, x2[k + 4], S41, 4149444226);
    d = _II(d, a, b, c, x2[k + 11], S42, 3174756917);
    c = _II(c, d, a, b, x2[k + 2], S43, 718787259);
    b = _II(b, c, d, a, x2[k + 9], S44, 3951481745);
    a = addUnsigned(a, AA);
    b = addUnsigned(b, BB);
    c = addUnsigned(c, CC);
    d = addUnsigned(d, DD);
  }
  var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
  return temp.toLowerCase();
}
async function attemptLogin() {
  let login = localStorage.getItem("cloudLogin");
  let hashedPass = localStorage.getItem("cloudPass");
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 15e3);
  let response = await fetch(
    `https://${localStorage.getItem("cloudServer")}${localStorage.getItem("customServerPostfix")}/ls/VerifyLoginXML.php?login=${login}&hashedPass=${hashedPass}`,
    {
      method: "GET",
      signal: controller.signal,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    }
  ).catch((e) => {
    document.querySelector(".no-session-msg").textContent = "The Server is Down...";
    console.log("The server is down");
  });
  let result = await response.text();
  let parser = new DOMParser();
  let xmlDoc = parser.parseFromString(result, "text/xml");
  let parsedXML = xmlDoc.getElementsByTagName("body")[0];
  return parsedXML.getAttribute("result");
}
function Navbar(props) {
  let navBtns;
  const endpoint2 = getRestEndpoint();
  if (props.navBtns.length === 0) {
    navBtns = "";
  } else {
    navBtns = props.navBtns.map((route, index) => /* @__PURE__ */ React$1.createElement(NavBtn, {
      key: `nav-btn-${index}`,
      currentPageName: props.currentPageName,
      changeRoute: props.changeRoute,
      navBtn: route.routeName
    }));
  }
  async function findCorrectImage() {
    let svgPromise;
    let pngPromise;
    let jpgPromise;
    {
      svgPromise = fetch(endpoint2 + "/sbuiauth/logo/logo.svg");
      pngPromise = fetch(endpoint2 + "/sbuiauth/logo/logo.png");
      jpgPromise = fetch(endpoint2 + "/sbuiauth/logo/logo.jpg");
    }
    let [svgRes, pngRes, jpgRes] = await Promise.all([
      svgPromise,
      pngPromise,
      jpgPromise
    ]);
    const logo = document.querySelector(".logo");
    let endpointString;
    {
      endpointString = endpoint2 + "/sbuiauth/logo/";
    }
    if (svgRes.statusText === "OK") {
      logo.src = endpointString + "logo.svg";
    } else if (pngRes.statusText === "OK") {
      logo.src = endpointString + "logo.png";
    } else if (jpgRes.statusText === "OK") {
      logo.src = endpointString + "logo.jpg";
    }
    console.log(`End ignore this`);
  }
  console.log(`Ignore following fetch errors regarding logos.
      This is a result of UI reaching out to find a "heartbeat" to support mutiple extensions:`);
  findCorrectImage();
  async function logoutWrapper() {
    logout();
  }
  function reloadPage() {
    location.reload();
  }
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "navbar"
  }, /* @__PURE__ */ React$1.createElement("header", null, /* @__PURE__ */ React$1.createElement("nav", null, /* @__PURE__ */ React$1.createElement("img", {
    onClick: reloadPage,
    className: "logo"
  }), /* @__PURE__ */ React$1.createElement("div", {
    className: "routes-btns"
  }, navBtns), /* @__PURE__ */ React$1.createElement("div", {
    className: "logout-section"
  }, /* @__PURE__ */ React$1.createElement("a", {
    className: "settings-btn",
    onClick: props.openSettings
  }, "Settings"), "Logged in:\xA0", /* @__PURE__ */ React$1.createElement("span", null, localStorage.getItem("user")), /* @__PURE__ */ React$1.createElement("a", {
    className: "logout-btn",
    onClick: logoutWrapper
  }, "Logout")))));
}
var settingStyle = "";
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location2, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
var getRandomValues = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  }
  return getRandomValues(rnds8);
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 256).toString(16).substr(1);
}
function bytesToUuid(buf, offset) {
  var i2 = offset || 0;
  var bth = byteToHex;
  return [bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], "-", bth[buf[i2++]], bth[buf[i2++]], "-", bth[buf[i2++]], bth[buf[i2++]], "-", bth[buf[i2++]], bth[buf[i2++]], "-", bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]]].join("");
}
function v4(options2, buf, offset) {
  var i2 = buf && offset || 0;
  if (typeof options2 == "string") {
    buf = options2 === "binary" ? new Array(16) : null;
    options2 = null;
  }
  options2 = options2 || {};
  var rnds = options2.random || (options2.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    for (var ii2 = 0; ii2 < 16; ++ii2) {
      buf[i2 + ii2] = rnds[ii2];
    }
  }
  return buf || bytesToUuid(rnds);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
  var keys3 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys3.push.apply(keys3, symbols);
  }
  return keys3;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self2);
}
var CONSTANT = {
  GLOBAL: {
    HIDE: "__react_tooltip_hide_event",
    REBUILD: "__react_tooltip_rebuild_event",
    SHOW: "__react_tooltip_show_event"
  }
};
var dispatchGlobalEvent = function dispatchGlobalEvent2(eventName, opts) {
  var event;
  if (typeof window.CustomEvent === "function") {
    event = new window.CustomEvent(eventName, {
      detail: opts
    });
  } else {
    event = document.createEvent("Event");
    event.initEvent(eventName, false, true, opts);
  }
  window.dispatchEvent(event);
};
function staticMethods(target) {
  target.hide = function(target2) {
    dispatchGlobalEvent(CONSTANT.GLOBAL.HIDE, {
      target: target2
    });
  };
  target.rebuild = function() {
    dispatchGlobalEvent(CONSTANT.GLOBAL.REBUILD);
  };
  target.show = function(target2) {
    dispatchGlobalEvent(CONSTANT.GLOBAL.SHOW, {
      target: target2
    });
  };
  target.prototype.globalRebuild = function() {
    if (this.mount) {
      this.unbindListener();
      this.bindListener();
    }
  };
  target.prototype.globalShow = function(event) {
    if (this.mount) {
      var hasTarget = event && event.detail && event.detail.target && true || false;
      this.showTooltip({
        currentTarget: hasTarget && event.detail.target
      }, true);
    }
  };
  target.prototype.globalHide = function(event) {
    if (this.mount) {
      var hasTarget = event && event.detail && event.detail.target && true || false;
      this.hideTooltip({
        currentTarget: hasTarget && event.detail.target
      }, hasTarget);
    }
  };
}
function windowListener(target) {
  target.prototype.bindWindowEvents = function(resizeHide) {
    window.removeEventListener(CONSTANT.GLOBAL.HIDE, this.globalHide);
    window.addEventListener(CONSTANT.GLOBAL.HIDE, this.globalHide, false);
    window.removeEventListener(CONSTANT.GLOBAL.REBUILD, this.globalRebuild);
    window.addEventListener(CONSTANT.GLOBAL.REBUILD, this.globalRebuild, false);
    window.removeEventListener(CONSTANT.GLOBAL.SHOW, this.globalShow);
    window.addEventListener(CONSTANT.GLOBAL.SHOW, this.globalShow, false);
    if (resizeHide) {
      window.removeEventListener("resize", this.onWindowResize);
      window.addEventListener("resize", this.onWindowResize, false);
    }
  };
  target.prototype.unbindWindowEvents = function() {
    window.removeEventListener(CONSTANT.GLOBAL.HIDE, this.globalHide);
    window.removeEventListener(CONSTANT.GLOBAL.REBUILD, this.globalRebuild);
    window.removeEventListener(CONSTANT.GLOBAL.SHOW, this.globalShow);
    window.removeEventListener("resize", this.onWindowResize);
  };
  target.prototype.onWindowResize = function() {
    if (!this.mount)
      return;
    this.hideTooltip();
  };
}
var checkStatus = function checkStatus2(dataEventOff, e) {
  var show = this.state.show;
  var id2 = this.props.id;
  var isCapture2 = this.isCapture(e.currentTarget);
  var currentItem = e.currentTarget.getAttribute("currentItem");
  if (!isCapture2)
    e.stopPropagation();
  if (show && currentItem === "true") {
    if (!dataEventOff)
      this.hideTooltip(e);
  } else {
    e.currentTarget.setAttribute("currentItem", "true");
    setUntargetItems(e.currentTarget, this.getTargetArray(id2));
    this.showTooltip(e);
  }
};
var setUntargetItems = function setUntargetItems2(currentTarget, targetArray) {
  for (var i2 = 0; i2 < targetArray.length; i2++) {
    if (currentTarget !== targetArray[i2]) {
      targetArray[i2].setAttribute("currentItem", "false");
    } else {
      targetArray[i2].setAttribute("currentItem", "true");
    }
  }
};
var customListeners = {
  id: "9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",
  set: function set2(target, event, listener) {
    if (this.id in target) {
      var map = target[this.id];
      map[event] = listener;
    } else {
      Object.defineProperty(target, this.id, {
        configurable: true,
        value: _defineProperty({}, event, listener)
      });
    }
  },
  get: function get2(target, event) {
    var map = target[this.id];
    if (map !== void 0) {
      return map[event];
    }
  }
};
function customEvent(target) {
  target.prototype.isCustomEvent = function(ele) {
    var event = this.state.event;
    return event || !!ele.getAttribute("data-event");
  };
  target.prototype.customBindListener = function(ele) {
    var _this = this;
    var _this$state = this.state, event = _this$state.event, eventOff = _this$state.eventOff;
    var dataEvent = ele.getAttribute("data-event") || event;
    var dataEventOff = ele.getAttribute("data-event-off") || eventOff;
    dataEvent.split(" ").forEach(function(event2) {
      ele.removeEventListener(event2, customListeners.get(ele, event2));
      var customListener = checkStatus.bind(_this, dataEventOff);
      customListeners.set(ele, event2, customListener);
      ele.addEventListener(event2, customListener, false);
    });
    if (dataEventOff) {
      dataEventOff.split(" ").forEach(function(event2) {
        ele.removeEventListener(event2, _this.hideTooltip);
        ele.addEventListener(event2, _this.hideTooltip, false);
      });
    }
  };
  target.prototype.customUnbindListener = function(ele) {
    var _this$state2 = this.state, event = _this$state2.event, eventOff = _this$state2.eventOff;
    var dataEvent = event || ele.getAttribute("data-event");
    var dataEventOff = eventOff || ele.getAttribute("data-event-off");
    ele.removeEventListener(dataEvent, customListeners.get(ele, event));
    if (dataEventOff)
      ele.removeEventListener(dataEventOff, this.hideTooltip);
  };
}
function isCapture(target) {
  target.prototype.isCapture = function(currentTarget) {
    return currentTarget && currentTarget.getAttribute("data-iscapture") === "true" || this.props.isCapture || false;
  };
}
function getEffect(target) {
  target.prototype.getEffect = function(currentTarget) {
    var dataEffect = currentTarget.getAttribute("data-effect");
    return dataEffect || this.props.effect || "float";
  };
}
var makeProxy = function makeProxy2(e) {
  var proxy = {};
  for (var key in e) {
    if (typeof e[key] === "function") {
      proxy[key] = e[key].bind(e);
    } else {
      proxy[key] = e[key];
    }
  }
  return proxy;
};
var bodyListener = function bodyListener2(callback, options2, e) {
  var _options$respectEffec = options2.respectEffect, respectEffect = _options$respectEffec === void 0 ? false : _options$respectEffec, _options$customEvent = options2.customEvent, customEvent2 = _options$customEvent === void 0 ? false : _options$customEvent;
  var id2 = this.props.id;
  var tip = e.target.getAttribute("data-tip") || null;
  var forId = e.target.getAttribute("data-for") || null;
  var target = e.target;
  if (this.isCustomEvent(target) && !customEvent2) {
    return;
  }
  var isTargetBelongsToTooltip = id2 == null && forId == null || forId === id2;
  if (tip != null && (!respectEffect || this.getEffect(target) === "float") && isTargetBelongsToTooltip) {
    var proxy = makeProxy(e);
    proxy.currentTarget = target;
    callback(proxy);
  }
};
var findCustomEvents = function findCustomEvents2(targetArray, dataAttribute) {
  var events = {};
  targetArray.forEach(function(target) {
    var event = target.getAttribute(dataAttribute);
    if (event)
      event.split(" ").forEach(function(event2) {
        return events[event2] = true;
      });
  });
  return events;
};
var getBody = function getBody2() {
  return document.getElementsByTagName("body")[0];
};
function bodyMode(target) {
  target.prototype.isBodyMode = function() {
    return !!this.props.bodyMode;
  };
  target.prototype.bindBodyListener = function(targetArray) {
    var _this = this;
    var _this$state = this.state, event = _this$state.event, eventOff = _this$state.eventOff, possibleCustomEvents = _this$state.possibleCustomEvents, possibleCustomEventsOff = _this$state.possibleCustomEventsOff;
    var body = getBody();
    var customEvents = findCustomEvents(targetArray, "data-event");
    var customEventsOff = findCustomEvents(targetArray, "data-event-off");
    if (event != null)
      customEvents[event] = true;
    if (eventOff != null)
      customEventsOff[eventOff] = true;
    possibleCustomEvents.split(" ").forEach(function(event2) {
      return customEvents[event2] = true;
    });
    possibleCustomEventsOff.split(" ").forEach(function(event2) {
      return customEventsOff[event2] = true;
    });
    this.unbindBodyListener(body);
    var listeners = this.bodyModeListeners = {};
    if (event == null) {
      listeners.mouseover = bodyListener.bind(this, this.showTooltip, {});
      listeners.mousemove = bodyListener.bind(this, this.updateTooltip, {
        respectEffect: true
      });
      listeners.mouseout = bodyListener.bind(this, this.hideTooltip, {});
    }
    for (var _event in customEvents) {
      listeners[_event] = bodyListener.bind(this, function(e) {
        var targetEventOff = e.currentTarget.getAttribute("data-event-off") || eventOff;
        checkStatus.call(_this, targetEventOff, e);
      }, {
        customEvent: true
      });
    }
    for (var _event2 in customEventsOff) {
      listeners[_event2] = bodyListener.bind(this, this.hideTooltip, {
        customEvent: true
      });
    }
    for (var _event3 in listeners) {
      body.addEventListener(_event3, listeners[_event3]);
    }
  };
  target.prototype.unbindBodyListener = function(body) {
    body = body || getBody();
    var listeners = this.bodyModeListeners;
    for (var event in listeners) {
      body.removeEventListener(event, listeners[event]);
    }
  };
}
var getMutationObserverClass = function getMutationObserverClass2() {
  return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
};
function trackRemoval(target) {
  target.prototype.bindRemovalTracker = function() {
    var _this = this;
    var MutationObserver2 = getMutationObserverClass();
    if (MutationObserver2 == null)
      return;
    var observer = new MutationObserver2(function(mutations) {
      for (var m1 = 0; m1 < mutations.length; m1++) {
        var mutation = mutations[m1];
        for (var m2 = 0; m2 < mutation.removedNodes.length; m2++) {
          var element = mutation.removedNodes[m2];
          if (element === _this.state.currentTarget) {
            _this.hideTooltip();
            return;
          }
        }
      }
    });
    observer.observe(window.document, {
      childList: true,
      subtree: true
    });
    this.removalTracker = observer;
  };
  target.prototype.unbindRemovalTracker = function() {
    if (this.removalTracker) {
      this.removalTracker.disconnect();
      this.removalTracker = null;
    }
  };
}
function getPosition(e, target, node, place, desiredPlace, effect, offset) {
  var _getDimensions = getDimensions(node), tipWidth = _getDimensions.width, tipHeight = _getDimensions.height;
  var _getDimensions2 = getDimensions(target), targetWidth = _getDimensions2.width, targetHeight = _getDimensions2.height;
  var _getCurrentOffset = getCurrentOffset(e, target, effect), mouseX = _getCurrentOffset.mouseX, mouseY = _getCurrentOffset.mouseY;
  var defaultOffset = getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight);
  var _calculateOffset = calculateOffset(offset), extraOffsetX = _calculateOffset.extraOffsetX, extraOffsetY = _calculateOffset.extraOffsetY;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var _getParent = getParent(node), parentTop = _getParent.parentTop, parentLeft = _getParent.parentLeft;
  var getTipOffsetLeft = function getTipOffsetLeft2(place2) {
    var offsetX = defaultOffset[place2].l;
    return mouseX + offsetX + extraOffsetX;
  };
  var getTipOffsetRight = function getTipOffsetRight2(place2) {
    var offsetX = defaultOffset[place2].r;
    return mouseX + offsetX + extraOffsetX;
  };
  var getTipOffsetTop = function getTipOffsetTop2(place2) {
    var offsetY = defaultOffset[place2].t;
    return mouseY + offsetY + extraOffsetY;
  };
  var getTipOffsetBottom = function getTipOffsetBottom2(place2) {
    var offsetY = defaultOffset[place2].b;
    return mouseY + offsetY + extraOffsetY;
  };
  var outsideLeft = function outsideLeft2(p3) {
    return getTipOffsetLeft(p3) < 0;
  };
  var outsideRight = function outsideRight2(p3) {
    return getTipOffsetRight(p3) > windowWidth;
  };
  var outsideTop = function outsideTop2(p3) {
    return getTipOffsetTop(p3) < 0;
  };
  var outsideBottom = function outsideBottom2(p3) {
    return getTipOffsetBottom(p3) > windowHeight;
  };
  var outside = function outside2(p3) {
    return outsideLeft(p3) || outsideRight(p3) || outsideTop(p3) || outsideBottom(p3);
  };
  var inside = function inside2(p3) {
    return !outside(p3);
  };
  var placesList = ["top", "bottom", "left", "right"];
  var insideList = [];
  for (var i2 = 0; i2 < 4; i2++) {
    var p2 = placesList[i2];
    if (inside(p2)) {
      insideList.push(p2);
    }
  }
  var isNewState = false;
  var newPlace;
  var shouldUpdatePlace = desiredPlace !== place;
  if (inside(desiredPlace) && shouldUpdatePlace) {
    isNewState = true;
    newPlace = desiredPlace;
  } else if (insideList.length > 0 && outside(desiredPlace) && outside(place)) {
    isNewState = true;
    newPlace = insideList[0];
  }
  if (isNewState) {
    return {
      isNewState: true,
      newState: {
        place: newPlace
      }
    };
  }
  return {
    isNewState: false,
    position: {
      left: parseInt(getTipOffsetLeft(place) - parentLeft, 10),
      top: parseInt(getTipOffsetTop(place) - parentTop, 10)
    }
  };
}
var getDimensions = function getDimensions2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), height = _node$getBoundingClie.height, width = _node$getBoundingClie.width;
  return {
    height: parseInt(height, 10),
    width: parseInt(width, 10)
  };
};
var getCurrentOffset = function getCurrentOffset2(e, currentTarget, effect) {
  var boundingClientRect = currentTarget.getBoundingClientRect();
  var targetTop = boundingClientRect.top;
  var targetLeft = boundingClientRect.left;
  var _getDimensions3 = getDimensions(currentTarget), targetWidth = _getDimensions3.width, targetHeight = _getDimensions3.height;
  if (effect === "float") {
    return {
      mouseX: e.clientX,
      mouseY: e.clientY
    };
  }
  return {
    mouseX: targetLeft + targetWidth / 2,
    mouseY: targetTop + targetHeight / 2
  };
};
var getDefaultPosition = function getDefaultPosition2(effect, targetWidth, targetHeight, tipWidth, tipHeight) {
  var top;
  var right;
  var bottom;
  var left;
  var disToMouse = 3;
  var triangleHeight = 2;
  var cursorHeight = 12;
  if (effect === "float") {
    top = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: -(tipHeight + disToMouse + triangleHeight),
      b: -disToMouse
    };
    bottom = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: disToMouse + cursorHeight,
      b: tipHeight + disToMouse + triangleHeight + cursorHeight
    };
    left = {
      l: -(tipWidth + disToMouse + triangleHeight),
      r: -disToMouse,
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
    right = {
      l: disToMouse,
      r: tipWidth + disToMouse + triangleHeight,
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
  } else if (effect === "solid") {
    top = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: -(targetHeight / 2 + tipHeight + triangleHeight),
      b: -(targetHeight / 2)
    };
    bottom = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: targetHeight / 2,
      b: targetHeight / 2 + tipHeight + triangleHeight
    };
    left = {
      l: -(tipWidth + targetWidth / 2 + triangleHeight),
      r: -(targetWidth / 2),
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
    right = {
      l: targetWidth / 2,
      r: tipWidth + targetWidth / 2 + triangleHeight,
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
  }
  return {
    top,
    bottom,
    left,
    right
  };
};
var calculateOffset = function calculateOffset2(offset) {
  var extraOffsetX = 0;
  var extraOffsetY = 0;
  if (Object.prototype.toString.apply(offset) === "[object String]") {
    offset = JSON.parse(offset.toString().replace(/'/g, '"'));
  }
  for (var key in offset) {
    if (key === "top") {
      extraOffsetY -= parseInt(offset[key], 10);
    } else if (key === "bottom") {
      extraOffsetY += parseInt(offset[key], 10);
    } else if (key === "left") {
      extraOffsetX -= parseInt(offset[key], 10);
    } else if (key === "right") {
      extraOffsetX += parseInt(offset[key], 10);
    }
  }
  return {
    extraOffsetX,
    extraOffsetY
  };
};
var getParent = function getParent2(currentTarget) {
  var currentParent = currentTarget;
  while (currentParent) {
    var computedStyle = window.getComputedStyle(currentParent);
    if (computedStyle.getPropertyValue("transform") !== "none" || computedStyle.getPropertyValue("will-change") === "transform")
      break;
    currentParent = currentParent.parentElement;
  }
  var parentTop = currentParent && currentParent.getBoundingClientRect().top || 0;
  var parentLeft = currentParent && currentParent.getBoundingClientRect().left || 0;
  return {
    parentTop,
    parentLeft
  };
};
function getTipContent(tip, children, getContent, multiline) {
  if (children)
    return children;
  if (getContent !== void 0 && getContent !== null)
    return getContent;
  if (getContent === null)
    return null;
  var regexp = /<br\s*\/?>/;
  if (!multiline || multiline === "false" || !regexp.test(tip)) {
    return tip;
  }
  return tip.split(regexp).map(function(d, i2) {
    return React$1.createElement("span", {
      key: i2,
      className: "multi-line"
    }, d);
  });
}
function parseAria(props) {
  var ariaObj = {};
  Object.keys(props).filter(function(prop) {
    return /(^aria-\w+$|^role$)/.test(prop);
  }).forEach(function(prop) {
    ariaObj[prop] = props[prop];
  });
  return ariaObj;
}
function nodeListToArray(nodeList) {
  var length = nodeList.length;
  if (nodeList.hasOwnProperty) {
    return Array.prototype.slice.call(nodeList);
  }
  return new Array(length).fill().map(function(index) {
    return nodeList[index];
  });
}
function generateUUID() {
  return "t" + v4();
}
var baseCss = '.__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-bottom::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  top: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-left::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  right: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-right::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  left: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n}';
var defaultColors = {
  dark: {
    text: "#fff",
    background: "#222",
    border: "transparent",
    arrow: "#222"
  },
  success: {
    text: "#fff",
    background: "#8DC572",
    border: "transparent",
    arrow: "#8DC572"
  },
  warning: {
    text: "#fff",
    background: "#F0AD4E",
    border: "transparent",
    arrow: "#F0AD4E"
  },
  error: {
    text: "#fff",
    background: "#BE6464",
    border: "transparent",
    arrow: "#BE6464"
  },
  info: {
    text: "#fff",
    background: "#337AB7",
    border: "transparent",
    arrow: "#337AB7"
  },
  light: {
    text: "#222",
    background: "#fff",
    border: "transparent",
    arrow: "#fff"
  }
};
function getDefaultPopupColors(type) {
  return defaultColors[type] ? _objectSpread2({}, defaultColors[type]) : void 0;
}
function generateTooltipStyle(uuid, customColors, type, hasBorder) {
  return generateStyle(uuid, getPopupColors(customColors, type, hasBorder));
}
function generateStyle(uuid, colors) {
  var textColor = colors.text;
  var backgroundColor = colors.background;
  var borderColor = colors.border;
  var arrowColor = colors.arrow;
  return "\n  	.".concat(uuid, " {\n	    color: ").concat(textColor, ";\n	    background: ").concat(backgroundColor, ";\n	    border: 1px solid ").concat(borderColor, ";\n  	}\n\n  	.").concat(uuid, ".place-top {\n        margin-top: -10px;\n    }\n    .").concat(uuid, ".place-top::before {\n        border-top: 8px solid ").concat(borderColor, ";\n    }\n    .").concat(uuid, ".place-top::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-top-color: ").concat(arrowColor, ";\n        border-top-style: solid;\n        border-top-width: 6px;\n    }\n\n    .").concat(uuid, ".place-bottom {\n        margin-top: 10px;\n    }\n    .").concat(uuid, ".place-bottom::before {\n        border-bottom: 8px solid ").concat(borderColor, ";\n    }\n    .").concat(uuid, ".place-bottom::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        top: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-bottom-color: ").concat(arrowColor, ";\n        border-bottom-style: solid;\n        border-bottom-width: 6px;\n    }\n\n    .").concat(uuid, ".place-left {\n        margin-left: -10px;\n    }\n    .").concat(uuid, ".place-left::before {\n        border-left: 8px solid ").concat(borderColor, ";\n    }\n    .").concat(uuid, ".place-left::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        right: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-left-color: ").concat(arrowColor, ";\n        border-left-style: solid;\n        border-left-width: 6px;\n    }\n\n    .").concat(uuid, ".place-right {\n        margin-left: 10px;\n    }\n    .").concat(uuid, ".place-right::before {\n        border-right: 8px solid ").concat(borderColor, ";\n    }\n    .").concat(uuid, ".place-right::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        left: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-right-color: ").concat(arrowColor, ";\n        border-right-style: solid;\n        border-right-width: 6px;\n    }\n  ");
}
function getPopupColors(customColors, type, hasBorder) {
  var textColor = customColors.text;
  var backgroundColor = customColors.background;
  var borderColor = customColors.border;
  var arrowColor = customColors.arrow ? customColors.arrow : customColors.background;
  var colors = getDefaultPopupColors(type);
  if (textColor) {
    colors.text = textColor;
  }
  if (backgroundColor) {
    colors.background = backgroundColor;
  }
  if (hasBorder) {
    if (borderColor) {
      colors.border = borderColor;
    } else {
      colors.border = type === "light" ? "black" : "white";
    }
  }
  if (arrowColor) {
    colors.arrow = arrowColor;
  }
  return colors;
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var check = function(it) {
  return it && it.Math == Math && it;
};
var global_1 = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || function() {
  return this;
}() || Function("return this")();
var fails = function(exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};
var descriptors = !fails(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
});
var $propertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
var f = NASHORN_BUG ? function propertyIsEnumerable(V2) {
  var descriptor = getOwnPropertyDescriptor(this, V2);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;
var objectPropertyIsEnumerable = {
  f
};
var createPropertyDescriptor = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var toString = {}.toString;
var classofRaw = function(it) {
  return toString.call(it).slice(8, -1);
};
var split = "".split;
var indexedObject = fails(function() {
  return !Object("z").propertyIsEnumerable(0);
}) ? function(it) {
  return classofRaw(it) == "String" ? split.call(it, "") : Object(it);
} : Object;
var requireObjectCoercible = function(it) {
  if (it == void 0)
    throw TypeError("Can't call method on " + it);
  return it;
};
var toIndexedObject = function(it) {
  return indexedObject(requireObjectCoercible(it));
};
var isObject = function(it) {
  return typeof it === "object" ? it !== null : typeof it === "function";
};
var toPrimitive = function(input, PREFERRED_STRING) {
  if (!isObject(input))
    return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
    return val;
  if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input)))
    return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
    return val;
  throw TypeError("Can't convert object to primitive value");
};
var toObject = function(argument) {
  return Object(requireObjectCoercible(argument));
};
var hasOwnProperty = {}.hasOwnProperty;
var has = function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};
var document$1 = global_1.document;
var EXISTS = isObject(document$1) && isObject(document$1.createElement);
var documentCreateElement = function(it) {
  return EXISTS ? document$1.createElement(it) : {};
};
var ie8DomDefine = !descriptors && !fails(function() {
  return Object.defineProperty(documentCreateElement("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
});
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var f$1 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor2(O2, P2) {
  O2 = toIndexedObject(O2);
  P2 = toPrimitive(P2, true);
  if (ie8DomDefine)
    try {
      return $getOwnPropertyDescriptor(O2, P2);
    } catch (error) {
    }
  if (has(O2, P2))
    return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O2, P2), O2[P2]);
};
var objectGetOwnPropertyDescriptor = {
  f: f$1
};
var anObject = function(it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + " is not an object");
  }
  return it;
};
var $defineProperty = Object.defineProperty;
var f$2 = descriptors ? $defineProperty : function defineProperty(O2, P2, Attributes) {
  anObject(O2);
  P2 = toPrimitive(P2, true);
  anObject(Attributes);
  if (ie8DomDefine)
    try {
      return $defineProperty(O2, P2, Attributes);
    } catch (error) {
    }
  if ("get" in Attributes || "set" in Attributes)
    throw TypeError("Accessors not supported");
  if ("value" in Attributes)
    O2[P2] = Attributes.value;
  return O2;
};
var objectDefineProperty = {
  f: f$2
};
var createNonEnumerableProperty = descriptors ? function(object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var setGlobal = function(key, value) {
  try {
    createNonEnumerableProperty(global_1, key, value);
  } catch (error) {
    global_1[key] = value;
  }
  return value;
};
var SHARED = "__core-js_shared__";
var store = global_1[SHARED] || setGlobal(SHARED, {});
var sharedStore = store;
var functionToString = Function.toString;
if (typeof sharedStore.inspectSource != "function") {
  sharedStore.inspectSource = function(it) {
    return functionToString.call(it);
  };
}
var inspectSource = sharedStore.inspectSource;
var WeakMap$1 = global_1.WeakMap;
var nativeWeakMap = typeof WeakMap$1 === "function" && /native code/.test(inspectSource(WeakMap$1));
var shared = createCommonjsModule(function(module) {
  (module.exports = function(key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== void 0 ? value : {});
  })("versions", []).push({
    version: "3.12.1",
    mode: "global",
    copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
  });
});
var id = 0;
var postfix = Math.random();
var uid = function(key) {
  return "Symbol(" + String(key === void 0 ? "" : key) + ")_" + (++id + postfix).toString(36);
};
var keys = shared("keys");
var sharedKey = function(key) {
  return keys[key] || (keys[key] = uid(key));
};
var hiddenKeys = {};
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var WeakMap$1$1 = global_1.WeakMap;
var set, get, has$1;
var enforce = function(it) {
  return has$1(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
  return function(it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError("Incompatible receiver, " + TYPE + " required");
    }
    return state;
  };
};
if (nativeWeakMap || sharedStore.state) {
  var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1$1());
  var wmget = store$1.get;
  var wmhas = store$1.has;
  var wmset = store$1.set;
  set = function(it, metadata) {
    if (wmhas.call(store$1, it))
      throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store$1, it, metadata);
    return metadata;
  };
  get = function(it) {
    return wmget.call(store$1, it) || {};
  };
  has$1 = function(it) {
    return wmhas.call(store$1, it);
  };
} else {
  var STATE = sharedKey("state");
  hiddenKeys[STATE] = true;
  set = function(it, metadata) {
    if (has(it, STATE))
      throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function(it) {
    return has(it, STATE) ? it[STATE] : {};
  };
  has$1 = function(it) {
    return has(it, STATE);
  };
}
var internalState = {
  set,
  get,
  has: has$1,
  enforce,
  getterFor
};
var redefine = createCommonjsModule(function(module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(String).split("String");
  (module.exports = function(O2, key, value, options2) {
    var unsafe = options2 ? !!options2.unsafe : false;
    var simple = options2 ? !!options2.enumerable : false;
    var noTargetGet = options2 ? !!options2.noTargetGet : false;
    var state;
    if (typeof value == "function") {
      if (typeof key == "string" && !has(value, "name")) {
        createNonEnumerableProperty(value, "name", key);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == "string" ? key : "");
      }
    }
    if (O2 === global_1) {
      if (simple)
        O2[key] = value;
      else
        setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O2[key];
    } else if (!noTargetGet && O2[key]) {
      simple = true;
    }
    if (simple)
      O2[key] = value;
    else
      createNonEnumerableProperty(O2, key, value);
  })(Function.prototype, "toString", function toString2() {
    return typeof this == "function" && getInternalState(this).source || inspectSource(this);
  });
});
var path = global_1;
var aFunction = function(variable) {
  return typeof variable == "function" ? variable : void 0;
};
var getBuiltIn = function(namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};
var ceil = Math.ceil;
var floor = Math.floor;
var toInteger = function(argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};
var min = Math.min;
var toLength = function(argument) {
  return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
};
var max = Math.max;
var min$1 = Math.min;
var toAbsoluteIndex = function(index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};
var createMethod = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O2 = toIndexedObject($this);
    var length = toLength(O2.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el)
      while (length > index) {
        value = O2[index++];
        if (value != value)
          return true;
      }
    else
      for (; length > index; index++) {
        if ((IS_INCLUDES || index in O2) && O2[index] === el)
          return IS_INCLUDES || index || 0;
      }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  includes: createMethod(true),
  indexOf: createMethod(false)
};
var indexOf = arrayIncludes.indexOf;
var objectKeysInternal = function(object, names) {
  var O2 = toIndexedObject(object);
  var i2 = 0;
  var result = [];
  var key;
  for (key in O2)
    !has(hiddenKeys, key) && has(O2, key) && result.push(key);
  while (names.length > i2)
    if (has(O2, key = names[i2++])) {
      ~indexOf(result, key) || result.push(key);
    }
  return result;
};
var enumBugKeys = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
];
var hiddenKeys$1 = enumBugKeys.concat("length", "prototype");
var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O2) {
  return objectKeysInternal(O2, hiddenKeys$1);
};
var objectGetOwnPropertyNames = {
  f: f$3
};
var f$4 = Object.getOwnPropertySymbols;
var objectGetOwnPropertySymbols = {
  f: f$4
};
var ownKeys$1 = getBuiltIn("Reflect", "ownKeys") || function ownKeys2(it) {
  var keys3 = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols2 = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols2 ? keys3.concat(getOwnPropertySymbols2(it)) : keys3;
};
var copyConstructorProperties = function(target, source) {
  var keys3 = ownKeys$1(source);
  var defineProperty2 = objectDefineProperty.f;
  var getOwnPropertyDescriptor3 = objectGetOwnPropertyDescriptor.f;
  for (var i2 = 0; i2 < keys3.length; i2++) {
    var key = keys3[i2];
    if (!has(target, key))
      defineProperty2(target, key, getOwnPropertyDescriptor3(source, key));
  }
};
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
  return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
var isForced_1 = isForced;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var _export = function(options2, source) {
  var TARGET = options2.target;
  var GLOBAL = options2.global;
  var STATIC = options2.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target)
    for (key in source) {
      sourceProperty = source[key];
      if (options2.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else
        targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options2.forced);
      if (!FORCED && targetProperty !== void 0) {
        if (typeof sourceProperty === typeof targetProperty)
          continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      if (options2.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty(sourceProperty, "sham", true);
      }
      redefine(target, key, sourceProperty, options2);
    }
};
var aFunction$1 = function(it) {
  if (typeof it != "function") {
    throw TypeError(String(it) + " is not a function");
  }
  return it;
};
var functionBindContext = function(fn, that, length) {
  aFunction$1(fn);
  if (that === void 0)
    return fn;
  switch (length) {
    case 0:
      return function() {
        return fn.call(that);
      };
    case 1:
      return function(a) {
        return fn.call(that, a);
      };
    case 2:
      return function(a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function(a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function() {
    return fn.apply(that, arguments);
  };
};
var isArray = Array.isArray || function isArray2(arg) {
  return classofRaw(arg) == "Array";
};
var engineUserAgent = getBuiltIn("navigator", "userAgent") || "";
var process = global_1.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split(".");
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match)
      version = match[1];
  }
}
var engineV8Version = version && +version;
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function() {
  return !String(Symbol()) || !Symbol.sham && engineV8Version && engineV8Version < 41;
});
var useSymbolAsUid = nativeSymbol && !Symbol.sham && typeof Symbol.iterator == "symbol";
var WellKnownSymbolsStore = shared("wks");
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;
var wellKnownSymbol = function(name) {
  if (!has(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == "string")) {
    if (nativeSymbol && has(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
    }
  }
  return WellKnownSymbolsStore[name];
};
var SPECIES = wellKnownSymbol("species");
var arraySpeciesCreate = function(originalArray, length) {
  var C2;
  if (isArray(originalArray)) {
    C2 = originalArray.constructor;
    if (typeof C2 == "function" && (C2 === Array || isArray(C2.prototype)))
      C2 = void 0;
    else if (isObject(C2)) {
      C2 = C2[SPECIES];
      if (C2 === null)
        C2 = void 0;
    }
  }
  return new (C2 === void 0 ? Array : C2)(length === 0 ? 0 : length);
};
var push = [].push;
var createMethod$1 = function(TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function($this, callbackfn, that, specificCreate) {
    var O2 = toObject($this);
    var self2 = indexedObject(O2);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self2.length);
    var index = 0;
    var create2 = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create2($this, length) : IS_FILTER || IS_FILTER_OUT ? create2($this, 0) : void 0;
    var value, result;
    for (; length > index; index++)
      if (NO_HOLES || index in self2) {
        value = self2[index];
        result = boundFunction(value, index, O2);
        if (TYPE) {
          if (IS_MAP)
            target[index] = result;
          else if (result)
            switch (TYPE) {
              case 3:
                return true;
              case 5:
                return value;
              case 6:
                return index;
              case 2:
                push.call(target, value);
            }
          else
            switch (TYPE) {
              case 4:
                return false;
              case 7:
                push.call(target, value);
            }
        }
      }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};
var arrayIteration = {
  forEach: createMethod$1(0),
  map: createMethod$1(1),
  filter: createMethod$1(2),
  some: createMethod$1(3),
  every: createMethod$1(4),
  find: createMethod$1(5),
  findIndex: createMethod$1(6),
  filterOut: createMethod$1(7)
};
var objectKeys = Object.keys || function keys2(O2) {
  return objectKeysInternal(O2, enumBugKeys);
};
var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O2, Properties) {
  anObject(O2);
  var keys3 = objectKeys(Properties);
  var length = keys3.length;
  var index = 0;
  var key;
  while (length > index)
    objectDefineProperty.f(O2, key = keys3[index++], Properties[key]);
  return O2;
};
var html = getBuiltIn("document", "documentElement");
var GT = ">";
var LT = "<";
var PROTOTYPE = "prototype";
var SCRIPT = "script";
var IE_PROTO = sharedKey("IE_PROTO");
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
  return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function(activeXDocument2) {
  activeXDocument2.write(scriptTag(""));
  activeXDocument2.close();
  var temp = activeXDocument2.parentWindow.Object;
  activeXDocument2 = null;
  return temp;
};
var NullProtoObjectViaIFrame = function() {
  var iframe = documentCreateElement("iframe");
  var JS = "java" + SCRIPT + ":";
  var iframeDocument;
  iframe.style.display = "none";
  html.appendChild(iframe);
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag("document.F=Object"));
  iframeDocument.close();
  return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function() {
  try {
    activeXDocument = document.domain && new ActiveXObject("htmlfile");
  } catch (error) {
  }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--)
    delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
var objectCreate = Object.create || function create(O2, Properties) {
  var result;
  if (O2 !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O2);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    result[IE_PROTO] = O2;
  } else
    result = NullProtoObject();
  return Properties === void 0 ? result : objectDefineProperties(result, Properties);
};
var UNSCOPABLES = wellKnownSymbol("unscopables");
var ArrayPrototype = Array.prototype;
if (ArrayPrototype[UNSCOPABLES] == void 0) {
  objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
}
var addToUnscopables = function(key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};
var $find = arrayIteration.find;
var FIND = "find";
var SKIPS_HOLES = true;
if (FIND in [])
  Array(1)[FIND](function() {
    SKIPS_HOLES = false;
  });
_export({ target: "Array", proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
addToUnscopables(FIND);
var _class, _class2, _temp;
var ReactTooltip = staticMethods(_class = windowListener(_class = customEvent(_class = isCapture(_class = getEffect(_class = bodyMode(_class = trackRemoval(_class = (_temp = _class2 = /* @__PURE__ */ function(_React$Component) {
  _inherits(ReactTooltip2, _React$Component);
  _createClass(ReactTooltip2, null, [{
    key: "propTypes",
    get: function get3() {
      return {
        uuid: PropTypes.string,
        children: PropTypes.any,
        place: PropTypes.string,
        type: PropTypes.string,
        effect: PropTypes.string,
        offset: PropTypes.object,
        multiline: PropTypes.bool,
        border: PropTypes.bool,
        textColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        borderColor: PropTypes.string,
        arrowColor: PropTypes.string,
        insecure: PropTypes.bool,
        "class": PropTypes.string,
        className: PropTypes.string,
        id: PropTypes.string,
        html: PropTypes.bool,
        delayHide: PropTypes.number,
        delayUpdate: PropTypes.number,
        delayShow: PropTypes.number,
        event: PropTypes.string,
        eventOff: PropTypes.string,
        isCapture: PropTypes.bool,
        globalEventOff: PropTypes.string,
        getContent: PropTypes.any,
        afterShow: PropTypes.func,
        afterHide: PropTypes.func,
        overridePosition: PropTypes.func,
        disable: PropTypes.bool,
        scrollHide: PropTypes.bool,
        resizeHide: PropTypes.bool,
        wrapper: PropTypes.string,
        bodyMode: PropTypes.bool,
        possibleCustomEvents: PropTypes.string,
        possibleCustomEventsOff: PropTypes.string,
        clickable: PropTypes.bool
      };
    }
  }]);
  function ReactTooltip2(props) {
    var _this;
    _classCallCheck(this, ReactTooltip2);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactTooltip2).call(this, props));
    _this.state = {
      uuid: props.uuid || generateUUID(),
      place: props.place || "top",
      desiredPlace: props.place || "top",
      type: "dark",
      effect: "float",
      show: false,
      border: false,
      customColors: {},
      offset: {},
      extraClass: "",
      html: false,
      delayHide: 0,
      delayShow: 0,
      event: props.event || null,
      eventOff: props.eventOff || null,
      currentEvent: null,
      currentTarget: null,
      ariaProps: parseAria(props),
      isEmptyTip: false,
      disable: false,
      possibleCustomEvents: props.possibleCustomEvents || "",
      possibleCustomEventsOff: props.possibleCustomEventsOff || "",
      originTooltip: null,
      isMultiline: false
    };
    _this.bind(["showTooltip", "updateTooltip", "hideTooltip", "hideTooltipOnScroll", "getTooltipContent", "globalRebuild", "globalShow", "globalHide", "onWindowResize", "mouseOnToolTip"]);
    _this.mount = true;
    _this.delayShowLoop = null;
    _this.delayHideLoop = null;
    _this.delayReshow = null;
    _this.intervalUpdateContent = null;
    return _this;
  }
  _createClass(ReactTooltip2, [{
    key: "bind",
    value: function bind(methodArray) {
      var _this2 = this;
      methodArray.forEach(function(method) {
        _this2[method] = _this2[method].bind(_this2);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props;
      _this$props.insecure;
      var resizeHide = _this$props.resizeHide;
      this.bindListener();
      this.bindWindowEvents(resizeHide);
      this.injectStyles();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mount = false;
      this.clearTimer();
      this.unbindListener();
      this.removeScrollListener(this.state.currentTarget);
      this.unbindWindowEvents();
    }
  }, {
    key: "injectStyles",
    value: function injectStyles() {
      var tooltipRef = this.tooltipRef;
      if (!tooltipRef) {
        return;
      }
      var parentNode = tooltipRef.parentNode;
      while (parentNode.parentNode) {
        parentNode = parentNode.parentNode;
      }
      var domRoot;
      switch (parentNode.constructor.name) {
        case "Document":
        case "HTMLDocument":
        case void 0:
          domRoot = parentNode.head;
          break;
        case "ShadowRoot":
        default:
          domRoot = parentNode;
          break;
      }
      if (!domRoot.querySelector("style[data-react-tooltip]")) {
        var style2 = document.createElement("style");
        style2.textContent = baseCss;
        style2.setAttribute("data-react-tooltip", "true");
        domRoot.appendChild(style2);
      }
    }
  }, {
    key: "mouseOnToolTip",
    value: function mouseOnToolTip() {
      var show = this.state.show;
      if (show && this.tooltipRef) {
        if (!this.tooltipRef.matches) {
          if (this.tooltipRef.msMatchesSelector) {
            this.tooltipRef.matches = this.tooltipRef.msMatchesSelector;
          } else {
            this.tooltipRef.matches = this.tooltipRef.mozMatchesSelector;
          }
        }
        return this.tooltipRef.matches(":hover");
      }
      return false;
    }
  }, {
    key: "getTargetArray",
    value: function getTargetArray(id2) {
      var targetArray = [];
      var selector;
      if (!id2) {
        selector = "[data-tip]:not([data-for])";
      } else {
        var escaped = id2.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
        selector = '[data-tip][data-for="'.concat(escaped, '"]');
      }
      nodeListToArray(document.getElementsByTagName("*")).filter(function(element) {
        return element.shadowRoot;
      }).forEach(function(element) {
        targetArray = targetArray.concat(nodeListToArray(element.shadowRoot.querySelectorAll(selector)));
      });
      return targetArray.concat(nodeListToArray(document.querySelectorAll(selector)));
    }
  }, {
    key: "bindListener",
    value: function bindListener() {
      var _this3 = this;
      var _this$props2 = this.props, id2 = _this$props2.id, globalEventOff = _this$props2.globalEventOff, isCapture2 = _this$props2.isCapture;
      var targetArray = this.getTargetArray(id2);
      targetArray.forEach(function(target) {
        if (target.getAttribute("currentItem") === null) {
          target.setAttribute("currentItem", "false");
        }
        _this3.unbindBasicListener(target);
        if (_this3.isCustomEvent(target)) {
          _this3.customUnbindListener(target);
        }
      });
      if (this.isBodyMode()) {
        this.bindBodyListener(targetArray);
      } else {
        targetArray.forEach(function(target) {
          var isCaptureMode = _this3.isCapture(target);
          var effect = _this3.getEffect(target);
          if (_this3.isCustomEvent(target)) {
            _this3.customBindListener(target);
            return;
          }
          target.addEventListener("mouseenter", _this3.showTooltip, isCaptureMode);
          target.addEventListener("focus", _this3.showTooltip, isCaptureMode);
          if (effect === "float") {
            target.addEventListener("mousemove", _this3.updateTooltip, isCaptureMode);
          }
          target.addEventListener("mouseleave", _this3.hideTooltip, isCaptureMode);
          target.addEventListener("blur", _this3.hideTooltip, isCaptureMode);
        });
      }
      if (globalEventOff) {
        window.removeEventListener(globalEventOff, this.hideTooltip);
        window.addEventListener(globalEventOff, this.hideTooltip, isCapture2);
      }
      this.bindRemovalTracker();
    }
  }, {
    key: "unbindListener",
    value: function unbindListener() {
      var _this4 = this;
      var _this$props3 = this.props, id2 = _this$props3.id, globalEventOff = _this$props3.globalEventOff;
      if (this.isBodyMode()) {
        this.unbindBodyListener();
      } else {
        var targetArray = this.getTargetArray(id2);
        targetArray.forEach(function(target) {
          _this4.unbindBasicListener(target);
          if (_this4.isCustomEvent(target))
            _this4.customUnbindListener(target);
        });
      }
      if (globalEventOff)
        window.removeEventListener(globalEventOff, this.hideTooltip);
      this.unbindRemovalTracker();
    }
  }, {
    key: "unbindBasicListener",
    value: function unbindBasicListener(target) {
      var isCaptureMode = this.isCapture(target);
      target.removeEventListener("mouseenter", this.showTooltip, isCaptureMode);
      target.removeEventListener("mousemove", this.updateTooltip, isCaptureMode);
      target.removeEventListener("mouseleave", this.hideTooltip, isCaptureMode);
    }
  }, {
    key: "getTooltipContent",
    value: function getTooltipContent() {
      var _this$props4 = this.props, getContent = _this$props4.getContent, children = _this$props4.children;
      var content;
      if (getContent) {
        if (Array.isArray(getContent)) {
          content = getContent[0] && getContent[0](this.state.originTooltip);
        } else {
          content = getContent(this.state.originTooltip);
        }
      }
      return getTipContent(this.state.originTooltip, children, content, this.state.isMultiline);
    }
  }, {
    key: "isEmptyTip",
    value: function isEmptyTip(placeholder) {
      return typeof placeholder === "string" && placeholder === "" || placeholder === null;
    }
  }, {
    key: "showTooltip",
    value: function showTooltip(e, isGlobalCall) {
      if (!this.tooltipRef) {
        return;
      }
      if (isGlobalCall) {
        var targetArray = this.getTargetArray(this.props.id);
        var isMyElement = targetArray.some(function(ele) {
          return ele === e.currentTarget;
        });
        if (!isMyElement)
          return;
      }
      var _this$props5 = this.props, multiline = _this$props5.multiline, getContent = _this$props5.getContent;
      var originTooltip = e.currentTarget.getAttribute("data-tip");
      var isMultiline = e.currentTarget.getAttribute("data-multiline") || multiline || false;
      var switchToSolid = e instanceof window.FocusEvent || isGlobalCall;
      var scrollHide = true;
      if (e.currentTarget.getAttribute("data-scroll-hide")) {
        scrollHide = e.currentTarget.getAttribute("data-scroll-hide") === "true";
      } else if (this.props.scrollHide != null) {
        scrollHide = this.props.scrollHide;
      }
      if (e && e.currentTarget && e.currentTarget.setAttribute) {
        e.currentTarget.setAttribute("aria-describedby", this.state.uuid);
      }
      var desiredPlace = e.currentTarget.getAttribute("data-place") || this.props.place || "top";
      var effect = switchToSolid && "solid" || this.getEffect(e.currentTarget);
      var offset = e.currentTarget.getAttribute("data-offset") || this.props.offset || {};
      var result = getPosition(e, e.currentTarget, this.tooltipRef, desiredPlace, desiredPlace, effect, offset);
      if (result.position && this.props.overridePosition) {
        result.position = this.props.overridePosition(result.position, e, e.currentTarget, this.tooltipRef, desiredPlace, desiredPlace, effect, offset);
      }
      var place = result.isNewState ? result.newState.place : desiredPlace;
      this.clearTimer();
      var target = e.currentTarget;
      var reshowDelay = this.state.show ? target.getAttribute("data-delay-update") || this.props.delayUpdate : 0;
      var self2 = this;
      var updateState = function updateState2() {
        self2.setState({
          originTooltip,
          isMultiline,
          desiredPlace,
          place,
          type: target.getAttribute("data-type") || self2.props.type || "dark",
          customColors: {
            text: target.getAttribute("data-text-color") || self2.props.textColor || null,
            background: target.getAttribute("data-background-color") || self2.props.backgroundColor || null,
            border: target.getAttribute("data-border-color") || self2.props.borderColor || null,
            arrow: target.getAttribute("data-arrow-color") || self2.props.arrowColor || null
          },
          effect,
          offset,
          html: (target.getAttribute("data-html") ? target.getAttribute("data-html") === "true" : self2.props.html) || false,
          delayShow: target.getAttribute("data-delay-show") || self2.props.delayShow || 0,
          delayHide: target.getAttribute("data-delay-hide") || self2.props.delayHide || 0,
          delayUpdate: target.getAttribute("data-delay-update") || self2.props.delayUpdate || 0,
          border: (target.getAttribute("data-border") ? target.getAttribute("data-border") === "true" : self2.props.border) || false,
          extraClass: target.getAttribute("data-class") || self2.props["class"] || self2.props.className || "",
          disable: (target.getAttribute("data-tip-disable") ? target.getAttribute("data-tip-disable") === "true" : self2.props.disable) || false,
          currentTarget: target
        }, function() {
          if (scrollHide) {
            self2.addScrollListener(self2.state.currentTarget);
          }
          self2.updateTooltip(e);
          if (getContent && Array.isArray(getContent)) {
            self2.intervalUpdateContent = setInterval(function() {
              if (self2.mount) {
                var _getContent = self2.props.getContent;
                var placeholder = getTipContent(originTooltip, "", _getContent[0](), isMultiline);
                var isEmptyTip = self2.isEmptyTip(placeholder);
                self2.setState({
                  isEmptyTip
                });
                self2.updatePosition();
              }
            }, getContent[1]);
          }
        });
      };
      if (reshowDelay) {
        this.delayReshow = setTimeout(updateState, reshowDelay);
      } else {
        updateState();
      }
    }
  }, {
    key: "updateTooltip",
    value: function updateTooltip(e) {
      var _this5 = this;
      var _this$state = this.state, delayShow = _this$state.delayShow, disable = _this$state.disable;
      var afterShow = this.props.afterShow;
      var placeholder = this.getTooltipContent();
      var eventTarget = e.currentTarget || e.target;
      if (this.mouseOnToolTip()) {
        return;
      }
      if (this.isEmptyTip(placeholder) || disable) {
        return;
      }
      var delayTime = !this.state.show ? parseInt(delayShow, 10) : 0;
      var updateState = function updateState2() {
        if (Array.isArray(placeholder) && placeholder.length > 0 || placeholder) {
          var isInvisible = !_this5.state.show;
          _this5.setState({
            currentEvent: e,
            currentTarget: eventTarget,
            show: true
          }, function() {
            _this5.updatePosition();
            if (isInvisible && afterShow) {
              afterShow(e);
            }
          });
        }
      };
      clearTimeout(this.delayShowLoop);
      if (delayTime) {
        this.delayShowLoop = setTimeout(updateState, delayTime);
      } else {
        updateState();
      }
    }
  }, {
    key: "listenForTooltipExit",
    value: function listenForTooltipExit() {
      var show = this.state.show;
      if (show && this.tooltipRef) {
        this.tooltipRef.addEventListener("mouseleave", this.hideTooltip);
      }
    }
  }, {
    key: "removeListenerForTooltipExit",
    value: function removeListenerForTooltipExit() {
      var show = this.state.show;
      if (show && this.tooltipRef) {
        this.tooltipRef.removeEventListener("mouseleave", this.hideTooltip);
      }
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip(e, hasTarget) {
      var _this6 = this;
      var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        isScroll: false
      };
      var disable = this.state.disable;
      var isScroll = options2.isScroll;
      var delayHide = isScroll ? 0 : this.state.delayHide;
      var afterHide = this.props.afterHide;
      var placeholder = this.getTooltipContent();
      if (!this.mount)
        return;
      if (this.isEmptyTip(placeholder) || disable)
        return;
      if (hasTarget) {
        var targetArray = this.getTargetArray(this.props.id);
        var isMyElement = targetArray.some(function(ele) {
          return ele === e.currentTarget;
        });
        if (!isMyElement || !this.state.show)
          return;
      }
      if (e && e.currentTarget && e.currentTarget.removeAttribute) {
        e.currentTarget.removeAttribute("aria-describedby");
      }
      var resetState = function resetState2() {
        var isVisible = _this6.state.show;
        if (_this6.mouseOnToolTip()) {
          _this6.listenForTooltipExit();
          return;
        }
        _this6.removeListenerForTooltipExit();
        _this6.setState({
          show: false
        }, function() {
          _this6.removeScrollListener(_this6.state.currentTarget);
          if (isVisible && afterHide) {
            afterHide(e);
          }
        });
      };
      this.clearTimer();
      if (delayHide) {
        this.delayHideLoop = setTimeout(resetState, parseInt(delayHide, 10));
      } else {
        resetState();
      }
    }
  }, {
    key: "hideTooltipOnScroll",
    value: function hideTooltipOnScroll(event, hasTarget) {
      this.hideTooltip(event, hasTarget, {
        isScroll: true
      });
    }
  }, {
    key: "addScrollListener",
    value: function addScrollListener(currentTarget) {
      var isCaptureMode = this.isCapture(currentTarget);
      window.addEventListener("scroll", this.hideTooltipOnScroll, isCaptureMode);
    }
  }, {
    key: "removeScrollListener",
    value: function removeScrollListener(currentTarget) {
      var isCaptureMode = this.isCapture(currentTarget);
      window.removeEventListener("scroll", this.hideTooltipOnScroll, isCaptureMode);
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      var _this7 = this;
      var _this$state2 = this.state, currentEvent = _this$state2.currentEvent, currentTarget = _this$state2.currentTarget, place = _this$state2.place, desiredPlace = _this$state2.desiredPlace, effect = _this$state2.effect, offset = _this$state2.offset;
      var node = this.tooltipRef;
      var result = getPosition(currentEvent, currentTarget, node, place, desiredPlace, effect, offset);
      if (result.position && this.props.overridePosition) {
        result.position = this.props.overridePosition(result.position, currentEvent, currentTarget, node, place, desiredPlace, effect, offset);
      }
      if (result.isNewState) {
        return this.setState(result.newState, function() {
          _this7.updatePosition();
        });
      }
      node.style.left = result.position.left + "px";
      node.style.top = result.position.top + "px";
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      clearTimeout(this.delayShowLoop);
      clearTimeout(this.delayHideLoop);
      clearTimeout(this.delayReshow);
      clearInterval(this.intervalUpdateContent);
    }
  }, {
    key: "hasCustomColors",
    value: function hasCustomColors() {
      var _this8 = this;
      return Boolean(Object.keys(this.state.customColors).find(function(color) {
        return color !== "border" && _this8.state.customColors[color];
      }) || this.state.border && this.state.customColors["border"]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;
      var _this$state3 = this.state, extraClass = _this$state3.extraClass, html2 = _this$state3.html, ariaProps = _this$state3.ariaProps, disable = _this$state3.disable, uuid = _this$state3.uuid;
      var content = this.getTooltipContent();
      var isEmptyTip = this.isEmptyTip(content);
      var style2 = generateTooltipStyle(this.state.uuid, this.state.customColors, this.state.type, this.state.border);
      var tooltipClass = "__react_component_tooltip" + " ".concat(this.state.uuid) + (this.state.show && !disable && !isEmptyTip ? " show" : "") + (this.state.border ? " border" : "") + " place-".concat(this.state.place) + " type-".concat(this.hasCustomColors() ? "custom" : this.state.type) + (this.props.delayUpdate ? " allow_hover" : "") + (this.props.clickable ? " allow_click" : "");
      var Wrapper = this.props.wrapper;
      if (ReactTooltip2.supportedWrappers.indexOf(Wrapper) < 0) {
        Wrapper = ReactTooltip2.defaultProps.wrapper;
      }
      var wrapperClassName = [tooltipClass, extraClass].filter(Boolean).join(" ");
      if (html2) {
        var htmlContent = "".concat(content, '\n<style aria-hidden="true">').concat(style2, "</style>");
        return React$1.createElement(Wrapper, _extends({
          className: "".concat(wrapperClassName),
          id: this.props.id || uuid,
          ref: function ref(_ref) {
            return _this9.tooltipRef = _ref;
          }
        }, ariaProps, {
          "data-id": "tooltip",
          dangerouslySetInnerHTML: {
            __html: htmlContent
          }
        }));
      } else {
        return React$1.createElement(Wrapper, _extends({
          className: "".concat(wrapperClassName),
          id: this.props.id || uuid
        }, ariaProps, {
          ref: function ref(_ref2) {
            return _this9.tooltipRef = _ref2;
          },
          "data-id": "tooltip"
        }), React$1.createElement("style", {
          dangerouslySetInnerHTML: {
            __html: style2
          },
          "aria-hidden": "true"
        }), content);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var ariaProps = prevState.ariaProps;
      var newAriaProps = parseAria(nextProps);
      var isChanged = Object.keys(newAriaProps).some(function(props) {
        return newAriaProps[props] !== ariaProps[props];
      });
      if (!isChanged) {
        return null;
      }
      return _objectSpread2({}, prevState, {
        ariaProps: newAriaProps
      });
    }
  }]);
  return ReactTooltip2;
}(React$1.Component), _defineProperty(_class2, "defaultProps", {
  insecure: true,
  resizeHide: true,
  wrapper: "div",
  clickable: false
}), _defineProperty(_class2, "supportedWrappers", ["div", "span"]), _defineProperty(_class2, "displayName", "ReactTooltip"), _temp)) || _class) || _class) || _class) || _class) || _class) || _class) || _class;
var lib = {};
var __extends = commonjsGlobal$1 && commonjsGlobal$1.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = commonjsGlobal$1 && commonjsGlobal$1.__assign || function() {
  __assign = Object.assign || function(t2) {
    for (var s, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s = arguments[i2];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m2, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m2, k);
  if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m2[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m2, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m2[k];
});
var __setModuleDefault = commonjsGlobal$1 && commonjsGlobal$1.__setModuleDefault || (Object.create ? function(o, v2) {
  Object.defineProperty(o, "default", { enumerable: true, value: v2 });
} : function(o, v2) {
  o["default"] = v2;
});
var __importStar = commonjsGlobal$1 && commonjsGlobal$1.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
var __rest = commonjsGlobal$1 && commonjsGlobal$1.__rest || function(s, e) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s); i2 < p2.length; i2++) {
      if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i2]))
        t2[p2[i2]] = s[p2[i2]];
    }
  return t2;
};
Object.defineProperty(lib, "__esModule", { value: true });
var React = __importStar(react.exports);
var KEYCODE_ENTER = 13;
var KEYCODE_TAB = 9;
var KEYCODE_BACKSPACE = 8;
var KEYCODE_Y = 89;
var KEYCODE_Z = 90;
var KEYCODE_M = 77;
var KEYCODE_PARENS = 57;
var KEYCODE_BRACKETS = 219;
var KEYCODE_QUOTE = 222;
var KEYCODE_BACK_QUOTE = 192;
var KEYCODE_ESCAPE = 27;
var HISTORY_LIMIT = 100;
var HISTORY_TIME_GAP = 3e3;
var isWindows = typeof window !== "undefined" && "navigator" in window && /Win/i.test(navigator.platform);
var isMacLike = typeof window !== "undefined" && "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
var className = "npm__react-simple-code-editor__textarea";
var cssText = "\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(className, ":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(className, " {\n    color: transparent !important;\n  }\n\n  .").concat(className, "::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n");
var Editor = function(_super) {
  __extends(Editor2, _super);
  function Editor2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      capture: true
    };
    _this._recordCurrentState = function() {
      var input = _this._input;
      if (!input)
        return;
      var value = input.value, selectionStart = input.selectionStart, selectionEnd = input.selectionEnd;
      _this._recordChange({
        value,
        selectionStart,
        selectionEnd
      });
    };
    _this._getLines = function(text, position) {
      return text.substring(0, position).split("\n");
    };
    _this._recordChange = function(record, overwrite) {
      var _a, _b, _c;
      if (overwrite === void 0) {
        overwrite = false;
      }
      var _d = _this._history, stack = _d.stack, offset = _d.offset;
      if (stack.length && offset > -1) {
        _this._history.stack = stack.slice(0, offset + 1);
        var count = _this._history.stack.length;
        if (count > HISTORY_LIMIT) {
          var extras = count - HISTORY_LIMIT;
          _this._history.stack = stack.slice(extras, count);
          _this._history.offset = Math.max(_this._history.offset - extras, 0);
        }
      }
      var timestamp = Date.now();
      if (overwrite) {
        var last = _this._history.stack[_this._history.offset];
        if (last && timestamp - last.timestamp < HISTORY_TIME_GAP) {
          var re2 = /[^a-z0-9]([a-z0-9]+)$/i;
          var previous = (_a = _this._getLines(last.value, last.selectionStart).pop()) === null || _a === void 0 ? void 0 : _a.match(re2);
          var current = (_b = _this._getLines(record.value, record.selectionStart).pop()) === null || _b === void 0 ? void 0 : _b.match(re2);
          if ((previous === null || previous === void 0 ? void 0 : previous[1]) && ((_c = current === null || current === void 0 ? void 0 : current[1]) === null || _c === void 0 ? void 0 : _c.startsWith(previous[1]))) {
            _this._history.stack[_this._history.offset] = __assign(__assign({}, record), { timestamp });
            return;
          }
        }
      }
      _this._history.stack.push(__assign(__assign({}, record), { timestamp }));
      _this._history.offset++;
    };
    _this._updateInput = function(record) {
      var input = _this._input;
      if (!input)
        return;
      input.value = record.value;
      input.selectionStart = record.selectionStart;
      input.selectionEnd = record.selectionEnd;
      _this.props.onValueChange(record.value);
    };
    _this._applyEdits = function(record) {
      var input = _this._input;
      var last = _this._history.stack[_this._history.offset];
      if (last && input) {
        _this._history.stack[_this._history.offset] = __assign(__assign({}, last), { selectionStart: input.selectionStart, selectionEnd: input.selectionEnd });
      }
      _this._recordChange(record);
      _this._updateInput(record);
    };
    _this._undoEdit = function() {
      var _a = _this._history, stack = _a.stack, offset = _a.offset;
      var record = stack[offset - 1];
      if (record) {
        _this._updateInput(record);
        _this._history.offset = Math.max(offset - 1, 0);
      }
    };
    _this._redoEdit = function() {
      var _a = _this._history, stack = _a.stack, offset = _a.offset;
      var record = stack[offset + 1];
      if (record) {
        _this._updateInput(record);
        _this._history.offset = Math.min(offset + 1, stack.length - 1);
      }
    };
    _this._handleKeyDown = function(e) {
      var _a = _this.props, tabSize = _a.tabSize, insertSpaces = _a.insertSpaces, ignoreTabKey = _a.ignoreTabKey, onKeyDown = _a.onKeyDown;
      if (onKeyDown) {
        onKeyDown(e);
        if (e.defaultPrevented) {
          return;
        }
      }
      if (e.keyCode === KEYCODE_ESCAPE) {
        e.currentTarget.blur();
      }
      var _b = e.currentTarget, value = _b.value, selectionStart = _b.selectionStart, selectionEnd = _b.selectionEnd;
      var tabCharacter = (insertSpaces ? " " : "	").repeat(tabSize);
      if (e.keyCode === KEYCODE_TAB && !ignoreTabKey && _this.state.capture) {
        e.preventDefault();
        if (e.shiftKey) {
          var linesBeforeCaret = _this._getLines(value, selectionStart);
          var startLine_1 = linesBeforeCaret.length - 1;
          var endLine_1 = _this._getLines(value, selectionEnd).length - 1;
          var nextValue = value.split("\n").map(function(line2, i2) {
            if (i2 >= startLine_1 && i2 <= endLine_1 && line2.startsWith(tabCharacter)) {
              return line2.substring(tabCharacter.length);
            }
            return line2;
          }).join("\n");
          if (value !== nextValue) {
            var startLineText = linesBeforeCaret[startLine_1];
            _this._applyEdits({
              value: nextValue,
              selectionStart: (startLineText === null || startLineText === void 0 ? void 0 : startLineText.startsWith(tabCharacter)) ? selectionStart - tabCharacter.length : selectionStart,
              selectionEnd: selectionEnd - (value.length - nextValue.length)
            });
          }
        } else if (selectionStart !== selectionEnd) {
          var linesBeforeCaret = _this._getLines(value, selectionStart);
          var startLine_2 = linesBeforeCaret.length - 1;
          var endLine_2 = _this._getLines(value, selectionEnd).length - 1;
          var startLineText = linesBeforeCaret[startLine_2];
          _this._applyEdits({
            value: value.split("\n").map(function(line2, i2) {
              if (i2 >= startLine_2 && i2 <= endLine_2) {
                return tabCharacter + line2;
              }
              return line2;
            }).join("\n"),
            selectionStart: startLineText && /\S/.test(startLineText) ? selectionStart + tabCharacter.length : selectionStart,
            selectionEnd: selectionEnd + tabCharacter.length * (endLine_2 - startLine_2 + 1)
          });
        } else {
          var updatedSelection = selectionStart + tabCharacter.length;
          _this._applyEdits({
            value: value.substring(0, selectionStart) + tabCharacter + value.substring(selectionEnd),
            selectionStart: updatedSelection,
            selectionEnd: updatedSelection
          });
        }
      } else if (e.keyCode === KEYCODE_BACKSPACE) {
        var hasSelection = selectionStart !== selectionEnd;
        var textBeforeCaret = value.substring(0, selectionStart);
        if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
          e.preventDefault();
          var updatedSelection = selectionStart - tabCharacter.length;
          _this._applyEdits({
            value: value.substring(0, selectionStart - tabCharacter.length) + value.substring(selectionEnd),
            selectionStart: updatedSelection,
            selectionEnd: updatedSelection
          });
        }
      } else if (e.keyCode === KEYCODE_ENTER) {
        if (selectionStart === selectionEnd) {
          var line = _this._getLines(value, selectionStart).pop();
          var matches = line === null || line === void 0 ? void 0 : line.match(/^\s+/);
          if (matches === null || matches === void 0 ? void 0 : matches[0]) {
            e.preventDefault();
            var indent = "\n" + matches[0];
            var updatedSelection = selectionStart + indent.length;
            _this._applyEdits({
              value: value.substring(0, selectionStart) + indent + value.substring(selectionEnd),
              selectionStart: updatedSelection,
              selectionEnd: updatedSelection
            });
          }
        }
      } else if (e.keyCode === KEYCODE_PARENS || e.keyCode === KEYCODE_BRACKETS || e.keyCode === KEYCODE_QUOTE || e.keyCode === KEYCODE_BACK_QUOTE) {
        var chars = void 0;
        if (e.keyCode === KEYCODE_PARENS && e.shiftKey) {
          chars = ["(", ")"];
        } else if (e.keyCode === KEYCODE_BRACKETS) {
          if (e.shiftKey) {
            chars = ["{", "}"];
          } else {
            chars = ["[", "]"];
          }
        } else if (e.keyCode === KEYCODE_QUOTE) {
          if (e.shiftKey) {
            chars = ['"', '"'];
          } else {
            chars = ["'", "'"];
          }
        } else if (e.keyCode === KEYCODE_BACK_QUOTE && !e.shiftKey) {
          chars = ["`", "`"];
        }
        if (selectionStart !== selectionEnd && chars) {
          e.preventDefault();
          _this._applyEdits({
            value: value.substring(0, selectionStart) + chars[0] + value.substring(selectionStart, selectionEnd) + chars[1] + value.substring(selectionEnd),
            selectionStart,
            selectionEnd: selectionEnd + 2
          });
        }
      } else if ((isMacLike ? e.metaKey && e.keyCode === KEYCODE_Z : e.ctrlKey && e.keyCode === KEYCODE_Z) && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        _this._undoEdit();
      } else if ((isMacLike ? e.metaKey && e.keyCode === KEYCODE_Z && e.shiftKey : isWindows ? e.ctrlKey && e.keyCode === KEYCODE_Y : e.ctrlKey && e.keyCode === KEYCODE_Z && e.shiftKey) && !e.altKey) {
        e.preventDefault();
        _this._redoEdit();
      } else if (e.keyCode === KEYCODE_M && e.ctrlKey && (isMacLike ? e.shiftKey : true)) {
        e.preventDefault();
        _this.setState(function(state) {
          return {
            capture: !state.capture
          };
        });
      }
    };
    _this._handleChange = function(e) {
      var _a = e.currentTarget, value = _a.value, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd;
      _this._recordChange({
        value,
        selectionStart,
        selectionEnd
      }, true);
      _this.props.onValueChange(value);
    };
    _this._history = {
      stack: [],
      offset: -1
    };
    _this._input = null;
    return _this;
  }
  Editor2.prototype.componentDidMount = function() {
    this._recordCurrentState();
  };
  Object.defineProperty(Editor2.prototype, "session", {
    get: function() {
      return {
        history: this._history
      };
    },
    set: function(session) {
      this._history = session.history;
    },
    enumerable: false,
    configurable: true
  });
  Editor2.prototype.render = function() {
    var _this = this;
    var _a = this.props, value = _a.value, style2 = _a.style, padding = _a.padding, highlight = _a.highlight, textareaId = _a.textareaId, textareaClassName = _a.textareaClassName, autoFocus = _a.autoFocus, disabled = _a.disabled, form = _a.form, maxLength = _a.maxLength, minLength = _a.minLength, name = _a.name, placeholder = _a.placeholder, readOnly = _a.readOnly, required = _a.required, onClick = _a.onClick, onFocus = _a.onFocus, onBlur = _a.onBlur, onKeyUp = _a.onKeyUp;
    _a.onKeyDown;
    _a.onValueChange;
    _a.tabSize;
    _a.insertSpaces;
    _a.ignoreTabKey;
    var preClassName = _a.preClassName, rest = __rest(_a, ["value", "style", "padding", "highlight", "textareaId", "textareaClassName", "autoFocus", "disabled", "form", "maxLength", "minLength", "name", "placeholder", "readOnly", "required", "onClick", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onValueChange", "tabSize", "insertSpaces", "ignoreTabKey", "preClassName"]);
    var contentStyle = {
      paddingTop: typeof padding === "object" ? padding.top : padding,
      paddingRight: typeof padding === "object" ? padding.right : padding,
      paddingBottom: typeof padding === "object" ? padding.bottom : padding,
      paddingLeft: typeof padding === "object" ? padding.left : padding
    };
    var highlighted = highlight(value);
    return React.createElement(
      "div",
      __assign({}, rest, { style: __assign(__assign({}, styles.container), style2) }),
      React.createElement("pre", __assign({ className: preClassName, "aria-hidden": "true", style: __assign(__assign(__assign({}, styles.editor), styles.highlight), contentStyle) }, typeof highlighted === "string" ? { dangerouslySetInnerHTML: { __html: highlighted + "<br />" } } : { children: highlighted })),
      React.createElement("textarea", { ref: function(c) {
        return _this._input = c;
      }, style: __assign(__assign(__assign({}, styles.editor), styles.textarea), contentStyle), className: className + (textareaClassName ? " ".concat(textareaClassName) : ""), id: textareaId, value, onChange: this._handleChange, onKeyDown: this._handleKeyDown, onClick, onKeyUp, onFocus, onBlur, disabled, form, maxLength, minLength, name, placeholder, readOnly, required, autoFocus, autoCapitalize: "off", autoComplete: "off", autoCorrect: "off", spellCheck: false, "data-gramm": false }),
      React.createElement("style", { dangerouslySetInnerHTML: { __html: cssText } })
    );
  };
  Editor2.defaultProps = {
    tabSize: 2,
    insertSpaces: true,
    ignoreTabKey: false,
    padding: 0
  };
  return Editor2;
}(React.Component);
var _default = lib.default = Editor;
var styles = {
  container: {
    position: "relative",
    textAlign: "left",
    boxSizing: "border-box",
    padding: 0,
    overflow: "hidden"
  },
  textarea: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    resize: "none",
    color: "inherit",
    overflow: "hidden",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    WebkitTextFillColor: "transparent"
  },
  highlight: {
    position: "relative",
    pointerEvents: "none"
  },
  editor: {
    margin: 0,
    border: 0,
    background: "none",
    boxSizing: "inherit",
    display: "inherit",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontStyle: "inherit",
    fontVariantLigatures: "inherit",
    fontWeight: "inherit",
    letterSpacing: "inherit",
    lineHeight: "inherit",
    tabSize: "inherit",
    textIndent: "inherit",
    textRendering: "inherit",
    textTransform: "inherit",
    whiteSpace: "pre-wrap",
    wordBreak: "keep-all",
    overflowWrap: "break-word"
  }
};
var prismCore = { exports: {} };
(function(module) {
  var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var Prism2 = function(_self2) {
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;
    var plainTextGrammar = {};
    var _ = {
      manual: _self2.Prism && _self2.Prism.manual,
      disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
      util: {
        encode: function encode(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, encode(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(encode);
          } else {
            return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          }
        },
        type: function(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        },
        objId: function(obj) {
          if (!obj["__id"]) {
            Object.defineProperty(obj, "__id", { value: ++uniqueId });
          }
          return obj["__id"];
        },
        clone: function deepClone(o, visited) {
          visited = visited || {};
          var clone;
          var id2;
          switch (_.util.type(o)) {
            case "Object":
              id2 = _.util.objId(o);
              if (visited[id2]) {
                return visited[id2];
              }
              clone = {};
              visited[id2] = clone;
              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone[key] = deepClone(o[key], visited);
                }
              }
              return clone;
            case "Array":
              id2 = _.util.objId(o);
              if (visited[id2]) {
                return visited[id2];
              }
              clone = [];
              visited[id2] = clone;
              o.forEach(function(v2, i2) {
                clone[i2] = deepClone(v2, visited);
              });
              return clone;
            default:
              return o;
          }
        },
        getLanguage: function(element) {
          while (element) {
            var m2 = lang.exec(element.className);
            if (m2) {
              return m2[1].toLowerCase();
            }
            element = element.parentElement;
          }
          return "none";
        },
        setLanguage: function(element, language) {
          element.className = element.className.replace(RegExp(lang, "gi"), "");
          element.classList.add("language-" + language);
        },
        currentScript: function() {
          if (typeof document === "undefined") {
            return null;
          }
          if ("currentScript" in document && 1 < 2) {
            return document.currentScript;
          }
          try {
            throw new Error();
          } catch (err) {
            var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
            if (src) {
              var scripts = document.getElementsByTagName("script");
              for (var i2 in scripts) {
                if (scripts[i2].src == src) {
                  return scripts[i2];
                }
              }
            }
            return null;
          }
        },
        isActive: function(element, className2, defaultActivation) {
          var no = "no-" + className2;
          while (element) {
            var classList = element.classList;
            if (classList.contains(className2)) {
              return true;
            }
            if (classList.contains(no)) {
              return false;
            }
            element = element.parentElement;
          }
          return !!defaultActivation;
        }
      },
      languages: {
        plain: plainTextGrammar,
        plaintext: plainTextGrammar,
        text: plainTextGrammar,
        txt: plainTextGrammar,
        extend: function(id2, redef) {
          var lang2 = _.util.clone(_.languages[id2]);
          for (var key in redef) {
            lang2[key] = redef[key];
          }
          return lang2;
        },
        insertBefore: function(inside, before, insert, root) {
          root = root || _.languages;
          var grammar = root[inside];
          var ret = {};
          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              }
              if (!insert.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }
          var old = root[inside];
          root[inside] = ret;
          _.languages.DFS(_.languages, function(key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });
          return ret;
        },
        DFS: function DFS(o, callback, type, visited) {
          visited = visited || {};
          var objId = _.util.objId;
          for (var i2 in o) {
            if (o.hasOwnProperty(i2)) {
              callback.call(o, i2, o[i2], type || i2);
              var property = o[i2];
              var propertyType = _.util.type(property);
              if (propertyType === "Object" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === "Array" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i2, visited);
              }
            }
          }
        }
      },
      plugins: {},
      highlightAll: function(async, callback) {
        _.highlightAllUnder(document, async, callback);
      },
      highlightAllUnder: function(container, async, callback) {
        var env = {
          callback,
          container,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        _.hooks.run("before-highlightall", env);
        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
        _.hooks.run("before-all-elements-highlight", env);
        for (var i2 = 0, element; element = env.elements[i2++]; ) {
          _.highlightElement(element, async === true, env.callback);
        }
      },
      highlightElement: function(element, async, callback) {
        var language = _.util.getLanguage(element);
        var grammar = _.languages[language];
        _.util.setLanguage(element, language);
        var parent = element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre") {
          _.util.setLanguage(parent, language);
        }
        var code = element.textContent;
        var env = {
          element,
          language,
          grammar,
          code
        };
        function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;
          _.hooks.run("before-insert", env);
          env.element.innerHTML = env.highlightedCode;
          _.hooks.run("after-highlight", env);
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
        }
        _.hooks.run("before-sanity-check", env);
        parent = env.element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
          parent.setAttribute("tabindex", "0");
        }
        if (!env.code) {
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
          return;
        }
        _.hooks.run("before-highlight", env);
        if (!env.grammar) {
          insertHighlightedCode(_.util.encode(env.code));
          return;
        }
        if (async && _self2.Worker) {
          var worker = new Worker(_.filename);
          worker.onmessage = function(evt) {
            insertHighlightedCode(evt.data);
          };
          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        }
      },
      highlight: function(text, grammar, language) {
        var env = {
          code: text,
          grammar,
          language
        };
        _.hooks.run("before-tokenize", env);
        if (!env.grammar) {
          throw new Error('The language "' + env.language + '" has no grammar.');
        }
        env.tokens = _.tokenize(env.code, env.grammar);
        _.hooks.run("after-tokenize", env);
        return Token.stringify(_.util.encode(env.tokens), env.language);
      },
      tokenize: function(text, grammar) {
        var rest = grammar.rest;
        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }
          delete grammar.rest;
        }
        var tokenList = new LinkedList();
        addAfter(tokenList, tokenList.head, text);
        matchGrammar(text, tokenList, grammar, tokenList.head, 0);
        return toArray(tokenList);
      },
      hooks: {
        all: {},
        add: function(name, callback) {
          var hooks = _.hooks.all;
          hooks[name] = hooks[name] || [];
          hooks[name].push(callback);
        },
        run: function(name, env) {
          var callbacks = _.hooks.all[name];
          if (!callbacks || !callbacks.length) {
            return;
          }
          for (var i2 = 0, callback; callback = callbacks[i2++]; ) {
            callback(env);
          }
        }
      },
      Token
    };
    _self2.Prism = _;
    function Token(type, content, alias, matchedStr) {
      this.type = type;
      this.content = content;
      this.alias = alias;
      this.length = (matchedStr || "").length | 0;
    }
    Token.stringify = function stringify(o, language) {
      if (typeof o == "string") {
        return o;
      }
      if (Array.isArray(o)) {
        var s = "";
        o.forEach(function(e) {
          s += stringify(e, language);
        });
        return s;
      }
      var env = {
        type: o.type,
        content: stringify(o.content, language),
        tag: "span",
        classes: ["token", o.type],
        attributes: {},
        language
      };
      var aliases = o.alias;
      if (aliases) {
        if (Array.isArray(aliases)) {
          Array.prototype.push.apply(env.classes, aliases);
        } else {
          env.classes.push(aliases);
        }
      }
      _.hooks.run("wrap", env);
      var attributes = "";
      for (var name in env.attributes) {
        attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
      }
      return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
    };
    function matchPattern(pattern, pos, text, lookbehind) {
      pattern.lastIndex = pos;
      var match2 = pattern.exec(text);
      if (match2 && lookbehind && match2[1]) {
        var lookbehindLength = match2[1].length;
        match2.index += lookbehindLength;
        match2[0] = match2[0].slice(lookbehindLength);
      }
      return match2;
    }
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }
        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];
        for (var j = 0; j < patterns.length; ++j) {
          if (rematch && rematch.cause == token + "," + j) {
            return;
          }
          var patternObj = patterns[j];
          var inside = patternObj.inside;
          var lookbehind = !!patternObj.lookbehind;
          var greedy = !!patternObj.greedy;
          var alias = patternObj.alias;
          if (greedy && !patternObj.pattern.global) {
            var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
          }
          var pattern = patternObj.pattern || patternObj;
          for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
            if (rematch && pos >= rematch.reach) {
              break;
            }
            var str = currentNode.value;
            if (tokenList.length > text.length) {
              return;
            }
            if (str instanceof Token) {
              continue;
            }
            var removeCount = 1;
            var match2;
            if (greedy) {
              match2 = matchPattern(pattern, pos, text, lookbehind);
              if (!match2 || match2.index >= text.length) {
                break;
              }
              var from = match2.index;
              var to = match2.index + match2[0].length;
              var p2 = pos;
              p2 += currentNode.value.length;
              while (from >= p2) {
                currentNode = currentNode.next;
                p2 += currentNode.value.length;
              }
              p2 -= currentNode.value.length;
              pos = p2;
              if (currentNode.value instanceof Token) {
                continue;
              }
              for (var k = currentNode; k !== tokenList.tail && (p2 < to || typeof k.value === "string"); k = k.next) {
                removeCount++;
                p2 += k.value.length;
              }
              removeCount--;
              str = text.slice(pos, p2);
              match2.index -= pos;
            } else {
              match2 = matchPattern(pattern, 0, str, lookbehind);
              if (!match2) {
                continue;
              }
            }
            var from = match2.index;
            var matchStr = match2[0];
            var before = str.slice(0, from);
            var after = str.slice(from + matchStr.length);
            var reach = pos + str.length;
            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }
            var removeFrom = currentNode.prev;
            if (before) {
              removeFrom = addAfter(tokenList, removeFrom, before);
              pos += before.length;
            }
            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);
            if (after) {
              addAfter(tokenList, currentNode, after);
            }
            if (removeCount > 1) {
              var nestedRematch = {
                cause: token + "," + j,
                reach
              };
              matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
              if (rematch && nestedRematch.reach > rematch.reach) {
                rematch.reach = nestedRematch.reach;
              }
            }
          }
        }
      }
    }
    function LinkedList() {
      var head = { value: null, prev: null, next: null };
      var tail = { value: null, prev: head, next: null };
      head.next = tail;
      this.head = head;
      this.tail = tail;
      this.length = 0;
    }
    function addAfter(list, node, value) {
      var next = node.next;
      var newNode = { value, prev: node, next };
      node.next = newNode;
      next.prev = newNode;
      list.length++;
      return newNode;
    }
    function removeRange(list, node, count) {
      var next = node.next;
      for (var i2 = 0; i2 < count && next !== list.tail; i2++) {
        next = next.next;
      }
      node.next = next;
      next.prev = node;
      list.length -= i2;
    }
    function toArray(list) {
      var array = [];
      var node = list.head.next;
      while (node !== list.tail) {
        array.push(node.value);
        node = node.next;
      }
      return array;
    }
    if (!_self2.document) {
      if (!_self2.addEventListener) {
        return _;
      }
      if (!_.disableWorkerMessageHandler) {
        _self2.addEventListener("message", function(evt) {
          var message = JSON.parse(evt.data);
          var lang2 = message.language;
          var code = message.code;
          var immediateClose = message.immediateClose;
          _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
          if (immediateClose) {
            _self2.close();
          }
        }, false);
      }
      return _;
    }
    var script = _.util.currentScript();
    if (script) {
      _.filename = script.src;
      if (script.hasAttribute("data-manual")) {
        _.manual = true;
      }
    }
    function highlightAutomaticallyCallback() {
      if (!_.manual) {
        _.highlightAll();
      }
    }
    if (!_.manual) {
      var readyState = document.readyState;
      if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
        document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }
    return _;
  }(_self);
  if (module.exports) {
    module.exports = Prism2;
  }
  if (typeof commonjsGlobal$1 !== "undefined") {
    commonjsGlobal$1.Prism = Prism2;
  }
})(prismCore);
Prism.languages.clike = {
  "comment": [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true,
      greedy: true
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    }
  ],
  "string": {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      "punctuation": /[.\\]/
    }
  },
  "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  "boolean": /\b(?:false|true)\b/,
  "function": /\b\w+(?=\()/,
  "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  "punctuation": /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: true
    }
  ],
  "keyword": [
    {
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: true
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: true
    }
  ],
  "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  "number": {
    pattern: RegExp(
      /(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
    ),
    lookbehind: true
  },
  "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  "regex": {
    pattern: RegExp(
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
    ),
    lookbehind: true,
    greedy: true,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  "parameter": [
    {
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  ],
  "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
  "hashbang": {
    pattern: /^#!.*/,
    greedy: true,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      "interpolation": {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      "string": /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: "property"
  }
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: "property"
  }
});
if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined("script", "javascript");
  Prism.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  );
}
Prism.languages.js = Prism.languages.javascript;
var prism = "";
function Settings(props) {
  const [templateOptions, setTemplateOptions] = react.exports.useState([]);
  const [currentTemplateName, setCurrentTemplateName] = react.exports.useState(
    localStorage.getItem("templateName") ? localStorage.getItem("templateName") : "none"
  );
  const [currentEditTemplateName, setCurrentEditTemplateName] = react.exports.useState("");
  const [saveDisabled, setSaveDisabled] = react.exports.useState(true);
  const [deleteDisabled, setDeleteDisabled] = react.exports.useState(true);
  const [createDisabled, setCreateDisabled] = react.exports.useState(true);
  const [isRerender, setIsRerender] = react.exports.useState(false);
  const [codeValue, setCodeValue] = react.exports.useState("");
  const [useDefaultTemplateState, setUseDefaultTemplateState] = react.exports.useState(
    localStorage.getItem("useDefaultTemplate")
  );
  const endpoint2 = props.endpoint;
  react.exports.useEffect(() => {
    initializeLoginSection();
    initializeTemplateSection();
    document.querySelector(".settings-btn").classList.add("selected-route");
    if (isRerender) {
      document.querySelector("#codeArea").textContent = "";
      document.getElementById("template-area").style.display = "none";
      document.getElementById("file-input").value = "";
      let selects = document.getElementsByClassName("settings-select");
      for (let select of selects) {
        select.value = "none";
      }
      setCreateDisabled(true);
      setSaveDisabled(true);
      setDeleteDisabled(true);
      setIsRerender(false);
    }
    const fetchData = async () => {
      let response = "";
      try {
        response = await fetch(`${endpoint2}/REST/templates/_list`);
      } catch (err) {
        alert(
          "There was a problem retrieving templates from the server."
        );
        return;
      }
      let json = await response.json();
      if (currentTemplateName === "none" && json && json.length > 0) {
        alert(
          "No template is selected.  Please choose one and apply the template."
        );
      } else if (currentTemplateName === "none") {
        alert("No templates found on server. Please create some.");
      }
      let templateOptionsArr = json.map((template, index) => /* @__PURE__ */ React$1.createElement("option", {
        key: `template-option-${index}`,
        value: template.name
      }, template.name));
      templateOptionsArr.unshift(
        /* @__PURE__ */ React$1.createElement("option", {
          key: `template-option-default`,
          value: "none"
        }, "Choose One")
      );
      setTemplateOptions(templateOptionsArr);
    };
    fetchData();
  }, [currentTemplateName, isRerender]);
  const hightlightWithLineNumbers = (input, language) => prismCore.exports.highlight(input, language).split("\n").map(
    (line, i2) => `<span class='editorLineNumber'>${i2 + 1}</span>${line}`
  ).join("\n");
  async function applyTemplate(e) {
    e.preventDefault();
    const selectedTemplate = e.target[0].value;
    if (selectedTemplate !== "none") {
      localStorage.setItem("templateName", selectedTemplate);
      setCurrentTemplateName(selectedTemplate);
      await props.handleChangeTemplate();
      alert("Template Applied");
    }
  }
  const [needCustom, setNeedCustom] = react.exports.useState(false);
  const [strCustomServer, setStrCustomServer] = react.exports.useState(localStorage.getItem("cloudServer") + localStorage.getItem("customServerPostfix"));
  const [strLogin, setStrLogin] = react.exports.useState("");
  const [strPassword, setStrPassword] = react.exports.useState("");
  async function processCustom(e) {
    setNeedCustom(e == "Custom");
  }
  async function processNewServer(e) {
    if (needCustom) {
      localStorage.setItem("cloudServer", strCustomServer);
      localStorage.setItem("customServerPostfix", "");
    } else {
      localStorage.setItem("cloudServer", e);
      localStorage.setItem("customServerPostfix", ".streambox.com");
    }
  }
  async function changeDefaultTemplateWrapper(e) {
    e.preventDefault();
    let templateName = e.target[0].value;
    if (templateName !== "none") {
      changeDefaultTemplate(templateName);
    }
  }
  async function changeDefaultTemplate(templateName) {
    let response;
    let formData = new FormData();
    formData.append("templatename", templateName);
    {
      response = await fetch(
        endpoint2 + `/sbuiauth/changeDefaultTemplate.php`,
        {
          method: "post",
          body: formData
        }
      ).catch(console.error);
    }
    let result = await response.text();
    setCurrentTemplateName(templateName);
    localStorage.setItem("defaultTemplate", templateName);
    await props.handleChangeTemplate();
    alert(result);
  }
  async function getDefaultTemplate() {
    let response;
    {
      response = await fetch(
        endpoint2 + "/sbuiauth/getDefaultTemplate.php"
      ).catch(console.error);
      let result = await response.text();
      localStorage.setItem("defaultTemplate", result);
    }
  }
  async function attemptLoginSubmit(e) {
    e.preventDefault();
    const login = strLogin;
    const hashedPass = md5(strPassword);
    const serverIndex = e.target[0].selectedIndex;
    const chosenServer = serverList[serverIndex];
    if (chosenServer !== localStorage.getItem("cloudServer")) {
      localStorage.removeItem("sessionDRM");
    }
    processNewServer(chosenServer);
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 15e3);
    let response = await fetch(
      `https://${localStorage.getItem("cloudServer")}${localStorage.getItem("customServerPostfix")}/ls/VerifyLoginXML.php?login=${login}&hashedPass=${hashedPass}`,
      {
        method: "GET",
        signal: controller.signal,
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      }
    ).catch((e2) => {
      document.querySelector("#login-status").textContent = "The Server is Down...";
      document.querySelector("#login-status").style.color = "red";
    });
    let result = await response.text();
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(result, "text/xml");
    let parsedXML = xmlDoc.getElementsByTagName("body")[0];
    if (parsedXML.getAttribute("result") === "success") {
      hideLoginElems();
      document.querySelector("#login-status").textContent = `Logged In- ${localStorage.getItem("cloudServer")}`;
      document.querySelector("#login-status").style.color = "green";
      localStorage.setItem("cloudLogin", login);
      localStorage.setItem("cloudPass", hashedPass);
      localStorage.setItem("user_id", parsedXML.getAttribute("user_id"));
    } else {
      document.querySelector("#login-status").textContent = "Login Failure: Username/Password is incorrect";
      document.querySelector("#login-status").style.color = "red";
    }
  }
  function openEditPage() {
    document.getElementById("create-container").style.display = "none";
    document.getElementById("edit-container").style.display = "flex";
  }
  function openApplyPage() {
    document.getElementById("create-container").style.display = "flex";
    document.getElementById("edit-container").style.display = "none";
  }
  async function initializeLoginSection() {
    let loginResult = await attemptLogin();
    if (loginResult === "success") {
      hideLoginElems();
      document.querySelector("#login-status").textContent = `Logged In- ${localStorage.getItem("cloudServer")}`;
      document.querySelector("#login-status").style.color = "green";
    }
    if (localStorage.getItem("cloudServer") === "" || localStorage.getItem("cloudServer") === void 0 || localStorage.getItem("cloudServer") === null) {
      localStorage.setItem("cloudServer", "LivePOST");
    }
    const storedCloudServer = localStorage.getItem("cloudServer");
    let options2 = document.querySelector(".server-select").options;
    for (let option of options2) {
      if (option.value === storedCloudServer) {
        option.selected = true;
      }
    }
    document.querySelector(".hostname-input").value = localStorage.getItem("hostName");
  }
  async function initializeTemplateSection() {
    await getDefaultTemplate();
    let useDefaultTemplate = useDefaultTemplateState;
    if (useDefaultTemplate === null) {
      localStorage.setItem("useDefaultTemplate", "true");
      setUseDefaultTemplateState("true");
      useDefaultTemplate = "true";
    }
    if (useDefaultTemplate === "true") {
      document.querySelector(".default-template-cbox").checked = true;
      let defaultTemplate = localStorage.getItem("defaultTemplate");
      if (defaultTemplate === null) {
        localStorage.setItem(
          "defaultTemplate",
          "Dark Prod Template (Read-only)"
        );
        defaultTemplate = "Dark Prod Template (Read-only)";
      }
      handleCheckedDefaultBox(defaultTemplate, "true");
    } else if (useDefaultTemplate === "false") {
      document.querySelector(".default-template-cbox").checked = false;
      let templateName = localStorage.getItem("templateName");
      handleUncheckedDefaultBox(templateName, "false");
    }
  }
  function handleCheckedDefaultBox(defaultTemplate, defaultTemplateState) {
    document.querySelector(
      ".change-default-template-wrapper"
    ).style.display = "initial";
    document.querySelector(
      ".change-custom-template-wrapper"
    ).style.display = "none";
    setUseDefaultTemplateState(defaultTemplateState);
    setCurrentTemplateName(defaultTemplate);
  }
  function handleUncheckedDefaultBox(template, defaultTemplateState) {
    document.querySelector(
      ".change-default-template-wrapper"
    ).style.display = "none";
    document.querySelector(
      ".change-custom-template-wrapper"
    ).style.display = "initial";
    setUseDefaultTemplateState(defaultTemplateState);
    setCurrentTemplateName(template);
  }
  async function deleteTemplate() {
    if (confirm(
      "Are you sure you want to delete " + currentEditTemplateName
    )) {
      let response = await fetch(
        `${endpoint2}/REST/templates/${currentEditTemplateName}`,
        {
          method: "DELETE"
        }
      );
      let text = await response.text();
      let parsedText = JSON.parse(text);
      if (parsedText.errmsg === "deleted") {
        alert(currentEditTemplateName + " has been deleted");
      } else {
        alert("Error deleting " + currentEditTemplateName);
      }
      setIsRerender(true);
    }
  }
  function isReadOnlyTemplate(templateName) {
    if (templateName === "Colorful Prod Template (Read-only)" || templateName === "Dark Prod Template (Read-only)" || templateName === "Light Prod Template (Read-only)") {
      return true;
    }
    return false;
  }
  async function editTemplate(e) {
    e.preventDefault();
    const selectedTemplate = e.target[0].value;
    if (selectedTemplate !== "none") {
      setCreateDisabled(false);
      let response = await fetch(
        `${endpoint2}/REST/templates/${selectedTemplate}`
      );
      let json;
      try {
        json = await response.json();
      } catch (e2) {
        setCodeValue("This JSON file is not formatted correctly");
        return;
      }
      const prettyJson = JSON.stringify(json, void 0, 2);
      document.getElementById("template-area").style.display = "flex";
      document.getElementById("down-arrow").style.display = "initial";
      setCodeValue(prettyJson);
      document.querySelector(
        ".template-area-status"
      ).innerHTML = `Editing Template: <span style="color: #2195ce;">${selectedTemplate}</span>`;
      if (isReadOnlyTemplate(selectedTemplate)) {
        setSaveDisabled(true);
        setDeleteDisabled(true);
      } else {
        setSaveDisabled(false);
        setDeleteDisabled(false);
      }
      setCurrentEditTemplateName(selectedTemplate);
    }
  }
  async function saveTemplate() {
    if (confirm(
      "Are you sure you want to save template: " + currentEditTemplateName
    )) {
      let formData = new FormData();
      formData.append("filename", currentEditTemplateName);
      formData.append(
        "filedata",
        document.querySelector("#codeArea").textContent
      );
      let response = await fetch(`${endpoint2}/REST/templates/newfile`, {
        method: "POST",
        body: formData
      });
      let text = await response.text();
      let parsedText = JSON.parse(text);
      if (parsedText.errmsg === "written") {
        alert("Saved edited template: " + currentEditTemplateName);
      } else {
        alert("Error saving template");
      }
      if (currentTemplateName === currentEditTemplateName) {
        props.handleChangeTemplate();
      }
      setIsRerender(true);
    }
  }
  async function createTemplate(e) {
    e.preventDefault();
    let templateName = prompt("Please enter a template new template name:");
    if (templateName == null || templateName == "") {
      alert("Template name is blank.");
    } else {
      let formData = new FormData();
      formData.append("filename", templateName);
      formData.append(
        "filedata",
        document.querySelector("#codeArea").textContent
      );
      let response = await fetch(`${endpoint2}/REST/templates/newfile`, {
        method: "POST",
        body: formData
      });
      let text = await response.text();
      let parsedText = JSON.parse(text);
      if (parsedText.errmsg === "written") {
        alert("Created new template: " + templateName);
      } else {
        alert("Error creating template");
      }
      setIsRerender(true);
    }
  }
  function handleSaveTemplateBtn(e) {
    let value = e.target.value;
    if (value === "none") {
      setSaveDisabled(true);
      setDeleteDisabled(true);
      setCreateDisabled(true);
      setCurrentEditTemplateName("none");
    } else if (!isReadOnlyTemplate(value)) {
      setCurrentEditTemplateName(value);
      setDeleteDisabled(false);
    }
  }
  async function handleUploadSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    let fileInput = document.getElementById("file-input");
    formData.append("file", fileInput.files[0]);
    console.log(fileInput.files[0]);
    let response;
    {
      response = await fetch(endpoint2 + "/sbuiauth/receiveFile.php", {
        method: "post",
        body: formData
      }).catch(console.error);
    }
    let json = await response.text();
    let [responseText, extension] = JSON.parse(json);
    if (responseText === "success") {
      alert("File uploaded successfully");
      document.getElementsByClassName(
        "logo"
      )[0].src = `${endpoint2}/sbuiauth/logo/logo${extension}`;
    } else if (responseText === "failure") {
      alert("Invalid file format. Please use .svg, .png or .jpg files.");
    }
  }
  function logout2() {
    showLoginElems();
    localStorage.removeItem("cloudLogin");
    localStorage.removeItem("cloudPass");
    localStorage.removeItem("user_id");
    localStorage.removeItem("sessionServerIP");
  }
  function hideLoginElems() {
    let elems = document.getElementsByClassName("login-input");
    for (let elem of elems) {
      elem.style.display = "none";
    }
    document.querySelector(".cloud-server-div").style.display = "none";
    document.getElementById("logout-btn").style.display = "initial";
  }
  function showLoginElems() {
    let elems = document.getElementsByClassName("login-input");
    for (let elem of elems) {
      elem.style.display = "initial";
    }
    document.getElementById("logout-btn").style.display = "none";
    document.querySelector(".cloud-server-div").style.display = "initial";
    document.querySelector("#login-status").textContent = `Logged Out- ${localStorage.getItem("cloudServer")}`;
    document.querySelector("#login-status").style.color = "red";
  }
  async function toggleDefaultTemplate() {
    let defaultTemplate = localStorage.getItem("defaultTemplate");
    let isChecked = document.querySelector(".default-template-cbox").checked;
    if (defaultTemplate === null || defaultTemplate === "") {
      defaultTemplate = "Dark Prod Template (Read-only)";
      localStorage.setItem("defaultTemplate", defaultTemplate);
    }
    if (isChecked) {
      localStorage.setItem("useDefaultTemplate", "true");
      handleCheckedDefaultBox(defaultTemplate, "true");
    } else {
      localStorage.setItem("useDefaultTemplate", "false");
      let templateName = localStorage.getItem("templateName");
      handleUncheckedDefaultBox(templateName, "false");
    }
    await props.handleChangeTemplate();
  }
  let serverList = [];
  {
    serverList = [
      "LiveUSEast",
      "LivePOST",
      "LiveJP",
      "LiveAU",
      "LiveIN",
      "LiveEU",
      "Custom"
    ];
  }
  let serverOptions = serverList.map((server, index) => /* @__PURE__ */ React$1.createElement("option", {
    key: `server-option-${index}`,
    value: server
  }, server));
  return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(ReactTooltip, null), /* @__PURE__ */ React$1.createElement("div", {
    id: "create-container",
    className: "settings-outer-container"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-inner-container"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-container"
  }, /* @__PURE__ */ React$1.createElement("form", {
    onSubmit: attemptLoginSubmit,
    className: "settings-form template-form-padding"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "cloud-server-div"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-label"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: "template-label"
  }, /* @__PURE__ */ React$1.createElement("h4", null, "Cloud Server"), /* @__PURE__ */ React$1.createElement("img", {
    className: "tooltip",
    src: "../../images/information.png",
    "data-tip": "\n                            Select which cloud server to pull data from\n                        "
  }))), /* @__PURE__ */ React$1.createElement("select", {
    className: "server-select",
    onChange: (e) => processCustom(e.target.value)
  }, serverOptions)), needCustom && /* @__PURE__ */ React$1.createElement("input", {
    type: "text",
    className: "custom-server",
    value: strCustomServer,
    onChange: (e) => setStrCustomServer(e.target.value)
  }), /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-label"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: "template-label"
  }, /* @__PURE__ */ React$1.createElement("h4", null, "Streambox Cloud Login"), /* @__PURE__ */ React$1.createElement("img", {
    className: "tooltip",
    src: "../../images/information.png",
    "data-tip": "\n                            Login to Streambox Cloud to access session dashboard features\n                        "
  }))), /* @__PURE__ */ React$1.createElement("input", {
    className: "login-input",
    type: "text",
    onChange: (e) => setStrLogin(e.target.value),
    placeholder: " Username"
  }), /* @__PURE__ */ React$1.createElement("input", {
    className: "login-input",
    type: "password",
    onChange: (e) => setStrPassword(e.target.value),
    placeholder: " Password"
  }), /* @__PURE__ */ React$1.createElement("input", {
    id: "login-submit-btn",
    className: "login-input",
    type: "submit",
    value: "Login"
  }), /* @__PURE__ */ React$1.createElement("div", {
    className: "login-status-container template-form-padding"
  }, /* @__PURE__ */ React$1.createElement("label", null, "Login Status:"), "\xA0", /* @__PURE__ */ React$1.createElement("span", {
    id: "login-status",
    style: { color: "red" }
  }, "Logged Out -", " ", localStorage.getItem("cloudServer"))), /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-label"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: "template-label"
  }, /* @__PURE__ */ React$1.createElement("h4", null, "Host Name"), /* @__PURE__ */ React$1.createElement("img", {
    className: "tooltip",
    src: "../../images/information.png",
    "data-tip": "\n                            The host name that will be presented in the email invites\n                        "
  }))), /* @__PURE__ */ React$1.createElement("input", {
    type: "text",
    className: "hostname-input",
    onChange: debounce(() => {
      localStorage.setItem(
        "hostName",
        document.querySelector(
          ".hostname-input"
        ).value
      );
    })
  })), /* @__PURE__ */ React$1.createElement("button", {
    id: "logout-btn",
    style: { display: "none" },
    onClick: logout2
  }, "Logout"), /* @__PURE__ */ React$1.createElement("hr", {
    className: "custom-hr"
  }), /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-label"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: "template-label"
  }, /* @__PURE__ */ React$1.createElement("h4", null, "Use Default Template"), /* @__PURE__ */ React$1.createElement("img", {
    className: "tooltip",
    src: "../../images/information.png",
    "data-tip": "\n                            Use the default template (Saved per Chroma)\n                        "
  }), /* @__PURE__ */ React$1.createElement("input", {
    className: "default-template-cbox",
    onClick: toggleDefaultTemplate,
    type: "checkbox"
  }))), /* @__PURE__ */ React$1.createElement("div", {
    className: "change-default-template-wrapper"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-label"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: "template-label"
  }, /* @__PURE__ */ React$1.createElement("h4", null, "Change Default Template"), /* @__PURE__ */ React$1.createElement("img", {
    className: "tooltip",
    src: "../../images/information.png",
    "data-tip": "\n                            Choose and apply a default template (Saved per Chroma)\n                        "
  }))), /* @__PURE__ */ React$1.createElement("form", {
    className: "settings-form template-form-padding",
    onSubmit: changeDefaultTemplateWrapper
  }, /* @__PURE__ */ React$1.createElement("select", {
    className: "settings-select"
  }, templateOptions), /* @__PURE__ */ React$1.createElement("input", {
    className: "change-default-template-submit",
    type: "submit",
    value: "Change Default Template"
  }))), /* @__PURE__ */ React$1.createElement("div", {
    className: "change-custom-template-wrapper"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-label"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: "template-label"
  }, /* @__PURE__ */ React$1.createElement("h4", null, "Apply Template"), /* @__PURE__ */ React$1.createElement("img", {
    className: "tooltip",
    src: "../../images/information.png",
    "data-tip": "\n                            Choose and apply a template\n                        "
  }))), /* @__PURE__ */ React$1.createElement("form", {
    className: "settings-form template-form-padding",
    onSubmit: applyTemplate
  }, /* @__PURE__ */ React$1.createElement("select", {
    className: "settings-select"
  }, templateOptions), /* @__PURE__ */ React$1.createElement("input", {
    type: "submit",
    value: "Apply Template"
  }))), /* @__PURE__ */ React$1.createElement("div", {
    className: "current-template-readout template-form-padding"
  }, /* @__PURE__ */ React$1.createElement("label", null, "Current Template:"), "\xA0", /* @__PURE__ */ React$1.createElement("span", {
    style: { color: "forestgreen" }
  }, currentTemplateName, useDefaultTemplateState === "true" && " (Default)")), /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-label"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: "template-label"
  }, /* @__PURE__ */ React$1.createElement("h4", null, "Upload Logo"), /* @__PURE__ */ React$1.createElement("img", {
    className: "tooltip",
    src: "../../images/information.png",
    "data-tip": "\n                            Upload a logo (.svg, .png, .jpg)\n                        "
  }))), /* @__PURE__ */ React$1.createElement("form", {
    id: "form"
  }, /* @__PURE__ */ React$1.createElement("input", {
    type: "file",
    id: "file-input"
  }), /* @__PURE__ */ React$1.createElement("input", {
    onClick: (e) => handleUploadSubmit(e),
    type: "submit",
    id: "submit-btn"
  })), /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-label"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: "template-label"
  }, /* @__PURE__ */ React$1.createElement("h4", null, "Edit Templates"), /* @__PURE__ */ React$1.createElement("img", {
    className: "tooltip",
    src: "../../images/information.png",
    "data-tip": "\n                            Edit JSON templates for the app to render\n                        "
  }))), /* @__PURE__ */ React$1.createElement("button", {
    id: "edit-btn",
    onClick: openEditPage
  }, "Edit Template\xA0\xA0\u2192")))), /* @__PURE__ */ React$1.createElement("div", {
    id: "edit-container",
    className: "settings-outer-container",
    style: { display: "none" }
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-inner-container"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-container"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "settings-label"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: "template-label"
  }, /* @__PURE__ */ React$1.createElement("h4", null, "Edit Template"), /* @__PURE__ */ React$1.createElement("img", {
    className: "tooltip",
    src: "../../images/information.png",
    "data-tip": "\n                            Edit, overwrite, delete or create a template. When a file is chosen from the dropdown, the file will populate in the text area below.  \n                            To create a template, click on 'Create Template'.  The template will be created using the JSON code in the text area.\n                        "
  }))), /* @__PURE__ */ React$1.createElement("form", {
    className: "settings-form",
    onSubmit: editTemplate
  }, /* @__PURE__ */ React$1.createElement("select", {
    onChange: handleSaveTemplateBtn,
    className: "settings-select"
  }, templateOptions), /* @__PURE__ */ React$1.createElement("input", {
    type: "submit",
    value: "Edit Template"
  })), /* @__PURE__ */ React$1.createElement("button", {
    className: "save-template-btn",
    onClick: saveTemplate,
    disabled: saveDisabled
  }, "Save Template"), /* @__PURE__ */ React$1.createElement("button", {
    className: "save-template-btn",
    onClick: deleteTemplate,
    disabled: deleteDisabled
  }, "Delete Template"), /* @__PURE__ */ React$1.createElement("button", {
    className: "save-template-btn template-form-padding",
    onClick: createTemplate,
    disabled: createDisabled
  }, "Create Template"), /* @__PURE__ */ React$1.createElement("button", {
    id: "edit-btn",
    onClick: openApplyPage
  }, "\u2190\xA0\xA0Go Back"), /* @__PURE__ */ React$1.createElement("img", {
    id: "down-arrow",
    src: "../../images/down-arrow.png",
    onClick: () => {
      scrollBy(0, 800);
    }
  }))), /* @__PURE__ */ React$1.createElement("div", {
    id: "template-area",
    style: { display: "none" }
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "template-area-div"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "template-area-label-div"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: "template-area-status-label"
  }, /* @__PURE__ */ React$1.createElement("h3", {
    className: "template-area-status"
  }))), /* @__PURE__ */ React$1.createElement(_default, {
    value: codeValue,
    onValueChange: (code) => setCodeValue(code),
    highlight: (code) => hightlightWithLineNumbers(code, prismCore.exports.languages.js),
    padding: 10,
    textareaId: "codeArea",
    className: "editor",
    style: {
      fontFamily: '"Fira code", "Fira Mono", monospace',
      fontSize: 18,
      outline: 0,
      backgroundColor: "white",
      color: "black"
    }
  })))));
}
const endpoint = getRestEndpoint();
function RootWrapper() {
  const [currentTemplate, setCurrentTemplate] = react.exports.useState([]);
  const [templateName, setTemplateName] = react.exports.useState(
    localStorage.getItem("useDefaultTemplate") === "true" ? localStorage.getItem("defaultTemplate") : localStorage.getItem("templateName")
  );
  const [navBtns, setNavBtns] = react.exports.useState([]);
  const [isSettings, setIsSettings] = react.exports.useState(false);
  const [isLoading, setIsLoading] = react.exports.useState(true);
  const [currentPageName, setCurrentPageName] = react.exports.useState("");
  if (localStorage.getItem("defaultTemplate") === void 0) {
    localStorage.setItem(
      "defaultTemplate",
      "Dark Prod Template (Read-only)"
    );
  }
  async function handleChangeTemplate() {
    await getTemplate();
  }
  function changeRoute(routeName) {
    setCurrentPageName(routeName);
  }
  function openSettings() {
    setIsSettings(true);
    setCurrentPageName("Settings");
  }
  async function replaceJSVarsInTemplate(template) {
    let response;
    let jsVariables;
    {
      response = await __vitePreload(() => import(`${location.origin}/${location.pathname}/JSIncludes.js`), true ? [] : void 0);
      jsVariables = response.jsVariables;
    }
    let jsVarsObjEntries = Object.entries(jsVariables);
    let JSONString = JSON.stringify(template);
    for (let [key, val] of jsVarsObjEntries) {
      let formattedKey = `@${key}@`;
      JSONString = JSONString.replaceAll(formattedKey, val);
    }
    return JSON.parse(JSONString);
  }
  async function getTemplate() {
    let useDefaultTemplate = localStorage.getItem("useDefaultTemplate");
    let template = useDefaultTemplate === "true" ? localStorage.getItem("defaultTemplate") : localStorage.getItem("templateName");
    if (template) {
      {
        try {
          let response = await fetch(
            `${endpoint}/REST/templates/${template}`
          );
          let json = await response.json();
          let formattedTemplate = await replaceJSVarsInTemplate(json);
          setCurrentTemplate(JSON.stringify(formattedTemplate));
          setNavBtns(formattedTemplate.template.navbar.routes);
          if (isSettings) {
            setCurrentPageName("Settings");
          } else {
            setCurrentPageName(
              formattedTemplate.template.navbar.routes[0].routeName
            );
          }
        } catch (err) {
          alert(
            "There was a problem with the JSON file. Please choose another."
          );
          setCurrentTemplate([]);
          setNavBtns([]);
          openSettings();
          setIsLoading(false);
        }
        setIsLoading(false);
      }
    } else {
      let fallbackTemplateName = "Dark Prod Template (Read-only)";
      useDefaultTemplate === "true" ? localStorage.setItem("defaultTemplate", fallbackTemplateName) : localStorage.setItem("templateName", fallbackTemplateName);
      setTemplateName(fallbackTemplateName);
    }
    if (localStorage.getItem("cloudServer") === "" || localStorage.getItem("cloudServer") === void 0 || localStorage.getItem("cloudServer") === null) {
      localStorage.setItem("cloudServer", "LivePOST");
    }
  }
  react.exports.useEffect(() => {
    getTemplate();
  }, [templateName]);
  react.exports.useEffect(() => {
    const navBtnDOMObj = document.getElementsByClassName("nav-btn");
    for (let i2 = 0; i2 < navBtnDOMObj.length; i2++) {
      if (navBtnDOMObj[i2].innerText === currentPageName) {
        navBtnDOMObj[i2].classList.add("selected-route");
        if (isSettings) {
          setIsSettings(false);
          document.querySelector(".settings-btn").classList.remove("selected-route");
        }
      }
    }
  }, [currentPageName]);
  return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, isLoading ? /* @__PURE__ */ React$1.createElement("div", {
    className: "roller-container"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "lds-roller"
  }, /* @__PURE__ */ React$1.createElement("div", null), /* @__PURE__ */ React$1.createElement("div", null), /* @__PURE__ */ React$1.createElement("div", null), /* @__PURE__ */ React$1.createElement("div", null), /* @__PURE__ */ React$1.createElement("div", null), /* @__PURE__ */ React$1.createElement("div", null), /* @__PURE__ */ React$1.createElement("div", null), /* @__PURE__ */ React$1.createElement("div", null))) : /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(Navbar, {
    changeRoute,
    openSettings,
    currentPageName,
    navBtns
  }), isSettings ? /* @__PURE__ */ React$1.createElement(Settings, {
    endpoint,
    handleChangeTemplate
  }) : /* @__PURE__ */ React$1.createElement(App, {
    openSettings,
    currentPageName,
    currentTemplate: JSON.parse(currentTemplate)
  })));
}
var style = "";
ReactDOM.render(/* @__PURE__ */ React$1.createElement(RootWrapper, null), document.getElementById("root"));
