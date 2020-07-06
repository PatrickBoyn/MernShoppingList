"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var items_1 = __importDefault(require("./routes/api/items"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var db = require('./config/keys').mongoUri;
// TODO convert to async await.
mongoose_1.default
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () { return console.log('MongoDb Connected.'); })
    .catch(function (error) { return console.error(error); });
app.use('/api/items', items_1.default);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server started on port " + PORT); });
