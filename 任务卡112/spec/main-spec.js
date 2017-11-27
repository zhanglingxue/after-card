'use strict';
var main = require('../main/main');

describe('pos', function () {
    var inputs = [
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000003-2',
        'ITEM000005',
        'ITEM000005',
        'ITEM000005'
    ];
    var res = [
        {
            barcode:'ITEM000001',
            num:5
        },
        {
            barcode:'ITEM000003',
            num:2
        },
        {
            barcode:'ITEM000005',
            num:3
        }
    ];
    var buy_after = [
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            num: 5,
            unit: '瓶',
            price: 3,
            moneys: 12
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            num: 2,
            unit: '斤',
            price: 15,
            moneys: 30
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            num: 3,
            unit: '袋',
            price: 4.5,
            moneys: 9
        }
    ];
    it('商品录入', function () {
        var result = main.summary(inputs);
        expect(result).toEqual(res);
    });
    it('统计输入商品最终信息', function () {
        var arr = main.summary(inputs);
        var result = main.free(arr);
        expect(result).toEqual(buy_after);
    });
});
