var oBanner = document.getElementById("banner");
var oImg = oBanner.getElementsByTagName("img");
var oList = document.getElementById("list");
var oLi = oList.getElementsByTagName("li");
var oNext = document.getElementById("next");
var timer = null;
var num = 0;

function fn() {
	for (var i = 0; i < oImg.length; i++) {
		oImg[i].className = "naw";
		oLi[i].className = "";
	}
	oImg[num].className = "now naw";
	oLi[num].className = "active";
}

for (var i = 0; i < oLi.length; i++) {
	oLi[i].index = i;
	num++;
	oLi[i].onclick = function () {
		for (var j = 0; j < oLi.length; j++) {
			oImg[j].className = "naw";
			oLi[j].className = "";
		}

		this.className = "active";
		oImg[this.index].className = "now naw";
		num = this.index;
	}
}
timer = setInterval(function () {
	num++;
	if (num > oImg.length - 1) {
		num = 0;
	}
	fn()
}, 2000);
oBanner.onmouseover = function () {
	clearInterval(timer)
}
oBanner.onmouseout = function () {
	timer = setInterval(function () {
		num++;
		if (num > oImg.length - 1) {
			num = 0;
		}
		fn()
	}, 2000);
}

var oLi1 = document.getElementById("list1");
var oRbox = document.getElementById("rightbox");
oLi1.onmouseover = function () {
	oRbox.style.display = "block";
}
oLi1.onmouseout = function () {
	oRbox.style.display = "none";
}
oRbox.onmouseover = function () {
	oRbox.style.display = "block";
	oLi1.style.border = "1px solid #ccc";
	oLi1.style.borderBottom = "";
	oLi1.style.background = "#fff";
	oLi1.style.color = "#FF0000"
}
oRbox.onmouseout = function () {
	oRbox.style.display = "none";
	oLi1.style.border = "";
	oLi1.style.background = "";
	oLi1.style.color = ""
}

var oSubmenu1 = document.getElementById("submenu1");
var oSubmenu2 = document.getElementById("submenu2");
var oSubmenu3 = document.getElementById("submenu3");
var oSubmenu4 = document.getElementById("submenu4");
var oSubmenu5 = document.getElementById("submenu5");
var oA1 = document.getElementById("a1");
var oA2 = document.getElementById("a2");
var oA3 = document.getElementById("a3");
var oA4 = document.getElementById("a4");
var oA5 = document.getElementById("a5");
//第一个
oA1.onmouseover = function () {
	oSubmenu1.style.display = "block";
}
oA1.onmouseout = function () {
	oSubmenu1.style.display = "none";
}
oSubmenu1.onmouseover = function () {
	oSubmenu1.style.display = "block";
}
oSubmenu1.onmouseout = function () {
	oSubmenu1.style.display = "none";
}
//第二个
oA2.onmouseover = function () {
	oSubmenu2.style.display = "block";
}
oA2.onmouseout = function () {
	oSubmenu2.style.display = "none";
}
oSubmenu2.onmouseover = function () {
	oSubmenu2.style.display = "block";
}
oSubmenu2.onmouseout = function () {
	oSubmenu2.style.display = "none";
}
//第三个
oA3.onmouseover = function () {
	oSubmenu3.style.display = "block";
}
oA3.onmouseout = function () {
	oSubmenu3.style.display = "none";
}
oSubmenu3.onmouseover = function () {
	oSubmenu3.style.display = "block";
}
oSubmenu3.onmouseout = function () {
	oSubmenu3.style.display = "none";
}
//第四个
oA4.onmouseover = function () {
	oSubmenu4.style.display = "block";
}
oA4.onmouseout = function () {
	oSubmenu4.style.display = "none";
}
oSubmenu4.onmouseover = function () {
	oSubmenu4.style.display = "block";
}
oSubmenu4.onmouseout = function () {
	oSubmenu4.style.display = "none";
}
//第五个
oA5.onmouseover = function () {
	oSubmenu5.style.display = "block";
}
oA5.onmouseout = function () {
	oSubmenu5.style.display = "none";
}
oSubmenu5.onmouseover = function () {
	oSubmenu5.style.display = "block";
}
oSubmenu5.onmouseout = function () {
	oSubmenu5.style.display = "none";
}

