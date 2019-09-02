//广告点击隐藏
$(".hide-img>p").click(function() {
	$(".hide-img").css({
		"display": "none"
	})
})

//头部内容左边导航
var datas = [{
		"id": "now",
		"h3": "家庭电器",
		"span": "大家电",
		"p": "生活电器",
	},
	{
		"id": "2",
		"h3": "手机 数码 通信",
		"span": "设备",
		"p": "数码配件",
	},
	{
		"id": "3",
		"h3": "电脑 办公",
		"span": "大家电",
		"p": "生活电器",
	},
	{
		"id": "4",
		"h3": "家居 家具",
		"span": "大家电",
		"p": "电器",
	},
	{
		"id": "5",
		"h3": "男装",
		"span": "大家电",
		"p": "生活电器",
	},
	{
		"id": "6",
		"h3": "箱包",
		"span": "大家电",
		"p": "生活电器",
	},
	{
		"id": "7",
		"h3": "个人装扮",
		"span": "大家电",
		"p": "生活电器",
	}
]
var oNav = document.getElementById("nav");
for(var i = 0; i < datas.length; i++) {
	var oLis = document.createElement("li")
	oLis.setAttribute("class", "" + datas[i].id)
	oNav.append(oLis)
	var oH3 = document.createElement("h3")
	var oSpan = document.createElement("span")
	var oP = document.createElement("p")
	oLis.appendChild(oH3)
	oLis.appendChild(oSpan)
	oLis.appendChild(oP)
	oH3.innerHTML = datas[i].h3
	oSpan.innerHTML = datas[i].span
	oP.innerHTML = datas[i].p
}

// 经过显示头部左边导航内容
var oCencent = document.getElementById("cencent");
var olimin = oNav.getElementsByTagName("li")
var str0 = ""
var str1 = ""
var str2 = ""
var str3 = ""
var str4 = ""
var str5 = ""
var str6 = ""
var arr = []
str0 = "<div>" + "</div>"

arr.push(str0, str1, str2, str3, str4, str5, str6)
for(var a = 0; a < olimin.length; a++) {
	oCencent.innerHTML += "<ul style='display:none'>" + arr[a] + "</ul>"
}
var ouls = oCencent.getElementsByTagName("ul")
for(var a = 0; a < olimin.length; a++) {
	olimin[a].index = a
	olimin[a].onmouseover = function() {
		for(var i = 0; i < olimin.length; i++) {
			ouls[i].style.display = "none"
			for(var c = 0; c < olimin.length; c++) {
				olimin[i].style.background = "#333"
			}
			this.style.background = "#242424"
		}
		oCencent.style.width = 911 + 'px'
		ouls[this.index].style.display = "flex"

	}
	olimin[a].onmouseout = function() {
		oCencent.style.width = 0 + 'px'
		ouls[this.index].style.display = "none"
	}
}
for(var i = 0; i < ouls.length; i++) {
	ouls[i].onmouseover = function() {
		oCencent.style.width = 911 + 'px'
	}
	ouls[i].onmouseout = function() {
		oCencent.style.width = 0 + 'px'

	}
}
oCencent.onmouseover = function() {
	oCencent.style.width = 911 + 'px'

}
oCencent.onmouseout = function() {
	oCencent.style.width = 0 + 'px'
}

//头部内容右边上部网站导航点击
var oList = document.getElementById("list")
var oLit = oList.getElementsByTagName("li")[0];
var oNavmin = document.getElementById("navmin");
oLit.onmouseover = function() {
	oNavmin.style.height = 100 + "px"
	oLit.style.background = "#FFFFFF"
}
oLit.onmouseout = function() {
	oNavmin.style.height = 0 + "px"
	oLit.style.background = "#EEEEEE"
}
oNavmin.onmouseover = function() {
	oNavmin.style.height = 100 + "px"
}
oNavmin.onmouseout = function() {
	oNavmin.style.height = 0 + "px"
}

