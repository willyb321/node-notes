#!/usr/bin/env node
'use strict';
const readline = require('readline');

const fs = require('fs');

const path = require('path');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.question('What do you want to do?\n1. Read notes.\n2. Make a new note.\n', choice => {
	if (choice === '1' || choice === 1) {
		fs.readFile(path.join(__dirname, 'notes.txt'), 'utf8', (doit, notedisplay) => {
			console.log('Notes: \n\n' + notedisplay);
			rl.close();
		});
	}
	if (choice === '2' || choice === 2) {
		rl.question('What do you want to note?\n', answer => {
			console.log('Noted. Your note is:\n ' + answer);
			fs.appendFile(path.join(__dirname, 'notes.txt'), '\n' + answer + '\n');
			rl.close();
		});
	}
});
