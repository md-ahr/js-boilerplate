#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    console.log("Downloading files...");
    execSync(`git clone ${git_repo} ${projectPath}`);

    process.chdir(projectPath);

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/md-ahr/next-gen-boilerplate ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!checkedOut) process.exit(-1);

console.log(
  `Congratulations! You are ready, Follow the following commands to start`
);
console.log(`cd ${repoName} && npm start`);
