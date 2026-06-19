/* =======================
   Products & Cart Storage
======================= */

// محصولات اولیه
let products = JSON.parse(localStorage.getItem('myProducts')) || [
    { id: 1, name: "لپ‌تاپ ۱۶ اینچی ایسوس مدل ROG Strix G16", price: 80000000, image: "1.jpg", desc: "لپ‌تاپ گیمینگ قدرتمند ایسوس با پردازنده Core i9، کارت گرافیک RTX 4070 و سیستم خنک‌کننده اختصاصی ROG برای اجرای سنگین‌ترین بازی‌ها", category: "لپ‌تاپ گیمینگ", stock: 1 },
    { id: 2, name: "لپ‌تاپ ۱۶ اینچی ایسوس مدل TUF Gaming F16", price: 55000000, image: "2.jpg", desc: "لپ‌تاپ گیمینگ اقتصادی ایسوس از سری تاف با پردازنده Core i7 و بدنه مقاوم دارای استاندارد نظامی مناسب بازی و کارهای سخت‌افزاری سنگین", category: "لپ‌تاپ گیمینگ", stock: 3 },
    { id: 3, name: "لپ‌تاپ ۱۵.۶ اینچی ایسوس مدل VivoBook Pro 15", price: 45000000, image: "3.jpg", desc: "لپ‌تاپ مالتی‌مدیا و مهندسی ایسوس با طراحی شیک، کیبورد ارگونومیک، نمایشگر باکیفیت و سرعت بالا در پردازش امور اداری، محاسباتی و دانشگاهی", category: "لپ‌تاپ کاربری", stock: 4 },
    { id: 4, name: "لپ‌تاپ ۱۴ اینچی ایسوس مدل ZenBook 14 OLED", price: 60000000, image: "4.jpg", desc: "الترابوک پرچمدار و فوق‌العاده سبک ایسوس با صفحه نمایش خیره‌کننده OLED و طول عمر باتری بالا مناسب جابجایی مداوم و مدیران", category: "لپ‌تاپ سبک", stock: 2 },
    { id: 5, name: "لپ‌تاپ ۱۶ اینچی ایسوس مدل ROG Zephyrus G16", price: 95000000, image: "9.jpg", desc: "شاهکار مهندسی ایسوس با بدنه تمام آلومینیومی فوق‌باریک، کارت گرافیک رده‌بالای RTX 4080 و نمایشگر OLED بی‌نظیر برای گیمرها و طراحان حرفه‌ای", category: "لپ‌تاپ گیمینگ", stock: 6 },
    { id: 6, name: "لپ‌تاپ ۱۵.۶ اینچی ایسوس مدل VivoBook 15", price: 29000000, image: "10.jpg", desc: "لپ‌تاپ اقتصادی و کارآمد ایسوس مناسب برای وب‌گردی، تماشای فیلم، حسابداری، نرم‌افزارهای آفیس و استفاده عمومی در خانه و محل کار", category: "لپ‌تاپ کاربری", stock: 15 },
    { id: 7, name: "لپ‌تاپ ۱۶ اینچی ایسوس مدل TUF Gaming A16", price: 52000000, image: "7.jpg", desc: "نسخه تکامل‌یافته لپ‌تاپ‌های گیمینگ سری تاف ایسوس مجهز به پردازنده قدرتمند رایزن و سیستم خنک‌کننده بهینه برای پایداری در پردازش‌های طولانی", category: "لپ‌تاپ گیمینگ", stock: 5 },
    { id: 8, name: "لپ‌تاپ ۱۴ اینچی ایسوس مدل ExpertBook B1", price: 34000000, image: "8.jpg", desc: "لپ‌تاپ تجاری و اداری ایسوس با امنیت ارتقا یافته، پورت‌های کامل، بدنه مستحکم و وزن کم ایده‌آل برای کارمندان، برنامه‌نویسان و شبکه", category: "لپ‌تاپ کاربری", stock: 8 },
    { id: 9, name: "لپ‌تاپ ۱۳.۴ اینچی ایسوس مدل ROG Flow X13", price: 87000000, image: "5.jpg", desc: "لپ‌تاپ گیمینگ لمسی و ۲ در ۱ ایسوس با قابلیت چرخش ۳۶۰ درجه، وزن بسیار کم و پشتیبانی از قلم هوشمند برای طراحان و مدیران توسعه‌دهنده", category: "لپ‌تاپ سبک", stock: 2 },
    { id: 10, name: "لپ‌تاپ ۱۵.۶ اینچی ایسوس مدل Creator Laptop Q530", price: 58000000, image: "6.jpg", desc: "لپ‌تاپ تخصصی ایسوس برای تولیدکنندگان محتوا، عکاسان و تدوین‌گران با نمایشگر کالیبره شده OLED و سخت‌افزار هماهنگ برای رندرینگ ویدیو", category: "لپ‌تاپ کاربری", stock: 3 },
    { id: 11, name: "لپ‌تاپ ۱۶ اینچی ایسوس مدل ProArt Studiobook 16", price: 120000000, image: "11.jpg", desc: "ابرلپ‌تاپ استودیویی ایسوس مجهز به دکمه فیزیکی ASUS Dial، سخت‌افزار فوق‌پیکربندی شده و بالاترین استانداردهای رنگی مخصوص آرشیتکت‌ها و گرافیست‌ها", category: "لپ‌تاپ کاربری", stock: 2 },
    { id: 12, name: "لپ‌تاپ ۱۵.۶ اینچی ایسوس مدل VivoBook Go 15", price: 22000000, image: "12.jpg", desc: "لپ‌تاپ فوق‌اقتصادی و سبک ایسوس با مصرف باتری بسیار بهینه مناسب برای آموزش آنلاین، دانش‌آموزان و کارهای متنی و وب‌گردی روزمره", category: "لپ‌تاپ سبک", stock: 10 }
];

