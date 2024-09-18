import { useState } from "react";
function Heart() {
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);
    function handleClick() {
        if(clicked) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setClicked(!clicked);
    }
    return (
        <span onClick = {handleClick}>
            {clicked ? '❤️' : '💔'} {count}
        </span>
    );
}
export default Heart;