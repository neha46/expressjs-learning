"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//setup babel  with express js

var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello Anisha come and learn express ');
});
app.listen(port, function () {
  console.log("Example app listening on http://localhost:".concat(port));
});