//标题
var oTitle = document.getElementById("title")
var oTitleul = document.createElement("ul")
oTitle.appendChild(oTitleul)
var oTitlearr = ["首页", "服装城", "食品特产", "奢侈品", "鞋靴箱包", "品牌专区", "聚划算", "店铺街", "积分商城", "预售"]
var oTitlarr = ["index.html", "http://192.168.1.134/dsc/", "3", "http://192.168.1.139/dsc/", "5", "http://192.168.1.135/dsc", "7", "http://192.168.1.137/dsc/", "9", "10"] //地址
for(var i = 0; i < oTitlearr.length; i++) {
	var oTitleli = document.createElement("li")
	var oTitlea = document.createElement("a")
	oTitleul.appendChild(oTitleli)
	oTitlea.setAttribute("href", oTitlarr[i])
	oTitleli.appendChild(oTitlea)
	oTitlea.innerHTML = oTitlearr[i]

}

//tab切换图片
var oMaximg = document.getElementById("maximg");
var oMinimg = oMaximg.getElementsByTagName("img")
var oMaximgul = document.getElementById("maximgul")
var oMaximgli = oMaximgul.getElementsByTagName("li")
var oPrev = document.getElementById("maximgperv");
var oNext = document.getElementById("maximgnext");
var num = 0

function fn() {
	for(var i = 0; i < oMaximgli.length; i++) {
		oMinimg[i].className = "";
		oMaximgli[i].className = "";
	}
	oMinimg[num].className = "show";
	oMaximgli[num].className = "active";
}
//点击右边按钮
oNext.onclick = function() {
	num++;
	if(num > oMaximgli.length - 1) {
		num = 0;
	}
	fn()
}
//点击左边按钮
oPrev.onclick = function() {
	num--;
	if(num < 0) {
		num = oMaximgli.length - 1;
	}
	fn()
}
for(var i = 0; i < oMaximgli.length; i++) {
	oMaximgli[i].index = i
	oMaximgli[i].onclick = function() {
		for(var j = 0; j < oMaximgli.length; j++) {
			oMinimg[j].className = ""
			oMaximgli[j].className = ""
		}
		this.className = "active"
		oMinimg[this.index].className = "show"
		num = this.index;
	}
}
timer = setInterval(function() {
	oNext.onclick()
}, 1000);

oMaximg.onmouseover = function() {
	clearInterval(timer)
}
oMaximg.onmouseout = function() {
	timer = setInterval(function() {
		oNext.onclick()
	}, 1000);
}

//个人中心tab切换
var oNowul = document.getElementById("lists");
var oNowli = oNowul.getElementsByClassName("li")
var oNowconcent = document.getElementById("nowconcent");
var oTabcshow = oNowconcent.getElementsByClassName("li")
//tabFn(oNowli.length, oNowli, oTabcshow, "lists", "tabshow")

//快捷入口
var oShortcut = document.getElementById("shortcut")
var oh4 = document.createElement("h4") //创建h4
oShortcut.appendChild(oh4)
oh4.innerHTML = "快捷入口"
var oUl = document.createElement("ul") //创建ul
oShortcut.appendChild(oUl)
var oLiarr = ["我的浏览", "我的收藏", "我的订单", "账号安全", "我的分享", "商家入驻"]

var oLiarr1 = []
for(var i = 0; i < 6; i++) {
	var oLi = document.createElement("li")
	oUl.appendChild(oLi)
	oLi.style.width = 68 + "px"
	oLi.style.height = 68 + "px"

}
//内容第一部分
var oOnedatas = ["../images/1515953434094179058.png", "../images/1515953435023649761.png", "../images/1515953435777799300.png", "../images/1515953435545165923.png", "../images/1515953435162544293.png"]
var oOnearr = [] //地址

