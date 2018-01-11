const makeAction = require('./makeAction.js');
const constants = require('./constants.js');

const HANDLE_CLASS = constants.HANDLE_CLASS;
const FOLDER_CLASS = constants.FOLDER_CLASS;

module.exports = () => {
  const handles = document.querySelectorAll(`.${HANDLE_CLASS}`);

  for (let i = 0, len = handles.length; i < len; i++) {
    const elHandle = handles[i];
    const elNext = elHandle.nextElementSibling;
    const hasNextFolder = elNext.classList.contains(FOLDER_CLASS);

    elHandle.addEventListener('click', makeAction(elHandle, elNext, hasNextFolder));

    if (hasNextFolder) {
      elNext.style.height = 0;
      elNext.style.overflow = 'hidden';
    }
  }
};
