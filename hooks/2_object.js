const user = {
    id: "zxzz45",
    password: "zxzz12",
    name: "김민주",
    age: 24,
};

const { id, password, name, age } = user;
console.log(id);
console.log(password);
console.log(name);
console.log(age);

const a = (user) => {
    console.log(`선택하신 유저의 이름은 ${user.name}입니다.`);
};
a(user);

const b = ({ id, password, name, age }) => {
    console.log(`
    가입한 아이디 : ${user.id}
    가입한 이름 ; ${user.name}
    가입한 유저의 나이: ${user.age}`);
};

b(user);
b({
    id: user.id,
    name: user.name,
    age: user.age,
});