var oOne = document.getElementById("one");
var oDivs = document.createElement("div");
oOne.appendChild(oDivs);
oDivs.style.width = 1200 + "px"
oDivs.style.height = 200 + "px"
for(var i = 0; i < oOnedatas.length; i++) {
	var oA = document.createElement("a");
	oA.setAttribute("herf", "")
	oDivs.appendChild(oA)
	for(var j = 0; j < 1; j++) {
		var oImg = document.createElement("img")
		oA.appendChild(oImg)
		oImg.src = oOnedatas[i]
	}
}
//图片滚动-年货秒杀
var oSrollsdatas = [{
		"title": "学院风格",
		"money": "￥144.00",
		"nomoney": "￥150.00",
		"imgSrc": "../images/0_thumb_G_1490174741051.jpg",
	},
	{
		"title": "社会风格",
		"money": "￥144.00",
		"nomoney": "￥150.00",
		"imgSrc": "../images/0_thumb_G_1490174925807.jpg",
	}, {
		"title": "绅士风格",
		"money": "￥144.00",
		"nomoney": "￥150.00",
		"imgSrc": "../images/0_thumb_G_1490174741051.jpg",
	}, {
		"title": "爵士风格",
		"money": "￥144.00",
		"nomoney": "￥150.00",
		"imgSrc": "../images/0_thumb_G_1489099437211.jpg",
	}, {
		"title": "暴徒风格",
		"money": "￥144.00",
		"nomoney": "￥150.00",
		"imgSrc": "../images/0_thumb_G_1489099544749.jpg",
	}, {
		"title": "什么风格",
		"money": "￥144.00",
		"nomoney": "￥150.00",
		"imgSrc": "../images/0_thumb_G_1489099773629.jpg",
	}, {
		"title": "去死风格",
		"money": "￥144.00",
		"nomoney": "￥150.00",
		"imgSrc": "../images/0_thumb_G_1489100550574.jpg",
	}, {
		"title": "想想风格",
		"money": "￥144.00",
		"nomoney": "￥150.00",
		"imgSrc": "../images/0_thumb_G_1489102299856.jpg",
	}, {
		"title": "没有风格",
		"money": "￥144.00",
		"nomoney": "￥150.00",
		"imgSrc": "../images/0_thumb_G_1489102753231.jpg",
	}, {
		"title": "周年风格",
		"money": "￥144.00",
		"nomoney": "￥150.00",
		"imgSrc": "../images/0_thumb_G_1489102950633.jpg",
	},
]
var oSrolls = document.getElementById("srolls");
var oSrolliul = document.createElement("ul");
oSrolls.appendChild(oSrolliul);
for(var i = 0; i < oSrollsdatas.length; i++) {
	var oSrolli = document.createElement("li");
	oSrolliul.appendChild(oSrolli);
	var oSrollimg = document.createElement("img");
	oSrollimg.style.width = 180 + "px"
	oSrollimg.style.height = 180 + "px"
	oSrolli.appendChild(oSrollimg);
	oSrollimg.src = oSrollsdatas[i].imgSrc
	var oSrolp = document.createElement("p");
	oSrolli.appendChild(oSrolp);
	oSrolp.innerHTML = oSrollsdatas[i].title
	var oSrolh3 = document.createElement("h3");
	oSrolli.appendChild(oSrolh3);
	oSrolh3.innerHTML = oSrollsdatas[i].money
	var oSrolh4 = document.createElement("h4");
	oSrolli.appendChild(oSrolh4);
	oSrolh4.innerHTML = oSrollsdatas[i].nomoney
}
$(function() {
	var num = 0
	var timer = null;
	$(".next").click(function() {
		$("#srolls>ul").animate({
			"left": "-290px"
		}, function() {
			$("#srolls>ul").find("li").eq(0).appendTo($("#srolls>ul"))
			$("#srolls>ul").css("left", 0)
		})
	})

	timer = setInterval(function() {
		$(".next").click()
	}, 1000)

	$("#srolls>ul").mouseenter(function() {
		clearInterval(timer)
	})
	$("#srolls>ul").mouseleave(function() {
		timer = setInterval(function() {
			$(".next").click()
		}, 1000)
	})
	$("#srolls>ul").mouseenter(function() {
		$(".next").css("display", "block")
		$(".prev").css("display", "block")
	})
	$("#srolls>ul").mouseleave(function() {
		$(".next").css("display", "none")
		$(".prev").css("display", "none")
	})
})

//主会场-低至一折
var onewsarr = ["../images/1515953452551121428.jpg", "../images/1515953452551121428.jpg", "../images/1515953452551121428.jpg", "../images/1515953452551121428.jpg", "../images/1515953452551121428.jpg", "../images/1515953452551121428.jpg", "../images/1515953452551121428.jpg", "../images/1515953452551121428.jpg", "../images/1515953452551121428.jpg", "../images/1515953452551121428.jpg"]
var onewsarr1 = []
var onews = document.getElementById("news")
var onewsdiv = document.createElement("div");
news.appendChild(onewsdiv);
onewsdiv.style.width = 956 + "px"
onewsdiv.style.height = 600 + "px"
for(var i = 0; i < onewsarr.length; i++) {
	var oA = document.createElement("a");
	oA.setAttribute("herf", onewsarr1[i])
	onewsdiv.appendChild(oA)
	for(var j = 0; j < 1; j++) {
		var oImg = document.createElement("img")
		oA.appendChild(oImg)
		oImg.src = onewsarr[i]
	}
}
//品牌专区
var oPrices = [{
		"title": "品牌收购",
		"english": "brt slae",
		"h5": "更多>",
		"imgSrc": "../images/1515953433212156689.jpg"
	},

	{
		"title": "品牌收购",
		"english": "brt slae",
		"h5": "更多>",
		"imgSrc": "../images/1515953434269088434.jpg"
	},
	{
		"title": "品牌收购",
		"english": "brt slae",
		"h5": "更多>",
		"imgSrc": "../images/1515953434500632403.jpg"
	}
]

