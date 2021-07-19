const inquirer = require('inquirer');
const fs = require('fs');
const pageTemp = require('./src/page-template.js');
const {writeToFile} = require('./utils/generate-site.js');

const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'team members'
    }]);
}

questions()
    .then(pageTemp)
    .then(writeToFile)
    .catch(err => {
        console.log(err);
    })