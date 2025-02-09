function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
}
// Add bubble animation to whole page except nav and footer
document.addEventListener("DOMContentLoaded", function () {
    const bubbleContainer = document.createElement("div");
    bubbleContainer.classList.add("bubble-container");
    document.body.appendChild(bubbleContainer);
    
    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        
        const size = Math.random() * 20 + 10 + "px"; // Bubble size between 10px to 30px
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + "%";
        
        bubbleContainer.appendChild(bubble);
        
        setTimeout(() => {
            bubble.remove();
        }, 5000);
    }
    
    setInterval(createBubble, 500);
});

// CSS for bubble animation excluding nav and footer
const style = document.createElement("style");
style.innerHTML = `
    .bubble-container {
        position: fixed;
        width: 100%;
        height: 100%;
        overflow: hidden;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: -1;
    }
    .bubble {
        position: absolute;
        bottom: -30px;
        background-color: rgba(217, 44, 44, 0.3);
        border-radius: 50%;
        animation: rise 5s linear infinite;
    }
    @keyframes rise {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
    nav, footer {
        position: relative;
        z-index: 10;
    }
`;
document.head.appendChild(style);
