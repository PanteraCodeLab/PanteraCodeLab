function toggleDropdown(button) {
    const dropdown = button.nextElementSibling;
    const subnavContainer = button.closest('.subnav');
    const allSubnavs = document.querySelectorAll('.subnav');
    const index =Array.from(allSubnavs).indexOf(subnavContainer);

    let openMenus = JSON.parse(localStorage.getItem("openMenus")) || [];

    if(dropdown.classList.contains("show")){
        dropdown.classList.remove("show");
        openMenus = openMenus.filter(i => i !== index);
    }else{
        dropdown.classList.add("show");
        if (!openMenus.includes(index)){
            openMenus.push(index);
        }
    }
    localStorage.setItem("openMenus", JSON.stringify(openMenus));
}
document.addEventListener("DOMContentLoaded", () => {
    const openMenus = JSON.parse(localStorage.getItem("openMenus")) || [];
    const allSubnavs = document.querySelectorAll('.subnav');

    openMenus.forEach(index =>{
        if (allSubnavs[index]) {
            const dropdown = allSubnavs[index].querySelector('.subnav-content');
            if(dropdown){
                dropdown.classList.add("show");
            }
        }
    });
});
