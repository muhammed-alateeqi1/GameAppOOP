import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.switchActiveLink(link);
        const targetCategory = link.getAttribute("data-category");
        this.getGames(targetCategory)
      });
    });
    this.loading = document.querySelector('.loader');
    this.detailsSection = document.getElementById('details-section');
    this.gamesSection =  document.getElementById('games-section');
    this.ui = new Ui();
    this.getGames('mmorpg')
  }

  async switchActiveLink(link) {
    document.querySelector(".navbar-nav .active").classList.remove("active");
    link.classList.add("active");
  }

  async getGames(category) {
    this.loading.classList.remove('d-none')
    document.querySelector(".spinner").classList.remove('d-none')
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ed76f8e345msha2555eeb346616ep159371jsn865e27bc8967",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const response = await api.json();
    this.loading.classList.add('d-none')
    document.querySelector(".spinner").classList.add('d-none')
    this.ui.displayGames(response);
    document.querySelectorAll('.card-container').forEach(card=>{
      card.addEventListener('click',()=>{
        this.detailsSection.classList.remove('d-none')
        this.gamesSection.classList.add('d-none');
        new Details(card.dataset.id);

      })
    })
  }
}