var oPrice = document.getElementById("price");
for(var i = 0; i < oPrices.length; i++) {
	var oPricediv = document.createElement("div");
	oPrice.appendChild(oPricediv);
	var oPriceh3 = document.createElement("h3");
	oPricediv.appendChild(oPriceh3);
	var oPricespan = document.createElement("span");
	oPricediv.appendChild(oPricespan);
	var oPriceh5 = document.createElement("h5");
	oPricediv.appendChild(oPriceh5);
	var oPriceimg = document.createElement("img");
	oPricediv.appendChild(oPriceimg);
	oPriceh3.innerHTML = oPrices[i].title
	oPriceh5.innerHTML = oPrices[i].h5
	oPricespan.innerHTML = oPrices[i].english
	oPriceimg.src = oPrices[i].imgSrc
}
//nike
var oNikestr = ''
var oNikestr12 = ''
for(var i = 1; i < 31; i++) {
	var num = i
	oNikestr += "<li><img src='../images1/" + num + ".jpg'/></li>"
	oNikestr12 += "<li><img src='../images2/0" + num + ".jpg'/></li>"

}
var oNikeatvie = ["active", "oNikestr1", "oNikestr2"]
var oNike = document.getElementById("nike");
for(var i = 0; i < 3; i++) {
	var oNikeul = document.createElement("ul");
	oNike.appendChild(oNikeul)
	oNikeul.setAttribute("id", oNikeatvie[i])
	var oNikeuls = document.getElementById("active");
	var oNikestr1 = document.getElementById("oNikestr1");
	var oNikestr2 = document.getElementById("oNikestr2");
	for(var j = 0; j < 30; j++) {
		var oNikeli = document.createElement("li");
		oNikeul.appendChild(oNikeli)
		var oNikeimg = document.createElement("img");
		oNikeli.appendChild(oNikeimg)
		oNikeimg.src = oNikestr
		var oNikeh5 = document.createElement("h5");
		oNikeli.appendChild(oNikeh5)
		oNikeuls.innerHTML = oNikestr
	}

}

//发现好货
var oGuilddatas = [{
		"tilte": "360学车",
		"h3": "夜视",
		"title1": "想喝什么",
		"title2": "和你懂的",
		"imgSrc": "../images/QQ图片20190827135115.png",
		"imgSrc1": "../images/1516316460398068712.jpg"
	},
	{
		"tilte": "360学车",
		"h3": "夜视",
		"title1": "想喝什么",
		"title2": "和你懂的",
		"imgSrc": "../images/QQ图片20190827135115.png",
		"imgSrc1": "../images/1516316460669776873.jpg"
	},
	{
		"tilte": "360学车",
		"h3": "夜视",
		"title1": "想喝什么",
		"title2": "和你懂的",
		"imgSrc": "../images/QQ图片20190827135115.png",
		"imgSrc1": "../images/1516316460079621387.jpg"
	},
	{
		"tilte": "360学车",
		"h3": "夜视",
		"title1": "想喝什么",
		"title2": "和你懂的",
		"imgSrc": "../images/QQ图片20190827135115.png",
		"imgSrc1": "../images/1516316460669776873.jpg"
	},
	{
		"tilte": "360学车",
		"h3": "夜视",
		"imgSrc": "../images/QQ图片20190827135115.png",
		"imgSrc1": "../images/1516316460669776873.jpg"

	},
	{
		"tilte": "360学车",
		"h3": "夜视",
		"imgSrc": "../images/QQ图片20190827135115.png"
	}, {
		"tilte": "360学车",
		"h3": "夜视",
		"imgSrc": "../images/QQ图片20190827135115.png"
	}
]

//发现好货	

