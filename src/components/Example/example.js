import { useState, useEffect } from "react"

import React from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect (() => {
        console.log("работает как did mount (1 раз, сразу после монтирования компонента)")
    }, []);  // здесь пустой массив зависимостей

    useEffect (() => {
        console.log("работает как did mount (1 раз, сразу после монтирования компонента) + на каждом обновлении")
    });  // здесь нет массива зависимостей вообще

    useEffect (() => {
        console.log("работает как did mount (1 раз, сразу после монтирования компонента) + при изменении элемента массива зависимостей")
    }, [count]);  // здесь есть массив зависимостей (count)

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={() => setCount(count+1)}>Увеличить число выше!</button>
        </div>
    )
 } 

