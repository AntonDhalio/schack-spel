let position = [0, 0]
  let observer = null

  function emitChange() {
    observer(position)
  }

  export function observe(o) {
    if(observer) {
      throw new Error('')
    }
    observer = o
    emitChange()
  }

  export function movePiece(toX, toY) {
      position = [toX, toY]
      emitChange()
  }