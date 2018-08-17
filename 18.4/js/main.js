/******************************************
 *  Author : Heshenghuan   
 *  Created On : Sat Aug 04 2018
 *  File : main.js
 *******************************************/

var app = new Vue({
    el: "#app",
    data: {
        text: '点我'
    },
    methods: {
        clicked: function () {
            console.log("Clicked.")
        },
        onEnter: function () {
            console.log("Mouse enter.")
        },
        onLeave: function () {
            console.log("Mouse leave.")
        },
        onSubmit: function() {
            console.log("Submited.")
        }
    }
});