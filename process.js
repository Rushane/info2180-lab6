/* global $ */
$(document).ready(function(){
    $("#singledef").on('click', function(){
       let word = $("#word").val();
       let link = "https://info2180-lab6-rushane.c9users.io/request.php?q="+ word;
       
       $.ajax(link, {
           method: 'GET',
       }).done(function(res){
           $("#result").html(res);
       }).fail(function(err){
           $("#result").html(err);
       });
    });
    
    $("#all").on('click', function(){
        let link = "https://info2180-lab6-rushane.c9users.io/request.php?q=&all=true";
        
        $.ajax(link, {
           method: 'GET',
           dataType: "xml",
       }).done(function(res){
           let defi = $(res).find('definition');
           
           $("#result").html(""); //clear if previous result given
           $("#result").append('<ol></ol>');
           
           $(defi).each(function(){
               let ret = '<h3>'+$(this).attr('name')+'</h3>';
               ret += '<p>'+$(this).text()+'</p>';
               ret += '<p> -'+$(this).attr('author')+'</p>';
               $("#result ol").append('<li>'+ret+'</li>');
           });
       }).fail(function(err){
           $("#result").html(err);
       });
    });
    
});