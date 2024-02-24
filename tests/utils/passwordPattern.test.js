const test = require('node:test');
const assert = require('node:assert');
const { faker } = require('@faker-js/faker');
const PasswordPatternUtils = require('../../src/utils/passwordPattern');

test('It must return false when a lowercase value is not passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[A-Z]/ });
    const service = new PasswordPatternUtils({ value });
    const result = service.oneLowerCaseLetter();

    assert.deepStrictEqual(result, false);
})

test('It must return true when a value with a lowercase letter is passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-z]/ });
    const service = new PasswordPatternUtils({ value });
    const result = service.oneLowerCaseLetter();

    assert.deepStrictEqual(result, true);
})

test('It must return false when a uppercase value is not passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-z]/ });
    const service = new PasswordPatternUtils({ value });
    const result = service.oneUpperCaseLetter();

    assert.deepStrictEqual(result, false);
})

test('It must return true when a value with a uppercase letter is passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[A-Z]/ });
    const service = new PasswordPatternUtils({ value });
    const result = service.oneUpperCaseLetter();

    assert.deepStrictEqual(result, true);
})

test('must return false when a number is not passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[A-Z]/ });
    const service = new PasswordPatternUtils({ value });
    const result = service.oneDigit();

    assert.deepStrictEqual(result, false);
})

test('must return true when a number is passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[A-Z0-9]/ });
    const service = new PasswordPatternUtils({ value });
    const result = service.oneDigit();

    assert.deepStrictEqual(result, true);
})

test('must return false when a special character is not passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-zA-Z0-9]/ });
    const service = new PasswordPatternUtils({ value });
    const result = service.oneSpecialCharacter();

    assert.deepStrictEqual(result, false);
})

test('must return true when a special character is passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-zA-Z0-9]/, prefix: '@' });
    const service = new PasswordPatternUtils({ value });
    const result = service.oneSpecialCharacter();

    assert.deepStrictEqual(result, true);
})

test('must return false when the total character is less than 8', () => {
    const value = faker.internet.password({ length: 7, pattern: /[a-zA-Z0-9]/, prefix: '@' });
    const service = new PasswordPatternUtils({ value });
    const result = service.minCharacter();

    assert.deepStrictEqual(result, false);
})

test('must return true when the total character is greater than 8', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-zA-Z0-9]/, prefix: '@' });
    const service = new PasswordPatternUtils({ value });
    const result = service.minCharacter();

    assert.deepStrictEqual(result, true);
})

test('must return false when a value with all mandatory items for password registration is not passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-zA-Z0-9]/ });
    const service = new PasswordPatternUtils({ value });
    const result = service.getPasswordPatternValid();

    assert.deepStrictEqual(result, false);
})

test('must return true when a value with all mandatory items for password registration is passed', () => {
    const value = faker.internet.password({ length: 8, pattern: /[a-zA-Z0-9]/, prefix: '@' });
    const service = new PasswordPatternUtils({ value });
    const result = service.getPasswordPatternValid();

    assert.deepStrictEqual(result, true);
})