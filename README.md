# Project Description

VisBOL is an open source project providing visualization of synthetic biology designs using the [SBOL Visual](https://sbolstandard.org/visual-glyphs/) glyph set. VisBOL currently supports generation of designs from [SBOL](https://sbolstandard.org/) documents.


# Interface

![VisBOL Example Visualization](./images/example.png)

# Architecture

VisBOL practices a strict separation between the front-end and back-end.

## BACK-END:

VisBOL's back-end parses SBOL files and extracts relevant data needed to visualize the design.

There are two major javascript functions exported from the back-end - createDisplay and prepareDisplay

**createDisplay** is a Javascript function which takes in SBOL (in the form of a string) and generates a Javascript
Promise object. If the SBOL is able to be parsed without any errors, this Promise will resolve as a "display list". This display
list is an array of Javascript objects that each represent a node, or "glyph", in the synthetic design.

**prepareDisplay** is a Javascript function which takes in a display list (see createDisplay explanation above) and generates a
Javascript object that VisBOL's front-end uses to generate a visualization (see **FRONT_END** section below).

## FRONT_END:

VisBOL's front-end is a [React](https://reactjs.org/) component. The react component accepts an object generated by the back-end's **prepareDisplay** function (see above) as a prop
and renders an svg representing the corresponding synthetic biology design. The **Interface** section shows an example rendering by VisBOL's front-end.

# Installation & Set Up

VisBOL's back-end can be installed via npm or yarn:

Via npm: `npm install visbol`
Via yarn: `yarn add visbol`

VisBOL's front-end can be installed via npm or yarn:

Via npm: `npm install visbol-react`
Via yarn: `yarn add visbol-react`

# Examples

One can view VisBOL 2's rendering of SBOL files using VisBOL 2's website.

1) First, clone the repository: `git clone https://github.com/VisBOL/visbol2.git`
2) Then, enter the VisBOL 2 Website directory: `cd website`
3) Install dependences: `yarn install`
4) Start the website locally: `npm start`
5) The website can now be visited at `http://localhost:3000/`


# Limitations

???

# Publishing

To publish the latest version of the backend:

1) Navigate to the back-end directory: `cd backend`
2) Open `package.json`
3) Update the version number
4) Run `npm publish`

To publish the latest version of the front-end:

1) Navigate to the front-end directory: `cd frontend`
2) Run `npm run build`
2) Open `package.json`
3) Update the version number
4) Run `npm publish`