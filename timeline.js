// Timeline Page JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Timeline Data
    const timelineData = {
        0: {
            image: "../images/babycira.JPEG",
            caption: "Look at that lil Smile!👶🏻"
        },
        1.32: {
            image: "../images/babycira.JPEG",
            caption: "Baby Cira and Big Dad"
        },
        2.64: {
            image: "../images/dad_babycira.JPEG",
            caption: "Baby Cira and Big Dad"
        },
        3.95: {
            image: "../images/dad_babycira.JPEG",
            caption: "Baby Cira and Big Dad🌟"
        },
        4.09: {
            image: "../images/dad_babycira.JPEG",
            caption: "baby Cira and Big Dad🌟"
        },
        4.22: {
            image: "../images/nana_cira.JPEG",
            caption: "Nana and Cira 🌟"
        },
        4.35: {
            image: "../images/nana_cira.JPEG",
            caption: "Nana and Cira 🌟"
        },
        5.27: {
            image: "../images/loren_cira.JPEG",
            caption: "life long friends🌸"
        },
        5.8: {
            image: "../images/loren_cira.JPEG",
            caption: "life long friends🌸"
        },
        6.2: {
            image: "../images/loren_cira2.JPEG",
            caption: "life long friends🌸"
        },
        6.5: {
            image: "../images/loren_cira2.JPEG",
            caption: "life long friends🌸"
        },
        7: {
            image: "../images/og_trio.JPEG",
            caption: "The OG Trio💫"
        },
        7.2: {
            image: "../images/lil_cira_at_beach.JPEG",
            caption: "The Beach Days💫"
        },
        7.5: {
            image: "../images/dad_cira_at_yellowstone.JPEG",
            caption: "Always been traveling with Dad🌎"
        },
        7.8: {
            image: "../images/dad_cira_at_yellowstone.JPEG",
            caption: "Always been traveling with Dad🌎"
        },
        10: {
            image: "../images/princess_cira.JPEG",
            caption: "The Princess Cira👑"
        },
        10.3: {
            image: "../images/princess_cira.JPEG",
            caption: "The Princess Cira👑"
        },
        10.8: {
            image: "../images/princess_cira.JPEG",
            caption: "The Princess Cira👑"
        },
        14: {
            image: "../images/cira_beau.PNG",
            caption: "Beau was brought home"
        },
        14.4: {
            image: "../images/cira_beau.PNG",
            caption: "Beau was brought home"
        },
        15: {
            image: "../images/cira_beau.PNG",
            caption: "Beau was brought home"
        },
        16: {
            image: "../images/cira_beau.PNG",
            caption: "Beau was brought home"
        },
        16.5: {
            image: "../images/party.MOV",
            caption: "Best Party Ever!!"
        },
        17: {
            image: "../images/kitchen.JPEG",
            caption: "Start of the Master Chef Cira Era👩🏻‍🍳"
        },
        17.5: {
            image: "../images/kitchen.JPEG",
            caption: "Start of the Master Chef Cira Era👩🏻‍🍳"
        },
        19: {
            image: "../images/Christmas.JPG",
            caption: "Christmas with the family🎄"
        },
        22: {
            image: "../images/cira_moves.JPG",
            caption: "Cira Moves Out :(🌹"
        },
        22.5: {
            image: "../images/cira_moves2.JPG",
            caption: "Cira Moves Out :(🌹"
        },
        23.5: {
            image: "../images/drown123.jpg",
            caption: "Uhuru and Cira Almost Drown Bona in Tahoe😅"
        },
        23.9: {
            image: "../images/sanfran.JPG", 
            caption: "San Francisco pitstop🌉"
        }, 
        24: {
            image: "../images/cira_lilly.JPEG",
            caption: "The sisters of the family 💖"
        },
        24.5: {
            image: "../images/cira_lilly.JPEG",
            caption: "The sisters of the family 💖"
        },
        25: {
            image: "../images/big_coach.png",
            caption: "The sisters of the family 💖"
        },
        25.5: {
            image: "../images/always_got_that_face.JPG",
            caption: "BEEN MAKING THAT STANK AHH FACEEEE!!!!!"
        },
        25.8: {
            image: "../images/drowns.JPG",
            caption: "SQUADDDDDDDDDDDDDDD"
        },
        26: {
            image: "../images/3_amigos.jpg",
            caption: "Everyone getting a lil older"
        },
        27: {
            image: "../images/Game.jpg",
            caption: "Warriors still own the celtics thoooo!!(NICK THIS FOR YOU)"
        },
        28: {
            image: "../images/final_tahoe.JPG",
            caption: "Latest Tahoe Adventure🏔️"
        },
        28.2: {
            image: "../images/_more_tahoe_fun.jpg",
            caption: "Latest Tahoe Adventure🏔️"
        },
        28.2: {
            image: "../images/_more_tahoe_fun.jpg",
            caption: "Latest Tahoe Adventure🏔️"
        },
        28.5: {
            image: "../images/st.jpg",
            caption: "Cira finally lets Bona hang out with her!!!!!"
        },
        28.9: {
            image: "../images/bona_cira.jpg",
            caption: "st patricks day!!"
        },
        29: {
            image:"../images/Regis.jpg",
            caption: "Look how Grown Up she is!!, Hqppy 29th Birthday Cira!!"
        }
    };

    // Timeline Slider
    const slider = document.getElementById('timelineSlider');
    const photo = document.getElementById('timelinePhoto');
    const video = document.getElementById('timelineVideo');
    const caption = document.getElementById('photoCaption');

    function isVideo(src) {
        return /\.(mov|mp4|webm|ogg)$/i.test(src);
    }

    function updateTimeline(sliderValue) {
        const age = sliderValue / 10;
        const availableAges = Object.keys(timelineData).map(Number).sort((a, b) => a - b);
        const closestAge = availableAges.reduce((prev, curr) =>
            Math.abs(curr - age) < Math.abs(prev - age) ? curr : prev
        );
        const data = timelineData[closestAge];

        photo.style.opacity = '0';
        video.style.opacity = '0';

        setTimeout(() => {
            if (isVideo(data.image)) {
                photo.style.display = 'none';
                video.style.display = 'block';
                video.src = data.image;
                video.load();
                video.style.opacity = '1';
            } else {
                video.style.display = 'none';
                video.pause();
                video.src = '';
                photo.style.display = 'block';
                photo.src = data.image;
                photo.style.opacity = '1';
            }

            caption.textContent = data.caption;

            if (closestAge === 29) {
                caption.classList.add('age-22');
            } else {
                caption.classList.remove('age-22');
            }
        }, 250);
    }

    slider.addEventListener('input', (e) => {
        updateTimeline(parseInt(e.target.value));
    });
    
    // Initialize with first photo
    updateTimeline(0); 
});