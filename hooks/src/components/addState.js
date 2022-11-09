import { useState } from "react";

function AddState() {
    const [userList, setUserList] = useState([
        {
            id: 1,
            name: "김성용",
        },
        {
            id: 2,
            name: "김사과",
        },
        {
            id: 3,
            name: "이멜론",
        },
    ]);

    const onAddUserList = (id, name) => {
        // 이거는 userList를 건들고 있는것이다.
        // 즉, 원본을 건드리고 있는 것이다. ← 얕은 복사
        // const newUserList = userList;
        // userList[userList.length] = {id, name}

        // 깊은 복사
        // const newUserList = [...userList];
        // {id: id, name: name} → {id, name}  : 키와 값이 같다면 줄여서 쓸 수 있다.
        // 원본 훼손을 방지하기 위해서 깊은 복사를 사용해야 한다.
        setUserList([...userList, { id, name }]);
    };

    /**
     * ★ react의 object의 값을 변경 시킬 수 있는 방법(불변성은 지키는 전제하에)
     *
     * 1. map
     *      [react에서 JSX 문법의 반복문]
     *          → 주로 배열의 길이만큼 반복할 때 사용 / 반환 값이 있음(배열을 리턴)
     *
     *          ex)
     *          배열명.map((인덱스에 따른 반환값) => 실행문)
     *          userList.map((user) => (console.log(user.name)))
     *          // 김성용, 김사과, 이멜론
     *
     *      (user) => () : return x, 실행문 x
     *      (user) => {} : return o, 실행문 o
     *
     * 2. find / findindex
     * 3. filter
     */

    /**
     *  백엔드 받아온 데이터 형태 → 오브젝트 → 불변성을 지키고 상태를 변화
     *
     *  ex)
     *  message : "success",
     *  data : [
     *      {
     *          prodName: "떢볶이",
     *          prodPrice: 8000,
     *          prodImg: "https://이미지주소.com/img/231465.png",
     *          prodDesc: "이 떢볶이는 장인의 손맛으로 ...",
     *          prodPoint: 4.895,
     *          review: [
     *              {
     *                  User: {
     *                      nick: "김성용",
     *                      profileImg: "https:// ...."
     *                  }
     *                  context: "이거 정말 비싸네요",
     *                  point: 2
     *              }
     *          ]
     *      }
     *  ]
     *
     */
    return (
        <>
            {userList.map((user) => (
                <div>
                    {user.id}. {user.name}
                </div>
            ))}
        </>
    );
}

export default AddState;
