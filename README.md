# pagination-filter-v1
Project2

Before you start

To prepare for this project you'll need to make sure you complete and understand these steps.

 4 steps
Have a GitHub account and know how to create a new repository and upload files to it. As with the previous projects, you'll submit your finished working using GitHub.
If you need a reminder on how to use GitHub and GitHub desktop to create a new repository check out the workshop 'Share Your Projects wIth GitHub Desktop' in the Project Resources.
Download the project files. We've supplied four files for you to use:
2 css style sheets, a reset.css that sets some basic CSS styles for cross-browser support and design.css that contains CSS specific to this project.
2 HTML files,index.html and filters-example.html. The index.html file contains the initial HTML — you'll use JavaScript to modify the markup on this page to make it look like filters-example.html. Familiarize yourself with the markup and styles because you'll need to use JavaScript to insert similar HTML in the index.html page.
A samples folder which contains two other pages with differing amounts of listings. You don't need to use this, but you can use these to test that your programming works no matter how many students listings are on the page.
You will need to create your own external JavaScript file.
Have a basic understanding of Progressive Enhancement. See the Resources links on this page to find out more about Progressive Enhancement. For this project, there are two important Progressive Enhancement principles to keep in mind:
Basic content should be accessible to browsers that don't support JavaScript. In other words, the index.html file should display the entire list of students for browsers that don't support JavaScript.
Unobstrusive JavaScript: this means that any content or functionality related to JavaScript should be added programmatically by JavaScript. For this project, that means, the search field and the pagination buttons shouldn't be added directly to the index.html file. You need to use JavaScript to add them.
Project Instructions

To complete this project, follow the instructions below. If you get stuck, ask a question in the community.

 9 steps
Use the filters-example.html file to guide your decision making. Using progressive enhancement, your work should affect the index.html file.
Since only 10 students should be shown at a time, your programming needs to calculate the number of pages needed and add the appropriate number of links to the bottom of the page.
Hide all but the first 10 students when the page loads.
When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, students 21 through 30 are shown. And so on. When “6” is clicked 51 through 55 should be shown.
Using progressive enhancement, add the student search markup as presented in the filters-example.html file to the index.html file.
Add an event listener to the search button. When the user clicks on the button it should use the text in the search input to filter the results. Searching should be case insensitive. e.g. a search for “Susan” should return results for “susan” and “Susan".
Users should be able to search by name or e-mail address. And partial matches, like just a first name, should be displayed in the results.
Search results should also be paginated. For example, if the search returns more than 10 results, those results should be paginated too.
Before you submit your project for review, make sure you can check off all of the items on the Student Project Submission Checklist. The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!
NOTE: A good practice is to check your project for cross browser compatibility. Making sure that it looks and functions correctly in multiple (at least three) browsers is an important part of being a top-notch developer. If you want, leave a comment to the project reviewer about which browser(s) the project was checked to ensure they are seeing things as you have designed them.
Some browser options:
Google Chrome
Mozilla Firefox
Internet Explorer/Edge
Safari
Extra Credit

To get an "exceeds" rating, you can expand on the project in the following ways:

 3 steps
Include simple animations when transitioning between pages.
As the user types in the search box, dynamically filter the student listings. In other words, after each letter is typed into the search box, display any listings that match .
If no matches are found, include a message in the HTML to tell the user there are no matches.
