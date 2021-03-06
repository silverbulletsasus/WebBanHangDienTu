function POSTAjax(n, t, i, r, u, f) {
    $.ajax({
        async: f,
        url: n,
        data: t,
        type: "POST",
        cache: !1,
        beforeSend: function () {
            i()
        },
        success: function (n) {
            r(n)
        },
        error: function () {
            u()
        }
    })
}

function BeforeSendAjax() {
    $("#dlding").show()
}

function EndSendAjax() {
    $("#dlding").hide()
}

function ErrorAjax() {
    $("#dlding").hide()
}

function SuggestSearch(n, t, i, r) {
    var u, e, f;
    if (typeof r == "undefined" && (r = !1), u = $(t) === undefined ? "" : $(t).val(), u = u.trim().toLowerCase(), e = $(t).parents("form"), f = e.find(".wrap-suggestion"), n.which == 40 || n.which == 38) return n.preventDefault(), UpDownSuggest(n.which), !1;
    if (n.which == 13) {
        if ($("ul.wrap-suggestion li.selected").length > 0) return location.href = $("ul.wrap-suggestion li.selected a").attr("href"), n.preventDefault(), !1;
        if (u.length < 2) {
            f.hide();
            return
        }
    }
    if (!r) {
        clearTimeout(timmer);
        timmer = setTimeout(function () {
            SuggestSearch(n, t, i, !0)
        }, 300);
        return
    }
    if (u.length < 2) {
        f.hide();
        return
    }
    $.ajax({
        url: "/aj/CommonV3/SuggestSearch",
        type: "GET",
        data: {
            keyword: u,
            categoryID: i
        },
        cache: !1,
        success: function (n) {
            clearTimeout(timmer);
            n == "" ? $(".wrap-suggestion").remove() : f.length > 0 ? f.replaceWith(n) : e.append(n)
        }
    })
}

function UpDownSuggest(n) {
    var t = "ul.wrap-suggestion li",
        i;
    if (n == 40) {
        $(t + ".selected").length == 0 ? $(t + ":first").addClass("selected") : (i = $(t + ".selected").next(), $(t + ".selected").removeClass("selected"), i.addClass("selected"));
        return
    }
    if (n == 38) {
        $(t + ".selected").length == 0 ? $(t + ":last").addClass("selected") : (i = $(t + ".selected").prev(), $(t + ".selected").removeClass("selected"), i.addClass("selected"));
        return
    }
}

function getCookie(n) {
    for (var r, u, i = document.cookie.split(";"), t = 0; t < i.length; t++)
        if (r = i[t].substr(0, i[t].indexOf("=")), u = i[t].substr(i[t].indexOf("=") + 1), r = r.replace(/^\s+|\s+$/g, ""), r == n) return unescape(u)
}

function empty(n) {
    var t;
    if (n === "" || n === 0 || n === "0" || n === null || n === !1 || n === undefined || $.trim(n) == "") return !0;
    if (typeof n == "object") {
        for (t in n)
            if (typeof n[t] != "function") return !1;
        return !0
    }
    return !1
}



function CreateCookie(n, t, i) {
    var r = new Date,
        u;
    r.setDate(r.getDate() + i);
    u = escape(t) + (i == null ? "" : "; visited=true; path=/; domain=" + rooturl + "; expires=" + r.toUTCString() + ";");
    document.cookie = n + "=" + u
}

function CreateCookieWithHour(n, t, i) {
    var r = new Date,
        u;
    r.setMinutes(r.getMinutes() + i);
    u = escape(t) + (i == null ? "" : "; visited=true; path=/; domain=" + rooturl + "; expires=" + r.toUTCString() + ";");
    document.cookie = n + "=" + u
}

