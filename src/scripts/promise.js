let p = async () => {
  let time = 2;
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      let rand = Math.random();
      if (rand < 0.3) {
        resolve("resolved");
      } else if (rand < 0.6) {
        reject("rejected");
      } else {
        throw new Error();
      }
    }, time);
  })
    .then(
      resolved => `${resolved}${resolved}`,
      rejected => `${rejected}${rejected}`
    )
    .then(
      resolvedResolved => console.log(resolvedResolved),
      rejectedRejected => console.log(rejectedRejected)
    )
    .catch(error => console.log(error));
};

let m = async () => {
  await p();
  console.log("coucou");
};

m();
