export function FrontRouter() {
  this.routes = {};
  this.preHash = '/';
  this.nextHash = '/'
  this.curHash = '/';
  window.addEventListener('load', this.resolve.bind(this), false);
  window.addEventListener('hashchange', this.resolve.bind(this), false);
}

FrontRouter.prototype.route = function(path, callback) {
  this.routes[path] = callback || function() {};
};

FrontRouter.prototype.back = function() {
  this.updateHash(this.preHash);
  this.nextHash = this.curHash;
}

FrontRouter.prototype.resolve = function() {
  this.preHash = this.curHash;
  this.curHash = location.hash.slice(1) || '/';
  typeof this.routes[this.curHash] === 'function' &&
    this.routes[this.curHash]();
}

FrontRouter.prototype.forward = function() {
  this.updateHash(this.nextHash);
}

FrontRouter.prototype.updateHash = function(hash) {
  location.hash = '#' + hash;
}
