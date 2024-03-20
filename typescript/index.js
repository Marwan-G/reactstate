"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (res) {
    var todo = res.data;
    var id = todo.Id;
    var title = todo.title;
    var complete = todo.complete;
    console.log(" ".concat(id, " ").concat(title, " ").concat(complete));
});
