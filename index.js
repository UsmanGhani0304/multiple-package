#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');
const apiCode = require('./crud-operations');
const simpleCode = require('./Sample-code');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome to the Multi-Package CLI!\n");
console.log("Choose an option:");
console.log("1) Crud-Operations");
console.log("2) Sample-Code");

rl.question("Enter your choice (1 or 2): ", (choice) => {
    let filename = '';

    if (choice === "1") {
        filename = "Crud-Operations.js";
        fs.writeFileSync(filename, apiCode);
        console.log(`API code has been written to ${filename}`);
    } else if (choice === "2") {
        filename = "Sample-Code.js";
        fs.writeFileSync(filename, simpleCode);
        console.log(`Simple Express code has been written to ${filename}`);
    } else {
        console.log("\nInvalid choice. Exiting...");
    }

    rl.close();
});
