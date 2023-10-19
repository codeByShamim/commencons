// Get the YES and NO buttons, the feedback question, and the thanks message element
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const feedbackQuestion = document.querySelector('.feedback-questions');
const thanksMessage = document.querySelector('.thanks-message');

// Add click event listeners to the YES and NO buttons
yesBtn.addEventListener('click', () => {
  // Hide the feedback question and buttons
  feedbackQuestion.style.display = 'none';
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  
  // Show the thanks message
  thanksMessage.style.display = 'block';
});

noBtn.addEventListener('click', () => {
  // Hide the feedback question and buttons
  feedbackQuestion.style.display = 'none';
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  
  // Show the thanks message
  thanksMessage.style.display = 'block';
});

