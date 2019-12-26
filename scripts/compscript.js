//When DOM is loaded:
$(document).ready(function () {

// Competition page javascript
// Battle of the Sections
    $("#battle").on("click", function() {
        if ($("#battle-description").is(":hidden")) {
            $("#battle").addClass("selected");
            $("#battle").removeClass("not_selected");
            $("#battle-description").removeClass("hidden");
            if (!($("#umd-description").is(":hidden"))) {
                $("#umd").removeClass("selected");
                $("#umd-description").addClass("hidden");
            }
            else if (!($("#fall-description").is(":hidden"))) {
                $("#fall").removeClass("selected");
                $("#fall-description").addClass("hidden");
            }
            else if (!($("#east-description").is(":hidden"))) {
                $("#east").removeClass("selected");
                $("#east-description").addClass("hidden");
            }
            else if (!($("#rutgers-description").is(":hidden"))) {
                $("#rutgers").removeClass("selected");
                $("#rutgers-description").addClass("hidden");
            }
            else if (!($("#west-description").is(":hidden"))) {
                $("#west").removeClass("selected");
                $("#west-description").addClass("hidden");
            }
            else if (!($("#spring-description").is(":hidden"))) {
                $("#spring").removeClass("selected");
                $("#spring-description").addClass("hidden");
            }
            else if (!($("#toc-description").is(":hidden"))) {
                $("#toc").removeClass("selected");
                $("#toc-description").addClass("hidden");
            }
        }
        else {
            $("#battle").removeClass("selected");
            $("#battle-description").addClass("hidden");
        }
    });

// UMD Invitational
    $("#umd").on("click", function() {
        if ($("#umd-description").is(":hidden")) {
            $("#umd").addClass("selected");
            $("#umd").removeClass("not_selected");
            $("#umd-description").removeClass("hidden");
            if (!($("#battle-description").is(":hidden"))) {
                $("#battle").removeClass("selected");
                $("#battle-description").addClass("hidden");
            }
            else if (!($("#fall-description").is(":hidden"))) {
                $("#fall").removeClass("selected");
                $("#fall-description").addClass("hidden");
            }
            else if (!($("#east-description").is(":hidden"))) {
                $("#east").removeClass("selected");
                $("#east-description").addClass("hidden");
            }
            else if (!($("#rutgers-description").is(":hidden"))) {
                $("#rutgers").removeClass("selected");
                $("#rutgers-description").addClass("hidden");
            }
            else if (!($("#west-description").is(":hidden"))) {
                $("#west").removeClass("selected");
                $("#west-description").addClass("hidden");
            }
            else if (!($("#spring-description").is(":hidden"))) {
                $("#spring").removeClass("selected");
                $("#spring-description").addClass("hidden");
            }
            else if (!($("#toc-description").is(":hidden"))) {
                $("#toc").removeClass("selected");
                $("#toc-description").addClass("hidden");
            }
        }
        else {
            $("#umd").removeClass("selected");
            $("#umd-description").addClass("hidden");
        }
    });

// Fall Invite
    $("#fall").on("click", function() {
        if ($("#fall-description").is(":hidden")) {
            $("#fall").addClass("selected");
            $("#fall-description").removeClass("hidden");
            if (!($("#battle-description").is(":hidden"))) {
                $("#battle").removeClass("selected");
                $("#battle-description").addClass("hidden");
            }
            else if (!($("#umd-description").is(":hidden"))) {
                $("#umd").removeClass("selected");
                $("#umd-description").addClass("hidden");
            }
            else if (!($("#east-description").is(":hidden"))) {
                $("#east").removeClass("selected");
                $("#east-description").addClass("hidden");
            }
            else if (!($("#rutgers-description").is(":hidden"))) {
                $("#rutgers").removeClass("selected");
                $("#rutgers-description").addClass("hidden");
            }
            else if (!($("#west-description").is(":hidden"))) {
                $("#west").removeClass("selected");
                $("#west-description").addClass("hidden");
            }
            else if (!($("#spring-description").is(":hidden"))) {
                $("#spring").removeClass("selected");
                $("#spring-description").addClass("hidden");
            }
            else if (!($("#toc-description").is(":hidden"))) {
                $("#toc").removeClass("selected");
                $("#toc-description").addClass("hidden");
            }
        }
        else {
            $("#fall").removeClass("selected");
            $("#fall-description").addClass("hidden");
        }
    });

// Eastern Sectionals
    $("#east").on("click", function() {
        if ($("#east-description").is(":hidden")) {
            $("#east").addClass("selected");
            $("#east-description").removeClass("hidden");
            if (!($("#battle-description").is(":hidden"))) {
                $("#battle").removeClass("selected");
                $("#battle-description").addClass("hidden");
            }
            else if (!($("#umd-description").is(":hidden"))) {
                $("#umd").removeClass("selected");
                $("#umd-description").addClass("hidden");
            }
            else if (!($("#fall-description").is(":hidden"))) {
                $("#fall").removeClass("selected");
                $("#fall-description").addClass("hidden");
            }
            else if (!($("#rutgers-description").is(":hidden"))) {
                $("#rutgers").removeClass("selected");
                $("#rutgers-description").addClass("hidden");
            }
            else if (!($("#west-description").is(":hidden"))) {
                $("#west").removeClass("selected");
                $("#west-description").addClass("hidden");
            }
            else if (!($("#spring-description").is(":hidden"))) {
                $("#spring").removeClass("selected");
                $("#spring-description").addClass("hidden");
            }
            else if (!($("#toc-description").is(":hidden"))) {
                $("#toc").removeClass("selected");
                $("#toc-description").addClass("hidden");
            }
        }
        else {
            $("#east").removeClass("selected");
            $("#east-description").addClass("hidden");
        }
    });

// Rutgers Invite
    $("#rutgers").on("click", function() {
        if ($("#rutgers-description").is(":hidden")) {
            $("#rutgers").addClass("selected");
            $("#rutgers-description").removeClass("hidden");
            if (!($("#battle-description").is(":hidden"))) {
                $("#battle").removeClass("selected");
                $("#battle-description").addClass("hidden");
            }
            else if (!($("#umd-description").is(":hidden"))) {
                $("#umd").removeClass("selected");
                $("#umd-description").addClass("hidden");
            }
            else if (!($("#fall-description").is(":hidden"))) {
                $("#fall").removeClass("selected");
                $("#fall-description").addClass("hidden");
            }
            else if (!($("#east-description").is(":hidden"))) {
                $("#east").removeClass("selected");
                $("#east-description").addClass("hidden");
            }
            else if (!($("#west-description").is(":hidden"))) {
                $("#west").removeClass("selected");
                $("#west-description").addClass("hidden");
            }
            else if (!($("#spring-description").is(":hidden"))) {
                $("#spring").removeClass("selected");
                $("#spring-description").addClass("hidden");
            }
            else if (!($("#toc-description").is(":hidden"))) {
                $("#toc").removeClass("selected");
                $("#toc-description").addClass("hidden");
            }
        }
        else {
            $("#rutgers").removeClass("selected");
            $("#rutgers-description").addClass("hidden");
        }
    });

// West Invite
    $("#west").on("click", function() {
        if ($("#west-description").is(":hidden")) {
            $("#west").addClass("selected");
            $("#west-description").removeClass("hidden");
            if (!($("#battle-description").is(":hidden"))) {
                $("#battle").removeClass("selected");
                $("#battle-description").addClass("hidden");
            }
            else if (!($("#umd-description").is(":hidden"))) {
                $("#umd").removeClass("selected");
                $("#umd-description").addClass("hidden");
            }
            else if (!($("#fall-description").is(":hidden"))) {
                $("#fall").removeClass("selected");
                $("#fall-description").addClass("hidden");
            }
            else if (!($("#east-description").is(":hidden"))) {
                $("#east").removeClass("selected");
                $("#east-description").addClass("hidden");
            }
            else if (!($("#rutgers-description").is(":hidden"))) {
                $("#rutgers").removeClass("selected");
                $("#rutgers-description").addClass("hidden");
            }
            else if (!($("#spring-description").is(":hidden"))) {
                $("#spring").removeClass("selected");
                $("#spring-description").addClass("hidden");
            }
            else if (!($("#toc-description").is(":hidden"))) {
                $("#toc").removeClass("selected");
                $("#toc-description").addClass("hidden");
            }
        }
        else {
            $("#west").removeClass("selected");
            $("#west-description").addClass("hidden");
        }
    });

// Spring Invitational
    $("#spring").on("click", function() {
        if ($("#spring-description").is(":hidden")) {
            $("#spring").addClass("selected");
            $("#spring-description").removeClass("hidden");
            if (!($("#battle-description").is(":hidden"))) {
                $("#battle").removeClass("selected");
                $("#battle-description").addClass("hidden");
            }
            else if (!($("#umd-description").is(":hidden"))) {
                $("#umd").removeClass("selected");
                $("#umd-description").addClass("hidden");
            }
            else if (!($("#fall-description").is(":hidden"))) {
                $("#fall").removeClass("selected");
                $("#fall-description").addClass("hidden");
            }
            else if (!($("#east-description").is(":hidden"))) {
                $("#east").removeClass("selected");
                $("#east-description").addClass("hidden");
            }
            else if (!($("#rutgers-description").is(":hidden"))) {
                $("#rutgers").removeClass("selected");
                $("#rutgers-description").addClass("hidden");
            }
            else if (!($("#west-description").is(":hidden"))) {
                $("#west").removeClass("selected");
                $("#west-description").addClass("hidden");
            }
            else if (!($("#toc-description").is(":hidden"))) {
                $("#toc").removeClass("selected");
                $("#toc-description").addClass("hidden");
            }
        }
        else {
            $("#spring").removeClass("selected");
            $("#spring-description").addClass("hidden");
        }
    });

// TOC National Championships
    $("#toc").on("click", function() {
        if ($("#toc-description").is(":hidden")) {
            $("#toc").addClass("selected");
            $("#toc-description").removeClass("hidden");
            if (!($("#battle-description").is(":hidden"))) {
                $("#battle").removeClass("selected");
                $("#battle-description").addClass("hidden");
            }
            else if (!($("#umd-description").is(":hidden"))) {
                $("#umd").removeClass("selected");
                $("#umd-description").addClass("hidden");
            }
            else if (!($("#fall-description").is(":hidden"))) {
                $("#fall").removeClass("selected");
                $("#fall-description").addClass("hidden");
            }
            else if (!($("#east-description").is(":hidden"))) {
                $("#east").removeClass("selected");
                $("#east-description").addClass("hidden");
            }
            else if (!($("#rutgers-description").is(":hidden"))) {
                $("#rutgers").removeClass("selected");
                $("#rutgers-description").addClass("hidden");
            }
            else if (!($("#west-description").is(":hidden"))) {
                $("#west").removeClass("selected");
                $("#west-description").addClass("hidden");
            }
            else if (!($("#spring-description").is(":hidden"))) {
                $("#spring").removeClass("selected");
                $("#spring-description").addClass("hidden");
            }
        }
        else {
            $("#toc").removeClass("selected");
            $("#toc-description").addClass("hidden");
        }
    });

});
