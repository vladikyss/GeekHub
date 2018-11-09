function deleteInQuotes(str) {
    let quotes = ["'", '"', "`"];
    let resultString = '';
    let quote = null;
    for (let i = 0; i < str.length; i++) {
        let checkOneLetter = str[i];
        if (quote === null) {
            for (let j = 0; j < quotes.length; j++) {
                if (checkOneLetter === quotes[j]) {
                    quote = checkOneLetter;
                }
            }
        } else if (quote === checkOneLetter) {
            quote = null;
        } else {
            checkOneLetter = '';
        }
        resultString += checkOneLetter;
    }
    return resultString;
}

function checkBrackets(str) {
    let result;
    let el = [];
    for (let i = 0; i < str.length; i++) {


        if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
            el.push(str[i]);

        } else if (str[i] === ')' && el[el.length - 1] === "(") {
            el.pop();

        } else if (str[i] === ']' && el[el.length - 1] === "[") {
            el.pop();

        } else if (str[i] === '}' && el[el.length - 1] === "{") {
            el.pop();

        } else if (str[i] === "}" || str[i] === "]" || str[i] === ")") {
            el.push(str[i]);
        }

    }

    if (el == 0) {
        result = 'Good!';
    } else if (el !== 0) {
        for (let i = 0; i < el.length; i++) {
            if (el[i] === "{") {
                el[i] = "}";
            } else if (el[i] === "}") {
                el[i] = "{";
            } else if (el[i] === "[") {
                el[i] = "]";
            } else if (el[i] === "]") {
                el[i] = "[";
            } else if (el[i] === "(") {
                el[i] = ")";
            } else if (el[i] === ")") {
                el[i] = "(";
            }
        }
        result = 'Don`t have bracket : ' + el.join('');
    }
    return result;
}

let string = prompt('Enter your code:');
console.log('your string: ', string)
string = deleteInQuotes(string);
string = checkBrackets(string);
console.log(string);
