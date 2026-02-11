// ====== COMMON ======
document.addEventListener("DOMContentLoaded", () => {
    console.log("Mall Management Website Loaded");
    setActiveLink();
    loadShops();
    loadOffers();
    loadEvents();
});

// ====== NAVBAR ACTIVE LINK ======
function setActiveLink() {
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.fontWeight = "bold";
            link.style.textDecoration = "underline";
        }
    });
}

// ====== SHOPS DATA ======
const shops = [
    "Clothing Store",
    "Electronics Store",
    "Food Court",
    "Book Store",
    "Jewellery Store",
    "Gaming Zone"
];

function loadShops() {
    const shopList = document.getElementById("shopList");
    if (!shopList) return;

    shopList.innerHTML = "";
    shops.forEach(shop => {
        const li = document.createElement("li");
        li.textContent = shop;
        shopList.appendChild(li);
    });
}

// ====== OFFERS DATA ======
const offers = [
    "🔥 Flat 50% OFF on Clothing",
    "🎉 Buy 1 Get 1 Free on Shoes",
    "📱 30% OFF on Electronics",
    "🍔 Combo Offer in Food Court"
];

function loadOffers() {
    const offerDiv = document.getElementById("offerList");
    if (!offerDiv) return;
}