function main(){
    
    $("h2").hover(
        function(){
            $(this).addClass("active");
        },
        function(){
            $(this).removeClass("active");
        }
    );
    
    $("h2").click(
        function(){
            $(".meBlock").hide(1000);
        }
    );
    

}

$(document).ready(main);