/******************************************
 *  Author : Heshenghuan   
 *  Created On : Sun Jul 22 2018
 *  File : main.js
 *******************************************/
var app = new Vue({
    el: '#app',
    data: {
        foodList: [
            {
                name: '葱',
                price: 0.5,
                discount: 0.8
            },
            {
                name: '姜',
                price: 1.0,
                discount: 0.75
            },
            {
                name: '蒜',
                price: 0.8,
                discount: 0.5
            },
        ]
    }
});