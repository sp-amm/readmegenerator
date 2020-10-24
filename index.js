// npm packages
var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = [

        {
        type: "input",
        name: "title",
        message: "What is your project title?",
        },
 
        {
         type: "input",
        name: "description",
        message: "Provide a detailed project description.",
        },

        {
        type: "input",
        name: "install",
        message: "Provide installation instructions.",
        },
    
        {
        type: "input",
        name: "usage",
        message: "Provide usage information.",
        },

        {
        type: "input",
        name: "contribution",
        message: "Provide contribution guidelines.",
        },

        {
        type: "input",
        name: "test",
        message: "Provide test instructions.",
        }, 

        {
        type: "list",
        message: "What is your preferred license?",
        name: "license",
        choices: [
            "MIT",
            "GNU",
            "Apache"
        ]
        },

        {
        type: "input",
        name: "github",
        message: "What is your github user name?",
        },

        {
        type: "input",
        name: "email",
        message: "What is your email address?",
        },
 
];

function createFile(){ 

    
    inquirer.prompt(questions)
        .then(function(data) {

            let title = data.title;
            let install = data.install;
            let description = data.description;
            let usage = data.usage;
            let contribution = data.contribution;
            let test = data.test; 
            let github = data.github;
            let email = data.email; 
            let license = data.license;
            let year = new Date().getFullYear();
            let badgeUrl = "";
            

            if(license ==="MIT"){

                badgeUrl = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
                licenseInfo = `MIT License

Copyright (c) ${year}
                
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
                
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
            };

            if(license =="GNU"){
                badgeUrl = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
                licenseInfo = `                    GNU GENERAL PUBLIC LICENSE v3.0

Copyright (C) ${year}  

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

                `;
            };
            
            if(license==="Apache"){
                badgeUrl = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
                licenseInfo = `Apache License

Copyright ${year}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
            };
                  
            
            let readMe =

`README.md                
# ${title}<br>

${badgeUrl}

## DESCRIPTION
${description}

## Table of Contents:

[Installation](#installation)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Questions](#questions)<br>

## Installation
${install}

## Usage
${usage}

## License
${licenseInfo}

## Contributing
${contribution}

## Tests
${test}

## Questions
You can find more information at my github profile at https://github.com/${github}.
Email me at ${email} anytime.`
             
              
            let filename = "README.md"

         fs.writeFile(filename, readMe, function(err){
                if(err) {return console.log(err)};         
            });
            console.log("Your README.md has been created.")
        });   
        
   
    }; 

    createFile();