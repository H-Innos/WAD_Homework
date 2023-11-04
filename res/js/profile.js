const icon = document.getElementById('iconbtn')
const dropdown = document.getElementById('personalInfo')

function showDropdown() {
    if (dropdown.style.display == "flex") {
        dropdown.style.display = "none"
    } else {
        dropdown.style.display = "flex"
    }
    //console.log("working")
}

icon.addEventListener("click", showDropdown)