window.addEventListener('load', function () {
    // Get all tables on page
    let tables = document.getElementsByTagName("table");

    // Make all tables searchable
    Array.from(tables).forEach((table) => {
        // Create search bar
        const inputbox = document.createElement("input")
        table.parentNode.insertBefore(inputbox, table)
        inputbox.onkeyup = (ev) => {
            // Note the query
            var query = ev.target.value.toUpperCase();
            // Filter the rows
            Array.from(table.rows).forEach((row) => {
                var searchtext = "";
                // Ignore header
                if (!row.cells[0].tagName.includes("TH")){
                    // Concatenate content as searchtext
                    Array.from(row.cells).forEach((cell) => {
                        searchtext = searchtext + " " + cell.innerHTML;
                    });
                    searchtext = searchtext.toUpperCase();
                    // Hide if does not contain query
                    if (searchtext.includes(query)) {
                        row.style.display = "";
                    }
                    else {
                        row.style.display = "none";
                    };
                };
            });
        };
    })
})
