import Foo from './Foo'
import Bar from './Bar'

// export Foo and Bar as named exports
export { Foo, Bar }

// alternative, more concise syntax for named exports
// export { default as Foo } from './Foo'

// you can optionally also set a default export for your module
export default { Foo, Bar }
