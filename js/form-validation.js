function checkLength(fieldId, feedbackId, message) {

    let textField = document.getElementById(fieldId);
    let formFeedback = document.getElementById(feedbackId);

    if(textField.value.length < 3) {
        formFeedback.innerText = message;
    }
    else {
        formFeedback.innerText = "";
    }
}

function checkEmail(fieldId, feedbackId, message) {

    let textField = document.getElementById(fieldId);
    let formFeedback = document.getElementById(feedbackId);

    if(!textField.value.includes('@')) {
        formFeedback.innerText = message;
    }
    else {
        formFeedback.innerText = "";
    }
}
