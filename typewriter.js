const sentence = "hello there from lighthouse labs!";
let counter = 50;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, counter);
  counter += 50;
}

setTimeout(() => {
  process.stdout.write("\n");
}, counter);