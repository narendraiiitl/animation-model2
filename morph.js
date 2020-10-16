// const btn = document.getElementById("explore");
const btn = document.getElementById("exploreback");
let rate = 2000;
let lastClick = Date.now() - rate;
btn.addEventListener("click", () => {
    if (Date.now() - lastClick >= rate) {
        var morphing = anime({
            targets: ".polymorph",
            points: [
                {
                    value: "0 0 383 0 579 749 1920 1080 1001 1080 0 1080 0 0",
                },
                {
                    value: "0 0 0 0 579 750 1920 1080 1001 1080 0 1080 0 0",
                },
                {
                    value: "0 0 0 0 0 1080 1920 1080 1001 1080 0 1080 0 0",
                },
            ],
            easing: "easeInOutExpo",
            duration: 1500,
            loop: false,
        });
        lastClick = Date.now();
        // morphing.finished.then(() => {
        //     btn2.onclick = function () {
        //         if (Date.now() - lastClick >= rate) {
        //             anime({
        //                 targets: ".polymorph",
        //                 points: [
        //                     {
        //                         value: "0 0 0 0 579 750 1920 1080 1001 1080 0 1080 0 0",
        //                     },
        //                     {
        //                         value: "0 0 383 0 579 749 1920 1080 1001 1080 0 1080 0 0",
        //                     },
        //                     {
        //                         value: "0 0 960 0 1920 0 1920 1080 1001 1080 0 1080 0 0",
        //                     },
        //                 ],
        //                 easing: "easeInOutExpo",
        //                 duration: 1500,
        //                 loop: false,
        //             });
        //             lastClick = Date.now();
        //         }
        //     };
        // });
    }
});
