/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) return false;
    let map = [];
    let map2 = [];
    let index = 0;
    let newString = "";
    while (index < s.length){
        if(map.hasOwnProperty(s[index])){
            newString += map[s[index]]
            index ++
        }
        else if (map2.hasOwnProperty(t[index])){
            return false;
        }
        else {
            map[s[index]] = t[index]
            map2[t[index]] = s[index]
            newString += t[index]
            index++
        }
    }
    return newString == t;
};


let string1 = "egg"
let string2 = "add"
let string3 = "foo"
let string4 = "bar"
let string5 = "testing"
let string6 = "marking"
let string7 = "totally"
let string8 = "wrong"

console.log(isIsomorphic(string1, string2));
console.log(isIsomorphic(string3, string4));
console.log(isIsomorphic(string5, string6));
console.log(isIsomorphic(string7, string8));



// let teststring = ""
// teststring += "a"
// teststring += "r"
// teststring += "t"

// console.log(teststring)
// console.log(string1[0])

let strt = "baba"
let str = "badc"

console.log(isIsomorphic(str, strt));