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

const hashmap = new Map();

for (let i = 0; i < list1.length; i++) {
    hashmap.set(list1[i], 0);
}

for ( let i = 0; i < list2.length; i++) {
    const count = hashmap.get(list2[i]);
    if (count !== undefined) {
        hashmap.set(list2[i], count + 1);
    }
}

let sum = 0;

hashmap.forEach((value, digitCount) => {
    sum += digitCount * value;
})

console.log(sum);

