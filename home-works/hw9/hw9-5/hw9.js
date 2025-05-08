// Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for(let item of coursesArray) {
    let div1 = document.createElement('div');
    for (let newItem in item) {
        if (newItem === 'title') {
            let div2 = document.createElement('div');
            let p = document.createElement('p');
            p.innerText = `${newItem}: "${item[newItem]}",`;
            div2.appendChild(p);
            div1.appendChild(div2)
        }if (newItem === 'monthDuration') {
            let div2 = document.createElement('div');
            let p = document.createElement('p');
            p.innerText = `monthDuration: ${item['monthDuration']}, hourDuration: ${item['hourDuration']}`;
            div2.appendChild(p);
            div1.appendChild(div2)
        }
        if (newItem === 'modules') {
            let div2 = document.createElement('div');
            let p = document.createElement('p');
            p.innerText = `${newItem}: [`;
            div2.appendChild(p);
            let ul = document.createElement('ul');
            let p1 = document.createElement('p');
            for (let text of item[newItem]) {
                let li = document.createElement('li');
                li.innerText = text;
                ul.appendChild(li);
                div2.appendChild(ul);
                div1.appendChild(div2)
            }
            p1.innerText = `];`;
            div2.appendChild(p1);
        }
    }
    document.body.appendChild(div1);
}