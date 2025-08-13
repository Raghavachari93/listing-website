const items = [
    "Laptop - $500",
    "Smartphone - $300",
    "Headphones - $50",
    "Keyboard - $30",
    "Mouse - $20"
];

const listing = document.getElementById("listing");

items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listing.appendChild(li);
});
