// #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
//
// ‘c’
//
// ‘javascript is cool’

let str=['hello world', 'c', 'javascript is cool']
i = 1
for (let long of str) {
    console.log(`Довжина елементу №${i} - ${long.length}`);
    i++
}