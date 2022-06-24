//displaying games 
const showResults = document.querySelector('#showResults');

const displaygames = (games) => {

  data.forEach((game) => {
    showResults.innerHTML += `
          <tr>
            <th>${game.user}</th>
            <th>${game.score}</th>
          </tr>    
      `;
  });

};

export default displaygames;

