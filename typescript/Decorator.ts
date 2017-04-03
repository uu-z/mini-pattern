

  function prefix(target: Object, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    let method = descriptor.value as Function

    if(typeof method !== 'function') {
      throw new Error('Expecting decorating a method')
    }

    return {
      value: function() {
        return `[prefix]${method.apply(this,arguments)}`
      },
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable
    }
  }

  export class Foo{
    @prefix
    getContent(): string {
      return '...'
    }
  }


