// dom elements
const checkBox = document.getElementById("taskDone");
const title = document.getElementById("title");
const status = document.getElementById("status");
const statusWrap = document.getElementById("statusWrap");
const statusListBox = document.getElementById("statusListBox");
const editBtn = document.getElementById("editBtn");
const delBtn = document.getElementById("delBtn");
const dueDate = document.getElementById("dueDate");
const timeLeft = document.getElementById("time-remaining");

//utils
// time-remaining formatter
const targetDate = new Date("April 19, 2026").getTime();
const myInterval = setInterval(() => {
    const currentTime = new Date().setMinutes(0,0,0);
    const countDown = (targetDate - currentTime)/(24*60*60*1000);
    const timeLeftContent = 
    (countDown <= -2) ? "Overdue by 2+ hours!" :
    (countDown <= 0) ? "Overdue now!" :
    (countDown <= 1) ? "Due tomorrow" :
    (countDown <= 2) ? "Due in 2 days" :
    (countDown <= 3) ? "Due in 3 days" : "Still time left";
timeLeft.textContent = timeLeftContent;
}, 60000)
// card click events
document.getElementById("parentCard").addEventListener('click', (e) => {
    // checkbox clicked
    if (e.target === checkBox) {
        title.classList.toggle("striked");
        status.textContent = (status.textContent === "In progress") ? "Done" : "In progress";
    }
    // buttons clicked
    if (e.target === editBtn) {console.log("edit clicked")};
    if (e.target === delBtn) {alert("Delete clicked!")};
    // status control
    if (statusWrap.contains(e.target)) {
        console.log("yayyyy!");
        handleStatusMenu();
    }
    
})
// status control logic
const options = Array.from(statusListBox.querySelectorAll('[role="option"]'));
let activeIndex = -1; //nothing highlighted yet
const handleStatusMenu = (state) => {
    const isClosed = state === undefined ? statusListBox.hidden : state; //hold initial hidden state & handle undefined args
    statusListBox.hidden = !isClosed; //invert the hidden state
    statusWrap.setAttribute("aria-expanded", isClosed); // leave the expanded opposite to the new hidden state
   
    // if statusListBox is open
    if (statusListBox.hidden) {
    activeIndex = -1; 
    statusWrap.setAttribute('aria-activedescendant', '');
    // removeVisualHighlight();
  }
}