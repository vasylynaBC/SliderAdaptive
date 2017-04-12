$(function(){
    var arrSlide=['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];
    var arrText=[ 'Let us introduce you to some wonderful guides and superb hotels and restaurants for your visits to Paris, Versailles palace, the Louvre Museum, Mont-Saint-Michel, or the D-Day beaches. Whether you are planning your first-ever visit to France, or your tenth, our experience and network of partners will prove invaluable.  Your perfect trip to France starts here!', 'Highbury, youre about to get lucky. Thai vendors Farang have run the street food game for the last couple of years but now theyve announced there ready to go all the way. Thats right, theyre opening a full-blown restaurant. Well, almost: its a six-month pop-up, but theres potential to extend and the menu looks mega. Were already fantasising over the pork belly and lobster lon (a spicy Thai dipping sauce, for the unfamiliar) with dipping vegetables and herbs, and a coconut-flavoured beef cheek curry. Theyre opening ahead of Valentines Day on February 3, and we reckon this food will be hotter than your date', ' Rome wasnot built in a day--and youll need much more than a day to take in this timeless city. The city is a real-life collage of piazzas, open-air markets, and astonishing historic sites. Toss a coin into the Trevi Fountain, contemplate the Colosseum and the Pantheon, and sample a perfect espresso or gelato before spending an afternoon shopping at the Campo de’Fiori or Via Veneto. Enjoy some of the most memorable meals of your life here, too, from fresh pasta to succulent fried artichokes or a tender oxtail stew']
    
    var i=0;
    var k=0;
    
   
    
         //функція переключання забражень через radiobut
         
    $('input').each(function(index, element){
        $(element).click(function(){
            i++;
            if(i >= arrSlide.length) i = 0; 
                $('.block').css({
                    backgroundImage:"url("+arrSlide[i]+")"
                })
            k++; 
             if(k >= arrText.length) k = 0; 
                $('.text').text(arrText[k]);
            });
        });
    
    
    //functoin for right arrow
    $('.right').click(function(){
        i++;
        if(i >= arrSlide.length) i = 0; 
                $('.block').css({
                    backgroundImage:"url("+arrSlide[i]+")"
                })
         k++; 
         if(k >= arrText.length) k = 0; 
                $('.text').text(arrText[k]);
       document.forms[0].elements[i].checked = true;
        
    })
    //function for left arrow
    $('.left').click(function(){
        i--;
        if(i <0) i=arrSlide.length-1; 
                $('.block').css({
                    backgroundImage:"url("+arrSlide[i]+")"
                })
        k--;
        if(k <0) k=arrText.length-1; 
        $('.text').text(arrText[k]);
                document.forms[0].elements[i].checked = true;

    })
    
  
    
})