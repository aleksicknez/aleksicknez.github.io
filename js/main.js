function main(){
    $("a").hover(
        function(){
            $(this).addClass("active");
        },
        function(){
            $(this).removeClass("active");
        }
    );
    
}

$(document).ready(main);