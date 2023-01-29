const EXPERIENCE_ENDPOINT = 'https://zany-skitter-caper.glitch.me/experiences';
const SKILLS_ENDPOINT = 'https://zany-skitter-caper.glitch.me/skills';

const skillsSection = document.querySelector('.coding-skills');
const experiencesSection = document.querySelector('#experience');

async function getData() {
  const skillsRequest = fetch(SKILLS_ENDPOINT);
  const experiencesRequest = fetch(EXPERIENCE_ENDPOINT);

  const [skillsRes, experiencesRes] = await Promise.all([
    skillsRequest,
    experiencesRequest,
  ]);
  const skills = await skillsRes.json();
  const experiences = await experiencesRes.json();

  experiences.forEach((exp) => generateExperience(exp));
  skills.forEach((sk) => generateSkill(sk));

  console.log(skills, experiences);
}

function generateSkill(skill) {
  const title = document.createElement('p');
  title.classList.add('flex-skill');
  title.textContent = skill.title;
  const skillProcent = document.createElement('span');
  skillProcent.textContent = skill.level + '%';
  const titleContainter = document.createElement('p');

  const procentLine = document.createElement('p');
  procentLine.classList.add('procent-line');
  procentLine.style.width = `${skill.level}%`;
  const skillLine = document.createElement('div');
  skillLine.classList.add('skill-line');

  title.append(skillProcent);
  skillLine.append(procentLine);
  titleContainter.append(title);
  skillsSection.append(titleContainter, skillLine);
}

function generateExperience(data) {
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('flex-div', 'margin-left');

  const companyAndYearContainer = document.createElement('p');
  companyAndYearContainer.classList.add('aling-right');

  const positionAndDescriptionContainer = document.createElement('p');
  positionAndDescriptionContainer.classList.add('title');
  const postionStyleDiv = document.createElement('span');
  postionStyleDiv.classList.add('bold-text');

  const workTimePar = document.createElement('span');
  workTimePar.classList.add('bold-text');
  workTimePar.textContent = `${data.startYear} - ${data.finishYear} `;

  const companyNamePar = document.createElement('span');
  companyNamePar.classList.add('gray-p');
  companyNamePar.textContent = data.companyName;

  const positionPar = document.createElement('p');
  positionPar.classList.add('bold-text');
  positionPar.textContent = data.position;

  const descriptionPar = document.createElement('p');
  descriptionPar.textContent = data.description;

  companyAndYearContainer.append(workTimePar, companyNamePar);
  positionAndDescriptionContainer.append(
    postionStyleDiv,
    positionPar,
    descriptionPar
  );

  containerDiv.append(companyAndYearContainer, positionAndDescriptionContainer);
  experiencesSection.append(containerDiv);
}

getData();
