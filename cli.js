#!/usr/bin/env node
'use strict';

const path = require('path');

const fs = require('fs');

const prompt = require('prompt');

prompt.start();
var schema = {
	properties: {
		firstChoice: {
			pattern: /^[1-3]/,
			message: 'Choose between 1-3',
			required: true
		}
	}
};
console.log('What do you want to do?\n1. Read Notes.\n2. Take notes.\n3. Reset Notes');
prompt.get(schema, function (err, result) {
	if (err) {
		console.log('ERROR! You probably ^C or something');
	}
	if (result.firstChoice === '1' || result.firstChoice === 1) {
		if (err) {
			console.log('ERROR!');
		}
		fs.readFile('~/notes', 'utf8', (err, notes) => {
			if (err) {
				console.log('ERROR! You probably dont have any notes.');
			}
			console.log(notes);
		});
	}
	if (result.firstChoice === '2' || result.firstChoice === 2) {
		console.log('What is your note?');
		prompt.get(['note'], function (err, result) {
			if (err) {
				console.log('ERROR! No clue how this failed but good job!');
			}
			console.log('Your note: ' + result.note);
			fs.appendFile('~/notes', result.note + '\n');
		});
	}
	if (result.firstChoice === '3' || result.firstChoice === 3) {
		fs.unlink('~/notes', err => {
			if (err) {
				console.log('You didn\'t actually have any notes');
			}
			if (!err) {
				console.log('Reset your notes.');
			}
		});
	}
});
