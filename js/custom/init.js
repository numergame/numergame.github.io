$(document).ready(function($) {
    'use strict'

    var mainContainer = document.getElementById('mainContainer');
    if (mainContainer.scrollHeight > mainContainer.offsetHeight) {
        $(mainContainer).find('.row').removeClass('h-100');
    }

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