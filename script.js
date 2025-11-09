import java.util.Scanner;

public class CodedexToDoList {
    public static void main(String[] args) {

    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

        function addTask() {
          const task = inputBox.value.trim();
            if (!task) {
               alert("Please write down a task");
            return;
        }

  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;

  listContainer.appendChild(li);
  inputBox.value = "";
}
    }
}
