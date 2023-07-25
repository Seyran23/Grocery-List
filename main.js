const listItemsContainer = document.querySelector(".list_items_container");
const input = document.querySelector(".grocery_item_input");
const pencilImage = document.querySelector(".pencil_img");

pencilImage.addEventListener("click", () => {
  listItemsContainer.innerHTML = "";
});

function addingItem() {
  let inputValue = input.value.trim();
  listItemsContainer.innerHTML += `<div class="list_item">- ${inputValue}</div>`;
  input.value = "";
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addingItem();

    let listItems = document.querySelectorAll(".list_item");
    for (let i = 0; i < listItems.length; i++) {
      let listItem = listItems[i];
      listItem.addEventListener("click", () => {
        listItem.style.textDecoration = "line-through";
      });
    }
  }
});
