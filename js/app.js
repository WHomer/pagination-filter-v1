/**
 * Created by whomer on 7/19/2016.
 */

//Problem: The UI of the webpage index.html is not user friendly
//Solution: Adding pagination and a filter to search for students

var i = 0;
var students = document.getElementsByClassName('student-item');
var student = "";
var studentsPerPage = 1;
var studentCount = students.length;
var pageCount = Math.ceil(studentCount/studentsPerPage);

var pageButton = document.createElement('button');
var pageNumber = document.createTextNode('1');


function createButton(currentPage) {
  //Creates new button for pagination, assigns value of page number
  pageButton = document.createElement('button');
  pageNumber = document.createTextNode(currentPage);
  pageButton.className = 'studentPageButtons';
  pageButton.id = 'pg' + currentPage;
  pageButton.appendChild(pageNumber);
  document.body.appendChild(pageButton);
  pageButton.addEventListener('click', function(){displayStudents(currentPage)});
}
//Displays students to screen on load as well as when button is pressed.
function displayStudents(testing) {
  console.log(testing);
  for (i = 0; i < studentsPerPage; i++){
    studentRecord = i;
    student = students[studentRecord];
    //sets style of display to block, default is none
    student.style.display = 'block';
  }
}

//creates a new button for each record in pageCount
for (i = 1; i <= pageCount; i++ ) {
  currentPage = i;
  createButton(currentPage);
}



//displayStudents(); //onload displaysStudents function is ran


