const dropdown = document.querySelectorAll('#dropdown');
const dropdownMenu = document.querySelectorAll('.dropdownMenu');
const openDropdownMenu = () => {};

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', openDropdownMenu);
}
