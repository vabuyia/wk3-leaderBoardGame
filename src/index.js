/* eslint-disable*/
import './style.css'
import getData from '../modules/addnewscores.js';
import { refreshBtn, refresh } from '../modules/refreshscore.js'

const form = document.querySelector('#form')
const submit = document.querySelector('#submit')

/**
const fetchdata = async () => {
  const datainput = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ukaI3OuXrr2bR6UArEV7/scores/'
  )
  return datainput.json()
}

const outcome = (users) => {
  const showResults = document.getElementById('showResults')
  showResults.innerHTML = ''
  users.forEach((user) => {
    showResults.innerHTML += `
            <tr>
              <th>${user.user}.title}</th>
              <th>${user.score}</th>
            </tr>    
        `
  })
}
 */

const dataoutcome = async () => {
  const datauser = await fetchdata()
  outcome(datauser.result)
  console.log(datauser)

  console.log(outcome(datauser.result))
}

const fetchAPI = async (data) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ukaI3OuXrr2bR6UArEV7/scores/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title: data[0],
        body: data[1],
      }),
    }
  )
}
//getData();
refreshBtn.addEventListener('click', dataoutcome)

form.addEventListener('click', async (event) => {
  //auto submission of the form
  event.preventDefault()

  const inputName = document.querySelector('#inputName').value.trim()
  //console.log(inputName);

  const inputScore = document.querySelector('#inputScore').value.trim()

  if (inputName != '' && inputScore != '') {
    await fetchAPI([inputName, inputScore])
    dataoutcome()
  }
})
getData();
