function submitA(){
    if($('#n1').val() === '' && $('#n2').val() === '' && $('#n3').val() === '') {
        alert("you didnt shose a pizza please try again")
    }
    if($('#n1').val() > 50 || $('#n2').val() > 50 || $('#n3').val() > 50) {
        alert("bara al3b b3id 3aych weldi")
    }
    if($('#n1').val() < 0 || $('#n2').val() < 0 || $('#n3').val() < 0) {
        alert("please try again there is somthing wrong")
    }
    if($('#tel').val().length !== 8 || $('#tel').val() === '') {
        alert("please dont forget to enter your phone number or its wrong ")
    }
    else if($('#n1').val() >= 0 && $('#n2').val() >= 0 && $('#n3').val() >= 0 && $('#tel').val().length === 8 && $('#tel').val() !== '' && $('#n1').val() < 50 && $('#n2').val() < 50 && $('#n3').val() < 50) {
        if($('#n1').val() !== '' || $('#n2').val() !== '' || $('#n3').val() !== ''){
        var phoneN = $('#tel').val()
        var res = $("<div id = 'billDiv'><h1></h1></div>")
        var res2 = $("<div id = 'billDiv2'><h1></h1></div>")
        var myPizza = $("<div id = 'myP'></div>")
        var price1 = $('#n1').val() * 12
        var price2 = $('#n2').val() * 10
        var price3 = $('#n3').val() * 9
        res.text("your bill is " + ( price1 + price2 + price3 ) +"$")
        res.appendTo("#menuBody")
        res2.text("   you will resive a call on your number " + "+216 " + phoneN)
        res2.appendTo("#menuBody")
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
    $('#menuBody').css('background-image','url(https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1069399090?b=1&k=20&m=1069399090&s=170667a&w=0&h=iJ9taMFft1SiEX9XNgc_UnJmkMUdPH-WbacQSqgmX2g=')
}
}
}
