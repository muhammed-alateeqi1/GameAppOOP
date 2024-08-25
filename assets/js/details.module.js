import { Ui } from './ui.module.js';

export class Details {
  constructor(id) {
    document.getElementById("btnClose").addEventListener("click", () => {
      document.getElementById("games-section").classList.remove("d-none");
      document.getElementById("details-section").classList.add("d-none");
    });
    this.loading = document.querySelector('.loader');
    this.getDetails(id);
  }

  async getDetails(id) {
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
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
      const response = await api.json();
      this.loading.classList.add('d-none')
      document.querySelector(".spinner").classList.add('d-none')

      console.log(response);
      new Ui().displayDetails(response)
      console.log(response);
      
  }
}
