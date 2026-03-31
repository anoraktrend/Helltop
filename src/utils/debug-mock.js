// src/utils/debug-mock.js
const debug = () => {
  const noop = () => {};
  noop.enabled = false;
  noop.enable = () => {};
  noop.disable = () => {};
  noop.humanize = () => '';
  noop.log = () => {};
  noop.formatters = {};
  noop.extend = () => noop;
  noop.destroy = () => {};
  return noop;
};

debug.enable = () => {};
debug.disable = () => {};
debug.enabled = false;
debug.humanize = () => '';
debug.log = () => {};
debug.formatters = {};
debug.debug = debug;
debug.default = debug;

export default debug;
