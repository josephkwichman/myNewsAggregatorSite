$(function() {

  $.ajax({
    type: "GET",
    url: 'http://feeds.reuters.com/reuters/topNews',
    dataType: 'xml',
    success: function(response) {
      console.log('response', response);
      var type = "#topnews";
      addNewsArticles(response, type);

      $.ajax({
        type: "GET",
        url: 'http://www.wsmv.com/category/208528/news?clienttype=rss',
        dataType: 'xml',
        success: function(response) {
          console.log('response', response);
          var type = "#localnews";
          addNewsArticles(response, type);

          $.ajax({
            type: "GET",
            url: 'http://www.wsmv.com/category/208529/sports?clienttype=rss',
            dataType: 'xml',
            success: function(response) {
              console.log('response', response);
              var type = "#tnsportsnews";
              addNewsArticles(response, type);

              $.ajax({
                type: "GET",
                url: 'http://feeds.reuters.com/reuters/sportsNews',
                dataType: 'xml',
                success: function(response) {
                  console.log('response', response);
                  var type = "#natsportsnews";
                  addNewsArticles(response, type);

                  $.ajax({
                    type: "GET",
                    url: 'http://feeds.reuters.com/reuters/technologyNews',
                    dataType: 'xml',
                    success: function(response) {
                      console.log('response', response);
                      var type = "#technews";
                      addNewsArticles(response, type);

                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });

  function addNewsArticles(response, type) {
    $(type).html("<div align='center'><h2>Top Headlines</h2></div>");
    $(response).find("item").each(function() {
      $(type).append("<div class='story'><div class='w3-card-4'><header class='w3-container w3-blue'><h2>" +
        $(this).find("title").text() +
        "</h2></header><div class='w3-container'>" +
        "<p>" + "<a target='_blank' href='" +
        $(this).find("link").text() + "'>" +
        $(this).find("description").text() +
        "</a></p></div><footer class='w3-container w3-blue'>" +
        "<h5>" + $(this).find("pubDate").text() + "</h5></footer></div></div>");

    })
  }

});
