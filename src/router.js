export function FrontRouter() {
  this.routes = {};
  this.preHash = '/';
  this.curHash = '/';
  window.addEventListener('load', this.resolve.bind(this), false);
  window.addEventListener('hashchange', this.resolve.bind(this), false);
}

FrontRouter.prototype.route = function(path, callback) {
  this.routes[path] = callback || function() {};
};

FrontRouter.prototype.back = function() {
  location.hash = '#' + this.preHash;
  console.log('pre_hash:', location.hash);
}

FrontRouter.prototype.resolve = function() {
  this.preHash = this.curHash;
  this.curHash = location.hash.slice(1) || '/';
  typeof this.routes[this.curHash] === 'function' &&
    this.routes[this.curHash]();
};
