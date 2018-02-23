function search() {
    let targetVal = $("#searchText").val();
    let matches = 0;
    $("#towns li").each((index, el) => {
        if($(el).text().includes(targetVal)){
            $(el).css("font-weight", "bold");
            matches++;
        } else {
            $(el).css("font-weight", "");
        }
    });

    $("#result").text(matches + " matches found.");
}