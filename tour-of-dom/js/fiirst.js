console.log('first file');

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles
    );

const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'white';
secondSection.style.backgroundColor = 'tomato';


// document.querySelectorAll (give nodelist)
// document.querySelector (give first matching)