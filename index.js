$(function() {
  $('#fullpage').fullpage({
    verticalCentered: true,
    navigation: true,
    slidesNavigation: true,
    navigationTooltips: ['首页', '产品服务', '作品展示', '联系我们'],
    scrollOverflow: true,
    onLeave: function(index, next) {
      if (next === 2 || next === 3) {
        $('#fp-nav').addClass('black')
      } else {
        $('#fp-nav').removeClass('black')
      }
    }
  })
})