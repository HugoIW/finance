class PasswordPatternUtils {
    constructor({ value }) {
        this.value = value;
    }

    oneLowerCaseLetter() {
        const pattern = /[a-z]{1,}/g;
        return pattern.test(this.value);
    }

    oneUpperCaseLetter() {
        const pattern = /[A-Z]{1,}/g;
        return pattern.test(this.value);
    }

    oneDigit() {
        const pattern = /[0-9]{1,}/g;
        return pattern.test(this.value);
    }

    oneSpecialCharacter() {
        const pattern = /[!*.~"'&%#@\$\}\{\]\[\?]{1,}/g;
        return pattern.test(this.value);
    }

    minCharacter() {
        return this.value.length > 7;
    }

    getPasswordPatternValid() {
        if (
            this.oneLowerCaseLetter(this.value) &&
            this.oneUpperCaseLetter(this.value) &&
            this.oneDigit(this.value) &&
            this.oneSpecialCharacter(this.value) &&
            this.minCharacter(this.value)
        ) {
            return true;
        }
        return false;
    }
}

module.exports = PasswordPatternUtils;