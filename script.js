document.addEventListener("DOMContentLoaded", () => {
    // Button Click
    document.getElementById("magicButton").addEventListener("click", () => {
        alert("😃Button clicked!");
    });

    // Hover Effect
    const button = document.getElementById("magicButton");
    button.addEventListener("mouseover", () => button.style.color = "red");
    button.addEventListener("mouseout", () => button.style.color = "black");

    // Keypress
    document.addEventListener("keypress", (e) => {
        console.log(`You pressed: ${e.key}`);
    });

    // Double-click Bonus
    button.addEventListener("dblclick", () => {
        alert("💥 Double-clicked!");
    });

    // Gallery Navigation
    const images = [
        "https://images.unsplash.com/photo-1745905932700-929b5e8676f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1539724728401-4337be9859ba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1744043176705-6f61f70f1646?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
    let index = 0;
    const galleryImage = document.getElementById("galleryImage");

    document.getElementById("next").addEventListener("click", () => {
        index = (index + 1) % images.length;
        galleryImage.src = images[index];
    });

    document.getElementById("prev").addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        galleryImage.src = images[index];
    });

    // Tabs
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
        document.querySelectorAll(".tab-content").forEach(el => el.style.display = "none");
        document.getElementById(tab.dataset.tab).style.display = "block";
        });
    });

    // Form Validation
    document.getElementById("myForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const feedback = document.getElementById("formFeedback");

        if (!email.includes("@")) {
        feedback.textContent = "Invalid email format.";
        } else if (password.length < 8) {
        feedback.textContent = "Password must be at least 8 characters.";
        } else {
        feedback.textContent = "✅ Form is valid!";
        }
    });
    });
