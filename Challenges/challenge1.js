// var arr_str = [
//     ["Vienna"], 
//     [" ", "is"], 
//     [" ", " ", "a"], 
//     [" ", " ", " ", "nice"], 
//     [" ", " ", " ", " ", "city"]
// ];

// document.write(arr_str[0][0] + arr_str[1][0] + arr_str[1][1] + arr_str[2][0]  + arr_str[2][2] + arr_str[3][0] + arr_str[3][3] + arr_str[4][0] + arr_str[4][4]);


var arr_str = [
    ["Vienna"], 
    [" ", "is"], 
    [" ", " ", "a"], 
    [" ", " ", " ", "nice"], 
    [" ", " ", " ", " ", "city"]
];


//var first = true;
var sentence = ""
for (let i = 0; i < arr_str.length; i++) {
    let word_id = arr_str[i].length - 1; // get id of the word
    let word_space = (i == 0) ? "" : " "; // check if we are on the first word and don't do a space then!
    let word_str = arr_str[i][word_id];
    sentence += word_str + word_space;
}
document.write(sentence);