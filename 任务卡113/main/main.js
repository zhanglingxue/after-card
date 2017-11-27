module.exports = function taxi(kilometre,time) {
    var kilo = Math.ceil(kilometre),
        t = Math.ceil(time);  //向上取整
    var sum = 6;
    if(kilo <= 2) {
        return sum;
    }else if(kilo <= 8) {
        kilo -= 2;
        sum += (kilo * 0.8);
        if(time > 0) {
            sum += t * 0.25;
        }
        return parseInt(sum);
    }else {
        kilo -= 8;
        sum += (6 * 0.8)+(kilo * 1.2);
        if(time > 0) {
            sum += t * 0.25;
        }
        return parseInt(sum);
    }
};