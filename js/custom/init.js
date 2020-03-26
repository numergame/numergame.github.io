$(document).ready(function($) {
    'use strict'

    showLoader();

    handleResize();

    initI18n('./game/js/localization/', function() {
        hideLoader();
    });

    $(window).resize(function (e) {
        handleResize();
    });
});

function showLoader() {
    $('#loaderModal').modal("show");
    $("#loader").removeClass("d-none");
    $("#mainContainer").removeClass("d-none");
};

function hideLoader() {
    $("#loaderModal").modal("hide");
}

function handleResize() {
    var mainContainer = document.getElementById('mainContainer');
    var row = $(mainContainer).find(".row").first();
    if (mainContainer.scrollHeight > mainContainer.offsetHeight) {
        row.removeClass('h-100');
    } else {
        row.addClass('h-100');
    }
}