const getData = async () => {
  const response = await fetch("data/team.json");
  const dataJson = await response.json();
  const teamContainer = document.getElementById("team-info");
  const templateSource = document.getElementById("team-template").innerHTML;
  const template = Handlebars.compile(templateSource);
  const result = template({ dataJson });
  teamContainer.innerHTML = result;
};
getData();