const name1 = "Daniel";
const name2 = "Jeremiah";

const longOrShort = function (name1, name2) {
  if (name1.length > name2.length) {
    console.log(
      `The name ${name1} is longer ${name2} by ${
        name1.length - name2.length
      } characters`
    );
  } else if (name1.length < name2.length) {
    console.log(
      `The name ${name2} is longer than ${name1} by ${
        name2.length - name1.length
      } characters`
    );
  }
};

console.log(longOrShort(name1, name2));
