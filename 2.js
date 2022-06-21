async function getAllUser() {
  const url = "http://localhost:4000/user";
  const res = await axios.get(url);
  console.log(res);

  for (let item of res.data) {
    let outputRef = document.querySelector("#output");

    let newElement = `<div class="col-12 h6">${item.username} / ${item.password}/ ${item.email} / ${item.mobile}</div>`;

    outputRef.innerHTML = newElement + outputRef.innerHTML;
  }
}