var oOne = document.getElementById("left_one"); //获取left
var oTwo = document.getElementById("right_two"); //获取right
var oOneul = document.createElement("ul");
oOne.appendChild(oOneul)
var oTwoul = document.createElement("ul");
oTwo.appendChild(oTwoul)
for(var i = 0; i < oGuilddatas.length; i++) { //oOneul。innerHTML
	var oOneli = document.createElement("li");
	oOneul.appendChild(oOneli)
	var oOneimg = document.createElement("img");
	oOneli.appendChild(oOneimg)
	var oOneh4 = document.createElement("h4");
	oOneli.appendChild(oOneh4)
	oOneh4.innerHTML = oGuilddatas[i].tilte
	var oOneh5 = document.createElement("h5");
	oOneli.appendChild(oOneh5)
	oOneh4.innerHTML = oGuilddatas[i].tilte
	oOneh5.innerHTML = oGuilddatas[i].h3
	oOneimg.src = oGuilddatas[i].imgSrc

}
var oTwoarr = [];
oTwoarr = oTwoarr.concat(oGuilddatas.splice(0, 4));
for(var i = 0; i < oTwoarr.length; i++) { //oTwoul。innerHTML
	var oTwoli = document.createElement("li");
	oTwoul.appendChild(oTwoli)
	var oTwoimg = document.createElement("img");
	var oTwoh4 = document.createElement("h4");
	var oTwoh3 = document.createElement("h3");
	oTwoli.appendChild(oTwoimg)
	oTwoimg.src = oTwoarr[i].imgSrc1
	oTwoli.appendChild(oTwoh4)
	oTwoli.appendChild(oTwoh3)
	oTwoh4.innerHTML = oTwoarr[i].title1
	oTwoh3.innerHTML = oTwoarr[i].title2

}
//商创特卖
var oSpecialdatas = [{
	"title0": "特卖",
	"title1": "更多特卖>",
	"title2": "新年愿望单",
	"title3": "满299减30",
	"imgSrc": "../images/1515953442628461969.jpg",
	"imgSrc1": "../images/1515953441311313969.jpg"
}, {
	"title0": "新品",
	"title1": "更多新品>",
	"title2": "新年愿望单",
	"title3": "满299减30",
	"imgSrc": "../images/1515953437520193959.jpg",
	"imgSrc1": "../images/1515953441311313969.jpg"
}, {
	"title0": "排行榜",
	"title1": "精品向目标>",
	"title2": "新年愿望单",
	"title3": "满299减30",
	"imgSrc": "../images/1515953437822309342.jpg",
	"imgSrc1": "../images/1515953441311313969.jpg"
}, {
	"title2": "新年愿望单",
	"title3": "满299减30",
	"imgSrc": "../images/1515953438203658169.jpg",
	"imgSrc1": "../images/1515953441311313969.jpg"
}, {
	"title2": "新年愿望单",
	"title3": "满299减30",
	"imgSrc": "../images/1515953441024053699.jpg",
	"imgSrc1": "../images/1515953441311313969.jpg"
}, {
	"title2": "新年愿望单",
	"title3": "满299减30",
	"imgSrc": "../images/1515953441024053699.jpg",
	"imgSrc1": "../images/1515953441311313969.jpg"
}, ]
var specialid = ["specialid_left", "specialid_center", "specialid_right"];
var specialidul = ["specialid_left_ul", "specialid_center_ul", "specialid_right_ul"];
var oSpecialdatasarr = []
oSpecialdatasarr = oSpecialdatasarr.concat(oSpecialdatas.slice(0, 3))
var oSpecialliarr = []
oSpecialliarr = oSpecialliarr.concat(oSpecialdatas.slice(0, 5))
var oSpecial = document.getElementById("special");

