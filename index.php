<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap To-Do List</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom CSS -->
  <link rel="stylesheet" href="asset/style.css">
</head>
<body>
  <div class="container">
    <!-- Add Task Card -->
    <div class="card shadow-sm mb-4">
      <div class="card-header bg-primary text-white text-center">
        <h5 class="mb-0">Add New Task</h5>
      </div>
      <div class="card-body">
        <div class="input-group">
          <input type="text" id="todo-input" class="form-control" placeholder="Enter a new task">
          <button class="btn btn-success" onclick="addTodo()">Add</button>
        </div>
      </div>
    </div>

    <!-- To-Do List Card -->
    <div class="card shadow-sm">
      <div class="card-header bg-dark text-white text-center">
        <h5 class="mb-0">My To-Do List</h5>
      </div>
      <div class="card-body p-0">
        <table class="table table-hover mb-0 text-center align-middle">
          <thead class="table-light">
            <tr>
              <th style="width: 10%">No</th>
              <th style="width: 10%">Done</th>
              <th style="width: 50%">Task</th>
              <th style="width: 30%">Actions</th>
            </tr>
          </thead>
          <tbody id="todo-list">
            <!-- Tasks will be rendered here -->
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Modal Edit Task -->
  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">Edit Task</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="hidden" id="edit-id">
          <div class="mb-3">
            <label for="edit-title" class="form-label">Task Title</label>
            <input type="text" class="form-control" id="edit-title">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" onclick="saveEdit()">Save Changes</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Custom JS -->
  <script src="asset/script.js"></script>
</body>
</html>
