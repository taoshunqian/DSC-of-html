$(function() {
	//窗口变化时大小改变
	$(window).resize(function() { 
		$("#shoppingCart").css({  //
			"height": $(window).innerHeight()
		})
		$("#shoppingCart #shoppingMain").css({
			"height": $(window).innerHeight() - 150
		})

	})
	//购物车的显示隐藏
	var gouwuchexianshi = 0
	$("#shoppingCart .main").find("ul").click(function() {
		gouwuchexianshi++
		if(gouwuchexianshi == 1) {
			$("#shoppingCart .shop").css("width", "350px")
		} else {
			$("#shoppingCart .shop").css("width", "0px")
			gouwuchexianshi = 0
		}
	})
	//经过变红,显示隐藏
	$("#shoppingCart .main").children().on("mouseenter", function() {
		$(this).css({
			"background": "red",
			"cursor": "pointer"
		})
	})
	$("#shoppingCart .main").children().on("mouseleave", function() {
		$(this).css({
			"background": "#000"
		})
	})
	$("#shoppingCart .main").find(".z001").on("mouseenter.b", function() {
		$(this).children().css({
			"left": "-105px",
			"width": "120px"
		})
	})
	$("#shoppingCart .main").find(".z001").on("mouseleave.b", function() {
		$(this).children().css({
			"left": "-130px",
			"width": "0px"
		})
	})
	//购物车商品内容盒子宽
	$("#shoppingCart #shoppingMain").css({
		"height": $(window).innerHeight() - 150
	})
	//返回顶部
	$("#shoppingCart .main").children().last().click(function() {
		var timer = setInterval(function() {
			scrollBy(0, -10)
			if($(window).scrollTop() == 0) {
				clearInterval(timer)
			}
		}, 1)
	})
	//总钱数
	function suanzhang() {
		var zongjine = 0
		for(var i = 0; i < $("#shoppingCart #shoppingMain>div").length; i++) {
			zongjine += Number($("#shoppingCart #shoppingMain").find(".number").eq(i).text()) * Number($("#shoppingCart #shoppingMain").find(".number2").eq(i).val())
		}

		$("#shoppingCart .bottom").find(".money").text(zongjine + ".00")
		//控制网页中显示购物车内的商品数
		var num = 0
		$("#shoppingCart #shoppingMain .number2").each(function() {
			num += Number($(this).val())
		})
		$(".shoppingnum").text(num)
		$("#shoppingnum").val(num)
		//$(".shoppingnum").text($("#shoppingCart #shoppingMain").children().length)
		//$("#shoppingnum").val($("#shoppingCart #shoppingMain").children().length)
	}
	suanzhang()
	//数量改变时
	$("#shoppingCart #shoppingMain").find(".number2").change(function() {
		suanzhang()
	})

	////点击添加到购物车
	////top
	//	$("#centent .tuijian ul").find("li").find("p:last-of-type").click(function() {
	//		if($("#shoppingMain div[title=" + $(this).parent().attr("title") + "]").length > 0) {
	//			$("#shoppingMain div[title=" + $(this).parent().attr("title") + "]").find("input").last().val($("#shoppingMain div[title=" + $(this).parent().attr("title") + "]").find("input").last().val() - "-1")
	//
	//		} else {
	//		$('<div title="' + $(this).parent().attr("title") + '"><p style="background-image: url(' + shangpin[$(this).parent().attr("title") - 1].src1 + ')"></p><ul><li>' + shangpin[$(this).parent().attr("title") - 1].details + '</li><li><div>$<span class="number">' + shangpin[$(this).parent().attr("title") - 1].value + '</span>.00<span> * </span><input type="number" class="number2" value="1" max="100" min="1"></input></div><div class="shanchu">删除</div></li></ul></div>').appendTo($("#shoppingMain"))	
	//		}
	//		
	//		
	//		
	//		$("#shoppingCart #shoppingMain").find(".number2").change(function() {
	//			suanzhang()
	//		})
	//		suanzhang()
	//		$("#shoppingCart #shoppingMain div").find(".shanchu").click(function() {
	//		$(this).parent().parent().parent().remove()
	//			suanzhang()
	//		})
	//	})
	//	
	
	
	
	
	
	
	
	
	
	
	
	
	//添加时间戳
	var odate = new Date();
	var osj = odate.getTime()
	$("a").each(function() {
		if($(this).attr("href")) {
			$(this).attr("href", $(this).attr("href") + "?t=" + osj)
		}
	})

})