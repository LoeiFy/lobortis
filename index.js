$(function() {
  $('#fullpage').fullpage({
    verticalCentered: true,
    navigation: true,
    navigationTooltips: ['HOME', 'OUR SKILLS', 'OUR WORKS', 'CONTACT'],
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