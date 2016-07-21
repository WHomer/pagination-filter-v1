/**
 * Created by whomer on 7/19/2016.
 */

//Problem: The UI of the webpage index.html is not user friendly
//Solution: Adding pagination and a filter to display/search for students

var i = 0; //declare variable
var displayRecords = 0; //declare variable
var students = document.getElementsByClassName('student-item');
var student = ""; //declare variable
var studentsPerPage = 10; //Number of students to display per page
var studentCount = students.length; //How many students are in the list
var pageCount = Math.ceil(studentCount/studentsPerPage);

var pageButton = document.createElement('button');
var pageNumber = document.createTextNode('1');
var pageButtonHolder = document.getElementById('pageButtons');

//Creates button for each group of students
function createButton(currentPage) {
  //Creates new button for pagination, assigns value of page number
  pageButton = document.createElement('button');
  //give it the text value of the page number
  pageNumber = document.createTextNode(currentPage);
  //assign the class name used for styleing
  pageButton.className = 'studentPageButtons';
  //add the page number for the id
  pageButton.id = 'pg' + currentPage;
  pageButton.appendChild(pageNumber);
  pageButtonHolder.appendChild(pageButton);
  //create a click listener to run the displayStudents function.
  pageButton.addEventListener('click', function(){displayStudents(currentPage)});
}
//Displays students to screen on load as well as when button is pressed.
function displayStudents(pageNumber) {
  //remove all currently displayed students
  for (i = 0; i < studentCount; i++){
    students[i].style.display = 'none';
  }
  //Current page number  x students per page minus students per page to get you the lowest value
  displayRecords = pageNumber * studentsPerPage - studentsPerPage;
  //BUG: not set yet to stop once max records are displayed. not causing any visual errors
  for (i = 0; i < studentsPerPage; i++){
    student = students[displayRecords];
    //increments by 1 to display next record.
    displayRecords++;
    //sets style of display to block, default is none
    student.style.display = 'block';
  }
}

//Testing out Searching for name's on div's
//TESTING BELOW
function searchStudents() {
  var search = 'ra';
  //remove all currently displayed students
  for (i = 0; i < studentCount; i++){
    students[i].style.display = 'none';
  }
  for (i =0; i < studentCount; i++){
    var studentName = document.getElementsByTagName('H3')[i].innerHTML;
    var n = studentName.search(/search/i);
    if (n > -1){
      student = students[i];
      //sets style of display to block, default is none
      student.style.display = 'block';
      console.log('Record: ' + i + ' Space: ' + n);
    }

  }
}

//TESTING ABOVE

//creates a new button for each record in pageCount
for (i = 1; i <= pageCount; i++ ) {
  currentPage = i;
  createButton(currentPage);
}



displayStudents(1); //value of 1 is as if it was loading the first page.

searchStudents();
