const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2a18e8057cmsh19a413299ca09e2p173a8fjsn0dee202cefb7',
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
  }
  
  async function getData() {
    let response = await fetch('https://hapi-books.p.rapidapi.com/month/2022/3', options)
    let data = await response.json();
    render(data);
  }
  getData()
  
  function render(data) {
    let table = `<tr>
    <th>ID</th>
    <th>Position</th>
    <th>Cover</th>
    <th>Rating</th>
    <th>Url of book</th>
    </tr>`;
  
    for (let key in data) {
      table += `<tr>  
        <td>${data[key].book_id}</td>
        <td>${data[key].position}</td>
        <td><img src=${data[key].cover}></td> 
        <td>${data[key].rating}</td>
        <td><a href="${data[key].url}" target="_blank">${data[key].url}</a></td> 
        </tr>`
    }
    document.getElementById("BookAPI").innerHTML = table;
  }
