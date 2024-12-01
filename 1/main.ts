const file = await Deno.readTextFile("input.txt");
const list1: number[] = []
const list2: number[] = [];
const lines = file.split("\n");
for (const line of lines) {
    if (line === "") {
        continue;
    }
  list1.push(Number(line.split("   ")[0]));
  list2.push(Number(line.split("   ")[1]));
}

list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

for (let i = list1.length; i > list1.length -10; i--) {
    console.log(list1[i]);
}
console.log(list1);
console.log(list2);

let sum = 0;

for (let i = 0; i < list1.length && i < list2.length; i++) {
    if (isNaN(sum + Math.abs(list1[i] - list2[i]))) {
        console.log(`broke at ${i}`);
    }
    sum = sum + Math.abs(list1[i] - list2[i]);
}

console.log(sum);