//女装1F
var oList1 = document.getElementById("list4");
var oLi2 = oList1.getElementsByTagName("li");
var oActive = document.getElementById("active");
var oUl1 = oActive.getElementsByTagName("ul");
for (var i = 0; i < oLi2.length; i++) {
	oLi2[i].index = i; //自定义索引
	oLi2[i].onmouseover = function () {
		for (var j = 0; j < oLi2.length; j++) {
			oLi2[j].className = "";
			oUl1[j].className = "";
		}
		this.className = "now";
		oUl1[this.index].className = "active";
	}
}
//男装2F
var oList5 = document.getElementById("list5");
var oLi5 = oList5.getElementsByTagName("li");
var oActive2 = document.getElementById("active2");
var oUl2 = oActive2.getElementsByTagName("ul");
for (var i = 0; i < oLi5.length; i++) {
	oLi5[i].index = i; //自定义索引
	oLi5[i].onmouseover = function () {
		for (var j = 0; j < oLi5.length; j++) {
			oLi5[j].className = "";
			oUl2[j].className = "";
		}
		this.className = "now";
		oUl2[this.index].className = "active";
	}
}
//服饰配件3F
var oList6 = document.getElementById("list6");
var oLi6 = oList6.getElementsByTagName("li");
var oActive3 = document.getElementById("active3");
var oUl3 = oActive3.getElementsByTagName("ul");
for (var i = 0; i < oLi6.length; i++) {
	oLi6[i].index = i; //自定义索引
	oLi6[i].onmouseover = function () {
		for (var j = 0; j < oLi6.length; j++) {
			oLi6[j].className = "";
			oUl3[j].className = "";
		}
		this.className = "now";
		oUl3[this.index].className = "active";
	}
}
//内衣4F
var oList7 = document.getElementById("list7");
var oLi7 = oList7.getElementsByTagName("li");
var oActive4 = document.getElementById("active4");
var oUl4 = oActive4.getElementsByTagName("ul");
for (var i = 0; i < oLi7.length; i++) {
	oLi7[i].index = i; //自定义索引
	oLi7[i].onmouseover = function () {
		for (var j = 0; j < oLi7.length; j++) {
			oLi7[j].className = "";
			oUl4[j].className = "";
		}
		this.className = "now";
		oUl4[this.index].className = "active";
	}
}
// 运动户外5F
var oList8 = document.getElementById("list8");
var oLi8 = oList8.getElementsByTagName("li");
var oActive4 = document.getElementById("active5");
var oUl5 = oActive4.getElementsByTagName("ul");
for (var i = 0; i < oLi8.length; i++) {
	oLi8[i].index = i; //自定义索引
	oLi8[i].onmouseover = function () {
		for (var j = 0; j < oLi8.length; j++) {
			oLi8[j].className = "";
			oUl5[j].className = "";
		}
		this.className = "now";
		oUl5[this.index].className = "active";
	}
}

// 随手购
var oSui = document.getElementById("sui");
var oSuiLi = oSui.getElementsByTagName("li");
var oSummaryb = document.getElementById("summary-bottom");

for (var i = 0; i < oSuiLi.length; i++) {
	oSuiLi[i].index = i;
	oSuiLi[i].onmouseover = function () {
		oPrev.style.display = "block";
		oNext1.style.display = "block";
		for (var i = 0; i < oSuiLi.length; i++) {
			oSuiLi[i].className = "";
		}
		this.className = "on";
		num1 = this.index;
		oMove.style.left = -num1 * 1200 + "px";
	}
	oSuiLi[i].onmouseout = function () {
		oPrev.style.display = "none";
		oNext1.style.display = "none";
	}
}
oSummaryb.onmouseover = function () {
	oPrev.style.display = "block";
	oNext1.style.display = "block";
}
oSummaryb.onmouseout = function () {
	oPrev.style.display = "none";
	oNext1.style.display = "none";
}


//获取li的宽度
var oMove = document.getElementById("move");
var oPrev = document.getElementById("prev");
var oNext1 = document.getElementById("next1");
var num1 = 0;

//点击右边按钮
oNext1.onclick = function () {
	if (num1 == 0) {
		oSuiLi[num1].className = "";
		num1++
		oMove.style.left = -num1 * 1200 + "px";
		oSuiLi[num1].className = "on";
	} else if (num1 == 1) {
		oSuiLi[num1].className = "";
		num1++
		oMove.style.left = -num1 * 1200 + "px";
		oSuiLi[num1].className = "on";
	}
}
//点击左边按钮
oPrev.onclick = function () {
	if (num1 == 2) {
		oSuiLi[num1].className = "";
		num1--
		oMove.style.left = -num1 * 1200 + "px";
		oSuiLi[num1].className = "on";
	} else if (num1 == 1) {
		oSuiLi[num1].className = "";
		num1--
		oMove.style.left = 0 + "px";
		oSuiLi[num1].className = "on";
	}
}