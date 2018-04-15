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

// input: 0.005 2 -> '0.00'
//        0.005 3 -> '0.005'
function floorDecimalsStr(number, digit) {
    if(digit === 0) {
        return Math.floor(number).toString();
    }
    
    const str = number.toString();
    let result = '';
    let dotFound = false;
    let decimalsProcessed = 0;
    for(let i = 0; i < str.length && decimalsProcessed < digit; i++) {
        let nextChar = str[i];
        result += nextChar;
        if(dotFound) {
            decimalsProcessed++;
        } else if(nextChar === '.') {
            dotFound = true;
        }
    }
    
    return result;
}

module.exports.floorDecimalsStr = floorDecimalsStr;

function dayToSecond(day) {
    return day * 24 * 60 * 60;
}

module.exports.dayToSecond = dayToSecond;

function minuteToSecond(minute) {
    return minute * 60;
}

module.exports.minuteToSecond = minuteToSecond;
