$(document).ready(function(){

//botoes do primeiro menu (modos de visualizacao)

    $("#botaoModoNormal").click(function(){

        $("#div1").removeClass("div1-clara").addClass("div1");
        $("#div2").removeClass("div2-clara").addClass("div2");
        $("#div3").removeClass("div3-clara").addClass("div3");
        $("#div4").removeClass("div4-clara").addClass("div4");

        $("#htmlBackground").removeClass("html-claro").addClass("html");
        $("#h1").removeClass("texto-preto").addClass("texto-branco");
        $("#h3").removeClass("h3-preto").addClass("h3");
        $("#h4").removeClass("h4-preto").addClass("h4");
        $("#h5").removeClass("h5-preto").addClass("h5");
        $("#h5-2").removeClass("h5-2-preto").addClass("h5-2");

        //modo normal botao operacao soma
        $("#operacaoEscritaSoma").removeClass("botao2-daltonico").addClass("botao2")
        $("#somar").removeClass("botao1-daltonico").addClass("botao1")
        $("#limparSoma").removeClass("botao-limpar-daltonico").addClass("botao-limpar")

        //modo normal botao operacao subtracao
        $("#operacaoEscritaSubtracao").removeClass("botao2-daltonico").addClass("botao2")
        $("#subtrair").removeClass("botao1-daltonico").addClass("botao1")
        $("#limparSubtracao").removeClass("botao-limpar-daltonico").addClass("botao-limpar")

        //modo normal botao operacao multiplicacao
        $("#operacaoEscritaMultiplicacao").removeClass("botao2-daltonico").addClass("botao2")
        $("#multiplicar").removeClass("botao1-daltonico").addClass("botao1")
        $("#limparMultiplicacao").removeClass("botao-limpar-daltonico").addClass("botao-limpar")

        //modo normal botao operacao divisao
        $("#operacaoEscritaDivisao").removeClass("botao2-daltonico").addClass("botao2")
        $("#dividir").removeClass("botao1-daltonico").addClass("botao1")
        $("#limparDivisao").removeClass("botao-limpar-daltonico").addClass("botao-limpar")

        //modo normal botao operacao potenciacao
        $("#operacaoEscritaPotenciacao").removeClass("botao2-daltonico").addClass("botao2")
        $("#potenciar").removeClass("botao1-daltonico").addClass("botao1")
        $("#limparPotencia").removeClass("botao-limpar-daltonico").addClass("botao-limpar")

        //modo normal botao resto da divisao
        $("#operacaoEscritaRestoDiv").removeClass("botao2-daltonico").addClass("botao2")
        $("#restoDiv").removeClass("botao1-daltonico").addClass("botao1")
        $("#limparRestoDiv").removeClass("botao-limpar-daltonico").addClass("botao-limpar")

        //modo normal texto de instrucao
        document.querySelector(".h3").innerHTML = "Para utilizar, informe os valores da operação nos campos indicados e clique em qualquer botão laranja, referente a operação desejada.";

    });


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
        $("#h5-2").addClass("h5-2-preto");

    });


    $("#botaoModoDaltonico").click(function(){

        //modo daltonico texto de instrucao
        
        document.querySelector(".h3").innerHTML = "Para utilizar, informe os valores da operação nos campos indicados e clique em qualquer botão amarelo, referente a operação desejada.";

        //modo daltonico operacao soma
        $("#operacaoEscritaSoma").addClass("botao2-daltonico")
        $("#somar").addClass("botao1-daltonico")
        $("#limparSoma").addClass("botao-limpar-daltonico")

        //modo daltonico operacao subtracao
        $("#operacaoEscritaSubtracao").addClass("botao2-daltonico")
        $("#subtrair").addClass("botao1-daltonico")
        $("#limparSubtracao").addClass("botao-limpar-daltonico")

        //modo daltonico operacao multiplicacao
        $("#operacaoEscritaMultiplicacao").addClass("botao2-daltonico")
        $("#multiplicar").addClass("botao1-daltonico")
        $("#limparMultiplicacao").addClass("botao-limpar-daltonico")

        //modo daltonico operacao divisao
        $("#operacaoEscritaDivisao").addClass("botao2-daltonico")
        $("#dividir").addClass("botao1-daltonico")
        $("#limparDivisao").addClass("botao-limpar-daltonico")

        //modo daltonico operacao potenciacao
        $("#operacaoEscritaPotenciacao").addClass("botao2-daltonico")
        $("#potenciar").addClass("botao1-daltonico")
        $("#limparPotencia").addClass("botao-limpar-daltonico")

        //modo daltonico operacao resto da divisao
        $("#operacaoEscritaRestoDiv").addClass("botao2-daltonico")
        $("#restoDiv").addClass("botao1-daltonico")
        $("#limparRestoDiv").addClass("botao-limpar-daltonico")

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