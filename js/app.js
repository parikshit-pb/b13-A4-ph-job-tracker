const jobs =[];

const cards = document.querySelectorAll("#jobContainer > div");

cards.forEach((card, index) => {
    jobs.push({
        id: index,
        element: card,
        status: "all"
    });
});

const allCount = document.querySelectorAll(".text-2xl")[0];
const interviewCount = document.querySelectorAll(".text-2xl")[1];
const rejectedCount = document.querySelectorAll(".text-2xl")[2];

const jobNumber = document.querySelector("#jobCount");
const emptyState = document.querySelector("#emptyState")

function updateDashboard () {
    const interview = jobs.filter(j => j.status === "interview").length
    const rejected = jobs.filter(j => j.status === "rejected").length
    const activeJobs = jobs.filter(j =>j.status !== "delete").length;

   allCount.innerText = activeJobs;
   interviewCount.innerText = interview;
   rejectedCount.innerText = rejected;
   jobNumber.innerText = `${activeJobs} jobs`;
}

updateDashboard();


cards.forEach((card, index) => {

    const interviewBtn = card.querySelector(".interviewBtn");
    const rejectedBtn = card.querySelector(".rejectedBtn");
    const deleteBtn = card.querySelector(".deleteBtn");

    const statusText = card.querySelector('.statusText');



    interviewBtn.addEventListener("click", () => {
        jobs[index].status = "interview";



        statusText.innerText= "INTERVIEW";
        statusText.className = "inline-block mt-3 text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded";

        updateDashboard();
        showTab("interview");
    });
    rejectedBtn.addEventListener("click", () =>{
        jobs[index].status = "rejected";
        statusText.innerText = "REJECTED";
        statusText.className = "inline-block mt-3 text-xs font-medium bg-red-100 text-red-700 px-3 py-1 rounded"

        updateDashboard();
        showTab("rejected")
    });

    deleteBtn.addEventListener("click", () =>{
        
        jobs[index].status = "delete";
        jobs[index].element.remove();
        
        updateDashboard();
        showTab("all");
    });
});

const tabs = document.querySelectorAll(".tabBtn");
showTab("all");

function showTab(type) {
    tabs.forEach(tab => {
        tab.classList.remove("bg-blue-500", "text-white");
    });
    document.querySelector(`[onclick="showTab('${type}')"]`)
        .classList.add("bg-blue-500","text-white");

        let visibleCount = 0;

     jobs.forEach(job => {
        if(job.status === "delete"){
            job.element.style.display = "none";
            return;
        }
        if(type === "all") {
            job.element.style.display = "block";
            visibleCount++;
        }
        else if (type === "interview") {
            if(job.status === "interview") {

                 job.element.style.display = "block";
                 visibleCount++;
            }else {
                job.element.style.display = "none";
            }
           
        }
        else if(type === "rejected") {
            if(job.status === "rejected"){
                job.element.style.display = "block";
                visibleCount++;
        } else {
            job.element.style.display = "none"
        }
            
        }
     });
     jobNumber.innerText = `${visibleCount} jobs`;

     if(visibleCount === 0) {
        emptyState.classList.remove("hidden");

     }else{
        emptyState.classList.add("hidden")
     }
};
