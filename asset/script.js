let todos = [
  { id: 1, title: "Belajar PHP", status: "belum" },
  { id: 2, title: "Kerjakan Tugas UX", status: "selesai" }
];

let currentEditId = null; // ID task yang sedang di-edit

// Render semua todo
function renderTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const tr = document.createElement("tr");
    tr.className = todo.status === "selesai" ? "completed" : "";
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>
        <input type="checkbox" class="form-check-input"
          ${todo.status === "selesai" ? "checked" : ""}
          onchange="toggleStatus(${todo.id}, this.checked)">
      </td>
      <td><span>${todo.title}</span></td>
      <td>
        <button class="btn btn-sm btn-warning me-2" onclick="openEditModal(${todo.id})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteTask(${todo.id})">Delete</button>
      </td>
    `;
    list.appendChild(tr);
  });
}

// Tambah task baru
function addTodo() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();

  if (task === "") return;

  if (todos.some(todo => todo.title.toLowerCase() === task.toLowerCase())) {
    alert("Task sudah ada, silakan masukkan task lain!");
    input.value = "";
    return;
  }

  const newTodo = { id: generateId(), title: task, status: "belum" };
  todos.push(newTodo);
  renderTodos();
  input.value = "";
}

// Generate ID unik
function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

// Toggle status task
function toggleStatus(id, checked) {
  todos = todos.map(todo =>
    todo.id === id
      ? { ...todo, status: checked ? "selesai" : "belum" }
      : todo
  );
  renderTodos();
}

// Buka modal edit
function openEditModal(id) {
  const todo = todos.find(t => t.id === id);
  if (!todo) return;

  currentEditId = id;
  document.getElementById("edit-id").value = id;
  document.getElementById("edit-title").value = todo.title;

  const modal = new bootstrap.Modal(document.getElementById("editModal"));
  modal.show();
}

// Simpan perubahan dari modal edit
function saveEdit() {
  const id = parseInt(document.getElementById("edit-id").value);
  const newTitle = document.getElementById("edit-title").value.trim();

  if (newTitle === "") {
    alert("Task tidak boleh kosong!");
    return;
  }

  if (todos.some(t => t.id !== id && t.title.toLowerCase() === newTitle.toLowerCase())) {
    alert("Task sudah ada, silakan masukkan task lain!");
    return;
  }

  todos = todos.map(todo =>
    todo.id === id ? { ...todo, title: newTitle } : todo
  );

  renderTodos();
  bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
}

// Hapus task
function deleteTask(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

// Render saat load pertama
window.onload = renderTodos;