function Delete_Cookie(n, t, i) {
    getCookie(n) && (document.cookie = n + "=" + (t ? ";path=" + t : "") + (i ? ";domain=" + i : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT")
}

function checkCmtParam() {
    setTimeout(function () {
        var n = getUrlParameter("cmtdt");
        n > 0 && $("#comment").length > 0 ? ($("html, body").animate({
            scrollTop: $("#comment").offset().top
        }, 500), setTimeout(function () {
            $(".wrap_seasort").addClass("hide");
            $(".cmtKey").val(n);
            var t = $.Event("keyup");
            t.keyCode = 13;
            $(".cmtKey").trigger(t);
            $(".cmtKey").val(n);
            setTimeout(function () {
                var t, i;
                $(".s_comment").click();
                $(".cmtKey").val("");
                t = window.location.href;
                t = t.replace(n, "0");
                i = "<a class='seeAllCmt' href='" + t + "'>Xem táº¥t cáº£ bĂ¬nh luáº­n<\/a>";
                $(".wrap_comment .listcomment").after(i);
                $("#txtEditorExt").remove();
                $(".wrap_seasort").hide();
                $(".wrap_seasort").removeClass("hide")
            }, 1e3)
        }, 1e3)) : n == 0 && $("html, body").animate({
            scrollTop: $("#comment").offset().top
        }, 500)
    }, 2e3)
}

function getUrlParameter(n) {
    for (var u = decodeURIComponent(window.location.search.substring(1)), r = u.split("&"), t, i = 0; i < r.length; i++)
        if (t = r[i].split("="), t[0] === n) return t[1] === undefined ? !0 : t[1]
}

function initRating() {
    $(".boxRatingCmt .lStar i").unbind();
    $(".boxRatingCmt .lStar i").click(function () {
        var n, t;
        for ($(".boxRatingCmt .ipt").removeClass("hide"), $(".boxRatingCmt .lStar i").removeClass("iconcom-star"), $(".boxRatingCmt .lStar i").removeClass("iconcom-unstar").addClass("iconcom-unstar"), n = $(this).attr("id"), n = parseInt(n.replace("s", "")), t = 1; t <= n; t++) $(".boxRatingCmt .lStar #s" + t).removeClass("iconcom-unstar"), $(".boxRatingCmt .lStar #s" + t).addClass("iconcom-star");
        $(this).attr("id") == "s1" ? $(".rsStar").html("KhĂ´ng thĂ­ch") : $(this).attr("id") == "s2" ? $(".rsStar").html("Táº¡m Ä‘Æ°á»£c") : $(this).attr("id") == "s3" ? $(".rsStar").html("BĂ¬nh thÆ°á»ng") : $(this).attr("id") == "s4" ? $(".rsStar").html("Ráº¥t tá»‘t") : $(this).attr("id") == "s5" && $(".rsStar").html("Tuyá»‡t vá»i quĂ¡");
        gl_prevScore = n;
        $("#hdfStar").val(n)
    });
    $(".input .if [name=fRPhone]").unbind();
    $(".input .if [name=fRPhone]").keydown(function (n) {
        $.inArray(n.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || n.keyCode === 65 && (n.ctrlKey === !0 || n.metaKey === !0) || n.keyCode >= 35 && n.keyCode <= 40 || (n.shiftKey || n.keyCode < 48 || n.keyCode > 57) && (n.keyCode < 96 || n.keyCode > 105) && n.preventDefault()
    });
    $(".sttB").unbind();
    $(".sttB").hover(function () {
        $(".rcf").hide();
        $(this).parents("li").find(".rcf").show();
        gl_ifcH = !0
    }, function () {
        gl_ifcH = !1;
        setTimeout(function () {
            gl_ifcH == !1 && $(".rcf").hide()
        }, 500)
    });
    $(".rcf").unbind();
    $(".rcf").hover(function () {
        $(".rcf").hide();
        $(this).parents("li").find(".rcf").show();
        gl_ifcH = !0
    }, function () {
        $(this).parents("li").find(".rcf").hide();
        gl_ifcH = !1
    });
    $(".ratingLst .par").each(function () {
        var n = $(this).attr("id"),
            t;
        n = n.replace("r-", "");
        t = $(".ratingLst .rp-" + n).length;
        t > 0 && $(this).find(".cmtr").html(t + " tháº£o luáº­n")
    });
    var n = getCookie("tgdd_fullname"),
        t = getCookie("tgdd_email");
    n != null && n != "" ? $(".ratingLst .ifrl").each(function () {
        $(this).find("span").html(decodeURI(n));
        $(this).find("a").html("Sá»­a tĂªn")
    }) : $(".ratingLst .ifrl").removeClass("hide").addClass("hide");
    $("#comment").on("cmt.popupuseredit", function () {
        $(".wrap_popup .titlebar").html("Nháº­p thĂ´ng tin <a href='javascript:cmtClosePop();' class='back'><i class='iconcom-back'><\/i><\/a>");
        $(".wrap_popup button").attr("onclick", "cmtConfirmUser(true, true);")
    });
    $("#comment").on("cmtFinishEditInfo", function () {
        console.log("receive cmtFinishEditInfo");
        var n = getCookie("tgdd_fullname"),
            t = getCookie("tgdd_email");
        n != null && n != "" && $(".ratingLst .ifrl").each(function () {
            $(this).find("span").html(decodeURI(n));
            $(this).find("a").html("Sá»­a tĂªn");
            $(".ratingLst .ifrl").removeClass("hide")
        });
        $(".wrap_comment .ajaxcomment #loadcomment").html("");
        $(".wrap_comment .ajaxcomment").removeClass("hide").addClass("hide")
    });
    $(".ratingLst li").length == 0 && showInputRating();
    
    $(".lStar").hover(function () {}, function () {
        gl_prevScore == 0 ? ($(".lStar i").removeClass("iconcom-star").addClass("iconcom-unstar"), $(".rsStar").addClass("hide")) : gl_prevScore > 0 && $("#s" + gl_prevScore).click()
    });
    $(".lStar i").hover(function () {
        var n, t;
        for ($(".lStar i").removeClass("iconcom-star").addClass("iconcom-unstar"), $(this).attr("id") == "s1" ? $(".rsStar").html("KhĂ´ng thĂ­ch") : $(this).attr("id") == "s2" ? $(".rsStar").html("Táº¡m Ä‘Æ°á»£c") : $(this).attr("id") == "s3" ? $(".rsStar").html("BĂ¬nh thÆ°á»ng") : $(this).attr("id") == "s4" ? $(".rsStar").html("Ráº¥t tá»‘t") : $(this).attr("id") == "s5" && $(".rsStar").html("Tuyá»‡t vá»i quĂ¡"), $(".rsStar").removeClass("hide"), n = $(this).attr("id"), n = parseInt(n.replace("s", "")), t = 1; t <= n; t++) $("#s" + t).removeClass("iconcom-unstar").addClass("iconcom-star");
        n > 0 && $("#hdfStar").val(n)
    }, function () {});
    $(".notold").length == 1 && console.log("kkd");
    getFileUpload()
}

function showInputRating() {
    $(".boxRatingCmt .input").fadeIn();
    $(".boxRatingCmt .sRt span").removeClass("hide");
    $(".boxRatingCmt .sRt a").removeClass("hide").addClass("hide")
}

function hideInputRating() {
    $(".boxRatingCmt .input").fadeOut();
    $(".boxRatingCmt .sRt span").removeClass("hide").addClass("hide");
    $(".boxRatingCmt .sRt a").removeClass("hide")
}

function submitRatingComment() {
    if (!gl_sendRating) {
        if (gl_sendRating = !0, !validateRating()) {
            gl_sendRating = !1;
            return
        }
        var n = $(".boxRatingCmt .input"),
            t = n.serialize();
        POSTAjax("/aj/ProductV4/SubmitRatingComment/", t, function () {}, function (n) {
            if (n != null || n != "") try {
                initRating();
                gl_sendRating = !1;
                n.res == 1 ? (alert("ÄĂ¡nh giĂ¡ cá»§a báº¡n sáº½ Ä‘Æ°á»£c há»‡ thá»‘ng kiá»ƒm duyá»‡t. Xin cĂ¡m Æ¡n."), resetRating(), hideInputRating()) : n.res == 0 && alert(n.mes)
            } catch (t) {
                gl_sendRating = !1
            }
        }, function () {}, !0)
    }
}

function getImgRating() {
    if ($(".resImg li").length > 0) {
        var n = "";
        $(".resImg li").each(function () {
            var t = $(this).attr("data-imgname");
            t != null && t != "" && (n += t + "â•¬")
        });
        $(".hdfRatingImg").val(n)
    }
}

function ratingRelply(n) {
    var i, t, r, u;
    if (gl_sendRating) return !1;
    if (gl_sendRating = !0, i = $.trim($(".rr-" + n).find("input").val()), i == null || i == "") return alert("Vui lĂ²ng nháº­p ná»™i dung cáº§n tháº£o luáº­n"), gl_sendRating = !1, !1;
    if (t = getCookie("tgdd_fullname"), t == null || t == "") return cmtEditName(), gl_sendRating = !1, !1;
    r = {
        productid: productID,
        commentid: n,
        content: $(".rr-" + n).find("input").val(),
        name: t
    };
    u = "/aj/ProductV2/SubmitRatingReply/";
    POSTAjax(u, r, function () {}, function (n) {
        if (n != null || n != "") try {
            n.res == 1 && ($(".ratingLst .reply input").val(""), alert("Tháº£o luáº­n cá»§a báº¡n sáº½ Ä‘Æ°á»£c há»‡ thá»‘ng kiá»ƒm duyá»‡t. Xin cĂ¡m Æ¡n."));
            gl_sendRating = !1
        } catch (t) {}
    }, function () {}, !0)
}

function clearBorder() {
    $(".boxRatingCmt .ct").removeClass("borderWn");
    $(".boxRatingCmt .if input").removeClass("borderWn")
}

function validateRating() {
    var i, n, t;
    return (clearBorder(), i = parseInt($("#hdfStar").val()), i == 0) ? ($(".lbMsgRt").html("Báº¡n chÆ°a Ä‘Ă¡nh giĂ¡ Ä‘iá»ƒm sao, vui lĂ²ng Ä‘Ă¡nh giĂ¡."), !1) : (n = $.trim($(".input .ct [name=fRContent]").val()), n == null || n == "") ? ($(".lbMsgRt").html("Vui lĂ²ng nháº­p ná»™i dung Ä‘Ă¡nh giĂ¡ vá» sáº£n pháº©m."), $(".boxRatingCmt .ct").addClass("borderWn"), !1) : n.length < 80 ? ($(".lbMsgRt").html("Ná»™i dung Ä‘Ă¡nh giĂ¡ quĂ¡ Ă­t.\nVui lĂ²ng nháº­p thĂªm ná»™i dung Ä‘Ă¡nh giĂ¡ vá» sáº£n pháº©m."), $(".boxRatingCmt .ct").addClass("borderWn"), !1) : (n = $.trim($(".input .if [name=fRName]").val()), n == null || n == "") ? ($(".lbMsgRt").html("Vui lĂ²ng nháº­p há» tĂªn"), $(".input .if [name=fRName]").addClass("borderWn"), !1) : (n = $.trim($(".input .if [name=fRPhone]").val()), n == null || n == "") ? ($(".lbMsgRt").html("Vui lĂ²ng nháº­p sá»‘ Ä‘iá»‡n thoáº¡i."), $(".input .if [name=fRPhone]").addClass("borderWn"), !1) : (t = $.trim($(".input .if [name=fREmail]").val()), t != null && t != "" && cmtValidateEmail(t) == !1) ? ($(".lbMsgRt").html("Email khĂ´ng Ä‘Ăºng Ä‘á»‹nh dáº¡ng."), $(".input .if [name=fREmail]").addClass("borderWn"), !1) : !0
}

function resetRating() {
    console.log("rs rt");
    clearBorder();
    $(".lStar i").each(function () {
        $(this).removeClass("iconcom-star").addClass("iconcom-unstar")
    });
    $("#hdfStar").val("0");
    $(".input .ct [name=fRContent]").val("");
    $(".input .if [name=fRName]").val("");
    $(".input .if [name=fRPhone]").val("");
    $(".input .if [name=fREmail]").val("");
    $(".rsStar").html("");
    $(".rsStar").addClass("hide");
    $(".lbMsgRt").html("");
    $(".resImg").html("")
}

function showRatingCmtChild(n) {
    var t = n.replace("r-", "");
    $(".rp-" + t).removeClass("hide");
    $(".rr-" + t).removeClass("hide")
}

function ratingCmtList(n) {
    console.log("lst");
    var t = {
        productid: productID,
        page: n
    };
    POSTAjax("/aj/ProductV4/RatingCommentList/", t, function () {}, function (n) {
        if (n != null || n != "") try {
            $(".boxRatingCmt .list").html(n);
            initRating();
            initLazy();
            $("img.lazy").trigger("sporty")
        } catch (t) {}
    }, function () {}, !0)
}

function likeRating(n) {
    var t = {
        id: n
    };
    POSTAjax("/aj/ProductV2/LikeRating/", t, function () {}, function (t) {
        var i, r;
        if (t != null || t != "") try {
            i = parseInt($("#r-" + n + " .cmtl").attr("data-like"));
            i++;
            $("#r-" + n).attr("data-like", i);
            r = "<i class='iconcom-likeR'><\/i>" + i + " thĂ­ch";
            $("#r-" + n + " .cmtl").html(r);
            $("#r-" + n + " .cmtl").attr("href", "javascript:;")
        } catch (u) {}
    }, function () {}, !0)
}

function unlikeRating() {}

function getFileUpload() {
    gl_isFeedbackLoad || $.getScript("/Scripts/desktop/jquery.html5uploader.min.js").done(function () {
        gl_isFeedbackLoad = !0;
        initUploadRating()
    })
}

function initUploadRating() {
    setTimeout(function () {
        $(".btnRatingUpload").on("click", function () {
            if (console.log("up Img rating"), $(".resImg li").length > 2) return console.log("Ä‘Ă£ up load quĂ¡ sá»‘ áº£nh quy Ä‘á»‹nh"), !1;
            $("#hdFileRatingUpload").click()
        });
        $("#hdFileRatingUpload").html5Uploader({
            postUrl: "/aj/ProductV4/PostRatingImage/",
            onClientLoadStart: function () {
                console.log("onClientLoadStart - upload feedbackIMG")
            },
            onServerLoadStart: function () {},
            onServerProgress: function () {},
            onServerLoad: function () {},
            onSuccess: function (n) {
                var i = $.parseJSON(n.currentTarget.response),
                    t;
                if (i.status == -1) {
                    $(".lbMsgRt").html("Xáº£y ra lá»—i, vui lĂ²ng thá»­ láº¡i.");
                    return
                }
                console.log("onSuccess - upload RatingIMG");
                t = "<li data-imgName='" + i.imageName + "'  >";
                t += "<img src='" + i.imageUrl + "' />";
                t += "<i class='fbDelImg' onclick='fbDelImg(this)'>x<\/i>";
                t += "<\/li>";
                $(".resImg").append(t);
                $(".resImg").removeClass("hide");
                getImgRating()
            }
        })
    }, 1e3)
}

function fbDelImg(n) {
    $(n).parent().remove()
}

function countTxtRating() {
    var n = $("#boxRatingCmt .ct textarea").val().length,
        t;
    n > 0 && n < 80 ? (t = n + " kĂ½ tá»± (tá»‘i thiá»ƒu 80)", $(".ct .ckt").html(t)) : $(".ct .ckt").html("")
}

function PopupGalleryRatingCmt(n, t) {
    if (gl_lFT) {
        var i = {
            productID: n,
            imageType: 8,
            colorID: 0
        };
        POSTAjax("/aj/ProductV4/GallerySlideFT/", i, function () {}, function (n) {
            if (n != null || n != "") try {
                if (n != null && n != "") {
                    $(".slide_FT").html(n);
                    gl_CurrColor = 0;
                    $("#ajxgallery").remove();
                    $("body").toggleClass("fixbody");
                    $("body").removeClass("fixbody");
                    var t = 0,
                        i = !1;
                    $(".fotorama").on("fotorama:show fotorama:load fotorama:fullscreenexit fotorama:fullscreenenter", function (n, r) {
                        var f, u;
                        $(".caption_ps").hide();
                        i || (r.show(0), r.requestFullScreen(), i = !0);
                        (n.type == "fotorama:show" || n.type == "fotorama:fullscreenenter") && (f = r.activeFrame.i, (t == 1 || f > 0) && (t = 1, u = $(r.activeFrame.html).find(".fb-like"), u != undefined && setTimeout(function () {
                            var n = u.data("url");
                            u.replaceWith('<iframe class="like" src="//www.facebook.com/plugins/like.php?href=' + n + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=20&amp;appId=459645584142044" scrolling="no" frameborder="0" style="border:none;overflow:hidden; width:100%;height:20px;" allowTransparency="true"><\/iframe>');
                            $(".caption_ps").show()
                        }, 1e3)));
                        n.type == "fotorama:load" && setTimeout(function () {
                            $("div.caption_ps").each(function () {
                                var n = $(this).parent().parent().find("img").width() + 2;
                                $(this).width(n).fadeIn(300)
                            })
                        }, 100);
                        n.type == "fotorama:fullscreenexit" && ($("body").click(), $("body").css("background-color", "#fff"), $("body").removeAttr("background-color"), r.destroy(), $(".slide_FT").html(""))
                    }).fotorama()
                }
            } catch (r) {} else $(".slide_FT").html("")
        }, function () {}, !0)
    } else $.getScript("/Scripts/desktop/fotorama.min.js").done(function () {
        gl_lFT = !0;
        PopupGalleryRatingCmt(n, t)
    })
}

function openFeedback() {
    $(".wrap_fdback").removeClass("hide");
    getFileUpload();
    $(".wrap_fdback .txtfbPhone").unbind();
    $(".wrap_fdback .txtfbPhone").keydown(function (n) {
        $.inArray(n.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || n.keyCode === 65 && (n.ctrlKey === !0 || n.metaKey === !0) || n.keyCode >= 35 && n.keyCode <= 40 || (n.shiftKey || n.keyCode < 48 || n.keyCode > 57) && (n.keyCode < 96 || n.keyCode > 105) && n.preventDefault()
    })
}

function closeFeedback() {
    $(".wrap_fdback").removeClass("hide").addClass("hide")
}

function sendFeedback() {
    if ((console.log("sendFeedback"), isSendFback) || !validateSendFback()) return !1;
    isSendFback = !0;
    var n = $.trim($(".wrap_fdback textarea").val()),
        t = $.trim($(".wrap_fdback .txtfbPhone").val()),
        i = $.trim($(".wrap_fdback .txtfbName").val()),
        r = document.URL,
        u = {
            content: n,
            fullname: i,
            phone: t,
            image: $(".hdffbImg").attr("data-imageName"),
            link: r,
            productid: productID
        };
    POSTAjax("/aj/ProductV4/SendFeedback/", u, function () {}, function (n) {
        if (n != null || n != "") {
            try {
                isSendFback = !1;
                n.res != 0 ? (alert("Pháº£n há»“i bĂ¡o lá»—i cá»§a báº¡n sáº½ Ä‘Æ°á»£c há»‡ thá»‘ng kiá»ƒm duyá»‡t. Xin cĂ¡m Æ¡n."), resetfback(), closeFeedback()) : n.res == 0 && alert(n.mes)
            } catch (t) {}
            isSendFback = !1
        }
    }, function () {}, !0)
}

function validateSendFback() {
    var n = $.trim($(".wrap_fdback textarea").val()),
        t = $.trim($(".wrap_fdback .txtfbPhone").val()),
        i = $.trim($(".wrap_fdback .txtfbName").val());
    return n == null || n == "" || n.length < 10 ? (alert("Vui lĂ²ng nháº­p ná»™i dung gĂ³p pháº£i hÆ¡n 10 kĂ½ tá»±."), !1) : i == null || i == "" ? (alert("Vui lĂ²ng nháº­p há» tĂªn"), !1) : t == null || t == "" ? (alert("Vui lĂ²ng nháº­p sá»‘ Ä‘iá»‡n thoáº¡i"), !1) : !0
}

function resetfback() {
    fbDelImg();
    $(".hdffbImg").attr("data-url", "");
    $(".hdffbImg").attr("data-imagename", "");
    $(".resImg img").attr("src", "");
    $(".wrap_fdback textarea").val("");
    $(".txtfbName").val("");
    $(".txtfbPhone").val("")
}

function initRatingArticle() {
    $(".bifRtAtc [name=txtPhoneNumber]").unbind();
    $(".bifRtAtc [name=txtPhoneNumber]").keydown(function (n) {
        $.inArray(n.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || n.keyCode === 65 && (n.ctrlKey === !0 || n.metaKey === !0) || n.keyCode >= 35 && n.keyCode <= 40 || (n.shiftKey || n.keyCode < 48 || n.keyCode > 57) && (n.keyCode < 96 || n.keyCode > 105) && n.preventDefault()
    })
}

function showRateArticle() {}

function rtAtcChangeGder(n) {
    $(".ifRtGd label").removeClass("choosed");
    n == 1 ? $(".ifGdM").addClass("choosed") : n == 2 && $(".ifGdFm").addClass("choosed");
    $(".ifRtGd").attr("data-val", n)
}

function sendRatingContent(n) {
    n == 2 ? sendRatingArticle() : n == 3 && sendRatingGallery()
}

function sendRatingArticle() {
    if (!gl_sendRating) {
        if (gl_sendRating = !0, !validateRatingArticle()) {
            gl_sendRating = !1;
            return
        }
        var n = $.trim($(".bRtAtc [name=txtContent]").val()),
            t = $(".bRtAtc .ifRtGd").attr("data-val"),
            i = $.trim($(".bRtAtc [name=txtFullName]").val()),
            r = $.trim($(".bRtAtc [name=txtPhoneNumber]").val()),
            u = $.trim($(".bRtAtc [name=txtEmail]").val()),
            f = encodeURI(window.location.href),
            e = {
                ct: n,
                name: i,
                phone: r,
                email: u,
                gender: t,
                type: 2,
                productID: productID,
                lnk: f
            };
        POSTAjax("/aj/ProductV4/SubmitRatingArticle/", e, function () {}, function (n) {
            var t, i, r;
            (n != null || n != "") && (n.mes != null && n.mes != "" ? ($(".bRtAtc .alert").html(n.mes), $(".bRtAtc .alert").removeClass("hide")) : (t = "báº¡n ", i = parseInt($(".bRtAtc .ifRtGd").attr("data-val")), i == 1 ? t = "anh " : i == 2 && (t = "chá»‹ "), r = $.trim($(".bRtAtc [name=txtFullName]").val()), $(".bRtAtc .alert").html("CĂ¡m Æ¡n " + t + r + " Ä‘Ă£ Ä‘Ă¡nh giĂ¡"), $(".bRtAtc .alert").removeClass("hide").addClass("rtSuccess"), setTimeout(function () {
                $(".bRtAtc").addClass("hide");
                $(".boxRtAtc .likewied .messenger").removeClass("act");
                $(".boxRtAtc .likewied .messenger b").removeClass("iconcom-unlikeAtc").addClass("iconcom-likeAtc");
                $(".bRtAtc .alert").removeClass("rtSuccess").addClass("hide");
                resetRatingArticle()
            }, 2e3)), gl_sendRating = !1)
        }, function () {}, !0)
    }
}

function validateRatingArticle() {
    var n = $.trim($(".bRtAtc [name=txtContent]").val());
    return n == null || n == "" ? ($(".bRtAtc .alert").html("Vui lĂ²ng nháº­p ná»™i dung Ä‘Ă¡nh giĂ¡ bĂ i viáº¿t sáº£n pháº©m"), !1) : !0
}

function resetRatingArticle() {
    $(".bRtAtc [name=txtContent]").val("");
    $(".ifRtGd").attr("data-val", 0);
    $(".bRtAtc [name=txtFullName]").val("");
    $(".bRtAtc [name=txtPhoneNumber]").val("");
    $(".bRtAtc [name=txtEmail]").val("");
    $(".bRtAtc label").removeClass("choosed")
}

function showRatingAtc() {
    $(".bifRtCt").removeClass("hide");
    $(".boxRtAtc .likewied .messenger").addClass("act");
    $(".boxRtAtc .likewied .messenger b").addClass("iconcom-unlikeAtc")
}

function openRtGlr() {
    var n = $(".fotorama").fotorama(),
        t = n.data("fotorama");
    t.destroy();
    $(".wrap_rtglr").removeClass("hide");
    $(".slide_FT").html("");
    $(".bRtGlr").removeClass("hide")
}

function closeRtGlr() {
    $(".wrap_rtglr").removeClass("hide").addClass("hide")
}

function satisRtGlr() {
    $(".boxRatingGlr .hd b").removeClass("hide");
    setTimeout(function () {
        closeRtGlr();
        $(".boxRatingGlr .hd b").addClass("hide");
        var n = $(".fotorama").fotorama(),
            t = n.data("fotorama");
        t.destroy()
    }, 2e3)
}

function sendRatingGallery() {
    if (console.log("t-3"), !gl_sendRating) {
        if (gl_sendRating = !0, !validateRatingGallery()) {
            gl_sendRating = !1;
            return
        }
        var n = $.trim($(".bRtGlr [name=txtContent]").val()),
            t = $(".bRtGlr .ifRtGd").attr("data-val"),
            i = $.trim($(".bRtGlr [name=txtFullName]").val()),
            r = $.trim($(".bRtGlr [name=txtPhoneNumber]").val()),
            u = $.trim($(".bRtGlr [name=txtEmail]").val()),
            f = encodeURI(window.location.href),
            e = {
                ct: n,
                name: i,
                phone: r,
                email: u,
                gender: t,
                type: 3,
                productID: productID,
                lnk: f
            };
        POSTAjax("/aj/ProductV4/SubmitRatingArticle/", e, function () {}, function (n) {
            var t, i, r;
            (n != null || n != "") && (n.mes != null && n.mes != "" ? ($(".bRtGlr .alert").html(n.mes), $(".bRtGlr .alert").removeClass("hide")) : (t = "báº¡n ", i = parseInt($(".bRtGlr .ifRtGd").attr("data-val")), i == 1 ? t = "anh " : i == 2 && (t = "chá»‹ "), r = $.trim($(".bRtGlr [name=txtFullName]").val()), $(".bRtGlr .alert").html("CĂ¡m Æ¡n " + t + r + " Ä‘Ă£ Ä‘Ă¡nh giĂ¡."), $(".bRtGlr .alert").removeClass("hide").addClass("rtSuccess"), setTimeout(function () {
                $(".bRtGlr").addClass("hide");
                $(".bRtGlr .likewied .messenger").removeClass("act");
                $(".bRtGlr .likewied .messenger b").removeClass("iconcom-unlikeAtc").addClass("iconcom-likeAtc");
                closeRtGlr();
                resetRatingGallery()
            }, 2e3)), gl_sendRating = !1)
        }, function () {}, !0)
    }
}

function validateRatingGallery() {
    var n = $.trim($(".bRtGlr [name=txtContent]").val());
    return n == null || n == "" ? ($(".bRtGlr .alert").html("Vui lĂ²ng nháº­p ná»™i dung Ä‘Ă¡nh giĂ¡ bá»™ hĂ¬nh sáº£n pháº©m"), !1) : !0
}

function resetRatingGallery() {
    $(".bRtGlr [name=txtContent]").val("");
    $(".ifRtGd").attr("data-val", 0);
    $(".bRtGlr [name=txtFullName]").val("");
    $(".bRtGlr [name=txtPhoneNumber]").val("");
    $(".bRtGlr [name=txtEmail]").val("");
    $(".bRtGlr label").removeClass("choosed");
    $(".bRtGlr .alert").html("")
}



function initPage() {
    console.log("initPage")
}

function initLazy() {
    $("img.lazy").lazyload({
        event: "sporty"
    })
}

function trigLazy() {
    isTrigLazy || ($("img.lazy").trigger("sporty"), isTrigLazy = !0)
}

function InitScroll() {
    $(window).scroll(function () {
        
        trigLazy()
    })
}

function loadFeatureSlide() {
    $("#owl-detail").owlCarousel({
        singleItem: !0,
        slideSpeed: 500,
        navigation: !0,
        pagination: !0,
        lazyLoad: !0,
        lazyEffect: !1,
        lazyFollow: !1,
        responsiveRefreshRate: 200,
        stopOnHover: !0,
        autoHeight: !0
    })
}

function loadRtArtSlide() {
    $(".ratingbox").owlCarousel({
        singleItem: !0,
        slideSpeed: 500,
        pagination: !0,
        lazyLoad: !0,
        lazyEffect: !1,
        lazyFollow: !1,
        responsiveRefreshRate: 200,
        stopOnHover: !0,
        autoHeight: !0
    })
}

function loadSpec() {
    $(".viewparameterfull").click(function () {
        $(".fullparameter").css("display") == "block" ? ($(".closebtn").hide(), $(".fullparameter").hide(), $("body").removeClass("fixbody"), $(".fixparameter").remove(), $(".boxtable").removeClass("boxpara")) : ($(".fullparameter").show(), $(".closebtn").show(), $("body").addClass("fixbody"), $("body").prepend('<div class="fixparameter">content<\/div>'), $(".boxtable").addClass("boxpara"))
    });
    $(".closebtn").click(function () {
        $(".viewparameterfull").click();
        $("body").removeClass("fixbody");
        $(".fixparameter").remove();
        $(".closebtn").hide()
    });
    $(document.body).on("click", ".fixparameter", function () {
        $("body").toggleClass("fixbody");
        $(".fixparameter").remove();
        $(".boxtable").removeClass("boxpara");
        $(".viewparameterfull").click()
    });
    $(".characteristics").length == 0 && gl_isAccesory && ($(".tableparameter .viewparameterfull").hide(), $(".fullparameter").hide());
    
    $(".boxnews").length == 0 && $(".viewarticle").hide();
    $(".viewarticle").click(function () {
        $("body").toggleClass("fixbody");
        $(".fixparameter").remove();
        $(".boxtable").removeClass("boxpara");
        $(".viewparameterfull").click();
        $(".firstArticle").length > 0 ? $(".firstArticle").click() : ($("body").prepend('<div id="ajxarticle"><\/div>'), $("body").toggleClass("fixbody"), ArticleDetail())
    });
    checkPinDevice();
    var n = $(".g60_6339 div i").html();
    n != null && n != "" && n.indexOf("há»— trá»£ 4G") > -1 ? $(".liveevent").removeClass("hide") : (n = $(".g6339 div i").html(), n != null && n != "" && n.indexOf("há»— trá»£ 4G") > -1 && $(".liveevent").removeClass("hide"))
}

function getFullSpec(n) {
    if ($(".parameterfull").html() == "") {
        var t = {
            productID: n
        };
        POSTAjax("/aj/ProductV4/GetFullSpec/", t, function () {}, function (n) {
            if (n != null || n != "") try {
                $(".parameterfull").html(n.spec);
                n.imgKit != "" ? $("#imgKit").attr("src", n.imgKit) : $("#imgKit").remove();
                checkPinDevice();
                var t = $(".parameterfull .g43 div").html();
                t = t.replace(/;/g, "<br>");
                $(".parameterfull .g43 div").html(t)
            } catch (i) {}
        }, function () {}, !0)
    }
}

function checkPinDevice() {
    if ($(".g3039").length > 0) {
        var n = $(".g3039 div").html();
        n.indexOf("Wh") > -1 && $(".g3039 span").html("Má»©c nÄƒng lÆ°á»£ng tiĂªu thá»¥")
    }
}

function loadArticle() {
    if ($("article img").attr("style", ""), $(".imgCprW").length > 0 && checkAritcleCompareImg(), $(".boxArticle").length > 0) {
        var t = $(".boxArticle").offset().top,
            i = $("article img").offset().top,
            n = i - t;
        n > 0 && (n = n + 250, $(".area_article").attr("style", "height: " + n + "px;"))
    }
    loadRtArtSlide()
}

function checkAritcleCompareImg() {
    gl_cprImg ? $(".imgCprW").each(function () {
        var n = $(this).attr("id"),
            t = '<img src="' + $(this).attr("data-src1") + '" /> ',
            i = '<img src="' + $(this).attr("data-src2") + '" /> ';
        $(this).html("");
        $(this).append(t);
        $(this).append(i);
        setTimeout(function () {
            $("#" + n).twentytwenty({})
        }, 1e3)
    }) : $.getScript("/Scripts/mobile/jquery.twentytwenty.min.js").done(function () {
        $.getScript("/Scripts/mobile/jquery.event.move.min.js").done(function () {
            gl_cprImg = !0;
            checkAritcleCompareImg()
        })
    })
}

function showArticle() {
    $(".area_article").addClass("area_articleFull");
    $(".area_article").attr("style", "");
    $(".show-more").remove();
    initLazy();
    $("article div.video").each(function () {
        var n = $(this).attr("src"),
            t;
        n != null && n != "" && (t = '<iframe src="' + n + '?rel=0" frameborder="0" allowfullscreen ><\/iframe>', $(this).html(t))
    })
}

function SuggestCompare(n, t) {
    var f = $(n).val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, ""),
        u = f.trim().toLowerCase(),
        i, r;
    if (u.length < 2) {
        $(".wrapper-compare .search-suggestion-list").hide();
        $(".popAddProd").css("height", "250px");
        return
    }
    if (i = ".search-suggestion-list li", t.which == 13 ? $(i + ".selected").find("a").click() : t.which != 40 && t.which != 38 && $.ajax({
            url: "/aj/ProductV4/SuggestCompare",
            type: "GET",
            data: {
                iCategory: GL_CATEGORYID,
                sKeyword: u,
                productid: productID
            },
            cache: !0,
            success: function (n) {
                if (n != null && n != "" && n != "[object XMLDocument]") {
                    var t = "";
                    t = '<div class="search-suggestion-wrapper clearfix"><ul class="search-suggestion-list nolist clearfix">';
                    t += n;
                    t += "<\/ul><\/div>";
                    $(".sggProd").find(".search-suggestion-wrapper").remove();
                    $(".sggProd").append(t);
                    t != "" && $(".popAddProd").css("height", "525px");
                    $(document).click(function (n) {
                        var t = $(n.target);
                        t.is(".search-suggestion-list") || t.is(".search-input-wrapper") || t.is(".search-input-wrapper input") || t.is(".search-suggestion-list li") || t.is(".search-suggestion-list li a") || t.is(".search-suggestion-list li a strong") || $(".search-suggestion-list").hide()
                    })
                }
            }
        }), t.which == 40) {
        $(i + ".selected").length == 0 ? ($(i + ":first").addClass("selected"), $(".sp #inputproduct").val($(i + ":first").text())) : $(i + ".selected").text() == $(i + ":last").text() ? ($(i + ".selected").removeClass("selected"), $(i + ":first").addClass("selected"), $(".sp #inputproduct").val($(i + ":first").text())) : (r = $(i + ".selected").next(), $(i + ".selected").removeClass("selected"), r.addClass("selected"), $(".sp #inputproduct").val(r.text()));
        return
    }
    if (t.which == 38) {
        $(i + ".selected").length == 0 ? ($(i + ":last").addClass("selected"), $(".sp #inputproduct").val($(i + ":last").text())) : $(i + ".selected").text() == $(i + ":first").text() ? ($(i + ".selected").removeClass("selected"), $(i + ":last").addClass("selected"), $(".sp #inputproduct").val($(i + ":last").text())) : (r = $(i + ".selected").prev(), $(i + ".selected").removeClass("selected"), r.addClass("selected"), $(".sp #inputproduct").val(r.text()));
        return
    }
}



function loadGallery() {
    $(".colorandpic ul li").length > 6 && ($(".tabscolor").owlCarousel({
        items: 6,
        navigation: !1,
        pagination: !1
    }), $(".colorandpic div.prev").removeClass("hide"), $(".colorandpic div.next").removeClass("hide"));
    $(".prmImg").click(function () {
        var t = $(this).index(".prmImg"),
            n = $(this).attr("data-prdid");
        PopupGalleryFT(7);
        setTimeout(function () {
            var f, r, e, u;
            if ($("#glrKit").length > 0 && ($("#glrKit a").click(), t > -1 && setTimeout(function () {
                    var t = -1,
                        i, r;
                    $("#sync1 .owl-item").each(function (i) {
                        var r = $(this).find("img").attr("data-id");
                        r == n && (t = i)
                    });
                    t != -1 && (i = "sync1", $("#sync3").length > 0 && (i = "sync3"), r = $("#" + i).data("owlCarousel"), r.jumpTo(t))
                }, 300)), $("#sPicId").length > 0 && (f = $("#sPicId").attr("data-prdid"), r = f.split(";"), r != null && r.length > 0))
                for (i = 0; i < r.length; i++)
                    if (r[i] == n) return e = $(".fotorama").fotorama(), u = e.data("fotorama"), u.requestFullScreen(), u.show(i), !1
        }, 300)
    })
}

function gotoGallery(n, t) {
    n == -1 ? (gl_CurrColor = 0, $(".tabscolor li").first().click()) : n == 1 ? (gl_CurrColor = t, PopupGalleryFT(1)) : PopupGalleryFT(n)
}

function PopupGalleryFT(n) {
    if (gl_lFT) {
        var t = {
            productID: productID,
            imageType: n,
            colorID: gl_CurrColor
        };
        POSTAjax("/aj/ProductV4/GallerySlideFT/", t, function () {}, function (n) {
            if (n != null || n != "") try {
                if (n != null && n != "") {
                    $(".slide_FT").html(n);
                    gl_CurrColor = 0;
                    $("#ajxgallery").remove();
                    $("body").toggleClass("fixbody");
                    $("body").removeClass("fixbody");
                    var t = 0,
                        i = !1;
                    $(".fotorama").on("fotorama:show fotorama:load fotorama:fullscreenexit fotorama:fullscreenenter", function (n, r) {
                        var f, u;
                        $(".caption_ps").hide();
                        i || (r.show(0), r.requestFullScreen(), i = !0);
                        (n.type == "fotorama:show" || n.type == "fotorama:fullscreenenter") && (f = r.activeFrame.i, (t == 1 || f > 0) && (t = 1, u = $(r.activeFrame.html).find(".fb-like"), u != undefined && setTimeout(function () {
                            var n = u.data("url");
                            u.replaceWith('<iframe class="like" src="//www.facebook.com/plugins/like.php?href=' + n + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=20&amp;appId=459645584142044" scrolling="no" frameborder="0" style="border:none;overflow:hidden; width:100%;height:20px;" allowTransparency="true"><\/iframe>');
                            $(".caption_ps").show()
                        }, 1e3)));
                        n.type == "fotorama:load" && setTimeout(function () {
                            $("div.caption_ps").each(function () {
                                var n = $(this).parent().parent().find("img").width() + 2;
                                $(this).width(n).fadeIn(300)
                            })
                        }, 100);
                        n.type == "fotorama:fullscreenexit" && ($("body").click(), $("body").css("background-color", "#fff"), $("body").removeAttr("background-color"), r.destroy(), $(".slide_FT").html(""))
                    }).fotorama()
                }
            } catch (r) {} else $(".slide_FT").html("")
        }, function () {}, !0)
    } else $.getScript("/Scripts/desktop/fotorama.min.js").done(function () {
        gl_lFT = !0;
        PopupGalleryFT(n)
    })
}

function PopupGallery() {
    var n = {
        productID: productID
    };
    POSTAjax("/aj/ProductV4/GetImgProduct_Popup/", n, function () {}, function (n) {
        var i, t;
        if (n != null || n != "") try {
            $("body").prepend('<div id="ajxgallery"><\/div>');
            $("body").toggleClass("fixbody");
            i = '<div class="closegallery">x<\/i><\/div>';
            $("#ajxgallery").append(i);
            t = '<div class="boxpicture">';
            t += n.res;
            t += "<\/div>";
            $("#ajxgallery").append(t);
            $(".contenttab").css("display", "none");
            gl_CurrTypeGlr = 0;
            $("#tgdd360-designGallery").show();
            $("#picture").hide();
            $("#tgdd360-designGallery div").length == 0 && $.getScript("/Scripts/desktop/tgdd.360.js").done(function () {});
            $("#ajxgallery .closegallery").unbind();
            $("#ajxgallery .closegallery").click(function () {
                $("#ajxgallery").remove();
                $("body").toggleClass("fixbody");
                $("body").removeClass("fixbody")
            })
        } catch (r) {}
    }, function () {}, !0)
}

function slideFltNext(n) {
    $(".tabscolor").owlCarousel();
    var t = $(".tabscolor").data("owlCarousel");
    n == 1 ? t.next() : t.prev()
}

function showGalleryPS() {
    gotoGallery(7, 0)
}

function checkHashTag() {
    if (window.location.hash) {
        var n = window.location.hash.substring(1);
        console.log("#" + n);
        (n == "danhgia" || n == "DANHGIA") && setTimeout(function () {
            $("html, body").animate({
                scrollTop: $("#danhgia").offset().top
            }, 500)
        }, 2e3);
        n.indexOf("cmtdtl") != -1 && (console.log("#" + n), $("html, body").animate({
            scrollTop: $("#comment").offset().top
        }, 500), setTimeout(function () {
            var i = n.replace("cmtdtl", ""),
                t;
            $(".cmtKey").val(i);
            t = $.Event("keyup");
            t.keyCode = 13;
            $(".cmtKey").trigger(t);
            $(".cmtKey").val(i);
            setTimeout(function () {
                $(".cmtKey").val("")
            }, 1e3)
        }, 1e3));
        n.indexOf("cmthl") != -1 && (console.log("#" + n), $("html, body").animate({
            scrollTop: $("#comment").offset().top
        }, 500), setTimeout(function () {
            var t = n.replace("cmthl", ""),
                i;
            $(".cmtKey").val(t);
            i = $.Event("keyup");
            i.keyCode = 13;
            $(".cmtKey").trigger(i);
            $(".cmtKey").val(t);
            setTimeout(function () {
                $(".cmtKey").val("");
                satisfiedCmt(t)
            }, 1e3)
        }, 1e3));
        n.indexOf("cmtkhl") != -1 && (console.log("#" + n), $("html, body").animate({
            scrollTop: $("#comment").offset().top
        }, 500), setTimeout(function () {
            var t = n.replace("cmtkhl", ""),
                i;
            $(".cmtKey").val(t);
            i = $.Event("keyup");
            i.keyCode = 13;
            $(".cmtKey").trigger(i);
            $(".cmtKey").val(t);
            setTimeout(function () {
                $(".cmtKey").val("");
                unsatisfiedCmt(t);
                $(".wrap_comment").attr("style", "min-height:720px;")
            }, 1e3)
        }, 2e3))
    }
}

function initAcc() {
    $(".boxArticle").length == 0 && $(".left_content .accessories").addClass("bordernone");
    $(".boxRatingCmt").length > 0 && $(".accessories ").addClass("borderBot")
}

function checkHaNoi() {
    getCookie("tgdd_province_hanoi") == undefined && setTimeout(function () {
        POSTAjax("/aj/order/checkiphanoi", {}, BeforeSendAjax, function (n) {
            n == "True" && $(".quahanoi").show();
            EndSendAjax()
        }, ErrorAjax, !0)
    }, 5e3)
}

function ClickDis() {
    $(".checkexist .listdist .scroll a").click(function () {
        $(".checkexist .dist span").html($(this).text());
        $("#DistricId").val($(this).attr("data-value"));
        $(".listdist").slideToggle();
        CheckStockLoadStore()
    })
}

function CheckStockLoadStore() {
    $(".checkexist .listcolor li").length > 1 && $(".resultcheck").show();
    $(".listmarket").show();
    $(".listmarket  .listst").html("<a ><div>Äang táº£i dá»¯ liá»‡u...<\/div><\/a>");
    POSTAjax("/aj/OrderV4/LoadStoreByFilter", {
        iProvince: $("#ProvinceId").val(),
        iProductID: productID,
        iDistrict: $("#DistricId").val(),
        sProCode: $("#ProductCode").val(),
        clearcache: clearcache
    }, BeforeSendAjax, function (n) {
        $(".listmarket  .listst").html(n);
        $(".checkexist .listmarket .oldstore").length == 1 ? $(".checkexist .listmarket strong").hide() : $(".checkexist .listmarket strong").show();
        $(".listmarket .buynowpop").addClass("buydisable");
        $(".listst li").click(function () {
            $("#StoreId").val($(this).attr("data-id"));
            $("#ProvinceId").val($(this).attr("data-pro"));
            $("#DistricId").val($(this).attr("data-dis"));
            $("#IsStock").val($(this).find("label").hasClass("yes"));
            $("#StockStatus").val($(this).find("label").text());
            $(".listst li").removeClass("choosemarket");
            $(".listmarket .buynowpop").removeClass("buydisable");
            $(this).addClass("choosemarket");
            $(".btn_store").click()
        });
        $(".listst .viewmorest").click(function () {
            $(this).hide();
            $(this).next().removeClass("none");
            $(this).next().next().removeClass("none");
            $(this).next().next().next().removeClass("none");
            $(this).next().next().next().next().removeClass("none");
            $(this).next().next().next().next().next().removeClass("none");
            $(this).next().next().next().next().next().next().removeClass("none")
        });
        EndSendAjax()
    }, ErrorAjax, !0)
}

function locdau(n) {
    return n = n.replace(/Ă |Ă¡|áº¡|áº£|Ă£|Ă¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g, "a"), n = n.replace(/Ă¨|Ă©|áº¹|áº»|áº½|Ăª|á»|áº¿|á»‡|á»ƒ|á»…/g, "e"), n = n.replace(/Ă¬|Ă­|á»‹|á»‰|Ä©/g, "i"), n = n.replace(/Ă²|Ă³|á»|á»|Ăµ|Ă´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g, "o"), n = n.replace(/Ă¹|Ăº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, "u"), n = n.replace(/á»³|Ă½|á»µ|á»·|á»¹/g, "y"), n = n.replace(/Ä‘/g, "d"), n = n.replace(/Ă€|Ă|áº |áº¢|Ăƒ|Ă‚|áº¦|áº¤|áº¬|áº¨|áºª|Ä‚|áº°|áº®|áº¶|áº²|áº´/g, "A"), n = n.replace(/Ăˆ|Ă‰|áº¸|áºº|áº¼|Ă|á»€|áº¾|á»†|á»‚|á»„/g, "E"), n = n.replace(/ĂŒ|Ă|á»|á»ˆ|Ä¨/g, "I"), n = n.replace(/Ă’|Ă“|á»Œ|á»|Ă•|Ă”|á»’|á»|á»˜|á»”|á»–|Æ |á»œ|á»|á»¢|á»|á» /g, "O"), n = n.replace(/Ă™|Ă|á»¤|á»¦|Å¨|Æ¯|á»ª|á»¨|á»°|á»¬|á»®/g, "U"), n = n.replace(/á»²|Ă|á»´|á»¶|á»¸/g, "Y"), n.replace(/Ä/g, "D")
}
var lastSuggest, timmer, gl_fLoadChat, gl_ifcH, gl_prevScore, gl_sendRating, gl_isFeedbackLoad, isSendFback, isTrigLazy, gl_cprImg, flsc, gl_lFT, f_sttk;
(function (n, t) {
    function hf(n) {
        var t = yt[n] = {};
        return i.each(n.split(h), function (n, i) {
            t[i] = !0
        }), t
    }

    function li(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(ci, "-$1").toLowerCase();
            if (u = n.getAttribute(f), typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : +u + "" === u ? +u : hi.test(u) ? i.parseJSON(u) : u
                } catch (e) {}
                i.data(n, r, u)
            } else u = t
        }
        return u
    }

    function pt(n) {
        for (var t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
        return !0
    }

    function v() {
        return !1
    }

    function it() {
        return !0
    }

    function k(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11
    }

    function nr(n, t) {
        do n = n[t]; while (n && n.nodeType !== 1);
        return n
    }

    function tr(n, t, r) {
        if (t = t || 0, i.isFunction(t)) return i.grep(n, function (n, i) {
            var u = !!t.call(n, i, n);
            return u === r
        });
        if (t.nodeType) return i.grep(n, function (n) {
            return n === t === r
        });
        if (typeof t == "string") {
            var u = i.grep(n, function (n) {
                return n.nodeType === 1
            });
            if (df.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 === r
        })
    }

    function ir(n) {
        var i = rr.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length) t.createElement(i.pop());
        return t
    }

    function oe(n, t) {
        return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
    }

    function hr(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var u, f, o, s = i._data(n),
                r = i._data(t, s),
                e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0, o = e[u].length; f < o; f++) i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }

    function cr(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : r === "input" && er.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : r === "option" ? t.selected = n.defaultSelected : r === "input" || r === "textarea" ? t.defaultValue = n.defaultValue : r === "script" && t.text !== n.text && (t.text = n.text), t.removeAttribute(i.expando))
    }

    function rt(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }

    function lr(n) {
        er.test(n.type) && (n.defaultChecked = n.checked)
    }

    function pr(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = yr.length; i--;)
            if (t = yr[i] + r, t in n) return t;
        return u
    }

    function ft(n, t) {
        return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
    }

    function wr(n, t) {
        for (var r, o, e = [], f = 0, s = n.length; f < s; f++)(r = n[f], r.style) && (e[f] = i._data(r, "olddisplay"), t ? (e[f] || r.style.display !== "none" || (r.style.display = ""), r.style.display === "" && ft(r) && (e[f] = i._data(r, "olddisplay", gr(r.nodeName)))) : (o = u(r, "display"), e[f] || o === "none" || i._data(r, "olddisplay", o)));
        for (f = 0; f < s; f++)(r = n[f], r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[f] || "" : "none"));
        return n
    }

    function br(n, t, i) {
        var r = le.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function kr(n, t, r, f) {
        for (var e = r === (f ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + c[e], !0)), f ? (r === "content" && (o -= parseFloat(u(n, "padding" + c[e])) || 0), r !== "margin" && (o -= parseFloat(u(n, "border" + c[e] + "Width")) || 0)) : (o += parseFloat(u(n, "padding" + c[e])) || 0, r !== "padding" && (o += parseFloat(u(n, "border" + c[e] + "Width")) || 0));
        return o
    }

    function dr(n, t, r) {
        var f = t === "width" ? n.offsetWidth : n.offsetHeight,
            e = !0,
            o = i.support.boxSizing && i.css(n, "boxSizing") === "border-box";
        if (f <= 0 || f == null) {
            if (f = u(n, t), (f < 0 || f == null) && (f = n.style[t]), ut.test(f)) return f;
            e = o && (i.support.boxSizingReliable || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + kr(n, t, r || (o ? "border" : "content"), e) + "px"
    }

    function gr(n) {
        if (ni[n]) return ni[n];
        var f = i("<" + n + ">").appendTo(r.body),
            t = f.css("display");
        return f.remove(), (t === "none" || t === "") && (y = r.body.appendChild(y || i.extend(r.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), p && y.createElement || (p = (y.contentWindow || y.contentDocument).document, p.write("<!doctype html><html><body>"), p.close()), f = p.body.appendChild(p.createElement(n)), t = u(f, "display"), r.body.removeChild(y)), ni[n] = t, t
    }

    function ti(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function (t, i) {
            r || we.test(n) ? u(n, i) : ti(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (f in t) ti(n + "[" + f + "]", t[f], r, u)
    }

    function eu(n) {
        return function (t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, o, f, s = t.toLowerCase().split(h),
                e = 0,
                c = s.length;
            if (i.isFunction(r))
                for (; e < c; e++) u = s[e], f = /^\+/.test(u), f && (u = u.substr(1) || "*"), o = n[u] = n[u] || [], o[f ? "unshift" : "push"](r)
        }
    }

    function et(n, i, r, u, f, e) {
        f = f || i.dataTypes[0];
        e = e || {};
        e[f] = !0;
        for (var o, s = n[f], h = 0, l = s ? s.length : 0, c = n === ii; h < l && (c || !o); h++) o = s[h](i, r, u), typeof o == "string" && (!c || e[o] ? o = t : (i.dataTypes.unshift(o), o = et(n, i, r, u, o, e)));
        return !c && o || e["*"] || (o = et(n, i, r, u, "*", e)), o
    }

    function ou(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }

    function uo(n, i, r) {
        var o, u, e, s, h = n.contents,
            f = n.dataTypes,
            c = n.responseFields;
        for (u in c) u in r && (i[c[u]] = r[u]);
        while (f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)
            for (u in h)
                if (h[u] && h[u].test(o)) {
                    f.unshift(u);
                    break
                }
        if (f[0] in r) e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                s || (s = u)
            }
            e = e || s
        }
        if (e) return e !== f[0] && f.unshift(e), r[e]
    }

    function fo(n, t) {
        var i, o, r, e, s = n.dataTypes.slice(),
            f = s[0],
            u = {},
            h = 0;
        if (n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1])
            for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
        for (; r = s[++h];)
            if (r !== "*") {
                if (f !== "*" && f !== r) {
                    if (i = u[f + " " + r] || u["* " + r], !i)
                        for (o in u)
                            if (e = o.split(" "), e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]], i)) {
                                i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0], s.splice(h--, 0, r));
                                break
                            }
                    if (i !== !0)
                        if (i && n.throws) t = i(t);
                        else try {
                            t = i(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: i ? c : "No conversion from " + f + " to " + r
                            }
                        }
                }
                f = r
            }
        return {
            state: "success",
            data: t
        }
    }

    function cu() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }

    function so() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function lu() {
        return setTimeout(function () {
            b = t
        }, 0), b = i.now()
    }

    function ao(n, t) {
        i.each(t, function (t, i) {
            for (var u = (d[t] || []).concat(d["*"]), r = 0, f = u.length; r < f; r++)
                if (u[r].call(n, t, i)) return
        })
    }

    function au(n, t, r) {
        var e, o = 0,
            c = ct.length,
            f = i.Deferred().always(function () {
                delete h.elem
            }),
            h = function () {
                for (var o = b || lu(), t = Math.max(0, u.startTime + u.duration - o), s = t / u.duration || 0, i = 1 - s, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: b || lu(),
                duration: r.duration,
                tweens: [],
                createTween: function (t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function (t) {
                    for (var i = 0, r = t ? u.tweens.length : 0; i < r; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                }
            }),
            s = u.props;
        for (vo(s, u.opts.specialEasing); o < c; o++)
            if (e = ct[o].call(u, n, s, u.opts), e) return e;
        return ao(u, s), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(h, {
            anim: u,
            queue: u.opts.queue,
            elem: n
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function vo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function yo(n, t, r) {
        var o, u, a, v, s, y, l, f, b, h = this,
            e = n.style,
            p = {},
            w = [],
            c = n.nodeType && ft(n);
        r.queue || (f = i._queueHooks(n, "fx"), f.unqueued == null && (f.unqueued = 0, b = f.empty.fire, f.empty.fire = function () {
            f.unqueued || b()
        }), f.unqueued++, h.always(function () {
            h.always(function () {
                f.unqueued--;
                i.queue(n, "fx").length || f.empty.fire()
            })
        }));
        n.nodeType === 1 && ("height" in t || "width" in t) && (r.overflow = [e.overflow, e.overflowX, e.overflowY], i.css(n, "display") === "inline" && i.css(n, "float") === "none" && (i.support.inlineBlockNeedsLayout && gr(n.nodeName) !== "inline" ? e.zoom = 1 : e.display = "inline-block"));
        r.overflow && (e.overflow = "hidden", i.support.shrinkWrapBlocks || h.done(function () {
            e.overflow = r.overflow[0];
            e.overflowX = r.overflow[1];
            e.overflowY = r.overflow[2]
        }));
        for (o in t)
            if (a = t[o], ho.exec(a)) {
                if (delete t[o], y = y || a === "toggle", a === (c ? "hide" : "show")) continue;
                w.push(o)
            }
        if (v = w.length, v)
            for (s = i._data(n, "fxshow") || i._data(n, "fxshow", {}), ("hidden" in s) && (c = s.hidden), y && (s.hidden = !c), c ? i(n).show() : h.done(function () {
                    i(n).hide()
                }), h.done(function () {
                    var t;
                    i.removeData(n, "fxshow", !0);
                    for (t in p) i.style(n, t, p[t])
                }), o = 0; o < v; o++) u = w[o], l = h.createTween(u, c ? s[u] : 0), p[u] = s[u] || i.style(n, u), u in s || (s[u] = l.start, c && (l.end = l.start, l.start = u === "width" || u === "height" ? 1 : 0))
    }

    function f(n, t, i, r, u) {
        return new f.prototype.init(n, t, i, r, u)
    }

    function lt(n, t) {
        var r, i = {
                height: n
            },
            u = 0;
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = c[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function vu(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    var ui, g, r = n.document,
        yu = n.location,
        pu = n.navigator,
        wu = n.jQuery,
        bu = n.$,
        fi = Array.prototype.push,
        o = Array.prototype.slice,
        ei = Array.prototype.indexOf,
        ku = Object.prototype.toString,
        at = Object.prototype.hasOwnProperty,
        vt = String.prototype.trim,
        i = function (n, t) {
            return new i.fn.init(n, t, ui)
        },
        nt = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        du = /\S/,
        h = /\s+/,
        gu = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        nf = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        oi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        tf = /^[\],:{}\s]*$/,
        rf = /(?:^|:|,)(?:\s*\[)+/g,
        uf = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ff = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        ef = /^-ms-/,
        of = /-([\da-z])/gi,
        sf = function (n, t) {
            return (t + "").toUpperCase()
        },
        tt = function () {
            r.addEventListener ? (r.removeEventListener("DOMContentLoaded", tt, !1), i.ready()) : r.readyState === "complete" && (r.detachEvent("onreadystatechange", tt), i.ready())
        },
        si = {},
        yt, hi, ci, w, st, hu, ri;
    i.fn = i.prototype = {
        constructor: i,
        init: function (n, u, f) {
            var e, o, s;
            if (!n) return this;
            if (n.nodeType) return this.context = this[0] = n, this.length = 1, this;
            if (typeof n == "string") {
                if (e = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : nf.exec(n), e && (e[1] || !u)) {
                    if (e[1]) return u = u instanceof i ? u[0] : u, s = u && u.nodeType ? u.ownerDocument || u : r, n = i.parseHTML(e[1], s, !0), oi.test(e[1]) && i.isPlainObject(u) && this.attr.call(n, u, !0), i.merge(this, n);
                    if (o = r.getElementById(e[2]), o && o.parentNode) {
                        if (o.id !== e[2]) return f.find(n);
                        this.length = 1;
                        this[0] = o
                    }
                    return this.context = r, this.selector = n, this
                }
                return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
            }
            return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return o.call(this)
        },
        get: function (n) {
            return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
        },
        pushStack: function (n, t, r) {
            var u = i.merge(this.constructor(), n);
            return u.prevObject = this, u.context = this.context, t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"), u
        },
        each: function (n, t) {
            return i.each(this, n, t)
        },
        ready: function (n) {
            return i.ready.promise().done(n), this
        },
        eq: function (n) {
            return n = +n, n === -1 ? this.slice(n) : this.slice(n, n + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments), "slice", o.call(arguments).join(","))
        },
        map: function (n) {
            return this.pushStack(i.map(this, function (t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: fi,
        sort: [].sort,
        splice: [].splice
    };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function () {
        var o, e, u, r, s, h, n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            c = !1;
        for (typeof n == "boolean" && (c = n, n = arguments[1] || {}, f = 2), typeof n == "object" || i.isFunction(n) || (n = {}), l === f && (n = this, --f); f < l; f++)
            if ((o = arguments[f]) != null)
                for (e in o)(u = n[e], r = o[e], n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
        return n
    };
    i.extend({
        noConflict: function (t) {
            return n.$ === i && (n.$ = bu), t && n.jQuery === i && (n.jQuery = wu), i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function (n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!r.body) return setTimeout(i.ready, 1);
                (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (g.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"))
            }
        },
        isFunction: function (n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray || function (n) {
            return i.type(n) === "array"
        },
        isWindow: function (n) {
            return n != null && n == n.window
        },
        isNumeric: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function (n) {
            return n == null ? String(n) : si[ku.call(n)] || "object"
        },
        isPlainObject: function (n) {
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !at.call(n, "constructor") && !at.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (u) {
                return !1
            }
            for (var r in n);
            return r === t || at.call(n, r)
        },
        isEmptyObject: function (n) {
            for (var t in n) return !1;
            return !0
        },
        error: function (n) {
            throw new Error(n);
        },
        parseHTML: function (n, t, u) {
            var f;
            return !n || typeof n != "string" ? null : (typeof t == "boolean" && (u = t, t = 0), t = t || r, f = oi.exec(n)) ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, u ? null : []), i.merge([], (f.cacheable ? i.clone(f.fragment) : f.fragment).childNodes))
        },
        parseJSON: function (t) {
            if (!t || typeof t != "string") return null;
            if (t = i.trim(t), n.JSON && n.JSON.parse) return n.JSON.parse(t);
            if (tf.test(t.replace(uf, "@").replace(ff, "]").replace(rf, ""))) return new Function("return " + t)();
            i.error("Invalid JSON: " + t)
        },
        parseXML: function (r) {
            var u, f;
            if (!r || typeof r != "string") return null;
            try {
                n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
            } catch (e) {
                u = t
            }
            return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r), u
        },
        noop: function () {},
        globalEval: function (t) {
            t && du.test(t) && (n.execScript || function (t) {
                n.eval.call(n, t)
            })(t)
        },
        camelCase: function (n) {
            return n.replace(ef, "ms-").replace( of , sf)
        },
        nodeName: function (n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (n, r, u) {
            var f, e = 0,
                o = n.length,
                s = o === t || i.isFunction(n);
            if (u) {
                if (s) {
                    for (f in n)
                        if (r.apply(n[f], u) === !1) break
                } else
                    for (; e < o;)
                        if (r.apply(n[e++], u) === !1) break
            } else if (s) {
                for (f in n)
                    if (r.call(n[f], f, n[f]) === !1) break
            } else
                for (; e < o;)
                    if (r.call(n[e], e, n[e++]) === !1) break;
            return n
        },
        trim: vt && !vt.call("ï»¿Â ") ? function (n) {
            return n == null ? "" : vt.call(n)
        } : function (n) {
            return n == null ? "" : (n + "").replace(gu, "")
        },
        makeArray: function (n, t) {
            var r, u = t || [];
            return n != null && (r = i.type(n), n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? fi.call(u, n) : i.merge(u, n)), u
        },
        inArray: function (n, t, i) {
            var r;
            if (t) {
                if (ei) return ei.call(t, n, i);
                for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                    if (i in t && t[i] === n) return i
            }
            return -1
        },
        merge: function (n, i) {
            var f = i.length,
                u = n.length,
                r = 0;
            if (typeof f == "number")
                for (; r < f; r++) n[u++] = i[r];
            else
                while (i[r] !== t) n[u++] = i[r++];
            return n.length = u, n
        },
        grep: function (n, t, i) {
            var u, f = [],
                r = 0,
                e = n.length;
            for (i = !!i; r < e; r++) u = !!t(n[r], r), i !== u && f.push(n[r]);
            return f
        },
        map: function (n, r, u) {
            var f, h, e = [],
                s = 0,
                o = n.length,
                c = n instanceof i || o !== t && typeof o == "number" && (o > 0 && n[0] && n[o - 1] || o === 0 || i.isArray(n));
            if (c)
                for (; s < o; s++) f = r(n[s], s, u), f != null && (e[e.length] = f);
            else
                for (h in n) f = r(n[h], h, u), f != null && (e[e.length] = f);
            return e.concat.apply([], e)
        },
        guid: 1,
        proxy: function (n, r) {
            var f, e, u;
            return (typeof r == "string" && (f = n[r], r = n, n = f), !i.isFunction(n)) ? t : (e = o.call(arguments, 2), u = function () {
                return n.apply(r, e.concat(o.call(arguments)))
            }, u.guid = n.guid = n.guid || i.guid++, u)
        },
        access: function (n, r, u, f, e, o, s) {
            var c, l = u == null,
                h = 0,
                a = n.length;
            if (u && typeof u == "object") {
                for (h in u) i.access(n, r, h, u[h], 1, o, f);
                e = 1
            } else if (f !== t) {
                if (c = s === t && i.isFunction(f), l && (c ? (c = r, r = function (n, t, r) {
                        return c.call(i(n), r)
                    }) : (r.call(n, f), r = null)), r)
                    for (; h < a; h++) r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
                e = 1
            }
            return e ? n : l ? r.call(n) : a ? r(n[0], u) : o
        },
        now: function () {
            return (new Date).getTime()
        }
    });
    i.ready.promise = function (t) {
        if (!g)
            if (g = i.Deferred(), r.readyState === "complete") setTimeout(i.ready, 1);
            else if (r.addEventListener) r.addEventListener("DOMContentLoaded", tt, !1), n.addEventListener("load", i.ready, !1);
        else {
            r.attachEvent("onreadystatechange", tt);
            n.attachEvent("onload", i.ready);
            var u = !1;
            try {
                u = n.frameElement == null && r.documentElement
            } catch (e) {}
            u && u.doScroll && function f() {
                if (!i.isReady) {
                    try {
                        u.doScroll("left")
                    } catch (n) {
                        return setTimeout(f, 50)
                    }
                    i.ready()
                }
            }()
        }
        return g.promise(t)
    };
    i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (n, t) {
        si["[object " + t + "]"] = t.toLowerCase()
    });
    ui = i(r);
    yt = {};
    i.Callbacks = function (n) {
        n = typeof n == "string" ? yt[n] || hf(n) : i.extend({}, n);
        var f, c, o, l, s, e, r = [],
            u = !n.once && [],
            a = function (t) {
                for (f = n.memory && t, c = !0, e = l || 0, l = 0, s = r.length, o = !0; r && e < s; e++)
                    if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                        f = !1;
                        break
                    }
                o = !1;
                r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
            },
            h = {
                add: function () {
                    if (r) {
                        var t = r.length;
                        (function u(t) {
                            i.each(t, function (t, f) {
                                var e = i.type(f);
                                e === "function" ? n.unique && h.has(f) || r.push(f) : f && f.length && e !== "string" && u(f)
                            })
                        })(arguments);
                        o ? s = r.length : f && (l = t, a(f))
                    }
                    return this
                },
                remove: function () {
                    return r && i.each(arguments, function (n, t) {
                        for (var u;
                            (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), o && (u <= s && s--, u <= e && e--)
                    }), this
                },
                has: function (n) {
                    return i.inArray(n, r) > -1
                },
                empty: function () {
                    return r = [], this
                },
                disable: function () {
                    return r = u = f = t, this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return u = t, f || h.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (n, t) {
                    return t = t || [], t = [n, t.slice ? t.slice() : t], r && (!c || u) && (o ? u.push(t) : a(t)), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!c
                }
            };
        return h
    };
    i.extend({
        Deferred: function (n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]],
                f = "pending",
                r = {
                    state: function () {
                        return f
                    },
                    always: function () {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var n = arguments;
                        return i.Deferred(function (r) {
                            i.each(u, function (u, f) {
                                var e = f[0],
                                    o = n[u];
                                t[f[1]](i.isFunction(o) ? function () {
                                    var n = o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[e + "With"](this === t ? r : this, [n])
                                } : r[e])
                            });
                            n = null
                        }).promise()
                    },
                    promise: function (n) {
                        return n != null ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function (n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function () {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock);
                t[i[0]] = e.fire;
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function (n) {
            var t = 0,
                u = o.call(arguments),
                r = u.length,
                e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
                f = e === 1 ? n : i.Deferred(),
                c = function (n, t, i) {
                    return function (r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? o.call(arguments) : r;
                        i === s ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                },
                s, l, h;
            if (r > 1)
                for (s = new Array(r), l = new Array(r), h = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(c(t, h, u)).fail(f.reject).progress(c(t, l, s)) : --e;
            return e || f.resolveWith(h, u), f.promise()
        }
    });
    i.support = function () {
        var u, h, e, c, l, f, o, a, v, s, y, t = r.createElement("div");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", h = t.getElementsByTagName("*"), e = t.getElementsByTagName("a")[0], !h || !e || !h.length) return {};
        c = r.createElement("select");
        l = c.appendChild(r.createElement("option"));
        f = t.getElementsByTagName("input")[0];
        e.style.cssText = "top:1px;float:left;opacity:.5";
        u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.5/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: l.selected,
            getSetAttribute: t.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>",
            boxModel: r.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        f.checked = !0;
        u.noCloneChecked = f.cloneNode(!0).checked;
        c.disabled = !0;
        u.optDisabled = !l.disabled;
        try {
            delete t.test
        } catch (p) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", y = function () {
                u.noCloneEvent = !1
            }), t.cloneNode(!0).fireEvent("onclick"), t.detachEvent("onclick", y)), f = r.createElement("input"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = f.value === "t", f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), t.appendChild(f), o = r.createDocumentFragment(), o.appendChild(t.lastChild), u.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, o.removeChild(f), o.appendChild(t), t.attachEvent)
            for (v in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) a = "on" + v, s = a in t, s || (t.setAttribute(a, "return;"), s = typeof t[a] == "function"), u[v + "Bubbles"] = s;
        return i(function () {
            var i, t, f, e, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                o = r.getElementsByTagName("body")[0];
            o && (i = r.createElement("div"), i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", o.insertBefore(i, o.firstChild), t = r.createElement("div"), i.appendChild(t), t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", f = t.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", s = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", u.reliableHiddenOffsets = s && f[0].offsetHeight === 0, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", u.boxSizing = t.offsetWidth === 4, u.doesNotIncludeMarginInBodyOffset = o.offsetTop !== 1, n.getComputedStyle && (u.pixelPosition = (n.getComputedStyle(t, null) || {}).top !== "1%", u.boxSizingReliable = (n.getComputedStyle(t, null) || {
                width: "4px"
            }).width === "4px", e = r.createElement("div"), e.style.cssText = t.style.cssText = h, e.style.marginRight = e.style.width = "0", t.style.width = "1px", t.appendChild(e), u.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null) || {}).marginRight)), typeof t.style.zoom != "undefined" && (t.innerHTML = "", t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", u.inlineBlockNeedsLayout = t.offsetWidth === 3, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div><\/div>", t.firstChild.style.width = "5px", u.shrinkWrapBlocks = t.offsetWidth !== 3, i.style.zoom = 1), o.removeChild(i), i = t = f = e = null)
        }), o.removeChild(t), h = e = c = l = f = o = t = null, u
    }();
    hi = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    ci = /([A-Z])/g;
    i.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !pt(n)
        },
        data: function (n, r, u, f) {
            if (i.acceptData(n)) {
                var s, h, c = i.expando,
                    a = typeof r == "string",
                    l = n.nodeType,
                    o = l ? i.cache : n,
                    e = l ? n[c] : n[c] && c;
                if (e && o[e] && (f || o[e].data) || !a || u !== t) return e || (l ? n[c] = e = i.deletedIds.pop() || i.guid++ : e = c), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a ? (h = s[r], h == null && (h = s[i.camelCase(r)])) : h = s, h
            }
        },
        removeData: function (n, t, r) {
            if (i.acceptData(n)) {
                var e, o, h, s = n.nodeType,
                    u = s ? i.cache : n,
                    f = s ? n[i.expando] : i.expando;
                if (u[f]) {
                    if (t && (e = r ? u[f] : u[f].data, e)) {
                        for (i.isArray(t) || (t in e ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" "))), o = 0, h = t.length; o < h; o++) delete e[t[o]];
                        if (!(r ? pt : i.isEmptyObject)(e)) return
                    }(r || (delete u[f].data, pt(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
                }
            }
        },
        _data: function (n, t, r) {
            return i.data(n, t, r, !0)
        },
        acceptData: function (n) {
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || t !== !0 && n.getAttribute("classid") === t
        }
    });
    i.fn.extend({
        data: function (n, r) {
            var u, s, h, o, l, e = this[0],
                c = 0,
                f = null;
            if (n === t) {
                if (this.length && (f = i.data(e), e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
                    for (h = e.attributes, l = h.length; c < l; c++) o = h[c].name, o.indexOf("data-") || (o = i.camelCase(o.substring(5)), li(e, o, f[o]));
                    i._data(e, "parsedAttrs", !0)
                }
                return f
            }
            return typeof n == "object" ? this.each(function () {
                i.data(this, n)
            }) : (u = n.split(".", 2), u[1] = u[1] ? "." + u[1] : "", s = u[1] + "!", i.access(this, function (r) {
                if (r === t) return f = this.triggerHandler("getData" + s, [u[0]]), f === t && e && (f = i.data(e, n), f = li(e, n, f)), f === t && u[1] ? this.data(u[0]) : f;
                u[1] = r;
                this.each(function () {
                    var t = i(this);
                    t.triggerHandler("setData" + s, u);
                    i.data(this, n, r);
                    t.triggerHandler("changeData" + s, u)
                })
            }, null, r, arguments.length > 1, null, !1))
        },
        removeData: function (n) {
            return this.each(function () {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function (n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
        },
        dequeue: function (n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function () {
                    i.dequeue(n, t)
                };
            u === "inprogress" && (u = r.shift(), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function (n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function () {
                    i.removeData(n, t + "queue", !0);
                    i.removeData(n, r, !0)
                })
            })
        }
    });
    i.fn.extend({
        queue: function (n, r) {
            var u = 2;
            return (typeof n != "string" && (r = n, n = "fx", u--), arguments.length < u) ? i.queue(this[0], n) : r === t ? this : this.each(function () {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n);
                n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n)
            })
        },
        delay: function (n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function (t, i) {
                var r = setTimeout(t, n);
                i.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (n) {
            return this.queue(n || "fx", [])
        },
        promise: function (n, r) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function () {
                    --e || o.resolveWith(f, [f])
                };
            for (typeof n != "string" && (r = n, n = t), n = n || "fx"; s--;) u = i._data(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(r)
        }
    });
    var s, ai, vi, yi = /[\t\r\n]/g,
        cf = /\r/g,
        lf = /^(?:button|input)$/i,
        af = /^(?:button|input|object|select|textarea)$/i,
        vf = /^a(?:rea|)$/i,
        pi = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        wi = i.support.getSetAttribute;
    i.fn.extend({
        attr: function (n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n)
            })
        },
        prop: function (n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function (n) {
            return n = i.propFix[n] || n, this.each(function () {
                try {
                    this[n] = t;
                    delete this[n]
                } catch (i) {}
            })
        },
        addClass: function (n) {
            var r, f, o, t, e, u, s;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string")
                for (r = n.split(h), f = 0, o = this.length; f < o; f++)
                    if (t = this[f], t.nodeType === 1)
                        if (t.className || r.length !== 1) {
                            for (e = " " + t.className + " ", u = 0, s = r.length; u < s; u++) e.indexOf(" " + r[u] + " ") < 0 && (e += r[u] + " ");
                            t.className = i.trim(e)
                        } else t.className = n;
            return this
        },
        removeClass: function (n) {
            var e, r, u, f, s, o, c;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string" || n === t)
                for (e = (n || "").split(h), o = 0, c = this.length; o < c; o++)
                    if (u = this[o], u.nodeType === 1 && u.className) {
                        for (r = (" " + u.className + " ").replace(yi, " "), f = 0, s = e.length; f < s; f++)
                            while (r.indexOf(" " + e[f] + " ") >= 0) r = r.replace(" " + e[f] + " ", " ");
                        u.className = n ? i.trim(r) : ""
                    }
            return this
        },
        toggleClass: function (n, t) {
            var r = typeof n,
                u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function () {
                if (r === "string")
                    for (var f, s = 0, o = i(this), e = t, c = n.split(h); f = c[s++];) e = u ? e : !o.hasClass(f), o[e ? "addClass" : "removeClass"](f);
                else(r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function (n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(yi, " ").indexOf(i) >= 0) return !0;
            return !1
        },
        val: function (n) {
            var r, u, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n), this.each(function (u) {
                var f, o = i(this);
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function (n) {
                    return n == null ? "" : n + ""
                })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t) ? u : (u = f.value, typeof u == "string" ? u.replace(cf, "") : u == null ? "" : u) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function (n) {
                    for (var e, t, o = n.options, r = n.selectedIndex, u = n.type === "select-one" || r < 0, s = u ? null : [], h = u ? r + 1 : o.length, f = r < 0 ? h : u ? r : 0; f < h; f++)
                        if (t = o[f], (t.selected || f === r) && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), u) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function (n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function () {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }), r.length || (n.selectedIndex = -1), r
                }
            }
        },
        attrFn: {},
        attr: function (n, r, u, f) {
            var e, o, h, c = n.nodeType;
            if (n && c !== 3 && c !== 8 && c !== 2) {
                if (f && i.isFunction(i.fn[r])) return i(n)[r](u);
                if (typeof n.getAttribute == "undefined") return i.prop(n, r, u);
                if (h = c !== 1 || !i.isXMLDoc(n), h && (r = r.toLowerCase(), o = i.attrHooks[r] || (pi.test(r) ? ai : s)), u !== t) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return
                    }
                    return o && "set" in o && h && (e = o.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""), u)
                }
                return o && "get" in o && h && (e = o.get(n, r)) !== null ? e : (e = n.getAttribute(r), e === null ? t : e)
            }
        },
        removeAttr: function (n, t) {
            var u, f, r, e, o = 0;
            if (t && n.nodeType === 1)
                for (f = t.split(h); o < f.length; o++) r = f[o], r && (u = i.propFix[r] || r, e = pi.test(r), e || i.attr(n, r, ""), n.removeAttribute(wi ? r : u), e && u in n && (n[u] = !1))
        },
        attrHooks: {
            type: {
                set: function (n, t) {
                    if (lf.test(n.nodeName) && n.parentNode) i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            },
            value: {
                get: function (n, t) {
                    return s && i.nodeName(n, "button") ? s.get(n, t) : t in n ? n.value : null
                },
                set: function (n, t, r) {
                    if (s && i.nodeName(n, "button")) return s.set(n, t, r);
                    n.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (n, r, u) {
            var e, f, s, o = n.nodeType;
            if (n && o !== 3 && o !== 8 && o !== 2) return s = o !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && (e = f.get(n, r)) !== null ? e : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function (n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : af.test(n.nodeName) || vf.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    });
    ai = {
        get: function (n, r) {
            var u, f = i.prop(n, r);
            return f === !0 || typeof f != "boolean" && (u = n.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : t
        },
        set: function (n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())), r
        }
    };
    wi || (vi = {
        name: !0,
        id: !0,
        coords: !0
    }, s = i.valHooks.button = {
        get: function (n, i) {
            var r;
            return r = n.getAttributeNode(i), r && (vi[i] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function (n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i), n.setAttributeNode(u)), u.value = t + ""
        }
    }, i.each(["width", "height"], function (n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function (n, i) {
                if (i === "") return n.setAttribute(t, "auto"), i
            }
        })
    }), i.attrHooks.contenteditable = {
        get: s.get,
        set: function (n, t, i) {
            t === "" && (t = "false");
            s.set(n, t, i)
        }
    });
    i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function (n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function (n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i
            }
        })
    });
    i.support.style || (i.attrHooks.style = {
        get: function (n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function (n, t) {
            return n.style.cssText = t + ""
        }
    });
    i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function (n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }));
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.support.checkOn || i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {
            get: function (n) {
                return n.getAttribute("value") === null ? "on" : n.value
            }
        }
    });
    i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function (n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var wt = /^(?:textarea|input|select)$/i,
        bi = /^([^\.]*|)(?:\.(.+)|)$/,
        yf = /(?:^|\s)hover(\.\S+|)\b/,
        pf = /^key/,
        wf = /^(?:mouse|contextmenu)|click/,
        ki = /^(?:focusinfocus|focusoutblur)$/,
        di = function (n) {
            return i.event.special.hover ? n : n.replace(yf, "mouseenter$1 mouseleave$1")
        };
    i.event = {
        add: function (n, r, u, f, e) {
            var a, s, v, y, p, o, b, l, w, c, h;
            if (n.nodeType !== 3 && n.nodeType !== 8 && r && u && (a = i._data(n))) {
                for (u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), v = a.events, v || (a.events = v = {}), s = a.handle, s || (a.handle = s = function (n) {
                        return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(s.elem, arguments) : t
                    }, s.elem = n), r = i.trim(di(r)).split(" "), y = 0; y < r.length; y++) p = bi.exec(r[y]) || [], o = p[1], b = (p[2] || "").split(".").sort(), h = i.event.special[o] || {}, o = (e ? h.delegateType : h.bindType) || o, h = i.event.special[o] || {}, l = i.extend({
                    type: o,
                    origType: p[1],
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: b.join(".")
                }, w), c = v[o], c || (c = v[o] = [], c.delegateCount = 0, h.setup && h.setup.call(n, f, b, s) !== !1 || (n.addEventListener ? n.addEventListener(o, s, !1) : n.attachEvent && n.attachEvent("on" + o, s))), h.add && (h.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, l) : c.push(l), i.event.global[o] = !0;
                n = null
            }
        },
        global: {},
        remove: function (n, t, r, u, f) {
            var l, p, e, w, h, b, a, v, c, o, s, y = i.hasData(n) && i._data(n);
            if (y && (v = y.events)) {
                for (t = i.trim(di(t || "")).split(" "), l = 0; l < t.length; l++) {
                    if (p = bi.exec(t[l]) || [], e = w = p[1], h = p[2], !e) {
                        for (e in v) i.event.remove(n, e + t[l], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, o = v[e] || [], b = o.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a = 0; a < o.length; a++) s = o[a], (f || w === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(a--, 1), s.selector && o.delegateCount--, c.remove && c.remove.call(n, s));
                    o.length === 0 && b !== o.length && (c.teardown && c.teardown.call(n, h, y.handle) !== !1 || i.removeEvent(n, e, y.handle), delete v[e])
                }
                i.isEmptyObject(v) && (delete y.handle, i.removeData(n, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (u, f, e, o) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var w, d, c, h, l, v, a, y, p, k, s = u.type || u,
                    b = [];
                if (!ki.test(s + i.event.triggered) && (s.indexOf("!") >= 0 && (s = s.slice(0, -1), d = !0), s.indexOf(".") >= 0 && (b = s.split("."), s = b.shift(), b.sort()), e && !i.event.customEvent[s] || i.event.global[s])) {
                    if (u = typeof u == "object" ? u[i.expando] ? u : new i.Event(s, u) : new i.Event(s), u.type = s, u.isTrigger = !0, u.exclusive = d, u.namespace = b.join("."), u.namespace_re = u.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, v = s.indexOf(":") < 0 ? "on" + s : "", !e) {
                        w = i.cache;
                        for (c in w) w[c].events && w[c].events[s] && i.event.trigger(u, f, w[c].handle.elem, !0);
                        return
                    }
                    if (u.result = t, u.target || (u.target = e), f = f != null ? i.makeArray(f) : [], f.unshift(u), a = i.event.special[s] || {}, !a.trigger || a.trigger.apply(e, f) !== !1) {
                        if (p = [[e, a.bindType || s]], !o && !a.noBubble && !i.isWindow(e)) {
                            for (k = a.delegateType || s, h = ki.test(k + s) ? e : e.parentNode, l = e; h; h = h.parentNode) p.push([h, k]), l = h;
                            l === (e.ownerDocument || r) && p.push([l.defaultView || l.parentWindow || n, k])
                        }
                        for (c = 0; c < p.length && !u.isPropagationStopped(); c++) h = p[c][0], u.type = p[c][1], y = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"), y && y.apply(h, f), y = v && h[v], y && i.acceptData(h) && y.apply && y.apply(h, f) === !1 && u.preventDefault();
                        return u.type = s, o || u.isDefaultPrevented() || a._default && a._default.apply(e.ownerDocument, f) !== !1 || s === "click" && i.nodeName(e, "a") || !i.acceptData(e) || v && e[s] && (s !== "focus" && s !== "blur" || u.target.offsetWidth !== 0) && !i.isWindow(e) && (l = e[v], l && (e[v] = null), i.event.triggered = s, e[s](), i.event.triggered = t, l && (e[v] = l)), u.result
                    }
                }
            }
        },
        dispatch: function (r) {
            r = i.event.fix(r || n.event);
            var f, c, e, l, a, h, v, u, s, y = (i._data(this, "events") || {})[r.type] || [],
                p = y.delegateCount,
                k = o.call(arguments),
                d = !r.exclusive && !r.namespace,
                w = i.event.special[r.type] || {},
                b = [];
            if (k[0] = r, r.delegateTarget = this, !w.preDispatch || w.preDispatch.call(this, r) !== !1) {
                if (p && !(r.button && r.type === "click"))
                    for (e = r.target; e != this; e = e.parentNode || this)
                        if (e.disabled !== !0 || r.type !== "click") {
                            for (a = {}, v = [], f = 0; f < p; f++) u = y[f], s = u.selector, a[s] === t && (a[s] = u.needsContext ? i(s, this).index(e) >= 0 : i.find(s, this, null, [e]).length), a[s] && v.push(u);
                            v.length && b.push({
                                elem: e,
                                matches: v
                            })
                        }
                for (y.length > p && b.push({
                        elem: this,
                        matches: y.slice(p)
                    }), f = 0; f < b.length && !r.isPropagationStopped(); f++)
                    for (h = b[f], r.currentTarget = h.elem, c = 0; c < h.matches.length && !r.isImmediatePropagationStopped(); c++) u = h.matches[c], (d || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, l = ((i.event.special[u.origType] || {}).handle || u.handler).apply(h.elem, k), l !== t && (r.result = l, l === !1 && (r.preventDefault(), r.stopPropagation())));
                return w.postDispatch && w.postDispatch.call(this, r), r.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (n, i) {
                var o, u, f, e = i.button,
                    s = i.fromElement;
                return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r, u = o.documentElement, f = o.body, n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0), n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)), !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), n.which || e === t || (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n
            }
        },
        fix: function (n) {
            if (n[i.expando]) return n;
            var f, e, t = n,
                u = i.event.fixHooks[n.type] || {},
                o = u.props ? this.props.concat(u.props) : this.props;
            for (n = i.Event(t), f = o.length; f;) e = o[--f], n[e] = t[e];
            return n.target || (n.target = t.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, u.filter ? u.filter(n, t) : n
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (n, t, r) {
                    i.isWindow(this) && (this.onbeforeunload = r)
                },
                teardown: function (n, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.event.handle = i.event.dispatch;
    i.removeEvent = r.removeEventListener ? function (n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function (n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] == "undefined" && (n[r] = null), n.detachEvent(r, i))
    };
    i.Event = function (n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? it : v) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = it;
            var n = this.originalEvent;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = it;
            var n = this.originalEvent;
            n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it;
            this.stopPropagation()
        },
        isDefaultPrevented: v,
        isPropagationStopped: v,
        isImmediatePropagationStopped: v
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
                var f, e = this,
                    r = n.relatedTarget,
                    u = n.handleObj,
                    o = u.selector;
                return r && (r === e || i.contains(e, r)) || (n.type = u.origType, f = u.handler.apply(this, arguments), n.type = t), f
            }
        }
    });
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function () {
            if (i.nodeName(this, "form")) return !1;
            i.event.add(this, "click._submit keypress._submit", function (n) {
                var u = n.target,
                    r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !i._data(r, "_submit_attached") && (i.event.add(r, "submit._submit", function (n) {
                    n._submit_bubble = !0
                }), i._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function (n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function () {
            if (i.nodeName(this, "form")) return !1;
            i.event.remove(this, "._submit")
        }
    });
    i.support.changeBubbles || (i.event.special.change = {
        setup: function () {
            if (wt.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function (n) {
                n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }), i.event.add(this, "click._change", function (n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0)
            })), !1;
            i.event.add(this, "beforeactivate._change", function (n) {
                var t = n.target;
                wt.test(t.nodeName) && !i._data(t, "_change_attached") && (i.event.add(t, "change._change", function (n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }), i._data(t, "_change_attached", !0))
            })
        },
        handle: function (n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return i.event.remove(this, "._change"), !wt.test(this.nodeName)
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, t) {
        var u = 0,
            f = function (n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0)
            };
        i.event.special[t] = {
            setup: function () {
                u++ == 0 && r.addEventListener(n, f, !0)
            },
            teardown: function () {
                --u == 0 && r.removeEventListener(n, f, !0)
            }
        }
    });
    i.fn.extend({
        on: function (n, r, u, f, e) {
            var o, s;
            if (typeof n == "object") {
                typeof r != "string" && (u = u || r, r = t);
                for (s in n) this.on(s, r, u, n[s], e);
                return this
            }
            if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = v;
            else if (!f) return this;
            return e === 1 && (o = f, f = function (n) {
                return i().off(n), o.apply(this, arguments)
            }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function () {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function (n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function (n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
            if (typeof n == "object") {
                for (e in n) this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = v), this.each(function () {
                i.event.remove(this, n, u, r)
            })
        },
        bind: function (n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function (n, t) {
            return this.off(n, null, t)
        },
        live: function (n, t, r) {
            i(this.context).on(n, this.selector, t, r);
            return this
        },
        die: function (n, t) {
            return i(this.context).off(n, this.selector || "**", t), this
        },
        delegate: function (n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function (n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        },
        trigger: function (n, t) {
            return this.each(function () {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function (n, t) {
            if (this[0]) return i.event.trigger(n, t, this[0], !0)
        },
        toggle: function (n) {
            var t = arguments,
                u = n.guid || i.guid++,
                r = 0,
                f = function (u) {
                    var f = (i._data(this, "lastToggle" + n.guid) || 0) % r;
                    return i._data(this, "lastToggle" + n.guid, f + 1), u.preventDefault(), t[f].apply(this, arguments) || !1
                };
            for (f.guid = u; r < t.length;) t[r++].guid = u;
            return this.click(f)
        },
        hover: function (n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
            i.fn[t] = function (n, i) {
                return i == null && (i = n, n = null), arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            };
            pf.test(t) && (i.event.fixHooks[t] = i.event.keyHooks);
            wf.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
        }),
        function (n, t) {
            function r(n, t, i, r) {
                i = i || [];
                t = t || h;
                var e, u, o, f, s = t.nodeType;
                if (!n || typeof n != "string") return i;
                if (s !== 1 && s !== 9) return [];
                if (o = g(t), !o && !r && (e = wi.exec(n)))
                    if (f = e[1]) {
                        if (s === 9)
                            if (u = t.getElementById(f), u && u.parentNode) {
                                if (u.id === f) return i.push(u), i
                            } else return i;
                        else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && gt(t, u) && u.id === f) return i.push(u), i
                    } else {
                        if (e[2]) return p.apply(i, w.call(t.getElementsByTagName(n), 0)), i;
                        if ((f = e[3]) && oi && t.getElementsByClassName) return p.apply(i, w.call(t.getElementsByClassName(f), 0)), i
                    }
                return dt(n.replace(it, "$1"), t, i, r, o)
            }

            function k(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return i === "input" && t.type === n
                }
            }

            function si(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return (i === "input" || i === "button") && t.type === n
                }
            }

            function y(n) {
                return s(function (t) {
                    return t = +t, s(function (i, r) {
                        for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                    })
                })
            }

            function ut(n, t, i) {
                if (n === t) return i;
                for (var r = n.nextSibling; r;) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }

            function ft(n, t) {
                var o, f, h, s, i, c, l, a = ri[e][n + " "];
                if (a) return t ? 0 : a.slice(0);
                for (i = n, c = [], l = u.preFilter; i;) {
                    (!o || (f = vi.exec(i))) && (f && (i = i.slice(f[0].length) || i), c.push(h = []));
                    o = !1;
                    (f = yi.exec(i)) && (h.push(o = new ti(f.shift())), i = i.slice(o.length), o.type = f[0].replace(it, " "));
                    for (s in u.filter)(f = rt[s].exec(i)) && (!l[s] || (f = l[s](f))) && (h.push(o = new ti(f.shift())), i = i.slice(o.length), o.type = s, o.matches = f);
                    if (!o) break
                }
                return t ? i.length : i ? r.error(n) : ri(n, c).slice(0)
            }

            function pt(n, t, i) {
                var r = t.dir,
                    u = i && t.dir === "parentNode",
                    f = ci++;
                return t.first ? function (t, i, f) {
                    while (t = t[r])
                        if (u || t.nodeType === 1) return n(t, i, f)
                } : function (t, i, o) {
                    if (o) {
                        while (t = t[r])
                            if ((u || t.nodeType === 1) && n(t, i, o)) return t
                    } else
                        for (var s, h = tt + " " + f + " ", c = h + ot; t = t[r];)
                            if (u || t.nodeType === 1) {
                                if ((s = t[e]) === c) return t.sizset;
                                if (typeof s == "string" && s.indexOf(h) === 0) {
                                    if (t.sizset) return t
                                } else {
                                    if (t[e] = c, n(t, i, o)) return t.sizset = !0, t;
                                    t.sizset = !1
                                }
                            }
                }
            }

            function wt(n) {
                return n.length > 1 ? function (t, i, r) {
                    for (var u = n.length; u--;)
                        if (!n[u](t, i, r)) return !1;
                    return !0
                } : n[0]
            }

            function et(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
                return o
            }

            function bt(n, t, i, r, u, f) {
                return r && !r[e] && (r = bt(r)), u && !u[e] && (u = bt(u, f)), s(function (f, e, o, s) {
                    var l, c, a, w = [],
                        y = [],
                        b = e.length,
                        k = f || rr(t || "*", o.nodeType ? [o] : o, []),
                        v = n && (f || !t) ? et(k, w, n, o, s) : k,
                        h = i ? u || (f ? n : b || r) ? [] : e : v;
                    if (i && i(v, h, o, s), r)
                        for (l = et(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                    if (f) {
                        if (u || n) {
                            if (u) {
                                for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                u(null, h = [], l, s)
                            }
                            for (c = h.length; c--;)(a = h[c]) && (l = u ? lt.call(f, a) : w[c]) > -1 && (f[l] = !(e[l] = a))
                        }
                    } else h = et(h === e ? h.splice(b, h.length) : h), u ? u(null, e, h, s) : p.apply(e, h)
                })
            }

            function kt(n) {
                for (var s, r, i, o = n.length, h = u.relative[n[0].type], c = h || u.relative[" "], t = h ? 1 : 0, l = pt(function (n) {
                        return n === s
                    }, c, !0), a = pt(function (n) {
                        return lt.call(s, n) > -1
                    }, c, !0), f = [function (n, t, i) {
                        return !h && (i || t !== nt) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                    }]; t < o; t++)
                    if (r = u.relative[n[t].type]) f = [pt(wt(f), r)];
                    else {
                        if (r = u.filter[n[t].type].apply(null, n[t].matches), r[e]) {
                            for (i = ++t; i < o; i++)
                                if (u.relative[n[i].type]) break;
                            return bt(t > 1 && wt(f), t > 1 && n.slice(0, t - 1).join("").replace(it, "$1"), r, t < i && kt(n.slice(t, i)), i < o && kt(n = n.slice(i)), i < o && n.join(""))
                        }
                        f.push(r)
                    }
                return wt(f)
            }

            function ir(n, t) {
                var f = t.length > 0,
                    e = n.length > 0,
                    i = function (o, s, c, l, a) {
                        var y, b, k, w = [],
                            d = 0,
                            v = "0",
                            g = o && [],
                            it = a != null,
                            rt = nt,
                            ft = o || e && u.find.TAG("*", a && s.parentNode || s),
                            ut = tt += rt == null ? 1 : Math.E;
                        for (it && (nt = s !== h && s, ot = i.el);
                            (y = ft[v]) != null; v++) {
                            if (e && y) {
                                for (b = 0; k = n[b]; b++)
                                    if (k(y, s, c)) {
                                        l.push(y);
                                        break
                                    }
                                it && (tt = ut, ot = ++i.el)
                            }
                            f && ((y = !k && y) && d--, o && g.push(y))
                        }
                        if (d += v, f && v !== d) {
                            for (b = 0; k = t[b]; b++) k(g, w, s, c);
                            if (o) {
                                if (d > 0)
                                    while (v--) g[v] || w[v] || (w[v] = li.call(l));
                                w = et(w)
                            }
                            p.apply(l, w);
                            it && !o && w.length > 0 && d + t.length > 1 && r.uniqueSort(l)
                        }
                        return it && (tt = ut, nt = rt), g
                    };
                return i.el = 0, f ? s(i) : i
            }

            function rr(n, t, i) {
                for (var u = 0, f = t.length; u < f; u++) r(n, t[u], i);
                return i
            }

            function dt(n, t, i, r, f) {
                var o, e, s, c, l, h = ft(n),
                    a = h.length;
                if (!r && h.length === 1) {
                    if (e = h[0] = h[0].slice(0), e.length > 2 && (s = e[0]).type === "ID" && t.nodeType === 9 && !f && u.relative[e[1].type]) {
                        if (t = u.find.ID(s.matches[0].replace(v, ""), t, f)[0], !t) return i;
                        n = n.slice(e.shift().length)
                    }
                    for (o = rt.POS.test(n) ? -1 : e.length - 1; o >= 0; o--) {
                        if (s = e[o], u.relative[c = s.type]) break;
                        if ((l = u.find[c]) && (r = l(s.matches[0].replace(v, ""), yt.test(e[0].type) && t.parentNode || t, f))) {
                            if (e.splice(o, 1), n = r.length && e.join(""), !n) return p.apply(i, w.call(r, 0)), i;
                            break
                        }
                    }
                }
                return ht(n, h)(r, t, f, i, yt.test(n)), i
            }

            function hi() {}
            var ot, st, u, d, g, gt, ht, ct, b, nt, ni = !0,
                c = "undefined",
                e = ("sizcache" + Math.random()).replace(".", ""),
                ti = String,
                h = n.document,
                o = h.documentElement,
                tt = 0,
                ci = 0,
                li = [].pop,
                p = [].push,
                w = [].slice,
                lt = [].indexOf || function (n) {
                    for (var t = 0, i = this.length; t < i; t++)
                        if (this[t] === n) return t;
                    return -1
                },
                s = function (n, t) {
                    return n[e] = t == null || t, n
                },
                at = function () {
                    var n = {},
                        t = [];
                    return s(function (i, r) {
                        return t.push(i) > u.cacheLength && delete n[t.shift()], n[i + " "] = r
                    }, n)
                },
                ii = at(),
                ri = at(),
                ui = at(),
                f = "[\\x20\\t\\r\\n\\f]",
                a = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                ai = a.replace("w", "w#"),
                fi = "\\[" + f + "*(" + a + ")" + f + "*(?:([*^$|!~]?=)" + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ai + ")|)|)" + f + "*\\]",
                vt = ":(" + a + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + fi + ")|[^:]|\\\\.)*|.*))\\)|)",
                ei = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)",
                it = new RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"),
                vi = new RegExp("^" + f + "*," + f + "*"),
                yi = new RegExp("^" + f + "*([\\x20\\t\\r\\n\\f>+~])" + f + "*"),
                pi = new RegExp(vt),
                wi = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                yt = /[\x20\t\r\n\f]*[+~]/,
                bi = /h\d/i,
                ki = /input|select|textarea|button/i,
                v = /\\(?!\\)/g,
                rt = {
                    ID: new RegExp("^#(" + a + ")"),
                    CLASS: new RegExp("^\\.(" + a + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + a + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + a.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + fi),
                    PSEUDO: new RegExp("^" + vt),
                    POS: new RegExp(ei, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + f + "*[>+~]|" + ei, "i")
                },
                l = function (n) {
                    var t = h.createElement("div");
                    try {
                        return n(t)
                    } catch (i) {
                        return !1
                    } finally {
                        t = null
                    }
                },
                di = l(function (n) {
                    return n.appendChild(h.createComment("")), !n.getElementsByTagName("*").length
                }),
                gi = l(function (n) {
                    return n.innerHTML = "<a href='#'><\/a>", n.firstChild && typeof n.firstChild.getAttribute !== c && n.firstChild.getAttribute("href") === "#"
                }),
                nr = l(function (n) {
                    n.innerHTML = "<select><\/select>";
                    var t = typeof n.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }),
                oi = l(function (n) {
                    return (n.innerHTML = "<div class='hidden e'><\/div><div class='hidden'><\/div>", !n.getElementsByClassName || !n.getElementsByClassName("e").length) ? !1 : (n.lastChild.className = "e", n.getElementsByClassName("e").length === 2)
                }),
                tr = l(function (n) {
                    n.id = e + 0;
                    n.innerHTML = "<a name='" + e + "'><\/a><div name='" + e + "'><\/div>";
                    o.insertBefore(n, o.firstChild);
                    var t = h.getElementsByName && h.getElementsByName(e).length === 2 + h.getElementsByName(e + 0).length;
                    return st = !h.getElementById(e), o.removeChild(n), t
                });
            try {
                w.call(o.childNodes, 0)[0].nodeType
            } catch (ur) {
                w = function (n) {
                    for (var t, i = []; t = this[n]; n++) i.push(t);
                    return i
                }
            }
            r.matches = function (n, t) {
                return r(n, null, null, t)
            };
            r.matchesSelector = function (n, t) {
                return r(t, null, null, [n]).length > 0
            };
            d = r.getText = function (n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (t === 1 || t === 9 || t === 11) {
                        if (typeof n.textContent == "string") return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += d(n)
                    } else if (t === 3 || t === 4) return n.nodeValue
                } else
                    for (; r = n[u]; u++) i += d(r);
                return i
            };
            g = r.isXML = function (n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            };
            gt = r.contains = o.contains ? function (n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && r.contains && r.contains(i))
            } : o.compareDocumentPosition ? function (n, t) {
                return t && !!(n.compareDocumentPosition(t) & 16)
            } : function (n, t) {
                while (t = t.parentNode)
                    if (t === n) return !0;
                return !1
            };
            r.attr = function (n, t) {
                var i, r = g(n);
                return (r || (t = t.toLowerCase()), i = u.attrHandle[t]) ? i(n) : r || nr ? n.getAttribute(t) : (i = n.getAttributeNode(t), i ? typeof n[t] == "boolean" ? n[t] ? t : null : i.specified ? i.value : null : null)
            };
            u = r.selectors = {
                cacheLength: 50,
                createPseudo: s,
                match: rt,
                attrHandle: gi ? {} : {
                    href: function (n) {
                        return n.getAttribute("href", 2)
                    },
                    type: function (n) {
                        return n.getAttribute("type")
                    }
                },
                find: {
                    ID: st ? function (n, t, i) {
                        if (typeof t.getElementById !== c && !i) {
                            var r = t.getElementById(n);
                            return r && r.parentNode ? [r] : []
                        }
                    } : function (n, i, r) {
                        if (typeof i.getElementById !== c && !r) {
                            var u = i.getElementById(n);
                            return u ? u.id === n || typeof u.getAttributeNode !== c && u.getAttributeNode("id").value === n ? [u] : t : []
                        }
                    },
                    TAG: di ? function (n, t) {
                        if (typeof t.getElementsByTagName !== c) return t.getElementsByTagName(n)
                    } : function (n, t) {
                        var f = t.getElementsByTagName(n),
                            i, r, u;
                        if (n === "*") {
                            for (r = [], u = 0; i = f[u]; u++) i.nodeType === 1 && r.push(i);
                            return r
                        }
                        return f
                    },
                    NAME: tr && function (n, t) {
                        if (typeof t.getElementsByName !== c) return t.getElementsByName(name)
                    },
                    CLASS: oi && function (n, t, i) {
                        if (typeof t.getElementsByClassName !== c && !i) return t.getElementsByClassName(n)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (n) {
                        return n[1] = n[1].replace(v, ""), n[3] = (n[4] || n[5] || "").replace(v, ""), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function (n) {
                        return n[1] = n[1].toLowerCase(), n[1] === "nth" ? (n[2] || r.error(n[0]), n[3] = +(n[3] ? n[4] + (n[5] || 1) : 2 * (n[2] === "even" || n[2] === "odd")), n[4] = +(n[6] + n[7] || n[2] === "odd")) : n[2] && r.error(n[0]), n
                    },
                    PSEUDO: function (n) {
                        var t, i;
                        return rt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[3] : (t = n[4]) && (pi.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (t = t.slice(0, i), n[0] = n[0].slice(0, i)), n[2] = t), n.slice(0, 3))
                    }
                },
                filter: {
                    ID: st ? function (n) {
                        return n = n.replace(v, ""),
                            function (t) {
                                return t.getAttribute("id") === n
                            }
                    } : function (n) {
                        return n = n.replace(v, ""),
                            function (t) {
                                var i = typeof t.getAttributeNode !== c && t.getAttributeNode("id");
                                return i && i.value === n
                            }
                    },
                    TAG: function (n) {
                        return n === "*" ? function () {
                            return !0
                        } : (n = n.replace(v, "").toLowerCase(), function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === n
                        })
                    },
                    CLASS: function (n) {
                        var t = ii[e][n + " "];
                        return t || (t = new RegExp("(^|" + f + ")" + n + "(" + f + "|$)")) && ii(n, function (n) {
                            return t.test(n.className || typeof n.getAttribute !== c && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, t, i) {
                        return function (u) {
                            var f = r.attr(u, n);
                            return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.substr(f.length - i.length) === i : t === "~=" ? (" " + f + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.substr(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function (n, t, i, r) {
                        return n === "nth" ? function (n) {
                            var t, u, f = n.parentNode;
                            if (i === 1 && r === 0) return !0;
                            if (f)
                                for (u = 0, t = f.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType === 1 && (u++, n === t)) break;
                            return u -= r, u === i || u % i == 0 && u / i >= 0
                        } : function (t) {
                            var i = t;
                            switch (n) {
                                case "only":
                                case "first":
                                    while (i = i.previousSibling)
                                        if (i.nodeType === 1) return !1;
                                    if (n === "first") return !0;
                                    i = t;
                                case "last":
                                    while (i = i.nextSibling)
                                        if (i.nodeType === 1) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function (n, t) {
                        var f, i = u.pseudos[n] || u.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                        return i[e] ? i(t) : i.length > 1 ? (f = [n, n, "", t], u.setFilters.hasOwnProperty(n.toLowerCase()) ? s(function (n, r) {
                            for (var u, f = i(n, t), e = f.length; e--;) u = lt.call(n, f[e]), n[u] = !(r[u] = f[e])
                        }) : function (n) {
                            return i(n, 0, f)
                        }) : i
                    }
                },
                pseudos: {
                    not: s(function (n) {
                        var i = [],
                            r = [],
                            t = ht(n.replace(it, "$1"));
                        return t[e] ? s(function (n, i, r, u) {
                            for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                        }) : function (n, u, f) {
                            return i[0] = n, t(i, null, f, r), !r.pop()
                        }
                    }),
                    has: s(function (n) {
                        return function (t) {
                            return r(n, t).length > 0
                        }
                    }),
                    contains: s(function (n) {
                        return function (t) {
                            return (t.textContent || t.innerText || d(t)).indexOf(n) > -1
                        }
                    }),
                    enabled: function (n) {
                        return n.disabled === !1
                    },
                    disabled: function (n) {
                        return n.disabled === !0
                    },
                    checked: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return t === "input" && !!n.checked || t === "option" && !!n.selected
                    },
                    selected: function (n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    },
                    parent: function (n) {
                        return !u.pseudos.empty(n)
                    },
                    empty: function (n) {
                        var t;
                        for (n = n.firstChild; n;) {
                            if (n.nodeName > "@" || (t = n.nodeType) === 3 || t === 4) return !1;
                            n = n.nextSibling
                        }
                        return !0
                    },
                    header: function (n) {
                        return bi.test(n.nodeName)
                    },
                    text: function (n) {
                        var t, i;
                        return n.nodeName.toLowerCase() === "input" && (t = n.type) === "text" && ((i = n.getAttribute("type")) == null || i.toLowerCase() === t)
                    },
                    radio: k("radio"),
                    checkbox: k("checkbox"),
                    file: k("file"),
                    password: k("password"),
                    image: k("image"),
                    submit: si("submit"),
                    reset: si("reset"),
                    button: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return t === "input" && n.type === "button" || t === "button"
                    },
                    input: function (n) {
                        return ki.test(n.nodeName)
                    },
                    focus: function (n) {
                        var t = n.ownerDocument;
                        return n === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    active: function (n) {
                        return n === n.ownerDocument.activeElement
                    },
                    first: y(function () {
                        return [0]
                    }),
                    last: y(function (n, t) {
                        return [t - 1]
                    }),
                    eq: y(function (n, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: y(function (n, t) {
                        for (var i = 0; i < t; i += 2) n.push(i);
                        return n
                    }),
                    odd: y(function (n, t) {
                        for (var i = 1; i < t; i += 2) n.push(i);
                        return n
                    }),
                    lt: y(function (n, t, i) {
                        for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                        return n
                    }),
                    gt: y(function (n, t, i) {
                        for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            };
            ct = o.compareDocumentPosition ? function (n, t) {
                return n === t ? (b = !0, 0) : (!n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition : n.compareDocumentPosition(t) & 4) ? -1 : 1
            } : function (n, t) {
                var i;
                if (n === t) return b = !0, 0;
                if (n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
                var e, h, u = [],
                    f = [],
                    o = n.parentNode,
                    s = t.parentNode,
                    r = o;
                if (o === s) return ut(n, t);
                if (o) {
                    if (!s) return 1
                } else return -1;
                while (r) u.unshift(r), r = r.parentNode;
                for (r = s; r;) f.unshift(r), r = r.parentNode;
                for (e = u.length, h = f.length, i = 0; i < e && i < h; i++)
                    if (u[i] !== f[i]) return ut(u[i], f[i]);
                return i === e ? ut(n, f[i], -1) : ut(u[i], t, 1)
            };
            [0, 0].sort(ct);
            ni = !b;
            r.uniqueSort = function (n) {
                var r, u = [],
                    t = 1,
                    i = 0;
                if (b = ni, n.sort(ct), b) {
                    for (; r = n[t]; t++) r === n[t - 1] && (i = u.push(t));
                    while (i--) n.splice(u[i], 1)
                }
                return n
            };
            r.error = function (n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            ht = r.compile = function (n, t) {
                var r, u = [],
                    f = [],
                    i = ui[e][n + " "];
                if (!i) {
                    for (t || (t = ft(n)), r = t.length; r--;) i = kt(t[r]), i[e] ? u.push(i) : f.push(i);
                    i = ui(n, ir(f, u))
                }
                return i
            };
            h.querySelectorAll && function () {
                var u, s = dt,
                    h = /'|\\/g,
                    c = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    n = [":focus"],
                    t = [":active"],
                    i = o.matchesSelector || o.mozMatchesSelector || o.webkitMatchesSelector || o.oMatchesSelector || o.msMatchesSelector;
                l(function (t) {
                    t.innerHTML = "<select><option selected=''><\/option><\/select>";
                    t.querySelectorAll("[selected]").length || n.push("\\[" + f + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                    t.querySelectorAll(":checked").length || n.push(":checked")
                });
                l(function (t) {
                    t.innerHTML = "<p test=''><\/p>";
                    t.querySelectorAll("[test^='']").length && n.push("[*^$]=" + f + "*(?:\"\"|'')");
                    t.innerHTML = "<input type='hidden'/>";
                    t.querySelectorAll(":enabled").length || n.push(":enabled", ":disabled")
                });
                n = new RegExp(n.join("|"));
                dt = function (t, i, r, u, f) {
                    if (!u && !f && !n.test(t)) {
                        var o, l, a = !0,
                            c = e,
                            y = i,
                            v = i.nodeType === 9 && t;
                        if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                            for (o = ft(t), (a = i.getAttribute("id")) ? c = a.replace(h, "\\$&") : i.setAttribute("id", c), c = "[id='" + c + "'] ", l = o.length; l--;) o[l] = c + o[l].join("");
                            y = yt.test(t) && i.parentNode || i;
                            v = o.join(",")
                        }
                        if (v) try {
                            return p.apply(r, w.call(y.querySelectorAll(v), 0)), r
                        } catch (b) {} finally {
                            a || i.removeAttribute("id")
                        }
                    }
                    return s(t, i, r, u, f)
                };
                i && (l(function (n) {
                    u = i.call(n, "div");
                    try {
                        i.call(n, "[test!='']:sizzle");
                        t.push("!=", vt)
                    } catch (r) {}
                }), t = new RegExp(t.join("|")), r.matchesSelector = function (f, e) {
                    if (e = e.replace(c, "='$1']"), !g(f) && !t.test(e) && !n.test(e)) try {
                        var o = i.call(f, e);
                        if (o || u || f.document && f.document.nodeType !== 11) return o
                    } catch (s) {}
                    return r(e, null, null, [f]).length > 0
                })
            }();
            u.pseudos.nth = u.pseudos.eq;
            u.filters = hi.prototype = u.pseudos;
            u.setFilters = new hi;
            r.attr = i.attr;
            i.find = r;
            i.expr = r.selectors;
            i.expr[":"] = i.expr.pseudos;
            i.unique = r.uniqueSort;
            i.text = r.getText;
            i.isXMLDoc = r.isXML;
            i.contains = r.contains
        }(n);
    var bf = /Until$/,
        kf = /^(?:parents|prev(?:Until|All))/,
        df = /^.[^:#\[\.,]*$/,
        gi = i.expr.match.needsContext,
        gf = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    i.fn.extend({
        find: function (n) {
            var t, f, o, u, e, r, s = this;
            if (typeof n != "string") return i(n).filter(function () {
                for (t = 0, f = s.length; t < f; t++)
                    if (i.contains(s[t], this)) return !0
            });
            for (r = this.pushStack("", "find", n), t = 0, f = this.length; t < f; t++)
                if (o = r.length, i.find(n, this[t], r), t > 0)
                    for (u = o; u < r.length; u++)
                        for (e = 0; e < o; e++)
                            if (r[e] === r[u]) {
                                r.splice(u--, 1);
                                break
                            }
            return r
        },
        has: function (n) {
            var t, r = i(n, this),
                u = r.length;
            return this.filter(function () {
                for (t = 0; t < u; t++)
                    if (i.contains(this, r[t])) return !0
            })
        },
        not: function (n) {
            return this.pushStack(tr(this, n, !1), "not", n)
        },
        filter: function (n) {
            return this.pushStack(tr(this, n, !0), "filter", n)
        },
        is: function (n) {
            return !!n && (typeof n == "string" ? gi.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function (n, t) {
            for (var r, f = 0, o = this.length, u = [], e = gi.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r.ownerDocument && r !== t && r.nodeType !== 11;) {
                    if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                        u.push(r);
                        break
                    }
                    r = r.parentNode
                }
            return u = u.length > 1 ? i.unique(u) : u, this.pushStack(u, "closest", n)
        },
        index: function (n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                r = i.merge(this.get(), u);
            return this.pushStack(k(u[0]) || k(r[0]) ? r : i.unique(r))
        },
        addBack: function (n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.fn.andSelf = i.fn.addBack;
    i.each({
        parent: function (n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function (n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function (n) {
            return nr(n, "nextSibling")
        },
        prev: function (n) {
            return nr(n, "previousSibling")
        },
        nextAll: function (n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function (n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function (n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function (n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function (n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function (n) {
            return i.sibling(n.firstChild)
        },
        contents: function (n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function (n, t) {
        i.fn[n] = function (r, u) {
            var f = i.map(this, t, r);
            return bf.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), f = this.length > 1 && !gf[n] ? i.unique(f) : f, this.length > 1 && kf.test(n) && (f = f.reverse()), this.pushStack(f, n, o.call(arguments).join(","))
        }
    });
    i.extend({
        filter: function (n, t, r) {
            return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function (n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));) f.nodeType === 1 && e.push(f), f = f[r];
            return e
        },
        sibling: function (n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var rr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ne = / jQuery\d+="(?:null|\d+)"/g,
        bt = /^\s+/,
        ur = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        fr = /<([\w:]+)/,
        te = /<tbody/i,
        ie = /<|&#?\w+;/,
        re = /<(?:script|style|link)/i,
        ue = /<(?:script|object|embed|option|style)/i,
        kt = new RegExp("<(?:" + rr + ")[\\s/>]", "i"),
        er = /^(?:checkbox|radio)$/,
        or = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fe = /\/(java|ecma)script/i,
        ee = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        e = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            legend: [1, "<fieldset>", "<\/fieldset>"],
            thead: [1, "<table>", "<\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
            area: [1, "<map>", "<\/map>"],
            _default: [0, "", ""]
        },
        sr = ir(r),
        dt = sr.appendChild(r.createElement("div"));
    e.optgroup = e.option;
    e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
    e.th = e.td;
    i.support.htmlSerialize || (e._default = [1, "X<div>", "<\/div>"]);
    i.fn.extend({
        text: function (n) {
            return i.access(this, function (n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            }, null, n, arguments.length)
        },
        wrapAll: function (n) {
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function () {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function (n) {
            return i.isFunction(n) ? this.each(function (t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function (n) {
            var t = i.isFunction(n);
            return this.each(function (r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (n) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(n)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (n) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(n, this.firstChild)
            })
        },
        before: function () {
            if (!k(this[0])) return this.domManip(arguments, !1, function (n) {
                this.parentNode.insertBefore(n, this)
            });
            if (arguments.length) {
                var n = i.clean(arguments);
                return this.pushStack(i.merge(n, this), "before", this.selector)
            }
        },
        after: function () {
            if (!k(this[0])) return this.domManip(arguments, !1, function (n) {
                this.parentNode.insertBefore(n, this.nextSibling)
            });
            if (arguments.length) {
                var n = i.clean(arguments);
                return this.pushStack(i.merge(this, n), "after", this.selector)
            }
        },
        remove: function (n, t) {
            for (var r, u = 0;
                (r = this[u]) != null; u++)(!n || i.filter(n, [r]).length) && (t || r.nodeType !== 1 || (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
            return this
        },
        empty: function () {
            for (var n, t = 0;
                (n = this[t]) != null; t++)
                for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild;) n.removeChild(n.firstChild);
            return this
        },
        clone: function (n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function () {
                return i.clone(this, n, t)
            })
        },
        html: function (n) {
            return i.access(this, function (n) {
                var r = this[0] || {},
                    u = 0,
                    f = this.length;
                if (n === t) return r.nodeType === 1 ? r.innerHTML.replace(ne, "") : t;
                if (typeof n == "string" && !re.test(n) && (i.support.htmlSerialize || !kt.test(n)) && (i.support.leadingWhitespace || !bt.test(n)) && !e[(fr.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(ur, "<$1><\/$2>");
                    try {
                        for (; u < f; u++) r = this[u] || {}, r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), r.innerHTML = n);
                        r = 0
                    } catch (o) {}
                }
                r && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function (n) {
            return k(this[0]) ? this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this : i.isFunction(n) ? this.each(function (t) {
                var r = i(this),
                    u = r.html();
                r.replaceWith(n.call(this, t, u))
            }) : (typeof n != "string" && (n = i(n).detach()), this.each(function () {
                var t = this.nextSibling,
                    r = this.parentNode;
                i(this).remove();
                t ? i(t).before(n) : i(r).append(n)
            }))
        },
        detach: function (n) {
            return this.remove(n, !0)
        },
        domManip: function (n, r, u) {
            n = [].concat.apply([], n);
            var h, o, f, a, e = 0,
                s = n[0],
                c = [],
                l = this.length;
            if (!i.support.checkClone && l > 1 && typeof s == "string" && or.test(s)) return this.each(function () {
                i(this).domManip(n, r, u)
            });
            if (i.isFunction(s)) return this.each(function (f) {
                var e = i(this);
                n[0] = s.call(this, f, r ? e.html() : t);
                e.domManip(n, r, u)
            });
            if (this[0]) {
                if (h = i.buildFragment(n, this, c), f = h.fragment, o = f.firstChild, f.childNodes.length === 1 && (f = o), o)
                    for (r = r && i.nodeName(o, "tr"), a = h.cacheable || l - 1; e < l; e++) u.call(r && i.nodeName(this[e], "table") ? oe(this[e], "tbody") : this[e], e === a ? f : i.clone(f, !0, !0));
                f = o = null;
                c.length && i.each(c, function (n, t) {
                    t.src ? i.ajax ? i.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    }) : i.error("no ajax") : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ee, ""));
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    });
    i.buildFragment = function (n, u, f) {
        var o, s, h, e = n[0];
        return u = u || r, u = !u.nodeType && u[0] || u, u = u.ownerDocument || u, n.length === 1 && typeof e == "string" && e.length < 512 && u === r && e.charAt(0) === "<" && !ue.test(e) && (i.support.checkClone || !or.test(e)) && (i.support.html5Clone || !kt.test(e)) && (s = !0, o = i.fragments[e], h = o !== t), o || (o = u.createDocumentFragment(), i.clean(n, u, o, f), s && (i.fragments[e] = h && o)), {
            fragment: o,
            cacheable: s
        }
    };
    i.fragments = {};
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (n, t) {
        i.fn[n] = function (r) {
            var o, u = 0,
                s = [],
                f = i(r),
                h = f.length,
                e = this.length === 1 && this[0].parentNode;
            if ((e == null || e && e.nodeType === 11 && e.childNodes.length === 1) && h === 1) return f[t](this[0]), this;
            for (; u < h; u++) o = (u > 0 ? this.clone(!0) : this).get(), i(f[u])[t](o), s = s.concat(o);
            return this.pushStack(s, n, f.selector)
        }
    });
    i.extend({
            clone: function (n, t, r) {
                var f, o, u, e;
                if (i.support.html5Clone || i.isXMLDoc(n) || !kt.test("<" + n.nodeName + ">") ? e = n.cloneNode(!0) : (dt.innerHTML = n.outerHTML, dt.removeChild(e = dt.firstChild)), (!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                    for (cr(n, e), f = rt(n), o = rt(e), u = 0; f[u]; ++u) o[u] && cr(f[u], o[u]);
                if (t && (hr(n, e), r))
                    for (f = rt(n), o = rt(e), u = 0; f[u]; ++u) hr(f[u], o[u]);
                return f = o = null, e
            },
            clean: function (n, t, u, f) {
                var h, c, o, p, v, d, s, w, a, b, k, y = t === r && sr,
                    l = [];
                for (t && typeof t.createDocumentFragment != "undefined" || (t = r), h = 0;
                    (o = n[h]) != null; h++)
                    if (typeof o == "number" && (o += ""), o) {
                        if (typeof o == "string")
                            if (ie.test(o)) {
                                for (y = y || ir(t), s = t.createElement("div"), y.appendChild(s), o = o.replace(ur, "<$1><\/$2>"), p = (fr.exec(o) || ["", ""])[1].toLowerCase(), v = e[p] || e._default, d = v[0], s.innerHTML = v[1] + o + v[2]; d--;) s = s.lastChild;
                                if (!i.support.tbody)
                                    for (w = te.test(o), a = p === "table" && !w ? s.firstChild && s.firstChild.childNodes : v[1] === "<table>" && !w ? s.childNodes : [], c = a.length - 1; c >= 0; --c) i.nodeName(a[c], "tbody") && !a[c].childNodes.length && a[c].parentNode.removeChild(a[c]);
                                !i.support.leadingWhitespace && bt.test(o) && s.insertBefore(t.createTextNode(bt.exec(o)[0]), s.firstChild);
                                o = s.childNodes;
                                s.parentNode.removeChild(s)
                            } else o = t.createTextNode(o);
                        o.nodeType ? l.push(o) : i.merge(l, o)
                    }
                if (s && (o = s = y = null), !i.support.appendChecked)
                    for (h = 0;
                        (o = l[h]) != null; h++) i.nodeName(o, "input") ? lr(o) : typeof o.getElementsByTagName != "undefined" && i.grep(o.getElementsByTagName("input"), lr);
                if (u)
                    for (b = function (n) {
                            if (!n.type || fe.test(n.type)) return f ? f.push(n.parentNode ? n.parentNode.removeChild(n) : n) : u.appendChild(n)
                        }, h = 0;
                        (o = l[h]) != null; h++) i.nodeName(o, "script") && b(o) || (u.appendChild(o), typeof o.getElementsByTagName != "undefined" && (k = i.grep(i.merge([], o.getElementsByTagName("script")), b), l.splice.apply(l, [h + 1, 0].concat(k)), h += k.length));
                return l
            },
            cleanData: function (n, t) {
                for (var f, u, r, e, h = 0, o = i.expando, s = i.cache, c = i.support.deleteExpando, l = i.event.special;
                    (r = n[h]) != null; h++)
                    if ((t || i.acceptData(r)) && (u = r[o], f = u && s[u], f)) {
                        if (f.events)
                            for (e in f.events) l[e] ? i.event.remove(r, e) : i.removeEvent(r, e, f.handle);
                        s[u] && (delete s[u], c ? delete r[o] : r.removeAttribute ? r.removeAttribute(o) : r[o] = null, i.deletedIds.push(u))
                    }
            }
        }),
        function () {
            var t, n;
            i.uaMatch = function (n) {
                n = n.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            };
            t = i.uaMatch(pu.userAgent);
            n = {};
            t.browser && (n[t.browser] = !0, n.version = t.version);
            n.chrome ? n.webkit = !0 : n.webkit && (n.safari = !0);
            i.browser = n;
            i.sub = function () {
                function n(t, i) {
                    return new n.fn.init(t, i)
                }
                i.extend(!0, n, this);
                n.superclass = this;
                n.fn = n.prototype = this();
                n.fn.constructor = n;
                n.sub = this.sub;
                n.fn.init = function (r, u) {
                    return u && u instanceof i && !(u instanceof n) && (u = n(u)), i.fn.init.call(this, r, u, t)
                };
                n.fn.init.prototype = n.fn;
                var t = n(r);
                return n
            }
        }();
    var u, y, p, gt = /alpha\([^)]*\)/i,
        se = /opacity=([^)]*)/,
        he = /^(top|right|bottom|left)$/,
        ce = /^(none|table(?!-c[ea]).+)/,
        ar = /^margin/,
        le = new RegExp("^(" + nt + ")(.*)$", "i"),
        ut = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
        ae = new RegExp("^([-+])=(" + nt + ")", "i"),
        ni = {
            BODY: "block"
        },
        ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        vr = {
            letterSpacing: 0,
            fontWeight: 400
        },
        c = ["Top", "Right", "Bottom", "Left"],
        yr = ["Webkit", "O", "Moz", "ms"],
        ye = i.fn.toggle;
    i.fn.extend({
        css: function (n, r) {
            return i.access(this, function (n, r, u) {
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            }, n, r, arguments.length > 1)
        },
        show: function () {
            return wr(this, !0)
        },
        hide: function () {
            return wr(this)
        },
        toggle: function (n, t) {
            var r = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? ye.apply(this, arguments) : this.each(function () {
                (r ? n : ft(this)) ? i(this).show(): i(this).hide()
            })
        }
    });
    i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = u(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (n, r, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, s, e, h = i.camelCase(r),
                    c = n.style;
                if (r = i.cssProps[h] || (i.cssProps[h] = pr(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u !== t) {
                    if (s = typeof u, s === "string" && (o = ae.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), u == null || s === "number" && isNaN(u)) return;
                    if (s !== "number" || i.cssNumber[h] || (u += "px"), !e || !("set" in e) || (u = e.set(n, u, f)) !== t) try {
                        c[r] = u
                    } catch (l) {}
                } else return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r]
            }
        },
        css: function (n, r, f, e) {
            var o, c, s, h = i.camelCase(r);
            return (r = i.cssProps[h] || (i.cssProps[h] = pr(n.style, h)), s = i.cssHooks[r] || i.cssHooks[h], s && "get" in s && (o = s.get(n, !0, e)), o === t && (o = u(n, r)), o === "normal" && r in vr && (o = vr[r]), f || e !== t) ? (c = parseFloat(o), f || i.isNumeric(c) ? c || 0 : o) : o
        },
        swap: function (n, t, i) {
            var u, r, f = {};
            for (r in t) f[r] = n.style[r], n.style[r] = t[r];
            u = i.call(n);
            for (r in t) n.style[r] = f[r];
            return u
        }
    });
    n.getComputedStyle ? u = function (t, r) {
        var f, o, s, h, e = n.getComputedStyle(t, null),
            u = t.style;
        return e && (f = e.getPropertyValue(r) || e[r], f !== "" || i.contains(t.ownerDocument, t) || (f = i.style(t, r)), ut.test(f) && ar.test(r) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = e.width, u.width = o, u.minWidth = s, u.maxWidth = h)), f
    } : r.documentElement.currentStyle && (u = function (n, t) {
        var f, u, i = n.currentStyle && n.currentStyle[t],
            r = n.style;
        return i == null && r && r[t] && (i = r[t]), ut.test(i) && !he.test(t) && (f = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === "fontSize" ? "1em" : i, i = r.pixelLeft + "px", r.left = f, u && (n.runtimeStyle.left = u)), i === "" ? "auto" : i
    });
    i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, f) {
                if (r) return n.offsetWidth === 0 && ce.test(u(n, "display")) ? i.swap(n, ve, function () {
                    return dr(n, t, f)
                }) : dr(n, t, f)
            },
            set: function (n, r, u) {
                return br(n, r, u ? kr(n, t, u, i.support.boxSizing && i.css(n, "boxSizing") === "border-box") : 0)
            }
        }
    });
    i.support.opacity || (i.cssHooks.opacity = {
        get: function (n, t) {
            return se.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (n, t) {
            var r = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                f = u && u.filter || r.filter || "";
            (r.zoom = 1, t >= 1 && i.trim(f.replace(gt, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"), u && !u.filter)) || (r.filter = gt.test(f) ? f.replace(gt, e) : f + " " + e)
        }
    });
    i(function () {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function (n, t) {
                return i.swap(n, {
                    display: "inline-block"
                }, function () {
                    if (t) return u(n, "marginRight")
                })
            }
        });
        !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function (n, t) {
            i.cssHooks[t] = {
                get: function (n, r) {
                    if (r) {
                        var f = u(n, t);
                        return ut.test(f) ? i(n).position()[t] + "px" : f
                    }
                }
            }
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function (n) {
        return n.offsetWidth === 0 && n.offsetHeight === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || u(n, "display")) === "none"
    }, i.expr.filters.visible = function (n) {
        return !i.expr.filters.hidden(n)
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (n, t) {
        i.cssHooks[n + t] = {
            expand: function (i) {
                for (var u = typeof i == "string" ? i.split(" ") : [i], f = {}, r = 0; r < 4; r++) f[n + c[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        ar.test(n) || (i.cssHooks[n + t].set = br)
    });
    var pe = /%20/g,
        we = /\[\]$/,
        nu = /\r?\n/g,
        be = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        ke = /^(?:select|textarea)/i;
    i.fn.extend({
        serialize: function () {
            return i.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || ke.test(this.nodeName) || be.test(this.type))
            }).map(function (n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function (n) {
                    return {
                        name: t.name,
                        value: n.replace(nu, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(nu, "\r\n")
                }
            }).get()
        }
    });
    i.param = function (n, r) {
        var u, f = [],
            e = function (n, t) {
                t = i.isFunction(t) ? t() : t == null ? "" : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
            e(this.name, this.value)
        });
        else
            for (u in n) ti(u, n[u], r, e);
        return f.join("&").replace(pe, "+")
    };
    var l, a, de = /#.*$/,
        ge = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        no = /^(?:GET|HEAD)$/,
        to = /^\/\//,
        tu = /\?/,
        io = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ro = /([?&])_=[^&]*/,
        iu = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        ru = i.fn.load,
        ii = {},
        uu = {},
        fu = ["*/"] + ["*"];
    try {
        a = yu.href
    } catch (po) {
        a = r.createElement("a");
        a.href = "";
        a = a.href
    }
    l = iu.exec(a.toLowerCase()) || [];
    i.fn.load = function (n, r, u) {
        if (typeof n != "string" && ru) return ru.apply(this, arguments);
        if (!this.length) return this;
        var f, o, s, h = this,
            e = n.indexOf(" ");
        return e >= 0 && (f = n.slice(e, n.length), n = n.slice(0, e)), i.isFunction(r) ? (u = r, r = t) : r && typeof r == "object" && (o = "POST"), i.ajax({
            url: n,
            type: o,
            dataType: "html",
            data: r,
            complete: function (n, t) {
                u && h.each(u, s || [n.responseText, t, n])
            }
        }).done(function (n) {
            s = arguments;
            h.html(f ? i("<div>").append(n.replace(io, "")).find(f) : n)
        }), this
    };
    i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n)
        }
    });
    i.each(["get", "post"], function (n, r) {
        i[r] = function (n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                type: r,
                url: n,
                data: u,
                success: f,
                dataType: e
            })
        }
    });
    i.extend({
        getScript: function (n, r) {
            return i.get(n, t, r, "script")
        },
        getJSON: function (n, t, r) {
            return i.get(n, t, r, "json")
        },
        ajaxSetup: function (n, t) {
            return t ? ou(n, i.ajaxSettings) : (t = n, n = i.ajaxSettings), ou(n, t), n
        },
        ajaxSettings: {
            url: a,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(l[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": fu
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: eu(ii),
        ajaxTransport: eu(uu),
        ajax: function (n, r) {
            function b(n, r, h, l) {
                var a, tt, b, it, p, v = r;
                e !== 2 && (e = 2, d && clearTimeout(d), c = t, k = l || "", f.readyState = n > 0 ? 4 : 0, h && (it = uo(u, f, h)), n >= 200 && n < 300 || n === 304 ? (u.ifModified && (p = f.getResponseHeader("Last-Modified"), p && (i.lastModified[o] = p), p = f.getResponseHeader("Etag"), p && (i.etag[o] = p)), n === 304 ? (v = "notmodified", a = !0) : (a = fo(u, it), v = a.state, tt = a.data, b = a.error, a = !b)) : (b = v, (!v || n) && (v = "error", n < 0 && (n = 0))), f.status = n, f.statusText = (r || v) + "", a ? nt.resolveWith(s, [tt, v, f]) : nt.rejectWith(s, [f, v, b]), f.statusCode(w), w = t, y && g.trigger("ajax" + (a ? "Success" : "Error"), [f, u, a ? tt : b]), rt.fireWith(s, [f, v]), y && (g.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            var tt, it;
            typeof n == "object" && (r = n, n = t);
            r = r || {};
            var o, k, p, c, d, a, y, v, u = i.ajaxSetup({}, r),
                s = u.context || u,
                g = s !== u && (s.nodeType || s instanceof i) ? i(s) : i.event,
                nt = i.Deferred(),
                rt = i.Callbacks("once memory"),
                w = u.statusCode || {},
                ut = {},
                ft = {},
                e = 0,
                ot = "canceled",
                f = {
                    readyState: 0,
                    setRequestHeader: function (n, t) {
                        if (!e) {
                            var i = n.toLowerCase();
                            n = ft[i] = ft[i] || n;
                            ut[n] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return e === 2 ? k : null
                    },
                    getResponseHeader: function (n) {
                        var i;
                        if (e === 2) {
                            if (!p)
                                for (p = {}; i = ge.exec(k);) p[i[1].toLowerCase()] = i[2];
                            i = p[n.toLowerCase()]
                        }
                        return i === t ? null : i
                    },
                    overrideMimeType: function (n) {
                        return e || (u.mimeType = n), this
                    },
                    abort: function (n) {
                        return n = n || ot, c && c.abort(n), b(0, n), this
                    }
                };
            if (nt.promise(f), f.success = f.done, f.error = f.fail, f.complete = rt.add, f.statusCode = function (n) {
                    if (n) {
                        var t;
                        if (e < 2)
                            for (t in n) w[t] = [w[t], n[t]];
                        else t = n[f.status], f.always(t)
                    }
                    return this
                }, u.url = ((n || u.url) + "").replace(de, "").replace(to, l[1] + "//"), u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(h), u.crossDomain == null && (a = iu.exec(u.url.toLowerCase()), u.crossDomain = !!(a && (a[1] !== l[1] || a[2] !== l[2] || (a[3] || (a[1] === "http:" ? 80 : 443)) != (l[3] || (l[1] === "http:" ? 80 : 443))))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), et(ii, u, r, f), e === 2) return f;
            y = u.global;
            u.type = u.type.toUpperCase();
            u.hasContent = !no.test(u.type);
            y && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.hasContent || (u.data && (u.url += (tu.test(u.url) ? "&" : "?") + u.data, delete u.data), o = u.url, u.cache === !1 && (tt = i.now(), it = u.url.replace(ro, "$1_=" + tt), u.url = it + (it === u.url ? (tu.test(u.url) ? "&" : "?") + "_=" + tt : "")));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            u.ifModified && (o = o || u.url, i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o]));
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + fu + "; q=0.01" : "") : u.accepts["*"]);
            for (v in u.headers) f.setRequestHeader(v, u.headers[v]);
            if (u.beforeSend && (u.beforeSend.call(s, f, u) === !1 || e === 2)) return f.abort();
            ot = "abort";
            for (v in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) f[v](u[v]);
            if (c = et(uu, u, r, f), c) {
                f.readyState = 1;
                y && g.trigger("ajaxSend", [f, u]);
                u.async && u.timeout > 0 && (d = setTimeout(function () {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    e = 1;
                    c.send(ut, b)
                } catch (st) {
                    if (e < 2) b(-1, st);
                    else throw st;
                }
            } else b(-1, "No Transport");
            return f
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var su = [],
        eo = /\?/,
        ot = /(=)\?(?=&|$)|\?\?/,
        oo = i.now();
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var n = su.pop() || i.expando + "_" + oo++;
            return this[n] = !0, n
        }
    });
    i.ajaxPrefilter("json jsonp", function (r, u, f) {
        var e, s, o, h = r.data,
            c = r.url,
            l = r.jsonp !== !1,
            a = l && ot.test(c),
            v = l && !a && typeof h == "string" && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && ot.test(h);
        if (r.dataTypes[0] === "jsonp" || a || v) return e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, s = n[e], a ? r.url = c.replace(ot, "$1" + e) : v ? r.data = h.replace(ot, "$1" + e) : l && (r.url += (eo.test(c) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function () {
            return o || i.error(e + " was not called"), o[0]
        }, r.dataTypes[0] = "json", n[e] = function () {
            o = arguments
        }, f.always(function () {
            n[e] = s;
            r[e] && (r.jsonpCallback = u.jsonpCallback, su.push(e));
            o && i.isFunction(s) && s(o[0]);
            o = s = t
        }), "script"
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (n) {
                return i.globalEval(n), n
            }
        }
    });
    i.ajaxPrefilter("script", function (n) {
        n.cache === t && (n.cache = !1);
        n.crossDomain && (n.type = "GET", n.global = !1)
    });
    i.ajaxTransport("script", function (n) {
        if (n.crossDomain) {
            var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
            return {
                send: function (f, e) {
                    i = r.createElement("script");
                    i.async = "async";
                    n.scriptCharset && (i.charset = n.scriptCharset);
                    i.src = n.url;
                    i.onload = i.onreadystatechange = function (n, r) {
                        (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, "success"))
                    };
                    u.insertBefore(i, u.firstChild)
                },
                abort: function () {
                    if (i) i.onload(0, 1)
                }
            }
        }
    });
    st = n.ActiveXObject ? function () {
        for (var n in w) w[n](0, 1)
    } : !1;
    hu = 0;
    i.ajaxSettings.xhr = n.ActiveXObject ? function () {
            return !this.isLocal && cu() || so()
        } : cu,
        function (n) {
            i.extend(i.support, {
                ajax: !!n,
                cors: !!n && "withCredentials" in n
            })
        }(i.ajaxSettings.xhr());
    
    var b, ht, ho = /^(?:toggle|show|hide)$/,
        co = new RegExp("^(?:([-+])=|)(" + nt + ")([a-z%]*)$", "i"),
        lo = /queueHooks$/,
        ct = [yo],
        d = {
            "*": [function (n, t) {
                var o, s, r = this.createTween(n, t),
                    e = co.exec(t),
                    h = r.cur(),
                    u = +h || 0,
                    f = 1,
                    c = 20;
                if (e) {
                    if (o = +e[2], s = e[3] || (i.cssNumber[n] ? "" : "px"), s !== "px" && u) {
                        u = i.css(r.elem, n, !0) || o || 1;
                        do f = f || ".5", u = u / f, i.style(r.elem, n, u + s); while (f !== (f = r.cur() / h) && f !== 1 && --c)
                    }
                    r.unit = s;
                    r.start = u;
                    r.end = e[1] ? u + (e[1] + 1) * o : o
                }
                return r
            }]
        };
    i.Animation = i.extend(au, {
        tweener: function (n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], d[r] = d[r] || [], d[r].unshift(t)
        },
        prefilter: function (n, t) {
            t ? ct.unshift(n) : ct.push(n)
        }
    });
    i.Tween = f;
    f.prototype = {
        constructor: f,
        init: function (n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function () {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this)
        },
        run: function (n) {
            var t, r = f.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : f.propHooks._default.set(this), this
        }
    };
    f.prototype.init.prototype = f.prototype;
    f.propHooks = {
        _default: {
            get: function (n) {
                var t;
                return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, !1, ""), !t || t === "auto" ? 0 : t)
            },
            set: function (n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    f.propHooks.scrollTop = f.propHooks.scrollLeft = {
        set: function (n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.each(["toggle", "show", "hide"], function (n, t) {
        var r = i.fn[t];
        i.fn[t] = function (u, f, e) {
            return u == null || typeof u == "boolean" || !n && i.isFunction(u) && i.isFunction(f) ? r.apply(this, arguments) : this.animate(lt(t, !0), u, f, e)
        }
    });
    i.fn.extend({
        fadeTo: function (n, t, i, r) {
            return this.filter(ft).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function (n, t, r, u) {
            var e = i.isEmptyObject(n),
                f = i.speed(t, r, u),
                o = function () {
                    var t = au(this, i.extend({}, n), f);
                    e && t.stop(!0)
                };
            return e || f.queue === !1 ? this.each(o) : this.queue(f.queue, o)
        },
        stop: function (n, r, u) {
            var f = function (n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function () {
                var o = !0,
                    t = n != null && n + "queueHooks",
                    e = i.timers,
                    r = i._data(this);
                if (t) r[t] && r[t].stop && f(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && lo.test(t) && f(r[t]);
                for (t = e.length; t--;) e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(u), o = !1, e.splice(t, 1));
                (o || !u) && i.dequeue(this, n)
            })
        }
    });
    i.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.speed = function (n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function () {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.easing = {
        linear: function (n) {
            return n
        },
        swing: function (n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.timers = [];
    i.fx = f.prototype.init;
    i.fx.tick = function () {
        var u, n = i.timers,
            r = 0;
        for (b = i.now(); r < n.length; r++) u = n[r], u() || n[r] !== u || n.splice(r--, 1);
        n.length || i.fx.stop();
        b = t
    };
    i.fx.timer = function (n) {
        n() && i.timers.push(n) && !ht && (ht = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.interval = 13;
    i.fx.stop = function () {
        clearInterval(ht);
        ht = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fx.step = {};
    i.expr && i.expr.filters && (i.expr.filters.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem
        }).length
    });
    ri = /^(?:body|html)$/i;
    i.fn.offset = function (n) {
        if (arguments.length) return n === t ? this : this.each(function (t) {
            i.offset.setOffset(this, n, t)
        });
        var u, o, s, h, c, l, a, f = {
                top: 0,
                left: 0
            },
            r = this[0],
            e = r && r.ownerDocument;
        if (e) return (o = e.body) === r ? i.offset.bodyOffset(r) : (u = e.documentElement, !i.contains(u, r)) ? f : (typeof r.getBoundingClientRect != "undefined" && (f = r.getBoundingClientRect()), s = vu(e), h = u.clientTop || o.clientTop || 0, c = u.clientLeft || o.clientLeft || 0, l = s.pageYOffset || u.scrollTop, a = s.pageXOffset || u.scrollLeft, {
            top: f.top + l - h,
            left: f.left + a - c
        })
    };
    i.offset = {
        bodyOffset: function (n) {
            var t = n.offsetTop,
                r = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(n, "marginTop")) || 0, r += parseFloat(i.css(n, "marginLeft")) || 0), {
                top: t,
                left: r
            }
        },
        setOffset: function (n, t, r) {
            var f = i.css(n, "position");
            f === "static" && (n.style.position = "relative");
            var e = i(n),
                o = e.offset(),
                l = i.css(n, "top"),
                a = i.css(n, "left"),
                v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1,
                u = {},
                s = {},
                h, c;
            v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0);
            i.isFunction(t) && (t = t.call(n, r, o));
            t.top != null && (u.top = t.top - o.top + h);
            t.left != null && (u.left = t.left - o.left + c);
            "using" in t ? t.using.call(n, u) : e.css(u)
        }
    };
    i.fn.extend({
        position: function () {
            if (this[0]) {
                var u = this[0],
                    n = this.offsetParent(),
                    t = this.offset(),
                    r = ri.test(n[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : n.offset();
                return t.top -= parseFloat(i.css(u, "marginTop")) || 0, t.left -= parseFloat(i.css(u, "marginLeft")) || 0, r.top += parseFloat(i.css(n[0], "borderTopWidth")) || 0, r.left += parseFloat(i.css(n[0], "borderLeftWidth")) || 0, {
                    top: t.top - r.top,
                    left: t.left - r.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var n = this.offsetParent || r.body; n && !ri.test(n.nodeName) && i.css(n, "position") === "static";) n = n.offsetParent;
                return n || r.body
            })
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function (f) {
            return i.access(this, function (n, f, e) {
                var o = vu(n);
                if (e === t) return o ? r in o ? o[r] : o.document.documentElement[f] : n[f];
                o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
            }, n, f, arguments.length, null)
        }
    });
    i.each({
        Height: "height",
        Width: "width"
    }, function (n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function (u, f) {
            i.fn[f] = function (f, e) {
                var o = arguments.length && (u || typeof f != "boolean"),
                    s = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(this, function (r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : r.nodeType === 9 ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, f, s) : i.style(r, u, f, s)
                }, r, o ? f : t, o, null)
            }
        })
    });
    n.jQuery = n.$ = i;
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return i
    })
})(window);
lastSuggest = (new Date).getTime();

$(window).scroll(function () {
    $(this).scrollTop() > 300 ? $("#back-top").fadeIn() : $("#back-top").fadeOut()
});
$("#back-top a").click(function () {
    return $("body,html").animate({
        scrollTop: 0
    }, 800), !1
});
gl_fLoadChat = !1;
! function (n) {
    "use strict";
    n.matchMedia = n.matchMedia || function (n) {
        var u, i = n.documentElement,
            f = i.firstElementChild || i.firstChild,
            r = n.createElement("body"),
            t = n.createElement("div");
        return t.id = "mq-test-1", t.style.cssText = "position:absolute;top:-100em", r.style.background = "none", r.appendChild(t),
            function (n) {
                return t.innerHTML = '&shy;<style media="' + n + '"> #mq-test-1 { width: 42px; }<\/style>', i.insertBefore(r, f), u = 42 === t.offsetWidth, i.removeChild(r), {
                    matches: u,
                    media: n
                }
            }
    }(n.document)
}(this),
function (n) {
    "use strict";

    function p() {
        y(!0)
    }
    var t = {};
    n.respond = t;
    t.update = function () {};
    var f = [],
        tt = function () {
            var t = !1;
            try {
                t = new n.XMLHttpRequest
            } catch (i) {
                t = new n.ActiveXObject("Microsoft.XMLHTTP")
            }
            return function () {
                return t
            }
        }(),
        w = function (n, t) {
            var i = tt();
            i && (i.open("GET", n, !0), i.onreadystatechange = function () {
                4 !== i.readyState || 200 !== i.status && 304 !== i.status || t(i.responseText)
            }, 4 !== i.readyState && i.send(null))
        };
    if (t.ajax = w, t.queue = f, t.regex = {
            media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
            keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
            urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
            findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
            only: /(only\s+)?([a-zA-Z]+)\s?/,
            minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
            maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/
        }, t.mediaQueriesSupported = n.matchMedia && null !== n.matchMedia("only all") && n.matchMedia("only all").matches, !t.mediaQueriesSupported) {
        var c, b, l, i = n.document,
            r = i.documentElement,
            e = [],
            o = [],
            u = [],
            a = {},
            k = 30,
            s = i.getElementsByTagName("head")[0] || r,
            it = i.getElementsByTagName("base")[0],
            h = s.getElementsByTagName("link"),
            v = function () {
                var u, t = i.createElement("div"),
                    n = i.body,
                    o = r.style.fontSize,
                    e = n && n.style.fontSize,
                    f = !1;
                return t.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = f = i.createElement("body"), n.style.background = "none"), r.style.fontSize = "100%", n.style.fontSize = "100%", n.appendChild(t), f && r.insertBefore(n, r.firstChild), u = t.offsetWidth, f ? r.removeChild(n) : n.removeChild(t), r.style.fontSize = o, e && (n.style.fontSize = e), u = l = parseFloat(u)
            },
            y = function (t) {
                var rt = "clientWidth",
                    ut = r[rt],
                    ft = "CSS1Compat" === i.compatMode && ut || i.body[rt] || ut,
                    p = {},
                    ct = h[h.length - 1],
                    et = (new Date).getTime(),
                    tt, g, nt, f, it;
                if (t && c && k > et - c) return n.clearTimeout(b), b = n.setTimeout(y, k), void 0;
                c = et;
                for (tt in e)
                    if (e.hasOwnProperty(tt)) {
                        var a = e[tt],
                            w = a.minw,
                            d = a.maxw,
                            ot = null === w,
                            st = null === d,
                            ht = "em";
                        w && (w = parseFloat(w) * (w.indexOf(ht) > -1 ? l || v() : 1));
                        d && (d = parseFloat(d) * (d.indexOf(ht) > -1 ? l || v() : 1));
                        a.hasquery && (ot && st || !(ot || ft >= w) || !(st || d >= ft)) || (p[a.media] || (p[a.media] = []), p[a.media].push(o[a.rules]))
                    }
                for (g in u) u.hasOwnProperty(g) && u[g] && u[g].parentNode === s && s.removeChild(u[g]);
                u.length = 0;
                for (nt in p) p.hasOwnProperty(nt) && (f = i.createElement("style"), it = p[nt].join("\n"), f.type = "text/css", f.media = nt, s.insertBefore(f, ct.nextSibling), f.styleSheet ? f.styleSheet.cssText = it : f.appendChild(i.createTextNode(it)), u.push(f))
            },
            d = function (n, i, r) {
                var h = n.replace(t.regex.keyframes, "").match(t.regex.media),
                    c = h && h.length || 0,
                    l, a, f, v, u, p, w, s;
                for (i = i.substring(0, i.lastIndexOf("/")), l = function (n) {
                        return n.replace(t.regex.urls, "$1" + i + "$2$3")
                    }, a = !c && r, i.length && (i += "/"), a && (c = 1), f = 0; c > f; f++)
                    for (a ? (v = r, o.push(l(n))) : (v = h[f].match(t.regex.findStyles) && RegExp.$1, o.push(RegExp.$2 && l(RegExp.$2))), p = v.split(","), w = p.length, s = 0; w > s; s++) u = p[s], e.push({
                        media: u.split("(")[0].match(t.regex.only) && RegExp.$2 || "all",
                        rules: o.length - 1,
                        hasquery: u.indexOf("(") > -1,
                        minw: u.match(t.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: u.match(t.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    });
                y()
            },
            g = function () {
                if (f.length) {
                    var t = f.shift();
                    w(t.href, function (i) {
                        d(i, t.href, t.media);
                        a[t.href] = !0;
                        n.setTimeout(function () {
                            g()
                        }, 0)
                    })
                }
            },
            nt = function () {
                for (var r = 0; r < h.length; r++) {
                    var i = h[r],
                        t = i.href,
                        u = i.media,
                        e = i.rel && "stylesheet" === i.rel.toLowerCase();
                    t && e && !a[t] && (i.styleSheet && i.styleSheet.rawCssText ? (d(i.styleSheet.rawCssText, t, u), a[t] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(t) && !it || t.replace(RegExp.$1, "").split("/")[0] === n.location.host) && ("//" === t.substring(0, 2) && (t = n.location.protocol + t), f.push({
                        href: t,
                        media: u
                    })))
                }
                g()
            };
        nt();
        t.update = nt;
        t.getEmValue = v;
        n.addEventListener ? n.addEventListener("resize", p, !1) : n.attachEvent && n.attachEvent("onresize", p)
    }
}(this),
function (n, t) {
    function s() {
        var n = r.elements;
        return "string" == typeof n ? n.split(" ") : n
    }

    function u(n) {
        var t = a[n[l]];
        return t || (t = {}, o++, n[l] = o, a[o] = t), t
    }

    function h(n, r, f) {
        return (r || (r = t), i) ? r.createElement(n) : (f || (f = u(r)), r = f.cache[n] ? f.cache[n].cloneNode() : p.test(n) ? (f.cache[n] = f.createElem(n)).cloneNode() : f.createElem(n), r.canHaveChildren && !y.test(n) ? f.frag.appendChild(r) : r)
    }

    function v(n, t) {
        t.cache || (t.cache = {}, t.createElem = n.createElement, t.createFrag = n.createDocumentFragment, t.frag = t.createFrag());
        n.createElement = function (i) {
            return r.shivMethods ? h(i, n, t) : t.createElem(i)
        };
        n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + s().join().replace(/[\w\-]+/g, function (n) {
            return t.createElem(n), t.frag.createElement(n), 'c("' + n + '")'
        }) + ");return n}")(r, t.frag)
    }

    function c(n) {
        var s, o, f;
        return n || (n = t), s = u(n), !r.shivCSS || e || s.hasCSS || (f = n, o = f.createElement("p"), f = f.getElementsByTagName("head")[0] || f.documentElement, o.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}<\/style>", o = f.insertBefore(o.lastChild, f.firstChild), s.hasCSS = !!o), i || v(n, s), n
    }
    var f = n.html5 || {},
        y = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        e, l = "_html5shiv",
        o = 0,
        a = {},
        i, r;
    (function () {
        var n, u, r;
        try {
            n = t.createElement("a");
            n.innerHTML = "<xyz><\/xyz>";
            e = "hidden" in n;
            (u = 1 == n.childNodes.length) || (t.createElement("a"), r = t.createDocumentFragment(), u = "undefined" == typeof r.cloneNode || "undefined" == typeof r.createDocumentFragment || "undefined" == typeof r.createElement);
            i = u
        } catch (f) {
            i = e = !0
        }
    })();
    r = {
        elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== f.shivCSS,
        supportsUnknownElements: i,
        shivMethods: !1 !== f.shivMethods,
        type: "default",
        shivDocument: c,
        createElement: h,
        createDocumentFragment: function (n, r) {
            if (n || (n = t), i) return n.createDocumentFragment();
            for (var r = r || u(n), e = r.frag.cloneNode(), f = 0, o = s(), h = o.length; f < h; f++) e.createElement(o[f]);
            return e
        }
    };
    n.html5 = r;
    c(t)
}(this, document);
"function" != typeof Object.create && (Object.create = function (n) {
        function t() {}
        return t.prototype = n, new t
    }),
    function (n, t, i) {
        var r = {
            init: function (t, i) {
                this.$elem = n(i);
                this.options = n.extend({}, n.fn.owlCarousel.options, this.$elem.data(), t);
                this.userOptions = t;
                this.loadContent()
            },
            loadContent: function () {
                function r(n) {
                    var i, r = "";
                    if ("function" == typeof t.options.jsonSuccess) t.options.jsonSuccess.apply(this, [n]);
                    else {
                        for (i in n.owl) n.owl.hasOwnProperty(i) && (r += n.owl[i].item);
                        t.$elem.html(r)
                    }
                    t.logIn()
                }
                var t = this,
                    i;
                "function" == typeof t.options.beforeInit && t.options.beforeInit.apply(this, [t.$elem]);
                "string" == typeof t.options.jsonPath ? (i = t.options.jsonPath, n.getJSON(i, r)) : t.logIn()
            },
            logIn: function () {
                this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
                this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
                this.$elem.css({
                    opacity: 0
                });
                this.orignalItems = this.options.items;
                this.checkBrowser();
                this.wrapperWidth = 0;
                this.checkVisible = null;
                this.setVars()
            },
            setVars: function () {
                if (0 === this.$elem.children().length) return !1;
                this.baseClass();
                this.eventTypes();
                this.$userItems = this.$elem.children();
                this.itemsAmount = this.$userItems.length;
                this.wrapItems();
                this.$owlItems = this.$elem.find(".owl-item");
                this.$owlWrapper = this.$elem.find(".owl-wrapper");
                this.playDirection = "next";
                this.prevItem = 0;
                this.prevArr = [0];
                this.currentItem = 0;
                this.customEvents();
                this.onStartup()
            },
            onStartup: function () {
                this.updateItems();
                this.calculateAll();
                this.buildControls();
                this.updateControls();
                this.response();
                this.moveEvents();
                this.stopOnHover();
                this.owlStatus();
                !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
                !0 === this.options.autoPlay && (this.options.autoPlay = 5e3);
                this.play();
                this.$elem.find(".owl-wrapper").css("display", "block");
                this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
                this.onstartup = !1;
                this.eachMoveUpdate();
                "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
            },
            eachMoveUpdate: function () {
                !0 === this.options.lazyLoad && this.lazyLoad();
                !0 === this.options.autoHeight && this.autoHeight();
                this.onVisibleItems();
                "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
            },
            updateVars: function () {
                "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
                this.watchVisibility();
                this.updateItems();
                this.calculateAll();
                this.updatePosition();
                this.updateControls();
                this.eachMoveUpdate();
                "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
            },
            reload: function () {
                var n = this;
                t.setTimeout(function () {
                    n.updateVars()
                }, 0)
            },
            watchVisibility: function () {
                var n = this;
                if (!1 === n.$elem.is(":visible")) n.$elem.css({
                    opacity: 0
                }), t.clearInterval(n.autoPlayInterval), t.clearInterval(n.checkVisible);
                else return !1;
                n.checkVisible = t.setInterval(function () {
                    n.$elem.is(":visible") && (n.reload(), n.$elem.animate({
                        opacity: 1
                    }, 200), t.clearInterval(n.checkVisible))
                }, 500)
            },
            wrapItems: function () {
                this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"><\/div>');
                this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
                this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
                this.$elem.css("display", "block")
            },
            baseClass: function () {
                var n = this.$elem.hasClass(this.options.baseClass),
                    t = this.$elem.hasClass(this.options.theme);
                n || this.$elem.addClass(this.options.baseClass);
                t || this.$elem.addClass(this.options.theme)
            },
            updateItems: function () {
                var t, i;
                if (!1 === this.options.responsive) return !1;
                if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
                if (t = n(this.options.responsiveBaseWidth).width(), t > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)
                    for (this.options.itemsCustom.sort(function (n, t) {
                            return n[0] - t[0]
                        }), i = 0; i < this.options.itemsCustom.length; i += 1) this.options.itemsCustom[i][0] <= t && (this.options.items = this.options.itemsCustom[i][1]);
                else t <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), t <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), t <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), t <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), t <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
                this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
            },
            response: function () {
                var i = this,
                    u, r;
                if (!0 !== i.options.responsive) return !1;
                r = n(t).width();
                i.resizer = function () {
                    n(t).width() !== r && (!1 !== i.options.autoPlay && t.clearInterval(i.autoPlayInterval), t.clearTimeout(u), u = t.setTimeout(function () {
                        r = n(t).width();
                        i.updateVars()
                    }, i.options.responsiveRefreshRate))
                };
                n(t).resize(i.resizer)
            },
            updatePosition: function () {
                this.jumpTo(this.currentItem);
                !1 !== this.options.autoPlay && this.checkAp()
            },
            appendItemsSizes: function () {
                var t = this,
                    i = 0,
                    r = t.itemsAmount - t.options.items;
                t.$owlItems.each(function (u) {
                    var f = n(this);
                    f.css({
                        width: t.itemWidth
                    }).data("owl-item", Number(u));
                    (0 == u % t.options.items || u === r) && (u > r || (i += 1));
                    f.data("owl-roundPages", i)
                })
            },
            appendWrapperSizes: function () {
                this.$owlWrapper.css({
                    width: this.$owlItems.length * this.itemWidth * 2,
                    left: 0
                });
                this.appendItemsSizes()
            },
            calculateAll: function () {
                this.calculateWidth();
                this.appendWrapperSizes();
                this.loops();
                this.max()
            },
            calculateWidth: function () {
                this.itemWidth = Math.round(this.$elem.width() / this.options.items)
            },
            max: function () {
                var n = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
                return this.options.items > this.itemsAmount ? this.maximumPixels = n = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = n), n
            },
            min: function () {
                return 0
            },
            loops: function () {
                var r = 0,
                    u = 0,
                    t, i;
                for (this.positionsInArray = [0], this.pagesInArray = [], t = 0; t < this.itemsAmount; t += 1) u += this.itemWidth, this.positionsInArray.push(-u), !0 === this.options.scrollPerPage && (i = n(this.$owlItems[t]), i = i.data("owl-roundPages"), i !== r && (this.pagesInArray[r] = this.positionsInArray[t], r = i))
            },
            buildControls: function () {
                (!0 === this.options.navigation || !0 === this.options.pagination) && (this.owlControls = n('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem));
                !0 === this.options.pagination && this.buildPagination();
                !0 === this.options.navigation && this.buildButtons()
            },
            buildButtons: function () {
                var t = this,
                    i = n('<div class="owl-buttons"/>');
                t.owlControls.append(i);
                t.buttonPrev = n("<div/>", {
                    "class": "owl-prev",
                    html: t.options.navigationText[0] || ""
                });
                t.buttonNext = n("<div/>", {
                    "class": "owl-next",
                    html: t.options.navigationText[1] || ""
                });
                i.append(t.buttonPrev).append(t.buttonNext);
                i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (n) {
                    n.preventDefault()
                });
                i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (i) {
                    i.preventDefault();
                    n(this).hasClass("owl-next") ? t.next() : t.prev()
                })
            },
            buildPagination: function () {
                var t = this;
                t.paginationWrapper = n('<div class="owl-pagination"/>');
                t.owlControls.append(t.paginationWrapper);
                t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (i) {
                    i.preventDefault();
                    Number(n(this).data("owl-page")) !== t.currentItem && t.goTo(Number(n(this).data("owl-page")), !0)
                })
            },
            updatePagination: function () {
                var r, u, f, t, i, e;
                if (!1 === this.options.pagination) return !1;
                for (this.paginationWrapper.html(""), r = 0, u = this.itemsAmount - this.itemsAmount % this.options.items, t = 0; t < this.itemsAmount; t += 1) 0 == t % this.options.items && (r += 1, u === t && (f = this.itemsAmount - this.options.items), i = n("<div/>", {
                    "class": "owl-page"
                }), e = n("<span><\/span>", {
                    text: !0 === this.options.paginationNumbers ? r : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), i.append(e), i.data("owl-page", u === t ? f : t), i.data("owl-roundPages", r), this.paginationWrapper.append(i));
                this.checkPagination()
            },
            checkPagination: function () {
                var t = this;
                if (!1 === t.options.pagination) return !1;
                t.paginationWrapper.find(".owl-page").each(function () {
                    n(this).data("owl-roundPages") === n(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), n(this).addClass("active"))
                })
            },
            checkNavigation: function () {
                if (!1 === this.options.navigation) return !1;
                !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
            },
            updateControls: function () {
                this.updatePagination();
                this.checkNavigation();
                this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
            },
            destroyControls: function () {
                this.owlControls && this.owlControls.remove()
            },
            next: function (n) {
                if (this.isTransition) return !1;
                if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                    if (!0 === this.options.rewindNav) this.currentItem = 0, n = "rewind";
                    else return this.currentItem = this.maximumItem, !1;
                this.goTo(this.currentItem, n)
            },
            prev: function (n) {
                if (this.isTransition) return !1;
                if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem)
                    if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, n = "rewind";
                    else return this.currentItem = 0, !1;
                this.goTo(this.currentItem, n)
            },
            goTo: function (n, i, r) {
                var u = this;
                if (u.isTransition) return !1;
                if ("function" == typeof u.options.beforeMove && u.options.beforeMove.apply(this, [u.$elem]), n >= u.maximumItem ? n = u.maximumItem : 0 >= n && (n = 0), u.currentItem = u.owl.currentItem = n, !1 !== u.options.transitionStyle && "drag" !== r && 1 === u.options.items && !0 === u.browser.support3d) return u.swapSpeed(0), !0 === u.browser.support3d ? u.transition3d(u.positionsInArray[n]) : u.css2slide(u.positionsInArray[n], 1), u.afterGo(), u.singleItemTransition(), !1;
                n = u.positionsInArray[n];
                !0 === u.browser.support3d ? (u.isCss3Finish = !1, !0 === i ? (u.swapSpeed("paginationSpeed"), t.setTimeout(function () {
                    u.isCss3Finish = !0
                }, u.options.paginationSpeed)) : "rewind" === i ? (u.swapSpeed(u.options.rewindSpeed), t.setTimeout(function () {
                    u.isCss3Finish = !0
                }, u.options.rewindSpeed)) : (u.swapSpeed("slideSpeed"), t.setTimeout(function () {
                    u.isCss3Finish = !0
                }, u.options.slideSpeed)), u.transition3d(n)) : !0 === i ? u.css2slide(n, u.options.paginationSpeed) : "rewind" === i ? u.css2slide(n, u.options.rewindSpeed) : u.css2slide(n, u.options.slideSpeed);
                u.afterGo()
            },
            jumpTo: function (n) {
                "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
                n >= this.maximumItem || -1 === n ? n = this.maximumItem : 0 >= n && (n = 0);
                this.swapSpeed(0);
                !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[n]) : this.css2slide(this.positionsInArray[n], 1);
                this.currentItem = this.owl.currentItem = n;
                this.afterGo()
            },
            afterGo: function () {
                this.prevArr.push(this.currentItem);
                this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
                this.prevArr.shift(0);
                this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
                "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
            },
            stop: function () {
                this.apStatus = "stop";
                t.clearInterval(this.autoPlayInterval)
            },
            checkAp: function () {
                "stop" !== this.apStatus && this.play()
            },
            play: function () {
                var n = this;
                if (n.apStatus = "play", !1 === n.options.autoPlay) return !1;
                t.clearInterval(n.autoPlayInterval);
                n.autoPlayInterval = t.setInterval(function () {
                    n.next(!0)
                }, n.options.autoPlay)
            },
            swapSpeed: function (n) {
                "slideSpeed" === n ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === n ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof n && this.$owlWrapper.css(this.addCssSpeed(n))
            },
            addCssSpeed: function (n) {
                return {
                    "-webkit-transition": "all " + n + "ms ease",
                    "-moz-transition": "all " + n + "ms ease",
                    "-o-transition": "all " + n + "ms ease",
                    transition: "all " + n + "ms ease"
                }
            },
            removeTransition: function () {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function (n) {
                return {
                    "-webkit-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + n + "px, 0px, 0px)",
                    transform: "translate3d(" + n + "px, 0px,0px)"
                }
            },
            transition3d: function (n) {
                this.$owlWrapper.css(this.doTranslate(n))
            },
            css2move: function (n) {
                this.$owlWrapper.css({
                    left: n
                })
            },
            css2slide: function (n, t) {
                var i = this;
                i.isCssFinish = !1;
                i.$owlWrapper.stop(!0, !0).animate({
                    left: n
                }, {
                    duration: t || i.options.slideSpeed,
                    complete: function () {
                        i.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function () {
                var n = i.createElement("div");
                n.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
                n = n.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
                this.browser = {
                    support3d: null !== n && 1 === n.length,
                    isTouch: "ontouchstart" in t || t.navigator.msMaxTouchPoints
                }
            },
            moveEvents: function () {
                (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) && (this.gestures(), this.disabledEvents())
            },
            eventTypes: function () {
                var n = ["s", "e", "x"];
                this.ev_types = {};
                !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? n = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? n = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (n = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
                this.ev_types.start = n[0];
                this.ev_types.move = n[1];
                this.ev_types.end = n[2]
            },
            disabledEvents: function () {
                this.$elem.on("dragstart.owl", function (n) {
                    n.preventDefault()
                });
                this.$elem.on("mousedown.disableTextSelect", function (t) {
                    return n(t.target).is("input, textarea, select, option")
                })
            },
            gestures: function () {
                function f(n) {
                    if (void 0 !== n.touches) return {
                        x: n.touches[0].pageX,
                        y: n.touches[0].pageY
                    };
                    if (void 0 === n.touches) {
                        if (void 0 !== n.pageX) return {
                            x: n.pageX,
                            y: n.pageY
                        };
                        if (void 0 === n.pageX) return {
                            x: n.clientX,
                            y: n.clientY
                        }
                    }
                }

                function e(t) {
                    "on" === t ? (n(i).on(r.ev_types.move, o), n(i).on(r.ev_types.end, s)) : "off" === t && (n(i).off(r.ev_types.move), n(i).off(r.ev_types.end))
                }

                function o(e) {
                    e = e.originalEvent || e || t.event;
                    r.newPosX = f(e).x - u.offsetX;
                    r.newPosY = f(e).y - u.offsetY;
                    r.newRelativeX = r.newPosX - u.relativePos;
                    "function" == typeof r.options.startDragging && !0 !== u.dragging && 0 !== r.newRelativeX && (u.dragging = !0, r.options.startDragging.apply(r, [r.$elem]));
                    (8 < r.newRelativeX || -8 > r.newRelativeX) && !0 === r.browser.isTouch && (void 0 !== e.preventDefault ? e.preventDefault() : e.returnValue = !1, u.sliding = !0);
                    (10 < r.newPosY || -10 > r.newPosY) && !1 === u.sliding && n(i).off("touchmove.owl");
                    r.newPosX = Math.max(Math.min(r.newPosX, r.newRelativeX / 5), r.maximumPixels + r.newRelativeX / 5);
                    !0 === r.browser.support3d ? r.transition3d(r.newPosX) : r.css2move(r.newPosX)
                }

                function s(i) {
                    i = i.originalEvent || i || t.event;
                    var f;
                    i.target = i.target || i.srcElement;
                    u.dragging = !1;
                    !0 !== r.browser.isTouch && r.$owlWrapper.removeClass("grabbing");
                    r.dragDirection = r.owl.dragDirection = 0 > r.newRelativeX ? "left" : "right";
                    0 !== r.newRelativeX && (f = r.getNewPosition(), r.goTo(f, !1, "drag"), u.targetElement === i.target && !0 !== r.browser.isTouch && (n(i.target).on("click.disable", function (t) {
                        t.stopImmediatePropagation();
                        t.stopPropagation();
                        t.preventDefault();
                        n(t.target).off("click.disable")
                    }), i = n._data(i.target, "events").click, f = i.pop(), i.splice(0, 0, f)));
                    e("off")
                }
                var r = this,
                    u = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                r.isCssFinish = !0;
                r.$elem.on(r.ev_types.start, ".owl-wrapper", function (i) {
                    i = i.originalEvent || i || t.event;
                    var o;
                    if (3 === i.which) return !1;
                    if (!(r.itemsAmount <= r.options.items)) {
                        if (!1 === r.isCssFinish && !r.options.dragBeforeAnimFinish || !1 === r.isCss3Finish && !r.options.dragBeforeAnimFinish) return !1;
                        !1 !== r.options.autoPlay && t.clearInterval(r.autoPlayInterval);
                        !0 === r.browser.isTouch || r.$owlWrapper.hasClass("grabbing") || r.$owlWrapper.addClass("grabbing");
                        r.newPosX = 0;
                        r.newRelativeX = 0;
                        n(this).css(r.removeTransition());
                        o = n(this).position();
                        u.relativePos = o.left;
                        u.offsetX = f(i).x - o.left;
                        u.offsetY = f(i).y - o.top;
                        e("on");
                        u.sliding = !1;
                        u.targetElement = i.target || i.srcElement
                    }
                })
            },
            getNewPosition: function () {
                var n = this.closestItem();
                return n > this.maximumItem ? n = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = n = 0), n
            },
            closestItem: function () {
                var t = this,
                    i = !0 === t.options.scrollPerPage ? t.pagesInArray : t.positionsInArray,
                    u = t.newPosX,
                    r = null;
                return n.each(i, function (f, e) {
                    u - t.itemWidth / 20 > i[f + 1] && u - t.itemWidth / 20 < e && "left" === t.moveDirection() ? (r = e, t.currentItem = !0 === t.options.scrollPerPage ? n.inArray(r, t.positionsInArray) : f) : u + t.itemWidth / 20 < e && u + t.itemWidth / 20 > (i[f + 1] || i[f] - t.itemWidth) && "right" === t.moveDirection() && (!0 === t.options.scrollPerPage ? (r = i[f + 1] || i[i.length - 1], t.currentItem = n.inArray(r, t.positionsInArray)) : (r = i[f + 1], t.currentItem = f + 1))
                }), t.currentItem
            },
            moveDirection: function () {
                var n;
                return 0 > this.newRelativeX ? (n = "right", this.playDirection = "next") : (n = "left", this.playDirection = "prev"), n
            },
            customEvents: function () {
                var n = this;
                n.$elem.on("owl.next", function () {
                    n.next()
                });
                n.$elem.on("owl.prev", function () {
                    n.prev()
                });
                n.$elem.on("owl.play", function (t, i) {
                    n.options.autoPlay = i;
                    n.play();
                    n.hoverStatus = "play"
                });
                n.$elem.on("owl.stop", function () {
                    n.stop();
                    n.hoverStatus = "stop"
                });
                n.$elem.on("owl.goTo", function (t, i) {
                    n.goTo(i)
                });
                n.$elem.on("owl.jumpTo", function (t, i) {
                    n.jumpTo(i)
                })
            },
            stopOnHover: function () {
                var n = this;
                !0 === n.options.stopOnHover && !0 !== n.browser.isTouch && !1 !== n.options.autoPlay && (n.$elem.on("mouseover", function () {
                    n.stop()
                }), n.$elem.on("mouseout", function () {
                    "stop" !== n.hoverStatus && n.play()
                }))
            },
            lazyLoad: function () {
                var r, t, u, i, f;
                if (!1 === this.options.lazyLoad) return !1;
                for (r = 0; r < this.itemsAmount; r += 1) t = n(this.$owlItems[r]), "loaded" !== t.data("owl-loaded") && (u = t.data("owl-item"), i = t.find(".lazyOwl"), "string" != typeof i.data("src") ? t.data("owl-loaded", "loaded") : (void 0 === t.data("owl-loaded") && (i.hide(), t.addClass("loading").data("owl-loaded", "checked")), (f = !0 === this.options.lazyFollow ? u >= this.currentItem : !0) && u < this.currentItem + this.options.items && i.length && this.lazyPreload(t, i)))
            },
            lazyPreload: function (n, i) {
                function u() {
                    n.data("owl-loaded", "loaded").removeClass("loading");
                    i.removeAttr("data-src");
                    "fade" === r.options.lazyEffect ? i.fadeIn(400) : i.show();
                    "function" == typeof r.options.afterLazyLoad && r.options.afterLazyLoad.apply(this, [r.$elem])
                }

                function f() {
                    e += 1;
                    r.completeImg(i.get(0)) || !0 === o ? u() : 100 >= e ? t.setTimeout(f, 100) : u()
                }
                var r = this,
                    e = 0,
                    o;
                "DIV" === i.prop("tagName") ? (i.css("background-image", "url(" + i.data("src") + ")"), o = !0) : i[0].src = i.data("src");
                f()
            },
            autoHeight: function () {
                function u() {
                    var r = n(i.$owlItems[i.currentItem]).height();
                    i.wrapperOuter.css("height", r + "px");
                    i.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function () {
                        i.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function f() {
                    r += 1;
                    i.completeImg(e.get(0)) ? u() : 100 >= r ? t.setTimeout(f, 100) : i.wrapperOuter.css("height", "")
                }
                var i = this,
                    e = n(i.$owlItems[i.currentItem]).find("img"),
                    r;
                void 0 !== e.get(0) ? (r = 0, f()) : u()
            },
            completeImg: function (n) {
                return !n.complete || "undefined" != typeof n.naturalWidth && 0 === n.naturalWidth ? !1 : !0
            },
            onVisibleItems: function () {
                var t;
                for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], t = this.currentItem; t < this.currentItem + this.options.items; t += 1) this.visibleItems.push(t), !0 === this.options.addClassActive && n(this.$owlItems[t]).addClass("active");
                this.owl.visibleItems = this.visibleItems
            },
            transitionTypes: function (n) {
                this.outClass = "owl-" + n + "-out";
                this.inClass = "owl-" + n + "-in"
            },
            singleItemTransition: function () {
                var n = this,
                    u = n.outClass,
                    f = n.inClass,
                    t = n.$owlItems.eq(n.currentItem),
                    i = n.$owlItems.eq(n.prevItem),
                    e = Math.abs(n.positionsInArray[n.currentItem]) + n.positionsInArray[n.prevItem],
                    r = Math.abs(n.positionsInArray[n.currentItem]) + n.itemWidth / 2;
                n.isTransition = !0;
                n.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": r + "px",
                    "-moz-perspective-origin": r + "px",
                    "perspective-origin": r + "px"
                });
                i.css({
                    position: "relative",
                    left: e + "px"
                }).addClass(u).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                    n.endPrev = !0;
                    i.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                    n.clearTransStyle(i, u)
                });
                t.addClass(f).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                    n.endCurrent = !0;
                    t.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                    n.clearTransStyle(t, f)
                })
            },
            clearTransStyle: function (n, t) {
                n.css({
                    position: "",
                    left: ""
                }).removeClass(t);
                this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
            },
            owlStatus: function () {
                this.owl = {
                    userOptions: this.userOptions,
                    baseElement: this.$elem,
                    userItems: this.$userItems,
                    owlItems: this.$owlItems,
                    currentItem: this.currentItem,
                    prevItem: this.prevItem,
                    visibleItems: this.visibleItems,
                    isTouch: this.browser.isTouch,
                    browser: this.browser,
                    dragDirection: this.dragDirection
                }
            },
            clearEvents: function () {
                this.$elem.off(".owl owl mousedown.disableTextSelect");
                n(i).off(".owl owl");
                n(t).off("resize", this.resizer)
            },
            unWrap: function () {
                0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
                this.clearEvents();
                this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
            },
            destroy: function () {
                this.stop();
                t.clearInterval(this.checkVisible);
                this.unWrap();
                this.$elem.removeData()
            },
            reinit: function (t) {
                t = n.extend({}, this.userOptions, t);
                this.unWrap();
                this.init(t, this.$elem)
            },
            addItem: function (n, t) {
                var i;
                if (!n) return !1;
                if (0 === this.$elem.children().length) return this.$elem.append(n), this.setVars(), !1;
                this.unWrap();
                i = void 0 === t || -1 === t ? -1 : t;
                i >= this.$userItems.length || -1 === i ? this.$userItems.eq(-1).after(n) : this.$userItems.eq(i).before(n);
                this.setVars()
            },
            removeItem: function (n) {
                if (0 === this.$elem.children().length) return !1;
                n = void 0 === n || -1 === n ? -1 : n;
                this.unWrap();
                this.$userItems.eq(n).remove();
                this.setVars()
            }
        };
        n.fn.owlCarousel = function (t) {
            return this.each(function () {
                if (!0 === n(this).data("owl-init")) return !1;
                n(this).data("owl-init", !0);
                var i = Object.create(r);
                i.init(t, this);
                n.data(this, "owlCarousel", i)
            })
        };
        n.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["â€¹", "â€º"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: t,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document),
    function (n, t, i, r) {
        var u = n(t);
        n.fn.lazyload = function (f) {
            function s() {
                var t = 0;
                o.each(function () {
                    var i = n(this);
                    if ((!e.skip_invisible || i.is(":visible")) && !n.abovethetop(this, e))
                        if (n.belowthefold(this, e)) {
                            if (++t > e.failure_limit) return !1
                        } else i.trigger("appear"), t = 0
                })
            }
            var o = this,
                h, e = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: t,
                    data_attribute: "original",
                    skip_invisible: !0,
                    appear: null,
                    load: null,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX6+vqsEtnpAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=="
                };
            return f && (r !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), r !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), n.extend(e, f)), h = e.container === r || e.container === t ? u : n(e.container), 0 === e.event.indexOf("scroll") && h.bind(e.event, function () {
                return s()
            }), this.each(function () {
                var i = this,
                    t = n(i);
                i.loaded = !1;
                (t.attr("src") === r || t.attr("src") === !1) && t.is("img") && t.attr("src", e.placeholder);
                t.one("appear", function () {
                    if (!this.loaded) {
                        if (e.appear) {
                            var r = o.length;
                            e.appear.call(i, r, e)
                        }
                        n("<img />").bind("load", function () {
                            var r = t.attr("data-" + e.data_attribute),
                                u, f;
                            t.hide();
                            t.is("img") ? t.attr("src", r) : t.css("background-image", "url('" + r + "')");
                            t[e.effect](e.effect_speed);
                            i.loaded = !0;
                            u = n.grep(o, function (n) {
                                return !n.loaded
                            });
                            o = n(u);
                            e.load && (f = o.length, e.load.call(i, f, e))
                        }).attr("src", t.attr("data-" + e.data_attribute))
                    }
                });
                0 !== e.event.indexOf("scroll") && t.bind(e.event, function () {
                    i.loaded || t.trigger("appear")
                })
            }), u.bind("resize", function () {
                s()
            }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && u.bind("pageshow", function (t) {
                t.originalEvent && t.originalEvent.persisted && o.each(function () {
                    n(this).trigger("appear")
                })
            }), n(i).ready(function () {
                s()
            }), this
        };
        n.belowthefold = function (i, f) {
            var e;
            return e = f.container === r || f.container === t ? (t.innerHeight ? t.innerHeight : u.height()) + u.scrollTop() : n(f.container).offset().top + n(f.container).height(), e <= n(i).offset().top - f.threshold
        };
        n.abovethetop = function (i, f) {
            var e;
            return e = f.container === r || f.container === t ? u.scrollTop() : n(f.container).offset().top, e >= n(i).offset().top + f.threshold + n(i).height()
        };
        n.inviewport = function (t, i) {
            return !n.belowthefold(t, i) && !n.abovethetop(t, i)
        };
        n.extend(n.expr[":"], {
            "below-the-fold": function (t) {
                return n.belowthefold(t, {
                    threshold: 0
                })
            },
            "above-the-top": function (t) {
                return !n.belowthefold(t, {
                    threshold: 0
                })
            },
            "in-viewport": function (t) {
                return n.inviewport(t, {
                    threshold: 0
                })
            },
            "above-the-fold": function (t) {
                return !n.belowthefold(t, {
                    threshold: 0
                })
            }
        })
    }(jQuery, window, document);
$(document).ready(function () {
    initRating();
    initRatingArticle()
});
gl_ifcH = !1;
gl_prevScore = 0;
gl_sendRating = !1;
gl_lFT = !1;
gl_isFeedbackLoad = !1;
isSendFback = !1;
var gl_TypeImg = 1,
    gl_CurrColor = 0,
    clearcache = window.location.search.indexOf("clearcache=1") != -1 ? 1 : 0,
    CHAT_ENABLED = 1;
$(document).ready(function () {
    console.log("pp");
    initPage();
    InitScroll();
    initLazy();
    loadFeatureSlide();
    loadSpec();
    loadArticle();
    loadGallery();
    checkHashTag();
    checkHaNoi();
    initAcc();
    
});
isTrigLazy = !1;
gl_cprImg = !1;
flsc = !1;
gl_lFT = !1;
f_sttk = !1;
$(document).ready(function () {
    $("#txtPro").keyup(function () {
        var n = this.value;
        $(".checkexist .listcity .scroll a").each(function () {
            var t = $(this).text(),
                i = /[\-\[\]{}()*+?.,\\\^$|#\s]/g,
                r = new RegExp(n.replace(i, "\\$&"), "gi"),
                u = new RegExp(locdau(n).replace(i, "\\$&"), "gi");
            t.search(r) !== -1 || locdau(t).search(r) !== -1 || locdau(t).search(u) !== -1 ? $(this).show() : $(this).hide()
        })
    });
    $("#txtDis").keyup(function () {
        var n = this.value;
        $(".checkexist .listdist .scroll a").each(function () {
            var t = $(this).text(),
                i = /[\-\[\]{}()*+?.,\\\^$|#\s]/g,
                r = new RegExp(n.replace(i, "\\$&"), "gi"),
                u = new RegExp(locdau(n).replace(i, "\\$&"), "gi");
            t.search(r) !== -1 || locdau(t).search(r) !== -1 || locdau(t).search(u) !== -1 ? $(this).show() : $(this).hide()
        })
    });
    $(".checkexist .city").click(function () {
        $(".listcity").slideToggle();
        $(".listdist").hide();
        $(".listcolor").hide()
    });
    $(".checkexist .dist").click(function () {
        $(".listdist").slideToggle();
        $(".listcity").hide();
        $(".listcolor").hide()
    });
    ClickDis();
    $(".checkexist .listcity .scroll a").click(function () {
        $(".checkexist .listcity").hide();
        $(".checkexist .city").html($(this).text());
        $("#ProvinceId").val($(this).attr("data-value"));
        $("#DistricId").val("-1");
        $(".checkexist .dist span").html("Chá»n quáº­n, huyá»‡n");
        POSTAjax("/aj/OrderV4/GetDistrictStoreByProvince", {
            iProvince: $(this).attr("data-value")
        }, BeforeSendAjax, function (n) {
            $(".checkexist .listdist .scroll").html(n);
            ClickDis();
            $(".checkexist .dist").click();
            CheckStockLoadStore();
            EndSendAjax()
        }, ErrorAjax, !0)
    });
    $(".checkexist .choosecolor span").click(function () {
        $(".listcolor").slideToggle();
        $(".listcolor img.lazy").lazyload({
            event: "sporty"
        });
        $(".listcity").hide();
        $(".listdist").hide()
    });
    $(".checkexist .listcolor a").click(function () {
        $("#ProductCode").val($(this).attr("data-value"));
        $(".checkexist .listcolor a").removeClass("choosed");
        $(this).addClass("choosed");
        $(".listcolor").hide();
        $(".checkexist .choosecolor span").html("MÃ u: " + $(this).text());
        CheckStockLoadStore()
    });
    $(".checkexist .listcolor a").length == 1 && CheckStockLoadStore()
});
$(document).ready(function () {
    $(".option-repay").click(function (n) {
        n.preventDefault();
        $(this).hasClass("active") ? ($(this).removeClass("active"), $(".notapply").removeClass("opacity01"), $(".notechoose").removeClass("opacity01"), $(".pro-title").removeClass("opacity01"), $(".not-repay").removeClass("opacity01"), BuyChoose()) : ($(this).addClass("active"), $(".notapply").addClass("opacity01"), $(".notechoose").addClass("opacity01"), $(".pro-chosse:not(.notapply)").length == 0 && ($(".pro-title").addClass("opacity01"), $(".not-repay").addClass("opacity01")), $(".buy_now").unbind("click"), $(".buy_now").click(function () {
            return window.location.href = $(".buy_ins").attr("href"), !1
        }))
    })
});
/*
//# sourceMappingURL=detail.min.js.map
*/
