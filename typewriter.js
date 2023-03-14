const sentence = "hello there from lighthouse labs";

const printWords = function(sentence){
    let delay = 0;
for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
      //console.log(char);
    }, delay);
    delay += 500;
  }
};

printWords(sentence);