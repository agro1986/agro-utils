const Type = {
    undefined: 'undefined',
    string: 'string'
};

module.exports.Type = Type;

function isValidOption(enumeration, option) {
    for (const property in enumeration) {
        if (enumeration.hasOwnProperty(property) && enumeration[property] === option) {
            return true;
        }
    }

    return false;
}

module.exports.isValidOption = isValidOption;

function isDefined(v) {
    return typeof(v) !== Type.undefined;
}

module.exports.isDefined = isDefined;

function randomInt(maxExclusive) {
    return Math.floor(Math.random() * Math.floor(maxExclusive));
}

module.exports.randomInt = randomInt;

function randomIntStr(digit) {
    if(!isDefined(digit)) {
        digit = 1;
    }

    let result = '';
    for(let i = 0; i < digit; i++) {
        result += randomInt(10).toString();
    }

    return result;
}

module.exports.randomIntStr = randomIntStr;