if (!localStorage.getItem('myProducts')) {
    localStorage.setItem('myProducts', JSON.stringify(products));
}

// سبد خرید
let cart = JSON.parse(localStorage.getItem('cart')) || [];

/* =======================
   Login & Register Simulation
======================= */

let users = JSON.parse(localStorage.getItem('users')) || [];

async function registerUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    if (!email || !password) {
        msg.style.color = "red";
        msg.innerText = "تمام فیلدها را پر کنید";
        return;
    }

    if (users.find(u => u.email === email)) {
        msg.style.color = "red";
        msg.innerText = "این ایمیل قبلا ثبت شده";
        return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    msg.style.color = "green";
    msg.innerText = "ثبت‌نام موفق!";
}

async function loginUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        msg.style.color = "red";
        msg.innerText = "ایمیل یا رمز اشتباه است";
        return;
    }

    localStorage.setItem('username', email);
    msg.style.color = "green";
    msg.innerText = "ورود موفق!";
    setTimeout(() => window.location.href = "index.html", 500);
}

/* =======================
   DOMContentLoaded
======================= */

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    if (document.getElementById('product-list')) renderProducts();
    if (document.getElementById('cart-items')) renderCartPage();
    if (document.getElementById('admin-product-list')) renderAdminProducts();

    const userDisplay = document.getElementById('user-display');
    const username = localStorage.getItem('username');
    if (username && userDisplay) userDisplay.innerText = `سلام، ${username}`;
});

/* =======================
   Cart Utilities
======================= */
function updateCartCount() {
    const counters = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    counters.forEach(el => el.textContent = totalItems);
}

