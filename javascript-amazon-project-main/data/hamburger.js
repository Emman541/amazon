export function hamburgerButton() {
  const hamburgerIcon = document.querySelector('.js-hamburger');
  const hamburgerList = document.querySelector('.js-amazon-header-right-section')
  hamburgerIcon.addEventListener('click', (event) => {
    // hamburgerList.style.display = (hamburgerList.style.display === 'none') ? 'block' : 'none';
    // prevent the click event from bu
    // hamburgerList.style.display = 'block'
    if (hamburgerList.style.display === 'none') {
      hamburgerList.style.display = 'block'
    }  
    else {
      hamburgerList.style.display = 'none'
      
    }
    event.stopPropagation()
  })
  window.addEventListener('click', (event) => {
    if (hamburgerList.style.display === 'block') {
      hamburgerList.style.display = 'none'
      console.log('window wnabled');
    }
  })
}

hamburgerButton()