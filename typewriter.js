const sentence = "hello there from lighthouse labs";
let index = 0


// setTimeout(() => {
//   // print the char here
//   for (const char of sentence) {
//     setTimeout(() => process.stdout.write(char),50);
//   }
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.

const typewriter = () => {
  if (index < sentence.length) {
    process.stdout.write(sentence[index]);
    index++;
    setTimeout(typewriter, 50);
  } else {
    process.stdout.write("\n");
  }
};

setTimeout(typewriter, 1000)