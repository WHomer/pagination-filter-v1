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
var pageButtonCount;

var pageButton = document.createElement('button');
var pageNumber = document.createTextNode('1');
var pageButtonHolder = document.getElementById('pageButtons');

var studentArray = []; //temp storage of students

//Creates button for each group of students
function createButton(currentPage) {
  //Creates new button for pagination, assigns value of page number
  pageButton = document.createElement('button');
  //give it the text value of the page number
  pageNumber = document.createTextNode(currentPage);
  //assign the class name used for styling
  pageButton.className = 'studentPageButtons';
  //add the page number for the id
  pageButton.id = 'pg' + currentPage;
  pageButton.appendChild(pageNumber);
  pageButtonHolder.appendChild(pageButton);
  //create a click listener to run the displayStudents function.
  pageButton.addEventListener('click', function(){displayStudents(currentPage);});
  pageButtonCount = currentPage;
}

//Displays students to screen on load as well as when button is pressed.
function displayStudents(pageNumber){
  hideStudents(); //Hide all currently displayed students
  //Current page number  x students per page minus students per page to get you the lowest value
  displayRecords = pageNumber * studentsPerPage - studentsPerPage;
  if (studentArray.length > 0) {
    //display current users per page
    for (i = displayRecords; i < (studentsPerPage+displayRecords); i++){
      //sets position of n to position of student-item class
      var n = studentArray[i];
      //gets the correct student-item class
      student = document.getElementsByClassName('student-item')[n];
      //displays the student-item class
      if (student != null) {
        student.style.display = 'block';
      }
    }
  }else{
    //if no records display message.
    console.log('No Students to Display');
    document.getElementById('record').innerHTML = 'No Students to Display';
  }
  //Display page buttons
  var pageCount = Math.ceil(studentArray.length/studentsPerPage);
  if (document.getElementById('pg1') != null) {
    removePageButtons();
  }
  for (i = 1; i <= pageCount; i++) {
    createButton(i);
  }
}

function hideStudents() {
  //remove all currently displayed students
  for (i = 0; i < studentCount; i++){
    students[i].style.display = 'none';
  }
  //Clear div #record
  document.getElementById('record').innerHTML = '';
}

function removePageButtons() {
  //Clear current buttons
  for (i = 1; i <= pageButtonCount; i++) {
    pageButtonHolder.removeChild(document.getElementById('pg' + i));
  }
}


function searchStudents(searchString) {
  hideStudents(); //Hide all currently displayed students
  studentArray = []; //Clear studentArray
  if (searchString != null) {
    for (i =0; i < studentCount; i++){
      var studentName = document.getElementsByTagName('H3')[i].innerHTML;
      var studentEmail = document.getElementsByClassName('email')[i].innerHTML;
      var studentNameResults = studentName.search(searchString);
      var studentEmailResults = studentEmail.search(searchString);
      console.log(studentEmail);
      if (studentNameResults > -1 || studentEmailResults > -1) {
        studentArray.push(i);
      }
    }
  } else {
    for (i =0; i < studentCount; i++){
      studentArray.push(i);
    }
  }
  displayStudents(1);
}

function runSearch() {
  var searchValue = document.getElementById('searchInput').value;
  searchValue = new RegExp(searchValue, 'i');
  searchStudents(searchValue);
}

//hide all students
hideStudents();

searchStudents(); // Run the searchStudents function.
//Adds event listener to the search button
document.getElementById('search').addEventListener('click', runSearch);

//On keyup run search.
document.getElementById('searchInput').addEventListener('keyup', runSearch);
