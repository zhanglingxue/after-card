module.exports  = function practice() {
    let num;
    let res = "";
    for(num = 99;num > 2;num --) {
        res += num +" "+ "bottles of beer on the wall,"+" "+ num +" "+"bottles of beer.\n"+
            "Take one down and pass it around,"+ " "+ (num - 1) +" "+"bottles of beer on the wall.\n";
        if(num - 1 === 2) {
            res += 2 +" "+ "bottles of beer on the wall,"+" "+ 2 +" "+"bottles of beer.\n"+
            "Take one down and pass it around,"+" "+ 1 +" "+"bottle of beer on the wall.\n"+
            1 +" "+ "bottle of beer on the wall,"+" "+ 1 +" "+"bottle of beer.\n"+
            "Take one down and pass it around,"+" "+"no more bottles of beer on the wall.\n"+
            "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
        }
    }
    return res;
};

