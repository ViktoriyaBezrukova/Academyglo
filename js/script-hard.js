// let lang = "ru";
let lang = "en";
if (lang === "ru") {
    console.log("пн, вт, ср, чт, пт, сб, вс")
} else {
    console.log("mon, tue, wed, thu, fri, sat, sun")
}

switch(lang) {
    case "ru":
        console.log("пн, вт, ср, чт, пт, сб, вс");
        break;
    case "en":
        console.log("mon, tue, wed, thu, fri, sat, sun");
        break;

}

let result = lang === "ru" ? console.log("пн, вт, ср, чт, пт, сб, вс") : console.log("mon, tue, wed, thu, fri, sat, sun");


let namePerson = "Maks";

namePerson === "Artem" ? console.log("Director") : namePerson ==="Maksim" ? console.log("Prepodavatel") : console.log("Student") 