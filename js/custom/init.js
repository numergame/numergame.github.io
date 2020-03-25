$(document).ready(function($) {
    'use strict'

    showLoader();
    initI18n('./game/js/localization/', function() {
        hideLoader();
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