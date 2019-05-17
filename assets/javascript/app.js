var topics = ["Oregon", "California", "Washington", "New York", "Texas", "Florida"];

for (var i = 0; i < topics.length; i++) {
    var btn = $("<button>");
    btn.addClass("state");
    btn.attr("data-name", topics[i]);
    btn.text(topics[i]);
    $("#container").append(btn);
};