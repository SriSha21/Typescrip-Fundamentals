var numbers = [2, 3.4, 5, 1.11, 8]; //array declaration
var total = 0;
for (var i_1 = 0; i_1 < numbers.length; i_1++) {
    console.log(numbers[i_1]);
    total += numbers[i_1];
}
var average = total / numbers.length;
console.log(average);
//array of any type
var i = 0;
var checkArray = [2, 3.4, 5, 1.11, 8, "apple", true, 'orange']; //array declaration
for (i; i < checkArray.length; i++) {
    console.log(checkArray[i]);
}
//simplified for loop using of
var checkarray = ["apple", 'orange', 'kiwi', 'grapes'];
checkarray.push("Pineapple");
for (var _i = 0, checkarray_1 = checkarray; _i < checkarray_1.length; _i++) {
    var off = checkarray_1[_i];
    console.log(off);
    console.log(checkarray[1] + checkarray[2]);
    //conditional statement
    if (off == "Pineapple") {
        console.log("I ate Pineapple");
    }
    else {
        console.log("I Don't like Pineapple");
    }
}
