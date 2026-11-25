document.getElementById("nacist").addEventListener("click", () => {
    const jmeno = document.getElementById("jmeno").value;
    const heslo = document.getElementById("heslo").value;

    if (jmeno === "Ultrahrac" && heslo === "125") {
        window.location.href =
            "https://github.com/Ultrahrac";
    } else {
        alert("Údaje nejsou správné.");
    }
});