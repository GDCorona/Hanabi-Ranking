/*individual section (unique by pages)*/
//variables
const char = [
    {
        personality: 1,
        appearance: 23,
        voice: 30,
        name: "Nishimiya Shouko",
        anime: "Koe no katachi",
        avt: [
            "url('https://i.pinimg.com/originals/81/c1/c6/81c1c6eaf82af8c8be2e2b27d9370ac2.jpg')",
            "url('https://i.pinimg.com/originals/2b/bc/5e/2bbc5e714ca5291b8c6959a90d4385d9.jpg')",
            "url('https://i.pinimg.com/originals/b0/72/47/b072476c24c76403a6a5fab373e2b1da.jpg')",
            "url('https://i.pinimg.com/originals/90/ea/83/90ea832d6107d0729ad5565e5db0a70c.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/69/d8/75/69d8754cdbf6263c8fbbcc53bb086cf7.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606938-corona-689894639-kaguya-noise-1.mp3",
        info: document.getElementsByTagName("p")[0].innerHTML
    },
    {
        personality: 2,
        appearance: 29,
        voice: 18,
        name: "Furukawa Nagisa",
        anime: "Clannad",
        avt: [
            "url('https://i.pinimg.com/originals/cd/94/50/cd945069715cbebe209efb5204a09550.jpg')",
            "url('https://i.pinimg.com/originals/97/ac/59/97ac590ebe14c0aaa87f8a49a0976beb.jpg')",
            "url('https://i.pinimg.com/originals/51/11/fb/5111fb92c67dd21567fd9f1bcb0ed602.jpg')",
            "url('https://i.pinimg.com/originals/1b/ba/db/1bbadbc7fb09e45c74c84138dc5cfb80.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/8f/ac/df/8facdf1548bcd88e0158f83a50a3c8d5.jpg')",
        audio: "https://feeds.soundcloud.com/stream/1493606932-corona-689894639-chika-noise-3.mp3",
        info: document.getElementsByTagName("p")[1].innerHTML
    },
    {
        personality: 3,
        appearance: 28,
        voice: 27,
        name: "Madoka Kaname",
        anime: "Mahou Shoujo Madoka Magica",
        avt: [
            "url('https://i.pinimg.com/originals/4f/b8/ff/4fb8ff973e8b88e8ffd0f8ce853ddcef.jpg')",
            "url('https://i.pinimg.com/originals/8f/73/b0/8f73b066c3f41d32e603321c246ccc3d.jpg')",
            "url('https://i.pinimg.com/originals/fe/10/df/fe10dfde96008ca962109c92de7d31d9.jpg')",
            "url('https://i.pinimg.com/originals/c2/a7/a3/c2a7a3609a5d642c8178991fb4b1f0ba.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/df/7a/42/df7a4278523558979bd61e593cdf0a8e.jpg')",
        audio: "https://feeds.soundcloud.com/stream/1493606932-corona-689894639-chika-noise-3.mp3",
        info: document.getElementsByTagName("p")[2].innerHTML
    },
    {
        personality: 4,
        appearance: 30,
        voice: 8,
        name: "Onodera Kosaki",
        anime: "Nisekoi",
        avt: [
            "url('https://i.pinimg.com/originals/8c/08/87/8c0887b09c0be901004434af551c6383.jpg')",
            "url('https://i.pinimg.com/originals/6b/75/45/6b75457a68515ac89ad2111592f52eb0.jpg')",
            "url('https://i.pinimg.com/originals/70/40/d1/7040d1a1e15f7b0a2dbfd4f8c2376b3d.jpg')",
            "url('https://i.pinimg.com/originals/68/a0/4d/68a04de1b4ba41ac319d2ad4eb54622d.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/d3/0f/7d/d30f7dd3b0042e83f567afa4da3017c2.png')",
        audio: "https://feeds.soundcloud.com/stream/1493606932-corona-689894639-chika-noise-3.mp3",
        info: document.getElementsByTagName("p")[3].innerHTML
    },
    {
        personality: 5,
        appearance: 25,
        voice: 3,
        name: "Honma Meiko",
        anime: "Anohana",
        avt: [
            "url('https://i.pinimg.com/originals/64/00/bc/6400bc293dad65daf3e9111488bf8b6c.jpg')",
            "url('https://i.pinimg.com/originals/19/48/50/19485006cb2cc746d03453632102e087.jpg')",
            "url('https://i.pinimg.com/originals/b1/4e/2d/b14e2dc666ab0f63ac1fc08f028b1ba7.jpg')",
            "url('https://i.pinimg.com/originals/8e/cd/c5/8ecdc5f9429d3d101e0e9628980fa26e.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/73/9a/c6/739ac6d78cbae7052586776762a02bf7.jpg')",
        audio: "https://feeds.soundcloud.com/stream/1493606932-corona-689894639-chika-noise-3.mp3",
        info: document.getElementsByTagName("p")[4].innerHTML
    },
    {
        personality: 6,
        appearance: 2,
        voice: 1,
        name: "Shiina Mashiro",
        anime: "Sakurasou no Pet na Kanojo",
        avt: [
            "url('https://i.pinimg.com/originals/7c/e3/c8/7ce3c89c6530b9b61b9deec77a39a2f5.jpg')",
            "url('https://i.pinimg.com/originals/8a/00/de/8a00deae759dd8724981fe278ef2f784.jpg')",
            "url('https://i.pinimg.com/originals/3f/6b/db/3f6bdba68792ebe2e4aac00e5fe7e70b.jpg')",
            "url('https://i.pinimg.com/originals/3e/ad/63/3ead636da3c80a59bb3de91d94b6d96d.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/14/68/eb/1468ebc64153539d362c61f9f9cbb92a.jpg')",
        audio: "https://feeds.soundcloud.com/stream/1493606932-corona-689894639-chika-noise-3.mp3",
        info: document.getElementsByTagName("p")[5].innerHTML
    },
    {
        personality: 7,
        appearance: 5,
        voice: 10,
        name: "Tohka Yatogami",
        anime: "Date A Live",
        avt: [
            "url('https://i.pinimg.com/originals/2a/a5/ce/2aa5cec967d47b852e54f7d5caccf9bf.jpg')",
            "url('https://i.pinimg.com/originals/da/11/c4/da11c4f51f967cf68ba8cbc0635065d4.jpg')",
            "url('https://i.pinimg.com/originals/19/ee/db/19eedbadb87e07e7b9d518bd99edd0fb.jpg')",
            "url('https://i.pinimg.com/originals/e5/3d/9d/e53d9d6dddae858ea6888b3e04f91894.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/c0/d7/e7/c0d7e76d37ec528d68c472643eabd690.jpg')",
        audio: "https://feeds.soundcloud.com/stream/1493606932-corona-689894639-chika-noise-3.mp3",
        info: document.getElementsByTagName("p")[6].innerHTML
    },
    {
        personality: 8,
        appearance: 24,
        voice: 13,
        name: "Sanka Rea",
        anime: "Sankarea",
        avt: [
            "url('https://i.pinimg.com/originals/d0/ce/24/d0ce24e65b4a7ed1b0eb09dc7da74fe0.jpg')",
            "url('https://i.pinimg.com/originals/11/c4/69/11c4690809eb8f8aa805f35b4cd85dce.jpg')",
            "url('https://i.pinimg.com/originals/2b/e4/52/2be4521e9574f084dccaefa3680b292b.jpg')",
            "url('https://i.pinimg.com/originals/b7/ca/1a/b7ca1ad3a0f2a2daf36be53109d03cca.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/9b/79/a6/9b79a6de65abba2d53649d060bd7f2dd.jpg')",
        audio: "https://feeds.soundcloud.com/stream/1493606932-corona-689894639-chika-noise-3.mp3",
        info: document.getElementsByTagName("p")[7].innerHTML
    },
    {
        personality: 9,
        appearance: 6,
        voice: 16,
        name: "Kirisaki Chitoge",
        anime: "Nisekoi",
        avt: [
            "url('https://i.pinimg.com/originals/0d/3a/98/0d3a98964739aaf1e7621914140a1d74.jpg')",
            "url('https://i.pinimg.com/originals/16/0a/90/160a907c30f7b1d7277745c005eb341a.jpg')",
            "url('https://i.pinimg.com/originals/18/2d/0a/182d0ac30f89231693475ef631bb75bb.jpg')",
            "url('https://i.pinimg.com/originals/af/b1/63/afb163c430df89a017aed1474b69357d.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/94/c2/0d/94c20db370050018ce306856e44e23ad.jpg')",
        audio: "https://feeds.soundcloud.com/stream/1493606932-corona-689894639-chika-noise-3.mp3",
        info: document.getElementsByTagName("p")[8].innerHTML
    },
    {
        personality: 10,
        appearance: 13,
        voice: 14,
        name: "Isla",
        anime: "Plastic Memories",
        avt: [
            "url('https://i.pinimg.com/originals/b5/93/40/b5934057259d683141357f530ff5bbda.jpg')",
            "url('https://i.pinimg.com/originals/d2/c1/4f/d2c14f2829827365d80d02a4d459523f.jpg')",
            "url('https://i.pinimg.com/originals/a7/93/82/a793827af19fcd9056db5284f1914b29.jpg')",
            "url('https://i.pinimg.com/originals/4a/8b/1e/4a8b1ebd14c28a0b09601d90e21c61a6.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/72/0a/d7/720ad71ee9cb909f51d9648d3c09777d.jpg')",
        audio: "https://feeds.soundcloud.com/stream/1493606932-corona-689894639-chika-noise-3.mp3",
        info: document.getElementsByTagName("p")[9].innerHTML
    },
    {
        personality: 11,
        appearance: 16,
        voice: 9,
        name: "Tachibana Kanade",
        anime: "Angel Beats!",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[10].innerHTML
    },
    {
        personality: 12,
        appearance: 12,
        voice: 6,
        name: "Nakano Miku",
        anime: "Gotoubun no Hanayome",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[11].innerHTML
    },
    {
        personality: 13,
        appearance: 9,
        voice: 19,
        name: "Otosaka Ayumi",
        anime: "Charlotte",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[12].innerHTML
    },
    {
        personality: 14,
        appearance: 7,
        voice: 15,
        name: "Itsuka Kotori",
        anime: "Date A Live",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[13].innerHTML
    },
    {
        personality: 15,
        appearance: 4,
        voice: 22,
        name: "Hoshino Ruby",
        anime: "Oshi no Ko",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[14].innerHTML
    },
    {
        personality: 16,
        appearance: 20,
        voice: 25,
        name: "Iino Miko",
        anime: "Kaguya Sama: Love is War",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[15].innerHTML
    },
    {
        personality: 17,
        appearance: 17,
        voice: 20,
        name: "Emilia",
        anime: "Re:Zero",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[16].innerHTML
    },
    {
        personality: 18,
        appearance: 21,
        voice: 17,
        name: "Kuriyama Mirai",
        anime: "Kyoukai no Kanata",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[17].innerHTML
    },
    {
        personality: 19,
        appearance: 26,
        voice: 11,
        name: "Takanashi Rikka",
        anime: "Chuunibyou demo Koi ga Shitai!",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[18].innerHTML
    },
    {
        personality: 20,
        appearance: 8,
        voice: 28,
        name: "Nao Tomori",
        anime: "Charlotte",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[19].innerHTML
    },
    {
        personality: 21,
        appearance: 11,
        voice: 21,
        name: "Nakano Itsuki",
        anime: "Gotoubun no Hanayome",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[20].innerHTML
    },
    {
        personality: 22,
        appearance: 1,
        voice: 12,
        name: "Kurobane Yusa",
        anime: "Charlotte",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[21].innerHTML
    },
    {
        personality: 23,
        appearance: 3,
        voice: 7,
        name: "Illyasviel von Einzbern",
        anime: "Fate/Stay Night",
        avt: [
            "url('https://i.pinimg.com/originals/1b/36/8c/1b368c4a5da71c8637cef2e161fdab60.jpg')",
            "url('https://i.pinimg.com/originals/a4/17/17/a41717e430f20a2cdfa05896f99d8906.jpg')",
            "url('https://i.pinimg.com/originals/dc/c0/98/dcc0984a5f2f2cb15218317e1ea652cc.jpg')",
            "url('https://i.pinimg.com/originals/40/5a/af/405aafa6115504126fdcdbd58822bc8b.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/91/92/36/919236b1772a23bd465836898b2e5840.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: document.getElementsByTagName("p")[22].innerHTML
    },
    {
        personality: 24,
        appearance: 14,
        voice: 2,
        name: "Shiro",
        anime: "No Game No Life",
        avt: [
            "url('https://i.pinimg.com/originals/1b/36/8c/1b368c4a5da71c8637cef2e161fdab60.jpg')",
            "url('https://i.pinimg.com/originals/a4/17/17/a41717e430f20a2cdfa05896f99d8906.jpg')",
            "url('https://i.pinimg.com/originals/dc/c0/98/dcc0984a5f2f2cb15218317e1ea652cc.jpg')",
            "url('https://i.pinimg.com/originals/40/5a/af/405aafa6115504126fdcdbd58822bc8b.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/91/92/36/919236b1772a23bd465836898b2e5840.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: document.getElementsByTagName("p")[23].innerHTML
    },
    {
        personality: 25,
        appearance: 19,
        voice: 26,
        name: "Hayasaka Ai",
        anime: "Kaguya Sama: Love is War",
        avt: [
            "url('https://i.pinimg.com/originals/1b/36/8c/1b368c4a5da71c8637cef2e161fdab60.jpg')",
            "url('https://i.pinimg.com/originals/a4/17/17/a41717e430f20a2cdfa05896f99d8906.jpg')",
            "url('https://i.pinimg.com/originals/dc/c0/98/dcc0984a5f2f2cb15218317e1ea652cc.jpg')",
            "url('https://i.pinimg.com/originals/40/5a/af/405aafa6115504126fdcdbd58822bc8b.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/91/92/36/919236b1772a23bd465836898b2e5840.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: document.getElementsByTagName("p")[24].innerHTML
    },
    {
        personality: 26,
        appearance: 15,
        voice: 24,
        name: "Tohsaka Rin",
        anime: "Fate/ Stay Night",
        avt: [
            "url('https://i.pinimg.com/originals/1b/36/8c/1b368c4a5da71c8637cef2e161fdab60.jpg')",
            "url('https://i.pinimg.com/originals/a4/17/17/a41717e430f20a2cdfa05896f99d8906.jpg')",
            "url('https://i.pinimg.com/originals/dc/c0/98/dcc0984a5f2f2cb15218317e1ea652cc.jpg')",
            "url('https://i.pinimg.com/originals/40/5a/af/405aafa6115504126fdcdbd58822bc8b.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/91/92/36/919236b1772a23bd465836898b2e5840.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: document.getElementsByTagName("p")[25].innerHTML
    },
    {
        personality: 27,
        appearance: 22,
        voice: 29,
        name: "Saber",
        anime: "Fate/ Stay Night",
        avt: [
            "url('https://i.pinimg.com/originals/1b/36/8c/1b368c4a5da71c8637cef2e161fdab60.jpg')",
            "url('https://i.pinimg.com/originals/a4/17/17/a41717e430f20a2cdfa05896f99d8906.jpg')",
            "url('https://i.pinimg.com/originals/dc/c0/98/dcc0984a5f2f2cb15218317e1ea652cc.jpg')",
            "url('https://i.pinimg.com/originals/40/5a/af/405aafa6115504126fdcdbd58822bc8b.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/91/92/36/919236b1772a23bd465836898b2e5840.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: document.getElementsByTagName("p")[26].innerHTML
    },
    {
        personality: 28,
        appearance: 27,
        voice: 5,
        name: "Kaguya Shinomiya",
        anime: "Kaguya Sama: Love is War",
        avt: [
            "url('https://i.pinimg.com/originals/1b/36/8c/1b368c4a5da71c8637cef2e161fdab60.jpg')",
            "url('https://i.pinimg.com/originals/a4/17/17/a41717e430f20a2cdfa05896f99d8906.jpg')",
            "url('https://i.pinimg.com/originals/dc/c0/98/dcc0984a5f2f2cb15218317e1ea652cc.jpg')",
            "url('https://i.pinimg.com/originals/40/5a/af/405aafa6115504126fdcdbd58822bc8b.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/91/92/36/919236b1772a23bd465836898b2e5840.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: document.getElementsByTagName("p")[27].innerHTML
    },
    {
        personality: 29,
        appearance: 18,
        voice: 4,
        name: "Fuchiwara Chika",
        anime: "Kaguya Sama: Love is War",
        avt: [
            "url('https://i.pinimg.com/originals/1b/36/8c/1b368c4a5da71c8637cef2e161fdab60.jpg')",
            "url('https://i.pinimg.com/originals/a4/17/17/a41717e430f20a2cdfa05896f99d8906.jpg')",
            "url('https://i.pinimg.com/originals/dc/c0/98/dcc0984a5f2f2cb15218317e1ea652cc.jpg')",
            "url('https://i.pinimg.com/originals/40/5a/af/405aafa6115504126fdcdbd58822bc8b.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/91/92/36/919236b1772a23bd465836898b2e5840.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: document.getElementsByTagName("p")[28].innerHTML
    },
    {
        personality: 30,
        appearance: 10,
        voice: 23,
        name: "Chitanda Eru",
        anime: "Hyouka",
        avt: [
            "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
            "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
            "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
            "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/e3/f1/b0/e3f1b05ad0f82c6b048e6a58b27b5d2a.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: document.getElementsByTagName("p")[29].innerHTML
    }
]
var arr = [
    new Int16Array(30), //0: personality
    new Int16Array(30), //1: appearance
    new Int16Array(30)  //2: voice
];
var type = 0; 
//load current status
var currentType = localStorage.getItem('type');
var currentAvts = JSON.parse(localStorage.getItem('arr'));
arr = currentAvts;
if(currentType == 0){type = 0; char.sort(function(a, b){return (a.personality - b.personality)});}
else if (currentType == 1){type = 1; char.sort(function(a, b){return (a.appearance - b.appearance)});}
else if (currentType == 2){type = 2; char.sort(function(a, b){return (a.voice - b.voice)});}
for (var i = 0; i < char.length; i++){
    document.getElementsByTagName("h3")[i].innerHTML = char[i].name;
    document.getElementsByTagName("h4")[i].innerHTML = char[i].anime;
    document.getElementsByClassName("avt")[i].style.backgroundImage = char[i].avt[arr[type][i]];
    document.getElementsByClassName("switch-circle")[i].style.backgroundImage = char[i].avt[arr[type][i]];
    document.getElementsByTagName("p")[i].innerHTML = char[i].info;
}
//sort type
function Personality(){type = 0; localStorage.setItem('type', type); Sort();}
function Appearance(){type = 1; localStorage.setItem('type', type); Sort();}
function Voice(){type = 2; localStorage.setItem('type', type); Sort();}
function Sort(){
    document.getElementById("loadscreen").style.display = "block";
    setInterval(function(){document.getElementById("wait").innerHTML += '.';}, 300);
    setTimeout(function(){
        location.reload();
        document.getElementById("loadscreen").style.display = "none";
        if(type == 0){char.sort(function(a, b){return (a.personality - b.personality)});}
        else if (type == 1){char.sort(function(a, b){return (a.appearance - b.appearance)});}
        else if (type == 2){char.sort(function(a, b){return (a.voice - b.voice)});}
        for (var i = 0; i < char.length; i++){
            document.getElementsByTagName("h3")[i].innerHTML = char[i].name;
            document.getElementsByTagName("h4")[i].innerHTML = char[i].anime;
            document.getElementsByClassName("avt")[i].style.backgroundImage = char[i].avt[arr[type][i]];
            document.getElementsByClassName("switch-circle")[i].style.backgroundImage = char[i].avt[arr[type][i]];
            document.getElementsByTagName("p")[i].innerHTML = char[i].info;
        }
    }, 1000);
}
//change bg
function changeBG(index){
    var check = document.getElementsByTagName("input")[index].checked;
    if(check == true){
        document.getElementsByTagName("audio")[0].src = char[index].audio;
        document.getElementsByTagName("audio")[0].play();
        setTimeout(function(){document.body.style.backgroundImage = char[index].bg;}, 300);
        for(var i = 0; i < char.length; i++){
            if(i != index) {document.getElementsByTagName("input")[i].checked = false;} //turn off other switches
        }
    }
    else {setTimeout(function(){document.body.style.backgroundImage = 'none';}, 300);} 
}
//change avt
function changeAvt(index){
    document.getElementsByClassName("avt")[index].classList.remove("changeavt");
    void document.getElementsByClassName("avt")[index].offsetWidth; //trigger reflow
    document.getElementsByClassName("avt")[index].classList.add("changeavt");
    if(arr[type][index] == 3) {arr[type][index] = -1;}
    arr[type][index]++;
    setTimeout(function(){
    document.getElementsByClassName("avt")[index].style.backgroundImage = char[index].avt[arr[type][index]];
    document.getElementsByClassName("switch-circle")[index].style.backgroundImage = char[index].avt[arr[type][index]];
    }, 900);
    //update avt array
    arr[0][char[index].personality - 1] = arr[type][index];
    arr[1][char[index].appearance - 1] = arr[type][index];
    arr[2][char[index].voice - 1] = arr[type][index];
    localStorage.setItem('arr', JSON.stringify(arr));
}
//sort option
const sort_selector = document.querySelector('.custom-sort');
const sort_select = sort_selector.children[1]; //exclude children 0 which is the div arrow
sort_select.value = localStorage.getItem('sort-select-value');
if(sort_select.value == ''){sort_select.value = 0;} //set value to 0 if empty localStorage
var sort_click_count = 0;
sort_selector.addEventListener('mousedown', e => {
    e.preventDefault();
    sort_click_count++;
    const sort_select = sort_selector.children[1]; //exclude children 0 which is the div arrow
    const dropDown = document.createElement('ul');
    dropDown.className = 'dropdown-option';
    var i = 0;
    function CreateOption(){
        setTimeout(function(){
        const option = [...sort_select.children][i];
        const dropDownOption = document.createElement('li');
        dropDownOption.textContent = option.textContent;
        dropDownOption.addEventListener('mousedown', e => {
            e.stopPropagation();
            if (option.value == 0) {Personality();}
            else if (option.value == 1) {Appearance();}
            else if (option.value == 2) {Voice();}
            sort_select.value = option.value;
            localStorage.setItem('sort-select-value', option.value);
            dropDown.remove();
        })
        //dropdown animation
        dropDown.appendChild(dropDownOption);
        dropDownOption.classList.remove("open-option");
        void dropDownOption.offsetWidth; //trigger reflow
        dropDownOption.classList.add("open-option");
        i++;
        if(i < 3){CreateOption();}
        }, 50);
    }
    CreateOption();
    sort_selector.appendChild(dropDown);
    //close dropdown when clicking outside
    document.addEventListener('click', e => {
        if((sort_click_count % 2 == 0) || !sort_selector.contains(e.target)){
            if(document.getElementsByClassName("arrow")[1].classList.contains("rotate-arrow-down") == false){
                document.getElementsByClassName("arrow")[1].classList.remove("rotate-arrow-up");
                void document.getElementsByClassName("arrow")[1].offsetWidth; //trigger reflow
                document.getElementsByClassName("arrow")[1].classList.add("rotate-arrow-down");
                sort_click_count++;
            }
            dropDown.remove();
        }
    })
    //arrow animation
    if(document.getElementsByClassName("arrow")[1].classList.contains("rotate-arrow-up") == false){
        document.getElementsByClassName("arrow")[1].classList.remove("rotate-arrow-down");
        void document.getElementsByClassName("arrow")[1].offsetWidth; //trigger reflow
        document.getElementsByClassName("arrow")[1].classList.add("rotate-arrow-up");
    }
    else if (document.getElementsByClassName("arrow")[1].classList.contains("rotate-arrow-down") == false){
        document.getElementsByClassName("arrow")[1].classList.remove("rotate-arrow-up");
        void document.getElementsByClassName("arrow")[1].offsetWidth; //trigger reflow
        document.getElementsByClassName("arrow")[1].classList.add("rotate-arrow-down");
    }
})

/*shared section (for every pages)*/
//open menu
function openNav(){
    document.getElementById("menu").style.display = "block";
    document.getElementsByClassName("navbar")[0].classList.remove("close-navbar");
    void document.getElementsByClassName("navbar")[0].offsetWidth; //trigger reflow
    document.getElementsByClassName("navbar")[0].classList.add("open-navbar");
}
//close menu
function closeNav(){
    setTimeout(function() {document.getElementById("menu").style.display = "none";}, 300);
    document.getElementsByClassName("navbar")[0].classList.remove("open-navbar");
    void document.getElementsByClassName("navbar")[0].offsetWidth; //trigger reflow
    document.getElementsByClassName("navbar")[0].classList.add("close-navbar");
}
document.addEventListener('click', e => {
    if(document.querySelector("#menu").contains(e.target) && !document.querySelector(".navbar").contains(e.target)){
        setTimeout(function() {document.getElementById("menu").style.display = "none";}, 300);
        document.getElementsByClassName("navbar")[0].classList.remove("open-navbar");
        void document.getElementsByClassName("navbar")[0].offsetWidth; //trigger reflow
        document.getElementsByClassName("navbar")[0].classList.add("close-navbar");
    }
})
//jump to top
let mybutton = document.getElementById("jump-to-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
function backtoTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//change theme
var loadBG = parseInt(localStorage.getItem("bg"));
if(loadBG == 0){
    document.getElementsByTagName("body")[0].style.backgroundImage = "none";
    document.documentElement.style.setProperty('--cherryblossom', 'none');
    document.documentElement.style.setProperty('--color1', 'white');
    document.documentElement.style.setProperty('--color2', 'black');
    document.documentElement.style.setProperty('--color3', 'rgb(147, 224, 255)');
    document.documentElement.style.setProperty('--color4', 'aliceblue');
    document.documentElement.style.setProperty('--switchcolor', '#cefaf8');
    document.documentElement.style.setProperty('--hovercolor', 'rgb(70, 157, 228)');
    document.getElementById("menuIcon").src = "listLight.png";
    for(var i = 0; i < char.length; i++){document.getElementsByClassName("link")[i].src = "linkLight.png";}
}
else if (loadBG == 1){
    document.getElementsByTagName("body")[0].style.backgroundImage = "none";
    document.documentElement.style.setProperty('--cherryblossom', 'none');
    document.documentElement.style.setProperty('--color1', 'black');
    document.documentElement.style.setProperty('--color2', 'white');
    document.documentElement.style.setProperty('--color3', 'rgb(30, 62, 75)');
    document.documentElement.style.setProperty('--color4', 'rgba(135, 167, 172, 0.925)');
    document.documentElement.style.setProperty('--switchcolor', '#8d8d8d');
    document.documentElement.style.setProperty('--hovercolor', 'rgb(220, 221, 243)');
    document.getElementById("menuIcon").src = "listDark.png";
    for(var i = 0; i < char.length; i++){document.getElementsByClassName("link")[i].src = "linkDark.png";}
}
else if (loadBG == 2){
    document.getElementsByTagName("body")[0].style.backgroundImage = "none";
    document.documentElement.style.setProperty('--cherryblossom', 'block');
    document.documentElement.style.setProperty('--color1', 'rgba(250, 206, 246, 0.829)');
    document.documentElement.style.setProperty('--color2', 'rgb(223, 14, 129)');
    document.documentElement.style.setProperty('--color3', 'rgb(238, 172, 239)');
    document.documentElement.style.setProperty('--color4', 'rgba(255, 232, 253, 0.8)');
    document.documentElement.style.setProperty('--switchcolor', '#fccbf5');
    document.documentElement.style.setProperty('--hovercolor', 'rgb(185, 71, 185)');
    document.getElementById("menuIcon").src = "listSakura.png";
    for(var i = 0; i < char.length; i++){document.getElementsByClassName("link")[i].src = "linkSakura.png";}
}
var Theme_click_count = 0;
function ChangeTheme(value){
    if(value == 0){
        document.getElementsByTagName("body")[0].style.backgroundImage = "none";
        document.documentElement.style.setProperty('--cherryblossom', 'none');
        document.documentElement.style.setProperty('--color1', 'white');
        document.documentElement.style.setProperty('--color2', 'black');
        document.documentElement.style.setProperty('--color3', 'rgb(147, 224, 255)');
        document.documentElement.style.setProperty('--color4', 'aliceblue');
        document.documentElement.style.setProperty('--switchcolor', '#cefaf8');
        document.documentElement.style.setProperty('--hovercolor', 'rgb(70, 157, 228)');
        document.getElementById("menuIcon").src = "listLight.png";
        for(var i = 0; i < char.length; i++){document.getElementsByClassName("link")[i].src = "linkLight.png";}
    }
    else if (value == 1){
        document.getElementsByTagName("body")[0].style.backgroundImage = "none";
        document.documentElement.style.setProperty('--cherryblossom', 'none');
        document.documentElement.style.setProperty('--color1', 'black');
        document.documentElement.style.setProperty('--color2', 'white');
        document.documentElement.style.setProperty('--color3', 'rgb(30, 62, 75)');
        document.documentElement.style.setProperty('--color4', 'rgba(135, 167, 172, 0.925)');
        document.documentElement.style.setProperty('--switchcolor', '#8d8d8d');
        document.documentElement.style.setProperty('--hovercolor', 'rgb(220, 221, 243)');
        document.getElementById("menuIcon").src = "listDark.png";
        for(var i = 0; i < char.length; i++){document.getElementsByClassName("link")[i].src = "linkDark.png";}
    }
    else if (value == 2){
        document.getElementsByTagName("body")[0].style.backgroundImage = "none";
        document.documentElement.style.setProperty('--cherryblossom', 'block');
        document.documentElement.style.setProperty('--color1', 'rgba(250, 206, 246, 0.829)');
        document.documentElement.style.setProperty('--color2', 'rgb(223, 14, 129)');
        document.documentElement.style.setProperty('--color3', 'rgba(238, 172, 239, 1)');
        document.documentElement.style.setProperty('--color4', 'rgba(255, 232, 253, 0.8)');
        document.documentElement.style.setProperty('--switchcolor', '#fccbf5');
        document.documentElement.style.setProperty('--hovercolor', 'rgb(185, 71, 185)');
        document.getElementById("menuIcon").src = "listSakura.png";
        for(var i = 0; i < char.length; i++){document.getElementsByClassName("link")[i].src = "linkSakura.png";}
    }
    if (document.getElementsByClassName("arrow")[0].classList.contains("rotate-arrow-down") == false){
        document.getElementsByClassName("arrow")[0].classList.remove("rotate-arrow-up");
        void document.getElementsByClassName("arrow")[0].offsetWidth; //trigger reflow
        document.getElementsByClassName("arrow")[0].classList.add("rotate-arrow-down");
    }
    localStorage.setItem("bg", value);
    Theme_click_count++;
    for(var i = 0; i < char.length; i++){document.getElementsByTagName("input")[i].checked = false;} //turn off switches
}
const theme_selector = document.querySelector('.theme-option');
const theme_select = theme_selector.children[1]; //exclude children 0 which is the div arrow
theme_select.value = localStorage.getItem('Theme-select-value');
if(theme_select.value == ''){theme_select.value = 0;} //set value to 0 if empty localStorage
theme_selector.addEventListener('mousedown', e => {
    e.preventDefault();
    Theme_click_count++;
    const theme_select = theme_selector.children[1]; //exclude children 0 which is the div arrow
    const dropDown = document.createElement('ul');
    dropDown.className = 'dropdown-option';
    var i = 0;
    function CreateOption(){
        setTimeout(function(){
        const option = [...theme_select.children][i];
        const dropDownOption = document.createElement('li');
        dropDownOption.textContent = option.textContent;
        if(i == 0){dropDownOption.style.color = "white"; dropDownOption.style.textShadow = "3px 3px 5px rgba(228, 228, 228, 0.973)";}
        else if(i == 1){dropDownOption.style.color = "black"; dropDownOption.style.textShadow = "1px 1px 5px rgba(92, 88, 88, 0.973)";}
        else if(i == 2){dropDownOption.style.color = "rgb(228, 103, 124)"; dropDownOption.style.textShadow = "1px 1px 5px rgba(241, 9, 199, 0.973)";}
        dropDownOption.addEventListener('mousedown', e => {
            e.stopPropagation();
            if (option.value == 0) {ChangeTheme(0);}
            else if (option.value == 1) {ChangeTheme(1);}
            else if (option.value == 2) {ChangeTheme(2);}
            theme_select.value = option.value;
            localStorage.setItem('Theme-select-value', option.value);
            dropDown.remove();
        })
        //dropdown animation
        dropDown.appendChild(dropDownOption);
        dropDownOption.classList.remove("open-option");
        void dropDownOption.offsetWidth; //trigger reflow
        dropDownOption.classList.add("open-option");
        i++;
        if(i < 3){CreateOption();}
        }, 50);
    }
    CreateOption();
    theme_selector.appendChild(dropDown);
    //close dropdown when clicking outside
    document.addEventListener('click', e => {
        if((Theme_click_count % 2 == 0) || !theme_selector.contains(e.target)){
            if(document.getElementsByClassName("arrow")[0].classList.contains("rotate-arrow-down") == false){
                document.getElementsByClassName("arrow")[0].classList.remove("rotate-arrow-up");
                void document.getElementsByClassName("arrow")[0].offsetWidth; //trigger reflow
                document.getElementsByClassName("arrow")[0].classList.add("rotate-arrow-down");
                Theme_click_count++;
            }
            dropDown.remove();
        }
    })
    //arrow animation
    if(document.getElementsByClassName("arrow")[0].classList.contains("rotate-arrow-up") == false){
        document.getElementsByClassName("arrow")[0].classList.remove("rotate-arrow-down");
        void document.getElementsByClassName("arrow")[0].offsetWidth; //trigger reflow
        document.getElementsByClassName("arrow")[0].classList.add("rotate-arrow-up");
    }
    else if (document.getElementsByClassName("arrow")[0].classList.contains("rotate-arrow-down") == false){
        document.getElementsByClassName("arrow")[0].classList.remove("rotate-arrow-up");
        void document.getElementsByClassName("arrow")[0].offsetWidth; //trigger reflow
        document.getElementsByClassName("arrow")[0].classList.add("rotate-arrow-down");
    }
})
