(function () {
    const scrollButton = document.querySelector("div.button");
    scrollButton.style.display = 'none';
    let lastScrollPosition;
    setTimeout(() => {
        if (html.scrollTop > html.scrollHeight - 2000) {
            scrollButton.style.display = 'block';
        }
    }, 2000);
    const html = document.documentElement;
    scrollButton.addEventListener("click", () => {
        html.scrollTop = 0;
    });

    document.addEventListener("scroll", () => {
        if (lastScrollPosition) {
            const scrollTopPosition = html.scrollTop;
            if (scrollTopPosition > html.scrollHeight - 2000) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        } else {
            lastScrollPosition = html.scrollTop;
        }
    });
})();