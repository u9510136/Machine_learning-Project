d3.json("data/vgsalesratings.json").then(function (data) {

    var tbody = d3.select("tbody");
    data.forEach(function (youtube) {
        var row = tbody.append("tr");
        Object.entries(youtube).forEach(function ([key, value]) {
            var column_list = ["Name", "Platform", "Year_of_Release", "Genre", "Publisher", "NA_Sales", "EU_Sales", "JP_Sales", "Other_Sales",
            "Global_Sales"];
            var column = column_list.indexOf(key);
            if (column >= 0) {
                var cell = tbody.append("td");
                cell.text(value);
            }
        });
    });

    var submit = d3.select("#filter-btn");

    submit.on("click", function () {

        var copied_data = data;

        // prevent refreshing
        d3.event.preventDefault();

        // clear the table
        d3.select("tbody").selectAll("*").remove();

        // get the views value from input
        var views = d3.select("#views");
        var views_value = views.property("value");
        console.log(views_value);

        // get the views value from input
        var likes = d3.select("#likes");
        var likes_value = likes.property("value");
        console.log(likes_value);

        // get the views value from input
        var dislikes = d3.select("#dislikes");
        var dislikes_value = dislikes.property("value");
        console.log(dislikes_value);

        // get the views value from input
        var comments = d3.select("#comments");
        var comments_value = comments.property("value");
        console.log(comments_value);

        // get the title value from input
        var title = d3.select("#title");
        var title_value = title.property("value");
        console.log(title_value);

        // get the date value from input
        var subs = d3.select("#subs");
        var subs_value = subs.property("value");
        console.log(subs_value);

        // get the category value from input
        var category = d3.select("#category");
        var category_value = category.property("value");
        console.log(category_value);

        //views filter
        function viewfilter(copied_data) {
            if (views_value != "") {
                return copied_data["views"] >= parseInt(views_value);
            } else {
                return true;
            }
        }

        //likes filter
        function likesfilter(copied_data) {
            if (likes_value != "") {
                return copied_data["likes"] >= parseInt(likes_value);
            } else {
                return true;
            }
        }

        //dislikes filter
        function dislikesfilter(copied_data) {
            if (dislikes_value != "") {
                return copied_data["dislikes"] >= parseInt(dislikes_value);
            } else {
                return true;
            }
        }

        //comments filter
        function commentsfilter(copied_data) {
            if (comments_value != "") {
                return copied_data["comment_count"] >= parseInt(comments_value);
            } else {
                return true;
            }
        }

        //title filter
        function titlefilter(copied_data) {
            if (title_value != "") {
                var index_of_string = copied_data["title"].toLowerCase().search(title_value);
                return index_of_string > -1;
            } else {
                return true;
            }
        }

        //subscribers filter
        function subsfilter(copied_data) {
            if (subs_value != "") {
                return copied_data["subscriber"] >= parseInt(subs_value);
            } else {
                return true;
            }
        }

        //category filter
        function categoryfilter(copied_data) {
            if (category_value != "") {
                var index_of_string = copied_data["category_desc"].toLowerCase().search(category_value);
                return index_of_string > -1;
            } else {
                return true;
            }
        }

        // get the filtered data
        var filtered_data = copied_data.
            filter(viewfilter).
            filter(likesfilter).
            filter(dislikesfilter).
            filter(commentsfilter).
            filter(titlefilter).
            filter(subsfilter).
            filter(categoryfilter);

        // indert the filtered data into html
        var tbody = d3.select("tbody");
        filtered_data.forEach(function (data) {
            var row = tbody.append("tr");
            Object.entries(data).forEach(function ([key, value]) {
                var column_list = ["views", "likes", "dislikes", "comment_count", "title", "subscriber", "category_desc"];
                var column = column_list.indexOf(key);
                if (column >= 0) {
                    var cell = tbody.append("td");
                    cell.text(value);
                }
            });
        });

    });

});




