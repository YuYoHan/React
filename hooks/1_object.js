const students = {
    apple: "김민주",
    banana: "김채원",
    orange: "사쿠라",
};

const { apple, banana, orange } = students;

console.log(apple);
console.log(banana);
console.log(orange);

const user = ["카즈하", "안유진", "권은비"];

/*  즉 배열은 인덱스를 기준으로 구조분해 할 수 있다. */

const [ka, an, gun] = user;

console.log(ka);
console.log(an);
console.log(gun);

const dog = {
    name: "콩이",
    age: 10,
    weight: 5,
};

// const printDesDog = (dog) => {
//     console.log(`우리집 강아지의 이름은 ${dog.name}입니다.
//     그리고 나이는 ${dog.age}살이구요. 무게는 ${dog.weight}kg 입니다.`);
// };

const printDesDog = ({ name, age, weight }) => {
    console.log(`우리집 강아지의 이름은 ${dog.name}입니다.
        그리고 나이는 ${dog.age}살이구요. 무게는 ${dog.weight}kg 입니다.`);
};

// printDesDog(dog);
// 1. 매개변수도 구조분해할당으로 접근할 수 있다.
printDesDog(dog);

// 2.
printDesDog({
    name: dog.name,
    age: dog.age,
    weight: dog.weight,
});

function a(key, value) {
    console.log(key, value);
}

function b({ key, value }) {
    console.log(key, value);
}

function c(name, { key, value }) {
    console.log(name, key, value);
}

const onClickHandler = (e) => {
    // e.target ← 이벤트가 일어난 객체의 타겟
    const { target } = e; // o
};

// a("token_key", 1234) ← 매개변수가 어떤 기능을 하는지 알기 힘들다.

/*
    b({
        key: "token_key",
        value: 1234
    })
*/