/* =======================
   Products Page
======================= */
function renderProducts(items = products) {
    const container = document.getElementById('product-list');
    if (!container) return;

    container.innerHTML = ''; // پاک کردن قبلی

    items.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('gallery-item');

        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <button class="main-btn buy-btn">افزودن به سبد خرید</button>
            <div class="gallery-caption">
                <h3>${product.name}</h3>
                <p>${product.price.toLocaleString()} تومان</p>
                <p>${product.desc || ''}</p>
            </div>
        `;

        container.appendChild(div);

        const buyBtn = div.querySelector('.buy-btn');
        if (buyBtn) {
            buyBtn.addEventListener('click', () => addToCart(product.id));
        }
    });
}

/* =======================
   Cart Logic
======================= */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) cartItem.quantity += 1;
    else cart.push({ ...product, quantity: 1 });

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('محصول به سبد خرید اضافه شد');
}

/* =======================
   Cart Page
======================= */
function renderCartPage() {
    const container = document.getElementById('cart-items');
    if (!container) return;

    container.innerHTML = '';
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:white;">سبد خرید شما خالی است.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.style.cssText = 'background: rgba(255,255,255,0.1); margin-bottom:10px; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;';

        div.innerHTML = `
            <div style="display:flex; align-items:center; gap:15px;">
                <img src="${item.image}" width="80" style="border-radius:5px;">
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.price.toLocaleString()} تومان</p>
                </div>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <input type="number" min="1" value="${item.quantity}" style="width:60px; padding:5px; border-radius:4px;" class="cart-quantity">
                <button class="remove-btn" style="background:#ff4444; color:white; border:none; padding:8px 12px; border-radius:4px; cursor:pointer;">حذف</button>
            </div>
        `;

        container.appendChild(div);
        div.querySelector('.cart-quantity').addEventListener('change', e => updateQuantity(index, e.target.value));
        div.querySelector('.remove-btn').addEventListener('click', () => removeFromCart(index));
    });

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalDiv = document.createElement('div');
    totalDiv.style.cssText = 'margin-top:20px; border-top:2px solid #FFD700; padding-top:20px;';
    totalDiv.innerHTML = `
        <div style="display:flex; justify-content:space-between; font-size:20px; color:#FFD700;">
            <span>مبلغ قابل پرداخت:</span>
            <span>${totalPrice.toLocaleString()} تومان</span>
        </div>
        <button class="main-btn go-checkout-btn" style="width:100%; margin-top:15px; padding:15px; font-size:18px;">ادامه فرایند پرداخت</button>
    `;
    container.appendChild(totalDiv);
    totalDiv.querySelector('.go-checkout-btn').addEventListener('click', goToCheckout);
}

/* =======================
   Cart Actions
======================= */
function updateQuantity(index, value) {
    const qty = parseInt(value);
    if (qty < 1) return;
    cart[index].quantity = qty;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartPage();
    updateCartCount();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartPage();
    updateCartCount();
}

function goToCheckout() {
    if (cart.length === 0) {
        alert('سبد خرید شما خالی است');
        return;
    }
    window.location.href = 'checkout.html';
}

/* =======================
   Admin Panel
======================= */
function saveNewItem() {
    const n = document.getElementById('newName').value;
    const p = document.getElementById('newPrice').value;
    const d = document.getElementById('newDesc').value;
    const f = document.getElementById('newImgFileName').value;

    if (!n || !p || !f) {
        alert("تمام فیلدها را پر کنید");
        return;
    }

    products = JSON.parse(localStorage.getItem('myProducts')) || [];
    products.push({ id: Date.now(), name: n, price: parseInt(p), desc: d, image: f });
    localStorage.setItem('myProducts', JSON.stringify(products));
    alert("محصول ذخیره شد");
    renderAdminProducts();
    renderProducts();
    resetForm();
}

function renderAdminProducts() {
    const list = document.getElementById('admin-product-list');
    if (!list) return;

    products = JSON.parse(localStorage.getItem('myProducts')) || [];
    list.innerHTML = '<h3>لیست محصولات</h3>';
    products.forEach((p, index) => {
        list.innerHTML += `
            <div class="product-card">
                <b>${p.name}</b> - ${p.price.toLocaleString()} تومان
                <button onclick="editProduct(${index})" style="background:#ffc107; color:black; border:none; padding:5px; float:left; margin-left:5px; cursor:pointer;">ویرایش</button>
                <button onclick="deleteProduct(${index})" style="background:red; color:white; border:none; padding:5px; float:left; cursor:pointer;">حذف</button>
            </div>
        `;
    });
}

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem('myProducts', JSON.stringify(products));
    renderAdminProducts();
    renderProducts();
}

function editProduct(index) {
    const product = products[index];

    document.getElementById('newName').value = product.name;
    document.getElementById('newPrice').value = product.price;
    document.getElementById('newDesc').value = product.desc;
    document.getElementById('newImgFileName').value = product.image;

    const saveBtn = document.getElementById('save-btn');
    const updateBtn = document.getElementById('update-btn');
    if (saveBtn) saveBtn.style.display = 'none';
    if (updateBtn) updateBtn.style.display = 'block';

    updateBtn.onclick = function() {
        product.name = document.getElementById('newName').value;
        product.price = parseInt(document.getElementById('newPrice').value);
        product.desc = document.getElementById('newDesc').value;
        product.image = document.getElementById('newImgFileName').value;

        products[index] = product;
        localStorage.setItem('myProducts', JSON.stringify(products));
        alert("محصول ویرایش شد");
        renderAdminProducts();
        renderProducts();
        resetForm();
    };
}

function resetForm() {
    ['newName','newPrice','newDesc','newImgFileName'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    const saveBtn = document.getElementById('save-btn');
    const updateBtn = document.getElementById('update-btn');
    if (saveBtn) saveBtn.style.display = 'block';
    if (updateBtn) updateBtn.style.display = 'none';
}

/* =======================
   Theme Toggle
======================= */
const themeBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if(savedTheme) document.body.classList.add(savedTheme);

if(themeBtn){
    themeBtn.addEventListener('click', () => {
        if(document.body.classList.contains('dark')){
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            localStorage.setItem('theme','light');
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            localStorage.setItem('theme','dark');
        }
    });
}
