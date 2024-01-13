const jobTitleInput = document.getElementById('jobTitle');
const jobLocationInput = document.getElementById('jobLocation');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');


function searchJobs(title, location) {

    if (resultsContainer.childElementCount > 0) {
        resultsContainer.firstChild.remove();
        resultsContainer.lastChild.remove();
    }

    title = jobTitleInput.value.trim().toLowerCase();
    location = jobLocationInput.value.trim().toLowerCase();

    let findings = {
        results : [],
        count : 0
    };

    const counterContainer = document.createElement('p');
    counterContainer.classList.add('grey-light-color');

    jobs.forEach(job => {
        if (job.title.toLowerCase().includes(title) && job.location.toLowerCase().includes(location)) {
            findings.results.push(job);
            findings.count ++
        }
    })

    if (findings.results.length > 0) {
        const itemsList = document.createElement('ul');
        itemsList.classList.add('flex');
        
        counterContainer.innerHTML = "Offers we found for you: " + findings.count; 
        
        resultsContainer.append(counterContainer, itemsList);

        findings.results.forEach(result => {
            const item = document.createElement('li');
            item.classList.add('flex')
            
            const infoTitle = document.createElement('span');
            const infolocation = document.createElement('span');
            infolocation.classList.add('grey-light-color')

            infoTitle.innerHTML = result.title;
            infolocation.innerHTML = result.location;

            itemsList.append(item);
            item.append(infoTitle, infolocation);
        })
    } else {
        counterContainer.innerHTML = "Sorry we couldn’t find any results";
        resultsContainer.append(counterContainer); 
    }

    jobTitleInput.value = "";
    jobLocationInput.value = "";

    return findings;
} 

searchBtn.addEventListener('click', searchJobs)