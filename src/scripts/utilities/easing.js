// easing functions from "Tween.js"
// source: https://github.com/component/ease

exports.linear = function(n) {
  return n;
};

exports.inQuad = function(n) {
  return n * n;
};

exports.outQuad = function(n) {
  return n * (2 - n);
};

exports.inOutQuad = function(n) {
  n *= 2;
  if (n < 1) return 0.5 * n * n;
  return -0.5 * (--n * (n - 2) - 1);
};

exports.inCube = function(n) {
  return n * n * n;
};

exports.outCube = function(n) {
  return --n * n * n + 1;
};

exports.inOutCube = function(n) {
  n *= 2;
  if (n < 1) return 0.5 * n * n * n;
  return 0.5 * ((n -= 2) * n * n + 2);
};

exports.inQuart = function(n) {
  return n * n * n * n;
};

exports.outQuart = function(n) {
  return 1 - --n * n * n * n;
};

exports.inOutQuart = function(n) {
  n *= 2;
  if (n < 1) return 0.5 * n * n * n * n;
  return -0.5 * ((n -= 2) * n * n * n - 2);
};

exports.inQuint = function(n) {
  return n * n * n * n * n;
};

exports.outQuint = function(n) {
  return --n * n * n * n * n + 1;
};

exports.inOutQuint = function(n) {
  n *= 2;
  if (n < 1) return 0.5 * n * n * n * n * n;
  return 0.5 * ((n -= 2) * n * n * n * n + 2);
};

exports.inSine = function(n) {
  return 1 - Math.cos((n * Math.PI) / 2);
};

exports.outSine = function(n) {
  return Math.sin((n * Math.PI) / 2);
};

exports.inOutSine = function(n) {
  return 0.5 * (1 - Math.cos(Math.PI * n));
};

exports.inExpo = function(n) {
  return n == 0 ? 0 : Math.pow(1024, n - 1);
};

exports.outExpo = function(n) {
  return n == 1 ? n : 1 - Math.pow(2, -10 * n);
};

exports.inOutExpo = function(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if ((n *= 2) < 1) return 0.5 * Math.pow(1024, n - 1);
  return 0.5 * (-Math.pow(2, -10 * (n - 1)) + 2);
};

exports.inCirc = function(n) {
  return 1 - Math.sqrt(1 - n * n);
};

exports.outCirc = function(n) {
  return Math.sqrt(1 - --n * n);
};

exports.inOutCirc = function(n) {
  n *= 2;
  if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
};

exports.inBack = function(n) {
  const s = 1.70158;
  return n * n * ((s + 1) * n - s);
};

exports.outBack = function(n) {
  const s = 1.70158;
  return --n * n * ((s + 1) * n + s) + 1;
};

exports.inOutBack = function(n) {
  const s = 1.70158 * 1.525;
  if ((n *= 2) < 1) return 0.5 * (n * n * ((s + 1) * n - s));
  return 0.5 * ((n -= 2) * n * ((s + 1) * n + s) + 2);
};

exports.inBounce = function(n) {
  return 1 - exports.outBounce(1 - n);
};

exports.outBounce = function(n) {
  if (n < 1 / 2.75) {
    return 7.5625 * n * n;
  }
  if (n < 2 / 2.75) {
    return 7.5625 * (n -= 1.5 / 2.75) * n + 0.75;
  }
  if (n < 2.5 / 2.75) {
    return 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375;
  }
  return 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
};

exports.inOutBounce = function(n) {
  if (n < 0.5) return exports.inBounce(n * 2) * 0.5;
  return exports.outBounce(n * 2 - 1) * 0.5 + 0.5;
};

exports.inElastic = function(n) {
  let s;
  let a = 0.1;
  const p = 0.4;
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (!a || a < 1) {
    a = 1;
    s = p / 4;
  } else s = (p * Math.asin(1 / a)) / (2 * Math.PI);
  return -(
    a *
    Math.pow(2, 10 * (n -= 1)) *
    Math.sin(((n - s) * (2 * Math.PI)) / p)
  );
};

exports.outElastic = function(n) {
  let s;
  let a = 0.1;
  const p = 0.4;
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (!a || a < 1) {
    a = 1;
    s = p / 4;
  } else s = (p * Math.asin(1 / a)) / (2 * Math.PI);
  return a * Math.pow(2, -10 * n) * Math.sin(((n - s) * (2 * Math.PI)) / p) + 1;
};

exports.inOutElastic = function(n) {
  let s;
  let a = 0.1;
  const p = 0.4;
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (!a || a < 1) {
    a = 1;
    s = p / 4;
  } else s = (p * Math.asin(1 / a)) / (2 * Math.PI);
  if ((n *= 2) < 1)
    return (
      -0.5 *
      (a * Math.pow(2, 10 * (n -= 1)) * Math.sin(((n - s) * (2 * Math.PI)) / p))
    );
  return (
    a *
      Math.pow(2, -10 * (n -= 1)) *
      Math.sin(((n - s) * (2 * Math.PI)) / p) *
      0.5 +
    1
  );
};
