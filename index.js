/*1. Створи обʼєкт в якому будуть зберігатись в якості ключів назва моделі машини, а як значення ціна на цю машину
Повиводь в консоль ціну на 2 різні машини*/

let carsObj = {
    subaruVRX: '20000 USD',
    bmw318: '15000 USD'
} 

console.log(carsObj.subaruVRX);
console.log(carsObj.bmw318);


/* 2. Створи обʼєкт в якому будуть зберігатись як ключі цифри від 1 до 7, і як значення назва днів тижня відповідно до цифри (1 - понеділок, 2 - вівторок і тд), виведи в консоль сьогоднішній день*/

let weekObj = {
    1:'Monday',
    2:'Tuesday',
    3:'Wednesday',
    4:'Turthday',
    5:'Friday',
    6:'Satuday',
    7:'Sunday' 
}

console.log(weekObj[1]);

/*3. Збережи тепер окремо в змінну day номер сьогоднішнього дня, і зроби консоль лог сьогоднішнього дня з нашого обʼєкту за допомогою змінної day*/

let day = 1;

console.log(weekObj[day]);

/*4.
{
  country: "Ukraine",
  cities: {
    kyiv: {
      name: "Kyiv",
      population: 2800000,
    }
  } !!!запятая!!!
  isPopular: false,
}

Виведи в консоль з цього обʼєкту "Kyiv"*/
let taskObj = {
    country: "Ukraine",
    cities: {
      kyiv: {
        name: "Kyiv",
        population: 2800000,
      }
    },
    isPopular: false,
  }

  console.log(taskObj.cities.kyiv.name);


/*5. Створи копію обʼєкту наданого вище щоб він не мутував і додай в вкладений обʼєкт cities своє місто за зразком Києва (Все інше при цьому має залишитись в обʼєкті). Старий обʼєкт не повинен мутувати!!!*/

let taskCloneObj=JSON.parse(JSON.stringify(taskObj));



taskCloneObj.cities.split= {name: "Split", population: 200000}

console.log(taskCloneObj);
console.log(taskObj);

/*6. Видали з свого обʼєкту ключ isPopular*/

delete taskCloneObj.isPopular;

console.log(taskCloneObj);

/*7.  Візьми і зроби з двох обʼєктів один новий, але при цьому мають взятися актуальні данні з обʼєкту userUpdate*/

  const user = {
    name: "Anton",
    password: "12345678",
    id: "0",
  }

  const userUpdate = {
    password: "ttt8765",
    id: "6x58sdfje",
    age: 38,
  } 

  const generatedObj={
    __proto__:user,
    /**name:'Den',*/ 
    /*
    !посмотри (стр106) - так он - Anton, а если переназначить - Den 
    */ 
    password:userUpdate.password,
    id:userUpdate.id,
    age:userUpdate.age
  }
  console.log(`Initial object:`);
  console.log(user);
  console.log(`Generated object:`);
  console.log(generatedObj.name);
  console.log('Cycled object:');
  for (let key in generatedObj){
    console.log(`${key} is ${generatedObj[key]}`);
  }

 
