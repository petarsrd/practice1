// Napraviti funkciju koja nalazi prvi karakter u stringu koji se ne ponavlja



function firstNoRepeat(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (i === j) {
                continue;
            }
            if (str[j] === str[i]) {
                break;
            }
            if ((j === str.length - 1) && (str[j] !== str[i])) {
                return str[i];
            }
        }
    }
}

console.log(firstNoRepeat("the quick brown fox jumps then quickly blow air"));

// Napraviti funkciju koja spaja dva sotritana niza

function mergeSortedArray(firstArr, secondArr) {
    var mergedArr = [];
    var j = 0;
    for (var i = 0; i < firstArr.length; i++) {
        if (firstArr[i] <= secondArr[j]) {
            mergedArr[mergedArr.length] = firstArr[i];
        } else {
            if (j === secondArr.length) {
                break;
            }
            mergedArr[mergedArr.length] = secondArr[j];
            j++;
            i -= 1;
        }
    }
    while (i < firstArr.length) {
        mergedArr[mergedArr.length] = firstArr[i];
        i++;
    }

    while (j < secondArr.length) {
        mergedArr[mergedArr.length] = secondArr[j];
        j++;
    }
    return mergedArr;
}

console.log(mergeSortedArray([2, 3, 5, 9], [1, 2, 3, 29]));

// Napraviti funkciju koja izvrce reci u recenici

function reverseWords(sentence) {
    var word = "";
    var wordRev = "";
    var newSentence = "";
    var firstLetter = true;
    for (var i = 0; i < sentence.length; i++) {
        if ((sentence[i] !== " ") && (sentence[i] !== ".")) {
            word += sentence[i].toLowerCase();
            continue;
        } else if (sentence[i] === ".") {
            for (var j = word.length - 1; j >= 0; j--) {
                wordRev += word[j];
            }
            newSentence += wordRev + ".";
            word = "";
            wordRev = "";
        } else if (sentence[i] === " ") {
            for (var j = word.length - 1; j >= 0; j--) {
                if (firstLetter === true) {
                    wordRev += word[j].toUpperCase();
                } else {
                    wordRev += word[j];
                }
                firstLetter = false;
            }
            newSentence += wordRev + " ";
            word = "";
            wordRev = "";
        } 
    }
    return newSentence;
}

console.log(reverseWords("It's raining outside."));

// Napraviti funkciju koja izbacuje duplikate iz niza brojeva

function removeDuplicate(niz) {
    for (var i = 0; i < niz.length; i++) {
        for(var j = i + 1; j < niz.length; j++) {
            if (niz[i] === niz[j]) {
                for (var k = j; k < niz.length - 1; k++) {
                    niz[k] = niz[k + 1];
                }
                niz.length--;
                j--;
            }
        }
    
}
return niz;
}

console.log(removeDuplicate([1, 3, 3, 3, 1, 1, 5, 5, 5, 5, 6, 7, 8, 5, 6, 1]));
