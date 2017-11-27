function Time(time,s) {
    if(time > 0) {
        s += time * 0.25;
        return s;
    }
}
module.exports = function taxi(kilometre,time) {
    var kilo = Math.ceil(kilometre),
        t = Math.ceil(time);  //向上取整
    var sum = 6;
    if(kilo <= 2) {//小于等于2公里（等待时间不计费）
        return sum;
    }else if(kilo <= 8) {//不超过8公里
        kilo -= 2;
        sum += (kilo * 0.8);
        sum = Time(t,sum);
        return parseInt(sum);
    }else {//超过8公里
        kilo -= 8;
        sum += (6 * 0.8)+(kilo * 1.2);
        sum = Time(t,sum);
        return parseInt(sum);
    }
};