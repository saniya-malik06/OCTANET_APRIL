document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let taskDesc = document.querySelector('input[name="task-desc"]').value;
    let deadline = document.querySelector('input[name="deadline"]').value;
    let priority = document.querySelector('select[name="priority"]').value;
    let project = document.querySelector('select[name="project"]').value;
    let labels = document.querySelector('input[name="labels"]').value;

    if (taskDesc) {
        let taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-complete-checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                taskText.style.textDecoration = 'line-through';
            } else {
                taskText.style.textDecoration = 'none';
            }
            updateProgressBar();
        });

        let taskText = document.createElement('div');
        taskText.className = 'task-text';
        taskText.textContent = `Task: ${taskDesc}`;

        let btn = document.createElement('button');
        btn.className = 'btn delete btn-danger';
        btn.textContent = 'Delete';
        btn.addEventListener('click', function() {
            taskItem.remove();
            updateProgressBar();
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(btn);

        document.querySelector('.tasks').appendChild(taskItem);
        document.querySelector('form').reset();
        updateProgressBar();
    }
});

function updateProgressBar() {
    let totalTasks = document.querySelectorAll('.task-item').length;
    let completedTasks = document.querySelectorAll('input[type="checkbox"]:checked').length;
    let completionPercentage = (completedTasks / totalTasks) * 100;
    
    let progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${completionPercentage}%`;
    progressBar.setAttribute('aria-valuenow', completionPercentage);
}
