// Write your cade below:
function main(ans,num) {
    var i = 0,
        j = 0;
    var count = 0,
        sum = 0;
    var end;
    for(i;i < ans.length;i++) {
        for(j;j < num.length;j++) {
            if(ans[i] === num[j] && i === j) {
                count += 1;
            }else if(ans[i] === num[j] && i !== j) {
                sum += 1;
            }
        }
    }
    end = count +'A'+ sum +'B';
    console.log(end);
    return end;
}

module.exports = {
    main
};