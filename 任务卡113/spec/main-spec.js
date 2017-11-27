const main = require('../main/main');

describe('taxi fee', function () {
    var kilometre = 13;
    var time = 13;
    it('出租车计价', function () {
        const taxi = main(kilometre,time);
        expect(taxi).toEqual(20);
    })
});
