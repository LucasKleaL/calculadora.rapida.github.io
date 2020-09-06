$(document).ready(function(){

//botoes do primeiro menu (modos de visualizacao)

    $("#botaoModoClaro").click(function(){

        $("#div1").addClass("div1-clara");
        $("#div2").addClass("div2-clara");
        $("#div3").addClass("div3-clara");
        $("#div4").addClass("div4-clara");
        
        $("#htmlBackground").addClass("html-claro");
        $("#h1").addClass("texto-preto");
        $("#h3").addClass("h3-preto");
        $("#h4").addClass("h4-preto");
        $("#h5").addClass("h5-preto");
        $("#h5-2").addClass("h5-2-preto")

    });





//botoes com simbolos de operacoes / operacoes e variaveis

    $("#somar").click(function(){
        var valor1 = parseInt($("#soma1").val());
        var valor2 = parseInt($("#soma2").val());

        var soma = valor1 + valor2;

        $("#resultadoSoma").val(soma);

    });


    $("#subtrair").click(function(){
        var valor1 = parseInt($("#subtracao1").val());
        var valor2 = parseInt($("#subtracao2").val());

        var subtracao = valor1 - valor2;

        $("#resultadoSubtracao").val(subtracao);

    });


    $("#multiplicar").click(function(){
        var valor1 = parseInt($("#multiplicacao1").val());
        var valor2 = parseInt($("#multiplicacao2").val());

        var multiplicacao = valor1 * valor2;

        $("#resultadoMultiplicacao").val(multiplicacao);

    });


    $("#dividir").click(function(){
        var valor1 = parseInt($("#divisao1").val());
        var valor2 = parseInt($("#divisao2").val());

        var divisao = valor1 / valor2;

        $("#resultadoDivisao").val(divisao);

    });


    $("#potenciar").click(function(){
        var valor1 = parseInt($("#potencia1").val());
        var valor2 = parseInt($("#potencia2").val());

        var potencia = valor1 ** valor2;

        $("#resultadoPotencia").val(potencia);

    });

    $("#restoDiv").click(function(){
        var valor1 = parseInt($("#restoDiv1").val());
        var valor2 = parseInt($("#restoDiv2").val());

        var restodiv = valor1 % valor2;

        $("#resultadoRestoDiv").val(restodiv);

    });


//botoes com nome das operacoes escritas

    $("#operacaoEscritaSoma").click(function(){

        var valor1 = parseInt($("#soma1").val());
        var valor2 = parseInt($("#soma2").val());

        var soma = valor1 + valor2;

        $("#resultadoSoma").val(soma);

    });

    $("#operacaoEscritaSubtracao").click(function(){
        var valor1 = parseInt($("#subtracao1").val());
        var valor2 = parseInt($("#subtracao2").val());

        var subtracao = valor1 - valor2;

        $("#resultadoSubtracao").val(subtracao);

    });

    $("#operacaoEscritaMultiplicacao").click(function(){
        var valor1 = parseInt($("#multiplicacao1").val());
        var valor2 = parseInt($("#multiplicacao2").val());

        var multiplicacao = valor1 * valor2;

        $("#resultadoMultiplicacao").val(multiplicacao);

    });

    $("#operacaoEscritaDivisao").click(function(){
        var valor1 = parseInt($("#divisao1").val());
        var valor2 = parseInt($("#divisao2").val());

        var divisao = valor1 / valor2;

        $("#resultadoDivisao").val(divisao);

    });

    $("#operacaoEscritaPotenciacao").click(function(){
        var valor1 = parseInt($("#potencia1").val());
        var valor2 = parseInt($("#potencia2").val());

        var potencia = valor1 ** valor2;

        $("#resultadoPotencia").val(potencia);

    });

    $("#operacaoEscritaRestoDiv").click(function(){
        var valor1 = parseInt($("#restoDiv1").val());
        var valor2 = parseInt($("#restoDiv2").val());

        var restodiv = valor1 % valor2;

        $("#resultadoRestoDiv").val(restodiv);

    });



//botoes de limpar

    $("#limparSoma").click(function(){
        $("#resultadoSoma").val("")
        $("#soma1").val("")
        $("#soma2").val("")
    });

    $("#limparSubtracao").click(function(){
        $("#resultadoSubtracao").val("")
        $("#subtracao1").val("")
        $("#subtracao2").val("")
    });

    $("#limparMultiplicacao").click(function(){
        $("#resultadoMultiplicacao").val("")
        $("#multiplicacao1").val("")
        $("#multiplicacao2").val("")
    });

    $("#limparDivisao").click(function(){
        $("#resultadoDivisao").val("")
        $("#divisao1").val("")
        $("#divisao2").val("")
    });

    $("#limparPotencia").click(function(){
        $("#resultadoPotencia").val("")
        $("#potencia1").val("")
        $("#potencia2").val("")
    });

    $("#limparRestoDiv").click(function(){
        $("#resultadoRestoDiv").val("")
        $("#restoDiv1").val("")
        $("#restoDiv2").val("")
    });

});