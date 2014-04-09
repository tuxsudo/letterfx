$(function(){

  var demo_configs=
  [
    {config:{ fx:'fall', words:true, timing:200 }},
    {config:{ fx:'swirl'}},
    {config:{ fx:'wave', letter_end:'rewind', fx_duration:"300ms"}},
    {config:{ fx:'smear', letter_end:'rewind'}},
    {config:{ fx:'spin fade', pattern:/([aeiou])/ig, fx_duration:"3s" }, text:"{ fx:'spin fade', pattern:/([aeiou])/ig, , fx_duration:'3s' }"},
    {config:{ fx:'fly-right fly-bottom spin'} },
    {config:{ fx:'fly-right fly-bottom spin', backwards:true, letter_end:'stay'} }
  ];

  $("[data-letterfx]").each(function(){
    var fx = $(this).data('letterfx');

    if(fx.match(/^custom\[(.+)\]$/) ){
      var data = demo_configs[ fx.replace(/^custom\[(.+)\]$/, '$1') ];
      fx = data.config;
      fx_string = data.text ? data.text : JSON.stringify(fx);
      var code = '$(".tagline").letterfx('+fx_string+');';
      $(this).click(function(){
        if (! $(".tagline").data('letterfx-obj') || $(".tagline").data('letterfx-obj').isDone() ){
          $(".tagline").letterfx(fx);
          $('.source-code').hide().html(code).fadeIn('slow');
        }
      });
    }


  })

  $(".navbar-brand")
    .letterfx({ fx:'fly-top spin',  timing:150 } )
    .mouseover(function(){$(this).letterfx({fx:'spin'})} );

});