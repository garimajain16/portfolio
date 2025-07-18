#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Set environment variables
process.env.CI = 'false';
process.env.NODE_ENV = 'production';

// Path to react-scripts JS file
const reactScriptsPath = path.join(__dirname, 'node_modules', 'react-scripts', 'bin', 'react-scripts.js');

// Spawn the build process
const buildProcess = spawn('node', [reactScriptsPath, 'build'], {
  stdio: 'inherit',
  env: process.env
});

buildProcess.on('close', (code) => {
  process.exit(code);
});

buildProcess.on('error', (err) => {
  console.error('Build failed:', err);
  process.exit(1);
});