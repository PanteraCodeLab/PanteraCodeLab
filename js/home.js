function toggleDropdown(button) {
    const dropdown = button.nextElementSibling;

    if(dropdown.style.display === "block"){
        dropdown.style.display = "none";
    }else {
        dropdown.style.display = "block";
    }
}
