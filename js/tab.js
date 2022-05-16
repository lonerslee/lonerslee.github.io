/******** 课程tab ******/
var tabs = [
    { 
        id: 0, 
        title: '秋秋', 
        num: 100, 
        content: `<p>7年绘画学习基础，精通板绘</p><p>擅长原画厚涂、日系插画、商插等风格</p><p>2年教学经验，课程风格活波、对零基础学员尤其耐心</p>`,
        len: 7,
    },
    { 
        id: 1, 
        title: '西蒙', 
        num: 200, 
        content: `<p>工业设计专业毕业，基础功底扎实</p><p>四川美术学院油画系研修一年，一年外包经验</p><p>五年教师任职经验，擅长多种画风</p>`,
        len: 8,
    },
    { 
        id: 2, 
        title: '兰橙子', 
        num: 20000, 
        content: `<p>从小热爱美术，擅长多种绘画风格</p><p>美术专业毕业，扎实，一年多教育相关经验</p><p>面对学院耐心，热情，深受学员们的喜爱</p>`,
        len: 9,
    }
]
/******** 老师作品tab ******/
var tech = [
    {
        id:0, 
        len: 6
    },
    {
        id:1, 
        len: 6
    },
    {
        id:2, 
        len: 6
    },
    {
        id:3, 
        len: 7
    }
]

/******** 学生评价tab ******/
var comm = [
    {
        id:0, 
        len: 9
    },
    {
        id:1, 
        len: 9
    },
    {
        id:2, 
        len: 9
    }
]

/******** 学生作品tab ******/
var stu = [
    {
        id:0, 
        len: 15
    },
    {
        id:1, 
        len: 14
    },
    {
        id:2, 
        len: 15
    },
    {
        id:3, 
        len: 14
    }
]

var flag = 1, num = 0, imgTimer = null;

; (function (window, $, undefined) {
    /*
     * tab切换插件
     * 用例：$('*').createTab();
     */
    $.fn.createTab = function (opt) {
        var def = {
            activeEvt: 'mouseover',
            activeCls: 'cur'
        }
        $.extend(def, opt);
        this.each(function () {
            var w = $('.zong').outerWidth();
            $('.t-list').css('width', w * tabs.length + 'px');
            $('.tabCon').css('width', w + 'px');
            var $this = $(this);
            var timer;
            $this.find('ul.title li').mouseover(def.activeEvt, function () {
                var index = $(this).index(), that = $(this);
                timer = setTimeout(function () {
                    that.addClass('cur').siblings().removeClass('cur');
                    $this.find('.t-list').animate({ marginLeft: - w * index }, 'slow');
                    renderCourse(tabs[index], index, w);
                }, 300);
            }).mouseout(function () {
                clearTimeout(timer);
            })
        });
    }

})(window, jQuery);
    $(function () {
        renderTabs();
        $(".jyTable").createTab()
})

// 渲染课程顶部tab
function renderTabs() {
    imgTimer ? clearTimeout(imgTimer) : null;
    imgTimer = null;
    var tabUl = document.getElementById('tab-ul');
    var str = '';
    if (tabUl) {
        tabUl.innerHTML = '';
        for (var i = 0; i < tabs.length; i++) {
            str += `<li data-id="tab-${i}" class="${!i ? 'cur' : ''}">${tabs[i].title}老师</li>`;
        }
        tabUl.innerHTML = str;
        renderCourse(tabs[0], 0);
        
    }
}
// 淡入淡出图片

function fadeImg() {
    var sw = document.documentElement.offsetWidth;
    var chgImg = document.getElementsByClassName('chg-item');
    chgImg[num].setAttribute('class', 'chg-item chg-item-check');
    $(chgImg[num]).load(function(){
        $('.chg-img').css('height', $(this).width());
        // $('.chg-desc').css('height', $(this).width());
        $("#owl-demo").owlCarousel({
            items : 4,
            lazyLoad : true,
            autoPlay : true,
            pagination : false
        });
    });
    for (var i = 0; i < chgImg.length; i++) {
        if (i !== num) {
            chgImg[i].setAttribute('class', 'chg-item')
        }
    }
    imgTimer = setTimeout(() => {
        if (num >= (chgImg.length - 1)) {
            num = 0;
        } else {
            num++;
        }
        fadeImg();
    }, 3000)

}

function filterImg() {
    var chgImg = document.getElementsByClassName('chg-item');
    if (!chgImg.length && flag < 5) {
        setTimeout(() => {
            flag++;
            filterImg()
        }, 222)
        return;
    }
    flag = 1;
    fadeImg();
}


