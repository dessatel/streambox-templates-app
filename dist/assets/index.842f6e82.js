function _mergeNamespaces(n2, m2) {
  m2.forEach(function(e2) {
    e2 && typeof e2 !== "string" && !Array.isArray(e2) && Object.keys(e2).forEach(function(k2) {
      if (k2 !== "default" && !(k2 in n2)) {
        var d2 = Object.getOwnPropertyDescriptor(e2, k2);
        Object.defineProperty(n2, k2, d2.get ? d2 : {
          enumerable: true,
          get: function() {
            return e2[k2];
          }
        });
      }
    });
  });
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
const p$2 = function polyfill2() {
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
      for (const node2 of mutation.addedNodes) {
        if (node2.tagName === "LINK" && node2.rel === "modulepreload")
          processPreload(node2);
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
p$2();
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
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
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
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
  var from2;
  var to = toObject$1(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from2 = Object(arguments[s]);
    for (var key in from2) {
      if (hasOwnProperty$2.call(from2, key)) {
        to[key] = from2[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from2);
      for (var i2 = 0; i2 < symbols.length; i2++) {
        if (propIsEnumerable.call(from2, symbols[i2])) {
          to[symbols[i2]] = from2[symbols[i2]];
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
var l$1 = objectAssign, n$1 = 60103, p$1 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q$1 = 60109, r$2 = 60110, t$1 = 60112;
react_production_min.Suspense = 60113;
var u = 60115, v$1 = 60116;
if ("function" === typeof Symbol && Symbol.for) {
  var w$2 = Symbol.for;
  n$1 = w$2("react.element");
  p$1 = w$2("react.portal");
  react_production_min.Fragment = w$2("react.fragment");
  react_production_min.StrictMode = w$2("react.strict_mode");
  react_production_min.Profiler = w$2("react.profiler");
  q$1 = w$2("react.provider");
  r$2 = w$2("react.context");
  t$1 = w$2("react.forward_ref");
  react_production_min.Suspense = w$2("react.suspense");
  u = w$2("react.memo");
  v$1 = w$2("react.lazy");
}
var x$1 = "function" === typeof Symbol && Symbol.iterator;
function y$2(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = x$1 && a[x$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
function z$1(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B$1 = {};
function C(a, b2, c2) {
  this.props = a;
  this.context = b2;
  this.refs = B$1;
  this.updater = c2 || A$1;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function(a, b2) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error(z$1(85));
  this.updater.enqueueSetState(this, a, b2, "setState");
};
C.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D$1() {
}
D$1.prototype = C.prototype;
function E$1(a, b2, c2) {
  this.props = a;
  this.context = b2;
  this.refs = B$1;
  this.updater = c2 || A$1;
}
var F$1 = E$1.prototype = new D$1();
F$1.constructor = E$1;
l$1(F$1, C.prototype);
F$1.isPureReactComponent = true;
var G$1 = { current: null }, H$1 = Object.prototype.hasOwnProperty, I$1 = { key: true, ref: true, __self: true, __source: true };
function J(a, b2, c2) {
  var e2, d2 = {}, k2 = null, h2 = null;
  if (null != b2)
    for (e2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      H$1.call(b2, e2) && !I$1.hasOwnProperty(e2) && (d2[e2] = b2[e2]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    d2.children = c2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    d2.children = f2;
  }
  if (a && a.defaultProps)
    for (e2 in g2 = a.defaultProps, g2)
      void 0 === d2[e2] && (d2[e2] = g2[e2]);
  return { $$typeof: n$1, type: a, key: k2, ref: h2, props: d2, _owner: G$1.current };
}
function K(a, b2) {
  return { $$typeof: n$1, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return "object" === typeof a && null !== a && a.$$typeof === n$1;
}
function escape(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var M$1 = /\/+/g;
function N$1(a, b2) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
}
function O$1(a, b2, c2, e2, d2) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h2 = false;
  if (null === a)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n$1:
          case p$1:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, d2 = d2(h2), a = "" === e2 ? "." + N$1(h2, 0) : e2, Array.isArray(d2) ? (c2 = "", null != a && (c2 = a.replace(M$1, "$&/") + "/"), O$1(d2, b2, c2, "", function(a2) {
      return a2;
    })) : null != d2 && (L(d2) && (d2 = K(d2, c2 + (!d2.key || h2 && h2.key === d2.key ? "" : ("" + d2.key).replace(M$1, "$&/") + "/") + a)), b2.push(d2)), 1;
  h2 = 0;
  e2 = "" === e2 ? "." : e2 + ":";
  if (Array.isArray(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k2 = a[g2];
      var f2 = e2 + N$1(k2, g2);
      h2 += O$1(k2, b2, c2, f2, d2);
    }
  else if (f2 = y$2(a), "function" === typeof f2)
    for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = e2 + N$1(k2, g2++), h2 += O$1(k2, b2, c2, f2, d2);
  else if ("object" === k2)
    throw b2 = "" + a, Error(z$1(31, "[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2));
  return h2;
}
function P$1(a, b2, c2) {
  if (null == a)
    return a;
  var e2 = [], d2 = 0;
  O$1(a, e2, "", "", function(a2) {
    return b2.call(c2, a2, d2++);
  });
  return e2;
}
function Q(a) {
  if (-1 === a._status) {
    var b2 = a._result;
    b2 = b2();
    a._status = 0;
    a._result = b2;
    b2.then(function(b3) {
      0 === a._status && (b3 = b3.default, a._status = 1, a._result = b3);
    }, function(b3) {
      0 === a._status && (a._status = 2, a._result = b3);
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
    throw Error(z$1(321));
  return a;
}
var T$1 = { ReactCurrentDispatcher: R$1, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G$1, IsSomeRendererActing: { current: false }, assign: l$1 };
react_production_min.Children = { map: P$1, forEach: function(a, b2, c2) {
  P$1(a, function() {
    b2.apply(this, arguments);
  }, c2);
}, count: function(a) {
  var b2 = 0;
  P$1(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return P$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z$1(143));
  return a;
} };
react_production_min.Component = C;
react_production_min.PureComponent = E$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
react_production_min.cloneElement = function(a, b2, c2) {
  if (null === a || void 0 === a)
    throw Error(z$1(267, a));
  var e2 = l$1({}, a.props), d2 = a.key, k2 = a.ref, h2 = a._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = G$1.current);
    void 0 !== b2.key && (d2 = "" + b2.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b2)
      H$1.call(b2, f2) && !I$1.hasOwnProperty(f2) && (e2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    e2.children = c2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    e2.children = g2;
  }
  return {
    $$typeof: n$1,
    type: a.type,
    key: d2,
    ref: k2,
    props: e2,
    _owner: h2
  };
};
react_production_min.createContext = function(a, b2) {
  void 0 === b2 && (b2 = null);
  a = { $$typeof: r$2, _calculateChangedBits: b2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b2 = J.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t$1, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v$1, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: u, type: a, compare: void 0 === b2 ? null : b2 };
};
react_production_min.useCallback = function(a, b2) {
  return S$1().useCallback(a, b2);
};
react_production_min.useContext = function(a, b2) {
  return S$1().useContext(a, b2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b2) {
  return S$1().useEffect(a, b2);
};
react_production_min.useImperativeHandle = function(a, b2, c2) {
  return S$1().useImperativeHandle(a, b2, c2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return S$1().useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return S$1().useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, c2) {
  return S$1().useReducer(a, b2, c2);
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
var React$2 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": React$1
}, [react.exports]);
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
  var f2, g2, h2, k2;
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
        } catch (b2) {
          throw setTimeout(w2, 0), b2;
        }
    };
    f2 = function(a) {
      null !== t2 ? setTimeout(f2, 0, a) : (t2 = a, setTimeout(w2, 0));
    };
    g2 = function(a, b2) {
      u2 = setTimeout(a, b2);
    };
    h2 = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k2 = exports.unstable_forceFrameRate = function() {
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
    k2 = function() {
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
        } catch (b2) {
          throw G2.postMessage(null), b2;
        }
      } else
        A2 = false;
    };
    f2 = function(a) {
      B2 = a;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g2 = function(a, b2) {
      C2 = x2(function() {
        a(exports.unstable_now());
      }, b2);
    };
    h2 = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a, b2) {
    var c2 = a.length;
    a.push(b2);
    a:
      for (; ; ) {
        var d2 = c2 - 1 >>> 1, e2 = a[d2];
        if (void 0 !== e2 && 0 < I2(e2, b2))
          a[d2] = b2, a[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function J2(a) {
    a = a[0];
    return void 0 === a ? null : a;
  }
  function K2(a) {
    var b2 = a[0];
    if (void 0 !== b2) {
      var c2 = a.pop();
      if (c2 !== b2) {
        a[0] = c2;
        a:
          for (var d2 = 0, e2 = a.length; d2 < e2; ) {
            var m2 = 2 * (d2 + 1) - 1, n2 = a[m2], v2 = m2 + 1, r2 = a[v2];
            if (void 0 !== n2 && 0 > I2(n2, c2))
              void 0 !== r2 && 0 > I2(r2, n2) ? (a[d2] = r2, a[v2] = c2, d2 = v2) : (a[d2] = n2, a[m2] = c2, d2 = m2);
            else if (void 0 !== r2 && 0 > I2(r2, c2))
              a[d2] = r2, a[v2] = c2, d2 = v2;
            else
              break a;
          }
      }
      return b2;
    }
    return null;
  }
  function I2(a, b2) {
    var c2 = a.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a.id - b2.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q2 = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b2 = J2(M2); null !== b2; ) {
      if (null === b2.callback)
        K2(M2);
      else if (b2.startTime <= a)
        K2(M2), b2.sortIndex = b2.expirationTime, H2(L2, b2);
      else
        break;
      b2 = J2(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (null !== J2(L2))
        R2 = true, f2(V2);
      else {
        var b2 = J2(M2);
        null !== b2 && g2(U2, b2.startTime - a);
      }
  }
  function V2(a, b2) {
    R2 = false;
    S2 && (S2 = false, h2());
    Q2 = true;
    var c2 = P2;
    try {
      T2(b2);
      for (O2 = J2(L2); null !== O2 && (!(O2.expirationTime > b2) || a && !exports.unstable_shouldYield()); ) {
        var d2 = O2.callback;
        if ("function" === typeof d2) {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e2 = d2(O2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? O2.callback = e2 : O2 === J2(L2) && K2(L2);
          T2(b2);
        } else
          K2(L2);
        O2 = J2(L2);
      }
      if (null !== O2)
        var m2 = true;
      else {
        var n2 = J2(M2);
        null !== n2 && g2(U2, n2.startTime - b2);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c2, Q2 = false;
    }
  }
  var W2 = k2;
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
        var b2 = 3;
        break;
      default:
        b2 = P2;
    }
    var c2 = P2;
    P2 = b2;
    try {
      return a();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b2) {
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
    var c2 = P2;
    P2 = a;
    try {
      return b2();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a = { id: N2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a.sortIndex = c2, H2(M2, a), null === J2(L2) && a === J2(M2) && (S2 ? h2() : S2 = true, g2(U2, c2 - d2))) : (a.sortIndex = e2, H2(L2, a), R2 || Q2 || (R2 = true, f2(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b2 = P2;
    return function() {
      var c2 = P2;
      P2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c2;
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
var aa = react.exports, m$1 = objectAssign, r$1 = scheduler.exports;
function y$1(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y$1(227));
var ba = /* @__PURE__ */ new Set(), ca = {};
function da(a, b2) {
  ea(a, b2);
  ea(a + "Capture", b2);
}
function ea(a, b2) {
  ca[a] = b2;
  for (a = 0; a < b2.length; a++)
    ba.add(b2[a]);
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
function ma(a, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (null !== c2)
        return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function na(a, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || ma(a, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (null !== c2)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function B(a, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  D[b2] = new B(b2, 1, false, a[1], null, false, false);
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
  var b2 = a.replace(
    oa,
    pa
  );
  D[b2] = new B(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b2, c2, d2) {
  var e2 = D.hasOwnProperty(b2) ? D[b2] : null;
  var f2 = null !== e2 ? 0 === e2.type : d2 ? false : !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1] ? false : true;
  f2 || (na(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? la(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2))));
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
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ma = b2 && b2[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b2) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (k2) {
          var d2 = k2;
        }
        Reflect.construct(a, [], b2);
      } else {
        try {
          b2.call();
        } catch (k2) {
          d2 = k2;
        }
        a.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k2) {
        d2 = k2;
      }
      a();
    }
  } catch (k2) {
    if (k2 && d2 && "string" === typeof k2.stack) {
      for (var e2 = k2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2])
                return "\n" + e2[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c2;
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
        var b2 = a.render;
        b2 = b2.displayName || b2.name || "";
        return a.displayName || ("" !== b2 ? "ForwardRef(" + b2 + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b2 = a._payload;
        a = a._init;
        try {
          return Ra(a(b2));
        } catch (c2) {
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
  var b2 = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a) {
  var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
  if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d2 = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a2) {
      d2 = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b2 = a._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d2;
  return a !== c2 ? (b2.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya(a, b2) {
  var c2 = b2.checked;
  return m$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
}
function Za(a, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function $a(a, b2) {
  b2 = b2.checked;
  null != b2 && qa(a, "checked", b2, false);
}
function ab(a, b2) {
  $a(a, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2)
    if ("number" === d2) {
      if (0 === c2 && "" === a.value || a.value != c2)
        a.value = "" + c2;
    } else
      a.value !== "" + c2 && (a.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
}
function cb(a, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a._wrapperState.initialValue;
    c2 || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c2 = a.name;
  "" !== c2 && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c2 && (a.name = c2);
}
function bb(a, b2, c2) {
  if ("number" !== b2 || Xa(a.ownerDocument) !== a)
    null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
}
function db(a) {
  var b2 = "";
  aa.Children.forEach(a, function(a2) {
    null != a2 && (b2 += a2);
  });
  return b2;
}
function eb(a, b2) {
  a = m$1({ children: void 0 }, b2);
  if (b2 = db(b2.children))
    a.children = b2;
  return a;
}
function fb(a, b2, c2, d2) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a.length; c2++)
      e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c2) {
        a[e2].selected = true;
        d2 && (a[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a[e2].disabled || (b2 = a[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(y$1(91));
  return m$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2)
        throw Error(y$1(92));
      if (Array.isArray(c2)) {
        if (!(1 >= c2.length))
          throw Error(y$1(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a._wrapperState = { initialValue: Sa(c2) };
}
function ib(a, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
  null != d2 && (a.defaultValue = "" + d2);
}
function jb(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
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
function mb(a, b2) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? lb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
}
var nb, ob = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c2, d2, e2);
    });
  } : a;
}(function(a, b2) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b2;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b2.firstChild; )
      a.appendChild(b2.firstChild);
  }
});
function pb(a, b2) {
  if (b2) {
    var c2 = a.firstChild;
    if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
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
  rb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b2] = qb[a];
  });
});
function sb(a, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || qb.hasOwnProperty(a) && qb[a] ? ("" + b2).trim() : b2 + "px";
}
function tb(a, b2) {
  a = a.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = sb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a.setProperty(c2, e2) : a[c2] = e2;
    }
}
var ub = m$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a, b2) {
  if (b2) {
    if (ub[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(y$1(137, a));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(y$1(60));
      if (!("object" === typeof b2.dangerouslySetInnerHTML && "__html" in b2.dangerouslySetInnerHTML))
        throw Error(y$1(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(y$1(62));
  }
}
function wb(a, b2) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b2.is;
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
      throw Error(y$1(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b2)
      for (a = 0; a < b2.length; a++)
        Bb(b2[a]);
  }
}
function Gb(a, b2) {
  return a(b2);
}
function Hb(a, b2, c2, d2, e2) {
  return a(b2, c2, d2, e2);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (null !== zb || null !== Ab)
    Ib(), Fb();
}
function Nb(a, b2, c2) {
  if (Lb)
    return a(b2, c2);
  Lb = true;
  try {
    return Jb(a, b2, c2);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b2) {
  var c2 = a.stateNode;
  if (null === c2)
    return null;
  var d2 = Db(c2);
  if (null === d2)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
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
        (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d2;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c2 && "function" !== typeof c2)
    throw Error(y$1(231, b2, typeof c2));
  return c2;
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
function Rb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a) {
  Sb = true;
  Tb = a;
} };
function Xb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y$1(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a) {
  var b2 = a, c2 = a;
  if (a.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, 0 !== (b2.flags & 1026) && (c2 = b2.return), a = b2.return;
    while (a);
  }
  return 3 === b2.tag ? c2 : null;
}
function $b(a) {
  if (13 === a.tag) {
    var b2 = a.memoizedState;
    null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y$1(188));
}
function bc(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Zb(a);
    if (null === b2)
      throw Error(y$1(188));
    return b2 !== a ? null : a;
  }
  for (var c2 = a, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return ac(e2), a;
        if (f2 === d2)
          return ac(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(y$1(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(y$1(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(y$1(190));
  }
  if (3 !== c2.tag)
    throw Error(y$1(188));
  return c2.stateNode.current === c2 ? a : b2;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b2 = a; ; ) {
    if (5 === b2.tag || 6 === b2.tag)
      return b2;
    if (b2.child)
      b2.child.return = b2, b2 = b2.child;
    else {
      if (b2 === a)
        break;
      for (; !b2.sibling; ) {
        if (!b2.return || b2.return === a)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return null;
}
function dc(a, b2) {
  for (var c2 = a.alternate; null !== b2; ) {
    if (b2 === a || b2 === c2)
      return true;
    b2 = b2.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = /* @__PURE__ */ new Map(), oc = /* @__PURE__ */ new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b2, c2, d2, e2) {
  return { blockedOn: a, domEventName: b2, eventSystemFlags: c2 | 16, nativeEvent: e2, targetContainers: [d2] };
}
function sc(a, b2) {
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
      nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b2.pointerId);
  }
}
function tc(a, b2, c2, d2, e2, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = rc(b2, c2, d2, e2, f2), null !== b2 && (b2 = Cb(b2), null !== b2 && fc(b2)), a;
  a.eventSystemFlags |= d2;
  b2 = a.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a;
}
function uc(a, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return kc = tc(kc, a, b2, c2, d2, e2), true;
    case "dragenter":
      return lc = tc(lc, a, b2, c2, d2, e2), true;
    case "mouseover":
      return mc = tc(mc, a, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, oc.set(f2, tc(oc.get(f2) || null, a, b2, c2, d2, e2)), true;
  }
  return false;
}
function vc(a) {
  var b2 = wc(a.target);
  if (null !== b2) {
    var c2 = Zb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = $b(c2), null !== b2) {
          a.blockedOn = b2;
          hc(a.lanePriority, function() {
            r$1.unstable_runWithPriority(a.priority, function() {
              gc(c2);
            });
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.hydrate) {
        a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c2 = yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (null !== c2)
      return b2 = Cb(c2), null !== b2 && fc(b2), a.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function zc(a, b2, c2) {
  xc(a) && c2.delete(b2);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (null !== a.blockedOn) {
      a = Cb(a.blockedOn);
      null !== a && ec(a);
      break;
    }
    for (var b2 = a.targetContainers; 0 < b2.length; ) {
      var c2 = yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
      if (null !== c2) {
        a.blockedOn = c2;
        break;
      }
      b2.shift();
    }
    null === a.blockedOn && jc.shift();
  }
  null !== kc && xc(kc) && (kc = null);
  null !== lc && xc(lc) && (lc = null);
  null !== mc && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, ic || (ic = true, r$1.unstable_scheduleCallback(r$1.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b2(b3) {
    return Bc(b3, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c2 = 1; c2 < jc.length; c2++) {
      var d2 = jc[c2];
      d2.blockedOn === a && (d2.blockedOn = null);
    }
  }
  null !== kc && Bc(kc, a);
  null !== lc && Bc(lc, a);
  null !== mc && Bc(mc, a);
  nc.forEach(b2);
  oc.forEach(b2);
  for (c2 = 0; c2 < pc.length; c2++)
    d2 = pc[c2], d2.blockedOn === a && (d2.blockedOn = null);
  for (; 0 < pc.length && (c2 = pc[0], null === c2.blockedOn); )
    vc(c2), null === c2.blockedOn && pc.shift();
}
function Dc(a, b2) {
  var c2 = {};
  c2[a.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a] = "webkit" + b2;
  c2["Moz" + a] = "moz" + b2;
  return c2;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b2 = Ec[a], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Gc)
      return Fc[a] = b2[c2];
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
function Pc(a, b2) {
  for (var c2 = 0; c2 < a.length; c2 += 2) {
    var d2 = a[c2], e2 = a[c2 + 1];
    e2 = "on" + (e2[0].toUpperCase() + e2.slice(1));
    Nc.set(d2, b2);
    Mc.set(d2, e2);
    da(e2, [d2]);
  }
}
var Qc = r$1.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if (0 !== (1 & a))
    return F = 15, 1;
  if (0 !== (2 & a))
    return F = 14, 2;
  if (0 !== (4 & a))
    return F = 13, 4;
  var b2 = 24 & a;
  if (0 !== b2)
    return F = 12, b2;
  if (0 !== (a & 32))
    return F = 11, 32;
  b2 = 192 & a;
  if (0 !== b2)
    return F = 10, b2;
  if (0 !== (a & 256))
    return F = 9, 256;
  b2 = 3584 & a;
  if (0 !== b2)
    return F = 8, b2;
  if (0 !== (a & 4096))
    return F = 7, 4096;
  b2 = 4186112 & a;
  if (0 !== b2)
    return F = 6, b2;
  b2 = 62914560 & a;
  if (0 !== b2)
    return F = 5, b2;
  if (a & 67108864)
    return F = 4, 67108864;
  if (0 !== (a & 134217728))
    return F = 3, 134217728;
  b2 = 805306368 & a;
  if (0 !== b2)
    return F = 2, b2;
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
      throw Error(y$1(358, a));
  }
}
function Uc(a, b2) {
  var c2 = a.pendingLanes;
  if (0 === c2)
    return F = 0;
  var d2 = 0, e2 = 0, f2 = a.expiredLanes, g2 = a.suspendedLanes, h2 = a.pingedLanes;
  if (0 !== f2)
    d2 = f2, e2 = F = 15;
  else if (f2 = c2 & 134217727, 0 !== f2) {
    var k2 = f2 & ~g2;
    0 !== k2 ? (d2 = Rc(k2), e2 = F) : (h2 &= f2, 0 !== h2 && (d2 = Rc(h2), e2 = F));
  } else
    f2 = c2 & ~g2, 0 !== f2 ? (d2 = Rc(f2), e2 = F) : 0 !== h2 && (d2 = Rc(h2), e2 = F);
  if (0 === d2)
    return 0;
  d2 = 31 - Vc(d2);
  d2 = c2 & ((0 > d2 ? 0 : 1 << d2) << 1) - 1;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & g2)) {
    Rc(b2);
    if (e2 <= F)
      return b2;
    F = e2;
  }
  b2 = a.entangledLanes;
  if (0 !== b2)
    for (a = a.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - Vc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
  return d2;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b2) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b2), 0 === a ? Xc(10, b2) : a;
    case 10:
      return a = Yc(192 & ~b2), 0 === a ? Xc(8, b2) : a;
    case 8:
      return a = Yc(3584 & ~b2), 0 === a && (a = Yc(4186112 & ~b2), 0 === a && (a = 512)), a;
    case 2:
      return b2 = Yc(805306368 & ~b2), 0 === b2 && (b2 = 268435456), b2;
  }
  throw Error(y$1(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a);
  return b2;
}
function $c(a, b2, c2) {
  a.pendingLanes |= b2;
  var d2 = b2 - 1;
  a.suspendedLanes &= d2;
  a.pingedLanes &= d2;
  a = a.eventTimes;
  b2 = 31 - Vc(b2);
  a[b2] = c2;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a) {
  return 0 === a ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = r$1.unstable_UserBlockingPriority, ed = r$1.unstable_runWithPriority, fd = true;
function gd(a, b2, c2, d2) {
  Kb || Ib();
  var e2 = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e2, a, b2, c2, d2);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id$1(a, b2, c2, d2) {
  ed(dd, hd.bind(null, a, b2, c2, d2));
}
function hd(a, b2, c2, d2) {
  if (fd) {
    var e2;
    if ((e2 = 0 === (b2 & 4)) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b2, c2, d2), jc.push(a);
    else {
      var f2 = yc(a, b2, c2, d2);
      if (null === f2)
        e2 && sc(a, d2);
      else {
        if (e2) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f2, a, b2, c2, d2);
            jc.push(a);
            return;
          }
          if (uc(f2, a, b2, c2, d2))
            return;
          sc(a, d2);
        }
        jd(a, b2, d2, null, c2);
      }
    }
  }
}
function yc(a, b2, c2, d2) {
  var e2 = xb(d2);
  e2 = wc(e2);
  if (null !== e2) {
    var f2 = Zb(e2);
    if (null === f2)
      e2 = null;
    else {
      var g2 = f2.tag;
      if (13 === g2) {
        e2 = $b(f2);
        if (null !== e2)
          return e2;
        e2 = null;
      } else if (3 === g2) {
        if (f2.stateNode.hydrate)
          return 3 === f2.tag ? f2.stateNode.containerInfo : null;
        e2 = null;
      } else
        f2 !== e2 && (e2 = null);
    }
  }
  jd(a, b2, d2, e2, c2);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a = 0; a < c2 && b2[a] === e2[a]; a++)
    ;
  var g2 = c2 - a;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
}
function od(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
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
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a)
      a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m$1(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = m$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m$1({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd() {
  return Pd;
}
var Qd = m$1({}, ud, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = m$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m$1({}, Ad, {
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
function ge(a, b2) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
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
function je(a, b2) {
  switch (a) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b2.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b2) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
}
function ne(a, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b2 = ue(a);
  if (Wa(b2))
    return a;
}
function ve(a, b2) {
  if ("change" === a)
    return b2;
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
    var b2 = [];
    ne(b2, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b2);
    else {
      Kb = true;
      try {
        Gb(a, b2);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b2, c2) {
  "focusin" === a ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b2) {
  if ("click" === a)
    return te(b2);
}
function Fe(a, b2) {
  if ("input" === a || "change" === a)
    return te(b2);
}
function Ge(a, b2) {
  return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He = "function" === typeof Object.is ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a, b2) {
  if (He(a, b2))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2)
    return false;
  var c2 = Object.keys(a), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++)
    if (!Ie.call(b2, c2[d2]) || !He(a[c2[d2]], b2[c2[d2]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b2) {
  var c2 = Ke(a);
  a = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a + c2.textContent.length;
      if (a <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a };
      a = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ke(c2);
  }
}
function Me(a, b2) {
  return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Me(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Ne() {
  for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a = b2.contentWindow;
    else
      break;
    b2 = Xa(a.document);
  }
  return b2;
}
function Oe(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Oe(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Je(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
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
function Ze(a, b2, c2) {
  var d2 = a.type || "unknown-event";
  a.currentTarget = c2;
  Yb(d2, b2, void 0, a);
  a.currentTarget = null;
}
function se(a, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a.length; c2++) {
    var d2 = a[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b2) {
  var c2 = $e(b2), d2 = a + "__bubble";
  c2.has(d2) || (af(b2, a, 2, false), c2.add(d2));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b2) {
    Ye.has(b2) || df(b2, false, a, null);
    df(b2, true, a, null);
  }));
}
function df(a, b2, c2, d2) {
  var e2 = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, f2 = c2;
  "selectionchange" === a && 9 !== c2.nodeType && (f2 = c2.ownerDocument);
  if (null !== d2 && !b2 && Ye.has(a)) {
    if ("scroll" !== a)
      return;
    e2 |= 2;
    f2 = d2;
  }
  var g2 = $e(f2), h2 = a + "__" + (b2 ? "capture" : "bubble");
  g2.has(h2) || (b2 && (e2 |= 4), af(f2, a, e2, b2), g2.add(h2));
}
function af(a, b2, c2, d2) {
  var e2 = Nc.get(b2);
  switch (void 0 === e2 ? 2 : e2) {
    case 0:
      e2 = gd;
      break;
    case 1:
      e2 = id$1;
      break;
    default:
      e2 = hd;
  }
  c2 = e2.bind(null, b2, c2, a);
  e2 = void 0;
  !Pb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : void 0 !== e2 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
}
function jd(a, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
    a:
      for (; ; ) {
        if (null === d2)
          return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g2)
            for (g2 = d2.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; null !== h2; ) {
            g2 = wc(h2);
            if (null === g2)
              return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Nb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = Mc.get(a);
      if (void 0 !== h3) {
        var k3 = td, x2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c2))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k3 = Hd;
            break;
          case Lc:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var w2 = 0 !== (b2 & 4), z2 = !w2 && "scroll" === a, u2 = w2 ? null !== h3 ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t2 = d3, q2; null !== t2; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          5 === q2.tag && null !== v2 && (q2 = v2, null !== u2 && (v2 = Ob(t2, u2), null != v2 && w2.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h3 = new k3(h3, x2, null, c2, e3), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h3 && 0 === (b2 & 16) && (x2 = c2.relatedTarget || c2.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (x2 = c2.relatedTarget || c2.toElement, k3 = d3, x2 = x2 ? wc(x2) : null, null !== x2 && (z2 = Zb(x2), x2 !== z2 || 5 !== x2.tag && 6 !== x2.tag))
              x2 = null;
          } else
            k3 = null, x2 = d3;
          if (k3 !== x2) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = null == k3 ? h3 : ue(k3);
            q2 = null == x2 ? h3 : ue(x2);
            h3 = new w2(v2, t2 + "leave", k3, c2, e3);
            h3.target = z2;
            h3.relatedTarget = q2;
            v2 = null;
            wc(e3) === d3 && (w2 = new w2(u2, t2 + "enter", x2, c2, e3), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k3 && x2)
              b: {
                w2 = k3;
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
            null !== k3 && hf(g3, h3, k3, w2, false);
            null !== x2 && null !== z2 && hf(g3, z2, x2, w2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var J2 = ve;
        else if (me(h3))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (J2 = Ee);
        if (J2 && (J2 = J2(a, d3))) {
          ne(g3, J2, c2, e3);
          break a;
        }
        K2 && K2(a, h3, d3);
        "focusout" === a && (K2 = h3._wrapperState) && K2.controlled && "number" === h3.type && bb(h3, "number", h3.value);
      }
      K2 = d3 ? ue(d3) : window;
      switch (a) {
        case "focusin":
          if (me(K2) || "true" === K2.contentEditable)
            Qe = K2, Re = d3, Se = null;
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
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
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
        ie ? ge(a, c2) && (L2 = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (L2 = "onCompositionStart");
      L2 && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== L2 ? "onCompositionEnd" === L2 && ie && (Q2 = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d3, L2), 0 < K2.length && (L2 = new Ld(L2, a, null, c2, e3), g3.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he(c2), null !== Q2 && (L2.data = Q2))));
      if (Q2 = ce ? je(a, c2) : ke(a, c2))
        d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld(
          "onBeforeInput",
          "beforeinput",
          null,
          c2,
          e3
        ), g3.push({ event: e3, listeners: d3 }), e3.data = Q2);
    }
    se(g3, b2);
  });
}
function ef(a, b2, c2) {
  return { instance: a, listener: b2, currentTarget: c2 };
}
function oe(a, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
    var e2 = a, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Ob(a, c2), null != f2 && d2.unshift(ef(a, f2, e2)), f2 = Ob(a, b2), null != f2 && d2.push(ef(a, f2, e2)));
    a = a.return;
  }
  return d2;
}
function gf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function hf(a, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Ob(c2, f2), null != k2 && g2.unshift(ef(c2, k2, h2))) : e2 || (k2 = Ob(c2, f2), null != k2 && g2.push(ef(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a.push({ event: b2, listeners: g2 });
}
function jf() {
}
var kf = null, lf = null;
function mf(a, b2) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b2.autoFocus;
  }
  return false;
}
function nf(a, b2) {
  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var of = "function" === typeof setTimeout ? setTimeout : void 0, pf = "function" === typeof clearTimeout ? clearTimeout : void 0;
function qf(a) {
  1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
}
function rf(a) {
  for (; null != a; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (1 === b2 || 3 === b2)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (8 === a.nodeType) {
      var c2 = a.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2)
          return a;
        b2--;
      } else
        "/$" === c2 && b2++;
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
  var b2 = a[wf];
  if (b2)
    return b2;
  for (var c2 = a.parentNode; c2; ) {
    if (b2 = c2[ff] || c2[wf]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child)
        for (a = sf(a); null !== a; ) {
          if (c2 = a[wf])
            return c2;
          a = sf(a);
        }
      return b2;
    }
    a = c2;
    c2 = a.parentNode;
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
  throw Error(y$1(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b2 = a[yf];
  void 0 === b2 && (b2 = a[yf] = /* @__PURE__ */ new Set());
  return b2;
}
var zf = [], Af = -1;
function Bf(a) {
  return { current: a };
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b2) {
  Af++;
  zf[Af] = a.current;
  a.current = b2;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a, b2) {
  var c2 = a.type.contextTypes;
  if (!c2)
    return Cf;
  var d2 = a.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Ff(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b2, c2) {
  if (M.current !== Cf)
    throw Error(y$1(168));
  I(M, b2);
  I(N, c2);
}
function If(a, b2, c2) {
  var d2 = a.stateNode;
  a = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext)
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in a))
      throw Error(y$1(108, Ra(b2) || "Unknown", e2));
  return m$1({}, c2, d2);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b2, c2) {
  var d2 = a.stateNode;
  if (!d2)
    throw Error(y$1(169));
  c2 ? (a = If(a, b2, Df), d2.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c2);
}
var Lf = null, Mf = null, Nf = r$1.unstable_runWithPriority, Of = r$1.unstable_scheduleCallback, Pf = r$1.unstable_cancelCallback, Qf = r$1.unstable_shouldYield, Rf = r$1.unstable_requestPaint, Sf = r$1.unstable_now, Tf = r$1.unstable_getCurrentPriorityLevel, Uf = r$1.unstable_ImmediatePriority, Vf = r$1.unstable_UserBlockingPriority, Wf = r$1.unstable_NormalPriority, Xf = r$1.unstable_LowPriority, Yf = r$1.unstable_IdlePriority, Zf = {}, $f = void 0 !== Rf ? Rf : function() {
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
      throw Error(y$1(332));
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
      throw Error(y$1(332));
  }
}
function gg(a, b2) {
  a = fg(a);
  return Nf(a, b2);
}
function hg(a, b2, c2) {
  a = fg(a);
  return Of(a, b2, c2);
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
      var b2 = ag;
      gg(99, function() {
        for (; a < b2.length; a++) {
          var c2 = b2[a];
          do
            c2 = c2(true);
          while (null !== c2);
        }
      });
      ag = null;
    } catch (c2) {
      throw null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c2;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b2) {
  if (a && a.defaultProps) {
    b2 = m$1({}, b2);
    a = a.defaultProps;
    for (var c2 in a)
      void 0 === b2[c2] && (b2[c2] = a[c2]);
    return b2;
  }
  return b2;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b2 = mg.current;
  H(mg);
  a.type._context._currentValue = b2;
}
function sg(a, b2) {
  for (; null !== a; ) {
    var c2 = a.alternate;
    if ((a.childLanes & b2) === b2)
      if (null === c2 || (c2.childLanes & b2) === b2)
        break;
      else
        c2.childLanes |= b2;
    else
      a.childLanes |= b2, null !== c2 && (c2.childLanes |= b2);
    a = a.return;
  }
}
function tg(a, b2) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (ug = true), a.firstContext = null);
}
function vg(a, b2) {
  if (pg !== a && false !== b2 && 0 !== b2) {
    if ("number" !== typeof b2 || 1073741823 === b2)
      pg = a, b2 = 1073741823;
    b2 = { context: a, observedBits: b2, next: null };
    if (null === og) {
      if (null === ng)
        throw Error(y$1(308));
      og = b2;
      ng.dependencies = { lanes: 0, firstContext: b2, responders: null };
    } else
      og = og.next = b2;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b2) {
  a = a.updateQueue;
  if (null !== a) {
    a = a.shared;
    var c2 = a.pending;
    null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a.pending = b2;
  }
}
function Bg(a, b2) {
  var c2 = a.updateQueue, d2 = a.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a.updateQueue = c2;
    return;
  }
  a = c2.lastBaseUpdate;
  null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
  c2.lastBaseUpdate = b2;
}
function Cg(a, b2, c2, d2) {
  var e2 = a.updateQueue;
  wg = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var n2 = a.alternate;
    if (null !== n2) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g2 && (null === A2 ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k2);
    }
  }
  if (null !== f2) {
    A2 = e2.baseState;
    g2 = 0;
    n2 = l2 = k2 = null;
    do {
      h2 = f2.lane;
      var p2 = f2.eventTime;
      if ((d2 & h2) === h2) {
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
          h2 = b2;
          p2 = c2;
          switch (x2.tag) {
            case 1:
              C2 = x2.payload;
              if ("function" === typeof C2) {
                A2 = C2.call(p2, A2, h2);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x2.payload;
              h2 = "function" === typeof C2 ? C2.call(p2, A2, h2) : C2;
              if (null === h2 || void 0 === h2)
                break a;
              A2 = m$1({}, A2, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        null !== f2.callback && (a.flags |= 32, h2 = e2.effects, null === h2 ? e2.effects = [f2] : h2.push(f2));
      } else
        p2 = { eventTime: p2, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, null === n2 ? (l2 = n2 = p2, k2 = A2) : n2 = n2.next = p2, g2 |= h2;
      f2 = f2.next;
      if (null === f2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          f2 = h2.next, h2.next = null, e2.lastBaseUpdate = h2, e2.shared.pending = null;
    } while (1);
    null === n2 && (k2 = A2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = n2;
    Dg |= g2;
    a.lanes = g2;
    a.memoizedState = A2;
  }
}
function Eg(a, b2, c2) {
  a = b2.effects;
  b2.effects = null;
  if (null !== a)
    for (b2 = 0; b2 < a.length; b2++) {
      var d2 = a[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2)
          throw Error(y$1(191, e2));
        e2.call(d2);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a, b2, c2, d2) {
  b2 = a.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : m$1({}, b2, c2);
  a.memoizedState = c2;
  0 === a.lanes && (a.updateQueue.baseState = c2);
}
var Kg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = Hg(), e2 = Ig(a), f2 = zg(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  Ag(a, f2);
  Jg(a, e2, d2);
}, enqueueReplaceState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = Hg(), e2 = Ig(a), f2 = zg(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  Ag(a, f2);
  Jg(a, e2, d2);
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c2 = Hg(), d2 = Ig(a), e2 = zg(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  Ag(a, e2);
  Jg(a, d2, c2);
} };
function Lg(a, b2, c2, d2, e2, f2, g2) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Je(c2, d2) || !Je(e2, f2) : true;
}
function Mg(a, b2, c2) {
  var d2 = false, e2 = Cf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = vg(f2) : (e2 = Ff(b2) ? Df : M.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Ef(a, e2) : Cf);
  b2 = new b2(c2, f2);
  a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = Kg;
  a.stateNode = b2;
  b2._reactInternals = a;
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Ng(a, b2, c2, d2) {
  a = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a && Kg.enqueueReplaceState(b2, b2.state, null);
}
function Og(a, b2, c2, d2) {
  var e2 = a.stateNode;
  e2.props = c2;
  e2.state = a.memoizedState;
  e2.refs = Fg;
  xg(a);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = vg(f2) : (f2 = Ff(b2) ? Df : M.current, e2.context = Ef(a, f2));
  Cg(a, c2, e2, d2);
  e2.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (Gg(a, b2, f2, c2), e2.state = a.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Kg.enqueueReplaceState(e2, e2.state, null), Cg(a, c2, e2, d2), e2.state = a.memoizedState);
  "function" === typeof e2.componentDidMount && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b2, c2) {
  a = c2.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag)
          throw Error(y$1(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(y$1(147, a));
      var e2 = "" + a;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === e2)
        return b2.ref;
      b2 = function(a2) {
        var b3 = d2.refs;
        b3 === Fg && (b3 = d2.refs = {});
        null === a2 ? delete b3[e2] : b3[e2] = a2;
      };
      b2._stringRef = e2;
      return b2;
    }
    if ("string" !== typeof a)
      throw Error(y$1(284));
    if (!c2._owner)
      throw Error(y$1(290, a));
  }
  return a;
}
function Rg(a, b2) {
  if ("textarea" !== a.type)
    throw Error(y$1(31, "[object Object]" === Object.prototype.toString.call(b2) ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
}
function Sg(a) {
  function b2(b3, c3) {
    if (a) {
      var d3 = b3.lastEffect;
      null !== d3 ? (d3.nextEffect = c3, b3.lastEffect = c3) : b3.firstEffect = b3.lastEffect = c3;
      c3.nextEffect = null;
      c3.flags = 8;
    }
  }
  function c2(c3, d3) {
    if (!a)
      return null;
    for (; null !== d3; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e2(a2, b3) {
    a2 = Tg(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a)
      return c3;
    d3 = b3.alternate;
    if (null !== d3)
      return d3 = d3.index, d3 < c3 ? (b3.flags = 2, c3) : d3;
    b3.flags = 2;
    return c3;
  }
  function g2(b3) {
    a && null === b3.alternate && (b3.flags = 2);
    return b3;
  }
  function h2(a2, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = Ug(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c3, d3) {
    if (null !== b3 && b3.elementType === c3.type)
      return d3 = e2(b3, c3.props), d3.ref = Qg(a2, b3, c3), d3.return = a2, d3;
    d3 = Vg(c3.type, c3.key, c3.props, null, a2.mode, d3);
    d3.ref = Qg(a2, b3, c3);
    d3.return = a2;
    return d3;
  }
  function l2(a2, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = Wg(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a2;
    return b3;
  }
  function n2(a2, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Xg(c3, a2.mode, d3, f3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function A2(a2, b3, c3) {
    if ("string" === typeof b3 || "number" === typeof b3)
      return b3 = Ug("" + b3, a2.mode, c3), b3.return = a2, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case sa:
          return c3 = Vg(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = Qg(a2, null, b3), c3.return = a2, c3;
        case ta:
          return b3 = Wg(b3, a2.mode, c3), b3.return = a2, b3;
      }
      if (Pg(b3) || La(b3))
        return b3 = Xg(
          b3,
          a2.mode,
          c3,
          null
        ), b3.return = a2, b3;
      Rg(a2, b3);
    }
    return null;
  }
  function p2(a2, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 || "number" === typeof c3)
      return null !== e3 ? null : h2(a2, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case sa:
          return c3.key === e3 ? c3.type === ua ? n2(a2, b3, c3.props.children, d3, e3) : k2(a2, b3, c3, d3) : null;
        case ta:
          return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
      }
      if (Pg(c3) || La(c3))
        return null !== e3 ? null : n2(a2, b3, c3, d3, null);
      Rg(a2, c3);
    }
    return null;
  }
  function C2(a2, b3, c3, d3, e3) {
    if ("string" === typeof d3 || "number" === typeof d3)
      return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case sa:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, d3.type === ua ? n2(b3, a2, d3.props.children, e3, d3.key) : k2(b3, a2, d3, e3);
        case ta:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
      }
      if (Pg(d3) || La(d3))
        return a2 = a2.get(c3) || null, n2(b3, a2, d3, e3, null);
      Rg(b3, d3);
    }
    return null;
  }
  function x2(e3, g3, h3, k3) {
    for (var l3 = null, t2 = null, u2 = g3, z2 = g3 = 0, q2 = null; null !== u2 && z2 < h3.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e3, u2, h3[z2], k3);
      if (null === n3) {
        null === u2 && (u2 = q2);
        break;
      }
      a && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, z2);
      null === t2 ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h3.length)
      return c2(e3, u2), l3;
    if (null === u2) {
      for (; z2 < h3.length; z2++)
        u2 = A2(e3, h3[z2], k3), null !== u2 && (g3 = f2(u2, g3, z2), null === t2 ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d2(e3, u2); z2 < h3.length; z2++)
      q2 = C2(u2, e3, z2, h3[z2], k3), null !== q2 && (a && null !== q2.alternate && u2.delete(null === q2.key ? z2 : q2.key), g3 = f2(q2, g3, z2), null === t2 ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a && u2.forEach(function(a2) {
      return b2(e3, a2);
    });
    return l3;
  }
  function w2(e3, g3, h3, k3) {
    var l3 = La(h3);
    if ("function" !== typeof l3)
      throw Error(y$1(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(y$1(151));
    for (var t2 = l3 = null, u2 = g3, z2 = g3 = 0, q2 = null, n3 = h3.next(); null !== u2 && !n3.done; z2++, n3 = h3.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w3 = p2(e3, u2, n3.value, k3);
      if (null === w3) {
        null === u2 && (u2 = q2);
        break;
      }
      a && u2 && null === w3.alternate && b2(e3, u2);
      g3 = f2(w3, g3, z2);
      null === t2 ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q2;
    }
    if (n3.done)
      return c2(e3, u2), l3;
    if (null === u2) {
      for (; !n3.done; z2++, n3 = h3.next())
        n3 = A2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, z2), null === t2 ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d2(e3, u2); !n3.done; z2++, n3 = h3.next())
      n3 = C2(u2, e3, z2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && u2.delete(null === n3.key ? z2 : n3.key), g3 = f2(n3, g3, z2), null === t2 ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a && u2.forEach(function(a2) {
      return b2(e3, a2);
    });
    return l3;
  }
  return function(a2, d3, f3, h3) {
    var k3 = "object" === typeof f3 && null !== f3 && f3.type === ua && null === f3.key;
    k3 && (f3 = f3.props.children);
    var l3 = "object" === typeof f3 && null !== f3;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k3 = d3; null !== k3; ) {
              if (k3.key === l3) {
                switch (k3.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c2(a2, k3.sibling);
                      d3 = e2(k3, f3.props.children);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                    break;
                  default:
                    if (k3.elementType === f3.type) {
                      c2(a2, k3.sibling);
                      d3 = e2(k3, f3.props);
                      d3.ref = Qg(a2, k3, f3);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                }
                c2(a2, k3);
                break;
              } else
                b2(a2, k3);
              k3 = k3.sibling;
            }
            f3.type === ua ? (d3 = Xg(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = Vg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Qg(a2, d3, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case ta:
          a: {
            for (k3 = f3.key; null !== d3; ) {
              if (d3.key === k3)
                if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a2, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                } else {
                  c2(a2, d3);
                  break;
                }
              else
                b2(a2, d3);
              d3 = d3.sibling;
            }
            d3 = Wg(f3, a2.mode, h3);
            d3.return = a2;
            a2 = d3;
          }
          return g2(a2);
      }
    if ("string" === typeof f3 || "number" === typeof f3)
      return f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = Ug(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2);
    if (Pg(f3))
      return x2(a2, d3, f3, h3);
    if (La(f3))
      return w2(a2, d3, f3, h3);
    l3 && Rg(a2, f3);
    if ("undefined" === typeof f3 && !k3)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y$1(152, Ra(a2.type) || "Component"));
      }
    return c2(a2, d3);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y$1(174));
  return a;
}
function eh(a, b2) {
  I(ch, b2);
  I(bh, a);
  I(ah, $g);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
      break;
    default:
      a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = mb(b2, a);
  }
  H(ah);
  I(ah, b2);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b2 = dh(ah.current);
  var c2 = mb(b2, a.type);
  b2 !== c2 && (I(bh, a), I(ah, c2));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b2 = a; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 64))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a, b2) {
  var c2 = nh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.type = "DELETED";
  c2.stateNode = b2;
  c2.return = a;
  c2.flags = 8;
  null !== a.lastEffect ? (a.lastEffect.nextEffect = c2, a.lastEffect = c2) : a.firstEffect = a.lastEffect = c2;
}
function oh(a, b2) {
  switch (a.tag) {
    case 5:
      var c2 = a.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a.stateNode = b2, true) : false;
    case 6:
      return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b2 = kh;
    if (b2) {
      var c2 = b2;
      if (!oh(a, b2)) {
        b2 = rf(c2.nextSibling);
        if (!b2 || !oh(a, b2)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c2);
      }
      jh = a;
      kh = rf(b2.firstChild);
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
  var b2 = a.type;
  if (5 !== a.tag || "head" !== b2 && "body" !== b2 && !nf(b2, a.memoizedProps))
    for (b2 = kh; b2; )
      mh(a, b2), b2 = rf(b2.nextSibling);
  qh(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(y$1(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c2 = a.data;
          if ("/$" === c2) {
            if (0 === b2) {
              kh = rf(a.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
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
  throw Error(y$1(321));
}
function Bh(a, b2) {
  if (null === b2)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++)
    if (!He(a[c2], b2[c2]))
      return false;
  return true;
}
function Ch(a, b2, c2, d2, e2, f2) {
  xh = f2;
  R = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  vh.current = null === a || null === a.memoizedState ? Dh : Eh;
  a = c2(d2, e2);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y$1(301));
      f2 += 1;
      T = S = null;
      b2.updateQueue = null;
      vh.current = Fh;
      a = c2(d2, e2);
    } while (zh);
  }
  vh.current = Gh;
  b2 = null !== S && null !== S.next;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b2)
    throw Error(y$1(300));
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
  var b2 = null === T ? R.memoizedState : T.next;
  if (null !== b2)
    T = b2, S = a;
  else {
    if (null === a)
      throw Error(y$1(310));
    S = a;
    a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    null === T ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b2) {
  return "function" === typeof b2 ? b2(a) : b2;
}
function Kh(a) {
  var b2 = Ih(), c2 = b2.queue;
  if (null === c2)
    throw Error(y$1(311));
  c2.lastRenderedReducer = a;
  var d2 = S, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    e2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = f2 = null, k2 = e2;
    do {
      var l2 = k2.lane;
      if ((xh & l2) === l2)
        null !== h2 && (h2 = h2.next = { lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null }), d2 = k2.eagerReducer === a ? k2.eagerState : a(d2, k2.action);
      else {
        var n2 = {
          lane: l2,
          action: k2.action,
          eagerReducer: k2.eagerReducer,
          eagerState: k2.eagerState,
          next: null
        };
        null === h2 ? (g2 = h2 = n2, f2 = d2) : h2 = h2.next = n2;
        R.lanes |= l2;
        Dg |= l2;
      }
      k2 = k2.next;
    } while (null !== k2 && k2 !== e2);
    null === h2 ? f2 = d2 : h2.next = g2;
    He(d2, b2.memoizedState) || (ug = true);
    b2.memoizedState = d2;
    b2.baseState = f2;
    b2.baseQueue = h2;
    c2.lastRenderedState = d2;
  }
  return [b2.memoizedState, c2.dispatch];
}
function Lh(a) {
  var b2 = Ih(), c2 = b2.queue;
  if (null === c2)
    throw Error(y$1(311));
  c2.lastRenderedReducer = a;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Mh(a, b2, c2) {
  var d2 = b2._getVersion;
  d2 = d2(b2._source);
  var e2 = b2._workInProgressVersionPrimary;
  if (null !== e2)
    a = e2 === d2;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b2._workInProgressVersionPrimary = d2, th.push(b2);
  if (a)
    return c2(b2._source);
  th.push(b2);
  throw Error(y$1(350));
}
function Nh(a, b2, c2, d2) {
  var e2 = U;
  if (null === e2)
    throw Error(y$1(349));
  var f2 = b2._getVersion, g2 = f2(b2._source), h2 = vh.current, k2 = h2.useState(function() {
    return Mh(e2, b2, c2);
  }), l2 = k2[1], n2 = k2[0];
  k2 = T;
  var A2 = a.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w2 = R;
  a.memoizedState = { refs: p2, source: b2, subscribe: d2 };
  h2.useEffect(function() {
    p2.getSnapshot = c2;
    p2.setSnapshot = l2;
    var a2 = f2(b2._source);
    if (!He(g2, a2)) {
      a2 = c2(b2._source);
      He(n2, a2) || (l2(a2), a2 = Ig(w2), e2.mutableReadLanes |= a2 & e2.pendingLanes);
      a2 = e2.mutableReadLanes;
      e2.entangledLanes |= a2;
      for (var d3 = e2.entanglements, h3 = a2; 0 < h3; ) {
        var k3 = 31 - Vc(h3), v2 = 1 << k3;
        d3[k3] |= a2;
        h3 &= ~v2;
      }
    }
  }, [c2, b2, d2]);
  h2.useEffect(function() {
    return d2(b2._source, function() {
      var a2 = p2.getSnapshot, c3 = p2.setSnapshot;
      try {
        c3(a2(b2._source));
        var d3 = Ig(w2);
        e2.mutableReadLanes |= d3 & e2.pendingLanes;
      } catch (q2) {
        c3(function() {
          throw q2;
        });
      }
    });
  }, [b2, d2]);
  He(C2, c2) && He(x2, b2) && He(A2, d2) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a.dispatch = l2 = Oh.bind(null, R, a), k2.queue = a, k2.baseQueue = null, n2 = Mh(e2, b2, c2), k2.memoizedState = k2.baseState = n2);
  return n2;
}
function Ph(a, b2, c2) {
  var d2 = Ih();
  return Nh(d2, a, b2, c2);
}
function Qh(a) {
  var b2 = Hh();
  "function" === typeof a && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = b2.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b2.memoizedState, a];
}
function Rh(a, b2, c2, d2) {
  a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
  b2 = R.updateQueue;
  null === b2 ? (b2 = { lastEffect: null }, R.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
  return a;
}
function Sh(a) {
  var b2 = Hh();
  a = { current: a };
  return b2.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b2, c2, d2) {
  var e2 = Hh();
  R.flags |= a;
  e2.memoizedState = Rh(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function Vh(a, b2, c2, d2) {
  var e2 = Ih();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== S) {
    var g2 = S.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Bh(d2, g2.deps)) {
      Rh(b2, c2, f2, d2);
      return;
    }
  }
  R.flags |= a;
  e2.memoizedState = Rh(1 | b2, c2, f2, d2);
}
function Wh(a, b2) {
  return Uh(516, 4, a, b2);
}
function Xh(a, b2) {
  return Vh(516, 4, a, b2);
}
function Yh(a, b2) {
  return Vh(4, 2, a, b2);
}
function Zh(a, b2) {
  if ("function" === typeof b2)
    return a = a(), b2(a), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a = a(), b2.current = a, function() {
      b2.current = null;
    };
}
function $h(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b2, a), c2);
}
function ai() {
}
function bi(a, b2) {
  var c2 = Ih();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Bh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a, b2];
  return a;
}
function ci(a, b2) {
  var c2 = Ih();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Bh(b2, d2[1]))
    return d2[0];
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}
function di(a, b2) {
  var c2 = eg();
  gg(98 > c2 ? 98 : c2, function() {
    a(true);
  });
  gg(97 < c2 ? 97 : c2, function() {
    var c3 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b2();
    } finally {
      wh.transition = c3;
    }
  });
}
function Oh(a, b2, c2) {
  var d2 = Hg(), e2 = Ig(a), f2 = { lane: e2, action: c2, eagerReducer: null, eagerState: null, next: null }, g2 = b2.pending;
  null === g2 ? f2.next = f2 : (f2.next = g2.next, g2.next = f2);
  b2.pending = f2;
  g2 = a.alternate;
  if (a === R || null !== g2 && g2 === R)
    zh = yh = true;
  else {
    if (0 === a.lanes && (null === g2 || 0 === g2.lanes) && (g2 = b2.lastRenderedReducer, null !== g2))
      try {
        var h2 = b2.lastRenderedState, k2 = g2(h2, c2);
        f2.eagerReducer = g2;
        f2.eagerState = k2;
        if (He(k2, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a, e2, d2);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a, b2) {
  Hh().memoizedState = [a, void 0 === b2 ? null : b2];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return Uh(4, 2, Zh.bind(
    null,
    b2,
    a
  ), c2);
}, useLayoutEffect: function(a, b2) {
  return Uh(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c2 = Hh();
  b2 = void 0 === b2 ? null : b2;
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c2) {
  var d2 = Hh();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a = d2.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  a = a.dispatch = Oh.bind(null, R, a);
  return [d2.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b2 = Qh(a), c2 = b2[0], d2 = b2[1];
  Wh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a);
    } finally {
      wh.transition = b3;
    }
  }, [a]);
  return c2;
}, useTransition: function() {
  var a = Qh(false), b2 = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b2];
}, useMutableSource: function(a, b2, c2) {
  var d2 = Hh();
  d2.memoizedState = { refs: { getSnapshot: b2, setSnapshot: null }, source: a, subscribe: c2 };
  return Nh(d2, a, b2, c2);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b2 = uf(function() {
      a || (a = true, c2("r:" + (tf++).toString(36)));
      throw Error(y$1(355));
    }), c2 = Qh(b2)[1];
    0 === (R.mode & 2) && (R.flags |= 516, Rh(
      5,
      function() {
        c2("r:" + (tf++).toString(36));
      },
      void 0,
      null
    ));
    return b2;
  }
  b2 = "r:" + (tf++).toString(36);
  Qh(b2);
  return b2;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b2 = Kh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a);
    } finally {
      wh.transition = b3;
    }
  }, [a]);
  return c2;
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
  var b2 = Lh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a);
    } finally {
      wh.transition = b3;
    }
  }, [a]);
  return c2;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a, b2, c2, d2) {
  b2.child = null === a ? Zg(b2, null, c2, d2) : Yg(b2, a.child, c2, d2);
}
function gi(a, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  tg(b2, e2);
  d2 = Ch(a, b2, c2, d2, f2, e2);
  if (null !== a && !ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -517, a.lanes &= ~e2, hi(a, b2, e2);
  b2.flags |= 1;
  fi(a, b2, d2, e2);
  return b2.child;
}
function ii(a, b2, c2, d2, e2, f2) {
  if (null === a) {
    var g2 = c2.type;
    if ("function" === typeof g2 && !ji(g2) && void 0 === g2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
      return b2.tag = 15, b2.type = g2, ki(a, b2, g2, d2, e2, f2);
    a = Vg(c2.type, null, d2, b2, b2.mode, f2);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  g2 = a.child;
  if (0 === (e2 & f2) && (e2 = g2.memoizedProps, c2 = c2.compare, c2 = null !== c2 ? c2 : Je, c2(e2, d2) && a.ref === b2.ref))
    return hi(a, b2, f2);
  b2.flags |= 1;
  a = Tg(g2, d2);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function ki(a, b2, c2, d2, e2, f2) {
  if (null !== a && Je(a.memoizedProps, d2) && a.ref === b2.ref)
    if (ug = false, 0 !== (f2 & e2))
      0 !== (a.flags & 16384) && (ug = true);
    else
      return b2.lanes = a.lanes, hi(a, b2, f2);
  return li(a, b2, c2, d2, f2);
}
function mi(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d2.mode || "unstable-defer-without-hiding" === d2.mode)
    if (0 === (b2.mode & 4))
      b2.memoizedState = { baseLanes: 0 }, ni(b2, c2);
    else if (0 !== (c2 & 1073741824))
      b2.memoizedState = { baseLanes: 0 }, ni(b2, null !== f2 ? f2.baseLanes : c2);
    else
      return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a }, ni(b2, a), null;
  else
    null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, ni(b2, d2);
  fi(a, b2, e2, c2);
  return b2.child;
}
function oi(a, b2) {
  var c2 = b2.ref;
  if (null === a && null !== c2 || null !== a && a.ref !== c2)
    b2.flags |= 128;
}
function li(a, b2, c2, d2, e2) {
  var f2 = Ff(c2) ? Df : M.current;
  f2 = Ef(b2, f2);
  tg(b2, e2);
  c2 = Ch(a, b2, c2, d2, f2, e2);
  if (null !== a && !ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -517, a.lanes &= ~e2, hi(a, b2, e2);
  b2.flags |= 1;
  fi(a, b2, c2, e2);
  return b2.child;
}
function pi(a, b2, c2, d2, e2) {
  if (Ff(c2)) {
    var f2 = true;
    Jf(b2);
  } else
    f2 = false;
  tg(b2, e2);
  if (null === b2.stateNode)
    null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c2, d2), Og(b2, c2, d2, e2), d2 = true;
  else if (null === a) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = vg(l2) : (l2 = Ff(c2) ? Df : M.current, l2 = Ef(b2, l2));
    var n2 = c2.getDerivedStateFromProps, A2 = "function" === typeof n2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    A2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Ng(b2, g2, d2, l2);
    wg = false;
    var p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || p2 !== k2 || N.current || wg ? ("function" === typeof n2 && (Gg(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = wg || Lg(b2, c2, h2, d2, p2, k2, l2)) ? (A2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4), d2 = false);
  } else {
    g2 = b2.stateNode;
    yg(a, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
    g2.props = l2;
    A2 = b2.pendingProps;
    p2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = vg(k2) : (k2 = Ff(c2) ? Df : M.current, k2 = Ef(b2, k2));
    var C2 = c2.getDerivedStateFromProps;
    (n2 = "function" === typeof C2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== A2 || p2 !== k2) && Ng(b2, g2, d2, k2);
    wg = false;
    p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    var x2 = b2.memoizedState;
    h2 !== A2 || p2 !== x2 || N.current || wg ? ("function" === typeof C2 && (Gg(b2, c2, C2, d2), x2 = b2.memoizedState), (l2 = wg || Lg(b2, c2, l2, d2, p2, x2, k2)) ? (n2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(
      d2,
      x2,
      k2
    ), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, x2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 256)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 256), b2.memoizedProps = d2, b2.memoizedState = x2), g2.props = d2, g2.state = x2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 256), d2 = false);
  }
  return qi(a, b2, c2, d2, f2, e2);
}
function qi(a, b2, c2, d2, e2, f2) {
  oi(a, b2);
  var g2 = 0 !== (b2.flags & 64);
  if (!d2 && !g2)
    return e2 && Kf(b2, c2, false), hi(a, b2, f2);
  d2 = b2.stateNode;
  ei.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a && g2 ? (b2.child = Yg(b2, a.child, null, f2), b2.child = Yg(b2, null, h2, f2)) : fi(a, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && Kf(b2, c2, true);
  return b2.child;
}
function ri(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? Hf(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a, b2.context, false);
  eh(a, b2.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = P.current, f2 = false, g2;
  (g2 = 0 !== (b2.flags & 64)) || (g2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
  g2 ? (f2 = true, b2.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d2.fallback || true === d2.unstable_avoidThisFallback || (e2 |= 1);
  I(P, e2 & 1);
  if (null === a) {
    void 0 !== d2.fallback && ph(b2);
    a = d2.children;
    e2 = d2.fallback;
    if (f2)
      return a = ui(b2, a, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, a;
    if ("number" === typeof d2.unstable_expectedLoadTime)
      return a = ui(b2, a, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, b2.lanes = 33554432, a;
    c2 = vi({ mode: "visible", children: a }, b2.mode, c2, null);
    c2.return = b2;
    return b2.child = c2;
  }
  if (null !== a.memoizedState) {
    if (f2)
      return d2 = wi(a, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a.child.memoizedState, f2.memoizedState = null === e2 ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a.childLanes & ~c2, b2.memoizedState = si, d2;
    c2 = xi(a, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = wi(a, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a.child.memoizedState, f2.memoizedState = null === e2 ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a.childLanes & ~c2, b2.memoizedState = si, d2;
  c2 = xi(a, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function ui(a, b2, c2, d2) {
  var e2 = a.mode, f2 = a.child;
  b2 = { mode: "hidden", children: b2 };
  0 === (e2 & 2) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = b2) : f2 = vi(b2, e2, 0, null);
  c2 = Xg(c2, e2, d2, null);
  f2.return = a;
  c2.return = a;
  f2.sibling = c2;
  a.child = f2;
  return c2;
}
function xi(a, b2, c2, d2) {
  var e2 = a.child;
  a = e2.sibling;
  c2 = Tg(e2, { mode: "visible", children: c2 });
  0 === (b2.mode & 2) && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  null !== a && (a.nextEffect = null, a.flags = 8, b2.firstEffect = b2.lastEffect = a);
  return b2.child = c2;
}
function wi(a, b2, c2, d2, e2) {
  var f2 = b2.mode, g2 = a.child;
  a = g2.sibling;
  var h2 = { mode: "hidden", children: c2 };
  0 === (f2 & 2) && b2.child !== g2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, g2 = c2.lastEffect, null !== g2 ? (b2.firstEffect = c2.firstEffect, b2.lastEffect = g2, g2.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c2 = Tg(g2, h2);
  null !== a ? d2 = Tg(a, d2) : (d2 = Xg(d2, f2, e2, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function yi(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  null !== c2 && (c2.lanes |= b2);
  sg(a.return, b2);
}
function zi(a, b2, c2, d2, e2, f2) {
  var g2 = a.memoizedState;
  null === g2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2, lastEffect: f2 } : (g2.isBackwards = b2, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d2, g2.tail = c2, g2.tailMode = e2, g2.lastEffect = f2);
}
function Ai(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  fi(a, b2, d2.children, c2);
  d2 = P.current;
  if (0 !== (d2 & 2))
    d2 = d2 & 1 | 2, b2.flags |= 64;
  else {
    if (null !== a && 0 !== (a.flags & 64))
      a:
        for (a = b2.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && yi(a, c2);
          else if (19 === a.tag)
            yi(a, c2);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b2)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b2)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d2 &= 1;
  }
  I(P, d2);
  if (0 === (b2.mode & 2))
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; )
          a = c2.alternate, null !== a && null === ih(a) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        zi(b2, false, e2, c2, f2, b2.lastEffect);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a = e2.alternate;
          if (null !== a && null === ih(a)) {
            b2.child = e2;
            break;
          }
          a = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a;
        }
        zi(b2, true, c2, null, f2, b2.lastEffect);
        break;
      case "together":
        zi(b2, false, null, null, void 0, b2.lastEffect);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function hi(a, b2, c2) {
  null !== a && (b2.dependencies = a.dependencies);
  Dg |= b2.lanes;
  if (0 !== (c2 & b2.childLanes)) {
    if (null !== a && b2.child !== a.child)
      throw Error(y$1(153));
    if (null !== b2.child) {
      a = b2.child;
      c2 = Tg(a, a.pendingProps);
      b2.child = c2;
      for (c2.return = b2; null !== a.sibling; )
        a = a.sibling, c2 = c2.sibling = Tg(a, a.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag)
      a.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ci = function() {
};
Di = function(a, b2, c2, d2) {
  var e2 = a.memoizedProps;
  if (e2 !== d2) {
    a = b2.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a, e2);
        d2 = Ya(a, d2);
        f2 = [];
        break;
      case "option":
        e2 = eb(a, e2);
        d2 = eb(a, d2);
        f2 = [];
        break;
      case "select":
        e2 = m$1({}, e2, { value: void 0 });
        d2 = m$1({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a, e2);
        d2 = gb(a, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a.onclick = jf);
    }
    vb(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ca.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && G("scroll", a), f2 || h2 === k2 || (f2 = [])) : "object" === typeof k2 && null !== k2 && k2.$$typeof === Ga ? k2.toString() : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push(
      "style",
      c2
    );
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Ei = function(a, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Fi(a, b2) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b2 = a.tail;
        for (var c2 = null; null !== b2; )
          null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a.tail;
        for (var d2 = null; null !== c2; )
          null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
    }
}
function Gi(a, b2, c2) {
  var d2 = b2.pendingProps;
  switch (b2.tag) {
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
      return Ff(b2.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d2 = b2.stateNode;
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a || null === a.child)
        rh(b2) ? b2.flags |= 4 : d2.hydrate || (b2.flags |= 256);
      Ci(b2);
      return null;
    case 5:
      hh(b2);
      var e2 = dh(ch.current);
      c2 = b2.type;
      if (null !== a && null != b2.stateNode)
        Di(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 128);
      else {
        if (!d2) {
          if (null === b2.stateNode)
            throw Error(y$1(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[wf] = b2;
          d2[xf] = f2;
          switch (c2) {
            case "dialog":
              G("cancel", d2);
              G("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d2);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d2);
              break;
            case "source":
              G("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d2);
              G("load", d2);
              break;
            case "details":
              G("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              G("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              G("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), G("invalid", d2);
          }
          vb(c2, f2);
          a = null;
          for (var g2 in f2)
            f2.hasOwnProperty(g2) && (e2 = f2[g2], "children" === g2 ? "string" === typeof e2 ? d2.textContent !== e2 && (a = ["children", e2]) : "number" === typeof e2 && d2.textContent !== "" + e2 && (a = ["children", "" + e2]) : ca.hasOwnProperty(g2) && null != e2 && "onScroll" === g2 && G("scroll", d2));
          switch (c2) {
            case "input":
              Va(d2);
              cb(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = jf);
          }
          d2 = a;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          a === kb.html && (a = lb(c2));
          a === kb.html ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
          a[wf] = b2;
          a[xf] = d2;
          Bi(a, b2, false, false);
          b2.stateNode = a;
          g2 = wb(c2, d2);
          switch (c2) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e2 = d2;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e2 = d2;
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < Xe.length; e2++)
                G(Xe[e2], a);
              e2 = d2;
              break;
            case "source":
              G("error", a);
              e2 = d2;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e2 = d2;
              break;
            case "details":
              G("toggle", a);
              e2 = d2;
              break;
            case "input":
              Za(a, d2);
              e2 = Ya(a, d2);
              G("invalid", a);
              break;
            case "option":
              e2 = eb(a, d2);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d2.multiple };
              e2 = m$1({}, d2, { value: void 0 });
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d2);
              e2 = gb(a, d2);
              G("invalid", a);
              break;
            default:
              e2 = d2;
          }
          vb(c2, e2);
          var h2 = e2;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              "style" === f2 ? tb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && ob(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && pb(a, k2) : "number" === typeof k2 && pb(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ca.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && G("scroll", a) : null != k2 && qa(a, f2, k2, g2));
            }
          switch (c2) {
            case "input":
              Va(a);
              cb(a, d2, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
              break;
            case "select":
              a.multiple = !!d2.multiple;
              f2 = d2.value;
              null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(a, !!d2.multiple, d2.defaultValue, true);
              break;
            default:
              "function" === typeof e2.onClick && (a.onclick = jf);
          }
          mf(c2, d2) && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 128);
      }
      return null;
    case 6:
      if (a && null != b2.stateNode)
        Ei(a, b2, a.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode)
          throw Error(y$1(166));
        c2 = dh(ch.current);
        dh(ah.current);
        rh(b2) ? (d2 = b2.stateNode, c2 = b2.memoizedProps, d2[wf] = b2, d2.nodeValue !== c2 && (b2.flags |= 4)) : (d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[wf] = b2, b2.stateNode = d2);
      }
      return null;
    case 13:
      H(P);
      d2 = b2.memoizedState;
      if (0 !== (b2.flags & 64))
        return b2.lanes = c2, b2;
      d2 = null !== d2;
      c2 = false;
      null === a ? void 0 !== b2.memoizedProps.fallback && rh(b2) : c2 = null !== a.memoizedState;
      if (d2 && !c2 && 0 !== (b2.mode & 2))
        if (null === a && true !== b2.memoizedProps.unstable_avoidThisFallback || 0 !== (P.current & 1))
          0 === V && (V = 3);
        else {
          if (0 === V || 3 === V)
            V = 4;
          null === U || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U, W);
        }
      if (d2 || c2)
        b2.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b2), null === a && cf(b2.stateNode.containerInfo), null;
    case 10:
      return rg(b2), null;
    case 17:
      return Ff(b2.type) && Gf(), null;
    case 19:
      H(P);
      d2 = b2.memoizedState;
      if (null === d2)
        return null;
      f2 = 0 !== (b2.flags & 64);
      g2 = d2.rendering;
      if (null === g2)
        if (f2)
          Fi(d2, false);
        else {
          if (0 !== V || null !== a && 0 !== (a.flags & 64))
            for (a = b2.child; null !== a; ) {
              g2 = ih(a);
              if (null !== g2) {
                b2.flags |= 64;
                Fi(d2, false);
                f2 = g2.updateQueue;
                null !== f2 && (b2.updateQueue = f2, b2.flags |= 4);
                null === d2.lastEffect && (b2.firstEffect = null);
                b2.lastEffect = d2.lastEffect;
                d2 = c2;
                for (c2 = b2.child; null !== c2; )
                  f2 = c2, a = d2, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                I(P, P.current & 1 | 2);
                return b2.child;
              }
              a = a.sibling;
            }
          null !== d2.tail && O() > Ji && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a = ih(g2), null !== a) {
            if (b2.flags |= 64, f2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Fi(d2, true), null === d2.tail && "hidden" === d2.tailMode && !g2.alternate && !lh)
              return b2 = b2.lastEffect = d2.lastEffect, null !== b2 && (b2.nextEffect = null), null;
          } else
            2 * O() - d2.renderingStartTime > Ji && 1073741824 !== c2 && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        d2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = d2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, d2.last = g2);
      }
      return null !== d2.tail ? (c2 = d2.tail, d2.rendering = c2, d2.tail = c2.sibling, d2.lastEffect = b2.lastEffect, d2.renderingStartTime = O(), c2.sibling = null, b2 = P.current, I(P, f2 ? b2 & 1 | 2 : b2 & 1), c2) : null;
    case 23:
    case 24:
      return Ki(), null !== a && null !== a.memoizedState !== (null !== b2.memoizedState) && "unstable-defer-without-hiding" !== d2.mode && (b2.flags |= 4), null;
  }
  throw Error(y$1(156, b2.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b2 = a.flags;
      return b2 & 4096 ? (a.flags = b2 & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b2 = a.flags;
      if (0 !== (b2 & 64))
        throw Error(y$1(285));
      a.flags = b2 & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b2 = a.flags, b2 & 4096 ? (a.flags = b2 & -4097 | 64, a) : null;
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
function Mi(a, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Qa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e2 };
}
function Ni(a, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Oi = "function" === typeof WeakMap ? WeakMap : Map;
function Pi(a, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Qi || (Qi = true, Ri = d2);
    Ni(a, b2);
  };
  return c2;
}
function Si(a, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d2 = a.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      Ni(a, b2);
      return d2(e2);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    "function" !== typeof d2 && (null === Ti ? Ti = /* @__PURE__ */ new Set([this]) : Ti.add(this), Ni(a, b2));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
var Ui = "function" === typeof WeakSet ? WeakSet : Set;
function Vi(a) {
  var b2 = a.ref;
  if (null !== b2)
    if ("function" === typeof b2)
      try {
        b2(null);
      } catch (c2) {
        Wi(a, c2);
      }
    else
      b2.current = null;
}
function Xi(a, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b2.flags & 256 && null !== a) {
        var c2 = a.memoizedProps, d2 = a.memoizedState;
        a = b2.stateNode;
        b2 = a.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c2 : lg(b2.type, c2), d2);
        a.__reactInternalSnapshotBeforeUpdate = b2;
      }
      return;
    case 3:
      b2.flags & 256 && qf(b2.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y$1(163));
}
function Yi(a, b2, c2) {
  switch (c2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b2 = c2.updateQueue;
      b2 = null !== b2 ? b2.lastEffect : null;
      if (null !== b2) {
        a = b2 = b2.next;
        do {
          if (3 === (a.tag & 3)) {
            var d2 = a.create;
            a.destroy = d2();
          }
          a = a.next;
        } while (a !== b2);
      }
      b2 = c2.updateQueue;
      b2 = null !== b2 ? b2.lastEffect : null;
      if (null !== b2) {
        a = b2 = b2.next;
        do {
          var e2 = a;
          d2 = e2.next;
          e2 = e2.tag;
          0 !== (e2 & 4) && 0 !== (e2 & 1) && (Zi(c2, a), $i(c2, a));
          a = d2;
        } while (a !== b2);
      }
      return;
    case 1:
      a = c2.stateNode;
      c2.flags & 4 && (null === b2 ? a.componentDidMount() : (d2 = c2.elementType === c2.type ? b2.memoizedProps : lg(c2.type, b2.memoizedProps), a.componentDidUpdate(
        d2,
        b2.memoizedState,
        a.__reactInternalSnapshotBeforeUpdate
      )));
      b2 = c2.updateQueue;
      null !== b2 && Eg(c2, b2, a);
      return;
    case 3:
      b2 = c2.updateQueue;
      if (null !== b2) {
        a = null;
        if (null !== c2.child)
          switch (c2.child.tag) {
            case 5:
              a = c2.child.stateNode;
              break;
            case 1:
              a = c2.child.stateNode;
          }
        Eg(c2, b2, a);
      }
      return;
    case 5:
      a = c2.stateNode;
      null === b2 && c2.flags & 4 && mf(c2.type, c2.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      null === c2.memoizedState && (c2 = c2.alternate, null !== c2 && (c2 = c2.memoizedState, null !== c2 && (c2 = c2.dehydrated, null !== c2 && Cc(c2))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y$1(163));
}
function aj(a, b2) {
  for (var c2 = a; ; ) {
    if (5 === c2.tag) {
      var d2 = c2.stateNode;
      if (b2)
        d2 = d2.style, "function" === typeof d2.setProperty ? d2.setProperty("display", "none", "important") : d2.display = "none";
      else {
        d2 = c2.stateNode;
        var e2 = c2.memoizedProps.style;
        e2 = void 0 !== e2 && null !== e2 && e2.hasOwnProperty("display") ? e2.display : null;
        d2.style.display = sb("display", e2);
      }
    } else if (6 === c2.tag)
      c2.stateNode.nodeValue = b2 ? "" : c2.memoizedProps;
    else if ((23 !== c2.tag && 24 !== c2.tag || null === c2.memoizedState || c2 === a) && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === a)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === a)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function bj(a, b2) {
  if (Mf && "function" === typeof Mf.onCommitFiberUnmount)
    try {
      Mf.onCommitFiberUnmount(Lf, b2);
    } catch (f2) {
    }
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b2.updateQueue;
      if (null !== a && (a = a.lastEffect, null !== a)) {
        var c2 = a = a.next;
        do {
          var d2 = c2, e2 = d2.destroy;
          d2 = d2.tag;
          if (void 0 !== e2)
            if (0 !== (d2 & 4))
              Zi(b2, c2);
            else {
              d2 = b2;
              try {
                e2();
              } catch (f2) {
                Wi(d2, f2);
              }
            }
          c2 = c2.next;
        } while (c2 !== a);
      }
      break;
    case 1:
      Vi(b2);
      a = b2.stateNode;
      if ("function" === typeof a.componentWillUnmount)
        try {
          a.props = b2.memoizedProps, a.state = b2.memoizedState, a.componentWillUnmount();
        } catch (f2) {
          Wi(
            b2,
            f2
          );
        }
      break;
    case 5:
      Vi(b2);
      break;
    case 4:
      cj(a, b2);
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
    for (var b2 = a.return; null !== b2; ) {
      if (ej(b2))
        break a;
      b2 = b2.return;
    }
    throw Error(y$1(160));
  }
  var c2 = b2;
  b2 = c2.stateNode;
  switch (c2.tag) {
    case 5:
      var d2 = false;
      break;
    case 3:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    case 4:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    default:
      throw Error(y$1(161));
  }
  c2.flags & 16 && (pb(b2, ""), c2.flags &= -17);
  a:
    b:
      for (c2 = a; ; ) {
        for (; null === c2.sibling; ) {
          if (null === c2.return || ej(c2.return)) {
            c2 = null;
            break a;
          }
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        for (c2 = c2.sibling; 5 !== c2.tag && 6 !== c2.tag && 18 !== c2.tag; ) {
          if (c2.flags & 2)
            continue b;
          if (null === c2.child || 4 === c2.tag)
            continue b;
          else
            c2.child.return = c2, c2 = c2.child;
        }
        if (!(c2.flags & 2)) {
          c2 = c2.stateNode;
          break a;
        }
      }
  d2 ? gj(a, c2, b2) : hj(a, c2, b2);
}
function gj(a, b2, c2) {
  var d2 = a.tag, e2 = 5 === d2 || 6 === d2;
  if (e2)
    a = e2 ? a.stateNode : a.stateNode.instance, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = jf));
  else if (4 !== d2 && (a = a.child, null !== a))
    for (gj(a, b2, c2), a = a.sibling; null !== a; )
      gj(a, b2, c2), a = a.sibling;
}
function hj(a, b2, c2) {
  var d2 = a.tag, e2 = 5 === d2 || 6 === d2;
  if (e2)
    a = e2 ? a.stateNode : a.stateNode.instance, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
  else if (4 !== d2 && (a = a.child, null !== a))
    for (hj(a, b2, c2), a = a.sibling; null !== a; )
      hj(a, b2, c2), a = a.sibling;
}
function cj(a, b2) {
  for (var c2 = b2, d2 = false, e2, f2; ; ) {
    if (!d2) {
      d2 = c2.return;
      a:
        for (; ; ) {
          if (null === d2)
            throw Error(y$1(160));
          e2 = d2.stateNode;
          switch (d2.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
            case 4:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
          }
          d2 = d2.return;
        }
      d2 = true;
    }
    if (5 === c2.tag || 6 === c2.tag) {
      a:
        for (var g2 = a, h2 = c2, k2 = h2; ; )
          if (bj(g2, k2), null !== k2.child && 4 !== k2.tag)
            k2.child.return = k2, k2 = k2.child;
          else {
            if (k2 === h2)
              break a;
            for (; null === k2.sibling; ) {
              if (null === k2.return || k2.return === h2)
                break a;
              k2 = k2.return;
            }
            k2.sibling.return = k2.return;
            k2 = k2.sibling;
          }
      f2 ? (g2 = e2, h2 = c2.stateNode, 8 === g2.nodeType ? g2.parentNode.removeChild(h2) : g2.removeChild(h2)) : e2.removeChild(c2.stateNode);
    } else if (4 === c2.tag) {
      if (null !== c2.child) {
        e2 = c2.stateNode.containerInfo;
        f2 = true;
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
    } else if (bj(a, c2), null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
      4 === c2.tag && (d2 = false);
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function ij(a, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c2 = b2.updateQueue;
      c2 = null !== c2 ? c2.lastEffect : null;
      if (null !== c2) {
        var d2 = c2 = c2.next;
        do
          3 === (d2.tag & 3) && (a = d2.destroy, d2.destroy = void 0, void 0 !== a && a()), d2 = d2.next;
        while (d2 !== c2);
      }
      return;
    case 1:
      return;
    case 5:
      c2 = b2.stateNode;
      if (null != c2) {
        d2 = b2.memoizedProps;
        var e2 = null !== a ? a.memoizedProps : d2;
        a = b2.type;
        var f2 = b2.updateQueue;
        b2.updateQueue = null;
        if (null !== f2) {
          c2[xf] = d2;
          "input" === a && "radio" === d2.type && null != d2.name && $a(c2, d2);
          wb(a, e2);
          b2 = wb(a, d2);
          for (e2 = 0; e2 < f2.length; e2 += 2) {
            var g2 = f2[e2], h2 = f2[e2 + 1];
            "style" === g2 ? tb(c2, h2) : "dangerouslySetInnerHTML" === g2 ? ob(c2, h2) : "children" === g2 ? pb(c2, h2) : qa(c2, g2, h2, b2);
          }
          switch (a) {
            case "input":
              ab(c2, d2);
              break;
            case "textarea":
              ib(c2, d2);
              break;
            case "select":
              a = c2._wrapperState.wasMultiple, c2._wrapperState.wasMultiple = !!d2.multiple, f2 = d2.value, null != f2 ? fb(c2, !!d2.multiple, f2, false) : a !== !!d2.multiple && (null != d2.defaultValue ? fb(c2, !!d2.multiple, d2.defaultValue, true) : fb(c2, !!d2.multiple, d2.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (null === b2.stateNode)
        throw Error(y$1(162));
      b2.stateNode.nodeValue = b2.memoizedProps;
      return;
    case 3:
      c2 = b2.stateNode;
      c2.hydrate && (c2.hydrate = false, Cc(c2.containerInfo));
      return;
    case 12:
      return;
    case 13:
      null !== b2.memoizedState && (jj = O(), aj(b2.child, true));
      kj(b2);
      return;
    case 19:
      kj(b2);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b2, null !== b2.memoizedState);
      return;
  }
  throw Error(y$1(163));
}
function kj(a) {
  var b2 = a.updateQueue;
  if (null !== b2) {
    a.updateQueue = null;
    var c2 = a.stateNode;
    null === c2 && (c2 = a.stateNode = new Ui());
    b2.forEach(function(b3) {
      var d2 = lj.bind(null, a, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function mj(a, b2) {
  return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b2 = b2.memoizedState, null !== b2 && null === b2.dehydrated) : false;
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
    var b2 = 4186112 & ~Hj;
    b2 &= -b2;
    0 === b2 && (a = 4186112 & ~a, b2 = a & -a, 0 === b2 && (b2 = 8192));
    return b2;
  }
  a = eg();
  0 !== (X & 4) && 98 === a ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b2, c2) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y$1(185));
  a = Kj(a, b2);
  if (null === a)
    return null;
  $c(a, b2, c2);
  a === U && (Hi |= b2, 4 === V && Ii(a, W));
  var d2 = eg();
  1 === b2 ? 0 !== (X & 8) && 0 === (X & 48) ? Lj(a) : (Mj(a, c2), 0 === X && (wj(), ig())) : (0 === (X & 4) || 98 !== d2 && 99 !== d2 || (null === Cj ? Cj = /* @__PURE__ */ new Set([a]) : Cj.add(a)), Mj(a, c2));
  vj = a;
}
function Kj(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
function Mj(a, b2) {
  for (var c2 = a.callbackNode, d2 = a.suspendedLanes, e2 = a.pingedLanes, f2 = a.expirationTimes, g2 = a.pendingLanes; 0 < g2; ) {
    var h2 = 31 - Vc(g2), k2 = 1 << h2, l2 = f2[h2];
    if (-1 === l2) {
      if (0 === (k2 & d2) || 0 !== (k2 & e2)) {
        l2 = b2;
        Rc(k2);
        var n2 = F;
        f2[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b2 && (a.expiredLanes |= k2);
    g2 &= ~k2;
  }
  d2 = Uc(a, a === U ? W : 0);
  b2 = F;
  if (0 === d2)
    null !== c2 && (c2 !== Zf && Pf(c2), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (null !== c2) {
      if (a.callbackPriority === b2)
        return;
      c2 !== Zf && Pf(c2);
    }
    15 === b2 ? (c2 = Lj.bind(null, a), null === ag ? (ag = [c2], bg = Of(Uf, jg)) : ag.push(c2), c2 = Zf) : 14 === b2 ? c2 = hg(99, Lj.bind(null, a)) : (c2 = Tc(b2), c2 = hg(c2, Nj.bind(null, a)));
    a.callbackPriority = b2;
    a.callbackNode = c2;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if (0 !== (X & 48))
    throw Error(y$1(327));
  var b2 = a.callbackNode;
  if (Oj() && a.callbackNode !== b2)
    return null;
  var c2 = Uc(a, a === U ? W : 0);
  if (0 === c2)
    return null;
  var d2 = c2;
  var e2 = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a || W !== d2)
    wj(), Qj(a, d2);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e2;
  null !== Y ? d2 = 0 : (U = null, W = 0, d2 = V);
  if (0 !== (tj & Hi))
    Qj(a, 0);
  else if (0 !== d2) {
    2 === d2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c2 = Wc(a), 0 !== c2 && (d2 = Tj(a, c2)));
    if (1 === d2)
      throw b2 = sj, Qj(a, 0), Ii(a, c2), Mj(a, O()), b2;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c2;
    switch (d2) {
      case 0:
      case 1:
        throw Error(y$1(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c2);
        if ((c2 & 62914560) === c2 && (d2 = jj + 500 - O(), 10 < d2)) {
          if (0 !== Uc(a, 0))
            break;
          e2 = a.suspendedLanes;
          if ((e2 & c2) !== c2) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e2;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d2);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c2);
        if ((c2 & 4186112) === c2)
          break;
        d2 = a.eventTimes;
        for (e2 = -1; 0 < c2; ) {
          var g2 = 31 - Vc(c2);
          f2 = 1 << g2;
          g2 = d2[g2];
          g2 > e2 && (e2 = g2);
          c2 &= ~f2;
        }
        c2 = e2;
        c2 = O() - c2;
        c2 = (120 > c2 ? 120 : 480 > c2 ? 480 : 1080 > c2 ? 1080 : 1920 > c2 ? 1920 : 3e3 > c2 ? 3e3 : 4320 > c2 ? 4320 : 1960 * nj(c2 / 1960)) - c2;
        if (10 < c2) {
          a.timeoutHandle = of(Uj.bind(null, a), c2);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y$1(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b2 ? Nj.bind(null, a) : null;
}
function Ii(a, b2) {
  b2 &= ~uj;
  b2 &= ~Hi;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c2 = 31 - Vc(b2), d2 = 1 << c2;
    a[c2] = -1;
    b2 &= ~d2;
  }
}
function Lj(a) {
  if (0 !== (X & 48))
    throw Error(y$1(327));
  Oj();
  if (a === U && 0 !== (a.expiredLanes & W)) {
    var b2 = W;
    var c2 = Tj(a, b2);
    0 !== (tj & Hi) && (b2 = Uc(a, b2), c2 = Tj(a, b2));
  } else
    b2 = Uc(a, 0), c2 = Tj(a, b2);
  0 !== a.tag && 2 === c2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b2 = Wc(a), 0 !== b2 && (c2 = Tj(a, b2)));
  if (1 === c2)
    throw c2 = sj, Qj(a, 0), Ii(a, b2), Mj(a, O()), c2;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
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
function Wj(a, b2) {
  var c2 = X;
  X |= 1;
  try {
    return a(b2);
  } finally {
    X = c2, 0 === X && (wj(), ig());
  }
}
function Xj(a, b2) {
  var c2 = X;
  X &= -2;
  X |= 8;
  try {
    return a(b2);
  } finally {
    X = c2, 0 === X && (wj(), ig());
  }
}
function ni(a, b2) {
  I(rj, qj);
  qj |= b2;
  tj |= b2;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c2 = a.timeoutHandle;
  -1 !== c2 && (a.timeoutHandle = -1, pf(c2));
  if (null !== Y)
    for (c2 = Y.return; null !== c2; ) {
      var d2 = c2;
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d2);
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
          rg(d2);
          break;
        case 23:
        case 24:
          Ki();
      }
      c2 = c2.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b2;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b2) {
  do {
    var c2 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d2 = R.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (null === c2 || null === c2.return) {
        V = 1;
        sj = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = W;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2;
          if (0 === (h2.mode & 2)) {
            var n2 = h2.alternate;
            n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A2 = 0 !== (P.current & 1), p2 = g2;
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
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (1 === h2.tag)
                  if (null === h2.alternate)
                    h2.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h2, t2);
                  }
                h2.lanes |= 1;
                break a;
              }
              k2 = void 0;
              h2 = b2;
              var q2 = f2.pingCache;
              null === q2 ? (q2 = f2.pingCache = new Oi(), k2 = /* @__PURE__ */ new Set(), q2.set(l2, k2)) : (k2 = q2.get(l2), void 0 === k2 && (k2 = /* @__PURE__ */ new Set(), q2.set(l2, k2)));
              if (!k2.has(h2)) {
                k2.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b2;
              break a;
            }
            p2 = p2.return;
          } while (null !== p2);
          k2 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        5 !== V && (V = 2);
        k2 = Mi(k2, h2);
        p2 = g2;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k2;
              p2.flags |= 4096;
              b2 &= -b2;
              p2.lanes |= b2;
              var J2 = Pi(p2, f2, b2);
              Bg(p2, J2);
              break a;
            case 1:
              f2 = k2;
              var K2 = p2.type, Q2 = p2.stateNode;
              if (0 === (p2.flags & 64) && ("function" === typeof K2.getDerivedStateFromError || null !== Q2 && "function" === typeof Q2.componentDidCatch && (null === Ti || !Ti.has(Q2)))) {
                p2.flags |= 4096;
                b2 &= -b2;
                p2.lanes |= b2;
                var L2 = Si(p2, f2, b2);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (null !== p2);
      }
      Zj(c2);
    } catch (va) {
      b2 = va;
      Y === c2 && null !== c2 && (Y = c2 = c2.return);
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
function Tj(a, b2) {
  var c2 = X;
  X |= 16;
  var d2 = Pj();
  U === a && W === b2 || Qj(a, b2);
  do
    try {
      ak();
      break;
    } catch (e2) {
      Sj(a, e2);
    }
  while (1);
  qg();
  X = c2;
  oj.current = d2;
  if (null !== Y)
    throw Error(y$1(261));
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
  var b2 = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  null === b2 ? Zj(a) : Y = b2;
  pj.current = null;
}
function Zj(a) {
  var b2 = a;
  do {
    var c2 = b2.alternate;
    a = b2.return;
    if (0 === (b2.flags & 2048)) {
      c2 = Gi(c2, b2, qj);
      if (null !== c2) {
        Y = c2;
        return;
      }
      c2 = b2;
      if (24 !== c2.tag && 23 !== c2.tag || null === c2.memoizedState || 0 !== (qj & 1073741824) || 0 === (c2.mode & 4)) {
        for (var d2 = 0, e2 = c2.child; null !== e2; )
          d2 |= e2.lanes | e2.childLanes, e2 = e2.sibling;
        c2.childLanes = d2;
      }
      null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b2.firstEffect), null !== b2.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b2.firstEffect), a.lastEffect = b2.lastEffect), 1 < b2.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b2 : a.firstEffect = b2, a.lastEffect = b2));
    } else {
      c2 = Li(b2);
      if (null !== c2) {
        c2.flags &= 2047;
        Y = c2;
        return;
      }
      null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y = b2;
      return;
    }
    Y = b2 = a;
  } while (null !== b2);
  0 === V && (V = 5);
}
function Uj(a) {
  var b2 = eg();
  gg(99, dk.bind(null, a, b2));
  return null;
}
function dk(a, b2) {
  do
    Oj();
  while (null !== yj);
  if (0 !== (X & 48))
    throw Error(y$1(327));
  var c2 = a.finishedWork;
  if (null === c2)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c2 === a.current)
    throw Error(y$1(177));
  a.callbackNode = null;
  var d2 = c2.lanes | c2.childLanes, e2 = d2, f2 = a.pendingLanes & ~e2;
  a.pendingLanes = e2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e2;
  a.mutableReadLanes &= e2;
  a.entangledLanes &= e2;
  e2 = a.entanglements;
  for (var g2 = a.eventTimes, h2 = a.expirationTimes; 0 < f2; ) {
    var k2 = 31 - Vc(f2), l2 = 1 << k2;
    e2[k2] = 0;
    g2[k2] = -1;
    h2[k2] = -1;
    f2 &= ~l2;
  }
  null !== Cj && 0 === (d2 & 24) && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c2.flags ? null !== c2.lastEffect ? (c2.lastEffect.nextEffect = c2, d2 = c2.firstEffect) : d2 = c2 : d2 = c2.firstEffect;
  if (null !== d2) {
    e2 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h2 = { start: g2.selectionStart, end: g2.selectionEnd };
      else
        a:
          if (h2 = (h2 = g2.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && 0 !== l2.rangeCount) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k2 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k2.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x2 = 0, w2 = g2, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h2 || 0 !== f2 && 3 !== w2.nodeType || (A2 = n2 + f2);
                  w2 !== k2 || 0 !== l2 && 3 !== w2.nodeType || (p2 = n2 + l2);
                  3 === w2.nodeType && (n2 += w2.nodeValue.length);
                  if (null === (u2 = w2.firstChild))
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g2)
                    break b;
                  z2 === h2 && ++C2 === f2 && (A2 = n2);
                  z2 === k2 && ++x2 === l2 && (p2 = n2);
                  if (null !== (u2 = w2.nextSibling))
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h2 = -1 === A2 || -1 === p2 ? null : { start: A2, end: p2 };
          } else
            h2 = null;
      h2 = h2 || { start: 0, end: 0 };
    } else
      h2 = null;
    lf = { focusedElem: g2, selectionRange: h2 };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d2;
    do
      try {
        ek();
      } catch (va) {
        if (null === Z)
          throw Error(y$1(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (null !== Z);
    Ij = null;
    Z = d2;
    do
      try {
        for (g2 = a; null !== Z; ) {
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
              h2 = Z;
              cj(g2, h2);
              var J2 = h2.alternate;
              dj(h2);
              null !== J2 && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (null === Z)
          throw Error(y$1(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (null !== Z);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g2 = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      null !== g2 && Oe(t2) && (q2 = g2.start, v2 = g2.end, void 0 === v2 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t2.textContent.length, J2 = Math.min(g2.start, h2), g2 = void 0 === g2.end ? J2 : Math.min(g2.end, h2), !v2.extend && J2 > g2 && (h2 = g2, g2 = J2, J2 = h2), h2 = Le(t2, J2), f2 = Le(t2, g2), h2 && f2 && (1 !== v2.rangeCount || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q2 = q2.createRange(), q2.setStart(h2.node, h2.offset), v2.removeAllRanges(), J2 > g2 ? (v2.addRange(q2), v2.extend(f2.node, f2.offset)) : (q2.setEnd(f2.node, f2.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        1 === v2.nodeType && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      "function" === typeof t2.focus && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c2;
    Z = d2;
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
          throw Error(y$1(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (null !== Z);
    Z = null;
    $f();
    X = e2;
  } else
    a.current = c2;
  if (xj)
    xj = false, yj = a, zj = b2;
  else
    for (Z = d2; null !== Z; )
      b2 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b2;
  d2 = a.pendingLanes;
  0 === d2 && (Ti = null);
  1 === d2 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c2 = c2.stateNode;
  if (Mf && "function" === typeof Mf.onCommitFiberRoot)
    try {
      Mf.onCommitFiberRoot(Lf, c2, void 0, 64 === (c2.current.flags & 64));
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
    var b2 = Z.flags;
    0 !== (b2 & 256) && Xi(a, Z);
    0 === (b2 & 512) || xj || (xj = true, hg(97, function() {
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
function $i(a, b2) {
  Aj.push(b2, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b2) {
  Bj.push(b2, a);
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
    throw Error(y$1(331));
  var b2 = X;
  X |= 32;
  var c2 = Bj;
  Bj = [];
  for (var d2 = 0; d2 < c2.length; d2 += 2) {
    var e2 = c2[d2], f2 = c2[d2 + 1], g2 = e2.destroy;
    e2.destroy = void 0;
    if ("function" === typeof g2)
      try {
        g2();
      } catch (k2) {
        if (null === f2)
          throw Error(y$1(330));
        Wi(f2, k2);
      }
  }
  c2 = Aj;
  Aj = [];
  for (d2 = 0; d2 < c2.length; d2 += 2) {
    e2 = c2[d2];
    f2 = c2[d2 + 1];
    try {
      var h2 = e2.create;
      e2.destroy = h2();
    } catch (k2) {
      if (null === f2)
        throw Error(y$1(330));
      Wi(f2, k2);
    }
  }
  for (h2 = a.current.firstEffect; null !== h2; )
    a = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a;
  X = b2;
  ig();
  return true;
}
function gk(a, b2, c2) {
  b2 = Mi(c2, b2);
  b2 = Pi(a, b2, 1);
  Ag(a, b2);
  b2 = Hg();
  a = Kj(a, 1);
  null !== a && ($c(a, 1, b2), Mj(a, b2));
}
function Wi(a, b2) {
  if (3 === a.tag)
    gk(a, a, b2);
  else
    for (var c2 = a.return; null !== c2; ) {
      if (3 === c2.tag) {
        gk(c2, a, b2);
        break;
      } else if (1 === c2.tag) {
        var d2 = c2.stateNode;
        if ("function" === typeof c2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ti || !Ti.has(d2))) {
          a = Mi(b2, a);
          var e2 = Si(c2, a, 1);
          Ag(c2, e2);
          e2 = Hg();
          c2 = Kj(c2, 1);
          if (null !== c2)
            $c(c2, 1, e2), Mj(c2, e2);
          else if ("function" === typeof d2.componentDidCatch && (null === Ti || !Ti.has(d2)))
            try {
              d2.componentDidCatch(b2, a);
            } catch (f2) {
            }
          break;
        }
      }
      c2 = c2.return;
    }
}
function Yj(a, b2, c2) {
  var d2 = a.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = Hg();
  a.pingedLanes |= a.suspendedLanes & c2;
  U === a && (W & c2) === c2 && (4 === V || 3 === V && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c2);
  Mj(a, b2);
}
function lj(a, b2) {
  var c2 = a.stateNode;
  null !== c2 && c2.delete(b2);
  b2 = 0;
  0 === b2 && (b2 = a.mode, 0 === (b2 & 2) ? b2 = 1 : 0 === (b2 & 4) ? b2 = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b2 = Yc(62914560 & ~Gj), 0 === b2 && (b2 = 4194304)));
  c2 = Hg();
  a = Kj(a, b2);
  null !== a && ($c(a, b2, c2), Mj(a, c2));
}
var ck;
ck = function(a, b2, c2) {
  var d2 = b2.lanes;
  if (null !== a)
    if (a.memoizedProps !== b2.pendingProps || N.current)
      ug = true;
    else if (0 !== (c2 & d2))
      ug = 0 !== (a.flags & 16384) ? true : false;
    else {
      ug = false;
      switch (b2.tag) {
        case 3:
          ri(b2);
          sh();
          break;
        case 5:
          gh(b2);
          break;
        case 1:
          Ff(b2.type) && Jf(b2);
          break;
        case 4:
          eh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          d2 = b2.memoizedProps.value;
          var e2 = b2.type._context;
          I(mg, e2._currentValue);
          e2._currentValue = d2;
          break;
        case 13:
          if (null !== b2.memoizedState) {
            if (0 !== (c2 & b2.child.childLanes))
              return ti(a, b2, c2);
            I(P, P.current & 1);
            b2 = hi(a, b2, c2);
            return null !== b2 ? b2.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d2 = 0 !== (c2 & b2.childLanes);
          if (0 !== (a.flags & 64)) {
            if (d2)
              return Ai(a, b2, c2);
            b2.flags |= 64;
          }
          e2 = b2.memoizedState;
          null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          I(P, P.current);
          if (d2)
            break;
          else
            return null;
        case 23:
        case 24:
          return b2.lanes = 0, mi(a, b2, c2);
      }
      return hi(a, b2, c2);
    }
  else
    ug = false;
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      d2 = b2.type;
      null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
      a = b2.pendingProps;
      e2 = Ef(b2, M.current);
      tg(b2, c2);
      e2 = Ch(null, b2, d2, a, e2, c2);
      b2.flags |= 1;
      if ("object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof) {
        b2.tag = 1;
        b2.memoizedState = null;
        b2.updateQueue = null;
        if (Ff(d2)) {
          var f2 = true;
          Jf(b2);
        } else
          f2 = false;
        b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null;
        xg(b2);
        var g2 = d2.getDerivedStateFromProps;
        "function" === typeof g2 && Gg(b2, d2, g2, a);
        e2.updater = Kg;
        b2.stateNode = e2;
        e2._reactInternals = b2;
        Og(b2, d2, a, c2);
        b2 = qi(null, b2, d2, true, f2, c2);
      } else
        b2.tag = 0, fi(null, b2, e2, c2), b2 = b2.child;
      return b2;
    case 16:
      e2 = b2.elementType;
      a: {
        null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
        a = b2.pendingProps;
        f2 = e2._init;
        e2 = f2(e2._payload);
        b2.type = e2;
        f2 = b2.tag = hk(e2);
        a = lg(e2, a);
        switch (f2) {
          case 0:
            b2 = li(null, b2, e2, a, c2);
            break a;
          case 1:
            b2 = pi(null, b2, e2, a, c2);
            break a;
          case 11:
            b2 = gi(null, b2, e2, a, c2);
            break a;
          case 14:
            b2 = ii(null, b2, e2, lg(e2.type, a), d2, c2);
            break a;
        }
        throw Error(y$1(306, e2, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), li(a, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), pi(a, b2, d2, e2, c2);
    case 3:
      ri(b2);
      d2 = b2.updateQueue;
      if (null === a || null === d2)
        throw Error(y$1(282));
      d2 = b2.pendingProps;
      e2 = b2.memoizedState;
      e2 = null !== e2 ? e2.element : null;
      yg(a, b2);
      Cg(b2, d2, null, c2);
      d2 = b2.memoizedState.element;
      if (d2 === e2)
        sh(), b2 = hi(a, b2, c2);
      else {
        e2 = b2.stateNode;
        if (f2 = e2.hydrate)
          kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f2 = lh = true;
        if (f2) {
          a = e2.mutableSourceEagerHydrationData;
          if (null != a)
            for (e2 = 0; e2 < a.length; e2 += 2)
              f2 = a[e2], f2._workInProgressVersionPrimary = a[e2 + 1], th.push(f2);
          c2 = Zg(b2, null, d2, c2);
          for (b2.child = c2; c2; )
            c2.flags = c2.flags & -3 | 1024, c2 = c2.sibling;
        } else
          fi(a, b2, d2, c2), sh();
        b2 = b2.child;
      }
      return b2;
    case 5:
      return gh(b2), null === a && ph(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, nf(d2, e2) ? g2 = null : null !== f2 && nf(d2, f2) && (b2.flags |= 16), oi(a, b2), fi(a, b2, g2, c2), b2.child;
    case 6:
      return null === a && ph(b2), null;
    case 13:
      return ti(a, b2, c2);
    case 4:
      return eh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Yg(b2, null, d2, c2) : fi(a, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), gi(a, b2, d2, e2, c2);
    case 7:
      return fi(a, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return fi(
        a,
        b2,
        b2.pendingProps.children,
        c2
      ), b2.child;
    case 12:
      return fi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        g2 = b2.memoizedProps;
        f2 = e2.value;
        var h2 = b2.type._context;
        I(mg, h2._currentValue);
        h2._currentValue = f2;
        if (null !== g2)
          if (h2 = g2.value, f2 = He(h2, f2) ? 0 : ("function" === typeof d2._calculateChangedBits ? d2._calculateChangedBits(h2, f2) : 1073741823) | 0, 0 === f2) {
            if (g2.children === e2.children && !N.current) {
              b2 = hi(a, b2, c2);
              break a;
            }
          } else
            for (h2 = b2.child, null !== h2 && (h2.return = b2); null !== h2; ) {
              var k2 = h2.dependencies;
              if (null !== k2) {
                g2 = h2.child;
                for (var l2 = k2.firstContext; null !== l2; ) {
                  if (l2.context === d2 && 0 !== (l2.observedBits & f2)) {
                    1 === h2.tag && (l2 = zg(-1, c2 & -c2), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c2;
                    l2 = h2.alternate;
                    null !== l2 && (l2.lanes |= c2);
                    sg(h2.return, c2);
                    k2.lanes |= c2;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g2 = 10 === h2.tag ? h2.type === b2.type ? null : h2.child : h2.child;
              if (null !== g2)
                g2.return = h2;
              else
                for (g2 = h2; null !== g2; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  h2 = g2.sibling;
                  if (null !== h2) {
                    h2.return = g2.return;
                    g2 = h2;
                    break;
                  }
                  g2 = g2.return;
                }
              h2 = g2;
            }
        fi(a, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, f2 = b2.pendingProps, d2 = f2.children, tg(b2, c2), e2 = vg(
        e2,
        f2.unstable_observedBits
      ), d2 = d2(e2), b2.flags |= 1, fi(a, b2, d2, c2), b2.child;
    case 14:
      return e2 = b2.type, f2 = lg(e2, b2.pendingProps), f2 = lg(e2.type, f2), ii(a, b2, e2, f2, d2, c2);
    case 15:
      return ki(a, b2, b2.type, b2.pendingProps, d2, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d2) ? (a = true, Jf(b2)) : a = false, tg(b2, c2), Mg(b2, d2, e2), Og(b2, d2, e2, c2), qi(null, b2, d2, true, a, c2);
    case 19:
      return Ai(a, b2, c2);
    case 23:
      return mi(a, b2, c2);
    case 24:
      return mi(a, b2, c2);
  }
  throw Error(y$1(156, b2.tag));
};
function ik(a, b2, c2, d2) {
  this.tag = a;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b2, c2, d2) {
  return new ik(a, b2, c2, d2);
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
function Tg(a, b2) {
  var c2 = a.alternate;
  null === c2 ? (c2 = nh(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.nextEffect = null, c2.firstEffect = null, c2.lastEffect = null);
  c2.childLanes = a.childLanes;
  c2.lanes = a.lanes;
  c2.child = a.child;
  c2.memoizedProps = a.memoizedProps;
  c2.memoizedState = a.memoizedState;
  c2.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a.sibling;
  c2.index = a.index;
  c2.ref = a.ref;
  return c2;
}
function Vg(a, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a;
  if ("function" === typeof a)
    ji(a) && (g2 = 1);
  else if ("string" === typeof a)
    g2 = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c2.children, e2, f2, b2);
        case Ha:
          g2 = 8;
          e2 |= 16;
          break;
        case wa:
          g2 = 8;
          e2 |= 1;
          break;
        case xa:
          return a = nh(12, c2, b2, e2 | 8), a.elementType = xa, a.type = xa, a.lanes = f2, a;
        case Ba:
          return a = nh(13, c2, b2, e2), a.type = Ba, a.elementType = Ba, a.lanes = f2, a;
        case Ca:
          return a = nh(19, c2, b2, e2), a.elementType = Ca, a.lanes = f2, a;
        case Ia:
          return vi(c2, e2, f2, b2);
        case Ja:
          return a = nh(24, c2, b2, e2), a.elementType = Ja, a.lanes = f2, a;
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d2 = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y$1(130, null == a ? a : typeof a, ""));
      }
  b2 = nh(g2, c2, b2, e2);
  b2.elementType = a;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Xg(a, b2, c2, d2) {
  a = nh(7, a, d2, b2);
  a.lanes = c2;
  return a;
}
function vi(a, b2, c2, d2) {
  a = nh(23, a, d2, b2);
  a.elementType = Ia;
  a.lanes = c2;
  return a;
}
function Ug(a, b2, c2) {
  a = nh(6, a, null, b2);
  a.lanes = c2;
  return a;
}
function Wg(a, b2, c2) {
  b2 = nh(4, null !== a.children ? a.children : [], a.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function jk(a, b2, c2) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c2;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: ta, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
}
function lk(a, b2, c2, d2) {
  var e2 = b2.current, f2 = Hg(), g2 = Ig(e2);
  a:
    if (c2) {
      c2 = c2._reactInternals;
      b: {
        if (Zb(c2) !== c2 || 1 !== c2.tag)
          throw Error(y$1(170));
        var h2 = c2;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (null !== h2);
        throw Error(y$1(171));
      }
      if (1 === c2.tag) {
        var k2 = c2.type;
        if (Ff(k2)) {
          c2 = If(c2, k2, h2);
          break a;
        }
      }
      c2 = h2;
    } else
      c2 = Cf;
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = { element: a };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  Ag(e2, b2);
  Jg(e2, g2, f2);
  return g2;
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
function nk(a, b2) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c2 = a.retryLane;
    a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function ok(a, b2) {
  nk(a, b2);
  (a = a.alternate) && nk(a, b2);
}
function pk() {
  return null;
}
function qk(a, b2, c2) {
  var d2 = null != c2 && null != c2.hydrationOptions && c2.hydrationOptions.mutableSources || null;
  c2 = new jk(a, b2, null != c2 && true === c2.hydrate);
  b2 = nh(3, null, null, 2 === b2 ? 7 : 1 === b2 ? 3 : 0);
  c2.current = b2;
  b2.stateNode = c2;
  xg(b2);
  a[ff] = c2.current;
  cf(8 === a.nodeType ? a.parentNode : a);
  if (d2)
    for (a = 0; a < d2.length; a++) {
      b2 = d2[a];
      var e2 = b2._getVersion;
      e2 = e2(b2._source);
      null == c2.mutableSourceEagerHydrationData ? c2.mutableSourceEagerHydrationData = [b2, e2] : c2.mutableSourceEagerHydrationData.push(b2, e2);
    }
  this._internalRoot = c2;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b2 = a.containerInfo;
  lk(null, a, null, function() {
    b2[ff] = null;
  });
};
function rk(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function sk(a, b2) {
  b2 || (b2 = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b2 = !(!b2 || 1 !== b2.nodeType || !b2.hasAttribute("data-reactroot")));
  if (!b2)
    for (var c2; c2 = a.lastChild; )
      a.removeChild(c2);
  return new qk(a, 0, b2 ? { hydrate: true } : void 0);
}
function tk(a, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2._internalRoot;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a2 = mk(g2);
        h2.call(a2);
      };
    }
    lk(b2, g2, a, e2);
  } else {
    f2 = c2._reactRootContainer = sk(c2, d2);
    g2 = f2._internalRoot;
    if ("function" === typeof e2) {
      var k2 = e2;
      e2 = function() {
        var a2 = mk(g2);
        k2.call(a2);
      };
    }
    Xj(function() {
      lk(b2, g2, a, e2);
    });
  }
  return mk(g2);
}
ec = function(a) {
  if (13 === a.tag) {
    var b2 = Hg();
    Jg(a, 4, b2);
    ok(a, 4);
  }
};
fc = function(a) {
  if (13 === a.tag) {
    var b2 = Hg();
    Jg(a, 67108864, b2);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (13 === a.tag) {
    var b2 = Hg(), c2 = Ig(a);
    Jg(a, c2, b2);
    ok(a, c2);
  }
};
hc = function(a, b2) {
  return b2();
};
yb = function(a, b2, c2) {
  switch (b2) {
    case "input":
      ab(a, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a && d2.form === a.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(y$1(90));
            Wa(d2);
            ab(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
  }
};
Gb = Wj;
Hb = function(a, b2, c2, d2, e2) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b2, c2, d2, e2));
  } finally {
    X = f2, 0 === X && (wj(), ig());
  }
};
Ib = function() {
  0 === (X & 49) && (Vj(), Oj());
};
Jb = function(a, b2) {
  var c2 = X;
  X |= 2;
  try {
    return a(b2);
  } finally {
    X = c2, 0 === X && (wj(), ig());
  }
};
function uk(a, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!rk(b2))
    throw Error(y$1(200));
  return kk(a, b2, null, c2);
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
  var b2 = a._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a.render)
      throw Error(y$1(188));
    throw Error(y$1(268, Object.keys(a)));
  }
  a = cc(b2);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b2) {
  var c2 = X;
  if (0 !== (c2 & 48))
    return a(b2);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b2));
  } finally {
    X = c2, ig();
  }
};
reactDom_production_min.hydrate = function(a, b2, c2) {
  if (!rk(b2))
    throw Error(y$1(200));
  return tk(null, a, b2, true, c2);
};
reactDom_production_min.render = function(a, b2, c2) {
  if (!rk(b2))
    throw Error(y$1(200));
  return tk(null, a, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y$1(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a, b2) {
  return uk(a, b2, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
  if (!rk(c2))
    throw Error(y$1(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(y$1(38));
  return tk(a, b2, c2, false, d2);
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
var Video = React$1.memo(function Video2(props) {
  console.log(props);
  var img_tag = new Image();
  let date = new Date().getTime();
  let previewEndpoint;
  let imageRefreshRate = 700;
  let videoTimer;
  react.exports.useEffect(() => {
    videoTimer = setInterval(() => {
      previewEndpoint = props.previewImageRoute + "?t=" + date++;
      img_tag.onload = function() {
        document.getElementById(
          "video-preview"
        ).style.backgroundImage = `url(${previewEndpoint})`;
      };
      img_tag.src = previewEndpoint;
      return () => {
        clearInterval(videoTimer);
      };
    }, imageRefreshRate);
    return () => {
      clearInterval(videoTimer);
    };
  }, []);
  return /* @__PURE__ */ React$1.createElement("div", {
    id: "video-preview",
    className: "video"
  });
});
function Button(props) {
  let button;
  let action;
  let styles2 = {};
  let size = "";
  if (props.size) {
    if (props.size === "big") {
      size = "big-button";
    } else if (props.size === "giant") {
      size = "giant-button";
    } else if (props.size === "small") {
      size = "small-button";
    }
  }
  if (props.backgroundColor) {
    styles2 = { backgroundColor: props.backgroundColor };
  }
  if (props.action === "toggleStreaming") {
    if (props.label === "Start Streaming") {
      action = "startStreaming";
    } else if (props.label === "Stop Streaming") {
      action = "stopStreaming";
      styles2 = { backgroundColor: "#b71c1c", color: "white" };
    }
    button = /* @__PURE__ */ React$1.createElement("div", {
      className: "giant-button-container"
    }, /* @__PURE__ */ React$1.createElement("button", {
      onClick: () => {
        props.buttonPressed(
          action,
          null,
          props.port,
          props.host
        );
      },
      className: "giant-button",
      style: styles2
    }, props.label));
  } else if (props.action === "submitLocalForm") {
    if (props.postEndpoint) {
      button = /* @__PURE__ */ React$1.createElement("p", {
        className: "fields"
      }, /* @__PURE__ */ React$1.createElement("input", {
        "data-postendpoint": props.postEndpoint,
        style: styles2,
        type: "submit",
        value: props.label
      }));
    } else {
      button = /* @__PURE__ */ React$1.createElement("p", {
        className: "fields"
      }, /* @__PURE__ */ React$1.createElement("span", {
        className: "error-text"
      }, "Post endpoint is missing in template is required for forms"));
    }
  } else if (props.action === "redirect") {
    if (props.redirectURL !== void 0) {
      button = /* @__PURE__ */ React$1.createElement("p", {
        className: "fields"
      }, /* @__PURE__ */ React$1.createElement("a", {
        style: styles2,
        className: size,
        target: "_blank",
        href: props.redirectURL
      }, props.label));
    } else {
      button = /* @__PURE__ */ React$1.createElement("span", {
        style: { color: "red", marginLeft: "30px" }
      }, "A redirectURL parameter in the template is required for button redirect.");
    }
  } else {
    button = /* @__PURE__ */ React$1.createElement("p", {
      className: "fields"
    }, /* @__PURE__ */ React$1.createElement("button", {
      style: styles2,
      className: size,
      onClick: () => {
        props.buttonPressed(props.action);
      }
    }, props.label));
  }
  return button;
}
const endpoint$2 = location.origin;
function replaceJSONParams(endpoint2, object) {
  let objectEntries = Object.entries(object);
  if (objectEntries.length > 0) {
    for (let [key, val] of objectEntries) {
      let searchKey = `@${key}@`;
      if (endpoint2.indexOf(searchKey) !== -1) {
        endpoint2 = endpoint2.replace(searchKey, val);
      }
    }
  }
  return endpoint2;
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
async function setDecoderIPToServerIP(sessionServerIP, customPort, customHost) {
  let tempEndpoint = "";
  if (customPort !== void 0) {
    tempEndpoint = `/REST/encoder/${customPort}/network`;
  } else {
    tempEndpoint = "/REST/encoder/network";
  }
  await POSTData(
    (customHost !== void 0 ? customHost : endpoint$2) + tempEndpoint,
    {
      val_list: [{ cname: "decoderIP", val: sessionServerIP }]
    }
  ).then((data2) => {
    console.log(
      "Data POSTED to " + endpoint$2 + tempEndpoint + ": " + JSON.stringify(data2)
    );
  });
}
async function getPropertyFromAPI(cname, route, customHost) {
  let response = "";
  {
    if (customHost !== void 0) {
      response = await fetch(customHost + route);
    } else {
      response = await fetch(endpoint$2 + route);
    }
  }
  let result = await response.json();
  return result.current_stat.filter((obj) => obj.cname === cname)[0].val;
}
async function POSTData(url = "", data2 = {}) {
  let formData = new FormData();
  formData.append("c", JSON.stringify(data2));
  const response = await fetch(url, {
    method: "POST",
    body: formData
  });
  return response.json();
}
async function getStreamingStatus() {
  let streamingStatusResponse = "";
  {
    streamingStatusResponse = await fetch(endpoint$2 + "/REST/encoder/status");
  }
  let streamStatusResult = await streamingStatusResponse.json();
  return streamStatusResult.current_stat.filter(
    (obj) => obj.cname === "isStreaming"
  )[0].val;
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
  let token2;
  if (urlParams.get("user") && urlParams.get("token")) {
    user = urlParams.get("user");
    token2 = urlParams.get("token");
  } else {
    if (localStorage.getItem("user") && localStorage.getItem("token")) {
      user = localStorage.getItem("user").toLowerCase();
      token2 = localStorage.getItem("token");
    }
  }
  const endpoint2 = location.origin;
  let formData = new FormData();
  formData.append("username", user.toLowerCase());
  formData.append("token", token2);
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
async function authenticate() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let user;
  let token2;
  if (urlParams.get("user") && urlParams.get("token")) {
    user = urlParams.get("user");
    token2 = urlParams.get("token");
  } else {
    if (localStorage.getItem("user") && localStorage.getItem("user").toLowerCase() && localStorage.getItem("token")) {
      user = localStorage.getItem("user").toLowerCase();
      token2 = localStorage.getItem("token");
    } else {
      return false;
    }
  }
  const endpoint2 = location.origin;
  let formData = new FormData();
  formData.append("username", user.toLowerCase());
  formData.append("token", token2);
  formData.append("fromreact", 1);
  let response;
  {
    response = await fetch(endpoint2 + "/sbuiauth/auth.php", {
      method: "POST",
      body: formData
    });
  }
  let json = await response.text();
  let [loginStatus] = JSON.parse(json);
  if (loginStatus === "login success") {
    localStorage.setItem("user", user.toLowerCase());
    localStorage.setItem("token", token2);
    return true;
  } else if (loginStatus === "login failure") {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    return false;
  } else {
    alert("Something went wrong with the authentication server");
  }
}
async function setNetwork1Api(enc_key, customPort, customHost) {
  let tempEndpoint = "";
  if (customPort !== void 0) {
    tempEndpoint = `/REST/encoder/${customPort}/metadata`;
  } else {
    tempEndpoint = "/REST/encoder/metadata";
  }
  await POSTData(
    (customHost !== void 0 ? customHost : endpoint$2) + tempEndpoint,
    {
      val_list: [{ cname: "Meta_Network1", val: enc_key }]
    }
  ).then((data2) => {
    console.log(
      "Data POSTED to " + endpoint$2 + tempEndpoint + ": " + JSON.stringify(data2)
    );
  });
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
  var _FF = function(a2, b22, c22, d22, x22, s, ac2) {
    a2 = addUnsigned(a2, addUnsigned(addUnsigned(_F(b22, c22, d22), x22), ac2));
    return addUnsigned(rotateLeft(a2, s), b22);
  };
  var _GG = function(a2, b22, c22, d22, x22, s, ac2) {
    a2 = addUnsigned(a2, addUnsigned(addUnsigned(_G(b22, c22, d22), x22), ac2));
    return addUnsigned(rotateLeft(a2, s), b22);
  };
  var _HH = function(a2, b22, c22, d22, x22, s, ac2) {
    a2 = addUnsigned(a2, addUnsigned(addUnsigned(_H(b22, c22, d22), x22), ac2));
    return addUnsigned(rotateLeft(a2, s), b22);
  };
  var _II = function(a2, b22, c22, d22, x22, s, ac2) {
    a2 = addUnsigned(a2, addUnsigned(addUnsigned(_I(b22, c22, d22), x22), ac2));
    return addUnsigned(rotateLeft(a2, s), b22);
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
  var x2 = [], k2, AA, BB, CC, DD, a, b2, c2, d2, S11 = 7, S12 = 12, S13 = 17, S14 = 22, S21 = 5, S22 = 9, S23 = 14, S24 = 20, S31 = 4, S32 = 11, S33 = 16, S34 = 23, S41 = 6, S42 = 10, S43 = 15, S44 = 21;
  str = str;
  x2 = convertToWordArray(str);
  a = 1732584193;
  b2 = 4023233417;
  c2 = 2562383102;
  d2 = 271733878;
  xl = x2.length;
  for (k2 = 0; k2 < xl; k2 += 16) {
    AA = a;
    BB = b2;
    CC = c2;
    DD = d2;
    a = _FF(a, b2, c2, d2, x2[k2 + 0], S11, 3614090360);
    d2 = _FF(d2, a, b2, c2, x2[k2 + 1], S12, 3905402710);
    c2 = _FF(c2, d2, a, b2, x2[k2 + 2], S13, 606105819);
    b2 = _FF(b2, c2, d2, a, x2[k2 + 3], S14, 3250441966);
    a = _FF(a, b2, c2, d2, x2[k2 + 4], S11, 4118548399);
    d2 = _FF(d2, a, b2, c2, x2[k2 + 5], S12, 1200080426);
    c2 = _FF(c2, d2, a, b2, x2[k2 + 6], S13, 2821735955);
    b2 = _FF(b2, c2, d2, a, x2[k2 + 7], S14, 4249261313);
    a = _FF(a, b2, c2, d2, x2[k2 + 8], S11, 1770035416);
    d2 = _FF(d2, a, b2, c2, x2[k2 + 9], S12, 2336552879);
    c2 = _FF(c2, d2, a, b2, x2[k2 + 10], S13, 4294925233);
    b2 = _FF(b2, c2, d2, a, x2[k2 + 11], S14, 2304563134);
    a = _FF(a, b2, c2, d2, x2[k2 + 12], S11, 1804603682);
    d2 = _FF(d2, a, b2, c2, x2[k2 + 13], S12, 4254626195);
    c2 = _FF(c2, d2, a, b2, x2[k2 + 14], S13, 2792965006);
    b2 = _FF(b2, c2, d2, a, x2[k2 + 15], S14, 1236535329);
    a = _GG(a, b2, c2, d2, x2[k2 + 1], S21, 4129170786);
    d2 = _GG(d2, a, b2, c2, x2[k2 + 6], S22, 3225465664);
    c2 = _GG(c2, d2, a, b2, x2[k2 + 11], S23, 643717713);
    b2 = _GG(b2, c2, d2, a, x2[k2 + 0], S24, 3921069994);
    a = _GG(a, b2, c2, d2, x2[k2 + 5], S21, 3593408605);
    d2 = _GG(d2, a, b2, c2, x2[k2 + 10], S22, 38016083);
    c2 = _GG(c2, d2, a, b2, x2[k2 + 15], S23, 3634488961);
    b2 = _GG(b2, c2, d2, a, x2[k2 + 4], S24, 3889429448);
    a = _GG(a, b2, c2, d2, x2[k2 + 9], S21, 568446438);
    d2 = _GG(d2, a, b2, c2, x2[k2 + 14], S22, 3275163606);
    c2 = _GG(c2, d2, a, b2, x2[k2 + 3], S23, 4107603335);
    b2 = _GG(b2, c2, d2, a, x2[k2 + 8], S24, 1163531501);
    a = _GG(a, b2, c2, d2, x2[k2 + 13], S21, 2850285829);
    d2 = _GG(d2, a, b2, c2, x2[k2 + 2], S22, 4243563512);
    c2 = _GG(c2, d2, a, b2, x2[k2 + 7], S23, 1735328473);
    b2 = _GG(b2, c2, d2, a, x2[k2 + 12], S24, 2368359562);
    a = _HH(a, b2, c2, d2, x2[k2 + 5], S31, 4294588738);
    d2 = _HH(d2, a, b2, c2, x2[k2 + 8], S32, 2272392833);
    c2 = _HH(c2, d2, a, b2, x2[k2 + 11], S33, 1839030562);
    b2 = _HH(b2, c2, d2, a, x2[k2 + 14], S34, 4259657740);
    a = _HH(a, b2, c2, d2, x2[k2 + 1], S31, 2763975236);
    d2 = _HH(d2, a, b2, c2, x2[k2 + 4], S32, 1272893353);
    c2 = _HH(c2, d2, a, b2, x2[k2 + 7], S33, 4139469664);
    b2 = _HH(b2, c2, d2, a, x2[k2 + 10], S34, 3200236656);
    a = _HH(a, b2, c2, d2, x2[k2 + 13], S31, 681279174);
    d2 = _HH(d2, a, b2, c2, x2[k2 + 0], S32, 3936430074);
    c2 = _HH(c2, d2, a, b2, x2[k2 + 3], S33, 3572445317);
    b2 = _HH(b2, c2, d2, a, x2[k2 + 6], S34, 76029189);
    a = _HH(a, b2, c2, d2, x2[k2 + 9], S31, 3654602809);
    d2 = _HH(d2, a, b2, c2, x2[k2 + 12], S32, 3873151461);
    c2 = _HH(c2, d2, a, b2, x2[k2 + 15], S33, 530742520);
    b2 = _HH(b2, c2, d2, a, x2[k2 + 2], S34, 3299628645);
    a = _II(a, b2, c2, d2, x2[k2 + 0], S41, 4096336452);
    d2 = _II(d2, a, b2, c2, x2[k2 + 7], S42, 1126891415);
    c2 = _II(c2, d2, a, b2, x2[k2 + 14], S43, 2878612391);
    b2 = _II(b2, c2, d2, a, x2[k2 + 5], S44, 4237533241);
    a = _II(a, b2, c2, d2, x2[k2 + 12], S41, 1700485571);
    d2 = _II(d2, a, b2, c2, x2[k2 + 3], S42, 2399980690);
    c2 = _II(c2, d2, a, b2, x2[k2 + 10], S43, 4293915773);
    b2 = _II(b2, c2, d2, a, x2[k2 + 1], S44, 2240044497);
    a = _II(a, b2, c2, d2, x2[k2 + 8], S41, 1873313359);
    d2 = _II(d2, a, b2, c2, x2[k2 + 15], S42, 4264355552);
    c2 = _II(c2, d2, a, b2, x2[k2 + 6], S43, 2734768916);
    b2 = _II(b2, c2, d2, a, x2[k2 + 13], S44, 1309151649);
    a = _II(a, b2, c2, d2, x2[k2 + 4], S41, 4149444226);
    d2 = _II(d2, a, b2, c2, x2[k2 + 11], S42, 3174756917);
    c2 = _II(c2, d2, a, b2, x2[k2 + 2], S43, 718787259);
    b2 = _II(b2, c2, d2, a, x2[k2 + 9], S44, 3951481745);
    a = addUnsigned(a, AA);
    b2 = addUnsigned(b2, BB);
    c2 = addUnsigned(c2, CC);
    d2 = addUnsigned(d2, DD);
  }
  var temp = wordToHex(a) + wordToHex(b2) + wordToHex(c2) + wordToHex(d2);
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
  ).catch((e2) => {
    document.querySelector(".no-session-msg").textContent = "The Server is Down...";
    console.log("The server is down");
  });
  let result = await response.text();
  let parser = new DOMParser();
  let xmlDoc = parser.parseFromString(result, "text/xml");
  let parsedXML = xmlDoc.getElementsByTagName("body")[0];
  return parsedXML.getAttribute("result");
}
var Input$1 = React$1.memo(function Input2(props) {
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "input-div"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: "input-label"
  }, props.label, ": "), /* @__PURE__ */ React$1.createElement("input", {
    className: "input-box",
    name: props.name,
    type: "input",
    defaultValue: props.value
  }), /* @__PURE__ */ React$1.createElement("span", {
    className: "endLabel"
  }, props.endLabel));
});
var Checkbox = React$1.memo(function Checkbox2(props) {
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "input-div"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: "input-label"
  }, props.label, ": "), /* @__PURE__ */ React$1.createElement("input", {
    type: "checkbox",
    defaultChecked: props.checked
  }));
});
var Select$2 = React$1.memo(function Select2(props) {
  let options2;
  let subValues = props.subValues;
  let valLabels = props.valLabels;
  const presetObj = props.presetObj;
  let value = props.value;
  if (presetObj) {
    options2 = presetObj.preset_list.map((preset, index2) => {
      if (preset.pid == localStorage.getItem("presetPID")) {
        return /* @__PURE__ */ React$1.createElement("option", {
          key: `preset-select-${index2}`,
          selected: true,
          value: preset.pid
        }, preset.pname);
      }
      return /* @__PURE__ */ React$1.createElement("option", {
        key: `preset-select-${index2}`,
        value: preset.pid
      }, preset.pname);
    });
    if (localStorage.getItem("presetPID") === "custom") {
      options2.unshift(
        /* @__PURE__ */ React$1.createElement("option", {
          key: "preset-obj-option-default",
          value: "custom"
        }, "Custom")
      );
    } else {
      options2.unshift(
        /* @__PURE__ */ React$1.createElement("option", {
          key: "preset-obj-option-default",
          value: "not-selected"
        }, "Choose One")
      );
    }
  } else {
    options2 = subValues.map((subValue, index2) => /* @__PURE__ */ React$1.createElement("option", {
      key: `preset-options-${index2}`,
      value: subValue
    }, valLabels[index2]));
  }
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "input-div"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "label-div input-label"
  }, /* @__PURE__ */ React$1.createElement("label", {
    className: ""
  }, props.label, ": ")), presetObj ? /* @__PURE__ */ React$1.createElement("select", {
    id: "preset-select"
  }, options2) : /* @__PURE__ */ React$1.createElement("select", {
    name: props.name,
    defaultValue: value
  }, options2));
});
function Form(props) {
  return /* @__PURE__ */ React$1.createElement("form", {
    onSubmit: props.handleFormSubmit
  }, props.mappedFields);
}
function SingleMeter({ volLevel, vuIndex }) {
  function vumeter(elem, config) {
    var max2 = config.max || 100;
    var boxCount = config.boxCount || 10;
    var boxCountRed = config.boxCountRed || 2;
    var boxCountYellow = config.boxCountYellow || 3;
    var boxGapFraction = config.boxGapFraction || 0.2;
    var jitter = config.jitter || 0.02;
    var redOn = "rgba(255,47,30,0.9)";
    var redOff = "rgba(64,12,8,0.9)";
    var yellowOn = "rgba(255,215,5,0.9)";
    var yellowOff = "rgba(64,53,0,0.9)";
    var greenOn = "rgba(53,255,30,0.9)";
    var greenOff = "rgba(13,64,8,0.9)";
    var width = elem.width;
    var height = elem.height;
    var curVal = volLevel;
    var boxHeight = height / (boxCount + (boxCount + 1) * boxGapFraction);
    var boxGapY = boxHeight * boxGapFraction;
    var boxWidth = width - boxGapY * 2;
    var boxGapX = (width - boxWidth) / 2;
    var c2 = elem.getContext("2d");
    var draw = function() {
      var targetVal = parseInt(elem.dataset.val, 10);
      if (curVal <= targetVal) {
        curVal += (targetVal - curVal) / 5;
      } else {
        curVal -= (curVal - targetVal) / 5;
      }
      if (jitter > 0 && curVal > 0) {
        var amount = Math.random() * jitter * max2;
        if (Math.random() > 0.5) {
          amount = -amount;
        }
        curVal += amount;
      }
      if (curVal < 0) {
        curVal = 0;
      }
      c2.save();
      c2.beginPath();
      c2.rect(0, 0, width, height);
      c2.fillStyle = "rgb(32,32,32)";
      c2.fill();
      c2.restore();
      drawBoxes(c2, curVal);
      requestAnimationFrame(draw);
    };
    function drawBoxes(c22, val) {
      c22.save();
      c22.translate(boxGapX, boxGapY);
      for (var i2 = 0; i2 < boxCount; i2++) {
        var id2 = getId(i2);
        c22.beginPath();
        if (isOn(id2, val)) {
          c22.shadowBlur = 10;
          c22.shadowColor = getBoxColor(id2, val);
        }
        c22.rect(0, 0, boxWidth, boxHeight);
        c22.fillStyle = getBoxColor(id2, val);
        c22.fill();
        c22.translate(0, boxHeight + boxGapY);
      }
      c22.restore();
    }
    function getBoxColor(id2, val) {
      if (id2 > boxCount - boxCountRed) {
        return isOn(id2, val) ? redOn : redOff;
      }
      if (id2 > boxCount - boxCountRed - boxCountYellow) {
        return isOn(id2, val) ? yellowOn : yellowOff;
      }
      return isOn(id2, val) ? greenOn : greenOff;
    }
    function getId(index2) {
      return Math.abs(index2 - (boxCount - 1)) + 1;
    }
    function isOn(id2, val) {
      var maxOn = Math.ceil(val / max2 * boxCount);
      return id2 <= maxOn;
    }
    draw();
  }
  react.exports.useEffect(() => {
    var demo = document.getElementById("demo-" + vuIndex);
    vumeter(demo, {
      boxCount: 50,
      boxCountRed: 10,
      boxCountYellow: 10,
      boxGapFraction: 0.25,
      max: 225
    });
  }, []);
  if (document.getElementById("demo-" + vuIndex)) {
    document.getElementById("demo-" + vuIndex).setAttribute("data-val", volLevel);
  }
  return /* @__PURE__ */ React$1.createElement("canvas", {
    id: `demo-${vuIndex}`,
    className: "vu-meter",
    width: "10",
    height: "270",
    "data-val": "0"
  });
}
var AudioMeter = React$1.memo(function AudioMeters({
  audioLevelRoute,
  numChannels
}) {
  const [vuMeters, setVUMeters] = react.exports.useState([]);
  let audioLevelFetchRate = 1e3;
  let fullEndpoint;
  react.exports.useEffect(() => {
    let audioIntervalTimer = setInterval(() => {
      let cancelController = new AbortController();
      const fetchData = async () => {
        fullEndpoint = audioLevelRoute;
        const response = await fetch(fullEndpoint, {
          signal: cancelController.signal
        });
        const json = await response.json();
        const [, ...audioLevels] = json.current_stat[0].val.split(":");
        const tempVUMeters = [];
        let count = 0;
        for (let i2 = 0; i2 < numChannels; i2++) {
          tempVUMeters.push(
            /* @__PURE__ */ React$1.createElement(SingleMeter, {
              key: `audio-meter-${i2}`,
              volLevel: audioLevels[i2],
              vuIndex: count
            })
          );
          count++;
        }
        setVUMeters(tempVUMeters);
      };
      fetchData().catch((error) => {
        console.log(error);
      });
    }, audioLevelFetchRate);
    return () => {
      clearInterval(audioIntervalTimer);
    };
  }, []);
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "vu-meters"
  }, vuMeters);
});
function _defineProperty$1(obj, key, value) {
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
function ownKeys$2(object, enumerableOnly) {
  var keys3 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys3.push.apply(keys3, symbols);
  }
  return keys3;
}
function _objectSpread2$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var _excluded$5 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref3) {
  var _ref$defaultInputValu = _ref3.defaultInputValue, defaultInputValue = _ref$defaultInputValu === void 0 ? "" : _ref$defaultInputValu, _ref$defaultMenuIsOpe = _ref3.defaultMenuIsOpen, defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe, _ref$defaultValue = _ref3.defaultValue, defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue, propsInputValue = _ref3.inputValue, propsMenuIsOpen = _ref3.menuIsOpen, propsOnChange = _ref3.onChange, propsOnInputChange = _ref3.onInputChange, propsOnMenuClose = _ref3.onMenuClose, propsOnMenuOpen = _ref3.onMenuOpen, propsValue = _ref3.value, restSelectProps = _objectWithoutProperties(_ref3, _excluded$5);
  var _useState = react.exports.useState(propsInputValue !== void 0 ? propsInputValue : defaultInputValue), _useState2 = _slicedToArray(_useState, 2), stateInputValue = _useState2[0], setStateInputValue = _useState2[1];
  var _useState3 = react.exports.useState(propsMenuIsOpen !== void 0 ? propsMenuIsOpen : defaultMenuIsOpen), _useState4 = _slicedToArray(_useState3, 2), stateMenuIsOpen = _useState4[0], setStateMenuIsOpen = _useState4[1];
  var _useState5 = react.exports.useState(propsValue !== void 0 ? propsValue : defaultValue), _useState6 = _slicedToArray(_useState5, 2), stateValue = _useState6[0], setStateValue = _useState6[1];
  var onChange2 = react.exports.useCallback(function(value2, actionMeta) {
    if (typeof propsOnChange === "function") {
      propsOnChange(value2, actionMeta);
    }
    setStateValue(value2);
  }, [propsOnChange]);
  var onInputChange = react.exports.useCallback(function(value2, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === "function") {
      newValue = propsOnInputChange(value2, actionMeta);
    }
    setStateInputValue(newValue !== void 0 ? newValue : value2);
  }, [propsOnInputChange]);
  var onMenuOpen = react.exports.useCallback(function() {
    if (typeof propsOnMenuOpen === "function") {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = react.exports.useCallback(function() {
    if (typeof propsOnMenuClose === "function") {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== void 0 ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== void 0 ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== void 0 ? propsValue : stateValue;
  return _objectSpread2$1(_objectSpread2$1({}, restSelectProps), {}, {
    inputValue,
    menuIsOpen,
    onChange: onChange2,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    value
  });
}
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$2.apply(this, arguments);
}
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _setPrototypeOf$1(o, p2) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf$1(o, p2);
}
function _inherits$2(subClass, superClass) {
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf$1(subClass, superClass);
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _assertThisInitialized$1(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn$2(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$2(this, result);
  };
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
    if (document.styleSheets[i2].ownerNode === tag) {
      return document.styleSheets[i2];
    }
  }
}
function createStyleElement(options2) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options2.key);
  if (options2.nonce !== void 0) {
    tag.setAttribute("nonce", options2.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options2) {
    var _this = this;
    this._insertTag = function(tag) {
      var before2;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before2 = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before2 = _this.container.firstChild;
        } else {
          before2 = _this.before;
        }
      } else {
        before2 = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before2);
      _this.tags.push(tag);
    };
    this.isSpeedy = options2.speedy === void 0 ? true : options2.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options2.nonce;
    this.key = options2.key;
    this.container = options2.container;
    this.prepend = options2.prepend;
    this.insertionPoint = options2.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match$1(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement2) {
  return value.replace(pattern, replacement2);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index2) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index2) {
  while (!token(peek()))
    next();
  return slice(index2, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index2 = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1)
              characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index2, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index2 = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index2, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index2; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i2 = 0; i2 < length2; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index2, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length)
        break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index2, children, callback) {
    var output = "";
    for (var i2 = 0; i2 < length2; i2++)
      output += collection[i2](element, index2, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index2) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index2] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index2 = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index2] = 1;
        }
        parsed[index2] += identifierWithPointTracking(position - 1, points, index2);
        break;
      case 2:
        parsed[index2] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index2] = peek() === 58 ? "&\f" : "";
          points[index2] = parsed[index2].length;
          break;
        }
      default:
        parsed[index2] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i2 = 0, k2 = 0; i2 < rules.length; i2++) {
    for (var j2 = 0; j2 < parentRules.length; j2++, k2++) {
      element.props[k2] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index2, children, callback) {
  if (element.length > -1) {
    if (!element["return"])
      switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match$1(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, {
                    props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                  })], callback);
                case "::placeholder":
                  return serialize([copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                  })], callback);
              }
              return "";
            });
      }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options2) {
  var key = options2.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options2.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options2.container || document.head;
    Array.prototype.forEach.call(
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i2 = 1; i2 < attrib.length; i2++) {
          inserted[attrib[i2]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles2) {
      return serialize(compile(styles2), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options2.nonce,
      speedy: options2.speedy,
      prepend: options2.prepend,
      insertionPoint: options2.insertionPoint
    }),
    nonce: options2.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var reactIs$1 = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f$5 = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w$1 = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === typeof a && null !== a) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f$5:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u2;
            }
        }
      case d:
        return u2;
    }
  }
}
function A(a) {
  return z(a) === m;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g;
reactIs_production_min.StrictMode = f$5;
reactIs_production_min.Suspense = p;
reactIs_production_min.isAsyncMode = function(a) {
  return A(a) || z(a) === l;
};
reactIs_production_min.isConcurrentMode = A;
reactIs_production_min.isContextConsumer = function(a) {
  return z(a) === k;
};
reactIs_production_min.isContextProvider = function(a) {
  return z(a) === h;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};
reactIs_production_min.isForwardRef = function(a) {
  return z(a) === n;
};
reactIs_production_min.isFragment = function(a) {
  return z(a) === e;
};
reactIs_production_min.isLazy = function(a) {
  return z(a) === t;
};
reactIs_production_min.isMemo = function(a) {
  return z(a) === r;
};
reactIs_production_min.isPortal = function(a) {
  return z(a) === d;
};
reactIs_production_min.isProfiler = function(a) {
  return z(a) === g;
};
reactIs_production_min.isStrictMode = function(a) {
  return z(a) === f$5;
};
reactIs_production_min.isSuspense = function(a) {
  return z(a) === p;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f$5 || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w$1 || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
reactIs_production_min.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min;
}
var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className2) {
    if (registered[className2] !== void 0) {
      registeredStyles.push(registered[className2] + ";");
    } else {
      rawClassName += className2 + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className2 = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache.registered[className2] === void 0) {
    cache.registered[className2] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className2 = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className2 : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h2 = 0;
  var k2, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= k2 >>> 24;
    h2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i2) & 255;
      h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles2 = interpolation.styles + ";";
        return styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles2 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles2 += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles2 += strings[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles2 += handleInterpolation(mergedProps, registered, args[i2]);
    if (stringMode) {
      styles2 += strings[i2];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles2)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles2) + identifierName;
  return {
    name,
    styles: styles2,
    next: cursor
  };
};
var syncFallback = function syncFallback2(create2) {
  return create2();
};
var useInsertionEffect = React$2["useInsertionEffect"] ? React$2["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var hasOwnProperty$1 = {}.hasOwnProperty;
var EmotionCacheContext = /* @__PURE__ */ react.exports.createContext(
  typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
    var cache = react.exports.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ react.exports.createContext({});
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty$1.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  return newProps;
};
var Insertion$1 = function Insertion2(_ref3) {
  var cache = _ref3.cache, serialized = _ref3.serialized, isStringTag = _ref3.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
    cssProp = cache.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className2 = "";
  if (typeof props.className === "string") {
    className2 = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className2 = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, void 0, react.exports.useContext(ThemeContext));
  className2 += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty$1.call(props, key) && key !== "css" && key !== typePropName && true) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className2;
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(Insertion$1, {
    cache,
    serialized,
    isStringTag: typeof WrappedComponent === "string"
  }), /* @__PURE__ */ react.exports.createElement(WrappedComponent, newProps));
});
var Emotion$1 = Emotion;
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwnProperty$1.call(props, "css")) {
    return react.exports.createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion$1;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i2 = 2; i2 < argsLength; i2++) {
    createElementArgArray[i2] = args[i2];
  }
  return react.exports.createElement.apply(null, createElementArgArray);
};
function css$2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css$2.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString2() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames2(args) {
  var len = args.length;
  var i2 = 0;
  var cls = "";
  for (; i2 < len; i2++) {
    var arg = args[i2];
    if (arg == null)
      continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          toAdd = "";
          for (var k2 in arg) {
            if (arg[k2] && k2) {
              toAdd && (toAdd += " ");
              toAdd += k2;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css4, className2) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className2);
  if (registeredStyles.length < 2) {
    return className2;
  }
  return rawClassName + css4(registeredStyles);
}
var Insertion = function Insertion3(_ref3) {
  var cache = _ref3.cache, serializedArr = _ref3.serializedArr;
  useInsertionEffectAlwaysWithSyncFallback(function() {
    for (var i2 = 0; i2 < serializedArr.length; i2++) {
      insertStyles(cache, serializedArr[i2], false);
    }
  });
  return null;
};
var ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var hasRendered = false;
  var serializedArr = [];
  var css4 = function css5() {
    if (hasRendered && false) {
      throw new Error("css can only be used during render");
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache.registered);
    serializedArr.push(serialized);
    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var cx = function cx2() {
    if (hasRendered && false) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css4, classnames(args));
  };
  var content = {
    css: css4,
    cx,
    theme: react.exports.useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(Insertion, {
    cache,
    serializedArr
  }), ele);
});
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function isWindow(value) {
  return value && value.document && value.location && value.alert && value.setInterval;
}
function getWindow(node2) {
  if (node2 == null) {
    return window;
  }
  if (!isWindow(node2)) {
    const ownerDocument = node2.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node2;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeName(node2) {
  return isWindow(node2) ? "" : node2 ? (node2.nodeName || "").toLowerCase() : "";
}
function getUAString() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands) {
    return uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
  }
  return navigator.userAgent;
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node2) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node2).ShadowRoot;
  return node2 instanceof OwnElement || node2 instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(node2) {
  return ["html", "body", "#document"].includes(getNodeName(node2));
}
const round = Math.round;
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  const win = isElement(element) ? getWindow(element) : window;
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  const x2 = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
  const y2 = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: y2 + height,
    left: x2,
    x: x2,
    y: y2
  };
}
function getDocumentElement(node2) {
  return ((isNode(node2) ? node2.ownerDocument : node2.document) || window.document).documentElement;
}
function getParentNode(node2) {
  if (getNodeName(node2) === "html") {
    return node2;
  }
  return node2.assignedSlot || node2.parentNode || (isShadowRoot(node2) ? node2.host : null) || getDocumentElement(node2);
}
function getNearestOverflowAncestor(node2) {
  const parentNode = getParentNode(node2);
  if (isLastTraversableNode(parentNode)) {
    return node2.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node2, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node2);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node2.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
  const updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(getOverflowAncestors(target));
}
function autoUpdate(reference, floating, update, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options2;
  const ancestorScroll = _ancestorScroll && !animationFrame;
  const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  let observer = null;
  if (elementResize) {
    let initialUpdate = true;
    observer = new ResizeObserver(() => {
      if (!initialUpdate) {
        update();
      }
      initialUpdate = false;
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _observer;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var index = react.exports.useLayoutEffect;
var _excluded$3 = ["className", "clearValue", "cx", "getStyles", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
var noop = function noop2() {
};
function applyPrefixToName(prefix2, name) {
  if (!name) {
    return prefix2;
  } else if (name[0] === "-") {
    return prefix2 + name;
  } else {
    return prefix2 + "__" + name;
  }
}
function classNames(prefix2, state, className2) {
  var arr = [className2];
  if (state && prefix2) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix2, key)));
      }
    }
  }
  return arr.filter(function(i2) {
    return i2;
  }).map(function(i2) {
    return String(i2).trim();
  }).join(" ");
}
var cleanValue = function cleanValue2(value) {
  if (isArray$4(value))
    return value.filter(Boolean);
  if (_typeof(value) === "object" && value !== null)
    return [value];
  return [];
};
var cleanCommonProps = function cleanCommonProps2(props) {
  props.className;
  props.clearValue;
  props.cx;
  props.getStyles;
  props.getValue;
  props.hasValue;
  props.isMulti;
  props.isRtl;
  props.options;
  props.selectOption;
  props.selectProps;
  props.setValue;
  props.theme;
  var innerProps = _objectWithoutProperties(props, _excluded$3);
  return _objectSpread2$1({}, innerProps);
};
function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}
function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }
  return el.clientHeight;
}
function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}
function getScrollParent(element) {
  var style2 = getComputedStyle(element);
  var excludeStaticParent = style2.position === "absolute";
  var overflowRx = /(auto|scroll)/;
  if (style2.position === "fixed")
    return document.documentElement;
  for (var parent = element; parent = parent.parentElement; ) {
    style2 = getComputedStyle(parent);
    if (excludeStaticParent && style2.position === "static") {
      continue;
    }
    if (overflowRx.test(style2.overflow + style2.overflowY + style2.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}
function easeOutCubic(t2, b2, c2, d2) {
  return c2 * ((t2 = t2 / d2 - 1) * t2 * t2 + 1) + b2;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}
function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
function isTouchCapable() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e2) {
    return false;
  }
}
function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e2) {
    return false;
  }
}
var passiveOptionAccessed = false;
var options$1 = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
var w = typeof window !== "undefined" ? window : {};
if (w.addEventListener && w.removeEventListener) {
  w.addEventListener("p", noop, options$1);
  w.removeEventListener("p", noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray$4(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
var removeProps = function removeProps2(propsObj) {
  for (var _len = arguments.length, properties = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    properties[_key - 1] = arguments[_key];
  }
  var propsMap = Object.entries(propsObj).filter(function(_ref3) {
    var _ref22 = _slicedToArray(_ref3, 1), key = _ref22[0];
    return !properties.includes(key);
  });
  return propsMap.reduce(function(newProps, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], val = _ref4[1];
    newProps[key] = val;
    return newProps;
  }, {});
};
function getMenuPlacement(_ref3) {
  var preferredMaxHeight = _ref3.maxHeight, menuEl = _ref3.menuEl, minHeight = _ref3.minHeight, preferredPlacement = _ref3.placement, shouldScroll = _ref3.shouldScroll, isFixedPosition = _ref3.isFixedPosition, theme = _ref3.theme;
  var spacing2 = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: "bottom",
    maxHeight: preferredMaxHeight
  };
  if (!menuEl || !menuEl.offsetParent)
    return defaultState;
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(), scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(), menuBottom = _menuEl$getBoundingCl.bottom, menuHeight = _menuEl$getBoundingCl.height, menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(), containerTop = _menuEl$offsetParent$.top;
  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (preferredPlacement) {
    case "auto":
    case "bottom":
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: "bottom",
          maxHeight: constrainedHeight
        };
      }
      if (preferredPlacement === "auto" || isFixedPosition) {
        var _constrainedHeight = preferredMaxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing2.controlHeight, preferredMaxHeight);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight
        };
      }
      if (preferredPlacement === "bottom") {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      break;
    case "top":
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: "top",
          maxHeight: preferredMaxHeight
        };
      }
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: preferredMaxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = preferredMaxHeight;
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight2
        };
      }
      return {
        placement: "bottom",
        maxHeight: preferredMaxHeight
      };
    default:
      throw new Error('Invalid placement provided "'.concat(preferredPlacement, '".'));
  }
  return defaultState;
}
function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: "top",
    top: "bottom"
  };
  return placement ? placementToCSSProp[placement] : "bottom";
}
var coercePlacement = function coercePlacement2(p2) {
  return p2 === "auto" ? "bottom" : p2;
};
var menuCSS = function menuCSS2(_ref22) {
  var _ref3;
  var placement = _ref22.placement, _ref2$theme = _ref22.theme, borderRadius2 = _ref2$theme.borderRadius, spacing2 = _ref2$theme.spacing, colors2 = _ref2$theme.colors;
  return _ref3 = {
    label: "menu"
  }, _defineProperty$1(_ref3, alignToControl(placement), "100%"), _defineProperty$1(_ref3, "backgroundColor", colors2.neutral0), _defineProperty$1(_ref3, "borderRadius", borderRadius2), _defineProperty$1(_ref3, "boxShadow", "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"), _defineProperty$1(_ref3, "marginBottom", spacing2.menuGutter), _defineProperty$1(_ref3, "marginTop", spacing2.menuGutter), _defineProperty$1(_ref3, "position", "absolute"), _defineProperty$1(_ref3, "width", "100%"), _defineProperty$1(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /* @__PURE__ */ react.exports.createContext(null);
var MenuPlacer = function MenuPlacer2(props) {
  var children = props.children, minMenuHeight = props.minMenuHeight, maxMenuHeight = props.maxMenuHeight, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition, menuShouldScrollIntoView = props.menuShouldScrollIntoView, theme = props.theme;
  var _ref4 = react.exports.useContext(PortalPlacementContext) || {}, setPortalPlacement = _ref4.setPortalPlacement;
  var ref = react.exports.useRef(null);
  var _useState = react.exports.useState(maxMenuHeight), _useState2 = _slicedToArray(_useState, 2), maxHeight = _useState2[0], setMaxHeight = _useState2[1];
  var _useState3 = react.exports.useState(null), _useState4 = _slicedToArray(_useState3, 2), placement = _useState4[0], setPlacement = _useState4[1];
  index(function() {
    var menuEl = ref.current;
    if (!menuEl)
      return;
    var isFixedPosition = menuPosition === "fixed";
    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
    var state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll,
      isFixedPosition,
      theme
    });
    setMaxHeight(state.maxHeight);
    setPlacement(state.placement);
    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, theme]);
  return children({
    ref,
    placerProps: _objectSpread2$1(_objectSpread2$1({}, props), {}, {
      placement: placement || coercePlacement(menuPlacement),
      maxHeight
    })
  });
};
var Menu = function Menu2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, getStyles = props.getStyles, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends$2({
    css: getStyles("menu", props),
    className: cx({
      menu: true
    }, className2),
    ref: innerRef
  }, innerProps), children);
};
var menuListCSS = function menuListCSS2(_ref5) {
  var maxHeight = _ref5.maxHeight, baseUnit2 = _ref5.theme.spacing.baseUnit;
  return {
    maxHeight,
    overflowY: "auto",
    paddingBottom: baseUnit2,
    paddingTop: baseUnit2,
    position: "relative",
    WebkitOverflowScrolling: "touch"
  };
};
var MenuList = function MenuList2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, innerRef = props.innerRef, isMulti = props.isMulti;
  return jsx("div", _extends$2({
    css: getStyles("menuList", props),
    className: cx({
      "menu-list": true,
      "menu-list--is-multi": isMulti
    }, className2),
    ref: innerRef
  }, innerProps), children);
};
var noticeCSS = function noticeCSS2(_ref6) {
  var _ref6$theme = _ref6.theme, baseUnit2 = _ref6$theme.spacing.baseUnit, colors2 = _ref6$theme.colors;
  return {
    color: colors2.neutral40,
    padding: "".concat(baseUnit2 * 2, "px ").concat(baseUnit2 * 3, "px"),
    textAlign: "center"
  };
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends$2({
    css: getStyles("noOptionsMessage", props),
    className: cx({
      "menu-notice": true,
      "menu-notice--no-options": true
    }, className2)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: "No options"
};
var LoadingMessage = function LoadingMessage2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends$2({
    css: getStyles("loadingMessage", props),
    className: cx({
      "menu-notice": true,
      "menu-notice--loading": true
    }, className2)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: "Loading..."
};
var menuPortalCSS = function menuPortalCSS2(_ref7) {
  var rect = _ref7.rect, offset = _ref7.offset, position2 = _ref7.position;
  return {
    left: rect.left,
    position: position2,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = function MenuPortal2(_ref8) {
  var appendTo = _ref8.appendTo, children = _ref8.children, className2 = _ref8.className, controlElement = _ref8.controlElement, cx = _ref8.cx, innerProps = _ref8.innerProps, menuPlacement = _ref8.menuPlacement, menuPosition = _ref8.menuPosition, getStyles = _ref8.getStyles;
  var menuPortalRef = react.exports.useRef(null);
  var cleanupRef = react.exports.useRef(null);
  var _useState5 = react.exports.useState(coercePlacement(menuPlacement)), _useState6 = _slicedToArray(_useState5, 2), placement = _useState6[0], setPortalPlacement = _useState6[1];
  var portalPlacementContext = react.exports.useMemo(function() {
    return {
      setPortalPlacement
    };
  }, []);
  var _useState7 = react.exports.useState(null), _useState8 = _slicedToArray(_useState7, 2), computedPosition = _useState8[0], setComputedPosition = _useState8[1];
  var updateComputedPosition = react.exports.useCallback(function() {
    if (!controlElement)
      return;
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = menuPosition === "fixed" ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
      setComputedPosition({
        offset,
        rect
      });
    }
  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
  index(function() {
    updateComputedPosition();
  }, [updateComputedPosition]);
  var runAutoUpdate = react.exports.useCallback(function() {
    if (typeof cleanupRef.current === "function") {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (controlElement && menuPortalRef.current) {
      cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
        elementResize: "ResizeObserver" in window
      });
    }
  }, [controlElement, updateComputedPosition]);
  index(function() {
    runAutoUpdate();
  }, [runAutoUpdate]);
  var setMenuPortalElement = react.exports.useCallback(function(menuPortalElement) {
    menuPortalRef.current = menuPortalElement;
    runAutoUpdate();
  }, [runAutoUpdate]);
  if (!appendTo && menuPosition !== "fixed" || !computedPosition)
    return null;
  var menuWrapper = jsx("div", _extends$2({
    ref: setMenuPortalElement,
    css: getStyles("menuPortal", {
      offset: computedPosition.offset,
      position: menuPosition,
      rect: computedPosition.rect
    }),
    className: cx({
      "menu-portal": true
    }, className2)
  }, innerProps), children);
  return jsx(PortalPlacementContext.Provider, {
    value: portalPlacementContext
  }, appendTo ? /* @__PURE__ */ reactDom.exports.createPortal(menuWrapper, appendTo) : menuWrapper);
};
var containerCSS = function containerCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, isRtl = _ref3.isRtl;
  return {
    label: "container",
    direction: isRtl ? "rtl" : void 0,
    pointerEvents: isDisabled ? "none" : void 0,
    position: "relative"
  };
};
var SelectContainer = function SelectContainer2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, isDisabled = props.isDisabled, isRtl = props.isRtl;
  return jsx("div", _extends$2({
    css: getStyles("container", props),
    className: cx({
      "--is-disabled": isDisabled,
      "--is-rtl": isRtl
    }, className2)
  }, innerProps), children);
};
var valueContainerCSS = function valueContainerCSS2(_ref22) {
  var spacing2 = _ref22.theme.spacing, isMulti = _ref22.isMulti, hasValue = _ref22.hasValue, controlShouldRenderValue = _ref22.selectProps.controlShouldRenderValue;
  return {
    alignItems: "center",
    display: isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    padding: "".concat(spacing2.baseUnit / 2, "px ").concat(spacing2.baseUnit * 2, "px"),
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  };
};
var ValueContainer = function ValueContainer2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, innerProps = props.innerProps, isMulti = props.isMulti, getStyles = props.getStyles, hasValue = props.hasValue;
  return jsx("div", _extends$2({
    css: getStyles("valueContainer", props),
    className: cx({
      "value-container": true,
      "value-container--is-multi": isMulti,
      "value-container--has-value": hasValue
    }, className2)
  }, innerProps), children);
};
var indicatorsContainerCSS = function indicatorsContainerCSS2() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, innerProps = props.innerProps, getStyles = props.getStyles;
  return jsx("div", _extends$2({
    css: getStyles("indicatorsContainer", props),
    className: cx({
      indicators: true
    }, className2)
  }, innerProps), children);
};
var _templateObject;
var _excluded$2 = ["size"];
var _ref2$2 = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
};
var Svg = function Svg2(_ref3) {
  var size = _ref3.size, props = _objectWithoutProperties(_ref3, _excluded$2);
  return jsx("svg", _extends$2({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2$2
  }, props));
};
var CrossIcon = function CrossIcon2(props) {
  return jsx(Svg, _extends$2({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron2(props) {
  return jsx(Svg, _extends$2({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};
var baseCSS = function baseCSS2(_ref3) {
  var isFocused = _ref3.isFocused, _ref3$theme = _ref3.theme, baseUnit2 = _ref3$theme.spacing.baseUnit, colors2 = _ref3$theme.colors;
  return {
    label: "indicatorContainer",
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    display: "flex",
    padding: baseUnit2 * 2,
    transition: "color 150ms",
    ":hover": {
      color: isFocused ? colors2.neutral80 : colors2.neutral40
    }
  };
};
var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends$2({
    css: getStyles("dropdownIndicator", props),
    className: cx({
      indicator: true,
      "dropdown-indicator": true
    }, className2)
  }, innerProps), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends$2({
    css: getStyles("clearIndicator", props),
    className: cx({
      indicator: true,
      "clear-indicator": true
    }, className2)
  }, innerProps), children || jsx(CrossIcon, null));
};
var indicatorSeparatorCSS = function indicatorSeparatorCSS2(_ref4) {
  var isDisabled = _ref4.isDisabled, _ref4$theme = _ref4.theme, baseUnit2 = _ref4$theme.spacing.baseUnit, colors2 = _ref4$theme.colors;
  return {
    label: "indicatorSeparator",
    alignSelf: "stretch",
    backgroundColor: isDisabled ? colors2.neutral10 : colors2.neutral20,
    marginBottom: baseUnit2 * 2,
    marginTop: baseUnit2 * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator2(props) {
  var className2 = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("span", _extends$2({}, innerProps, {
    css: getStyles("indicatorSeparator", props),
    className: cx({
      "indicator-separator": true
    }, className2)
  }));
};
var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS2(_ref5) {
  var isFocused = _ref5.isFocused, size = _ref5.size, _ref5$theme = _ref5.theme, colors2 = _ref5$theme.colors, baseUnit2 = _ref5$theme.spacing.baseUnit;
  return {
    label: "loadingIndicator",
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    display: "flex",
    padding: baseUnit2 * 2,
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: "center",
    verticalAlign: "middle"
  };
};
var LoadingDot = function LoadingDot2(_ref6) {
  var delay = _ref6.delay, offset = _ref6.offset;
  return jsx("span", {
    css: /* @__PURE__ */ css$2({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: offset ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
};
var LoadingIndicator = function LoadingIndicator2(props) {
  var className2 = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, isRtl = props.isRtl;
  return jsx("div", _extends$2({
    css: getStyles("loadingIndicator", props),
    className: cx({
      indicator: true,
      "loading-indicator": true
    }, className2)
  }, innerProps), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};
var css$1 = function css2(_ref3) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, _ref$theme = _ref3.theme, colors2 = _ref$theme.colors, borderRadius2 = _ref$theme.borderRadius, spacing2 = _ref$theme.spacing;
  return {
    label: "control",
    alignItems: "center",
    backgroundColor: isDisabled ? colors2.neutral5 : colors2.neutral0,
    borderColor: isDisabled ? colors2.neutral10 : isFocused ? colors2.primary : colors2.neutral20,
    borderRadius: borderRadius2,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors2.primary) : void 0,
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: spacing2.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms",
    "&:hover": {
      borderColor: isFocused ? colors2.primary : colors2.neutral30
    }
  };
};
var Control = function Control2(props) {
  var children = props.children, cx = props.cx, getStyles = props.getStyles, className2 = props.className, isDisabled = props.isDisabled, isFocused = props.isFocused, innerRef = props.innerRef, innerProps = props.innerProps, menuIsOpen = props.menuIsOpen;
  return jsx("div", _extends$2({
    ref: innerRef,
    css: getStyles("control", props),
    className: cx({
      control: true,
      "control--is-disabled": isDisabled,
      "control--is-focused": isFocused,
      "control--menu-is-open": menuIsOpen
    }, className2)
  }, innerProps), children);
};
var _excluded$1 = ["data"];
var groupCSS = function groupCSS2(_ref3) {
  var spacing2 = _ref3.theme.spacing;
  return {
    paddingBottom: spacing2.baseUnit * 2,
    paddingTop: spacing2.baseUnit * 2
  };
};
var Group = function Group2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, getStyles = props.getStyles, Heading = props.Heading, headingProps = props.headingProps, innerProps = props.innerProps, label = props.label, theme = props.theme, selectProps = props.selectProps;
  return jsx("div", _extends$2({
    css: getStyles("group", props),
    className: cx({
      group: true
    }, className2)
  }, innerProps), jsx(Heading, _extends$2({}, headingProps, {
    selectProps,
    theme,
    getStyles,
    cx
  }), label), jsx("div", null, children));
};
var groupHeadingCSS = function groupHeadingCSS2(_ref22) {
  var spacing2 = _ref22.theme.spacing;
  return {
    label: "group",
    color: "#999",
    cursor: "default",
    display: "block",
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: spacing2.baseUnit * 3,
    paddingRight: spacing2.baseUnit * 3,
    textTransform: "uppercase"
  };
};
var GroupHeading = function GroupHeading2(props) {
  var getStyles = props.getStyles, cx = props.cx, className2 = props.className;
  var _cleanCommonProps = cleanCommonProps(props);
  _cleanCommonProps.data;
  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
  return jsx("div", _extends$2({
    css: getStyles("groupHeading", props),
    className: cx({
      "group-heading": true
    }, className2)
  }, innerProps));
};
var _excluded$4 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var inputCSS = function inputCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, value = _ref3.value, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2$1({
    margin: spacing2.baseUnit / 2,
    paddingBottom: spacing2.baseUnit / 2,
    paddingTop: spacing2.baseUnit / 2,
    visibility: isDisabled ? "hidden" : "visible",
    color: colors2.neutral80,
    transform: value ? "translateZ(0)" : ""
  }, containerStyle);
};
var spacingStyle = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": _objectSpread2$1({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, spacingStyle)
};
var inputStyle = function inputStyle2(isHidden) {
  return _objectSpread2$1({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: "100%"
  }, spacingStyle);
};
var Input = function Input3(props) {
  var className2 = props.className, cx = props.cx, getStyles = props.getStyles, value = props.value;
  var _cleanCommonProps = cleanCommonProps(props), innerRef = _cleanCommonProps.innerRef, isDisabled = _cleanCommonProps.isDisabled, isHidden = _cleanCommonProps.isHidden, inputClassName = _cleanCommonProps.inputClassName, innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$4);
  return jsx("div", {
    className: cx({
      "input-container": true
    }, className2),
    css: getStyles("input", props),
    "data-value": value || ""
  }, jsx("input", _extends$2({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};
var multiValueCSS = function multiValueCSS2(_ref3) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, borderRadius2 = _ref$theme.borderRadius, colors2 = _ref$theme.colors;
  return {
    label: "multiValue",
    backgroundColor: colors2.neutral10,
    borderRadius: borderRadius2 / 2,
    display: "flex",
    margin: spacing2.baseUnit / 2,
    minWidth: 0
  };
};
var multiValueLabelCSS = function multiValueLabelCSS2(_ref22) {
  var _ref2$theme = _ref22.theme, borderRadius2 = _ref2$theme.borderRadius, colors2 = _ref2$theme.colors, cropWithEllipsis = _ref22.cropWithEllipsis;
  return {
    borderRadius: borderRadius2 / 2,
    color: colors2.neutral80,
    fontSize: "85%",
    overflow: "hidden",
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis || cropWithEllipsis === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS2(_ref3) {
  var _ref3$theme = _ref3.theme, spacing2 = _ref3$theme.spacing, borderRadius2 = _ref3$theme.borderRadius, colors2 = _ref3$theme.colors, isFocused = _ref3.isFocused;
  return {
    alignItems: "center",
    borderRadius: borderRadius2 / 2,
    backgroundColor: isFocused ? colors2.dangerLight : void 0,
    display: "flex",
    paddingLeft: spacing2.baseUnit,
    paddingRight: spacing2.baseUnit,
    ":hover": {
      backgroundColor: colors2.dangerLight,
      color: colors2.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric2(_ref4) {
  var children = _ref4.children, innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children, innerProps = _ref5.innerProps;
  return jsx("div", _extends$2({
    role: "button"
  }, innerProps), children || jsx(CrossIcon, {
    size: 14
  }));
}
var MultiValue = function MultiValue2(props) {
  var children = props.children, className2 = props.className, components2 = props.components, cx = props.cx, data2 = props.data, getStyles = props.getStyles, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps3 = props.removeProps, selectProps = props.selectProps;
  var Container2 = components2.Container, Label = components2.Label, Remove = components2.Remove;
  return jsx(ClassNames, null, function(_ref6) {
    var css4 = _ref6.css, emotionCx = _ref6.cx;
    return jsx(Container2, {
      data: data2,
      innerProps: _objectSpread2$1({
        className: emotionCx(css4(getStyles("multiValue", props)), cx({
          "multi-value": true,
          "multi-value--is-disabled": isDisabled
        }, className2))
      }, innerProps),
      selectProps
    }, jsx(Label, {
      data: data2,
      innerProps: {
        className: emotionCx(css4(getStyles("multiValueLabel", props)), cx({
          "multi-value__label": true
        }, className2))
      },
      selectProps
    }, children), jsx(Remove, {
      data: data2,
      innerProps: _objectSpread2$1({
        className: emotionCx(css4(getStyles("multiValueRemove", props)), cx({
          "multi-value__remove": true
        }, className2)),
        "aria-label": "Remove ".concat(children || "option")
      }, removeProps3),
      selectProps
    }));
  });
};
var optionCSS = function optionCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, isSelected = _ref3.isSelected, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return {
    label: "option",
    backgroundColor: isSelected ? colors2.primary : isFocused ? colors2.primary25 : "transparent",
    color: isDisabled ? colors2.neutral20 : isSelected ? colors2.neutral0 : "inherit",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    padding: "".concat(spacing2.baseUnit * 2, "px ").concat(spacing2.baseUnit * 3, "px"),
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    ":active": {
      backgroundColor: !isDisabled ? isSelected ? colors2.primary : colors2.primary50 : void 0
    }
  };
};
var Option = function Option2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, getStyles = props.getStyles, isDisabled = props.isDisabled, isFocused = props.isFocused, isSelected = props.isSelected, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends$2({
    css: getStyles("option", props),
    className: cx({
      option: true,
      "option--is-disabled": isDisabled,
      "option--is-focused": isFocused,
      "option--is-selected": isSelected
    }, className2),
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};
var placeholderCSS = function placeholderCSS2(_ref3) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return {
    label: "placeholder",
    color: colors2.neutral50,
    gridArea: "1 / 1 / 2 / 3",
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2
  };
};
var Placeholder = function Placeholder2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends$2({
    css: getStyles("placeholder", props),
    className: cx({
      placeholder: true
    }, className2)
  }, innerProps), children);
};
var css = function css3(_ref3) {
  var isDisabled = _ref3.isDisabled, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return {
    label: "singleValue",
    color: isDisabled ? colors2.neutral40 : colors2.neutral80,
    gridArea: "1 / 1 / 2 / 3",
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2,
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  };
};
var SingleValue = function SingleValue2(props) {
  var children = props.children, className2 = props.className, cx = props.cx, getStyles = props.getStyles, isDisabled = props.isDisabled, innerProps = props.innerProps;
  return jsx("div", _extends$2({
    css: getStyles("singleValue", props),
    className: cx({
      "single-value": true,
      "single-value--is-disabled": isDisabled
    }, className2)
  }, innerProps), children);
};
var components = {
  ClearIndicator,
  Control,
  DropdownIndicator,
  DownChevron,
  CrossIcon,
  Group,
  GroupHeading,
  IndicatorsContainer,
  IndicatorSeparator,
  Input,
  LoadingIndicator,
  Menu,
  MenuList,
  MenuPortal,
  LoadingMessage,
  NoOptionsMessage,
  MultiValue,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Option,
  Placeholder,
  SelectContainer,
  SingleValue,
  ValueContainer
};
var defaultComponents = function defaultComponents2(props) {
  return _objectSpread2$1(_objectSpread2$1({}, components), props.components);
};
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i2 = 0; i2 < newInputs.length; i2++) {
    if (!isEqual(newInputs[i2], lastInputs[i2])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}
var _ref = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
};
var A11yText = function A11yText2(props) {
  return jsx("span", _extends$2({
    css: _ref
  }, props));
};
var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable, isMulti = props.isMulti, isDisabled = props.isDisabled, tabSelectsValue = props.tabSelectsValue, context = props.context;
    switch (context) {
      case "menu":
        return "Use Up and Down to choose options".concat(isDisabled ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return "".concat(props["aria-label"] || "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "");
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function onChange(props) {
    var action = props.action, _props$label = props.label, label = _props$label === void 0 ? "" : _props$label, labels = props.labels, isDisabled = props.isDisabled;
    switch (action) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(label, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(labels.length > 1 ? "s" : "", " ").concat(labels.join(","), ", selected.");
      case "select-option":
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context, focused = props.focused, options2 = props.options, _props$label2 = props.label, label = _props$label2 === void 0 ? "" : _props$label2, selectValue = props.selectValue, isDisabled = props.isDisabled, isSelected = props.isSelected;
    var getArrayIndex = function getArrayIndex2(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : "";
    };
    if (context === "value" && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === "menu") {
      var disabled = isDisabled ? " disabled" : "";
      var status = "".concat(isSelected ? "selected" : "focused").concat(disabled);
      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options2, focused), ".");
    }
    return "";
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue, resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
  }
};
var LiveRegion = function LiveRegion2(props) {
  var ariaSelection = props.ariaSelection, focusedOption = props.focusedOption, focusedValue = props.focusedValue, focusableOptions = props.focusableOptions, isFocused = props.isFocused, selectValue = props.selectValue, selectProps = props.selectProps, id2 = props.id;
  var ariaLiveMessages = selectProps.ariaLiveMessages, getOptionLabel4 = selectProps.getOptionLabel, inputValue = selectProps.inputValue, isMulti = selectProps.isMulti, isOptionDisabled3 = selectProps.isOptionDisabled, isSearchable = selectProps.isSearchable, menuIsOpen = selectProps.menuIsOpen, options2 = selectProps.options, screenReaderStatus2 = selectProps.screenReaderStatus, tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps["aria-label"];
  var ariaLive = selectProps["aria-live"];
  var messages = react.exports.useMemo(function() {
    return _objectSpread2$1(_objectSpread2$1({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);
  var ariaSelected = react.exports.useMemo(function() {
    var message = "";
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option, selectedOptions = ariaSelection.options, removedValue = ariaSelection.removedValue, removedValues = ariaSelection.removedValues, value = ariaSelection.value;
      var asOption = function asOption2(val) {
        return !Array.isArray(val) ? val : null;
      };
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel4(selected) : "";
      var multiSelected = selectedOptions || removedValues || void 0;
      var labels = multiSelected ? multiSelected.map(getOptionLabel4) : [];
      var onChangeProps = _objectSpread2$1({
        isDisabled: selected && isOptionDisabled3(selected, selectValue),
        label,
        labels
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages, isOptionDisabled3, selectValue, getOptionLabel4]);
  var ariaFocused = react.exports.useMemo(function() {
    var focusMsg = "";
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused,
        label: getOptionLabel4(focused),
        isDisabled: isOptionDisabled3(focused, selectValue),
        isSelected,
        options: focusableOptions,
        context: focused === focusedOption ? "menu" : "value",
        selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel4, isOptionDisabled3, messages, focusableOptions, selectValue]);
  var ariaResults = react.exports.useMemo(function() {
    var resultsMsg = "";
    if (menuIsOpen && options2.length && messages.onFilter) {
      var resultsMessage = screenReaderStatus2({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue,
        resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options2, screenReaderStatus2]);
  var ariaGuidance = react.exports.useMemo(function() {
    var guidanceMsg = "";
    if (messages.guidance) {
      var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
      guidanceMsg = messages.guidance({
        "aria-label": ariaLabel,
        context,
        isDisabled: focusedOption && isOptionDisabled3(focusedOption, selectValue),
        isMulti,
        isSearchable,
        tabSelectsValue
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled3, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  var ScreenReaderText = jsx(react.exports.Fragment, null, jsx("span", {
    id: "aria-selection"
  }, ariaSelected), jsx("span", {
    id: "aria-context"
  }, ariaContext));
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus";
  return jsx(react.exports.Fragment, null, jsx(A11yText, {
    id: id2
  }, isInitialFocus && ScreenReaderText), jsx(A11yText, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};
var diacritics = [{
  base: "A",
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: "AA",
  letters: "\uA732"
}, {
  base: "AE",
  letters: "\xC6\u01FC\u01E2"
}, {
  base: "AO",
  letters: "\uA734"
}, {
  base: "AU",
  letters: "\uA736"
}, {
  base: "AV",
  letters: "\uA738\uA73A"
}, {
  base: "AY",
  letters: "\uA73C"
}, {
  base: "B",
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: "C",
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: "D",
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: "DZ",
  letters: "\u01F1\u01C4"
}, {
  base: "Dz",
  letters: "\u01F2\u01C5"
}, {
  base: "E",
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: "F",
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: "G",
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: "H",
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: "I",
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: "J",
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: "K",
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: "L",
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: "LJ",
  letters: "\u01C7"
}, {
  base: "Lj",
  letters: "\u01C8"
}, {
  base: "M",
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: "N",
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: "NJ",
  letters: "\u01CA"
}, {
  base: "Nj",
  letters: "\u01CB"
}, {
  base: "O",
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: "OI",
  letters: "\u01A2"
}, {
  base: "OO",
  letters: "\uA74E"
}, {
  base: "OU",
  letters: "\u0222"
}, {
  base: "P",
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: "Q",
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: "R",
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: "S",
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: "T",
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: "TZ",
  letters: "\uA728"
}, {
  base: "U",
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: "V",
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: "VY",
  letters: "\uA760"
}, {
  base: "W",
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: "X",
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: "Y",
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: "Z",
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: "a",
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: "aa",
  letters: "\uA733"
}, {
  base: "ae",
  letters: "\xE6\u01FD\u01E3"
}, {
  base: "ao",
  letters: "\uA735"
}, {
  base: "au",
  letters: "\uA737"
}, {
  base: "av",
  letters: "\uA739\uA73B"
}, {
  base: "ay",
  letters: "\uA73D"
}, {
  base: "b",
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: "c",
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: "d",
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: "dz",
  letters: "\u01F3\u01C6"
}, {
  base: "e",
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: "f",
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: "g",
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: "h",
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: "hv",
  letters: "\u0195"
}, {
  base: "i",
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: "j",
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: "k",
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: "l",
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: "lj",
  letters: "\u01C9"
}, {
  base: "m",
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: "n",
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: "nj",
  letters: "\u01CC"
}, {
  base: "o",
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: "oi",
  letters: "\u01A3"
}, {
  base: "ou",
  letters: "\u0223"
}, {
  base: "oo",
  letters: "\uA74F"
}, {
  base: "p",
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: "q",
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: "r",
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: "s",
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: "t",
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: "tz",
  letters: "\uA729"
}, {
  base: "u",
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: "v",
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: "vy",
  letters: "\uA761"
}, {
  base: "w",
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: "x",
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: "y",
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: "z",
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp("[" + diacritics.map(function(d2) {
  return d2.letters;
}).join("") + "]", "g");
var diacriticToBase = {};
for (var i$1 = 0; i$1 < diacritics.length; i$1++) {
  var diacritic = diacritics[i$1];
  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}
var stripDiacritics = function stripDiacritics2(str) {
  return str.replace(anyDiacritic, function(match2) {
    return diacriticToBase[match2];
  });
};
var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString2(str) {
  return str.replace(/^\s+|\s+$/g, "");
};
var defaultStringify = function defaultStringify2(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter2(config) {
  return function(option, rawInput) {
    if (option.data.__isNew__)
      return true;
    var _ignoreCase$ignoreAcc = _objectSpread2$1({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: "any"
    }, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify2 = _ignoreCase$ignoreAcc.stringify, trim2 = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim2 ? trimString(rawInput) : rawInput;
    var candidate = trim2 ? trimString(stringify2(option)) : stringify2(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};
var _excluded = ["innerRef"];
function DummyInput(_ref3) {
  var innerRef = _ref3.innerRef, props = _objectWithoutProperties(_ref3, _excluded);
  var filteredProps = removeProps(props, "onExited", "in", "enter", "exit", "appear");
  return jsx("input", _extends$2({
    ref: innerRef
  }, filteredProps, {
    css: /* @__PURE__ */ css$2({
      label: "dummyInput",
      background: 0,
      border: 0,
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      width: 1,
      color: "transparent",
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, "", "")
  }));
}
var cancelScroll = function cancelScroll2(event) {
  event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref3) {
  var isEnabled = _ref3.isEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var isBottom = react.exports.useRef(false);
  var isTop = react.exports.useRef(false);
  var touchStart = react.exports.useRef(0);
  var scrollTarget = react.exports.useRef(null);
  var handleEventDelta = react.exports.useCallback(function(event, delta) {
    if (scrollTarget.current === null)
      return;
    var _scrollTarget$current = scrollTarget.current, scrollTop = _scrollTarget$current.scrollTop, scrollHeight = _scrollTarget$current.scrollHeight, clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave)
        onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave)
        onTopLeave(event);
      isTop.current = false;
    }
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = react.exports.useCallback(function(event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = react.exports.useCallback(function(event) {
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = react.exports.useCallback(function(event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = react.exports.useCallback(function(el) {
    if (!el)
      return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener("wheel", onWheel, notPassive);
    el.addEventListener("touchstart", onTouchStart, notPassive);
    el.addEventListener("touchmove", onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = react.exports.useCallback(function(el) {
    if (!el)
      return;
    el.removeEventListener("wheel", onWheel, false);
    el.removeEventListener("touchstart", onTouchStart, false);
    el.removeEventListener("touchmove", onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  react.exports.useEffect(function() {
    if (!isEnabled)
      return;
    var element = scrollTarget.current;
    startListening(element);
    return function() {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function(element) {
    scrollTarget.current = element;
  };
}
var STYLE_KEYS = ["boxSizing", "height", "overflow", "paddingRight", "position"];
var LOCK_STYLES = {
  boxSizing: "border-box",
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function preventTouchMove(e2) {
  e2.preventDefault();
}
function allowTouchMove(e2) {
  e2.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}
function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref3) {
  var isEnabled = _ref3.isEnabled, _ref$accountForScroll = _ref3.accountForScrollbars, accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = react.exports.useRef({});
  var scrollTarget = react.exports.useRef(null);
  var addScrollLock = react.exports.useCallback(function(touchScrollTarget) {
    if (!canUseDOM)
      return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      STYLE_KEYS.forEach(function(key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function(key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }
    if (target && isTouchDevice()) {
      target.addEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = react.exports.useCallback(function(touchScrollTarget) {
    if (!canUseDOM)
      return;
    var target = document.body;
    var targetStyle = target && target.style;
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function(key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }
    if (target && isTouchDevice()) {
      target.removeEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  react.exports.useEffect(function() {
    if (!isEnabled)
      return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function() {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function(element) {
    scrollTarget.current = element;
  };
}
var blurSelectInput = function blurSelectInput2() {
  return document.activeElement && document.activeElement.blur();
};
var _ref2$1 = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function ScrollManager(_ref3) {
  var children = _ref3.children, lockEnabled = _ref3.lockEnabled, _ref$captureEnabled = _ref3.captureEnabled, captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive,
    onBottomLeave,
    onTopArrive,
    onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef2(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return jsx(react.exports.Fragment, null, lockEnabled && jsx("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}
var _ref2 = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
};
var RequiredInput = function RequiredInput2(_ref3) {
  var name = _ref3.name, onFocus2 = _ref3.onFocus;
  return jsx("input", {
    required: true,
    name,
    tabIndex: -1,
    onFocus: onFocus2,
    css: _ref2,
    value: "",
    onChange: function onChange2() {
    }
  });
};
var formatGroupLabel = function formatGroupLabel2(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel2(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue2(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled2(option) {
  return !!option.isDisabled;
};
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css,
  valueContainer: valueContainerCSS
};
var colors = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
};
var borderRadius = 4;
var baseUnit = 4;
var controlHeight = 38;
var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit,
  controlHeight,
  menuGutter
};
var defaultTheme = {
  borderRadius,
  colors,
  spacing
};
var defaultProps = {
  "aria-live": "polite",
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return "No options";
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function screenReaderStatus(_ref3) {
    var count = _ref3.count;
    return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true
};
function toCategorizedOption(props, option, selectValue, index2) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = getOptionLabel(props, option);
  var value = getOptionValue(props, option);
  return {
    type: "option",
    data: option,
    isDisabled,
    isSelected,
    label,
    value,
    index: index2
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function(groupOrOption, groupOrOptionIndex) {
    if ("options" in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function(option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function(categorizedOption2) {
        return isFocusable(props, categorizedOption2);
      });
      return categorizedOptions.length > 0 ? {
        type: "group",
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : void 0;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : void 0;
  }).filter(notNullish);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue, inputValue = _props$inputValue === void 0 ? "" : _props$inputValue;
  var data2 = categorizedOption.data, isSelected = categorizedOption.isSelected, label = categorizedOption.label, value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label,
    value,
    data: data2
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue, lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options2) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options2.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options2[0];
}
var getOptionLabel = function getOptionLabel3(props, data2) {
  return props.getOptionLabel(data2);
};
var getOptionValue = function getOptionValue3(props, data2) {
  return props.getOptionValue(data2);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === "function" ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1)
    return true;
  if (typeof props.isOptionSelected === "function") {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue(props, option);
  return selectValue.some(function(i2) {
    return getOptionValue(props, i2) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions2(props) {
  var hideSelectedOptions = props.hideSelectedOptions, isMulti = props.isMulti;
  if (hideSelectedOptions === void 0)
    return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select$1 = /* @__PURE__ */ function(_Component) {
  _inherits$2(Select3, _Component);
  var _super = _createSuper(Select3);
  function Select3(_props) {
    var _this;
    _classCallCheck$3(this, Select3);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = "";
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;
    _this.getControlRef = function(ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function(ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function(ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function(ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function(newValue, actionMeta) {
      var _this$props = _this.props, onChange2 = _this$props.onChange, name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange2(newValue, actionMeta);
    };
    _this.setValue = function(newValue, action, option) {
      var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti, inputValue = _this$props2.inputValue;
      _this.onInputChange("", {
        action: "set-value",
        prevInputValue: inputValue
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action,
        option
      });
    };
    _this.selectOption = function(newValue) {
      var _this$props3 = _this.props, blurInputOnSelect = _this$props3.blurInputOnSelect, isMulti = _this$props3.isMulti, name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue(multiValueAsValue(selectValue.filter(function(i2) {
          return _this.getOptionValue(i2) !== candidate;
        })), "deselect-option", newValue);
      } else if (!isDisabled) {
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), "select-option", newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), "select-option");
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: "select-option",
          option: newValue,
          name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function(removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function(i2) {
        return _this.getOptionValue(i2) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: "remove-value",
        removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function() {
      var selectValue = _this.state.selectValue;
      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: "clear",
        removedValues: selectValue
      });
    };
    _this.popValue = function() {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: "pop-value",
        removedValue: lastSelectedValue
      });
    };
    _this.getValue = function() {
      return _this.state.selectValue;
    };
    _this.cx = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function(data2) {
      return getOptionLabel(_this.props, data2);
    };
    _this.getOptionValue = function(data2) {
      return getOptionValue(_this.props, data2);
    };
    _this.getStyles = function(key, props) {
      var base2 = defaultStyles[key](props);
      base2.boxSizing = "border-box";
      var custom = _this.props.styles[key];
      return custom ? custom(base2, props) : base2;
    };
    _this.getElementId = function(element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function() {
      return defaultComponents(_this.props);
    };
    _this.buildCategorizedOptions = function() {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function() {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function() {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function() {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function(value, actionMeta) {
      _this.setState({
        ariaSelection: _objectSpread2$1({
          value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function(event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function(event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function(event) {
      if (event.defaultPrevented) {
        return;
      }
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu("first");
        }
      } else {
        if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled)
        return;
      var _this$props4 = _this.props, isMulti = _this$props4.isMulti, menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu("first");
      }
      event.preventDefault();
    };
    _this.onClearIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.preventDefault();
      _this.openAfterFocus = false;
      if (event.type === "touchend") {
        _this.focusInput();
      } else {
        setTimeout(function() {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function(event) {
      if (typeof _this.props.closeMenuOnScroll === "boolean") {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === "function") {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function() {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function() {
      _this.isComposing = false;
    };
    _this.onTouchStart = function(_ref22) {
      var touches = _ref22.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function(_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function(event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: "input-change",
        prevInputValue
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function(event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu("first");
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function(event) {
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange("", {
        action: "input-blur",
        prevInputValue
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function(focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      _this.setState({
        focusedOption
      });
    };
    _this.shouldHideSelectedOptions = function() {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onValueInputFocus = function(e2) {
      e2.preventDefault();
      e2.stopPropagation();
      _this.focus();
    };
    _this.onKeyDown = function(event) {
      var _this$props5 = _this.props, isMulti = _this$props5.isMulti, backspaceRemovesValue = _this$props5.backspaceRemovesValue, escapeClearsValue = _this$props5.escapeClearsValue, inputValue = _this$props5.inputValue, isClearable = _this$props5.isClearable, isDisabled = _this$props5.isDisabled, menuIsOpen = _this$props5.menuIsOpen, onKeyDown = _this$props5.onKeyDown, tabSelectsValue = _this$props5.tabSelectsValue, openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state, focusedOption = _this$state.focusedOption, focusedValue = _this$state.focusedValue, selectValue = _this$state.selectValue;
      if (isDisabled)
        return;
      if (typeof onKeyDown === "function") {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      _this.blockOptionHover = true;
      switch (event.key) {
        case "ArrowLeft":
          if (!isMulti || inputValue)
            return;
          _this.focusValue("previous");
          break;
        case "ArrowRight":
          if (!isMulti || inputValue)
            return;
          _this.focusValue("next");
          break;
        case "Delete":
        case "Backspace":
          if (inputValue)
            return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue)
              return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case "Tab":
          if (_this.isComposing)
            return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case "Enter":
          if (event.keyCode === 229) {
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption)
              return;
            if (_this.isComposing)
              return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case "Escape":
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange("", {
              action: "menu-close",
              prevInputValue: inputValue
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case " ":
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu("first");
            break;
          }
          if (!focusedOption)
            return;
          _this.selectOption(focusedOption);
          break;
        case "ArrowUp":
          if (menuIsOpen) {
            _this.focusOption("up");
          } else {
            _this.openMenu("last");
          }
          break;
        case "ArrowDown":
          if (menuIsOpen) {
            _this.focusOption("down");
          } else {
            _this.openMenu("first");
          }
          break;
        case "PageUp":
          if (!menuIsOpen)
            return;
          _this.focusOption("pageup");
          break;
        case "PageDown":
          if (!menuIsOpen)
            return;
          _this.focusOption("pagedown");
          break;
        case "Home":
          if (!menuIsOpen)
            return;
          _this.focusOption("first");
          break;
        case "End":
          if (!menuIsOpen)
            return;
          _this.focusOption("last");
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.instancePrefix = "react-select-" + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = cleanValue(_props.value);
    if (_props.menuIsOpen && _this.state.selectValue.length) {
      var focusableOptions = _this.buildFocusableOptions();
      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
      _this.state.focusedOption = focusableOptions[optionIndex];
    }
    return _this;
  }
  _createClass$2(Select3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        document.addEventListener("scroll", this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }
      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props, isDisabled = _this$props6.isDisabled, menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (isFocused && !isDisabled && prevProps.isDisabled || isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
        this.setState({
          isFocused: true
        });
      }
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener("scroll", this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef)
        return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef)
        return;
      this.inputRef.blur();
    }
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state, selectValue = _this$state2.selectValue, isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === "first" ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function() {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state, selectValue = _this$state3.selectValue, focusedValue = _this$state3.focusedValue;
      if (!this.props.isMulti)
        return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length)
        return;
      switch (direction) {
        case "previous":
          if (focusedIndex === 0) {
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case "next":
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first";
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options2 = this.getFocusableOptions();
      if (!options2.length)
        return;
      var nextFocus = 0;
      var focusedIndex = options2.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === "up") {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options2.length - 1;
      } else if (direction === "down") {
        nextFocus = (focusedIndex + 1) % options2.length;
      } else if (direction === "pageup") {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0)
          nextFocus = 0;
      } else if (direction === "pagedown") {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options2.length - 1)
          nextFocus = options2.length - 1;
      } else if (direction === "last") {
        nextFocus = options2.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options2[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: "getTheme",
    value: function getTheme() {
      if (!this.props.theme) {
        return defaultTheme;
      }
      if (typeof this.props.theme === "function") {
        return this.props.theme(defaultTheme);
      }
      return _objectSpread2$1(_objectSpread2$1({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue, cx = this.cx, getStyles = this.getStyles, getValue = this.getValue, selectOption = this.selectOption, setValue = this.setValue, props = this.props;
      var isMulti = props.isMulti, isRtl = props.isRtl, options2 = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue,
        cx,
        getStyles,
        getValue,
        hasValue,
        isMulti,
        isRtl,
        options: options2,
        selectOption,
        selectProps: props,
        setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props, isClearable2 = _this$props7.isClearable, isMulti = _this$props7.isMulti;
      if (isClearable2 === void 0)
        return isMulti;
      return isClearable2;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled3(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data2, context) {
      if (typeof this.props.formatOptionLabel === "function") {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data2, {
          context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data2);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel3(data2) {
      return this.props.formatGroupLabel(data2);
    }
  }, {
    key: "startListeningComposition",
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener("compositionstart", this.onCompositionStart, false);
        document.addEventListener("compositionend", this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener("compositionstart", this.onCompositionStart);
        document.removeEventListener("compositionend", this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener("touchstart", this.onTouchStart, false);
        document.addEventListener("touchmove", this.onTouchMove, false);
        document.addEventListener("touchend", this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener("touchstart", this.onTouchStart);
        document.removeEventListener("touchmove", this.onTouchMove);
        document.removeEventListener("touchend", this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props8 = this.props, isDisabled = _this$props8.isDisabled, isSearchable = _this$props8.isSearchable, inputId = _this$props8.inputId, inputValue = _this$props8.inputValue, tabIndex = _this$props8.tabIndex, form = _this$props8.form, menuIsOpen = _this$props8.menuIsOpen, required = _this$props8.required;
      var _this$getComponents = this.getComponents(), Input4 = _this$getComponents.Input;
      var _this$state4 = this.state, inputIsHidden = _this$state4.inputIsHidden, ariaSelection = _this$state4.ariaSelection;
      var commonProps = this.commonProps;
      var id2 = inputId || this.getElementId("input");
      var ariaAttributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
        "aria-autocomplete": "list",
        "aria-expanded": menuIsOpen,
        "aria-haspopup": true,
        "aria-errormessage": this.props["aria-errormessage"],
        "aria-invalid": this.props["aria-invalid"],
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-required": required,
        role: "combobox"
      }, menuIsOpen && {
        "aria-controls": this.getElementId("listbox"),
        "aria-owns": this.getElementId("listbox")
      }), !isSearchable && {
        "aria-readonly": true
      }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus" && {
        "aria-describedby": this.getElementId("live-region")
      } : {
        "aria-describedby": this.getElementId("placeholder")
      });
      if (!isSearchable) {
        return /* @__PURE__ */ react.exports.createElement(DummyInput, _extends$2({
          id: id2,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          disabled: isDisabled,
          tabIndex,
          inputMode: "none",
          form,
          value: ""
        }, ariaAttributes));
      }
      return /* @__PURE__ */ react.exports.createElement(Input4, _extends$2({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id: id2,
        innerRef: this.getInputRef,
        isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex,
        form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(), MultiValue3 = _this$getComponents2.MultiValue, MultiValueContainer2 = _this$getComponents2.MultiValueContainer, MultiValueLabel2 = _this$getComponents2.MultiValueLabel, MultiValueRemove2 = _this$getComponents2.MultiValueRemove, SingleValue3 = _this$getComponents2.SingleValue, Placeholder3 = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props, controlShouldRenderValue = _this$props9.controlShouldRenderValue, isDisabled = _this$props9.isDisabled, isMulti = _this$props9.isMulti, inputValue = _this$props9.inputValue, placeholder = _this$props9.placeholder;
      var _this$state5 = this.state, selectValue = _this$state5.selectValue, focusedValue = _this$state5.focusedValue, isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /* @__PURE__ */ react.exports.createElement(Placeholder3, _extends$2({}, commonProps, {
          key: "placeholder",
          isDisabled,
          isFocused,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function(opt, index2) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /* @__PURE__ */ react.exports.createElement(MultiValue3, _extends$2({}, commonProps, {
            components: {
              Container: MultiValueContainer2,
              Label: MultiValueLabel2,
              Remove: MultiValueRemove2
            },
            isFocused: isOptionFocused,
            isDisabled,
            key,
            index: index2,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e2) {
                e2.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, "value"));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /* @__PURE__ */ react.exports.createElement(SingleValue3, _extends$2({}, commonProps, {
        data: singleValue,
        isDisabled
      }), this.formatOptionLabel(singleValue, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(), ClearIndicator3 = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props, isDisabled = _this$props10.isDisabled, isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator3 || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ react.exports.createElement(ClearIndicator3, _extends$2({}, commonProps, {
        innerProps,
        isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(), LoadingIndicator3 = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props, isDisabled = _this$props11.isDisabled, isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator3 || !isLoading)
        return null;
      var innerProps = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ react.exports.createElement(LoadingIndicator3, _extends$2({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(), DropdownIndicator3 = _this$getComponents5.DropdownIndicator, IndicatorSeparator3 = _this$getComponents5.IndicatorSeparator;
      if (!DropdownIndicator3 || !IndicatorSeparator3)
        return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /* @__PURE__ */ react.exports.createElement(IndicatorSeparator3, _extends$2({}, commonProps, {
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(), DropdownIndicator3 = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator3)
        return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ react.exports.createElement(DropdownIndicator3, _extends$2({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(), Group3 = _this$getComponents7.Group, GroupHeading3 = _this$getComponents7.GroupHeading, Menu3 = _this$getComponents7.Menu, MenuList3 = _this$getComponents7.MenuList, MenuPortal3 = _this$getComponents7.MenuPortal, LoadingMessage3 = _this$getComponents7.LoadingMessage, NoOptionsMessage3 = _this$getComponents7.NoOptionsMessage, Option3 = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props, captureMenuScroll = _this$props12.captureMenuScroll, inputValue = _this$props12.inputValue, isLoading = _this$props12.isLoading, loadingMessage2 = _this$props12.loadingMessage, minMenuHeight = _this$props12.minMenuHeight, maxMenuHeight = _this$props12.maxMenuHeight, menuIsOpen = _this$props12.menuIsOpen, menuPlacement = _this$props12.menuPlacement, menuPosition = _this$props12.menuPosition, menuPortalTarget = _this$props12.menuPortalTarget, menuShouldBlockScroll = _this$props12.menuShouldBlockScroll, menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView, noOptionsMessage2 = _this$props12.noOptionsMessage, onMenuScrollToTop = _this$props12.onMenuScrollToTop, onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen)
        return null;
      var render = function render2(props, id2) {
        var type = props.type, data2 = props.data, isDisabled = props.isDisabled, isSelected = props.isSelected, label = props.label, value = props.value;
        var isFocused = focusedOption === data2;
        var onHover = isDisabled ? void 0 : function() {
          return _this4.onOptionHover(data2);
        };
        var onSelect = isDisabled ? void 0 : function() {
          return _this4.selectOption(data2);
        };
        var optionId = "".concat(_this4.getElementId("option"), "-").concat(id2);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /* @__PURE__ */ react.exports.createElement(Option3, _extends$2({}, commonProps, {
          innerProps,
          data: data2,
          isDisabled,
          isSelected,
          key: optionId,
          label,
          type,
          value,
          isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : void 0
        }), _this4.formatOptionLabel(props.data, "menu"));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function(item) {
          if (item.type === "group") {
            var _data = item.data, options2 = item.options, groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /* @__PURE__ */ react.exports.createElement(Group3, _extends$2({}, commonProps, {
              key: groupId,
              data: _data,
              options: options2,
              Heading: GroupHeading3,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function(option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === "option") {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage2({
          inputValue
        });
        if (message === null)
          return null;
        menuUI = /* @__PURE__ */ react.exports.createElement(LoadingMessage3, commonProps, message);
      } else {
        var _message = noOptionsMessage2({
          inputValue
        });
        if (_message === null)
          return null;
        menuUI = /* @__PURE__ */ react.exports.createElement(NoOptionsMessage3, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight,
        maxMenuHeight,
        menuPlacement,
        menuPosition,
        menuShouldScrollIntoView
      };
      var menuElement = /* @__PURE__ */ react.exports.createElement(MenuPlacer, _extends$2({}, commonProps, menuPlacementProps), function(_ref4) {
        var ref = _ref4.ref, _ref4$placerProps = _ref4.placerProps, placement = _ref4$placerProps.placement, maxHeight = _ref4$placerProps.maxHeight;
        return /* @__PURE__ */ react.exports.createElement(Menu3, _extends$2({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove,
            id: _this4.getElementId("listbox")
          },
          isLoading,
          placement
        }), /* @__PURE__ */ react.exports.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function(scrollTargetRef) {
          return /* @__PURE__ */ react.exports.createElement(MenuList3, _extends$2({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            isLoading,
            maxHeight,
            focusedOption
          }), menuUI);
        }));
      });
      return menuPortalTarget || menuPosition === "fixed" ? /* @__PURE__ */ react.exports.createElement(MenuPortal3, _extends$2({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement,
        menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props, delimiter2 = _this$props13.delimiter, isDisabled = _this$props13.isDisabled, isMulti = _this$props13.isMulti, name = _this$props13.name, required = _this$props13.required;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled)
        return;
      if (required && !this.hasValue()) {
        return /* @__PURE__ */ react.exports.createElement(RequiredInput, {
          name,
          onFocus: this.onValueInputFocus
        });
      }
      if (isMulti) {
        if (delimiter2) {
          var value = selectValue.map(function(opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter2);
          return /* @__PURE__ */ react.exports.createElement("input", {
            name,
            type: "hidden",
            value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function(opt, i2) {
            return /* @__PURE__ */ react.exports.createElement("input", {
              key: "i-".concat(i2),
              name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /* @__PURE__ */ react.exports.createElement("input", {
            name,
            type: "hidden",
            value: ""
          });
          return /* @__PURE__ */ react.exports.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
        return /* @__PURE__ */ react.exports.createElement("input", {
          name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state, ariaSelection = _this$state6.ariaSelection, focusedOption = _this$state6.focusedOption, focusedValue = _this$state6.focusedValue, isFocused = _this$state6.isFocused, selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /* @__PURE__ */ react.exports.createElement(LiveRegion, _extends$2({}, commonProps, {
        id: this.getElementId("live-region"),
        ariaSelection,
        focusedOption,
        focusedValue,
        isFocused,
        selectValue,
        focusableOptions
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(), Control3 = _this$getComponents8.Control, IndicatorsContainer3 = _this$getComponents8.IndicatorsContainer, SelectContainer3 = _this$getComponents8.SelectContainer, ValueContainer3 = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props, className2 = _this$props14.className, id2 = _this$props14.id, isDisabled = _this$props14.isDisabled, menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ react.exports.createElement(SelectContainer3, _extends$2({}, commonProps, {
        className: className2,
        innerProps: {
          id: id2,
          onKeyDown: this.onKeyDown
        },
        isDisabled,
        isFocused
      }), this.renderLiveRegion(), /* @__PURE__ */ react.exports.createElement(Control3, _extends$2({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled,
        isFocused,
        menuIsOpen
      }), /* @__PURE__ */ react.exports.createElement(ValueContainer3, _extends$2({}, commonProps, {
        isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ react.exports.createElement(IndicatorsContainer3, _extends$2({}, commonProps, {
        isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps, clearFocusValueOnUpdate = state.clearFocusValueOnUpdate, inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate, ariaSelection = state.ariaSelection, isFocused = state.isFocused, prevWasFocused = state.prevWasFocused;
      var options2 = props.options, value = props.value, menuIsOpen = props.menuIsOpen, inputValue = props.inputValue, isMulti = props.isMulti;
      var selectValue = cleanValue(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options2 !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue,
          focusedOption,
          focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: void 0
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: "initial-input-focus"
        };
        hasKeptFocus = !prevWasFocused;
      }
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus") {
        newAriaSelection = null;
      }
      return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select3;
}(react.exports.Component);
Select$1.defaultProps = defaultProps;
var StateManagedSelect = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  var baseSelectProps = useStateManager(props);
  return /* @__PURE__ */ react.exports.createElement(Select$1, _extends$2({
    ref
  }, baseSelectProps));
});
var Select = StateManagedSelect;
function DecoderInfo({ decoderInfo }) {
  console.log(decoderInfo);
  function printoutQuality(timeElapsed, percentLost, forcePending) {
    let firstIndex;
    let secondIndex;
    let minsElapsed;
    if (timeElapsed === null || typeof timeElapsed === "undefined") {
      forcePending = true;
    } else {
      firstIndex = parseInt(timeElapsed.indexOf("hr")) + 2;
      secondIndex = parseInt(timeElapsed.indexOf("min"));
      minsElapsed = parseInt(
        timeElapsed.substring(firstIndex, secondIndex).trim()
      );
    }
    if (forcePending || minsElapsed < 1) {
      return /* @__PURE__ */ React$1.createElement("span", {
        class: "quality-badge pending-quality"
      }, "Pending");
    } else if (percentLost <= 2) {
      return /* @__PURE__ */ React$1.createElement("span", {
        class: "quality-badge good-quality"
      }, "Good");
    } else if (percentLost > 2 && percentLost <= 8) {
      return /* @__PURE__ */ React$1.createElement("span", {
        class: "quality-badge fair-quality"
      }, "Fair");
    } else {
      return /* @__PURE__ */ React$1.createElement("span", {
        class: "quality-badge bad-quality"
      }, "Poor");
    }
  }
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "device-record"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "device-record-text-wrapper"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "device-record-text-top"
  }, /* @__PURE__ */ React$1.createElement("div", null, "IP: ", decoderInfo.getAttribute("ip"), ":", decoderInfo.getAttribute("port")), /* @__PURE__ */ React$1.createElement("div", null, "Quality:", printoutQuality(
    decoderInfo.getAttribute(
      "time_elapsed_for_decoder"
    ),
    decoderInfo.getAttribute("perc"),
    decoderInfo.getAttribute("force_pending") == 1
  )), /* @__PURE__ */ React$1.createElement("div", null, "Duration:", decoderInfo.getAttribute("time_elapsed_for_decoder")))), /* @__PURE__ */ React$1.createElement("button", {
    className: "disconnect-btn"
  }, "Disconnect"));
}
var lib$2 = { exports: {} };
var Modal$2 = {};
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
var ModalPortal = { exports: {} };
var focusManager = {};
var tabbable = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = findTabbableDescendants;
  /*!
   * Adapted from jQuery UI core
   *
   * http://jqueryui.com
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/category/ui-core/
   */
  var DISPLAY_NONE = "none";
  var DISPLAY_CONTENTS = "contents";
  var tabbableNode = /input|select|textarea|button|object|iframe/;
  function isNotOverflowing(element, style2) {
    return style2.getPropertyValue("overflow") !== "visible" || element.scrollWidth <= 0 && element.scrollHeight <= 0;
  }
  function hidesContents(element) {
    var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
    if (zeroSize && !element.innerHTML)
      return true;
    try {
      var style2 = window.getComputedStyle(element);
      var displayValue = style2.getPropertyValue("display");
      return zeroSize ? displayValue !== DISPLAY_CONTENTS && isNotOverflowing(element, style2) : displayValue === DISPLAY_NONE;
    } catch (exception) {
      console.warn("Failed to inspect element style");
      return false;
    }
  }
  function visible(element) {
    var parentElement = element;
    var rootNode = element.getRootNode && element.getRootNode();
    while (parentElement) {
      if (parentElement === document.body)
        break;
      if (rootNode && parentElement === rootNode)
        parentElement = rootNode.host.parentNode;
      if (hidesContents(parentElement))
        return false;
      parentElement = parentElement.parentNode;
    }
    return true;
  }
  function focusable(element, isTabIndexNotNaN) {
    var nodeName = element.nodeName.toLowerCase();
    var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
    return res && visible(element);
  }
  function tabbable2(element) {
    var tabIndex = element.getAttribute("tabindex");
    if (tabIndex === null)
      tabIndex = void 0;
    var isTabIndexNaN = isNaN(tabIndex);
    return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
  }
  function findTabbableDescendants(element) {
    var descendants = [].slice.call(element.querySelectorAll("*"), 0).reduce(function(finished, el) {
      return finished.concat(!el.shadowRoot ? [el] : findTabbableDescendants(el.shadowRoot));
    }, []);
    return descendants.filter(tabbable2);
  }
  module.exports = exports["default"];
})(tabbable, tabbable.exports);
Object.defineProperty(focusManager, "__esModule", {
  value: true
});
focusManager.resetState = resetState$4;
focusManager.log = log$4;
focusManager.handleBlur = handleBlur;
focusManager.handleFocus = handleFocus;
focusManager.markForFocusLater = markForFocusLater;
focusManager.returnFocus = returnFocus;
focusManager.popWithoutFocus = popWithoutFocus;
focusManager.setupScopedFocus = setupScopedFocus;
focusManager.teardownScopedFocus = teardownScopedFocus;
var _tabbable = tabbable.exports;
var _tabbable2 = _interopRequireDefault$4(_tabbable);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;
function resetState$4() {
  focusLaterElements = [];
}
function log$4() {
}
function handleBlur() {
  needToFocus = true;
}
function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    setTimeout(function() {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}
function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}
function returnFocus() {
  var preventScroll = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus({ preventScroll });
    }
    return;
  } catch (e2) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}
function setupScopedFocus(element) {
  modalElement = element;
  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}
function teardownScopedFocus() {
  modalElement = null;
  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}
var scopeTab = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = scopeTab2;
  var _tabbable3 = tabbable.exports;
  var _tabbable22 = _interopRequireDefault2(_tabbable3);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function getActiveElement() {
    var el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return el.activeElement.shadowRoot ? getActiveElement(el.activeElement.shadowRoot) : el.activeElement;
  }
  function scopeTab2(node2, event) {
    var tabbable2 = (0, _tabbable22.default)(node2);
    if (!tabbable2.length) {
      event.preventDefault();
      return;
    }
    var target = void 0;
    var shiftKey = event.shiftKey;
    var head = tabbable2[0];
    var tail = tabbable2[tabbable2.length - 1];
    var activeElement = getActiveElement();
    if (node2 === activeElement) {
      if (!shiftKey)
        return;
      target = tail;
    }
    if (tail === activeElement && !shiftKey) {
      target = head;
    }
    if (head === activeElement && shiftKey) {
      target = tail;
    }
    if (target) {
      event.preventDefault();
      target.focus();
      return;
    }
    var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
    var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (!isSafariDesktop)
      return;
    var x2 = tabbable2.indexOf(activeElement);
    if (x2 > -1) {
      x2 += shiftKey ? -1 : 1;
    }
    target = tabbable2[x2];
    if (typeof target === "undefined") {
      event.preventDefault();
      target = shiftKey ? tail : head;
      target.focus();
      return;
    }
    event.preventDefault();
    target.focus();
  }
  module.exports = exports["default"];
})(scopeTab, scopeTab.exports);
var ariaAppHider$1 = {};
var warning = function() {
};
var warning_1 = warning;
var safeHTMLElement = {};
var exenv = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
(function(module) {
  (function() {
    var canUseDOM2 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    var ExecutionEnvironment = {
      canUseDOM: canUseDOM2,
      canUseWorkers: typeof Worker !== "undefined",
      canUseEventListeners: canUseDOM2 && !!(window.addEventListener || window.attachEvent),
      canUseViewport: canUseDOM2 && !!window.screen
    };
    if (module.exports) {
      module.exports = ExecutionEnvironment;
    } else {
      window.ExecutionEnvironment = ExecutionEnvironment;
    }
  })();
})(exenv);
Object.defineProperty(safeHTMLElement, "__esModule", {
  value: true
});
safeHTMLElement.canUseDOM = safeHTMLElement.SafeNodeList = safeHTMLElement.SafeHTMLCollection = void 0;
var _exenv = exenv.exports;
var _exenv2 = _interopRequireDefault$3(_exenv);
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var EE = _exenv2.default;
var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};
safeHTMLElement.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {};
safeHTMLElement.SafeNodeList = EE.canUseDOM ? window.NodeList : {};
safeHTMLElement.canUseDOM = EE.canUseDOM;
safeHTMLElement.default = SafeHTMLElement;
Object.defineProperty(ariaAppHider$1, "__esModule", {
  value: true
});
ariaAppHider$1.resetState = resetState$3;
ariaAppHider$1.log = log$3;
ariaAppHider$1.assertNodeList = assertNodeList;
ariaAppHider$1.setElement = setElement;
ariaAppHider$1.validateElement = validateElement;
ariaAppHider$1.hide = hide;
ariaAppHider$1.show = show;
ariaAppHider$1.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
var _warning = warning_1;
var _warning2 = _interopRequireDefault$2(_warning);
var _safeHTMLElement$1 = safeHTMLElement;
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var globalElement = null;
function resetState$3() {
  if (globalElement) {
    if (globalElement.removeAttribute) {
      globalElement.removeAttribute("aria-hidden");
    } else if (globalElement.length != null) {
      globalElement.forEach(function(element) {
        return element.removeAttribute("aria-hidden");
      });
    } else {
      document.querySelectorAll(globalElement).forEach(function(element) {
        return element.removeAttribute("aria-hidden");
      });
    }
  }
  globalElement = null;
}
function log$3() {
}
function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}
function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement$1.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}
function validateElement(appElement) {
  var el = appElement || globalElement;
  if (el) {
    return Array.isArray(el) || el instanceof HTMLCollection || el instanceof NodeList ? el : [el];
  } else {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));
    return [];
  }
}
function hide(appElement) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = void 0;
  try {
    for (var _iterator = validateElement(appElement)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;
      el.setAttribute("aria-hidden", "true");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
function show(appElement) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = void 0;
  try {
    for (var _iterator2 = validateElement(appElement)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var el = _step2.value;
      el.removeAttribute("aria-hidden");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}
function documentNotReadyOrSSRTesting() {
  globalElement = null;
}
var classList = {};
Object.defineProperty(classList, "__esModule", {
  value: true
});
classList.resetState = resetState$2;
classList.log = log$2;
var htmlClassList = {};
var docBodyClassList = {};
function removeClass(at, cls) {
  at.classList.remove(cls);
}
function resetState$2() {
  var htmlElement = document.getElementsByTagName("html")[0];
  for (var cls in htmlClassList) {
    removeClass(htmlElement, htmlClassList[cls]);
  }
  var body = document.body;
  for (var _cls in docBodyClassList) {
    removeClass(body, docBodyClassList[_cls]);
  }
  htmlClassList = {};
  docBodyClassList = {};
}
function log$2() {
}
var incrementReference = function incrementReference2(poll, className2) {
  if (!poll[className2]) {
    poll[className2] = 0;
  }
  poll[className2] += 1;
  return className2;
};
var decrementReference = function decrementReference2(poll, className2) {
  if (poll[className2]) {
    poll[className2] -= 1;
  }
  return className2;
};
var trackClass = function trackClass2(classListRef, poll, classes) {
  classes.forEach(function(className2) {
    incrementReference(poll, className2);
    classListRef.add(className2);
  });
};
var untrackClass = function untrackClass2(classListRef, poll, classes) {
  classes.forEach(function(className2) {
    decrementReference(poll, className2);
    poll[className2] === 0 && classListRef.remove(className2);
  });
};
classList.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};
classList.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};
var portalOpenInstances$1 = {};
Object.defineProperty(portalOpenInstances$1, "__esModule", {
  value: true
});
portalOpenInstances$1.log = log$1;
portalOpenInstances$1.resetState = resetState$1;
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var PortalOpenInstances = function PortalOpenInstances2() {
  var _this = this;
  _classCallCheck$2(this, PortalOpenInstances2);
  this.register = function(openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };
  this.deregister = function(openInstance) {
    var index2 = _this.openInstances.indexOf(openInstance);
    if (index2 === -1) {
      return;
    }
    _this.openInstances.splice(index2, 1);
    _this.emit("deregister");
  };
  this.subscribe = function(callback) {
    _this.subscribers.push(callback);
  };
  this.emit = function(eventType) {
    _this.subscribers.forEach(function(subscriber) {
      return subscriber(
        eventType,
        _this.openInstances.slice()
      );
    });
  };
  this.openInstances = [];
  this.subscribers = [];
};
var portalOpenInstances = new PortalOpenInstances();
function log$1() {
  console.log("portalOpenInstances ----------");
  console.log(portalOpenInstances.openInstances.length);
  portalOpenInstances.openInstances.forEach(function(p2) {
    return console.log(p2);
  });
  console.log("end portalOpenInstances ----------");
}
function resetState$1() {
  portalOpenInstances = new PortalOpenInstances();
}
portalOpenInstances$1.default = portalOpenInstances;
var bodyTrap$1 = {};
Object.defineProperty(bodyTrap$1, "__esModule", {
  value: true
});
bodyTrap$1.resetState = resetState;
bodyTrap$1.log = log;
var _portalOpenInstances = portalOpenInstances$1;
var _portalOpenInstances2 = _interopRequireDefault$1(_portalOpenInstances);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var before = void 0, after = void 0, instances = [];
function resetState() {
  var _arr = [before, after];
  for (var _i = 0; _i < _arr.length; _i++) {
    var item = _arr[_i];
    if (!item)
      continue;
    item.parentNode && item.parentNode.removeChild(item);
  }
  before = after = null;
  instances = [];
}
function log() {
  console.log("bodyTrap ----------");
  console.log(instances.length);
  var _arr2 = [before, after];
  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var item = _arr2[_i2];
    var check2 = item || {};
    console.log(check2.nodeName, check2.className, check2.id);
  }
  console.log("edn bodyTrap ----------");
}
function focusContent() {
  if (instances.length === 0) {
    return;
  }
  instances[instances.length - 1].focusContent();
}
function bodyTrap(eventType, openInstances) {
  if (!before && !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }
  instances = openInstances;
  if (instances.length > 0) {
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}
_portalOpenInstances2.default.subscribe(bodyTrap);
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _extends2 = Object.assign || function(target) {
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
  var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var _createClass2 = function() {
    function defineProperties2(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties2(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _react3 = react.exports;
  var _propTypes3 = propTypes.exports;
  var _propTypes22 = _interopRequireDefault2(_propTypes3);
  var _focusManager = focusManager;
  var focusManager$1 = _interopRequireWildcard2(_focusManager);
  var _scopeTab = scopeTab.exports;
  var _scopeTab2 = _interopRequireDefault2(_scopeTab);
  var _ariaAppHider2 = ariaAppHider$1;
  var ariaAppHider2 = _interopRequireWildcard2(_ariaAppHider2);
  var _classList = classList;
  var classList$1 = _interopRequireWildcard2(_classList);
  var _safeHTMLElement3 = safeHTMLElement;
  var _safeHTMLElement22 = _interopRequireDefault2(_safeHTMLElement3);
  var _portalOpenInstances3 = portalOpenInstances$1;
  var _portalOpenInstances22 = _interopRequireDefault2(_portalOpenInstances3);
  function _interopRequireWildcard2(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key))
            newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn2(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var CLASS_NAMES = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  };
  var isTabKey = function isTabKey2(event) {
    return event.code === "Tab" || event.keyCode === 9;
  };
  var isEscKey = function isEscKey2(event) {
    return event.code === "Escape" || event.keyCode === 27;
  };
  var ariaHiddenInstances = 0;
  var ModalPortal2 = function(_Component) {
    _inherits2(ModalPortal3, _Component);
    function ModalPortal3(props) {
      _classCallCheck2(this, ModalPortal3);
      var _this = _possibleConstructorReturn2(this, (ModalPortal3.__proto__ || Object.getPrototypeOf(ModalPortal3)).call(this, props));
      _this.setOverlayRef = function(overlay) {
        _this.overlay = overlay;
        _this.props.overlayRef && _this.props.overlayRef(overlay);
      };
      _this.setContentRef = function(content) {
        _this.content = content;
        _this.props.contentRef && _this.props.contentRef(content);
      };
      _this.afterClose = function() {
        var _this$props = _this.props, appElement = _this$props.appElement, ariaHideApp = _this$props.ariaHideApp, htmlOpenClassName = _this$props.htmlOpenClassName, bodyOpenClassName2 = _this$props.bodyOpenClassName, parentSelector2 = _this$props.parentSelector;
        var parentDocument = parentSelector2 && parentSelector2().ownerDocument || document;
        bodyOpenClassName2 && classList$1.remove(parentDocument.body, bodyOpenClassName2);
        htmlOpenClassName && classList$1.remove(parentDocument.getElementsByTagName("html")[0], htmlOpenClassName);
        if (ariaHideApp && ariaHiddenInstances > 0) {
          ariaHiddenInstances -= 1;
          if (ariaHiddenInstances === 0) {
            ariaAppHider2.show(appElement);
          }
        }
        if (_this.props.shouldFocusAfterRender) {
          if (_this.props.shouldReturnFocusAfterClose) {
            focusManager$1.returnFocus(_this.props.preventScroll);
            focusManager$1.teardownScopedFocus();
          } else {
            focusManager$1.popWithoutFocus();
          }
        }
        if (_this.props.onAfterClose) {
          _this.props.onAfterClose();
        }
        _portalOpenInstances22.default.deregister(_this);
      };
      _this.open = function() {
        _this.beforeOpen();
        if (_this.state.afterOpen && _this.state.beforeClose) {
          clearTimeout(_this.closeTimer);
          _this.setState({ beforeClose: false });
        } else {
          if (_this.props.shouldFocusAfterRender) {
            focusManager$1.setupScopedFocus(_this.node);
            focusManager$1.markForFocusLater();
          }
          _this.setState({ isOpen: true }, function() {
            _this.openAnimationFrame = requestAnimationFrame(function() {
              _this.setState({ afterOpen: true });
              if (_this.props.isOpen && _this.props.onAfterOpen) {
                _this.props.onAfterOpen({
                  overlayEl: _this.overlay,
                  contentEl: _this.content
                });
              }
            });
          });
        }
      };
      _this.close = function() {
        if (_this.props.closeTimeoutMS > 0) {
          _this.closeWithTimeout();
        } else {
          _this.closeWithoutTimeout();
        }
      };
      _this.focusContent = function() {
        return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
      };
      _this.closeWithTimeout = function() {
        var closesAt = Date.now() + _this.props.closeTimeoutMS;
        _this.setState({ beforeClose: true, closesAt }, function() {
          _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
        });
      };
      _this.closeWithoutTimeout = function() {
        _this.setState({
          beforeClose: false,
          isOpen: false,
          afterOpen: false,
          closesAt: null
        }, _this.afterClose);
      };
      _this.handleKeyDown = function(event) {
        if (isTabKey(event)) {
          (0, _scopeTab2.default)(_this.content, event);
        }
        if (_this.props.shouldCloseOnEsc && isEscKey(event)) {
          event.stopPropagation();
          _this.requestClose(event);
        }
      };
      _this.handleOverlayOnClick = function(event) {
        if (_this.shouldClose === null) {
          _this.shouldClose = true;
        }
        if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
          if (_this.ownerHandlesClose()) {
            _this.requestClose(event);
          } else {
            _this.focusContent();
          }
        }
        _this.shouldClose = null;
      };
      _this.handleContentOnMouseUp = function() {
        _this.shouldClose = false;
      };
      _this.handleOverlayOnMouseDown = function(event) {
        if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
          event.preventDefault();
        }
      };
      _this.handleContentOnClick = function() {
        _this.shouldClose = false;
      };
      _this.handleContentOnMouseDown = function() {
        _this.shouldClose = false;
      };
      _this.requestClose = function(event) {
        return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
      };
      _this.ownerHandlesClose = function() {
        return _this.props.onRequestClose;
      };
      _this.shouldBeClosed = function() {
        return !_this.state.isOpen && !_this.state.beforeClose;
      };
      _this.contentHasFocus = function() {
        return document.activeElement === _this.content || _this.content.contains(document.activeElement);
      };
      _this.buildClassName = function(which, additional) {
        var classNames2 = (typeof additional === "undefined" ? "undefined" : _typeof2(additional)) === "object" ? additional : {
          base: CLASS_NAMES[which],
          afterOpen: CLASS_NAMES[which] + "--after-open",
          beforeClose: CLASS_NAMES[which] + "--before-close"
        };
        var className2 = classNames2.base;
        if (_this.state.afterOpen) {
          className2 = className2 + " " + classNames2.afterOpen;
        }
        if (_this.state.beforeClose) {
          className2 = className2 + " " + classNames2.beforeClose;
        }
        return typeof additional === "string" && additional ? className2 + " " + additional : className2;
      };
      _this.attributesFromObject = function(prefix2, items) {
        return Object.keys(items).reduce(function(acc, name) {
          acc[prefix2 + "-" + name] = items[name];
          return acc;
        }, {});
      };
      _this.state = {
        afterOpen: false,
        beforeClose: false
      };
      _this.shouldClose = null;
      _this.moveFromContentToOverlay = null;
      return _this;
    }
    _createClass2(ModalPortal3, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.isOpen) {
          this.open();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (this.props.isOpen && !prevProps.isOpen) {
          this.open();
        } else if (!this.props.isOpen && prevProps.isOpen) {
          this.close();
        }
        if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
          this.focusContent();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.isOpen) {
          this.afterClose();
        }
        clearTimeout(this.closeTimer);
        cancelAnimationFrame(this.openAnimationFrame);
      }
    }, {
      key: "beforeOpen",
      value: function beforeOpen() {
        var _props = this.props, appElement = _props.appElement, ariaHideApp = _props.ariaHideApp, htmlOpenClassName = _props.htmlOpenClassName, bodyOpenClassName2 = _props.bodyOpenClassName, parentSelector2 = _props.parentSelector;
        var parentDocument = parentSelector2 && parentSelector2().ownerDocument || document;
        bodyOpenClassName2 && classList$1.add(parentDocument.body, bodyOpenClassName2);
        htmlOpenClassName && classList$1.add(parentDocument.getElementsByTagName("html")[0], htmlOpenClassName);
        if (ariaHideApp) {
          ariaHiddenInstances += 1;
          ariaAppHider2.hide(appElement);
        }
        _portalOpenInstances22.default.register(this);
      }
    }, {
      key: "render",
      value: function render() {
        var _props2 = this.props, id2 = _props2.id, className2 = _props2.className, overlayClassName = _props2.overlayClassName, defaultStyles2 = _props2.defaultStyles, children = _props2.children;
        var contentStyles = className2 ? {} : defaultStyles2.content;
        var overlayStyles = overlayClassName ? {} : defaultStyles2.overlay;
        if (this.shouldBeClosed()) {
          return null;
        }
        var overlayProps = {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends2({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        };
        var contentProps = _extends2({
          id: id2,
          ref: this.setContentRef,
          style: _extends2({}, contentStyles, this.props.style.content),
          className: this.buildClassName("content", className2),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleContentOnMouseDown,
          onMouseUp: this.handleContentOnMouseUp,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        }, this.attributesFromObject("aria", _extends2({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
          "data-testid": this.props.testId
        });
        var contentElement2 = this.props.contentElement(contentProps, children);
        return this.props.overlayElement(overlayProps, contentElement2);
      }
    }]);
    return ModalPortal3;
  }(_react3.Component);
  ModalPortal2.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  };
  ModalPortal2.propTypes = {
    isOpen: _propTypes22.default.bool.isRequired,
    defaultStyles: _propTypes22.default.shape({
      content: _propTypes22.default.object,
      overlay: _propTypes22.default.object
    }),
    style: _propTypes22.default.shape({
      content: _propTypes22.default.object,
      overlay: _propTypes22.default.object
    }),
    className: _propTypes22.default.oneOfType([_propTypes22.default.string, _propTypes22.default.object]),
    overlayClassName: _propTypes22.default.oneOfType([_propTypes22.default.string, _propTypes22.default.object]),
    parentSelector: _propTypes22.default.func,
    bodyOpenClassName: _propTypes22.default.string,
    htmlOpenClassName: _propTypes22.default.string,
    ariaHideApp: _propTypes22.default.bool,
    appElement: _propTypes22.default.oneOfType([_propTypes22.default.instanceOf(_safeHTMLElement22.default), _propTypes22.default.instanceOf(_safeHTMLElement3.SafeHTMLCollection), _propTypes22.default.instanceOf(_safeHTMLElement3.SafeNodeList), _propTypes22.default.arrayOf(_propTypes22.default.instanceOf(_safeHTMLElement22.default))]),
    onAfterOpen: _propTypes22.default.func,
    onAfterClose: _propTypes22.default.func,
    onRequestClose: _propTypes22.default.func,
    closeTimeoutMS: _propTypes22.default.number,
    shouldFocusAfterRender: _propTypes22.default.bool,
    shouldCloseOnOverlayClick: _propTypes22.default.bool,
    shouldReturnFocusAfterClose: _propTypes22.default.bool,
    preventScroll: _propTypes22.default.bool,
    role: _propTypes22.default.string,
    contentLabel: _propTypes22.default.string,
    aria: _propTypes22.default.object,
    data: _propTypes22.default.object,
    children: _propTypes22.default.node,
    shouldCloseOnEsc: _propTypes22.default.bool,
    overlayRef: _propTypes22.default.func,
    contentRef: _propTypes22.default.func,
    id: _propTypes22.default.string,
    overlayElement: _propTypes22.default.func,
    contentElement: _propTypes22.default.func,
    testId: _propTypes22.default.string
  };
  exports.default = ModalPortal2;
  module.exports = exports["default"];
})(ModalPortal, ModalPortal.exports);
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
  var prototype = Component.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
    );
  }
  if (typeof Component.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component;
}
var reactLifecyclesCompat_es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill
}, Symbol.toStringTag, { value: "Module" }));
var require$$6 = /* @__PURE__ */ getAugmentedNamespace(reactLifecyclesCompat_es);
Object.defineProperty(Modal$2, "__esModule", {
  value: true
});
Modal$2.bodyOpenClassName = Modal$2.portalClassName = void 0;
var _extends$1 = Object.assign || function(target) {
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
var _createClass$1 = function() {
  function defineProperties2(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties2(Constructor, staticProps);
    return Constructor;
  };
}();
var _react = react.exports;
var _react2 = _interopRequireDefault(_react);
var _reactDom = reactDom.exports;
var _reactDom2 = _interopRequireDefault(_reactDom);
var _propTypes = propTypes.exports;
var _propTypes2 = _interopRequireDefault(_propTypes);
var _ModalPortal = ModalPortal.exports;
var _ModalPortal2 = _interopRequireDefault(_ModalPortal);
var _ariaAppHider = ariaAppHider$1;
var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
var _safeHTMLElement = safeHTMLElement;
var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
var _reactLifecyclesCompat = require$$6;
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$1(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var portalClassName = Modal$2.portalClassName = "ReactModalPortal";
var bodyOpenClassName = Modal$2.bodyOpenClassName = "ReactModal__Body--open";
var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== void 0;
var createHTMLElement = function createHTMLElement2(name) {
  return document.createElement(name);
};
var getCreatePortal = function getCreatePortal2() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};
function getParentElement(parentSelector2) {
  return parentSelector2();
}
var Modal$1 = function(_Component) {
  _inherits$1(Modal2, _Component);
  function Modal2() {
    var _ref3;
    var _temp2, _this, _ret;
    _classCallCheck$1(this, Modal2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp2 = (_this = _possibleConstructorReturn$1(this, (_ref3 = Modal2.__proto__ || Object.getPrototypeOf(Modal2)).call.apply(_ref3, [this].concat(args))), _this), _this.removePortal = function() {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent && parent.contains(_this.node)) {
        parent.removeChild(_this.node);
      } else {
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
      }
    }, _this.portalRef = function(ref) {
      _this.portal = ref;
    }, _this.renderPortal = function(props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends$1({ defaultStyles: Modal2.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp2), _possibleConstructorReturn$1(_this, _ret);
  }
  _createClass$1(Modal2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM)
        return;
      if (!isReact16) {
        this.node = createHTMLElement("div");
      }
      this.node.className = this.props.portalClassName;
      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);
      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent, nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM)
        return;
      var _props = this.props, isOpen = _props.isOpen, portalClassName2 = _props.portalClassName;
      if (prevProps.portalClassName !== portalClassName2) {
        this.node.className = portalClassName2;
      }
      var prevParent = snapshot.prevParent, nextParent = snapshot.nextParent;
      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }
      if (!prevProps.isOpen && !isOpen)
        return;
      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal)
        return;
      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);
      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }
        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }
      if (!this.node && isReact16) {
        this.node = createHTMLElement("div");
      }
      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends$1({
        ref: this.portalRef,
        defaultStyles: Modal2.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }
  }]);
  return Modal2;
}(_react.Component);
Modal$1.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func
};
Modal$1.defaultProps = {
  isOpen: false,
  portalClassName,
  bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  preventScroll: false,
  parentSelector: function parentSelector() {
    return document.body;
  },
  overlayElement: function overlayElement(props, contentEl) {
    return _react2.default.createElement(
      "div",
      props,
      contentEl
    );
  },
  contentElement: function contentElement(props, children) {
    return _react2.default.createElement(
      "div",
      props,
      children
    );
  }
};
Modal$1.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
(0, _reactLifecyclesCompat.polyfill)(Modal$1);
Modal$2.default = Modal$1;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _Modal = Modal$2;
  var _Modal2 = _interopRequireDefault2(_Modal);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  exports.default = _Modal2.default;
  module.exports = exports["default"];
})(lib$2, lib$2.exports);
var Modal = /* @__PURE__ */ getDefaultExportFromCjs(lib$2.exports);
function SessionsPanel(props) {
  let [showEmailPage, setShowEmailPage] = react.exports.useState(false);
  let [selectedOptions, setSelectedOptions] = react.exports.useState([]);
  let localStorageEmails = JSON.parse(localStorage.getItem("storedEmails"));
  let [isFromClearSession, setIsFromClearSession] = react.exports.useState(false);
  const [modalIsOpen, setModalIsOpen] = react.exports.useState(false);
  const [colorspaceOptions, setColorspaceOptions] = react.exports.useState([]);
  const [proto, setProto] = react.exports.useState("0");
  let sessionDashXML = props.sessionDashXML;
  let buttons = props.buttons || [];
  if (buttons.length > 0) {
    buttons = buttons.map((button) => button.toLowerCase());
  }
  let selectedColorspaceId = "0";
  let session_id = "";
  let ldmpSettings = "";
  if (isFromClearSession) {
    if (sessionDashXML === "none" || sessionDashXML === "") {
      setIsFromClearSession(false);
    } else {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(sessionDashXML, "text/xml");
      let parsedXML = xmlDoc.getElementsByTagName("body")[0];
      const encKey = parsedXML.getAttribute("enc_key");
      if (localStorage.getItem("lastSessionFromClear") === encKey) {
        sessionDashXML = "none";
      }
    }
  }
  let customHost = props.customHost;
  let customPort = props.customPort;
  let opts = [];
  if (localStorageEmails) {
    opts = localStorageEmails;
  }
  let [emailOptions, setEmailOptions] = react.exports.useState(opts);
  const endpoint2 = location.origin;
  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "50px",
      backgroundColor: "rgb(28, 28, 30)",
      color: "rgb(240, 240, 240)",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };
  async function handleCreateNewSessionBtnWrapper() {
    let sessionIDElems = document.getElementsByClassName("session-id-readout");
    let res = await props.handleCreateNewSessionBtn();
    if (res !== void 0 && res !== null && res !== "Invalid Login") {
      for (let elem of sessionIDElems) {
        elem.innerHTML = `<span style="color: green">Creating...</span>`;
        if (document.querySelector(".close-session-btn")) {
          document.querySelector(".close-session-btn").style.display = "none";
          setTimeout(() => {
            document.querySelector(
              ".close-session-btn"
            ).style.display = "initial";
          }, 7e3);
        }
      }
    }
    setIsFromClearSession(false);
  }
  function clearSession() {
    let sessionDRM = localStorage.getItem("sessionDRM");
    localStorage.setItem("lastSessionFromClear", sessionDRM);
    localStorage.removeItem("sessionDRM");
    localStorage.removeItem("sessionTitle");
    setShowEmailPage(false);
    setIsFromClearSession(true);
  }
  function sendInvites() {
    const hostName = localStorage.getItem("hostName");
    const emailTitle = document.querySelector(
      ".email-page-title-input"
    ).value;
    let sessionID = document.querySelector(
      ".session-id-readout"
    ).textContent;
    sessionID = sessionID.substring(1, sessionID.length);
    let emailAddresses = selectedOptions.map((email) => email.value);
    if (hostName && emailTitle && emailAddresses.length > 0) {
      sendEmailsViaPHP(emailAddresses, hostName, emailTitle, sessionID);
    } else if (!hostName && emailTitle && emailAddresses.length > 0) {
      let host = prompt("Please enter a host name for this email");
      localStorage.setItem("hostName", host);
      sendEmailsViaPHP(emailAddresses, hostName, emailTitle, sessionID);
    } else {
      alert(
        "Please enter a host name, session title and at least one email address."
      );
    }
    setSelectedOptions([]);
  }
  function validateEmail(email) {
    var re2 = /\S+@\S+\.\S+/;
    return re2.test(email);
  }
  react.exports.useEffect(() => {
    async function getColorspaceOptions() {
      let response = await fetch(
        `http://${localStorage.getItem("cloudServer")}${localStorage.getItem("customServerPostfix") || ".streambox.com"}/ls/GetColorspaceListXML.php`
      );
      const xmlResponse = await response.text();
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(xmlResponse, "text/xml");
      let parsedXML = xmlDoc.getElementsByTagName("body")[0].childNodes;
      let options2 = [];
      let childNodes = parsedXML[0].childNodes;
      for (let node2 of childNodes) {
        let option = /* @__PURE__ */ React$1.createElement("option", {
          value: node2.getAttribute("id")
        }, node2.getAttribute("name"));
        options2.push(option);
      }
      setColorspaceOptions(options2);
    }
    getColorspaceOptions();
  }, []);
  react.exports.useEffect(() => {
    if (document.querySelector(".email-page-body-select")) {
      getSessionLocalStorage();
      document.querySelector(".email-page-body-select").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          let email = document.querySelector(".select__input").value;
          if (validateEmail(email)) {
            let emailObj = {
              value: email,
              label: email
            };
            let storedEmails = JSON.parse(
              localStorage.getItem("storedEmails")
            );
            let emailExists = false;
            if (storedEmails) {
              for (let thisEmail of storedEmails) {
                if (email === thisEmail.value) {
                  emailExists = true;
                }
              }
              if (storedEmails.length >= 10) {
                storedEmails.shift();
              }
            }
            if (!emailExists) {
              if (storedEmails) {
                localStorage.setItem(
                  "storedEmails",
                  JSON.stringify([
                    ...storedEmails,
                    emailObj
                  ])
                );
              } else {
                localStorage.setItem(
                  "storedEmails",
                  JSON.stringify([emailObj])
                );
              }
              setEmailOptions(
                JSON.parse(
                  localStorage.getItem("storedEmails")
                )
              );
            }
          } else {
            alert(
              "The email entered is invalid. Please enter valid email."
            );
          }
        }
      });
    }
  }, [showEmailPage]);
  function getSessionLocalStorage() {
    document.querySelector(".email-page-title-input").value = localStorage.getItem("sessionTitle");
  }
  function handleClick(text) {
    if (text === "openEmailPage") {
      setShowEmailPage(true);
    } else if (text === "close") {
      setShowEmailPage(false);
    }
  }
  function openAdvancedSettings() {
    setModalIsOpen(true);
  }
  function closeAdvancedSettngs() {
    setModalIsOpen(false);
  }
  async function sendEmailsViaPHP(emailAddresses, hostName, emailTitle, sessionID) {
    let response = "";
    {
      response = await fetch(
        `${endpoint2}/sbuiauth/sendEmail.php?emailAddresses=${emailAddresses.join(
          ","
        )}&hostName=${encodeURIComponent(
          hostName
        )}&emailTitle=${encodeURIComponent(
          emailTitle
        )}&sessionID=${sessionID}`
      );
    }
    document.querySelector(".send-invite-btn").textContent = "Sending...";
    let result = await response.text();
    alert(result);
    if (await getStreamingStatus() == 0) {
      if (confirm(
        "Streaming is stopped. Would you like to start streaming?"
      ) == true) {
        let response2 = "";
        {
          let route2 = "";
          if (customPort !== void 0) {
            route2 = `/REST/encoder/${customPort}/metadata`;
          } else {
            route2 = "/REST/encoder/metadata";
          }
          response2 = await fetch(
            (customHost !== void 0 ? customHost : endpoint2) + route2
          );
        }
        let metadataResult = await response2.json();
        let networkObj = metadataResult.current_stat.filter(
          (res) => res.cname === "Meta_Network1"
        );
        const apiDRM = networkObj[0]["val"];
        let temporaryRoute = "";
        if (customPort !== void 0) {
          temporaryRoute = `/REST/encoder/${customPort}/network`;
        } else {
          temporaryRoute = "/REST/encoder/network";
        }
        const apiServerIP = await getPropertyFromAPI(
          "decoderIP",
          temporaryRoute,
          customHost
        );
        const sessionServerIP = localStorage.getItem("sessionServerIP");
        if (localStorage.getItem("sessionDRM") !== void 0 && localStorage.getItem("sessionDRM") !== null && localStorage.getItem("sessionDRM") !== "") {
          if (localStorage.getItem("sessionDRM") !== apiDRM) {
            if (confirm(
              "There is a mismatch between the session DRM and DRM on the encoder.  Would you like to set the encoder DRM to the session DRM?"
            ) == true) {
              await setNetwork1Api(
                localStorage.getItem("sessionDRM"),
                customPort,
                customHost
              );
            }
          }
        }
        if (sessionServerIP !== void 0 && sessionServerIP !== null && sessionServerIP !== "") {
          if (sessionServerIP !== apiServerIP) {
            if (confirm(
              `Decoder IP is not set to the correct server IP (${sessionServerIP}). Do you want to set this?`
            ) == true) {
              await setDecoderIPToServerIP(
                sessionServerIP,
                customPort,
                customHost
              );
            }
          }
        }
        let route = "";
        if (customPort !== void 0) {
          route = `/REST/encoder/${customPort}/action`;
        } else {
          route = "/REST/encoder/action";
        }
        await POSTData(
          (customHost !== void 0 ? customHost : endpoint2) + route,
          {
            action_list: ["start"]
          }
        ).then((data2) => {
          console.log("Streaming started" + JSON.stringify(data2));
        });
      }
    }
    handleClick("close");
  }
  const handleChange = (options2) => {
    setSelectedOptions(options2);
  };
  if (sessionDashXML === "") {
    return /* @__PURE__ */ React$1.createElement("div", {
      className: "sessions-panel-container"
    }, /* @__PURE__ */ React$1.createElement("div", {
      className: "sessions-panel-top"
    }, /* @__PURE__ */ React$1.createElement("div", null, "Session ID:", " ", /* @__PURE__ */ React$1.createElement("span", {
      className: "session-id-top"
    }, /* @__PURE__ */ React$1.createElement("span", {
      className: "session-id-readout"
    }, "none"))), buttons.includes("create") ? /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns",
      onClick: handleCreateNewSessionBtnWrapper,
      disabled: true
    }, "Create New Session") : "", buttons.includes("advanced") ? /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns",
      onClick: openAdvancedSettings,
      disabled: true
    }, "Advanced") : "", buttons.includes("invite") ? /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns",
      disabled: true
    }, "Invite to Session...") : ""), /* @__PURE__ */ React$1.createElement("hr", null), /* @__PURE__ */ React$1.createElement("div", {
      className: "msg-wrapper"
    }, /* @__PURE__ */ React$1.createElement("div", {
      className: "no-session-msg"
    }, "Logging Into Server...")));
  }
  if (sessionDashXML === "none") {
    return /* @__PURE__ */ React$1.createElement("div", {
      className: "sessions-panel-container"
    }, /* @__PURE__ */ React$1.createElement("div", {
      className: "sessions-panel-top"
    }, /* @__PURE__ */ React$1.createElement("div", null, "Session ID:", " ", /* @__PURE__ */ React$1.createElement("span", {
      className: "session-id-top"
    }, /* @__PURE__ */ React$1.createElement("span", {
      className: "session-id-readout"
    }, "none"))), buttons.includes("create") ? /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns",
      onClick: handleCreateNewSessionBtnWrapper
    }, "Create New Session") : "", buttons.includes("advanced") ? /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns",
      onClick: openAdvancedSettings,
      disabled: true
    }, "Advanced") : "", buttons.includes("invite") ? /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns",
      disabled: true
    }, "Invite to Session...") : ""), /* @__PURE__ */ React$1.createElement("hr", null), /* @__PURE__ */ React$1.createElement("div", {
      className: "msg-wrapper"
    }, /* @__PURE__ */ React$1.createElement("div", {
      className: "no-session-msg"
    }, "Please create a new session")));
  } else {
    let setupProtoRadios = function() {
      if (ldmpSettings.proto == 1) {
        handleLDMPClick();
      } else {
        handleUDPClick();
      }
      document.getElementById("MPUDP_ACK_TO").value = ldmpSettings.MPUDP_ACK_TO;
      document.getElementById("MPUDP_SND_TO").value = ldmpSettings.MPUDP_SND_TO;
      document.getElementById("MPUDP_CWND").value = ldmpSettings.MPUDP_CWND;
      document.getElementById("MPUDP_CWND_MIN").value = ldmpSettings.MPUDP_CWND_MIN;
      document.getElementById("MPUDP_CWND_MAX").value = ldmpSettings.MPUDP_CWND_MAX;
      document.getElementById("codecPacketSize").value = ldmpSettings.codecPacketSize;
    }, handleUDPClick = function() {
      document.getElementById("proto_udp").checked = true;
      document.getElementById("proto_ldmp").checked = false;
      document.querySelector(".ldmp-settings-body").style.display = "none";
      setProto("0");
    }, handleLDMPClick = function() {
      document.getElementById("proto_ldmp").checked = true;
      document.getElementById("proto_udp").checked = false;
      document.querySelector(".ldmp-settings-body").style.display = "initial";
      setProto("1");
    };
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(sessionDashXML, "text/xml");
    let parsedXML = xmlDoc.getElementsByTagName("body")[0];
    let wrongLogin = false;
    let decoderInfo;
    let styles2;
    let decInfoArray;
    let sessionIsLive;
    let sessionServerIP;
    let sessionID;
    let lastSessionFromClear;
    let decKey;
    let encKey;
    let localStorageSessionDRM = localStorage.getItem("sessionDRM");
    if (parsedXML.getAttributeNames().length === 0 || localStorageSessionDRM === "Invalid Login") {
      if (localStorageSessionDRM === "Invalid Login") {
        localStorage.removeItem("sessionDRM");
      }
      wrongLogin = true;
    } else {
      decoderInfo = xmlDoc.getElementsByTagName("body")[0].childNodes;
      styles2 = {
        option: (provided) => ({
          ...provided,
          color: "black"
        })
      };
      decInfoArray = [];
      sessionIsLive = parsedXML.getAttribute("session_islive");
      sessionServerIP = parsedXML.getAttribute("session_transporter_ip");
      sessionID = parsedXML.getAttribute("dec_key");
      localStorage.setItem("sessionServerIP", sessionServerIP);
      setDecoderIPToServerIP(sessionServerIP, customPort, customHost);
      if (decoderInfo) {
        if (decoderInfo[0].getElementsByTagName("dec")[0]) {
          for (let decInfo of decoderInfo[0].getElementsByTagName(
            "dec"
          )) {
            decInfoArray.push(/* @__PURE__ */ React$1.createElement(DecoderInfo, {
              decoderInfo: decInfo
            }));
          }
        }
      }
      lastSessionFromClear = localStorage.getItem("lastSessionFromClear");
      decKey = parsedXML.getAttribute("dec_key");
      encKey = parsedXML.getAttribute("enc_key");
      if (encKey === lastSessionFromClear) {
        let sessionIDElems = document.getElementsByClassName("session-id-readout");
        for (let elem of sessionIDElems) {
          elem.innerHTML = `<span style="color: green">Creating...</span>`;
          if (document.querySelector(".close-session-btn")) {
            document.querySelector(
              ".close-session-btn"
            ).style.display = "none";
            setTimeout(() => {
              document.querySelector(
                ".close-session-btn"
              ).style.display = "initial";
            }, 7e3);
          }
        }
      }
      selectedColorspaceId = parsedXML.getAttribute("colorspace_id");
      session_id = parsedXML.getAttribute("session_id");
      ldmpSettings = JSON.parse(
        parsedXML.getAttribute("session_ldmp_params") !== "" ? parsedXML.getAttribute("session_ldmp_params") : parsedXML.getAttribute("user_ldmp_params")
      );
    }
    async function setColorspaceForSessionID() {
      let login = localStorage.getItem("cloudLogin");
      let hashedPass = localStorage.getItem("cloudPass");
      const sessionId = session_id;
      const colorspaceId = document.getElementById(
        "set-colorspace-select"
      ).selectedOptions[0].value;
      let response = await fetch(
        `http://${localStorage.getItem("cloudServer")}${localStorage.getItem("customServerPostfix") || ".streambox.com"}/ls/SetColorspaceXML.php?colorspace_id=${colorspaceId}&session_id=${sessionId}&login=${login}&hashedPass=${hashedPass}`
      );
      let result = await response.text();
      if (result === '<?xml version="1.0" encoding="UTF-8"?>\n<body result="success"/>\n') {
        alert("Colorspace set");
      } else {
        alert("Something went wrong setting colorspace");
      }
    }
    async function setSessionLdmpParams() {
      let login = localStorage.getItem("cloudLogin");
      let hashedPass = localStorage.getItem("cloudPass");
      const sessionId = session_id;
      let sessionLdmpParams = {
        proto,
        MPUDP_ACK_TO: document.getElementById("MPUDP_ACK_TO").value,
        codecPacketSize: document.getElementById("codecPacketSize").value,
        MPUDP_SND_TO: document.getElementById("MPUDP_SND_TO").value,
        MPUDP_CWND: document.getElementById("MPUDP_CWND").value,
        MPUDP_CWND_MIN: document.getElementById("MPUDP_CWND_MIN").value,
        MPUDP_CWND_MAX: document.getElementById("MPUDP_CWND_MAX").value
      };
      sessionLdmpParams = JSON.stringify(sessionLdmpParams);
      let response = await fetch(
        `http://${localStorage.getItem("cloudServer")}${localStorage.getItem("customServerPostfix") || ".streambox.com"}/ls/SetSessionLdmpXML.php?session_ldmp_params=${sessionLdmpParams}&session_id=${sessionId}&login=${login}&hashedPass=${hashedPass}`
      );
      let result = await response.text();
      if (result === '<?xml version="1.0" encoding="UTF-8"?>\n<body session_ldmp_update_result="Updated LDMP parameters for session."/>\n') {
        alert("LDMP Parameters set");
      } else {
        alert("LDMP Parameters not set");
      }
    }
    async function setChatPass() {
      const sessionDRM = localStorage.getItem("sessionDRM");
      const chatPass = document.getElementById("set-chatpass-input").value;
      let login = localStorage.getItem("cloudLogin");
      let hashedPass = localStorage.getItem("cloudPass");
      const hashedChatPass = md5(chatPass);
      let response = await fetch(
        `http://${localStorage.getItem("cloudServer")}${localStorage.getItem("customServerPostfix") || ".streambox.com"}/ls/SetChatPassXML.php?hashed_chat_pass=${hashedChatPass}&enc_key=${sessionDRM}&login=${login}&hashedPass=${hashedPass}`
      );
      let result = await response.text();
      if (result === '<?xml version="1.0" encoding="UTF-8"?>\n<body result="success"/>\n') {
        alert("Chat password set");
      } else {
        alert("Something went wrong setting chat password");
      }
    }
    return wrongLogin ? /* @__PURE__ */ React$1.createElement("div", {
      className: "wrong-login-msg"
    }, "Invalid API Call Login/Password") : showEmailPage ? /* @__PURE__ */ React$1.createElement("div", null, /* @__PURE__ */ React$1.createElement("div", {
      className: "sessions-panel-top"
    }, /* @__PURE__ */ React$1.createElement("div", null, "Session ID:", " ", /* @__PURE__ */ React$1.createElement("span", {
      className: "session-id-top"
    }, sessionID !== "" ? /* @__PURE__ */ React$1.createElement("span", {
      className: "session-id-readout-wrapper"
    }, /* @__PURE__ */ React$1.createElement("span", {
      className: "session-id-readout"
    }, decKey), /* @__PURE__ */ React$1.createElement("button", {
      className: "close-session-btn",
      onClick: clearSession
    }, "x")) : "Not Found")), /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns",
      onClick: () => handleClick("close")
    }, "Close")), /* @__PURE__ */ React$1.createElement("hr", null), /* @__PURE__ */ React$1.createElement("div", {
      className: "email-page-body-wrapper"
    }, /* @__PURE__ */ React$1.createElement("div", {
      className: "email-page-title"
    }, /* @__PURE__ */ React$1.createElement("span", null, "Title:"), /* @__PURE__ */ React$1.createElement("input", {
      onChange: debounce(() => {
        localStorage.setItem(
          "sessionTitle",
          document.querySelector(
            ".email-page-title-input"
          ).value
        );
      }),
      className: "email-page-title-input",
      placeholder: " Color Review of 'Blazing Saddles'"
    })), /* @__PURE__ */ React$1.createElement("div", {
      className: "email-page-body"
    }, /* @__PURE__ */ React$1.createElement("div", {
      className: "email-page-body-section"
    }, /* @__PURE__ */ React$1.createElement("span", null, "Email:"), /* @__PURE__ */ React$1.createElement(Select, {
      className: "email-page-body-select",
      options: emailOptions,
      isMulti: true,
      onChange: handleChange,
      name: "emails",
      styles: styles2,
      classNamePrefix: "select"
    }), /* @__PURE__ */ React$1.createElement("button", {
      onClick: sendInvites,
      className: "send-invite-btn"
    }, "Send Invites"))))) : /* @__PURE__ */ React$1.createElement("div", {
      className: "sessions-panel-container"
    }, /* @__PURE__ */ React$1.createElement("div", {
      className: "sessions-panel-top"
    }, /* @__PURE__ */ React$1.createElement("div", null, "Session ID:", " ", /* @__PURE__ */ React$1.createElement("span", {
      className: "session-id-top"
    }, sessionID !== "" ? /* @__PURE__ */ React$1.createElement("span", {
      className: "session-id-readout-wrapper"
    }, /* @__PURE__ */ React$1.createElement("span", {
      className: "session-id-readout"
    }, decKey), /* @__PURE__ */ React$1.createElement("button", {
      className: "close-session-btn",
      onClick: clearSession
    }, "x")) : "Not Found")), buttons.includes("create") ? /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns",
      onClick: handleCreateNewSessionBtnWrapper
    }, "Create New Session") : "", buttons.includes("advanced") ? /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns",
      onClick: openAdvancedSettings
    }, "Advanced") : "", buttons.includes("invite") ? /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns",
      onClick: () => handleClick("openEmailPage")
    }, "Invite to Session...") : "", /* @__PURE__ */ React$1.createElement(Modal, {
      isOpen: modalIsOpen,
      onAfterOpen: setupProtoRadios,
      onRequestClose: closeAdvancedSettngs,
      style: customStyles,
      contentLabel: "Advanced Settings"
    }, /* @__PURE__ */ React$1.createElement("button", {
      id: "close-btn-modal",
      className: "sessions-panel-top-btns",
      onClick: closeAdvancedSettngs
    }, "close"), /* @__PURE__ */ React$1.createElement("h2", null, "Color Space"), /* @__PURE__ */ React$1.createElement("div", null, /* @__PURE__ */ React$1.createElement("select", {
      id: "set-colorspace-select",
      defaultValue: selectedColorspaceId
    }, colorspaceOptions)), /* @__PURE__ */ React$1.createElement("div", null, /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns modal-btn",
      onClick: setColorspaceForSessionID
    }, "Save Colorspace")), /* @__PURE__ */ React$1.createElement("hr", null), /* @__PURE__ */ React$1.createElement("h2", null, "LDMP Settings"), /* @__PURE__ */ React$1.createElement("div", null, /* @__PURE__ */ React$1.createElement("p", null, /* @__PURE__ */ React$1.createElement("label", {
      for: "proto_udp"
    }, /* @__PURE__ */ React$1.createElement("input", {
      type: "radio",
      id: "proto_udp",
      value: "0",
      onClick: handleUDPClick
    }), "UDP (Default)"), /* @__PURE__ */ React$1.createElement("label", {
      for: "proto_ldmp"
    }, /* @__PURE__ */ React$1.createElement("input", {
      type: "radio",
      id: "proto_ldmp",
      value: "1",
      onClick: handleLDMPClick
    }), " ", "LDMP")), /* @__PURE__ */ React$1.createElement("div", {
      className: "ldmp-settings-body"
    }, /* @__PURE__ */ React$1.createElement("p", {
      class: "ldmp-paragraph"
    }, /* @__PURE__ */ React$1.createElement("label", {
      for: "MPUDP_ACK_TO"
    }, "ACK Timeout:"), /* @__PURE__ */ React$1.createElement("input", {
      type: "text",
      id: "MPUDP_ACK_TO",
      className: "input-box-modal",
      placeholder: "300"
    })), /* @__PURE__ */ React$1.createElement("p", {
      class: "ldmp-paragraph"
    }, /* @__PURE__ */ React$1.createElement("label", {
      for: "codecPacketSize"
    }, "Echo Packets Size:"), /* @__PURE__ */ React$1.createElement("input", {
      type: "text",
      id: "codecPacketSize",
      className: "input-box-modal",
      placeholder: "1200"
    })), /* @__PURE__ */ React$1.createElement("p", {
      class: "ldmp-paragraph"
    }, /* @__PURE__ */ React$1.createElement("label", {
      for: "MPUDP_SND_TO"
    }, "Interface Timeout:"), /* @__PURE__ */ React$1.createElement("input", {
      type: "text",
      id: "MPUDP_SND_TO",
      className: "input-box-modal",
      placeholder: "10000"
    })), /* @__PURE__ */ React$1.createElement("p", {
      class: "ldmp-paragraph"
    }, /* @__PURE__ */ React$1.createElement("label", {
      for: "MPUDP_CWND"
    }, "Buffer Size Packets:"), /* @__PURE__ */ React$1.createElement("input", {
      type: "text",
      id: "MPUDP_CWND",
      className: "input-box-modal",
      placeholder: "400"
    })), /* @__PURE__ */ React$1.createElement("p", {
      class: "ldmp-paragraph"
    }, /* @__PURE__ */ React$1.createElement("label", {
      for: "MPUDP_CWND_MIN"
    }, "Jitter 1:"), /* @__PURE__ */ React$1.createElement("input", {
      type: "text",
      id: "MPUDP_CWND_MIN",
      className: "input-box-modal",
      placeholder: "5"
    })), /* @__PURE__ */ React$1.createElement("p", {
      class: "ldmp-paragraph"
    }, /* @__PURE__ */ React$1.createElement("label", {
      for: "MPUDP_CWND_MAX"
    }, "Jitter 2:"), /* @__PURE__ */ React$1.createElement("input", {
      type: "text",
      id: "MPUDP_CWND_MAX",
      className: "input-box-modal",
      placeholder: "400"
    }))), /* @__PURE__ */ React$1.createElement("div", null, /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns modal-btn",
      onClick: setSessionLdmpParams
    }, "Save LDMP Settings"))), /* @__PURE__ */ React$1.createElement("hr", null), /* @__PURE__ */ React$1.createElement("h2", null, "Chat Password"), /* @__PURE__ */ React$1.createElement("p", {
      className: "ldmp-paragraph"
    }, /* @__PURE__ */ React$1.createElement("label", null, "Chat Password:"), /* @__PURE__ */ React$1.createElement("input", {
      className: "input-box-modal",
      id: "set-chatpass-input",
      type: "password"
    }), /* @__PURE__ */ React$1.createElement("div", null)), /* @__PURE__ */ React$1.createElement("button", {
      className: "sessions-panel-top-btns modal-btn",
      onClick: setChatPass
    }, "Save Chat Password"))), /* @__PURE__ */ React$1.createElement("hr", null), decInfoArray.length > 0 ? decInfoArray : /* @__PURE__ */ React$1.createElement("div", {
      className: "msg-wrapper"
    }, sessionID !== "" ? /* @__PURE__ */ React$1.createElement("div", {
      className: "no-session-msg"
    }, sessionIsLive == 1 ? "No Decoders Connected" : "Waiting for Host to Start Session...") : /* @__PURE__ */ React$1.createElement("div", {
      className: "no-session-msg"
    }, "Session DRM ", localStorage.getItem("sessionDRM"), " ", "is not found")));
  }
}
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
          set: function(h2) {
            if (!h2) {
              me2.removeAllListeners(ev);
              me2._parser["on" + ev] = h2;
              return h2;
            }
            me2.on(ev, h2);
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
    function isWhitespace(c2) {
      return c2 === " " || c2 === "\n" || c2 === "\r" || c2 === "	";
    }
    function isQuote(c2) {
      return c2 === '"' || c2 === "'";
    }
    function isAttribEnd(c2) {
      return c2 === ">" || isWhitespace(c2);
    }
    function isMatch(regex, c2) {
      return regex.test(c2);
    }
    function notMatch(regex, c2) {
      return !isMatch(regex, c2);
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
      var e2 = sax2.ENTITIES[key];
      var s2 = typeof e2 === "number" ? String.fromCharCode(e2) : e2;
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
      var prefix2 = qualName[0];
      var local = qualName[1];
      if (attribute && name === "xmlns") {
        prefix2 = "xmlns";
        local = "";
      }
      return { prefix: prefix2, local };
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
        var prefix2 = qn.prefix;
        var local = qn.local;
        if (prefix2 === "xmlns") {
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
          var prefix2 = qualName.prefix;
          var local = qualName.local;
          var uri = prefix2 === "" ? "" : tag.ns[prefix2] || "";
          var a = {
            name,
            value,
            prefix: prefix2,
            local,
            uri
          };
          if (prefix2 && prefix2 !== "xmlns" && !uri) {
            strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix2));
            a.uri = prefix2;
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
    function beginWhiteSpace(parser, c2) {
      if (c2 === "<") {
        parser.state = S2.OPEN_WAKA;
        parser.startTagPosition = parser.position;
      } else if (!isWhitespace(c2)) {
        strictFail(parser, "Non-whitespace before first tag.");
        parser.textNode = c2;
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
      var c2 = "";
      while (true) {
        c2 = charAt(chunk, i2++);
        parser.c = c2;
        if (!c2) {
          break;
        }
        if (parser.trackPosition) {
          parser.position++;
          if (c2 === "\n") {
            parser.line++;
            parser.column = 0;
          } else {
            parser.column++;
          }
        }
        switch (parser.state) {
          case S2.BEGIN:
            parser.state = S2.BEGIN_WHITESPACE;
            if (c2 === "\uFEFF") {
              continue;
            }
            beginWhiteSpace(parser, c2);
            continue;
          case S2.BEGIN_WHITESPACE:
            beginWhiteSpace(parser, c2);
            continue;
          case S2.TEXT:
            if (parser.sawRoot && !parser.closedRoot) {
              var starti = i2 - 1;
              while (c2 && c2 !== "<" && c2 !== "&") {
                c2 = charAt(chunk, i2++);
                if (c2 && parser.trackPosition) {
                  parser.position++;
                  if (c2 === "\n") {
                    parser.line++;
                    parser.column = 0;
                  } else {
                    parser.column++;
                  }
                }
              }
              parser.textNode += chunk.substring(starti, i2 - 1);
            }
            if (c2 === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
              parser.state = S2.OPEN_WAKA;
              parser.startTagPosition = parser.position;
            } else {
              if (!isWhitespace(c2) && (!parser.sawRoot || parser.closedRoot)) {
                strictFail(parser, "Text data outside of root node.");
              }
              if (c2 === "&") {
                parser.state = S2.TEXT_ENTITY;
              } else {
                parser.textNode += c2;
              }
            }
            continue;
          case S2.SCRIPT:
            if (c2 === "<") {
              parser.state = S2.SCRIPT_ENDING;
            } else {
              parser.script += c2;
            }
            continue;
          case S2.SCRIPT_ENDING:
            if (c2 === "/") {
              parser.state = S2.CLOSE_TAG;
            } else {
              parser.script += "<" + c2;
              parser.state = S2.SCRIPT;
            }
            continue;
          case S2.OPEN_WAKA:
            if (c2 === "!") {
              parser.state = S2.SGML_DECL;
              parser.sgmlDecl = "";
            } else if (isWhitespace(c2))
              ;
            else if (isMatch(nameStart, c2)) {
              parser.state = S2.OPEN_TAG;
              parser.tagName = c2;
            } else if (c2 === "/") {
              parser.state = S2.CLOSE_TAG;
              parser.tagName = "";
            } else if (c2 === "?") {
              parser.state = S2.PROC_INST;
              parser.procInstName = parser.procInstBody = "";
            } else {
              strictFail(parser, "Unencoded <");
              if (parser.startTagPosition + 1 < parser.position) {
                var pad = parser.position - parser.startTagPosition;
                c2 = new Array(pad).join(" ") + c2;
              }
              parser.textNode += "<" + c2;
              parser.state = S2.TEXT;
            }
            continue;
          case S2.SGML_DECL:
            if ((parser.sgmlDecl + c2).toUpperCase() === CDATA) {
              emitNode(parser, "onopencdata");
              parser.state = S2.CDATA;
              parser.sgmlDecl = "";
              parser.cdata = "";
            } else if (parser.sgmlDecl + c2 === "--") {
              parser.state = S2.COMMENT;
              parser.comment = "";
              parser.sgmlDecl = "";
            } else if ((parser.sgmlDecl + c2).toUpperCase() === DOCTYPE) {
              parser.state = S2.DOCTYPE;
              if (parser.doctype || parser.sawRoot) {
                strictFail(
                  parser,
                  "Inappropriately located doctype declaration"
                );
              }
              parser.doctype = "";
              parser.sgmlDecl = "";
            } else if (c2 === ">") {
              emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
              parser.sgmlDecl = "";
              parser.state = S2.TEXT;
            } else if (isQuote(c2)) {
              parser.state = S2.SGML_DECL_QUOTED;
              parser.sgmlDecl += c2;
            } else {
              parser.sgmlDecl += c2;
            }
            continue;
          case S2.SGML_DECL_QUOTED:
            if (c2 === parser.q) {
              parser.state = S2.SGML_DECL;
              parser.q = "";
            }
            parser.sgmlDecl += c2;
            continue;
          case S2.DOCTYPE:
            if (c2 === ">") {
              parser.state = S2.TEXT;
              emitNode(parser, "ondoctype", parser.doctype);
              parser.doctype = true;
            } else {
              parser.doctype += c2;
              if (c2 === "[") {
                parser.state = S2.DOCTYPE_DTD;
              } else if (isQuote(c2)) {
                parser.state = S2.DOCTYPE_QUOTED;
                parser.q = c2;
              }
            }
            continue;
          case S2.DOCTYPE_QUOTED:
            parser.doctype += c2;
            if (c2 === parser.q) {
              parser.q = "";
              parser.state = S2.DOCTYPE;
            }
            continue;
          case S2.DOCTYPE_DTD:
            parser.doctype += c2;
            if (c2 === "]") {
              parser.state = S2.DOCTYPE;
            } else if (isQuote(c2)) {
              parser.state = S2.DOCTYPE_DTD_QUOTED;
              parser.q = c2;
            }
            continue;
          case S2.DOCTYPE_DTD_QUOTED:
            parser.doctype += c2;
            if (c2 === parser.q) {
              parser.state = S2.DOCTYPE_DTD;
              parser.q = "";
            }
            continue;
          case S2.COMMENT:
            if (c2 === "-") {
              parser.state = S2.COMMENT_ENDING;
            } else {
              parser.comment += c2;
            }
            continue;
          case S2.COMMENT_ENDING:
            if (c2 === "-") {
              parser.state = S2.COMMENT_ENDED;
              parser.comment = textopts(parser.opt, parser.comment);
              if (parser.comment) {
                emitNode(parser, "oncomment", parser.comment);
              }
              parser.comment = "";
            } else {
              parser.comment += "-" + c2;
              parser.state = S2.COMMENT;
            }
            continue;
          case S2.COMMENT_ENDED:
            if (c2 !== ">") {
              strictFail(parser, "Malformed comment");
              parser.comment += "--" + c2;
              parser.state = S2.COMMENT;
            } else {
              parser.state = S2.TEXT;
            }
            continue;
          case S2.CDATA:
            if (c2 === "]") {
              parser.state = S2.CDATA_ENDING;
            } else {
              parser.cdata += c2;
            }
            continue;
          case S2.CDATA_ENDING:
            if (c2 === "]") {
              parser.state = S2.CDATA_ENDING_2;
            } else {
              parser.cdata += "]" + c2;
              parser.state = S2.CDATA;
            }
            continue;
          case S2.CDATA_ENDING_2:
            if (c2 === ">") {
              if (parser.cdata) {
                emitNode(parser, "oncdata", parser.cdata);
              }
              emitNode(parser, "onclosecdata");
              parser.cdata = "";
              parser.state = S2.TEXT;
            } else if (c2 === "]") {
              parser.cdata += "]";
            } else {
              parser.cdata += "]]" + c2;
              parser.state = S2.CDATA;
            }
            continue;
          case S2.PROC_INST:
            if (c2 === "?") {
              parser.state = S2.PROC_INST_ENDING;
            } else if (isWhitespace(c2)) {
              parser.state = S2.PROC_INST_BODY;
            } else {
              parser.procInstName += c2;
            }
            continue;
          case S2.PROC_INST_BODY:
            if (!parser.procInstBody && isWhitespace(c2)) {
              continue;
            } else if (c2 === "?") {
              parser.state = S2.PROC_INST_ENDING;
            } else {
              parser.procInstBody += c2;
            }
            continue;
          case S2.PROC_INST_ENDING:
            if (c2 === ">") {
              emitNode(parser, "onprocessinginstruction", {
                name: parser.procInstName,
                body: parser.procInstBody
              });
              parser.procInstName = parser.procInstBody = "";
              parser.state = S2.TEXT;
            } else {
              parser.procInstBody += "?" + c2;
              parser.state = S2.PROC_INST_BODY;
            }
            continue;
          case S2.OPEN_TAG:
            if (isMatch(nameBody, c2)) {
              parser.tagName += c2;
            } else {
              newTag(parser);
              if (c2 === ">") {
                openTag(parser);
              } else if (c2 === "/") {
                parser.state = S2.OPEN_TAG_SLASH;
              } else {
                if (!isWhitespace(c2)) {
                  strictFail(parser, "Invalid character in tag name");
                }
                parser.state = S2.ATTRIB;
              }
            }
            continue;
          case S2.OPEN_TAG_SLASH:
            if (c2 === ">") {
              openTag(parser, true);
              closeTag(parser);
            } else {
              strictFail(parser, "Forward-slash in opening tag not followed by >");
              parser.state = S2.ATTRIB;
            }
            continue;
          case S2.ATTRIB:
            if (isWhitespace(c2)) {
              continue;
            } else if (c2 === ">") {
              openTag(parser);
            } else if (c2 === "/") {
              parser.state = S2.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c2)) {
              parser.attribName = c2;
              parser.attribValue = "";
              parser.state = S2.ATTRIB_NAME;
            } else {
              strictFail(parser, "Invalid attribute name");
            }
            continue;
          case S2.ATTRIB_NAME:
            if (c2 === "=") {
              parser.state = S2.ATTRIB_VALUE;
            } else if (c2 === ">") {
              strictFail(parser, "Attribute without value");
              parser.attribValue = parser.attribName;
              attrib(parser);
              openTag(parser);
            } else if (isWhitespace(c2)) {
              parser.state = S2.ATTRIB_NAME_SAW_WHITE;
            } else if (isMatch(nameBody, c2)) {
              parser.attribName += c2;
            } else {
              strictFail(parser, "Invalid attribute name");
            }
            continue;
          case S2.ATTRIB_NAME_SAW_WHITE:
            if (c2 === "=") {
              parser.state = S2.ATTRIB_VALUE;
            } else if (isWhitespace(c2)) {
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
              if (c2 === ">") {
                openTag(parser);
              } else if (isMatch(nameStart, c2)) {
                parser.attribName = c2;
                parser.state = S2.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
                parser.state = S2.ATTRIB;
              }
            }
            continue;
          case S2.ATTRIB_VALUE:
            if (isWhitespace(c2)) {
              continue;
            } else if (isQuote(c2)) {
              parser.q = c2;
              parser.state = S2.ATTRIB_VALUE_QUOTED;
            } else {
              strictFail(parser, "Unquoted attribute value");
              parser.state = S2.ATTRIB_VALUE_UNQUOTED;
              parser.attribValue = c2;
            }
            continue;
          case S2.ATTRIB_VALUE_QUOTED:
            if (c2 !== parser.q) {
              if (c2 === "&") {
                parser.state = S2.ATTRIB_VALUE_ENTITY_Q;
              } else {
                parser.attribValue += c2;
              }
              continue;
            }
            attrib(parser);
            parser.q = "";
            parser.state = S2.ATTRIB_VALUE_CLOSED;
            continue;
          case S2.ATTRIB_VALUE_CLOSED:
            if (isWhitespace(c2)) {
              parser.state = S2.ATTRIB;
            } else if (c2 === ">") {
              openTag(parser);
            } else if (c2 === "/") {
              parser.state = S2.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c2)) {
              strictFail(parser, "No whitespace between attributes");
              parser.attribName = c2;
              parser.attribValue = "";
              parser.state = S2.ATTRIB_NAME;
            } else {
              strictFail(parser, "Invalid attribute name");
            }
            continue;
          case S2.ATTRIB_VALUE_UNQUOTED:
            if (!isAttribEnd(c2)) {
              if (c2 === "&") {
                parser.state = S2.ATTRIB_VALUE_ENTITY_U;
              } else {
                parser.attribValue += c2;
              }
              continue;
            }
            attrib(parser);
            if (c2 === ">") {
              openTag(parser);
            } else {
              parser.state = S2.ATTRIB;
            }
            continue;
          case S2.CLOSE_TAG:
            if (!parser.tagName) {
              if (isWhitespace(c2)) {
                continue;
              } else if (notMatch(nameStart, c2)) {
                if (parser.script) {
                  parser.script += "</" + c2;
                  parser.state = S2.SCRIPT;
                } else {
                  strictFail(parser, "Invalid tagname in closing tag.");
                }
              } else {
                parser.tagName = c2;
              }
            } else if (c2 === ">") {
              closeTag(parser);
            } else if (isMatch(nameBody, c2)) {
              parser.tagName += c2;
            } else if (parser.script) {
              parser.script += "</" + parser.tagName;
              parser.tagName = "";
              parser.state = S2.SCRIPT;
            } else {
              if (!isWhitespace(c2)) {
                strictFail(parser, "Invalid tagname in closing tag");
              }
              parser.state = S2.CLOSE_TAG_SAW_WHITE;
            }
            continue;
          case S2.CLOSE_TAG_SAW_WHITE:
            if (isWhitespace(c2)) {
              continue;
            }
            if (c2 === ">") {
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
            if (c2 === ";") {
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
            } else if (isMatch(parser.entity.length ? entityBody : entityStart, c2)) {
              parser.entity += c2;
            } else {
              strictFail(parser, "Invalid character in entity name");
              parser[buffer] += "&" + parser.entity + c2;
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
          var index2 = -1;
          var length2 = arguments.length;
          if (!length2) {
            return "";
          }
          var result = "";
          while (++index2 < length2) {
            var codePoint = Number(arguments[index2]);
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
            if (index2 + 1 === length2 || codeUnits.length > MAX_SIZE) {
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
    var key, copy2 = {};
    for (key in options2) {
      if (options2.hasOwnProperty(key)) {
        copy2[key] = options2[key];
      }
    }
    return copy2;
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
function onComment(comment2) {
  if (options.ignoreComment) {
    return;
  }
  if (options.trim) {
    comment2 = comment2.trim();
  }
  addField("comment", comment2);
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
    json = JSON.stringify(js, function(k2, v2) {
      return k2 === parentKey ? "_" : v2;
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
function writeDeclaration(declaration2, options2, depth) {
  currentElement = declaration2;
  currentElementName = "xml";
  return options2.ignoreDeclaration ? "" : "<?xml" + writeAttributes(declaration2[options2.attributesKey], options2, depth) + "?>";
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
function writeComment(comment2, options2) {
  return options2.ignoreComment ? "" : "<!--" + ("commentFn" in options2 ? options2.commentFn(comment2, currentElementName, currentElement) : comment2) + "-->";
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
    } catch (e2) {
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
  const p2 = items.map((dataitem, index2) => ({
    index: index2 + 1,
    name: dataitem._attributes.Name,
    encoder: dataitem._attributes.Encoder,
    decoder: dataitem._attributes.Decoder,
    live: dataitem._attributes.Live,
    ports: dataitem._attributes.Ports,
    created: dataitem._attributes.Created,
    expires: dataitem._attributes.Expires,
    params: dataitem._attributes.Params
  }));
  return /* @__PURE__ */ React$1.createElement("table", null, /* @__PURE__ */ React$1.createElement("thead", null, /* @__PURE__ */ React$1.createElement("tr", null, /* @__PURE__ */ React$1.createElement("th", null, "#"), /* @__PURE__ */ React$1.createElement("th", null, "NAME"), /* @__PURE__ */ React$1.createElement("th", null, "Encoder"), /* @__PURE__ */ React$1.createElement("th", null, "Decoder"), /* @__PURE__ */ React$1.createElement("th", null, "Live"), /* @__PURE__ */ React$1.createElement("th", null, "Ports"), /* @__PURE__ */ React$1.createElement("th", null, "Created"), /* @__PURE__ */ React$1.createElement("th", null, "Expires"), /* @__PURE__ */ React$1.createElement("th", null, "Params"))), /* @__PURE__ */ React$1.createElement("tbody", null, p2.map((dataitem, index2) => /* @__PURE__ */ React$1.createElement("tr", {
    key: index2
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
  const p2 = items.map((dataitem, index2) => ({
    index: index2 + 1,
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
  return /* @__PURE__ */ React$1.createElement("table", null, /* @__PURE__ */ React$1.createElement("thead", null, /* @__PURE__ */ React$1.createElement("tr", null, /* @__PURE__ */ React$1.createElement("th", null, "#"), /* @__PURE__ */ React$1.createElement("th", null, "sid"), /* @__PURE__ */ React$1.createElement("th", null, "server"), /* @__PURE__ */ React$1.createElement("th", null, "port"), /* @__PURE__ */ React$1.createElement("th", null, "bitrate"), /* @__PURE__ */ React$1.createElement("th", null, "last active, s"), /* @__PURE__ */ React$1.createElement("th", null, "max timeout, s"), /* @__PURE__ */ React$1.createElement("th", null, "Packets"), /* @__PURE__ */ React$1.createElement("th", null, "Resent"), /* @__PURE__ */ React$1.createElement("th", null, "%"), /* @__PURE__ */ React$1.createElement("th", null, "RTT"), /* @__PURE__ */ React$1.createElement("th", null, "Avg"), /* @__PURE__ */ React$1.createElement("th", null, "Peak"), /* @__PURE__ */ React$1.createElement("th", null, "Ack timeout"))), /* @__PURE__ */ React$1.createElement("tbody", null, p2.map((dataitem, index2) => /* @__PURE__ */ React$1.createElement("tr", {
    key: index2
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
  const p2 = items.map((inport, index2) => ({
    index: index2 + 1,
    port: inport._attributes.port,
    encoders: inport._attributes.encoders,
    bitrate_in: inport._attributes.bitrate_in,
    bitrate_out: inport._attributes.bitrate_out
  }));
  return /* @__PURE__ */ React$1.createElement("table", null, /* @__PURE__ */ React$1.createElement("thead", null, /* @__PURE__ */ React$1.createElement("tr", null, /* @__PURE__ */ React$1.createElement("th", null, "#"), /* @__PURE__ */ React$1.createElement("th", null, "Port"), /* @__PURE__ */ React$1.createElement("th", null, "Encoders"), /* @__PURE__ */ React$1.createElement("th", null, "Bitrate In"), /* @__PURE__ */ React$1.createElement("th", null, "Bitrate Out"))), /* @__PURE__ */ React$1.createElement("tbody", null, p2.map((port, index2) => /* @__PURE__ */ React$1.createElement("tr", {
    key: index2
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
  const p2 = items.map((dataitem, index2) => ({
    index: index2 + 1,
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
  return /* @__PURE__ */ React$1.createElement("table", null, /* @__PURE__ */ React$1.createElement("thead", null, /* @__PURE__ */ React$1.createElement("tr", null, /* @__PURE__ */ React$1.createElement("th", null, "#"), /* @__PURE__ */ React$1.createElement("th", null, "Encoder sid"), /* @__PURE__ */ React$1.createElement("th", null, "Title"), /* @__PURE__ */ React$1.createElement("th", null, "Bitrate"), /* @__PURE__ */ React$1.createElement("th", null, "Resolution"), /* @__PURE__ */ React$1.createElement("th", null, "FPS"), /* @__PURE__ */ React$1.createElement("th", null, "Sound"), /* @__PURE__ */ React$1.createElement("th", null, "Channels"), /* @__PURE__ */ React$1.createElement("th", null, "OS"), /* @__PURE__ */ React$1.createElement("th", null, "Version"), /* @__PURE__ */ React$1.createElement("th", null, "IP"), /* @__PURE__ */ React$1.createElement("th", null, "Port"), /* @__PURE__ */ React$1.createElement("th", null, "Time"))), /* @__PURE__ */ React$1.createElement("tbody", null, p2.map((dataitem, index2) => /* @__PURE__ */ React$1.createElement("tr", {
    key: index2
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
  const p2 = items.map((dataitem, index2) => ({
    index: index2 + 1,
    ip: dataitem._attributes.ip,
    dataSent: dataitem._attributes.dataSent,
    timeRunning: dataitem._attributes.timeRunning,
    firstActive: dataitem._attributes.firstActive,
    lastActive: dataitem._attributes.lastActive
  }));
  return /* @__PURE__ */ React$1.createElement("table", null, /* @__PURE__ */ React$1.createElement("thead", null, /* @__PURE__ */ React$1.createElement("tr", null, /* @__PURE__ */ React$1.createElement("th", null, "#"), /* @__PURE__ */ React$1.createElement("th", null, "Data"), /* @__PURE__ */ React$1.createElement("th", null, "Time"), /* @__PURE__ */ React$1.createElement("th", null, "First Active"), /* @__PURE__ */ React$1.createElement("th", null, "Last Active"))), /* @__PURE__ */ React$1.createElement("tbody", null, p2.map((dataitem, index2) => /* @__PURE__ */ React$1.createElement("tr", {
    key: index2
  }, /* @__PURE__ */ React$1.createElement("td", null, dataitem.index), /* @__PURE__ */ React$1.createElement("td", null, dataitem.ip), /* @__PURE__ */ React$1.createElement("td", null, dataitem.dataSent), /* @__PURE__ */ React$1.createElement("td", null, dataitem.timeRunning), /* @__PURE__ */ React$1.createElement("td", null, dataitem.firstActive), /* @__PURE__ */ React$1.createElement("td", null, dataitem.lastActive)))));
}
function ServerControl(props) {
  let show0 = (props.tableset & 1) === 1;
  let show1 = (props.tableset & 2) === 2;
  let show2 = (props.tableset & 4) === 4;
  let show3 = (props.tableset & 8) === 8;
  let show4 = (props.tableset & 16) === 16;
  let login = props.login;
  let password = props.password;
  const PREFIX = "https://" + props.server + "/light/";
  const POSTFIX = "?login=" + login + "&hashedPass=" + password;
  const DATA_USAGE_URL = PREFIX + "xmlDataUsage.php" + POSTFIX;
  const DECODERS_URL = PREFIX + "xmlGetDecoders.php" + POSTFIX;
  const SESSIONS_URL = PREFIX + "xmlGetSessions.php" + POSTFIX;
  const PORTS_URL = PREFIX + "xmlIncomingPorts.php" + POSTFIX;
  const STREAMS_URL = PREFIX + "xmlStreams.php" + POSTFIX;
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "ServerControl"
  }, /* @__PURE__ */ React$1.createElement("h3", null, "Streambox Light Server"), show0 && /* @__PURE__ */ React$1.createElement("div", null, /* @__PURE__ */ React$1.createElement("h4", null, "Available Encoder/Decoder Session IDs:"), /* @__PURE__ */ React$1.createElement(TableSessions, {
    url: SESSIONS_URL
  })), show1 && /* @__PURE__ */ React$1.createElement("div", null, /* @__PURE__ */ React$1.createElement("h4", null, "Streaming to Decoders:"), /* @__PURE__ */ React$1.createElement(TableDecoders, {
    url: DECODERS_URL
  })), show2 && /* @__PURE__ */ React$1.createElement("div", null, /* @__PURE__ */ React$1.createElement("h4", null, "Incoming ports:"), /* @__PURE__ */ React$1.createElement(TablePorts, {
    url: PORTS_URL
  })), show3 && /* @__PURE__ */ React$1.createElement("div", null, /* @__PURE__ */ React$1.createElement("h4", null, "Streams info:"), /* @__PURE__ */ React$1.createElement(TableStreams, {
    url: STREAMS_URL
  })), show4 && /* @__PURE__ */ React$1.createElement("div", null, /* @__PURE__ */ React$1.createElement("h4", null, "Data Usage Records:"), /* @__PURE__ */ React$1.createElement(TableDataUsage, {
    url: DATA_USAGE_URL
  })));
}
const endpoint$1 = location.origin;
function Container(props) {
  const container = props.container;
  const apiObj = props.apiObj;
  const title = container.title;
  const fields = container.fields;
  const containerType = container.type;
  let style2 = {};
  let fieldStyle = {};
  let isModule = false;
  const isForm = container.type === "form" ? true : false;
  const isMultiChannelSelection = container.type === "multichannel-container" ? true : false;
  function buttonPressed(action, presetEndpoint, btnPort, btnHost) {
    if (action === "startStreaming") {
      startStreaming(btnPort, btnHost);
    } else if (action === "stopStreaming") {
      stopStreaming(btnPort, btnHost);
    } else if (action === "applyPreset") {
      const pid = document.getElementById("preset-select").value;
      if (pid !== "not-selected") {
        applyPreset(parseInt(pid), presetEndpoint);
      }
    }
  }
  async function applyPreset(pid, presetEndpoint) {
    await POSTData(presetEndpoint, {
      command: "apply",
      pid
    }).then((data2) => {
      alert("Preset Changed Successfully");
      localStorage.setItem("presetPID", pid);
      console.log("Preset changed" + JSON.stringify(data2));
      props.triggerBackgroundFetch();
    });
  }
  async function handleFormSubmit(event) {
    event.preventDefault();
    let target = event.target;
    let postEndpoint = "";
    let tempObj = {
      cname: "",
      val: ""
    };
    let arr = [];
    for (let field of target) {
      if (field.name) {
        tempObj.cname = field.name;
        tempObj.val = field.value;
        arr = [...arr, { ...tempObj }];
        if (tempObj.cname === "Meta_Network1") {
          localStorage.setItem("sessionDRM", tempObj.val);
        }
      }
      if (field.type === "submit") {
        postEndpoint = field.dataset.postendpoint;
      }
    }
    await POSTData(endpoint$1 + postEndpoint, { val_list: arr }).then(
      (data2) => {
        console.log(
          "Data POSTED to " + endpoint$1 + postEndpoint + ": " + JSON.stringify(data2)
        );
        alert("Changes have been applied");
        localStorage.setItem("presetPID", "custom");
        props.triggerBackgroundFetch();
      }
    );
  }
  async function startStreaming(btnPort, btnHost) {
    let response = "";
    {
      if (btnPort !== void 0) {
        if (btnHost !== void 0) {
          response = await fetch(
            btnHost + `/REST/encoder/${btnPort}/metadata`
          );
        } else {
          response = await fetch(
            endpoint$1 + `/REST/encoder/${btnPort}/metadata`
          );
        }
      } else {
        if (btnHost !== void 0) {
          response = await fetch(btnHost + "/REST/encoder/metadata");
        } else {
          response = await fetch(endpoint$1 + "/REST/encoder/metadata");
        }
      }
    }
    let metadataResult = await response.json();
    let networkObj = metadataResult.current_stat.filter(
      (res) => res.cname === "Meta_Network1"
    );
    let tempEndpoint1 = "";
    if (btnPort !== void 0) {
      tempEndpoint1 = `/REST/encoder/${btnPort}/network`;
    } else {
      tempEndpoint1 = "/REST/encoder/network";
    }
    const apiDRM = networkObj[0]["val"];
    const apiServerIP = await getPropertyFromAPI(
      "decoderIP",
      tempEndpoint1,
      btnHost
    );
    const sessionServerIP = localStorage.getItem("sessionServerIP");
    const sessionDRM = localStorage.getItem("sessionDRM");
    if (sessionDRM !== void 0 && sessionDRM !== null && sessionDRM !== "") {
      if (sessionDRM !== apiDRM) {
        if (confirm(
          "There is a mismatch between the session DRM and DRM on the encoder.  Would you like to set the encoder DRM to the session DRM?"
        ) == true) {
          await setNetwork1Api(sessionDRM, btnPort, btnHost);
        }
      }
    }
    if (sessionServerIP !== void 0 && sessionServerIP !== null && sessionServerIP !== "") {
      if (sessionServerIP !== apiServerIP) {
        if (confirm(
          `Decoder IP is not set to the correct server IP (${sessionServerIP}). Do you want to set this?`
        ) == true) {
          await setDecoderIPToServerIP(
            sessionServerIP,
            btnPort,
            btnHost
          );
        }
      }
    }
    let tempEndpoint2 = "";
    if (btnPort !== void 0) {
      tempEndpoint2 = `/REST/encoder/${btnPort}/action`;
    } else {
      tempEndpoint2 = "/REST/encoder/action";
    }
    let tempFullEndpoint = (btnHost !== void 0 ? btnHost : endpoint$1) + tempEndpoint2;
    await POSTData(tempFullEndpoint, {
      action_list: ["start"]
    }).then((data2) => {
      console.log("Streaming started" + JSON.stringify(data2));
      props.triggerBackgroundFetch();
    });
  }
  async function stopStreaming(btnPort, btnHost) {
    let tempEndpoint = "";
    if (btnPort !== void 0) {
      tempEndpoint = `/REST/encoder/${btnPort}/action`;
    } else {
      tempEndpoint = `/REST/encoder/action`;
    }
    await POSTData(
      (btnHost !== void 0 ? btnHost : endpoint$1) + tempEndpoint,
      {
        action_list: ["stop"]
      }
    ).then((data2) => {
      console.log("Streaming stopped" + JSON.stringify(data2));
      props.triggerBackgroundFetch();
    });
  }
  function handleFieldTypes(field, index2, fieldStyle2) {
    let filteredStat;
    let result;
    let apiObjMissing = false;
    let fieldMapMissing = false;
    let isPlainText = field.type === "plainText" ? true : false;
    if (!apiObj) {
      apiObjMissing = true;
    }
    if (field.mapping) {
      if (!apiObjMissing) {
        filteredStat = apiObj.current_stat.filter(
          (stat) => field.mapping === stat.cname
        );
        if (filteredStat && filteredStat.length > 0) {
          result = filteredStat[0].val;
        } else {
          result = /* @__PURE__ */ React$1.createElement("span", {
            className: "error-text"
          }, "Field couldn't be mapped to a value from the API", /* @__PURE__ */ React$1.createElement("br", null), '(please check if cname from API matches the "mapping" field of', /* @__PURE__ */ React$1.createElement("br", null), " the JSON template)");
        }
      }
    } else {
      fieldMapMissing = true;
    }
    if (!isPlainText) {
      if (fieldMapMissing) {
        result = /* @__PURE__ */ React$1.createElement("span", {
          className: "error-text"
        }, "No mapping field found in JSON template");
      }
      if (apiObjMissing) {
        result = /* @__PURE__ */ React$1.createElement("span", {
          className: "error-text"
        }, "API src not included in JSON template");
      }
      if (apiObjMissing || fieldMapMissing && field.type !== "button" && field.type !== "video" && field.type !== "presetSelect") {
        returnArr = /* @__PURE__ */ React$1.createElement("p", {
          className: "fields",
          style: fieldStyle2
        }, /* @__PURE__ */ React$1.createElement("span", {
          className: "field-label"
        }, field.label), ":", result);
      }
    }
    let inlineElementsArray = [];
    if (field.inlineElements && field.inlineElements.length > 0) {
      const inlineElements = field.inlineElements;
      for (let element of inlineElements) {
        inlineElementsArray.push(handleFieldTypes(element));
      }
    }
    let returnArr = [];
    if (isPlainText) {
      returnArr = /* @__PURE__ */ React$1.createElement("p", {
        className: "fields",
        key: `${field.type}-${index2}`,
        style: fieldStyle2
      }, /* @__PURE__ */ React$1.createElement("span", {
        className: "plain-text"
      }, field.text));
    } else if (field.type === "mappedText") {
      if (field.mapping === "is_ldmp" && !apiObjMissing && !fieldMapMissing) {
        if (typeof filteredStat[0] !== "undefined") {
          if (filteredStat && filteredStat[0].val == 1) {
            result = "LDMP";
          } else {
            result = "UDP";
          }
        } else {
          console.log("THROW ERROR");
        }
      }
      returnArr = /* @__PURE__ */ React$1.createElement("p", {
        className: "fields",
        key: `${field.label}-${index2}-${field.mapping}`,
        style: fieldStyle2
      }, /* @__PURE__ */ React$1.createElement("span", {
        className: "field-label"
      }, field.label), ": ", result);
    } else if (field.type === "video") {
      if (field.previewImageRoute) {
        if (field.hasVUMeter) {
          let numChannels;
          try {
            numChannels = apiObj.current_stat.filter(
              (stat) => stat.cname === "AudioChannels"
            )[0].val;
          } catch (err) {
            alert(
              "Please provide the audio REST endpoint in addition to the video REST endpoint.  This is required to render VU meters."
            );
            props.clearTimer();
            props.openSettings();
            return;
          }
          returnArr = /* @__PURE__ */ React$1.createElement("div", {
            key: `video-section-${index2}`,
            className: "video-audio-meter-container"
          }, /* @__PURE__ */ React$1.createElement(Video, {
            key: `video-section-${index2}`,
            location: endpoint$1,
            previewImageRoute: replaceJSONParams(
              field.previewImageRoute,
              props.templateVariables
            )
          }), /* @__PURE__ */ React$1.createElement(AudioMeter, {
            key: `audio-section-${index2}`,
            audioLevelRoute: replaceJSONParams(
              field.audioLevelEndpoint,
              props.templateVariables
            ),
            numChannels
          }));
        } else {
          returnArr = /* @__PURE__ */ React$1.createElement("div", {
            key: `video-section-${index2}`,
            className: "video-audio-meter-container"
          }, /* @__PURE__ */ React$1.createElement(Video, {
            key: `video-section-${index2}`,
            previewImageRoute: field.previewImageRoute
          }));
        }
      } else {
        returnArr = /* @__PURE__ */ React$1.createElement("p", {
          className: "fields",
          style: fieldStyle2
        }, /* @__PURE__ */ React$1.createElement("span", {
          className: "error-text"
        }, "Missing parameter for video preview: previewImageRoute"));
      }
    } else if (field.type === "button") {
      if (field.mapping === "isStreaming") {
        if (typeof filteredStat[0] !== "undefined") {
          if (filteredStat && filteredStat[0].val == 1) {
            result = "Stop Streaming";
          } else {
            result = "Start Streaming";
          }
        } else {
          console.log("THROW ERROR");
        }
      } else {
        result = field.label;
      }
      let customPortExists = field.port !== void 0 ? true : false;
      let customHostExists = field.host !== void 0 ? true : false;
      if (isForm) {
        returnArr = /* @__PURE__ */ React$1.createElement(Button, {
          key: `button-${index2}`,
          postEndpoint: replaceJSONParams(
            container.postEndpoint,
            props.templateVariables
          ),
          size: field.size,
          backgroundColor: field.backgroundColor,
          label: result,
          action: field.action,
          buttonPressed
        });
      } else {
        returnArr = /* @__PURE__ */ React$1.createElement(Button, {
          key: `button-${index2}`,
          size: field.size,
          label: result,
          port: customPortExists ? replaceJSONParams(
            field.port,
            props.templateVariables
          ) : void 0,
          host: customHostExists ? replaceJSONParams(
            field.host,
            props.templateVariables
          ) : void 0,
          action: field.action,
          redirectURL: field.redirectURL,
          backgroundColor: field.backgroundColor,
          buttonPressed
        });
      }
    } else if (field.type === "input") {
      if (typeof filteredStat[0] !== "undefined") {
        if (filteredStat) {
          returnArr = /* @__PURE__ */ React$1.createElement(Input$1, {
            key: `input-${index2}-${filteredStat[0].cname}`,
            name: filteredStat[0].cname,
            endLabel: field.endLabel,
            label: field.label,
            value: filteredStat[0].val
          });
        }
      } else {
        returnArr = /* @__PURE__ */ React$1.createElement("div", {
          className: "error-text-margin"
        }, "There was a problem with the JSON for this input element");
      }
    } else if (field.type === "checkbox") {
      if (typeof filteredStat[0] !== "undefined") {
        if (filteredStat) {
          returnArr = /* @__PURE__ */ React$1.createElement(Checkbox, {
            key: `checkbox-${index2}-${filteredStat[0].cname}`,
            name: filteredStat[0].cname,
            label: field.label,
            checked: filteredStat[0].val,
            endLabel: field.endLabel
          });
        }
      } else {
        returnArr = /* @__PURE__ */ React$1.createElement("div", {
          className: "error-text-margin"
        }, "There was a problem with the JSON for this checkbox element");
      }
    } else if (field.type === "select") {
      if (typeof filteredStat[0] !== "undefined") {
        if (filteredStat) {
          returnArr = /* @__PURE__ */ React$1.createElement(Select$2, {
            key: `select-${index2}-${field.mapping}`,
            name: filteredStat[0].cname,
            subValues: filteredStat[0].sub_values,
            value: filteredStat[0].val,
            valLabels: filteredStat[0].val_labels,
            label: field.label,
            endLabel: field.endLabel
          });
        }
      }
    } else if (field.type === "presetSelect" && props.presetObj) {
      let presetEndpoint = replaceJSONParams(
        field.btnPresetSrc,
        props.templateVariables
      );
      returnArr = /* @__PURE__ */ React$1.createElement("div", {
        key: `preset-div-${index2}`,
        className: "preset-div"
      }, /* @__PURE__ */ React$1.createElement(Select$2, {
        key: `select-${index2}`,
        name: "none",
        value: "none",
        presetObj: props.presetObj,
        label: field.label,
        endLabel: field.endLabel
      }), /* @__PURE__ */ React$1.createElement(Button, {
        key: `preset-btn-${index2}`,
        presetSrc: presetEndpoint,
        size: field.btnSize,
        label: field.btnLabel,
        action: field.btnAction,
        buttonPressed: () => {
          buttonPressed(field.btnAction, presetEndpoint);
        }
      }));
    }
    if (inlineElementsArray && inlineElementsArray.length > 0) {
      return /* @__PURE__ */ React$1.createElement("div", {
        className: "inline-field",
        key: `inline-${index2}-${field.mapping}`
      }, returnArr, inlineElementsArray);
    } else {
      return returnArr;
    }
  }
  if (container.containerStyle) {
    if (container.containerStyle.backgroundColor) {
      style2 = {
        ...style2,
        backgroundColor: container.containerStyle.backgroundColor
      };
    }
    if (container.containerStyle.stretchVertically) {
      style2 = {
        ...style2,
        gridRow: "span " + container.containerStyle.stretchVertically
      };
    }
    if (container.containerStyle.stretchHorizontally) {
      style2 = {
        ...style2,
        gridColumn: "span " + container.containerStyle.stretchHorizontally,
        maxWidth: "none"
      };
    }
    if (container.containerStyle.lineSpacing) {
      fieldStyle = {
        ...fieldStyle,
        margin: container.containerStyle.lineSpacing + " 2em"
      };
    }
  }
  let mappedFields = "";
  if (fields) {
    mappedFields = fields.map((field, index2) => {
      return handleFieldTypes(field, index2, fieldStyle);
    });
  } else {
    isModule = true;
    if (containerType === "sessionsPanel") {
      let customHost = container.host;
      let customPort = container.port;
      let buttons = container.buttons;
      mappedFields = /* @__PURE__ */ React$1.createElement(SessionsPanel, {
        sessionDashXML: props.sessionDashXML,
        buttons,
        customHost,
        customPort,
        handleCreateNewSessionBtn: props.handleCreateNewSessionBtn
      });
    } else if (containerType === "serverControl") {
      mappedFields = /* @__PURE__ */ React$1.createElement(ServerControl, {
        tableset: 31,
        server: localStorage.getItem("cloudServer") + (localStorage.getItem("customServerPostfix") || ".streambox.com"),
        login: localStorage.getItem("cloudLogin"),
        password: localStorage.getItem("cloudPass")
      });
    }
  }
  return isModule ? /* @__PURE__ */ React$1.createElement("div", {
    className: "container",
    style: style2
  }, mappedFields) : /* @__PURE__ */ React$1.createElement("div", {
    className: isMultiChannelSelection ? "container multichannel-container" : "container",
    style: style2
  }, /* @__PURE__ */ React$1.createElement("h4", {
    className: "container-title"
  }, title), /* @__PURE__ */ React$1.createElement("hr", null), isForm ? /* @__PURE__ */ React$1.createElement(Form, {
    mappedFields,
    handleFormSubmit
  }) : /* @__PURE__ */ React$1.createElement("div", {
    className: "fields-container"
  }, mappedFields));
}
function App(props) {
  const currentTemplate = props.currentTemplate;
  const navBtns = currentTemplate.template.navbar.routes;
  const currentPageName = props.currentPageName;
  const [currentContainers, setCurrentContainers] = react.exports.useState([]);
  const containerStyles = react.exports.useRef([navBtns[0].containersStyle]);
  const [backgroundFetchCount, setBackgroundFetchCount] = react.exports.useState(0);
  const [sessionDashXML, setSessionDashXML] = react.exports.useState("");
  const [templateVariables] = react.exports.useState(
    currentTemplate.template.templateVariables !== void 0 ? currentTemplate.template.templateVariables : {}
  );
  const combinedApiArray = [];
  let presetObj;
  const backgroundRefreshTime = currentTemplate.template.backgroundRefreshTime ? currentTemplate.template.backgroundRefreshTime : 5e3;
  const endpoint2 = location.origin;
  let isMultichannelPage = navBtns[0].isMultichannelPage;
  react.exports.useEffect(() => {
    if (typeof currentTemplate.template.darkMode !== "undefined") {
      if (currentTemplate.template.darkMode === true) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);
  react.exports.useEffect(() => {
    const fullRouteObj = navBtns.filter(
      (navBtn) => navBtn.routeName === currentPageName
    );
    const apiSrcs = fullRouteObj[0].containers.map((container) => {
      return container.apiSrc;
    });
    containerStyles.current = fullRouteObj[0].containersStyle;
    async function fetchApiPages(apiSrcs2) {
      let authorized = await authenticate();
      if (!authorized) {
        {
          window.location = `login.html`;
        }
        return;
      }
      let fullEndpoint;
      let response;
      let jsonResult;
      startTimer();
      for (let sources of apiSrcs2) {
        if (sources) {
          if (typeof sources === "object" && sources.length > 1) {
            let tempObj = {
              current_stat: []
            };
            for (let source of sources) {
              source = replaceJSONParams(
                source,
                templateVariables
              );
              fullEndpoint = source;
              response = await fetch(fullEndpoint);
              jsonResult = await response.json();
              if (jsonResult.current_stat) {
                tempObj.current_stat = [
                  ...tempObj.current_stat,
                  ...jsonResult.current_stat
                ];
              } else if (jsonResult.preset_list) {
                presetObj = jsonResult;
              }
            }
            combinedApiArray.push(tempObj);
          } else {
            fullEndpoint = replaceJSONParams(
              sources,
              templateVariables
            );
            try {
              response = await fetch(fullEndpoint);
              jsonResult = await response.json();
              combinedApiArray.push(jsonResult);
            } catch (err) {
              alert(
                "There's a problem with an endpoint in the chosen JSON file.  Please choose a valid JSON file."
              );
              props.openSettings();
              clearTimer();
              return;
            }
          }
        } else {
          combinedApiArray.push(null);
        }
      }
    }
    fetchApiPages(apiSrcs).then(() => {
      const routeContainers = fullRouteObj[0].containers.map(
        (container, index2) => {
          if (presetObj) {
            return /* @__PURE__ */ React$1.createElement(Container, {
              presetObj,
              openSettings: props.openSettings,
              key: "container-" + index2,
              clearTimer,
              startTimer,
              triggerBackgroundFetch,
              apiObj: combinedApiArray[index2],
              container,
              templateVariables,
              sessionDashXML,
              handleCreateNewSessionBtn
            });
          } else {
            return /* @__PURE__ */ React$1.createElement(Container, {
              key: "container-" + index2,
              openSettings: props.openSettings,
              clearTimer,
              startTimer,
              triggerBackgroundFetch,
              apiObj: combinedApiArray[index2],
              templateVariables,
              container
            });
          }
        }
      );
      setCurrentContainers(routeContainers);
    });
    return () => {
      clearTimer();
    };
  }, [currentPageName, backgroundFetchCount]);
  react.exports.useEffect(() => {
    async function attemptLoginDashboard() {
      if (await attemptLogin() === "success") {
        if (localStorage.getItem("sessionDRM")) {
          async function getSessionDashboard() {
            let sessionDRM = localStorage.getItem("sessionDRM");
            const controller = new AbortController();
            sessionDRM = sessionDRM.substring(1, sessionDRM.length);
            setTimeout(
              () => controller.abort(),
              15e3
            );
            let login = localStorage.getItem("cloudLogin");
            let hashedPass = localStorage.getItem("cloudPass");
            let response = await fetch(
              `https://${localStorage.getItem(
                "cloudServer"
              )}.streambox.com/ls/GetSessionDashboardXML.php?SESSION_DRM=${sessionDRM}&login=${login}&hashedPass=${hashedPass}`,
              {
                method: "GET",
                signal: controller.signal,
                headers: {
                  "Content-type": "application/x-www-form-urlencoded"
                }
              }
            ).catch((e2) => {
              document.querySelector(
                ".no-session-msg"
              ).textContent = "The Server is Down...";
            });
            const xmlResponse = await response.text();
            setSessionDashXML(xmlResponse);
          }
          getSessionDashboard();
        } else {
          setSessionDashXML("none");
        }
      } else {
        window.CallSettings = function CallSettings() {
          props.openSettings();
        };
        localStorage.removeItem("sessionServerIP");
        document.querySelector(".no-session-msg").innerHTML = 'Log into Streambox Cloud in  <button className="sessions-panel-top-btns" onClick="event.preventDefault(); CallSettings();"}> Settings</button>';
      }
    }
    attemptLoginDashboard();
  }, [backgroundFetchCount]);
  async function handleCreateNewSessionBtn() {
    let res = await createNewSession();
    setBackgroundFetchCount(true);
    return res;
  }
  async function createNewSession() {
    let encKey = "";
    if (await getStreamingStatus() == 1) {
      if (confirm(
        "In order to create a new session, the current streaming session needs to be stopped.  Is this okay?"
      ) == true) {
        await POSTData(endpoint2 + "/REST/encoder/action", {
          action_list: ["stop"]
        }).then((data2) => {
          console.log("Streaming stopped" + JSON.stringify(data2));
        });
        encKey = await createSession();
      }
    } else {
      encKey = await createSession();
    }
    async function createSession() {
      var sessionName = prompt(
        "What would you like to name your session? (For email purposes)"
      );
      if (sessionName === null || sessionName === void 0 || sessionName === "") {
        alert(
          "Session name cannot be blank.  Please click 'Create New Session' again."
        );
      } else {
        let userId = localStorage.getItem("user_id");
        let login = localStorage.getItem("cloudLogin");
        let hashedPass = localStorage.getItem("cloudPass");
        const controller = new AbortController();
        setTimeout(() => controller.abort(), 15e3);
        let response = await fetch(
          `https://${localStorage.getItem(
            "cloudServer"
          )}.streambox.com/ls/CreateNewSessionXML.php?USER_ID=${userId}&SESSION_NAME=${sessionName}&login=${login}&hashedPass=${hashedPass}`,
          {
            method: "GET",
            signal: controller.signal,
            headers: {
              "Content-type": "application/x-www-form-urlencoded"
            }
          }
        ).catch((e2) => {
          document.querySelector(".no-session-msg").textContent = "The Server is Down...";
        });
        const xmlResponse = await response.text();
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(xmlResponse, "text/xml");
        let parsedXML = xmlDoc.getElementsByTagName("body")[0];
        if (parsedXML.getAttributeNames().length !== 0) {
          let enc_key = parsedXML.getAttribute("enc_key");
          parsedXML.getAttribute("dec_key");
          localStorage.setItem("sessionDRM", enc_key);
          localStorage.setItem("sessionTitle", sessionName);
          setNetwork1Api(enc_key);
          return enc_key;
        } else {
          localStorage.setItem("sessionDRM", "Invalid Login");
          return "Invalid Login";
        }
      }
    }
    return encKey;
  }
  let timer;
  function startTimer() {
    clearTimer();
    timer = setInterval(() => {
      triggerBackgroundFetch();
    }, backgroundRefreshTime);
  }
  function clearTimer() {
    if (timer) {
      clearInterval(timer);
    }
  }
  function triggerBackgroundFetch() {
    setBackgroundFetchCount((prev2) => prev2 + 1);
  }
  let innerClassList = "containers";
  let outerClassList = "outer-container";
  let style2 = {};
  if (isMultichannelPage) {
    innerClassList = " multichannel-inner";
    outerClassList = " multichannel-outer";
  }
  if (containerStyles.current) {
    if (typeof containerStyles.current.numberOfColumns !== "undefined") {
      style2 = {
        gridTemplateColumns: `repeat(${containerStyles.current.numberOfColumns}, 1fr)`
      };
      if (containerStyles.current.numberOfColumn == 1) {
        innerClassList += " flex-container";
        outerClassList += " flex-outer-container";
      }
    }
  } else {
    innerClassList += " flex-container";
    outerClassList += " flex-outer-container";
  }
  return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement("div", {
    className: outerClassList
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: innerClassList,
    style: style2
  }, currentContainers)));
}
function NavBtn(props) {
  let classList2 = "nav-btn";
  if (props.currentPageName === props.navBtn) {
    classList2 = "nav-btn selected-route";
  }
  return /* @__PURE__ */ React$1.createElement("a", {
    onClick: () => props.changeRoute(props.navBtn),
    className: classList2
  }, props.navBtn);
}
function Navbar(props) {
  let navBtns;
  const endpoint2 = getRestEndpoint();
  if (props.navBtns.length === 0) {
    navBtns = "";
  } else {
    navBtns = props.navBtns.map((route, index2) => /* @__PURE__ */ React$1.createElement(NavBtn, {
      key: `nav-btn-${index2}`,
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
var checkStatus = function checkStatus2(dataEventOff, e2) {
  var show2 = this.state.show;
  var id2 = this.props.id;
  var isCapture2 = this.isCapture(e2.currentTarget);
  var currentItem = e2.currentTarget.getAttribute("currentItem");
  if (!isCapture2)
    e2.stopPropagation();
  if (show2 && currentItem === "true") {
    if (!dataEventOff)
      this.hideTooltip(e2);
  } else {
    e2.currentTarget.setAttribute("currentItem", "true");
    setUntargetItems(e2.currentTarget, this.getTargetArray(id2));
    this.showTooltip(e2);
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
var makeProxy = function makeProxy2(e2) {
  var proxy = {};
  for (var key in e2) {
    if (typeof e2[key] === "function") {
      proxy[key] = e2[key].bind(e2);
    } else {
      proxy[key] = e2[key];
    }
  }
  return proxy;
};
var bodyListener = function bodyListener2(callback, options2, e2) {
  var _options$respectEffec = options2.respectEffect, respectEffect = _options$respectEffec === void 0 ? false : _options$respectEffec, _options$customEvent = options2.customEvent, customEvent2 = _options$customEvent === void 0 ? false : _options$customEvent;
  var id2 = this.props.id;
  var tip = e2.target.getAttribute("data-tip") || null;
  var forId = e2.target.getAttribute("data-for") || null;
  var target = e2.target;
  if (this.isCustomEvent(target) && !customEvent2) {
    return;
  }
  var isTargetBelongsToTooltip = id2 == null && forId == null || forId === id2;
  if (tip != null && (!respectEffect || this.getEffect(target) === "float") && isTargetBelongsToTooltip) {
    var proxy = makeProxy(e2);
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
      listeners[_event] = bodyListener.bind(this, function(e2) {
        var targetEventOff = e2.currentTarget.getAttribute("data-event-off") || eventOff;
        checkStatus.call(_this, targetEventOff, e2);
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
function getPosition(e2, target, node2, place, desiredPlace, effect, offset) {
  var _getDimensions = getDimensions(node2), tipWidth = _getDimensions.width, tipHeight = _getDimensions.height;
  var _getDimensions2 = getDimensions(target), targetWidth = _getDimensions2.width, targetHeight = _getDimensions2.height;
  var _getCurrentOffset = getCurrentOffset(e2, target, effect), mouseX = _getCurrentOffset.mouseX, mouseY = _getCurrentOffset.mouseY;
  var defaultOffset = getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight);
  var _calculateOffset = calculateOffset(offset), extraOffsetX = _calculateOffset.extraOffsetX, extraOffsetY = _calculateOffset.extraOffsetY;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var _getParent = getParent(node2), parentTop = _getParent.parentTop, parentLeft = _getParent.parentLeft;
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
var getDimensions = function getDimensions2(node2) {
  var _node$getBoundingClie = node2.getBoundingClientRect(), height = _node$getBoundingClie.height, width = _node$getBoundingClie.width;
  return {
    height: parseInt(height, 10),
    width: parseInt(width, 10)
  };
};
var getCurrentOffset = function getCurrentOffset2(e2, currentTarget, effect) {
  var boundingClientRect = currentTarget.getBoundingClientRect();
  var targetTop = boundingClientRect.top;
  var targetLeft = boundingClientRect.left;
  var _getDimensions3 = getDimensions(currentTarget), targetWidth = _getDimensions3.width, targetHeight = _getDimensions3.height;
  if (effect === "float") {
    return {
      mouseX: e2.clientX,
      mouseY: e2.clientY
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
  return tip.split(regexp).map(function(d2, i2) {
    return React$1.createElement("span", {
      key: i2,
      className: "multi-line"
    }, d2);
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
  var length2 = nodeList.length;
  if (nodeList.hasOwnProperty) {
    return Array.prototype.slice.call(nodeList);
  }
  return new Array(length2).fill().map(function(index2) {
    return nodeList[index2];
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
function generateStyle(uuid, colors2) {
  var textColor = colors2.text;
  var backgroundColor = colors2.background;
  var borderColor = colors2.border;
  var arrowColor = colors2.arrow;
  return "\n  	.".concat(uuid, " {\n	    color: ").concat(textColor, ";\n	    background: ").concat(backgroundColor, ";\n	    border: 1px solid ").concat(borderColor, ";\n  	}\n\n  	.").concat(uuid, ".place-top {\n        margin-top: -10px;\n    }\n    .").concat(uuid, ".place-top::before {\n        border-top: 8px solid ").concat(borderColor, ";\n    }\n    .").concat(uuid, ".place-top::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-top-color: ").concat(arrowColor, ";\n        border-top-style: solid;\n        border-top-width: 6px;\n    }\n\n    .").concat(uuid, ".place-bottom {\n        margin-top: 10px;\n    }\n    .").concat(uuid, ".place-bottom::before {\n        border-bottom: 8px solid ").concat(borderColor, ";\n    }\n    .").concat(uuid, ".place-bottom::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        top: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-bottom-color: ").concat(arrowColor, ";\n        border-bottom-style: solid;\n        border-bottom-width: 6px;\n    }\n\n    .").concat(uuid, ".place-left {\n        margin-left: -10px;\n    }\n    .").concat(uuid, ".place-left::before {\n        border-left: 8px solid ").concat(borderColor, ";\n    }\n    .").concat(uuid, ".place-left::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        right: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-left-color: ").concat(arrowColor, ";\n        border-left-style: solid;\n        border-left-width: 6px;\n    }\n\n    .").concat(uuid, ".place-right {\n        margin-left: 10px;\n    }\n    .").concat(uuid, ".place-right::before {\n        border-right: 8px solid ").concat(borderColor, ";\n    }\n    .").concat(uuid, ".place-right::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        left: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-right-color: ").concat(arrowColor, ";\n        border-right-style: solid;\n        border-right-width: 6px;\n    }\n  ");
}
function getPopupColors(customColors, type, hasBorder) {
  var textColor = customColors.text;
  var backgroundColor = customColors.background;
  var borderColor = customColors.border;
  var arrowColor = customColors.arrow ? customColors.arrow : customColors.background;
  var colors2 = getDefaultPopupColors(type);
  if (textColor) {
    colors2.text = textColor;
  }
  if (backgroundColor) {
    colors2.background = backgroundColor;
  }
  if (hasBorder) {
    if (borderColor) {
      colors2.border = borderColor;
    } else {
      colors2.border = type === "light" ? "black" : "white";
    }
  }
  if (arrowColor) {
    colors2.arrow = arrowColor;
  }
  return colors2;
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
var toAbsoluteIndex = function(index2, length2) {
  var integer = toInteger(index2);
  return integer < 0 ? max(integer + length2, 0) : min$1(integer, length2);
};
var createMethod = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O2 = toIndexedObject($this);
    var length2 = toLength(O2.length);
    var index2 = toAbsoluteIndex(fromIndex, length2);
    var value;
    if (IS_INCLUDES && el != el)
      while (length2 > index2) {
        value = O2[index2++];
        if (value != value)
          return true;
      }
    else
      for (; length2 > index2; index2++) {
        if ((IS_INCLUDES || index2 in O2) && O2[index2] === el)
          return IS_INCLUDES || index2 || 0;
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
var functionBindContext = function(fn, that, length2) {
  aFunction$1(fn);
  if (that === void 0)
    return fn;
  switch (length2) {
    case 0:
      return function() {
        return fn.call(that);
      };
    case 1:
      return function(a) {
        return fn.call(that, a);
      };
    case 2:
      return function(a, b2) {
        return fn.call(that, a, b2);
      };
    case 3:
      return function(a, b2, c2) {
        return fn.call(that, a, b2, c2);
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
var arraySpeciesCreate = function(originalArray, length2) {
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
  return new (C2 === void 0 ? Array : C2)(length2 === 0 ? 0 : length2);
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
    var length2 = toLength(self2.length);
    var index2 = 0;
    var create2 = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create2($this, length2) : IS_FILTER || IS_FILTER_OUT ? create2($this, 0) : void 0;
    var value, result;
    for (; length2 > index2; index2++)
      if (NO_HOLES || index2 in self2) {
        value = self2[index2];
        result = boundFunction(value, index2, O2);
        if (TYPE) {
          if (IS_MAP)
            target[index2] = result;
          else if (result)
            switch (TYPE) {
              case 3:
                return true;
              case 5:
                return value;
              case 6:
                return index2;
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
  var length2 = keys3.length;
  var index2 = 0;
  var key;
  while (length2 > index2)
    objectDefineProperty.f(O2, key = keys3[index2++], Properties[key]);
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
  var length2 = enumBugKeys.length;
  while (length2--)
    delete NullProtoObject[PROTOTYPE][enumBugKeys[length2]];
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
      var show2 = this.state.show;
      if (show2 && this.tooltipRef) {
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
    value: function showTooltip(e2, isGlobalCall) {
      if (!this.tooltipRef) {
        return;
      }
      if (isGlobalCall) {
        var targetArray = this.getTargetArray(this.props.id);
        var isMyElement = targetArray.some(function(ele) {
          return ele === e2.currentTarget;
        });
        if (!isMyElement)
          return;
      }
      var _this$props5 = this.props, multiline = _this$props5.multiline, getContent = _this$props5.getContent;
      var originTooltip = e2.currentTarget.getAttribute("data-tip");
      var isMultiline = e2.currentTarget.getAttribute("data-multiline") || multiline || false;
      var switchToSolid = e2 instanceof window.FocusEvent || isGlobalCall;
      var scrollHide = true;
      if (e2.currentTarget.getAttribute("data-scroll-hide")) {
        scrollHide = e2.currentTarget.getAttribute("data-scroll-hide") === "true";
      } else if (this.props.scrollHide != null) {
        scrollHide = this.props.scrollHide;
      }
      if (e2 && e2.currentTarget && e2.currentTarget.setAttribute) {
        e2.currentTarget.setAttribute("aria-describedby", this.state.uuid);
      }
      var desiredPlace = e2.currentTarget.getAttribute("data-place") || this.props.place || "top";
      var effect = switchToSolid && "solid" || this.getEffect(e2.currentTarget);
      var offset = e2.currentTarget.getAttribute("data-offset") || this.props.offset || {};
      var result = getPosition(e2, e2.currentTarget, this.tooltipRef, desiredPlace, desiredPlace, effect, offset);
      if (result.position && this.props.overridePosition) {
        result.position = this.props.overridePosition(result.position, e2, e2.currentTarget, this.tooltipRef, desiredPlace, desiredPlace, effect, offset);
      }
      var place = result.isNewState ? result.newState.place : desiredPlace;
      this.clearTimer();
      var target = e2.currentTarget;
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
          self2.updateTooltip(e2);
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
    value: function updateTooltip(e2) {
      var _this5 = this;
      var _this$state = this.state, delayShow = _this$state.delayShow, disable = _this$state.disable;
      var afterShow = this.props.afterShow;
      var placeholder = this.getTooltipContent();
      var eventTarget = e2.currentTarget || e2.target;
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
            currentEvent: e2,
            currentTarget: eventTarget,
            show: true
          }, function() {
            _this5.updatePosition();
            if (isInvisible && afterShow) {
              afterShow(e2);
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
      var show2 = this.state.show;
      if (show2 && this.tooltipRef) {
        this.tooltipRef.addEventListener("mouseleave", this.hideTooltip);
      }
    }
  }, {
    key: "removeListenerForTooltipExit",
    value: function removeListenerForTooltipExit() {
      var show2 = this.state.show;
      if (show2 && this.tooltipRef) {
        this.tooltipRef.removeEventListener("mouseleave", this.hideTooltip);
      }
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip(e2, hasTarget) {
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
          return ele === e2.currentTarget;
        });
        if (!isMyElement || !this.state.show)
          return;
      }
      if (e2 && e2.currentTarget && e2.currentTarget.removeAttribute) {
        e2.currentTarget.removeAttribute("aria-describedby");
      }
      var resetState2 = function resetState3() {
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
            afterHide(e2);
          }
        });
      };
      this.clearTimer();
      if (delayHide) {
        this.delayHideLoop = setTimeout(resetState2, parseInt(delayHide, 10));
      } else {
        resetState2();
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
      var node2 = this.tooltipRef;
      var result = getPosition(currentEvent, currentTarget, node2, place, desiredPlace, effect, offset);
      if (result.position && this.props.overridePosition) {
        result.position = this.props.overridePosition(result.position, currentEvent, currentTarget, node2, place, desiredPlace, effect, offset);
      }
      if (result.isNewState) {
        return this.setState(result.newState, function() {
          _this7.updatePosition();
        });
      }
      node2.style.left = result.position.left + "px";
      node2.style.top = result.position.top + "px";
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
          ref: function ref(_ref3) {
            return _this9.tooltipRef = _ref3;
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
          ref: function ref(_ref22) {
            return _this9.tooltipRef = _ref22;
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
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
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
var __createBinding = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  var desc = Object.getOwnPropertyDescriptor(m2, k2);
  if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m2[k2];
    } };
  }
  Object.defineProperty(o, k22, desc);
} : function(o, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  o[k22] = m2[k2];
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
    for (var k2 in mod)
      if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
        __createBinding(result, mod, k2);
  }
  __setModuleDefault(result, mod);
  return result;
};
var __rest = commonjsGlobal$1 && commonjsGlobal$1.__rest || function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i2]))
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
    _this._getLines = function(text, position2) {
      return text.substring(0, position2).split("\n");
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
    _this._handleKeyDown = function(e2) {
      var _a = _this.props, tabSize = _a.tabSize, insertSpaces = _a.insertSpaces, ignoreTabKey = _a.ignoreTabKey, onKeyDown = _a.onKeyDown;
      if (onKeyDown) {
        onKeyDown(e2);
        if (e2.defaultPrevented) {
          return;
        }
      }
      if (e2.keyCode === KEYCODE_ESCAPE) {
        e2.currentTarget.blur();
      }
      var _b = e2.currentTarget, value = _b.value, selectionStart = _b.selectionStart, selectionEnd = _b.selectionEnd;
      var tabCharacter = (insertSpaces ? " " : "	").repeat(tabSize);
      if (e2.keyCode === KEYCODE_TAB && !ignoreTabKey && _this.state.capture) {
        e2.preventDefault();
        if (e2.shiftKey) {
          var linesBeforeCaret = _this._getLines(value, selectionStart);
          var startLine_1 = linesBeforeCaret.length - 1;
          var endLine_1 = _this._getLines(value, selectionEnd).length - 1;
          var nextValue = value.split("\n").map(function(line3, i2) {
            if (i2 >= startLine_1 && i2 <= endLine_1 && line3.startsWith(tabCharacter)) {
              return line3.substring(tabCharacter.length);
            }
            return line3;
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
            value: value.split("\n").map(function(line3, i2) {
              if (i2 >= startLine_2 && i2 <= endLine_2) {
                return tabCharacter + line3;
              }
              return line3;
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
      } else if (e2.keyCode === KEYCODE_BACKSPACE) {
        var hasSelection = selectionStart !== selectionEnd;
        var textBeforeCaret = value.substring(0, selectionStart);
        if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
          e2.preventDefault();
          var updatedSelection = selectionStart - tabCharacter.length;
          _this._applyEdits({
            value: value.substring(0, selectionStart - tabCharacter.length) + value.substring(selectionEnd),
            selectionStart: updatedSelection,
            selectionEnd: updatedSelection
          });
        }
      } else if (e2.keyCode === KEYCODE_ENTER) {
        if (selectionStart === selectionEnd) {
          var line2 = _this._getLines(value, selectionStart).pop();
          var matches = line2 === null || line2 === void 0 ? void 0 : line2.match(/^\s+/);
          if (matches === null || matches === void 0 ? void 0 : matches[0]) {
            e2.preventDefault();
            var indent = "\n" + matches[0];
            var updatedSelection = selectionStart + indent.length;
            _this._applyEdits({
              value: value.substring(0, selectionStart) + indent + value.substring(selectionEnd),
              selectionStart: updatedSelection,
              selectionEnd: updatedSelection
            });
          }
        }
      } else if (e2.keyCode === KEYCODE_PARENS || e2.keyCode === KEYCODE_BRACKETS || e2.keyCode === KEYCODE_QUOTE || e2.keyCode === KEYCODE_BACK_QUOTE) {
        var chars = void 0;
        if (e2.keyCode === KEYCODE_PARENS && e2.shiftKey) {
          chars = ["(", ")"];
        } else if (e2.keyCode === KEYCODE_BRACKETS) {
          if (e2.shiftKey) {
            chars = ["{", "}"];
          } else {
            chars = ["[", "]"];
          }
        } else if (e2.keyCode === KEYCODE_QUOTE) {
          if (e2.shiftKey) {
            chars = ['"', '"'];
          } else {
            chars = ["'", "'"];
          }
        } else if (e2.keyCode === KEYCODE_BACK_QUOTE && !e2.shiftKey) {
          chars = ["`", "`"];
        }
        if (selectionStart !== selectionEnd && chars) {
          e2.preventDefault();
          _this._applyEdits({
            value: value.substring(0, selectionStart) + chars[0] + value.substring(selectionStart, selectionEnd) + chars[1] + value.substring(selectionEnd),
            selectionStart,
            selectionEnd: selectionEnd + 2
          });
        }
      } else if ((isMacLike ? e2.metaKey && e2.keyCode === KEYCODE_Z : e2.ctrlKey && e2.keyCode === KEYCODE_Z) && !e2.shiftKey && !e2.altKey) {
        e2.preventDefault();
        _this._undoEdit();
      } else if ((isMacLike ? e2.metaKey && e2.keyCode === KEYCODE_Z && e2.shiftKey : isWindows ? e2.ctrlKey && e2.keyCode === KEYCODE_Y : e2.ctrlKey && e2.keyCode === KEYCODE_Z && e2.shiftKey) && !e2.altKey) {
        e2.preventDefault();
        _this._redoEdit();
      } else if (e2.keyCode === KEYCODE_M && e2.ctrlKey && (isMacLike ? e2.shiftKey : true)) {
        e2.preventDefault();
        _this.setState(function(state) {
          return {
            capture: !state.capture
          };
        });
      }
    };
    _this._handleChange = function(e2) {
      var _a = e2.currentTarget, value = _a.value, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd;
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
    var _a = this.props, value = _a.value, style2 = _a.style, padding = _a.padding, highlight = _a.highlight, textareaId = _a.textareaId, textareaClassName = _a.textareaClassName, autoFocus = _a.autoFocus, disabled = _a.disabled, form = _a.form, maxLength = _a.maxLength, minLength = _a.minLength, name = _a.name, placeholder = _a.placeholder, readOnly = _a.readOnly, required = _a.required, onClick = _a.onClick, onFocus2 = _a.onFocus, onBlur = _a.onBlur, onKeyUp = _a.onKeyUp;
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
      React.createElement("textarea", { ref: function(c2) {
        return _this._input = c2;
      }, style: __assign(__assign(__assign({}, styles.editor), styles.textarea), contentStyle), className: className + (textareaClassName ? " ".concat(textareaClassName) : ""), id: textareaId, value, onChange: this._handleChange, onKeyDown: this._handleKeyDown, onClick, onKeyUp, onFocus: onFocus2, onBlur, disabled, form, maxLength, minLength, name, placeholder, readOnly, required, autoFocus, autoCapitalize: "off", autoComplete: "off", autoCorrect: "off", spellCheck: false, "data-gramm": false }),
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
            var classList2 = element.classList;
            if (classList2.contains(className2)) {
              return true;
            }
            if (classList2.contains(no)) {
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
        insertBefore: function(inside, before2, insert, root) {
          root = root || _.languages;
          var grammar = root[inside];
          var ret = {};
          for (var token2 in grammar) {
            if (grammar.hasOwnProperty(token2)) {
              if (token2 == before2) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              }
              if (!insert.hasOwnProperty(token2)) {
                ret[token2] = grammar[token2];
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
          for (var token2 in rest) {
            grammar[token2] = rest[token2];
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
    Token.stringify = function stringify2(o, language) {
      if (typeof o == "string") {
        return o;
      }
      if (Array.isArray(o)) {
        var s = "";
        o.forEach(function(e2) {
          s += stringify2(e2, language);
        });
        return s;
      }
      var env = {
        type: o.type,
        content: stringify2(o.content, language),
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
      for (var token2 in grammar) {
        if (!grammar.hasOwnProperty(token2) || !grammar[token2]) {
          continue;
        }
        var patterns = grammar[token2];
        patterns = Array.isArray(patterns) ? patterns : [patterns];
        for (var j2 = 0; j2 < patterns.length; ++j2) {
          if (rematch && rematch.cause == token2 + "," + j2) {
            return;
          }
          var patternObj = patterns[j2];
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
              var from2 = match2.index;
              var to = match2.index + match2[0].length;
              var p2 = pos;
              p2 += currentNode.value.length;
              while (from2 >= p2) {
                currentNode = currentNode.next;
                p2 += currentNode.value.length;
              }
              p2 -= currentNode.value.length;
              pos = p2;
              if (currentNode.value instanceof Token) {
                continue;
              }
              for (var k2 = currentNode; k2 !== tokenList.tail && (p2 < to || typeof k2.value === "string"); k2 = k2.next) {
                removeCount++;
                p2 += k2.value.length;
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
            var from2 = match2.index;
            var matchStr = match2[0];
            var before2 = str.slice(0, from2);
            var after2 = str.slice(from2 + matchStr.length);
            var reach = pos + str.length;
            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }
            var removeFrom = currentNode.prev;
            if (before2) {
              removeFrom = addAfter(tokenList, removeFrom, before2);
              pos += before2.length;
            }
            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token2, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);
            if (after2) {
              addAfter(tokenList, currentNode, after2);
            }
            if (removeCount > 1) {
              var nestedRematch = {
                cause: token2 + "," + j2,
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
    function addAfter(list, node2, value) {
      var next2 = node2.next;
      var newNode = { value, prev: node2, next: next2 };
      node2.next = newNode;
      next2.prev = newNode;
      list.length++;
      return newNode;
    }
    function removeRange(list, node2, count) {
      var next2 = node2.next;
      for (var i2 = 0; i2 < count && next2 !== list.tail; i2++) {
        next2 = next2.next;
      }
      node2.next = next2;
      next2.prev = node2;
      list.length -= i2;
    }
    function toArray(list) {
      var array = [];
      var node2 = list.head.next;
      while (node2 !== list.tail) {
        array.push(node2.value);
        node2 = node2.next;
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
      let templateOptionsArr = json.map((template, index2) => /* @__PURE__ */ React$1.createElement("option", {
        key: `template-option-${index2}`,
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
    (line2, i2) => `<span class='editorLineNumber'>${i2 + 1}</span>${line2}`
  ).join("\n");
  async function applyTemplate(e2) {
    e2.preventDefault();
    const selectedTemplate = e2.target[0].value;
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
  async function processCustom(e2) {
    setNeedCustom(e2 == "Custom");
  }
  async function processNewServer(e2) {
    if (needCustom) {
      localStorage.setItem("cloudServer", strCustomServer);
      localStorage.setItem("customServerPostfix", "");
    } else {
      localStorage.setItem("cloudServer", e2);
      localStorage.setItem("customServerPostfix", ".streambox.com");
    }
  }
  async function changeDefaultTemplateWrapper(e2) {
    e2.preventDefault();
    let templateName = e2.target[0].value;
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
  async function attemptLoginSubmit(e2) {
    e2.preventDefault();
    const login = strLogin;
    const hashedPass = md5(strPassword);
    const serverIndex = e2.target[0].selectedIndex;
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
    ).catch((e22) => {
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
  async function editTemplate(e2) {
    e2.preventDefault();
    const selectedTemplate = e2.target[0].value;
    if (selectedTemplate !== "none") {
      setCreateDisabled(false);
      let response = await fetch(
        `${endpoint2}/REST/templates/${selectedTemplate}`
      );
      let json;
      try {
        json = await response.json();
      } catch (e22) {
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
  async function createTemplate(e2) {
    e2.preventDefault();
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
  function handleSaveTemplateBtn(e2) {
    let value = e2.target.value;
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
  async function handleUploadSubmit(e2) {
    e2.preventDefault();
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
  let serverOptions = serverList.map((server, index2) => /* @__PURE__ */ React$1.createElement("option", {
    key: `server-option-${index2}`,
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
    onChange: (e2) => processCustom(e2.target.value)
  }, serverOptions)), needCustom && /* @__PURE__ */ React$1.createElement("input", {
    type: "text",
    className: "custom-server",
    value: strCustomServer,
    onChange: (e2) => setStrCustomServer(e2.target.value)
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
    onChange: (e2) => setStrLogin(e2.target.value),
    placeholder: " Username"
  }), /* @__PURE__ */ React$1.createElement("input", {
    className: "login-input",
    type: "password",
    onChange: (e2) => setStrPassword(e2.target.value),
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
    onClick: (e2) => handleUploadSubmit(e2),
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
