﻿var maxdistanceslider = document.getElementById('maxdistanceslider');
var maxdistancelabel = document.getElementById('maxdistanceslidervalue');
var participantsslider = document.getElementById('participantsslider');
var participantslabel = document.getElementById('participantsslidervalue');

//Update slider labels
maxdistancelabel.value = maxdistanceslider.value;
participantslabel.value = participantsslider.value;

maxdistanceslider.oninput = function () {
    maxdistancelabel.value = maxdistanceslider.value;
}

maxdistancelabel.oninput = function () {
    maxdistanceslider.value = maxdistancelabel.value;
}

participantsslider.oninput = function () {
    participantslabel.value = participantsslider.value;
}

participantslabel.oninput = function () {
    participantsslider.value = participantslabel.value;
}

//Validate slider label input
maxdistancelabel.onblur = function () {
    if (maxdistancelabel.value > maxdistanceslider.max) {
        maxdistancelabel.value = maxdistanceslider.max;
    }

    if (maxdistancelabel.value < maxdistanceslider.min) {
        maxdistancelabel.value = maxdistanceslider.min;
    }
}

participantslabel.onblur = function () {
    if (participantslabel.value > participantsslider.max) {
        participantslabel.value = participantsslider.max;
    }

    if (participantslabel.value < participantsslider.min) {
        participantslabel.value = participantsslider.min;
    }
}


//Reset filter
var resetbutton = document.getElementById('resetbutton');
var reseticon = document.getElementById('resetbuttonicon');
resetbutton.addEventListener('click', resetFilter);
reseticon.addEventListener('click', resetFilter);

var filterwrappergrid = document.getElementById('filterwrappergrid');
var activitycheckboxes = filterwrappergrid.getElementsByClassName('activitygrid')[0].querySelectorAll('input[type=checkbox]');
var gendercheckboxes = filterwrappergrid.getElementsByClassName('gendergrid')[0].querySelectorAll('input[type=checkbox]');
var mindatecalender = document.getElementById('mindate');
var maxdatecalender = document.getElementById('maxdate');

function resetFilter() {
    activitycheckboxes.forEach(checkbox => checkbox.checked = true);
    gendercheckboxes.forEach(checkbox => checkbox.checked = true);
    maxdistanceslider.value = maxdistanceslider.max;
    participantsslider.value = participantsslider.max;
    maxdistancelabel.value = maxdistanceslider.value;
    participantslabel.value = participantsslider.value;
    mindatecalender.value = mindatecalender.min;
    maxdatecalender.value = '';
}

//Set up filter
window.onload = function () {
    mindatecalender.min = new Date().toLocaleDateString('en-ca')
    maxdatecalender.min = new Date().toLocaleDateString('en-ca')
    resetFilter();
}