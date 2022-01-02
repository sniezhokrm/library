import $ from '../core';

$.prototype.get = function(selector) {
  const obj = {};
  if (!selector) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    if (this[i].getAttribute(selector) !== null) {
      obj[i] = this[i].getAttribute(selector);
    }
  }
  return obj;
};

$.prototype.set = function(name, value = '') {
  if (!name) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(name, value);
  }
  return this;
};

$.prototype.remove = function(name) {
  if (!name) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(name);
  }
  return this;
};
