
function login() {
    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Enter your name");
    } else {
        alert("Login Successful");
        document.getElementById("exam").style.display = "block";
    }
}

function result() {
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');

    if (!q1 || !q2) {
        alert("Answer all questions");
        return;
    }

    let score = Number(q1.value) + Number(q2.value);

    document.getElementById("output").innerHTML =
        "Your Score: " + score + "/2";
}
