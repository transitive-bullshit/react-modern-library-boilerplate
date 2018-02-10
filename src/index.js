import Foo from './Foo'
import Bar from './Bar'

// export Foo and Bar as named exports
export { Foo, Bar }

// alternative, more concise syntax for named exports
// export { default as Foo } from './Foo'

// you could also export a default object containing your module's interface
// note that if you export both named and default exports, rollup will complain.
// if you know how to prevent this warning, please let me know :)
// export default { Foo, Bar }
