const experienceURL = 'https://zany-skitter-caper.glitch.me/experiences';
const skillsURL = 'https://zany-skitter-caper.glitch.me/skills';

const experiences = await getExperience();

experiences.forEach((experience) => {
  generateExperience(experience);
});

async function getExperience() {
  const res = await fetch(experienceURL);
  const data = await res.json();
  console.log(data);
  return data;
}

// companyName: 'Microsoft';
// description: 'Working on multiple projects including but not limited to Teams, Office 365 and Azure';
// finishYear: 2015;
// position: 'Developer';
// startYear: 2013;

function generateExperience(experience) {
  const container = document.querySelector('.aling-right');
  const descriptionPlace = document.querySelector('.flex-div');

  const finishStartYear = document.querySelector('.bold-text');
  finishStartYear.textContent = `Work Years ${experience.startYear} - ${experience.finishYear} `;
  const description = document.querySelector('.title');
  description.textContent = experience.description;
  const position = document.querySelector('.bold-text-position');
  position.textContent = experience.position;

  container.append(finishStartYear);
  descriptionPlace.append(description);
  des.append(position);
}
