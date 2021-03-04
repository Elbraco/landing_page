$('#img1').click(function() {
    console.log('coucou');
    imgSlider('img1.png')
    changeCircleColor('#017143')
})

 $('#img2').on('click', function() {
     imgSlider('img2.png')
     changeCircleColor('#eb7495')
 })

 $('#img3').on('click', function() {
     imgSlider('img3.png')
     changeCircleColor('#d752b1')
 })