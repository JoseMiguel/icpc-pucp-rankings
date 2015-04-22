$(window).load(function(){
$.ajax({
    url: 'http://189.102.212.122:8000/api/v1.0/ranking',
    type: "get",
    dataType: "json",
    success: function(data, textStatus, jqXHR) {
        drawTable(data);
    }
});

function drawTable(data) {
    var row = $("<tr />")
    $("#last_update").append(data.last_update.replace('T',' ') + ' (UTC-03:00)')
    $("#ranking").append(row); 
    row.append($("<td>Position</td>"));
    row.append($("<td>Handle</td>"));
    row.append($("<td>Points</td>"));

    for (var i = 0; i < data.ranking.length; i++) {
        drawRow(data.ranking[i], i + 1);
    }
}

function drawRow(rowData, index) {
    var row = $("<tr />")
    $("#ranking").append(row); 
    row.append($("<td>" + index + "</td>"));
    row.append($("<td>" + rowData.handle + "</td>"));
    row.append($("<td>" + rowData.points + "</td>"));
}

});
