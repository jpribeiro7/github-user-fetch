
import { getUser, getUserRepos } from './src/userService'
import { Command } from 'commander'

const commander  = new Command();
commander.option('-f, --fetch-user <type>','Get user information from Github and store it on Postgres')
        .option('-l, --list-users', 'List all users on Postgres')
        .option('-g, --get-user <type>', 'Get user information from Postgres')
        .option('-location, --user-location <type>', 'Filter users by programming language used in the repos.') 
        .option('-language, --programming-language <type>', 'Filter users by programming language used in the repos.');


commander.parse(process.argv);
const options = commander.opts();

let argValue:string = undefined;
if (options.fetchUser){
    console.log('here', options.fetchUser);
    argValue = options.fetchUser;
    const user = getUser(argValue).then(response => getUserRepos(argValue)).then((response) => {console.log(response)})
}