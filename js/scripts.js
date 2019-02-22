var link = document.querySelector('.booking-main-button');
var form = document.querySelector('.booking-form');
var modal = document.querySelector('.booking-modal');
var modal_find_button = document.querySelector('.booking-form-button');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (form.classList.contains('booking-form-appearance')) {
    form.classList.remove('booking-form-appearance');
    modal.classList.remove('booking-modal-show');
  } else {
    form.classList.add('booking-form-appearance');
    modal.classList.add('booking-modal-show');
  }
});
