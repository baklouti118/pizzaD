function submitA(){
    if($('#n1').val() === '1') {
        var $p1 = 1 * 8
        $(`<div id = 'resDiv'>
        <h1>your price is 8$</h1>
        </div>`).appendTo('#menuBody')
    }
}