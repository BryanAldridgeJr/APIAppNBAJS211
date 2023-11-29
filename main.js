
let arrayOfTeams;  

const getTeams = () => {
  fetch('https://www.balldontlie.io/api/v1/teams')
    .then(res => res.json())
    .then(data => {
      arrayOfTeams = data.data;
      teams1();
    })
    .catch(error => {
      console.log('Error fetching teams:', error);
    });
}

const teams1 = () => {
  const allTeams = document.getElementById('all-teams');
  const mappedTeams = arrayOfTeams.map(team => {
    const teamData = {
      name: team.name,
      city: team.city,
      conference: team.conference,
    };

    const li = document.createElement('li')
    const name = document.createElement('span');
    name.style.fontWeight = 'bold'; 
    name.textContent = team.name;

    const li2 = document.createElement('li')
    const city = document.createElement('span')
    city.style.fontWeight = 'bold';
    city.textContent = team.city;

    const form1 = document.createElement('form')
    const input1 = document.createElement("input")
    const submit1 = document.createElement("input");
    input1.name="answer";
    submit1.type="submit"; 
    submit1.value="Submit";
    form1.appendChild(input1);
    form1.appendChild(submit1);



    li.appendChild(name);
    li2.appendChild(city)
    li.appendChild(li2)
    li.appendChild(form1)
    allTeams.appendChild(li);

    form1.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const inputValue = input1.value.toLowerCase();
        if(inputValue === team.conference.toLowerCase()){
          alert('Correct answer!');
        } else {
          alert('Incorrect answer!');
        }
    });
    
    return teamData;
  });

  console.log(mappedTeams);
};

getTeams();