// 渲染课程内容
function renderCourse(data, id, width = null) {
    var list = document.getElementById('tab-list');
    var str = '';
    if (list) {
        flag = 1, num = 0;
        imgTimer ? clearTimeout(imgTimer) : null;
        imgTimer = null;
        list.innerHTML = null;
        for (var i = 0; i < tabs.length; i++) {
            if (id !== i) {
                str += `<div class="tabCon row" style="${width ? 'width:' + width + 'px' : ''}"></div>`
            } else {
                var imgStr = '';
                for(var j = 0; j< tabs[i].len; j++){
                    imgStr += `<div class="item">
                        <a class="lightbox" data-lightbox-gallery="gallery2" href="https://cdn.jsdelivr.net/gh/lonerslee/lonerslee.github.io@latest/images/tabs/tab-${i + 1}/${j + 1}.png">
                            <img class="lazyOwl" src="https://cdn.jsdelivr.net/gh/lonerslee/lonerslee.github.io@latest/images/tabs/tab-${i + 1}/${j + 1}.png" alt="">
                        </a>
                    </div>`
                }
                str += `<div class="tabCon row" style="${width ? 'width:' + width + 'px' : ''}">
                    <div class="chg-img col-md-5 col-sm-12"><img class="chg-item" src="https://cdn.jsdelivr.net/gh/lonerslee/lonerslee.github.io@latest/images/tabs/tab-${i + 1}/teacher.png" alt="" /></div>
                    <div class="chg-desc col-md-7 col-sm-12">
                        <h4><span class="tn">${tabs[i].title}</span> <span class="yet">&nbsp;&nbsp;老师&nbsp;</span></h4>
                        ${data.content}
                        <div class="project tab-slide" style="width: 100%">
                            <div id="example1" style="width: 100%">
                                <div id="owl-demo" class="owl-carousel text-center">
                                    ${imgStr}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
        }
    }
    list.innerHTML = str;
    filterImg();
      /* 
    Nivo Lightbox Plugin for gallery/Portfolio 
    */
    $('.portfolio-hover .lightbox').nivoLightbox({
        effect: "slideUp", // The effect to use when showing the lightbox
        theme: "default", // The lightbox theme to use
        keyboardNav: true, // Enable/Disable keyboard navigation (left/right/escape)
        clickOverlayToClose: true, // If false clicking the "close" button will be the only way to close the lightbox
        errorMessage: "The requested content cannot be loaded. Please try again later." // Error message when content can't be loaded
    });

        $('.item .lightbox').nivoLightbox({
    effect: "slideUp", // The effect to use when showing the lightbox
    theme: "default", // The lightbox theme to use
    keyboardNav: true, // Enable/Disable keyboard navigation (left/right/escape)
    clickOverlayToClose: true, // If false clicking the "close" button will be the only way to close the lightbox
    errorMessage: "The requested content cannot be loaded. Please try again later." // Error message when content can't be loaded
    });
}

// 学员评价 学员作品
function renderGallery(type){
    const len = type.search('product') === -1 ? 3 : 4;
    var dom = document.getElementById(type);
    if(dom){
        var fa = '';
        for(var i = 0; i < len; i++){
            fa += `<div class="col-md-${len === 3 ? 4 : 3}"></div>`
        }
        dom.innerHTML = fa;
        setTimeout(() => {
            renderSonCallery(type);
        }, 666)
    }
}


function renderSonCallery(type){
    var str = '', arr = [];
    switch(type){
        case 'teacher-product':
            str = `more/teachers/tab-`;
            arr = tech;
            break;
        case 'gallery-comment':
            str = `more/comments/tab-`;
            arr = comm;
            break;
        case 'gallery-product':
            str = `more/students/tab-`;
            arr = stu;
            break;
        default:
            break;
    }
    for(var i = 0; i < arr.length; i++){
        var dom = document.getElementById(type);
        var son = '';
        for(var j = 1; j <= arr[i].len; j++){
            son += `<div class="gall-item" id="${type + '-' + i + '-' + j}">
            <a href="javascript:showImg('https://cdn.jsdelivr.net/gh/lonerslee/lonerslee.github.io@latest/images/${str}${i + 1}/${j}.png')">
                <img src="https://cdn.jsdelivr.net/gh/lonerslee/lonerslee.github.io@latest/images/${str}${i + 1}/${j}.png" alt="">
                <span class="cover"><i class="icon-focus"></i></span>
            </a>
        </div>`
        }
        dom.children[i].innerHTML = son;
    }
}
renderGallery('teacher-product');
renderGallery('gallery-comment');
renderGallery('gallery-product');