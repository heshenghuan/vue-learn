/******************************************
 *  Author : Heshenghuan   
 *  Created On : Sun Jul 22 2018
 *  File : main.js
 *******************************************/

var app = new Vue({
    el: "#app",
    data: {
        url: 'http://www.taobao.com',
        isActive: true,
        img: "src/e075e0&text=Click+me.png",
        showImg: true,
        text: '显示文本'
    },
    methods: {
        change: function (event) {
            this.showImg = !this.showImg
            this.text = this.showImg ? '显示文本' : '显示图片'
        }
    }
});