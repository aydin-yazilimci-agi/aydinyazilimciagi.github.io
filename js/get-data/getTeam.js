const getData = async () => {
  const data = await fetch("data/team.json");
  const dataJson = await data.json();
  const teamContainer = document.getElementById("team-info");
  let result = '';

  dataJson.forEach((item) => {
    result += `
  <div class="team-member col-sm-3">
  <div class="member-info">
         <div class="caption">
              <ul class="roles">
              `;
    item.responsibility.forEach((data) => (result += '<li><i class="fas fa-star"></i>&nbsp;' + data + '</li>'));
    result += `</ul>
          </div>
          <img src="img/team/${item.img}" alt="" height="150px" width="150px" class="img-responsive img-circle center-block">
          <h3 class="text-center">${item.name}</h3>
       </div>
      <ul class="contact">
          <li><a href="https://github.com/${item.accounts.github}" target="_blank"><i class="fab fa-github"></i></a></li>
          <li><a href="https://twitter.com/${item.accounts.twitter}" target="_blank"><i class="fab fa-twitter"></i></a></li>
          <li><a href="mailto:${item.accounts.mail}" target="_blank"><i class="far fa-envelope"></i></a></li>
      </ul>
  </div>
      `;
  });
  teamContainer.innerHTML = result;
};
getData();
