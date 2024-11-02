export interface Iterator<T> extends IterableIterator<T> {
  nextValue: () => any
  done: boolean
  length: number
  index: number
}

export function createIterator (array: any[]): Iterator<any> {
  const iterator = array[Symbol.iterator]()

  return {
    ...iterator,
    nextValue: function () {
      if (this.done === true) {
        throw new Error('Iterator depleted!')
      }
      if (++this.index === this.length) this.done = true
      return iterator.next().value
    },
    done: array.length === 0,
    index: 0,
    length: array.length
  }
}
