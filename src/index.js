const makeAction = require('./makeAction.js');
const constants = require('./constants.js');

const HANDLE_CLASS = constants.HANDLE_CLASS;
const FOLDER_CLASS = constants.FOLDER_CLASS;

for (let elHandle of document.querySelectorAll(`.${HANDLE_CLASS}`)) {
  const elNext = elHandle.nextElementSibling;
  const hasNextFolder = elNext.classList.contains(FOLDER_CLASS);

  elHandle.addEventListener('click', makeAction(elHandle, elNext, hasNextFolder));

  if (hasNextFolder) {
    elNext.style.height = 0;
    elNext.style.overflow = 'hidden';
  }
}
