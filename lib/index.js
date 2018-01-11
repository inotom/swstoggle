'use strict';

var makeAction = require('./makeAction.js');
var constants = require('./constants.js');

var HANDLE_CLASS = constants.HANDLE_CLASS;
var FOLDER_CLASS = constants.FOLDER_CLASS;

module.exports = function () {
  var handles = document.querySelectorAll('.' + HANDLE_CLASS);

  for (var i = 0, len = handles.length; i < len; i++) {
    var elHandle = handles[i];
    var elNext = elHandle.nextElementSibling;
    var hasNextFolder = elNext.classList.contains(FOLDER_CLASS);

    elHandle.addEventListener('click', makeAction(elHandle, elNext, hasNextFolder));

    if (hasNextFolder) {
      elNext.style.height = 0;
      elNext.style.overflow = 'hidden';
    }
  }
};