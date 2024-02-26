// jquery shortform-$
$("h1").addClass("big");
$("button").click(function (){
    $("h1").slideToggle();
});

$("h1").before("<button>new</button>")