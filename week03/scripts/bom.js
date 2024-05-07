const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#listcontainer');

let chaptersArray = getChapter() || [];
console.log('Show the Chapter Array')
console.log(chaptersArray)

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; 
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); 

  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); 
    input.focus();
  });
}


function setChapter() {
  console.log('SET chapters')
  console.log(chaptersArray)
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}


function getChapter() {
  console.log('GET chapters')
  console.log(localStorage.getItem('myFavBOMList'))
  return JSON.parse(localStorage.getItem('myFavBOMList'));
  
}

function deleteChapter(chapterToDelete) {
  console.log('DELETE chapters')
  console.log(chapterToDelete)
  chapterToDelete = chapterToDelete.slice(0, chapterToDelete.length - 1);
  console.log(chapterToDelete)
  chaptersArray = chaptersArray.filter(item => item !== chapterToDelete);
  setChapter();
}

button.addEventListener('click', () => {
  if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapter();
    input.value = '';
    input.focus();
  }
});