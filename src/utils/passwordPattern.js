class PasswordPatternUtils {
    static oneLowerCaseLetter(value) {
        const pattern = /[a-z]{1,}/g;
        return pattern.test(value);
    }

    static oneUpperCaseLetter(value) {
        const pattern = /[A-Z]{1,}/g;
        return pattern.test(value);
    }

    static oneDigit(value) {
        const pattern = /[0-9]{1,}/g;
        return pattern.test(value);
    }

    static oneSpecialCharacter(value) {
        const pattern = /[!*.~"'&%#@\$\}\{\]\[\?]{1,}/g;
        return pattern.test(value);
    }

    static minCharacter(value) {
        return value.length > 7;
    }

    static getPasswordPatternValid(value) {
        if (
            this.oneLowerCaseLetter(value) &&
            this.oneUpperCaseLetter(value) &&
            this.oneDigit(value) &&
            this.oneSpecialCharacter(value) &&
            this.minCharacter(value)
        ) {
            return true;
        }
        return false;
    }
}

module.exports = PasswordPatternUtils;