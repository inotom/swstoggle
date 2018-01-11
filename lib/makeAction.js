'use strict';

var constants = require('./constants.js');

var HANDLE_CLASS = constants.HANDLE_CLASS;
var ACTIVE_CLASS = constants.ACTIVE_CLASS;

module.exports = function (handle, next, hasFolder) {
  var rect = hasFolder ? next.getBoundingClientRect() : void 0;
  var height = hasFolder ? rect.height : 0;
  var id = handle.getAttribute('id');

  return function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (!handle.classList.contains(HANDLE_CLASS)) {
      return;
    }

    var isActive = handle.classList.contains(ACTIVE_CLASS);
    var classAction = isActive ? 'remove' : 'add';
    var heightValue = isActive ? '0' : height + 'px';
    var idActiveClass = id ? ACTIVE_CLASS + '--' + id : '';

    handle.classList[classAction](ACTIVE_CLASS);
    if (id) {
      handle.classList[classAction](idActiveClass);
      document.body.classList[classAction](idActiveClass);
    }
    if (hasFolder) {
      next.style.height = heightValue;
      next.classList[classAction](ACTIVE_CLASS);
      if (id) {
        next.classList[classAction](idActiveClass);
      }
    }
  };
};