// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comments');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const nameField = document.querySelector('#name');
  const commentField = document.querySelector('#comment');
  const list = document.querySelector('.comment-container');

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = comment}
