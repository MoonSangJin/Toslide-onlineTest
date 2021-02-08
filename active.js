let dropdownImage = document.querySelectorAll('#dropdownImage');
let dropdownMenu = document.querySelectorAll('.dropdownMenu');

const openDropdownMenu = (e) => {
  if (e.target.id !== 'clicked') {
    const tr = e.target.parentNode.parentNode;

    const newActiveObject1 = document.createElement('tr');
    const newActiveObject2 = document.createElement('tr');
    newActiveObject1.innerHTML = ` 
  <td align="center" rowspan="2">
    <img class="imgSize" src="./asset/img-2021/inner_arrow.png" />
  </td>
  <td class="usageTime">사용시간</td>
<td class="name">이름</td>
<td class="programName">프로그램</td>
`;
    newActiveObject2.innerHTML = `
  <td class="usageTime">00:00:00</td>
  <td class="name">B611061 문상진</td>
  <td class="programName">Kakaotalk.exe</td>`;
    newActiveObject1.setAttribute('class', 'dropdownMenu');
    newActiveObject2.setAttribute('class', 'dropdownMenu');

    tr.after(newActiveObject1);
    newActiveObject1.after(newActiveObject2);
    e.target.setAttribute('src', './asset//img-2021/X_or_Close_Black.png');
    e.target.setAttribute('id', 'clicked');
  } else {
    let dropdownMenu = document.querySelectorAll('.dropdownMenu');
    dropdownMenu.forEach((i) => {
      i.classList.add('hidden');
    });

    let clickedImage = document.querySelectorAll('#clicked');
    clickedImage.forEach((i) => {
      i.setAttribute('src', './asset//img-2021/drop_down_dark_gray.png');
      i.setAttribute('id', 'dropdownImage');
    });
  }
};

const findAllDropdown = () => {
  for (let i = 0; i < dropdownImage.length; i++) {
    dropdownImage[i].addEventListener('click', openDropdownMenu);
  }
};

findAllDropdown();
