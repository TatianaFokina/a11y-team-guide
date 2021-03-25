// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"uGph":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorTheme = colorTheme;

function colorTheme() {
  var $switcher = document.querySelector('.switch-btn');
  var $switcherContentDark = document.querySelector('.switch-btn__content--dark');
  var $switcherContentLight = document.querySelector('.switch-btn__content--light');
  var $darkThemeClass = 'dark-theme';
  var $isDark; // If user has already selected a specific theme apply it

  initTheme(); // Listens for a click on the button

  $switcher.addEventListener('click', function () {
    changeTheme(); // localStorage
    // Saves theme

    if ($isDark) {
      localStorage.setItem('themeSwitch', 'dark');
    } // Resets theme selection
    else {
        localStorage.setItem('themeSwitch', 'light');
      }
  }); // Switch theme and change the name of the button

  function changeTheme(initThemeIsDark) {
    if (!$isDark || initThemeIsDark) {
      // Adds the class for the <body>
      document.body.classList.add($darkThemeClass); // Shows the another name of the button

      $switcherContentLight.style.display = 'inline-flex';
      $switcherContentDark.style.display = 'none';
      $isDark = true;
    } else {
      // Removes the class from the <body>
      document.body.classList.remove($darkThemeClass); // Shows the another name of the button

      $switcherContentLight.style.display = 'none';
      $switcherContentDark.style.display = 'inline-flex';
      $isDark = false;
    }
  }

  function initTheme() {
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var $initThemeIsDark = localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark' || prefersDark && !localStorage.getItem('themeSwitch'); // Switches to a specific theme on a load page

    if ($initThemeIsDark) {
      changeTheme($initThemeIsDark);
    }
  }
}
},{}],"ur3l":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyboardFocus = keyboardFocus;

function keyboardFocus() {
  // Adds keyboard-accessible class to the <body>
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-focus');
    }
  }); // Removes class from body in CSS

  document.addEventListener('mousedown', function () {
    document.body.classList.remove('keyboard-focus');
  });
}
},{}],"tVle":[function(require,module,exports) {
"use strict";

var _colorTheme = require("./color-scheme/color-theme.js");

var _keyboardFocus = require("./focus/keyboard-focus.js");

(0, _colorTheme.colorTheme)();
(0, _keyboardFocus.keyboardFocus)();
},{"./color-scheme/color-theme.js":"uGph","./focus/keyboard-focus.js":"ur3l"}]},{},["tVle"], null)