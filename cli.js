#!/usr/bin/env node

'use strict';

const fs = require('fs');

const os = require('os');

const path = require('path');

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
		throw err;
	}
	if (result.firstChoice === '1' || result.firstChoice === 1) {
		if (err) {
			throw err;
		}
		fs.readFile(path.join(os.homedir(), 'notes.txt'), 'utf8', (err, notes) => {
			if (err) {
				throw err;
			}
			console.log(notes);
		});
	}
	if (result.firstChoice === '2' || result.firstChoice === 2) {
		console.log('What is your note?');
		prompt.get(['note'], function (err, result) {
			if (err) {
				throw err;
			}
			console.log('Your note: ' + result.note);
			fs.appendFile(path.join(os.homedir(), 'notes.txt'), result.note + '\n');
		});
	}
	if (result.firstChoice === '3' || result.firstChoice === 3) {
		fs.unlink(path.join(os.homedir(), 'notes.txt'), err => {
			if (err) {
				throw err;
			}
			if (!err) {
				console.log('Reset your notes.');
			}
		});
	}
});
