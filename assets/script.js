const input = document.getElementById('input');
const buttons = Array.from(document.getElementsByClassName('button'));

// إضافة حدث النقر لكل زر
buttons.map(function(button) {
  button.addEventListener('click', calculate);
});

// دالة الحساب
function calculate(event) {
  var clickedButtonValue = event.target.innerText;

  if (clickedButtonValue === '=') {
    // التأكد من أن الشاشة ليست فارغة قبل الحساب
    if (input.value !== '') {
      input.value = eval(input.value);
    }
  } else if (clickedButtonValue === 'C') {
    // مسح قيمة الشاشة
    input.value = '';
  } else{
    // إضافة قيمة الزر المنقر إلى نهاية قيمة الشاشة
    input.value += clickedButtonValue;
  } 
}
function Delete(){
  input.value = input.value.slice(0 , -1);
}