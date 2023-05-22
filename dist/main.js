"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("./src/userService");
const commander_1 = require("commander");
const commander = new commander_1.Command();
commander.option('-f, --fetch-user <type>', 'Get user information from Github and store it on Postgres')
    .option('-l, --list-users', 'List all users on Postgres')
    .option('-g, --get-user <type>', 'Get user information from Postgres')
    .option('-location, --user-location <type>', 'Filter users by programming language used in the repos.')
    .option('-language, --programming-language <type>', 'Filter users by programming language used in the repos.');
commander.parse(process.argv);
const options = commander.opts();
let argValue = undefined;
if (options.fetchUser) {
    argValue = options.fetchUser;
    const user = (0, userService_1.getUser)(argValue);
    console.log(user);
}
//# sourceMappingURL=main.js.map