//创建三个div，设置id.在每个div中创建一个div,再在div中创建h3,h4,ul,在在在ul中创建li
for(var i = 0; i < specialid.length; i++) {
	var oSpecialdiv = document.createElement("div");
	oSpecial.appendChild(oSpecialdiv);
	oSpecialdiv.setAttribute("id", specialid[i]);
	var oSpecialh2 = document.createElement("h2");
	oSpecialdiv.appendChild(oSpecialh2);
	oSpecialh2.innerHTML = oSpecialdatasarr[i].title0;
	var oSpecialh4 = document.createElement("h4");
	oSpecialdiv.appendChild(oSpecialh4);
	oSpecialh4.innerHTML = oSpecialdatasarr[i].title1;
	var oSpecialul = document.createElement("ul");
	oSpecialdiv.appendChild(oSpecialul);
	oSpecialul.setAttribute("id", specialidul[i])

}
//在ul中创建li
var oLeftul = document.getElementById("specialid_left_ul")
for(var j = 0; j < oSpecialliarr.length; j++) {
	var oLeftli = document.createElement("li");
	var oLefth3 = document.createElement("h3");
	var oLefth5 = document.createElement("h5");
	var oLeftimg = document.createElement("img");
	oLeftul.appendChild(oLeftli)
	oLeftli.appendChild(oLefth3)
	oLeftli.appendChild(oLeftimg)
	oLeftli.appendChild(oLefth5)
	oLefth3.innerHTML = oSpecialliarr[j].title2
	oLeftimg.src = oSpecialliarr[j].imgSrc
	oLefth5.innerHTML = oSpecialliarr[j].title3
}
var oCenterul = document.getElementById("specialid_center_ul")
for(var j = 0; j < oSpecialdatas.length; j++) {
	var oCenterli = document.createElement("li");
	var oCenterh3 = document.createElement("h3");
	var oCenterh5 = document.createElement("h5");
	var oCenterimg = document.createElement("img");
	oCenterul.appendChild(oCenterli)
	oCenterli.appendChild(oCenterh3)
	oCenterli.appendChild(oCenterimg)
	oCenterli.appendChild(oCenterh5)
	oCenterh3.innerHTML = oSpecialdatas[j].title2
	oCenterimg.src = oSpecialdatas[j].imgSrc1
	oCenterh5.innerHTML = oSpecialdatas[j].title3
}
var orightul = document.getElementById("specialid_right_ul")
for(var j = 0; j < oSpecialdatas.length; j++) {
	var orightli = document.createElement("li");
	var orighth3 = document.createElement("h3");
	var orighth5 = document.createElement("h5");
	var orightimg = document.createElement("img");
	orightul.appendChild(orightli)
	orightli.appendChild(orighth3)
	orightli.appendChild(orightimg)
	orightli.appendChild(orighth5)
	orighth3.innerHTML = oSpecialdatas[j].title2
	orightimg.src = oSpecialdatas[j].imgSrc1
	orighth5.innerHTML = oSpecialdatas[j].title3
}
//频道
var oSeafooddatas = [{
	"title": "商创海鲜",
	"title1": "年货带回家199减30",
	"imgSrc": "../images/1515953435885264617.png"
}, {
	"title": "商创海鲜",
	"title1": "年货带回家199减30",
	"imgSrc": "../images/1515953436530337827.png"
}, {
	"title": "商创海鲜",
	"title1": "年货带回家199减30",
	"imgSrc": "../images/1515953436638384330.png"
}, {
	"title": "商创海鲜",
	"title1": "年货带回家199减30",
	"imgSrc": "../images/1515953436650183568.png"
}, {
	"title": "商创海鲜",
	"title1": "年货带回家199减30",
	"imgSrc": "../images/1515953435885264617.png"
}, {
	"title": "商创海鲜",
	"title1": "年货带回家199减30",
	"imgSrc": "../images/1515953435885264617.png"
}]
var colour = ["#e89621", "#325bb4", "#1c9daf", "#d13837", "#ca4283", "#5d40c1"]
var oSeafood = document.getElementById("seafood")
for(var i = 0; i < colour.length; i++) {
	var oSeafooddiv = document.createElement("div");
	oSeafood.appendChild(oSeafooddiv)
	oSeafooddiv.style.background = colour[i]
	var oSeafoodimg = document.createElement("img");
	oSeafooddiv.appendChild(oSeafoodimg)
	oSeafoodimg.src = oSeafooddatas[i].imgSrc
	var oSeafoodh3 = document.createElement("h3");
	oSeafooddiv.appendChild(oSeafoodh3)
	oSeafoodh3.innerHTML = oSeafooddatas[i].title1
	var oSeafoodh2 = document.createElement("h2");
	oSeafooddiv.appendChild(oSeafoodh2)
	oSeafoodh2.innerHTML = oSeafooddatas[i].title
}
//热门手机

