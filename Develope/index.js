const inquirer = require('inquirer');
const fs = require('fs');

const { Circle, Square, Triangle} =  require('./Asset/shapes');
const SVG = require('./Asset/svg');

inquirer.prompt (
    [
        {
            type: 'input',
            message: 'What color would you like your logo to be?',
            name: 'logoColor'
        },
        {
            type: 'list',
            message: 'What shape would you like your logo to be?',
            name: 'logo',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            message: 'What would you like your logo to say?',
            name: 'text'
        },
        {
            type: 'input',
            message: 'What color would you like your text to be?',
            name: 'textColor'
        }
    ]
).then(data => {
    let shape;
    if (data.shape === 'cricle') {shape = new Circle()}
    else if (data.shape === 'square') {shape = new Square()}
    else {shape = new Triangle()}

    shape.setColor(data.logoColor)

    const svg = new SVG()
    svg.setText(data.text, data.textColor);
    svg.setShape(shape);
    fs.writeFile('logo.svg', svg.render(), (err) => {
        if(err) console.log(err)
        console.log('Success!')

    })
}).catch(err => {console.log(err)})