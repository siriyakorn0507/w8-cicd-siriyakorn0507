const test = require('node:test');
const assert = require('node:assert/strict');
const { createMessage } = require('./index');

test('returns a greeting for the supplied name', () => {
  assert.equal(
    createMessage('Nina'),
    'Hello, Nina! CI/CD pipeline updated.'
  );
});

test('uses a default name when no name is supplied', () => {
  assert.equal(
    createMessage(),
    'Hello, Cloud Student! CI/CD pipeline updated.'
  );
});

test('supports Thai names', () => {
  assert.equal(
    createMessage('สมชาย'),
    'Hello, สมชาย! CI/CD pipeline updated.'
  );
});

test('handles an empty string', () => {
  assert.equal(
    createMessage(''),
    'Hello, ! CI/CD pipeline updated.'
  );
});