//还没逛够
var oShoppingdatas = [{
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1489099544749.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1489099437211.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1489099773629.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1489100550574.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1489102299856.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1489102753231.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1489102950633.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490165200470.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490165271576.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490165304408.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490165375713.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490165418547.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490165470760.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490174741051.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490174925807.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490205126945.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490205156678.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490205189180.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490205223025.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490208758028.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490208835065.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490208869148.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490209587072.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490209616526.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490209649059.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490209690294.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490209720209.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490209796384.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490210322574.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490210364947.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490210428229.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490211575591.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490211620029.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490211700709.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490211843119.jpg"
}, {
	"title": "2017年春季新款",
	"moeny": "￥89.00",
	"nomoeny": "￥199.00",
	"imgSrc": "../images/0_thumb_G_1490218667022.jpg"
}, ]
var oShopping = document.getElementById("shopping");
var oShoppingul = document.createElement("ul");
oShopping.appendChild(oShoppingul)
for(var i = 0; i < 30; i++) {
	var oShoppingli = document.createElement("li");
	oShoppingul.appendChild(oShoppingli)
	oShoppingli.style.width = 230 + "px"
	oShoppingli.style.height = 300 + "px"
	var oShoppingimg = document.createElement("img");
	oShoppingli.appendChild(oShoppingimg)
	oShoppingimg.src = oShoppingdatas[i].imgSrc
	var oShoppingh3 = document.createElement("h3");
	oShoppingli.appendChild(oShoppingh3)
	oShoppingh3.innerHTML = oShoppingdatas[i].title
	var oShoppingh4 = document.createElement("h4");
	oShoppingli.appendChild(oShoppingh4)
	oShoppingh4.innerHTML = oShoppingdatas[i].moeny
	var oShoppingh4s = document.createElement("h4");
	oShoppingli.appendChild(oShoppingh4s)
	oShoppingh4s.innerHTML = oShoppingdatas[i].nomoeny
}

///固定定位右边隐藏显示二级标题
var oTop2 = document.getElementById("titletwo");
var oSarollflex = document.getElementById("sarollflex");
window.onscroll = function() {
	var oT = document.documentElement.scrollTop || document.body.scrollTop;
	if(oT > 200) {
		oTop2.style.height = 60 + "px"
		oTop2.style.display = "block"
	} else {
		oTop2.style.display = "none"
		oTop2.style.height = 0 + "px"
	}
}

//固定定位左边点击回到头部
var osarolllast = document.getElementById("saroll_flex_last")
osarolllast.onclick = function() {
	var timer = setInterval(function() {
		var oT = document.documentElement.scrollTop || document.body.scrollTop;
		window.scrollBy(0, -100);
		if(oT <= 0) {
			clearInterval(timer)
		}
	}, 30)
}
//楼层导航
$(function() {

	floorFn({
		"target": ['.one', '.sroll', '.venue', '.price', '.guild', '.special', '.seafood', '.apple', '.shopping'],
		"active": ".saroll_flex_active",
		"container": ".sarollflex",
		"container2": ".floor"
	})

	function floorFn(json) {
		//获取滚动距离
		var arr = [];
		for(var i = 0; i < json.target.length; i++) {
			var oTop = $(json.target[i]).offset().top
			arr.push(oTop)
		}
		console.log(arr)

		$(window).on("scroll", scrollFn)

		function addActiveFn(index) {
			$(json.container).children("ul").children("li").eq(index).addClass(json.active).siblings().removeClass(json.active)
		}

		//滚动函数
		function scrollFn() {
			var floorTop = $(window).scrollTop();
			if(floorTop >= $(json.target[0]).offset().top) {
				$(json.container).fadeIn(-500)
			} else {
				$(json.container).fadeOut(1000)
			}

			var num = 0;
			var flag = true;
			for(var i = 0; i < arr.length; i++) {
				num++

				if(flag) {
					if(floorTop > arr[arr.length - num] - 300) {
						var index = arr.length - num;
						flag = false
					} else {
						flag = true
					}
				}

			}
			addActiveFn(index)
		}

		//点击楼层导航

		$(json.container).children("ul").children("li").click(function() {
			var index = $(this).index();
			addActiveFn(index)
			var flag = true;
			for(var i = 0; i < arr.length; i++) {
				if(flag) {
					if(index == i) {
						$("html,body").animate({
							"scrollTop": arr[i] - 100
						}, 500, function() {
							$(window).on("scroll", scrollFn)
						})
						flag = false
					} else {
						flag = true
					}
				}
			}

		})

	}
})