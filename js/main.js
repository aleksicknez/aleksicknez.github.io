function main(){
    $("a").hover(
        function(){
            $(this,"li").addClass("active");
        },
        function(){
            $(this).removeClass("active");
        }
    );
    
    
}

$(document).ready(main);