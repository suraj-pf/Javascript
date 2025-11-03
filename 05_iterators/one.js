// for

for (let index = 0; index < 10; index++) {
    const element = index
    console.log(element);   
}

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`${i} is the best Number`);
    }
    console.log(i);
}

for (let i =1; i <= 10; i++) {
    for (let j = 1; j <= 10 ; j++) {
        console.log(`${i} * ${j} = ${i*j}`);        
    }
    console.log(`Table of No :- ${i}`);
}


array = ["Batman","Flash","Suraj"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`${i} is detected`);
        break
    }
    console.log(`Value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`${i} is detected`);
        continue
    }
    console.log(`Value of i is ${i}`);
}