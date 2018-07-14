export default class ScrollUtil {
  passive = this.isPassiveScrollSupported();

  isPassiveScrollSupported() {
    let supported = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: function() {
          supported = true;
        }
      });
      window.addEventListener('t', null, opts);
      window.removeEventListener('t', null, opts);
    } catch (e) {}
    return supported;
  }

  init(handleScroll) {
    const isServer = typeof window === 'undefined';
    if (!isServer) {
      window.addEventListener(
        'scroll',
        handleScroll,
        this.passive ? { passive: true } : false
      );
    }
  }
}
