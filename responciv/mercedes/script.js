$('body').prepend('<div id="grayLayer" class="grayLayer"></div>');
$("#dropDownMenu").before('<i id="iconBars" class="iconBars"></i>')
.before('<i id="iconClose" class="iconClose"></i>');
$("#iconBars").click(function(){
  $("#dropDownMenu li").show(200);
  $("#grayLayer").show(400);
  $("#iconBars").hide();
  $("#iconClose").show();
});
$("#iconClose").click(function(){
  $("#dropDownMenu li").hide(400);
  $("#grayLayer").hide(400);
  $("#iconClose").hide();
  $("#iconBars").show();
});

// highlight.js
hljs.initHighlightingOnLoad()