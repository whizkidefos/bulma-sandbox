// Mobile menu toggle
var burger = document.querySelector('.navbar-burger');
var menu = document.querySelector('.navbar-menu');

if(burger !== null) {
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
}

// Notifications
var closeNotification = document.querySelectorAll('.close-notification');
if(closeNotification.length > 0) {
    closeNotification.forEach(closeIcon => {
        closeIcon.addEventListener('click', () => {
            closeIcon.closest('.notification').remove();
        });
    });
}

// Dropdowns

// For deleting an item
var deleteItem = document.querySelectorAll('.delete-item');
if(deleteItem.length > 0) {
    deleteItem.forEach(button => {
        button.addEventListener('click', function() {
            button.closest('.column').remove();
        });
    });
}

// For deleting a customer
var deleteUserButton = document.querySelectorAll('.delete-user');
if(deleteUserButton.length > 0) {
    deleteUserButton.forEach(button => {
        button.addEventListener('click', function() {
            button.closest('tr').remove();
        });
    });
}

// Getting all the modals, close and trigger buttons
var modals = document.querySelectorAll('.modal');
var modalButtons = document.querySelectorAll('.open-modal-button');
var modalClose = document.querySelectorAll('.close-modal-button');

// For Success Message Notification
var successMessages = document.querySelectorAll('.modal-success-notification');

// Adding a event listener to all the trigger buttons
if (modalButtons.length > 0) {
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById(this.dataset.target).classList.add('is-active');
        });
    });
}

// Adding event listeners to all the close buttons
if(modalClose.length > 0) {
    modalClose.forEach(closeButton => {
        closeButton.addEventListener('click', function() {
            modals.forEach(modal => {
                modal.classList.remove('is-active');
                // Hiding success notification on closing the modal
                successMessages.forEach(message => {
                    message.classList.add('is-hidden');
                });
            });
        });
    });
}

// For showing the success Notification
var sendBugReport = document.querySelector('.send-bug-report');
if(sendBugReport != null) {
    sendBugReport.addEventListener('click', function() {
        successMessages.forEach(message => {
            message.classList.remove('is-hidden');
        });
    });
}