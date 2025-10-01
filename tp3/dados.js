const apariciones = Array(13).fill(0);
// let suma = 0;

for (let i = 0; i < 50; i++) {
  let dado1 = Math.ceil(Math.random() * 6);
  let dado2 = Math.ceil(Math.random() * 6);
  let suma = dado1 + dado2;

  apariciones[suma]++;
}
for (let suma = 2; suma <= 12; suma++) {
  console.log(`${suma} aparece ${apariciones[suma]} veces`);
}
