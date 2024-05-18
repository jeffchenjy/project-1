  //實現點擊圖標彈出視窗和控制輪播功能。
  $(document).ready(function(e) {
    // 定義通用函數，用於點擊事件處理
    function handleVideoPopupClick($popup, $iframe) {
      return function(e) {
        var $target = e.target.nodeName;
        var video_src = $popup.find('iframe').attr('src');
        if ($target != 'IFRAME') {
          $popup.fadeOut();
          $iframe.slideUp();
          $popup.find('iframe').attr('src', "");
          $popup.find('iframe').attr('src', video_src);
        }
      };
    }
    
    // 綁定點擊事件處理函數到 #video-icon 元素
    $('#video-icon').on('click', function(e) {
      e.preventDefault();
      $('.video-popup').css('display', 'flex');
      $('.iframe-src').slideDown();
    });
  
    // 綁定點擊事件處理函數到 #video-icon-2 元素
    $('#video-icon-2').on('click', function(e) {
      e.preventDefault();
      $('.video-popup-2').css('display', 'flex');
      $('.iframe-src').slideDown();
    });
  
    // 綁定點擊事件處理函數到 .video-popup 和 .video-popup-2 元素
    $('.video-popup').on('click', handleVideoPopupClick($('.video-popup'), $('.iframe-src')));
    $('.video-popup-2').on('click', handleVideoPopupClick($('.video-popup-2'), $('.iframe-src')));
  
    // 初始化 bxSlider 輪播插件
    $('.slider').bxSlider({
      pager: false
    });
  });
  //當視窗發生滾動事件時，檢查滾動的距離，並根據滾動距離添加或移除特定的類來修改導覽欄的外觀。
    $(window).on("load",function () {
        $.scrollIt({
          easing: 'swing',      // the easing function for animation
          scrollTime: 900,       // how long (in ms) the animation takes
          activeClass: 'active', // class given to the active nav element
          onPageChange: null,    // function(pageIndex) that is called when page is changed
          topOffset: -63
        });
    });
  
    // 獲取按鈕元素
    const downloadButton = document.getElementById('downloadButton');
     // 添加點擊事件監聽器
     downloadButton.addEventListener('click', () => {
          // 檔案的 URL
          const fileUrl = 'file/iot_controller.apk';
  
          // 使用 createElemenet 創建 a 標籤
          const link = document.createElement('a');
  
          // 將標籤的 href 屬性設置為檔案的 URL
          link.href = fileUrl;
  
          // 設置標籤的 download 屬性為要下載的檔案名稱
          link.download = 'IoT Car Controller';
  
          // 將標籤添加到文檔中
          document.body.appendChild(link);
  
          // 模擬點擊標籤以開始下載檔案
          link.click();
  
          // 下載完成後移除標籤
          document.body.removeChild(link);
      });
      $(function(){
          $('#BackTop').click(function(){ 
              $('html,body').animate({scrollTop:0}, 333);
          });
          $(window).scroll(function() {
              if ( $(this).scrollTop() > 300 ){
                  $('#BackTop').fadeIn(222);
              } else {
                  $('#BackTop').stop().fadeOut(222);
              }
          }).scroll();
      });