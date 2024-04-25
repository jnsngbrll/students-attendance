$(document).ready(function () {
  loadRecords();
});

function loadRecords() {
  $.ajax({
    type: 'GET',
    url: 'http://school-attendance.test/server/read.php',
    success: function (response) {
      try {
        const tBody = $('#tBody');
        tBody.empty();

        const students = JSON.parse(response);
        students.map((student) => {
          return tBody.append(`
                          <tr>
                              <td>${student.id}</td>
                              <td>${student.firstname}</td>
                              <td>${student.lastname}</td>
                              <td>${student.course}</td>
                              <td>
                                  <a href="http://school-attendance.test/client/update.html?id=${student.id}" type="button" class="btn btn-primary">Update</a>
                                  <button type="button" class="btn btn-danger" onclick="handleDelete(${student.id})">Delete</button>
                              </td>
                          </tr>
                      `);
        });
      } catch (error) {
        console.log('Error Fetching Data. ' + error);
      }
    },
  });
}

function handleDelete(id) {
  if (confirm('Are you sure you want to delete this student?')) {
    $.ajax({
      type: 'POST',
      url: 'http://school-attendance.test/server/delete.php',
      data: { id: id },
      success: function (response) {
        location.reload();
      },
    });
  }
}

function createRecord() {
  const firstname = $('#firstname').val();
  const lastname = $('#lastname').val();
  const course = $('#course').val();

  $.ajax({
    type: 'POST',
    url: 'http://school-attendance.test/server/create.php',
    data: { firstname: firstname, lastname: lastname, course: course },
    success: function (response) {
      location.href = 'index.html';
    },
  });
}

function updateRecord() {
  const id = $('#id').val();
  const firstname = $('#firstname').val();
  const lastname = $('#lastname').val();
  const course = $('#course').val();

  $.ajax({
    type: 'POST',
    url: 'http://school-attendance.test/server/update.php',
    data: { id: id, firstname: firstname, lastname: lastname, course: course },
    success: function (response) {
      location.href = 'index.html';
    },
  });
}
