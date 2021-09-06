let jwt_decode = require('jwt-decode');

var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1MjczIiwicm9sZXMiOlsiUk9MRV9DQU5ESURBVEUiXSwiaWF0IjoxNjMwOTIwMjY3LCJleHAiOjE2MzA5MjM4Njd9.LHNA0qpIlBAxyZJgXtux5fpUQMGcwxssihtJxfv30-0ozljT11Btze2W-XWDt5kFy_mInUqLs3lQbnYbRbsaig";
var decoded = jwt_decode(token);

console.log(decoded);

const unixTime1 = decoded.iat;
const date1 = new Date(unixTime1*1000);
console.log(date1.toLocaleString("en-US") + ' creation time');

const unixTime = decoded.exp;
const date = new Date(unixTime*1000);
console.log(date.toLocaleString("en-US")  + ' expiration time');

/* prints:
 * { foo: "bar",
 *   exp: 1393286893,
 *   iat: 1393268893  }
 */

// decode header by passing in options (useful for when you need `kid` to verify a JWT):
var decodedHeader = jwt_decode(token, { header: true });
console.log(decodedHeader);

/* prints:
 * { typ: "JWT",
 *   alg: "HS256" }
 */
