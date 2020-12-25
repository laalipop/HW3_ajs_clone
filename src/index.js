function info() {
    const m = new Map();
    m.set('name', '3hw_ajs');
    m.set('version', '1.0.0');
    return m;
  }
  
  // export default {
  //   info
  // };

  const ajs = require('@laalipop/3hw_ajs');

console.log(ajs.info());