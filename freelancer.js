// State
const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
];

const names = [
  "Olivia",
  "Ethan",
  "Sophia",
  "Jackson",
  "Isabella",
  "Aiden",
  "Mia",
  "Lucas",
  "Ava",
  "Mason",
  "Harper",
  "Elijah",
  "Amelia",
  "Noah",
  "Lily",
  "Liam",
  "Charlotte",
  "Benjamin",
  "Eric",
  "James",
];
const occupations = [
  "Programmer",
  "Doctor",
  "Teacher",
  "Graphic Designer",
  "Mechanical Engineer",
  "Nurse",
  "Architect",
  "Data Scientist",
  "Chef",
  "Lawyer",
  "Accountant",
  "Electrician",
  "Pharmacist",
  "Photographer",
  "Journalist",
  "Dentist",
  "Pilot",
  "Marketing Manager",
  "Civil Engineer",
  "Veterinarian",
];

const addElement = (element, parent, str) => {
  const text = document.createElement(element);
  text.textContent = str;
  parent.append(text);
};

const init = () => {
  const start = document.querySelector("body");

  start.style.backgroundColor = "gray";
  start.style.color = "blue";
  const top = document.querySelector("header");
  addElement("h1", top, "Freelancer Forum");
};

init();

function render() {
  const freelancerList = document.querySelector("#freelancerList");
  const freelancerElements = freelancers.map((freelancer) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = freelancer.name;
    row.appendChild(nameCell);

    const occCell = document.createElement("td");
    occCell.textContent = freelancer.occupation;
    row.appendChild(occCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = `$${freelancer.price}`;
    row.appendChild(priceCell);

    return row;
  });
  freelancerList.replaceChildren(...freelancerElements);

  const averagePrice = calcAveragePrice();
  const top1 = document.querySelector("h3");
  top1.textContent = `The average starting price is $${averagePrice}`;
}

function addFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOcc = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 101);

  freelancers.push({
    name: randomName,
    occupation: randomOcc,
    price: randomPrice,
  });
  render();
}
function calcAveragePrice() {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return (total / freelancers.length).toFixed(2);
}

render();

let count = 0;
const maxCount = 15;

const addFreelancerIntervalId = setInterval(() => {
  addFreelancer();
  count++;

  if (count >= maxCount) {
    clearInterval(addFreelancerIntervalId);
  }
}, 3000);
