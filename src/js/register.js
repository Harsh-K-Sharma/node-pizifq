module.exports = register = () => {
  return new Promise(async (resolve, reject) => {
    await fetch('/register')
      .then(res => res.json())
      .then(data => {
        alert(data);
        resolve();
      })
      .catch(err => {
        alert('Error occured');
        console.log('Error :- ', err);
        reject();
      });
  });
};
