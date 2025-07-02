    // Exercicio 1
   $("#esconder_paragrafo").click(function(){
    $("#mensagem").css("display","none");
   });

   //Exercicio 2
   $("#botao").click(function(){
    $("#exibir_mensagem").html("Olá, mensagem exibida com sucesso");
   });
   
   //Exercicio 3
   $("#botao_alterar_texto").click(function(){
    $("#alterar_texto").html("Olá eu sou Anthony Bistocchi");
   });

   //Exercicio 4
   $("#lista_mudar_cor").hover(function(){
    $("#lista_mudar_cor").css("color","red")
   });

   $("#lista_mudar_cor").hover(function(){
    $("#lista_mudar_cor").css("border","solid")
   });
   
    //Exercicio 5
    $("img").attr("src","img/jquery.png")
    $("img").css("width","80px")
    $("img").css("height","80px")

   //Exercicio 6
   $("#esconder").click(function(){
    $("p").hide();
   });

   //Exercicio 7
   $("#btn_add_li").click(function(){
    $("#adicionar_li").append("<li>li adicionada</li>")
   });

   //Exercicio 8
   $("#remover").remove();

    //Exercicio 9
   $("#alterar_cor_fundo").click(function(){
    $("body").css("background","#ffd");
   });

    //Exercicio 10
   $('#p_desaparecer').click(function(){
    $('#p_desaparecer').fadeOut()
   });

   //Exercicio 11
   $('#link').click(function(e){
    e.preventDefault();
   });

   //Exercicio 12
   $('#nome').val("Anthony");
   $('#sobrenome').val("Bistocchi");

    //Exercicio 13
   //alert($('#nome').val());
   
   ///Exercicio 14
      $('#iterar_ul li').each(function(index) {
        let texto = $(this).text();
        $('#iterar_ul').append('<p>Item ' + (index + 1) + ': ' + texto + '</p>');
    });