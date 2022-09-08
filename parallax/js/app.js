$('.hamburger').on('click', () => {
    $('#resp').toggleClass('resp')
    $('#resp').fadeToggle(1000)
})
$('#resp a').on('click', () => {
    $('#resp').removeClass('resp');
})
