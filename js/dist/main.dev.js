"use strict";

var r = document.querySelector(':root');

function myMove() {
  var elem = document.getElementById("container-fluid");
  var pos = 0;
  var id = setInterval(frame, 10);
  var data = getQuotes();
  console.log("data");

  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      console.log("hi");
      r.style.setProperty('--color2', "lightgreen");
    }
  }
}

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function success(jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    }
  });
}

function getRandomQuote() {
  return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
}

function getQuote() {
  var randomQuote = getRandomQuote();
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author; //  $('.quote-text').animate({ opacity: 0 }, 500, function() {
  //      $(this).animate({ opacity: 1 }, 500);
  //      $('#text').text(randomQuote.quote);
  //  });
  //  $('.quote-author').animate({ opacity: 0 }, 500, function() {
  //      $(this).animate({ opacity: 1 }, 500);
  //      $('#author').html(randomQuote.author);
  //  });
}