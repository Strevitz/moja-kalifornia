// californian time zone clock

function getTime() 
{
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
 
    return ((h===0)?+12:"")+h-9+
             ((m<10)?":0":":")+m+
             ((s<10)?":0":":")+s;
             
}

setInterval(function() {
 
    document.getElementById('latime').innerHTML = 'W Kalifornii jest ' + getTime();
     
}, 1000);

// jQuery

$(document).ready(function() {

    var latime = $('#latime');
    latime.fadeIn('slow');

    var parallax = $('.parallax');
    parallax.fadeIn('slow')
            .css({'text-align': 'center',
                  'background-image': 'url("img/la-street.jpg"',
                  'height': '100%',
            /* Create the parallax scrolling effect */
                  'background-attachment': 'fixed',
                  'background-position': 'center',
                  'background-repeat': 'no-repeat',
                  'background-size': 'cover'
        });

    // hidden search input
    
    $( '.form-control' ).hide();

    $( ".btn" ).hover(function() {

        $( '.form-control' ).show( 1000 );

    });
});


