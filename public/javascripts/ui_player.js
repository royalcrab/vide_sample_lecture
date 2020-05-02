var  ui_video = document.getElementById("video_obj");

function init_video(){
    $("#play").on( 'click',  playVideo );
    $("#pause").on( 'click',  pauseVideo );

    ui_video.onloadeddata = function()
    {
        $("#duration").text(ui_video.duration);
    };
    
    ui_video.ontimeupdate = function()
    {
        $("#message").text( ui_video.currentTime );
    };
}

function playVideo()
{
    ui_video.play();
}

function pauseVideo()
{
    ui_video.pause();
}

init_video();