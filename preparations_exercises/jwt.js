let jwt_decode = require('jwt-decode');

var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1Mzg1Iiwicm9sZXMiOlsiUk9MRV9DQU5ESURBVEUiXSwiaWF0IjoxNjMxNjM4MTA1LCJleHAiOjE2MzE2NDE3MDV9.dC6T7hmrVPJQGkSeHZNAvSQUfSN_RGZNuXU5xwP2vnatC_ipD-azlJ-QaybvLzDglcmdj7jodUiC0IyW-sPjtg";
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
