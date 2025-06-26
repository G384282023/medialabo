document.getElementById('calc').addEventListener('click', function () {
  const leftValue = document.getElementById('left').value;
  const rightValue = document.getElementById('right').value;
  const leftNumber = parseInt(leftValue, 10);
  const rightNumber = parseInt(rightValue, 10);

  if (!isNaN(leftNumber) && !isNaN(rightNumber)) {
    const sum = leftNumber + rightNumber;
    document.getElementById('answer').textContent = sum;
  } else {
    document.getElementById('answer').textContent = 'エラー';
  }
});
