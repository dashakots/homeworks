'use strict';

// Задача 1


async function fetchUserData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.error("error", error);
    }
}

fetchUserData();



// Задача 2

async function postInfo() {
const info = {
    name: 'Dasha',
    surname: 'Kotsuba',
    city: 'Gomel',
    userId: 1,
};

try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
    });

    const result = await response.json();
    console.log("Success:", result);
} catch (error) {
    console.error("Error:", error);
}
}

postInfo();

// Задача 3

async function fetchData() {
try {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/pdgfdhfdhfgh/fdfdhfhgfh5"
    );

    const info = await response.json();
    // console.log(info);
} catch (error) {
    console.error("error", error);
}
}

fetchData();