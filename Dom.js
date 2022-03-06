let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// فرم ارسال رویداد
form.addEventListener('submit', addItem);
// حذف رویداد
itemList.addEventListener('click', removeItem);
// فیلتر کردن رویداد
filter.addEventListener('keyup', filterItems);

// اضافه کردن موارد
function addItem(e) {
    e.preventDefault();

    // دریافت مقدار ورودی
    let newItem = document.getElementById('item').value;

    // li ایجاد عنصر جدید 
    let li = document.createElement('li');
    // اضافه کردن کلاس
    li.className = 'list-group-item';
    // اضافه کردن گره متن با مقدار ورودی
    li.appendChild(document.createTextNode(newItem));

    // ایجاد کردن دکمه ی حذف
    let deleteBtn = document.createElement('button');

    // اضافه کردن کلاس ها به دکمه حذف
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // اضافه کردن کلمه حذف به متن
    deleteBtn.appendChild(document.createTextNode('حذف'));

    // li دکمه ضمیمه به 
    li.appendChild(deleteBtn);

    //به لیست li اضافه کردن  
    itemList.appendChild(li);
}

// حذف موارد
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('آیا از حذف این مورد مطمئن هستید؟')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// فیلتر کردن موارد
function filterItems(e) {
    // تبدیل متن به حروف کوچک
    let text = e.target.value.toLowerCase();
    // گرفتن لیست موارد
    let items = itemList.getElementsByTagName('li');
    // تبدیل به آرایه
    Array.from(items).map(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}