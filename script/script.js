"use Strict";
$(function(){
    $(".collapse").click(function(){
        $(".collapse-nav").slideToggle()
        
    })
    if(screen.width<770){
        $(".collapse-nav a").click(function(e){
            $(".collapse-nav").slideUp()
        })
    }
    $(" .pages").bxSlider({
        auto:true,
        controls:false,
        pause:1500,
        autoHover:true
    })

    $(".video").click(function(e){
        e.preventDefault();
        $("body").append(`<div class="overlay"></div>`)
        $("body").append(`<div class="popup"></div>`)
        $("body").css({"overflow-y":"hidden"})
        $(".popup").append(`<button class="close">❌</button> <iframe width="560" height="315" src="https://www.youtube.com/embed/gMC3gEcD3R0?si=e2IQcFdFxXEdpbwl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)

        
        $(".close").on("click",function(){
            $(".overlay, .popup").remove()
            $("body").css({"overflow":"auto"})
        })
    })

    $(".more").click(function(e){
        e.preventDefault();
        $(".more").toggleClass("actives")
        $(".work-project").toggleClass("hide")
    })
})