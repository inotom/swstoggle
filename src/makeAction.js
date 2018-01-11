const constants = require('./constants.js');

const HANDLE_CLASS = constants.HANDLE_CLASS;
const ACTIVE_CLASS = constants.ACTIVE_CLASS;

module.exports = (handle, next, hasFolder) => {
  const rect = hasFolder ? next.getBoundingClientRect() : void(0);
  const height = hasFolder ? rect.height : 0;
  const id = handle.getAttribute('id');

  return (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!handle.classList.contains(HANDLE_CLASS)) {
      return;
    }

    const isActive = handle.classList.contains(ACTIVE_CLASS);
    const classAction = isActive ? 'remove' : 'add';
    const heightValue = isActive ? '0' : `${height}px`;
    const idActiveClass = id ? `${ACTIVE_CLASS}--${id}` : '';

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
