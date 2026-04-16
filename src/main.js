const dueDate = document.getElementById("dueDate");
const timeLeft = document.getElementById("time-remaining");
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






document.getElementById("parentCard").addEventListener('click', (e) => {
    // dom elements
    const checkBox = document.getElementById("taskDone");
    const title = document.getElementById("title");
    const status = document.getElementById("status");
    const editBtn = document.getElementById("editBtn");
    const delBtn = document.getElementById("delBtn");

    //utils
    if (e.target === checkBox) {
        title.classList.toggle("striked");
        status.textContent = (status.textContent === "In progress") ? "Done" : "In progress";
    }
    if (e.target === editBtn) {console.log("edit clicked")};
    if (e.target === delBtn) {alert("Delete clicked!")};
    
})
