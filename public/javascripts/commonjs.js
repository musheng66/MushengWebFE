$(function() {

	$(window).scroll(function() {
		if($(window).scrollTop() > 0){
			$("#nav-head").removeClass("navbar-inverse").addClass("navbar-default");
		} else {
			$("#nav-head").removeClass("navbar-default").addClass("navbar-inverse");
		}
	});

	/* 写入nav内容
	var isAnimated = "";
	var isActive = "";
	var markName = $("#page_mark");
	if(markName){
		switch(markName.data("mark")){
			case 'home' : isActive = '<li class="active"><a href="home.html">主页</a></li>'
									+ '<li><a href="abouts.html">关于</a></li>'
									+ '<li><a href="contact.html">联系</a></li>';
									break;
			case 'abouts' : isActive = '<li><a href="home.html">主页</a></li>'
										+ '<li class="active"><a href="abouts.html">关于</a></li>'
										+ '<li><a href="contact.html">联系</a></li>';
									break;
			default : isActive ='<li><a href="home.html">主页</a></li>'
								+ '<li><a href="abouts.html">关于</a></li>'
								+ '<li><a href="contact.html">联系</a></li>';
		}
	} else {
		isActive ='<li><a href="home.html">主页</a></li>'
			+ '<li><a href="abouts.html">关于</a></li>'
			+ '<li><a href="contact.html">联系</a></li>';
	}
	var htmlToWrite = '<div class="container ' + isAnimated + ' ">'
		+ '<div class="navbar-header">'
			+ '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"aria-expanded="false" aria-controls="navbar">'
				+ '<span class="sr-only">Toggle navigation</span>'
				+ '<span class="icon-bar"></span>'
				+ '<span class="icon-bar"></span>'
				+ '<span class="icon-bar"></span>'
			+ '</button>'
			+ '<a class="navbar-brand" href="javascript:void(0);">北研Web前端</a>'
		+ '</div>'
		+ '<div id="navbar" class="collapse navbar-collapse">'
			+ '<ul class="nav navbar-nav">'
				+ isActive
			+ '</ul>'
			+ '<ul class="nav navbar-nav navbar-right">'
				+ '<li><a href="javascript:void(0);">欢迎</a></li>'
				+ '<li class="dropdown">'
						+ '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">选项 <span class="caret"></span></a>'
						+ '<ul class="dropdown-menu">'
							+ '<li><a href="javascript:void(0);">声明</a></li>'
							+ '<li role="separator" class="divider"></li>'
							+ '<li><a href="index.html">退出</a></li>'
						+ '</ul>'
				+ '</li>'
			+ '</ul>'
		+ '</div><!-- /.nav-collapse -->'
	+ '</div><!-- /.container -->';
	if(markName && markName.data("mark") != 'index'){
		$(htmlToWrite).appendTo("nav");
	} else {}	//首页不写入
	*/

	/* 写入footer内容
	$('<p>&copy; 壹人壹本·北京研发中心 2016</p><!--back to top--><div class="return-top" id="return-top"><a href="javascript:void(0);" class="back-a"><i class="fa fa-arrow-up"></i>返回顶部</a> </div>').appendTo("footer");
	*/

});

$.getScript("/javascripts/MsJS.js",function(){	//加载js文件后调用

	/* 返回顶部 */
	$("#return-top").backtotop({
		speed : 500,
		mscroll : function(){
			if($(window).scrollTop() > 0){
				$("#return-top").css("display","inline-block");
			} else {
				$("#return-top").css("display","none");
			}
		}
	});

});

$.getScript("/javascripts/js.cookie.js",function(){	//加载js文件后调用

	//获取cookie并判断
	if (Cookies.get('webfe_user') && Cookies.get('webfe_user').length > 0) {
		$("#c_username").html('欢迎 | ' + Cookies.get('webfe_name'));
	}

    //注销用户
    $("#delUser").click(function () {
        layer.confirm('该操作将从系统中移除此用户，确定要删除此用户吗？', {
            btn: ['确定', '取消'],  //按钮
            shade: [0.6 , '#000' , true]    //显示遮罩层
        }, function(index){ //确定
            var json = {
              id : Cookies.get('webfe_user')
            };
            layer.close(index);
            $.ajax({
                type: "POST",
                url: "../../user/del",
                dataType:"JSON",
                data: json,
                success:function(data){
                    if(data.code == 200){
                        Cookies.remove('webfe_user', { path : '/' });
                        Cookies.remove('webfe_username', { path : '/' });
                        Cookies.remove('webfe_name', { path : '/' });
                        layer.msg('操作成功，正在登出系统...');
                        setTimeout(function(){
                            window.location.href = '/';
                        }, 2000);
                    } else {
                        layer.msg('操作失败');
                    }
                },
                error:function(data){
                    layer.msg('操作失败，内部错误');
                }
            });

        }, function(index){ //取消
            layer.close(index);
        });
    });

    //切换用户
    $("#changeUser").click(function () {
        Cookies.remove('webfe_user', { path : '/' });
        Cookies.remove('webfe_username', { path : '/' });
        Cookies.remove('webfe_name', { path : '/' });
        layer.msg('正在登出系统，欢迎下次使用');
        setTimeout(function(){
            window.location.href = '/';
        }, 2000);
    });
});