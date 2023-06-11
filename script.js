

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.innerHTML);
    event.target.classList.add("dragged-item");
  }
  
  function allowDrop(event) {
    // This function is work for not reload the page 
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    var draggableElement = document.createElement("li");
    draggableElement.innerHTML = data;
  
    event.target.appendChild(draggableElement);
    // For show the success massage when drop the item
    var successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("hidden");
  }

//   Function for reset  drop items 
  function reset() {
    var rightContainer = document.querySelector(".right-container");
    rightContainer.innerHTML = "";
    
    var successMessage = document.getElementById("successMessage");
    successMessage.classList.add("hidden");
  }
  
  
  document.addEventListener("dragend", function(event) {
    var draggedItem = document.querySelector(".dragged-item");
    if (draggedItem) {
      draggedItem.classList.remove("dragged-item");
    }
  });
  