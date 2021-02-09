let dropdownImage = document.querySelectorAll('#dropdownImage');
let dropdownTitle = document.querySelectorAll('.dropdownTitle');
const perProgramTable = document.getElementById('perProgramTable');
const perStudentTable = document.getElementById('perStudentTable');
const perProgram = document.querySelector('.perProgram');
const perStudent = document.querySelector('.perStudent');
const sortClassPerProgram = document.querySelector('.sortClass1');
const sortClassPerStudent = document.querySelector('.sortClass2');

const openDropdownMenu = (e) => {
  if (e.target.id !== 'clicked') {
    const tr = e.target.parentNode.parentNode;

    const newActiveObject1 = document.createElement('tr');
    const newActiveObject2 = document.createElement('tr');
    // const newActiveObject3 = document.createElement('tr');

    newActiveObject1.innerHTML = ` 
  <td align="center" rowspan="2">
    <img class="imgSize" src="./asset/img-2021/inner_arrow.png" />
  </td>
  <td class="tableTitle">사용시간</td>
<td class="tableTitle">이름</td>
<td class="tableTitle">프로그램</td>
`;
    newActiveObject2.innerHTML = `
  <td class="usageTime">00:00:00</td>
  <td class="name">B611061 문상진</td>
  <td class="programName">Kakaotalk.exe</td>`;

    //   newActiveObject3.innerHTML = `
    // <td align="center">
    //   <img class="imgSize" src="./asset/img-2021/inner_arrow.png" />
    // </td>
    // <td class="usageTime">00:00:00</td>
    // <td class="name">B611061 문상진</td>
    // <td class="programName">Kakaotalk.exe</td>`;

    newActiveObject1.setAttribute('class', 'dropdownTitle');
    newActiveObject2.setAttribute('class', 'dropdownMenu');
    // newActiveObject3.setAttribute('class', 'dropdownMenu');

    tr.after(newActiveObject1);
    newActiveObject1.after(newActiveObject2);
    // newActiveObject2.after(newActiveObject3);
    e.target.setAttribute('src', './asset//img-2021/X_or_Close_Black.png');
    e.target.setAttribute('id', 'clicked');
  } else {
    let dropdownTitle = document.querySelectorAll('.dropdownTitle');
    dropdownTitle.forEach((i) => {
      i.classList.add('hidden');
    });
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

const openPerStudentTable = () => {
  perStudentTable.classList.remove('hidden');
  perProgramTable.classList.add('hidden');

  sortClassPerStudent.style.background = '#ffff';
  perStudent.style.color = 'black';
  sortClassPerProgram.style.background = '#f4f5f6';
  perProgram.style.color = '#7c7d80';
};

const openPerProgramTable = () => {
  perProgramTable.classList.remove('hidden');
  perStudentTable.classList.add('hidden');

  sortClassPerProgram.style.background = '#ffff';
  perProgram.style.color = 'black';
  sortClassPerStudent.style.background = '#f4f5f6';
  perStudent.style.color = '#7c7d80';
};

perProgram.addEventListener('click', openPerProgramTable);
perStudent.addEventListener('click', openPerStudentTable);

findAllDropdown();
