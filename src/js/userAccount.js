module.exports = userAccount =  () => {
  return new Promise(async(resolve,reject)=>{
    await fetch('/userAccount', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: 'Harsh.K'
      })
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById('userInfo').innerHTML = `
        <h1>Welcome ${data}</h1>      
      `;
      resolve('Success')
      })
      .catch(err => {
        alert('Error occured');
        console.log('Error :- ', err);
        reject('Error')
      });
  })
};
