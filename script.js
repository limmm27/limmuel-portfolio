document.querySelectorAll(".design-popup").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const imageUrl = this.href;

        const popupWidth = 600;
        const popupHeight = 500;

        const left = Math.max(
            0,
            (window.screen.width - popupWidth) / 2
        );

        const top = Math.max(
            0,
            (window.screen.height - popupHeight) / 2
        );

        const popup = window.open(
            "",
            "_blank",
            `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes`
        );

        if (!popup) {
            alert("Please allow pop-ups for this website.");
            return;
        }

        popup.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>View Design</title>
                <style>
                    * {
                        box-sizing: border-box;
                    }

                    body {
                        margin: 0;
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #080c14;
                        padding: 15px;
                        overflow: hidden;
                    }

                    img {
                        display: block;
                        max-width: 100%;
                        max-height: 90vh;
                        width: auto;
                        height: auto;
                        object-fit: contain;
                    }
                </style>
            </head>
            <body>
                <img src="${imageUrl}" alt="Design Preview">
            </body>
            </html>
        `);

        popup.document.close();
    });
});

document.getElementById("year").textContent=new Date().getFullYear();