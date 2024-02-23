eval(function(j,b,f,i,h,g){while(f--){if(i[f]){j=j.replace(new RegExp("\\b"+f.toString(b)+"\\b","g"),i[f])}}return j}('5 6(){3 0=4.7("a");b(0.1==="2"){0.1+=" 8"}9{0.1="2"}}',12,12,"x|className|navber|var|document|function|myFunction|getElementById|responsive|else|mynav|if".split("|")));


eval(function(j,b,f,i,h,g){while(f--){if(i[f]){j=j.replace(new RegExp("\\b"+f.toString(b)+"\\b","g"),i[f])}}return j}('6.d(\'c\',a(e){1 4=6.h(\'4\');1 0=6.g(\'j\');1 8=e.i;1 7=e.f;0.3.b=8+"2";0.3.r=7+"2";1 5=q.s()*t;0.3.p=9+5+"2";0.3.l=9+5+"2";4.k(0);m(a(){0.o()},n)});',30,30,"circle|let|px|style|body|size|document|y|x|20|function|left|mousemove|addEventListener||offsetY|createElement|querySelector|offsetX|span|appendChild|height|setTimeout|1800|remove|width|Math|top|random|90".split("|")));




$(document).ready(function() {
    var $projectsList = $('.projects-list');
    var $projects = $projectsList.find('.project');
    var $projectsTags = $('.projects-tags');
    var tagsObj = {};
    var fadeSpeed = 500;
    
    $projects.each(function() {
      var project = this;
      var $project = $(this);
      var $tagsList = $project.find('.tags');
      var tags = $project.data('tags').split(',');
      tags.forEach(function(tag) {
        var li = '<li class="tag">';
        li += tag;
        li += '</li>';
        $tagsList.append($(li));//same li or $(li)?
        
        if (!tagsObj.hasOwnProperty(tag))
          tagsObj[tag] = [];
        tagsObj[tag].push(project);
      });
    });
    
    //console.log(tagsObj);
    $.each(tagsObj, function(tag) {
      var $button = $('<button>' + tag + '</button>');
      $button.on('click',function() {
        if ($projects.is(':animated'))
          return false;
        $(this).addClass('active').siblings().removeClass('active');
        $projects.filter(':visible').fadeOut(fadeSpeed, function() {
          $projects.filter(tagsObj[tag]).fadeIn(fadeSpeed);
        });
      }).appendTo($projectsTags);
    });
    
    $('#all').on('click',function() {
      $(this).addClass('active').siblings().removeClass('active');
      $projects.filter(':visible').fadeOut(fadeSpeed, function() {
        $projects.fadeIn(fadeSpeed);
      });
    });
  });