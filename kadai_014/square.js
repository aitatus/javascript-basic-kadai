let land = Math.floor(Math.random() * 10 + 1);
console.log(land + "の2乗は");

let square = (land) => {
    console.log(land ** 2);
}

square(land);
