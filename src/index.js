import './style.css';

const posts = [
  { player: 'vincent', score: 200 },
  { player: 'Monica', score: 150 },
  { player: 'Stephen', score: 100 },
];

const table = document.getElementById('table');

posts.forEach((post) => {
  table.innerHTML += ` 
          <tr>  
           <td>${post.player}</td>
           <td>${post.score}</td>   
          </tr> 
        `;
});
