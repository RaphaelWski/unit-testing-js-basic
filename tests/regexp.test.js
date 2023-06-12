const { isAlphanumeric, validateEmail, extractURLs } = require('../src/regexp');

/**
 * isAlphanumeric
 */
test('[VALID] Abracadabr4 is Alphanumeric', () => {
    const input = 'Abracadabr4';
    const result = isAlphanumeric(input);
    expect(result).toBeTruthy();
});

test('[INVALID] Àbr@cadabra is not Alphanumeric', () => {
    const input = 'Àbr@cadabra';
    const result = isAlphanumeric(input);
    expect(result).toBeFalsy();
});

/**
 * validateEmail
 */
test('[VALID] coucou@gmail.com is a valid email', () => {
    const input = 'coucou@gmail.com';
    const result = validateEmail(input);
    expect(result).toBeTruthy();
});

test('[INVALID] coucougmailcom is not a valid email', () => {
    const input = 'coucougmailcom';
    const result = validateEmail(input);
    expect(result).toBeFalsy();
});

test('[INVALID] `empty string` is not a valid email', () => {
    const input = '';
    const result = validateEmail(input);
    expect(result).toBeFalsy();
});

/**
 * extractURLs
 */
test('[VALID] URL extracted', () => {
    const input = 'je recherche la syntaxe des comparateurs sur https://jestjs.io/fr/docs/using-matchers';
    const result = extractURLs(input);
    expect(result).toBeTruthy();
});

test('[INVALID] URL not found', () => {
    const input = 'je recherche la syntaxe des comparateurs';
    const result = extractURLs(input);
    expect(result).toEqual([]);
});