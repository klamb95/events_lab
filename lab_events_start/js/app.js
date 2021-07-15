document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  
  
  // function addButton () {
  //   const newDeleteAllButton = document.createElement(`Button`);
  //   newDeleteAllButton.setAttribute("id", "delete");
  //   newDeleteAllButton.textContent = 'Delete All';
  //   const currentDiv = document.getElementById("test");
  //   document.body.insertBefore(newDeleteAllButton, currentDiv);
  // };

  const button = document.querySelector('#delete');
  button.addEventListener('click', handleDeleteButton);

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

});

const handleFormSubmit = function (event) {
  event.preventDefault();
  const newListItem = document.createElement('li');
    newListItem.textContent = `Title: ${event.target.title.value} Author: ${event.target.author.value} Category: ${event.target.category.value}`

    const list = document.querySelector('ul');
    list.appendChild(newListItem);

    document.getElementById("new-item-form").reset();
};

const handleDeleteButton = function () {
  document.getElementById("reading-list").innerHTML = "test";
}

  