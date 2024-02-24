const test = require('node:test');
const assert = require('node:assert');
const { faker } = require('@faker-js/faker');
const PasswordPatternUtils = require('../../src/utils/passwordPattern');

const service = PasswordPatternUtils;

test('It must return false when a lowercase value is not passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[A-Z]/ });
    const result = service.oneLowerCaseLetter(value);

    assert.deepStrictEqual(result, false);
})

test('It must return true when a value with a lowercase letter is passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-z]/ });
    const result = service.oneLowerCaseLetter(value);

    assert.deepStrictEqual(result, true);
})

test('It must return false when a uppercase value is not passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-z]/ });
    const result = service.oneUpperCaseLetter(value);

    assert.deepStrictEqual(result, false);
})

test('It must return true when a value with a uppercase letter is passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[A-Z]/ });
    const result = service.oneUpperCaseLetter(value);

    assert.deepStrictEqual(result, true);
})

test('must return false when a number is not passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[A-Z]/ });
    const result = service.oneDigit(value);

    assert.deepStrictEqual(result, false);
})

test('must return true when a number is passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[A-Z0-9]/ });
    const result = service.oneDigit(value);

    assert.deepStrictEqual(result, true);
})

test('must return false when a special character is not passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-zA-Z0-9]/ });
    const result = service.oneSpecialCharacter(value);

    assert.deepStrictEqual(result, false);
})

test('must return true when a special character is passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-zA-Z0-9]/, prefix: '@' });
    const result = service.oneSpecialCharacter(value);

    assert.deepStrictEqual(result, true);
})

test('must return false when the total character is less than 8', () => {
    const value = faker.internet.password({ length: 7, pattern: /[a-zA-Z0-9]/, prefix: '@' });
    const result = service.minCharacter(value);

    assert.deepStrictEqual(result, false);
})

test('must return true when the total character is greater than 8', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-zA-Z0-9]/, prefix: '@' });
    const result = service.minCharacter(value);

    assert.deepStrictEqual(result, true);
})

test('must return false when a value with all mandatory items for password registration is not passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-zA-Z0-9]/ });
    const result = service.getPasswordPatternValid(value);

    assert.deepStrictEqual(result, false);
})

test('must return true when a value with all mandatory items for password registration is passed', () => {
    const value = faker.internet.password({ length: 15, pattern: /[a-zA-Z0-9]/, prefix: 'Test123@' });
    const result = service.getPasswordPatternValid(value);

    assert.deepStrictEqual(result, true);
})