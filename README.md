# propWithPath
javaScript get prop with path of an object

### desc

This is a util function to access value of an object with path like `propName`, `arrayPropName[arrayIndex]`.

### usage

```javaScript
const propWithPath = require('./index');

const testObj = {
  user: {
    id: 'abc',
    name: 'grant',
    age: 10
  },
  orders: [
    [{
      id: '123'
    }]
  ]
}

console.log(propWithPath(testObj, 'user.id')); // abc
console.log(propWithPath(testObj, 'orders[0][0]')); // { id: '123' }
console.log(propWithPath(testObj, 'orders[0][0].id')); // 123
```