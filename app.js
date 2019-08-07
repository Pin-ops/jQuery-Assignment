// Make the project great again with jQuery ..

// Delete buttons should remove the topics (li elements).



$(document).on('click', '.delete', function() {
    event.preventDefault();

    $(this).closest('li').remove();

});


// Add button should add a topic (an li element inside 2 span elements).

$("button").on("click", function(e) {

    e.preventDefault();

    let newElement = $("#add-list").val();

    if (newElement !== " ") {

        $("ul").append("<li><span class='name'>" + newElement + "</span> <span class='delete'> delete </span>");

        $("#add-list").val(" ");
    };
});

// There is a checkbox under the topics. It should hide all topics when checked, unhide when unchecked. (hide all ul elements)


$('#hide').click(function() {
    $('ul').toggle(this.unchecked);
});

// There is search field above. It should filter the topics (filter li elements). It should be case-insensitive.;


$("#search-topics input").keyup(function() {

    let searchData = $(this).val();

    $("ul > li ").each(function() {
        let liText = $(this).text();
        showLi = liText.toUpperCase().indexOf(searchData.toUpperCase()) !== -1;
        $(this).toggle(showLi);
    });
});