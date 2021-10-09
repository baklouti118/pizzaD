function submitA(){
    if($('#n1').val() < 0 || $('#n2').val() < 0 || $('#n3').val() < 0) {
        alert("please try again there is somthing wrong")
    }
    if($('#tel').val().length !== 8 || $('#tel').val() === '') {
        alert("please dont forget to enter your phone number or retchekt ")
    }
    else if($('#n1').val() >= 0 && $('#n2').val() >= 0 && $('#n3').val() >= 0 && $('#tel').val().length === 8 && $('#tel').val() !== '') {
        var phoneN = $('#tel').val()
    var res = $("<div id = 'billDiv'><h1></h1></div>")
        var myPizza = $("<div id = 'myP'></div>")
    var price1 = $('#n1').val() * 12
    var price2 = $('#n2').val() * 10
    var price3 = $('#n3').val() * 9
    res.text("your bill is " + ( price1 + price2 + price3 ) +"$" +  "   '" + "   you will resive an call on your number "+ "'" + "+216" + phoneN)
    res.appendTo("#menuBody")
    if($('#n1').val()!== '') {
    $('<img class = "resPizza" src="https://www.commerces-de-france.fr/wp-content/uploads/2020/11/Pizza-4-fromages-Andiamo-Pizza-Les-Ulis.png">').appendTo('body')
    var numOfP1 = $('<h1 class = "numberOfPizza"></h1>')
        numOfP1.text("X" + $('#n1').val())
        numOfP1.appendTo('body')
    }
    if($('#n2').val() !== ''){
        $('<img class = "resPizza" src="https://www.commerces-de-france.fr/wp-content/uploads/2020/11/Pizza-4-saisons-Andiamo-Pizza-Les-Ulis.png">').appendTo('body')
        var numOfP2 = $('<h1 class = "numberOfPizza"></h1>')
        numOfP2.text("X" + $('#n2').val())
        numOfP2.appendTo('body')
    }
    if($('#n3').val()!== '') {
        $('<img class = "resPizza" src="https://www.commerces-de-france.fr/wp-content/uploads/2020/11/Pizza-Tonnarella-Andiamo-Pizza-Les-Ulis.png">').appendTo('body')
        var numOfP3 = $('<h1 class = "numberOfPizza"></h1>')
        numOfP3.text("X" + $('#n3').val())
        numOfP3.appendTo('body')
    }
    $("#all").hide()
    $('#menuBody').css('background-image','url(https://hbr.org/resources/images/article_assets/2016/11/nov16-28-468847206-bor.jpg)')
}
}