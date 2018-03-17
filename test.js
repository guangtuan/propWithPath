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

console.log(propWithPath(testObj, 'user.id'));
console.log(propWithPath(testObj, 'orders[0][0]'));
console.log(propWithPath(testObj, 'orders[0][0].id'));