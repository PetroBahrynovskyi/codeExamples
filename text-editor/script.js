const getText = document.querySelector('.written-text'),
      showText = document.querySelector('.show-text'),
      size = document.querySelector('.choose__text-size > input'),
      font = document.querySelector('#font-family'),
      fontStyle = document.querySelectorAll('.choose__text-style  input'),
      textColor = document.querySelector('.choose__text-color input'),
      bgColor = document.querySelector('.choose__bg-color input'),
      showBtn = document.querySelector('.submit_text');

//Choosing font size for text
const chooseFont = () => {
    document.querySelector('.actual-range').innerHTML = size.value;
    showText.style.fontSize = `${size.value}px`;
}

//Choosing font family for text
const  fontFamily = () => {
    showText.style.fontFamily = `${font.value}`;
}

//Choosing text color for text
const fontColor = () => {
    showText.style.color = textColor.value;
}

//Choosing background color for text
const backgroundColor = () => {
    showText.style.backgroundColor = bgColor.value;
}

//Choosing font style for text
const chooseFontStyle = () => {

}

// Display text and add all chosen styles
const displayData =  () => {
    chooseFont();
    fontFamily();
    fontColor();
    backgroundColor();
    showText.innerHTML = getText.value;
}     


showBtn.addEventListener('click', displayData);