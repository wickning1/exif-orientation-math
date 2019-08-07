module.exports = {
  compose: function (first, second) {
    if (first === 1) return second
    if (second === 1) return first
    if (first === 2) {
      if (second === 2) return 1
      if (second === 3) return 4
      if (second === 4) return 3
      if (second === 5) return 6
      if (second === 6) return 5
      if (second === 7) return 8
      if (second === 8) return 7
    }
    if (first === 3) {
      if (second === 2) return 4
      if (second === 3) return 1
      if (second === 4) return 2
      if (second === 5) return 7
      if (second === 6) return 8
      if (second === 7) return 5
      if (second === 8) return 6
    }
    if (first === 4) {
      if (second === 2) return 3
      if (second === 3) return 2
      if (second === 4) return 1
      if (second === 5) return 8
      if (second === 6) return 7
      if (second === 7) return 6
      if (second === 8) return 5
    }
    if (first === 5) {
      if (second === 2) return 8
      if (second === 3) return 6
      if (second === 4) return 7
      if (second === 5) return 1
      if (second === 6) return 4
      if (second === 7) return 3
      if (second === 8) return 2
    }
    if (first === 6) {
      if (second === 2) return 7
      if (second === 3) return 8
      if (second === 4) return 5
      if (second === 5) return 2
      if (second === 6) return 3
      if (second === 7) return 4
      if (second === 8) return 1
    }
    if (first === 7) {
      if (second === 2) return 6
      if (second === 3) return 5
      if (second === 4) return 8
      if (second === 5) return 3
      if (second === 6) return 2
      if (second === 7) return 1
      if (second === 8) return 4
    }
    if (first === 8) {
      if (second === 2) return 5
      if (second === 3) return 6
      if (second === 4) return 7
      if (second === 5) return 4
      if (second === 6) return 1
      if (second === 7) return 2
      if (second === 8) return 3
    }
  },
  operations: function (orientation, options = {}) {
    const o = parseInt(orientation)
    if (options.flop && o === 4) return { flip: false, flop: true, angle: 0 }
    const flip = [2, 4, 5, 7].includes(o)
    const angle = [0, 0, 180, 180, 270, 270, 90, 90][o]
    return { flip, angle }
  }
}
