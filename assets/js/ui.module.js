export class Ui {
  constructor() {}
  displayGames(data) {
   let gamesContainer = ``;
        for(let i = 0 ; i < data.length;i++)
        {
            gamesContainer +=`
                    <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                    <div class="card-container" data-id="${data[i].id}">
                        <div class="card-body">
                            <img src="${data[i].thumbnail}" class="w-100 opacity-50 h-100 object-fit-cover" alt="thumbnail">
                            <div class="d-flex card-header mt-3">
                                <h5 class="card-title">${data[i].title}</h5>
                                <span class=" badge  p-2 opacity-50">Free</span>
                            </div>
                            <p class="card-text text-center opacity-50 small">${data[i].short_description}</p>
                            </div>
                            <footer class="d-flex justify-content-between">
                                <span class="badge badge-color small">${data[i].Shooter}</span>
                                <span class="badge badge-color small">${data[i].platform}</span>
                            </footer>
                        </div>
                    </div>
            `
            
            document.getElementById("games-data").innerHTML = gamesContainer;
        }
        

    
  }
  displayDetails(data){
   let detailsContainer = `
           <div class="col-lg-4 col-md-4 col-sm-12">
                    <img src="${data.thumbnail}" class="w-100 mb-3" alt="thumbnail">
                </div>
                <div class="col-lg-7 col-md-7 col-sm-12">
                    <h3>Title: ${data.title}</h3>
                    <p>Category: <span class="badge bg-info text-dark small">${data.genre}</span></p>
                    <p>Platform: <span class="badge bg-info text-dark small">${data.platform}</span></p>
                    <p>Status: <span class="badge bg-info text-dark small"${data.status}</span></p>
                    <p class="small">
                     ${data.description}
                    </p>
                    <button class="btn btn-outline-warning text" >Show Game</button>
                </div>
   `
   document.getElementById('details-content').innerHTML = detailsContainer;
  }
}