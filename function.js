function GroupModalPhoto(){
    ModalCommentsCount();
    if($("#photosGal .counter").length>1) {
        $('.imgPosts').hover(function () {
            $(this).find('a').css('opacity', '1');
        }, function () {
            $(this).find('a').css('opacity', '0');
        });
    }else{
        $('.imgPosts a').hide();
    }
    var gradient = ifBrowser({
        "chrome safari":"-webkit-linear-gradient",
        "firefox":"-moz-linear-gradient",
        "opera":"-o-linear-gradient"
    });
    $("#modal-new .group-photo-one .NextPostNew img").hover(function(event){event.stopPropagation();$(this).closest(".imgPosts").find("a").css("opacity","1");});
    $("#modal-new .group-photo-one .NextPostNew").hover(function(){
        var i = 0;
        var j = 0;
        setInterval(function(){
            if(i<=parseFloat(70) && j==0){
                i+=1;
                $("#modal-new .group-photo-one .NextPostNew").css("background", ""+gradient+"(right, rgba(20,20,20," + i / 100 + ") 0%, rgba(255,255,255,0) 100%)");
                if(i==parseFloat(70)){j=1}
            }

            if(i>=0 && i<=parseFloat(70) && j==1){
                i-=1;
                $("#modal-new .group-photo-one .NextPostNew").css("background", ""+gradient+"(right, rgba(20,20,20,"+ i/100 +") 0%, rgba(255,255,255,0) 100%)");
                if(i==parseFloat(70)){j=0}
            }
        },10)
    },function(){});
    $("#modal-new .group-photo-one .previousPostNew img").hover(function(event){event.stopPropagation();$(this).closest(".imgPosts").find("a").css("opacity","1");});
    $("#modal-new .group-photo-one .previousPostNew").hover(function(){
        var i = 0;
        var j = 0;
        setInterval(function(){
            if(i<=parseFloat(70) && j==0){
                i+=1;
                $("#modal-new .group-photo-one .previousPostNew").css("background", ""+gradient+"(left, rgba(20,20,20,"+ i/100 +") 0%, rgba(255,255,255,0) 100%)");
                if(i==parseFloat(70)){j=1}
            }

            if(i>=0 && i<=parseFloat(70) && j==1){
                i-=1;
                $("#modal-new .group-photo-one .previousPostNew").css("background", ""+gradient+"(left, rgba(20,20,20,"+ i/100 +") 0%, rgba(255,255,255,0) 100%)");
                if(i==parseFloat(70)){j=0}
            }
        },10)
    },function(){});
    $(".LivCommentPostNew .replies_send").mouseup(function(){
        setTimeout(function(){
            $(".LivCommentPostNew").find("textarea").val("");
            ModalCommentsCount();
        },100);
    });
    $(".CommentsNewPost").on("click",".ComentTextPostNew .icon-cancel-4",function(){
        $("#bodyModal").on("click","#contentModal",function(){
            $(this).find("a button").on("click",ModalCommentsCount());
        });
    });
    $(window).keyup(function(event){
        if(event.keyCode == 37){
            $("#modal-new .imgPosts .previousPostNew").click();
        }
        if(event.keyCode == 39){
            $("#modal-new .imgPosts .NextPostNew").click();
        }
    });
}
