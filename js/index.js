$(document).ready(function() {

    var state = false;

    //$("input:text:visible:first").focus();
    document.getElementById("litheader").style.fontSize ="xx-large";

    $('#accesspanel').on('submit', function(e) {

        e.preventDefault();

        state = !state;

        if (state) {
            document.getElementById("litheader").className = "poweron";
            document.getElementById("parts").className = "";
            document.getElementById("parts").value = "Initializing...";
        }

    });

});
